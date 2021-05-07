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
                  projectDescription = _ref2.projectDescription;
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
                  style: {
                    maxHeight: 320
                  },
                  className: "py-4 px-8",
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                    children: projectName
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 144,
                    columnNumber: 27
                  }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                    className: "mt-2 text-sm text-gray",
                    children: projectDescription
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 145,
                    columnNumber: 27
                  }, _this)]
                }, void 0, true, {
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
              lineNumber: 152,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvZGFzaGJvYXJkL3Byb2plY3RzL2luZGV4LmpzIl0sIm5hbWVzIjpbIlByb2plY3RzTWFuYWdlciIsInByb2plY3RzIiwiY29uc29sZSIsImxvZyIsInJvdXRlciIsInVzZVJvdXRlciIsImNvbnRhaW5lclJlZiIsInVzZVJlZiIsInVzZUF1dGgiLCJjdXJyZW50VXNlciIsIm9uUHJvamVjdENyZWF0ZSIsImUiLCJwcmV2ZW50RGVmYXVsdCIsImdzYXAiLCJ0byIsImN1cnJlbnQiLCJhdXRvQWxwaGEiLCJkdXJhdGlvbiIsImVhc2UiLCJQb3dlcjQiLCJlYXNlT3V0IiwicHVzaCIsInVzZVN0YXRlIiwiYWN0aXZlQ2xhc3MiLCJzZXRBY3RpdmVDbGFzcyIsImNob29zZUNsYXNzZXNDbGljayIsImluZGV4IiwibWVudURvdHMiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwibGVuZ3RoIiwibWFwIiwiaW1hZ2VOYW1lIiwiaW1hZ2VGaWxlVXJsIiwicHJvamVjdE5hbWUiLCJwcm9qZWN0RGVzY3JpcHRpb24iLCJtYXhIZWlnaHQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxlQUFlLEdBQUcsU0FBbEJBLGVBQWtCLE9BQWtCO0FBQUE7O0FBQUEsTUFBZkMsUUFBZSxRQUFmQSxRQUFlO0FBQ3hDQyxTQUFPLENBQUNDLEdBQVIsQ0FBWUYsUUFBWjtBQUNBLE1BQU1HLE1BQU0sR0FBR0MsNkRBQVMsRUFBeEI7QUFDQSxNQUFNQyxZQUFZLEdBQUdDLG9EQUFNLEVBQTNCOztBQUh3QyxpQkFJaEJDLDREQUFPLEVBSlM7QUFBQSxNQUloQ0MsV0FKZ0MsWUFJaENBLFdBSmdDOztBQUt4Q1AsU0FBTyxDQUFDQyxHQUFSLENBQVlNLFdBQVo7O0FBRUEsTUFBTUMsZUFBZSxHQUFH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L0NGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFERjtBQXNERCxhQXZERCxDQUpLLGdCQThEUCxxRUFBQyxnRUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBL0RKO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBbkNGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBUEY7QUFBQSxrQkFERjtBQW9IRCxDQW5KRDs7R0FBTW5DLGU7VUFFV0sscUQsRUFFU0csb0Q7OztLQUpwQlIsZTs7QUEwS1MsaUtBQUFBLGVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvZGFzaGJvYXJkL3Byb2plY3RzLjgyODUyMDRhYTA1ZGRjYjY3N2NkLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlUmVmLCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IGNvb2tpZSBmcm9tICdjb29raWUnO1xyXG5pbXBvcnQgeyBkYiB9IGZyb20gJy4uLy4uLy4uL2xpYi9maXJlYmFzZS1hZG1pbic7XHJcbmltcG9ydCBUaXBweU1vbnN0ZXIgZnJvbSAnLi4vLi4vLi4vY29tcG9uZW50cy9kYXNoYm9hcmQvVGlwcHknO1xyXG5pbXBvcnQgTmF2YmFyVGVtcGxhdGUgZnJvbSAnLi4vLi4vLi4vY29tcG9uZW50cy9kYXNoYm9hcmQvTmF2YmFyVGVtcGxhdGUnO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XHJcbmltcG9ydCBnc2FwLCB7IFBvd2VyNCB9IGZyb20gJ2dzYXAnO1xyXG5pbXBvcnQgeyB1c2VBdXRoIH0gZnJvbSAnLi4vLi4vLi4vbGliL25ld0F1dGgnO1xyXG5pbXBvcnQgQm91bmNlTG9hZGVyQ29tcG9uZW50IGZyb20gJy4uLy4uLy4uL2NvbXBvbmVudHMvQm91bmNlTG9hZGVyJztcclxuaW1wb3J0IEVtcHR5U3RhcnR1cCBmcm9tICcuLi8uLi8uLi9jb21wb25lbnRzL2Rhc2hib2FyZC9zdGFydHVwL0VtcHR5U3RhcnR1cCc7XHJcbmltcG9ydCBTdGFydHVwU3VjY2VzcyBmcm9tICcuLi8uLi8uLi9jb21wb25lbnRzL2Rhc2hib2FyZC9zdGFydHVwL1N0YXJ0dXBTdWNjZXNzJztcclxuXHJcbmNvbnN0IFByb2plY3RzTWFuYWdlciA9ICh7IHByb2plY3RzIH0pID0+IHtcclxuICBjb25zb2xlLmxvZyhwcm9qZWN0cyk7XHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcbiAgY29uc3QgY29udGFpbmVyUmVmID0gdXNlUmVmKCk7XHJcbiAgY29uc3QgeyBjdXJyZW50VXNlciB9ID0gdXNlQXV0aCgpO1xyXG4gIGNvbnNvbGUubG9nKGN1cnJlbnRVc2VyKTtcclxuXHJcbiAgY29uc3Qgb25Qcm9qZWN0Q3JlYXRlID0gKGUpID0+IHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIGdzYXAudG8oY29udGFpbmVyUmVmLmN1cnJlbnQsIHtcclxuICAgICAgYXV0b0FscGhhOiAwLFxyXG4gICAgICBkdXJhdGlvbjogMSxcclxuICAgICAgZWFzZTogUG93ZXI0LmVhc2VPdXQsXHJcbiAgICB9KTtcclxuICAgIC8vIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgcm91dGVyLnB1c2goJy9kYXNoYm9hcmQvcHJvamVjdHMvbmV3LXN0YXJ0dXAnKTtcclxuICAgIC8vIH0sIDEyMDApO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IFthY3RpdmVDbGFzcywgc2V0QWN0aXZlQ2xhc3NdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuICBjb25zdCBjaG9vc2VDbGFzc2VzQ2xpY2sgPSAoaW5kZXgpID0+IHtcclxuICAgIGNvbnN0IG1lbnVEb3RzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYG1lbnUke2luZGV4fWApO1xyXG4gICAgaWYgKGFjdGl2ZUNsYXNzKSB7XHJcbiAgICAgIGdzYXAudG8obWVudURvdHMsIHsgYXV0b0FscGhhOiAwIH0pO1xyXG4gICAgICBzZXRBY3RpdmVDbGFzcyhmYWxzZSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBnc2FwLnRvKG1lbnVEb3RzLCB7IGF1dG9BbHBoYTogMSB9KTtcclxuICAgICAgc2V0QWN0aXZlQ2xhc3ModHJ1ZSk7XHJcbiAgICB9XHJcbiAgfTtcclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPFRpcHB5TW9uc3RlclxyXG4gICAgICAgIHN0YXJ0dXBzXHJcbiAgICAgICAgY29udGVudENsYXNzPVwiaC0zNiB3LTgwIHNoYWRvdy1sZyByb3VuZGVkLTJ4bCBiZy1wcmltYXJ5IGZsZXgganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyXCJcclxuICAgICAgICBjb250ZW50VGV4dD1cIlRoaXMgaXMgYSBwbGFjZSB3aGVyZSBtYWdpY2FsIHRoaW5ncyBoYXBwZW4gXCJcclxuICAgICAgICBjb250ZW50VGV4dDE9XCIgSnVzdCBzdGFydCBjcmVhdGluZyB5b3VyIHN0YXJ0dXAgYW5kIGJyaW5nIHlvdXIgaWRlYSBpbnRvIHJlYWxpdHkuIE9uY2UgeW91J3ZlIGRvbmUgdGhhdCwgeW91IGNhbiBtYW5hZ2UgaXQgZnJvbSB0aGUgbWFpbiBwYW5lbC4gRmVlbCBmcmVlIHRvIGVkaXQsIHNhdmUgb3IgZGVsZXRlIHlvdXIgaWRlYVwiXHJcbiAgICAgIC8+XHJcbiAgICAgIDxOYXZiYXJUZW1wbGF0ZT5cclxuICAgICAgICA8ZGl2IHJlZj17Y29udGFpbmVyUmVmfSBjbGFzc05hbWU9XCJtaW4taC1zY3JlZW4gdy1mdWxsIHJlbGF0aXZlIGZsZXggZmxleC1jb2wgaXRlbXMtY2VudGVyIHRleHQtcHJpbWFyeWRhcmtcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsIHNtOm1heC13LXNtQ29udGFpbmVyIG1kOm1heC13LW1kQ29udGFpbmVyIGxnOm1heC13LWxnQ29udGFpbmVyIHhsOm1heC13LXhsQ29udGFpbmVyIDJ4bDptYXgtdy14eGxDb250YWluZXIgbm9ybWFsOm1heC13LW5vcm1hbENvbnRhaW5lciByZWxhdGl2ZSBtdC0xMlwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQgZ3JpZC1jb2xzLTIgZ3JpZC1yb3dzLTEgZ3JpZC1mbG93LWNvbFwiPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgIDxzdmdcclxuICAgICAgICAgICAgICAgICAgaGVpZ2h0PVwiMzBcIlxyXG4gICAgICAgICAgICAgICAgICB3aWR0aD1cIjMwXCJcclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZmlsbC1jdXJyZW50IHRleHQtcHJpbWFyeSBkYXJrOnRleHQtcHJpbWFyeWRhcmtcIlxyXG4gICAgICAgICAgICAgICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcclxuICAgICAgICAgICAgICAgICAgdmlld0JveD1cIjAgMCAxMjggMTI4XCJcclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgPHRpdGxlPkxhbmRpbmcgU3VjY2VzczwvdGl0bGU+XHJcbiAgICAgICAgICAgICAgICAgIDxnIGlkPVwiTGFuZGluZ19TdWNjZXNzXCIgZGF0YS1uYW1lPVwiTGFuZGluZyBTdWNjZXNzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHBhdGhcclxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImNscy0xXCJcclxuICAgICAgICAgICAgICAgICAgICAgIGQ9XCJNMTA5LjMsOTAuMUE0Niw0NiwwLDAsMCw2NSwzNlYyMC4wOGMxLjc4LS42Miw3LjIxLTIuMTQsMTIuNTcuMjNhMTkuMzMsMTkuMzMsMCwwLDAsMTQuODIsMGMuODctLjM4LjYxLjMxLjYxLTE3LjkzYTEsMSwwLDAsMC0xLjQzLS45M2MtLjA3LDAtNi42OSwyLjg3LTEzLjE4LDBBMTkuNDEsMTkuNDEsMCwwLDAsNjUsLjkzLDEsMSwwLDAsMCw2MywxVjM2YTQ1Ljg2LDQ1Ljg2LDAsMCwwLTI4LjY2LDEwLjhDMTYuMTgsNDAuNDgsNCw0MCwuNzksNDUuNTEtMi4yOSw1MC44NiwzLjk0LDU5LjMsMTAsNjUuNjhBMTEsMTEsMCwwLDAsMTgsODNjLjgxLDM4LjQxLDQ2LjA4LDU5LjIsNzUuNjYsMzQuMjEsOC41MywzLDI5LDkuMTUsMzMuNTUsMS4zMUMxMzAuMzksMTEzLDEyMy44NiwxMDIuNjUsMTA5LjMsOTAuMVpNNzcuNTksMy4zMUExOS4zOSwxOS4zOSwwLDAsMCw5MSwzLjgzVjE4LjY4Yy0xLjc5LjYyLTcuMjIsMi4xMy0xMi41Ny0uMjNBMTkuMTksMTkuMTksMCwwLDAsNjUsMTcuOTNWMy4wOEM2Ni44MSwyLjQ2LDcyLjI0LDEsNzcuNTksMy4zMVpNNjUsNDV2LTdjMzkuNjkuOTEsNTgsNTAuMjcsMjguMjEsNzYuODFDNzEuMzIsMTA3LDQ2LDkyLjY2LDI3Ljc3LDc4LjY0YTExLDExLDAsMCwwLTMuMi0xNi4xM0E0My44OCw0My44OCwwLDAsMSw2MywzOC4wNlY0NUExLDEsMCwwLDAsNjUsNDVaTTMyLjU1LDQ4LjM2YTQ2LjIxLDQ2LjIxLDAsMCwwLTkuODMsMTMuMjgsMTAuOTMsMTAuOTMsMCwwLDAtMTEuNCwyLjQ3Qy04LjM5LDQzLjIzLDUuMjMsMzkuMDgsMzIuNTUsNDguMzZaTTEwLDcyYTksOSwwLDEsMSw5LDlBOSw5LDAsMCwxLDEwLDcyWm0xMCwxMWExMSwxMSwwLDAsMCw2LjM0LTIuODJjMTguNDUsMTQuMjEsNDMuNDUsMjguMzUsNjUuMDUsMzYuMjJDNjMsMTM5LjE2LDIwLjgzLDExOS4xLDIwLjA1LDgzWm0xMDUuNCwzNC41Yy0yLjUxLDQuMzUtMTQsMy42Mi0zMC0xLjg1YTQ1LjYxLDQ1LjYxLDAsMCwwLDEzLjQyLTIzLjIxQzEyMS41OSwxMDMuNTgsMTI4LDExMy4xMiwxMjUuNDUsMTE3LjQ3WlwiXHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgPC9nPlxyXG4gICAgICAgICAgICAgICAgPC9zdmc+XHJcbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJzZWxmLWVuZCB0ZXh0LTJ4bCBwbC0yIGRhcms6dGV4dC1iYWNrZ3JvdW5kXCI+U3RhcnR1cHM8L3A+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktZW5kXCI+XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eyhlKSA9PiBvblByb2plY3RDcmVhdGUoZSl9XHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImhvdmVyOmJnLXByaW1hcnkgaG92ZXI6dGV4dC13aGl0ZSBkYXJrOmhvdmVyOmJnLXByaW1hcnlkYXJrIGRhcms6aG92ZXI6dGV4dC1iYWNrZ3JvdW5kIGZvY3VzOm91dGxpbmUtbm9uZSBib3JkZXIgYm9yZGVyLXByaW1hcnkgdGV4dC1wcmltYXJ5IHRleHQtYmFzZSBmb250LWxpZ2h0IHB5LTIgcHgtNiByb3VuZGVkLTJ4bCBkYXJrOnRleHQtcHJpbWFyeWRhcmsgZGFyazpib3JkZXItcHJpbWFyeWRhcmtcIlxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICBOZXcgc3RhcnR1cFxyXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJ0ZXh0LXNlY29uZGFyeSB0ZXh0LW1kIHRleHQtZ3JheVwiPkJyaW5nIHlvdXIgaWRlYSBpbnRvIHJlYWxpdHk8L2gxPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LWxnIG10LTEwIC1tYi02IGRhcms6dGV4dC1iYWNrZ3JvdW5kXCI+SWRlYXMgeW91IGludmVudGVkPC9wPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGwgZ3JpZCBzbTpncmlkLWNvbHMtMSBtZDpncmlkLWNvbHMtMmZyIGxnOmdyaWQtY29scy0zZnIgMnhsOmdyaWQtY29scy00ZnIgZ2FwLTggYm9yZGVyLXItNiByb3VuZGVkLTJ4bCBiZy13aGl0ZSBtdC04IG1iLTggZGFyazpiZy1iYWNrZ3JvdW5kIHAtOCB0ZXh0LWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgIHtwcm9qZWN0cyA/IChcclxuICAgICAgICAgICAgICAgIHByb2plY3RzLmxlbmd0aCA9PSAwID8gKFxyXG4gICAgICAgICAgICAgICAgICA8RW1wdHlTdGFydHVwIG9uUHJvamVjdENyZWF0ZT17b25Qcm9qZWN0Q3JlYXRlfSAvPlxyXG4gICAgICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICAgICAgcHJvamVjdHMubWFwKCh7IGltYWdlTmFtZSwgaW1hZ2VGaWxlVXJsLCBwcm9qZWN0TmFtZSwgcHJvamVjdERlc2NyaXB0aW9uIH0sIGluZGV4KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2hhZG93IHJvdW5kZWQtMnhsIGZsZXggZmxleC13cmFwIGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlciBmbGV4LWNvbCBob3ZlcjpzaGFkb3ctbGcgdHJhbnNmb3JtIGhvdmVyOnNjYWxlLTEwNSBob3ZlcjotdHJhbnNsYXRlLXktMiBob3ZlcjotdHJhbnNsYXRlLXgtMiB0cmFuc2l0aW9uIGR1cmF0aW9uLTUwMCBlYXNlLWluLW91dFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7LyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBEUk9QRE9XTiBTVEFSVCAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL31cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWxhdGl2ZSBpbmxpbmUtYmxvY2sgdGV4dC1yaWdodCB3LTQvNSB0b3AtNCByaWdodC0yXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gY2hvb3NlQ2xhc3Nlc0NsaWNrKGluZGV4KX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz1cIi9kb3RzLW1lbnUyLnN2Z1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9ezI2fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg9ezI2fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiY3Vyc29yLXBvaW50ZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9e2BtZW51JHtpbmRleH1gfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwib3JpZ2luLXRvcC1yaWdodCBhYnNvbHV0ZSBsZWZ0LTEvMiB0cmFuc2Zvcm0gLXRyYW5zbGF0ZS14LTEvMiB3LTQ0IGxnOnctNDggc2hhZG93LXhsIGJnLXdoaXRlIGZvY3VzOm91dGxpbmUtbm9uZSBpbnZpc2libGUgcm91bmRlZC0yeGxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHQtMSB0ZXh0LWxlZnRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0cmFuc2l0aW9uIGR1cmF0aW9uLTUwMCBlYXNlLWluLW91dCBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWJldHdlZW4gaG92ZXI6YmctcHJpbWFyeVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgIG9uQ2xpY2s9eyhlKSA9PiBvblByb2plY3RFZGl0KGUsIGltYWdlKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhyZWY9XCIjXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJsb2NrIHB4LTQgcHktMiAyeGw6cHktMyB0ZXh0LXNtIHRleHQtcHJpbWFyeWRhcmsgdHJhbnNpdGlvbiBkdXJhdGlvbi01MDAgZWFzZS1pbi1vdXQgaG92ZXI6dGV4dC1iYWNrZ3JvdW5kXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBFZGl0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cIm1yLTMgZmxleCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXIgcmVsYXRpdmUgYm90dG9tLTFcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiL2dpZnMvd2hhbGUuZ2lmXCIgaGVpZ2h0PXszMH0gd2lkdGg9ezMwfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidHJhbnNpdGlvbiBkdXJhdGlvbi01MDAgZWFzZS1pbi1vdXQgZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1iZXR3ZWVuIGhvdmVyOmJnLXByaW1hcnkgcm91bmRlZC1ibC0yeGwgcm91bmRlZC1ici0yeGxcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICBvbkNsaWNrPXsoZSkgPT4gb25Qcm9qZWN0RGVsZXRlKGUsIGltYWdlLnByb2plY3RJZCl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBocmVmPVwiI1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJibG9jayBweC00IHB5LTIgMnhsOnB5LTMgdGV4dC1zbSB0ZXh0LXByaW1hcnlkYXJrIHRyYW5zaXRpb24gZHVyYXRpb24tNTAwIGVhc2UtaW4tb3V0IGhvdmVyOnRleHQtYmFja2dyb3VuZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgUmVtb3ZlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cIm1yLTMgZmxleCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXIgcmVsYXRpdmUgYm90dG9tLTFcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiL2dpZnMvYm9tYi5naWZcIiBoZWlnaHQ9ezMwfSB3aWR0aD17MzB9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM9e2ltYWdlRmlsZVVybCA9PSBudWxsID8gYC9tb2RhbC8ke2ltYWdlTmFtZX0uc3ZnYCA6IGltYWdlRmlsZVVybH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCIgaC00MCB3LTQwIHAtNCBib3JkZXItYiBib3JkZXItcHJpbWFyeVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgbWF4SGVpZ2h0OiAzMjAgfX0gY2xhc3NOYW1lPVwicHktNCBweC04XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+e3Byb2plY3ROYW1lfTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJtdC0yIHRleHQtc20gdGV4dC1ncmF5XCI+e3Byb2plY3REZXNjcmlwdGlvbn08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgICAgPEJvdW5jZUxvYWRlckNvbXBvbmVudCAvPlxyXG4gICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvTmF2YmFyVGVtcGxhdGU+XHJcbiAgICA8Lz5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGdldFNlcnZlclNpZGVQcm9wcyA9IGFzeW5jIChjb250ZXh0KSA9PiB7XHJcbiAgY29uc3QgY29va2llcyA9IGF3YWl0IGNvbnRleHQucmVxLmhlYWRlcnMuY29va2llO1xyXG4gIGNvbnN0IHBhcnNlZENvb2tpZXMgPSBjb29raWUucGFyc2UoY29va2llcyk7XHJcbiAgY29uc3QgcHJvamVjdHMgPSBbXTtcclxuICBsZXQgcmVmID0gZGIuY29sbGVjdGlvbigncHJvamVjdHMnKTtcclxuXHJcbiAgY29uc3Qgc25hcHNob3QgPSBhd2FpdCByZWYuZ2V0KCk7XHJcblxyXG4gIHNuYXBzaG90LmZvckVhY2goKGRvYykgPT4ge1xyXG4gICAgY29uc3QgZGF0YSA9IGRvYy5kYXRhKCk7XHJcbiAgICBkYXRhLnByb2plY3RVc2Vycy5tYXAoKHVzZXIpID0+IHtcclxuICAgICAgaWYgKHVzZXIudXNlclVpZCA9PT0gcGFyc2VkQ29va2llcy51aWQpIHtcclxuICAgICAgICBwcm9qZWN0cy5wdXNoKHsgLi4uZGF0YSB9KTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfSk7XHJcbiAgcmV0dXJuIHtcclxuICAgIHByb3BzOiB7IHByb2plY3RzIH0sXHJcbiAgfTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFByb2plY3RzTWFuYWdlcjtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==