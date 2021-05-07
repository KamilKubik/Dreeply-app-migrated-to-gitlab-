webpackHotUpdate_N_E("pages/dashboard/projects",{

/***/ "./pages/dashboard/projects/index.js":
/*!*******************************************!*\
  !*** ./pages/dashboard/projects/index.js ***!
  \*******************************************/
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
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! js-cookie */ "./node_modules/js-cookie/src/js.cookie.js");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var cookie__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! cookie */ "./node_modules/cookie/index.js");
/* harmony import */ var cookie__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(cookie__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _lib_firebase__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../lib/firebase */ "./lib/firebase.js");
/* harmony import */ var _components_dashboard_Tippy__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../components/dashboard/Tippy */ "./components/dashboard/Tippy.js");
/* harmony import */ var _components_dashboard_NavbarTemplate__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../components/dashboard/NavbarTemplate */ "./components/dashboard/NavbarTemplate.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! gsap */ "./node_modules/gsap/index.js");
/* harmony import */ var _lib_newAuth__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../lib/newAuth */ "./lib/newAuth.js");
/* harmony import */ var _components_BounceLoader__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../components/BounceLoader */ "./components/BounceLoader.js");
/* harmony import */ var _components_dashboard_startup_EmptyStartup__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../components/dashboard/startup/EmptyStartup */ "./components/dashboard/startup/EmptyStartup.js");
/* harmony import */ var _components_dashboard_startup_StartupSuccess__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../components/dashboard/startup/StartupSuccess */ "./components/dashboard/startup/StartupSuccess.js");
/* harmony import */ var _components_dashboard_MembersCode__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../../components/dashboard/MembersCode */ "./components/dashboard/MembersCode.js");






var _jsxFileName = "C:\\off-saas\\pages\\dashboard\\projects\\index.js",
    _this = undefined,
    _s = $RefreshSig$();















