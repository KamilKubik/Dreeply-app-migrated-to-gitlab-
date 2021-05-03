webpackHotUpdate_N_E("pages/dashboard/projects/[project]/competitors",{

/***/ "./components/dashboard/startup/project/business-app/competitors/CompetitorsPage.js":
/*!******************************************************************************************!*\
  !*** ./components/dashboard/startup/project/business-app/competitors/CompetitorsPage.js ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var C_off_saas_node_modules_next_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var C_off_saas_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/regenerator */ "./node_modules/next/node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var C_off_saas_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(C_off_saas_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var C_off_saas_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_device_detect__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-device-detect */ "./node_modules/react-device-detect/main.js");
/* harmony import */ var react_device_detect__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_device_detect__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! gsap */ "./node_modules/gsap/index.js");
/* harmony import */ var _lib_firebase__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../../lib/firebase */ "./lib/firebase.js");
/* harmony import */ var _NavbarTemplate__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../NavbarTemplate */ "./components/dashboard/NavbarTemplate.js");
/* harmony import */ var _cash_flow_CashFlowPDF__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../cash-flow/CashFlowPDF */ "./components/dashboard/startup/project/business-app/cash-flow/CashFlowPDF.js");
/* harmony import */ var _Competitor__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./Competitor */ "./components/dashboard/startup/project/business-app/competitors/Competitor.js");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! js-cookie */ "./node_modules/js-cookie/src/js.cookie.js");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! next/image */ "./node_modules/next/image.js");
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! uuid */ "./node_modules/uuid/dist/esm-browser/index.js");
/* harmony import */ var _CompetitorsPDF__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./CompetitorsPDF */ "./components/dashboard/startup/project/business-app/competitors/CompetitorsPDF.js");
/* harmony import */ var _utils_useWindowSize__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../../../../../utils/useWindowSize */ "./utils/useWindowSize.js");
/* harmony import */ var _ExitComponent__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../../ExitComponent */ "./components/dashboard/startup/ExitComponent.js");
/* harmony import */ var _Tippy__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../../../Tippy */ "./components/dashboard/Tippy.js");






var _jsxFileName = "C:\\off-saas\\components\\dashboard\\startup\\project\\business-app\\competitors\\CompetitorsPage.js",
    _this = undefined,
    _s = $RefreshSig$();












 // Drag & drop
// Mobile friendly





