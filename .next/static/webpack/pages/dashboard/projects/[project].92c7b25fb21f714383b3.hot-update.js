webpackHotUpdate_N_E("pages/dashboard/projects/[project]",{

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
/* harmony import */ var C_off_saas_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/regenerator */ "./node_modules/next/node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var C_off_saas_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(C_off_saas_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var C_off_saas_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! js-cookie */ "./node_modules/js-cookie/src/js.cookie.js");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _lib_firebase__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../lib/firebase */ "./lib/firebase.js");
/* harmony import */ var _lib_newAuth__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../lib/newAuth */ "./lib/newAuth.js");





var _jsxFileName = "C:\\off-saas\\pages\\dashboard\\projects\\[project]\\index.js",
    _this = undefined,
    _s = $RefreshSig$();







var ProjectPage = function ProjectPage(_ref) {
  _s();

  var projects = _ref.projects;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(null),
      selectedProject = _useState[0],
      setSelectedProject = _useState[1];

  var containerRef = Object(react__WEBPACK_IMPORTED_MODULE_3__["useRef"])();

  var _useAuth = Object(_lib_newAuth__WEBPACK_IMPORTED_MODULE_7__["useAuth"])(),
      currentUser = _useAuth.currentUser;

  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_4__["useRouter"])();
  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function () {
    var uid = js_cookie__WEBPACK_IMPORTED_MODULE_5___default.a.get('uid');
    var filteredArray = projects && projects.filter(function (project) {
      return project.uid == uid;
    });
    console.log(filteredArray);
    filteredArray && filteredArray.length == 1 && setSelectedProject(filteredArray[0]);
  }, [projects]);
  console.log(projects);
  console.log(selectedProject); // BUSINESS PLAN CREATE

  var onBusinessPlanCreate = /*#__PURE__*/function () {
    var _ref2 = Object(C_off_saas_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/C_off_saas_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee() {
      return C_off_saas_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return _lib_firebase__WEBPACK_IMPORTED_MODULE_6__["db"].collection('projects').doc(selectedProject.projectId).collection('businessPlan').doc(Router.query.project).set({
                uid: currentUser.uid,
                projectId: selectedProject.projectId,
                pathName: selectedProject.projectName
              });

            case 2:
              _context.next = 4;
              return _lib_firebase__WEBPACK_IMPORTED_MODULE_6__["db"].collection('projects').doc(selectedProject.projectId).update({
                isBusinessPlanCreated: true
              });

            case 4:
              Router.push("/dashboard/projects/".concat(router.query.project, "/business-plan"));

            case 5:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function onBusinessPlanCreate() {
      return _ref2.apply(this, arguments);
    };
  }();

  console.log('CURRENT PROJECT --> ', selectedProject);

  var onCashFlowAnalysisCreate = /*#__PURE__*/function () {
    var _ref3 = Object(C_off_saas_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/C_off_saas_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee2() {
      return C_off_saas_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return _lib_firebase__WEBPACK_IMPORTED_MODULE_6__["db"].collection('projects').doc(selectedProject.projectId).collection('cashFlow').doc(router.query.project).collection('inputs').doc().set({
                uid: currentUser.uid,
                projectId: selectedProject.projectId,
                pathName: selectedProject.projectName,
                revenueElements: [],
                costsElements: [],
                budgetElements: [],
                globalStartDate: '',
                globalEndDate: '',
                periods: [],
                tax: '0'
              });

            case 2:
              _context2.next = 4;
              return _lib_firebase__WEBPACK_IMPORTED_MODULE_6__["db"].collection('projects').doc(selectedProject.projectId).update({
                isCashflowCreated: true
              });

            case 4:
              router.push("/dashboard/projects/".concat(router.query.project, "/cash-flow"));

            case 5:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }));

    return function onCashFlowAnalysisCreate() {
      return _ref3.apply(this, arguments);
    };
  }();

  var onCompetitorsAnalysisCreate = /*#__PURE__*/function () {
    var _ref4 = Object(C_off_saas_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/C_off_saas_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee3() {
      return C_off_saas_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              _context3.next = 2;
              return _lib_firebase__WEBPACK_IMPORTED_MODULE_6__["db"].collection('projects').doc(selectedProject.projectId).collection('competitors').doc(router.query.project).collection('inputs').doc().set({
                uid: currentUser.uid,
                projectId: selectedProject.projectId,
                pathName: selectedProject.projectName,
                competitorsArray: []
              });

            case 2:
              _context3.next = 4;
              return _lib_firebase__WEBPACK_IMPORTED_MODULE_6__["db"].collection('projects').doc(selectedProject.projectId).update({
                isCompetitorsAnalysisCreated: true
              });

            case 4:
              router.push("/dashboard/startup/".concat(router.query.project, "/competitors"));

            case 5:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3);
    }));

    return function onCompetitorsAnalysisCreate() {
      return _ref4.apply(this, arguments);
    };
  }();

  if (router.isFallback) {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
        children: "Loading..."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 80,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 7
    }, _this);
  }

  return (
    /*#__PURE__*/
    // <div className="w-full h-full justify-center items-center">
    //   <h2 className="text-center">Welcome to the project page! Project name:</h2>
    //   {selectedProject !== null && (
    //     <>
    //       <p className="text-center">{selectedProject.projectName}</p>
    //       <p className="text-center">{selectedProject.uid}</p>
    //     </>
    //   )}
    // </div>
    Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(TippyMonster, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 96,
        columnNumber: 7
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(NavbarTemplate, {
        children: selectedProject ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          ref: containerRef,
          className: "min-h-screen w-full relative flex flex-col items-center",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "w-full sm:max-w-smContainer md:max-w-mdContainer lg:max-w-lgContainer xl:max-w-xlContainer 2xl:max-w-xxlContainer normal:max-w-normalContainer relative mt-16",
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
                    lineNumber: 111,
                    columnNumber: 21
                  }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("g", {
                    id: "Landing_Success",
                    "data-name": "Landing Success",
                    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
                      className: "cls-1",
                      d: "M109.3,90.1A46,46,0,0,0,65,36V20.08c1.78-.62,7.21-2.14,12.57.23a19.33,19.33,0,0,0,14.82,0c.87-.38.61.31.61-17.93a1,1,0,0,0-1.43-.93c-.07,0-6.69,2.87-13.18,0A19.41,19.41,0,0,0,65,.93,1,1,0,0,0,63,1V36a45.86,45.86,0,0,0-28.66,10.8C16.18,40.48,4,40,.79,45.51-2.29,50.86,3.94,59.3,10,65.68A11,11,0,0,0,18,83c.81,38.41,46.08,59.2,75.66,34.21,8.53,3,29,9.15,33.55,1.31C130.39,113,123.86,102.65,109.3,90.1ZM77.59,3.31A19.39,19.39,0,0,0,91,3.83V18.68c-1.79.62-7.22,2.13-12.57-.23A19.19,19.19,0,0,0,65,17.93V3.08C66.81,2.46,72.24,1,77.59,3.31ZM65,45v-7c39.69.91,58,50.27,28.21,76.81C71.32,107,46,92.66,27.77,78.64a11,11,0,0,0-3.2-16.13A43.88,43.88,0,0,1,63,38.06V45A1,1,0,0,0,65,45ZM32.55,48.36a46.21,46.21,0,0,0-9.83,13.28,10.93,10.93,0,0,0-11.4,2.47C-8.39,43.23,5.23,39.08,32.55,48.36ZM10,72a9,9,0,1,1,9,9A9,9,0,0,1,10,72Zm10,11a11,11,0,0,0,6.34-2.82c18.45,14.21,43.45,28.35,65.05,36.22C63,139.16,20.83,119.1,20.05,83Zm105.4,34.5c-2.51,4.35-14,3.62-30-1.85a45.61,45.61,0,0,0,13.42-23.21C121.59,103.58,128,113.12,125.45,117.47Z"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 113,
                      columnNumber: 23
                    }, _this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 112,
                    columnNumber: 21
                  }, _this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 104,
                  columnNumber: 19
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                  className: "text-primarydark text-2xl mt-2 pl-2 dark:text-background",
                  children: selectedProject && selectedProject.projectName
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 119,
                  columnNumber: 19
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 103,
                columnNumber: 17
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: "flex justify-end",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
                  onClick: function onClick() {
                    return router.push("/dashboard/startup/".concat(router.query.project, "/edit"));
                  },
                  className: "hover:bg-primary hover:text-white dark:hover:bg-primarydark dark:hover:text-background focus:outline-none border border-primary text-primary text-sm font-light py-2 px-8 rounded-2xl mt-2 dark:text-primarydark dark:border-primarydark",
                  children: "Settings"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 125,
                  columnNumber: 19
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 123,
                columnNumber: 17
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 102,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
                className: "text-secondary text-md text-gray",
                children: "This is the best startup in the tech field"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 134,
                columnNumber: 17
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 133,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "grid grid-cols-2fr grid-rows-3fr mt-20 gap-16 mb-32",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: "rounded-2xl transform hover:scale-105 hover:-translate-y-2 hover:-translate-x-2 transition duration-500 ease-in-out",
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
                  className: "text-primarydark text-lg dark:text-background",
                  children: "Startup idea"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 140,
                  columnNumber: 19
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                  // style={{ maxHeight: 330 }}
                  className: "shadow-lg mt-1 w-full flex flex-col justify-center items-center border-r-6 rounded-2xl bg-white dark:bg-background",
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Image, {
                    height: 200,
                    width: 200,
                    src: "/launch-maker.svg"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 145,
                    columnNumber: 21
                  }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
                    className: "text-base text-gray text-center px-8",
                    children: "Startup idea will guide you through the process of creating your business plan. \uD83D\uDD0E"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 146,
                    columnNumber: 21
                  }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                    className: "p-4",
                    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
                      className: "hover:bg-primary hover:text-white dark:hover:bg-primarydark dark:hover:text-background focus:outline-none border border-primary text-primary dark:text-primarydark dark:border-primarydark text-sm font-light py-2 px-6 rounded-2xl m-2",
                      children: "Create your startup idea"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 150,
                      columnNumber: 23
                    }, _this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 149,
                    columnNumber: 21
                  }, _this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 141,
                  columnNumber: 19
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 139,
                columnNumber: 17
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: "rounded-2xl transform hover:scale-105 hover:-translate-y-2 hover:-translate-x-2 transition duration-500 ease-in-out",
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
                  className: "text-primarydark text-lg dark:text-background",
                  children: "Business plan"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 158,
                  columnNumber: 19
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                  // style={{ maxHeight: 330 }}
                  className: "shadow-lg mt-1 w-full flex flex-col justify-center items-center border-r-6 rounded-2xl bg-white dark:bg-background",
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Image, {
                    height: 200,
                    width: 200,
                    src: "/main-sections/business-plan.svg"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 163,
                    columnNumber: 21
                  }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
                    className: "text-base text-gray text-center px-8",
                    children: "Let's create your business plan, which will be the core of your startup presentation. \uD83D\uDD0E"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 164,
                    columnNumber: 21
                  }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                    className: "p-4",
                    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
                      onClick: onBusinessPlanCreate,
                      className: "hover:bg-primary hover:text-white dark:hover:bg-primarydark dark:hover:text-background focus:outline-none border border-primary text-primary dark:text-primarydark dark:border-primarydark text-sm font-light py-2 px-6 rounded-2xl m-2",
                      children: "Create your business plan"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 168,
                      columnNumber: 23
                    }, _this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 167,
                    columnNumber: 21
                  }, _this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 159,
                  columnNumber: 19
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 157,
                columnNumber: 17
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: "rounded-2xl transform hover:scale-105 hover:-translate-y-2 hover:-translate-x-2 transition duration-500 ease-in-out",
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
                  className: "text-primarydark text-lg dark:text-background",
                  children: "Cash flow analysis"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 179,
                  columnNumber: 19
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                  // style={{ maxHeight: 330 }}
                  className: "shadow-lg mt-1 w-full flex flex-col justify-center items-center border-r-6 rounded-2xl bg-white dark:bg-background",
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Image, {
                    height: 200,
                    width: 200,
                    src: "/main-sections/cash-flow2.svg"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 184,
                    columnNumber: 21
                  }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
                    className: " text-base text-gray text-center px-8",
                    children: "Cash flow analysis will allow you to analyze the liquidity of your startup. \uD83D\uDD0E"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 185,
                    columnNumber: 21
                  }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                    className: "p-4",
                    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
                      onClick: onCashFlowAnalysisCreate,
                      className: "hover:bg-primary hover:text-white dark:hover:bg-primarydark dark:hover:text-background focus:outline-none border border-primary text-primary dark:text-primarydark dark:border-primarydark text-sm font-light py-2 px-6 rounded-2xl m-2",
                      children: "Create your startup cash flow"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 189,
                      columnNumber: 23
                    }, _this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 188,
                    columnNumber: 21
                  }, _this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 180,
                  columnNumber: 19
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 178,
                columnNumber: 17
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: "rounded-2xl transform hover:scale-105 hover:-translate-y-2 hover:-translate-x-2 transition duration-500 ease-in-out",
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
                  className: "text-primarydark text-lg dark:text-background",
                  children: "Competitors analysis"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 200,
                  columnNumber: 19
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                  // style={{ maxHeight: 330 }}
                  className: "shadow-lg mt-1 w-full flex flex-col justify-center items-center border-r-6 rounded-2xl bg-white dark:bg-background",
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Image, {
                    height: 200,
                    width: 200,
                    src: "/main-sections/competitors.svg"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 205,
                    columnNumber: 21
                  }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
                    className: "text-base text-gray text-center px-8",
                    children: "Competitor analysis will help you better prepare to enter a given market. \uD83D\uDD0E"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 206,
                    columnNumber: 21
                  }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                    className: "p-4",
                    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
                      onClick: onCompetitorsAnalysisCreate,
                      className: "hover:bg-primary hover:text-white dark:hover:bg-primarydark dark:hover:text-background focus:outline-none border border-primary text-primary dark:text-primarydark dark:border-primarydark text-sm font-light py-2 px-6 rounded-2xl m-2",
                      children: "Analyze your startup competitors"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 210,
                      columnNumber: 23
                    }, _this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 209,
                    columnNumber: 21
                  }, _this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 201,
                  columnNumber: 19
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 199,
                columnNumber: 17
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: "rounded-2xl transform hover:scale-105 hover:-translate-y-2 hover:-translate-x-2 transition duration-500 ease-in-out",
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
                  className: "text-primarydark text-lg dark:text-background",
                  children: "Startup members"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 221,
                  columnNumber: 19
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                  // style={{ maxHeight: 330 }}
                  className: "shadow-lg mt-1 w-full flex flex-col justify-center items-center border-r-6 rounded-2xl bg-white dark:bg-background",
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Image, {
                    height: 200,
                    width: 200,
                    src: "/main-sections/members1.svg"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 226,
                    columnNumber: 21
                  }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
                    className: "text-base text-gray text-center px-8",
                    children: "Identify the roles of your team and the people who will have access to this project. \uD83D\uDD0E"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 227,
                    columnNumber: 21
                  }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                    className: "p-4",
                    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
                      onClick: onCompetitorsAnalysisCreate,
                      className: "hover:bg-primary hover:text-white dark:hover:bg-primarydark dark:hover:text-background focus:outline-none border border-primary text-primary dark:text-primarydark dark:border-primarydark text-sm font-light py-2 px-6 rounded-2xl m-2",
                      children: "Manage your startup members"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 231,
                      columnNumber: 23
                    }, _this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 230,
                    columnNumber: 21
                  }, _this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 222,
                  columnNumber: 19
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 220,
                columnNumber: 17
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 137,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 100,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 99,
          columnNumber: 11
        }, _this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "h-screen w-full flex justify-center items-center",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            className: "text-primarydark text-lg",
            children: "...Loading"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 245,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 244,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 97,
        columnNumber: 7
      }, _this)]
    }, void 0, true)
  );
};

