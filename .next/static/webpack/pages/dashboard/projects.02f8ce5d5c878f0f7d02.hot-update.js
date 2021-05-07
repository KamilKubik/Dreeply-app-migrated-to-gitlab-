webpackHotUpdate_N_E("pages/dashboard/projects",{

/***/ "./pages/dashboard/projects/index.js":
/*!*******************************************!*\
  !*** ./pages/dashboard/projects/index.js ***!
  \*******************************************/
/*! exports provided: __N_SSP, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__N_SSP", function() { return __N_SSP; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var babel_plugin_superjson_next_tools__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! babel-plugin-superjson-next/tools */ "./node_modules/babel-plugin-superjson-next/tools.js");
/* harmony import */ var babel_plugin_superjson_next_tools__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(babel_plugin_superjson_next_tools__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_dashboard_Tippy__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../components/dashboard/Tippy */ "./components/dashboard/Tippy.js");
/* harmony import */ var _components_dashboard_NavbarTemplate__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../components/dashboard/NavbarTemplate */ "./components/dashboard/NavbarTemplate.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! gsap */ "./node_modules/gsap/index.js");
/* harmony import */ var _lib_newAuth__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../lib/newAuth */ "./lib/newAuth.js");
/* harmony import */ var _components_BounceLoader__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../components/BounceLoader */ "./components/BounceLoader.js");
/* harmony import */ var _components_dashboard_startup_EmptyStartup__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../components/dashboard/startup/EmptyStartup */ "./components/dashboard/startup/EmptyStartup.js");
/* harmony import */ var _components_dashboard_startup_StartupSuccess__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../components/dashboard/startup/StartupSuccess */ "./components/dashboard/startup/StartupSuccess.js");





var _jsxFileName = "C:\\off-saas\\pages\\dashboard\\projects\\index.js",
    _this = undefined,
    _s = $RefreshSig$();











