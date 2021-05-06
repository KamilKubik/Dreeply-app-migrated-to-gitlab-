webpackHotUpdate_N_E("pages/dashboard/projects/[project]/cash-flow",{

/***/ "./components/dashboard/startup/project/business-app/cash-flow/CashFlowPage.js":
/*!*************************************************************************************!*\
  !*** ./components/dashboard/startup/project/business-app/cash-flow/CashFlowPage.js ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var C_off_saas_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var C_off_saas_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var C_off_saas_node_modules_next_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var C_off_saas_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/regenerator */ "./node_modules/next/node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var C_off_saas_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(C_off_saas_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var C_off_saas_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/image */ "./node_modules/next/image.js");
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _lib_firebase__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../../lib/firebase */ "./lib/firebase.js");
/* harmony import */ var _NavbarTemplate__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../NavbarTemplate */ "./components/dashboard/NavbarTemplate.js");
/* harmony import */ var _PDFDocument__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../PDFDocument */ "./components/dashboard/startup/project/business-app/PDFDocument.js");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! js-cookie */ "./node_modules/js-cookie/src/js.cookie.js");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _RevenueElement__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./RevenueElement */ "./components/dashboard/startup/project/business-app/cash-flow/RevenueElement.js");
/* harmony import */ var react_datepicker__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! react-datepicker */ "./node_modules/react-datepicker/dist/react-datepicker.min.js");
/* harmony import */ var react_datepicker__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(react_datepicker__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/esm/index.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! uuid */ "./node_modules/uuid/dist/esm-browser/index.js");
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! gsap */ "./node_modules/gsap/index.js");
/* harmony import */ var react_beautiful_dnd__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! react-beautiful-dnd */ "./node_modules/react-beautiful-dnd/dist/react-beautiful-dnd.esm.js");
/* harmony import */ var react_datepicker_dist_react_datepicker_css__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! react-datepicker/dist/react-datepicker.css */ "./node_modules/react-datepicker/dist/react-datepicker.css");
/* harmony import */ var react_datepicker_dist_react_datepicker_css__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(react_datepicker_dist_react_datepicker_css__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var _CostsElement__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./CostsElement */ "./components/dashboard/startup/project/business-app/cash-flow/CostsElement.js");
/* harmony import */ var _CashFlowPDF__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./CashFlowPDF */ "./components/dashboard/startup/project/business-app/cash-flow/CashFlowPDF.js");
/* harmony import */ var react_device_detect__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! react-device-detect */ "./node_modules/react-device-detect/main.js");
/* harmony import */ var react_device_detect__WEBPACK_IMPORTED_MODULE_23___default = /*#__PURE__*/__webpack_require__.n(react_device_detect__WEBPACK_IMPORTED_MODULE_23__);
/* harmony import */ var _utils_useWindowSize__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ../../../../../../utils/useWindowSize */ "./utils/useWindowSize.js");
/* harmony import */ var _Tippy__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ../../../../Tippy */ "./components/dashboard/Tippy.js");
/* harmony import */ var _ExitComponent__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ../../../ExitComponent */ "./components/dashboard/startup/ExitComponent.js");








var _jsxFileName = "C:\\off-saas\\components\\dashboard\\startup\\project\\business-app\\cash-flow\\CashFlowPage.js",
    _this = undefined,
    _s = $RefreshSig$();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(C_off_saas_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }








 // Date picker



 // uuidv4

 // gsap

 // Drag & drop




 // Mobile friendly






