webpackHotUpdate_N_E("pages/dashboard/projects/[project]/business-plan",{

/***/ "./components/dashboard/startup/project/business-app/Text.js":
/*!*******************************************************************!*\
  !*** ./components/dashboard/startup/project/business-app/Text.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var C_off_saas_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var C_off_saas_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/regenerator */ "./node_modules/next/node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var C_off_saas_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(C_off_saas_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var C_off_saas_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/image */ "./node_modules/next/image.js");
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _utils_helpers__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../utils/helpers */ "./utils/helpers.js");
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/dynamic */ "./node_modules/next/dynamic.js");
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_7__);





var _jsxFileName = "C:\\off-saas\\components\\dashboard\\startup\\project\\business-app\\Text.js",
    _this = undefined,
    _s = $RefreshSig$();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(C_off_saas_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }





var ReactQuill = next_dynamic__WEBPACK_IMPORTED_MODULE_7___default()(_c = function _c() {
  return __webpack_require__.e(/*! import() */ 1).then(__webpack_require__.t.bind(null, /*! react-quill */ "./node_modules/react-quill/lib/index.js", 7));
}, {
  ssr: false,
  loadableGenerated: {
    webpack: function webpack() {
      return [/*require.resolve*/(/*! react-quill */ "./node_modules/react-quill/lib/index.js")];
    },
    modules: ["..\\components\\dashboard\\startup\\project\\business-app\\Text.js -> " + 'react-quill']
  }
}); // const Quill = dynamic(() => import('react-quill'), { ssr: false });
// const Quill = dynamic(() =>
//   import('react-quill').then(module => module.Quill)
// );
// const { Quill } = await import("react-quill");
// const QuillBetterTable = dynamic(() => import('quill-better-table'), { ssr: false });
// Quill.register("modules/better-table", QuillBetterTable);
// const editorModules = {
//   table: true, // disable table module
//   "better-table": {
//     operationMenu: {
//       items: {
//         unmergeCells: {
//           text: "Another unmerge cells name"
//         }
//       }
//     }
//   },
//   keyboard: {
//     bindings: QuillBetterTable.keyboardBindings
//   }
// };

_c2 = ReactQuill;

