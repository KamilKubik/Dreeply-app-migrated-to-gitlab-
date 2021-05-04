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
    document.getElementById("".concat(field.index, "container")).scrollIntoView();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9kYXNoYm9hcmQvc3RhcnR1cC9wcm9qZWN0L2J1c2luZXNzLWFwcC9DaGFydGpzLmpzIl0sIm5hbWVzIjpbIkNoYXJ0SnNDb21wb25lbnQiLCJjaGFydEltYWdlVXBkYXRlIiwicHJvdmlkZWQiLCJwcm9qZWN0SWQiLCJhZGRDaGFydCIsImNoYXJ0VHlwZVVwZGF0ZSIsImN1cnJlbnRJbmRleCIsImRlbGV0ZUZpZWxkIiwiY29udGFpbmVyUmVmIiwiZGF0YXNldExhYmVsNlVwZGF0ZSIsImRhdGFzZXRMYWJlbDVVcGRhdGUiLCJkYXRhc2V0TGFiZWw0VXBkYXRlIiwiZGF0YXNldExhYmVsM1VwZGF0ZSIsImRhdGFzZXRMYWJlbDJVcGRhdGUiLCJkYXRhc2V0TGFiZWwxVXBkYXRlIiwiZGF0YXNldDZVcGRhdGUiLCJkYXRhc2V0NVVwZGF0ZSIsImRhdGFzZXQ0VXBkYXRlIiwiZGF0YXNldDNVcGRhdGUiLCJkYXRhc2V0MlVwZGF0ZSIsImRhdGFzZXQxVXBkYXRlIiwibGFiZWxVcGRhdGUiLCJjaGFydExhYmVsc1VwZGF0ZSIsImZpZWxkIiwic2VsZWN0ZWRTZWN0aW9uIiwiY2hhcnRWYWx1ZVVwZGF0ZSIsImluZGV4IiwiY29uc29sZSIsImxvZyIsImNoYXJ0UmVmIiwidXNlUmVmIiwidXNlU3RhdGUiLCJpbnB1dERhdGEiLCJzZXRJbnB1dERhdGEiLCJ0b1NhdmVDaGFydCIsIkNoYXJ0SnNJbWFnZSIsInNldENvbmZpZyIsInR5cGUiLCJkYXRhIiwib3B0aW9ucyIsInJlc3BvbnNpdmUiLCJzY2FsZXMiLCJ5IiwiYmVnaW5BdFplcm8iLCJpbWFnZVVybCIsInNldEltYWdlVXJsIiwib25DaGFydFNhdmUiLCJ0b0RhdGFVcmwiLCJ1c2VFZmZlY3QiLCJvcGVuIiwic2V0T3BlbiIsIm5hbWUiLCJzZXROYW1lIiwic2V0VHlwZSIsInZhbHVlIiwic2V0VmFsdWUiLCJjb2xvciIsInNldENvbG9yIiwidXBkYXRlIiwidXNlQ2FsbGJhY2siLCJkZWJvdW5jZSIsInNlbFNlY3Rpb24iLCJmaWVsZHMiLCJmaW5kSW5kZXgiLCJjdXJyZW50U2VjdGlvbkluZGV4IiwidXBkYXRlTmFtZSIsInZhbCIsInVwZGF0ZVR5cGUiLCJ1cGRhdGVWYWx1ZSIsInVwZGF0ZUNvbG9yIiwib25OZXdEYXRhQ2hhcnRBZGQiLCJuZXdEYXRhIiwiY3VycmVudENoYXJ0SW5kZXgiLCJuZXdTZWxlY3RlZFNlY3Rpb24iLCJwdXNoIiwiZGIiLCJjb2xsZWN0aW9uIiwiZG9jIiwiUm91dGVyIiwicXVlcnkiLCJwcm9qZWN0IiwiaWQiLCJjaGFydERhdGEiLCJzZXRDaGFydERhdGEiLCJvblNuYXBzaG90Iiwic2VydmVyVXBkYXRlIiwibWFwIiwibGFiZWxzIiwic2V0TGFiZWwxIiwic2V0TGFiZWwyIiwic2V0TGFiZWwzIiwic2V0TGFiZWw0Iiwic2V0TGFiZWw1Iiwic2V0TGFiZWw2Iiwic2V0TGFiZWw3Iiwic2V0TGFiZWw4Iiwic2V0TGFiZWw5Iiwic2V0TGFiZWwxMCIsInNldExhYmVsMTEiLCJzZXRMYWJlbDEyIiwiZGF0YXNldDEiLCJzZXREYXRhc2V0MVZhbHVlMSIsInNldERhdGFzZXQxVmFsdWUyIiwic2V0RGF0YXNldDFWYWx1ZTMiLCJzZXREYXRhc2V0MVZhbHVlNCIsInNldERhdGFzZXQxVmFsdWU1Iiwic2V0RGF0YXNldDFWYWx1ZTYiLCJzZXREYXRhc2V0MVZhbHVlNyIsInNldERhdGFzZXQxVmFsdWU4Iiwic2V0RGF0YXNldDFWYWx1ZTkiLCJzZXREYXRhc2V0MVZhbHVlMTAiLCJzZXREYXRhc2V0MVZhbHVlMTEiLCJzZXREYXRhc2V0MVZhbHVlMTIiLCJkYXRhc2V0MiIsInNldERhdGFzZXQyVmFsdWUxIiwic2V0RGF0YXNldDJWYWx1ZTIiLCJzZXREYXRhc2V0MlZhbHVlMyIsInNldERhdGFzZXQyVmFsdWU0Iiwic2V0RGF0YXNldDJWYWx1ZTUiLCJzZXREYXRhc2V0MlZhbHVlNiIsInNldERhdGFzZXQyVmFsdWU3Iiwic2V0RGF0YXNldDJWYWx1ZTgiLCJzZXREYXRhc2V0MlZhbHVlOSIsInNldERhdGFzZXQyVmFsdWUxMCIsInNldERhdGFzZXQyVmFsdWUxMSIsInNldERhdGFzZXQyVmFsdWUxMiIsImRhdGFzZXQzIiwic2V0RGF0YXNldDNWYWx1ZTEiLCJzZXREYXRhc2V0M1ZhbHVlMiIsInNldERhdGFzZXQzVmFsdWUzIiwic2V0RGF0YXNldDNWYWx1ZTQiLCJzZXREYXRhc2V0M1ZhbHVlNSIsInNldERhdGFzZXQzVmFsdWU2Iiwic2V0RGF0YXNldDNWYWx1ZTciLCJzZXREYXRhc2V0M1ZhbHVlOCIsInNldERhdGFzZXQzVmFsdWU5Iiwic2V0RGF0YXNldDNWYWx1ZTEwIiwic2V0RGF0YXNldDNWYWx1ZTExIiwic2V0RGF0YXNldDNWYWx1ZTEyIiwiZGF0YXNldDQiLCJzZXREYXRhc2V0NFZhbHVlMSIsInNldERhdGFzZXQ0VmFsdWUyIiwic2V0RGF0YXNldDRWYWx1ZTMiLCJzZXREYXRhc2V0NFZhbHVlNCIsInNldERhdGFzZXQ0VmFsdWU1Iiwic2V0RGF0YXNldDRWYWx1ZTYiLCJzZXREYXRhc2V0NFZhbHVlNyIsInNldERhdGFzZXQ0VmFsdWU4Iiwic2V0RGF0YXNldDRWYWx1ZTkiLCJzZXREYXRhc2V0NFZhbHVlMTAiLCJzZXREYXRhc2V0NFZhbHVlMTEiLCJzZXREYXRhc2V0NFZhbHVlMTIiLCJkYXRhc2V0NSIsInNldERhdGFzZXQ1VmFsdWUxIiwic2V0RGF0YXNldDVWYWx1ZTIiLCJzZXREYXRhc2V0NVZhbHVlMyIsInNldERhdGFzZXQ1VmFsdWU0Iiwic2V0RGF0YXNldDVWYWx1ZTUiLCJzZXREYXRhc2V0NVZhbHVlNiIsInNldERhdGFzZXQ1VmFsdWU3Iiwic2V0RGF0YXNldDVWYWx1ZTgiLCJzZXREYXRhc2V0NVZhbHVlOSIsInNldERhdGFzZXQ1VmFsdWUxMCIsInNldERhdGFzZXQ1VmFsdWUxMSIsInNldERhdGFzZXQ1VmFsdWUxMiIsImRhdGFzZXQ2Iiwic2V0RGF0YXNldDZWYWx1ZTEiLCJzZXREYXRhc2V0NlZhbHVlMiIsInNldERhdGFzZXQ2VmFsdWUzIiwic2V0RGF0YXNldDZWYWx1ZTQiLCJzZXREYXRhc2V0NlZhbHVlNSIsInNldERhdGFzZXQ2VmFsdWU2Iiwic2V0RGF0YXNldDZWYWx1ZTciLCJzZXREYXRhc2V0NlZhbHVlOCIsInNldERhdGFzZXQ2VmFsdWU5Iiwic2V0RGF0YXNldDZWYWx1ZTEwIiwic2V0RGF0YXNldDZWYWx1ZTExIiwic2V0RGF0YXNldDZWYWx1ZTEyIiwiZGF0YXNldDFMYWJlbCIsInNldERhdGFzZXQxTGFiZWwiLCJkYXRhc2V0MkxhYmVsIiwic2V0RGF0YXNldDJMYWJlbCIsImRhdGFzZXQzTGFiZWwiLCJzZXREYXRhc2V0M0xhYmVsIiwiZGF0YXNldDRMYWJlbCIsInNldERhdGFzZXQ0TGFiZWwiLCJkYXRhc2V0NUxhYmVsIiwic2V0RGF0YXNldDVMYWJlbCIsImRhdGFzZXQ2TGFiZWwiLCJzZXREYXRhc2V0NkxhYmVsIiwiY29sb3JzIiwiY2hhcnRUeXBlIiwiY29sb3JzMSIsImNvbG9yczIiLCJjb2xvcnMzIiwiY29sb3JzNCIsImNvbG9yczUiLCJsYWJlbCIsImRhdGFzZXRzIiwiYmFja2dyb3VuZENvbG9yIiwiYm9yZGVyV2lkdGgiLCJuZXdDaGFydCIsInNldE5ld0NoYXJ0Iiwic2V0RGF0YXNldHMiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiaW5uZXJIVE1MIiwibXlDaGFydFJlZiIsImdldENvbnRleHQiLCJkYXRhcyIsImRhdGFzZXQiLCJ0ZXN0MSIsImRhdGFzZXMiLCJ1bmRlZmluZWQiLCJ0ZXN0IiwiZGF0YXJlciIsInRlc3QyIiwiZmlsdGVyIiwib2JqIiwiZmlsbCIsIm5ld0RhdGFzZXRzIiwiYm9yZGVyQ29sb3IiLCJ3aW5kb3ciLCJDaGFydCIsInNraXBOdWxsIiwibGVnZW5kIiwicG9zaXRpb24iLCJ5QXhlcyIsInN0YWNrZWQiLCJ0aWNrcyIsInhBeGVzIiwibGFiZWwxIiwibGFiZWwyIiwibGFiZWwzIiwibGFiZWw0IiwibGFiZWw1IiwibGFiZWw2IiwibGFiZWw3IiwibGFiZWw4IiwibGFiZWw5IiwibGFiZWwxMCIsImxhYmVsMTEiLCJsYWJlbDEyIiwib25MYWJlbENoYW5nZTEiLCJsYWJlbE9uZSIsIm9uTGFiZWxDaGFuZ2UyIiwibGFiZWwyMiIsIm9uTGFiZWxDaGFuZ2UzIiwibGFiZWwzMyIsIm9uTGFiZWxDaGFuZ2U0IiwibGFiZWw0NCIsIm9uTGFiZWxDaGFuZ2U1IiwibGFiZWw1NSIsIm9uTGFiZWxDaGFuZ2U2IiwibGFiZWw2NiIsIm9uTGFiZWxDaGFuZ2U3IiwibGFiZWw3NyIsIm9uTGFiZWxDaGFuZ2U4IiwibGFiZWw4OCIsIm9uTGFiZWxDaGFuZ2U5IiwibGFiZWw5OSIsIm9uTGFiZWxDaGFuZ2UxMCIsImxhYmVsMTAwIiwib25MYWJlbENoYW5nZTExIiwibGFiZWwxMTEiLCJvbkxhYmVsQ2hhbmdlMTIiLCJsYWJlbDEyMCIsImRhdGFzZXQxVmFsdWUxIiwiZGF0YXNldDFWYWx1ZTIiLCJkYXRhc2V0MVZhbHVlMyIsImRhdGFzZXQxVmFsdWU0IiwiZGF0YXNldDFWYWx1ZTUiLCJkYXRhc2V0MVZhbHVlNiIsImRhdGFzZXQxVmFsdWU3IiwiZGF0YXNldDFWYWx1ZTgiLCJkYXRhc2V0MVZhbHVlOSIsImRhdGFzZXQxVmFsdWUxMCIsImRhdGFzZXQxVmFsdWUxMSIsImRhdGFzZXQxVmFsdWUxMiIsIm9uRGF0YXNldDFWYWx1ZTFDaGFuZ2UiLCJkYXRhc2V0VmFsdWUiLCJkYXRhc2V0MVZhbHVlT25lIiwib25EYXRhc2V0MVZhbHVlMkNoYW5nZSIsImRhdGFzZXQxVmFsdWUyMiIsIm9uRGF0YXNldDFWYWx1ZTNDaGFuZ2UiLCJkYXRhc2V0MVZhbHVlMzMiLCJvbkRhdGFzZXQxVmFsdWU0Q2hhbmdlIiwiZGF0YXNldDFWYWx1ZTQ0Iiwib25EYXRhc2V0MVZhbHVlNUNoYW5nZSIsImRhdGFzZXQxVmFsdWU1NSIsIm9uRGF0YXNldDFWYWx1ZTZDaGFuZ2UiLCJkYXRhc2V0MVZhbHVlNjYiLCJvbkRhdGFzZXQxVmFsdWU3Q2hhbmdlIiwiZGF0YXNldDFWYWx1ZTc3Iiwib25EYXRhc2V0MVZhbHVlOENoYW5nZSIsImRhdGFzZXQxVmFsdWU4OCIsIm9uRGF0YXNldDFWYWx1ZTlDaGFuZ2UiLCJkYXRhc2V0MVZhbHVlOTkiLCJvbkRhdGFzZXQxVmFsdWUxMENoYW5nZSIsImRhdGFzZXQxVmFsdWUxMDAiLCJvbkRhdGFzZXQxVmFsdWUxMUNoYW5nZSIsImRhdGFzZXQxVmFsdWUxMTEiLCJvbkRhdGFzZXQxVmFsdWUxMkNoYW5nZSIsImRhdGFzZXQxVmFsdWUxMjAiLCJkYXRhc2V0MlZhbHVlMSIsImRhdGFzZXQyVmFsdWUyIiwiZGF0YXNldDJWYWx1ZTMiLCJkYXRhc2V0MlZhbHVlNCIsImRhdGFzZXQyVmFsdWU1IiwiZGF0YXNldDJWYWx1ZTYiLCJkYXRhc2V0MlZhbHVlNyIsImRhdGFzZXQyVmFsdWU4IiwiZGF0YXNldDJWYWx1ZTkiLCJkYXRhc2V0MlZhbHVlMTAiLCJkYXRhc2V0MlZhbHVlMTEiLCJkYXRhc2V0MlZhbHVlMTIiLCJvbkRhdGFzZXQyVmFsdWUxQ2hhbmdlIiwiZGF0YXNldDJWYWx1ZU9uZSIsIm9uRGF0YXNldDJWYWx1ZTJDaGFuZ2UiLCJkYXRhc2V0MlZhbHVlMjIiLCJvbkRhdGFzZXQyVmFsdWUzQ2hhbmdlIiwiZGF0YXNldDJWYWx1ZTMzIiwib25EYXRhc2V0MlZhbHVlNENoYW5nZSIsImRhdGFzZXQyVmFsdWU0NCIsIm9uRGF0YXNldDJWYWx1ZTVDaGFuZ2UiLCJkYXRhc2V0MlZhbHVlNTUiLCJvbkRhdGFzZXQyVmFsdWU2Q2hhbmdlIiwiZGF0YXNldDJWYWx1ZTY2Iiwib25EYXRhc2V0MlZhbHVlN0NoYW5nZSIsImRhdGFzZXQyVmFsdWU3NyIsIm9uRGF0YXNldDJWYWx1ZThDaGFuZ2UiLCJkYXRhc2V0MlZhbHVlODgiLCJvbkRhdGFzZXQyVmFsdWU5Q2hhbmdlIiwiZGF0YXNldDJWYWx1ZTk5Iiwib25EYXRhc2V0MlZhbHVlMTBDaGFuZ2UiLCJkYXRhc2V0MlZhbHVlMTAwIiwib25EYXRhc2V0MlZhbHVlMTFDaGFuZ2UiLCJkYXRhc2V0MlZhbHVlMTExIiwib25EYXRhc2V0MlZhbHVlMTJDaGFuZ2UiLCJkYXRhc2V0MlZhbHVlMTIwIiwiZGF0YXNldDNWYWx1ZTEiLCJkYXRhc2V0M1ZhbHVlMiIsImRhdGFzZXQzVmFsdWUzIiwiZGF0YXNldDNWYWx1ZTQiLCJkYXRhc2V0M1ZhbHVlNSIsImRhdGFzZXQzVmFsdWU2IiwiZGF0YXNldDNWYWx1ZTciLCJkYXRhc2V0M1ZhbHVlOCIsImRhdGFzZXQzVmFsdWU5IiwiZGF0YXNldDNWYWx1ZTEwIiwiZGF0YXNldDNWYWx1ZTExIiwiZGF0YXNldDNWYWx1ZTEyIiwib25EYXRhc2V0M1ZhbHVlMUNoYW5nZSIsImRhdGFzZXQzVmFsdWVPbmUiLCJvbkRhdGFzZXQzVmFsdWUyQ2hhbmdlIiwiZGF0YXNldDNWYWx1ZTIyIiwib25EYXRhc2V0M1ZhbHVlM0NoYW5nZSIsImRhdGFzZXQzVmFsdWUzMyIsIm9uRGF0YXNldDNWYWx1ZTRDaGFuZ2UiLCJkYXRhc2V0M1ZhbHVlNDQiLCJvbkRhdGFzZXQzVmFsdWU1Q2hhbmdlIiwiZGF0YXNldDNWYWx1ZTU1Iiwib25EYXRhc2V0M1ZhbHVlNkNoYW5nZSIsImRhdGFzZXQzVmFsdWU2NiIsIm9uRGF0YXNldDNWYWx1ZTdDaGFuZ2UiLCJkYXRhc2V0M1ZhbHVlNzciLCJvbkRhdGFzZXQzVmFsdWU4Q2hhbmdlIiwiZGF0YXNldDNWYWx1ZTg4Iiwib25EYXRhc2V0M1ZhbHVlOUNoYW5nZSIsImRhdGFzZXQzVmFsdWU5OSIsIm9uRGF0YXNldDNWYWx1ZTEwQ2hhbmdlIiwiZGF0YXNldDNWYWx1ZTEwMCIsIm9uRGF0YXNldDNWYWx1ZTExQ2hhbmdlIiwiZGF0YXNldDNWYWx1ZTExMSIsIm9uRGF0YXNldDNWYWx1ZTEyQ2hhbmdlIiwiZGF0YXNldDNWYWx1ZTEyMCIsImRhdGFzZXQ0VmFsdWUxIiwiZGF0YXNldDRWYWx1ZTIiLCJkYXRhc2V0NFZhbHVlMyIsImRhdGFzZXQ0VmFsdWU0IiwiZGF0YXNldDRWYWx1ZTUiLCJkYXRhc2V0NFZhbHVlNiIsImRhdGFzZXQ0VmFsdWU3IiwiZGF0YXNldDRWYWx1ZTgiLCJkYXRhc2V0NFZhbHVlOSIsImRhdGFzZXQ0VmFsdWUxMCIsImRhdGFzZXQ0VmFsdWUxMSIsImRhdGFzZXQ0VmFsdWUxMiIsIm9uRGF0YXNldDRWYWx1ZTFDaGFuZ2UiLCJkYXRhc2V0NFZhbHVlT25lIiwib25EYXRhc2V0NFZhbHVlMkNoYW5nZSIsImRhdGFzZXQ0VmFsdWUyMiIsIm9uRGF0YXNldDRWYWx1ZTNDaGFuZ2UiLCJkYXRhc2V0NFZhbHVlMzMiLCJvbkRhdGFzZXQ0VmFsdWU0Q2hhbmdlIiwiZGF0YXNldDRWYWx1ZTQ0Iiwib25EYXRhc2V0NFZhbHVlNUNoYW5nZSIsImRhdGFzZXQ0VmFsdWU1NSIsIm9uRGF0YXNldDRWYWx1ZTZDaGFuZ2UiLCJkYXRhc2V0NFZhbHVlNjYiLCJvbkRhdGFzZXQ0VmFsdWU3Q2hhbmdlIiwiZGF0YXNldDRWYWx1ZTc3Iiwib25EYXRhc2V0NFZhbHVlOENoYW5nZSIsImRhdGFzZXQ0VmFsdWU4OCIsIm9uRGF0YXNldDRWYWx1ZTlDaGFuZ2UiLCJkYXRhc2V0NFZhbHVlOTkiLCJvbkRhdGFzZXQ0VmFsdWUxMENoYW5nZSIsImRhdGFzZXQ0VmFsdWUxMDAiLCJvbkRhdGFzZXQ0VmFsdWUxMUNoYW5nZSIsImRhdGFzZXQ0VmFsdWUxMTEiLCJvbkRhdGFzZXQ0VmFsdWUxMkNoYW5nZSIsImRhdGFzZXQ0VmFsdWUxMjAiLCJkYXRhc2V0NVZhbHVlMSIsImRhdGFzZXQ1VmFsdWUyIiwiZGF0YXNldDVWYWx1ZTMiLCJkYXRhc2V0NVZhbHVlNCIsImRhdGFzZXQ1VmFsdWU1IiwiZGF0YXNldDVWYWx1ZTYiLCJkYXRhc2V0NVZhbHVlNyIsImRhdGFzZXQ1VmFsdWU4IiwiZGF0YXNldDVWYWx1ZTkiLCJkYXRhc2V0NVZhbHVlMTAiLCJkYXRhc2V0NVZhbHVlMTEiLCJkYXRhc2V0NVZhbHVlMTIiLCJvbkRhdGFzZXQ1VmFsdWUxQ2hhbmdlIiwiZGF0YXNldDVWYWx1ZU9uZSIsIm9uRGF0YXNldDVWYWx1ZTJDaGFuZ2UiLCJkYXRhc2V0NVZhbHVlMjIiLCJvbkRhdGFzZXQ1VmFsdWUzQ2hhbmdlIiwiZGF0YXNldDVWYWx1ZTMzIiwib25EYXRhc2V0NVZhbHVlNENoYW5nZSIsImRhdGFzZXQ1VmFsdWU0NCIsIm9uRGF0YXNldDVWYWx1ZTVDaGFuZ2UiLCJkYXRhc2V0NVZhbHVlNTUiLCJvbkRhdGFzZXQ1VmFsdWU2Q2hhbmdlIiwiZGF0YXNldDVWYWx1ZTY2Iiwib25EYXRhc2V0NVZhbHVlN0NoYW5nZSIsImRhdGFzZXQ1VmFsdWU3NyIsIm9uRGF0YXNldDVWYWx1ZThDaGFuZ2UiLCJkYXRhc2V0NVZhbHVlODgiLCJvbkRhdGFzZXQ1VmFsdWU5Q2hhbmdlIiwiZGF0YXNldDVWYWx1ZTk5Iiwib25EYXRhc2V0NVZhbHVlMTBDaGFuZ2UiLCJkYXRhc2V0NVZhbHVlMTAwIiwib25EYXRhc2V0NVZhbHVlMTFDaGFuZ2UiLCJkYXRhc2V0NVZhbHVlMTExIiwib25EYXRhc2V0NVZhbHVlMTJDaGFuZ2UiLCJkYXRhc2V0NVZhbHVlMTIwIiwiZGF0YXNldDZWYWx1ZTEiLCJkYXRhc2V0NlZhbHVlMiIsImRhdGFzZXQ2VmFsdWUzIiwiZGF0YXNldDZWYWx1ZTQiLCJkYXRhc2V0NlZhbHVlNSIsImRhdGFzZXQ2VmFsdWU2IiwiZGF0YXNldDZWYWx1ZTciLCJkYXRhc2V0NlZhbHVlOCIsImRhdGFzZXQ2VmFsdWU5IiwiZGF0YXNldDZWYWx1ZTEwIiwiZGF0YXNldDZWYWx1ZTExIiwiZGF0YXNldDZWYWx1ZTEyIiwib25EYXRhc2V0NlZhbHVlMUNoYW5nZSIsImRhdGFzZXQ2VmFsdWVPbmUiLCJvbkRhdGFzZXQ2VmFsdWUyQ2hhbmdlIiwiZGF0YXNldDZWYWx1ZTIyIiwib25EYXRhc2V0NlZhbHVlM0NoYW5nZSIsImRhdGFzZXQ2VmFsdWUzMyIsIm9uRGF0YXNldDZWYWx1ZTRDaGFuZ2UiLCJkYXRhc2V0NlZhbHVlNDQiLCJvbkRhdGFzZXQ2VmFsdWU1Q2hhbmdlIiwiZGF0YXNldDZWYWx1ZTU1Iiwib25EYXRhc2V0NlZhbHVlNkNoYW5nZSIsImRhdGFzZXQ2VmFsdWU2NiIsIm9uRGF0YXNldDZWYWx1ZTdDaGFuZ2UiLCJkYXRhc2V0NlZhbHVlNzciLCJvbkRhdGFzZXQ2VmFsdWU4Q2hhbmdlIiwiZGF0YXNldDZWYWx1ZTg4Iiwib25EYXRhc2V0NlZhbHVlOUNoYW5nZSIsImRhdGFzZXQ2VmFsdWU5OSIsIm9uRGF0YXNldDZWYWx1ZTEwQ2hhbmdlIiwiZGF0YXNldDZWYWx1ZTEwMCIsIm9uRGF0YXNldDZWYWx1ZTExQ2hhbmdlIiwiZGF0YXNldDZWYWx1ZTExMSIsIm9uRGF0YXNldDZWYWx1ZTEyQ2hhbmdlIiwiZGF0YXNldDZWYWx1ZTEyMCIsIm9uRGF0YXNldExhYmVsQ2hhbmdlMSIsImRhdGFzZXRMYWJlbCIsIm9uRGF0YXNldExhYmVsQ2hhbmdlMiIsIm9uRGF0YXNldExhYmVsQ2hhbmdlMyIsIm9uRGF0YXNldExhYmVsQ2hhbmdlNCIsIm9uRGF0YXNldExhYmVsQ2hhbmdlNSIsIm9uRGF0YXNldExhYmVsQ2hhbmdlNiIsInRhYmxlUmVmIiwiYWRkRXZlbnRMaXN0ZW5lciIsImdzYXAiLCJ0byIsImhlaWdodCIsImR1cmF0aW9uIiwidHJhbnNmb3JtT3JpZ2luIiwiZWFzZSIsIkxpbmVhciIsInNjcm9sbEludG9WaWV3IiwiYWN0aXZlQ2hhcnRUeXBlIiwic2V0QWN0aXZlQ2hhcnRUeXBlIiwiY2hhcnRGb3JtYXQiLCJvbkNoYXJ0Q2hhbmdlIiwiY3VycmVudCIsIm5ld0ZpZWxkc0FycmF5IiwibmV3U2VjdGlvbiIsInRpdGxlIiwiY3JlYXRlZEF0Iiwib25TdGFja2VkQ2hhbmdlIiwiaW5uZXJSZWYiLCJkcmFnZ2FibGVQcm9wcyIsImUiLCJ0YXJnZXQiLCJkcmFnSGFuZGxlUHJvcHMiLCJ3aWR0aCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtDQUVBOztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0NBR0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxnQkFBZ0IsR0FBRyxTQUFuQkEsZ0JBQW1CLE9BMkJuQjtBQUFBOztBQUFBLE1BMUJKQyxnQkEwQkksUUExQkpBLGdCQTBCSTtBQUFBLE1BekJKQyxRQXlCSSxRQXpCSkEsUUF5Qkk7QUFBQSxNQXhCSkMsU0F3QkksUUF4QkpBLFNBd0JJO0FBQUEsTUF2QkpDLFFBdUJJLFFBdkJKQSxRQXVCSTtBQUFBLE1BdEJKQyxlQXNCSSxRQXRCSkEsZUFzQkk7QUFBQSxNQXJCSkMsWUFxQkksUUFyQkpBLFlBcUJJO0FBQUEsTUFwQkpDLFdBb0JJLFFBcEJKQSxXQW9CSTtBQUFBLE1BbkJKQyxZQW1CSSxRQW5CSkEsWUFtQkk7QUFBQSxNQWxCSkMsbUJBa0JJLFFBbEJKQSxtQkFrQkk7QUFBQSxNQWpCSkMsbUJBaUJJLFFBakJKQSxtQkFpQkk7QUFBQSxNQWhCSkMsbUJBZ0JJLFFBaEJKQSxtQkFnQkk7QUFBQSxNQWZKQyxtQkFlSSxRQWZKQSxtQkFlSTtBQUFBLE1BZEpDLG1CQWNJLFFBZEpBLG1CQWNJO0FBQUEsTUFiSkMsbUJBYUksUUFiSkEsbUJBYUk7QUFBQSxNQVpKQyxjQVlJLFFBWkpBLGNBWUk7QUFBQSxNQVhKQyxjQVdJLFFBWEpBLGNBV0k7QUFBQSxNQVZKQyxjQVVJLFFBVkpBLGNBVUk7QUFBQSxNQVRKQyxjQVNJLFFBVEpBLGNBU0k7QUFBQSxNQVJKQyxjQVFJLFFBUkpBLGNBUUk7QUFBQSxNQVBKQyxjQU9JLFFBUEpBLGNBT0k7QUFBQSxNQU5KQyxXQU1JLFFBTkpBLFdBTUk7QUFBQSxNQUxKQyxpQkFLSSxRQUxKQSxpQkFLSTtBQUFBLE1BSkpDLEtBSUksUUFKSkEsS0FJSTtBQUFBLE1BSEpDLGVBR0ksUUFISkEsZUFHSTtBQUFBLE1BRkpDLGdCQUVJLFFBRkpBLGdCQUVJO0FBQUEsTUFESkMsS0FDSSxRQURKQSxLQUNJO0FBQ0pDLFNBQU8sQ0FBQ0MsR0FBUixDQUFZLFlBQVosRUFBMEJMLEtBQTFCO0FBQ0EsTUFBTU0sUUFBUSxHQUFHQyxvREFBTSxFQUF2Qjs7QUFGSSxrQkFJOEJDLHNEQUFRLENBQUMsZUFBRCxDQUp0QztBQUFBLE1BSUdDLFNBSkg7QUFBQSxNQUljQyxZQUpkOztBQU1KLE1BQU1DLFdBQVcsR0FBRyxJQUFJQyx1REFBSixFQUFwQjtBQUNBRCxhQUFXLENBQUNFLFNBQVosQ0FBc0I7QUFDcEJDLFFBQUksRUFBRSxLQURjO0FBRXBCQyxRQUFJLEVBQUVBLElBRmM7QUFHcEJDLFdBQU8sRUFBRTtBQUNQQyxnQkFBVSxFQUFFLEtBREw7QUFFUEMsWUFBTSxFQUFFO0FBQ05DLFNBQUMsRUFBRTtBQUNEQyxxQkFBVyxFQUFFO0FBRFo7QUFERztBQUZEO0FBSFcsR0FBdEI7O0FBUEksbUJBb0I0Qlosc0RBQVEsRUFwQnBDO0FBQUEsTUFvQkdhLFFBcEJIO0FBQUEsTUFvQmFDLFdBcEJiOztBQXNCSixNQUFNQyxXQUFXO0FBQUEsbVJBQUc7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDRCQUNsQm5CLE9BRGtCO0FBQUE7QUFBQSxxQkFDQU8sV0FBVyxDQUFDYSxTQUFaLEVBREE7O0FBQUE7QUFBQTs7QUFBQSwwQkFDVm5CLEdBRFU7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBSDs7QUFBQSxvQkFBWGtCLFdBQVc7QUFBQTtBQUFBO0FBQUEsS0FBakI7O0FBS0FFLHlEQUFTLGtSQUFDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSwyQkFDUkgsV0FEUTtBQUFBO0FBQUEsbUJBQ1VYLFdBQVcsQ0FBQ2EsU0FBWixFQURWOztBQUFBO0FBQUE7QUFBQTtBQUVScEIsbUJBQU8sQ0FBQ0MsR0FBUixDQUFZZ0IsUUFBWjs7QUFGUTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHQUFELElBR04sRUFITSxDQUFUOztBQTNCSSxtQkFnQ29CYixzREFBUSxDQUFDLEtBQUQsQ0FoQzVCO0FBQUEsTUFnQ0drQixJQWhDSDtBQUFBLE1BZ0NTQyxPQWhDVDs7QUFrQ0pGLHlEQUFTLENBQUMsWUFBTTtBQUNkRSxXQUFPLENBQUMsS0FBRCxDQUFQO0FBQ0FBLFdBQU8sQ0FBQyxJQUFELENBQVA7QUFDQSxXQUFPO0FBQUEsYUFBTUEsT0FBTyxDQUFDLEtBQUQsQ0FBYjtBQUFBLEtBQVA7QUFDRCxHQUpRLENBQVQsQ0FsQ0ksQ0F3Q0o7O0FBeENJLG1CQXlDb0JuQixzREFBUSxDQUFDLEVBQUQsQ0F6QzVCO0FBQUEsTUF5Q0dvQixJQXpDSDtBQUFBLE1BeUNTQyxPQXpDVDs7QUFBQSxtQkEwQ29CckIsc0RBQVEsQ0FBQyxFQUFELENBMUM1QjtBQUFBLE1BMENHTSxJQTFDSDtBQUFBLE1BMENTZ0IsT0ExQ1Q7O0FBQUEsbUJBMkNzQnRCLHNEQUFRLENBQUMsRUFBRCxDQTNDOUI7QUFBQSxNQTJDR3VCLEtBM0NIO0FBQUEsTUEyQ1VDLFFBM0NWOztBQUFBLG1CQTRDc0J4QixzREFBUSxDQUFDLEVBQUQsQ0E1QzlCO0FBQUEsTUE0Q0d5QixLQTVDSDtBQUFBLE1BNENVQyxRQTVDVjs7QUE4Q0osTUFBTUMsTUFBTSxHQUFHQyx5REFBVyxDQUN4QkMsK0RBQVE7QUFBQSxtUkFBQyxrQkFBT3RCLElBQVA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFDMkJBLElBQUksQ0FBQ3VCLFVBQUwsQ0FBZ0JDLE1BQWhCLENBQXVCQyxTQUF2QixDQUFpQyxVQUFDeEMsS0FBRDtBQUFBLHVCQUFXQSxLQUFLLENBQUNHLEtBQU4sSUFBZVksSUFBSSxDQUFDWixLQUEvQjtBQUFBLGVBQWpDLENBRDNCOztBQUFBO0FBQ0RzQyxpQ0FEQztBQUVQdkMsOEJBQWdCLENBQUNhLElBQUQsRUFBT0EsSUFBSSxDQUFDWixLQUFaLEVBQW1Cc0MsbUJBQW5CLENBQWhCOztBQUZPO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQUQ7O0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FHTCxHQUhLLENBRGdCLEVBS3hCLEVBTHdCLENBQTFCOztBQVFBLE1BQU1DLFVBQVUsR0FBRyxTQUFiQSxVQUFhLENBQUNDLEdBQUQsRUFBUztBQUMxQixRQUFNNUIsSUFBSSxHQUFHO0FBQ1hhLFVBQUksRUFBRWUsR0FESztBQUVYeEMsV0FBSyxFQUFMQSxLQUZXO0FBR1htQyxnQkFBVSxFQUFFckM7QUFIRCxLQUFiLENBRDBCLENBTTFCOztBQUNBNEIsV0FBTyxDQUFDYyxHQUFELENBQVA7QUFDRCxHQVJEOztBQVNBLE1BQU1DLFVBQVUsR0FBRyxTQUFiQSxVQUFhLENBQUNELEdBQUQsRUFBUztBQUMxQixRQUFNNUIsSUFBSSxHQUFHO0FBQ1hELFVBQUksRUFBRTZCLEdBREs7QUFFWHhDLFdBQUssRUFBTEEsS0FGVztBQUdYbUMsZ0JBQVUsRUFBRXJDO0FBSEQsS0FBYixDQUQwQixDQU0xQjs7QUFDQTZCLFdBQU8sQ0FBQ2EsR0FBRCxDQUFQO0FBQ0QsR0FSRDs7QUFTQSxNQUFNRSxXQUFXLEdBQUcsU0FBZEEsV0FBYyxDQUFDRixHQUFELEVBQVM7QUFDM0IsUUFBTTVCLElBQUksR0FBRztBQUNYZ0IsV0FBSyxFQUFFWSxHQURJO0FBRVh4QyxXQUFLLEVBQUxBLEtBRlc7QUFHWG1DLGdCQUFVLEVBQUVyQztBQUhELEtBQWIsQ0FEMkIsQ0FNM0I7O0FBQ0ErQixZQUFRLENBQUNXLEdBQUQsQ0FBUjtBQUNELEdBUkQ7O0FBU0EsTUFBTUcsV0FBVyxHQUFHLFNBQWRBLFdBQWMsQ0FBQ0gsR0FBRCxFQUFTO0FBQzNCLFFBQU01QixJQUFJLEdBQUc7QUFDWGtCLFdBQUssRUFBRVUsR0FESTtBQUVYeEMsV0FBSyxFQUFMQSxLQUZXO0FBR1htQyxnQkFBVSxFQUFFckM7QUFIRCxLQUFiLENBRDJCLENBTTNCOztBQUNBaUMsWUFBUSxDQUFDUyxHQUFELENBQVI7QUFDRCxHQVJELENBakZJLENBMkZKOzs7QUFDQSxNQUFNSSxpQkFBaUI7QUFBQSxtUkFBRztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDbEJDLHFCQURrQixHQUNSO0FBQ2RwQixvQkFBSSxFQUFKQSxJQURjO0FBRWRkLG9CQUFJLEVBQUpBLElBRmM7QUFHZGlCLHFCQUFLLEVBQUxBLEtBSGM7QUFJZEUscUJBQUssRUFBTEE7QUFKYyxlQURRO0FBQUE7QUFBQSxxQkFPUWhDLGVBQWUsQ0FBQ3NDLE1BQWhCLENBQXVCQyxTQUF2QixDQUFpQyxVQUFDeEMsS0FBRDtBQUFBLHVCQUFXQSxLQUFLLENBQUNHLEtBQU4sSUFBZUEsS0FBMUI7QUFBQSxlQUFqQyxDQVBSOztBQUFBO0FBT2xCOEMsK0JBUGtCO0FBUXhCO0FBQ01DLGdDQVRrQixHQVNHakQsZUFUSDtBQVV4QmlELGdDQUFrQixDQUFDWCxNQUFuQixDQUEwQlUsaUJBQTFCLEVBQTZDbEMsSUFBN0MsQ0FBa0RvQyxJQUFsRCxDQUF1REgsT0FBdkQ7QUFDQTVDLHFCQUFPLENBQUNDLEdBQVIsQ0FBWTZDLGtCQUFaLEVBWHdCLENBYXhCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUFFLCtEQUFFLENBQUNDLFVBQUgsQ0FBYyxVQUFkLEVBQ0dDLEdBREgsQ0FDTzFFLFNBRFAsRUFFR3lFLFVBRkgsQ0FFYyxjQUZkLEVBR0dDLEdBSEgsQ0FHT0MsbURBQU0sQ0FBQ0MsS0FBUCxDQUFhQyxPQUhwQixFQUlHSixVQUpILENBSWMsUUFKZCxFQUtFO0FBQ0E7QUFDQTtBQVBGLGVBUUdDLEdBUkgsQ0FRT3JELGVBQWUsQ0FBQ3lELEVBUnZCLEVBU0d2QixNQVRILENBU1U7QUFDTkksc0JBQU0sRUFBRVcsa0JBQWtCLENBQUNYO0FBRHJCLGVBVFY7O0FBbkJ3QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFIOztBQUFBLG9CQUFqQlEsaUJBQWlCO0FBQUE7QUFBQTtBQUFBLEtBQXZCLENBNUZJLENBNkhKOzs7QUE3SEksbUJBOEg4QnZDLHNEQUFRLEVBOUh0QztBQUFBLE1BOEhHbUQsU0E5SEg7QUFBQSxNQThIY0MsWUE5SGQ7O0FBZ0lKbkMseURBQVMsa1JBQUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFDd0J4QixlQUFlLENBQUNzQyxNQUFoQixDQUF1QkMsU0FBdkIsQ0FBaUMsVUFBQ3hDLEtBQUQ7QUFBQSxxQkFBV0EsS0FBSyxDQUFDRyxLQUFOLElBQWVBLEtBQTFCO0FBQUEsYUFBakMsQ0FEeEI7O0FBQUE7QUFDRjhDLDZCQURFO0FBRVJHLDZEQUFFLENBQUNDLFVBQUgsQ0FBYyxVQUFkLEVBQ0dDLEdBREgsQ0FDTzFFLFNBRFAsRUFFR3lFLFVBRkgsQ0FFYyxjQUZkLEVBR0dDLEdBSEgsQ0FHT0MsbURBQU0sQ0FBQ0MsS0FBUCxDQUFhQyxPQUhwQixFQUlHSixVQUpILENBSWMsUUFKZCxFQUtFO0FBQ0E7QUFDQTtBQVBGLGFBUUdDLEdBUkgsQ0FRT3JELGVBQWUsQ0FBQ3lELEVBUnZCLEVBU0dHLFVBVEgsQ0FTYyxVQUFDQyxZQUFELEVBQWtCO0FBQzVCLGtCQUFNdkIsTUFBTSxHQUFHdUIsWUFBWSxDQUFDL0MsSUFBYixHQUFvQndCLE1BQXBCLENBQTJCd0IsR0FBM0IsQ0FBK0IsVUFBQy9ELEtBQUQsRUFBVztBQUN2RCx1QkFBT0EsS0FBUDtBQUNELGVBRmMsQ0FBZjtBQUdBNEQsMEJBQVksQ0FBQ3JCLE1BQU0sQ0FBQ1UsaUJBQUQsQ0FBUCxDQUFaO0FBQ0E3QyxxQkFBTyxDQUFDQyxHQUFSLENBQVlrQyxNQUFNLENBQUNVLGlCQUFELENBQWxCLEVBTDRCLENBTTVCO0FBQ0E7QUFDRCxhQWpCSDs7QUFGUTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHQUFELElBb0JOLEVBcEJNLENBQVQ7QUFxQkE3QyxTQUFPLENBQUNDLEdBQVIsQ0FBWUwsS0FBWjtBQUVBeUIseURBQVMsQ0FBQyxZQUFNO0FBQ2R6QixTQUFLLENBQUNnRSxNQUFOLENBQWEsQ0FBYixLQUFtQkMsU0FBUyxDQUFDakUsS0FBSyxDQUFDZ0UsTUFBTixDQUFhLENBQWIsQ0FBRCxDQUE1QjtBQUNBaEUsU0FBSyxDQUFDZ0UsTUFBTixDQUFhLENBQWIsS0FBbUJFLFNBQVMsQ0FBQ2xFLEtBQUssQ0FBQ2dFLE1BQU4sQ0FBYSxDQUFiLENBQUQsQ0FBNUI7QUFDQWhFLFNBQUssQ0FBQ2dFLE1BQU4sQ0FBYSxDQUFiLEtBQW1CRyxTQUFTLENBQUNuRSxLQUFLLENBQUNnRSxNQUFOLENBQWEsQ0FBYixDQUFELENBQTVCO0FBQ0FoRSxTQUFLLENBQUNnRSxNQUFOLENBQWEsQ0FBYixLQUFtQkksU0FBUyxDQUFDcEUsS0FBSyxDQUFDZ0UsTUFBTixDQUFhLENBQWIsQ0FBRCxDQUE1QjtBQUNBaEUsU0FBSyxDQUFDZ0UsTUFBTixDQUFhLENBQWIsS0FBbUJLLFNBQVMsQ0FBQ3JFLEtBQUssQ0FBQ2dFLE1BQU4sQ0FBYSxDQUFiLENBQUQsQ0FBNUI7QUFDQWhFLFNBQUssQ0FBQ2dFLE1BQU4sQ0FBYSxDQUFiLEtBQW1CTSxTQUFTLENBQUN0RSxLQUFLLENBQUNnRSxNQUFOLENBQWEsQ0FBYixDQUFELENBQTVCO0FBQ0FoRSxTQUFLLENBQUNnRSxNQUFOLENBQWEsQ0FBYixLQUFtQk8sU0FBUyxDQUFDdkUsS0FBSyxDQUFDZ0UsTUFBTixDQUFhLENBQWIsQ0FBRCxDQUE1QjtBQUNBaEUsU0FBSyxDQUFDZ0UsTUFBTixDQUFhLENBQWIsS0FBbUJRLFNBQVMsQ0FBQ3hFLEtBQUssQ0FBQ2dFLE1BQU4sQ0FBYSxDQUFiLENBQUQsQ0FBNUI7QUFDQWhFLFNBQUssQ0FBQ2dFLE1BQU4sQ0FBYSxDQUFiLEtBQW1CUyxTQUFTLENBQUN6RSxLQUFLLENBQUNnRSxNQUFOLENBQWEsQ0FBYixDQUFELENBQTVCO0FBQ0FoRSxTQUFLLENBQUNnRSxNQUFOLENBQWEsQ0FBYixLQUFtQlUsVUFBVSxDQUFDMUUsS0FBSyxDQUFDZ0UsTUFBTixDQUFhLENBQWIsQ0FBRCxDQUE3QjtBQUNBaEUsU0FBSyxDQUFDZ0UsTUFBTixDQUFhLEVBQWIsS0FBb0JXLFVBQVUsQ0FBQzNFLEtBQUssQ0FBQ2dFLE1BQU4sQ0FBYSxFQUFiLENBQUQsQ0FBOUI7QUFDQWhFLFNBQUssQ0FBQ2dFLE1BQU4sQ0FBYSxFQUFiLEtBQW9CWSxVQUFVLENBQUM1RSxLQUFLLENBQUNnRSxNQUFOLENBQWEsRUFBYixDQUFELENBQTlCO0FBQ0QsR0FiUSxFQWFOLENBQUNoRSxLQUFELENBYk0sQ0FBVCxDQXZKSSxDQXNLSjs7QUFDQXlCLHlEQUFTLENBQUMsWUFBTTtBQUNkekIsU0FBSyxDQUFDNkUsUUFBTixDQUFlLENBQWYsS0FBcUJDLGlCQUFpQixDQUFDOUUsS0FBSyxDQUFDNkUsUUFBTixDQUFlLENBQWYsQ0FBRCxDQUF0QztBQUNBN0UsU0FBSyxDQUFDNkUsUUFBTixDQUFlLENBQWYsS0FBcUJFLGlCQUFpQixDQUFDL0UsS0FBSyxDQUFDNkUsUUFBTixDQUFlLENBQWYsQ0FBRCxDQUF0QztBQUNBN0UsU0FBSyxDQUFDNkUsUUFBTixDQUFlLENBQWYsS0FBcUJHLGlCQUFpQixDQUFDaEYsS0FBSyxDQUFDNkUsUUFBTixDQUFlLENBQWYsQ0FBRCxDQUF0QztBQUNBN0UsU0FBSyxDQUFDNkUsUUFBTixDQUFlLENBQWYsS0FBcUJJLGlCQUFpQixDQUFDakYsS0FBSyxDQUFDNkUsUUFBTixDQUFlLENBQWYsQ0FBRCxDQUF0QztBQUNBN0UsU0FBSyxDQUFDNkUsUUFBTixDQUFlLENBQWYsS0FBcUJLLGlCQUFpQixDQUFDbEYsS0FBSyxDQUFDNkUsUUFBTixDQUFlLENBQWYsQ0FBRCxDQUF0QztBQUNBN0UsU0FBSyxDQUFDNkUsUUFBTixDQUFlLENBQWYsS0FBcUJNLGlCQUFpQixDQUFDbkYsS0FBSyxDQUFDNkUsUUFBTixDQUFlLENBQWYsQ0FBRCxDQUF0QztBQUNBN0UsU0FBSyxDQUFDNkUsUUFBTixDQUFlLENBQWYsS0FBcUJPLGlCQUFpQixDQUFDcEYsS0FBSyxDQUFDNkUsUUFBTixDQUFlLENBQWYsQ0FBRCxDQUF0QztBQUNBN0UsU0FBSyxDQUFDNkUsUUFBTixDQUFlLENBQWYsS0FBcUJRLGlCQUFpQixDQUFDckYsS0FBSyxDQUFDNkUsUUFBTixDQUFlLENBQWYsQ0FBRCxDQUF0QztBQUNBN0UsU0FBSyxDQUFDNkUsUUFBTixDQUFlLENBQWYsS0FBcUJTLGlCQUFpQixDQUFDdEYsS0FBSyxDQUFDNkUsUUFBTixDQUFlLENBQWYsQ0FBRCxDQUF0QztBQUNBN0UsU0FBSyxDQUFDNkUsUUFBTixDQUFlLENBQWYsS0FBcUJVLGtCQUFrQixDQUFDdkYsS0FBSyxDQUFDNkUsUUFBTixDQUFlLENBQWYsQ0FBRCxDQUF2QztBQUNBN0UsU0FBSyxDQUFDNkUsUUFBTixDQUFlLEVBQWYsS0FBc0JXLGtCQUFrQixDQUFDeEYsS0FBSyxDQUFDNkUsUUFBTixDQUFlLEVBQWYsQ0FBRCxDQUF4QztBQUNBN0UsU0FBSyxDQUFDNkUsUUFBTixDQUFlLEVBQWYsS0FBc0JZLGtCQUFrQixDQUFDekYsS0FBSyxDQUFDNkUsUUFBTixDQUFlLEVBQWYsQ0FBRCxDQUF4QztBQUNELEdBYlEsRUFhTixDQUFDN0UsS0FBRCxDQWJNLENBQVQsQ0F2S0ksQ0FzTEo7O0FBQ0F5Qix5REFBUyxDQUFDLFlBQU07QUFDZHpCLFNBQUssQ0FBQzBGLFFBQU4sQ0FBZSxDQUFmLEtBQXFCQyxpQkFBaUIsQ0FBQzNGLEtBQUssQ0FBQzBGLFFBQU4sQ0FBZSxDQUFmLENBQUQsQ0FBdEM7QUFDQTFGLFNBQUssQ0FBQzBGLFFBQU4sQ0FBZSxDQUFmLEtBQXFCRSxpQkFBaUIsQ0FBQzVGLEtBQUssQ0FBQzBGLFFBQU4sQ0FBZSxDQUFmLENBQUQsQ0FBdEM7QUFDQTFGLFNBQUssQ0FBQzBGLFFBQU4sQ0FBZSxDQUFmLEtBQXFCRyxpQkFBaUIsQ0FBQzdGLEtBQUssQ0FBQzBGLFFBQU4sQ0FBZSxDQUFmLENBQUQsQ0FBdEM7QUFDQTFGLFNBQUssQ0FBQzBGLFFBQU4sQ0FBZSxDQUFmLEtBQXFCSSxpQkFBaUIsQ0FBQzlGLEtBQUssQ0FBQzBGLFFBQU4sQ0FBZSxDQUFmLENBQUQsQ0FBdEM7QUFDQTFGLFNBQUssQ0FBQzBGLFFBQU4sQ0FBZSxDQUFmLEtBQXFCSyxpQkFBaUIsQ0FBQy9GLEtBQUssQ0FBQzBGLFFBQU4sQ0FBZSxDQUFmLENBQUQsQ0FBdEM7QUFDQTFGLFNBQUssQ0FBQzBGLFFBQU4sQ0FBZSxDQUFmLEtBQXFCTSxpQkFBaUIsQ0FBQ2hHLEtBQUssQ0FBQzBGLFFBQU4sQ0FBZSxDQUFmLENBQUQsQ0FBdEM7QUFDQTFGLFNBQUssQ0FBQzBGLFFBQU4sQ0FBZSxDQUFmLEtBQXFCTyxpQkFBaUIsQ0FBQ2pHLEtBQUssQ0FBQzBGLFFBQU4sQ0FBZSxDQUFmLENBQUQsQ0FBdEM7QUFDQTFGLFNBQUssQ0FBQzBGLFFBQU4sQ0FBZSxDQUFmLEtBQXFCUSxpQkFBaUIsQ0FBQ2xHLEtBQUssQ0FBQzBGLFFBQU4sQ0FBZSxDQUFmLENBQUQsQ0FBdEM7QUFDQTFGLFNBQUssQ0FBQzBGLFFBQU4sQ0FBZSxDQUFmLEtBQXFCUyxpQkFBaUIsQ0FBQ25HLEtBQUssQ0FBQzBGLFFBQU4sQ0FBZSxDQUFmLENBQUQsQ0FBdEM7QUFDQTFGLFNBQUssQ0FBQzBGLFFBQU4sQ0FBZSxDQUFmLEtBQXFCVSxrQkFBa0IsQ0FBQ3BHLEtBQUssQ0FBQzBGLFFBQU4sQ0FBZSxDQUFmLENBQUQsQ0FBdkM7QUFDQTFGLFNBQUssQ0FBQzBGLFFBQU4sQ0FBZSxFQUFmLEtBQXNCVyxrQkFBa0IsQ0FBQ3JHLEtBQUssQ0FBQzBGLFFBQU4sQ0FBZSxFQUFmLENBQUQsQ0FBeEM7QUFDQTFGLFNBQUssQ0FBQzBGLFFBQU4sQ0FBZSxFQUFmLEtBQXNCWSxrQkFBa0IsQ0FBQ3RHLEtBQUssQ0FBQzBGLFFBQU4sQ0FBZSxFQUFmLENBQUQsQ0FBeEM7QUFDRCxHQWJRLEVBYU4sQ0FBQzFGLEtBQUQsQ0FiTSxDQUFULENBdkxJLENBc01KOztBQUNBeUIseURBQVMsQ0FBQyxZQUFNO0FBQ2R6QixTQUFLLENBQUN1RyxRQUFOLENBQWUsQ0FBZixLQUFxQkMsaUJBQWlCLENBQUN4RyxLQUFLLENBQUN1RyxRQUFOLENBQWUsQ0FBZixDQUFELENBQXRDO0FBQ0F2RyxTQUFLLENBQUN1RyxRQUFOLENBQWUsQ0FBZixLQUFxQkUsaUJBQWlCLENBQUN6RyxLQUFLLENBQUN1RyxRQUFOLENBQWUsQ0FBZixDQUFELENBQXRDO0FBQ0F2RyxTQUFLLENBQUN1RyxRQUFOLENBQWUsQ0FBZixLQUFxQkcsaUJBQWlCLENBQUMxRyxLQUFLLENBQUN1RyxRQUFOLENBQWUsQ0FBZixDQUFELENBQXRDO0FBQ0F2RyxTQUFLLENBQUN1RyxRQUFOLENBQWUsQ0FBZixLQUFxQkksaUJBQWlCLENBQUMzRyxLQUFLLENBQUN1RyxRQUFOLENBQWUsQ0FBZixDQUFELENBQXRDO0FBQ0F2RyxTQUFLLENBQUN1RyxRQUFOLENBQWUsQ0FBZixLQUFxQkssaUJBQWlCLENBQUM1RyxLQUFLLENBQUN1RyxRQUFOLENBQWUsQ0FBZixDQUFELENBQXRDO0FBQ0F2RyxTQUFLLENBQUN1RyxRQUFOLENBQWUsQ0FBZixLQUFxQk0saUJBQWlCLENBQUM3RyxLQUFLLENBQUN1RyxRQUFOLENBQWUsQ0FBZixDQUFELENBQXRDO0FBQ0F2RyxTQUFLLENBQUN1RyxRQUFOLENBQWUsQ0FBZixLQUFxQk8saUJBQWlCLENBQUM5RyxLQUFLLENBQUN1RyxRQUFOLENBQWUsQ0FBZixDQUFELENBQXRDO0FBQ0F2RyxTQUFLLENBQUN1RyxRQUFOLENBQWUsQ0FBZixLQUFxQlEsaUJBQWlCLENBQUMvRyxLQUFLLENBQUN1RyxRQUFOLENBQWUsQ0FBZixDQUFELENBQXRDO0FBQ0F2RyxTQUFLLENBQUN1RyxRQUFOLENBQWUsQ0FBZixLQUFxQlMsaUJBQWlCLENBQUNoSCxLQUFLLENBQUN1RyxRQUFOLENBQWUsQ0FBZixDQUFELENBQXRDO0FBQ0F2RyxTQUFLLENBQUN1RyxRQUFOLENBQWUsQ0FBZixLQUFxQlUsa0JBQWtCLENBQUNqSCxLQUFLLENBQUN1RyxRQUFOLENBQWUsQ0FBZixDQUFELENBQXZDO0FBQ0F2RyxTQUFLLENBQUN1RyxRQUFOLENBQWUsRUFBZixLQUFzQlcsa0JBQWtCLENBQUNsSCxLQUFLLENBQUN1RyxRQUFOLENBQWUsRUFBZixDQUFELENBQXhDO0FBQ0F2RyxTQUFLLENBQUN1RyxRQUFOLENBQWUsRUFBZixLQUFzQlksa0JBQWtCLENBQUNuSCxLQUFLLENBQUN1RyxRQUFOLENBQWUsRUFBZixDQUFELENBQXhDO0FBQ0QsR0Fi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LENBQWUsQ0FBZixDQUFELENBQXRDO0FBQ0E5SSxTQUFLLENBQUM4SSxRQUFOLENBQWUsQ0FBZixLQUFxQkksaUJBQWlCLENBQUNsSixLQUFLLENBQUM4SSxRQUFOLENBQWUsQ0FBZixDQUFELENBQXRDO0FBQ0E5SSxTQUFLLENBQUM4SSxRQUFOLENBQWUsQ0FBZixLQUFxQkssaUJBQWlCLENBQUNuSixLQUFLLENBQUM4SSxRQUFOLENBQWUsQ0FBZixDQUFELENBQXRDO0FBQ0E5SSxTQUFLLENBQUM4SSxRQUFOLENBQWUsQ0FBZixLQUFxQk0saUJBQWlCLENBQUNwSixLQUFLLENBQUM4SSxRQUFOLENBQWUsQ0FBZixDQUFELENBQXRDO0FBQ0E5SSxTQUFLLENBQUM4SSxRQUFOLENBQWUsQ0FBZixLQUFxQk8saUJBQWlCLENBQUNySixLQUFLLENBQUM4SSxRQUFOLENBQWUsQ0FBZixDQUFELENBQXRDO0FBQ0E5SSxTQUFLLENBQUM4SSxRQUFOLENBQWUsQ0FBZixLQUFxQlEsaUJBQWlCLENBQUN0SixLQUFLLENBQUM4SSxRQUFOLENBQWUsQ0FBZixDQUFELENBQXRDO0FBQ0E5SSxTQUFLLENBQUM4SSxRQUFOLENBQWUsQ0FBZixLQUFxQlMsaUJBQWlCLENBQUN2SixLQUFLLENBQUM4SSxRQUFOLENBQWUsQ0FBZixDQUFELENBQXRDO0FBQ0E5SSxTQUFLLENBQUM4SSxRQUFOLENBQWUsQ0FBZixLQUFxQlUsa0JBQWtCLENBQUN4SixLQUFLLENBQUM4SSxRQUFOLENBQWUsQ0FBZixDQUFELENBQXZDO0FBQ0E5SSxTQUFLLENBQUM4SSxRQUFOLENBQWUsRUFBZixLQUFzQlcsa0JBQWtCLENBQUN6SixLQUFLLENBQUM4SSxRQUFOLENBQWUsRUFBZixDQUFELENBQXhDO0FBQ0E5SSxTQUFLLENBQUM4SSxRQUFOLENBQWUsRUFBZixLQUFzQlksa0JBQWtCLENBQUMxSixLQUFLLENBQUM4SSxRQUFOLENBQWUsRUFBZixDQUFELENBQXhDO0FBQ0QsR0FiUSxFQWFOLENBQUM5SSxLQUFELENBYk0sQ0FBVCxDQXZQ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Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNDIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2Rhc2hib2FyZC9wcm9qZWN0cy9bcHJvamVjdF0vYnVzaW5lc3MtcGxhbi40Yzk5ZmE4MDYxMTI4Y2ExZGJmNy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUNhbGxiYWNrLCB1c2VFZmZlY3QsIHVzZU1lbW8sIHVzZVJlZiwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBDaGFydEpzSW1hZ2UgZnJvbSAnY2hhcnRqcy10by1pbWFnZSc7XHJcbi8vIGltcG9ydCBDaGFydEpTSW1hZ2UgZnJvbSAnY2hhcnQuanMtaW1hZ2UnO1xyXG5pbXBvcnQgTXlEb2N1bWVudDEgZnJvbSAnLi9QREZDaGFydCc7XHJcbmltcG9ydCB7IHBkZiwgUGFnZSwgVGV4dCwgVmlldywgRG9jdW1lbnQsIFN0eWxlU2hlZXQsIEJsb2JQcm92aWRlciwgUERGRG93bmxvYWRMaW5rIH0gZnJvbSAnQHJlYWN0LXBkZi9yZW5kZXJlcic7XHJcbmltcG9ydCB7IHY0IGFzIHV1aWR2NCB9IGZyb20gJ3V1aWQnO1xyXG5pbXBvcnQgZGVib3VuY2UgZnJvbSAnLi4vLi4vLi4vLi4vLi4vdXRpbHMvaGVscGVycyc7XHJcbmltcG9ydCB7IGRiIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vbGliL2ZpcmViYXNlJztcclxuaW1wb3J0IGdzYXAsIHsgUG93ZXI0LCBMaW5lYXIgfSBmcm9tICdnc2FwJztcclxuaW1wb3J0IEltYWdlIGZyb20gJ25leHQvaW1hZ2UnO1xyXG5pbXBvcnQgUm91dGVyIGZyb20gJ25leHQvcm91dGVyJztcclxuXHJcbi8vIENoYXJ0IGZ1bmN0aW9uc1xyXG4vLyBpbXBvcnQgeyBjaGFydExhYmVsc1VwZGF0ZSB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL3V0aWxzL2NoYXJ0JztcclxuXHJcbi8vIGNvbnN0IE15RG9jdW1lbnQgPSAoeyBpbWFnZVVybCB9KSA9PiB7XHJcbi8vICAgLy8gY29uc29sZS5sb2coaW1hZ2VVcmwpO1xyXG4vLyAgIHJldHVybiAoXHJcbi8vICAgICA8RG9jdW1lbnQ+XHJcbi8vICAgICAgIDxQYWdlIHNpemU9J0E0Jz5cclxuLy8gICAgICAgICA8Vmlldz5cclxuLy8gICAgICAgICAgIDxUZXh0PlNlY3Rpb24gIzE8L1RleHQ+XHJcbi8vICAgICAgICAgPC9WaWV3PlxyXG4vLyAgICAgICAgIDxWaWV3PlxyXG4vLyAgICAgICAgICAgPEltYWdlIHNyYz17aW1hZ2VVcmwgJiYgaW1hZ2VVcmx9IC8+XHJcbi8vICAgICAgICAgPC9WaWV3PlxyXG4vLyAgICAgICA8L1BhZ2U+XHJcbi8vICAgICA8L0RvY3VtZW50PlxyXG4vLyAgICk7XHJcbi8vIH07XHJcblxyXG5jb25zdCBDaGFydEpzQ29tcG9uZW50ID0gKHtcclxuICBjaGFydEltYWdlVXBkYXRlLFxyXG4gIHByb3ZpZGVkLFxyXG4gIHByb2plY3RJZCxcclxuICBhZGRDaGFydCxcclxuICBjaGFydFR5cGVVcGRhdGUsXHJcbiAgY3VycmVudEluZGV4LFxyXG4gIGRlbGV0ZUZpZWxkLFxyXG4gIGNvbnRhaW5lclJlZixcclxuICBkYXRhc2V0TGFiZWw2VXBkYXRlLFxyXG4gIGRhdGFzZXRMYWJlbDVVcGRhdGUsXHJcbiAgZGF0YXNldExhYmVsNFVwZGF0ZSxcclxuICBkYXRhc2V0TGFiZWwzVXBkYXRlLFxyXG4gIGRhdGFzZXRMYWJlbDJVcGRhdGUsXHJcbiAgZGF0YXNldExhYmVsMVVwZGF0ZSxcclxuICBkYXRhc2V0NlVwZGF0ZSxcclxuICBkYXRhc2V0NVVwZGF0ZSxcclxuICBkYXRhc2V0NFVwZGF0ZSxcclxuICBkYXRhc2V0M1VwZGF0ZSxcclxuICBkYXRhc2V0MlVwZGF0ZSxcclxuICBkYXRhc2V0MVVwZGF0ZSxcclxuICBsYWJlbFVwZGF0ZSxcclxuICBjaGFydExhYmVsc1VwZGF0ZSxcclxuICBmaWVsZCxcclxuICBzZWxlY3RlZFNlY3Rpb24sXHJcbiAgY2hhcnRWYWx1ZVVwZGF0ZSxcclxuICBpbmRleCxcclxufSkgPT4ge1xyXG4gIGNvbnNvbGUubG9nKCdGSUVMRCAtLT4gJywgZmllbGQpO1xyXG4gIGNvbnN0IGNoYXJ0UmVmID0gdXNlUmVmKCk7XHJcblxyXG4gIGNvbnN0IFtpbnB1dERhdGEsIHNldElucHV0RGF0YV0gPSB1c2VTdGF0ZSgnU2ltcGxlIGxlZ2VuZCcpO1xyXG5cclxuICBjb25zdCB0b1NhdmVDaGFydCA9IG5ldyBDaGFydEpzSW1hZ2UoKTtcclxuICB0b1NhdmVDaGFydC5zZXRDb25maWcoe1xyXG4gICAgdHlwZTogJ2JhcicsXHJcbiAgICBkYXRhOiBkYXRhLFxyXG4gICAgb3B0aW9uczoge1xyXG4gICAgICByZXNwb25zaXZlOiBmYWxzZSxcclxuICAgICAgc2NhbGVzOiB7XHJcbiAgICAgICAgeToge1xyXG4gICAgICAgICAgYmVnaW5BdFplcm86IHRydWUsXHJcbiAgICAgICAgfSxcclxuICAgICAgfSxcclxuICAgIH0sXHJcbiAgfSk7XHJcblxyXG4gIGNvbnN0IFtpbWFnZVVybCwgc2V0SW1hZ2VVcmxdID0gdXNlU3RhdGUoKTtcclxuXHJcbiAgY29uc3Qgb25DaGFydFNhdmUgPSBhc3luYyAoKSA9PiB7XHJcbiAgICBjb25zb2xlLmxvZyhhd2FpdCB0b1NhdmVDaGFydC50b0RhdGFVcmwoKSk7XHJcbiAgICAvLyBzZXRJbWFnZVVybChhd2FpdCB0b1NhdmVDaGFydC50b0RhdGFVcmwoKSk7XHJcbiAgfTtcclxuXHJcbiAgdXNlRWZmZWN0KGFzeW5jICgpID0+IHtcclxuICAgIHNldEltYWdlVXJsKGF3YWl0IHRvU2F2ZUNoYXJ0LnRvRGF0YVVybCgpKTtcclxuICAgIGNvbnNvbGUubG9nKGltYWdlVXJsKTtcclxuICB9LCBbXSk7XHJcblxyXG4gIGNvbnN0IFtvcGVuLCBzZXRPcGVuXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIHNldE9wZW4oZmFsc2UpO1xyXG4gICAgc2V0T3Blbih0cnVlKTtcclxuICAgIHJldHVybiAoKSA9PiBzZXRPcGVuKGZhbHNlKTtcclxuICB9KTtcclxuXHJcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gVkFMVUVTIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICBjb25zdCBbbmFtZSwgc2V0TmFtZV0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgY29uc3QgW3R5cGUsIHNldFR5cGVdID0gdXNlU3RhdGUoJycpO1xyXG4gIGNvbnN0IFt2YWx1ZSwgc2V0VmFsdWVdID0gdXNlU3RhdGUoJycpO1xyXG4gIGNvbnN0IFtjb2xvciwgc2V0Q29sb3JdID0gdXNlU3RhdGUoJycpO1xyXG5cclxuICBjb25zdCB1cGRhdGUgPSB1c2VDYWxsYmFjayhcclxuICAgIGRlYm91bmNlKGFzeW5jIChkYXRhKSA9PiB7XHJcbiAgICAgIGNvbnN0IGN1cnJlbnRTZWN0aW9uSW5kZXggPSBhd2FpdCBkYXRhLnNlbFNlY3Rpb24uZmllbGRzLmZpbmRJbmRleCgoZmllbGQpID0+IGZpZWxkLmluZGV4ID09IGRhdGEuaW5kZXgpO1xyXG4gICAgICBjaGFydFZhbHVlVXBkYXRlKGRhdGEsIGRhdGEuaW5kZXgsIGN1cnJlbnRTZWN0aW9uSW5kZXgpO1xyXG4gICAgfSwgNTAwKSxcclxuICAgIFtdXHJcbiAgKTtcclxuXHJcbiAgY29uc3QgdXBkYXRlTmFtZSA9ICh2YWwpID0+IHtcclxuICAgIGNvbnN0IGRhdGEgPSB7XHJcbiAgICAgIG5hbWU6IHZhbCxcclxuICAgICAgaW5kZXgsXHJcbiAgICAgIHNlbFNlY3Rpb246IHNlbGVjdGVkU2VjdGlvbixcclxuICAgIH07XHJcbiAgICAvLyB1cGRhdGUoZGF0YSk7XHJcbiAgICBzZXROYW1lKHZhbCk7XHJcbiAgfTtcclxuICBjb25zdCB1cGRhdGVUeXBlID0gKHZhbCkgPT4ge1xyXG4gICAgY29uc3QgZGF0YSA9IHtcclxuICAgICAgdHlwZTogdmFsLFxyXG4gICAgICBpbmRleCxcclxuICAgICAgc2VsU2VjdGlvbjogc2VsZWN0ZWRTZWN0aW9uLFxyXG4gICAgfTtcclxuICAgIC8vIHVwZGF0ZShkYXRhKTtcclxuICAgIHNldFR5cGUodmFsKTtcclxuICB9O1xyXG4gIGNvbnN0IHVwZGF0ZVZhbHVlID0gKHZhbCkgPT4ge1xyXG4gICAgY29uc3QgZGF0YSA9IHtcclxuICAgICAgdmFsdWU6IHZhbCxcclxuICAgICAgaW5kZXgsXHJcbiAgICAgIHNlbFNlY3Rpb246IHNlbGVjdGVkU2VjdGlvbixcclxuICAgIH07XHJcbiAgICAvLyB1cGRhdGUoZGF0YSk7XHJcbiAgICBzZXRWYWx1ZSh2YWwpO1xyXG4gIH07XHJcbiAgY29uc3QgdXBkYXRlQ29sb3IgPSAodmFsKSA9PiB7XHJcbiAgICBjb25zdCBkYXRhID0ge1xyXG4gICAgICBjb2xvcjogdmFsLFxyXG4gICAgICBpbmRleCxcclxuICAgICAgc2VsU2VjdGlvbjogc2VsZWN0ZWRTZWN0aW9uLFxyXG4gICAgfTtcclxuICAgIC8vIHVwZGF0ZShkYXRhKTtcclxuICAgIHNldENvbG9yKHZhbCk7XHJcbiAgfTtcclxuXHJcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gTmV3IENoYXJ0IFZhbHVlcyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICBjb25zdCBvbk5ld0RhdGFDaGFydEFkZCA9IGFzeW5jICgpID0+IHtcclxuICAgIGNvbnN0IG5ld0RhdGEgPSB7XHJcbiAgICAgIG5hbWUsXHJcbiAgICAgIHR5cGUsXHJcbiAgICAgIHZhbHVlLFxyXG4gICAgICBjb2xvcixcclxuICAgIH07XHJcbiAgICBjb25zdCBjdXJyZW50Q2hhcnRJbmRleCA9IGF3YWl0IHNlbGVjdGVkU2VjdGlvbi5maWVsZHMuZmluZEluZGV4KChmaWVsZCkgPT4gZmllbGQuaW5kZXggPT0gaW5kZXgpO1xyXG4gICAgLy8gbGV0IG5ld0ZpZWxkc0FycmF5ID0gWy4uLnNlbGVjdGVkU2VjdGlvbi5maWVsZHNdO1xyXG4gICAgY29uc3QgbmV3U2VsZWN0ZWRTZWN0aW9uID0gc2VsZWN0ZWRTZWN0aW9uO1xyXG4gICAgbmV3U2VsZWN0ZWRTZWN0aW9uLmZpZWxkc1tjdXJyZW50Q2hhcnRJbmRleF0uZGF0YS5wdXNoKG5ld0RhdGEpO1xyXG4gICAgY29uc29sZS5sb2cobmV3U2VsZWN0ZWRTZWN0aW9uKTtcclxuXHJcbiAgICAvLyBuZXdGaWVsZHNBcnJheVtjdXJyZW50Q2hhcnRJbmRleF0gPSB7XHJcbiAgICAvLyAgIGluZGV4LFxyXG4gICAgLy8gICB0eXBlOiAnY2hhcnQnLFxyXG4gICAgLy8gICBkYXRhOiAnRCdcclxuICAgIC8vIH1cclxuXHJcbiAgICBkYi5jb2xsZWN0aW9uKCdwcm9qZWN0cycpXHJcbiAgICAgIC5kb2MocHJvamVjdElkKVxyXG4gICAgICAuY29sbGVjdGlvbignYnVzaW5lc3NQbGFuJylcclxuICAgICAgLmRvYyhSb3V0ZXIucXVlcnkucHJvamVjdClcclxuICAgICAgLmNvbGxlY3Rpb24oJ2lucHV0cycpXHJcbiAgICAgIC8vIC5jb2xsZWN0aW9uKCdjdXJyZW50QnVzaW5lc3NQbGFuJylcclxuICAgICAgLy8gICAuZG9jKCdHcmN2aHlKd3ZsV1Z5MzFRc2l1ZG9RS2RLSTcyJylcclxuICAgICAgLy8gICAuY29sbGVjdGlvbignaW5wdXRzJylcclxuICAgICAgLmRvYyhzZWxlY3RlZFNlY3Rpb24uaWQpXHJcbiAgICAgIC51cGRhdGUoe1xyXG4gICAgICAgIGZpZWxkczogbmV3U2VsZWN0ZWRTZWN0aW9uLmZpZWxkcyxcclxuICAgICAgfSk7XHJcbiAgfTtcclxuXHJcbiAgLy8gQ2hhcnQgRGF0YSBmZXRjaGluZ1xyXG4gIGNvbnN0IFtjaGFydERhdGEsIHNldENoYXJ0RGF0YV0gPSB1c2VTdGF0ZSgpO1xyXG5cclxuICB1c2VFZmZlY3QoYXN5bmMgKCkgPT4ge1xyXG4gICAgY29uc3QgY3VycmVudENoYXJ0SW5kZXggPSBhd2FpdCBzZWxlY3RlZFNlY3Rpb24uZmllbGRzLmZpbmRJbmRleCgoZmllbGQpID0+IGZpZWxkLmluZGV4ID09IGluZGV4KTtcclxuICAgIGRiLmNvbGxlY3Rpb24oJ3Byb2plY3RzJylcclxuICAgICAgLmRvYyhwcm9qZWN0SWQpXHJcbiAgICAgIC5jb2xsZWN0aW9uKCdidXNpbmVzc1BsYW4nKVxyXG4gICAgICAuZG9jKFJvdXRlci5xdWVyeS5wcm9qZWN0KVxyXG4gICAgICAuY29sbGVjdGlvbignaW5wdXRzJylcclxuICAgICAgLy8gLmNvbGxlY3Rpb24oJ2N1cnJlbnRCdXNpbmVzc1BsYW4nKVxyXG4gICAgICAvLyAgIC5kb2MoJ0dyY3ZoeUp3dmxXVnkzMVFzaXVkb1FLZEtJNzInKVxyXG4gICAgICAvLyAgIC5jb2xsZWN0aW9uKCdpbnB1dHMnKVxyXG4gICAgICAuZG9jKHNlbGVjdGVkU2VjdGlvbi5pZClcclxuICAgICAgLm9uU25hcHNob3QoKHNlcnZlclVwZGF0ZSkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGZpZWxkcyA9IHNlcnZlclVwZGF0ZS5kYXRhKCkuZmllbGRzLm1hcCgoZmllbGQpID0+IHtcclxuICAgICAgICAgIHJldHVybiBmaWVsZDtcclxuICAgICAgICB9KTtcclxuICAgICAgICBzZXRDaGFydERhdGEoZmllbGRzW2N1cnJlbnRDaGFydEluZGV4XSk7XHJcbiAgICAgICAgY29uc29sZS5sb2coZmllbGRzW2N1cnJlbnRDaGFydEluZGV4XSk7XHJcbiAgICAgICAgLy8gc2VjdGlvbnMuc29ydCgoYSwgYikgPT4gYi5jcmVhdGVkQXQgLSBhLmNyZWF0ZWRBdCk7XHJcbiAgICAgICAgLy8gdGhpcy5zZXRTdGF0ZSh7IHNlY3Rpb25zOiBzZWN0aW9ucyB9KTtcclxuICAgICAgfSk7XHJcbiAgfSwgW10pO1xyXG4gIGNvbnNvbGUubG9nKGZpZWxkKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGZpZWxkLmxhYmVsc1swXSAmJiBzZXRMYWJlbDEoZmllbGQubGFiZWxzWzBdKTtcclxuICAgIGZpZWxkLmxhYmVsc1sxXSAmJiBzZXRMYWJlbDIoZmllbGQubGFiZWxzWzFdKTtcclxuICAgIGZpZWxkLmxhYmVsc1syXSAmJiBzZXRMYWJlbDMoZmllbGQubGFiZWxzWzJdKTtcclxuICAgIGZpZWxkLmxhYmVsc1szXSAmJiBzZXRMYWJlbDQoZmllbGQubGFiZWxzWzNdKTtcclxuICAgIGZpZWxkLmxhYmVsc1s0XSAmJiBzZXRMYWJlbDUoZmllbGQubGFiZWxzWzRdKTtcclxuICAgIGZpZWxkLmxhYmVsc1s1XSAmJiBzZXRMYWJlbDYoZmllbGQubGFiZWxzWzVdKTtcclxuICAgIGZpZWxkLmxhYmVsc1s2XSAmJiBzZXRMYWJlbDcoZmllbGQubGFiZWxzWzZdKTtcclxuICAgIGZpZWxkLmxhYmVsc1s3XSAmJiBzZXRMYWJlbDgoZmllbGQubGFiZWxzWzddKTtcclxuICAgIGZpZWxkLmxhYmVsc1s4XSAmJiBzZXRMYWJlbDkoZmllbGQubGFiZWxzWzhdKTtcclxuICAgIGZpZWxkLmxhYmVsc1s5XSAmJiBzZXRMYWJlbDEwKGZpZWxkLmxhYmVsc1s5XSk7XHJcbiAgICBmaWVsZC5sYWJlbHNbMTBdICYmIHNldExhYmVsMTEoZmllbGQubGFiZWxzWzEwXSk7XHJcbiAgICBmaWVsZC5sYWJlbHNbMTFdICYmIHNldExhYmVsMTIoZmllbGQubGFiZWxzWzExXSk7XHJcbiAgfSwgW2ZpZWxkXSk7XHJcblxyXG4gIC8vIERhdGFzZXQxXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGZpZWxkLmRhdGFzZXQxWzBdICYmIHNldERhdGFzZXQxVmFsdWUxKGZpZWxkLmRhdGFzZXQxWzBdKTtcclxuICAgIGZpZWxkLmRhdGFzZXQxWzFdICYmIHNldERhdGFzZXQxVmFsdWUyKGZpZWxkLmRhdGFzZXQxWzFdKTtcclxuICAgIGZpZWxkLmRhdGFzZXQxWzJdICYmIHNldERhdGFzZXQxVmFsdWUzKGZpZWxkLmRhdGFzZXQxWzJdKTtcclxuICAgIGZpZWxkLmRhdGFzZXQxWzNdICYmIHNldERhdGFzZXQxVmFsdWU0KGZpZWxkLmRhdGFzZXQxWzNdKTtcclxuICAgIGZpZWxkLmRhdGFzZXQxWzRdICYmIHNldERhdGFzZXQxVmFsdWU1KGZpZWxkLmRhdGFzZXQxWzRdKTtcclxuICAgIGZpZWxkLmRhdGFzZXQxWzVdICYmIHNldERhdGFzZXQxVmFsdWU2KGZpZWxkLmRhdGFzZXQxWzVdKTtcclxuICAgIGZpZWxkLmRhdGFzZXQxWzZdICYmIHNldERhdGFzZXQxVmFsdWU3KGZpZWxkLmRhdGFzZXQxWzZdKTtcclxuICAgIGZpZWxkLmRhdGFzZXQxWzddICYmIHNldERhdGFzZXQxVmFsdWU4KGZpZWxkLmRhdGFzZXQxWzddKTtcclxuICAgIGZpZWxkLmRhdGFzZXQxWzhdICYmIHNldERhdGFzZXQxVmFsdWU5KGZpZWxkLmRhdGFzZXQxWzhdKTtcclxuICAgIGZpZWxkLmRhdGFzZXQxWzldICYmIHNldERhdGFzZXQxVmFsdWUxMChmaWVsZC5kYXRhc2V0MVs5XSk7XHJcbiAgICBmaWVsZC5kYXRhc2V0MVsxMF0gJiYgc2V0RGF0YXNldDFWYWx1ZTExKGZpZWxkLmRhdGFzZXQxWzEwXSk7XHJcbiAgICBmaWVsZC5kYXRhc2V0MVsxMV0gJiYgc2V0RGF0YXNldDFWYWx1ZTEyKGZpZWxkLmRhdGFzZXQxWzExXSk7XHJcbiAgfSwgW2ZpZWxkXSk7XHJcblxyXG4gIC8vIERhdGFzZXQyXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGZpZWxkLmRhdGFzZXQyWzBdICYmIHNldERhdGFzZXQyVmFsdWUxKGZpZWxkLmRhdGFzZXQyWzBdKTtcclxuICAgIGZpZWxkLmRhdGFzZXQyWzFdICYmIHNldERhdGFzZXQyVmFsdWUyKGZpZWxkLmRhdGFzZXQyWzFdKTtcclxuICAgIGZpZWxkLmRhdGFzZXQyWzJdICYmIHNldERhdGFzZXQyVmFsdWUzKGZpZWxkLmRhdGFzZXQyWzJdKTtcclxuICAgIGZpZWxkLmRhdGFzZXQyWzNdICYmIHNldERhdGFzZXQyVmFsdWU0KGZpZWxkLmRhdGFzZXQyWzNdKTtcclxuICAgIGZpZWxkLmRhdGFzZXQyWzRdICYmIHNldERhdGFzZXQyVmFsdWU1KGZpZWxkLmRhdGFzZXQyWzRdKTtcclxuICAgIGZpZWxkLmRhdGFzZXQyWzVdICYmIHNldERhdGFzZXQyVmFsdWU2KGZpZWxkLmRhdGFzZXQyWzVdKTtcclxuICAgIGZpZWxkLmRhdGFzZXQyWzZdICYmIHNldERhdGFzZXQyVmFsdWU3KGZpZWxkLmRhdGFzZXQyWzZdKTtcclxuICAgIGZpZWxkLmRhdGFzZXQyWzddICYmIHNldERhdGFzZXQyVmFsdWU4KGZpZWxkLmRhdGFzZXQyWzddKTtcclxuICAgIGZpZWxkLmRhdGFzZXQyWzhdICYmIHNldERhdGFzZXQyVmFsdWU5KGZpZWxkLmRhdGFzZXQyWzhdKTtcclxuICAgIGZpZWxkLmRhdGFzZXQyWzldICYmIHNldERhdGFzZXQyVmFsdWUxMChmaWVsZC5kYXRhc2V0Mls5XSk7XHJcbiAgICBmaWVsZC5kYXRhc2V0MlsxMF0gJiYgc2V0RGF0YXNldDJWYWx1ZTExKGZpZWxkLmRhdGFzZXQyWzEwXSk7XHJcbiAgICBmaWVsZC5kYXRhc2V0MlsxMV0gJiYgc2V0RGF0YXNldDJWYWx1ZTEyKGZpZWxkLmRhdGFzZXQyWzExXSk7XHJcbiAgfSwgW2ZpZWxkXSk7XHJcblxyXG4gIC8vIERhdGFzZXQzXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGZpZWxkLmRhdGFzZXQzWzBdICYmIHNldERhdGFzZXQzVmFsdWUxKGZpZWxkLmRhdGFzZXQzWzBdKTtcclxuICAgIGZpZWxkLmRhdGFzZXQzWzFdICYmIHNldERhdGFzZXQzVmFsdWUyKGZpZWxkLmRhdGFzZXQzWzFdKTtcclxuICAgIGZpZWxkLmRhdGFzZXQzWzJdICYmIHNldERhdGFzZXQzVmFsdWUzKGZpZWxkLmRhdGFzZXQzWzJdKTtcclxuICAgIGZpZWxkLmRhdGFzZXQzWzNdICYmIHNldERhdGFzZXQzVmFsdWU0KGZpZWxkLmRhdGFzZXQzWzNdKTtcclxuICAgIGZpZWxkLmRhdGFzZXQzWzRdICYmIHNldERhdGFzZXQzVmFsdWU1KGZpZWxkLmRhdGFzZXQzWzRdKTtcclxuICAgIGZpZWxkLmRhdGFzZXQzWzVdICYmIHNldERhdGFzZXQzVmFsdWU2KGZpZWxkLmRhdGFzZXQzWzVdKTtcclxuICAgIGZpZWxkLmRhdGFzZXQzWzZdICYmIHNldERhdGFzZXQzVmFsdWU3KGZpZWxkLmRhdGFzZXQzWzZdKTtcclxuICAgIGZpZWxkLmRhdGFzZXQzWzddICYmIHNldERhdGFzZXQzVmFsdWU4KGZpZWxkLmRhdGFzZXQzWzddKTtcclxuICAgIGZpZWxkLmRhdGFzZXQzWzhdICYmIHNldERhdGFzZXQzVmFsdWU5KGZpZWxkLmRhdGFzZXQzWzhdKTtcclxuICAgIGZpZWxkLmRhdGFzZXQzWzldICYmIHNldERhdGFzZXQzVmFsdWUxMChmaWVsZC5kYXRhc2V0M1s5XSk7XHJcbiAgICBmaWVsZC5kYXRhc2V0M1sxMF0gJiYgc2V0RGF0YXNldDNWYWx1ZTExKGZpZWxkLmRhdGFzZXQzWzEwXSk7XHJcbiAgICBmaWVsZC5kYXRhc2V0M1sxMV0gJiYgc2V0RGF0YXNldDNWYWx1ZTEyKGZpZWxkLmRhdGFzZXQzWzExXSk7XHJcbiAgfSwgW2ZpZWxkXSk7XHJcblxyXG4gIC8vIERhdGFzZXQ0XHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGZpZWxkLmRhdGFzZXQ0WzBdICYmIHNldERhdGFzZXQ0VmFsdWUxKGZpZWxkLmRhdGFzZXQ0WzBdKTtcclxuICAgIGZpZWxkLmRhdGFzZXQ0WzFdICYmIHNldERhdGFzZXQ0VmFsdWUyKGZpZWxkLmRhdGFzZXQ0WzFdKTtcclxuICAgIGZpZWxkLmRhdGFzZXQ0WzJdICYmIHNldERhdGFzZXQ0VmFsdWUzKGZpZWxkLmRhdGFzZXQ0WzJdKTtcclxuICAgIGZpZWxkLmRhdGFzZXQ0WzNdICYmIHNldERhdGFzZXQ0VmFsdWU0KGZpZWxkLmRhdGFzZXQ0WzNdKTtcclxuICAgIGZpZWxkLmRhdGFzZXQ0WzRdICYmIHNldERhdGFzZXQ0VmFsdWU1KGZpZWxkLmRhdGFzZXQ0WzRdKTtcclxuICAgIGZpZWxkLmRhdGFzZXQ0WzVdICYmIHNldERhdGFzZXQ0VmFsdWU2KGZpZWxkLmRhdGFzZXQ0WzVdKTtcclxuICAgIGZpZWxkLmRhdGFzZXQ0WzZdICYmIHNldERhdGFzZXQ0VmFsdWU3KGZpZWxkLmRhdGFzZXQ0WzZdKTtcclxuICAgIGZpZWxkLmRhdGFzZXQ0WzddICYmIHNldERhdGFzZXQ0VmFsdWU4KGZpZWxkLmRhdGFzZXQ0WzddKTtcclxuICAgIGZpZWxkLmRhdGFzZXQ0WzhdICYmIHNldERhdGFzZXQ0VmFsdWU5KGZpZWxkLmRhdGFzZXQ0WzhdKTtcclxuICAgIGZpZWxkLmRhdGFzZXQ0WzldICYmIHNldERhdGFzZXQ0VmFsdWUxMChmaWVsZC5kYXRhc2V0NFs5XSk7XHJcbiAgICBmaWVsZC5kYXRhc2V0NFsxMF0gJiYgc2V0RGF0YXNldDRWYWx1ZTExKGZpZWxkLmRhdGFzZXQ0WzEwXSk7XHJcbiAgICBmaWVsZC5kYXRhc2V0NFsxMV0gJiYgc2V0RGF0YXNldDRWYWx1ZTEyKGZpZWxkLmRhdGFzZXQ0WzExXSk7XHJcbiAgfSwgW2ZpZWxkXSk7XHJcblxyXG4gIC8vIERhdGFzZXQ1XHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGZpZWxkLmRhdGFzZXQ1WzBdICYmIHNldERhdGFzZXQ1VmFsdWUxKGZpZWxkLmRhdGFzZXQ1WzBdKTtcclxuICAgIGZpZWxkLmRhdGFzZXQ1WzFdICYmIHNldERhdGFzZXQ1VmFsdWUyKGZpZWxkLmRhdGFzZXQ1WzFdKTtcclxuICAgIGZpZWxkLmRhdGFzZXQ1WzJdICYmIHNldERhdGFzZXQ1VmFsdWUzKGZpZWxkLmRhdGFzZXQ1WzJdKTtcclxuICAgIGZpZWxkLmRhdGFzZXQ1WzNdICYmIHNldERhdGFzZXQ1VmFsdWU0KGZpZWxkLmRhdGFzZXQ1WzNdKTtcclxuICAgIGZpZWxkLmRhdGFzZXQ1WzRdICYmIHNldERhdGFzZXQ1VmFsdWU1KGZpZWxkLmRhdGFzZXQ1WzRdKTtcclxuICAgIGZpZWxkLmRhdGFzZXQ1WzVdICYmIHNldERhdGFzZXQ1VmFsdWU2KGZpZWxkLmRhdGFzZXQ1WzVdKTtcclxuICAgIGZpZWxkLmRhdGFzZXQ1WzZdICYmIHNldERhdGFzZXQ1VmFsdWU3KGZpZWxkLmRhdGFzZXQ1WzZdKTtcclxuICAgIGZpZWxkLmRhdGFzZXQ1WzddICYmIHNldERhdGFzZXQ1VmFsdWU4KGZpZWxkLmRhdGFzZXQ1WzddKTtcclxuICAgIGZpZWxkLmRhdGFzZXQ1WzhdICYmIHNldERhdGFzZXQ1VmFsdWU5KGZpZWxkLmRhdGFzZXQ1WzhdKTtcclxuICAgIGZpZWxkLmRhdGFzZXQ1WzldICYmIHNldERhdGFzZXQ1VmFsdWUxMChmaWVsZC5kYXRhc2V0NVs5XSk7XHJcbiAgICBmaWVsZC5kYXRhc2V0NVsxMF0gJiYgc2V0RGF0YXNldDVWYWx1ZTExKGZpZWxkLmRhdGFzZXQ1WzEwXSk7XHJcbiAgICBmaWVsZC5kYXRhc2V0NVsxMV0gJiYgc2V0RGF0YXNldDVWYWx1ZTEyKGZpZWxkLmRhdGFzZXQ1WzExXSk7XHJcbiAgfSwgW2ZpZWxkXSk7XHJcblxyXG4gIC8vIERhdGFzZXQ2XHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGZpZWxkLmRhdGFzZXQ2WzBdICYmIHNldERhdGFzZXQ2VmFsdWUxKGZpZWxkLmRhdGFzZXQ2WzBdKTtcclxuICAgIGZpZWxkLmRhdGFzZXQ2WzFdICYmIHNldERhdGFzZXQ2VmFsdWUyKGZpZWxkLmRhdGFzZXQ2WzFdKTtcclxuICAgIGZpZWxkLmRhdGFzZXQ2WzJdICYmIHNldERhdGFzZXQ2VmFsdWUzKGZpZWxkLmRhdGFzZXQ2WzJdKTtcclxuICAgIGZpZWxkLmRhdGFzZXQ2WzNdICYmIHNldERhdGFzZXQ2VmFsdWU0KGZpZWxkLmRhdGFzZXQ2WzNdKTtcclxuICAgIGZpZWxkLmRhdGFzZXQ2WzRdICYmIHNldERhdGFzZXQ2VmFsdWU1KGZpZWxkLmRhdGFzZXQ2WzRdKTtcclxuICAgIGZpZWxkLmRhdGFzZXQ2WzVdICYmIHNldERhdGFzZXQ2VmFsdWU2KGZpZWxkLmRhdGFzZXQ2WzVdKTtcclxuICAgIGZpZWxkLmRhdGFzZXQ2WzZdICYmIHNldERhdGFzZXQ2VmFsdWU3KGZpZWxkLmRhdGFzZXQ2WzZdKTtcclxuICAgIGZpZWxkLmRhdGFzZXQ2WzddICYmIHNldERhdGFzZXQ2VmFsdWU4KGZpZWxkLmRhdGFzZXQ2WzddKTtcclxuICAgIGZpZWxkLmRhdGFzZXQ2WzhdICYmIHNldERhdGFzZXQ2VmFsdWU5KGZpZWxkLmRhdGFzZXQ2WzhdKTtcclxuICAgIGZpZWxkLmRhdGFzZXQ2WzldICYmIHNldERhdGFzZXQ2VmFsdWUxMChmaWVsZC5kYXRhc2V0Nls5XSk7XHJcbiAgICBmaWVsZC5kYXRhc2V0NlsxMF0gJiYgc2V0RGF0YXNldDZWYWx1ZTExKGZpZWxkLmRhdGFzZXQ2WzEwXSk7XHJcbiAgICBmaWVsZC5kYXRhc2V0NlsxMV0gJiYgc2V0RGF0YXNldDZWYWx1ZTEyKGZpZWxkLmRhdGFzZXQ2WzExXSk7XHJcbiAgfSwgW2ZpZWxkXSk7XHJcblxyXG4gIC8vIERhdGFzZXQgbGFiZWxzXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGZpZWxkLmRhdGFzZXQxTGFiZWwgJiYgc2V0RGF0YXNldDFMYWJlbChmaWVsZC5kYXRhc2V0MUxhYmVsKTtcclxuICAgIGZpZWxkLmRhdGFzZXQyTGFiZWwgJiYgc2V0RGF0YXNldDJMYWJlbChmaWVsZC5kYXRhc2V0MkxhYmVsKTtcclxuICAgIGZpZWxkLmRhdGFzZXQzTGFiZWwgJiYgc2V0RGF0YXNldDNMYWJlbChmaWVsZC5kYXRhc2V0M0xhYmVsKTtcclxuICAgIGZpZWxkLmRhdGFzZXQ0TGFiZWwgJiYgc2V0RGF0YXNldDRMYWJlbChmaWVsZC5kYXRhc2V0NExhYmVsKTtcclxuICAgIGZpZWxkLmRhdGFzZXQ1TGFiZWwgJiYgc2V0RGF0YXNldDVMYWJlbChmaWVsZC5kYXRhc2V0NUxhYmVsKTtcclxuICAgIGZpZWxkLmRhdGFzZXQ2TGFiZWwgJiYgc2V0RGF0YXNldDZMYWJlbChmaWVsZC5kYXRhc2V0NkxhYmVsKTtcclxuICB9LCBbZmllbGRdKTtcclxuXHJcbiAgLy8gQ0hBUlRcclxuICAvLyBmaWVsZC5kYXRhc2V0MS5tYXAoKGRhdGEpID0+IHtcclxuICAvLyAgIGNvbnNvbGUubG9nKCdkYXRhIC0tPiAnLCBmaWVsZC5kYXRhc2V0MS5pbmRleE9mKGRhdGEpKTtcclxuICAvLyB9KTtcclxuXHJcbiAgY29uc3QgY29sb3JzID1cclxuICAgIGZpZWxkLmNoYXJ0VHlwZSA9PSAnUGllIGNoYXJ0JyB8fCBmaWVsZC5jaGFydFR5cGUgPT0gJ0RvdWdobnV0IGNoYXJ0J1xyXG4gICAgICA/IFtcclxuICAgICAgICAgICdyZ2JhKDIwNSwyMjAsNTcsMSknLFxyXG4gICAgICAgICAgJ3JnYmEoMjU1LDIzNSw1OSwxKScsXHJcbiAgICAgICAgICAncmdiYSgyNTUsMTkzLDcsMSknLFxyXG4gICAgICAgICAgJ3JnYmEoMjU1LDE1MiwwLDEpJyxcclxuICAgICAgICAgICdyZ2JhKDI1NSw4NywzNCwxKScsXHJcbiAgICAgICAgICAncmdiYSgyNDQsNjcsNTQsMSknLFxyXG4gICAgICAgICAgJ3JnYmEoMjMzLDMwLDk5LDEpJyxcclxuICAgICAgICAgICdyZ2JhKDE1NiwzOSwxNzYsMSknLFxyXG4gICAgICAgICAgJ3JnYmEoMTAzLDU4LDE4MywxKScsXHJcbiAgICAgICAgICAncmdiYSg2Myw4MSwxODEsMSknLFxyXG4gICAgICAgICAgJ3JnYmEoOTYsMTI1LDEzOSwxKScsXHJcbiAgICAgICAgICAncmdiYSgxMjEsODUsNzIsMSknLFxyXG4gICAgICAgIF1cclxuICAgICAgOiBmaWVsZC5jaGFydFR5cGUgPT0gJ0xpbmUgY2hhcnQnIHx8IGZpZWxkLmNoYXJ0VHlwZSA9PSAnQXJlYSBjaGFydCdcclxuICAgICAgPyAncmdiYSgyNTUsMTg1LDAgLDEgKSdcclxuICAgICAgOiBbXHJcbiAgICAgICAgICAncmdiYSgyNTUsMTg1LDAgLDEgKScsXHJcbiAgICAgICAgICAncmdiYSgyNTUsMTg1LDAgLDEgKScsXHJcbiAgICAgICAgICAncmdiYSgyNTUsMTg1LDAgLDEgKScsXHJcbiAgICAgICAgICAncmdiYSgyNTUsMTg1LDAgLDEgKScsXHJcbiAgICAgICAgICAncmdiYSgyNTUsMTg1LDAgLDEgKScsXHJcbiAgICAgICAgICAncmdiYSgyNTUsMTg1LDAgLDEgKScsXHJcbiAgICAgICAgICAncmdiYSgyNTUsMTg1LDAgLDEgKScsXHJcbiAgICAgICAgICAncmdiYSgyNTUsMTg1LDAgLDEgKScsXHJcbiAgICAgICAgICAncmdiYSgyNTUsMTg1LDAgLDEgKScsXHJcbiAgICAgICAgICAncmdiYSgyNTUsMTg1LDAgLDEgKScsXHJcbiAgICAgICAgICAncmdiYSgyNTUsMTg1LDAgLDEgKScsXHJcbiAgICAgICAgICAncmdiYSgyNTUsMTg1LDAgLDEgKScsXHJcbiAgICAgICAgXTtcclxuXHJcbiAgY29uc3QgY29sb3JzMSA9XHJcbiAgICBmaWVsZC5jaGFydFR5cGUgPT0gJ1BpZSBjaGFydCcgfHwgZmllbGQuY2hhcnRUeXBlID09ICdEb3VnaG51dCBjaGFydCdcclxuICAgICAgPyBbXHJcbiAgICAgICAgICAncmdiYSgyMDUsMjIwLDU3LDEpJyxcclxuICAgICAgICAgICdyZ2JhKDI1NSwyMzUsNTksMSknLFxyXG4gICAgICAgICAgJ3JnYmEoMjU1LDE5Myw3LDEpJyxcclxuICAgICAgICAgICdyZ2JhKDI1NSwxNTIsMCwxKScsXHJcbiAgICAgICAgICAncmdiYSgyNTUsODcsMzQsMSknLFxyXG4gICAgICAgICAgJ3JnYmEoMjQ0LDY3LDU0LDEpJyxcclxuICAgICAgICAgICdyZ2JhKDIzMywzMCw5OSwxKScsXHJcbiAgICAgICAgICAncmdiYSgxNTYsMzksMTc2LDEpJyxcclxuICAgICAgICAgICdyZ2JhKDEwMyw1OCwxODMsMSknLFxyXG4gICAgICAgICAgJ3JnYmEoNjMsODEsMTgxLDEpJyxcclxuICAgICAgICAgICdyZ2JhKDk2LDEyNSwxMzksMSknLFxyXG4gICAgICAgICAgJ3JnYmEoMTIxLDg1LDcyLDEpJyxcclxuICAgICAgICBdXHJcbiAgICAgIDogZmllbGQuY2hhcnRUeXBlID09ICdMaW5lIGNoYXJ0JyB8fCBmaWVsZC5jaGFydFR5cGUgPT0gJ0FyZWEgY2hhcnQnXHJcbiAgICAgID8gJ3JnYmEoMCwyMDQsMTA2ICwxICknXHJcbiAgICAgIDogW1xyXG4gICAgICAgICAgJ3JnYmEoMCwyMDQsMTA2ICwxICknLFxyXG4gICAgICAgICAgJ3JnYmEoMCwyMDQsMTA2ICwxICknLFxyXG4gICAgICAgICAgJ3JnYmEoMCwyMDQsMTA2ICwxICknLFxyXG4gICAgICAgICAgJ3JnYmEoMCwyMDQsMTA2ICwxICknLFxyXG4gICAgICAgICAgJ3JnYmEoMCwyMDQsMTA2ICwxICknLFxyXG4gICAgICAgICAgJ3JnYmEoMCwyMDQsMTA2ICwxICknLFxyXG4gICAgICAgICAgJ3JnYmEoMCwyMDQsMTA2ICwxICknLFxyXG4gICAgICAgICAgJ3JnYmEoMCwyMDQsMTA2ICwxICknLFxyXG4gICAgICAgICAgJ3JnYmEoMCwyMDQsMTA2ICwxICknLFxyXG4gICAgICAgICAgJ3JnYmEoMCwyMDQsMTA2ICwxICknLFxyXG4gICAgICAgICAgJ3JnYmEoMCwyMDQsMTA2ICwxICknLFxyXG4gICAgICAgICAgJ3JnYmEoMCwyMDQsMTA2ICwxICknLFxyXG4gICAgICAgIF07XHJcblxyXG4gIGNvbnN0IGNvbG9yczIgPVxyXG4gICAgZmllbGQuY2hhcnRUeXBlID09ICdQaWUgY2hhcnQnIHx8IGZpZWxkLmNoYXJ0VHlwZSA9PSAnRG91Z2hudXQgY2hhcnQnXHJcbiAgICAgID8gW1xyXG4gICAgICAgICAgJ3JnYmEoMjA1LDIyMCw1NywxKScsXHJcbiAgICAgICAgICAncmdiYSgyNTUsMjM1LDU5LDEpJyxcclxuICAgICAgICAgICdyZ2JhKDI1NSwxOTMsNywxKScsXHJcbiAgICAgICAgICAncmdiYSgyNTUsMTUyLDAsMSknLFxyXG4gICAgICAgICAgJ3JnYmEoMjU1LDg3LDM0LDEpJyxcclxuICAgICAgICAgICdyZ2JhKDI0NCw2Nyw1NCwxKScsXHJcbiAgICAgICAgICAncmdiYSgyMzMsMzAsOTksMSknLFxyXG4gICAgICAgICAgJ3JnYmEoMTU2LDM5LDE3NiwxKScsXHJcbiAgICAgICAgICAncmdiYSgxMDMsNTgsMTgzLDEpJyxcclxuICAgICAgICAgICdyZ2JhKDYzLDgxLDE4MSwxKScsXHJcbiAgICAgICAgICAncmdiYSg5NiwxMjUsMTM5LDEpJyxcclxuICAgICAgICAgICdyZ2JhKDEyMSw4NSw3MiwxKScsXHJcbiAgICAgICAgXVxyXG4gICAgICA6IGZpZWxkLmNoYXJ0VHlwZSA9PSAnTGluZSBjaGFydCcgfHwgZmllbGQuY2hhcnRUeXBlID09ICdBcmVhIGNoYXJ0J1xyXG4gICAgICA/ICdyZ2JhKDAsMTIwLDIxNSAsMSApJ1xyXG4gICAgICA6IFtcclxuICAgICAgICAgICdyZ2JhKDAsMTIwLDIxNSAsMSApJyxcclxuICAgICAgICAgICdyZ2JhKDAsMTIwLDIxNSAsMSApJyxcclxuICAgICAgICAgICdyZ2JhKDAsMTIwLDIxNSAsMSApJyxcclxuICAgICAgICAgICdyZ2JhKDAsMTIwLDIxNSAsMSApJyxcclxuICAgICAgICAgICdyZ2JhKDAsMTIwLDIxNSAsMSApJyxcclxuICAgICAgICAgICdyZ2JhKDAsMTIwLDIxNSAsMSApJyxcclxuICAgICAgICAgICdyZ2JhKDAsMTIwLDIxNSAsMSApJyxcclxuICAgICAgICAgICdyZ2JhKDAsMTIwLDIxNSAsMSApJyxcclxuICAgICAgICAgICdyZ2JhKDAsMTIwLDIxNSAsMSApJyxcclxuICAgICAgICAgICdyZ2JhKDAsMTIwLDIxNSAsMSApJyxcclxuICAgICAgICAgICdyZ2JhKDAsMTIwLDIxNSAsMSApJyxcclxuICAgICAgICAgICdyZ2JhKDAsMTIwLDIxNSAsMSApJyxcclxuICAgICAgICBdO1xyXG5cclxuICBjb25zdCBjb2xvcnMzID1cclxuICAgIGZpZWxkLmNoYXJ0VHlwZSA9PSAnUGllIGNoYXJ0JyB8fCBmaWVsZC5jaGFydFR5cGUgPT0gJ0RvdWdobnV0IGNoYXJ0J1xyXG4gICAgICA/IFtcclxuICAgICAgICAgICdyZ2JhKDIwNSwyMjAsNTcsMSknLFxyXG4gICAgICAgICAgJ3JnYmEoMjU1LDIzNSw1OSwxKScsXHJcbiAgICAgICAgICAncmdiYSgyNTUsMTkzLDcsMSknLFxyXG4gICAgICAgICAgJ3JnYmEoMjU1LDE1MiwwLDEpJyxcclxuICAgICAgICAgICdyZ2JhKDI1NSw4NywzNCwxKScsXHJcbiAgICAgICAgICAncmdiYSgyNDQsNjcsNTQsMSknLFxyXG4gICAgICAgICAgJ3JnYmEoMjMzLDMwLDk5LDEpJyxcclxuICAgICAgICAgICdyZ2JhKDE1NiwzOSwxNzYsMSknLFxyXG4gICAgICAgICAgJ3JnYmEoMTAzLDU4LDE4MywxKScsXHJcbiAgICAgICAgICAncmdiYSg2Myw4MSwxODEsMSknLFxyXG4gICAgICAgICAgJ3JnYmEoOTYsMTI1LDEzOSwxKScsXHJcbiAgICAgICAgICAncmdiYSgxMjEsODUsNzIsMSknLFxyXG4gICAgICAgIF1cclxuICAgICAgOiBmaWVsZC5jaGFydFR5cGUgPT0gJ0xpbmUgY2hhcnQnIHx8IGZpZWxkLmNoYXJ0VHlwZSA9PSAnQXJlYSBjaGFydCdcclxuICAgICAgPyAncmdiYSgyMzEsNzIsODYgLDEgKSdcclxuICAgICAgOiBbXHJcbiAgICAgICAgICAncmdiYSgyMzEsNzIsODYgLDEgKScsXHJcbiAgICAgICAgICAncmdiYSgyMzEsNzIsODYgLDEgKScsXHJcbiAgICAgICAgICAncmdiYSgyMzEsNzIsODYgLDEgKScsXHJcbiAgICAgICAgICAncmdiYSgyMzEsNzIsODYgLDEgKScsXHJcbiAgICAgICAgICAncmdiYSgyMzEsNzIsODYgLDEgKScsXHJcbiAgICAgICAgICAncmdiYSgyMzEsNzIsODYgLDEgKScsXHJcbiAgICAgICAgICAncmdiYSgyMzEsNzIsODYgLDEgKScsXHJcbiAgICAgICAgICAncmdiYSgyMzEsNzIsODYgLDEgKScsXHJcbiAgICAgICAgICAncmdiYSgyMzEsNzIsODYgLDEgKScsXHJcbiAgICAgICAgICAncmdiYSgyMzEsNzIsODYgLDEgKScsXHJcbiAgICAgICAgICAncmdiYSgyMzEsNzIsODYgLDEgKScsXHJcbiAgICAgICAgICAncmdiYSgyMzEsNzIsODYgLDEgKScsXHJcbiAgICAgICAgXTtcclxuXHJcbiAgY29uc3QgY29sb3JzNCA9XHJcbiAgICBmaWVsZC5jaGFydFR5cGUgPT0gJ1BpZSBjaGFydCcgfHwgZmllbGQuY2hhcnRUeXBlID09ICdEb3VnaG51dCBjaGFydCdcclxuICAgICAgPyBbXHJcbiAgICAgICAgICAncmdiYSgyMDUsMjIwLDU3LDEpJyxcclxuICAgICAgICAgICdyZ2JhKDI1NSwyMzUsNTksMSknLFxyXG4gICAgICAgICAgJ3JnYmEoMjU1LDE5Myw3LDEpJyxcclxuICAgICAgICAgICdyZ2JhKDI1NSwxNTIsMCwxKScsXHJcbiAgICAgICAgICAncmdiYSgyNTUsODcsMzQsMSknLFxyXG4gICAgICAgICAgJ3JnYmEoMjQ0LDY3LDU0LDEpJyxcclxuICAgICAgICAgICdyZ2JhKDIzMywzMCw5OSwxKScsXHJcbiAgICAgICAgICAncmdiYSgxNTYsMzksMTc2LDEpJyxcclxuICAgICAgICAgICdyZ2JhKDEwMyw1OCwxODMsMSknLFxyXG4gICAgICAgICAgJ3JnYmEoNjMsODEsMTgxLDEpJyxcclxuICAgICAgICAgICdyZ2JhKDk2LDEyNSwxMzksMSknLFxyXG4gICAgICAgICAgJ3JnYmEoMTIxLDg1LDcyLDEpJyxcclxuICAgICAgICBdXHJcbiAgICAgIDogZmllbGQuY2hhcnRUeXBlID09ICdMaW5lIGNoYXJ0JyB8fCBmaWVsZC5jaGFydFR5cGUgPT0gJ0FyZWEgY2hhcnQnXHJcbiAgICAgID8gJ3JnYmEoMTI2LDExNSw5NSAsMSApJ1xyXG4gICAgICA6IFtcclxuICAgICAgICAgICdyZ2JhKDEyNiwxMTUsOTUgLDEgKScsXHJcbiAgICAgICAgICAncmdiYSgxMjYsMTE1LDk1ICwxICknLFxyXG4gICAgICAgICAgJ3JnYmEoMTI2LDExNSw5NSAsMSApJyxcclxuICAgICAgICAgICdyZ2JhKDEyNiwxMTUsOTUgLDEgKScsXHJcbiAgICAgICAgICAncmdiYSgxMjYsMTE1LDk1ICwxICknLFxyXG4gICAgICAgICAgJ3JnYmEoMTI2LDExNSw5NSAsMSApJyxcclxuICAgICAgICAgICdyZ2JhKDEyNiwxMTUsOTUgLDEgKScsXHJcbiAgICAgICAgICAncmdiYSgxMjYsMTE1LDk1ICwxICknLFxyXG4gICAgICAgICAgJ3JnYmEoMTI2LDExNSw5NSAsMSApJyxcclxuICAgICAgICAgICdyZ2JhKDEyNiwxMTUsOTUgLDEgKScsXHJcbiAgICAgICAgICAncmdiYSgxMjYsMTE1LDk1ICwxICknLFxyXG4gICAgICAgICAgJ3JnYmEoMTI2LDExNSw5NSAsMSApJyxcclxuICAgICAgICBdO1xyXG5cclxuICBjb25zdCBjb2xvcnM1ID1cclxuICAgIGZpZWxkLmNoYXJ0VHlwZSA9PSAnUGllIGNoYXJ0JyB8fCBmaWVsZC5jaGFydFR5cGUgPT0gJ0RvdWdobnV0IGNoYXJ0J1xyXG4gICAgICA/IFtcclxuICAgICAgICAgICdyZ2JhKDIwNSwyMjAsNTcsMSknLFxyXG4gICAgICAgICAgJ3JnYmEoMjU1LDIzNSw1OSwxKScsXHJcbiAgICAgICAgICAncmdiYSgyNTUsMTkzLDcsMSknLFxyXG4gICAgICAgICAgJ3JnYmEoMjU1LDE1MiwwLDEpJyxcclxuICAgICAgICAgICdyZ2JhKDI1NSw4NywzNCwxKScsXHJcbiAgICAgICAgICAncmdiYSgyNDQsNjcsNTQsMSknLFxyXG4gICAgICAgICAgJ3JnYmEoMjMzLDMwLDk5LDEpJyxcclxuICAgICAgICAgICdyZ2JhKDE1NiwzOSwxNzYsMSknLFxyXG4gICAgICAgICAgJ3JnYmEoMTAzLDU4LDE4MywxKScsXHJcbiAgICAgICAgICAncmdiYSg2Myw4MSwxODEsMSknLFxyXG4gICAgICAgICAgJ3JnYmEoOTYsMTI1LDEzOSwxKScsXHJcbiAgICAgICAgICAncmdiYSgxMjEsODUsNzIsMSknLFxyXG4gICAgICAgIF1cclxuICAgICAgOiBmaWVsZC5jaGFydFR5cGUgPT0gJ0xpbmUgY2hhcnQnIHx8IGZpZWxkLmNoYXJ0VHlwZSA9PSAnQXJlYSBjaGFydCdcclxuICAgICAgPyAncmdiYSgxNzcsNzAsMTk0ICwxICknXHJcbiAgICAgIDogW1xyXG4gICAgICAgICAgJ3JnYmEoMTc3LDcwLDE5NCAsMSApJyxcclxuICAgICAgICAgICdyZ2JhKDE3Nyw3MCwxOTQgLDEgKScsXHJcbiAgICAgICAgICAncmdiYSgxNzcsNzAsMTk0ICwxICknLFxyXG4gICAgICAgICAgJ3JnYmEoMTc3LDcwLDE5NCAsMSApJyxcclxuICAgICAgICAgICdyZ2JhKDE3Nyw3MCwxOTQgLDEgKScsXHJcbiAgICAgICAgICAncmdiYSgxNzcsNzAsMTk0ICwxICknLFxyXG4gICAgICAgICAgJ3JnYmEoMTc3LDcwLDE5NCAsMSApJyxcclxuICAgICAgICAgICdyZ2JhKDE3Nyw3MCwxOTQgLDEgKScsXHJcbiAgICAgICAgICAncmdiYSgxNzcsNzAsMTk0ICwxICknLFxyXG4gICAgICAgICAgJ3JnYmEoMTc3LDcwLDE5NCAsMSApJyxcclxuICAgICAgICAgICdyZ2JhKDE3Nyw3MCwxOTQgLDEgKScsXHJcbiAgICAgICAgICAncmdiYSgxNzcsNzAsMTk0ICwxICknLFxyXG4gICAgICAgIF07XHJcblxyXG4gIGNvbnNvbGUubG9nKGZpZWxkLmRhdGFzZXQxKTtcclxuICBjb25zdCBkYXRhID0ge1xyXG4gICAgbGFiZWxzOiBmaWVsZC5sYWJlbHMgJiYgW1xyXG4gICAgICAuLi5maWVsZC5sYWJlbHMubWFwKChsYWJlbCkgPT4ge1xyXG4gICAgICAgIGlmIChsYWJlbCAhPT0gJycpIHtcclxuICAgICAgICAgIHJldHVybiBsYWJlbDtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgcmV0dXJuICcnO1xyXG4gICAgICAgIH1cclxuICAgICAgfSksXHJcbiAgICBdLFxyXG4gICAgZGF0YXNldHM6IFtcclxuICAgICAgLy8gRGF0YXNldDFcclxuICAgICAge1xyXG4gICAgICAgIGxhYmVsOiBmaWVsZC5kYXRhc2V0MUxhYmVsICYmIGZpZWxkLmRhdGFzZXQxTGFiZWwsXHJcbiAgICAgICAgZGF0YTpcclxuICAgICAgICAgIGZpZWxkLmRhdGFzZXQxICYmXHJcbiAgICAgICAgICBmaWVsZC5kYXRhc2V0MS5tYXAoKGRhdGEpID0+IHtcclxuICAgICAgICAgICAgaWYgKGRhdGEgIT09ICcnKSB7XHJcbiAgICAgICAgICAgICAgcmV0dXJuIGRhdGE7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH0pLFxyXG4gICAgICAgIGJhY2tncm91bmRDb2xvcjogY29sb3JzLFxyXG4gICAgICAgIGJvcmRlcldpZHRoOiBmaWVsZC5jaGFydFR5cGUgPT0gJ0FyZWEgY2hhcnQnID8gMCA6IGZpZWxkLmNoYXJ0VHlwZSA9PSAnUGllIGNoYXJ0JyB8fCAoZmllbGQuY2hhcnRUeXBlID09ICdEb3VnaG51dCBjaGFydCcgJiYgMiksXHJcbiAgICAgIH0sXHJcbiAgICAgIC8vIERhdGFzZXQyXHJcbiAgICAgIHtcclxuICAgICAgICBsYWJlbDogZmllbGQuZGF0YXNldDJMYWJlbCAmJiBmaWVsZC5kYXRhc2V0MkxhYmVsLFxyXG4gICAgICAgIGRhdGE6XHJcbiAgICAgICAgICBmaWVsZC5kYXRhc2V0MiAmJlxyXG4gICAgICAgICAgZmllbGQuZGF0YXNldDIubWFwKChkYXRhKSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChkYXRhICE9PSAnJykge1xyXG4gICAgICAgICAgICAgIHJldHVybiBkYXRhO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9KSxcclxuICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IGNvbG9yczEsXHJcbiAgICAgICAgYm9yZGVyV2lkdGg6IGZpZWxkLmNoYXJ0VHlwZSA9PSAnQXJlYSBjaGFydCcgPyAwIDogZmllbGQuY2hhcnRUeXBlID09ICdQaWUgY2hhcnQnIHx8IChmaWVsZC5jaGFydFR5cGUgPT0gJ0RvdWdobnV0IGNoYXJ0JyAmJiAyKSxcclxuICAgICAgfSxcclxuICAgICAgLy8gRGF0YXNldDNcclxuICAgICAge1xyXG4gICAgICAgIGxhYmVsOiBmaWVsZC5kYXRhc2V0M0xhYmVsICYmIGZpZWxkLmRhdGFzZXQzTGFiZWwsXHJcbiAgICAgICAgZGF0YTpcclxuICAgICAgICAgIGZpZWxkLmRhdGFzZXQzICYmXHJcbiAgICAgICAgICBmaWVsZC5kYXRhc2V0My5tYXAoKGRhdGEpID0+IHtcclxuICAgICAgICAgICAgaWYgKGRhdGEgIT09ICcnKSB7XHJcbiAgICAgICAgICAgICAgcmV0dXJuIGRhdGE7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH0pLFxyXG4gICAgICAgIGJhY2tncm91bmRDb2xvcjogY29sb3JzMixcclxuICAgICAgICBib3JkZXJXaWR0aDogZmllbGQuY2hhcnRUeXBlID09ICdBcmVhIGNoYXJ0JyA/IDAgOiBmaWVsZC5jaGFydFR5cGUgPT0gJ1BpZSBjaGFydCcgfHwgKGZpZWxkLmNoYXJ0VHlwZSA9PSAnRG91Z2hudXQgY2hhcnQnICYmIDIpLFxyXG4gICAgICB9LFxyXG4gICAgICAvLyBEYXRhc2V0NFxyXG4gICAgICB7XHJcbiAgICAgICAgbGFiZWw6IGZpZWxkLmRhdGFzZXQ0TGFiZWwgJiYgZmllbGQuZGF0YXNldDRMYWJlbCxcclxuICAgICAgICBkYXRhOlxyXG4gICAgICAgICAgZmllbGQuZGF0YXNldDQgJiZcclxuICAgICAgICAgIGZpZWxkLmRhdGFzZXQ0Lm1hcCgoZGF0YSkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoZGF0YSAhPT0gJycpIHtcclxuICAgICAgICAgICAgICByZXR1cm4gZGF0YTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfSksXHJcbiAgICAgICAgYmFja2dyb3VuZENvbG9yOiBjb2xvcnMzLFxyXG4gICAgICAgIGJvcmRlcldpZHRoOiBmaWVsZC5jaGFydFR5cGUgPT0gJ0FyZWEgY2hhcnQnID8gMCA6IGZpZWxkLmNoYXJ0VHlwZSA9PSAnUGllIGNoYXJ0JyB8fCAoZmllbGQuY2hhcnRUeXBlID09ICdEb3VnaG51dCBjaGFydCcgJiYgMiksXHJcbiAgICAgIH0sXHJcbiAgICAgIC8vIERhdGFzZXQ1XHJcbiAgICAgIHtcclxuICAgICAgICBsYWJlbDogZmllbGQuZGF0YXNldDVMYWJlbCAmJiBmaWVsZC5kYXRhc2V0NUxhYmVsLFxyXG4gICAgICAgIGRhdGE6XHJcbiAgICAgICAgICBmaWVsZC5kYXRhc2V0NSAmJlxyXG4gICAgICAgICAgZmllbGQuZGF0YXNldDUubWFwKChkYXRhKSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChkYXRhICE9PSAnJykge1xyXG4gICAgICAgICAgICAgIHJldHVybiBkYXRhO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9KSxcclxuICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IGNvbG9yczQsXHJcbiAgICAgICAgYm9yZGVyV2lkdGg6IGZpZWxkLmNoYXJ0VHlwZSA9PSAnQXJlYSBjaGFydCcgPyAwIDogZmllbGQuY2hhcnRUeXBlID09ICdQaWUgY2hhcnQnIHx8IChmaWVsZC5jaGFydFR5cGUgPT0gJ0RvdWdobnV0IGNoYXJ0JyAmJiAyKSxcclxuICAgICAgfSxcclxuICAgICAgLy8gRGF0YXNldDZcclxuICAgICAge1xyXG4gICAgICAgIGxhYmVsOiBmaWVsZC5kYXRhc2V0NkxhYmVsICYmIGZpZWxkLmRhdGFzZXQ2TGFiZWwsXHJcbiAgICAgICAgZGF0YTpcclxuICAgICAgICAgIGZpZWxkLmRhdGFzZXQ2ICYmXHJcbiAgICAgICAgICBmaWVsZC5kYXRhc2V0Ni5tYXAoKGRhdGEpID0+IHtcclxuICAgICAgICAgICAgaWYgKGRhdGEgIT09ICcnKSB7XHJcbiAgICAgICAgICAgICAgcmV0dXJuIGRhdGE7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH0pLFxyXG4gICAgICAgIGJhY2tncm91bmRDb2xvcjogY29sb3JzNSxcclxuICAgICAgICBib3JkZXJXaWR0aDogZmllbGQuY2hhcnRUeXBlID09ICdBcmVhIGNoYXJ0JyA/IDAgOiBmaWVsZC5jaGFydFR5cGUgPT0gJ1BpZSBjaGFydCcgfHwgKGZpZWxkLmNoYXJ0VHlwZSA9PSAnRG91Z2hudXQgY2hhcnQnICYmIDIpLFxyXG4gICAgICB9LFxyXG4gICAgXSxcclxuICB9O1xyXG5cclxuICBjb25zb2xlLmxvZyhkYXRhKTtcclxuXHJcbiAgY29uc3QgW25ld0NoYXJ0LCBzZXROZXdDaGFydF0gPSB1c2VTdGF0ZSgpO1xyXG4gIGNvbnN0IFtkYXRhc2V0cywgc2V0RGF0YXNldHNdID0gdXNlU3RhdGUoW10pO1xyXG4gIHVzZUVmZmVjdChhc3luYyAoKSA9PiB7XHJcbiAgICAvLyBjb25zb2xlLmxvZygnLS0tLS0tLS0gREVTVFJPWSAtLS0tLS0tLScpO1xyXG4gICAgLy8gbmV3Q2hhcnQgJiYgYXdhaXQgbmV3Q2hhcnQuZGVzdHJveSgpICYmIGNvbnNvbGUubG9nKCctLS0tLS0tLSBERVNUUk9ZIC0tLS0tLS0tJyk7XHJcbiAgICAvLyBjb25zdCBpZCA9IGZpZWxkLmNoYXJ0SWQ7XHJcbiAgICAvLyBpZiAod2luZG93LmlkICYmIHdpbmRvdy5pZCAhPT0gbnVsbCkge1xyXG4gICAgLy8gICB3aW5kb3cuaWQuZGVzdHJveSgpO1xyXG4gICAgLy8gfVxyXG4gICAgLy8gY29uc3QgbXlDaGFydFJlZiA9IGNoYXJ0UmVmLmN1cnJlbnQuZ2V0Q29udGV4dCgnMmQnKTtcclxuICAgIC8vIGNvbnN0IG15Q2hhcnRSZWYgPSBmaWVsZC5jaGFydElkO1xyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYCR7ZmllbGQuaW5kZXh9Y2hhcnRDb250YWluZXJgKS5pbm5lckhUTUwgPSAnJm5ic3A7JztcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGAke2ZpZWxkLmluZGV4fWNoYXJ0Q29udGFpbmVyYCkuaW5uZXJIVE1MID0gYDxjYW52YXMgaWQ9JHtmaWVsZC5pbmRleH0gcmVmPSR7Y2hhcnRSZWZ9PjwvY2FudmFzPmA7XHJcbiAgICBjb25zdCBteUNoYXJ0UmVmID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoZmllbGQuaW5kZXgpLmdldENvbnRleHQoJzJkJyk7XHJcblxyXG4gICAgLy8gZGF0YS5kYXRhc2V0cy5tYXAoKGRhdGFzZXQpID0+IHtcclxuICAgIC8vICAgZGF0YS5sYWJlbHMubWFwKChsYWJlbCkgPT4ge1xyXG4gICAgLy8gICAgIGlmIChsYWJlbCAhPT0gJycgJiYgZGF0YXNldC5sYWJlbCAhPT0gJycpIHtcclxuICAgIC8vICAgICAgIHNldERhdGFzZXRzKGRhdGFzZXQpO1xyXG4gICAgLy8gICAgIH1cclxuICAgIC8vICAgfSlcclxuICAgIC8vIH0pXHJcblxyXG4gICAgLy8gY29uc3QgZGF0YXMgPSBkYXRhLmRhdGFzZXRzLm1hcCgoZGF0YXNldCkgPT4ge1xyXG4gICAgLy8gICBjb25zdCB0ZXN0ID0gZGF0YXNldC5kYXRhLmZpbHRlcigoZGF0YXJlciwgaW5kZXgpID0+IHtcclxuICAgIC8vICAgICBpZiAoZGF0YS5sYWJlbHNbaW5kZXhdICE9PSAnJykge1xyXG4gICAgLy8gICAgICAgcmV0dXJuIGRhdGFyZXJcclxuICAgIC8vICAgICB9XHJcbiAgICAvLyAgIH0pXHJcbiAgICAvLyAgIHJldHVybiB0ZXN0XHJcbiAgICAvLyB9KVxyXG4gICAgY29uc29sZS5sb2coZGF0YS5kYXRhc2V0cyk7XHJcbiAgICBjb25zdCBkYXRhcyA9IGRhdGEuZGF0YXNldHMubWFwKChkYXRhc2V0KSA9PiB7XHJcbiAgICAgIGNvbnNvbGUubG9nKGRhdGFzZXQuZGF0YVswXSk7XHJcbiAgICAgIGNvbnN0IHRlc3QxID0gZGF0YXNldC5kYXRhLm1hcCgoZGF0YXNlcykgPT4ge1xyXG4gICAgICAgIGlmIChkYXRhc2VzICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgIHJldHVybiBkYXRhc2VzO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICByZXR1cm4gJyc7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgICAgY29uc3QgdGVzdCA9IHRlc3QxLm1hcCgoZGF0YXJlciwgaW5kZXgpID0+IHtcclxuICAgICAgICBpZiAoZGF0YS5sYWJlbHNbaW5kZXhdICE9PSAnJykge1xyXG4gICAgICAgICAgcmV0dXJuIGRhdGFyZXI7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgICAgY29uc3QgdGVzdDIgPSB0ZXN0LmZpbHRlcigob2JqKSA9PiBvYmogIT09IHVuZGVmaW5lZCk7XHJcbiAgICAgIHJldHVybiB0ZXN0MjtcclxuICAgIH0pO1xyXG4gICAgY29uc29sZS5sb2coJ0RBVEFTIC0tPiAnLCBkYXRhcyk7XHJcblxyXG4gICAgLy8gY29uc3QgZGF0YTEgPSBkYXRhc1swXVswXSA/IGRhdGFzWzBdWzBdLm1hcCgoZGF0YXJyKSA9PiBkYXRhcnIpIDogW107XHJcbiAgICAvLyBjb25zdCBkYXRhMiA9IGRhdGFzWzFdWzBdID8gZGF0YXNbMV1bMF0ubWFwKChkYXRhcnIpID0+IGRhdGFycikgOiBbXTtcclxuICAgIC8vIGNvbnN0IGRhdGEzID0gZGF0YXNbMl1bMF0gPyBkYXRhc1syXVswXS5tYXAoKGRhdGFycikgPT4gZGF0YXJyKSA6IFtdO1xyXG4gICAgLy8gY29uc3QgZGF0YTQgPSBkYXRhc1szXVswXSA/IGRhdGFzWzNdWzBdLm1hcCgoZGF0YXJyKSA9PiBkYXRhcnIpIDogW107XHJcbiAgICAvLyBjb25zdCBkYXRhNSA9IGRhdGFzWzRdWzBdID8gZGF0YXNbNF1bMF0ubWFwKChkYXRhcnIpID0+IGRhdGFycikgOiBbXTtcclxuICAgIC8vIGNvbnN0IGRhdGE2ID0gZGF0YXNbNV1bMF0gPyBkYXRhc1s1XVswXS5tYXAoKGRhdGFycikgPT4gZGF0YXJyKSA6IFtdO1xyXG5cclxuICAgIGNvbnN0IGZpbGwgPSBmaWVsZC5jaGFydFR5cGUgPT0gJ0xpbmUgY2hhcnQnID8gZmFsc2UgOiB1bmRlZmluZWQ7XHJcblxyXG4gICAgY29uc3QgbmV3RGF0YXNldHMgPSBbXHJcbiAgICAgIHtcclxuICAgICAgICBsYWJlbDogZGF0YS5kYXRhc2V0c1swXS5sYWJlbCxcclxuICAgICAgICBkYXRhOiBkYXRhc1swXSxcclxuICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IGRhdGEuZGF0YXNldHNbMF0uYmFja2dyb3VuZENvbG9yLFxyXG4gICAgICAgIGJvcmRlckNvbG9yOiBmaWVsZC5jaGFydFR5cGUgPT0gJ0xpbmUgY2hhcnQnID8gJ3JnYmEoMjU1LDE4NSwwICwxICknIDogJ3JnYigyNTUsIDI1NSwgMjU1KScsXHJcbiAgICAgICAgYm9yZGVyV2lkdGg6IGRhdGEuZGF0YXNldHNbMF0uYm9yZGVyV2lkdGgsXHJcbiAgICAgICAgZmlsbDogZmlsbCxcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIGxhYmVsOiBkYXRhLmRhdGFzZXRzWzFdLmxhYmVsLFxyXG4gICAgICAgIGRhdGE6IGRhdGFzWzFdLFxyXG4gICAgICAgIGJhY2tncm91bmRDb2xvcjogZGF0YS5kYXRhc2V0c1sxXS5iYWNrZ3JvdW5kQ29sb3IsXHJcbiAgICAgICAgYm9yZGVyQ29sb3I6IGZpZWxkLmNoYXJ0VHlwZSA9PSAnTGluZSBjaGFydCcgPyAncmdiYSgwLDIwNCwxMDYgLDEgKScgOiAncmdiKDI1NSwgMjU1LCAyNTUpJyxcclxuICAgICAgICBib3JkZXJXaWR0aDogZGF0YS5kYXRhc2V0c1sxXS5ib3JkZXJXaWR0aCxcclxuICAgICAgICBmaWxsOiBmaWxsLFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgbGFiZWw6IGRhdGEuZGF0YXNldHNbMl0ubGFiZWwsXHJcbiAgICAgICAgZGF0YTogZGF0YXNbMl0sXHJcbiAgICAgICAgYmFja2dyb3VuZENvbG9yOiBkYXRhLmRhdGFzZXRzWzJdLmJhY2tncm91bmRDb2xvcixcclxuICAgICAgICBib3JkZXJDb2xvcjogZmllbGQuY2hhcnRUeXBlID09ICdMaW5lIGNoYXJ0JyA/ICdyZ2JhKDAsMTIwLDIxNSAsMSApJyA6ICdyZ2IoMjU1LCAyNTUsIDI1NSknLFxyXG4gICAgICAgIGJvcmRlcldpZHRoOiBkYXRhLmRhdGFzZXRzWzJdLmJvcmRlcldpZHRoLFxyXG4gICAgICAgIGZpbGw6IGZpbGwsXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBsYWJlbDogZGF0YS5kYXRhc2V0c1szXS5sYWJlbCxcclxuICAgICAgICBkYXRhOiBkYXRhc1szXSxcclxuICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IGRhdGEuZGF0YXNldHNbM10uYmFja2dyb3VuZENvbG9yLFxyXG4gICAgICAgIGJvcmRlckNvbG9yOiBmaWVsZC5jaGFydFR5cGUgPT0gJ0xpbmUgY2hhcnQnID8gJ3JnYmEoMjMxLDcyLDg2ICwxICknIDogJ3JnYigyNTUsIDI1NSwgMjU1KScsXHJcbiAgICAgICAgYm9yZGVyV2lkdGg6IGRhdGEuZGF0YXNldHNbM10uYm9yZGVyV2lkdGgsXHJcbiAgICAgICAgZmlsbDogZmlsbCxcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIGxhYmVsOiBkYXRhLmRhdGFzZXRzWzRdLmxhYmVsLFxyXG4gICAgICAgIGRhdGE6IGRhdGFzWzRdLFxyXG4gICAgICAgIGJhY2tncm91bmRDb2xvcjogZGF0YS5kYXRhc2V0c1s0XS5iYWNrZ3JvdW5kQ29sb3IsXHJcbiAgICAgICAgYm9yZGVyQ29sb3I6IGZpZWxkLmNoYXJ0VHlwZSA9PSAnTGluZSBjaGFydCcgPyAncmdiYSgxMjYsMTE1LDk1ICwxICknIDogJ3JnYigyNTUsIDI1NSwgMjU1KScsXHJcbiAgICAgICAgYm9yZGVyV2lkdGg6IGRhdGEuZGF0YXNldHNbNF0uYm9yZGVyV2lkdGgsXHJcbiAgICAgICAgZmlsbDogZmlsbCxcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIGxhYmVsOiBkYXRhLmRhdGFzZXRzWzVdLmxhYmVsLFxyXG4gICAgICAgIGRhdGE6IGRhdGFzWzVdLFxyXG4gICAgICAgIGJhY2tncm91bmRDb2xvcjogZGF0YS5kYXRhc2V0c1s1XS5iYWNrZ3JvdW5kQ29sb3IsXHJcbiAgICAgICAgYm9yZGVyQ29sb3I6IGZpZWxkLmNoYXJ0VHlwZSA9PSAnTGluZSBjaGFydCcgPyAncmdiYSgxNzcsNzAsMTk0ICwxICknIDogJ3JnYigyNTUsIDI1NSwgMjU1KScsXHJcbiAgICAgICAgYm9yZGVyV2lkdGg6IGRhdGEuZGF0YXNldHNbNV0uYm9yZGVyV2lkdGgsXHJcbiAgICAgICAgZmlsbDogZmlsbCxcclxuICAgICAgfSxcclxuICAgIF07XHJcbiAgICBjb25zb2xlLmxvZyhuZXdEYXRhc2V0cyk7XHJcblxyXG4gICAgY29uc3QgY2hhcnRUeXBlID0gW1xyXG4gICAgICBmaWVsZC5jaGFydFR5cGUgPT0gJ0JhciBjaGFydCcgPyAnYmFyJyA6ICcnLFxyXG4gICAgICBmaWVsZC5jaGFydFR5cGUgPT0gJ1JldmVyc2UgY2hhcnQnID8gJ2hvcml6b250YWxCYXInIDogJycsXHJcbiAgICAgIGZpZWxkLmNoYXJ0VHlwZSA9PSAnTGluZSBjaGFydCcgPyAnbGluZScgOiAnJyxcclxuICAgICAgZmllbGQuY2hhcnRUeXBlID09ICdQaWUgY2hhcnQnID8gJ3BpZScgOiAnJyxcclxuICAgICAgZmllbGQuY2hhcnRUeXBlID09ICdEb3VnaG51dCBjaGFydCcgPyAnZG91Z2hudXQnIDogJycsXHJcbiAgICAgIGZpZWxkLmNoYXJ0VHlwZSA9PSAnQXJlYSBjaGFydCcgPyAnbGluZScgOiAnJyxcclxuICAgIF07XHJcblxyXG4gICAgd2luZG93LmlkID0gbmV3IENoYXJ0KG15Q2hhcnRSZWYsIHtcclxuICAgICAgdHlwZTogY2hhcnRUeXBlLmZpbHRlcigodHlwZSkgPT4gdHlwZSAhPT0gJycpLFxyXG4gICAgICBkYXRhOiB7XHJcbiAgICAgICAgbGFiZWxzOiBkYXRhLmxhYmVscy5maWx0ZXIoKGxhYmVsKSA9PiBsYWJlbCAhPT0gJycpLFxyXG4gICAgICAgIGRhdGFzZXRzOiBuZXdEYXRhc2V0cy5maWx0ZXIoKGRhdGFzZXQpID0+IGRhdGFzZXQubGFiZWwgIT09ICcnKSxcclxuICAgICAgfSxcclxuICAgICAgb3B0aW9uczoge1xyXG4gICAgICAgIHNraXBOdWxsOiB0cnVlLFxyXG4gICAgICAgIHJlc3BvbnNpdmU6IHRydWUsXHJcbiAgICAgICAgbGVnZW5kOiB7XHJcbiAgICAgICAgICBwb3NpdGlvbjogJ2JvdHRvbScsXHJcbiAgICAgICAgfSxcclxuICAgICAgICAvLyBkZWZhdWx0Rm9udEZhbWlseTogKENoYXJ0LmRlZmF1bHRzLmdsb2JhbC5kZWZhdWx0Rm9udEZhbWlseSA9XHJcbiAgICAgICAgLy8gICAnQ29tZm9ydGFhJyksXHJcbiAgICAgICAgc2NhbGVzOiB7XHJcbiAgICAgICAgICB5QXhlczogW1xyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgc3RhY2tlZDogZmllbGQuc3RhY2tlZCA9PSB0cnVlID8gdHJ1ZSA6IGZhbHNlLFxyXG4gICAgICAgICAgICAgIHRpY2tzOiB7XHJcbiAgICAgICAgICAgICAgICBiZWdpbkF0WmVybzogdHJ1ZSxcclxuICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgXSxcclxuICAgICAgICAgIHhBeGVzOiBbXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICBzdGFja2VkOiBmaWVsZC5zdGFja2VkID09IHRydWUgPyB0cnVlIDogZmFsc2UsXHJcbiAgICAgICAgICAgICAgdGlja3M6IHtcclxuICAgICAgICAgICAgICAgIGJlZ2luQXRaZXJvOiB0cnVlLFxyXG4gICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICBdLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0sXHJcbiAgICB9KTtcclxuICAgIC8vIGFkZENoYXJ0KGNoYXJ0LCBjdXJyZW50SW5kZXgsIGluZGV4LCBzZWxlY3RlZFNlY3Rpb24pO1xyXG4gIH0sIFtkYXRhLmxhYmVscywgZGF0YS5kYXRhc2V0cywgZGF0YV0pO1xyXG5cclxuICBjb25zdCBbbGFiZWwxLCBzZXRMYWJlbDFdID0gdXNlU3RhdGUoJycpO1xyXG4gIGNvbnN0IFtsYWJlbDIsIHNldExhYmVsMl0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgY29uc3QgW2xhYmVsMywgc2V0TGFiZWwzXSA9IHVzZVN0YXRlKCcnKTtcclxuICBjb25zdCBbbGFiZWw0LCBzZXRMYWJlbDRdID0gdXNlU3RhdGUoJycpO1xyXG4gIGNvbnN0IFtsYWJlbDUsIHNldExhYmVsNV0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgY29uc3QgW2xhYmVsNiwgc2V0TGFiZWw2XSA9IHVzZVN0YXRlKCcnKTtcclxuICBjb25zdCBbbGFiZWw3LCBzZXRMYWJlbDddID0gdXNlU3RhdGUoJycpO1xyXG4gIGNvbnN0IFtsYWJlbDgsIHNldExhYmVsOF0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgY29uc3QgW2xhYmVsOSwgc2V0TGFiZWw5XSA9IHVzZVN0YXRlKCcnKTtcclxuICBjb25zdCBbbGFiZWwxMCwgc2V0TGFiZWwxMF0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgY29uc3QgW2xhYmVsMTEsIHNldExhYmVsMTFdID0gdXNlU3RhdGUoJycpO1xyXG4gIGNvbnN0IFtsYWJlbDEyLCBzZXRMYWJlbDEyXSA9IHVzZVN0YXRlKCcnKTtcclxuXHJcbiAgY29uc3Qgb25MYWJlbENoYW5nZTEgPSAobGFiZWwpID0+IHtcclxuICAgIHNldExhYmVsMShsYWJlbCk7XHJcbiAgICBjb25zdCBkYXRhID0ge1xyXG4gICAgICBsYWJlbE9uZTogJ3RydWUnLFxyXG4gICAgICBsYWJlbDE6IGxhYmVsLFxyXG4gICAgICBpbmRleCxcclxuICAgICAgc2VsU2VjdGlvbjogc2VsZWN0ZWRTZWN0aW9uLFxyXG4gICAgfTtcclxuICAgIGxhYmVsVXBkYXRlKGRhdGEpO1xyXG4gIH07XHJcbiAgY29uc3Qgb25MYWJlbENoYW5nZTIgPSAobGFiZWwpID0+IHtcclxuICAgIHNldExhYmVsMihsYWJlbCk7XHJcbiAgICBjb25zdCBkYXRhID0ge1xyXG4gICAgICBsYWJlbDIyOiAndHJ1ZScsXHJcbiAgICAgIGxhYmVsMjogbGFiZWwsXHJcbiAgICAgIGluZGV4LFxyXG4gICAgICBzZWxTZWN0aW9uOiBzZWxlY3RlZFNlY3Rpb24sXHJcbiAgICB9O1xyXG4gICAgbGFiZWxVcGRhdGUoZGF0YSk7XHJcbiAgfTtcclxuICBjb25zdCBvbkxhYmVsQ2hhbmdlMyA9IChsYWJlbCkgPT4ge1xyXG4gICAgc2V0TGFiZWwzKGxhYmVsKTtcclxuICAgIGNvbnN0IGRhdGEgPSB7XHJcbiAgICAgIGxhYmVsMzM6ICd0cnVlJyxcclxuICAgICAgbGFiZWwzOiBsYWJlbCxcclxuICAgICAgaW5kZXgsXHJcbiAgICAgIHNlbFNlY3Rpb246IHNlbGVjdGVkU2VjdGlvbixcclxuICAgIH07XHJcbiAgICBsYWJlbFVwZGF0ZShkYXRhKTtcclxuICB9O1xyXG4gIGNvbnN0IG9uTGFiZWxDaGFuZ2U0ID0gKGxhYmVsKSA9PiB7XHJcbiAgICBzZXRMYWJlbDQobGFiZWwpO1xyXG4gICAgY29uc3QgZGF0YSA9IHtcclxuICAgICAgbGFiZWw0NDogJ3RydWUnLFxyXG4gICAgICBsYWJlbDQ6IGxhYmVsLFxyXG4gICAgICBpbmRleCxcclxuICAgICAgc2VsU2VjdGlvbjogc2VsZWN0ZWRTZWN0aW9uLFxyXG4gICAgfTtcclxuICAgIGxhYmVsVXBkYXRlKGRhdGEpO1xyXG4gIH07XHJcbiAgY29uc3Qgb25MYWJlbENoYW5nZTUgPSAobGFiZWwpID0+IHtcclxuICAgIHNldExhYmVsNShsYWJlbCk7XHJcbiAgICBjb25zdCBkYXRhID0ge1xyXG4gICAgICBsYWJlbDU1OiAndHJ1ZScsXHJcbiAgICAgIGxhYmVsNTogbGFiZWwsXHJcbiAgICAgIGluZGV4LFxyXG4gICAgICBzZWxTZWN0aW9uOiBzZWxlY3RlZFNlY3Rpb24sXHJcbiAgICB9O1xyXG4gICAgbGFiZWxVcGRhdGUoZGF0YSk7XHJcbiAgfTtcclxuICBjb25zdCBvbkxhYmVsQ2hhbmdlNiA9IChsYWJlbCkgPT4ge1xyXG4gICAgc2V0TGFiZWw2KGxhYmVsKTtcclxuICAgIGNvbnN0IGRhdGEgPSB7XHJcbiAgICAgIGxhYmVsNjY6ICd0cnVlJyxcclxuICAgICAgbGFiZWw2OiBsYWJlbCxcclxuICAgICAgaW5kZXgsXHJcbiAgICAgIHNlbFNlY3Rpb246IHNlbGVjdGVkU2VjdGlvbixcclxuICAgIH07XHJcbiAgICBsYWJlbFVwZGF0ZShkYXRhKTtcclxuICB9O1xyXG4gIGNvbnN0IG9uTGFiZWxDaGFuZ2U3ID0gKGxhYmVsKSA9PiB7XHJcbiAgICBzZXRMYWJlbDcobGFiZWwpO1xyXG4gICAgY29uc3QgZGF0YSA9IHtcclxuICAgICAgbGFiZWw3NzogJ3RydWUnLFxyXG4gICAgICBsYWJlbDc6IGxhYmVsLFxyXG4gICAgICBpbmRleCxcclxuICAgICAgc2VsU2VjdGlvbjogc2VsZWN0ZWRTZWN0aW9uLFxyXG4gICAgfTtcclxuICAgIGxhYmVsVXBkYXRlKGRhdGEpO1xyXG4gIH07XHJcbiAgY29uc3Qgb25MYWJlbENoYW5nZTggPSAobGFiZWwpID0+IHtcclxuICAgIHNldExhYmVsOChsYWJlbCk7XHJcbiAgICBjb25zdCBkYXRhID0ge1xyXG4gICAgICBsYWJlbDg4OiAndHJ1ZScsXHJcbiAgICAgIGxhYmVsODogbGFiZWwsXHJcbiAgICAgIGluZGV4LFxyXG4gICAgICBzZWxTZWN0aW9uOiBzZWxlY3RlZFNlY3Rpb24sXHJcbiAgICB9O1xyXG4gICAgbGFiZWxVcGRhdGUoZGF0YSk7XHJcbiAgfTtcclxuICBjb25zdCBvbkxhYmVsQ2hhbmdlOSA9IChsYWJlbCkgPT4ge1xyXG4gICAgc2V0TGFiZWw5KGxhYmVsKTtcclxuICAgIGNvbnN0IGRhdGEgPSB7XHJcbiAgICAgIGxhYmVsOTk6ICd0cnVlJyxcclxuICAgICAgbGFiZWw5OiBsYWJlbCxcclxuICAgICAgaW5kZXgsXHJcbiAgICAgIHNlbFNlY3Rpb246IHNlbGVjdGVkU2VjdGlvbixcclxuICAgIH07XHJcbiAgICBsYWJlbFVwZGF0ZShkYXRhKTtcclxuICB9O1xyXG4gIGNvbnN0IG9uTGFiZWxDaGFuZ2UxMCA9IChsYWJlbCkgPT4ge1xyXG4gICAgc2V0TGFiZWwxMChsYWJlbCk7XHJcbiAgICBjb25zdCBkYXRhID0ge1xyXG4gICAgICBsYWJlbDEwMDogJ3RydWUnLFxyXG4gICAgICBsYWJlbDEwOiBsYWJlbCxcclxuICAgICAgaW5kZXgsXHJcbiAgICAgIHNlbFNlY3Rpb246IHNlbGVjdGVkU2VjdGlvbixcclxuICAgIH07XHJcbiAgICBsYWJlbFVwZGF0ZShkYXRhKTtcclxuICB9O1xyXG4gIGNvbnN0IG9uTGFiZWxDaGFuZ2UxMSA9IChsYWJlbCkgPT4ge1xyXG4gICAgc2V0TGFiZWwxMShsYWJlbCk7XHJcbiAgICBjb25zdCBkYXRhID0ge1xyXG4gICAgICBsYWJlbDExMTogJ3RydWUnLFxyXG4gICAgICBsYWJlbDExOiBsYWJlbCxcclxuICAgICAgaW5kZXgsXHJcbiAgICAgIHNlbFNlY3Rpb246IHNlbGVjdGVkU2VjdGlvbixcclxuICAgIH07XHJcbiAgICBsYWJlbFVwZGF0ZShkYXRhKTtcclxuICB9O1xyXG4gIGNvbnN0IG9uTGFiZWxDaGFuZ2UxMiA9IChsYWJlbCkgPT4ge1xyXG4gICAgc2V0TGFiZWwxMihsYWJlbCk7XHJcbiAgICBjb25zdCBkYXRhID0ge1xyXG4gICAgICBsYWJlbDEyMDogJ3RydWUnLFxyXG4gICAgICBsYWJlbDEyOiBsYWJlbCxcclxuICAgICAgaW5kZXgsXHJcbiAgICAgIHNlbFNlY3Rpb246IHNlbGVjdGVkU2VjdGlvbixcclxuICAgIH07XHJcbiAgICBsYWJlbFVwZGF0ZShkYXRhKTtcclxuICB9O1xyXG5cclxuICBjb25zb2xlLmxvZyhmaWVsZCk7XHJcblxyXG4gIC8vIERBVEFTRVRTXHJcbiAgY29uc3QgW2RhdGFzZXQxTGFiZWwsIHNldERhdGFzZXQxTGFiZWxdID0gdXNlU3RhdGUoJycpO1xyXG4gIGNvbnN0IFtkYXRhc2V0MkxhYmVsLCBzZXREYXRhc2V0MkxhYmVsXSA9IHVzZVN0YXRlKCcnKTtcclxuICBjb25zdCBbZGF0YXNldDNMYWJlbCwgc2V0RGF0YXNldDNMYWJlbF0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgY29uc3QgW2RhdGFzZXQ0TGFiZWwsIHNldERhdGFzZXQ0TGFiZWxdID0gdXNlU3RhdGUoJycpO1xyXG4gIGNvbnN0IFtkYXRhc2V0NUxhYmVsLCBzZXREYXRhc2V0NUxhYmVsXSA9IHVzZVN0YXRlKCcnKTtcclxuICBjb25zdCBbZGF0YXNldDZMYWJlbCwgc2V0RGF0YXNldDZMYWJlbF0gPSB1c2VTdGF0ZSgnJyk7XHJcblxyXG4gIC8vIERBVEFTRVQgMSAtLS0gU1RBUlQgLS0tXHJcbiAgY29uc3QgW2RhdGFzZXQxVmFsdWUxLCBzZXREYXRhc2V0MVZhbHVlMV0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgY29uc3QgW2RhdGFzZXQxVmFsdWUyLCBzZXREYXRhc2V0MVZhbHVlMl0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgY29uc3QgW2RhdGFzZXQxVmFsdWUzLCBzZXREYXRhc2V0MVZhbHVlM10gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgY29uc3QgW2RhdGFzZXQxVmFsdWU0LCBzZXREYXRhc2V0MVZhbHVlNF0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgY29uc3QgW2RhdGFzZXQxVmFsdWU1LCBzZXREYXRhc2V0MVZhbHVlNV0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgY29uc3QgW2RhdGFzZXQxVmFsdWU2LCBzZXREYXRhc2V0MVZhbHVlNl0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgY29uc3QgW2RhdGFzZXQxVmFsdWU3LCBzZXREYXRhc2V0MVZhbHVlN10gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgY29uc3QgW2RhdGFzZXQxVmFsdWU4LCBzZXREYXRhc2V0MVZhbHVlOF0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgY29uc3QgW2RhdGFzZXQxVmFsdWU5LCBzZXREYXRhc2V0MVZhbHVlOV0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgY29uc3QgW2RhdGFzZXQxVmFsdWUxMCwgc2V0RGF0YXNldDFWYWx1ZTEwXSA9IHVzZVN0YXRlKCcnKTtcclxuICBjb25zdCBbZGF0YXNldDFWYWx1ZTExLCBzZXREYXRhc2V0MVZhbHVlMTFdID0gdXNlU3RhdGUoJycpO1xyXG4gIGNvbnN0IFtkYXRhc2V0MVZhbHVlMTIsIHNldERhdGFzZXQxVmFsdWUxMl0gPSB1c2VTdGF0ZSgnJyk7XHJcblxyXG4gIGNvbnN0IG9uRGF0YXNldDFWYWx1ZTFDaGFuZ2UgPSAoZGF0YXNldFZhbHVlKSA9PiB7XHJcbiAgICBzZXREYXRhc2V0MVZhbHVlMShkYXRhc2V0VmFsdWUpO1xyXG4gICAgY29uc3QgZGF0YSA9IHtcclxuICAgICAgZGF0YXNldDFWYWx1ZU9uZTogJ3RydWUnLFxyXG4gICAgICBkYXRhc2V0MVZhbHVlMTogZGF0YXNldFZhbHVlLFxyXG4gICAgICBpbmRleCxcclxuICAgICAgc2VsU2VjdGlvbjogc2VsZWN0ZWRTZWN0aW9uLFxyXG4gICAgfTtcclxuICAgIGRhdGFzZXQxVXBkYXRlKGRhdGEpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IG9uRGF0YXNldDFWYWx1ZTJDaGFuZ2UgPSAoZGF0YXNldFZhbHVlKSA9PiB7XHJcbiAgICBzZXREYXRhc2V0MVZhbHVlMihkYXRhc2V0VmFsdWUpO1xyXG4gICAgY29uc3QgZGF0YSA9IHtcclxuICAgICAgZGF0YXNldDFWYWx1ZTIyOiAndHJ1ZScsXHJcbiAgICAgIGRhdGFzZXQxVmFsdWUyOiBkYXRhc2V0VmFsdWUsXHJcbiAgICAgIGluZGV4LFxyXG4gICAgICBzZWxTZWN0aW9uOiBzZWxlY3RlZFNlY3Rpb24sXHJcbiAgICB9O1xyXG4gICAgZGF0YXNldDFVcGRhdGUoZGF0YSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3Qgb25EYXRhc2V0MVZhbHVlM0NoYW5nZSA9IChkYXRhc2V0VmFsdWUpID0+IHtcclxuICAgIHNldERhdGFzZXQxVmFsdWUzKGRhdGFzZXRWYWx1ZSk7XHJcbiAgICBjb25zdCBkYXRhID0ge1xyXG4gICAgICBkYXRhc2V0MVZhbHVlMzM6ICd0cnVlJyxcclxuICAgICAgZGF0YXNldDFWYWx1ZTM6IGRhdGFzZXRWYWx1ZSxcclxuICAgICAgaW5kZXgsXHJcbiAgICAgIHNlbFNlY3Rpb246IHNlbGVjdGVkU2VjdGlvbixcclxuICAgIH07XHJcbiAgICBkYXRhc2V0MVVwZGF0ZShkYXRhKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBvbkRhdGFzZXQxVmFsdWU0Q2hhbmdlID0gKGRhdGFzZXRWYWx1ZSkgPT4ge1xyXG4gICAgc2V0RGF0YXNldDFWYWx1ZTQoZGF0YXNldFZhbHVlKTtcclxuICAgIGNvbnN0IGRhdGEgPSB7XHJcbiAgICAgIGRhdGFzZXQxVmFsdWU0NDogJ3RydWUnLFxyXG4gICAgICBkYXRhc2V0MVZhbHVlNDogZGF0YXNldFZhbHVlLFxyXG4gICAgICBpbmRleCxcclxuICAgICAgc2VsU2VjdGlvbjogc2VsZWN0ZWRTZWN0aW9uLFxyXG4gICAgfTtcclxuICAgIGRhdGFzZXQxVXBkYXRlKGRhdGEpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IG9uRGF0YXNldDFWYWx1ZTVDaGFuZ2UgPSAoZGF0YXNldFZhbHVlKSA9PiB7XHJcbiAgICBzZXREYXRhc2V0MVZhbHVlNShkYXRhc2V0VmFsdWUpO1xyXG4gICAgY29uc3QgZGF0YSA9IHtcclxuICAgICAgZGF0YXNldDFWYWx1ZTU1OiAndHJ1ZScsXHJcbiAgICAgIGRhdGFzZXQxVmFsdWU1OiBkYXRhc2V0VmFsdWUsXHJcbiAgICAgIGluZGV4LFxyXG4gICAgICBzZWxTZWN0aW9uOiBzZWxlY3RlZFNlY3Rpb24sXHJcbiAgICB9O1xyXG4gICAgZGF0YXNldDFVcGRhdGUoZGF0YSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3Qgb25EYXRhc2V0MVZhbHVlNkNoYW5nZSA9IChkYXRhc2V0VmFsdWUpID0+IHtcclxuICAgIHNldERhdGFzZXQxVmFsdWU2KGRhdGFzZXRWYWx1ZSk7XHJcbiAgICBjb25zdCBkYXRhID0ge1xyXG4gICAgICBkYXRhc2V0MVZhbHVlNjY6ICd0cnVlJyxcclxuICAgICAgZGF0YXNldDFWYWx1ZTY6IGRhdGFzZXRWYWx1ZSxcclxuICAgICAgaW5kZXgsXHJcbiAgICAgIHNlbFNlY3Rpb246IHNlbGVjdGVkU2VjdGlvbixcclxuICAgIH07XHJcbiAgICBkYXRhc2V0MVVwZGF0ZShkYXRhKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBvbkRhdGFzZXQxVmFsdWU3Q2hhbmdlID0gKGRhdGFzZXRWYWx1ZSkgPT4ge1xyXG4gICAgc2V0RGF0YXNldDFWYWx1ZTcoZGF0YXNldFZhbHVlKTtcclxuICAgIGNvbnN0IGRhdGEgPSB7XHJcbiAgICAgIGRhdGFzZXQxVmFsdWU3NzogJ3RydWUnLFxyXG4gICAgICBkYXRhc2V0MVZhbHVlNzogZGF0YXNldFZhbHVlLFxyXG4gICAgICBpbmRleCxcclxuICAgICAgc2VsU2VjdGlvbjogc2VsZWN0ZWRTZWN0aW9uLFxyXG4gICAgfTtcclxuICAgIGRhdGFzZXQxVXBkYXRlKGRhdGEpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IG9uRGF0YXNldDFWYWx1ZThDaGFuZ2UgPSAoZGF0YXNldFZhbHVlKSA9PiB7XHJcbiAgICBzZXREYXRhc2V0MVZhbHVlOChkYXRhc2V0VmFsdWUpO1xyXG4gICAgY29uc3QgZGF0YSA9IHtcclxuICAgICAgZGF0YXNldDFWYWx1ZTg4OiAndHJ1ZScsXHJcbiAgICAgIGRhdGFzZXQxVmFsdWU4OiBkYXRhc2V0VmFsdWUsXHJcbiAgICAgIGluZGV4LFxyXG4gICAgICBzZWxTZWN0aW9uOiBzZWxlY3RlZFNlY3Rpb24sXHJcbiAgICB9O1xyXG4gICAgZGF0YXNldDFVcGRhdGUoZGF0YSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3Qgb25EYXRhc2V0MVZhbHVlOUNoYW5nZSA9IChkYXRhc2V0VmFsdWUpID0+IHtcclxuICAgIHNldERhdGFzZXQxVmFsdWU5KGRhdGFzZXRWYWx1ZSk7XHJcbiAgICBjb25zdCBkYXRhID0ge1xyXG4gICAgICBkYXRhc2V0MVZhbHVlOTk6ICd0cnVlJyxcclxuICAgICAgZGF0YXNldDFWYWx1ZTk6IGRhdGFzZXRWYWx1ZSxcclxuICAgICAgaW5kZXgsXHJcbiAgICAgIHNlbFNlY3Rpb246IHNlbGVjdGVkU2VjdGlvbixcclxuICAgIH07XHJcbiAgICBkYXRhc2V0MVVwZGF0ZShkYXRhKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBvbkRhdGFzZXQxVmFsdWUxMENoYW5nZSA9IChkYXRhc2V0VmFsdWUpID0+IHtcclxuICAgIHNldERhdGFzZXQxVmFsdWUxMChkYXRhc2V0VmFsdWUpO1xyXG4gICAgY29uc3QgZGF0YSA9IHtcclxuICAgICAgZGF0YXNldDFWYWx1ZTEwMDogJ3RydWUnLFxyXG4gICAgICBkYXRhc2V0MVZhbHVlMTA6IGRhdGFzZXRWYWx1ZSxcclxuICAgICAgaW5kZXgsXHJcbiAgICAgIHNlbFNlY3Rpb246IHNlbGVjdGVkU2VjdGlvbixcclxuICAgIH07XHJcbiAgICBkYXRhc2V0MVVwZGF0ZShkYXRhKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBvbkRhdGFzZXQxVmFsdWUxMUNoYW5nZSA9IChkYXRhc2V0VmFsdWUpID0+IHtcclxuICAgIHNldERhdGFzZXQxVmFsdWUxMShkYXRhc2V0VmFsdWUpO1xyXG4gICAgY29uc3QgZGF0YSA9IHtcclxuICAgICAgZGF0YXNldDFWYWx1ZTExMTogJ3RydWUnLFxyXG4gICAgICBkYXRhc2V0MVZhbHVlMTE6IGRhdGFzZXRWYWx1ZSxcclxuICAgICAgaW5kZXgsXHJcbiAgICAgIHNlbFNlY3Rpb246IHNlbGVjdGVkU2VjdGlvbixcclxuICAgIH07XHJcbiAgICBkYXRhc2V0MVVwZGF0ZShkYXRhKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBvbkRhdGFzZXQxVmFsdWUxMkNoYW5nZSA9IChkYXRhc2V0VmFsdWUpID0+IHtcclxuICAgIHNldERhdGFzZXQxVmFsdWUxMihkYXRhc2V0VmFsdWUpO1xyXG4gICAgY29uc3QgZGF0YSA9IHtcclxuICAgICAgZGF0YXNldDFWYWx1ZTEyMDogJ3RydWUnLFxyXG4gICAgICBkYXRhc2V0MVZhbHVlMTI6IGRhdGFzZXRWYWx1ZSxcclxuICAgICAgaW5kZXgsXHJcbiAgICAgIHNlbFNlY3Rpb246IHNlbGVjdGVkU2VjdGlvbixcclxuICAgIH07XHJcbiAgICBkYXRhc2V0MVVwZGF0ZShkYXRhKTtcclxuICB9O1xyXG5cclxuICAvLyBEQVRBU0VUIDEgLS0tIEVORCAtLS1cclxuICAvLyBEQVRBU0VUIDIgLS0tIFNUQVJUIC0tLVxyXG4gIGNvbnN0IFtkYXRhc2V0MlZhbHVlMSwgc2V0RGF0YXNldDJWYWx1ZTFdID0gdXNlU3RhdGUoJycpO1xyXG4gIGNvbnN0IFtkYXRhc2V0MlZhbHVlMiwgc2V0RGF0YXNldDJWYWx1ZTJdID0gdXNlU3RhdGUoJycpO1xyXG4gIGNvbnN0IFtkYXRhc2V0MlZhbHVlMywgc2V0RGF0YXNldDJWYWx1ZTNdID0gdXNlU3RhdGUoJycpO1xyXG4gIGNvbnN0IFtkYXRhc2V0MlZhbHVlNCwgc2V0RGF0YXNldDJWYWx1ZTRdID0gdXNlU3RhdGUoJycpO1xyXG4gIGNvbnN0IFtkYXRhc2V0MlZhbHVlNSwgc2V0RGF0YXNldDJWYWx1ZTVdID0gdXNlU3RhdGUoJycpO1xyXG4gIGNvbnN0IFtkYXRhc2V0MlZhbHVlNiwgc2V0RGF0YXNldDJWYWx1ZTZdID0gdXNlU3RhdGUoJycpO1xyXG4gIGNvbnN0IFtkYXRhc2V0MlZhbHVlNywgc2V0RGF0YXNldDJWYWx1ZTddID0gdXNlU3RhdGUoJycpO1xyXG4gIGNvbnN0IFtkYXRhc2V0MlZhbHVlOCwgc2V0RGF0YXNldDJWYWx1ZThdID0gdXNlU3RhdGUoJycpO1xyXG4gIGNvbnN0IFtkYXRhc2V0MlZhbHVlOSwgc2V0RGF0YXNldDJWYWx1ZTldID0gdXNlU3RhdGUoJycpO1xyXG4gIGNvbnN0IFtkYXRhc2V0MlZhbHVlMTAsIHNldERhdGFzZXQyVmFsdWUxMF0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgY29uc3QgW2RhdGFzZXQyVmFsdWUxMSwgc2V0RGF0YXNldDJWYWx1ZTExXSA9IHVzZVN0YXRlKCcnKTtcclxuICBjb25zdCBbZGF0YXNldDJWYWx1ZTEyLCBzZXREYXRhc2V0MlZhbHVlMTJdID0gdXNlU3RhdGUoJycpO1xyXG5cclxuICBjb25zdCBvbkRhdGFzZXQyVmFsdWUxQ2hhbmdlID0gKGRhdGFzZXRWYWx1ZSkgPT4ge1xyXG4gICAgc2V0RGF0YXNldDJWYWx1ZTEoZGF0YXNldFZhbHVlKTtcclxuICAgIGNvbnN0IGRhdGEgPSB7XHJcbiAgICAgIGRhdGFzZXQyVmFsdWVPbmU6ICd0cnVlJyxcclxuICAgICAgZGF0YXNldDJWYWx1ZTE6IGRhdGFzZXRWYWx1ZSxcclxuICAgICAgaW5kZXgsXHJcbiAgICAgIHNlbFNlY3Rpb246IHNlbGVjdGVkU2VjdGlvbixcclxuICAgIH07XHJcbiAgICBkYXRhc2V0MlVwZGF0ZShkYXRhKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBvbkRhdGFzZXQyVmFsdWUyQ2hhbmdlID0gKGRhdGFzZXRWYWx1ZSkgPT4ge1xyXG4gICAgc2V0RGF0YXNldDJWYWx1ZTIoZGF0YXNldFZhbHVlKTtcclxuICAgIGNvbnN0IGRhdGEgPSB7XHJcbiAgICAgIGRhdGFzZXQyVmFsdWUyMjogJ3RydWUnLFxyXG4gICAgICBkYXRhc2V0MlZhbHVlMjogZGF0YXNldFZhbHVlLFxyXG4gICAgICBpbmRleCxcclxuICAgICAgc2VsU2VjdGlvbjogc2VsZWN0ZWRTZWN0aW9uLFxyXG4gICAgfTtcclxuICAgIGRhdGFzZXQyVXBkYXRlKGRhdGEpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IG9uRGF0YXNldDJWYWx1ZTNDaGFuZ2UgPSAoZGF0YXNldFZhbHVlKSA9PiB7XHJcbiAgICBzZXREYXRhc2V0MlZhbHVlMyhkYXRhc2V0VmFsdWUpO1xyXG4gICAgY29uc3QgZGF0YSA9IHtcclxuICAgICAgZGF0YXNldDJWYWx1ZTMzOiAndHJ1ZScsXHJcbiAgICAgIGRhdGFzZXQyVmFsdWUzOiBkYXRhc2V0VmFsdWUsXHJcbiAgICAgIGluZGV4LFxyXG4gICAgICBzZWxTZWN0aW9uOiBzZWxlY3RlZFNlY3Rpb24sXHJcbiAgICB9O1xyXG4gICAgZGF0YXNldDJVcGRhdGUoZGF0YSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3Qgb25EYXRhc2V0MlZhbHVlNENoYW5nZSA9IChkYXRhc2V0VmFsdWUpID0+IHtcclxuICAgIHNldERhdGFzZXQyVmFsdWU0KGRhdGFzZXRWYWx1ZSk7XHJcbiAgICBjb25zdCBkYXRhID0ge1xyXG4gICAgICBkYXRhc2V0MlZhbHVlNDQ6ICd0cnVlJyxcclxuICAgICAgZGF0YXNldDJWYWx1ZTQ6IGRhdGFzZXRWYWx1ZSxcclxuICAgICAgaW5kZXgsXHJcbiAgICAgIHNlbFNlY3Rpb246IHNlbGVjdGVkU2VjdGlvbixcclxuICAgIH07XHJcbiAgICBkYXRhc2V0MlVwZGF0ZShkYXRhKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBvbkRhdGFzZXQyVmFsdWU1Q2hhbmdlID0gKGRhdGFzZXRWYWx1ZSkgPT4ge1xyXG4gICAgc2V0RGF0YXNldDJWYWx1ZTUoZGF0YXNldFZhbHVlKTtcclxuICAgIGNvbnN0IGRhdGEgPSB7XHJcbiAgICAgIGRhdGFzZXQyVmFsdWU1NTogJ3RydWUnLFxyXG4gICAgICBkYXRhc2V0MlZhbHVlNTogZGF0YXNldFZhbHVlLFxyXG4gICAgICBpbmRleCxcclxuICAgICAgc2VsU2VjdGlvbjogc2VsZWN0ZWRTZWN0aW9uLFxyXG4gICAgfTtcclxuICAgIGRhdGFzZXQyVXBkYXRlKGRhdGEpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IG9uRGF0YXNldDJWYWx1ZTZDaGFuZ2UgPSAoZGF0YXNldFZhbHVlKSA9PiB7XHJcbiAgICBzZXREYXRhc2V0MlZhbHVlNihkYXRhc2V0VmFsdWUpO1xyXG4gICAgY29uc3QgZGF0YSA9IHtcclxuICAgICAgZGF0YXNldDJWYWx1ZTY2OiAndHJ1ZScsXHJcbiAgICAgIGRhdGFzZXQyVmFsdWU2OiBkYXRhc2V0VmFsdWUsXHJcbiAgICAgIGluZGV4LFxyXG4gICAgICBzZWxTZWN0aW9uOiBzZWxlY3RlZFNlY3Rpb24sXHJcbiAgICB9O1xyXG4gICAgZGF0YXNldDJVcGRhdGUoZGF0YSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3Qgb25EYXRhc2V0MlZhbHVlN0NoYW5nZSA9IChkYXRhc2V0VmFsdWUpID0+IHtcclxuICAgIHNldERhdGFzZXQyVmFsdWU3KGRhdGFzZXRWYWx1ZSk7XHJcbiAgICBjb25zdCBkYXRhID0ge1xyXG4gICAgICBkYXRhc2V0MlZhbHVlNzc6ICd0cnVlJyxcclxuICAgICAgZGF0YXNldDJWYWx1ZTc6IGRhdGFzZXRWYWx1ZSxcclxuICAgICAgaW5kZXgsXHJcbiAgICAgIHNlbFNlY3Rpb246IHNlbGVjdGVkU2VjdGlvbixcclxuICAgIH07XHJcbiAgICBkYXRhc2V0MlVwZGF0ZShkYXRhKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBvbkRhdGFzZXQyVmFsdWU4Q2hhbmdlID0gKGRhdGFzZXRWYWx1ZSkgPT4ge1xyXG4gICAgc2V0RGF0YXNldDJWYWx1ZTgoZGF0YXNldFZhbHVlKTtcclxuICAgIGNvbnN0IGRhdGEgPSB7XHJcbiAgICAgIGRhdGFzZXQyVmFsdWU4ODogJ3RydWUnLFxyXG4gICAgICBkYXRhc2V0MlZhbHVlODogZGF0YXNldFZhbHVlLFxyXG4gICAgICBpbmRleCxcclxuICAgICAgc2VsU2VjdGlvbjogc2VsZWN0ZWRTZWN0aW9uLFxyXG4gICAgfTtcclxuICAgIGRhdGFzZXQyVXBkYXRlKGRhdGEpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IG9uRGF0YXNldDJWYWx1ZTlDaGFuZ2UgPSAoZGF0YXNldFZhbHVlKSA9PiB7XHJcbiAgICBzZXREYXRhc2V0MlZhbHVlOShkYXRhc2V0VmFsdWUpO1xyXG4gICAgY29uc3QgZGF0YSA9IHtcclxuICAgICAgZGF0YXNldDJWYWx1ZTk5OiAndHJ1ZScsXHJcbiAgICAgIGRhdGFzZXQyVmFsdWU5OiBkYXRhc2V0VmFsdWUsXHJcbiAgICAgIGluZGV4LFxyXG4gICAgICBzZWxTZWN0aW9uOiBzZWxlY3RlZFNlY3Rpb24sXHJcbiAgICB9O1xyXG4gICAgZGF0YXNldDJVcGRhdGUoZGF0YSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3Qgb25EYXRhc2V0MlZhbHVlMTBDaGFuZ2UgPSAoZGF0YXNldFZhbHVlKSA9PiB7XHJcbiAgICBzZXREYXRhc2V0MlZhbHVlMTAoZGF0YXNldFZhbHVlKTtcclxuICAgIGNvbnN0IGRhdGEgPSB7XHJcbiAgICAgIGRhdGFzZXQyVmFsdWUxMDA6ICd0cnVlJyxcclxuICAgICAgZGF0YXNldDJWYWx1ZTEwOiBkYXRhc2V0VmFsdWUsXHJcbiAgICAgIGluZGV4LFxyXG4gICAgICBzZWxTZWN0aW9uOiBzZWxlY3RlZFNlY3Rpb24sXHJcbiAgICB9O1xyXG4gICAgZGF0YXNldDJVcGRhdGUoZGF0YSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3Qgb25EYXRhc2V0MlZhbHVlMTFDaGFuZ2UgPSAoZGF0YXNldFZhbHVlKSA9PiB7XHJcbiAgICBzZXREYXRhc2V0MlZhbHVlMTEoZGF0YXNldFZhbHVlKTtcclxuICAgIGNvbnN0IGRhdGEgPSB7XHJcbiAgICAgIGRhdGFzZXQyVmFsdWUxMTE6ICd0cnVlJyxcclxuICAgICAgZGF0YXNldDJWYWx1ZTExOiBkYXRhc2V0VmFsdWUsXHJcbiAgICAgIGluZGV4LFxyXG4gICAgICBzZWxTZWN0aW9uOiBzZWxlY3RlZFNlY3Rpb24sXHJcbiAgICB9O1xyXG4gICAgZGF0YXNldDJVcGRhdGUoZGF0YSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3Qgb25EYXRhc2V0MlZhbHVlMTJDaGFuZ2UgPSAoZGF0YXNldFZhbHVlKSA9PiB7XHJcbiAgICBzZXREYXRhc2V0MlZhbHVlMTIoZGF0YXNldFZhbHVlKTtcclxuICAgIGNvbnN0IGRhdGEgPSB7XHJcbiAgICAgIGRhdGFzZXQyVmFsdWUxMjA6ICd0cnVlJyxcclxuICAgICAgZGF0YXNldDJWYWx1ZTEyOiBkYXRhc2V0VmFsdWUsXHJcbiAgICAgIGluZGV4LFxyXG4gICAgICBzZWxTZWN0aW9uOiBzZWxlY3RlZFNlY3Rpb24sXHJcbiAgICB9O1xyXG4gICAgZGF0YXNldDJVcGRhdGUoZGF0YSk7XHJcbiAgfTtcclxuICAvLyBEQVRBU0VUIDIgLS0tIEVORCAtLS1cclxuICAvLyBEQVRBU0VUIDMgLS0tIFNUQVJUIC0tLVxyXG4gIGNvbnN0IFtkYXRhc2V0M1ZhbHVlMSwgc2V0RGF0YXNldDNWYWx1ZTFdID0gdXNlU3RhdGUoJycpO1xyXG4gIGNvbnN0IFtkYXRhc2V0M1ZhbHVlMiwgc2V0RGF0YXNldDNWYWx1ZTJdID0gdXNlU3RhdGUoJycpO1xyXG4gIGNvbnN0IFtkYXRhc2V0M1ZhbHVlMywgc2V0RGF0YXNldDNWYWx1ZTNdID0gdXNlU3RhdGUoJycpO1xyXG4gIGNvbnN0IFtkYXRhc2V0M1ZhbHVlNCwgc2V0RGF0YXNldDNWYWx1ZTRdID0gdXNlU3RhdGUoJycpO1xyXG4gIGNvbnN0IFtkYXRhc2V0M1ZhbHVlNSwgc2V0RGF0YXNldDNWYWx1ZTVdID0gdXNlU3RhdGUoJycpO1xyXG4gIGNvbnN0IFtkYXRhc2V0M1ZhbHVlNiwgc2V0RGF0YXNldDNWYWx1ZTZdID0gdXNlU3RhdGUoJycpO1xyXG4gIGNvbnN0IFtkYXRhc2V0M1ZhbHVlNywgc2V0RGF0YXNldDNWYWx1ZTddID0gdXNlU3RhdGUoJycpO1xyXG4gIGNvbnN0IFtkYXRhc2V0M1ZhbHVlOCwgc2V0RGF0YXNldDNWYWx1ZThdID0gdXNlU3RhdGUoJycpO1xyXG4gIGNvbnN0IFtkYXRhc2V0M1ZhbHVlOSwgc2V0RGF0YXNldDNWYWx1ZTldID0gdXNlU3RhdGUoJycpO1xyXG4gIGNvbnN0IFtkYXRhc2V0M1ZhbHVlMTAsIHNldERhdGFzZXQzVmFsdWUxMF0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgY29uc3QgW2RhdGFzZXQzVmFsdWUxMSwgc2V0RGF0YXNldDNWYWx1ZTExXSA9IHVzZVN0YXRlKCcnKTtcclxuICBjb25zdCBbZGF0YXNldDNWYWx1ZTEyLCBzZXREYXRhc2V0M1ZhbHVlMTJdID0gdXNlU3RhdGUoJycpO1xyXG5cclxuICBjb25zdCBvbkRhdGFzZXQzVmFsdWUxQ2hhbmdlID0gKGRhdGFzZXRWYWx1ZSkgPT4ge1xyXG4gICAgc2V0RGF0YXNldDNWYWx1ZTEoZGF0YXNldFZhbHVlKTtcclxuICAgIGNvbnN0IGRhdGEgPSB7XHJcbiAgICAgIGRhdGFzZXQzVmFsdWVPbmU6ICd0cnVlJyxcclxuICAgICAgZGF0YXNldDNWYWx1ZTE6IGRhdGFzZXRWYWx1ZSxcclxuICAgICAgaW5kZXgsXHJcbiAgICAgIHNlbFNlY3Rpb246IHNlbGVjdGVkU2VjdGlvbixcclxuICAgIH07XHJcbiAgICBkYXRhc2V0M1VwZGF0ZShkYXRhKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBvbkRhdGFzZXQzVmFsdWUyQ2hhbmdlID0gKGRhdGFzZXRWYWx1ZSkgPT4ge1xyXG4gICAgc2V0RGF0YXNldDNWYWx1ZTIoZGF0YXNldFZhbHVlKTtcclxuICAgIGNvbnN0IGRhdGEgPSB7XHJcbiAgICAgIGRhdGFzZXQzVmFsdWUyMjogJ3RydWUnLFxyXG4gICAgICBkYXRhc2V0M1ZhbHVlMjogZGF0YXNldFZhbHVlLFxyXG4gICAgICBpbmRleCxcclxuICAgICAgc2VsU2VjdGlvbjogc2VsZWN0ZWRTZWN0aW9uLFxyXG4gICAgfTtcclxuICAgIGRhdGFzZXQzVXBkYXRlKGRhdGEpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IG9uRGF0YXNldDNWYWx1ZTNDaGFuZ2UgPSAoZGF0YXNldFZhbHVlKSA9PiB7XHJcbiAgICBzZXREYXRhc2V0M1ZhbHVlMyhkYXRhc2V0VmFsdWUpO1xyXG4gICAgY29uc3QgZGF0YSA9IHtcclxuICAgICAgZGF0YXNldDNWYWx1ZTMzOiAndHJ1ZScsXHJcbiAgICAgIGRhdGFzZXQzVmFsdWUzOiBkYXRhc2V0VmFsdWUsXHJcbiAgICAgIGluZGV4LFxyXG4gICAgICBzZWxTZWN0aW9uOiBzZWxlY3RlZFNlY3Rpb24sXHJcbiAgICB9O1xyXG4gICAgZGF0YXNldDNVcGRhdGUoZGF0YSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3Qgb25EYXRhc2V0M1ZhbHVlNENoYW5nZSA9IChkYXRhc2V0VmFsdWUpID0+IHtcclxuICAgIHNldERhdGFzZXQzVmFsdWU0KGRhdGFzZXRWYWx1ZSk7XHJcbiAgICBjb25zdCBkYXRhID0ge1xyXG4gICAgICBkYXRhc2V0M1ZhbHVlNDQ6ICd0cnVlJyxcclxuICAgICAgZGF0YXNldDNWYWx1ZTQ6IGRhdGFzZXRWYWx1ZSxcclxuICAgICAgaW5kZXgsXHJcbiAgICAgIHNlbFNlY3Rpb246IHNlbGVjdGVkU2VjdGlvbixcclxuICAgIH07XHJcbiAgICBkYXRhc2V0M1VwZGF0ZShkYXRhKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBvbkRhdGFzZXQzVmFsdWU1Q2hhbmdlID0gKGRhdGFzZXRWYWx1ZSkgPT4ge1xyXG4gICAgc2V0RGF0YXNldDNWYWx1ZTUoZGF0YXNldFZhbHVlKTtcclxuICAgIGNvbnN0IGRhdGEgPSB7XHJcbiAgICAgIGRhdGFzZXQzVmFsdWU1NTogJ3RydWUnLFxyXG4gICAgICBkYXRhc2V0M1ZhbHVlNTogZGF0YXNldFZhbHVlLFxyXG4gICAgICBpbmRleCxcclxuICAgICAgc2VsU2VjdGlvbjogc2VsZWN0ZWRTZWN0aW9uLFxyXG4gICAgfTtcclxuICAgIGRhdGFzZXQzVXBkYXRlKGRhdGEpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IG9uRGF0YXNldDNWYWx1ZTZDaGFuZ2UgPSAoZGF0YXNldFZhbHVlKSA9PiB7XHJcbiAgICBzZXREYXRhc2V0M1ZhbHVlNihkYXRhc2V0VmFsdWUpO1xyXG4gICAgY29uc3QgZGF0YSA9IHtcclxuICAgICAgZGF0YXNldDNWYWx1ZTY2OiAndHJ1ZScsXHJcbiAgICAgIGRhdGFzZXQzVmFsdWU2OiBkYXRhc2V0VmFsdWUsXHJcbiAgICAgIGluZGV4LFxyXG4gICAgICBzZWxTZWN0aW9uOiBzZWxlY3RlZFNlY3Rpb24sXHJcbiAgICB9O1xyXG4gICAgZGF0YXNldDNVcGRhdGUoZGF0YSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3Qgb25EYXRhc2V0M1ZhbHVlN0NoYW5nZSA9IChkYXRhc2V0VmFsdWUpID0+IHtcclxuICAgIHNldERhdGFzZXQzVmFsdWU3KGRhdGFzZXRWYWx1ZSk7XHJcbiAgICBjb25zdCBkYXRhID0ge1xyXG4gICAgICBkYXRhc2V0M1ZhbHVlNzc6ICd0cnVlJyxcclxuICAgICAgZGF0YXNldDNWYWx1ZTc6IGRhdGFzZXRWYWx1ZSxcclxuICAgICAgaW5kZXgsXHJcbiAgICAgIHNlbFNlY3Rpb246IHNlbGVjdGVkU2VjdGlvbixcclxuICAgIH07XHJcbiAgICBkYXRhc2V0M1VwZGF0ZShkYXRhKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBvbkRhdGFzZXQzVmFsdWU4Q2hhbmdlID0gKGRhdGFzZXRWYWx1ZSkgPT4ge1xyXG4gICAgc2V0RGF0YXNldDNWYWx1ZTgoZGF0YXNldFZhbHVlKTtcclxuICAgIGNvbnN0IGRhdGEgPSB7XHJcbiAgICAgIGRhdGFzZXQzVmFsdWU4ODogJ3RydWUnLFxyXG4gICAgICBkYXRhc2V0M1ZhbHVlODogZGF0YXNldFZhbHVlLFxyXG4gICAgICBpbmRleCxcclxuICAgICAgc2VsU2VjdGlvbjogc2VsZWN0ZWRTZWN0aW9uLFxyXG4gICAgfTtcclxuICAgIGRhdGFzZXQzVXBkYXRlKGRhdGEpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IG9uRGF0YXNldDNWYWx1ZTlDaGFuZ2UgPSAoZGF0YXNldFZhbHVlKSA9PiB7XHJcbiAgICBzZXREYXRhc2V0M1ZhbHVlOShkYXRhc2V0VmFsdWUpO1xyXG4gICAgY29uc3QgZGF0YSA9IHtcclxuICAgICAgZGF0YXNldDNWYWx1ZTk5OiAndHJ1ZScsXHJcbiAgICAgIGRhdGFzZXQzVmFsdWU5OiBkYXRhc2V0VmFsdWUsXHJcbiAgICAgIGluZGV4LFxyXG4gICAgICBzZWxTZWN0aW9uOiBzZWxlY3RlZFNlY3Rpb24sXHJcbiAgICB9O1xyXG4gICAgZGF0YXNldDNVcGRhdGUoZGF0YSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3Qgb25EYXRhc2V0M1ZhbHVlMTBDaGFuZ2UgPSAoZGF0YXNldFZhbHVlKSA9PiB7XHJcbiAgICBzZXREYXRhc2V0M1ZhbHVlMTAoZGF0YXNldFZhbHVlKTtcclxuICAgIGNvbnN0IGRhdGEgPSB7XHJcbiAgICAgIGRhdGFzZXQzVmFsdWUxMDA6ICd0cnVlJyxcclxuICAgICAgZGF0YXNldDNWYWx1ZTEwOiBkYXRhc2V0VmFsdWUsXHJcbiAgICAgIGluZGV4LFxyXG4gICAgICBzZWxTZWN0aW9uOiBzZWxlY3RlZFNlY3Rpb24sXHJcbiAgICB9O1xyXG4gICAgZGF0YXNldDNVcGRhdGUoZGF0YSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3Qgb25EYXRhc2V0M1ZhbHVlMTFDaGFuZ2UgPSAoZGF0YXNldFZhbHVlKSA9PiB7XHJcbiAgICBzZXREYXRhc2V0M1ZhbHVlMTEoZGF0YXNldFZhbHVlKTtcclxuICAgIGNvbnN0IGRhdGEgPSB7XHJcbiAgICAgIGRhdGFzZXQzVmFsdWUxMTE6ICd0cnVlJyxcclxuICAgICAgZGF0YXNldDNWYWx1ZTExOiBkYXRhc2V0VmFsdWUsXHJcbiAgICAgIGluZGV4LFxyXG4gICAgICBzZWxTZWN0aW9uOiBzZWxlY3RlZFNlY3Rpb24sXHJcbiAgICB9O1xyXG4gICAgZGF0YXNldDNVcGRhdGUoZGF0YSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3Qgb25EYXRhc2V0M1ZhbHVlMTJDaGFuZ2UgPSAoZGF0YXNldFZhbHVlKSA9PiB7XHJcbiAgICBzZXREYXRhc2V0M1ZhbHVlMTIoZGF0YXNldFZhbHVlKTtcclxuICAgIGNvbnN0IGRhdGEgPSB7XHJcbiAgICAgIGRhdGFzZXQzVmFsdWUxMjA6ICd0cnVlJyxcclxuICAgICAgZGF0YXNldDNWYWx1ZTEyOiBkYXRhc2V0VmFsdWUsXHJcbiAgICAgIGluZGV4LFxyXG4gICAgICBzZWxTZWN0aW9uOiBzZWxlY3RlZFNlY3Rpb24sXHJcbiAgICB9O1xyXG4gICAgZGF0YXNldDNVcGRhdGUoZGF0YSk7XHJcbiAgfTtcclxuICAvLyBEQVRBU0VUIDMgLS0tIEVORCAtLS1cclxuICAvLyBEQVRBU0VUIDQgLS0tIFNUQVJUIC0tLVxyXG4gIGNvbnN0IFtkYXRhc2V0NFZhbHVlMSwgc2V0RGF0YXNldDRWYWx1ZTFdID0gdXNlU3RhdGUoJycpO1xyXG4gIGNvbnN0IFtkYXRhc2V0NFZhbHVlMiwgc2V0RGF0YXNldDRWYWx1ZTJdID0gdXNlU3RhdGUoJycpO1xyXG4gIGNvbnN0IFtkYXRhc2V0NFZhbHVlMywgc2V0RGF0YXNldDRWYWx1ZTNdID0gdXNlU3RhdGUoJycpO1xyXG4gIGNvbnN0IFtkYXRhc2V0NFZhbHVlNCwgc2V0RGF0YXNldDRWYWx1ZTRdID0gdXNlU3RhdGUoJycpO1xyXG4gIGNvbnN0IFtkYXRhc2V0NFZhbHVlNSwgc2V0RGF0YXNldDRWYWx1ZTVdID0gdXNlU3RhdGUoJycpO1xyXG4gIGNvbnN0IFtkYXRhc2V0NFZhbHVlNiwgc2V0RGF0YXNldDRWYWx1ZTZdID0gdXNlU3RhdGUoJycpO1xyXG4gIGNvbnN0IFtkYXRhc2V0NFZhbHVlNywgc2V0RGF0YXNldDRWYWx1ZTddID0gdXNlU3RhdGUoJycpO1xyXG4gIGNvbnN0IFtkYXRhc2V0NFZhbHVlOCwgc2V0RGF0YXNldDRWYWx1ZThdID0gdXNlU3RhdGUoJycpO1xyXG4gIGNvbnN0IFtkYXRhc2V0NFZhbHVlOSwgc2V0RGF0YXNldDRWYWx1ZTldID0gdXNlU3RhdGUoJycpO1xyXG4gIGNvbnN0IFtkYXRhc2V0NFZhbHVlMTAsIHNldERhdGFzZXQ0VmFsdWUxMF0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgY29uc3QgW2RhdGFzZXQ0VmFsdWUxMSwgc2V0RGF0YXNldDRWYWx1ZTExXSA9IHVzZVN0YXRlKCcnKTtcclxuICBjb25zdCBbZGF0YXNldDRWYWx1ZTEyLCBzZXREYXRhc2V0NFZhbHVlMTJdID0gdXNlU3RhdGUoJycpO1xyXG5cclxuICBjb25zdCBvbkRhdGFzZXQ0VmFsdWUxQ2hhbmdlID0gKGRhdGFzZXRWYWx1ZSkgPT4ge1xyXG4gICAgc2V0RGF0YXNldDRWYWx1ZTEoZGF0YXNldFZhbHVlKTtcclxuICAgIGNvbnN0IGRhdGEgPSB7XHJcbiAgICAgIGRhdGFzZXQ0VmFsdWVPbmU6ICd0cnVlJyxcclxuICAgICAgZGF0YXNldDRWYWx1ZTE6IGRhdGFzZXRWYWx1ZSxcclxuICAgICAgaW5kZXgsXHJcbiAgICAgIHNlbFNlY3Rpb246IHNlbGVjdGVkU2VjdGlvbixcclxuICAgIH07XHJcbiAgICBkYXRhc2V0NFVwZGF0ZShkYXRhKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBvbkRhdGFzZXQ0VmFsdWUyQ2hhbmdlID0gKGRhdGFzZXRWYWx1ZSkgPT4ge1xyXG4gICAgc2V0RGF0YXNldDRWYWx1ZTIoZGF0YXNldFZhbHVlKTtcclxuICAgIGNvbnN0IGRhdGEgPSB7XHJcbiAgICAgIGRhdGFzZXQ0VmFsdWUyMjogJ3RydWUnLFxyXG4gICAgICBkYXRhc2V0NFZhbHVlMjogZGF0YXNldFZhbHVlLFxyXG4gICAgICBpbmRleCxcclxuICAgICAgc2VsU2VjdGlvbjogc2VsZWN0ZWRTZWN0aW9uLFxyXG4gICAgfTtcclxuICAgIGRhdGFzZXQ0VXBkYXRlKGRhdGEpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IG9uRGF0YXNldDRWYWx1ZTNDaGFuZ2UgPSAoZGF0YXNldFZhbHVlKSA9PiB7XHJcbiAgICBzZXREYXRhc2V0NFZhbHVlMyhkYXRhc2V0VmFsdWUpO1xyXG4gICAgY29uc3QgZGF0YSA9IHtcclxuICAgICAgZGF0YXNldDRWYWx1ZTMzOiAndHJ1ZScsXHJcbiAgICAgIGRhdGFzZXQ0VmFsdWUzOiBkYXRhc2V0VmFsdWUsXHJcbiAgICAgIGluZGV4LFxyXG4gICAgICBzZWxTZWN0aW9uOiBzZWxlY3RlZFNlY3Rpb24sXHJcbiAgICB9O1xyXG4gICAgZGF0YXNldDRVcGRhdGUoZGF0YSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3Qgb25EYXRhc2V0NFZhbHVlNENoYW5nZSA9IChkYXRhc2V0VmFsdWUpID0+IHtcclxuICAgIHNldERhdGFzZXQ0VmFsdWU0KGRhdGFzZXRWYWx1ZSk7XHJcbiAgICBjb25zdCBkYXRhID0ge1xyXG4gICAgICBkYXRhc2V0NFZhbHVlNDQ6ICd0cnVlJyxcclxuICAgICAgZGF0YXNldDRWYWx1ZTQ6IGRhdGFzZXRWYWx1ZSxcclxuICAgICAgaW5kZXgsXHJcbiAgICAgIHNlbFNlY3Rpb246IHNlbGVjdGVkU2VjdGlvbixcclxuICAgIH07XHJcbiAgICBkYXRhc2V0NFVwZGF0ZShkYXRhKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBvbkRhdGFzZXQ0VmFsdWU1Q2hhbmdlID0gKGRhdGFzZXRWYWx1ZSkgPT4ge1xyXG4gICAgc2V0RGF0YXNldDRWYWx1ZTUoZGF0YXNldFZhbHVlKTtcclxuICAgIGNvbnN0IGRhdGEgPSB7XHJcbiAgICAgIGRhdGFzZXQ0VmFsdWU1NTogJ3RydWUnLFxyXG4gICAgICBkYXRhc2V0NFZhbHVlNTogZGF0YXNldFZhbHVlLFxyXG4gICAgICBpbmRleCxcclxuICAgICAgc2VsU2VjdGlvbjogc2VsZWN0ZWRTZWN0aW9uLFxyXG4gICAgfTtcclxuICAgIGRhdGFzZXQ0VXBkYXRlKGRhdGEpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IG9uRGF0YXNldDRWYWx1ZTZDaGFuZ2UgPSAoZGF0YXNldFZhbHVlKSA9PiB7XHJcbiAgICBzZXREYXRhc2V0NFZhbHVlNihkYXRhc2V0VmFsdWUpO1xyXG4gICAgY29uc3QgZGF0YSA9IHtcclxuICAgICAgZGF0YXNldDRWYWx1ZTY2OiAndHJ1ZScsXHJcbiAgICAgIGRhdGFzZXQ0VmFsdWU2OiBkYXRhc2V0VmFsdWUsXHJcbiAgICAgIGluZGV4LFxyXG4gICAgICBzZWxTZWN0aW9uOiBzZWxlY3RlZFNlY3Rpb24sXHJcbiAgICB9O1xyXG4gICAgZGF0YXNldDRVcGRhdGUoZGF0YSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3Qgb25EYXRhc2V0NFZhbHVlN0NoYW5nZSA9IChkYXRhc2V0VmFsdWUpID0+IHtcclxuICAgIHNldERhdGFzZXQ0VmFsdWU3KGRhdGFzZXRWYWx1ZSk7XHJcbiAgICBjb25zdCBkYXRhID0ge1xyXG4gICAgICBkYXRhc2V0NFZhbHVlNzc6ICd0cnVlJyxcclxuICAgICAgZGF0YXNldDRWYWx1ZTc6IGRhdGFzZXRWYWx1ZSxcclxuICAgICAgaW5kZXgsXHJcbiAgICAgIHNlbFNlY3Rpb246IHNlbGVjdGVkU2VjdGlvbixcclxuICAgIH07XHJcbiAgICBkYXRhc2V0NFVwZGF0ZShkYXRhKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBvbkRhdGFzZXQ0VmFsdWU4Q2hhbmdlID0gKGRhdGFzZXRWYWx1ZSkgPT4ge1xyXG4gICAgc2V0RGF0YXNldDRWYWx1ZTgoZGF0YXNldFZhbHVlKTtcclxuICAgIGNvbnN0IGRhdGEgPSB7XHJcbiAgICAgIGRhdGFzZXQ0VmFsdWU4ODogJ3RydWUnLFxyXG4gICAgICBkYXRhc2V0NFZhbHVlODogZGF0YXNldFZhbHVlLFxyXG4gICAgICBpbmRleCxcclxuICAgICAgc2VsU2VjdGlvbjogc2VsZWN0ZWRTZWN0aW9uLFxyXG4gICAgfTtcclxuICAgIGRhdGFzZXQ0VXBkYXRlKGRhdGEpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IG9uRGF0YXNldDRWYWx1ZTlDaGFuZ2UgPSAoZGF0YXNldFZhbHVlKSA9PiB7XHJcbiAgICBzZXREYXRhc2V0NFZhbHVlOShkYXRhc2V0VmFsdWUpO1xyXG4gICAgY29uc3QgZGF0YSA9IHtcclxuICAgICAgZGF0YXNldDRWYWx1ZTk5OiAndHJ1ZScsXHJcbiAgICAgIGRhdGFzZXQ0VmFsdWU5OiBkYXRhc2V0VmFsdWUsXHJcbiAgICAgIGluZGV4LFxyXG4gICAgICBzZWxTZWN0aW9uOiBzZWxlY3RlZFNlY3Rpb24sXHJcbiAgICB9O1xyXG4gICAgZGF0YXNldDRVcGRhdGUoZGF0YSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3Qgb25EYXRhc2V0NFZhbHVlMTBDaGFuZ2UgPSAoZGF0YXNldFZhbHVlKSA9PiB7XHJcbiAgICBzZXREYXRhc2V0NFZhbHVlMTAoZGF0YXNldFZhbHVlKTtcclxuICAgIGNvbnN0IGRhdGEgPSB7XHJcbiAgICAgIGRhdGFzZXQ0VmFsdWUxMDA6ICd0cnVlJyxcclxuICAgICAgZGF0YXNldDRWYWx1ZTEwOiBkYXRhc2V0VmFsdWUsXHJcbiAgICAgIGluZGV4LFxyXG4gICAgICBzZWxTZWN0aW9uOiBzZWxlY3RlZFNlY3Rpb24sXHJcbiAgICB9O1xyXG4gICAgZGF0YXNldDRVcGRhdGUoZGF0YSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3Qgb25EYXRhc2V0NFZhbHVlMTFDaGFuZ2UgPSAoZGF0YXNldFZhbHVlKSA9PiB7XHJcbiAgICBzZXREYXRhc2V0NFZhbHVlMTEoZGF0YXNldFZhbHVlKTtcclxuICAgIGNvbnN0IGRhdGEgPSB7XHJcbiAgICAgIGRhdGFzZXQ0VmFsdWUxMTE6ICd0cnVlJyxcclxuICAgICAgZGF0YXNldDRWYWx1ZTExOiBkYXRhc2V0VmFsdWUsXHJcbiAgICAgIGluZGV4LFxyXG4gICAgICBzZWxTZWN0aW9uOiBzZWxlY3RlZFNlY3Rpb24sXHJcbiAgICB9O1xyXG4gICAgZGF0YXNldDRVcGRhdGUoZGF0YSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3Qgb25EYXRhc2V0NFZhbHVlMTJDaGFuZ2UgPSAoZGF0YXNldFZhbHVlKSA9PiB7XHJcbiAgICBzZXREYXRhc2V0NFZhbHVlMTIoZGF0YXNldFZhbHVlKTtcclxuICAgIGNvbnN0IGRhdGEgPSB7XHJcbiAgICAgIGRhdGFzZXQ0VmFsdWUxMjA6ICd0cnVlJyxcclxuICAgICAgZGF0YXNldDRWYWx1ZTEyOiBkYXRhc2V0VmFsdWUsXHJcbiAgICAgIGluZGV4LFxyXG4gICAgICBzZWxTZWN0aW9uOiBzZWxlY3RlZFNlY3Rpb24sXHJcbiAgICB9O1xyXG4gICAgZGF0YXNldDRVcGRhdGUoZGF0YSk7XHJcbiAgfTtcclxuICAvLyBEQVRBU0VUIDQgLS0tIEVORCAtLS1cclxuICAvLyBEQVRBU0VUIDUgLS0tIFNUQVJUIC0tLVxyXG4gIGNvbnN0IFtkYXRhc2V0NVZhbHVlMSwgc2V0RGF0YXNldDVWYWx1ZTFdID0gdXNlU3RhdGUoJycpO1xyXG4gIGNvbnN0IFtkYXRhc2V0NVZhbHVlMiwgc2V0RGF0YXNldDVWYWx1ZTJdID0gdXNlU3RhdGUoJycpO1xyXG4gIGNvbnN0IFtkYXRhc2V0NVZhbHVlMywgc2V0RGF0YXNldDVWYWx1ZTNdID0gdXNlU3RhdGUoJycpO1xyXG4gIGNvbnN0IFtkYXRhc2V0NVZhbHVlNCwgc2V0RGF0YXNldDVWYWx1ZTRdID0gdXNlU3RhdGUoJycpO1xyXG4gIGNvbnN0IFtkYXRhc2V0NVZhbHVlNSwgc2V0RGF0YXNldDVWYWx1ZTVdID0gdXNlU3RhdGUoJycpO1xyXG4gIGNvbnN0IFtkYXRhc2V0NVZhbHVlNiwgc2V0RGF0YXNldDVWYWx1ZTZdID0gdXNlU3RhdGUoJycpO1xyXG4gIGNvbnN0IFtkYXRhc2V0NVZhbHVlNywgc2V0RGF0YXNldDVWYWx1ZTddID0gdXNlU3RhdGUoJycpO1xyXG4gIGNvbnN0IFtkYXRhc2V0NVZhbHVlOCwgc2V0RGF0YXNldDVWYWx1ZThdID0gdXNlU3RhdGUoJycpO1xyXG4gIGNvbnN0IFtkYXRhc2V0NVZhbHVlOSwgc2V0RGF0YXNldDVWYWx1ZTldID0gdXNlU3RhdGUoJycpO1xyXG4gIGNvbnN0IFtkYXRhc2V0NVZhbHVlMTAsIHNldERhdGFzZXQ1VmFsdWUxMF0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgY29uc3QgW2RhdGFzZXQ1VmFsdWUxMSwgc2V0RGF0YXNldDVWYWx1ZTExXSA9IHVzZVN0YXRlKCcnKTtcclxuICBjb25zdCBbZGF0YXNldDVWYWx1ZTEyLCBzZXREYXRhc2V0NVZhbHVlMTJdID0gdXNlU3RhdGUoJycpO1xyXG5cclxuICBjb25zdCBvbkRhdGFzZXQ1VmFsdWUxQ2hhbmdlID0gKGRhdGFzZXRWYWx1ZSkgPT4ge1xyXG4gICAgc2V0RGF0YXNldDVWYWx1ZTEoZGF0YXNldFZhbHVlKTtcclxuICAgIGNvbnN0IGRhdGEgPSB7XHJcbiAgICAgIGRhdGFzZXQ1VmFsdWVPbmU6ICd0cnVlJyxcclxuICAgICAgZGF0YXNldDVWYWx1ZTE6IGRhdGFzZXRWYWx1ZSxcclxuICAgICAgaW5kZXgsXHJcbiAgICAgIHNlbFNlY3Rpb246IHNlbGVjdGVkU2VjdGlvbixcclxuICAgIH07XHJcbiAgICBkYXRhc2V0NVVwZGF0ZShkYXRhKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBvbkRhdGFzZXQ1VmFsdWUyQ2hhbmdlID0gKGRhdGFzZXRWYWx1ZSkgPT4ge1xyXG4gICAgc2V0RGF0YXNldDVWYWx1ZTIoZGF0YXNldFZhbHVlKTtcclxuICAgIGNvbnN0IGRhdGEgPSB7XHJcbiAgICAgIGRhdGFzZXQ1VmFsdWUyMjogJ3RydWUnLFxyXG4gICAgICBkYXRhc2V0NVZhbHVlMjogZGF0YXNldFZhbHVlLFxyXG4gICAgICBpbmRleCxcclxuICAgICAgc2VsU2VjdGlvbjogc2VsZWN0ZWRTZWN0aW9uLFxyXG4gICAgfTtcclxuICAgIGRhdGFzZXQ1VXBkYXRlKGRhdGEpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IG9uRGF0YXNldDVWYWx1ZTNDaGFuZ2UgPSAoZGF0YXNldFZhbHVlKSA9PiB7XHJcbiAgICBzZXREYXRhc2V0NVZhbHVlMyhkYXRhc2V0VmFsdWUpO1xyXG4gICAgY29uc3QgZGF0YSA9IHtcclxuICAgICAgZGF0YXNldDVWYWx1ZTMzOiAndHJ1ZScsXHJcbiAgICAgIGRhdGFzZXQ1VmFsdWUzOiBkYXRhc2V0VmFsdWUsXHJcbiAgICAgIGluZGV4LFxyXG4gICAgICBzZWxTZWN0aW9uOiBzZWxlY3RlZFNlY3Rpb24sXHJcbiAgICB9O1xyXG4gICAgZGF0YXNldDVVcGRhdGUoZGF0YSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3Qgb25EYXRhc2V0NVZhbHVlNENoYW5nZSA9IChkYXRhc2V0VmFsdWUpID0+IHtcclxuICAgIHNldERhdGFzZXQ1VmFsdWU0KGRhdGFzZXRWYWx1ZSk7XHJcbiAgICBjb25zdCBkYXRhID0ge1xyXG4gICAgICBkYXRhc2V0NVZhbHVlNDQ6ICd0cnVlJyxcclxuICAgICAgZGF0YXNldDVWYWx1ZTQ6IGRhdGFzZXRWYWx1ZSxcclxuICAgICAgaW5kZXgsXHJcbiAgICAgIHNlbFNlY3Rpb246IHNlbGVjdGVkU2VjdGlvbixcclxuICAgIH07XHJcbiAgICBkYXRhc2V0NVVwZGF0ZShkYXRhKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBvbkRhdGFzZXQ1VmFsdWU1Q2hhbmdlID0gKGRhdGFzZXRWYWx1ZSkgPT4ge1xyXG4gICAgc2V0RGF0YXNldDVWYWx1ZTUoZGF0YXNldFZhbHVlKTtcclxuICAgIGNvbnN0IGRhdGEgPSB7XHJcbiAgICAgIGRhdGFzZXQ1VmFsdWU1NTogJ3RydWUnLFxyXG4gICAgICBkYXRhc2V0NVZhbHVlNTogZGF0YXNldFZhbHVlLFxyXG4gICAgICBpbmRleCxcclxuICAgICAgc2VsU2VjdGlvbjogc2VsZWN0ZWRTZWN0aW9uLFxyXG4gICAgfTtcclxuICAgIGRhdGFzZXQ1VXBkYXRlKGRhdGEpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IG9uRGF0YXNldDVWYWx1ZTZDaGFuZ2UgPSAoZGF0YXNldFZhbHVlKSA9PiB7XHJcbiAgICBzZXREYXRhc2V0NVZhbHVlNihkYXRhc2V0VmFsdWUpO1xyXG4gICAgY29uc3QgZGF0YSA9IHtcclxuICAgICAgZGF0YXNldDVWYWx1ZTY2OiAndHJ1ZScsXHJcbiAgICAgIGRhdGFzZXQ1VmFsdWU2OiBkYXRhc2V0VmFsdWUsXHJcbiAgICAgIGluZGV4LFxyXG4gICAgICBzZWxTZWN0aW9uOiBzZWxlY3RlZFNlY3Rpb24sXHJcbiAgICB9O1xyXG4gICAgZGF0YXNldDVVcGRhdGUoZGF0YSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3Qgb25EYXRhc2V0NVZhbHVlN0NoYW5nZSA9IChkYXRhc2V0VmFsdWUpID0+IHtcclxuICAgIHNldERhdGFzZXQ1VmFsdWU3KGRhdGFzZXRWYWx1ZSk7XHJcbiAgICBjb25zdCBkYXRhID0ge1xyXG4gICAgICBkYXRhc2V0NVZhbHVlNzc6ICd0cnVlJyxcclxuICAgICAgZGF0YXNldDVWYWx1ZTc6IGRhdGFzZXRWYWx1ZSxcclxuICAgICAgaW5kZXgsXHJcbiAgICAgIHNlbFNlY3Rpb246IHNlbGVjdGVkU2VjdGlvbixcclxuICAgIH07XHJcbiAgICBkYXRhc2V0NVVwZGF0ZShkYXRhKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBvbkRhdGFzZXQ1VmFsdWU4Q2hhbmdlID0gKGRhdGFzZXRWYWx1ZSkgPT4ge1xyXG4gICAgc2V0RGF0YXNldDVWYWx1ZTgoZGF0YXNldFZhbHVlKTtcclxuICAgIGNvbnN0IGRhdGEgPSB7XHJcbiAgICAgIGRhdGFzZXQ1VmFsdWU4ODogJ3RydWUnLFxyXG4gICAgICBkYXRhc2V0NVZhbHVlODogZGF0YXNldFZhbHVlLFxyXG4gICAgICBpbmRleCxcclxuICAgICAgc2VsU2VjdGlvbjogc2VsZWN0ZWRTZWN0aW9uLFxyXG4gICAgfTtcclxuICAgIGRhdGFzZXQ1VXBkYXRlKGRhdGEpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IG9uRGF0YXNldDVWYWx1ZTlDaGFuZ2UgPSAoZGF0YXNldFZhbHVlKSA9PiB7XHJcbiAgICBzZXREYXRhc2V0NVZhbHVlOShkYXRhc2V0VmFsdWUpO1xyXG4gICAgY29uc3QgZGF0YSA9IHtcclxuICAgICAgZGF0YXNldDVWYWx1ZTk5OiAndHJ1ZScsXHJcbiAgICAgIGRhdGFzZXQ1VmFsdWU5OiBkYXRhc2V0VmFsdWUsXHJcbiAgICAgIGluZGV4LFxyXG4gICAgICBzZWxTZWN0aW9uOiBzZWxlY3RlZFNlY3Rpb24sXHJcbiAgICB9O1xyXG4gICAgZGF0YXNldDVVcGRhdGUoZGF0YSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3Qgb25EYXRhc2V0NVZhbHVlMTBDaGFuZ2UgPSAoZGF0YXNldFZhbHVlKSA9PiB7XHJcbiAgICBzZXREYXRhc2V0NVZhbHVlMTAoZGF0YXNldFZhbHVlKTtcclxuICAgIGNvbnN0IGRhdGEgPSB7XHJcbiAgICAgIGRhdGFzZXQ1VmFsdWUxMDA6ICd0cnVlJyxcclxuICAgICAgZGF0YXNldDVWYWx1ZTEwOiBkYXRhc2V0VmFsdWUsXHJcbiAgICAgIGluZGV4LFxyXG4gICAgICBzZWxTZWN0aW9uOiBzZWxlY3RlZFNlY3Rpb24sXHJcbiAgICB9O1xyXG4gICAgZGF0YXNldDVVcGRhdGUoZGF0YSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3Qgb25EYXRhc2V0NVZhbHVlMTFDaGFuZ2UgPSAoZGF0YXNldFZhbHVlKSA9PiB7XHJcbiAgICBzZXREYXRhc2V0NVZhbHVlMTEoZGF0YXNldFZhbHVlKTtcclxuICAgIGNvbnN0IGRhdGEgPSB7XHJcbiAgICAgIGRhdGFzZXQ1VmFsdWUxMTE6ICd0cnVlJyxcclxuICAgICAgZGF0YXNldDVWYWx1ZTExOiBkYXRhc2V0VmFsdWUsXHJcbiAgICAgIGluZGV4LFxyXG4gICAgICBzZWxTZWN0aW9uOiBzZWxlY3RlZFNlY3Rpb24sXHJcbiAgICB9O1xyXG4gICAgZGF0YXNldDVVcGRhdGUoZGF0YSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3Qgb25EYXRhc2V0NVZhbHVlMTJDaGFuZ2UgPSAoZGF0YXNldFZhbHVlKSA9PiB7XHJcbiAgICBzZXREYXRhc2V0NVZhbHVlMTIoZGF0YXNldFZhbHVlKTtcclxuICAgIGNvbnN0IGRhdGEgPSB7XHJcbiAgICAgIGRhdGFzZXQ1VmFsdWUxMjA6ICd0cnVlJyxcclxuICAgICAgZGF0YXNldDVWYWx1ZTEyOiBkYXRhc2V0VmFsdWUsXHJcbiAgICAgIGluZGV4LFxyXG4gICAgICBzZWxTZWN0aW9uOiBzZWxlY3RlZFNlY3Rpb24sXHJcbiAgICB9O1xyXG4gICAgZGF0YXNldDVVcGRhdGUoZGF0YSk7XHJcbiAgfTtcclxuICAvLyBEQVRBU0VUIDUgLS0tIEVORCAtLS1cclxuICAvLyBEQVRBU0VUIDMgLS0tIFNUQVJUIC0tLVxyXG4gIGNvbnN0IFtkYXRhc2V0NlZhbHVlMSwgc2V0RGF0YXNldDZWYWx1ZTFdID0gdXNlU3RhdGUoJycpO1xyXG4gIGNvbnN0IFtkYXRhc2V0NlZhbHVlMiwgc2V0RGF0YXNldDZWYWx1ZTJdID0gdXNlU3RhdGUoJycpO1xyXG4gIGNvbnN0IFtkYXRhc2V0NlZhbHVlMywgc2V0RGF0YXNldDZWYWx1ZTNdID0gdXNlU3RhdGUoJycpO1xyXG4gIGNvbnN0IFtkYXRhc2V0NlZhbHVlNCwgc2V0RGF0YXNldDZWYWx1ZTRdID0gdXNlU3RhdGUoJycpO1xyXG4gIGNvbnN0IFtkYXRhc2V0NlZhbHVlNSwgc2V0RGF0YXNldDZWYWx1ZTVdID0gdXNlU3RhdGUoJycpO1xyXG4gIGNvbnN0IFtkYXRhc2V0NlZhbHVlNiwgc2V0RGF0YXNldDZWYWx1ZTZdID0gdXNlU3RhdGUoJycpO1xyXG4gIGNvbnN0IFtkYXRhc2V0NlZhbHVlNywgc2V0RGF0YXNldDZWYWx1ZTddID0gdXNlU3RhdGUoJycpO1xyXG4gIGNvbnN0IFtkYXRhc2V0NlZhbHVlOCwgc2V0RGF0YXNldDZWYWx1ZThdID0gdXNlU3RhdGUoJycpO1xyXG4gIGNvbnN0IFtkYXRhc2V0NlZhbHVlOSwgc2V0RGF0YXNldDZWYWx1ZTldID0gdXNlU3RhdGUoJycpO1xyXG4gIGNvbnN0IFtkYXRhc2V0NlZhbHVlMTAsIHNldERhdGFzZXQ2VmFsdWUxMF0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgY29uc3QgW2RhdGFzZXQ2VmFsdWUxMSwgc2V0RGF0YXNldDZWYWx1ZTExXSA9IHVzZVN0YXRlKCcnKTtcclxuICBjb25zdCBbZGF0YXNldDZWYWx1ZTEyLCBzZXREYXRhc2V0NlZhbHVlMTJdID0gdXNlU3RhdGUoJycpO1xyXG5cclxuICBjb25zdCBvbkRhdGFzZXQ2VmFsdWUxQ2hhbmdlID0gKGRhdGFzZXRWYWx1ZSkgPT4ge1xyXG4gICAgc2V0RGF0YXNldDZWYWx1ZTEoZGF0YXNldFZhbHVlKTtcclxuICAgIGNvbnN0IGRhdGEgPSB7XHJcbiAgICAgIGRhdGFzZXQ2VmFsdWVPbmU6ICd0cnVlJyxcclxuICAgICAgZGF0YXNldDZWYWx1ZTE6IGRhdGFzZXRWYWx1ZSxcclxuICAgICAgaW5kZXgsXHJcbiAgICAgIHNlbFNlY3Rpb246IHNlbGVjdGVkU2VjdGlvbixcclxuICAgIH07XHJcbiAgICBkYXRhc2V0NlVwZGF0ZShkYXRhKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBvbkRhdGFzZXQ2VmFsdWUyQ2hhbmdlID0gKGRhdGFzZXRWYWx1ZSkgPT4ge1xyXG4gICAgc2V0RGF0YXNldDZWYWx1ZTIoZGF0YXNldFZhbHVlKTtcclxuICAgIGNvbnN0IGRhdGEgPSB7XHJcbiAgICAgIGRhdGFzZXQ2VmFsdWUyMjogJ3RydWUnLFxyXG4gICAgICBkYXRhc2V0NlZhbHVlMjogZGF0YXNldFZhbHVlLFxyXG4gICAgICBpbmRleCxcclxuICAgICAgc2VsU2VjdGlvbjogc2VsZWN0ZWRTZWN0aW9uLFxyXG4gICAgfTtcclxuICAgIGRhdGFzZXQ2VXBkYXRlKGRhdGEpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IG9uRGF0YXNldDZWYWx1ZTNDaGFuZ2UgPSAoZGF0YXNldFZhbHVlKSA9PiB7XHJcbiAgICBzZXREYXRhc2V0NlZhbHVlMyhkYXRhc2V0VmFsdWUpO1xyXG4gICAgY29uc3QgZGF0YSA9IHtcclxuICAgICAgZGF0YXNldDZWYWx1ZTMzOiAndHJ1ZScsXHJcbiAgICAgIGRhdGFzZXQ2VmFsdWUzOiBkYXRhc2V0VmFsdWUsXHJcbiAgICAgIGluZGV4LFxyXG4gICAgICBzZWxTZWN0aW9uOiBzZWxlY3RlZFNlY3Rpb24sXHJcbiAgICB9O1xyXG4gICAgZGF0YXNldDZVcGRhdGUoZGF0YSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3Qgb25EYXRhc2V0NlZhbHVlNENoYW5nZSA9IChkYXRhc2V0VmFsdWUpID0+IHtcclxuICAgIHNldERhdGFzZXQ2VmFsdWU0KGRhdGFzZXRWYWx1ZSk7XHJcbiAgICBjb25zdCBkYXRhID0ge1xyXG4gICAgICBkYXRhc2V0NlZhbHVlNDQ6ICd0cnVlJyxcclxuICAgICAgZGF0YXNldDZWYWx1ZTQ6IGRhdGFzZXRWYWx1ZSxcclxuICAgICAgaW5kZXgsXHJcbiAgICAgIHNlbFNlY3Rpb246IHNlbGVjdGVkU2VjdGlvbixcclxuICAgIH07XHJcbiAgICBkYXRhc2V0NlVwZGF0ZShkYXRhKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBvbkRhdGFzZXQ2VmFsdWU1Q2hhbmdlID0gKGRhdGFzZXRWYWx1ZSkgPT4ge1xyXG4gICAgc2V0RGF0YXNldDZWYWx1ZTUoZGF0YXNldFZhbHVlKTtcclxuICAgIGNvbnN0IGRhdGEgPSB7XHJcbiAgICAgIGRhdGFzZXQ2VmFsdWU1NTogJ3RydWUnLFxyXG4gICAgICBkYXRhc2V0NlZhbHVlNTogZGF0YXNldFZhbHVlLFxyXG4gICAgICBpbmRleCxcclxuICAgICAgc2VsU2VjdGlvbjogc2VsZWN0ZWRTZWN0aW9uLFxyXG4gICAgfTtcclxuICAgIGRhdGFzZXQ2VXBkYXRlKGRhdGEpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IG9uRGF0YXNldDZWYWx1ZTZDaGFuZ2UgPSAoZGF0YXNldFZhbHVlKSA9PiB7XHJcbiAgICBzZXREYXRhc2V0NlZhbHVlNihkYXRhc2V0VmFsdWUpO1xyXG4gICAgY29uc3QgZGF0YSA9IHtcclxuICAgICAgZGF0YXNldDZWYWx1ZTY2OiAndHJ1ZScsXHJcbiAgICAgIGRhdGFzZXQ2VmFsdWU2OiBkYXRhc2V0VmFsdWUsXHJcbiAgICAgIGluZGV4LFxyXG4gICAgICBzZWxTZWN0aW9uOiBzZWxlY3RlZFNlY3Rpb24sXHJcbiAgICB9O1xyXG4gICAgZGF0YXNldDZVcGRhdGUoZGF0YSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3Qgb25EYXRhc2V0NlZhbHVlN0NoYW5nZSA9IChkYXRhc2V0VmFsdWUpID0+IHtcclxuICAgIHNldERhdGFzZXQ2VmFsdWU3KGRhdGFzZXRWYWx1ZSk7XHJcbiAgICBjb25zdCBkYXRhID0ge1xyXG4gICAgICBkYXRhc2V0NlZhbHVlNzc6ICd0cnVlJyxcclxuICAgICAgZGF0YXNldDZWYWx1ZTc6IGRhdGFzZXRWYWx1ZSxcclxuICAgICAgaW5kZXgsXHJcbiAgICAgIHNlbFNlY3Rpb246IHNlbGVjdGVkU2VjdGlvbixcclxuICAgIH07XHJcbiAgICBkYXRhc2V0NlVwZGF0ZShkYXRhKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBvbkRhdGFzZXQ2VmFsdWU4Q2hhbmdlID0gKGRhdGFzZXRWYWx1ZSkgPT4ge1xyXG4gICAgc2V0RGF0YXNldDZWYWx1ZTgoZGF0YXNldFZhbHVlKTtcclxuICAgIGNvbnN0IGRhdGEgPSB7XHJcbiAgICAgIGRhdGFzZXQ2VmFsdWU4ODogJ3RydWUnLFxyXG4gICAgICBkYXRhc2V0NlZhbHVlODogZGF0YXNldFZhbHVlLFxyXG4gICAgICBpbmRleCxcclxuICAgICAgc2VsU2VjdGlvbjogc2VsZWN0ZWRTZWN0aW9uLFxyXG4gICAgfTtcclxuICAgIGRhdGFzZXQ2VXBkYXRlKGRhdGEpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IG9uRGF0YXNldDZWYWx1ZTlDaGFuZ2UgPSAoZGF0YXNldFZhbHVlKSA9PiB7XHJcbiAgICBzZXREYXRhc2V0NlZhbHVlOShkYXRhc2V0VmFsdWUpO1xyXG4gICAgY29uc3QgZGF0YSA9IHtcclxuICAgICAgZGF0YXNldDZWYWx1ZTk5OiAndHJ1ZScsXHJcbiAgICAgIGRhdGFzZXQ2VmFsdWU5OiBkYXRhc2V0VmFsdWUsXHJcbiAgICAgIGluZGV4LFxyXG4gICAgICBzZWxTZWN0aW9uOiBzZWxlY3RlZFNlY3Rpb24sXHJcbiAgICB9O1xyXG4gICAgZGF0YXNldDZVcGRhdGUoZGF0YSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3Qgb25EYXRhc2V0NlZhbHVlMTBDaGFuZ2UgPSAoZGF0YXNldFZhbHVlKSA9PiB7XHJcbiAgICBzZXREYXRhc2V0NlZhbHVlMTAoZGF0YXNldFZhbHVlKTtcclxuICAgIGNvbnN0IGRhdGEgPSB7XHJcbiAgICAgIGRhdGFzZXQ2VmFsdWUxMDA6ICd0cnVlJyxcclxuICAgICAgZGF0YXNldDZWYWx1ZTEwOiBkYXRhc2V0VmFsdWUsXHJcbiAgICAgIGluZGV4LFxyXG4gICAgICBzZWxTZWN0aW9uOiBzZWxlY3RlZFNlY3Rpb24sXHJcbiAgICB9O1xyXG4gICAgZGF0YXNldDZVcGRhdGUoZGF0YSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3Qgb25EYXRhc2V0NlZhbHVlMTFDaGFuZ2UgPSAoZGF0YXNldFZhbHVlKSA9PiB7XHJcbiAgICBzZXREYXRhc2V0NlZhbHVlMTEoZGF0YXNldFZhbHVlKTtcclxuICAgIGNvbnN0IGRhdGEgPSB7XHJcbiAgICAgIGRhdGFzZXQ2VmFsdWUxMTE6ICd0cnVlJyxcclxuICAgICAgZGF0YXNldDZWYWx1ZTExOiBkYXRhc2V0VmFsdWUsXHJcbiAgICAgIGluZGV4LFxyXG4gICAgICBzZWxTZWN0aW9uOiBzZWxlY3RlZFNlY3Rpb24sXHJcbiAgICB9O1xyXG4gICAgZGF0YXNldDZVcGRhdGUoZGF0YSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3Qgb25EYXRhc2V0NlZhbHVlMTJDaGFuZ2UgPSAoZGF0YXNldFZhbHVlKSA9PiB7XHJcbiAgICBzZXREYXRhc2V0NlZhbHVlMTIoZGF0YXNldFZhbHVlKTtcclxuICAgIGNvbnN0IGRhdGEgPSB7XHJcbiAgICAgIGRhdGFzZXQ2VmFsdWUxMjA6ICd0cnVlJyxcclxuICAgICAgZGF0YXNldDZWYWx1ZTEyOiBkYXRhc2V0VmFsdWUsXHJcbiAgICAgIGluZGV4LFxyXG4gICAgICBzZWxTZWN0aW9uOiBzZWxlY3RlZFNlY3Rpb24sXHJcbiAgICB9O1xyXG4gICAgZGF0YXNldDZVcGRhdGUoZGF0YSk7XHJcbiAgfTtcclxuICAvLyBEQVRBU0VUIDYgLS0tIEVORCAtLS1cclxuICBjb25zdCBvbkRhdGFzZXRMYWJlbENoYW5nZTEgPSAoZGF0YXNldExhYmVsKSA9PiB7XHJcbiAgICBzZXREYXRhc2V0MUxhYmVsKGRhdGFzZXRMYWJlbCk7XHJcbiAgICBjb25zdCBkYXRhID0ge1xyXG4gICAgICBkYXRhc2V0MUxhYmVsOiBkYXRhc2V0TGFiZWwsXHJcbiAgICAgIGluZGV4LFxyXG4gICAgICBzZWxTZWN0aW9uOiBzZWxlY3RlZFNlY3Rpb24sXHJcbiAgICB9O1xyXG4gICAgZGF0YXNldExhYmVsMVVwZGF0ZShkYXRhKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBvbkRhdGFzZXRMYWJlbENoYW5nZTIgPSAoZGF0YXNldExhYmVsKSA9PiB7XHJcbiAgICBzZXREYXRhc2V0MkxhYmVsKGRhdGFzZXRMYWJlbCk7XHJcbiAgICBjb25zdCBkYXRhID0ge1xyXG4gICAgICBkYXRhc2V0MkxhYmVsOiBkYXRhc2V0TGFiZWwsXHJcbiAgICAgIGluZGV4LFxyXG4gICAgICBzZWxTZWN0aW9uOiBzZWxlY3RlZFNlY3Rpb24sXHJcbiAgICB9O1xyXG4gICAgZGF0YXNldExhYmVsMlVwZGF0ZShkYXRhKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBvbkRhdGFzZXRMYWJlbENoYW5nZTMgPSAoZGF0YXNldExhYmVsKSA9PiB7XHJcbiAgICBzZXREYXRhc2V0M0xhYmVsKGRhdGFzZXRMYWJlbCk7XHJcbiAgICBjb25zdCBkYXRhID0ge1xyXG4gICAgICBkYXRhc2V0M0xhYmVsOiBkYXRhc2V0TGFiZWwsXHJcbiAgICAgIGluZGV4LFxyXG4gICAgICBzZWxTZWN0aW9uOiBzZWxlY3RlZFNlY3Rpb24sXHJcbiAgICB9O1xyXG4gICAgZGF0YXNldExhYmVsM1VwZGF0ZShkYXRhKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBvbkRhdGFzZXRMYWJlbENoYW5nZTQgPSAoZGF0YXNldExhYmVsKSA9PiB7XHJcbiAgICBzZXREYXRhc2V0NExhYmVsKGRhdGFzZXRMYWJlbCk7XHJcbiAgICBjb25zdCBkYXRhID0ge1xyXG4gICAgICBkYXRhc2V0NExhYmVsOiBkYXRhc2V0TGFiZWwsXHJcbiAgICAgIGluZGV4LFxyXG4gICAgICBzZWxTZWN0aW9uOiBzZWxlY3RlZFNlY3Rpb24sXHJcbiAgICB9O1xyXG4gICAgZGF0YXNldExhYmVsNFVwZGF0ZShkYXRhKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBvbkRhdGFzZXRMYWJlbENoYW5nZTUgPSAoZGF0YXNldExhYmVsKSA9PiB7XHJcbiAgICBzZXREYXRhc2V0NUxhYmVsKGRhdGFzZXRMYWJlbCk7XHJcbiAgICBjb25zdCBkYXRhID0ge1xyXG4gICAgICBkYXRhc2V0NUxhYmVsOiBkYXRhc2V0TGFiZWwsXHJcbiAgICAgIGluZGV4LFxyXG4gICAgICBzZWxTZWN0aW9uOiBzZWxlY3RlZFNlY3Rpb24sXHJcbiAgICB9O1xyXG4gICAgZGF0YXNldExhYmVsNVVwZGF0ZShkYXRhKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBvbkRhdGFzZXRMYWJlbENoYW5nZTYgPSAoZGF0YXNldExhYmVsKSA9PiB7XHJcbiAgICBzZXREYXRhc2V0NkxhYmVsKGRhdGFzZXRMYWJlbCk7XHJcbiAgICBjb25zdCBkYXRhID0ge1xyXG4gICAgICBkYXRhc2V0NkxhYmVsOiBkYXRhc2V0TGFiZWwsXHJcbiAgICAgIGluZGV4LFxyXG4gICAgICBzZWxTZWN0aW9uOiBzZWxlY3RlZFNlY3Rpb24sXHJcbiAgICB9O1xyXG4gICAgZGF0YXNldExhYmVsNlVwZGF0ZShkYXRhKTtcclxuICB9O1xyXG5cclxuICBjb25zdCB0YWJsZVJlZiA9IHVzZVJlZigpO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYCR7ZmllbGQuaW5kZXh9Y29udGFpbmVyYCkgJiZcclxuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYCR7ZmllbGQuaW5kZXh9Y29udGFpbmVyYCkuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VlbnRlcicsICgpID0+IHtcclxuICAgICAgICBnc2FwLnRvKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGAke2ZpZWxkLmluZGV4fXRhYmxlYCksIHtcclxuICAgICAgICAgIGhlaWdodDogMjAwLFxyXG4gICAgICAgICAgZHVyYXRpb246IDAuOCxcclxuICAgICAgICAgIHRyYW5zZm9ybU9yaWdpbjogJ3RvcCcsXHJcbiAgICAgICAgICBlYXNlOiBMaW5lYXIsXHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH0pO1xyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYCR7ZmllbGQuaW5kZXh9Y29udGFpbmVyYCkuc2Nyb2xsSW50b1ZpZXcoKTtcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGAke2ZpZWxkLmluZGV4fWNvbnRhaW5lcmApICYmXHJcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGAke2ZpZWxkLmluZGV4fWNvbnRhaW5lcmApLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbGVhdmUnLCAoKSA9PiB7XHJcbiAgICAgICAgZ3NhcC50byhkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgJHtmaWVsZC5pbmRleH10YWJsZWApLCB7XHJcbiAgICAgICAgICBoZWlnaHQ6ICcwJyxcclxuICAgICAgICAgIGR1cmF0aW9uOiAwLjgsXHJcbiAgICAgICAgICB0cmFuc2Zvcm1PcmlnaW46ICd0b3AnLFxyXG4gICAgICAgICAgZWFzZTogTGluZWFyLFxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9KTtcclxuICB9LCBbXSk7XHJcblxyXG4gIGNvbnN0IFthY3RpdmVDaGFydFR5cGUsIHNldEFjdGl2ZUNoYXJ0VHlwZV0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgY2hhcnRGb3JtYXQgPSB1c2VSZWYoKTtcclxuXHJcbiAgY29uc29sZS5sb2coaW5kZXgpO1xyXG5cclxuICBjb25zdCBvbkNoYXJ0Q2hhbmdlID0gKHZhbHVlKSA9PiB7XHJcbiAgICBpZiAoIWFjdGl2ZUNoYXJ0VHlwZSkge1xyXG4gICAgICBnc2FwLnRvKGNoYXJ0Rm9ybWF0LmN1cnJlbnQsIHtcclxuICAgICAgICBoZWlnaHQ6IDIxNixcclxuICAgICAgICB0cmFuc2Zvcm1PcmlnaW46ICd0b3AnLFxyXG4gICAgICAgIGVhc2U6IExpbmVhcixcclxuICAgICAgfSk7XHJcbiAgICAgIHNldEFjdGl2ZUNoYXJ0VHlwZSh0cnVlKTtcclxuICAgIH1cclxuICAgIGlmIChhY3RpdmVDaGFydFR5cGUpIHtcclxuICAgICAgZ3NhcC50byhjaGFydEZvcm1hdC5jdXJyZW50LCB7XHJcbiAgICAgICAgaGVpZ2h0OiAzNixcclxuICAgICAgICB0cmFuc2Zvcm1PcmlnaW46ICdib3R0b20nLFxyXG4gICAgICAgIGVhc2U6IExpbmVhcixcclxuICAgICAgfSk7XHJcbiAgICAgIHNldEFjdGl2ZUNoYXJ0VHlwZShmYWxzZSk7XHJcbiAgICB9XHJcbiAgICAvLyBUYWtlIGN1cnJlbnQgYXJyYXkgY29weVxyXG4gICAgaWYgKHZhbHVlKSB7XHJcbiAgICAgIGxldCBuZXdGaWVsZHNBcnJheSA9IFsuLi5zZWxlY3RlZFNlY3Rpb24uZmllbGRzXTtcclxuICAgICAgbmV3RmllbGRzQXJyYXlbY3VycmVudEluZGV4XSA9IHtcclxuICAgICAgICBzdGFja2VkOiBzZWxlY3RlZFNlY3Rpb24uZmllbGRzW2N1cnJlbnRJbmRleF0uc3RhY2tlZCxcclxuICAgICAgICBjaGFydFR5cGU6IHZhbHVlLFxyXG4gICAgICAgIGluZGV4LFxyXG4gICAgICAgIHR5cGU6ICdjaGFydCcsXHJcbiAgICAgICAgbGFiZWxzOiBzZWxlY3RlZFNlY3Rpb24uZmllbGRzW2N1cnJlbnRJbmRleF0ubGFiZWxzLFxyXG4gICAgICAgIGRhdGFzZXQxOiBzZWxlY3RlZFNlY3Rpb24uZmllbGRzW2N1cnJlbnRJbmRleF0uZGF0YXNldDEsXHJcbiAgICAgICAgZGF0YXNldDI6IHNlbGVjdGVkU2VjdGlvbi5maWVsZHNbY3VycmVudEluZGV4XS5kYXRhc2V0MixcclxuICAgICAgICBkYXRhc2V0Mzogc2VsZWN0ZWRTZWN0aW9uLmZpZWxkc1tjdXJyZW50SW5kZXhdLmRhdGFzZXQzLFxyXG4gICAgICAgIGRhdGFzZXQ0OiBzZWxlY3RlZFNlY3Rpb24uZmllbGRzW2N1cnJlbnRJbmRleF0uZGF0YXNldDQsXHJcbiAgICAgICAgZGF0YXNldDU6IHNlbGVjdGVkU2VjdGlvbi5maWVsZHNbY3VycmVudEluZGV4XS5kYXRhc2V0NSxcclxuICAgICAgICBkYXRhc2V0Njogc2VsZWN0ZWRTZWN0aW9uLmZpZWxkc1tjdXJyZW50SW5kZXhdLmRhdGFzZXQ2LFxyXG4gICAgICAgIC8vIERhdGFzZXQgbGFiZWxzXHJcbiAgICAgICAgZGF0YXNldDFMYWJlbDogc2VsZWN0ZWRTZWN0aW9uLmZpZWxkc1tjdXJyZW50SW5kZXhdLmRhdGFzZXQxTGFiZWwsXHJcbiAgICAgICAgZGF0YXNldDJMYWJlbDogc2VsZWN0ZWRTZWN0aW9uLmZpZWxkc1tjdXJyZW50SW5kZXhdLmRhdGFzZXQyTGFiZWwsXHJcbiAgICAgICAgZGF0YXNldDNMYWJlbDogc2VsZWN0ZWRTZWN0aW9uLmZpZWxkc1tjdXJyZW50SW5kZXhdLmRhdGFzZXQzTGFiZWwsXHJcbiAgICAgICAgZGF0YXNldDRMYWJlbDogc2VsZWN0ZWRTZWN0aW9uLmZpZWxkc1tjdXJyZW50SW5kZXhdLmRhdGFzZXQ0TGFiZWwsXHJcbiAgICAgICAgZGF0YXNldDVMYWJlbDogc2VsZWN0ZWRTZWN0aW9uLmZpZWxkc1tjdXJyZW50SW5kZXhdLmRhdGFzZXQ1TGFiZWwsXHJcbiAgICAgICAgZGF0YXNldDZMYWJlbDogc2VsZWN0ZWRTZWN0aW9uLmZpZWxkc1tjdXJyZW50SW5kZXhdLmRhdGFzZXQ2TGFiZWwsXHJcbiAgICAgIH07XHJcblxyXG4gICAgICBjb25zdCBuZXdTZWN0aW9uID0ge1xyXG4gICAgICAgIHRpdGxlOiBzZWxlY3RlZFNlY3Rpb24udGl0bGUsXHJcbiAgICAgICAgY3JlYXRlZEF0OiBzZWxlY3RlZFNlY3Rpb24uY3JlYXRlZEF0LFxyXG4gICAgICAgIGZpZWxkczogbmV3RmllbGRzQXJyYXksXHJcbiAgICAgICAgaWQ6IHNlbGVjdGVkU2VjdGlvbi5pZCxcclxuICAgICAgfTtcclxuXHJcbiAgICAgIC8vIGF3YWl0IHRoaXMuc2V0U3RhdGUoeyBzZWxlY3RlZFNlY3Rpb246IG5ld1NlY3Rpb24gfSk7XHJcbiAgICAgIGNoYXJ0VHlwZVVwZGF0ZShuZXdTZWN0aW9uKTtcclxuICAgICAgY29uc29sZS5sb2cobmV3RmllbGRzQXJyYXkpO1xyXG4gICAgICBjb25zb2xlLmxvZyh2YWx1ZSk7XHJcblxyXG4gICAgICAvLyBVcGRhdGUgZGF0YWJhc2VcclxuICAgICAgZGIuY29sbGVjdGlvbigncHJvamVjdHMnKVxyXG4gICAgICAgIC5kb2MocHJvamVjdElkKVxyXG4gICAgICAgIC5jb2xsZWN0aW9uKCdidXNpbmVzc1BsYW4nKVxyXG4gICAgICAgIC5kb2MoUm91dGVyLnF1ZXJ5LnByb2plY3QpXHJcbiAgICAgICAgLmNvbGxlY3Rpb24oJ2lucHV0cycpXHJcbiAgICAgICAgLy8gLmNvbGxlY3Rpb24oJ2N1cnJlbnRCdXNpbmVzc1BsYW4nKVxyXG4gICAgICAgIC8vICAgLmRvYygnR3Jjdmh5Snd2bFdWeTMxUXNpdWRvUUtkS0k3MicpXHJcbiAgICAgICAgLy8gICAuY29sbGVjdGlvbignaW5wdXRzJylcclxuICAgICAgICAuZG9jKHNlbGVjdGVkU2VjdGlvbi5pZClcclxuICAgICAgICAudXBkYXRlKHtcclxuICAgICAgICAgIGZpZWxkczogbmV3RmllbGRzQXJyYXksXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgY29uc3Qgb25TdGFja2VkQ2hhbmdlID0gKHN0YWNrZWQpID0+IHtcclxuICAgIGxldCBuZXdGaWVsZHNBcnJheSA9IFsuLi5zZWxlY3RlZFNlY3Rpb24uZmllbGRzXTtcclxuICAgIG5ld0ZpZWxkc0FycmF5W2N1cnJlbnRJbmRleF0gPSB7XHJcbiAgICAgIHN0YWNrZWQ6ICFzdGFja2VkLFxyXG4gICAgICBjaGFydFR5cGU6IHNlbGVjdGVkU2VjdGlvbi5maWVsZHNbY3VycmVudEluZGV4XS5jaGFydFR5cGUsXHJcbiAgICAgIGluZGV4LFxyXG4gICAgICB0eXBlOiAnY2hhcnQnLFxyXG4gICAgICBsYWJlbHM6IHNlbGVjdGVkU2VjdGlvbi5maWVsZHNbY3VycmVudEluZGV4XS5sYWJlbHMsXHJcbiAgICAgIGRhdGFzZXQxOiBzZWxlY3RlZFNlY3Rpb24uZmllbGRzW2N1cnJlbnRJbmRleF0uZGF0YXNldDEsXHJcbiAgICAgIGRhdGFzZXQyOiBzZWxlY3RlZFNlY3Rpb24uZmllbGRzW2N1cnJlbnRJbmRleF0uZGF0YXNldDIsXHJcbiAgICAgIGRhdGFzZXQzOiBzZWxlY3RlZFNlY3Rpb24uZmllbGRzW2N1cnJlbnRJbmRleF0uZGF0YXNldDMsXHJcbiAgICAgIGRhdGFzZXQ0OiBzZWxlY3RlZFNlY3Rpb24uZmllbGRzW2N1cnJlbnRJbmRleF0uZGF0YXNldDQsXHJcbiAgICAgIGRhdGFzZXQ1OiBzZWxlY3RlZFNlY3Rpb24uZmllbGRzW2N1cnJlbnRJbmRleF0uZGF0YXNldDUsXHJcbiAgICAgIGRhdGFzZXQ2OiBzZWxlY3RlZFNlY3Rpb24uZmllbGRzW2N1cnJlbnRJbmRleF0uZGF0YXNldDYsXHJcbiAgICAgIC8vIERhdGFzZXQgbGFiZWxzXHJcbiAgICAgIGRhdGFzZXQxTGFiZWw6IHNlbGVjdGVkU2VjdGlvbi5maWVsZHNbY3VycmVudEluZGV4XS5kYXRhc2V0MUxhYmVsLFxyXG4gICAgICBkYXRhc2V0MkxhYmVsOiBzZWxlY3RlZFNlY3Rpb24uZmllbGRzW2N1cnJlbnRJbmRleF0uZGF0YXNldDJMYWJlbCxcclxuICAgICAgZGF0YXNldDNMYWJlbDogc2VsZWN0ZWRTZWN0aW9uLmZpZWxkc1tjdXJyZW50SW5kZXhdLmRhdGFzZXQzTGFiZWwsXHJcbiAgICAgIGRhdGFzZXQ0TGFiZWw6IHNlbGVjdGVkU2VjdGlvbi5maWVsZHNbY3VycmVudEluZGV4XS5kYXRhc2V0NExhYmVsLFxyXG4gICAgICBkYXRhc2V0NUxhYmVsOiBzZWxlY3RlZFNlY3Rpb24uZmllbGRzW2N1cnJlbnRJbmRleF0uZGF0YXNldDVMYWJlbCxcclxuICAgICAgZGF0YXNldDZMYWJlbDogc2VsZWN0ZWRTZWN0aW9uLmZpZWxkc1tjdXJyZW50SW5kZXhdLmRhdGFzZXQ2TGFiZWwsXHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IG5ld1NlY3Rpb24gPSB7XHJcbiAgICAgIHRpdGxlOiBzZWxlY3RlZFNlY3Rpb24udGl0bGUsXHJcbiAgICAgIGNyZWF0ZWRBdDogc2VsZWN0ZWRTZWN0aW9uLmNyZWF0ZWRBdCxcclxuICAgICAgZmllbGRzOiBuZXdGaWVsZHNBcnJheSxcclxuICAgICAgaWQ6IHNlbGVjdGVkU2VjdGlvbi5pZCxcclxuICAgIH07XHJcblxyXG4gICAgLy8gYXdhaXQgdGhpcy5zZXRTdGF0ZSh7IHNlbGVjdGVkU2VjdGlvbjogbmV3U2VjdGlvbiB9KTtcclxuICAgIGNoYXJ0VHlwZVVwZGF0ZShuZXdTZWN0aW9uKTtcclxuICAgIGNvbnNvbGUubG9nKG5ld0ZpZWxkc0FycmF5KTtcclxuICAgIGNvbnNvbGUubG9nKHZhbHVlKTtcclxuXHJcbiAgICAvLyBVcGRhdGUgZGF0YWJhc2VcclxuICAgIGRiLmNvbGxlY3Rpb24oJ3Byb2plY3RzJylcclxuICAgICAgLmRvYyhwcm9qZWN0SWQpXHJcbiAgICAgIC5jb2xsZWN0aW9uKCdidXNpbmVzc1BsYW4nKVxyXG4gICAgICAuZG9jKFJvdXRlci5xdWVyeS5wcm9qZWN0KVxyXG4gICAgICAuY29sbGVjdGlvbignaW5wdXRzJylcclxuICAgICAgLy8gLmNvbGxlY3Rpb24oJ2N1cnJlbnRCdXNpbmVzc1BsYW4nKVxyXG4gICAgICAvLyAgIC5kb2MoJ0dyY3ZoeUp3dmxXVnkzMVFzaXVkb1FLZEtJNzInKVxyXG4gICAgICAvLyAgIC5jb2xsZWN0aW9uKCdpbnB1dHMnKVxyXG4gICAgICAuZG9jKHNlbGVjdGVkU2VjdGlvbi5pZClcclxuICAgICAgLnVwZGF0ZSh7XHJcbiAgICAgICAgZmllbGRzOiBuZXdGaWVsZHNBcnJheSxcclxuICAgICAgfSk7XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgcmVmPXtwcm92aWRlZC5pbm5lclJlZn0gey4uLnByb3ZpZGVkLmRyYWdnYWJsZVByb3BzfSBjbGFzc05hbWU9XCJ3LWZ1bGwgZ3JpZCBncmlkLWNvbHMtMTJmciBqdXN0aWZ5LWl0ZW1zLWNlbnRlciBpdGVtcy1jZW50ZXIgbXQtNlwiPlxyXG4gICAgICA8ZGl2XHJcbiAgICAgICAgaWQ9e2Ake2ZpZWxkLmluZGV4fWNvbnRhaW5lcmB9XHJcbiAgICAgICAgY2xhc3NOYW1lPVwiY29sLXN0YXJ0LTIgY29sLWVuZC0xMiByZWxhdGl2ZSBmbGV4IGZsZXgtY29sIGgtZnVsbCB3LWZ1bGwgZmxleCBweC04IHB5LTggcm91bmRlZC0yeGwgYmctd2hpdGUgZGFyazpiZy1iYWNrZ3JvdW5kXCJcclxuICAgICAgPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsIGgtZnVsbFwiPlxyXG4gICAgICAgICAgPGRpdiBpZD17YCR7ZmllbGQuaW5kZXh9Y2hhcnRDb250YWluZXJgfT48L2Rpdj5cclxuICAgICAgICAgIHsvKiA8Y2FudmFzIGlkPXtmaWVsZC5pbmRleH0gcmVmPXtjaGFydFJlZn0gY2xhc3NOYW1lPSdtdC00Jz48L2NhbnZhcz4gKi99XHJcbiAgICAgICAgICB7LyogPGhyIGNsYXNzTmFtZT0ndGV4dC1wcmltYXJ5IG10LTQnIC8+ICovfVxyXG4gICAgICAgICAgPGRpdiBpZD17YCR7ZmllbGQuaW5kZXh9dGFibGVgfSByZWY9e3RhYmxlUmVmfSBjbGFzc05hbWU9XCJ3LWZ1bGwgb3ZlcmZsb3ctYXV0byBoLTBcIj5cclxuICAgICAgICAgICAgPHRhYmxlIGNsYXNzPVwiY29udGVudC10YWJsZVwiPlxyXG4gICAgICAgICAgICAgIDx0aGVhZD5cclxuICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgPHRoPjwvdGg+XHJcbiAgICAgICAgICAgICAgICAgIDx0aD5cclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gb25MYWJlbENoYW5nZTEoZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2xhYmVsMX1cclxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInctZnVsbCBiZy1zZWNvbmRCYWNrZ3JvdW5kIGZvY3VzOm91dGxpbmUtbm9uZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgPC90aD5cclxuICAgICAgICAgICAgICAgICAgPHRoPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBvbkxhYmVsQ2hhbmdlMihlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17bGFiZWwyfVxyXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy1mdWxsIGJnLXNlY29uZEJhY2tncm91bmQgZm9jdXM6b3V0bGluZS1ub25lXCJcclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICA8L3RoPlxyXG4gICAgICAgICAgICAgICAgICA8dGg+XHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IG9uTGFiZWxDaGFuZ2UzKGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtsYWJlbDN9XHJcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LWZ1bGwgYmctc2Vjb25kQmFja2dyb3VuZCBmb2N1czpvdXRsaW5lLW5vbmVcIlxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgIDwvdGg+XHJcbiAgICAgICAgICAgICAgICAgIDx0aD5cclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gb25MYWJlbENoYW5nZTQoZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2xhYmVsNH1cclxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInctZnVsbCBiZy1zZWNvbmRCYWNrZ3JvdW5kIGZvY3VzOm91dGxpbmUtbm9uZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgPC90aD5cclxuICAgICAgICAgICAgICAgICAgPHRoPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBvbkxhYmVsQ2hhbmdlNShlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17bGFiZWw1fVxyXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy1mdWxsIGJnLXNlY29uZEJhY2tncm91bmQgZm9jdXM6b3V0bGluZS1ub25lXCJcclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICA8L3RoPlxyXG4gICAgICAgICAgICAgICAgICA8dGg+XHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IG9uTGFiZWxDaGFuZ2U2KGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtsYWJlbDZ9XHJcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LWZ1bGwgYmctc2Vjb25kQmFja2dyb3VuZCBmb2N1czpvdXRsaW5lLW5vbmVcIlxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgIDwvdGg+XHJcbiAgICAgICAgICAgICAgICAgIDx0aD5cclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gb25MYWJlbENoYW5nZTcoZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2xhYmVsN31cclxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInctZnVsbCBiZy1zZWNvbmRCYWNrZ3JvdW5kIGZvY3VzOm91dGxpbmUtbm9uZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgPC90aD5cclxuICAgICAgICAgICAgICAgICAgPHRoPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBvbkxhYmVsQ2hhbmdlOChlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17bGFiZWw4fVxyXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy1mdWxsIGJnLXNlY29uZEJhY2tncm91bmQgZm9jdXM6b3V0bGluZS1ub25lXCJcclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICA8L3RoPlxyXG4gICAgICAgICAgICAgICAgICA8dGg+XHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IG9uTGFiZWxDaGFuZ2U5KGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtsYWJlbDl9XHJcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LWZ1bGwgYmctc2Vjb25kQmFja2dyb3VuZCBmb2N1czpvdXRsaW5lLW5vbmVcIlxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgIDwvdGg+XHJcbiAgICAgICAgICAgICAgICAgIDx0aD5cclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gb25MYWJlbENoYW5nZTEwKGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtsYWJlbDEwfVxyXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy1mdWxsIGJnLXNlY29uZEJhY2tncm91bmQgZm9jdXM6b3V0bGluZS1ub25lXCJcclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICA8L3RoPlxyXG4gICAgICAgICAgICAgICAgICA8dGg+XHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IG9uTGFiZWxDaGFuZ2UxMShlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17bGFiZWwxMX1cclxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInctZnVsbCBiZy1zZWNvbmRCYWNrZ3JvdW5kIGZvY3VzOm91dGxpbmUtbm9uZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgPC90aD5cclxuICAgICAgICAgICAgICAgICAgPHRoPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBvbkxhYmVsQ2hhbmdlMTIoZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2xhYmVsMTJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LWZ1bGwgYmctc2Vjb25kQmFja2dyb3VuZCBmb2N1czpvdXRsaW5lLW5vbmVcIlxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgIDwvdGg+XHJcbiAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgIDwvdGhlYWQ+XHJcbiAgICAgICAgICAgICAgPHRib2R5PlxyXG4gICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwibGVmdC1ibG9ja1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBvbkRhdGFzZXRMYWJlbENoYW5nZTEoZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2RhdGFzZXQxTGFiZWx9XHJcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LWZ1bGwgYmctc2Vjb25kQmFja2dyb3VuZCBmb2N1czpvdXRsaW5lLW5vbmVcIlxyXG4gICAgICAgICAgICAgICAgICAgID48L2lucHV0PlxyXG4gICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICA8dGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IG9uRGF0YXNldDFWYWx1ZTFDaGFuZ2UoZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2RhdGFzZXQxVmFsdWUxfVxyXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy1mdWxsIGJnLXdoaXRlIGZvY3VzOm91dGxpbmUtbm9uZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgPjwvaW5wdXQ+XHJcbiAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgIDx0ZD5cclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gb25EYXRhc2V0MVZhbHVlMkNoYW5nZShlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17ZGF0YXNldDFWYWx1ZTJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LWZ1bGwgYmctd2hpdGUgZm9jdXM6b3V0bGluZS1ub25lXCJcclxuICAgICAgICAgICAgICAgICAgICA+PC9pbnB1dD5cclxuICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgPHRkPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBvbkRhdGFzZXQxVmFsdWUzQ2hhbmdlKGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtkYXRhc2V0MVZhbHVlM31cclxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInctZnVsbCBiZy13aGl0ZSBmb2N1czpvdXRsaW5lLW5vbmVcIlxyXG4gICAgICAgICAgICAgICAgICAgID48L2lucHV0PlxyXG4gICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICA8dGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IG9uRGF0YXNldDFWYWx1ZTRDaGFuZ2UoZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2RhdGFzZXQxVmFsdWU0fVxyXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy1mdWxsIGJnLXdoaXRlIGZvY3VzOm91dGxpbmUtbm9uZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgPjwvaW5wdXQ+XHJcbiAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgIDx0ZD5cclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gb25EYXRhc2V0MVZhbHVlNUNoYW5nZShlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17ZGF0YXNldDFWYWx1ZTV9XHJcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LWZ1bGwgYmctd2hpdGUgZm9jdXM6b3V0bGluZS1ub25lXCJcclxuICAgICAgICAgICAgICAgICAgICA+PC9pbnB1dD5cclxuICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgPHRkPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBvbkRhdGFzZXQxVmFsdWU2Q2hhbmdlKGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtkYXRhc2V0MVZhbHVlNn1cclxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInctZnVsbCBiZy13aGl0ZSBmb2N1czpvdXRsaW5lLW5vbmVcIlxyXG4gICAgICAgICAgICAgICAgICAgID48L2lucHV0PlxyXG4gICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICA8dGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IG9uRGF0YXNldDFWYWx1ZTdDaGFuZ2UoZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2RhdGFzZXQxVmFsdWU3fVxyXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy1mdWxsIGJnLXdoaXRlIGZvY3VzOm91dGxpbmUtbm9uZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgPjwvaW5wdXQ+XHJcbiAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgIDx0ZD5cclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gb25EYXRhc2V0MVZhbHVlOENoYW5nZShlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17ZGF0YXNldDFWYWx1ZTh9XHJcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LWZ1bGwgYmctd2hpdGUgZm9jdXM6b3V0bGluZS1ub25lXCJcclxuICAgICAgICAgICAgICAgICAgICA+PC9pbnB1dD5cclxuICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgPHRkPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBvbkRhdGFzZXQxVmFsdWU5Q2hhbmdlKGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtkYXRhc2V0MVZhbHVlOX1cclxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInctZnVsbCBiZy13aGl0ZSBmb2N1czpvdXRsaW5lLW5vbmVcIlxyXG4gICAgICAgICAgICAgICAgICAgID48L2lucHV0PlxyXG4gICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICA8dGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IG9uRGF0YXNldDFWYWx1ZTEwQ2hhbmdlKGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtkYXRhc2V0MVZhbHVlMTB9XHJcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LWZ1bGwgYmctd2hpdGUgZm9jdXM6b3V0bGluZS1ub25lXCJcclxuICAgICAgICAgICAgICAgICAgICA+PC9pbnB1dD5cclxuICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgPHRkPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBvbkRhdGFzZXQxVmFsdWUxMUNoYW5nZShlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17ZGF0YXNldDFWYWx1ZTExfVxyXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy1mdWxsIGJnLXdoaXRlIGZvY3VzOm91dGxpbmUtbm9uZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgPjwvaW5wdXQ+XHJcbiAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgIDx0ZD5cclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gb25EYXRhc2V0MVZhbHVlMTJDaGFuZ2UoZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2RhdGFzZXQxVmFsdWUxMn1cclxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInctZnVsbCBiZy13aGl0ZSBmb2N1czpvdXRsaW5lLW5vbmVcIlxyXG4gICAgICAgICAgICAgICAgICAgID48L2lucHV0PlxyXG4gICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cImxlZnQtYmxvY2tcIj5cclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gb25EYXRhc2V0TGFiZWxDaGFuZ2UyKGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtkYXRhc2V0MkxhYmVsfVxyXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy1mdWxsIGJnLXNlY29uZEJhY2tncm91bmQgZm9jdXM6b3V0bGluZS1ub25lXCJcclxuICAgICAgICAgICAgICAgICAgICA+PC9pbnB1dD5cclxuICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgPHRkPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBvbkRhdGFzZXQyVmFsdWUxQ2hhbmdlKGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtkYXRhc2V0MlZhbHVlMX1cclxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInctZnVsbCBiZy13aGl0ZSBmb2N1czpvdXRsaW5lLW5vbmVcIlxyXG4gICAgICAgICAgICAgICAgICAgID48L2lucHV0PlxyXG4gICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICA8dGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IG9uRGF0YXNldDJWYWx1ZTJDaGFuZ2UoZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2RhdGFzZXQyVmFsdWUyfVxyXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy1mdWxsIGJnLXdoaXRlIGZvY3VzOm91dGxpbmUtbm9uZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgPjwvaW5wdXQ+XHJcbiAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgIDx0ZD5cclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gb25EYXRhc2V0MlZhbHVlM0NoYW5nZShlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17ZGF0YXNldDJWYWx1ZTN9XHJcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LWZ1bGwgYmctd2hpdGUgZm9jdXM6b3V0bGluZS1ub25lXCJcclxuICAgICAgICAgICAgICAgICAgICA+PC9pbnB1dD5cclxuICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgPHRkPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBvbkRhdGFzZXQyVmFsdWU0Q2hhbmdlKGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtkYXRhc2V0MlZhbHVlNH1cclxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInctZnVsbCBiZy13aGl0ZSBmb2N1czpvdXRsaW5lLW5vbmVcIlxyXG4gICAgICAgICAgICAgICAgICAgID48L2lucHV0PlxyXG4gICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICA8dGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IG9uRGF0YXNldDJWYWx1ZTVDaGFuZ2UoZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2RhdGFzZXQyVmFsdWU1fVxyXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy1mdWxsIGJnLXdoaXRlIGZvY3VzOm91dGxpbmUtbm9uZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgPjwvaW5wdXQ+XHJcbiAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgIDx0ZD5cclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gb25EYXRhc2V0MlZhbHVlNkNoYW5nZShlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17ZGF0YXNldDJWYWx1ZTZ9XHJcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LWZ1bGwgYmctd2hpdGUgZm9jdXM6b3V0bGluZS1ub25lXCJcclxuICAgICAgICAgICAgICAgICAgICA+PC9pbnB1dD5cclxuICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgPHRkPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBvbkRhdGFzZXQyVmFsdWU3Q2hhbmdlKGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtkYXRhc2V0MlZhbHVlN31cclxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInctZnVsbCBiZy13aGl0ZSBmb2N1czpvdXRsaW5lLW5vbmVcIlxyXG4gICAgICAgICAgICAgICAgICAgID48L2lucHV0PlxyXG4gICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICA8dGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IG9uRGF0YXNldDJWYWx1ZThDaGFuZ2UoZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2RhdGFzZXQyVmFsdWU4fVxyXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy1mdWxsIGJnLXdoaXRlIGZvY3VzOm91dGxpbmUtbm9uZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgPjwvaW5wdXQ+XHJcbiAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgIDx0ZD5cclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gb25EYXRhc2V0MlZhbHVlOUNoYW5nZShlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17ZGF0YXNldDJWYWx1ZTl9XHJcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LWZ1bGwgYmctd2hpdGUgZm9jdXM6b3V0bGluZS1ub25lXCJcclxuICAgICAgICAgICAgICAgICAgICA+PC9pbnB1dD5cclxuICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgPHRkPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBvbkRhdGFzZXQyVmFsdWUxMENoYW5nZShlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17ZGF0YXNldDJWYWx1ZTEwfVxyXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy1mdWxsIGJnLXdoaXRlIGZvY3VzOm91dGxpbmUtbm9uZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgPjwvaW5wdXQ+XHJcbiAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgIDx0ZD5cclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gb25EYXRhc2V0MlZhbHVlMTFDaGFuZ2UoZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2RhdGFzZXQyVmFsdWUxMX1cclxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInctZnVsbCBiZy13aGl0ZSBmb2N1czpvdXRsaW5lLW5vbmVcIlxyXG4gICAgICAgICAgICAgICAgICAgID48L2lucHV0PlxyXG4gICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICA8dGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IG9uRGF0YXNldDJWYWx1ZTEyQ2hhbmdlKGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtkYXRhc2V0MlZhbHVlMTJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LWZ1bGwgYmctd2hpdGUgZm9jdXM6b3V0bGluZS1ub25lXCJcclxuICAgICAgICAgICAgICAgICAgICA+PC9pbnB1dD5cclxuICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJsZWZ0LWJsb2NrXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IG9uRGF0YXNldExhYmVsQ2hhbmdlMyhlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17ZGF0YXNldDNMYWJlbH1cclxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInctZnVsbCBiZy1zZWNvbmRCYWNrZ3JvdW5kIGZvY3VzOm91dGxpbmUtbm9uZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgPjwvaW5wdXQ+XHJcbiAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgIDx0ZD5cclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gb25EYXRhc2V0M1ZhbHVlMUNoYW5nZShlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17ZGF0YXNldDNWYWx1ZTF9XHJcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LWZ1bGwgYmctd2hpdGUgZm9jdXM6b3V0bGluZS1ub25lXCJcclxuICAgICAgICAgICAgICAgICAgICA+PC9pbnB1dD5cclxuICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgPHRkPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBvbkRhdGFzZXQzVmFsdWUyQ2hhbmdlKGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtkYXRhc2V0M1ZhbHVlMn1cclxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInctZnVsbCBiZy13aGl0ZSBmb2N1czpvdXRsaW5lLW5vbmVcIlxyXG4gICAgICAgICAgICAgICAgICAgID48L2lucHV0PlxyXG4gICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICA8dGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IG9uRGF0YXNldDNWYWx1ZTNDaGFuZ2UoZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2RhdGFzZXQzVmFsdWUzfVxyXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy1mdWxsIGJnLXdoaXRlIGZvY3VzOm91dGxpbmUtbm9uZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgPjwvaW5wdXQ+XHJcbiAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgIDx0ZD5cclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gb25EYXRhc2V0M1ZhbHVlNENoYW5nZShlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17ZGF0YXNldDNWYWx1ZTR9XHJcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LWZ1bGwgYmctd2hpdGUgZm9jdXM6b3V0bGluZS1ub25lXCJcclxuICAgICAgICAgICAgICAgICAgICA+PC9pbnB1dD5cclxuICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgPHRkPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBvbkRhdGFzZXQzVmFsdWU1Q2hhbmdlKGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtkYXRhc2V0M1ZhbHVlNX1cclxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInctZnVsbCBiZy13aGl0ZSBmb2N1czpvdXRsaW5lLW5vbmVcIlxyXG4gICAgICAgICAgICAgICAgICAgID48L2lucHV0PlxyXG4gICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICA8dGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IG9uRGF0YXNldDNWYWx1ZTZDaGFuZ2UoZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2RhdGFzZXQzVmFsdWU2fVxyXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy1mdWxsIGJnLXdoaXRlIGZvY3VzOm91dGxpbmUtbm9uZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgPjwvaW5wdXQ+XHJcbiAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgIDx0ZD5cclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gb25EYXRhc2V0M1ZhbHVlN0NoYW5nZShlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17ZGF0YXNldDNWYWx1ZTd9XHJcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LWZ1bGwgYmctd2hpdGUgZm9jdXM6b3V0bGluZS1ub25lXCJcclxuICAgICAgICAgICAgICAgICAgICA+PC9pbnB1dD5cclxuICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgPHRkPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBvbkRhdGFzZXQzVmFsdWU4Q2hhbmdlKGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtkYXRhc2V0M1ZhbHVlOH1cclxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInctZnVsbCBiZy13aGl0ZSBmb2N1czpvdXRsaW5lLW5vbmVcIlxyXG4gICAgICAgICAgICAgICAgICAgID48L2lucHV0PlxyXG4gICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICA8dGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IG9uRGF0YXNldDNWYWx1ZTlDaGFuZ2UoZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2RhdGFzZXQzVmFsdWU5fVxyXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy1mdWxsIGJnLXdoaXRlIGZvY3VzOm91dGxpbmUtbm9uZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgPjwvaW5wdXQ+XHJcbiAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgIDx0ZD5cclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gb25EYXRhc2V0M1ZhbHVlMTBDaGFuZ2UoZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2RhdGFzZXQzVmFsdWUxMH1cclxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInctZnVsbCBiZy13aGl0ZSBmb2N1czpvdXRsaW5lLW5vbmVcIlxyXG4gICAgICAgICAgICAgICAgICAgID48L2lucHV0PlxyXG4gICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICA8dGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IG9uRGF0YXNldDNWYWx1ZTExQ2hhbmdlKGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtkYXRhc2V0M1ZhbHVlMTF9XHJcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LWZ1bGwgYmctd2hpdGUgZm9jdXM6b3V0bGluZS1ub25lXCJcclxuICAgICAgICAgICAgICAgICAgICA+PC9pbnB1dD5cclxuICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgPHRkPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBvbkRhdGFzZXQzVmFsdWUxMkNoYW5nZShlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17ZGF0YXNldDNWYWx1ZTEyfVxyXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy1mdWxsIGJnLXdoaXRlIGZvY3VzOm91dGxpbmUtbm9uZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgPjwvaW5wdXQ+XHJcbiAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwibGVmdC1ibG9ja1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBvbkRhdGFzZXRMYWJlbENoYW5nZTQoZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2RhdGFzZXQ0TGFiZWx9XHJcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LWZ1bGwgYmctc2Vjb25kQmFja2dyb3VuZCBmb2N1czpvdXRsaW5lLW5vbmVcIlxyXG4gICAgICAgICAgICAgICAgICAgID48L2lucHV0PlxyXG4gICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICA8dGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IG9uRGF0YXNldDRWYWx1ZTFDaGFuZ2UoZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2RhdGFzZXQ0VmFsdWUxfVxyXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy1mdWxsIGJnLXdoaXRlIGZvY3VzOm91dGxpbmUtbm9uZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgPjwvaW5wdXQ+XHJcbiAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgIDx0ZD5cclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gb25EYXRhc2V0NFZhbHVlMkNoYW5nZShlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17ZGF0YXNldDRWYWx1ZTJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LWZ1bGwgYmctd2hpdGUgZm9jdXM6b3V0bGluZS1ub25lXCJcclxuICAgICAgICAgICAgICAgICAgICA+PC9pbnB1dD5cclxuICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgPHRkPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBvbkRhdGFzZXQ0VmFsdWUzQ2hhbmdlKGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtkYXRhc2V0NFZhbHVlM31cclxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInctZnVsbCBiZy13aGl0ZSBmb2N1czpvdXRsaW5lLW5vbmVcIlxyXG4gICAgICAgICAgICAgICAgICAgID48L2lucHV0PlxyXG4gICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICA8dGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IG9uRGF0YXNldDRWYWx1ZTRDaGFuZ2UoZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2RhdGFzZXQ0VmFsdWU0fVxyXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy1mdWxsIGJnLXdoaXRlIGZvY3VzOm91dGxpbmUtbm9uZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgPjwvaW5wdXQ+XHJcbiAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgIDx0ZD5cclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gb25EYXRhc2V0NFZhbHVlNUNoYW5nZShlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17ZGF0YXNldDRWYWx1ZTV9XHJcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LWZ1bGwgYmctd2hpdGUgZm9jdXM6b3V0bGluZS1ub25lXCJcclxuICAgICAgICAgICAgICAgICAgICA+PC9pbnB1dD5cclxuICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgPHRkPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBvbkRhdGFzZXQ0VmFsdWU2Q2hhbmdlKGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtkYXRhc2V0NFZhbHVlNn1cclxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInctZnVsbCBiZy13aGl0ZSBmb2N1czpvdXRsaW5lLW5vbmVcIlxyXG4gICAgICAgICAgICAgICAgICAgID48L2lucHV0PlxyXG4gICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICA8dGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IG9uRGF0YXNldDRWYWx1ZTdDaGFuZ2UoZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2RhdGFzZXQ0VmFsdWU3fVxyXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy1mdWxsIGJnLXdoaXRlIGZvY3VzOm91dGxpbmUtbm9uZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgPjwvaW5wdXQ+XHJcbiAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgIDx0ZD5cclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gb25EYXRhc2V0NFZhbHVlOENoYW5nZShlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17ZGF0YXNldDRWYWx1ZTh9XHJcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LWZ1bGwgYmctd2hpdGUgZm9jdXM6b3V0bGluZS1ub25lXCJcclxuICAgICAgICAgICAgICAgICAgICA+PC9pbnB1dD5cclxuICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgPHRkPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBvbkRhdGFzZXQ0VmFsdWU5Q2hhbmdlKGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtkYXRhc2V0NFZhbHVlOX1cclxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInctZnVsbCBiZy13aGl0ZSBmb2N1czpvdXRsaW5lLW5vbmVcIlxyXG4gICAgICAgICAgICAgICAgICAgID48L2lucHV0PlxyXG4gICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICA8dGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IG9uRGF0YXNldDRWYWx1ZTEwQ2hhbmdlKGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtkYXRhc2V0NFZhbHVlMTB9XHJcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LWZ1bGwgYmctd2hpdGUgZm9jdXM6b3V0bGluZS1ub25lXCJcclxuICAgICAgICAgICAgICAgICAgICA+PC9pbnB1dD5cclxuICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgPHRkPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBvbkRhdGFzZXQ0VmFsdWUxMUNoYW5nZShlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17ZGF0YXNldDRWYWx1ZTExfVxyXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy1mdWxsIGJnLXdoaXRlIGZvY3VzOm91dGxpbmUtbm9uZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgPjwvaW5wdXQ+XHJcbiAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgIDx0ZD5cclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gb25EYXRhc2V0NFZhbHVlMTJDaGFuZ2UoZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2RhdGFzZXQ0VmFsdWUxMn1cclxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInctZnVsbCBiZy13aGl0ZSBmb2N1czpvdXRsaW5lLW5vbmVcIlxyXG4gICAgICAgICAgICAgICAgICAgID48L2lucHV0PlxyXG4gICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cImxlZnQtYmxvY2tcIj5cclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gb25EYXRhc2V0TGFiZWxDaGFuZ2U1KGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtkYXRhc2V0NUxhYmVsfVxyXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy1mdWxsIGJnLXNlY29uZEJhY2tncm91bmQgZm9jdXM6b3V0bGluZS1ub25lXCJcclxuICAgICAgICAgICAgICAgICAgICA+PC9pbnB1dD5cclxuICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgPHRkPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBvbkRhdGFzZXQ1VmFsdWUxQ2hhbmdlKGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtkYXRhc2V0NVZhbHVlMX1cclxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInctZnVsbCBiZy13aGl0ZSBmb2N1czpvdXRsaW5lLW5vbmVcIlxyXG4gICAgICAgICAgICAgICAgICAgID48L2lucHV0PlxyXG4gICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICA8dGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IG9uRGF0YXNldDVWYWx1ZTJDaGFuZ2UoZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2RhdGFzZXQ1VmFsdWUyfVxyXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy1mdWxsIGJnLXdoaXRlIGZvY3VzOm91dGxpbmUtbm9uZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgPjwvaW5wdXQ+XHJcbiAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgIDx0ZD5cclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gb25EYXRhc2V0NVZhbHVlM0NoYW5nZShlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17ZGF0YXNldDVWYWx1ZTN9XHJcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LWZ1bGwgYmctd2hpdGUgZm9jdXM6b3V0bGluZS1ub25lXCJcclxuICAgICAgICAgICAgICAgICAgICA+PC9pbnB1dD5cclxuICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgPHRkPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBvbkRhdGFzZXQ1VmFsdWU0Q2hhbmdlKGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtkYXRhc2V0NVZhbHVlNH1cclxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInctZnVsbCBiZy13aGl0ZSBmb2N1czpvdXRsaW5lLW5vbmVcIlxyXG4gICAgICAgICAgICAgICAgICAgID48L2lucHV0PlxyXG4gICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICA8dGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IG9uRGF0YXNldDVWYWx1ZTVDaGFuZ2UoZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2RhdGFzZXQ1VmFsdWU1fVxyXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy1mdWxsIGJnLXdoaXRlIGZvY3VzOm91dGxpbmUtbm9uZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgPjwvaW5wdXQ+XHJcbiAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgIDx0ZD5cclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gb25EYXRhc2V0NVZhbHVlNkNoYW5nZShlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17ZGF0YXNldDVWYWx1ZTZ9XHJcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LWZ1bGwgYmctd2hpdGUgZm9jdXM6b3V0bGluZS1ub25lXCJcclxuICAgICAgICAgICAgICAgICAgICA+PC9pbnB1dD5cclxuICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgPHRkPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBvbkRhdGFzZXQ1VmFsdWU3Q2hhbmdlKGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtkYXRhc2V0NVZhbHVlN31cclxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInctZnVsbCBiZy13aGl0ZSBmb2N1czpvdXRsaW5lLW5vbmVcIlxyXG4gICAgICAgICAgICAgICAgICAgID48L2lucHV0PlxyXG4gICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICA8dGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IG9uRGF0YXNldDVWYWx1ZThDaGFuZ2UoZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2RhdGFzZXQ1VmFsdWU4fVxyXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy1mdWxsIGJnLXdoaXRlIGZvY3VzOm91dGxpbmUtbm9uZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgPjwvaW5wdXQ+XHJcbiAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgIDx0ZD5cclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gb25EYXRhc2V0NVZhbHVlOUNoYW5nZShlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17ZGF0YXNldDVWYWx1ZTl9XHJcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LWZ1bGwgYmctd2hpdGUgZm9jdXM6b3V0bGluZS1ub25lXCJcclxuICAgICAgICAgICAgICAgICAgICA+PC9pbnB1dD5cclxuICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgPHRkPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBvbkRhdGFzZXQ1VmFsdWUxMENoYW5nZShlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17ZGF0YXNldDVWYWx1ZTEwfVxyXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy1mdWxsIGJnLXdoaXRlIGZvY3VzOm91dGxpbmUtbm9uZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgPjwvaW5wdXQ+XHJcbiAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgIDx0ZD5cclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gb25EYXRhc2V0NVZhbHVlMTFDaGFuZ2UoZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2RhdGFzZXQ1VmFsdWUxMX1cclxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInctZnVsbCBiZy13aGl0ZSBmb2N1czpvdXRsaW5lLW5vbmVcIlxyXG4gICAgICAgICAgICAgICAgICAgID48L2lucHV0PlxyXG4gICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICA8dGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IG9uRGF0YXNldDVWYWx1ZTEyQ2hhbmdlKGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtkYXRhc2V0NVZhbHVlMTJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LWZ1bGwgYmctd2hpdGUgZm9jdXM6b3V0bGluZS1ub25lXCJcclxuICAgICAgICAgICAgICAgICAgICA+PC9pbnB1dD5cclxuICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJsZWZ0LWJsb2NrLXJhZGl1c1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBvbkRhdGFzZXRMYWJlbENoYW5nZTYoZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2RhdGFzZXQ2TGFiZWx9XHJcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LWZ1bGwgYmctc2Vjb25kQmFja2dyb3VuZCBmb2N1czpvdXRsaW5lLW5vbmVcIlxyXG4gICAgICAgICAgICAgICAgICAgID48L2lucHV0PlxyXG4gICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICA8dGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IG9uRGF0YXNldDZWYWx1ZTFDaGFuZ2UoZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2RhdGFzZXQ2VmFsdWUxfVxyXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy1mdWxsIGJnLXdoaXRlIGZvY3VzOm91dGxpbmUtbm9uZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgPjwvaW5wdXQ+XHJcbiAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgIDx0ZD5cclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gb25EYXRhc2V0NlZhbHVlMkNoYW5nZShlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17ZGF0YXNldDZWYWx1ZTJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LWZ1bGwgYmctd2hpdGUgZm9jdXM6b3V0bGluZS1ub25lXCJcclxuICAgICAgICAgICAgICAgICAgICA+PC9pbnB1dD5cclxuICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgPHRkPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBvbkRhdGFzZXQ2VmFsdWUzQ2hhbmdlKGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtkYXRhc2V0NlZhbHVlM31cclxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInctZnVsbCBiZy13aGl0ZSBmb2N1czpvdXRsaW5lLW5vbmVcIlxyXG4gICAgICAgICAgICAgICAgICAgID48L2lucHV0PlxyXG4gICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICA8dGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IG9uRGF0YXNldDZWYWx1ZTRDaGFuZ2UoZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2RhdGFzZXQ2VmFsdWU0fVxyXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy1mdWxsIGJnLXdoaXRlIGZvY3VzOm91dGxpbmUtbm9uZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgPjwvaW5wdXQ+XHJcbiAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgIDx0ZD5cclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gb25EYXRhc2V0NlZhbHVlNUNoYW5nZShlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17ZGF0YXNldDZWYWx1ZTV9XHJcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LWZ1bGwgYmctd2hpdGUgZm9jdXM6b3V0bGluZS1ub25lXCJcclxuICAgICAgICAgICAgICAgICAgICA+PC9pbnB1dD5cclxuICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgPHRkPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBvbkRhdGFzZXQ2VmFsdWU2Q2hhbmdlKGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtkYXRhc2V0NlZhbHVlNn1cclxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInctZnVsbCBiZy13aGl0ZSBmb2N1czpvdXRsaW5lLW5vbmVcIlxyXG4gICAgICAgICAgICAgICAgICAgID48L2lucHV0PlxyXG4gICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICA8dGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IG9uRGF0YXNldDZWYWx1ZTdDaGFuZ2UoZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2RhdGFzZXQ2VmFsdWU3fVxyXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy1mdWxsIGJnLXdoaXRlIGZvY3VzOm91dGxpbmUtbm9uZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgPjwvaW5wdXQ+XHJcbiAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgIDx0ZD5cclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gb25EYXRhc2V0NlZhbHVlOENoYW5nZShlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17ZGF0YXNldDZWYWx1ZTh9XHJcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LWZ1bGwgYmctd2hpdGUgZm9jdXM6b3V0bGluZS1ub25lXCJcclxuICAgICAgICAgICAgICAgICAgICA+PC9pbnB1dD5cclxuICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgPHRkPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBvbkRhdGFzZXQ2VmFsdWU5Q2hhbmdlKGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtkYXRhc2V0NlZhbHVlOX1cclxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInctZnVsbCBiZy13aGl0ZSBmb2N1czpvdXRsaW5lLW5vbmVcIlxyXG4gICAgICAgICAgICAgICAgICAgID48L2lucHV0PlxyXG4gICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICA8dGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IG9uRGF0YXNldDZWYWx1ZTEwQ2hhbmdlKGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtkYXRhc2V0NlZhbHVlMTB9XHJcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LWZ1bGwgYmctd2hpdGUgZm9jdXM6b3V0bGluZS1ub25lXCJcclxuICAgICAgICAgICAgICAgICAgICA+PC9pbnB1dD5cclxuICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgPHRkPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBvbkRhdGFzZXQ2VmFsdWUxMUNoYW5nZShlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17ZGF0YXNldDZWYWx1ZTExfVxyXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy1mdWxsIGJnLXdoaXRlIGZvY3VzOm91dGxpbmUtbm9uZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgPjwvaW5wdXQ+XHJcbiAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgIDx0ZD5cclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gb25EYXRhc2V0NlZhbHVlMTJDaGFuZ2UoZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2RhdGFzZXQ2VmFsdWUxMn1cclxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInctZnVsbCBiZy13aGl0ZSBmb2N1czpvdXRsaW5lLW5vbmVcIlxyXG4gICAgICAgICAgICAgICAgICAgID48L2lucHV0PlxyXG4gICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICA8L3Rib2R5PlxyXG4gICAgICAgICAgICA8L3RhYmxlPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICB7LyogPGJ1dHRvblxyXG4gICAgICAgIGNsYXNzTmFtZT0nei0xMCBtbC00IG10LTYgaG92ZXI6YmctcHJpbWFyeSBob3Zlcjp0ZXh0LXdoaXRlIGZvY3VzOm91dGxpbmUtbm9uZSBkYXJrOmhvdmVyOmJnLXByaW1hcnlkYXJrIGRhcms6aG92ZXI6dGV4dC1iYWNrZ3JvdW5kIGZvY3VzOm91dGxpbmUtbm9uZSBib3JkZXIgYm9yZGVyLXByaW1hcnkgdGV4dC1wcmltYXJ5IHRleHQtc20gZm9udC1saWdodCBweS0yIHB4LTggcm91bmRlZC0yeGwgZGFyazp0ZXh0LXByaW1hcnlkYXJrIGRhcms6Ym9yZGVyLXByaW1hcnlkYXJrJ1xyXG4gICAgICAgIG9uQ2xpY2s9e2FzeW5jIChlKSA9PiB7XHJcbiAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICBjb25zdCBkb2MgPSA8TXlEb2N1bWVudCBpbWFnZVVybD17aW1hZ2VVcmx9IC8+O1xyXG4gICAgICAgICAgY29uc3QgYXNQZGYgPSBwZGYoW10pOyAvLyB7fSBpcyBpbXBvcnRhbnQsIHRocm93cyB3aXRob3V0IGFuIGFyZ3VtZW50XHJcbiAgICAgICAgICBhc1BkZi51cGRhdGVDb250YWluZXIoZG9jKTtcclxuICAgICAgICAgIGNvbnN0IGJsb2IgPSBhd2FpdCBhc1BkZi50b0Jsb2IoKTtcclxuICAgICAgICAgIHNhdmVBcyhibG9iLCBgcmFuZG9tLW5hbWUucGRmYCk7XHJcbiAgICAgICAgfX1cclxuICAgICAgPlxyXG4gICAgICAgIFNhdmVcclxuICAgICAgPC9idXR0b24+ICovfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgey8qIFNpZGUgbWFuYWdlciBiYXIgKi99XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXN0YXJ0LTEyIGNvbC1lbmQtMTMganVzdGlmeS1zZWxmLWNlbnRlciBzZWxmLXN0YXJ0IGZsZXggZmxleC1jb2wgZmxleC13cmFwIGdhcC0yIG92ZXJmbG93LWhpZGRlblwiPlxyXG4gICAgICAgIDxJbWFnZSBvbkNsaWNrPXsoKSA9PiBkZWxldGVGaWVsZChmaWVsZC5pbmRleCl9IGNsYXNzTmFtZT1cImN1cnNvci1wb2ludGVyXCIgc3JjPXtgL3BsYW4tYmFyL2V4aXQ0LnN2Z2B9IGhlaWdodD17MzZ9IHdpZHRoPXszNn0gLz5cclxuICAgICAgICA8SW1hZ2Ugey4uLnByb3ZpZGVkLmRyYWdIYW5kbGVQcm9wc30gY2xhc3NOYW1lPVwiY3Vyc29yLXBvaW50ZXJcIiBzcmM9e2AvcGxhbi1iYXIvZHJhZzIuc3ZnYH0gaGVpZ2h0PXszNn0gd2lkdGg9ezM2fSAvPlxyXG4gICAgICAgIDxJbWFnZVxyXG4gICAgICAgICAgb25DbGljaz17KCkgPT4gb25TdGFja2VkQ2hhbmdlKGZpZWxkLnN0YWNrZWQpfVxyXG4gICAgICAgICAgY2xhc3NOYW1lPVwiY3Vyc29yLXBvaW50ZXJcIlxyXG4gICAgICAgICAgc3JjPXtgL3BsYW4tYmFyL2xheWVycy5zdmdgfVxyXG4gICAgICAgICAgaGVpZ2h0PXszNn1cclxuICAgICAgICAgIHdpZHRoPXszNn1cclxuICAgICAgICAvPlxyXG4gICAgICAgIDxkaXZcclxuICAgICAgICAgIHN0eWxlPXt7IGhlaWdodDogJzM2cHgnLCB3aWR0aDogJzM2cHgnIH19XHJcbiAgICAgICAgICByZWY9e2NoYXJ0Rm9ybWF0fVxyXG4gICAgICAgICAgY2xhc3NOYW1lPVwib3ZlcmZsb3ctaGlkZGVuIGJnLWJhY2tncm91bmQgZm9jdXM6b3V0bGluZS1ub25lIHJvdW5kZWQtbGdcIlxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxJbWFnZVxyXG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBvbkNoYXJ0Q2hhbmdlKGZhbHNlKX1cclxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiY3Vyc29yLXBvaW50ZXJcIlxyXG4gICAgICAgICAgICBzcmM9e2AvY2hhcnQvJHtmaWVsZC5jaGFydFR5cGV9LnN2Z2B9XHJcbiAgICAgICAgICAgIGhlaWdodD17MzZ9XHJcbiAgICAgICAgICAgIHdpZHRoPXszNn1cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgICB7LyogPGRpdlxyXG4gICAgICAgICAgICAgIHN0eWxlPXt7IGhlaWdodDogJzM2cHgnIH19XHJcbiAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gb25DaGFydENoYW5nZShmYWxzZSl9XHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPSdweC0yIHB5LTEgdGV4dC1zbSBlYXNlLWluLW91dCBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWJldHdlZW4gY3Vyc29yLXBvaW50ZXInXHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICB7ZmllbGQuY2hhcnRUeXBlfVxyXG4gICAgICAgICAgICA8L2Rpdj4gKi99XHJcbiAgICAgICAgICB7ZmllbGQuY2hhcnRUeXBlICE9PSAnQmFyIGNoYXJ0JyAmJiAoXHJcbiAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgPEltYWdlXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJjdXJzb3ItcG9pbnRlclwiXHJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBvbkNoYXJ0Q2hhbmdlKCdCYXIgY2hhcnQnKX1cclxuICAgICAgICAgICAgICAgIHNyYz17YC9jaGFydC8ke2ZpZWxkLmNoYXJ0VHlwZSA9PSAnQmFyIGNoYXJ0JyA/IGZpZWxkLmNoYXJ0VHlwZSA6ICdCYXIgY2hhcnQnfS5zdmdgfVxyXG4gICAgICAgICAgICAgICAgaGVpZ2h0PXsyN31cclxuICAgICAgICAgICAgICAgIHdpZHRoPXsyN31cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIHsvKiA8ZGl2XHJcbiAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gb25DaGFydENoYW5nZSgnQmFyIGNoYXJ0Jyl9XHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPSdweC0yIHB5LTEgdGV4dC1zbSBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWJldHdlZW4gY3Vyc29yLXBvaW50ZXInXHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICBCYXIgY2hhcnRcclxuICAgICAgICAgICAgPC9kaXY+ICovfVxyXG4gICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICl9XHJcbiAgICAgICAgICB7ZmllbGQuY2hhcnRUeXBlICE9PSAnUmV2ZXJzZSBjaGFydCcgJiYgKFxyXG4gICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgIDxJbWFnZVxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiY3Vyc29yLXBvaW50ZXJcIlxyXG4gICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gb25DaGFydENoYW5nZSgnUmV2ZXJzZSBjaGFydCcpfVxyXG4gICAgICAgICAgICAgICAgc3JjPXtgL2NoYXJ0LyR7ZmllbGQuY2hhcnRUeXBlID09ICdSZXZlcnNlIGNoYXJ0JyA/IGZpZWxkLmNoYXJ0VHlwZSA6ICdSZXZlcnNlIGNoYXJ0J30uc3ZnYH1cclxuICAgICAgICAgICAgICAgIGhlaWdodD17Mjd9XHJcbiAgICAgICAgICAgICAgICB3aWR0aD17Mjd9XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICB7LyogPGRpdlxyXG4gICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IG9uQ2hhcnRDaGFuZ2UoJ1JldmVyc2UgY2hhcnQnKX1cclxuICAgICAgICAgICAgICBjbGFzc05hbWU9J3B4LTIgcHktMSB0ZXh0LXNtIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktYmV0d2VlbiBjdXJzb3ItcG9pbnRlcidcclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIFJldmVyc2UgY2hhcnRcclxuICAgICAgICAgICAgPC9kaXY+ICovfVxyXG4gICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICl9XHJcbiAgICAgICAgICB7ZmllbGQuY2hhcnRUeXBlICE9PSAnTGluZSBjaGFydCcgJiYgKFxyXG4gICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgIDxJbWFnZVxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiY3Vyc29yLXBvaW50ZXJcIlxyXG4gICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gb25DaGFydENoYW5nZSgnTGluZSBjaGFydCcpfVxyXG4gICAgICAgICAgICAgICAgc3JjPXtgL2NoYXJ0LyR7ZmllbGQuY2hhcnRUeXBlID09ICdMaW5lIGNoYXJ0JyA/IGZpZWxkLmNoYXJ0VHlwZSA6ICdMaW5lIGNoYXJ0J30uc3ZnYH1cclxuICAgICAgICAgICAgICAgIGhlaWdodD17Mjd9XHJcbiAgICAgICAgICAgICAgICB3aWR0aD17Mjd9XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICB7LyogPGRpdlxyXG4gICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IG9uQ2hhcnRDaGFuZ2UoJ0xpbmUgY2hhcnQnKX1cclxuICAgICAgICAgICAgICBjbGFzc05hbWU9J3B4LTIgcHktMSB0ZXh0LXNtIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktYmV0d2VlbiBjdXJzb3ItcG9pbnRlcidcclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIExpbmUgY2hhcnRcclxuICAgICAgICAgICAgPC9kaXY+ICovfVxyXG4gICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICl9XHJcbiAgICAgICAgICB7ZmllbGQuY2hhcnRUeXBlICE9PSAnUGllIGNoYXJ0JyAmJiAoXHJcbiAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgPEltYWdlXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJjdXJzb3ItcG9pbnRlclwiXHJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBvbkNoYXJ0Q2hhbmdlKCdQaWUgY2hhcnQnKX1cclxuICAgICAgICAgICAgICAgIHNyYz17YC9jaGFydC8ke2ZpZWxkLmNoYXJ0VHlwZSA9PSAnUGllIGNoYXJ0JyA/IGZpZWxkLmNoYXJ0VHlwZSA6ICdQaWUgY2hhcnQnfS5zdmdgfVxyXG4gICAgICAgICAgICAgICAgaGVpZ2h0PXsyN31cclxuICAgICAgICAgICAgICAgIHdpZHRoPXsyN31cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIHsvKiA8ZGl2XHJcbiAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gb25DaGFydENoYW5nZSgnUGllIGNoYXJ0Jyl9XHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPSdweC0yIHB5LTEgdGV4dC1zbSBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWJldHdlZW4gY3Vyc29yLXBvaW50ZXInXHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICBQaWUgY2hhcnRcclxuICAgICAgICAgICAgPC9kaXY+ICovfVxyXG4gICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICl9XHJcbiAgICAgICAgICB7ZmllbGQuY2hhcnRUeXBlICE9PSAnRG91Z2hudXQgY2hhcnQnICYmIChcclxuICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICA8SW1hZ2VcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImN1cnNvci1wb2ludGVyXCJcclxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IG9uQ2hhcnRDaGFuZ2UoJ0RvdWdobnV0IGNoYXJ0Jyl9XHJcbiAgICAgICAgICAgICAgICBzcmM9e2AvY2hhcnQvJHtmaWVsZC5jaGFydFR5cGUgPT0gJ0RvdWdobnV0IGNoYXJ0JyA/IGZpZWxkLmNoYXJ0VHlwZSA6ICdEb3VnaG51dCBjaGFydCd9LnN2Z2B9XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ9ezI3fVxyXG4gICAgICAgICAgICAgICAgd2lkdGg9ezI3fVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgey8qIDxkaXZcclxuICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBvbkNoYXJ0Q2hhbmdlKCdEb3VnaG51dCBjaGFydCcpfVxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT0ncHgtMiBweS0xIHRleHQtc20gZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1iZXR3ZWVuIGN1cnNvci1wb2ludGVyJ1xyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgRG91Z2hudXQgY2hhcnRcclxuICAgICAgICAgICAgPC9kaXY+ICovfVxyXG4gICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICl9XHJcbiAgICAgICAgICB7ZmllbGQuY2hhcnRUeXBlICE9PSAnQXJlYSBjaGFydCcgJiYgKFxyXG4gICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgIDxJbWFnZVxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiY3Vyc29yLXBvaW50ZXJcIlxyXG4gICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gb25DaGFydENoYW5nZSgnQXJlYSBjaGFydCcpfVxyXG4gICAgICAgICAgICAgICAgc3JjPXtgL2NoYXJ0LyR7ZmllbGQuY2hhcnRUeXBlID09ICdBcmVhIGNoYXJ0JyA/IGZpZWxkLmNoYXJ0VHlwZSA6ICdBcmVhIGNoYXJ0J30uc3ZnYH1cclxuICAgICAgICAgICAgICAgIGhlaWdodD17Mjd9XHJcbiAgICAgICAgICAgICAgICB3aWR0aD17Mjd9XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICB7LyogPGRpdlxyXG4gICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IG9uQ2hhcnRDaGFuZ2UoJ0FyZWEgY2hhcnQnKX1cclxuICAgICAgICAgICAgICBjbGFzc05hbWU9J3B4LTIgcHktMSB0ZXh0LXNtIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktYmV0d2VlbiBjdXJzb3ItcG9pbnRlcidcclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIEFyZWEgY2hhcnRcclxuICAgICAgICAgICAgPC9kaXY+ICovfVxyXG4gICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICl9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IENoYXJ0SnNDb21wb25lbnQ7XHJcblxyXG57XHJcbiAgLyogPGRpdiBjbGFzc05hbWU9J210LTQgdy1mdWxsIGZsZXggdy1tYXggdGV4dC1zbSc+XHJcbjxkaXYgY2xhc3NOYW1lPSdmbGV4IGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlciB3LTEvMTIgYm9yZGVyLXIgYm9yZGVyLXByaW1hcnknPlxyXG4gIDxpbnB1dCBwbGFjZWhvbGRlcj0nYmxhYmxhYmxhJyBjbGFzc05hbWU9J3ctZnVsbCcgLz5cclxuPC9kaXY+XHJcbjxkaXYgY2xhc3NOYW1lPSdmbGV4IGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlciB3LTEvMTIgYm9yZGVyLXIgYm9yZGVyLXByaW1hcnknPlxyXG4gIDxpbnB1dCBwbGFjZWhvbGRlcj0nYmxhYmxhYmxhJyBjbGFzc05hbWU9J3ctZnVsbCcgLz5cclxuPC9kaXY+XHJcbjxkaXYgY2xhc3NOYW1lPSdmbGV4IGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlciB3LTEvMTIgYm9yZGVyLXIgYm9yZGVyLXByaW1hcnknPlxyXG4gIDxpbnB1dCBwbGFjZWhvbGRlcj0nYmxhYmxhYmxhJyBjbGFzc05hbWU9J3ctZnVsbCcgLz5cclxuPC9kaXY+XHJcbjxkaXYgY2xhc3NOYW1lPSdmbGV4IGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlciB3LTEvMTIgYm9yZGVyLXIgYm9yZGVyLXByaW1hcnknPlxyXG4gIDxpbnB1dCBwbGFjZWhvbGRlcj0nYmxhYmxhYmxhJyBjbGFzc05hbWU9J3ctZnVsbCcgLz5cclxuPC9kaXY+XHJcbjxkaXYgY2xhc3NOYW1lPSdmbGV4IGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlciB3LTEvMTIgYm9yZGVyLXIgYm9yZGVyLXByaW1hcnknPlxyXG4gIDxpbnB1dCBwbGFjZWhvbGRlcj0nYmxhYmxhYmxhJyBjbGFzc05hbWU9J3ctZnVsbCcgLz5cclxuPC9kaXY+XHJcbjxkaXYgY2xhc3NOYW1lPSdmbGV4IGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlciB3LTEvMTIgYm9yZGVyLXIgYm9yZGVyLXByaW1hcnknPlxyXG4gIDxpbnB1dCBwbGFjZWhvbGRlcj0nYmxhYmxhYmxhJyBjbGFzc05hbWU9J3ctZnVsbCcgLz5cclxuPC9kaXY+XHJcbjxkaXYgY2xhc3NOYW1lPSdmbGV4IGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlciB3LTEvMTIgYm9yZGVyLXIgYm9yZGVyLXByaW1hcnknPlxyXG4gIDxpbnB1dCBwbGFjZWhvbGRlcj0nYmxhYmxhYmxhJyBjbGFzc05hbWU9J3ctZnVsbCcgLz5cclxuPC9kaXY+XHJcbjxkaXYgY2xhc3NOYW1lPSdmbGV4IGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlciB3LTEvMTIgYm9yZGVyLXIgYm9yZGVyLXByaW1hcnknPlxyXG4gIDxpbnB1dCBwbGFjZWhvbGRlcj0nYmxhYmxhYmxhJyBjbGFzc05hbWU9J3ctZnVsbCcgLz5cclxuPC9kaXY+XHJcbjxkaXYgY2xhc3NOYW1lPSdmbGV4IGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlciB3LTEvMTIgYm9yZGVyLXIgYm9yZGVyLXByaW1hcnknPlxyXG4gIDxpbnB1dCBwbGFjZWhvbGRlcj0nYmxhYmxhYmxhJyBjbGFzc05hbWU9J3ctZnVsbCcgLz5cclxuPC9kaXY+XHJcbjxkaXYgY2xhc3NOYW1lPSdmbGV4IGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlciB3LTEvMTIgYm9yZGVyLXIgYm9yZGVyLXByaW1hcnknPlxyXG4gIDxpbnB1dCBwbGFjZWhvbGRlcj0nYmxhYmxhYmxhJyBjbGFzc05hbWU9J3ctZnVsbCcgLz5cclxuPC9kaXY+XHJcbjxkaXYgY2xhc3NOYW1lPSdmbGV4IGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlciB3LTEvMTIgYm9yZGVyLXIgYm9yZGVyLXByaW1hcnknPlxyXG4gIDxpbnB1dCBwbGFjZWhvbGRlcj0nYmxhYmxhYmxhJyBjbGFzc05hbWU9J3ctZnVsbCcgLz5cclxuPC9kaXY+XHJcbjxkaXYgY2xhc3NOYW1lPSdmbGV4IGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlciB3LTEvMTIgYm9yZGVyLXIgYm9yZGVyLXByaW1hcnknPlxyXG4gIDxpbnB1dCBwbGFjZWhvbGRlcj0nYmxhYmxhYmxhJyBjbGFzc05hbWU9J3ctZnVsbCcgLz5cclxuPC9kaXY+XHJcbjwvZGl2PiAqL1xyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=