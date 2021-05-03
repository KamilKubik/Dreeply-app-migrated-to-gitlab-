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
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! js-cookie */ "./node_modules/js-cookie/src/js.cookie.js");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_5__);




var _jsxFileName = "C:\\off-saas\\pages\\dashboard\\projects\\[project]\\competitors\\[id].js",
    _this = undefined,
    _s = $RefreshSig$();





var UniqueCompetitorsPage = function UniqueCompetitorsPage(_ref) {
  _s();

  var projects = _ref.projects;
  console.log('Particular project --> ', projects);

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(null),
      selectedProject = _useState[0],
      setSelectedProject = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(),
      competitors = _useState2[0],
      setCompetitors = _useState2[1];

  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_4__["useRouter"])(); //   Selected project

  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function () {
    var uid = js_cookie__WEBPACK_IMPORTED_MODULE_5___default.a.get('uid');
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
    var userUid = js_cookie__WEBPACK_IMPORTED_MODULE_5___default.a.get('uid');

    if (userUid && router.query.project) {
      var data = dbClient.collection('projects').where('uid', '==', userUid);
      data.where('projectName', '==', router.query.project).get().then(function (querySnapshot) {
        querySnapshot.forEach( /*#__PURE__*/function () {
          var _ref2 = Object(C_off_saas_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/C_off_saas_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee(doc1) {
            return C_off_saas_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    //   setProjectId(doc1.data().projectId);
                    dbClient.collection('projects').doc(doc1.data().projectId).collection('competitors').doc(router.query.project).collection('inputs').onSnapshot(function (serverUpdate) {
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
        lineNumber: 59,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 58,
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
              lineNumber: 77,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("g", {
              id: "Landing_Success",
              "data-name": "Landing Success",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
                className: "cls-1",
                d: "M109.3,90.1A46,46,0,0,0,65,36V20.08c1.78-.62,7.21-2.14,12.57.23a19.33,19.33,0,0,0,14.82,0c.87-.38.61.31.61-17.93a1,1,0,0,0-1.43-.93c-.07,0-6.69,2.87-13.18,0A19.41,19.41,0,0,0,65,.93,1,1,0,0,0,63,1V36a45.86,45.86,0,0,0-28.66,10.8C16.18,40.48,4,40,.79,45.51-2.29,50.86,3.94,59.3,10,65.68A11,11,0,0,0,18,83c.81,38.41,46.08,59.2,75.66,34.21,8.53,3,29,9.15,33.55,1.31C130.39,113,123.86,102.65,109.3,90.1ZM77.59,3.31A19.39,19.39,0,0,0,91,3.83V18.68c-1.79.62-7.22,2.13-12.57-.23A19.19,19.19,0,0,0,65,17.93V3.08C66.81,2.46,72.24,1,77.59,3.31ZM65,45v-7c39.69.91,58,50.27,28.21,76.81C71.32,107,46,92.66,27.77,78.64a11,11,0,0,0-3.2-16.13A43.88,43.88,0,0,1,63,38.06V45A1,1,0,0,0,65,45ZM32.55,48.36a46.21,46.21,0,0,0-9.83,13.28,10.93,10.93,0,0,0-11.4,2.47C-8.39,43.23,5.23,39.08,32.55,48.36ZM10,72a9,9,0,1,1,9,9A9,9,0,0,1,10,72Zm10,11a11,11,0,0,0,6.34-2.82c18.45,14.21,43.45,28.35,65.05,36.22C63,139.16,20.83,119.1,20.05,83Zm105.4,34.5c-2.51,4.35-14,3.62-30-1.85a45.61,45.61,0,0,0,13.42-23.21C121.59,103.58,128,113.12,125.45,117.47Z"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 79,
                columnNumber: 17
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 78,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 70,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            className: "text-primarydark text-xl ssmContainer:text-2xl mt-2 pl-2 dark:text-background",
            children: "Competitors analysis"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 85,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 69,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 68,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
          className: "text-secondary text-base ssmContainer:text-md text-gray",
          children: "Manage your startup competitors"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 90,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 89,
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
            lineNumber: 94,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
            className: "cursor-pointer",
            onClick: onNewCompetitorAdd,
            src: "/competitors/add1.svg",
            height: 32,
            width: 32
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 95,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 93,
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
              lineNumber: 100,
              columnNumber: 17
            }, _this);
          })
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 97,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 92,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 7
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 65,
    columnNumber: 5
  }, _this);
};

_s(UniqueCompetitorsPage, "1QXSSnN4ZXio/TM63Ijpx5J/v2c=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_4__["useRouter"]];
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvZGFzaGJvYXJkL3Byb2plY3RzL1twcm9qZWN0XS9jb21wZXRpdG9ycy8uanMiXSwibmFtZXMiOlsiVW5pcXVlQ29tcGV0aXRvcnNQYWdlIiwicHJvamVjdHMiLCJjb25zb2xlIiwibG9nIiwidXNlU3RhdGUiLCJzZWxlY3RlZFByb2plY3QiLCJzZXRTZWxlY3RlZFByb2plY3QiLCJjb21wZXRpdG9ycyIsInNldENvbXBldGl0b3JzIiwicm91dGVyIiwidXNlUm91dGVyIiwidXNlRWZmZWN0IiwidWlkIiwiQ29va2llcyIsImdldCIsImZpbHRlcmVkQXJyYXkiLCJmaWx0ZXIiLCJwcm9qZWN0IiwibGVuZ3RoIiwibG9hZGluZ0hlbHBlciIsInNldExvYWRpbmdIZWxwZXIiLCJ1c2VyVWlkIiwicXVlcnkiLCJkYXRhIiwiZGJDbGllbnQiLCJjb2xsZWN0aW9uIiwid2hlcmUiLCJ0aGVuIiwicXVlcnlTbmFwc2hvdCIsImZvckVhY2giLCJkb2MxIiwiZG9jIiwicHJvamVjdElkIiwib25TbmFwc2hvdCIsInNlcnZlclVwZGF0ZSIsImRvY3MiLCJtYXAiLCJjb21wZXRpdG9yc0FycmF5IiwiaXNGYWxsYmFjayIsIm9uTmV3Q29tcGV0aXRvckFkZCIsImNvbXBldGl0b3IiLCJpbmRleCIsImRvY3VtZW50SWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUVBO0FBQ0E7O0FBRUEsSUFBTUEscUJBQXFCLEdBQUcsU0FBeEJBLHFCQUF3QixPQUFrQjtBQUFBOztBQUFBLE1BQWZDLFFBQWUsUUFBZkEsUUFBZTtBQUM5Q0MsU0FBTyxDQUFDQyxHQUFSLENBQVkseUJBQVosRUFBdUNGLFFBQXZDOztBQUQ4QyxrQkFFQUcsc0RBQVEsQ0FBQyxJQUFELENBRlI7QUFBQSxNQUV2Q0MsZUFGdUM7QUFBQSxNQUV0QkMsa0JBRnNCOztBQUFBLG1CQUdSRixzREFBUSxFQUhBO0FBQUEsTUFHdkNHLFdBSHVDO0FBQUEsTUFHMUJDLGNBSDBCOztBQUk5QyxNQUFNQyxNQUFNLEdBQUdDLDZEQUFTLEVBQXhCLENBSjhDLENBSzlDOztBQUNBQyx5REFBUyxDQUFDLFlBQU07QUFDZCxRQUFNQyxHQUFHLEdBQUdDLGdEQUFPLENBQUNDLEdBQVIsQ0FBWSxLQUFaLENBQVo7QUFDQSxRQUFNQyxhQUFhLEdBQUdkLFFBQVEsSUFBSUEsUUFBUSxDQUFDZSxNQUFULENBQWdCLFVBQUNDLE9BQUQ7QUFBQSxhQUFhQSxPQUFPLENBQUNMLEdBQVIsSUFBZUEsR0FBNUI7QUFBQSxLQUFoQixDQUFsQztBQUNBVixXQUFPLENBQUNDLEdBQVIsQ0FBWVksYUFBWjtBQUNBQSxpQkFBYSxJQUFJQSxhQUFhLENBQUNHLE1BQWQsSUFBd0IsQ0FBekMsSUFBOENaLGtCQUFrQixDQUFDUyxhQUFhLENBQUMsQ0FBRCxDQUFkLENBQWhFO0FBQ0QsR0FMUSxFQUtOLENBQUNkLFFBQUQsQ0FMTSxDQUFUO0FBTUFDLFNBQU8sQ0FBQ0MsR0FBUixDQUFZRSxlQUFaLEVBWjhDLENBYzlDOztBQWQ4QyxtQkFlSkQsc0RBQVEsQ0FBQyxLQUFELENBZko7QUFBQSxNQWV2Q2UsYUFmdUM7QUFBQSxNQWV4QkMsZ0JBZndCOztBQWdCOUNULHlEQUFTLENBQUMsWUFBTTtBQUNkLFFBQU1VLE9BQU8sR0FBR1IsZ0RBQU8sQ0FBQ0MsR0FBUixDQUFZLEtBQVosQ0FBaEI7O0FBQ0EsUUFBSU8sT0FBTyxJQUFJWixNQUFNLENBQUNhLEtBQVAsQ0FBYUwsT0FBNUIsRUFBcUM7QUFDbkMsVUFBTU0sSUFBSSxHQUFHQyxRQUFRLENBQUNDLFVBQVQsQ0FBb0IsVUFBcEIsRUFBZ0NDLEtBQWhDLENBQXNDLEtBQXRDLEVBQTZDLElBQTdDLEVBQW1ETCxPQUFuRCxDQUFiO0FBQ0FFLFVBQUksQ0FDREcsS0FESCxDQUNTLGFBRFQsRUFDd0IsSUFEeEIsRUFDOEJqQixNQUFNLENBQUNhLEtBQVAsQ0FBYUwsT0FEM0MsRUFFR0gsR0FGSCxHQUdHYSxJQUhILENBR1EsVUFBQ0MsYUFBRCxFQUFtQjtBQUN2QkEscUJBQWEsQ0FBQ0MsT0FBZDtBQUFBLHlSQUFzQixpQkFBT0MsSUFBUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ3BCO0FBRUFOLDRCQUFRLENBQ0xDLFVBREgsQ0FDYyxVQURkLEVBRUdNLEdBRkgsQ0FFT0QsSUFBSSxDQUFDUCxJQUFMLEdBQVlTLFNBRm5CLEVBR0dQLFVBSEgsQ0FHYyxhQUhkLEVBSUdNLEdBSkgsQ0FJT3RCLE1BQU0sQ0FBQ2EsS0FBUCxDQUFhTCxPQUpwQixFQUtHUSxVQUxILENBS2MsUUFMZCxFQU1HUSxVQU5ILENBTWMsVUFBQ0MsWUFBRCxFQUFrQjtBQUM1QkEsa0NBQVksQ0FBQ0MsSUFBYixDQUFrQkMsR0FBbEIsQ0FBc0IsVUFBQ0wsR0FBRCxFQUFTO0FBQzdCN0IsK0JBQU8sQ0FBQ0MsR0FBUixDQUFZNEIsR0FBRyxDQUFDUixJQUFKLEVBQVo7QUFDQSw0QkFBTUEsSUFBSSxHQUFHUSxHQUFHLENBQUNSLElBQUosRUFBYixDQUY2QixDQUc3Qjs7QUFDQWYsc0NBQWMsQ0FBQ2UsSUFBSSxDQUFDYyxnQkFBTixDQUFkO0FBQ0FqQix3Q0FBZ0IsQ0FBQyxLQUFELENBQWhCO0FBQ0QsdUJBTkQ7QUFPRCxxQkFkSDs7QUFIb0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FBdEI7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFtQkQsT0F2Qkg7QUF3QkQsS0ExQkQsTUEwQk87QUFDTGxCLGFBQU8sQ0FBQ0MsR0FBUixDQUFZLGdCQUFaO0FBQ0FpQixzQkFBZ0IsQ0FBQyxJQUFELENBQWhCO0FBQ0Q7QUFDRixHQWhDUSxFQWdDTixDQUFDRCxhQUFELEVBQWdCVixNQUFNLENBQUNhLEtBQVAsQ0FBYUwsT0FBN0IsQ0FoQ00sQ0FBVDs7QUFrQ0EsTUFBSVIsTUFBTSxDQUFDNkIsVUFBWCxFQUF1QjtBQUNyQix3QkFDRTtBQUFBLDZCQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURGO0FBS0Q7O0FBRUQsc0JBQ0U7QUFBSyxhQUFTLEVBQUMsMEVBQWY7QUFBQSwyQkFFRTtBQUFLLGVBQVMsRUFBQywyS0FBZjtBQUFBLDhCQUNFO0FBQUssaUJBQVMsRUFBQyxxREFBZjtBQUFBLCtCQUNFO0FBQUssbUJBQVMsRUFBQyxtQkFBZjtBQUFBLGtDQUNFO0FBQ0Usa0JBQU0sRUFBQyxJQURUO0FBRUUsaUJBQUssRUFBQyxJQUZSO0FBR0UscUJBQVMsRUFBQyxpREFIWjtBQUlFLGlCQUFLLEVBQUMsNEJBSlI7QUFLRSxtQkFBTyxFQUFDLGFBTFY7QUFBQSxvQ0FPRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFQRixlQVFFO0FBQUcsZ0JBQUUsRUFBQyxpQkFBTjtBQUF3QiwyQkFBVSxpQkFBbEM7QUFBQSxxQ0FDRTtBQUNFLHlCQUFTLEVBQUMsT0FEWjtBQUVFLGlCQUFDLEVBQUM7QUFGSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFSRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREYsZUFnQkU7QUFBRyxxQkFBUyxFQUFDLCtFQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQWhCRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREYsZUFzQkU7QUFBQSwrQkFDRTtBQUFJLG1CQUFTLEVBQUMseURBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBdEJGLGVBeUJFO0FBQUssaUJBQVMsRUFBQyx1Q0FBZjtBQUFBLGdDQUNFO0FBQUssbUJBQVMsRUFBQyxtQ0FBZjtBQUFBLGtDQUNFO0FBQUcscUJBQVMsRUFBQywrQ0FBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFERixlQUVFO0FBQUsscUJBQVMsRUFBQyxnQkFBZjtBQUFnQyxtQkFBTyxFQUFFQyxrQkFBekM7QUFBNkQsZUFBRyxFQUFDLHVCQUFqRTtBQUF5RixrQkFBTSxFQUFFLEVBQWpHO0FBQXFHLGlCQUFLLEVBQUU7QUFBNUc7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREYsZUFLRTtBQUFLLG1CQUFTLEVBQUMsNERBQWY7QUFBQSxvQkFDR2hDLFdBQVcsSUFDVkEsV0FBVyxDQUFDNkIsR0FBWixDQUFnQixVQUFDSSxVQUFELEVBQWFDLEtBQWI7QUFBQSxnQ0FDZCxxRUFBQyxVQUFEO0FBQ0UsNEJBQWMsRUFBRWpDLGNBRGxCO0FBR0Usa0JBQUksRUFBRWdDLFVBSFI7QUFJRSx1QkFBUyxFQUFFUixTQUpiO0FBS0Usd0JBQVUsRUFBRVUsVUFMZDtBQU1FLHlCQUFXLEVBQUVuQyxXQU5mO0FBT0UsbUJBQUssRUFBRWtDO0FBUFQsZUFFT0EsS0FGUDtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQURjO0FBQUEsV0FBaEI7QUFGSjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUxGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQXpCRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUFtREQsQ0E3R0Q7O0dBQU16QyxxQjtVQUlXVSxxRDs7O0tBSlhWLHFCOztBQW9KU0Esb0ZBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvZGFzaGJvYXJkL3Byb2plY3RzL1twcm9qZWN0XS9jb21wZXRpdG9ycy9baWRdLjI3ZGI4MmU3ZDJkYWZlZjFiYWE0LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSwgdXNlUmVmIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBkYiB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL2xpYi9maXJlYmFzZS1hZG1pbic7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcclxuaW1wb3J0IENvb2tpZXMgZnJvbSAnanMtY29va2llJztcclxuXHJcbmNvbnN0IFVuaXF1ZUNvbXBldGl0b3JzUGFnZSA9ICh7IHByb2plY3RzIH0pID0+IHtcclxuICBjb25zb2xlLmxvZygnUGFydGljdWxhciBwcm9qZWN0IC0tPiAnLCBwcm9qZWN0cyk7XHJcbiAgY29uc3QgW3NlbGVjdGVkUHJvamVjdCwgc2V0U2VsZWN0ZWRQcm9qZWN0XSA9IHVzZVN0YXRlKG51bGwpO1xyXG4gIGNvbnN0IFtjb21wZXRpdG9ycywgc2V0Q29tcGV0aXRvcnNdID0gdXNlU3RhdGUoKTtcclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuICAvLyAgIFNlbGVjdGVkIHByb2plY3RcclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc3QgdWlkID0gQ29va2llcy5nZXQoJ3VpZCcpO1xyXG4gICAgY29uc3QgZmlsdGVyZWRBcnJheSA9IHByb2plY3RzICYmIHByb2plY3RzLmZpbHRlcigocHJvamVjdCkgPT4gcHJvamVjdC51aWQgPT0gdWlkKTtcclxuICAgIGNvbnNvbGUubG9nKGZpbHRlcmVkQXJyYXkpO1xyXG4gICAgZmlsdGVyZWRBcnJheSAmJiBmaWx0ZXJlZEFycmF5Lmxlbmd0aCA9PSAxICYmIHNldFNlbGVjdGVkUHJvamVjdChmaWx0ZXJlZEFycmF5WzBdKTtcclxuICB9LCBbcHJvamVjdHNdKTtcclxuICBjb25zb2xlLmxvZyhzZWxlY3RlZFByb2plY3QpO1xyXG5cclxuICAvLyBDb21wZXRpdG9yc1xyXG4gIGNvbnN0IFtsb2FkaW5nSGVscGVyLCBzZXRMb2FkaW5nSGVscGVyXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc3QgdXNlclVpZCA9IENvb2tpZXMuZ2V0KCd1aWQnKTtcclxuICAgIGlmICh1c2VyVWlkICYmIHJvdXRlci5xdWVyeS5wcm9qZWN0KSB7XHJcbiAgICAgIGNvbnN0IGRhdGEgPSBkYkNsaWVudC5jb2xsZWN0aW9uKCdwcm9qZWN0cycpLndoZXJlKCd1aWQnLCAnPT0nLCB1c2VyVWlkKTtcclxuICAgICAgZGF0YVxyXG4gICAgICAgIC53aGVyZSgncHJvamVjdE5hbWUnLCAnPT0nLCByb3V0ZXIucXVlcnkucHJvamVjdClcclxuICAgICAgICAuZ2V0KClcclxuICAgICAgICAudGhlbigocXVlcnlTbmFwc2hvdCkgPT4ge1xyXG4gICAgICAgICAgcXVlcnlTbmFwc2hvdC5mb3JFYWNoKGFzeW5jIChkb2MxKSA9PiB7XHJcbiAgICAgICAgICAgIC8vICAgc2V0UHJvamVjdElkKGRvYzEuZGF0YSgpLnByb2plY3RJZCk7XHJcblxyXG4gICAgICAgICAgICBkYkNsaWVudFxyXG4gICAgICAgICAgICAgIC5jb2xsZWN0aW9uKCdwcm9qZWN0cycpXHJcbiAgICAgICAgICAgICAgLmRvYyhkb2MxLmRhdGEoKS5wcm9qZWN0SWQpXHJcbiAgICAgICAgICAgICAgLmNvbGxlY3Rpb24oJ2NvbXBldGl0b3JzJylcclxuICAgICAgICAgICAgICAuZG9jKHJvdXRlci5xdWVyeS5wcm9qZWN0KVxyXG4gICAgICAgICAgICAgIC5jb2xsZWN0aW9uKCdpbnB1dHMnKVxyXG4gICAgICAgICAgICAgIC5vblNuYXBzaG90KChzZXJ2ZXJVcGRhdGUpID0+IHtcclxuICAgICAgICAgICAgICAgIHNlcnZlclVwZGF0ZS5kb2NzLm1hcCgoZG9jKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGRvYy5kYXRhKCkpO1xyXG4gICAgICAgICAgICAgICAgICBjb25zdCBkYXRhID0gZG9jLmRhdGEoKTtcclxuICAgICAgICAgICAgICAgICAgLy8gICBzZXREb2N1bWVudElkKGRvYy5pZCk7XHJcbiAgICAgICAgICAgICAgICAgIHNldENvbXBldGl0b3JzKGRhdGEuY29tcGV0aXRvcnNBcnJheSk7XHJcbiAgICAgICAgICAgICAgICAgIHNldExvYWRpbmdIZWxwZXIoZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKCdMb2FkaW5nIGZhaWxlZCcpO1xyXG4gICAgICBzZXRMb2FkaW5nSGVscGVyKHRydWUpO1xyXG4gICAgfVxyXG4gIH0sIFtsb2FkaW5nSGVscGVyLCByb3V0ZXIucXVlcnkucHJvamVjdF0pO1xyXG5cclxuICBpZiAocm91dGVyLmlzRmFsbGJhY2spIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXY+XHJcbiAgICAgICAgPHA+TG9hZGluZy4uLjwvcD5cclxuICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwibWluLWgtc2NyZWVuIHctZnVsbCByZWxhdGl2ZSBmbGV4IGZsZXgtY29sIGl0ZW1zLWNlbnRlciB0ZXh0LXByaW1hcnlkYXJrXCI+XHJcbiAgICAgIHsvKiA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbCB4bENvbnRhaW5lcjptYXgtdy14bENvbnRhaW5lckJyZWFrIHh4bENvbnRhaW5lcjptYXgtdy14eGxDb250YWluZXJCcmVhayByZWxhdGl2ZSBtdC0xNlwiPiAqL31cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGwgbWF4LXctZnVsbCByZWxhdGl2ZSBtdC04IG1kQ29udGFpbmVyOm10LTE2IG1iLTE2IHB4LTggbWRDb250YWluZXI6cHgtMTYgbGdDb250YWluZXI6cHgtMzIgYmlnQ29udGFpbmVyOnB4LTQ4IGJpZzJDb250YWluZXI6cHgtNjQgYmlnM0NvbnRhaW5lcjpweC04MCBRSEQ6bWF4LXctUUhEXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWxhdGl2ZSBncmlkIGdyaWQtY29scy0yIGdyaWQtcm93cy0xIGdyaWQtZmxvdy1jb2xcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXJcIj5cclxuICAgICAgICAgICAgPHN2Z1xyXG4gICAgICAgICAgICAgIGhlaWdodD1cIjMwXCJcclxuICAgICAgICAgICAgICB3aWR0aD1cIjMwXCJcclxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmaWxsLWN1cnJlbnQgdGV4dC1wcmltYXJ5IGRhcms6dGV4dC1wcmltYXJ5ZGFya1wiXHJcbiAgICAgICAgICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXHJcbiAgICAgICAgICAgICAgdmlld0JveD1cIjAgMCAxMjggMTI4XCJcclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIDx0aXRsZT5MYW5kaW5nIFN1Y2Nlc3M8L3RpdGxlPlxyXG4gICAgICAgICAgICAgIDxnIGlkPVwiTGFuZGluZ19TdWNjZXNzXCIgZGF0YS1uYW1lPVwiTGFuZGluZyBTdWNjZXNzXCI+XHJcbiAgICAgICAgICAgICAgICA8cGF0aFxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJjbHMtMVwiXHJcbiAgICAgICAgICAgICAgICAgIGQ9XCJNMTA5LjMsOTAuMUE0Niw0NiwwLDAsMCw2NSwzNlYyMC4wOGMxLjc4LS42Miw3LjIxLTIuMTQsMTIuNTcuMjNhMTkuMzMsMTkuMzMsMCwwLDAsMTQuODIsMGMuODctLjM4LjYxLjMxLjYxLTE3LjkzYTEsMSwwLDAsMC0xLjQzLS45M2MtLjA3LDAtNi42OSwyLjg3LTEzLjE4LDBBMTkuNDEsMTkuNDEsMCwwLDAsNjUsLjkzLDEsMSwwLDAsMCw2MywxVjM2YTQ1Ljg2LDQ1Ljg2LDAsMCwwLTI4LjY2LDEwLjhDMTYuMTgsNDAuNDgsNCw0MCwuNzksNDUuNTEtMi4yOSw1MC44NiwzLjk0LDU5LjMsMTAsNjUuNjhBMTEsMTEsMCwwLDAsMTgsODNjLjgxLDM4LjQxLDQ2LjA4LDU5LjIsNzUuNjYsMzQuMjEsOC41MywzLDI5LDkuMTUsMzMuNTUsMS4zMUMxMzAuMzksMTEzLDEyMy44NiwxMDIuNjUsMTA5LjMsOTAuMVpNNzcuNTksMy4zMUExOS4zOSwxOS4zOSwwLDAsMCw5MSwzLjgzVjE4LjY4Yy0xLjc5LjYyLTcuMjIsMi4xMy0xMi41Ny0uMjNBMTkuMTksMTkuMTksMCwwLDAsNjUsMTcuOTNWMy4wOEM2Ni44MSwyLjQ2LDcyLjI0LDEsNzcuNTksMy4zMVpNNjUsNDV2LTdjMzkuNjkuOTEsNTgsNTAuMjcsMjguMjEsNzYuODFDNzEuMzIsMTA3LDQ2LDkyLjY2LDI3Ljc3LDc4LjY0YTExLDExLDAsMCwwLTMuMi0xNi4xM0E0My44OCw0My44OCwwLDAsMSw2MywzOC4wNlY0NUExLDEsMCwwLDAsNjUsNDVaTTMyLjU1LDQ4LjM2YTQ2LjIxLDQ2LjIxLDAsMCwwLTkuODMsMTMuMjgsMTAuOTMsMTAuOTMsMCwwLDAtMTEuNCwyLjQ3Qy04LjM5LDQzLjIzLDUuMjMsMzkuMDgsMzIuNTUsNDguMzZaTTEwLDcyYTksOSwwLDEsMSw5LDlBOSw5LDAsMCwxLDEwLDcyWm0xMCwxMWExMSwxMSwwLDAsMCw2LjM0LTIuODJjMTguNDUsMTQuMjEsNDMuNDUsMjguMzUsNjUuMDUsMzYuMjJDNjMsMTM5LjE2LDIwLjgzLDExOS4xLDIwLjA1LDgzWm0xMDUuNCwzNC41Yy0yLjUxLDQuMzUtMTQsMy42Mi0zMC0xLjg1YTQ1LjYxLDQ1LjYxLDAsMCwwLDEzLjQyLTIzLjIxQzEyMS41OSwxMDMuNTgsMTI4LDExMy4xMiwxMjUuNDUsMTE3LjQ3WlwiXHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDwvZz5cclxuICAgICAgICAgICAgPC9zdmc+XHJcbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtcHJpbWFyeWRhcmsgdGV4dC14bCBzc21Db250YWluZXI6dGV4dC0yeGwgbXQtMiBwbC0yIGRhcms6dGV4dC1iYWNrZ3JvdW5kXCI+Q29tcGV0aXRvcnMgYW5hbHlzaXM8L3A+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIHsvKiB7c2l6ZS53aWR0aCA+IDY4MCAmJiA8Q29tcGV0aXRvcnNQREYgLz59ICovfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwidGV4dC1zZWNvbmRhcnkgdGV4dC1iYXNlIHNzbUNvbnRhaW5lcjp0ZXh0LW1kIHRleHQtZ3JheVwiPk1hbmFnZSB5b3VyIHN0YXJ0dXAgY29tcGV0aXRvcnM8L2gxPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsIGJnLXdoaXRlIHJvdW5kZWQtMnhsIG10LTEyIHAtOFwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktYmV0d2VlbiBpdGVtcy1jZW50ZXJcIj5cclxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1wcmltYXJ5ZGFyayB0ZXh0LW1kIHNzbUNvbnRhaW5lcjp0ZXh0LWxnXCI+Q29tcGV0aXRvcnM8L3A+XHJcbiAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwiY3Vyc29yLXBvaW50ZXJcIiBvbkNsaWNrPXtvbk5ld0NvbXBldGl0b3JBZGR9IHNyYz1cIi9jb21wZXRpdG9ycy9hZGQxLnN2Z1wiIGhlaWdodD17MzJ9IHdpZHRoPXszMn0gLz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkIGdyaWQtY29scy0xZnJyIG5vcm1hbENvbnRhaW5lcjpncmlkLWNvbHMtMmZyIGdhcC14LTEyXCI+XHJcbiAgICAgICAgICAgIHtjb21wZXRpdG9ycyAmJlxyXG4gICAgICAgICAgICAgIGNvbXBldGl0b3JzLm1hcCgoY29tcGV0aXRvciwgaW5kZXgpID0+IChcclxuICAgICAgICAgICAgICAgIDxDb21wZXRpdG9yXHJcbiAgICAgICAgICAgICAgICAgIHNldENvbXBldGl0b3JzPXtzZXRDb21wZXRpdG9yc31cclxuICAgICAgICAgICAgICAgICAga2V5PXtpbmRleH1cclxuICAgICAgICAgICAgICAgICAgZGF0YT17Y29tcGV0aXRvcn1cclxuICAgICAgICAgICAgICAgICAgcHJvamVjdElkPXtwcm9qZWN0SWR9XHJcbiAgICAgICAgICAgICAgICAgIGRvY3VtZW50SWQ9e2RvY3VtZW50SWR9XHJcbiAgICAgICAgICAgICAgICAgIGNvbXBldGl0b3JzPXtjb21wZXRpdG9yc31cclxuICAgICAgICAgICAgICAgICAgaW5kZXg9e2luZGV4fVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0U3RhdGljUGF0aHMgPSBhc3luYyAoKSA9PiB7XHJcbiAgY29uc3Qgc25hcHNob3QgPSBhd2FpdCBkYi5jb2xsZWN0aW9uKCdwcm9qZWN0cycpLmdldCgpO1xyXG5cclxuICBjb25zdCBwcm9qZWN0cyA9IFtdO1xyXG4gIHNuYXBzaG90LmZvckVhY2goKGRvYykgPT4ge1xyXG4gICAgcHJvamVjdHMucHVzaChkb2MuZGF0YSgpKTtcclxuICB9KTtcclxuXHJcbiAgY29uc3QgcGF0aHMgPSBwcm9qZWN0cy5tYXAoKHByb2plY3QpID0+ICh7XHJcbiAgICBwYXJhbXM6IHtcclxuICAgICAgcHJvamVjdDogcHJvamVjdC5wcm9qZWN0TmFtZS50b1N0cmluZygpLFxyXG4gICAgICBpZDogcHJvamVjdC5wcm9qZWN0SWQudG9TdHJpbmcoKSxcclxuICAgIH0sXHJcbiAgfSkpO1xyXG5cclxuICByZXR1cm4ge1xyXG4gICAgcGF0aHM6IHBhdGhzLFxyXG4gICAgZmFsbGJhY2s6IHRydWUsXHJcbiAgfTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBnZXRTdGF0aWNQcm9wcyA9IGFzeW5jICh7IHBhcmFtcyB9KSA9PiB7XHJcbiAgbGV0IHJlZiA9IGRiLmNvbGxlY3Rpb24oJ3Byb2plY3RzJykud2hlcmUoJ3Byb2plY3ROYW1lJywgJz09JywgcGFyYW1zLnByb2plY3QpLndoZXJlKCdwcm9qZWN0SWQnLCAnPT0nLCBwYXJhbXMuaWQpO1xyXG5cclxuICBjb25zdCBzbmFwc2hvdCA9IGF3YWl0IHJlZi5nZXQoKTtcclxuICBjb25zdCBwcm9qZWN0cyA9IFtdO1xyXG5cclxuICBzbmFwc2hvdC5mb3JFYWNoKChkb2MpID0+IHtcclxuICAgIHByb2plY3RzLnB1c2goeyBpZDogZG9jLmlkLCAuLi5kb2MuZGF0YSgpIH0pO1xyXG4gIH0pO1xyXG5cclxuICByZXR1cm4ge1xyXG4gICAgcHJvcHM6IHsgcHJvamVjdHMgfSxcclxuICAgIHJldmFsaWRhdGU6IDEsXHJcbiAgfTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFVuaXF1ZUNvbXBldGl0b3JzUGFnZTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==