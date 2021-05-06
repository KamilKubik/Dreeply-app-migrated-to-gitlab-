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

  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_5__["useRouter"])(); // Chart

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
      lineNumber: 287,
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
              lineNumber: 304,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("g", {
              id: "Landing_Success",
              "data-name": "Landing Success",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
                className: "cls-1",
                d: "M109.3,90.1A46,46,0,0,0,65,36V20.08c1.78-.62,7.21-2.14,12.57.23a19.33,19.33,0,0,0,14.82,0c.87-.38.61.31.61-17.93a1,1,0,0,0-1.43-.93c-.07,0-6.69,2.87-13.18,0A19.41,19.41,0,0,0,65,.93,1,1,0,0,0,63,1V36a45.86,45.86,0,0,0-28.66,10.8C16.18,40.48,4,40,.79,45.51-2.29,50.86,3.94,59.3,10,65.68A11,11,0,0,0,18,83c.81,38.41,46.08,59.2,75.66,34.21,8.53,3,29,9.15,33.55,1.31C130.39,113,123.86,102.65,109.3,90.1ZM77.59,3.31A19.39,19.39,0,0,0,91,3.83V18.68c-1.79.62-7.22,2.13-12.57-.23A19.19,19.19,0,0,0,65,17.93V3.08C66.81,2.46,72.24,1,77.59,3.31ZM65,45v-7c39.69.91,58,50.27,28.21,76.81C71.32,107,46,92.66,27.77,78.64a11,11,0,0,0-3.2-16.13A43.88,43.88,0,0,1,63,38.06V45A1,1,0,0,0,65,45ZM32.55,48.36a46.21,46.21,0,0,0-9.83,13.28,10.93,10.93,0,0,0-11.4,2.47C-8.39,43.23,5.23,39.08,32.55,48.36ZM10,72a9,9,0,1,1,9,9A9,9,0,0,1,10,72Zm10,11a11,11,0,0,0,6.34-2.82c18.45,14.21,43.45,28.35,65.05,36.22C63,139.16,20.83,119.1,20.05,83Zm105.4,34.5c-2.51,4.35-14,3.62-30-1.85a45.61,45.61,0,0,0,13.42-23.21C121.59,103.58,128,113.12,125.45,117.47Z"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 306,
                columnNumber: 17
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 305,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 297,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            className: "text-primarydark text-lg mdContainer:text-xl lgContainer:text-2xl mt-2 pl-2 dark:text-background",
            children: "Cash flow analysis"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 312,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 296,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 295,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
          className: "text-secondary text-xs mdContainer:text-sm lgContainer:text-base text-gray relative -top-1 lgContainer:top-0",
          children: "Manage your startup cash flow"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 318,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 317,
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
              lineNumber: 328,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
              className: "ml-2 text-primarydark",
              children: "Start:"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 333,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 327,
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
            lineNumber: 336,
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
            lineNumber: 345,
            columnNumber: 15
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 323,
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
              lineNumber: 361,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
              className: "ml-2 text-primarydark",
              children: "End:"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 366,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 360,
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
            lineNumber: 369,
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
            lineNumber: 378,
            columnNumber: 15
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 356,
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
              lineNumber: 402,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
              className: "ml-2",
              children: "Tax:"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 407,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 401,
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
              lineNumber: 410,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
              children: "%"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 411,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 409,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 389,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 322,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        id: "chartContainer",
        className: "w-full h-1/2 p-4 mdContainer:p-8 bg-white rounded-2xl mt-12 shadow-md"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 415,
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
              lineNumber: 421,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
              className: "ml-2",
              children: "Total revenue:"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 426,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 420,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            children: ["$", totalRevenue]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 428,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 419,
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
              lineNumber: 432,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
              className: "ml-2",
              children: "Monthly revenue:"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 437,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 431,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            children: ["$", monthlyRevenue]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 439,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 430,
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
              lineNumber: 443,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
              className: "ml-2",
              children: "Total costs:"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 448,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 442,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            children: ["$", totalCosts]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 450,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 441,
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
              lineNumber: 454,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
              className: "ml-2",
              children: "Monthly costs:"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 459,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 453,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            children: ["$", monthlyCosts]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 461,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 452,
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
              lineNumber: 465,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
              className: "ml-2",
              children: "Gross profit:"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 470,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 464,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            children: ["$", grossProfit]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 472,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 463,
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
              lineNumber: 476,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
              className: "ml-2",
              children: "Net profit:"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 481,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 475,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            children: ["$", netProfit]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 483,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 474,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 418,
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
              lineNumber: 494,
              columnNumber: 15
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 493,
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
              lineNumber: 497,
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
              lineNumber: 503,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 496,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 492,
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
            lineNumber: 534,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 513,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 487,
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
              lineNumber: 562,
              columnNumber: 15
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 561,
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
              lineNumber: 565,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
              className: "ml-2 cursor-pointer",
              src: "/cash-flow/dropdown.svg",
              height: size.width > 860 && 22 || size.width < 860 && size.width > 680 && 18 || size.width < 680 && 16,
              width: size.width > 860 && 22 || size.width < 860 && size.width > 680 && 18 || size.width < 680 && 16
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 571,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 564,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 560,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "w-full ".concat(size.width < 1120 ? 'text-sm mdContainer:text-base lg1Container:mx-8 lg1Container:mb-6 mt-4  bg-background rounded-2xl px-4 mdContainer:px-6 py-4' : 'w-full mx-8 mb-6 mt-4  bg-background rounded-2xl px-4 mdContainer:px-6 py-4'),
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "w-full grid grid-cols-6fr items-center",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              children: "name"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 588,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              children: "type"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 589,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              children: "amount"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 590,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              children: "start"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 591,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              children: "end"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 592,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 593,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 587,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("hr", {
            className: "text-primary w-full"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 595,
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
            lineNumber: 596,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 579,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 555,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 294,
      columnNumber: 7
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 293,
    columnNumber: 5
  }, _this);
};

_s(UniqueCashflowPage, "ivCN83Zi3o2L/V1MrRZl2YFU7yY=", false, function () {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvZGFzaGJvYXJkL3Byb2plY3RzL1twcm9qZWN0XS9jYXNoLWZsb3cvLmpzIl0sIm5hbWVzIjpbIlVuaXF1ZUNhc2hmbG93UGFnZSIsInByb2plY3QiLCJjb25zb2xlIiwibG9nIiwidXNlU3RhdGUiLCJEYXRlIiwic3RhcnREYXRlIiwic2V0U3RhcnREYXRlIiwiZW5kRGF0ZSIsInNldEVuZERhdGUiLCJzZWxlY3RlZFByb2plY3QiLCJzZXRTZWxlY3RlZFByb2plY3QiLCJyZXZlbnVlRWxlbWVudHMiLCJzZXRSZXZlbnVlRWxlbWVudHMiLCJjb3N0c0VsZW1lbnRzIiwic2V0Q29zdHNFbGVtZW50cyIsInBlcmlvZHMiLCJzZXRQZXJpb2RzIiwidGF4Iiwic2V0VGF4Iiwic2l6ZSIsInVzZVdpbmRvd1NpemUiLCJ0b3RhbFJldmVudWUiLCJzZXRUb3RhbFJldmVudWUiLCJtb250aGx5UmV2ZW51ZSIsInNldE1vbnRobHlSZXZlbnVlIiwidG90YWxDb3N0cyIsInNldFRvdGFsQ29zdHMiLCJtb250aGx5Q29zdHMiLCJzZXRNb250aGx5Q29zdHMiLCJncm9zc1Byb2ZpdCIsInNldEdyb3NzUHJvZml0IiwibmV0UHJvZml0Iiwic2V0TmV0UHJvZml0IiwidXNlRWZmZWN0IiwiY2hhbmdlZFN0YXJ0RGF0ZSIsImdsb2JhbFN0YXJ0RGF0ZSIsIl9zZWNvbmRzIiwiY2hhbmdlZEVuZERhdGUiLCJnbG9iYWxFbmREYXRlIiwidG90YWxSZXZlbnVlQXJyYXkiLCJtYXAiLCJlbGVtZW50IiwicGFyc2VJbnQiLCJ2YWx1ZSIsImxlbmd0aCIsInJlZHVjZSIsImEiLCJiIiwiTnVtYmVyIiwiaXNOYU4iLCJNYXRoIiwicm91bmQiLCJwZXJpb2RMZW5ndGgiLCJ0b3RhbENvc3RzQXJyYXkiLCJpc0Zpbml0ZSIsInJvdXRlciIsInVzZVJvdXRlciIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJpbm5lckhUTUwiLCJ3aWR0aCIsIm15Q2hhcnRSZWYiLCJnZXRDb250ZXh0IiwicmV2ZW51ZURhdGFzZXQiLCJ0ZXN0QXJyYXkiLCJyZXZlbnVlRWxlbWVudCIsImluZGV4IiwibW9udGhEYXRhIiwicGVyaW9kIiwicGVyaW9kSW5kZXgiLCJyZXZlbnVlUGVyaW9kIiwicHVzaCIsImxhYmVsIiwidGl0bGUiLCJkYXRhIiwiYmFja2dyb3VuZENvbG9yIiwiY29sb3IiLCJib3JkZXJDb2xvciIsImNvc3RzRGF0YXNldCIsImNvc3RzRWxlbWVudCIsImNvc3RzUGVyaW9kIiwicmV2ZW51ZUFycmF5IiwiY2FsY3VsYXRlZFJldmVudWVBcnJheSIsInVuZGVmaW5lZCIsImMiLCJpIiwiY29zdHNBcnJheSIsImNhbGN1bGF0ZWRDb3N0c0FycmF5IiwiZmluYWxBcnJheSIsImNhbGN1bGF0ZWRGaW5hbEFycmF5IiwiYXJyYXkiLCJ6ZXJvQXJyYXkiLCJmaW5hbERhdGFCZWZvcmVUYXgiLCJmaW5hbERhdGFBZnRlclRheCIsIm5ldFdvcnRoQXJyYXkiLCJuZXRXb3J0aCIsImRhdGFFbGVtZW50IiwicmV2ZW51ZUVsZW1lbnRJbmRleCIsIkNoYXJ0IiwidHlwZSIsImxhYmVscyIsImRhdGFzZXRzIiwiZmlsbCIsImxpbmVUZW5zaW9uIiwiYm9yZGVyV2lkdGgiLCJwb2ludFJhZGl1cyIsIm9wdGlvbnMiLCJza2lwTnVsbCIsInJlc3BvbnNpdmUiLCJwbHVnaW5zIiwibGVnZW5kIiwicG9zaXRpb24iLCJmb250RmFtaWx5IiwiZm9udCIsImJveFdpZHRoIiwic2NhbGVzIiwieCIsInN0YWNrZWQiLCJ0aWNrcyIsImJlZ2luQXRaZXJvIiwieSIsImlzRmFsbGJhY2siLCJpc01vYmlsZSIsImFkZFllYXJzIiwiZ3JpZENvbHVtblN0YXJ0IiwiZ3JpZENvbHVtbkVuZCIsInRleHRBbGlnbkxhc3QiLCJoZWlnaHQiLCJmb250U2l6ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFFQTtB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QTtBQUFBLHFCQUZGLGVBR0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBSEYsZUFJRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFKRixlQUtFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUxGLGVBTUU7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFORjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBUkYsZUFnQkU7QUFBSSxxQkFBUyxFQUFDO0FBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFoQkYsZUFpQkU7QUFBSyxxQkFBUyxFQUFDLG1EQUFmO0FBQUEsc0JBQ0cvQyxhQUFhLElBQ1pBLGFBQWEsQ0FBQzJCLEdBQWQsQ0FBa0IsVUFBQ0MsT0FBRCxFQUFVeUIsS0FBVixFQUFvQjtBQUNwQyxrQ0FDRSx1SkFERixDQUVFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBWEY7QUFhRCxhQWREO0FBRko7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFqQkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQXhCRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFyUUY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBdVVELENBM2xCRDs7R0FBTW5FLGtCO1VBU1NxQixrRSxFQW9ERW9DLHFEOzs7S0E3RFh6RCxrQjs7QUEyb0JTLGlLQUFBQSxrQkFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9kYXNoYm9hcmQvcHJvamVjdHMvW3Byb2plY3RdL2Nhc2gtZmxvdy9baWRdLmYzNWU2NDFiMzhkMjI0NzY0NjgxLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSwgdXNlUmVmIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBkYiB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL2xpYi9maXJlYmFzZS1hZG1pbic7XHJcbmltcG9ydCB7IGRiIGFzIGRiQ2xpZW50IH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vbGliL2ZpcmViYXNlJztcclxuaW1wb3J0IHsgaXNNb2JpbGUgfSBmcm9tICdyZWFjdC1kZXZpY2UtZGV0ZWN0JztcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xyXG5pbXBvcnQgQ29va2llcyBmcm9tICdqcy1jb29raWUnO1xyXG5pbXBvcnQgVW5pcXVlRWxlbWVudCBmcm9tICcuLi8uLi8uLi8uLi8uLi9jb21wb25lbnRzL2Rhc2hib2FyZC9zdGFydHVwL3Byb2plY3QvYnVzaW5lc3MtYXBwL2NvbXBldGl0b3JzL1VuaXF1ZUVsZW1lbnQnO1xyXG5pbXBvcnQgQm91bmNlTG9hZGVyQ29tcG9uZW50IGZyb20gJy4uLy4uLy4uLy4uLy4uL2NvbXBvbmVudHMvQm91bmNlTG9hZGVyJztcclxuY29uc3Qgc2FmZUpzb25TdHJpbmdpZnkgPSByZXF1aXJlKCdzYWZlLWpzb24tc3RyaW5naWZ5Jyk7XHJcbmltcG9ydCB7IHVzZVdpbmRvd1NpemUgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi91dGlscy91c2VXaW5kb3dTaXplJztcclxuXHJcbmltcG9ydCBEYXRlUGlja2VyIGZyb20gJ3JlYWN0LWRhdGVwaWNrZXInO1xyXG5pbXBvcnQgeyBhZGRZZWFycywgZm9ybWF0IH0gZnJvbSAnZGF0ZS1mbnMnO1xyXG5pbXBvcnQgbW9tZW50IGZyb20gJ21vbWVudCc7XHJcblxyXG5jb25zdCBVbmlxdWVDYXNoZmxvd1BhZ2UgPSAoeyBwcm9qZWN0IH0pID0+IHtcclxuICBjb25zb2xlLmxvZygnUGFydGljdWxhciBwcm9qZWN0IC0tPiAnLCBwcm9qZWN0KTtcclxuICBjb25zdCBbc3RhcnREYXRlLCBzZXRTdGFydERhdGVdID0gdXNlU3RhdGUobmV3IERhdGUoKSk7XHJcbiAgY29uc3QgW2VuZERhdGUsIHNldEVuZERhdGVdID0gdXNlU3RhdGUobmV3IERhdGUoKSk7XHJcbiAgY29uc3QgW3NlbGVjdGVkUHJvamVjdCwgc2V0U2VsZWN0ZWRQcm9qZWN0XSA9IHVzZVN0YXRlKG51bGwpO1xyXG4gIGNvbnN0IFtyZXZlbnVlRWxlbWVudHMsIHNldFJldmVudWVFbGVtZW50c10gPSB1c2VTdGF0ZSgpO1xyXG4gIGNvbnN0IFtjb3N0c0VsZW1lbnRzLCBzZXRDb3N0c0VsZW1lbnRzXSA9IHVzZVN0YXRlKCk7XHJcbiAgY29uc3QgW3BlcmlvZHMsIHNldFBlcmlvZHNdID0gdXNlU3RhdGUoKTtcclxuICBjb25zdCBbdGF4LCBzZXRUYXhdID0gdXNlU3RhdGUoKTtcclxuICBjb25zdCBzaXplID0gdXNlV2luZG93U2l6ZSgpO1xyXG4gIC8vIFN1bSBkYXRhXHJcbiAgY29uc3QgW3RvdGFsUmV2ZW51ZSwgc2V0VG90YWxSZXZlbnVlXSA9IHVzZVN0YXRlKCk7XHJcbiAgY29uc3QgW21vbnRobHlSZXZlbnVlLCBzZXRNb250aGx5UmV2ZW51ZV0gPSB1c2VTdGF0ZSgpO1xyXG4gIGNvbnN0IFt0b3RhbENvc3RzLCBzZXRUb3RhbENvc3RzXSA9IHVzZVN0YXRlKCk7XHJcbiAgY29uc3QgW21vbnRobHlDb3N0cywgc2V0TW9udGhseUNvc3RzXSA9IHVzZVN0YXRlKCk7XHJcbiAgY29uc3QgW2dyb3NzUHJvZml0LCBzZXRHcm9zc1Byb2ZpdF0gPSB1c2VTdGF0ZSgpO1xyXG4gIGNvbnN0IFtuZXRQcm9maXQsIHNldE5ldFByb2ZpdF0gPSB1c2VTdGF0ZSgpO1xyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBwcm9qZWN0ICYmIHNldFNlbGVjdGVkUHJvamVjdChwcm9qZWN0WzBdKTtcclxuICAgIHByb2plY3QgJiYgc2V0UmV2ZW51ZUVsZW1lbnRzKHByb2plY3RbMF0ucmV2ZW51ZUVsZW1lbnRzKTtcclxuICAgIHByb2plY3QgJiYgc2V0Q29zdHNFbGVtZW50cyhwcm9qZWN0WzBdLmNvc3RzRWxlbWVudHMpO1xyXG4gICAgcHJvamVjdCAmJiBzZXRQZXJpb2RzKHByb2plY3RbMF0ucGVyaW9kcyk7XHJcbiAgICBwcm9qZWN0ICYmIHNldFRheChwcm9qZWN0WzBdLnRheCk7XHJcbiAgICAvLyBTdW0gZGF0YVxyXG4gICAgLy8gR2xvYmFsIHN0YXJ0IGRhdGVcclxuICAgIGNvbnN0IGNoYW5nZWRTdGFydERhdGUgPSBwcm9qZWN0WzBdLmdsb2JhbFN0YXJ0RGF0ZS5fc2Vjb25kcyAqIDEwMDA7XHJcbiAgICBjb25zb2xlLmxvZyhjaGFuZ2VkU3RhcnREYXRlKTtcclxuICAgIHByb2plY3RbMF0uZ2xvYmFsU3RhcnREYXRlICE9PSAnJyAmJiBzZXRTdGFydERhdGUobmV3IERhdGUoY2hhbmdlZFN0YXJ0RGF0ZSkpO1xyXG4gICAgY29uc3QgY2hhbmdlZEVuZERhdGUgPSBwcm9qZWN0WzBdLmdsb2JhbEVuZERhdGUuX3NlY29uZHMgKiAxMDAwO1xyXG4gICAgLy8gR2xvYmFsIGVuZCBkYXRlXHJcbiAgICBwcm9qZWN0WzBdLmdsb2JhbEVuZERhdGUgIT09ICcnICYmIHNldEVuZERhdGUobmV3IERhdGUoY2hhbmdlZEVuZERhdGUpKTtcclxuICAgIC8vIFBlcmlvZHNcclxuICAgIHNldFBlcmlvZHMocHJvamVjdFswXS5wZXJpb2RzKTtcclxuICAgIC8vIFRvdGFsIHJldmVudWVcclxuICAgIGNvbnN0IHRvdGFsUmV2ZW51ZUFycmF5ID0gcHJvamVjdFswXS5yZXZlbnVlRWxlbWVudHMubWFwKChlbGVtZW50KSA9PiBwYXJzZUludChlbGVtZW50LnZhbHVlICogZWxlbWVudC5wZXJpb2RzLmxlbmd0aCkpO1xyXG4gICAgY29uc3QgdG90YWxSZXZlbnVlID0gdG90YWxSZXZlbnVlQXJyYXkucmVkdWNlKChhLCBiKSA9PiB7XHJcbiAgICAgIHJldHVybiBhICsgYjtcclxuICAgIH0sIDApO1xyXG4gICAgc2V0VG90YWxSZXZlbnVlKE51bWJlci5pc05hTih0b3RhbFJldmVudWUpID8gMCA6IE1hdGgucm91bmQodG90YWxSZXZlbnVlKSk7XHJcbiAgICAvLyBNb250aGx5IHJldmVudWVcclxuICAgIGNvbnN0IHBlcmlvZExlbmd0aCA9IHByb2plY3RbMF0ucGVyaW9kcy5sZW5ndGg7XHJcbiAgICBjb25zdCBtb250aGx5UmV2ZW51ZSA9IHRvdGFsUmV2ZW51ZSAvIHBlcmlvZExlbmd0aDtcclxuICAgIHNldE1vbnRobHlSZXZlbnVlKE51bWJlci5pc05hTihtb250aGx5UmV2ZW51ZSkgPyAwIDogTWF0aC5yb3VuZChtb250aGx5UmV2ZW51ZSkpO1xyXG4gICAgLy8gVG90YWwgY29zdHNcclxuICAgIGNvbnN0IHRvdGFsQ29zdHNBcnJheSA9IHByb2plY3RbMF0uY29zdHNFbGVtZW50cy5tYXAoKGVsZW1lbnQpID0+IHBhcnNlSW50KGVsZW1lbnQudmFsdWUgKiBlbGVtZW50LnBlcmlvZHMubGVuZ3RoKSk7XHJcbiAgICBjb25zdCB0b3RhbENvc3RzID0gdG90YWxDb3N0c0FycmF5LnJlZHVjZSgoYSwgYikgPT4ge1xyXG4gICAgICByZXR1cm4gYSArIGI7XHJcbiAgICB9LCAwKTtcclxuICAgIHNldFRvdGFsQ29zdHMoTnVtYmVyLmlzRmluaXRlKHRvdGFsQ29zdHMpID8gTWF0aC5yb3VuZCh0b3RhbENvc3RzKSA6IDApO1xyXG4gICAgLy8gTW9udGhseSBjb3N0c1xyXG4gICAgY29uc3QgbW9udGhseUNvc3RzID0gdG90YWxDb3N0cyAvIHBlcmlvZExlbmd0aDtcclxuICAgIHNldE1vbnRobHlDb3N0cyhOdW1iZXIuaXNGaW5pdGUobW9udGhseUNvc3RzKSA/IE1hdGgucm91bmQobW9udGhseUNvc3RzKSA6IDApO1xyXG4gICAgLy8gR3Jvc3MgcHJvZml0XHJcbiAgICBjb25zdCBncm9zc1Byb2ZpdCA9IHRvdGFsUmV2ZW51ZSAtIHRvdGFsQ29zdHM7XHJcbiAgICBzZXRHcm9zc1Byb2ZpdChOdW1iZXIuaXNGaW5pdGUoZ3Jvc3NQcm9maXQpID8gTWF0aC5yb3VuZChncm9zc1Byb2ZpdCkgOiAwKTtcclxuICAgIC8vIE5ldCBwcm9maXRcclxuICAgIGNvbnN0IHRheCA9IHBhcnNlSW50KHByb2plY3RbMF0udGF4KTtcclxuICAgIGNvbnN0IG5ldFByb2ZpdCA9IGdyb3NzUHJvZml0IC0gKHRheCAvIDEwMCkgKiBncm9zc1Byb2ZpdDtcclxuICAgIHNldE5ldFByb2ZpdChOdW1iZXIuaXNGaW5pdGUobmV0UHJvZml0KSA/IE1hdGgucm91bmQobmV0UHJvZml0KSA6IDApO1xyXG4gIH0sIFtwcm9qZWN0XSk7XHJcbiAgLy8gICBjb25zdCBbY29tcGV0aXRvcnMsIHNldENvbXBldGl0b3JzXSA9IHVzZVN0YXRlKFtdKTtcclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuXHJcbiAgLy8gQ2hhcnRcclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgLy8gY29uc3QgbXlDaGFydFJlZiA9IGNoYXJ0UmVmLmN1cnJlbnQuZ2V0Q29udGV4dCgnMmQnKTtcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGBjaGFydENvbnRhaW5lcmApLmlubmVySFRNTCA9ICcmbmJzcDsnO1xyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYGNoYXJ0Q29udGFpbmVyYCkuaW5uZXJIVE1MID0gYDxjYW52YXMgaGVpZ2h0PScke3NpemUud2lkdGggPiA2ODAgPyA3NSA6ICd1bnNldCd9JyBpZD0nY2hhcnQnPjwvY2FudmFzPmA7XHJcbiAgICBjb25zdCBteUNoYXJ0UmVmID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NoYXJ0JykuZ2V0Q29udGV4dCgnMmQnKTtcclxuXHJcbiAgICAvLyBSZXZlbnVlIGRhdGFzZXRzXHJcbiAgICBjb25zdCByZXZlbnVlRGF0YXNldCA9IFtdO1xyXG4gICAgY29uc3QgdGVzdEFycmF5ID0gW107XHJcbiAgICAvLyBjb25zdCBtb250aERhdGEgPSBwZXJpb2RzICYmIHBlcmlvZHMubWFwKCgpID0+IG51bGwpO1xyXG4gICAgcmV2ZW51ZUVsZW1lbnRzICYmXHJcbiAgICAgIHJldmVudWVFbGVtZW50cy5tYXAoKHJldmVudWVFbGVtZW50LCBpbmRleCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IG1vbnRoRGF0YSA9IHBlcmlvZHMgJiYgcGVyaW9kcy5tYXAoKCkgPT4gbnVsbCk7XHJcbiAgICAgICAgY29uc29sZS5sb2cocmV2ZW51ZUVsZW1lbnQpO1xyXG4gICAgICAgIHBlcmlvZHMgJiZcclxuICAgICAgICAgIHBlcmlvZHMubWFwKChwZXJpb2QsIHBlcmlvZEluZGV4KSA9PiB7XHJcbiAgICAgICAgICAgIHJldmVudWVFbGVtZW50LnBlcmlvZHMubWFwKChyZXZlbnVlUGVyaW9kKSA9PiB7XHJcbiAgICAgICAgICAgICAgaWYgKHBlcmlvZCA9PSByZXZlbnVlUGVyaW9kKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAobW9udGhEYXRhW3BlcmlvZEluZGV4XSA9PSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICAgIG1vbnRoRGF0YVtwZXJpb2RJbmRleF0gPSByZXZlbnVlRWxlbWVudC52YWx1ZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgY29uc29sZS5sb2cobW9udGhEYXRhKTtcclxuICAgICAgICB0ZXN0QXJyYXkucHVzaChtb250aERhdGEpO1xyXG4gICAgICAgIHJldmVudWVEYXRhc2V0LnB1c2goe1xyXG4gICAgICAgICAgbGFiZWw6IGByZXZlbnVlIC8gJHtyZXZlbnVlRWxlbWVudC50aXRsZX1gLFxyXG4gICAgICAgICAgZGF0YTogbW9udGhEYXRhLFxyXG4gICAgICAgICAgYmFja2dyb3VuZENvbG9yOiByZXZlbnVlRWxlbWVudC5jb2xvcixcclxuICAgICAgICAgIGJvcmRlckNvbG9yOiByZXZlbnVlRWxlbWVudC5jb2xvcixcclxuICAgICAgICB9KTtcclxuICAgICAgfSk7XHJcblxyXG4gICAgLy8gQ29zdHMgZGF0YXNldHNcclxuICAgIGNvbnN0IGNvc3RzRGF0YXNldCA9IFtdO1xyXG4gICAgY29zdHNFbGVtZW50cyAmJlxyXG4gICAgICBjb3N0c0VsZW1lbnRzLm1hcCgoY29zdHNFbGVtZW50LCBpbmRleCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IG1vbnRoRGF0YSA9IHBlcmlvZHMgJiYgcGVyaW9kcy5tYXAoKCkgPT4gbnVsbCk7XHJcbiAgICAgICAgY29uc29sZS5sb2coY29zdHNFbGVtZW50KTtcclxuICAgICAgICBwZXJpb2RzICYmXHJcbiAgICAgICAgICBwZXJpb2RzLm1hcCgocGVyaW9kLCBwZXJpb2RJbmRleCkgPT4ge1xyXG4gICAgICAgICAgICBjb3N0c0VsZW1lbnQucGVyaW9kcy5tYXAoKGNvc3RzUGVyaW9kKSA9PiB7XHJcbiAgICAgICAgICAgICAgaWYgKHBlcmlvZCA9PSBjb3N0c1BlcmlvZCkge1xyXG4gICAgICAgICAgICAgICAgaWYgKG1vbnRoRGF0YVtwZXJpb2RJbmRleF0gPT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgICBtb250aERhdGFbcGVyaW9kSW5kZXhdID0gLWNvc3RzRWxlbWVudC52YWx1ZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgY29uc29sZS5sb2cobW9udGhEYXRhKTtcclxuICAgICAgICB0ZXN0QXJyYXkucHVzaChtb250aERhdGEpO1xyXG4gICAgICAgIGNvc3RzRGF0YXNldC5wdXNoKHtcclxuICAgICAgICAgIGxhYmVsOiBgY29zdHMgLyAke2Nvc3RzRWxlbWVudC50aXRsZX1gLFxyXG4gICAgICAgICAgZGF0YTogbW9udGhEYXRhLFxyXG4gICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBjb3N0c0VsZW1lbnQuY29sb3IsXHJcbiAgICAgICAgICBib3JkZXJDb2xvcjogY29zdHNFbGVtZW50LmNvbG9yLFxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9KTtcclxuICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICAgIC8vIFJldmVudWVcclxuICAgIGNvbnN0IHJldmVudWVBcnJheSA9IFtdO1xyXG4gICAgcmV2ZW51ZURhdGFzZXQubGVuZ3RoICE9PSAwICYmXHJcbiAgICAgIHJldmVudWVEYXRhc2V0Lmxlbmd0aCAhPT0gMCAmJlxyXG4gICAgICByZXZlbnVlRGF0YXNldC5tYXAoKGVsZW1lbnQpID0+XHJcbiAgICAgICAgcmV2ZW51ZUFycmF5LnB1c2goXHJcbiAgICAgICAgICBlbGVtZW50LmRhdGEgJiZcclxuICAgICAgICAgICAgZWxlbWVudC5kYXRhLm1hcCgoZGF0YSkgPT4ge1xyXG4gICAgICAgICAgICAgIGlmIChkYXRhICE9PSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gcGFyc2VJbnQoZGF0YSk7XHJcbiAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiAwO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSlcclxuICAgICAgICApXHJcbiAgICAgICk7XHJcbiAgICBjb25zb2xlLmxvZyhyZXZlbnVlQXJyYXkpO1xyXG4gICAgY29uc3QgY2FsY3VsYXRlZFJldmVudWVBcnJheSA9XHJcbiAgICAgIHJldmVudWVBcnJheS5sZW5ndGggIT09IDAgJiYgcmV2ZW51ZUFycmF5WzBdICE9PSB1bmRlZmluZWQgJiYgcmV2ZW51ZUFycmF5LnJlZHVjZSgoYSwgYikgPT4gYS5tYXAoKGMsIGkpID0+IGMgKyBiW2ldKSk7XHJcbiAgICBjb25zb2xlLmxvZyhjYWxjdWxhdGVkUmV2ZW51ZUFycmF5KTtcclxuICAgIC8vIENvc3RzXHJcbiAgICBjb25zdCBjb3N0c0FycmF5ID0gW107XHJcbiAgICBjb25zb2xlLmxvZyhjb3N0c0RhdGFzZXQpO1xyXG4gICAgY29zdHNEYXRhc2V0Lmxlbmd0aCAhPT0gMCAmJlxyXG4gICAgICBjb3N0c0RhdGFzZXQubGVuZ3RoICE9PSAwICYmXHJcbiAgICAgIGNvc3RzRGF0YXNldC5tYXAoKGVsZW1lbnQpID0+XHJcbiAgICAgICAgY29zdHNBcnJheS5wdXNoKFxyXG4gICAgICAgICAgZWxlbWVudC5kYXRhICYmXHJcbiAgICAgICAgICAgIGVsZW1lbnQuZGF0YS5tYXAoKGRhdGEpID0+IHtcclxuICAgICAgICAgICAgICBpZiAoZGF0YSAhPT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHBhcnNlSW50KGRhdGEpO1xyXG4gICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gMDtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgKVxyXG4gICAgICApO1xyXG4gICAgY29uc29sZS5sb2coY29zdHNBcnJheSk7XHJcbiAgICBjb25zdCBjYWxjdWxhdGVkQ29zdHNBcnJheSA9XHJcbiAgICAgIGNvc3RzQXJyYXkubGVuZ3RoICE9PSAwICYmIGNvc3RzQXJyYXlbMF0gIT09IHVuZGVmaW5lZCAmJiBjb3N0c0FycmF5LnJlZHVjZSgoYSwgYikgPT4gYS5tYXAoKGMsIGkpID0+IGMgKyBiW2ldKSk7XHJcbiAgICBjb25zb2xlLmxvZyhjYWxjdWxhdGVkQ29zdHNBcnJheSk7XHJcbiAgICAvLyBGaW5hbCB2YWx1ZVxyXG4gICAgY29uc3QgZmluYWxBcnJheSA9IFtjYWxjdWxhdGVkUmV2ZW51ZUFycmF5LCBjYWxjdWxhdGVkQ29zdHNBcnJheV07XHJcbiAgICBjb25zb2xlLmxvZyhmaW5hbEFycmF5KTtcclxuICAgIC8vIENoZWNrIGlmIGFueSBhcnJheSBpcyBmYWxzeVxyXG4gICAgY29uc3QgY2FsY3VsYXRlZEZpbmFsQXJyYXkgPVxyXG4gICAgICBmaW5hbEFycmF5ICYmXHJcbiAgICAgIGZpbmFsQXJyYXkubWFwKChhcnJheSkgPT4ge1xyXG4gICAgICAgIGlmICghYXJyYXkpIHtcclxuICAgICAgICAgIGNvbnN0IHplcm9BcnJheSA9IFtdO1xyXG4gICAgICAgICAgcGVyaW9kcyAmJiBwZXJpb2RzLm1hcCgocGVyaW9kKSA9PiB6ZXJvQXJyYXkucHVzaCgwKSk7XHJcbiAgICAgICAgICByZXR1cm4gemVyb0FycmF5O1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICByZXR1cm4gYXJyYXk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgIGNvbnNvbGUubG9nKGNhbGN1bGF0ZWRGaW5hbEFycmF5KTtcclxuICAgIGNvbnN0IGZpbmFsRGF0YUJlZm9yZVRheCA9XHJcbiAgICAgIGNhbGN1bGF0ZWRGaW5hbEFycmF5Lmxlbmd0aCAhPT0gMCAmJiBjYWxjdWxhdGVkRmluYWxBcnJheS5yZWR1Y2UoKGEsIGIpID0+IGEgJiYgYiAmJiBhLm1hcCgoYywgaSkgPT4gYyArIGJbaV0pKTtcclxuICAgIGNvbnN0IGZpbmFsRGF0YUFmdGVyVGF4ID0gZmluYWxEYXRhQmVmb3JlVGF4ICYmIGZpbmFsRGF0YUJlZm9yZVRheC5tYXAoKGRhdGEpID0+IGRhdGEgLSAodGF4IC8gMTAwKSAqIGRhdGEpO1xyXG4gICAgY29uc29sZS5sb2coZmluYWxEYXRhQWZ0ZXJUYXgpO1xyXG5cclxuICAgIGNvbnN0IG5ldFdvcnRoQXJyYXkgPSBbXTtcclxuICAgIGNvbnN0IG5ldFdvcnRoID1cclxuICAgICAgcmV2ZW51ZURhdGFzZXQubGVuZ3RoICE9PSAwICYmXHJcbiAgICAgIGNvc3RzRGF0YXNldC5sZW5ndGggIT09IDAgJiZcclxuICAgICAgcmV2ZW51ZURhdGFzZXQgJiZcclxuICAgICAgcmV2ZW51ZURhdGFzZXQubWFwKChyZXZlbnVlRWxlbWVudCwgaW5kZXgpID0+IHtcclxuICAgICAgICBjb25zdCB2YWx1ZSA9XHJcbiAgICAgICAgICByZXZlbnVlRWxlbWVudC5kYXRhICYmXHJcbiAgICAgICAgICByZXZlbnVlRWxlbWVudC5kYXRhLm1hcCgoZGF0YUVsZW1lbnQsIHJldmVudWVFbGVtZW50SW5kZXgpID0+IHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coZGF0YUVsZW1lbnQpO1xyXG4gICAgICAgICAgICBpZiAoZGF0YUVsZW1lbnQgIT09IG51bGwgJiYgY29zdHNEYXRhc2V0W2luZGV4XSkge1xyXG4gICAgICAgICAgICAgIGlmIChjb3N0c0RhdGFzZXRbaW5kZXhdLmRhdGFbcmV2ZW51ZUVsZW1lbnRJbmRleF0pIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGdyb3NzUHJvZml0ID0gZGF0YUVsZW1lbnQgLSAtY29zdHNEYXRhc2V0WzBdLmRhdGFbcmV2ZW51ZUVsZW1lbnRJbmRleF07XHJcbiAgICAgICAgICAgICAgICBuZXRXb3J0aEFycmF5LnB1c2goZ3Jvc3NQcm9maXQgLSAodGF4IC8gMTAwKSAqIGdyb3NzUHJvZml0KTtcclxuICAgICAgICAgICAgICAgIC8vIHJldHVybiBncm9zc1Byb2ZpdCAtICh0YXggLyAxMDApICogZ3Jvc3NQcm9maXQ7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICByZXR1cm4gdmFsdWU7XHJcbiAgICAgIH0pO1xyXG5cclxuICAgIG5ldyBDaGFydChteUNoYXJ0UmVmLCB7XHJcbiAgICAgIHR5cGU6ICdiYXInLFxyXG4gICAgICBkYXRhOiB7XHJcbiAgICAgICAgbGFiZWxzOiBwZXJpb2RzICYmIHBlcmlvZHMsXHJcbiAgICAgICAgZGF0YXNldHM6IFtcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgdHlwZTogJ2xpbmUnLFxyXG4gICAgICAgICAgICBsYWJlbDogJ05ldCBwcm9maXQnLFxyXG4gICAgICAgICAgICBkYXRhOiBmaW5hbERhdGFBZnRlclRheCxcclxuICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiAncmdiYSgxMCwgMTgsIDQ4LCAxKScsXHJcbiAgICAgICAgICAgIGJvcmRlckNvbG9yOiAncmdiYSgxMCwgMTgsIDQ4LCAxKScsXHJcbiAgICAgICAgICAgIGZpbGw6IDAsXHJcbiAgICAgICAgICAgIGxpbmVUZW5zaW9uOiAwLFxyXG4gICAgICAgICAgICBib3JkZXJXaWR0aDogc2l6ZS53aWR0aCA8IDY4MCA/IDEgOiAzLFxyXG4gICAgICAgICAgICBwb2ludFJhZGl1czogc2l6ZS53aWR0aCA8IDY4MCA/IDIgOiAzLFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIC4uLnJldmVudWVEYXRhc2V0LFxyXG4gICAgICAgICAgLi4uY29zdHNEYXRhc2V0LFxyXG4gICAgICAgIF0sXHJcbiAgICAgIH0sXHJcbiAgICAgIG9wdGlvbnM6IHtcclxuICAgICAgICBza2lwTnVsbDogdHJ1ZSxcclxuICAgICAgICByZXNwb25zaXZlOiB0cnVlLFxyXG4gICAgICAgIHBsdWdpbnM6IHtcclxuICAgICAgICAgIGxlZ2VuZDoge1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogJ3JpZ2h0JyxcclxuICAgICAgICAgICAgbGFiZWxzOiB7XHJcbiAgICAgICAgICAgICAgZm9udEZhbWlseTogJ0NvbWZvcnRhYScsXHJcbiAgICAgICAgICAgICAgZm9udDoge1xyXG4gICAgICAgICAgICAgICAgc2l6ZTogc2l6ZS53aWR0aCA8IDY4MCA/IDggOiAxMixcclxuICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgIGJveFdpZHRoOiBzaXplLndpZHRoIDwgNjgwID8gMTAgOiA0MCxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgfSxcclxuICAgICAgICBzY2FsZXM6IHtcclxuICAgICAgICAgIHg6IHtcclxuICAgICAgICAgICAgc3RhY2tlZDogdHJ1ZSxcclxuICAgICAgICAgICAgdGlja3M6IHtcclxuICAgICAgICAgICAgICBmb250RmFtaWx5OiAnQ29tZm9ydGFhJyxcclxuICAgICAgICAgICAgICBiZWdpbkF0WmVybzogdHJ1ZSxcclxuICAgICAgICAgICAgICBmb250OiB7XHJcbiAgICAgICAgICAgICAgICBzaXplOiBzaXplLndpZHRoIDwgNjgwID8gOCA6IDEyLFxyXG4gICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIC8vIGJlZ2luQXRaZXJvOiB0cnVlLFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIHk6IHtcclxuICAgICAgICAgICAgc3RhY2tlZDogdHJ1ZSxcclxuICAgICAgICAgICAgdGlja3M6IHtcclxuICAgICAgICAgICAgICBmb250RmFtaWx5OiAnQ29tZm9ydGFhJyxcclxuICAgICAgICAgICAgICBiZWdpbkF0WmVybzogdHJ1ZSxcclxuICAgICAgICAgICAgICBmb250OiB7XHJcbiAgICAgICAgICAgICAgICBzaXplOiBzaXplLndpZHRoIDwgNjgwID8gOCA6IDEyLFxyXG4gICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIC8vIGJlZ2luQXRaZXJvOiB0cnVlLFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICB9LFxyXG4gICAgICB9LFxyXG4gICAgfSk7XHJcbiAgfSwgW3BlcmlvZHMsIHJldmVudWVFbGVtZW50cywgY29zdHNFbGVtZW50cywgdGF4XSk7XHJcblxyXG4gIGlmIChyb3V0ZXIuaXNGYWxsYmFjaykge1xyXG4gICAgcmV0dXJuIDxCb3VuY2VMb2FkZXJDb21wb25lbnQgLz47XHJcbiAgfVxyXG5cclxuICBjb25zb2xlLmxvZyhzdGFydERhdGUpO1xyXG4gIGNvbnNvbGUubG9nKGVuZERhdGUpO1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cIm1pbi1oLXNjcmVlbiB3LWZ1bGwgcmVsYXRpdmUgZmxleCBmbGV4LWNvbCBpdGVtcy1jZW50ZXJcIj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGwgbWF4LXctZnVsbCByZWxhdGl2ZSBtdC0xMiBsZzFDb250YWluZXI6bXQtMTYgbWItMTYgcHgtMzJcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlbGF0aXZlIGdyaWQgZ3JpZC1jb2xzLTIgZ3JpZC1yb3dzLTEgZ3JpZC1mbG93LWNvbFwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlclwiPlxyXG4gICAgICAgICAgICA8c3ZnXHJcbiAgICAgICAgICAgICAgaGVpZ2h0PXsoc2l6ZS53aWR0aCA+IDg2MCAmJiAzMCkgfHwgKHNpemUud2lkdGggPCA4NjAgJiYgc2l6ZS53aWR0aCA+IDY4MCAmJiAyNikgfHwgKHNpemUud2lkdGggPCA2ODAgJiYgMjIpfVxyXG4gICAgICAgICAgICAgIHdpZHRoPXsoc2l6ZS53aWR0aCA+IDg2MCAmJiAzMCkgfHwgKHNpemUud2lkdGggPCA4NjAgJiYgc2l6ZS53aWR0aCA+IDY4MCAmJiAyNikgfHwgKHNpemUud2lkdGggPCA2ODAgJiYgMjIpfVxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZpbGwtY3VycmVudCB0ZXh0LXByaW1hcnkgZGFyazp0ZXh0LXByaW1hcnlkYXJrXCJcclxuICAgICAgICAgICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcclxuICAgICAgICAgICAgICB2aWV3Qm94PVwiMCAwIDEyOCAxMjhcIlxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgPHRpdGxlPkxhbmRpbmcgU3VjY2VzczwvdGl0bGU+XHJcbiAgICAgICAgICAgICAgPGcgaWQ9XCJMYW5kaW5nX1N1Y2Nlc3NcIiBkYXRhLW5hbWU9XCJMYW5kaW5nIFN1Y2Nlc3NcIj5cclxuICAgICAgICAgICAgICAgIDxwYXRoXHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImNscy0xXCJcclxuICAgICAgICAgICAgICAgICAgZD1cIk0xMDkuMyw5MC4xQTQ2LDQ2LDAsMCwwLDY1LDM2VjIwLjA4YzEuNzgtLjYyLDcuMjEtMi4xNCwxMi41Ny4yM2ExOS4zMywxOS4zMywwLDAsMCwxNC44MiwwYy44Ny0uMzguNjEuMzEuNjEtMTcuOTNhMSwxLDAsMCwwLTEuNDMtLjkzYy0uMDcsMC02LjY5LDIuODctMTMuMTgsMEExOS40MSwxOS40MSwwLDAsMCw2NSwuOTMsMSwxLDAsMCwwLDYzLDFWMzZhNDUuODYsNDUuODYsMCwwLDAtMjguNjYsMTAuOEMxNi4xOCw0MC40OCw0LDQwLC43OSw0NS41MS0yLjI5LDUwLjg2LDMuOTQsNTkuMywxMCw2NS42OEExMSwxMSwwLDAsMCwxOCw4M2MuODEsMzguNDEsNDYuMDgsNTkuMiw3NS42NiwzNC4yMSw4LjUzLDMsMjksOS4xNSwzMy41NSwxLjMxQzEzMC4zOSwxMTMsMTIzLjg2LDEwMi42NSwxMDkuMyw5MC4xWk03Ny41OSwzLjMxQTE5LjM5LDE5LjM5LDAsMCwwLDkxLDMuODNWMTguNjhjLTEuNzkuNjItNy4yMiwyLjEzLTEyLjU3LS4yM0ExOS4xOSwxOS4xOSwwLDAsMCw2NSwxNy45M1YzLjA4QzY2LjgxLDIuNDYsNzIuMjQsMSw3Ny41OSwzLjMxWk02NSw0NXYtN2MzOS42OS45MSw1OCw1MC4yNywyOC4yMSw3Ni44MUM3MS4zMiwxMDcsNDYsOTIuNjYsMjcuNzcsNzguNjRhMTEsMTEsMCwwLDAtMy4yLTE2LjEzQTQzLjg4LDQzLjg4LDAsMCwxLDYzLDM4LjA2VjQ1QTEsMSwwLDAsMCw2NSw0NVpNMzIuNTUsNDguMzZhNDYuMjEsNDYuMjEsMCwwLDAtOS44MywxMy4yOCwxMC45MywxMC45MywwLDAsMC0xMS40LDIuNDdDLTguMzksNDMuMjMsNS4yMywzOS4wOCwzMi41NSw0OC4zNlpNMTAsNzJhOSw5LDAsMSwxLDksOUE5LDksMCwwLDEsMTAsNzJabTEwLDExYTExLDExLDAsMCwwLDYuMzQtMi44MmMxOC40NSwxNC4yMSw0My40NSwyOC4zNSw2NS4wNSwzNi4yMkM2MywxMzkuMTYsMjAuODMsMTE5LjEsMjAuMDUsODNabTEwNS40LDM0LjVjLTIuNTEsNC4zNS0xNCwzLjYyLTMwLTEuODVhNDUuNjEsNDUuNjEsMCwwLDAsMTMuNDItMjMuMjFDMTIxLjU5LDEwMy41OCwxMjgsMTEzLjEyLDEyNS40NSwxMTcuNDdaXCJcclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPC9nPlxyXG4gICAgICAgICAgICA8L3N2Zz5cclxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1wcmltYXJ5ZGFyayB0ZXh0LWxnIG1kQ29udGFpbmVyOnRleHQteGwgbGdDb250YWluZXI6dGV4dC0yeGwgbXQtMiBwbC0yIGRhcms6dGV4dC1iYWNrZ3JvdW5kXCI+XHJcbiAgICAgICAgICAgICAgQ2FzaCBmbG93IGFuYWx5c2lzXHJcbiAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwidGV4dC1zZWNvbmRhcnkgdGV4dC14cyBtZENvbnRhaW5lcjp0ZXh0LXNtIGxnQ29udGFpbmVyOnRleHQtYmFzZSB0ZXh0LWdyYXkgcmVsYXRpdmUgLXRvcC0xIGxnQ29udGFpbmVyOnRvcC0wXCI+XHJcbiAgICAgICAgICAgIE1hbmFnZSB5b3VyIHN0YXJ0dXAgY2FzaCBmbG93XHJcbiAgICAgICAgICA8L2gxPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsIGdyaWQgZ3JpZC1jb2xzLTJmciBncmlkLXJvd3MtMWZyIGxnQ29udGFpbmVyOmdyaWQtY29scy0zZnIgbGdDb250YWluZXI6Z3JpZC1yb3dzLTFmciBnYXAteS04IGdhcC14LTYgc21Db250YWluZXI6Z2FwLXgtMzIgbWRDb250YWluZXI6Z2FwLXgtMTIgbXQtMTJcIj5cclxuICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgaWQ9XCJtYWluLWRhdGVwaWNrZXJcIlxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJ3LWZ1bGwgYmctd2hpdGUgcm91bmRlZC0yeGwgcHktMyBweC0zIG1kQ29udGFpbmVyOnB5LTMgbWRDb250YWluZXI6cHgtNCBsZ0NvbnRhaW5lcjpweC02IGxnQ29udGFpbmVyOnB5LTQgc2hhZG93LW1kIGdyaWQgZ3JpZC1jb2xzLTJmciBpdGVtcy1jZW50ZXIgdGV4dC14cyBtZENvbnRhaW5lcjp0ZXh0LXNtIGxnQ29udGFpbmVyOnRleHQtYmFzZVwiXHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICBzcmM9XCIvY2FzaC1mbG93L2NhbGVuZGFyLnN2Z1wiXHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ9eyhzaXplLndpZHRoID4gODYwICYmIDI1KSB8fCAoc2l6ZS53aWR0aCA8IDg2MCAmJiBzaXplLndpZHRoID4gNjgwICYmIDIyKSB8fCAoc2l6ZS53aWR0aCA8IDY4MCAmJiAxOCl9XHJcbiAgICAgICAgICAgICAgICB3aWR0aD17KHNpemUud2lkdGggPiA4NjAgJiYgMjUpIHx8IChzaXplLndpZHRoIDwgODYwICYmIHNpemUud2lkdGggPiA2ODAgJiYgMjIpIHx8IChzaXplLndpZHRoIDwgNjgwICYmIDE4KX1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cIm1sLTIgdGV4dC1wcmltYXJ5ZGFya1wiPlN0YXJ0OjwvcD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIHtzdGFydERhdGUgJiYgIWlzTW9iaWxlID8gKFxyXG4gICAgICAgICAgICAgIDxEYXRlUGlja2VyXHJcbiAgICAgICAgICAgICAgICBzZWxlY3RlZD17c3RhcnREYXRlfVxyXG4gICAgICAgICAgICAgICAgLy8gb25DaGFuZ2U9eyhkYXRlKSA9PiBvblN0YXJ0RGF0ZVVwZGF0ZShkYXRlKX1cclxuICAgICAgICAgICAgICAgIGRhdGVGb3JtYXQ9XCJNTU1NIHl5eXlcIlxyXG4gICAgICAgICAgICAgICAgc2hvd01vbnRoWWVhclBpY2tlclxyXG4gICAgICAgICAgICAgICAgbWF4RGF0ZT17YWRkWWVhcnMobmV3IERhdGUoKSwgMyl9XHJcbiAgICAgICAgICAgICAgICBtaW5EYXRlPXtuZXcgRGF0ZSgpfVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgPERhdGVQaWNrZXJcclxuICAgICAgICAgICAgICAgIHNlbGVjdGVkPXtzdGFydERhdGV9XHJcbiAgICAgICAgICAgICAgICAvLyBvbkNoYW5nZT17KGRhdGUpID0+IG9uU3RhcnREYXRlVXBkYXRlKGRhdGUpfVxyXG4gICAgICAgICAgICAgICAgZGF0ZUZvcm1hdD1cIk1NTU0geXl5eVwiXHJcbiAgICAgICAgICAgICAgICBzaG93TW9udGhZZWFyUGlja2VyXHJcbiAgICAgICAgICAgICAgICBtYXhEYXRlPXthZGRZZWFycyhuZXcgRGF0ZSgpLCAzKX1cclxuICAgICAgICAgICAgICAgIG1pbkRhdGU9e25ldyBEYXRlKCl9XHJcbiAgICAgICAgICAgICAgICB3aXRoUG9ydGFsXHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgKX1cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICBpZD1cIm1haW4tZGF0ZXBpY2tlclwiXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cInctZnVsbCBiZy13aGl0ZSByb3VuZGVkLTJ4bCBweS0zIHB4LTMgbWRDb250YWluZXI6cHktMyBtZENvbnRhaW5lcjpweC00IGxnQ29udGFpbmVyOnB4LTYgbGdDb250YWluZXI6cHktNCBzaGFkb3ctbWQgZ3JpZCBncmlkLWNvbHMtMmZyIGl0ZW1zLWNlbnRlciB0ZXh0LXhzIG1kQ29udGFpbmVyOnRleHQtc20gbGdDb250YWluZXI6dGV4dC1iYXNlXCJcclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgIHNyYz1cIi9jYXNoLWZsb3cvaG91cmdsYXNzMS5zdmdcIlxyXG4gICAgICAgICAgICAgICAgaGVpZ2h0PXsoc2l6ZS53aWR0aCA+IDg2MCAmJiAyNSkgfHwgKHNpemUud2lkdGggPCA4NjAgJiYgc2l6ZS53aWR0aCA+IDY4MCAmJiAyMikgfHwgKHNpemUud2lkdGggPCA2ODAgJiYgMTgpfVxyXG4gICAgICAgICAgICAgICAgd2lkdGg9eyhzaXplLndpZHRoID4gODYwICYmIDI1KSB8fCAoc2l6ZS53aWR0aCA8IDg2MCAmJiBzaXplLndpZHRoID4gNjgwICYmIDIyKSB8fCAoc2l6ZS53aWR0aCA8IDY4MCAmJiAxOCl9XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJtbC0yIHRleHQtcHJpbWFyeWRhcmtcIj5FbmQ6PC9wPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAge2VuZERhdGUgJiYgIWlzTW9iaWxlID8gKFxyXG4gICAgICAgICAgICAgIDxEYXRlUGlja2VyXHJcbiAgICAgICAgICAgICAgICBzZWxlY3RlZD17ZW5kRGF0ZX1cclxuICAgICAgICAgICAgICAgIC8vIG9uQ2hhbmdlPXsoZGF0ZSkgPT4gb25FbmREYXRlVXBkYXRlKGRhdGUpfVxyXG4gICAgICAgICAgICAgICAgZGF0ZUZvcm1hdD1cIk1NTU0geXl5eVwiXHJcbiAgICAgICAgICAgICAgICBzaG93TW9udGhZZWFyUGlja2VyXHJcbiAgICAgICAgICAgICAgICBtYXhEYXRlPXthZGRZZWFycyhuZXcgRGF0ZSgpLCAzKX1cclxuICAgICAgICAgICAgICAgIG1pbkRhdGU9e25ldyBEYXRlKCl9XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICA8RGF0ZVBpY2tlclxyXG4gICAgICAgICAgICAgICAgc2VsZWN0ZWQ9e2VuZERhdGV9XHJcbiAgICAgICAgICAgICAgICAvLyBvbkNoYW5nZT17KGRhdGUpID0+IG9uRW5kRGF0ZVVwZGF0ZShkYXRlKX1cclxuICAgICAgICAgICAgICAgIGRhdGVGb3JtYXQ9XCJNTU1NIHl5eXlcIlxyXG4gICAgICAgICAgICAgICAgc2hvd01vbnRoWWVhclBpY2tlclxyXG4gICAgICAgICAgICAgICAgbWF4RGF0ZT17YWRkWWVhcnMobmV3IERhdGUoKSwgMyl9XHJcbiAgICAgICAgICAgICAgICBtaW5EYXRlPXtuZXcgRGF0ZSgpfVxyXG4gICAgICAgICAgICAgICAgd2l0aFBvcnRhbFxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICl9XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICB3aWR0aDpcclxuICAgICAgICAgICAgICAgIChzaXplLndpZHRoID4gODYwICYmICcxMDAlJykgfHxcclxuICAgICAgICAgICAgICAgIChzaXplLndpZHRoIDwgODYwICYmIHNpemUud2lkdGggPiA2ODAgJiYgJzQ3JScpIHx8XHJcbiAgICAgICAgICAgICAgICAoc2l6ZS53aWR0aCA8IDY4MCAmJiBzaXplLndpZHRoID4gNTIwICYmICc0MCUnKSB8fFxyXG4gICAgICAgICAgICAgICAgKHNpemUud2lkdGggPCA1MjAgJiYgJzQ3JScpLFxyXG4gICAgICAgICAgICAgIGdyaWRDb2x1bW5TdGFydDogc2l6ZS53aWR0aCA8IDg2MCA/ICcxJyA6ICd1bnNldCcsXHJcbiAgICAgICAgICAgICAgZ3JpZENvbHVtbkVuZDogc2l6ZS53aWR0aCA8IDg2MCA/ICczJyA6ICd1bnNldCcsXHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cInBsYWNlLXNlbGYtY2VudGVyIGJnLXdoaXRlIHJvdW5kZWQtMnhsIHB5LTMgcHgtMyBtZENvbnRhaW5lcjpweS0zIG1kQ29udGFpbmVyOnB4LTQgbGdDb250YWluZXI6cHgtNiBsZ0NvbnRhaW5lcjpweS00IHNoYWRvdy1tZCBncmlkIGdyaWQtY29scy0yZnIgaXRlbXMtY2VudGVyIHRleHQteHMgbWRDb250YWluZXI6dGV4dC1zbSBsZ0NvbnRhaW5lcjp0ZXh0LWJhc2VcIlxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgc3JjPVwiL2Nhc2gtZmxvdy90YXguc3ZnXCJcclxuICAgICAgICAgICAgICAgIGhlaWdodD17KHNpemUud2lkdGggPiA4NjAgJiYgMjUpIHx8IChzaXplLndpZHRoIDwgODYwICYmIHNpemUud2lkdGggPiA2ODAgJiYgMjIpIHx8IChzaXplLndpZHRoIDwgNjgwICYmIDE4KX1cclxuICAgICAgICAgICAgICAgIHdpZHRoPXsoc2l6ZS53aWR0aCA+IDg2MCAmJiAyNSkgfHwgKHNpemUud2lkdGggPCA4NjAgJiYgc2l6ZS53aWR0aCA+IDY4MCAmJiAyMikgfHwgKHNpemUud2lkdGggPCA2ODAgJiYgMTgpfVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwibWwtMlwiPlRheDo8L3A+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXhcIiBzdHlsZT17eyB0ZXh0QWxpZ25MYXN0OiAncmlnaHQnIH19PlxyXG4gICAgICAgICAgICAgIDxpbnB1dCBpZD1cInRheC1pbnB1dFwiIHZhbHVlPXt0YXh9IGNsYXNzTmFtZT1cInctZnVsbCBiZy13aGl0ZSBmb2N1czpvdXRsaW5lLW5vbmVcIiAvPlxyXG4gICAgICAgICAgICAgIDxwPiU8L3A+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBpZD1cImNoYXJ0Q29udGFpbmVyXCIgY2xhc3NOYW1lPVwidy1mdWxsIGgtMS8yIHAtNCBtZENvbnRhaW5lcjpwLTggYmctd2hpdGUgcm91bmRlZC0yeGwgbXQtMTIgc2hhZG93LW1kXCI+XHJcbiAgICAgICAgICB7LyogPGNhbnZhcyByZWY9e2NoYXJ0UmVmfSBoZWlnaHQ9ezc1fT48L2NhbnZhcz4gKi99XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGwgZ3JpZCBncmlkLWNvbHMtMmZyIGdyaWQtcm93cy0zZnIgbGcxQ29udGFpbmVyOmdyaWQtY29scy0zZnIgbGcxQ29udGFpbmVyOmdyaWQtcm93cy0yZnIgZ2FwLXgtNiBzbUNvbnRhaW5lcjpnYXAteC0xMiBnYXAteS04IG10LTEyXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbCBiZy13aGl0ZSByb3VuZGVkLTJ4bCBweS0zIHB4LTMgbWRDb250YWluZXI6cHktMyBtZENvbnRhaW5lcjpweC00IGxnQ29udGFpbmVyOnB4LTYgbGdDb250YWluZXI6cHktNCBzaGFkb3ctbWQgZmxleCBqdXN0aWZ5LWJldHdlZW4gaXRlbXMtY2VudGVyIHRleHQteHMgbWRDb250YWluZXI6dGV4dC1zbSBsZ0NvbnRhaW5lcjp0ZXh0LWJhc2VcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgIHNyYz1cIi9jYXNoLWZsb3cvcmV2ZW51ZS5zdmdcIlxyXG4gICAgICAgICAgICAgICAgaGVpZ2h0PXsoc2l6ZS53aWR0aCA+IDg2MCAmJiAyNSkgfHwgKHNpemUud2lkdGggPCA4NjAgJiYgc2l6ZS53aWR0aCA+IDY4MCAmJiAyMikgfHwgKHNpemUud2lkdGggPCA2ODAgJiYgMTgpfVxyXG4gICAgICAgICAgICAgICAgd2lkdGg9eyhzaXplLndpZHRoID4gODYwICYmIDI1KSB8fCAoc2l6ZS53aWR0aCA8IDg2MCAmJiBzaXplLndpZHRoID4gNjgwICYmIDIyKSB8fCAoc2l6ZS53aWR0aCA8IDY4MCAmJiAxOCl9XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJtbC0yXCI+VG90YWwgcmV2ZW51ZTo8L3A+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8cD4ke3RvdGFsUmV2ZW51ZX08L3A+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsIGJnLXdoaXRlIHJvdW5kZWQtMnhsIHB5LTMgcHgtMyBtZENvbnRhaW5lcjpweS0zIG1kQ29udGFpbmVyOnB4LTQgbGdDb250YWluZXI6cHgtNiBsZ0NvbnRhaW5lcjpweS00IHNoYWRvdy1tZCBmbGV4IGp1c3RpZnktYmV0d2VlbiBpdGVtcy1jZW50ZXIgdGV4dC14cyBtZENvbnRhaW5lcjp0ZXh0LXNtIGxnQ29udGFpbmVyOnRleHQtYmFzZVwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgc3JjPVwiL2Nhc2gtZmxvdy9tb250aGx5LnN2Z1wiXHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ9eyhzaXplLndpZHRoID4gODYwICYmIDI1KSB8fCAoc2l6ZS53aWR0aCA8IDg2MCAmJiBzaXplLndpZHRoID4gNjgwICYmIDIyKSB8fCAoc2l6ZS53aWR0aCA8IDY4MCAmJiAxOCl9XHJcbiAgICAgICAgICAgICAgICB3aWR0aD17KHNpemUud2lkdGggPiA4NjAgJiYgMjUpIHx8IChzaXplLndpZHRoIDwgODYwICYmIHNpemUud2lkdGggPiA2ODAgJiYgMjIpIHx8IChzaXplLndpZHRoIDwgNjgwICYmIDE4KX1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cIm1sLTJcIj5Nb250aGx5IHJldmVudWU6PC9wPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPHA+JHttb250aGx5UmV2ZW51ZX08L3A+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsIGJnLXdoaXRlIHJvdW5kZWQtMnhsIHB5LTMgcHgtMyBtZENvbnRhaW5lcjpweS0zIG1kQ29udGFpbmVyOnB4LTQgbGdDb250YWluZXI6cHgtNiBsZ0NvbnRhaW5lcjpweS00IHNoYWRvdy1tZCBmbGV4IGp1c3RpZnktYmV0d2VlbiBpdGVtcy1jZW50ZXIgdGV4dC14cyBtZENvbnRhaW5lcjp0ZXh0LXNtIGxnQ29udGFpbmVyOnRleHQtYmFzZVwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgc3JjPVwiL2Nhc2gtZmxvdy9jb3N0cy5zdmdcIlxyXG4gICAgICAgICAgICAgICAgaGVpZ2h0PXsoc2l6ZS53aWR0aCA+IDg2MCAmJiAyNSkgfHwgKHNpemUud2lkdGggPCA4NjAgJiYgc2l6ZS53aWR0aCA+IDY4MCAmJiAyMikgfHwgKHNpemUud2lkdGggPCA2ODAgJiYgMTgpfVxyXG4gICAgICAgICAgICAgICAgd2lkdGg9eyhzaXplLndpZHRoID4gODYwICYmIDI1KSB8fCAoc2l6ZS53aWR0aCA8IDg2MCAmJiBzaXplLndpZHRoID4gNjgwICYmIDIyKSB8fCAoc2l6ZS53aWR0aCA8IDY4MCAmJiAxOCl9XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJtbC0yXCI+VG90YWwgY29zdHM6PC9wPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPHA+JHt0b3RhbENvc3RzfTwvcD5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGwgYmctd2hpdGUgcm91bmRlZC0yeGwgcHktMyBweC0zIG1kQ29udGFpbmVyOnB5LTMgbWRDb250YWluZXI6cHgtNCBsZ0NvbnRhaW5lcjpweC02IGxnQ29udGFpbmVyOnB5LTQgc2hhZG93LW1kIGZsZXgganVzdGlmeS1iZXR3ZWVuIGl0ZW1zLWNlbnRlciB0ZXh0LXhzIG1kQ29udGFpbmVyOnRleHQtc20gbGdDb250YWluZXI6dGV4dC1iYXNlXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICBzcmM9XCIvY2FzaC1mbG93L21vbnRobHktY29zdHMuc3ZnXCJcclxuICAgICAgICAgICAgICAgIGhlaWdodD17KHNpemUud2lkdGggPiA4NjAgJiYgMjUpIHx8IChzaXplLndpZHRoIDwgODYwICYmIHNpemUud2lkdGggPiA2ODAgJiYgMjIpIHx8IChzaXplLndpZHRoIDwgNjgwICYmIDE4KX1cclxuICAgICAgICAgICAgICAgIHdpZHRoPXsoc2l6ZS53aWR0aCA+IDg2MCAmJiAyNSkgfHwgKHNpemUud2lkdGggPCA4NjAgJiYgc2l6ZS53aWR0aCA+IDY4MCAmJiAyMikgfHwgKHNpemUud2lkdGggPCA2ODAgJiYgMTgpfVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwibWwtMlwiPk1vbnRobHkgY29zdHM6PC9wPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPHA+JHttb250aGx5Q29zdHN9PC9wPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbCBiZy13aGl0ZSByb3VuZGVkLTJ4bCBweS0zIHB4LTMgbWRDb250YWluZXI6cHktMyBtZENvbnRhaW5lcjpweC00IGxnQ29udGFpbmVyOnB4LTYgbGdDb250YWluZXI6cHktNCBzaGFkb3ctbWQgZmxleCBqdXN0aWZ5LWJldHdlZW4gaXRlbXMtY2VudGVyIHRleHQteHMgbWRDb250YWluZXI6dGV4dC1zbSBsZ0NvbnRhaW5lcjp0ZXh0LWJhc2VcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgIHNyYz1cIi9jYXNoLWZsb3cvbWVnYXBob25lLnN2Z1wiXHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ9eyhzaXplLndpZHRoID4gODYwICYmIDI1KSB8fCAoc2l6ZS53aWR0aCA8IDg2MCAmJiBzaXplLndpZHRoID4gNjgwICYmIDIyKSB8fCAoc2l6ZS53aWR0aCA8IDY4MCAmJiAxOCl9XHJcbiAgICAgICAgICAgICAgICB3aWR0aD17KHNpemUud2lkdGggPiA4NjAgJiYgMjUpIHx8IChzaXplLndpZHRoIDwgODYwICYmIHNpemUud2lkdGggPiA2ODAgJiYgMjIpIHx8IChzaXplLndpZHRoIDwgNjgwICYmIDE4KX1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cIm1sLTJcIj5Hcm9zcyBwcm9maXQ6PC9wPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPHA+JHtncm9zc1Byb2ZpdH08L3A+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsIGJnLXdoaXRlIHJvdW5kZWQtMnhsIHB5LTMgcHgtMyBtZENvbnRhaW5lcjpweS0zIG1kQ29udGFpbmVyOnB4LTQgbGdDb250YWluZXI6cHgtNiBsZ0NvbnRhaW5lcjpweS00IHNoYWRvdy1tZCBmbGV4IGp1c3RpZnktYmV0d2VlbiBpdGVtcy1jZW50ZXIgdGV4dC14cyBtZENvbnRhaW5lcjp0ZXh0LXNtIGxnQ29udGFpbmVyOnRleHQtYmFzZVwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgc3JjPVwiL2Nhc2gtZmxvdy9uZXQtd29ydGguc3ZnXCJcclxuICAgICAgICAgICAgICAgIGhlaWdodD17KHNpemUud2lkdGggPiA4NjAgJiYgMjUpIHx8IChzaXplLndpZHRoIDwgODYwICYmIHNpemUud2lkdGggPiA2ODAgJiYgMjIpIHx8IChzaXplLndpZHRoIDwgNjgwICYmIDE4KX1cclxuICAgICAgICAgICAgICAgIHdpZHRoPXsoc2l6ZS53aWR0aCA+IDg2MCAmJiAyNSkgfHwgKHNpemUud2lkdGggPCA4NjAgJiYgc2l6ZS53aWR0aCA+IDY4MCAmJiAyMikgfHwgKHNpemUud2lkdGggPCA2ODAgJiYgMTgpfVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwibWwtMlwiPk5ldCBwcm9maXQ6PC9wPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPHA+JHtuZXRQcm9maXR9PC9wPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgey8qIFJldmVudWUgKi99XHJcbiAgICAgICAgPGRpdlxyXG4gICAgICAgICAgLy8gcmVmPXtyZXZlbnVlUmVmfVxyXG4gICAgICAgICAgc3R5bGU9e3sgaGVpZ2h0OiA1NSB9fVxyXG4gICAgICAgICAgY2xhc3NOYW1lPVwib3ZlcmZsb3ctaGlkZGVuIHJlbGF0aXZlIHctZnVsbCByb3VuZGVkLTJ4bCBiZy13aGl0ZSBkYXJrOmJnLWJhY2tncm91bmQgcHgtNCBweS00IGZsZXgganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyIG10LTEyIGZsZXggZmxleC13cmFwIHNoYWRvdy1tZFwiXHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGwgZmxleCBqdXN0aWZ5LWJldHdlZW4gaXRlbXMtY2VudGVyXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGdDb250YWluZXI6bWwtMlwiPlxyXG4gICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtc20gbGdDb250YWluZXI6dGV4dC1iYXNlXCI+UmV2ZW51ZTwvcD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGdDb250YWluZXI6bXItMiBmbGV4IGZsZXgtbm93cmFwIGl0ZW1zLWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImN1cnNvci1wb2ludGVyXCJcclxuICAgICAgICAgICAgICAgIHNyYz1cIi9jYXNoLWZsb3cvYWRkLnN2Z1wiXHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ9eyhzaXplLndpZHRoID4gODYwICYmIDIyKSB8fCAoc2l6ZS53aWR0aCA8IDg2MCAmJiBzaXplLndpZHRoID4gNjgwICYmIDE4KSB8fCAoc2l6ZS53aWR0aCA8IDY4MCAmJiAxNil9XHJcbiAgICAgICAgICAgICAgICB3aWR0aD17KHNpemUud2lkdGggPiA4NjAgJiYgMjIpIHx8IChzaXplLndpZHRoIDwgODYwICYmIHNpemUud2lkdGggPiA2ODAgJiYgMTgpIHx8IChzaXplLndpZHRoIDwgNjgwICYmIDE2KX1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgIC8vIHJlZj17ZHJvcERvd25JY29ufVxyXG4gICAgICAgICAgICAgICAgLy8gb25DbGljaz17b25SZXZlbnVlU2hvd31cclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm1sLTIgY3Vyc29yLXBvaW50ZXJcIlxyXG4gICAgICAgICAgICAgICAgc3JjPVwiL2Nhc2gtZmxvdy9kcm9wZG93bi5zdmdcIlxyXG4gICAgICAgICAgICAgICAgaGVpZ2h0PXsoc2l6ZS53aWR0aCA+IDg2MCAmJiAyMikgfHwgKHNpemUud2lkdGggPCA4NjAgJiYgc2l6ZS53aWR0aCA+IDY4MCAmJiAxOCkgfHwgKHNpemUud2lkdGggPCA2ODAgJiYgMTYpfVxyXG4gICAgICAgICAgICAgICAgd2lkdGg9eyhzaXplLndpZHRoID4gODYwICYmIDIyKSB8fCAoc2l6ZS53aWR0aCA8IDg2MCAmJiBzaXplLndpZHRoID4gNjgwICYmIDE4KSB8fCAoc2l6ZS53aWR0aCA8IDY4MCAmJiAxNil9XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgLy8gcmVmPXtpbm5lckNvbnRhaW5lclJldmVudWVSZWZ9XHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT17YHctZnVsbCAke1xyXG4gICAgICAgICAgICAgIHNpemUud2lkdGggPCAxMTIwXHJcbiAgICAgICAgICAgICAgICA/ICd0ZXh0LXNtIG1kQ29udGFpbmVyOnRleHQtYmFzZSBsZzFDb250YWluZXI6bXgtOCBsZzFDb250YWluZXI6bWItNiBtdC00ICBiZy1iYWNrZ3JvdW5kIHJvdW5kZWQtMnhsIHB4LTQgbWRDb250YWluZXI6cHgtNiBweS00J1xyXG4gICAgICAgICAgICAgICAgOiAndy1mdWxsIG14LTggbWItNiBtdC00ICBiZy1iYWNrZ3JvdW5kIHJvdW5kZWQtMnhsIHB4LTQgbWRDb250YWluZXI6cHgtNiBweS00J1xyXG4gICAgICAgICAgICB9YH1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgey8qIDxociBjbGFzc05hbWU9XCJ0ZXh0LXByaW1hcnkgdy1mdWxsXCIgLz4gKi99XHJcbiAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICBzdHlsZT17eyBmb250U2l6ZTogc2l6ZS53aWR0aCA8IDUyMCAmJiAnMC42cmVtJyB9fVxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cInctZnVsbCBncmlkIGdyaWQtY29scy02ZnIgaXRlbXMtY2VudGVyIHRleHQteHMgbWRDb250YWluZXI6dGV4dC1zbSBsZzFDb250YWluZXI6dGV4dC1iYXNlXCJcclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIDxkaXY+bmFtZTwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXY+dHlwZTwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXY+YW1vdW50PC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdj5zdGFydDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXY+ZW5kPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdj48L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxociBjbGFzc05hbWU9XCJ0ZXh0LXByaW1hcnkgdy1mdWxsXCIgLz5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoLWZ1bGwgdy1mdWxsIHJvdW5kZWQtMnhsIGZsZXggZmxleC13cmFwIGZsZXgtY29sXCI+XHJcbiAgICAgICAgICAgICAge3JldmVudWVFbGVtZW50cyAmJlxyXG4gICAgICAgICAgICAgICAgcmV2ZW51ZUVsZW1lbnRzLm1hcCgoZWxlbWVudCwgaW5kZXgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICA8PjwvPlxyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgPFJldmVudWVFbGVtZW50XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gICBwcm92aWRlZD17cHJvdmlkZWR9XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gICBzZXRSZXZlbnVlRWxlbWVudHM9e3NldFJldmVudWVFbGVtZW50c31cclxuICAgICAgICAgICAgICAgICAgICAvLyAgIG1haW5Eb2N1bWVudD17bWFpbkRvY3VtZW50fVxyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgcHJvamVjdElkPXtwcm9qZWN0SWR9XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gICBkb2N1bWVudElkPXtkb2N1bWVudElkfVxyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgcmV2ZW51ZUVsZW1lbnRzPXtyZXZlbnVlRWxlbWVudHN9XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gICBlbGVtZW50PXtlbGVtZW50fVxyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgaW5kZXg9e2luZGV4fVxyXG4gICAgICAgICAgICAgICAgICAgIC8vIC8+XHJcbiAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICB9KX1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICB7LyogQ29zdHMgKi99XHJcbiAgICAgICAgPGRpdlxyXG4gICAgICAgICAgLy8gcmVmPXtjb3N0c1JlZn1cclxuICAgICAgICAgIHN0eWxlPXt7IGhlaWdodDogNTUgfX1cclxuICAgICAgICAgIGNsYXNzTmFtZT1cIm92ZXJmbG93LWhpZGRlbiByZWxhdGl2ZSB3LWZ1bGwgcm91bmRlZC0yeGwgYmctd2hpdGUgZGFyazpiZy1iYWNrZ3JvdW5kIHB4LTQgcHktNCBmbGV4IGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlciBtdC04IGZsZXggZmxleC13cmFwIHNoYWRvdy1tZFwiXHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGwgZmxleCBqdXN0aWZ5LWJldHdlZW4gaXRlbXMtY2VudGVyXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGdDb250YWluZXI6bWwtMlwiPlxyXG4gICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtc20gbGdDb250YWluZXI6dGV4dC1iYXNlXCI+Q29zdHM8L3A+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxnQ29udGFpbmVyOm1yLTIgZmxleCBmbGV4LW5vd3JhcCBpdGVtcy1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJjdXJzb3ItcG9pbnRlclwiXHJcbiAgICAgICAgICAgICAgICBzcmM9XCIvY2FzaC1mbG93L2FkZC5zdmdcIlxyXG4gICAgICAgICAgICAgICAgaGVpZ2h0PXsoc2l6ZS53aWR0aCA+IDg2MCAmJiAyMikgfHwgKHNpemUud2lkdGggPCA4NjAgJiYgc2l6ZS53aWR0aCA+IDY4MCAmJiAxOCkgfHwgKHNpemUud2lkdGggPCA2ODAgJiYgMTYpfVxyXG4gICAgICAgICAgICAgICAgd2lkdGg9eyhzaXplLndpZHRoID4gODYwICYmIDIyKSB8fCAoc2l6ZS53aWR0aCA8IDg2MCAmJiBzaXplLndpZHRoID4gNjgwICYmIDE4KSB8fCAoc2l6ZS53aWR0aCA8IDY4MCAmJiAxNil9XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJtbC0yIGN1cnNvci1wb2ludGVyXCJcclxuICAgICAgICAgICAgICAgIHNyYz1cIi9jYXNoLWZsb3cvZHJvcGRvd24uc3ZnXCJcclxuICAgICAgICAgICAgICAgIGhlaWdodD17KHNpemUud2lkdGggPiA4NjAgJiYgMjIpIHx8IChzaXplLndpZHRoIDwgODYwICYmIHNpemUud2lkdGggPiA2ODAgJiYgMTgpIHx8IChzaXplLndpZHRoIDwgNjgwICYmIDE2KX1cclxuICAgICAgICAgICAgICAgIHdpZHRoPXsoc2l6ZS53aWR0aCA+IDg2MCAmJiAyMikgfHwgKHNpemUud2lkdGggPCA4NjAgJiYgc2l6ZS53aWR0aCA+IDY4MCAmJiAxOCkgfHwgKHNpemUud2lkdGggPCA2ODAgJiYgMTYpfVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT17YHctZnVsbCAke1xyXG4gICAgICAgICAgICAgIHNpemUud2lkdGggPCAxMTIwXHJcbiAgICAgICAgICAgICAgICA/ICd0ZXh0LXNtIG1kQ29udGFpbmVyOnRleHQtYmFzZSBsZzFDb250YWluZXI6bXgtOCBsZzFDb250YWluZXI6bWItNiBtdC00ICBiZy1iYWNrZ3JvdW5kIHJvdW5kZWQtMnhsIHB4LTQgbWRDb250YWluZXI6cHgtNiBweS00J1xyXG4gICAgICAgICAgICAgICAgOiAndy1mdWxsIG14LTggbWItNiBtdC00ICBiZy1iYWNrZ3JvdW5kIHJvdW5kZWQtMnhsIHB4LTQgbWRDb250YWluZXI6cHgtNiBweS00J1xyXG4gICAgICAgICAgICB9YH1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgey8qIDxociBjbGFzc05hbWU9XCJ0ZXh0LXByaW1hcnkgdy1mdWxsXCIgLz4gKi99XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsIGdyaWQgZ3JpZC1jb2xzLTZmciBpdGVtcy1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICA8ZGl2Pm5hbWU8L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2PnR5cGU8L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2PmFtb3VudDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXY+c3RhcnQ8L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2PmVuZDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXY+PC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8aHIgY2xhc3NOYW1lPVwidGV4dC1wcmltYXJ5IHctZnVsbFwiIC8+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaC1mdWxsIHctZnVsbCByb3VuZGVkLTJ4bCBmbGV4IGZsZXgtd3JhcCBmbGV4LWNvbFwiPlxyXG4gICAgICAgICAgICAgIHtjb3N0c0VsZW1lbnRzICYmXHJcbiAgICAgICAgICAgICAgICBjb3N0c0VsZW1lbnRzLm1hcCgoZWxlbWVudCwgaW5kZXgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICA8PjwvPlxyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgPENvc3RzRWxlbWVudFxyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgcHJvdmlkZWQ9e3Byb3ZpZGVkfVxyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgc2V0Q29zdHNFbGVtZW50cz17c2V0Q29zdHNFbGVtZW50c31cclxuICAgICAgICAgICAgICAgICAgICAvLyAgIG1haW5Eb2N1bWVudD17bWFpbkRvY3VtZW50fVxyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgcHJvamVjdElkPXtwcm9qZWN0SWR9XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gICBkb2N1bWVudElkPXtkb2N1bWVudElkfVxyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgY29zdHNFbGVtZW50cz17Y29zdHNFbGVtZW50c31cclxuICAgICAgICAgICAgICAgICAgICAvLyAgIGVsZW1lbnQ9e2VsZW1lbnR9XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gICBpbmRleD17aW5kZXh9XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gLz5cclxuICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0U3RhdGljUGF0aHMgPSBhc3luYyAoKSA9PiB7XHJcbiAgY29uc3Qgc25hcHNob3QgPSBhd2FpdCBkYi5jb2xsZWN0aW9uKCdwcm9qZWN0cycpLmdldCgpO1xyXG5cclxuICBjb25zdCBwcm9qZWN0cyA9IFtdO1xyXG4gIHNuYXBzaG90LmZvckVhY2goKGRvYykgPT4ge1xyXG4gICAgcHJvamVjdHMucHVzaChkb2MuZGF0YSgpKTtcclxuICB9KTtcclxuXHJcbiAgY29uc3QgcGF0aHMgPSBwcm9qZWN0cy5tYXAoKHByb2plY3QpID0+ICh7XHJcbiAgICBwYXJhbXM6IHtcclxuICAgICAgcHJvamVjdDogcHJvamVjdC5wcm9qZWN0TmFtZS50b1N0cmluZygpLFxyXG4gICAgICBpZDogcHJvamVjdC5wcm9qZWN0SWQudG9TdHJpbmcoKSxcclxuICAgIH0sXHJcbiAgfSkpO1xyXG5cclxuICByZXR1cm4ge1xyXG4gICAgcGF0aHM6IHBhdGhzLFxyXG4gICAgZmFsbGJhY2s6IHRydWUsXHJcbiAgfTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBnZXRTdGF0aWNQcm9wcyA9IGFzeW5jICh7IHBhcmFtcyB9KSA9PiB7XHJcbiAgY29uc29sZS5sb2cocGFyYW1zKTtcclxuICAvLyBsZXQgcmVmID0gZGIuY29sbGVjdGlvbigncHJvamVjdHMnKS53aGVyZSgncHJvamVjdE5hbWUnLCAnPT0nLCBwYXJhbXMucHJvamVjdCk7XHJcbiAgbGV0IHJlZiA9IGRiXHJcbiAgICAuY29sbGVjdGlvbigncHJvamVjdHMnKVxyXG4gICAgLmRvYyhwYXJhbXMuaWQpXHJcbiAgICAuY29sbGVjdGlvbignY2FzaEZsb3cnKVxyXG4gICAgLmRvYyhwYXJhbXMucHJvamVjdClcclxuICAgIC5jb2xsZWN0aW9uKCdpbnB1dHMnKVxyXG4gICAgLndoZXJlKCdwcm9qZWN0SWQnLCAnPT0nLCBwYXJhbXMuaWQpO1xyXG5cclxuICBjb25zdCBzbmFwc2hvdCA9IGF3YWl0IHJlZi5nZXQoKTtcclxuICBjb25zdCBwcm9qZWN0ID0gW107XHJcblxyXG4gIHNuYXBzaG90LmZvckVhY2goKGRvYykgPT4ge1xyXG4gICAgY29uc3QgZGF0YSA9IEpTT04ucGFyc2Uoc2FmZUpzb25TdHJpbmdpZnkoZG9jLmRhdGEoKSkpO1xyXG4gICAgcHJvamVjdC5wdXNoKHsgLi4uZGF0YSB9KTtcclxuICB9KTtcclxuXHJcbiAgcmV0dXJuIHtcclxuICAgIHByb3BzOiB7IHByb2plY3QgfSxcclxuICAgIHJldmFsaWRhdGU6IDEsXHJcbiAgfTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFVuaXF1ZUNhc2hmbG93UGFnZTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==