var CompetitorsPage = function CompetitorsPage() {
  _s();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(''),
      projectId = _useState[0],
      setProjectId = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(''),
      documentId = _useState2[0],
      setDocumentId = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(),
      competitors = _useState3[0],
      setCompetitors = _useState3[1];

  var size = Object(_utils_useWindowSize__WEBPACK_IMPORTED_MODULE_16__["useWindowSize"])();

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(false),
      loadingHelper = _useState4[0],
      setLoadingHelper = _useState4[1];

  Object(react__WEBPACK_IMPORTED_MODULE_4__["useEffect"])( /*#__PURE__*/Object(C_off_saas_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__["default"])( /*#__PURE__*/C_off_saas_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.mark(function _callee2() {
    var userUid, data;
    return C_off_saas_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            userUid = js_cookie__WEBPACK_IMPORTED_MODULE_11___default.a.get('uid'); // console.log(Router.query.project);

            console.log(userUid && next_router__WEBPACK_IMPORTED_MODULE_12___default.a.query.project);

            if (userUid && next_router__WEBPACK_IMPORTED_MODULE_12___default.a.query.project) {
              data = _lib_firebase__WEBPACK_IMPORTED_MODULE_7__["db"].collection('projects').where('uid', '==', userUid);
              data.where('projectName', '==', next_router__WEBPACK_IMPORTED_MODULE_12___default.a.query.project).get().then(function (querySnapshot) {
                querySnapshot.forEach( /*#__PURE__*/function () {
                  var _ref2 = Object(C_off_saas_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__["default"])( /*#__PURE__*/C_off_saas_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.mark(function _callee(doc1) {
                    return C_off_saas_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.wrap(function _callee$(_context) {
                      while (1) {
                        switch (_context.prev = _context.next) {
                          case 0:
                            setProjectId(doc1.data().projectId);
                            _lib_firebase__WEBPACK_IMPORTED_MODULE_7__["db"].collection('projects').doc(doc1.data().projectId).collection('competitors').doc(next_router__WEBPACK_IMPORTED_MODULE_12___default.a.query.project).collection('inputs').onSnapshot(function (serverUpdate) {
                              serverUpdate.docs.map(function (doc) {
                                console.log(doc.data());
                                var data = doc.data();
                                setDocumentId(doc.id);
                                setCompetitors(data.competitorsArray);
                                setLoadingHelper(false);
                              });
                            });

                          case 2:
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

          case 3:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  })), [loadingHelper, next_router__WEBPACK_IMPORTED_MODULE_12___default.a.query.project]);
  console.log(competitors);

  var onNewCompetitorAdd = /*#__PURE__*/function () {
    var _ref3 = Object(C_off_saas_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__["default"])( /*#__PURE__*/C_off_saas_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.mark(function _callee3() {
      var wholeCompetitorsArray, newCompetitor;
      return C_off_saas_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              wholeCompetitorsArray = Object(C_off_saas_node_modules_next_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__["default"])(competitors);
              newCompetitor = {
                image: '',
                title: '',
                location: '',
                employees: '',
                revenue: '',
                index: Object(uuid__WEBPACK_IMPORTED_MODULE_14__["v4"])(),
                // Elements
                companyDescription: '',
                businessModel: '',
                productOverview: '',
                promotionStrategy: '',
                companyStrengths: '',
                companyWeaknesses: '',
                opportunities: ''
              };
              wholeCompetitorsArray.push(newCompetitor);
              setCompetitors(wholeCompetitorsArray); // Firebase update

              _context3.next = 6;
              return _lib_firebase__WEBPACK_IMPORTED_MODULE_7__["db"].collection('projects').doc(projectId).collection('competitors').doc(next_router__WEBPACK_IMPORTED_MODULE_12___default.a.query.project).collection('inputs').doc(documentId).update({
                competitorsArray: wholeCompetitorsArray
              });

            case 6:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3);
    }));

    return function onNewCompetitorAdd() {
      return _ref3.apply(this, arguments);
    };
  }();

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Tippy__WEBPACK_IMPORTED_MODULE_18__["default"], {
      projectManager: true,
      contentClass: "h-40 w-80 shadow-lg rounded-2xl bg-primary flex justify-center items-center",
      contentText: "We are in a space where you can manage your startup in various possible ways ",
      contentText1: " For a good start, begin with \"Startup idea\" that will guide you through the entire process of creating a plan for your startup! "
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 96,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_ExitComponent__WEBPACK_IMPORTED_MODULE_17__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 102,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "min-h-screen w-full relative flex flex-col items-center text-primarydark",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "w-full max-w-full relative mt-8 mdContainer:mt-16 mb-16 px-8 mdContainer:px-16 lgContainer:px-32 bigContainer:px-48 big2Container:px-64 big3Container:px-80 QHD:max-w-QHD",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "relative grid grid-cols-2 grid-rows-1 grid-flow-col",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
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
                lineNumber: 115,
                columnNumber: 17
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("g", {
                id: "Landing_Success",
                "data-name": "Landing Success",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
                  className: "cls-1",
                  d: "M109.3,90.1A46,46,0,0,0,65,36V20.08c1.78-.62,7.21-2.14,12.57.23a19.33,19.33,0,0,0,14.82,0c.87-.38.61.31.61-17.93a1,1,0,0,0-1.43-.93c-.07,0-6.69,2.87-13.18,0A19.41,19.41,0,0,0,65,.93,1,1,0,0,0,63,1V36a45.86,45.86,0,0,0-28.66,10.8C16.18,40.48,4,40,.79,45.51-2.29,50.86,3.94,59.3,10,65.68A11,11,0,0,0,18,83c.81,38.41,46.08,59.2,75.66,34.21,8.53,3,29,9.15,33.55,1.31C130.39,113,123.86,102.65,109.3,90.1ZM77.59,3.31A19.39,19.39,0,0,0,91,3.83V18.68c-1.79.62-7.22,2.13-12.57-.23A19.19,19.19,0,0,0,65,17.93V3.08C66.81,2.46,72.24,1,77.59,3.31ZM65,45v-7c39.69.91,58,50.27,28.21,76.81C71.32,107,46,92.66,27.77,78.64a11,11,0,0,0-3.2-16.13A43.88,43.88,0,0,1,63,38.06V45A1,1,0,0,0,65,45ZM32.55,48.36a46.21,46.21,0,0,0-9.83,13.28,10.93,10.93,0,0,0-11.4,2.47C-8.39,43.23,5.23,39.08,32.55,48.36ZM10,72a9,9,0,1,1,9,9A9,9,0,0,1,10,72Zm10,11a11,11,0,0,0,6.34-2.82c18.45,14.21,43.45,28.35,65.05,36.22C63,139.16,20.83,119.1,20.05,83Zm105.4,34.5c-2.51,4.35-14,3.62-30-1.85a45.61,45.61,0,0,0,13.42-23.21C121.59,103.58,128,113.12,125.45,117.47Z"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 117,
                  columnNumber: 19
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 116,
                columnNumber: 17
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 108,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
              className: "text-primarydark text-xl ssmContainer:text-2xl mt-2 pl-2 dark:text-background",
              children: "Competitors analysis"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 123,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 107,
            columnNumber: 13
          }, _this), size.width > 680 && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_CompetitorsPDF__WEBPACK_IMPORTED_MODULE_15__["default"], {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 125,
            columnNumber: 34
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 106,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
            className: "text-secondary text-base ssmContainer:text-md text-gray",
            children: "Manage your startup competitors"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 128,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 127,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "w-full bg-white rounded-2xl mt-12 p-8",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "flex justify-between items-center",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
              className: "text-primarydark text-md ssmContainer:text-lg",
              children: "Competitors"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 132,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_image__WEBPACK_IMPORTED_MODULE_13___default.a, {
              className: "cursor-pointer",
              onClick: onNewCompetitorAdd,
              src: "/competitors/add1.svg",
              height: 32,
              width: 32
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 133,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 131,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "grid grid-cols-1frr normalContainer:grid-cols-2fr gap-x-12",
            children: competitors && competitors.map(function (competitor, index) {
              return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Competitor__WEBPACK_IMPORTED_MODULE_10__["default"], {
                setCompetitors: setCompetitors,
                data: competitor,
                projectId: projectId,
                documentId: documentId,
                competitors: competitors,
                index: index
              }, index, false, {
                fileName: _jsxFileName,
                lineNumber: 138,
                columnNumber: 19
              }, _this);
            })
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 135,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 130,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 105,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 103,
      columnNumber: 7
    }, _this)]
  }, void 0, true);
};

_s(CompetitorsPage, "Ljg72WXlxrs27taL/PhDSLYco8M=", false, function () {
  return [_utils_useWindowSize__WEBPACK_IMPORTED_MODULE_16__["useWindowSize"]];
});

_c = CompetitorsPage;
/* harmony default export */ __webpack_exports__["default"] = (CompetitorsPage);

var _c;

$RefreshReg$(_c, "CompetitorsPage");

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9kYXNoYm9hcmQvc3RhcnR1cC9wcm9qZWN0L2J1c2luZXNzLWFwcC9jb21wZXRpdG9ycy9Db21wZXRpdG9yc1BhZ2UuanMiXSwibmFtZXMiOlsiQ29tcGV0aXRvcnNQYWdlIiwidXNlU3RhdGUiLCJwcm9qZWN0SWQiLCJzZXRQcm9qZWN0SWQiLCJkb2N1bWVudElkIiwic2V0RG9jdW1lbnRJZCIsImNvbXBldGl0b3JzIiwic2V0Q29tcGV0aXRvcnMiLCJzaXplIiwidXNlV2luZG93U2l6ZSIsImxvYWRpbmdIZWxwZXIiLCJzZXRMb2FkaW5nSGVscGVyIiwidXNlRWZmZWN0IiwidXNlclVpZCIsIkNvb2tpZXMiLCJnZXQiLCJjb25zb2xlIiwibG9nIiwiUm91dGVyIiwicXVlcnkiLCJwcm9qZWN0IiwiZGF0YSIsImRiIiwiY29sbGVjdGlvbiIsIndoZXJlIiwidGhlbiIsInF1ZXJ5U25hcHNob3QiLCJmb3JFYWNoIiwiZG9jMSIsImRvYyIsIm9uU25hcHNob3QiLCJzZXJ2ZXJVcGRhdGUiLCJkb2NzIiwibWFwIiwiaWQiLCJjb21wZXRpdG9yc0FycmF5Iiwib25OZXdDb21wZXRpdG9yQWRkIiwid2hvbGVDb21wZXRpdG9yc0FycmF5IiwibmV3Q29tcGV0aXRvciIsImltYWdlIiwidGl0bGUiLCJsb2NhdGlvbiIsImVtcGxveWVlcyIsInJldmVudWUiLCJpbmRleCIsInV1aWR2NCIsImNvbXBhbnlEZXNjcmlwdGlvbiIsImJ1c2luZXNzTW9kZWwiLCJwcm9kdWN0T3ZlcnZpZXciLCJwcm9tb3Rpb25TdHJhdGVneSIsImNvbXBhbnlTdHJlbmd0aHMiLCJjb21wYW55V2Vha25lc3NlcyIsIm9wcG9ydHVuaXRpZXMiLCJwdXNoIiwidXBkYXRlIiwid2lkdGgiLCJjb21wZXRpdG9yIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFD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QVMsRUFBQyx1Q0FBZjtBQUFBLGtDQUNFO0FBQUsscUJBQVMsRUFBQyxtQ0FBZjtBQUFBLG9DQUNFO0FBQUcsdUJBQVMsRUFBQywrQ0FBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFERixlQUVFLHFFQUFDLGtEQUFEO0FBQU8sdUJBQVMsRUFBQyxnQkFBakI7QUFBa0MscUJBQU8sRUFBRW5CLGtCQUEzQztBQUErRCxpQkFBRyxFQUFDLHVCQUFuRTtBQUEyRixvQkFBTSxFQUFFLEVBQW5HO0FBQXVHLG1CQUFLLEVBQUU7QUFBOUc7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREYsZUFLRTtBQUFLLHFCQUFTLEVBQUMsNERBQWY7QUFBQSxzQkFDRzlCLFdBQVcsSUFDVkEsV0FBVyxDQUFDMkIsR0FBWixDQUFnQixVQUFDdUIsVUFBRCxFQUFhWixLQUFiO0FBQUEsa0NBQ2QscUVBQUMsb0RBQUQ7QUFDRSw4QkFBYyxFQUFFckMsY0FEbEI7QUFHRSxvQkFBSSxFQUFFaUQsVUFIUjtBQUlFLHlCQUFTLEVBQUV0RCxTQUpiO0FBS0UsMEJBQVUsRUFBRUUsVUFMZDtBQU1FLDJCQUFXLEVBQUVFLFdBTmY7QUFPRSxxQkFBSyxFQUFFc0M7QUFQVCxpQkFFT0EsS0FGUDtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQURjO0FBQUEsYUFBaEI7QUFGSjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUxGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkF6QkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQVJGO0FBQUEsa0JBREY7QUE0REQsQ0F2SUQ7O0dBQU01QyxlO1VBSVNTLG1FOzs7S0FKVFQsZTtBQXlJU0EsOEVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvZGFzaGJvYXJkL3Byb2plY3RzL1twcm9qZWN0XS9jb21wZXRpdG9ycy5kNjc2Y2U5YmQyMGI0ZWMwZWE5Ni5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlUmVmLCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgaXNNb2JpbGUgfSBmcm9tICdyZWFjdC1kZXZpY2UtZGV0ZWN0JztcclxuaW1wb3J0IGdzYXAsIHsgTGluZWFyIH0gZnJvbSAnZ3NhcCc7XHJcbmltcG9ydCB7IGRiIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vLi4vbGliL2ZpcmViYXNlJztcclxuaW1wb3J0IE5hdmJhclRlbXBsYXRlIGZyb20gJy4uLy4uLy4uLy4uL05hdmJhclRlbXBsYXRlJztcclxuaW1wb3J0IENhc2hGbG93UERGIGZyb20gJy4uL2Nhc2gtZmxvdy9DYXNoRmxvd1BERic7XHJcbmltcG9ydCBDb21wZXRpdG9yIGZyb20gJy4vQ29tcGV0aXRvcic7XHJcbmltcG9ydCBDb29raWVzIGZyb20gJ2pzLWNvb2tpZSc7XHJcbmltcG9ydCBSb3V0ZXIgZnJvbSAnbmV4dC9yb3V0ZXInO1xyXG5pbXBvcnQgSW1hZ2UgZnJvbSAnbmV4dC9pbWFnZSc7XHJcbmltcG9ydCB7IHY0IGFzIHV1aWR2NCB9IGZyb20gJ3V1aWQnO1xyXG5pbXBvcnQgQ29tcGV0aXRvcnNQREYgZnJvbSAnLi9Db21wZXRpdG9yc1BERic7XHJcbi8vIERyYWcgJiBkcm9wXHJcbi8vIE1vYmlsZSBmcmllbmRseVxyXG5pbXBvcnQgeyB1c2VXaW5kb3dTaXplIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vLi4vdXRpbHMvdXNlV2luZG93U2l6ZSc7XHJcbmltcG9ydCBFeGl0Q29tcG9uZW50IGZyb20gJy4uLy4uLy4uL0V4aXRDb21wb25lbnQnO1xyXG5pbXBvcnQgVGlwcHlNb25zdGVyIGZyb20gJy4uLy4uLy4uLy4uL1RpcHB5JztcclxuXHJcbmNvbnN0IENvbXBldGl0b3JzUGFnZSA9ICgpID0+IHtcclxuICBjb25zdCBbcHJvamVjdElkLCBzZXRQcm9qZWN0SWRdID0gdXNlU3RhdGUoJycpO1xyXG4gIGNvbnN0IFtkb2N1bWVudElkLCBzZXREb2N1bWVudElkXSA9IHVzZVN0YXRlKCcnKTtcclxuICBjb25zdCBbY29tcGV0aXRvcnMsIHNldENvbXBldGl0b3JzXSA9IHVzZVN0YXRlKCk7XHJcbiAgY29uc3Qgc2l6ZSA9IHVzZVdpbmRvd1NpemUoKTtcclxuICBjb25zdCBbbG9hZGluZ0hlbHBlciwgc2V0TG9hZGluZ0hlbHBlcl0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gIHVzZUVmZmVjdChhc3luYyAoKSA9PiB7XHJcbiAgICBjb25zdCB1c2VyVWlkID0gQ29va2llcy5nZXQoJ3VpZCcpO1xyXG4gICAgLy8gY29uc29sZS5sb2coUm91dGVyLnF1ZXJ5LnByb2plY3QpO1xyXG4gICAgY29uc29sZS5sb2codXNlclVpZCAmJiBSb3V0ZXIucXVlcnkucHJvamVjdCk7XHJcbiAgICBpZiAodXNlclVpZCAmJiBSb3V0ZXIucXVlcnkucHJvamVjdCkge1xyXG4gICAgICBjb25zdCBkYXRhID0gZGIuY29sbGVjdGlvbigncHJvamVjdHMnKS53aGVyZSgndWlkJywgJz09JywgdXNlclVpZCk7XHJcbiAgICAgIGRhdGFcclxuICAgICAgICAud2hlcmUoJ3Byb2plY3ROYW1lJywgJz09JywgUm91dGVyLnF1ZXJ5LnByb2plY3QpXHJcbiAgICAgICAgLmdldCgpXHJcbiAgICAgICAgLnRoZW4oKHF1ZXJ5U25hcHNob3QpID0+IHtcclxuICAgICAgICAgIHF1ZXJ5U25hcHNob3QuZm9yRWFjaChhc3luYyAoZG9jMSkgPT4ge1xyXG4gICAgICAgICAgICBzZXRQcm9qZWN0SWQoZG9jMS5kYXRhKCkucHJvamVjdElkKTtcclxuXHJcbiAgICAgICAgICAgIGRiLmNvbGxlY3Rpb24oJ3Byb2plY3RzJylcclxuICAgICAgICAgICAgICAuZG9jKGRvYzEuZGF0YSgpLnByb2plY3RJZClcclxuICAgICAgICAgICAgICAuY29sbGVjdGlvbignY29tcGV0aXRvcnMnKVxyXG4gICAgICAgICAgICAgIC5kb2MoUm91dGVyLnF1ZXJ5LnByb2plY3QpXHJcbiAgICAgICAgICAgICAgLmNvbGxlY3Rpb24oJ2lucHV0cycpXHJcbiAgICAgICAgICAgICAgLm9uU25hcHNob3QoKHNlcnZlclVwZGF0ZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgc2VydmVyVXBkYXRlLmRvY3MubWFwKChkb2MpID0+IHtcclxuICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZG9jLmRhdGEoKSk7XHJcbiAgICAgICAgICAgICAgICAgIGNvbnN0IGRhdGEgPSBkb2MuZGF0YSgpO1xyXG4gICAgICAgICAgICAgICAgICBzZXREb2N1bWVudElkKGRvYy5pZCk7XHJcbiAgICAgICAgICAgICAgICAgIHNldENvbXBldGl0b3JzKGRhdGEuY29tcGV0aXRvcnNBcnJheSk7XHJcbiAgICAgICAgICAgICAgICAgIHNldExvYWRpbmdIZWxwZXIoZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKCdMb2FkaW5nIGZhaWxlZCcpO1xyXG4gICAgICBzZXRMb2FkaW5nSGVscGVyKHRydWUpO1xyXG4gICAgfVxyXG4gIH0sIFtsb2FkaW5nSGVscGVyLCBSb3V0ZXIucXVlcnkucHJvamVjdF0pO1xyXG5cclxuICBjb25zb2xlLmxvZyhjb21wZXRpdG9ycyk7XHJcblxyXG4gIGNvbnN0IG9uTmV3Q29tcGV0aXRvckFkZCA9IGFzeW5jICgpID0+IHtcclxuICAgIGNvbnN0IHdob2xlQ29tcGV0aXRvcnNBcnJheSA9IFsuLi5jb21wZXRpdG9yc107XHJcbiAgICBjb25zdCBuZXdDb21wZXRpdG9yID0ge1xyXG4gICAgICBpbWFnZTogJycsXHJcbiAgICAgIHRpdGxlOiAnJyxcclxuICAgICAgbG9jYXRpb246ICcnLFxyXG4gICAgICBlbXBsb3llZXM6ICcnLFxyXG4gICAgICByZXZlbnVlOiAnJyxcclxuICAgICAgaW5kZXg6IHV1aWR2NCgpLFxyXG4gICAgICAvLyBFbGVtZW50c1xyXG4gICAgICBjb21wYW55RGVzY3JpcHRpb246ICcnLFxyXG4gICAgICBidXNpbmVzc01vZGVsOiAnJyxcclxuICAgICAgcHJvZHVjdE92ZXJ2aWV3OiAnJyxcclxuICAgICAgcHJvbW90aW9uU3RyYXRlZ3k6ICcnLFxyXG4gICAgICBjb21wYW55U3RyZW5ndGhzOiAnJyxcclxuICAgICAgY29tcGFueVdlYWtuZXNzZXM6ICcnLFxyXG4gICAgICBvcHBvcnR1bml0aWVzOiAnJyxcclxuICAgIH07XHJcbiAgICB3aG9sZUNvbXBldGl0b3JzQXJyYXkucHVzaChuZXdDb21wZXRpdG9yKTtcclxuICAgIHNldENvbXBldGl0b3JzKHdob2xlQ29tcGV0aXRvcnNBcnJheSk7XHJcbiAgICAvLyBGaXJlYmFzZSB1cGRhdGVcclxuICAgIGF3YWl0IGRiXHJcbiAgICAgIC5jb2xsZWN0aW9uKCdwcm9qZWN0cycpXHJcbiAgICAgIC5kb2MocHJvamVjdElkKVxyXG4gICAgICAuY29sbGVjdGlvbignY29tcGV0aXRvcnMnKVxyXG4gICAgICAuZG9jKFJvdXRlci5xdWVyeS5wcm9qZWN0KVxyXG4gICAgICAuY29sbGVjdGlvbignaW5wdXRzJylcclxuICAgICAgLmRvYyhkb2N1bWVudElkKVxyXG4gICAgICAudXBkYXRlKHsgY29tcGV0aXRvcnNBcnJheTogd2hvbGVDb21wZXRpdG9yc0FycmF5IH0pO1xyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8VGlwcHlNb25zdGVyXHJcbiAgICAgICAgcHJvamVjdE1hbmFnZXJcclxuICAgICAgICBjb250ZW50Q2xhc3M9XCJoLTQwIHctODAgc2hhZG93LWxnIHJvdW5kZWQtMnhsIGJnLXByaW1hcnkgZmxleCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXJcIlxyXG4gICAgICAgIGNvbnRlbnRUZXh0PVwiV2UgYXJlIGluIGEgc3BhY2Ugd2hlcmUgeW91IGNhbiBtYW5hZ2UgeW91ciBzdGFydHVwIGluIHZhcmlvdXMgcG9zc2libGUgd2F5cyBcIlxyXG4gICAgICAgIGNvbnRlbnRUZXh0MT0nIEZvciBhIGdvb2Qgc3RhcnQsIGJlZ2luIHdpdGggXCJTdGFydHVwIGlkZWFcIiB0aGF0IHdpbGwgZ3VpZGUgeW91IHRocm91Z2ggdGhlIGVudGlyZSBwcm9jZXNzIG9mIGNyZWF0aW5nIGEgcGxhbiBmb3IgeW91ciBzdGFydHVwISAnXHJcbiAgICAgIC8+XHJcbiAgICAgIDxFeGl0Q29tcG9uZW50IC8+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWluLWgtc2NyZWVuIHctZnVsbCByZWxhdGl2ZSBmbGV4IGZsZXgtY29sIGl0ZW1zLWNlbnRlciB0ZXh0LXByaW1hcnlkYXJrXCI+XHJcbiAgICAgICAgey8qIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsIHhsQ29udGFpbmVyOm1heC13LXhsQ29udGFpbmVyQnJlYWsgeHhsQ29udGFpbmVyOm1heC13LXh4bENvbnRhaW5lckJyZWFrIHJlbGF0aXZlIG10LTE2XCI+ICovfVxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsIG1heC13LWZ1bGwgcmVsYXRpdmUgbXQtOCBtZENvbnRhaW5lcjptdC0xNiBtYi0xNiBweC04IG1kQ29udGFpbmVyOnB4LTE2IGxnQ29udGFpbmVyOnB4LTMyIGJpZ0NvbnRhaW5lcjpweC00OCBiaWcyQ29udGFpbmVyOnB4LTY0IGJpZzNDb250YWluZXI6cHgtODAgUUhEOm1heC13LVFIRFwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWxhdGl2ZSBncmlkIGdyaWQtY29scy0yIGdyaWQtcm93cy0xIGdyaWQtZmxvdy1jb2xcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgIDxzdmdcclxuICAgICAgICAgICAgICAgIGhlaWdodD1cIjMwXCJcclxuICAgICAgICAgICAgICAgIHdpZHRoPVwiMzBcIlxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZmlsbC1jdXJyZW50IHRleHQtcHJpbWFyeSBkYXJrOnRleHQtcHJpbWFyeWRhcmtcIlxyXG4gICAgICAgICAgICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXHJcbiAgICAgICAgICAgICAgICB2aWV3Qm94PVwiMCAwIDEyOCAxMjhcIlxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDx0aXRsZT5MYW5kaW5nIFN1Y2Nlc3M8L3RpdGxlPlxyXG4gICAgICAgICAgICAgICAgPGcgaWQ9XCJMYW5kaW5nX1N1Y2Nlc3NcIiBkYXRhLW5hbWU9XCJMYW5kaW5nIFN1Y2Nlc3NcIj5cclxuICAgICAgICAgICAgICAgICAgPHBhdGhcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJjbHMtMVwiXHJcbiAgICAgICAgICAgICAgICAgICAgZD1cIk0xMDkuMyw5MC4xQTQ2LDQ2LDAsMCwwLDY1LDM2VjIwLjA4YzEuNzgtLjYyLDcuMjEtMi4xNCwxMi41Ny4yM2ExOS4zMywxOS4zMywwLDAsMCwxNC44MiwwYy44Ny0uMzguNjEuMzEuNjEtMTcuOTNhMSwxLDAsMCwwLTEuNDMtLjkzYy0uMDcsMC02LjY5LDIuODctMTMuMTgsMEExOS40MSwxOS40MSwwLDAsMCw2NSwuOTMsMSwxLDAsMCwwLDYzLDFWMzZhNDUuODYsNDUuODYsMCwwLDAtMjguNjYsMTAuOEMxNi4xOCw0MC40OCw0LDQwLC43OSw0NS41MS0yLjI5LDUwLjg2LDMuOTQsNTkuMywxMCw2NS42OEExMSwxMSwwLDAsMCwxOCw4M2MuODEsMzguNDEsNDYuMDgsNTkuMiw3NS42NiwzNC4yMSw4LjUzLDMsMjksOS4xNSwzMy41NSwxLjMxQzEzMC4zOSwxMTMsMTIzLjg2LDEwMi42NSwxMDkuMyw5MC4xWk03Ny41OSwzLjMxQTE5LjM5LDE5LjM5LDAsMCwwLDkxLDMuODNWMTguNjhjLTEuNzkuNjItNy4yMiwyLjEzLTEyLjU3LS4yM0ExOS4xOSwxOS4xOSwwLDAsMCw2NSwxNy45M1YzLjA4QzY2LjgxLDIuNDYsNzIuMjQsMSw3Ny41OSwzLjMxWk02NSw0NXYtN2MzOS42OS45MSw1OCw1MC4yNywyOC4yMSw3Ni44MUM3MS4zMiwxMDcsNDYsOTIuNjYsMjcuNzcsNzguNjRhMTEsMTEsMCwwLDAtMy4yLTE2LjEzQTQzLjg4LDQzLjg4LDAsMCwxLDYzLDM4LjA2VjQ1QTEsMSwwLDAsMCw2NSw0NVpNMzIuNTUsNDguMzZhNDYuMjEsNDYuMjEsMCwwLDAtOS44MywxMy4yOCwxMC45MywxMC45MywwLDAsMC0xMS40LDIuNDdDLTguMzksNDMuMjMsNS4yMywzOS4wOCwzMi41NSw0OC4zNlpNMTAsNzJhOSw5LDAsMSwxLDksOUE5LDksMCwwLDEsMTAsNzJabTEwLDExYTExLDExLDAsMCwwLDYuMzQtMi44MmMxOC40NSwxNC4yMSw0My40NSwyOC4zNSw2NS4wNSwzNi4yMkM2MywxMzkuMTYsMjAuODMsMTE5LjEsMjAuMDUsODNabTEwNS40LDM0LjVjLTIuNTEsNC4zNS0xNCwzLjYyLTMwLTEuODVhNDUuNjEsNDUuNjEsMCwwLDAsMTMuNDItMjMuMjFDMTIxLjU5LDEwMy41OCwxMjgsMTEzLjEyLDEyNS40NSwxMTcuNDdaXCJcclxuICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDwvZz5cclxuICAgICAgICAgICAgICA8L3N2Zz5cclxuICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXByaW1hcnlkYXJrIHRleHQteGwgc3NtQ29udGFpbmVyOnRleHQtMnhsIG10LTIgcGwtMiBkYXJrOnRleHQtYmFja2dyb3VuZFwiPkNvbXBldGl0b3JzIGFuYWx5c2lzPC9wPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAge3NpemUud2lkdGggPiA2ODAgJiYgPENvbXBldGl0b3JzUERGIC8+fVxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwidGV4dC1zZWNvbmRhcnkgdGV4dC1iYXNlIHNzbUNvbnRhaW5lcjp0ZXh0LW1kIHRleHQtZ3JheVwiPk1hbmFnZSB5b3VyIHN0YXJ0dXAgY29tcGV0aXRvcnM8L2gxPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbCBiZy13aGl0ZSByb3VuZGVkLTJ4bCBtdC0xMiBwLThcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktYmV0d2VlbiBpdGVtcy1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXByaW1hcnlkYXJrIHRleHQtbWQgc3NtQ29udGFpbmVyOnRleHQtbGdcIj5Db21wZXRpdG9yczwvcD5cclxuICAgICAgICAgICAgICA8SW1hZ2UgY2xhc3NOYW1lPVwiY3Vyc29yLXBvaW50ZXJcIiBvbkNsaWNrPXtvbk5ld0NvbXBldGl0b3JBZGR9IHNyYz1cIi9jb21wZXRpdG9ycy9hZGQxLnN2Z1wiIGhlaWdodD17MzJ9IHdpZHRoPXszMn0gLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZCBncmlkLWNvbHMtMWZyciBub3JtYWxDb250YWluZXI6Z3JpZC1jb2xzLTJmciBnYXAteC0xMlwiPlxyXG4gICAgICAgICAgICAgIHtjb21wZXRpdG9ycyAmJlxyXG4gICAgICAgICAgICAgICAgY29tcGV0aXRvcnMubWFwKChjb21wZXRpdG9yLCBpbmRleCkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICA8Q29tcGV0aXRvclxyXG4gICAgICAgICAgICAgICAgICAgIHNldENvbXBldGl0b3JzPXtzZXRDb21wZXRpdG9yc31cclxuICAgICAgICAgICAgICAgICAgICBrZXk9e2luZGV4fVxyXG4gICAgICAgICAgICAgICAgICAgIGRhdGE9e2NvbXBldGl0b3J9XHJcbiAgICAgICAgICAgICAgICAgICAgcHJvamVjdElkPXtwcm9qZWN0SWR9XHJcbiAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnRJZD17ZG9jdW1lbnRJZH1cclxuICAgICAgICAgICAgICAgICAgICBjb21wZXRpdG9ycz17Y29tcGV0aXRvcnN9XHJcbiAgICAgICAgICAgICAgICAgICAgaW5kZXg9e2luZGV4fVxyXG4gICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC8+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IENvbXBldGl0b3JzUGFnZTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==