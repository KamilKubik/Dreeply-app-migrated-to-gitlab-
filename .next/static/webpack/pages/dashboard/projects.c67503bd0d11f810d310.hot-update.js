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
      var data, projectData, usersData, _usersData$data, name, userCountry, formatedUser, newUsersArray;

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
              _context.next = 12;
              return _lib_firebase__WEBPACK_IMPORTED_MODULE_4__["db"].collection('users').doc(currentUser.uid).get();

            case 12:
              usersData = _context.sent;
              _usersData$data = usersData.data(), name = _usersData$data.name, userCountry = _usersData$data.userCountry, formatedUser = _usersData$data.formatedUser;
              newUsersArray = projectData.projectUsers;
              newUsersArray.push({
                userName: name,
                userCountry: userCountry
              });

            case 16:
              _context.next = 22;
              break;

            case 18:
              _context.prev = 18;
              _context.t0 = _context["catch"](0);
              alert(_context.t0);
              return _context.abrupt("return");

            case 22:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[0, 18]]);
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
        lineNumber: 36,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_startup_project_business_app_tippys_ManagerTippy__WEBPACK_IMPORTED_MODULE_6__["default"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 37,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 35,
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
        lineNumber: 41,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
        onClick: onNewProjectAdd,
        className: "hover:bg-primary hover:text-white dark:hover:bg-primarydark dark:hover:text-background focus:outline-none border border-primary text-primary text-sm font-light py-2 px-6 rounded-2xl dark:text-primarydark dark:border-primarydark",
        children: "Add project"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 47,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 34,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9kYXNoYm9hcmQvTWVtYmVyc0NvZGUuanMiXSwibmFtZXMiOlsiTWVtYmVyc0NvZGVDb21wb25lbnQiLCJ1c2VTdGF0ZSIsInByb2plY3RJZElucHV0VmFsdWUiLCJzZXRQcm9qZWN0SWRJbnB1dFZhbHVlIiwidXNlQXV0aCIsImN1cnJlbnRVc2VyIiwib25OZXdQcm9qZWN0QWRkIiwiZGIiLCJjb2xsZWN0aW9uIiwiZG9jIiwiZ2V0IiwiZGF0YSIsInByb2plY3REYXRhIiwidWlkIiwiYWxlcnQiLCJ1c2Vyc0RhdGEiLCJuYW1lIiwidXNlckNvdW50cnkiLCJmb3JtYXRlZFVzZXIiLCJuZXdVc2Vyc0FycmF5IiwicHJvamVjdFVzZXJzIiwicHVzaCIsInVzZXJOYW1lIiwiZSIsInRhcmdldCIsInZhbHVlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQU1BLG9CQUFvQixHQUFHLFNBQXZCQSxvQkFBdUIsR0FBTTtBQUFBOztBQUFBLGtCQUNxQkMsc0RBQVEsQ0FBQyxFQUFELENBRDdCO0FBQUEsTUFDMUJDLG1CQUQwQjtBQUFBLE1BQ0xDLHNCQURLOztBQUFBLGlCQUVUQyw0REFBTyxFQUZFO0FBQUEsTUFFekJDLFdBRnlCLFlBRXpCQSxXQUZ5Qjs7QUFJakMsTUFBTUMsZUFBZTtBQUFBLGtSQUFHO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBR0RDLGdEQUFFLENBQUNDLFVBQUgsQ0FBYyxVQUFkLEVBQTBCQyxHQUExQixDQUE4QlAsbUJBQTlCLEVBQW1EUSxHQUFuRCxFQUhDOztBQUFBO0FBR2RDLGtCQUhjO0FBSWRDLHlCQUpjLEdBSUFELElBQUksQ0FBQ0EsSUFBTCxFQUpBOztBQUFBLG9CQUtoQkMsV0FBVyxDQUFDQyxHQUFaLEtBQW9CUixXQUFXLENBQUNRLEdBTGhCO0FBQUE7QUFBQTtBQUFBOztBQU1sQkMsbUJBQUssQ0FBQywyQ0FBRCxDQUFMO0FBTmtCOztBQUFBO0FBQUE7QUFBQSxxQkFTTVAsZ0RBQUUsQ0FBQ0MsVUFBSCxDQUFjLE9BQWQsRUFBdUJDLEdBQXZCLENBQTJCSixXQUFXLENBQUNRLEdBQXZDLEVBQTRDSCxHQUE1QyxFQVROOztBQUFBO0FBU1pLLHVCQVRZO0FBQUEsZ0NBVTBCQSxTQUFTLENBQUNKLElBQVYsRUFWMUIsRUFVVkssSUFWVSxtQkFVVkEsSUFWVSxFQVVKQyxXQVZJLG1CQVVKQSxXQVZJLEVBVVNDLFlBVlQsbUJBVVNBLFlBVlQ7QUFXWkMsMkJBWFksR0FXSVAsV0FBVyxDQUFDUSxZQVhoQjtBQVlsQkQsMkJBQWEsQ0FBQ0UsSUFBZCxDQUFtQjtBQUNqQkMsd0JBQVEsRUFBRU4sSUFETztBQUVqQkMsMkJBQVcsRUFBWEE7QUFGaUIsZUFBbkI7O0FBWmtCO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFrQnBCSCxtQkFBSyxhQUFMO0FBbEJvQjs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFIOztBQUFBLG9CQUFmUixlQUFlO0FBQUE7QUFBQTtBQUFBLEtBQXJCOztBQXVCQSxzQkFDRTtBQUFLLGFBQVMsRUFBQyx1REFBZjtBQUFBLDRCQUNFO0FBQUssZUFBUyxFQUFDLE1BQWY7QUFBQSw4QkFDRTtBQUFHLGlCQUFTLEVBQUMsOEJBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERixlQUVFLHFFQUFDLHlGQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFERixlQUtFO0FBQUssZUFBUyxFQUFDLDRHQUFmO0FBQUEsOEJBRUU7QUFDRSxhQUFLLEVBQUVKLG1CQURUO0FBRUUsZ0JBQVEsRUFBRSxrQkFBQ3FCLENBQUQ7QUFBQSxpQkFBT3BCLHNCQUFzQixDQUFDb0IsQ0FBQyxDQUFDQyxNQUFGLENBQVNDLEtBQVYsQ0FBN0I7QUFBQSxTQUZaO0FBR0UsbUJBQVcsRUFBQyxjQUhkO0FBSUUsaUJBQVMsRUFBQztBQUpaO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFGRixlQVFFO0FBQ0UsZUFBTyxFQUFFbkIsZUFEWDtBQUVFLGlCQUFTLEVBQUMscU9BRlo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFSRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFMRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQXVCRCxDQWxERDs7R0FBTU4sb0I7VUFFb0JJLG9EOzs7S0FGcEJKLG9CO0FBb0RTQSxtRkFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9kYXNoYm9hcmQvcHJvamVjdHMuYzY3NTAzYmQwZDExZjgxMGQzMTAuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgZGIgfSBmcm9tICcuLi8uLi9saWIvZmlyZWJhc2UnO1xyXG5pbXBvcnQgeyB1c2VBdXRoIH0gZnJvbSAnLi4vLi4vbGliL25ld0F1dGgnO1xyXG5pbXBvcnQgTWFuYWdlclRpcHB5IGZyb20gJy4vc3RhcnR1cC9wcm9qZWN0L2J1c2luZXNzLWFwcC90aXBweXMvTWFuYWdlclRpcHB5JztcclxuXHJcbmNvbnN0IE1lbWJlcnNDb2RlQ29tcG9uZW50ID0gKCkgPT4ge1xyXG4gIGNvbnN0IFtwcm9qZWN0SWRJbnB1dFZhbHVlLCBzZXRQcm9qZWN0SWRJbnB1dFZhbHVlXSA9IHVzZVN0YXRlKCcnKTtcclxuICBjb25zdCB7IGN1cnJlbnRVc2VyIH0gPSB1c2VBdXRoKCk7XHJcblxyXG4gIGNvbnN0IG9uTmV3UHJvamVjdEFkZCA9IGFzeW5jICgpID0+IHtcclxuICAgIC8vIEZldGNoIHBhcnRpY3VsYXIgcHJvamVjdFxyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IGRiLmNvbGxlY3Rpb24oJ3Byb2plY3RzJykuZG9jKHByb2plY3RJZElucHV0VmFsdWUpLmdldCgpO1xyXG4gICAgICBjb25zdCBwcm9qZWN0RGF0YSA9IGRhdGEuZGF0YSgpO1xyXG4gICAgICBpZiAocHJvamVjdERhdGEudWlkID09PSBjdXJyZW50VXNlci51aWQpIHtcclxuICAgICAgICBhbGVydCgnWW91IGFyZSBhbHJlYWR5IGEgbWVtYmVyIG9mIHRoaXMgcHJvamVjdCEnKTtcclxuICAgICAgICByZXR1cm47XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgY29uc3QgdXNlcnNEYXRhID0gYXdhaXQgZGIuY29sbGVjdGlvbigndXNlcnMnKS5kb2MoY3VycmVudFVzZXIudWlkKS5nZXQoKTtcclxuICAgICAgICBjb25zdCB7IG5hbWUsIHVzZXJDb3VudHJ5LCBmb3JtYXRlZFVzZXIgfSA9IHVzZXJzRGF0YS5kYXRhKCk7XHJcbiAgICAgICAgY29uc3QgbmV3VXNlcnNBcnJheSA9IHByb2plY3REYXRhLnByb2plY3RVc2VycztcclxuICAgICAgICBuZXdVc2Vyc0FycmF5LnB1c2goe1xyXG4gICAgICAgICAgdXNlck5hbWU6IG5hbWUsXHJcbiAgICAgICAgICB1c2VyQ291bnRyeSxcclxuICAgICAgICB9KTtcclxuICAgICAgfVxyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgYWxlcnQoZXJyb3IpO1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwiei01MCB0ZXh0LXByaW1hcnlkYXJrIHJvdW5kZWQtMnhsIG1iLTMyIGZsZXggZmxleC1jb2xcIj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4XCI+XHJcbiAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1sZyBkYXJrOnRleHQtYmFja2dyb3VuZFwiPkJlY29tZSBhIHByb2plY3QgbWVtYmVyPC9wPlxyXG4gICAgICAgIDxNYW5hZ2VyVGlwcHkgLz5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHktOCBweC04IG10LTEgdy1mdWxsIGZsZXgganVzdGlmeS1iZXR3ZWVuIGl0ZW1zLWNlbnRlciBib3JkZXItci02IHJvdW5kZWQtMnhsIGJnLXdoaXRlIGRhcms6YmctYmFja2dyb3VuZFwiPlxyXG4gICAgICAgIHsvKiA8cD5QYXN0ZSB0aGUgcHJvamVjdCBjb2RlIGhlcmU6PC9wPiAqL31cclxuICAgICAgICA8aW5wdXRcclxuICAgICAgICAgIHZhbHVlPXtwcm9qZWN0SWRJbnB1dFZhbHVlfVxyXG4gICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRQcm9qZWN0SWRJbnB1dFZhbHVlKGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgIHBsYWNlaG9sZGVyPVwicHJvamVjdCBjb2RlXCJcclxuICAgICAgICAgIGNsYXNzTmFtZT1cInctOC8xMiBiZy13aGl0ZSB0ZXh0LWJhc2UgZm9jdXM6b3V0bGluZS1ub25lIHRleHQtZ3JheVwiXHJcbiAgICAgICAgLz5cclxuICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICBvbkNsaWNrPXtvbk5ld1Byb2plY3RBZGR9XHJcbiAgICAgICAgICBjbGFzc05hbWU9XCJob3ZlcjpiZy1wcmltYXJ5IGhvdmVyOnRleHQtd2hpdGUgZGFyazpob3ZlcjpiZy1wcmltYXJ5ZGFyayBkYXJrOmhvdmVyOnRleHQtYmFja2dyb3VuZCBmb2N1czpvdXRsaW5lLW5vbmUgYm9yZGVyIGJvcmRlci1wcmltYXJ5IHRleHQtcHJpbWFyeSB0ZXh0LXNtIGZvbnQtbGlnaHQgcHktMiBweC02IHJvdW5kZWQtMnhsIGRhcms6dGV4dC1wcmltYXJ5ZGFyayBkYXJrOmJvcmRlci1wcmltYXJ5ZGFya1wiXHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgQWRkIHByb2plY3RcclxuICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgTWVtYmVyc0NvZGVDb21wb25lbnQ7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=