var CashFlowPage = function CashFlowPage() {
  _s();

  // const size = useWindowSize();
  // console.log(size);
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_6__["useState"])(''),
      projectName = _useState[0],
      setProjectName = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_6__["useState"])(''),
      mainDocument = _useState2[0],
      setMainDocument = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_6__["useState"])(''),
      projectId = _useState3[0],
      setProjectId = _useState3[1];

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_6__["useState"])(''),
      documentId = _useState4[0],
      setDocumentId = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_6__["useState"])(),
      revenueElements = _useState5[0],
      setRevenueElements = _useState5[1];

  var _useState6 = Object(react__WEBPACK_IMPORTED_MODULE_6__["useState"])(),
      costsElements = _useState6[0],
      setCostsElements = _useState6[1];

  var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_6__["useState"])(),
      budgetElements = _useState7[0],
      setBudgetElements = _useState7[1];

  var chartRef = Object(react__WEBPACK_IMPORTED_MODULE_6__["useRef"])();

  var _useState8 = Object(react__WEBPACK_IMPORTED_MODULE_6__["useState"])(),
      periods = _useState8[0],
      setPeriods = _useState8[1];

  var _useState9 = Object(react__WEBPACK_IMPORTED_MODULE_6__["useState"])(),
      tax = _useState9[0],
      setTax = _useState9[1]; // Sum data


  var _useState10 = Object(react__WEBPACK_IMPORTED_MODULE_6__["useState"])(),
      totalRevenue = _useState10[0],
      setTotalRevenue = _useState10[1];

  var _useState11 = Object(react__WEBPACK_IMPORTED_MODULE_6__["useState"])(),
      monthlyRevenue = _useState11[0],
      setMonthlyRevenue = _useState11[1];

  var _useState12 = Object(react__WEBPACK_IMPORTED_MODULE_6__["useState"])(),
      totalCosts = _useState12[0],
      setTotalCosts = _useState12[1];

  var _useState13 = Object(react__WEBPACK_IMPORTED_MODULE_6__["useState"])(),
      monthlyCosts = _useState13[0],
      setMonthlyCosts = _useState13[1];

  var _useState14 = Object(react__WEBPACK_IMPORTED_MODULE_6__["useState"])(),
      grossProfit = _useState14[0],
      setGrossProfit = _useState14[1];

  var _useState15 = Object(react__WEBPACK_IMPORTED_MODULE_6__["useState"])(),
      netProfit = _useState15[0],
      setNetProfit = _useState15[1]; // Mobile friendly
  // const size = useWindowSize();


  Object(react__WEBPACK_IMPORTED_MODULE_6__["useEffect"])( /*#__PURE__*/Object(C_off_saas_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_5__["default"])( /*#__PURE__*/C_off_saas_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default.a.mark(function _callee2() {
    var userUid, _data;

    return C_off_saas_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default.a.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return js_cookie__WEBPACK_IMPORTED_MODULE_11___default.a.get('uid');

          case 2:
            userUid = _context2.sent;

            if (!(userUid && next_router__WEBPACK_IMPORTED_MODULE_12___default.a.query.project)) {
              _context2.next = 9;
              break;
            }

            console.log(userUid);
            _context2.next = 7;
            return _lib_firebase__WEBPACK_IMPORTED_MODULE_8__["db"].collection('projects').where('uid', '==', userUid);

          case 7:
            _data = _context2.sent;

            _data.where('projectName', '==', next_router__WEBPACK_IMPORTED_MODULE_12___default.a.query.project).get().then(function (querySnapshot) {
              console.log(querySnapshot);
              querySnapshot.forEach( /*#__PURE__*/function () {
                var _ref2 = Object(C_off_saas_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_5__["default"])( /*#__PURE__*/C_off_saas_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default.a.mark(function _callee(doc1) {
                  return C_off_saas_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default.a.wrap(function _callee$(_context) {
                    while (1) {
                      switch (_context.prev = _context.next) {
                        case 0:
                          setProjectId(doc1.data().projectId);
                          setProjectName(doc1.data().projectName);
                          _context.next = 4;
                          return _lib_firebase__WEBPACK_IMPORTED_MODULE_8__["db"].collection('projects').doc(doc1.data().projectId).collection('cashFlow').doc(next_router__WEBPACK_IMPORTED_MODULE_12___default.a.query.project).collection('inputs').onSnapshot(function (serverUpdate) {
                            serverUpdate.docs.map(function (doc) {
                              console.log(doc.data());
                              setMainDocument(doc.data());
                              setDocumentId(doc.id);
                              setRevenueElements(doc.data().revenueElements);
                              setCostsElements(doc.data().costsElements);
                              setBudgetElements(doc.data().budgetElements);
                              setTax(doc.data().tax); // Global start date

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
                            });
                          });

                        case 4:
                        case "end":
                          return _context.stop();
                      }
                    }
                  }, _callee);
                }));

                return function (_x) {
                  return _ref2.apply(this, arguments);
                };
              }());
            });

          case 9:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  })), [next_router__WEBPACK_IMPORTED_MODULE_12___default.a.query.project]);
  Object(react__WEBPACK_IMPORTED_MODULE_6__["useEffect"])(function () {
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

    var costsDataset = []; // const testArray = [];
    // const monthData = periods && periods.map(() => null);

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
    }); // Net worth

    console.log(revenueDataset);
    console.log(costsDataset); // const netWorth =
    //   revenueDataset.length !== 0 &&
    //   costsDataset.length !== 0 &&
    //   revenueDataset[0].data &&
    //   revenueDataset[0].data.map((revenueElement, index) => {
    //     if (revenueElement !== null && costsDataset[0].data[index] !== null) {
    //       const grossProfit = revenueElement - -costsDataset[0].data[index];
    //       return grossProfit - (tax / 100) * grossProfit;
    //     } else if (revenueElement !== null) {
    //       return revenueElement - (tax / 100) * revenueElement;
    //     } else if (costsDataset[0].data[index] !== null) {
    //       return costsDataset[0].data[index];
    //     } else {
    //       return null;
    //     }
    //   });
    // ----------------------
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
    console.log(netWorthArray);
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

          } //   defaultFontFamily: (Chart.defaults.global.defaultFontFamily =
          //     'Comfortaa'),
          //   scales: {
          //     yAxes: [
          //         {
          //           stacked: true,
          //           ticks: {
          //             beginAtZero: true,
          //           },
          //         },
          //       ],
          //       xAxes: [
          //         {
          //           stacked: true,
          //           ticks: {
          //             beginAtZero: true,
          //           },
          //         },
          //       ],
          //   },

        }
      }
    });
  }, [periods, revenueElements, costsElements, tax]);

  var onRevenueElementAdd = /*#__PURE__*/function () {
    var _ref3 = Object(C_off_saas_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_5__["default"])( /*#__PURE__*/C_off_saas_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default.a.mark(function _callee3() {
      var wholeArray, newRevenueElements;
      return C_off_saas_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default.a.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              console.log(revenueElements);
              wholeArray = Object(C_off_saas_node_modules_next_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_3__["default"])(revenueElements);
              newRevenueElements = {
                title: '',
                type: 'One time',
                start: new Date(),
                end: new Date(),
                value: '',
                periods: [],
                color: 'rgba(244, 67, 54, 1)',
                index: Object(uuid__WEBPACK_IMPORTED_MODULE_17__["v4"])()
              };
              wholeArray.push(newRevenueElements);
              console.log(wholeArray);
              setRevenueElements(wholeArray);
              _context3.next = 8;
              return _lib_firebase__WEBPACK_IMPORTED_MODULE_8__["db"].collection('projects').doc(projectId).collection('cashFlow').doc(next_router__WEBPACK_IMPORTED_MODULE_12___default.a.query.project).collection('inputs').doc(documentId).update({
                revenueElements: wholeArray
              });

            case 8:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3);
    }));

    return function onRevenueElementAdd() {
      return _ref3.apply(this, arguments);
    };
  }(); // Costs


  var onCostsElementAdd = /*#__PURE__*/function () {
    var _ref4 = Object(C_off_saas_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_5__["default"])( /*#__PURE__*/C_off_saas_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default.a.mark(function _callee4() {
      var wholeArray, newCostsElements;
      return C_off_saas_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default.a.wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              console.log(costsElements);
              wholeArray = Object(C_off_saas_node_modules_next_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_3__["default"])(costsElements);
              newCostsElements = {
                title: '',
                type: 'One time',
                start: new Date(),
                end: new Date(),
                value: '',
                periods: [],
                color: 'rgba(244, 67, 54, 1)',
                index: Object(uuid__WEBPACK_IMPORTED_MODULE_17__["v4"])()
              };
              wholeArray.push(newCostsElements);
              console.log(wholeArray);
              setCostsElements(wholeArray);
              _context4.next = 8;
              return _lib_firebase__WEBPACK_IMPORTED_MODULE_8__["db"].collection('projects').doc(projectId).collection('cashFlow').doc(next_router__WEBPACK_IMPORTED_MODULE_12___default.a.query.project).collection('inputs').doc(documentId).update({
                costsElements: wholeArray
              });

            case 8:
            case "end":
              return _context4.stop();
          }
        }
      }, _callee4);
    }));

    return function onCostsElementAdd() {
      return _ref4.apply(this, arguments);
    };
  }();

  var _useState16 = Object(react__WEBPACK_IMPORTED_MODULE_6__["useState"])(new Date()),
      startDate = _useState16[0],
      setStartDate = _useState16[1];

  var _useState17 = Object(react__WEBPACK_IMPORTED_MODULE_6__["useState"])(new Date()),
      endDate = _useState17[0],
      setEndDate = _useState17[1];

  var onStartDateUpdate = /*#__PURE__*/function () {
    var _ref5 = Object(C_off_saas_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_5__["default"])( /*#__PURE__*/C_off_saas_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default.a.mark(function _callee5(date) {
      var newStartDate, newEndDate, startDater, endDater, dates, month;
      return C_off_saas_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default.a.wrap(function _callee5$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              console.log(date);
              setStartDate(date); // Get months

              newStartDate = Object(date_fns__WEBPACK_IMPORTED_MODULE_15__["format"])(date, 'yyyy-MM-dd');
              newEndDate = Object(date_fns__WEBPACK_IMPORTED_MODULE_15__["format"])(endDate, 'yyyy-MM-dd');
              startDater = moment__WEBPACK_IMPORTED_MODULE_16___default()(newStartDate);
              endDater = moment__WEBPACK_IMPORTED_MODULE_16___default()(newEndDate);
              dates = [];
              startDater.subtract(1, 'month'); //Substract one month to exclude endDater itself

              month = moment__WEBPACK_IMPORTED_MODULE_16___default()(startDater); //clone the startDate

              while (month < endDater) {
                month.add(1, 'month');
                dates.push(month.format('MMM yyyy'));
              } // Local update


              setPeriods(dates); // Firebase update

              _context5.next = 13;
              return _lib_firebase__WEBPACK_IMPORTED_MODULE_8__["db"].collection('projects').doc(projectId).collection('cashFlow').doc(next_router__WEBPACK_IMPORTED_MODULE_12___default.a.query.project).collection('inputs').doc(documentId).update({
                periods: dates,
                globalStartDate: date
              });

            case 13:
            case "end":
              return _context5.stop();
          }
        }
      }, _callee5);
    }));

    return function onStartDateUpdate(_x2) {
      return _ref5.apply(this, arguments);
    };
  }();

  var onEndDateUpdate = /*#__PURE__*/function () {
    var _ref6 = Object(C_off_saas_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_5__["default"])( /*#__PURE__*/C_off_saas_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default.a.mark(function _callee6(date) {
      var newStartDate, newEndDate, startDater, endDater, dates, month;
      return C_off_saas_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default.a.wrap(function _callee6$(_context6) {
        while (1) {
          switch (_context6.prev = _context6.next) {
            case 0:
              setEndDate(date); // Get months

              newStartDate = Object(date_fns__WEBPACK_IMPORTED_MODULE_15__["format"])(startDate, 'yyyy-MM-dd');
              newEndDate = Object(date_fns__WEBPACK_IMPORTED_MODULE_15__["format"])(date, 'yyyy-MM-dd');
              startDater = moment__WEBPACK_IMPORTED_MODULE_16___default()(newStartDate);
              endDater = moment__WEBPACK_IMPORTED_MODULE_16___default()(newEndDate);
              dates = [];
              startDater.subtract(1, 'month'); //Substract one month to exclude endDater itself
              // endDater.subtract(1, "month"); //Substract one month to exclude endDater itself

              month = moment__WEBPACK_IMPORTED_MODULE_16___default()(startDater); //clone the startDate

              while (month < endDater) {
                month.add(1, 'month');
                dates.push(month.format('MMM yyyy'));
              } // Local update


              setPeriods(dates); // Firebase update

              _context6.next = 12;
              return _lib_firebase__WEBPACK_IMPORTED_MODULE_8__["db"].collection('projects').doc(projectId).collection('cashFlow').doc(next_router__WEBPACK_IMPORTED_MODULE_12___default.a.query.project).collection('inputs').doc(documentId).update({
                periods: dates,
                globalEndDate: date
              });

            case 12:
            case "end":
              return _context6.stop();
          }
        }
      }, _callee6);
    }));

    return function onEndDateUpdate(_x3) {
      return _ref6.apply(this, arguments);
    };
  }();

  console.log('Running');
  var revenueRef = Object(react__WEBPACK_IMPORTED_MODULE_6__["useRef"])();
  var innerContainerRevenueRef = Object(react__WEBPACK_IMPORTED_MODULE_6__["useRef"])();
  var dropDownIcon = Object(react__WEBPACK_IMPORTED_MODULE_6__["useRef"])();

  var _useState18 = Object(react__WEBPACK_IMPORTED_MODULE_6__["useState"])(false),
      isRevenueShown = _useState18[0],
      setIsRevenueShown = _useState18[1];

  var onRevenueShow = function onRevenueShow() {
    var margins = size.width < 1280 ? 68 : 96;
    var revenueContainerHeight = innerContainerRevenueRef.current.offsetHeight + margins;
    console.log(innerContainerRevenueRef.current.offsetHeight);

    if (!isRevenueShown) {
      gsap__WEBPACK_IMPORTED_MODULE_18__["default"].to(revenueRef.current, {
        height: revenueContainerHeight,
        duration: 1,
        ease: gsap__WEBPACK_IMPORTED_MODULE_18__["Linear"]
      });
      gsap__WEBPACK_IMPORTED_MODULE_18__["default"].to(dropDownIcon.current, {
        rotation: '90_cw',
        duration: 1,
        ease: gsap__WEBPACK_IMPORTED_MODULE_18__["Linear"]
      });
      gsap__WEBPACK_IMPORTED_MODULE_18__["default"].set(revenueRef.current, {
        height: '100%',
        delay: 1
      });
      gsap__WEBPACK_IMPORTED_MODULE_18__["default"].set(revenueRef.current, {
        overflow: 'visible',
        delay: 1
      });
      setIsRevenueShown(true);
    } else if (isRevenueShown) {
      gsap__WEBPACK_IMPORTED_MODULE_18__["default"].set(revenueRef.current, {
        height: revenueContainerHeight
      });
      gsap__WEBPACK_IMPORTED_MODULE_18__["default"].set(revenueRef.current, {
        overflow: 'hidden'
      });
      gsap__WEBPACK_IMPORTED_MODULE_18__["default"].to(revenueRef.current, {
        height: 55,
        duration: 1,
        ease: gsap__WEBPACK_IMPORTED_MODULE_18__["Linear"]
      });
      gsap__WEBPACK_IMPORTED_MODULE_18__["default"].to(dropDownIcon.current, {
        rotation: '0_cw',
        duration: 1,
        ease: gsap__WEBPACK_IMPORTED_MODULE_18__["Linear"]
      });
      setIsRevenueShown(false);
    }
  }; // Costs


  var costsRef = Object(react__WEBPACK_IMPORTED_MODULE_6__["useRef"])();
  var innerContainerCostsRef = Object(react__WEBPACK_IMPORTED_MODULE_6__["useRef"])();
  var dropDownIconCosts = Object(react__WEBPACK_IMPORTED_MODULE_6__["useRef"])();

  var _useState19 = Object(react__WEBPACK_IMPORTED_MODULE_6__["useState"])(false),
      isCostsShown = _useState19[0],
      setIsCostsShown = _useState19[1];

  var onCostsShow = function onCostsShow() {
    var revenueContainerHeight = innerContainerCostsRef.current.offsetHeight + 96;
    console.log(innerContainerCostsRef.current.offsetHeight);

    if (!isCostsShown) {
      gsap__WEBPACK_IMPORTED_MODULE_18__["default"].to(costsRef.current, {
        height: revenueContainerHeight,
        duration: 1,
        ease: gsap__WEBPACK_IMPORTED_MODULE_18__["Linear"]
      });
      gsap__WEBPACK_IMPORTED_MODULE_18__["default"].to(dropDownIconCosts.current, {
        rotation: '90_cw',
        duration: 1,
        ease: gsap__WEBPACK_IMPORTED_MODULE_18__["Linear"]
      });
      gsap__WEBPACK_IMPORTED_MODULE_18__["default"].set(costsRef.current, {
        height: '100%',
        delay: 1
      });
      gsap__WEBPACK_IMPORTED_MODULE_18__["default"].set(costsRef.current, {
        overflow: 'visible',
        delay: 1
      });
      setIsCostsShown(true);
    } else if (isCostsShown) {
      gsap__WEBPACK_IMPORTED_MODULE_18__["default"].set(costsRef.current, {
        overflow: 'hidden'
      });
      gsap__WEBPACK_IMPORTED_MODULE_18__["default"].set(costsRef.current, {
        height: revenueContainerHeight
      });
      gsap__WEBPACK_IMPORTED_MODULE_18__["default"].to(costsRef.current, {
        height: 55,
        duration: 1,
        ease: gsap__WEBPACK_IMPORTED_MODULE_18__["Linear"]
      });
      gsap__WEBPACK_IMPORTED_MODULE_18__["default"].to(dropDownIconCosts.current, {
        rotation: '0_cw',
        duration: 1,
        ease: gsap__WEBPACK_IMPORTED_MODULE_18__["Linear"]
      });
      setIsCostsShown(false);
    }
  };

  var handleOnDragEnd = /*#__PURE__*/function () {
    var _ref7 = Object(C_off_saas_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_5__["default"])( /*#__PURE__*/C_off_saas_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default.a.mark(function _callee7(result) {
      var items, _items$splice, _items$splice2, reorderedItem;

      return C_off_saas_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default.a.wrap(function _callee7$(_context7) {
        while (1) {
          switch (_context7.prev = _context7.next) {
            case 0:
              if (result.destination) {
                _context7.next = 2;
                break;
              }

              return _context7.abrupt("return");

            case 2:
              items = Array.from(revenueElements);
              _items$splice = items.splice(result.source.index, 1), _items$splice2 = Object(C_off_saas_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_items$splice, 1), reorderedItem = _items$splice2[0];
              items.splice(result.destination.index, 0, reorderedItem);
              console.log(result);
              setRevenueElements(items); // Firebase update

              _context7.next = 9;
              return _lib_firebase__WEBPACK_IMPORTED_MODULE_8__["db"].collection('projects').doc(projectId).collection('cashFlow').doc(next_router__WEBPACK_IMPORTED_MODULE_12___default.a.query.project).collection('inputs').doc(documentId).update({
                revenueElements: items
              });

            case 9:
            case "end":
              return _context7.stop();
          }
        }
      }, _callee7);
    }));

    return function handleOnDragEnd(_x4) {
      return _ref7.apply(this, arguments);
    };
  }(); // Costs


  var costsHandleOnDragEnd = /*#__PURE__*/function () {
    var _ref8 = Object(C_off_saas_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_5__["default"])( /*#__PURE__*/C_off_saas_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default.a.mark(function _callee8(result) {
      var items, _items$splice3, _items$splice4, reorderedItem;

      return C_off_saas_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default.a.wrap(function _callee8$(_context8) {
        while (1) {
          switch (_context8.prev = _context8.next) {
            case 0:
              if (result.destination) {
                _context8.next = 2;
                break;
              }

              return _context8.abrupt("return");

            case 2:
              items = Array.from(costsElements);
              _items$splice3 = items.splice(result.source.index, 1), _items$splice4 = Object(C_off_saas_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_items$splice3, 1), reorderedItem = _items$splice4[0];
              items.splice(result.destination.index, 0, reorderedItem);
              console.log(result);
              setRevenueElements(items); // Firebase update

              _context8.next = 9;
              return _lib_firebase__WEBPACK_IMPORTED_MODULE_8__["db"].collection('projects').doc(projectId).collection('cashFlow').doc(next_router__WEBPACK_IMPORTED_MODULE_12___default.a.query.project).collection('inputs').doc(documentId).update({
                costsElements: items
              });

            case 9:
            case "end":
              return _context8.stop();
          }
        }
      }, _callee8);
    }));

    return function costsHandleOnDragEnd(_x5) {
      return _ref8.apply(this, arguments);
    };
  }(); // Tax


  var onTaxChange = /*#__PURE__*/function () {
    var _ref9 = Object(C_off_saas_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_5__["default"])( /*#__PURE__*/C_off_saas_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default.a.mark(function _callee9(value) {
      return C_off_saas_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default.a.wrap(function _callee9$(_context9) {
        while (1) {
          switch (_context9.prev = _context9.next) {
            case 0:
              // Local update
              setTax(value); // Firebase update

              _context9.next = 3;
              return _lib_firebase__WEBPACK_IMPORTED_MODULE_8__["db"].collection('projects').doc(projectId).collection('cashFlow').doc(next_router__WEBPACK_IMPORTED_MODULE_12___default.a.query.project).collection('inputs').doc(documentId).update({
                tax: value
              });

            case 3:
            case "end":
              return _context9.stop();
          }
        }
      }, _callee9);
    }));

    return function onTaxChange(_x6) {
      return _ref9.apply(this, arguments);
    };
  }();

  var data = {
    periods: periods,
    revenueElements: revenueElements,
    costsElements: costsElements,
    tax: tax,
    totalRevenue: totalRevenue,
    monthlyRevenue: monthlyRevenue,
    totalCosts: totalCosts,
    monthlyCosts: monthlyCosts,
    grossProfit: grossProfit,
    netProfit: netProfit,
    startDate: Object(date_fns__WEBPACK_IMPORTED_MODULE_15__["format"])(startDate, 'MMM / yyyy'),
    endDate: Object(date_fns__WEBPACK_IMPORTED_MODULE_15__["format"])(endDate, 'MMM / yyyy')
  };
  var size = {
    width: window.innerWidth
  };
  console.log(size.width > 860 && 30 || size.width < 860 && size.width > 680 && 26 || size.width < 680 && 22);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Tippy__WEBPACK_IMPORTED_MODULE_25__["default"], {
      cashFlow: true,
      contentClass: "h-40 w-80 shadow-lg rounded-2xl bg-primary flex justify-center items-center",
      contentText: "I'm glad you made it all the way here! Analyzing your startup's liquidity is one of the most important parts of planning your entire business. If you need any help, please feel free to contact our team! "
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 661,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_ExitComponent__WEBPACK_IMPORTED_MODULE_26__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 666,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "min-h-screen w-full relative flex flex-col items-center",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "w-full max-w-full relative mt-12 lg1Container:mt-16 mb-16 px-32",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "relative grid grid-cols-2 grid-rows-1 grid-flow-col",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
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
                lineNumber: 678,
                columnNumber: 17
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("g", {
                id: "Landing_Success",
                "data-name": "Landing Success",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
                  className: "cls-1",
                  d: "M109.3,90.1A46,46,0,0,0,65,36V20.08c1.78-.62,7.21-2.14,12.57.23a19.33,19.33,0,0,0,14.82,0c.87-.38.61.31.61-17.93a1,1,0,0,0-1.43-.93c-.07,0-6.69,2.87-13.18,0A19.41,19.41,0,0,0,65,.93,1,1,0,0,0,63,1V36a45.86,45.86,0,0,0-28.66,10.8C16.18,40.48,4,40,.79,45.51-2.29,50.86,3.94,59.3,10,65.68A11,11,0,0,0,18,83c.81,38.41,46.08,59.2,75.66,34.21,8.53,3,29,9.15,33.55,1.31C130.39,113,123.86,102.65,109.3,90.1ZM77.59,3.31A19.39,19.39,0,0,0,91,3.83V18.68c-1.79.62-7.22,2.13-12.57-.23A19.19,19.19,0,0,0,65,17.93V3.08C66.81,2.46,72.24,1,77.59,3.31ZM65,45v-7c39.69.91,58,50.27,28.21,76.81C71.32,107,46,92.66,27.77,78.64a11,11,0,0,0-3.2-16.13A43.88,43.88,0,0,1,63,38.06V45A1,1,0,0,0,65,45ZM32.55,48.36a46.21,46.21,0,0,0-9.83,13.28,10.93,10.93,0,0,0-11.4,2.47C-8.39,43.23,5.23,39.08,32.55,48.36ZM10,72a9,9,0,1,1,9,9A9,9,0,0,1,10,72Zm10,11a11,11,0,0,0,6.34-2.82c18.45,14.21,43.45,28.35,65.05,36.22C63,139.16,20.83,119.1,20.05,83Zm105.4,34.5c-2.51,4.35-14,3.62-30-1.85a45.61,45.61,0,0,0,13.42-23.21C121.59,103.58,128,113.12,125.45,117.47Z"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 680,
                  columnNumber: 19
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 679,
                columnNumber: 17
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 671,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
              className: "text-primarydark text-lg mdContainer:text-xl lgContainer:text-2xl mt-2 pl-2 dark:text-background",
              children: "Cash flow analysis"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 686,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 670,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_CashFlowPDF__WEBPACK_IMPORTED_MODULE_22__["default"], {
            projectName: projectName,
            projectId: projectId,
            data: data,
            periods: periods,
            revenueElements: revenueElements,
            costsElements: costsElements,
            tax: tax,
            totalRevenue: totalRevenue,
            monthlyRevenue: monthlyRevenue,
            totalCosts: totalCosts,
            monthlyCosts: monthlyCosts,
            grossProfit: grossProfit,
            netProfit: netProfit,
            startDate: startDate,
            endDate: endDate
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 690,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 669,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
            className: "text-secondary text-xs mdContainer:text-sm lgContainer:text-base text-gray relative -top-1 lgContainer:top-0",
            children: "Manage your startup cash flow"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 709,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 708,
          columnNumber: 11
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
                lineNumber: 719,
                columnNumber: 17
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                className: "ml-2 text-primarydark",
                children: "Start:"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 724,
                columnNumber: 17
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 718,
              columnNumber: 15
            }, _this), startDate && !react_device_detect__WEBPACK_IMPORTED_MODULE_23__["isMobile"] ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_datepicker__WEBPACK_IMPORTED_MODULE_14___default.a, {
              selected: startDate,
              onChange: function onChange(date) {
                return onStartDateUpdate(date);
              },
              dateFormat: "MMMM yyyy",
              showMonthYearPicker: true,
              maxDate: Object(date_fns__WEBPACK_IMPORTED_MODULE_15__["addYears"])(new Date(), 3),
              minDate: new Date()
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 727,
              columnNumber: 17
            }, _this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_datepicker__WEBPACK_IMPORTED_MODULE_14___default.a, {
              selected: startDate,
              onChange: function onChange(date) {
                return onStartDateUpdate(date);
              },
              dateFormat: "MMMM yyyy",
              showMonthYearPicker: true,
              maxDate: Object(date_fns__WEBPACK_IMPORTED_MODULE_15__["addYears"])(new Date(), 3),
              minDate: new Date(),
              withPortal: true
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 736,
              columnNumber: 17
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 714,
            columnNumber: 13
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
                lineNumber: 752,
                columnNumber: 17
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                className: "ml-2 text-primarydark",
                children: "End:"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 757,
                columnNumber: 17
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 751,
              columnNumber: 15
            }, _this), endDate && !react_device_detect__WEBPACK_IMPORTED_MODULE_23__["isMobile"] ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_datepicker__WEBPACK_IMPORTED_MODULE_14___default.a, {
              selected: endDate,
              onChange: function onChange(date) {
                return onEndDateUpdate(date);
              },
              dateFormat: "MMMM yyyy",
              showMonthYearPicker: true,
              maxDate: Object(date_fns__WEBPACK_IMPORTED_MODULE_15__["addYears"])(new Date(), 3),
              minDate: new Date()
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 760,
              columnNumber: 17
            }, _this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_datepicker__WEBPACK_IMPORTED_MODULE_14___default.a, {
              selected: endDate,
              onChange: function onChange(date) {
                return onEndDateUpdate(date);
              },
              dateFormat: "MMMM yyyy",
              showMonthYearPicker: true,
              maxDate: Object(date_fns__WEBPACK_IMPORTED_MODULE_15__["addYears"])(new Date(), 3),
              minDate: new Date(),
              withPortal: true
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 769,
              columnNumber: 17
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 747,
            columnNumber: 13
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
                lineNumber: 793,
                columnNumber: 17
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                className: "ml-2",
                children: "Tax:"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 798,
                columnNumber: 17
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 792,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "flex",
              style: {
                textAlignLast: 'right'
              },
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
                id: "tax-input",
                value: tax,
                onChange: function onChange(e) {
                  return onTaxChange(e.target.value);
                },
                className: "w-full bg-white focus:outline-none"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 801,
                columnNumber: 17
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                children: "%"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 807,
                columnNumber: 17
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 800,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 780,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 713,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          id: "chartContainer",
          className: "w-full h-1/2 p-4 mdContainer:p-8 bg-white rounded-2xl mt-12 shadow-md"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 811,
          columnNumber: 11
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
                lineNumber: 817,
                columnNumber: 17
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                className: "ml-2",
                children: "Total revenue:"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 822,
                columnNumber: 17
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 816,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
              children: ["$", totalRevenue]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 824,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 815,
            columnNumber: 13
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
                lineNumber: 828,
                columnNumber: 17
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                className: "ml-2",
                children: "Monthly revenue:"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 833,
                columnNumber: 17
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 827,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
              children: ["$", monthlyRevenue]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 835,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 826,
            columnNumber: 13
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
                lineNumber: 839,
                columnNumber: 17
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                className: "ml-2",
                children: "Total costs:"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 844,
                columnNumber: 17
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 838,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
              children: ["$", totalCosts]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 846,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 837,
            columnNumber: 13
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
                lineNumber: 850,
                columnNumber: 17
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                className: "ml-2",
                children: "Monthly costs:"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 855,
                columnNumber: 17
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 849,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
              children: ["$", monthlyCosts]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 857,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 848,
            columnNumber: 13
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
                lineNumber: 861,
                columnNumber: 17
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                className: "ml-2",
                children: "Gross profit:"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 866,
                columnNumber: 17
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 860,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
              children: ["$", grossProfit]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 868,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 859,
            columnNumber: 13
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
                lineNumber: 872,
                columnNumber: 17
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                className: "ml-2",
                children: "Net profit:"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 877,
                columnNumber: 17
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 871,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
              children: ["$", netProfit]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 879,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 870,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 814,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          ref: revenueRef,
          style: {
            height: 55,
            zIndex: 10
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
                lineNumber: 890,
                columnNumber: 17
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 889,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "lgContainer:mr-2 flex flex-nowrap items-center",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
                onClick: onRevenueElementAdd,
                className: "cursor-pointer",
                src: "/cash-flow/add.svg",
                height: size.width > 860 && 22 || size.width < 860 && size.width > 680 && 18 || size.width < 680 && 16,
                width: size.width > 860 && 22 || size.width < 860 && size.width > 680 && 18 || size.width < 680 && 16
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 893,
                columnNumber: 17
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
                ref: dropDownIcon,
                onClick: onRevenueShow,
                className: "ml-2 cursor-pointer",
                src: "/cash-flow/dropdown.svg",
                height: size.width > 860 && 22 || size.width < 860 && size.width > 680 && 18 || size.width < 680 && 16,
                width: size.width > 860 && 22 || size.width < 860 && size.width > 680 && 18 || size.width < 680 && 16
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 900,
                columnNumber: 17
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 892,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 888,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            ref: innerContainerRevenueRef,
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
                lineNumber: 923,
                columnNumber: 17
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                children: "type"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 924,
                columnNumber: 17
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                children: "amount"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 925,
                columnNumber: 17
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                children: "start"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 926,
                columnNumber: 17
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                children: "end"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 927,
                columnNumber: 17
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {}, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 928,
                columnNumber: 17
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 919,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("hr", {
              className: "text-primary w-full"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 930,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "h-full w-full rounded-2xl flex flex-wrap flex-col",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_beautiful_dnd__WEBPACK_IMPORTED_MODULE_19__["DragDropContext"], {
                onDragEnd: handleOnDragEnd,
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_beautiful_dnd__WEBPACK_IMPORTED_MODULE_19__["Droppable"], {
                  droppableId: "elements",
                  children: function children(provided) {
                    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", _objectSpread(_objectSpread({
                      className: "elements"
                    }, provided.droppableProps), {}, {
                      ref: provided.innerRef,
                      children: [revenueElements && revenueElements.map(function (element, index) {
                        console.log(element);
                        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_beautiful_dnd__WEBPACK_IMPORTED_MODULE_19__["Draggable"], {
                          draggableId: element.index,
                          index: index,
                          children: function children(provided) {
                            return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_RevenueElement__WEBPACK_IMPORTED_MODULE_13__["default"], {
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
                              lineNumber: 942,
                              columnNumber: 35
                            }, _this);
                          }
                        }, element.index, false, {
                          fileName: _jsxFileName,
                          lineNumber: 940,
                          columnNumber: 31
                        }, _this);
                      }), provided.placeholder]
                    }), void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 935,
                      columnNumber: 23
                    }, _this);
                  }
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 933,
                  columnNumber: 19
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 932,
                columnNumber: 17
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 931,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 910,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 883,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          ref: costsRef,
          style: {
            height: 55,
            zIndex: 10
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
                lineNumber: 972,
                columnNumber: 17
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 971,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "lgContainer:mr-2 flex flex-nowrap items-center",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
                onClick: onCostsElementAdd,
                className: "cursor-pointer",
                src: "/cash-flow/add.svg",
                height: size.width > 860 && 22 || size.width < 860 && size.width > 680 && 18 || size.width < 680 && 16,
                width: size.width > 860 && 22 || size.width < 860 && size.width > 680 && 18 || size.width < 680 && 16
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 975,
                columnNumber: 17
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
                ref: dropDownIconCosts,
                onClick: onCostsShow,
                className: "ml-2 cursor-pointer",
                src: "/cash-flow/dropdown.svg",
                height: size.width > 860 && 22 || size.width < 860 && size.width > 680 && 18 || size.width < 680 && 16,
                width: size.width > 860 && 22 || size.width < 860 && size.width > 680 && 18 || size.width < 680 && 16
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 982,
                columnNumber: 17
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 974,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 970,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            ref: innerContainerCostsRef,
            className: "w-full ".concat(size.width < 1120 ? 'text-sm mdContainer:text-base lg1Container:mx-8 lg1Container:mb-6 mt-4  bg-background rounded-2xl px-4 mdContainer:px-6 py-4' : 'w-full mx-8 mb-6 mt-4  bg-background rounded-2xl px-4 mdContainer:px-6 py-4'),
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "w-full grid grid-cols-6fr items-center",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                children: "name"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 1002,
                columnNumber: 17
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                children: "type"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 1003,
                columnNumber: 17
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                children: "amount"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 1004,
                columnNumber: 17
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                children: "start"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 1005,
                columnNumber: 17
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                children: "end"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 1006,
                columnNumber: 17
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {}, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 1007,
                columnNumber: 17
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 1001,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("hr", {
              className: "text-primary w-full"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 1009,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "h-full w-full rounded-2xl flex flex-wrap flex-col",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_beautiful_dnd__WEBPACK_IMPORTED_MODULE_19__["DragDropContext"], {
                onDragEnd: costsHandleOnDragEnd,
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_beautiful_dnd__WEBPACK_IMPORTED_MODULE_19__["Droppable"], {
                  droppableId: "elements",
                  children: function children(provided) {
                    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", _objectSpread(_objectSpread({
                      className: "elements"
                    }, provided.droppableProps), {}, {
                      ref: provided.innerRef,
                      children: [costsElements && costsElements.map(function (element, index) {
                        console.log(element);
                        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_beautiful_dnd__WEBPACK_IMPORTED_MODULE_19__["Draggable"], {
                          draggableId: element.index,
                          index: index,
                          children: function children(provided) {
                            return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_CostsElement__WEBPACK_IMPORTED_MODULE_21__["default"], {
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
                              lineNumber: 1021,
                              columnNumber: 35
                            }, _this);
                          }
                        }, element.index, false, {
                          fileName: _jsxFileName,
                          lineNumber: 1019,
                          columnNumber: 31
                        }, _this);
                      }), provided.placeholder]
                    }), void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 1014,
                      columnNumber: 23
                    }, _this);
                  }
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 1012,
                  columnNumber: 19
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 1011,
                columnNumber: 17
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 1010,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 992,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 965,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 668,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 667,
      columnNumber: 7
    }, _this)]
  }, void 0, true);
};

_s(CashFlowPage, "BGSbTimdeFbo7EWGI0PLBtXRjPo=");

