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
  console.log('Elements array after reorder ==> ', elementsArray);
  console.log('Selected section after reorder ==> ', selectedSection);

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
            lineNumber: 342,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "flex justify-end items-center w-2/5",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
              className: "text-primarydark text-basae mr-4 pl-2",
              children: "New element"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 349,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_image__WEBPACK_IMPORTED_MODULE_13___default.a, {
              onClick: onLeftBarShow,
              src: "/chart/pencil.svg",
              height: 40,
              width: 40
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 350,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 348,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 341,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 340,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 339,
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
                    lineNumber: 372,
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
                    lineNumber: 383,
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
                    lineNumber: 413,
                    columnNumber: 27
                  }, _this) || field.type == 'table' && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Table__WEBPACK_IMPORTED_MODULE_20__["default"], {
                    currentIndex: currentIndex,
                    tableUpdate: tableUpdate,
                    deleteField: deleteField,
                    provided: provided,
                    field: field
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 423,
                    columnNumber: 27
                  }, _this) || field.type == 'spacing' && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Spacing__WEBPACK_IMPORTED_MODULE_21__["default"], {
                    deleteField: deleteField,
                    provided: provided,
                    field: field
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 431,
                    columnNumber: 53
                  }, _this);
                }
              }, field.index, false, {
                fileName: _jsxFileName,
                lineNumber: 369,
                columnNumber: 21
              }, _this);
            }), provided.placeholder]
          }), void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 358,
            columnNumber: 13
          }, _this);
        }
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 356,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 355,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9kYXNoYm9hcmQvc3RhcnR1cC9wcm9qZWN0L2J1c2luZXNzLWFwcC9FZGl0b3IuanMiXSwibmFtZXMiOlsiUmVhY3RRdWlsbCIsImR5bmFtaWMiLCJzc3IiLCJFZGl0b3JJbnB1dEVsZW1lbnQiLCJzZWN0aW9uVGl0bGVVcGRhdGUiLCJ0YWJsZVVwZGF0ZSIsImhlYWRlclVwZGF0ZSIsInJlb3JkZXJFbGVtZW50cyIsInByb2plY3RJZCIsImFkZENoYXJ0IiwiYWRkTmV3SGVhZGVyIiwiY2hhcnRUeXBlVXBkYXRlIiwib25EYXRhc2V0TGFiZWw2VXBkYXRlIiwib25EYXRhc2V0TGFiZWw1VXBkYXRlIiwib25EYXRhc2V0TGFiZWw0VXBkYXRlIiwib25EYXRhc2V0TGFiZWwzVXBkYXRlIiwib25EYXRhc2V0TGFiZWwyVXBkYXRlIiwib25EYXRhc2V0TGFiZWwxVXBkYXRlIiwib25EYXRhc2V0NlVwZGF0ZSIsIm9uRGF0YXNldDVVcGRhdGUiLCJvbkRhdGFzZXQ0VXBkYXRlIiwib25EYXRhc2V0M1VwZGF0ZSIsIm9uRGF0YXNldDJVcGRhdGUiLCJvbkRhdGFzZXQxVXBkYXRlIiwiY2hhcnRMYWJlbHNVcGRhdGUiLCJjaGFydFZhbHVlVXBkYXRlIiwiYWRkTmV3Q2hhcnQiLCJkZWxldGVQYXJ0aWN1bGFyRmllbGQiLCJhZGROZXdGaWVsZCIsImZpZWxkVXBkYXRlIiwic2VjdGlvblVwZGF0ZSIsInNlbGVjdGVkU2VjdGlvbiIsInNlbGVjdGVkU2VjdGlvbkluZGV4Iiwic2VjdGlvbnMiLCJ1c2VTdGF0ZSIsInRpdGxlIiwic2V0VGl0bGUiLCJ0ZXh0Iiwic2V0VGV4dCIsImlkIiwic2V0SWQiLCJjdXJyZW50SW5kZXgiLCJzZXRDdXJyZW50SW5kZXgiLCJsYXN0U2VjdGlvbkluZGV4Iiwic2V0TGFzdFNlY3Rpb25JbmRleCIsIm9uTGVmdEJhclNob3ciLCJnc2FwIiwidG8iLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiYXV0b0FscGhhIiwiaGVpZ2h0IiwidHJhbnNmb3JtT3JpZ2luIiwiZHVyYXRpb24iLCJlYXNlIiwiTGluZWFyIiwiZGVsYXkiLCJ6SW5kZXgiLCJzY2FsZSIsImRlbGV0ZUZpZWxkIiwiaW5kZXgiLCJ1cGRhdGVUaXRsZSIsIm9uU2VjdGlvblRpdGxlVXBkYXRlIiwidXNlQ2FsbGJhY2siLCJkZWJvdW5jZSIsImRhdGEiLCJsYWJlbFVwZGF0ZSIsInNlbFNlY3Rpb24iLCJmaWVsZHMiLCJmaW5kSW5kZXgiLCJmaWVsZCIsImN1cnJlbnRTZWN0aW9uSW5kZXgiLCJjb25zb2xlIiwibG9nIiwiZGF0YXNldDFVcGRhdGUiLCJkYXRhc2V0MlVwZGF0ZSIsImRhdGFzZXQzVXBkYXRlIiwiZGF0YXNldDRVcGRhdGUiLCJkYXRhc2V0NVVwZGF0ZSIsImRhdGFzZXQ2VXBkYXRlIiwiZGF0YXNldExhYmVsMVVwZGF0ZSIsImRhdGFzZXRMYWJlbDJVcGRhdGUiLCJkYXRhc2V0TGFiZWwzVXBkYXRlIiwiZGF0YXNldExhYmVsNFVwZGF0ZSIsImRhdGFzZXRMYWJlbDVVcGRhdGUiLCJkYXRhc2V0TGFiZWw2VXBkYXRlIiwidXNlRWZmZWN0IiwiY29udGFpbmVyUmVmIiwidXNlUmVmIiwiZWxlbWVudHNBcnJheSIsInNldEVsZW1lbnRzQXJyYXkiLCJoYW5kbGVPbkRyYWdFbmQiLCJyZXN1bHQiLCJkZXN0aW5hdGlvbiIsIml0ZW1zIiwiQXJyYXkiLCJmcm9tIiwic3BsaWNlIiwic291cmNlIiwicmVvcmRlcmVkSXRlbSIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSIsInByb3ZpZGVkIiwiZHJvcHBhYmxlUHJvcHMiLCJpbm5lclJlZiIsImxlbmd0aCIsIm1hcCIsInR5cGUiLCJwbGFjZWhvbGRlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Q0FFQTtBQUNBO0FBQ0E7O0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBTUEs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LFNBQWQsaUJBQTJCLHFFQUFDLGlEQUFEO0FBQWdCLCtCQUFXLEVBQUVqRCxXQUE3QjtBQUEwQyw0QkFBUSxFQUFFNEMsUUFBcEQ7QUFBOEQseUJBQUssRUFBRWpDO0FBQXJFO0FBQUE7QUFBQTtBQUFBO0FBQUEsMkJBN0Q3QjtBQUFBO0FBREgsaUJBQWdCQSxLQUFLLENBQUNWLEtBQXRCO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBREY7QUFtRUQsYUFyRUQsQ0FSSixFQThFRzJDLFFBQVEsQ0FBQ00sV0E5RVo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUREO0FBQUE7QUFESDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQWxCRjtBQUFBLGtCQURGO0FBMkdELENBamFEOztHQUFNMUcsa0I7O01BQUFBLGtCO0FBbWFTQSxpRkFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9kYXNoYm9hcmQvcHJvamVjdHMvW3Byb2plY3RdL2J1c2luZXNzLXBsYW4uYjJlMTgwMTJmMDIwOWUxYWM2NGYuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VDYWxsYmFjaywgdXNlRWZmZWN0LCB1c2VNZW1vLCB1c2VSZWYsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgZHluYW1pYyBmcm9tICduZXh0L2R5bmFtaWMnO1xyXG4vLyBpbXBvcnQgZGVib3VuY2UgZnJvbSAnbG9kYXNoL2RlYm91bmNlJztcclxuLy8gaW1wb3J0IGRlYm91bmNlIGZyb20gJy4uLy4uLy4uLy4uLy4uL3V0aWxzL2hlbHBlcnMnO1xyXG4vLyBpbXBvcnQgZGVib3VuY2UgZnJvbSAnbG9kYXNoL2RlYm91bmNlJztcclxuaW1wb3J0IGRlYm91bmNlIGZyb20gJy4uLy4uLy4uLy4uLy4uL3V0aWxzL2hlbHBlcnMnO1xyXG5pbXBvcnQgeyB1c2VTdGF0ZVdpdGhQcm9taXNlIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vdXRpbHMvdXNlU3RhdGVXaXRoUHJvbWlzZSc7XHJcbmltcG9ydCB7IHVzZUN1c3RvbVN0YXRlIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vdXRpbHMvdXNlQ3VzdG9tU3RhdGUnO1xyXG5jb25zdCBSZWFjdFF1aWxsID0gZHluYW1pYygoKSA9PiBpbXBvcnQoJ3JlYWN0LXF1aWxsJyksIHsgc3NyOiBmYWxzZSB9KTtcclxuaW1wb3J0ICcuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcmVhY3QtcXVpbGwvZGlzdC9xdWlsbC5zbm93LmNzcyc7XHJcbmltcG9ydCAnLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3JlYWN0LXF1aWxsL2Rpc3QvcXVpbGwuYnViYmxlLmNzcyc7XHJcbmltcG9ydCAnLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3JlYWN0LXF1aWxsL2Rpc3QvcXVpbGwuY29yZS5jc3MnO1xyXG5pbXBvcnQgSW1hZ2UgZnJvbSAnbmV4dC9pbWFnZSc7XHJcbmltcG9ydCB7IERyYWdEcm9wQ29udGV4dCwgRHJvcHBhYmxlLCBEcmFnZ2FibGUgfSBmcm9tICdyZWFjdC1iZWF1dGlmdWwtZG5kJztcclxuXHJcbi8vIGltcG9ydCB7IHVzZVJlY2hhcnRUb1BuZyB9IGZyb20gJ3JlY2hhcnRzLXRvLXBuZyc7XHJcbmltcG9ydCBGaWxlU2F2ZXIgZnJvbSAnZmlsZS1zYXZlcic7XHJcbmltcG9ydCBDaGFydEpzQ29tcG9uZW50IGZyb20gJy4vQ2hhcnRqcyc7XHJcbi8vIGltcG9ydCBSZWFjdENoYXJ0IGZyb20gJy4vUmVhY2hDaGFydCc7XHJcbmltcG9ydCBnc2FwLCB7IFBvd2VyNCwgTGluZWFyIH0gZnJvbSAnZ3NhcCc7XHJcbmltcG9ydCBIZWFkZXJDb21wb25lbnQgZnJvbSAnLi9IZWFkZXInO1xyXG5pbXBvcnQgVGV4dEVsZW1lbnQgZnJvbSAnLi9UZXh0JztcclxuaW1wb3J0IFRhYmxlRWxlbWVudCBmcm9tICcuL1RhYmxlJztcclxuaW1wb3J0IFNwYWNpbmdFbGVtZW50IGZyb20gJy4vU3BhY2luZyc7XHJcblxyXG5jb25zdCBFZGl0b3JJbnB1dEVsZW1lbnQgPSAoe1xyXG4gIHNlY3Rpb25UaXRsZVVwZGF0ZSxcclxuICB0YWJsZVVwZGF0ZSxcclxuICBoZWFkZXJVcGRhdGUsXHJcbiAgcmVvcmRlckVsZW1lbnRzLFxyXG4gIHByb2plY3RJZCxcclxuICBhZGRDaGFydCxcclxuICBhZGROZXdIZWFkZXIsXHJcbiAgY2hhcnRUeXBlVXBkYXRlLFxyXG4gIG9uRGF0YXNldExhYmVsNlVwZGF0ZSxcclxuICBvbkRhdGFzZXRMYWJlbDVVcGRhdGUsXHJcbiAgb25EYXRhc2V0TGFiZWw0VXBkYXRlLFxyXG4gIG9uRGF0YXNldExhYmVsM1VwZGF0ZSxcclxuICBvbkRhdGFzZXRMYWJlbDJVcGRhdGUsXHJcbiAgb25EYXRhc2V0TGFiZWwxVXBkYXRlLFxyXG4gIG9uRGF0YXNldDZVcGRhdGUsXHJcbiAgb25EYXRhc2V0NVVwZGF0ZSxcclxuICBvbkRhdGFzZXQ0VXBkYXRlLFxyXG4gIG9uRGF0YXNldDNVcGRhdGUsXHJcbiAgb25EYXRhc2V0MlVwZGF0ZSxcclxuICBvbkRhdGFzZXQxVXBkYXRlLFxyXG4gIGNoYXJ0TGFiZWxzVXBkYXRlLFxyXG4gIGNoYXJ0VmFsdWVVcGRhdGUsXHJcbiAgYWRkTmV3Q2hhcnQsXHJcbiAgZGVsZXRlUGFydGljdWxhckZpZWxkLFxyXG4gIGFkZE5ld0ZpZWxkLFxyXG4gIGZpZWxkVXBkYXRlLFxyXG4gIHNlY3Rpb25VcGRhdGUsXHJcbiAgc2VsZWN0ZWRTZWN0aW9uLFxyXG4gIHNlbGVjdGVkU2VjdGlvbkluZGV4LFxyXG4gIHNlY3Rpb25zLFxyXG59KSA9PiB7XHJcbiAgY29uc3QgW3RpdGxlLCBzZXRUaXRsZV0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgY29uc3QgW3RleHQsIHNldFRleHRdID0gdXNlU3RhdGUoJycpO1xyXG4gIGNvbnN0IFtpZCwgc2V0SWRdID0gdXNlU3RhdGUoJycpO1xyXG4gIGNvbnN0IFtjdXJyZW50SW5kZXgsIHNldEN1cnJlbnRJbmRleF0gPSB1c2VTdGF0ZShudWxsKTtcclxuICBjb25zdCBbbGFzdFNlY3Rpb25JbmRleCwgc2V0TGFzdFNlY3Rpb25JbmRleF0gPSB1c2VTdGF0ZShudWxsKTtcclxuICAvLyBjb25zdCBbY3VycmVudFNlY3Rpb25JbmRleCwgc2V0Q3VycmVudFNlY3Rpb25JbmRleF0gPSB1c2VTdGF0ZShudWxsKTtcclxuXHJcbiAgY29uc3Qgb25MZWZ0QmFyU2hvdyA9ICgpID0+IHtcclxuICAgIC8vIC0tLSBWRVJTSU9OIDEgLS0tXHJcbiAgICAvLyBnc2FwLnRvKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdsZWZ0LWJhcicpLCB7d2lkdGg6ICcxNjBweCcsIHRyYW5zZm9ybU9yaWdpbjogJ2xlZnQnLCBkdXJhdGlvbjogMSwgZWFzZTogTGluZWFyIH0pO1xyXG4gICAgLy8gLy8gRVhJVFxyXG4gICAgLy8gZ3NhcC50byhkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZXhpdCcpLCB7IGF1dG9BbHBoYTogMSwgZHVyYXRpb246IDEsIGVhc2U6IExpbmVhciwgZGVsYXk6IDIgfSlcclxuICAgIC8vIC8vIElNQUdFU1xyXG4gICAgLy8gZ3NhcC50byhkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbGVmdC1lbGVtZW50JyksIHsgc2NhbGU6IDEsIGR1cmF0aW9uOiAxLCBlYXNlOiBMaW5lYXIsIGRlbGF5OiAxIH0pO1xyXG4gICAgLy8gZ3NhcC50byhkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbGVmdC1lbGVtZW50MScpLCB7IHNjYWxlOiAxLCBkdXJhdGlvbjogMSwgZWFzZTogTGluZWFyLCBkZWxheTogMSB9KTtcclxuICAgIC8vIGdzYXAudG8oZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2xlZnQtZWxlbWVudDInKSwgeyBzY2FsZTogMSwgZHVyYXRpb246IDEsIGVhc2U6IExpbmVhciwgZGVsYXk6IDEgfSk7XHJcbiAgICAvLyAvLyBURVhUXHJcbiAgICAvLyBnc2FwLnRvKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdsZWZ0LXRleHQnKSwgeyBzY2FsZTogMSwgZHVyYXRpb246IDEsIGVhc2U6IExpbmVhciwgZGVsYXk6IDEgfSk7XHJcbiAgICAvLyBnc2FwLnRvKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdsZWZ0LXRleHQxJyksIHsgc2NhbGU6IDEsIGR1cmF0aW9uOiAxLCBlYXNlOiBMaW5lYXIsIGRlbGF5OiAxIH0pO1xyXG4gICAgLy8gZ3NhcC50byhkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbGVmdC10ZXh0MicpLCB7IHNjYWxlOiAxLCBkdXJhdGlvbjogMSwgZWFzZTogTGluZWFyLCBkZWxheTogMSB9KTtcclxuXHJcbiAgICAvLyAtLS0gVkVSU0lPTiAyIC0tLVxyXG4gICAgLy8gQ09OVEFJTkVSU1xyXG4gICAgZ3NhcC50byhkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGFpbmVyJyksIHsgYXV0b0FscGhhOiAxIH0pO1xyXG4gICAgZ3NhcC50byhkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGFpbmVyMScpLCB7IGF1dG9BbHBoYTogMSB9KTtcclxuICAgIGdzYXAudG8oZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRhaW5lcjInKSwgeyBhdXRvQWxwaGE6IDEgfSk7XHJcbiAgICBnc2FwLnRvKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250YWluZXIzJyksIHsgYXV0b0FscGhhOiAxIH0pO1xyXG4gICAgZ3NhcC50byhkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGFpbmVyNCcpLCB7IGF1dG9BbHBoYTogMSB9KTtcclxuICAgIC8vIExFRlQgQkFSXHJcbiAgICBnc2FwLnRvKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdsZWZ0LWJhcicpLCB7IGhlaWdodDogJzEwMHZoJywgdHJhbnNmb3JtT3JpZ2luOiAndG9wJywgZHVyYXRpb246IDIsIGVhc2U6IExpbmVhciB9KTtcclxuICAgIC8vIEVYSVRcclxuICAgIGdzYXAudG8oZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2V4aXQnKSwgeyBhdXRvQWxwaGE6IDEsIGR1cmF0aW9uOiAxLCBlYXNlOiBMaW5lYXIsIGRlbGF5OiAyIH0pO1xyXG4gICAgLy8gSU1BR0VTXHJcbiAgICBnc2FwLnRvKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdsZWZ0LWVsZW1lbnQnKSwge1xyXG4gICAgICB6SW5kZXg6IDUwLFxyXG4gICAgICBzY2FsZTogMSxcclxuICAgICAgdHJhbnNmb3JtT3JpZ2luOiAndG9wJyxcclxuICAgICAgZHVyYXRpb246IDEsXHJcbiAgICAgIGVhc2U6IExpbmVhcixcclxuICAgICAgZGVsYXk6IDAuMyxcclxuICAgIH0pO1xyXG4gICAgZ3NhcC50byhkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbGVmdC1lbGVtZW50MScpLCB7XHJcbiAgICAgIHpJbmRleDogNTAsXHJcbiAgICAgIHNjYWxlOiAxLFxyXG4gICAgICB0cmFuc2Zvcm1PcmlnaW46ICd0b3AnLFxyXG4gICAgICBkdXJhdGlvbjogMSxcclxuICAgICAgZWFzZTogTGluZWFyLFxyXG4gICAgICBkZWxheTogMC41LFxyXG4gICAgfSk7XHJcbiAgICBnc2FwLnRvKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdsZWZ0LWVsZW1lbnQyJyksIHtcclxuICAgICAgekluZGV4OiA1MCxcclxuICAgICAgc2NhbGU6IDEsXHJcbiAgICAgIHRyYW5zZm9ybU9yaWdpbjogJ3RvcCcsXHJcbiAgICAgIGR1cmF0aW9uOiAxLFxyXG4gICAgICBlYXNlOiBMaW5lYXIsXHJcbiAgICAgIGRlbGF5OiAwLjcsXHJcbiAgICB9KTtcclxuICAgIGdzYXAudG8oZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2xlZnQtZWxlbWVudDMnKSwge1xyXG4gICAgICB6SW5kZXg6IDUwLFxyXG4gICAgICBzY2FsZTogMSxcclxuICAgICAgdHJhbnNmb3JtT3JpZ2luOiAndG9wJyxcclxuICAgICAgZHVyYXRpb246IDEsXHJcbiAgICAgIGVhc2U6IExpbmVhcixcclxuICAgICAgZGVsYXk6IDAuOSxcclxuICAgIH0pO1xyXG4gICAgZ3NhcC50byhkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbGVmdC1lbGVtZW50NCcpLCB7XHJcbiAgICAgIHpJbmRleDogNTAsXHJcbiAgICAgIHNjYWxlOiAxLFxyXG4gICAgICB0cmFuc2Zvcm1PcmlnaW46ICd0b3AnLFxyXG4gICAgICBkdXJhdGlvbjogMSxcclxuICAgICAgZWFzZTogTGluZWFyLFxyXG4gICAgICBkZWxheTogMS4xLFxyXG4gICAgfSk7XHJcbiAgICAvLyBURVhUXHJcbiAgICBnc2FwLnRvKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdsZWZ0LXRleHQnKSwgeyB6SW5kZXg6IDUwLCBzY2FsZTogMSwgdHJhbnNmb3JtT3JpZ2luOiAndG9wJywgZHVyYXRpb246IDEsIGVhc2U6IExpbmVhciwgZGVsYXk6IDAuMyB9KTtcclxuICAgIGdzYXAudG8oZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2xlZnQtdGV4dDEnKSwgeyB6SW5kZXg6IDUwLCBzY2FsZTogMSwgdHJhbnNmb3JtT3JpZ2luOiAndG9wJywgZHVyYXRpb246IDEsIGVhc2U6IExpbmVhciwgZGVsYXk6IDAuNSB9KTtcclxuICAgIGdzYXAudG8oZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2xlZnQtdGV4dDInKSwgeyB6SW5kZXg6IDUwLCBzY2FsZTogMSwgdHJhbnNmb3JtT3JpZ2luOiAndG9wJywgZHVyYXRpb246IDEsIGVhc2U6IExpbmVhciwgZGVsYXk6IDAuNyB9KTtcclxuICAgIGdzYXAudG8oZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2xlZnQtdGV4dDMnKSwgeyB6SW5kZXg6IDUwLCBzY2FsZTogMSwgdHJhbnNmb3JtT3JpZ2luOiAndG9wJywgZHVyYXRpb246IDEsIGVhc2U6IExpbmVhciwgZGVsYXk6IDAuOSB9KTtcclxuICAgIGdzYXAudG8oZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2xlZnQtdGV4dDQnKSwgeyB6SW5kZXg6IDUwLCBzY2FsZTogMSwgdHJhbnNmb3JtT3JpZ2luOiAndG9wJywgZHVyYXRpb246IDEsIGVhc2U6IExpbmVhciwgZGVsYXk6IDEuMSB9KTtcclxuICB9O1xyXG5cclxuICBjb25zdCBkZWxldGVGaWVsZCA9IChpbmRleCkgPT4ge1xyXG4gICAgZGVsZXRlUGFydGljdWxhckZpZWxkKGluZGV4KTtcclxuICB9O1xyXG5cclxuICBjb25zdCB1cGRhdGVUaXRsZSA9IGFzeW5jICh0aXRsZSkgPT4ge1xyXG4gICAgYXdhaXQgc2V0VGl0bGUodGl0bGUpO1xyXG4gICAgb25TZWN0aW9uVGl0bGVVcGRhdGUodGl0bGUpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IG9uU2VjdGlvblRpdGxlVXBkYXRlID0gdXNlQ2FsbGJhY2soXHJcbiAgICBkZWJvdW5jZSgoZGF0YSkgPT4ge1xyXG4gICAgICBzZWN0aW9uVGl0bGVVcGRhdGUoZGF0YSk7XHJcbiAgICB9LCA1MDApLFxyXG4gICAgW11cclxuICApO1xyXG5cclxuICBjb25zdCBsYWJlbFVwZGF0ZSA9IHVzZUNhbGxiYWNrKFxyXG4gICAgZGVib3VuY2UoYXN5bmMgKGRhdGEpID0+IHtcclxuICAgICAgY29uc3QgY3VycmVudFNlY3Rpb25JbmRleCA9IGF3YWl0IGRhdGEuc2VsU2VjdGlvbi5maWVsZHMuZmluZEluZGV4KChmaWVsZCkgPT4gZmllbGQuaW5kZXggPT0gZGF0YS5pbmRleCk7XHJcbiAgICAgIGNvbnNvbGUubG9nKGRhdGEpO1xyXG4gICAgICBjaGFydExhYmVsc1VwZGF0ZShkYXRhLCBkYXRhLmluZGV4LCBjdXJyZW50U2VjdGlvbkluZGV4LCBkYXRhLnNlbFNlY3Rpb24pO1xyXG4gICAgfSwgNTAwKSxcclxuICAgIFtdXHJcbiAgKTtcclxuXHJcbiAgLy8gRGF0YXNldDEgdXBkYXRlXHJcbiAgY29uc3QgZGF0YXNldDFVcGRhdGUgPSB1c2VDYWxsYmFjayhcclxuICAgIGRlYm91bmNlKGFzeW5jIChkYXRhKSA9PiB7XHJcbiAgICAgIGNvbnN0IGN1cnJlbnRTZWN0aW9uSW5kZXggPSBhd2FpdCBkYXRhLnNlbFNlY3Rpb24uZmllbGRzLmZpbmRJbmRleCgoZmllbGQpID0+IGZpZWxkLmluZGV4ID09IGRhdGEuaW5kZXgpO1xyXG4gICAgICBjb25zb2xlLmxvZyhkYXRhKTtcclxuICAgICAgb25EYXRhc2V0MVVwZGF0ZShkYXRhLCBkYXRhLmluZGV4LCBjdXJyZW50U2VjdGlvbkluZGV4LCBkYXRhLnNlbFNlY3Rpb24pO1xyXG4gICAgfSwgNTAwKSxcclxuICAgIFtdXHJcbiAgKTtcclxuXHJcbiAgLy8gRGF0YXNldDIgdXBkYXRlXHJcbiAgY29uc3QgZGF0YXNldDJVcGRhdGUgPSB1c2VDYWxsYmFjayhcclxuICAgIGRlYm91bmNlKGFzeW5jIChkYXRhKSA9PiB7XHJcbiAgICAgIGNvbnN0IGN1cnJlbnRTZWN0aW9uSW5kZXggPSBhd2FpdCBkYXRhLnNlbFNlY3Rpb24uZmllbGRzLmZpbmRJbmRleCgoZmllbGQpID0+IGZpZWxkLmluZGV4ID09IGRhdGEuaW5kZXgpO1xyXG4gICAgICBjb25zb2xlLmxvZyhkYXRhKTtcclxuICAgICAgb25EYXRhc2V0MlVwZGF0ZShkYXRhLCBkYXRhLmluZGV4LCBjdXJyZW50U2VjdGlvbkluZGV4LCBkYXRhLnNlbFNlY3Rpb24pO1xyXG4gICAgfSwgNTAwKSxcclxuICAgIFtdXHJcbiAgKTtcclxuXHJcbiAgLy8gRGF0YXNldDMgdXBkYXRlXHJcbiAgY29uc3QgZGF0YXNldDNVcGRhdGUgPSB1c2VDYWxsYmFjayhcclxuICAgIGRlYm91bmNlKGFzeW5jIChkYXRhKSA9PiB7XHJcbiAgICAgIGNvbnN0IGN1cnJlbnRTZWN0aW9uSW5kZXggPSBhd2FpdCBkYXRhLnNlbFNlY3Rpb24uZmllbGRzLmZpbmRJbmRleCgoZmllbGQpID0+IGZpZWxkLmluZGV4ID09IGRhdGEuaW5kZXgpO1xyXG4gICAgICBjb25zb2xlLmxvZyhkYXRhKTtcclxuICAgICAgb25EYXRhc2V0M1VwZGF0ZShkYXRhLCBkYXRhLmluZGV4LCBjdXJyZW50U2VjdGlvbkluZGV4LCBkYXRhLnNlbFNlY3Rpb24pO1xyXG4gICAgfSwgNTAwKSxcclxuICAgIFtdXHJcbiAgKTtcclxuXHJcbiAgLy8gRGF0YXNldDQgdXBkYXRlXHJcbiAgY29uc3QgZGF0YXNldDRVcGRhdGUgPSB1c2VDYWxsYmFjayhcclxuICAgIGRlYm91bmNlKGFzeW5jIChkYXRhKSA9PiB7XHJcbiAgICAgIGNvbnN0IGN1cnJlbnRTZWN0aW9uSW5kZXggPSBhd2FpdCBkYXRhLnNlbFNlY3Rpb24uZmllbGRzLmZpbmRJbmRleCgoZmllbGQpID0+IGZpZWxkLmluZGV4ID09IGRhdGEuaW5kZXgpO1xyXG4gICAgICBjb25zb2xlLmxvZyhkYXRhKTtcclxuICAgICAgb25EYXRhc2V0NFVwZGF0ZShkYXRhLCBkYXRhLmluZGV4LCBjdXJyZW50U2VjdGlvbkluZGV4LCBkYXRhLnNlbFNlY3Rpb24pO1xyXG4gICAgfSwgNTAwKSxcclxuICAgIFtdXHJcbiAgKTtcclxuXHJcbiAgLy8gRGF0YXNldDUgdXBkYXRlXHJcbiAgY29uc3QgZGF0YXNldDVVcGRhdGUgPSB1c2VDYWxsYmFjayhcclxuICAgIGRlYm91bmNlKGFzeW5jIChkYXRhKSA9PiB7XHJcbiAgICAgIGNvbnN0IGN1cnJlbnRTZWN0aW9uSW5kZXggPSBhd2FpdCBkYXRhLnNlbFNlY3Rpb24uZmllbGRzLmZpbmRJbmRleCgoZmllbGQpID0+IGZpZWxkLmluZGV4ID09IGRhdGEuaW5kZXgpO1xyXG4gICAgICBjb25zb2xlLmxvZyhkYXRhKTtcclxuICAgICAgb25EYXRhc2V0NVVwZGF0ZShkYXRhLCBkYXRhLmluZGV4LCBjdXJyZW50U2VjdGlvbkluZGV4LCBkYXRhLnNlbFNlY3Rpb24pO1xyXG4gICAgfSwgNTAwKSxcclxuICAgIFtdXHJcbiAgKTtcclxuXHJcbiAgLy8gRGF0YXNldDYgdXBkYXRlXHJcbiAgY29uc3QgZGF0YXNldDZVcGRhdGUgPSB1c2VDYWxsYmFjayhcclxuICAgIGRlYm91bmNlKGFzeW5jIChkYXRhKSA9PiB7XHJcbiAgICAgIGNvbnN0IGN1cnJlbnRTZWN0aW9uSW5kZXggPSBhd2FpdCBkYXRhLnNlbFNlY3Rpb24uZmllbGRzLmZpbmRJbmRleCgoZmllbGQpID0+IGZpZWxkLmluZGV4ID09IGRhdGEuaW5kZXgpO1xyXG4gICAgICBjb25zb2xlLmxvZyhkYXRhKTtcclxuICAgICAgb25EYXRhc2V0NlVwZGF0ZShkYXRhLCBkYXRhLmluZGV4LCBjdXJyZW50U2VjdGlvbkluZGV4LCBkYXRhLnNlbFNlY3Rpb24pO1xyXG4gICAgfSwgNTAwKSxcclxuICAgIFtdXHJcbiAgKTtcclxuXHJcbiAgLy8gRGF0YXNldCBsYWJlbHMgdXBkYXRlXHJcbiAgY29uc3QgZGF0YXNldExhYmVsMVVwZGF0ZSA9IHVzZUNhbGxiYWNrKFxyXG4gICAgZGVib3VuY2UoYXN5bmMgKGRhdGEpID0+IHtcclxuICAgICAgY29uc3QgY3VycmVudFNlY3Rpb25JbmRleCA9IGF3YWl0IGRhdGEuc2VsU2VjdGlvbi5maWVsZHMuZmluZEluZGV4KChmaWVsZCkgPT4gZmllbGQuaW5kZXggPT0gZGF0YS5pbmRleCk7XHJcbiAgICAgIGNvbnNvbGUubG9nKGRhdGEpO1xyXG4gICAgICBvbkRhdGFzZXRMYWJlbDFVcGRhdGUoZGF0YSwgZGF0YS5pbmRleCwgY3VycmVudFNlY3Rpb25JbmRleCwgZGF0YS5zZWxTZWN0aW9uKTtcclxuICAgIH0sIDUwMCksXHJcbiAgICBbXVxyXG4gICk7XHJcblxyXG4gIGNvbnN0IGRhdGFzZXRMYWJlbDJVcGRhdGUgPSB1c2VDYWxsYmFjayhcclxuICAgIGRlYm91bmNlKGFzeW5jIChkYXRhKSA9PiB7XHJcbiAgICAgIGNvbnN0IGN1cnJlbnRTZWN0aW9uSW5kZXggPSBhd2FpdCBkYXRhLnNlbFNlY3Rpb24uZmllbGRzLmZpbmRJbmRleCgoZmllbGQpID0+IGZpZWxkLmluZGV4ID09IGRhdGEuaW5kZXgpO1xyXG4gICAgICBjb25zb2xlLmxvZyhkYXRhKTtcclxuICAgICAgb25EYXRhc2V0TGFiZWwyVXBkYXRlKGRhdGEsIGRhdGEuaW5kZXgsIGN1cnJlbnRTZWN0aW9uSW5kZXgsIGRhdGEuc2VsU2VjdGlvbik7XHJcbiAgICB9LCA1MDApLFxyXG4gICAgW11cclxuICApO1xyXG5cclxuICBjb25zdCBkYXRhc2V0TGFiZWwzVXBkYXRlID0gdXNlQ2FsbGJhY2soXHJcbiAgICBkZWJvdW5jZShhc3luYyAoZGF0YSkgPT4ge1xyXG4gICAgICBjb25zdCBjdXJyZW50U2VjdGlvbkluZGV4ID0gYXdhaXQgZGF0YS5zZWxTZWN0aW9uLmZpZWxkcy5maW5kSW5kZXgoKGZpZWxkKSA9PiBmaWVsZC5pbmRleCA9PSBkYXRhLmluZGV4KTtcclxuICAgICAgY29uc29sZS5sb2coZGF0YSk7XHJcbiAgICAgIG9uRGF0YXNldExhYmVsM1VwZGF0ZShkYXRhLCBkYXRhLmluZGV4LCBjdXJyZW50U2VjdGlvbkluZGV4LCBkYXRhLnNlbFNlY3Rpb24pO1xyXG4gICAgfSwgNTAwKSxcclxuICAgIFtdXHJcbiAgKTtcclxuXHJcbiAgY29uc3QgZGF0YXNldExhYmVsNFVwZGF0ZSA9IHVzZUNhbGxiYWNrKFxyXG4gICAgZGVib3VuY2UoYXN5bmMgKGRhdGEpID0+IHtcclxuICAgICAgY29uc3QgY3VycmVudFNlY3Rpb25JbmRleCA9IGF3YWl0IGRhdGEuc2VsU2VjdGlvbi5maWVsZHMuZmluZEluZGV4KChmaWVsZCkgPT4gZmllbGQuaW5kZXggPT0gZGF0YS5pbmRleCk7XHJcbiAgICAgIGNvbnNvbGUubG9nKGRhdGEpO1xyXG4gICAgICBvbkRhdGFzZXRMYWJlbDRVcGRhdGUoZGF0YSwgZGF0YS5pbmRleCwgY3VycmVudFNlY3Rpb25JbmRleCwgZGF0YS5zZWxTZWN0aW9uKTtcclxuICAgIH0sIDUwMCksXHJcbiAgICBbXVxyXG4gICk7XHJcblxyXG4gIGNvbnN0IGRhdGFzZXRMYWJlbDVVcGRhdGUgPSB1c2VDYWxsYmFjayhcclxuICAgIGRlYm91bmNlKGFzeW5jIChkYXRhKSA9PiB7XHJcbiAgICAgIGNvbnN0IGN1cnJlbnRTZWN0aW9uSW5kZXggPSBhd2FpdCBkYXRhLnNlbFNlY3Rpb24uZmllbGRzLmZpbmRJbmRleCgoZmllbGQpID0+IGZpZWxkLmluZGV4ID09IGRhdGEuaW5kZXgpO1xyXG4gICAgICBjb25zb2xlLmxvZyhkYXRhKTtcclxuICAgICAgb25EYXRhc2V0TGFiZWw1VXBkYXRlKGRhdGEsIGRhdGEuaW5kZXgsIGN1cnJlbnRTZWN0aW9uSW5kZXgsIGRhdGEuc2VsU2VjdGlvbik7XHJcbiAgICB9LCA1MDApLFxyXG4gICAgW11cclxuICApO1xyXG5cclxuICBjb25zdCBkYXRhc2V0TGFiZWw2VXBkYXRlID0gdXNlQ2FsbGJhY2soXHJcbiAgICBkZWJvdW5jZShhc3luYyAoZGF0YSkgPT4ge1xyXG4gICAgICBjb25zdCBjdXJyZW50U2VjdGlvbkluZGV4ID0gYXdhaXQgZGF0YS5zZWxTZWN0aW9uLmZpZWxkcy5maW5kSW5kZXgoKGZpZWxkKSA9PiBmaWVsZC5pbmRleCA9PSBkYXRhLmluZGV4KTtcclxuICAgICAgY29uc29sZS5sb2coZGF0YSk7XHJcbiAgICAgIG9uRGF0YXNldExhYmVsNlVwZGF0ZShkYXRhLCBkYXRhLmluZGV4LCBjdXJyZW50U2VjdGlvbkluZGV4LCBkYXRhLnNlbFNlY3Rpb24pO1xyXG4gICAgfSwgNTAwKSxcclxuICAgIFtdXHJcbiAgKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIHNldEN1cnJlbnRJbmRleChudWxsKTtcclxuICAgIC8vIHNlbGVjdGVkU2VjdGlvbi5maWVsZHMgbW/FvGVzeiB3eXJ6dWNpxIdcclxuICB9LCBbc2VsZWN0ZWRTZWN0aW9uLmlkLCBzZWxlY3RlZFNlY3Rpb24uZmllbGRzXSk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBpZiAoc2VsZWN0ZWRTZWN0aW9uLmlkICE9PSBpZCkge1xyXG4gICAgICBzZXRUaXRsZShzZWxlY3RlZFNlY3Rpb24udGl0bGUpO1xyXG4gICAgICAvLyBzZXRUZXh0KHNlbGVjdGVkU2VjdGlvbi5ib2R5KTtcclxuICAgICAgLy8gc2V0SWQoc2VsZWN0ZWRTZWN0aW9uLmlkKTtcclxuICAgIH1cclxuICB9LCBbc2VsZWN0ZWRTZWN0aW9uLmlkXSk7XHJcblxyXG4gIC8vIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgLy8gICBzZXRDdXJyZW50SW5kZXgoKVxyXG4gIC8vIH0sIFtjdXJyZW50SW5kZXhdKVxyXG4gIC8vIGNvbnNvbGUubG9nKHNlbGVjdGVkU2VjdGlvbik7XHJcbiAgLy8gY29uc29sZS5sb2coY3VycmVudEluZGV4KTtcclxuXHJcbiAgY29uc29sZS5sb2coc2VsZWN0ZWRTZWN0aW9uKTtcclxuXHJcbiAgLy8gY29uc3QgW3BuZywgcmVmXSA9IHVzZVJlY2hhcnRUb1BuZygpO1xyXG4gIC8vIGNvbnN0IGZuID0gdXNlQ2FsbGJhY2soYXN5bmMgKCkgPT4ge1xyXG4gIC8vICAgRmlsZVNhdmVyLnNhdmVBcyhwbmcsICdteUNoYXJ0LnBuZycpO1xyXG4gIC8vICAgY29uc29sZS5sb2cocG5nKTtcclxuICAvLyB9LCBbcG5nXSk7XHJcblxyXG4gIGNvbnN0IGNvbnRhaW5lclJlZiA9IHVzZVJlZigpO1xyXG5cclxuICBjb25zb2xlLmxvZygnU2VsZWN0ZWQgc2VjdGlvbiAtLT4gJywgc2VsZWN0ZWRTZWN0aW9uKTtcclxuXHJcbiAgLy8gRWxlbWVudHMgbWFuYWdlclxyXG4gIGNvbnN0IFtlbGVtZW50c0FycmF5LCBzZXRFbGVtZW50c0FycmF5XSA9IHVzZVN0YXRlKCk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAvLyBlbGVtZW50c0FycmF5ICE9PSBzZWxlY3RlZFNlY3Rpb24uZmllbGRzXHJcbiAgICBpZiAoIWVsZW1lbnRzQXJyYXkgfHwgZWxlbWVudHNBcnJheSAhPT0gc2VsZWN0ZWRTZWN0aW9uLmZpZWxkcykge1xyXG4gICAgICBjb25zb2xlLmxvZygnWWVlZWVlcCcpO1xyXG4gICAgICBzZXRFbGVtZW50c0FycmF5KHNlbGVjdGVkU2VjdGlvbi5maWVsZHMpO1xyXG4gICAgfVxyXG4gIH0sIFtzZWxlY3RlZFNlY3Rpb25dKTtcclxuICBjb25zb2xlLmxvZygnRWxlbWVudHMgYXJyYXkgYWZ0ZXIgcmVvcmRlciA9PT4gJywgZWxlbWVudHNBcnJheSk7XHJcbiAgY29uc29sZS5sb2coJ1NlbGVjdGVkIHNlY3Rpb24gYWZ0ZXIgcmVvcmRlciA9PT4gJywgc2VsZWN0ZWRTZWN0aW9uKTtcclxuXHJcbiAgY29uc3QgaGFuZGxlT25EcmFnRW5kID0gKHJlc3VsdCkgPT4ge1xyXG4gICAgaWYgKCFyZXN1bHQuZGVzdGluYXRpb24pIHJldHVybjtcclxuICAgIGNvbnN0IGl0ZW1zID0gQXJyYXkuZnJvbShlbGVtZW50c0FycmF5KTtcclxuICAgIGNvbnN0IFtyZW9yZGVyZWRJdGVtXSA9IGl0ZW1zLnNwbGljZShyZXN1bHQuc291cmNlLmluZGV4LCAxKTtcclxuICAgIGl0ZW1zLnNwbGljZShyZXN1bHQuZGVzdGluYXRpb24uaW5kZXgsIDAsIHJlb3JkZXJlZEl0ZW0pO1xyXG5cclxuICAgIGNvbnNvbGUubG9nKHJlc3VsdCk7XHJcbiAgICBzZXRFbGVtZW50c0FycmF5KGl0ZW1zKTtcclxuICAgIHJlb3JkZXJFbGVtZW50cyhpdGVtcyk7XHJcbiAgfTtcclxuXHJcbiAgY29uc29sZS5sb2coZWxlbWVudHNBcnJheSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICB7LyogPENoYXJ0Q29tcG9uZW50IC8+ICovfVxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlbGF0aXZlIGZsZXggZmxleC1jb2wgaC1mdWxsIHctZnVsbCBmbGV4IHB4LTIgcHktMiByb3VuZGVkLTJ4bCBiZy13aGl0ZSBkYXJrOmJnLWJhY2tncm91bmQgbXQtMVwiPlxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbCBweC0zIGJnLXdoaXRlIHB5LTMgcm91bmRlZC0yeGwgZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1iZXR3ZWVuXCI+XHJcbiAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cInRleHQtbGcgYmctd2hpdGUgZm9jdXM6b3V0bGluZS1ub25lIHctMy81IHRleHQtcHJpbWFyeWRhcmtcIlxyXG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiU2VjdGlvbiB0aXRsZS4uLlwiXHJcbiAgICAgICAgICAgICAgdmFsdWU9e3RpdGxlID8gdGl0bGUgOiAnJ31cclxuICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHVwZGF0ZVRpdGxlKGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktZW5kIGl0ZW1zLWNlbnRlciB3LTIvNVwiPlxyXG4gICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtcHJpbWFyeWRhcmsgdGV4dC1iYXNhZSBtci00IHBsLTJcIj5OZXcgZWxlbWVudDwvcD5cclxuICAgICAgICAgICAgICA8SW1hZ2Ugb25DbGljaz17b25MZWZ0QmFyU2hvd30gc3JjPVwiL2NoYXJ0L3BlbmNpbC5zdmdcIiBoZWlnaHQ9ezQwfSB3aWR0aD17NDB9IC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8RHJhZ0Ryb3BDb250ZXh0IG9uRHJhZ0VuZD17aGFuZGxlT25EcmFnRW5kfT5cclxuICAgICAgICA8RHJvcHBhYmxlIGRyb3BwYWJsZUlkPVwiZWxlbWVudHNcIj5cclxuICAgICAgICAgIHsocHJvdmlkZWQpID0+IChcclxuICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImVsZW1lbnRzXCJcclxuICAgICAgICAgICAgICB7Li4ucHJvdmlkZWQuZHJvcHBhYmxlUHJvcHN9XHJcbiAgICAgICAgICAgICAgcmVmPXtwcm92aWRlZC5pbm5lclJlZn1cclxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LWZ1bGwgZmxleCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXIgZmxleC1jb2xcIlxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAge2VsZW1lbnRzQXJyYXkgJiZcclxuICAgICAgICAgICAgICAgIGVsZW1lbnRzQXJyYXkubGVuZ3RoICE9PSAwICYmXHJcbiAgICAgICAgICAgICAgICBlbGVtZW50c0FycmF5Lm1hcCgoZmllbGQsIGN1cnJlbnRJbmRleCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnRklFTEQgLS0+ICcsIGZpZWxkKTtcclxuICAgICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICA8RHJhZ2dhYmxlIGtleT17ZmllbGQuaW5kZXh9IGRyYWdnYWJsZUlkPXtmaWVsZC5pbmRleH0gaW5kZXg9e2N1cnJlbnRJbmRleH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICB7KHByb3ZpZGVkKSA9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAoZmllbGQudHlwZSA9PSAndGV4dCcgJiYgKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0RWxlbWVudFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZmllbGRVcGRhdGU9e2ZpZWxkVXBkYXRlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY3VycmVudEluZGV4PXtjdXJyZW50SW5kZXh9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RlZFNlY3Rpb249e3NlbGVjdGVkU2VjdGlvbn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb3ZpZGVkPXtwcm92aWRlZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpZWxkPXtmaWVsZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlbGV0ZUZpZWxkPXtkZWxldGVGaWVsZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldEN1cnJlbnRJbmRleD17c2V0Q3VycmVudEluZGV4fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICkpIHx8XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIChmaWVsZC50eXBlID09ICdjaGFydCcgJiYgKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxDaGFydEpzQ29tcG9uZW50XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm92aWRlZD17cHJvdmlkZWR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9qZWN0SWQ9e3Byb2plY3RJZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFkZENoYXJ0PXthZGRDaGFydH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoYXJ0VHlwZVVwZGF0ZT17Y2hhcnRUeXBlVXBkYXRlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY3VycmVudEluZGV4PXtjdXJyZW50SW5kZXh9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWxldGVGaWVsZD17ZGVsZXRlRmllbGR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250YWluZXJSZWY9e2NvbnRhaW5lclJlZn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGFzZXRMYWJlbDZVcGRhdGU9e2RhdGFzZXRMYWJlbDZVcGRhdGV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhc2V0TGFiZWw1VXBkYXRlPXtkYXRhc2V0TGFiZWw1VXBkYXRlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YXNldExhYmVsNFVwZGF0ZT17ZGF0YXNldExhYmVsNFVwZGF0ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGFzZXRMYWJlbDNVcGRhdGU9e2RhdGFzZXRMYWJlbDNVcGRhdGV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhc2V0TGFiZWwyVXBkYXRlPXtkYXRhc2V0TGFiZWwyVXBkYXRlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YXNldExhYmVsMVVwZGF0ZT17ZGF0YXNldExhYmVsMVVwZGF0ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGFzZXQ2VXBkYXRlPXtkYXRhc2V0NlVwZGF0ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGFzZXQ1VXBkYXRlPXtkYXRhc2V0NVVwZGF0ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGFzZXQ0VXBkYXRlPXtkYXRhc2V0NFVwZGF0ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGFzZXQzVXBkYXRlPXtkYXRhc2V0M1VwZGF0ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGFzZXQyVXBkYXRlPXtkYXRhc2V0MlVwZGF0ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGFzZXQxVXBkYXRlPXtkYXRhc2V0MVVwZGF0ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsVXBkYXRlPXtsYWJlbFVwZGF0ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoYXJ0TGFiZWxzVXBkYXRlPXtjaGFydExhYmVsc1VwZGF0ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpZWxkPXtmaWVsZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdGVkU2VjdGlvbj17c2VsZWN0ZWRTZWN0aW9ufVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5kZXg9e2ZpZWxkLmluZGV4fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hhcnRWYWx1ZVVwZGF0ZT17Y2hhcnRWYWx1ZVVwZGF0ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdGVkU2VjdGlvbj17c2VsZWN0ZWRTZWN0aW9ufVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICkpIHx8XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIChmaWVsZC50eXBlID09ICdoZWFkZXInICYmIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8SGVhZGVyQ29tcG9uZW50XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWVsZFVwZGF0ZT17ZmllbGRVcGRhdGV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjdXJyZW50SW5kZXg9e2N1cnJlbnRJbmRleH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlYWRlclVwZGF0ZT17aGVhZGVyVXBkYXRlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvdmlkZWQ9e3Byb3ZpZGVkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVsZXRlRmllbGQ9e2RlbGV0ZUZpZWxkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZmllbGQ9e2ZpZWxkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICkpIHx8XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIChmaWVsZC50eXBlID09ICd0YWJsZScgJiYgKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxUYWJsZUVsZW1lbnRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN1cnJlbnRJbmRleD17Y3VycmVudEluZGV4fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFibGVVcGRhdGU9e3RhYmxlVXBkYXRlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVsZXRlRmllbGQ9e2RlbGV0ZUZpZWxkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvdmlkZWQ9e3Byb3ZpZGVkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZmllbGQ9e2ZpZWxkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICkpIHx8XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIChmaWVsZC50eXBlID09ICdzcGFjaW5nJyAmJiA8U3BhY2luZ0VsZW1lbnQgZGVsZXRlRmllbGQ9e2RlbGV0ZUZpZWxkfSBwcm92aWRlZD17cHJvdmlkZWR9IGZpZWxkPXtmaWVsZH0gLz4pXHJcbiAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9EcmFnZ2FibGU+XHJcbiAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICB9KX1cclxuICAgICAgICAgICAgICB7cHJvdmlkZWQucGxhY2Vob2xkZXJ9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgKX1cclxuICAgICAgICA8L0Ryb3BwYWJsZT5cclxuICAgICAgPC9EcmFnRHJvcENvbnRleHQ+XHJcbiAgICA8Lz5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgRWRpdG9ySW5wdXRFbGVtZW50O1xyXG4iXSwic291cmNlUm9vdCI6IiJ9