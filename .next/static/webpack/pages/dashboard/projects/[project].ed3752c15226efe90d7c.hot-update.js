webpackHotUpdate_N_E("pages/dashboard/projects/[project]",{

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js":
false,

/***/ "./pages/dashboard/projects/[project]/index.js":
/*!*****************************************************!*\
  !*** ./pages/dashboard/projects/[project]/index.js ***!
  \*****************************************************/
/*! exports provided: __N_SSG, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__N_SSG", function() { return __N_SSG; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! js-cookie */ "./node_modules/js-cookie/src/js.cookie.js");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_3__);



var _jsxFileName = "C:\\off-saas\\pages\\dashboard\\projects\\[project]\\index.js",
    _this = undefined,
    _s = $RefreshSig$();





var ProjectPage = function ProjectPage(_ref) {
  _s();

  var projects = _ref.projects;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(null),
      selectedProject = _useState[0],
      setSelectedProject = _useState[1];

  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_2__["useRouter"])();
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    var uid = js_cookie__WEBPACK_IMPORTED_MODULE_3___default.a.get('uid');
    var filteredArray = projects && projects.filter(function (project) {
      return project.uid == uid;
    });
    console.log(filteredArray);
    filteredArray && filteredArray.length == 1 && setSelectedProject(filteredArray[0]);
  }, [projects]);
  console.log(projects);
  console.log(selectedProject);

  if (router.isFallback) {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
        children: "Loading..."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 7
    }, _this);
  }

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: "w-full h-full justify-center items-center",
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
      className: "text-center",
      children: "Welcome to the project page! Project name:"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 7
    }, _this), selectedProject !== null && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
        className: "text-center",
        children: selectedProject.projectName
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 29,
        columnNumber: 11
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
        className: "text-center",
        children: selectedProject.uid
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 30,
        columnNumber: 11
      }, _this)]
    }, void 0, true)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 25,
    columnNumber: 5
  }, _this);
};

_s(ProjectPage, "MhTXJsndyRWrazwVwXotVKL7wzw=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_2__["useRouter"]];
});

_c = ProjectPage;
// export const getServerSideProps = async ({ params }) => {
//   let ref = db.collection('projects').where('projectName', '==', params.project);
//   const snapshot = await ref.get();
//   const projects = [];
//   snapshot.forEach((doc) => {
//     projects.push({ id: doc.id, ...doc.data() });
//   });
//   return {
//     props: { projects },
//   };
// };
var __N_SSG = true;
/* harmony default export */ __webpack_exports__["default"] = (ProjectPage);

var _c;

