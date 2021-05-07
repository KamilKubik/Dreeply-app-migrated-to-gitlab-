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
      var data, projectData, usersData, userData, newUsersArray;
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
              userData = usersData.data();
              console.log(userData);
              newUsersArray = projectData.projectUsers;
              console.log(currentUser);
              newUsersArray.push({
                userName: currentUser
              });

            case 18:
              _context.next = 24;
              break;

            case 20:
              _context.prev = 20;
              _context.t0 = _context["catch"](0);
              alert(_context.t0);
              return _context.abrupt("return");

            case 24:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[0, 20]]);
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
        lineNumber: 37,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_startup_project_business_app_tippys_ManagerTippy__WEBPACK_IMPORTED_MODULE_6__["default"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 38,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 36,
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
        lineNumber: 42,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
        onClick: onNewProjectAdd,
        className: "hover:bg-primary hover:text-white dark:hover:bg-primarydark dark:hover:text-background focus:outline-none border border-primary text-primary text-sm font-light py-2 px-6 rounded-2xl dark:text-primarydark dark:border-primarydark",
        children: "Add project"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 48,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 35,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9kYXNoYm9hcmQvTWVtYmVyc0NvZGUuanMiXSwibmFtZXMiOlsiTWVtYmVyc0NvZGVDb21wb25lbnQiLCJ1c2VTdGF0ZSIsInByb2plY3RJZElucHV0VmFsdWUiLCJzZXRQcm9qZWN0SWRJbnB1dFZhbHVlIiwidXNlQXV0aCIsImN1cnJlbnRVc2VyIiwib25OZXdQcm9qZWN0QWRkIiwiZGIiLCJjb2xsZWN0aW9uIiwiZG9jIiwiZ2V0IiwiZGF0YSIsInByb2plY3REYXRhIiwidWlkIiwiYWxlcnQiLCJ1c2Vyc0RhdGEiLCJ1c2VyRGF0YSIsImNvbnNvbGUiLCJsb2ciLCJuZXdVc2Vyc0FycmF5IiwicHJvamVjdFVzZXJzIiwicHVzaCIsInVzZXJOYW1lIiwiZSIsInRhcmdldCIsInZhbHVlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQU1BLG9CQUFvQixHQUFHLFNBQXZCQSxvQkFBdUIsR0FBTTtBQUFBOztBQUFBLGtCQUNxQkMsc0RBQVEsQ0FBQyxFQUFELENBRDdCO0FBQUEsTUFDMUJDLG1CQUQwQjtBQUFBLE1BQ0xDLHNCQURLOztBQUFBLGlCQUVUQyw0REFBTyxFQUZFO0FBQUEsTUFFekJDLFdBRnlCLFlBRXpCQSxXQUZ5Qjs7QUFJakMsTUFBTUMsZUFBZTtBQUFBLGtSQUFHO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFHREMsZ0RBQUUsQ0FBQ0MsVUFBSCxDQUFjLFVBQWQsRUFBMEJDLEdBQTFCLENBQThCUCxtQkFBOUIsRUFBbURRLEdBQW5ELEVBSEM7O0FBQUE7QUFHZEMsa0JBSGM7QUFJZEMseUJBSmMsR0FJQUQsSUFBSSxDQUFDQSxJQUFMLEVBSkE7O0FBQUEsb0JBS2hCQyxXQUFXLENBQUNDLEdBQVosS0FBb0JSLFdBQVcsQ0FBQ1EsR0FMaEI7QUFBQTtBQUFBO0FBQUE7O0FBTWxCQyxtQkFBSyxDQUFDLDJDQUFELENBQUw7QUFOa0I7O0FBQUE7QUFBQTtBQUFBLHFCQVNNUCxnREFBRSxDQUFDQyxVQUFILENBQWMsT0FBZCxFQUF1QkMsR0FBdkIsQ0FBMkJKLFdBQVcsQ0FBQ1EsR0FBdkMsRUFBNENILEdBQTVDLEVBVE47O0FBQUE7QUFTWkssdUJBVFk7QUFVWkMsc0JBVlksR0FVREQsU0FBUyxDQUFDSixJQUFWLEVBVkM7QUFXbEJNLHFCQUFPLENBQUNDLEdBQVIsQ0FBWUYsUUFBWjtBQUNNRywyQkFaWSxHQVlJUCxXQUFXLENBQUNRLFlBWmhCO0FBYWxCSCxxQkFBTyxDQUFDQyxHQUFSLENBQVliLFdBQVo7QUFDQWMsMkJBQWEsQ0FBQ0UsSUFBZCxDQUFtQjtBQUNqQkMsd0JBQVEsRUFBRWpCO0FBRE8sZUFBbkI7O0FBZGtCO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFtQnBCUyxtQkFBSyxhQUFMO0FBbkJvQjs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFIOztBQUFBLG9CQUFmUixlQUFlO0FBQUE7QUFBQTtBQUFBLEtBQXJCOztBQXdCQSxzQkFDRTtBQUFLLGFBQVMsRUFBQyx1REFBZjtBQUFBLDRCQUNFO0FBQUssZUFBUyxFQUFDLE1BQWY7QUFBQSw4QkFDRTtBQUFHLGlCQUFTLEVBQUMsOEJBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERixlQUVFLHFFQUFDLHlGQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFERixlQUtFO0FBQUssZUFBUyxFQUFDLDRHQUFmO0FBQUEsOEJBRUU7QUFDRSxhQUFLLEVBQUVKLG1CQURUO0FBRUUsZ0JBQVEsRUFBRSxrQkFBQ3FCLENBQUQ7QUFBQSxpQkFBT3BCLHNCQUFzQixDQUFDb0IsQ0FBQyxDQUFDQyxNQUFGLENBQVNDLEtBQVYsQ0FBN0I7QUFBQSxTQUZaO0FBR0UsbUJBQVcsRUFBQyxjQUhkO0FBSUUsaUJBQVMsRUFBQztBQUpaO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFGRixlQVFFO0FBQ0UsZUFBTyxFQUFFbkIsZUFEWDtBQUVFLGlCQUFTLEVBQUMscU9BRlo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFSRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFMRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQXVCRCxDQW5ERDs7R0FBTU4sb0I7VUFFb0JJLG9EOzs7S0FGcEJKLG9CO0FBcURTQSxtRkFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9kYXNoYm9hcmQvcHJvamVjdHMuZmUwZDkxNzk3MzZlYjliMzRkNzguaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgZGIgfSBmcm9tICcuLi8uLi9saWIvZmlyZWJhc2UnO1xyXG5pbXBvcnQgeyB1c2VBdXRoIH0gZnJvbSAnLi4vLi4vbGliL25ld0F1dGgnO1xyXG5pbXBvcnQgTWFuYWdlclRpcHB5IGZyb20gJy4vc3RhcnR1cC9wcm9qZWN0L2J1c2luZXNzLWFwcC90aXBweXMvTWFuYWdlclRpcHB5JztcclxuXHJcbmNvbnN0IE1lbWJlcnNDb2RlQ29tcG9uZW50ID0gKCkgPT4ge1xyXG4gIGNvbnN0IFtwcm9qZWN0SWRJbnB1dFZhbHVlLCBzZXRQcm9qZWN0SWRJbnB1dFZhbHVlXSA9IHVzZVN0YXRlKCcnKTtcclxuICBjb25zdCB7IGN1cnJlbnRVc2VyIH0gPSB1c2VBdXRoKCk7XHJcblxyXG4gIGNvbnN0IG9uTmV3UHJvamVjdEFkZCA9IGFzeW5jICgpID0+IHtcclxuICAgIC8vIEZldGNoIHBhcnRpY3VsYXIgcHJvamVjdFxyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IGRiLmNvbGxlY3Rpb24oJ3Byb2plY3RzJykuZG9jKHByb2plY3RJZElucHV0VmFsdWUpLmdldCgpO1xyXG4gICAgICBjb25zdCBwcm9qZWN0RGF0YSA9IGRhdGEuZGF0YSgpO1xyXG4gICAgICBpZiAocHJvamVjdERhdGEudWlkID09PSBjdXJyZW50VXNlci51aWQpIHtcclxuICAgICAgICBhbGVydCgnWW91IGFyZSBhbHJlYWR5IGEgbWVtYmVyIG9mIHRoaXMgcHJvamVjdCEnKTtcclxuICAgICAgICByZXR1cm47XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgY29uc3QgdXNlcnNEYXRhID0gYXdhaXQgZGIuY29sbGVjdGlvbigndXNlcnMnKS5kb2MoY3VycmVudFVzZXIudWlkKS5nZXQoKTtcclxuICAgICAgICBjb25zdCB1c2VyRGF0YSA9IHVzZXJzRGF0YS5kYXRhKCk7XHJcbiAgICAgICAgY29uc29sZS5sb2codXNlckRhdGEpO1xyXG4gICAgICAgIGNvbnN0IG5ld1VzZXJzQXJyYXkgPSBwcm9qZWN0RGF0YS5wcm9qZWN0VXNlcnM7XHJcbiAgICAgICAgY29uc29sZS5sb2coY3VycmVudFVzZXIpO1xyXG4gICAgICAgIG5ld1VzZXJzQXJyYXkucHVzaCh7XHJcbiAgICAgICAgICB1c2VyTmFtZTogY3VycmVudFVzZXIsXHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIGFsZXJ0KGVycm9yKTtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInotNTAgdGV4dC1wcmltYXJ5ZGFyayByb3VuZGVkLTJ4bCBtYi0zMiBmbGV4IGZsZXgtY29sXCI+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleFwiPlxyXG4gICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtbGcgZGFyazp0ZXh0LWJhY2tncm91bmRcIj5CZWNvbWUgYSBwcm9qZWN0IG1lbWJlcjwvcD5cclxuICAgICAgICA8TWFuYWdlclRpcHB5IC8+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInB5LTggcHgtOCBtdC0xIHctZnVsbCBmbGV4IGp1c3RpZnktYmV0d2VlbiBpdGVtcy1jZW50ZXIgYm9yZGVyLXItNiByb3VuZGVkLTJ4bCBiZy13aGl0ZSBkYXJrOmJnLWJhY2tncm91bmRcIj5cclxuICAgICAgICB7LyogPHA+UGFzdGUgdGhlIHByb2plY3QgY29kZSBoZXJlOjwvcD4gKi99XHJcbiAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICB2YWx1ZT17cHJvamVjdElkSW5wdXRWYWx1ZX1cclxuICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0UHJvamVjdElkSW5wdXRWYWx1ZShlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICBwbGFjZWhvbGRlcj1cInByb2plY3QgY29kZVwiXHJcbiAgICAgICAgICBjbGFzc05hbWU9XCJ3LTgvMTIgYmctd2hpdGUgdGV4dC1iYXNlIGZvY3VzOm91dGxpbmUtbm9uZSB0ZXh0LWdyYXlcIlxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgb25DbGljaz17b25OZXdQcm9qZWN0QWRkfVxyXG4gICAgICAgICAgY2xhc3NOYW1lPVwiaG92ZXI6YmctcHJpbWFyeSBob3Zlcjp0ZXh0LXdoaXRlIGRhcms6aG92ZXI6YmctcHJpbWFyeWRhcmsgZGFyazpob3Zlcjp0ZXh0LWJhY2tncm91bmQgZm9jdXM6b3V0bGluZS1ub25lIGJvcmRlciBib3JkZXItcHJpbWFyeSB0ZXh0LXByaW1hcnkgdGV4dC1zbSBmb250LWxpZ2h0IHB5LTIgcHgtNiByb3VuZGVkLTJ4bCBkYXJrOnRleHQtcHJpbWFyeWRhcmsgZGFyazpib3JkZXItcHJpbWFyeWRhcmtcIlxyXG4gICAgICAgID5cclxuICAgICAgICAgIEFkZCBwcm9qZWN0XHJcbiAgICAgICAgPC9idXR0b24+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IE1lbWJlcnNDb2RlQ29tcG9uZW50O1xyXG4iXSwic291cmNlUm9vdCI6IiJ9