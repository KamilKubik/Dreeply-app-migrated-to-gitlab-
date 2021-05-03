webpackHotUpdate_N_E("pages/dashboard/projects/[project]/competitors/[id]",{

/***/ "./components/dashboard/startup/project/business-app/competitors/UniqueElement.js":
false,

/***/ "./node_modules/react-device-detect/main.js":
false,

/***/ "./node_modules/ua-parser-js/dist/ua-parser.min.js":
false,

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
/* harmony import */ var _lib_firebase__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../lib/firebase */ "./lib/firebase.js");
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
  console.log('Particular project --> ', projects);

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
      var data = _lib_firebase__WEBPACK_IMPORTED_MODULE_4__["db"].collection('projects').where('uid', '==', userUid);
      data.where('projectName', '==', router.query.project).get().then(function (querySnapshot) {
        querySnapshot.forEach( /*#__PURE__*/function () {
          var _ref2 = Object(C_off_saas_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/C_off_saas_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee(doc1) {
            return C_off_saas_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    //   setProjectId(doc1.data().projectId);
                    _lib_firebase__WEBPACK_IMPORTED_MODULE_4__["db"].collection('projects').doc(doc1.data().projectId).collection('competitors').doc(router.query.project).collection('inputs').onSnapshot(function (serverUpdate) {
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
  console.log(competitors);

  if (router.isFallback) {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
        children: "Loading..."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 61,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 7
    }, _this);
  } //   Dropdown


  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(false),
      dropdownHelper = _useState4[0],
      setDropdownHelper = _useState4[1];

  var initialContainer = document.getElementById(index); // Elements

  var descriptionTitle = document.getElementById("descriptionTitle".concat(index));
  var placeholderTitle = document.getElementById("placeholderTitle".concat(index));
  var descriptionModel = document.getElementById("descriptionModel".concat(index));
  var placeholderModel = document.getElementById("placeholderModel".concat(index));
  var descriptionProduct = document.getElementById("descriptionProduct".concat(index));
  var placeholderProduct = document.getElementById("placeholderProduct".concat(index));
  var descriptionPromotion = document.getElementById("descriptionPromotion".concat(index));
  var placeholderPromotion = document.getElementById("placeholderPromotion".concat(index));
  var descriptionStrengths = document.getElementById("descriptionStrengths".concat(index));
  var placeholderStrengths = document.getElementById("placeholderStrengths".concat(index));
  var descriptionWeaknesses = document.getElementById("descriptionWeaknesses".concat(index));
  var placeholderWeaknesses = document.getElementById("placeholderWeaknesses".concat(index));
  var descriptionOpportunities = document.getElementById("descriptionOpportunities".concat(index));
  var placeholderOpportunities = document.getElementById("placeholderOpportunities".concat(index));
  var dropDownElement = document.getElementById("dropdown".concat(index));
  var dataElement = document.getElementById("data".concat(index));
  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function () {
    gsap.set(dropDownElement, {
      rotation: '-90_cw'
    });

    if (!isMobile) {
      var containerElement = document.getElementById("container".concat(index));
      var competitorManager = document.getElementById("manager".concat(index));
      containerElement.addEventListener('mouseenter', function () {
        gsap.to(competitorManager, {
          height: 18,
          marignBottom: 16,
          duration: 0.5,
          ease: Linear.easeIn
        });
        gsap.to(initialContainer, {
          marginTop: 16,
          duration: 0.5,
          ease: Linear.easeIn
        });
      });
      containerElement.addEventListener('mouseleave', function () {
        gsap.to(competitorManager, {
          height: 0,
          marginBottom: 0,
          duration: 0.5,
          ease: Linear.easeOut
        });
        gsap.to(initialContainer, {
          marginTop: 0,
          duration: 0.5,
          ease: Linear.easeIn
        });
      });
    }
  }, [dropDownElement]);

  var onSectionDropdown = function onSectionDropdown() {
    var sectionHeight = descriptionTitle.offsetHeight + placeholderTitle.offsetHeight + descriptionModel.offsetHeight + placeholderModel.offsetHeight + 24 + descriptionProduct.offsetHeight + placeholderProduct.offsetHeight + 24 + descriptionPromotion.offsetHeight + placeholderPromotion.offsetHeight + 24 + descriptionStrengths.offsetHeight + placeholderStrengths.offsetHeight + 24 + descriptionWeaknesses.offsetHeight + placeholderWeaknesses.offsetHeight + 24 + descriptionOpportunities.offsetHeight + placeholderOpportunities.offsetHeight + 24;

    if (!dropdownHelper) {
      gsap.to(dataElement, {
        height: sectionHeight,
        marginTop: 32,
        marginBottom: 112,
        autoAlpha: 1,
        duration: 1,
        ease: Linear
      });
      gsap.to(dropDownElement, {
        rotation: '0_cw',
        duration: 1,
        ease: Linear
      });
      setDropdownHelper(true);
    } else if (dropdownHelper) {
      gsap.to(dataElement, {
        height: 0,
        marginTop: 0,
        marginBottom: 0,
        autoAlpha: 0,
        duration: 1,
        ease: Linear
      });
      gsap.to(dropDownElement, {
        rotation: '-90_ccw',
        duration: 1,
        ease: Linear
      });
      setDropdownHelper(false);
    }
  };

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
              lineNumber: 151,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("g", {
              id: "Landing_Success",
              "data-name": "Landing Success",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
                className: "cls-1",
                d: "M109.3,90.1A46,46,0,0,0,65,36V20.08c1.78-.62,7.21-2.14,12.57.23a19.33,19.33,0,0,0,14.82,0c.87-.38.61.31.61-17.93a1,1,0,0,0-1.43-.93c-.07,0-6.69,2.87-13.18,0A19.41,19.41,0,0,0,65,.93,1,1,0,0,0,63,1V36a45.86,45.86,0,0,0-28.66,10.8C16.18,40.48,4,40,.79,45.51-2.29,50.86,3.94,59.3,10,65.68A11,11,0,0,0,18,83c.81,38.41,46.08,59.2,75.66,34.21,8.53,3,29,9.15,33.55,1.31C130.39,113,123.86,102.65,109.3,90.1ZM77.59,3.31A19.39,19.39,0,0,0,91,3.83V18.68c-1.79.62-7.22,2.13-12.57-.23A19.19,19.19,0,0,0,65,17.93V3.08C66.81,2.46,72.24,1,77.59,3.31ZM65,45v-7c39.69.91,58,50.27,28.21,76.81C71.32,107,46,92.66,27.77,78.64a11,11,0,0,0-3.2-16.13A43.88,43.88,0,0,1,63,38.06V45A1,1,0,0,0,65,45ZM32.55,48.36a46.21,46.21,0,0,0-9.83,13.28,10.93,10.93,0,0,0-11.4,2.47C-8.39,43.23,5.23,39.08,32.55,48.36ZM10,72a9,9,0,1,1,9,9A9,9,0,0,1,10,72Zm10,11a11,11,0,0,0,6.34-2.82c18.45,14.21,43.45,28.35,65.05,36.22C63,139.16,20.83,119.1,20.05,83Zm105.4,34.5c-2.51,4.35-14,3.62-30-1.85a45.61,45.61,0,0,0,13.42-23.21C121.59,103.58,128,113.12,125.45,117.47Z"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 153,
                columnNumber: 17
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 152,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 144,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            className: "text-primarydark text-xl ssmContainer:text-2xl mt-2 pl-2 dark:text-background",
            children: "Competitors analysis"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 159,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 143,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 142,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
          className: "text-secondary text-base ssmContainer:text-md text-gray",
          children: "Manage your startup competitors"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 164,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 163,
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
            lineNumber: 168,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
            className: "cursor-pointer",
            src: "/competitors/add1.svg",
            height: 32,
            width: 32
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 169,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 167,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "grid grid-cols-1frr normalContainer:grid-cols-2fr gap-x-12",
          children: competitors && competitors.map(function (competitor, index) {
            return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(UniqueElement, {
              competitor: competitor,
              index: index
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 172,
              columnNumber: 68
            }, _this);
          })
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 171,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 166,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 141,
      columnNumber: 7
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 139,
    columnNumber: 5
  }, _this);
};

_s(UniqueCompetitorsPage, "G8N85msXlTTo/W/vhEQ4dK2zHGs=", false, function () {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvZGFzaGJvYXJkL3Byb2plY3RzL1twcm9qZWN0XS9jb21wZXRpdG9ycy8uanMiXSwibmFtZXMiOlsiVW5pcXVlQ29tcGV0aXRvcnNQYWdlIiwicHJvamVjdHMiLCJjb25zb2xlIiwibG9nIiwidXNlU3RhdGUiLCJzZWxlY3RlZFByb2plY3QiLCJzZXRTZWxlY3RlZFByb2plY3QiLCJjb21wZXRpdG9ycyIsInNldENvbXBldGl0b3JzIiwicm91dGVyIiwidXNlUm91dGVyIiwidXNlRWZmZWN0IiwidWlkIiwiQ29va2llcyIsImdldCIsImZpbHRlcmVkQXJyYXkiLCJmaWx0ZXIiLCJwcm9qZWN0IiwibGVuZ3RoIiwibG9hZGluZ0hlbHBlciIsInNldExvYWRpbmdIZWxwZXIiLCJ1c2VyVWlkIiwicXVlcnkiLCJkYXRhIiwiZGJDbGllbnQiLCJjb2xsZWN0aW9uIiwid2hlcmUiLCJ0aGVuIiwicXVlcnlTbmFwc2hvdCIsImZvckVhY2giLCJkb2MxIiwiZG9jIiwicHJvamVjdElkIiwib25TbmFwc2hvdCIsInNlcnZlclVwZGF0ZSIsImRvY3MiLCJtYXAiLCJjb21wZXRpdG9yc0FycmF5IiwiaXNGYWxsYmFjayIsImRyb3Bkb3duSGVscGVyIiwic2V0RHJvcGRvd25IZWxwZXIiLCJpbml0aWFsQ29udGFpbmVyIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsImluZGV4IiwiZGVzY3JpcHRpb25UaXRsZSIsInBsYWNlaG9sZGVyVGl0bGUiLCJkZXNjcmlwdGlvbk1vZGVsIiwicGxhY2Vob2xkZXJNb2RlbCIsImRlc2NyaXB0aW9uUHJvZHVjdCIsInBsYWNlaG9sZGVyUHJvZHVjdCIsImRlc2NyaXB0aW9uUHJvbW90aW9uIiwicGxhY2Vob2xkZXJQcm9tb3Rpb24iLCJkZXNjcmlwdGlvblN0cmVuZ3RocyIsInBsYWNlaG9sZGVyU3RyZW5ndGhzIiwiZGVzY3JpcHRpb25XZWFrbmVzc2VzIiwicGxhY2Vob2xkZXJXZWFrbmVzc2VzIiwiZGVzY3JpcHRpb25PcHBvcnR1bml0aWVzIiwicGxhY2Vob2xkZXJPcHBvcnR1bml0aWVzIiwiZHJvcERvd25FbGVtZW50IiwiZGF0YUVsZW1lbnQiLCJnc2FwIiwic2V0Iiwicm90YXRpb24iLCJpc01vYmlsZSIsImNvbnRhaW5lckVsZW1lbnQiLCJjb21wZXRpdG9yTWFuYWdlciIsImFkZEV2ZW50TGlzdGVuZXIiLCJ0byIsImhlaWdodCIsIm1hcmlnbkJvdHRvbSIsImR1cmF0aW9uIiwiZWFzZSIsIkxpbmVhciIsImVhc2VJbiIsIm1hcmdpblRvcCIsIm1hcmdpbkJvdHRvbSIsImVhc2VPdXQiLCJvblNlY3Rpb25Ecm9wZG93biIsInNlY3Rpb25IZWlnaHQiLCJvZmZzZXRIZWlnaHQiLCJhdXRvQWxwaGEiLCJjb21wZXRpdG9yIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBRUE7QUFDQTtBQUNBOztBQUVBLElBQU1BLHFCQUFxQixHQUFHLFNBQXhCQSxxQkFBd0IsT0FBa0I7QUFBQTs7QUFBQSxNQUFmQyxRQUFlLFFBQWZBLFFBQWU7QUFDOUNDLFNBQU8sQ0FBQ0MsR0FBUixDQUFZLHlCQUFaLEVBQXVDRixRQUF2Qzs7QUFEOEMsa0JBRUFHLHNEQUFRLENBQUMsSUFBRCxDQUZSO0FBQUEsTUFFdkNDLGVBRnVDO0FBQUEsTUFFdEJDLGtCQUZzQjs7QUFBQSxtQkFHUkYsc0RBQVEsRUFIQTtBQUFBLE1BR3ZDRyxXQUh1QztBQUFBLE1BRzFCQyxjQUgwQjs7QUFJOUMsTUFBTUMsTUFBTSxHQUFHQyw2REFBUyxFQUF4QixDQUo4QyxDQUs5Qzs7QUFDQUMseURBQVMsQ0FBQyxZQUFNO0FBQ2QsUUFBTUMsR0FBRyxHQUFHQyxnREFBTyxDQUFDQyxHQUFSLENBQVksS0FBWixDQUFaO0FBQ0EsUUFBTUMsYUFBYSxHQUFHZCxRQUFRLElBQUlBLFFBQVEsQ0FBQ2UsTUFBVCxDQUFnQixVQUFDQyxPQUFEO0FBQUEsYUFBYUEsT0FB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Ozs7S0FKWFYscUI7O0FBa05TQSxvRkFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9kYXNoYm9hcmQvcHJvamVjdHMvW3Byb2plY3RdL2NvbXBldGl0b3JzL1tpZF0uYzIyNGM1OTYwMzI2ZWYyNzljNWEuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlLCB1c2VSZWYgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IGRiIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vbGliL2ZpcmViYXNlLWFkbWluJztcclxuaW1wb3J0IHsgZGIgYXMgZGJDbGllbnQgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9saWIvZmlyZWJhc2UnO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XHJcbmltcG9ydCBDb29raWVzIGZyb20gJ2pzLWNvb2tpZSc7XHJcblxyXG5jb25zdCBVbmlxdWVDb21wZXRpdG9yc1BhZ2UgPSAoeyBwcm9qZWN0cyB9KSA9PiB7XHJcbiAgY29uc29sZS5sb2coJ1BhcnRpY3VsYXIgcHJvamVjdCAtLT4gJywgcHJvamVjdHMpO1xyXG4gIGNvbnN0IFtzZWxlY3RlZFByb2plY3QsIHNldFNlbGVjdGVkUHJvamVjdF0gPSB1c2VTdGF0ZShudWxsKTtcclxuICBjb25zdCBbY29tcGV0aXRvcnMsIHNldENvbXBldGl0b3JzXSA9IHVzZVN0YXRlKCk7XHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcbiAgLy8gICBTZWxlY3RlZCBwcm9qZWN0XHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnN0IHVpZCA9IENvb2tpZXMuZ2V0KCd1aWQnKTtcclxuICAgIGNvbnN0IGZpbHRlcmVkQXJyYXkgPSBwcm9qZWN0cyAmJiBwcm9qZWN0cy5maWx0ZXIoKHByb2plY3QpID0+IHByb2plY3QudWlkID09IHVpZCk7XHJcbiAgICBjb25zb2xlLmxvZyhmaWx0ZXJlZEFycmF5KTtcclxuICAgIGZpbHRlcmVkQXJyYXkgJiYgZmlsdGVyZWRBcnJheS5sZW5ndGggPT0gMSAmJiBzZXRTZWxlY3RlZFByb2plY3QoZmlsdGVyZWRBcnJheVswXSk7XHJcbiAgfSwgW3Byb2plY3RzXSk7XHJcbiAgY29uc29sZS5sb2coc2VsZWN0ZWRQcm9qZWN0KTtcclxuXHJcbiAgLy8gQ29tcGV0aXRvcnNcclxuICBjb25zdCBbbG9hZGluZ0hlbHBlciwgc2V0TG9hZGluZ0hlbHBlcl0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnN0IHVzZXJVaWQgPSBDb29raWVzLmdldCgndWlkJyk7XHJcbiAgICBpZiAodXNlclVpZCAmJiByb3V0ZXIucXVlcnkucHJvamVjdCkge1xyXG4gICAgICBjb25zdCBkYXRhID0gZGJDbGllbnQuY29sbGVjdGlvbigncHJvamVjdHMnKS53aGVyZSgndWlkJywgJz09JywgdXNlclVpZCk7XHJcbiAgICAgIGRhdGFcclxuICAgICAgICAud2hlcmUoJ3Byb2plY3ROYW1lJywgJz09Jywgcm91dGVyLnF1ZXJ5LnByb2plY3QpXHJcbiAgICAgICAgLmdldCgpXHJcbiAgICAgICAgLnRoZW4oKHF1ZXJ5U25hcHNob3QpID0+IHtcclxuICAgICAgICAgIHF1ZXJ5U25hcHNob3QuZm9yRWFjaChhc3luYyAoZG9jMSkgPT4ge1xyXG4gICAgICAgICAgICAvLyAgIHNldFByb2plY3RJZChkb2MxLmRhdGEoKS5wcm9qZWN0SWQpO1xyXG5cclxuICAgICAgICAgICAgZGJDbGllbnRcclxuICAgICAgICAgICAgICAuY29sbGVjdGlvbigncHJvamVjdHMnKVxyXG4gICAgICAgICAgICAgIC5kb2MoZG9jMS5kYXRhKCkucHJvamVjdElkKVxyXG4gICAgICAgICAgICAgIC5jb2xsZWN0aW9uKCdjb21wZXRpdG9ycycpXHJcbiAgICAgICAgICAgICAgLmRvYyhyb3V0ZXIucXVlcnkucHJvamVjdClcclxuICAgICAgICAgICAgICAuY29sbGVjdGlvbignaW5wdXRzJylcclxuICAgICAgICAgICAgICAub25TbmFwc2hvdCgoc2VydmVyVXBkYXRlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBzZXJ2ZXJVcGRhdGUuZG9jcy5tYXAoKGRvYykgPT4ge1xyXG4gICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhkb2MuZGF0YSgpKTtcclxuICAgICAgICAgICAgICAgICAgY29uc3QgZGF0YSA9IGRvYy5kYXRhKCk7XHJcbiAgICAgICAgICAgICAgICAgIC8vICAgc2V0RG9jdW1lbnRJZChkb2MuaWQpO1xyXG4gICAgICAgICAgICAgICAgICBzZXRDb21wZXRpdG9ycyhkYXRhLmNvbXBldGl0b3JzQXJyYXkpO1xyXG4gICAgICAgICAgICAgICAgICBzZXRMb2FkaW5nSGVscGVyKGZhbHNlKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBjb25zb2xlLmxvZygnTG9hZGluZyBmYWlsZWQnKTtcclxuICAgICAgc2V0TG9hZGluZ0hlbHBlcih0cnVlKTtcclxuICAgIH1cclxuICB9LCBbbG9hZGluZ0hlbHBlciwgcm91dGVyLnF1ZXJ5LnByb2plY3RdKTtcclxuICBjb25zb2xlLmxvZyhjb21wZXRpdG9ycyk7XHJcblxyXG4gIGlmIChyb3V0ZXIuaXNGYWxsYmFjaykge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdj5cclxuICAgICAgICA8cD5Mb2FkaW5nLi4uPC9wPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICk7XHJcbiAgfVxyXG5cclxuICAvLyAgIERyb3Bkb3duXHJcbiAgY29uc3QgW2Ryb3Bkb3duSGVscGVyLCBzZXREcm9wZG93bkhlbHBlcl0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gIGNvbnN0IGluaXRpYWxDb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChpbmRleCk7XHJcbiAgLy8gRWxlbWVudHNcclxuICBjb25zdCBkZXNjcmlwdGlvblRpdGxlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYGRlc2NyaXB0aW9uVGl0bGUke2luZGV4fWApO1xyXG4gIGNvbnN0IHBsYWNlaG9sZGVyVGl0bGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgcGxhY2Vob2xkZXJUaXRsZSR7aW5kZXh9YCk7XHJcbiAgY29uc3QgZGVzY3JpcHRpb25Nb2RlbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGBkZXNjcmlwdGlvbk1vZGVsJHtpbmRleH1gKTtcclxuICBjb25zdCBwbGFjZWhvbGRlck1vZGVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYHBsYWNlaG9sZGVyTW9kZWwke2luZGV4fWApO1xyXG4gIGNvbnN0IGRlc2NyaXB0aW9uUHJvZHVjdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGBkZXNjcmlwdGlvblByb2R1Y3Qke2luZGV4fWApO1xyXG4gIGNvbnN0IHBsYWNlaG9sZGVyUHJvZHVjdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGBwbGFjZWhvbGRlclByb2R1Y3Qke2luZGV4fWApO1xyXG4gIGNvbnN0IGRlc2NyaXB0aW9uUHJvbW90aW9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYGRlc2NyaXB0aW9uUHJvbW90aW9uJHtpbmRleH1gKTtcclxuICBjb25zdCBwbGFjZWhvbGRlclByb21vdGlvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGBwbGFjZWhvbGRlclByb21vdGlvbiR7aW5kZXh9YCk7XHJcbiAgY29uc3QgZGVzY3JpcHRpb25TdHJlbmd0aHMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgZGVzY3JpcHRpb25TdHJlbmd0aHMke2luZGV4fWApO1xyXG4gIGNvbnN0IHBsYWNlaG9sZGVyU3RyZW5ndGhzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYHBsYWNlaG9sZGVyU3RyZW5ndGhzJHtpbmRleH1gKTtcclxuICBjb25zdCBkZXNjcmlwdGlvbldlYWtuZXNzZXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgZGVzY3JpcHRpb25XZWFrbmVzc2VzJHtpbmRleH1gKTtcclxuICBjb25zdCBwbGFjZWhvbGRlcldlYWtuZXNzZXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgcGxhY2Vob2xkZXJXZWFrbmVzc2VzJHtpbmRleH1gKTtcclxuICBjb25zdCBkZXNjcmlwdGlvbk9wcG9ydHVuaXRpZXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgZGVzY3JpcHRpb25PcHBvcnR1bml0aWVzJHtpbmRleH1gKTtcclxuICBjb25zdCBwbGFjZWhvbGRlck9wcG9ydHVuaXRpZXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgcGxhY2Vob2xkZXJPcHBvcnR1bml0aWVzJHtpbmRleH1gKTtcclxuXHJcbiAgY29uc3QgZHJvcERvd25FbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYGRyb3Bkb3duJHtpbmRleH1gKTtcclxuICBjb25zdCBkYXRhRWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGBkYXRhJHtpbmRleH1gKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGdzYXAuc2V0KGRyb3BEb3duRWxlbWVudCwgeyByb3RhdGlvbjogJy05MF9jdycgfSk7XHJcbiAgICBpZiAoIWlzTW9iaWxlKSB7XHJcbiAgICAgIGNvbnN0IGNvbnRhaW5lckVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgY29udGFpbmVyJHtpbmRleH1gKTtcclxuICAgICAgY29uc3QgY29tcGV0aXRvck1hbmFnZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgbWFuYWdlciR7aW5kZXh9YCk7XHJcbiAgICAgIGNvbnRhaW5lckVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VlbnRlcicsICgpID0+IHtcclxuICAgICAgICBnc2FwLnRvKGNvbXBldGl0b3JNYW5hZ2VyLCB7IGhlaWdodDogMTgsIG1hcmlnbkJvdHRvbTogMTYsIGR1cmF0aW9uOiAwLjUsIGVhc2U6IExpbmVhci5lYXNlSW4gfSk7XHJcbiAgICAgICAgZ3NhcC50byhpbml0aWFsQ29udGFpbmVyLCB7IG1hcmdpblRvcDogMTYsIGR1cmF0aW9uOiAwLjUsIGVhc2U6IExpbmVhci5lYXNlSW4gfSk7XHJcbiAgICAgIH0pO1xyXG4gICAgICBjb250YWluZXJFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbGVhdmUnLCAoKSA9PiB7XHJcbiAgICAgICAgZ3NhcC50byhjb21wZXRpdG9yTWFuYWdlciwgeyBoZWlnaHQ6IDAsIG1hcmdpbkJvdHRvbTogMCwgZHVyYXRpb246IDAuNSwgZWFzZTogTGluZWFyLmVhc2VPdXQgfSk7XHJcbiAgICAgICAgZ3NhcC50byhpbml0aWFsQ29udGFpbmVyLCB7IG1hcmdpblRvcDogMCwgZHVyYXRpb246IDAuNSwgZWFzZTogTGluZWFyLmVhc2VJbiB9KTtcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfSwgW2Ryb3BEb3duRWxlbWVudF0pO1xyXG5cclxuICBjb25zdCBvblNlY3Rpb25Ecm9wZG93biA9ICgpID0+IHtcclxuICAgIGNvbnN0IHNlY3Rpb25IZWlnaHQgPVxyXG4gICAgICBkZXNjcmlwdGlvblRpdGxlLm9mZnNldEhlaWdodCArXHJcbiAgICAgIHBsYWNlaG9sZGVyVGl0bGUub2Zmc2V0SGVpZ2h0ICtcclxuICAgICAgZGVzY3JpcHRpb25Nb2RlbC5vZmZzZXRIZWlnaHQgK1xyXG4gICAgICBwbGFjZWhvbGRlck1vZGVsLm9mZnNldEhlaWdodCArXHJcbiAgICAgIDI0ICtcclxuICAgICAgZGVzY3JpcHRpb25Qcm9kdWN0Lm9mZnNldEhlaWdodCArXHJcbiAgICAgIHBsYWNlaG9sZGVyUHJvZHVjdC5vZmZzZXRIZWlnaHQgK1xyXG4gICAgICAyNCArXHJcbiAgICAgIGRlc2NyaXB0aW9uUHJvbW90aW9uLm9mZnNldEhlaWdodCArXHJcbiAgICAgIHBsYWNlaG9sZGVyUHJvbW90aW9uLm9mZnNldEhlaWdodCArXHJcbiAgICAgIDI0ICtcclxuICAgICAgZGVzY3JpcHRpb25TdHJlbmd0aHMub2Zmc2V0SGVpZ2h0ICtcclxuICAgICAgcGxhY2Vob2xkZXJTdHJlbmd0aHMub2Zmc2V0SGVpZ2h0ICtcclxuICAgICAgMjQgK1xyXG4gICAgICBkZXNjcmlwdGlvbldlYWtuZXNzZXMub2Zmc2V0SGVpZ2h0ICtcclxuICAgICAgcGxhY2Vob2xkZXJXZWFrbmVzc2VzLm9mZnNldEhlaWdodCArXHJcbiAgICAgIDI0ICtcclxuICAgICAgZGVzY3JpcHRpb25PcHBvcnR1bml0aWVzLm9mZnNldEhlaWdodCArXHJcbiAgICAgIHBsYWNlaG9sZGVyT3Bwb3J0dW5pdGllcy5vZmZzZXRIZWlnaHQgK1xyXG4gICAgICAyNDtcclxuICAgIGlmICghZHJvcGRvd25IZWxwZXIpIHtcclxuICAgICAgZ3NhcC50byhkYXRhRWxlbWVudCwgeyBoZWlnaHQ6IHNlY3Rpb25IZWlnaHQsIG1hcmdpblRvcDogMzIsIG1hcmdpbkJvdHRvbTogMTEyLCBhdXRvQWxwaGE6IDEsIGR1cmF0aW9uOiAxLCBlYXNlOiBMaW5lYXIgfSk7XHJcbiAgICAgIGdzYXAudG8oZHJvcERvd25FbGVtZW50LCB7IHJvdGF0aW9uOiAnMF9jdycsIGR1cmF0aW9uOiAxLCBlYXNlOiBMaW5lYXIgfSk7XHJcbiAgICAgIHNldERyb3Bkb3duSGVscGVyKHRydWUpO1xyXG4gICAgfSBlbHNlIGlmIChkcm9wZG93bkhlbHBlcikge1xyXG4gICAgICBnc2FwLnRvKGRhdGFFbGVtZW50LCB7IGhlaWdodDogMCwgbWFyZ2luVG9wOiAwLCBtYXJnaW5Cb3R0b206IDAsIGF1dG9BbHBoYTogMCwgZHVyYXRpb246IDEsIGVhc2U6IExpbmVhciB9KTtcclxuICAgICAgZ3NhcC50byhkcm9wRG93bkVsZW1lbnQsIHsgcm90YXRpb246ICctOTBfY2N3JywgZHVyYXRpb246IDEsIGVhc2U6IExpbmVhciB9KTtcclxuICAgICAgc2V0RHJvcGRvd25IZWxwZXIoZmFsc2UpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cIm1pbi1oLXNjcmVlbiB3LWZ1bGwgcmVsYXRpdmUgZmxleCBmbGV4LWNvbCBpdGVtcy1jZW50ZXIgdGV4dC1wcmltYXJ5ZGFya1wiPlxyXG4gICAgICB7LyogPGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGwgeGxDb250YWluZXI6bWF4LXcteGxDb250YWluZXJCcmVhayB4eGxDb250YWluZXI6bWF4LXcteHhsQ29udGFpbmVyQnJlYWsgcmVsYXRpdmUgbXQtMTZcIj4gKi99XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsIG1heC13LWZ1bGwgcmVsYXRpdmUgbXQtOCBtZENvbnRhaW5lcjptdC0xNiBtYi0xNiBweC04IG1kQ29udGFpbmVyOnB4LTE2IGxnQ29udGFpbmVyOnB4LTMyIGJpZ0NvbnRhaW5lcjpweC00OCBiaWcyQ29udGFpbmVyOnB4LTY0IGJpZzNDb250YWluZXI6cHgtODAgUUhEOm1heC13LVFIRFwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVsYXRpdmUgZ3JpZCBncmlkLWNvbHMtMiBncmlkLXJvd3MtMSBncmlkLWZsb3ctY29sXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyXCI+XHJcbiAgICAgICAgICAgIDxzdmdcclxuICAgICAgICAgICAgICBoZWlnaHQ9XCIzMFwiXHJcbiAgICAgICAgICAgICAgd2lkdGg9XCIzMFwiXHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZmlsbC1jdXJyZW50IHRleHQtcHJpbWFyeSBkYXJrOnRleHQtcHJpbWFyeWRhcmtcIlxyXG4gICAgICAgICAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxyXG4gICAgICAgICAgICAgIHZpZXdCb3g9XCIwIDAgMTI4IDEyOFwiXHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICA8dGl0bGU+TGFuZGluZyBTdWNjZXNzPC90aXRsZT5cclxuICAgICAgICAgICAgICA8ZyBpZD1cIkxhbmRpbmdfU3VjY2Vzc1wiIGRhdGEtbmFtZT1cIkxhbmRpbmcgU3VjY2Vzc1wiPlxyXG4gICAgICAgICAgICAgICAgPHBhdGhcclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiY2xzLTFcIlxyXG4gICAgICAgICAgICAgICAgICBkPVwiTTEwOS4zLDkwLjFBNDYsNDYsMCwwLDAsNjUsMzZWMjAuMDhjMS43OC0uNjIsNy4yMS0yLjE0LDEyLjU3LjIzYTE5LjMzLDE5LjMzLDAsMCwwLDE0LjgyLDBjLjg3LS4zOC42MS4zMS42MS0xNy45M2ExLDEsMCwwLDAtMS40My0uOTNjLS4wNywwLTYuNjksMi44Ny0xMy4xOCwwQTE5LjQxLDE5LjQxLDAsMCwwLDY1LC45MywxLDEsMCwwLDAsNjMsMVYzNmE0NS44Niw0NS44NiwwLDAsMC0yOC42NiwxMC44QzE2LjE4LDQwLjQ4LDQsNDAsLjc5LDQ1LjUxLTIuMjksNTAuODYsMy45NCw1OS4zLDEwLDY1LjY4QTExLDExLDAsMCwwLDE4LDgzYy44MSwzOC40MSw0Ni4wOCw1OS4yLDc1LjY2LDM0LjIxLDguNTMsMywyOSw5LjE1LDMzLjU1LDEuMzFDMTMwLjM5LDExMywxMjMuODYsMTAyLjY1LDEwOS4zLDkwLjFaTTc3LjU5LDMuMzFBMTkuMzksMTkuMzksMCwwLDAsOTEsMy44M1YxOC42OGMtMS43OS42Mi03LjIyLDIuMTMtMTIuNTctLjIzQTE5LjE5LDE5LjE5LDAsMCwwLDY1LDE3LjkzVjMuMDhDNjYuODEsMi40Niw3Mi4yNCwxLDc3LjU5LDMuMzFaTTY1LDQ1di03YzM5LjY5LjkxLDU4LDUwLjI3LDI4LjIxLDc2LjgxQzcxLjMyLDEwNyw0Niw5Mi42NiwyNy43Nyw3OC42NGExMSwxMSwwLDAsMC0zLjItMTYuMTNBNDMuODgsNDMuODgsMCwwLDEsNjMsMzguMDZWNDVBMSwxLDAsMCwwLDY1LDQ1Wk0zMi41NSw0OC4zNmE0Ni4yMSw0Ni4yMSwwLDAsMC05LjgzLDEzLjI4LDEwLjkzLDEwLjkzLDAsMCwwLTExLjQsMi40N0MtOC4zOSw0My4yMyw1LjIzLDM5LjA4LDMyLjU1LDQ4LjM2Wk0xMCw3MmE5LDksMCwxLDEsOSw5QTksOSwwLDAsMSwxMCw3MlptMTAsMTFhMTEsMTEsMCwwLDAsNi4zNC0yLjgyYzE4LjQ1LDE0LjIxLDQzLjQ1LDI4LjM1LDY1LjA1LDM2LjIyQzYzLDEzOS4xNiwyMC44MywxMTkuMSwyMC4wNSw4M1ptMTA1LjQsMzQuNWMtMi41MSw0LjM1LTE0LDMuNjItMzAtMS44NWE0NS42MSw0NS42MSwwLDAsMCwxMy40Mi0yMy4yMUMxMjEuNTksMTAzLjU4LDEyOCwxMTMuMTIsMTI1LjQ1LDExNy40N1pcIlxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8L2c+XHJcbiAgICAgICAgICAgIDwvc3ZnPlxyXG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXByaW1hcnlkYXJrIHRleHQteGwgc3NtQ29udGFpbmVyOnRleHQtMnhsIG10LTIgcGwtMiBkYXJrOnRleHQtYmFja2dyb3VuZFwiPkNvbXBldGl0b3JzIGFuYWx5c2lzPC9wPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICB7Lyoge3NpemUud2lkdGggPiA2ODAgJiYgPENvbXBldGl0b3JzUERGIC8+fSAqL31cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgPGgxIGNsYXNzTmFtZT1cInRleHQtc2Vjb25kYXJ5IHRleHQtYmFzZSBzc21Db250YWluZXI6dGV4dC1tZCB0ZXh0LWdyYXlcIj5NYW5hZ2UgeW91ciBzdGFydHVwIGNvbXBldGl0b3JzPC9oMT5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbCBiZy13aGl0ZSByb3VuZGVkLTJ4bCBtdC0xMiBwLThcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWJldHdlZW4gaXRlbXMtY2VudGVyXCI+XHJcbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtcHJpbWFyeWRhcmsgdGV4dC1tZCBzc21Db250YWluZXI6dGV4dC1sZ1wiPkNvbXBldGl0b3JzPC9wPlxyXG4gICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT1cImN1cnNvci1wb2ludGVyXCIgc3JjPVwiL2NvbXBldGl0b3JzL2FkZDEuc3ZnXCIgaGVpZ2h0PXszMn0gd2lkdGg9ezMyfSAvPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQgZ3JpZC1jb2xzLTFmcnIgbm9ybWFsQ29udGFpbmVyOmdyaWQtY29scy0yZnIgZ2FwLXgtMTJcIj5cclxuICAgICAgICAgICAge2NvbXBldGl0b3JzICYmIGNvbXBldGl0b3JzLm1hcCgoY29tcGV0aXRvciwgaW5kZXgpID0+IDxVbmlxdWVFbGVtZW50IGNvbXBldGl0b3I9e2NvbXBldGl0b3J9IGluZGV4PXtpbmRleH0gLz4pfVxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBnZXRTdGF0aWNQYXRocyA9IGFzeW5jICgpID0+IHtcclxuICBjb25zdCBzbmFwc2hvdCA9IGF3YWl0IGRiLmNvbGxlY3Rpb24oJ3Byb2plY3RzJykuZ2V0KCk7XHJcblxyXG4gIGNvbnN0IHByb2plY3RzID0gW107XHJcbiAgc25hcHNob3QuZm9yRWFjaCgoZG9jKSA9PiB7XHJcbiAgICBwcm9qZWN0cy5wdXNoKGRvYy5kYXRhKCkpO1xyXG4gIH0pO1xyXG5cclxuICBjb25zdCBwYXRocyA9IHByb2plY3RzLm1hcCgocHJvamVjdCkgPT4gKHtcclxuICAgIHBhcmFtczoge1xyXG4gICAgICBwcm9qZWN0OiBwcm9qZWN0LnByb2plY3ROYW1lLnRvU3RyaW5nKCksXHJcbiAgICAgIGlkOiBwcm9qZWN0LnByb2plY3RJZC50b1N0cmluZygpLFxyXG4gICAgfSxcclxuICB9KSk7XHJcblxyXG4gIHJldHVybiB7XHJcbiAgICBwYXRoczogcGF0aHMsXHJcbiAgICBmYWxsYmFjazogdHJ1ZSxcclxuICB9O1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGdldFN0YXRpY1Byb3BzID0gYXN5bmMgKHsgcGFyYW1zIH0pID0+IHtcclxuICBsZXQgcmVmID0gZGIuY29sbGVjdGlvbigncHJvamVjdHMnKS53aGVyZSgncHJvamVjdE5hbWUnLCAnPT0nLCBwYXJhbXMucHJvamVjdCk7XHJcblxyXG4gIGNvbnN0IHNuYXBzaG90ID0gYXdhaXQgcmVmLmdldCgpO1xyXG4gIGNvbnN0IHByb2plY3RzID0gW107XHJcblxyXG4gIHNuYXBzaG90LmZvckVhY2goKGRvYykgPT4ge1xyXG4gICAgcHJvamVjdHMucHVzaCh7IGlkOiBkb2MuaWQsIC4uLmRvYy5kYXRhKCkgfSk7XHJcbiAgfSk7XHJcblxyXG4gIHJldHVybiB7XHJcbiAgICBwcm9wczogeyBwcm9qZWN0cyB9LFxyXG4gICAgcmV2YWxpZGF0ZTogMSxcclxuICB9O1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgVW5pcXVlQ29tcGV0aXRvcnNQYWdlO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9