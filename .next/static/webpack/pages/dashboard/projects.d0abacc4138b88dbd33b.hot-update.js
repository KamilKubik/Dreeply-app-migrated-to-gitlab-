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
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _lib_firebase__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../lib/firebase */ "./lib/firebase.js");
/* harmony import */ var _lib_newAuth__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../lib/newAuth */ "./lib/newAuth.js");
/* harmony import */ var _startup_project_business_app_tippys_ManagerTippy__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./startup/project/business-app/tippys/ManagerTippy */ "./components/dashboard/startup/project/business-app/tippys/ManagerTippy.js");
/* harmony import */ var react_spinners_BounceLoader__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-spinners/BounceLoader */ "./node_modules/react-spinners/BounceLoader.js");
/* harmony import */ var react_spinners_BounceLoader__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_spinners_BounceLoader__WEBPACK_IMPORTED_MODULE_8__);




var _jsxFileName = "C:\\off-saas\\components\\dashboard\\MembersCode.js",
    _this = undefined,
    _s = $RefreshSig$();








var MembersCodeComponent = function MembersCodeComponent() {
  _s();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(''),
      projectIdInputValue = _useState[0],
      setProjectIdInputValue = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(false),
      projectLoading = _useState2[0],
      setProjectLoading = _useState2[1];

  var _useAuth = Object(_lib_newAuth__WEBPACK_IMPORTED_MODULE_6__["useAuth"])(),
      currentUser = _useAuth.currentUser;

  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_4__["useRouter"])();

  var onNewProjectAdd = /*#__PURE__*/function () {
    var _ref = Object(C_off_saas_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/C_off_saas_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee() {
      var data, projectData, usersData, _usersData$data, name, userCountry, formatedUser, newUsersArray;

      return C_off_saas_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              _context.next = 3;
              return _lib_firebase__WEBPACK_IMPORTED_MODULE_5__["db"].collection('projects').doc(projectIdInputValue).get();

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
              setProjectLoading(true); // Fetch particular user

              _context.next = 13;
              return _lib_firebase__WEBPACK_IMPORTED_MODULE_5__["db"].collection('users').doc(currentUser.uid).get();

            case 13:
              usersData = _context.sent;
              _usersData$data = usersData.data(), name = _usersData$data.name, userCountry = _usersData$data.userCountry, formatedUser = _usersData$data.formatedUser; // Update particular project users

              newUsersArray = projectData.projectUsers;
              newUsersArray.push({
                email: formatedUser.email,
                stripeRole: formatedUser.stripeRole,
                token: formatedUser.token,
                userUid: formatedUser.uid,
                userName: name,
                userCountry: userCountry
              }); // Update firebase

              _context.next = 19;
              return _lib_firebase__WEBPACK_IMPORTED_MODULE_5__["db"].collection('projects').doc(projectIdInputValue).update({
                projectUsers: newUsersArray
              });

            case 19:
              // Page reload
              router.reload();
              setProjectLoading(false);

            case 21:
              _context.next = 27;
              break;

            case 23:
              _context.prev = 23;
              _context.t0 = _context["catch"](0);
              alert(_context.t0);
              return _context.abrupt("return");

            case 27:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[0, 23]]);
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
        lineNumber: 52,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_startup_project_business_app_tippys_ManagerTippy__WEBPACK_IMPORTED_MODULE_7__["default"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 53,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 51,
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
        lineNumber: 57,
        columnNumber: 9
      }, _this), projectLoading ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_spinners_BounceLoader__WEBPACK_IMPORTED_MODULE_8___default.a, {
        color: '#6C63FF',
        size: 24
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 64,
        columnNumber: 11
      }, _this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
        onClick: onNewProjectAdd,
        className: "hover:bg-primary hover:text-white dark:hover:bg-primarydark dark:hover:text-background focus:outline-none border border-primary text-primary text-sm font-light py-2 px-6 rounded-2xl dark:text-primarydark dark:border-primarydark",
        children: "Add Project"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 66,
        columnNumber: 11
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 50,
    columnNumber: 5
  }, _this);
};

