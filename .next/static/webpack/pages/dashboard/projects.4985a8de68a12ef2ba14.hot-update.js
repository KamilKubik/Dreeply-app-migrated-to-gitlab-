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
              alert('Your project code is invalid');
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
        size: 38
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9kYXNoYm9hcmQvTWVtYmVyc0NvZGUuanMiXSwibmFtZXMiOlsiTWVtYmVyc0NvZGVDb21wb25lbnQiLCJ1c2VTdGF0ZSIsInByb2plY3RJZElucHV0VmFsdWUiLCJzZXRQcm9qZWN0SWRJbnB1dFZhbHVlIiwicHJvamVjdExvYWRpbmciLCJzZXRQcm9qZWN0TG9hZGluZyIsInVzZUF1dGgiLCJjdXJyZW50VXNlciIsInJvdXRlciIsInVzZVJvdXRlciIsIm9uTmV3UHJvamVjdEFkZCIsImRiIiwiY29sbGVjdGlvbiIsImRvYyIsImdldCIsImRhdGEiLCJwcm9qZWN0RGF0YSIsInVpZCIsImFsZXJ0IiwidXNlcnNEYXRhIiwibmFtZSIsInVzZXJDb3VudHJ5IiwiZm9ybWF0ZWRVc2VyIiwibmV3VXNlcnNBcnJheSIsInByb2plY3RVc2VycyIsInB1c2giLCJlbWFpbCIsInN0cmlwZVJvbGUiLCJ0b2tlbiIsInVzZXJVaWQiLCJ1c2VyTmFtZSIsInVwZGF0ZSIsInJlbG9hZCIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQU1BLG9CQUFvQixHQUFHLFNBQXZCQSxvQkFBdUIsR0FBTTtBQUFBOztBQUFBLGtCQUNxQkMsc0RBQVEsQ0FBQyxFQUFELENBRDdCO0FBQUEsTUFDMUJDLG1CQUQwQjtBQUFBLE1BQ0xDLHNCQURLOztBQUFBLG1CQUVXRixzREFBUSxDQUFDLEtBQUQsQ0FGbkI7QUFBQSxNQUUxQkcsY0FGMEI7QUFBQSxNQUVWQyxpQkFGVTs7QUFBQSxpQkFHVEMsNERBQU8sRUFIRTtBQUFBLE1BR3pCQyxXQUh5QixZQUd6QkEsV0FIeUI7O0FBSWpDLE1BQU1DLE1BQU0sR0FBR0MsNkRBQVMsRUFBeEI7O0FBRUEsTUFBTUMsZUFBZTtBQUFBLGtSQUFHO0FBQUE7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QUFBO0FBQUE7QUFBQSxhQUxGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBMkJELENBcEVEOztHQUFNVixvQjtVQUdvQk0sb0QsRUFDVEcscUQ7OztLQUpYVCxvQjtBQXNFU0EsbUZBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvZGFzaGJvYXJkL3Byb2plY3RzLjQ5ODVhOGRlNjhhMTJlZjJiYTE0LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcclxuaW1wb3J0IHsgZGIgfSBmcm9tICcuLi8uLi9saWIvZmlyZWJhc2UnO1xyXG5pbXBvcnQgeyB1c2VBdXRoIH0gZnJvbSAnLi4vLi4vbGliL25ld0F1dGgnO1xyXG5pbXBvcnQgTWFuYWdlclRpcHB5IGZyb20gJy4vc3RhcnR1cC9wcm9qZWN0L2J1c2luZXNzLWFwcC90aXBweXMvTWFuYWdlclRpcHB5JztcclxuaW1wb3J0IEJvdW5jZUxvYWRlciBmcm9tICdyZWFjdC1zcGlubmVycy9Cb3VuY2VMb2FkZXInO1xyXG5cclxuY29uc3QgTWVtYmVyc0NvZGVDb21wb25lbnQgPSAoKSA9PiB7XHJcbiAgY29uc3QgW3Byb2plY3RJZElucHV0VmFsdWUsIHNldFByb2plY3RJZElucHV0VmFsdWVdID0gdXNlU3RhdGUoJycpO1xyXG4gIGNvbnN0IFtwcm9qZWN0TG9hZGluZywgc2V0UHJvamVjdExvYWRpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IHsgY3VycmVudFVzZXIgfSA9IHVzZUF1dGgoKTtcclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuXHJcbiAgY29uc3Qgb25OZXdQcm9qZWN0QWRkID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgLy8gRmV0Y2ggcGFydGljdWxhciBwcm9qZWN0XHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCBkYXRhID0gYXdhaXQgZGIuY29sbGVjdGlvbigncHJvamVjdHMnKS5kb2MocHJvamVjdElkSW5wdXRWYWx1ZSkuZ2V0KCk7XHJcbiAgICAgIGNvbnN0IHByb2plY3REYXRhID0gZGF0YS5kYXRhKCk7XHJcbiAgICAgIGlmIChwcm9qZWN0RGF0YS51aWQgPT09IGN1cnJlbnRVc2VyLnVpZCkge1xyXG4gICAgICAgIGFsZXJ0KCdZb3UgYXJlIGFscmVhZHkgYSBtZW1iZXIgb2YgdGhpcyBwcm9qZWN0IScpO1xyXG4gICAgICAgIHJldHVybjtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBzZXRQcm9qZWN0TG9hZGluZyh0cnVlKTtcclxuICAgICAgICAvLyBGZXRjaCBwYXJ0aWN1bGFyIHVzZXJcclxuICAgICAgICBjb25zdCB1c2Vyc0RhdGEgPSBhd2FpdCBkYi5jb2xsZWN0aW9uKCd1c2VycycpLmRvYyhjdXJyZW50VXNlci51aWQpLmdldCgpO1xyXG4gICAgICAgIGNvbnN0IHsgbmFtZSwgdXNlckNvdW50cnksIGZvcm1hdGVkVXNlciB9ID0gdXNlcnNEYXRhLmRhdGEoKTtcclxuICAgICAgICAvLyBVcGRhdGUgcGFydGljdWxhciBwcm9qZWN0IHVzZXJzXHJcbiAgICAgICAgY29uc3QgbmV3VXNlcnNBcnJheSA9IHByb2plY3REYXRhLnByb2plY3RVc2VycztcclxuICAgICAgICBuZXdVc2Vyc0FycmF5LnB1c2goe1xyXG4gICAgICAgICAgZW1haWw6IGZvcm1hdGVkVXNlci5lbWFpbCxcclxuICAgICAgICAgIHN0cmlwZVJvbGU6IGZvcm1hdGVkVXNlci5zdHJpcGVSb2xlLFxyXG4gICAgICAgICAgdG9rZW46IGZvcm1hdGVkVXNlci50b2tlbixcclxuICAgICAgICAgIHVzZXJVaWQ6IGZvcm1hdGVkVXNlci51aWQsXHJcbiAgICAgICAgICB1c2VyTmFtZTogbmFtZSxcclxuICAgICAgICAgIHVzZXJDb3VudHJ5LFxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIC8vIFVwZGF0ZSBmaXJlYmFzZVxyXG4gICAgICAgIGF3YWl0IGRiLmNvbGxlY3Rpb24oJ3Byb2plY3RzJykuZG9jKHByb2plY3RJZElucHV0VmFsdWUpLnVwZGF0ZSh7IHByb2plY3RVc2VyczogbmV3VXNlcnNBcnJheSB9KTtcclxuICAgICAgICAvLyBQYWdlIHJlbG9hZFxyXG4gICAgICAgIHJvdXRlci5yZWxvYWQoKTtcclxuICAgICAgICBzZXRQcm9qZWN0TG9hZGluZyhmYWxzZSk7XHJcbiAgICAgIH1cclxuICAgIH0gY2F0Y2gge1xyXG4gICAgICBhbGVydCgnWW91ciBwcm9qZWN0IGNvZGUgaXMgaW52YWxpZCcpO1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwiei01MCB0ZXh0LXByaW1hcnlkYXJrIHJvdW5kZWQtMnhsIG1iLTMyIGZsZXggZmxleC1jb2xcIj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4XCI+XHJcbiAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1sZyBkYXJrOnRleHQtYmFja2dyb3VuZFwiPkJlY29tZSBhIHByb2plY3QgbWVtYmVyPC9wPlxyXG4gICAgICAgIDxNYW5hZ2VyVGlwcHkgLz5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHktOCBweC04IG10LTEgdy1mdWxsIGZsZXgganVzdGlmeS1iZXR3ZWVuIGl0ZW1zLWNlbnRlciBib3JkZXItci02IHJvdW5kZWQtMnhsIGJnLXdoaXRlIGRhcms6YmctYmFja2dyb3VuZFwiPlxyXG4gICAgICAgIHsvKiA8cD5QYXN0ZSB0aGUgcHJvamVjdCBjb2RlIGhlcmU6PC9wPiAqL31cclxuICAgICAgICA8aW5wdXRcclxuICAgICAgICAgIHZhbHVlPXtwcm9qZWN0SWRJbnB1dFZhbHVlfVxyXG4gICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRQcm9qZWN0SWRJbnB1dFZhbHVlKGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgIHBsYWNlaG9sZGVyPVwicHJvamVjdCBjb2RlXCJcclxuICAgICAgICAgIGNsYXNzTmFtZT1cInctOC8xMiBiZy13aGl0ZSB0ZXh0LWJhc2UgZm9jdXM6b3V0bGluZS1ub25lIHRleHQtZ3JheVwiXHJcbiAgICAgICAgLz5cclxuICAgICAgICB7cHJvamVjdExvYWRpbmcgPyAoXHJcbiAgICAgICAgICA8Qm91bmNlTG9hZGVyIGNvbG9yPXsnIzZDNjNGRid9IHNpemU9ezM4fSAvPlxyXG4gICAgICAgICkgOiAoXHJcbiAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgIG9uQ2xpY2s9e29uTmV3UHJvamVjdEFkZH1cclxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiaG92ZXI6YmctcHJpbWFyeSBob3Zlcjp0ZXh0LXdoaXRlIGRhcms6aG92ZXI6YmctcHJpbWFyeWRhcmsgZGFyazpob3Zlcjp0ZXh0LWJhY2tncm91bmQgZm9jdXM6b3V0bGluZS1ub25lIGJvcmRlciBib3JkZXItcHJpbWFyeSB0ZXh0LXByaW1hcnkgdGV4dC1zbSBmb250LWxpZ2h0IHB5LTIgcHgtNiByb3VuZGVkLTJ4bCBkYXJrOnRleHQtcHJpbWFyeWRhcmsgZGFyazpib3JkZXItcHJpbWFyeWRhcmtcIlxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICBBZGQgUHJvamVjdFxyXG4gICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgKX1cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgTWVtYmVyc0NvZGVDb21wb25lbnQ7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=