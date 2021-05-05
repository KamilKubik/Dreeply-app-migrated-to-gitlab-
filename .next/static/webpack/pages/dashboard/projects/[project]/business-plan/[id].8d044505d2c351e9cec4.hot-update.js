webpackHotUpdate_N_E("pages/dashboard/projects/[project]/business-plan/[id]",{

/***/ "./pages/dashboard/projects/[project]/business-plan/[id].js":
/*!******************************************************************!*\
  !*** ./pages/dashboard/projects/[project]/business-plan/[id].js ***!
  \******************************************************************/
/*! exports provided: __N_SSG, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__N_SSG", function() { return __N_SSG; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _lib_firebase__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../lib/firebase */ "./lib/firebase.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! js-cookie */ "./node_modules/js-cookie/src/js.cookie.js");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_dashboard_startup_project_business_app_competitors_UniqueElement__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../components/dashboard/startup/project/business-app/competitors/UniqueElement */ "./components/dashboard/startup/project/business-app/competitors/UniqueElement.js");


var _jsxFileName = "C:\\off-saas\\pages\\dashboard\\projects\\[project]\\business-plan\\[id].js",
    _this = undefined,
    _s = $RefreshSig$();







var UniqueBusinessPlanPage = function UniqueBusinessPlanPage(_ref) {
  _s();

  var project = _ref.project;
  console.log('Particular project --> ', project);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    project && setSelectedProject(project[0]);
    project && setCompetitors(project[0].competitorsArray);
  }, [project]);

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(null),
      selectedProject = _useState[0],
      setSelectedProject = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([]),
      competitors = _useState2[0],
      setCompetitors = _useState2[1];

  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_3__["useRouter"])();

  if (router.isFallback) {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
        children: "Loading..."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 21,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 7
    }, _this);
  }

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: "min-h-screen w-full relative flex flex-col items-center",
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "w-full max-w-full relative mt-16 px-8 screenSmall:px-32 text-primarydark",
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
              lineNumber: 38,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("g", {
              id: "Landing_Success",
              "data-name": "Landing Success",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
                className: "cls-1",
                d: "M109.3,90.1A46,46,0,0,0,65,36V20.08c1.78-.62,7.21-2.14,12.57.23a19.33,19.33,0,0,0,14.82,0c.87-.38.61.31.61-17.93a1,1,0,0,0-1.43-.93c-.07,0-6.69,2.87-13.18,0A19.41,19.41,0,0,0,65,.93,1,1,0,0,0,63,1V36a45.86,45.86,0,0,0-28.66,10.8C16.18,40.48,4,40,.79,45.51-2.29,50.86,3.94,59.3,10,65.68A11,11,0,0,0,18,83c.81,38.41,46.08,59.2,75.66,34.21,8.53,3,29,9.15,33.55,1.31C130.39,113,123.86,102.65,109.3,90.1ZM77.59,3.31A19.39,19.39,0,0,0,91,3.83V18.68c-1.79.62-7.22,2.13-12.57-.23A19.19,19.19,0,0,0,65,17.93V3.08C66.81,2.46,72.24,1,77.59,3.31ZM65,45v-7c39.69.91,58,50.27,28.21,76.81C71.32,107,46,92.66,27.77,78.64a11,11,0,0,0-3.2-16.13A43.88,43.88,0,0,1,63,38.06V45A1,1,0,0,0,65,45ZM32.55,48.36a46.21,46.21,0,0,0-9.83,13.28,10.93,10.93,0,0,0-11.4,2.47C-8.39,43.23,5.23,39.08,32.55,48.36ZM10,72a9,9,0,1,1,9,9A9,9,0,0,1,10,72Zm10,11a11,11,0,0,0,6.34-2.82c18.45,14.21,43.45,28.35,65.05,36.22C63,139.16,20.83,119.1,20.05,83Zm105.4,34.5c-2.51,4.35-14,3.62-30-1.85a45.61,45.61,0,0,0,13.42-23.21C121.59,103.58,128,113.12,125.45,117.47Z"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 40,
                columnNumber: 17
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 39,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 31,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            className: "text-primarydark text-2xl screenLarge:text-3xl mt-2 pl-2 dark:text-background",
            children: "Business plan"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 46,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 30,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 29,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
          className: "text-secondary text-md screenLarge:text-base text-gray",
          children: "Create your business plan any way you want"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 50,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 49,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "grid grid-cols-businessSmall screenSmall:grid-cols-business screenMedium:grid-cols-businessMedium grid-flow-col gap-x-8",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "w-full h-maxcontent mt-12 pb-20",
          children: selectedSection ? (console.log('selected'), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(EditorInputElement // sectionUpdate={sectionUpdate}
          // sectionUpdate={sectionUpdate}
          , {
            sectionTitleUpdate: _this.sectionTitleUpdate,
            tableUpdate: _this.tableUpdate,
            headerUpdate: _this.headerUpdate,
            reorderElements: _this.reorderElements,
            projectId: _this.state.projectId,
            addChart: _this.addChart,
            addNewHeader: _this.addNewHeader,
            chartTypeUpdate: _this.chartTypeUpdate,
            onDatasetLabel6Update: _this.onDatasetLabel6Update,
            onDatasetLabel5Update: _this.onDatasetLabel5Update,
            onDatasetLabel4Update: _this.onDatasetLabel4Update,
            onDatasetLabel3Update: _this.onDatasetLabel3Update,
            onDatasetLabel2Update: _this.onDatasetLabel2Update,
            onDatasetLabel1Update: _this.onDatasetLabel1Update,
            onDataset6Update: _this.onDataset6Update,
            onDataset5Update: _this.onDataset5Update,
            onDataset4Update: _this.onDataset4Update,
            onDataset3Update: _this.onDataset3Update,
            onDataset2Update: _this.onDataset2Update,
            onDataset1Update: _this.onDataset1Update,
            chartLabelsUpdate: _this.chartLabelsUpdate,
            chartValueUpdate: _this.chartValueUpdate,
            addNewChart: _this.addNewChart,
            deleteParticularField: _this.deleteParticularField,
            addNewField: _this.addNewField,
            fieldUpdate: _this.fieldUpdate,
            sectionUpdate: _this.sectionUpdate,
            selectedSection: _this.state.selectedSection,
            selectedSectionIndex: _this.state.selectedSectionIndex,
            sections: _this.state.sections
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 58,
            columnNumber: 17
          }, _this)) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "w-full bg-white rounded-2xl p-8 flex justify-center items-center",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "flex flex-col justify-center items-center",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
                src: "/empty-business-plan/empty1.svg",
                height: 300,
                width: 300
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 96,
                columnNumber: 19
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                className: "mt-4",
                children: "Start creating your business plan by adding a new section!"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 97,
                columnNumber: 19
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 95,
              columnNumber: 17
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 94,
            columnNumber: 15
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 54,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 53,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 7
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 27,
    columnNumber: 5
  }, _this);
};

