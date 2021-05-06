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
        // style={{ height: 55 }}
        className: "overflow-hidden relative w-full rounded-2xl bg-white dark:bg-background px-4 py-4 flex justify-center items-center mt-12 flex flex-wrap shadow-md",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "w-full flex justify-between items-center",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "lgContainer:ml-2",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
              className: "text-sm lgContainer:text-base",
              children: "Revenue"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 495,
              columnNumber: 15
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 494,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 493,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "w-full ".concat(size.width < 1120 ? 'text-sm mdContainer:text-base lg1Container:mx-8 lg1Container:mb-6 mt-4  bg-background rounded-2xl px-4 mdContainer:px-6 py-4' : 'w-full mx-8 mb-6 mt-4  bg-background rounded-2xl px-4 mdContainer:px-6 py-4'),
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            style: {
              fontSize: size.width < 520 && '0.6rem'
            },
            className: "w-full grid grid-cols-5fr items-center text-xs mdContainer:text-sm lg1Container:text-base",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              children: "name"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 526,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              children: "type"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 527,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              children: "amount"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 528,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              children: "start"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 529,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              children: "end"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 530,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 531,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 522,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("hr", {
            className: "text-primary w-full"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 533,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "h-full w-full rounded-2xl flex flex-wrap flex-col",
            children: revenueElements && revenueElements.map(function (element, index) {
              console.log(element);
              return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: "w-full grid grid-cols-5fr py-3 items-start text-sm",
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
                  placeholder: "name",
                  className: "w-4/5 bg-background focus:outline-none",
                  value: element.title
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 540,
                  columnNumber: 23
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                  style: {
                    height: '20px'
                  },
                  className: "overflow-hidden flex flex-col flex-wrap",
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                    className: "w-full flex flex-row flex-nowrap",
                    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                      className: "cursor-default",
                      children: element.type
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 543,
                      columnNumber: 27
                    }, _this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 542,
                    columnNumber: 25
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 541,
                  columnNumber: 23
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
                    className: "w-4/5 bg-background focus:outline-none",
                    value: element.value,
                    placeholder: "amount"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 547,
                    columnNumber: 25
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 546,
                  columnNumber: 23
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_datepicker__WEBPACK_IMPORTED_MODULE_10___default.a, {
                    popperPlacement: "top-start",
                    popperProps: {
                      positionFixed: true
                    },
                    selected: startDate,
                    dateFormat: "MMMM yyyy",
                    showMonthYearPicker: true,
                    maxDate: Object(date_fns__WEBPACK_IMPORTED_MODULE_11__["addYears"])(new Date(), 3),
                    minDate: new Date()
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 550,
                    columnNumber: 25
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 549,
                  columnNumber: 23
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                  children: element.type == 'Recurring' ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_datepicker__WEBPACK_IMPORTED_MODULE_10___default.a, {
                    popperPlacement: "top-start",
                    popperProps: {
                      positionFixed: true
                    },
                    selected: endDate,
                    dateFormat: "MMMM yyyy",
                    showMonthYearPicker: true,
                    maxDate: Object(date_fns__WEBPACK_IMPORTED_MODULE_11__["addYears"])(new Date(), 3),
                    minDate: new Date()
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 564,
                    columnNumber: 27
                  }, _this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("hr", {
                    className: "text-primarydark mr-8 mt-2"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 576,
                    columnNumber: 27
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 562,
                  columnNumber: 23
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 539,
                columnNumber: 21
              }, _this);
            })
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 534,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 514,
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
              lineNumber: 593,
              columnNumber: 15
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 592,
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
              lineNumber: 596,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
              className: "ml-2 cursor-pointer",
              src: "/cash-flow/dropdown.svg",
              height: size.width > 860 && 22 || size.width < 860 && size.width > 680 && 18 || size.width < 680 && 16,
              width: size.width > 860 && 22 || size.width < 860 && size.width > 680 && 18 || size.width < 680 && 16
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 602,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 595,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 591,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "w-full ".concat(size.width < 1120 ? 'text-sm mdContainer:text-base lg1Container:mx-8 lg1Container:mb-6 mt-4  bg-background rounded-2xl px-4 mdContainer:px-6 py-4' : 'w-full mx-8 mb-6 mt-4  bg-background rounded-2xl px-4 mdContainer:px-6 py-4'),
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "w-full grid grid-cols-6fr items-center",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              children: "name"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 619,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              children: "type"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 620,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              children: "amount"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 621,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              children: "start"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 622,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              children: "end"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 623,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 624,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 618,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("hr", {
            className: "text-primary w-full"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 626,
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
            lineNumber: 627,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 610,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 586,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvZGFzaGJvYXJkL3Byb2plY3RzL1twcm9qZWN0XS9jYXNoLWZsb3cvLmpzIl0sIm5hbWVzIjpbIlVuaXF1ZUNhc2hmbG93UGFnZSIsInByb2plY3QiLCJjb25zb2xlIiwibG9nIiwidXNlU3RhdGUiLCJEYXRlIiwic3RhcnREYXRlIiwic2V0U3RhcnREYXRlIiwiZW5kRGF0ZSIsInNldEVuZERhdGUiLCJzZWxlY3RlZFByb2plY3QiLCJzZXRTZWxlY3RlZFByb2plY3QiLCJyZXZlbnVlRWxlbWVudHMiLCJzZXRSZXZlbnVlRWxlbWVudHMiLCJjb3N0c0VsZW1lbnRzIiwic2V0Q29zdHNFbGVtZW50cyIsInBlcmlvZHMiLCJzZXRQZXJpb2RzIiwidGF4Iiwic2V0VGF4Iiwic2l6ZSIsInVzZVdpbmRvd1NpemUiLCJ0b3RhbFJldmVudWUiLCJzZXRUb3RhbFJldmVudWUiLCJtb250aGx5UmV2ZW51ZSIsInNldE1vbnRobHlSZXZlbnVlIiwidG90YWxDb3N0cyIsInNldFRvdGFsQ29zdHMiLCJtb250aGx5Q29zdHMiLCJzZXRNb250aGx5Q29zdHMiLCJncm9zc1Byb2ZpdCIsInNldEdyb3NzUHJvZml0IiwibmV0UHJvZml0Iiwic2V0TmV0UHJvZml0Iiwicm91dGVyIiwidXNlUm91dGVyIiwidXNlRWZmZWN0IiwiY2hhbmdlZFN0YXJ0RGF0ZSIsImdsb2JhbFN0YXJ0RGF0ZSIsIl9zZWNvbmRzIiwiY2hhbmdlZEVuZERhdGUiLCJnbG9iYWxFbmREYXRlIiwidG90YWxSZXZlbnVlQXJyYXkiLCJtYXAiLCJlbGVtZW50IiwicGFyc2VJbnQiLCJ2YWx1ZSIsImxlbmd0aCIsInJlZHVjZSIsImEiLCJiIiwiTnVtYmVyIiwiaXNOYU4iLCJNYXRoIiwicm91bmQiLCJwZXJpb2RMZW5ndGgiLCJ0b3RhbENvc3RzQXJyYXkiLCJpc0Zpbml0ZSIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJpbm5lckhUTUwiLCJ3aWR0aCIsIm15Q2hhcnRSZWYiLCJnZXRDb250ZXh0IiwicmV2ZW51ZURhdGFzZXQiLCJ0ZXN0QXJyYXkiLCJyZXZlbnVlRWxlbWVudCIsImluZGV4IiwibW9udGhEYXRhIiwicGVyaW9kIiwicGVyaW9kSW5kZXgiLCJyZXZlbnVlUGVyaW9kIiwicHVzaCIsImxhYmVsIiwidGl0bGUiLCJkYXRhIiwiYmFja2dyb3VuZENvbG9yIiwiY29sb3IiLCJib3JkZXJDb2xvciIsImNvc3RzRGF0YXNldCIsImNvc3RzRWxlbWVudCIsImNvc3RzUGVyaW9kIiwicmV2ZW51ZUFycmF5IiwiY2FsY3VsYXRlZFJldmVudWVBcnJheSIsInVuZGVmaW5lZCIsImMiLCJpIiwiY29zdHNBcnJheSIsImNhbGN1bGF0ZWRDb3N0c0FycmF5IiwiZmluYWxBcnJheSIsImNhbGN1bGF0ZWRGaW5hbEFycmF5IiwiYXJyYXkiLCJ6ZXJvQXJyYXkiLCJmaW5hbERhdGFCZWZvcmVUYXgiLCJmaW5hbERhdGFBZnRlclRheCIsIm5ldFdvcnRoQXJyYXkiLCJuZXRXb3J0aCIsImRhdGFFbGVtZW50IiwicmV2ZW51ZUVsZW1lbnRJbmRleCIsIkNoYXJ0IiwidHlwZSIsImxhYmVscyIsImRhdGFzZXRzIiwiZmlsbCIsImxpbmVUZW5zaW9uIiwiYm9yZGVyV2lkdGgiLCJwb2ludFJhZGl1cyIsIm9wdGlvbnMiLCJza2lwTnVsbCIsInJlc3BvbnNpdmUiLCJwbHVnaW5zIiwibGVnZW5kIiwicG9zaXRpb24iLCJmb250RmFtaWx5IiwiZm9udCIsImJveFdpZHRoIiwic2NhbGVzIiwieCIsInN0YWNrZWQiLCJ0aWNrcyIsImJlZ2luQXRaZXJvIiwieSIsImlzRmFsbGJhY2siLCJpc01vYmlsZSIsImFkZFllYXJzIiwiZ3JpZENvbHVtblN0YXJ0IiwiZ3JpZENvbHVtbkVuZCIsInRleHRBbGlnbkxhc3QiLCJmb250U2l6ZSIsImhlaWdodCIsInBvc2l0aW9uRml4ZWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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aWMvd2VicGFjay9wYWdlcy9kYXNoYm9hcmQvcHJvamVjdHMvW3Byb2plY3RdL2Nhc2gtZmxvdy9baWRdLjRjZmY4MTg2Yjg2YTI2MGE1ODhlLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSwgdXNlUmVmIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBkYiB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL2xpYi9maXJlYmFzZS1hZG1pbic7XHJcbmltcG9ydCB7IGRiIGFzIGRiQ2xpZW50IH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vbGliL2ZpcmViYXNlJztcclxuaW1wb3J0IHsgaXNNb2JpbGUgfSBmcm9tICdyZWFjdC1kZXZpY2UtZGV0ZWN0JztcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xyXG5pbXBvcnQgQ29va2llcyBmcm9tICdqcy1jb29raWUnO1xyXG5pbXBvcnQgVW5pcXVlRWxlbWVudCBmcm9tICcuLi8uLi8uLi8uLi8uLi9jb21wb25lbnRzL2Rhc2hib2FyZC9zdGFydHVwL3Byb2plY3QvYnVzaW5lc3MtYXBwL2NvbXBldGl0b3JzL1VuaXF1ZUVsZW1lbnQnO1xyXG5pbXBvcnQgQm91bmNlTG9hZGVyQ29tcG9uZW50IGZyb20gJy4uLy4uLy4uLy4uLy4uL2NvbXBvbmVudHMvQm91bmNlTG9hZGVyJztcclxuY29uc3Qgc2FmZUpzb25TdHJpbmdpZnkgPSByZXF1aXJlKCdzYWZlLWpzb24tc3RyaW5naWZ5Jyk7XHJcbmltcG9ydCB7IHVzZVdpbmRvd1NpemUgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi91dGlscy91c2VXaW5kb3dTaXplJztcclxuXHJcbmltcG9ydCBEYXRlUGlja2VyIGZyb20gJ3JlYWN0LWRhdGVwaWNrZXInO1xyXG5pbXBvcnQgeyBhZGRZZWFycywgZm9ybWF0IH0gZnJvbSAnZGF0ZS1mbnMnO1xyXG5pbXBvcnQgbW9tZW50IGZyb20gJ21vbWVudCc7XHJcblxyXG5jb25zdCBVbmlxdWVDYXNoZmxvd1BhZ2UgPSAoeyBwcm9qZWN0IH0pID0+IHtcclxuICBjb25zb2xlLmxvZygnUGFydGljdWxhciBwcm9qZWN0IC0tPiAnLCBwcm9qZWN0KTtcclxuICBjb25zdCBbc3RhcnREYXRlLCBzZXRTdGFydERhdGVdID0gdXNlU3RhdGUobmV3IERhdGUoKSk7XHJcbiAgY29uc3QgW2VuZERhdGUsIHNldEVuZERhdGVdID0gdXNlU3RhdGUobmV3IERhdGUoKSk7XHJcbiAgY29uc3QgW3NlbGVjdGVkUHJvamVjdCwgc2V0U2VsZWN0ZWRQcm9qZWN0XSA9IHVzZVN0YXRlKG51bGwpO1xyXG4gIGNvbnN0IFtyZXZlbnVlRWxlbWVudHMsIHNldFJldmVudWVFbGVtZW50c10gPSB1c2VTdGF0ZSgpO1xyXG4gIGNvbnN0IFtjb3N0c0VsZW1lbnRzLCBzZXRDb3N0c0VsZW1lbnRzXSA9IHVzZVN0YXRlKCk7XHJcbiAgY29uc3QgW3BlcmlvZHMsIHNldFBlcmlvZHNdID0gdXNlU3RhdGUoKTtcclxuICBjb25zdCBbdGF4LCBzZXRUYXhdID0gdXNlU3RhdGUoKTtcclxuICBjb25zdCBzaXplID0gdXNlV2luZG93U2l6ZSgpO1xyXG4gIC8vIFN1bSBkYXRhXHJcbiAgY29uc3QgW3RvdGFsUmV2ZW51ZSwgc2V0VG90YWxSZXZlbnVlXSA9IHVzZVN0YXRlKCk7XHJcbiAgY29uc3QgW21vbnRobHlSZXZlbnVlLCBzZXRNb250aGx5UmV2ZW51ZV0gPSB1c2VTdGF0ZSgpO1xyXG4gIGNvbnN0IFt0b3RhbENvc3RzLCBzZXRUb3RhbENvc3RzXSA9IHVzZVN0YXRlKCk7XHJcbiAgY29uc3QgW21vbnRobHlDb3N0cywgc2V0TW9udGhseUNvc3RzXSA9IHVzZVN0YXRlKCk7XHJcbiAgY29uc3QgW2dyb3NzUHJvZml0LCBzZXRHcm9zc1Byb2ZpdF0gPSB1c2VTdGF0ZSgpO1xyXG4gIGNvbnN0IFtuZXRQcm9maXQsIHNldE5ldFByb2ZpdF0gPSB1c2VTdGF0ZSgpO1xyXG5cclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIHByb2plY3QgJiYgc2V0U2VsZWN0ZWRQcm9qZWN0KHByb2plY3RbMF0pO1xyXG4gICAgcHJvamVjdCAmJiBzZXRSZXZlbnVlRWxlbWVudHMocHJvamVjdFswXS5yZXZlbnVlRWxlbWVudHMpO1xyXG4gICAgcHJvamVjdCAmJiBzZXRDb3N0c0VsZW1lbnRzKHByb2plY3RbMF0uY29zdHNFbGVtZW50cyk7XHJcbiAgICBwcm9qZWN0ICYmIHNldFBlcmlvZHMocHJvamVjdFswXS5wZXJpb2RzKTtcclxuICAgIHByb2plY3QgJiYgc2V0VGF4KHByb2plY3RbMF0udGF4KTtcclxuICAgIC8vIFN1bSBkYXRhXHJcbiAgICAvLyBHbG9iYWwgc3RhcnQgZGF0ZVxyXG4gICAgY29uc3QgY2hhbmdlZFN0YXJ0RGF0ZSA9IHByb2plY3RbMF0uZ2xvYmFsU3RhcnREYXRlLl9zZWNvbmRzICogMTAwMDtcclxuICAgIGNvbnNvbGUubG9nKGNoYW5nZWRTdGFydERhdGUpO1xyXG4gICAgcHJvamVjdFswXS5nbG9iYWxTdGFydERhdGUgIT09ICcnICYmIHNldFN0YXJ0RGF0ZShuZXcgRGF0ZShjaGFuZ2VkU3RhcnREYXRlKSk7XHJcbiAgICBjb25zdCBjaGFuZ2VkRW5kRGF0ZSA9IHByb2plY3RbMF0uZ2xvYmFsRW5kRGF0ZS5fc2Vjb25kcyAqIDEwMDA7XHJcbiAgICAvLyBHbG9iYWwgZW5kIGRhdGVcclxuICAgIHByb2plY3RbMF0uZ2xvYmFsRW5kRGF0ZSAhPT0gJycgJiYgc2V0RW5kRGF0ZShuZXcgRGF0ZShjaGFuZ2VkRW5kRGF0ZSkpO1xyXG4gICAgLy8gUGVyaW9kc1xyXG4gICAgc2V0UGVyaW9kcyhwcm9qZWN0WzBdLnBlcmlvZHMpO1xyXG4gICAgLy8gVG90YWwgcmV2ZW51ZVxyXG4gICAgY29uc3QgdG90YWxSZXZlbnVlQXJyYXkgPSBwcm9qZWN0WzBdLnJldmVudWVFbGVtZW50cy5tYXAoKGVsZW1lbnQpID0+IHBhcnNlSW50KGVsZW1lbnQudmFsdWUgKiBlbGVtZW50LnBlcmlvZHMubGVuZ3RoKSk7XHJcbiAgICBjb25zdCB0b3RhbFJldmVudWUgPSB0b3RhbFJldmVudWVBcnJheS5yZWR1Y2UoKGEsIGIpID0+IHtcclxuICAgICAgcmV0dXJuIGEgKyBiO1xyXG4gICAgfSwgMCk7XHJcbiAgICBzZXRUb3RhbFJldmVudWUoTnVtYmVyLmlzTmFOKHRvdGFsUmV2ZW51ZSkgPyAwIDogTWF0aC5yb3VuZCh0b3RhbFJldmVudWUpKTtcclxuICAgIC8vIE1vbnRobHkgcmV2ZW51ZVxyXG4gICAgY29uc3QgcGVyaW9kTGVuZ3RoID0gcHJvamVjdFswXS5wZXJpb2RzLmxlbmd0aDtcclxuICAgIGNvbnN0IG1vbnRobHlSZXZlbnVlID0gdG90YWxSZXZlbnVlIC8gcGVyaW9kTGVuZ3RoO1xyXG4gICAgc2V0TW9udGhseVJldmVudWUoTnVtYmVyLmlzTmFOKG1vbnRobHlSZXZlbnVlKSA/IDAgOiBNYXRoLnJvdW5kKG1vbnRobHlSZXZlbnVlKSk7XHJcbiAgICAvLyBUb3RhbCBjb3N0c1xyXG4gICAgY29uc3QgdG90YWxDb3N0c0FycmF5ID0gcHJvamVjdFswXS5jb3N0c0VsZW1lbnRzLm1hcCgoZWxlbWVudCkgPT4gcGFyc2VJbnQoZWxlbWVudC52YWx1ZSAqIGVsZW1lbnQucGVyaW9kcy5sZW5ndGgpKTtcclxuICAgIGNvbnN0IHRvdGFsQ29zdHMgPSB0b3RhbENvc3RzQXJyYXkucmVkdWNlKChhLCBiKSA9PiB7XHJcbiAgICAgIHJldHVybiBhICsgYjtcclxuICAgIH0sIDApO1xyXG4gICAgc2V0VG90YWxDb3N0cyhOdW1iZXIuaXNGaW5pdGUodG90YWxDb3N0cykgPyBNYXRoLnJvdW5kKHRvdGFsQ29zdHMpIDogMCk7XHJcbiAgICAvLyBNb250aGx5IGNvc3RzXHJcbiAgICBjb25zdCBtb250aGx5Q29zdHMgPSB0b3RhbENvc3RzIC8gcGVyaW9kTGVuZ3RoO1xyXG4gICAgc2V0TW9udGhseUNvc3RzKE51bWJlci5pc0Zpbml0ZShtb250aGx5Q29zdHMpID8gTWF0aC5yb3VuZChtb250aGx5Q29zdHMpIDogMCk7XHJcbiAgICAvLyBHcm9zcyBwcm9maXRcclxuICAgIGNvbnN0IGdyb3NzUHJvZml0ID0gdG90YWxSZXZlbnVlIC0gdG90YWxDb3N0cztcclxuICAgIHNldEdyb3NzUHJvZml0KE51bWJlci5pc0Zpbml0ZShncm9zc1Byb2ZpdCkgPyBNYXRoLnJvdW5kKGdyb3NzUHJvZml0KSA6IDApO1xyXG4gICAgLy8gTmV0IHByb2ZpdFxyXG4gICAgY29uc3QgdGF4ID0gcGFyc2VJbnQocHJvamVjdFswXS50YXgpO1xyXG4gICAgY29uc3QgbmV0UHJvZml0ID0gZ3Jvc3NQcm9maXQgLSAodGF4IC8gMTAwKSAqIGdyb3NzUHJvZml0O1xyXG4gICAgc2V0TmV0UHJvZml0KE51bWJlci5pc0Zpbml0ZShuZXRQcm9maXQpID8gTWF0aC5yb3VuZChuZXRQcm9maXQpIDogMCk7XHJcbiAgfSwgW3Byb2plY3RdKTtcclxuICAvLyAgIGNvbnN0IFtjb21wZXRpdG9ycywgc2V0Q29tcGV0aXRvcnNdID0gdXNlU3RhdGUoW10pO1xyXG5cclxuICAvLyBDaGFydFxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAvLyBjb25zdCBteUNoYXJ0UmVmID0gY2hhcnRSZWYuY3VycmVudC5nZXRDb250ZXh0KCcyZCcpO1xyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYGNoYXJ0Q29udGFpbmVyYCkuaW5uZXJIVE1MID0gJyZuYnNwOyc7XHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgY2hhcnRDb250YWluZXJgKS5pbm5lckhUTUwgPSBgPGNhbnZhcyBoZWlnaHQ9JyR7c2l6ZS53aWR0aCA+IDY4MCA/IDc1IDogJ3Vuc2V0J30nIGlkPSdjaGFydCc+PC9jYW52YXM+YDtcclxuICAgIGNvbnN0IG15Q2hhcnRSZWYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2hhcnQnKS5nZXRDb250ZXh0KCcyZCcpO1xyXG5cclxuICAgIC8vIFJldmVudWUgZGF0YXNldHNcclxuICAgIGNvbnN0IHJldmVudWVEYXRhc2V0ID0gW107XHJcbiAgICBjb25zdCB0ZXN0QXJyYXkgPSBbXTtcclxuICAgIC8vIGNvbnN0IG1vbnRoRGF0YSA9IHBlcmlvZHMgJiYgcGVyaW9kcy5tYXAoKCkgPT4gbnVsbCk7XHJcbiAgICByZXZlbnVlRWxlbWVudHMgJiZcclxuICAgICAgcmV2ZW51ZUVsZW1lbnRzLm1hcCgocmV2ZW51ZUVsZW1lbnQsIGluZGV4KSA9PiB7XHJcbiAgICAgICAgY29uc3QgbW9udGhEYXRhID0gcGVyaW9kcyAmJiBwZXJpb2RzLm1hcCgoKSA9PiBudWxsKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhyZXZlbnVlRWxlbWVudCk7XHJcbiAgICAgICAgcGVyaW9kcyAmJlxyXG4gICAgICAgICAgcGVyaW9kcy5tYXAoKHBlcmlvZCwgcGVyaW9kSW5kZXgpID0+IHtcclxuICAgICAgICAgICAgcmV2ZW51ZUVsZW1lbnQucGVyaW9kcy5tYXAoKHJldmVudWVQZXJpb2QpID0+IHtcclxuICAgICAgICAgICAgICBpZiAocGVyaW9kID09IHJldmVudWVQZXJpb2QpIHtcclxuICAgICAgICAgICAgICAgIGlmIChtb250aERhdGFbcGVyaW9kSW5kZXhdID09IG51bGwpIHtcclxuICAgICAgICAgICAgICAgICAgbW9udGhEYXRhW3BlcmlvZEluZGV4XSA9IHJldmVudWVFbGVtZW50LnZhbHVlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICBjb25zb2xlLmxvZyhtb250aERhdGEpO1xyXG4gICAgICAgIHRlc3RBcnJheS5wdXNoKG1vbnRoRGF0YSk7XHJcbiAgICAgICAgcmV2ZW51ZURhdGFzZXQucHVzaCh7XHJcbiAgICAgICAgICBsYWJlbDogYHJldmVudWUgLyAke3JldmVudWVFbGVtZW50LnRpdGxlfWAsXHJcbiAgICAgICAgICBkYXRhOiBtb250aERhdGEsXHJcbiAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IHJldmVudWVFbGVtZW50LmNvbG9yLFxyXG4gICAgICAgICAgYm9yZGVyQ29sb3I6IHJldmVudWVFbGVtZW50LmNvbG9yLFxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9KTtcclxuXHJcbiAgICAvLyBDb3N0cyBkYXRhc2V0c1xyXG4gICAgY29uc3QgY29zdHNEYXRhc2V0ID0gW107XHJcbiAgICBjb3N0c0VsZW1lbnRzICYmXHJcbiAgICAgIGNvc3RzRWxlbWVudHMubWFwKChjb3N0c0VsZW1lbnQsIGluZGV4KSA9PiB7XHJcbiAgICAgICAgY29uc3QgbW9udGhEYXRhID0gcGVyaW9kcyAmJiBwZXJpb2RzLm1hcCgoKSA9PiBudWxsKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhjb3N0c0VsZW1lbnQpO1xyXG4gICAgICAgIHBlcmlvZHMgJiZcclxuICAgICAgICAgIHBlcmlvZHMubWFwKChwZXJpb2QsIHBlcmlvZEluZGV4KSA9PiB7XHJcbiAgICAgICAgICAgIGNvc3RzRWxlbWVudC5wZXJpb2RzLm1hcCgoY29zdHNQZXJpb2QpID0+IHtcclxuICAgICAgICAgICAgICBpZiAocGVyaW9kID09IGNvc3RzUGVyaW9kKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAobW9udGhEYXRhW3BlcmlvZEluZGV4XSA9PSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICAgIG1vbnRoRGF0YVtwZXJpb2RJbmRleF0gPSAtY29zdHNFbGVtZW50LnZhbHVlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICBjb25zb2xlLmxvZyhtb250aERhdGEpO1xyXG4gICAgICAgIHRlc3RBcnJheS5wdXNoKG1vbnRoRGF0YSk7XHJcbiAgICAgICAgY29zdHNEYXRhc2V0LnB1c2goe1xyXG4gICAgICAgICAgbGFiZWw6IGBjb3N0cyAvICR7Y29zdHNFbGVtZW50LnRpdGxlfWAsXHJcbiAgICAgICAgICBkYXRhOiBtb250aERhdGEsXHJcbiAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IGNvc3RzRWxlbWVudC5jb2xvcixcclxuICAgICAgICAgIGJvcmRlckNvbG9yOiBjb3N0c0VsZW1lbnQuY29sb3IsXHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH0pO1xyXG4gICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gICAgLy8gUmV2ZW51ZVxyXG4gICAgY29uc3QgcmV2ZW51ZUFycmF5ID0gW107XHJcbiAgICByZXZlbnVlRGF0YXNldC5sZW5ndGggIT09IDAgJiZcclxuICAgICAgcmV2ZW51ZURhdGFzZXQubGVuZ3RoICE9PSAwICYmXHJcbiAgICAgIHJldmVudWVEYXRhc2V0Lm1hcCgoZWxlbWVudCkgPT5cclxuICAgICAgICByZXZlbnVlQXJyYXkucHVzaChcclxuICAgICAgICAgIGVsZW1lbnQuZGF0YSAmJlxyXG4gICAgICAgICAgICBlbGVtZW50LmRhdGEubWFwKChkYXRhKSA9PiB7XHJcbiAgICAgICAgICAgICAgaWYgKGRhdGEgIT09IG51bGwpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBwYXJzZUludChkYXRhKTtcclxuICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIDA7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIClcclxuICAgICAgKTtcclxuICAgIGNvbnNvbGUubG9nKHJldmVudWVBcnJheSk7XHJcbiAgICBjb25zdCBjYWxjdWxhdGVkUmV2ZW51ZUFycmF5ID1cclxuICAgICAgcmV2ZW51ZUFycmF5Lmxlbmd0aCAhPT0gMCAmJiByZXZlbnVlQXJyYXlbMF0gIT09IHVuZGVmaW5lZCAmJiByZXZlbnVlQXJyYXkucmVkdWNlKChhLCBiKSA9PiBhLm1hcCgoYywgaSkgPT4gYyArIGJbaV0pKTtcclxuICAgIGNvbnNvbGUubG9nKGNhbGN1bGF0ZWRSZXZlbnVlQXJyYXkpO1xyXG4gICAgLy8gQ29zdHNcclxuICAgIGNvbnN0IGNvc3RzQXJyYXkgPSBbXTtcclxuICAgIGNvbnNvbGUubG9nKGNvc3RzRGF0YXNldCk7XHJcbiAgICBjb3N0c0RhdGFzZXQubGVuZ3RoICE9PSAwICYmXHJcbiAgICAgIGNvc3RzRGF0YXNldC5sZW5ndGggIT09IDAgJiZcclxuICAgICAgY29zdHNEYXRhc2V0Lm1hcCgoZWxlbWVudCkgPT5cclxuICAgICAgICBjb3N0c0FycmF5LnB1c2goXHJcbiAgICAgICAgICBlbGVtZW50LmRhdGEgJiZcclxuICAgICAgICAgICAgZWxlbWVudC5kYXRhLm1hcCgoZGF0YSkgPT4ge1xyXG4gICAgICAgICAgICAgIGlmIChkYXRhICE9PSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gcGFyc2VJbnQoZGF0YSk7XHJcbiAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiAwO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSlcclxuICAgICAgICApXHJcbiAgICAgICk7XHJcbiAgICBjb25zb2xlLmxvZyhjb3N0c0FycmF5KTtcclxuICAgIGNvbnN0IGNhbGN1bGF0ZWRDb3N0c0FycmF5ID1cclxuICAgICAgY29zdHNBcnJheS5sZW5ndGggIT09IDAgJiYgY29zdHNBcnJheVswXSAhPT0gdW5kZWZpbmVkICYmIGNvc3RzQXJyYXkucmVkdWNlKChhLCBiKSA9PiBhLm1hcCgoYywgaSkgPT4gYyArIGJbaV0pKTtcclxuICAgIGNvbnNvbGUubG9nKGNhbGN1bGF0ZWRDb3N0c0FycmF5KTtcclxuICAgIC8vIEZpbmFsIHZhbHVlXHJcbiAgICBjb25zdCBmaW5hbEFycmF5ID0gW2NhbGN1bGF0ZWRSZXZlbnVlQXJyYXksIGNhbGN1bGF0ZWRDb3N0c0FycmF5XTtcclxuICAgIGNvbnNvbGUubG9nKGZpbmFsQXJyYXkpO1xyXG4gICAgLy8gQ2hlY2sgaWYgYW55IGFycmF5IGlzIGZhbHN5XHJcbiAgICBjb25zdCBjYWxjdWxhdGVkRmluYWxBcnJheSA9XHJcbiAgICAgIGZpbmFsQXJyYXkgJiZcclxuICAgICAgZmluYWxBcnJheS5tYXAoKGFycmF5KSA9PiB7XHJcbiAgICAgICAgaWYgKCFhcnJheSkge1xyXG4gICAgICAgICAgY29uc3QgemVyb0FycmF5ID0gW107XHJcbiAgICAgICAgICBwZXJpb2RzICYmIHBlcmlvZHMubWFwKChwZXJpb2QpID0+IHplcm9BcnJheS5wdXNoKDApKTtcclxuICAgICAgICAgIHJldHVybiB6ZXJvQXJyYXk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHJldHVybiBhcnJheTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgY29uc29sZS5sb2coY2FsY3VsYXRlZEZpbmFsQXJyYXkpO1xyXG4gICAgY29uc3QgZmluYWxEYXRhQmVmb3JlVGF4ID1cclxuICAgICAgY2FsY3VsYXRlZEZpbmFsQXJyYXkubGVuZ3RoICE9PSAwICYmIGNhbGN1bGF0ZWRGaW5hbEFycmF5LnJlZHVjZSgoYSwgYikgPT4gYSAmJiBiICYmIGEubWFwKChjLCBpKSA9PiBjICsgYltpXSkpO1xyXG4gICAgY29uc3QgZmluYWxEYXRhQWZ0ZXJUYXggPSBmaW5hbERhdGFCZWZvcmVUYXggJiYgZmluYWxEYXRhQmVmb3JlVGF4Lm1hcCgoZGF0YSkgPT4gZGF0YSAtICh0YXggLyAxMDApICogZGF0YSk7XHJcbiAgICBjb25zb2xlLmxvZyhmaW5hbERhdGFBZnRlclRheCk7XHJcblxyXG4gICAgY29uc3QgbmV0V29ydGhBcnJheSA9IFtdO1xyXG4gICAgY29uc3QgbmV0V29ydGggPVxyXG4gICAgICByZXZlbnVlRGF0YXNldC5sZW5ndGggIT09IDAgJiZcclxuICAgICAgY29zdHNEYXRhc2V0Lmxlbmd0aCAhPT0gMCAmJlxyXG4gICAgICByZXZlbnVlRGF0YXNldCAmJlxyXG4gICAgICByZXZlbnVlRGF0YXNldC5tYXAoKHJldmVudWVFbGVtZW50LCBpbmRleCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHZhbHVlID1cclxuICAgICAgICAgIHJldmVudWVFbGVtZW50LmRhdGEgJiZcclxuICAgICAgICAgIHJldmVudWVFbGVtZW50LmRhdGEubWFwKChkYXRhRWxlbWVudCwgcmV2ZW51ZUVsZW1lbnRJbmRleCkgPT4ge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhkYXRhRWxlbWVudCk7XHJcbiAgICAgICAgICAgIGlmIChkYXRhRWxlbWVudCAhPT0gbnVsbCAmJiBjb3N0c0RhdGFzZXRbaW5kZXhdKSB7XHJcbiAgICAgICAgICAgICAgaWYgKGNvc3RzRGF0YXNldFtpbmRleF0uZGF0YVtyZXZlbnVlRWxlbWVudEluZGV4XSkge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgZ3Jvc3NQcm9maXQgPSBkYXRhRWxlbWVudCAtIC1jb3N0c0RhdGFzZXRbMF0uZGF0YVtyZXZlbnVlRWxlbWVudEluZGV4XTtcclxuICAgICAgICAgICAgICAgIG5ldFdvcnRoQXJyYXkucHVzaChncm9zc1Byb2ZpdCAtICh0YXggLyAxMDApICogZ3Jvc3NQcm9maXQpO1xyXG4gICAgICAgICAgICAgICAgLy8gcmV0dXJuIGdyb3NzUHJvZml0IC0gKHRheCAvIDEwMCkgKiBncm9zc1Byb2ZpdDtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgIHJldHVybiB2YWx1ZTtcclxuICAgICAgfSk7XHJcblxyXG4gICAgbmV3IENoYXJ0KG15Q2hhcnRSZWYsIHtcclxuICAgICAgdHlwZTogJ2JhcicsXHJcbiAgICAgIGRhdGE6IHtcclxuICAgICAgICBsYWJlbHM6IHBlcmlvZHMgJiYgcGVyaW9kcyxcclxuICAgICAgICBkYXRhc2V0czogW1xyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICB0eXBlOiAnbGluZScsXHJcbiAgICAgICAgICAgIGxhYmVsOiAnTmV0IHByb2ZpdCcsXHJcbiAgICAgICAgICAgIGRhdGE6IGZpbmFsRGF0YUFmdGVyVGF4LFxyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICdyZ2JhKDEwLCAxOCwgNDgsIDEpJyxcclxuICAgICAgICAgICAgYm9yZGVyQ29sb3I6ICdyZ2JhKDEwLCAxOCwgNDgsIDEpJyxcclxuICAgICAgICAgICAgZmlsbDogMCxcclxuICAgICAgICAgICAgbGluZVRlbnNpb246IDAsXHJcbiAgICAgICAgICAgIGJvcmRlcldpZHRoOiBzaXplLndpZHRoIDwgNjgwID8gMSA6IDMsXHJcbiAgICAgICAgICAgIHBvaW50UmFkaXVzOiBzaXplLndpZHRoIDwgNjgwID8gMiA6IDMsXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAgLi4ucmV2ZW51ZURhdGFzZXQsXHJcbiAgICAgICAgICAuLi5jb3N0c0RhdGFzZXQsXHJcbiAgICAgICAgXSxcclxuICAgICAgfSxcclxuICAgICAgb3B0aW9uczoge1xyXG4gICAgICAgIHNraXBOdWxsOiB0cnVlLFxyXG4gICAgICAgIHJlc3BvbnNpdmU6IHRydWUsXHJcbiAgICAgICAgcGx1Z2luczoge1xyXG4gICAgICAgICAgbGVnZW5kOiB7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiAncmlnaHQnLFxyXG4gICAgICAgICAgICBsYWJlbHM6IHtcclxuICAgICAgICAgICAgICBmb250RmFtaWx5OiAnQ29tZm9ydGFhJyxcclxuICAgICAgICAgICAgICBmb250OiB7XHJcbiAgICAgICAgICAgICAgICBzaXplOiBzaXplLndpZHRoIDwgNjgwID8gOCA6IDEyLFxyXG4gICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgYm94V2lkdGg6IHNpemUud2lkdGggPCA2ODAgPyAxMCA6IDQwLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHNjYWxlczoge1xyXG4gICAgICAgICAgeDoge1xyXG4gICAgICAgICAgICBzdGFja2VkOiB0cnVlLFxyXG4gICAgICAgICAgICB0aWNrczoge1xyXG4gICAgICAgICAgICAgIGZvbnRGYW1pbHk6ICdDb21mb3J0YWEnLFxyXG4gICAgICAgICAgICAgIGJlZ2luQXRaZXJvOiB0cnVlLFxyXG4gICAgICAgICAgICAgIGZvbnQ6IHtcclxuICAgICAgICAgICAgICAgIHNpemU6IHNpemUud2lkdGggPCA2ODAgPyA4IDogMTIsXHJcbiAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgLy8gYmVnaW5BdFplcm86IHRydWUsXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAgeToge1xyXG4gICAgICAgICAgICBzdGFja2VkOiB0cnVlLFxyXG4gICAgICAgICAgICB0aWNrczoge1xyXG4gICAgICAgICAgICAgIGZvbnRGYW1pbHk6ICdDb21mb3J0YWEnLFxyXG4gICAgICAgICAgICAgIGJlZ2luQXRaZXJvOiB0cnVlLFxyXG4gICAgICAgICAgICAgIGZvbnQ6IHtcclxuICAgICAgICAgICAgICAgIHNpemU6IHNpemUud2lkdGggPCA2ODAgPyA4IDogMTIsXHJcbiAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgLy8gYmVnaW5BdFplcm86IHRydWUsXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0sXHJcbiAgICB9KTtcclxuICB9LCBbcGVyaW9kcywgcmV2ZW51ZUVsZW1lbnRzLCBjb3N0c0VsZW1lbnRzLCB0YXhdKTtcclxuXHJcbiAgaWYgKHJvdXRlci5pc0ZhbGxiYWNrKSB7XHJcbiAgICByZXR1cm4gPEJvdW5jZUxvYWRlckNvbXBvbmVudCAvPjtcclxuICB9XHJcblxyXG4gIGNvbnNvbGUubG9nKHN0YXJ0RGF0ZSk7XHJcbiAgY29uc29sZS5sb2coZW5kRGF0ZSk7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwibWluLWgtc2NyZWVuIHctZnVsbCByZWxhdGl2ZSBmbGV4IGZsZXgtY29sIGl0ZW1zLWNlbnRlclwiPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbCBtYXgtdy1mdWxsIHJlbGF0aXZlIG10LTEyIGxnMUNvbnRhaW5lcjptdC0xNiBtYi0xNiBweC0zMlwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVsYXRpdmUgZ3JpZCBncmlkLWNvbHMtMiBncmlkLXJvd3MtMSBncmlkLWZsb3ctY29sXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyXCI+XHJcbiAgICAgICAgICAgIDxzdmdcclxuICAgICAgICAgICAgICBoZWlnaHQ9eyhzaXplLndpZHRoID4gODYwICYmIDMwKSB8fCAoc2l6ZS53aWR0aCA8IDg2MCAmJiBzaXplLndpZHRoID4gNjgwICYmIDI2KSB8fCAoc2l6ZS53aWR0aCA8IDY4MCAmJiAyMil9XHJcbiAgICAgICAgICAgICAgd2lkdGg9eyhzaXplLndpZHRoID4gODYwICYmIDMwKSB8fCAoc2l6ZS53aWR0aCA8IDg2MCAmJiBzaXplLndpZHRoID4gNjgwICYmIDI2KSB8fCAoc2l6ZS53aWR0aCA8IDY4MCAmJiAyMil9XHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZmlsbC1jdXJyZW50IHRleHQtcHJpbWFyeSBkYXJrOnRleHQtcHJpbWFyeWRhcmtcIlxyXG4gICAgICAgICAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxyXG4gICAgICAgICAgICAgIHZpZXdCb3g9XCIwIDAgMTI4IDEyOFwiXHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICA8dGl0bGU+TGFuZGluZyBTdWNjZXNzPC90aXRsZT5cclxuICAgICAgICAgICAgICA8ZyBpZD1cIkxhbmRpbmdfU3VjY2Vzc1wiIGRhdGEtbmFtZT1cIkxhbmRpbmcgU3VjY2Vzc1wiPlxyXG4gICAgICAgICAgICAgICAgPHBhdGhcclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiY2xzLTFcIlxyXG4gICAgICAgICAgICAgICAgICBkPVwiTTEwOS4zLDkwLjFBNDYsNDYsMCwwLDAsNjUsMzZWMjAuMDhjMS43OC0uNjIsNy4yMS0yLjE0LDEyLjU3LjIzYTE5LjMzLDE5LjMzLDAsMCwwLDE0LjgyLDBjLjg3LS4zOC42MS4zMS42MS0xNy45M2ExLDEsMCwwLDAtMS40My0uOTNjLS4wNywwLTYuNjksMi44Ny0xMy4xOCwwQTE5LjQxLDE5LjQxLDAsMCwwLDY1LC45MywxLDEsMCwwLDAsNjMsMVYzNmE0NS44Niw0NS44NiwwLDAsMC0yOC42NiwxMC44QzE2LjE4LDQwLjQ4LDQsNDAsLjc5LDQ1LjUxLTIuMjksNTAuODYsMy45NCw1OS4zLDEwLDY1LjY4QTExLDExLDAsMCwwLDE4LDgzYy44MSwzOC40MSw0Ni4wOCw1OS4yLDc1LjY2LDM0LjIxLDguNTMsMywyOSw5LjE1LDMzLjU1LDEuMzFDMTMwLjM5LDExMywxMjMuODYsMTAyLjY1LDEwOS4zLDkwLjFaTTc3LjU5LDMuMzFBMTkuMzksMTkuMzksMCwwLDAsOTEsMy44M1YxOC42OGMtMS43OS42Mi03LjIyLDIuMTMtMTIuNTctLjIzQTE5LjE5LDE5LjE5LDAsMCwwLDY1LDE3LjkzVjMuMDhDNjYuODEsMi40Niw3Mi4yNCwxLDc3LjU5LDMuMzFaTTY1LDQ1di03YzM5LjY5LjkxLDU4LDUwLjI3LDI4LjIxLDc2LjgxQzcxLjMyLDEwNyw0Niw5Mi42NiwyNy43Nyw3OC42NGExMSwxMSwwLDAsMC0zLjItMTYuMTNBNDMuODgsNDMuODgsMCwwLDEsNjMsMzguMDZWNDVBMSwxLDAsMCwwLDY1LDQ1Wk0zMi41NSw0OC4zNmE0Ni4yMSw0Ni4yMSwwLDAsMC05LjgzLDEzLjI4LDEwLjkzLDEwLjkzLDAsMCwwLTExLjQsMi40N0MtOC4zOSw0My4yMyw1LjIzLDM5LjA4LDMyLjU1LDQ4LjM2Wk0xMCw3MmE5LDksMCwxLDEsOSw5QTksOSwwLDAsMSwxMCw3MlptMTAsMTFhMTEsMTEsMCwwLDAsNi4zNC0yLjgyYzE4LjQ1LDE0LjIxLDQzLjQ1LDI4LjM1LDY1LjA1LDM2LjIyQzYzLDEzOS4xNiwyMC44MywxMTkuMSwyMC4wNSw4M1ptMTA1LjQsMzQuNWMtMi41MSw0LjM1LTE0LDMuNjItMzAtMS44NWE0NS42MSw0NS42MSwwLDAsMCwxMy40Mi0yMy4yMUMxMjEuNTksMTAzLjU4LDEyOCwxMTMuMTIsMTI1LjQ1LDExNy40N1pcIlxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8L2c+XHJcbiAgICAgICAgICAgIDwvc3ZnPlxyXG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXByaW1hcnlkYXJrIHRleHQtbGcgbWRDb250YWluZXI6dGV4dC14bCBsZ0NvbnRhaW5lcjp0ZXh0LTJ4bCBtdC0yIHBsLTIgZGFyazp0ZXh0LWJhY2tncm91bmRcIj5cclxuICAgICAgICAgICAgICBDYXNoIGZsb3cgYW5hbHlzaXNcclxuICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJ0ZXh0LXNlY29uZGFyeSB0ZXh0LXhzIG1kQ29udGFpbmVyOnRleHQtc20gbGdDb250YWluZXI6dGV4dC1iYXNlIHRleHQtZ3JheSByZWxhdGl2ZSAtdG9wLTEgbGdDb250YWluZXI6dG9wLTBcIj5cclxuICAgICAgICAgICAgTWFuYWdlIHlvdXIgc3RhcnR1cCBjYXNoIGZsb3dcclxuICAgICAgICAgIDwvaDE+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGwgZ3JpZCBncmlkLWNvbHMtMmZyIGdyaWQtcm93cy0xZnIgbGdDb250YWluZXI6Z3JpZC1jb2xzLTNmciBsZ0NvbnRhaW5lcjpncmlkLXJvd3MtMWZyIGdhcC15LTggZ2FwLXgtNiBzbUNvbnRhaW5lcjpnYXAteC0zMiBtZENvbnRhaW5lcjpnYXAteC0xMiBtdC0xMlwiPlxyXG4gICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICBpZD1cIm1haW4tZGF0ZXBpY2tlclwiXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cInctZnVsbCBiZy13aGl0ZSByb3VuZGVkLTJ4bCBweS0zIHB4LTMgbWRDb250YWluZXI6cHktMyBtZENvbnRhaW5lcjpweC00IGxnQ29udGFpbmVyOnB4LTYgbGdDb250YWluZXI6cHktNCBzaGFkb3ctbWQgZ3JpZCBncmlkLWNvbHMtMmZyIGl0ZW1zLWNlbnRlciB0ZXh0LXhzIG1kQ29udGFpbmVyOnRleHQtc20gbGdDb250YWluZXI6dGV4dC1iYXNlXCJcclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgIHNyYz1cIi9jYXNoLWZsb3cvY2FsZW5kYXIuc3ZnXCJcclxuICAgICAgICAgICAgICAgIGhlaWdodD17KHNpemUud2lkdGggPiA4NjAgJiYgMjUpIHx8IChzaXplLndpZHRoIDwgODYwICYmIHNpemUud2lkdGggPiA2ODAgJiYgMjIpIHx8IChzaXplLndpZHRoIDwgNjgwICYmIDE4KX1cclxuICAgICAgICAgICAgICAgIHdpZHRoPXsoc2l6ZS53aWR0aCA+IDg2MCAmJiAyNSkgfHwgKHNpemUud2lkdGggPCA4NjAgJiYgc2l6ZS53aWR0aCA+IDY4MCAmJiAyMikgfHwgKHNpemUud2lkdGggPCA2ODAgJiYgMTgpfVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwibWwtMiB0ZXh0LXByaW1hcnlkYXJrXCI+U3RhcnQ6PC9wPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAge3N0YXJ0RGF0ZSAmJiAhaXNNb2JpbGUgPyAoXHJcbiAgICAgICAgICAgICAgPERhdGVQaWNrZXJcclxuICAgICAgICAgICAgICAgIHNlbGVjdGVkPXtzdGFydERhdGV9XHJcbiAgICAgICAgICAgICAgICAvLyBvbkNoYW5nZT17KGRhdGUpID0+IG9uU3RhcnREYXRlVXBkYXRlKGRhdGUpfVxyXG4gICAgICAgICAgICAgICAgZGF0ZUZvcm1hdD1cIk1NTU0geXl5eVwiXHJcbiAgICAgICAgICAgICAgICBzaG93TW9udGhZZWFyUGlja2VyXHJcbiAgICAgICAgICAgICAgICBtYXhEYXRlPXthZGRZZWFycyhuZXcgRGF0ZSgpLCAzKX1cclxuICAgICAgICAgICAgICAgIG1pbkRhdGU9e25ldyBEYXRlKCl9XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICA8RGF0ZVBpY2tlclxyXG4gICAgICAgICAgICAgICAgc2VsZWN0ZWQ9e3N0YXJ0RGF0ZX1cclxuICAgICAgICAgICAgICAgIC8vIG9uQ2hhbmdlPXsoZGF0ZSkgPT4gb25TdGFydERhdGVVcGRhdGUoZGF0ZSl9XHJcbiAgICAgICAgICAgICAgICBkYXRlRm9ybWF0PVwiTU1NTSB5eXl5XCJcclxuICAgICAgICAgICAgICAgIHNob3dNb250aFllYXJQaWNrZXJcclxuICAgICAgICAgICAgICAgIG1heERhdGU9e2FkZFllYXJzKG5ldyBEYXRlKCksIDMpfVxyXG4gICAgICAgICAgICAgICAgbWluRGF0ZT17bmV3IERhdGUoKX1cclxuICAgICAgICAgICAgICAgIHdpdGhQb3J0YWxcclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICApfVxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgIGlkPVwibWFpbi1kYXRlcGlja2VyXCJcclxuICAgICAgICAgICAgY2xhc3NOYW1lPVwidy1mdWxsIGJnLXdoaXRlIHJvdW5kZWQtMnhsIHB5LTMgcHgtMyBtZENvbnRhaW5lcjpweS0zIG1kQ29udGFpbmVyOnB4LTQgbGdDb250YWluZXI6cHgtNiBsZ0NvbnRhaW5lcjpweS00IHNoYWRvdy1tZCBncmlkIGdyaWQtY29scy0yZnIgaXRlbXMtY2VudGVyIHRleHQteHMgbWRDb250YWluZXI6dGV4dC1zbSBsZ0NvbnRhaW5lcjp0ZXh0LWJhc2VcIlxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgc3JjPVwiL2Nhc2gtZmxvdy9ob3VyZ2xhc3MxLnN2Z1wiXHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ9eyhzaXplLndpZHRoID4gODYwICYmIDI1KSB8fCAoc2l6ZS53aWR0aCA8IDg2MCAmJiBzaXplLndpZHRoID4gNjgwICYmIDIyKSB8fCAoc2l6ZS53aWR0aCA8IDY4MCAmJiAxOCl9XHJcbiAgICAgICAgICAgICAgICB3aWR0aD17KHNpemUud2lkdGggPiA4NjAgJiYgMjUpIHx8IChzaXplLndpZHRoIDwgODYwICYmIHNpemUud2lkdGggPiA2ODAgJiYgMjIpIHx8IChzaXplLndpZHRoIDwgNjgwICYmIDE4KX1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cIm1sLTIgdGV4dC1wcmltYXJ5ZGFya1wiPkVuZDo8L3A+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICB7ZW5kRGF0ZSAmJiAhaXNNb2JpbGUgPyAoXHJcbiAgICAgICAgICAgICAgPERhdGVQaWNrZXJcclxuICAgICAgICAgICAgICAgIHNlbGVjdGVkPXtlbmREYXRlfVxyXG4gICAgICAgICAgICAgICAgLy8gb25DaGFuZ2U9eyhkYXRlKSA9PiBvbkVuZERhdGVVcGRhdGUoZGF0ZSl9XHJcbiAgICAgICAgICAgICAgICBkYXRlRm9ybWF0PVwiTU1NTSB5eXl5XCJcclxuICAgICAgICAgICAgICAgIHNob3dNb250aFllYXJQaWNrZXJcclxuICAgICAgICAgICAgICAgIG1heERhdGU9e2FkZFllYXJzKG5ldyBEYXRlKCksIDMpfVxyXG4gICAgICAgICAgICAgICAgbWluRGF0ZT17bmV3IERhdGUoKX1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgIDxEYXRlUGlja2VyXHJcbiAgICAgICAgICAgICAgICBzZWxlY3RlZD17ZW5kRGF0ZX1cclxuICAgICAgICAgICAgICAgIC8vIG9uQ2hhbmdlPXsoZGF0ZSkgPT4gb25FbmREYXRlVXBkYXRlKGRhdGUpfVxyXG4gICAgICAgICAgICAgICAgZGF0ZUZvcm1hdD1cIk1NTU0geXl5eVwiXHJcbiAgICAgICAgICAgICAgICBzaG93TW9udGhZZWFyUGlja2VyXHJcbiAgICAgICAgICAgICAgICBtYXhEYXRlPXthZGRZZWFycyhuZXcgRGF0ZSgpLCAzKX1cclxuICAgICAgICAgICAgICAgIG1pbkRhdGU9e25ldyBEYXRlKCl9XHJcbiAgICAgICAgICAgICAgICB3aXRoUG9ydGFsXHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgKX1cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgIHdpZHRoOlxyXG4gICAgICAgICAgICAgICAgKHNpemUud2lkdGggPiA4NjAgJiYgJzEwMCUnKSB8fFxyXG4gICAgICAgICAgICAgICAgKHNpemUud2lkdGggPCA4NjAgJiYgc2l6ZS53aWR0aCA+IDY4MCAmJiAnNDclJykgfHxcclxuICAgICAgICAgICAgICAgIChzaXplLndpZHRoIDwgNjgwICYmIHNpemUud2lkdGggPiA1MjAgJiYgJzQwJScpIHx8XHJcbiAgICAgICAgICAgICAgICAoc2l6ZS53aWR0aCA8IDUyMCAmJiAnNDclJyksXHJcbiAgICAgICAgICAgICAgZ3JpZENvbHVtblN0YXJ0OiBzaXplLndpZHRoIDwgODYwID8gJzEnIDogJ3Vuc2V0JyxcclxuICAgICAgICAgICAgICBncmlkQ29sdW1uRW5kOiBzaXplLndpZHRoIDwgODYwID8gJzMnIDogJ3Vuc2V0JyxcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgY2xhc3NOYW1lPVwicGxhY2Utc2VsZi1jZW50ZXIgYmctd2hpdGUgcm91bmRlZC0yeGwgcHktMyBweC0zIG1kQ29udGFpbmVyOnB5LTMgbWRDb250YWluZXI6cHgtNCBsZ0NvbnRhaW5lcjpweC02IGxnQ29udGFpbmVyOnB5LTQgc2hhZG93LW1kIGdyaWQgZ3JpZC1jb2xzLTJmciBpdGVtcy1jZW50ZXIgdGV4dC14cyBtZENvbnRhaW5lcjp0ZXh0LXNtIGxnQ29udGFpbmVyOnRleHQtYmFzZVwiXHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICBzcmM9XCIvY2FzaC1mbG93L3RheC5zdmdcIlxyXG4gICAgICAgICAgICAgICAgaGVpZ2h0PXsoc2l6ZS53aWR0aCA+IDg2MCAmJiAyNSkgfHwgKHNpemUud2lkdGggPCA4NjAgJiYgc2l6ZS53aWR0aCA+IDY4MCAmJiAyMikgfHwgKHNpemUud2lkdGggPCA2ODAgJiYgMTgpfVxyXG4gICAgICAgICAgICAgICAgd2lkdGg9eyhzaXplLndpZHRoID4gODYwICYmIDI1KSB8fCAoc2l6ZS53aWR0aCA8IDg2MCAmJiBzaXplLndpZHRoID4gNjgwICYmIDIyKSB8fCAoc2l6ZS53aWR0aCA8IDY4MCAmJiAxOCl9XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJtbC0yXCI+VGF4OjwvcD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleFwiIHN0eWxlPXt7IHRleHRBbGlnbkxhc3Q6ICdyaWdodCcgfX0+XHJcbiAgICAgICAgICAgICAgPGlucHV0IGlkPVwidGF4LWlucHV0XCIgdmFsdWU9e3RheH0gY2xhc3NOYW1lPVwidy1mdWxsIGJnLXdoaXRlIGZvY3VzOm91dGxpbmUtbm9uZVwiIC8+XHJcbiAgICAgICAgICAgICAgPHA+JTwvcD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGlkPVwiY2hhcnRDb250YWluZXJcIiBjbGFzc05hbWU9XCJ3LWZ1bGwgaC0xLzIgcC00IG1kQ29udGFpbmVyOnAtOCBiZy13aGl0ZSByb3VuZGVkLTJ4bCBtdC0xMiBzaGFkb3ctbWRcIj5cclxuICAgICAgICAgIHsvKiA8Y2FudmFzIHJlZj17Y2hhcnRSZWZ9IGhlaWdodD17NzV9PjwvY2FudmFzPiAqL31cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbCBncmlkIGdyaWQtY29scy0yZnIgZ3JpZC1yb3dzLTNmciBsZzFDb250YWluZXI6Z3JpZC1jb2xzLTNmciBsZzFDb250YWluZXI6Z3JpZC1yb3dzLTJmciBnYXAteC02IHNtQ29udGFpbmVyOmdhcC14LTEyIGdhcC15LTggbXQtMTJcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsIGJnLXdoaXRlIHJvdW5kZWQtMnhsIHB5LTMgcHgtMyBtZENvbnRhaW5lcjpweS0zIG1kQ29udGFpbmVyOnB4LTQgbGdDb250YWluZXI6cHgtNiBsZ0NvbnRhaW5lcjpweS00IHNoYWRvdy1tZCBmbGV4IGp1c3RpZnktYmV0d2VlbiBpdGVtcy1jZW50ZXIgdGV4dC14cyBtZENvbnRhaW5lcjp0ZXh0LXNtIGxnQ29udGFpbmVyOnRleHQtYmFzZVwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgc3JjPVwiL2Nhc2gtZmxvdy9yZXZlbnVlLnN2Z1wiXHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ9eyhzaXplLndpZHRoID4gODYwICYmIDI1KSB8fCAoc2l6ZS53aWR0aCA8IDg2MCAmJiBzaXplLndpZHRoID4gNjgwICYmIDIyKSB8fCAoc2l6ZS53aWR0aCA8IDY4MCAmJiAxOCl9XHJcbiAgICAgICAgICAgICAgICB3aWR0aD17KHNpemUud2lkdGggPiA4NjAgJiYgMjUpIHx8IChzaXplLndpZHRoIDwgODYwICYmIHNpemUud2lkdGggPiA2ODAgJiYgMjIpIHx8IChzaXplLndpZHRoIDwgNjgwICYmIDE4KX1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cIm1sLTJcIj5Ub3RhbCByZXZlbnVlOjwvcD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxwPiR7dG90YWxSZXZlbnVlfTwvcD5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGwgYmctd2hpdGUgcm91bmRlZC0yeGwgcHktMyBweC0zIG1kQ29udGFpbmVyOnB5LTMgbWRDb250YWluZXI6cHgtNCBsZ0NvbnRhaW5lcjpweC02IGxnQ29udGFpbmVyOnB5LTQgc2hhZG93LW1kIGZsZXgganVzdGlmeS1iZXR3ZWVuIGl0ZW1zLWNlbnRlciB0ZXh0LXhzIG1kQ29udGFpbmVyOnRleHQtc20gbGdDb250YWluZXI6dGV4dC1iYXNlXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICBzcmM9XCIvY2FzaC1mbG93L21vbnRobHkuc3ZnXCJcclxuICAgICAgICAgICAgICAgIGhlaWdodD17KHNpemUud2lkdGggPiA4NjAgJiYgMjUpIHx8IChzaXplLndpZHRoIDwgODYwICYmIHNpemUud2lkdGggPiA2ODAgJiYgMjIpIHx8IChzaXplLndpZHRoIDwgNjgwICYmIDE4KX1cclxuICAgICAgICAgICAgICAgIHdpZHRoPXsoc2l6ZS53aWR0aCA+IDg2MCAmJiAyNSkgfHwgKHNpemUud2lkdGggPCA4NjAgJiYgc2l6ZS53aWR0aCA+IDY4MCAmJiAyMikgfHwgKHNpemUud2lkdGggPCA2ODAgJiYgMTgpfVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwibWwtMlwiPk1vbnRobHkgcmV2ZW51ZTo8L3A+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8cD4ke21vbnRobHlSZXZlbnVlfTwvcD5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGwgYmctd2hpdGUgcm91bmRlZC0yeGwgcHktMyBweC0zIG1kQ29udGFpbmVyOnB5LTMgbWRDb250YWluZXI6cHgtNCBsZ0NvbnRhaW5lcjpweC02IGxnQ29udGFpbmVyOnB5LTQgc2hhZG93LW1kIGZsZXgganVzdGlmeS1iZXR3ZWVuIGl0ZW1zLWNlbnRlciB0ZXh0LXhzIG1kQ29udGFpbmVyOnRleHQtc20gbGdDb250YWluZXI6dGV4dC1iYXNlXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICBzcmM9XCIvY2FzaC1mbG93L2Nvc3RzLnN2Z1wiXHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ9eyhzaXplLndpZHRoID4gODYwICYmIDI1KSB8fCAoc2l6ZS53aWR0aCA8IDg2MCAmJiBzaXplLndpZHRoID4gNjgwICYmIDIyKSB8fCAoc2l6ZS53aWR0aCA8IDY4MCAmJiAxOCl9XHJcbiAgICAgICAgICAgICAgICB3aWR0aD17KHNpemUud2lkdGggPiA4NjAgJiYgMjUpIHx8IChzaXplLndpZHRoIDwgODYwICYmIHNpemUud2lkdGggPiA2ODAgJiYgMjIpIHx8IChzaXplLndpZHRoIDwgNjgwICYmIDE4KX1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cIm1sLTJcIj5Ub3RhbCBjb3N0czo8L3A+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8cD4ke3RvdGFsQ29zdHN9PC9wPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbCBiZy13aGl0ZSByb3VuZGVkLTJ4bCBweS0zIHB4LTMgbWRDb250YWluZXI6cHktMyBtZENvbnRhaW5lcjpweC00IGxnQ29udGFpbmVyOnB4LTYgbGdDb250YWluZXI6cHktNCBzaGFkb3ctbWQgZmxleCBqdXN0aWZ5LWJldHdlZW4gaXRlbXMtY2VudGVyIHRleHQteHMgbWRDb250YWluZXI6dGV4dC1zbSBsZ0NvbnRhaW5lcjp0ZXh0LWJhc2VcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgIHNyYz1cIi9jYXNoLWZsb3cvbW9udGhseS1jb3N0cy5zdmdcIlxyXG4gICAgICAgICAgICAgICAgaGVpZ2h0PXsoc2l6ZS53aWR0aCA+IDg2MCAmJiAyNSkgfHwgKHNpemUud2lkdGggPCA4NjAgJiYgc2l6ZS53aWR0aCA+IDY4MCAmJiAyMikgfHwgKHNpemUud2lkdGggPCA2ODAgJiYgMTgpfVxyXG4gICAgICAgICAgICAgICAgd2lkdGg9eyhzaXplLndpZHRoID4gODYwICYmIDI1KSB8fCAoc2l6ZS53aWR0aCA8IDg2MCAmJiBzaXplLndpZHRoID4gNjgwICYmIDIyKSB8fCAoc2l6ZS53aWR0aCA8IDY4MCAmJiAxOCl9XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJtbC0yXCI+TW9udGhseSBjb3N0czo8L3A+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8cD4ke21vbnRobHlDb3N0c308L3A+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsIGJnLXdoaXRlIHJvdW5kZWQtMnhsIHB5LTMgcHgtMyBtZENvbnRhaW5lcjpweS0zIG1kQ29udGFpbmVyOnB4LTQgbGdDb250YWluZXI6cHgtNiBsZ0NvbnRhaW5lcjpweS00IHNoYWRvdy1tZCBmbGV4IGp1c3RpZnktYmV0d2VlbiBpdGVtcy1jZW50ZXIgdGV4dC14cyBtZENvbnRhaW5lcjp0ZXh0LXNtIGxnQ29udGFpbmVyOnRleHQtYmFzZVwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgc3JjPVwiL2Nhc2gtZmxvdy9tZWdhcGhvbmUuc3ZnXCJcclxuICAgICAgICAgICAgICAgIGhlaWdodD17KHNpemUud2lkdGggPiA4NjAgJiYgMjUpIHx8IChzaXplLndpZHRoIDwgODYwICYmIHNpemUud2lkdGggPiA2ODAgJiYgMjIpIHx8IChzaXplLndpZHRoIDwgNjgwICYmIDE4KX1cclxuICAgICAgICAgICAgICAgIHdpZHRoPXsoc2l6ZS53aWR0aCA+IDg2MCAmJiAyNSkgfHwgKHNpemUud2lkdGggPCA4NjAgJiYgc2l6ZS53aWR0aCA+IDY4MCAmJiAyMikgfHwgKHNpemUud2lkdGggPCA2ODAgJiYgMTgpfVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwibWwtMlwiPkdyb3NzIHByb2ZpdDo8L3A+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8cD4ke2dyb3NzUHJvZml0fTwvcD5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGwgYmctd2hpdGUgcm91bmRlZC0yeGwgcHktMyBweC0zIG1kQ29udGFpbmVyOnB5LTMgbWRDb250YWluZXI6cHgtNCBsZ0NvbnRhaW5lcjpweC02IGxnQ29udGFpbmVyOnB5LTQgc2hhZG93LW1kIGZsZXgganVzdGlmeS1iZXR3ZWVuIGl0ZW1zLWNlbnRlciB0ZXh0LXhzIG1kQ29udGFpbmVyOnRleHQtc20gbGdDb250YWluZXI6dGV4dC1iYXNlXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICBzcmM9XCIvY2FzaC1mbG93L25ldC13b3J0aC5zdmdcIlxyXG4gICAgICAgICAgICAgICAgaGVpZ2h0PXsoc2l6ZS53aWR0aCA+IDg2MCAmJiAyNSkgfHwgKHNpemUud2lkdGggPCA4NjAgJiYgc2l6ZS53aWR0aCA+IDY4MCAmJiAyMikgfHwgKHNpemUud2lkdGggPCA2ODAgJiYgMTgpfVxyXG4gICAgICAgICAgICAgICAgd2lkdGg9eyhzaXplLndpZHRoID4gODYwICYmIDI1KSB8fCAoc2l6ZS53aWR0aCA8IDg2MCAmJiBzaXplLndpZHRoID4gNjgwICYmIDIyKSB8fCAoc2l6ZS53aWR0aCA8IDY4MCAmJiAxOCl9XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJtbC0yXCI+TmV0IHByb2ZpdDo8L3A+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8cD4ke25ldFByb2ZpdH08L3A+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICB7LyogUmV2ZW51ZSAqL31cclxuICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAvLyBzdHlsZT17eyBoZWlnaHQ6IDU1IH19XHJcbiAgICAgICAgICBjbGFzc05hbWU9XCJvdmVyZmxvdy1oaWRkZW4gcmVsYXRpdmUgdy1mdWxsIHJvdW5kZWQtMnhsIGJnLXdoaXRlIGRhcms6YmctYmFja2dyb3VuZCBweC00IHB5LTQgZmxleCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXIgbXQtMTIgZmxleCBmbGV4LXdyYXAgc2hhZG93LW1kXCJcclxuICAgICAgICA+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbCBmbGV4IGp1c3RpZnktYmV0d2VlbiBpdGVtcy1jZW50ZXJcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsZ0NvbnRhaW5lcjptbC0yXCI+XHJcbiAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1zbSBsZ0NvbnRhaW5lcjp0ZXh0LWJhc2VcIj5SZXZlbnVlPC9wPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgey8qIDxkaXYgY2xhc3NOYW1lPVwibGdDb250YWluZXI6bXItMiBmbGV4IGZsZXgtbm93cmFwIGl0ZW1zLWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImN1cnNvci1wb2ludGVyXCJcclxuICAgICAgICAgICAgICAgIHNyYz1cIi9jYXNoLWZsb3cvYWRkLnN2Z1wiXHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ9eyhzaXplLndpZHRoID4gODYwICYmIDIyKSB8fCAoc2l6ZS53aWR0aCA8IDg2MCAmJiBzaXplLndpZHRoID4gNjgwICYmIDE4KSB8fCAoc2l6ZS53aWR0aCA8IDY4MCAmJiAxNil9XHJcbiAgICAgICAgICAgICAgICB3aWR0aD17KHNpemUud2lkdGggPiA4NjAgJiYgMjIpIHx8IChzaXplLndpZHRoIDwgODYwICYmIHNpemUud2lkdGggPiA2ODAgJiYgMTgpIHx8IChzaXplLndpZHRoIDwgNjgwICYmIDE2KX1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgIC8vIHJlZj17ZHJvcERvd25JY29ufVxyXG4gICAgICAgICAgICAgICAgLy8gb25DbGljaz17b25SZXZlbnVlU2hvd31cclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm1sLTIgY3Vyc29yLXBvaW50ZXJcIlxyXG4gICAgICAgICAgICAgICAgc3JjPVwiL2Nhc2gtZmxvdy9kcm9wZG93bi5zdmdcIlxyXG4gICAgICAgICAgICAgICAgaGVpZ2h0PXsoc2l6ZS53aWR0aCA+IDg2MCAmJiAyMikgfHwgKHNpemUud2lkdGggPCA4NjAgJiYgc2l6ZS53aWR0aCA+IDY4MCAmJiAxOCkgfHwgKHNpemUud2lkdGggPCA2ODAgJiYgMTYpfVxyXG4gICAgICAgICAgICAgICAgd2lkdGg9eyhzaXplLndpZHRoID4gODYwICYmIDIyKSB8fCAoc2l6ZS53aWR0aCA8IDg2MCAmJiBzaXplLndpZHRoID4gNjgwICYmIDE4KSB8fCAoc2l6ZS53aWR0aCA8IDY4MCAmJiAxNil9XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9kaXY+ICovfVxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT17YHctZnVsbCAke1xyXG4gICAgICAgICAgICAgIHNpemUud2lkdGggPCAxMTIwXHJcbiAgICAgICAgICAgICAgICA/ICd0ZXh0LXNtIG1kQ29udGFpbmVyOnRleHQtYmFzZSBsZzFDb250YWluZXI6bXgtOCBsZzFDb250YWluZXI6bWItNiBtdC00ICBiZy1iYWNrZ3JvdW5kIHJvdW5kZWQtMnhsIHB4LTQgbWRDb250YWluZXI6cHgtNiBweS00J1xyXG4gICAgICAgICAgICAgICAgOiAndy1mdWxsIG14LTggbWItNiBtdC00ICBiZy1iYWNrZ3JvdW5kIHJvdW5kZWQtMnhsIHB4LTQgbWRDb250YWluZXI6cHgtNiBweS00J1xyXG4gICAgICAgICAgICB9YH1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgey8qIDxociBjbGFzc05hbWU9XCJ0ZXh0LXByaW1hcnkgdy1mdWxsXCIgLz4gKi99XHJcbiAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICBzdHlsZT17eyBmb250U2l6ZTogc2l6ZS53aWR0aCA8IDUyMCAmJiAnMC42cmVtJyB9fVxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cInctZnVsbCBncmlkIGdyaWQtY29scy01ZnIgaXRlbXMtY2VudGVyIHRleHQteHMgbWRDb250YWluZXI6dGV4dC1zbSBsZzFDb250YWluZXI6dGV4dC1iYXNlXCJcclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIDxkaXY+bmFtZTwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXY+dHlwZTwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXY+YW1vdW50PC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdj5zdGFydDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXY+ZW5kPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdj48L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxociBjbGFzc05hbWU9XCJ0ZXh0LXByaW1hcnkgdy1mdWxsXCIgLz5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoLWZ1bGwgdy1mdWxsIHJvdW5kZWQtMnhsIGZsZXggZmxleC13cmFwIGZsZXgtY29sXCI+XHJcbiAgICAgICAgICAgICAge3JldmVudWVFbGVtZW50cyAmJlxyXG4gICAgICAgICAgICAgICAgcmV2ZW51ZUVsZW1lbnRzLm1hcCgoZWxlbWVudCwgaW5kZXgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZWxlbWVudCk7XHJcbiAgICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGwgZ3JpZCBncmlkLWNvbHMtNWZyIHB5LTMgaXRlbXMtc3RhcnQgdGV4dC1zbVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHBsYWNlaG9sZGVyPVwibmFtZVwiIGNsYXNzTmFtZT1cInctNC81IGJnLWJhY2tncm91bmQgZm9jdXM6b3V0bGluZS1ub25lXCIgdmFsdWU9e2VsZW1lbnQudGl0bGV9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGhlaWdodDogJzIwcHgnIH19IGNsYXNzTmFtZT1cIm92ZXJmbG93LWhpZGRlbiBmbGV4IGZsZXgtY29sIGZsZXgtd3JhcFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbCBmbGV4IGZsZXgtcm93IGZsZXgtbm93cmFwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiY3Vyc29yLWRlZmF1bHRcIj57ZWxlbWVudC50eXBlfTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCBjbGFzc05hbWU9XCJ3LTQvNSBiZy1iYWNrZ3JvdW5kIGZvY3VzOm91dGxpbmUtbm9uZVwiIHZhbHVlPXtlbGVtZW50LnZhbHVlfSBwbGFjZWhvbGRlcj1cImFtb3VudFwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxEYXRlUGlja2VyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcG9wcGVyUGxhY2VtZW50PVwidG9wLXN0YXJ0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBwb3BwZXJQcm9wcz17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb25GaXhlZDogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdGVkPXtzdGFydERhdGV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0ZUZvcm1hdD1cIk1NTU0geXl5eVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc2hvd01vbnRoWWVhclBpY2tlclxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG1heERhdGU9e2FkZFllYXJzKG5ldyBEYXRlKCksIDMpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG1pbkRhdGU9e25ldyBEYXRlKCl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtlbGVtZW50LnR5cGUgPT0gJ1JlY3VycmluZycgPyAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPERhdGVQaWNrZXJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvcHBlclBsYWNlbWVudD1cInRvcC1zdGFydFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3BwZXJQcm9wcz17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbkZpeGVkOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdGVkPXtlbmREYXRlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0ZUZvcm1hdD1cIk1NTU0geXl5eVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaG93TW9udGhZZWFyUGlja2VyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXhEYXRlPXthZGRZZWFycyhuZXcgRGF0ZSgpLCAzKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1pbkRhdGU9e25ldyBEYXRlKCl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8aHIgY2xhc3NOYW1lPVwidGV4dC1wcmltYXJ5ZGFyayBtci04IG10LTJcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICB9KX1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICB7LyogQ29zdHMgKi99XHJcbiAgICAgICAgPGRpdlxyXG4gICAgICAgICAgLy8gcmVmPXtjb3N0c1JlZn1cclxuICAgICAgICAgIHN0eWxlPXt7IGhlaWdodDogNTUgfX1cclxuICAgICAgICAgIGNsYXNzTmFtZT1cIm92ZXJmbG93LWhpZGRlbiByZWxhdGl2ZSB3LWZ1bGwgcm91bmRlZC0yeGwgYmctd2hpdGUgZGFyazpiZy1iYWNrZ3JvdW5kIHB4LTQgcHktNCBmbGV4IGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlciBtdC04IGZsZXggZmxleC13cmFwIHNoYWRvdy1tZFwiXHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGwgZmxleCBqdXN0aWZ5LWJldHdlZW4gaXRlbXMtY2VudGVyXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGdDb250YWluZXI6bWwtMlwiPlxyXG4gICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtc20gbGdDb250YWluZXI6dGV4dC1iYXNlXCI+Q29zdHM8L3A+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxnQ29udGFpbmVyOm1yLTIgZmxleCBmbGV4LW5vd3JhcCBpdGVtcy1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJjdXJzb3ItcG9pbnRlclwiXHJcbiAgICAgICAgICAgICAgICBzcmM9XCIvY2FzaC1mbG93L2FkZC5zdmdcIlxyXG4gICAgICAgICAgICAgICAgaGVpZ2h0PXsoc2l6ZS53aWR0aCA+IDg2MCAmJiAyMikgfHwgKHNpemUud2lkdGggPCA4NjAgJiYgc2l6ZS53aWR0aCA+IDY4MCAmJiAxOCkgfHwgKHNpemUud2lkdGggPCA2ODAgJiYgMTYpfVxyXG4gICAgICAgICAgICAgICAgd2lkdGg9eyhzaXplLndpZHRoID4gODYwICYmIDIyKSB8fCAoc2l6ZS53aWR0aCA8IDg2MCAmJiBzaXplLndpZHRoID4gNjgwICYmIDE4KSB8fCAoc2l6ZS53aWR0aCA8IDY4MCAmJiAxNil9XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJtbC0yIGN1cnNvci1wb2ludGVyXCJcclxuICAgICAgICAgICAgICAgIHNyYz1cIi9jYXNoLWZsb3cvZHJvcGRvd24uc3ZnXCJcclxuICAgICAgICAgICAgICAgIGhlaWdodD17KHNpemUud2lkdGggPiA4NjAgJiYgMjIpIHx8IChzaXplLndpZHRoIDwgODYwICYmIHNpemUud2lkdGggPiA2ODAgJiYgMTgpIHx8IChzaXplLndpZHRoIDwgNjgwICYmIDE2KX1cclxuICAgICAgICAgICAgICAgIHdpZHRoPXsoc2l6ZS53aWR0aCA+IDg2MCAmJiAyMikgfHwgKHNpemUud2lkdGggPCA4NjAgJiYgc2l6ZS53aWR0aCA+IDY4MCAmJiAxOCkgfHwgKHNpemUud2lkdGggPCA2ODAgJiYgMTYpfVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT17YHctZnVsbCAke1xyXG4gICAgICAgICAgICAgIHNpemUud2lkdGggPCAxMTIwXHJcbiAgICAgICAgICAgICAgICA/ICd0ZXh0LXNtIG1kQ29udGFpbmVyOnRleHQtYmFzZSBsZzFDb250YWluZXI6bXgtOCBsZzFDb250YWluZXI6bWItNiBtdC00ICBiZy1iYWNrZ3JvdW5kIHJvdW5kZWQtMnhsIHB4LTQgbWRDb250YWluZXI6cHgtNiBweS00J1xyXG4gICAgICAgICAgICAgICAgOiAndy1mdWxsIG14LTggbWItNiBtdC00ICBiZy1iYWNrZ3JvdW5kIHJvdW5kZWQtMnhsIHB4LTQgbWRDb250YWluZXI6cHgtNiBweS00J1xyXG4gICAgICAgICAgICB9YH1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgey8qIDxociBjbGFzc05hbWU9XCJ0ZXh0LXByaW1hcnkgdy1mdWxsXCIgLz4gKi99XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsIGdyaWQgZ3JpZC1jb2xzLTZmciBpdGVtcy1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICA8ZGl2Pm5hbWU8L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2PnR5cGU8L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2PmFtb3VudDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXY+c3RhcnQ8L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2PmVuZDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXY+PC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8aHIgY2xhc3NOYW1lPVwidGV4dC1wcmltYXJ5IHctZnVsbFwiIC8+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaC1mdWxsIHctZnVsbCByb3VuZGVkLTJ4bCBmbGV4IGZsZXgtd3JhcCBmbGV4LWNvbFwiPlxyXG4gICAgICAgICAgICAgIHtjb3N0c0VsZW1lbnRzICYmXHJcbiAgICAgICAgICAgICAgICBjb3N0c0VsZW1lbnRzLm1hcCgoZWxlbWVudCwgaW5kZXgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICA8PjwvPlxyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgPENvc3RzRWxlbWVudFxyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgcHJvdmlkZWQ9e3Byb3ZpZGVkfVxyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgc2V0Q29zdHNFbGVtZW50cz17c2V0Q29zdHNFbGVtZW50c31cclxuICAgICAgICAgICAgICAgICAgICAvLyAgIG1haW5Eb2N1bWVudD17bWFpbkRvY3VtZW50fVxyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgcHJvamVjdElkPXtwcm9qZWN0SWR9XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gICBkb2N1bWVudElkPXtkb2N1bWVudElkfVxyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgY29zdHNFbGVtZW50cz17Y29zdHNFbGVtZW50c31cclxuICAgICAgICAgICAgICAgICAgICAvLyAgIGVsZW1lbnQ9e2VsZW1lbnR9XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gICBpbmRleD17aW5kZXh9XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gLz5cclxuICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0U3RhdGljUGF0aHMgPSBhc3luYyAoKSA9PiB7XHJcbiAgY29uc3Qgc25hcHNob3QgPSBhd2FpdCBkYi5jb2xsZWN0aW9uKCdwcm9qZWN0cycpLmdldCgpO1xyXG5cclxuICBjb25zdCBwcm9qZWN0cyA9IFtdO1xyXG4gIHNuYXBzaG90LmZvckVhY2goKGRvYykgPT4ge1xyXG4gICAgcHJvamVjdHMucHVzaChkb2MuZGF0YSgpKTtcclxuICB9KTtcclxuXHJcbiAgY29uc3QgcGF0aHMgPSBwcm9qZWN0cy5tYXAoKHByb2plY3QpID0+ICh7XHJcbiAgICBwYXJhbXM6IHtcclxuICAgICAgcHJvamVjdDogcHJvamVjdC5wcm9qZWN0TmFtZS50b1N0cmluZygpLFxyXG4gICAgICBpZDogcHJvamVjdC5wcm9qZWN0SWQudG9TdHJpbmcoKSxcclxuICAgIH0sXHJcbiAgfSkpO1xyXG5cclxuICByZXR1cm4ge1xyXG4gICAgcGF0aHM6IHBhdGhzLFxyXG4gICAgZmFsbGJhY2s6IHRydWUsXHJcbiAgfTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBnZXRTdGF0aWNQcm9wcyA9IGFzeW5jICh7IHBhcmFtcyB9KSA9PiB7XHJcbiAgY29uc29sZS5sb2cocGFyYW1zKTtcclxuICAvLyBsZXQgcmVmID0gZGIuY29sbGVjdGlvbigncHJvamVjdHMnKS53aGVyZSgncHJvamVjdE5hbWUnLCAnPT0nLCBwYXJhbXMucHJvamVjdCk7XHJcbiAgbGV0IHJlZiA9IGRiXHJcbiAgICAuY29sbGVjdGlvbigncHJvamVjdHMnKVxyXG4gICAgLmRvYyhwYXJhbXMuaWQpXHJcbiAgICAuY29sbGVjdGlvbignY2FzaEZsb3cnKVxyXG4gICAgLmRvYyhwYXJhbXMucHJvamVjdClcclxuICAgIC5jb2xsZWN0aW9uKCdpbnB1dHMnKVxyXG4gICAgLndoZXJlKCdwcm9qZWN0SWQnLCAnPT0nLCBwYXJhbXMuaWQpO1xyXG5cclxuICBjb25zdCBzbmFwc2hvdCA9IGF3YWl0IHJlZi5nZXQoKTtcclxuICBjb25zdCBwcm9qZWN0ID0gW107XHJcblxyXG4gIHNuYXBzaG90LmZvckVhY2goKGRvYykgPT4ge1xyXG4gICAgY29uc3QgZGF0YSA9IEpTT04ucGFyc2Uoc2FmZUpzb25TdHJpbmdpZnkoZG9jLmRhdGEoKSkpO1xyXG4gICAgcHJvamVjdC5wdXNoKHsgLi4uZGF0YSB9KTtcclxuICB9KTtcclxuXHJcbiAgcmV0dXJuIHtcclxuICAgIHByb3BzOiB7IHByb2plY3QgfSxcclxuICAgIHJldmFsaWRhdGU6IDEsXHJcbiAgfTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFVuaXF1ZUNhc2hmbG93UGFnZTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==