webpackHotUpdate_N_E("pages/dashboard/active-plan",{

/***/ "./pages/dashboard/active-plan.js":
/*!****************************************!*\
  !*** ./pages/dashboard/active-plan.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var C_off_saas_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/regenerator */ "./node_modules/next/node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var C_off_saas_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(C_off_saas_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var C_off_saas_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var babel_plugin_superjson_next_tools__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! babel-plugin-superjson-next/tools */ "./node_modules/babel-plugin-superjson-next/tools.js");
/* harmony import */ var babel_plugin_superjson_next_tools__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(babel_plugin_superjson_next_tools__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _lib_newAuth__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../lib/newAuth */ "./lib/newAuth.js");
/* harmony import */ var _lib_firebase__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../lib/firebase */ "./lib/firebase.js");
/* harmony import */ var _components_dashboard_NavbarTemplate__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/dashboard/NavbarTemplate */ "./components/dashboard/NavbarTemplate.js");
/* harmony import */ var _lib_db__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../lib/db */ "./lib/db.js");
/* harmony import */ var _components_dashboard_Tippy__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../components/dashboard/Tippy */ "./components/dashboard/Tippy.js");
/* harmony import */ var _components_dashboard_account_ActivePlan__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../components/dashboard/account/ActivePlan */ "./components/dashboard/account/ActivePlan.js");
/* harmony import */ var _components_dashboard_account_PricingPage__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../components/dashboard/account/PricingPage */ "./components/dashboard/account/PricingPage.js");






var _jsxFileName = "C:\\off-saas\\pages\\dashboard\\active-plan.js",
    _this = undefined,
    _s = $RefreshSig$();