var ProjectsManager = function ProjectsManager(_ref) {
  _s();

  var projects = _ref.projects;
  console.log(projects);
  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_5__["useRouter"])();
  var containerRef = Object(react__WEBPACK_IMPORTED_MODULE_2__["useRef"])();

  var _useAuth = Object(_lib_newAuth__WEBPACK_IMPORTED_MODULE_7__["useAuth"])(),
      currentUser = _useAuth.currentUser;

  console.log(currentUser);

  var onProjectCreate = function onProjectCreate(e) {
    e.preventDefault();
    gsap__WEBPACK_IMPORTED_MODULE_6__["default"].to(containerRef.current, {
      autoAlpha: 0,
      duration: 1,
      ease: gsap__WEBPACK_IMPORTED_MODULE_6__["Power4"].easeOut
    }); // setTimeout(() => {

    router.push('/dashboard/projects/new-startup'); // }, 1200);
  };

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(false),
      activeClass = _useState[0],
      setActiveClass = _useState[1];

  var chooseClassesClick = function chooseClassesClick(index) {
    var menuDots = document.getElementById("menu".concat(index));

    if (activeClass) {
      gsap__WEBPACK_IMPORTED_MODULE_6__["default"].to(menuDots, {
        autoAlpha: 0
      });
      setActiveClass(false);
    } else {
      gsap__WEBPACK_IMPORTED_MODULE_6__["default"].to(menuDots, {
        autoAlpha: 1
      });
      setActiveClass(true);
    }
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_dashboard_Tippy__WEBPACK_IMPORTED_MODULE_3__["default"], {
      startups: true,
      contentClass: "h-36 w-80 shadow-lg rounded-2xl bg-primary flex justify-center items-center",
      contentText: "This is a place where magical things happen ",
      contentText1: " Just start creating your startup and bring your idea into reality. Once you've done that, you can manage it from the main panel. Feel free to edit, save or delete your idea"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_dashboard_NavbarTemplate__WEBPACK_IMPORTED_MODULE_4__["default"], {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        ref: containerRef,
        className: "min-h-screen w-full relative flex flex-col items-center text-primarydark",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "w-full sm:max-w-smContainer md:max-w-mdContainer lg:max-w-lgContainer xl:max-w-xlContainer 2xl:max-w-xxlContainer normal:max-w-normalContainer relative mt-12",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "grid grid-cols-2 grid-rows-1 grid-flow-col",
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
                  lineNumber: 64,
                  columnNumber: 19
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("g", {
                  id: "Landing_Success",
                  "data-name": "Landing Success",
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
                    className: "cls-1",
                    d: "M109.3,90.1A46,46,0,0,0,65,36V20.08c1.78-.62,7.21-2.14,12.57.23a19.33,19.33,0,0,0,14.82,0c.87-.38.61.31.61-17.93a1,1,0,0,0-1.43-.93c-.07,0-6.69,2.87-13.18,0A19.41,19.41,0,0,0,65,.93,1,1,0,0,0,63,1V36a45.86,45.86,0,0,0-28.66,10.8C16.18,40.48,4,40,.79,45.51-2.29,50.86,3.94,59.3,10,65.68A11,11,0,0,0,18,83c.81,38.41,46.08,59.2,75.66,34.21,8.53,3,29,9.15,33.55,1.31C130.39,113,123.86,102.65,109.3,90.1ZM77.59,3.31A19.39,19.39,0,0,0,91,3.83V18.68c-1.79.62-7.22,2.13-12.57-.23A19.19,19.19,0,0,0,65,17.93V3.08C66.81,2.46,72.24,1,77.59,3.31ZM65,45v-7c39.69.91,58,50.27,28.21,76.81C71.32,107,46,92.66,27.77,78.64a11,11,0,0,0-3.2-16.13A43.88,43.88,0,0,1,63,38.06V45A1,1,0,0,0,65,45ZM32.55,48.36a46.21,46.21,0,0,0-9.83,13.28,10.93,10.93,0,0,0-11.4,2.47C-8.39,43.23,5.23,39.08,32.55,48.36ZM10,72a9,9,0,1,1,9,9A9,9,0,0,1,10,72Zm10,11a11,11,0,0,0,6.34-2.82c18.45,14.21,43.45,28.35,65.05,36.22C63,139.16,20.83,119.1,20.05,83Zm105.4,34.5c-2.51,4.35-14,3.62-30-1.85a45.61,45.61,0,0,0,13.42-23.21C121.59,103.58,128,113.12,125.45,117.47Z"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 66,
                    columnNumber: 21
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 65,
                  columnNumber: 19
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 57,
                columnNumber: 17
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                className: "self-end text-2xl pl-2 dark:text-background",
                children: "Startups"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 72,
                columnNumber: 17
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 56,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "flex justify-end",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
                onClick: function onClick(e) {
                  return onProjectCreate(e);
                },
                className: "hover:bg-primary hover:text-white dark:hover:bg-primarydark dark:hover:text-background focus:outline-none border border-primary text-primary text-base font-light py-2 px-6 rounded-2xl dark:text-primarydark dark:border-primarydark",
                children: "New startup"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 75,
                columnNumber: 17
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 74,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 55,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
              className: "text-secondary text-md text-gray",
              children: "Bring your idea into reality"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 84,
              columnNumber: 15
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 83,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
              className: "text-lg mt-10 -mb-6 dark:text-background",
              children: "Ideas you invented"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 87,
              columnNumber: 15
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 86,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "w-full grid sm:grid-cols-1 md:grid-cols-2fr lg:grid-cols-3fr 2xl:grid-cols-4fr gap-8 border-r-6 rounded-2xl bg-white mt-8 mb-8 dark:bg-background p-8 text-center",
            children: projects ? projects.length == 0 ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_dashboard_startup_EmptyStartup__WEBPACK_IMPORTED_MODULE_9__["default"], {
              onProjectCreate: onProjectCreate
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 92,
              columnNumber: 19
            }, _this) : projects.map(function (_ref2, index) {
              var imageName = _ref2.imageName,
                  imageFileUrl = _ref2.imageFileUrl,
                  projectName = _ref2.projectName,
                  project = _ref2.project;
              return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: "shadow rounded-2xl flex flex-wrap justify-center items-center flex-col hover:shadow-lg transform hover:scale-105 hover:-translate-y-2 hover:-translate-x-2 transition duration-500 ease-in-out",
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                  className: "relative inline-block text-right w-4/5 top-4 right-2",
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
                    onClick: function onClick() {
                      return chooseClassesClick(index);
                    },
                    src: "/dots-menu2.svg",
                    height: 26,
                    width: 26,
                    className: "cursor-pointer"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 99,
                    columnNumber: 27
                  }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                    id: "menu".concat(index),
                    className: "origin-top-right absolute left-1/2 transform -translate-x-1/2 w-44 lg:w-48 shadow-xl bg-white focus:outline-none invisible rounded-2xl",
                    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                      className: "pt-1 text-left",
                      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                        className: "transition duration-500 ease-in-out flex items-center justify-between hover:bg-primary",
                        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                          //   onClick={(e) => onProjectEdit(e, image)}
                          href: "#",
                          className: "block px-4 py-2 2xl:py-3 text-sm text-primarydark transition duration-500 ease-in-out hover:text-background",
                          children: "Edit"
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 112,
                          columnNumber: 33
                        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                          className: "mr-3 flex justify-center items-center relative bottom-1",
                          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
                            src: "/gifs/whale.gif",
                            height: 30,
                            width: 30
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 120,
                            columnNumber: 35
                          }, _this)
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 119,
                          columnNumber: 33
                        }, _this)]
                      }, void 0, true, {
                        fileName: _jsxFileName,
                        lineNumber: 111,
                        columnNumber: 31
                      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                        className: "transition duration-500 ease-in-out flex items-center justify-between hover:bg-primary rounded-bl-2xl rounded-br-2xl",
                        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                          //   onClick={(e) => onProjectDelete(e, image.projectId)}
                          href: "#",
                          className: "block px-4 py-2 2xl:py-3 text-sm text-primarydark transition duration-500 ease-in-out hover:text-background",
                          children: "Remove"
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 124,
                          columnNumber: 33
                        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                          className: "mr-3 flex justify-center items-center relative bottom-1",
                          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
                            src: "/gifs/bomb.gif",
                            height: 30,
                            width: 30
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 132,
                            columnNumber: 35
                          }, _this)
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 131,
                          columnNumber: 33
                        }, _this)]
                      }, void 0, true, {
                        fileName: _jsxFileName,
                        lineNumber: 123,
                        columnNumber: 31
                      }, _this)]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 110,
                      columnNumber: 29
                    }, _this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 106,
                    columnNumber: 27
                  }, _this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 98,
                  columnNumber: 25
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
                  src: imageFileUrl == null ? "/modal/".concat(imageName, ".svg") : imageFileUrl,
                  className: " h-40 w-40 p-4 border-b border-primary"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 139,
                  columnNumber: 25
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                  className: "py-4 px-8",
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {}, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 144,
                    columnNumber: 27
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 143,
                  columnNumber: 25
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 96,
                columnNumber: 23
              }, _this);
            }) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_BounceLoader__WEBPACK_IMPORTED_MODULE_8__["default"], {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 151,
              columnNumber: 17
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 89,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 54,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 53,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 7
    }, _this)]
  }, void 0, true);
};

