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





var _jsxFileName = "C:\\off-saas\\pages\\dashboard\\projects\\[project]\\index.js",
    _this = undefined,
    _s = $RefreshSig$();





var ProjectPage = function ProjectPage(_ref) {
  _s();

  var projects = _ref.projects;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(null),
      selectedProject = _useState[0],
      setSelectedProject = _useState[1];

  var containerRef = useRef();

  var _useAuth = useAuth(),
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
  console.log(selectedProject);

  if (router.isFallback) {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
        children: "Loading..."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 7
    }, _this);
  } // BUSINESS PLAN CREATE


  var onBusinessPlanCreate = /*#__PURE__*/function () {
    var _ref2 = Object(C_off_saas_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/C_off_saas_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee() {
      return C_off_saas_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return dbClient.collection('projects').doc(selectedProject.projectId).collection('businessPlan').doc(Router.query.project).set({
                uid: currentUser.uid,
                projectId: selectedProject.projectId,
                pathName: selectedProject.projectName
              });

            case 2:
              _context.next = 4;
              return dbClient.collection('projects').doc(selectedProject.projectId).update({
                isBusinessPlanCreated: true
              });

            case 4:
              Router.push("/dashboard/startup/".concat(Router.query.project, "/business-plan"));

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
              return dbClient.collection('projects').doc(selectedProject.projectId).collection('cashFlow').doc(router.query.project).collection('inputs').doc().set({
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
              return dbClient.collection('projects').doc(selectedProject.projectId).update({
                isCashflowCreated: true
              });

            case 4:
              router.push("/dashboard/startup/".concat(router.query.project, "/cash-flow"));

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
              return dbClient.collection('projects').doc(selectedProject.projectId).collection('competitors').doc(router.query.project).collection('inputs').doc().set({
                uid: currentUser.uid,
                projectId: selectedProject.projectId,
                pathName: selectedProject.projectName,
                competitorsArray: []
              });

            case 2:
              _context3.next = 4;
              return dbClient.collection('projects').doc(selectedProject.projectId).update({
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
        lineNumber: 93,
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
                    lineNumber: 108,
                    columnNumber: 21
                  }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("g", {
                    id: "Landing_Success",
                    "data-name": "Landing Success",
                    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
                      className: "cls-1",
                      d: "M109.3,90.1A46,46,0,0,0,65,36V20.08c1.78-.62,7.21-2.14,12.57.23a19.33,19.33,0,0,0,14.82,0c.87-.38.61.31.61-17.93a1,1,0,0,0-1.43-.93c-.07,0-6.69,2.87-13.18,0A19.41,19.41,0,0,0,65,.93,1,1,0,0,0,63,1V36a45.86,45.86,0,0,0-28.66,10.8C16.18,40.48,4,40,.79,45.51-2.29,50.86,3.94,59.3,10,65.68A11,11,0,0,0,18,83c.81,38.41,46.08,59.2,75.66,34.21,8.53,3,29,9.15,33.55,1.31C130.39,113,123.86,102.65,109.3,90.1ZM77.59,3.31A19.39,19.39,0,0,0,91,3.83V18.68c-1.79.62-7.22,2.13-12.57-.23A19.19,19.19,0,0,0,65,17.93V3.08C66.81,2.46,72.24,1,77.59,3.31ZM65,45v-7c39.69.91,58,50.27,28.21,76.81C71.32,107,46,92.66,27.77,78.64a11,11,0,0,0-3.2-16.13A43.88,43.88,0,0,1,63,38.06V45A1,1,0,0,0,65,45ZM32.55,48.36a46.21,46.21,0,0,0-9.83,13.28,10.93,10.93,0,0,0-11.4,2.47C-8.39,43.23,5.23,39.08,32.55,48.36ZM10,72a9,9,0,1,1,9,9A9,9,0,0,1,10,72Zm10,11a11,11,0,0,0,6.34-2.82c18.45,14.21,43.45,28.35,65.05,36.22C63,139.16,20.83,119.1,20.05,83Zm105.4,34.5c-2.51,4.35-14,3.62-30-1.85a45.61,45.61,0,0,0,13.42-23.21C121.59,103.58,128,113.12,125.45,117.47Z"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 110,
                      columnNumber: 23
                    }, _this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 109,
                    columnNumber: 21
                  }, _this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 101,
                  columnNumber: 19
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                  className: "text-primarydark text-2xl mt-2 pl-2 dark:text-background",
                  children: selectedProject && selectedProject.projectName
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 116,
                  columnNumber: 19
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 100,
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
                  lineNumber: 122,
                  columnNumber: 19
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 120,
                columnNumber: 17
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 99,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
                className: "text-secondary text-md text-gray",
                children: "This is the best startup in the tech field"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 131,
                columnNumber: 17
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 130,
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
                  lineNumber: 137,
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
                    lineNumber: 142,
                    columnNumber: 21
                  }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
                    className: "text-base text-gray text-center px-8",
                    children: "Startup idea will guide you through the process of creating your business plan. \uD83D\uDD0E"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 143,
                    columnNumber: 21
                  }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                    className: "p-4",
                    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
                      className: "hover:bg-primary hover:text-white dark:hover:bg-primarydark dark:hover:text-background focus:outline-none border border-primary text-primary dark:text-primarydark dark:border-primarydark text-sm font-light py-2 px-6 rounded-2xl m-2",
                      children: "Create your startup idea"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 147,
                      columnNumber: 23
                    }, _this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 146,
                    columnNumber: 21
                  }, _this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 138,
                  columnNumber: 19
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 136,
                columnNumber: 17
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: "rounded-2xl transform hover:scale-105 hover:-translate-y-2 hover:-translate-x-2 transition duration-500 ease-in-out",
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
                  className: "text-primarydark text-lg dark:text-background",
                  children: "Business plan"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 155,
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
                    lineNumber: 160,
                    columnNumber: 21
                  }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
                    className: "text-base text-gray text-center px-8",
                    children: "Let's create your business plan, which will be the core of your startup presentation. \uD83D\uDD0E"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 161,
                    columnNumber: 21
                  }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                    className: "p-4",
                    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
                      onClick: onBusinessPlanCreate,
                      className: "hover:bg-primary hover:text-white dark:hover:bg-primarydark dark:hover:text-background focus:outline-none border border-primary text-primary dark:text-primarydark dark:border-primarydark text-sm font-light py-2 px-6 rounded-2xl m-2",
                      children: "Create your business plan"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 165,
                      columnNumber: 23
                    }, _this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 164,
                    columnNumber: 21
                  }, _this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 156,
                  columnNumber: 19
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 154,
                columnNumber: 17
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: "rounded-2xl transform hover:scale-105 hover:-translate-y-2 hover:-translate-x-2 transition duration-500 ease-in-out",
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
                  className: "text-primarydark text-lg dark:text-background",
                  children: "Cash flow analysis"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 176,
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
                    lineNumber: 181,
                    columnNumber: 21
                  }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
                    className: " text-base text-gray text-center px-8",
                    children: "Cash flow analysis will allow you to analyze the liquidity of your startup. \uD83D\uDD0E"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 182,
                    columnNumber: 21
                  }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                    className: "p-4",
                    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
                      onClick: onCashFlowAnalysisCreate,
                      className: "hover:bg-primary hover:text-white dark:hover:bg-primarydark dark:hover:text-background focus:outline-none border border-primary text-primary dark:text-primarydark dark:border-primarydark text-sm font-light py-2 px-6 rounded-2xl m-2",
                      children: "Create your startup cash flow"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 186,
                      columnNumber: 23
                    }, _this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 185,
                    columnNumber: 21
                  }, _this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 177,
                  columnNumber: 19
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 175,
                columnNumber: 17
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: "rounded-2xl transform hover:scale-105 hover:-translate-y-2 hover:-translate-x-2 transition duration-500 ease-in-out",
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
                  className: "text-primarydark text-lg dark:text-background",
                  children: "Competitors analysis"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 197,
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
                    lineNumber: 202,
                    columnNumber: 21
                  }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
                    className: "text-base text-gray text-center px-8",
                    children: "Competitor analysis will help you better prepare to enter a given market. \uD83D\uDD0E"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 203,
                    columnNumber: 21
                  }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                    className: "p-4",
                    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
                      onClick: onCompetitorsAnalysisCreate,
                      className: "hover:bg-primary hover:text-white dark:hover:bg-primarydark dark:hover:text-background focus:outline-none border border-primary text-primary dark:text-primarydark dark:border-primarydark text-sm font-light py-2 px-6 rounded-2xl m-2",
                      children: "Analyze your startup competitors"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 207,
                      columnNumber: 23
                    }, _this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 206,
                    columnNumber: 21
                  }, _this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 198,
                  columnNumber: 19
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 196,
                columnNumber: 17
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: "rounded-2xl transform hover:scale-105 hover:-translate-y-2 hover:-translate-x-2 transition duration-500 ease-in-out",
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
                  className: "text-primarydark text-lg dark:text-background",
                  children: "Startup members"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 218,
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
                    lineNumber: 223,
                    columnNumber: 21
                  }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
                    className: "text-base text-gray text-center px-8",
                    children: "Identify the roles of your team and the people who will have access to this project. \uD83D\uDD0E"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 224,
                    columnNumber: 21
                  }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                    className: "p-4",
                    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
                      onClick: onCompetitorsAnalysisCreate,
                      className: "hover:bg-primary hover:text-white dark:hover:bg-primarydark dark:hover:text-background focus:outline-none border border-primary text-primary dark:text-primarydark dark:border-primarydark text-sm font-light py-2 px-6 rounded-2xl m-2",
                      children: "Manage your startup members"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 228,
                      columnNumber: 23
                    }, _this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 227,
                    columnNumber: 21
                  }, _this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 219,
                  columnNumber: 19
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 217,
                columnNumber: 17
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 134,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 97,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 96,
          columnNumber: 11
        }, _this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "h-screen w-full flex justify-center items-center",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            className: "text-primarydark text-lg",
            children: "...Loading"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 242,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 241,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 94,
        columnNumber: 7
      }, _this)]
    }, void 0, true)
  );
};

