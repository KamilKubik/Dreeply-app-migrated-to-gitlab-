webpackHotUpdate_N_E("pages/dashboard/projects/[project]/business-plan",{

/***/ "./components/dashboard/startup/project/business-app/Header.js":
/*!*********************************************************************!*\
  !*** ./components/dashboard/startup/project/business-app/Header.js ***!
  \*********************************************************************/
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





var _jsxFileName = "C:\\off-saas\\components\\dashboard\\startup\\project\\business-app\\Header.js",
    _this = undefined,
    _s = $RefreshSig$();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(C_off_saas_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }





var HeaderComponent = function HeaderComponent(_ref) {
  _s();

  var currentIndex = _ref.currentIndex,
      headerUpdate = _ref.headerUpdate,
      provided = _ref.provided,
      deleteField = _ref.deleteField,
      field = _ref.field;
  console.log('Header from field --> ', field);

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(''),
      title = _useState[0],
      setTitle = _useState[1];

  Object(react__WEBPACK_IMPORTED_MODULE_4__["useEffect"])(function () {
    setTitle(field.title);
  }, [field]);
  console.log('Current index --> ', currentIndex);

  var onTitleChange = function onTitleChange(title) {
    console.log('Current index --> ', currentIndex);
    setTitle(title);
    var data = {
      title: title,
      index: currentIndex
    };
    titleUpdate(data);
  };

  var titleUpdate = Object(react__WEBPACK_IMPORTED_MODULE_4__["useCallback"])(Object(_utils_helpers__WEBPACK_IMPORTED_MODULE_6__["default"])( /*#__PURE__*/function () {
    var _ref2 = Object(C_off_saas_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__["default"])( /*#__PURE__*/C_off_saas_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.mark(function _callee(data) {
      return C_off_saas_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              // const currentSectionIndex = await data.selSection.fields.findIndex(
              //   (field) => field.index == data.index
              // );
              headerUpdate(data.title, field.index, data.index);

            case 1:
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
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", _objectSpread(_objectSpread({
    ref: provided.innerRef
  }, provided.draggableProps), {}, {
    className: "w-full grid grid-cols-12fr justify-items-center items-center mt-6",
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
      className: "col-start-2 col-end-12 relative flex flex-col h-full w-full flex px-8 py-8 rounded-2xl bg-white dark:bg-background",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
        className: "bg-background rounded-2xl",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("input", {
          onChange: function onChange(e) {
            return onTitleChange(e.target.value);
          },
          value: title // style={{ fontSize: '1.05rem' }}
          ,
          placeholder: "Type here your header",
          className: "focus:outline-none w-full text-base text-primarydark bg-background rounded-2xl px-4 py-4"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 39,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 38,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
      className: "col-start-12 col-end-13 justify-self-center self-start flex flex-col flex-wrap gap-2",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("img", {
        onClick: function onClick() {
          return deleteField(field.index);
        },
        className: "cursor-pointer",
        src: "/plan-bar/exit4.svg",
        height: 36,
        width: 36
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 49,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("img", _objectSpread(_objectSpread({}, provided.dragHandleProps), {}, {
        className: "cursor-pointer mt-2",
        src: "/plan-bar/drag2.svg",
        height: 36,
        width: 36
      }), void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 50,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 7
    }, _this)]
  }), void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 36,
    columnNumber: 5
  }, _this);
};

_s(HeaderComponent, "uUhl9iXRtLSuO+dq2m3zGsJ1sBk=");

_c = HeaderComponent;
/* harmony default export */ __webpack_exports__["default"] = (HeaderComponent);

var _c;

$RefreshReg$(_c, "HeaderComponent");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9kYXNoYm9hcmQvc3RhcnR1cC9wcm9qZWN0L2J1c2luZXNzLWFwcC9IZWFkZXIuanMiXSwibmFtZXMiOlsiSGVhZGVyQ29tcG9uZW50IiwiY3VycmVudEluZGV4IiwiaGVhZGVyVXBkYXRlIiwicHJvdmlkZWQiLCJkZWxldGVGaWVsZCIsImZpZWxkIiwiY29uc29sZSIsImxvZyIsInVzZVN0YXRlIiwidGl0bGUiLCJzZXRUaXRsZSIsInVzZUVmZmVjdCIsIm9uVGl0bGVDaGFuZ2UiLCJkYXRhIiwiaW5kZXgiLCJ0aXRsZVVwZGF0ZSIsInVzZUNhbGxiYWNrIiwiZGVib3VuY2UiLCJpbm5lclJlZiIsImRyYWdnYWJsZVByb3BzIiwiZSIsInRhcmdldCIsInZhbHVlIiwiZHJhZ0hhbmRsZVByb3BzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxlQUFlLEdBQUcsU0FBbEJBLGVBQWtCLE9BQWtFO0FBQUE7O0FBQUEsTUFBL0RDLFlBQStELFFBQS9EQSxZQUErRDtBQUFBLE1BQWpEQyxZQUFpRCxRQUFqREEsWUFBaUQ7QUFBQSxNQUFuQ0MsUUFBbUMsUUFBbkNBLFFBQW1DO0FBQUEsTUFBekJDLFdBQXlCLFFBQXpCQSxXQUF5QjtBQUFBLE1BQVpDLEtBQVksUUFBWkEsS0FBWTtBQUN4RkMsU0FBTyxDQUFDQyxHQUFSLENBQVksd0JBQVosRUFBc0NGLEtBQXRDOztBQUR3RixrQkFHOURHLHNEQUFRLENBQUMsRUFBRCxDQUhzRDtBQUFBLE1BR2pGQyxLQUhpRjtBQUFBLE1BRzFFQyxRQUgwRTs7QUFLeEZDLHlEQUFTLENBQUMsWUFBTTtBQUNkRCxZQUFRLENBQUNMLEtBQUssQ0FBQ0ksS0FBUCxDQUFSO0FBQ0QsR0FGUSxFQUVOLENBQUNKLEtBQUQsQ0FGTSxDQUFUO0FBSUFDLFNBQU8sQ0FBQ0MsR0FBUixDQUFZLG9CQUFaLEVBQWtDTixZQUFsQzs7QUFDQSxNQUFNVyxhQUFhLEdBQUcsU0FBaEJBLGFBQWdCLENBQUNILEtBQUQsRUFBVztBQUMvQkgsV0FBTyxDQUFDQyxHQUFSLENBQVksb0JBQVosRUFBa0NOLFlBQWxDO0FBQ0FTLFlBQVEsQ0FBQ0QsS0FBRCxDQUFSO0FBQ0EsUUFBTUksSUFBSSxHQUFHO0FBQ1hKLFdBQUssRUFBRUEsS0FESTtBQUVYSyxXQUFLLEVBQUViO0FBRkksS0FBYjtBQUlBYyxlQUFXLENBQUNGLElBQUQsQ0FBWDtBQUNELEdBUkQ7O0FBVUEsTUFBTUUsV0FBVyxHQUFHQyx5REFBVyxDQUM3QkMsOERBQVE7QUFBQSxtUkFBQyxpQkFBT0osSUFBUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ1A7QUFDQTtBQUNBO0FBQ0FYLDBCQUFZLENBQUNXLElBQUksQ0FBQ0osS0FBTixFQUFhSixLQUFLLENBQUNTLEtBQW5CLEVBQTBCRCxJQUFJLENBQUNDLEtBQS9CLENBQVo7O0FBSk87QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBRDs7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUtMLEdBTEssQ0FEcUIsRUFPN0IsRUFQNkIsQ0FBL0I7QUFVQSxzQkFDRTtBQUFLLE9BQUcsRUFBRVgsUUFBUSxDQUFDZTtBQUFuQixLQUFpQ2YsUUFBUSxDQUFDZ0IsY0FBMUM7QUFBMEQsYUFBUyxFQUFDLG1FQUFwRTtBQUFBLDRCQUNFO0FBQUssZUFBUyxFQUFDLG9IQUFmO0FBQUEsNkJBQ0U7QUFBSyxpQkFBUyxFQUFDLDJCQUFmO0FBQUEsK0JBQ0U7QUFDRSxrQkFBUSxFQUFFLGtCQUFDQyxDQUFEO0FBQUEsbUJBQU9SLGFBQWEsQ0FBQ1EsQ0FBQyxDQUFDQyxNQUFGLENBQVNDLEtBQVYsQ0FBcEI7QUFBQSxXQURaO0FBRUUsZUFBSyxFQUFFYixLQUZULENBR0U7QUFIRjtBQUlFLHFCQUFXLEVBQUMsdUJBSmQ7QUFLRSxtQkFBUyxFQUFDO0FBTFo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREYsZUFZRTtBQUFLLGVBQVMsRUFBQyxzRkFBZjtBQUFBLDhCQUNFO0FBQUssZUFBTyxFQUFFO0FBQUEsaUJBQU1MLFdBQVcsQ0FBQ0MsS0FBSyxDQUFDUyxLQUFQLENBQWpCO0FBQUEsU0FBZDtBQUE4QyxpQkFBUyxFQUFDLGdCQUF4RDtBQUF5RSxXQUFHLHVCQUE1RTtBQUFxRyxjQUFNLEVBQUUsRUFBN0c7QUFBaUgsYUFBSyxFQUFFO0FBQXhIO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERixlQUVFLDRHQUFTWCxRQUFRLENBQUNvQixlQUFsQjtBQUFtQyxpQkFBUyxFQUFDLHFCQUE3QztBQUFtRSxXQUFHLHVCQUF0RTtBQUErRixjQUFNLEVBQUUsRUFBdkc7QUFBMkcsYUFBSyxFQUFFO0FBQWxIO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFaRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQW1CRCxDQWpERDs7R0FBTXZCLGU7O0tBQUFBLGU7QUFtRFNBLDhFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2Rhc2hib2FyZC9wcm9qZWN0cy9bcHJvamVjdF0vYnVzaW5lc3MtcGxhbi45Zjg1MWFmZjc3OTExODRjODlmNC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QsIHVzZUNhbGxiYWNrIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgSW1hZ2UgZnJvbSAnbmV4dC9pbWFnZSc7XHJcbmltcG9ydCBkZWJvdW5jZSBmcm9tICcuLi8uLi8uLi8uLi8uLi91dGlscy9oZWxwZXJzJztcclxuXHJcbmNvbnN0IEhlYWRlckNvbXBvbmVudCA9ICh7IGN1cnJlbnRJbmRleCwgaGVhZGVyVXBkYXRlLCBwcm92aWRlZCwgZGVsZXRlRmllbGQsIGZpZWxkIH0pID0+IHtcclxuICBjb25zb2xlLmxvZygnSGVhZGVyIGZyb20gZmllbGQgLS0+ICcsIGZpZWxkKTtcclxuXHJcbiAgY29uc3QgW3RpdGxlLCBzZXRUaXRsZV0gPSB1c2VTdGF0ZSgnJyk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBzZXRUaXRsZShmaWVsZC50aXRsZSk7XHJcbiAgfSwgW2ZpZWxkXSk7XHJcblxyXG4gIGNvbnNvbGUubG9nKCdDdXJyZW50IGluZGV4IC0tPiAnLCBjdXJyZW50SW5kZXgpO1xyXG4gIGNvbnN0IG9uVGl0bGVDaGFuZ2UgPSAodGl0bGUpID0+IHtcclxuICAgIGNvbnNvbGUubG9nKCdDdXJyZW50IGluZGV4IC0tPiAnLCBjdXJyZW50SW5kZXgpO1xyXG4gICAgc2V0VGl0bGUodGl0bGUpO1xyXG4gICAgY29uc3QgZGF0YSA9IHtcclxuICAgICAgdGl0bGU6IHRpdGxlLFxyXG4gICAgICBpbmRleDogY3VycmVudEluZGV4LFxyXG4gICAgfTtcclxuICAgIHRpdGxlVXBkYXRlKGRhdGEpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IHRpdGxlVXBkYXRlID0gdXNlQ2FsbGJhY2soXHJcbiAgICBkZWJvdW5jZShhc3luYyAoZGF0YSkgPT4ge1xyXG4gICAgICAvLyBjb25zdCBjdXJyZW50U2VjdGlvbkluZGV4ID0gYXdhaXQgZGF0YS5zZWxTZWN0aW9uLmZpZWxkcy5maW5kSW5kZXgoXHJcbiAgICAgIC8vICAgKGZpZWxkKSA9PiBmaWVsZC5pbmRleCA9PSBkYXRhLmluZGV4XHJcbiAgICAgIC8vICk7XHJcbiAgICAgIGhlYWRlclVwZGF0ZShkYXRhLnRpdGxlLCBmaWVsZC5pbmRleCwgZGF0YS5pbmRleCk7XHJcbiAgICB9LCA1MDApLFxyXG4gICAgW11cclxuICApO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiByZWY9e3Byb3ZpZGVkLmlubmVyUmVmfSB7Li4ucHJvdmlkZWQuZHJhZ2dhYmxlUHJvcHN9IGNsYXNzTmFtZT1cInctZnVsbCBncmlkIGdyaWQtY29scy0xMmZyIGp1c3RpZnktaXRlbXMtY2VudGVyIGl0ZW1zLWNlbnRlciBtdC02XCI+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXN0YXJ0LTIgY29sLWVuZC0xMiByZWxhdGl2ZSBmbGV4IGZsZXgtY29sIGgtZnVsbCB3LWZ1bGwgZmxleCBweC04IHB5LTggcm91bmRlZC0yeGwgYmctd2hpdGUgZGFyazpiZy1iYWNrZ3JvdW5kXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiZy1iYWNrZ3JvdW5kIHJvdW5kZWQtMnhsXCI+XHJcbiAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBvblRpdGxlQ2hhbmdlKGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgICAgdmFsdWU9e3RpdGxlfVxyXG4gICAgICAgICAgICAvLyBzdHlsZT17eyBmb250U2l6ZTogJzEuMDVyZW0nIH19XHJcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiVHlwZSBoZXJlIHlvdXIgaGVhZGVyXCJcclxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9jdXM6b3V0bGluZS1ub25lIHctZnVsbCB0ZXh0LWJhc2UgdGV4dC1wcmltYXJ5ZGFyayBiZy1iYWNrZ3JvdW5kIHJvdW5kZWQtMnhsIHB4LTQgcHktNFwiXHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtc3RhcnQtMTIgY29sLWVuZC0xMyBqdXN0aWZ5LXNlbGYtY2VudGVyIHNlbGYtc3RhcnQgZmxleCBmbGV4LWNvbCBmbGV4LXdyYXAgZ2FwLTJcIj5cclxuICAgICAgICA8aW1nIG9uQ2xpY2s9eygpID0+IGRlbGV0ZUZpZWxkKGZpZWxkLmluZGV4KX0gY2xhc3NOYW1lPVwiY3Vyc29yLXBvaW50ZXJcIiBzcmM9e2AvcGxhbi1iYXIvZXhpdDQuc3ZnYH0gaGVpZ2h0PXszNn0gd2lkdGg9ezM2fSAvPlxyXG4gICAgICAgIDxpbWcgey4uLnByb3ZpZGVkLmRyYWdIYW5kbGVQcm9wc30gY2xhc3NOYW1lPVwiY3Vyc29yLXBvaW50ZXIgbXQtMlwiIHNyYz17YC9wbGFuLWJhci9kcmFnMi5zdmdgfSBoZWlnaHQ9ezM2fSB3aWR0aD17MzZ9IC8+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEhlYWRlckNvbXBvbmVudDtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==