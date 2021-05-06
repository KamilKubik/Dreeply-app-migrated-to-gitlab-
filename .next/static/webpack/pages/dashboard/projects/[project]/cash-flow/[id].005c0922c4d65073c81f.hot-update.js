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
/* harmony import */ var react_device_detect__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-device-detect */ "./node_modules/react-device-detect/main.js");
/* harmony import */ var react_device_detect__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_device_detect__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! js-cookie */ "./node_modules/js-cookie/src/js.cookie.js");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _components_dashboard_startup_project_business_app_competitors_UniqueElement__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../components/dashboard/startup/project/business-app/competitors/UniqueElement */ "./components/dashboard/startup/project/business-app/competitors/UniqueElement.js");
/* harmony import */ var _components_BounceLoader__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../components/BounceLoader */ "./components/BounceLoader.js");
/* harmony import */ var _utils_useWindowSize__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../utils/useWindowSize */ "./utils/useWindowSize.js");
/* harmony import */ var react_datepicker__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-datepicker */ "./node_modules/react-datepicker/dist/react-datepicker.min.js");
/* harmony import */ var react_datepicker__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_datepicker__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/esm/index.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_12__);





var _jsxFileName = "C:\\off-saas\\pages\\dashboard\\projects\\[project]\\cash-flow\\[id].js",
    _this = undefined,
    _s = $RefreshSig$();













