webpackHotUpdate_N_E("pages/dashboard/projects/[project]/business-plan",{

/***/ "./components/dashboard/startup/project/business-app/Editor.js":
/*!*********************************************************************!*\
  !*** ./components/dashboard/startup/project/business-app/Editor.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var C_off_saas_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var C_off_saas_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var C_off_saas_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/regenerator */ "./node_modules/next/node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var C_off_saas_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(C_off_saas_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var C_off_saas_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/dynamic */ "./node_modules/next/dynamic.js");
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _utils_helpers__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../utils/helpers */ "./utils/helpers.js");
/* harmony import */ var _utils_useStateWithPromise__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../utils/useStateWithPromise */ "./utils/useStateWithPromise.js");
/* harmony import */ var _utils_useCustomState__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../utils/useCustomState */ "./utils/useCustomState.js");
/* harmony import */ var _node_modules_react_quill_dist_quill_snow_css__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../../node_modules/react-quill/dist/quill.snow.css */ "./node_modules/react-quill/dist/quill.snow.css");
/* harmony import */ var _node_modules_react_quill_dist_quill_snow_css__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_node_modules_react_quill_dist_quill_snow_css__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _node_modules_react_quill_dist_quill_bubble_css__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../../node_modules/react-quill/dist/quill.bubble.css */ "./node_modules/react-quill/dist/quill.bubble.css");
/* harmony import */ var _node_modules_react_quill_dist_quill_bubble_css__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_node_modules_react_quill_dist_quill_bubble_css__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _node_modules_react_quill_dist_quill_core_css__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../../node_modules/react-quill/dist/quill.core.css */ "./node_modules/react-quill/dist/quill.core.css");
/* harmony import */ var _node_modules_react_quill_dist_quill_core_css__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_node_modules_react_quill_dist_quill_core_css__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! next/image */ "./node_modules/next/image.js");
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var react_beautiful_dnd__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! react-beautiful-dnd */ "./node_modules/react-beautiful-dnd/dist/react-beautiful-dnd.esm.js");
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! file-saver */ "./node_modules/file-saver/dist/FileSaver.min.js");
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(file_saver__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _Chartjs__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./Chartjs */ "./components/dashboard/startup/project/business-app/Chartjs.js");
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! gsap */ "./node_modules/gsap/index.js");
/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./Header */ "./components/dashboard/startup/project/business-app/Header.js");
/* harmony import */ var _Text__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./Text */ "./components/dashboard/startup/project/business-app/Text.js");
/* harmony import */ var _Table__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./Table */ "./components/dashboard/startup/project/business-app/Table.js");
/* harmony import */ var _Spacing__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./Spacing */ "./components/dashboard/startup/project/business-app/Spacing.js");







var _jsxFileName = "C:\\off-saas\\components\\dashboard\\startup\\project\\business-app\\Editor.js",
    _this = undefined,
    _s = $RefreshSig$();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(C_off_saas_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }


 // import debounce from 'lodash/debounce';
// import debounce from '../../../../../utils/helpers';
// import debounce from 'lodash/debounce';




var ReactQuill = next_dynamic__WEBPACK_IMPORTED_MODULE_6___default()(_c = function _c() {
  return __webpack_require__.e(/*! import() */ 1).then(__webpack_require__.t.bind(null, /*! react-quill */ "./node_modules/react-quill/lib/index.js", 7));
}, {
  ssr: false,
  loadableGenerated: {
    webpack: function webpack() {
      return [/*require.resolve*/(/*! react-quill */ "./node_modules/react-quill/lib/index.js")];
    },
    modules: ["..\\components\\dashboard\\startup\\project\\business-app\\Editor.js -> " + 'react-quill']
  }
});
_c2 = ReactQuill;




 // import { useRechartToPng } from 'recharts-to-png';


 // import ReactChart from './ReachChart';







