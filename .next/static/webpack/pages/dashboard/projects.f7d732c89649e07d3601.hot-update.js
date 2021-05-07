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
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
        onClick: onNewProjectAdd,
        className: "hover:bg-primary hover:text-white dark:hover:bg-primarydark dark:hover:text-background focus:outline-none border border-primary text-primary text-sm font-light py-2 px-6 rounded-2xl dark:text-primarydark dark:border-primarydark"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 60,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_spinners_BounceLoader__WEBPACK_IMPORTED_MODULE_8___default.a, {}, void 0, false, {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9kYXNoYm9hcmQvTWVtYmVyc0NvZGUuanMiXSwibmFtZXMiOlsiTWVtYmVyc0NvZGVDb21wb25lbnQiLCJ1c2VTdGF0ZSIsInByb2plY3RJZElucHV0VmFsdWUiLCJzZXRQcm9qZWN0SWRJbnB1dFZhbHVlIiwidXNlQXV0aCIsImN1cnJlbnRVc2VyIiwicm91dGVyIiwidXNlUm91dGVyIiwib25OZXdQcm9qZWN0QWRkIiwiZGIiLCJjb2xsZWN0aW9uIiwiZG9jIiwiZ2V0IiwiZGF0YSIsInByb2plY3REYXRhIiwidWlkIiwiYWxlcnQiLCJ1c2Vyc0RhdGEiLCJuYW1lIiwidXNlckNvdW50cnkiLCJmb3JtYXRlZFVzZXIiLCJuZXdVc2Vyc0FycmF5IiwicHJvamVjdFVzZXJzIiwicHVzaCIsImVtYWlsIiwic3RyaXBlUm9sZSIsInRva2VuIiwidXNlclVpZCIsInVzZXJOYW1lIiwidXBkYXRlIiwicmVsb2FkIiwiZSIsInRhcmdldCIsInZhbHVlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsb0JBQW9CLEdBQUcsU0FBdkJBLG9CQUF1QixHQUFNO0FBQUE7O0FBQUEsa0JBQ3FCQyxzREFBUSxDQUFDLEVBQUQsQ0FEN0I7QUFBQSxNQUMxQkMsbUJBRDBCO0FBQUEsTUFDTEMsc0JBREs7O0FBQUEsaUJBRVRDLDREQUFPLEVBRkU7QUFBQSxNQUV6QkMsV0FGeUIsWUFFekJBLFdBRnlCOztBQUdqQyxNQUFNQyxNQUFNLEdBQUdDLDZEQUFTLEVBQXhCOztBQUVBLE1BQU1DLGVBQWU7QUFBQSxrUkFBRztBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUdEQyxnREFBRSxDQUFDQyxVQUFILENBQWMsVUFBZCxFQUEwQkMsR0FBMUIsQ0FBOEJULG1CQUE5QixFQUFtRFUsR0FBbkQsRUFIQzs7QUFBQTtBQUdkQyxrQkFIYztBQUlkQyx5QkFKYyxHQUlBRCxJQUFJLENBQUNBLElBQUwsRUFKQTs7QUFBQSxvQkFLaEJDLFdBQVcsQ0FBQ0MsR0FBWixLQUFvQlYsV0FBVyxDQUFDVSxHQUxoQjtBQUFBO0FBQUE7QUFBQTs7QUFNbEJDLG1CQUFLLENBQUMsMkNBQUQsQ0FBTDtBQU5rQjs7QUFBQTtBQUFBO0FBQUEscUJBVU1QLGdEQUFFLENBQUNDLFVBQUgsQ0FBYyxPQUFkLEVBQXVCQyxHQUF2QixDQUEyQk4sV0FBVyxDQUFDVSxHQUF2QyxFQUE0Q0gsR0FBNUMsRUFWTjs7QUFBQTtBQVVaSyx1QkFWWTtBQUFBLGdDQVcwQkEsU0FBUyxDQUFDSixJQUFWLEVBWDFCLEVBV1ZLLElBWFUsbUJBV1ZBLElBWFUsRUFXSkMsV0FYSSxtQkFXSkEsV0FYSSxFQVdTQyxZQVhULG1CQVdTQSxZQVhULEVBWWxCOztBQUNNQywyQkFiWSxHQWFJUCxXQUFXLENBQUNRLFlBYmhCO0FBY2xCRCwyQkFBYSxDQUFDRSxJQUFkLENBQW1CO0FBQ2pCQyxxQkFBSyxFQUFFSixZQUFZLENBQUNJLEtBREg7QUFFakJDLDBCQUFVLEVBQUVMLFlBQVksQ0FBQ0ssVUFGUjtBQUdqQkMscUJBQUssRUFBRU4sWUFBWSxDQUFDTSxLQUhIO0FBSWpCQyx1QkFBTyxFQUFFUCxZQUFZLENBQUNMLEdBSkw7QUFLakJhLHdCQUFRLEVBQUVWLElBTE87QUFNakJDLDJCQUFXLEVBQVhBO0FBTmlCLGVBQW5CLEVBZGtCLENBc0JsQjs7QUF0QmtCO0FBQUEscUJBdUJaVixnREFBRSxDQUFDQyxVQUFILENBQWMsVUFBZCxFQUEwQkMsR0FBMUIsQ0FBOEJULG1CQUE5QixFQUFtRDJCLE1BQW5ELENBQTBEO0FBQUVQLDRCQUFZLEVBQUVEO0FBQWhCLGVBQTFELENBdkJZOztBQUFBO0FBd0JsQjtBQUNBZixvQkFBTSxDQUFDd0IsTUFBUDs7QUF6QmtCO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUE0QnBCZCxtQkFBSyxhQUFMO0FBNUJvQjs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFIOztBQUFBLG9CQUFmUixlQUFlO0FBQUE7QUFBQTtBQUFBLEtBQXJCOztBQWlDQSxzQkFDRTtBQUFLLGFBQVMsRUFBQyx1REFBZjtBQUFBLDRCQUNFO0FBQUssZUFBUyxFQUFDLE1BQWY7QUFBQSw4QkFDRTtBQUFHLGlCQUFTLEVBQUMsOEJBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERixlQUVFLHFFQUFDLHlGQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFERixlQUtFO0FBQUssZUFBUyxFQUFDLDRHQUFmO0FBQUEsOEJBRUU7QUFDRSxhQUFLLEVBQUVOLG1CQURUO0FBRUUsZ0JBQVEsRUFBRSxrQkFBQzZCLENBQUQ7QUFBQSxpQkFBTzVCLHNCQUFzQixDQUFDNEIsQ0FBQyxDQUFDQyxNQUFGLENBQVNDLEtBQVYsQ0FBN0I7QUFBQSxTQUZaO0FBR0UsbUJBQVcsRUFBQyxjQUhkO0FBSUUsaUJBQVMsRUFBQztBQUpaO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFGRixlQVFFO0FBQ0UsZUFBTyxFQUFFekIsZUFEWDtBQUVFLGlCQUFTLEVBQUM7QUFGWjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBUkYsZUFjRSxxRUFBQyxrRUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBZEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBTEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUF3QkQsQ0E5REQ7O0dBQU1SLG9CO1VBRW9CSSxvRCxFQUNURyxxRDs7O0tBSFhQLG9CO0FBZ0VTQSxtRkFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9kYXNoYm9hcmQvcHJvamVjdHMuZjdkNzMyYzg5NjQ5ZTA3ZDM2MDEuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xyXG5pbXBvcnQgeyBkYiB9IGZyb20gJy4uLy4uL2xpYi9maXJlYmFzZSc7XHJcbmltcG9ydCB7IHVzZUF1dGggfSBmcm9tICcuLi8uLi9saWIvbmV3QXV0aCc7XHJcbmltcG9ydCBNYW5hZ2VyVGlwcHkgZnJvbSAnLi9zdGFydHVwL3Byb2plY3QvYnVzaW5lc3MtYXBwL3RpcHB5cy9NYW5hZ2VyVGlwcHknO1xyXG5pbXBvcnQgQm91bmNlTG9hZGVyIGZyb20gJ3JlYWN0LXNwaW5uZXJzL0JvdW5jZUxvYWRlcic7XHJcblxyXG5jb25zdCBNZW1iZXJzQ29kZUNvbXBvbmVudCA9ICgpID0+IHtcclxuICBjb25zdCBbcHJvamVjdElkSW5wdXRWYWx1ZSwgc2V0UHJvamVjdElkSW5wdXRWYWx1ZV0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgY29uc3QgeyBjdXJyZW50VXNlciB9ID0gdXNlQXV0aCgpO1xyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG5cclxuICBjb25zdCBvbk5ld1Byb2plY3RBZGQgPSBhc3luYyAoKSA9PiB7XHJcbiAgICAvLyBGZXRjaCBwYXJ0aWN1bGFyIHByb2plY3RcclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCBkYi5jb2xsZWN0aW9uKCdwcm9qZWN0cycpLmRvYyhwcm9qZWN0SWRJbnB1dFZhbHVlKS5nZXQoKTtcclxuICAgICAgY29uc3QgcHJvamVjdERhdGEgPSBkYXRhLmRhdGEoKTtcclxuICAgICAgaWYgKHByb2plY3REYXRhLnVpZCA9PT0gY3VycmVudFVzZXIudWlkKSB7XHJcbiAgICAgICAgYWxlcnQoJ1lvdSBhcmUgYWxyZWFkeSBhIG1lbWJlciBvZiB0aGlzIHByb2plY3QhJyk7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIC8vIEZldGNoIHBhcnRpY3VsYXIgdXNlclxyXG4gICAgICAgIGNvbnN0IHVzZXJzRGF0YSA9IGF3YWl0IGRiLmNvbGxlY3Rpb24oJ3VzZXJzJykuZG9jKGN1cnJlbnRVc2VyLnVpZCkuZ2V0KCk7XHJcbiAgICAgICAgY29uc3QgeyBuYW1lLCB1c2VyQ291bnRyeSwgZm9ybWF0ZWRVc2VyIH0gPSB1c2Vyc0RhdGEuZGF0YSgpO1xyXG4gICAgICAgIC8vIFVwZGF0ZSBwYXJ0aWN1bGFyIHByb2plY3QgdXNlcnNcclxuICAgICAgICBjb25zdCBuZXdVc2Vyc0FycmF5ID0gcHJvamVjdERhdGEucHJvamVjdFVzZXJzO1xyXG4gICAgICAgIG5ld1VzZXJzQXJyYXkucHVzaCh7XHJcbiAgICAgICAgICBlbWFpbDogZm9ybWF0ZWRVc2VyLmVtYWlsLFxyXG4gICAgICAgICAgc3RyaXBlUm9sZTogZm9ybWF0ZWRVc2VyLnN0cmlwZVJvbGUsXHJcbiAgICAgICAgICB0b2tlbjogZm9ybWF0ZWRVc2VyLnRva2VuLFxyXG4gICAgICAgICAgdXNlclVpZDogZm9ybWF0ZWRVc2VyLnVpZCxcclxuICAgICAgICAgIHVzZXJOYW1lOiBuYW1lLFxyXG4gICAgICAgICAgdXNlckNvdW50cnksXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgLy8gVXBkYXRlIGZpcmViYXNlXHJcbiAgICAgICAgYXdhaXQgZGIuY29sbGVjdGlvbigncHJvamVjdHMnKS5kb2MocHJvamVjdElkSW5wdXRWYWx1ZSkudXBkYXRlKHsgcHJvamVjdFVzZXJzOiBuZXdVc2Vyc0FycmF5IH0pO1xyXG4gICAgICAgIC8vIFBhZ2UgcmVsb2FkXHJcbiAgICAgICAgcm91dGVyLnJlbG9hZCgpO1xyXG4gICAgICB9XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICBhbGVydChlcnJvcik7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJ6LTUwIHRleHQtcHJpbWFyeWRhcmsgcm91bmRlZC0yeGwgbWItMzIgZmxleCBmbGV4LWNvbFwiPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXhcIj5cclxuICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LWxnIGRhcms6dGV4dC1iYWNrZ3JvdW5kXCI+QmVjb21lIGEgcHJvamVjdCBtZW1iZXI8L3A+XHJcbiAgICAgICAgPE1hbmFnZXJUaXBweSAvPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJweS04IHB4LTggbXQtMSB3LWZ1bGwgZmxleCBqdXN0aWZ5LWJldHdlZW4gaXRlbXMtY2VudGVyIGJvcmRlci1yLTYgcm91bmRlZC0yeGwgYmctd2hpdGUgZGFyazpiZy1iYWNrZ3JvdW5kXCI+XHJcbiAgICAgICAgey8qIDxwPlBhc3RlIHRoZSBwcm9qZWN0IGNvZGUgaGVyZTo8L3A+ICovfVxyXG4gICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgdmFsdWU9e3Byb2plY3RJZElucHV0VmFsdWV9XHJcbiAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldFByb2plY3RJZElucHV0VmFsdWUoZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgcGxhY2Vob2xkZXI9XCJwcm9qZWN0IGNvZGVcIlxyXG4gICAgICAgICAgY2xhc3NOYW1lPVwidy04LzEyIGJnLXdoaXRlIHRleHQtYmFzZSBmb2N1czpvdXRsaW5lLW5vbmUgdGV4dC1ncmF5XCJcclxuICAgICAgICAvPlxyXG4gICAgICAgIDxidXR0b25cclxuICAgICAgICAgIG9uQ2xpY2s9e29uTmV3UHJvamVjdEFkZH1cclxuICAgICAgICAgIGNsYXNzTmFtZT1cImhvdmVyOmJnLXByaW1hcnkgaG92ZXI6dGV4dC13aGl0ZSBkYXJrOmhvdmVyOmJnLXByaW1hcnlkYXJrIGRhcms6aG92ZXI6dGV4dC1iYWNrZ3JvdW5kIGZvY3VzOm91dGxpbmUtbm9uZSBib3JkZXIgYm9yZGVyLXByaW1hcnkgdGV4dC1wcmltYXJ5IHRleHQtc20gZm9udC1saWdodCBweS0yIHB4LTYgcm91bmRlZC0yeGwgZGFyazp0ZXh0LXByaW1hcnlkYXJrIGRhcms6Ym9yZGVyLXByaW1hcnlkYXJrXCJcclxuICAgICAgICA+XHJcbiAgICAgICAgICB7LyogPEJvdW5jZUxvYWRlciAvPiAqL31cclxuICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICA8Qm91bmNlTG9hZGVyIC8+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IE1lbWJlcnNDb2RlQ29tcG9uZW50O1xyXG4iXSwic291cmNlUm9vdCI6IiJ9