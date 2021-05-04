webpackHotUpdate_N_E("pages/dashboard/projects/[project]/business-plan",{

/***/ "./components/dashboard/startup/project/business-app/Chartjs.js":
/*!**********************************************************************!*\
  !*** ./components/dashboard/startup/project/business-app/Chartjs.js ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var C_off_saas_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var C_off_saas_node_modules_next_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var C_off_saas_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/regenerator */ "./node_modules/next/node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var C_off_saas_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(C_off_saas_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var C_off_saas_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var chartjs_to_image__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! chartjs-to-image */ "./node_modules/chartjs-to-image/index.js");
/* harmony import */ var chartjs_to_image__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(chartjs_to_image__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _PDFChart__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./PDFChart */ "./components/dashboard/startup/project/business-app/PDFChart.js");
/* harmony import */ var _react_pdf_renderer__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @react-pdf/renderer */ "./node_modules/@react-pdf/renderer/lib/react-pdf.browser.es.js");
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! uuid */ "./node_modules/uuid/dist/esm-browser/index.js");
/* harmony import */ var _utils_helpers__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../../utils/helpers */ "./utils/helpers.js");
/* harmony import */ var _lib_firebase__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../../lib/firebase */ "./lib/firebase.js");
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! gsap */ "./node_modules/gsap/index.js");
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! next/image */ "./node_modules/next/image.js");
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_14__);







var _jsxFileName = "C:\\off-saas\\components\\dashboard\\startup\\project\\business-app\\Chartjs.js",
    _this = undefined,
    _s = $RefreshSig$();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(C_off_saas_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }


 // import ChartJSImage from 'chart.js-image';








 // Chart functions
// import { chartLabelsUpdate } from '../../../../../utils/chart';
// const MyDocument = ({ imageUrl }) => {
//   // console.log(imageUrl);
//   return (
//     <Document>
//       <Page size='A4'>
//         <View>
//           <Text>Section #1</Text>
//         </View>
//         <View>
//           <Image src={imageUrl && imageUrl} />
//         </View>
//       </Page>
//     </Document>
//   );
// };

var ChartJsComponent = function ChartJsComponent(_ref) {
  _s();

  var chartImageUpdate = _ref.chartImageUpdate,
      provided = _ref.provided,
      projectId = _ref.projectId,
      addChart = _ref.addChart,
      chartTypeUpdate = _ref.chartTypeUpdate,
      currentIndex = _ref.currentIndex,
      deleteField = _ref.deleteField,
      containerRef = _ref.containerRef,
      datasetLabel6Update = _ref.datasetLabel6Update,
      datasetLabel5Update = _ref.datasetLabel5Update,
      datasetLabel4Update = _ref.datasetLabel4Update,
      datasetLabel3Update = _ref.datasetLabel3Update,
      datasetLabel2Update = _ref.datasetLabel2Update,
      datasetLabel1Update = _ref.datasetLabel1Update,
      dataset6Update = _ref.dataset6Update,
      dataset5Update = _ref.dataset5Update,
      dataset4Update = _ref.dataset4Update,
      dataset3Update = _ref.dataset3Update,
      dataset2Update = _ref.dataset2Update,
      dataset1Update = _ref.dataset1Update,
      labelUpdate = _ref.labelUpdate,
      chartLabelsUpdate = _ref.chartLabelsUpdate,
      field = _ref.field,
      selectedSection = _ref.selectedSection,
      chartValueUpdate = _ref.chartValueUpdate,
      index = _ref.index;
  console.log('FIELD --> ', field);
  var chartRef = Object(react__WEBPACK_IMPORTED_MODULE_5__["useRef"])();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])('Simple legend'),
      inputData = _useState[0],
      setInputData = _useState[1];

  var toSaveChart = new chartjs_to_image__WEBPACK_IMPORTED_MODULE_6___default.a();
  toSaveChart.setConfig({
    type: 'bar',
    data: data,
    options: {
      responsive: false,
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])(),
      imageUrl = _useState2[0],
      setImageUrl = _useState2[1];

  var onChartSave = /*#__PURE__*/function () {
    var _ref2 = Object(C_off_saas_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_4__["default"])( /*#__PURE__*/C_off_saas_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default.a.mark(function _callee() {
      return C_off_saas_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.t0 = console;
              _context.next = 3;
              return toSaveChart.toDataUrl();

            case 3:
              _context.t1 = _context.sent;

              _context.t0.log.call(_context.t0, _context.t1);

            case 5:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function onChartSave() {
      return _ref2.apply(this, arguments);
    };
  }();

  Object(react__WEBPACK_IMPORTED_MODULE_5__["useEffect"])( /*#__PURE__*/Object(C_off_saas_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_4__["default"])( /*#__PURE__*/C_off_saas_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default.a.mark(function _callee2() {
    return C_off_saas_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default.a.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.t0 = setImageUrl;
            _context2.next = 3;
            return toSaveChart.toDataUrl();

          case 3:
            _context2.t1 = _context2.sent;
            (0, _context2.t0)(_context2.t1);
            console.log(imageUrl);

          case 6:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  })), []);

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])(false),
      open = _useState3[0],
      setOpen = _useState3[1];

  Object(react__WEBPACK_IMPORTED_MODULE_5__["useEffect"])(function () {
    setOpen(false);
    setOpen(true);
    return function () {
      return setOpen(false);
    };
  }); // -------------------------------- VALUES -------------------------------------

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])(''),
      name = _useState4[0],
      setName = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])(''),
      type = _useState5[0],
      setType = _useState5[1];

  var _useState6 = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])(''),
      value = _useState6[0],
      setValue = _useState6[1];

  var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])(''),
      color = _useState7[0],
      setColor = _useState7[1];

  var update = Object(react__WEBPACK_IMPORTED_MODULE_5__["useCallback"])(Object(_utils_helpers__WEBPACK_IMPORTED_MODULE_10__["default"])( /*#__PURE__*/function () {
    var _ref4 = Object(C_off_saas_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_4__["default"])( /*#__PURE__*/C_off_saas_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default.a.mark(function _callee3(data) {
      var currentSectionIndex;
      return C_off_saas_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default.a.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              _context3.next = 2;
              return data.selSection.fields.findIndex(function (field) {
                return field.index == data.index;
              });

            case 2:
              currentSectionIndex = _context3.sent;
              chartValueUpdate(data, data.index, currentSectionIndex);

            case 4:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3);
    }));

    return function (_x) {
      return _ref4.apply(this, arguments);
    };
  }(), 500), []);

  var updateName = function updateName(val) {
    var data = {
      name: val,
      index: index,
      selSection: selectedSection
    }; // update(data);

    setName(val);
  };

  var updateType = function updateType(val) {
    var data = {
      type: val,
      index: index,
      selSection: selectedSection
    }; // update(data);

    setType(val);
  };

  var updateValue = function updateValue(val) {
    var data = {
      value: val,
      index: index,
      selSection: selectedSection
    }; // update(data);

    setValue(val);
  };

  var updateColor = function updateColor(val) {
    var data = {
      color: val,
      index: index,
      selSection: selectedSection
    }; // update(data);

    setColor(val);
  }; // -------------------------------- New Chart Values ------------------------------------


  var onNewDataChartAdd = /*#__PURE__*/function () {
    var _ref5 = Object(C_off_saas_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_4__["default"])( /*#__PURE__*/C_off_saas_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default.a.mark(function _callee4() {
      var newData, currentChartIndex, newSelectedSection;
      return C_off_saas_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default.a.wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              newData = {
                name: name,
                type: type,
                value: value,
                color: color
              };
              _context4.next = 3;
              return selectedSection.fields.findIndex(function (field) {
                return field.index == index;
              });

            case 3:
              currentChartIndex = _context4.sent;
              // let newFieldsArray = [...selectedSection.fields];
              newSelectedSection = selectedSection;
              newSelectedSection.fields[currentChartIndex].data.push(newData);
              console.log(newSelectedSection); // newFieldsArray[currentChartIndex] = {
              //   index,
              //   type: 'chart',
              //   data: 'D'
              // }

              _lib_firebase__WEBPACK_IMPORTED_MODULE_11__["db"].collection('projects').doc(projectId).collection('businessPlan').doc(next_router__WEBPACK_IMPORTED_MODULE_14___default.a.query.project).collection('inputs') // .collection('currentBusinessPlan')
              //   .doc('GrcvhyJwvlWVy31QsiudoQKdKI72')
              //   .collection('inputs')
              .doc(selectedSection.id).update({
                fields: newSelectedSection.fields
              });

            case 8:
            case "end":
              return _context4.stop();
          }
        }
      }, _callee4);
    }));

    return function onNewDataChartAdd() {
      return _ref5.apply(this, arguments);
    };
  }(); // Chart Data fetching


  var _useState8 = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])(),
      chartData = _useState8[0],
      setChartData = _useState8[1];

  Object(react__WEBPACK_IMPORTED_MODULE_5__["useEffect"])( /*#__PURE__*/Object(C_off_saas_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_4__["default"])( /*#__PURE__*/C_off_saas_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default.a.mark(function _callee5() {
    var currentChartIndex;
    return C_off_saas_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default.a.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            _context5.next = 2;
            return selectedSection.fields.findIndex(function (field) {
              return field.index == index;
            });

          case 2:
            currentChartIndex = _context5.sent;
            _lib_firebase__WEBPACK_IMPORTED_MODULE_11__["db"].collection('projects').doc(projectId).collection('businessPlan').doc(next_router__WEBPACK_IMPORTED_MODULE_14___default.a.query.project).collection('inputs') // .collection('currentBusinessPlan')
            //   .doc('GrcvhyJwvlWVy31QsiudoQKdKI72')
            //   .collection('inputs')
            .doc(selectedSection.id).onSnapshot(function (serverUpdate) {
              var fields = serverUpdate.data().fields.map(function (field) {
                return field;
              });
              setChartData(fields[currentChartIndex]);
              console.log(fields[currentChartIndex]); // sections.sort((a, b) => b.createdAt - a.createdAt);
              // this.setState({ sections: sections });
            });

          case 4:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5);
  })), []);
  console.log(field);
  Object(react__WEBPACK_IMPORTED_MODULE_5__["useEffect"])(function () {
    field.labels[0] && setLabel1(field.labels[0]);
    field.labels[1] && setLabel2(field.labels[1]);
    field.labels[2] && setLabel3(field.labels[2]);
    field.labels[3] && setLabel4(field.labels[3]);
    field.labels[4] && setLabel5(field.labels[4]);
    field.labels[5] && setLabel6(field.labels[5]);
    field.labels[6] && setLabel7(field.labels[6]);
    field.labels[7] && setLabel8(field.labels[7]);
    field.labels[8] && setLabel9(field.labels[8]);
    field.labels[9] && setLabel10(field.labels[9]);
    field.labels[10] && setLabel11(field.labels[10]);
    field.labels[11] && setLabel12(field.labels[11]);
  }, [field]); // Dataset1

  Object(react__WEBPACK_IMPORTED_MODULE_5__["useEffect"])(function () {
    field.dataset1[0] && setDataset1Value1(field.dataset1[0]);
    field.dataset1[1] && setDataset1Value2(field.dataset1[1]);
    field.dataset1[2] && setDataset1Value3(field.dataset1[2]);
    field.dataset1[3] && setDataset1Value4(field.dataset1[3]);
    field.dataset1[4] && setDataset1Value5(field.dataset1[4]);
    field.dataset1[5] && setDataset1Value6(field.dataset1[5]);
    field.dataset1[6] && setDataset1Value7(field.dataset1[6]);
    field.dataset1[7] && setDataset1Value8(field.dataset1[7]);
    field.dataset1[8] && setDataset1Value9(field.dataset1[8]);
    field.dataset1[9] && setDataset1Value10(field.dataset1[9]);
    field.dataset1[10] && setDataset1Value11(field.dataset1[10]);
    field.dataset1[11] && setDataset1Value12(field.dataset1[11]);
  }, [field]); // Dataset2

  Object(react__WEBPACK_IMPORTED_MODULE_5__["useEffect"])(function () {
    field.dataset2[0] && setDataset2Value1(field.dataset2[0]);
    field.dataset2[1] && setDataset2Value2(field.dataset2[1]);
    field.dataset2[2] && setDataset2Value3(field.dataset2[2]);
    field.dataset2[3] && setDataset2Value4(field.dataset2[3]);
    field.dataset2[4] && setDataset2Value5(field.dataset2[4]);
    field.dataset2[5] && setDataset2Value6(field.dataset2[5]);
    field.dataset2[6] && setDataset2Value7(field.dataset2[6]);
    field.dataset2[7] && setDataset2Value8(field.dataset2[7]);
    field.dataset2[8] && setDataset2Value9(field.dataset2[8]);
    field.dataset2[9] && setDataset2Value10(field.dataset2[9]);
    field.dataset2[10] && setDataset2Value11(field.dataset2[10]);
    field.dataset2[11] && setDataset2Value12(field.dataset2[11]);
  }, [field]); // Dataset3

  Object(react__WEBPACK_IMPORTED_MODULE_5__["useEffect"])(function () {
    field.dataset3[0] && setDataset3Value1(field.dataset3[0]);
    field.dataset3[1] && setDataset3Value2(field.dataset3[1]);
    field.dataset3[2] && setDataset3Value3(field.dataset3[2]);
    field.dataset3[3] && setDataset3Value4(field.dataset3[3]);
    field.dataset3[4] && setDataset3Value5(field.dataset3[4]);
    field.dataset3[5] && setDataset3Value6(field.dataset3[5]);
    field.dataset3[6] && setDataset3Value7(field.dataset3[6]);
    field.dataset3[7] && setDataset3Value8(field.dataset3[7]);
    field.dataset3[8] && setDataset3Value9(field.dataset3[8]);
    field.dataset3[9] && setDataset3Value10(field.dataset3[9]);
    field.dataset3[10] && setDataset3Value11(field.dataset3[10]);
    field.dataset3[11] && setDataset3Value12(field.dataset3[11]);
  }, [field]); // Dataset4

  Object(react__WEBPACK_IMPORTED_MODULE_5__["useEffect"])(function () {
    field.dataset4[0] && setDataset4Value1(field.dataset4[0]);
    field.dataset4[1] && setDataset4Value2(field.dataset4[1]);
    field.dataset4[2] && setDataset4Value3(field.dataset4[2]);
    field.dataset4[3] && setDataset4Value4(field.dataset4[3]);
    field.dataset4[4] && setDataset4Value5(field.dataset4[4]);
    field.dataset4[5] && setDataset4Value6(field.dataset4[5]);
    field.dataset4[6] && setDataset4Value7(field.dataset4[6]);
    field.dataset4[7] && setDataset4Value8(field.dataset4[7]);
    field.dataset4[8] && setDataset4Value9(field.dataset4[8]);
    field.dataset4[9] && setDataset4Value10(field.dataset4[9]);
    field.dataset4[10] && setDataset4Value11(field.dataset4[10]);
    field.dataset4[11] && setDataset4Value12(field.dataset4[11]);
  }, [field]); // Dataset5

  Object(react__WEBPACK_IMPORTED_MODULE_5__["useEffect"])(function () {
    field.dataset5[0] && setDataset5Value1(field.dataset5[0]);
    field.dataset5[1] && setDataset5Value2(field.dataset5[1]);
    field.dataset5[2] && setDataset5Value3(field.dataset5[2]);
    field.dataset5[3] && setDataset5Value4(field.dataset5[3]);
    field.dataset5[4] && setDataset5Value5(field.dataset5[4]);
    field.dataset5[5] && setDataset5Value6(field.dataset5[5]);
    field.dataset5[6] && setDataset5Value7(field.dataset5[6]);
    field.dataset5[7] && setDataset5Value8(field.dataset5[7]);
    field.dataset5[8] && setDataset5Value9(field.dataset5[8]);
    field.dataset5[9] && setDataset5Value10(field.dataset5[9]);
    field.dataset5[10] && setDataset5Value11(field.dataset5[10]);
    field.dataset5[11] && setDataset5Value12(field.dataset5[11]);
  }, [field]); // Dataset6

  Object(react__WEBPACK_IMPORTED_MODULE_5__["useEffect"])(function () {
    field.dataset6[0] && setDataset6Value1(field.dataset6[0]);
    field.dataset6[1] && setDataset6Value2(field.dataset6[1]);
    field.dataset6[2] && setDataset6Value3(field.dataset6[2]);
    field.dataset6[3] && setDataset6Value4(field.dataset6[3]);
    field.dataset6[4] && setDataset6Value5(field.dataset6[4]);
    field.dataset6[5] && setDataset6Value6(field.dataset6[5]);
    field.dataset6[6] && setDataset6Value7(field.dataset6[6]);
    field.dataset6[7] && setDataset6Value8(field.dataset6[7]);
    field.dataset6[8] && setDataset6Value9(field.dataset6[8]);
    field.dataset6[9] && setDataset6Value10(field.dataset6[9]);
    field.dataset6[10] && setDataset6Value11(field.dataset6[10]);
    field.dataset6[11] && setDataset6Value12(field.dataset6[11]);
  }, [field]); // Dataset labels

  Object(react__WEBPACK_IMPORTED_MODULE_5__["useEffect"])(function () {
    field.dataset1Label && setDataset1Label(field.dataset1Label);
    field.dataset2Label && setDataset2Label(field.dataset2Label);
    field.dataset3Label && setDataset3Label(field.dataset3Label);
    field.dataset4Label && setDataset4Label(field.dataset4Label);
    field.dataset5Label && setDataset5Label(field.dataset5Label);
    field.dataset6Label && setDataset6Label(field.dataset6Label);
  }, [field]); // CHART
  // field.dataset1.map((data) => {
  //   console.log('data --> ', field.dataset1.indexOf(data));
  // });

  var colors = field.chartType == 'Pie chart' || field.chartType == 'Doughnut chart' ? ['rgba(205,220,57,1)', 'rgba(255,235,59,1)', 'rgba(255,193,7,1)', 'rgba(255,152,0,1)', 'rgba(255,87,34,1)', 'rgba(244,67,54,1)', 'rgba(233,30,99,1)', 'rgba(156,39,176,1)', 'rgba(103,58,183,1)', 'rgba(63,81,181,1)', 'rgba(96,125,139,1)', 'rgba(121,85,72,1)'] : field.chartType == 'Line chart' || field.chartType == 'Area chart' ? 'rgba(255,185,0 ,1 )' : ['rgba(255,185,0 ,1 )', 'rgba(255,185,0 ,1 )', 'rgba(255,185,0 ,1 )', 'rgba(255,185,0 ,1 )', 'rgba(255,185,0 ,1 )', 'rgba(255,185,0 ,1 )', 'rgba(255,185,0 ,1 )', 'rgba(255,185,0 ,1 )', 'rgba(255,185,0 ,1 )', 'rgba(255,185,0 ,1 )', 'rgba(255,185,0 ,1 )', 'rgba(255,185,0 ,1 )'];
  var colors1 = field.chartType == 'Pie chart' || field.chartType == 'Doughnut chart' ? ['rgba(205,220,57,1)', 'rgba(255,235,59,1)', 'rgba(255,193,7,1)', 'rgba(255,152,0,1)', 'rgba(255,87,34,1)', 'rgba(244,67,54,1)', 'rgba(233,30,99,1)', 'rgba(156,39,176,1)', 'rgba(103,58,183,1)', 'rgba(63,81,181,1)', 'rgba(96,125,139,1)', 'rgba(121,85,72,1)'] : field.chartType == 'Line chart' || field.chartType == 'Area chart' ? 'rgba(0,204,106 ,1 )' : ['rgba(0,204,106 ,1 )', 'rgba(0,204,106 ,1 )', 'rgba(0,204,106 ,1 )', 'rgba(0,204,106 ,1 )', 'rgba(0,204,106 ,1 )', 'rgba(0,204,106 ,1 )', 'rgba(0,204,106 ,1 )', 'rgba(0,204,106 ,1 )', 'rgba(0,204,106 ,1 )', 'rgba(0,204,106 ,1 )', 'rgba(0,204,106 ,1 )', 'rgba(0,204,106 ,1 )'];
  var colors2 = field.chartType == 'Pie chart' || field.chartType == 'Doughnut chart' ? ['rgba(205,220,57,1)', 'rgba(255,235,59,1)', 'rgba(255,193,7,1)', 'rgba(255,152,0,1)', 'rgba(255,87,34,1)', 'rgba(244,67,54,1)', 'rgba(233,30,99,1)', 'rgba(156,39,176,1)', 'rgba(103,58,183,1)', 'rgba(63,81,181,1)', 'rgba(96,125,139,1)', 'rgba(121,85,72,1)'] : field.chartType == 'Line chart' || field.chartType == 'Area chart' ? 'rgba(0,120,215 ,1 )' : ['rgba(0,120,215 ,1 )', 'rgba(0,120,215 ,1 )', 'rgba(0,120,215 ,1 )', 'rgba(0,120,215 ,1 )', 'rgba(0,120,215 ,1 )', 'rgba(0,120,215 ,1 )', 'rgba(0,120,215 ,1 )', 'rgba(0,120,215 ,1 )', 'rgba(0,120,215 ,1 )', 'rgba(0,120,215 ,1 )', 'rgba(0,120,215 ,1 )', 'rgba(0,120,215 ,1 )'];
  var colors3 = field.chartType == 'Pie chart' || field.chartType == 'Doughnut chart' ? ['rgba(205,220,57,1)', 'rgba(255,235,59,1)', 'rgba(255,193,7,1)', 'rgba(255,152,0,1)', 'rgba(255,87,34,1)', 'rgba(244,67,54,1)', 'rgba(233,30,99,1)', 'rgba(156,39,176,1)', 'rgba(103,58,183,1)', 'rgba(63,81,181,1)', 'rgba(96,125,139,1)', 'rgba(121,85,72,1)'] : field.chartType == 'Line chart' || field.chartType == 'Area chart' ? 'rgba(231,72,86 ,1 )' : ['rgba(231,72,86 ,1 )', 'rgba(231,72,86 ,1 )', 'rgba(231,72,86 ,1 )', 'rgba(231,72,86 ,1 )', 'rgba(231,72,86 ,1 )', 'rgba(231,72,86 ,1 )', 'rgba(231,72,86 ,1 )', 'rgba(231,72,86 ,1 )', 'rgba(231,72,86 ,1 )', 'rgba(231,72,86 ,1 )', 'rgba(231,72,86 ,1 )', 'rgba(231,72,86 ,1 )'];
  var colors4 = field.chartType == 'Pie chart' || field.chartType == 'Doughnut chart' ? ['rgba(205,220,57,1)', 'rgba(255,235,59,1)', 'rgba(255,193,7,1)', 'rgba(255,152,0,1)', 'rgba(255,87,34,1)', 'rgba(244,67,54,1)', 'rgba(233,30,99,1)', 'rgba(156,39,176,1)', 'rgba(103,58,183,1)', 'rgba(63,81,181,1)', 'rgba(96,125,139,1)', 'rgba(121,85,72,1)'] : field.chartType == 'Line chart' || field.chartType == 'Area chart' ? 'rgba(126,115,95 ,1 )' : ['rgba(126,115,95 ,1 )', 'rgba(126,115,95 ,1 )', 'rgba(126,115,95 ,1 )', 'rgba(126,115,95 ,1 )', 'rgba(126,115,95 ,1 )', 'rgba(126,115,95 ,1 )', 'rgba(126,115,95 ,1 )', 'rgba(126,115,95 ,1 )', 'rgba(126,115,95 ,1 )', 'rgba(126,115,95 ,1 )', 'rgba(126,115,95 ,1 )', 'rgba(126,115,95 ,1 )'];
  var colors5 = field.chartType == 'Pie chart' || field.chartType == 'Doughnut chart' ? ['rgba(205,220,57,1)', 'rgba(255,235,59,1)', 'rgba(255,193,7,1)', 'rgba(255,152,0,1)', 'rgba(255,87,34,1)', 'rgba(244,67,54,1)', 'rgba(233,30,99,1)', 'rgba(156,39,176,1)', 'rgba(103,58,183,1)', 'rgba(63,81,181,1)', 'rgba(96,125,139,1)', 'rgba(121,85,72,1)'] : field.chartType == 'Line chart' || field.chartType == 'Area chart' ? 'rgba(177,70,194 ,1 )' : ['rgba(177,70,194 ,1 )', 'rgba(177,70,194 ,1 )', 'rgba(177,70,194 ,1 )', 'rgba(177,70,194 ,1 )', 'rgba(177,70,194 ,1 )', 'rgba(177,70,194 ,1 )', 'rgba(177,70,194 ,1 )', 'rgba(177,70,194 ,1 )', 'rgba(177,70,194 ,1 )', 'rgba(177,70,194 ,1 )', 'rgba(177,70,194 ,1 )', 'rgba(177,70,194 ,1 )'];
  console.log(field.dataset1);
  var data = {
    labels: field.labels && Object(C_off_saas_node_modules_next_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__["default"])(field.labels.map(function (label) {
      if (label !== '') {
        return label;
      } else {
        return '';
      }
    })),
    datasets: [// Dataset1
    {
      label: field.dataset1Label && field.dataset1Label,
      data: field.dataset1 && field.dataset1.map(function (data) {
        if (data !== '') {
          return data;
        }
      }),
      backgroundColor: colors,
      borderWidth: field.chartType == 'Area chart' ? 0 : field.chartType == 'Pie chart' || field.chartType == 'Doughnut chart' && 2
    }, // Dataset2
    {
      label: field.dataset2Label && field.dataset2Label,
      data: field.dataset2 && field.dataset2.map(function (data) {
        if (data !== '') {
          return data;
        }
      }),
      backgroundColor: colors1,
      borderWidth: field.chartType == 'Area chart' ? 0 : field.chartType == 'Pie chart' || field.chartType == 'Doughnut chart' && 2
    }, // Dataset3
    {
      label: field.dataset3Label && field.dataset3Label,
      data: field.dataset3 && field.dataset3.map(function (data) {
        if (data !== '') {
          return data;
        }
      }),
      backgroundColor: colors2,
      borderWidth: field.chartType == 'Area chart' ? 0 : field.chartType == 'Pie chart' || field.chartType == 'Doughnut chart' && 2
    }, // Dataset4
    {
      label: field.dataset4Label && field.dataset4Label,
      data: field.dataset4 && field.dataset4.map(function (data) {
        if (data !== '') {
          return data;
        }
      }),
      backgroundColor: colors3,
      borderWidth: field.chartType == 'Area chart' ? 0 : field.chartType == 'Pie chart' || field.chartType == 'Doughnut chart' && 2
    }, // Dataset5
    {
      label: field.dataset5Label && field.dataset5Label,
      data: field.dataset5 && field.dataset5.map(function (data) {
        if (data !== '') {
          return data;
        }
      }),
      backgroundColor: colors4,
      borderWidth: field.chartType == 'Area chart' ? 0 : field.chartType == 'Pie chart' || field.chartType == 'Doughnut chart' && 2
    }, // Dataset6
    {
      label: field.dataset6Label && field.dataset6Label,
      data: field.dataset6 && field.dataset6.map(function (data) {
        if (data !== '') {
          return data;
        }
      }),
      backgroundColor: colors5,
      borderWidth: field.chartType == 'Area chart' ? 0 : field.chartType == 'Pie chart' || field.chartType == 'Doughnut chart' && 2
    }]
  };
  console.log(data);

  var _useState9 = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])(),
      newChart = _useState9[0],
      setNewChart = _useState9[1];

  var _useState10 = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])([]),
      datasets = _useState10[0],
      setDatasets = _useState10[1];

  Object(react__WEBPACK_IMPORTED_MODULE_5__["useEffect"])( /*#__PURE__*/Object(C_off_saas_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_4__["default"])( /*#__PURE__*/C_off_saas_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default.a.mark(function _callee6() {
    var myChartRef, datas, fill, newDatasets, chartType;
    return C_off_saas_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default.a.wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            // console.log('-------- DESTROY --------');
            // newChart && await newChart.destroy() && console.log('-------- DESTROY --------');
            // const id = field.chartId;
            // if (window.id && window.id !== null) {
            //   window.id.destroy();
            // }
            // const myChartRef = chartRef.current.getContext('2d');
            // const myChartRef = field.chartId;
            document.getElementById("".concat(field.index, "chartContainer")).innerHTML = '&nbsp;';
            document.getElementById("".concat(field.index, "chartContainer")).innerHTML = "<canvas id=".concat(field.index, " ref=").concat(chartRef, "></canvas>");
            myChartRef = document.getElementById(field.index).getContext('2d'); // data.datasets.map((dataset) => {
            //   data.labels.map((label) => {
            //     if (label !== '' && dataset.label !== '') {
            //       setDatasets(dataset);
            //     }
            //   })
            // })
            // const datas = data.datasets.map((dataset) => {
            //   const test = dataset.data.filter((datarer, index) => {
            //     if (data.labels[index] !== '') {
            //       return datarer
            //     }
            //   })
            //   return test
            // })

            console.log(data.datasets);
            datas = data.datasets.map(function (dataset) {
              console.log(dataset.data[0]);
              var test1 = dataset.data.map(function (datases) {
                if (datases !== undefined) {
                  return datases;
                } else {
                  return '';
                }
              });
              var test = test1.map(function (datarer, index) {
                if (data.labels[index] !== '') {
                  return datarer;
                }
              });
              var test2 = test.filter(function (obj) {
                return obj !== undefined;
              });
              return test2;
            });
            console.log('DATAS --> ', datas); // const data1 = datas[0][0] ? datas[0][0].map((datarr) => datarr) : [];
            // const data2 = datas[1][0] ? datas[1][0].map((datarr) => datarr) : [];
            // const data3 = datas[2][0] ? datas[2][0].map((datarr) => datarr) : [];
            // const data4 = datas[3][0] ? datas[3][0].map((datarr) => datarr) : [];
            // const data5 = datas[4][0] ? datas[4][0].map((datarr) => datarr) : [];
            // const data6 = datas[5][0] ? datas[5][0].map((datarr) => datarr) : [];

            fill = field.chartType == 'Line chart' ? false : undefined;
            newDatasets = [{
              label: data.datasets[0].label,
              data: datas[0],
              backgroundColor: data.datasets[0].backgroundColor,
              borderColor: field.chartType == 'Line chart' ? 'rgba(255,185,0 ,1 )' : 'rgb(255, 255, 255)',
              borderWidth: data.datasets[0].borderWidth,
              fill: fill
            }, {
              label: data.datasets[1].label,
              data: datas[1],
              backgroundColor: data.datasets[1].backgroundColor,
              borderColor: field.chartType == 'Line chart' ? 'rgba(0,204,106 ,1 )' : 'rgb(255, 255, 255)',
              borderWidth: data.datasets[1].borderWidth,
              fill: fill
            }, {
              label: data.datasets[2].label,
              data: datas[2],
              backgroundColor: data.datasets[2].backgroundColor,
              borderColor: field.chartType == 'Line chart' ? 'rgba(0,120,215 ,1 )' : 'rgb(255, 255, 255)',
              borderWidth: data.datasets[2].borderWidth,
              fill: fill
            }, {
              label: data.datasets[3].label,
              data: datas[3],
              backgroundColor: data.datasets[3].backgroundColor,
              borderColor: field.chartType == 'Line chart' ? 'rgba(231,72,86 ,1 )' : 'rgb(255, 255, 255)',
              borderWidth: data.datasets[3].borderWidth,
              fill: fill
            }, {
              label: data.datasets[4].label,
              data: datas[4],
              backgroundColor: data.datasets[4].backgroundColor,
              borderColor: field.chartType == 'Line chart' ? 'rgba(126,115,95 ,1 )' : 'rgb(255, 255, 255)',
              borderWidth: data.datasets[4].borderWidth,
              fill: fill
            }, {
              label: data.datasets[5].label,
              data: datas[5],
              backgroundColor: data.datasets[5].backgroundColor,
              borderColor: field.chartType == 'Line chart' ? 'rgba(177,70,194 ,1 )' : 'rgb(255, 255, 255)',
              borderWidth: data.datasets[5].borderWidth,
              fill: fill
            }];
            console.log(newDatasets);
            chartType = [field.chartType == 'Bar chart' ? 'bar' : '', field.chartType == 'Reverse chart' ? 'horizontalBar' : '', field.chartType == 'Line chart' ? 'line' : '', field.chartType == 'Pie chart' ? 'pie' : '', field.chartType == 'Doughnut chart' ? 'doughnut' : '', field.chartType == 'Area chart' ? 'line' : ''];
            window.id = new Chart(myChartRef, {
              type: chartType.filter(function (type) {
                return type !== '';
              }),
              data: {
                labels: data.labels.filter(function (label) {
                  return label !== '';
                }),
                datasets: newDatasets.filter(function (dataset) {
                  return dataset.label !== '';
                })
              },
              options: {
                skipNull: true,
                responsive: true,
                legend: {
                  position: 'bottom'
                },
                // defaultFontFamily: (Chart.defaults.global.defaultFontFamily =
                //   'Comfortaa'),
                scales: {
                  yAxes: [{
                    stacked: field.stacked == true ? true : false,
                    ticks: {
                      beginAtZero: true
                    }
                  }],
                  xAxes: [{
                    stacked: field.stacked == true ? true : false,
                    ticks: {
                      beginAtZero: true
                    }
                  }]
                }
              }
            }); // addChart(chart, currentIndex, index, selectedSection);

          case 11:
          case "end":
            return _context6.stop();
        }
      }
    }, _callee6);
  })), [data.labels, data.datasets, data]);

  var _useState11 = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])(''),
      label1 = _useState11[0],
      setLabel1 = _useState11[1];

  var _useState12 = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])(''),
      label2 = _useState12[0],
      setLabel2 = _useState12[1];

  var _useState13 = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])(''),
      label3 = _useState13[0],
      setLabel3 = _useState13[1];

  var _useState14 = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])(''),
      label4 = _useState14[0],
      setLabel4 = _useState14[1];

  var _useState15 = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])(''),
      label5 = _useState15[0],
      setLabel5 = _useState15[1];

  var _useState16 = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])(''),
      label6 = _useState16[0],
      setLabel6 = _useState16[1];

  var _useState17 = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])(''),
      label7 = _useState17[0],
      setLabel7 = _useState17[1];

  var _useState18 = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])(''),
      label8 = _useState18[0],
      setLabel8 = _useState18[1];

  var _useState19 = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])(''),
      label9 = _useState19[0],
      setLabel9 = _useState19[1];

  var _useState20 = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])(''),
      label10 = _useState20[0],
      setLabel10 = _useState20[1];

  var _useState21 = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])(''),
      label11 = _useState21[0],
      setLabel11 = _useState21[1];

  var _useState22 = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])(''),
      label12 = _useState22[0],
      setLabel12 = _useState22[1];

  var onLabelChange1 = function onLabelChange1(label) {
    setLabel1(label);
    var data = {
      labelOne: 'true',
      label1: label,
      index: index,
      selSection: selectedSection
    };
    labelUpdate(data);
  };

  var onLabelChange2 = function onLabelChange2(label) {
    setLabel2(label);
    var data = {
      label22: 'true',
      label2: label,
      index: index,
      selSection: selectedSection
    };
    labelUpdate(data);
  };

  var onLabelChange3 = function onLabelChange3(label) {
    setLabel3(label);
    var data = {
      label33: 'true',
      label3: label,
      index: index,
      selSection: selectedSection
    };
    labelUpdate(data);
  };

  var onLabelChange4 = function onLabelChange4(label) {
    setLabel4(label);
    var data = {
      label44: 'true',
      label4: label,
      index: index,
      selSection: selectedSection
    };
    labelUpdate(data);
  };

  var onLabelChange5 = function onLabelChange5(label) {
    setLabel5(label);
    var data = {
      label55: 'true',
      label5: label,
      index: index,
      selSection: selectedSection
    };
    labelUpdate(data);
  };

  var onLabelChange6 = function onLabelChange6(label) {
    setLabel6(label);
    var data = {
      label66: 'true',
      label6: label,
      index: index,
      selSection: selectedSection
    };
    labelUpdate(data);
  };

  var onLabelChange7 = function onLabelChange7(label) {
    setLabel7(label);
    var data = {
      label77: 'true',
      label7: label,
      index: index,
      selSection: selectedSection
    };
    labelUpdate(data);
  };

  var onLabelChange8 = function onLabelChange8(label) {
    setLabel8(label);
    var data = {
      label88: 'true',
      label8: label,
      index: index,
      selSection: selectedSection
    };
    labelUpdate(data);
  };

  var onLabelChange9 = function onLabelChange9(label) {
    setLabel9(label);
    var data = {
      label99: 'true',
      label9: label,
      index: index,
      selSection: selectedSection
    };
    labelUpdate(data);
  };

  var onLabelChange10 = function onLabelChange10(label) {
    setLabel10(label);
    var data = {
      label100: 'true',
      label10: label,
      index: index,
      selSection: selectedSection
    };
    labelUpdate(data);
  };

  var onLabelChange11 = function onLabelChange11(label) {
    setLabel11(label);
    var data = {
      label111: 'true',
      label11: label,
      index: index,
      selSection: selectedSection
    };
    labelUpdate(data);
  };

  var onLabelChange12 = function onLabelChange12(label) {
    setLabel12(label);
    var data = {
      label120: 'true',
      label12: label,
      index: index,
      selSection: selectedSection
    };
    labelUpdate(data);
  };

  console.log(field); // DATASETS

  var _useState23 = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])(''),
      dataset1Label = _useState23[0],
      setDataset1Label = _useState23[1];

  var _useState24 = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])(''),
      dataset2Label = _useState24[0],
      setDataset2Label = _useState24[1];

  var _useState25 = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])(''),
      dataset3Label = _useState25[0],
      setDataset3Label = _useState25[1];

  var _useState26 = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])(''),
      dataset4Label = _useState26[0],
      setDataset4Label = _useState26[1];

  var _useState27 = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])(''),
      dataset5Label = _useState27[0],
      setDataset5Label = _useState27[1];

  var _useState28 = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])(''),
      dataset6Label = _useState28[0],
      setDataset6Label = _useState28[1]; // DATASET 1 --- START ---


  var _useState29 = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])(''),
      dataset1Value1 = _useState29[0],
      setDataset1Value1 = _useState29[1];

  var _useState30 = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])(''),
      dataset1Value2 = _useState30[0],
      setDataset1Value2 = _useState30[1];

  var _useState31 = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])(''),
      dataset1Value3 = _useState31[0],
      setDataset1Value3 = _useState31[1];

  var _useState32 = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])(''),
      dataset1Value4 = _useState32[0],
      setDataset1Value4 = _useState32[1];

  var _useState33 = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])(''),
      dataset1Value5 = _useState33[0],
      setDataset1Value5 = _useState33[1];

  var _useState34 = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])(''),
      dataset1Value6 = _useState34[0],
      setDataset1Value6 = _useState34[1];

  var _useState35 = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])(''),
      dataset1Value7 = _useState35[0],
      setDataset1Value7 = _useState35[1];

  var _useState36 = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])(''),
      dataset1Value8 = _useState36[0],
      setDataset1Value8 = _useState36[1];

  var _useState37 = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])(''),
      dataset1Value9 = _useState37[0],
      setDataset1Value9 = _useState37[1];

  var _useState38 = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])(''),
      dataset1Value10 = _useState38[0],
      setDataset1Value10 = _useState38[1];

  var _useState39 = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])(''),
      dataset1Value11 = _useState39[0],
      setDataset1Value11 = _useState39[1];

  var _useState40 = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])(''),
      dataset1Value12 = _useState40[0],
      setDataset1Value12 = _useState40[1];

  var onDataset1Value1Change = function onDataset1Value1Change(datasetValue) {
    setDataset1Value1(datasetValue);
    var data = {
      dataset1ValueOne: 'true',
      dataset1Value1: datasetValue,
      index: index,
      selSection: selectedSection
    };
    dataset1Update(data);
  };

  var onDataset1Value2Change = function onDataset1Value2Change(datasetValue) {
    setDataset1Value2(datasetValue);
    var data = {
      dataset1Value22: 'true',
      dataset1Value2: datasetValue,
      index: index,
      selSection: selectedSection
    };
    dataset1Update(data);
  };

  var onDataset1Value3Change = function onDataset1Value3Change(datasetValue) {
    setDataset1Value3(datasetValue);
    var data = {
      dataset1Value33: 'true',
      dataset1Value3: datasetValue,
      index: index,
      selSection: selectedSection
    };
    dataset1Update(data);
  };

  var onDataset1Value4Change = function onDataset1Value4Change(datasetValue) {
    setDataset1Value4(datasetValue);
    var data = {
      dataset1Value44: 'true',
      dataset1Value4: datasetValue,
      index: index,
      selSection: selectedSection
    };
    dataset1Update(data);
  };

  var onDataset1Value5Change = function onDataset1Value5Change(datasetValue) {
    setDataset1Value5(datasetValue);
    var data = {
      dataset1Value55: 'true',
      dataset1Value5: datasetValue,
      index: index,
      selSection: selectedSection
    };
    dataset1Update(data);
  };

  var onDataset1Value6Change = function onDataset1Value6Change(datasetValue) {
    setDataset1Value6(datasetValue);
    var data = {
      dataset1Value66: 'true',
      dataset1Value6: datasetValue,
      index: index,
      selSection: selectedSection
    };
    dataset1Update(data);
  };

  var onDataset1Value7Change = function onDataset1Value7Change(datasetValue) {
    setDataset1Value7(datasetValue);
    var data = {
      dataset1Value77: 'true',
      dataset1Value7: datasetValue,
      index: index,
      selSection: selectedSection
    };
    dataset1Update(data);
  };

  var onDataset1Value8Change = function onDataset1Value8Change(datasetValue) {
    setDataset1Value8(datasetValue);
    var data = {
      dataset1Value88: 'true',
      dataset1Value8: datasetValue,
      index: index,
      selSection: selectedSection
    };
    dataset1Update(data);
  };

  var onDataset1Value9Change = function onDataset1Value9Change(datasetValue) {
    setDataset1Value9(datasetValue);
    var data = {
      dataset1Value99: 'true',
      dataset1Value9: datasetValue,
      index: index,
      selSection: selectedSection
    };
    dataset1Update(data);
  };

  var onDataset1Value10Change = function onDataset1Value10Change(datasetValue) {
    setDataset1Value10(datasetValue);
    var data = {
      dataset1Value100: 'true',
      dataset1Value10: datasetValue,
      index: index,
      selSection: selectedSection
    };
    dataset1Update(data);
  };

  var onDataset1Value11Change = function onDataset1Value11Change(datasetValue) {
    setDataset1Value11(datasetValue);
    var data = {
      dataset1Value111: 'true',
      dataset1Value11: datasetValue,
      index: index,
      selSection: selectedSection
    };
    dataset1Update(data);
  };

  var onDataset1Value12Change = function onDataset1Value12Change(datasetValue) {
    setDataset1Value12(datasetValue);
    var data = {
      dataset1Value120: 'true',
      dataset1Value12: datasetValue,
      index: index,
      selSection: selectedSection
    };
    dataset1Update(data);
  }; // DATASET 1 --- END ---
  // DATASET 2 --- START ---


  var _useState41 = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])(''),
      dataset2Value1 = _useState41[0],
      setDataset2Value1 = _useState41[1];

  var _useState42 = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])(''),
      dataset2Value2 = _useState42[0],
      setDataset2Value2 = _useState42[1];

  var _useState43 = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])(''),
      dataset2Value3 = _useState43[0],
      setDataset2Value3 = _useState43[1];

  var _useState44 = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])(''),
      dataset2Value4 = _useState44[0],
      setDataset2Value4 = _useState44[1];

  var _useState45 = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])(''),
      dataset2Value5 = _useState45[0],
      setDataset2Value5 = _useState45[1];

  var _useState46 = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])(''),
      dataset2Value6 = _useState46[0],
      setDataset2Value6 = _useState46[1];

  var _useState47 = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])(''),
      dataset2Value7 = _useState47[0],
      setDataset2Value7 = _useState47[1];

  var _useState48 = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])(''),
      dataset2Value8 = _useState48[0],
      setDataset2Value8 = _useState48[1];

  var _useState49 = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])(''),
      dataset2Value9 = _useState49[0],
      setDataset2Value9 = _useState49[1];

  var _useState50 = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])(''),
      dataset2Value10 = _useState50[0],
      setDataset2Value10 = _useState50[1];

  var _useState51 = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])(''),
      dataset2Value11 = _useState51[0],
      setDataset2Value11 = _useState51[1];

  var _useState52 = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])(''),
      dataset2Value12 = _useState52[0],
      setDataset2Value12 = _useState52[1];

  var onDataset2Value1Change = function onDataset2Value1Change(datasetValue) {
    setDataset2Value1(datasetValue);
    var data = {
      dataset2ValueOne: 'true',
      dataset2Value1: datasetValue,
      index: index,
      selSection: selectedSection
    };
    dataset2Update(data);
  };

  var onDataset2Value2Change = function onDataset2Value2Change(datasetValue) {
    setDataset2Value2(datasetValue);
    var data = {
      dataset2Value22: 'true',
      dataset2Value2: datasetValue,
      index: index,
      selSection: selectedSection
    };
    dataset2Update(data);
  };

  var onDataset2Value3Change = function onDataset2Value3Change(datasetValue) {
    setDataset2Value3(datasetValue);
    var data = {
      dataset2Value33: 'true',
      dataset2Value3: datasetValue,
      index: index,
      selSection: selectedSection
    };
    dataset2Update(data);
  };

  var onDataset2Value4Change = function onDataset2Value4Change(datasetValue) {
    setDataset2Value4(datasetValue);
    var data = {
      dataset2Value44: 'true',
      dataset2Value4: datasetValue,
      index: index,
      selSection: selectedSection
    };
    dataset2Update(data);
  };

  var onDataset2Value5Change = function onDataset2Value5Change(datasetValue) {
    setDataset2Value5(datasetValue);
    var data = {
      dataset2Value55: 'true',
      dataset2Value5: datasetValue,
      index: index,
      selSection: selectedSection
    };
    dataset2Update(data);
  };

  var onDataset2Value6Change = function onDataset2Value6Change(datasetValue) {
    setDataset2Value6(datasetValue);
    var data = {
      dataset2Value66: 'true',
      dataset2Value6: datasetValue,
      index: index,
      selSection: selectedSection
    };
    dataset2Update(data);
  };

  var onDataset2Value7Change = function onDataset2Value7Change(datasetValue) {
    setDataset2Value7(datasetValue);
    var data = {
      dataset2Value77: 'true',
      dataset2Value7: datasetValue,
      index: index,
      selSection: selectedSection
    };
    dataset2Update(data);
  };

  var onDataset2Value8Change = function onDataset2Value8Change(datasetValue) {
    setDataset2Value8(datasetValue);
    var data = {
      dataset2Value88: 'true',
      dataset2Value8: datasetValue,
      index: index,
      selSection: selectedSection
    };
    dataset2Update(data);
  };

  var onDataset2Value9Change = function onDataset2Value9Change(datasetValue) {
    setDataset2Value9(datasetValue);
    var data = {
      dataset2Value99: 'true',
      dataset2Value9: datasetValue,
      index: index,
      selSection: selectedSection
    };
    dataset2Update(data);
  };

  var onDataset2Value10Change = function onDataset2Value10Change(datasetValue) {
    setDataset2Value10(datasetValue);
    var data = {
      dataset2Value100: 'true',
      dataset2Value10: datasetValue,
      index: index,
      selSection: selectedSection
    };
    dataset2Update(data);
  };

  var onDataset2Value11Change = function onDataset2Value11Change(datasetValue) {
    setDataset2Value11(datasetValue);
    var data = {
      dataset2Value111: 'true',
      dataset2Value11: datasetValue,
      index: index,
      selSection: selectedSection
    };
    dataset2Update(data);
  };

  var onDataset2Value12Change = function onDataset2Value12Change(datasetValue) {
    setDataset2Value12(datasetValue);
    var data = {
      dataset2Value120: 'true',
      dataset2Value12: datasetValue,
      index: index,
      selSection: selectedSection
    };
    dataset2Update(data);
  }; // DATASET 2 --- END ---
  // DATASET 3 --- START ---


  var _useState53 = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])(''),
      dataset3Value1 = _useState53[0],
      setDataset3Value1 = _useState53[1];

  var _useState54 = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])(''),
      dataset3Value2 = _useState54[0],
      setDataset3Value2 = _useState54[1];

  var _useState55 = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])(''),
      dataset3Value3 = _useState55[0],
      setDataset3Value3 = _useState55[1];

  var _useState56 = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])(''),
      dataset3Value4 = _useState56[0],
      setDataset3Value4 = _useState56[1];

  var _useState57 = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])(''),
      dataset3Value5 = _useState57[0],
      setDataset3Value5 = _useState57[1];

  var _useState58 = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])(''),
      dataset3Value6 = _useState58[0],
      setDataset3Value6 = _useState58[1];

  var _useState59 = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])(''),
      dataset3Value7 = _useState59[0],
      setDataset3Value7 = _useState59[1];

  var _useState60 = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])(''),
      dataset3Value8 = _useState60[0],
      setDataset3Value8 = _useState60[1];

  var _useState61 = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])(''),
      dataset3Value9 = _useState61[0],
      setDataset3Value9 = _useState61[1];

  var _useState62 = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])(''),
      dataset3Value10 = _useState62[0],
      setDataset3Value10 = _useState62[1];

  var _useState63 = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])(''),
      dataset3Value11 = _useState63[0],
      setDataset3Value11 = _useState63[1];

  var _useState64 = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])(''),
      dataset3Value12 = _useState64[0],
      setDataset3Value12 = _useState64[1];

  var onDataset3Value1Change = function onDataset3Value1Change(datasetValue) {
    setDataset3Value1(datasetValue);
    var data = {
      dataset3ValueOne: 'true',
      dataset3Value1: datasetValue,
      index: index,
      selSection: selectedSection
    };
    dataset3Update(data);
  };

  var onDataset3Value2Change = function onDataset3Value2Change(datasetValue) {
    setDataset3Value2(datasetValue);
    var data = {
      dataset3Value22: 'true',
      dataset3Value2: datasetValue,
      index: index,
      selSection: selectedSection
    };
    dataset3Update(data);
  };

  var onDataset3Value3Change = function onDataset3Value3Change(datasetValue) {
    setDataset3Value3(datasetValue);
    var data = {
      dataset3Value33: 'true',
      dataset3Value3: datasetValue,
      index: index,
      selSection: selectedSection
    };
    dataset3Update(data);
  };

  var onDataset3Value4Change = function onDataset3Value4Change(datasetValue) {
    setDataset3Value4(datasetValue);
    var data = {
      dataset3Value44: 'true',
      dataset3Value4: datasetValue,
      index: index,
      selSection: selectedSection
    };
    dataset3Update(data);
  };

  var onDataset3Value5Change = function onDataset3Value5Change(datasetValue) {
    setDataset3Value5(datasetValue);
    var data = {
      dataset3Value55: 'true',
      dataset3Value5: datasetValue,
      index: index,
      selSection: selectedSection
    };
    dataset3Update(data);
  };

  var onDataset3Value6Change = function onDataset3Value6Change(datasetValue) {
    setDataset3Value6(datasetValue);
    var data = {
      dataset3Value66: 'true',
      dataset3Value6: datasetValue,
      index: index,
      selSection: selectedSection
    };
    dataset3Update(data);
  };

  var onDataset3Value7Change = function onDataset3Value7Change(datasetValue) {
    setDataset3Value7(datasetValue);
    var data = {
      dataset3Value77: 'true',
      dataset3Value7: datasetValue,
      index: index,
      selSection: selectedSection
    };
    dataset3Update(data);
  };

  var onDataset3Value8Change = function onDataset3Value8Change(datasetValue) {
    setDataset3Value8(datasetValue);
    var data = {
      dataset3Value88: 'true',
      dataset3Value8: datasetValue,
      index: index,
      selSection: selectedSection
    };
    dataset3Update(data);
  };

  var onDataset3Value9Change = function onDataset3Value9Change(datasetValue) {
    setDataset3Value9(datasetValue);
    var data = {
      dataset3Value99: 'true',
      dataset3Value9: datasetValue,
      index: index,
      selSection: selectedSection
    };
    dataset3Update(data);
  };

  var onDataset3Value10Change = function onDataset3Value10Change(datasetValue) {
    setDataset3Value10(datasetValue);
    var data = {
      dataset3Value100: 'true',
      dataset3Value10: datasetValue,
      index: index,
      selSection: selectedSection
    };
    dataset3Update(data);
  };

  var onDataset3Value11Change = function onDataset3Value11Change(datasetValue) {
    setDataset3Value11(datasetValue);
    var data = {
      dataset3Value111: 'true',
      dataset3Value11: datasetValue,
      index: index,
      selSection: selectedSection
    };
    dataset3Update(data);
  };

  var onDataset3Value12Change = function onDataset3Value12Change(datasetValue) {
    setDataset3Value12(datasetValue);
    var data = {
      dataset3Value120: 'true',
      dataset3Value12: datasetValue,
      index: index,
      selSection: selectedSection
    };
    dataset3Update(data);
  }; // DATASET 3 --- END ---
  // DATASET 4 --- START ---


  var _useState65 = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])(''),
      dataset4Value1 = _useState65[0],
      setDataset4Value1 = _useState65[1];

  var _useState66 = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])(''),
      dataset4Value2 = _useState66[0],
      setDataset4Value2 = _useState66[1];

  var _useState67 = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])(''),
      dataset4Value3 = _useState67[0],
      setDataset4Value3 = _useState67[1];

  var _useState68 = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])(''),
      dataset4Value4 = _useState68[0],
      setDataset4Value4 = _useState68[1];

  var _useState69 = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])(''),
      dataset4Value5 = _useState69[0],
      setDataset4Value5 = _useState69[1];

  var _useState70 = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])(''),
      dataset4Value6 = _useState70[0],
      setDataset4Value6 = _useState70[1];

  var _useState71 = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])(''),
      dataset4Value7 = _useState71[0],
      setDataset4Value7 = _useState71[1];

  var _useState72 = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])(''),
      dataset4Value8 = _useState72[0],
      setDataset4Value8 = _useState72[1];

  var _useState73 = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])(''),
      dataset4Value9 = _useState73[0],
      setDataset4Value9 = _useState73[1];

  var _useState74 = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])(''),
      dataset4Value10 = _useState74[0],
      setDataset4Value10 = _useState74[1];

  var _useState75 = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])(''),
      dataset4Value11 = _useState75[0],
      setDataset4Value11 = _useState75[1];

  var _useState76 = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])(''),
      dataset4Value12 = _useState76[0],
      setDataset4Value12 = _useState76[1];

  var onDataset4Value1Change = function onDataset4Value1Change(datasetValue) {
    setDataset4Value1(datasetValue);
    var data = {
      dataset4ValueOne: 'true',
      dataset4Value1: datasetValue,
      index: index,
      selSection: selectedSection
    };
    dataset4Update(data);
  };

  var onDataset4Value2Change = function onDataset4Value2Change(datasetValue) {
    setDataset4Value2(datasetValue);
    var data = {
      dataset4Value22: 'true',
      dataset4Value2: datasetValue,
      index: index,
      selSection: selectedSection
    };
    dataset4Update(data);
  };

  var onDataset4Value3Change = function onDataset4Value3Change(datasetValue) {
    setDataset4Value3(datasetValue);
    var data = {
      dataset4Value33: 'true',
      dataset4Value3: datasetValue,
      index: index,
      selSection: selectedSection
    };
    dataset4Update(data);
  };

  var onDataset4Value4Change = function onDataset4Value4Change(datasetValue) {
    setDataset4Value4(datasetValue);
    var data = {
      dataset4Value44: 'true',
      dataset4Value4: datasetValue,
      index: index,
      selSection: selectedSection
    };
    dataset4Update(data);
  };

  var onDataset4Value5Change = function onDataset4Value5Change(datasetValue) {
    setDataset4Value5(datasetValue);
    var data = {
      dataset4Value55: 'true',
      dataset4Value5: datasetValue,
      index: index,
      selSection: selectedSection
    };
    dataset4Update(data);
  };

  var onDataset4Value6Change = function onDataset4Value6Change(datasetValue) {
    setDataset4Value6(datasetValue);
    var data = {
      dataset4Value66: 'true',
      dataset4Value6: datasetValue,
      index: index,
      selSection: selectedSection
    };
    dataset4Update(data);
  };

  var onDataset4Value7Change = function onDataset4Value7Change(datasetValue) {
    setDataset4Value7(datasetValue);
    var data = {
      dataset4Value77: 'true',
      dataset4Value7: datasetValue,
      index: index,
      selSection: selectedSection
    };
    dataset4Update(data);
  };

  var onDataset4Value8Change = function onDataset4Value8Change(datasetValue) {
    setDataset4Value8(datasetValue);
    var data = {
      dataset4Value88: 'true',
      dataset4Value8: datasetValue,
      index: index,
      selSection: selectedSection
    };
    dataset4Update(data);
  };

  var onDataset4Value9Change = function onDataset4Value9Change(datasetValue) {
    setDataset4Value9(datasetValue);
    var data = {
      dataset4Value99: 'true',
      dataset4Value9: datasetValue,
      index: index,
      selSection: selectedSection
    };
    dataset4Update(data);
  };

  var onDataset4Value10Change = function onDataset4Value10Change(datasetValue) {
    setDataset4Value10(datasetValue);
    var data = {
      dataset4Value100: 'true',
      dataset4Value10: datasetValue,
      index: index,
      selSection: selectedSection
    };
    dataset4Update(data);
  };

  var onDataset4Value11Change = function onDataset4Value11Change(datasetValue) {
    setDataset4Value11(datasetValue);
    var data = {
      dataset4Value111: 'true',
      dataset4Value11: datasetValue,
      index: index,
      selSection: selectedSection
    };
    dataset4Update(data);
  };

  var onDataset4Value12Change = function onDataset4Value12Change(datasetValue) {
    setDataset4Value12(datasetValue);
    var data = {
      dataset4Value120: 'true',
      dataset4Value12: datasetValue,
      index: index,
      selSection: selectedSection
    };
    dataset4Update(data);
  }; // DATASET 4 --- END ---
  // DATASET 5 --- START ---


  var _useState77 = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])(''),
      dataset5Value1 = _useState77[0],
      setDataset5Value1 = _useState77[1];

  var _useState78 = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])(''),
      dataset5Value2 = _useState78[0],
      setDataset5Value2 = _useState78[1];

  var _useState79 = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])(''),
      dataset5Value3 = _useState79[0],
      setDataset5Value3 = _useState79[1];

  var _useState80 = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])(''),
      dataset5Value4 = _useState80[0],
      setDataset5Value4 = _useState80[1];

  var _useState81 = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])(''),
      dataset5Value5 = _useState81[0],
      setDataset5Value5 = _useState81[1];

  var _useState82 = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])(''),
      dataset5Value6 = _useState82[0],
      setDataset5Value6 = _useState82[1];

  var _useState83 = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])(''),
      dataset5Value7 = _useState83[0],
      setDataset5Value7 = _useState83[1];

  var _useState84 = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])(''),
      dataset5Value8 = _useState84[0],
      setDataset5Value8 = _useState84[1];

  var _useState85 = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])(''),
      dataset5Value9 = _useState85[0],
      setDataset5Value9 = _useState85[1];

  var _useState86 = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])(''),
      dataset5Value10 = _useState86[0],
      setDataset5Value10 = _useState86[1];

  var _useState87 = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])(''),
      dataset5Value11 = _useState87[0],
      setDataset5Value11 = _useState87[1];

  var _useState88 = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])(''),
      dataset5Value12 = _useState88[0],
      setDataset5Value12 = _useState88[1];

  var onDataset5Value1Change = function onDataset5Value1Change(datasetValue) {
    setDataset5Value1(datasetValue);
    var data = {
      dataset5ValueOne: 'true',
      dataset5Value1: datasetValue,
      index: index,
      selSection: selectedSection
    };
    dataset5Update(data);
  };

  var onDataset5Value2Change = function onDataset5Value2Change(datasetValue) {
    setDataset5Value2(datasetValue);
    var data = {
      dataset5Value22: 'true',
      dataset5Value2: datasetValue,
      index: index,
      selSection: selectedSection
    };
    dataset5Update(data);
  };

  var onDataset5Value3Change = function onDataset5Value3Change(datasetValue) {
    setDataset5Value3(datasetValue);
    var data = {
      dataset5Value33: 'true',
      dataset5Value3: datasetValue,
      index: index,
      selSection: selectedSection
    };
    dataset5Update(data);
  };

  var onDataset5Value4Change = function onDataset5Value4Change(datasetValue) {
    setDataset5Value4(datasetValue);
    var data = {
      dataset5Value44: 'true',
      dataset5Value4: datasetValue,
      index: index,
      selSection: selectedSection
    };
    dataset5Update(data);
  };

  var onDataset5Value5Change = function onDataset5Value5Change(datasetValue) {
    setDataset5Value5(datasetValue);
    var data = {
      dataset5Value55: 'true',
      dataset5Value5: datasetValue,
      index: index,
      selSection: selectedSection
    };
    dataset5Update(data);
  };

  var onDataset5Value6Change = function onDataset5Value6Change(datasetValue) {
    setDataset5Value6(datasetValue);
    var data = {
      dataset5Value66: 'true',
      dataset5Value6: datasetValue,
      index: index,
      selSection: selectedSection
    };
    dataset5Update(data);
  };

  var onDataset5Value7Change = function onDataset5Value7Change(datasetValue) {
    setDataset5Value7(datasetValue);
    var data = {
      dataset5Value77: 'true',
      dataset5Value7: datasetValue,
      index: index,
      selSection: selectedSection
    };
    dataset5Update(data);
  };

  var onDataset5Value8Change = function onDataset5Value8Change(datasetValue) {
    setDataset5Value8(datasetValue);
    var data = {
      dataset5Value88: 'true',
      dataset5Value8: datasetValue,
      index: index,
      selSection: selectedSection
    };
    dataset5Update(data);
  };

  var onDataset5Value9Change = function onDataset5Value9Change(datasetValue) {
    setDataset5Value9(datasetValue);
    var data = {
      dataset5Value99: 'true',
      dataset5Value9: datasetValue,
      index: index,
      selSection: selectedSection
    };
    dataset5Update(data);
  };

  var onDataset5Value10Change = function onDataset5Value10Change(datasetValue) {
    setDataset5Value10(datasetValue);
    var data = {
      dataset5Value100: 'true',
      dataset5Value10: datasetValue,
      index: index,
      selSection: selectedSection
    };
    dataset5Update(data);
  };

  var onDataset5Value11Change = function onDataset5Value11Change(datasetValue) {
    setDataset5Value11(datasetValue);
    var data = {
      dataset5Value111: 'true',
      dataset5Value11: datasetValue,
      index: index,
      selSection: selectedSection
    };
    dataset5Update(data);
  };

  var onDataset5Value12Change = function onDataset5Value12Change(datasetValue) {
    setDataset5Value12(datasetValue);
    var data = {
      dataset5Value120: 'true',
      dataset5Value12: datasetValue,
      index: index,
      selSection: selectedSection
    };
    dataset5Update(data);
  }; // DATASET 5 --- END ---
  // DATASET 3 --- START ---


  var _useState89 = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])(''),
      dataset6Value1 = _useState89[0],
      setDataset6Value1 = _useState89[1];

  var _useState90 = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])(''),
      dataset6Value2 = _useState90[0],
      setDataset6Value2 = _useState90[1];

  var _useState91 = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])(''),
      dataset6Value3 = _useState91[0],
      setDataset6Value3 = _useState91[1];

  var _useState92 = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])(''),
      dataset6Value4 = _useState92[0],
      setDataset6Value4 = _useState92[1];

  var _useState93 = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])(''),
      dataset6Value5 = _useState93[0],
      setDataset6Value5 = _useState93[1];

  var _useState94 = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])(''),
      dataset6Value6 = _useState94[0],
      setDataset6Value6 = _useState94[1];

  var _useState95 = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])(''),
      dataset6Value7 = _useState95[0],
      setDataset6Value7 = _useState95[1];

  var _useState96 = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])(''),
      dataset6Value8 = _useState96[0],
      setDataset6Value8 = _useState96[1];

  var _useState97 = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])(''),
      dataset6Value9 = _useState97[0],
      setDataset6Value9 = _useState97[1];

  var _useState98 = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])(''),
      dataset6Value10 = _useState98[0],
      setDataset6Value10 = _useState98[1];

  var _useState99 = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])(''),
      dataset6Value11 = _useState99[0],
      setDataset6Value11 = _useState99[1];

  var _useState100 = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])(''),
      dataset6Value12 = _useState100[0],
      setDataset6Value12 = _useState100[1];

  var onDataset6Value1Change = function onDataset6Value1Change(datasetValue) {
    setDataset6Value1(datasetValue);
    var data = {
      dataset6ValueOne: 'true',
      dataset6Value1: datasetValue,
      index: index,
      selSection: selectedSection
    };
    dataset6Update(data);
  };

  var onDataset6Value2Change = function onDataset6Value2Change(datasetValue) {
    setDataset6Value2(datasetValue);
    var data = {
      dataset6Value22: 'true',
      dataset6Value2: datasetValue,
      index: index,
      selSection: selectedSection
    };
    dataset6Update(data);
  };

  var onDataset6Value3Change = function onDataset6Value3Change(datasetValue) {
    setDataset6Value3(datasetValue);
    var data = {
      dataset6Value33: 'true',
      dataset6Value3: datasetValue,
      index: index,
      selSection: selectedSection
    };
    dataset6Update(data);
  };

  var onDataset6Value4Change = function onDataset6Value4Change(datasetValue) {
    setDataset6Value4(datasetValue);
    var data = {
      dataset6Value44: 'true',
      dataset6Value4: datasetValue,
      index: index,
      selSection: selectedSection
    };
    dataset6Update(data);
  };

  var onDataset6Value5Change = function onDataset6Value5Change(datasetValue) {
    setDataset6Value5(datasetValue);
    var data = {
      dataset6Value55: 'true',
      dataset6Value5: datasetValue,
      index: index,
      selSection: selectedSection
    };
    dataset6Update(data);
  };

  var onDataset6Value6Change = function onDataset6Value6Change(datasetValue) {
    setDataset6Value6(datasetValue);
    var data = {
      dataset6Value66: 'true',
      dataset6Value6: datasetValue,
      index: index,
      selSection: selectedSection
    };
    dataset6Update(data);
  };

  var onDataset6Value7Change = function onDataset6Value7Change(datasetValue) {
    setDataset6Value7(datasetValue);
    var data = {
      dataset6Value77: 'true',
      dataset6Value7: datasetValue,
      index: index,
      selSection: selectedSection
    };
    dataset6Update(data);
  };

  var onDataset6Value8Change = function onDataset6Value8Change(datasetValue) {
    setDataset6Value8(datasetValue);
    var data = {
      dataset6Value88: 'true',
      dataset6Value8: datasetValue,
      index: index,
      selSection: selectedSection
    };
    dataset6Update(data);
  };

  var onDataset6Value9Change = function onDataset6Value9Change(datasetValue) {
    setDataset6Value9(datasetValue);
    var data = {
      dataset6Value99: 'true',
      dataset6Value9: datasetValue,
      index: index,
      selSection: selectedSection
    };
    dataset6Update(data);
  };

  var onDataset6Value10Change = function onDataset6Value10Change(datasetValue) {
    setDataset6Value10(datasetValue);
    var data = {
      dataset6Value100: 'true',
      dataset6Value10: datasetValue,
      index: index,
      selSection: selectedSection
    };
    dataset6Update(data);
  };

  var onDataset6Value11Change = function onDataset6Value11Change(datasetValue) {
    setDataset6Value11(datasetValue);
    var data = {
      dataset6Value111: 'true',
      dataset6Value11: datasetValue,
      index: index,
      selSection: selectedSection
    };
    dataset6Update(data);
  };

  var onDataset6Value12Change = function onDataset6Value12Change(datasetValue) {
    setDataset6Value12(datasetValue);
    var data = {
      dataset6Value120: 'true',
      dataset6Value12: datasetValue,
      index: index,
      selSection: selectedSection
    };
    dataset6Update(data);
  }; // DATASET 6 --- END ---


  var onDatasetLabelChange1 = function onDatasetLabelChange1(datasetLabel) {
    setDataset1Label(datasetLabel);
    var data = {
      dataset1Label: datasetLabel,
      index: index,
      selSection: selectedSection
    };
    datasetLabel1Update(data);
  };

  var onDatasetLabelChange2 = function onDatasetLabelChange2(datasetLabel) {
    setDataset2Label(datasetLabel);
    var data = {
      dataset2Label: datasetLabel,
      index: index,
      selSection: selectedSection
    };
    datasetLabel2Update(data);
  };

  var onDatasetLabelChange3 = function onDatasetLabelChange3(datasetLabel) {
    setDataset3Label(datasetLabel);
    var data = {
      dataset3Label: datasetLabel,
      index: index,
      selSection: selectedSection
    };
    datasetLabel3Update(data);
  };

  var onDatasetLabelChange4 = function onDatasetLabelChange4(datasetLabel) {
    setDataset4Label(datasetLabel);
    var data = {
      dataset4Label: datasetLabel,
      index: index,
      selSection: selectedSection
    };
    datasetLabel4Update(data);
  };

  var onDatasetLabelChange5 = function onDatasetLabelChange5(datasetLabel) {
    setDataset5Label(datasetLabel);
    var data = {
      dataset5Label: datasetLabel,
      index: index,
      selSection: selectedSection
    };
    datasetLabel5Update(data);
  };

  var onDatasetLabelChange6 = function onDatasetLabelChange6(datasetLabel) {
    setDataset6Label(datasetLabel);
    var data = {
      dataset6Label: datasetLabel,
      index: index,
      selSection: selectedSection
    };
    datasetLabel6Update(data);
  };

  var tableRef = Object(react__WEBPACK_IMPORTED_MODULE_5__["useRef"])();
  Object(react__WEBPACK_IMPORTED_MODULE_5__["useEffect"])(function () {
    document.getElementById("".concat(field.index, "container")) && document.getElementById("".concat(field.index, "container")).addEventListener('mouseenter', function () {
      gsap__WEBPACK_IMPORTED_MODULE_12__["default"].to(document.getElementById("".concat(field.index, "table")), {
        height: 200,
        duration: 0.8,
        transformOrigin: 'top',
        ease: gsap__WEBPACK_IMPORTED_MODULE_12__["Linear"]
      });
    });
    document.getElementById("".concat(field.index, "container"));
    document.getElementById("".concat(field.index, "container")) && document.getElementById("".concat(field.index, "container")).addEventListener('mouseleave', function () {
      gsap__WEBPACK_IMPORTED_MODULE_12__["default"].to(document.getElementById("".concat(field.index, "table")), {
        height: '0',
        duration: 0.8,
        transformOrigin: 'top',
        ease: gsap__WEBPACK_IMPORTED_MODULE_12__["Linear"]
      });
    });
  }, []);

  var _useState101 = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])(false),
      activeChartType = _useState101[0],
      setActiveChartType = _useState101[1];

  var chartFormat = Object(react__WEBPACK_IMPORTED_MODULE_5__["useRef"])();
  console.log(index);

  var onChartChange = function onChartChange(value) {
    if (!activeChartType) {
      gsap__WEBPACK_IMPORTED_MODULE_12__["default"].to(chartFormat.current, {
        height: 216,
        transformOrigin: 'top',
        ease: gsap__WEBPACK_IMPORTED_MODULE_12__["Linear"]
      });
      setActiveChartType(true);
    }

    if (activeChartType) {
      gsap__WEBPACK_IMPORTED_MODULE_12__["default"].to(chartFormat.current, {
        height: 36,
        transformOrigin: 'bottom',
        ease: gsap__WEBPACK_IMPORTED_MODULE_12__["Linear"]
      });
      setActiveChartType(false);
    } // Take current array copy


    if (value) {
      var newFieldsArray = Object(C_off_saas_node_modules_next_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__["default"])(selectedSection.fields);

      newFieldsArray[currentIndex] = {
        stacked: selectedSection.fields[currentIndex].stacked,
        chartType: value,
        index: index,
        type: 'chart',
        labels: selectedSection.fields[currentIndex].labels,
        dataset1: selectedSection.fields[currentIndex].dataset1,
        dataset2: selectedSection.fields[currentIndex].dataset2,
        dataset3: selectedSection.fields[currentIndex].dataset3,
        dataset4: selectedSection.fields[currentIndex].dataset4,
        dataset5: selectedSection.fields[currentIndex].dataset5,
        dataset6: selectedSection.fields[currentIndex].dataset6,
        // Dataset labels
        dataset1Label: selectedSection.fields[currentIndex].dataset1Label,
        dataset2Label: selectedSection.fields[currentIndex].dataset2Label,
        dataset3Label: selectedSection.fields[currentIndex].dataset3Label,
        dataset4Label: selectedSection.fields[currentIndex].dataset4Label,
        dataset5Label: selectedSection.fields[currentIndex].dataset5Label,
        dataset6Label: selectedSection.fields[currentIndex].dataset6Label
      };
      var newSection = {
        title: selectedSection.title,
        createdAt: selectedSection.createdAt,
        fields: newFieldsArray,
        id: selectedSection.id
      }; // await this.setState({ selectedSection: newSection });

      chartTypeUpdate(newSection);
      console.log(newFieldsArray);
      console.log(value); // Update database

      _lib_firebase__WEBPACK_IMPORTED_MODULE_11__["db"].collection('projects').doc(projectId).collection('businessPlan').doc(next_router__WEBPACK_IMPORTED_MODULE_14___default.a.query.project).collection('inputs') // .collection('currentBusinessPlan')
      //   .doc('GrcvhyJwvlWVy31QsiudoQKdKI72')
      //   .collection('inputs')
      .doc(selectedSection.id).update({
        fields: newFieldsArray
      });
    }
  };

  var onStackedChange = function onStackedChange(stacked) {
    var newFieldsArray = Object(C_off_saas_node_modules_next_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__["default"])(selectedSection.fields);

    newFieldsArray[currentIndex] = {
      stacked: !stacked,
      chartType: selectedSection.fields[currentIndex].chartType,
      index: index,
      type: 'chart',
      labels: selectedSection.fields[currentIndex].labels,
      dataset1: selectedSection.fields[currentIndex].dataset1,
      dataset2: selectedSection.fields[currentIndex].dataset2,
      dataset3: selectedSection.fields[currentIndex].dataset3,
      dataset4: selectedSection.fields[currentIndex].dataset4,
      dataset5: selectedSection.fields[currentIndex].dataset5,
      dataset6: selectedSection.fields[currentIndex].dataset6,
      // Dataset labels
      dataset1Label: selectedSection.fields[currentIndex].dataset1Label,
      dataset2Label: selectedSection.fields[currentIndex].dataset2Label,
      dataset3Label: selectedSection.fields[currentIndex].dataset3Label,
      dataset4Label: selectedSection.fields[currentIndex].dataset4Label,
      dataset5Label: selectedSection.fields[currentIndex].dataset5Label,
      dataset6Label: selectedSection.fields[currentIndex].dataset6Label
    };
    var newSection = {
      title: selectedSection.title,
      createdAt: selectedSection.createdAt,
      fields: newFieldsArray,
      id: selectedSection.id
    }; // await this.setState({ selectedSection: newSection });

    chartTypeUpdate(newSection);
    console.log(newFieldsArray);
    console.log(value); // Update database

    _lib_firebase__WEBPACK_IMPORTED_MODULE_11__["db"].collection('projects').doc(projectId).collection('businessPlan').doc(next_router__WEBPACK_IMPORTED_MODULE_14___default.a.query.project).collection('inputs') // .collection('currentBusinessPlan')
    //   .doc('GrcvhyJwvlWVy31QsiudoQKdKI72')
    //   .collection('inputs')
    .doc(selectedSection.id).update({
      fields: newFieldsArray
    });
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", _objectSpread(_objectSpread({
    ref: provided.innerRef
  }, provided.draggableProps), {}, {
    className: "w-full grid grid-cols-12fr justify-items-center items-center mt-6",
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      id: "".concat(field.index, "container"),
      className: "col-start-2 col-end-12 relative flex flex-col h-full w-full flex px-8 py-8 rounded-2xl bg-white dark:bg-background",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "w-full h-full",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          id: "".concat(field.index, "chartContainer")
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 2023,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          id: "".concat(field.index, "table"),
          ref: tableRef,
          className: "w-full overflow-auto h-0",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("table", {
            "class": "content-table",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("thead", {
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("tr", {
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {}, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 2030,
                  columnNumber: 19
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
                    onChange: function onChange(e) {
                      return onLabelChange1(e.target.value);
                    },
                    value: label1,
                    className: "w-full bg-secondBackground focus:outline-none"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 2032,
                    columnNumber: 21
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 2031,
                  columnNumber: 19
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
                    onChange: function onChange(e) {
                      return onLabelChange2(e.target.value);
                    },
                    value: label2,
                    className: "w-full bg-secondBackground focus:outline-none"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 2039,
                    columnNumber: 21
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 2038,
                  columnNumber: 19
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
                    onChange: function onChange(e) {
                      return onLabelChange3(e.target.value);
                    },
                    value: label3,
                    className: "w-full bg-secondBackground focus:outline-none"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 2046,
                    columnNumber: 21
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 2045,
                  columnNumber: 19
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
                    onChange: function onChange(e) {
                      return onLabelChange4(e.target.value);
                    },
                    value: label4,
                    className: "w-full bg-secondBackground focus:outline-none"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 2053,
                    columnNumber: 21
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 2052,
                  columnNumber: 19
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
                    onChange: function onChange(e) {
                      return onLabelChange5(e.target.value);
                    },
                    value: label5,
                    className: "w-full bg-secondBackground focus:outline-none"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 2060,
                    columnNumber: 21
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 2059,
                  columnNumber: 19
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
                    onChange: function onChange(e) {
                      return onLabelChange6(e.target.value);
                    },
                    value: label6,
                    className: "w-full bg-secondBackground focus:outline-none"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 2067,
                    columnNumber: 21
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 2066,
                  columnNumber: 19
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
                    onChange: function onChange(e) {
                      return onLabelChange7(e.target.value);
                    },
                    value: label7,
                    className: "w-full bg-secondBackground focus:outline-none"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 2074,
                    columnNumber: 21
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 2073,
                  columnNumber: 19
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
                    onChange: function onChange(e) {
                      return onLabelChange8(e.target.value);
                    },
                    value: label8,
                    className: "w-full bg-secondBackground focus:outline-none"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 2081,
                    columnNumber: 21
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 2080,
                  columnNumber: 19
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
                    onChange: function onChange(e) {
                      return onLabelChange9(e.target.value);
                    },
                    value: label9,
                    className: "w-full bg-secondBackground focus:outline-none"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 2088,
                    columnNumber: 21
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 2087,
                  columnNumber: 19
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
                    onChange: function onChange(e) {
                      return onLabelChange10(e.target.value);
                    },
                    value: label10,
                    className: "w-full bg-secondBackground focus:outline-none"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 2095,
                    columnNumber: 21
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 2094,
                  columnNumber: 19
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
                    onChange: function onChange(e) {
                      return onLabelChange11(e.target.value);
                    },
                    value: label11,
                    className: "w-full bg-secondBackground focus:outline-none"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 2102,
                    columnNumber: 21
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 2101,
                  columnNumber: 19
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
                    onChange: function onChange(e) {
                      return onLabelChange12(e.target.value);
                    },
                    value: label12,
                    className: "w-full bg-secondBackground focus:outline-none"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 2109,
                    columnNumber: 21
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 2108,
                  columnNumber: 19
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 2029,
                columnNumber: 17
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 2028,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("tbody", {
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("tr", {
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                  className: "left-block",
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
                    onChange: function onChange(e) {
                      return onDatasetLabelChange1(e.target.value);
                    },
                    value: dataset1Label,
                    className: "w-full bg-secondBackground focus:outline-none"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 2120,
                    columnNumber: 21
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 2119,
                  columnNumber: 19
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
                    onChange: function onChange(e) {
                      return onDataset1Value1Change(e.target.value);
                    },
                    value: dataset1Value1,
                    className: "w-full bg-white focus:outline-none"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 2127,
                    columnNumber: 21
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 2126,
                  columnNumber: 19
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
                    onChange: function onChange(e) {
                      return onDataset1Value2Change(e.target.value);
                    },
                    value: dataset1Value2,
                    className: "w-full bg-white focus:outline-none"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 2134,
                    columnNumber: 21
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 2133,
                  columnNumber: 19
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
                    onChange: function onChange(e) {
                      return onDataset1Value3Change(e.target.value);
                    },
                    value: dataset1Value3,
                    className: "w-full bg-white focus:outline-none"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 2141,
                    columnNumber: 21
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 2140,
                  columnNumber: 19
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
                    onChange: function onChange(e) {
                      return onDataset1Value4Change(e.target.value);
                    },
                    value: dataset1Value4,
                    className: "w-full bg-white focus:outline-none"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 2148,
                    columnNumber: 21
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 2147,
                  columnNumber: 19
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
                    onChange: function onChange(e) {
                      return onDataset1Value5Change(e.target.value);
                    },
                    value: dataset1Value5,
                    className: "w-full bg-white focus:outline-none"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 2155,
                    columnNumber: 21
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 2154,
                  columnNumber: 19
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
                    onChange: function onChange(e) {
                      return onDataset1Value6Change(e.target.value);
                    },
                    value: dataset1Value6,
                    className: "w-full bg-white focus:outline-none"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 2162,
                    columnNumber: 21
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 2161,
                  columnNumber: 19
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
                    onChange: function onChange(e) {
                      return onDataset1Value7Change(e.target.value);
                    },
                    value: dataset1Value7,
                    className: "w-full bg-white focus:outline-none"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 2169,
                    columnNumber: 21
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 2168,
                  columnNumber: 19
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
                    onChange: function onChange(e) {
                      return onDataset1Value8Change(e.target.value);
                    },
                    value: dataset1Value8,
                    className: "w-full bg-white focus:outline-none"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 2176,
                    columnNumber: 21
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 2175,
                  columnNumber: 19
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
                    onChange: function onChange(e) {
                      return onDataset1Value9Change(e.target.value);
                    },
                    value: dataset1Value9,
                    className: "w-full bg-white focus:outline-none"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 2183,
                    columnNumber: 21
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 2182,
                  columnNumber: 19
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
                    onChange: function onChange(e) {
                      return onDataset1Value10Change(e.target.value);
                    },
                    value: dataset1Value10,
                    className: "w-full bg-white focus:outline-none"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 2190,
                    columnNumber: 21
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 2189,
                  columnNumber: 19
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
                    onChange: function onChange(e) {
                      return onDataset1Value11Change(e.target.value);
                    },
                    value: dataset1Value11,
                    className: "w-full bg-white focus:outline-none"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 2197,
                    columnNumber: 21
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 2196,
                  columnNumber: 19
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
                    onChange: function onChange(e) {
                      return onDataset1Value12Change(e.target.value);
                    },
                    value: dataset1Value12,
                    className: "w-full bg-white focus:outline-none"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 2204,
                    columnNumber: 21
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 2203,
                  columnNumber: 19
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 2118,
                columnNumber: 17
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("tr", {
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                  className: "left-block",
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
                    onChange: function onChange(e) {
                      return onDatasetLabelChange2(e.target.value);
                    },
                    value: dataset2Label,
                    className: "w-full bg-secondBackground focus:outline-none"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 2213,
                    columnNumber: 21
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 2212,
                  columnNumber: 19
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
                    onChange: function onChange(e) {
                      return onDataset2Value1Change(e.target.value);
                    },
                    value: dataset2Value1,
                    className: "w-full bg-white focus:outline-none"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 2220,
                    columnNumber: 21
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 2219,
                  columnNumber: 19
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
                    onChange: function onChange(e) {
                      return onDataset2Value2Change(e.target.value);
                    },
                    value: dataset2Value2,
                    className: "w-full bg-white focus:outline-none"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 2227,
                    columnNumber: 21
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 2226,
                  columnNumber: 19
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
                    onChange: function onChange(e) {
                      return onDataset2Value3Change(e.target.value);
                    },
                    value: dataset2Value3,
                    className: "w-full bg-white focus:outline-none"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 2234,
                    columnNumber: 21
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 2233,
                  columnNumber: 19
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
                    onChange: function onChange(e) {
                      return onDataset2Value4Change(e.target.value);
                    },
                    value: dataset2Value4,
                    className: "w-full bg-white focus:outline-none"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 2241,
                    columnNumber: 21
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 2240,
                  columnNumber: 19
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
                    onChange: function onChange(e) {
                      return onDataset2Value5Change(e.target.value);
                    },
                    value: dataset2Value5,
                    className: "w-full bg-white focus:outline-none"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 2248,
                    columnNumber: 21
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 2247,
                  columnNumber: 19
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
                    onChange: function onChange(e) {
                      return onDataset2Value6Change(e.target.value);
                    },
                    value: dataset2Value6,
                    className: "w-full bg-white focus:outline-none"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 2255,
                    columnNumber: 21
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 2254,
                  columnNumber: 19
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
                    onChange: function onChange(e) {
                      return onDataset2Value7Change(e.target.value);
                    },
                    value: dataset2Value7,
                    className: "w-full bg-white focus:outline-none"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 2262,
                    columnNumber: 21
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 2261,
                  columnNumber: 19
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
                    onChange: function onChange(e) {
                      return onDataset2Value8Change(e.target.value);
                    },
                    value: dataset2Value8,
                    className: "w-full bg-white focus:outline-none"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 2269,
                    columnNumber: 21
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 2268,
                  columnNumber: 19
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
                    onChange: function onChange(e) {
                      return onDataset2Value9Change(e.target.value);
                    },
                    value: dataset2Value9,
                    className: "w-full bg-white focus:outline-none"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 2276,
                    columnNumber: 21
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 2275,
                  columnNumber: 19
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
                    onChange: function onChange(e) {
                      return onDataset2Value10Change(e.target.value);
                    },
                    value: dataset2Value10,
                    className: "w-full bg-white focus:outline-none"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 2283,
                    columnNumber: 21
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 2282,
                  columnNumber: 19
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
                    onChange: function onChange(e) {
                      return onDataset2Value11Change(e.target.value);
                    },
                    value: dataset2Value11,
                    className: "w-full bg-white focus:outline-none"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 2290,
                    columnNumber: 21
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 2289,
                  columnNumber: 19
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
                    onChange: function onChange(e) {
                      return onDataset2Value12Change(e.target.value);
                    },
                    value: dataset2Value12,
                    className: "w-full bg-white focus:outline-none"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 2297,
                    columnNumber: 21
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 2296,
                  columnNumber: 19
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 2211,
                columnNumber: 17
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("tr", {
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                  className: "left-block",
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
                    onChange: function onChange(e) {
                      return onDatasetLabelChange3(e.target.value);
                    },
                    value: dataset3Label,
                    className: "w-full bg-secondBackground focus:outline-none"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 2306,
                    columnNumber: 21
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 2305,
                  columnNumber: 19
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
                    onChange: function onChange(e) {
                      return onDataset3Value1Change(e.target.value);
                    },
                    value: dataset3Value1,
                    className: "w-full bg-white focus:outline-none"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 2313,
                    columnNumber: 21
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 2312,
                  columnNumber: 19
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
                    onChange: function onChange(e) {
                      return onDataset3Value2Change(e.target.value);
                    },
                    value: dataset3Value2,
                    className: "w-full bg-white focus:outline-none"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 2320,
                    columnNumber: 21
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 2319,
                  columnNumber: 19
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
                    onChange: function onChange(e) {
                      return onDataset3Value3Change(e.target.value);
                    },
                    value: dataset3Value3,
                    className: "w-full bg-white focus:outline-none"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 2327,
                    columnNumber: 21
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 2326,
                  columnNumber: 19
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
                    onChange: function onChange(e) {
                      return onDataset3Value4Change(e.target.value);
                    },
                    value: dataset3Value4,
                    className: "w-full bg-white focus:outline-none"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 2334,
                    columnNumber: 21
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 2333,
                  columnNumber: 19
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
                    onChange: function onChange(e) {
                      return onDataset3Value5Change(e.target.value);
                    },
                    value: dataset3Value5,
                    className: "w-full bg-white focus:outline-none"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 2341,
                    columnNumber: 21
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 2340,
                  columnNumber: 19
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
                    onChange: function onChange(e) {
                      return onDataset3Value6Change(e.target.value);
                    },
                    value: dataset3Value6,
                    className: "w-full bg-white focus:outline-none"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 2348,
                    columnNumber: 21
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 2347,
                  columnNumber: 19
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
                    onChange: function onChange(e) {
                      return onDataset3Value7Change(e.target.value);
                    },
                    value: dataset3Value7,
                    className: "w-full bg-white focus:outline-none"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 2355,
                    columnNumber: 21
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 2354,
                  columnNumber: 19
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
                    onChange: function onChange(e) {
                      return onDataset3Value8Change(e.target.value);
                    },
                    value: dataset3Value8,
                    className: "w-full bg-white focus:outline-none"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 2362,
                    columnNumber: 21
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 2361,
                  columnNumber: 19
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
                    onChange: function onChange(e) {
                      return onDataset3Value9Change(e.target.value);
                    },
                    value: dataset3Value9,
                    className: "w-full bg-white focus:outline-none"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 2369,
                    columnNumber: 21
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 2368,
                  columnNumber: 19
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
                    onChange: function onChange(e) {
                      return onDataset3Value10Change(e.target.value);
                    },
                    value: dataset3Value10,
                    className: "w-full bg-white focus:outline-none"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 2376,
                    columnNumber: 21
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 2375,
                  columnNumber: 19
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
                    onChange: function onChange(e) {
                      return onDataset3Value11Change(e.target.value);
                    },
                    value: dataset3Value11,
                    className: "w-full bg-white focus:outline-none"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 2383,
                    columnNumber: 21
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 2382,
                  columnNumber: 19
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
                    onChange: function onChange(e) {
                      return onDataset3Value12Change(e.target.value);
                    },
                    value: dataset3Value12,
                    className: "w-full bg-white focus:outline-none"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 2390,
                    columnNumber: 21
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 2389,
                  columnNumber: 19
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 2304,
                columnNumber: 17
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("tr", {
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                  className: "left-block",
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
                    onChange: function onChange(e) {
                      return onDatasetLabelChange4(e.target.value);
                    },
                    value: dataset4Label,
                    className: "w-full bg-secondBackground focus:outline-none"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 2399,
                    columnNumber: 21
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 2398,
                  columnNumber: 19
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
                    onChange: function onChange(e) {
                      return onDataset4Value1Change(e.target.value);
                    },
                    value: dataset4Value1,
                    className: "w-full bg-white focus:outline-none"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 2406,
                    columnNumber: 21
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 2405,
                  columnNumber: 19
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
                    onChange: function onChange(e) {
                      return onDataset4Value2Change(e.target.value);
                    },
                    value: dataset4Value2,
                    className: "w-full bg-white focus:outline-none"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 2413,
                    columnNumber: 21
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 2412,
                  columnNumber: 19
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
                    onChange: function onChange(e) {
                      return onDataset4Value3Change(e.target.value);
                    },
                    value: dataset4Value3,
                    className: "w-full bg-white focus:outline-none"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 2420,
                    columnNumber: 21
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 2419,
                  columnNumber: 19
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
                    onChange: function onChange(e) {
                      return onDataset4Value4Change(e.target.value);
                    },
                    value: dataset4Value4,
                    className: "w-full bg-white focus:outline-none"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 2427,
                    columnNumber: 21
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 2426,
                  columnNumber: 19
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
                    onChange: function onChange(e) {
                      return onDataset4Value5Change(e.target.value);
                    },
                    value: dataset4Value5,
                    className: "w-full bg-white focus:outline-none"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 2434,
                    columnNumber: 21
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 2433,
                  columnNumber: 19
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
                    onChange: function onChange(e) {
                      return onDataset4Value6Change(e.target.value);
                    },
                    value: dataset4Value6,
                    className: "w-full bg-white focus:outline-none"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 2441,
                    columnNumber: 21
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 2440,
                  columnNumber: 19
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
                    onChange: function onChange(e) {
                      return onDataset4Value7Change(e.target.value);
                    },
                    value: dataset4Value7,
                    className: "w-full bg-white focus:outline-none"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 2448,
                    columnNumber: 21
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 2447,
                  columnNumber: 19
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
                    onChange: function onChange(e) {
                      return onDataset4Value8Change(e.target.value);
                    },
                    value: dataset4Value8,
                    className: "w-full bg-white focus:outline-none"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 2455,
                    columnNumber: 21
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 2454,
                  columnNumber: 19
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
                    onChange: function onChange(e) {
                      return onDataset4Value9Change(e.target.value);
                    },
                    value: dataset4Value9,
                    className: "w-full bg-white focus:outline-none"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 2462,
                    columnNumber: 21
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 2461,
                  columnNumber: 19
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
                    onChange: function onChange(e) {
                      return onDataset4Value10Change(e.target.value);
                    },
                    value: dataset4Value10,
                    className: "w-full bg-white focus:outline-none"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 2469,
                    columnNumber: 21
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 2468,
                  columnNumber: 19
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
                    onChange: function onChange(e) {
                      return onDataset4Value11Change(e.target.value);
                    },
                    value: dataset4Value11,
                    className: "w-full bg-white focus:outline-none"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 2476,
                    columnNumber: 21
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 2475,
                  columnNumber: 19
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
                    onChange: function onChange(e) {
                      return onDataset4Value12Change(e.target.value);
                    },
                    value: dataset4Value12,
                    className: "w-full bg-white focus:outline-none"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 2483,
                    columnNumber: 21
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 2482,
                  columnNumber: 19
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 2397,
                columnNumber: 17
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("tr", {
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                  className: "left-block",
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
                    onChange: function onChange(e) {
                      return onDatasetLabelChange5(e.target.value);
                    },
                    value: dataset5Label,
                    className: "w-full bg-secondBackground focus:outline-none"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 2492,
                    columnNumber: 21
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 2491,
                  columnNumber: 19
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
                    onChange: function onChange(e) {
                      return onDataset5Value1Change(e.target.value);
                    },
                    value: dataset5Value1,
                    className: "w-full bg-white focus:outline-none"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 2499,
                    columnNumber: 21
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 2498,
                  columnNumber: 19
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
                    onChange: function onChange(e) {
                      return onDataset5Value2Change(e.target.value);
                    },
                    value: dataset5Value2,
                    className: "w-full bg-white focus:outline-none"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 2506,
                    columnNumber: 21
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 2505,
                  columnNumber: 19
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
                    onChange: function onChange(e) {
                      return onDataset5Value3Change(e.target.value);
                    },
                    value: dataset5Value3,
                    className: "w-full bg-white focus:outline-none"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 2513,
                    columnNumber: 21
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 2512,
                  columnNumber: 19
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
                    onChange: function onChange(e) {
                      return onDataset5Value4Change(e.target.value);
                    },
                    value: dataset5Value4,
                    className: "w-full bg-white focus:outline-none"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 2520,
                    columnNumber: 21
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 2519,
                  columnNumber: 19
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
                    onChange: function onChange(e) {
                      return onDataset5Value5Change(e.target.value);
                    },
                    value: dataset5Value5,
                    className: "w-full bg-white focus:outline-none"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 2527,
                    columnNumber: 21
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 2526,
                  columnNumber: 19
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
                    onChange: function onChange(e) {
                      return onDataset5Value6Change(e.target.value);
                    },
                    value: dataset5Value6,
                    className: "w-full bg-white focus:outline-none"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 2534,
                    columnNumber: 21
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 2533,
                  columnNumber: 19
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
                    onChange: function onChange(e) {
                      return onDataset5Value7Change(e.target.value);
                    },
                    value: dataset5Value7,
                    className: "w-full bg-white focus:outline-none"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 2541,
                    columnNumber: 21
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 2540,
                  columnNumber: 19
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
                    onChange: function onChange(e) {
                      return onDataset5Value8Change(e.target.value);
                    },
                    value: dataset5Value8,
                    className: "w-full bg-white focus:outline-none"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 2548,
                    columnNumber: 21
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 2547,
                  columnNumber: 19
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
                    onChange: function onChange(e) {
                      return onDataset5Value9Change(e.target.value);
                    },
                    value: dataset5Value9,
                    className: "w-full bg-white focus:outline-none"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 2555,
                    columnNumber: 21
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 2554,
                  columnNumber: 19
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
                    onChange: function onChange(e) {
                      return onDataset5Value10Change(e.target.value);
                    },
                    value: dataset5Value10,
                    className: "w-full bg-white focus:outline-none"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 2562,
                    columnNumber: 21
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 2561,
                  columnNumber: 19
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
                    onChange: function onChange(e) {
                      return onDataset5Value11Change(e.target.value);
                    },
                    value: dataset5Value11,
                    className: "w-full bg-white focus:outline-none"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 2569,
                    columnNumber: 21
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 2568,
                  columnNumber: 19
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
                    onChange: function onChange(e) {
                      return onDataset5Value12Change(e.target.value);
                    },
                    value: dataset5Value12,
                    className: "w-full bg-white focus:outline-none"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 2576,
                    columnNumber: 21
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 2575,
                  columnNumber: 19
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 2490,
                columnNumber: 17
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("tr", {
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                  className: "left-block-radius",
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
                    onChange: function onChange(e) {
                      return onDatasetLabelChange6(e.target.value);
                    },
                    value: dataset6Label,
                    className: "w-full bg-secondBackground focus:outline-none"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 2585,
                    columnNumber: 21
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 2584,
                  columnNumber: 19
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
                    onChange: function onChange(e) {
                      return onDataset6Value1Change(e.target.value);
                    },
                    value: dataset6Value1,
                    className: "w-full bg-white focus:outline-none"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 2592,
                    columnNumber: 21
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 2591,
                  columnNumber: 19
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
                    onChange: function onChange(e) {
                      return onDataset6Value2Change(e.target.value);
                    },
                    value: dataset6Value2,
                    className: "w-full bg-white focus:outline-none"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 2599,
                    columnNumber: 21
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 2598,
                  columnNumber: 19
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
                    onChange: function onChange(e) {
                      return onDataset6Value3Change(e.target.value);
                    },
                    value: dataset6Value3,
                    className: "w-full bg-white focus:outline-none"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 2606,
                    columnNumber: 21
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 2605,
                  columnNumber: 19
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
                    onChange: function onChange(e) {
                      return onDataset6Value4Change(e.target.value);
                    },
                    value: dataset6Value4,
                    className: "w-full bg-white focus:outline-none"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 2613,
                    columnNumber: 21
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 2612,
                  columnNumber: 19
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
                    onChange: function onChange(e) {
                      return onDataset6Value5Change(e.target.value);
                    },
                    value: dataset6Value5,
                    className: "w-full bg-white focus:outline-none"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 2620,
                    columnNumber: 21
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 2619,
                  columnNumber: 19
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
                    onChange: function onChange(e) {
                      return onDataset6Value6Change(e.target.value);
                    },
                    value: dataset6Value6,
                    className: "w-full bg-white focus:outline-none"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 2627,
                    columnNumber: 21
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 2626,
                  columnNumber: 19
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
                    onChange: function onChange(e) {
                      return onDataset6Value7Change(e.target.value);
                    },
                    value: dataset6Value7,
                    className: "w-full bg-white focus:outline-none"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 2634,
                    columnNumber: 21
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 2633,
                  columnNumber: 19
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
                    onChange: function onChange(e) {
                      return onDataset6Value8Change(e.target.value);
                    },
                    value: dataset6Value8,
                    className: "w-full bg-white focus:outline-none"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 2641,
                    columnNumber: 21
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 2640,
                  columnNumber: 19
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
                    onChange: function onChange(e) {
                      return onDataset6Value9Change(e.target.value);
                    },
                    value: dataset6Value9,
                    className: "w-full bg-white focus:outline-none"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 2648,
                    columnNumber: 21
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 2647,
                  columnNumber: 19
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
                    onChange: function onChange(e) {
                      return onDataset6Value10Change(e.target.value);
                    },
                    value: dataset6Value10,
                    className: "w-full bg-white focus:outline-none"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 2655,
                    columnNumber: 21
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 2654,
                  columnNumber: 19
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
                    onChange: function onChange(e) {
                      return onDataset6Value11Change(e.target.value);
                    },
                    value: dataset6Value11,
                    className: "w-full bg-white focus:outline-none"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 2662,
                    columnNumber: 21
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 2661,
                  columnNumber: 19
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
                    onChange: function onChange(e) {
                      return onDataset6Value12Change(e.target.value);
                    },
                    value: dataset6Value12,
                    className: "w-full bg-white focus:outline-none"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 2669,
                    columnNumber: 21
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 2668,
                  columnNumber: 19
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 2583,
                columnNumber: 17
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 2117,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 2027,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 2026,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 2022,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 2018,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "col-start-12 col-end-13 justify-self-center self-start flex flex-col flex-wrap gap-2 overflow-hidden",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_image__WEBPACK_IMPORTED_MODULE_13___default.a, {
        onClick: function onClick() {
          return deleteField(field.index);
        },
        className: "cursor-pointer",
        src: "/plan-bar/exit4.svg",
        height: 36,
        width: 36
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 2696,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_image__WEBPACK_IMPORTED_MODULE_13___default.a, _objectSpread(_objectSpread({}, provided.dragHandleProps), {}, {
        className: "cursor-pointer",
        src: "/plan-bar/drag2.svg",
        height: 36,
        width: 36
      }), void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 2697,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_image__WEBPACK_IMPORTED_MODULE_13___default.a, {
        onClick: function onClick() {
          return onStackedChange(field.stacked);
        },
        className: "cursor-pointer",
        src: "/plan-bar/layers.svg",
        height: 36,
        width: 36
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 2698,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        style: {
          height: '36px',
          width: '36px'
        },
        ref: chartFormat,
        className: "overflow-hidden bg-background focus:outline-none rounded-lg",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_image__WEBPACK_IMPORTED_MODULE_13___default.a, {
          onClick: function onClick() {
            return onChartChange(false);
          },
          className: "cursor-pointer",
          src: "/chart/".concat(field.chartType, ".svg"),
          height: 36,
          width: 36
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 2710,
          columnNumber: 11
        }, _this), field.chartType !== 'Bar chart' && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_image__WEBPACK_IMPORTED_MODULE_13___default.a, {
            className: "cursor-pointer",
            onClick: function onClick() {
              return onChartChange('Bar chart');
            },
            src: "/chart/".concat(field.chartType == 'Bar chart' ? field.chartType : 'Bar chart', ".svg"),
            height: 27,
            width: 27
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 2726,
            columnNumber: 15
          }, _this)
        }, void 0, false), field.chartType !== 'Reverse chart' && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_image__WEBPACK_IMPORTED_MODULE_13___default.a, {
            className: "cursor-pointer",
            onClick: function onClick() {
              return onChartChange('Reverse chart');
            },
            src: "/chart/".concat(field.chartType == 'Reverse chart' ? field.chartType : 'Reverse chart', ".svg"),
            height: 27,
            width: 27
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 2743,
            columnNumber: 15
          }, _this)
        }, void 0, false), field.chartType !== 'Line chart' && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_image__WEBPACK_IMPORTED_MODULE_13___default.a, {
            className: "cursor-pointer",
            onClick: function onClick() {
              return onChartChange('Line chart');
            },
            src: "/chart/".concat(field.chartType == 'Line chart' ? field.chartType : 'Line chart', ".svg"),
            height: 27,
            width: 27
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 2760,
            columnNumber: 15
          }, _this)
        }, void 0, false), field.chartType !== 'Pie chart' && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_image__WEBPACK_IMPORTED_MODULE_13___default.a, {
            className: "cursor-pointer",
            onClick: function onClick() {
              return onChartChange('Pie chart');
            },
            src: "/chart/".concat(field.chartType == 'Pie chart' ? field.chartType : 'Pie chart', ".svg"),
            height: 27,
            width: 27
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 2777,
            columnNumber: 15
          }, _this)
        }, void 0, false), field.chartType !== 'Doughnut chart' && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_image__WEBPACK_IMPORTED_MODULE_13___default.a, {
            className: "cursor-pointer",
            onClick: function onClick() {
              return onChartChange('Doughnut chart');
            },
            src: "/chart/".concat(field.chartType == 'Doughnut chart' ? field.chartType : 'Doughnut chart', ".svg"),
            height: 27,
            width: 27
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 2794,
            columnNumber: 15
          }, _this)
        }, void 0, false), field.chartType !== 'Area chart' && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_image__WEBPACK_IMPORTED_MODULE_13___default.a, {
            className: "cursor-pointer",
            onClick: function onClick() {
              return onChartChange('Area chart');
            },
            src: "/chart/".concat(field.chartType == 'Area chart' ? field.chartType : 'Area chart', ".svg"),
            height: 27,
            width: 27
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 2811,
            columnNumber: 15
          }, _this)
        }, void 0, false)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 2705,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 2695,
      columnNumber: 7
    }, _this)]
  }), void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 2017,
    columnNumber: 5
  }, _this);
};

_s(ChartJsComponent, "Nq3XhTg+E1hP5dpzt8OLy89QBDY=");

_c = ChartJsComponent;
/* harmony default export */ __webpack_exports__["default"] = (ChartJsComponent);
{
  /* <div className='mt-4 w-full flex w-max text-sm'>
  <div className='flex justify-center items-center w-1/12 border-r border-primary'>
  <input placeholder='blablabla' className='w-full' />
  </div>
  <div className='flex justify-center items-center w-1/12 border-r border-primary'>
  <input placeholder='blablabla' className='w-full' />
  </div>
  <div className='flex justify-center items-center w-1/12 border-r border-primary'>
  <input placeholder='blablabla' className='w-full' />
  </div>
  <div className='flex justify-center items-center w-1/12 border-r border-primary'>
  <input placeholder='blablabla' className='w-full' />
  </div>
  <div className='flex justify-center items-center w-1/12 border-r border-primary'>
  <input placeholder='blablabla' className='w-full' />
  </div>
  <div className='flex justify-center items-center w-1/12 border-r border-primary'>
  <input placeholder='blablabla' className='w-full' />
  </div>
  <div className='flex justify-center items-center w-1/12 border-r border-primary'>
  <input placeholder='blablabla' className='w-full' />
  </div>
  <div className='flex justify-center items-center w-1/12 border-r border-primary'>
  <input placeholder='blablabla' className='w-full' />
  </div>
  <div className='flex justify-center items-center w-1/12 border-r border-primary'>
  <input placeholder='blablabla' className='w-full' />
  </div>
  <div className='flex justify-center items-center w-1/12 border-r border-primary'>
  <input placeholder='blablabla' className='w-full' />
  </div>
  <div className='flex justify-center items-center w-1/12 border-r border-primary'>
  <input placeholder='blablabla' className='w-full' />
  </div>
  <div className='flex justify-center items-center w-1/12 border-r border-primary'>
  <input placeholder='blablabla' className='w-full' />
  </div>
  </div> */
}

var _c;

$RefreshReg$(_c, "ChartJsComponent");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9kYXNoYm9hcmQvc3RhcnR1cC9wcm9qZWN0L2J1c2luZXNzLWFwcC9DaGFydGpzLmpzIl0sIm5hbWVzIjpbIkNoYXJ0SnNDb21wb25lbnQiLCJjaGFydEltYWdlVXBkYXRlIiwicHJvdmlkZWQiLCJwcm9qZWN0SWQiLCJhZGRDaGFydCIsImNoYXJ0VHlwZVVwZGF0ZSIsImN1cnJlbnRJbmRleCIsImRlbGV0ZUZpZWxkIiwiY29udGFpbmVyUmVmIiwiZGF0YXNldExhYmVsNlVwZGF0ZSIsImRhdGFzZXRMYWJlbDVVcGRhdGUiLCJkYXRhc2V0TGFiZWw0VXBkYXRlIiwiZGF0YXNldExhYmVsM1VwZGF0ZSIsImRhdGFzZXRMYWJlbDJVcGRhdGUiLCJkYXRhc2V0TGFiZWwxVXBkYXRlIiwiZGF0YXNldDZVcGRhdGUiLCJkYXRhc2V0NVVwZGF0ZSIsImRhdGFzZXQ0VXBkYXRlIiwiZGF0YXNldDNVcGRhdGUiLCJkYXRhc2V0MlVwZGF0ZSIsImRhdGFzZXQxVXBkYXRlIiwibGFiZWxVcGRhdGUiLCJjaGFydExhYmVsc1VwZGF0ZSIsImZpZWxkIiwic2VsZWN0ZWRTZWN0aW9uIiwiY2hhcnRWYWx1ZVVwZGF0ZSIsImluZGV4IiwiY29uc29sZSIsImxvZyIsImNoYXJ0UmVmIiwidXNlUmVmIiwidXNlU3RhdGUiLCJpbnB1dERhdGEiLCJzZXRJbnB1dERhdGEiLCJ0b1NhdmVDaGFydCIsIkNoYXJ0SnNJbWFnZSIsInNldENvbmZpZyIsInR5cGUiLCJkYXRhIiwib3B0aW9ucyIsInJlc3BvbnNpdmUiLCJzY2FsZXMiLCJ5IiwiYmVnaW5BdFplcm8iLCJpbWFnZVVybCIsInNldEltYWdlVXJsIiwib25DaGFydFNhdmUiLCJ0b0RhdGFVcmwiLCJ1c2VFZmZlY3QiLCJvcGVuIiwic2V0T3BlbiIsIm5hbWUiLCJzZXROYW1lIiwic2V0VHlwZSIsInZhbHVlIiwic2V0VmFsdWUiLCJjb2xvciIsInNldENvbG9yIiwidXBkYXRlIiwidXNlQ2FsbGJhY2siLCJkZWJvdW5jZSIsInNlbFNlY3Rpb24iLCJmaWVsZHMiLCJmaW5kSW5kZXgiLCJjdXJyZW50U2VjdGlvbkluZGV4IiwidXBkYXRlTmFtZSIsInZhbCIsInVwZGF0ZVR5cGUiLCJ1cGRhdGVWYWx1ZSIsInVwZGF0ZUNvbG9yIiwib25OZXdEYXRhQ2hhcnRBZGQiLCJuZXdEYXRhIiwiY3VycmVudENoYXJ0SW5kZXgiLCJuZXdTZWxlY3RlZFNlY3Rpb24iLCJwdXNoIiwiZGIiLCJjb2xsZWN0aW9uIiwiZG9jIiwiUm91dGVyIiwicXVlcnkiLCJwcm9qZWN0IiwiaWQiLCJjaGFydERhdGEiLCJzZXRDaGFydERhdGEiLCJvblNuYXBzaG90Iiwic2VydmVyVXBkYXRlIiwibWFwIiwibGFiZWxzIiwic2V0TGFiZWwxIiwic2V0TGFiZWwyIiwic2V0TGFiZWwzIiwic2V0TGFiZWw0Iiwic2V0TGFiZWw1Iiwic2V0TGFiZWw2Iiwic2V0TGFiZWw3Iiwic2V0TGFiZWw4Iiwic2V0TGFiZWw5Iiwic2V0TGFiZWwxMCIsInNldExhYmVsMTEiLCJzZXRMYWJlbDEyIiwiZGF0YXNldDEiLCJzZXREYXRhc2V0MVZhbHVlMSIsInNldERhdGFzZXQxVmFsdWUyIiwic2V0RGF0YXNldDFWYWx1ZTMiLCJzZXREYXRhc2V0MVZhbHVlNCIsInNldERhdGFzZXQxVmFsdWU1Iiwic2V0RGF0YXNldDFWYWx1ZTYiLCJzZXREYXRhc2V0MVZhbHVlNyIsInNldERhdGFzZXQxVmFsdWU4Iiwic2V0RGF0YXNldDFWYWx1ZTkiLCJzZXREYXRhc2V0MVZhbHVlMTAiLCJzZXREYXRhc2V0MVZhbHVlMTEiLCJzZXREYXRhc2V0MVZhbHVlMTIiLCJkYXRhc2V0MiIsInNldERhdGFzZXQyVmFsdWUxIiwic2V0RGF0YXNldDJWYWx1ZTIiLCJzZXREYXRhc2V0MlZhbHVlMyIsInNldERhdGFzZXQyVmFsdWU0Iiwic2V0RGF0YXNldDJWYWx1ZTUiLCJzZXREYXRhc2V0MlZhbHVlNiIsInNldERhdGFzZXQyVmFsdWU3Iiwic2V0RGF0YXNldDJWYWx1ZTgiLCJzZXREYXRhc2V0MlZhbHVlOSIsInNldERhdGFzZXQyVmFsdWUxMCIsInNldERhdGFzZXQyVmFsdWUxMSIsInNldERhdGFzZXQyVmFsdWUxMiIsImRhdGFzZXQzIiwic2V0RGF0YXNldDNWYWx1ZTEiLCJzZXREYXRhc2V0M1ZhbHVlMiIsInNldERhdGFzZXQzVmFsdWUzIiwic2V0RGF0YXNldDNWYWx1ZTQiLCJzZXREYXRhc2V0M1ZhbHVlNSIsInNldERhdGFzZXQzVmFsdWU2Iiwic2V0RGF0YXNldDNWYWx1ZTciLCJzZXREYXRhc2V0M1ZhbHVlOCIsInNldERhdGFzZXQzVmFsdWU5Iiwic2V0RGF0YXNldDNWYWx1ZTEwIiwic2V0RGF0YXNldDNWYWx1ZTExIiwic2V0RGF0YXNldDNWYWx1ZTEyIiwiZGF0YXNldDQiLCJzZXREYXRhc2V0NFZhbHVlMSIsInNldERhdGFzZXQ0VmFsdWUyIiwic2V0RGF0YXNldDRWYWx1ZTMiLCJzZXREYXRhc2V0NFZhbHVlNCIsInNldERhdGFzZXQ0VmFsdWU1Iiwic2V0RGF0YXNldDRWYWx1ZTYiLCJzZXREYXRhc2V0NFZhbHVlNyIsInNldERhdGFzZXQ0VmFsdWU4Iiwic2V0RGF0YXNldDRWYWx1ZTkiLCJzZXREYXRhc2V0NFZhbHVlMTAiLCJzZXREYXRhc2V0NFZhbHVlMTEiLCJzZXREYXRhc2V0NFZhbHVlMTIiLCJkYXRhc2V0NSIsInNldERhdGFzZXQ1VmFsdWUxIiwic2V0RGF0YXNldDVWYWx1ZTIiLCJzZXREYXRhc2V0NVZhbHVlMyIsInNldERhdGFzZXQ1VmFsdWU0Iiwic2V0RGF0YXNldDVWYWx1ZTUiLCJzZXREYXRhc2V0NVZhbHVlNiIsInNldERhdGFzZXQ1VmFsdWU3Iiwic2V0RGF0YXNldDVWYWx1ZTgiLCJzZXREYXRhc2V0NVZhbHVlOSIsInNldERhdGFzZXQ1VmFsdWUxMCIsInNldERhdGFzZXQ1VmFsdWUxMSIsInNldERhdGFzZXQ1VmFsdWUxMiIsImRhdGFzZXQ2Iiwic2V0RGF0YXNldDZWYWx1ZTEiLCJzZXREYXRhc2V0NlZhbHVlMiIsInNldERhdGFzZXQ2VmFsdWUzIiwic2V0RGF0YXNldDZWYWx1ZTQiLCJzZXREYXRhc2V0NlZhbHVlNSIsInNldERhdGFzZXQ2VmFsdWU2Iiwic2V0RGF0YXNldDZWYWx1ZTciLCJzZXREYXRhc2V0NlZhbHVlOCIsInNldERhdGFzZXQ2VmFsdWU5Iiwic2V0RGF0YXNldDZWYWx1ZTEwIiwic2V0RGF0YXNldDZWYWx1ZTExIiwic2V0RGF0YXNldDZWYWx1ZTEyIiwiZGF0YXNldDFMYWJlbCIsInNldERhdGFzZXQxTGFiZWwiLCJkYXRhc2V0MkxhYmVsIiwic2V0RGF0YXNldDJMYWJlbCIsImRhdGFzZXQzTGFiZWwiLCJzZXREYXRhc2V0M0xhYmVsIiwiZGF0YXNldDRMYWJlbCIsInNldERhdGFzZXQ0TGFiZWwiLCJkYXRhc2V0NUxhYmVsIiwic2V0RGF0YXNldDVMYWJlbCIsImRhdGFzZXQ2TGFiZWwiLCJzZXREYXRhc2V0NkxhYmVsIiwiY29sb3JzIiwiY2hhcnRUeXBlIiwiY29sb3JzMSIsImNvbG9yczIiLCJjb2xvcnMzIiwiY29sb3JzNCIsImNvbG9yczUiLCJsYWJlbCIsImRhdGFzZXRzIiwiYmFja2dyb3VuZENvbG9yIiwiYm9yZGVyV2lkdGgiLCJuZXdDaGFydCIsInNldE5ld0NoYXJ0Iiwic2V0RGF0YXNldHMiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiaW5uZXJIVE1MIiwibXlDaGFydFJlZiIsImdldENvbnRleHQiLCJkYXRhcyIsImRhdGFzZXQiLCJ0ZXN0MSIsImRhdGFzZXMiLCJ1bmRlZmluZWQiLCJ0ZXN0IiwiZGF0YXJlciIsInRlc3QyIiwiZmlsdGVyIiwib2JqIiwiZmlsbCIsIm5ld0RhdGFzZXRzIiwiYm9yZGVyQ29sb3IiLCJ3aW5kb3ciLCJDaGFydCIsInNraXBOdWxsIiwibGVnZW5kIiwicG9zaXRpb24iLCJ5QXhlcyIsInN0YWNrZWQiLCJ0aWNrcyIsInhBeGVzIiwibGFiZWwxIiwibGFiZWwyIiwibGFiZWwzIiwibGFiZWw0IiwibGFiZWw1IiwibGFiZWw2IiwibGFiZWw3IiwibGFiZWw4IiwibGFiZWw5IiwibGFiZWwxMCIsImxhYmVsMTEiLCJsYWJlbDEyIiwib25MYWJlbENoYW5nZTEiLCJsYWJlbE9uZSIsIm9uTGFiZWxDaGFuZ2UyIiwibGFiZWwyMiIsIm9uTGFiZWxDaGFuZ2UzIiwibGFiZWwzMyIsIm9uTGFiZWxDaGFuZ2U0IiwibGFiZWw0NCIsIm9uTGFiZWxDaGFuZ2U1IiwibGFiZWw1NSIsIm9uTGFiZWxDaGFuZ2U2IiwibGFiZWw2NiIsIm9uTGFiZWxDaGFuZ2U3IiwibGFiZWw3NyIsIm9uTGFiZWxDaGFuZ2U4IiwibGFiZWw4OCIsIm9uTGFiZWxDaGFuZ2U5IiwibGFiZWw5OSIsIm9uTGFiZWxDaGFuZ2UxMCIsImxhYmVsMTAwIiwib25MYWJlbENoYW5nZTExIiwibGFiZWwxMTEiLCJvbkxhYmVsQ2hhbmdlMTIiLCJsYWJlbDEyMCIsImRhdGFzZXQxVmFsdWUxIiwiZGF0YXNldDFWYWx1ZTIiLCJkYXRhc2V0MVZhbHVlMyIsImRhdGFzZXQxVmFsdWU0IiwiZGF0YXNldDFWYWx1ZTUiLCJkYXRhc2V0MVZhbHVlNiIsImRhdGFzZXQxVmFsdWU3IiwiZGF0YXNldDFWYWx1ZTgiLCJkYXRhc2V0MVZhbHVlOSIsImRhdGFzZXQxVmFsdWUxMCIsImRhdGFzZXQxVmFsdWUxMSIsImRhdGFzZXQxVmFsdWUxMiIsIm9uRGF0YXNldDFWYWx1ZTFDaGFuZ2UiLCJkYXRhc2V0VmFsdWUiLCJkYXRhc2V0MVZhbHVlT25lIiwib25EYXRhc2V0MVZhbHVlMkNoYW5nZSIsImRhdGFzZXQxVmFsdWUyMiIsIm9uRGF0YXNldDFWYWx1ZTNDaGFuZ2UiLCJkYXRhc2V0MVZhbHVlMzMiLCJvbkRhdGFzZXQxVmFsdWU0Q2hhbmdlIiwiZGF0YXNldDFWYWx1ZTQ0Iiwib25EYXRhc2V0MVZhbHVlNUNoYW5nZSIsImRhdGFzZXQxVmFsdWU1NSIsIm9uRGF0YXNldDFWYWx1ZTZDaGFuZ2UiLCJkYXRhc2V0MVZhbHVlNjYiLCJvbkRhdGFzZXQxVmFsdWU3Q2hhbmdlIiwiZGF0YXNldDFWYWx1ZTc3Iiwib25EYXRhc2V0MVZhbHVlOENoYW5nZSIsImRhdGFzZXQxVmFsdWU4OCIsIm9uRGF0YXNldDFWYWx1ZTlDaGFuZ2UiLCJkYXRhc2V0MVZhbHVlOTkiLCJvbkRhdGFzZXQxVmFsdWUxMENoYW5nZSIsImRhdGFzZXQxVmFsdWUxMDAiLCJvbkRhdGFzZXQxVmFsdWUxMUNoYW5nZSIsImRhdGFzZXQxVmFsdWUxMTEiLCJvbkRhdGFzZXQxVmFsdWUxMkNoYW5nZSIsImRhdGFzZXQxVmFsdWUxMjAiLCJkYXRhc2V0MlZhbHVlMSIsImRhdGFzZXQyVmFsdWUyIiwiZGF0YXNldDJWYWx1ZTMiLCJkYXRhc2V0MlZhbHVlNCIsImRhdGFzZXQyVmFsdWU1IiwiZGF0YXNldDJWYWx1ZTYiLCJkYXRhc2V0MlZhbHVlNyIsImRhdGFzZXQyVmFsdWU4IiwiZGF0YXNldDJWYWx1ZTkiLCJkYXRhc2V0MlZhbHVlMTAiLCJkYXRhc2V0MlZhbHVlMTEiLCJkYXRhc2V0MlZhbHVlMTIiLCJvbkRhdGFzZXQyVmFsdWUxQ2hhbmdlIiwiZGF0YXNldDJWYWx1ZU9uZSIsIm9uRGF0YXNldDJWYWx1ZTJDaGFuZ2UiLCJkYXRhc2V0MlZhbHVlMjIiLCJvbkRhdGFzZXQyVmFsdWUzQ2hhbmdlIiwiZGF0YXNldDJWYWx1ZTMzIiwib25EYXRhc2V0MlZhbHVlNENoYW5nZSIsImRhdGFzZXQyVmFsdWU0NCIsIm9uRGF0YXNldDJWYWx1ZTVDaGFuZ2UiLCJkYXRhc2V0MlZhbHVlNTUiLCJvbkRhdGFzZXQyVmFsdWU2Q2hhbmdlIiwiZGF0YXNldDJWYWx1ZTY2Iiwib25EYXRhc2V0MlZhbHVlN0NoYW5nZSIsImRhdGFzZXQyVmFsdWU3NyIsIm9uRGF0YXNldDJWYWx1ZThDaGFuZ2UiLCJkYXRhc2V0MlZhbHVlODgiLCJvbkRhdGFzZXQyVmFsdWU5Q2hhbmdlIiwiZGF0YXNldDJWYWx1ZTk5Iiwib25EYXRhc2V0MlZhbHVlMTBDaGFuZ2UiLCJkYXRhc2V0MlZhbHVlMTAwIiwib25EYXRhc2V0MlZhbHVlMTFDaGFuZ2UiLCJkYXRhc2V0MlZhbHVlMTExIiwib25EYXRhc2V0MlZhbHVlMTJDaGFuZ2UiLCJkYXRhc2V0MlZhbHVlMTIwIiwiZGF0YXNldDNWYWx1ZTEiLCJkYXRhc2V0M1ZhbHVlMiIsImRhdGFzZXQzVmFsdWUzIiwiZGF0YXNldDNWYWx1ZTQiLCJkYXRhc2V0M1ZhbHVlNSIsImRhdGFzZXQzVmFsdWU2IiwiZGF0YXNldDNWYWx1ZTciLCJkYXRhc2V0M1ZhbHVlOCIsImRhdGFzZXQzVmFsdWU5IiwiZGF0YXNldDNWYWx1ZTEwIiwiZGF0YXNldDNWYWx1ZTExIiwiZGF0YXNldDNWYWx1ZTEyIiwib25EYXRhc2V0M1ZhbHVlMUNoYW5nZSIsImRhdGFzZXQzVmFsdWVPbmUiLCJvbkRhdGFzZXQzVmFsdWUyQ2hhbmdlIiwiZGF0YXNldDNWYWx1ZTIyIiwib25EYXRhc2V0M1ZhbHVlM0NoYW5nZSIsImRhdGFzZXQzVmFsdWUzMyIsIm9uRGF0YXNldDNWYWx1ZTRDaGFuZ2UiLCJkYXRhc2V0M1ZhbHVlNDQiLCJvbkRhdGFzZXQzVmFsdWU1Q2hhbmdlIiwiZGF0YXNldDNWYWx1ZTU1Iiwib25EYXRhc2V0M1ZhbHVlNkNoYW5nZSIsImRhdGFzZXQzVmFsdWU2NiIsIm9uRGF0YXNldDNWYWx1ZTdDaGFuZ2UiLCJkYXRhc2V0M1ZhbHVlNzciLCJvbkRhdGFzZXQzVmFsdWU4Q2hhbmdlIiwiZGF0YXNldDNWYWx1ZTg4Iiwib25EYXRhc2V0M1ZhbHVlOUNoYW5nZSIsImRhdGFzZXQzVmFsdWU5OSIsIm9uRGF0YXNldDNWYWx1ZTEwQ2hhbmdlIiwiZGF0YXNldDNWYWx1ZTEwMCIsIm9uRGF0YXNldDNWYWx1ZTExQ2hhbmdlIiwiZGF0YXNldDNWYWx1ZTExMSIsIm9uRGF0YXNldDNWYWx1ZTEyQ2hhbmdlIiwiZGF0YXNldDNWYWx1ZTEyMCIsImRhdGFzZXQ0VmFsdWUxIiwiZGF0YXNldDRWYWx1ZTIiLCJkYXRhc2V0NFZhbHVlMyIsImRhdGFzZXQ0VmFsdWU0IiwiZGF0YXNldDRWYWx1ZTUiLCJkYXRhc2V0NFZhbHVlNiIsImRhdGFzZXQ0VmFsdWU3IiwiZGF0YXNldDRWYWx1ZTgiLCJkYXRhc2V0NFZhbHVlOSIsImRhdGFzZXQ0VmFsdWUxMCIsImRhdGFzZXQ0VmFsdWUxMSIsImRhdGFzZXQ0VmFsdWUxMiIsIm9uRGF0YXNldDRWYWx1ZTFDaGFuZ2UiLCJkYXRhc2V0NFZhbHVlT25lIiwib25EYXRhc2V0NFZhbHVlMkNoYW5nZSIsImRhdGFzZXQ0VmFsdWUyMiIsIm9uRGF0YXNldDRWYWx1ZTNDaGFuZ2UiLCJkYXRhc2V0NFZhbHVlMzMiLCJvbkRhdGFzZXQ0VmFsdWU0Q2hhbmdlIiwiZGF0YXNldDRWYWx1ZTQ0Iiwib25EYXRhc2V0NFZhbHVlNUNoYW5nZSIsImRhdGFzZXQ0VmFsdWU1NSIsIm9uRGF0YXNldDRWYWx1ZTZDaGFuZ2UiLCJkYXRhc2V0NFZhbHVlNjYiLCJvbkRhdGFzZXQ0VmFsdWU3Q2hhbmdlIiwiZGF0YXNldDRWYWx1ZTc3Iiwib25EYXRhc2V0NFZhbHVlOENoYW5nZSIsImRhdGFzZXQ0VmFsdWU4OCIsIm9uRGF0YXNldDRWYWx1ZTlDaGFuZ2UiLCJkYXRhc2V0NFZhbHVlOTkiLCJvbkRhdGFzZXQ0VmFsdWUxMENoYW5nZSIsImRhdGFzZXQ0VmFsdWUxMDAiLCJvbkRhdGFzZXQ0VmFsdWUxMUNoYW5nZSIsImRhdGFzZXQ0VmFsdWUxMTEiLCJvbkRhdGFzZXQ0VmFsdWUxMkNoYW5nZSIsImRhdGFzZXQ0VmFsdWUxMjAiLCJkYXRhc2V0NVZhbHVlMSIsImRhdGFzZXQ1VmFsdWUyIiwiZGF0YXNldDVWYWx1ZTMiLCJkYXRhc2V0NVZhbHVlNCIsImRhdGFzZXQ1VmFsdWU1IiwiZGF0YXNldDVWYWx1ZTYiLCJkYXRhc2V0NVZhbHVlNyIsImRhdGFzZXQ1VmFsdWU4IiwiZGF0YXNldDVWYWx1ZTkiLCJkYXRhc2V0NVZhbHVlMTAiLCJkYXRhc2V0NVZhbHVlMTEiLCJkYXRhc2V0NVZhbHVlMTIiLCJvbkRhdGFzZXQ1VmFsdWUxQ2hhbmdlIiwiZGF0YXNldDVWYWx1ZU9uZSIsIm9uRGF0YXNldDVWYWx1ZTJDaGFuZ2UiLCJkYXRhc2V0NVZhbHVlMjIiLCJvbkRhdGFzZXQ1VmFsdWUzQ2hhbmdlIiwiZGF0YXNldDVWYWx1ZTMzIiwib25EYXRhc2V0NVZhbHVlNENoYW5nZSIsImRhdGFzZXQ1VmFsdWU0NCIsIm9uRGF0YXNldDVWYWx1ZTVDaGFuZ2UiLCJkYXRhc2V0NVZhbHVlNTUiLCJvbkRhdGFzZXQ1VmFsdWU2Q2hhbmdlIiwiZGF0YXNldDVWYWx1ZTY2Iiwib25EYXRhc2V0NVZhbHVlN0NoYW5nZSIsImRhdGFzZXQ1VmFsdWU3NyIsIm9uRGF0YXNldDVWYWx1ZThDaGFuZ2UiLCJkYXRhc2V0NVZhbHVlODgiLCJvbkRhdGFzZXQ1VmFsdWU5Q2hhbmdlIiwiZGF0YXNldDVWYWx1ZTk5Iiwib25EYXRhc2V0NVZhbHVlMTBDaGFuZ2UiLCJkYXRhc2V0NVZhbHVlMTAwIiwib25EYXRhc2V0NVZhbHVlMTFDaGFuZ2UiLCJkYXRhc2V0NVZhbHVlMTExIiwib25EYXRhc2V0NVZhbHVlMTJDaGFuZ2UiLCJkYXRhc2V0NVZhbHVlMTIwIiwiZGF0YXNldDZWYWx1ZTEiLCJkYXRhc2V0NlZhbHVlMiIsImRhdGFzZXQ2VmFsdWUzIiwiZGF0YXNldDZWYWx1ZTQiLCJkYXRhc2V0NlZhbHVlNSIsImRhdGFzZXQ2VmFsdWU2IiwiZGF0YXNldDZWYWx1ZTciLCJkYXRhc2V0NlZhbHVlOCIsImRhdGFzZXQ2VmFsdWU5IiwiZGF0YXNldDZWYWx1ZTEwIiwiZGF0YXNldDZWYWx1ZTExIiwiZGF0YXNldDZWYWx1ZTEyIiwib25EYXRhc2V0NlZhbHVlMUNoYW5nZSIsImRhdGFzZXQ2VmFsdWVPbmUiLCJvbkRhdGFzZXQ2VmFsdWUyQ2hhbmdlIiwiZGF0YXNldDZWYWx1ZTIyIiwib25EYXRhc2V0NlZhbHVlM0NoYW5nZSIsImRhdGFzZXQ2VmFsdWUzMyIsIm9uRGF0YXNldDZWYWx1ZTRDaGFuZ2UiLCJkYXRhc2V0NlZhbHVlNDQiLCJvbkRhdGFzZXQ2VmFsdWU1Q2hhbmdlIiwiZGF0YXNldDZWYWx1ZTU1Iiwib25EYXRhc2V0NlZhbHVlNkNoYW5nZSIsImRhdGFzZXQ2VmFsdWU2NiIsIm9uRGF0YXNldDZWYWx1ZTdDaGFuZ2UiLCJkYXRhc2V0NlZhbHVlNzciLCJvbkRhdGFzZXQ2VmFsdWU4Q2hhbmdlIiwiZGF0YXNldDZWYWx1ZTg4Iiwib25EYXRhc2V0NlZhbHVlOUNoYW5nZSIsImRhdGFzZXQ2VmFsdWU5OSIsIm9uRGF0YXNldDZWYWx1ZTEwQ2hhbmdlIiwiZGF0YXNldDZWYWx1ZTEwMCIsIm9uRGF0YXNldDZWYWx1ZTExQ2hhbmdlIiwiZGF0YXNldDZWYWx1ZTExMSIsIm9uRGF0YXNldDZWYWx1ZTEyQ2hhbmdlIiwiZGF0YXNldDZWYWx1ZTEyMCIsIm9uRGF0YXNldExhYmVsQ2hhbmdlMSIsImRhdGFzZXRMYWJlbCIsIm9uRGF0YXNldExhYmVsQ2hhbmdlMiIsIm9uRGF0YXNldExhYmVsQ2hhbmdlMyIsIm9uRGF0YXNldExhYmVsQ2hhbmdlNCIsIm9uRGF0YXNldExhYmVsQ2hhbmdlNSIsIm9uRGF0YXNldExhYmVsQ2hhbmdlNiIsInRhYmxlUmVmIiwiYWRkRXZlbnRMaXN0ZW5lciIsImdzYXAiLCJ0byIsImhlaWdodCIsImR1cmF0aW9uIiwidHJhbnNmb3JtT3JpZ2luIiwiZWFzZSIsIkxpbmVhciIsImFjdGl2ZUNoYXJ0VHlwZSIsInNldEFjdGl2ZUNoYXJ0VHlwZSIsImNoYXJ0Rm9ybWF0Iiwib25DaGFydENoYW5nZSIsImN1cnJlbnQiLCJuZXdGaWVsZHNBcnJheSIsIm5ld1NlY3Rpb24iLCJ0aXRsZSIsImNyZWF0ZWRBdCIsIm9uU3RhY2tlZENoYW5nZSIsImlubmVyUmVmIiwiZHJhZ2dhYmxlUHJvcHMiLCJlIiwidGFyZ2V0IiwiZHJhZ0hhbmRsZVByb3BzIiwid2lkdGgiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Q0FFQTs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtDQUdBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFD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O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQyIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9kYXNoYm9hcmQvcHJvamVjdHMvW3Byb2plY3RdL2J1c2luZXNzLXBsYW4uMjI1Njg2MTQzOGU5OWI5MmUwNzYuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VDYWxsYmFjaywgdXNlRWZmZWN0LCB1c2VNZW1vLCB1c2VSZWYsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgQ2hhcnRKc0ltYWdlIGZyb20gJ2NoYXJ0anMtdG8taW1hZ2UnO1xyXG4vLyBpbXBvcnQgQ2hhcnRKU0ltYWdlIGZyb20gJ2NoYXJ0LmpzLWltYWdlJztcclxuaW1wb3J0IE15RG9jdW1lbnQxIGZyb20gJy4vUERGQ2hhcnQnO1xyXG5pbXBvcnQgeyBwZGYsIFBhZ2UsIFRleHQsIFZpZXcsIERvY3VtZW50LCBTdHlsZVNoZWV0LCBCbG9iUHJvdmlkZXIsIFBERkRvd25sb2FkTGluayB9IGZyb20gJ0ByZWFjdC1wZGYvcmVuZGVyZXInO1xyXG5pbXBvcnQgeyB2NCBhcyB1dWlkdjQgfSBmcm9tICd1dWlkJztcclxuaW1wb3J0IGRlYm91bmNlIGZyb20gJy4uLy4uLy4uLy4uLy4uL3V0aWxzL2hlbHBlcnMnO1xyXG5pbXBvcnQgeyBkYiB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL2xpYi9maXJlYmFzZSc7XHJcbmltcG9ydCBnc2FwLCB7IFBvd2VyNCwgTGluZWFyIH0gZnJvbSAnZ3NhcCc7XHJcbmltcG9ydCBJbWFnZSBmcm9tICduZXh0L2ltYWdlJztcclxuaW1wb3J0IFJvdXRlciBmcm9tICduZXh0L3JvdXRlcic7XHJcblxyXG4vLyBDaGFydCBmdW5jdGlvbnNcclxuLy8gaW1wb3J0IHsgY2hhcnRMYWJlbHNVcGRhdGUgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi91dGlscy9jaGFydCc7XHJcblxyXG4vLyBjb25zdCBNeURvY3VtZW50ID0gKHsgaW1hZ2VVcmwgfSkgPT4ge1xyXG4vLyAgIC8vIGNvbnNvbGUubG9nKGltYWdlVXJsKTtcclxuLy8gICByZXR1cm4gKFxyXG4vLyAgICAgPERvY3VtZW50PlxyXG4vLyAgICAgICA8UGFnZSBzaXplPSdBNCc+XHJcbi8vICAgICAgICAgPFZpZXc+XHJcbi8vICAgICAgICAgICA8VGV4dD5TZWN0aW9uICMxPC9UZXh0PlxyXG4vLyAgICAgICAgIDwvVmlldz5cclxuLy8gICAgICAgICA8Vmlldz5cclxuLy8gICAgICAgICAgIDxJbWFnZSBzcmM9e2ltYWdlVXJsICYmIGltYWdlVXJsfSAvPlxyXG4vLyAgICAgICAgIDwvVmlldz5cclxuLy8gICAgICAgPC9QYWdlPlxyXG4vLyAgICAgPC9Eb2N1bWVudD5cclxuLy8gICApO1xyXG4vLyB9O1xyXG5cclxuY29uc3QgQ2hhcnRKc0NvbXBvbmVudCA9ICh7XHJcbiAgY2hhcnRJbWFnZVVwZGF0ZSxcclxuICBwcm92aWRlZCxcclxuICBwcm9qZWN0SWQsXHJcbiAgYWRkQ2hhcnQsXHJcbiAgY2hhcnRUeXBlVXBkYXRlLFxyXG4gIGN1cnJlbnRJbmRleCxcclxuICBkZWxldGVGaWVsZCxcclxuICBjb250YWluZXJSZWYsXHJcbiAgZGF0YXNldExhYmVsNlVwZGF0ZSxcclxuICBkYXRhc2V0TGFiZWw1VXBkYXRlLFxyXG4gIGRhdGFzZXRMYWJlbDRVcGRhdGUsXHJcbiAgZGF0YXNldExhYmVsM1VwZGF0ZSxcclxuICBkYXRhc2V0TGFiZWwyVXBkYXRlLFxyXG4gIGRhdGFzZXRMYWJlbDFVcGRhdGUsXHJcbiAgZGF0YXNldDZVcGRhdGUsXHJcbiAgZGF0YXNldDVVcGRhdGUsXHJcbiAgZGF0YXNldDRVcGRhdGUsXHJcbiAgZGF0YXNldDNVcGRhdGUsXHJcbiAgZGF0YXNldDJVcGRhdGUsXHJcbiAgZGF0YXNldDFVcGRhdGUsXHJcbiAgbGFiZWxVcGRhdGUsXHJcbiAgY2hhcnRMYWJlbHNVcGRhdGUsXHJcbiAgZmllbGQsXHJcbiAgc2VsZWN0ZWRTZWN0aW9uLFxyXG4gIGNoYXJ0VmFsdWVVcGRhdGUsXHJcbiAgaW5kZXgsXHJcbn0pID0+IHtcclxuICBjb25zb2xlLmxvZygnRklFTEQgLS0+ICcsIGZpZWxkKTtcclxuICBjb25zdCBjaGFydFJlZiA9IHVzZVJlZigpO1xyXG5cclxuICBjb25zdCBbaW5wdXREYXRhLCBzZXRJbnB1dERhdGFdID0gdXNlU3RhdGUoJ1NpbXBsZSBsZWdlbmQnKTtcclxuXHJcbiAgY29uc3QgdG9TYXZlQ2hhcnQgPSBuZXcgQ2hhcnRKc0ltYWdlKCk7XHJcbiAgdG9TYXZlQ2hhcnQuc2V0Q29uZmlnKHtcclxuICAgIHR5cGU6ICdiYXInLFxyXG4gICAgZGF0YTogZGF0YSxcclxuICAgIG9wdGlvbnM6IHtcclxuICAgICAgcmVzcG9uc2l2ZTogZmFsc2UsXHJcbiAgICAgIHNjYWxlczoge1xyXG4gICAgICAgIHk6IHtcclxuICAgICAgICAgIGJlZ2luQXRaZXJvOiB0cnVlLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0sXHJcbiAgICB9LFxyXG4gIH0pO1xyXG5cclxuICBjb25zdCBbaW1hZ2VVcmwsIHNldEltYWdlVXJsXSA9IHVzZVN0YXRlKCk7XHJcblxyXG4gIGNvbnN0IG9uQ2hhcnRTYXZlID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgY29uc29sZS5sb2coYXdhaXQgdG9TYXZlQ2hhcnQudG9EYXRhVXJsKCkpO1xyXG4gICAgLy8gc2V0SW1hZ2VVcmwoYXdhaXQgdG9TYXZlQ2hhcnQudG9EYXRhVXJsKCkpO1xyXG4gIH07XHJcblxyXG4gIHVzZUVmZmVjdChhc3luYyAoKSA9PiB7XHJcbiAgICBzZXRJbWFnZVVybChhd2FpdCB0b1NhdmVDaGFydC50b0RhdGFVcmwoKSk7XHJcbiAgICBjb25zb2xlLmxvZyhpbWFnZVVybCk7XHJcbiAgfSwgW10pO1xyXG5cclxuICBjb25zdCBbb3Blbiwgc2V0T3Blbl0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBzZXRPcGVuKGZhbHNlKTtcclxuICAgIHNldE9wZW4odHJ1ZSk7XHJcbiAgICByZXR1cm4gKCkgPT4gc2V0T3BlbihmYWxzZSk7XHJcbiAgfSk7XHJcblxyXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIFZBTFVFUyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgY29uc3QgW25hbWUsIHNldE5hbWVdID0gdXNlU3RhdGUoJycpO1xyXG4gIGNvbnN0IFt0eXBlLCBzZXRUeXBlXSA9IHVzZVN0YXRlKCcnKTtcclxuICBjb25zdCBbdmFsdWUsIHNldFZhbHVlXSA9IHVzZVN0YXRlKCcnKTtcclxuICBjb25zdCBbY29sb3IsIHNldENvbG9yXSA9IHVzZVN0YXRlKCcnKTtcclxuXHJcbiAgY29uc3QgdXBkYXRlID0gdXNlQ2FsbGJhY2soXHJcbiAgICBkZWJvdW5jZShhc3luYyAoZGF0YSkgPT4ge1xyXG4gICAgICBjb25zdCBjdXJyZW50U2VjdGlvbkluZGV4ID0gYXdhaXQgZGF0YS5zZWxTZWN0aW9uLmZpZWxkcy5maW5kSW5kZXgoKGZpZWxkKSA9PiBmaWVsZC5pbmRleCA9PSBkYXRhLmluZGV4KTtcclxuICAgICAgY2hhcnRWYWx1ZVVwZGF0ZShkYXRhLCBkYXRhLmluZGV4LCBjdXJyZW50U2VjdGlvbkluZGV4KTtcclxuICAgIH0sIDUwMCksXHJcbiAgICBbXVxyXG4gICk7XHJcblxyXG4gIGNvbnN0IHVwZGF0ZU5hbWUgPSAodmFsKSA9PiB7XHJcbiAgICBjb25zdCBkYXRhID0ge1xyXG4gICAgICBuYW1lOiB2YWwsXHJcbiAgICAgIGluZGV4LFxyXG4gICAgICBzZWxTZWN0aW9uOiBzZWxlY3RlZFNlY3Rpb24sXHJcbiAgICB9O1xyXG4gICAgLy8gdXBkYXRlKGRhdGEpO1xyXG4gICAgc2V0TmFtZSh2YWwpO1xyXG4gIH07XHJcbiAgY29uc3QgdXBkYXRlVHlwZSA9ICh2YWwpID0+IHtcclxuICAgIGNvbnN0IGRhdGEgPSB7XHJcbiAgICAgIHR5cGU6IHZhbCxcclxuICAgICAgaW5kZXgsXHJcbiAgICAgIHNlbFNlY3Rpb246IHNlbGVjdGVkU2VjdGlvbixcclxuICAgIH07XHJcbiAgICAvLyB1cGRhdGUoZGF0YSk7XHJcbiAgICBzZXRUeXBlKHZhbCk7XHJcbiAgfTtcclxuICBjb25zdCB1cGRhdGVWYWx1ZSA9ICh2YWwpID0+IHtcclxuICAgIGNvbnN0IGRhdGEgPSB7XHJcbiAgICAgIHZhbHVlOiB2YWwsXHJcbiAgICAgIGluZGV4LFxyXG4gICAgICBzZWxTZWN0aW9uOiBzZWxlY3RlZFNlY3Rpb24sXHJcbiAgICB9O1xyXG4gICAgLy8gdXBkYXRlKGRhdGEpO1xyXG4gICAgc2V0VmFsdWUodmFsKTtcclxuICB9O1xyXG4gIGNvbnN0IHVwZGF0ZUNvbG9yID0gKHZhbCkgPT4ge1xyXG4gICAgY29uc3QgZGF0YSA9IHtcclxuICAgICAgY29sb3I6IHZhbCxcclxuICAgICAgaW5kZXgsXHJcbiAgICAgIHNlbFNlY3Rpb246IHNlbGVjdGVkU2VjdGlvbixcclxuICAgIH07XHJcbiAgICAvLyB1cGRhdGUoZGF0YSk7XHJcbiAgICBzZXRDb2xvcih2YWwpO1xyXG4gIH07XHJcblxyXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIE5ldyBDaGFydCBWYWx1ZXMgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgY29uc3Qgb25OZXdEYXRhQ2hhcnRBZGQgPSBhc3luYyAoKSA9PiB7XHJcbiAgICBjb25zdCBuZXdEYXRhID0ge1xyXG4gICAgICBuYW1lLFxyXG4gICAgICB0eXBlLFxyXG4gICAgICB2YWx1ZSxcclxuICAgICAgY29sb3IsXHJcbiAgICB9O1xyXG4gICAgY29uc3QgY3VycmVudENoYXJ0SW5kZXggPSBhd2FpdCBzZWxlY3RlZFNlY3Rpb24uZmllbGRzLmZpbmRJbmRleCgoZmllbGQpID0+IGZpZWxkLmluZGV4ID09IGluZGV4KTtcclxuICAgIC8vIGxldCBuZXdGaWVsZHNBcnJheSA9IFsuLi5zZWxlY3RlZFNlY3Rpb24uZmllbGRzXTtcclxuICAgIGNvbnN0IG5ld1NlbGVjdGVkU2VjdGlvbiA9IHNlbGVjdGVkU2VjdGlvbjtcclxuICAgIG5ld1NlbGVjdGVkU2VjdGlvbi5maWVsZHNbY3VycmVudENoYXJ0SW5kZXhdLmRhdGEucHVzaChuZXdEYXRhKTtcclxuICAgIGNvbnNvbGUubG9nKG5ld1NlbGVjdGVkU2VjdGlvbik7XHJcblxyXG4gICAgLy8gbmV3RmllbGRzQXJyYXlbY3VycmVudENoYXJ0SW5kZXhdID0ge1xyXG4gICAgLy8gICBpbmRleCxcclxuICAgIC8vICAgdHlwZTogJ2NoYXJ0JyxcclxuICAgIC8vICAgZGF0YTogJ0QnXHJcbiAgICAvLyB9XHJcblxyXG4gICAgZGIuY29sbGVjdGlvbigncHJvamVjdHMnKVxyXG4gICAgICAuZG9jKHByb2plY3RJZClcclxuICAgICAgLmNvbGxlY3Rpb24oJ2J1c2luZXNzUGxhbicpXHJcbiAgICAgIC5kb2MoUm91dGVyLnF1ZXJ5LnByb2plY3QpXHJcbiAgICAgIC5jb2xsZWN0aW9uKCdpbnB1dHMnKVxyXG4gICAgICAvLyAuY29sbGVjdGlvbignY3VycmVudEJ1c2luZXNzUGxhbicpXHJcbiAgICAgIC8vICAgLmRvYygnR3Jjdmh5Snd2bFdWeTMxUXNpdWRvUUtkS0k3MicpXHJcbiAgICAgIC8vICAgLmNvbGxlY3Rpb24oJ2lucHV0cycpXHJcbiAgICAgIC5kb2Moc2VsZWN0ZWRTZWN0aW9uLmlkKVxyXG4gICAgICAudXBkYXRlKHtcclxuICAgICAgICBmaWVsZHM6IG5ld1NlbGVjdGVkU2VjdGlvbi5maWVsZHMsXHJcbiAgICAgIH0pO1xyXG4gIH07XHJcblxyXG4gIC8vIENoYXJ0IERhdGEgZmV0Y2hpbmdcclxuICBjb25zdCBbY2hhcnREYXRhLCBzZXRDaGFydERhdGFdID0gdXNlU3RhdGUoKTtcclxuXHJcbiAgdXNlRWZmZWN0KGFzeW5jICgpID0+IHtcclxuICAgIGNvbnN0IGN1cnJlbnRDaGFydEluZGV4ID0gYXdhaXQgc2VsZWN0ZWRTZWN0aW9uLmZpZWxkcy5maW5kSW5kZXgoKGZpZWxkKSA9PiBmaWVsZC5pbmRleCA9PSBpbmRleCk7XHJcbiAgICBkYi5jb2xsZWN0aW9uKCdwcm9qZWN0cycpXHJcbiAgICAgIC5kb2MocHJvamVjdElkKVxyXG4gICAgICAuY29sbGVjdGlvbignYnVzaW5lc3NQbGFuJylcclxuICAgICAgLmRvYyhSb3V0ZXIucXVlcnkucHJvamVjdClcclxuICAgICAgLmNvbGxlY3Rpb24oJ2lucHV0cycpXHJcbiAgICAgIC8vIC5jb2xsZWN0aW9uKCdjdXJyZW50QnVzaW5lc3NQbGFuJylcclxuICAgICAgLy8gICAuZG9jKCdHcmN2aHlKd3ZsV1Z5MzFRc2l1ZG9RS2RLSTcyJylcclxuICAgICAgLy8gICAuY29sbGVjdGlvbignaW5wdXRzJylcclxuICAgICAgLmRvYyhzZWxlY3RlZFNlY3Rpb24uaWQpXHJcbiAgICAgIC5vblNuYXBzaG90KChzZXJ2ZXJVcGRhdGUpID0+IHtcclxuICAgICAgICBjb25zdCBmaWVsZHMgPSBzZXJ2ZXJVcGRhdGUuZGF0YSgpLmZpZWxkcy5tYXAoKGZpZWxkKSA9PiB7XHJcbiAgICAgICAgICByZXR1cm4gZmllbGQ7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgc2V0Q2hhcnREYXRhKGZpZWxkc1tjdXJyZW50Q2hhcnRJbmRleF0pO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGZpZWxkc1tjdXJyZW50Q2hhcnRJbmRleF0pO1xyXG4gICAgICAgIC8vIHNlY3Rpb25zLnNvcnQoKGEsIGIpID0+IGIuY3JlYXRlZEF0IC0gYS5jcmVhdGVkQXQpO1xyXG4gICAgICAgIC8vIHRoaXMuc2V0U3RhdGUoeyBzZWN0aW9uczogc2VjdGlvbnMgfSk7XHJcbiAgICAgIH0pO1xyXG4gIH0sIFtdKTtcclxuICBjb25zb2xlLmxvZyhmaWVsZCk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBmaWVsZC5sYWJlbHNbMF0gJiYgc2V0TGFiZWwxKGZpZWxkLmxhYmVsc1swXSk7XHJcbiAgICBmaWVsZC5sYWJlbHNbMV0gJiYgc2V0TGFiZWwyKGZpZWxkLmxhYmVsc1sxXSk7XHJcbiAgICBmaWVsZC5sYWJlbHNbMl0gJiYgc2V0TGFiZWwzKGZpZWxkLmxhYmVsc1syXSk7XHJcbiAgICBmaWVsZC5sYWJlbHNbM10gJiYgc2V0TGFiZWw0KGZpZWxkLmxhYmVsc1szXSk7XHJcbiAgICBmaWVsZC5sYWJlbHNbNF0gJiYgc2V0TGFiZWw1KGZpZWxkLmxhYmVsc1s0XSk7XHJcbiAgICBmaWVsZC5sYWJlbHNbNV0gJiYgc2V0TGFiZWw2KGZpZWxkLmxhYmVsc1s1XSk7XHJcbiAgICBmaWVsZC5sYWJlbHNbNl0gJiYgc2V0TGFiZWw3KGZpZWxkLmxhYmVsc1s2XSk7XHJcbiAgICBmaWVsZC5sYWJlbHNbN10gJiYgc2V0TGFiZWw4KGZpZWxkLmxhYmVsc1s3XSk7XHJcbiAgICBmaWVsZC5sYWJlbHNbOF0gJiYgc2V0TGFiZWw5KGZpZWxkLmxhYmVsc1s4XSk7XHJcbiAgICBmaWVsZC5sYWJlbHNbOV0gJiYgc2V0TGFiZWwxMChmaWVsZC5sYWJlbHNbOV0pO1xyXG4gICAgZmllbGQubGFiZWxzWzEwXSAmJiBzZXRMYWJlbDExKGZpZWxkLmxhYmVsc1sxMF0pO1xyXG4gICAgZmllbGQubGFiZWxzWzExXSAmJiBzZXRMYWJlbDEyKGZpZWxkLmxhYmVsc1sxMV0pO1xyXG4gIH0sIFtmaWVsZF0pO1xyXG5cclxuICAvLyBEYXRhc2V0MVxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBmaWVsZC5kYXRhc2V0MVswXSAmJiBzZXREYXRhc2V0MVZhbHVlMShmaWVsZC5kYXRhc2V0MVswXSk7XHJcbiAgICBmaWVsZC5kYXRhc2V0MVsxXSAmJiBzZXREYXRhc2V0MVZhbHVlMihmaWVsZC5kYXRhc2V0MVsxXSk7XHJcbiAgICBmaWVsZC5kYXRhc2V0MVsyXSAmJiBzZXREYXRhc2V0MVZhbHVlMyhmaWVsZC5kYXRhc2V0MVsyXSk7XHJcbiAgICBmaWVsZC5kYXRhc2V0MVszXSAmJiBzZXREYXRhc2V0MVZhbHVlNChmaWVsZC5kYXRhc2V0MVszXSk7XHJcbiAgICBmaWVsZC5kYXRhc2V0MVs0XSAmJiBzZXREYXRhc2V0MVZhbHVlNShmaWVsZC5kYXRhc2V0MVs0XSk7XHJcbiAgICBmaWVsZC5kYXRhc2V0MVs1XSAmJiBzZXREYXRhc2V0MVZhbHVlNihmaWVsZC5kYXRhc2V0MVs1XSk7XHJcbiAgICBmaWVsZC5kYXRhc2V0MVs2XSAmJiBzZXREYXRhc2V0MVZhbHVlNyhmaWVsZC5kYXRhc2V0MVs2XSk7XHJcbiAgICBmaWVsZC5kYXRhc2V0MVs3XSAmJiBzZXREYXRhc2V0MVZhbHVlOChmaWVsZC5kYXRhc2V0MVs3XSk7XHJcbiAgICBmaWVsZC5kYXRhc2V0MVs4XSAmJiBzZXREYXRhc2V0MVZhbHVlOShmaWVsZC5kYXRhc2V0MVs4XSk7XHJcbiAgICBmaWVsZC5kYXRhc2V0MVs5XSAmJiBzZXREYXRhc2V0MVZhbHVlMTAoZmllbGQuZGF0YXNldDFbOV0pO1xyXG4gICAgZmllbGQuZGF0YXNldDFbMTBdICYmIHNldERhdGFzZXQxVmFsdWUxMShmaWVsZC5kYXRhc2V0MVsxMF0pO1xyXG4gICAgZmllbGQuZGF0YXNldDFbMTFdICYmIHNldERhdGFzZXQxVmFsdWUxMihmaWVsZC5kYXRhc2V0MVsxMV0pO1xyXG4gIH0sIFtmaWVsZF0pO1xyXG5cclxuICAvLyBEYXRhc2V0MlxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBmaWVsZC5kYXRhc2V0MlswXSAmJiBzZXREYXRhc2V0MlZhbHVlMShmaWVsZC5kYXRhc2V0MlswXSk7XHJcbiAgICBmaWVsZC5kYXRhc2V0MlsxXSAmJiBzZXREYXRhc2V0MlZhbHVlMihmaWVsZC5kYXRhc2V0MlsxXSk7XHJcbiAgICBmaWVsZC5kYXRhc2V0MlsyXSAmJiBzZXREYXRhc2V0MlZhbHVlMyhmaWVsZC5kYXRhc2V0MlsyXSk7XHJcbiAgICBmaWVsZC5kYXRhc2V0MlszXSAmJiBzZXREYXRhc2V0MlZhbHVlNChmaWVsZC5kYXRhc2V0MlszXSk7XHJcbiAgICBmaWVsZC5kYXRhc2V0Mls0XSAmJiBzZXREYXRhc2V0MlZhbHVlNShmaWVsZC5kYXRhc2V0Mls0XSk7XHJcbiAgICBmaWVsZC5kYXRhc2V0Mls1XSAmJiBzZXREYXRhc2V0MlZhbHVlNihmaWVsZC5kYXRhc2V0Mls1XSk7XHJcbiAgICBmaWVsZC5kYXRhc2V0Mls2XSAmJiBzZXREYXRhc2V0MlZhbHVlNyhmaWVsZC5kYXRhc2V0Mls2XSk7XHJcbiAgICBmaWVsZC5kYXRhc2V0Mls3XSAmJiBzZXREYXRhc2V0MlZhbHVlOChmaWVsZC5kYXRhc2V0Mls3XSk7XHJcbiAgICBmaWVsZC5kYXRhc2V0Mls4XSAmJiBzZXREYXRhc2V0MlZhbHVlOShmaWVsZC5kYXRhc2V0Mls4XSk7XHJcbiAgICBmaWVsZC5kYXRhc2V0Mls5XSAmJiBzZXREYXRhc2V0MlZhbHVlMTAoZmllbGQuZGF0YXNldDJbOV0pO1xyXG4gICAgZmllbGQuZGF0YXNldDJbMTBdICYmIHNldERhdGFzZXQyVmFsdWUxMShmaWVsZC5kYXRhc2V0MlsxMF0pO1xyXG4gICAgZmllbGQuZGF0YXNldDJbMTFdICYmIHNldERhdGFzZXQyVmFsdWUxMihmaWVsZC5kYXRhc2V0MlsxMV0pO1xyXG4gIH0sIFtmaWVsZF0pO1xyXG5cclxuICAvLyBEYXRhc2V0M1xyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBmaWVsZC5kYXRhc2V0M1swXSAmJiBzZXREYXRhc2V0M1ZhbHVlMShmaWVsZC5kYXRhc2V0M1swXSk7XHJcbiAgICBmaWVsZC5kYXRhc2V0M1sxXSAmJiBzZXREYXRhc2V0M1ZhbHVlMihmaWVsZC5kYXRhc2V0M1sxXSk7XHJcbiAgICBmaWVsZC5kYXRhc2V0M1syXSAmJiBzZXREYXRhc2V0M1ZhbHVlMyhmaWVsZC5kYXRhc2V0M1syXSk7XHJcbiAgICBmaWVsZC5kYXRhc2V0M1szXSAmJiBzZXREYXRhc2V0M1ZhbHVlNChmaWVsZC5kYXRhc2V0M1szXSk7XHJcbiAgICBmaWVsZC5kYXRhc2V0M1s0XSAmJiBzZXREYXRhc2V0M1ZhbHVlNShmaWVsZC5kYXRhc2V0M1s0XSk7XHJcbiAgICBmaWVsZC5kYXRhc2V0M1s1XSAmJiBzZXREYXRhc2V0M1ZhbHVlNihmaWVsZC5kYXRhc2V0M1s1XSk7XHJcbiAgICBmaWVsZC5kYXRhc2V0M1s2XSAmJiBzZXREYXRhc2V0M1ZhbHVlNyhmaWVsZC5kYXRhc2V0M1s2XSk7XHJcbiAgICBmaWVsZC5kYXRhc2V0M1s3XSAmJiBzZXREYXRhc2V0M1ZhbHVlOChmaWVsZC5kYXRhc2V0M1s3XSk7XHJcbiAgICBmaWVsZC5kYXRhc2V0M1s4XSAmJiBzZXREYXRhc2V0M1ZhbHVlOShmaWVsZC5kYXRhc2V0M1s4XSk7XHJcbiAgICBmaWVsZC5kYXRhc2V0M1s5XSAmJiBzZXREYXRhc2V0M1ZhbHVlMTAoZmllbGQuZGF0YXNldDNbOV0pO1xyXG4gICAgZmllbGQuZGF0YXNldDNbMTBdICYmIHNldERhdGFzZXQzVmFsdWUxMShmaWVsZC5kYXRhc2V0M1sxMF0pO1xyXG4gICAgZmllbGQuZGF0YXNldDNbMTFdICYmIHNldERhdGFzZXQzVmFsdWUxMihmaWVsZC5kYXRhc2V0M1sxMV0pO1xyXG4gIH0sIFtmaWVsZF0pO1xyXG5cclxuICAvLyBEYXRhc2V0NFxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBmaWVsZC5kYXRhc2V0NFswXSAmJiBzZXREYXRhc2V0NFZhbHVlMShmaWVsZC5kYXRhc2V0NFswXSk7XHJcbiAgICBmaWVsZC5kYXRhc2V0NFsxXSAmJiBzZXREYXRhc2V0NFZhbHVlMihmaWVsZC5kYXRhc2V0NFsxXSk7XHJcbiAgICBmaWVsZC5kYXRhc2V0NFsyXSAmJiBzZXREYXRhc2V0NFZhbHVlMyhmaWVsZC5kYXRhc2V0NFsyXSk7XHJcbiAgICBmaWVsZC5kYXRhc2V0NFszXSAmJiBzZXREYXRhc2V0NFZhbHVlNChmaWVsZC5kYXRhc2V0NFszXSk7XHJcbiAgICBmaWVsZC5kYXRhc2V0NFs0XSAmJiBzZXREYXRhc2V0NFZhbHVlNShmaWVsZC5kYXRhc2V0NFs0XSk7XHJcbiAgICBmaWVsZC5kYXRhc2V0NFs1XSAmJiBzZXREYXRhc2V0NFZhbHVlNihmaWVsZC5kYXRhc2V0NFs1XSk7XHJcbiAgICBmaWVsZC5kYXRhc2V0NFs2XSAmJiBzZXREYXRhc2V0NFZhbHVlNyhmaWVsZC5kYXRhc2V0NFs2XSk7XHJcbiAgICBmaWVsZC5kYXRhc2V0NFs3XSAmJiBzZXREYXRhc2V0NFZhbHVlOChmaWVsZC5kYXRhc2V0NFs3XSk7XHJcbiAgICBmaWVsZC5kYXRhc2V0NFs4XSAmJiBzZXREYXRhc2V0NFZhbHVlOShmaWVsZC5kYXRhc2V0NFs4XSk7XHJcbiAgICBmaWVsZC5kYXRhc2V0NFs5XSAmJiBzZXREYXRhc2V0NFZhbHVlMTAoZmllbGQuZGF0YXNldDRbOV0pO1xyXG4gICAgZmllbGQuZGF0YXNldDRbMTBdICYmIHNldERhdGFzZXQ0VmFsdWUxMShmaWVsZC5kYXRhc2V0NFsxMF0pO1xyXG4gICAgZmllbGQuZGF0YXNldDRbMTFdICYmIHNldERhdGFzZXQ0VmFsdWUxMihmaWVsZC5kYXRhc2V0NFsxMV0pO1xyXG4gIH0sIFtmaWVsZF0pO1xyXG5cclxuICAvLyBEYXRhc2V0NVxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBmaWVsZC5kYXRhc2V0NVswXSAmJiBzZXREYXRhc2V0NVZhbHVlMShmaWVsZC5kYXRhc2V0NVswXSk7XHJcbiAgICBmaWVsZC5kYXRhc2V0NVsxXSAmJiBzZXREYXRhc2V0NVZhbHVlMihmaWVsZC5kYXRhc2V0NVsxXSk7XHJcbiAgICBmaWVsZC5kYXRhc2V0NVsyXSAmJiBzZXREYXRhc2V0NVZhbHVlMyhmaWVsZC5kYXRhc2V0NVsyXSk7XHJcbiAgICBmaWVsZC5kYXRhc2V0NVszXSAmJiBzZXREYXRhc2V0NVZhbHVlNChmaWVsZC5kYXRhc2V0NVszXSk7XHJcbiAgICBmaWVsZC5kYXRhc2V0NVs0XSAmJiBzZXREYXRhc2V0NVZhbHVlNShmaWVsZC5kYXRhc2V0NVs0XSk7XHJcbiAgICBmaWVsZC5kYXRhc2V0NVs1XSAmJiBzZXREYXRhc2V0NVZhbHVlNihmaWVsZC5kYXRhc2V0NVs1XSk7XHJcbiAgICBmaWVsZC5kYXRhc2V0NVs2XSAmJiBzZXREYXRhc2V0NVZhbHVlNyhmaWVsZC5kYXRhc2V0NVs2XSk7XHJcbiAgICBmaWVsZC5kYXRhc2V0NVs3XSAmJiBzZXREYXRhc2V0NVZhbHVlOChmaWVsZC5kYXRhc2V0NVs3XSk7XHJcbiAgICBmaWVsZC5kYXRhc2V0NVs4XSAmJiBzZXREYXRhc2V0NVZhbHVlOShmaWVsZC5kYXRhc2V0NVs4XSk7XHJcbiAgICBmaWVsZC5kYXRhc2V0NVs5XSAmJiBzZXREYXRhc2V0NVZhbHVlMTAoZmllbGQuZGF0YXNldDVbOV0pO1xyXG4gICAgZmllbGQuZGF0YXNldDVbMTBdICYmIHNldERhdGFzZXQ1VmFsdWUxMShmaWVsZC5kYXRhc2V0NVsxMF0pO1xyXG4gICAgZmllbGQuZGF0YXNldDVbMTFdICYmIHNldERhdGFzZXQ1VmFsdWUxMihmaWVsZC5kYXRhc2V0NVsxMV0pO1xyXG4gIH0sIFtmaWVsZF0pO1xyXG5cclxuICAvLyBEYXRhc2V0NlxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBmaWVsZC5kYXRhc2V0NlswXSAmJiBzZXREYXRhc2V0NlZhbHVlMShmaWVsZC5kYXRhc2V0NlswXSk7XHJcbiAgICBmaWVsZC5kYXRhc2V0NlsxXSAmJiBzZXREYXRhc2V0NlZhbHVlMihmaWVsZC5kYXRhc2V0NlsxXSk7XHJcbiAgICBmaWVsZC5kYXRhc2V0NlsyXSAmJiBzZXREYXRhc2V0NlZhbHVlMyhmaWVsZC5kYXRhc2V0NlsyXSk7XHJcbiAgICBmaWVsZC5kYXRhc2V0NlszXSAmJiBzZXREYXRhc2V0NlZhbHVlNChmaWVsZC5kYXRhc2V0NlszXSk7XHJcbiAgICBmaWVsZC5kYXRhc2V0Nls0XSAmJiBzZXREYXRhc2V0NlZhbHVlNShmaWVsZC5kYXRhc2V0Nls0XSk7XHJcbiAgICBmaWVsZC5kYXRhc2V0Nls1XSAmJiBzZXREYXRhc2V0NlZhbHVlNihmaWVsZC5kYXRhc2V0Nls1XSk7XHJcbiAgICBmaWVsZC5kYXRhc2V0Nls2XSAmJiBzZXREYXRhc2V0NlZhbHVlNyhmaWVsZC5kYXRhc2V0Nls2XSk7XHJcbiAgICBmaWVsZC5kYXRhc2V0Nls3XSAmJiBzZXREYXRhc2V0NlZhbHVlOChmaWVsZC5kYXRhc2V0Nls3XSk7XHJcbiAgICBmaWVsZC5kYXRhc2V0Nls4XSAmJiBzZXREYXRhc2V0NlZhbHVlOShmaWVsZC5kYXRhc2V0Nls4XSk7XHJcbiAgICBmaWVsZC5kYXRhc2V0Nls5XSAmJiBzZXREYXRhc2V0NlZhbHVlMTAoZmllbGQuZGF0YXNldDZbOV0pO1xyXG4gICAgZmllbGQuZGF0YXNldDZbMTBdICYmIHNldERhdGFzZXQ2VmFsdWUxMShmaWVsZC5kYXRhc2V0NlsxMF0pO1xyXG4gICAgZmllbGQuZGF0YXNldDZbMTFdICYmIHNldERhdGFzZXQ2VmFsdWUxMihmaWVsZC5kYXRhc2V0NlsxMV0pO1xyXG4gIH0sIFtmaWVsZF0pO1xyXG5cclxuICAvLyBEYXRhc2V0IGxhYmVsc1xyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBmaWVsZC5kYXRhc2V0MUxhYmVsICYmIHNldERhdGFzZXQxTGFiZWwoZmllbGQuZGF0YXNldDFMYWJlbCk7XHJcbiAgICBmaWVsZC5kYXRhc2V0MkxhYmVsICYmIHNldERhdGFzZXQyTGFiZWwoZmllbGQuZGF0YXNldDJMYWJlbCk7XHJcbiAgICBmaWVsZC5kYXRhc2V0M0xhYmVsICYmIHNldERhdGFzZXQzTGFiZWwoZmllbGQuZGF0YXNldDNMYWJlbCk7XHJcbiAgICBmaWVsZC5kYXRhc2V0NExhYmVsICYmIHNldERhdGFzZXQ0TGFiZWwoZmllbGQuZGF0YXNldDRMYWJlbCk7XHJcbiAgICBmaWVsZC5kYXRhc2V0NUxhYmVsICYmIHNldERhdGFzZXQ1TGFiZWwoZmllbGQuZGF0YXNldDVMYWJlbCk7XHJcbiAgICBmaWVsZC5kYXRhc2V0NkxhYmVsICYmIHNldERhdGFzZXQ2TGFiZWwoZmllbGQuZGF0YXNldDZMYWJlbCk7XHJcbiAgfSwgW2ZpZWxkXSk7XHJcblxyXG4gIC8vIENIQVJUXHJcbiAgLy8gZmllbGQuZGF0YXNldDEubWFwKChkYXRhKSA9PiB7XHJcbiAgLy8gICBjb25zb2xlLmxvZygnZGF0YSAtLT4gJywgZmllbGQuZGF0YXNldDEuaW5kZXhPZihkYXRhKSk7XHJcbiAgLy8gfSk7XHJcblxyXG4gIGNvbnN0IGNvbG9ycyA9XHJcbiAgICBmaWVsZC5jaGFydFR5cGUgPT0gJ1BpZSBjaGFydCcgfHwgZmllbGQuY2hhcnRUeXBlID09ICdEb3VnaG51dCBjaGFydCdcclxuICAgICAgPyBbXHJcbiAgICAgICAgICAncmdiYSgyMDUsMjIwLDU3LDEpJyxcclxuICAgICAgICAgICdyZ2JhKDI1NSwyMzUsNTksMSknLFxyXG4gICAgICAgICAgJ3JnYmEoMjU1LDE5Myw3LDEpJyxcclxuICAgICAgICAgICdyZ2JhKDI1NSwxNTIsMCwxKScsXHJcbiAgICAgICAgICAncmdiYSgyNTUsODcsMzQsMSknLFxyXG4gICAgICAgICAgJ3JnYmEoMjQ0LDY3LDU0LDEpJyxcclxuICAgICAgICAgICdyZ2JhKDIzMywzMCw5OSwxKScsXHJcbiAgICAgICAgICAncmdiYSgxNTYsMzksMTc2LDEpJyxcclxuICAgICAgICAgICdyZ2JhKDEwMyw1OCwxODMsMSknLFxyXG4gICAgICAgICAgJ3JnYmEoNjMsODEsMTgxLDEpJyxcclxuICAgICAgICAgICdyZ2JhKDk2LDEyNSwxMzksMSknLFxyXG4gICAgICAgICAgJ3JnYmEoMTIxLDg1LDcyLDEpJyxcclxuICAgICAgICBdXHJcbiAgICAgIDogZmllbGQuY2hhcnRUeXBlID09ICdMaW5lIGNoYXJ0JyB8fCBmaWVsZC5jaGFydFR5cGUgPT0gJ0FyZWEgY2hhcnQnXHJcbiAgICAgID8gJ3JnYmEoMjU1LDE4NSwwICwxICknXHJcbiAgICAgIDogW1xyXG4gICAgICAgICAgJ3JnYmEoMjU1LDE4NSwwICwxICknLFxyXG4gICAgICAgICAgJ3JnYmEoMjU1LDE4NSwwICwxICknLFxyXG4gICAgICAgICAgJ3JnYmEoMjU1LDE4NSwwICwxICknLFxyXG4gICAgICAgICAgJ3JnYmEoMjU1LDE4NSwwICwxICknLFxyXG4gICAgICAgICAgJ3JnYmEoMjU1LDE4NSwwICwxICknLFxyXG4gICAgICAgICAgJ3JnYmEoMjU1LDE4NSwwICwxICknLFxyXG4gICAgICAgICAgJ3JnYmEoMjU1LDE4NSwwICwxICknLFxyXG4gICAgICAgICAgJ3JnYmEoMjU1LDE4NSwwICwxICknLFxyXG4gICAgICAgICAgJ3JnYmEoMjU1LDE4NSwwICwxICknLFxyXG4gICAgICAgICAgJ3JnYmEoMjU1LDE4NSwwICwxICknLFxyXG4gICAgICAgICAgJ3JnYmEoMjU1LDE4NSwwICwxICknLFxyXG4gICAgICAgICAgJ3JnYmEoMjU1LDE4NSwwICwxICknLFxyXG4gICAgICAgIF07XHJcblxyXG4gIGNvbnN0IGNvbG9yczEgPVxyXG4gICAgZmllbGQuY2hhcnRUeXBlID09ICdQaWUgY2hhcnQnIHx8IGZpZWxkLmNoYXJ0VHlwZSA9PSAnRG91Z2hudXQgY2hhcnQnXHJcbiAgICAgID8gW1xyXG4gICAgICAgICAgJ3JnYmEoMjA1LDIyMCw1NywxKScsXHJcbiAgICAgICAgICAncmdiYSgyNTUsMjM1LDU5LDEpJyxcclxuICAgICAgICAgICdyZ2JhKDI1NSwxOTMsNywxKScsXHJcbiAgICAgICAgICAncmdiYSgyNTUsMTUyLDAsMSknLFxyXG4gICAgICAgICAgJ3JnYmEoMjU1LDg3LDM0LDEpJyxcclxuICAgICAgICAgICdyZ2JhKDI0NCw2Nyw1NCwxKScsXHJcbiAgICAgICAgICAncmdiYSgyMzMsMzAsOTksMSknLFxyXG4gICAgICAgICAgJ3JnYmEoMTU2LDM5LDE3NiwxKScsXHJcbiAgICAgICAgICAncmdiYSgxMDMsNTgsMTgzLDEpJyxcclxuICAgICAgICAgICdyZ2JhKDYzLDgxLDE4MSwxKScsXHJcbiAgICAgICAgICAncmdiYSg5NiwxMjUsMTM5LDEpJyxcclxuICAgICAgICAgICdyZ2JhKDEyMSw4NSw3MiwxKScsXHJcbiAgICAgICAgXVxyXG4gICAgICA6IGZpZWxkLmNoYXJ0VHlwZSA9PSAnTGluZSBjaGFydCcgfHwgZmllbGQuY2hhcnRUeXBlID09ICdBcmVhIGNoYXJ0J1xyXG4gICAgICA/ICdyZ2JhKDAsMjA0LDEwNiAsMSApJ1xyXG4gICAgICA6IFtcclxuICAgICAgICAgICdyZ2JhKDAsMjA0LDEwNiAsMSApJyxcclxuICAgICAgICAgICdyZ2JhKDAsMjA0LDEwNiAsMSApJyxcclxuICAgICAgICAgICdyZ2JhKDAsMjA0LDEwNiAsMSApJyxcclxuICAgICAgICAgICdyZ2JhKDAsMjA0LDEwNiAsMSApJyxcclxuICAgICAgICAgICdyZ2JhKDAsMjA0LDEwNiAsMSApJyxcclxuICAgICAgICAgICdyZ2JhKDAsMjA0LDEwNiAsMSApJyxcclxuICAgICAgICAgICdyZ2JhKDAsMjA0LDEwNiAsMSApJyxcclxuICAgICAgICAgICdyZ2JhKDAsMjA0LDEwNiAsMSApJyxcclxuICAgICAgICAgICdyZ2JhKDAsMjA0LDEwNiAsMSApJyxcclxuICAgICAgICAgICdyZ2JhKDAsMjA0LDEwNiAsMSApJyxcclxuICAgICAgICAgICdyZ2JhKDAsMjA0LDEwNiAsMSApJyxcclxuICAgICAgICAgICdyZ2JhKDAsMjA0LDEwNiAsMSApJyxcclxuICAgICAgICBdO1xyXG5cclxuICBjb25zdCBjb2xvcnMyID1cclxuICAgIGZpZWxkLmNoYXJ0VHlwZSA9PSAnUGllIGNoYXJ0JyB8fCBmaWVsZC5jaGFydFR5cGUgPT0gJ0RvdWdobnV0IGNoYXJ0J1xyXG4gICAgICA/IFtcclxuICAgICAgICAgICdyZ2JhKDIwNSwyMjAsNTcsMSknLFxyXG4gICAgICAgICAgJ3JnYmEoMjU1LDIzNSw1OSwxKScsXHJcbiAgICAgICAgICAncmdiYSgyNTUsMTkzLDcsMSknLFxyXG4gICAgICAgICAgJ3JnYmEoMjU1LDE1MiwwLDEpJyxcclxuICAgICAgICAgICdyZ2JhKDI1NSw4NywzNCwxKScsXHJcbiAgICAgICAgICAncmdiYSgyNDQsNjcsNTQsMSknLFxyXG4gICAgICAgICAgJ3JnYmEoMjMzLDMwLDk5LDEpJyxcclxuICAgICAgICAgICdyZ2JhKDE1NiwzOSwxNzYsMSknLFxyXG4gICAgICAgICAgJ3JnYmEoMTAzLDU4LDE4MywxKScsXHJcbiAgICAgICAgICAncmdiYSg2Myw4MSwxODEsMSknLFxyXG4gICAgICAgICAgJ3JnYmEoOTYsMTI1LDEzOSwxKScsXHJcbiAgICAgICAgICAncmdiYSgxMjEsODUsNzIsMSknLFxyXG4gICAgICAgIF1cclxuICAgICAgOiBmaWVsZC5jaGFydFR5cGUgPT0gJ0xpbmUgY2hhcnQnIHx8IGZpZWxkLmNoYXJ0VHlwZSA9PSAnQXJlYSBjaGFydCdcclxuICAgICAgPyAncmdiYSgwLDEyMCwyMTUgLDEgKSdcclxuICAgICAgOiBbXHJcbiAgICAgICAgICAncmdiYSgwLDEyMCwyMTUgLDEgKScsXHJcbiAgICAgICAgICAncmdiYSgwLDEyMCwyMTUgLDEgKScsXHJcbiAgICAgICAgICAncmdiYSgwLDEyMCwyMTUgLDEgKScsXHJcbiAgICAgICAgICAncmdiYSgwLDEyMCwyMTUgLDEgKScsXHJcbiAgICAgICAgICAncmdiYSgwLDEyMCwyMTUgLDEgKScsXHJcbiAgICAgICAgICAncmdiYSgwLDEyMCwyMTUgLDEgKScsXHJcbiAgICAgICAgICAncmdiYSgwLDEyMCwyMTUgLDEgKScsXHJcbiAgICAgICAgICAncmdiYSgwLDEyMCwyMTUgLDEgKScsXHJcbiAgICAgICAgICAncmdiYSgwLDEyMCwyMTUgLDEgKScsXHJcbiAgICAgICAgICAncmdiYSgwLDEyMCwyMTUgLDEgKScsXHJcbiAgICAgICAgICAncmdiYSgwLDEyMCwyMTUgLDEgKScsXHJcbiAgICAgICAgICAncmdiYSgwLDEyMCwyMTUgLDEgKScsXHJcbiAgICAgICAgXTtcclxuXHJcbiAgY29uc3QgY29sb3JzMyA9XHJcbiAgICBmaWVsZC5jaGFydFR5cGUgPT0gJ1BpZSBjaGFydCcgfHwgZmllbGQuY2hhcnRUeXBlID09ICdEb3VnaG51dCBjaGFydCdcclxuICAgICAgPyBbXHJcbiAgICAgICAgICAncmdiYSgyMDUsMjIwLDU3LDEpJyxcclxuICAgICAgICAgICdyZ2JhKDI1NSwyMzUsNTksMSknLFxyXG4gICAgICAgICAgJ3JnYmEoMjU1LDE5Myw3LDEpJyxcclxuICAgICAgICAgICdyZ2JhKDI1NSwxNTIsMCwxKScsXHJcbiAgICAgICAgICAncmdiYSgyNTUsODcsMzQsMSknLFxyXG4gICAgICAgICAgJ3JnYmEoMjQ0LDY3LDU0LDEpJyxcclxuICAgICAgICAgICdyZ2JhKDIzMywzMCw5OSwxKScsXHJcbiAgICAgICAgICAncmdiYSgxNTYsMzksMTc2LDEpJyxcclxuICAgICAgICAgICdyZ2JhKDEwMyw1OCwxODMsMSknLFxyXG4gICAgICAgICAgJ3JnYmEoNjMsODEsMTgxLDEpJyxcclxuICAgICAgICAgICdyZ2JhKDk2LDEyNSwxMzksMSknLFxyXG4gICAgICAgICAgJ3JnYmEoMTIxLDg1LDcyLDEpJyxcclxuICAgICAgICBdXHJcbiAgICAgIDogZmllbGQuY2hhcnRUeXBlID09ICdMaW5lIGNoYXJ0JyB8fCBmaWVsZC5jaGFydFR5cGUgPT0gJ0FyZWEgY2hhcnQnXHJcbiAgICAgID8gJ3JnYmEoMjMxLDcyLDg2ICwxICknXHJcbiAgICAgIDogW1xyXG4gICAgICAgICAgJ3JnYmEoMjMxLDcyLDg2ICwxICknLFxyXG4gICAgICAgICAgJ3JnYmEoMjMxLDcyLDg2ICwxICknLFxyXG4gICAgICAgICAgJ3JnYmEoMjMxLDcyLDg2ICwxICknLFxyXG4gICAgICAgICAgJ3JnYmEoMjMxLDcyLDg2ICwxICknLFxyXG4gICAgICAgICAgJ3JnYmEoMjMxLDcyLDg2ICwxICknLFxyXG4gICAgICAgICAgJ3JnYmEoMjMxLDcyLDg2ICwxICknLFxyXG4gICAgICAgICAgJ3JnYmEoMjMxLDcyLDg2ICwxICknLFxyXG4gICAgICAgICAgJ3JnYmEoMjMxLDcyLDg2ICwxICknLFxyXG4gICAgICAgICAgJ3JnYmEoMjMxLDcyLDg2ICwxICknLFxyXG4gICAgICAgICAgJ3JnYmEoMjMxLDcyLDg2ICwxICknLFxyXG4gICAgICAgICAgJ3JnYmEoMjMxLDcyLDg2ICwxICknLFxyXG4gICAgICAgICAgJ3JnYmEoMjMxLDcyLDg2ICwxICknLFxyXG4gICAgICAgIF07XHJcblxyXG4gIGNvbnN0IGNvbG9yczQgPVxyXG4gICAgZmllbGQuY2hhcnRUeXBlID09ICdQaWUgY2hhcnQnIHx8IGZpZWxkLmNoYXJ0VHlwZSA9PSAnRG91Z2hudXQgY2hhcnQnXHJcbiAgICAgID8gW1xyXG4gICAgICAgICAgJ3JnYmEoMjA1LDIyMCw1NywxKScsXHJcbiAgICAgICAgICAncmdiYSgyNTUsMjM1LDU5LDEpJyxcclxuICAgICAgICAgICdyZ2JhKDI1NSwxOTMsNywxKScsXHJcbiAgICAgICAgICAncmdiYSgyNTUsMTUyLDAsMSknLFxyXG4gICAgICAgICAgJ3JnYmEoMjU1LDg3LDM0LDEpJyxcclxuICAgICAgICAgICdyZ2JhKDI0NCw2Nyw1NCwxKScsXHJcbiAgICAgICAgICAncmdiYSgyMzMsMzAsOTksMSknLFxyXG4gICAgICAgICAgJ3JnYmEoMTU2LDM5LDE3NiwxKScsXHJcbiAgICAgICAgICAncmdiYSgxMDMsNTgsMTgzLDEpJyxcclxuICAgICAgICAgICdyZ2JhKDYzLDgxLDE4MSwxKScsXHJcbiAgICAgICAgICAncmdiYSg5NiwxMjUsMTM5LDEpJyxcclxuICAgICAgICAgICdyZ2JhKDEyMSw4NSw3MiwxKScsXHJcbiAgICAgICAgXVxyXG4gICAgICA6IGZpZWxkLmNoYXJ0VHlwZSA9PSAnTGluZSBjaGFydCcgfHwgZmllbGQuY2hhcnRUeXBlID09ICdBcmVhIGNoYXJ0J1xyXG4gICAgICA/ICdyZ2JhKDEyNiwxMTUsOTUgLDEgKSdcclxuICAgICAgOiBbXHJcbiAgICAgICAgICAncmdiYSgxMjYsMTE1LDk1ICwxICknLFxyXG4gICAgICAgICAgJ3JnYmEoMTI2LDExNSw5NSAsMSApJyxcclxuICAgICAgICAgICdyZ2JhKDEyNiwxMTUsOTUgLDEgKScsXHJcbiAgICAgICAgICAncmdiYSgxMjYsMTE1LDk1ICwxICknLFxyXG4gICAgICAgICAgJ3JnYmEoMTI2LDExNSw5NSAsMSApJyxcclxuICAgICAgICAgICdyZ2JhKDEyNiwxMTUsOTUgLDEgKScsXHJcbiAgICAgICAgICAncmdiYSgxMjYsMTE1LDk1ICwxICknLFxyXG4gICAgICAgICAgJ3JnYmEoMTI2LDExNSw5NSAsMSApJyxcclxuICAgICAgICAgICdyZ2JhKDEyNiwxMTUsOTUgLDEgKScsXHJcbiAgICAgICAgICAncmdiYSgxMjYsMTE1LDk1ICwxICknLFxyXG4gICAgICAgICAgJ3JnYmEoMTI2LDExNSw5NSAsMSApJyxcclxuICAgICAgICAgICdyZ2JhKDEyNiwxMTUsOTUgLDEgKScsXHJcbiAgICAgICAgXTtcclxuXHJcbiAgY29uc3QgY29sb3JzNSA9XHJcbiAgICBmaWVsZC5jaGFydFR5cGUgPT0gJ1BpZSBjaGFydCcgfHwgZmllbGQuY2hhcnRUeXBlID09ICdEb3VnaG51dCBjaGFydCdcclxuICAgICAgPyBbXHJcbiAgICAgICAgICAncmdiYSgyMDUsMjIwLDU3LDEpJyxcclxuICAgICAgICAgICdyZ2JhKDI1NSwyMzUsNTksMSknLFxyXG4gICAgICAgICAgJ3JnYmEoMjU1LDE5Myw3LDEpJyxcclxuICAgICAgICAgICdyZ2JhKDI1NSwxNTIsMCwxKScsXHJcbiAgICAgICAgICAncmdiYSgyNTUsODcsMzQsMSknLFxyXG4gICAgICAgICAgJ3JnYmEoMjQ0LDY3LDU0LDEpJyxcclxuICAgICAgICAgICdyZ2JhKDIzMywzMCw5OSwxKScsXHJcbiAgICAgICAgICAncmdiYSgxNTYsMzksMTc2LDEpJyxcclxuICAgICAgICAgICdyZ2JhKDEwMyw1OCwxODMsMSknLFxyXG4gICAgICAgICAgJ3JnYmEoNjMsODEsMTgxLDEpJyxcclxuICAgICAgICAgICdyZ2JhKDk2LDEyNSwxMzksMSknLFxyXG4gICAgICAgICAgJ3JnYmEoMTIxLDg1LDcyLDEpJyxcclxuICAgICAgICBdXHJcbiAgICAgIDogZmllbGQuY2hhcnRUeXBlID09ICdMaW5lIGNoYXJ0JyB8fCBmaWVsZC5jaGFydFR5cGUgPT0gJ0FyZWEgY2hhcnQnXHJcbiAgICAgID8gJ3JnYmEoMTc3LDcwLDE5NCAsMSApJ1xyXG4gICAgICA6IFtcclxuICAgICAgICAgICdyZ2JhKDE3Nyw3MCwxOTQgLDEgKScsXHJcbiAgICAgICAgICAncmdiYSgxNzcsNzAsMTk0ICwxICknLFxyXG4gICAgICAgICAgJ3JnYmEoMTc3LDcwLDE5NCAsMSApJyxcclxuICAgICAgICAgICdyZ2JhKDE3Nyw3MCwxOTQgLDEgKScsXHJcbiAgICAgICAgICAncmdiYSgxNzcsNzAsMTk0ICwxICknLFxyXG4gICAgICAgICAgJ3JnYmEoMTc3LDcwLDE5NCAsMSApJyxcclxuICAgICAgICAgICdyZ2JhKDE3Nyw3MCwxOTQgLDEgKScsXHJcbiAgICAgICAgICAncmdiYSgxNzcsNzAsMTk0ICwxICknLFxyXG4gICAgICAgICAgJ3JnYmEoMTc3LDcwLDE5NCAsMSApJyxcclxuICAgICAgICAgICdyZ2JhKDE3Nyw3MCwxOTQgLDEgKScsXHJcbiAgICAgICAgICAncmdiYSgxNzcsNzAsMTk0ICwxICknLFxyXG4gICAgICAgICAgJ3JnYmEoMTc3LDcwLDE5NCAsMSApJyxcclxuICAgICAgICBdO1xyXG5cclxuICBjb25zb2xlLmxvZyhmaWVsZC5kYXRhc2V0MSk7XHJcbiAgY29uc3QgZGF0YSA9IHtcclxuICAgIGxhYmVsczogZmllbGQubGFiZWxzICYmIFtcclxuICAgICAgLi4uZmllbGQubGFiZWxzLm1hcCgobGFiZWwpID0+IHtcclxuICAgICAgICBpZiAobGFiZWwgIT09ICcnKSB7XHJcbiAgICAgICAgICByZXR1cm4gbGFiZWw7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHJldHVybiAnJztcclxuICAgICAgICB9XHJcbiAgICAgIH0pLFxyXG4gICAgXSxcclxuICAgIGRhdGFzZXRzOiBbXHJcbiAgICAgIC8vIERhdGFzZXQxXHJcbiAgICAgIHtcclxuICAgICAgICBsYWJlbDogZmllbGQuZGF0YXNldDFMYWJlbCAmJiBmaWVsZC5kYXRhc2V0MUxhYmVsLFxyXG4gICAgICAgIGRhdGE6XHJcbiAgICAgICAgICBmaWVsZC5kYXRhc2V0MSAmJlxyXG4gICAgICAgICAgZmllbGQuZGF0YXNldDEubWFwKChkYXRhKSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChkYXRhICE9PSAnJykge1xyXG4gICAgICAgICAgICAgIHJldHVybiBkYXRhO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9KSxcclxuICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IGNvbG9ycyxcclxuICAgICAgICBib3JkZXJXaWR0aDogZmllbGQuY2hhcnRUeXBlID09ICdBcmVhIGNoYXJ0JyA/IDAgOiBmaWVsZC5jaGFydFR5cGUgPT0gJ1BpZSBjaGFydCcgfHwgKGZpZWxkLmNoYXJ0VHlwZSA9PSAnRG91Z2hudXQgY2hhcnQnICYmIDIpLFxyXG4gICAgICB9LFxyXG4gICAgICAvLyBEYXRhc2V0MlxyXG4gICAgICB7XHJcbiAgICAgICAgbGFiZWw6IGZpZWxkLmRhdGFzZXQyTGFiZWwgJiYgZmllbGQuZGF0YXNldDJMYWJlbCxcclxuICAgICAgICBkYXRhOlxyXG4gICAgICAgICAgZmllbGQuZGF0YXNldDIgJiZcclxuICAgICAgICAgIGZpZWxkLmRhdGFzZXQyLm1hcCgoZGF0YSkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoZGF0YSAhPT0gJycpIHtcclxuICAgICAgICAgICAgICByZXR1cm4gZGF0YTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfSksXHJcbiAgICAgICAgYmFja2dyb3VuZENvbG9yOiBjb2xvcnMxLFxyXG4gICAgICAgIGJvcmRlcldpZHRoOiBmaWVsZC5jaGFydFR5cGUgPT0gJ0FyZWEgY2hhcnQnID8gMCA6IGZpZWxkLmNoYXJ0VHlwZSA9PSAnUGllIGNoYXJ0JyB8fCAoZmllbGQuY2hhcnRUeXBlID09ICdEb3VnaG51dCBjaGFydCcgJiYgMiksXHJcbiAgICAgIH0sXHJcbiAgICAgIC8vIERhdGFzZXQzXHJcbiAgICAgIHtcclxuICAgICAgICBsYWJlbDogZmllbGQuZGF0YXNldDNMYWJlbCAmJiBmaWVsZC5kYXRhc2V0M0xhYmVsLFxyXG4gICAgICAgIGRhdGE6XHJcbiAgICAgICAgICBmaWVsZC5kYXRhc2V0MyAmJlxyXG4gICAgICAgICAgZmllbGQuZGF0YXNldDMubWFwKChkYXRhKSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChkYXRhICE9PSAnJykge1xyXG4gICAgICAgICAgICAgIHJldHVybiBkYXRhO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9KSxcclxuICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IGNvbG9yczIsXHJcbiAgICAgICAgYm9yZGVyV2lkdGg6IGZpZWxkLmNoYXJ0VHlwZSA9PSAnQXJlYSBjaGFydCcgPyAwIDogZmllbGQuY2hhcnRUeXBlID09ICdQaWUgY2hhcnQnIHx8IChmaWVsZC5jaGFydFR5cGUgPT0gJ0RvdWdobnV0IGNoYXJ0JyAmJiAyKSxcclxuICAgICAgfSxcclxuICAgICAgLy8gRGF0YXNldDRcclxuICAgICAge1xyXG4gICAgICAgIGxhYmVsOiBmaWVsZC5kYXRhc2V0NExhYmVsICYmIGZpZWxkLmRhdGFzZXQ0TGFiZWwsXHJcbiAgICAgICAgZGF0YTpcclxuICAgICAgICAgIGZpZWxkLmRhdGFzZXQ0ICYmXHJcbiAgICAgICAgICBmaWVsZC5kYXRhc2V0NC5tYXAoKGRhdGEpID0+IHtcclxuICAgICAgICAgICAgaWYgKGRhdGEgIT09ICcnKSB7XHJcbiAgICAgICAgICAgICAgcmV0dXJuIGRhdGE7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH0pLFxyXG4gICAgICAgIGJhY2tncm91bmRDb2xvcjogY29sb3JzMyxcclxuICAgICAgICBib3JkZXJXaWR0aDogZmllbGQuY2hhcnRUeXBlID09ICdBcmVhIGNoYXJ0JyA/IDAgOiBmaWVsZC5jaGFydFR5cGUgPT0gJ1BpZSBjaGFydCcgfHwgKGZpZWxkLmNoYXJ0VHlwZSA9PSAnRG91Z2hudXQgY2hhcnQnICYmIDIpLFxyXG4gICAgICB9LFxyXG4gICAgICAvLyBEYXRhc2V0NVxyXG4gICAgICB7XHJcbiAgICAgICAgbGFiZWw6IGZpZWxkLmRhdGFzZXQ1TGFiZWwgJiYgZmllbGQuZGF0YXNldDVMYWJlbCxcclxuICAgICAgICBkYXRhOlxyXG4gICAgICAgICAgZmllbGQuZGF0YXNldDUgJiZcclxuICAgICAgICAgIGZpZWxkLmRhdGFzZXQ1Lm1hcCgoZGF0YSkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoZGF0YSAhPT0gJycpIHtcclxuICAgICAgICAgICAgICByZXR1cm4gZGF0YTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfSksXHJcbiAgICAgICAgYmFja2dyb3VuZENvbG9yOiBjb2xvcnM0LFxyXG4gICAgICAgIGJvcmRlcldpZHRoOiBmaWVsZC5jaGFydFR5cGUgPT0gJ0FyZWEgY2hhcnQnID8gMCA6IGZpZWxkLmNoYXJ0VHlwZSA9PSAnUGllIGNoYXJ0JyB8fCAoZmllbGQuY2hhcnRUeXBlID09ICdEb3VnaG51dCBjaGFydCcgJiYgMiksXHJcbiAgICAgIH0sXHJcbiAgICAgIC8vIERhdGFzZXQ2XHJcbiAgICAgIHtcclxuICAgICAgICBsYWJlbDogZmllbGQuZGF0YXNldDZMYWJlbCAmJiBmaWVsZC5kYXRhc2V0NkxhYmVsLFxyXG4gICAgICAgIGRhdGE6XHJcbiAgICAgICAgICBmaWVsZC5kYXRhc2V0NiAmJlxyXG4gICAgICAgICAgZmllbGQuZGF0YXNldDYubWFwKChkYXRhKSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChkYXRhICE9PSAnJykge1xyXG4gICAgICAgICAgICAgIHJldHVybiBkYXRhO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9KSxcclxuICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IGNvbG9yczUsXHJcbiAgICAgICAgYm9yZGVyV2lkdGg6IGZpZWxkLmNoYXJ0VHlwZSA9PSAnQXJlYSBjaGFydCcgPyAwIDogZmllbGQuY2hhcnRUeXBlID09ICdQaWUgY2hhcnQnIHx8IChmaWVsZC5jaGFydFR5cGUgPT0gJ0RvdWdobnV0IGNoYXJ0JyAmJiAyKSxcclxuICAgICAgfSxcclxuICAgIF0sXHJcbiAgfTtcclxuXHJcbiAgY29uc29sZS5sb2coZGF0YSk7XHJcblxyXG4gIGNvbnN0IFtuZXdDaGFydCwgc2V0TmV3Q2hhcnRdID0gdXNlU3RhdGUoKTtcclxuICBjb25zdCBbZGF0YXNldHMsIHNldERhdGFzZXRzXSA9IHVzZVN0YXRlKFtdKTtcclxuICB1c2VFZmZlY3QoYXN5bmMgKCkgPT4ge1xyXG4gICAgLy8gY29uc29sZS5sb2coJy0tLS0tLS0tIERFU1RST1kgLS0tLS0tLS0nKTtcclxuICAgIC8vIG5ld0NoYXJ0ICYmIGF3YWl0IG5ld0NoYXJ0LmRlc3Ryb3koKSAmJiBjb25zb2xlLmxvZygnLS0tLS0tLS0gREVTVFJPWSAtLS0tLS0tLScpO1xyXG4gICAgLy8gY29uc3QgaWQgPSBmaWVsZC5jaGFydElkO1xyXG4gICAgLy8gaWYgKHdpbmRvdy5pZCAmJiB3aW5kb3cuaWQgIT09IG51bGwpIHtcclxuICAgIC8vICAgd2luZG93LmlkLmRlc3Ryb3koKTtcclxuICAgIC8vIH1cclxuICAgIC8vIGNvbnN0IG15Q2hhcnRSZWYgPSBjaGFydFJlZi5jdXJyZW50LmdldENvbnRleHQoJzJkJyk7XHJcbiAgICAvLyBjb25zdCBteUNoYXJ0UmVmID0gZmllbGQuY2hhcnRJZDtcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGAke2ZpZWxkLmluZGV4fWNoYXJ0Q29udGFpbmVyYCkuaW5uZXJIVE1MID0gJyZuYnNwOyc7XHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgJHtmaWVsZC5pbmRleH1jaGFydENvbnRhaW5lcmApLmlubmVySFRNTCA9IGA8Y2FudmFzIGlkPSR7ZmllbGQuaW5kZXh9IHJlZj0ke2NoYXJ0UmVmfT48L2NhbnZhcz5gO1xyXG4gICAgY29uc3QgbXlDaGFydFJlZiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGZpZWxkLmluZGV4KS5nZXRDb250ZXh0KCcyZCcpO1xyXG5cclxuICAgIC8vIGRhdGEuZGF0YXNldHMubWFwKChkYXRhc2V0KSA9PiB7XHJcbiAgICAvLyAgIGRhdGEubGFiZWxzLm1hcCgobGFiZWwpID0+IHtcclxuICAgIC8vICAgICBpZiAobGFiZWwgIT09ICcnICYmIGRhdGFzZXQubGFiZWwgIT09ICcnKSB7XHJcbiAgICAvLyAgICAgICBzZXREYXRhc2V0cyhkYXRhc2V0KTtcclxuICAgIC8vICAgICB9XHJcbiAgICAvLyAgIH0pXHJcbiAgICAvLyB9KVxyXG5cclxuICAgIC8vIGNvbnN0IGRhdGFzID0gZGF0YS5kYXRhc2V0cy5tYXAoKGRhdGFzZXQpID0+IHtcclxuICAgIC8vICAgY29uc3QgdGVzdCA9IGRhdGFzZXQuZGF0YS5maWx0ZXIoKGRhdGFyZXIsIGluZGV4KSA9PiB7XHJcbiAgICAvLyAgICAgaWYgKGRhdGEubGFiZWxzW2luZGV4XSAhPT0gJycpIHtcclxuICAgIC8vICAgICAgIHJldHVybiBkYXRhcmVyXHJcbiAgICAvLyAgICAgfVxyXG4gICAgLy8gICB9KVxyXG4gICAgLy8gICByZXR1cm4gdGVzdFxyXG4gICAgLy8gfSlcclxuICAgIGNvbnNvbGUubG9nKGRhdGEuZGF0YXNldHMpO1xyXG4gICAgY29uc3QgZGF0YXMgPSBkYXRhLmRhdGFzZXRzLm1hcCgoZGF0YXNldCkgPT4ge1xyXG4gICAgICBjb25zb2xlLmxvZyhkYXRhc2V0LmRhdGFbMF0pO1xyXG4gICAgICBjb25zdCB0ZXN0MSA9IGRhdGFzZXQuZGF0YS5tYXAoKGRhdGFzZXMpID0+IHtcclxuICAgICAgICBpZiAoZGF0YXNlcyAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICByZXR1cm4gZGF0YXNlcztcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgcmV0dXJuICcnO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICAgIGNvbnN0IHRlc3QgPSB0ZXN0MS5tYXAoKGRhdGFyZXIsIGluZGV4KSA9PiB7XHJcbiAgICAgICAgaWYgKGRhdGEubGFiZWxzW2luZGV4XSAhPT0gJycpIHtcclxuICAgICAgICAgIHJldHVybiBkYXRhcmVyO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICAgIGNvbnN0IHRlc3QyID0gdGVzdC5maWx0ZXIoKG9iaikgPT4gb2JqICE9PSB1bmRlZmluZWQpO1xyXG4gICAgICByZXR1cm4gdGVzdDI7XHJcbiAgICB9KTtcclxuICAgIGNvbnNvbGUubG9nKCdEQVRBUyAtLT4gJywgZGF0YXMpO1xyXG5cclxuICAgIC8vIGNvbnN0IGRhdGExID0gZGF0YXNbMF1bMF0gPyBkYXRhc1swXVswXS5tYXAoKGRhdGFycikgPT4gZGF0YXJyKSA6IFtdO1xyXG4gICAgLy8gY29uc3QgZGF0YTIgPSBkYXRhc1sxXVswXSA/IGRhdGFzWzFdWzBdLm1hcCgoZGF0YXJyKSA9PiBkYXRhcnIpIDogW107XHJcbiAgICAvLyBjb25zdCBkYXRhMyA9IGRhdGFzWzJdWzBdID8gZGF0YXNbMl1bMF0ubWFwKChkYXRhcnIpID0+IGRhdGFycikgOiBbXTtcclxuICAgIC8vIGNvbnN0IGRhdGE0ID0gZGF0YXNbM11bMF0gPyBkYXRhc1szXVswXS5tYXAoKGRhdGFycikgPT4gZGF0YXJyKSA6IFtdO1xyXG4gICAgLy8gY29uc3QgZGF0YTUgPSBkYXRhc1s0XVswXSA/IGRhdGFzWzRdWzBdLm1hcCgoZGF0YXJyKSA9PiBkYXRhcnIpIDogW107XHJcbiAgICAvLyBjb25zdCBkYXRhNiA9IGRhdGFzWzVdWzBdID8gZGF0YXNbNV1bMF0ubWFwKChkYXRhcnIpID0+IGRhdGFycikgOiBbXTtcclxuXHJcbiAgICBjb25zdCBmaWxsID0gZmllbGQuY2hhcnRUeXBlID09ICdMaW5lIGNoYXJ0JyA/IGZhbHNlIDogdW5kZWZpbmVkO1xyXG5cclxuICAgIGNvbnN0IG5ld0RhdGFzZXRzID0gW1xyXG4gICAgICB7XHJcbiAgICAgICAgbGFiZWw6IGRhdGEuZGF0YXNldHNbMF0ubGFiZWwsXHJcbiAgICAgICAgZGF0YTogZGF0YXNbMF0sXHJcbiAgICAgICAgYmFja2dyb3VuZENvbG9yOiBkYXRhLmRhdGFzZXRzWzBdLmJhY2tncm91bmRDb2xvcixcclxuICAgICAgICBib3JkZXJDb2xvcjogZmllbGQuY2hhcnRUeXBlID09ICdMaW5lIGNoYXJ0JyA/ICdyZ2JhKDI1NSwxODUsMCAsMSApJyA6ICdyZ2IoMjU1LCAyNTUsIDI1NSknLFxyXG4gICAgICAgIGJvcmRlcldpZHRoOiBkYXRhLmRhdGFzZXRzWzBdLmJvcmRlcldpZHRoLFxyXG4gICAgICAgIGZpbGw6IGZpbGwsXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBsYWJlbDogZGF0YS5kYXRhc2V0c1sxXS5sYWJlbCxcclxuICAgICAgICBkYXRhOiBkYXRhc1sxXSxcclxuICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IGRhdGEuZGF0YXNldHNbMV0uYmFja2dyb3VuZENvbG9yLFxyXG4gICAgICAgIGJvcmRlckNvbG9yOiBmaWVsZC5jaGFydFR5cGUgPT0gJ0xpbmUgY2hhcnQnID8gJ3JnYmEoMCwyMDQsMTA2ICwxICknIDogJ3JnYigyNTUsIDI1NSwgMjU1KScsXHJcbiAgICAgICAgYm9yZGVyV2lkdGg6IGRhdGEuZGF0YXNldHNbMV0uYm9yZGVyV2lkdGgsXHJcbiAgICAgICAgZmlsbDogZmlsbCxcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIGxhYmVsOiBkYXRhLmRhdGFzZXRzWzJdLmxhYmVsLFxyXG4gICAgICAgIGRhdGE6IGRhdGFzWzJdLFxyXG4gICAgICAgIGJhY2tncm91bmRDb2xvcjogZGF0YS5kYXRhc2V0c1syXS5iYWNrZ3JvdW5kQ29sb3IsXHJcbiAgICAgICAgYm9yZGVyQ29sb3I6IGZpZWxkLmNoYXJ0VHlwZSA9PSAnTGluZSBjaGFydCcgPyAncmdiYSgwLDEyMCwyMTUgLDEgKScgOiAncmdiKDI1NSwgMjU1LCAyNTUpJyxcclxuICAgICAgICBib3JkZXJXaWR0aDogZGF0YS5kYXRhc2V0c1syXS5ib3JkZXJXaWR0aCxcclxuICAgICAgICBmaWxsOiBmaWxsLFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgbGFiZWw6IGRhdGEuZGF0YXNldHNbM10ubGFiZWwsXHJcbiAgICAgICAgZGF0YTogZGF0YXNbM10sXHJcbiAgICAgICAgYmFja2dyb3VuZENvbG9yOiBkYXRhLmRhdGFzZXRzWzNdLmJhY2tncm91bmRDb2xvcixcclxuICAgICAgICBib3JkZXJDb2xvcjogZmllbGQuY2hhcnRUeXBlID09ICdMaW5lIGNoYXJ0JyA/ICdyZ2JhKDIzMSw3Miw4NiAsMSApJyA6ICdyZ2IoMjU1LCAyNTUsIDI1NSknLFxyXG4gICAgICAgIGJvcmRlcldpZHRoOiBkYXRhLmRhdGFzZXRzWzNdLmJvcmRlcldpZHRoLFxyXG4gICAgICAgIGZpbGw6IGZpbGwsXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBsYWJlbDogZGF0YS5kYXRhc2V0c1s0XS5sYWJlbCxcclxuICAgICAgICBkYXRhOiBkYXRhc1s0XSxcclxuICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IGRhdGEuZGF0YXNldHNbNF0uYmFja2dyb3VuZENvbG9yLFxyXG4gICAgICAgIGJvcmRlckNvbG9yOiBmaWVsZC5jaGFydFR5cGUgPT0gJ0xpbmUgY2hhcnQnID8gJ3JnYmEoMTI2LDExNSw5NSAsMSApJyA6ICdyZ2IoMjU1LCAyNTUsIDI1NSknLFxyXG4gICAgICAgIGJvcmRlcldpZHRoOiBkYXRhLmRhdGFzZXRzWzRdLmJvcmRlcldpZHRoLFxyXG4gICAgICAgIGZpbGw6IGZpbGwsXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBsYWJlbDogZGF0YS5kYXRhc2V0c1s1XS5sYWJlbCxcclxuICAgICAgICBkYXRhOiBkYXRhc1s1XSxcclxuICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IGRhdGEuZGF0YXNldHNbNV0uYmFja2dyb3VuZENvbG9yLFxyXG4gICAgICAgIGJvcmRlckNvbG9yOiBmaWVsZC5jaGFydFR5cGUgPT0gJ0xpbmUgY2hhcnQnID8gJ3JnYmEoMTc3LDcwLDE5NCAsMSApJyA6ICdyZ2IoMjU1LCAyNTUsIDI1NSknLFxyXG4gICAgICAgIGJvcmRlcldpZHRoOiBkYXRhLmRhdGFzZXRzWzVdLmJvcmRlcldpZHRoLFxyXG4gICAgICAgIGZpbGw6IGZpbGwsXHJcbiAgICAgIH0sXHJcbiAgICBdO1xyXG4gICAgY29uc29sZS5sb2cobmV3RGF0YXNldHMpO1xyXG5cclxuICAgIGNvbnN0IGNoYXJ0VHlwZSA9IFtcclxuICAgICAgZmllbGQuY2hhcnRUeXBlID09ICdCYXIgY2hhcnQnID8gJ2JhcicgOiAnJyxcclxuICAgICAgZmllbGQuY2hhcnRUeXBlID09ICdSZXZlcnNlIGNoYXJ0JyA/ICdob3Jpem9udGFsQmFyJyA6ICcnLFxyXG4gICAgICBmaWVsZC5jaGFydFR5cGUgPT0gJ0xpbmUgY2hhcnQnID8gJ2xpbmUnIDogJycsXHJcbiAgICAgIGZpZWxkLmNoYXJ0VHlwZSA9PSAnUGllIGNoYXJ0JyA/ICdwaWUnIDogJycsXHJcbiAgICAgIGZpZWxkLmNoYXJ0VHlwZSA9PSAnRG91Z2hudXQgY2hhcnQnID8gJ2RvdWdobnV0JyA6ICcnLFxyXG4gICAgICBmaWVsZC5jaGFydFR5cGUgPT0gJ0FyZWEgY2hhcnQnID8gJ2xpbmUnIDogJycsXHJcbiAgICBdO1xyXG5cclxuICAgIHdpbmRvdy5pZCA9IG5ldyBDaGFydChteUNoYXJ0UmVmLCB7XHJcbiAgICAgIHR5cGU6IGNoYXJ0VHlwZS5maWx0ZXIoKHR5cGUpID0+IHR5cGUgIT09ICcnKSxcclxuICAgICAgZGF0YToge1xyXG4gICAgICAgIGxhYmVsczogZGF0YS5sYWJlbHMuZmlsdGVyKChsYWJlbCkgPT4gbGFiZWwgIT09ICcnKSxcclxuICAgICAgICBkYXRhc2V0czogbmV3RGF0YXNldHMuZmlsdGVyKChkYXRhc2V0KSA9PiBkYXRhc2V0LmxhYmVsICE9PSAnJyksXHJcbiAgICAgIH0sXHJcbiAgICAgIG9wdGlvbnM6IHtcclxuICAgICAgICBza2lwTnVsbDogdHJ1ZSxcclxuICAgICAgICByZXNwb25zaXZlOiB0cnVlLFxyXG4gICAgICAgIGxlZ2VuZDoge1xyXG4gICAgICAgICAgcG9zaXRpb246ICdib3R0b20nLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgLy8gZGVmYXVsdEZvbnRGYW1pbHk6IChDaGFydC5kZWZhdWx0cy5nbG9iYWwuZGVmYXVsdEZvbnRGYW1pbHkgPVxyXG4gICAgICAgIC8vICAgJ0NvbWZvcnRhYScpLFxyXG4gICAgICAgIHNjYWxlczoge1xyXG4gICAgICAgICAgeUF4ZXM6IFtcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgIHN0YWNrZWQ6IGZpZWxkLnN0YWNrZWQgPT0gdHJ1ZSA/IHRydWUgOiBmYWxzZSxcclxuICAgICAgICAgICAgICB0aWNrczoge1xyXG4gICAgICAgICAgICAgICAgYmVnaW5BdFplcm86IHRydWUsXHJcbiAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgIF0sXHJcbiAgICAgICAgICB4QXhlczogW1xyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgc3RhY2tlZDogZmllbGQuc3RhY2tlZCA9PSB0cnVlID8gdHJ1ZSA6IGZhbHNlLFxyXG4gICAgICAgICAgICAgIHRpY2tzOiB7XHJcbiAgICAgICAgICAgICAgICBiZWdpbkF0WmVybzogdHJ1ZSxcclxuICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgXSxcclxuICAgICAgICB9LFxyXG4gICAgICB9LFxyXG4gICAgfSk7XHJcbiAgICAvLyBhZGRDaGFydChjaGFydCwgY3VycmVudEluZGV4LCBpbmRleCwgc2VsZWN0ZWRTZWN0aW9uKTtcclxuICB9LCBbZGF0YS5sYWJlbHMsIGRhdGEuZGF0YXNldHMsIGRhdGFdKTtcclxuXHJcbiAgY29uc3QgW2xhYmVsMSwgc2V0TGFiZWwxXSA9IHVzZVN0YXRlKCcnKTtcclxuICBjb25zdCBbbGFiZWwyLCBzZXRMYWJlbDJdID0gdXNlU3RhdGUoJycpO1xyXG4gIGNvbnN0IFtsYWJlbDMsIHNldExhYmVsM10gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgY29uc3QgW2xhYmVsNCwgc2V0TGFiZWw0XSA9IHVzZVN0YXRlKCcnKTtcclxuICBjb25zdCBbbGFiZWw1LCBzZXRMYWJlbDVdID0gdXNlU3RhdGUoJycpO1xyXG4gIGNvbnN0IFtsYWJlbDYsIHNldExhYmVsNl0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgY29uc3QgW2xhYmVsNywgc2V0TGFiZWw3XSA9IHVzZVN0YXRlKCcnKTtcclxuICBjb25zdCBbbGFiZWw4LCBzZXRMYWJlbDhdID0gdXNlU3RhdGUoJycpO1xyXG4gIGNvbnN0IFtsYWJlbDksIHNldExhYmVsOV0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgY29uc3QgW2xhYmVsMTAsIHNldExhYmVsMTBdID0gdXNlU3RhdGUoJycpO1xyXG4gIGNvbnN0IFtsYWJlbDExLCBzZXRMYWJlbDExXSA9IHVzZVN0YXRlKCcnKTtcclxuICBjb25zdCBbbGFiZWwxMiwgc2V0TGFiZWwxMl0gPSB1c2VTdGF0ZSgnJyk7XHJcblxyXG4gIGNvbnN0IG9uTGFiZWxDaGFuZ2UxID0gKGxhYmVsKSA9PiB7XHJcbiAgICBzZXRMYWJlbDEobGFiZWwpO1xyXG4gICAgY29uc3QgZGF0YSA9IHtcclxuICAgICAgbGFiZWxPbmU6ICd0cnVlJyxcclxuICAgICAgbGFiZWwxOiBsYWJlbCxcclxuICAgICAgaW5kZXgsXHJcbiAgICAgIHNlbFNlY3Rpb246IHNlbGVjdGVkU2VjdGlvbixcclxuICAgIH07XHJcbiAgICBsYWJlbFVwZGF0ZShkYXRhKTtcclxuICB9O1xyXG4gIGNvbnN0IG9uTGFiZWxDaGFuZ2UyID0gKGxhYmVsKSA9PiB7XHJcbiAgICBzZXRMYWJlbDIobGFiZWwpO1xyXG4gICAgY29uc3QgZGF0YSA9IHtcclxuICAgICAgbGFiZWwyMjogJ3RydWUnLFxyXG4gICAgICBsYWJlbDI6IGxhYmVsLFxyXG4gICAgICBpbmRleCxcclxuICAgICAgc2VsU2VjdGlvbjogc2VsZWN0ZWRTZWN0aW9uLFxyXG4gICAgfTtcclxuICAgIGxhYmVsVXBkYXRlKGRhdGEpO1xyXG4gIH07XHJcbiAgY29uc3Qgb25MYWJlbENoYW5nZTMgPSAobGFiZWwpID0+IHtcclxuICAgIHNldExhYmVsMyhsYWJlbCk7XHJcbiAgICBjb25zdCBkYXRhID0ge1xyXG4gICAgICBsYWJlbDMzOiAndHJ1ZScsXHJcbiAgICAgIGxhYmVsMzogbGFiZWwsXHJcbiAgICAgIGluZGV4LFxyXG4gICAgICBzZWxTZWN0aW9uOiBzZWxlY3RlZFNlY3Rpb24sXHJcbiAgICB9O1xyXG4gICAgbGFiZWxVcGRhdGUoZGF0YSk7XHJcbiAgfTtcclxuICBjb25zdCBvbkxhYmVsQ2hhbmdlNCA9IChsYWJlbCkgPT4ge1xyXG4gICAgc2V0TGFiZWw0KGxhYmVsKTtcclxuICAgIGNvbnN0IGRhdGEgPSB7XHJcbiAgICAgIGxhYmVsNDQ6ICd0cnVlJyxcclxuICAgICAgbGFiZWw0OiBsYWJlbCxcclxuICAgICAgaW5kZXgsXHJcbiAgICAgIHNlbFNlY3Rpb246IHNlbGVjdGVkU2VjdGlvbixcclxuICAgIH07XHJcbiAgICBsYWJlbFVwZGF0ZShkYXRhKTtcclxuICB9O1xyXG4gIGNvbnN0IG9uTGFiZWxDaGFuZ2U1ID0gKGxhYmVsKSA9PiB7XHJcbiAgICBzZXRMYWJlbDUobGFiZWwpO1xyXG4gICAgY29uc3QgZGF0YSA9IHtcclxuICAgICAgbGFiZWw1NTogJ3RydWUnLFxyXG4gICAgICBsYWJlbDU6IGxhYmVsLFxyXG4gICAgICBpbmRleCxcclxuICAgICAgc2VsU2VjdGlvbjogc2VsZWN0ZWRTZWN0aW9uLFxyXG4gICAgfTtcclxuICAgIGxhYmVsVXBkYXRlKGRhdGEpO1xyXG4gIH07XHJcbiAgY29uc3Qgb25MYWJlbENoYW5nZTYgPSAobGFiZWwpID0+IHtcclxuICAgIHNldExhYmVsNihsYWJlbCk7XHJcbiAgICBjb25zdCBkYXRhID0ge1xyXG4gICAgICBsYWJlbDY2OiAndHJ1ZScsXHJcbiAgICAgIGxhYmVsNjogbGFiZWwsXHJcbiAgICAgIGluZGV4LFxyXG4gICAgICBzZWxTZWN0aW9uOiBzZWxlY3RlZFNlY3Rpb24sXHJcbiAgICB9O1xyXG4gICAgbGFiZWxVcGRhdGUoZGF0YSk7XHJcbiAgfTtcclxuICBjb25zdCBvbkxhYmVsQ2hhbmdlNyA9IChsYWJlbCkgPT4ge1xyXG4gICAgc2V0TGFiZWw3KGxhYmVsKTtcclxuICAgIGNvbnN0IGRhdGEgPSB7XHJcbiAgICAgIGxhYmVsNzc6ICd0cnVlJyxcclxuICAgICAgbGFiZWw3OiBsYWJlbCxcclxuICAgICAgaW5kZXgsXHJcbiAgICAgIHNlbFNlY3Rpb246IHNlbGVjdGVkU2VjdGlvbixcclxuICAgIH07XHJcbiAgICBsYWJlbFVwZGF0ZShkYXRhKTtcclxuICB9O1xyXG4gIGNvbnN0IG9uTGFiZWxDaGFuZ2U4ID0gKGxhYmVsKSA9PiB7XHJcbiAgICBzZXRMYWJlbDgobGFiZWwpO1xyXG4gICAgY29uc3QgZGF0YSA9IHtcclxuICAgICAgbGFiZWw4ODogJ3RydWUnLFxyXG4gICAgICBsYWJlbDg6IGxhYmVsLFxyXG4gICAgICBpbmRleCxcclxuICAgICAgc2VsU2VjdGlvbjogc2VsZWN0ZWRTZWN0aW9uLFxyXG4gICAgfTtcclxuICAgIGxhYmVsVXBkYXRlKGRhdGEpO1xyXG4gIH07XHJcbiAgY29uc3Qgb25MYWJlbENoYW5nZTkgPSAobGFiZWwpID0+IHtcclxuICAgIHNldExhYmVsOShsYWJlbCk7XHJcbiAgICBjb25zdCBkYXRhID0ge1xyXG4gICAgICBsYWJlbDk5OiAndHJ1ZScsXHJcbiAgICAgIGxhYmVsOTogbGFiZWwsXHJcbiAgICAgIGluZGV4LFxyXG4gICAgICBzZWxTZWN0aW9uOiBzZWxlY3RlZFNlY3Rpb24sXHJcbiAgICB9O1xyXG4gICAgbGFiZWxVcGRhdGUoZGF0YSk7XHJcbiAgfTtcclxuICBjb25zdCBvbkxhYmVsQ2hhbmdlMTAgPSAobGFiZWwpID0+IHtcclxuICAgIHNldExhYmVsMTAobGFiZWwpO1xyXG4gICAgY29uc3QgZGF0YSA9IHtcclxuICAgICAgbGFiZWwxMDA6ICd0cnVlJyxcclxuICAgICAgbGFiZWwxMDogbGFiZWwsXHJcbiAgICAgIGluZGV4LFxyXG4gICAgICBzZWxTZWN0aW9uOiBzZWxlY3RlZFNlY3Rpb24sXHJcbiAgICB9O1xyXG4gICAgbGFiZWxVcGRhdGUoZGF0YSk7XHJcbiAgfTtcclxuICBjb25zdCBvbkxhYmVsQ2hhbmdlMTEgPSAobGFiZWwpID0+IHtcclxuICAgIHNldExhYmVsMTEobGFiZWwpO1xyXG4gICAgY29uc3QgZGF0YSA9IHtcclxuICAgICAgbGFiZWwxMTE6ICd0cnVlJyxcclxuICAgICAgbGFiZWwxMTogbGFiZWwsXHJcbiAgICAgIGluZGV4LFxyXG4gICAgICBzZWxTZWN0aW9uOiBzZWxlY3RlZFNlY3Rpb24sXHJcbiAgICB9O1xyXG4gICAgbGFiZWxVcGRhdGUoZGF0YSk7XHJcbiAgfTtcclxuICBjb25zdCBvbkxhYmVsQ2hhbmdlMTIgPSAobGFiZWwpID0+IHtcclxuICAgIHNldExhYmVsMTIobGFiZWwpO1xyXG4gICAgY29uc3QgZGF0YSA9IHtcclxuICAgICAgbGFiZWwxMjA6ICd0cnVlJyxcclxuICAgICAgbGFiZWwxMjogbGFiZWwsXHJcbiAgICAgIGluZGV4LFxyXG4gICAgICBzZWxTZWN0aW9uOiBzZWxlY3RlZFNlY3Rpb24sXHJcbiAgICB9O1xyXG4gICAgbGFiZWxVcGRhdGUoZGF0YSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc29sZS5sb2coZmllbGQpO1xyXG5cclxuICAvLyBEQVRBU0VUU1xyXG4gIGNvbnN0IFtkYXRhc2V0MUxhYmVsLCBzZXREYXRhc2V0MUxhYmVsXSA9IHVzZVN0YXRlKCcnKTtcclxuICBjb25zdCBbZGF0YXNldDJMYWJlbCwgc2V0RGF0YXNldDJMYWJlbF0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgY29uc3QgW2RhdGFzZXQzTGFiZWwsIHNldERhdGFzZXQzTGFiZWxdID0gdXNlU3RhdGUoJycpO1xyXG4gIGNvbnN0IFtkYXRhc2V0NExhYmVsLCBzZXREYXRhc2V0NExhYmVsXSA9IHVzZVN0YXRlKCcnKTtcclxuICBjb25zdCBbZGF0YXNldDVMYWJlbCwgc2V0RGF0YXNldDVMYWJlbF0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgY29uc3QgW2RhdGFzZXQ2TGFiZWwsIHNldERhdGFzZXQ2TGFiZWxdID0gdXNlU3RhdGUoJycpO1xyXG5cclxuICAvLyBEQVRBU0VUIDEgLS0tIFNUQVJUIC0tLVxyXG4gIGNvbnN0IFtkYXRhc2V0MVZhbHVlMSwgc2V0RGF0YXNldDFWYWx1ZTFdID0gdXNlU3RhdGUoJycpO1xyXG4gIGNvbnN0IFtkYXRhc2V0MVZhbHVlMiwgc2V0RGF0YXNldDFWYWx1ZTJdID0gdXNlU3RhdGUoJycpO1xyXG4gIGNvbnN0IFtkYXRhc2V0MVZhbHVlMywgc2V0RGF0YXNldDFWYWx1ZTNdID0gdXNlU3RhdGUoJycpO1xyXG4gIGNvbnN0IFtkYXRhc2V0MVZhbHVlNCwgc2V0RGF0YXNldDFWYWx1ZTRdID0gdXNlU3RhdGUoJycpO1xyXG4gIGNvbnN0IFtkYXRhc2V0MVZhbHVlNSwgc2V0RGF0YXNldDFWYWx1ZTVdID0gdXNlU3RhdGUoJycpO1xyXG4gIGNvbnN0IFtkYXRhc2V0MVZhbHVlNiwgc2V0RGF0YXNldDFWYWx1ZTZdID0gdXNlU3RhdGUoJycpO1xyXG4gIGNvbnN0IFtkYXRhc2V0MVZhbHVlNywgc2V0RGF0YXNldDFWYWx1ZTddID0gdXNlU3RhdGUoJycpO1xyXG4gIGNvbnN0IFtkYXRhc2V0MVZhbHVlOCwgc2V0RGF0YXNldDFWYWx1ZThdID0gdXNlU3RhdGUoJycpO1xyXG4gIGNvbnN0IFtkYXRhc2V0MVZhbHVlOSwgc2V0RGF0YXNldDFWYWx1ZTldID0gdXNlU3RhdGUoJycpO1xyXG4gIGNvbnN0IFtkYXRhc2V0MVZhbHVlMTAsIHNldERhdGFzZXQxVmFsdWUxMF0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgY29uc3QgW2RhdGFzZXQxVmFsdWUxMSwgc2V0RGF0YXNldDFWYWx1ZTExXSA9IHVzZVN0YXRlKCcnKTtcclxuICBjb25zdCBbZGF0YXNldDFWYWx1ZTEyLCBzZXREYXRhc2V0MVZhbHVlMTJdID0gdXNlU3RhdGUoJycpO1xyXG5cclxuICBjb25zdCBvbkRhdGFzZXQxVmFsdWUxQ2hhbmdlID0gKGRhdGFzZXRWYWx1ZSkgPT4ge1xyXG4gICAgc2V0RGF0YXNldDFWYWx1ZTEoZGF0YXNldFZhbHVlKTtcclxuICAgIGNvbnN0IGRhdGEgPSB7XHJcbiAgICAgIGRhdGFzZXQxVmFsdWVPbmU6ICd0cnVlJyxcclxuICAgICAgZGF0YXNldDFWYWx1ZTE6IGRhdGFzZXRWYWx1ZSxcclxuICAgICAgaW5kZXgsXHJcbiAgICAgIHNlbFNlY3Rpb246IHNlbGVjdGVkU2VjdGlvbixcclxuICAgIH07XHJcbiAgICBkYXRhc2V0MVVwZGF0ZShkYXRhKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBvbkRhdGFzZXQxVmFsdWUyQ2hhbmdlID0gKGRhdGFzZXRWYWx1ZSkgPT4ge1xyXG4gICAgc2V0RGF0YXNldDFWYWx1ZTIoZGF0YXNldFZhbHVlKTtcclxuICAgIGNvbnN0IGRhdGEgPSB7XHJcbiAgICAgIGRhdGFzZXQxVmFsdWUyMjogJ3RydWUnLFxyXG4gICAgICBkYXRhc2V0MVZhbHVlMjogZGF0YXNldFZhbHVlLFxyXG4gICAgICBpbmRleCxcclxuICAgICAgc2VsU2VjdGlvbjogc2VsZWN0ZWRTZWN0aW9uLFxyXG4gICAgfTtcclxuICAgIGRhdGFzZXQxVXBkYXRlKGRhdGEpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IG9uRGF0YXNldDFWYWx1ZTNDaGFuZ2UgPSAoZGF0YXNldFZhbHVlKSA9PiB7XHJcbiAgICBzZXREYXRhc2V0MVZhbHVlMyhkYXRhc2V0VmFsdWUpO1xyXG4gICAgY29uc3QgZGF0YSA9IHtcclxuICAgICAgZGF0YXNldDFWYWx1ZTMzOiAndHJ1ZScsXHJcbiAgICAgIGRhdGFzZXQxVmFsdWUzOiBkYXRhc2V0VmFsdWUsXHJcbiAgICAgIGluZGV4LFxyXG4gICAgICBzZWxTZWN0aW9uOiBzZWxlY3RlZFNlY3Rpb24sXHJcbiAgICB9O1xyXG4gICAgZGF0YXNldDFVcGRhdGUoZGF0YSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3Qgb25EYXRhc2V0MVZhbHVlNENoYW5nZSA9IChkYXRhc2V0VmFsdWUpID0+IHtcclxuICAgIHNldERhdGFzZXQxVmFsdWU0KGRhdGFzZXRWYWx1ZSk7XHJcbiAgICBjb25zdCBkYXRhID0ge1xyXG4gICAgICBkYXRhc2V0MVZhbHVlNDQ6ICd0cnVlJyxcclxuICAgICAgZGF0YXNldDFWYWx1ZTQ6IGRhdGFzZXRWYWx1ZSxcclxuICAgICAgaW5kZXgsXHJcbiAgICAgIHNlbFNlY3Rpb246IHNlbGVjdGVkU2VjdGlvbixcclxuICAgIH07XHJcbiAgICBkYXRhc2V0MVVwZGF0ZShkYXRhKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBvbkRhdGFzZXQxVmFsdWU1Q2hhbmdlID0gKGRhdGFzZXRWYWx1ZSkgPT4ge1xyXG4gICAgc2V0RGF0YXNldDFWYWx1ZTUoZGF0YXNldFZhbHVlKTtcclxuICAgIGNvbnN0IGRhdGEgPSB7XHJcbiAgICAgIGRhdGFzZXQxVmFsdWU1NTogJ3RydWUnLFxyXG4gICAgICBkYXRhc2V0MVZhbHVlNTogZGF0YXNldFZhbHVlLFxyXG4gICAgICBpbmRleCxcclxuICAgICAgc2VsU2VjdGlvbjogc2VsZWN0ZWRTZWN0aW9uLFxyXG4gICAgfTtcclxuICAgIGRhdGFzZXQxVXBkYXRlKGRhdGEpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IG9uRGF0YXNldDFWYWx1ZTZDaGFuZ2UgPSAoZGF0YXNldFZhbHVlKSA9PiB7XHJcbiAgICBzZXREYXRhc2V0MVZhbHVlNihkYXRhc2V0VmFsdWUpO1xyXG4gICAgY29uc3QgZGF0YSA9IHtcclxuICAgICAgZGF0YXNldDFWYWx1ZTY2OiAndHJ1ZScsXHJcbiAgICAgIGRhdGFzZXQxVmFsdWU2OiBkYXRhc2V0VmFsdWUsXHJcbiAgICAgIGluZGV4LFxyXG4gICAgICBzZWxTZWN0aW9uOiBzZWxlY3RlZFNlY3Rpb24sXHJcbiAgICB9O1xyXG4gICAgZGF0YXNldDFVcGRhdGUoZGF0YSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3Qgb25EYXRhc2V0MVZhbHVlN0NoYW5nZSA9IChkYXRhc2V0VmFsdWUpID0+IHtcclxuICAgIHNldERhdGFzZXQxVmFsdWU3KGRhdGFzZXRWYWx1ZSk7XHJcbiAgICBjb25zdCBkYXRhID0ge1xyXG4gICAgICBkYXRhc2V0MVZhbHVlNzc6ICd0cnVlJyxcclxuICAgICAgZGF0YXNldDFWYWx1ZTc6IGRhdGFzZXRWYWx1ZSxcclxuICAgICAgaW5kZXgsXHJcbiAgICAgIHNlbFNlY3Rpb246IHNlbGVjdGVkU2VjdGlvbixcclxuICAgIH07XHJcbiAgICBkYXRhc2V0MVVwZGF0ZShkYXRhKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBvbkRhdGFzZXQxVmFsdWU4Q2hhbmdlID0gKGRhdGFzZXRWYWx1ZSkgPT4ge1xyXG4gICAgc2V0RGF0YXNldDFWYWx1ZTgoZGF0YXNldFZhbHVlKTtcclxuICAgIGNvbnN0IGRhdGEgPSB7XHJcbiAgICAgIGRhdGFzZXQxVmFsdWU4ODogJ3RydWUnLFxyXG4gICAgICBkYXRhc2V0MVZhbHVlODogZGF0YXNldFZhbHVlLFxyXG4gICAgICBpbmRleCxcclxuICAgICAgc2VsU2VjdGlvbjogc2VsZWN0ZWRTZWN0aW9uLFxyXG4gICAgfTtcclxuICAgIGRhdGFzZXQxVXBkYXRlKGRhdGEpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IG9uRGF0YXNldDFWYWx1ZTlDaGFuZ2UgPSAoZGF0YXNldFZhbHVlKSA9PiB7XHJcbiAgICBzZXREYXRhc2V0MVZhbHVlOShkYXRhc2V0VmFsdWUpO1xyXG4gICAgY29uc3QgZGF0YSA9IHtcclxuICAgICAgZGF0YXNldDFWYWx1ZTk5OiAndHJ1ZScsXHJcbiAgICAgIGRhdGFzZXQxVmFsdWU5OiBkYXRhc2V0VmFsdWUsXHJcbiAgICAgIGluZGV4LFxyXG4gICAgICBzZWxTZWN0aW9uOiBzZWxlY3RlZFNlY3Rpb24sXHJcbiAgICB9O1xyXG4gICAgZGF0YXNldDFVcGRhdGUoZGF0YSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3Qgb25EYXRhc2V0MVZhbHVlMTBDaGFuZ2UgPSAoZGF0YXNldFZhbHVlKSA9PiB7XHJcbiAgICBzZXREYXRhc2V0MVZhbHVlMTAoZGF0YXNldFZhbHVlKTtcclxuICAgIGNvbnN0IGRhdGEgPSB7XHJcbiAgICAgIGRhdGFzZXQxVmFsdWUxMDA6ICd0cnVlJyxcclxuICAgICAgZGF0YXNldDFWYWx1ZTEwOiBkYXRhc2V0VmFsdWUsXHJcbiAgICAgIGluZGV4LFxyXG4gICAgICBzZWxTZWN0aW9uOiBzZWxlY3RlZFNlY3Rpb24sXHJcbiAgICB9O1xyXG4gICAgZGF0YXNldDFVcGRhdGUoZGF0YSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3Qgb25EYXRhc2V0MVZhbHVlMTFDaGFuZ2UgPSAoZGF0YXNldFZhbHVlKSA9PiB7XHJcbiAgICBzZXREYXRhc2V0MVZhbHVlMTEoZGF0YXNldFZhbHVlKTtcclxuICAgIGNvbnN0IGRhdGEgPSB7XHJcbiAgICAgIGRhdGFzZXQxVmFsdWUxMTE6ICd0cnVlJyxcclxuICAgICAgZGF0YXNldDFWYWx1ZTExOiBkYXRhc2V0VmFsdWUsXHJcbiAgICAgIGluZGV4LFxyXG4gICAgICBzZWxTZWN0aW9uOiBzZWxlY3RlZFNlY3Rpb24sXHJcbiAgICB9O1xyXG4gICAgZGF0YXNldDFVcGRhdGUoZGF0YSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3Qgb25EYXRhc2V0MVZhbHVlMTJDaGFuZ2UgPSAoZGF0YXNldFZhbHVlKSA9PiB7XHJcbiAgICBzZXREYXRhc2V0MVZhbHVlMTIoZGF0YXNldFZhbHVlKTtcclxuICAgIGNvbnN0IGRhdGEgPSB7XHJcbiAgICAgIGRhdGFzZXQxVmFsdWUxMjA6ICd0cnVlJyxcclxuICAgICAgZGF0YXNldDFWYWx1ZTEyOiBkYXRhc2V0VmFsdWUsXHJcbiAgICAgIGluZGV4LFxyXG4gICAgICBzZWxTZWN0aW9uOiBzZWxlY3RlZFNlY3Rpb24sXHJcbiAgICB9O1xyXG4gICAgZGF0YXNldDFVcGRhdGUoZGF0YSk7XHJcbiAgfTtcclxuXHJcbiAgLy8gREFUQVNFVCAxIC0tLSBFTkQgLS0tXHJcbiAgLy8gREFUQVNFVCAyIC0tLSBTVEFSVCAtLS1cclxuICBjb25zdCBbZGF0YXNldDJWYWx1ZTEsIHNldERhdGFzZXQyVmFsdWUxXSA9IHVzZVN0YXRlKCcnKTtcclxuICBjb25zdCBbZGF0YXNldDJWYWx1ZTIsIHNldERhdGFzZXQyVmFsdWUyXSA9IHVzZVN0YXRlKCcnKTtcclxuICBjb25zdCBbZGF0YXNldDJWYWx1ZTMsIHNldERhdGFzZXQyVmFsdWUzXSA9IHVzZVN0YXRlKCcnKTtcclxuICBjb25zdCBbZGF0YXNldDJWYWx1ZTQsIHNldERhdGFzZXQyVmFsdWU0XSA9IHVzZVN0YXRlKCcnKTtcclxuICBjb25zdCBbZGF0YXNldDJWYWx1ZTUsIHNldERhdGFzZXQyVmFsdWU1XSA9IHVzZVN0YXRlKCcnKTtcclxuICBjb25zdCBbZGF0YXNldDJWYWx1ZTYsIHNldERhdGFzZXQyVmFsdWU2XSA9IHVzZVN0YXRlKCcnKTtcclxuICBjb25zdCBbZGF0YXNldDJWYWx1ZTcsIHNldERhdGFzZXQyVmFsdWU3XSA9IHVzZVN0YXRlKCcnKTtcclxuICBjb25zdCBbZGF0YXNldDJWYWx1ZTgsIHNldERhdGFzZXQyVmFsdWU4XSA9IHVzZVN0YXRlKCcnKTtcclxuICBjb25zdCBbZGF0YXNldDJWYWx1ZTksIHNldERhdGFzZXQyVmFsdWU5XSA9IHVzZVN0YXRlKCcnKTtcclxuICBjb25zdCBbZGF0YXNldDJWYWx1ZTEwLCBzZXREYXRhc2V0MlZhbHVlMTBdID0gdXNlU3RhdGUoJycpO1xyXG4gIGNvbnN0IFtkYXRhc2V0MlZhbHVlMTEsIHNldERhdGFzZXQyVmFsdWUxMV0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgY29uc3QgW2RhdGFzZXQyVmFsdWUxMiwgc2V0RGF0YXNldDJWYWx1ZTEyXSA9IHVzZVN0YXRlKCcnKTtcclxuXHJcbiAgY29uc3Qgb25EYXRhc2V0MlZhbHVlMUNoYW5nZSA9IChkYXRhc2V0VmFsdWUpID0+IHtcclxuICAgIHNldERhdGFzZXQyVmFsdWUxKGRhdGFzZXRWYWx1ZSk7XHJcbiAgICBjb25zdCBkYXRhID0ge1xyXG4gICAgICBkYXRhc2V0MlZhbHVlT25lOiAndHJ1ZScsXHJcbiAgICAgIGRhdGFzZXQyVmFsdWUxOiBkYXRhc2V0VmFsdWUsXHJcbiAgICAgIGluZGV4LFxyXG4gICAgICBzZWxTZWN0aW9uOiBzZWxlY3RlZFNlY3Rpb24sXHJcbiAgICB9O1xyXG4gICAgZGF0YXNldDJVcGRhdGUoZGF0YSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3Qgb25EYXRhc2V0MlZhbHVlMkNoYW5nZSA9IChkYXRhc2V0VmFsdWUpID0+IHtcclxuICAgIHNldERhdGFzZXQyVmFsdWUyKGRhdGFzZXRWYWx1ZSk7XHJcbiAgICBjb25zdCBkYXRhID0ge1xyXG4gICAgICBkYXRhc2V0MlZhbHVlMjI6ICd0cnVlJyxcclxuICAgICAgZGF0YXNldDJWYWx1ZTI6IGRhdGFzZXRWYWx1ZSxcclxuICAgICAgaW5kZXgsXHJcbiAgICAgIHNlbFNlY3Rpb246IHNlbGVjdGVkU2VjdGlvbixcclxuICAgIH07XHJcbiAgICBkYXRhc2V0MlVwZGF0ZShkYXRhKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBvbkRhdGFzZXQyVmFsdWUzQ2hhbmdlID0gKGRhdGFzZXRWYWx1ZSkgPT4ge1xyXG4gICAgc2V0RGF0YXNldDJWYWx1ZTMoZGF0YXNldFZhbHVlKTtcclxuICAgIGNvbnN0IGRhdGEgPSB7XHJcbiAgICAgIGRhdGFzZXQyVmFsdWUzMzogJ3RydWUnLFxyXG4gICAgICBkYXRhc2V0MlZhbHVlMzogZGF0YXNldFZhbHVlLFxyXG4gICAgICBpbmRleCxcclxuICAgICAgc2VsU2VjdGlvbjogc2VsZWN0ZWRTZWN0aW9uLFxyXG4gICAgfTtcclxuICAgIGRhdGFzZXQyVXBkYXRlKGRhdGEpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IG9uRGF0YXNldDJWYWx1ZTRDaGFuZ2UgPSAoZGF0YXNldFZhbHVlKSA9PiB7XHJcbiAgICBzZXREYXRhc2V0MlZhbHVlNChkYXRhc2V0VmFsdWUpO1xyXG4gICAgY29uc3QgZGF0YSA9IHtcclxuICAgICAgZGF0YXNldDJWYWx1ZTQ0OiAndHJ1ZScsXHJcbiAgICAgIGRhdGFzZXQyVmFsdWU0OiBkYXRhc2V0VmFsdWUsXHJcbiAgICAgIGluZGV4LFxyXG4gICAgICBzZWxTZWN0aW9uOiBzZWxlY3RlZFNlY3Rpb24sXHJcbiAgICB9O1xyXG4gICAgZGF0YXNldDJVcGRhdGUoZGF0YSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3Qgb25EYXRhc2V0MlZhbHVlNUNoYW5nZSA9IChkYXRhc2V0VmFsdWUpID0+IHtcclxuICAgIHNldERhdGFzZXQyVmFsdWU1KGRhdGFzZXRWYWx1ZSk7XHJcbiAgICBjb25zdCBkYXRhID0ge1xyXG4gICAgICBkYXRhc2V0MlZhbHVlNTU6ICd0cnVlJyxcclxuICAgICAgZGF0YXNldDJWYWx1ZTU6IGRhdGFzZXRWYWx1ZSxcclxuICAgICAgaW5kZXgsXHJcbiAgICAgIHNlbFNlY3Rpb246IHNlbGVjdGVkU2VjdGlvbixcclxuICAgIH07XHJcbiAgICBkYXRhc2V0MlVwZGF0ZShkYXRhKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBvbkRhdGFzZXQyVmFsdWU2Q2hhbmdlID0gKGRhdGFzZXRWYWx1ZSkgPT4ge1xyXG4gICAgc2V0RGF0YXNldDJWYWx1ZTYoZGF0YXNldFZhbHVlKTtcclxuICAgIGNvbnN0IGRhdGEgPSB7XHJcbiAgICAgIGRhdGFzZXQyVmFsdWU2NjogJ3RydWUnLFxyXG4gICAgICBkYXRhc2V0MlZhbHVlNjogZGF0YXNldFZhbHVlLFxyXG4gICAgICBpbmRleCxcclxuICAgICAgc2VsU2VjdGlvbjogc2VsZWN0ZWRTZWN0aW9uLFxyXG4gICAgfTtcclxuICAgIGRhdGFzZXQyVXBkYXRlKGRhdGEpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IG9uRGF0YXNldDJWYWx1ZTdDaGFuZ2UgPSAoZGF0YXNldFZhbHVlKSA9PiB7XHJcbiAgICBzZXREYXRhc2V0MlZhbHVlNyhkYXRhc2V0VmFsdWUpO1xyXG4gICAgY29uc3QgZGF0YSA9IHtcclxuICAgICAgZGF0YXNldDJWYWx1ZTc3OiAndHJ1ZScsXHJcbiAgICAgIGRhdGFzZXQyVmFsdWU3OiBkYXRhc2V0VmFsdWUsXHJcbiAgICAgIGluZGV4LFxyXG4gICAgICBzZWxTZWN0aW9uOiBzZWxlY3RlZFNlY3Rpb24sXHJcbiAgICB9O1xyXG4gICAgZGF0YXNldDJVcGRhdGUoZGF0YSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3Qgb25EYXRhc2V0MlZhbHVlOENoYW5nZSA9IChkYXRhc2V0VmFsdWUpID0+IHtcclxuICAgIHNldERhdGFzZXQyVmFsdWU4KGRhdGFzZXRWYWx1ZSk7XHJcbiAgICBjb25zdCBkYXRhID0ge1xyXG4gICAgICBkYXRhc2V0MlZhbHVlODg6ICd0cnVlJyxcclxuICAgICAgZGF0YXNldDJWYWx1ZTg6IGRhdGFzZXRWYWx1ZSxcclxuICAgICAgaW5kZXgsXHJcbiAgICAgIHNlbFNlY3Rpb246IHNlbGVjdGVkU2VjdGlvbixcclxuICAgIH07XHJcbiAgICBkYXRhc2V0MlVwZGF0ZShkYXRhKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBvbkRhdGFzZXQyVmFsdWU5Q2hhbmdlID0gKGRhdGFzZXRWYWx1ZSkgPT4ge1xyXG4gICAgc2V0RGF0YXNldDJWYWx1ZTkoZGF0YXNldFZhbHVlKTtcclxuICAgIGNvbnN0IGRhdGEgPSB7XHJcbiAgICAgIGRhdGFzZXQyVmFsdWU5OTogJ3RydWUnLFxyXG4gICAgICBkYXRhc2V0MlZhbHVlOTogZGF0YXNldFZhbHVlLFxyXG4gICAgICBpbmRleCxcclxuICAgICAgc2VsU2VjdGlvbjogc2VsZWN0ZWRTZWN0aW9uLFxyXG4gICAgfTtcclxuICAgIGRhdGFzZXQyVXBkYXRlKGRhdGEpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IG9uRGF0YXNldDJWYWx1ZTEwQ2hhbmdlID0gKGRhdGFzZXRWYWx1ZSkgPT4ge1xyXG4gICAgc2V0RGF0YXNldDJWYWx1ZTEwKGRhdGFzZXRWYWx1ZSk7XHJcbiAgICBjb25zdCBkYXRhID0ge1xyXG4gICAgICBkYXRhc2V0MlZhbHVlMTAwOiAndHJ1ZScsXHJcbiAgICAgIGRhdGFzZXQyVmFsdWUxMDogZGF0YXNldFZhbHVlLFxyXG4gICAgICBpbmRleCxcclxuICAgICAgc2VsU2VjdGlvbjogc2VsZWN0ZWRTZWN0aW9uLFxyXG4gICAgfTtcclxuICAgIGRhdGFzZXQyVXBkYXRlKGRhdGEpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IG9uRGF0YXNldDJWYWx1ZTExQ2hhbmdlID0gKGRhdGFzZXRWYWx1ZSkgPT4ge1xyXG4gICAgc2V0RGF0YXNldDJWYWx1ZTExKGRhdGFzZXRWYWx1ZSk7XHJcbiAgICBjb25zdCBkYXRhID0ge1xyXG4gICAgICBkYXRhc2V0MlZhbHVlMTExOiAndHJ1ZScsXHJcbiAgICAgIGRhdGFzZXQyVmFsdWUxMTogZGF0YXNldFZhbHVlLFxyXG4gICAgICBpbmRleCxcclxuICAgICAgc2VsU2VjdGlvbjogc2VsZWN0ZWRTZWN0aW9uLFxyXG4gICAgfTtcclxuICAgIGRhdGFzZXQyVXBkYXRlKGRhdGEpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IG9uRGF0YXNldDJWYWx1ZTEyQ2hhbmdlID0gKGRhdGFzZXRWYWx1ZSkgPT4ge1xyXG4gICAgc2V0RGF0YXNldDJWYWx1ZTEyKGRhdGFzZXRWYWx1ZSk7XHJcbiAgICBjb25zdCBkYXRhID0ge1xyXG4gICAgICBkYXRhc2V0MlZhbHVlMTIwOiAndHJ1ZScsXHJcbiAgICAgIGRhdGFzZXQyVmFsdWUxMjogZGF0YXNldFZhbHVlLFxyXG4gICAgICBpbmRleCxcclxuICAgICAgc2VsU2VjdGlvbjogc2VsZWN0ZWRTZWN0aW9uLFxyXG4gICAgfTtcclxuICAgIGRhdGFzZXQyVXBkYXRlKGRhdGEpO1xyXG4gIH07XHJcbiAgLy8gREFUQVNFVCAyIC0tLSBFTkQgLS0tXHJcbiAgLy8gREFUQVNFVCAzIC0tLSBTVEFSVCAtLS1cclxuICBjb25zdCBbZGF0YXNldDNWYWx1ZTEsIHNldERhdGFzZXQzVmFsdWUxXSA9IHVzZVN0YXRlKCcnKTtcclxuICBjb25zdCBbZGF0YXNldDNWYWx1ZTIsIHNldERhdGFzZXQzVmFsdWUyXSA9IHVzZVN0YXRlKCcnKTtcclxuICBjb25zdCBbZGF0YXNldDNWYWx1ZTMsIHNldERhdGFzZXQzVmFsdWUzXSA9IHVzZVN0YXRlKCcnKTtcclxuICBjb25zdCBbZGF0YXNldDNWYWx1ZTQsIHNldERhdGFzZXQzVmFsdWU0XSA9IHVzZVN0YXRlKCcnKTtcclxuICBjb25zdCBbZGF0YXNldDNWYWx1ZTUsIHNldERhdGFzZXQzVmFsdWU1XSA9IHVzZVN0YXRlKCcnKTtcclxuICBjb25zdCBbZGF0YXNldDNWYWx1ZTYsIHNldERhdGFzZXQzVmFsdWU2XSA9IHVzZVN0YXRlKCcnKTtcclxuICBjb25zdCBbZGF0YXNldDNWYWx1ZTcsIHNldERhdGFzZXQzVmFsdWU3XSA9IHVzZVN0YXRlKCcnKTtcclxuICBjb25zdCBbZGF0YXNldDNWYWx1ZTgsIHNldERhdGFzZXQzVmFsdWU4XSA9IHVzZVN0YXRlKCcnKTtcclxuICBjb25zdCBbZGF0YXNldDNWYWx1ZTksIHNldERhdGFzZXQzVmFsdWU5XSA9IHVzZVN0YXRlKCcnKTtcclxuICBjb25zdCBbZGF0YXNldDNWYWx1ZTEwLCBzZXREYXRhc2V0M1ZhbHVlMTBdID0gdXNlU3RhdGUoJycpO1xyXG4gIGNvbnN0IFtkYXRhc2V0M1ZhbHVlMTEsIHNldERhdGFzZXQzVmFsdWUxMV0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgY29uc3QgW2RhdGFzZXQzVmFsdWUxMiwgc2V0RGF0YXNldDNWYWx1ZTEyXSA9IHVzZVN0YXRlKCcnKTtcclxuXHJcbiAgY29uc3Qgb25EYXRhc2V0M1ZhbHVlMUNoYW5nZSA9IChkYXRhc2V0VmFsdWUpID0+IHtcclxuICAgIHNldERhdGFzZXQzVmFsdWUxKGRhdGFzZXRWYWx1ZSk7XHJcbiAgICBjb25zdCBkYXRhID0ge1xyXG4gICAgICBkYXRhc2V0M1ZhbHVlT25lOiAndHJ1ZScsXHJcbiAgICAgIGRhdGFzZXQzVmFsdWUxOiBkYXRhc2V0VmFsdWUsXHJcbiAgICAgIGluZGV4LFxyXG4gICAgICBzZWxTZWN0aW9uOiBzZWxlY3RlZFNlY3Rpb24sXHJcbiAgICB9O1xyXG4gICAgZGF0YXNldDNVcGRhdGUoZGF0YSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3Qgb25EYXRhc2V0M1ZhbHVlMkNoYW5nZSA9IChkYXRhc2V0VmFsdWUpID0+IHtcclxuICAgIHNldERhdGFzZXQzVmFsdWUyKGRhdGFzZXRWYWx1ZSk7XHJcbiAgICBjb25zdCBkYXRhID0ge1xyXG4gICAgICBkYXRhc2V0M1ZhbHVlMjI6ICd0cnVlJyxcclxuICAgICAgZGF0YXNldDNWYWx1ZTI6IGRhdGFzZXRWYWx1ZSxcclxuICAgICAgaW5kZXgsXHJcbiAgICAgIHNlbFNlY3Rpb246IHNlbGVjdGVkU2VjdGlvbixcclxuICAgIH07XHJcbiAgICBkYXRhc2V0M1VwZGF0ZShkYXRhKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBvbkRhdGFzZXQzVmFsdWUzQ2hhbmdlID0gKGRhdGFzZXRWYWx1ZSkgPT4ge1xyXG4gICAgc2V0RGF0YXNldDNWYWx1ZTMoZGF0YXNldFZhbHVlKTtcclxuICAgIGNvbnN0IGRhdGEgPSB7XHJcbiAgICAgIGRhdGFzZXQzVmFsdWUzMzogJ3RydWUnLFxyXG4gICAgICBkYXRhc2V0M1ZhbHVlMzogZGF0YXNldFZhbHVlLFxyXG4gICAgICBpbmRleCxcclxuICAgICAgc2VsU2VjdGlvbjogc2VsZWN0ZWRTZWN0aW9uLFxyXG4gICAgfTtcclxuICAgIGRhdGFzZXQzVXBkYXRlKGRhdGEpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IG9uRGF0YXNldDNWYWx1ZTRDaGFuZ2UgPSAoZGF0YXNldFZhbHVlKSA9PiB7XHJcbiAgICBzZXREYXRhc2V0M1ZhbHVlNChkYXRhc2V0VmFsdWUpO1xyXG4gICAgY29uc3QgZGF0YSA9IHtcclxuICAgICAgZGF0YXNldDNWYWx1ZTQ0OiAndHJ1ZScsXHJcbiAgICAgIGRhdGFzZXQzVmFsdWU0OiBkYXRhc2V0VmFsdWUsXHJcbiAgICAgIGluZGV4LFxyXG4gICAgICBzZWxTZWN0aW9uOiBzZWxlY3RlZFNlY3Rpb24sXHJcbiAgICB9O1xyXG4gICAgZGF0YXNldDNVcGRhdGUoZGF0YSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3Qgb25EYXRhc2V0M1ZhbHVlNUNoYW5nZSA9IChkYXRhc2V0VmFsdWUpID0+IHtcclxuICAgIHNldERhdGFzZXQzVmFsdWU1KGRhdGFzZXRWYWx1ZSk7XHJcbiAgICBjb25zdCBkYXRhID0ge1xyXG4gICAgICBkYXRhc2V0M1ZhbHVlNTU6ICd0cnVlJyxcclxuICAgICAgZGF0YXNldDNWYWx1ZTU6IGRhdGFzZXRWYWx1ZSxcclxuICAgICAgaW5kZXgsXHJcbiAgICAgIHNlbFNlY3Rpb246IHNlbGVjdGVkU2VjdGlvbixcclxuICAgIH07XHJcbiAgICBkYXRhc2V0M1VwZGF0ZShkYXRhKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBvbkRhdGFzZXQzVmFsdWU2Q2hhbmdlID0gKGRhdGFzZXRWYWx1ZSkgPT4ge1xyXG4gICAgc2V0RGF0YXNldDNWYWx1ZTYoZGF0YXNldFZhbHVlKTtcclxuICAgIGNvbnN0IGRhdGEgPSB7XHJcbiAgICAgIGRhdGFzZXQzVmFsdWU2NjogJ3RydWUnLFxyXG4gICAgICBkYXRhc2V0M1ZhbHVlNjogZGF0YXNldFZhbHVlLFxyXG4gICAgICBpbmRleCxcclxuICAgICAgc2VsU2VjdGlvbjogc2VsZWN0ZWRTZWN0aW9uLFxyXG4gICAgfTtcclxuICAgIGRhdGFzZXQzVXBkYXRlKGRhdGEpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IG9uRGF0YXNldDNWYWx1ZTdDaGFuZ2UgPSAoZGF0YXNldFZhbHVlKSA9PiB7XHJcbiAgICBzZXREYXRhc2V0M1ZhbHVlNyhkYXRhc2V0VmFsdWUpO1xyXG4gICAgY29uc3QgZGF0YSA9IHtcclxuICAgICAgZGF0YXNldDNWYWx1ZTc3OiAndHJ1ZScsXHJcbiAgICAgIGRhdGFzZXQzVmFsdWU3OiBkYXRhc2V0VmFsdWUsXHJcbiAgICAgIGluZGV4LFxyXG4gICAgICBzZWxTZWN0aW9uOiBzZWxlY3RlZFNlY3Rpb24sXHJcbiAgICB9O1xyXG4gICAgZGF0YXNldDNVcGRhdGUoZGF0YSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3Qgb25EYXRhc2V0M1ZhbHVlOENoYW5nZSA9IChkYXRhc2V0VmFsdWUpID0+IHtcclxuICAgIHNldERhdGFzZXQzVmFsdWU4KGRhdGFzZXRWYWx1ZSk7XHJcbiAgICBjb25zdCBkYXRhID0ge1xyXG4gICAgICBkYXRhc2V0M1ZhbHVlODg6ICd0cnVlJyxcclxuICAgICAgZGF0YXNldDNWYWx1ZTg6IGRhdGFzZXRWYWx1ZSxcclxuICAgICAgaW5kZXgsXHJcbiAgICAgIHNlbFNlY3Rpb246IHNlbGVjdGVkU2VjdGlvbixcclxuICAgIH07XHJcbiAgICBkYXRhc2V0M1VwZGF0ZShkYXRhKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBvbkRhdGFzZXQzVmFsdWU5Q2hhbmdlID0gKGRhdGFzZXRWYWx1ZSkgPT4ge1xyXG4gICAgc2V0RGF0YXNldDNWYWx1ZTkoZGF0YXNldFZhbHVlKTtcclxuICAgIGNvbnN0IGRhdGEgPSB7XHJcbiAgICAgIGRhdGFzZXQzVmFsdWU5OTogJ3RydWUnLFxyXG4gICAgICBkYXRhc2V0M1ZhbHVlOTogZGF0YXNldFZhbHVlLFxyXG4gICAgICBpbmRleCxcclxuICAgICAgc2VsU2VjdGlvbjogc2VsZWN0ZWRTZWN0aW9uLFxyXG4gICAgfTtcclxuICAgIGRhdGFzZXQzVXBkYXRlKGRhdGEpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IG9uRGF0YXNldDNWYWx1ZTEwQ2hhbmdlID0gKGRhdGFzZXRWYWx1ZSkgPT4ge1xyXG4gICAgc2V0RGF0YXNldDNWYWx1ZTEwKGRhdGFzZXRWYWx1ZSk7XHJcbiAgICBjb25zdCBkYXRhID0ge1xyXG4gICAgICBkYXRhc2V0M1ZhbHVlMTAwOiAndHJ1ZScsXHJcbiAgICAgIGRhdGFzZXQzVmFsdWUxMDogZGF0YXNldFZhbHVlLFxyXG4gICAgICBpbmRleCxcclxuICAgICAgc2VsU2VjdGlvbjogc2VsZWN0ZWRTZWN0aW9uLFxyXG4gICAgfTtcclxuICAgIGRhdGFzZXQzVXBkYXRlKGRhdGEpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IG9uRGF0YXNldDNWYWx1ZTExQ2hhbmdlID0gKGRhdGFzZXRWYWx1ZSkgPT4ge1xyXG4gICAgc2V0RGF0YXNldDNWYWx1ZTExKGRhdGFzZXRWYWx1ZSk7XHJcbiAgICBjb25zdCBkYXRhID0ge1xyXG4gICAgICBkYXRhc2V0M1ZhbHVlMTExOiAndHJ1ZScsXHJcbiAgICAgIGRhdGFzZXQzVmFsdWUxMTogZGF0YXNldFZhbHVlLFxyXG4gICAgICBpbmRleCxcclxuICAgICAgc2VsU2VjdGlvbjogc2VsZWN0ZWRTZWN0aW9uLFxyXG4gICAgfTtcclxuICAgIGRhdGFzZXQzVXBkYXRlKGRhdGEpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IG9uRGF0YXNldDNWYWx1ZTEyQ2hhbmdlID0gKGRhdGFzZXRWYWx1ZSkgPT4ge1xyXG4gICAgc2V0RGF0YXNldDNWYWx1ZTEyKGRhdGFzZXRWYWx1ZSk7XHJcbiAgICBjb25zdCBkYXRhID0ge1xyXG4gICAgICBkYXRhc2V0M1ZhbHVlMTIwOiAndHJ1ZScsXHJcbiAgICAgIGRhdGFzZXQzVmFsdWUxMjogZGF0YXNldFZhbHVlLFxyXG4gICAgICBpbmRleCxcclxuICAgICAgc2VsU2VjdGlvbjogc2VsZWN0ZWRTZWN0aW9uLFxyXG4gICAgfTtcclxuICAgIGRhdGFzZXQzVXBkYXRlKGRhdGEpO1xyXG4gIH07XHJcbiAgLy8gREFUQVNFVCAzIC0tLSBFTkQgLS0tXHJcbiAgLy8gREFUQVNFVCA0IC0tLSBTVEFSVCAtLS1cclxuICBjb25zdCBbZGF0YXNldDRWYWx1ZTEsIHNldERhdGFzZXQ0VmFsdWUxXSA9IHVzZVN0YXRlKCcnKTtcclxuICBjb25zdCBbZGF0YXNldDRWYWx1ZTIsIHNldERhdGFzZXQ0VmFsdWUyXSA9IHVzZVN0YXRlKCcnKTtcclxuICBjb25zdCBbZGF0YXNldDRWYWx1ZTMsIHNldERhdGFzZXQ0VmFsdWUzXSA9IHVzZVN0YXRlKCcnKTtcclxuICBjb25zdCBbZGF0YXNldDRWYWx1ZTQsIHNldERhdGFzZXQ0VmFsdWU0XSA9IHVzZVN0YXRlKCcnKTtcclxuICBjb25zdCBbZGF0YXNldDRWYWx1ZTUsIHNldERhdGFzZXQ0VmFsdWU1XSA9IHVzZVN0YXRlKCcnKTtcclxuICBjb25zdCBbZGF0YXNldDRWYWx1ZTYsIHNldERhdGFzZXQ0VmFsdWU2XSA9IHVzZVN0YXRlKCcnKTtcclxuICBjb25zdCBbZGF0YXNldDRWYWx1ZTcsIHNldERhdGFzZXQ0VmFsdWU3XSA9IHVzZVN0YXRlKCcnKTtcclxuICBjb25zdCBbZGF0YXNldDRWYWx1ZTgsIHNldERhdGFzZXQ0VmFsdWU4XSA9IHVzZVN0YXRlKCcnKTtcclxuICBjb25zdCBbZGF0YXNldDRWYWx1ZTksIHNldERhdGFzZXQ0VmFsdWU5XSA9IHVzZVN0YXRlKCcnKTtcclxuICBjb25zdCBbZGF0YXNldDRWYWx1ZTEwLCBzZXREYXRhc2V0NFZhbHVlMTBdID0gdXNlU3RhdGUoJycpO1xyXG4gIGNvbnN0IFtkYXRhc2V0NFZhbHVlMTEsIHNldERhdGFzZXQ0VmFsdWUxMV0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgY29uc3QgW2RhdGFzZXQ0VmFsdWUxMiwgc2V0RGF0YXNldDRWYWx1ZTEyXSA9IHVzZVN0YXRlKCcnKTtcclxuXHJcbiAgY29uc3Qgb25EYXRhc2V0NFZhbHVlMUNoYW5nZSA9IChkYXRhc2V0VmFsdWUpID0+IHtcclxuICAgIHNldERhdGFzZXQ0VmFsdWUxKGRhdGFzZXRWYWx1ZSk7XHJcbiAgICBjb25zdCBkYXRhID0ge1xyXG4gICAgICBkYXRhc2V0NFZhbHVlT25lOiAndHJ1ZScsXHJcbiAgICAgIGRhdGFzZXQ0VmFsdWUxOiBkYXRhc2V0VmFsdWUsXHJcbiAgICAgIGluZGV4LFxyXG4gICAgICBzZWxTZWN0aW9uOiBzZWxlY3RlZFNlY3Rpb24sXHJcbiAgICB9O1xyXG4gICAgZGF0YXNldDRVcGRhdGUoZGF0YSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3Qgb25EYXRhc2V0NFZhbHVlMkNoYW5nZSA9IChkYXRhc2V0VmFsdWUpID0+IHtcclxuICAgIHNldERhdGFzZXQ0VmFsdWUyKGRhdGFzZXRWYWx1ZSk7XHJcbiAgICBjb25zdCBkYXRhID0ge1xyXG4gICAgICBkYXRhc2V0NFZhbHVlMjI6ICd0cnVlJyxcclxuICAgICAgZGF0YXNldDRWYWx1ZTI6IGRhdGFzZXRWYWx1ZSxcclxuICAgICAgaW5kZXgsXHJcbiAgICAgIHNlbFNlY3Rpb246IHNlbGVjdGVkU2VjdGlvbixcclxuICAgIH07XHJcbiAgICBkYXRhc2V0NFVwZGF0ZShkYXRhKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBvbkRhdGFzZXQ0VmFsdWUzQ2hhbmdlID0gKGRhdGFzZXRWYWx1ZSkgPT4ge1xyXG4gICAgc2V0RGF0YXNldDRWYWx1ZTMoZGF0YXNldFZhbHVlKTtcclxuICAgIGNvbnN0IGRhdGEgPSB7XHJcbiAgICAgIGRhdGFzZXQ0VmFsdWUzMzogJ3RydWUnLFxyXG4gICAgICBkYXRhc2V0NFZhbHVlMzogZGF0YXNldFZhbHVlLFxyXG4gICAgICBpbmRleCxcclxuICAgICAgc2VsU2VjdGlvbjogc2VsZWN0ZWRTZWN0aW9uLFxyXG4gICAgfTtcclxuICAgIGRhdGFzZXQ0VXBkYXRlKGRhdGEpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IG9uRGF0YXNldDRWYWx1ZTRDaGFuZ2UgPSAoZGF0YXNldFZhbHVlKSA9PiB7XHJcbiAgICBzZXREYXRhc2V0NFZhbHVlNChkYXRhc2V0VmFsdWUpO1xyXG4gICAgY29uc3QgZGF0YSA9IHtcclxuICAgICAgZGF0YXNldDRWYWx1ZTQ0OiAndHJ1ZScsXHJcbiAgICAgIGRhdGFzZXQ0VmFsdWU0OiBkYXRhc2V0VmFsdWUsXHJcbiAgICAgIGluZGV4LFxyXG4gICAgICBzZWxTZWN0aW9uOiBzZWxlY3RlZFNlY3Rpb24sXHJcbiAgICB9O1xyXG4gICAgZGF0YXNldDRVcGRhdGUoZGF0YSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3Qgb25EYXRhc2V0NFZhbHVlNUNoYW5nZSA9IChkYXRhc2V0VmFsdWUpID0+IHtcclxuICAgIHNldERhdGFzZXQ0VmFsdWU1KGRhdGFzZXRWYWx1ZSk7XHJcbiAgICBjb25zdCBkYXRhID0ge1xyXG4gICAgICBkYXRhc2V0NFZhbHVlNTU6ICd0cnVlJyxcclxuICAgICAgZGF0YXNldDRWYWx1ZTU6IGRhdGFzZXRWYWx1ZSxcclxuICAgICAgaW5kZXgsXHJcbiAgICAgIHNlbFNlY3Rpb246IHNlbGVjdGVkU2VjdGlvbixcclxuICAgIH07XHJcbiAgICBkYXRhc2V0NFVwZGF0ZShkYXRhKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBvbkRhdGFzZXQ0VmFsdWU2Q2hhbmdlID0gKGRhdGFzZXRWYWx1ZSkgPT4ge1xyXG4gICAgc2V0RGF0YXNldDRWYWx1ZTYoZGF0YXNldFZhbHVlKTtcclxuICAgIGNvbnN0IGRhdGEgPSB7XHJcbiAgICAgIGRhdGFzZXQ0VmFsdWU2NjogJ3RydWUnLFxyXG4gICAgICBkYXRhc2V0NFZhbHVlNjogZGF0YXNldFZhbHVlLFxyXG4gICAgICBpbmRleCxcclxuICAgICAgc2VsU2VjdGlvbjogc2VsZWN0ZWRTZWN0aW9uLFxyXG4gICAgfTtcclxuICAgIGRhdGFzZXQ0VXBkYXRlKGRhdGEpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IG9uRGF0YXNldDRWYWx1ZTdDaGFuZ2UgPSAoZGF0YXNldFZhbHVlKSA9PiB7XHJcbiAgICBzZXREYXRhc2V0NFZhbHVlNyhkYXRhc2V0VmFsdWUpO1xyXG4gICAgY29uc3QgZGF0YSA9IHtcclxuICAgICAgZGF0YXNldDRWYWx1ZTc3OiAndHJ1ZScsXHJcbiAgICAgIGRhdGFzZXQ0VmFsdWU3OiBkYXRhc2V0VmFsdWUsXHJcbiAgICAgIGluZGV4LFxyXG4gICAgICBzZWxTZWN0aW9uOiBzZWxlY3RlZFNlY3Rpb24sXHJcbiAgICB9O1xyXG4gICAgZGF0YXNldDRVcGRhdGUoZGF0YSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3Qgb25EYXRhc2V0NFZhbHVlOENoYW5nZSA9IChkYXRhc2V0VmFsdWUpID0+IHtcclxuICAgIHNldERhdGFzZXQ0VmFsdWU4KGRhdGFzZXRWYWx1ZSk7XHJcbiAgICBjb25zdCBkYXRhID0ge1xyXG4gICAgICBkYXRhc2V0NFZhbHVlODg6ICd0cnVlJyxcclxuICAgICAgZGF0YXNldDRWYWx1ZTg6IGRhdGFzZXRWYWx1ZSxcclxuICAgICAgaW5kZXgsXHJcbiAgICAgIHNlbFNlY3Rpb246IHNlbGVjdGVkU2VjdGlvbixcclxuICAgIH07XHJcbiAgICBkYXRhc2V0NFVwZGF0ZShkYXRhKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBvbkRhdGFzZXQ0VmFsdWU5Q2hhbmdlID0gKGRhdGFzZXRWYWx1ZSkgPT4ge1xyXG4gICAgc2V0RGF0YXNldDRWYWx1ZTkoZGF0YXNldFZhbHVlKTtcclxuICAgIGNvbnN0IGRhdGEgPSB7XHJcbiAgICAgIGRhdGFzZXQ0VmFsdWU5OTogJ3RydWUnLFxyXG4gICAgICBkYXRhc2V0NFZhbHVlOTogZGF0YXNldFZhbHVlLFxyXG4gICAgICBpbmRleCxcclxuICAgICAgc2VsU2VjdGlvbjogc2VsZWN0ZWRTZWN0aW9uLFxyXG4gICAgfTtcclxuICAgIGRhdGFzZXQ0VXBkYXRlKGRhdGEpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IG9uRGF0YXNldDRWYWx1ZTEwQ2hhbmdlID0gKGRhdGFzZXRWYWx1ZSkgPT4ge1xyXG4gICAgc2V0RGF0YXNldDRWYWx1ZTEwKGRhdGFzZXRWYWx1ZSk7XHJcbiAgICBjb25zdCBkYXRhID0ge1xyXG4gICAgICBkYXRhc2V0NFZhbHVlMTAwOiAndHJ1ZScsXHJcbiAgICAgIGRhdGFzZXQ0VmFsdWUxMDogZGF0YXNldFZhbHVlLFxyXG4gICAgICBpbmRleCxcclxuICAgICAgc2VsU2VjdGlvbjogc2VsZWN0ZWRTZWN0aW9uLFxyXG4gICAgfTtcclxuICAgIGRhdGFzZXQ0VXBkYXRlKGRhdGEpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IG9uRGF0YXNldDRWYWx1ZTExQ2hhbmdlID0gKGRhdGFzZXRWYWx1ZSkgPT4ge1xyXG4gICAgc2V0RGF0YXNldDRWYWx1ZTExKGRhdGFzZXRWYWx1ZSk7XHJcbiAgICBjb25zdCBkYXRhID0ge1xyXG4gICAgICBkYXRhc2V0NFZhbHVlMTExOiAndHJ1ZScsXHJcbiAgICAgIGRhdGFzZXQ0VmFsdWUxMTogZGF0YXNldFZhbHVlLFxyXG4gICAgICBpbmRleCxcclxuICAgICAgc2VsU2VjdGlvbjogc2VsZWN0ZWRTZWN0aW9uLFxyXG4gICAgfTtcclxuICAgIGRhdGFzZXQ0VXBkYXRlKGRhdGEpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IG9uRGF0YXNldDRWYWx1ZTEyQ2hhbmdlID0gKGRhdGFzZXRWYWx1ZSkgPT4ge1xyXG4gICAgc2V0RGF0YXNldDRWYWx1ZTEyKGRhdGFzZXRWYWx1ZSk7XHJcbiAgICBjb25zdCBkYXRhID0ge1xyXG4gICAgICBkYXRhc2V0NFZhbHVlMTIwOiAndHJ1ZScsXHJcbiAgICAgIGRhdGFzZXQ0VmFsdWUxMjogZGF0YXNldFZhbHVlLFxyXG4gICAgICBpbmRleCxcclxuICAgICAgc2VsU2VjdGlvbjogc2VsZWN0ZWRTZWN0aW9uLFxyXG4gICAgfTtcclxuICAgIGRhdGFzZXQ0VXBkYXRlKGRhdGEpO1xyXG4gIH07XHJcbiAgLy8gREFUQVNFVCA0IC0tLSBFTkQgLS0tXHJcbiAgLy8gREFUQVNFVCA1IC0tLSBTVEFSVCAtLS1cclxuICBjb25zdCBbZGF0YXNldDVWYWx1ZTEsIHNldERhdGFzZXQ1VmFsdWUxXSA9IHVzZVN0YXRlKCcnKTtcclxuICBjb25zdCBbZGF0YXNldDVWYWx1ZTIsIHNldERhdGFzZXQ1VmFsdWUyXSA9IHVzZVN0YXRlKCcnKTtcclxuICBjb25zdCBbZGF0YXNldDVWYWx1ZTMsIHNldERhdGFzZXQ1VmFsdWUzXSA9IHVzZVN0YXRlKCcnKTtcclxuICBjb25zdCBbZGF0YXNldDVWYWx1ZTQsIHNldERhdGFzZXQ1VmFsdWU0XSA9IHVzZVN0YXRlKCcnKTtcclxuICBjb25zdCBbZGF0YXNldDVWYWx1ZTUsIHNldERhdGFzZXQ1VmFsdWU1XSA9IHVzZVN0YXRlKCcnKTtcclxuICBjb25zdCBbZGF0YXNldDVWYWx1ZTYsIHNldERhdGFzZXQ1VmFsdWU2XSA9IHVzZVN0YXRlKCcnKTtcclxuICBjb25zdCBbZGF0YXNldDVWYWx1ZTcsIHNldERhdGFzZXQ1VmFsdWU3XSA9IHVzZVN0YXRlKCcnKTtcclxuICBjb25zdCBbZGF0YXNldDVWYWx1ZTgsIHNldERhdGFzZXQ1VmFsdWU4XSA9IHVzZVN0YXRlKCcnKTtcclxuICBjb25zdCBbZGF0YXNldDVWYWx1ZTksIHNldERhdGFzZXQ1VmFsdWU5XSA9IHVzZVN0YXRlKCcnKTtcclxuICBjb25zdCBbZGF0YXNldDVWYWx1ZTEwLCBzZXREYXRhc2V0NVZhbHVlMTBdID0gdXNlU3RhdGUoJycpO1xyXG4gIGNvbnN0IFtkYXRhc2V0NVZhbHVlMTEsIHNldERhdGFzZXQ1VmFsdWUxMV0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgY29uc3QgW2RhdGFzZXQ1VmFsdWUxMiwgc2V0RGF0YXNldDVWYWx1ZTEyXSA9IHVzZVN0YXRlKCcnKTtcclxuXHJcbiAgY29uc3Qgb25EYXRhc2V0NVZhbHVlMUNoYW5nZSA9IChkYXRhc2V0VmFsdWUpID0+IHtcclxuICAgIHNldERhdGFzZXQ1VmFsdWUxKGRhdGFzZXRWYWx1ZSk7XHJcbiAgICBjb25zdCBkYXRhID0ge1xyXG4gICAgICBkYXRhc2V0NVZhbHVlT25lOiAndHJ1ZScsXHJcbiAgICAgIGRhdGFzZXQ1VmFsdWUxOiBkYXRhc2V0VmFsdWUsXHJcbiAgICAgIGluZGV4LFxyXG4gICAgICBzZWxTZWN0aW9uOiBzZWxlY3RlZFNlY3Rpb24sXHJcbiAgICB9O1xyXG4gICAgZGF0YXNldDVVcGRhdGUoZGF0YSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3Qgb25EYXRhc2V0NVZhbHVlMkNoYW5nZSA9IChkYXRhc2V0VmFsdWUpID0+IHtcclxuICAgIHNldERhdGFzZXQ1VmFsdWUyKGRhdGFzZXRWYWx1ZSk7XHJcbiAgICBjb25zdCBkYXRhID0ge1xyXG4gICAgICBkYXRhc2V0NVZhbHVlMjI6ICd0cnVlJyxcclxuICAgICAgZGF0YXNldDVWYWx1ZTI6IGRhdGFzZXRWYWx1ZSxcclxuICAgICAgaW5kZXgsXHJcbiAgICAgIHNlbFNlY3Rpb246IHNlbGVjdGVkU2VjdGlvbixcclxuICAgIH07XHJcbiAgICBkYXRhc2V0NVVwZGF0ZShkYXRhKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBvbkRhdGFzZXQ1VmFsdWUzQ2hhbmdlID0gKGRhdGFzZXRWYWx1ZSkgPT4ge1xyXG4gICAgc2V0RGF0YXNldDVWYWx1ZTMoZGF0YXNldFZhbHVlKTtcclxuICAgIGNvbnN0IGRhdGEgPSB7XHJcbiAgICAgIGRhdGFzZXQ1VmFsdWUzMzogJ3RydWUnLFxyXG4gICAgICBkYXRhc2V0NVZhbHVlMzogZGF0YXNldFZhbHVlLFxyXG4gICAgICBpbmRleCxcclxuICAgICAgc2VsU2VjdGlvbjogc2VsZWN0ZWRTZWN0aW9uLFxyXG4gICAgfTtcclxuICAgIGRhdGFzZXQ1VXBkYXRlKGRhdGEpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IG9uRGF0YXNldDVWYWx1ZTRDaGFuZ2UgPSAoZGF0YXNldFZhbHVlKSA9PiB7XHJcbiAgICBzZXREYXRhc2V0NVZhbHVlNChkYXRhc2V0VmFsdWUpO1xyXG4gICAgY29uc3QgZGF0YSA9IHtcclxuICAgICAgZGF0YXNldDVWYWx1ZTQ0OiAndHJ1ZScsXHJcbiAgICAgIGRhdGFzZXQ1VmFsdWU0OiBkYXRhc2V0VmFsdWUsXHJcbiAgICAgIGluZGV4LFxyXG4gICAgICBzZWxTZWN0aW9uOiBzZWxlY3RlZFNlY3Rpb24sXHJcbiAgICB9O1xyXG4gICAgZGF0YXNldDVVcGRhdGUoZGF0YSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3Qgb25EYXRhc2V0NVZhbHVlNUNoYW5nZSA9IChkYXRhc2V0VmFsdWUpID0+IHtcclxuICAgIHNldERhdGFzZXQ1VmFsdWU1KGRhdGFzZXRWYWx1ZSk7XHJcbiAgICBjb25zdCBkYXRhID0ge1xyXG4gICAgICBkYXRhc2V0NVZhbHVlNTU6ICd0cnVlJyxcclxuICAgICAgZGF0YXNldDVWYWx1ZTU6IGRhdGFzZXRWYWx1ZSxcclxuICAgICAgaW5kZXgsXHJcbiAgICAgIHNlbFNlY3Rpb246IHNlbGVjdGVkU2VjdGlvbixcclxuICAgIH07XHJcbiAgICBkYXRhc2V0NVVwZGF0ZShkYXRhKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBvbkRhdGFzZXQ1VmFsdWU2Q2hhbmdlID0gKGRhdGFzZXRWYWx1ZSkgPT4ge1xyXG4gICAgc2V0RGF0YXNldDVWYWx1ZTYoZGF0YXNldFZhbHVlKTtcclxuICAgIGNvbnN0IGRhdGEgPSB7XHJcbiAgICAgIGRhdGFzZXQ1VmFsdWU2NjogJ3RydWUnLFxyXG4gICAgICBkYXRhc2V0NVZhbHVlNjogZGF0YXNldFZhbHVlLFxyXG4gICAgICBpbmRleCxcclxuICAgICAgc2VsU2VjdGlvbjogc2VsZWN0ZWRTZWN0aW9uLFxyXG4gICAgfTtcclxuICAgIGRhdGFzZXQ1VXBkYXRlKGRhdGEpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IG9uRGF0YXNldDVWYWx1ZTdDaGFuZ2UgPSAoZGF0YXNldFZhbHVlKSA9PiB7XHJcbiAgICBzZXREYXRhc2V0NVZhbHVlNyhkYXRhc2V0VmFsdWUpO1xyXG4gICAgY29uc3QgZGF0YSA9IHtcclxuICAgICAgZGF0YXNldDVWYWx1ZTc3OiAndHJ1ZScsXHJcbiAgICAgIGRhdGFzZXQ1VmFsdWU3OiBkYXRhc2V0VmFsdWUsXHJcbiAgICAgIGluZGV4LFxyXG4gICAgICBzZWxTZWN0aW9uOiBzZWxlY3RlZFNlY3Rpb24sXHJcbiAgICB9O1xyXG4gICAgZGF0YXNldDVVcGRhdGUoZGF0YSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3Qgb25EYXRhc2V0NVZhbHVlOENoYW5nZSA9IChkYXRhc2V0VmFsdWUpID0+IHtcclxuICAgIHNldERhdGFzZXQ1VmFsdWU4KGRhdGFzZXRWYWx1ZSk7XHJcbiAgICBjb25zdCBkYXRhID0ge1xyXG4gICAgICBkYXRhc2V0NVZhbHVlODg6ICd0cnVlJyxcclxuICAgICAgZGF0YXNldDVWYWx1ZTg6IGRhdGFzZXRWYWx1ZSxcclxuICAgICAgaW5kZXgsXHJcbiAgICAgIHNlbFNlY3Rpb246IHNlbGVjdGVkU2VjdGlvbixcclxuICAgIH07XHJcbiAgICBkYXRhc2V0NVVwZGF0ZShkYXRhKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBvbkRhdGFzZXQ1VmFsdWU5Q2hhbmdlID0gKGRhdGFzZXRWYWx1ZSkgPT4ge1xyXG4gICAgc2V0RGF0YXNldDVWYWx1ZTkoZGF0YXNldFZhbHVlKTtcclxuICAgIGNvbnN0IGRhdGEgPSB7XHJcbiAgICAgIGRhdGFzZXQ1VmFsdWU5OTogJ3RydWUnLFxyXG4gICAgICBkYXRhc2V0NVZhbHVlOTogZGF0YXNldFZhbHVlLFxyXG4gICAgICBpbmRleCxcclxuICAgICAgc2VsU2VjdGlvbjogc2VsZWN0ZWRTZWN0aW9uLFxyXG4gICAgfTtcclxuICAgIGRhdGFzZXQ1VXBkYXRlKGRhdGEpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IG9uRGF0YXNldDVWYWx1ZTEwQ2hhbmdlID0gKGRhdGFzZXRWYWx1ZSkgPT4ge1xyXG4gICAgc2V0RGF0YXNldDVWYWx1ZTEwKGRhdGFzZXRWYWx1ZSk7XHJcbiAgICBjb25zdCBkYXRhID0ge1xyXG4gICAgICBkYXRhc2V0NVZhbHVlMTAwOiAndHJ1ZScsXHJcbiAgICAgIGRhdGFzZXQ1VmFsdWUxMDogZGF0YXNldFZhbHVlLFxyXG4gICAgICBpbmRleCxcclxuICAgICAgc2VsU2VjdGlvbjogc2VsZWN0ZWRTZWN0aW9uLFxyXG4gICAgfTtcclxuICAgIGRhdGFzZXQ1VXBkYXRlKGRhdGEpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IG9uRGF0YXNldDVWYWx1ZTExQ2hhbmdlID0gKGRhdGFzZXRWYWx1ZSkgPT4ge1xyXG4gICAgc2V0RGF0YXNldDVWYWx1ZTExKGRhdGFzZXRWYWx1ZSk7XHJcbiAgICBjb25zdCBkYXRhID0ge1xyXG4gICAgICBkYXRhc2V0NVZhbHVlMTExOiAndHJ1ZScsXHJcbiAgICAgIGRhdGFzZXQ1VmFsdWUxMTogZGF0YXNldFZhbHVlLFxyXG4gICAgICBpbmRleCxcclxuICAgICAgc2VsU2VjdGlvbjogc2VsZWN0ZWRTZWN0aW9uLFxyXG4gICAgfTtcclxuICAgIGRhdGFzZXQ1VXBkYXRlKGRhdGEpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IG9uRGF0YXNldDVWYWx1ZTEyQ2hhbmdlID0gKGRhdGFzZXRWYWx1ZSkgPT4ge1xyXG4gICAgc2V0RGF0YXNldDVWYWx1ZTEyKGRhdGFzZXRWYWx1ZSk7XHJcbiAgICBjb25zdCBkYXRhID0ge1xyXG4gICAgICBkYXRhc2V0NVZhbHVlMTIwOiAndHJ1ZScsXHJcbiAgICAgIGRhdGFzZXQ1VmFsdWUxMjogZGF0YXNldFZhbHVlLFxyXG4gICAgICBpbmRleCxcclxuICAgICAgc2VsU2VjdGlvbjogc2VsZWN0ZWRTZWN0aW9uLFxyXG4gICAgfTtcclxuICAgIGRhdGFzZXQ1VXBkYXRlKGRhdGEpO1xyXG4gIH07XHJcbiAgLy8gREFUQVNFVCA1IC0tLSBFTkQgLS0tXHJcbiAgLy8gREFUQVNFVCAzIC0tLSBTVEFSVCAtLS1cclxuICBjb25zdCBbZGF0YXNldDZWYWx1ZTEsIHNldERhdGFzZXQ2VmFsdWUxXSA9IHVzZVN0YXRlKCcnKTtcclxuICBjb25zdCBbZGF0YXNldDZWYWx1ZTIsIHNldERhdGFzZXQ2VmFsdWUyXSA9IHVzZVN0YXRlKCcnKTtcclxuICBjb25zdCBbZGF0YXNldDZWYWx1ZTMsIHNldERhdGFzZXQ2VmFsdWUzXSA9IHVzZVN0YXRlKCcnKTtcclxuICBjb25zdCBbZGF0YXNldDZWYWx1ZTQsIHNldERhdGFzZXQ2VmFsdWU0XSA9IHVzZVN0YXRlKCcnKTtcclxuICBjb25zdCBbZGF0YXNldDZWYWx1ZTUsIHNldERhdGFzZXQ2VmFsdWU1XSA9IHVzZVN0YXRlKCcnKTtcclxuICBjb25zdCBbZGF0YXNldDZWYWx1ZTYsIHNldERhdGFzZXQ2VmFsdWU2XSA9IHVzZVN0YXRlKCcnKTtcclxuICBjb25zdCBbZGF0YXNldDZWYWx1ZTcsIHNldERhdGFzZXQ2VmFsdWU3XSA9IHVzZVN0YXRlKCcnKTtcclxuICBjb25zdCBbZGF0YXNldDZWYWx1ZTgsIHNldERhdGFzZXQ2VmFsdWU4XSA9IHVzZVN0YXRlKCcnKTtcclxuICBjb25zdCBbZGF0YXNldDZWYWx1ZTksIHNldERhdGFzZXQ2VmFsdWU5XSA9IHVzZVN0YXRlKCcnKTtcclxuICBjb25zdCBbZGF0YXNldDZWYWx1ZTEwLCBzZXREYXRhc2V0NlZhbHVlMTBdID0gdXNlU3RhdGUoJycpO1xyXG4gIGNvbnN0IFtkYXRhc2V0NlZhbHVlMTEsIHNldERhdGFzZXQ2VmFsdWUxMV0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgY29uc3QgW2RhdGFzZXQ2VmFsdWUxMiwgc2V0RGF0YXNldDZWYWx1ZTEyXSA9IHVzZVN0YXRlKCcnKTtcclxuXHJcbiAgY29uc3Qgb25EYXRhc2V0NlZhbHVlMUNoYW5nZSA9IChkYXRhc2V0VmFsdWUpID0+IHtcclxuICAgIHNldERhdGFzZXQ2VmFsdWUxKGRhdGFzZXRWYWx1ZSk7XHJcbiAgICBjb25zdCBkYXRhID0ge1xyXG4gICAgICBkYXRhc2V0NlZhbHVlT25lOiAndHJ1ZScsXHJcbiAgICAgIGRhdGFzZXQ2VmFsdWUxOiBkYXRhc2V0VmFsdWUsXHJcbiAgICAgIGluZGV4LFxyXG4gICAgICBzZWxTZWN0aW9uOiBzZWxlY3RlZFNlY3Rpb24sXHJcbiAgICB9O1xyXG4gICAgZGF0YXNldDZVcGRhdGUoZGF0YSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3Qgb25EYXRhc2V0NlZhbHVlMkNoYW5nZSA9IChkYXRhc2V0VmFsdWUpID0+IHtcclxuICAgIHNldERhdGFzZXQ2VmFsdWUyKGRhdGFzZXRWYWx1ZSk7XHJcbiAgICBjb25zdCBkYXRhID0ge1xyXG4gICAgICBkYXRhc2V0NlZhbHVlMjI6ICd0cnVlJyxcclxuICAgICAgZGF0YXNldDZWYWx1ZTI6IGRhdGFzZXRWYWx1ZSxcclxuICAgICAgaW5kZXgsXHJcbiAgICAgIHNlbFNlY3Rpb246IHNlbGVjdGVkU2VjdGlvbixcclxuICAgIH07XHJcbiAgICBkYXRhc2V0NlVwZGF0ZShkYXRhKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBvbkRhdGFzZXQ2VmFsdWUzQ2hhbmdlID0gKGRhdGFzZXRWYWx1ZSkgPT4ge1xyXG4gICAgc2V0RGF0YXNldDZWYWx1ZTMoZGF0YXNldFZhbHVlKTtcclxuICAgIGNvbnN0IGRhdGEgPSB7XHJcbiAgICAgIGRhdGFzZXQ2VmFsdWUzMzogJ3RydWUnLFxyXG4gICAgICBkYXRhc2V0NlZhbHVlMzogZGF0YXNldFZhbHVlLFxyXG4gICAgICBpbmRleCxcclxuICAgICAgc2VsU2VjdGlvbjogc2VsZWN0ZWRTZWN0aW9uLFxyXG4gICAgfTtcclxuICAgIGRhdGFzZXQ2VXBkYXRlKGRhdGEpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IG9uRGF0YXNldDZWYWx1ZTRDaGFuZ2UgPSAoZGF0YXNldFZhbHVlKSA9PiB7XHJcbiAgICBzZXREYXRhc2V0NlZhbHVlNChkYXRhc2V0VmFsdWUpO1xyXG4gICAgY29uc3QgZGF0YSA9IHtcclxuICAgICAgZGF0YXNldDZWYWx1ZTQ0OiAndHJ1ZScsXHJcbiAgICAgIGRhdGFzZXQ2VmFsdWU0OiBkYXRhc2V0VmFsdWUsXHJcbiAgICAgIGluZGV4LFxyXG4gICAgICBzZWxTZWN0aW9uOiBzZWxlY3RlZFNlY3Rpb24sXHJcbiAgICB9O1xyXG4gICAgZGF0YXNldDZVcGRhdGUoZGF0YSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3Qgb25EYXRhc2V0NlZhbHVlNUNoYW5nZSA9IChkYXRhc2V0VmFsdWUpID0+IHtcclxuICAgIHNldERhdGFzZXQ2VmFsdWU1KGRhdGFzZXRWYWx1ZSk7XHJcbiAgICBjb25zdCBkYXRhID0ge1xyXG4gICAgICBkYXRhc2V0NlZhbHVlNTU6ICd0cnVlJyxcclxuICAgICAgZGF0YXNldDZWYWx1ZTU6IGRhdGFzZXRWYWx1ZSxcclxuICAgICAgaW5kZXgsXHJcbiAgICAgIHNlbFNlY3Rpb246IHNlbGVjdGVkU2VjdGlvbixcclxuICAgIH07XHJcbiAgICBkYXRhc2V0NlVwZGF0ZShkYXRhKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBvbkRhdGFzZXQ2VmFsdWU2Q2hhbmdlID0gKGRhdGFzZXRWYWx1ZSkgPT4ge1xyXG4gICAgc2V0RGF0YXNldDZWYWx1ZTYoZGF0YXNldFZhbHVlKTtcclxuICAgIGNvbnN0IGRhdGEgPSB7XHJcbiAgICAgIGRhdGFzZXQ2VmFsdWU2NjogJ3RydWUnLFxyXG4gICAgICBkYXRhc2V0NlZhbHVlNjogZGF0YXNldFZhbHVlLFxyXG4gICAgICBpbmRleCxcclxuICAgICAgc2VsU2VjdGlvbjogc2VsZWN0ZWRTZWN0aW9uLFxyXG4gICAgfTtcclxuICAgIGRhdGFzZXQ2VXBkYXRlKGRhdGEpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IG9uRGF0YXNldDZWYWx1ZTdDaGFuZ2UgPSAoZGF0YXNldFZhbHVlKSA9PiB7XHJcbiAgICBzZXREYXRhc2V0NlZhbHVlNyhkYXRhc2V0VmFsdWUpO1xyXG4gICAgY29uc3QgZGF0YSA9IHtcclxuICAgICAgZGF0YXNldDZWYWx1ZTc3OiAndHJ1ZScsXHJcbiAgICAgIGRhdGFzZXQ2VmFsdWU3OiBkYXRhc2V0VmFsdWUsXHJcbiAgICAgIGluZGV4LFxyXG4gICAgICBzZWxTZWN0aW9uOiBzZWxlY3RlZFNlY3Rpb24sXHJcbiAgICB9O1xyXG4gICAgZGF0YXNldDZVcGRhdGUoZGF0YSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3Qgb25EYXRhc2V0NlZhbHVlOENoYW5nZSA9IChkYXRhc2V0VmFsdWUpID0+IHtcclxuICAgIHNldERhdGFzZXQ2VmFsdWU4KGRhdGFzZXRWYWx1ZSk7XHJcbiAgICBjb25zdCBkYXRhID0ge1xyXG4gICAgICBkYXRhc2V0NlZhbHVlODg6ICd0cnVlJyxcclxuICAgICAgZGF0YXNldDZWYWx1ZTg6IGRhdGFzZXRWYWx1ZSxcclxuICAgICAgaW5kZXgsXHJcbiAgICAgIHNlbFNlY3Rpb246IHNlbGVjdGVkU2VjdGlvbixcclxuICAgIH07XHJcbiAgICBkYXRhc2V0NlVwZGF0ZShkYXRhKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBvbkRhdGFzZXQ2VmFsdWU5Q2hhbmdlID0gKGRhdGFzZXRWYWx1ZSkgPT4ge1xyXG4gICAgc2V0RGF0YXNldDZWYWx1ZTkoZGF0YXNldFZhbHVlKTtcclxuICAgIGNvbnN0IGRhdGEgPSB7XHJcbiAgICAgIGRhdGFzZXQ2VmFsdWU5OTogJ3RydWUnLFxyXG4gICAgICBkYXRhc2V0NlZhbHVlOTogZGF0YXNldFZhbHVlLFxyXG4gICAgICBpbmRleCxcclxuICAgICAgc2VsU2VjdGlvbjogc2VsZWN0ZWRTZWN0aW9uLFxyXG4gICAgfTtcclxuICAgIGRhdGFzZXQ2VXBkYXRlKGRhdGEpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IG9uRGF0YXNldDZWYWx1ZTEwQ2hhbmdlID0gKGRhdGFzZXRWYWx1ZSkgPT4ge1xyXG4gICAgc2V0RGF0YXNldDZWYWx1ZTEwKGRhdGFzZXRWYWx1ZSk7XHJcbiAgICBjb25zdCBkYXRhID0ge1xyXG4gICAgICBkYXRhc2V0NlZhbHVlMTAwOiAndHJ1ZScsXHJcbiAgICAgIGRhdGFzZXQ2VmFsdWUxMDogZGF0YXNldFZhbHVlLFxyXG4gICAgICBpbmRleCxcclxuICAgICAgc2VsU2VjdGlvbjogc2VsZWN0ZWRTZWN0aW9uLFxyXG4gICAgfTtcclxuICAgIGRhdGFzZXQ2VXBkYXRlKGRhdGEpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IG9uRGF0YXNldDZWYWx1ZTExQ2hhbmdlID0gKGRhdGFzZXRWYWx1ZSkgPT4ge1xyXG4gICAgc2V0RGF0YXNldDZWYWx1ZTExKGRhdGFzZXRWYWx1ZSk7XHJcbiAgICBjb25zdCBkYXRhID0ge1xyXG4gICAgICBkYXRhc2V0NlZhbHVlMTExOiAndHJ1ZScsXHJcbiAgICAgIGRhdGFzZXQ2VmFsdWUxMTogZGF0YXNldFZhbHVlLFxyXG4gICAgICBpbmRleCxcclxuICAgICAgc2VsU2VjdGlvbjogc2VsZWN0ZWRTZWN0aW9uLFxyXG4gICAgfTtcclxuICAgIGRhdGFzZXQ2VXBkYXRlKGRhdGEpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IG9uRGF0YXNldDZWYWx1ZTEyQ2hhbmdlID0gKGRhdGFzZXRWYWx1ZSkgPT4ge1xyXG4gICAgc2V0RGF0YXNldDZWYWx1ZTEyKGRhdGFzZXRWYWx1ZSk7XHJcbiAgICBjb25zdCBkYXRhID0ge1xyXG4gICAgICBkYXRhc2V0NlZhbHVlMTIwOiAndHJ1ZScsXHJcbiAgICAgIGRhdGFzZXQ2VmFsdWUxMjogZGF0YXNldFZhbHVlLFxyXG4gICAgICBpbmRleCxcclxuICAgICAgc2VsU2VjdGlvbjogc2VsZWN0ZWRTZWN0aW9uLFxyXG4gICAgfTtcclxuICAgIGRhdGFzZXQ2VXBkYXRlKGRhdGEpO1xyXG4gIH07XHJcbiAgLy8gREFUQVNFVCA2IC0tLSBFTkQgLS0tXHJcbiAgY29uc3Qgb25EYXRhc2V0TGFiZWxDaGFuZ2UxID0gKGRhdGFzZXRMYWJlbCkgPT4ge1xyXG4gICAgc2V0RGF0YXNldDFMYWJlbChkYXRhc2V0TGFiZWwpO1xyXG4gICAgY29uc3QgZGF0YSA9IHtcclxuICAgICAgZGF0YXNldDFMYWJlbDogZGF0YXNldExhYmVsLFxyXG4gICAgICBpbmRleCxcclxuICAgICAgc2VsU2VjdGlvbjogc2VsZWN0ZWRTZWN0aW9uLFxyXG4gICAgfTtcclxuICAgIGRhdGFzZXRMYWJlbDFVcGRhdGUoZGF0YSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3Qgb25EYXRhc2V0TGFiZWxDaGFuZ2UyID0gKGRhdGFzZXRMYWJlbCkgPT4ge1xyXG4gICAgc2V0RGF0YXNldDJMYWJlbChkYXRhc2V0TGFiZWwpO1xyXG4gICAgY29uc3QgZGF0YSA9IHtcclxuICAgICAgZGF0YXNldDJMYWJlbDogZGF0YXNldExhYmVsLFxyXG4gICAgICBpbmRleCxcclxuICAgICAgc2VsU2VjdGlvbjogc2VsZWN0ZWRTZWN0aW9uLFxyXG4gICAgfTtcclxuICAgIGRhdGFzZXRMYWJlbDJVcGRhdGUoZGF0YSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3Qgb25EYXRhc2V0TGFiZWxDaGFuZ2UzID0gKGRhdGFzZXRMYWJlbCkgPT4ge1xyXG4gICAgc2V0RGF0YXNldDNMYWJlbChkYXRhc2V0TGFiZWwpO1xyXG4gICAgY29uc3QgZGF0YSA9IHtcclxuICAgICAgZGF0YXNldDNMYWJlbDogZGF0YXNldExhYmVsLFxyXG4gICAgICBpbmRleCxcclxuICAgICAgc2VsU2VjdGlvbjogc2VsZWN0ZWRTZWN0aW9uLFxyXG4gICAgfTtcclxuICAgIGRhdGFzZXRMYWJlbDNVcGRhdGUoZGF0YSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3Qgb25EYXRhc2V0TGFiZWxDaGFuZ2U0ID0gKGRhdGFzZXRMYWJlbCkgPT4ge1xyXG4gICAgc2V0RGF0YXNldDRMYWJlbChkYXRhc2V0TGFiZWwpO1xyXG4gICAgY29uc3QgZGF0YSA9IHtcclxuICAgICAgZGF0YXNldDRMYWJlbDogZGF0YXNldExhYmVsLFxyXG4gICAgICBpbmRleCxcclxuICAgICAgc2VsU2VjdGlvbjogc2VsZWN0ZWRTZWN0aW9uLFxyXG4gICAgfTtcclxuICAgIGRhdGFzZXRMYWJlbDRVcGRhdGUoZGF0YSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3Qgb25EYXRhc2V0TGFiZWxDaGFuZ2U1ID0gKGRhdGFzZXRMYWJlbCkgPT4ge1xyXG4gICAgc2V0RGF0YXNldDVMYWJlbChkYXRhc2V0TGFiZWwpO1xyXG4gICAgY29uc3QgZGF0YSA9IHtcclxuICAgICAgZGF0YXNldDVMYWJlbDogZGF0YXNldExhYmVsLFxyXG4gICAgICBpbmRleCxcclxuICAgICAgc2VsU2VjdGlvbjogc2VsZWN0ZWRTZWN0aW9uLFxyXG4gICAgfTtcclxuICAgIGRhdGFzZXRMYWJlbDVVcGRhdGUoZGF0YSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3Qgb25EYXRhc2V0TGFiZWxDaGFuZ2U2ID0gKGRhdGFzZXRMYWJlbCkgPT4ge1xyXG4gICAgc2V0RGF0YXNldDZMYWJlbChkYXRhc2V0TGFiZWwpO1xyXG4gICAgY29uc3QgZGF0YSA9IHtcclxuICAgICAgZGF0YXNldDZMYWJlbDogZGF0YXNldExhYmVsLFxyXG4gICAgICBpbmRleCxcclxuICAgICAgc2VsU2VjdGlvbjogc2VsZWN0ZWRTZWN0aW9uLFxyXG4gICAgfTtcclxuICAgIGRhdGFzZXRMYWJlbDZVcGRhdGUoZGF0YSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgdGFibGVSZWYgPSB1c2VSZWYoKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGAke2ZpZWxkLmluZGV4fWNvbnRhaW5lcmApICYmXHJcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGAke2ZpZWxkLmluZGV4fWNvbnRhaW5lcmApLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZW50ZXInLCAoKSA9PiB7XHJcbiAgICAgICAgZ3NhcC50byhkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgJHtmaWVsZC5pbmRleH10YWJsZWApLCB7XHJcbiAgICAgICAgICBoZWlnaHQ6IDIwMCxcclxuICAgICAgICAgIGR1cmF0aW9uOiAwLjgsXHJcbiAgICAgICAgICB0cmFuc2Zvcm1PcmlnaW46ICd0b3AnLFxyXG4gICAgICAgICAgZWFzZTogTGluZWFyLFxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9KTtcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGAke2ZpZWxkLmluZGV4fWNvbnRhaW5lcmApO1xyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYCR7ZmllbGQuaW5kZXh9Y29udGFpbmVyYCkgJiZcclxuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYCR7ZmllbGQuaW5kZXh9Y29udGFpbmVyYCkuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VsZWF2ZScsICgpID0+IHtcclxuICAgICAgICBnc2FwLnRvKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGAke2ZpZWxkLmluZGV4fXRhYmxlYCksIHtcclxuICAgICAgICAgIGhlaWdodDogJzAnLFxyXG4gICAgICAgICAgZHVyYXRpb246IDAuOCxcclxuICAgICAgICAgIHRyYW5zZm9ybU9yaWdpbjogJ3RvcCcsXHJcbiAgICAgICAgICBlYXNlOiBMaW5lYXIsXHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH0pO1xyXG4gIH0sIFtdKTtcclxuXHJcbiAgY29uc3QgW2FjdGl2ZUNoYXJ0VHlwZSwgc2V0QWN0aXZlQ2hhcnRUeXBlXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBjaGFydEZvcm1hdCA9IHVzZVJlZigpO1xyXG5cclxuICBjb25zb2xlLmxvZyhpbmRleCk7XHJcblxyXG4gIGNvbnN0IG9uQ2hhcnRDaGFuZ2UgPSAodmFsdWUpID0+IHtcclxuICAgIGlmICghYWN0aXZlQ2hhcnRUeXBlKSB7XHJcbiAgICAgIGdzYXAudG8oY2hhcnRGb3JtYXQuY3VycmVudCwge1xyXG4gICAgICAgIGhlaWdodDogMjE2LFxyXG4gICAgICAgIHRyYW5zZm9ybU9yaWdpbjogJ3RvcCcsXHJcbiAgICAgICAgZWFzZTogTGluZWFyLFxyXG4gICAgICB9KTtcclxuICAgICAgc2V0QWN0aXZlQ2hhcnRUeXBlKHRydWUpO1xyXG4gICAgfVxyXG4gICAgaWYgKGFjdGl2ZUNoYXJ0VHlwZSkge1xyXG4gICAgICBnc2FwLnRvKGNoYXJ0Rm9ybWF0LmN1cnJlbnQsIHtcclxuICAgICAgICBoZWlnaHQ6IDM2LFxyXG4gICAgICAgIHRyYW5zZm9ybU9yaWdpbjogJ2JvdHRvbScsXHJcbiAgICAgICAgZWFzZTogTGluZWFyLFxyXG4gICAgICB9KTtcclxuICAgICAgc2V0QWN0aXZlQ2hhcnRUeXBlKGZhbHNlKTtcclxuICAgIH1cclxuICAgIC8vIFRha2UgY3VycmVudCBhcnJheSBjb3B5XHJcbiAgICBpZiAodmFsdWUpIHtcclxuICAgICAgbGV0IG5ld0ZpZWxkc0FycmF5ID0gWy4uLnNlbGVjdGVkU2VjdGlvbi5maWVsZHNdO1xyXG4gICAgICBuZXdGaWVsZHNBcnJheVtjdXJyZW50SW5kZXhdID0ge1xyXG4gICAgICAgIHN0YWNrZWQ6IHNlbGVjdGVkU2VjdGlvbi5maWVsZHNbY3VycmVudEluZGV4XS5zdGFja2VkLFxyXG4gICAgICAgIGNoYXJ0VHlwZTogdmFsdWUsXHJcbiAgICAgICAgaW5kZXgsXHJcbiAgICAgICAgdHlwZTogJ2NoYXJ0JyxcclxuICAgICAgICBsYWJlbHM6IHNlbGVjdGVkU2VjdGlvbi5maWVsZHNbY3VycmVudEluZGV4XS5sYWJlbHMsXHJcbiAgICAgICAgZGF0YXNldDE6IHNlbGVjdGVkU2VjdGlvbi5maWVsZHNbY3VycmVudEluZGV4XS5kYXRhc2V0MSxcclxuICAgICAgICBkYXRhc2V0Mjogc2VsZWN0ZWRTZWN0aW9uLmZpZWxkc1tjdXJyZW50SW5kZXhdLmRhdGFzZXQyLFxyXG4gICAgICAgIGRhdGFzZXQzOiBzZWxlY3RlZFNlY3Rpb24uZmllbGRzW2N1cnJlbnRJbmRleF0uZGF0YXNldDMsXHJcbiAgICAgICAgZGF0YXNldDQ6IHNlbGVjdGVkU2VjdGlvbi5maWVsZHNbY3VycmVudEluZGV4XS5kYXRhc2V0NCxcclxuICAgICAgICBkYXRhc2V0NTogc2VsZWN0ZWRTZWN0aW9uLmZpZWxkc1tjdXJyZW50SW5kZXhdLmRhdGFzZXQ1LFxyXG4gICAgICAgIGRhdGFzZXQ2OiBzZWxlY3RlZFNlY3Rpb24uZmllbGRzW2N1cnJlbnRJbmRleF0uZGF0YXNldDYsXHJcbiAgICAgICAgLy8gRGF0YXNldCBsYWJlbHNcclxuICAgICAgICBkYXRhc2V0MUxhYmVsOiBzZWxlY3RlZFNlY3Rpb24uZmllbGRzW2N1cnJlbnRJbmRleF0uZGF0YXNldDFMYWJlbCxcclxuICAgICAgICBkYXRhc2V0MkxhYmVsOiBzZWxlY3RlZFNlY3Rpb24uZmllbGRzW2N1cnJlbnRJbmRleF0uZGF0YXNldDJMYWJlbCxcclxuICAgICAgICBkYXRhc2V0M0xhYmVsOiBzZWxlY3RlZFNlY3Rpb24uZmllbGRzW2N1cnJlbnRJbmRleF0uZGF0YXNldDNMYWJlbCxcclxuICAgICAgICBkYXRhc2V0NExhYmVsOiBzZWxlY3RlZFNlY3Rpb24uZmllbGRzW2N1cnJlbnRJbmRleF0uZGF0YXNldDRMYWJlbCxcclxuICAgICAgICBkYXRhc2V0NUxhYmVsOiBzZWxlY3RlZFNlY3Rpb24uZmllbGRzW2N1cnJlbnRJbmRleF0uZGF0YXNldDVMYWJlbCxcclxuICAgICAgICBkYXRhc2V0NkxhYmVsOiBzZWxlY3RlZFNlY3Rpb24uZmllbGRzW2N1cnJlbnRJbmRleF0uZGF0YXNldDZMYWJlbCxcclxuICAgICAgfTtcclxuXHJcbiAgICAgIGNvbnN0IG5ld1NlY3Rpb24gPSB7XHJcbiAgICAgICAgdGl0bGU6IHNlbGVjdGVkU2VjdGlvbi50aXRsZSxcclxuICAgICAgICBjcmVhdGVkQXQ6IHNlbGVjdGVkU2VjdGlvbi5jcmVhdGVkQXQsXHJcbiAgICAgICAgZmllbGRzOiBuZXdGaWVsZHNBcnJheSxcclxuICAgICAgICBpZDogc2VsZWN0ZWRTZWN0aW9uLmlkLFxyXG4gICAgICB9O1xyXG5cclxuICAgICAgLy8gYXdhaXQgdGhpcy5zZXRTdGF0ZSh7IHNlbGVjdGVkU2VjdGlvbjogbmV3U2VjdGlvbiB9KTtcclxuICAgICAgY2hhcnRUeXBlVXBkYXRlKG5ld1NlY3Rpb24pO1xyXG4gICAgICBjb25zb2xlLmxvZyhuZXdGaWVsZHNBcnJheSk7XHJcbiAgICAgIGNvbnNvbGUubG9nKHZhbHVlKTtcclxuXHJcbiAgICAgIC8vIFVwZGF0ZSBkYXRhYmFzZVxyXG4gICAgICBkYi5jb2xsZWN0aW9uKCdwcm9qZWN0cycpXHJcbiAgICAgICAgLmRvYyhwcm9qZWN0SWQpXHJcbiAgICAgICAgLmNvbGxlY3Rpb24oJ2J1c2luZXNzUGxhbicpXHJcbiAgICAgICAgLmRvYyhSb3V0ZXIucXVlcnkucHJvamVjdClcclxuICAgICAgICAuY29sbGVjdGlvbignaW5wdXRzJylcclxuICAgICAgICAvLyAuY29sbGVjdGlvbignY3VycmVudEJ1c2luZXNzUGxhbicpXHJcbiAgICAgICAgLy8gICAuZG9jKCdHcmN2aHlKd3ZsV1Z5MzFRc2l1ZG9RS2RLSTcyJylcclxuICAgICAgICAvLyAgIC5jb2xsZWN0aW9uKCdpbnB1dHMnKVxyXG4gICAgICAgIC5kb2Moc2VsZWN0ZWRTZWN0aW9uLmlkKVxyXG4gICAgICAgIC51cGRhdGUoe1xyXG4gICAgICAgICAgZmllbGRzOiBuZXdGaWVsZHNBcnJheSxcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICBjb25zdCBvblN0YWNrZWRDaGFuZ2UgPSAoc3RhY2tlZCkgPT4ge1xyXG4gICAgbGV0IG5ld0ZpZWxkc0FycmF5ID0gWy4uLnNlbGVjdGVkU2VjdGlvbi5maWVsZHNdO1xyXG4gICAgbmV3RmllbGRzQXJyYXlbY3VycmVudEluZGV4XSA9IHtcclxuICAgICAgc3RhY2tlZDogIXN0YWNrZWQsXHJcbiAgICAgIGNoYXJ0VHlwZTogc2VsZWN0ZWRTZWN0aW9uLmZpZWxkc1tjdXJyZW50SW5kZXhdLmNoYXJ0VHlwZSxcclxuICAgICAgaW5kZXgsXHJcbiAgICAgIHR5cGU6ICdjaGFydCcsXHJcbiAgICAgIGxhYmVsczogc2VsZWN0ZWRTZWN0aW9uLmZpZWxkc1tjdXJyZW50SW5kZXhdLmxhYmVscyxcclxuICAgICAgZGF0YXNldDE6IHNlbGVjdGVkU2VjdGlvbi5maWVsZHNbY3VycmVudEluZGV4XS5kYXRhc2V0MSxcclxuICAgICAgZGF0YXNldDI6IHNlbGVjdGVkU2VjdGlvbi5maWVsZHNbY3VycmVudEluZGV4XS5kYXRhc2V0MixcclxuICAgICAgZGF0YXNldDM6IHNlbGVjdGVkU2VjdGlvbi5maWVsZHNbY3VycmVudEluZGV4XS5kYXRhc2V0MyxcclxuICAgICAgZGF0YXNldDQ6IHNlbGVjdGVkU2VjdGlvbi5maWVsZHNbY3VycmVudEluZGV4XS5kYXRhc2V0NCxcclxuICAgICAgZGF0YXNldDU6IHNlbGVjdGVkU2VjdGlvbi5maWVsZHNbY3VycmVudEluZGV4XS5kYXRhc2V0NSxcclxuICAgICAgZGF0YXNldDY6IHNlbGVjdGVkU2VjdGlvbi5maWVsZHNbY3VycmVudEluZGV4XS5kYXRhc2V0NixcclxuICAgICAgLy8gRGF0YXNldCBsYWJlbHNcclxuICAgICAgZGF0YXNldDFMYWJlbDogc2VsZWN0ZWRTZWN0aW9uLmZpZWxkc1tjdXJyZW50SW5kZXhdLmRhdGFzZXQxTGFiZWwsXHJcbiAgICAgIGRhdGFzZXQyTGFiZWw6IHNlbGVjdGVkU2VjdGlvbi5maWVsZHNbY3VycmVudEluZGV4XS5kYXRhc2V0MkxhYmVsLFxyXG4gICAgICBkYXRhc2V0M0xhYmVsOiBzZWxlY3RlZFNlY3Rpb24uZmllbGRzW2N1cnJlbnRJbmRleF0uZGF0YXNldDNMYWJlbCxcclxuICAgICAgZGF0YXNldDRMYWJlbDogc2VsZWN0ZWRTZWN0aW9uLmZpZWxkc1tjdXJyZW50SW5kZXhdLmRhdGFzZXQ0TGFiZWwsXHJcbiAgICAgIGRhdGFzZXQ1TGFiZWw6IHNlbGVjdGVkU2VjdGlvbi5maWVsZHNbY3VycmVudEluZGV4XS5kYXRhc2V0NUxhYmVsLFxyXG4gICAgICBkYXRhc2V0NkxhYmVsOiBzZWxlY3RlZFNlY3Rpb24uZmllbGRzW2N1cnJlbnRJbmRleF0uZGF0YXNldDZMYWJlbCxcclxuICAgIH07XHJcblxyXG4gICAgY29uc3QgbmV3U2VjdGlvbiA9IHtcclxuICAgICAgdGl0bGU6IHNlbGVjdGVkU2VjdGlvbi50aXRsZSxcclxuICAgICAgY3JlYXRlZEF0OiBzZWxlY3RlZFNlY3Rpb24uY3JlYXRlZEF0LFxyXG4gICAgICBmaWVsZHM6IG5ld0ZpZWxkc0FycmF5LFxyXG4gICAgICBpZDogc2VsZWN0ZWRTZWN0aW9uLmlkLFxyXG4gICAgfTtcclxuXHJcbiAgICAvLyBhd2FpdCB0aGlzLnNldFN0YXRlKHsgc2VsZWN0ZWRTZWN0aW9uOiBuZXdTZWN0aW9uIH0pO1xyXG4gICAgY2hhcnRUeXBlVXBkYXRlKG5ld1NlY3Rpb24pO1xyXG4gICAgY29uc29sZS5sb2cobmV3RmllbGRzQXJyYXkpO1xyXG4gICAgY29uc29sZS5sb2codmFsdWUpO1xyXG5cclxuICAgIC8vIFVwZGF0ZSBkYXRhYmFzZVxyXG4gICAgZGIuY29sbGVjdGlvbigncHJvamVjdHMnKVxyXG4gICAgICAuZG9jKHByb2plY3RJZClcclxuICAgICAgLmNvbGxlY3Rpb24oJ2J1c2luZXNzUGxhbicpXHJcbiAgICAgIC5kb2MoUm91dGVyLnF1ZXJ5LnByb2plY3QpXHJcbiAgICAgIC5jb2xsZWN0aW9uKCdpbnB1dHMnKVxyXG4gICAgICAvLyAuY29sbGVjdGlvbignY3VycmVudEJ1c2luZXNzUGxhbicpXHJcbiAgICAgIC8vICAgLmRvYygnR3Jjdmh5Snd2bFdWeTMxUXNpdWRvUUtkS0k3MicpXHJcbiAgICAgIC8vICAgLmNvbGxlY3Rpb24oJ2lucHV0cycpXHJcbiAgICAgIC5kb2Moc2VsZWN0ZWRTZWN0aW9uLmlkKVxyXG4gICAgICAudXBkYXRlKHtcclxuICAgICAgICBmaWVsZHM6IG5ld0ZpZWxkc0FycmF5LFxyXG4gICAgICB9KTtcclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiByZWY9e3Byb3ZpZGVkLmlubmVyUmVmfSB7Li4ucHJvdmlkZWQuZHJhZ2dhYmxlUHJvcHN9IGNsYXNzTmFtZT1cInctZnVsbCBncmlkIGdyaWQtY29scy0xMmZyIGp1c3RpZnktaXRlbXMtY2VudGVyIGl0ZW1zLWNlbnRlciBtdC02XCI+XHJcbiAgICAgIDxkaXZcclxuICAgICAgICBpZD17YCR7ZmllbGQuaW5kZXh9Y29udGFpbmVyYH1cclxuICAgICAgICBjbGFzc05hbWU9XCJjb2wtc3RhcnQtMiBjb2wtZW5kLTEyIHJlbGF0aXZlIGZsZXggZmxleC1jb2wgaC1mdWxsIHctZnVsbCBmbGV4IHB4LTggcHktOCByb3VuZGVkLTJ4bCBiZy13aGl0ZSBkYXJrOmJnLWJhY2tncm91bmRcIlxyXG4gICAgICA+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGwgaC1mdWxsXCI+XHJcbiAgICAgICAgICA8ZGl2IGlkPXtgJHtmaWVsZC5pbmRleH1jaGFydENvbnRhaW5lcmB9PjwvZGl2PlxyXG4gICAgICAgICAgey8qIDxjYW52YXMgaWQ9e2ZpZWxkLmluZGV4fSByZWY9e2NoYXJ0UmVmfSBjbGFzc05hbWU9J210LTQnPjwvY2FudmFzPiAqL31cclxuICAgICAgICAgIHsvKiA8aHIgY2xhc3NOYW1lPSd0ZXh0LXByaW1hcnkgbXQtNCcgLz4gKi99XHJcbiAgICAgICAgICA8ZGl2IGlkPXtgJHtmaWVsZC5pbmRleH10YWJsZWB9IHJlZj17dGFibGVSZWZ9IGNsYXNzTmFtZT1cInctZnVsbCBvdmVyZmxvdy1hdXRvIGgtMFwiPlxyXG4gICAgICAgICAgICA8dGFibGUgY2xhc3M9XCJjb250ZW50LXRhYmxlXCI+XHJcbiAgICAgICAgICAgICAgPHRoZWFkPlxyXG4gICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICA8dGg+PC90aD5cclxuICAgICAgICAgICAgICAgICAgPHRoPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBvbkxhYmVsQ2hhbmdlMShlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17bGFiZWwxfVxyXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy1mdWxsIGJnLXNlY29uZEJhY2tncm91bmQgZm9jdXM6b3V0bGluZS1ub25lXCJcclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICA8L3RoPlxyXG4gICAgICAgICAgICAgICAgICA8dGg+XHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IG9uTGFiZWxDaGFuZ2UyKGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtsYWJlbDJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LWZ1bGwgYmctc2Vjb25kQmFja2dyb3VuZCBmb2N1czpvdXRsaW5lLW5vbmVcIlxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgIDwvdGg+XHJcbiAgICAgICAgICAgICAgICAgIDx0aD5cclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gb25MYWJlbENoYW5nZTMoZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2xhYmVsM31cclxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInctZnVsbCBiZy1zZWNvbmRCYWNrZ3JvdW5kIGZvY3VzOm91dGxpbmUtbm9uZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgPC90aD5cclxuICAgICAgICAgICAgICAgICAgPHRoPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBvbkxhYmVsQ2hhbmdlNChlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17bGFiZWw0fVxyXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy1mdWxsIGJnLXNlY29uZEJhY2tncm91bmQgZm9jdXM6b3V0bGluZS1ub25lXCJcclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICA8L3RoPlxyXG4gICAgICAgICAgICAgICAgICA8dGg+XHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IG9uTGFiZWxDaGFuZ2U1KGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtsYWJlbDV9XHJcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LWZ1bGwgYmctc2Vjb25kQmFja2dyb3VuZCBmb2N1czpvdXRsaW5lLW5vbmVcIlxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgIDwvdGg+XHJcbiAgICAgICAgICAgICAgICAgIDx0aD5cclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gb25MYWJlbENoYW5nZTYoZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2xhYmVsNn1cclxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInctZnVsbCBiZy1zZWNvbmRCYWNrZ3JvdW5kIGZvY3VzOm91dGxpbmUtbm9uZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgPC90aD5cclxuICAgICAgICAgICAgICAgICAgPHRoPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBvbkxhYmVsQ2hhbmdlNyhlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17bGFiZWw3fVxyXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy1mdWxsIGJnLXNlY29uZEJhY2tncm91bmQgZm9jdXM6b3V0bGluZS1ub25lXCJcclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICA8L3RoPlxyXG4gICAgICAgICAgICAgICAgICA8dGg+XHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IG9uTGFiZWxDaGFuZ2U4KGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtsYWJlbDh9XHJcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LWZ1bGwgYmctc2Vjb25kQmFja2dyb3VuZCBmb2N1czpvdXRsaW5lLW5vbmVcIlxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgIDwvdGg+XHJcbiAgICAgICAgICAgICAgICAgIDx0aD5cclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gb25MYWJlbENoYW5nZTkoZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2xhYmVsOX1cclxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInctZnVsbCBiZy1zZWNvbmRCYWNrZ3JvdW5kIGZvY3VzOm91dGxpbmUtbm9uZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgPC90aD5cclxuICAgICAgICAgICAgICAgICAgPHRoPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBvbkxhYmVsQ2hhbmdlMTAoZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2xhYmVsMTB9XHJcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LWZ1bGwgYmctc2Vjb25kQmFja2dyb3VuZCBmb2N1czpvdXRsaW5lLW5vbmVcIlxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgIDwvdGg+XHJcbiAgICAgICAgICAgICAgICAgIDx0aD5cclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gb25MYWJlbENoYW5nZTExKGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtsYWJlbDExfVxyXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy1mdWxsIGJnLXNlY29uZEJhY2tncm91bmQgZm9jdXM6b3V0bGluZS1ub25lXCJcclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICA8L3RoPlxyXG4gICAgICAgICAgICAgICAgICA8dGg+XHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IG9uTGFiZWxDaGFuZ2UxMihlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17bGFiZWwxMn1cclxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInctZnVsbCBiZy1zZWNvbmRCYWNrZ3JvdW5kIGZvY3VzOm91dGxpbmUtbm9uZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgPC90aD5cclxuICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgPC90aGVhZD5cclxuICAgICAgICAgICAgICA8dGJvZHk+XHJcbiAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJsZWZ0LWJsb2NrXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IG9uRGF0YXNldExhYmVsQ2hhbmdlMShlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17ZGF0YXNldDFMYWJlbH1cclxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInctZnVsbCBiZy1zZWNvbmRCYWNrZ3JvdW5kIGZvY3VzOm91dGxpbmUtbm9uZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgPjwvaW5wdXQ+XHJcbiAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgIDx0ZD5cclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gb25EYXRhc2V0MVZhbHVlMUNoYW5nZShlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17ZGF0YXNldDFWYWx1ZTF9XHJcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LWZ1bGwgYmctd2hpdGUgZm9jdXM6b3V0bGluZS1ub25lXCJcclxuICAgICAgICAgICAgICAgICAgICA+PC9pbnB1dD5cclxuICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgPHRkPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBvbkRhdGFzZXQxVmFsdWUyQ2hhbmdlKGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtkYXRhc2V0MVZhbHVlMn1cclxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInctZnVsbCBiZy13aGl0ZSBmb2N1czpvdXRsaW5lLW5vbmVcIlxyXG4gICAgICAgICAgICAgICAgICAgID48L2lucHV0PlxyXG4gICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICA8dGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IG9uRGF0YXNldDFWYWx1ZTNDaGFuZ2UoZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2RhdGFzZXQxVmFsdWUzfVxyXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy1mdWxsIGJnLXdoaXRlIGZvY3VzOm91dGxpbmUtbm9uZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgPjwvaW5wdXQ+XHJcbiAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgIDx0ZD5cclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gb25EYXRhc2V0MVZhbHVlNENoYW5nZShlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17ZGF0YXNldDFWYWx1ZTR9XHJcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LWZ1bGwgYmctd2hpdGUgZm9jdXM6b3V0bGluZS1ub25lXCJcclxuICAgICAgICAgICAgICAgICAgICA+PC9pbnB1dD5cclxuICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgPHRkPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBvbkRhdGFzZXQxVmFsdWU1Q2hhbmdlKGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtkYXRhc2V0MVZhbHVlNX1cclxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInctZnVsbCBiZy13aGl0ZSBmb2N1czpvdXRsaW5lLW5vbmVcIlxyXG4gICAgICAgICAgICAgICAgICAgID48L2lucHV0PlxyXG4gICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICA8dGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IG9uRGF0YXNldDFWYWx1ZTZDaGFuZ2UoZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2RhdGFzZXQxVmFsdWU2fVxyXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy1mdWxsIGJnLXdoaXRlIGZvY3VzOm91dGxpbmUtbm9uZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgPjwvaW5wdXQ+XHJcbiAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgIDx0ZD5cclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gb25EYXRhc2V0MVZhbHVlN0NoYW5nZShlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17ZGF0YXNldDFWYWx1ZTd9XHJcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LWZ1bGwgYmctd2hpdGUgZm9jdXM6b3V0bGluZS1ub25lXCJcclxuICAgICAgICAgICAgICAgICAgICA+PC9pbnB1dD5cclxuICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgPHRkPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBvbkRhdGFzZXQxVmFsdWU4Q2hhbmdlKGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtkYXRhc2V0MVZhbHVlOH1cclxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInctZnVsbCBiZy13aGl0ZSBmb2N1czpvdXRsaW5lLW5vbmVcIlxyXG4gICAgICAgICAgICAgICAgICAgID48L2lucHV0PlxyXG4gICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICA8dGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IG9uRGF0YXNldDFWYWx1ZTlDaGFuZ2UoZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2RhdGFzZXQxVmFsdWU5fVxyXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy1mdWxsIGJnLXdoaXRlIGZvY3VzOm91dGxpbmUtbm9uZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgPjwvaW5wdXQ+XHJcbiAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgIDx0ZD5cclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gb25EYXRhc2V0MVZhbHVlMTBDaGFuZ2UoZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2RhdGFzZXQxVmFsdWUxMH1cclxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInctZnVsbCBiZy13aGl0ZSBmb2N1czpvdXRsaW5lLW5vbmVcIlxyXG4gICAgICAgICAgICAgICAgICAgID48L2lucHV0PlxyXG4gICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICA8dGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IG9uRGF0YXNldDFWYWx1ZTExQ2hhbmdlKGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtkYXRhc2V0MVZhbHVlMTF9XHJcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LWZ1bGwgYmctd2hpdGUgZm9jdXM6b3V0bGluZS1ub25lXCJcclxuICAgICAgICAgICAgICAgICAgICA+PC9pbnB1dD5cclxuICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgPHRkPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBvbkRhdGFzZXQxVmFsdWUxMkNoYW5nZShlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17ZGF0YXNldDFWYWx1ZTEyfVxyXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy1mdWxsIGJnLXdoaXRlIGZvY3VzOm91dGxpbmUtbm9uZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgPjwvaW5wdXQ+XHJcbiAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwibGVmdC1ibG9ja1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBvbkRhdGFzZXRMYWJlbENoYW5nZTIoZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2RhdGFzZXQyTGFiZWx9XHJcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LWZ1bGwgYmctc2Vjb25kQmFja2dyb3VuZCBmb2N1czpvdXRsaW5lLW5vbmVcIlxyXG4gICAgICAgICAgICAgICAgICAgID48L2lucHV0PlxyXG4gICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICA8dGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IG9uRGF0YXNldDJWYWx1ZTFDaGFuZ2UoZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2RhdGFzZXQyVmFsdWUxfVxyXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy1mdWxsIGJnLXdoaXRlIGZvY3VzOm91dGxpbmUtbm9uZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgPjwvaW5wdXQ+XHJcbiAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgIDx0ZD5cclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gb25EYXRhc2V0MlZhbHVlMkNoYW5nZShlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17ZGF0YXNldDJWYWx1ZTJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LWZ1bGwgYmctd2hpdGUgZm9jdXM6b3V0bGluZS1ub25lXCJcclxuICAgICAgICAgICAgICAgICAgICA+PC9pbnB1dD5cclxuICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgPHRkPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBvbkRhdGFzZXQyVmFsdWUzQ2hhbmdlKGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtkYXRhc2V0MlZhbHVlM31cclxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInctZnVsbCBiZy13aGl0ZSBmb2N1czpvdXRsaW5lLW5vbmVcIlxyXG4gICAgICAgICAgICAgICAgICAgID48L2lucHV0PlxyXG4gICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICA8dGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IG9uRGF0YXNldDJWYWx1ZTRDaGFuZ2UoZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2RhdGFzZXQyVmFsdWU0fVxyXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy1mdWxsIGJnLXdoaXRlIGZvY3VzOm91dGxpbmUtbm9uZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgPjwvaW5wdXQ+XHJcbiAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgIDx0ZD5cclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gb25EYXRhc2V0MlZhbHVlNUNoYW5nZShlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17ZGF0YXNldDJWYWx1ZTV9XHJcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LWZ1bGwgYmctd2hpdGUgZm9jdXM6b3V0bGluZS1ub25lXCJcclxuICAgICAgICAgICAgICAgICAgICA+PC9pbnB1dD5cclxuICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgPHRkPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBvbkRhdGFzZXQyVmFsdWU2Q2hhbmdlKGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtkYXRhc2V0MlZhbHVlNn1cclxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInctZnVsbCBiZy13aGl0ZSBmb2N1czpvdXRsaW5lLW5vbmVcIlxyXG4gICAgICAgICAgICAgICAgICAgID48L2lucHV0PlxyXG4gICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICA8dGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IG9uRGF0YXNldDJWYWx1ZTdDaGFuZ2UoZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2RhdGFzZXQyVmFsdWU3fVxyXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy1mdWxsIGJnLXdoaXRlIGZvY3VzOm91dGxpbmUtbm9uZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgPjwvaW5wdXQ+XHJcbiAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgIDx0ZD5cclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gb25EYXRhc2V0MlZhbHVlOENoYW5nZShlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17ZGF0YXNldDJWYWx1ZTh9XHJcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LWZ1bGwgYmctd2hpdGUgZm9jdXM6b3V0bGluZS1ub25lXCJcclxuICAgICAgICAgICAgICAgICAgICA+PC9pbnB1dD5cclxuICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgPHRkPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBvbkRhdGFzZXQyVmFsdWU5Q2hhbmdlKGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtkYXRhc2V0MlZhbHVlOX1cclxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInctZnVsbCBiZy13aGl0ZSBmb2N1czpvdXRsaW5lLW5vbmVcIlxyXG4gICAgICAgICAgICAgICAgICAgID48L2lucHV0PlxyXG4gICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICA8dGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IG9uRGF0YXNldDJWYWx1ZTEwQ2hhbmdlKGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtkYXRhc2V0MlZhbHVlMTB9XHJcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LWZ1bGwgYmctd2hpdGUgZm9jdXM6b3V0bGluZS1ub25lXCJcclxuICAgICAgICAgICAgICAgICAgICA+PC9pbnB1dD5cclxuICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgPHRkPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBvbkRhdGFzZXQyVmFsdWUxMUNoYW5nZShlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17ZGF0YXNldDJWYWx1ZTExfVxyXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy1mdWxsIGJnLXdoaXRlIGZvY3VzOm91dGxpbmUtbm9uZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgPjwvaW5wdXQ+XHJcbiAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgIDx0ZD5cclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gb25EYXRhc2V0MlZhbHVlMTJDaGFuZ2UoZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2RhdGFzZXQyVmFsdWUxMn1cclxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInctZnVsbCBiZy13aGl0ZSBmb2N1czpvdXRsaW5lLW5vbmVcIlxyXG4gICAgICAgICAgICAgICAgICAgID48L2lucHV0PlxyXG4gICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cImxlZnQtYmxvY2tcIj5cclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gb25EYXRhc2V0TGFiZWxDaGFuZ2UzKGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtkYXRhc2V0M0xhYmVsfVxyXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy1mdWxsIGJnLXNlY29uZEJhY2tncm91bmQgZm9jdXM6b3V0bGluZS1ub25lXCJcclxuICAgICAgICAgICAgICAgICAgICA+PC9pbnB1dD5cclxuICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgPHRkPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBvbkRhdGFzZXQzVmFsdWUxQ2hhbmdlKGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtkYXRhc2V0M1ZhbHVlMX1cclxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInctZnVsbCBiZy13aGl0ZSBmb2N1czpvdXRsaW5lLW5vbmVcIlxyXG4gICAgICAgICAgICAgICAgICAgID48L2lucHV0PlxyXG4gICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICA8dGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IG9uRGF0YXNldDNWYWx1ZTJDaGFuZ2UoZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2RhdGFzZXQzVmFsdWUyfVxyXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy1mdWxsIGJnLXdoaXRlIGZvY3VzOm91dGxpbmUtbm9uZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgPjwvaW5wdXQ+XHJcbiAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgIDx0ZD5cclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gb25EYXRhc2V0M1ZhbHVlM0NoYW5nZShlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17ZGF0YXNldDNWYWx1ZTN9XHJcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LWZ1bGwgYmctd2hpdGUgZm9jdXM6b3V0bGluZS1ub25lXCJcclxuICAgICAgICAgICAgICAgICAgICA+PC9pbnB1dD5cclxuICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgPHRkPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBvbkRhdGFzZXQzVmFsdWU0Q2hhbmdlKGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtkYXRhc2V0M1ZhbHVlNH1cclxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInctZnVsbCBiZy13aGl0ZSBmb2N1czpvdXRsaW5lLW5vbmVcIlxyXG4gICAgICAgICAgICAgICAgICAgID48L2lucHV0PlxyXG4gICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICA8dGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IG9uRGF0YXNldDNWYWx1ZTVDaGFuZ2UoZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2RhdGFzZXQzVmFsdWU1fVxyXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy1mdWxsIGJnLXdoaXRlIGZvY3VzOm91dGxpbmUtbm9uZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgPjwvaW5wdXQ+XHJcbiAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgIDx0ZD5cclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gb25EYXRhc2V0M1ZhbHVlNkNoYW5nZShlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17ZGF0YXNldDNWYWx1ZTZ9XHJcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LWZ1bGwgYmctd2hpdGUgZm9jdXM6b3V0bGluZS1ub25lXCJcclxuICAgICAgICAgICAgICAgICAgICA+PC9pbnB1dD5cclxuICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgPHRkPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBvbkRhdGFzZXQzVmFsdWU3Q2hhbmdlKGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtkYXRhc2V0M1ZhbHVlN31cclxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInctZnVsbCBiZy13aGl0ZSBmb2N1czpvdXRsaW5lLW5vbmVcIlxyXG4gICAgICAgICAgICAgICAgICAgID48L2lucHV0PlxyXG4gICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICA8dGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IG9uRGF0YXNldDNWYWx1ZThDaGFuZ2UoZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2RhdGFzZXQzVmFsdWU4fVxyXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy1mdWxsIGJnLXdoaXRlIGZvY3VzOm91dGxpbmUtbm9uZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgPjwvaW5wdXQ+XHJcbiAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgIDx0ZD5cclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gb25EYXRhc2V0M1ZhbHVlOUNoYW5nZShlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17ZGF0YXNldDNWYWx1ZTl9XHJcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LWZ1bGwgYmctd2hpdGUgZm9jdXM6b3V0bGluZS1ub25lXCJcclxuICAgICAgICAgICAgICAgICAgICA+PC9pbnB1dD5cclxuICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgPHRkPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBvbkRhdGFzZXQzVmFsdWUxMENoYW5nZShlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17ZGF0YXNldDNWYWx1ZTEwfVxyXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy1mdWxsIGJnLXdoaXRlIGZvY3VzOm91dGxpbmUtbm9uZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgPjwvaW5wdXQ+XHJcbiAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgIDx0ZD5cclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gb25EYXRhc2V0M1ZhbHVlMTFDaGFuZ2UoZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2RhdGFzZXQzVmFsdWUxMX1cclxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInctZnVsbCBiZy13aGl0ZSBmb2N1czpvdXRsaW5lLW5vbmVcIlxyXG4gICAgICAgICAgICAgICAgICAgID48L2lucHV0PlxyXG4gICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICA8dGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IG9uRGF0YXNldDNWYWx1ZTEyQ2hhbmdlKGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtkYXRhc2V0M1ZhbHVlMTJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LWZ1bGwgYmctd2hpdGUgZm9jdXM6b3V0bGluZS1ub25lXCJcclxuICAgICAgICAgICAgICAgICAgICA+PC9pbnB1dD5cclxuICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJsZWZ0LWJsb2NrXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IG9uRGF0YXNldExhYmVsQ2hhbmdlNChlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17ZGF0YXNldDRMYWJlbH1cclxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInctZnVsbCBiZy1zZWNvbmRCYWNrZ3JvdW5kIGZvY3VzOm91dGxpbmUtbm9uZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgPjwvaW5wdXQ+XHJcbiAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgIDx0ZD5cclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gb25EYXRhc2V0NFZhbHVlMUNoYW5nZShlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17ZGF0YXNldDRWYWx1ZTF9XHJcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LWZ1bGwgYmctd2hpdGUgZm9jdXM6b3V0bGluZS1ub25lXCJcclxuICAgICAgICAgICAgICAgICAgICA+PC9pbnB1dD5cclxuICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgPHRkPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBvbkRhdGFzZXQ0VmFsdWUyQ2hhbmdlKGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtkYXRhc2V0NFZhbHVlMn1cclxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInctZnVsbCBiZy13aGl0ZSBmb2N1czpvdXRsaW5lLW5vbmVcIlxyXG4gICAgICAgICAgICAgICAgICAgID48L2lucHV0PlxyXG4gICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICA8dGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IG9uRGF0YXNldDRWYWx1ZTNDaGFuZ2UoZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2RhdGFzZXQ0VmFsdWUzfVxyXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy1mdWxsIGJnLXdoaXRlIGZvY3VzOm91dGxpbmUtbm9uZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgPjwvaW5wdXQ+XHJcbiAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgIDx0ZD5cclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gb25EYXRhc2V0NFZhbHVlNENoYW5nZShlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17ZGF0YXNldDRWYWx1ZTR9XHJcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LWZ1bGwgYmctd2hpdGUgZm9jdXM6b3V0bGluZS1ub25lXCJcclxuICAgICAgICAgICAgICAgICAgICA+PC9pbnB1dD5cclxuICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgPHRkPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBvbkRhdGFzZXQ0VmFsdWU1Q2hhbmdlKGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtkYXRhc2V0NFZhbHVlNX1cclxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInctZnVsbCBiZy13aGl0ZSBmb2N1czpvdXRsaW5lLW5vbmVcIlxyXG4gICAgICAgICAgICAgICAgICAgID48L2lucHV0PlxyXG4gICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICA8dGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IG9uRGF0YXNldDRWYWx1ZTZDaGFuZ2UoZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2RhdGFzZXQ0VmFsdWU2fVxyXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy1mdWxsIGJnLXdoaXRlIGZvY3VzOm91dGxpbmUtbm9uZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgPjwvaW5wdXQ+XHJcbiAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgIDx0ZD5cclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gb25EYXRhc2V0NFZhbHVlN0NoYW5nZShlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17ZGF0YXNldDRWYWx1ZTd9XHJcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LWZ1bGwgYmctd2hpdGUgZm9jdXM6b3V0bGluZS1ub25lXCJcclxuICAgICAgICAgICAgICAgICAgICA+PC9pbnB1dD5cclxuICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgPHRkPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBvbkRhdGFzZXQ0VmFsdWU4Q2hhbmdlKGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtkYXRhc2V0NFZhbHVlOH1cclxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInctZnVsbCBiZy13aGl0ZSBmb2N1czpvdXRsaW5lLW5vbmVcIlxyXG4gICAgICAgICAgICAgICAgICAgID48L2lucHV0PlxyXG4gICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICA8dGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IG9uRGF0YXNldDRWYWx1ZTlDaGFuZ2UoZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2RhdGFzZXQ0VmFsdWU5fVxyXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy1mdWxsIGJnLXdoaXRlIGZvY3VzOm91dGxpbmUtbm9uZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgPjwvaW5wdXQ+XHJcbiAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgIDx0ZD5cclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gb25EYXRhc2V0NFZhbHVlMTBDaGFuZ2UoZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2RhdGFzZXQ0VmFsdWUxMH1cclxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInctZnVsbCBiZy13aGl0ZSBmb2N1czpvdXRsaW5lLW5vbmVcIlxyXG4gICAgICAgICAgICAgICAgICAgID48L2lucHV0PlxyXG4gICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICA8dGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IG9uRGF0YXNldDRWYWx1ZTExQ2hhbmdlKGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtkYXRhc2V0NFZhbHVlMTF9XHJcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LWZ1bGwgYmctd2hpdGUgZm9jdXM6b3V0bGluZS1ub25lXCJcclxuICAgICAgICAgICAgICAgICAgICA+PC9pbnB1dD5cclxuICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgPHRkPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBvbkRhdGFzZXQ0VmFsdWUxMkNoYW5nZShlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17ZGF0YXNldDRWYWx1ZTEyfVxyXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy1mdWxsIGJnLXdoaXRlIGZvY3VzOm91dGxpbmUtbm9uZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgPjwvaW5wdXQ+XHJcbiAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwibGVmdC1ibG9ja1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBvbkRhdGFzZXRMYWJlbENoYW5nZTUoZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2RhdGFzZXQ1TGFiZWx9XHJcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LWZ1bGwgYmctc2Vjb25kQmFja2dyb3VuZCBmb2N1czpvdXRsaW5lLW5vbmVcIlxyXG4gICAgICAgICAgICAgICAgICAgID48L2lucHV0PlxyXG4gICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICA8dGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IG9uRGF0YXNldDVWYWx1ZTFDaGFuZ2UoZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2RhdGFzZXQ1VmFsdWUxfVxyXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy1mdWxsIGJnLXdoaXRlIGZvY3VzOm91dGxpbmUtbm9uZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgPjwvaW5wdXQ+XHJcbiAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgIDx0ZD5cclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gb25EYXRhc2V0NVZhbHVlMkNoYW5nZShlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17ZGF0YXNldDVWYWx1ZTJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LWZ1bGwgYmctd2hpdGUgZm9jdXM6b3V0bGluZS1ub25lXCJcclxuICAgICAgICAgICAgICAgICAgICA+PC9pbnB1dD5cclxuICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgPHRkPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBvbkRhdGFzZXQ1VmFsdWUzQ2hhbmdlKGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtkYXRhc2V0NVZhbHVlM31cclxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInctZnVsbCBiZy13aGl0ZSBmb2N1czpvdXRsaW5lLW5vbmVcIlxyXG4gICAgICAgICAgICAgICAgICAgID48L2lucHV0PlxyXG4gICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICA8dGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IG9uRGF0YXNldDVWYWx1ZTRDaGFuZ2UoZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2RhdGFzZXQ1VmFsdWU0fVxyXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy1mdWxsIGJnLXdoaXRlIGZvY3VzOm91dGxpbmUtbm9uZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgPjwvaW5wdXQ+XHJcbiAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgIDx0ZD5cclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gb25EYXRhc2V0NVZhbHVlNUNoYW5nZShlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17ZGF0YXNldDVWYWx1ZTV9XHJcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LWZ1bGwgYmctd2hpdGUgZm9jdXM6b3V0bGluZS1ub25lXCJcclxuICAgICAgICAgICAgICAgICAgICA+PC9pbnB1dD5cclxuICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgPHRkPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBvbkRhdGFzZXQ1VmFsdWU2Q2hhbmdlKGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtkYXRhc2V0NVZhbHVlNn1cclxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInctZnVsbCBiZy13aGl0ZSBmb2N1czpvdXRsaW5lLW5vbmVcIlxyXG4gICAgICAgICAgICAgICAgICAgID48L2lucHV0PlxyXG4gICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICA8dGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IG9uRGF0YXNldDVWYWx1ZTdDaGFuZ2UoZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2RhdGFzZXQ1VmFsdWU3fVxyXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy1mdWxsIGJnLXdoaXRlIGZvY3VzOm91dGxpbmUtbm9uZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgPjwvaW5wdXQ+XHJcbiAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgIDx0ZD5cclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gb25EYXRhc2V0NVZhbHVlOENoYW5nZShlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17ZGF0YXNldDVWYWx1ZTh9XHJcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LWZ1bGwgYmctd2hpdGUgZm9jdXM6b3V0bGluZS1ub25lXCJcclxuICAgICAgICAgICAgICAgICAgICA+PC9pbnB1dD5cclxuICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgPHRkPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBvbkRhdGFzZXQ1VmFsdWU5Q2hhbmdlKGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtkYXRhc2V0NVZhbHVlOX1cclxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInctZnVsbCBiZy13aGl0ZSBmb2N1czpvdXRsaW5lLW5vbmVcIlxyXG4gICAgICAgICAgICAgICAgICAgID48L2lucHV0PlxyXG4gICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICA8dGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IG9uRGF0YXNldDVWYWx1ZTEwQ2hhbmdlKGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtkYXRhc2V0NVZhbHVlMTB9XHJcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LWZ1bGwgYmctd2hpdGUgZm9jdXM6b3V0bGluZS1ub25lXCJcclxuICAgICAgICAgICAgICAgICAgICA+PC9pbnB1dD5cclxuICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgPHRkPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBvbkRhdGFzZXQ1VmFsdWUxMUNoYW5nZShlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17ZGF0YXNldDVWYWx1ZTExfVxyXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy1mdWxsIGJnLXdoaXRlIGZvY3VzOm91dGxpbmUtbm9uZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgPjwvaW5wdXQ+XHJcbiAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgIDx0ZD5cclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gb25EYXRhc2V0NVZhbHVlMTJDaGFuZ2UoZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2RhdGFzZXQ1VmFsdWUxMn1cclxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInctZnVsbCBiZy13aGl0ZSBmb2N1czpvdXRsaW5lLW5vbmVcIlxyXG4gICAgICAgICAgICAgICAgICAgID48L2lucHV0PlxyXG4gICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cImxlZnQtYmxvY2stcmFkaXVzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IG9uRGF0YXNldExhYmVsQ2hhbmdlNihlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17ZGF0YXNldDZMYWJlbH1cclxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInctZnVsbCBiZy1zZWNvbmRCYWNrZ3JvdW5kIGZvY3VzOm91dGxpbmUtbm9uZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgPjwvaW5wdXQ+XHJcbiAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgIDx0ZD5cclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gb25EYXRhc2V0NlZhbHVlMUNoYW5nZShlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17ZGF0YXNldDZWYWx1ZTF9XHJcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LWZ1bGwgYmctd2hpdGUgZm9jdXM6b3V0bGluZS1ub25lXCJcclxuICAgICAgICAgICAgICAgICAgICA+PC9pbnB1dD5cclxuICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgPHRkPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBvbkRhdGFzZXQ2VmFsdWUyQ2hhbmdlKGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtkYXRhc2V0NlZhbHVlMn1cclxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInctZnVsbCBiZy13aGl0ZSBmb2N1czpvdXRsaW5lLW5vbmVcIlxyXG4gICAgICAgICAgICAgICAgICAgID48L2lucHV0PlxyXG4gICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICA8dGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IG9uRGF0YXNldDZWYWx1ZTNDaGFuZ2UoZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2RhdGFzZXQ2VmFsdWUzfVxyXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy1mdWxsIGJnLXdoaXRlIGZvY3VzOm91dGxpbmUtbm9uZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgPjwvaW5wdXQ+XHJcbiAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgIDx0ZD5cclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gb25EYXRhc2V0NlZhbHVlNENoYW5nZShlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17ZGF0YXNldDZWYWx1ZTR9XHJcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LWZ1bGwgYmctd2hpdGUgZm9jdXM6b3V0bGluZS1ub25lXCJcclxuICAgICAgICAgICAgICAgICAgICA+PC9pbnB1dD5cclxuICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgPHRkPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBvbkRhdGFzZXQ2VmFsdWU1Q2hhbmdlKGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtkYXRhc2V0NlZhbHVlNX1cclxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInctZnVsbCBiZy13aGl0ZSBmb2N1czpvdXRsaW5lLW5vbmVcIlxyXG4gICAgICAgICAgICAgICAgICAgID48L2lucHV0PlxyXG4gICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICA8dGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IG9uRGF0YXNldDZWYWx1ZTZDaGFuZ2UoZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2RhdGFzZXQ2VmFsdWU2fVxyXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy1mdWxsIGJnLXdoaXRlIGZvY3VzOm91dGxpbmUtbm9uZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgPjwvaW5wdXQ+XHJcbiAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgIDx0ZD5cclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gb25EYXRhc2V0NlZhbHVlN0NoYW5nZShlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17ZGF0YXNldDZWYWx1ZTd9XHJcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LWZ1bGwgYmctd2hpdGUgZm9jdXM6b3V0bGluZS1ub25lXCJcclxuICAgICAgICAgICAgICAgICAgICA+PC9pbnB1dD5cclxuICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgPHRkPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBvbkRhdGFzZXQ2VmFsdWU4Q2hhbmdlKGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtkYXRhc2V0NlZhbHVlOH1cclxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInctZnVsbCBiZy13aGl0ZSBmb2N1czpvdXRsaW5lLW5vbmVcIlxyXG4gICAgICAgICAgICAgICAgICAgID48L2lucHV0PlxyXG4gICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICA8dGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IG9uRGF0YXNldDZWYWx1ZTlDaGFuZ2UoZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2RhdGFzZXQ2VmFsdWU5fVxyXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy1mdWxsIGJnLXdoaXRlIGZvY3VzOm91dGxpbmUtbm9uZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgPjwvaW5wdXQ+XHJcbiAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgIDx0ZD5cclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gb25EYXRhc2V0NlZhbHVlMTBDaGFuZ2UoZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2RhdGFzZXQ2VmFsdWUxMH1cclxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInctZnVsbCBiZy13aGl0ZSBmb2N1czpvdXRsaW5lLW5vbmVcIlxyXG4gICAgICAgICAgICAgICAgICAgID48L2lucHV0PlxyXG4gICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICA8dGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IG9uRGF0YXNldDZWYWx1ZTExQ2hhbmdlKGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtkYXRhc2V0NlZhbHVlMTF9XHJcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LWZ1bGwgYmctd2hpdGUgZm9jdXM6b3V0bGluZS1ub25lXCJcclxuICAgICAgICAgICAgICAgICAgICA+PC9pbnB1dD5cclxuICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgPHRkPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBvbkRhdGFzZXQ2VmFsdWUxMkNoYW5nZShlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17ZGF0YXNldDZWYWx1ZTEyfVxyXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy1mdWxsIGJnLXdoaXRlIGZvY3VzOm91dGxpbmUtbm9uZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgPjwvaW5wdXQ+XHJcbiAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgIDwvdGJvZHk+XHJcbiAgICAgICAgICAgIDwvdGFibGU+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIHsvKiA8YnV0dG9uXHJcbiAgICAgICAgY2xhc3NOYW1lPSd6LTEwIG1sLTQgbXQtNiBob3ZlcjpiZy1wcmltYXJ5IGhvdmVyOnRleHQtd2hpdGUgZm9jdXM6b3V0bGluZS1ub25lIGRhcms6aG92ZXI6YmctcHJpbWFyeWRhcmsgZGFyazpob3Zlcjp0ZXh0LWJhY2tncm91bmQgZm9jdXM6b3V0bGluZS1ub25lIGJvcmRlciBib3JkZXItcHJpbWFyeSB0ZXh0LXByaW1hcnkgdGV4dC1zbSBmb250LWxpZ2h0IHB5LTIgcHgtOCByb3VuZGVkLTJ4bCBkYXJrOnRleHQtcHJpbWFyeWRhcmsgZGFyazpib3JkZXItcHJpbWFyeWRhcmsnXHJcbiAgICAgICAgb25DbGljaz17YXN5bmMgKGUpID0+IHtcclxuICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgIGNvbnN0IGRvYyA9IDxNeURvY3VtZW50IGltYWdlVXJsPXtpbWFnZVVybH0gLz47XHJcbiAgICAgICAgICBjb25zdCBhc1BkZiA9IHBkZihbXSk7IC8vIHt9IGlzIGltcG9ydGFudCwgdGhyb3dzIHdpdGhvdXQgYW4gYXJndW1lbnRcclxuICAgICAgICAgIGFzUGRmLnVwZGF0ZUNvbnRhaW5lcihkb2MpO1xyXG4gICAgICAgICAgY29uc3QgYmxvYiA9IGF3YWl0IGFzUGRmLnRvQmxvYigpO1xyXG4gICAgICAgICAgc2F2ZUFzKGJsb2IsIGByYW5kb20tbmFtZS5wZGZgKTtcclxuICAgICAgICB9fVxyXG4gICAgICA+XHJcbiAgICAgICAgU2F2ZVxyXG4gICAgICA8L2J1dHRvbj4gKi99XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICB7LyogU2lkZSBtYW5hZ2VyIGJhciAqL31cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtc3RhcnQtMTIgY29sLWVuZC0xMyBqdXN0aWZ5LXNlbGYtY2VudGVyIHNlbGYtc3RhcnQgZmxleCBmbGV4LWNvbCBmbGV4LXdyYXAgZ2FwLTIgb3ZlcmZsb3ctaGlkZGVuXCI+XHJcbiAgICAgICAgPEltYWdlIG9uQ2xpY2s9eygpID0+IGRlbGV0ZUZpZWxkKGZpZWxkLmluZGV4KX0gY2xhc3NOYW1lPVwiY3Vyc29yLXBvaW50ZXJcIiBzcmM9e2AvcGxhbi1iYXIvZXhpdDQuc3ZnYH0gaGVpZ2h0PXszNn0gd2lkdGg9ezM2fSAvPlxyXG4gICAgICAgIDxJbWFnZSB7Li4ucHJvdmlkZWQuZHJhZ0hhbmRsZVByb3BzfSBjbGFzc05hbWU9XCJjdXJzb3ItcG9pbnRlclwiIHNyYz17YC9wbGFuLWJhci9kcmFnMi5zdmdgfSBoZWlnaHQ9ezM2fSB3aWR0aD17MzZ9IC8+XHJcbiAgICAgICAgPEltYWdlXHJcbiAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBvblN0YWNrZWRDaGFuZ2UoZmllbGQuc3RhY2tlZCl9XHJcbiAgICAgICAgICBjbGFzc05hbWU9XCJjdXJzb3ItcG9pbnRlclwiXHJcbiAgICAgICAgICBzcmM9e2AvcGxhbi1iYXIvbGF5ZXJzLnN2Z2B9XHJcbiAgICAgICAgICBoZWlnaHQ9ezM2fVxyXG4gICAgICAgICAgd2lkdGg9ezM2fVxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgPGRpdlxyXG4gICAgICAgICAgc3R5bGU9e3sgaGVpZ2h0OiAnMzZweCcsIHdpZHRoOiAnMzZweCcgfX1cclxuICAgICAgICAgIHJlZj17Y2hhcnRGb3JtYXR9XHJcbiAgICAgICAgICBjbGFzc05hbWU9XCJvdmVyZmxvdy1oaWRkZW4gYmctYmFja2dyb3VuZCBmb2N1czpvdXRsaW5lLW5vbmUgcm91bmRlZC1sZ1wiXHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPEltYWdlXHJcbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IG9uQ2hhcnRDaGFuZ2UoZmFsc2UpfVxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJjdXJzb3ItcG9pbnRlclwiXHJcbiAgICAgICAgICAgIHNyYz17YC9jaGFydC8ke2ZpZWxkLmNoYXJ0VHlwZX0uc3ZnYH1cclxuICAgICAgICAgICAgaGVpZ2h0PXszNn1cclxuICAgICAgICAgICAgd2lkdGg9ezM2fVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICAgIHsvKiA8ZGl2XHJcbiAgICAgICAgICAgICAgc3R5bGU9e3sgaGVpZ2h0OiAnMzZweCcgfX1cclxuICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBvbkNoYXJ0Q2hhbmdlKGZhbHNlKX1cclxuICAgICAgICAgICAgICBjbGFzc05hbWU9J3B4LTIgcHktMSB0ZXh0LXNtIGVhc2UtaW4tb3V0IGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktYmV0d2VlbiBjdXJzb3ItcG9pbnRlcidcclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIHtmaWVsZC5jaGFydFR5cGV9XHJcbiAgICAgICAgICAgIDwvZGl2PiAqL31cclxuICAgICAgICAgIHtmaWVsZC5jaGFydFR5cGUgIT09ICdCYXIgY2hhcnQnICYmIChcclxuICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICA8SW1hZ2VcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImN1cnNvci1wb2ludGVyXCJcclxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IG9uQ2hhcnRDaGFuZ2UoJ0JhciBjaGFydCcpfVxyXG4gICAgICAgICAgICAgICAgc3JjPXtgL2NoYXJ0LyR7ZmllbGQuY2hhcnRUeXBlID09ICdCYXIgY2hhcnQnID8gZmllbGQuY2hhcnRUeXBlIDogJ0JhciBjaGFydCd9LnN2Z2B9XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ9ezI3fVxyXG4gICAgICAgICAgICAgICAgd2lkdGg9ezI3fVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgey8qIDxkaXZcclxuICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBvbkNoYXJ0Q2hhbmdlKCdCYXIgY2hhcnQnKX1cclxuICAgICAgICAgICAgICBjbGFzc05hbWU9J3B4LTIgcHktMSB0ZXh0LXNtIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktYmV0d2VlbiBjdXJzb3ItcG9pbnRlcidcclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIEJhciBjaGFydFxyXG4gICAgICAgICAgICA8L2Rpdj4gKi99XHJcbiAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgKX1cclxuICAgICAgICAgIHtmaWVsZC5jaGFydFR5cGUgIT09ICdSZXZlcnNlIGNoYXJ0JyAmJiAoXHJcbiAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgPEltYWdlXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJjdXJzb3ItcG9pbnRlclwiXHJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBvbkNoYXJ0Q2hhbmdlKCdSZXZlcnNlIGNoYXJ0Jyl9XHJcbiAgICAgICAgICAgICAgICBzcmM9e2AvY2hhcnQvJHtmaWVsZC5jaGFydFR5cGUgPT0gJ1JldmVyc2UgY2hhcnQnID8gZmllbGQuY2hhcnRUeXBlIDogJ1JldmVyc2UgY2hhcnQnfS5zdmdgfVxyXG4gICAgICAgICAgICAgICAgaGVpZ2h0PXsyN31cclxuICAgICAgICAgICAgICAgIHdpZHRoPXsyN31cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIHsvKiA8ZGl2XHJcbiAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gb25DaGFydENoYW5nZSgnUmV2ZXJzZSBjaGFydCcpfVxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT0ncHgtMiBweS0xIHRleHQtc20gZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1iZXR3ZWVuIGN1cnNvci1wb2ludGVyJ1xyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgUmV2ZXJzZSBjaGFydFxyXG4gICAgICAgICAgICA8L2Rpdj4gKi99XHJcbiAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgKX1cclxuICAgICAgICAgIHtmaWVsZC5jaGFydFR5cGUgIT09ICdMaW5lIGNoYXJ0JyAmJiAoXHJcbiAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgPEltYWdlXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJjdXJzb3ItcG9pbnRlclwiXHJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBvbkNoYXJ0Q2hhbmdlKCdMaW5lIGNoYXJ0Jyl9XHJcbiAgICAgICAgICAgICAgICBzcmM9e2AvY2hhcnQvJHtmaWVsZC5jaGFydFR5cGUgPT0gJ0xpbmUgY2hhcnQnID8gZmllbGQuY2hhcnRUeXBlIDogJ0xpbmUgY2hhcnQnfS5zdmdgfVxyXG4gICAgICAgICAgICAgICAgaGVpZ2h0PXsyN31cclxuICAgICAgICAgICAgICAgIHdpZHRoPXsyN31cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIHsvKiA8ZGl2XHJcbiAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gb25DaGFydENoYW5nZSgnTGluZSBjaGFydCcpfVxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT0ncHgtMiBweS0xIHRleHQtc20gZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1iZXR3ZWVuIGN1cnNvci1wb2ludGVyJ1xyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgTGluZSBjaGFydFxyXG4gICAgICAgICAgICA8L2Rpdj4gKi99XHJcbiAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgKX1cclxuICAgICAgICAgIHtmaWVsZC5jaGFydFR5cGUgIT09ICdQaWUgY2hhcnQnICYmIChcclxuICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICA8SW1hZ2VcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImN1cnNvci1wb2ludGVyXCJcclxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IG9uQ2hhcnRDaGFuZ2UoJ1BpZSBjaGFydCcpfVxyXG4gICAgICAgICAgICAgICAgc3JjPXtgL2NoYXJ0LyR7ZmllbGQuY2hhcnRUeXBlID09ICdQaWUgY2hhcnQnID8gZmllbGQuY2hhcnRUeXBlIDogJ1BpZSBjaGFydCd9LnN2Z2B9XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ9ezI3fVxyXG4gICAgICAgICAgICAgICAgd2lkdGg9ezI3fVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgey8qIDxkaXZcclxuICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBvbkNoYXJ0Q2hhbmdlKCdQaWUgY2hhcnQnKX1cclxuICAgICAgICAgICAgICBjbGFzc05hbWU9J3B4LTIgcHktMSB0ZXh0LXNtIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktYmV0d2VlbiBjdXJzb3ItcG9pbnRlcidcclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIFBpZSBjaGFydFxyXG4gICAgICAgICAgICA8L2Rpdj4gKi99XHJcbiAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgKX1cclxuICAgICAgICAgIHtmaWVsZC5jaGFydFR5cGUgIT09ICdEb3VnaG51dCBjaGFydCcgJiYgKFxyXG4gICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgIDxJbWFnZVxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiY3Vyc29yLXBvaW50ZXJcIlxyXG4gICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gb25DaGFydENoYW5nZSgnRG91Z2hudXQgY2hhcnQnKX1cclxuICAgICAgICAgICAgICAgIHNyYz17YC9jaGFydC8ke2ZpZWxkLmNoYXJ0VHlwZSA9PSAnRG91Z2hudXQgY2hhcnQnID8gZmllbGQuY2hhcnRUeXBlIDogJ0RvdWdobnV0IGNoYXJ0J30uc3ZnYH1cclxuICAgICAgICAgICAgICAgIGhlaWdodD17Mjd9XHJcbiAgICAgICAgICAgICAgICB3aWR0aD17Mjd9XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICB7LyogPGRpdlxyXG4gICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IG9uQ2hhcnRDaGFuZ2UoJ0RvdWdobnV0IGNoYXJ0Jyl9XHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPSdweC0yIHB5LTEgdGV4dC1zbSBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWJldHdlZW4gY3Vyc29yLXBvaW50ZXInXHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICBEb3VnaG51dCBjaGFydFxyXG4gICAgICAgICAgICA8L2Rpdj4gKi99XHJcbiAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgKX1cclxuICAgICAgICAgIHtmaWVsZC5jaGFydFR5cGUgIT09ICdBcmVhIGNoYXJ0JyAmJiAoXHJcbiAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgPEltYWdlXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJjdXJzb3ItcG9pbnRlclwiXHJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBvbkNoYXJ0Q2hhbmdlKCdBcmVhIGNoYXJ0Jyl9XHJcbiAgICAgICAgICAgICAgICBzcmM9e2AvY2hhcnQvJHtmaWVsZC5jaGFydFR5cGUgPT0gJ0FyZWEgY2hhcnQnID8gZmllbGQuY2hhcnRUeXBlIDogJ0FyZWEgY2hhcnQnfS5zdmdgfVxyXG4gICAgICAgICAgICAgICAgaGVpZ2h0PXsyN31cclxuICAgICAgICAgICAgICAgIHdpZHRoPXsyN31cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIHsvKiA8ZGl2XHJcbiAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gb25DaGFydENoYW5nZSgnQXJlYSBjaGFydCcpfVxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT0ncHgtMiBweS0xIHRleHQtc20gZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1iZXR3ZWVuIGN1cnNvci1wb2ludGVyJ1xyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgQXJlYSBjaGFydFxyXG4gICAgICAgICAgICA8L2Rpdj4gKi99XHJcbiAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgKX1cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ2hhcnRKc0NvbXBvbmVudDtcclxuXHJcbntcclxuICAvKiA8ZGl2IGNsYXNzTmFtZT0nbXQtNCB3LWZ1bGwgZmxleCB3LW1heCB0ZXh0LXNtJz5cclxuPGRpdiBjbGFzc05hbWU9J2ZsZXgganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyIHctMS8xMiBib3JkZXItciBib3JkZXItcHJpbWFyeSc+XHJcbiAgPGlucHV0IHBsYWNlaG9sZGVyPSdibGFibGFibGEnIGNsYXNzTmFtZT0ndy1mdWxsJyAvPlxyXG48L2Rpdj5cclxuPGRpdiBjbGFzc05hbWU9J2ZsZXgganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyIHctMS8xMiBib3JkZXItciBib3JkZXItcHJpbWFyeSc+XHJcbiAgPGlucHV0IHBsYWNlaG9sZGVyPSdibGFibGFibGEnIGNsYXNzTmFtZT0ndy1mdWxsJyAvPlxyXG48L2Rpdj5cclxuPGRpdiBjbGFzc05hbWU9J2ZsZXgganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyIHctMS8xMiBib3JkZXItciBib3JkZXItcHJpbWFyeSc+XHJcbiAgPGlucHV0IHBsYWNlaG9sZGVyPSdibGFibGFibGEnIGNsYXNzTmFtZT0ndy1mdWxsJyAvPlxyXG48L2Rpdj5cclxuPGRpdiBjbGFzc05hbWU9J2ZsZXgganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyIHctMS8xMiBib3JkZXItciBib3JkZXItcHJpbWFyeSc+XHJcbiAgPGlucHV0IHBsYWNlaG9sZGVyPSdibGFibGFibGEnIGNsYXNzTmFtZT0ndy1mdWxsJyAvPlxyXG48L2Rpdj5cclxuPGRpdiBjbGFzc05hbWU9J2ZsZXgganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyIHctMS8xMiBib3JkZXItciBib3JkZXItcHJpbWFyeSc+XHJcbiAgPGlucHV0IHBsYWNlaG9sZGVyPSdibGFibGFibGEnIGNsYXNzTmFtZT0ndy1mdWxsJyAvPlxyXG48L2Rpdj5cclxuPGRpdiBjbGFzc05hbWU9J2ZsZXgganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyIHctMS8xMiBib3JkZXItciBib3JkZXItcHJpbWFyeSc+XHJcbiAgPGlucHV0IHBsYWNlaG9sZGVyPSdibGFibGFibGEnIGNsYXNzTmFtZT0ndy1mdWxsJyAvPlxyXG48L2Rpdj5cclxuPGRpdiBjbGFzc05hbWU9J2ZsZXgganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyIHctMS8xMiBib3JkZXItciBib3JkZXItcHJpbWFyeSc+XHJcbiAgPGlucHV0IHBsYWNlaG9sZGVyPSdibGFibGFibGEnIGNsYXNzTmFtZT0ndy1mdWxsJyAvPlxyXG48L2Rpdj5cclxuPGRpdiBjbGFzc05hbWU9J2ZsZXgganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyIHctMS8xMiBib3JkZXItciBib3JkZXItcHJpbWFyeSc+XHJcbiAgPGlucHV0IHBsYWNlaG9sZGVyPSdibGFibGFibGEnIGNsYXNzTmFtZT0ndy1mdWxsJyAvPlxyXG48L2Rpdj5cclxuPGRpdiBjbGFzc05hbWU9J2ZsZXgganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyIHctMS8xMiBib3JkZXItciBib3JkZXItcHJpbWFyeSc+XHJcbiAgPGlucHV0IHBsYWNlaG9sZGVyPSdibGFibGFibGEnIGNsYXNzTmFtZT0ndy1mdWxsJyAvPlxyXG48L2Rpdj5cclxuPGRpdiBjbGFzc05hbWU9J2ZsZXgganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyIHctMS8xMiBib3JkZXItciBib3JkZXItcHJpbWFyeSc+XHJcbiAgPGlucHV0IHBsYWNlaG9sZGVyPSdibGFibGFibGEnIGNsYXNzTmFtZT0ndy1mdWxsJyAvPlxyXG48L2Rpdj5cclxuPGRpdiBjbGFzc05hbWU9J2ZsZXgganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyIHctMS8xMiBib3JkZXItciBib3JkZXItcHJpbWFyeSc+XHJcbiAgPGlucHV0IHBsYWNlaG9sZGVyPSdibGFibGFibGEnIGNsYXNzTmFtZT0ndy1mdWxsJyAvPlxyXG48L2Rpdj5cclxuPGRpdiBjbGFzc05hbWU9J2ZsZXgganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyIHctMS8xMiBib3JkZXItciBib3JkZXItcHJpbWFyeSc+XHJcbiAgPGlucHV0IHBsYWNlaG9sZGVyPSdibGFibGFibGEnIGNsYXNzTmFtZT0ndy1mdWxsJyAvPlxyXG48L2Rpdj5cclxuPC9kaXY+ICovXHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==