var AccountPage = function AccountPage() {
  _s();

  var _useAuth = Object(_lib_newAuth__WEBPACK_IMPORTED_MODULE_5__["useAuth"])(),
      currentUser = _useAuth.currentUser,
      logOut = _useAuth.logOut;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(null),
      activePlan = _useState[0],
      setActivePlan = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(''),
      planRole = _useState2[0],
      setPlanRole = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(''),
      activePlanPeriodEnd = _useState3[0],
      setActivePlanPeriodEnd = _useState3[1];

  console.log(currentUser);
  Object(react__WEBPACK_IMPORTED_MODULE_4__["useEffect"])(function () {
    // Fetch users current plan
    if (currentUser.stripeRole === 'free') {
      setActivePlan('free');
    } else {
      _lib_firebase__WEBPACK_IMPORTED_MODULE_6__["db"].collection('users').doc(currentUser.uid).collection('subscriptions').where('status', 'in', ['trialing', 'active']).onSnapshot( /*#__PURE__*/function () {
        var _ref = Object(C_off_saas_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/C_off_saas_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee(snapshot) {
          var doc, data;
          return C_off_saas_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  // In this implementation we only expect one active or trialing subscription to exist.
                  doc = snapshot.docs[0];
                  data = doc.data();
                  console.log(doc.data());
                  setActivePlan(data);
                  setPlanRole(data.role);
                  setActivePlanPeriodEnd(new Date(data.current_period_end.seconds * 1000));

                case 6:
                case "end":
                  return _context.stop();
              }
            }
          }, _callee);
        }));

        return function (_x) {
          return _ref.apply(this, arguments);
        };
      }());
    }
  }, []);
  console.log(activePlan && activePlan);
  console.log(activePlanPeriodEnd && activePlanPeriodEnd);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_dashboard_Tippy__WEBPACK_IMPORTED_MODULE_9__["default"], {
      activePlan: true,
      contentClass: "h-40 w-80 shadow-lg rounded-2xl bg-primary flex justify-center items-center",
      contentText: "This is a place where magical things happen ",
      contentText1: " Just start creating your startup and bring your idea into reality. Once you've done that, you can manage it from the main panel. Feel free to edit, save or delete your idea"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_dashboard_NavbarTemplate__WEBPACK_IMPORTED_MODULE_7__["default"], {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "min-h-screen w-full relative flex flex-col items-center text-primarydark",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "w-full max-w-mobileEnd screenSmall:max-w-screenSmall screenMediumSmall:max-w-pricingBreakpoint screenMedium:max-w-screenMedium screenLarge:max-w-screenLarge QHD:max-w-QHD mt-12 screenLarge:",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "grid grid-cols-2 grid-rows-1 grid-flow-col",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "flex items-center",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("svg", {
                height: "30",
                width: "30",
                className: "fill-current text-primary dark:text-primarydark",
                xmlns: "http://www.w3.org/2000/svg",
                viewBox: "0 0 128 128",
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("title", {
                  children: "Landing Success"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 60,
                  columnNumber: 19
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("g", {
                  id: "Landing_Success",
                  "data-name": "Landing Success",
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
                    className: "cls-1",
                    d: "M109.3,90.1A46,46,0,0,0,65,36V20.08c1.78-.62,7.21-2.14,12.57.23a19.33,19.33,0,0,0,14.82,0c.87-.38.61.31.61-17.93a1,1,0,0,0-1.43-.93c-.07,0-6.69,2.87-13.18,0A19.41,19.41,0,0,0,65,.93,1,1,0,0,0,63,1V36a45.86,45.86,0,0,0-28.66,10.8C16.18,40.48,4,40,.79,45.51-2.29,50.86,3.94,59.3,10,65.68A11,11,0,0,0,18,83c.81,38.41,46.08,59.2,75.66,34.21,8.53,3,29,9.15,33.55,1.31C130.39,113,123.86,102.65,109.3,90.1ZM77.59,3.31A19.39,19.39,0,0,0,91,3.83V18.68c-1.79.62-7.22,2.13-12.57-.23A19.19,19.19,0,0,0,65,17.93V3.08C66.81,2.46,72.24,1,77.59,3.31ZM65,45v-7c39.69.91,58,50.27,28.21,76.81C71.32,107,46,92.66,27.77,78.64a11,11,0,0,0-3.2-16.13A43.88,43.88,0,0,1,63,38.06V45A1,1,0,0,0,65,45ZM32.55,48.36a46.21,46.21,0,0,0-9.83,13.28,10.93,10.93,0,0,0-11.4,2.47C-8.39,43.23,5.23,39.08,32.55,48.36ZM10,72a9,9,0,1,1,9,9A9,9,0,0,1,10,72Zm10,11a11,11,0,0,0,6.34-2.82c18.45,14.21,43.45,28.35,65.05,36.22C63,139.16,20.83,119.1,20.05,83Zm105.4,34.5c-2.51,4.35-14,3.62-30-1.85a45.61,45.61,0,0,0,13.42-23.21C121.59,103.58,128,113.12,125.45,117.47Z"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 62,
                    columnNumber: 21
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 61,
                  columnNumber: 19
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 53,
                columnNumber: 17
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                className: "self-end text-2xl pl-2 dark:text-background relative top-1.5",
                children: "Active plan"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 68,
                columnNumber: 17
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 52,
              columnNumber: 15
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 51,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
              className: "text text-gray mt-0.5",
              children: "Manage your current plan, billing details and invoices from billing history"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 72,
              columnNumber: 15
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 71,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_dashboard_account_ActivePlan__WEBPACK_IMPORTED_MODULE_10__["default"], {
            goToBillingPortal: _lib_db__WEBPACK_IMPORTED_MODULE_8__["goToBillingPortal"],
            planRole: planRole,
            activePlan: activePlan,
            activePlanPeriodEnd: activePlanPeriodEnd
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 75,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_dashboard_account_PricingPage__WEBPACK_IMPORTED_MODULE_11__["default"], {
            currentUser: currentUser,
            goToBillingPortal: _lib_db__WEBPACK_IMPORTED_MODULE_8__["goToBillingPortal"],
            activePlan: activePlan
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 82,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 50,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 49,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 7
    }, _this)]
  }, void 0, true);
};

_s(AccountPage, "61UCk2EumLl5DoXprkWL0V7TuD8=", false, function () {
  return [_lib_newAuth__WEBPACK_IMPORTED_MODULE_5__["useAuth"]];
});

_c = AccountPage;
/* harmony default export */ __webpack_exports__["default"] = (_c2 = Object(babel_plugin_superjson_next_tools__WEBPACK_IMPORTED_MODULE_3__["withSuperJSONPage"])(AccountPage));

var _c, _c2;

$RefreshReg$(_c, "AccountPage");
$RefreshReg$(_c2, "%default%");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvZGFzaGJvYXJkL2FjdGl2ZS1wbGFuLmpzIl0sIm5hbWVzIjpbIkFjY291bnRQYWdlIiwidXNlQXV0aCIsImN1cnJlbnRVc2VyIiwibG9nT3V0IiwidXNlU3RhdGUiLCJhY3RpdmVQbGFuIiwic2V0QWN0aXZlUGxhbiIsInBsYW5Sb2xlIiwic2V0UGxhblJvbGUiLCJhY3RpdmVQbGFuUGVyaW9kRW5kIiwic2V0QWN0aXZlUGxhblBlcmlvZEVuZCIsImNvbnNvbGUiLCJsb2ciLCJ1c2VFZmZlY3QiLCJzdHJpcGVSb2xlIiwiZGIiLCJjb2xsZWN0aW9uIiwiZG9jIiwidWlkIiwid2hlcmUiLCJvblNuYXBzaG90Iiwic25hcHNob3QiLCJkb2NzIiwiZGF0YSIsInJvbGUiLCJEYXRlIiwiY3VycmVudF9wZXJpb2RfZW5kIiwic2Vjb25kcyIsImdvVG9CaWxsaW5nUG9ydGFsIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxXQUFXLEdBQUcsU0FBZEEsV0FBYyxHQUFNO0FBQUE7O0FBQUEsaUJBQ1FDLDREQUFPLEVBRGY7QUFBQSxNQUNoQkMsV0FEZ0IsWUFDaEJBLFdBRGdCO0FBQUEsTUFDSEMsTUFERyxZQUNIQSxNQURHOztBQUFBLGtCQUVZQyxzREFBUSxDQUFDLElBQUQsQ0FGcEI7QUFBQSxNQUVqQkMsVUFGaUI7QUFBQSxNQUVMQyxhQUZLOztBQUFBLG1CQUdRRixzREFBUSxDQUFDLEVBQUQsQ0FIaEI7QUFBQSxNQUdqQkcsUUFIaUI7QUFBQSxNQUdQQyxXQUhPOztBQUFBLG1CQUk4Qkosc0RBQVEsQ0FBQyxFQUFELENBSnRDO0FBQUEsTUFJakJLLG1CQUppQjtBQUFBLE1BSUlDLHNCQUpKOztBQU14QkMsU0FBTyxDQUFDQyxHQUFSLENBQVlWLFdBQVo7QUFDQVcseURBQVMsQ0FB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ZUFnQ0UscUVBQUMsa0ZBQUQ7QUFBYSx1QkFBVyxFQUFFUCxXQUExQjtBQUF1Qyw2QkFBaUIsRUFBRTBCLHlEQUExRDtBQUE2RSxzQkFBVSxFQUFFdkI7QUFBekY7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFoQ0Y7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFQRjtBQUFBLGtCQURGO0FBZ0RELENBOUVEOztHQUFNTCxXO1VBQzRCQyxvRDs7O0tBRDVCRCxXO0FBZ0ZTLGlLQUFBQSxXQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2Rhc2hib2FyZC9hY3RpdmUtcGxhbi4yNzZiMDAwNDdiYjgyNDMyNGFiZS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IHVzZUF1dGggfSBmcm9tICcuLi8uLi9saWIvbmV3QXV0aCc7XHJcbmltcG9ydCB7IGRiIH0gZnJvbSAnLi4vLi4vbGliL2ZpcmViYXNlJztcclxuaW1wb3J0IE5hdmJhclRlbXBsYXRlIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvZGFzaGJvYXJkL05hdmJhclRlbXBsYXRlJztcclxuaW1wb3J0IHsgY3JlYXRlQ2hlY2tvdXRTZXNzaW9uVGhyZWVEYXlzLCBjcmVhdGVDaGVja291dFNlc3Npb25XZWVrbHksIGdvVG9CaWxsaW5nUG9ydGFsIH0gZnJvbSAnLi4vLi4vbGliL2RiJztcclxuaW1wb3J0IFRpcHB5TW9uc3RlciBmcm9tICcuLi8uLi9jb21wb25lbnRzL2Rhc2hib2FyZC9UaXBweSc7XHJcbmltcG9ydCBBY3RpdmVQbGFuIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvZGFzaGJvYXJkL2FjY291bnQvQWN0aXZlUGxhbic7XHJcbmltcG9ydCBQcmljaW5nUGFnZSBmcm9tICcuLi8uLi9jb21wb25lbnRzL2Rhc2hib2FyZC9hY2NvdW50L1ByaWNpbmdQYWdlJztcclxuXHJcbmNvbnN0IEFjY291bnRQYWdlID0gKCkgPT4ge1xyXG4gIGNvbnN0IHsgY3VycmVudFVzZXIsIGxvZ091dCB9ID0gdXNlQXV0aCgpO1xyXG4gIGNvbnN0IFthY3RpdmVQbGFuLCBzZXRBY3RpdmVQbGFuXSA9IHVzZVN0YXRlKG51bGwpO1xyXG4gIGNvbnN0IFtwbGFuUm9sZSwgc2V0UGxhblJvbGVdID0gdXNlU3RhdGUoJycpO1xyXG4gIGNvbnN0IFthY3RpdmVQbGFuUGVyaW9kRW5kLCBzZXRBY3RpdmVQbGFuUGVyaW9kRW5kXSA9IHVzZVN0YXRlKCcnKTtcclxuXHJcbiAgY29uc29sZS5sb2coY3VycmVudFVzZXIpO1xyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAvLyBGZXRjaCB1c2VycyBjdXJyZW50IHBsYW5cclxuICAgIGlmIChjdXJyZW50VXNlci5zdHJpcGVSb2xlID09PSAnZnJlZScpIHtcclxuICAgICAgc2V0QWN0aXZlUGxhbignZnJlZScpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgZGIuY29sbGVjdGlvbigndXNlcnMnKVxyXG4gICAgICAgIC5kb2MoY3VycmVudFVzZXIudWlkKVxyXG4gICAgICAgIC5jb2xsZWN0aW9uKCdzdWJzY3JpcHRpb25zJylcclxuICAgICAgICAud2hlcmUoJ3N0YXR1cycsICdpbicsIFsndHJpYWxpbmcnLCAnYWN0aXZlJ10pXHJcbiAgICAgICAgLm9uU25hcHNob3QoYXN5bmMgKHNuYXBzaG90KSA9PiB7XHJcbiAgICAgICAgICAvLyBJbiB0aGlzIGltcGxlbWVudGF0aW9uIHdlIG9ubHkgZXhwZWN0IG9uZSBhY3RpdmUgb3IgdHJpYWxpbmcgc3Vic2NyaXB0aW9uIHRvIGV4aXN0LlxyXG4gICAgICAgICAgY29uc3QgZG9jID0gc25hcHNob3QuZG9jc1swXTtcclxuICAgICAgICAgIGNvbnN0IGRhdGEgPSBkb2MuZGF0YSgpO1xyXG4gICAgICAgICAgY29uc29sZS5sb2coZG9jLmRhdGEoKSk7XHJcbiAgICAgICAgICBzZXRBY3RpdmVQbGFuKGRhdGEpO1xyXG4gICAgICAgICAgc2V0UGxhblJvbGUoZGF0YS5yb2xlKTtcclxuICAgICAgICAgIHNldEFjdGl2ZVBsYW5QZXJpb2RFbmQobmV3IERhdGUoZGF0YS5jdXJyZW50X3BlcmlvZF9lbmQuc2Vjb25kcyAqIDEwMDApKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICB9LCBbXSk7XHJcbiAgY29uc29sZS5sb2coYWN0aXZlUGxhbiAmJiBhY3RpdmVQbGFuKTtcclxuICBjb25zb2xlLmxvZyhhY3RpdmVQbGFuUGVyaW9kRW5kICYmIGFjdGl2ZVBsYW5QZXJpb2RFbmQpO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPFRpcHB5TW9uc3RlclxyXG4gICAgICAgIGFjdGl2ZVBsYW5cclxuICAgICAgICBjb250ZW50Q2xhc3M9XCJoLTQwIHctODAgc2hhZG93LWxnIHJvdW5kZWQtMnhsIGJnLXByaW1hcnkgZmxleCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXJcIlxyXG4gICAgICAgIGNvbnRlbnRUZXh0PVwiVGhpcyBpcyBhIHBsYWNlIHdoZXJlIG1hZ2ljYWwgdGhpbmdzIGhhcHBlbiBcIlxyXG4gICAgICAgIGNvbnRlbnRUZXh0MT1cIiBKdXN0IHN0YXJ0IGNyZWF0aW5nIHlvdXIgc3RhcnR1cCBhbmQgYnJpbmcgeW91ciBpZGVhIGludG8gcmVhbGl0eS4gT25jZSB5b3UndmUgZG9uZSB0aGF0LCB5b3UgY2FuIG1hbmFnZSBpdCBmcm9tIHRoZSBtYWluIHBhbmVsLiBGZWVsIGZyZWUgdG8gZWRpdCwgc2F2ZSBvciBkZWxldGUgeW91ciBpZGVhXCJcclxuICAgICAgLz5cclxuICAgICAgPE5hdmJhclRlbXBsYXRlPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWluLWgtc2NyZWVuIHctZnVsbCByZWxhdGl2ZSBmbGV4IGZsZXgtY29sIGl0ZW1zLWNlbnRlciB0ZXh0LXByaW1hcnlkYXJrXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbCBtYXgtdy1tb2JpbGVFbmQgc2NyZWVuU21hbGw6bWF4LXctc2NyZWVuU21hbGwgc2NyZWVuTWVkaXVtU21hbGw6bWF4LXctcHJpY2luZ0JyZWFrcG9pbnQgc2NyZWVuTWVkaXVtOm1heC13LXNjcmVlbk1lZGl1bSBzY3JlZW5MYXJnZTptYXgtdy1zY3JlZW5MYXJnZSBRSEQ6bWF4LXctUUhEIG10LTEyIHNjcmVlbkxhcmdlOlwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQgZ3JpZC1jb2xzLTIgZ3JpZC1yb3dzLTEgZ3JpZC1mbG93LWNvbFwiPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgIDxzdmdcclxuICAgICAgICAgICAgICAgICAgaGVpZ2h0PVwiMzBcIlxyXG4gICAgICAgICAgICAgICAgICB3aWR0aD1cIjMwXCJcclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZmlsbC1jdXJyZW50IHRleHQtcHJpbWFyeSBkYXJrOnRleHQtcHJpbWFyeWRhcmtcIlxyXG4gICAgICAgICAgICAgICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcclxuICAgICAgICAgICAgICAgICAgdmlld0JveD1cIjAgMCAxMjggMTI4XCJcclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgPHRpdGxlPkxhbmRpbmcgU3VjY2VzczwvdGl0bGU+XHJcbiAgICAgICAgICAgICAgICAgIDxnIGlkPVwiTGFuZGluZ19TdWNjZXNzXCIgZGF0YS1uYW1lPVwiTGFuZGluZyBTdWNjZXNzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHBhdGhcclxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImNscy0xXCJcclxuICAgICAgICAgICAgICAgICAgICAgIGQ9XCJNMTA5LjMsOTAuMUE0Niw0NiwwLDAsMCw2NSwzNlYyMC4wOGMxLjc4LS42Miw3LjIxLTIuMTQsMTIuNTcuMjNhMTkuMzMsMTkuMzMsMCwwLDAsMTQuODIsMGMuODctLjM4LjYxLjMxLjYxLTE3LjkzYTEsMSwwLDAsMC0xLjQzLS45M2MtLjA3LDAtNi42OSwyLjg3LTEzLjE4LDBBMTkuNDEsMTkuNDEsMCwwLDAsNjUsLjkzLDEsMSwwLDAsMCw2MywxVjM2YTQ1Ljg2LDQ1Ljg2LDAsMCwwLTI4LjY2LDEwLjhDMTYuMTgsNDAuNDgsNCw0MCwuNzksNDUuNTEtMi4yOSw1MC44NiwzLjk0LDU5LjMsMTAsNjUuNjhBMTEsMTEsMCwwLDAsMTgsODNjLjgxLDM4LjQxLDQ2LjA4LDU5LjIsNzUuNjYsMzQuMjEsOC41MywzLDI5LDkuMTUsMzMuNTUsMS4zMUMxMzAuMzksMTEzLDEyMy44NiwxMDIuNjUsMTA5LjMsOTAuMVpNNzcuNTksMy4zMUExOS4zOSwxOS4zOSwwLDAsMCw5MSwzLjgzVjE4LjY4Yy0xLjc5LjYyLTcuMjIsMi4xMy0xMi41Ny0uMjNBMTkuMTksMTkuMTksMCwwLDAsNjUsMTcuOTNWMy4wOEM2Ni44MSwyLjQ2LDcyLjI0LDEsNzcuNTksMy4zMVpNNjUsNDV2LTdjMzkuNjkuOTEsNTgsNTAuMjcsMjguMjEsNzYuODFDNzEuMzIsMTA3LDQ2LDkyLjY2LDI3Ljc3LDc4LjY0YTExLDExLDAsMCwwLTMuMi0xNi4xM0E0My44OCw0My44OCwwLDAsMSw2MywzOC4wNlY0NUExLDEsMCwwLDAsNjUsNDVaTTMyLjU1LDQ4LjM2YTQ2LjIxLDQ2LjIxLDAsMCwwLTkuODMsMTMuMjgsMTAuOTMsMTAuOTMsMCwwLDAtMTEuNCwyLjQ3Qy04LjM5LDQzLjIzLDUuMjMsMzkuMDgsMzIuNTUsNDguMzZaTTEwLDcyYTksOSwwLDEsMSw5LDlBOSw5LDAsMCwxLDEwLDcyWm0xMCwxMWExMSwxMSwwLDAsMCw2LjM0LTIuODJjMTguNDUsMTQuMjEsNDMuNDUsMjguMzUsNjUuMDUsMzYuMjJDNjMsMTM5LjE2LDIwLjgzLDExOS4xLDIwLjA1LDgzWm0xMDUuNCwzNC41Yy0yLjUxLDQuMzUtMTQsMy42Mi0zMC0xLjg1YTQ1LjYxLDQ1LjYxLDAsMCwwLDEzLjQyLTIzLjIxQzEyMS41OSwxMDMuNTgsMTI4LDExMy4xMiwxMjUuNDUsMTE3LjQ3WlwiXHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgPC9nPlxyXG4gICAgICAgICAgICAgICAgPC9zdmc+XHJcbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJzZWxmLWVuZCB0ZXh0LTJ4bCBwbC0yIGRhcms6dGV4dC1iYWNrZ3JvdW5kIHJlbGF0aXZlIHRvcC0xLjVcIj5BY3RpdmUgcGxhbjwvcD5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dCB0ZXh0LWdyYXkgbXQtMC41XCI+TWFuYWdlIHlvdXIgY3VycmVudCBwbGFuLCBiaWxsaW5nIGRldGFpbHMgYW5kIGludm9pY2VzIGZyb20gYmlsbGluZyBoaXN0b3J5PC9wPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgey8qIFBsYW4gZGV0YWlscyAqL31cclxuICAgICAgICAgICAgPEFjdGl2ZVBsYW5cclxuICAgICAgICAgICAgICBnb1RvQmlsbGluZ1BvcnRhbD17Z29Ub0JpbGxpbmdQb3J0YWx9XHJcbiAgICAgICAgICAgICAgcGxhblJvbGU9e3BsYW5Sb2xlfVxyXG4gICAgICAgICAgICAgIGFjdGl2ZVBsYW49e2FjdGl2ZVBsYW59XHJcbiAgICAgICAgICAgICAgYWN0aXZlUGxhblBlcmlvZEVuZD17YWN0aXZlUGxhblBlcmlvZEVuZH1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgey8qIFByaWNpbmcgKi99XHJcbiAgICAgICAgICAgIDxQcmljaW5nUGFnZSBjdXJyZW50VXNlcj17Y3VycmVudFVzZXJ9IGdvVG9CaWxsaW5nUG9ydGFsPXtnb1RvQmlsbGluZ1BvcnRhbH0gYWN0aXZlUGxhbj17YWN0aXZlUGxhbn0gLz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L05hdmJhclRlbXBsYXRlPlxyXG4gICAgPC8+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEFjY291bnRQYWdlO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9