var ProjectsManager = function ProjectsManager() {
  _s();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])([]),
      projects = _useState[0],
      setProjects = _useState[1];

  Object(react__WEBPACK_IMPORTED_MODULE_4__["useEffect"])( /*#__PURE__*/Object(C_off_saas_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/C_off_saas_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee() {
    var projectsArray, userUid;
    return C_off_saas_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            projectsArray = [];
            userUid = js_cookie__WEBPACK_IMPORTED_MODULE_5___default.a.get('uid'); // let ref = db.collection('projects');
            // const snapshot = await ref.get();
            // snapshot.forEach((doc) => {
            //   const data = doc.data();
            //   data.projectUsers.map((user) => {
            //     if (user.userUid === userUid) {
            //       projectsArray.push({ ...data });
            //     }
            //   });
            //   setProjects(projectsArray);
            // });

          case 2:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  })), []);
  console.log(projects);
  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_10__["useRouter"])();
  var containerRef = Object(react__WEBPACK_IMPORTED_MODULE_4__["useRef"])();

  var _useAuth = Object(_lib_newAuth__WEBPACK_IMPORTED_MODULE_12__["useAuth"])(),
      currentUser = _useAuth.currentUser;

  console.log(currentUser);

  var onProjectCreate = function onProjectCreate(e) {
    e.preventDefault();
    gsap__WEBPACK_IMPORTED_MODULE_11__["default"].to(containerRef.current, {
      autoAlpha: 0,
      duration: 1,
      ease: gsap__WEBPACK_IMPORTED_MODULE_11__["Power4"].easeOut
    }); // setTimeout(() => {

    router.push('/dashboard/projects/new-startup'); // }, 1200);
  };

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(false),
      activeClass = _useState2[0],
      setActiveClass = _useState2[1];

  var chooseClassesClick = function chooseClassesClick(index) {
    var menuDots = document.getElementById("menu".concat(index));

    if (activeClass) {
      gsap__WEBPACK_IMPORTED_MODULE_11__["default"].to(menuDots, {
        autoAlpha: 0
      });
      setActiveClass(false);
    } else {
      gsap__WEBPACK_IMPORTED_MODULE_11__["default"].to(menuDots, {
        autoAlpha: 1
      });
      setActiveClass(true);
    }
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_dashboard_Tippy__WEBPACK_IMPORTED_MODULE_8__["default"], {
      startups: true,
      contentClass: "h-36 w-80 shadow-lg rounded-2xl bg-primary flex justify-center items-center",
      contentText: "This is a place where magical things happen ",
      contentText1: " Just start creating your startup and bring your idea into reality. Once you've done that, you can manage it from the main panel. Feel free to edit, save or delete your idea"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_dashboard_NavbarTemplate__WEBPACK_IMPORTED_MODULE_9__["default"], {
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
                  lineNumber: 83,
                  columnNumber: 19
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("g", {
                  id: "Landing_Success",
                  "data-name": "Landing Success",
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
                    className: "cls-1",
                    d: "M109.3,90.1A46,46,0,0,0,65,36V20.08c1.78-.62,7.21-2.14,12.57.23a19.33,19.33,0,0,0,14.82,0c.87-.38.61.31.61-17.93a1,1,0,0,0-1.43-.93c-.07,0-6.69,2.87-13.18,0A19.41,19.41,0,0,0,65,.93,1,1,0,0,0,63,1V36a45.86,45.86,0,0,0-28.66,10.8C16.18,40.48,4,40,.79,45.51-2.29,50.86,3.94,59.3,10,65.68A11,11,0,0,0,18,83c.81,38.41,46.08,59.2,75.66,34.21,8.53,3,29,9.15,33.55,1.31C130.39,113,123.86,102.65,109.3,90.1ZM77.59,3.31A19.39,19.39,0,0,0,91,3.83V18.68c-1.79.62-7.22,2.13-12.57-.23A19.19,19.19,0,0,0,65,17.93V3.08C66.81,2.46,72.24,1,77.59,3.31ZM65,45v-7c39.69.91,58,50.27,28.21,76.81C71.32,107,46,92.66,27.77,78.64a11,11,0,0,0-3.2-16.13A43.88,43.88,0,0,1,63,38.06V45A1,1,0,0,0,65,45ZM32.55,48.36a46.21,46.21,0,0,0-9.83,13.28,10.93,10.93,0,0,0-11.4,2.47C-8.39,43.23,5.23,39.08,32.55,48.36ZM10,72a9,9,0,1,1,9,9A9,9,0,0,1,10,72Zm10,11a11,11,0,0,0,6.34-2.82c18.45,14.21,43.45,28.35,65.05,36.22C63,139.16,20.83,119.1,20.05,83Zm105.4,34.5c-2.51,4.35-14,3.62-30-1.85a45.61,45.61,0,0,0,13.42-23.21C121.59,103.58,128,113.12,125.45,117.47Z"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 85,
                    columnNumber: 21
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 84,
                  columnNumber: 19
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 76,
                columnNumber: 17
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                className: "self-end text-2xl pl-2 dark:text-background",
                children: "Startups"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 91,
                columnNumber: 17
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 75,
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
                lineNumber: 94,
                columnNumber: 17
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 93,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 74,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
              className: "text-secondary text-md text-gray",
              children: "Bring your idea into reality"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 103,
              columnNumber: 15
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 102,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
              className: "text-lg mt-10 -mb-6 dark:text-background",
              children: "Ideas you invented"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 106,
              columnNumber: 15
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 105,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "w-full grid sm:grid-cols-1 md:grid-cols-2fr lg:grid-cols-3fr 2xl:grid-cols-4fr gap-8 border-r-6 rounded-2xl bg-white mt-8 mb-8 dark:bg-background p-8 text-center",
            children: projects ? projects.length == 0 ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_dashboard_startup_EmptyStartup__WEBPACK_IMPORTED_MODULE_14__["default"], {
              onProjectCreate: onProjectCreate
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 111,
              columnNumber: 19
            }, _this) : projects.map(function (_ref2, index) {
              var imageName = _ref2.imageName,
                  imageFileUrl = _ref2.imageFileUrl,
                  projectName = _ref2.projectName,
                  projectDescription = _ref2.projectDescription,
                  projectId = _ref2.projectId;
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
                    lineNumber: 118,
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
                          lineNumber: 131,
                          columnNumber: 33
                        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                          className: "mr-3 flex justify-center items-center relative bottom-1",
                          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
                            src: "/gifs/whale.gif",
                            height: 30,
                            width: 30
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 139,
                            columnNumber: 35
                          }, _this)
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 138,
                          columnNumber: 33
                        }, _this)]
                      }, void 0, true, {
                        fileName: _jsxFileName,
                        lineNumber: 130,
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
                          lineNumber: 143,
                          columnNumber: 33
                        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                          className: "mr-3 flex justify-center items-center relative bottom-1",
                          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
                            src: "/gifs/bomb.gif",
                            height: 30,
                            width: 30
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 151,
                            columnNumber: 35
                          }, _this)
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 150,
                          columnNumber: 33
                        }, _this)]
                      }, void 0, true, {
                        fileName: _jsxFileName,
                        lineNumber: 142,
                        columnNumber: 31
                      }, _this)]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 129,
                      columnNumber: 29
                    }, _this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 125,
                    columnNumber: 27
                  }, _this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 117,
                  columnNumber: 25
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
                  src: imageFileUrl == null ? "/modal/".concat(imageName, ".svg") : imageFileUrl,
                  className: " h-40 w-40 p-4 border-b border-primary"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 158,
                  columnNumber: 25
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                  style: {
                    height: 180
                  },
                  className: " overflow-scroll mt-2",
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
                    className: "bg-white text-center",
                    value: projectName
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 163,
                    columnNumber: 27
                  }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                    className: "text-center mt-1 text-sm text-gray",
                    children: projectDescription
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 164,
                    columnNumber: 27
                  }, _this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 162,
                  columnNumber: 25
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 115,
                columnNumber: 23
              }, _this);
            }) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_BounceLoader__WEBPACK_IMPORTED_MODULE_13__["default"], {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 171,
              columnNumber: 17
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 108,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_dashboard_MembersCode__WEBPACK_IMPORTED_MODULE_16__["default"], {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 174,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 73,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 72,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 7
    }, _this)]
  }, void 0, true);
}; // export const getServerSideProps = async (context) => {
//   const cookies = await context.req.headers.cookie;
//   const parsedCookies = cookie.parse(cookies);
//   const projects = [];
//   let ref = db.collection('projects');
//   const snapshot = await ref.get();
//   snapshot.forEach((doc) => {
//     const data = doc.data();
//     data.projectUsers.map((user) => {
//       if (user.userUid === parsedCookies.uid) {
//         projects.push({ ...data });
//       }
//     });
//   });
//   return {
//     props: { projects },
//   };
// };


_s(ProjectsManager, "1QTaLZN9ApyXfrUSTE9TP8pvb2k=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_10__["useRouter"], _lib_newAuth__WEBPACK_IMPORTED_MODULE_12__["useAuth"]];
});

