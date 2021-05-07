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
              _usersData$data = usersData.data(), name = _usersData$data.name, userCountry = _usersData$data.userCountry, formatedUser = _usersData$data.formatedUser; // Update particular project users

              newUsersArray = projectData.projectUsers;
              newUsersArray.push({
                email: formatedUser.email,
                stripeRole: formatedUser.stripeRole,
                token: formatedUser.token,
                uid: formatedUser.uid,
                userName: name,
                userCountry: userCountry
              }); // Update firebase

              _context.next = 18;
              return _lib_firebase__WEBPACK_IMPORTED_MODULE_4__["db"].collection('projects').doc(projectIdInputValue).update({
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
        lineNumber: 44,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_startup_project_business_app_tippys_ManagerTippy__WEBPACK_IMPORTED_MODULE_6__["default"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 45,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 43,
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
        lineNumber: 49,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
        onClick: onNewProjectAdd,
        className: "hover:bg-primary hover:text-white dark:hover:bg-primarydark dark:hover:text-background focus:outline-none border border-primary text-primary text-sm font-light py-2 px-6 rounded-2xl dark:text-primarydark dark:border-primarydark",
        children: "Add project"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 55,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 42,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9kYXNoYm9hcmQvTWVtYmVyc0NvZGUuanMiXSwibmFtZXMiOlsiTWVtYmVyc0NvZGVDb21wb25lbnQiLCJ1c2VTdGF0ZSIsInByb2plY3RJZElucHV0VmFsdWUiLCJzZXRQcm9qZWN0SWRJbnB1dFZhbHVlIiwidXNlQXV0aCIsImN1cnJlbnRVc2VyIiwib25OZXdQcm9qZWN0QWRkIiwiZGIiLCJjb2xsZWN0aW9uIiwiZG9jIiwiZ2V0IiwiZGF0YSIsInByb2plY3REYXRhIiwidWlkIiwiYWxlcnQiLCJ1c2Vyc0RhdGEiLCJuYW1lIiwidXNlckNvdW50cnkiLCJmb3JtYXRlZFVzZXIiLCJuZXdVc2Vyc0FycmF5IiwicHJvamVjdFVzZXJzIiwicHVzaCIsImVtYWlsIiwic3RyaXBlUm9sZSIsInRva2VuIiwidXNlck5hbWUiLCJ1cGRhdGUiLCJlIiwidGFyZ2V0IiwidmFsdWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsb0JBQW9CLEdBQUcsU0FBdkJBLG9CQUF1QixHQUFNO0FBQUE7O0FBQUEsa0JBQ3FCQyxzREFBUSxDQUFDLEVBQUQsQ0FEN0I7QUFBQSxNQUMxQkMsbUJBRDBCO0FBQUEsTUFDTEMsc0JBREs7O0FBQUEsaUJBRVRDLDREQUFPLEVBRkU7QUFBQSxNQUV6QkMsV0FGeUIsWUFFekJBLFdBRnlCOztBQUlqQyxNQUFNQyxlQUFlO0FBQUEsa1JBQUc7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFHREMsZ0RBQUUsQ0FBQ0MsVUFBSCxDQUFjLFVBQWQsRUFBMEJDLEdBQTFCLENBQThCUCxtQkFBOUIsRUFBbURRLEdBQW5ELEVBSEM7O0FBQUE7QUFHZEMsa0JBSGM7QUFJZEMseUJBSmMsR0FJQUQsSUFBSSxDQUFDQSxJQUFMLEVBSkE7O0FBQUEsb0JBS2hCQyxXQUFXLENBQUNDLEdBQVosS0FBb0JSLFdBQVcsQ0FBQ1EsR0FMaEI7QUFBQTtBQUFBO0FBQUE7O0FBTWxCQyxtQkFBSyxDQUFDLDJDQUFELENBQUw7QUFOa0I7O0FBQUE7QUFBQTtBQUFBLHFCQVVNUCxnREFBRSxDQUFDQyxVQUFILENBQWMsT0FBZCxFQUF1QkMsR0FBdkIsQ0FBMkJKLFdBQVcsQ0FBQ1EsR0FBdkMsRUFBNENILEdBQTVDLEVBVk47O0FBQUE7QUFVWkssdUJBVlk7QUFBQSxnQ0FXMEJBLFNBQVMsQ0FBQ0osSUFBVixFQVgxQixFQVdWSyxJQVhVLG1CQVdWQSxJQVhVLEVBV0pDLFdBWEksbUJBV0pBLFdBWEksRUFXU0MsWUFYVCxtQkFXU0EsWUFYVCxFQVlsQjs7QUFDTUMsMkJBYlksR0FhSVAsV0FBVyxDQUFDUSxZQWJoQjtBQWNsQkQsMkJBQWEsQ0FBQ0UsSUFBZCxDQUFtQjtBQUNqQkMscUJBQUssRUFBRUosWUFBWSxDQUFDSSxLQURIO0FBRWpCQywwQkFBVSxFQUFFTCxZQUFZLENBQUNLLFVBRlI7QUFHakJDLHFCQUFLLEVBQUVOLFlBQVksQ0FBQ00sS0FISDtBQUlqQlgsbUJBQUcsRUFBRUssWUFBWSxDQUFDTCxHQUpEO0FBS2pCWSx3QkFBUSxFQUFFVCxJQUxPO0FBTWpCQywyQkFBVyxFQUFYQTtBQU5pQixlQUFuQixFQWRrQixDQXNCbEI7O0FBdEJrQjtBQUFBLHFCQXVCWlYsZ0RBQUUsQ0FBQ0MsVUFBSCxDQUFjLFVBQWQsRUFBMEJDLEdBQTFCLENBQThCUCxtQkFBOUIsRUFBbUR3QixNQUFuRCxDQUEwRDtBQUFFTiw0QkFBWSxFQUFFRDtBQUFoQixlQUExRCxDQXZCWTs7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBMEJwQkwsbUJBQUssYUFBTDtBQTFCb0I7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBSDs7QUFBQSxvQkFBZlIsZUFBZTtBQUFBO0FBQUE7QUFBQSxLQUFyQjs7QUErQkEsc0JBQ0U7QUFBSyxhQUFTLEVBQUMsdURBQWY7QUFBQSw0QkFDRTtBQUFLLGVBQVMsRUFBQyxNQUFmO0FBQUEsOEJBQ0U7QUFBRyxpQkFBUyxFQUFDLDhCQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREYsZUFFRSxxRUFBQyx5RkFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREYsZUFLRTtBQUFLLGVBQVMsRUFBQyw0R0FBZjtBQUFBLDhCQUVFO0FBQ0UsYUFBSyxFQUFFSixtQkFEVDtBQUVFLGdCQUFRLEVBQUUsa0JBQUN5QixDQUFEO0FBQUEsaUJBQU94QixzQkFBc0IsQ0FBQ3dCLENBQUMsQ0FBQ0MsTUFBRixDQUFTQyxLQUFWLENBQTdCO0FBQUEsU0FGWjtBQUdFLG1CQUFXLEVBQUMsY0FIZDtBQUlFLGlCQUFTLEVBQUM7QUFKWjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBRkYsZUFRRTtBQUNFLGVBQU8sRUFBRXZCLGVBRFg7QUFFRSxpQkFBUyxFQUFDLHFPQUZaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBUkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBTEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUF1QkQsQ0ExREQ7O0dBQU1OLG9CO1VBRW9CSSxvRDs7O0tBRnBCSixvQjtBQTREU0EsbUZBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvZGFzaGJvYXJkL3Byb2plY3RzLjRlZTE0OTk2ZDFlZDU5OTA0NGE3LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IGRiIH0gZnJvbSAnLi4vLi4vbGliL2ZpcmViYXNlJztcclxuaW1wb3J0IHsgdXNlQXV0aCB9IGZyb20gJy4uLy4uL2xpYi9uZXdBdXRoJztcclxuaW1wb3J0IE1hbmFnZXJUaXBweSBmcm9tICcuL3N0YXJ0dXAvcHJvamVjdC9idXNpbmVzcy1hcHAvdGlwcHlzL01hbmFnZXJUaXBweSc7XHJcblxyXG5jb25zdCBNZW1iZXJzQ29kZUNvbXBvbmVudCA9ICgpID0+IHtcclxuICBjb25zdCBbcHJvamVjdElkSW5wdXRWYWx1ZSwgc2V0UHJvamVjdElkSW5wdXRWYWx1ZV0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgY29uc3QgeyBjdXJyZW50VXNlciB9ID0gdXNlQXV0aCgpO1xyXG5cclxuICBjb25zdCBvbk5ld1Byb2plY3RBZGQgPSBhc3luYyAoKSA9PiB7XHJcbiAgICAvLyBGZXRjaCBwYXJ0aWN1bGFyIHByb2plY3RcclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCBkYi5jb2xsZWN0aW9uKCdwcm9qZWN0cycpLmRvYyhwcm9qZWN0SWRJbnB1dFZhbHVlKS5nZXQoKTtcclxuICAgICAgY29uc3QgcHJvamVjdERhdGEgPSBkYXRhLmRhdGEoKTtcclxuICAgICAgaWYgKHByb2plY3REYXRhLnVpZCA9PT0gY3VycmVudFVzZXIudWlkKSB7XHJcbiAgICAgICAgYWxlcnQoJ1lvdSBhcmUgYWxyZWFkeSBhIG1lbWJlciBvZiB0aGlzIHByb2plY3QhJyk7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIC8vIEZldGNoIHBhcnRpY3VsYXIgdXNlclxyXG4gICAgICAgIGNvbnN0IHVzZXJzRGF0YSA9IGF3YWl0IGRiLmNvbGxlY3Rpb24oJ3VzZXJzJykuZG9jKGN1cnJlbnRVc2VyLnVpZCkuZ2V0KCk7XHJcbiAgICAgICAgY29uc3QgeyBuYW1lLCB1c2VyQ291bnRyeSwgZm9ybWF0ZWRVc2VyIH0gPSB1c2Vyc0RhdGEuZGF0YSgpO1xyXG4gICAgICAgIC8vIFVwZGF0ZSBwYXJ0aWN1bGFyIHByb2plY3QgdXNlcnNcclxuICAgICAgICBjb25zdCBuZXdVc2Vyc0FycmF5ID0gcHJvamVjdERhdGEucHJvamVjdFVzZXJzO1xyXG4gICAgICAgIG5ld1VzZXJzQXJyYXkucHVzaCh7XHJcbiAgICAgICAgICBlbWFpbDogZm9ybWF0ZWRVc2VyLmVtYWlsLFxyXG4gICAgICAgICAgc3RyaXBlUm9sZTogZm9ybWF0ZWRVc2VyLnN0cmlwZVJvbGUsXHJcbiAgICAgICAgICB0b2tlbjogZm9ybWF0ZWRVc2VyLnRva2VuLFxyXG4gICAgICAgICAgdWlkOiBmb3JtYXRlZFVzZXIudWlkLFxyXG4gICAgICAgICAgdXNlck5hbWU6IG5hbWUsXHJcbiAgICAgICAgICB1c2VyQ291bnRyeSxcclxuICAgICAgICB9KTtcclxuICAgICAgICAvLyBVcGRhdGUgZmlyZWJhc2VcclxuICAgICAgICBhd2FpdCBkYi5jb2xsZWN0aW9uKCdwcm9qZWN0cycpLmRvYyhwcm9qZWN0SWRJbnB1dFZhbHVlKS51cGRhdGUoeyBwcm9qZWN0VXNlcnM6IG5ld1VzZXJzQXJyYXkgfSk7XHJcbiAgICAgIH1cclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIGFsZXJ0KGVycm9yKTtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInotNTAgdGV4dC1wcmltYXJ5ZGFyayByb3VuZGVkLTJ4bCBtYi0zMiBmbGV4IGZsZXgtY29sXCI+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleFwiPlxyXG4gICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtbGcgZGFyazp0ZXh0LWJhY2tncm91bmRcIj5CZWNvbWUgYSBwcm9qZWN0IG1lbWJlcjwvcD5cclxuICAgICAgICA8TWFuYWdlclRpcHB5IC8+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInB5LTggcHgtOCBtdC0xIHctZnVsbCBmbGV4IGp1c3RpZnktYmV0d2VlbiBpdGVtcy1jZW50ZXIgYm9yZGVyLXItNiByb3VuZGVkLTJ4bCBiZy13aGl0ZSBkYXJrOmJnLWJhY2tncm91bmRcIj5cclxuICAgICAgICB7LyogPHA+UGFzdGUgdGhlIHByb2plY3QgY29kZSBoZXJlOjwvcD4gKi99XHJcbiAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICB2YWx1ZT17cHJvamVjdElkSW5wdXRWYWx1ZX1cclxuICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0UHJvamVjdElkSW5wdXRWYWx1ZShlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICBwbGFjZWhvbGRlcj1cInByb2plY3QgY29kZVwiXHJcbiAgICAgICAgICBjbGFzc05hbWU9XCJ3LTgvMTIgYmctd2hpdGUgdGV4dC1iYXNlIGZvY3VzOm91dGxpbmUtbm9uZSB0ZXh0LWdyYXlcIlxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgb25DbGljaz17b25OZXdQcm9qZWN0QWRkfVxyXG4gICAgICAgICAgY2xhc3NOYW1lPVwiaG92ZXI6YmctcHJpbWFyeSBob3Zlcjp0ZXh0LXdoaXRlIGRhcms6aG92ZXI6YmctcHJpbWFyeWRhcmsgZGFyazpob3Zlcjp0ZXh0LWJhY2tncm91bmQgZm9jdXM6b3V0bGluZS1ub25lIGJvcmRlciBib3JkZXItcHJpbWFyeSB0ZXh0LXByaW1hcnkgdGV4dC1zbSBmb250LWxpZ2h0IHB5LTIgcHgtNiByb3VuZGVkLTJ4bCBkYXJrOnRleHQtcHJpbWFyeWRhcmsgZGFyazpib3JkZXItcHJpbWFyeWRhcmtcIlxyXG4gICAgICAgID5cclxuICAgICAgICAgIEFkZCBwcm9qZWN0XHJcbiAgICAgICAgPC9idXR0b24+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IE1lbWJlcnNDb2RlQ29tcG9uZW50O1xyXG4iXSwic291cmNlUm9vdCI6IiJ9