_c = CashFlowPage;
/* harmony default export */ __webpack_exports__["default"] = (CashFlowPage);

var _c;

$RefreshReg$(_c, "CashFlowPage");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9kYXNoYm9hcmQvc3RhcnR1cC9wcm9qZWN0L2J1c2luZXNzLWFwcC9jYXNoLWZsb3cvQ2FzaEZsb3dQYWdlLmpzIl0sIm5hbWVzIjpbIkNhc2hGbG93UGFnZSIsInVzZVN0YXRlIiwicHJvamVjdE5hbWUiLCJzZXRQcm9qZWN0TmFtZSIsIm1haW5Eb2N1bWVudCIsInNldE1haW5Eb2N1bWVudCIsInByb2plY3RJZCIsInNldFByb2plY3RJZCIsImRvY3VtZW50SWQiLCJzZXREb2N1bWVudElkIiwicmV2ZW51ZUVsZW1lbnRzIiwic2V0UmV2ZW51ZUVsZW1lbnRzIiwiY29zdHNFbGVtZW50cyIsInNldENvc3RzRWxlbWVudHMiLCJidWRnZXRFbGVtZW50cyIsInNldEJ1ZGdldEVsZW1lbnRzIiwiY2hhcnRSZWYiLCJ1c2VSZWYiLCJwZXJpb2RzIiwic2V0UGVyaW9kcyIsInRheCIsInNldFRheCIsInRvdGFsUmV2ZW51ZSIsInNldFRvdGFsUmV2ZW51ZSIsIm1vbnRobHlSZXZlbnVlIiwic2V0TW9udGhseVJldmVudWUiLCJ0b3RhbENvc3RzIiwic2V0VG90YWxDb3N0cyIsIm1vbnRobHlDb3N0cyIsInNldE1vbnRobHlDb3N0cyIsImdyb3NzUHJvZml0Iiwic2V0R3Jvc3NQcm9maXQiLCJuZXRQcm9maXQiLCJzZXROZXRQcm9maXQiLCJ1c2VFZmZlY3QiLCJDb29raWVzIiwiZ2V0IiwidXNlclVpZCIsIlJvdXRlciIsInF1ZXJ5IiwicHJvamVjdCIsImNvbnNvbGUiLCJsb2ciLCJkYiIsImNvbGxlY3Rpb24iLCJ3aGVyZSIsImRhdGEiLCJ0aGVuIiwicXVlcnlTbmFwc2hvdCIsImZvckVhY2giLCJkb2MxIiwiZG9jIiwib25TbmFwc2hvdCIsInNlcnZlclVwZGF0ZSIsImRvY3MiLCJtYXAiLCJpZCIsImNoYW5nZWRTdGFydERhdGUiLCJnbG9iYWxTdGFydERhdGUiLCJzZWNvbmRzIiwic2V0U3RhcnREYXRlIiwiRGF0ZSIsImNoYW5nZWRFbmREYXRlIiwiZ2xvYmFsRW5kRGF0ZSIsInNldEVuZERhdGUiLCJ0b3RhbFJldmVudWVBcnJheSIsImVsZW1lbnQiLCJwYXJzZUludCIsInZhbHVlIiwibGVuZ3RoIiwicmVkdWNlIiwiYSIsImIiLCJOdW1iZXIiLCJpc05hTiIsIk1hdGgiLCJyb3VuZCIsInBlcmlvZExlbmd0aCIsInRvdGFsQ29zdHNBcnJheSIsImlzRmluaXRlIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsImlubmVySFRNTCIsInNpemUiLCJ3aWR0aCIsIm15Q2hhcnRSZWYiLCJnZXRDb250ZXh0IiwicmV2ZW51ZURhdGFzZXQiLCJ0ZXN0QXJyYXkiLCJyZXZlbnVlRWxlbWVudCIsImluZGV4IiwibW9udGhEYXRhIiwicGVyaW9kIiwicGVyaW9kSW5kZXgiLCJyZXZlbnVlUGVyaW9kIiwicHVzaCIsImxhYmVsIiwidGl0bGUiLCJiYWNrZ3JvdW5kQ29sb3IiLCJjb2xvciIsImJvcmRlckNvbG9yIiwiY29zdHNEYXRhc2V0IiwiY29zdHNFbGVtZW50IiwiY29zdHNQZXJpb2QiLCJyZXZlbnVlQXJyYXkiLCJjYWxjdWxhdGVkUmV2ZW51ZUFycmF5IiwidW5kZWZpbmVkIiwiYyIsImkiLCJjb3N0c0FycmF5IiwiY2FsY3VsYXRlZENvc3RzQXJyYXkiLCJmaW5hbEFycmF5IiwiY2FsY3VsYXRlZEZpbmFsQXJyYXkiLCJhcnJheSIsInplcm9BcnJheSIsImZpbmFsRGF0YUJlZm9yZVRheCIsImZpbmFsRGF0YUFmdGVyVGF4IiwibmV0V29ydGhBcnJheSIsIm5ldFdvcnRoIiwiZGF0YUVsZW1lbnQiLCJyZXZlbnVlRWxlbWVudEluZGV4IiwiQ2hhcnQiLCJ0eXBlIiwibGFiZWxzIiwiZGF0YXNldHMiLCJmaWxsIiwibGluZVRlbnNpb24iLCJib3JkZXJXaWR0aCIsInBvaW50UmFkaXVzIiwib3B0aW9ucyIsInNraXBOdWxsIiwicmVzcG9uc2l2ZSIsInBsdWdpbnMiLCJsZWdlbmQiLCJwb3NpdGlvbiIsImZvbnRGYW1pbHkiLCJmb250IiwiYm94V2lkdGgiLCJzY2FsZXMiLCJ4Iiwic3RhY2tlZCIsInRpY2tzIiwiYmVnaW5BdFplcm8iLCJ5Iiwib25SZXZlbnVlRWxlbWVudEFkZCIsIndob2xlQXJyYXkiLCJuZXdSZXZlbnVlRWxlbWVudHMiLCJzdGFydCIsImVuZCIsInV1aWR2NCIsInVwZGF0ZSIsIm9uQ29zdHNFbGVtZW50QWRkIiwibmV3Q29zdHNFbGVtZW50cyIsInN0YXJ0RGF0ZSIsImVuZERhdGUiLCJvblN0YXJ0RGF0ZVVwZGF0ZSIsImRhdGUiLCJuZXdTdGFydERhdGUiLCJmb3JtYXQiLCJuZXdFbmREYXRlIiwic3RhcnREYXRlciIsIm1vbWVudCIsImVuZERhdGVyIiwiZGF0ZXMiLCJzdWJ0cmFjdCIsIm1vbnRoIiwiYWRkIiwib25FbmREYXRlVXBkYXRlIiwicmV2ZW51ZVJlZiIsImlubmVyQ29udGFpbmVyUmV2ZW51ZVJlZiIsImRyb3BEb3duSWNvbiIsImlzUmV2ZW51ZVNob3duIiwic2V0SXNSZXZlbnVlU2hvd24iLCJvblJldmVudWVTaG93IiwibWFyZ2lucyIsInJldmVudWVDb250YWluZXJIZWlnaHQiLCJjdXJyZW50Iiwib2Zmc2V0SGVpZ2h0IiwiZ3NhcCIsInRvIiwiaGVpZ2h0IiwiZHVyYXRpb24iLCJlYXNlIiwiTGluZWFyIiwicm90YXRpb24iLCJzZXQiLCJkZWxheSIsIm92ZXJmbG93IiwiY29zdHNSZWYiLCJpbm5lckNvbnRhaW5lckNvc3RzUmVmIiwiZHJvcERvd25JY29uQ29zdHMiLCJpc0Nvc3RzU2hvd24iLCJzZXRJc0Nvc3RzU2hvd24iLCJvbkNvc3RzU2hvdyIsImhhbmRsZU9uRHJhZ0VuZCIsInJlc3VsdCIsImRlc3RpbmF0aW9uIiwiaXRlbXMiLCJBcnJheSIsImZyb20iLCJzcGxpY2UiLCJzb3VyY2UiLCJyZW9yZGVyZWRJdGVtIiwiY29zdHNIYW5kbGVPbkRyYWdFbmQiLCJvblRheENoYW5nZSIsIndpbmRvdyIsImlubmVyV2lkdGgiLCJpc01vYmlsZSIsImFkZFllYXJzIiwiZ3JpZENvbHVtblN0YXJ0IiwiZ3JpZENvbHVtbkVuZCIsInRleHRBbGlnbkxhc3QiLCJlIiwidGFyZ2V0IiwiekluZGV4IiwiZm9udFNpemUiLCJwcm92aWRlZCIsImRyb3BwYWJsZVByb3BzIiwiaW5uZXJSZWYiLCJwbGFjZWhvbGRlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0NBRUE7O0FBQ0E7QUFDQTtDQUVBOztDQUVBOztDQUVBOztBQUNBO0FBRUE7QUFDQTtDQUVBOztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQU1BLFlBQVksR0FBRyxTQUFmQSxZQUFlLEdBQU07QUFBQTs7QUFDekI7QUFDQTtBQUZ5QixrQkFHYUMsc0RBQVEsQ0FBQyxFQUFELENBSHJCO0FBQUEsTUFHbEJDLFdBSGtCO0FBQUEsTUFHTEMsY0FISzs7QUFBQSxtQkFJZUYsc0RBQVEsQ0FBQyxFQUFELENBSnZCO0FBQUEsTUFJbEJHLFlBSmtCO0FBQUEsTUFJSkMsZUFKSTs7QUFBQSxtQkFLU0osc0RBQVEsQ0FBQyxFQUFELENBTGpCO0FBQUEsTUFLbEJLLFNBTGtCO0FBQUEsTUFLUEMsWUFMTzs7QUFBQSxtQkFNV04sc0RBQVEsQ0FBQyxFQUFELENBTm5CO0FBQUEsTUFNbEJPLFVBTmtCO0FBQUEsTUFNTkMsYUFOTTs7QUFBQSxtQkFPcUJSLHNEQUFRLEVBUDdCO0FBQUEsTUFPbEJTLGVBUGtCO0FBQUEsTUFPREMsa0JBUEM7O0FBQUEsbUJBUWlCVixzREFBUSxFQVJ6QjtBQUFBLE1BUWxCVyxhQVJrQjtBQUFBLE1BUUhDLGdCQVJHOztBQUFBLG1CQVNtQlosc0RBQVEsRUFUM0I7QUFBQSxNQVNsQmEsY0FUa0I7QUFBQSxNQVNGQyxpQkFURTs7QUFVekIsTUFBTUMsUUFBUSxHQUFHQyxvREFBTSxFQUF2Qjs7QUFWeUIsbUJBV0to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Q3dCLEtBQXhCO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUNBREY7QUFnQkQsdUJBbEJELENBRkosRUFxQkc4SCxRQUFRLENBQUNHLFdBckJaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSw2QkFERDtBQUFBO0FBREg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQWxCRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBM0JGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkF6U0Y7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQVBGO0FBQUEsa0JBREY7QUFvWUQsQ0ExL0JEOztHQUFNM04sWTs7S0FBQUEsWTtBQTQvQlNBLDJFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2Rhc2hib2FyZC9wcm9qZWN0cy9bcHJvamVjdF0vY2FzaC1mbG93LjI4YTQ0ZTUyYWRiNTQyYzg3N2E5LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCwgdXNlUmVmIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgSW1hZ2UgZnJvbSAnbmV4dC9pbWFnZSc7XHJcbmltcG9ydCB7IGRiIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vLi4vbGliL2ZpcmViYXNlJztcclxuaW1wb3J0IE5hdmJhclRlbXBsYXRlIGZyb20gJy4uLy4uLy4uLy4uL05hdmJhclRlbXBsYXRlJztcclxuaW1wb3J0IFBERkRvY3VtZW50IGZyb20gJy4uL1BERkRvY3VtZW50JztcclxuaW1wb3J0IENvb2tpZXMgZnJvbSAnanMtY29va2llJztcclxuaW1wb3J0IFJvdXRlciBmcm9tICduZXh0L3JvdXRlcic7XHJcbmltcG9ydCBSZXZlbnVlRWxlbWVudCBmcm9tICcuL1JldmVudWVFbGVtZW50JztcclxuLy8gRGF0ZSBwaWNrZXJcclxuaW1wb3J0IERhdGVQaWNrZXIgZnJvbSAncmVhY3QtZGF0ZXBpY2tlcic7XHJcbmltcG9ydCB7IGFkZFllYXJzLCBmb3JtYXQgfSBmcm9tICdkYXRlLWZucyc7XHJcbmltcG9ydCBtb21lbnQgZnJvbSAnbW9tZW50JztcclxuLy8gdXVpZHY0XHJcbmltcG9ydCB7IHY0IGFzIHV1aWR2NCB9IGZyb20gJ3V1aWQnO1xyXG4vLyBnc2FwXHJcbmltcG9ydCBnc2FwLCB7IExpbmVhciwgVHdlZW5NYXggfSBmcm9tICdnc2FwJztcclxuLy8gRHJhZyAmIGRyb3BcclxuaW1wb3J0IHsgRHJhZ0Ryb3BDb250ZXh0LCBEcm9wcGFibGUsIERyYWdnYWJsZSB9IGZyb20gJ3JlYWN0LWJlYXV0aWZ1bC1kbmQnO1xyXG5cclxuaW1wb3J0ICdyZWFjdC1kYXRlcGlja2VyL2Rpc3QvcmVhY3QtZGF0ZXBpY2tlci5jc3MnO1xyXG5pbXBvcnQgQ29zdHNFbGVtZW50IGZyb20gJy4vQ29zdHNFbGVtZW50JztcclxuaW1wb3J0IENhc2hGbG93UERGIGZyb20gJy4vQ2FzaEZsb3dQREYnO1xyXG4vLyBNb2JpbGUgZnJpZW5kbHlcclxuaW1wb3J0IHsgaXNNb2JpbGUgfSBmcm9tICdyZWFjdC1kZXZpY2UtZGV0ZWN0JztcclxuaW1wb3J0IHsgdXNlV2luZG93U2l6ZSB9IGZyb20gJy4uLy4uLy4uLy4uLy4uLy4uL3V0aWxzL3VzZVdpbmRvd1NpemUnO1xyXG5pbXBvcnQgVGlwcHlNb25zdGVyIGZyb20gJy4uLy4uLy4uLy4uL1RpcHB5JztcclxuaW1wb3J0IEV4aXRDb21wb25lbnQgZnJvbSAnLi4vLi4vLi4vRXhpdENvbXBvbmVudCc7XHJcblxyXG5jb25zdCBDYXNoRmxvd1BhZ2UgPSAoKSA9PiB7XHJcbiAgLy8gY29uc3Qgc2l6ZSA9IHVzZVdpbmRvd1NpemUoKTtcclxuICAvLyBjb25zb2xlLmxvZyhzaXplKTtcclxuICBjb25zdCBbcHJvamVjdE5hbWUsIHNldFByb2plY3ROYW1lXSA9IHVzZVN0YXRlKCcnKTtcclxuICBjb25zdCBbbWFpbkRvY3VtZW50LCBzZXRNYWluRG9jdW1lbnRdID0gdXNlU3RhdGUoJycpO1xyXG4gIGNvbnN0IFtwcm9qZWN0SWQsIHNldFByb2plY3RJZF0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgY29uc3QgW2RvY3VtZW50SWQsIHNldERvY3VtZW50SWRdID0gdXNlU3RhdGUoJycpO1xyXG4gIGNvbnN0IFtyZXZlbnVlRWxlbWVudHMsIHNldFJldmVudWVFbGVtZW50c10gPSB1c2VTdGF0ZSgpO1xyXG4gIGNvbnN0IFtjb3N0c0VsZW1lbnRzLCBzZXRDb3N0c0VsZW1lbnRzXSA9IHVzZVN0YXRlKCk7XHJcbiAgY29uc3QgW2J1ZGdldEVsZW1lbnRzLCBzZXRCdWRnZXRFbGVtZW50c10gPSB1c2VTdGF0ZSgpO1xyXG4gIGNvbnN0IGNoYXJ0UmVmID0gdXNlUmVmKCk7XHJcbiAgY29uc3QgW3BlcmlvZHMsIHNldFBlcmlvZHNdID0gdXNlU3RhdGUoKTtcclxuICBjb25zdCBbdGF4LCBzZXRUYXhdID0gdXNlU3RhdGUoKTtcclxuICAvLyBTdW0gZGF0YVxyXG4gIGNvbnN0IFt0b3RhbFJldmVudWUsIHNldFRvdGFsUmV2ZW51ZV0gPSB1c2VTdGF0ZSgpO1xyXG4gIGNvbnN0IFttb250aGx5UmV2ZW51ZSwgc2V0TW9udGhseVJldmVudWVdID0gdXNlU3RhdGUoKTtcclxuICBjb25zdCBbdG90YWxDb3N0cywgc2V0VG90YWxDb3N0c10gPSB1c2VTdGF0ZSgpO1xyXG4gIGNvbnN0IFttb250aGx5Q29zdHMsIHNldE1vbnRobHlDb3N0c10gPSB1c2VTdGF0ZSgpO1xyXG4gIGNvbnN0IFtncm9zc1Byb2ZpdCwgc2V0R3Jvc3NQcm9maXRdID0gdXNlU3RhdGUoKTtcclxuICBjb25zdCBbbmV0UHJvZml0LCBzZXROZXRQcm9maXRdID0gdXNlU3RhdGUoKTtcclxuICAvLyBNb2JpbGUgZnJpZW5kbHlcclxuICAvLyBjb25zdCBzaXplID0gdXNlV2luZG93U2l6ZSgpO1xyXG5cclxuICB1c2VFZmZlY3QoYXN5bmMgKCkgPT4ge1xyXG4gICAgY29uc3QgdXNlclVpZCA9IGF3YWl0IENvb2tpZXMuZ2V0KCd1aWQnKTtcclxuICAgIC8vIGNvbnNvbGUubG9nKFJvdXRlci5xdWVyeS5wcm9qZWN0KTtcclxuICAgIGlmICh1c2VyVWlkICYmIFJvdXRlci5xdWVyeS5wcm9qZWN0KSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKHVzZXJVaWQpO1xyXG4gICAgICBjb25zdCBkYXRhID0gYXdhaXQgZGIuY29sbGVjdGlvbigncHJvamVjdHMnKS53aGVyZSgndWlkJywgJz09JywgdXNlclVpZCk7XHJcbiAgICAgIGRhdGFcclxuICAgICAgICAud2hlcmUoJ3Byb2plY3ROYW1lJywgJz09JywgUm91dGVyLnF1ZXJ5LnByb2plY3QpXHJcbiAgICAgICAgLmdldCgpXHJcbiAgICAgICAgLnRoZW4oKHF1ZXJ5U25hcHNob3QpID0+IHtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKHF1ZXJ5U25hcHNob3QpO1xyXG4gICAgICAgICAgcXVlcnlTbmFwc2hvdC5mb3JFYWNoKGFzeW5jIChkb2MxKSA9PiB7XHJcbiAgICAgICAgICAgIHNldFByb2plY3RJZChkb2MxLmRhdGEoKS5wcm9qZWN0SWQpO1xyXG4gICAgICAgICAgICBzZXRQcm9qZWN0TmFtZShkb2MxLmRhdGEoKS5wcm9qZWN0TmFtZSk7XHJcblxyXG4gICAgICAgICAgICBhd2FpdCBkYlxyXG4gICAgICAgICAgICAgIC5jb2xsZWN0aW9uKCdwcm9qZWN0cycpXHJcbiAgICAgICAgICAgICAgLmRvYyhkb2MxLmRhdGEoKS5wcm9qZWN0SWQpXHJcbiAgICAgICAgICAgICAgLmNvbGxlY3Rpb24oJ2Nhc2hGbG93JylcclxuICAgICAgICAgICAgICAuZG9jKFJvdXRlci5xdWVyeS5wcm9qZWN0KVxyXG4gICAgICAgICAgICAgIC5jb2xsZWN0aW9uKCdpbnB1dHMnKVxyXG4gICAgICAgICAgICAgIC5vblNuYXBzaG90KChzZXJ2ZXJVcGRhdGUpID0+IHtcclxuICAgICAgICAgICAgICAgIHNlcnZlclVwZGF0ZS5kb2NzLm1hcCgoZG9jKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGRvYy5kYXRhKCkpO1xyXG4gICAgICAgICAgICAgICAgICBzZXRNYWluRG9jdW1lbnQoZG9jLmRhdGEoKSk7XHJcbiAgICAgICAgICAgICAgICAgIHNldERvY3VtZW50SWQoZG9jLmlkKTtcclxuICAgICAgICAgICAgICAgICAgc2V0UmV2ZW51ZUVsZW1lbnRzKGRvYy5kYXRhKCkucmV2ZW51ZUVsZW1lbnRzKTtcclxuICAgICAgICAgICAgICAgICAgc2V0Q29zdHNFbGVtZW50cyhkb2MuZGF0YSgpLmNvc3RzRWxlbWVudHMpO1xyXG4gICAgICAgICAgICAgICAgICBzZXRCdWRnZXRFbGVtZW50cyhkb2MuZGF0YSgpLmJ1ZGdldEVsZW1lbnRzKTtcclxuICAgICAgICAgICAgICAgICAgc2V0VGF4KGRvYy5kYXRhKCkudGF4KTtcclxuICAgICAgICAgICAgICAgICAgLy8gR2xvYmFsIHN0YXJ0IGRhdGVcclxuICAgICAgICAgICAgICAgICAgY29uc3QgY2hhbmdlZFN0YXJ0RGF0ZSA9IGRvYy5kYXRhKCkuZ2xvYmFsU3RhcnREYXRlLnNlY29uZHMgKiAxMDAwO1xyXG4gICAgICAgICAgICAgICAgICBkb2MuZGF0YSgpLmdsb2JhbFN0YXJ0RGF0ZSAhPT0gJycgJiYgc2V0U3RhcnREYXRlKG5ldyBEYXRlKGNoYW5nZWRTdGFydERhdGUpKTtcclxuICAgICAgICAgICAgICAgICAgY29uc3QgY2hhbmdlZEVuZERhdGUgPSBkb2MuZGF0YSgpLmdsb2JhbEVuZERhdGUuc2Vjb25kcyAqIDEwMDA7XHJcbiAgICAgICAgICAgICAgICAgIC8vIEdsb2JhbCBlbmQgZGF0ZVxyXG4gICAgICAgICAgICAgICAgICBkb2MuZGF0YSgpLmdsb2JhbEVuZERhdGUgIT09ICcnICYmIHNldEVuZERhdGUobmV3IERhdGUoY2hhbmdlZEVuZERhdGUpKTtcclxuICAgICAgICAgICAgICAgICAgLy8gUGVyaW9kc1xyXG4gICAgICAgICAgICAgICAgICBzZXRQZXJpb2RzKGRvYy5kYXRhKCkucGVyaW9kcyk7XHJcbiAgICAgICAgICAgICAgICAgIC8vIFRvdGFsIHJldmVudWVcclxuICAgICAgICAgICAgICAgICAgY29uc3QgdG90YWxSZXZlbnVlQXJyYXkgPSBkb2MuZGF0YSgpLnJldmVudWVFbGVtZW50cy5tYXAoKGVsZW1lbnQpID0+IHBhcnNlSW50KGVsZW1lbnQudmFsdWUgKiBlbGVtZW50LnBlcmlvZHMubGVuZ3RoKSk7XHJcbiAgICAgICAgICAgICAgICAgIGNvbnN0IHRvdGFsUmV2ZW51ZSA9IHRvdGFsUmV2ZW51ZUFycmF5LnJlZHVjZSgoYSwgYikgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBhICsgYjtcclxuICAgICAgICAgICAgICAgICAgfSwgMCk7XHJcbiAgICAgICAgICAgICAgICAgIHNldFRvdGFsUmV2ZW51ZShOdW1iZXIuaXNOYU4odG90YWxSZXZlbnVlKSA/IDAgOiBNYXRoLnJvdW5kKHRvdGFsUmV2ZW51ZSkpO1xyXG4gICAgICAgICAgICAgICAgICAvLyBNb250aGx5IHJldmVudWVcclxuICAgICAgICAgICAgICAgICAgY29uc3QgcGVyaW9kTGVuZ3RoID0gZG9jLmRhdGEoKS5wZXJpb2RzLmxlbmd0aDtcclxuICAgICAgICAgICAgICAgICAgY29uc3QgbW9udGhseVJldmVudWUgPSB0b3RhbFJldmVudWUgLyBwZXJpb2RMZW5ndGg7XHJcbiAgICAgICAgICAgICAgICAgIHNldE1vbnRobHlSZXZlbnVlKE51bWJlci5pc05hTihtb250aGx5UmV2ZW51ZSkgPyAwIDogTWF0aC5yb3VuZChtb250aGx5UmV2ZW51ZSkpO1xyXG4gICAgICAgICAgICAgICAgICAvLyBUb3RhbCBjb3N0c1xyXG4gICAgICAgICAgICAgICAgICBjb25zdCB0b3RhbENvc3RzQXJyYXkgPSBkb2MuZGF0YSgpLmNvc3RzRWxlbWVudHMubWFwKChlbGVtZW50KSA9PiBwYXJzZUludChlbGVtZW50LnZhbHVlICogZWxlbWVudC5wZXJpb2RzLmxlbmd0aCkpO1xyXG4gICAgICAgICAgICAgICAgICBjb25zdCB0b3RhbENvc3RzID0gdG90YWxDb3N0c0FycmF5LnJlZHVjZSgoYSwgYikgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBhICsgYjtcclxuICAgICAgICAgICAgICAgICAgfSwgMCk7XHJcbiAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHRvdGFsQ29zdHMpO1xyXG4gICAgICAgICAgICAgICAgICAvLyBjb25zdCBmaWx0ZXJlZFRvdGFsQ29zdHMgPVxyXG4gICAgICAgICAgICAgICAgICAvLyAgIHR5cGVvZiB0b3RhbENvc3RzID09ICdudW1iZXInID8gTWF0aC5yb3VuZCh0b3RhbENvc3RzKSA6IDA7XHJcbiAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGZpbHRlcmVkVG90YWxDb3N0cyk7XHJcbiAgICAgICAgICAgICAgICAgIHNldFRvdGFsQ29zdHMoTnVtYmVyLmlzRmluaXRlKHRvdGFsQ29zdHMpID8gTWF0aC5yb3VuZCh0b3RhbENvc3RzKSA6IDApO1xyXG4gICAgICAgICAgICAgICAgICAvLyBNb250aGx5IGNvc3RzXHJcbiAgICAgICAgICAgICAgICAgIGNvbnN0IG1vbnRobHlDb3N0cyA9IHRvdGFsQ29zdHMgLyBwZXJpb2RMZW5ndGg7XHJcbiAgICAgICAgICAgICAgICAgIHNldE1vbnRobHlDb3N0cyhOdW1iZXIuaXNGaW5pdGUobW9udGhseUNvc3RzKSA/IE1hdGgucm91bmQobW9udGhseUNvc3RzKSA6IDApO1xyXG4gICAgICAgICAgICAgICAgICAvLyBHcm9zcyBwcm9maXRcclxuICAgICAgICAgICAgICAgICAgY29uc3QgZ3Jvc3NQcm9maXQgPSB0b3RhbFJldmVudWUgLSB0b3RhbENvc3RzO1xyXG4gICAgICAgICAgICAgICAgICBzZXRHcm9zc1Byb2ZpdChOdW1iZXIuaXNGaW5pdGUoZ3Jvc3NQcm9maXQpID8gTWF0aC5yb3VuZChncm9zc1Byb2ZpdCkgOiAwKTtcclxuICAgICAgICAgICAgICAgICAgLy8gTmV0IHByb2ZpdFxyXG4gICAgICAgICAgICAgICAgICBjb25zdCB0YXggPSBwYXJzZUludChkb2MuZGF0YSgpLnRheCk7XHJcbiAgICAgICAgICAgICAgICAgIGNvbnN0IG5ldFByb2ZpdCA9IGdyb3NzUHJvZml0IC0gKHRheCAvIDEwMCkgKiBncm9zc1Byb2ZpdDtcclxuICAgICAgICAgICAgICAgICAgc2V0TmV0UHJvZml0KE51bWJlci5pc0Zpbml0ZShuZXRQcm9maXQpID8gTWF0aC5yb3VuZChuZXRQcm9maXQpIDogMCk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH0sIFtSb3V0ZXIucXVlcnkucHJvamVjdF0pO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgLy8gY29uc3QgbXlDaGFydFJlZiA9IGNoYXJ0UmVmLmN1cnJlbnQuZ2V0Q29udGV4dCgnMmQnKTtcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGBjaGFydENvbnRhaW5lcmApLmlubmVySFRNTCA9ICcmbmJzcDsnO1xyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYGNoYXJ0Q29udGFpbmVyYCkuaW5uZXJIVE1MID0gYDxjYW52YXMgaGVpZ2h0PScke3NpemUud2lkdGggPiA2ODAgPyA3NSA6ICd1bnNldCd9JyBpZD0nY2hhcnQnPjwvY2FudmFzPmA7XHJcbiAgICBjb25zdCBteUNoYXJ0UmVmID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NoYXJ0JykuZ2V0Q29udGV4dCgnMmQnKTtcclxuXHJcbiAgICAvLyBSZXZlbnVlIGRhdGFzZXRzXHJcbiAgICBjb25zdCByZXZlbnVlRGF0YXNldCA9IFtdO1xyXG4gICAgY29uc3QgdGVzdEFycmF5ID0gW107XHJcbiAgICAvLyBjb25zdCBtb250aERhdGEgPSBwZXJpb2RzICYmIHBlcmlvZHMubWFwKCgpID0+IG51bGwpO1xyXG4gICAgcmV2ZW51ZUVsZW1lbnRzICYmXHJcbiAgICAgIHJldmVudWVFbGVtZW50cy5tYXAoKHJldmVudWVFbGVtZW50LCBpbmRleCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IG1vbnRoRGF0YSA9IHBlcmlvZHMgJiYgcGVyaW9kcy5tYXAoKCkgPT4gbnVsbCk7XHJcbiAgICAgICAgY29uc29sZS5sb2cocmV2ZW51ZUVsZW1lbnQpO1xyXG4gICAgICAgIHBlcmlvZHMgJiZcclxuICAgICAgICAgIHBlcmlvZHMubWFwKChwZXJpb2QsIHBlcmlvZEluZGV4KSA9PiB7XHJcbiAgICAgICAgICAgIHJldmVudWVFbGVtZW50LnBlcmlvZHMubWFwKChyZXZlbnVlUGVyaW9kKSA9PiB7XHJcbiAgICAgICAgICAgICAgaWYgKHBlcmlvZCA9PSByZXZlbnVlUGVyaW9kKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAobW9udGhEYXRhW3BlcmlvZEluZGV4XSA9PSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICAgIG1vbnRoRGF0YVtwZXJpb2RJbmRleF0gPSByZXZlbnVlRWxlbWVudC52YWx1ZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgY29uc29sZS5sb2cobW9udGhEYXRhKTtcclxuICAgICAgICB0ZXN0QXJyYXkucHVzaChtb250aERhdGEpO1xyXG4gICAgICAgIHJldmVudWVEYXRhc2V0LnB1c2goe1xyXG4gICAgICAgICAgbGFiZWw6IGByZXZlbnVlIC8gJHtyZXZlbnVlRWxlbWVudC50aXRsZX1gLFxyXG4gICAgICAgICAgZGF0YTogbW9udGhEYXRhLFxyXG4gICAgICAgICAgYmFja2dyb3VuZENvbG9yOiByZXZlbnVlRWxlbWVudC5jb2xvcixcclxuICAgICAgICAgIGJvcmRlckNvbG9yOiByZXZlbnVlRWxlbWVudC5jb2xvcixcclxuICAgICAgICB9KTtcclxuICAgICAgfSk7XHJcblxyXG4gICAgLy8gQ29zdHMgZGF0YXNldHNcclxuICAgIGNvbnN0IGNvc3RzRGF0YXNldCA9IFtdO1xyXG4gICAgLy8gY29uc3QgdGVzdEFycmF5ID0gW107XHJcbiAgICAvLyBjb25zdCBtb250aERhdGEgPSBwZXJpb2RzICYmIHBlcmlvZHMubWFwKCgpID0+IG51bGwpO1xyXG4gICAgY29zdHNFbGVtZW50cyAmJlxyXG4gICAgICBjb3N0c0VsZW1lbnRzLm1hcCgoY29zdHNFbGVtZW50LCBpbmRleCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IG1vbnRoRGF0YSA9IHBlcmlvZHMgJiYgcGVyaW9kcy5tYXAoKCkgPT4gbnVsbCk7XHJcbiAgICAgICAgY29uc29sZS5sb2coY29zdHNFbGVtZW50KTtcclxuICAgICAgICBwZXJpb2RzICYmXHJcbiAgICAgICAgICBwZXJpb2RzLm1hcCgocGVyaW9kLCBwZXJpb2RJbmRleCkgPT4ge1xyXG4gICAgICAgICAgICBjb3N0c0VsZW1lbnQucGVyaW9kcy5tYXAoKGNvc3RzUGVyaW9kKSA9PiB7XHJcbiAgICAgICAgICAgICAgaWYgKHBlcmlvZCA9PSBjb3N0c1BlcmlvZCkge1xyXG4gICAgICAgICAgICAgICAgaWYgKG1vbnRoRGF0YVtwZXJpb2RJbmRleF0gPT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgICBtb250aERhdGFbcGVyaW9kSW5kZXhdID0gLWNvc3RzRWxlbWVudC52YWx1ZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgY29uc29sZS5sb2cobW9udGhEYXRhKTtcclxuICAgICAgICB0ZXN0QXJyYXkucHVzaChtb250aERhdGEpO1xyXG4gICAgICAgIGNvc3RzRGF0YXNldC5wdXNoKHtcclxuICAgICAgICAgIGxhYmVsOiBgY29zdHMgLyAke2Nvc3RzRWxlbWVudC50aXRsZX1gLFxyXG4gICAgICAgICAgZGF0YTogbW9udGhEYXRhLFxyXG4gICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBjb3N0c0VsZW1lbnQuY29sb3IsXHJcbiAgICAgICAgICBib3JkZXJDb2xvcjogY29zdHNFbGVtZW50LmNvbG9yLFxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9KTtcclxuICAgIC8vIE5ldCB3b3J0aFxyXG4gICAgY29uc29sZS5sb2cocmV2ZW51ZURhdGFzZXQpO1xyXG4gICAgY29uc29sZS5sb2coY29zdHNEYXRhc2V0KTtcclxuICAgIC8vIGNvbnN0IG5ldFdvcnRoID1cclxuICAgIC8vICAgcmV2ZW51ZURhdGFzZXQubGVuZ3RoICE9PSAwICYmXHJcbiAgICAvLyAgIGNvc3RzRGF0YXNldC5sZW5ndGggIT09IDAgJiZcclxuICAgIC8vICAgcmV2ZW51ZURhdGFzZXRbMF0uZGF0YSAmJlxyXG4gICAgLy8gICByZXZlbnVlRGF0YXNldFswXS5kYXRhLm1hcCgocmV2ZW51ZUVsZW1lbnQsIGluZGV4KSA9PiB7XHJcbiAgICAvLyAgICAgaWYgKHJldmVudWVFbGVtZW50ICE9PSBudWxsICYmIGNvc3RzRGF0YXNldFswXS5kYXRhW2luZGV4XSAhPT0gbnVsbCkge1xyXG4gICAgLy8gICAgICAgY29uc3QgZ3Jvc3NQcm9maXQgPSByZXZlbnVlRWxlbWVudCAtIC1jb3N0c0RhdGFzZXRbMF0uZGF0YVtpbmRleF07XHJcbiAgICAvLyAgICAgICByZXR1cm4gZ3Jvc3NQcm9maXQgLSAodGF4IC8gMTAwKSAqIGdyb3NzUHJvZml0O1xyXG4gICAgLy8gICAgIH0gZWxzZSBpZiAocmV2ZW51ZUVsZW1lbnQgIT09IG51bGwpIHtcclxuICAgIC8vICAgICAgIHJldHVybiByZXZlbnVlRWxlbWVudCAtICh0YXggLyAxMDApICogcmV2ZW51ZUVsZW1lbnQ7XHJcbiAgICAvLyAgICAgfSBlbHNlIGlmIChjb3N0c0RhdGFzZXRbMF0uZGF0YVtpbmRleF0gIT09IG51bGwpIHtcclxuICAgIC8vICAgICAgIHJldHVybiBjb3N0c0RhdGFzZXRbMF0uZGF0YVtpbmRleF07XHJcbiAgICAvLyAgICAgfSBlbHNlIHtcclxuICAgIC8vICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgLy8gICAgIH1cclxuICAgIC8vICAgfSk7XHJcbiAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgICAvLyBSZXZlbnVlXHJcbiAgICBjb25zdCByZXZlbnVlQXJyYXkgPSBbXTtcclxuICAgIHJldmVudWVEYXRhc2V0Lmxlbmd0aCAhPT0gMCAmJlxyXG4gICAgICByZXZlbnVlRGF0YXNldC5sZW5ndGggIT09IDAgJiZcclxuICAgICAgcmV2ZW51ZURhdGFzZXQubWFwKChlbGVtZW50KSA9PlxyXG4gICAgICAgIHJldmVudWVBcnJheS5wdXNoKFxyXG4gICAgICAgICAgZWxlbWVudC5kYXRhICYmXHJcbiAgICAgICAgICAgIGVsZW1lbnQuZGF0YS5tYXAoKGRhdGEpID0+IHtcclxuICAgICAgICAgICAgICBpZiAoZGF0YSAhPT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHBhcnNlSW50KGRhdGEpO1xyXG4gICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gMDtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgKVxyXG4gICAgICApO1xyXG4gICAgY29uc29sZS5sb2cocmV2ZW51ZUFycmF5KTtcclxuICAgIGNvbnN0IGNhbGN1bGF0ZWRSZXZlbnVlQXJyYXkgPVxyXG4gICAgICByZXZlbnVlQXJyYXkubGVuZ3RoICE9PSAwICYmIHJldmVudWVBcnJheVswXSAhPT0gdW5kZWZpbmVkICYmIHJldmVudWVBcnJheS5yZWR1Y2UoKGEsIGIpID0+IGEubWFwKChjLCBpKSA9PiBjICsgYltpXSkpO1xyXG4gICAgY29uc29sZS5sb2coY2FsY3VsYXRlZFJldmVudWVBcnJheSk7XHJcbiAgICAvLyBDb3N0c1xyXG4gICAgY29uc3QgY29zdHNBcnJheSA9IFtdO1xyXG4gICAgY29uc29sZS5sb2coY29zdHNEYXRhc2V0KTtcclxuICAgIGNvc3RzRGF0YXNldC5sZW5ndGggIT09IDAgJiZcclxuICAgICAgY29zdHNEYXRhc2V0Lmxlbmd0aCAhPT0gMCAmJlxyXG4gICAgICBjb3N0c0RhdGFzZXQubWFwKChlbGVtZW50KSA9PlxyXG4gICAgICAgIGNvc3RzQXJyYXkucHVzaChcclxuICAgICAgICAgIGVsZW1lbnQuZGF0YSAmJlxyXG4gICAgICAgICAgICBlbGVtZW50LmRhdGEubWFwKChkYXRhKSA9PiB7XHJcbiAgICAgICAgICAgICAgaWYgKGRhdGEgIT09IG51bGwpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBwYXJzZUludChkYXRhKTtcclxuICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIDA7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIClcclxuICAgICAgKTtcclxuICAgIGNvbnNvbGUubG9nKGNvc3RzQXJyYXkpO1xyXG4gICAgY29uc3QgY2FsY3VsYXRlZENvc3RzQXJyYXkgPVxyXG4gICAgICBjb3N0c0FycmF5Lmxlbmd0aCAhPT0gMCAmJiBjb3N0c0FycmF5WzBdICE9PSB1bmRlZmluZWQgJiYgY29zdHNBcnJheS5yZWR1Y2UoKGEsIGIpID0+IGEubWFwKChjLCBpKSA9PiBjICsgYltpXSkpO1xyXG4gICAgY29uc29sZS5sb2coY2FsY3VsYXRlZENvc3RzQXJyYXkpO1xyXG4gICAgLy8gRmluYWwgdmFsdWVcclxuICAgIGNvbnN0IGZpbmFsQXJyYXkgPSBbY2FsY3VsYXRlZFJldmVudWVBcnJheSwgY2FsY3VsYXRlZENvc3RzQXJyYXldO1xyXG4gICAgY29uc29sZS5sb2coZmluYWxBcnJheSk7XHJcbiAgICAvLyBDaGVjayBpZiBhbnkgYXJyYXkgaXMgZmFsc3lcclxuICAgIGNvbnN0IGNhbGN1bGF0ZWRGaW5hbEFycmF5ID1cclxuICAgICAgZmluYWxBcnJheSAmJlxyXG4gICAgICBmaW5hbEFycmF5Lm1hcCgoYXJyYXkpID0+IHtcclxuICAgICAgICBpZiAoIWFycmF5KSB7XHJcbiAgICAgICAgICBjb25zdCB6ZXJvQXJyYXkgPSBbXTtcclxuICAgICAgICAgIHBlcmlvZHMgJiYgcGVyaW9kcy5tYXAoKHBlcmlvZCkgPT4gemVyb0FycmF5LnB1c2goMCkpO1xyXG4gICAgICAgICAgcmV0dXJuIHplcm9BcnJheTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgcmV0dXJuIGFycmF5O1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICBjb25zb2xlLmxvZyhjYWxjdWxhdGVkRmluYWxBcnJheSk7XHJcbiAgICBjb25zdCBmaW5hbERhdGFCZWZvcmVUYXggPVxyXG4gICAgICBjYWxjdWxhdGVkRmluYWxBcnJheS5sZW5ndGggIT09IDAgJiYgY2FsY3VsYXRlZEZpbmFsQXJyYXkucmVkdWNlKChhLCBiKSA9PiBhICYmIGIgJiYgYS5tYXAoKGMsIGkpID0+IGMgKyBiW2ldKSk7XHJcbiAgICBjb25zdCBmaW5hbERhdGFBZnRlclRheCA9IGZpbmFsRGF0YUJlZm9yZVRheCAmJiBmaW5hbERhdGFCZWZvcmVUYXgubWFwKChkYXRhKSA9PiBkYXRhIC0gKHRheCAvIDEwMCkgKiBkYXRhKTtcclxuICAgIGNvbnNvbGUubG9nKGZpbmFsRGF0YUFmdGVyVGF4KTtcclxuXHJcbiAgICBjb25zdCBuZXRXb3J0aEFycmF5ID0gW107XHJcbiAgICBjb25zdCBuZXRXb3J0aCA9XHJcbiAgICAgIHJldmVudWVEYXRhc2V0Lmxlbmd0aCAhPT0gMCAmJlxyXG4gICAgICBjb3N0c0RhdGFzZXQubGVuZ3RoICE9PSAwICYmXHJcbiAgICAgIHJldmVudWVEYXRhc2V0ICYmXHJcbiAgICAgIHJldmVudWVEYXRhc2V0Lm1hcCgocmV2ZW51ZUVsZW1lbnQsIGluZGV4KSA9PiB7XHJcbiAgICAgICAgY29uc3QgdmFsdWUgPVxyXG4gICAgICAgICAgcmV2ZW51ZUVsZW1lbnQuZGF0YSAmJlxyXG4gICAgICAgICAgcmV2ZW51ZUVsZW1lbnQuZGF0YS5tYXAoKGRhdGFFbGVtZW50LCByZXZlbnVlRWxlbWVudEluZGV4KSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGRhdGFFbGVtZW50KTtcclxuICAgICAgICAgICAgaWYgKGRhdGFFbGVtZW50ICE9PSBudWxsICYmIGNvc3RzRGF0YXNldFtpbmRleF0pIHtcclxuICAgICAgICAgICAgICBpZiAoY29zdHNEYXRhc2V0W2luZGV4XS5kYXRhW3JldmVudWVFbGVtZW50SW5kZXhdKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBncm9zc1Byb2ZpdCA9IGRhdGFFbGVtZW50IC0gLWNvc3RzRGF0YXNldFswXS5kYXRhW3JldmVudWVFbGVtZW50SW5kZXhdO1xyXG4gICAgICAgICAgICAgICAgbmV0V29ydGhBcnJheS5wdXNoKGdyb3NzUHJvZml0IC0gKHRheCAvIDEwMCkgKiBncm9zc1Byb2ZpdCk7XHJcbiAgICAgICAgICAgICAgICAvLyByZXR1cm4gZ3Jvc3NQcm9maXQgLSAodGF4IC8gMTAwKSAqIGdyb3NzUHJvZml0O1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgcmV0dXJuIHZhbHVlO1xyXG4gICAgICB9KTtcclxuICAgIGNvbnNvbGUubG9nKG5ldFdvcnRoQXJyYXkpO1xyXG5cclxuICAgIG5ldyBDaGFydChteUNoYXJ0UmVmLCB7XHJcbiAgICAgIHR5cGU6ICdiYXInLFxyXG4gICAgICBkYXRhOiB7XHJcbiAgICAgICAgbGFiZWxzOiBwZXJpb2RzICYmIHBlcmlvZHMsXHJcbiAgICAgICAgZGF0YXNldHM6IFtcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgdHlwZTogJ2xpbmUnLFxyXG4gICAgICAgICAgICBsYWJlbDogJ05ldCBwcm9maXQnLFxyXG4gICAgICAgICAgICBkYXRhOiBmaW5hbERhdGFBZnRlclRheCxcclxuICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiAncmdiYSgxMCwgMTgsIDQ4LCAxKScsXHJcbiAgICAgICAgICAgIGJvcmRlckNvbG9yOiAncmdiYSgxMCwgMTgsIDQ4LCAxKScsXHJcbiAgICAgICAgICAgIGZpbGw6IDAsXHJcbiAgICAgICAgICAgIGxpbmVUZW5zaW9uOiAwLFxyXG4gICAgICAgICAgICBib3JkZXJXaWR0aDogc2l6ZS53aWR0aCA8IDY4MCA/IDEgOiAzLFxyXG4gICAgICAgICAgICBwb2ludFJhZGl1czogc2l6ZS53aWR0aCA8IDY4MCA/IDIgOiAzLFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIC4uLnJldmVudWVEYXRhc2V0LFxyXG4gICAgICAgICAgLi4uY29zdHNEYXRhc2V0LFxyXG4gICAgICAgIF0sXHJcbiAgICAgIH0sXHJcbiAgICAgIG9wdGlvbnM6IHtcclxuICAgICAgICBza2lwTnVsbDogdHJ1ZSxcclxuICAgICAgICByZXNwb25zaXZlOiB0cnVlLFxyXG4gICAgICAgIHBsdWdpbnM6IHtcclxuICAgICAgICAgIGxlZ2VuZDoge1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogJ3JpZ2h0JyxcclxuICAgICAgICAgICAgbGFiZWxzOiB7XHJcbiAgICAgICAgICAgICAgZm9udEZhbWlseTogJ0NvbWZvcnRhYScsXHJcbiAgICAgICAgICAgICAgZm9udDoge1xyXG4gICAgICAgICAgICAgICAgc2l6ZTogc2l6ZS53aWR0aCA8IDY4MCA/IDggOiAxMixcclxuICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgIGJveFdpZHRoOiBzaXplLndpZHRoIDwgNjgwID8gMTAgOiA0MCxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgfSxcclxuICAgICAgICBzY2FsZXM6IHtcclxuICAgICAgICAgIHg6IHtcclxuICAgICAgICAgICAgc3RhY2tlZDogdHJ1ZSxcclxuICAgICAgICAgICAgdGlja3M6IHtcclxuICAgICAgICAgICAgICBmb250RmFtaWx5OiAnQ29tZm9ydGFhJyxcclxuICAgICAgICAgICAgICBiZWdpbkF0WmVybzogdHJ1ZSxcclxuICAgICAgICAgICAgICBmb250OiB7XHJcbiAgICAgICAgICAgICAgICBzaXplOiBzaXplLndpZHRoIDwgNjgwID8gOCA6IDEyLFxyXG4gICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIC8vIGJlZ2luQXRaZXJvOiB0cnVlLFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIHk6IHtcclxuICAgICAgICAgICAgc3RhY2tlZDogdHJ1ZSxcclxuICAgICAgICAgICAgdGlja3M6IHtcclxuICAgICAgICAgICAgICBmb250RmFtaWx5OiAnQ29tZm9ydGFhJyxcclxuICAgICAgICAgICAgICBiZWdpbkF0WmVybzogdHJ1ZSxcclxuICAgICAgICAgICAgICBmb250OiB7XHJcbiAgICAgICAgICAgICAgICBzaXplOiBzaXplLndpZHRoIDwgNjgwID8gOCA6IDEyLFxyXG4gICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIC8vIGJlZ2luQXRaZXJvOiB0cnVlLFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIC8vICAgZGVmYXVsdEZvbnRGYW1pbHk6IChDaGFydC5kZWZhdWx0cy5nbG9iYWwuZGVmYXVsdEZvbnRGYW1pbHkgPVxyXG4gICAgICAgICAgLy8gICAgICdDb21mb3J0YWEnKSxcclxuICAgICAgICAgIC8vICAgc2NhbGVzOiB7XHJcbiAgICAgICAgICAvLyAgICAgeUF4ZXM6IFtcclxuICAgICAgICAgIC8vICAgICAgICAge1xyXG4gICAgICAgICAgLy8gICAgICAgICAgIHN0YWNrZWQ6IHRydWUsXHJcbiAgICAgICAgICAvLyAgICAgICAgICAgdGlja3M6IHtcclxuICAgICAgICAgIC8vICAgICAgICAgICAgIGJlZ2luQXRaZXJvOiB0cnVlLFxyXG4gICAgICAgICAgLy8gICAgICAgICAgIH0sXHJcbiAgICAgICAgICAvLyAgICAgICAgIH0sXHJcbiAgICAgICAgICAvLyAgICAgICBdLFxyXG4gICAgICAgICAgLy8gICAgICAgeEF4ZXM6IFtcclxuICAgICAgICAgIC8vICAgICAgICAge1xyXG4gICAgICAgICAgLy8gICAgICAgICAgIHN0YWNrZWQ6IHRydWUsXHJcbiAgICAgICAgICAvLyAgICAgICAgICAgdGlja3M6IHtcclxuICAgICAgICAgIC8vICAgICAgICAgICAgIGJlZ2luQXRaZXJvOiB0cnVlLFxyXG4gICAgICAgICAgLy8gICAgICAgICAgIH0sXHJcbiAgICAgICAgICAvLyAgICAgICAgIH0sXHJcbiAgICAgICAgICAvLyAgICAgICBdLFxyXG4gICAgICAgICAgLy8gICB9LFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0sXHJcbiAgICB9KTtcclxuICB9LCBbcGVyaW9kcywgcmV2ZW51ZUVsZW1lbnRzLCBjb3N0c0VsZW1lbnRzLCB0YXhdKTtcclxuXHJcbiAgY29uc3Qgb25SZXZlbnVlRWxlbWVudEFkZCA9IGFzeW5jICgpID0+IHtcclxuICAgIGNvbnNvbGUubG9nKHJldmVudWVFbGVtZW50cyk7XHJcbiAgICBjb25zdCB3aG9sZUFycmF5ID0gWy4uLnJldmVudWVFbGVtZW50c107XHJcbiAgICBjb25zdCBuZXdSZXZlbnVlRWxlbWVudHMgPSB7XHJcbiAgICAgIHRpdGxlOiAnJyxcclxuICAgICAgdHlwZTogJ09uZSB0aW1lJyxcclxuICAgICAgc3RhcnQ6IG5ldyBEYXRlKCksXHJcbiAgICAgIGVuZDogbmV3IERhdGUoKSxcclxuICAgICAgdmFsdWU6ICcnLFxyXG4gICAgICBwZXJpb2RzOiBbXSxcclxuICAgICAgY29sb3I6ICdyZ2JhKDI0NCwgNjcsIDU0LCAxKScsXHJcbiAgICAgIGluZGV4OiB1dWlkdjQoKSxcclxuICAgIH07XHJcbiAgICB3aG9sZUFycmF5LnB1c2gobmV3UmV2ZW51ZUVsZW1lbnRzKTtcclxuICAgIGNvbnNvbGUubG9nKHdob2xlQXJyYXkpO1xyXG4gICAgc2V0UmV2ZW51ZUVsZW1lbnRzKHdob2xlQXJyYXkpO1xyXG5cclxuICAgIGF3YWl0IGRiXHJcbiAgICAgIC5jb2xsZWN0aW9uKCdwcm9qZWN0cycpXHJcbiAgICAgIC5kb2MocHJvamVjdElkKVxyXG4gICAgICAuY29sbGVjdGlvbignY2FzaEZsb3cnKVxyXG4gICAgICAuZG9jKFJvdXRlci5xdWVyeS5wcm9qZWN0KVxyXG4gICAgICAuY29sbGVjdGlvbignaW5wdXRzJylcclxuICAgICAgLmRvYyhkb2N1bWVudElkKVxyXG4gICAgICAudXBkYXRlKHsgcmV2ZW51ZUVsZW1lbnRzOiB3aG9sZUFycmF5IH0pO1xyXG4gIH07XHJcblxyXG4gIC8vIENvc3RzXHJcbiAgY29uc3Qgb25Db3N0c0VsZW1lbnRBZGQgPSBhc3luYyAoKSA9PiB7XHJcbiAgICBjb25zb2xlLmxvZyhjb3N0c0VsZW1lbnRzKTtcclxuICAgIGNvbnN0IHdob2xlQXJyYXkgPSBbLi4uY29zdHNFbGVtZW50c107XHJcbiAgICBjb25zdCBuZXdDb3N0c0VsZW1lbnRzID0ge1xyXG4gICAgICB0aXRsZTogJycsXHJcbiAgICAgIHR5cGU6ICdPbmUgdGltZScsXHJcbiAgICAgIHN0YXJ0OiBuZXcgRGF0ZSgpLFxyXG4gICAgICBlbmQ6IG5ldyBEYXRlKCksXHJcbiAgICAgIHZhbHVlOiAnJyxcclxuICAgICAgcGVyaW9kczogW10sXHJcbiAgICAgIGNvbG9yOiAncmdiYSgyNDQsIDY3LCA1NCwgMSknLFxyXG4gICAgICBpbmRleDogdXVpZHY0KCksXHJcbiAgICB9O1xyXG4gICAgd2hvbGVBcnJheS5wdXNoKG5ld0Nvc3RzRWxlbWVudHMpO1xyXG4gICAgY29uc29sZS5sb2cod2hvbGVBcnJheSk7XHJcbiAgICBzZXRDb3N0c0VsZW1lbnRzKHdob2xlQXJyYXkpO1xyXG5cclxuICAgIGF3YWl0IGRiXHJcbiAgICAgIC5jb2xsZWN0aW9uKCdwcm9qZWN0cycpXHJcbiAgICAgIC5kb2MocHJvamVjdElkKVxyXG4gICAgICAuY29sbGVjdGlvbignY2FzaEZsb3cnKVxyXG4gICAgICAuZG9jKFJvdXRlci5xdWVyeS5wcm9qZWN0KVxyXG4gICAgICAuY29sbGVjdGlvbignaW5wdXRzJylcclxuICAgICAgLmRvYyhkb2N1bWVudElkKVxyXG4gICAgICAudXBkYXRlKHsgY29zdHNFbGVtZW50czogd2hvbGVBcnJheSB9KTtcclxuICB9O1xyXG5cclxuICBjb25zdCBbc3RhcnREYXRlLCBzZXRTdGFydERhdGVdID0gdXNlU3RhdGUobmV3IERhdGUoKSk7XHJcbiAgY29uc3QgW2VuZERhdGUsIHNldEVuZERhdGVdID0gdXNlU3RhdGUobmV3IERhdGUoKSk7XHJcblxyXG4gIGNvbnN0IG9uU3RhcnREYXRlVXBkYXRlID0gYXN5bmMgKGRhdGUpID0+IHtcclxuICAgIGNvbnNvbGUubG9nKGRhdGUpO1xyXG4gICAgc2V0U3RhcnREYXRlKGRhdGUpO1xyXG4gICAgLy8gR2V0IG1vbnRoc1xyXG4gICAgY29uc3QgbmV3U3RhcnREYXRlID0gZm9ybWF0KGRhdGUsICd5eXl5LU1NLWRkJyk7XHJcbiAgICBjb25zdCBuZXdFbmREYXRlID0gZm9ybWF0KGVuZERhdGUsICd5eXl5LU1NLWRkJyk7XHJcblxyXG4gICAgY29uc3Qgc3RhcnREYXRlciA9IG1vbWVudChuZXdTdGFydERhdGUpO1xyXG4gICAgY29uc3QgZW5kRGF0ZXIgPSBtb21lbnQobmV3RW5kRGF0ZSk7XHJcblxyXG4gICAgY29uc3QgZGF0ZXMgPSBbXTtcclxuICAgIHN0YXJ0RGF0ZXIuc3VidHJhY3QoMSwgJ21vbnRoJyk7IC8vU3Vic3RyYWN0IG9uZSBtb250aCB0byBleGNsdWRlIGVuZERhdGVyIGl0c2VsZlxyXG5cclxuICAgIGNvbnN0IG1vbnRoID0gbW9tZW50KHN0YXJ0RGF0ZXIpOyAvL2Nsb25lIHRoZSBzdGFydERhdGVcclxuICAgIHdoaWxlIChtb250aCA8IGVuZERhdGVyKSB7XHJcbiAgICAgIG1vbnRoLmFkZCgxLCAnbW9udGgnKTtcclxuICAgICAgZGF0ZXMucHVzaChtb250aC5mb3JtYXQoJ01NTSB5eXl5JykpO1xyXG4gICAgfVxyXG4gICAgLy8gTG9jYWwgdXBkYXRlXHJcbiAgICBzZXRQZXJpb2RzKGRhdGVzKTtcclxuICAgIC8vIEZpcmViYXNlIHVwZGF0ZVxyXG4gICAgYXdhaXQgZGJcclxuICAgICAgLmNvbGxlY3Rpb24oJ3Byb2plY3RzJylcclxuICAgICAgLmRvYyhwcm9qZWN0SWQpXHJcbiAgICAgIC5jb2xsZWN0aW9uKCdjYXNoRmxvdycpXHJcbiAgICAgIC5kb2MoUm91dGVyLnF1ZXJ5LnByb2plY3QpXHJcbiAgICAgIC5jb2xsZWN0aW9uKCdpbnB1dHMnKVxyXG4gICAgICAuZG9jKGRvY3VtZW50SWQpXHJcbiAgICAgIC51cGRhdGUoeyBwZXJpb2RzOiBkYXRlcywgZ2xvYmFsU3RhcnREYXRlOiBkYXRlIH0pO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IG9uRW5kRGF0ZVVwZGF0ZSA9IGFzeW5jIChkYXRlKSA9PiB7XHJcbiAgICBzZXRFbmREYXRlKGRhdGUpO1xyXG4gICAgLy8gR2V0IG1vbnRoc1xyXG4gICAgY29uc3QgbmV3U3RhcnREYXRlID0gZm9ybWF0KHN0YXJ0RGF0ZSwgJ3l5eXktTU0tZGQnKTtcclxuICAgIGNvbnN0IG5ld0VuZERhdGUgPSBmb3JtYXQoZGF0ZSwgJ3l5eXktTU0tZGQnKTtcclxuXHJcbiAgICBjb25zdCBzdGFydERhdGVyID0gbW9tZW50KG5ld1N0YXJ0RGF0ZSk7XHJcbiAgICBjb25zdCBlbmREYXRlciA9IG1vbWVudChuZXdFbmREYXRlKTtcclxuXHJcbiAgICBjb25zdCBkYXRlcyA9IFtdO1xyXG4gICAgc3RhcnREYXRlci5zdWJ0cmFjdCgxLCAnbW9udGgnKTsgLy9TdWJzdHJhY3Qgb25lIG1vbnRoIHRvIGV4Y2x1ZGUgZW5kRGF0ZXIgaXRzZWxmXHJcbiAgICAvLyBlbmREYXRlci5zdWJ0cmFjdCgxLCBcIm1vbnRoXCIpOyAvL1N1YnN0cmFjdCBvbmUgbW9udGggdG8gZXhjbHVkZSBlbmREYXRlciBpdHNlbGZcclxuXHJcbiAgICBjb25zdCBtb250aCA9IG1vbWVudChzdGFydERhdGVyKTsgLy9jbG9uZSB0aGUgc3RhcnREYXRlXHJcbiAgICB3aGlsZSAobW9udGggPCBlbmREYXRlcikge1xyXG4gICAgICBtb250aC5hZGQoMSwgJ21vbnRoJyk7XHJcbiAgICAgIGRhdGVzLnB1c2gobW9udGguZm9ybWF0KCdNTU0geXl5eScpKTtcclxuICAgIH1cclxuICAgIC8vIExvY2FsIHVwZGF0ZVxyXG4gICAgc2V0UGVyaW9kcyhkYXRlcyk7XHJcbiAgICAvLyBGaXJlYmFzZSB1cGRhdGVcclxuICAgIGF3YWl0IGRiXHJcbiAgICAgIC5jb2xsZWN0aW9uKCdwcm9qZWN0cycpXHJcbiAgICAgIC5kb2MocHJvamVjdElkKVxyXG4gICAgICAuY29sbGVjdGlvbignY2FzaEZsb3cnKVxyXG4gICAgICAuZG9jKFJvdXRlci5xdWVyeS5wcm9qZWN0KVxyXG4gICAgICAuY29sbGVjdGlvbignaW5wdXRzJylcclxuICAgICAgLmRvYyhkb2N1bWVudElkKVxyXG4gICAgICAudXBkYXRlKHsgcGVyaW9kczogZGF0ZXMsIGdsb2JhbEVuZERhdGU6IGRhdGUgfSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc29sZS5sb2coJ1J1bm5pbmcnKTtcclxuXHJcbiAgY29uc3QgcmV2ZW51ZVJlZiA9IHVzZVJlZigpO1xyXG4gIGNvbnN0IGlubmVyQ29udGFpbmVyUmV2ZW51ZVJlZiA9IHVzZVJlZigpO1xyXG4gIGNvbnN0IGRyb3BEb3duSWNvbiA9IHVzZVJlZigpO1xyXG4gIGNvbnN0IFtpc1JldmVudWVTaG93biwgc2V0SXNSZXZlbnVlU2hvd25dID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuICBjb25zdCBvblJldmVudWVTaG93ID0gKCkgPT4ge1xyXG4gICAgY29uc3QgbWFyZ2lucyA9IHNpemUud2lkdGggPCAxMjgwID8gNjggOiA5NjtcclxuICAgIGNvbnN0IHJldmVudWVDb250YWluZXJIZWlnaHQgPSBpbm5lckNvbnRhaW5lclJldmVudWVSZWYuY3VycmVudC5vZmZzZXRIZWlnaHQgKyBtYXJnaW5zO1xyXG4gICAgY29uc29sZS5sb2coaW5uZXJDb250YWluZXJSZXZlbnVlUmVmLmN1cnJlbnQub2Zmc2V0SGVpZ2h0KTtcclxuICAgIGlmICghaXNSZXZlbnVlU2hvd24pIHtcclxuICAgICAgZ3NhcC50byhyZXZlbnVlUmVmLmN1cnJlbnQsIHtcclxuICAgICAgICBoZWlnaHQ6IHJldmVudWVDb250YWluZXJIZWlnaHQsXHJcbiAgICAgICAgZHVyYXRpb246IDEsXHJcbiAgICAgICAgZWFzZTogTGluZWFyLFxyXG4gICAgICB9KTtcclxuICAgICAgZ3NhcC50byhkcm9wRG93bkljb24uY3VycmVudCwge1xyXG4gICAgICAgIHJvdGF0aW9uOiAnOTBfY3cnLFxyXG4gICAgICAgIGR1cmF0aW9uOiAxLFxyXG4gICAgICAgIGVhc2U6IExpbmVhcixcclxuICAgICAgfSk7XHJcbiAgICAgIGdzYXAuc2V0KHJldmVudWVSZWYuY3VycmVudCwge1xyXG4gICAgICAgIGhlaWdodDogJzEwMCUnLFxyXG4gICAgICAgIGRlbGF5OiAxLFxyXG4gICAgICB9KTtcclxuICAgICAgZ3NhcC5zZXQocmV2ZW51ZVJlZi5jdXJyZW50LCB7IG92ZXJmbG93OiAndmlzaWJsZScsIGRlbGF5OiAxIH0pO1xyXG4gICAgICBzZXRJc1JldmVudWVTaG93bih0cnVlKTtcclxuICAgIH0gZWxzZSBpZiAoaXNSZXZlbnVlU2hvd24pIHtcclxuICAgICAgZ3NhcC5zZXQocmV2ZW51ZVJlZi5jdXJyZW50LCB7XHJcbiAgICAgICAgaGVpZ2h0OiByZXZlbnVlQ29udGFpbmVySGVpZ2h0LFxyXG4gICAgICB9KTtcclxuICAgICAgZ3NhcC5zZXQocmV2ZW51ZVJlZi5jdXJyZW50LCB7IG92ZXJmbG93OiAnaGlkZGVuJyB9KTtcclxuICAgICAgZ3NhcC50byhyZXZlbnVlUmVmLmN1cnJlbnQsIHtcclxuICAgICAgICBoZWlnaHQ6IDU1LFxyXG4gICAgICAgIGR1cmF0aW9uOiAxLFxyXG4gICAgICAgIGVhc2U6IExpbmVhcixcclxuICAgICAgfSk7XHJcbiAgICAgIGdzYXAudG8oZHJvcERvd25JY29uLmN1cnJlbnQsIHtcclxuICAgICAgICByb3RhdGlvbjogJzBfY3cnLFxyXG4gICAgICAgIGR1cmF0aW9uOiAxLFxyXG4gICAgICAgIGVhc2U6IExpbmVhcixcclxuICAgICAgfSk7XHJcbiAgICAgIHNldElzUmV2ZW51ZVNob3duKGZhbHNlKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICAvLyBDb3N0c1xyXG4gIGNvbnN0IGNvc3RzUmVmID0gdXNlUmVmKCk7XHJcbiAgY29uc3QgaW5uZXJDb250YWluZXJDb3N0c1JlZiA9IHVzZVJlZigpO1xyXG4gIGNvbnN0IGRyb3BEb3duSWNvbkNvc3RzID0gdXNlUmVmKCk7XHJcbiAgY29uc3QgW2lzQ29zdHNTaG93biwgc2V0SXNDb3N0c1Nob3duXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgY29uc3Qgb25Db3N0c1Nob3cgPSAoKSA9PiB7XHJcbiAgICBjb25zdCByZXZlbnVlQ29udGFpbmVySGVpZ2h0ID0gaW5uZXJDb250YWluZXJDb3N0c1JlZi5jdXJyZW50Lm9mZnNldEhlaWdodCArIDk2O1xyXG4gICAgY29uc29sZS5sb2coaW5uZXJDb250YWluZXJDb3N0c1JlZi5jdXJyZW50Lm9mZnNldEhlaWdodCk7XHJcbiAgICBpZiAoIWlzQ29zdHNTaG93bikge1xyXG4gICAgICBnc2FwLnRvKGNvc3RzUmVmLmN1cnJlbnQsIHtcclxuICAgICAgICBoZWlnaHQ6IHJldmVudWVDb250YWluZXJIZWlnaHQsXHJcbiAgICAgICAgZHVyYXRpb246IDEsXHJcbiAgICAgICAgZWFzZTogTGluZWFyLFxyXG4gICAgICB9KTtcclxuICAgICAgZ3NhcC50byhkcm9wRG93bkljb25Db3N0cy5jdXJyZW50LCB7XHJcbiAgICAgICAgcm90YXRpb246ICc5MF9jdycsXHJcbiAgICAgICAgZHVyYXRpb246IDEsXHJcbiAgICAgICAgZWFzZTogTGluZWFyLFxyXG4gICAgICB9KTtcclxuICAgICAgZ3NhcC5zZXQoY29zdHNSZWYuY3VycmVudCwge1xyXG4gICAgICAgIGhlaWdodDogJzEwMCUnLFxyXG4gICAgICAgIGRlbGF5OiAxLFxyXG4gICAgICB9KTtcclxuICAgICAgZ3NhcC5zZXQoY29zdHNSZWYuY3VycmVudCwgeyBvdmVyZmxvdzogJ3Zpc2libGUnLCBkZWxheTogMSB9KTtcclxuICAgICAgc2V0SXNDb3N0c1Nob3duKHRydWUpO1xyXG4gICAgfSBlbHNlIGlmIChpc0Nvc3RzU2hvd24pIHtcclxuICAgICAgZ3NhcC5zZXQoY29zdHNSZWYuY3VycmVudCwgeyBvdmVyZmxvdzogJ2hpZGRlbicgfSk7XHJcbiAgICAgIGdzYXAuc2V0KGNvc3RzUmVmLmN1cnJlbnQsIHtcclxuICAgICAgICBoZWlnaHQ6IHJldmVudWVDb250YWluZXJIZWlnaHQsXHJcbiAgICAgIH0pO1xyXG4gICAgICBnc2FwLnRvKGNvc3RzUmVmLmN1cnJlbnQsIHtcclxuICAgICAgICBoZWlnaHQ6IDU1LFxyXG4gICAgICAgIGR1cmF0aW9uOiAxLFxyXG4gICAgICAgIGVhc2U6IExpbmVhcixcclxuICAgICAgfSk7XHJcbiAgICAgIGdzYXAudG8oZHJvcERvd25JY29uQ29zdHMuY3VycmVudCwge1xyXG4gICAgICAgIHJvdGF0aW9uOiAnMF9jdycsXHJcbiAgICAgICAgZHVyYXRpb246IDEsXHJcbiAgICAgICAgZWFzZTogTGluZWFyLFxyXG4gICAgICB9KTtcclxuICAgICAgc2V0SXNDb3N0c1Nob3duKGZhbHNlKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICBjb25zdCBoYW5kbGVPbkRyYWdFbmQgPSBhc3luYyAocmVzdWx0KSA9PiB7XHJcbiAgICBpZiAoIXJlc3VsdC5kZXN0aW5hdGlvbikgcmV0dXJuO1xyXG4gICAgY29uc3QgaXRlbXMgPSBBcnJheS5mcm9tKHJldmVudWVFbGVtZW50cyk7XHJcbiAgICBjb25zdCBbcmVvcmRlcmVkSXRlbV0gPSBpdGVtcy5zcGxpY2UocmVzdWx0LnNvdXJjZS5pbmRleCwgMSk7XHJcbiAgICBpdGVtcy5zcGxpY2UocmVzdWx0LmRlc3RpbmF0aW9uLmluZGV4LCAwLCByZW9yZGVyZWRJdGVtKTtcclxuXHJcbiAgICBjb25zb2xlLmxvZyhyZXN1bHQpO1xyXG4gICAgc2V0UmV2ZW51ZUVsZW1lbnRzKGl0ZW1zKTtcclxuICAgIC8vIEZpcmViYXNlIHVwZGF0ZVxyXG4gICAgYXdhaXQgZGJcclxuICAgICAgLmNvbGxlY3Rpb24oJ3Byb2plY3RzJylcclxuICAgICAgLmRvYyhwcm9qZWN0SWQpXHJcbiAgICAgIC5jb2xsZWN0aW9uKCdjYXNoRmxvdycpXHJcbiAgICAgIC5kb2MoUm91dGVyLnF1ZXJ5LnByb2plY3QpXHJcbiAgICAgIC5jb2xsZWN0aW9uKCdpbnB1dHMnKVxyXG4gICAgICAuZG9jKGRvY3VtZW50SWQpXHJcbiAgICAgIC51cGRhdGUoeyByZXZlbnVlRWxlbWVudHM6IGl0ZW1zIH0pO1xyXG4gIH07XHJcblxyXG4gIC8vIENvc3RzXHJcbiAgY29uc3QgY29zdHNIYW5kbGVPbkRyYWdFbmQgPSBhc3luYyAocmVzdWx0KSA9PiB7XHJcbiAgICBpZiAoIXJlc3VsdC5kZXN0aW5hdGlvbikgcmV0dXJuO1xyXG4gICAgY29uc3QgaXRlbXMgPSBBcnJheS5mcm9tKGNvc3RzRWxlbWVudHMpO1xyXG4gICAgY29uc3QgW3Jlb3JkZXJlZEl0ZW1dID0gaXRlbXMuc3BsaWNlKHJlc3VsdC5zb3VyY2UuaW5kZXgsIDEpO1xyXG4gICAgaXRlbXMuc3BsaWNlKHJlc3VsdC5kZXN0aW5hdGlvbi5pbmRleCwgMCwgcmVvcmRlcmVkSXRlbSk7XHJcblxyXG4gICAgY29uc29sZS5sb2cocmVzdWx0KTtcclxuICAgIHNldFJldmVudWVFbGVtZW50cyhpdGVtcyk7XHJcbiAgICAvLyBGaXJlYmFzZSB1cGRhdGVcclxuICAgIGF3YWl0IGRiXHJcbiAgICAgIC5jb2xsZWN0aW9uKCdwcm9qZWN0cycpXHJcbiAgICAgIC5kb2MocHJvamVjdElkKVxyXG4gICAgICAuY29sbGVjdGlvbignY2FzaEZsb3cnKVxyXG4gICAgICAuZG9jKFJvdXRlci5xdWVyeS5wcm9qZWN0KVxyXG4gICAgICAuY29sbGVjdGlvbignaW5wdXRzJylcclxuICAgICAgLmRvYyhkb2N1bWVudElkKVxyXG4gICAgICAudXBkYXRlKHsgY29zdHNFbGVtZW50czogaXRlbXMgfSk7XHJcbiAgfTtcclxuXHJcbiAgLy8gVGF4XHJcbiAgY29uc3Qgb25UYXhDaGFuZ2UgPSBhc3luYyAodmFsdWUpID0+IHtcclxuICAgIC8vIExvY2FsIHVwZGF0ZVxyXG4gICAgc2V0VGF4KHZhbHVlKTtcclxuICAgIC8vIEZpcmViYXNlIHVwZGF0ZVxyXG4gICAgYXdhaXQgZGJcclxuICAgICAgLmNvbGxlY3Rpb24oJ3Byb2plY3RzJylcclxuICAgICAgLmRvYyhwcm9qZWN0SWQpXHJcbiAgICAgIC5jb2xsZWN0aW9uKCdjYXNoRmxvdycpXHJcbiAgICAgIC5kb2MoUm91dGVyLnF1ZXJ5LnByb2plY3QpXHJcbiAgICAgIC5jb2xsZWN0aW9uKCdpbnB1dHMnKVxyXG4gICAgICAuZG9jKGRvY3VtZW50SWQpXHJcbiAgICAgIC51cGRhdGUoeyB0YXg6IHZhbHVlIH0pO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGRhdGEgPSB7XHJcbiAgICBwZXJpb2RzLFxyXG4gICAgcmV2ZW51ZUVsZW1lbnRzLFxyXG4gICAgY29zdHNFbGVtZW50cyxcclxuICAgIHRheCxcclxuICAgIHRvdGFsUmV2ZW51ZSxcclxuICAgIG1vbnRobHlSZXZlbnVlLFxyXG4gICAgdG90YWxDb3N0cyxcclxuICAgIG1vbnRobHlDb3N0cyxcclxuICAgIGdyb3NzUHJvZml0LFxyXG4gICAgbmV0UHJvZml0LFxyXG4gICAgc3RhcnREYXRlOiBmb3JtYXQoc3RhcnREYXRlLCAnTU1NIC8geXl5eScpLFxyXG4gICAgZW5kRGF0ZTogZm9ybWF0KGVuZERhdGUsICdNTU0gLyB5eXl5JyksXHJcbiAgfTtcclxuXHJcbiAgY29uc3Qgc2l6ZSA9IHsgd2lkdGg6IHdpbmRvdy5pbm5lcldpZHRoIH07XHJcbiAgY29uc29sZS5sb2coKHNpemUud2lkdGggPiA4NjAgJiYgMzApIHx8IChzaXplLndpZHRoIDwgODYwICYmIHNpemUud2lkdGggPiA2ODAgJiYgMjYpIHx8IChzaXplLndpZHRoIDwgNjgwICYmIDIyKSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8VGlwcHlNb25zdGVyXHJcbiAgICAgICAgY2FzaEZsb3dcclxuICAgICAgICBjb250ZW50Q2xhc3M9XCJoLTQwIHctODAgc2hhZG93LWxnIHJvdW5kZWQtMnhsIGJnLXByaW1hcnkgZmxleCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXJcIlxyXG4gICAgICAgIGNvbnRlbnRUZXh0PVwiSSdtIGdsYWQgeW91IG1hZGUgaXQgYWxsIHRoZSB3YXkgaGVyZSEgQW5hbHl6aW5nIHlvdXIgc3RhcnR1cCdzIGxpcXVpZGl0eSBpcyBvbmUgb2YgdGhlIG1vc3QgaW1wb3J0YW50IHBhcnRzIG9mIHBsYW5uaW5nIHlvdXIgZW50aXJlIGJ1c2luZXNzLiBJZiB5b3UgbmVlZCBhbnkgaGVscCwgcGxlYXNlIGZlZWwgZnJlZSB0byBjb250YWN0IG91ciB0ZWFtISBcIlxyXG4gICAgICAvPlxyXG4gICAgICA8RXhpdENvbXBvbmVudCAvPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1pbi1oLXNjcmVlbiB3LWZ1bGwgcmVsYXRpdmUgZmxleCBmbGV4LWNvbCBpdGVtcy1jZW50ZXJcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbCBtYXgtdy1mdWxsIHJlbGF0aXZlIG10LTEyIGxnMUNvbnRhaW5lcjptdC0xNiBtYi0xNiBweC0zMlwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWxhdGl2ZSBncmlkIGdyaWQtY29scy0yIGdyaWQtcm93cy0xIGdyaWQtZmxvdy1jb2xcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgIDxzdmdcclxuICAgICAgICAgICAgICAgIGhlaWdodD17KHNpemUud2lkdGggPiA4NjAgJiYgMzApIHx8IChzaXplLndpZHRoIDwgODYwICYmIHNpemUud2lkdGggPiA2ODAgJiYgMjYpIHx8IChzaXplLndpZHRoIDwgNjgwICYmIDIyKX1cclxuICAgICAgICAgICAgICAgIHdpZHRoPXsoc2l6ZS53aWR0aCA+IDg2MCAmJiAzMCkgfHwgKHNpemUud2lkdGggPCA4NjAgJiYgc2l6ZS53aWR0aCA+IDY4MCAmJiAyNikgfHwgKHNpemUud2lkdGggPCA2ODAgJiYgMjIpfVxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZmlsbC1jdXJyZW50IHRleHQtcHJpbWFyeSBkYXJrOnRleHQtcHJpbWFyeWRhcmtcIlxyXG4gICAgICAgICAgICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXHJcbiAgICAgICAgICAgICAgICB2aWV3Qm94PVwiMCAwIDEyOCAxMjhcIlxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDx0aXRsZT5MYW5kaW5nIFN1Y2Nlc3M8L3RpdGxlPlxyXG4gICAgICAgICAgICAgICAgPGcgaWQ9XCJMYW5kaW5nX1N1Y2Nlc3NcIiBkYXRhLW5hbWU9XCJMYW5kaW5nIFN1Y2Nlc3NcIj5cclxuICAgICAgICAgICAgICAgICAgPHBhdGhcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJjbHMtMVwiXHJcbiAgICAgICAgICAgICAgICAgICAgZD1cIk0xMDkuMyw5MC4xQTQ2LDQ2LDAsMCwwLDY1LDM2VjIwLjA4YzEuNzgtLjYyLDcuMjEtMi4xNCwxMi41Ny4yM2ExOS4zMywxOS4zMywwLDAsMCwxNC44MiwwYy44Ny0uMzguNjEuMzEuNjEtMTcuOTNhMSwxLDAsMCwwLTEuNDMtLjkzYy0uMDcsMC02LjY5LDIuODctMTMuMTgsMEExOS40MSwxOS40MSwwLDAsMCw2NSwuOTMsMSwxLDAsMCwwLDYzLDFWMzZhNDUuODYsNDUuODYsMCwwLDAtMjguNjYsMTAuOEMxNi4xOCw0MC40OCw0LDQwLC43OSw0NS41MS0yLjI5LDUwLjg2LDMuOTQsNTkuMywxMCw2NS42OEExMSwxMSwwLDAsMCwxOCw4M2MuODEsMzguNDEsNDYuMDgsNTkuMiw3NS42NiwzNC4yMSw4LjUzLDMsMjksOS4xNSwzMy41NSwxLjMxQzEzMC4zOSwxMTMsMTIzLjg2LDEwMi42NSwxMDkuMyw5MC4xWk03Ny41OSwzLjMxQTE5LjM5LDE5LjM5LDAsMCwwLDkxLDMuODNWMTguNjhjLTEuNzkuNjItNy4yMiwyLjEzLTEyLjU3LS4yM0ExOS4xOSwxOS4xOSwwLDAsMCw2NSwxNy45M1YzLjA4QzY2LjgxLDIuNDYsNzIuMjQsMSw3Ny41OSwzLjMxWk02NSw0NXYtN2MzOS42OS45MSw1OCw1MC4yNywyOC4yMSw3Ni44MUM3MS4zMiwxMDcsNDYsOTIuNjYsMjcuNzcsNzguNjRhMTEsMTEsMCwwLDAtMy4yLTE2LjEzQTQzLjg4LDQzLjg4LDAsMCwxLDYzLDM4LjA2VjQ1QTEsMSwwLDAsMCw2NSw0NVpNMzIuNTUsNDguMzZhNDYuMjEsNDYuMjEsMCwwLDAtOS44MywxMy4yOCwxMC45MywxMC45MywwLDAsMC0xMS40LDIuNDdDLTguMzksNDMuMjMsNS4yMywzOS4wOCwzMi41NSw0OC4zNlpNMTAsNzJhOSw5LDAsMSwxLDksOUE5LDksMCwwLDEsMTAsNzJabTEwLDExYTExLDExLDAsMCwwLDYuMzQtMi44MmMxOC40NSwxNC4yMSw0My40NSwyOC4zNSw2NS4wNSwzNi4yMkM2MywxMzkuMTYsMjAuODMsMTE5LjEsMjAuMDUsODNabTEwNS40LDM0LjVjLTIuNTEsNC4zNS0xNCwzLjYyLTMwLTEuODVhNDUuNjEsNDUuNjEsMCwwLDAsMTMuNDItMjMuMjFDMTIxLjU5LDEwMy41OCwxMjgsMTEzLjEyLDEyNS40NSwxMTcuNDdaXCJcclxuICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDwvZz5cclxuICAgICAgICAgICAgICA8L3N2Zz5cclxuICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXByaW1hcnlkYXJrIHRleHQtbGcgbWRDb250YWluZXI6dGV4dC14bCBsZ0NvbnRhaW5lcjp0ZXh0LTJ4bCBtdC0yIHBsLTIgZGFyazp0ZXh0LWJhY2tncm91bmRcIj5cclxuICAgICAgICAgICAgICAgIENhc2ggZmxvdyBhbmFseXNpc1xyXG4gICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxDYXNoRmxvd1BERlxyXG4gICAgICAgICAgICAgIHByb2plY3ROYW1lPXtwcm9qZWN0TmFtZX1cclxuICAgICAgICAgICAgICBwcm9qZWN0SWQ9e3Byb2plY3RJZH1cclxuICAgICAgICAgICAgICBkYXRhPXtkYXRhfVxyXG4gICAgICAgICAgICAgIHBlcmlvZHM9e3BlcmlvZHN9XHJcbiAgICAgICAgICAgICAgcmV2ZW51ZUVsZW1lbnRzPXtyZXZlbnVlRWxlbWVudHN9XHJcbiAgICAgICAgICAgICAgY29zdHNFbGVtZW50cz17Y29zdHNFbGVtZW50c31cclxuICAgICAgICAgICAgICB0YXg9e3RheH1cclxuICAgICAgICAgICAgICB0b3RhbFJldmVudWU9e3RvdGFsUmV2ZW51ZX1cclxuICAgICAgICAgICAgICBtb250aGx5UmV2ZW51ZT17bW9udGhseVJldmVudWV9XHJcbiAgICAgICAgICAgICAgdG90YWxDb3N0cz17dG90YWxDb3N0c31cclxuICAgICAgICAgICAgICBtb250aGx5Q29zdHM9e21vbnRobHlDb3N0c31cclxuICAgICAgICAgICAgICBncm9zc1Byb2ZpdD17Z3Jvc3NQcm9maXR9XHJcbiAgICAgICAgICAgICAgbmV0UHJvZml0PXtuZXRQcm9maXR9XHJcbiAgICAgICAgICAgICAgc3RhcnREYXRlPXtzdGFydERhdGV9XHJcbiAgICAgICAgICAgICAgZW5kRGF0ZT17ZW5kRGF0ZX1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cInRleHQtc2Vjb25kYXJ5IHRleHQteHMgbWRDb250YWluZXI6dGV4dC1zbSBsZ0NvbnRhaW5lcjp0ZXh0LWJhc2UgdGV4dC1ncmF5IHJlbGF0aXZlIC10b3AtMSBsZ0NvbnRhaW5lcjp0b3AtMFwiPlxyXG4gICAgICAgICAgICAgIE1hbmFnZSB5b3VyIHN0YXJ0dXAgY2FzaCBmbG93XHJcbiAgICAgICAgICAgIDwvaDE+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsIGdyaWQgZ3JpZC1jb2xzLTJmciBncmlkLXJvd3MtMWZyIGxnQ29udGFpbmVyOmdyaWQtY29scy0zZnIgbGdDb250YWluZXI6Z3JpZC1yb3dzLTFmciBnYXAteS04IGdhcC14LTYgc21Db250YWluZXI6Z2FwLXgtMzIgbWRDb250YWluZXI6Z2FwLXgtMTIgbXQtMTJcIj5cclxuICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgIGlkPVwibWFpbi1kYXRlcGlja2VyXCJcclxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LWZ1bGwgYmctd2hpdGUgcm91bmRlZC0yeGwgcHktMyBweC0zIG1kQ29udGFpbmVyOnB5LTMgbWRDb250YWluZXI6cHgtNCBsZ0NvbnRhaW5lcjpweC02IGxnQ29udGFpbmVyOnB5LTQgc2hhZG93LW1kIGdyaWQgZ3JpZC1jb2xzLTJmciBpdGVtcy1jZW50ZXIgdGV4dC14cyBtZENvbnRhaW5lcjp0ZXh0LXNtIGxnQ29udGFpbmVyOnRleHQtYmFzZVwiXHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgIHNyYz1cIi9jYXNoLWZsb3cvY2FsZW5kYXIuc3ZnXCJcclxuICAgICAgICAgICAgICAgICAgaGVpZ2h0PXsoc2l6ZS53aWR0aCA+IDg2MCAmJiAyNSkgfHwgKHNpemUud2lkdGggPCA4NjAgJiYgc2l6ZS53aWR0aCA+IDY4MCAmJiAyMikgfHwgKHNpemUud2lkdGggPCA2ODAgJiYgMTgpfVxyXG4gICAgICAgICAgICAgICAgICB3aWR0aD17KHNpemUud2lkdGggPiA4NjAgJiYgMjUpIHx8IChzaXplLndpZHRoIDwgODYwICYmIHNpemUud2lkdGggPiA2ODAgJiYgMjIpIHx8IChzaXplLndpZHRoIDwgNjgwICYmIDE4KX1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJtbC0yIHRleHQtcHJpbWFyeWRhcmtcIj5TdGFydDo8L3A+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAge3N0YXJ0RGF0ZSAmJiAhaXNNb2JpbGUgPyAoXHJcbiAgICAgICAgICAgICAgICA8RGF0ZVBpY2tlclxyXG4gICAgICAgICAgICAgICAgICBzZWxlY3RlZD17c3RhcnREYXRlfVxyXG4gICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGRhdGUpID0+IG9uU3RhcnREYXRlVXBkYXRlKGRhdGUpfVxyXG4gICAgICAgICAgICAgICAgICBkYXRlRm9ybWF0PVwiTU1NTSB5eXl5XCJcclxuICAgICAgICAgICAgICAgICAgc2hvd01vbnRoWWVhclBpY2tlclxyXG4gICAgICAgICAgICAgICAgICBtYXhEYXRlPXthZGRZZWFycyhuZXcgRGF0ZSgpLCAzKX1cclxuICAgICAgICAgICAgICAgICAgbWluRGF0ZT17bmV3IERhdGUoKX1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICAgIDxEYXRlUGlja2VyXHJcbiAgICAgICAgICAgICAgICAgIHNlbGVjdGVkPXtzdGFydERhdGV9XHJcbiAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZGF0ZSkgPT4gb25TdGFydERhdGVVcGRhdGUoZGF0ZSl9XHJcbiAgICAgICAgICAgICAgICAgIGRhdGVGb3JtYXQ9XCJNTU1NIHl5eXlcIlxyXG4gICAgICAgICAgICAgICAgICBzaG93TW9udGhZZWFyUGlja2VyXHJcbiAgICAgICAgICAgICAgICAgIG1heERhdGU9e2FkZFllYXJzKG5ldyBEYXRlKCksIDMpfVxyXG4gICAgICAgICAgICAgICAgICBtaW5EYXRlPXtuZXcgRGF0ZSgpfVxyXG4gICAgICAgICAgICAgICAgICB3aXRoUG9ydGFsXHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgaWQ9XCJtYWluLWRhdGVwaWNrZXJcIlxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cInctZnVsbCBiZy13aGl0ZSByb3VuZGVkLTJ4bCBweS0zIHB4LTMgbWRDb250YWluZXI6cHktMyBtZENvbnRhaW5lcjpweC00IGxnQ29udGFpbmVyOnB4LTYgbGdDb250YWluZXI6cHktNCBzaGFkb3ctbWQgZ3JpZCBncmlkLWNvbHMtMmZyIGl0ZW1zLWNlbnRlciB0ZXh0LXhzIG1kQ29udGFpbmVyOnRleHQtc20gbGdDb250YWluZXI6dGV4dC1iYXNlXCJcclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgc3JjPVwiL2Nhc2gtZmxvdy9ob3VyZ2xhc3MxLnN2Z1wiXHJcbiAgICAgICAgICAgICAgICAgIGhlaWdodD17KHNpemUud2lkdGggPiA4NjAgJiYgMjUpIHx8IChzaXplLndpZHRoIDwgODYwICYmIHNpemUud2lkdGggPiA2ODAgJiYgMjIpIHx8IChzaXplLndpZHRoIDwgNjgwICYmIDE4KX1cclxuICAgICAgICAgICAgICAgICAgd2lkdGg9eyhzaXplLndpZHRoID4gODYwICYmIDI1KSB8fCAoc2l6ZS53aWR0aCA8IDg2MCAmJiBzaXplLndpZHRoID4gNjgwICYmIDIyKSB8fCAoc2l6ZS53aWR0aCA8IDY4MCAmJiAxOCl9XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwibWwtMiB0ZXh0LXByaW1hcnlkYXJrXCI+RW5kOjwvcD5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICB7ZW5kRGF0ZSAmJiAhaXNNb2JpbGUgPyAoXHJcbiAgICAgICAgICAgICAgICA8RGF0ZVBpY2tlclxyXG4gICAgICAgICAgICAgICAgICBzZWxlY3RlZD17ZW5kRGF0ZX1cclxuICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhkYXRlKSA9PiBvbkVuZERhdGVVcGRhdGUoZGF0ZSl9XHJcbiAgICAgICAgICAgICAgICAgIGRhdGVGb3JtYXQ9XCJNTU1NIHl5eXlcIlxyXG4gICAgICAgICAgICAgICAgICBzaG93TW9udGhZZWFyUGlja2VyXHJcbiAgICAgICAgICAgICAgICAgIG1heERhdGU9e2FkZFllYXJzKG5ldyBEYXRlKCksIDMpfVxyXG4gICAgICAgICAgICAgICAgICBtaW5EYXRlPXtuZXcgRGF0ZSgpfVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgICAgPERhdGVQaWNrZXJcclxuICAgICAgICAgICAgICAgICAgc2VsZWN0ZWQ9e2VuZERhdGV9XHJcbiAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZGF0ZSkgPT4gb25FbmREYXRlVXBkYXRlKGRhdGUpfVxyXG4gICAgICAgICAgICAgICAgICBkYXRlRm9ybWF0PVwiTU1NTSB5eXl5XCJcclxuICAgICAgICAgICAgICAgICAgc2hvd01vbnRoWWVhclBpY2tlclxyXG4gICAgICAgICAgICAgICAgICBtYXhEYXRlPXthZGRZZWFycyhuZXcgRGF0ZSgpLCAzKX1cclxuICAgICAgICAgICAgICAgICAgbWluRGF0ZT17bmV3IERhdGUoKX1cclxuICAgICAgICAgICAgICAgICAgd2l0aFBvcnRhbFxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDpcclxuICAgICAgICAgICAgICAgICAgKHNpemUud2lkdGggPiA4NjAgJiYgJzEwMCUnKSB8fFxyXG4gICAgICAgICAgICAgICAgICAoc2l6ZS53aWR0aCA8IDg2MCAmJiBzaXplLndpZHRoID4gNjgwICYmICc0NyUnKSB8fFxyXG4gICAgICAgICAgICAgICAgICAoc2l6ZS53aWR0aCA8IDY4MCAmJiBzaXplLndpZHRoID4gNTIwICYmICc0MCUnKSB8fFxyXG4gICAgICAgICAgICAgICAgICAoc2l6ZS53aWR0aCA8IDUyMCAmJiAnNDclJyksXHJcbiAgICAgICAgICAgICAgICBncmlkQ29sdW1uU3RhcnQ6IHNpemUud2lkdGggPCA4NjAgPyAnMScgOiAndW5zZXQnLFxyXG4gICAgICAgICAgICAgICAgZ3JpZENvbHVtbkVuZDogc2l6ZS53aWR0aCA8IDg2MCA/ICczJyA6ICd1bnNldCcsXHJcbiAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJwbGFjZS1zZWxmLWNlbnRlciBiZy13aGl0ZSByb3VuZGVkLTJ4bCBweS0zIHB4LTMgbWRDb250YWluZXI6cHktMyBtZENvbnRhaW5lcjpweC00IGxnQ29udGFpbmVyOnB4LTYgbGdDb250YWluZXI6cHktNCBzaGFkb3ctbWQgZ3JpZCBncmlkLWNvbHMtMmZyIGl0ZW1zLWNlbnRlciB0ZXh0LXhzIG1kQ29udGFpbmVyOnRleHQtc20gbGdDb250YWluZXI6dGV4dC1iYXNlXCJcclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgc3JjPVwiL2Nhc2gtZmxvdy90YXguc3ZnXCJcclxuICAgICAgICAgICAgICAgICAgaGVpZ2h0PXsoc2l6ZS53aWR0aCA+IDg2MCAmJiAyNSkgfHwgKHNpemUud2lkdGggPCA4NjAgJiYgc2l6ZS53aWR0aCA+IDY4MCAmJiAyMikgfHwgKHNpemUud2lkdGggPCA2ODAgJiYgMTgpfVxyXG4gICAgICAgICAgICAgICAgICB3aWR0aD17KHNpemUud2lkdGggPiA4NjAgJiYgMjUpIHx8IChzaXplLndpZHRoIDwgODYwICYmIHNpemUud2lkdGggPiA2ODAgJiYgMjIpIHx8IChzaXplLndpZHRoIDwgNjgwICYmIDE4KX1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJtbC0yXCI+VGF4OjwvcD5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXhcIiBzdHlsZT17eyB0ZXh0QWxpZ25MYXN0OiAncmlnaHQnIH19PlxyXG4gICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgIGlkPVwidGF4LWlucHV0XCJcclxuICAgICAgICAgICAgICAgICAgdmFsdWU9e3RheH1cclxuICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBvblRheENoYW5nZShlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInctZnVsbCBiZy13aGl0ZSBmb2N1czpvdXRsaW5lLW5vbmVcIlxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDxwPiU8L3A+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGlkPVwiY2hhcnRDb250YWluZXJcIiBjbGFzc05hbWU9XCJ3LWZ1bGwgaC0xLzIgcC00IG1kQ29udGFpbmVyOnAtOCBiZy13aGl0ZSByb3VuZGVkLTJ4bCBtdC0xMiBzaGFkb3ctbWRcIj5cclxuICAgICAgICAgICAgey8qIDxjYW52YXMgcmVmPXtjaGFydFJlZn0gaGVpZ2h0PXs3NX0+PC9jYW52YXM+ICovfVxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbCBncmlkIGdyaWQtY29scy0yZnIgZ3JpZC1yb3dzLTNmciBsZzFDb250YWluZXI6Z3JpZC1jb2xzLTNmciBsZzFDb250YWluZXI6Z3JpZC1yb3dzLTJmciBnYXAteC02IHNtQ29udGFpbmVyOmdhcC14LTEyIGdhcC15LTggbXQtMTJcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGwgYmctd2hpdGUgcm91bmRlZC0yeGwgcHktMyBweC0zIG1kQ29udGFpbmVyOnB5LTMgbWRDb250YWluZXI6cHgtNCBsZ0NvbnRhaW5lcjpweC02IGxnQ29udGFpbmVyOnB5LTQgc2hhZG93LW1kIGZsZXgganVzdGlmeS1iZXR3ZWVuIGl0ZW1zLWNlbnRlciB0ZXh0LXhzIG1kQ29udGFpbmVyOnRleHQtc20gbGdDb250YWluZXI6dGV4dC1iYXNlXCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgICBzcmM9XCIvY2FzaC1mbG93L3JldmVudWUuc3ZnXCJcclxuICAgICAgICAgICAgICAgICAgaGVpZ2h0PXsoc2l6ZS53aWR0aCA+IDg2MCAmJiAyNSkgfHwgKHNpemUud2lkdGggPCA4NjAgJiYgc2l6ZS53aWR0aCA+IDY4MCAmJiAyMikgfHwgKHNpemUud2lkdGggPCA2ODAgJiYgMTgpfVxyXG4gICAgICAgICAgICAgICAgICB3aWR0aD17KHNpemUud2lkdGggPiA4NjAgJiYgMjUpIHx8IChzaXplLndpZHRoIDwgODYwICYmIHNpemUud2lkdGggPiA2ODAgJiYgMjIpIHx8IChzaXplLndpZHRoIDwgNjgwICYmIDE4KX1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJtbC0yXCI+VG90YWwgcmV2ZW51ZTo8L3A+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPHA+JHt0b3RhbFJldmVudWV9PC9wPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGwgYmctd2hpdGUgcm91bmRlZC0yeGwgcHktMyBweC0zIG1kQ29udGFpbmVyOnB5LTMgbWRDb250YWluZXI6cHgtNCBsZ0NvbnRhaW5lcjpweC02IGxnQ29udGFpbmVyOnB5LTQgc2hhZG93LW1kIGZsZXgganVzdGlmeS1iZXR3ZWVuIGl0ZW1zLWNlbnRlciB0ZXh0LXhzIG1kQ29udGFpbmVyOnRleHQtc20gbGdDb250YWluZXI6dGV4dC1iYXNlXCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgICBzcmM9XCIvY2FzaC1mbG93L21vbnRobHkuc3ZnXCJcclxuICAgICAgICAgICAgICAgICAgaGVpZ2h0PXsoc2l6ZS53aWR0aCA+IDg2MCAmJiAyNSkgfHwgKHNpemUud2lkdGggPCA4NjAgJiYgc2l6ZS53aWR0aCA+IDY4MCAmJiAyMikgfHwgKHNpemUud2lkdGggPCA2ODAgJiYgMTgpfVxyXG4gICAgICAgICAgICAgICAgICB3aWR0aD17KHNpemUud2lkdGggPiA4NjAgJiYgMjUpIHx8IChzaXplLndpZHRoIDwgODYwICYmIHNpemUud2lkdGggPiA2ODAgJiYgMjIpIHx8IChzaXplLndpZHRoIDwgNjgwICYmIDE4KX1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJtbC0yXCI+TW9udGhseSByZXZlbnVlOjwvcD5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8cD4ke21vbnRobHlSZXZlbnVlfTwvcD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsIGJnLXdoaXRlIHJvdW5kZWQtMnhsIHB5LTMgcHgtMyBtZENvbnRhaW5lcjpweS0zIG1kQ29udGFpbmVyOnB4LTQgbGdDb250YWluZXI6cHgtNiBsZ0NvbnRhaW5lcjpweS00IHNoYWRvdy1tZCBmbGV4IGp1c3RpZnktYmV0d2VlbiBpdGVtcy1jZW50ZXIgdGV4dC14cyBtZENvbnRhaW5lcjp0ZXh0LXNtIGxnQ29udGFpbmVyOnRleHQtYmFzZVwiPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgc3JjPVwiL2Nhc2gtZmxvdy9jb3N0cy5zdmdcIlxyXG4gICAgICAgICAgICAgICAgICBoZWlnaHQ9eyhzaXplLndpZHRoID4gODYwICYmIDI1KSB8fCAoc2l6ZS53aWR0aCA8IDg2MCAmJiBzaXplLndpZHRoID4gNjgwICYmIDIyKSB8fCAoc2l6ZS53aWR0aCA8IDY4MCAmJiAxOCl9XHJcbiAgICAgICAgICAgICAgICAgIHdpZHRoPXsoc2l6ZS53aWR0aCA+IDg2MCAmJiAyNSkgfHwgKHNpemUud2lkdGggPCA4NjAgJiYgc2l6ZS53aWR0aCA+IDY4MCAmJiAyMikgfHwgKHNpemUud2lkdGggPCA2ODAgJiYgMTgpfVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cIm1sLTJcIj5Ub3RhbCBjb3N0czo8L3A+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPHA+JHt0b3RhbENvc3RzfTwvcD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsIGJnLXdoaXRlIHJvdW5kZWQtMnhsIHB5LTMgcHgtMyBtZENvbnRhaW5lcjpweS0zIG1kQ29udGFpbmVyOnB4LTQgbGdDb250YWluZXI6cHgtNiBsZ0NvbnRhaW5lcjpweS00IHNoYWRvdy1tZCBmbGV4IGp1c3RpZnktYmV0d2VlbiBpdGVtcy1jZW50ZXIgdGV4dC14cyBtZENvbnRhaW5lcjp0ZXh0LXNtIGxnQ29udGFpbmVyOnRleHQtYmFzZVwiPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgc3JjPVwiL2Nhc2gtZmxvdy9tb250aGx5LWNvc3RzLnN2Z1wiXHJcbiAgICAgICAgICAgICAgICAgIGhlaWdodD17KHNpemUud2lkdGggPiA4NjAgJiYgMjUpIHx8IChzaXplLndpZHRoIDwgODYwICYmIHNpemUud2lkdGggPiA2ODAgJiYgMjIpIHx8IChzaXplLndpZHRoIDwgNjgwICYmIDE4KX1cclxuICAgICAgICAgICAgICAgICAgd2lkdGg9eyhzaXplLndpZHRoID4gODYwICYmIDI1KSB8fCAoc2l6ZS53aWR0aCA8IDg2MCAmJiBzaXplLndpZHRoID4gNjgwICYmIDIyKSB8fCAoc2l6ZS53aWR0aCA8IDY4MCAmJiAxOCl9XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwibWwtMlwiPk1vbnRobHkgY29zdHM6PC9wPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxwPiR7bW9udGhseUNvc3RzfTwvcD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsIGJnLXdoaXRlIHJvdW5kZWQtMnhsIHB5LTMgcHgtMyBtZENvbnRhaW5lcjpweS0zIG1kQ29udGFpbmVyOnB4LTQgbGdDb250YWluZXI6cHgtNiBsZ0NvbnRhaW5lcjpweS00IHNoYWRvdy1tZCBmbGV4IGp1c3RpZnktYmV0d2VlbiBpdGVtcy1jZW50ZXIgdGV4dC14cyBtZENvbnRhaW5lcjp0ZXh0LXNtIGxnQ29udGFpbmVyOnRleHQtYmFzZVwiPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgc3JjPVwiL2Nhc2gtZmxvdy9tZWdhcGhvbmUuc3ZnXCJcclxuICAgICAgICAgICAgICAgICAgaGVpZ2h0PXsoc2l6ZS53aWR0aCA+IDg2MCAmJiAyNSkgfHwgKHNpemUud2lkdGggPCA4NjAgJiYgc2l6ZS53aWR0aCA+IDY4MCAmJiAyMikgfHwgKHNpemUud2lkdGggPCA2ODAgJiYgMTgpfVxyXG4gICAgICAgICAgICAgICAgICB3aWR0aD17KHNpemUud2lkdGggPiA4NjAgJiYgMjUpIHx8IChzaXplLndpZHRoIDwgODYwICYmIHNpemUud2lkdGggPiA2ODAgJiYgMjIpIHx8IChzaXplLndpZHRoIDwgNjgwICYmIDE4KX1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJtbC0yXCI+R3Jvc3MgcHJvZml0OjwvcD5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8cD4ke2dyb3NzUHJvZml0fTwvcD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsIGJnLXdoaXRlIHJvdW5kZWQtMnhsIHB5LTMgcHgtMyBtZENvbnRhaW5lcjpweS0zIG1kQ29udGFpbmVyOnB4LTQgbGdDb250YWluZXI6cHgtNiBsZ0NvbnRhaW5lcjpweS00IHNoYWRvdy1tZCBmbGV4IGp1c3RpZnktYmV0d2VlbiBpdGVtcy1jZW50ZXIgdGV4dC14cyBtZENvbnRhaW5lcjp0ZXh0LXNtIGxnQ29udGFpbmVyOnRleHQtYmFzZVwiPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgc3JjPVwiL2Nhc2gtZmxvdy9uZXQtd29ydGguc3ZnXCJcclxuICAgICAgICAgICAgICAgICAgaGVpZ2h0PXsoc2l6ZS53aWR0aCA+IDg2MCAmJiAyNSkgfHwgKHNpemUud2lkdGggPCA4NjAgJiYgc2l6ZS53aWR0aCA+IDY4MCAmJiAyMikgfHwgKHNpemUud2lkdGggPCA2ODAgJiYgMTgpfVxyXG4gICAgICAgICAgICAgICAgICB3aWR0aD17KHNpemUud2lkdGggPiA4NjAgJiYgMjUpIHx8IChzaXplLndpZHRoIDwgODYwICYmIHNpemUud2lkdGggPiA2ODAgJiYgMjIpIHx8IChzaXplLndpZHRoIDwgNjgwICYmIDE4KX1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJtbC0yXCI+TmV0IHByb2ZpdDo8L3A+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPHA+JHtuZXRQcm9maXR9PC9wPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgey8qIFJldmVudWUgKi99XHJcbiAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgIHJlZj17cmV2ZW51ZVJlZn1cclxuICAgICAgICAgICAgc3R5bGU9e3sgaGVpZ2h0OiA1NSwgekluZGV4OiAxMCB9fVxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJvdmVyZmxvdy1oaWRkZW4gcmVsYXRpdmUgdy1mdWxsIHJvdW5kZWQtMnhsIGJnLXdoaXRlIGRhcms6YmctYmFja2dyb3VuZCBweC00IHB5LTQgZmxleCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXIgbXQtMTIgZmxleCBmbGV4LXdyYXAgc2hhZG93LW1kXCJcclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGwgZmxleCBqdXN0aWZ5LWJldHdlZW4gaXRlbXMtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsZ0NvbnRhaW5lcjptbC0yXCI+XHJcbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXNtIGxnQ29udGFpbmVyOnRleHQtYmFzZVwiPlJldmVudWU8L3A+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsZ0NvbnRhaW5lcjptci0yIGZsZXggZmxleC1ub3dyYXAgaXRlbXMtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e29uUmV2ZW51ZUVsZW1lbnRBZGR9XHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImN1cnNvci1wb2ludGVyXCJcclxuICAgICAgICAgICAgICAgICAgc3JjPVwiL2Nhc2gtZmxvdy9hZGQuc3ZnXCJcclxuICAgICAgICAgICAgICAgICAgaGVpZ2h0PXsoc2l6ZS53aWR0aCA+IDg2MCAmJiAyMikgfHwgKHNpemUud2lkdGggPCA4NjAgJiYgc2l6ZS53aWR0aCA+IDY4MCAmJiAxOCkgfHwgKHNpemUud2lkdGggPCA2ODAgJiYgMTYpfVxyXG4gICAgICAgICAgICAgICAgICB3aWR0aD17KHNpemUud2lkdGggPiA4NjAgJiYgMjIpIHx8IChzaXplLndpZHRoIDwgODYwICYmIHNpemUud2lkdGggPiA2ODAgJiYgMTgpIHx8IChzaXplLndpZHRoIDwgNjgwICYmIDE2KX1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgIHJlZj17ZHJvcERvd25JY29ufVxyXG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXtvblJldmVudWVTaG93fVxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJtbC0yIGN1cnNvci1wb2ludGVyXCJcclxuICAgICAgICAgICAgICAgICAgc3JjPVwiL2Nhc2gtZmxvdy9kcm9wZG93bi5zdmdcIlxyXG4gICAgICAgICAgICAgICAgICBoZWlnaHQ9eyhzaXplLndpZHRoID4gODYwICYmIDIyKSB8fCAoc2l6ZS53aWR0aCA8IDg2MCAmJiBzaXplLndpZHRoID4gNjgwICYmIDE4KSB8fCAoc2l6ZS53aWR0aCA8IDY4MCAmJiAxNil9XHJcbiAgICAgICAgICAgICAgICAgIHdpZHRoPXsoc2l6ZS53aWR0aCA+IDg2MCAmJiAyMikgfHwgKHNpemUud2lkdGggPCA4NjAgJiYgc2l6ZS53aWR0aCA+IDY4MCAmJiAxOCkgfHwgKHNpemUud2lkdGggPCA2ODAgJiYgMTYpfVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICByZWY9e2lubmVyQ29udGFpbmVyUmV2ZW51ZVJlZn1cclxuICAgICAgICAgICAgICBjbGFzc05hbWU9e2B3LWZ1bGwgJHtcclxuICAgICAgICAgICAgICAgIHNpemUud2lkdGggPCAxMTIwXHJcbiAgICAgICAgICAgICAgICAgID8gJ3RleHQtc20gbWRDb250YWluZXI6dGV4dC1iYXNlIGxnMUNvbnRhaW5lcjpteC04IGxnMUNvbnRhaW5lcjptYi02IG10LTQgIGJnLWJhY2tncm91bmQgcm91bmRlZC0yeGwgcHgtNCBtZENvbnRhaW5lcjpweC02IHB5LTQnXHJcbiAgICAgICAgICAgICAgICAgIDogJ3ctZnVsbCBteC04IG1iLTYgbXQtNCAgYmctYmFja2dyb3VuZCByb3VuZGVkLTJ4bCBweC00IG1kQ29udGFpbmVyOnB4LTYgcHktNCdcclxuICAgICAgICAgICAgICB9YH1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIHsvKiA8aHIgY2xhc3NOYW1lPVwidGV4dC1wcmltYXJ5IHctZnVsbFwiIC8+ICovfVxyXG4gICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgIHN0eWxlPXt7IGZvbnRTaXplOiBzaXplLndpZHRoIDwgNTIwICYmICcwLjZyZW0nIH19XHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LWZ1bGwgZ3JpZCBncmlkLWNvbHMtNmZyIGl0ZW1zLWNlbnRlciB0ZXh0LXhzIG1kQ29udGFpbmVyOnRleHQtc20gbGcxQ29udGFpbmVyOnRleHQtYmFzZVwiXHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPGRpdj5uYW1lPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2PnR5cGU8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXY+YW1vdW50PC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2PnN0YXJ0PC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2PmVuZDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdj48L2Rpdj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8aHIgY2xhc3NOYW1lPVwidGV4dC1wcmltYXJ5IHctZnVsbFwiIC8+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoLWZ1bGwgdy1mdWxsIHJvdW5kZWQtMnhsIGZsZXggZmxleC13cmFwIGZsZXgtY29sXCI+XHJcbiAgICAgICAgICAgICAgICA8RHJhZ0Ryb3BDb250ZXh0IG9uRHJhZ0VuZD17aGFuZGxlT25EcmFnRW5kfT5cclxuICAgICAgICAgICAgICAgICAgPERyb3BwYWJsZSBkcm9wcGFibGVJZD1cImVsZW1lbnRzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgeyhwcm92aWRlZCkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJlbGVtZW50c1wiIHsuLi5wcm92aWRlZC5kcm9wcGFibGVQcm9wc30gcmVmPXtwcm92aWRlZC5pbm5lclJlZn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtyZXZlbnVlRWxlbWVudHMgJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICByZXZlbnVlRWxlbWVudHMubWFwKChlbGVtZW50LCBpbmRleCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZWxlbWVudCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RHJhZ2dhYmxlIGtleT17ZWxlbWVudC5pbmRleH0gZHJhZ2dhYmxlSWQ9e2VsZW1lbnQuaW5kZXh9IGluZGV4PXtpbmRleH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyhwcm92aWRlZCkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFJldmVudWVFbGVtZW50XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb3ZpZGVkPXtwcm92aWRlZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0UmV2ZW51ZUVsZW1lbnRzPXtzZXRSZXZlbnVlRWxlbWVudHN9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1haW5Eb2N1bWVudD17bWFpbkRvY3VtZW50fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9qZWN0SWQ9e3Byb2plY3RJZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnRJZD17ZG9jdW1lbnRJZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV2ZW51ZUVsZW1lbnRzPXtyZXZlbnVlRWxlbWVudHN9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsZW1lbnQ9e2VsZW1lbnR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGluZGV4PXtpbmRleH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9EcmFnZ2FibGU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7cHJvdmlkZWQucGxhY2Vob2xkZXJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICA8L0Ryb3BwYWJsZT5cclxuICAgICAgICAgICAgICAgIDwvRHJhZ0Ryb3BDb250ZXh0PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgey8qIENvc3RzICovfVxyXG4gICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICByZWY9e2Nvc3RzUmVmfVxyXG4gICAgICAgICAgICBzdHlsZT17eyBoZWlnaHQ6IDU1LCB6SW5kZXg6IDEwIH19XHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cIm92ZXJmbG93LWhpZGRlbiByZWxhdGl2ZSB3LWZ1bGwgcm91bmRlZC0yeGwgYmctd2hpdGUgZGFyazpiZy1iYWNrZ3JvdW5kIHB4LTQgcHktNCBmbGV4IGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlciBtdC04IGZsZXggZmxleC13cmFwIHNoYWRvdy1tZFwiXHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsIGZsZXgganVzdGlmeS1iZXR3ZWVuIGl0ZW1zLWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGdDb250YWluZXI6bWwtMlwiPlxyXG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1zbSBsZ0NvbnRhaW5lcjp0ZXh0LWJhc2VcIj5Db3N0czwvcD5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxnQ29udGFpbmVyOm1yLTIgZmxleCBmbGV4LW5vd3JhcCBpdGVtcy1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgb25DbGljaz17b25Db3N0c0VsZW1lbnRBZGR9XHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImN1cnNvci1wb2ludGVyXCJcclxuICAgICAgICAgICAgICAgICAgc3JjPVwiL2Nhc2gtZmxvdy9hZGQuc3ZnXCJcclxuICAgICAgICAgICAgICAgICAgaGVpZ2h0PXsoc2l6ZS53aWR0aCA+IDg2MCAmJiAyMikgfHwgKHNpemUud2lkdGggPCA4NjAgJiYgc2l6ZS53aWR0aCA+IDY4MCAmJiAxOCkgfHwgKHNpemUud2lkdGggPCA2ODAgJiYgMTYpfVxyXG4gICAgICAgICAgICAgICAgICB3aWR0aD17KHNpemUud2lkdGggPiA4NjAgJiYgMjIpIHx8IChzaXplLndpZHRoIDwgODYwICYmIHNpemUud2lkdGggPiA2ODAgJiYgMTgpIHx8IChzaXplLndpZHRoIDwgNjgwICYmIDE2KX1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgIHJlZj17ZHJvcERvd25JY29uQ29zdHN9XHJcbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e29uQ29zdHNTaG93fVxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJtbC0yIGN1cnNvci1wb2ludGVyXCJcclxuICAgICAgICAgICAgICAgICAgc3JjPVwiL2Nhc2gtZmxvdy9kcm9wZG93bi5zdmdcIlxyXG4gICAgICAgICAgICAgICAgICBoZWlnaHQ9eyhzaXplLndpZHRoID4gODYwICYmIDIyKSB8fCAoc2l6ZS53aWR0aCA8IDg2MCAmJiBzaXplLndpZHRoID4gNjgwICYmIDE4KSB8fCAoc2l6ZS53aWR0aCA8IDY4MCAmJiAxNil9XHJcbiAgICAgICAgICAgICAgICAgIHdpZHRoPXsoc2l6ZS53aWR0aCA+IDg2MCAmJiAyMikgfHwgKHNpemUud2lkdGggPCA4NjAgJiYgc2l6ZS53aWR0aCA+IDY4MCAmJiAxOCkgfHwgKHNpemUud2lkdGggPCA2ODAgJiYgMTYpfVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICByZWY9e2lubmVyQ29udGFpbmVyQ29zdHNSZWZ9XHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgdy1mdWxsICR7XHJcbiAgICAgICAgICAgICAgICBzaXplLndpZHRoIDwgMTEyMFxyXG4gICAgICAgICAgICAgICAgICA/ICd0ZXh0LXNtIG1kQ29udGFpbmVyOnRleHQtYmFzZSBsZzFDb250YWluZXI6bXgtOCBsZzFDb250YWluZXI6bWItNiBtdC00ICBiZy1iYWNrZ3JvdW5kIHJvdW5kZWQtMnhsIHB4LTQgbWRDb250YWluZXI6cHgtNiBweS00J1xyXG4gICAgICAgICAgICAgICAgICA6ICd3LWZ1bGwgbXgtOCBtYi02IG10LTQgIGJnLWJhY2tncm91bmQgcm91bmRlZC0yeGwgcHgtNCBtZENvbnRhaW5lcjpweC02IHB5LTQnXHJcbiAgICAgICAgICAgICAgfWB9XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICB7LyogPGhyIGNsYXNzTmFtZT1cInRleHQtcHJpbWFyeSB3LWZ1bGxcIiAvPiAqL31cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbCBncmlkIGdyaWQtY29scy02ZnIgaXRlbXMtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2Pm5hbWU8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXY+dHlwZTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdj5hbW91bnQ8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXY+c3RhcnQ8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXY+ZW5kPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2PjwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxociBjbGFzc05hbWU9XCJ0ZXh0LXByaW1hcnkgdy1mdWxsXCIgLz5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImgtZnVsbCB3LWZ1bGwgcm91bmRlZC0yeGwgZmxleCBmbGV4LXdyYXAgZmxleC1jb2xcIj5cclxuICAgICAgICAgICAgICAgIDxEcmFnRHJvcENvbnRleHQgb25EcmFnRW5kPXtjb3N0c0hhbmRsZU9uRHJhZ0VuZH0+XHJcbiAgICAgICAgICAgICAgICAgIDxEcm9wcGFibGUgZHJvcHBhYmxlSWQ9XCJlbGVtZW50c1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIHsocHJvdmlkZWQpID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZWxlbWVudHNcIiB7Li4ucHJvdmlkZWQuZHJvcHBhYmxlUHJvcHN9IHJlZj17cHJvdmlkZWQuaW5uZXJSZWZ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7Y29zdHNFbGVtZW50cyAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNvc3RzRWxlbWVudHMubWFwKChlbGVtZW50LCBpbmRleCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZWxlbWVudCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RHJhZ2dhYmxlIGtleT17ZWxlbWVudC5pbmRleH0gZHJhZ2dhYmxlSWQ9e2VsZW1lbnQuaW5kZXh9IGluZGV4PXtpbmRleH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyhwcm92aWRlZCkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPENvc3RzRWxlbWVudFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm92aWRlZD17cHJvdmlkZWR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldENvc3RzRWxlbWVudHM9e3NldENvc3RzRWxlbWVudHN9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1haW5Eb2N1bWVudD17bWFpbkRvY3VtZW50fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9qZWN0SWQ9e3Byb2plY3RJZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnRJZD17ZG9jdW1lbnRJZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29zdHNFbGVtZW50cz17Y29zdHNFbGVtZW50c31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxlbWVudD17ZWxlbWVudH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5kZXg9e2luZGV4fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0RyYWdnYWJsZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtwcm92aWRlZC5wbGFjZWhvbGRlcn1cclxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgIDwvRHJvcHBhYmxlPlxyXG4gICAgICAgICAgICAgICAgPC9EcmFnRHJvcENvbnRleHQ+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC8+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IENhc2hGbG93UGFnZTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==