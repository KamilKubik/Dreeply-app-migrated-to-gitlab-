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

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(null),
      projects = _useState[0],
      setProjects = _useState[1];

  Object(react__WEBPACK_IMPORTED_MODULE_4__["useEffect"])( /*#__PURE__*/Object(C_off_saas_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/C_off_saas_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee() {
    var projects, userUid, ref, snapshot;
    return C_off_saas_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            projects = [];
            userUid = js_cookie__WEBPACK_IMPORTED_MODULE_5___default.a.get('uid');
            ref = _lib_firebase__WEBPACK_IMPORTED_MODULE_7__["db"].collection('projects');
            _context.next = 5;
            return ref.get();

          case 5:
            snapshot = _context.sent;
            snapshot.forEach(function (doc) {
              var data = doc.data();
              data.projectUsers.map(function (user) {
                if (user.userUid === userUid) {
                  projects.push(data);
                  setProjects.apply(void 0, projects.concat([data]));
                }
              });
              setProjects(projects);
            });

          case 7:
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
      lineNumber: 66,
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
                  lineNumber: 84,
                  columnNumber: 19
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("g", {
                  id: "Landing_Success",
                  "data-name": "Landing Success",
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
                    className: "cls-1",
                    d: "M109.3,90.1A46,46,0,0,0,65,36V20.08c1.78-.62,7.21-2.14,12.57.23a19.33,19.33,0,0,0,14.82,0c.87-.38.61.31.61-17.93a1,1,0,0,0-1.43-.93c-.07,0-6.69,2.87-13.18,0A19.41,19.41,0,0,0,65,.93,1,1,0,0,0,63,1V36a45.86,45.86,0,0,0-28.66,10.8C16.18,40.48,4,40,.79,45.51-2.29,50.86,3.94,59.3,10,65.68A11,11,0,0,0,18,83c.81,38.41,46.08,59.2,75.66,34.21,8.53,3,29,9.15,33.55,1.31C130.39,113,123.86,102.65,109.3,90.1ZM77.59,3.31A19.39,19.39,0,0,0,91,3.83V18.68c-1.79.62-7.22,2.13-12.57-.23A19.19,19.19,0,0,0,65,17.93V3.08C66.81,2.46,72.24,1,77.59,3.31ZM65,45v-7c39.69.91,58,50.27,28.21,76.81C71.32,107,46,92.66,27.77,78.64a11,11,0,0,0-3.2-16.13A43.88,43.88,0,0,1,63,38.06V45A1,1,0,0,0,65,45ZM32.55,48.36a46.21,46.21,0,0,0-9.83,13.28,10.93,10.93,0,0,0-11.4,2.47C-8.39,43.23,5.23,39.08,32.55,48.36ZM10,72a9,9,0,1,1,9,9A9,9,0,0,1,10,72Zm10,11a11,11,0,0,0,6.34-2.82c18.45,14.21,43.45,28.35,65.05,36.22C63,139.16,20.83,119.1,20.05,83Zm105.4,34.5c-2.51,4.35-14,3.62-30-1.85a45.61,45.61,0,0,0,13.42-23.21C121.59,103.58,128,113.12,125.45,117.47Z"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 86,
                    columnNumber: 21
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 85,
                  columnNumber: 19
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 77,
                columnNumber: 17
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                className: "self-end text-2xl pl-2 dark:text-background",
                children: "Startups"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 92,
                columnNumber: 17
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 76,
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
                lineNumber: 95,
                columnNumber: 17
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 94,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 75,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
              className: "text-secondary text-md text-gray",
              children: "Bring your idea into reality"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 104,
              columnNumber: 15
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 103,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
              className: "text-lg mt-10 -mb-6 dark:text-background",
              children: "Ideas you invented"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 107,
              columnNumber: 15
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 106,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "w-full grid sm:grid-cols-1 md:grid-cols-2fr lg:grid-cols-3fr 2xl:grid-cols-4fr gap-8 border-r-6 rounded-2xl bg-white mt-8 mb-8 dark:bg-background p-8 text-center",
            children: projects ? projects.length == 0 ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_dashboard_startup_EmptyStartup__WEBPACK_IMPORTED_MODULE_14__["default"], {
              onProjectCreate: onProjectCreate
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 112,
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
                    lineNumber: 119,
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
                          lineNumber: 132,
                          columnNumber: 33
                        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                          className: "mr-3 flex justify-center items-center relative bottom-1",
                          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
                            src: "/gifs/whale.gif",
                            height: 30,
                            width: 30
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 140,
                            columnNumber: 35
                          }, _this)
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 139,
                          columnNumber: 33
                        }, _this)]
                      }, void 0, true, {
                        fileName: _jsxFileName,
                        lineNumber: 131,
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
                          lineNumber: 144,
                          columnNumber: 33
                        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                          className: "mr-3 flex justify-center items-center relative bottom-1",
                          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
                            src: "/gifs/bomb.gif",
                            height: 30,
                            width: 30
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 152,
                            columnNumber: 35
                          }, _this)
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 151,
                          columnNumber: 33
                        }, _this)]
                      }, void 0, true, {
                        fileName: _jsxFileName,
                        lineNumber: 143,
                        columnNumber: 31
                      }, _this)]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 130,
                      columnNumber: 29
                    }, _this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 126,
                    columnNumber: 27
                  }, _this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 118,
                  columnNumber: 25
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
                  src: imageFileUrl == null ? "/modal/".concat(imageName, ".svg") : imageFileUrl,
                  className: " h-40 w-40 p-4 border-b border-primary"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 159,
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
                    lineNumber: 164,
                    columnNumber: 27
                  }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                    className: "text-center mt-1 text-sm text-gray",
                    children: projectDescription
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 165,
                    columnNumber: 27
                  }, _this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 163,
                  columnNumber: 25
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 116,
                columnNumber: 23
              }, _this);
            }) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_BounceLoader__WEBPACK_IMPORTED_MODULE_13__["default"], {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 172,
              columnNumber: 17
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 109,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_dashboard_MembersCode__WEBPACK_IMPORTED_MODULE_16__["default"], {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 175,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 74,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 73,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 72,
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


_s(ProjectsManager, "Cj1CM6YlQ/Lec2Wa85jGZAd0fJ4=", false, function () {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvZGFzaGJvYXJkL3Byb2plY3RzL2luZGV4LmpzIl0sIm5hbWVzIjpbIlByb2plY3RzTWFuYWdlciIsInVzZVN0YXRlIiwicHJvamVjdHMiLCJzZXRQcm9qZWN0cyIsInVzZUVmZmVjdCIsInVzZXJVaWQiLCJDb29raWVzIiwiZ2V0IiwicmVmIiwiZGIiLCJjb2xsZWN0aW9uIiwic25hcHNob3QiLCJmb3JFYWNoIiwiZG9jIiwiZGF0YSIsInByb2plY3RVc2VycyIsIm1hcCIsInVzZXIiLCJwdXNoIiwiY29uc29sZSIsImxvZyIsInJvdXRlciIsInVzZVJvdXRlciIsImNvbnRhaW5lclJlZiIsInVzZVJlZiIsInVzZUF1dGgiLCJjdXJyZW50VXNlciIsIm9uUHJvamVjdENyZWF0ZSIsImUiLCJwcmV2ZW50RGVmYXVsdCIsImdzYXAiLCJ0byIsImN1cnJlbnQiLCJhdXRvQWxwaGEiLCJkdXJhdGlvbiIsImVhc2UiLCJQb3dlcjQiLCJlYXNlT3V0IiwiYWN0aXZlQ2xhc3MiLCJzZXRBY3RpdmVDbGFzcyIsImNob29zZUNsYXNzZXNDbGljayIsImluZGV4IiwibWVudURvdHMiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwibGVuZ3RoIiwiaW1hZ2VOYW1lIiwiaW1hZ2VGaWxlVXJsIiwicHJvamVjdE5hbWUiLCJwcm9qZWN0RGVzY3JpcHRpb24iLCJwcm9qZWN0SWQiLCJoZWlnaHQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQU1BLGVBQWUsR0FBRyxTQUFsQkEsZUFBa0IsR0FBTTtBQUFBOztBQUFBLGtCQUNJQyxzREFBUSxDQUFDLElBQUQsQ0FEWjtBQUFBLE1BQ3JCQyxRQURxQjtBQUFBLE1BQ1hDLFdBRFc7O0FBRTVC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QUE7QUFBQTtBQUFBO0FBQUEsdUJBREY7QUFzREQsYUF2REQsQ0FKSyxnQkE4RFAscUVBQUMsaUVBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQS9ESjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQW5DRixlQXFHRSxxRUFBQywwRUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQXJHRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQVBGO0FBQUEsa0JBREY7QUFxSEQsQ0F0S0QsQyxDQXdLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztHQTNMTWpELGU7VUFvQldzQixzRCxFQUVTRyxxRDs7O0tBdEJwQnpCLGU7QUE2TFMsaUtBQUFBLGVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvZGFzaGJvYXJkL3Byb2plY3RzLmM3NjI1NDYyOWM1NWIxMDVhMGVhLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VSZWYsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgQ29va2llcyBmcm9tICdqcy1jb29raWUnO1xyXG5pbXBvcnQgY29va2llIGZyb20gJ2Nvb2tpZSc7XHJcbmltcG9ydCB7IGRiIH0gZnJvbSAnLi4vLi4vLi4vbGliL2ZpcmViYXNlJztcclxuaW1wb3J0IFRpcHB5TW9uc3RlciBmcm9tICcuLi8uLi8uLi9jb21wb25lbnRzL2Rhc2hib2FyZC9UaXBweSc7XHJcbmltcG9ydCBOYXZiYXJUZW1wbGF0ZSBmcm9tICcuLi8uLi8uLi9jb21wb25lbnRzL2Rhc2hib2FyZC9OYXZiYXJUZW1wbGF0ZSc7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcclxuaW1wb3J0IGdzYXAsIHsgUG93ZXI0IH0gZnJvbSAnZ3NhcCc7XHJcbmltcG9ydCB7IHVzZUF1dGggfSBmcm9tICcuLi8uLi8uLi9saWIvbmV3QXV0aCc7XHJcbmltcG9ydCBCb3VuY2VMb2FkZXJDb21wb25lbnQgZnJvbSAnLi4vLi4vLi4vY29tcG9uZW50cy9Cb3VuY2VMb2FkZXInO1xyXG5pbXBvcnQgRW1wdHlTdGFydHVwIGZyb20gJy4uLy4uLy4uL2NvbXBvbmVudHMvZGFzaGJvYXJkL3N0YXJ0dXAvRW1wdHlTdGFydHVwJztcclxuaW1wb3J0IFN0YXJ0dXBTdWNjZXNzIGZyb20gJy4uLy4uLy4uL2NvbXBvbmVudHMvZGFzaGJvYXJkL3N0YXJ0dXAvU3RhcnR1cFN1Y2Nlc3MnO1xyXG5pbXBvcnQgTWVtYmVyc0NvZGUgZnJvbSAnLi4vLi4vLi4vY29tcG9uZW50cy9kYXNoYm9hcmQvTWVtYmVyc0NvZGUnO1xyXG5cclxuY29uc3QgUHJvamVjdHNNYW5hZ2VyID0gKCkgPT4ge1xyXG4gIGNvbnN0IFtwcm9qZWN0cywgc2V0UHJvamVjdHNdID0gdXNlU3RhdGUobnVsbCk7XHJcbiAgdXNlRWZmZWN0KGFzeW5jICgpID0+IHtcclxuICAgIGNvbnN0IHByb2plY3RzID0gW107XHJcbiAgICBjb25zdCB1c2VyVWlkID0gQ29va2llcy5nZXQoJ3VpZCcpO1xyXG4gICAgbGV0IHJlZiA9IGRiLmNvbGxlY3Rpb24oJ3Byb2plY3RzJyk7XHJcbiAgICBjb25zdCBzbmFwc2hvdCA9IGF3YWl0IHJlZi5nZXQoKTtcclxuICAgIHNuYXBzaG90LmZvckVhY2goKGRvYykgPT4ge1xyXG4gICAgICBjb25zdCBkYXRhID0gZG9jLmRhdGEoKTtcclxuICAgICAgZGF0YS5wcm9qZWN0VXNlcnMubWFwKCh1c2VyKSA9PiB7XHJcbiAgICAgICAgaWYgKHVzZXIudXNlclVpZCA9PT0gdXNlclVpZCkge1xyXG4gICAgICAgICAgcHJvamVjdHMucHVzaChkYXRhKTtcclxuICAgICAgICAgIHNldFByb2plY3RzKC4uLnByb2plY3RzLCBkYXRhKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgICBzZXRQcm9qZWN0cyhwcm9qZWN0cyk7XHJcbiAgICB9KTtcclxuICB9LCBbXSk7XHJcblxyXG4gIGNvbnNvbGUubG9nKHByb2plY3RzKTtcclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuICBjb25zdCBjb250YWluZXJSZWYgPSB1c2VSZWYoKTtcclxuICBjb25zdCB7IGN1cnJlbnRVc2VyIH0gPSB1c2VBdXRoKCk7XHJcbiAgY29uc29sZS5sb2coY3VycmVudFVzZXIpO1xyXG5cclxuICBjb25zdCBvblByb2plY3RDcmVhdGUgPSAoZSkgPT4ge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgZ3NhcC50byhjb250YWluZXJSZWYuY3VycmVudCwge1xyXG4gICAgICBhdXRvQWxwaGE6IDAsXHJcbiAgICAgIGR1cmF0aW9uOiAxLFxyXG4gICAgICBlYXNlOiBQb3dlcjQuZWFzZU91dCxcclxuICAgIH0pO1xyXG4gICAgLy8gc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICByb3V0ZXIucHVzaCgnL2Rhc2hib2FyZC9wcm9qZWN0cy9uZXctc3RhcnR1cCcpO1xyXG4gICAgLy8gfSwgMTIwMCk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgW2FjdGl2ZUNsYXNzLCBzZXRBY3RpdmVDbGFzc10gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gIGNvbnN0IGNob29zZUNsYXNzZXNDbGljayA9IChpbmRleCkgPT4ge1xyXG4gICAgY29uc3QgbWVudURvdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgbWVudSR7aW5kZXh9YCk7XHJcbiAgICBpZiAoYWN0aXZlQ2xhc3MpIHtcclxuICAgICAgZ3NhcC50byhtZW51RG90cywgeyBhdXRvQWxwaGE6IDAgfSk7XHJcbiAgICAgIHNldEFjdGl2ZUNsYXNzKGZhbHNlKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGdzYXAudG8obWVudURvdHMsIHsgYXV0b0FscGhhOiAxIH0pO1xyXG4gICAgICBzZXRBY3RpdmVDbGFzcyh0cnVlKTtcclxuICAgIH1cclxuICB9O1xyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8VGlwcHlNb25zdGVyXHJcbiAgICAgICAgc3RhcnR1cHNcclxuICAgICAgICBjb250ZW50Q2xhc3M9XCJoLTM2IHctODAgc2hhZG93LWxnIHJvdW5kZWQtMnhsIGJnLXByaW1hcnkgZmxleCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXJcIlxyXG4gICAgICAgIGNvbnRlbnRUZXh0PVwiVGhpcyBpcyBhIHBsYWNlIHdoZXJlIG1hZ2ljYWwgdGhpbmdzIGhhcHBlbiBcIlxyXG4gICAgICAgIGNvbnRlbnRUZXh0MT1cIiBKdXN0IHN0YXJ0IGNyZWF0aW5nIHlvdXIgc3RhcnR1cCBhbmQgYnJpbmcgeW91ciBpZGVhIGludG8gcmVhbGl0eS4gT25jZSB5b3UndmUgZG9uZSB0aGF0LCB5b3UgY2FuIG1hbmFnZSBpdCBmcm9tIHRoZSBtYWluIHBhbmVsLiBGZWVsIGZyZWUgdG8gZWRpdCwgc2F2ZSBvciBkZWxldGUgeW91ciBpZGVhXCJcclxuICAgICAgLz5cclxuICAgICAgPE5hdmJhclRlbXBsYXRlPlxyXG4gICAgICAgIDxkaXYgcmVmPXtjb250YWluZXJSZWZ9IGNsYXNzTmFtZT1cIm1pbi1oLXNjcmVlbiB3LWZ1bGwgcmVsYXRpdmUgZmxleCBmbGV4LWNvbCBpdGVtcy1jZW50ZXIgdGV4dC1wcmltYXJ5ZGFya1wiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGwgc206bWF4LXctc21Db250YWluZXIgbWQ6bWF4LXctbWRDb250YWluZXIgbGc6bWF4LXctbGdDb250YWluZXIgeGw6bWF4LXcteGxDb250YWluZXIgMnhsOm1heC13LXh4bENvbnRhaW5lciBub3JtYWw6bWF4LXctbm9ybWFsQ29udGFpbmVyIHJlbGF0aXZlIG10LTEyXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZCBncmlkLWNvbHMtMiBncmlkLXJvd3MtMSBncmlkLWZsb3ctY29sXCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgPHN2Z1xyXG4gICAgICAgICAgICAgICAgICBoZWlnaHQ9XCIzMFwiXHJcbiAgICAgICAgICAgICAgICAgIHdpZHRoPVwiMzBcIlxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmaWxsLWN1cnJlbnQgdGV4dC1wcmltYXJ5IGRhcms6dGV4dC1wcmltYXJ5ZGFya1wiXHJcbiAgICAgICAgICAgICAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxyXG4gICAgICAgICAgICAgICAgICB2aWV3Qm94PVwiMCAwIDEyOCAxMjhcIlxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICA8dGl0bGU+TGFuZGluZyBTdWNjZXNzPC90aXRsZT5cclxuICAgICAgICAgICAgICAgICAgPGcgaWQ9XCJMYW5kaW5nX1N1Y2Nlc3NcIiBkYXRhLW5hbWU9XCJMYW5kaW5nIFN1Y2Nlc3NcIj5cclxuICAgICAgICAgICAgICAgICAgICA8cGF0aFxyXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiY2xzLTFcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgZD1cIk0xMDkuMyw5MC4xQTQ2LDQ2LDAsMCwwLDY1LDM2VjIwLjA4YzEuNzgtLjYyLDcuMjEtMi4xNCwxMi41Ny4yM2ExOS4zMywxOS4zMywwLDAsMCwxNC44MiwwYy44Ny0uMzguNjEuMzEuNjEtMTcuOTNhMSwxLDAsMCwwLTEuNDMtLjkzYy0uMDcsMC02LjY5LDIuODctMTMuMTgsMEExOS40MSwxOS40MSwwLDAsMCw2NSwuOTMsMSwxLDAsMCwwLDYzLDFWMzZhNDUuODYsNDUuODYsMCwwLDAtMjguNjYsMTAuOEMxNi4xOCw0MC40OCw0LDQwLC43OSw0NS41MS0yLjI5LDUwLjg2LDMuOTQsNTkuMywxMCw2NS42OEExMSwxMSwwLDAsMCwxOCw4M2MuODEsMzguNDEsNDYuMDgsNTkuMiw3NS42NiwzNC4yMSw4LjUzLDMsMjksOS4xNSwzMy41NSwxLjMxQzEzMC4zOSwxMTMsMTIzLjg2LDEwMi42NSwxMDkuMyw5MC4xWk03Ny41OSwzLjMxQTE5LjM5LDE5LjM5LDAsMCwwLDkxLDMuODNWMTguNjhjLTEuNzkuNjItNy4yMiwyLjEzLTEyLjU3LS4yM0ExOS4xOSwxOS4xOSwwLDAsMCw2NSwxNy45M1YzLjA4QzY2LjgxLDIuNDYsNzIuMjQsMSw3Ny41OSwzLjMxWk02NSw0NXYtN2MzOS42OS45MSw1OCw1MC4yNywyOC4yMSw3Ni44MUM3MS4zMiwxMDcsNDYsOTIuNjYsMjcuNzcsNzguNjRhMTEsMTEsMCwwLDAtMy4yLTE2LjEzQTQzLjg4LDQzLjg4LDAsMCwxLDYzLDM4LjA2VjQ1QTEsMSwwLDAsMCw2NSw0NVpNMzIuNTUsNDguMzZhNDYuMjEsNDYuMjEsMCwwLDAtOS44MywxMy4yOCwxMC45MywxMC45MywwLDAsMC0xMS40LDIuNDdDLTguMzksNDMuMjMsNS4yMywzOS4wOCwzMi41NSw0OC4zNlpNMTAsNzJhOSw5LDAsMSwxLDksOUE5LDksMCwwLDEsMTAsNzJabTEwLDExYTExLDExLDAsMCwwLDYuMzQtMi44MmMxOC40NSwxNC4yMSw0My40NSwyOC4zNSw2NS4wNSwzNi4yMkM2MywxMzkuMTYsMjAuODMsMTE5LjEsMjAuMDUsODNabTEwNS40LDM0LjVjLTIuNTEsNC4zNS0xNCwzLjYyLTMwLTEuODVhNDUuNjEsNDUuNjEsMCwwLDAsMTMuNDItMjMuMjFDMTIxLjU5LDEwMy41OCwxMjgsMTEzLjEyLDEyNS40NSwxMTcuNDdaXCJcclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICA8L2c+XHJcbiAgICAgICAgICAgICAgICA8L3N2Zz5cclxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInNlbGYtZW5kIHRleHQtMnhsIHBsLTIgZGFyazp0ZXh0LWJhY2tncm91bmRcIj5TdGFydHVwczwvcD5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1lbmRcIj5cclxuICAgICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgICAgb25DbGljaz17KGUpID0+IG9uUHJvamVjdENyZWF0ZShlKX1cclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaG92ZXI6YmctcHJpbWFyeSBob3Zlcjp0ZXh0LXdoaXRlIGRhcms6aG92ZXI6YmctcHJpbWFyeWRhcmsgZGFyazpob3Zlcjp0ZXh0LWJhY2tncm91bmQgZm9jdXM6b3V0bGluZS1ub25lIGJvcmRlciBib3JkZXItcHJpbWFyeSB0ZXh0LXByaW1hcnkgdGV4dC1iYXNlIGZvbnQtbGlnaHQgcHktMiBweC02IHJvdW5kZWQtMnhsIGRhcms6dGV4dC1wcmltYXJ5ZGFyayBkYXJrOmJvcmRlci1wcmltYXJ5ZGFya1wiXHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgIE5ldyBzdGFydHVwXHJcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cInRleHQtc2Vjb25kYXJ5IHRleHQtbWQgdGV4dC1ncmF5XCI+QnJpbmcgeW91ciBpZGVhIGludG8gcmVhbGl0eTwvaDE+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtbGcgbXQtMTAgLW1iLTYgZGFyazp0ZXh0LWJhY2tncm91bmRcIj5JZGVhcyB5b3UgaW52ZW50ZWQ8L3A+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbCBncmlkIHNtOmdyaWQtY29scy0xIG1kOmdyaWQtY29scy0yZnIgbGc6Z3JpZC1jb2xzLTNmciAyeGw6Z3JpZC1jb2xzLTRmciBnYXAtOCBib3JkZXItci02IHJvdW5kZWQtMnhsIGJnLXdoaXRlIG10LTggbWItOCBkYXJrOmJnLWJhY2tncm91bmQgcC04IHRleHQtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAge3Byb2plY3RzID8gKFxyXG4gICAgICAgICAgICAgICAgcHJvamVjdHMubGVuZ3RoID09IDAgPyAoXHJcbiAgICAgICAgICAgICAgICAgIDxFbXB0eVN0YXJ0dXAgb25Qcm9qZWN0Q3JlYXRlPXtvblByb2plY3RDcmVhdGV9IC8+XHJcbiAgICAgICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgICAgICBwcm9qZWN0cy5tYXAoKHsgaW1hZ2VOYW1lLCBpbWFnZUZpbGVVcmwsIHByb2plY3ROYW1lLCBwcm9qZWN0RGVzY3JpcHRpb24sIHByb2plY3RJZCB9LCBpbmRleCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNoYWRvdyByb3VuZGVkLTJ4bCBmbGV4IGZsZXgtd3JhcCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXIgZmxleC1jb2wgaG92ZXI6c2hhZG93LWxnIHRyYW5zZm9ybSBob3ZlcjpzY2FsZS0xMDUgaG92ZXI6LXRyYW5zbGF0ZS15LTIgaG92ZXI6LXRyYW5zbGF0ZS14LTIgdHJhbnNpdGlvbiBkdXJhdGlvbi01MDAgZWFzZS1pbi1vdXRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgey8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gRFJPUERPV04gU1RBUlQgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi99XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVsYXRpdmUgaW5saW5lLWJsb2NrIHRleHQtcmlnaHQgdy00LzUgdG9wLTQgcmlnaHQtMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGNob29zZUNsYXNzZXNDbGljayhpbmRleCl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM9XCIvZG90cy1tZW51Mi5zdmdcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0PXsyNn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoPXsyNn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImN1cnNvci1wb2ludGVyXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPXtgbWVudSR7aW5kZXh9YH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm9yaWdpbi10b3AtcmlnaHQgYWJzb2x1dGUgbGVmdC0xLzIgdHJhbnNmb3JtIC10cmFuc2xhdGUteC0xLzIgdy00NCBsZzp3LTQ4IHNoYWRvdy14bCBiZy13aGl0ZSBmb2N1czpvdXRsaW5lLW5vbmUgaW52aXNpYmxlIHJvdW5kZWQtMnhsXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInB0LTEgdGV4dC1sZWZ0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidHJhbnNpdGlvbiBkdXJhdGlvbi01MDAgZWFzZS1pbi1vdXQgZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1iZXR3ZWVuIGhvdmVyOmJnLXByaW1hcnlcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICBvbkNsaWNrPXsoZSkgPT4gb25Qcm9qZWN0RWRpdChlLCBpbWFnZSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBocmVmPVwiI1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJibG9jayBweC00IHB5LTIgMnhsOnB5LTMgdGV4dC1zbSB0ZXh0LXByaW1hcnlkYXJrIHRyYW5zaXRpb24gZHVyYXRpb24tNTAwIGVhc2UtaW4tb3V0IGhvdmVyOnRleHQtYmFja2dyb3VuZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgRWRpdFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJtci0zIGZsZXgganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyIHJlbGF0aXZlIGJvdHRvbS0xXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIi9naWZzL3doYWxlLmdpZlwiIGhlaWdodD17MzB9IHdpZHRoPXszMH0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRyYW5zaXRpb24gZHVyYXRpb24tNTAwIGVhc2UtaW4tb3V0IGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktYmV0d2VlbiBob3ZlcjpiZy1wcmltYXJ5IHJvdW5kZWQtYmwtMnhsIHJvdW5kZWQtYnItMnhsXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGFcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgb25DbGljaz17KGUpID0+IG9uUHJvamVjdERlbGV0ZShlLCBpbWFnZS5wcm9qZWN0SWQpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaHJlZj1cIiNcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYmxvY2sgcHgtNCBweS0yIDJ4bDpweS0zIHRleHQtc20gdGV4dC1wcmltYXJ5ZGFyayB0cmFuc2l0aW9uIGR1cmF0aW9uLTUwMCBlYXNlLWluLW91dCBob3Zlcjp0ZXh0LWJhY2tncm91bmRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFJlbW92ZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJtci0zIGZsZXgganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyIHJlbGF0aXZlIGJvdHRvbS0xXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIi9naWZzL2JvbWIuZ2lmXCIgaGVpZ2h0PXszMH0gd2lkdGg9ezMwfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPXtpbWFnZUZpbGVVcmwgPT0gbnVsbCA/IGAvbW9kYWwvJHtpbWFnZU5hbWV9LnN2Z2AgOiBpbWFnZUZpbGVVcmx9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiIGgtNDAgdy00MCBwLTQgYm9yZGVyLWIgYm9yZGVyLXByaW1hcnlcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGhlaWdodDogMTgwIH19IGNsYXNzTmFtZT1cIiBvdmVyZmxvdy1zY3JvbGwgbXQtMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCBjbGFzc05hbWU9XCJiZy13aGl0ZSB0ZXh0LWNlbnRlclwiIHZhbHVlPXtwcm9qZWN0TmFtZX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlciBtdC0xIHRleHQtc20gdGV4dC1ncmF5XCI+e3Byb2plY3REZXNjcmlwdGlvbn08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgICAgPEJvdW5jZUxvYWRlckNvbXBvbmVudCAvPlxyXG4gICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8TWVtYmVyc0NvZGUgLz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L05hdmJhclRlbXBsYXRlPlxyXG4gICAgPC8+XHJcbiAgKTtcclxufTtcclxuXHJcbi8vIGV4cG9ydCBjb25zdCBnZXRTZXJ2ZXJTaWRlUHJvcHMgPSBhc3luYyAoY29udGV4dCkgPT4ge1xyXG4vLyAgIGNvbnN0IGNvb2tpZXMgPSBhd2FpdCBjb250ZXh0LnJlcS5oZWFkZXJzLmNvb2tpZTtcclxuLy8gICBjb25zdCBwYXJzZWRDb29raWVzID0gY29va2llLnBhcnNlKGNvb2tpZXMpO1xyXG4vLyAgIGNvbnN0IHByb2plY3RzID0gW107XHJcbi8vICAgbGV0IHJlZiA9IGRiLmNvbGxlY3Rpb24oJ3Byb2plY3RzJyk7XHJcblxyXG4vLyAgIGNvbnN0IHNuYXBzaG90ID0gYXdhaXQgcmVmLmdldCgpO1xyXG5cclxuLy8gICBzbmFwc2hvdC5mb3JFYWNoKChkb2MpID0+IHtcclxuLy8gICAgIGNvbnN0IGRhdGEgPSBkb2MuZGF0YSgpO1xyXG4vLyAgICAgZGF0YS5wcm9qZWN0VXNlcnMubWFwKCh1c2VyKSA9PiB7XHJcbi8vICAgICAgIGlmICh1c2VyLnVzZXJVaWQgPT09IHBhcnNlZENvb2tpZXMudWlkKSB7XHJcbi8vICAgICAgICAgcHJvamVjdHMucHVzaCh7IC4uLmRhdGEgfSk7XHJcbi8vICAgICAgIH1cclxuLy8gICAgIH0pO1xyXG4vLyAgIH0pO1xyXG4vLyAgIHJldHVybiB7XHJcbi8vICAgICBwcm9wczogeyBwcm9qZWN0cyB9LFxyXG4vLyAgIH07XHJcbi8vIH07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQcm9qZWN0c01hbmFnZXI7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=