_c = ProjectsManager;
/* harmony default export */ __webpack_exports__["default"] = (_c2 = Object(babel_plugin_superjson_next_tools__WEBPACK_IMPORTED_MODULE_3__["withSuperJSONPage"])(ProjectsManager));

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvZGFzaGJvYXJkL3Byb2plY3RzL2luZGV4LmpzIl0sIm5hbWVzIjpbIlByb2plY3RzTWFuYWdlciIsInVzZVN0YXRlIiwicHJvamVjdHMiLCJzZXRQcm9qZWN0cyIsInVzZUVmZmVjdCIsInByb2plY3RzQXJyYXkiLCJ1c2VyVWlkIiwiQ29va2llcyIsImdldCIsImNvbnNvbGUiLCJsb2ciLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJjb250YWluZXJSZWYiLCJ1c2VSZWYiLCJ1c2VBdXRoIiwiY3VycmVudFVzZXIiLCJvblByb2plY3RDcmVhdGUiLCJlIiwicHJldmVudERlZmF1bHQiLCJnc2FwIiwidG8iLCJjdXJyZW50IiwiYXV0b0FscGhhIiwiZHVyYXRpb24iLCJlYXNlIiwiUG93ZXI0IiwiZWFzZU91dCIsInB1c2giLCJhY3RpdmVDbGFzcyIsInNldEFjdGl2ZUNsYXNzIiwiY2hvb3NlQ2xhc3Nlc0NsaWNrIiwiaW5kZXgiLCJtZW51RG90cyIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJsZW5ndGgiLCJtYXAiLCJpbWFnZU5hbWUiLCJpbWFnZUZpbGVVcmwiLCJwcm9qZWN0TmFtZSIsInByb2plY3REZXNjcmlwdGlvbiIsInByb2plY3RJZCIsImhlaWdodCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsZUFBZSxHQUFHLFNBQWxCQSxlQUFrQixHQUFNO0FBQUE7O0FBQUEsa0JBQ0lDLHNEQUFRLENBQUMsRUFBRCxDQURaO0FBQUEsTUFDckJDLFFBRHFCO0FBQUEsTUFDWEMsV0FEVzs7QUFFNUJDLHlEQUFTLGtSQUFDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNGQyx5QkFERSxHQUNjLEVBRGQ7QUFFRkMsbUJBRkUsR0FFUUMsZ0RBQU8sQ0FBQ0MsR0FBUixDQUFZLEtBQVosQ0FGUixFQUdSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBYlE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsR0FBRCxJQWNOLEVBZE0sQ0FBVDtBQWdCQUMsU0FBTyxDQUFDQyxHQUFSLENBQVlSLFFBQVo7QUFDQSxNQUFNUyxNQUFNLEdBQUdDLDhEQUFTLEVBQXhCO0FBQ0EsTUFBTUMsWUFBWSxHQUFHQyxvREFBTSxFQUEzQjs7QUFwQjRCLGlCQXFCSkMsNkRBQU8sRUFyQkg7QUFBQSxNQXFCcEJDLFdBckJvQixZQXFCcEJBLFdBckJvQjs7QUFzQjVCUCxTQUFPLENBQUNDLEdBQVIsQ0FBWU0sV0FBWjs7QUFFQSxNQUFNQyxlQUFlLEdBQUcsU0FBbEJBLGVBQWtCLENBQUNDLENBQUQsRUFBTztBQUM3QkEsS0FBQyxDQUFDQyxjQUFGO0FBQ0FDLGlEQUFJLENBQUNDLEVBQUwsQ0FBUVIsWUFBWSxDQUFDUyxPQUFyQixFQUE4QjtBQUM1QkMsZUFBUyxFQUFFLENBRGlCO0FBRTVCQyxjQUFRLEVBQUUsQ0FGa0I7QUFHNUJDLFVBQUksRUFBRUMsNENBQU0sQ0FBQ0M7QUFIZSxLQUE5QixFQUY2QixDQU83Qjs7QUFDQWhCLFVBQU0sQ0FBQ2lCLElBQVAsQ0FBWSxpQ0FBWixFQVI2QixDQVM3QjtBQUNELEdBVkQ7O0FBeEI0QixtQkFvQ1UzQixzREFBUSxDQUFDLEtBQUQsQ0FwQ2xCO0FBQUEsTUFvQ3JCNEIsV0FwQ3FCO0FBQUEsTUFvQ1JDLGNBcENROztBQXNDNUIsTUFBTUMsa0JBQWtCLEdBQUcsU0FBckJBLGtCQUFxQixDQUFDQyxLQUFELEVBQVc7QUFDcEMsUUFBTUMsUUFBUSxHQUFHQyxRQUFRLENBQUNDLGNBQVQsZUFBK0JILEtBQS9CLEVBQWpCOztBQUNBLFFBQUlILFdBQUosRUFBaUI7QUFDZlQsbURBQUksQ0FBQ0MsRUFBTCxDQUFRWSxRQUFSLEVBQWtCO0FBQUVWLGlCQUFTLEVBQUU7QUFBYixPQUFsQjtBQUNBTyxvQkFBYyxDQUFDLEtBQUQsQ0FBZDtBQUNELEtBSEQsTUFHTztBQUNMVixtREFBSSxDQUFDQyxFQUFMLENBQVFZLFFBQVIsRUFBa0I7QUFBRVYsaUJBQVMsRUFBRTtBQUFiLE9BQWxCO0FBQ0FPLG9CQUFjLENBQUMsSUFBRCxDQUFkO0FBQ0Q7QUFDRixHQVREOztBQVVBLHNCQUNFO0FBQUEsNEJBQ0UscUVBQUMsbUVBQUQ7QUFDRSxjQUFRLE1BRFY7QUFFRSxrQkFBWSxFQUFDLDZFQUZmO0FBR0UsaUJBQVcsRUFBQyw4Q0FIZDtBQUlFLGtCQUFZLEVBQUM7QUFKZjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREYsZUFPRSxxRUFBQyw0RUFBRDtBQUFBLDZCQUNFO0FBQUssV0FBRyxFQUFFakIsWUFBVjtBQUF3QixpQkFBUyxFQUFDLDBFQUFsQztBQUFBLCtCQUNFO0FBQUssbUJBQVMsRUFBQywrSkFBZjtBQUFBLGtDQUNFO0FBQUsscUJBQVMsRUFBQyw0Q0FBZjtBQUFBLG9DQUNFO0FBQUssdUJBQVMsRUFBQyxtQkFBZjtBQUFBLHNDQUNFO0FBQ0Usc0JBQU0sRUFBQyxJQURUO0FBRUUscUJBQUssRUFBQyxJQUZSO0FBR0UseUJBQVMsRUFBQyxpREFIWjtBQUlFLHFCQUFLLEVBQUMsNEJBSlI7QUFLRSx1QkFBTyxFQUFDLGFBTFY7QUFBQSx3Q0FPRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx5QkFQRixlQVFFO0FBQUcsb0JBQUUsRUFBQyxpQkFBTjtBQUF3QiwrQkFBVSxpQkFBbEM7QUFBQSx5Q0FDRTtBQUNFLDZCQUFTLEVBQUMsT0FEWjtBQUVFLHFCQUFDLEVBQUM7QUFGSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSx5QkFSRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBREYsZUFnQkU7QUFBRyx5QkFBUyxFQUFDLDZDQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQWhCRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBREYsZUFtQkU7QUFBSyx1QkFBUyxFQUFDLGtCQUFmO0FBQUEscUNBQ0U7QUFDRSx1QkFBTyxFQUFFLGlCQUFDSyxDQUFEO0FBQUEseUJBQU9ELGVBQWUsQ0FBQ0MsQ0FBRCxDQUF0QjtBQUFBLGlCQURYO0FBRUUseUJBQVMsRUFBQyx1T0FGWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBbkJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFERixlQTZCRTtBQUFBLG1DQUNFO0FBQUksdUJBQVMsRUFBQyxrQ0FBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBN0JGLGVBZ0NFO0FBQUEsbUNBQ0U7QUFBRyx1QkFBUyxFQUFDLDBDQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFoQ0YsZUFtQ0U7QUFBSyxxQkFBUyxFQUFDLG1LQUFmO0FBQUEsc0JBQ0doQixRQUFRLEdBQ1BBLFFBQVEsQ0FBQ2tDLE1BQVQsSUFBbUIsQ0FBbkIsZ0JBQ0UscUVBQUMsbUZBQUQ7QUFBYyw2QkFBZSxFQUFFbkI7QUFBL0I7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFERixHQUdFZixRQUFRLENBQUNtQyxHQUFULENBQWEsaUJBQTBFTCxLQUExRSxFQUFvRjtBQUFBLGtCQUFqRk0sU0FBaUYsU0FBakZBLFNBQWlGO0FBQUEsa0JBQXRFQyxZQUFzRSxTQUF0RUEsWUFBc0U7QUFBQSxrQkFBeERDLFdBQXdELFNBQXhEQSxXQUF3RDtBQUFBLGtCQUEzQ0Msa0JBQTJDLFNBQTNDQSxrQkFBMkM7QUFBQSxrQkFBdkJDLFNBQXVCLFNBQXZCQSxTQUF1QjtBQUMvRixrQ0FDRTtBQUFLLHlCQUFTLEVBQUMsZ01BQWY7QUFBQSx3Q0FFRTtBQUFLLDJCQUFTLEVBQUMsc0RBQWY7QUFBQSwwQ0FDRTtBQUNFLDJCQUFPLEVBQUU7QUFBQSw2QkFBTVgsa0JBQWtCLENBQUNDLEtBQUQsQ0FBeEI7QUFBQSxxQkFEWDtBQUVFLHVCQUFHLEVBQUMsaUJBRk47QUFHRSwwQkFBTSxFQUFFLEVBSFY7QUFJRSx5QkFBSyxFQUFFLEVBSlQ7QUFLRSw2QkFBUyxFQUFDO0FBTFo7QUFBQTtBQUFBO0FBQUE7QUFBQSwyQkFERixlQVFFO0FBQ0Usc0JBQUUsZ0JBQVNBLEtBQVQsQ0FESjtBQUVFLDZCQUFTLEVBQUMsd0lBRlo7QUFBQSwyQ0FJRTtBQUFLLCtCQUFTLEVBQUMsZ0JBQWY7QUFBQSw4Q0FDRTtBQUFLLGlDQUFTLEVBQUMsd0ZBQWY7QUFBQSxnREFDRTtBQUNFO0FBQ0EsOEJBQUksRUFBQyxHQUZQO0FBR0UsbUNBQVMsRUFBQyw2R0FIWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQ0FERixlQVFFO0FBQUcsbUNBQVMsRUFBQyx5REFBYjtBQUFBLGlEQUNFO0FBQUssK0JBQUcsRUFBQyxpQkFBVDtBQUEyQixrQ0FBTSxFQUFFLEVBQW5DO0FBQXVDLGlDQUFLLEVBQUU7QUFBOUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUNBUkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLCtCQURGLGVBYUU7QUFBSyxpQ0FBUyxFQUFDLHNIQUFmO0FBQUEsZ0RBQ0U7QUFDRTtBQUNBLDhCQUFJLEVBQUMsR0FGUDtBQUdFLG1DQUFTLEVBQUMsNkdBSFo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUNBREYsZUFRRTtBQUFHLG1DQUFTLEVBQUMseURBQWI7QUFBQSxpREFDRTtBQUFLLCtCQUFHLEVBQUMsZ0JBQVQ7QUFBMEIsa0NBQU0sRUFBRSxFQUFsQztBQUFzQyxpQ0FBSyxFQUFFO0FBQTdDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlDQVJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSwrQkFiRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFKRjtBQUFBO0FBQUE7QUFBQTtBQUFBLDJCQVJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx5QkFGRixlQTJDRTtBQUNFLHFCQUFHLEVBQUVPLFlBQVksSUFBSSxJQUFoQixvQkFBaUNELFNBQWpDLFlBQW1EQyxZQUQxRDtBQUVFLDJCQUFTLEVBQUM7QUFGWjtBQUFBO0FBQUE7QUFBQTtBQUFBLHlCQTNDRixlQStDRTtBQUFLLHVCQUFLLEVBQUU7QUFBRUksMEJBQU0sRUFBRTtBQUFWLG1CQUFaO0FBQTZCLDJCQUFTLEVBQUMsdUJBQXZDO0FBQUEsMENBQ0U7QUFBTyw2QkFBUyxFQUFDLHNCQUFqQjtBQUF3Qyx5QkFBSyxFQUFFSDtBQUEvQztBQUFBO0FBQUE7QUFBQTtBQUFBLDJCQURGLGVBRUU7QUFBRyw2QkFBUyxFQUFDLG9DQUFiO0FBQUEsOEJBQW1EQztBQUFuRDtBQUFBO0FBQUE7QUFBQTtBQUFBLDJCQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx5QkEvQ0Y7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQURGO0FBc0RELGFBdkRELENBSkssZ0JBOERQLHFFQUFDLGlFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUEvREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFuQ0YsZUFxR0UscUVBQUMsMEVBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFyR0Y7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFQRjtBQUFBLGtCQURGO0FBcUhELENBcktELEMsQ0F1S0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7R0ExTE16QyxlO1VBbUJXWSxzRCxFQUVTRyxxRDs7O0tBckJwQmYsZTtBQTRMUyxpS0FBQUEsZUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9kYXNoYm9hcmQvcHJvamVjdHMuY2RjYmJhM2Q1MGU1OGZhZTAxMDIuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVJlZiwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBDb29raWVzIGZyb20gJ2pzLWNvb2tpZSc7XHJcbmltcG9ydCBjb29raWUgZnJvbSAnY29va2llJztcclxuaW1wb3J0IHsgZGIgfSBmcm9tICcuLi8uLi8uLi9saWIvZmlyZWJhc2UnO1xyXG5pbXBvcnQgVGlwcHlNb25zdGVyIGZyb20gJy4uLy4uLy4uL2NvbXBvbmVudHMvZGFzaGJvYXJkL1RpcHB5JztcclxuaW1wb3J0IE5hdmJhclRlbXBsYXRlIGZyb20gJy4uLy4uLy4uL2NvbXBvbmVudHMvZGFzaGJvYXJkL05hdmJhclRlbXBsYXRlJztcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xyXG5pbXBvcnQgZ3NhcCwgeyBQb3dlcjQgfSBmcm9tICdnc2FwJztcclxuaW1wb3J0IHsgdXNlQXV0aCB9IGZyb20gJy4uLy4uLy4uL2xpYi9uZXdBdXRoJztcclxuaW1wb3J0IEJvdW5jZUxvYWRlckNvbXBvbmVudCBmcm9tICcuLi8uLi8uLi9jb21wb25lbnRzL0JvdW5jZUxvYWRlcic7XHJcbmltcG9ydCBFbXB0eVN0YXJ0dXAgZnJvbSAnLi4vLi4vLi4vY29tcG9uZW50cy9kYXNoYm9hcmQvc3RhcnR1cC9FbXB0eVN0YXJ0dXAnO1xyXG5pbXBvcnQgU3RhcnR1cFN1Y2Nlc3MgZnJvbSAnLi4vLi4vLi4vY29tcG9uZW50cy9kYXNoYm9hcmQvc3RhcnR1cC9TdGFydHVwU3VjY2Vzcyc7XHJcbmltcG9ydCBNZW1iZXJzQ29kZSBmcm9tICcuLi8uLi8uLi9jb21wb25lbnRzL2Rhc2hib2FyZC9NZW1iZXJzQ29kZSc7XHJcblxyXG5jb25zdCBQcm9qZWN0c01hbmFnZXIgPSAoKSA9PiB7XHJcbiAgY29uc3QgW3Byb2plY3RzLCBzZXRQcm9qZWN0c10gPSB1c2VTdGF0ZShbXSk7XHJcbiAgdXNlRWZmZWN0KGFzeW5jICgpID0+IHtcclxuICAgIGNvbnN0IHByb2plY3RzQXJyYXkgPSBbXTtcclxuICAgIGNvbnN0IHVzZXJVaWQgPSBDb29raWVzLmdldCgndWlkJyk7XHJcbiAgICAvLyBsZXQgcmVmID0gZGIuY29sbGVjdGlvbigncHJvamVjdHMnKTtcclxuICAgIC8vIGNvbnN0IHNuYXBzaG90ID0gYXdhaXQgcmVmLmdldCgpO1xyXG4gICAgLy8gc25hcHNob3QuZm9yRWFjaCgoZG9jKSA9PiB7XHJcbiAgICAvLyAgIGNvbnN0IGRhdGEgPSBkb2MuZGF0YSgpO1xyXG4gICAgLy8gICBkYXRhLnByb2plY3RVc2Vycy5tYXAoKHVzZXIpID0+IHtcclxuICAgIC8vICAgICBpZiAodXNlci51c2VyVWlkID09PSB1c2VyVWlkKSB7XHJcbiAgICAvLyAgICAgICBwcm9qZWN0c0FycmF5LnB1c2goeyAuLi5kYXRhIH0pO1xyXG4gICAgLy8gICAgIH1cclxuICAgIC8vICAgfSk7XHJcbiAgICAvLyAgIHNldFByb2plY3RzKHByb2plY3RzQXJyYXkpO1xyXG4gICAgLy8gfSk7XHJcbiAgfSwgW10pO1xyXG5cclxuICBjb25zb2xlLmxvZyhwcm9qZWN0cyk7XHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcbiAgY29uc3QgY29udGFpbmVyUmVmID0gdXNlUmVmKCk7XHJcbiAgY29uc3QgeyBjdXJyZW50VXNlciB9ID0gdXNlQXV0aCgpO1xyXG4gIGNvbnNvbGUubG9nKGN1cnJlbnRVc2VyKTtcclxuXHJcbiAgY29uc3Qgb25Qcm9qZWN0Q3JlYXRlID0gKGUpID0+IHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIGdzYXAudG8oY29udGFpbmVyUmVmLmN1cnJlbnQsIHtcclxuICAgICAgYXV0b0FscGhhOiAwLFxyXG4gICAgICBkdXJhdGlvbjogMSxcclxuICAgICAgZWFzZTogUG93ZXI0LmVhc2VPdXQsXHJcbiAgICB9KTtcclxuICAgIC8vIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgcm91dGVyLnB1c2goJy9kYXNoYm9hcmQvcHJvamVjdHMvbmV3LXN0YXJ0dXAnKTtcclxuICAgIC8vIH0sIDEyMDApO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IFthY3RpdmVDbGFzcywgc2V0QWN0aXZlQ2xhc3NdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuICBjb25zdCBjaG9vc2VDbGFzc2VzQ2xpY2sgPSAoaW5kZXgpID0+IHtcclxuICAgIGNvbnN0IG1lbnVEb3RzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYG1lbnUke2luZGV4fWApO1xyXG4gICAgaWYgKGFjdGl2ZUNsYXNzKSB7XHJcbiAgICAgIGdzYXAudG8obWVudURvdHMsIHsgYXV0b0FscGhhOiAwIH0pO1xyXG4gICAgICBzZXRBY3RpdmVDbGFzcyhmYWxzZSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBnc2FwLnRvKG1lbnVEb3RzLCB7IGF1dG9BbHBoYTogMSB9KTtcclxuICAgICAgc2V0QWN0aXZlQ2xhc3ModHJ1ZSk7XHJcbiAgICB9XHJcbiAgfTtcclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPFRpcHB5TW9uc3RlclxyXG4gICAgICAgIHN0YXJ0dXBzXHJcbiAgICAgICAgY29udGVudENsYXNzPVwiaC0zNiB3LTgwIHNoYWRvdy1sZyByb3VuZGVkLTJ4bCBiZy1wcmltYXJ5IGZsZXgganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyXCJcclxuICAgICAgICBjb250ZW50VGV4dD1cIlRoaXMgaXMgYSBwbGFjZSB3aGVyZSBtYWdpY2FsIHRoaW5ncyBoYXBwZW4gXCJcclxuICAgICAgICBjb250ZW50VGV4dDE9XCIgSnVzdCBzdGFydCBjcmVhdGluZyB5b3VyIHN0YXJ0dXAgYW5kIGJyaW5nIHlvdXIgaWRlYSBpbnRvIHJlYWxpdHkuIE9uY2UgeW91J3ZlIGRvbmUgdGhhdCwgeW91IGNhbiBtYW5hZ2UgaXQgZnJvbSB0aGUgbWFpbiBwYW5lbC4gRmVlbCBmcmVlIHRvIGVkaXQsIHNhdmUgb3IgZGVsZXRlIHlvdXIgaWRlYVwiXHJcbiAgICAgIC8+XHJcbiAgICAgIDxOYXZiYXJUZW1wbGF0ZT5cclxuICAgICAgICA8ZGl2IHJlZj17Y29udGFpbmVyUmVmfSBjbGFzc05hbWU9XCJtaW4taC1zY3JlZW4gdy1mdWxsIHJlbGF0aXZlIGZsZXggZmxleC1jb2wgaXRlbXMtY2VudGVyIHRleHQtcHJpbWFyeWRhcmtcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsIHNtOm1heC13LXNtQ29udGFpbmVyIG1kOm1heC13LW1kQ29udGFpbmVyIGxnOm1heC13LWxnQ29udGFpbmVyIHhsOm1heC13LXhsQ29udGFpbmVyIDJ4bDptYXgtdy14eGxDb250YWluZXIgbm9ybWFsOm1heC13LW5vcm1hbENvbnRhaW5lciByZWxhdGl2ZSBtdC0xMlwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQgZ3JpZC1jb2xzLTIgZ3JpZC1yb3dzLTEgZ3JpZC1mbG93LWNvbFwiPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgIDxzdmdcclxuICAgICAgICAgICAgICAgICAgaGVpZ2h0PVwiMzBcIlxyXG4gICAgICAgICAgICAgICAgICB3aWR0aD1cIjMwXCJcclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZmlsbC1jdXJyZW50IHRleHQtcHJpbWFyeSBkYXJrOnRleHQtcHJpbWFyeWRhcmtcIlxyXG4gICAgICAgICAgICAgICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcclxuICAgICAgICAgICAgICAgICAgdmlld0JveD1cIjAgMCAxMjggMTI4XCJcclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgPHRpdGxlPkxhbmRpbmcgU3VjY2VzczwvdGl0bGU+XHJcbiAgICAgICAgICAgICAgICAgIDxnIGlkPVwiTGFuZGluZ19TdWNjZXNzXCIgZGF0YS1uYW1lPVwiTGFuZGluZyBTdWNjZXNzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHBhdGhcclxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImNscy0xXCJcclxuICAgICAgICAgICAgICAgICAgICAgIGQ9XCJNMTA5LjMsOTAuMUE0Niw0NiwwLDAsMCw2NSwzNlYyMC4wOGMxLjc4LS42Miw3LjIxLTIuMTQsMTIuNTcuMjNhMTkuMzMsMTkuMzMsMCwwLDAsMTQuODIsMGMuODctLjM4LjYxLjMxLjYxLTE3LjkzYTEsMSwwLDAsMC0xLjQzLS45M2MtLjA3LDAtNi42OSwyLjg3LTEzLjE4LDBBMTkuNDEsMTkuNDEsMCwwLDAsNjUsLjkzLDEsMSwwLDAsMCw2MywxVjM2YTQ1Ljg2LDQ1Ljg2LDAsMCwwLTI4LjY2LDEwLjhDMTYuMTgsNDAuNDgsNCw0MCwuNzksNDUuNTEtMi4yOSw1MC44NiwzLjk0LDU5LjMsMTAsNjUuNjhBMTEsMTEsMCwwLDAsMTgsODNjLjgxLDM4LjQxLDQ2LjA4LDU5LjIsNzUuNjYsMzQuMjEsOC41MywzLDI5LDkuMTUsMzMuNTUsMS4zMUMxMzAuMzksMTEzLDEyMy44NiwxMDIuNjUsMTA5LjMsOTAuMVpNNzcuNTksMy4zMUExOS4zOSwxOS4zOSwwLDAsMCw5MSwzLjgzVjE4LjY4Yy0xLjc5LjYyLTcuMjIsMi4xMy0xMi41Ny0uMjNBMTkuMTksMTkuMTksMCwwLDAsNjUsMTcuOTNWMy4wOEM2Ni44MSwyLjQ2LDcyLjI0LDEsNzcuNTksMy4zMVpNNjUsNDV2LTdjMzkuNjkuOTEsNTgsNTAuMjcsMjguMjEsNzYuODFDNzEuMzIsMTA3LDQ2LDkyLjY2LDI3Ljc3LDc4LjY0YTExLDExLDAsMCwwLTMuMi0xNi4xM0E0My44OCw0My44OCwwLDAsMSw2MywzOC4wNlY0NUExLDEsMCwwLDAsNjUsNDVaTTMyLjU1LDQ4LjM2YTQ2LjIxLDQ2LjIxLDAsMCwwLTkuODMsMTMuMjgsMTAuOTMsMTAuOTMsMCwwLDAtMTEuNCwyLjQ3Qy04LjM5LDQzLjIzLDUuMjMsMzkuMDgsMzIuNTUsNDguMzZaTTEwLDcyYTksOSwwLDEsMSw5LDlBOSw5LDAsMCwxLDEwLDcyWm0xMCwxMWExMSwxMSwwLDAsMCw2LjM0LTIuODJjMTguNDUsMTQuMjEsNDMuNDUsMjguMzUsNjUuMDUsMzYuMjJDNjMsMTM5LjE2LDIwLjgzLDExOS4xLDIwLjA1LDgzWm0xMDUuNCwzNC41Yy0yLjUxLDQuMzUtMTQsMy42Mi0zMC0xLjg1YTQ1LjYxLDQ1LjYxLDAsMCwwLDEzLjQyLTIzLjIxQzEyMS41OSwxMDMuNTgsMTI4LDExMy4xMiwxMjUuNDUsMTE3LjQ3WlwiXHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgPC9nPlxyXG4gICAgICAgICAgICAgICAgPC9zdmc+XHJcbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJzZWxmLWVuZCB0ZXh0LTJ4bCBwbC0yIGRhcms6dGV4dC1iYWNrZ3JvdW5kXCI+U3RhcnR1cHM8L3A+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktZW5kXCI+XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eyhlKSA9PiBvblByb2plY3RDcmVhdGUoZSl9XHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImhvdmVyOmJnLXByaW1hcnkgaG92ZXI6dGV4dC13aGl0ZSBkYXJrOmhvdmVyOmJnLXByaW1hcnlkYXJrIGRhcms6aG92ZXI6dGV4dC1iYWNrZ3JvdW5kIGZvY3VzOm91dGxpbmUtbm9uZSBib3JkZXIgYm9yZGVyLXByaW1hcnkgdGV4dC1wcmltYXJ5IHRleHQtYmFzZSBmb250LWxpZ2h0IHB5LTIgcHgtNiByb3VuZGVkLTJ4bCBkYXJrOnRleHQtcHJpbWFyeWRhcmsgZGFyazpib3JkZXItcHJpbWFyeWRhcmtcIlxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICBOZXcgc3RhcnR1cFxyXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJ0ZXh0LXNlY29uZGFyeSB0ZXh0LW1kIHRleHQtZ3JheVwiPkJyaW5nIHlvdXIgaWRlYSBpbnRvIHJlYWxpdHk8L2gxPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LWxnIG10LTEwIC1tYi02IGRhcms6dGV4dC1iYWNrZ3JvdW5kXCI+SWRlYXMgeW91IGludmVudGVkPC9wPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGwgZ3JpZCBzbTpncmlkLWNvbHMtMSBtZDpncmlkLWNvbHMtMmZyIGxnOmdyaWQtY29scy0zZnIgMnhsOmdyaWQtY29scy00ZnIgZ2FwLTggYm9yZGVyLXItNiByb3VuZGVkLTJ4bCBiZy13aGl0ZSBtdC04IG1iLTggZGFyazpiZy1iYWNrZ3JvdW5kIHAtOCB0ZXh0LWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgIHtwcm9qZWN0cyA/IChcclxuICAgICAgICAgICAgICAgIHByb2plY3RzLmxlbmd0aCA9PSAwID8gKFxyXG4gICAgICAgICAgICAgICAgICA8RW1wdHlTdGFydHVwIG9uUHJvamVjdENyZWF0ZT17b25Qcm9qZWN0Q3JlYXRlfSAvPlxyXG4gICAgICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICAgICAgcHJvamVjdHMubWFwKCh7IGltYWdlTmFtZSwgaW1hZ2VGaWxlVXJsLCBwcm9qZWN0TmFtZSwgcHJvamVjdERlc2NyaXB0aW9uLCBwcm9qZWN0SWQgfSwgaW5kZXgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzaGFkb3cgcm91bmRlZC0yeGwgZmxleCBmbGV4LXdyYXAganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyIGZsZXgtY29sIGhvdmVyOnNoYWRvdy1sZyB0cmFuc2Zvcm0gaG92ZXI6c2NhbGUtMTA1IGhvdmVyOi10cmFuc2xhdGUteS0yIGhvdmVyOi10cmFuc2xhdGUteC0yIHRyYW5zaXRpb24gZHVyYXRpb24tNTAwIGVhc2UtaW4tb3V0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHsvKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIERST1BET1dOIFNUQVJUIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlbGF0aXZlIGlubGluZS1ibG9jayB0ZXh0LXJpZ2h0IHctNC81IHRvcC00IHJpZ2h0LTJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBjaG9vc2VDbGFzc2VzQ2xpY2soaW5kZXgpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPVwiL2RvdHMtbWVudTIuc3ZnXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodD17MjZ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aD17MjZ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJjdXJzb3ItcG9pbnRlclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD17YG1lbnUke2luZGV4fWB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJvcmlnaW4tdG9wLXJpZ2h0IGFic29sdXRlIGxlZnQtMS8yIHRyYW5zZm9ybSAtdHJhbnNsYXRlLXgtMS8yIHctNDQgbGc6dy00OCBzaGFkb3cteGwgYmctd2hpdGUgZm9jdXM6b3V0bGluZS1ub25lIGludmlzaWJsZSByb3VuZGVkLTJ4bFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwdC0xIHRleHQtbGVmdFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRyYW5zaXRpb24gZHVyYXRpb24tNTAwIGVhc2UtaW4tb3V0IGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktYmV0d2VlbiBob3ZlcjpiZy1wcmltYXJ5XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGFcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgb25DbGljaz17KGUpID0+IG9uUHJvamVjdEVkaXQoZSwgaW1hZ2UpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaHJlZj1cIiNcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYmxvY2sgcHgtNCBweS0yIDJ4bDpweS0zIHRleHQtc20gdGV4dC1wcmltYXJ5ZGFyayB0cmFuc2l0aW9uIGR1cmF0aW9uLTUwMCBlYXNlLWluLW91dCBob3Zlcjp0ZXh0LWJhY2tncm91bmRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEVkaXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwibXItMyBmbGV4IGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlciByZWxhdGl2ZSBib3R0b20tMVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCIvZ2lmcy93aGFsZS5naWZcIiBoZWlnaHQ9ezMwfSB3aWR0aD17MzB9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0cmFuc2l0aW9uIGR1cmF0aW9uLTUwMCBlYXNlLWluLW91dCBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWJldHdlZW4gaG92ZXI6YmctcHJpbWFyeSByb3VuZGVkLWJsLTJ4bCByb3VuZGVkLWJyLTJ4bFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgIG9uQ2xpY2s9eyhlKSA9PiBvblByb2plY3REZWxldGUoZSwgaW1hZ2UucHJvamVjdElkKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhyZWY9XCIjXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJsb2NrIHB4LTQgcHktMiAyeGw6cHktMyB0ZXh0LXNtIHRleHQtcHJpbWFyeWRhcmsgdHJhbnNpdGlvbiBkdXJhdGlvbi01MDAgZWFzZS1pbi1vdXQgaG92ZXI6dGV4dC1iYWNrZ3JvdW5kXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBSZW1vdmVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwibXItMyBmbGV4IGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlciByZWxhdGl2ZSBib3R0b20tMVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCIvZ2lmcy9ib21iLmdpZlwiIGhlaWdodD17MzB9IHdpZHRoPXszMH0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz17aW1hZ2VGaWxlVXJsID09IG51bGwgPyBgL21vZGFsLyR7aW1hZ2VOYW1lfS5zdmdgIDogaW1hZ2VGaWxlVXJsfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIiBoLTQwIHctNDAgcC00IGJvcmRlci1iIGJvcmRlci1wcmltYXJ5XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBoZWlnaHQ6IDE4MCB9fSBjbGFzc05hbWU9XCIgb3ZlcmZsb3ctc2Nyb2xsIG10LTJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgY2xhc3NOYW1lPVwiYmctd2hpdGUgdGV4dC1jZW50ZXJcIiB2YWx1ZT17cHJvamVjdE5hbWV9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXIgbXQtMSB0ZXh0LXNtIHRleHQtZ3JheVwiPntwcm9qZWN0RGVzY3JpcHRpb259PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICAgIDxCb3VuY2VMb2FkZXJDb21wb25lbnQgLz5cclxuICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPE1lbWJlcnNDb2RlIC8+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9OYXZiYXJUZW1wbGF0ZT5cclxuICAgIDwvPlxyXG4gICk7XHJcbn07XHJcblxyXG4vLyBleHBvcnQgY29uc3QgZ2V0U2VydmVyU2lkZVByb3BzID0gYXN5bmMgKGNvbnRleHQpID0+IHtcclxuLy8gICBjb25zdCBjb29raWVzID0gYXdhaXQgY29udGV4dC5yZXEuaGVhZGVycy5jb29raWU7XHJcbi8vICAgY29uc3QgcGFyc2VkQ29va2llcyA9IGNvb2tpZS5wYXJzZShjb29raWVzKTtcclxuLy8gICBjb25zdCBwcm9qZWN0cyA9IFtdO1xyXG4vLyAgIGxldCByZWYgPSBkYi5jb2xsZWN0aW9uKCdwcm9qZWN0cycpO1xyXG5cclxuLy8gICBjb25zdCBzbmFwc2hvdCA9IGF3YWl0IHJlZi5nZXQoKTtcclxuXHJcbi8vICAgc25hcHNob3QuZm9yRWFjaCgoZG9jKSA9PiB7XHJcbi8vICAgICBjb25zdCBkYXRhID0gZG9jLmRhdGEoKTtcclxuLy8gICAgIGRhdGEucHJvamVjdFVzZXJzLm1hcCgodXNlcikgPT4ge1xyXG4vLyAgICAgICBpZiAodXNlci51c2VyVWlkID09PSBwYXJzZWRDb29raWVzLnVpZCkge1xyXG4vLyAgICAgICAgIHByb2plY3RzLnB1c2goeyAuLi5kYXRhIH0pO1xyXG4vLyAgICAgICB9XHJcbi8vICAgICB9KTtcclxuLy8gICB9KTtcclxuLy8gICByZXR1cm4ge1xyXG4vLyAgICAgcHJvcHM6IHsgcHJvamVjdHMgfSxcclxuLy8gICB9O1xyXG4vLyB9O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgUHJvamVjdHNNYW5hZ2VyO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9