$RefreshReg$(_c, "ProjectPage");

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvZGFzaGJvYXJkL3Byb2plY3RzL1twcm9qZWN0XS9pbmRleC5qcyJdLCJuYW1lcyI6WyJQcm9qZWN0UGFnZSIsInByb2plY3RzIiwidXNlU3RhdGUiLCJzZWxlY3RlZFByb2plY3QiLCJzZXRTZWxlY3RlZFByb2plY3QiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJ1c2VFZmZlY3QiLCJ1aWQiLCJDb29raWVzIiwiZ2V0IiwiZmlsdGVyZWRBcnJheSIsImZpbHRlciIsInByb2plY3QiLCJjb25zb2xlIiwibG9nIiwibGVuZ3RoIiwiaXNGYWxsYmFjayIsInByb2plY3ROYW1lIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUVBO0FBQ0E7O0FBRUEsSUFBTUEsV0FBVyxHQUFHLFNBQWRBLFdBQWMsT0FBa0I7QUFBQTs7QUFBQSxNQUFmQyxRQUFlLFFBQWZBLFFBQWU7O0FBQUEsa0JBQ1VDLHNEQUFRLENBQUMsSUFBRCxDQURsQjtBQUFBLE1BQzdCQyxlQUQ2QjtBQUFBLE1BQ1pDLGtCQURZOztBQUVwQyxNQUFNQyxNQUFNLEdBQUdDLDZEQUFTLEVBQXhCO0FBQ0FDLHlEQUFTLENBQUMsWUFBTTtBQUNkLFFBQU1DLEdBQUcsR0FBR0MsZ0RBQU8sQ0FBQ0MsR0FBUixDQUFZLEtBQVosQ0FBWjtBQUNBLFFBQU1DLGFBQWEsR0FBR1YsUUFBUSxJQUFJQSxRQUFRLENBQUNXLE1BQVQsQ0FBZ0IsVUFBQ0MsT0FBRDtBQUFBLGFBQWFBLE9BQU8sQ0FBQ0wsR0FBUixJQUFlQSxHQUE1QjtBQUFBLEtBQWhCLENBQWxDO0FBQ0FNLFdBQU8sQ0FBQ0MsR0FBUixDQUFZSixhQUFaO0FBQ0FBLGlCQUFhLElBQUlBLGFBQWEsQ0FBQ0ssTUFBZCxJQUF3QixDQUF6QyxJQUE4Q1osa0JBQWtCLENBQUNPLGFBQWEsQ0FBQyxDQUFELENBQWQsQ0FBaEU7QUFDRCxHQUxRLEVBS04sQ0FBQ1YsUUFBRCxDQUxNLENBQVQ7QUFNQWEsU0FBTyxDQUFDQyxHQUFSLENBQVlkLFFBQVo7QUFDQWEsU0FBTyxDQUFDQyxHQUFSLENBQVlaLGVBQVo7O0FBQ0EsTUFBSUUsTUFBTSxDQUFDWSxVQUFYLEVBQXVCO0FBQ3JCLHdCQUNFO0FBQUEsNkJBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREY7QUFLRDs7QUFDRCxzQkFDRTtBQUFLLGFBQVMsRUFBQywyQ0FBZjtBQUFBLDRCQUNFO0FBQUksZUFBUyxFQUFDLGFBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFERixFQUVHZCxlQUFlLEtBQUssSUFBcEIsaUJBQ0M7QUFBQSw4QkFDRTtBQUFHLGlCQUFTLEVBQUMsYUFBYjtBQUFBLGtCQUE0QkEsZUFBZSxDQUFDZTtBQUE1QztBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREYsZUFFRTtBQUFHLGlCQUFTLEVBQUMsYUFBYjtBQUFBLGtCQUE0QmYsZUFBZSxDQUFDSztBQUE1QztBQUFBO0FBQUE7QUFBQTtBQUFBLGVBRkY7QUFBQSxvQkFISjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQVdELENBN0JEOztHQUFNUixXO1VBRVdNLHFEOzs7S0FGWE4sVztBQXNFTjtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVlQSwwRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9kYXNoYm9hcmQvcHJvamVjdHMvW3Byb2plY3RdLmVkMzc1MmMxNTIyNmVmZTkwZDdjLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgZGIgfSBmcm9tICcuLi8uLi8uLi8uLi9saWIvZmlyZWJhc2UtYWRtaW4nO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XHJcbmltcG9ydCBDb29raWVzIGZyb20gJ2pzLWNvb2tpZSc7XHJcblxyXG5jb25zdCBQcm9qZWN0UGFnZSA9ICh7IHByb2plY3RzIH0pID0+IHtcclxuICBjb25zdCBbc2VsZWN0ZWRQcm9qZWN0LCBzZXRTZWxlY3RlZFByb2plY3RdID0gdXNlU3RhdGUobnVsbCk7XHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnN0IHVpZCA9IENvb2tpZXMuZ2V0KCd1aWQnKTtcclxuICAgIGNvbnN0IGZpbHRlcmVkQXJyYXkgPSBwcm9qZWN0cyAmJiBwcm9qZWN0cy5maWx0ZXIoKHByb2plY3QpID0+IHByb2plY3QudWlkID09IHVpZCk7XHJcbiAgICBjb25zb2xlLmxvZyhmaWx0ZXJlZEFycmF5KTtcclxuICAgIGZpbHRlcmVkQXJyYXkgJiYgZmlsdGVyZWRBcnJheS5sZW5ndGggPT0gMSAmJiBzZXRTZWxlY3RlZFByb2plY3QoZmlsdGVyZWRBcnJheVswXSk7XHJcbiAgfSwgW3Byb2plY3RzXSk7XHJcbiAgY29uc29sZS5sb2cocHJvamVjdHMpO1xyXG4gIGNvbnNvbGUubG9nKHNlbGVjdGVkUHJvamVjdCk7XHJcbiAgaWYgKHJvdXRlci5pc0ZhbGxiYWNrKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2PlxyXG4gICAgICAgIDxwPkxvYWRpbmcuLi48L3A+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxuICB9XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsIGgtZnVsbCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXJcIj5cclxuICAgICAgPGgyIGNsYXNzTmFtZT1cInRleHQtY2VudGVyXCI+V2VsY29tZSB0byB0aGUgcHJvamVjdCBwYWdlISBQcm9qZWN0IG5hbWU6PC9oMj5cclxuICAgICAge3NlbGVjdGVkUHJvamVjdCAhPT0gbnVsbCAmJiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtY2VudGVyXCI+e3NlbGVjdGVkUHJvamVjdC5wcm9qZWN0TmFtZX08L3A+XHJcbiAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlclwiPntzZWxlY3RlZFByb2plY3QudWlkfTwvcD5cclxuICAgICAgICA8Lz5cclxuICAgICAgKX1cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0U3RhdGljUGF0aHMgPSBhc3luYyAoKSA9PiB7XHJcbiAgLy8gY29uc3QgeyBwcm9qZWN0cyB9ID0gYXdhaXQgZ2V0QWxsUHJvamVjdHMoKTtcclxuICBjb25zdCBzbmFwc2hvdCA9IGF3YWl0IGRiLmNvbGxlY3Rpb24oJ3Byb2plY3RzJykuZ2V0KCk7XHJcblxyXG4gIGNvbnN0IHByb2plY3RzID0gW107XHJcbiAgc25hcHNob3QuZm9yRWFjaCgoZG9jKSA9PiB7XHJcbiAgICBwcm9qZWN0cy5wdXNoKGRvYy5kYXRhKCkpO1xyXG4gIH0pO1xyXG5cclxuICBjb25zdCBwYXRocyA9IHByb2plY3RzLm1hcCgocHJvamVjdCkgPT4gKHtcclxuICAgIHBhcmFtczoge1xyXG4gICAgICBwcm9qZWN0OiBwcm9qZWN0LnByb2plY3ROYW1lLnRvU3RyaW5nKCksXHJcbiAgICB9LFxyXG4gIH0pKTtcclxuXHJcbiAgcmV0dXJuIHtcclxuICAgIHBhdGhzOiBwYXRocyxcclxuICAgIGZhbGxiYWNrOiB0cnVlLFxyXG4gIH07XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0U3RhdGljUHJvcHMgPSBhc3luYyAoeyBwYXJhbXMgfSkgPT4ge1xyXG4gIC8vIGNvbnN0IHsgcHJvamVjdHMgfSA9IGF3YWl0IGdldFBhcnRpY3VsYXJQcm9qZWN0KHBhcmFtcy53b3JrKTtcclxuICAvLyBjb25zdCB1aWQgPSBDb29raWVzLmdldCgndWlkJyk7XHJcbiAgbGV0IHJlZiA9IGRiLmNvbGxlY3Rpb24oJ3Byb2plY3RzJykud2hlcmUoJ3Byb2plY3ROYW1lJywgJz09JywgcGFyYW1zLnByb2plY3QpO1xyXG5cclxuICBjb25zdCBzbmFwc2hvdCA9IGF3YWl0IHJlZi5nZXQoKTtcclxuICBjb25zdCBwcm9qZWN0cyA9IFtdO1xyXG5cclxuICBzbmFwc2hvdC5mb3JFYWNoKChkb2MpID0+IHtcclxuICAgIHByb2plY3RzLnB1c2goeyBpZDogZG9jLmlkLCAuLi5kb2MuZGF0YSgpIH0pO1xyXG4gIH0pO1xyXG5cclxuICByZXR1cm4ge1xyXG4gICAgcHJvcHM6IHsgcHJvamVjdHMgfSxcclxuICAgIHJldmFsaWRhdGU6IDEsXHJcbiAgfTtcclxufTtcclxuXHJcbi8vIGV4cG9ydCBjb25zdCBnZXRTZXJ2ZXJTaWRlUHJvcHMgPSBhc3luYyAoeyBwYXJhbXMgfSkgPT4ge1xyXG4vLyAgIGxldCByZWYgPSBkYi5jb2xsZWN0aW9uKCdwcm9qZWN0cycpLndoZXJlKCdwcm9qZWN0TmFtZScsICc9PScsIHBhcmFtcy5wcm9qZWN0KTtcclxuXHJcbi8vICAgY29uc3Qgc25hcHNob3QgPSBhd2FpdCByZWYuZ2V0KCk7XHJcbi8vICAgY29uc3QgcHJvamVjdHMgPSBbXTtcclxuXHJcbi8vICAgc25hcHNob3QuZm9yRWFjaCgoZG9jKSA9PiB7XHJcbi8vICAgICBwcm9qZWN0cy5wdXNoKHsgaWQ6IGRvYy5pZCwgLi4uZG9jLmRhdGEoKSB9KTtcclxuLy8gICB9KTtcclxuXHJcbi8vICAgcmV0dXJuIHtcclxuLy8gICAgIHByb3BzOiB7IHByb2plY3RzIH0sXHJcbi8vICAgfTtcclxuLy8gfTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFByb2plY3RQYWdlO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9