var UniqueCashflowPage = function UniqueCashflowPage(_ref) {
  _s();

  var project = _ref.project;
  console.log('Particular project --> ', project);

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(new Date()),
      startDate = _useState[0],
      setStartDate = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(new Date()),
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

  var size = Object(_utils_useWindowSize__WEBPACK_IMPORTED_MODULE_9__["useWindowSize"])(); // Sum data

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

  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_5__["useRouter"])();
  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    project && setSelectedProject(project[0]);
    project && setRevenueElements(project[0].revenueElements);
    project && setCostsElements(project[0].costsElements);
    project && setPeriods(project[0].periods);
    project && setTax(project[0].tax); // Sum data
    // Global start date

    var changedStartDate = project[0].globalStartDate._seconds * 1000;
    console.log(changedStartDate);
    project[0].globalStartDate !== '' && setStartDate(new Date(changedStartDate));
    var changedEndDate = project[0].globalEndDate._seconds * 1000; // Global end date

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
  // Chart

  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    // const myChartRef = chartRef.current.getContext('2d');
    document.getElementById("chartContainer").innerHTML = '&nbsp;';
    document.getElementById("chartContainer").innerHTML = "<canvas height='".concat(size.width > 680 ? 75 : 'unset', "' id='chart'></canvas>");
    var myChartRef = document.getElementById('chart').getContext('2d'); // Revenue datasets

    var revenueDataset = [];
    var testArray = []; // const monthData = periods && periods.map(() => null);

    revenueElements && revenueElements.map(function (revenueElement, index) {
      var monthData = periods && periods.map(function () {
        return null;
      });
      console.log(revenueElement);
      periods && periods.map(function (period, periodIndex) {
        revenueElement.periods.map(function (revenuePeriod) {
          if (period == revenuePeriod) {
            if (monthData[periodIndex] == null) {
              monthData[periodIndex] = revenueElement.value;
            }
          }
        });
      });
      console.log(monthData);
      testArray.push(monthData);
      revenueDataset.push({
        label: "revenue / ".concat(revenueElement.title),
        data: monthData,
        backgroundColor: revenueElement.color,
        borderColor: revenueElement.color
      });
    }); // Costs datasets

    var costsDataset = [];
    costsElements && costsElements.map(function (costsElement, index) {
      var monthData = periods && periods.map(function () {
        return null;
      });
      console.log(costsElement);
      periods && periods.map(function (period, periodIndex) {
        costsElement.periods.map(function (costsPeriod) {
          if (period == costsPeriod) {
            if (monthData[periodIndex] == null) {
              monthData[periodIndex] = -costsElement.value;
            }
          }
        });
      });
      console.log(monthData);
      testArray.push(monthData);
      costsDataset.push({
        label: "costs / ".concat(costsElement.title),
        data: monthData,
        backgroundColor: costsElement.color,
        borderColor: costsElement.color
      });
    }); // ----------------------
    // Revenue

    var revenueArray = [];
    revenueDataset.length !== 0 && revenueDataset.length !== 0 && revenueDataset.map(function (element) {
      return revenueArray.push(element.data && element.data.map(function (data) {
        if (data !== null) {
          return parseInt(data);
        } else {
          return 0;
        }
      }));
    });
    console.log(revenueArray);
    var calculatedRevenueArray = revenueArray.length !== 0 && revenueArray[0] !== undefined && revenueArray.reduce(function (a, b) {
      return a.map(function (c, i) {
        return c + b[i];
      });
    });
    console.log(calculatedRevenueArray); // Costs

    var costsArray = [];
    console.log(costsDataset);
    costsDataset.length !== 0 && costsDataset.length !== 0 && costsDataset.map(function (element) {
      return costsArray.push(element.data && element.data.map(function (data) {
        if (data !== null) {
          return parseInt(data);
        } else {
          return 0;
        }
      }));
    });
    console.log(costsArray);
    var calculatedCostsArray = costsArray.length !== 0 && costsArray[0] !== undefined && costsArray.reduce(function (a, b) {
      return a.map(function (c, i) {
        return c + b[i];
      });
    });
    console.log(calculatedCostsArray); // Final value

    var finalArray = [calculatedRevenueArray, calculatedCostsArray];
    console.log(finalArray); // Check if any array is falsy

    var calculatedFinalArray = finalArray && finalArray.map(function (array) {
      if (!array) {
        var zeroArray = [];
        periods && periods.map(function (period) {
          return zeroArray.push(0);
        });
        return zeroArray;
      } else {
        return array;
      }
    });
    console.log(calculatedFinalArray);
    var finalDataBeforeTax = calculatedFinalArray.length !== 0 && calculatedFinalArray.reduce(function (a, b) {
      return a && b && a.map(function (c, i) {
        return c + b[i];
      });
    });
    var finalDataAfterTax = finalDataBeforeTax && finalDataBeforeTax.map(function (data) {
      return data - tax / 100 * data;
    });
    console.log(finalDataAfterTax);
    var netWorthArray = [];
    var netWorth = revenueDataset.length !== 0 && costsDataset.length !== 0 && revenueDataset && revenueDataset.map(function (revenueElement, index) {
      var value = revenueElement.data && revenueElement.data.map(function (dataElement, revenueElementIndex) {
        console.log(dataElement);

        if (dataElement !== null && costsDataset[index]) {
          if (costsDataset[index].data[revenueElementIndex]) {
            var _grossProfit = dataElement - -costsDataset[0].data[revenueElementIndex];

            netWorthArray.push(_grossProfit - tax / 100 * _grossProfit); // return grossProfit - (tax / 100) * grossProfit;
          }
        }
      });
      return value;
    });
    new Chart(myChartRef, {
      type: 'bar',
      data: {
        labels: periods && periods,
        datasets: [{
          type: 'line',
          label: 'Net profit',
          data: finalDataAfterTax,
          backgroundColor: 'rgba(10, 18, 48, 1)',
          borderColor: 'rgba(10, 18, 48, 1)',
          fill: 0,
          lineTension: 0,
          borderWidth: size.width < 680 ? 1 : 3,
          pointRadius: size.width < 680 ? 2 : 3
        }].concat(revenueDataset, costsDataset)
      },
      options: {
        skipNull: true,
        responsive: true,
        plugins: {
          legend: {
            position: 'right',
            labels: {
              fontFamily: 'Comfortaa',
              font: {
                size: size.width < 680 ? 8 : 12
              },
              boxWidth: size.width < 680 ? 10 : 40
            }
          }
        },
        scales: {
          x: {
            stacked: true,
            ticks: {
              fontFamily: 'Comfortaa',
              beginAtZero: true,
              font: {
                size: size.width < 680 ? 8 : 12
              }
            } // beginAtZero: true,

          },
          y: {
            stacked: true,
            ticks: {
              fontFamily: 'Comfortaa',
              beginAtZero: true,
              font: {
                size: size.width < 680 ? 8 : 12
              }
            } // beginAtZero: true,

          }
        }
      }
    });
  }, [periods, revenueElements, costsElements, tax]);

  if (router.isFallback) {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_BounceLoader__WEBPACK_IMPORTED_MODULE_8__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 289,
      columnNumber: 12
    }, _this);
  }

  console.log(startDate);
  console.log(endDate);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: "min-h-screen w-full relative flex flex-col items-center",
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "w-full max-w-full relative mt-12 lg1Container:mt-16 mb-16 px-32",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "relative grid grid-cols-2 grid-rows-1 grid-flow-col",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "flex items-center",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("svg", {
            height: size.width > 860 && 30 || size.width < 860 && size.width > 680 && 26 || size.width < 680 && 22,
            width: size.width > 860 && 30 || size.width < 860 && size.width > 680 && 26 || size.width < 680 && 22,
            className: "fill-current text-primary dark:text-primarydark",
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 128 128",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("title", {
              children: "Landing Success"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 306,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("g", {
              id: "Landing_Success",
              "data-name": "Landing Success",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
                className: "cls-1",
                d: "M109.3,90.1A46,46,0,0,0,65,36V20.08c1.78-.62,7.21-2.14,12.57.23a19.33,19.33,0,0,0,14.82,0c.87-.38.61.31.61-17.93a1,1,0,0,0-1.43-.93c-.07,0-6.69,2.87-13.18,0A19.41,19.41,0,0,0,65,.93,1,1,0,0,0,63,1V36a45.86,45.86,0,0,0-28.66,10.8C16.18,40.48,4,40,.79,45.51-2.29,50.86,3.94,59.3,10,65.68A11,11,0,0,0,18,83c.81,38.41,46.08,59.2,75.66,34.21,8.53,3,29,9.15,33.55,1.31C130.39,113,123.86,102.65,109.3,90.1ZM77.59,3.31A19.39,19.39,0,0,0,91,3.83V18.68c-1.79.62-7.22,2.13-12.57-.23A19.19,19.19,0,0,0,65,17.93V3.08C66.81,2.46,72.24,1,77.59,3.31ZM65,45v-7c39.69.91,58,50.27,28.21,76.81C71.32,107,46,92.66,27.77,78.64a11,11,0,0,0-3.2-16.13A43.88,43.88,0,0,1,63,38.06V45A1,1,0,0,0,65,45ZM32.55,48.36a46.21,46.21,0,0,0-9.83,13.28,10.93,10.93,0,0,0-11.4,2.47C-8.39,43.23,5.23,39.08,32.55,48.36ZM10,72a9,9,0,1,1,9,9A9,9,0,0,1,10,72Zm10,11a11,11,0,0,0,6.34-2.82c18.45,14.21,43.45,28.35,65.05,36.22C63,139.16,20.83,119.1,20.05,83Zm105.4,34.5c-2.51,4.35-14,3.62-30-1.85a45.61,45.61,0,0,0,13.42-23.21C121.59,103.58,128,113.12,125.45,117.47Z"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 308,
                columnNumber: 17
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 307,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 299,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            className: "text-primarydark text-lg mdContainer:text-xl lgContainer:text-2xl mt-2 pl-2 dark:text-background",
            children: "Cash flow analysis"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 314,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 298,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 297,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
          className: "text-secondary text-xs mdContainer:text-sm lgContainer:text-base text-gray relative -top-1 lgContainer:top-0",
          children: "Manage your startup cash flow"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 320,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 319,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "w-full grid grid-cols-2fr grid-rows-1fr lgContainer:grid-cols-3fr lgContainer:grid-rows-1fr gap-y-8 gap-x-6 smContainer:gap-x-32 mdContainer:gap-x-12 mt-12",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          id: "main-datepicker",
          className: "w-full bg-white rounded-2xl py-3 px-3 mdContainer:py-3 mdContainer:px-4 lgContainer:px-6 lgContainer:py-4 shadow-md grid grid-cols-2fr items-center text-xs mdContainer:text-sm lgContainer:text-base",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "flex items-center",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
              src: "/cash-flow/calendar.svg",
              height: size.width > 860 && 25 || size.width < 860 && size.width > 680 && 22 || size.width < 680 && 18,
              width: size.width > 860 && 25 || size.width < 860 && size.width > 680 && 22 || size.width < 680 && 18
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 330,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
              className: "ml-2 text-primarydark",
              children: "Start:"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 335,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 329,
            columnNumber: 13
          }, _this), startDate && !react_device_detect__WEBPACK_IMPORTED_MODULE_4__["isMobile"] ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_datepicker__WEBPACK_IMPORTED_MODULE_10___default.a, {
            selected: startDate // onChange={(date) => onStartDateUpdate(date)}
            ,
            dateFormat: "MMMM yyyy",
            showMonthYearPicker: true,
            maxDate: Object(date_fns__WEBPACK_IMPORTED_MODULE_11__["addYears"])(new Date(), 3),
            minDate: new Date()
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 338,
            columnNumber: 15
          }, _this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_datepicker__WEBPACK_IMPORTED_MODULE_10___default.a, {
            selected: startDate // onChange={(date) => onStartDateUpdate(date)}
            ,
            dateFormat: "MMMM yyyy",
            showMonthYearPicker: true,
            maxDate: Object(date_fns__WEBPACK_IMPORTED_MODULE_11__["addYears"])(new Date(), 3),
            minDate: new Date(),
            withPortal: true
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 347,
            columnNumber: 15
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 325,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          id: "main-datepicker",
          className: "w-full bg-white rounded-2xl py-3 px-3 mdContainer:py-3 mdContainer:px-4 lgContainer:px-6 lgContainer:py-4 shadow-md grid grid-cols-2fr items-center text-xs mdContainer:text-sm lgContainer:text-base",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "flex items-center",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
              src: "/cash-flow/hourglass1.svg",
              height: size.width > 860 && 25 || size.width < 860 && size.width > 680 && 22 || size.width < 680 && 18,
              width: size.width > 860 && 25 || size.width < 860 && size.width > 680 && 22 || size.width < 680 && 18
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 363,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
              className: "ml-2 text-primarydark",
              children: "End:"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 368,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 362,
            columnNumber: 13
          }, _this), endDate && !react_device_detect__WEBPACK_IMPORTED_MODULE_4__["isMobile"] ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_datepicker__WEBPACK_IMPORTED_MODULE_10___default.a, {
            selected: endDate // onChange={(date) => onEndDateUpdate(date)}
            ,
            dateFormat: "MMMM yyyy",
            showMonthYearPicker: true,
            maxDate: Object(date_fns__WEBPACK_IMPORTED_MODULE_11__["addYears"])(new Date(), 3),
            minDate: new Date()
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 371,
            columnNumber: 15
          }, _this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_datepicker__WEBPACK_IMPORTED_MODULE_10___default.a, {
            selected: endDate // onChange={(date) => onEndDateUpdate(date)}
            ,
            dateFormat: "MMMM yyyy",
            showMonthYearPicker: true,
            maxDate: Object(date_fns__WEBPACK_IMPORTED_MODULE_11__["addYears"])(new Date(), 3),
            minDate: new Date(),
            withPortal: true
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 380,
            columnNumber: 15
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 358,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          style: {
            width: size.width > 860 && '100%' || size.width < 860 && size.width > 680 && '47%' || size.width < 680 && size.width > 520 && '40%' || size.width < 520 && '47%',
            gridColumnStart: size.width < 860 ? '1' : 'unset',
            gridColumnEnd: size.width < 860 ? '3' : 'unset'
          },
          className: "place-self-center bg-white rounded-2xl py-3 px-3 mdContainer:py-3 mdContainer:px-4 lgContainer:px-6 lgContainer:py-4 shadow-md grid grid-cols-2fr items-center text-xs mdContainer:text-sm lgContainer:text-base",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "flex items-center",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
              src: "/cash-flow/tax.svg",
              height: size.width > 860 && 25 || size.width < 860 && size.width > 680 && 22 || size.width < 680 && 18,
              width: size.width > 860 && 25 || size.width < 860 && size.width > 680 && 22 || size.width < 680 && 18
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 404,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
              className: "ml-2",
              children: "Tax:"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 409,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 403,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "flex",
            style: {
              textAlignLast: 'right'
            },
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
              id: "tax-input",
              value: tax,
              className: "w-full bg-white focus:outline-none"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 412,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
              children: "%"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 413,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 411,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 391,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 324,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        id: "chartContainer",
        className: "w-full h-1/2 p-4 mdContainer:p-8 bg-white rounded-2xl mt-12 shadow-md"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 417,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "w-full grid grid-cols-2fr grid-rows-3fr lg1Container:grid-cols-3fr lg1Container:grid-rows-2fr gap-x-6 smContainer:gap-x-12 gap-y-8 mt-12",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "w-full bg-white rounded-2xl py-3 px-3 mdContainer:py-3 mdContainer:px-4 lgContainer:px-6 lgContainer:py-4 shadow-md flex justify-between items-center text-xs mdContainer:text-sm lgContainer:text-base",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "flex items-center",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
              src: "/cash-flow/revenue.svg",
              height: size.width > 860 && 25 || size.width < 860 && size.width > 680 && 22 || size.width < 680 && 18,
              width: size.width > 860 && 25 || size.width < 860 && size.width > 680 && 22 || size.width < 680 && 18
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 423,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
              className: "ml-2",
              children: "Total revenue:"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 428,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 422,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            children: ["$", totalRevenue]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 430,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 421,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "w-full bg-white rounded-2xl py-3 px-3 mdContainer:py-3 mdContainer:px-4 lgContainer:px-6 lgContainer:py-4 shadow-md flex justify-between items-center text-xs mdContainer:text-sm lgContainer:text-base",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "flex items-center",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
              src: "/cash-flow/monthly.svg",
              height: size.width > 860 && 25 || size.width < 860 && size.width > 680 && 22 || size.width < 680 && 18,
              width: size.width > 860 && 25 || size.width < 860 && size.width > 680 && 22 || size.width < 680 && 18
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 434,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
              className: "ml-2",
              children: "Monthly revenue:"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 439,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 433,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            children: ["$", monthlyRevenue]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 441,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 432,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "w-full bg-white rounded-2xl py-3 px-3 mdContainer:py-3 mdContainer:px-4 lgContainer:px-6 lgContainer:py-4 shadow-md flex justify-between items-center text-xs mdContainer:text-sm lgContainer:text-base",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "flex items-center",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
              src: "/cash-flow/costs.svg",
              height: size.width > 860 && 25 || size.width < 860 && size.width > 680 && 22 || size.width < 680 && 18,
              width: size.width > 860 && 25 || size.width < 860 && size.width > 680 && 22 || size.width < 680 && 18
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 445,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
              className: "ml-2",
              children: "Total costs:"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 450,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 444,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            children: ["$", totalCosts]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 452,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 443,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "w-full bg-white rounded-2xl py-3 px-3 mdContainer:py-3 mdContainer:px-4 lgContainer:px-6 lgContainer:py-4 shadow-md flex justify-between items-center text-xs mdContainer:text-sm lgContainer:text-base",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "flex items-center",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
              src: "/cash-flow/monthly-costs.svg",
              height: size.width > 860 && 25 || size.width < 860 && size.width > 680 && 22 || size.width < 680 && 18,
              width: size.width > 860 && 25 || size.width < 860 && size.width > 680 && 22 || size.width < 680 && 18
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 456,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
              className: "ml-2",
              children: "Monthly costs:"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 461,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 455,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            children: ["$", monthlyCosts]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 463,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 454,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "w-full bg-white rounded-2xl py-3 px-3 mdContainer:py-3 mdContainer:px-4 lgContainer:px-6 lgContainer:py-4 shadow-md flex justify-between items-center text-xs mdContainer:text-sm lgContainer:text-base",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "flex items-center",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
              src: "/cash-flow/megaphone.svg",
              height: size.width > 860 && 25 || size.width < 860 && size.width > 680 && 22 || size.width < 680 && 18,
              width: size.width > 860 && 25 || size.width < 860 && size.width > 680 && 22 || size.width < 680 && 18
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 467,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
              className: "ml-2",
              children: "Gross profit:"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 472,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 466,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            children: ["$", grossProfit]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 474,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 465,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "w-full bg-white rounded-2xl py-3 px-3 mdContainer:py-3 mdContainer:px-4 lgContainer:px-6 lgContainer:py-4 shadow-md flex justify-between items-center text-xs mdContainer:text-sm lgContainer:text-base",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "flex items-center",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
              src: "/cash-flow/net-worth.svg",
              height: size.width > 860 && 25 || size.width < 860 && size.width > 680 && 22 || size.width < 680 && 18,
              width: size.width > 860 && 25 || size.width < 860 && size.width > 680 && 22 || size.width < 680 && 18
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 478,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
              className: "ml-2",
              children: "Net profit:"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 483,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 477,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            children: ["$", netProfit]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 485,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 476,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 420,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        // ref={revenueRef}
        style: {
          height: 55
        },
        className: "overflow-hidden relative w-full rounded-2xl bg-white dark:bg-background px-4 py-4 flex justify-center items-center mt-12 flex flex-wrap shadow-md",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "w-full flex justify-between items-center",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "lgContainer:ml-2",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
              className: "text-sm lgContainer:text-base",
              children: "Revenue"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 496,
              columnNumber: 15
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 495,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "lgContainer:mr-2 flex flex-nowrap items-center",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
              className: "cursor-pointer",
              src: "/cash-flow/add.svg",
              height: size.width > 860 && 22 || size.width < 860 && size.width > 680 && 18 || size.width < 680 && 16,
              width: size.width > 860 && 22 || size.width < 860 && size.width > 680 && 18 || size.width < 680 && 16
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 499,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
              // ref={dropDownIcon}
              // onClick={onRevenueShow}
              className: "ml-2 cursor-pointer",
              src: "/cash-flow/dropdown.svg",
              height: size.width > 860 && 22 || size.width < 860 && size.width > 680 && 18 || size.width < 680 && 16,
              width: size.width > 860 && 22 || size.width < 860 && size.width > 680 && 18 || size.width < 680 && 16
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 505,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 498,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 494,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          // ref={innerContainerRevenueRef}
          className: "w-full ".concat(size.width < 1120 ? 'text-sm mdContainer:text-base lg1Container:mx-8 lg1Container:mb-6 mt-4  bg-background rounded-2xl px-4 mdContainer:px-6 py-4' : 'w-full mx-8 mb-6 mt-4  bg-background rounded-2xl px-4 mdContainer:px-6 py-4'),
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            style: {
              fontSize: size.width < 520 && '0.6rem'
            },
            className: "w-full grid grid-cols-6fr items-center text-xs mdContainer:text-sm lg1Container:text-base",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              children: "name"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 528,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              children: "type"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 529,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              children: "amount"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 530,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              children: "start"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 531,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              children: "end"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 532,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 533,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 524,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("hr", {
            className: "text-primary w-full"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 535,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "h-full w-full rounded-2xl flex flex-wrap flex-col",
            children: revenueElements && revenueElements.map(function (element, index) {
              return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {}, void 0, false) //   <RevenueElement
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
            lineNumber: 536,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 515,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 489,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        // ref={costsRef}
        style: {
          height: 55
        },
        className: "overflow-hidden relative w-full rounded-2xl bg-white dark:bg-background px-4 py-4 flex justify-center items-center mt-8 flex flex-wrap shadow-md",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "w-full flex justify-between items-center",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "lgContainer:ml-2",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
              className: "text-sm lgContainer:text-base",
              children: "Costs"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 564,
              columnNumber: 15
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 563,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "lgContainer:mr-2 flex flex-nowrap items-center",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
              className: "cursor-pointer",
              src: "/cash-flow/add.svg",
              height: size.width > 860 && 22 || size.width < 860 && size.width > 680 && 18 || size.width < 680 && 16,
              width: size.width > 860 && 22 || size.width < 860 && size.width > 680 && 18 || size.width < 680 && 16
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 567,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
              className: "ml-2 cursor-pointer",
              src: "/cash-flow/dropdown.svg",
              height: size.width > 860 && 22 || size.width < 860 && size.width > 680 && 18 || size.width < 680 && 16,
              width: size.width > 860 && 22 || size.width < 860 && size.width > 680 && 18 || size.width < 680 && 16
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 573,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 566,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 562,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "w-full ".concat(size.width < 1120 ? 'text-sm mdContainer:text-base lg1Container:mx-8 lg1Container:mb-6 mt-4  bg-background rounded-2xl px-4 mdContainer:px-6 py-4' : 'w-full mx-8 mb-6 mt-4  bg-background rounded-2xl px-4 mdContainer:px-6 py-4'),
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "w-full grid grid-cols-6fr items-center",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              children: "name"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 590,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              children: "type"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 591,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              children: "amount"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 592,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              children: "start"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 593,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              children: "end"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 594,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 595,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 589,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("hr", {
            className: "text-primary w-full"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 597,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "h-full w-full rounded-2xl flex flex-wrap flex-col",
            children: costsElements && costsElements.map(function (element, index) {
              return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {}, void 0, false) //   <CostsElement
              //   provided={provided}
              //   setCostsElements={setCostsElements}
              //   mainDocument={mainDocument}
              //   projectId={projectId}
              //   documentId={documentId}
              //   costsElements={costsElements}
              //   element={element}
              //   index={index}
              // />
              ;
            })
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 598,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 581,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 557,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 296,
      columnNumber: 7
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 295,
    columnNumber: 5
  }, _this);
};

_s(UniqueCashflowPage, "tTWWo/RoEm+4p++/pRr3+sCIKuk=", false, function () {
  return [_utils_useWindowSize__WEBPACK_IMPORTED_MODULE_9__["useWindowSize"], next_router__WEBPACK_IMPORTED_MODULE_5__["useRouter"]];
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvZGFzaGJvYXJkL3Byb2plY3RzL1twcm9qZWN0XS9jYXNoLWZsb3cvLmpzIl0sIm5hbWVzIjpbIlVuaXF1ZUNhc2hmbG93UGFnZSIsInByb2plY3QiLCJjb25zb2xlIiwibG9nIiwidXNlU3RhdGUiLCJEYXRlIiwic3RhcnREYXRlIiwic2V0U3RhcnREYXRlIiwiZW5kRGF0ZSIsInNldEVuZERhdGUiLCJzZWxlY3RlZFByb2plY3QiLCJzZXRTZWxlY3RlZFByb2plY3QiLCJyZXZlbnVlRWxlbWVudHMiLCJzZXRSZXZlbnVlRWxlbWVudHMiLCJjb3N0c0VsZW1lbnRzIiwic2V0Q29zdHNFbGVtZW50cyIsInBlcmlvZHMiLCJzZXRQZXJpb2RzIiwidGF4Iiwic2V0VGF4Iiwic2l6ZSIsInVzZVdpbmRvd1NpemUiLCJ0b3RhbFJldmVudWUiLCJzZXRUb3RhbFJldmVudWUiLCJtb250aGx5UmV2ZW51ZSIsInNldE1vbnRobHlSZXZlbnVlIiwidG90YWxDb3N0cyIsInNldFRvdGFsQ29zdHMiLCJtb250aGx5Q29zdHMiLCJzZXRNb250aGx5Q29zdHMiLCJncm9zc1Byb2ZpdCIsInNldEdyb3NzUHJvZml0IiwibmV0UHJvZml0Iiwic2V0TmV0UHJvZml0Iiwicm91dGVyIiwidXNlUm91dGVyIiwidXNlRWZmZWN0IiwiY2hhbmdlZFN0YXJ0RGF0ZSIsImdsb2JhbFN0YXJ0RGF0ZSIsIl9zZWNvbmRzIiwiY2hhbmdlZEVuZERhdGUiLCJnbG9iYWxFbmREYXRlIiwidG90YWxSZXZlbnVlQXJyYXkiLCJtYXAiLCJlbGVtZW50IiwicGFyc2VJbnQiLCJ2YWx1ZSIsImxlbmd0aCIsInJlZHVjZSIsImEiLCJiIiwiTnVtYmVyIiwiaXNOYU4iLCJNYXRoIiwicm91bmQiLCJwZXJpb2RMZW5ndGgiLCJ0b3RhbENvc3RzQXJyYXkiLCJpc0Zpbml0ZSIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJpbm5lckhUTUwiLCJ3aWR0aCIsIm15Q2hhcnRSZWYiLCJnZXRDb250ZXh0IiwicmV2ZW51ZURhdGFzZXQiLCJ0ZXN0QXJyYXkiLCJyZXZlbnVlRWxlbWVudCIsImluZGV4IiwibW9udGhEYXRhIiwicGVyaW9kIiwicGVyaW9kSW5kZXgiLCJyZXZlbnVlUGVyaW9kIiwicHVzaCIsImxhYmVsIiwidGl0bGUiLCJkYXRhIiwiYmFja2dyb3VuZENvbG9yIiwiY29sb3IiLCJib3JkZXJDb2xvciIsImNvc3RzRGF0YXNldCIsImNvc3RzRWxlbWVudCIsImNvc3RzUGVyaW9kIiwicmV2ZW51ZUFycmF5IiwiY2FsY3VsYXRlZFJldmVudWVBcnJheSIsInVuZGVmaW5lZCIsImMiLCJpIiwiY29zdHNBcnJheSIsImNhbGN1bGF0ZWRDb3N0c0FycmF5IiwiZmluYWxBcnJheSIsImNhbGN1bGF0ZWRGaW5hbEFycmF5IiwiYXJyYXkiLCJ6ZXJvQXJyYXkiLCJmaW5hbERhdGFCZWZvcmVUYXgiLCJmaW5hbERhdGFBZnRlclRheCIsIm5ldFdvcnRoQXJyYXkiLCJuZXRXb3J0aCIsImRhdGFFbGVtZW50IiwicmV2ZW51ZUVsZW1lbnRJbmRleCIsIkNoYXJ0IiwidHlwZSIsImxhYmVscyIsImRhdGFzZXRzIiwiZmlsbCIsImxpbmVUZW5zaW9uIiwiYm9yZGVyV2lkdGgiLCJwb2ludFJhZGl1cyIsIm9wdGlvbnMiLCJza2lwTnVsbCIsInJlc3BvbnNpdmUiLCJwbHVnaW5zIiwibGVnZW5kIiwicG9zaXRpb24iLCJmb250RmFtaWx5IiwiZm9udCIsImJveFdpZHRoIiwic2NhbGVzIiwieCIsInN0YWNrZWQiLCJ0aWNrcyIsImJlZ2luQXRaZXJvIiwieSIsImlzRmFsbGJhY2siLCJpc01vYmlsZSIsImFkZFllYXJzIiwiZ3JpZENvbHVtblN0YXJ0IiwiZ3JpZENvbHVtbkVuZCIsInRleHRBbGlnbkxhc3QiLCJoZWlnaHQiLCJmb250U2l6ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFFQTtB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RkYsZUFHRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFIRixlQUlFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUpGLGVBS0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBTEYsZUFNRTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQU5GO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFSRixlQWdCRTtBQUFJLHFCQUFTLEVBQUM7QUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQWhCRixlQWlCRTtBQUFLLHFCQUFTLEVBQUMsbURBQWY7QUFBQSxzQkFDRy9DLGFBQWEsSUFDWkEsYUFBYSxDQUFDNkIsR0FBZCxDQUFrQixVQUFDQyxPQUFELEVBQVV1QixLQUFWLEVBQW9CO0FBQ3BDLGtDQUNFLHVKQURGLENBRUU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFYRjtBQWFELGFBZEQ7QUFGSjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQWpCRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBeEJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQXJRRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUF1VUQsQ0E3bEJEOztHQUFNbkUsa0I7VUFTU3FCLGtFLEVBU0VjLHFEOzs7S0FsQlhuQyxrQjs7QUE2b0JTLGlLQUFBQSxrQkFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9kYXNoYm9hcmQvcHJvamVjdHMvW3Byb2plY3RdL2Nhc2gtZmxvdy9baWRdLjAwNWMwOTIyYzRkNjUwNzNjODFmLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSwgdXNlUmVmIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBkYiB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL2xpYi9maXJlYmFzZS1hZG1pbic7XHJcbmltcG9ydCB7IGRiIGFzIGRiQ2xpZW50IH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vbGliL2ZpcmViYXNlJztcclxuaW1wb3J0IHsgaXNNb2JpbGUgfSBmcm9tICdyZWFjdC1kZXZpY2UtZGV0ZWN0JztcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xyXG5pbXBvcnQgQ29va2llcyBmcm9tICdqcy1jb29raWUnO1xyXG5pbXBvcnQgVW5pcXVlRWxlbWVudCBmcm9tICcuLi8uLi8uLi8uLi8uLi9jb21wb25lbnRzL2Rhc2hib2FyZC9zdGFydHVwL3Byb2plY3QvYnVzaW5lc3MtYXBwL2NvbXBldGl0b3JzL1VuaXF1ZUVsZW1lbnQnO1xyXG5pbXBvcnQgQm91bmNlTG9hZGVyQ29tcG9uZW50IGZyb20gJy4uLy4uLy4uLy4uLy4uL2NvbXBvbmVudHMvQm91bmNlTG9hZGVyJztcclxuY29uc3Qgc2FmZUpzb25TdHJpbmdpZnkgPSByZXF1aXJlKCdzYWZlLWpzb24tc3RyaW5naWZ5Jyk7XHJcbmltcG9ydCB7IHVzZVdpbmRvd1NpemUgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi91dGlscy91c2VXaW5kb3dTaXplJztcclxuXHJcbmltcG9ydCBEYXRlUGlja2VyIGZyb20gJ3JlYWN0LWRhdGVwaWNrZXInO1xyXG5pbXBvcnQgeyBhZGRZZWFycywgZm9ybWF0IH0gZnJvbSAnZGF0ZS1mbnMnO1xyXG5pbXBvcnQgbW9tZW50IGZyb20gJ21vbWVudCc7XHJcblxyXG5jb25zdCBVbmlxdWVDYXNoZmxvd1BhZ2UgPSAoeyBwcm9qZWN0IH0pID0+IHtcclxuICBjb25zb2xlLmxvZygnUGFydGljdWxhciBwcm9qZWN0IC0tPiAnLCBwcm9qZWN0KTtcclxuICBjb25zdCBbc3RhcnREYXRlLCBzZXRTdGFydERhdGVdID0gdXNlU3RhdGUobmV3IERhdGUoKSk7XHJcbiAgY29uc3QgW2VuZERhdGUsIHNldEVuZERhdGVdID0gdXNlU3RhdGUobmV3IERhdGUoKSk7XHJcbiAgY29uc3QgW3NlbGVjdGVkUHJvamVjdCwgc2V0U2VsZWN0ZWRQcm9qZWN0XSA9IHVzZVN0YXRlKG51bGwpO1xyXG4gIGNvbnN0IFtyZXZlbnVlRWxlbWVudHMsIHNldFJldmVudWVFbGVtZW50c10gPSB1c2VTdGF0ZSgpO1xyXG4gIGNvbnN0IFtjb3N0c0VsZW1lbnRzLCBzZXRDb3N0c0VsZW1lbnRzXSA9IHVzZVN0YXRlKCk7XHJcbiAgY29uc3QgW3BlcmlvZHMsIHNldFBlcmlvZHNdID0gdXNlU3RhdGUoKTtcclxuICBjb25zdCBbdGF4LCBzZXRUYXhdID0gdXNlU3RhdGUoKTtcclxuICBjb25zdCBzaXplID0gdXNlV2luZG93U2l6ZSgpO1xyXG4gIC8vIFN1bSBkYXRhXHJcbiAgY29uc3QgW3RvdGFsUmV2ZW51ZSwgc2V0VG90YWxSZXZlbnVlXSA9IHVzZVN0YXRlKCk7XHJcbiAgY29uc3QgW21vbnRobHlSZXZlbnVlLCBzZXRNb250aGx5UmV2ZW51ZV0gPSB1c2VTdGF0ZSgpO1xyXG4gIGNvbnN0IFt0b3RhbENvc3RzLCBzZXRUb3RhbENvc3RzXSA9IHVzZVN0YXRlKCk7XHJcbiAgY29uc3QgW21vbnRobHlDb3N0cywgc2V0TW9udGhseUNvc3RzXSA9IHVzZVN0YXRlKCk7XHJcbiAgY29uc3QgW2dyb3NzUHJvZml0LCBzZXRHcm9zc1Byb2ZpdF0gPSB1c2VTdGF0ZSgpO1xyXG4gIGNvbnN0IFtuZXRQcm9maXQsIHNldE5ldFByb2ZpdF0gPSB1c2VTdGF0ZSgpO1xyXG5cclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIHByb2plY3QgJiYgc2V0U2VsZWN0ZWRQcm9qZWN0KHByb2plY3RbMF0pO1xyXG4gICAgcHJvamVjdCAmJiBzZXRSZXZlbnVlRWxlbWVudHMocHJvamVjdFswXS5yZXZlbnVlRWxlbWVudHMpO1xyXG4gICAgcHJvamVjdCAmJiBzZXRDb3N0c0VsZW1lbnRzKHByb2plY3RbMF0uY29zdHNFbGVtZW50cyk7XHJcbiAgICBwcm9qZWN0ICYmIHNldFBlcmlvZHMocHJvamVjdFswXS5wZXJpb2RzKTtcclxuICAgIHByb2plY3QgJiYgc2V0VGF4KHByb2plY3RbMF0udGF4KTtcclxuICAgIC8vIFN1bSBkYXRhXHJcbiAgICAvLyBHbG9iYWwgc3RhcnQgZGF0ZVxyXG4gICAgY29uc3QgY2hhbmdlZFN0YXJ0RGF0ZSA9IHByb2plY3RbMF0uZ2xvYmFsU3RhcnREYXRlLl9zZWNvbmRzICogMTAwMDtcclxuICAgIGNvbnNvbGUubG9nKGNoYW5nZWRTdGFydERhdGUpO1xyXG4gICAgcHJvamVjdFswXS5nbG9iYWxTdGFydERhdGUgIT09ICcnICYmIHNldFN0YXJ0RGF0ZShuZXcgRGF0ZShjaGFuZ2VkU3RhcnREYXRlKSk7XHJcbiAgICBjb25zdCBjaGFuZ2VkRW5kRGF0ZSA9IHByb2plY3RbMF0uZ2xvYmFsRW5kRGF0ZS5fc2Vjb25kcyAqIDEwMDA7XHJcbiAgICAvLyBHbG9iYWwgZW5kIGRhdGVcclxuICAgIHByb2plY3RbMF0uZ2xvYmFsRW5kRGF0ZSAhPT0gJycgJiYgc2V0RW5kRGF0ZShuZXcgRGF0ZShjaGFuZ2VkRW5kRGF0ZSkpO1xyXG4gICAgLy8gUGVyaW9kc1xyXG4gICAgc2V0UGVyaW9kcyhwcm9qZWN0WzBdLnBlcmlvZHMpO1xyXG4gICAgLy8gVG90YWwgcmV2ZW51ZVxyXG4gICAgY29uc3QgdG90YWxSZXZlbnVlQXJyYXkgPSBwcm9qZWN0WzBdLnJldmVudWVFbGVtZW50cy5tYXAoKGVsZW1lbnQpID0+IHBhcnNlSW50KGVsZW1lbnQudmFsdWUgKiBlbGVtZW50LnBlcmlvZHMubGVuZ3RoKSk7XHJcbiAgICBjb25zdCB0b3RhbFJldmVudWUgPSB0b3RhbFJldmVudWVBcnJheS5yZWR1Y2UoKGEsIGIpID0+IHtcclxuICAgICAgcmV0dXJuIGEgKyBiO1xyXG4gICAgfSwgMCk7XHJcbiAgICBzZXRUb3RhbFJldmVudWUoTnVtYmVyLmlzTmFOKHRvdGFsUmV2ZW51ZSkgPyAwIDogTWF0aC5yb3VuZCh0b3RhbFJldmVudWUpKTtcclxuICAgIC8vIE1vbnRobHkgcmV2ZW51ZVxyXG4gICAgY29uc3QgcGVyaW9kTGVuZ3RoID0gcHJvamVjdFswXS5wZXJpb2RzLmxlbmd0aDtcclxuICAgIGNvbnN0IG1vbnRobHlSZXZlbnVlID0gdG90YWxSZXZlbnVlIC8gcGVyaW9kTGVuZ3RoO1xyXG4gICAgc2V0TW9udGhseVJldmVudWUoTnVtYmVyLmlzTmFOKG1vbnRobHlSZXZlbnVlKSA/IDAgOiBNYXRoLnJvdW5kKG1vbnRobHlSZXZlbnVlKSk7XHJcbiAgICAvLyBUb3RhbCBjb3N0c1xyXG4gICAgY29uc3QgdG90YWxDb3N0c0FycmF5ID0gcHJvamVjdFswXS5jb3N0c0VsZW1lbnRzLm1hcCgoZWxlbWVudCkgPT4gcGFyc2VJbnQoZWxlbWVudC52YWx1ZSAqIGVsZW1lbnQucGVyaW9kcy5sZW5ndGgpKTtcclxuICAgIGNvbnN0IHRvdGFsQ29zdHMgPSB0b3RhbENvc3RzQXJyYXkucmVkdWNlKChhLCBiKSA9PiB7XHJcbiAgICAgIHJldHVybiBhICsgYjtcclxuICAgIH0sIDApO1xyXG4gICAgc2V0VG90YWxDb3N0cyhOdW1iZXIuaXNGaW5pdGUodG90YWxDb3N0cykgPyBNYXRoLnJvdW5kKHRvdGFsQ29zdHMpIDogMCk7XHJcbiAgICAvLyBNb250aGx5IGNvc3RzXHJcbiAgICBjb25zdCBtb250aGx5Q29zdHMgPSB0b3RhbENvc3RzIC8gcGVyaW9kTGVuZ3RoO1xyXG4gICAgc2V0TW9udGhseUNvc3RzKE51bWJlci5pc0Zpbml0ZShtb250aGx5Q29zdHMpID8gTWF0aC5yb3VuZChtb250aGx5Q29zdHMpIDogMCk7XHJcbiAgICAvLyBHcm9zcyBwcm9maXRcclxuICAgIGNvbnN0IGdyb3NzUHJvZml0ID0gdG90YWxSZXZlbnVlIC0gdG90YWxDb3N0cztcclxuICAgIHNldEdyb3NzUHJvZml0KE51bWJlci5pc0Zpbml0ZShncm9zc1Byb2ZpdCkgPyBNYXRoLnJvdW5kKGdyb3NzUHJvZml0KSA6IDApO1xyXG4gICAgLy8gTmV0IHByb2ZpdFxyXG4gICAgY29uc3QgdGF4ID0gcGFyc2VJbnQocHJvamVjdFswXS50YXgpO1xyXG4gICAgY29uc3QgbmV0UHJvZml0ID0gZ3Jvc3NQcm9maXQgLSAodGF4IC8gMTAwKSAqIGdyb3NzUHJvZml0O1xyXG4gICAgc2V0TmV0UHJvZml0KE51bWJlci5pc0Zpbml0ZShuZXRQcm9maXQpID8gTWF0aC5yb3VuZChuZXRQcm9maXQpIDogMCk7XHJcbiAgfSwgW3Byb2plY3RdKTtcclxuICAvLyAgIGNvbnN0IFtjb21wZXRpdG9ycywgc2V0Q29tcGV0aXRvcnNdID0gdXNlU3RhdGUoW10pO1xyXG5cclxuICAvLyBDaGFydFxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAvLyBjb25zdCBteUNoYXJ0UmVmID0gY2hhcnRSZWYuY3VycmVudC5nZXRDb250ZXh0KCcyZCcpO1xyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYGNoYXJ0Q29udGFpbmVyYCkuaW5uZXJIVE1MID0gJyZuYnNwOyc7XHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgY2hhcnRDb250YWluZXJgKS5pbm5lckhUTUwgPSBgPGNhbnZhcyBoZWlnaHQ9JyR7c2l6ZS53aWR0aCA+IDY4MCA/IDc1IDogJ3Vuc2V0J30nIGlkPSdjaGFydCc+PC9jYW52YXM+YDtcclxuICAgIGNvbnN0IG15Q2hhcnRSZWYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2hhcnQnKS5nZXRDb250ZXh0KCcyZCcpO1xyXG5cclxuICAgIC8vIFJldmVudWUgZGF0YXNldHNcclxuICAgIGNvbnN0IHJldmVudWVEYXRhc2V0ID0gW107XHJcbiAgICBjb25zdCB0ZXN0QXJyYXkgPSBbXTtcclxuICAgIC8vIGNvbnN0IG1vbnRoRGF0YSA9IHBlcmlvZHMgJiYgcGVyaW9kcy5tYXAoKCkgPT4gbnVsbCk7XHJcbiAgICByZXZlbnVlRWxlbWVudHMgJiZcclxuICAgICAgcmV2ZW51ZUVsZW1lbnRzLm1hcCgocmV2ZW51ZUVsZW1lbnQsIGluZGV4KSA9PiB7XHJcbiAgICAgICAgY29uc3QgbW9udGhEYXRhID0gcGVyaW9kcyAmJiBwZXJpb2RzLm1hcCgoKSA9PiBudWxsKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhyZXZlbnVlRWxlbWVudCk7XHJcbiAgICAgICAgcGVyaW9kcyAmJlxyXG4gICAgICAgICAgcGVyaW9kcy5tYXAoKHBlcmlvZCwgcGVyaW9kSW5kZXgpID0+IHtcclxuICAgICAgICAgICAgcmV2ZW51ZUVsZW1lbnQucGVyaW9kcy5tYXAoKHJldmVudWVQZXJpb2QpID0+IHtcclxuICAgICAgICAgICAgICBpZiAocGVyaW9kID09IHJldmVudWVQZXJpb2QpIHtcclxuICAgICAgICAgICAgICAgIGlmIChtb250aERhdGFbcGVyaW9kSW5kZXhdID09IG51bGwpIHtcclxuICAgICAgICAgICAgICAgICAgbW9udGhEYXRhW3BlcmlvZEluZGV4XSA9IHJldmVudWVFbGVtZW50LnZhbHVlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICBjb25zb2xlLmxvZyhtb250aERhdGEpO1xyXG4gICAgICAgIHRlc3RBcnJheS5wdXNoKG1vbnRoRGF0YSk7XHJcbiAgICAgICAgcmV2ZW51ZURhdGFzZXQucHVzaCh7XHJcbiAgICAgICAgICBsYWJlbDogYHJldmVudWUgLyAke3JldmVudWVFbGVtZW50LnRpdGxlfWAsXHJcbiAgICAgICAgICBkYXRhOiBtb250aERhdGEsXHJcbiAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IHJldmVudWVFbGVtZW50LmNvbG9yLFxyXG4gICAgICAgICAgYm9yZGVyQ29sb3I6IHJldmVudWVFbGVtZW50LmNvbG9yLFxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9KTtcclxuXHJcbiAgICAvLyBDb3N0cyBkYXRhc2V0c1xyXG4gICAgY29uc3QgY29zdHNEYXRhc2V0ID0gW107XHJcbiAgICBjb3N0c0VsZW1lbnRzICYmXHJcbiAgICAgIGNvc3RzRWxlbWVudHMubWFwKChjb3N0c0VsZW1lbnQsIGluZGV4KSA9PiB7XHJcbiAgICAgICAgY29uc3QgbW9udGhEYXRhID0gcGVyaW9kcyAmJiBwZXJpb2RzLm1hcCgoKSA9PiBudWxsKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhjb3N0c0VsZW1lbnQpO1xyXG4gICAgICAgIHBlcmlvZHMgJiZcclxuICAgICAgICAgIHBlcmlvZHMubWFwKChwZXJpb2QsIHBlcmlvZEluZGV4KSA9PiB7XHJcbiAgICAgICAgICAgIGNvc3RzRWxlbWVudC5wZXJpb2RzLm1hcCgoY29zdHNQZXJpb2QpID0+IHtcclxuICAgICAgICAgICAgICBpZiAocGVyaW9kID09IGNvc3RzUGVyaW9kKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAobW9udGhEYXRhW3BlcmlvZEluZGV4XSA9PSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICAgIG1vbnRoRGF0YVtwZXJpb2RJbmRleF0gPSAtY29zdHNFbGVtZW50LnZhbHVlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICBjb25zb2xlLmxvZyhtb250aERhdGEpO1xyXG4gICAgICAgIHRlc3RBcnJheS5wdXNoKG1vbnRoRGF0YSk7XHJcbiAgICAgICAgY29zdHNEYXRhc2V0LnB1c2goe1xyXG4gICAgICAgICAgbGFiZWw6IGBjb3N0cyAvICR7Y29zdHNFbGVtZW50LnRpdGxlfWAsXHJcbiAgICAgICAgICBkYXRhOiBtb250aERhdGEsXHJcbiAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IGNvc3RzRWxlbWVudC5jb2xvcixcclxuICAgICAgICAgIGJvcmRlckNvbG9yOiBjb3N0c0VsZW1lbnQuY29sb3IsXHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH0pO1xyXG4gICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gICAgLy8gUmV2ZW51ZVxyXG4gICAgY29uc3QgcmV2ZW51ZUFycmF5ID0gW107XHJcbiAgICByZXZlbnVlRGF0YXNldC5sZW5ndGggIT09IDAgJiZcclxuICAgICAgcmV2ZW51ZURhdGFzZXQubGVuZ3RoICE9PSAwICYmXHJcbiAgICAgIHJldmVudWVEYXRhc2V0Lm1hcCgoZWxlbWVudCkgPT5cclxuICAgICAgICByZXZlbnVlQXJyYXkucHVzaChcclxuICAgICAgICAgIGVsZW1lbnQuZGF0YSAmJlxyXG4gICAgICAgICAgICBlbGVtZW50LmRhdGEubWFwKChkYXRhKSA9PiB7XHJcbiAgICAgICAgICAgICAgaWYgKGRhdGEgIT09IG51bGwpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBwYXJzZUludChkYXRhKTtcclxuICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIDA7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIClcclxuICAgICAgKTtcclxuICAgIGNvbnNvbGUubG9nKHJldmVudWVBcnJheSk7XHJcbiAgICBjb25zdCBjYWxjdWxhdGVkUmV2ZW51ZUFycmF5ID1cclxuICAgICAgcmV2ZW51ZUFycmF5Lmxlbmd0aCAhPT0gMCAmJiByZXZlbnVlQXJyYXlbMF0gIT09IHVuZGVmaW5lZCAmJiByZXZlbnVlQXJyYXkucmVkdWNlKChhLCBiKSA9PiBhLm1hcCgoYywgaSkgPT4gYyArIGJbaV0pKTtcclxuICAgIGNvbnNvbGUubG9nKGNhbGN1bGF0ZWRSZXZlbnVlQXJyYXkpO1xyXG4gICAgLy8gQ29zdHNcclxuICAgIGNvbnN0IGNvc3RzQXJyYXkgPSBbXTtcclxuICAgIGNvbnNvbGUubG9nKGNvc3RzRGF0YXNldCk7XHJcbiAgICBjb3N0c0RhdGFzZXQubGVuZ3RoICE9PSAwICYmXHJcbiAgICAgIGNvc3RzRGF0YXNldC5sZW5ndGggIT09IDAgJiZcclxuICAgICAgY29zdHNEYXRhc2V0Lm1hcCgoZWxlbWVudCkgPT5cclxuICAgICAgICBjb3N0c0FycmF5LnB1c2goXHJcbiAgICAgICAgICBlbGVtZW50LmRhdGEgJiZcclxuICAgICAgICAgICAgZWxlbWVudC5kYXRhLm1hcCgoZGF0YSkgPT4ge1xyXG4gICAgICAgICAgICAgIGlmIChkYXRhICE9PSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gcGFyc2VJbnQoZGF0YSk7XHJcbiAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiAwO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSlcclxuICAgICAgICApXHJcbiAgICAgICk7XHJcbiAgICBjb25zb2xlLmxvZyhjb3N0c0FycmF5KTtcclxuICAgIGNvbnN0IGNhbGN1bGF0ZWRDb3N0c0FycmF5ID1cclxuICAgICAgY29zdHNBcnJheS5sZW5ndGggIT09IDAgJiYgY29zdHNBcnJheVswXSAhPT0gdW5kZWZpbmVkICYmIGNvc3RzQXJyYXkucmVkdWNlKChhLCBiKSA9PiBhLm1hcCgoYywgaSkgPT4gYyArIGJbaV0pKTtcclxuICAgIGNvbnNvbGUubG9nKGNhbGN1bGF0ZWRDb3N0c0FycmF5KTtcclxuICAgIC8vIEZpbmFsIHZhbHVlXHJcbiAgICBjb25zdCBmaW5hbEFycmF5ID0gW2NhbGN1bGF0ZWRSZXZlbnVlQXJyYXksIGNhbGN1bGF0ZWRDb3N0c0FycmF5XTtcclxuICAgIGNvbnNvbGUubG9nKGZpbmFsQXJyYXkpO1xyXG4gICAgLy8gQ2hlY2sgaWYgYW55IGFycmF5IGlzIGZhbHN5XHJcbiAgICBjb25zdCBjYWxjdWxhdGVkRmluYWxBcnJheSA9XHJcbiAgICAgIGZpbmFsQXJyYXkgJiZcclxuICAgICAgZmluYWxBcnJheS5tYXAoKGFycmF5KSA9PiB7XHJcbiAgICAgICAgaWYgKCFhcnJheSkge1xyXG4gICAgICAgICAgY29uc3QgemVyb0FycmF5ID0gW107XHJcbiAgICAgICAgICBwZXJpb2RzICYmIHBlcmlvZHMubWFwKChwZXJpb2QpID0+IHplcm9BcnJheS5wdXNoKDApKTtcclxuICAgICAgICAgIHJldHVybiB6ZXJvQXJyYXk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHJldHVybiBhcnJheTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgY29uc29sZS5sb2coY2FsY3VsYXRlZEZpbmFsQXJyYXkpO1xyXG4gICAgY29uc3QgZmluYWxEYXRhQmVmb3JlVGF4ID1cclxuICAgICAgY2FsY3VsYXRlZEZpbmFsQXJyYXkubGVuZ3RoICE9PSAwICYmIGNhbGN1bGF0ZWRGaW5hbEFycmF5LnJlZHVjZSgoYSwgYikgPT4gYSAmJiBiICYmIGEubWFwKChjLCBpKSA9PiBjICsgYltpXSkpO1xyXG4gICAgY29uc3QgZmluYWxEYXRhQWZ0ZXJUYXggPSBmaW5hbERhdGFCZWZvcmVUYXggJiYgZmluYWxEYXRhQmVmb3JlVGF4Lm1hcCgoZGF0YSkgPT4gZGF0YSAtICh0YXggLyAxMDApICogZGF0YSk7XHJcbiAgICBjb25zb2xlLmxvZyhmaW5hbERhdGFBZnRlclRheCk7XHJcblxyXG4gICAgY29uc3QgbmV0V29ydGhBcnJheSA9IFtdO1xyXG4gICAgY29uc3QgbmV0V29ydGggPVxyXG4gICAgICByZXZlbnVlRGF0YXNldC5sZW5ndGggIT09IDAgJiZcclxuICAgICAgY29zdHNEYXRhc2V0Lmxlbmd0aCAhPT0gMCAmJlxyXG4gICAgICByZXZlbnVlRGF0YXNldCAmJlxyXG4gICAgICByZXZlbnVlRGF0YXNldC5tYXAoKHJldmVudWVFbGVtZW50LCBpbmRleCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHZhbHVlID1cclxuICAgICAgICAgIHJldmVudWVFbGVtZW50LmRhdGEgJiZcclxuICAgICAgICAgIHJldmVudWVFbGVtZW50LmRhdGEubWFwKChkYXRhRWxlbWVudCwgcmV2ZW51ZUVsZW1lbnRJbmRleCkgPT4ge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhkYXRhRWxlbWVudCk7XHJcbiAgICAgICAgICAgIGlmIChkYXRhRWxlbWVudCAhPT0gbnVsbCAmJiBjb3N0c0RhdGFzZXRbaW5kZXhdKSB7XHJcbiAgICAgICAgICAgICAgaWYgKGNvc3RzRGF0YXNldFtpbmRleF0uZGF0YVtyZXZlbnVlRWxlbWVudEluZGV4XSkge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgZ3Jvc3NQcm9maXQgPSBkYXRhRWxlbWVudCAtIC1jb3N0c0RhdGFzZXRbMF0uZGF0YVtyZXZlbnVlRWxlbWVudEluZGV4XTtcclxuICAgICAgICAgICAgICAgIG5ldFdvcnRoQXJyYXkucHVzaChncm9zc1Byb2ZpdCAtICh0YXggLyAxMDApICogZ3Jvc3NQcm9maXQpO1xyXG4gICAgICAgICAgICAgICAgLy8gcmV0dXJuIGdyb3NzUHJvZml0IC0gKHRheCAvIDEwMCkgKiBncm9zc1Byb2ZpdDtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgIHJldHVybiB2YWx1ZTtcclxuICAgICAgfSk7XHJcblxyXG4gICAgbmV3IENoYXJ0KG15Q2hhcnRSZWYsIHtcclxuICAgICAgdHlwZTogJ2JhcicsXHJcbiAgICAgIGRhdGE6IHtcclxuICAgICAgICBsYWJlbHM6IHBlcmlvZHMgJiYgcGVyaW9kcyxcclxuICAgICAgICBkYXRhc2V0czogW1xyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICB0eXBlOiAnbGluZScsXHJcbiAgICAgICAgICAgIGxhYmVsOiAnTmV0IHByb2ZpdCcsXHJcbiAgICAgICAgICAgIGRhdGE6IGZpbmFsRGF0YUFmdGVyVGF4LFxyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICdyZ2JhKDEwLCAxOCwgNDgsIDEpJyxcclxuICAgICAgICAgICAgYm9yZGVyQ29sb3I6ICdyZ2JhKDEwLCAxOCwgNDgsIDEpJyxcclxuICAgICAgICAgICAgZmlsbDogMCxcclxuICAgICAgICAgICAgbGluZVRlbnNpb246IDAsXHJcbiAgICAgICAgICAgIGJvcmRlcldpZHRoOiBzaXplLndpZHRoIDwgNjgwID8gMSA6IDMsXHJcbiAgICAgICAgICAgIHBvaW50UmFkaXVzOiBzaXplLndpZHRoIDwgNjgwID8gMiA6IDMsXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAgLi4ucmV2ZW51ZURhdGFzZXQsXHJcbiAgICAgICAgICAuLi5jb3N0c0RhdGFzZXQsXHJcbiAgICAgICAgXSxcclxuICAgICAgfSxcclxuICAgICAgb3B0aW9uczoge1xyXG4gICAgICAgIHNraXBOdWxsOiB0cnVlLFxyXG4gICAgICAgIHJlc3BvbnNpdmU6IHRydWUsXHJcbiAgICAgICAgcGx1Z2luczoge1xyXG4gICAgICAgICAgbGVnZW5kOiB7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiAncmlnaHQnLFxyXG4gICAgICAgICAgICBsYWJlbHM6IHtcclxuICAgICAgICAgICAgICBmb250RmFtaWx5OiAnQ29tZm9ydGFhJyxcclxuICAgICAgICAgICAgICBmb250OiB7XHJcbiAgICAgICAgICAgICAgICBzaXplOiBzaXplLndpZHRoIDwgNjgwID8gOCA6IDEyLFxyXG4gICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgYm94V2lkdGg6IHNpemUud2lkdGggPCA2ODAgPyAxMCA6IDQwLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHNjYWxlczoge1xyXG4gICAgICAgICAgeDoge1xyXG4gICAgICAgICAgICBzdGFja2VkOiB0cnVlLFxyXG4gICAgICAgICAgICB0aWNrczoge1xyXG4gICAgICAgICAgICAgIGZvbnRGYW1pbHk6ICdDb21mb3J0YWEnLFxyXG4gICAgICAgICAgICAgIGJlZ2luQXRaZXJvOiB0cnVlLFxyXG4gICAgICAgICAgICAgIGZvbnQ6IHtcclxuICAgICAgICAgICAgICAgIHNpemU6IHNpemUud2lkdGggPCA2ODAgPyA4IDogMTIsXHJcbiAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgLy8gYmVnaW5BdFplcm86IHRydWUsXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAgeToge1xyXG4gICAgICAgICAgICBzdGFja2VkOiB0cnVlLFxyXG4gICAgICAgICAgICB0aWNrczoge1xyXG4gICAgICAgICAgICAgIGZvbnRGYW1pbHk6ICdDb21mb3J0YWEnLFxyXG4gICAgICAgICAgICAgIGJlZ2luQXRaZXJvOiB0cnVlLFxyXG4gICAgICAgICAgICAgIGZvbnQ6IHtcclxuICAgICAgICAgICAgICAgIHNpemU6IHNpemUud2lkdGggPCA2ODAgPyA4IDogMTIsXHJcbiAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgLy8gYmVnaW5BdFplcm86IHRydWUsXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0sXHJcbiAgICB9KTtcclxuICB9LCBbcGVyaW9kcywgcmV2ZW51ZUVsZW1lbnRzLCBjb3N0c0VsZW1lbnRzLCB0YXhdKTtcclxuXHJcbiAgaWYgKHJvdXRlci5pc0ZhbGxiYWNrKSB7XHJcbiAgICByZXR1cm4gPEJvdW5jZUxvYWRlckNvbXBvbmVudCAvPjtcclxuICB9XHJcblxyXG4gIGNvbnNvbGUubG9nKHN0YXJ0RGF0ZSk7XHJcbiAgY29uc29sZS5sb2coZW5kRGF0ZSk7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwibWluLWgtc2NyZWVuIHctZnVsbCByZWxhdGl2ZSBmbGV4IGZsZXgtY29sIGl0ZW1zLWNlbnRlclwiPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbCBtYXgtdy1mdWxsIHJlbGF0aXZlIG10LTEyIGxnMUNvbnRhaW5lcjptdC0xNiBtYi0xNiBweC0zMlwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVsYXRpdmUgZ3JpZCBncmlkLWNvbHMtMiBncmlkLXJvd3MtMSBncmlkLWZsb3ctY29sXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyXCI+XHJcbiAgICAgICAgICAgIDxzdmdcclxuICAgICAgICAgICAgICBoZWlnaHQ9eyhzaXplLndpZHRoID4gODYwICYmIDMwKSB8fCAoc2l6ZS53aWR0aCA8IDg2MCAmJiBzaXplLndpZHRoID4gNjgwICYmIDI2KSB8fCAoc2l6ZS53aWR0aCA8IDY4MCAmJiAyMil9XHJcbiAgICAgICAgICAgICAgd2lkdGg9eyhzaXplLndpZHRoID4gODYwICYmIDMwKSB8fCAoc2l6ZS53aWR0aCA8IDg2MCAmJiBzaXplLndpZHRoID4gNjgwICYmIDI2KSB8fCAoc2l6ZS53aWR0aCA8IDY4MCAmJiAyMil9XHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZmlsbC1jdXJyZW50IHRleHQtcHJpbWFyeSBkYXJrOnRleHQtcHJpbWFyeWRhcmtcIlxyXG4gICAgICAgICAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxyXG4gICAgICAgICAgICAgIHZpZXdCb3g9XCIwIDAgMTI4IDEyOFwiXHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICA8dGl0bGU+TGFuZGluZyBTdWNjZXNzPC90aXRsZT5cclxuICAgICAgICAgICAgICA8ZyBpZD1cIkxhbmRpbmdfU3VjY2Vzc1wiIGRhdGEtbmFtZT1cIkxhbmRpbmcgU3VjY2Vzc1wiPlxyXG4gICAgICAgICAgICAgICAgPHBhdGhcclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiY2xzLTFcIlxyXG4gICAgICAgICAgICAgICAgICBkPVwiTTEwOS4zLDkwLjFBNDYsNDYsMCwwLDAsNjUsMzZWMjAuMDhjMS43OC0uNjIsNy4yMS0yLjE0LDEyLjU3LjIzYTE5LjMzLDE5LjMzLDAsMCwwLDE0LjgyLDBjLjg3LS4zOC42MS4zMS42MS0xNy45M2ExLDEsMCwwLDAtMS40My0uOTNjLS4wNywwLTYuNjksMi44Ny0xMy4xOCwwQTE5LjQxLDE5LjQxLDAsMCwwLDY1LC45MywxLDEsMCwwLDAsNjMsMVYzNmE0NS44Niw0NS44NiwwLDAsMC0yOC42NiwxMC44QzE2LjE4LDQwLjQ4LDQsNDAsLjc5LDQ1LjUxLTIuMjksNTAuODYsMy45NCw1OS4zLDEwLDY1LjY4QTExLDExLDAsMCwwLDE4LDgzYy44MSwzOC40MSw0Ni4wOCw1OS4yLDc1LjY2LDM0LjIxLDguNTMsMywyOSw5LjE1LDMzLjU1LDEuMzFDMTMwLjM5LDExMywxMjMuODYsMTAyLjY1LDEwOS4zLDkwLjFaTTc3LjU5LDMuMzFBMTkuMzksMTkuMzksMCwwLDAsOTEsMy44M1YxOC42OGMtMS43OS42Mi03LjIyLDIuMTMtMTIuNTctLjIzQTE5LjE5LDE5LjE5LDAsMCwwLDY1LDE3LjkzVjMuMDhDNjYuODEsMi40Niw3Mi4yNCwxLDc3LjU5LDMuMzFaTTY1LDQ1di03YzM5LjY5LjkxLDU4LDUwLjI3LDI4LjIxLDc2LjgxQzcxLjMyLDEwNyw0Niw5Mi42NiwyNy43Nyw3OC42NGExMSwxMSwwLDAsMC0zLjItMTYuMTNBNDMuODgsNDMuODgsMCwwLDEsNjMsMzguMDZWNDVBMSwxLDAsMCwwLDY1LDQ1Wk0zMi41NSw0OC4zNmE0Ni4yMSw0Ni4yMSwwLDAsMC05LjgzLDEzLjI4LDEwLjkzLDEwLjkzLDAsMCwwLTExLjQsMi40N0MtOC4zOSw0My4yMyw1LjIzLDM5LjA4LDMyLjU1LDQ4LjM2Wk0xMCw3MmE5LDksMCwxLDEsOSw5QTksOSwwLDAsMSwxMCw3MlptMTAsMTFhMTEsMTEsMCwwLDAsNi4zNC0yLjgyYzE4LjQ1LDE0LjIxLDQzLjQ1LDI4LjM1LDY1LjA1LDM2LjIyQzYzLDEzOS4xNiwyMC44MywxMTkuMSwyMC4wNSw4M1ptMTA1LjQsMzQuNWMtMi41MSw0LjM1LTE0LDMuNjItMzAtMS44NWE0NS42MSw0NS42MSwwLDAsMCwxMy40Mi0yMy4yMUMxMjEuNTksMTAzLjU4LDEyOCwxMTMuMTIsMTI1LjQ1LDExNy40N1pcIlxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8L2c+XHJcbiAgICAgICAgICAgIDwvc3ZnPlxyXG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXByaW1hcnlkYXJrIHRleHQtbGcgbWRDb250YWluZXI6dGV4dC14bCBsZ0NvbnRhaW5lcjp0ZXh0LTJ4bCBtdC0yIHBsLTIgZGFyazp0ZXh0LWJhY2tncm91bmRcIj5cclxuICAgICAgICAgICAgICBDYXNoIGZsb3cgYW5hbHlzaXNcclxuICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJ0ZXh0LXNlY29uZGFyeSB0ZXh0LXhzIG1kQ29udGFpbmVyOnRleHQtc20gbGdDb250YWluZXI6dGV4dC1iYXNlIHRleHQtZ3JheSByZWxhdGl2ZSAtdG9wLTEgbGdDb250YWluZXI6dG9wLTBcIj5cclxuICAgICAgICAgICAgTWFuYWdlIHlvdXIgc3RhcnR1cCBjYXNoIGZsb3dcclxuICAgICAgICAgIDwvaDE+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGwgZ3JpZCBncmlkLWNvbHMtMmZyIGdyaWQtcm93cy0xZnIgbGdDb250YWluZXI6Z3JpZC1jb2xzLTNmciBsZ0NvbnRhaW5lcjpncmlkLXJvd3MtMWZyIGdhcC15LTggZ2FwLXgtNiBzbUNvbnRhaW5lcjpnYXAteC0zMiBtZENvbnRhaW5lcjpnYXAteC0xMiBtdC0xMlwiPlxyXG4gICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICBpZD1cIm1haW4tZGF0ZXBpY2tlclwiXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cInctZnVsbCBiZy13aGl0ZSByb3VuZGVkLTJ4bCBweS0zIHB4LTMgbWRDb250YWluZXI6cHktMyBtZENvbnRhaW5lcjpweC00IGxnQ29udGFpbmVyOnB4LTYgbGdDb250YWluZXI6cHktNCBzaGFkb3ctbWQgZ3JpZCBncmlkLWNvbHMtMmZyIGl0ZW1zLWNlbnRlciB0ZXh0LXhzIG1kQ29udGFpbmVyOnRleHQtc20gbGdDb250YWluZXI6dGV4dC1iYXNlXCJcclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgIHNyYz1cIi9jYXNoLWZsb3cvY2FsZW5kYXIuc3ZnXCJcclxuICAgICAgICAgICAgICAgIGhlaWdodD17KHNpemUud2lkdGggPiA4NjAgJiYgMjUpIHx8IChzaXplLndpZHRoIDwgODYwICYmIHNpemUud2lkdGggPiA2ODAgJiYgMjIpIHx8IChzaXplLndpZHRoIDwgNjgwICYmIDE4KX1cclxuICAgICAgICAgICAgICAgIHdpZHRoPXsoc2l6ZS53aWR0aCA+IDg2MCAmJiAyNSkgfHwgKHNpemUud2lkdGggPCA4NjAgJiYgc2l6ZS53aWR0aCA+IDY4MCAmJiAyMikgfHwgKHNpemUud2lkdGggPCA2ODAgJiYgMTgpfVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwibWwtMiB0ZXh0LXByaW1hcnlkYXJrXCI+U3RhcnQ6PC9wPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAge3N0YXJ0RGF0ZSAmJiAhaXNNb2JpbGUgPyAoXHJcbiAgICAgICAgICAgICAgPERhdGVQaWNrZXJcclxuICAgICAgICAgICAgICAgIHNlbGVjdGVkPXtzdGFydERhdGV9XHJcbiAgICAgICAgICAgICAgICAvLyBvbkNoYW5nZT17KGRhdGUpID0+IG9uU3RhcnREYXRlVXBkYXRlKGRhdGUpfVxyXG4gICAgICAgICAgICAgICAgZGF0ZUZvcm1hdD1cIk1NTU0geXl5eVwiXHJcbiAgICAgICAgICAgICAgICBzaG93TW9udGhZZWFyUGlja2VyXHJcbiAgICAgICAgICAgICAgICBtYXhEYXRlPXthZGRZZWFycyhuZXcgRGF0ZSgpLCAzKX1cclxuICAgICAgICAgICAgICAgIG1pbkRhdGU9e25ldyBEYXRlKCl9XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICA8RGF0ZVBpY2tlclxyXG4gICAgICAgICAgICAgICAgc2VsZWN0ZWQ9e3N0YXJ0RGF0ZX1cclxuICAgICAgICAgICAgICAgIC8vIG9uQ2hhbmdlPXsoZGF0ZSkgPT4gb25TdGFydERhdGVVcGRhdGUoZGF0ZSl9XHJcbiAgICAgICAgICAgICAgICBkYXRlRm9ybWF0PVwiTU1NTSB5eXl5XCJcclxuICAgICAgICAgICAgICAgIHNob3dNb250aFllYXJQaWNrZXJcclxuICAgICAgICAgICAgICAgIG1heERhdGU9e2FkZFllYXJzKG5ldyBEYXRlKCksIDMpfVxyXG4gICAgICAgICAgICAgICAgbWluRGF0ZT17bmV3IERhdGUoKX1cclxuICAgICAgICAgICAgICAgIHdpdGhQb3J0YWxcclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICApfVxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgIGlkPVwibWFpbi1kYXRlcGlja2VyXCJcclxuICAgICAgICAgICAgY2xhc3NOYW1lPVwidy1mdWxsIGJnLXdoaXRlIHJvdW5kZWQtMnhsIHB5LTMgcHgtMyBtZENvbnRhaW5lcjpweS0zIG1kQ29udGFpbmVyOnB4LTQgbGdDb250YWluZXI6cHgtNiBsZ0NvbnRhaW5lcjpweS00IHNoYWRvdy1tZCBncmlkIGdyaWQtY29scy0yZnIgaXRlbXMtY2VudGVyIHRleHQteHMgbWRDb250YWluZXI6dGV4dC1zbSBsZ0NvbnRhaW5lcjp0ZXh0LWJhc2VcIlxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgc3JjPVwiL2Nhc2gtZmxvdy9ob3VyZ2xhc3MxLnN2Z1wiXHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ9eyhzaXplLndpZHRoID4gODYwICYmIDI1KSB8fCAoc2l6ZS53aWR0aCA8IDg2MCAmJiBzaXplLndpZHRoID4gNjgwICYmIDIyKSB8fCAoc2l6ZS53aWR0aCA8IDY4MCAmJiAxOCl9XHJcbiAgICAgICAgICAgICAgICB3aWR0aD17KHNpemUud2lkdGggPiA4NjAgJiYgMjUpIHx8IChzaXplLndpZHRoIDwgODYwICYmIHNpemUud2lkdGggPiA2ODAgJiYgMjIpIHx8IChzaXplLndpZHRoIDwgNjgwICYmIDE4KX1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cIm1sLTIgdGV4dC1wcmltYXJ5ZGFya1wiPkVuZDo8L3A+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICB7ZW5kRGF0ZSAmJiAhaXNNb2JpbGUgPyAoXHJcbiAgICAgICAgICAgICAgPERhdGVQaWNrZXJcclxuICAgICAgICAgICAgICAgIHNlbGVjdGVkPXtlbmREYXRlfVxyXG4gICAgICAgICAgICAgICAgLy8gb25DaGFuZ2U9eyhkYXRlKSA9PiBvbkVuZERhdGVVcGRhdGUoZGF0ZSl9XHJcbiAgICAgICAgICAgICAgICBkYXRlRm9ybWF0PVwiTU1NTSB5eXl5XCJcclxuICAgICAgICAgICAgICAgIHNob3dNb250aFllYXJQaWNrZXJcclxuICAgICAgICAgICAgICAgIG1heERhdGU9e2FkZFllYXJzKG5ldyBEYXRlKCksIDMpfVxyXG4gICAgICAgICAgICAgICAgbWluRGF0ZT17bmV3IERhdGUoKX1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgIDxEYXRlUGlja2VyXHJcbiAgICAgICAgICAgICAgICBzZWxlY3RlZD17ZW5kRGF0ZX1cclxuICAgICAgICAgICAgICAgIC8vIG9uQ2hhbmdlPXsoZGF0ZSkgPT4gb25FbmREYXRlVXBkYXRlKGRhdGUpfVxyXG4gICAgICAgICAgICAgICAgZGF0ZUZvcm1hdD1cIk1NTU0geXl5eVwiXHJcbiAgICAgICAgICAgICAgICBzaG93TW9udGhZZWFyUGlja2VyXHJcbiAgICAgICAgICAgICAgICBtYXhEYXRlPXthZGRZZWFycyhuZXcgRGF0ZSgpLCAzKX1cclxuICAgICAgICAgICAgICAgIG1pbkRhdGU9e25ldyBEYXRlKCl9XHJcbiAgICAgICAgICAgICAgICB3aXRoUG9ydGFsXHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgKX1cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgIHdpZHRoOlxyXG4gICAgICAgICAgICAgICAgKHNpemUud2lkdGggPiA4NjAgJiYgJzEwMCUnKSB8fFxyXG4gICAgICAgICAgICAgICAgKHNpemUud2lkdGggPCA4NjAgJiYgc2l6ZS53aWR0aCA+IDY4MCAmJiAnNDclJykgfHxcclxuICAgICAgICAgICAgICAgIChzaXplLndpZHRoIDwgNjgwICYmIHNpemUud2lkdGggPiA1MjAgJiYgJzQwJScpIHx8XHJcbiAgICAgICAgICAgICAgICAoc2l6ZS53aWR0aCA8IDUyMCAmJiAnNDclJyksXHJcbiAgICAgICAgICAgICAgZ3JpZENvbHVtblN0YXJ0OiBzaXplLndpZHRoIDwgODYwID8gJzEnIDogJ3Vuc2V0JyxcclxuICAgICAgICAgICAgICBncmlkQ29sdW1uRW5kOiBzaXplLndpZHRoIDwgODYwID8gJzMnIDogJ3Vuc2V0JyxcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgY2xhc3NOYW1lPVwicGxhY2Utc2VsZi1jZW50ZXIgYmctd2hpdGUgcm91bmRlZC0yeGwgcHktMyBweC0zIG1kQ29udGFpbmVyOnB5LTMgbWRDb250YWluZXI6cHgtNCBsZ0NvbnRhaW5lcjpweC02IGxnQ29udGFpbmVyOnB5LTQgc2hhZG93LW1kIGdyaWQgZ3JpZC1jb2xzLTJmciBpdGVtcy1jZW50ZXIgdGV4dC14cyBtZENvbnRhaW5lcjp0ZXh0LXNtIGxnQ29udGFpbmVyOnRleHQtYmFzZVwiXHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICBzcmM9XCIvY2FzaC1mbG93L3RheC5zdmdcIlxyXG4gICAgICAgICAgICAgICAgaGVpZ2h0PXsoc2l6ZS53aWR0aCA+IDg2MCAmJiAyNSkgfHwgKHNpemUud2lkdGggPCA4NjAgJiYgc2l6ZS53aWR0aCA+IDY4MCAmJiAyMikgfHwgKHNpemUud2lkdGggPCA2ODAgJiYgMTgpfVxyXG4gICAgICAgICAgICAgICAgd2lkdGg9eyhzaXplLndpZHRoID4gODYwICYmIDI1KSB8fCAoc2l6ZS53aWR0aCA8IDg2MCAmJiBzaXplLndpZHRoID4gNjgwICYmIDIyKSB8fCAoc2l6ZS53aWR0aCA8IDY4MCAmJiAxOCl9XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJtbC0yXCI+VGF4OjwvcD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleFwiIHN0eWxlPXt7IHRleHRBbGlnbkxhc3Q6ICdyaWdodCcgfX0+XHJcbiAgICAgICAgICAgICAgPGlucHV0IGlkPVwidGF4LWlucHV0XCIgdmFsdWU9e3RheH0gY2xhc3NOYW1lPVwidy1mdWxsIGJnLXdoaXRlIGZvY3VzOm91dGxpbmUtbm9uZVwiIC8+XHJcbiAgICAgICAgICAgICAgPHA+JTwvcD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGlkPVwiY2hhcnRDb250YWluZXJcIiBjbGFzc05hbWU9XCJ3LWZ1bGwgaC0xLzIgcC00IG1kQ29udGFpbmVyOnAtOCBiZy13aGl0ZSByb3VuZGVkLTJ4bCBtdC0xMiBzaGFkb3ctbWRcIj5cclxuICAgICAgICAgIHsvKiA8Y2FudmFzIHJlZj17Y2hhcnRSZWZ9IGhlaWdodD17NzV9PjwvY2FudmFzPiAqL31cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbCBncmlkIGdyaWQtY29scy0yZnIgZ3JpZC1yb3dzLTNmciBsZzFDb250YWluZXI6Z3JpZC1jb2xzLTNmciBsZzFDb250YWluZXI6Z3JpZC1yb3dzLTJmciBnYXAteC02IHNtQ29udGFpbmVyOmdhcC14LTEyIGdhcC15LTggbXQtMTJcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsIGJnLXdoaXRlIHJvdW5kZWQtMnhsIHB5LTMgcHgtMyBtZENvbnRhaW5lcjpweS0zIG1kQ29udGFpbmVyOnB4LTQgbGdDb250YWluZXI6cHgtNiBsZ0NvbnRhaW5lcjpweS00IHNoYWRvdy1tZCBmbGV4IGp1c3RpZnktYmV0d2VlbiBpdGVtcy1jZW50ZXIgdGV4dC14cyBtZENvbnRhaW5lcjp0ZXh0LXNtIGxnQ29udGFpbmVyOnRleHQtYmFzZVwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgc3JjPVwiL2Nhc2gtZmxvdy9yZXZlbnVlLnN2Z1wiXHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ9eyhzaXplLndpZHRoID4gODYwICYmIDI1KSB8fCAoc2l6ZS53aWR0aCA8IDg2MCAmJiBzaXplLndpZHRoID4gNjgwICYmIDIyKSB8fCAoc2l6ZS53aWR0aCA8IDY4MCAmJiAxOCl9XHJcbiAgICAgICAgICAgICAgICB3aWR0aD17KHNpemUud2lkdGggPiA4NjAgJiYgMjUpIHx8IChzaXplLndpZHRoIDwgODYwICYmIHNpemUud2lkdGggPiA2ODAgJiYgMjIpIHx8IChzaXplLndpZHRoIDwgNjgwICYmIDE4KX1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cIm1sLTJcIj5Ub3RhbCByZXZlbnVlOjwvcD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxwPiR7dG90YWxSZXZlbnVlfTwvcD5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGwgYmctd2hpdGUgcm91bmRlZC0yeGwgcHktMyBweC0zIG1kQ29udGFpbmVyOnB5LTMgbWRDb250YWluZXI6cHgtNCBsZ0NvbnRhaW5lcjpweC02IGxnQ29udGFpbmVyOnB5LTQgc2hhZG93LW1kIGZsZXgganVzdGlmeS1iZXR3ZWVuIGl0ZW1zLWNlbnRlciB0ZXh0LXhzIG1kQ29udGFpbmVyOnRleHQtc20gbGdDb250YWluZXI6dGV4dC1iYXNlXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICBzcmM9XCIvY2FzaC1mbG93L21vbnRobHkuc3ZnXCJcclxuICAgICAgICAgICAgICAgIGhlaWdodD17KHNpemUud2lkdGggPiA4NjAgJiYgMjUpIHx8IChzaXplLndpZHRoIDwgODYwICYmIHNpemUud2lkdGggPiA2ODAgJiYgMjIpIHx8IChzaXplLndpZHRoIDwgNjgwICYmIDE4KX1cclxuICAgICAgICAgICAgICAgIHdpZHRoPXsoc2l6ZS53aWR0aCA+IDg2MCAmJiAyNSkgfHwgKHNpemUud2lkdGggPCA4NjAgJiYgc2l6ZS53aWR0aCA+IDY4MCAmJiAyMikgfHwgKHNpemUud2lkdGggPCA2ODAgJiYgMTgpfVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwibWwtMlwiPk1vbnRobHkgcmV2ZW51ZTo8L3A+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8cD4ke21vbnRobHlSZXZlbnVlfTwvcD5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGwgYmctd2hpdGUgcm91bmRlZC0yeGwgcHktMyBweC0zIG1kQ29udGFpbmVyOnB5LTMgbWRDb250YWluZXI6cHgtNCBsZ0NvbnRhaW5lcjpweC02IGxnQ29udGFpbmVyOnB5LTQgc2hhZG93LW1kIGZsZXgganVzdGlmeS1iZXR3ZWVuIGl0ZW1zLWNlbnRlciB0ZXh0LXhzIG1kQ29udGFpbmVyOnRleHQtc20gbGdDb250YWluZXI6dGV4dC1iYXNlXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICBzcmM9XCIvY2FzaC1mbG93L2Nvc3RzLnN2Z1wiXHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ9eyhzaXplLndpZHRoID4gODYwICYmIDI1KSB8fCAoc2l6ZS53aWR0aCA8IDg2MCAmJiBzaXplLndpZHRoID4gNjgwICYmIDIyKSB8fCAoc2l6ZS53aWR0aCA8IDY4MCAmJiAxOCl9XHJcbiAgICAgICAgICAgICAgICB3aWR0aD17KHNpemUud2lkdGggPiA4NjAgJiYgMjUpIHx8IChzaXplLndpZHRoIDwgODYwICYmIHNpemUud2lkdGggPiA2ODAgJiYgMjIpIHx8IChzaXplLndpZHRoIDwgNjgwICYmIDE4KX1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cIm1sLTJcIj5Ub3RhbCBjb3N0czo8L3A+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8cD4ke3RvdGFsQ29zdHN9PC9wPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbCBiZy13aGl0ZSByb3VuZGVkLTJ4bCBweS0zIHB4LTMgbWRDb250YWluZXI6cHktMyBtZENvbnRhaW5lcjpweC00IGxnQ29udGFpbmVyOnB4LTYgbGdDb250YWluZXI6cHktNCBzaGFkb3ctbWQgZmxleCBqdXN0aWZ5LWJldHdlZW4gaXRlbXMtY2VudGVyIHRleHQteHMgbWRDb250YWluZXI6dGV4dC1zbSBsZ0NvbnRhaW5lcjp0ZXh0LWJhc2VcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgIHNyYz1cIi9jYXNoLWZsb3cvbW9udGhseS1jb3N0cy5zdmdcIlxyXG4gICAgICAgICAgICAgICAgaGVpZ2h0PXsoc2l6ZS53aWR0aCA+IDg2MCAmJiAyNSkgfHwgKHNpemUud2lkdGggPCA4NjAgJiYgc2l6ZS53aWR0aCA+IDY4MCAmJiAyMikgfHwgKHNpemUud2lkdGggPCA2ODAgJiYgMTgpfVxyXG4gICAgICAgICAgICAgICAgd2lkdGg9eyhzaXplLndpZHRoID4gODYwICYmIDI1KSB8fCAoc2l6ZS53aWR0aCA8IDg2MCAmJiBzaXplLndpZHRoID4gNjgwICYmIDIyKSB8fCAoc2l6ZS53aWR0aCA8IDY4MCAmJiAxOCl9XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJtbC0yXCI+TW9udGhseSBjb3N0czo8L3A+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8cD4ke21vbnRobHlDb3N0c308L3A+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsIGJnLXdoaXRlIHJvdW5kZWQtMnhsIHB5LTMgcHgtMyBtZENvbnRhaW5lcjpweS0zIG1kQ29udGFpbmVyOnB4LTQgbGdDb250YWluZXI6cHgtNiBsZ0NvbnRhaW5lcjpweS00IHNoYWRvdy1tZCBmbGV4IGp1c3RpZnktYmV0d2VlbiBpdGVtcy1jZW50ZXIgdGV4dC14cyBtZENvbnRhaW5lcjp0ZXh0LXNtIGxnQ29udGFpbmVyOnRleHQtYmFzZVwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgc3JjPVwiL2Nhc2gtZmxvdy9tZWdhcGhvbmUuc3ZnXCJcclxuICAgICAgICAgICAgICAgIGhlaWdodD17KHNpemUud2lkdGggPiA4NjAgJiYgMjUpIHx8IChzaXplLndpZHRoIDwgODYwICYmIHNpemUud2lkdGggPiA2ODAgJiYgMjIpIHx8IChzaXplLndpZHRoIDwgNjgwICYmIDE4KX1cclxuICAgICAgICAgICAgICAgIHdpZHRoPXsoc2l6ZS53aWR0aCA+IDg2MCAmJiAyNSkgfHwgKHNpemUud2lkdGggPCA4NjAgJiYgc2l6ZS53aWR0aCA+IDY4MCAmJiAyMikgfHwgKHNpemUud2lkdGggPCA2ODAgJiYgMTgpfVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwibWwtMlwiPkdyb3NzIHByb2ZpdDo8L3A+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8cD4ke2dyb3NzUHJvZml0fTwvcD5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGwgYmctd2hpdGUgcm91bmRlZC0yeGwgcHktMyBweC0zIG1kQ29udGFpbmVyOnB5LTMgbWRDb250YWluZXI6cHgtNCBsZ0NvbnRhaW5lcjpweC02IGxnQ29udGFpbmVyOnB5LTQgc2hhZG93LW1kIGZsZXgganVzdGlmeS1iZXR3ZWVuIGl0ZW1zLWNlbnRlciB0ZXh0LXhzIG1kQ29udGFpbmVyOnRleHQtc20gbGdDb250YWluZXI6dGV4dC1iYXNlXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICBzcmM9XCIvY2FzaC1mbG93L25ldC13b3J0aC5zdmdcIlxyXG4gICAgICAgICAgICAgICAgaGVpZ2h0PXsoc2l6ZS53aWR0aCA+IDg2MCAmJiAyNSkgfHwgKHNpemUud2lkdGggPCA4NjAgJiYgc2l6ZS53aWR0aCA+IDY4MCAmJiAyMikgfHwgKHNpemUud2lkdGggPCA2ODAgJiYgMTgpfVxyXG4gICAgICAgICAgICAgICAgd2lkdGg9eyhzaXplLndpZHRoID4gODYwICYmIDI1KSB8fCAoc2l6ZS53aWR0aCA8IDg2MCAmJiBzaXplLndpZHRoID4gNjgwICYmIDIyKSB8fCAoc2l6ZS53aWR0aCA8IDY4MCAmJiAxOCl9XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJtbC0yXCI+TmV0IHByb2ZpdDo8L3A+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8cD4ke25ldFByb2ZpdH08L3A+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICB7LyogUmV2ZW51ZSAqL31cclxuICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAvLyByZWY9e3JldmVudWVSZWZ9XHJcbiAgICAgICAgICBzdHlsZT17eyBoZWlnaHQ6IDU1IH19XHJcbiAgICAgICAgICBjbGFzc05hbWU9XCJvdmVyZmxvdy1oaWRkZW4gcmVsYXRpdmUgdy1mdWxsIHJvdW5kZWQtMnhsIGJnLXdoaXRlIGRhcms6YmctYmFja2dyb3VuZCBweC00IHB5LTQgZmxleCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXIgbXQtMTIgZmxleCBmbGV4LXdyYXAgc2hhZG93LW1kXCJcclxuICAgICAgICA+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbCBmbGV4IGp1c3RpZnktYmV0d2VlbiBpdGVtcy1jZW50ZXJcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsZ0NvbnRhaW5lcjptbC0yXCI+XHJcbiAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1zbSBsZ0NvbnRhaW5lcjp0ZXh0LWJhc2VcIj5SZXZlbnVlPC9wPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsZ0NvbnRhaW5lcjptci0yIGZsZXggZmxleC1ub3dyYXAgaXRlbXMtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiY3Vyc29yLXBvaW50ZXJcIlxyXG4gICAgICAgICAgICAgICAgc3JjPVwiL2Nhc2gtZmxvdy9hZGQuc3ZnXCJcclxuICAgICAgICAgICAgICAgIGhlaWdodD17KHNpemUud2lkdGggPiA4NjAgJiYgMjIpIHx8IChzaXplLndpZHRoIDwgODYwICYmIHNpemUud2lkdGggPiA2ODAgJiYgMTgpIHx8IChzaXplLndpZHRoIDwgNjgwICYmIDE2KX1cclxuICAgICAgICAgICAgICAgIHdpZHRoPXsoc2l6ZS53aWR0aCA+IDg2MCAmJiAyMikgfHwgKHNpemUud2lkdGggPCA4NjAgJiYgc2l6ZS53aWR0aCA+IDY4MCAmJiAxOCkgfHwgKHNpemUud2lkdGggPCA2ODAgJiYgMTYpfVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgLy8gcmVmPXtkcm9wRG93bkljb259XHJcbiAgICAgICAgICAgICAgICAvLyBvbkNsaWNrPXtvblJldmVudWVTaG93fVxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibWwtMiBjdXJzb3ItcG9pbnRlclwiXHJcbiAgICAgICAgICAgICAgICBzcmM9XCIvY2FzaC1mbG93L2Ryb3Bkb3duLnN2Z1wiXHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ9eyhzaXplLndpZHRoID4gODYwICYmIDIyKSB8fCAoc2l6ZS53aWR0aCA8IDg2MCAmJiBzaXplLndpZHRoID4gNjgwICYmIDE4KSB8fCAoc2l6ZS53aWR0aCA8IDY4MCAmJiAxNil9XHJcbiAgICAgICAgICAgICAgICB3aWR0aD17KHNpemUud2lkdGggPiA4NjAgJiYgMjIpIHx8IChzaXplLndpZHRoIDwgODYwICYmIHNpemUud2lkdGggPiA2ODAgJiYgMTgpIHx8IChzaXplLndpZHRoIDwgNjgwICYmIDE2KX1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAvLyByZWY9e2lubmVyQ29udGFpbmVyUmV2ZW51ZVJlZn1cclxuICAgICAgICAgICAgY2xhc3NOYW1lPXtgdy1mdWxsICR7XHJcbiAgICAgICAgICAgICAgc2l6ZS53aWR0aCA8IDExMjBcclxuICAgICAgICAgICAgICAgID8gJ3RleHQtc20gbWRDb250YWluZXI6dGV4dC1iYXNlIGxnMUNvbnRhaW5lcjpteC04IGxnMUNvbnRhaW5lcjptYi02IG10LTQgIGJnLWJhY2tncm91bmQgcm91bmRlZC0yeGwgcHgtNCBtZENvbnRhaW5lcjpweC02IHB5LTQnXHJcbiAgICAgICAgICAgICAgICA6ICd3LWZ1bGwgbXgtOCBtYi02IG10LTQgIGJnLWJhY2tncm91bmQgcm91bmRlZC0yeGwgcHgtNCBtZENvbnRhaW5lcjpweC02IHB5LTQnXHJcbiAgICAgICAgICAgIH1gfVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICB7LyogPGhyIGNsYXNzTmFtZT1cInRleHQtcHJpbWFyeSB3LWZ1bGxcIiAvPiAqL31cclxuICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgIHN0eWxlPXt7IGZvbnRTaXplOiBzaXplLndpZHRoIDwgNTIwICYmICcwLjZyZW0nIH19XHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy1mdWxsIGdyaWQgZ3JpZC1jb2xzLTZmciBpdGVtcy1jZW50ZXIgdGV4dC14cyBtZENvbnRhaW5lcjp0ZXh0LXNtIGxnMUNvbnRhaW5lcjp0ZXh0LWJhc2VcIlxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgPGRpdj5uYW1lPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdj50eXBlPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdj5hbW91bnQ8L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2PnN0YXJ0PC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdj5lbmQ8L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2PjwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGhyIGNsYXNzTmFtZT1cInRleHQtcHJpbWFyeSB3LWZ1bGxcIiAvPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImgtZnVsbCB3LWZ1bGwgcm91bmRlZC0yeGwgZmxleCBmbGV4LXdyYXAgZmxleC1jb2xcIj5cclxuICAgICAgICAgICAgICB7cmV2ZW51ZUVsZW1lbnRzICYmXHJcbiAgICAgICAgICAgICAgICByZXZlbnVlRWxlbWVudHMubWFwKChlbGVtZW50LCBpbmRleCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgIDw+PC8+XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gICA8UmV2ZW51ZUVsZW1lbnRcclxuICAgICAgICAgICAgICAgICAgICAvLyAgIHByb3ZpZGVkPXtwcm92aWRlZH1cclxuICAgICAgICAgICAgICAgICAgICAvLyAgIHNldFJldmVudWVFbGVtZW50cz17c2V0UmV2ZW51ZUVsZW1lbnRzfVxyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgbWFpbkRvY3VtZW50PXttYWluRG9jdW1lbnR9XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gICBwcm9qZWN0SWQ9e3Byb2plY3RJZH1cclxuICAgICAgICAgICAgICAgICAgICAvLyAgIGRvY3VtZW50SWQ9e2RvY3VtZW50SWR9XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gICByZXZlbnVlRWxlbWVudHM9e3JldmVudWVFbGVtZW50c31cclxuICAgICAgICAgICAgICAgICAgICAvLyAgIGVsZW1lbnQ9e2VsZW1lbnR9XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gICBpbmRleD17aW5kZXh9XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gLz5cclxuICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIHsvKiBDb3N0cyAqL31cclxuICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAvLyByZWY9e2Nvc3RzUmVmfVxyXG4gICAgICAgICAgc3R5bGU9e3sgaGVpZ2h0OiA1NSB9fVxyXG4gICAgICAgICAgY2xhc3NOYW1lPVwib3ZlcmZsb3ctaGlkZGVuIHJlbGF0aXZlIHctZnVsbCByb3VuZGVkLTJ4bCBiZy13aGl0ZSBkYXJrOmJnLWJhY2tncm91bmQgcHgtNCBweS00IGZsZXgganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyIG10LTggZmxleCBmbGV4LXdyYXAgc2hhZG93LW1kXCJcclxuICAgICAgICA+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbCBmbGV4IGp1c3RpZnktYmV0d2VlbiBpdGVtcy1jZW50ZXJcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsZ0NvbnRhaW5lcjptbC0yXCI+XHJcbiAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1zbSBsZ0NvbnRhaW5lcjp0ZXh0LWJhc2VcIj5Db3N0czwvcD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGdDb250YWluZXI6bXItMiBmbGV4IGZsZXgtbm93cmFwIGl0ZW1zLWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImN1cnNvci1wb2ludGVyXCJcclxuICAgICAgICAgICAgICAgIHNyYz1cIi9jYXNoLWZsb3cvYWRkLnN2Z1wiXHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ9eyhzaXplLndpZHRoID4gODYwICYmIDIyKSB8fCAoc2l6ZS53aWR0aCA8IDg2MCAmJiBzaXplLndpZHRoID4gNjgwICYmIDE4KSB8fCAoc2l6ZS53aWR0aCA8IDY4MCAmJiAxNil9XHJcbiAgICAgICAgICAgICAgICB3aWR0aD17KHNpemUud2lkdGggPiA4NjAgJiYgMjIpIHx8IChzaXplLndpZHRoIDwgODYwICYmIHNpemUud2lkdGggPiA2ODAgJiYgMTgpIHx8IChzaXplLndpZHRoIDwgNjgwICYmIDE2KX1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm1sLTIgY3Vyc29yLXBvaW50ZXJcIlxyXG4gICAgICAgICAgICAgICAgc3JjPVwiL2Nhc2gtZmxvdy9kcm9wZG93bi5zdmdcIlxyXG4gICAgICAgICAgICAgICAgaGVpZ2h0PXsoc2l6ZS53aWR0aCA+IDg2MCAmJiAyMikgfHwgKHNpemUud2lkdGggPCA4NjAgJiYgc2l6ZS53aWR0aCA+IDY4MCAmJiAxOCkgfHwgKHNpemUud2lkdGggPCA2ODAgJiYgMTYpfVxyXG4gICAgICAgICAgICAgICAgd2lkdGg9eyhzaXplLndpZHRoID4gODYwICYmIDIyKSB8fCAoc2l6ZS53aWR0aCA8IDg2MCAmJiBzaXplLndpZHRoID4gNjgwICYmIDE4KSB8fCAoc2l6ZS53aWR0aCA8IDY4MCAmJiAxNil9XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgY2xhc3NOYW1lPXtgdy1mdWxsICR7XHJcbiAgICAgICAgICAgICAgc2l6ZS53aWR0aCA8IDExMjBcclxuICAgICAgICAgICAgICAgID8gJ3RleHQtc20gbWRDb250YWluZXI6dGV4dC1iYXNlIGxnMUNvbnRhaW5lcjpteC04IGxnMUNvbnRhaW5lcjptYi02IG10LTQgIGJnLWJhY2tncm91bmQgcm91bmRlZC0yeGwgcHgtNCBtZENvbnRhaW5lcjpweC02IHB5LTQnXHJcbiAgICAgICAgICAgICAgICA6ICd3LWZ1bGwgbXgtOCBtYi02IG10LTQgIGJnLWJhY2tncm91bmQgcm91bmRlZC0yeGwgcHgtNCBtZENvbnRhaW5lcjpweC02IHB5LTQnXHJcbiAgICAgICAgICAgIH1gfVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICB7LyogPGhyIGNsYXNzTmFtZT1cInRleHQtcHJpbWFyeSB3LWZ1bGxcIiAvPiAqL31cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGwgZ3JpZCBncmlkLWNvbHMtNmZyIGl0ZW1zLWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgIDxkaXY+bmFtZTwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXY+dHlwZTwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXY+YW1vdW50PC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdj5zdGFydDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXY+ZW5kPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdj48L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxociBjbGFzc05hbWU9XCJ0ZXh0LXByaW1hcnkgdy1mdWxsXCIgLz5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoLWZ1bGwgdy1mdWxsIHJvdW5kZWQtMnhsIGZsZXggZmxleC13cmFwIGZsZXgtY29sXCI+XHJcbiAgICAgICAgICAgICAge2Nvc3RzRWxlbWVudHMgJiZcclxuICAgICAgICAgICAgICAgIGNvc3RzRWxlbWVudHMubWFwKChlbGVtZW50LCBpbmRleCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgIDw+PC8+XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gICA8Q29zdHNFbGVtZW50XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gICBwcm92aWRlZD17cHJvdmlkZWR9XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gICBzZXRDb3N0c0VsZW1lbnRzPXtzZXRDb3N0c0VsZW1lbnRzfVxyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgbWFpbkRvY3VtZW50PXttYWluRG9jdW1lbnR9XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gICBwcm9qZWN0SWQ9e3Byb2plY3RJZH1cclxuICAgICAgICAgICAgICAgICAgICAvLyAgIGRvY3VtZW50SWQ9e2RvY3VtZW50SWR9XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gICBjb3N0c0VsZW1lbnRzPXtjb3N0c0VsZW1lbnRzfVxyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgZWxlbWVudD17ZWxlbWVudH1cclxuICAgICAgICAgICAgICAgICAgICAvLyAgIGluZGV4PXtpbmRleH1cclxuICAgICAgICAgICAgICAgICAgICAvLyAvPlxyXG4gICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBnZXRTdGF0aWNQYXRocyA9IGFzeW5jICgpID0+IHtcclxuICBjb25zdCBzbmFwc2hvdCA9IGF3YWl0IGRiLmNvbGxlY3Rpb24oJ3Byb2plY3RzJykuZ2V0KCk7XHJcblxyXG4gIGNvbnN0IHByb2plY3RzID0gW107XHJcbiAgc25hcHNob3QuZm9yRWFjaCgoZG9jKSA9PiB7XHJcbiAgICBwcm9qZWN0cy5wdXNoKGRvYy5kYXRhKCkpO1xyXG4gIH0pO1xyXG5cclxuICBjb25zdCBwYXRocyA9IHByb2plY3RzLm1hcCgocHJvamVjdCkgPT4gKHtcclxuICAgIHBhcmFtczoge1xyXG4gICAgICBwcm9qZWN0OiBwcm9qZWN0LnByb2plY3ROYW1lLnRvU3RyaW5nKCksXHJcbiAgICAgIGlkOiBwcm9qZWN0LnByb2plY3RJZC50b1N0cmluZygpLFxyXG4gICAgfSxcclxuICB9KSk7XHJcblxyXG4gIHJldHVybiB7XHJcbiAgICBwYXRoczogcGF0aHMsXHJcbiAgICBmYWxsYmFjazogdHJ1ZSxcclxuICB9O1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGdldFN0YXRpY1Byb3BzID0gYXN5bmMgKHsgcGFyYW1zIH0pID0+IHtcclxuICBjb25zb2xlLmxvZyhwYXJhbXMpO1xyXG4gIC8vIGxldCByZWYgPSBkYi5jb2xsZWN0aW9uKCdwcm9qZWN0cycpLndoZXJlKCdwcm9qZWN0TmFtZScsICc9PScsIHBhcmFtcy5wcm9qZWN0KTtcclxuICBsZXQgcmVmID0gZGJcclxuICAgIC5jb2xsZWN0aW9uKCdwcm9qZWN0cycpXHJcbiAgICAuZG9jKHBhcmFtcy5pZClcclxuICAgIC5jb2xsZWN0aW9uKCdjYXNoRmxvdycpXHJcbiAgICAuZG9jKHBhcmFtcy5wcm9qZWN0KVxyXG4gICAgLmNvbGxlY3Rpb24oJ2lucHV0cycpXHJcbiAgICAud2hlcmUoJ3Byb2plY3RJZCcsICc9PScsIHBhcmFtcy5pZCk7XHJcblxyXG4gIGNvbnN0IHNuYXBzaG90ID0gYXdhaXQgcmVmLmdldCgpO1xyXG4gIGNvbnN0IHByb2plY3QgPSBbXTtcclxuXHJcbiAgc25hcHNob3QuZm9yRWFjaCgoZG9jKSA9PiB7XHJcbiAgICBjb25zdCBkYXRhID0gSlNPTi5wYXJzZShzYWZlSnNvblN0cmluZ2lmeShkb2MuZGF0YSgpKSk7XHJcbiAgICBwcm9qZWN0LnB1c2goeyAuLi5kYXRhIH0pO1xyXG4gIH0pO1xyXG5cclxuICByZXR1cm4ge1xyXG4gICAgcHJvcHM6IHsgcHJvamVjdCB9LFxyXG4gICAgcmV2YWxpZGF0ZTogMSxcclxuICB9O1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgVW5pcXVlQ2FzaGZsb3dQYWdlO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9