_s(ProjectPage, "Hyq+0fnWFzoycA+adWwDcMUbeck=", true, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_4__["useRouter"]];
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvZGFzaGJvYXJkL3Byb2plY3RzL1twcm9qZWN0XS9pbmRleC5qcyJdLCJuYW1lcyI6WyJQcm9qZWN0UGFnZSIsInByb2plY3RzIiwidXNlU3RhdGUiLCJzZWxlY3RlZFByb2plY3QiLCJzZXRTZWxlY3RlZFByb2plY3QiLCJjb250YWluZXJSZWYiLCJ1c2VSZWYiLCJ1c2VBdXRoIiwiY3VycmVudFVzZXIiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJ1c2VFZmZlY3QiLCJ1aWQiLCJDb29raWVzIiwiZ2V0IiwiZmlsdGVyZWRBcnJheSIsImZpbHRlciIsInByb2plY3QiLCJjb25zb2xlIiwibG9nIiwibGVuZ3RoIiwiaXNGYWxsYmFjayIsIm9uQnVzaW5lc3NQbGFuQ3JlYXRlIiwiZGJDbGllbnQiLCJjb2xsZWN0aW9uIiwiZG9jIiwicHJvamVjdElkIiwiUm91dGVyIiwicXVlcnkiLCJzZXQiLCJwYXRoTmFtZSIsInByb2plY3ROYW1lIiwidXBkYXRlIiwiaXNCdXNpbmVzc1BsYW5DcmVhdGVkIiwicHVzaCIsIm9uQ2FzaEZsb3dBbmFseXNpc0NyZWF0ZSIsInJldmVudWVFbGVtZW50cyIsImNvc3RzRWxlbWVudHMiLCJidWRnZXRFbGVtZW50cyIsImdsb2JhbFN0YXJ0RGF0ZSIsImdsb2JhbEVuZERhdGUiLCJwZXJpb2RzIiwidGF4IiwiaXNDYXNoZmxvd0NyZWF0ZWQiLCJvbkNvbXBldGl0b3JzQW5hbHlzaXNDcmVhdGUiLCJjb21wZXRpdG9yc0FycmF5IiwiaXNDb21wZXRpdG9yc0FuYWx5c2lzQ3JlYXRlZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUVBO0FBQ0E7O0FBRUEsSUFBTUEsV0FBVyxHQUFHLFNBQWRBLFdBQWMsT0FBa0I7QUFBQTs7QUFBQSxNQUFmQyxRQUFlLFFBQWZBLFFBQWU7O0FBQUEsa0JBQ1VDLHNEQUFRLENBQUMsSUFBRCxDQURsQjtBQUFB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QkFBSyxFQUFFLEdBQTNCO0FBQWdDLHVCQUFHLEVBQUM7QUFBcEM7QUFBQTtBQUFBO0FBQUE7QUFBQSwyQkFKRixlQUtFO0FBQUksNkJBQVMsRUFBQyxzQ0FBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSwyQkFMRixlQVFFO0FBQUssNkJBQVMsRUFBQyxLQUFmO0FBQUEsMkNBQ0U7QUFDRSw2QkFBTyxFQUFFQSwyQkFEWDtBQUVFLCtCQUFTLEVBQUMseU9BRlo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLDJCQVJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx5QkFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBbkZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFyQ0Y7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFEYyxnQkFrSmQ7QUFBSyxtQkFBUyxFQUFDLGtEQUFmO0FBQUEsaUNBQ0U7QUFBRyxxQkFBUyxFQUFDLDBCQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQW5KSjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBRkY7QUFBQTtBQVZGO0FBc0tELENBbFBEOztHQUFNNUMsVztVQUlXVSxxRDs7O0tBSlhWLFc7QUEyUk47QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFZUEsMEVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvZGFzaGJvYXJkL3Byb2plY3RzL1twcm9qZWN0XS5hODAyOWI5MTlmZjc1MDhlY2RlOS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IGRiIH0gZnJvbSAnLi4vLi4vLi4vLi4vbGliL2ZpcmViYXNlLWFkbWluJztcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xyXG5pbXBvcnQgQ29va2llcyBmcm9tICdqcy1jb29raWUnO1xyXG5cclxuY29uc3QgUHJvamVjdFBhZ2UgPSAoeyBwcm9qZWN0cyB9KSA9PiB7XHJcbiAgY29uc3QgW3NlbGVjdGVkUHJvamVjdCwgc2V0U2VsZWN0ZWRQcm9qZWN0XSA9IHVzZVN0YXRlKG51bGwpO1xyXG4gIGNvbnN0IGNvbnRhaW5lclJlZiA9IHVzZVJlZigpO1xyXG4gIGNvbnN0IHsgY3VycmVudFVzZXIgfSA9IHVzZUF1dGgoKTtcclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc3QgdWlkID0gQ29va2llcy5nZXQoJ3VpZCcpO1xyXG4gICAgY29uc3QgZmlsdGVyZWRBcnJheSA9IHByb2plY3RzICYmIHByb2plY3RzLmZpbHRlcigocHJvamVjdCkgPT4gcHJvamVjdC51aWQgPT0gdWlkKTtcclxuICAgIGNvbnNvbGUubG9nKGZpbHRlcmVkQXJyYXkpO1xyXG4gICAgZmlsdGVyZWRBcnJheSAmJiBmaWx0ZXJlZEFycmF5Lmxlbmd0aCA9PSAxICYmIHNldFNlbGVjdGVkUHJvamVjdChmaWx0ZXJlZEFycmF5WzBdKTtcclxuICB9LCBbcHJvamVjdHNdKTtcclxuICBjb25zb2xlLmxvZyhwcm9qZWN0cyk7XHJcbiAgY29uc29sZS5sb2coc2VsZWN0ZWRQcm9qZWN0KTtcclxuICBpZiAocm91dGVyLmlzRmFsbGJhY2spIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXY+XHJcbiAgICAgICAgPHA+TG9hZGluZy4uLjwvcD5cclxuICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgLy8gQlVTSU5FU1MgUExBTiBDUkVBVEVcclxuICBjb25zdCBvbkJ1c2luZXNzUGxhbkNyZWF0ZSA9IGFzeW5jICgpID0+IHtcclxuICAgIGF3YWl0IGRiQ2xpZW50LmNvbGxlY3Rpb24oJ3Byb2plY3RzJykuZG9jKHNlbGVjdGVkUHJvamVjdC5wcm9qZWN0SWQpLmNvbGxlY3Rpb24oJ2J1c2luZXNzUGxhbicpLmRvYyhSb3V0ZXIucXVlcnkucHJvamVjdCkuc2V0KHtcclxuICAgICAgdWlkOiBjdXJyZW50VXNlci51aWQsXHJcbiAgICAgIHByb2plY3RJZDogc2VsZWN0ZWRQcm9qZWN0LnByb2plY3RJZCxcclxuICAgICAgcGF0aE5hbWU6IHNlbGVjdGVkUHJvamVjdC5wcm9qZWN0TmFtZSxcclxuICAgIH0pO1xyXG4gICAgYXdhaXQgZGJDbGllbnQuY29sbGVjdGlvbigncHJvamVjdHMnKS5kb2Moc2VsZWN0ZWRQcm9qZWN0LnByb2plY3RJZCkudXBkYXRlKHsgaXNCdXNpbmVzc1BsYW5DcmVhdGVkOiB0cnVlIH0pO1xyXG4gICAgUm91dGVyLnB1c2goYC9kYXNoYm9hcmQvc3RhcnR1cC8ke1JvdXRlci5xdWVyeS5wcm9qZWN0fS9idXNpbmVzcy1wbGFuYCk7XHJcbiAgfTtcclxuXHJcbiAgY29uc29sZS5sb2coJ0NVUlJFTlQgUFJPSkVDVCAtLT4gJywgc2VsZWN0ZWRQcm9qZWN0KTtcclxuXHJcbiAgY29uc3Qgb25DYXNoRmxvd0FuYWx5c2lzQ3JlYXRlID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgYXdhaXQgZGJDbGllbnRcclxuICAgICAgLmNvbGxlY3Rpb24oJ3Byb2plY3RzJylcclxuICAgICAgLmRvYyhzZWxlY3RlZFByb2plY3QucHJvamVjdElkKVxyXG4gICAgICAuY29sbGVjdGlvbignY2FzaEZsb3cnKVxyXG4gICAgICAuZG9jKHJvdXRlci5xdWVyeS5wcm9qZWN0KVxyXG4gICAgICAuY29sbGVjdGlvbignaW5wdXRzJylcclxuICAgICAgLmRvYygpXHJcbiAgICAgIC5zZXQoe1xyXG4gICAgICAgIHVpZDogY3VycmVudFVzZXIudWlkLFxyXG4gICAgICAgIHByb2plY3RJZDogc2VsZWN0ZWRQcm9qZWN0LnByb2plY3RJZCxcclxuICAgICAgICBwYXRoTmFtZTogc2VsZWN0ZWRQcm9qZWN0LnByb2plY3ROYW1lLFxyXG4gICAgICAgIHJldmVudWVFbGVtZW50czogW10sXHJcbiAgICAgICAgY29zdHNFbGVtZW50czogW10sXHJcbiAgICAgICAgYnVkZ2V0RWxlbWVudHM6IFtdLFxyXG4gICAgICAgIGdsb2JhbFN0YXJ0RGF0ZTogJycsXHJcbiAgICAgICAgZ2xvYmFsRW5kRGF0ZTogJycsXHJcbiAgICAgICAgcGVyaW9kczogW10sXHJcbiAgICAgICAgdGF4OiAnMCcsXHJcbiAgICAgIH0pO1xyXG4gICAgYXdhaXQgZGJDbGllbnQuY29sbGVjdGlvbigncHJvamVjdHMnKS5kb2Moc2VsZWN0ZWRQcm9qZWN0LnByb2plY3RJZCkudXBkYXRlKHsgaXNDYXNoZmxvd0NyZWF0ZWQ6IHRydWUgfSk7XHJcbiAgICByb3V0ZXIucHVzaChgL2Rhc2hib2FyZC9zdGFydHVwLyR7cm91dGVyLnF1ZXJ5LnByb2plY3R9L2Nhc2gtZmxvd2ApO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IG9uQ29tcGV0aXRvcnNBbmFseXNpc0NyZWF0ZSA9IGFzeW5jICgpID0+IHtcclxuICAgIGF3YWl0IGRiQ2xpZW50XHJcbiAgICAgIC5jb2xsZWN0aW9uKCdwcm9qZWN0cycpXHJcbiAgICAgIC5kb2Moc2VsZWN0ZWRQcm9qZWN0LnByb2plY3RJZClcclxuICAgICAgLmNvbGxlY3Rpb24oJ2NvbXBldGl0b3JzJylcclxuICAgICAgLmRvYyhyb3V0ZXIucXVlcnkucHJvamVjdClcclxuICAgICAgLmNvbGxlY3Rpb24oJ2lucHV0cycpXHJcbiAgICAgIC5kb2MoKVxyXG4gICAgICAuc2V0KHtcclxuICAgICAgICB1aWQ6IGN1cnJlbnRVc2VyLnVpZCxcclxuICAgICAgICBwcm9qZWN0SWQ6IHNlbGVjdGVkUHJvamVjdC5wcm9qZWN0SWQsXHJcbiAgICAgICAgcGF0aE5hbWU6IHNlbGVjdGVkUHJvamVjdC5wcm9qZWN0TmFtZSxcclxuICAgICAgICBjb21wZXRpdG9yc0FycmF5OiBbXSxcclxuICAgICAgfSk7XHJcbiAgICBhd2FpdCBkYkNsaWVudC5jb2xsZWN0aW9uKCdwcm9qZWN0cycpLmRvYyhzZWxlY3RlZFByb2plY3QucHJvamVjdElkKS51cGRhdGUoeyBpc0NvbXBldGl0b3JzQW5hbHlzaXNDcmVhdGVkOiB0cnVlIH0pO1xyXG4gICAgcm91dGVyLnB1c2goYC9kYXNoYm9hcmQvc3RhcnR1cC8ke3JvdXRlci5xdWVyeS5wcm9qZWN0fS9jb21wZXRpdG9yc2ApO1xyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICAvLyA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbCBoLWZ1bGwganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyXCI+XHJcbiAgICAvLyAgIDxoMiBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlclwiPldlbGNvbWUgdG8gdGhlIHByb2plY3QgcGFnZSEgUHJvamVjdCBuYW1lOjwvaDI+XHJcbiAgICAvLyAgIHtzZWxlY3RlZFByb2plY3QgIT09IG51bGwgJiYgKFxyXG4gICAgLy8gICAgIDw+XHJcbiAgICAvLyAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlclwiPntzZWxlY3RlZFByb2plY3QucHJvamVjdE5hbWV9PC9wPlxyXG4gICAgLy8gICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXJcIj57c2VsZWN0ZWRQcm9qZWN0LnVpZH08L3A+XHJcbiAgICAvLyAgICAgPC8+XHJcbiAgICAvLyAgICl9XHJcbiAgICAvLyA8L2Rpdj5cclxuICAgIDw+XHJcbiAgICAgIDxUaXBweU1vbnN0ZXIgLz5cclxuICAgICAgPE5hdmJhclRlbXBsYXRlPlxyXG4gICAgICAgIHtzZWxlY3RlZFByb2plY3QgPyAoXHJcbiAgICAgICAgICA8ZGl2IHJlZj17Y29udGFpbmVyUmVmfSBjbGFzc05hbWU9XCJtaW4taC1zY3JlZW4gdy1mdWxsIHJlbGF0aXZlIGZsZXggZmxleC1jb2wgaXRlbXMtY2VudGVyXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsIHNtOm1heC13LXNtQ29udGFpbmVyIG1kOm1heC13LW1kQ29udGFpbmVyIGxnOm1heC13LWxnQ29udGFpbmVyIHhsOm1heC13LXhsQ29udGFpbmVyIDJ4bDptYXgtdy14eGxDb250YWluZXIgbm9ybWFsOm1heC13LW5vcm1hbENvbnRhaW5lciByZWxhdGl2ZSBtdC0xNlwiPlxyXG4gICAgICAgICAgICAgIHsvKiA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbCBtYXgtdy1mdWxsIHJlbGF0aXZlIG10LTE2IG1iLTE2IHB4LTMyXCI+ICovfVxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZCBncmlkLWNvbHMtMiBncmlkLXJvd3MtMSBncmlkLWZsb3ctY29sXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxzdmdcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9XCIzMFwiXHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg9XCIzMFwiXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZmlsbC1jdXJyZW50IHRleHQtcHJpbWFyeSBkYXJrOnRleHQtcHJpbWFyeWRhcmtcIlxyXG4gICAgICAgICAgICAgICAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxyXG4gICAgICAgICAgICAgICAgICAgIHZpZXdCb3g9XCIwIDAgMTI4IDEyOFwiXHJcbiAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICA8dGl0bGU+TGFuZGluZyBTdWNjZXNzPC90aXRsZT5cclxuICAgICAgICAgICAgICAgICAgICA8ZyBpZD1cIkxhbmRpbmdfU3VjY2Vzc1wiIGRhdGEtbmFtZT1cIkxhbmRpbmcgU3VjY2Vzc1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPHBhdGhcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiY2xzLTFcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkPVwiTTEwOS4zLDkwLjFBNDYsNDYsMCwwLDAsNjUsMzZWMjAuMDhjMS43OC0uNjIsNy4yMS0yLjE0LDEyLjU3LjIzYTE5LjMzLDE5LjMzLDAsMCwwLDE0LjgyLDBjLjg3LS4zOC42MS4zMS42MS0xNy45M2ExLDEsMCwwLDAtMS40My0uOTNjLS4wNywwLTYuNjksMi44Ny0xMy4xOCwwQTE5LjQxLDE5LjQxLDAsMCwwLDY1LC45MywxLDEsMCwwLDAsNjMsMVYzNmE0NS44Niw0NS44NiwwLDAsMC0yOC42NiwxMC44QzE2LjE4LDQwLjQ4LDQsNDAsLjc5LDQ1LjUxLTIuMjksNTAuODYsMy45NCw1OS4zLDEwLDY1LjY4QTExLDExLDAsMCwwLDE4LDgzYy44MSwzOC40MSw0Ni4wOCw1OS4yLDc1LjY2LDM0LjIxLDguNTMsMywyOSw5LjE1LDMzLjU1LDEuMzFDMTMwLjM5LDExMywxMjMuODYsMTAyLjY1LDEwOS4zLDkwLjFaTTc3LjU5LDMuMzFBMTkuMzksMTkuMzksMCwwLDAsOTEsMy44M1YxOC42OGMtMS43OS42Mi03LjIyLDIuMTMtMTIuNTctLjIzQTE5LjE5LDE5LjE5LDAsMCwwLDY1LDE3LjkzVjMuMDhDNjYuODEsMi40Niw3Mi4yNCwxLDc3LjU5LDMuMzFaTTY1LDQ1di03YzM5LjY5LjkxLDU4LDUwLjI3LDI4LjIxLDc2LjgxQzcxLjMyLDEwNyw0Niw5Mi42NiwyNy43Nyw3OC42NGExMSwxMSwwLDAsMC0zLjItMTYuMTNBNDMuODgsNDMuODgsMCwwLDEsNjMsMzguMDZWNDVBMSwxLDAsMCwwLDY1LDQ1Wk0zMi41NSw0OC4zNmE0Ni4yMSw0Ni4yMSwwLDAsMC05LjgzLDEzLjI4LDEwLjkzLDEwLjkzLDAsMCwwLTExLjQsMi40N0MtOC4zOSw0My4yMyw1LjIzLDM5LjA4LDMyLjU1LDQ4LjM2Wk0xMCw3MmE5LDksMCwxLDEsOSw5QTksOSwwLDAsMSwxMCw3MlptMTAsMTFhMTEsMTEsMCwwLDAsNi4zNC0yLjgyYzE4LjQ1LDE0LjIxLDQzLjQ1LDI4LjM1LDY1LjA1LDM2LjIyQzYzLDEzOS4xNiwyMC44MywxMTkuMSwyMC4wNSw4M1ptMTA1LjQsMzQuNWMtMi41MSw0LjM1LTE0LDMuNjItMzAtMS44NWE0NS42MSw0NS42MSwwLDAsMCwxMy40Mi0yMy4yMUMxMjEuNTksMTAzLjU4LDEyOCwxMTMuMTIsMTI1LjQ1LDExNy40N1pcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2c+XHJcbiAgICAgICAgICAgICAgICAgIDwvc3ZnPlxyXG4gICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXByaW1hcnlkYXJrIHRleHQtMnhsIG10LTIgcGwtMiBkYXJrOnRleHQtYmFja2dyb3VuZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIHtzZWxlY3RlZFByb2plY3QgJiYgc2VsZWN0ZWRQcm9qZWN0LnByb2plY3ROYW1lfVxyXG4gICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWVuZFwiPlxyXG4gICAgICAgICAgICAgICAgICB7LyogPFByb2plY3ROYXYgLz4gKi99XHJcbiAgICAgICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiByb3V0ZXIucHVzaChgL2Rhc2hib2FyZC9zdGFydHVwLyR7cm91dGVyLnF1ZXJ5LnByb2plY3R9L2VkaXRgKX1cclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJob3ZlcjpiZy1wcmltYXJ5IGhvdmVyOnRleHQtd2hpdGUgZGFyazpob3ZlcjpiZy1wcmltYXJ5ZGFyayBkYXJrOmhvdmVyOnRleHQtYmFja2dyb3VuZCBmb2N1czpvdXRsaW5lLW5vbmUgYm9yZGVyIGJvcmRlci1wcmltYXJ5IHRleHQtcHJpbWFyeSB0ZXh0LXNtIGZvbnQtbGlnaHQgcHktMiBweC04IHJvdW5kZWQtMnhsIG10LTIgZGFyazp0ZXh0LXByaW1hcnlkYXJrIGRhcms6Ym9yZGVyLXByaW1hcnlkYXJrXCJcclxuICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIFNldHRpbmdzXHJcbiAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJ0ZXh0LXNlY29uZGFyeSB0ZXh0LW1kIHRleHQtZ3JheVwiPlRoaXMgaXMgdGhlIGJlc3Qgc3RhcnR1cCBpbiB0aGUgdGVjaCBmaWVsZDwvaDE+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgey8qIFNFQ1RJT04gKi99XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkIGdyaWQtY29scy0yZnIgZ3JpZC1yb3dzLTNmciBtdC0yMCBnYXAtMTYgbWItMzJcIj5cclxuICAgICAgICAgICAgICAgIHsvKiBTSE9XVVAxICovfVxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3VuZGVkLTJ4bCB0cmFuc2Zvcm0gaG92ZXI6c2NhbGUtMTA1IGhvdmVyOi10cmFuc2xhdGUteS0yIGhvdmVyOi10cmFuc2xhdGUteC0yIHRyYW5zaXRpb24gZHVyYXRpb24tNTAwIGVhc2UtaW4tb3V0XCI+XHJcbiAgICAgICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJ0ZXh0LXByaW1hcnlkYXJrIHRleHQtbGcgZGFyazp0ZXh0LWJhY2tncm91bmRcIj5TdGFydHVwIGlkZWE8L2gxPlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gc3R5bGU9e3sgbWF4SGVpZ2h0OiAzMzAgfX1cclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJzaGFkb3ctbGcgbXQtMSB3LWZ1bGwgZmxleCBmbGV4LWNvbCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXIgYm9yZGVyLXItNiByb3VuZGVkLTJ4bCBiZy13aGl0ZSBkYXJrOmJnLWJhY2tncm91bmRcIlxyXG4gICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgPEltYWdlIGhlaWdodD17MjAwfSB3aWR0aD17MjAwfSBzcmM9XCIvbGF1bmNoLW1ha2VyLnN2Z1wiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cInRleHQtYmFzZSB0ZXh0LWdyYXkgdGV4dC1jZW50ZXIgcHgtOFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgU3RhcnR1cCBpZGVhIHdpbGwgZ3VpZGUgeW91IHRocm91Z2ggdGhlIHByb2Nlc3Mgb2YgY3JlYXRpbmcgeW91ciBidXNpbmVzcyBwbGFuLiDwn5SOXHJcbiAgICAgICAgICAgICAgICAgICAgPC9oMT5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInAtNFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJob3ZlcjpiZy1wcmltYXJ5IGhvdmVyOnRleHQtd2hpdGUgZGFyazpob3ZlcjpiZy1wcmltYXJ5ZGFyayBkYXJrOmhvdmVyOnRleHQtYmFja2dyb3VuZCBmb2N1czpvdXRsaW5lLW5vbmUgYm9yZGVyIGJvcmRlci1wcmltYXJ5IHRleHQtcHJpbWFyeSBkYXJrOnRleHQtcHJpbWFyeWRhcmsgZGFyazpib3JkZXItcHJpbWFyeWRhcmsgdGV4dC1zbSBmb250LWxpZ2h0IHB5LTIgcHgtNiByb3VuZGVkLTJ4bCBtLTJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgQ3JlYXRlIHlvdXIgc3RhcnR1cCBpZGVhXHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIHsvKiBTSE9XVVAyICovfVxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3VuZGVkLTJ4bCB0cmFuc2Zvcm0gaG92ZXI6c2NhbGUtMTA1IGhvdmVyOi10cmFuc2xhdGUteS0yIGhvdmVyOi10cmFuc2xhdGUteC0yIHRyYW5zaXRpb24gZHVyYXRpb24tNTAwIGVhc2UtaW4tb3V0XCI+XHJcbiAgICAgICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJ0ZXh0LXByaW1hcnlkYXJrIHRleHQtbGcgZGFyazp0ZXh0LWJhY2tncm91bmRcIj5CdXNpbmVzcyBwbGFuPC9oMT5cclxuICAgICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgIC8vIHN0eWxlPXt7IG1heEhlaWdodDogMzMwIH19XHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwic2hhZG93LWxnIG10LTEgdy1mdWxsIGZsZXggZmxleC1jb2wganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyIGJvcmRlci1yLTYgcm91bmRlZC0yeGwgYmctd2hpdGUgZGFyazpiZy1iYWNrZ3JvdW5kXCJcclxuICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIDxJbWFnZSBoZWlnaHQ9ezIwMH0gd2lkdGg9ezIwMH0gc3JjPVwiL21haW4tc2VjdGlvbnMvYnVzaW5lc3MtcGxhbi5zdmdcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJ0ZXh0LWJhc2UgdGV4dC1ncmF5IHRleHQtY2VudGVyIHB4LThcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIExldCdzIGNyZWF0ZSB5b3VyIGJ1c2luZXNzIHBsYW4sIHdoaWNoIHdpbGwgYmUgdGhlIGNvcmUgb2YgeW91ciBzdGFydHVwIHByZXNlbnRhdGlvbi4g8J+UjlxyXG4gICAgICAgICAgICAgICAgICAgIDwvaDE+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwLTRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17b25CdXNpbmVzc1BsYW5DcmVhdGV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImhvdmVyOmJnLXByaW1hcnkgaG92ZXI6dGV4dC13aGl0ZSBkYXJrOmhvdmVyOmJnLXByaW1hcnlkYXJrIGRhcms6aG92ZXI6dGV4dC1iYWNrZ3JvdW5kIGZvY3VzOm91dGxpbmUtbm9uZSBib3JkZXIgYm9yZGVyLXByaW1hcnkgdGV4dC1wcmltYXJ5IGRhcms6dGV4dC1wcmltYXJ5ZGFyayBkYXJrOmJvcmRlci1wcmltYXJ5ZGFyayB0ZXh0LXNtIGZvbnQtbGlnaHQgcHktMiBweC02IHJvdW5kZWQtMnhsIG0tMlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIENyZWF0ZSB5b3VyIGJ1c2luZXNzIHBsYW5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgey8qIFNIT1dVUDMgKi99XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdW5kZWQtMnhsIHRyYW5zZm9ybSBob3ZlcjpzY2FsZS0xMDUgaG92ZXI6LXRyYW5zbGF0ZS15LTIgaG92ZXI6LXRyYW5zbGF0ZS14LTIgdHJhbnNpdGlvbiBkdXJhdGlvbi01MDAgZWFzZS1pbi1vdXRcIj5cclxuICAgICAgICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cInRleHQtcHJpbWFyeWRhcmsgdGV4dC1sZyBkYXJrOnRleHQtYmFja2dyb3VuZFwiPkNhc2ggZmxvdyBhbmFseXNpczwvaDE+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICAvLyBzdHlsZT17eyBtYXhIZWlnaHQ6IDMzMCB9fVxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInNoYWRvdy1sZyBtdC0xIHctZnVsbCBmbGV4IGZsZXgtY29sIGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlciBib3JkZXItci02IHJvdW5kZWQtMnhsIGJnLXdoaXRlIGRhcms6YmctYmFja2dyb3VuZFwiXHJcbiAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICA8SW1hZ2UgaGVpZ2h0PXsyMDB9IHdpZHRoPXsyMDB9IHNyYz1cIi9tYWluLXNlY3Rpb25zL2Nhc2gtZmxvdzIuc3ZnXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwiIHRleHQtYmFzZSB0ZXh0LWdyYXkgdGV4dC1jZW50ZXIgcHgtOFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgQ2FzaCBmbG93IGFuYWx5c2lzIHdpbGwgYWxsb3cgeW91IHRvIGFuYWx5emUgdGhlIGxpcXVpZGl0eSBvZiB5b3VyIHN0YXJ0dXAuIPCflI5cclxuICAgICAgICAgICAgICAgICAgICA8L2gxPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicC00XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e29uQ2FzaEZsb3dBbmFseXNpc0NyZWF0ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaG92ZXI6YmctcHJpbWFyeSBob3Zlcjp0ZXh0LXdoaXRlIGRhcms6aG92ZXI6YmctcHJpbWFyeWRhcmsgZGFyazpob3Zlcjp0ZXh0LWJhY2tncm91bmQgZm9jdXM6b3V0bGluZS1ub25lIGJvcmRlciBib3JkZXItcHJpbWFyeSB0ZXh0LXByaW1hcnkgZGFyazp0ZXh0LXByaW1hcnlkYXJrIGRhcms6Ym9yZGVyLXByaW1hcnlkYXJrIHRleHQtc20gZm9udC1saWdodCBweS0yIHB4LTYgcm91bmRlZC0yeGwgbS0yXCJcclxuICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgQ3JlYXRlIHlvdXIgc3RhcnR1cCBjYXNoIGZsb3dcclxuICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgey8qIFNIT1dVUDQgKi99XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdW5kZWQtMnhsIHRyYW5zZm9ybSBob3ZlcjpzY2FsZS0xMDUgaG92ZXI6LXRyYW5zbGF0ZS15LTIgaG92ZXI6LXRyYW5zbGF0ZS14LTIgdHJhbnNpdGlvbiBkdXJhdGlvbi01MDAgZWFzZS1pbi1vdXRcIj5cclxuICAgICAgICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cInRleHQtcHJpbWFyeWRhcmsgdGV4dC1sZyBkYXJrOnRleHQtYmFja2dyb3VuZFwiPkNvbXBldGl0b3JzIGFuYWx5c2lzPC9oMT5cclxuICAgICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgIC8vIHN0eWxlPXt7IG1heEhlaWdodDogMzMwIH19XHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwic2hhZG93LWxnIG10LTEgdy1mdWxsIGZsZXggZmxleC1jb2wganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyIGJvcmRlci1yLTYgcm91bmRlZC0yeGwgYmctd2hpdGUgZGFyazpiZy1iYWNrZ3JvdW5kXCJcclxuICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIDxJbWFnZSBoZWlnaHQ9ezIwMH0gd2lkdGg9ezIwMH0gc3JjPVwiL21haW4tc2VjdGlvbnMvY29tcGV0aXRvcnMuc3ZnXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwidGV4dC1iYXNlIHRleHQtZ3JheSB0ZXh0LWNlbnRlciBweC04XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICBDb21wZXRpdG9yIGFuYWx5c2lzIHdpbGwgaGVscCB5b3UgYmV0dGVyIHByZXBhcmUgdG8gZW50ZXIgYSBnaXZlbiBtYXJrZXQuIPCflI5cclxuICAgICAgICAgICAgICAgICAgICA8L2gxPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicC00XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e29uQ29tcGV0aXRvcnNBbmFseXNpc0NyZWF0ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaG92ZXI6YmctcHJpbWFyeSBob3Zlcjp0ZXh0LXdoaXRlIGRhcms6aG92ZXI6YmctcHJpbWFyeWRhcmsgZGFyazpob3Zlcjp0ZXh0LWJhY2tncm91bmQgZm9jdXM6b3V0bGluZS1ub25lIGJvcmRlciBib3JkZXItcHJpbWFyeSB0ZXh0LXByaW1hcnkgZGFyazp0ZXh0LXByaW1hcnlkYXJrIGRhcms6Ym9yZGVyLXByaW1hcnlkYXJrIHRleHQtc20gZm9udC1saWdodCBweS0yIHB4LTYgcm91bmRlZC0yeGwgbS0yXCJcclxuICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgQW5hbHl6ZSB5b3VyIHN0YXJ0dXAgY29tcGV0aXRvcnNcclxuICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgey8qIFNIT1dVUDUgKi99XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdW5kZWQtMnhsIHRyYW5zZm9ybSBob3ZlcjpzY2FsZS0xMDUgaG92ZXI6LXRyYW5zbGF0ZS15LTIgaG92ZXI6LXRyYW5zbGF0ZS14LTIgdHJhbnNpdGlvbiBkdXJhdGlvbi01MDAgZWFzZS1pbi1vdXRcIj5cclxuICAgICAgICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cInRleHQtcHJpbWFyeWRhcmsgdGV4dC1sZyBkYXJrOnRleHQtYmFja2dyb3VuZFwiPlN0YXJ0dXAgbWVtYmVyczwvaDE+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICAvLyBzdHlsZT17eyBtYXhIZWlnaHQ6IDMzMCB9fVxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInNoYWRvdy1sZyBtdC0xIHctZnVsbCBmbGV4IGZsZXgtY29sIGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlciBib3JkZXItci02IHJvdW5kZWQtMnhsIGJnLXdoaXRlIGRhcms6YmctYmFja2dyb3VuZFwiXHJcbiAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICA8SW1hZ2UgaGVpZ2h0PXsyMDB9IHdpZHRoPXsyMDB9IHNyYz1cIi9tYWluLXNlY3Rpb25zL21lbWJlcnMxLnN2Z1wiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cInRleHQtYmFzZSB0ZXh0LWdyYXkgdGV4dC1jZW50ZXIgcHgtOFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgSWRlbnRpZnkgdGhlIHJvbGVzIG9mIHlvdXIgdGVhbSBhbmQgdGhlIHBlb3BsZSB3aG8gd2lsbCBoYXZlIGFjY2VzcyB0byB0aGlzIHByb2plY3QuIPCflI5cclxuICAgICAgICAgICAgICAgICAgICA8L2gxPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicC00XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e29uQ29tcGV0aXRvcnNBbmFseXNpc0NyZWF0ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaG92ZXI6YmctcHJpbWFyeSBob3Zlcjp0ZXh0LXdoaXRlIGRhcms6aG92ZXI6YmctcHJpbWFyeWRhcmsgZGFyazpob3Zlcjp0ZXh0LWJhY2tncm91bmQgZm9jdXM6b3V0bGluZS1ub25lIGJvcmRlciBib3JkZXItcHJpbWFyeSB0ZXh0LXByaW1hcnkgZGFyazp0ZXh0LXByaW1hcnlkYXJrIGRhcms6Ym9yZGVyLXByaW1hcnlkYXJrIHRleHQtc20gZm9udC1saWdodCBweS0yIHB4LTYgcm91bmRlZC0yeGwgbS0yXCJcclxuICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgTWFuYWdlIHlvdXIgc3RhcnR1cCBtZW1iZXJzXHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApIDogKFxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoLXNjcmVlbiB3LWZ1bGwgZmxleCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXJcIj5cclxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1wcmltYXJ5ZGFyayB0ZXh0LWxnXCI+Li4uTG9hZGluZzwvcD5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICl9XHJcbiAgICAgIDwvTmF2YmFyVGVtcGxhdGU+XHJcbiAgICA8Lz5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGdldFN0YXRpY1BhdGhzID0gYXN5bmMgKCkgPT4ge1xyXG4gIC8vIGNvbnN0IHsgcHJvamVjdHMgfSA9IGF3YWl0IGdldEFsbFByb2plY3RzKCk7XHJcbiAgY29uc3Qgc25hcHNob3QgPSBhd2FpdCBkYi5jb2xsZWN0aW9uKCdwcm9qZWN0cycpLmdldCgpO1xyXG5cclxuICBjb25zdCBwcm9qZWN0cyA9IFtdO1xyXG4gIHNuYXBzaG90LmZvckVhY2goKGRvYykgPT4ge1xyXG4gICAgcHJvamVjdHMucHVzaChkb2MuZGF0YSgpKTtcclxuICB9KTtcclxuXHJcbiAgY29uc3QgcGF0aHMgPSBwcm9qZWN0cy5tYXAoKHByb2plY3QpID0+ICh7XHJcbiAgICBwYXJhbXM6IHtcclxuICAgICAgcHJvamVjdDogcHJvamVjdC5wcm9qZWN0TmFtZS50b1N0cmluZygpLFxyXG4gICAgfSxcclxuICB9KSk7XHJcblxyXG4gIHJldHVybiB7XHJcbiAgICBwYXRoczogcGF0aHMsXHJcbiAgICBmYWxsYmFjazogdHJ1ZSxcclxuICB9O1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGdldFN0YXRpY1Byb3BzID0gYXN5bmMgKHsgcGFyYW1zIH0pID0+IHtcclxuICAvLyBjb25zdCB7IHByb2plY3RzIH0gPSBhd2FpdCBnZXRQYXJ0aWN1bGFyUHJvamVjdChwYXJhbXMud29yayk7XHJcbiAgLy8gY29uc3QgdWlkID0gQ29va2llcy5nZXQoJ3VpZCcpO1xyXG4gIGxldCByZWYgPSBkYi5jb2xsZWN0aW9uKCdwcm9qZWN0cycpLndoZXJlKCdwcm9qZWN0TmFtZScsICc9PScsIHBhcmFtcy5wcm9qZWN0KTtcclxuXHJcbiAgY29uc3Qgc25hcHNob3QgPSBhd2FpdCByZWYuZ2V0KCk7XHJcbiAgY29uc3QgcHJvamVjdHMgPSBbXTtcclxuXHJcbiAgc25hcHNob3QuZm9yRWFjaCgoZG9jKSA9PiB7XHJcbiAgICBwcm9qZWN0cy5wdXNoKHsgaWQ6IGRvYy5pZCwgLi4uZG9jLmRhdGEoKSB9KTtcclxuICB9KTtcclxuXHJcbiAgcmV0dXJuIHtcclxuICAgIHByb3BzOiB7IHByb2plY3RzIH0sXHJcbiAgICByZXZhbGlkYXRlOiAxLFxyXG4gIH07XHJcbn07XHJcblxyXG4vLyBleHBvcnQgY29uc3QgZ2V0U2VydmVyU2lkZVByb3BzID0gYXN5bmMgKHsgcGFyYW1zIH0pID0+IHtcclxuLy8gICBsZXQgcmVmID0gZGIuY29sbGVjdGlvbigncHJvamVjdHMnKS53aGVyZSgncHJvamVjdE5hbWUnLCAnPT0nLCBwYXJhbXMucHJvamVjdCk7XHJcblxyXG4vLyAgIGNvbnN0IHNuYXBzaG90ID0gYXdhaXQgcmVmLmdldCgpO1xyXG4vLyAgIGNvbnN0IHByb2plY3RzID0gW107XHJcblxyXG4vLyAgIHNuYXBzaG90LmZvckVhY2goKGRvYykgPT4ge1xyXG4vLyAgICAgcHJvamVjdHMucHVzaCh7IGlkOiBkb2MuaWQsIC4uLmRvYy5kYXRhKCkgfSk7XHJcbi8vICAgfSk7XHJcblxyXG4vLyAgIHJldHVybiB7XHJcbi8vICAgICBwcm9wczogeyBwcm9qZWN0cyB9LFxyXG4vLyAgIH07XHJcbi8vIH07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQcm9qZWN0UGFnZTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==