var EditorInputElement = function EditorInputElement(_ref) {
  _s();

  var sectionTitleUpdate = _ref.sectionTitleUpdate,
      tableUpdate = _ref.tableUpdate,
      headerUpdate = _ref.headerUpdate,
      reorderElements = _ref.reorderElements,
      projectId = _ref.projectId,
      addChart = _ref.addChart,
      addNewHeader = _ref.addNewHeader,
      chartTypeUpdate = _ref.chartTypeUpdate,
      onDatasetLabel6Update = _ref.onDatasetLabel6Update,
      onDatasetLabel5Update = _ref.onDatasetLabel5Update,
      onDatasetLabel4Update = _ref.onDatasetLabel4Update,
      onDatasetLabel3Update = _ref.onDatasetLabel3Update,
      onDatasetLabel2Update = _ref.onDatasetLabel2Update,
      onDatasetLabel1Update = _ref.onDatasetLabel1Update,
      onDataset6Update = _ref.onDataset6Update,
      onDataset5Update = _ref.onDataset5Update,
      onDataset4Update = _ref.onDataset4Update,
      onDataset3Update = _ref.onDataset3Update,
      onDataset2Update = _ref.onDataset2Update,
      onDataset1Update = _ref.onDataset1Update,
      chartLabelsUpdate = _ref.chartLabelsUpdate,
      chartValueUpdate = _ref.chartValueUpdate,
      addNewChart = _ref.addNewChart,
      deleteParticularField = _ref.deleteParticularField,
      addNewField = _ref.addNewField,
      fieldUpdate = _ref.fieldUpdate,
      sectionUpdate = _ref.sectionUpdate,
      selectedSection = _ref.selectedSection,
      selectedSectionIndex = _ref.selectedSectionIndex,
      sections = _ref.sections;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])(''),
      title = _useState[0],
      setTitle = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])(''),
      text = _useState2[0],
      setText = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])(''),
      id = _useState3[0],
      setId = _useState3[1];

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])(null),
      currentIndex = _useState4[0],
      setCurrentIndex = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])(null),
      lastSectionIndex = _useState5[0],
      setLastSectionIndex = _useState5[1]; // const [currentSectionIndex, setCurrentSectionIndex] = useState(null);


  var onLeftBarShow = function onLeftBarShow() {
    // --- VERSION 1 ---
    // gsap.to(document.getElementById('left-bar'), {width: '160px', transformOrigin: 'left', duration: 1, ease: Linear });
    // // EXIT
    // gsap.to(document.getElementById('exit'), { autoAlpha: 1, duration: 1, ease: Linear, delay: 2 })
    // // IMAGES
    // gsap.to(document.getElementById('left-element'), { scale: 1, duration: 1, ease: Linear, delay: 1 });
    // gsap.to(document.getElementById('left-element1'), { scale: 1, duration: 1, ease: Linear, delay: 1 });
    // gsap.to(document.getElementById('left-element2'), { scale: 1, duration: 1, ease: Linear, delay: 1 });
    // // TEXT
    // gsap.to(document.getElementById('left-text'), { scale: 1, duration: 1, ease: Linear, delay: 1 });
    // gsap.to(document.getElementById('left-text1'), { scale: 1, duration: 1, ease: Linear, delay: 1 });
    // gsap.to(document.getElementById('left-text2'), { scale: 1, duration: 1, ease: Linear, delay: 1 });
    // --- VERSION 2 ---
    // CONTAINERS
    gsap__WEBPACK_IMPORTED_MODULE_17__["default"].to(document.getElementById('container'), {
      autoAlpha: 1
    });
    gsap__WEBPACK_IMPORTED_MODULE_17__["default"].to(document.getElementById('container1'), {
      autoAlpha: 1
    });
    gsap__WEBPACK_IMPORTED_MODULE_17__["default"].to(document.getElementById('container2'), {
      autoAlpha: 1
    });
    gsap__WEBPACK_IMPORTED_MODULE_17__["default"].to(document.getElementById('container3'), {
      autoAlpha: 1
    });
    gsap__WEBPACK_IMPORTED_MODULE_17__["default"].to(document.getElementById('container4'), {
      autoAlpha: 1
    }); // LEFT BAR

    gsap__WEBPACK_IMPORTED_MODULE_17__["default"].to(document.getElementById('left-bar'), {
      height: '100vh',
      transformOrigin: 'top',
      duration: 2,
      ease: gsap__WEBPACK_IMPORTED_MODULE_17__["Linear"]
    }); // EXIT

    gsap__WEBPACK_IMPORTED_MODULE_17__["default"].to(document.getElementById('exit'), {
      autoAlpha: 1,
      duration: 1,
      ease: gsap__WEBPACK_IMPORTED_MODULE_17__["Linear"],
      delay: 2
    }); // IMAGES

    gsap__WEBPACK_IMPORTED_MODULE_17__["default"].to(document.getElementById('left-element'), {
      zIndex: 50,
      scale: 1,
      transformOrigin: 'top',
      duration: 1,
      ease: gsap__WEBPACK_IMPORTED_MODULE_17__["Linear"],
      delay: 0.3
    });
    gsap__WEBPACK_IMPORTED_MODULE_17__["default"].to(document.getElementById('left-element1'), {
      zIndex: 50,
      scale: 1,
      transformOrigin: 'top',
      duration: 1,
      ease: gsap__WEBPACK_IMPORTED_MODULE_17__["Linear"],
      delay: 0.5
    });
    gsap__WEBPACK_IMPORTED_MODULE_17__["default"].to(document.getElementById('left-element2'), {
      zIndex: 50,
      scale: 1,
      transformOrigin: 'top',
      duration: 1,
      ease: gsap__WEBPACK_IMPORTED_MODULE_17__["Linear"],
      delay: 0.7
    });
    gsap__WEBPACK_IMPORTED_MODULE_17__["default"].to(document.getElementById('left-element3'), {
      zIndex: 50,
      scale: 1,
      transformOrigin: 'top',
      duration: 1,
      ease: gsap__WEBPACK_IMPORTED_MODULE_17__["Linear"],
      delay: 0.9
    });
    gsap__WEBPACK_IMPORTED_MODULE_17__["default"].to(document.getElementById('left-element4'), {
      zIndex: 50,
      scale: 1,
      transformOrigin: 'top',
      duration: 1,
      ease: gsap__WEBPACK_IMPORTED_MODULE_17__["Linear"],
      delay: 1.1
    }); // TEXT

    gsap__WEBPACK_IMPORTED_MODULE_17__["default"].to(document.getElementById('left-text'), {
      zIndex: 50,
      scale: 1,
      transformOrigin: 'top',
      duration: 1,
      ease: gsap__WEBPACK_IMPORTED_MODULE_17__["Linear"],
      delay: 0.3
    });
    gsap__WEBPACK_IMPORTED_MODULE_17__["default"].to(document.getElementById('left-text1'), {
      zIndex: 50,
      scale: 1,
      transformOrigin: 'top',
      duration: 1,
      ease: gsap__WEBPACK_IMPORTED_MODULE_17__["Linear"],
      delay: 0.5
    });
    gsap__WEBPACK_IMPORTED_MODULE_17__["default"].to(document.getElementById('left-text2'), {
      zIndex: 50,
      scale: 1,
      transformOrigin: 'top',
      duration: 1,
      ease: gsap__WEBPACK_IMPORTED_MODULE_17__["Linear"],
      delay: 0.7
    });
    gsap__WEBPACK_IMPORTED_MODULE_17__["default"].to(document.getElementById('left-text3'), {
      zIndex: 50,
      scale: 1,
      transformOrigin: 'top',
      duration: 1,
      ease: gsap__WEBPACK_IMPORTED_MODULE_17__["Linear"],
      delay: 0.9
    });
    gsap__WEBPACK_IMPORTED_MODULE_17__["default"].to(document.getElementById('left-text4'), {
      zIndex: 50,
      scale: 1,
      transformOrigin: 'top',
      duration: 1,
      ease: gsap__WEBPACK_IMPORTED_MODULE_17__["Linear"],
      delay: 1.1
    });
  };

  var deleteField = function deleteField(index) {
    deleteParticularField(index);
  };

  var updateTitle = /*#__PURE__*/function () {
    var _ref2 = Object(C_off_saas_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_4__["default"])( /*#__PURE__*/C_off_saas_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default.a.mark(function _callee(title) {
      return C_off_saas_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return setTitle(title);

            case 2:
              onSectionTitleUpdate(title);

            case 3:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function updateTitle(_x) {
      return _ref2.apply(this, arguments);
    };
  }();

  var onSectionTitleUpdate = Object(react__WEBPACK_IMPORTED_MODULE_5__["useCallback"])(Object(_utils_helpers__WEBPACK_IMPORTED_MODULE_7__["default"])(function (data) {
    sectionTitleUpdate(data);
  }, 500), []);
  var labelUpdate = Object(react__WEBPACK_IMPORTED_MODULE_5__["useCallback"])(Object(_utils_helpers__WEBPACK_IMPORTED_MODULE_7__["default"])( /*#__PURE__*/function () {
    var _ref3 = Object(C_off_saas_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_4__["default"])( /*#__PURE__*/C_off_saas_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default.a.mark(function _callee2(data) {
      var currentSectionIndex;
      return C_off_saas_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default.a.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return data.selSection.fields.findIndex(function (field) {
                return field.index == data.index;
              });

            case 2:
              currentSectionIndex = _context2.sent;
              console.log(data);
              chartLabelsUpdate(data, data.index, currentSectionIndex, data.selSection);

            case 5:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }));

    return function (_x2) {
      return _ref3.apply(this, arguments);
    };
  }(), 500), []); // Dataset1 update

  var dataset1Update = Object(react__WEBPACK_IMPORTED_MODULE_5__["useCallback"])(Object(_utils_helpers__WEBPACK_IMPORTED_MODULE_7__["default"])( /*#__PURE__*/function () {
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
              console.log(data);
              onDataset1Update(data, data.index, currentSectionIndex, data.selSection);

            case 5:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3);
    }));

    return function (_x3) {
      return _ref4.apply(this, arguments);
    };
  }(), 500), []); // Dataset2 update

  var dataset2Update = Object(react__WEBPACK_IMPORTED_MODULE_5__["useCallback"])(Object(_utils_helpers__WEBPACK_IMPORTED_MODULE_7__["default"])( /*#__PURE__*/function () {
    var _ref5 = Object(C_off_saas_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_4__["default"])( /*#__PURE__*/C_off_saas_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default.a.mark(function _callee4(data) {
      var currentSectionIndex;
      return C_off_saas_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default.a.wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              _context4.next = 2;
              return data.selSection.fields.findIndex(function (field) {
                return field.index == data.index;
              });

            case 2:
              currentSectionIndex = _context4.sent;
              console.log(data);
              onDataset2Update(data, data.index, currentSectionIndex, data.selSection);

            case 5:
            case "end":
              return _context4.stop();
          }
        }
      }, _callee4);
    }));

    return function (_x4) {
      return _ref5.apply(this, arguments);
    };
  }(), 500), []); // Dataset3 update

  var dataset3Update = Object(react__WEBPACK_IMPORTED_MODULE_5__["useCallback"])(Object(_utils_helpers__WEBPACK_IMPORTED_MODULE_7__["default"])( /*#__PURE__*/function () {
    var _ref6 = Object(C_off_saas_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_4__["default"])( /*#__PURE__*/C_off_saas_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default.a.mark(function _callee5(data) {
      var currentSectionIndex;
      return C_off_saas_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default.a.wrap(function _callee5$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              _context5.next = 2;
              return data.selSection.fields.findIndex(function (field) {
                return field.index == data.index;
              });

            case 2:
              currentSectionIndex = _context5.sent;
              console.log(data);
              onDataset3Update(data, data.index, currentSectionIndex, data.selSection);

            case 5:
            case "end":
              return _context5.stop();
          }
        }
      }, _callee5);
    }));

    return function (_x5) {
      return _ref6.apply(this, arguments);
    };
  }(), 500), []); // Dataset4 update

  var dataset4Update = Object(react__WEBPACK_IMPORTED_MODULE_5__["useCallback"])(Object(_utils_helpers__WEBPACK_IMPORTED_MODULE_7__["default"])( /*#__PURE__*/function () {
    var _ref7 = Object(C_off_saas_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_4__["default"])( /*#__PURE__*/C_off_saas_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default.a.mark(function _callee6(data) {
      var currentSectionIndex;
      return C_off_saas_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default.a.wrap(function _callee6$(_context6) {
        while (1) {
          switch (_context6.prev = _context6.next) {
            case 0:
              _context6.next = 2;
              return data.selSection.fields.findIndex(function (field) {
                return field.index == data.index;
              });

            case 2:
              currentSectionIndex = _context6.sent;
              console.log(data);
              onDataset4Update(data, data.index, currentSectionIndex, data.selSection);

            case 5:
            case "end":
              return _context6.stop();
          }
        }
      }, _callee6);
    }));

    return function (_x6) {
      return _ref7.apply(this, arguments);
    };
  }(), 500), []); // Dataset5 update

  var dataset5Update = Object(react__WEBPACK_IMPORTED_MODULE_5__["useCallback"])(Object(_utils_helpers__WEBPACK_IMPORTED_MODULE_7__["default"])( /*#__PURE__*/function () {
    var _ref8 = Object(C_off_saas_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_4__["default"])( /*#__PURE__*/C_off_saas_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default.a.mark(function _callee7(data) {
      var currentSectionIndex;
      return C_off_saas_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default.a.wrap(function _callee7$(_context7) {
        while (1) {
          switch (_context7.prev = _context7.next) {
            case 0:
              _context7.next = 2;
              return data.selSection.fields.findIndex(function (field) {
                return field.index == data.index;
              });

            case 2:
              currentSectionIndex = _context7.sent;
              console.log(data);
              onDataset5Update(data, data.index, currentSectionIndex, data.selSection);

            case 5:
            case "end":
              return _context7.stop();
          }
        }
      }, _callee7);
    }));

    return function (_x7) {
      return _ref8.apply(this, arguments);
    };
  }(), 500), []); // Dataset6 update

  var dataset6Update = Object(react__WEBPACK_IMPORTED_MODULE_5__["useCallback"])(Object(_utils_helpers__WEBPACK_IMPORTED_MODULE_7__["default"])( /*#__PURE__*/function () {
    var _ref9 = Object(C_off_saas_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_4__["default"])( /*#__PURE__*/C_off_saas_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default.a.mark(function _callee8(data) {
      var currentSectionIndex;
      return C_off_saas_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default.a.wrap(function _callee8$(_context8) {
        while (1) {
          switch (_context8.prev = _context8.next) {
            case 0:
              _context8.next = 2;
              return data.selSection.fields.findIndex(function (field) {
                return field.index == data.index;
              });

            case 2:
              currentSectionIndex = _context8.sent;
              console.log(data);
              onDataset6Update(data, data.index, currentSectionIndex, data.selSection);

            case 5:
            case "end":
              return _context8.stop();
          }
        }
      }, _callee8);
    }));

    return function (_x8) {
      return _ref9.apply(this, arguments);
    };
  }(), 500), []); // Dataset labels update

  var datasetLabel1Update = Object(react__WEBPACK_IMPORTED_MODULE_5__["useCallback"])(Object(_utils_helpers__WEBPACK_IMPORTED_MODULE_7__["default"])( /*#__PURE__*/function () {
    var _ref10 = Object(C_off_saas_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_4__["default"])( /*#__PURE__*/C_off_saas_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default.a.mark(function _callee9(data) {
      var currentSectionIndex;
      return C_off_saas_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default.a.wrap(function _callee9$(_context9) {
        while (1) {
          switch (_context9.prev = _context9.next) {
            case 0:
              _context9.next = 2;
              return data.selSection.fields.findIndex(function (field) {
                return field.index == data.index;
              });

            case 2:
              currentSectionIndex = _context9.sent;
              console.log(data);
              onDatasetLabel1Update(data, data.index, currentSectionIndex, data.selSection);

            case 5:
            case "end":
              return _context9.stop();
          }
        }
      }, _callee9);
    }));

    return function (_x9) {
      return _ref10.apply(this, arguments);
    };
  }(), 500), []);
  var datasetLabel2Update = Object(react__WEBPACK_IMPORTED_MODULE_5__["useCallback"])(Object(_utils_helpers__WEBPACK_IMPORTED_MODULE_7__["default"])( /*#__PURE__*/function () {
    var _ref11 = Object(C_off_saas_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_4__["default"])( /*#__PURE__*/C_off_saas_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default.a.mark(function _callee10(data) {
      var currentSectionIndex;
      return C_off_saas_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default.a.wrap(function _callee10$(_context10) {
        while (1) {
          switch (_context10.prev = _context10.next) {
            case 0:
              _context10.next = 2;
              return data.selSection.fields.findIndex(function (field) {
                return field.index == data.index;
              });

            case 2:
              currentSectionIndex = _context10.sent;
              console.log(data);
              onDatasetLabel2Update(data, data.index, currentSectionIndex, data.selSection);

            case 5:
            case "end":
              return _context10.stop();
          }
        }
      }, _callee10);
    }));

    return function (_x10) {
      return _ref11.apply(this, arguments);
    };
  }(), 500), []);
  var datasetLabel3Update = Object(react__WEBPACK_IMPORTED_MODULE_5__["useCallback"])(Object(_utils_helpers__WEBPACK_IMPORTED_MODULE_7__["default"])( /*#__PURE__*/function () {
    var _ref12 = Object(C_off_saas_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_4__["default"])( /*#__PURE__*/C_off_saas_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default.a.mark(function _callee11(data) {
      var currentSectionIndex;
      return C_off_saas_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default.a.wrap(function _callee11$(_context11) {
        while (1) {
          switch (_context11.prev = _context11.next) {
            case 0:
              _context11.next = 2;
              return data.selSection.fields.findIndex(function (field) {
                return field.index == data.index;
              });

            case 2:
              currentSectionIndex = _context11.sent;
              console.log(data);
              onDatasetLabel3Update(data, data.index, currentSectionIndex, data.selSection);

            case 5:
            case "end":
              return _context11.stop();
          }
        }
      }, _callee11);
    }));

    return function (_x11) {
      return _ref12.apply(this, arguments);
    };
  }(), 500), []);
  var datasetLabel4Update = Object(react__WEBPACK_IMPORTED_MODULE_5__["useCallback"])(Object(_utils_helpers__WEBPACK_IMPORTED_MODULE_7__["default"])( /*#__PURE__*/function () {
    var _ref13 = Object(C_off_saas_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_4__["default"])( /*#__PURE__*/C_off_saas_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default.a.mark(function _callee12(data) {
      var currentSectionIndex;
      return C_off_saas_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default.a.wrap(function _callee12$(_context12) {
        while (1) {
          switch (_context12.prev = _context12.next) {
            case 0:
              _context12.next = 2;
              return data.selSection.fields.findIndex(function (field) {
                return field.index == data.index;
              });

            case 2:
              currentSectionIndex = _context12.sent;
              console.log(data);
              onDatasetLabel4Update(data, data.index, currentSectionIndex, data.selSection);

            case 5:
            case "end":
              return _context12.stop();
          }
        }
      }, _callee12);
    }));

    return function (_x12) {
      return _ref13.apply(this, arguments);
    };
  }(), 500), []);
  var datasetLabel5Update = Object(react__WEBPACK_IMPORTED_MODULE_5__["useCallback"])(Object(_utils_helpers__WEBPACK_IMPORTED_MODULE_7__["default"])( /*#__PURE__*/function () {
    var _ref14 = Object(C_off_saas_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_4__["default"])( /*#__PURE__*/C_off_saas_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default.a.mark(function _callee13(data) {
      var currentSectionIndex;
      return C_off_saas_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default.a.wrap(function _callee13$(_context13) {
        while (1) {
          switch (_context13.prev = _context13.next) {
            case 0:
              _context13.next = 2;
              return data.selSection.fields.findIndex(function (field) {
                return field.index == data.index;
              });

            case 2:
              currentSectionIndex = _context13.sent;
              console.log(data);
              onDatasetLabel5Update(data, data.index, currentSectionIndex, data.selSection);

            case 5:
            case "end":
              return _context13.stop();
          }
        }
      }, _callee13);
    }));

    return function (_x13) {
      return _ref14.apply(this, arguments);
    };
  }(), 500), []);
  var datasetLabel6Update = Object(react__WEBPACK_IMPORTED_MODULE_5__["useCallback"])(Object(_utils_helpers__WEBPACK_IMPORTED_MODULE_7__["default"])( /*#__PURE__*/function () {
    var _ref15 = Object(C_off_saas_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_4__["default"])( /*#__PURE__*/C_off_saas_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default.a.mark(function _callee14(data) {
      var currentSectionIndex;
      return C_off_saas_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default.a.wrap(function _callee14$(_context14) {
        while (1) {
          switch (_context14.prev = _context14.next) {
            case 0:
              _context14.next = 2;
              return data.selSection.fields.findIndex(function (field) {
                return field.index == data.index;
              });

            case 2:
              currentSectionIndex = _context14.sent;
              console.log(data);
              onDatasetLabel6Update(data, data.index, currentSectionIndex, data.selSection);

            case 5:
            case "end":
              return _context14.stop();
          }
        }
      }, _callee14);
    }));

    return function (_x14) {
      return _ref15.apply(this, arguments);
    };
  }(), 500), []);
  Object(react__WEBPACK_IMPORTED_MODULE_5__["useEffect"])(function () {
    setCurrentIndex(null); // selectedSection.fields możesz wyrzucić
  }, [selectedSection.id, selectedSection.fields]);
  Object(react__WEBPACK_IMPORTED_MODULE_5__["useEffect"])(function () {
    if (selectedSection.id !== id) {
      setTitle(selectedSection.title); // setText(selectedSection.body);
      // setId(selectedSection.id);
    }
  }, [selectedSection.id]); // useEffect(() => {
  //   setCurrentIndex()
  // }, [currentIndex])
  // console.log(selectedSection);
  // console.log(currentIndex);

  console.log(selectedSection); // const [png, ref] = useRechartToPng();
  // const fn = useCallback(async () => {
  //   FileSaver.saveAs(png, 'myChart.png');
  //   console.log(png);
  // }, [png]);

  var containerRef = Object(react__WEBPACK_IMPORTED_MODULE_5__["useRef"])();
  console.log('Selected section --> ', selectedSection); // Elements manager

  var _useState6 = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])(),
      elementsArray = _useState6[0],
      setElementsArray = _useState6[1];

  Object(react__WEBPACK_IMPORTED_MODULE_5__["useEffect"])(function () {
    // elementsArray !== selectedSection.fields
    if (!elementsArray || elementsArray !== selectedSection.fields) {
      console.log('Yeeeeep');
      setElementsArray(selectedSection.fields);
    }
  }, [selectedSection]);
  console.log(elementsArray);

  var handleOnDragEnd = function handleOnDragEnd(result) {
    if (!result.destination) return;
    var items = Array.from(elementsArray);

    var _items$splice = items.splice(result.source.index, 1),
        _items$splice2 = Object(C_off_saas_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_items$splice, 1),
        reorderedItem = _items$splice2[0];

    items.splice(result.destination.index, 0, reorderedItem);
    console.log(result);
    setElementsArray(items);
    reorderElements(items);
  };

  console.log(elementsArray);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "relative flex flex-col h-full w-full flex px-2 py-2 rounded-2xl bg-white dark:bg-background mt-1",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "w-full px-3 bg-white py-3 rounded-2xl flex items-center justify-between",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
            className: "text-lg bg-white focus:outline-none w-3/5 text-primarydark",
            placeholder: "Section title...",
            value: title ? title : '',
            onChange: function onChange(e) {
              return updateTitle(e.target.value);
            }
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 341,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "flex justify-end items-center w-2/5",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
              className: "text-primarydark text-basae mr-4 pl-2",
              children: "New element"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 348,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_image__WEBPACK_IMPORTED_MODULE_13___default.a, {
              onClick: onLeftBarShow,
              src: "/chart/pencil.svg",
              height: 40,
              width: 40
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 349,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 347,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 340,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 339,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 338,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_beautiful_dnd__WEBPACK_IMPORTED_MODULE_14__["DragDropContext"], {
      onDragEnd: handleOnDragEnd,
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_beautiful_dnd__WEBPACK_IMPORTED_MODULE_14__["Droppable"], {
        droppableId: "elements",
        children: function children(provided) {
          return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", _objectSpread(_objectSpread({
            className: "elements"
          }, provided.droppableProps), {}, {
            ref: provided.innerRef,
            className: "w-full flex justify-center items-center flex-col",
            children: [elementsArray && elementsArray.length !== 0 && elementsArray.map(function (field, currentIndex) {
              console.log('FIELD --> ', field);
              return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_beautiful_dnd__WEBPACK_IMPORTED_MODULE_14__["Draggable"], {
                draggableId: field.index,
                index: currentIndex,
                children: function children(provided) {
                  return field.type == 'text' && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Text__WEBPACK_IMPORTED_MODULE_19__["default"], {
                    fieldUpdate: fieldUpdate,
                    currentIndex: currentIndex,
                    selectedSection: selectedSection,
                    provided: provided,
                    field: field,
                    deleteField: deleteField,
                    setCurrentIndex: setCurrentIndex
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 371,
                    columnNumber: 27
                  }, _this) || field.type == 'chart' && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Chartjs__WEBPACK_IMPORTED_MODULE_16__["default"], Object(C_off_saas_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])({
                    provided: provided,
                    projectId: projectId,
                    addChart: addChart,
                    chartTypeUpdate: chartTypeUpdate,
                    currentIndex: currentIndex,
                    deleteField: deleteField,
                    containerRef: containerRef,
                    datasetLabel6Update: datasetLabel6Update,
                    datasetLabel5Update: datasetLabel5Update,
                    datasetLabel4Update: datasetLabel4Update,
                    datasetLabel3Update: datasetLabel3Update,
                    datasetLabel2Update: datasetLabel2Update,
                    datasetLabel1Update: datasetLabel1Update,
                    dataset6Update: dataset6Update,
                    dataset5Update: dataset5Update,
                    dataset4Update: dataset4Update,
                    dataset3Update: dataset3Update,
                    dataset2Update: dataset2Update,
                    dataset1Update: dataset1Update,
                    labelUpdate: labelUpdate,
                    chartLabelsUpdate: chartLabelsUpdate,
                    field: field,
                    selectedSection: selectedSection,
                    index: field.index,
                    chartValueUpdate: chartValueUpdate
                  }, "selectedSection", selectedSection), void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 382,
                    columnNumber: 27
                  }, _this) || field.type == 'header' && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Header__WEBPACK_IMPORTED_MODULE_18__["default"], {
                    fieldUpdate: fieldUpdate,
                    currentIndex: currentIndex,
                    headerUpdate: headerUpdate,
                    provided: provided,
                    deleteField: deleteField,
                    field: field
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 412,
                    columnNumber: 27
                  }, _this) || field.type == 'table' && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Table__WEBPACK_IMPORTED_MODULE_20__["default"], {
                    currentIndex: currentIndex,
                    tableUpdate: tableUpdate,
                    deleteField: deleteField,
                    provided: provided,
                    field: field
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 422,
                    columnNumber: 27
                  }, _this) || field.type == 'spacing' && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Spacing__WEBPACK_IMPORTED_MODULE_21__["default"], {
                    deleteField: deleteField,
                    provided: provided,
                    field: field
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 430,
                    columnNumber: 53
                  }, _this);
                }
              }, field.index, false, {
                fileName: _jsxFileName,
                lineNumber: 368,
                columnNumber: 21
              }, _this);
            }), provided.placeholder]
          }), void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 357,
            columnNumber: 13
          }, _this);
        }
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 355,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 354,
      columnNumber: 7
    }, _this)]
  }, void 0, true);
};