var TextElement = function TextElement(_ref) {
  _s();

  var fieldUpdate = _ref.fieldUpdate,
      selectedSection = _ref.selectedSection,
      currentIndex = _ref.currentIndex,
      provided = _ref.provided,
      field = _ref.field,
      deleteField = _ref.deleteField,
      setCurrentIndex = _ref.setCurrentIndex;
  console.log('Field from text --> ', field);

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(''),
      text = _useState[0],
      setText = _useState[1];

  Object(react__WEBPACK_IMPORTED_MODULE_4__["useEffect"])(function () {
    if (!text) {
      setText(field.body);
    }
  }, [field]);

  var updateBody = function updateBody(val) {
    console.log('val --> ', val);
    setText(val);
    var value = {
      // To może niekoniecznie
      // id: selectedSection.id,
      // title,
      body: val,
      index: field.index,
      selSection: selectedSection,
      currentIndex: currentIndex
    };
    update(value);
  };

  var update = Object(react__WEBPACK_IMPORTED_MODULE_4__["useCallback"])(Object(_utils_helpers__WEBPACK_IMPORTED_MODULE_6__["default"])( /*#__PURE__*/function () {
    var _ref2 = Object(C_off_saas_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__["default"])( /*#__PURE__*/C_off_saas_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.mark(function _callee(value) {
      var currentSectionIndex;
      return C_off_saas_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              // sectionUpdate(value.id, value); // TITLE UPDATE
              console.log(value.selSection);
              console.log(value);
              _context.next = 4;
              return value.selSection.fields.findIndex(function (field) {
                return field.index == value.index;
              });

            case 4:
              currentSectionIndex = _context.sent;
              console.log(currentSectionIndex == false);
              console.log(currentSectionIndex !== -1);
              console.log(currentSectionIndex); // CHYBA DZIAŁA, WSZYSTKO ZALEŻY OD RESETU ZA POMOCĄ setCurrentIndex
              // if (currentSectionIndex !== -1) {

              fieldUpdate(value, currentSectionIndex, value.currentIndex); // }
              // const particularIndex = selectedSection.fields.findIndex((doc) => doc.index = value.index);

            case 9:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function (_x) {
      return _ref2.apply(this, arguments);
    };
  }(), 500), []);
  var modules = {
    toolbar: [[{
      header: [1, 2, false]
    }], ['bold', 'italic', 'underline', 'strike', 'blockquote'], [{
      list: 'ordered'
    }, {
      list: 'bullet'
    }, {
      indent: '-1'
    }, {
      indent: '+1'
    }], [{
      align: ''
    }, {
      align: 'center'
    }, {
      align: 'right'
    }, {
      align: 'justify'
    }], ['link', 'image'], ['clean']]
  };
  var formats = ['header', 'font', 'size', 'bold', 'italic', 'underline', 'strike', 'blockquote', 'list', 'bullet', 'indent', 'align', 'link', 'image', 'video', 'code-block'];
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", _objectSpread(_objectSpread({
    ref: provided.innerRef
  }, provided.draggableProps), {}, {
    className: "w-full grid grid-cols-12fr justify-items-center items-center mt-6",
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
      className: "col-start-2 col-end-12 relative flex flex-col h-full w-full flex px-8 py-8 rounded-2xl bg-white dark:bg-background",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(ReactQuill // onKeyPress={() => setCurrentIndex(field.index)}
      , {
        modules: modules,
        formats: formats,
        onKeyUp: function onKeyUp() {
          return setCurrentIndex(field.index);
        },
        onKeyDown: function onKeyDown() {
          return setCurrentIndex(field.index);
        },
        onKeyPress: function onKeyPress() {
          return setCurrentIndex(field.index);
        },
        onFocus: function onFocus() {
          return setCurrentIndex(field.index);
        },
        onChangeSelection: function onChangeSelection() {
          return setCurrentIndex(field.index);
        },
        className: "bg-white rounded-2xl border-l-2 border-r-2 border-b-2 border-background",
        placeholder: "Enter your text here",
        theme: "snow",
        value: text,
        onChange: updateBody
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 111,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 110,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
      className: "col-start-12 col-end-13 justify-self-center self-start flex flex-col flex-wrap gap-2",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(next_image__WEBPACK_IMPORTED_MODULE_5___default.a, {
        onClick: function onClick() {
          return deleteField(field.index);
        },
        className: "cursor-pointer",
        src: "/plan-bar/exit4.svg",
        height: 36,
        width: 36
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 128,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(next_image__WEBPACK_IMPORTED_MODULE_5___default.a, _objectSpread(_objectSpread({}, provided.dragHandleProps), {}, {
        className: "cursor-pointer",
        src: "/plan-bar/drag2.svg",
        height: 36,
        width: 36
      }), void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 129,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 127,
      columnNumber: 7
    }, _this)]
  }), void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 109,
    columnNumber: 5
  }, _this);
};

_s(TextElement, "EXkJINGIiEI29MtjLj+JgcvVmJY=");

_c3 = TextElement;
/* harmony default export */ __webpack_exports__["default"] = (TextElement);

var _c, _c2, _c3;

