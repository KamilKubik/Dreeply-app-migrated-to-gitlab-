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




var _jsxFileName = "C:\\off-saas\\components\\dashboard\\MembersCode.js",
    _this = undefined,
    _s = $RefreshSig$();







var MembersCodeComponent = function MembersCodeComponent() {
  _s();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(''),
      projectIdInputValue = _useState[0],
      setProjectIdInputValue = _useState[1];

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
              _context.next = 12;
              return _lib_firebase__WEBPACK_IMPORTED_MODULE_5__["db"].collection('users').doc(currentUser.uid).get();

            case 12:
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

              _context.next = 18;
              return _lib_firebase__WEBPACK_IMPORTED_MODULE_5__["db"].collection('projects').doc(projectIdInputValue).update({
                projectUsers: newUsersArray
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
        lineNumber: 46,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_startup_project_business_app_tippys_ManagerTippy__WEBPACK_IMPORTED_MODULE_7__["default"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 47,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 45,
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
        lineNumber: 51,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
        onClick: onNewProjectAdd,
        className: "hover:bg-primary hover:text-white dark:hover:bg-primarydark dark:hover:text-background focus:outline-none border border-primary text-primary text-sm font-light py-2 px-6 rounded-2xl dark:text-primarydark dark:border-primarydark",
        children: "Add project"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 57,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 44,
    columnNumber: 5
  }, _this);
};

_s(MembersCodeComponent, "YdpISM2JQJizu0x79xAQdeqO/K0=", false, function () {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9kYXNoYm9hcmQvTWVtYmVyc0NvZGUuanMiXSwibmFtZXMiOlsiTWVtYmVyc0NvZGVDb21wb25lbnQiLCJ1c2VTdGF0ZSIsInByb2plY3RJZElucHV0VmFsdWUiLCJzZXRQcm9qZWN0SWRJbnB1dFZhbHVlIiwidXNlQXV0aCIsImN1cnJlbnRVc2VyIiwicm91dGVyIiwidXNlUm91dGVyIiwib25OZXdQcm9qZWN0QWRkIiwiZGIiLCJjb2xsZWN0aW9uIiwiZG9jIiwiZ2V0IiwiZGF0YSIsInByb2plY3REYXRhIiwidWlkIiwiYWxlcnQiLCJ1c2Vyc0RhdGEiLCJuYW1lIiwidXNlckNvdW50cnkiLCJmb3JtYXRlZFVzZXIiLCJuZXdVc2Vyc0FycmF5IiwicHJvamVjdFVzZXJzIiwicHVzaCIsImVtYWlsIiwic3RyaXBlUm9sZSIsInRva2VuIiwidXNlclVpZCIsInVzZXJOYW1lIiwidXBkYXRlIiwiZSIsInRhcmdldCIsInZhbHVlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxvQkFBb0IsR0FBRyxTQUF2QkEsb0JBQXVCLEdBQU07QUFBQTs7QUFBQSxrQkFDcUJDLHNEQUFRLENBQUMsRUFBRCxDQUQ3QjtBQUFBLE1BQzFCQyxtQkFEMEI7QUFBQSxNQUNMQyxzQkFESzs7QUFBQSxpQkFFVEMsNERBQU8sRUFGRTtBQUFBLE1BRXpCQyxXQUZ5QixZQUV6QkEsV0FGeUI7O0FBR2pDLE1BQU1DLE1BQU0sR0FBR0MsNkRBQVMsRUFBeEI7O0FBRUEsTUFBTUMsZUFBZTtBQUFBLGtSQUFHO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBR0RDLGdEQUFFLENBQUNDLFVBQUgsQ0FBYyxVQUFkLEVBQTBCQyxHQUExQixDQUE4QlQsbUJBQTlCLEVBQW1EVSxHQUFuRCxFQUhDOztBQUFBO0FBR2RDLGtCQUhjO0FBSWRDLHlCQUpjLEdBSUFELElBQUksQ0FBQ0EsSUFBTCxFQUpBOztBQUFBLG9CQUtoQkMsV0FBVyxDQUFDQyxHQUFaLEtBQW9CVixXQUFXLENBQUNVLEdBTGhCO0FBQUE7QUFBQTtBQUFBOztBQU1sQkMsbUJBQUssQ0FBQywyQ0FBRCxDQUFMO0FBTmtCOztBQUFBO0FBQUE7QUFBQSxxQkFVTVAsZ0RBQUUsQ0FBQ0MsVUFBSCxDQUFjLE9BQWQsRUFBdUJDLEdBQXZCLENBQTJCTixXQUFXLENBQUNVLEdBQXZDLEVBQTRDSCxHQUE1QyxFQVZOOztBQUFBO0FBVVpLLHVCQVZZO0FBQUEsZ0NBVzBCQSxTQUFTLENBQUNKLElBQVYsRUFYMUIsRUFXVkssSUFYVSxtQkFXVkEsSUFYVSxFQVdKQyxXQVhJLG1CQVdKQSxXQVhJLEVBV1NDLFlBWFQsbUJBV1NBLFlBWFQsRUFZbEI7O0FBQ01DLDJCQWJZLEdBYUlQLFdBQVcsQ0FBQ1EsWUFiaEI7QUFjbEJELDJCQUFhLENBQUNFLElBQWQsQ0FBbUI7QUFDakJDLHFCQUFLLEVBQUVKLFlBQVksQ0FBQ0ksS0FESDtBQUVqQkMsMEJBQVUsRUFBRUwsWUFBWSxDQUFDSyxVQUZSO0FBR2pCQyxxQkFBSyxFQUFFTixZQUFZLENBQUNNLEtBSEg7QUFJakJDLHVCQUFPLEVBQUVQLFlBQVksQ0FBQ0wsR0FKTDtBQUtqQmEsd0JBQVEsRUFBRVYsSUFMTztBQU1qQkMsMkJBQVcsRUFBWEE7QUFOaUIsZUFBbkIsRUFka0IsQ0FzQmxCOztBQXRCa0I7QUFBQSxxQkF1QlpWLGdEQUFFLENBQUNDLFVBQUgsQ0FBYyxVQUFkLEVBQTBCQyxHQUExQixDQUE4QlQsbUJBQTlCLEVBQW1EMkIsTUFBbkQsQ0FBMEQ7QUFBRVAsNEJBQVksRUFBRUQ7QUFBaEIsZUFBMUQsQ0F2Qlk7O0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQTBCcEJMLG1CQUFLLGFBQUw7QUExQm9COztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQUg7O0FBQUEsb0JBQWZSLGVBQWU7QUFBQTtBQUFBO0FBQUEsS0FBckI7O0FBK0JBLHNCQUNFO0FBQUssYUFBUyxFQUFDLHVEQUFmO0FBQUEsNEJBQ0U7QUFBSyxlQUFTLEVBQUMsTUFBZjtBQUFBLDhCQUNFO0FBQUcsaUJBQVMsRUFBQyw4QkFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURGLGVBRUUscUVBQUMseUZBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURGLGVBS0U7QUFBSyxlQUFTLEVBQUMsNEdBQWY7QUFBQSw4QkFFRTtBQUNFLGFBQUssRUFBRU4sbUJBRFQ7QUFFRSxnQkFBUSxFQUFFLGtCQUFDNEIsQ0FBRDtBQUFBLGlCQUFPM0Isc0JBQXNCLENBQUMyQixDQUFDLENBQUNDLE1BQUYsQ0FBU0MsS0FBVixDQUE3QjtBQUFBLFNBRlo7QUFHRSxtQkFBVyxFQUFDLGNBSGQ7QUFJRSxpQkFBUyxFQUFDO0FBSlo7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUZGLGVBUUU7QUFDRSxlQUFPLEVBQUV4QixlQURYO0FBRUUsaUJBQVMsRUFBQyxxT0FGWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQVJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUxGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBdUJELENBM0REOztHQUFNUixvQjtVQUVvQkksb0QsRUFDVEcscUQ7OztLQUhYUCxvQjtBQTZEU0EsbUZBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvZGFzaGJvYXJkL3Byb2plY3RzLjgwMWY0ZGJjMGIzOTNlYzI0YmRmLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcclxuaW1wb3J0IHsgZGIgfSBmcm9tICcuLi8uLi9saWIvZmlyZWJhc2UnO1xyXG5pbXBvcnQgeyB1c2VBdXRoIH0gZnJvbSAnLi4vLi4vbGliL25ld0F1dGgnO1xyXG5pbXBvcnQgTWFuYWdlclRpcHB5IGZyb20gJy4vc3RhcnR1cC9wcm9qZWN0L2J1c2luZXNzLWFwcC90aXBweXMvTWFuYWdlclRpcHB5JztcclxuXHJcbmNvbnN0IE1lbWJlcnNDb2RlQ29tcG9uZW50ID0gKCkgPT4ge1xyXG4gIGNvbnN0IFtwcm9qZWN0SWRJbnB1dFZhbHVlLCBzZXRQcm9qZWN0SWRJbnB1dFZhbHVlXSA9IHVzZVN0YXRlKCcnKTtcclxuICBjb25zdCB7IGN1cnJlbnRVc2VyIH0gPSB1c2VBdXRoKCk7XHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcblxyXG4gIGNvbnN0IG9uTmV3UHJvamVjdEFkZCA9IGFzeW5jICgpID0+IHtcclxuICAgIC8vIEZldGNoIHBhcnRpY3VsYXIgcHJvamVjdFxyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IGRiLmNvbGxlY3Rpb24oJ3Byb2plY3RzJykuZG9jKHByb2plY3RJZElucHV0VmFsdWUpLmdldCgpO1xyXG4gICAgICBjb25zdCBwcm9qZWN0RGF0YSA9IGRhdGEuZGF0YSgpO1xyXG4gICAgICBpZiAocHJvamVjdERhdGEudWlkID09PSBjdXJyZW50VXNlci51aWQpIHtcclxuICAgICAgICBhbGVydCgnWW91IGFyZSBhbHJlYWR5IGEgbWVtYmVyIG9mIHRoaXMgcHJvamVjdCEnKTtcclxuICAgICAgICByZXR1cm47XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgLy8gRmV0Y2ggcGFydGljdWxhciB1c2VyXHJcbiAgICAgICAgY29uc3QgdXNlcnNEYXRhID0gYXdhaXQgZGIuY29sbGVjdGlvbigndXNlcnMnKS5kb2MoY3VycmVudFVzZXIudWlkKS5nZXQoKTtcclxuICAgICAgICBjb25zdCB7IG5hbWUsIHVzZXJDb3VudHJ5LCBmb3JtYXRlZFVzZXIgfSA9IHVzZXJzRGF0YS5kYXRhKCk7XHJcbiAgICAgICAgLy8gVXBkYXRlIHBhcnRpY3VsYXIgcHJvamVjdCB1c2Vyc1xyXG4gICAgICAgIGNvbnN0IG5ld1VzZXJzQXJyYXkgPSBwcm9qZWN0RGF0YS5wcm9qZWN0VXNlcnM7XHJcbiAgICAgICAgbmV3VXNlcnNBcnJheS5wdXNoKHtcclxuICAgICAgICAgIGVtYWlsOiBmb3JtYXRlZFVzZXIuZW1haWwsXHJcbiAgICAgICAgICBzdHJpcGVSb2xlOiBmb3JtYXRlZFVzZXIuc3RyaXBlUm9sZSxcclxuICAgICAgICAgIHRva2VuOiBmb3JtYXRlZFVzZXIudG9rZW4sXHJcbiAgICAgICAgICB1c2VyVWlkOiBmb3JtYXRlZFVzZXIudWlkLFxyXG4gICAgICAgICAgdXNlck5hbWU6IG5hbWUsXHJcbiAgICAgICAgICB1c2VyQ291bnRyeSxcclxuICAgICAgICB9KTtcclxuICAgICAgICAvLyBVcGRhdGUgZmlyZWJhc2VcclxuICAgICAgICBhd2FpdCBkYi5jb2xsZWN0aW9uKCdwcm9qZWN0cycpLmRvYyhwcm9qZWN0SWRJbnB1dFZhbHVlKS51cGRhdGUoeyBwcm9qZWN0VXNlcnM6IG5ld1VzZXJzQXJyYXkgfSk7XHJcbiAgICAgIH1cclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIGFsZXJ0KGVycm9yKTtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInotNTAgdGV4dC1wcmltYXJ5ZGFyayByb3VuZGVkLTJ4bCBtYi0zMiBmbGV4IGZsZXgtY29sXCI+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleFwiPlxyXG4gICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtbGcgZGFyazp0ZXh0LWJhY2tncm91bmRcIj5CZWNvbWUgYSBwcm9qZWN0IG1lbWJlcjwvcD5cclxuICAgICAgICA8TWFuYWdlclRpcHB5IC8+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInB5LTggcHgtOCBtdC0xIHctZnVsbCBmbGV4IGp1c3RpZnktYmV0d2VlbiBpdGVtcy1jZW50ZXIgYm9yZGVyLXItNiByb3VuZGVkLTJ4bCBiZy13aGl0ZSBkYXJrOmJnLWJhY2tncm91bmRcIj5cclxuICAgICAgICB7LyogPHA+UGFzdGUgdGhlIHByb2plY3QgY29kZSBoZXJlOjwvcD4gKi99XHJcbiAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICB2YWx1ZT17cHJvamVjdElkSW5wdXRWYWx1ZX1cclxuICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0UHJvamVjdElkSW5wdXRWYWx1ZShlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICBwbGFjZWhvbGRlcj1cInByb2plY3QgY29kZVwiXHJcbiAgICAgICAgICBjbGFzc05hbWU9XCJ3LTgvMTIgYmctd2hpdGUgdGV4dC1iYXNlIGZvY3VzOm91dGxpbmUtbm9uZSB0ZXh0LWdyYXlcIlxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgb25DbGljaz17b25OZXdQcm9qZWN0QWRkfVxyXG4gICAgICAgICAgY2xhc3NOYW1lPVwiaG92ZXI6YmctcHJpbWFyeSBob3Zlcjp0ZXh0LXdoaXRlIGRhcms6aG92ZXI6YmctcHJpbWFyeWRhcmsgZGFyazpob3Zlcjp0ZXh0LWJhY2tncm91bmQgZm9jdXM6b3V0bGluZS1ub25lIGJvcmRlciBib3JkZXItcHJpbWFyeSB0ZXh0LXByaW1hcnkgdGV4dC1zbSBmb250LWxpZ2h0IHB5LTIgcHgtNiByb3VuZGVkLTJ4bCBkYXJrOnRleHQtcHJpbWFyeWRhcmsgZGFyazpib3JkZXItcHJpbWFyeWRhcmtcIlxyXG4gICAgICAgID5cclxuICAgICAgICAgIEFkZCBwcm9qZWN0XHJcbiAgICAgICAgPC9idXR0b24+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IE1lbWJlcnNDb2RlQ29tcG9uZW50O1xyXG4iXSwic291cmNlUm9vdCI6IiJ9