_s(EditorInputElement, "pQvWvjl+rAaBczg8i26lArWazYw=");

_c3 = EditorInputElement;
/* harmony default export */ __webpack_exports__["default"] = (EditorInputElement);

var _c, _c2, _c3;

$RefreshReg$(_c, "ReactQuill$dynamic");
$RefreshReg$(_c2, "ReactQuill");
$RefreshReg$(_c3, "EditorInputElement");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9kYXNoYm9hcmQvc3RhcnR1cC9wcm9qZWN0L2J1c2luZXNzLWFwcC9FZGl0b3IuanMiXSwibmFtZXMiOlsiUmVhY3RRdWlsbCIsImR5bmFtaWMiLCJzc3IiLCJFZGl0b3JJbnB1dEVsZW1lbnQiLCJzZWN0aW9uVGl0bGVVcGRhdGUiLCJ0YWJsZVVwZGF0ZSIsImhlYWRlclVwZGF0ZSIsInJlb3JkZXJFbGVtZW50cyIsInByb2plY3RJZCIsImFkZENoYXJ0IiwiYWRkTmV3SGVhZGVyIiwiY2hhcnRUeXBlVXBkYXRlIiwib25EYXRhc2V0TGFiZWw2VXBkYXRlIiwib25EYXRhc2V0TGFiZWw1VXBkYXRlIiwib25EYXRhc2V0TGFiZWw0VXBkYXRlIiwib25EYXRhc2V0TGFiZWwzVXBkYXRlIiwib25EYXRhc2V0TGFiZWwyVXBkYXRlIiwib25EYXRhc2V0TGFiZWwxVXBkYXRlIiwib25EYXRhc2V0NlVwZGF0ZSIsIm9uRGF0YXNldDVVcGRhdGUiLCJvbkRhdGFzZXQ0VXBkYXRlIiwib25EYXRhc2V0M1VwZGF0ZSIsIm9uRGF0YXNldDJVcGRhdGUiLCJvbkRhdGFzZXQxVXBkYXRlIiwiY2hhcnRMYWJlbHNVcGRhdGUiLCJjaGFydFZhbHVlVXBkYXRlIiwiYWRkTmV3Q2hhcnQiLCJkZWxldGVQYXJ0aWN1bGFyRmllbGQiLCJhZGROZXdGaWVsZCIsImZpZWxkVXBkYXRlIiwic2VjdGlvblVwZGF0ZSIsInNlbGVjdGVkU2VjdGlvbiIsInNlbGVjdGVkU2VjdGlvbkluZGV4Iiwic2VjdGlvbnMiLCJ1c2VTdGF0ZSIsInRpdGxlIiwic2V0VGl0bGUiLCJ0ZXh0Iiwic2V0VGV4dCIsImlkIiwic2V0SWQiLCJjdXJyZW50SW5kZXgiLCJzZXRDdXJyZW50SW5kZXgiLCJsYXN0U2VjdGlvbkluZGV4Iiwic2V0TGFzdFNlY3Rpb25JbmRleCIsIm9uTGVmdEJhclNob3ciLCJnc2FwIiwidG8iLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiYXV0b0FscGhhIiwiaGVpZ2h0IiwidHJhbnNmb3JtT3JpZ2luIiwiZHVyYXRpb24iLCJlYXNlIiwiTGluZWFyIiwiZGVsYXkiLCJ6SW5kZXgiLCJzY2FsZSIsImRlbGV0ZUZpZWxkIiwiaW5kZXgiLCJ1cGRhdGVUaXRsZSIsIm9uU2VjdGlvblRpdGxlVXBkYXRlIiwidXNlQ2FsbGJhY2siLCJkZWJvdW5jZSIsImRhdGEiLCJsYWJlbFVwZGF0ZSIsInNlbFNlY3Rpb24iLCJmaWVsZHMiLCJmaW5kSW5kZXgiLCJmaWVsZCIsImN1cnJlbnRTZWN0aW9uSW5kZXgiLCJjb25zb2xlIiwibG9nIiwiZGF0YXNldDFVcGRhdGUiLCJkYXRhc2V0MlVwZGF0ZSIsImRhdGFzZXQzVXBkYXRlIiwiZGF0YXNldDRVcGRhdGUiLCJkYXRhc2V0NVVwZGF0ZSIsImRhdGFzZXQ2VXBkYXRlIiwiZGF0YXNldExhYmVsMVVwZGF0ZSIsImRhdGFzZXRMYWJlbDJVcGRhdGUiLCJkYXRhc2V0TGFiZWwzVXBkYXRlIiwiZGF0YXNldExhYmVsNFVwZGF0ZSIsImRhdGFzZXRMYWJlbDVVcGRhdGUiLCJkYXRhc2V0TGFiZWw2VXBkYXRlIiwidXNlRWZmZWN0IiwiY29udGFpbmVyUmVmIiwidXNlUmVmIiwiZWxlbWVudHNBcnJheSIsInNldEVsZW1lbnRzQXJyYXkiLCJoYW5kbGVPbkRyYWdFbmQiLCJyZXN1bHQiLCJkZXN0aW5hdGlvbiIsIml0ZW1zIiwiQXJyYXkiLCJmcm9tIiwic3BsaWNlIiwic291cmNlIiwicmVvcmRlcmVkSXRlbSIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSIsInByb3ZpZGVkIiwiZHJvcHBhYmxlUHJvcHMiLCJpbm5lclJlZiIsImxlbmd0aCIsIm1hcCIsInR5cGUiLCJwbGFjZWhvbGRlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Q0FFQTtBQUNBO0FBQ0E7O0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBTUEs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RUFBRTRDLFFBQXBEO0FBQThELHlCQUFLLEVBQUVqQztBQUFyRTtBQUFBO0FBQUE7QUFBQTtBQUFBLDJCQTdEN0I7QUFBQTtBQURILGlCQUFnQkEsS0FBSyxDQUFDVixLQUF0QjtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQURGO0FBbUVELGFBckVELENBUkosRUE4RUcyQyxRQUFRLENBQUNNLFdBOUVaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFERDtBQUFBO0FBREg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFsQkY7QUFBQSxrQkFERjtBQTJHRCxDQWhhRDs7R0FBTTFHLGtCOztNQUFBQSxrQjtBQWthU0EsaUZBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvZGFzaGJvYXJkL3Byb2plY3RzL1twcm9qZWN0XS9idXNpbmVzcy1wbGFuLjlhZjFjNGM2MmQxZDk4NzVmNTkwLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlQ2FsbGJhY2ssIHVzZUVmZmVjdCwgdXNlTWVtbywgdXNlUmVmLCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IGR5bmFtaWMgZnJvbSAnbmV4dC9keW5hbWljJztcclxuLy8gaW1wb3J0IGRlYm91bmNlIGZyb20gJ2xvZGFzaC9kZWJvdW5jZSc7XHJcbi8vIGltcG9ydCBkZWJvdW5jZSBmcm9tICcuLi8uLi8uLi8uLi8uLi91dGlscy9oZWxwZXJzJztcclxuLy8gaW1wb3J0IGRlYm91bmNlIGZyb20gJ2xvZGFzaC9kZWJvdW5jZSc7XHJcbmltcG9ydCBkZWJvdW5jZSBmcm9tICcuLi8uLi8uLi8uLi8uLi91dGlscy9oZWxwZXJzJztcclxuaW1wb3J0IHsgdXNlU3RhdGVXaXRoUHJvbWlzZSB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL3V0aWxzL3VzZVN0YXRlV2l0aFByb21pc2UnO1xyXG5pbXBvcnQgeyB1c2VDdXN0b21TdGF0ZSB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL3V0aWxzL3VzZUN1c3RvbVN0YXRlJztcclxuY29uc3QgUmVhY3RRdWlsbCA9IGR5bmFtaWMoKCkgPT4gaW1wb3J0KCdyZWFjdC1xdWlsbCcpLCB7IHNzcjogZmFsc2UgfSk7XHJcbmltcG9ydCAnLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3JlYWN0LXF1aWxsL2Rpc3QvcXVpbGwuc25vdy5jc3MnO1xyXG5pbXBvcnQgJy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9yZWFjdC1xdWlsbC9kaXN0L3F1aWxsLmJ1YmJsZS5jc3MnO1xyXG5pbXBvcnQgJy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9yZWFjdC1xdWlsbC9kaXN0L3F1aWxsLmNvcmUuY3NzJztcclxuaW1wb3J0IEltYWdlIGZyb20gJ25leHQvaW1hZ2UnO1xyXG5pbXBvcnQgeyBEcmFnRHJvcENvbnRleHQsIERyb3BwYWJsZSwgRHJhZ2dhYmxlIH0gZnJvbSAncmVhY3QtYmVhdXRpZnVsLWRuZCc7XHJcblxyXG4vLyBpbXBvcnQgeyB1c2VSZWNoYXJ0VG9QbmcgfSBmcm9tICdyZWNoYXJ0cy10by1wbmcnO1xyXG5pbXBvcnQgRmlsZVNhdmVyIGZyb20gJ2ZpbGUtc2F2ZXInO1xyXG5pbXBvcnQgQ2hhcnRKc0NvbXBvbmVudCBmcm9tICcuL0NoYXJ0anMnO1xyXG4vLyBpbXBvcnQgUmVhY3RDaGFydCBmcm9tICcuL1JlYWNoQ2hhcnQnO1xyXG5pbXBvcnQgZ3NhcCwgeyBQb3dlcjQsIExpbmVhciB9IGZyb20gJ2dzYXAnO1xyXG5pbXBvcnQgSGVhZGVyQ29tcG9uZW50IGZyb20gJy4vSGVhZGVyJztcclxuaW1wb3J0IFRleHRFbGVtZW50IGZyb20gJy4vVGV4dCc7XHJcbmltcG9ydCBUYWJsZUVsZW1lbnQgZnJvbSAnLi9UYWJsZSc7XHJcbmltcG9ydCBTcGFjaW5nRWxlbWVudCBmcm9tICcuL1NwYWNpbmcnO1xyXG5cclxuY29uc3QgRWRpdG9ySW5wdXRFbGVtZW50ID0gKHtcclxuICBzZWN0aW9uVGl0bGVVcGRhdGUsXHJcbiAgdGFibGVVcGRhdGUsXHJcbiAgaGVhZGVyVXBkYXRlLFxyXG4gIHJlb3JkZXJFbGVtZW50cyxcclxuICBwcm9qZWN0SWQsXHJcbiAgYWRkQ2hhcnQsXHJcbiAgYWRkTmV3SGVhZGVyLFxyXG4gIGNoYXJ0VHlwZVVwZGF0ZSxcclxuICBvbkRhdGFzZXRMYWJlbDZVcGRhdGUsXHJcbiAgb25EYXRhc2V0TGFiZWw1VXBkYXRlLFxyXG4gIG9uRGF0YXNldExhYmVsNFVwZGF0ZSxcclxuICBvbkRhdGFzZXRMYWJlbDNVcGRhdGUsXHJcbiAgb25EYXRhc2V0TGFiZWwyVXBkYXRlLFxyXG4gIG9uRGF0YXNldExhYmVsMVVwZGF0ZSxcclxuICBvbkRhdGFzZXQ2VXBkYXRlLFxyXG4gIG9uRGF0YXNldDVVcGRhdGUsXHJcbiAgb25EYXRhc2V0NFVwZGF0ZSxcclxuICBvbkRhdGFzZXQzVXBkYXRlLFxyXG4gIG9uRGF0YXNldDJVcGRhdGUsXHJcbiAgb25EYXRhc2V0MVVwZGF0ZSxcclxuICBjaGFydExhYmVsc1VwZGF0ZSxcclxuICBjaGFydFZhbHVlVXBkYXRlLFxyXG4gIGFkZE5ld0NoYXJ0LFxyXG4gIGRlbGV0ZVBhcnRpY3VsYXJGaWVsZCxcclxuICBhZGROZXdGaWVsZCxcclxuICBmaWVsZFVwZGF0ZSxcclxuICBzZWN0aW9uVXBkYXRlLFxyXG4gIHNlbGVjdGVkU2VjdGlvbixcclxuICBzZWxlY3RlZFNlY3Rpb25JbmRleCxcclxuICBzZWN0aW9ucyxcclxufSkgPT4ge1xyXG4gIGNvbnN0IFt0aXRsZSwgc2V0VGl0bGVdID0gdXNlU3RhdGUoJycpO1xyXG4gIGNvbnN0IFt0ZXh0LCBzZXRUZXh0XSA9IHVzZVN0YXRlKCcnKTtcclxuICBjb25zdCBbaWQsIHNldElkXSA9IHVzZVN0YXRlKCcnKTtcclxuICBjb25zdCBbY3VycmVudEluZGV4LCBzZXRDdXJyZW50SW5kZXhdID0gdXNlU3RhdGUobnVsbCk7XHJcbiAgY29uc3QgW2xhc3RTZWN0aW9uSW5kZXgsIHNldExhc3RTZWN0aW9uSW5kZXhdID0gdXNlU3RhdGUobnVsbCk7XHJcbiAgLy8gY29uc3QgW2N1cnJlbnRTZWN0aW9uSW5kZXgsIHNldEN1cnJlbnRTZWN0aW9uSW5kZXhdID0gdXNlU3RhdGUobnVsbCk7XHJcblxyXG4gIGNvbnN0IG9uTGVmdEJhclNob3cgPSAoKSA9PiB7XHJcbiAgICAvLyAtLS0gVkVSU0lPTiAxIC0tLVxyXG4gICAgLy8gZ3NhcC50byhkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbGVmdC1iYXInKSwge3dpZHRoOiAnMTYwcHgnLCB0cmFuc2Zvcm1PcmlnaW46ICdsZWZ0JywgZHVyYXRpb246IDEsIGVhc2U6IExpbmVhciB9KTtcclxuICAgIC8vIC8vIEVYSVRcclxuICAgIC8vIGdzYXAudG8oZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2V4aXQnKSwgeyBhdXRvQWxwaGE6IDEsIGR1cmF0aW9uOiAxLCBlYXNlOiBMaW5lYXIsIGRlbGF5OiAyIH0pXHJcbiAgICAvLyAvLyBJTUFHRVNcclxuICAgIC8vIGdzYXAudG8oZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2xlZnQtZWxlbWVudCcpLCB7IHNjYWxlOiAxLCBkdXJhdGlvbjogMSwgZWFzZTogTGluZWFyLCBkZWxheTogMSB9KTtcclxuICAgIC8vIGdzYXAudG8oZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2xlZnQtZWxlbWVudDEnKSwgeyBzY2FsZTogMSwgZHVyYXRpb246IDEsIGVhc2U6IExpbmVhciwgZGVsYXk6IDEgfSk7XHJcbiAgICAvLyBnc2FwLnRvKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdsZWZ0LWVsZW1lbnQyJyksIHsgc2NhbGU6IDEsIGR1cmF0aW9uOiAxLCBlYXNlOiBMaW5lYXIsIGRlbGF5OiAxIH0pO1xyXG4gICAgLy8gLy8gVEVYVFxyXG4gICAgLy8gZ3NhcC50byhkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbGVmdC10ZXh0JyksIHsgc2NhbGU6IDEsIGR1cmF0aW9uOiAxLCBlYXNlOiBMaW5lYXIsIGRlbGF5OiAxIH0pO1xyXG4gICAgLy8gZ3NhcC50byhkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbGVmdC10ZXh0MScpLCB7IHNjYWxlOiAxLCBkdXJhdGlvbjogMSwgZWFzZTogTGluZWFyLCBkZWxheTogMSB9KTtcclxuICAgIC8vIGdzYXAudG8oZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2xlZnQtdGV4dDInKSwgeyBzY2FsZTogMSwgZHVyYXRpb246IDEsIGVhc2U6IExpbmVhciwgZGVsYXk6IDEgfSk7XHJcblxyXG4gICAgLy8gLS0tIFZFUlNJT04gMiAtLS1cclxuICAgIC8vIENPTlRBSU5FUlNcclxuICAgIGdzYXAudG8oZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRhaW5lcicpLCB7IGF1dG9BbHBoYTogMSB9KTtcclxuICAgIGdzYXAudG8oZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRhaW5lcjEnKSwgeyBhdXRvQWxwaGE6IDEgfSk7XHJcbiAgICBnc2FwLnRvKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250YWluZXIyJyksIHsgYXV0b0FscGhhOiAxIH0pO1xyXG4gICAgZ3NhcC50byhkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGFpbmVyMycpLCB7IGF1dG9BbHBoYTogMSB9KTtcclxuICAgIGdzYXAudG8oZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRhaW5lcjQnKSwgeyBhdXRvQWxwaGE6IDEgfSk7XHJcbiAgICAvLyBMRUZUIEJBUlxyXG4gICAgZ3NhcC50byhkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbGVmdC1iYXInKSwgeyBoZWlnaHQ6ICcxMDB2aCcsIHRyYW5zZm9ybU9yaWdpbjogJ3RvcCcsIGR1cmF0aW9uOiAyLCBlYXNlOiBMaW5lYXIgfSk7XHJcbiAgICAvLyBFWElUXHJcbiAgICBnc2FwLnRvKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdleGl0JyksIHsgYXV0b0FscGhhOiAxLCBkdXJhdGlvbjogMSwgZWFzZTogTGluZWFyLCBkZWxheTogMiB9KTtcclxuICAgIC8vIElNQUdFU1xyXG4gICAgZ3NhcC50byhkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbGVmdC1lbGVtZW50JyksIHtcclxuICAgICAgekluZGV4OiA1MCxcclxuICAgICAgc2NhbGU6IDEsXHJcbiAgICAgIHRyYW5zZm9ybU9yaWdpbjogJ3RvcCcsXHJcbiAgICAgIGR1cmF0aW9uOiAxLFxyXG4gICAgICBlYXNlOiBMaW5lYXIsXHJcbiAgICAgIGRlbGF5OiAwLjMsXHJcbiAgICB9KTtcclxuICAgIGdzYXAudG8oZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2xlZnQtZWxlbWVudDEnKSwge1xyXG4gICAgICB6SW5kZXg6IDUwLFxyXG4gICAgICBzY2FsZTogMSxcclxuICAgICAgdHJhbnNmb3JtT3JpZ2luOiAndG9wJyxcclxuICAgICAgZHVyYXRpb246IDEsXHJcbiAgICAgIGVhc2U6IExpbmVhcixcclxuICAgICAgZGVsYXk6IDAuNSxcclxuICAgIH0pO1xyXG4gICAgZ3NhcC50byhkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbGVmdC1lbGVtZW50MicpLCB7XHJcbiAgICAgIHpJbmRleDogNTAsXHJcbiAgICAgIHNjYWxlOiAxLFxyXG4gICAgICB0cmFuc2Zvcm1PcmlnaW46ICd0b3AnLFxyXG4gICAgICBkdXJhdGlvbjogMSxcclxuICAgICAgZWFzZTogTGluZWFyLFxyXG4gICAgICBkZWxheTogMC43LFxyXG4gICAgfSk7XHJcbiAgICBnc2FwLnRvKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdsZWZ0LWVsZW1lbnQzJyksIHtcclxuICAgICAgekluZGV4OiA1MCxcclxuICAgICAgc2NhbGU6IDEsXHJcbiAgICAgIHRyYW5zZm9ybU9yaWdpbjogJ3RvcCcsXHJcbiAgICAgIGR1cmF0aW9uOiAxLFxyXG4gICAgICBlYXNlOiBMaW5lYXIsXHJcbiAgICAgIGRlbGF5OiAwLjksXHJcbiAgICB9KTtcclxuICAgIGdzYXAudG8oZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2xlZnQtZWxlbWVudDQnKSwge1xyXG4gICAgICB6SW5kZXg6IDUwLFxyXG4gICAgICBzY2FsZTogMSxcclxuICAgICAgdHJhbnNmb3JtT3JpZ2luOiAndG9wJyxcclxuICAgICAgZHVyYXRpb246IDEsXHJcbiAgICAgIGVhc2U6IExpbmVhcixcclxuICAgICAgZGVsYXk6IDEuMSxcclxuICAgIH0pO1xyXG4gICAgLy8gVEVYVFxyXG4gICAgZ3NhcC50byhkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbGVmdC10ZXh0JyksIHsgekluZGV4OiA1MCwgc2NhbGU6IDEsIHRyYW5zZm9ybU9yaWdpbjogJ3RvcCcsIGR1cmF0aW9uOiAxLCBlYXNlOiBMaW5lYXIsIGRlbGF5OiAwLjMgfSk7XHJcbiAgICBnc2FwLnRvKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdsZWZ0LXRleHQxJyksIHsgekluZGV4OiA1MCwgc2NhbGU6IDEsIHRyYW5zZm9ybU9yaWdpbjogJ3RvcCcsIGR1cmF0aW9uOiAxLCBlYXNlOiBMaW5lYXIsIGRlbGF5OiAwLjUgfSk7XHJcbiAgICBnc2FwLnRvKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdsZWZ0LXRleHQyJyksIHsgekluZGV4OiA1MCwgc2NhbGU6IDEsIHRyYW5zZm9ybU9yaWdpbjogJ3RvcCcsIGR1cmF0aW9uOiAxLCBlYXNlOiBMaW5lYXIsIGRlbGF5OiAwLjcgfSk7XHJcbiAgICBnc2FwLnRvKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdsZWZ0LXRleHQzJyksIHsgekluZGV4OiA1MCwgc2NhbGU6IDEsIHRyYW5zZm9ybU9yaWdpbjogJ3RvcCcsIGR1cmF0aW9uOiAxLCBlYXNlOiBMaW5lYXIsIGRlbGF5OiAwLjkgfSk7XHJcbiAgICBnc2FwLnRvKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdsZWZ0LXRleHQ0JyksIHsgekluZGV4OiA1MCwgc2NhbGU6IDEsIHRyYW5zZm9ybU9yaWdpbjogJ3RvcCcsIGR1cmF0aW9uOiAxLCBlYXNlOiBMaW5lYXIsIGRlbGF5OiAxLjEgfSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgZGVsZXRlRmllbGQgPSAoaW5kZXgpID0+IHtcclxuICAgIGRlbGV0ZVBhcnRpY3VsYXJGaWVsZChpbmRleCk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgdXBkYXRlVGl0bGUgPSBhc3luYyAodGl0bGUpID0+IHtcclxuICAgIGF3YWl0IHNldFRpdGxlKHRpdGxlKTtcclxuICAgIG9uU2VjdGlvblRpdGxlVXBkYXRlKHRpdGxlKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBvblNlY3Rpb25UaXRsZVVwZGF0ZSA9IHVzZUNhbGxiYWNrKFxyXG4gICAgZGVib3VuY2UoKGRhdGEpID0+IHtcclxuICAgICAgc2VjdGlvblRpdGxlVXBkYXRlKGRhdGEpO1xyXG4gICAgfSwgNTAwKSxcclxuICAgIFtdXHJcbiAgKTtcclxuXHJcbiAgY29uc3QgbGFiZWxVcGRhdGUgPSB1c2VDYWxsYmFjayhcclxuICAgIGRlYm91bmNlKGFzeW5jIChkYXRhKSA9PiB7XHJcbiAgICAgIGNvbnN0IGN1cnJlbnRTZWN0aW9uSW5kZXggPSBhd2FpdCBkYXRhLnNlbFNlY3Rpb24uZmllbGRzLmZpbmRJbmRleCgoZmllbGQpID0+IGZpZWxkLmluZGV4ID09IGRhdGEuaW5kZXgpO1xyXG4gICAgICBjb25zb2xlLmxvZyhkYXRhKTtcclxuICAgICAgY2hhcnRMYWJlbHNVcGRhdGUoZGF0YSwgZGF0YS5pbmRleCwgY3VycmVudFNlY3Rpb25JbmRleCwgZGF0YS5zZWxTZWN0aW9uKTtcclxuICAgIH0sIDUwMCksXHJcbiAgICBbXVxyXG4gICk7XHJcblxyXG4gIC8vIERhdGFzZXQxIHVwZGF0ZVxyXG4gIGNvbnN0IGRhdGFzZXQxVXBkYXRlID0gdXNlQ2FsbGJhY2soXHJcbiAgICBkZWJvdW5jZShhc3luYyAoZGF0YSkgPT4ge1xyXG4gICAgICBjb25zdCBjdXJyZW50U2VjdGlvbkluZGV4ID0gYXdhaXQgZGF0YS5zZWxTZWN0aW9uLmZpZWxkcy5maW5kSW5kZXgoKGZpZWxkKSA9PiBmaWVsZC5pbmRleCA9PSBkYXRhLmluZGV4KTtcclxuICAgICAgY29uc29sZS5sb2coZGF0YSk7XHJcbiAgICAgIG9uRGF0YXNldDFVcGRhdGUoZGF0YSwgZGF0YS5pbmRleCwgY3VycmVudFNlY3Rpb25JbmRleCwgZGF0YS5zZWxTZWN0aW9uKTtcclxuICAgIH0sIDUwMCksXHJcbiAgICBbXVxyXG4gICk7XHJcblxyXG4gIC8vIERhdGFzZXQyIHVwZGF0ZVxyXG4gIGNvbnN0IGRhdGFzZXQyVXBkYXRlID0gdXNlQ2FsbGJhY2soXHJcbiAgICBkZWJvdW5jZShhc3luYyAoZGF0YSkgPT4ge1xyXG4gICAgICBjb25zdCBjdXJyZW50U2VjdGlvbkluZGV4ID0gYXdhaXQgZGF0YS5zZWxTZWN0aW9uLmZpZWxkcy5maW5kSW5kZXgoKGZpZWxkKSA9PiBmaWVsZC5pbmRleCA9PSBkYXRhLmluZGV4KTtcclxuICAgICAgY29uc29sZS5sb2coZGF0YSk7XHJcbiAgICAgIG9uRGF0YXNldDJVcGRhdGUoZGF0YSwgZGF0YS5pbmRleCwgY3VycmVudFNlY3Rpb25JbmRleCwgZGF0YS5zZWxTZWN0aW9uKTtcclxuICAgIH0sIDUwMCksXHJcbiAgICBbXVxyXG4gICk7XHJcblxyXG4gIC8vIERhdGFzZXQzIHVwZGF0ZVxyXG4gIGNvbnN0IGRhdGFzZXQzVXBkYXRlID0gdXNlQ2FsbGJhY2soXHJcbiAgICBkZWJvdW5jZShhc3luYyAoZGF0YSkgPT4ge1xyXG4gICAgICBjb25zdCBjdXJyZW50U2VjdGlvbkluZGV4ID0gYXdhaXQgZGF0YS5zZWxTZWN0aW9uLmZpZWxkcy5maW5kSW5kZXgoKGZpZWxkKSA9PiBmaWVsZC5pbmRleCA9PSBkYXRhLmluZGV4KTtcclxuICAgICAgY29uc29sZS5sb2coZGF0YSk7XHJcbiAgICAgIG9uRGF0YXNldDNVcGRhdGUoZGF0YSwgZGF0YS5pbmRleCwgY3VycmVudFNlY3Rpb25JbmRleCwgZGF0YS5zZWxTZWN0aW9uKTtcclxuICAgIH0sIDUwMCksXHJcbiAgICBbXVxyXG4gICk7XHJcblxyXG4gIC8vIERhdGFzZXQ0IHVwZGF0ZVxyXG4gIGNvbnN0IGRhdGFzZXQ0VXBkYXRlID0gdXNlQ2FsbGJhY2soXHJcbiAgICBkZWJvdW5jZShhc3luYyAoZGF0YSkgPT4ge1xyXG4gICAgICBjb25zdCBjdXJyZW50U2VjdGlvbkluZGV4ID0gYXdhaXQgZGF0YS5zZWxTZWN0aW9uLmZpZWxkcy5maW5kSW5kZXgoKGZpZWxkKSA9PiBmaWVsZC5pbmRleCA9PSBkYXRhLmluZGV4KTtcclxuICAgICAgY29uc29sZS5sb2coZGF0YSk7XHJcbiAgICAgIG9uRGF0YXNldDRVcGRhdGUoZGF0YSwgZGF0YS5pbmRleCwgY3VycmVudFNlY3Rpb25JbmRleCwgZGF0YS5zZWxTZWN0aW9uKTtcclxuICAgIH0sIDUwMCksXHJcbiAgICBbXVxyXG4gICk7XHJcblxyXG4gIC8vIERhdGFzZXQ1IHVwZGF0ZVxyXG4gIGNvbnN0IGRhdGFzZXQ1VXBkYXRlID0gdXNlQ2FsbGJhY2soXHJcbiAgICBkZWJvdW5jZShhc3luYyAoZGF0YSkgPT4ge1xyXG4gICAgICBjb25zdCBjdXJyZW50U2VjdGlvbkluZGV4ID0gYXdhaXQgZGF0YS5zZWxTZWN0aW9uLmZpZWxkcy5maW5kSW5kZXgoKGZpZWxkKSA9PiBmaWVsZC5pbmRleCA9PSBkYXRhLmluZGV4KTtcclxuICAgICAgY29uc29sZS5sb2coZGF0YSk7XHJcbiAgICAgIG9uRGF0YXNldDVVcGRhdGUoZGF0YSwgZGF0YS5pbmRleCwgY3VycmVudFNlY3Rpb25JbmRleCwgZGF0YS5zZWxTZWN0aW9uKTtcclxuICAgIH0sIDUwMCksXHJcbiAgICBbXVxyXG4gICk7XHJcblxyXG4gIC8vIERhdGFzZXQ2IHVwZGF0ZVxyXG4gIGNvbnN0IGRhdGFzZXQ2VXBkYXRlID0gdXNlQ2FsbGJhY2soXHJcbiAgICBkZWJvdW5jZShhc3luYyAoZGF0YSkgPT4ge1xyXG4gICAgICBjb25zdCBjdXJyZW50U2VjdGlvbkluZGV4ID0gYXdhaXQgZGF0YS5zZWxTZWN0aW9uLmZpZWxkcy5maW5kSW5kZXgoKGZpZWxkKSA9PiBmaWVsZC5pbmRleCA9PSBkYXRhLmluZGV4KTtcclxuICAgICAgY29uc29sZS5sb2coZGF0YSk7XHJcbiAgICAgIG9uRGF0YXNldDZVcGRhdGUoZGF0YSwgZGF0YS5pbmRleCwgY3VycmVudFNlY3Rpb25JbmRleCwgZGF0YS5zZWxTZWN0aW9uKTtcclxuICAgIH0sIDUwMCksXHJcbiAgICBbXVxyXG4gICk7XHJcblxyXG4gIC8vIERhdGFzZXQgbGFiZWxzIHVwZGF0ZVxyXG4gIGNvbnN0IGRhdGFzZXRMYWJlbDFVcGRhdGUgPSB1c2VDYWxsYmFjayhcclxuICAgIGRlYm91bmNlKGFzeW5jIChkYXRhKSA9PiB7XHJcbiAgICAgIGNvbnN0IGN1cnJlbnRTZWN0aW9uSW5kZXggPSBhd2FpdCBkYXRhLnNlbFNlY3Rpb24uZmllbGRzLmZpbmRJbmRleCgoZmllbGQpID0+IGZpZWxkLmluZGV4ID09IGRhdGEuaW5kZXgpO1xyXG4gICAgICBjb25zb2xlLmxvZyhkYXRhKTtcclxuICAgICAgb25EYXRhc2V0TGFiZWwxVXBkYXRlKGRhdGEsIGRhdGEuaW5kZXgsIGN1cnJlbnRTZWN0aW9uSW5kZXgsIGRhdGEuc2VsU2VjdGlvbik7XHJcbiAgICB9LCA1MDApLFxyXG4gICAgW11cclxuICApO1xyXG5cclxuICBjb25zdCBkYXRhc2V0TGFiZWwyVXBkYXRlID0gdXNlQ2FsbGJhY2soXHJcbiAgICBkZWJvdW5jZShhc3luYyAoZGF0YSkgPT4ge1xyXG4gICAgICBjb25zdCBjdXJyZW50U2VjdGlvbkluZGV4ID0gYXdhaXQgZGF0YS5zZWxTZWN0aW9uLmZpZWxkcy5maW5kSW5kZXgoKGZpZWxkKSA9PiBmaWVsZC5pbmRleCA9PSBkYXRhLmluZGV4KTtcclxuICAgICAgY29uc29sZS5sb2coZGF0YSk7XHJcbiAgICAgIG9uRGF0YXNldExhYmVsMlVwZGF0ZShkYXRhLCBkYXRhLmluZGV4LCBjdXJyZW50U2VjdGlvbkluZGV4LCBkYXRhLnNlbFNlY3Rpb24pO1xyXG4gICAgfSwgNTAwKSxcclxuICAgIFtdXHJcbiAgKTtcclxuXHJcbiAgY29uc3QgZGF0YXNldExhYmVsM1VwZGF0ZSA9IHVzZUNhbGxiYWNrKFxyXG4gICAgZGVib3VuY2UoYXN5bmMgKGRhdGEpID0+IHtcclxuICAgICAgY29uc3QgY3VycmVudFNlY3Rpb25JbmRleCA9IGF3YWl0IGRhdGEuc2VsU2VjdGlvbi5maWVsZHMuZmluZEluZGV4KChmaWVsZCkgPT4gZmllbGQuaW5kZXggPT0gZGF0YS5pbmRleCk7XHJcbiAgICAgIGNvbnNvbGUubG9nKGRhdGEpO1xyXG4gICAgICBvbkRhdGFzZXRMYWJlbDNVcGRhdGUoZGF0YSwgZGF0YS5pbmRleCwgY3VycmVudFNlY3Rpb25JbmRleCwgZGF0YS5zZWxTZWN0aW9uKTtcclxuICAgIH0sIDUwMCksXHJcbiAgICBbXVxyXG4gICk7XHJcblxyXG4gIGNvbnN0IGRhdGFzZXRMYWJlbDRVcGRhdGUgPSB1c2VDYWxsYmFjayhcclxuICAgIGRlYm91bmNlKGFzeW5jIChkYXRhKSA9PiB7XHJcbiAgICAgIGNvbnN0IGN1cnJlbnRTZWN0aW9uSW5kZXggPSBhd2FpdCBkYXRhLnNlbFNlY3Rpb24uZmllbGRzLmZpbmRJbmRleCgoZmllbGQpID0+IGZpZWxkLmluZGV4ID09IGRhdGEuaW5kZXgpO1xyXG4gICAgICBjb25zb2xlLmxvZyhkYXRhKTtcclxuICAgICAgb25EYXRhc2V0TGFiZWw0VXBkYXRlKGRhdGEsIGRhdGEuaW5kZXgsIGN1cnJlbnRTZWN0aW9uSW5kZXgsIGRhdGEuc2VsU2VjdGlvbik7XHJcbiAgICB9LCA1MDApLFxyXG4gICAgW11cclxuICApO1xyXG5cclxuICBjb25zdCBkYXRhc2V0TGFiZWw1VXBkYXRlID0gdXNlQ2FsbGJhY2soXHJcbiAgICBkZWJvdW5jZShhc3luYyAoZGF0YSkgPT4ge1xyXG4gICAgICBjb25zdCBjdXJyZW50U2VjdGlvbkluZGV4ID0gYXdhaXQgZGF0YS5zZWxTZWN0aW9uLmZpZWxkcy5maW5kSW5kZXgoKGZpZWxkKSA9PiBmaWVsZC5pbmRleCA9PSBkYXRhLmluZGV4KTtcclxuICAgICAgY29uc29sZS5sb2coZGF0YSk7XHJcbiAgICAgIG9uRGF0YXNldExhYmVsNVVwZGF0ZShkYXRhLCBkYXRhLmluZGV4LCBjdXJyZW50U2VjdGlvbkluZGV4LCBkYXRhLnNlbFNlY3Rpb24pO1xyXG4gICAgfSwgNTAwKSxcclxuICAgIFtdXHJcbiAgKTtcclxuXHJcbiAgY29uc3QgZGF0YXNldExhYmVsNlVwZGF0ZSA9IHVzZUNhbGxiYWNrKFxyXG4gICAgZGVib3VuY2UoYXN5bmMgKGRhdGEpID0+IHtcclxuICAgICAgY29uc3QgY3VycmVudFNlY3Rpb25JbmRleCA9IGF3YWl0IGRhdGEuc2VsU2VjdGlvbi5maWVsZHMuZmluZEluZGV4KChmaWVsZCkgPT4gZmllbGQuaW5kZXggPT0gZGF0YS5pbmRleCk7XHJcbiAgICAgIGNvbnNvbGUubG9nKGRhdGEpO1xyXG4gICAgICBvbkRhdGFzZXRMYWJlbDZVcGRhdGUoZGF0YSwgZGF0YS5pbmRleCwgY3VycmVudFNlY3Rpb25JbmRleCwgZGF0YS5zZWxTZWN0aW9uKTtcclxuICAgIH0sIDUwMCksXHJcbiAgICBbXVxyXG4gICk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBzZXRDdXJyZW50SW5kZXgobnVsbCk7XHJcbiAgICAvLyBzZWxlY3RlZFNlY3Rpb24uZmllbGRzIG1vxbxlc3ogd3lyenVjacSHXHJcbiAgfSwgW3NlbGVjdGVkU2VjdGlvbi5pZCwgc2VsZWN0ZWRTZWN0aW9uLmZpZWxkc10pO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaWYgKHNlbGVjdGVkU2VjdGlvbi5pZCAhPT0gaWQpIHtcclxuICAgICAgc2V0VGl0bGUoc2VsZWN0ZWRTZWN0aW9uLnRpdGxlKTtcclxuICAgICAgLy8gc2V0VGV4dChzZWxlY3RlZFNlY3Rpb24uYm9keSk7XHJcbiAgICAgIC8vIHNldElkKHNlbGVjdGVkU2VjdGlvbi5pZCk7XHJcbiAgICB9XHJcbiAgfSwgW3NlbGVjdGVkU2VjdGlvbi5pZF0pO1xyXG5cclxuICAvLyB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gIC8vICAgc2V0Q3VycmVudEluZGV4KClcclxuICAvLyB9LCBbY3VycmVudEluZGV4XSlcclxuICAvLyBjb25zb2xlLmxvZyhzZWxlY3RlZFNlY3Rpb24pO1xyXG4gIC8vIGNvbnNvbGUubG9nKGN1cnJlbnRJbmRleCk7XHJcblxyXG4gIGNvbnNvbGUubG9nKHNlbGVjdGVkU2VjdGlvbik7XHJcblxyXG4gIC8vIGNvbnN0IFtwbmcsIHJlZl0gPSB1c2VSZWNoYXJ0VG9QbmcoKTtcclxuICAvLyBjb25zdCBmbiA9IHVzZUNhbGxiYWNrKGFzeW5jICgpID0+IHtcclxuICAvLyAgIEZpbGVTYXZlci5zYXZlQXMocG5nLCAnbXlDaGFydC5wbmcnKTtcclxuICAvLyAgIGNvbnNvbGUubG9nKHBuZyk7XHJcbiAgLy8gfSwgW3BuZ10pO1xyXG5cclxuICBjb25zdCBjb250YWluZXJSZWYgPSB1c2VSZWYoKTtcclxuXHJcbiAgY29uc29sZS5sb2coJ1NlbGVjdGVkIHNlY3Rpb24gLS0+ICcsIHNlbGVjdGVkU2VjdGlvbik7XHJcblxyXG4gIC8vIEVsZW1lbnRzIG1hbmFnZXJcclxuICBjb25zdCBbZWxlbWVudHNBcnJheSwgc2V0RWxlbWVudHNBcnJheV0gPSB1c2VTdGF0ZSgpO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgLy8gZWxlbWVudHNBcnJheSAhPT0gc2VsZWN0ZWRTZWN0aW9uLmZpZWxkc1xyXG4gICAgaWYgKCFlbGVtZW50c0FycmF5IHx8IGVsZW1lbnRzQXJyYXkgIT09IHNlbGVjdGVkU2VjdGlvbi5maWVsZHMpIHtcclxuICAgICAgY29uc29sZS5sb2coJ1llZWVlZXAnKTtcclxuICAgICAgc2V0RWxlbWVudHNBcnJheShzZWxlY3RlZFNlY3Rpb24uZmllbGRzKTtcclxuICAgIH1cclxuICB9LCBbc2VsZWN0ZWRTZWN0aW9uXSk7XHJcbiAgY29uc29sZS5sb2coZWxlbWVudHNBcnJheSk7XHJcblxyXG4gIGNvbnN0IGhhbmRsZU9uRHJhZ0VuZCA9IChyZXN1bHQpID0+IHtcclxuICAgIGlmICghcmVzdWx0LmRlc3RpbmF0aW9uKSByZXR1cm47XHJcbiAgICBjb25zdCBpdGVtcyA9IEFycmF5LmZyb20oZWxlbWVudHNBcnJheSk7XHJcbiAgICBjb25zdCBbcmVvcmRlcmVkSXRlbV0gPSBpdGVtcy5zcGxpY2UocmVzdWx0LnNvdXJjZS5pbmRleCwgMSk7XHJcbiAgICBpdGVtcy5zcGxpY2UocmVzdWx0LmRlc3RpbmF0aW9uLmluZGV4LCAwLCByZW9yZGVyZWRJdGVtKTtcclxuXHJcbiAgICBjb25zb2xlLmxvZyhyZXN1bHQpO1xyXG4gICAgc2V0RWxlbWVudHNBcnJheShpdGVtcyk7XHJcbiAgICByZW9yZGVyRWxlbWVudHMoaXRlbXMpO1xyXG4gIH07XHJcblxyXG4gIGNvbnNvbGUubG9nKGVsZW1lbnRzQXJyYXkpO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgey8qIDxDaGFydENvbXBvbmVudCAvPiAqL31cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWxhdGl2ZSBmbGV4IGZsZXgtY29sIGgtZnVsbCB3LWZ1bGwgZmxleCBweC0yIHB5LTIgcm91bmRlZC0yeGwgYmctd2hpdGUgZGFyazpiZy1iYWNrZ3JvdW5kIG10LTFcIj5cclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGwgcHgtMyBiZy13aGl0ZSBweS0zIHJvdW5kZWQtMnhsIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktYmV0d2VlblwiPlxyXG4gICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ0ZXh0LWxnIGJnLXdoaXRlIGZvY3VzOm91dGxpbmUtbm9uZSB3LTMvNSB0ZXh0LXByaW1hcnlkYXJrXCJcclxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlNlY3Rpb24gdGl0bGUuLi5cIlxyXG4gICAgICAgICAgICAgIHZhbHVlPXt0aXRsZSA/IHRpdGxlIDogJyd9XHJcbiAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiB1cGRhdGVUaXRsZShlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWVuZCBpdGVtcy1jZW50ZXIgdy0yLzVcIj5cclxuICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXByaW1hcnlkYXJrIHRleHQtYmFzYWUgbXItNCBwbC0yXCI+TmV3IGVsZW1lbnQ8L3A+XHJcbiAgICAgICAgICAgICAgPEltYWdlIG9uQ2xpY2s9e29uTGVmdEJhclNob3d9IHNyYz1cIi9jaGFydC9wZW5jaWwuc3ZnXCIgaGVpZ2h0PXs0MH0gd2lkdGg9ezQwfSAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPERyYWdEcm9wQ29udGV4dCBvbkRyYWdFbmQ9e2hhbmRsZU9uRHJhZ0VuZH0+XHJcbiAgICAgICAgPERyb3BwYWJsZSBkcm9wcGFibGVJZD1cImVsZW1lbnRzXCI+XHJcbiAgICAgICAgICB7KHByb3ZpZGVkKSA9PiAoXHJcbiAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJlbGVtZW50c1wiXHJcbiAgICAgICAgICAgICAgey4uLnByb3ZpZGVkLmRyb3BwYWJsZVByb3BzfVxyXG4gICAgICAgICAgICAgIHJlZj17cHJvdmlkZWQuaW5uZXJSZWZ9XHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy1mdWxsIGZsZXgganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyIGZsZXgtY29sXCJcclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIHtlbGVtZW50c0FycmF5ICYmXHJcbiAgICAgICAgICAgICAgICBlbGVtZW50c0FycmF5Lmxlbmd0aCAhPT0gMCAmJlxyXG4gICAgICAgICAgICAgICAgZWxlbWVudHNBcnJheS5tYXAoKGZpZWxkLCBjdXJyZW50SW5kZXgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ0ZJRUxEIC0tPiAnLCBmaWVsZCk7XHJcbiAgICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPERyYWdnYWJsZSBrZXk9e2ZpZWxkLmluZGV4fSBkcmFnZ2FibGVJZD17ZmllbGQuaW5kZXh9IGluZGV4PXtjdXJyZW50SW5kZXh9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgeyhwcm92aWRlZCkgPT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgKGZpZWxkLnR5cGUgPT0gJ3RleHQnICYmIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8VGV4dEVsZW1lbnRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpZWxkVXBkYXRlPXtmaWVsZFVwZGF0ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN1cnJlbnRJbmRleD17Y3VycmVudEluZGV4fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0ZWRTZWN0aW9uPXtzZWxlY3RlZFNlY3Rpb259XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm92aWRlZD17cHJvdmlkZWR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWVsZD17ZmllbGR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWxldGVGaWVsZD17ZGVsZXRlRmllbGR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRDdXJyZW50SW5kZXg9e3NldEN1cnJlbnRJbmRleH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICApKSB8fFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAoZmllbGQudHlwZSA9PSAnY2hhcnQnICYmIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8Q2hhcnRKc0NvbXBvbmVudFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvdmlkZWQ9e3Byb3ZpZGVkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvamVjdElkPXtwcm9qZWN0SWR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhZGRDaGFydD17YWRkQ2hhcnR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGFydFR5cGVVcGRhdGU9e2NoYXJ0VHlwZVVwZGF0ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN1cnJlbnRJbmRleD17Y3VycmVudEluZGV4fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVsZXRlRmllbGQ9e2RlbGV0ZUZpZWxkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGFpbmVyUmVmPXtjb250YWluZXJSZWZ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhc2V0TGFiZWw2VXBkYXRlPXtkYXRhc2V0TGFiZWw2VXBkYXRlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YXNldExhYmVsNVVwZGF0ZT17ZGF0YXNldExhYmVsNVVwZGF0ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGFzZXRMYWJlbDRVcGRhdGU9e2RhdGFzZXRMYWJlbDRVcGRhdGV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhc2V0TGFiZWwzVXBkYXRlPXtkYXRhc2V0TGFiZWwzVXBkYXRlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YXNldExhYmVsMlVwZGF0ZT17ZGF0YXNldExhYmVsMlVwZGF0ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGFzZXRMYWJlbDFVcGRhdGU9e2RhdGFzZXRMYWJlbDFVcGRhdGV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhc2V0NlVwZGF0ZT17ZGF0YXNldDZVcGRhdGV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhc2V0NVVwZGF0ZT17ZGF0YXNldDVVcGRhdGV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhc2V0NFVwZGF0ZT17ZGF0YXNldDRVcGRhdGV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhc2V0M1VwZGF0ZT17ZGF0YXNldDNVcGRhdGV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhc2V0MlVwZGF0ZT17ZGF0YXNldDJVcGRhdGV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhc2V0MVVwZGF0ZT17ZGF0YXNldDFVcGRhdGV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbFVwZGF0ZT17bGFiZWxVcGRhdGV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGFydExhYmVsc1VwZGF0ZT17Y2hhcnRMYWJlbHNVcGRhdGV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWVsZD17ZmllbGR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RlZFNlY3Rpb249e3NlbGVjdGVkU2VjdGlvbn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGluZGV4PXtmaWVsZC5pbmRleH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoYXJ0VmFsdWVVcGRhdGU9e2NoYXJ0VmFsdWVVcGRhdGV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RlZFNlY3Rpb249e3NlbGVjdGVkU2VjdGlvbn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICApKSB8fFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAoZmllbGQudHlwZSA9PSAnaGVhZGVyJyAmJiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPEhlYWRlckNvbXBvbmVudFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZmllbGRVcGRhdGU9e2ZpZWxkVXBkYXRlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY3VycmVudEluZGV4PXtjdXJyZW50SW5kZXh9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWFkZXJVcGRhdGU9e2hlYWRlclVwZGF0ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb3ZpZGVkPXtwcm92aWRlZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlbGV0ZUZpZWxkPXtkZWxldGVGaWVsZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpZWxkPXtmaWVsZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICApKSB8fFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAoZmllbGQudHlwZSA9PSAndGFibGUnICYmIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8VGFibGVFbGVtZW50XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjdXJyZW50SW5kZXg9e2N1cnJlbnRJbmRleH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhYmxlVXBkYXRlPXt0YWJsZVVwZGF0ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlbGV0ZUZpZWxkPXtkZWxldGVGaWVsZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb3ZpZGVkPXtwcm92aWRlZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpZWxkPXtmaWVsZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICApKSB8fFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAoZmllbGQudHlwZSA9PSAnc3BhY2luZycgJiYgPFNwYWNpbmdFbGVtZW50IGRlbGV0ZUZpZWxkPXtkZWxldGVGaWVsZH0gcHJvdmlkZWQ9e3Byb3ZpZGVkfSBmaWVsZD17ZmllbGR9IC8+KVxyXG4gICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvRHJhZ2dhYmxlPlxyXG4gICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAgICAge3Byb3ZpZGVkLnBsYWNlaG9sZGVyfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICl9XHJcbiAgICAgICAgPC9Ecm9wcGFibGU+XHJcbiAgICAgIDwvRHJhZ0Ryb3BDb250ZXh0PlxyXG4gICAgPC8+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEVkaXRvcklucHV0RWxlbWVudDtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==