$RefreshReg$(_c, "ReactQuill$dynamic");
$RefreshReg$(_c2, "ReactQuill");
$RefreshReg$(_c3, "TextElement");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9kYXNoYm9hcmQvc3RhcnR1cC9wcm9qZWN0L2J1c2luZXNzLWFwcC9UZXh0LmpzIl0sIm5hbWVzIjpbIlJlYWN0UXVpbGwiLCJkeW5hbWljIiwic3NyIiwiVGV4dEVsZW1lbnQiLCJmaWVsZFVwZGF0ZSIsInNlbGVjdGVkU2VjdGlvbiIsImN1cnJlbnRJbmRleCIsInByb3ZpZGVkIiwiZmllbGQiLCJkZWxldGVGaWVsZCIsInNldEN1cnJlbnRJbmRleCIsImNvbnNvbGUiLCJsb2ciLCJ1c2VTdGF0ZSIsInRleHQiLCJzZXRUZXh0IiwidXNlRWZmZWN0IiwiYm9keSIsInVwZGF0ZUJvZHkiLCJ2YWwiLCJ2YWx1ZSIsImluZGV4Iiwic2VsU2VjdGlvbiIsInVwZGF0ZSIsInVzZUNhbGxiYWNrIiwiZGVib3VuY2UiLCJmaWVsZHMiLCJmaW5kSW5kZXgiLCJjdXJyZW50U2VjdGlvbkluZGV4IiwibW9kdWxlcyIsInRvb2xiYXIiLCJoZWFkZXIiLCJsaXN0IiwiaW5kZW50IiwiYWxpZ24iLCJmb3JtYXRzIiwiaW5uZXJSZWYiLCJkcmFnZ2FibGVQcm9wcyIsImRyYWdIYW5kbGVQcm9wcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBQ0EsSUFBTUEsVUFBVSxHQUFHQyxtREFBTyxNQUFDO0FBQUEsU0FBTSxnSkFBTjtBQUFBLENBQUQsRUFBOEI7QUFBRUMsS0FBRyxFQUFFLEtBQVA7QUFBQTtBQUFBO0FBQUEsa0NBQWhCLDREQUFnQjtBQUFBO0FBQUEseUZBQWhCLGFBQWdCO0FBQUE7QUFBQSxDQUE5QixDQUExQixDLENBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O01BeEJNRixV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QUEsaUJBQU1YLGVBQWUsQ0FBQ0YsS0FBSyxDQUFDYSxLQUFQLENBQXJCO0FBQUEsU0FSckI7QUFTRSxpQkFBUyxFQUFDLHlFQVRaO0FBVUUsbUJBQVcsRUFBQyxzQkFWZDtBQVdFLGFBQUssRUFBQyxNQVhSO0FBWUUsYUFBSyxFQUFFUCxJQVpUO0FBYUUsZ0JBQVEsRUFBRUk7QUFiWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURGLGVBa0JFO0FBQUssZUFBUyxFQUFDLHNGQUFmO0FBQUEsOEJBQ0UscUVBQUMsaURBQUQ7QUFBTyxlQUFPLEVBQUU7QUFBQSxpQkFBTVQsV0FBVyxDQUFDRCxLQUFLLENBQUNhLEtBQVAsQ0FBakI7QUFBQSxTQUFoQjtBQUFnRCxpQkFBUyxFQUFDLGdCQUExRDtBQUEyRSxXQUFHLHVCQUE5RTtBQUF1RyxjQUFNLEVBQUUsRUFBL0c7QUFBbUgsYUFBSyxFQUFFO0FBQTFIO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERixlQUVFLHFFQUFDLGlEQUFELGtDQUFXZCxRQUFRLENBQUMrQixlQUFwQjtBQUFxQyxpQkFBUyxFQUFDLGdCQUEvQztBQUFnRSxXQUFHLHVCQUFuRTtBQUE0RixjQUFNLEVBQUUsRUFBcEc7QUFBd0csYUFBSyxFQUFFO0FBQS9HO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFsQkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUF5QkQsQ0FyR0Q7O0dBQU1uQyxXOztNQUFBQSxXO0FBdUdTQSwwRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9kYXNoYm9hcmQvcHJvamVjdHMvW3Byb2plY3RdL2J1c2luZXNzLXBsYW4uYzAwYzU5YjlhOTlkZmVlOWE5YjYuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VDYWxsYmFjaywgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IEltYWdlIGZyb20gJ25leHQvaW1hZ2UnO1xyXG5pbXBvcnQgZGVib3VuY2UgZnJvbSAnLi4vLi4vLi4vLi4vLi4vdXRpbHMvaGVscGVycyc7XHJcblxyXG5pbXBvcnQgZHluYW1pYyBmcm9tICduZXh0L2R5bmFtaWMnO1xyXG5jb25zdCBSZWFjdFF1aWxsID0gZHluYW1pYygoKSA9PiBpbXBvcnQoJ3JlYWN0LXF1aWxsJyksIHsgc3NyOiBmYWxzZSB9KTtcclxuLy8gY29uc3QgUXVpbGwgPSBkeW5hbWljKCgpID0+IGltcG9ydCgncmVhY3QtcXVpbGwnKSwgeyBzc3I6IGZhbHNlIH0pO1xyXG4vLyBjb25zdCBRdWlsbCA9IGR5bmFtaWMoKCkgPT5cclxuLy8gICBpbXBvcnQoJ3JlYWN0LXF1aWxsJykudGhlbihtb2R1bGUgPT4gbW9kdWxlLlF1aWxsKVxyXG4vLyApO1xyXG4vLyBjb25zdCB7IFF1aWxsIH0gPSBhd2FpdCBpbXBvcnQoXCJyZWFjdC1xdWlsbFwiKTtcclxuLy8gY29uc3QgUXVpbGxCZXR0ZXJUYWJsZSA9IGR5bmFtaWMoKCkgPT4gaW1wb3J0KCdxdWlsbC1iZXR0ZXItdGFibGUnKSwgeyBzc3I6IGZhbHNlIH0pO1xyXG5cclxuLy8gUXVpbGwucmVnaXN0ZXIoXCJtb2R1bGVzL2JldHRlci10YWJsZVwiLCBRdWlsbEJldHRlclRhYmxlKTtcclxuXHJcbi8vIGNvbnN0IGVkaXRvck1vZHVsZXMgPSB7XHJcbi8vICAgdGFibGU6IHRydWUsIC8vIGRpc2FibGUgdGFibGUgbW9kdWxlXHJcbi8vICAgXCJiZXR0ZXItdGFibGVcIjoge1xyXG4vLyAgICAgb3BlcmF0aW9uTWVudToge1xyXG4vLyAgICAgICBpdGVtczoge1xyXG4vLyAgICAgICAgIHVubWVyZ2VDZWxsczoge1xyXG4vLyAgICAgICAgICAgdGV4dDogXCJBbm90aGVyIHVubWVyZ2UgY2VsbHMgbmFtZVwiXHJcbi8vICAgICAgICAgfVxyXG4vLyAgICAgICB9XHJcbi8vICAgICB9XHJcbi8vICAgfSxcclxuLy8gICBrZXlib2FyZDoge1xyXG4vLyAgICAgYmluZGluZ3M6IFF1aWxsQmV0dGVyVGFibGUua2V5Ym9hcmRCaW5kaW5nc1xyXG4vLyAgIH1cclxuLy8gfTtcclxuXHJcbmNvbnN0IFRleHRFbGVtZW50ID0gKHsgZmllbGRVcGRhdGUsIHNlbGVjdGVkU2VjdGlvbiwgY3VycmVudEluZGV4LCBwcm92aWRlZCwgZmllbGQsIGRlbGV0ZUZpZWxkLCBzZXRDdXJyZW50SW5kZXggfSkgPT4ge1xyXG4gIGNvbnNvbGUubG9nKCdGaWVsZCBmcm9tIHRleHQgLS0+ICcsIGZpZWxkKTtcclxuXHJcbiAgY29uc3QgW3RleHQsIHNldFRleHRdID0gdXNlU3RhdGUoJycpO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaWYgKCF0ZXh0KSB7XHJcbiAgICAgIHNldFRleHQoZmllbGQuYm9keSk7XHJcbiAgICB9XHJcbiAgfSwgW2ZpZWxkXSk7XHJcblxyXG4gIGNvbnN0IHVwZGF0ZUJvZHkgPSAodmFsKSA9PiB7XHJcbiAgICBjb25zb2xlLmxvZygndmFsIC0tPiAnLCB2YWwpO1xyXG4gICAgc2V0VGV4dCh2YWwpO1xyXG4gICAgY29uc3QgdmFsdWUgPSB7XHJcbiAgICAgIC8vIFRvIG1vxbxlIG5pZWtvbmllY3puaWVcclxuICAgICAgLy8gaWQ6IHNlbGVjdGVkU2VjdGlvbi5pZCxcclxuICAgICAgLy8gdGl0bGUsXHJcbiAgICAgIGJvZHk6IHZhbCxcclxuICAgICAgaW5kZXg6IGZpZWxkLmluZGV4LFxyXG4gICAgICBzZWxTZWN0aW9uOiBzZWxlY3RlZFNlY3Rpb24sXHJcbiAgICAgIGN1cnJlbnRJbmRleCxcclxuICAgIH07XHJcbiAgICB1cGRhdGUodmFsdWUpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IHVwZGF0ZSA9IHVzZUNhbGxiYWNrKFxyXG4gICAgZGVib3VuY2UoYXN5bmMgKHZhbHVlKSA9PiB7XHJcbiAgICAgIC8vIHNlY3Rpb25VcGRhdGUodmFsdWUuaWQsIHZhbHVlKTsgLy8gVElUTEUgVVBEQVRFXHJcblxyXG4gICAgICBjb25zb2xlLmxvZyh2YWx1ZS5zZWxTZWN0aW9uKTtcclxuICAgICAgY29uc29sZS5sb2codmFsdWUpO1xyXG4gICAgICBjb25zdCBjdXJyZW50U2VjdGlvbkluZGV4ID0gYXdhaXQgdmFsdWUuc2VsU2VjdGlvbi5maWVsZHMuZmluZEluZGV4KChmaWVsZCkgPT4gZmllbGQuaW5kZXggPT0gdmFsdWUuaW5kZXgpO1xyXG4gICAgICBjb25zb2xlLmxvZyhjdXJyZW50U2VjdGlvbkluZGV4ID09IGZhbHNlKTtcclxuICAgICAgY29uc29sZS5sb2coY3VycmVudFNlY3Rpb25JbmRleCAhPT0gLTEpO1xyXG4gICAgICBjb25zb2xlLmxvZyhjdXJyZW50U2VjdGlvbkluZGV4KTtcclxuXHJcbiAgICAgIC8vIENIWUJBIERaSUHFgUEsIFdTWllTVEtPIFpBTEXFu1kgT0QgUkVTRVRVIFpBIFBPTU9DxIQgc2V0Q3VycmVudEluZGV4XHJcbiAgICAgIC8vIGlmIChjdXJyZW50U2VjdGlvbkluZGV4ICE9PSAtMSkge1xyXG4gICAgICBmaWVsZFVwZGF0ZSh2YWx1ZSwgY3VycmVudFNlY3Rpb25JbmRleCwgdmFsdWUuY3VycmVudEluZGV4KTtcclxuICAgICAgLy8gfVxyXG4gICAgICAvLyBjb25zdCBwYXJ0aWN1bGFySW5kZXggPSBzZWxlY3RlZFNlY3Rpb24uZmllbGRzLmZpbmRJbmRleCgoZG9jKSA9PiBkb2MuaW5kZXggPSB2YWx1ZS5pbmRleCk7XHJcbiAgICB9LCA1MDApLFxyXG4gICAgW11cclxuICApO1xyXG5cclxuICBjb25zdCBtb2R1bGVzID0ge1xyXG4gICAgdG9vbGJhcjogW1xyXG4gICAgICBbeyBoZWFkZXI6IFsxLCAyLCBmYWxzZV0gfV0sXHJcbiAgICAgIFsnYm9sZCcsICdpdGFsaWMnLCAndW5kZXJsaW5lJywgJ3N0cmlrZScsICdibG9ja3F1b3RlJ10sXHJcbiAgICAgIFt7IGxpc3Q6ICdvcmRlcmVkJyB9LCB7IGxpc3Q6ICdidWxsZXQnIH0sIHsgaW5kZW50OiAnLTEnIH0sIHsgaW5kZW50OiAnKzEnIH1dLFxyXG4gICAgICBbeyBhbGlnbjogJycgfSwgeyBhbGlnbjogJ2NlbnRlcicgfSwgeyBhbGlnbjogJ3JpZ2h0JyB9LCB7IGFsaWduOiAnanVzdGlmeScgfV0sXHJcbiAgICAgIFsnbGluaycsICdpbWFnZSddLFxyXG4gICAgICBbJ2NsZWFuJ10sXHJcbiAgICBdLFxyXG4gIH07XHJcblxyXG4gIGNvbnN0IGZvcm1hdHMgPSBbXHJcbiAgICAnaGVhZGVyJyxcclxuICAgICdmb250JyxcclxuICAgICdzaXplJyxcclxuICAgICdib2xkJyxcclxuICAgICdpdGFsaWMnLFxyXG4gICAgJ3VuZGVybGluZScsXHJcbiAgICAnc3RyaWtlJyxcclxuICAgICdibG9ja3F1b3RlJyxcclxuICAgICdsaXN0JyxcclxuICAgICdidWxsZXQnLFxyXG4gICAgJ2luZGVudCcsXHJcbiAgICAnYWxpZ24nLFxyXG4gICAgJ2xpbmsnLFxyXG4gICAgJ2ltYWdlJyxcclxuICAgICd2aWRlbycsXHJcbiAgICAnY29kZS1ibG9jaycsXHJcbiAgXTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgcmVmPXtwcm92aWRlZC5pbm5lclJlZn0gey4uLnByb3ZpZGVkLmRyYWdnYWJsZVByb3BzfSBjbGFzc05hbWU9XCJ3LWZ1bGwgZ3JpZCBncmlkLWNvbHMtMTJmciBqdXN0aWZ5LWl0ZW1zLWNlbnRlciBpdGVtcy1jZW50ZXIgbXQtNlwiPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1zdGFydC0yIGNvbC1lbmQtMTIgcmVsYXRpdmUgZmxleCBmbGV4LWNvbCBoLWZ1bGwgdy1mdWxsIGZsZXggcHgtOCBweS04IHJvdW5kZWQtMnhsIGJnLXdoaXRlIGRhcms6YmctYmFja2dyb3VuZFwiPlxyXG4gICAgICAgIDxSZWFjdFF1aWxsXHJcbiAgICAgICAgICAvLyBvbktleVByZXNzPXsoKSA9PiBzZXRDdXJyZW50SW5kZXgoZmllbGQuaW5kZXgpfVxyXG4gICAgICAgICAgbW9kdWxlcz17bW9kdWxlc31cclxuICAgICAgICAgIGZvcm1hdHM9e2Zvcm1hdHN9XHJcbiAgICAgICAgICBvbktleVVwPXsoKSA9PiBzZXRDdXJyZW50SW5kZXgoZmllbGQuaW5kZXgpfVxyXG4gICAgICAgICAgb25LZXlEb3duPXsoKSA9PiBzZXRDdXJyZW50SW5kZXgoZmllbGQuaW5kZXgpfVxyXG4gICAgICAgICAgb25LZXlQcmVzcz17KCkgPT4gc2V0Q3VycmVudEluZGV4KGZpZWxkLmluZGV4KX1cclxuICAgICAgICAgIG9uRm9jdXM9eygpID0+IHNldEN1cnJlbnRJbmRleChmaWVsZC5pbmRleCl9XHJcbiAgICAgICAgICBvbkNoYW5nZVNlbGVjdGlvbj17KCkgPT4gc2V0Q3VycmVudEluZGV4KGZpZWxkLmluZGV4KX1cclxuICAgICAgICAgIGNsYXNzTmFtZT1cImJnLXdoaXRlIHJvdW5kZWQtMnhsIGJvcmRlci1sLTIgYm9yZGVyLXItMiBib3JkZXItYi0yIGJvcmRlci1iYWNrZ3JvdW5kXCJcclxuICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRW50ZXIgeW91ciB0ZXh0IGhlcmVcIlxyXG4gICAgICAgICAgdGhlbWU9XCJzbm93XCJcclxuICAgICAgICAgIHZhbHVlPXt0ZXh0fVxyXG4gICAgICAgICAgb25DaGFuZ2U9e3VwZGF0ZUJvZHl9XHJcbiAgICAgICAgPjwvUmVhY3RRdWlsbD5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXN0YXJ0LTEyIGNvbC1lbmQtMTMganVzdGlmeS1zZWxmLWNlbnRlciBzZWxmLXN0YXJ0IGZsZXggZmxleC1jb2wgZmxleC13cmFwIGdhcC0yXCI+XHJcbiAgICAgICAgPEltYWdlIG9uQ2xpY2s9eygpID0+IGRlbGV0ZUZpZWxkKGZpZWxkLmluZGV4KX0gY2xhc3NOYW1lPVwiY3Vyc29yLXBvaW50ZXJcIiBzcmM9e2AvcGxhbi1iYXIvZXhpdDQuc3ZnYH0gaGVpZ2h0PXszNn0gd2lkdGg9ezM2fSAvPlxyXG4gICAgICAgIDxJbWFnZSB7Li4ucHJvdmlkZWQuZHJhZ0hhbmRsZVByb3BzfSBjbGFzc05hbWU9XCJjdXJzb3ItcG9pbnRlclwiIHNyYz17YC9wbGFuLWJhci9kcmFnMi5zdmdgfSBoZWlnaHQ9ezM2fSB3aWR0aD17MzZ9IC8+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFRleHRFbGVtZW50O1xyXG4iXSwic291cmNlUm9vdCI6IiJ9