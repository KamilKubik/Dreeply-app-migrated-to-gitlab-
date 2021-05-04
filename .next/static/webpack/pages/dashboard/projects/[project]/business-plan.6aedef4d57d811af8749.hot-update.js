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

              fieldUpdate(value, currentSectionIndex, currentIndex); // }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9kYXNoYm9hcmQvc3RhcnR1cC9wcm9qZWN0L2J1c2luZXNzLWFwcC9UZXh0LmpzIl0sIm5hbWVzIjpbIlJlYWN0UXVpbGwiLCJkeW5hbWljIiwic3NyIiwiVGV4dEVsZW1lbnQiLCJmaWVsZFVwZGF0ZSIsInNlbGVjdGVkU2VjdGlvbiIsImN1cnJlbnRJbmRleCIsInByb3ZpZGVkIiwiZmllbGQiLCJkZWxldGVGaWVsZCIsInNldEN1cnJlbnRJbmRleCIsImNvbnNvbGUiLCJsb2ciLCJ1c2VTdGF0ZSIsInRleHQiLCJzZXRUZXh0IiwidXNlRWZmZWN0IiwiYm9keSIsInVwZGF0ZUJvZHkiLCJ2YWwiLCJ2YWx1ZSIsImluZGV4Iiwic2VsU2VjdGlvbiIsInVwZGF0ZSIsInVzZUNhbGxiYWNrIiwiZGVib3VuY2UiLCJmaWVsZHMiLCJmaW5kSW5kZXgiLCJjdXJyZW50U2VjdGlvbkluZGV4IiwibW9kdWxlcyIsInRvb2xiYXIiLCJoZWFkZXIiLCJsaXN0IiwiaW5kZW50IiwiYWxpZ24iLCJmb3JtYXRzIiwiaW5uZXJSZWYiLCJkcmFnZ2FibGVQcm9wcyIsImRyYWdIYW5kbGVQcm9wcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBQ0EsSUFBTUEsVUFBVSxHQUFHQyxtREFBTyxNQUFDO0FBQUEsU0FBTSxnSkFBTjtBQUFBLENBQUQsRUFBOEI7QUFBRUMsS0FBRyxFQUFFLEtBQVA7QUFBQTtBQUFBO0FBQUEsa0NBQWhCLDREQUFnQjtBQUFBO0FBQUEseUZBQWhCLGFBQWdCO0FBQUE7QUFBQSxDQUE5QixDQUExQixDLENBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O01BeEJNRixV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ZUFBZSxDQUFDRixLQUFLLENBQUNhLEtBQVAsQ0FBckI7QUFBQSxTQVJyQjtBQVNFLGlCQUFTLEVBQUMseUVBVFo7QUFVRSxtQkFBVyxFQUFDLHNCQVZkO0FBV0UsYUFBSyxFQUFDLE1BWFI7QUFZRSxhQUFLLEVBQUVQLElBWlQ7QUFhRSxnQkFBUSxFQUFFSTtBQWJaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREYsZUFrQkU7QUFBSyxlQUFTLEVBQUMsc0ZBQWY7QUFBQSw4QkFDRSxxRUFBQyxpREFBRDtBQUFPLGVBQU8sRUFBRTtBQUFBLGlCQUFNVCxXQUFXLENBQUNELEtBQUssQ0FBQ2EsS0FBUCxDQUFqQjtBQUFBLFNBQWhCO0FBQWdELGlCQUFTLEVBQUMsZ0JBQTFEO0FBQTJFLFdBQUcsdUJBQTlFO0FBQXVHLGNBQU0sRUFBRSxFQUEvRztBQUFtSCxhQUFLLEVBQUU7QUFBMUg7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURGLGVBRUUscUVBQUMsaURBQUQsa0NBQVdkLFFBQVEsQ0FBQytCLGVBQXBCO0FBQXFDLGlCQUFTLEVBQUMsZ0JBQS9DO0FBQWdFLFdBQUcsdUJBQW5FO0FBQTRGLGNBQU0sRUFBRSxFQUFwRztBQUF3RyxhQUFLLEVBQUU7QUFBL0c7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQWxCRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQXlCRCxDQXJHRDs7R0FBTW5DLFc7O01BQUFBLFc7QUF1R1NBLDBFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2Rhc2hib2FyZC9wcm9qZWN0cy9bcHJvamVjdF0vYnVzaW5lc3MtcGxhbi42YWVkZWY0ZDU3ZDgxMWFmODc0OS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUNhbGxiYWNrLCB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgSW1hZ2UgZnJvbSAnbmV4dC9pbWFnZSc7XHJcbmltcG9ydCBkZWJvdW5jZSBmcm9tICcuLi8uLi8uLi8uLi8uLi91dGlscy9oZWxwZXJzJztcclxuXHJcbmltcG9ydCBkeW5hbWljIGZyb20gJ25leHQvZHluYW1pYyc7XHJcbmNvbnN0IFJlYWN0UXVpbGwgPSBkeW5hbWljKCgpID0+IGltcG9ydCgncmVhY3QtcXVpbGwnKSwgeyBzc3I6IGZhbHNlIH0pO1xyXG4vLyBjb25zdCBRdWlsbCA9IGR5bmFtaWMoKCkgPT4gaW1wb3J0KCdyZWFjdC1xdWlsbCcpLCB7IHNzcjogZmFsc2UgfSk7XHJcbi8vIGNvbnN0IFF1aWxsID0gZHluYW1pYygoKSA9PlxyXG4vLyAgIGltcG9ydCgncmVhY3QtcXVpbGwnKS50aGVuKG1vZHVsZSA9PiBtb2R1bGUuUXVpbGwpXHJcbi8vICk7XHJcbi8vIGNvbnN0IHsgUXVpbGwgfSA9IGF3YWl0IGltcG9ydChcInJlYWN0LXF1aWxsXCIpO1xyXG4vLyBjb25zdCBRdWlsbEJldHRlclRhYmxlID0gZHluYW1pYygoKSA9PiBpbXBvcnQoJ3F1aWxsLWJldHRlci10YWJsZScpLCB7IHNzcjogZmFsc2UgfSk7XHJcblxyXG4vLyBRdWlsbC5yZWdpc3RlcihcIm1vZHVsZXMvYmV0dGVyLXRhYmxlXCIsIFF1aWxsQmV0dGVyVGFibGUpO1xyXG5cclxuLy8gY29uc3QgZWRpdG9yTW9kdWxlcyA9IHtcclxuLy8gICB0YWJsZTogdHJ1ZSwgLy8gZGlzYWJsZSB0YWJsZSBtb2R1bGVcclxuLy8gICBcImJldHRlci10YWJsZVwiOiB7XHJcbi8vICAgICBvcGVyYXRpb25NZW51OiB7XHJcbi8vICAgICAgIGl0ZW1zOiB7XHJcbi8vICAgICAgICAgdW5tZXJnZUNlbGxzOiB7XHJcbi8vICAgICAgICAgICB0ZXh0OiBcIkFub3RoZXIgdW5tZXJnZSBjZWxscyBuYW1lXCJcclxuLy8gICAgICAgICB9XHJcbi8vICAgICAgIH1cclxuLy8gICAgIH1cclxuLy8gICB9LFxyXG4vLyAgIGtleWJvYXJkOiB7XHJcbi8vICAgICBiaW5kaW5nczogUXVpbGxCZXR0ZXJUYWJsZS5rZXlib2FyZEJpbmRpbmdzXHJcbi8vICAgfVxyXG4vLyB9O1xyXG5cclxuY29uc3QgVGV4dEVsZW1lbnQgPSAoeyBmaWVsZFVwZGF0ZSwgc2VsZWN0ZWRTZWN0aW9uLCBjdXJyZW50SW5kZXgsIHByb3ZpZGVkLCBmaWVsZCwgZGVsZXRlRmllbGQsIHNldEN1cnJlbnRJbmRleCB9KSA9PiB7XHJcbiAgY29uc29sZS5sb2coJ0ZpZWxkIGZyb20gdGV4dCAtLT4gJywgZmllbGQpO1xyXG5cclxuICBjb25zdCBbdGV4dCwgc2V0VGV4dF0gPSB1c2VTdGF0ZSgnJyk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBpZiAoIXRleHQpIHtcclxuICAgICAgc2V0VGV4dChmaWVsZC5ib2R5KTtcclxuICAgIH1cclxuICB9LCBbZmllbGRdKTtcclxuXHJcbiAgY29uc3QgdXBkYXRlQm9keSA9ICh2YWwpID0+IHtcclxuICAgIGNvbnNvbGUubG9nKCd2YWwgLS0+ICcsIHZhbCk7XHJcbiAgICBzZXRUZXh0KHZhbCk7XHJcbiAgICBjb25zdCB2YWx1ZSA9IHtcclxuICAgICAgLy8gVG8gbW/FvGUgbmlla29uaWVjem5pZVxyXG4gICAgICAvLyBpZDogc2VsZWN0ZWRTZWN0aW9uLmlkLFxyXG4gICAgICAvLyB0aXRsZSxcclxuICAgICAgYm9keTogdmFsLFxyXG4gICAgICBpbmRleDogZmllbGQuaW5kZXgsXHJcbiAgICAgIHNlbFNlY3Rpb246IHNlbGVjdGVkU2VjdGlvbixcclxuICAgICAgY3VycmVudEluZGV4OiBjdXJyZW50SW5kZXgsXHJcbiAgICB9O1xyXG4gICAgdXBkYXRlKHZhbHVlKTtcclxuICB9O1xyXG5cclxuICBjb25zdCB1cGRhdGUgPSB1c2VDYWxsYmFjayhcclxuICAgIGRlYm91bmNlKGFzeW5jICh2YWx1ZSkgPT4ge1xyXG4gICAgICAvLyBzZWN0aW9uVXBkYXRlKHZhbHVlLmlkLCB2YWx1ZSk7IC8vIFRJVExFIFVQREFURVxyXG5cclxuICAgICAgY29uc29sZS5sb2codmFsdWUuc2VsU2VjdGlvbik7XHJcbiAgICAgIGNvbnNvbGUubG9nKHZhbHVlKTtcclxuICAgICAgY29uc3QgY3VycmVudFNlY3Rpb25JbmRleCA9IGF3YWl0IHZhbHVlLnNlbFNlY3Rpb24uZmllbGRzLmZpbmRJbmRleCgoZmllbGQpID0+IGZpZWxkLmluZGV4ID09IHZhbHVlLmluZGV4KTtcclxuICAgICAgY29uc29sZS5sb2coY3VycmVudFNlY3Rpb25JbmRleCA9PSBmYWxzZSk7XHJcbiAgICAgIGNvbnNvbGUubG9nKGN1cnJlbnRTZWN0aW9uSW5kZXggIT09IC0xKTtcclxuICAgICAgY29uc29sZS5sb2coY3VycmVudFNlY3Rpb25JbmRleCk7XHJcblxyXG4gICAgICAvLyBDSFlCQSBEWklBxYFBLCBXU1pZU1RLTyBaQUxFxbtZIE9EIFJFU0VUVSBaQSBQT01PQ8SEIHNldEN1cnJlbnRJbmRleFxyXG4gICAgICAvLyBpZiAoY3VycmVudFNlY3Rpb25JbmRleCAhPT0gLTEpIHtcclxuICAgICAgZmllbGRVcGRhdGUodmFsdWUsIGN1cnJlbnRTZWN0aW9uSW5kZXgsIGN1cnJlbnRJbmRleCk7XHJcbiAgICAgIC8vIH1cclxuICAgICAgLy8gY29uc3QgcGFydGljdWxhckluZGV4ID0gc2VsZWN0ZWRTZWN0aW9uLmZpZWxkcy5maW5kSW5kZXgoKGRvYykgPT4gZG9jLmluZGV4ID0gdmFsdWUuaW5kZXgpO1xyXG4gICAgfSwgNTAwKSxcclxuICAgIFtdXHJcbiAgKTtcclxuXHJcbiAgY29uc3QgbW9kdWxlcyA9IHtcclxuICAgIHRvb2xiYXI6IFtcclxuICAgICAgW3sgaGVhZGVyOiBbMSwgMiwgZmFsc2VdIH1dLFxyXG4gICAgICBbJ2JvbGQnLCAnaXRhbGljJywgJ3VuZGVybGluZScsICdzdHJpa2UnLCAnYmxvY2txdW90ZSddLFxyXG4gICAgICBbeyBsaXN0OiAnb3JkZXJlZCcgfSwgeyBsaXN0OiAnYnVsbGV0JyB9LCB7IGluZGVudDogJy0xJyB9LCB7IGluZGVudDogJysxJyB9XSxcclxuICAgICAgW3sgYWxpZ246ICcnIH0sIHsgYWxpZ246ICdjZW50ZXInIH0sIHsgYWxpZ246ICdyaWdodCcgfSwgeyBhbGlnbjogJ2p1c3RpZnknIH1dLFxyXG4gICAgICBbJ2xpbmsnLCAnaW1hZ2UnXSxcclxuICAgICAgWydjbGVhbiddLFxyXG4gICAgXSxcclxuICB9O1xyXG5cclxuICBjb25zdCBmb3JtYXRzID0gW1xyXG4gICAgJ2hlYWRlcicsXHJcbiAgICAnZm9udCcsXHJcbiAgICAnc2l6ZScsXHJcbiAgICAnYm9sZCcsXHJcbiAgICAnaXRhbGljJyxcclxuICAgICd1bmRlcmxpbmUnLFxyXG4gICAgJ3N0cmlrZScsXHJcbiAgICAnYmxvY2txdW90ZScsXHJcbiAgICAnbGlzdCcsXHJcbiAgICAnYnVsbGV0JyxcclxuICAgICdpbmRlbnQnLFxyXG4gICAgJ2FsaWduJyxcclxuICAgICdsaW5rJyxcclxuICAgICdpbWFnZScsXHJcbiAgICAndmlkZW8nLFxyXG4gICAgJ2NvZGUtYmxvY2snLFxyXG4gIF07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IHJlZj17cHJvdmlkZWQuaW5uZXJSZWZ9IHsuLi5wcm92aWRlZC5kcmFnZ2FibGVQcm9wc30gY2xhc3NOYW1lPVwidy1mdWxsIGdyaWQgZ3JpZC1jb2xzLTEyZnIganVzdGlmeS1pdGVtcy1jZW50ZXIgaXRlbXMtY2VudGVyIG10LTZcIj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtc3RhcnQtMiBjb2wtZW5kLTEyIHJlbGF0aXZlIGZsZXggZmxleC1jb2wgaC1mdWxsIHctZnVsbCBmbGV4IHB4LTggcHktOCByb3VuZGVkLTJ4bCBiZy13aGl0ZSBkYXJrOmJnLWJhY2tncm91bmRcIj5cclxuICAgICAgICA8UmVhY3RRdWlsbFxyXG4gICAgICAgICAgLy8gb25LZXlQcmVzcz17KCkgPT4gc2V0Q3VycmVudEluZGV4KGZpZWxkLmluZGV4KX1cclxuICAgICAgICAgIG1vZHVsZXM9e21vZHVsZXN9XHJcbiAgICAgICAgICBmb3JtYXRzPXtmb3JtYXRzfVxyXG4gICAgICAgICAgb25LZXlVcD17KCkgPT4gc2V0Q3VycmVudEluZGV4KGZpZWxkLmluZGV4KX1cclxuICAgICAgICAgIG9uS2V5RG93bj17KCkgPT4gc2V0Q3VycmVudEluZGV4KGZpZWxkLmluZGV4KX1cclxuICAgICAgICAgIG9uS2V5UHJlc3M9eygpID0+IHNldEN1cnJlbnRJbmRleChmaWVsZC5pbmRleCl9XHJcbiAgICAgICAgICBvbkZvY3VzPXsoKSA9PiBzZXRDdXJyZW50SW5kZXgoZmllbGQuaW5kZXgpfVxyXG4gICAgICAgICAgb25DaGFuZ2VTZWxlY3Rpb249eygpID0+IHNldEN1cnJlbnRJbmRleChmaWVsZC5pbmRleCl9XHJcbiAgICAgICAgICBjbGFzc05hbWU9XCJiZy13aGl0ZSByb3VuZGVkLTJ4bCBib3JkZXItbC0yIGJvcmRlci1yLTIgYm9yZGVyLWItMiBib3JkZXItYmFja2dyb3VuZFwiXHJcbiAgICAgICAgICBwbGFjZWhvbGRlcj1cIkVudGVyIHlvdXIgdGV4dCBoZXJlXCJcclxuICAgICAgICAgIHRoZW1lPVwic25vd1wiXHJcbiAgICAgICAgICB2YWx1ZT17dGV4dH1cclxuICAgICAgICAgIG9uQ2hhbmdlPXt1cGRhdGVCb2R5fVxyXG4gICAgICAgID48L1JlYWN0UXVpbGw+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1zdGFydC0xMiBjb2wtZW5kLTEzIGp1c3RpZnktc2VsZi1jZW50ZXIgc2VsZi1zdGFydCBmbGV4IGZsZXgtY29sIGZsZXgtd3JhcCBnYXAtMlwiPlxyXG4gICAgICAgIDxJbWFnZSBvbkNsaWNrPXsoKSA9PiBkZWxldGVGaWVsZChmaWVsZC5pbmRleCl9IGNsYXNzTmFtZT1cImN1cnNvci1wb2ludGVyXCIgc3JjPXtgL3BsYW4tYmFyL2V4aXQ0LnN2Z2B9IGhlaWdodD17MzZ9IHdpZHRoPXszNn0gLz5cclxuICAgICAgICA8SW1hZ2Ugey4uLnByb3ZpZGVkLmRyYWdIYW5kbGVQcm9wc30gY2xhc3NOYW1lPVwiY3Vyc29yLXBvaW50ZXJcIiBzcmM9e2AvcGxhbi1iYXIvZHJhZzIuc3ZnYH0gaGVpZ2h0PXszNn0gd2lkdGg9ezM2fSAvPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBUZXh0RWxlbWVudDtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==