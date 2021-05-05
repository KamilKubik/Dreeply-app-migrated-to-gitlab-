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
    }], ['bold', 'italic', 'underline', 'strike'], [{
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
  var formats = ['header', 'font', 'size', 'bold', 'italic', 'underline', 'strike', // 'blockquote',
  'list', 'bullet', 'indent', 'align', 'link', 'image', 'video', 'code-block'];
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9kYXNoYm9hcmQvc3RhcnR1cC9wcm9qZWN0L2J1c2luZXNzLWFwcC9UZXh0LmpzIl0sIm5hbWVzIjpbIlJlYWN0UXVpbGwiLCJkeW5hbWljIiwic3NyIiwiVGV4dEVsZW1lbnQiLCJmaWVsZFVwZGF0ZSIsInNlbGVjdGVkU2VjdGlvbiIsImN1cnJlbnRJbmRleCIsInByb3ZpZGVkIiwiZmllbGQiLCJkZWxldGVGaWVsZCIsInNldEN1cnJlbnRJbmRleCIsImNvbnNvbGUiLCJsb2ciLCJ1c2VTdGF0ZSIsInRleHQiLCJzZXRUZXh0IiwidXNlRWZmZWN0IiwiYm9keSIsInVwZGF0ZUJvZHkiLCJ2YWwiLCJ2YWx1ZSIsImluZGV4Iiwic2VsU2VjdGlvbiIsInVwZGF0ZSIsInVzZUNhbGxiYWNrIiwiZGVib3VuY2UiLCJmaWVsZHMiLCJmaW5kSW5kZXgiLCJjdXJyZW50U2VjdGlvbkluZGV4IiwibW9kdWxlcyIsInRvb2xiYXIiLCJoZWFkZXIiLCJsaXN0IiwiaW5kZW50IiwiYWxpZ24iLCJmb3JtYXRzIiwiaW5uZXJSZWYiLCJkcmFnZ2FibGVQcm9wcyIsImRyYWdIYW5kbGVQcm9wcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBQ0EsSUFBTUEsVUFBVSxHQUFHQyxtREFBTyxNQUFDO0FBQUEsU0FBTSxnSkFBTjtBQUFBLENBQUQsRUFBOEI7QUFBRUMsS0FBRyxFQUFFLEtBQVA7QUFBQTtBQUFBO0FBQUEsa0NBQWhCLDREQUFnQjtBQUFBO0FBQUEseUZBQWhCLGFBQWdCO0FBQUE7QUFBQSxDQUE5QixDQUExQixDLENBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O01BeEJNRixV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QUNGLEtBQUssQ0FBQ2EsS0FBUCxDQUFyQjtBQUFBLFNBUnJCO0FBU0UsaUJBQVMsRUFBQyx5RUFUWjtBQVVFLG1CQUFXLEVBQUMsc0JBVmQ7QUFXRSxhQUFLLEVBQUMsTUFYUjtBQVlFLGFBQUssRUFBRVAsSUFaVDtBQWFFLGdCQUFRLEVBQUVJO0FBYlo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFERixlQWtCRTtBQUFLLGVBQVMsRUFBQyxzRkFBZjtBQUFBLDhCQUNFLHFFQUFDLGlEQUFEO0FBQU8sZUFBTyxFQUFFO0FBQUEsaUJBQU1ULFdBQVcsQ0FBQ0QsS0FBSyxDQUFDYSxLQUFQLENBQWpCO0FBQUEsU0FBaEI7QUFBZ0QsaUJBQVMsRUFBQyxnQkFBMUQ7QUFBMkUsV0FBRyx1QkFBOUU7QUFBdUcsY0FBTSxFQUFFLEVBQS9HO0FBQW1ILGFBQUssRUFBRTtBQUExSDtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREYsZUFFRSxxRUFBQyxpREFBRCxrQ0FBV2QsUUFBUSxDQUFDK0IsZUFBcEI7QUFBcUMsaUJBQVMsRUFBQyxnQkFBL0M7QUFBZ0UsV0FBRyx1QkFBbkU7QUFBNEYsY0FBTSxFQUFFLEVBQXBHO0FBQXdHLGFBQUssRUFBRTtBQUEvRztBQUFBO0FBQUE7QUFBQTtBQUFBLGVBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBbEJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBeUJELENBckdEOztHQUFNbkMsVzs7TUFBQUEsVztBQXVHU0EsMEVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvZGFzaGJvYXJkL3Byb2plY3RzL1twcm9qZWN0XS9idXNpbmVzcy1wbGFuLjk1MjM3NmE3NjgzOTUzMTRmYmFiLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlQ2FsbGJhY2ssIHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBJbWFnZSBmcm9tICduZXh0L2ltYWdlJztcclxuaW1wb3J0IGRlYm91bmNlIGZyb20gJy4uLy4uLy4uLy4uLy4uL3V0aWxzL2hlbHBlcnMnO1xyXG5cclxuaW1wb3J0IGR5bmFtaWMgZnJvbSAnbmV4dC9keW5hbWljJztcclxuY29uc3QgUmVhY3RRdWlsbCA9IGR5bmFtaWMoKCkgPT4gaW1wb3J0KCdyZWFjdC1xdWlsbCcpLCB7IHNzcjogZmFsc2UgfSk7XHJcbi8vIGNvbnN0IFF1aWxsID0gZHluYW1pYygoKSA9PiBpbXBvcnQoJ3JlYWN0LXF1aWxsJyksIHsgc3NyOiBmYWxzZSB9KTtcclxuLy8gY29uc3QgUXVpbGwgPSBkeW5hbWljKCgpID0+XHJcbi8vICAgaW1wb3J0KCdyZWFjdC1xdWlsbCcpLnRoZW4obW9kdWxlID0+IG1vZHVsZS5RdWlsbClcclxuLy8gKTtcclxuLy8gY29uc3QgeyBRdWlsbCB9ID0gYXdhaXQgaW1wb3J0KFwicmVhY3QtcXVpbGxcIik7XHJcbi8vIGNvbnN0IFF1aWxsQmV0dGVyVGFibGUgPSBkeW5hbWljKCgpID0+IGltcG9ydCgncXVpbGwtYmV0dGVyLXRhYmxlJyksIHsgc3NyOiBmYWxzZSB9KTtcclxuXHJcbi8vIFF1aWxsLnJlZ2lzdGVyKFwibW9kdWxlcy9iZXR0ZXItdGFibGVcIiwgUXVpbGxCZXR0ZXJUYWJsZSk7XHJcblxyXG4vLyBjb25zdCBlZGl0b3JNb2R1bGVzID0ge1xyXG4vLyAgIHRhYmxlOiB0cnVlLCAvLyBkaXNhYmxlIHRhYmxlIG1vZHVsZVxyXG4vLyAgIFwiYmV0dGVyLXRhYmxlXCI6IHtcclxuLy8gICAgIG9wZXJhdGlvbk1lbnU6IHtcclxuLy8gICAgICAgaXRlbXM6IHtcclxuLy8gICAgICAgICB1bm1lcmdlQ2VsbHM6IHtcclxuLy8gICAgICAgICAgIHRleHQ6IFwiQW5vdGhlciB1bm1lcmdlIGNlbGxzIG5hbWVcIlxyXG4vLyAgICAgICAgIH1cclxuLy8gICAgICAgfVxyXG4vLyAgICAgfVxyXG4vLyAgIH0sXHJcbi8vICAga2V5Ym9hcmQ6IHtcclxuLy8gICAgIGJpbmRpbmdzOiBRdWlsbEJldHRlclRhYmxlLmtleWJvYXJkQmluZGluZ3NcclxuLy8gICB9XHJcbi8vIH07XHJcblxyXG5jb25zdCBUZXh0RWxlbWVudCA9ICh7IGZpZWxkVXBkYXRlLCBzZWxlY3RlZFNlY3Rpb24sIGN1cnJlbnRJbmRleCwgcHJvdmlkZWQsIGZpZWxkLCBkZWxldGVGaWVsZCwgc2V0Q3VycmVudEluZGV4IH0pID0+IHtcclxuICBjb25zb2xlLmxvZygnRmllbGQgZnJvbSB0ZXh0IC0tPiAnLCBmaWVsZCk7XHJcblxyXG4gIGNvbnN0IFt0ZXh0LCBzZXRUZXh0XSA9IHVzZVN0YXRlKCcnKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGlmICghdGV4dCkge1xyXG4gICAgICBzZXRUZXh0KGZpZWxkLmJvZHkpO1xyXG4gICAgfVxyXG4gIH0sIFtmaWVsZF0pO1xyXG5cclxuICBjb25zdCB1cGRhdGVCb2R5ID0gKHZhbCkgPT4ge1xyXG4gICAgY29uc29sZS5sb2coJ3ZhbCAtLT4gJywgdmFsKTtcclxuICAgIHNldFRleHQodmFsKTtcclxuICAgIGNvbnN0IHZhbHVlID0ge1xyXG4gICAgICAvLyBUbyBtb8W8ZSBuaWVrb25pZWN6bmllXHJcbiAgICAgIC8vIGlkOiBzZWxlY3RlZFNlY3Rpb24uaWQsXHJcbiAgICAgIC8vIHRpdGxlLFxyXG4gICAgICBib2R5OiB2YWwsXHJcbiAgICAgIGluZGV4OiBmaWVsZC5pbmRleCxcclxuICAgICAgc2VsU2VjdGlvbjogc2VsZWN0ZWRTZWN0aW9uLFxyXG4gICAgICBjdXJyZW50SW5kZXgsXHJcbiAgICB9O1xyXG4gICAgdXBkYXRlKHZhbHVlKTtcclxuICB9O1xyXG5cclxuICBjb25zdCB1cGRhdGUgPSB1c2VDYWxsYmFjayhcclxuICAgIGRlYm91bmNlKGFzeW5jICh2YWx1ZSkgPT4ge1xyXG4gICAgICAvLyBzZWN0aW9uVXBkYXRlKHZhbHVlLmlkLCB2YWx1ZSk7IC8vIFRJVExFIFVQREFURVxyXG5cclxuICAgICAgY29uc29sZS5sb2codmFsdWUuc2VsU2VjdGlvbik7XHJcbiAgICAgIGNvbnNvbGUubG9nKHZhbHVlKTtcclxuICAgICAgY29uc3QgY3VycmVudFNlY3Rpb25JbmRleCA9IGF3YWl0IHZhbHVlLnNlbFNlY3Rpb24uZmllbGRzLmZpbmRJbmRleCgoZmllbGQpID0+IGZpZWxkLmluZGV4ID09IHZhbHVlLmluZGV4KTtcclxuICAgICAgY29uc29sZS5sb2coY3VycmVudFNlY3Rpb25JbmRleCA9PSBmYWxzZSk7XHJcbiAgICAgIGNvbnNvbGUubG9nKGN1cnJlbnRTZWN0aW9uSW5kZXggIT09IC0xKTtcclxuICAgICAgY29uc29sZS5sb2coY3VycmVudFNlY3Rpb25JbmRleCk7XHJcblxyXG4gICAgICAvLyBDSFlCQSBEWklBxYFBLCBXU1pZU1RLTyBaQUxFxbtZIE9EIFJFU0VUVSBaQSBQT01PQ8SEIHNldEN1cnJlbnRJbmRleFxyXG4gICAgICAvLyBpZiAoY3VycmVudFNlY3Rpb25JbmRleCAhPT0gLTEpIHtcclxuICAgICAgZmllbGRVcGRhdGUodmFsdWUsIGN1cnJlbnRTZWN0aW9uSW5kZXgsIHZhbHVlLmN1cnJlbnRJbmRleCk7XHJcbiAgICAgIC8vIH1cclxuICAgICAgLy8gY29uc3QgcGFydGljdWxhckluZGV4ID0gc2VsZWN0ZWRTZWN0aW9uLmZpZWxkcy5maW5kSW5kZXgoKGRvYykgPT4gZG9jLmluZGV4ID0gdmFsdWUuaW5kZXgpO1xyXG4gICAgfSwgNTAwKSxcclxuICAgIFtdXHJcbiAgKTtcclxuXHJcbiAgY29uc3QgbW9kdWxlcyA9IHtcclxuICAgIHRvb2xiYXI6IFtcclxuICAgICAgW3sgaGVhZGVyOiBbMSwgMiwgZmFsc2VdIH1dLFxyXG4gICAgICBbJ2JvbGQnLCAnaXRhbGljJywgJ3VuZGVybGluZScsICdzdHJpa2UnXSxcclxuICAgICAgW3sgbGlzdDogJ29yZGVyZWQnIH0sIHsgbGlzdDogJ2J1bGxldCcgfSwgeyBpbmRlbnQ6ICctMScgfSwgeyBpbmRlbnQ6ICcrMScgfV0sXHJcbiAgICAgIFt7IGFsaWduOiAnJyB9LCB7IGFsaWduOiAnY2VudGVyJyB9LCB7IGFsaWduOiAncmlnaHQnIH0sIHsgYWxpZ246ICdqdXN0aWZ5JyB9XSxcclxuICAgICAgWydsaW5rJywgJ2ltYWdlJ10sXHJcbiAgICAgIFsnY2xlYW4nXSxcclxuICAgIF0sXHJcbiAgfTtcclxuXHJcbiAgY29uc3QgZm9ybWF0cyA9IFtcclxuICAgICdoZWFkZXInLFxyXG4gICAgJ2ZvbnQnLFxyXG4gICAgJ3NpemUnLFxyXG4gICAgJ2JvbGQnLFxyXG4gICAgJ2l0YWxpYycsXHJcbiAgICAndW5kZXJsaW5lJyxcclxuICAgICdzdHJpa2UnLFxyXG4gICAgLy8gJ2Jsb2NrcXVvdGUnLFxyXG4gICAgJ2xpc3QnLFxyXG4gICAgJ2J1bGxldCcsXHJcbiAgICAnaW5kZW50JyxcclxuICAgICdhbGlnbicsXHJcbiAgICAnbGluaycsXHJcbiAgICAnaW1hZ2UnLFxyXG4gICAgJ3ZpZGVvJyxcclxuICAgICdjb2RlLWJsb2NrJyxcclxuICBdO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiByZWY9e3Byb3ZpZGVkLmlubmVyUmVmfSB7Li4ucHJvdmlkZWQuZHJhZ2dhYmxlUHJvcHN9IGNsYXNzTmFtZT1cInctZnVsbCBncmlkIGdyaWQtY29scy0xMmZyIGp1c3RpZnktaXRlbXMtY2VudGVyIGl0ZW1zLWNlbnRlciBtdC02XCI+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXN0YXJ0LTIgY29sLWVuZC0xMiByZWxhdGl2ZSBmbGV4IGZsZXgtY29sIGgtZnVsbCB3LWZ1bGwgZmxleCBweC04IHB5LTggcm91bmRlZC0yeGwgYmctd2hpdGUgZGFyazpiZy1iYWNrZ3JvdW5kXCI+XHJcbiAgICAgICAgPFJlYWN0UXVpbGxcclxuICAgICAgICAgIC8vIG9uS2V5UHJlc3M9eygpID0+IHNldEN1cnJlbnRJbmRleChmaWVsZC5pbmRleCl9XHJcbiAgICAgICAgICBtb2R1bGVzPXttb2R1bGVzfVxyXG4gICAgICAgICAgZm9ybWF0cz17Zm9ybWF0c31cclxuICAgICAgICAgIG9uS2V5VXA9eygpID0+IHNldEN1cnJlbnRJbmRleChmaWVsZC5pbmRleCl9XHJcbiAgICAgICAgICBvbktleURvd249eygpID0+IHNldEN1cnJlbnRJbmRleChmaWVsZC5pbmRleCl9XHJcbiAgICAgICAgICBvbktleVByZXNzPXsoKSA9PiBzZXRDdXJyZW50SW5kZXgoZmllbGQuaW5kZXgpfVxyXG4gICAgICAgICAgb25Gb2N1cz17KCkgPT4gc2V0Q3VycmVudEluZGV4KGZpZWxkLmluZGV4KX1cclxuICAgICAgICAgIG9uQ2hhbmdlU2VsZWN0aW9uPXsoKSA9PiBzZXRDdXJyZW50SW5kZXgoZmllbGQuaW5kZXgpfVxyXG4gICAgICAgICAgY2xhc3NOYW1lPVwiYmctd2hpdGUgcm91bmRlZC0yeGwgYm9yZGVyLWwtMiBib3JkZXItci0yIGJvcmRlci1iLTIgYm9yZGVyLWJhY2tncm91bmRcIlxyXG4gICAgICAgICAgcGxhY2Vob2xkZXI9XCJFbnRlciB5b3VyIHRleHQgaGVyZVwiXHJcbiAgICAgICAgICB0aGVtZT1cInNub3dcIlxyXG4gICAgICAgICAgdmFsdWU9e3RleHR9XHJcbiAgICAgICAgICBvbkNoYW5nZT17dXBkYXRlQm9keX1cclxuICAgICAgICA+PC9SZWFjdFF1aWxsPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtc3RhcnQtMTIgY29sLWVuZC0xMyBqdXN0aWZ5LXNlbGYtY2VudGVyIHNlbGYtc3RhcnQgZmxleCBmbGV4LWNvbCBmbGV4LXdyYXAgZ2FwLTJcIj5cclxuICAgICAgICA8SW1hZ2Ugb25DbGljaz17KCkgPT4gZGVsZXRlRmllbGQoZmllbGQuaW5kZXgpfSBjbGFzc05hbWU9XCJjdXJzb3ItcG9pbnRlclwiIHNyYz17YC9wbGFuLWJhci9leGl0NC5zdmdgfSBoZWlnaHQ9ezM2fSB3aWR0aD17MzZ9IC8+XHJcbiAgICAgICAgPEltYWdlIHsuLi5wcm92aWRlZC5kcmFnSGFuZGxlUHJvcHN9IGNsYXNzTmFtZT1cImN1cnNvci1wb2ludGVyXCIgc3JjPXtgL3BsYW4tYmFyL2RyYWcyLnN2Z2B9IGhlaWdodD17MzZ9IHdpZHRoPXszNn0gLz5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgVGV4dEVsZW1lbnQ7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=