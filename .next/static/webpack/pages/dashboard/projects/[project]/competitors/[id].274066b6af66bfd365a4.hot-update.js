webpackHotUpdate_N_E("pages/dashboard/projects/[project]/competitors/[id]",{

/***/ "./pages/dashboard/projects/[project]/competitors/[id].js":
/*!****************************************************************!*\
  !*** ./pages/dashboard/projects/[project]/competitors/[id].js ***!
  \****************************************************************/
/*! exports provided: __N_SSG, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__N_SSG", function() { return __N_SSG; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var C_off_saas_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/regenerator */ "./node_modules/next/node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var C_off_saas_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(C_off_saas_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var C_off_saas_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _lib_firebase_admin__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../lib/firebase-admin */ "./lib/firebase-admin.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! js-cookie */ "./node_modules/js-cookie/src/js.cookie.js");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_6__);




var _jsxFileName = "C:\\off-saas\\pages\\dashboard\\projects\\[project]\\competitors\\[id].js",
    _this = undefined,
    _s = $RefreshSig$();






var UniqueCompetitorsPage = function UniqueCompetitorsPage(_ref) {
  _s();

  var projects = _ref.projects;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(null),
      selectedProject = _useState[0],
      setSelectedProject = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(),
      competitors = _useState2[0],
      setCompetitors = _useState2[1];

  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_5__["useRouter"])(); //   Selected project

  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function () {
    var uid = js_cookie__WEBPACK_IMPORTED_MODULE_6___default.a.get('uid');
    var filteredArray = projects && projects.filter(function (project) {
      return project.uid == uid;
    });
    console.log(filteredArray);
    filteredArray && filteredArray.length == 1 && setSelectedProject(filteredArray[0]);
  }, [projects]);
  console.log(selectedProject); // Competitors

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(false),
      loadingHelper = _useState3[0],
      setLoadingHelper = _useState3[1];

  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function () {
    var userUid = js_cookie__WEBPACK_IMPORTED_MODULE_6___default.a.get('uid');

    if (userUid && router.query.project) {
      var data = _lib_firebase_admin__WEBPACK_IMPORTED_MODULE_4__["db"].collection('projects').where('uid', '==', userUid);
      data.where('projectName', '==', router.query.project).get().then(function (querySnapshot) {
        querySnapshot.forEach( /*#__PURE__*/function () {
          var _ref2 = Object(C_off_saas_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/C_off_saas_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee(doc1) {
            return C_off_saas_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    //   setProjectId(doc1.data().projectId);
                    _lib_firebase_admin__WEBPACK_IMPORTED_MODULE_4__["db"].collection('projects').doc(doc1.data().projectId).collection('competitors').doc(router.query.project).collection('inputs').onSnapshot(function (serverUpdate) {
                      serverUpdate.docs.map(function (doc) {
                        console.log(doc.data());
                        var data = doc.data(); //   setDocumentId(doc.id);

                        setCompetitors(data.competitorsArray);
                        setLoadingHelper(false);
                      });
                    });

                  case 1:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee);
          }));

          return function (_x) {
            return _ref2.apply(this, arguments);
          };
        }());
      });
    } else {
      console.log('Loading failed');
      setLoadingHelper(true);
    }
  }, [loadingHelper, router.query.project]);

  if (router.isFallback) {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
        children: "Loading..."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 57,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 7
    }, _this);
  }

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: "min-h-screen w-full relative flex flex-col items-center text-primarydark",
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "w-full max-w-full relative mt-8 mdContainer:mt-16 mb-16 px-8 mdContainer:px-16 lgContainer:px-32 bigContainer:px-48 big2Container:px-64 big3Container:px-80 QHD:max-w-QHD",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "relative grid grid-cols-2 grid-rows-1 grid-flow-col",
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
              lineNumber: 75,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("g", {
              id: "Landing_Success",
              "data-name": "Landing Success",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
                className: "cls-1",
                d: "M109.3,90.1A46,46,0,0,0,65,36V20.08c1.78-.62,7.21-2.14,12.57.23a19.33,19.33,0,0,0,14.82,0c.87-.38.61.31.61-17.93a1,1,0,0,0-1.43-.93c-.07,0-6.69,2.87-13.18,0A19.41,19.41,0,0,0,65,.93,1,1,0,0,0,63,1V36a45.86,45.86,0,0,0-28.66,10.8C16.18,40.48,4,40,.79,45.51-2.29,50.86,3.94,59.3,10,65.68A11,11,0,0,0,18,83c.81,38.41,46.08,59.2,75.66,34.21,8.53,3,29,9.15,33.55,1.31C130.39,113,123.86,102.65,109.3,90.1ZM77.59,3.31A19.39,19.39,0,0,0,91,3.83V18.68c-1.79.62-7.22,2.13-12.57-.23A19.19,19.19,0,0,0,65,17.93V3.08C66.81,2.46,72.24,1,77.59,3.31ZM65,45v-7c39.69.91,58,50.27,28.21,76.81C71.32,107,46,92.66,27.77,78.64a11,11,0,0,0-3.2-16.13A43.88,43.88,0,0,1,63,38.06V45A1,1,0,0,0,65,45ZM32.55,48.36a46.21,46.21,0,0,0-9.83,13.28,10.93,10.93,0,0,0-11.4,2.47C-8.39,43.23,5.23,39.08,32.55,48.36ZM10,72a9,9,0,1,1,9,9A9,9,0,0,1,10,72Zm10,11a11,11,0,0,0,6.34-2.82c18.45,14.21,43.45,28.35,65.05,36.22C63,139.16,20.83,119.1,20.05,83Zm105.4,34.5c-2.51,4.35-14,3.62-30-1.85a45.61,45.61,0,0,0,13.42-23.21C121.59,103.58,128,113.12,125.45,117.47Z"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 77,
                columnNumber: 17
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 76,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 68,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            className: "text-primarydark text-xl ssmContainer:text-2xl mt-2 pl-2 dark:text-background",
            children: "Competitors analysis"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 83,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 67,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 66,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
          className: "text-secondary text-base ssmContainer:text-md text-gray",
          children: "Manage your startup competitors"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 88,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 87,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "w-full bg-white rounded-2xl mt-12 p-8",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "flex justify-between items-center",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            className: "text-primarydark text-md ssmContainer:text-lg",
            children: "Competitors"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 92,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
            className: "cursor-pointer",
            onClick: onNewCompetitorAdd,
            src: "/competitors/add1.svg",
            height: 32,
            width: 32
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 93,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 91,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "grid grid-cols-1frr normalContainer:grid-cols-2fr gap-x-12",
          children: competitors && competitors.map(function (competitor, index) {
            return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Competitor, {
              setCompetitors: setCompetitors,
              data: competitor,
              projectId: projectId,
              documentId: documentId,
              competitors: competitors,
              index: index
            }, index, false, {
              fileName: _jsxFileName,
              lineNumber: 98,
              columnNumber: 17
            }, _this);
          })
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 95,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 90,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 7
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 63,
    columnNumber: 5
  }, _this);
};