_s(UniqueBusinessPlanPage, "RHCwSSjXLxCr6MBQxxcST6kEdo4=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_3__["useRouter"]];
});

_c = UniqueBusinessPlanPage;
var __N_SSG = true;
/* harmony default export */ __webpack_exports__["default"] = (UniqueBusinessPlanPage);

var _c;

$RefreshReg$(_c, "UniqueBusinessPlanPage");

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvZGFzaGJvYXJkL3Byb2plY3RzL1twcm9qZWN0XS9idXNpbmVzcy1wbGFuLy5qcyJdLCJuYW1lcyI6WyJVbmlxdWVCdXNpbmVzc1BsYW5QYWdlIiwicHJvamVjdCIsImNvbnNvbGUiLCJsb2ciLCJ1c2VFZmZlY3QiLCJzZXRTZWxlY3RlZFByb2plY3QiLCJzZXRDb21wZXRpdG9ycyIsImNvbXBldGl0b3JzQXJyYXkiLCJ1c2VTdGF0ZSIsInNlbGVjdGVkUHJvamVjdCIsImNvbXBldGl0b3JzIiwicm91dGVyIiwidXNlUm91dGVyIiwiaXNGYWxsYmFjayIsInNlbGVjdGVkU2VjdGlvbiIsInNlY3Rpb25UaXRsZVVwZGF0ZSIsInRhYmxlVXBkYXRlIiwiaGVhZGVyVXBkYXRlIiwicmVvcmRlckVsZW1lbnRzIiwic3RhdGUiLCJwcm9qZWN0SWQiLCJhZGRDaGFydCIsImFkZE5ld0hlYWRlciIsImNoYXJ0VHlwZVVwZGF0ZSIsIm9uRGF0YXNldExhYmVsNlVwZGF0ZSIsIm9uRGF0YXNldExhYmVsNVVwZGF0ZSIsIm9uRGF0YXNldExhYmVsNFVwZGF0ZSIsIm9uRGF0YXNldExhYmVsM1VwZGF0ZSIsIm9uRGF0YXNldExhYmVsMlVwZGF0ZSIsIm9uRGF0YXNldExhYmVsMVVwZGF0ZSIsIm9uRGF0YXNldDZVcGRhdGUiLCJvbkRhdGFzZXQ1VXBkYXRlIiwib25EYXRhc2V0NFVwZGF0ZSIsIm9uRGF0YXNldDNVcGRhdGUiLCJvbkRhdGFzZXQyVXBkYXRlIiwib25EYXRhc2V0MVVwZGF0ZSIsImNoYXJ0TGFiZWxzVXBkYXRlIiwiY2hhcnRWYWx1ZVVwZGF0ZSIsImFkZE5ld0NoYXJ0IiwiZGVsZXRlUGFydGljdWxhckZpZWxkIiwiYWRkTmV3RmllbGQiLCJmaWVsZFVwZGF0ZSIsInNlY3Rpb25VcGRhdGUiLCJzZWxlY3RlZFNlY3Rpb25JbmRleCIsInNlY3Rpb25zIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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QVQ7QUFBMkMsc0JBQU0sRUFBRSxHQUFuRDtBQUF3RCxxQkFBSyxFQUFFO0FBQS9EO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBREYsZUFFRTtBQUFHLHlCQUFTLEVBQUMsTUFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBeENKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBekJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQXlGRCxDQTNHRDs7R0FBTTVDLHNCO1VBUVdZLHFEOzs7S0FSWFosc0I7O0FBd0pTQSxxRkFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9kYXNoYm9hcmQvcHJvamVjdHMvW3Byb2plY3RdL2J1c2luZXNzLXBsYW4vW2lkXS44ZDA0NDUwNWQyYzM1MWU5Y2VjNC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUsIHVzZVJlZiB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgZGIgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9saWIvZmlyZWJhc2UtYWRtaW4nO1xyXG5pbXBvcnQgeyBkYiBhcyBkYkNsaWVudCB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL2xpYi9maXJlYmFzZSc7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcclxuaW1wb3J0IENvb2tpZXMgZnJvbSAnanMtY29va2llJztcclxuaW1wb3J0IFVuaXF1ZUVsZW1lbnQgZnJvbSAnLi4vLi4vLi4vLi4vLi4vY29tcG9uZW50cy9kYXNoYm9hcmQvc3RhcnR1cC9wcm9qZWN0L2J1c2luZXNzLWFwcC9jb21wZXRpdG9ycy9VbmlxdWVFbGVtZW50JztcclxuXHJcbmNvbnN0IFVuaXF1ZUJ1c2luZXNzUGxhblBhZ2UgPSAoeyBwcm9qZWN0IH0pID0+IHtcclxuICBjb25zb2xlLmxvZygnUGFydGljdWxhciBwcm9qZWN0IC0tPiAnLCBwcm9qZWN0KTtcclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgcHJvamVjdCAmJiBzZXRTZWxlY3RlZFByb2plY3QocHJvamVjdFswXSk7XHJcbiAgICBwcm9qZWN0ICYmIHNldENvbXBldGl0b3JzKHByb2plY3RbMF0uY29tcGV0aXRvcnNBcnJheSk7XHJcbiAgfSwgW3Byb2plY3RdKTtcclxuICBjb25zdCBbc2VsZWN0ZWRQcm9qZWN0LCBzZXRTZWxlY3RlZFByb2plY3RdID0gdXNlU3RhdGUobnVsbCk7XHJcbiAgY29uc3QgW2NvbXBldGl0b3JzLCBzZXRDb21wZXRpdG9yc10gPSB1c2VTdGF0ZShbXSk7XHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcblxyXG4gIGlmIChyb3V0ZXIuaXNGYWxsYmFjaykge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdj5cclxuICAgICAgICA8cD5Mb2FkaW5nLi4uPC9wPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICk7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJtaW4taC1zY3JlZW4gdy1mdWxsIHJlbGF0aXZlIGZsZXggZmxleC1jb2wgaXRlbXMtY2VudGVyXCI+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsIG1heC13LWZ1bGwgcmVsYXRpdmUgbXQtMTYgcHgtOCBzY3JlZW5TbWFsbDpweC0zMiB0ZXh0LXByaW1hcnlkYXJrXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkIGdyaWQtY29scy0yIGdyaWQtcm93cy0xIGdyaWQtZmxvdy1jb2xcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXJcIj5cclxuICAgICAgICAgICAgPHN2Z1xyXG4gICAgICAgICAgICAgIGhlaWdodD1cIjMwXCJcclxuICAgICAgICAgICAgICB3aWR0aD1cIjMwXCJcclxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmaWxsLWN1cnJlbnQgdGV4dC1wcmltYXJ5IGRhcms6dGV4dC1wcmltYXJ5ZGFya1wiXHJcbiAgICAgICAgICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXHJcbiAgICAgICAgICAgICAgdmlld0JveD1cIjAgMCAxMjggMTI4XCJcclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIDx0aXRsZT5MYW5kaW5nIFN1Y2Nlc3M8L3RpdGxlPlxyXG4gICAgICAgICAgICAgIDxnIGlkPVwiTGFuZGluZ19TdWNjZXNzXCIgZGF0YS1uYW1lPVwiTGFuZGluZyBTdWNjZXNzXCI+XHJcbiAgICAgICAgICAgICAgICA8cGF0aFxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJjbHMtMVwiXHJcbiAgICAgICAgICAgICAgICAgIGQ9XCJNMTA5LjMsOTAuMUE0Niw0NiwwLDAsMCw2NSwzNlYyMC4wOGMxLjc4LS42Miw3LjIxLTIuMTQsMTIuNTcuMjNhMTkuMzMsMTkuMzMsMCwwLDAsMTQuODIsMGMuODctLjM4LjYxLjMxLjYxLTE3LjkzYTEsMSwwLDAsMC0xLjQzLS45M2MtLjA3LDAtNi42OSwyLjg3LTEzLjE4LDBBMTkuNDEsMTkuNDEsMCwwLDAsNjUsLjkzLDEsMSwwLDAsMCw2MywxVjM2YTQ1Ljg2LDQ1Ljg2LDAsMCwwLTI4LjY2LDEwLjhDMTYuMTgsNDAuNDgsNCw0MCwuNzksNDUuNTEtMi4yOSw1MC44NiwzLjk0LDU5LjMsMTAsNjUuNjhBMTEsMTEsMCwwLDAsMTgsODNjLjgxLDM4LjQxLDQ2LjA4LDU5LjIsNzUuNjYsMzQuMjEsOC41MywzLDI5LDkuMTUsMzMuNTUsMS4zMUMxMzAuMzksMTEzLDEyMy44NiwxMDIuNjUsMTA5LjMsOTAuMVpNNzcuNTksMy4zMUExOS4zOSwxOS4zOSwwLDAsMCw5MSwzLjgzVjE4LjY4Yy0xLjc5LjYyLTcuMjIsMi4xMy0xMi41Ny0uMjNBMTkuMTksMTkuMTksMCwwLDAsNjUsMTcuOTNWMy4wOEM2Ni44MSwyLjQ2LDcyLjI0LDEsNzcuNTksMy4zMVpNNjUsNDV2LTdjMzkuNjkuOTEsNTgsNTAuMjcsMjguMjEsNzYuODFDNzEuMzIsMTA3LDQ2LDkyLjY2LDI3Ljc3LDc4LjY0YTExLDExLDAsMCwwLTMuMi0xNi4xM0E0My44OCw0My44OCwwLDAsMSw2MywzOC4wNlY0NUExLDEsMCwwLDAsNjUsNDVaTTMyLjU1LDQ4LjM2YTQ2LjIxLDQ2LjIxLDAsMCwwLTkuODMsMTMuMjgsMTAuOTMsMTAuOTMsMCwwLDAtMTEuNCwyLjQ3Qy04LjM5LDQzLjIzLDUuMjMsMzkuMDgsMzIuNTUsNDguMzZaTTEwLDcyYTksOSwwLDEsMSw5LDlBOSw5LDAsMCwxLDEwLDcyWm0xMCwxMWExMSwxMSwwLDAsMCw2LjM0LTIuODJjMTguNDUsMTQuMjEsNDMuNDUsMjguMzUsNjUuMDUsMzYuMjJDNjMsMTM5LjE2LDIwLjgzLDExOS4xLDIwLjA1LDgzWm0xMDUuNCwzNC41Yy0yLjUxLDQuMzUtMTQsMy42Mi0zMC0xLjg1YTQ1LjYxLDQ1LjYxLDAsMCwwLDEzLjQyLTIzLjIxQzEyMS41OSwxMDMuNTgsMTI4LDExMy4xMiwxMjUuNDUsMTE3LjQ3WlwiXHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDwvZz5cclxuICAgICAgICAgICAgPC9zdmc+XHJcbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtcHJpbWFyeWRhcmsgdGV4dC0yeGwgc2NyZWVuTGFyZ2U6dGV4dC0zeGwgbXQtMiBwbC0yIGRhcms6dGV4dC1iYWNrZ3JvdW5kXCI+QnVzaW5lc3MgcGxhbjwvcD5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwidGV4dC1zZWNvbmRhcnkgdGV4dC1tZCBzY3JlZW5MYXJnZTp0ZXh0LWJhc2UgdGV4dC1ncmF5XCI+Q3JlYXRlIHlvdXIgYnVzaW5lc3MgcGxhbiBhbnkgd2F5IHlvdSB3YW50PC9oMT5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICB7LyogU0VDVElPTlMgKi99XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkIGdyaWQtY29scy1idXNpbmVzc1NtYWxsIHNjcmVlblNtYWxsOmdyaWQtY29scy1idXNpbmVzcyBzY3JlZW5NZWRpdW06Z3JpZC1jb2xzLWJ1c2luZXNzTWVkaXVtIGdyaWQtZmxvdy1jb2wgZ2FwLXgtOFwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGwgaC1tYXhjb250ZW50IG10LTEyIHBiLTIwXCI+XHJcbiAgICAgICAgICAgIHtzZWxlY3RlZFNlY3Rpb24gPyAoXHJcbiAgICAgICAgICAgICAgKGNvbnNvbGUubG9nKCdzZWxlY3RlZCcpLFxyXG4gICAgICAgICAgICAgIChcclxuICAgICAgICAgICAgICAgIDxFZGl0b3JJbnB1dEVsZW1lbnRcclxuICAgICAgICAgICAgICAgICAgLy8gc2VjdGlvblVwZGF0ZT17c2VjdGlvblVwZGF0ZX1cclxuICAgICAgICAgICAgICAgICAgLy8gc2VjdGlvblVwZGF0ZT17c2VjdGlvblVwZGF0ZX1cclxuICAgICAgICAgICAgICAgICAgc2VjdGlvblRpdGxlVXBkYXRlPXt0aGlzLnNlY3Rpb25UaXRsZVVwZGF0ZX1cclxuICAgICAgICAgICAgICAgICAgdGFibGVVcGRhdGU9e3RoaXMudGFibGVVcGRhdGV9XHJcbiAgICAgICAgICAgICAgICAgIGhlYWRlclVwZGF0ZT17dGhpcy5oZWFkZXJVcGRhdGV9XHJcbiAgICAgICAgICAgICAgICAgIHJlb3JkZXJFbGVtZW50cz17dGhpcy5yZW9yZGVyRWxlbWVudHN9XHJcbiAgICAgICAgICAgICAgICAgIHByb2plY3RJZD17dGhpcy5zdGF0ZS5wcm9qZWN0SWR9XHJcbiAgICAgICAgICAgICAgICAgIGFkZENoYXJ0PXt0aGlzLmFkZENoYXJ0fVxyXG4gICAgICAgICAgICAgICAgICBhZGROZXdIZWFkZXI9e3RoaXMuYWRkTmV3SGVhZGVyfVxyXG4gICAgICAgICAgICAgICAgICBjaGFydFR5cGVVcGRhdGU9e3RoaXMuY2hhcnRUeXBlVXBkYXRlfVxyXG4gICAgICAgICAgICAgICAgICBvbkRhdGFzZXRMYWJlbDZVcGRhdGU9e3RoaXMub25EYXRhc2V0TGFiZWw2VXBkYXRlfVxyXG4gICAgICAgICAgICAgICAgICBvbkRhdGFzZXRMYWJlbDVVcGRhdGU9e3RoaXMub25EYXRhc2V0TGFiZWw1VXBkYXRlfVxyXG4gICAgICAgICAgICAgICAgICBvbkRhdGFzZXRMYWJlbDRVcGRhdGU9e3RoaXMub25EYXRhc2V0TGFiZWw0VXBkYXRlfVxyXG4gICAgICAgICAgICAgICAgICBvbkRhdGFzZXRMYWJlbDNVcGRhdGU9e3RoaXMub25EYXRhc2V0TGFiZWwzVXBkYXRlfVxyXG4gICAgICAgICAgICAgICAgICBvbkRhdGFzZXRMYWJlbDJVcGRhdGU9e3RoaXMub25EYXRhc2V0TGFiZWwyVXBkYXRlfVxyXG4gICAgICAgICAgICAgICAgICBvbkRhdGFzZXRMYWJlbDFVcGRhdGU9e3RoaXMub25EYXRhc2V0TGFiZWwxVXBkYXRlfVxyXG4gICAgICAgICAgICAgICAgICBvbkRhdGFzZXQ2VXBkYXRlPXt0aGlzLm9uRGF0YXNldDZVcGRhdGV9XHJcbiAgICAgICAgICAgICAgICAgIG9uRGF0YXNldDVVcGRhdGU9e3RoaXMub25EYXRhc2V0NVVwZGF0ZX1cclxuICAgICAgICAgICAgICAgICAgb25EYXRhc2V0NFVwZGF0ZT17dGhpcy5vbkRhdGFzZXQ0VXBkYXRlfVxyXG4gICAgICAgICAgICAgICAgICBvbkRhdGFzZXQzVXBkYXRlPXt0aGlzLm9uRGF0YXNldDNVcGRhdGV9XHJcbiAgICAgICAgICAgICAgICAgIG9uRGF0YXNldDJVcGRhdGU9e3RoaXMub25EYXRhc2V0MlVwZGF0ZX1cclxuICAgICAgICAgICAgICAgICAgb25EYXRhc2V0MVVwZGF0ZT17dGhpcy5vbkRhdGFzZXQxVXBkYXRlfVxyXG4gICAgICAgICAgICAgICAgICBjaGFydExhYmVsc1VwZGF0ZT17dGhpcy5jaGFydExhYmVsc1VwZGF0ZX1cclxuICAgICAgICAgICAgICAgICAgY2hhcnRWYWx1ZVVwZGF0ZT17dGhpcy5jaGFydFZhbHVlVXBkYXRlfVxyXG4gICAgICAgICAgICAgICAgICBhZGROZXdDaGFydD17dGhpcy5hZGROZXdDaGFydH1cclxuICAgICAgICAgICAgICAgICAgZGVsZXRlUGFydGljdWxhckZpZWxkPXt0aGlzLmRlbGV0ZVBhcnRpY3VsYXJGaWVsZH1cclxuICAgICAgICAgICAgICAgICAgYWRkTmV3RmllbGQ9e3RoaXMuYWRkTmV3RmllbGR9XHJcbiAgICAgICAgICAgICAgICAgIGZpZWxkVXBkYXRlPXt0aGlzLmZpZWxkVXBkYXRlfVxyXG4gICAgICAgICAgICAgICAgICBzZWN0aW9uVXBkYXRlPXt0aGlzLnNlY3Rpb25VcGRhdGV9XHJcbiAgICAgICAgICAgICAgICAgIHNlbGVjdGVkU2VjdGlvbj17dGhpcy5zdGF0ZS5zZWxlY3RlZFNlY3Rpb259XHJcbiAgICAgICAgICAgICAgICAgIHNlbGVjdGVkU2VjdGlvbkluZGV4PXt0aGlzLnN0YXRlLnNlbGVjdGVkU2VjdGlvbkluZGV4fVxyXG4gICAgICAgICAgICAgICAgICBzZWN0aW9ucz17dGhpcy5zdGF0ZS5zZWN0aW9uc31cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgKSlcclxuICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbCBiZy13aGl0ZSByb3VuZGVkLTJ4bCBwLTggZmxleCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCIvZW1wdHktYnVzaW5lc3MtcGxhbi9lbXB0eTEuc3ZnXCIgaGVpZ2h0PXszMDB9IHdpZHRoPXszMDB9IC8+XHJcbiAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cIm10LTRcIj5TdGFydCBjcmVhdGluZyB5b3VyIGJ1c2luZXNzIHBsYW4gYnkgYWRkaW5nIGEgbmV3IHNlY3Rpb24hPC9wPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICl9XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIHsvKiA8U2VjdGlvbk1hbmFnZXJcclxuICAgICAgICAgICAgICAgICAgc2VsZWN0ZWRTZWN0aW9uPXt0aGlzLnN0YXRlLnNlbGVjdGVkU2VjdGlvbn1cclxuICAgICAgICAgICAgICAgICAgcmVvcmRlclNlY3Rpb25zPXt0aGlzLnJlb3JkZXJTZWN0aW9uc31cclxuICAgICAgICAgICAgICAgICAgc2VjdGlvbnM9e3RoaXMuc3RhdGUuc2VjdGlvbnN9XHJcbiAgICAgICAgICAgICAgICAgIHNlbGVjdGVkU2VjdGlvbkluZGV4PXt0aGlzLnN0YXRlLnNlbGVjdGVkU2VjdGlvbkluZGV4fVxyXG4gICAgICAgICAgICAgICAgICBzZWxlY3RTZWN0aW9uUGFnZT17dGhpcy5zZWxlY3RTZWN0aW9uUGFnZX1cclxuICAgICAgICAgICAgICAgICAgbmV3U2VjdGlvblBhZ2U9e3RoaXMubmV3U2VjdGlvblBhZ2V9XHJcbiAgICAgICAgICAgICAgICAgIGRlbGV0ZVNlY3Rpb25QYWdlPXt0aGlzLmRlbGV0ZVNlY3Rpb25QYWdlfVxyXG4gICAgICAgICAgICAgICAgLz4gKi99XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBnZXRTdGF0aWNQYXRocyA9IGFzeW5jICgpID0+IHtcclxuICBjb25zdCBzbmFwc2hvdCA9IGF3YWl0IGRiLmNvbGxlY3Rpb24oJ3Byb2plY3RzJykuZ2V0KCk7XHJcblxyXG4gIGNvbnN0IHByb2plY3RzID0gW107XHJcbiAgc25hcHNob3QuZm9yRWFjaCgoZG9jKSA9PiB7XHJcbiAgICBwcm9qZWN0cy5wdXNoKGRvYy5kYXRhKCkpO1xyXG4gIH0pO1xyXG5cclxuICBjb25zdCBwYXRocyA9IHByb2plY3RzLm1hcCgocHJvamVjdCkgPT4gKHtcclxuICAgIHBhcmFtczoge1xyXG4gICAgICBwcm9qZWN0OiBwcm9qZWN0LnByb2plY3ROYW1lLnRvU3RyaW5nKCksXHJcbiAgICAgIGlkOiBwcm9qZWN0LnByb2plY3RJZC50b1N0cmluZygpLFxyXG4gICAgfSxcclxuICB9KSk7XHJcblxyXG4gIHJldHVybiB7XHJcbiAgICBwYXRoczogcGF0aHMsXHJcbiAgICBmYWxsYmFjazogdHJ1ZSxcclxuICB9O1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGdldFN0YXRpY1Byb3BzID0gYXN5bmMgKHsgcGFyYW1zIH0pID0+IHtcclxuICBsZXQgcmVmID0gZGJcclxuICAgIC5jb2xsZWN0aW9uKCdwcm9qZWN0cycpXHJcbiAgICAuZG9jKHBhcmFtcy5pZClcclxuICAgIC5jb2xsZWN0aW9uKCdidXNpbmVzc1BsYW4nKVxyXG4gICAgLmRvYyhwYXJhbXMucHJvamVjdClcclxuICAgIC5jb2xsZWN0aW9uKCdpbnB1dHMnKVxyXG4gICAgLndoZXJlKCdwcm9qZWN0SWQnLCAnPT0nLCBwYXJhbXMuaWQpO1xyXG5cclxuICBjb25zdCBzbmFwc2hvdCA9IGF3YWl0IHJlZi5nZXQoKTtcclxuICBjb25zdCBwcm9qZWN0ID0gW107XHJcblxyXG4gIHNuYXBzaG90LmZvckVhY2goKGRvYykgPT4ge1xyXG4gICAgcHJvamVjdC5wdXNoKHsgLi4uZG9jLmRhdGEoKSB9KTtcclxuICB9KTtcclxuXHJcbiAgcmV0dXJuIHtcclxuICAgIHByb3BzOiB7IHByb2plY3QgfSxcclxuICAgIHJldmFsaWRhdGU6IDEsXHJcbiAgfTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFVuaXF1ZUJ1c2luZXNzUGxhblBhZ2U7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=