_s(ProjectPage, "Hyq+0fnWFzoycA+adWwDcMUbeck=", false, function () {
  return [_lib_newAuth__WEBPACK_IMPORTED_MODULE_7__["useAuth"], next_router__WEBPACK_IMPORTED_MODULE_4__["useRouter"]];
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvZGFzaGJvYXJkL3Byb2plY3RzL1twcm9qZWN0XS9pbmRleC5qcyJdLCJuYW1lcyI6WyJQcm9qZWN0UGFnZSIsInByb2plY3RzIiwidXNlU3RhdGUiLCJzZWxlY3RlZFByb2plY3QiLCJzZXRTZWxlY3RlZFByb2plY3QiLCJjb250YWluZXJSZWYiLCJ1c2VSZWYiLCJ1c2VBdXRoIiwiY3VycmVudFVzZXIiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJ1c2VFZmZlY3QiLCJ1aWQiLCJDb29raWVzIiwiZ2V0IiwiZmlsdGVyZWRBcnJheSIsImZpbHRlciIsInByb2plY3QiLCJjb25zb2xlIiwibG9nIiwibGVuZ3RoIiwib25CdXNpbmVzc1BsYW5DcmVhdGUiLCJkYkNsaWVudCIsImNvbGxlY3Rpb24iLCJkb2MiLCJwcm9qZWN0SWQiLCJSb3V0ZXIiLCJxdWVyeSIsInNldCIsInBhdGhOYW1lIiwicHJvamVjdE5hbWUiLCJ1cGRhdGUiLCJpc0J1c2luZXNzUGxhbkNyZWF0ZWQiLCJwdXNoIiwib25DYXNoRmxvd0FuYWx5c2lzQ3JlYXRlIiwicmV2ZW51ZUVsZW1lbnRzIiwiY29zdHNFbGVtZW50cyIsImJ1ZGdldEVsZW1lbnRzIiwiZ2xvYmFsU3RhcnREYXRlIiwiZ2xvYmFsRW5kRGF0ZSIsInBlcmlvZHMiLCJ0YXgiLCJpc0Nhc2hmbG93Q3JlYXRlZCIsIm9uQ29tcGV0aXRvcnNBbmFseXNpc0NyZWF0ZSIsImNvbXBldGl0b3JzQXJyYXkiLCJpc0NvbXBldGl0b3JzQW5hbHlzaXNDcmVhdGVkIiwiaXNGYWxsYmFjayJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsV0FBVyxHQUFHLFNBQWRBLFdBQWMsT0FBa0I7QUFBQTs7QUFBQSxNQUFmQyxRQUFlLFFBQWZBLFFBQWU7O0FBQUEsa0JBQ1VDLHNEQUFRLENBQUMsSUFBRCxDQURsQjtBQUFBLE1BQzdCQyxlQUQ2QjtBQUFBLE1BQ1pDLGtCQURZOztBQUVwQyxNQUFNQyxZQUFZLEdBQUdDLG9EQUFNLEVBQTNCOztBQUZvQyxpQkFHWkMsNERBQU8sRUFISztBQUFBLE1BRzVCQyxXQUg0QixZQUc1QkEsV0FINEI7O0FBSXBDLE1BQU1DLE1BQU0sR0FBR0MsNkRBQVMsRUFBeEI7QUFDQUMseURBQVMsQ0FBQyxZQUFNO0FBQ2QsUUFBTUMsR0FBRyxHQUFHQyxnREFBTyxDQUFDQyxHQUFSLENBQVksS0FBWixDQUFaO0FBQ0EsUUFBTUMsYUFBYSxHQUFHZCxRQUFRLElBQUlBLFFBQVEsQ0FBQ2UsTUFBVCxDQUFnQixVQUFDQyxPQUFEO0FBQUEsYUFBYUEsT0FBTyxDQUFDTCxHQUFSLElBQWVBLEdBQTVCO0FBQUEsS0FBaEIsQ0FBbEM7QUFDQU0sV0FBTyxDQUFDQyxHQUFSLENBQVlKLGFBQVo7QUFDQUEsaUJBQWEsSUFBSUEsYUFBYSxDQUFDSyxNQUFkLElBQXdCLENBQXpDLElBQThDaEIsa0JBQWtCLENBQUNXLGFBQWEsQ0FBQyxDQUFELENBQWQsQ0FBaEU7QUFDRCxHQUxRLEVBS04sQ0FBQ2QsUUFBRCxDQUxNLENBQVQ7QUFNQWlCLFNBQU8sQ0FBQ0MsR0FBUixDQUFZbEIsUUFBWjtBQUNBaUIsU0FBTyxDQUFDQyxHQUFSLENBQVloQixlQUFaLEVBWm9DLENBY3BDOztBQUNBLE1BQU1rQixvQkFBb0I7QUFBQSxtUkFBRztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFDckJDLGdEQUFRLENBQUNDLFVBQVQsQ0FBb0IsVUFBcEIsRUFBZ0NDLEdBQWhDLENBQW9DckIsZUFBZSxDQUFDc0IsU0FBcEQsRUFBK0RGLFVBQS9ELENBQTBFLGNBQTFFLEVBQTBGQyxHQUExRixDQUE4RkUsTUFBTSxDQUFDQyxLQUFQLENBQWFWLE9BQTNHLEVBQW9IVyxHQUFwSCxDQUF3SDtBQUM1SGhCLG1CQUFHLEVBQUVKLFdBQVcsQ0FBQ0ksR0FEMkc7QUFFNUhhLHlCQUFTLEVBQUV0QixlQUFlLENBQUNzQixTQUZpRztBQUc1SEksd0JBQVEsRUFBRTFCLGVBQWUsQ0FBQzJCO0FBSGtHLGVBQXhILENBRHFCOztBQUFBO0FBQUE7QUFBQSxxQkFNckJSLGdEQUFRLENBQUNDLFVBQVQsQ0FBb0IsVUFBcEIsRUFBZ0NDLEdBQWhDLENBQW9DckIsZUFBZSxDQUFDc0IsU0FBcEQsRUFBK0RNLE1BQS9ELENBQXNFO0FBQUVDLHFDQUFxQixFQUFFO0FBQXpCLGVBQXRFLENBTnFCOztBQUFBO0FBTzNCTixvQkFBTSxDQUFDTyxJQUFQLCtCQUFtQ3hCLE1BQU0sQ0FBQ2tCLEtBQVAsQ0FBYVYsT0FBaEQ7O0FBUDJCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQUg7O0FBQUEsb0JBQXBCSSxvQkFBb0I7QUFBQTtBQUFBO0FBQUEsS0FBMUI7O0FBVUFILFNBQU8sQ0FBQ0MsR0FBUixDQUFZLHNCQUFaLEVBQW9DaEIsZUFBcEM7O0FBRUEsTUFBTStCLHdCQUF3QjtBQUFBLG1SQUFHO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUN6QlosZ0RBQVEsQ0FDWEMsVUFERyxDQUNRLFVBRFIsRUFFSEMsR0FGRyxDQUVDckIsZUFBZSxDQUFDc0IsU0FGakIsRUFHSEYsVUFIRyxDQUdRLFVBSFIsRUFJSEMsR0FKRyxDQUlDZixNQUFNLENBQUNrQixLQUFQLENBQWFWLE9BSmQsRUFLSE0sVUFMRyxDQUtRLFFBTFIsRUFNSEMsR0FORyxHQU9ISSxHQVBHLENBT0M7QUFDSGhCLG1CQUFHLEVBQUVKLFdBQVcsQ0FBQ0ksR0FEZDtBQUVIYSx5QkFBUyxFQUFFdEIsZUFBZSxDQUFDc0IsU0FGeEI7QUFHSEksd0JBQVEsRUFBRTFCLGVBQWUsQ0FBQzJCLFdBSHZCO0FBSUhLLCtCQUFlLEVBQUUsRUFKZDtBQUtIQyw2QkFBYSxFQUFFLEVBTFo7QUFNSEMsOEJBQWMsRUFBRSxFQU5iO0FBT0hDLCtCQUFlLEVBQUUsRUFQZDtBQVFIQyw2QkFBYSxFQUFFLEVBUlo7QUFTSEMsdUJBQU8sRUFBRSxFQVROO0FBVUhDLG1CQUFHLEVBQUU7QUFWRixlQVBELENBRHlCOztBQUFBO0FBQUE7QUFBQSxxQkFvQnpCbkIsZ0RBQVEsQ0FBQ0MsVUFBVCxDQUFvQixVQUFwQixFQUFnQ0MsR0FBaEMsQ0FBb0NyQixlQUFlLENBQUNzQixTQUFwRCxFQUErRE0sTUFBL0QsQ0FBc0U7QUFBRVcsaUNBQWlCLEVBQUU7QUFBckIsZUFBdEUsQ0FwQnlCOztBQUFBO0FBcUIvQmpDLG9CQUFNLENBQUN3QixJQUFQLCtCQUFtQ3hCLE1BQU0sQ0FBQ2tCLEtBQVAsQ0FBYVYsT0FBaEQ7O0FBckIrQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFIOztBQUFBLG9CQUF4QmlCLHdCQUF3QjtBQUFBO0FBQUE7QUFBQSxLQUE5Qjs7QUF3QkEsTUFBTVMsMkJBQTJCO0FBQUEsbVJBQUc7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBQzVCckIsZ0RBQVEsQ0FDWEMsVUFERyxDQUNRLFVBRFIsRUFFSEMsR0FGRyxDQUVDckIsZUFBZSxDQUFDc0IsU0FGakIsRUFHSEYsVUFIRyxDQUdRLGFBSFIsRUFJSEMsR0FKRyxDQUlDZixNQUFNLENBQUNrQixLQUFQLENBQWFWLE9BSmQsRUFLSE0sVUFMRyxDQUtRLFFBTFIsRUFNSEMsR0FORyxHQU9ISSxHQVBHLENBT0M7QUFDSGhCLG1CQUFHLEVBQUVKLFdBQVcsQ0FBQ0ksR0FEZDtBQUVIYSx5QkFBUyxFQUFFdEIsZUFBZSxDQUFDc0IsU0FGeEI7QUFHSEksd0JBQVEsRUFBRTFCLGVBQWUsQ0FBQzJCLFdBSHZCO0FBSUhjLGdDQUFnQixFQUFFO0FBSmYsZUFQRCxDQUQ0Qjs7QUFBQTtBQUFBO0FBQUEscUJBYzVCdEIsZ0RBQVEsQ0FBQ0MsVUFBVCxDQUFvQixVQUFwQixFQUFnQ0MsR0FBaEMsQ0FBb0NyQixlQUFlLENBQUNzQixTQUFwRCxFQUErRE0sTUFBL0QsQ0FBc0U7QUFBRWMsNENBQTRCLEVBQUU7QUFBaEMsZUFBdEUsQ0FkNEI7O0FBQUE7QUFlbENwQyxvQkFBTSxDQUFDd0IsSUFBUCw4QkFBa0N4QixNQUFNLENBQUNrQixLQUFQLENBQWFWLE9BQS9DOztBQWZrQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFIOztBQUFBLG9CQUEzQjBCLDJCQUEyQjtBQUFBO0FBQUE7QUFBQSxLQUFqQzs7QUFrQkEsTUFBSWxDLE1BQU0sQ0FBQ3FDLFVBQVgsRUFBdUI7QUFDckIsd0JBQ0U7QUFBQSw2QkFDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFERjtBQUtEOztBQUVEO0FBQUE7QUFDRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBLDhCQUNFLHFFQUFDLFlBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURGLGVBRUUscUVBQUMsY0FBRDtBQUFBLGtCQUNHM0MsZUFBZSxnQkFDZDtBQUFLLGFBQUcsRUFBRUUsWUFBVjtBQUF3QixtQkFBUyxFQUFDLHlEQUFsQztBQUFBLGlDQUNFO0FBQUsscUJBQVMsRUFBQywrSkFBZjtBQUFBLG9DQUVFO0FBQUssdUJBQVMsRUFBQyw0Q0FBZjtBQUFBLHNDQUNFO0FBQUsseUJBQVMsRUFBQyxtQkFBZjtBQUFBLHdDQUNFO0FBQ0Usd0JBQU0sRUFBQyxJQURUO0FBRUUsdUJBQUssRUFBQyxJQUZSO0FBR0UsMkJBQVMsRUFBQyxpREFIWjtBQUlFLHVCQUFLLEVBQUMsNEJBSlI7QUFLRSx5QkFBTyxFQUFDLGFBTFY7QUFBQSwwQ0FPRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSwyQkFQRixlQVFFO0FBQUcsc0JBQUUsRUFBQyxpQkFBTjtBQUF3QixpQ0FBVSxpQkFBbEM7QUFBQSwyQ0FDRTtBQUNFLCtCQUFTLEVBQUMsT0FEWjtBQUVFLHVCQUFDLEVBQUM7QUFGSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSwyQkFSRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEseUJBREYsZUFnQkU7QUFBRywyQkFBUyxFQUFDLDBEQUFiO0FBQUEsNEJBQ0dGLGVBQWUsSUFBSUEsZUFBZSxDQUFDMkI7QUFEdEM7QUFBQTtBQUFBO0FBQUE7QUFBQSx5QkFoQkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQURGLGVBcUJFO0FBQUsseUJBQVMsRUFBQyxrQkFBZjtBQUFBLHVDQUVFO0FBQ0UseUJBQU8sRUFBRTtBQUFBLDJCQUFNckIsTUFBTSxDQUFDd0IsSUFBUCw4QkFBa0N4QixNQUFNLENBQUNrQixLQUFQLENBQWFWLE9BQS9DLFdBQU47QUFBQSxtQkFEWDtBQUVFLDJCQUFTLEVBQUMsME9BRlo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQXJCRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBRkYsZUFpQ0U7QUFBQSxxQ0FDRTtBQUFJLHlCQUFTLEVBQUMsa0NBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQWpDRixlQXFDRTtBQUFLLHVCQUFTLEVBQUMscURBQWY7QUFBQSxzQ0FFRTtBQUFLLHlCQUFTLEVBQUMscUhBQWY7QUFBQSx3Q0FDRTtBQUFJLDJCQUFTLEVBQUMsK0NBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEseUJBREYsZUFFRTtBQUNFO0FBQ0EsMkJBQVMsRUFBQyxvSEFGWjtBQUFBLDBDQUlFLHFFQUFDLEtBQUQ7QUFBTywwQkFBTSxFQUFFLEdBQWY7QUFBb0IseUJBQUssRUFBRSxHQUEzQjtBQUFnQyx1QkFBRyxFQUFDO0FBQXBDO0FBQUE7QUFBQTtBQUFBO0FBQUEsMkJBSkYsZUFLRTtBQUFJLDZCQUFTLEVBQUMsc0NBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsMkJBTEYsZUFRRTtBQUFLLDZCQUFTLEVBQUMsS0FBZjtBQUFBLDJDQUNFO0FBQVEsK0JBQVMsRUFBQyx5T0FBbEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLDJCQVJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx5QkFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBRkYsZUFvQkU7QUFBSyx5QkFBUyxFQUFDLHFIQUFmO0FBQUEsd0NBQ0U7QUFBSSwyQkFBUyxFQUFDLCtDQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHlCQURGLGVBRUU7QUFDRTtBQUNBLDJCQUFTLEVBQUMsb0hBRlo7QUFBQSwwQ0FJRSxxRUFBQyxLQUFEO0FBQU8sMEJBQU0sRUFBRSxHQUFmO0FBQW9CLHlCQUFLLEVBQUUsR0FBM0I7QUFBZ0MsdUJBQUcsRUFBQztBQUFwQztBQUFBO0FBQUE7QUFBQTtBQUFBLDJCQUpGLGVBS0U7QUFBSSw2QkFBUyxFQUFDLHNDQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDJCQUxGLGVBUUU7QUFBSyw2QkFBUyxFQUFDLEtBQWY7QUFBQSwyQ0FDRTtBQUNFLDZCQUFPLEVBQUVJLG9CQURYO0FBRUUsK0JBQVMsRUFBQyx5T0FGWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsMkJBUkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHlCQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFwQkYsZUF5Q0U7QUFBSyx5QkFBUyxFQUFDLHFIQUFmO0FBQUEsd0NBQ0U7QUFBSSwyQkFBUyxFQUFDLCtDQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHlCQURGLGVBRUU7QUFDRTtBQUNBLDJCQUFTLEVBQUMsb0hBRlo7QUFBQSwwQ0FJRSxxRUFBQyxLQUFEO0FBQU8sMEJBQU0sRUFBRSxHQUFmO0FBQW9CLHlCQUFLLEVBQUUsR0FBM0I7QUFBZ0MsdUJBQUcsRUFBQztBQUFwQztBQUFBO0FBQUE7QUFBQTtBQUFBLDJCQUpGLGVBS0U7QUFBSSw2QkFBUyxFQUFDLHVDQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDJCQUxGLGVBUUU7QUFBSyw2QkFBUyxFQUFDLEtBQWY7QUFBQSwyQ0FDRTtBQUNFLDZCQUFPLEVBQUVhLHdCQURYO0FBRUUsK0JBQVMsRUFBQyx5T0FGWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsMkJBUkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHlCQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkF6Q0YsZUE4REU7QUFBSyx5QkFBUyxFQUFDLHFIQUFmO0FBQUEsd0NBQ0U7QUFBSSwyQkFBUyxFQUFDLCtDQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHlCQURGLGVBRUU7QUFDRTtBQUNBLDJCQUFTLEVBQUMsb0hBRlo7QUFBQSwwQ0FJRSxxRUFBQyxLQUFEO0FBQU8sMEJBQU0sRUFBRSxHQUFmO0FBQW9CLHlCQUFLLEVBQUUsR0FBM0I7QUFBZ0MsdUJBQUcsRUFBQztBQUFwQztBQUFBO0FBQUE7QUFBQTtBQUFBLDJCQUpGLGVBS0U7QUFBSSw2QkFBUyxFQUFDLHNDQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDJCQUxGLGVBUUU7QUFBSyw2QkFBUyxFQUFDLEtBQWY7QUFBQSwyQ0FDRTtBQUNFLDZCQUFPLEVBQUVTLDJCQURYO0FBRUUsK0JBQVMsRUFBQyx5T0FGWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsMkJBUkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHlCQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkE5REYsZUFtRkU7QUFBSyx5QkFBUyxFQUFDLHFIQUFmO0FBQUEsd0NBQ0U7QUFBSSwyQkFBUyxFQUFDLCtDQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHlCQURGLGVBRUU7QUFDRTtBQUNBLDJCQUFTLEVBQUMsb0hBRlo7QUFBQSwwQ0FJRSxxRUFBQyxLQUFEO0FBQU8sMEJBQU0sRUFBRSxHQUFmO0FBQW9CLHlCQUFLLEVBQUUsR0FBM0I7QUFBZ0MsdUJBQUcsRUFBQztBQUFwQztBQUFBO0FBQUE7QUFBQTtBQUFBLDJCQUpGLGVBS0U7QUFBSSw2QkFBUyxFQUFDLHNDQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDJCQUxGLGVBUUU7QUFBSyw2QkFBUyxFQUFDLEtBQWY7QUFBQSwyQ0FDRTtBQUNFLDZCQUFPLEVBQUVBLDJCQURYO0FBRUUsK0JBQVMsRUFBQyx5T0FGWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsMkJBUkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHlCQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFuRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQXJDRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURjLGdCQWtKZDtBQUFLLG1CQUFTLEVBQUMsa0RBQWY7QUFBQSxpQ0FDRTtBQUFHLHFCQUFTLEVBQUMsMEJBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBbkpKO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFGRjtBQUFBO0FBVkY7QUFzS0QsQ0FuUEQ7O0dBQU0zQyxXO1VBR29CTyxvRCxFQUNURyxxRDs7O0tBSlhWLFc7QUE0Uk47QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFZUEsMEVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvZGFzaGJvYXJkL3Byb2plY3RzL1twcm9qZWN0XS45MmM3YjI1ZmIyMWY3MTQzODNiMy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUsIHVzZVJlZiB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgZGIgfSBmcm9tICcuLi8uLi8uLi8uLi9saWIvZmlyZWJhc2UtYWRtaW4nO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XHJcbmltcG9ydCBDb29raWVzIGZyb20gJ2pzLWNvb2tpZSc7XHJcbmltcG9ydCB7IGRiIGFzIGRiQ2xpZW50IH0gZnJvbSAnLi4vLi4vLi4vLi4vbGliL2ZpcmViYXNlJztcclxuaW1wb3J0IHsgdXNlQXV0aCB9IGZyb20gJy4uLy4uLy4uLy4uL2xpYi9uZXdBdXRoJztcclxuXHJcbmNvbnN0IFByb2plY3RQYWdlID0gKHsgcHJvamVjdHMgfSkgPT4ge1xyXG4gIGNvbnN0IFtzZWxlY3RlZFByb2plY3QsIHNldFNlbGVjdGVkUHJvamVjdF0gPSB1c2VTdGF0ZShudWxsKTtcclxuICBjb25zdCBjb250YWluZXJSZWYgPSB1c2VSZWYoKTtcclxuICBjb25zdCB7IGN1cnJlbnRVc2VyIH0gPSB1c2VBdXRoKCk7XHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnN0IHVpZCA9IENvb2tpZXMuZ2V0KCd1aWQnKTtcclxuICAgIGNvbnN0IGZpbHRlcmVkQXJyYXkgPSBwcm9qZWN0cyAmJiBwcm9qZWN0cy5maWx0ZXIoKHByb2plY3QpID0+IHByb2plY3QudWlkID09IHVpZCk7XHJcbiAgICBjb25zb2xlLmxvZyhmaWx0ZXJlZEFycmF5KTtcclxuICAgIGZpbHRlcmVkQXJyYXkgJiYgZmlsdGVyZWRBcnJheS5sZW5ndGggPT0gMSAmJiBzZXRTZWxlY3RlZFByb2plY3QoZmlsdGVyZWRBcnJheVswXSk7XHJcbiAgfSwgW3Byb2plY3RzXSk7XHJcbiAgY29uc29sZS5sb2cocHJvamVjdHMpO1xyXG4gIGNvbnNvbGUubG9nKHNlbGVjdGVkUHJvamVjdCk7XHJcblxyXG4gIC8vIEJVU0lORVNTIFBMQU4gQ1JFQVRFXHJcbiAgY29uc3Qgb25CdXNpbmVzc1BsYW5DcmVhdGUgPSBhc3luYyAoKSA9PiB7XHJcbiAgICBhd2FpdCBkYkNsaWVudC5jb2xsZWN0aW9uKCdwcm9qZWN0cycpLmRvYyhzZWxlY3RlZFByb2plY3QucHJvamVjdElkKS5jb2xsZWN0aW9uKCdidXNpbmVzc1BsYW4nKS5kb2MoUm91dGVyLnF1ZXJ5LnByb2plY3QpLnNldCh7XHJcbiAgICAgIHVpZDogY3VycmVudFVzZXIudWlkLFxyXG4gICAgICBwcm9qZWN0SWQ6IHNlbGVjdGVkUHJvamVjdC5wcm9qZWN0SWQsXHJcbiAgICAgIHBhdGhOYW1lOiBzZWxlY3RlZFByb2plY3QucHJvamVjdE5hbWUsXHJcbiAgICB9KTtcclxuICAgIGF3YWl0IGRiQ2xpZW50LmNvbGxlY3Rpb24oJ3Byb2plY3RzJykuZG9jKHNlbGVjdGVkUHJvamVjdC5wcm9qZWN0SWQpLnVwZGF0ZSh7IGlzQnVzaW5lc3NQbGFuQ3JlYXRlZDogdHJ1ZSB9KTtcclxuICAgIFJvdXRlci5wdXNoKGAvZGFzaGJvYXJkL3Byb2plY3RzLyR7cm91dGVyLnF1ZXJ5LnByb2plY3R9L2J1c2luZXNzLXBsYW5gKTtcclxuICB9O1xyXG5cclxuICBjb25zb2xlLmxvZygnQ1VSUkVOVCBQUk9KRUNUIC0tPiAnLCBzZWxlY3RlZFByb2plY3QpO1xyXG5cclxuICBjb25zdCBvbkNhc2hGbG93QW5hbHlzaXNDcmVhdGUgPSBhc3luYyAoKSA9PiB7XHJcbiAgICBhd2FpdCBkYkNsaWVudFxyXG4gICAgICAuY29sbGVjdGlvbigncHJvamVjdHMnKVxyXG4gICAgICAuZG9jKHNlbGVjdGVkUHJvamVjdC5wcm9qZWN0SWQpXHJcbiAgICAgIC5jb2xsZWN0aW9uKCdjYXNoRmxvdycpXHJcbiAgICAgIC5kb2Mocm91dGVyLnF1ZXJ5LnByb2plY3QpXHJcbiAgICAgIC5jb2xsZWN0aW9uKCdpbnB1dHMnKVxyXG4gICAgICAuZG9jKClcclxuICAgICAgLnNldCh7XHJcbiAgICAgICAgdWlkOiBjdXJyZW50VXNlci51aWQsXHJcbiAgICAgICAgcHJvamVjdElkOiBzZWxlY3RlZFByb2plY3QucHJvamVjdElkLFxyXG4gICAgICAgIHBhdGhOYW1lOiBzZWxlY3RlZFByb2plY3QucHJvamVjdE5hbWUsXHJcbiAgICAgICAgcmV2ZW51ZUVsZW1lbnRzOiBbXSxcclxuICAgICAgICBjb3N0c0VsZW1lbnRzOiBbXSxcclxuICAgICAgICBidWRnZXRFbGVtZW50czogW10sXHJcbiAgICAgICAgZ2xvYmFsU3RhcnREYXRlOiAnJyxcclxuICAgICAgICBnbG9iYWxFbmREYXRlOiAnJyxcclxuICAgICAgICBwZXJpb2RzOiBbXSxcclxuICAgICAgICB0YXg6ICcwJyxcclxuICAgICAgfSk7XHJcbiAgICBhd2FpdCBkYkNsaWVudC5jb2xsZWN0aW9uKCdwcm9qZWN0cycpLmRvYyhzZWxlY3RlZFByb2plY3QucHJvamVjdElkKS51cGRhdGUoeyBpc0Nhc2hmbG93Q3JlYXRlZDogdHJ1ZSB9KTtcclxuICAgIHJvdXRlci5wdXNoKGAvZGFzaGJvYXJkL3Byb2plY3RzLyR7cm91dGVyLnF1ZXJ5LnByb2plY3R9L2Nhc2gtZmxvd2ApO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IG9uQ29tcGV0aXRvcnNBbmFseXNpc0NyZWF0ZSA9IGFzeW5jICgpID0+IHtcclxuICAgIGF3YWl0IGRiQ2xpZW50XHJcbiAgICAgIC5jb2xsZWN0aW9uKCdwcm9qZWN0cycpXHJcbiAgICAgIC5kb2Moc2VsZWN0ZWRQcm9qZWN0LnByb2plY3RJZClcclxuICAgICAgLmNvbGxlY3Rpb24oJ2NvbXBldGl0b3JzJylcclxuICAgICAgLmRvYyhyb3V0ZXIucXVlcnkucHJvamVjdClcclxuICAgICAgLmNvbGxlY3Rpb24oJ2lucHV0cycpXHJcbiAgICAgIC5kb2MoKVxyXG4gICAgICAuc2V0KHtcclxuICAgICAgICB1aWQ6IGN1cnJlbnRVc2VyLnVpZCxcclxuICAgICAgICBwcm9qZWN0SWQ6IHNlbGVjdGVkUHJvamVjdC5wcm9qZWN0SWQsXHJcbiAgICAgICAgcGF0aE5hbWU6IHNlbGVjdGVkUHJvamVjdC5wcm9qZWN0TmFtZSxcclxuICAgICAgICBjb21wZXRpdG9yc0FycmF5OiBbXSxcclxuICAgICAgfSk7XHJcbiAgICBhd2FpdCBkYkNsaWVudC5jb2xsZWN0aW9uKCdwcm9qZWN0cycpLmRvYyhzZWxlY3RlZFByb2plY3QucHJvamVjdElkKS51cGRhdGUoeyBpc0NvbXBldGl0b3JzQW5hbHlzaXNDcmVhdGVkOiB0cnVlIH0pO1xyXG4gICAgcm91dGVyLnB1c2goYC9kYXNoYm9hcmQvc3RhcnR1cC8ke3JvdXRlci5xdWVyeS5wcm9qZWN0fS9jb21wZXRpdG9yc2ApO1xyXG4gIH07XHJcblxyXG4gIGlmIChyb3V0ZXIuaXNGYWxsYmFjaykge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdj5cclxuICAgICAgICA8cD5Mb2FkaW5nLi4uPC9wPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICk7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgLy8gPGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGwgaC1mdWxsIGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlclwiPlxyXG4gICAgLy8gICA8aDIgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXJcIj5XZWxjb21lIHRvIHRoZSBwcm9qZWN0IHBhZ2UhIFByb2plY3QgbmFtZTo8L2gyPlxyXG4gICAgLy8gICB7c2VsZWN0ZWRQcm9qZWN0ICE9PSBudWxsICYmIChcclxuICAgIC8vICAgICA8PlxyXG4gICAgLy8gICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXJcIj57c2VsZWN0ZWRQcm9qZWN0LnByb2plY3ROYW1lfTwvcD5cclxuICAgIC8vICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtY2VudGVyXCI+e3NlbGVjdGVkUHJvamVjdC51aWR9PC9wPlxyXG4gICAgLy8gICAgIDwvPlxyXG4gICAgLy8gICApfVxyXG4gICAgLy8gPC9kaXY+XHJcbiAgICA8PlxyXG4gICAgICA8VGlwcHlNb25zdGVyIC8+XHJcbiAgICAgIDxOYXZiYXJUZW1wbGF0ZT5cclxuICAgICAgICB7c2VsZWN0ZWRQcm9qZWN0ID8gKFxyXG4gICAgICAgICAgPGRpdiByZWY9e2NvbnRhaW5lclJlZn0gY2xhc3NOYW1lPVwibWluLWgtc2NyZWVuIHctZnVsbCByZWxhdGl2ZSBmbGV4IGZsZXgtY29sIGl0ZW1zLWNlbnRlclwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbCBzbTptYXgtdy1zbUNvbnRhaW5lciBtZDptYXgtdy1tZENvbnRhaW5lciBsZzptYXgtdy1sZ0NvbnRhaW5lciB4bDptYXgtdy14bENvbnRhaW5lciAyeGw6bWF4LXcteHhsQ29udGFpbmVyIG5vcm1hbDptYXgtdy1ub3JtYWxDb250YWluZXIgcmVsYXRpdmUgbXQtMTZcIj5cclxuICAgICAgICAgICAgICB7LyogPGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGwgbWF4LXctZnVsbCByZWxhdGl2ZSBtdC0xNiBtYi0xNiBweC0zMlwiPiAqL31cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQgZ3JpZC1jb2xzLTIgZ3JpZC1yb3dzLTEgZ3JpZC1mbG93LWNvbFwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgICA8c3ZnXHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0PVwiMzBcIlxyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoPVwiMzBcIlxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZpbGwtY3VycmVudCB0ZXh0LXByaW1hcnkgZGFyazp0ZXh0LXByaW1hcnlkYXJrXCJcclxuICAgICAgICAgICAgICAgICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcclxuICAgICAgICAgICAgICAgICAgICB2aWV3Qm94PVwiMCAwIDEyOCAxMjhcIlxyXG4gICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRpdGxlPkxhbmRpbmcgU3VjY2VzczwvdGl0bGU+XHJcbiAgICAgICAgICAgICAgICAgICAgPGcgaWQ9XCJMYW5kaW5nX1N1Y2Nlc3NcIiBkYXRhLW5hbWU9XCJMYW5kaW5nIFN1Y2Nlc3NcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxwYXRoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImNscy0xXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgZD1cIk0xMDkuMyw5MC4xQTQ2LDQ2LDAsMCwwLDY1LDM2VjIwLjA4YzEuNzgtLjYyLDcuMjEtMi4xNCwxMi41Ny4yM2ExOS4zMywxOS4zMywwLDAsMCwxNC44MiwwYy44Ny0uMzguNjEuMzEuNjEtMTcuOTNhMSwxLDAsMCwwLTEuNDMtLjkzYy0uMDcsMC02LjY5LDIuODctMTMuMTgsMEExOS40MSwxOS40MSwwLDAsMCw2NSwuOTMsMSwxLDAsMCwwLDYzLDFWMzZhNDUuODYsNDUuODYsMCwwLDAtMjguNjYsMTAuOEMxNi4xOCw0MC40OCw0LDQwLC43OSw0NS41MS0yLjI5LDUwLjg2LDMuOTQsNTkuMywxMCw2NS42OEExMSwxMSwwLDAsMCwxOCw4M2MuODEsMzguNDEsNDYuMDgsNTkuMiw3NS42NiwzNC4yMSw4LjUzLDMsMjksOS4xNSwzMy41NSwxLjMxQzEzMC4zOSwxMTMsMTIzLjg2LDEwMi42NSwxMDkuMyw5MC4xWk03Ny41OSwzLjMxQTE5LjM5LDE5LjM5LDAsMCwwLDkxLDMuODNWMTguNjhjLTEuNzkuNjItNy4yMiwyLjEzLTEyLjU3LS4yM0ExOS4xOSwxOS4xOSwwLDAsMCw2NSwxNy45M1YzLjA4QzY2LjgxLDIuNDYsNzIuMjQsMSw3Ny41OSwzLjMxWk02NSw0NXYtN2MzOS42OS45MSw1OCw1MC4yNywyOC4yMSw3Ni44MUM3MS4zMiwxMDcsNDYsOTIuNjYsMjcuNzcsNzguNjRhMTEsMTEsMCwwLDAtMy4yLTE2LjEzQTQzLjg4LDQzLjg4LDAsMCwxLDYzLDM4LjA2VjQ1QTEsMSwwLDAsMCw2NSw0NVpNMzIuNTUsNDguMzZhNDYuMjEsNDYuMjEsMCwwLDAtOS44MywxMy4yOCwxMC45MywxMC45MywwLDAsMC0xMS40LDIuNDdDLTguMzksNDMuMjMsNS4yMywzOS4wOCwzMi41NSw0OC4zNlpNMTAsNzJhOSw5LDAsMSwxLDksOUE5LDksMCwwLDEsMTAsNzJabTEwLDExYTExLDExLDAsMCwwLDYuMzQtMi44MmMxOC40NSwxNC4yMSw0My40NSwyOC4zNSw2NS4wNSwzNi4yMkM2MywxMzkuMTYsMjAuODMsMTE5LjEsMjAuMDUsODNabTEwNS40LDM0LjVjLTIuNTEsNC4zNS0xNCwzLjYyLTMwLTEuODVhNDUuNjEsNDUuNjEsMCwwLDAsMTMuNDItMjMuMjFDMTIxLjU5LDEwMy41OCwxMjgsMTEzLjEyLDEyNS40NSwxMTcuNDdaXCJcclxuICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9nPlxyXG4gICAgICAgICAgICAgICAgICA8L3N2Zz5cclxuICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1wcmltYXJ5ZGFyayB0ZXh0LTJ4bCBtdC0yIHBsLTIgZGFyazp0ZXh0LWJhY2tncm91bmRcIj5cclxuICAgICAgICAgICAgICAgICAgICB7c2VsZWN0ZWRQcm9qZWN0ICYmIHNlbGVjdGVkUHJvamVjdC5wcm9qZWN0TmFtZX1cclxuICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1lbmRcIj5cclxuICAgICAgICAgICAgICAgICAgey8qIDxQcm9qZWN0TmF2IC8+ICovfVxyXG4gICAgICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gcm91dGVyLnB1c2goYC9kYXNoYm9hcmQvc3RhcnR1cC8ke3JvdXRlci5xdWVyeS5wcm9qZWN0fS9lZGl0YCl9XHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaG92ZXI6YmctcHJpbWFyeSBob3Zlcjp0ZXh0LXdoaXRlIGRhcms6aG92ZXI6YmctcHJpbWFyeWRhcmsgZGFyazpob3Zlcjp0ZXh0LWJhY2tncm91bmQgZm9jdXM6b3V0bGluZS1ub25lIGJvcmRlciBib3JkZXItcHJpbWFyeSB0ZXh0LXByaW1hcnkgdGV4dC1zbSBmb250LWxpZ2h0IHB5LTIgcHgtOCByb3VuZGVkLTJ4bCBtdC0yIGRhcms6dGV4dC1wcmltYXJ5ZGFyayBkYXJrOmJvcmRlci1wcmltYXJ5ZGFya1wiXHJcbiAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICBTZXR0aW5nc1xyXG4gICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwidGV4dC1zZWNvbmRhcnkgdGV4dC1tZCB0ZXh0LWdyYXlcIj5UaGlzIGlzIHRoZSBiZXN0IHN0YXJ0dXAgaW4gdGhlIHRlY2ggZmllbGQ8L2gxPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIHsvKiBTRUNUSU9OICovfVxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZCBncmlkLWNvbHMtMmZyIGdyaWQtcm93cy0zZnIgbXQtMjAgZ2FwLTE2IG1iLTMyXCI+XHJcbiAgICAgICAgICAgICAgICB7LyogU0hPV1VQMSAqL31cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm91bmRlZC0yeGwgdHJhbnNmb3JtIGhvdmVyOnNjYWxlLTEwNSBob3ZlcjotdHJhbnNsYXRlLXktMiBob3ZlcjotdHJhbnNsYXRlLXgtMiB0cmFuc2l0aW9uIGR1cmF0aW9uLTUwMCBlYXNlLWluLW91dFwiPlxyXG4gICAgICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwidGV4dC1wcmltYXJ5ZGFyayB0ZXh0LWxnIGRhcms6dGV4dC1iYWNrZ3JvdW5kXCI+U3RhcnR1cCBpZGVhPC9oMT5cclxuICAgICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgIC8vIHN0eWxlPXt7IG1heEhlaWdodDogMzMwIH19XHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwic2hhZG93LWxnIG10LTEgdy1mdWxsIGZsZXggZmxleC1jb2wganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyIGJvcmRlci1yLTYgcm91bmRlZC0yeGwgYmctd2hpdGUgZGFyazpiZy1iYWNrZ3JvdW5kXCJcclxuICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIDxJbWFnZSBoZWlnaHQ9ezIwMH0gd2lkdGg9ezIwMH0gc3JjPVwiL2xhdW5jaC1tYWtlci5zdmdcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJ0ZXh0LWJhc2UgdGV4dC1ncmF5IHRleHQtY2VudGVyIHB4LThcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIFN0YXJ0dXAgaWRlYSB3aWxsIGd1aWRlIHlvdSB0aHJvdWdoIHRoZSBwcm9jZXNzIG9mIGNyZWF0aW5nIHlvdXIgYnVzaW5lc3MgcGxhbi4g8J+UjlxyXG4gICAgICAgICAgICAgICAgICAgIDwvaDE+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwLTRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiaG92ZXI6YmctcHJpbWFyeSBob3Zlcjp0ZXh0LXdoaXRlIGRhcms6aG92ZXI6YmctcHJpbWFyeWRhcmsgZGFyazpob3Zlcjp0ZXh0LWJhY2tncm91bmQgZm9jdXM6b3V0bGluZS1ub25lIGJvcmRlciBib3JkZXItcHJpbWFyeSB0ZXh0LXByaW1hcnkgZGFyazp0ZXh0LXByaW1hcnlkYXJrIGRhcms6Ym9yZGVyLXByaW1hcnlkYXJrIHRleHQtc20gZm9udC1saWdodCBweS0yIHB4LTYgcm91bmRlZC0yeGwgbS0yXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIENyZWF0ZSB5b3VyIHN0YXJ0dXAgaWRlYVxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICB7LyogU0hPV1VQMiAqL31cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm91bmRlZC0yeGwgdHJhbnNmb3JtIGhvdmVyOnNjYWxlLTEwNSBob3ZlcjotdHJhbnNsYXRlLXktMiBob3ZlcjotdHJhbnNsYXRlLXgtMiB0cmFuc2l0aW9uIGR1cmF0aW9uLTUwMCBlYXNlLWluLW91dFwiPlxyXG4gICAgICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwidGV4dC1wcmltYXJ5ZGFyayB0ZXh0LWxnIGRhcms6dGV4dC1iYWNrZ3JvdW5kXCI+QnVzaW5lc3MgcGxhbjwvaDE+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICAvLyBzdHlsZT17eyBtYXhIZWlnaHQ6IDMzMCB9fVxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInNoYWRvdy1sZyBtdC0xIHctZnVsbCBmbGV4IGZsZXgtY29sIGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlciBib3JkZXItci02IHJvdW5kZWQtMnhsIGJnLXdoaXRlIGRhcms6YmctYmFja2dyb3VuZFwiXHJcbiAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICA8SW1hZ2UgaGVpZ2h0PXsyMDB9IHdpZHRoPXsyMDB9IHNyYz1cIi9tYWluLXNlY3Rpb25zL2J1c2luZXNzLXBsYW4uc3ZnXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwidGV4dC1iYXNlIHRleHQtZ3JheSB0ZXh0LWNlbnRlciBweC04XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICBMZXQncyBjcmVhdGUgeW91ciBidXNpbmVzcyBwbGFuLCB3aGljaCB3aWxsIGJlIHRoZSBjb3JlIG9mIHlvdXIgc3RhcnR1cCBwcmVzZW50YXRpb24uIPCflI5cclxuICAgICAgICAgICAgICAgICAgICA8L2gxPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicC00XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e29uQnVzaW5lc3NQbGFuQ3JlYXRlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJob3ZlcjpiZy1wcmltYXJ5IGhvdmVyOnRleHQtd2hpdGUgZGFyazpob3ZlcjpiZy1wcmltYXJ5ZGFyayBkYXJrOmhvdmVyOnRleHQtYmFja2dyb3VuZCBmb2N1czpvdXRsaW5lLW5vbmUgYm9yZGVyIGJvcmRlci1wcmltYXJ5IHRleHQtcHJpbWFyeSBkYXJrOnRleHQtcHJpbWFyeWRhcmsgZGFyazpib3JkZXItcHJpbWFyeWRhcmsgdGV4dC1zbSBmb250LWxpZ2h0IHB5LTIgcHgtNiByb3VuZGVkLTJ4bCBtLTJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBDcmVhdGUgeW91ciBidXNpbmVzcyBwbGFuXHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIHsvKiBTSE9XVVAzICovfVxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3VuZGVkLTJ4bCB0cmFuc2Zvcm0gaG92ZXI6c2NhbGUtMTA1IGhvdmVyOi10cmFuc2xhdGUteS0yIGhvdmVyOi10cmFuc2xhdGUteC0yIHRyYW5zaXRpb24gZHVyYXRpb24tNTAwIGVhc2UtaW4tb3V0XCI+XHJcbiAgICAgICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJ0ZXh0LXByaW1hcnlkYXJrIHRleHQtbGcgZGFyazp0ZXh0LWJhY2tncm91bmRcIj5DYXNoIGZsb3cgYW5hbHlzaXM8L2gxPlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gc3R5bGU9e3sgbWF4SGVpZ2h0OiAzMzAgfX1cclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJzaGFkb3ctbGcgbXQtMSB3LWZ1bGwgZmxleCBmbGV4LWNvbCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXIgYm9yZGVyLXItNiByb3VuZGVkLTJ4bCBiZy13aGl0ZSBkYXJrOmJnLWJhY2tncm91bmRcIlxyXG4gICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgPEltYWdlIGhlaWdodD17MjAwfSB3aWR0aD17MjAwfSBzcmM9XCIvbWFpbi1zZWN0aW9ucy9jYXNoLWZsb3cyLnN2Z1wiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cIiB0ZXh0LWJhc2UgdGV4dC1ncmF5IHRleHQtY2VudGVyIHB4LThcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIENhc2ggZmxvdyBhbmFseXNpcyB3aWxsIGFsbG93IHlvdSB0byBhbmFseXplIHRoZSBsaXF1aWRpdHkgb2YgeW91ciBzdGFydHVwLiDwn5SOXHJcbiAgICAgICAgICAgICAgICAgICAgPC9oMT5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInAtNFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtvbkNhc2hGbG93QW5hbHlzaXNDcmVhdGV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImhvdmVyOmJnLXByaW1hcnkgaG92ZXI6dGV4dC13aGl0ZSBkYXJrOmhvdmVyOmJnLXByaW1hcnlkYXJrIGRhcms6aG92ZXI6dGV4dC1iYWNrZ3JvdW5kIGZvY3VzOm91dGxpbmUtbm9uZSBib3JkZXIgYm9yZGVyLXByaW1hcnkgdGV4dC1wcmltYXJ5IGRhcms6dGV4dC1wcmltYXJ5ZGFyayBkYXJrOmJvcmRlci1wcmltYXJ5ZGFyayB0ZXh0LXNtIGZvbnQtbGlnaHQgcHktMiBweC02IHJvdW5kZWQtMnhsIG0tMlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIENyZWF0ZSB5b3VyIHN0YXJ0dXAgY2FzaCBmbG93XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIHsvKiBTSE9XVVA0ICovfVxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3VuZGVkLTJ4bCB0cmFuc2Zvcm0gaG92ZXI6c2NhbGUtMTA1IGhvdmVyOi10cmFuc2xhdGUteS0yIGhvdmVyOi10cmFuc2xhdGUteC0yIHRyYW5zaXRpb24gZHVyYXRpb24tNTAwIGVhc2UtaW4tb3V0XCI+XHJcbiAgICAgICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJ0ZXh0LXByaW1hcnlkYXJrIHRleHQtbGcgZGFyazp0ZXh0LWJhY2tncm91bmRcIj5Db21wZXRpdG9ycyBhbmFseXNpczwvaDE+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICAvLyBzdHlsZT17eyBtYXhIZWlnaHQ6IDMzMCB9fVxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInNoYWRvdy1sZyBtdC0xIHctZnVsbCBmbGV4IGZsZXgtY29sIGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlciBib3JkZXItci02IHJvdW5kZWQtMnhsIGJnLXdoaXRlIGRhcms6YmctYmFja2dyb3VuZFwiXHJcbiAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICA8SW1hZ2UgaGVpZ2h0PXsyMDB9IHdpZHRoPXsyMDB9IHNyYz1cIi9tYWluLXNlY3Rpb25zL2NvbXBldGl0b3JzLnN2Z1wiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cInRleHQtYmFzZSB0ZXh0LWdyYXkgdGV4dC1jZW50ZXIgcHgtOFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgQ29tcGV0aXRvciBhbmFseXNpcyB3aWxsIGhlbHAgeW91IGJldHRlciBwcmVwYXJlIHRvIGVudGVyIGEgZ2l2ZW4gbWFya2V0LiDwn5SOXHJcbiAgICAgICAgICAgICAgICAgICAgPC9oMT5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInAtNFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtvbkNvbXBldGl0b3JzQW5hbHlzaXNDcmVhdGV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImhvdmVyOmJnLXByaW1hcnkgaG92ZXI6dGV4dC13aGl0ZSBkYXJrOmhvdmVyOmJnLXByaW1hcnlkYXJrIGRhcms6aG92ZXI6dGV4dC1iYWNrZ3JvdW5kIGZvY3VzOm91dGxpbmUtbm9uZSBib3JkZXIgYm9yZGVyLXByaW1hcnkgdGV4dC1wcmltYXJ5IGRhcms6dGV4dC1wcmltYXJ5ZGFyayBkYXJrOmJvcmRlci1wcmltYXJ5ZGFyayB0ZXh0LXNtIGZvbnQtbGlnaHQgcHktMiBweC02IHJvdW5kZWQtMnhsIG0tMlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIEFuYWx5emUgeW91ciBzdGFydHVwIGNvbXBldGl0b3JzXHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIHsvKiBTSE9XVVA1ICovfVxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3VuZGVkLTJ4bCB0cmFuc2Zvcm0gaG92ZXI6c2NhbGUtMTA1IGhvdmVyOi10cmFuc2xhdGUteS0yIGhvdmVyOi10cmFuc2xhdGUteC0yIHRyYW5zaXRpb24gZHVyYXRpb24tNTAwIGVhc2UtaW4tb3V0XCI+XHJcbiAgICAgICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJ0ZXh0LXByaW1hcnlkYXJrIHRleHQtbGcgZGFyazp0ZXh0LWJhY2tncm91bmRcIj5TdGFydHVwIG1lbWJlcnM8L2gxPlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gc3R5bGU9e3sgbWF4SGVpZ2h0OiAzMzAgfX1cclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJzaGFkb3ctbGcgbXQtMSB3LWZ1bGwgZmxleCBmbGV4LWNvbCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXIgYm9yZGVyLXItNiByb3VuZGVkLTJ4bCBiZy13aGl0ZSBkYXJrOmJnLWJhY2tncm91bmRcIlxyXG4gICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgPEltYWdlIGhlaWdodD17MjAwfSB3aWR0aD17MjAwfSBzcmM9XCIvbWFpbi1zZWN0aW9ucy9tZW1iZXJzMS5zdmdcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJ0ZXh0LWJhc2UgdGV4dC1ncmF5IHRleHQtY2VudGVyIHB4LThcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIElkZW50aWZ5IHRoZSByb2xlcyBvZiB5b3VyIHRlYW0gYW5kIHRoZSBwZW9wbGUgd2hvIHdpbGwgaGF2ZSBhY2Nlc3MgdG8gdGhpcyBwcm9qZWN0LiDwn5SOXHJcbiAgICAgICAgICAgICAgICAgICAgPC9oMT5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInAtNFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtvbkNvbXBldGl0b3JzQW5hbHlzaXNDcmVhdGV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImhvdmVyOmJnLXByaW1hcnkgaG92ZXI6dGV4dC13aGl0ZSBkYXJrOmhvdmVyOmJnLXByaW1hcnlkYXJrIGRhcms6aG92ZXI6dGV4dC1iYWNrZ3JvdW5kIGZvY3VzOm91dGxpbmUtbm9uZSBib3JkZXIgYm9yZGVyLXByaW1hcnkgdGV4dC1wcmltYXJ5IGRhcms6dGV4dC1wcmltYXJ5ZGFyayBkYXJrOmJvcmRlci1wcmltYXJ5ZGFyayB0ZXh0LXNtIGZvbnQtbGlnaHQgcHktMiBweC02IHJvdW5kZWQtMnhsIG0tMlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIE1hbmFnZSB5b3VyIHN0YXJ0dXAgbWVtYmVyc1xyXG4gICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKSA6IChcclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaC1zY3JlZW4gdy1mdWxsIGZsZXgganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyXCI+XHJcbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtcHJpbWFyeWRhcmsgdGV4dC1sZ1wiPi4uLkxvYWRpbmc8L3A+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApfVxyXG4gICAgICA8L05hdmJhclRlbXBsYXRlPlxyXG4gICAgPC8+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBnZXRTdGF0aWNQYXRocyA9IGFzeW5jICgpID0+IHtcclxuICAvLyBjb25zdCB7IHByb2plY3RzIH0gPSBhd2FpdCBnZXRBbGxQcm9qZWN0cygpO1xyXG4gIGNvbnN0IHNuYXBzaG90ID0gYXdhaXQgZGIuY29sbGVjdGlvbigncHJvamVjdHMnKS5nZXQoKTtcclxuXHJcbiAgY29uc3QgcHJvamVjdHMgPSBbXTtcclxuICBzbmFwc2hvdC5mb3JFYWNoKChkb2MpID0+IHtcclxuICAgIHByb2plY3RzLnB1c2goZG9jLmRhdGEoKSk7XHJcbiAgfSk7XHJcblxyXG4gIGNvbnN0IHBhdGhzID0gcHJvamVjdHMubWFwKChwcm9qZWN0KSA9PiAoe1xyXG4gICAgcGFyYW1zOiB7XHJcbiAgICAgIHByb2plY3Q6IHByb2plY3QucHJvamVjdE5hbWUudG9TdHJpbmcoKSxcclxuICAgIH0sXHJcbiAgfSkpO1xyXG5cclxuICByZXR1cm4ge1xyXG4gICAgcGF0aHM6IHBhdGhzLFxyXG4gICAgZmFsbGJhY2s6IHRydWUsXHJcbiAgfTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBnZXRTdGF0aWNQcm9wcyA9IGFzeW5jICh7IHBhcmFtcyB9KSA9PiB7XHJcbiAgLy8gY29uc3QgeyBwcm9qZWN0cyB9ID0gYXdhaXQgZ2V0UGFydGljdWxhclByb2plY3QocGFyYW1zLndvcmspO1xyXG4gIC8vIGNvbnN0IHVpZCA9IENvb2tpZXMuZ2V0KCd1aWQnKTtcclxuICBsZXQgcmVmID0gZGIuY29sbGVjdGlvbigncHJvamVjdHMnKS53aGVyZSgncHJvamVjdE5hbWUnLCAnPT0nLCBwYXJhbXMucHJvamVjdCk7XHJcblxyXG4gIGNvbnN0IHNuYXBzaG90ID0gYXdhaXQgcmVmLmdldCgpO1xyXG4gIGNvbnN0IHByb2plY3RzID0gW107XHJcblxyXG4gIHNuYXBzaG90LmZvckVhY2goKGRvYykgPT4ge1xyXG4gICAgcHJvamVjdHMucHVzaCh7IGlkOiBkb2MuaWQsIC4uLmRvYy5kYXRhKCkgfSk7XHJcbiAgfSk7XHJcblxyXG4gIHJldHVybiB7XHJcbiAgICBwcm9wczogeyBwcm9qZWN0cyB9LFxyXG4gICAgcmV2YWxpZGF0ZTogMSxcclxuICB9O1xyXG59O1xyXG5cclxuLy8gZXhwb3J0IGNvbnN0IGdldFNlcnZlclNpZGVQcm9wcyA9IGFzeW5jICh7IHBhcmFtcyB9KSA9PiB7XHJcbi8vICAgbGV0IHJlZiA9IGRiLmNvbGxlY3Rpb24oJ3Byb2plY3RzJykud2hlcmUoJ3Byb2plY3ROYW1lJywgJz09JywgcGFyYW1zLnByb2plY3QpO1xyXG5cclxuLy8gICBjb25zdCBzbmFwc2hvdCA9IGF3YWl0IHJlZi5nZXQoKTtcclxuLy8gICBjb25zdCBwcm9qZWN0cyA9IFtdO1xyXG5cclxuLy8gICBzbmFwc2hvdC5mb3JFYWNoKChkb2MpID0+IHtcclxuLy8gICAgIHByb2plY3RzLnB1c2goeyBpZDogZG9jLmlkLCAuLi5kb2MuZGF0YSgpIH0pO1xyXG4vLyAgIH0pO1xyXG5cclxuLy8gICByZXR1cm4ge1xyXG4vLyAgICAgcHJvcHM6IHsgcHJvamVjdHMgfSxcclxuLy8gICB9O1xyXG4vLyB9O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgUHJvamVjdFBhZ2U7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=