_s(UniqueCompetitorsPage, "1QXSSnN4ZXio/TM63Ijpx5J/v2c=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_5__["useRouter"]];
});

_c = UniqueCompetitorsPage;
var __N_SSG = true;
/* harmony default export */ __webpack_exports__["default"] = (UniqueCompetitorsPage);

var _c;

$RefreshReg$(_c, "UniqueCompetitorsPage");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvZGFzaGJvYXJkL3Byb2plY3RzL1twcm9qZWN0XS9jb21wZXRpdG9ycy8uanMiXSwibmFtZXMiOlsiVW5pcXVlQ29tcGV0aXRvcnNQYWdlIiwicHJvamVjdHMiLCJ1c2VTdGF0ZSIsInNlbGVjdGVkUHJvamVjdCIsInNldFNlbGVjdGVkUHJvamVjdCIsImNvbXBldGl0b3JzIiwic2V0Q29tcGV0aXRvcnMiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJ1c2VFZmZlY3QiLCJ1aWQiLCJDb29raWVzIiwiZ2V0IiwiZmlsdGVyZWRBcnJheSIsImZpbHRlciIsInByb2plY3QiLCJjb25zb2xlIiwibG9nIiwibGVuZ3RoIiwibG9hZGluZ0hlbHBlciIsInNldExvYWRpbmdIZWxwZXIiLCJ1c2VyVWlkIiwicXVlcnkiLCJkYXRhIiwiZGIiLCJjb2xsZWN0aW9uIiwid2hlcmUiLCJ0aGVuIiwicXVlcnlTbmFwc2hvdCIsImZvckVhY2giLCJkb2MxIiwiZG9jIiwicHJvamVjdElkIiwib25TbmFwc2hvdCIsInNlcnZlclVwZGF0ZSIsImRvY3MiLCJtYXAiLCJjb21wZXRpdG9yc0FycmF5IiwiaXNGYWxsYmFjayIsIm9uTmV3Q29tcGV0aXRvckFkZCIsImNvbXBldGl0b3IiLCJpbmRleCIsImRvY3VtZW50SWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEscUJBQXFCLEdBQUcsU0FBeEJBLHFCQUF3QixPQUFrQjtBQUFBOztBQUFBLE1BQWZDLFFBQWUsUUFBZkEsUUFBZTs7QUFBQSxrQkFDQUMsc0RBQVEsQ0FBQyxJQUFELENBRFI7QUFBQSxNQUN2Q0MsZUFEdUM7QUFBQSxNQUN0QkMsa0JBRHNCOztBQUFBLG1CQUVSRixzREFBUSxFQUZBO0FBQUEsTUFFdkNHLFdBRnVDO0FBQUEsTUFFMUJDLGNBRjBCOztBQUc5QyxNQUFNQyxNQUFNLEdB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LEVBQUU7QUFBNUc7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREYsZUFLRTtBQUFLLG1CQUFTLEVBQUMsNERBQWY7QUFBQSxvQkFDR2xDLFdBQVcsSUFDVkEsV0FBVyxDQUFDK0IsR0FBWixDQUFnQixVQUFDSSxVQUFELEVBQWFDLEtBQWI7QUFBQSxnQ0FDZCxxRUFBQyxVQUFEO0FBQ0UsNEJBQWMsRUFBRW5DLGNBRGxCO0FBR0Usa0JBQUksRUFBRWtDLFVBSFI7QUFJRSx1QkFBUyxFQUFFUixTQUpiO0FBS0Usd0JBQVUsRUFBRVUsVUFMZDtBQU1FLHlCQUFXLEVBQUVyQyxXQU5mO0FBT0UsbUJBQUssRUFBRW9DO0FBUFQsZUFFT0EsS0FGUDtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQURjO0FBQUEsV0FBaEI7QUFGSjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUxGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQXpCRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUFtREQsQ0EzR0Q7O0dBQU16QyxxQjtVQUdXUSxxRDs7O0tBSFhSLHFCOztBQWtKU0Esb0ZBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvZGFzaGJvYXJkL3Byb2plY3RzL1twcm9qZWN0XS9jb21wZXRpdG9ycy9baWRdLjI3NDA2NmI2YWY2NmJmZDM2NWE0LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSwgdXNlUmVmIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBkYiB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL2xpYi9maXJlYmFzZS1hZG1pbic7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcclxuaW1wb3J0IENvb2tpZXMgZnJvbSAnanMtY29va2llJztcclxuXHJcbmNvbnN0IFVuaXF1ZUNvbXBldGl0b3JzUGFnZSA9ICh7IHByb2plY3RzIH0pID0+IHtcclxuICBjb25zdCBbc2VsZWN0ZWRQcm9qZWN0LCBzZXRTZWxlY3RlZFByb2plY3RdID0gdXNlU3RhdGUobnVsbCk7XHJcbiAgY29uc3QgW2NvbXBldGl0b3JzLCBzZXRDb21wZXRpdG9yc10gPSB1c2VTdGF0ZSgpO1xyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG4gIC8vICAgU2VsZWN0ZWQgcHJvamVjdFxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zdCB1aWQgPSBDb29raWVzLmdldCgndWlkJyk7XHJcbiAgICBjb25zdCBmaWx0ZXJlZEFycmF5ID0gcHJvamVjdHMgJiYgcHJvamVjdHMuZmlsdGVyKChwcm9qZWN0KSA9PiBwcm9qZWN0LnVpZCA9PSB1aWQpO1xyXG4gICAgY29uc29sZS5sb2coZmlsdGVyZWRBcnJheSk7XHJcbiAgICBmaWx0ZXJlZEFycmF5ICYmIGZpbHRlcmVkQXJyYXkubGVuZ3RoID09IDEgJiYgc2V0U2VsZWN0ZWRQcm9qZWN0KGZpbHRlcmVkQXJyYXlbMF0pO1xyXG4gIH0sIFtwcm9qZWN0c10pO1xyXG4gIGNvbnNvbGUubG9nKHNlbGVjdGVkUHJvamVjdCk7XHJcblxyXG4gIC8vIENvbXBldGl0b3JzXHJcbiAgY29uc3QgW2xvYWRpbmdIZWxwZXIsIHNldExvYWRpbmdIZWxwZXJdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zdCB1c2VyVWlkID0gQ29va2llcy5nZXQoJ3VpZCcpO1xyXG4gICAgaWYgKHVzZXJVaWQgJiYgcm91dGVyLnF1ZXJ5LnByb2plY3QpIHtcclxuICAgICAgY29uc3QgZGF0YSA9IGRiLmNvbGxlY3Rpb24oJ3Byb2plY3RzJykud2hlcmUoJ3VpZCcsICc9PScsIHVzZXJVaWQpO1xyXG4gICAgICBkYXRhXHJcbiAgICAgICAgLndoZXJlKCdwcm9qZWN0TmFtZScsICc9PScsIHJvdXRlci5xdWVyeS5wcm9qZWN0KVxyXG4gICAgICAgIC5nZXQoKVxyXG4gICAgICAgIC50aGVuKChxdWVyeVNuYXBzaG90KSA9PiB7XHJcbiAgICAgICAgICBxdWVyeVNuYXBzaG90LmZvckVhY2goYXN5bmMgKGRvYzEpID0+IHtcclxuICAgICAgICAgICAgLy8gICBzZXRQcm9qZWN0SWQoZG9jMS5kYXRhKCkucHJvamVjdElkKTtcclxuXHJcbiAgICAgICAgICAgIGRiLmNvbGxlY3Rpb24oJ3Byb2plY3RzJylcclxuICAgICAgICAgICAgICAuZG9jKGRvYzEuZGF0YSgpLnByb2plY3RJZClcclxuICAgICAgICAgICAgICAuY29sbGVjdGlvbignY29tcGV0aXRvcnMnKVxyXG4gICAgICAgICAgICAgIC5kb2Mocm91dGVyLnF1ZXJ5LnByb2plY3QpXHJcbiAgICAgICAgICAgICAgLmNvbGxlY3Rpb24oJ2lucHV0cycpXHJcbiAgICAgICAgICAgICAgLm9uU25hcHNob3QoKHNlcnZlclVwZGF0ZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgc2VydmVyVXBkYXRlLmRvY3MubWFwKChkb2MpID0+IHtcclxuICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZG9jLmRhdGEoKSk7XHJcbiAgICAgICAgICAgICAgICAgIGNvbnN0IGRhdGEgPSBkb2MuZGF0YSgpO1xyXG4gICAgICAgICAgICAgICAgICAvLyAgIHNldERvY3VtZW50SWQoZG9jLmlkKTtcclxuICAgICAgICAgICAgICAgICAgc2V0Q29tcGV0aXRvcnMoZGF0YS5jb21wZXRpdG9yc0FycmF5KTtcclxuICAgICAgICAgICAgICAgICAgc2V0TG9hZGluZ0hlbHBlcihmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgY29uc29sZS5sb2coJ0xvYWRpbmcgZmFpbGVkJyk7XHJcbiAgICAgIHNldExvYWRpbmdIZWxwZXIodHJ1ZSk7XHJcbiAgICB9XHJcbiAgfSwgW2xvYWRpbmdIZWxwZXIsIHJvdXRlci5xdWVyeS5wcm9qZWN0XSk7XHJcblxyXG4gIGlmIChyb3V0ZXIuaXNGYWxsYmFjaykge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdj5cclxuICAgICAgICA8cD5Mb2FkaW5nLi4uPC9wPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICk7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJtaW4taC1zY3JlZW4gdy1mdWxsIHJlbGF0aXZlIGZsZXggZmxleC1jb2wgaXRlbXMtY2VudGVyIHRleHQtcHJpbWFyeWRhcmtcIj5cclxuICAgICAgey8qIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsIHhsQ29udGFpbmVyOm1heC13LXhsQ29udGFpbmVyQnJlYWsgeHhsQ29udGFpbmVyOm1heC13LXh4bENvbnRhaW5lckJyZWFrIHJlbGF0aXZlIG10LTE2XCI+ICovfVxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbCBtYXgtdy1mdWxsIHJlbGF0aXZlIG10LTggbWRDb250YWluZXI6bXQtMTYgbWItMTYgcHgtOCBtZENvbnRhaW5lcjpweC0xNiBsZ0NvbnRhaW5lcjpweC0zMiBiaWdDb250YWluZXI6cHgtNDggYmlnMkNvbnRhaW5lcjpweC02NCBiaWczQ29udGFpbmVyOnB4LTgwIFFIRDptYXgtdy1RSERcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlbGF0aXZlIGdyaWQgZ3JpZC1jb2xzLTIgZ3JpZC1yb3dzLTEgZ3JpZC1mbG93LWNvbFwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlclwiPlxyXG4gICAgICAgICAgICA8c3ZnXHJcbiAgICAgICAgICAgICAgaGVpZ2h0PVwiMzBcIlxyXG4gICAgICAgICAgICAgIHdpZHRoPVwiMzBcIlxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZpbGwtY3VycmVudCB0ZXh0LXByaW1hcnkgZGFyazp0ZXh0LXByaW1hcnlkYXJrXCJcclxuICAgICAgICAgICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcclxuICAgICAgICAgICAgICB2aWV3Qm94PVwiMCAwIDEyOCAxMjhcIlxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgPHRpdGxlPkxhbmRpbmcgU3VjY2VzczwvdGl0bGU+XHJcbiAgICAgICAgICAgICAgPGcgaWQ9XCJMYW5kaW5nX1N1Y2Nlc3NcIiBkYXRhLW5hbWU9XCJMYW5kaW5nIFN1Y2Nlc3NcIj5cclxuICAgICAgICAgICAgICAgIDxwYXRoXHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImNscy0xXCJcclxuICAgICAgICAgICAgICAgICAgZD1cIk0xMDkuMyw5MC4xQTQ2LDQ2LDAsMCwwLDY1LDM2VjIwLjA4YzEuNzgtLjYyLDcuMjEtMi4xNCwxMi41Ny4yM2ExOS4zMywxOS4zMywwLDAsMCwxNC44MiwwYy44Ny0uMzguNjEuMzEuNjEtMTcuOTNhMSwxLDAsMCwwLTEuNDMtLjkzYy0uMDcsMC02LjY5LDIuODctMTMuMTgsMEExOS40MSwxOS40MSwwLDAsMCw2NSwuOTMsMSwxLDAsMCwwLDYzLDFWMzZhNDUuODYsNDUuODYsMCwwLDAtMjguNjYsMTAuOEMxNi4xOCw0MC40OCw0LDQwLC43OSw0NS41MS0yLjI5LDUwLjg2LDMuOTQsNTkuMywxMCw2NS42OEExMSwxMSwwLDAsMCwxOCw4M2MuODEsMzguNDEsNDYuMDgsNTkuMiw3NS42NiwzNC4yMSw4LjUzLDMsMjksOS4xNSwzMy41NSwxLjMxQzEzMC4zOSwxMTMsMTIzLjg2LDEwMi42NSwxMDkuMyw5MC4xWk03Ny41OSwzLjMxQTE5LjM5LDE5LjM5LDAsMCwwLDkxLDMuODNWMTguNjhjLTEuNzkuNjItNy4yMiwyLjEzLTEyLjU3LS4yM0ExOS4xOSwxOS4xOSwwLDAsMCw2NSwxNy45M1YzLjA4QzY2LjgxLDIuNDYsNzIuMjQsMSw3Ny41OSwzLjMxWk02NSw0NXYtN2MzOS42OS45MSw1OCw1MC4yNywyOC4yMSw3Ni44MUM3MS4zMiwxMDcsNDYsOTIuNjYsMjcuNzcsNzguNjRhMTEsMTEsMCwwLDAtMy4yLTE2LjEzQTQzLjg4LDQzLjg4LDAsMCwxLDYzLDM4LjA2VjQ1QTEsMSwwLDAsMCw2NSw0NVpNMzIuNTUsNDguMzZhNDYuMjEsNDYuMjEsMCwwLDAtOS44MywxMy4yOCwxMC45MywxMC45MywwLDAsMC0xMS40LDIuNDdDLTguMzksNDMuMjMsNS4yMywzOS4wOCwzMi41NSw0OC4zNlpNMTAsNzJhOSw5LDAsMSwxLDksOUE5LDksMCwwLDEsMTAsNzJabTEwLDExYTExLDExLDAsMCwwLDYuMzQtMi44MmMxOC40NSwxNC4yMSw0My40NSwyOC4zNSw2NS4wNSwzNi4yMkM2MywxMzkuMTYsMjAuODMsMTE5LjEsMjAuMDUsODNabTEwNS40LDM0LjVjLTIuNTEsNC4zNS0xNCwzLjYyLTMwLTEuODVhNDUuNjEsNDUuNjEsMCwwLDAsMTMuNDItMjMuMjFDMTIxLjU5LDEwMy41OCwxMjgsMTEzLjEyLDEyNS40NSwxMTcuNDdaXCJcclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPC9nPlxyXG4gICAgICAgICAgICA8L3N2Zz5cclxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1wcmltYXJ5ZGFyayB0ZXh0LXhsIHNzbUNvbnRhaW5lcjp0ZXh0LTJ4bCBtdC0yIHBsLTIgZGFyazp0ZXh0LWJhY2tncm91bmRcIj5Db21wZXRpdG9ycyBhbmFseXNpczwvcD5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgey8qIHtzaXplLndpZHRoID4gNjgwICYmIDxDb21wZXRpdG9yc1BERiAvPn0gKi99XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJ0ZXh0LXNlY29uZGFyeSB0ZXh0LWJhc2Ugc3NtQ29udGFpbmVyOnRleHQtbWQgdGV4dC1ncmF5XCI+TWFuYWdlIHlvdXIgc3RhcnR1cCBjb21wZXRpdG9yczwvaDE+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGwgYmctd2hpdGUgcm91bmRlZC0yeGwgbXQtMTIgcC04XCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1iZXR3ZWVuIGl0ZW1zLWNlbnRlclwiPlxyXG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXByaW1hcnlkYXJrIHRleHQtbWQgc3NtQ29udGFpbmVyOnRleHQtbGdcIj5Db21wZXRpdG9yczwvcD5cclxuICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJjdXJzb3ItcG9pbnRlclwiIG9uQ2xpY2s9e29uTmV3Q29tcGV0aXRvckFkZH0gc3JjPVwiL2NvbXBldGl0b3JzL2FkZDEuc3ZnXCIgaGVpZ2h0PXszMn0gd2lkdGg9ezMyfSAvPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQgZ3JpZC1jb2xzLTFmcnIgbm9ybWFsQ29udGFpbmVyOmdyaWQtY29scy0yZnIgZ2FwLXgtMTJcIj5cclxuICAgICAgICAgICAge2NvbXBldGl0b3JzICYmXHJcbiAgICAgICAgICAgICAgY29tcGV0aXRvcnMubWFwKChjb21wZXRpdG9yLCBpbmRleCkgPT4gKFxyXG4gICAgICAgICAgICAgICAgPENvbXBldGl0b3JcclxuICAgICAgICAgICAgICAgICAgc2V0Q29tcGV0aXRvcnM9e3NldENvbXBldGl0b3JzfVxyXG4gICAgICAgICAgICAgICAgICBrZXk9e2luZGV4fVxyXG4gICAgICAgICAgICAgICAgICBkYXRhPXtjb21wZXRpdG9yfVxyXG4gICAgICAgICAgICAgICAgICBwcm9qZWN0SWQ9e3Byb2plY3RJZH1cclxuICAgICAgICAgICAgICAgICAgZG9jdW1lbnRJZD17ZG9jdW1lbnRJZH1cclxuICAgICAgICAgICAgICAgICAgY29tcGV0aXRvcnM9e2NvbXBldGl0b3JzfVxyXG4gICAgICAgICAgICAgICAgICBpbmRleD17aW5kZXh9XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBnZXRTdGF0aWNQYXRocyA9IGFzeW5jICgpID0+IHtcclxuICBjb25zdCBzbmFwc2hvdCA9IGF3YWl0IGRiLmNvbGxlY3Rpb24oJ3Byb2plY3RzJykuZ2V0KCk7XHJcblxyXG4gIGNvbnN0IHByb2plY3RzID0gW107XHJcbiAgc25hcHNob3QuZm9yRWFjaCgoZG9jKSA9PiB7XHJcbiAgICBwcm9qZWN0cy5wdXNoKGRvYy5kYXRhKCkpO1xyXG4gIH0pO1xyXG5cclxuICBjb25zdCBwYXRocyA9IHByb2plY3RzLm1hcCgocHJvamVjdCkgPT4gKHtcclxuICAgIHBhcmFtczoge1xyXG4gICAgICBwcm9qZWN0OiBwcm9qZWN0LnByb2plY3ROYW1lLnRvU3RyaW5nKCksXHJcbiAgICAgIGlkOiBwcm9qZWN0LnByb2plY3RJZC50b1N0cmluZygpLFxyXG4gICAgfSxcclxuICB9KSk7XHJcblxyXG4gIHJldHVybiB7XHJcbiAgICBwYXRoczogcGF0aHMsXHJcbiAgICBmYWxsYmFjazogdHJ1ZSxcclxuICB9O1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGdldFN0YXRpY1Byb3BzID0gYXN5bmMgKHsgcGFyYW1zIH0pID0+IHtcclxuICBsZXQgcmVmID0gZGIuY29sbGVjdGlvbigncHJvamVjdHMnKS53aGVyZSgncHJvamVjdE5hbWUnLCAnPT0nLCBwYXJhbXMucHJvamVjdCk7XHJcblxyXG4gIGNvbnN0IHNuYXBzaG90ID0gYXdhaXQgcmVmLmdldCgpO1xyXG4gIGNvbnN0IHByb2plY3RzID0gW107XHJcblxyXG4gIHNuYXBzaG90LmZvckVhY2goKGRvYykgPT4ge1xyXG4gICAgcHJvamVjdHMucHVzaCh7IGlkOiBkb2MuaWQsIC4uLmRvYy5kYXRhKCkgfSk7XHJcbiAgfSk7XHJcblxyXG4gIHJldHVybiB7XHJcbiAgICBwcm9wczogeyBwcm9qZWN0cyB9LFxyXG4gICAgcmV2YWxpZGF0ZTogMSxcclxuICB9O1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgVW5pcXVlQ29tcGV0aXRvcnNQYWdlO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9