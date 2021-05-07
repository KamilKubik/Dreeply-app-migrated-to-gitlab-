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
              // Page reload
              router.reload();

            case 19:
              _context.next = 25;
              break;

            case 21:
              _context.prev = 21;
              _context.t0 = _context["catch"](0);
              alert(_context.t0);
              return _context.abrupt("return");

            case 25:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[0, 21]]);
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
        lineNumber: 49,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_startup_project_business_app_tippys_ManagerTippy__WEBPACK_IMPORTED_MODULE_7__["default"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 50,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 48,
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
        lineNumber: 54,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_spinners_BounceLoader__WEBPACK_IMPORTED_MODULE_8___default.a, {
        color: '#6C63FF',
        height: 20,
        width: 20
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 66,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 47,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9kYXNoYm9hcmQvTWVtYmVyc0NvZGUuanMiXSwibmFtZXMiOlsiTWVtYmVyc0NvZGVDb21wb25lbnQiLCJ1c2VTdGF0ZSIsInByb2plY3RJZElucHV0VmFsdWUiLCJzZXRQcm9qZWN0SWRJbnB1dFZhbHVlIiwidXNlQXV0aCIsImN1cnJlbnRVc2VyIiwicm91dGVyIiwidXNlUm91dGVyIiwib25OZXdQcm9qZWN0QWRkIiwiZGIiLCJjb2xsZWN0aW9uIiwiZG9jIiwiZ2V0IiwiZGF0YSIsInByb2plY3REYXRhIiwidWlkIiwiYWxlcnQiLCJ1c2Vyc0RhdGEiLCJuYW1lIiwidXNlckNvdW50cnkiLCJmb3JtYXRlZFVzZXIiLCJuZXdVc2Vyc0FycmF5IiwicHJvamVjdFVzZXJzIiwicHVzaCIsImVtYWlsIiwic3RyaXBlUm9sZSIsInRva2VuIiwidXNlclVpZCIsInVzZXJOYW1lIiwidXBkYXRlIiwicmVsb2FkIiwiZSIsInRhcmdldCIsInZhbHVlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsb0JBQW9CLEdBQUcsU0FBdkJBLG9CQUF1QixHQUFNO0FBQUE7O0FBQUEsa0JBQ3FCQyxzREFBUSxDQUFDLEVBQUQsQ0FEN0I7QUFBQSxNQUMxQkMsbUJBRDBCO0FBQUEsTUFDTEMsc0JBREs7O0FBQUEsaUJBRVRDLDREQUFPLEVBRkU7QUFBQSxNQUV6QkMsV0FGeUIsWUFFekJBLFdBRnlCOztBQUdqQyxNQUFNQyxNQUFNLEdBQUdDLDZEQUFTLEVBQXhCOztBQUVBLE1BQU1DLGVBQWU7QUFBQSxrUkFBRztBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUdEQyxnREFBRSxDQUFDQyxVQUFILENBQWMsVUFBZCxFQUEwQkMsR0FBMUIsQ0FBOEJULG1CQUE5QixFQUFtRFUsR0FBbkQsRUFIQzs7QUFBQTtBQUdkQyxrQkFIYztBQUlkQyx5QkFKYyxHQUlBRCxJQUFJLENBQUNBLElBQUwsRUFKQTs7QUFBQSxvQkFLaEJDLFdBQVcsQ0FBQ0MsR0FBWixLQUFvQlYsV0FBVyxDQUFDVSxHQUxoQjtBQUFBO0FBQUE7QUFBQTs7QUFNbEJDLG1CQUFLLENBQUMsMkNBQUQsQ0FBTDtBQU5rQjs7QUFBQTtBQUFBO0FBQUEscUJBVU1QLGdEQUFFLENBQUNDLFVBQUgsQ0FBYyxPQUFkLEVBQXVCQyxHQUF2QixDQUEyQk4sV0FBVyxDQUFDVSxHQUF2QyxFQUE0Q0gsR0FBNUMsRUFWTjs7QUFBQTtBQVVaSyx1QkFWWTtBQUFBLGdDQVcwQkEsU0FBUyxDQUFDSixJQUFWLEVBWDFCLEVBV1ZLLElBWFUsbUJBV1ZBLElBWFUsRUFXSkMsV0FYSSxtQkFXSkEsV0FYSSxFQVdTQyxZQVhULG1CQVdTQSxZQVhULEVBWWxCOztBQUNNQywyQkFiWSxHQWFJUCxXQUFXLENBQUNRLFlBYmhCO0FBY2xCRCwyQkFBYSxDQUFDRSxJQUFkLENBQW1CO0FBQ2pCQyxxQkFBSyxFQUFFSixZQUFZLENBQUNJLEtBREg7QUFFakJDLDBCQUFVLEVBQUVMLFlBQVksQ0FBQ0ssVUFGUjtBQUdqQkMscUJBQUssRUFBRU4sWUFBWSxDQUFDTSxLQUhIO0FBSWpCQyx1QkFBTyxFQUFFUCxZQUFZLENBQUNMLEdBSkw7QUFLakJhLHdCQUFRLEVBQUVWLElBTE87QUFNakJDLDJCQUFXLEVBQVhBO0FBTmlCLGVBQW5CLEVBZGtCLENBc0JsQjs7QUF0QmtCO0FBQUEscUJBdUJaVixnREFBRSxDQUFDQyxVQUFILENBQWMsVUFBZCxFQUEwQkMsR0FBMUIsQ0FBOEJULG1CQUE5QixFQUFtRDJCLE1BQW5ELENBQTBEO0FBQUVQLDRCQUFZLEVBQUVEO0FBQWhCLGVBQTFELENBdkJZOztBQUFBO0FBd0JsQjtBQUNBZixvQkFBTSxDQUFDd0IsTUFBUDs7QUF6QmtCO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUE0QnBCZCxtQkFBSyxhQUFMO0FBNUJvQjs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFIOztBQUFBLG9CQUFmUixlQUFlO0FBQUE7QUFBQTtBQUFBLEtBQXJCOztBQWlDQSxzQkFDRTtBQUFLLGFBQVMsRUFBQyx1REFBZjtBQUFBLDRCQUNFO0FBQUssZUFBUyxFQUFDLE1BQWY7QUFBQSw4QkFDRTtBQUFHLGlCQUFTLEVBQUMsOEJBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERixlQUVFLHFFQUFDLHlGQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFERixlQUtFO0FBQUssZUFBUyxFQUFDLDRHQUFmO0FBQUEsOEJBRUU7QUFDRSxhQUFLLEVBQUVOLG1CQURUO0FBRUUsZ0JBQVEsRUFBRSxrQkFBQzZCLENBQUQ7QUFBQSxpQkFBTzVCLHNCQUFzQixDQUFDNEIsQ0FBQyxDQUFDQyxNQUFGLENBQVNDLEtBQVYsQ0FBN0I7QUFBQSxTQUZaO0FBR0UsbUJBQVcsRUFBQyxjQUhkO0FBSUUsaUJBQVMsRUFBQztBQUpaO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFGRixlQWNFLHFFQUFDLGtFQUFEO0FBQWMsYUFBSyxFQUFFLFNBQXJCO0FBQWdDLGNBQU0sRUFBRSxFQUF4QztBQUE0QyxhQUFLLEVBQUU7QUFBbkQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQWRGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUxGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBd0JELENBOUREOztHQUFNakMsb0I7VUFFb0JJLG9ELEVBQ1RHLHFEOzs7S0FIWFAsb0I7QUFnRVNBLG1GQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2Rhc2hib2FyZC9wcm9qZWN0cy5iNTFjNzc0NDNmMzE4NDI4NWQwNS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XHJcbmltcG9ydCB7IGRiIH0gZnJvbSAnLi4vLi4vbGliL2ZpcmViYXNlJztcclxuaW1wb3J0IHsgdXNlQXV0aCB9IGZyb20gJy4uLy4uL2xpYi9uZXdBdXRoJztcclxuaW1wb3J0IE1hbmFnZXJUaXBweSBmcm9tICcuL3N0YXJ0dXAvcHJvamVjdC9idXNpbmVzcy1hcHAvdGlwcHlzL01hbmFnZXJUaXBweSc7XHJcbmltcG9ydCBCb3VuY2VMb2FkZXIgZnJvbSAncmVhY3Qtc3Bpbm5lcnMvQm91bmNlTG9hZGVyJztcclxuXHJcbmNvbnN0IE1lbWJlcnNDb2RlQ29tcG9uZW50ID0gKCkgPT4ge1xyXG4gIGNvbnN0IFtwcm9qZWN0SWRJbnB1dFZhbHVlLCBzZXRQcm9qZWN0SWRJbnB1dFZhbHVlXSA9IHVzZVN0YXRlKCcnKTtcclxuICBjb25zdCB7IGN1cnJlbnRVc2VyIH0gPSB1c2VBdXRoKCk7XHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcblxyXG4gIGNvbnN0IG9uTmV3UHJvamVjdEFkZCA9IGFzeW5jICgpID0+IHtcclxuICAgIC8vIEZldGNoIHBhcnRpY3VsYXIgcHJvamVjdFxyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IGRiLmNvbGxlY3Rpb24oJ3Byb2plY3RzJykuZG9jKHByb2plY3RJZElucHV0VmFsdWUpLmdldCgpO1xyXG4gICAgICBjb25zdCBwcm9qZWN0RGF0YSA9IGRhdGEuZGF0YSgpO1xyXG4gICAgICBpZiAocHJvamVjdERhdGEudWlkID09PSBjdXJyZW50VXNlci51aWQpIHtcclxuICAgICAgICBhbGVydCgnWW91IGFyZSBhbHJlYWR5IGEgbWVtYmVyIG9mIHRoaXMgcHJvamVjdCEnKTtcclxuICAgICAgICByZXR1cm47XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgLy8gRmV0Y2ggcGFydGljdWxhciB1c2VyXHJcbiAgICAgICAgY29uc3QgdXNlcnNEYXRhID0gYXdhaXQgZGIuY29sbGVjdGlvbigndXNlcnMnKS5kb2MoY3VycmVudFVzZXIudWlkKS5nZXQoKTtcclxuICAgICAgICBjb25zdCB7IG5hbWUsIHVzZXJDb3VudHJ5LCBmb3JtYXRlZFVzZXIgfSA9IHVzZXJzRGF0YS5kYXRhKCk7XHJcbiAgICAgICAgLy8gVXBkYXRlIHBhcnRpY3VsYXIgcHJvamVjdCB1c2Vyc1xyXG4gICAgICAgIGNvbnN0IG5ld1VzZXJzQXJyYXkgPSBwcm9qZWN0RGF0YS5wcm9qZWN0VXNlcnM7XHJcbiAgICAgICAgbmV3VXNlcnNBcnJheS5wdXNoKHtcclxuICAgICAgICAgIGVtYWlsOiBmb3JtYXRlZFVzZXIuZW1haWwsXHJcbiAgICAgICAgICBzdHJpcGVSb2xlOiBmb3JtYXRlZFVzZXIuc3RyaXBlUm9sZSxcclxuICAgICAgICAgIHRva2VuOiBmb3JtYXRlZFVzZXIudG9rZW4sXHJcbiAgICAgICAgICB1c2VyVWlkOiBmb3JtYXRlZFVzZXIudWlkLFxyXG4gICAgICAgICAgdXNlck5hbWU6IG5hbWUsXHJcbiAgICAgICAgICB1c2VyQ291bnRyeSxcclxuICAgICAgICB9KTtcclxuICAgICAgICAvLyBVcGRhdGUgZmlyZWJhc2VcclxuICAgICAgICBhd2FpdCBkYi5jb2xsZWN0aW9uKCdwcm9qZWN0cycpLmRvYyhwcm9qZWN0SWRJbnB1dFZhbHVlKS51cGRhdGUoeyBwcm9qZWN0VXNlcnM6IG5ld1VzZXJzQXJyYXkgfSk7XHJcbiAgICAgICAgLy8gUGFnZSByZWxvYWRcclxuICAgICAgICByb3V0ZXIucmVsb2FkKCk7XHJcbiAgICAgIH1cclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIGFsZXJ0KGVycm9yKTtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInotNTAgdGV4dC1wcmltYXJ5ZGFyayByb3VuZGVkLTJ4bCBtYi0zMiBmbGV4IGZsZXgtY29sXCI+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleFwiPlxyXG4gICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtbGcgZGFyazp0ZXh0LWJhY2tncm91bmRcIj5CZWNvbWUgYSBwcm9qZWN0IG1lbWJlcjwvcD5cclxuICAgICAgICA8TWFuYWdlclRpcHB5IC8+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInB5LTggcHgtOCBtdC0xIHctZnVsbCBmbGV4IGp1c3RpZnktYmV0d2VlbiBpdGVtcy1jZW50ZXIgYm9yZGVyLXItNiByb3VuZGVkLTJ4bCBiZy13aGl0ZSBkYXJrOmJnLWJhY2tncm91bmRcIj5cclxuICAgICAgICB7LyogPHA+UGFzdGUgdGhlIHByb2plY3QgY29kZSBoZXJlOjwvcD4gKi99XHJcbiAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICB2YWx1ZT17cHJvamVjdElkSW5wdXRWYWx1ZX1cclxuICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0UHJvamVjdElkSW5wdXRWYWx1ZShlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICBwbGFjZWhvbGRlcj1cInByb2plY3QgY29kZVwiXHJcbiAgICAgICAgICBjbGFzc05hbWU9XCJ3LTgvMTIgYmctd2hpdGUgdGV4dC1iYXNlIGZvY3VzOm91dGxpbmUtbm9uZSB0ZXh0LWdyYXlcIlxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgey8qIDxidXR0b25cclxuICAgICAgICAgIG9uQ2xpY2s9e29uTmV3UHJvamVjdEFkZH1cclxuICAgICAgICAgIGNsYXNzTmFtZT1cImhvdmVyOmJnLXByaW1hcnkgaG92ZXI6dGV4dC13aGl0ZSBkYXJrOmhvdmVyOmJnLXByaW1hcnlkYXJrIGRhcms6aG92ZXI6dGV4dC1iYWNrZ3JvdW5kIGZvY3VzOm91dGxpbmUtbm9uZSBib3JkZXIgYm9yZGVyLXByaW1hcnkgdGV4dC1wcmltYXJ5IHRleHQtc20gZm9udC1saWdodCBweS0yIHB4LTYgcm91bmRlZC0yeGwgZGFyazp0ZXh0LXByaW1hcnlkYXJrIGRhcms6Ym9yZGVyLXByaW1hcnlkYXJrXCJcclxuICAgICAgICA+XHJcbiAgICAgICAgICAgIEFkZCBQcm9qZWN0XHJcbiAgICAgICAgPC9idXR0b24+ICovfVxyXG4gICAgICAgIDxCb3VuY2VMb2FkZXIgY29sb3I9eycjNkM2M0ZGJ30gaGVpZ2h0PXsyMH0gd2lkdGg9ezIwfSAvPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBNZW1iZXJzQ29kZUNvbXBvbmVudDtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==