_s(MembersCodeComponent, "Zbeqf0l5Bg1VPWf2py60FtJrxHM=", false, function () {
  return [_lib_newAuth__WEBPACK_IMPORTED_MODULE_6__["useAuth"], next_router__WEBPACK_IMPORTED_MODULE_4__["useRouter"]];
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9kYXNoYm9hcmQvTWVtYmVyc0NvZGUuanMiXSwibmFtZXMiOlsiTWVtYmVyc0NvZGVDb21wb25lbnQiLCJ1c2VTdGF0ZSIsInByb2plY3RJZElucHV0VmFsdWUiLCJzZXRQcm9qZWN0SWRJbnB1dFZhbHVlIiwicHJvamVjdExvYWRpbmciLCJzZXRQcm9qZWN0TG9hZGluZyIsInVzZUF1dGgiLCJjdXJyZW50VXNlciIsInJvdXRlciIsInVzZVJvdXRlciIsIm9uTmV3UHJvamVjdEFkZCIsImRiIiwiY29sbGVjdGlvbiIsImRvYyIsImdldCIsImRhdGEiLCJwcm9qZWN0RGF0YSIsInVpZCIsImFsZXJ0IiwidXNlcnNEYXRhIiwibmFtZSIsInVzZXJDb3VudHJ5IiwiZm9ybWF0ZWRVc2VyIiwibmV3VXNlcnNBcnJheSIsInByb2plY3RVc2VycyIsInB1c2giLCJlbWFpbCIsInN0cmlwZVJvbGUiLCJ0b2tlbiIsInVzZXJVaWQiLCJ1c2VyTmFtZSIsInVwZGF0ZSIsInJlbG9hZCIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQU1BLG9CQUFvQixHQUFHLFNBQXZCQSxvQkFBdUIsR0FBTTtBQUFBOztBQUFBLGtCQUNxQkMsc0RBQVEsQ0FBQyxFQUFELENBRDdCO0FBQUEsTUFDMUJDLG1CQUQwQjtBQUFBLE1BQ0xDLHNCQURLOztBQUFBLG1CQUVXRixzREFBUSxDQUFDLEtBQUQsQ0FGbkI7QUFBQSxNQUUxQkcsY0FGMEI7QUFBQSxNQUVWQyxpQkFGVTs7QUFBQSxpQkFHVEMsNERBQU8sRUFIRTtBQUFBLE1BR3pCQyxXQUh5QixZQUd6QkEsV0FIeUI7O0FBSWpDLE1BQU1DLE1BQU0sR0FBR0MsNkRBQVMsRUFBeEI7O0FBRUEsTUFBTUMsZUFBZTtBQUFBLGtSQUFHO0FBQUE7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QUEsYUFMRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQTJCRCxDQXBFRDs7R0FBTVYsb0I7VUFHb0JNLG9ELEVBQ1RHLHFEOzs7S0FKWFQsb0I7QUFzRVNBLG1GQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2Rhc2hib2FyZC9wcm9qZWN0cy5kMGFiYWNjNDEzOGI4OGRiZDMzYi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XHJcbmltcG9ydCB7IGRiIH0gZnJvbSAnLi4vLi4vbGliL2ZpcmViYXNlJztcclxuaW1wb3J0IHsgdXNlQXV0aCB9IGZyb20gJy4uLy4uL2xpYi9uZXdBdXRoJztcclxuaW1wb3J0IE1hbmFnZXJUaXBweSBmcm9tICcuL3N0YXJ0dXAvcHJvamVjdC9idXNpbmVzcy1hcHAvdGlwcHlzL01hbmFnZXJUaXBweSc7XHJcbmltcG9ydCBCb3VuY2VMb2FkZXIgZnJvbSAncmVhY3Qtc3Bpbm5lcnMvQm91bmNlTG9hZGVyJztcclxuXHJcbmNvbnN0IE1lbWJlcnNDb2RlQ29tcG9uZW50ID0gKCkgPT4ge1xyXG4gIGNvbnN0IFtwcm9qZWN0SWRJbnB1dFZhbHVlLCBzZXRQcm9qZWN0SWRJbnB1dFZhbHVlXSA9IHVzZVN0YXRlKCcnKTtcclxuICBjb25zdCBbcHJvamVjdExvYWRpbmcsIHNldFByb2plY3RMb2FkaW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCB7IGN1cnJlbnRVc2VyIH0gPSB1c2VBdXRoKCk7XHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcblxyXG4gIGNvbnN0IG9uTmV3UHJvamVjdEFkZCA9IGFzeW5jICgpID0+IHtcclxuICAgIC8vIEZldGNoIHBhcnRpY3VsYXIgcHJvamVjdFxyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IGRiLmNvbGxlY3Rpb24oJ3Byb2plY3RzJykuZG9jKHByb2plY3RJZElucHV0VmFsdWUpLmdldCgpO1xyXG4gICAgICBjb25zdCBwcm9qZWN0RGF0YSA9IGRhdGEuZGF0YSgpO1xyXG4gICAgICBpZiAocHJvamVjdERhdGEudWlkID09PSBjdXJyZW50VXNlci51aWQpIHtcclxuICAgICAgICBhbGVydCgnWW91IGFyZSBhbHJlYWR5IGEgbWVtYmVyIG9mIHRoaXMgcHJvamVjdCEnKTtcclxuICAgICAgICByZXR1cm47XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgc2V0UHJvamVjdExvYWRpbmcodHJ1ZSk7XHJcbiAgICAgICAgLy8gRmV0Y2ggcGFydGljdWxhciB1c2VyXHJcbiAgICAgICAgY29uc3QgdXNlcnNEYXRhID0gYXdhaXQgZGIuY29sbGVjdGlvbigndXNlcnMnKS5kb2MoY3VycmVudFVzZXIudWlkKS5nZXQoKTtcclxuICAgICAgICBjb25zdCB7IG5hbWUsIHVzZXJDb3VudHJ5LCBmb3JtYXRlZFVzZXIgfSA9IHVzZXJzRGF0YS5kYXRhKCk7XHJcbiAgICAgICAgLy8gVXBkYXRlIHBhcnRpY3VsYXIgcHJvamVjdCB1c2Vyc1xyXG4gICAgICAgIGNvbnN0IG5ld1VzZXJzQXJyYXkgPSBwcm9qZWN0RGF0YS5wcm9qZWN0VXNlcnM7XHJcbiAgICAgICAgbmV3VXNlcnNBcnJheS5wdXNoKHtcclxuICAgICAgICAgIGVtYWlsOiBmb3JtYXRlZFVzZXIuZW1haWwsXHJcbiAgICAgICAgICBzdHJpcGVSb2xlOiBmb3JtYXRlZFVzZXIuc3RyaXBlUm9sZSxcclxuICAgICAgICAgIHRva2VuOiBmb3JtYXRlZFVzZXIudG9rZW4sXHJcbiAgICAgICAgICB1c2VyVWlkOiBmb3JtYXRlZFVzZXIudWlkLFxyXG4gICAgICAgICAgdXNlck5hbWU6IG5hbWUsXHJcbiAgICAgICAgICB1c2VyQ291bnRyeSxcclxuICAgICAgICB9KTtcclxuICAgICAgICAvLyBVcGRhdGUgZmlyZWJhc2VcclxuICAgICAgICBhd2FpdCBkYi5jb2xsZWN0aW9uKCdwcm9qZWN0cycpLmRvYyhwcm9qZWN0SWRJbnB1dFZhbHVlKS51cGRhdGUoeyBwcm9qZWN0VXNlcnM6IG5ld1VzZXJzQXJyYXkgfSk7XHJcbiAgICAgICAgLy8gUGFnZSByZWxvYWRcclxuICAgICAgICByb3V0ZXIucmVsb2FkKCk7XHJcbiAgICAgICAgc2V0UHJvamVjdExvYWRpbmcoZmFsc2UpO1xyXG4gICAgICB9XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICBhbGVydChlcnJvcik7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJ6LTUwIHRleHQtcHJpbWFyeWRhcmsgcm91bmRlZC0yeGwgbWItMzIgZmxleCBmbGV4LWNvbFwiPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXhcIj5cclxuICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LWxnIGRhcms6dGV4dC1iYWNrZ3JvdW5kXCI+QmVjb21lIGEgcHJvamVjdCBtZW1iZXI8L3A+XHJcbiAgICAgICAgPE1hbmFnZXJUaXBweSAvPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJweS04IHB4LTggbXQtMSB3LWZ1bGwgZmxleCBqdXN0aWZ5LWJldHdlZW4gaXRlbXMtY2VudGVyIGJvcmRlci1yLTYgcm91bmRlZC0yeGwgYmctd2hpdGUgZGFyazpiZy1iYWNrZ3JvdW5kXCI+XHJcbiAgICAgICAgey8qIDxwPlBhc3RlIHRoZSBwcm9qZWN0IGNvZGUgaGVyZTo8L3A+ICovfVxyXG4gICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgdmFsdWU9e3Byb2plY3RJZElucHV0VmFsdWV9XHJcbiAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldFByb2plY3RJZElucHV0VmFsdWUoZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgcGxhY2Vob2xkZXI9XCJwcm9qZWN0IGNvZGVcIlxyXG4gICAgICAgICAgY2xhc3NOYW1lPVwidy04LzEyIGJnLXdoaXRlIHRleHQtYmFzZSBmb2N1czpvdXRsaW5lLW5vbmUgdGV4dC1ncmF5XCJcclxuICAgICAgICAvPlxyXG4gICAgICAgIHtwcm9qZWN0TG9hZGluZyA/IChcclxuICAgICAgICAgIDxCb3VuY2VMb2FkZXIgY29sb3I9eycjNkM2M0ZGJ30gc2l6ZT17MjR9IC8+XHJcbiAgICAgICAgKSA6IChcclxuICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgb25DbGljaz17b25OZXdQcm9qZWN0QWRkfVxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJob3ZlcjpiZy1wcmltYXJ5IGhvdmVyOnRleHQtd2hpdGUgZGFyazpob3ZlcjpiZy1wcmltYXJ5ZGFyayBkYXJrOmhvdmVyOnRleHQtYmFja2dyb3VuZCBmb2N1czpvdXRsaW5lLW5vbmUgYm9yZGVyIGJvcmRlci1wcmltYXJ5IHRleHQtcHJpbWFyeSB0ZXh0LXNtIGZvbnQtbGlnaHQgcHktMiBweC02IHJvdW5kZWQtMnhsIGRhcms6dGV4dC1wcmltYXJ5ZGFyayBkYXJrOmJvcmRlci1wcmltYXJ5ZGFya1wiXHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIEFkZCBQcm9qZWN0XHJcbiAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICApfVxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBNZW1iZXJzQ29kZUNvbXBvbmVudDtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==