webpackHotUpdate_N_E("pages/dashboard/projects",{

/***/ "./components/dashboard/MembersCode.js":
/*!*********************************************!*\
  !*** ./components/dashboard/MembersCode.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var C_off_saas_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/regenerator */ "./node_modules/next/node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var C_off_saas_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(C_off_saas_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var C_off_saas_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _lib_firebase__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../lib/firebase */ "./lib/firebase.js");
/* harmony import */ var _lib_newAuth__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../lib/newAuth */ "./lib/newAuth.js");
/* harmony import */ var _startup_project_business_app_tippys_ManagerTippy__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./startup/project/business-app/tippys/ManagerTippy */ "./components/dashboard/startup/project/business-app/tippys/ManagerTippy.js");




var _jsxFileName = "C:\\off-saas\\components\\dashboard\\MembersCode.js",
    _this = undefined,
    _s = $RefreshSig$();






var MembersCodeComponent = function MembersCodeComponent() {
  _s();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(''),
      projectIdInputValue = _useState[0],
      setProjectIdInputValue = _useState[1];

  var _useAuth = Object(_lib_newAuth__WEBPACK_IMPORTED_MODULE_5__["useAuth"])(),
      currentUser = _useAuth.currentUser;

  var onNewProjectAdd = /*#__PURE__*/function () {
    var _ref = Object(C_off_saas_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/C_off_saas_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee() {
      var data, projectData, newUsersArray;
      return C_off_saas_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              _context.next = 3;
              return _lib_firebase__WEBPACK_IMPORTED_MODULE_4__["db"].collection('projects').doc(projectIdInputValue).get();

            case 3:
              data = _context.sent;
              projectData = data.data();

              if (!(projectData.uid === currentUser.uid)) {
                _context.next = 10;
                break;
              }

              alert('You are already a member of this project!');
              return _context.abrupt("return");

            case 10:
              newUsersArray = projectData;

            case 11:
              _context.next = 17;
              break;

            case 13:
              _context.prev = 13;
              _context.t0 = _context["catch"](0);
              alert(_context.t0);
              return _context.abrupt("return");

            case 17:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[0, 13]]);
    }));

    return function onNewProjectAdd() {
      return _ref.apply(this, arguments);
    };
  }();

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: "z-50 text-primarydark rounded-2xl mb-32 flex flex-col",
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "flex",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
        className: "text-lg dark:text-background",
        children: "Become a project member"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 30,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_startup_project_business_app_tippys_ManagerTippy__WEBPACK_IMPORTED_MODULE_6__["default"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 31,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "py-8 px-8 mt-1 w-full flex justify-between items-center border-r-6 rounded-2xl bg-white dark:bg-background",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
        value: projectIdInputValue,
        onChange: function onChange(e) {
          return setProjectIdInputValue(e.target.value);
        },
        placeholder: "project code",
        className: "w-8/12 bg-white text-base focus:outline-none text-gray"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 35,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
        onClick: onNewProjectAdd,
        className: "hover:bg-primary hover:text-white dark:hover:bg-primarydark dark:hover:text-background focus:outline-none border border-primary text-primary text-sm font-light py-2 px-6 rounded-2xl dark:text-primarydark dark:border-primarydark",
        children: "Add project"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 41,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 28,
    columnNumber: 5
  }, _this);
};

_s(MembersCodeComponent, "hx1OGllAupP31z52qMT5PIconSE=", false, function () {
  return [_lib_newAuth__WEBPACK_IMPORTED_MODULE_5__["useAuth"]];
});

_c = MembersCodeComponent;
/* harmony default export */ __webpack_exports__["default"] = (MembersCodeComponent);

var _c;