_s(ProjectsManager, "67E/Br96t8tSQWZsLo5vojV2Z8k=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_5__["useRouter"], _lib_newAuth__WEBPACK_IMPORTED_MODULE_7__["useAuth"]];
});

_c = ProjectsManager;
var __N_SSP = true;
/* harmony default export */ __webpack_exports__["default"] = (_c2 = Object(babel_plugin_superjson_next_tools__WEBPACK_IMPORTED_MODULE_1__["withSuperJSONPage"])(ProjectsManager));

var _c, _c2;

$RefreshReg$(_c, "ProjectsManager");
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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvZGFzaGJvYXJkL3Byb2plY3RzL2luZGV4LmpzIl0sIm5hbWVzIjpbIlByb2plY3RzTWFuYWdlciIsInByb2plY3RzIiwiY29uc29sZSIsImxvZyIsInJvdXRlciIsInVzZVJvdXRlciIsImNvbnRhaW5lclJlZiIsInVzZVJlZiIsInVzZUF1dGgiLCJjdXJyZW50VXNlciIsIm9uUHJvamVjdENyZWF0ZSIsImUiLCJwcmV2ZW50RGVmYXVsdCIsImdzYXAiLCJ0byIsImN1cnJlbnQiLCJhdXRvQWxwaGEiLCJkdXJhdGlvbiIsImVhc2UiLCJQb3dlcjQiLCJlYXNlT3V0IiwicHVzaCIsInVzZVN0YXRlIiwiYWN0aXZlQ2xhc3MiLCJzZXRBY3RpdmVDbGFzcyIsImNob29zZUNsYXNzZXNDbGljayIsImluZGV4IiwibWVudURvdHMiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwibGVuZ3RoIiwibWFwIiwiaW1hZ2VOYW1lIiwiaW1hZ2VGaWxlVXJsIiwicHJvamVjdE5hbWUiLCJwcm9qZWN0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsZUFBZSxHQUFHLFNBQWxCQSxlQUFrQixPQUFrQjtBQUFBOztBQUFBLE1BQWZDLFFBQWUsUUFBZkEsUUFBZTtBQUN4Q0MsU0FBTyxDQUFDQyxHQUFSLENBQVlGLFFBQVo7QUFDQSxNQUFNRyxNQUFNLEdBQUdDLDZEQUFTLEVBQXhCO0FBQ0EsTUFBTUMsWUFBWSxHQUFHQyxvREFBTSxFQUEzQjs7QUFId0MsaUJBSWhCQyw0REFBTyxFQUpTO0FBQUEsTUFJaENDLFdBSmdDLFlBSWhDQSxXQUpnQzs7QUFLeENQLFNBQU8sQ0FBQ0MsR0FBUixDQUFZTSxXQUFaOztBQUVBLE1BQU1DLGVBQWUsR0FBRyxTQUFsQkEsZUFBa0IsQ0FBQ0MsQ0FB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QUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFQRjtBQUFBLGtCQURGO0FBbUhELENBbEpEOztHQUFNakMsZTtVQUVXSyxxRCxFQUVTRyxvRDs7O0tBSnBCUixlOztBQXlLUyxpS0FBQUEsZUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9kYXNoYm9hcmQvcHJvamVjdHMuMDJmOGNlNWQ1Yzg3OGYwZjdkMDIuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VSZWYsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgY29va2llIGZyb20gJ2Nvb2tpZSc7XHJcbmltcG9ydCB7IGRiIH0gZnJvbSAnLi4vLi4vLi4vbGliL2ZpcmViYXNlLWFkbWluJztcclxuaW1wb3J0IFRpcHB5TW9uc3RlciBmcm9tICcuLi8uLi8uLi9jb21wb25lbnRzL2Rhc2hib2FyZC9UaXBweSc7XHJcbmltcG9ydCBOYXZiYXJUZW1wbGF0ZSBmcm9tICcuLi8uLi8uLi9jb21wb25lbnRzL2Rhc2hib2FyZC9OYXZiYXJUZW1wbGF0ZSc7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcclxuaW1wb3J0IGdzYXAsIHsgUG93ZXI0IH0gZnJvbSAnZ3NhcCc7XHJcbmltcG9ydCB7IHVzZUF1dGggfSBmcm9tICcuLi8uLi8uLi9saWIvbmV3QXV0aCc7XHJcbmltcG9ydCBCb3VuY2VMb2FkZXJDb21wb25lbnQgZnJvbSAnLi4vLi4vLi4vY29tcG9uZW50cy9Cb3VuY2VMb2FkZXInO1xyXG5pbXBvcnQgRW1wdHlTdGFydHVwIGZyb20gJy4uLy4uLy4uL2NvbXBvbmVudHMvZGFzaGJvYXJkL3N0YXJ0dXAvRW1wdHlTdGFydHVwJztcclxuaW1wb3J0IFN0YXJ0dXBTdWNjZXNzIGZyb20gJy4uLy4uLy4uL2NvbXBvbmVudHMvZGFzaGJvYXJkL3N0YXJ0dXAvU3RhcnR1cFN1Y2Nlc3MnO1xyXG5cclxuY29uc3QgUHJvamVjdHNNYW5hZ2VyID0gKHsgcHJvamVjdHMgfSkgPT4ge1xyXG4gIGNvbnNvbGUubG9nKHByb2plY3RzKTtcclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuICBjb25zdCBjb250YWluZXJSZWYgPSB1c2VSZWYoKTtcclxuICBjb25zdCB7IGN1cnJlbnRVc2VyIH0gPSB1c2VBdXRoKCk7XHJcbiAgY29uc29sZS5sb2coY3VycmVudFVzZXIpO1xyXG5cclxuICBjb25zdCBvblByb2plY3RDcmVhdGUgPSAoZSkgPT4ge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgZ3NhcC50byhjb250YWluZXJSZWYuY3VycmVudCwge1xyXG4gICAgICBhdXRvQWxwaGE6IDAsXHJcbiAgICAgIGR1cmF0aW9uOiAxLFxyXG4gICAgICBlYXNlOiBQb3dlcjQuZWFzZU91dCxcclxuICAgIH0pO1xyXG4gICAgLy8gc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICByb3V0ZXIucHVzaCgnL2Rhc2hib2FyZC9wcm9qZWN0cy9uZXctc3RhcnR1cCcpO1xyXG4gICAgLy8gfSwgMTIwMCk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgW2FjdGl2ZUNsYXNzLCBzZXRBY3RpdmVDbGFzc10gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gIGNvbnN0IGNob29zZUNsYXNzZXNDbGljayA9IChpbmRleCkgPT4ge1xyXG4gICAgY29uc3QgbWVudURvdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgbWVudSR7aW5kZXh9YCk7XHJcbiAgICBpZiAoYWN0aXZlQ2xhc3MpIHtcclxuICAgICAgZ3NhcC50byhtZW51RG90cywgeyBhdXRvQWxwaGE6IDAgfSk7XHJcbiAgICAgIHNldEFjdGl2ZUNsYXNzKGZhbHNlKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGdzYXAudG8obWVudURvdHMsIHsgYXV0b0FscGhhOiAxIH0pO1xyXG4gICAgICBzZXRBY3RpdmVDbGFzcyh0cnVlKTtcclxuICAgIH1cclxuICB9O1xyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8VGlwcHlNb25zdGVyXHJcbiAgICAgICAgc3RhcnR1cHNcclxuICAgICAgICBjb250ZW50Q2xhc3M9XCJoLTM2IHctODAgc2hhZG93LWxnIHJvdW5kZWQtMnhsIGJnLXByaW1hcnkgZmxleCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXJcIlxyXG4gICAgICAgIGNvbnRlbnRUZXh0PVwiVGhpcyBpcyBhIHBsYWNlIHdoZXJlIG1hZ2ljYWwgdGhpbmdzIGhhcHBlbiBcIlxyXG4gICAgICAgIGNvbnRlbnRUZXh0MT1cIiBKdXN0IHN0YXJ0IGNyZWF0aW5nIHlvdXIgc3RhcnR1cCBhbmQgYnJpbmcgeW91ciBpZGVhIGludG8gcmVhbGl0eS4gT25jZSB5b3UndmUgZG9uZSB0aGF0LCB5b3UgY2FuIG1hbmFnZSBpdCBmcm9tIHRoZSBtYWluIHBhbmVsLiBGZWVsIGZyZWUgdG8gZWRpdCwgc2F2ZSBvciBkZWxldGUgeW91ciBpZGVhXCJcclxuICAgICAgLz5cclxuICAgICAgPE5hdmJhclRlbXBsYXRlPlxyXG4gICAgICAgIDxkaXYgcmVmPXtjb250YWluZXJSZWZ9IGNsYXNzTmFtZT1cIm1pbi1oLXNjcmVlbiB3LWZ1bGwgcmVsYXRpdmUgZmxleCBmbGV4LWNvbCBpdGVtcy1jZW50ZXIgdGV4dC1wcmltYXJ5ZGFya1wiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGwgc206bWF4LXctc21Db250YWluZXIgbWQ6bWF4LXctbWRDb250YWluZXIgbGc6bWF4LXctbGdDb250YWluZXIgeGw6bWF4LXcteGxDb250YWluZXIgMnhsOm1heC13LXh4bENvbnRhaW5lciBub3JtYWw6bWF4LXctbm9ybWFsQ29udGFpbmVyIHJlbGF0aXZlIG10LTEyXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZCBncmlkLWNvbHMtMiBncmlkLXJvd3MtMSBncmlkLWZsb3ctY29sXCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgPHN2Z1xyXG4gICAgICAgICAgICAgICAgICBoZWlnaHQ9XCIzMFwiXHJcbiAgICAgICAgICAgICAgICAgIHdpZHRoPVwiMzBcIlxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmaWxsLWN1cnJlbnQgdGV4dC1wcmltYXJ5IGRhcms6dGV4dC1wcmltYXJ5ZGFya1wiXHJcbiAgICAgICAgICAgICAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxyXG4gICAgICAgICAgICAgICAgICB2aWV3Qm94PVwiMCAwIDEyOCAxMjhcIlxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICA8dGl0bGU+TGFuZGluZyBTdWNjZXNzPC90aXRsZT5cclxuICAgICAgICAgICAgICAgICAgPGcgaWQ9XCJMYW5kaW5nX1N1Y2Nlc3NcIiBkYXRhLW5hbWU9XCJMYW5kaW5nIFN1Y2Nlc3NcIj5cclxuICAgICAgICAgICAgICAgICAgICA8cGF0aFxyXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiY2xzLTFcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgZD1cIk0xMDkuMyw5MC4xQTQ2LDQ2LDAsMCwwLDY1LDM2VjIwLjA4YzEuNzgtLjYyLDcuMjEtMi4xNCwxMi41Ny4yM2ExOS4zMywxOS4zMywwLDAsMCwxNC44MiwwYy44Ny0uMzguNjEuMzEuNjEtMTcuOTNhMSwxLDAsMCwwLTEuNDMtLjkzYy0uMDcsMC02LjY5LDIuODctMTMuMTgsMEExOS40MSwxOS40MSwwLDAsMCw2NSwuOTMsMSwxLDAsMCwwLDYzLDFWMzZhNDUuODYsNDUuODYsMCwwLDAtMjguNjYsMTAuOEMxNi4xOCw0MC40OCw0LDQwLC43OSw0NS41MS0yLjI5LDUwLjg2LDMuOTQsNTkuMywxMCw2NS42OEExMSwxMSwwLDAsMCwxOCw4M2MuODEsMzguNDEsNDYuMDgsNTkuMiw3NS42NiwzNC4yMSw4LjUzLDMsMjksOS4xNSwzMy41NSwxLjMxQzEzMC4zOSwxMTMsMTIzLjg2LDEwMi42NSwxMDkuMyw5MC4xWk03Ny41OSwzLjMxQTE5LjM5LDE5LjM5LDAsMCwwLDkxLDMuODNWMTguNjhjLTEuNzkuNjItNy4yMiwyLjEzLTEyLjU3LS4yM0ExOS4xOSwxOS4xOSwwLDAsMCw2NSwxNy45M1YzLjA4QzY2LjgxLDIuNDYsNzIuMjQsMSw3Ny41OSwzLjMxWk02NSw0NXYtN2MzOS42OS45MSw1OCw1MC4yNywyOC4yMSw3Ni44MUM3MS4zMiwxMDcsNDYsOTIuNjYsMjcuNzcsNzguNjRhMTEsMTEsMCwwLDAtMy4yLTE2LjEzQTQzLjg4LDQzLjg4LDAsMCwxLDYzLDM4LjA2VjQ1QTEsMSwwLDAsMCw2NSw0NVpNMzIuNTUsNDguMzZhNDYuMjEsNDYuMjEsMCwwLDAtOS44MywxMy4yOCwxMC45MywxMC45MywwLDAsMC0xMS40LDIuNDdDLTguMzksNDMuMjMsNS4yMywzOS4wOCwzMi41NSw0OC4zNlpNMTAsNzJhOSw5LDAsMSwxLDksOUE5LDksMCwwLDEsMTAsNzJabTEwLDExYTExLDExLDAsMCwwLDYuMzQtMi44MmMxOC40NSwxNC4yMSw0My40NSwyOC4zNSw2NS4wNSwzNi4yMkM2MywxMzkuMTYsMjAuODMsMTE5LjEsMjAuMDUsODNabTEwNS40LDM0LjVjLTIuNTEsNC4zNS0xNCwzLjYyLTMwLTEuODVhNDUuNjEsNDUuNjEsMCwwLDAsMTMuNDItMjMuMjFDMTIxLjU5LDEwMy41OCwxMjgsMTEzLjEyLDEyNS40NSwxMTcuNDdaXCJcclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICA8L2c+XHJcbiAgICAgICAgICAgICAgICA8L3N2Zz5cclxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInNlbGYtZW5kIHRleHQtMnhsIHBsLTIgZGFyazp0ZXh0LWJhY2tncm91bmRcIj5TdGFydHVwczwvcD5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1lbmRcIj5cclxuICAgICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgICAgb25DbGljaz17KGUpID0+IG9uUHJvamVjdENyZWF0ZShlKX1cclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaG92ZXI6YmctcHJpbWFyeSBob3Zlcjp0ZXh0LXdoaXRlIGRhcms6aG92ZXI6YmctcHJpbWFyeWRhcmsgZGFyazpob3Zlcjp0ZXh0LWJhY2tncm91bmQgZm9jdXM6b3V0bGluZS1ub25lIGJvcmRlciBib3JkZXItcHJpbWFyeSB0ZXh0LXByaW1hcnkgdGV4dC1iYXNlIGZvbnQtbGlnaHQgcHktMiBweC02IHJvdW5kZWQtMnhsIGRhcms6dGV4dC1wcmltYXJ5ZGFyayBkYXJrOmJvcmRlci1wcmltYXJ5ZGFya1wiXHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgIE5ldyBzdGFydHVwXHJcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cInRleHQtc2Vjb25kYXJ5IHRleHQtbWQgdGV4dC1ncmF5XCI+QnJpbmcgeW91ciBpZGVhIGludG8gcmVhbGl0eTwvaDE+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtbGcgbXQtMTAgLW1iLTYgZGFyazp0ZXh0LWJhY2tncm91bmRcIj5JZGVhcyB5b3UgaW52ZW50ZWQ8L3A+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbCBncmlkIHNtOmdyaWQtY29scy0xIG1kOmdyaWQtY29scy0yZnIgbGc6Z3JpZC1jb2xzLTNmciAyeGw6Z3JpZC1jb2xzLTRmciBnYXAtOCBib3JkZXItci02IHJvdW5kZWQtMnhsIGJnLXdoaXRlIG10LTggbWItOCBkYXJrOmJnLWJhY2tncm91bmQgcC04IHRleHQtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAge3Byb2plY3RzID8gKFxyXG4gICAgICAgICAgICAgICAgcHJvamVjdHMubGVuZ3RoID09IDAgPyAoXHJcbiAgICAgICAgICAgICAgICAgIDxFbXB0eVN0YXJ0dXAgb25Qcm9qZWN0Q3JlYXRlPXtvblByb2plY3RDcmVhdGV9IC8+XHJcbiAgICAgICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgICAgICBwcm9qZWN0cy5tYXAoKHsgaW1hZ2VOYW1lLCBpbWFnZUZpbGVVcmwsIHByb2plY3ROYW1lLCBwcm9qZWN0IH0sIGluZGV4KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2hhZG93IHJvdW5kZWQtMnhsIGZsZXggZmxleC13cmFwIGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlciBmbGV4LWNvbCBob3ZlcjpzaGFkb3ctbGcgdHJhbnNmb3JtIGhvdmVyOnNjYWxlLTEwNSBob3ZlcjotdHJhbnNsYXRlLXktMiBob3ZlcjotdHJhbnNsYXRlLXgtMiB0cmFuc2l0aW9uIGR1cmF0aW9uLTUwMCBlYXNlLWluLW91dFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7LyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBEUk9QRE9XTiBTVEFSVCAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL31cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWxhdGl2ZSBpbmxpbmUtYmxvY2sgdGV4dC1yaWdodCB3LTQvNSB0b3AtNCByaWdodC0yXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gY2hvb3NlQ2xhc3Nlc0NsaWNrKGluZGV4KX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz1cIi9kb3RzLW1lbnUyLnN2Z1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9ezI2fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg9ezI2fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiY3Vyc29yLXBvaW50ZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9e2BtZW51JHtpbmRleH1gfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwib3JpZ2luLXRvcC1yaWdodCBhYnNvbHV0ZSBsZWZ0LTEvMiB0cmFuc2Zvcm0gLXRyYW5zbGF0ZS14LTEvMiB3LTQ0IGxnOnctNDggc2hhZG93LXhsIGJnLXdoaXRlIGZvY3VzOm91dGxpbmUtbm9uZSBpbnZpc2libGUgcm91bmRlZC0yeGxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHQtMSB0ZXh0LWxlZnRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0cmFuc2l0aW9uIGR1cmF0aW9uLTUwMCBlYXNlLWluLW91dCBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWJldHdlZW4gaG92ZXI6YmctcHJpbWFyeVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgIG9uQ2xpY2s9eyhlKSA9PiBvblByb2plY3RFZGl0KGUsIGltYWdlKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhyZWY9XCIjXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJsb2NrIHB4LTQgcHktMiAyeGw6cHktMyB0ZXh0LXNtIHRleHQtcHJpbWFyeWRhcmsgdHJhbnNpdGlvbiBkdXJhdGlvbi01MDAgZWFzZS1pbi1vdXQgaG92ZXI6dGV4dC1iYWNrZ3JvdW5kXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBFZGl0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cIm1yLTMgZmxleCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXIgcmVsYXRpdmUgYm90dG9tLTFcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiL2dpZnMvd2hhbGUuZ2lmXCIgaGVpZ2h0PXszMH0gd2lkdGg9ezMwfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidHJhbnNpdGlvbiBkdXJhdGlvbi01MDAgZWFzZS1pbi1vdXQgZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1iZXR3ZWVuIGhvdmVyOmJnLXByaW1hcnkgcm91bmRlZC1ibC0yeGwgcm91bmRlZC1ici0yeGxcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICBvbkNsaWNrPXsoZSkgPT4gb25Qcm9qZWN0RGVsZXRlKGUsIGltYWdlLnByb2plY3RJZCl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBocmVmPVwiI1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJibG9jayBweC00IHB5LTIgMnhsOnB5LTMgdGV4dC1zbSB0ZXh0LXByaW1hcnlkYXJrIHRyYW5zaXRpb24gZHVyYXRpb24tNTAwIGVhc2UtaW4tb3V0IGhvdmVyOnRleHQtYmFja2dyb3VuZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgUmVtb3ZlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cIm1yLTMgZmxleCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXIgcmVsYXRpdmUgYm90dG9tLTFcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiL2dpZnMvYm9tYi5naWZcIiBoZWlnaHQ9ezMwfSB3aWR0aD17MzB9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM9e2ltYWdlRmlsZVVybCA9PSBudWxsID8gYC9tb2RhbC8ke2ltYWdlTmFtZX0uc3ZnYCA6IGltYWdlRmlsZVVybH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCIgaC00MCB3LTQwIHAtNCBib3JkZXItYiBib3JkZXItcHJpbWFyeVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHktNCBweC04XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+e308L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgICAgPEJvdW5jZUxvYWRlckNvbXBvbmVudCAvPlxyXG4gICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvTmF2YmFyVGVtcGxhdGU+XHJcbiAgICA8Lz5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGdldFNlcnZlclNpZGVQcm9wcyA9IGFzeW5jIChjb250ZXh0KSA9PiB7XHJcbiAgY29uc3QgY29va2llcyA9IGF3YWl0IGNvbnRleHQucmVxLmhlYWRlcnMuY29va2llO1xyXG4gIGNvbnN0IHBhcnNlZENvb2tpZXMgPSBjb29raWUucGFyc2UoY29va2llcyk7XHJcbiAgY29uc3QgcHJvamVjdHMgPSBbXTtcclxuICBsZXQgcmVmID0gZGIuY29sbGVjdGlvbigncHJvamVjdHMnKTtcclxuXHJcbiAgY29uc3Qgc25hcHNob3QgPSBhd2FpdCByZWYuZ2V0KCk7XHJcblxyXG4gIHNuYXBzaG90LmZvckVhY2goKGRvYykgPT4ge1xyXG4gICAgY29uc3QgZGF0YSA9IGRvYy5kYXRhKCk7XHJcbiAgICBkYXRhLnByb2plY3RVc2Vycy5tYXAoKHVzZXIpID0+IHtcclxuICAgICAgaWYgKHVzZXIudXNlclVpZCA9PT0gcGFyc2VkQ29va2llcy51aWQpIHtcclxuICAgICAgICBwcm9qZWN0cy5wdXNoKHsgLi4uZGF0YSB9KTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfSk7XHJcbiAgcmV0dXJuIHtcclxuICAgIHByb3BzOiB7IHByb2plY3RzIH0sXHJcbiAgfTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFByb2plY3RzTWFuYWdlcjtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==