$RefreshReg$(_c, "MembersCodeComponent");

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9kYXNoYm9hcmQvTWVtYmVyc0NvZGUuanMiXSwibmFtZXMiOlsiTWVtYmVyc0NvZGVDb21wb25lbnQiLCJ1c2VTdGF0ZSIsInByb2plY3RJZElucHV0VmFsdWUiLCJzZXRQcm9qZWN0SWRJbnB1dFZhbHVlIiwidXNlQXV0aCIsImN1cnJlbnRVc2VyIiwib25OZXdQcm9qZWN0QWRkIiwiZGIiLCJjb2xsZWN0aW9uIiwiZG9jIiwiZ2V0IiwiZGF0YSIsInByb2plY3REYXRhIiwidWlkIiwiYWxlcnQiLCJuZXdVc2Vyc0FycmF5IiwiZSIsInRhcmdldCIsInZhbHVlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQU1BLG9CQUFvQixHQUFHLFNBQXZCQSxvQkFBdUIsR0FBTTtBQUFBOztBQUFBLGtCQUNxQkMsc0RBQVEsQ0FBQyxFQUFELENBRDdCO0FBQUEsTUFDMUJDLG1CQUQwQjtBQUFBLE1BQ0xDLHNCQURLOztBQUFBLGlCQUVUQyw0REFBTyxFQUZFO0FBQUEsTUFFekJDLFdBRnlCLFlBRXpCQSxXQUZ5Qjs7QUFJakMsTUFBTUMsZUFBZTtBQUFBLGtSQUFHO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFHREMsZ0RBQUUsQ0FBQ0MsVUFBSCxDQUFjLFVBQWQsRUFBMEJDLEdBQTFCLENBQThCUCxtQkFBOUIsRUFBbURRLEdBQW5ELEVBSEM7O0FBQUE7QUFHZEMsa0JBSGM7QUFJZEMseUJBSmMsR0FJQUQsSUFBSSxDQUFDQSxJQUFMLEVBSkE7O0FBQUEsb0JBS2hCQyxXQUFXLENBQUNDLEdBQVosS0FBb0JSLFdBQVcsQ0FBQ1EsR0FMaEI7QUFBQTtBQUFBO0FBQUE7O0FBTWxCQyxtQkFBSyxDQUFDLDJDQUFELENBQUw7QUFOa0I7O0FBQUE7QUFTWkMsMkJBVFksR0FTSUgsV0FUSjs7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBWXBCRSxtQkFBSyxhQUFMO0FBWm9COztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQUg7O0FBQUEsb0JBQWZSLGVBQWU7QUFBQTtBQUFBO0FBQUEsS0FBckI7O0FBaUJBLHNCQUNFO0FBQUssYUFBUyxFQUFDLHVEQUFmO0FBQUEsNEJBQ0U7QUFBSyxlQUFTLEVBQUMsTUFBZjtBQUFBLDhCQUNFO0FBQUcsaUJBQVMsRUFBQyw4QkFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURGLGVBRUUscUVBQUMseUZBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURGLGVBS0U7QUFBSyxlQUFTLEVBQUMsNEdBQWY7QUFBQSw4QkFFRTtBQUNFLGFBQUssRUFBRUosbUJBRFQ7QUFFRSxnQkFBUSxFQUFFLGtCQUFDYyxDQUFEO0FBQUEsaUJBQU9iLHNCQUFzQixDQUFDYSxDQUFDLENBQUNDLE1BQUYsQ0FBU0MsS0FBVixDQUE3QjtBQUFBLFNBRlo7QUFHRSxtQkFBVyxFQUFDLGNBSGQ7QUFJRSxpQkFBUyxFQUFDO0FBSlo7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUZGLGVBUUU7QUFDRSxlQUFPLEVBQUVaLGVBRFg7QUFFRSxpQkFBUyxFQUFDLHFPQUZaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBUkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBTEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUF1QkQsQ0E1Q0Q7O0dBQU1OLG9CO1VBRW9CSSxvRDs7O0tBRnBCSixvQjtBQThDU0EsbUZBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvZGFzaGJvYXJkL3Byb2plY3RzLjc3YzExNDJkZGZhNDgxMTVhZWI2LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IGRiIH0gZnJvbSAnLi4vLi4vbGliL2ZpcmViYXNlJztcclxuaW1wb3J0IHsgdXNlQXV0aCB9IGZyb20gJy4uLy4uL2xpYi9uZXdBdXRoJztcclxuaW1wb3J0IE1hbmFnZXJUaXBweSBmcm9tICcuL3N0YXJ0dXAvcHJvamVjdC9idXNpbmVzcy1hcHAvdGlwcHlzL01hbmFnZXJUaXBweSc7XHJcblxyXG5jb25zdCBNZW1iZXJzQ29kZUNvbXBvbmVudCA9ICgpID0+IHtcclxuICBjb25zdCBbcHJvamVjdElkSW5wdXRWYWx1ZSwgc2V0UHJvamVjdElkSW5wdXRWYWx1ZV0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgY29uc3QgeyBjdXJyZW50VXNlciB9ID0gdXNlQXV0aCgpO1xyXG5cclxuICBjb25zdCBvbk5ld1Byb2plY3RBZGQgPSBhc3luYyAoKSA9PiB7XHJcbiAgICAvLyBGZXRjaCBwYXJ0aWN1bGFyIHByb2plY3RcclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCBkYi5jb2xsZWN0aW9uKCdwcm9qZWN0cycpLmRvYyhwcm9qZWN0SWRJbnB1dFZhbHVlKS5nZXQoKTtcclxuICAgICAgY29uc3QgcHJvamVjdERhdGEgPSBkYXRhLmRhdGEoKTtcclxuICAgICAgaWYgKHByb2plY3REYXRhLnVpZCA9PT0gY3VycmVudFVzZXIudWlkKSB7XHJcbiAgICAgICAgYWxlcnQoJ1lvdSBhcmUgYWxyZWFkeSBhIG1lbWJlciBvZiB0aGlzIHByb2plY3QhJyk7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGNvbnN0IG5ld1VzZXJzQXJyYXkgPSBwcm9qZWN0RGF0YTtcclxuICAgICAgfVxyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgYWxlcnQoZXJyb3IpO1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwiei01MCB0ZXh0LXByaW1hcnlkYXJrIHJvdW5kZWQtMnhsIG1iLTMyIGZsZXggZmxleC1jb2xcIj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4XCI+XHJcbiAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1sZyBkYXJrOnRleHQtYmFja2dyb3VuZFwiPkJlY29tZSBhIHByb2plY3QgbWVtYmVyPC9wPlxyXG4gICAgICAgIDxNYW5hZ2VyVGlwcHkgLz5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHktOCBweC04IG10LTEgdy1mdWxsIGZsZXgganVzdGlmeS1iZXR3ZWVuIGl0ZW1zLWNlbnRlciBib3JkZXItci02IHJvdW5kZWQtMnhsIGJnLXdoaXRlIGRhcms6YmctYmFja2dyb3VuZFwiPlxyXG4gICAgICAgIHsvKiA8cD5QYXN0ZSB0aGUgcHJvamVjdCBjb2RlIGhlcmU6PC9wPiAqL31cclxuICAgICAgICA8aW5wdXRcclxuICAgICAgICAgIHZhbHVlPXtwcm9qZWN0SWRJbnB1dFZhbHVlfVxyXG4gICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRQcm9qZWN0SWRJbnB1dFZhbHVlKGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgIHBsYWNlaG9sZGVyPVwicHJvamVjdCBjb2RlXCJcclxuICAgICAgICAgIGNsYXNzTmFtZT1cInctOC8xMiBiZy13aGl0ZSB0ZXh0LWJhc2UgZm9jdXM6b3V0bGluZS1ub25lIHRleHQtZ3JheVwiXHJcbiAgICAgICAgLz5cclxuICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICBvbkNsaWNrPXtvbk5ld1Byb2plY3RBZGR9XHJcbiAgICAgICAgICBjbGFzc05hbWU9XCJob3ZlcjpiZy1wcmltYXJ5IGhvdmVyOnRleHQtd2hpdGUgZGFyazpob3ZlcjpiZy1wcmltYXJ5ZGFyayBkYXJrOmhvdmVyOnRleHQtYmFja2dyb3VuZCBmb2N1czpvdXRsaW5lLW5vbmUgYm9yZGVyIGJvcmRlci1wcmltYXJ5IHRleHQtcHJpbWFyeSB0ZXh0LXNtIGZvbnQtbGlnaHQgcHktMiBweC02IHJvdW5kZWQtMnhsIGRhcms6dGV4dC1wcmltYXJ5ZGFyayBkYXJrOmJvcmRlci1wcmltYXJ5ZGFya1wiXHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgQWRkIHByb2plY3RcclxuICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgTWVtYmVyc0NvZGVDb21wb25lbnQ7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=