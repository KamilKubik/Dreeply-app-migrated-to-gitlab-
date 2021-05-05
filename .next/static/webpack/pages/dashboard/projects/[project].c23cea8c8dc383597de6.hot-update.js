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
/* harmony import */ var _components_dashboard_NavbarTemplate__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../components/dashboard/NavbarTemplate */ "./components/dashboard/NavbarTemplate.js");
/* harmony import */ var _components_dashboard_Tippy__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../components/dashboard/Tippy */ "./components/dashboard/Tippy.js");
/* harmony import */ var react_device_detect__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-device-detect */ "./node_modules/react-device-detect/main.js");
/* harmony import */ var react_device_detect__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_device_detect__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _components_MobilePrevent__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../components/MobilePrevent */ "./components/MobilePrevent.js");





var _jsxFileName = "C:\\off-saas\\pages\\dashboard\\projects\\[project]\\index.js",
    _this = undefined,
    _s = $RefreshSig$();







 // import ProjectNav from '../../../../components/dashboard/startup/project/ProjectNav';




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
  console.log(selectedProject); // STARTUP IDEA CREATE

  var onStartupIdeaCreate = /*#__PURE__*/function () {
    var _ref2 = Object(C_off_saas_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/C_off_saas_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee() {
      return C_off_saas_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              if (!(selectedProject && selectedProject.isIdeaPlanCreated)) {
                _context.next = 3;
                break;
              }

              router.push("/dashboard/projects/".concat(router.query.project, "/startup-idea/vision"));
              return _context.abrupt("return");

            case 3:
              _context.next = 5;
              return _lib_firebase__WEBPACK_IMPORTED_MODULE_6__["db"].collection('projects').doc(selectedProject.projectId).collection('startupIdea').doc(router.query.project).set({
                uid: currentUser.uid,
                projectId: selectedProject.projectId,
                pathName: selectedProject.projectName
              });

            case 5:
              _context.next = 7;
              return _lib_firebase__WEBPACK_IMPORTED_MODULE_6__["db"].collection('projects').doc(selectedProject.projectId).collection('startupIdea').doc(router.query.project).collection('inputs').doc().set({
                uid: currentUser.uid,
                projectId: selectedProject.projectId,
                pathName: selectedProject.projectName,
                filledSection: false,
                filledSection1: false,
                filledSection2: false,
                filledSection3: false,
                filledSection4: false,
                marketProblemSectionData: 'blank',
                marketSolutionSectionData: 'blank',
                foundersSectionData: 'blank',
                productOverviewSectionData: 'blank',
                productPromotionSectionData: 'blank',
                productBenefitsSectionData: 'blank',
                marketOverviewSectionData: 'blank',
                competitorsSectionData: 'blank',
                targetCustomersSectionData: 'blank',
                competitionDistinguishSectionData: 'blank',
                startupCostsSectionData: 'blank',
                runningCostsSectionData: 'blank',
                financingSectionData: 'blank',
                businessModelOverviewSectionData: 'blank',
                businessGrowSectionData: 'blank',
                whySuccessSectionData: 'blank'
              });

            case 7:
              _context.next = 9;
              return _lib_firebase__WEBPACK_IMPORTED_MODULE_6__["db"].collection('projects').doc(selectedProject.projectId).update({
                isIdeaPlanCreated: true
              });

            case 9:
              router.push("/dashboard/projects/".concat(router.query.project, "/startup-idea/vision"));

            case 10:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function onStartupIdeaCreate() {
      return _ref2.apply(this, arguments);
    };
  }(); // BUSINESS PLAN CREATE


  var onBusinessPlanCreate = /*#__PURE__*/function () {
    var _ref3 = Object(C_off_saas_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/C_off_saas_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee2() {
      return C_off_saas_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              if (!(selectedProject && selectedProject.isBusinessPlanCreated)) {
                _context2.next = 3;
                break;
              }

              router.push("/dashboard/projects/".concat(router.query.project, "/business-plan"));
              return _context2.abrupt("return");

            case 3:
              _context2.next = 5;
              return _lib_firebase__WEBPACK_IMPORTED_MODULE_6__["db"].collection('projects').doc(selectedProject.projectId).collection('businessPlan').doc(router.query.project).set({
                uid: currentUser.uid,
                projectId: selectedProject.projectId,
                pathName: selectedProject.projectName
              });

            case 5:
              _context2.next = 7;
              return _lib_firebase__WEBPACK_IMPORTED_MODULE_6__["db"].collection('projects').doc(selectedProject.projectId).update({
                isBusinessPlanCreated: true
              });

            case 7:
              router.push("/dashboard/projects/".concat(router.query.project, "/business-plan"));

            case 8:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }));

    return function onBusinessPlanCreate() {
      return _ref3.apply(this, arguments);
    };
  }();

  console.log('CURRENT PROJECT --> ', selectedProject);

  var onCashFlowAnalysisCreate = /*#__PURE__*/function () {
    var _ref4 = Object(C_off_saas_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/C_off_saas_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee3() {
      return C_off_saas_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              if (!(selectedProject && selectedProject.isCashflowCreated)) {
                _context3.next = 3;
                break;
              }

              router.push("/dashboard/projects/".concat(router.query.project, "/cash-flow"));
              return _context3.abrupt("return");

            case 3:
              _context3.next = 5;
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

            case 5:
              _context3.next = 7;
              return _lib_firebase__WEBPACK_IMPORTED_MODULE_6__["db"].collection('projects').doc(selectedProject.projectId).update({
                isCashflowCreated: true
              });

            case 7:
              router.push("/dashboard/projects/".concat(router.query.project, "/cash-flow"));

            case 8:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3);
    }));

    return function onCashFlowAnalysisCreate() {
      return _ref4.apply(this, arguments);
    };
  }();

  var onCompetitorsAnalysisCreate = /*#__PURE__*/function () {
    var _ref5 = Object(C_off_saas_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/C_off_saas_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee4() {
      return C_off_saas_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              if (!(selectedProject && selectedProject.isCompetitorsAnalysisCreated)) {
                _context4.next = 3;
                break;
              }

              router.push("/dashboard/projects/".concat(router.query.project, "/competitors"));
              return _context4.abrupt("return");

            case 3:
              _context4.next = 5;
              return _lib_firebase__WEBPACK_IMPORTED_MODULE_6__["db"].collection('projects').doc(selectedProject.projectId).collection('competitors').doc(router.query.project).collection('inputs').doc().set({
                uid: currentUser.uid,
                projectId: selectedProject.projectId,
                pathName: selectedProject.projectName,
                competitorsArray: []
              });

            case 5:
              _context4.next = 7;
              return _lib_firebase__WEBPACK_IMPORTED_MODULE_6__["db"].collection('projects').doc(selectedProject.projectId).update({
                isCompetitorsAnalysisCreated: true
              });

            case 7:
              router.push("/dashboard/projects/".concat(router.query.project, "/competitors"));

            case 8:
            case "end":
              return _context4.stop();
          }
        }
      }, _callee4);
    }));

    return function onCompetitorsAnalysisCreate() {
      return _ref5.apply(this, arguments);
    };
  }();

  if (router.isFallback) {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
        children: "Loading..."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 145,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 144,
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
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_dashboard_Tippy__WEBPACK_IMPORTED_MODULE_9__["default"], {
        projectManager: true,
        contentClass: "h-40 w-80 shadow-lg rounded-2xl bg-primary flex justify-center items-center",
        contentText: "We are in a space where you can manage your startup in various possible ways ",
        contentText1: " For a good start, begin with \"Startup idea\" that will guide you through the entire process of creating a plan for your startup! "
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 161,
        columnNumber: 7
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_dashboard_NavbarTemplate__WEBPACK_IMPORTED_MODULE_8__["default"], {
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
                  height: "32",
                  width: "32",
                  className: "fill-current text-primary dark:text-primarydark",
                  xmlns: "http://www.w3.org/2000/svg",
                  viewBox: "0 0 128 128",
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("title", {
                    children: "Landing Success"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 181,
                    columnNumber: 21
                  }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("g", {
                    id: "Landing_Success",
                    "data-name": "Landing Success",
                    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
                      className: "cls-1",
                      d: "M109.3,90.1A46,46,0,0,0,65,36V20.08c1.78-.62,7.21-2.14,12.57.23a19.33,19.33,0,0,0,14.82,0c.87-.38.61.31.61-17.93a1,1,0,0,0-1.43-.93c-.07,0-6.69,2.87-13.18,0A19.41,19.41,0,0,0,65,.93,1,1,0,0,0,63,1V36a45.86,45.86,0,0,0-28.66,10.8C16.18,40.48,4,40,.79,45.51-2.29,50.86,3.94,59.3,10,65.68A11,11,0,0,0,18,83c.81,38.41,46.08,59.2,75.66,34.21,8.53,3,29,9.15,33.55,1.31C130.39,113,123.86,102.65,109.3,90.1ZM77.59,3.31A19.39,19.39,0,0,0,91,3.83V18.68c-1.79.62-7.22,2.13-12.57-.23A19.19,19.19,0,0,0,65,17.93V3.08C66.81,2.46,72.24,1,77.59,3.31ZM65,45v-7c39.69.91,58,50.27,28.21,76.81C71.32,107,46,92.66,27.77,78.64a11,11,0,0,0-3.2-16.13A43.88,43.88,0,0,1,63,38.06V45A1,1,0,0,0,65,45ZM32.55,48.36a46.21,46.21,0,0,0-9.83,13.28,10.93,10.93,0,0,0-11.4,2.47C-8.39,43.23,5.23,39.08,32.55,48.36ZM10,72a9,9,0,1,1,9,9A9,9,0,0,1,10,72Zm10,11a11,11,0,0,0,6.34-2.82c18.45,14.21,43.45,28.35,65.05,36.22C63,139.16,20.83,119.1,20.05,83Zm105.4,34.5c-2.51,4.35-14,3.62-30-1.85a45.61,45.61,0,0,0,13.42-23.21C121.59,103.58,128,113.12,125.45,117.47Z"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 183,
                      columnNumber: 23
                    }, _this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 182,
                    columnNumber: 21
                  }, _this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 174,
                  columnNumber: 19
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                  className: "text-primarydark text-2xl screenLarge:text-3xl mt-3 pl-2 dark:text-background",
                  children: selectedProject && selectedProject.projectName
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 189,
                  columnNumber: 19
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 173,
                columnNumber: 17
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: "flex justify-end",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
                  onClick: function onClick() {
                    return router.push("/dashboard/projects/".concat(router.query.project, "/edit"));
                  },
                  className: "hover:bg-primary hover:text-white dark:hover:bg-primarydark dark:hover:text-background focus:outline-none border border-primary text-primary text-base font-light relative top-2 py-2 px-8 rounded-2xl mt-2 dark:text-primarydark dark:border-primarydark",
                  children: "Settings"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 195,
                  columnNumber: 19
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 193,
                columnNumber: 17
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 172,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
                className: "text-secondary text-md screenLarge:text-base text-gray -mt-1",
                children: "This is the best startup in the tech field"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 204,
                columnNumber: 17
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 203,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "grid grid-cols-1frr screenSmall:grid-cols-2fr grid-rows-5fr screenSmall:grid-rows-3fr mt-12 gap-16 mb-32",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: "rounded-2xl transform hover:scale-105 hover:-translate-y-2 hover:-translate-x-2 transition duration-500 ease-in-out",
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
                  className: "text-primarydark text-lg dark:text-background",
                  children: "Startup idea"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 210,
                  columnNumber: 19
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                  style: {
                    maxHeight: 330
                  },
                  className: "p-6 shadow-lg mt-1 w-full flex flex-col justify-center items-center border-r-6 rounded-2xl bg-white dark:bg-background",
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
                    style: {
                      maxHeight: 140
                    },
                    height: 300,
                    width: 300,
                    src: "/launch-maker.svg"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 215,
                    columnNumber: 21
                  }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                    className: "text-base text-gray text-center px-4 py-4 inline-block",
                    children: "Startup idea will guide you through the process of creating your business plan"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 216,
                    columnNumber: 21
                  }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
                    onClick: onStartupIdeaCreate,
                    className: "hover:bg-primary hover:text-white dark:hover:bg-primarydark dark:hover:text-background focus:outline-none border border-primary text-primary dark:text-primarydark dark:border-primarydark text-sm font-light py-2 px-6 rounded-2xl",
                    children: selectedProject.isIdeaPlanCreated ? 'Manage your startup idea plan' : 'Create your startup idea plan'
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 220,
                    columnNumber: 21
                  }, _this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 211,
                  columnNumber: 19
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 209,
                columnNumber: 17
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: "rounded-2xl transform hover:scale-105 hover:-translate-y-2 hover:-translate-x-2 transition duration-500 ease-in-out",
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
                  className: "text-primarydark text-lg dark:text-background",
                  children: "Business plan"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 230,
                  columnNumber: 19
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                  style: {
                    maxHeight: 330
                  },
                  className: "p-6 shadow-lg mt-1 w-full flex flex-col justify-center items-center border-r-6 rounded-2xl bg-white dark:bg-background",
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
                    style: {
                      maxHeight: 140
                    },
                    height: 300,
                    width: 300,
                    src: "/main-sections/business-plan.svg"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 235,
                    columnNumber: 21
                  }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                    className: "text-base text-gray text-center px-4 py-4",
                    children: "Let's create your business plan, which will be the core of your startup presentation"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 236,
                    columnNumber: 21
                  }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
                    onClick: onBusinessPlanCreate,
                    className: "hover:bg-primary hover:text-white dark:hover:bg-primarydark dark:hover:text-background focus:outline-none border border-primary text-primary dark:text-primarydark dark:border-primarydark text-sm font-light py-2 px-6 rounded-2xl",
                    children: selectedProject.isBusinessPlanCreated ? 'Manage your business plan' : 'Create your business plan'
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 245,
                    columnNumber: 21
                  }, _this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 231,
                  columnNumber: 19
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 229,
                columnNumber: 17
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: "rounded-2xl transform hover:scale-105 hover:-translate-y-2 hover:-translate-x-2 transition duration-500 ease-in-out",
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
                  className: "text-primarydark text-lg dark:text-background",
                  children: "Cash flow analysis"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 255,
                  columnNumber: 19
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                  style: {
                    maxHeight: 330
                  },
                  className: "p-6 shadow-lg mt-1 w-full flex flex-col justify-center items-center border-r-6 rounded-2xl bg-white dark:bg-background",
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
                    style: {
                      maxHeight: 140
                    },
                    height: 300,
                    width: 300,
                    src: "/main-sections/cash-flow2.svg"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 260,
                    columnNumber: 21
                  }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
                    className: " text-base text-gray text-center px-4 py-4",
                    children: "Cash flow analysis will allow you to analyze the liquidity of your startup"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 261,
                    columnNumber: 21
                  }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
                    onClick: onCashFlowAnalysisCreate,
                    className: "hover:bg-primary hover:text-white dark:hover:bg-primarydark dark:hover:text-background focus:outline-none border border-primary text-primary dark:text-primarydark dark:border-primarydark text-sm font-light py-2 px-6 rounded-2xl",
                    children: selectedProject.isCashflowCreated ? 'Manage your startup cash flow' : 'Create your startup cash flow'
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 264,
                    columnNumber: 21
                  }, _this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 256,
                  columnNumber: 19
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 254,
                columnNumber: 17
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: "rounded-2xl transform hover:scale-105 hover:-translate-y-2 hover:-translate-x-2 transition duration-500 ease-in-out",
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
                  className: "text-primarydark text-lg dark:text-background",
                  children: "Competitors analysis"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 274,
                  columnNumber: 19
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                  style: {
                    maxHeight: 330
                  },
                  className: "p-6 shadow-lg mt-1 w-full flex flex-col justify-center items-center border-r-6 rounded-2xl bg-white dark:bg-background",
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
                    style: {
                      maxHeight: 140
                    },
                    height: 300,
                    width: 300,
                    src: "/main-sections/competitors.svg"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 279,
                    columnNumber: 21
                  }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                    className: "text-base text-gray text-center px-4 py-4",
                    children: "Competitor analysis will help you better prepare to enter a given market"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 280,
                    columnNumber: 21
                  }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
                    onClick: onCompetitorsAnalysisCreate,
                    className: "hover:bg-primary hover:text-white dark:hover:bg-primarydark dark:hover:text-background focus:outline-none border border-primary text-primary dark:text-primarydark dark:border-primarydark text-sm font-light py-2 px-6 rounded-2xl",
                    children: selectedProject.isCompetitorsAnalysisCreated ? 'Manage your competitors analysis' : 'Create your competitors analysis'
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 283,
                    columnNumber: 21
                  }, _this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 275,
                  columnNumber: 19
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 273,
                columnNumber: 17
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: "rounded-2xl transform hover:scale-105 hover:-translate-y-2 hover:-translate-x-2 transition duration-500 ease-in-out",
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
                  className: "text-primarydark text-lg dark:text-background",
                  children: "Startup members"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 295,
                  columnNumber: 19
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                  style: {
                    maxHeight: 330
                  },
                  className: "p-6 shadow-lg mt-1 w-full flex flex-col justify-center items-center border-r-6 rounded-2xl bg-white dark:bg-background",
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
                    style: {
                      maxHeight: 140
                    },
                    height: 300,
                    width: 300,
                    src: "/main-sections/members1.svg"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 300,
                    columnNumber: 21
                  }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
                    className: "text-base text-gray text-center px-4 py-4",
                    children: "Identify the roles of your team and the people who will have access to this project"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 301,
                    columnNumber: 21
                  }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
                    onClick: onCompetitorsAnalysisCreate,
                    className: "hover:bg-primary hover:text-white dark:hover:bg-primarydark dark:hover:text-background focus:outline-none border border-primary text-primary dark:text-primarydark dark:border-primarydark text-sm font-light py-2 px-6 rounded-2xl",
                    children: "Manage your startup members"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 304,
                    columnNumber: 21
                  }, _this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 296,
                  columnNumber: 19
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 294,
                columnNumber: 17
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 207,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 170,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 169,
          columnNumber: 11
        }, _this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "h-screen w-full flex justify-center items-center",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            className: "text-primarydark text-lg",
            children: "...Loading"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 317,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 316,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 167,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvZGFzaGJvYXJkL3Byb2plY3RzL1twcm9qZWN0XS9pbmRleC5qcyJdLCJuYW1lcyI6WyJQcm9qZWN0UGFnZSIsInByb2plY3RzIiwidXNlU3RhdGUiLCJzZWxlY3RlZFByb2plY3QiLCJzZXRTZWxlY3RlZFByb2plY3QiLCJjb250YWluZXJSZWYiLCJ1c2VSZWYiLCJ1c2VBdXRoIiwiY3VycmVudFVzZXIiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJ1c2VFZmZlY3QiLCJ1aWQiLCJDb29raWVzIiwiZ2V0IiwiZmlsdGVyZWRBcnJheSIsImZpbHRlciIsInByb2plY3QiLCJjb25zb2xlIiwibG9nIiwibGVuZ3RoIiwib25TdGFydHVwSWRlYUNyZWF0ZSIsImlzSWRlYVBsYW5DcmVhdGVkIiwicHVzaCIsInF1ZXJ5IiwiZGJDbGllbnQiLCJjb2xsZWN0aW9uIiwiZG9jIiwicHJvamVjdElkIiwic2V0IiwicGF0aE5hbWUiLCJwcm9qZWN0TmFtZSIsImZpbGxlZFNlY3Rpb24iLCJmaWxsZWRTZWN0aW9uMSIsImZpbGxlZFNlY3Rpb24yIiwiZmlsbGVkU2VjdGlvbjMiLCJmaWxsZWRTZWN0aW9uNCIsIm1hcmtldFByb2JsZW1TZWN0aW9uRGF0YSIsIm1hcmtldFNvbHV0aW9uU2VjdGlvbkRhdGEiLCJmb3VuZGVyc1NlY3Rpb25EYXRhIiwicHJvZHVjdE92ZXJ2aWV3U2VjdGlvbkRhdGEiLCJwcm9kdWN0UHJvbW90aW9uU2VjdGlvbkRhdGEiLCJwcm9kdWN0QmVuZWZpdHNTZWN0aW9uRGF0YSIsIm1hcmtldE92ZXJ2aWV3U2VjdGlvbkRhdGEiLCJjb21wZXRpdG9yc1NlY3Rpb25EYXRhIiwidGFyZ2V0Q3VzdG9tZXJzU2VjdGlvbkRhdGEiLCJjb21wZXRpdGlvbkRpc3Rpbmd1aXNoU2VjdGlvbkRhdGEiLCJzdGFydHVwQ29zdHNTZWN0aW9uRGF0YSIsInJ1bm5pbmdDb3N0c1NlY3Rpb25EYXRhIiwiZmluYW5jaW5nU2VjdGlvbkRhdGEiLCJidXNpbmVzc01vZGVsT3ZlcnZpZXdTZWN0aW9uRGF0YSIsImJ1c2luZXNzR3Jvd1NlY3Rpb25EYXRhIiwid2h5U3VjY2Vzc1NlY3Rpb25EYXRhIiwidXBkYXRlIiwib25CdXNpbmVzc1BsYW5DcmVhdGUiLCJpc0J1c2luZXNzUGxhbkNyZWF0ZWQiLCJvbkNhc2hGbG93QW5hbHlzaXNDcmVhdGUiLCJpc0Nhc2hmbG93Q3JlYXRlZCIsInJldmVudWVFbGVtZW50cyIsImNvc3RzRWxlbWVudHMiLCJidWRnZXRFbGVtZW50cyIsImdsb2JhbFN0YXJ0RGF0ZSIsImdsb2JhbEVuZERhdGUiLCJwZXJpb2RzIiwidGF4Iiwib25Db21wZXRpdG9yc0FuYWx5c2lzQ3JlYXRlIiwiaXNDb21wZXRpdG9yc0FuYWx5c2lzQ3JlYXRlZCIsImNvbXBldGl0b3JzQXJyYXkiLCJpc0ZhbGxiYWNrIiwibWF4SGVpZ2h0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Q0FFQTs7QUFDQTtBQUNBOztBQUVBLElBQU1BLFdBQVcsR0FBRyxTQUFkQSxXQUFjLE9BQWtCO0FBQUE7O0FBQUEsTUFBZkMsUUFBZSxRQUFmQSxRQUFlOztBQUFBLGtCQUNVQyxzREFBUSxDQUFDLElBQUQsQ0FEbEI7QUFBQSxNQUM3QkMsZUFENkI7QUFBQSxNQUNaQyxrQkFEWTs7QUFFcEMsTUFBTUMsWUFBWSxHQUFHQyxvREFBTSxFQUEzQjs7QUFGb0MsaUJBR1pDLDREQUFPLEVBSEs7QUFBQSxNQUc1QkMsV0FINEIsWUFHNUJBLFdBSDRCOztBQUlwQyxNQUFNQyxNQUFNLEdBQUdDLDZEQUFTLEVBQXhCO0FBQ0FDLHlEQUFTLENBQUMsWUFBTTtBQUNkLFFBQU1DLEdBQUcsR0FBR0MsZ0RBQU8sQ0FBQ0MsR0FBUixDQUFZLEtBQVosQ0FBWjtBQUNBLFFBQU1DLGFBQWEsR0FBR2QsUUFBUSxJQUFJQSxRQUFRLENBQUNlLE1BQVQsQ0FBZ0Is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ZUFQRjtBQUFBO0FBVkY7QUE2S0QsQ0F0VEQ7O0dBQU1qRSxXO1VBR29CTyxvRCxFQUNURyxxRDs7O0tBSlhWLFc7QUErVk47QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFZUEsMEVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvZGFzaGJvYXJkL3Byb2plY3RzL1twcm9qZWN0XS5jMjNjZWE4YzhkYzM4MzU5N2RlNi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUsIHVzZVJlZiB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgZGIgfSBmcm9tICcuLi8uLi8uLi8uLi9saWIvZmlyZWJhc2UtYWRtaW4nO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XHJcbmltcG9ydCBDb29raWVzIGZyb20gJ2pzLWNvb2tpZSc7XHJcbmltcG9ydCB7IGRiIGFzIGRiQ2xpZW50IH0gZnJvbSAnLi4vLi4vLi4vLi4vbGliL2ZpcmViYXNlJztcclxuaW1wb3J0IHsgdXNlQXV0aCB9IGZyb20gJy4uLy4uLy4uLy4uL2xpYi9uZXdBdXRoJztcclxuaW1wb3J0IE5hdmJhclRlbXBsYXRlIGZyb20gJy4uLy4uLy4uLy4uL2NvbXBvbmVudHMvZGFzaGJvYXJkL05hdmJhclRlbXBsYXRlJztcclxuaW1wb3J0IFRpcHB5TW9uc3RlciBmcm9tICcuLi8uLi8uLi8uLi9jb21wb25lbnRzL2Rhc2hib2FyZC9UaXBweSc7XHJcbi8vIGltcG9ydCBQcm9qZWN0TmF2IGZyb20gJy4uLy4uLy4uLy4uL2NvbXBvbmVudHMvZGFzaGJvYXJkL3N0YXJ0dXAvcHJvamVjdC9Qcm9qZWN0TmF2JztcclxuaW1wb3J0IHsgaXNNb2JpbGUgfSBmcm9tICdyZWFjdC1kZXZpY2UtZGV0ZWN0JztcclxuaW1wb3J0IE1vYmlsZVByZXZlbnQgZnJvbSAnLi4vLi4vLi4vLi4vY29tcG9uZW50cy9Nb2JpbGVQcmV2ZW50JztcclxuXHJcbmNvbnN0IFByb2plY3RQYWdlID0gKHsgcHJvamVjdHMgfSkgPT4ge1xyXG4gIGNvbnN0IFtzZWxlY3RlZFByb2plY3QsIHNldFNlbGVjdGVkUHJvamVjdF0gPSB1c2VTdGF0ZShudWxsKTtcclxuICBjb25zdCBjb250YWluZXJSZWYgPSB1c2VSZWYoKTtcclxuICBjb25zdCB7IGN1cnJlbnRVc2VyIH0gPSB1c2VBdXRoKCk7XHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnN0IHVpZCA9IENvb2tpZXMuZ2V0KCd1aWQnKTtcclxuICAgIGNvbnN0IGZpbHRlcmVkQXJyYXkgPSBwcm9qZWN0cyAmJiBwcm9qZWN0cy5maWx0ZXIoKHByb2plY3QpID0+IHByb2plY3QudWlkID09IHVpZCk7XHJcbiAgICBjb25zb2xlLmxvZyhmaWx0ZXJlZEFycmF5KTtcclxuICAgIGZpbHRlcmVkQXJyYXkgJiYgZmlsdGVyZWRBcnJheS5sZW5ndGggPT0gMSAmJiBzZXRTZWxlY3RlZFByb2plY3QoZmlsdGVyZWRBcnJheVswXSk7XHJcbiAgfSwgW3Byb2plY3RzXSk7XHJcbiAgY29uc29sZS5sb2cocHJvamVjdHMpO1xyXG4gIGNvbnNvbGUubG9nKHNlbGVjdGVkUHJvamVjdCk7XHJcblxyXG4gIC8vIFNUQVJUVVAgSURFQSBDUkVBVEVcclxuICBjb25zdCBvblN0YXJ0dXBJZGVhQ3JlYXRlID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgaWYgKHNlbGVjdGVkUHJvamVjdCAmJiBzZWxlY3RlZFByb2plY3QuaXNJZGVhUGxhbkNyZWF0ZWQpIHtcclxuICAgICAgcm91dGVyLnB1c2goYC9kYXNoYm9hcmQvcHJvamVjdHMvJHtyb3V0ZXIucXVlcnkucHJvamVjdH0vc3RhcnR1cC1pZGVhL3Zpc2lvbmApO1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBhd2FpdCBkYkNsaWVudC5jb2xsZWN0aW9uKCdwcm9qZWN0cycpLmRvYyhzZWxlY3RlZFByb2plY3QucHJvamVjdElkKS5jb2xsZWN0aW9uKCdzdGFydHVwSWRlYScpLmRvYyhyb3V0ZXIucXVlcnkucHJvamVjdCkuc2V0KHtcclxuICAgICAgdWlkOiBjdXJyZW50VXNlci51aWQsXHJcbiAgICAgIHByb2plY3RJZDogc2VsZWN0ZWRQcm9qZWN0LnByb2plY3RJZCxcclxuICAgICAgcGF0aE5hbWU6IHNlbGVjdGVkUHJvamVjdC5wcm9qZWN0TmFtZSxcclxuICAgIH0pO1xyXG4gICAgYXdhaXQgZGJDbGllbnRcclxuICAgICAgLmNvbGxlY3Rpb24oJ3Byb2plY3RzJylcclxuICAgICAgLmRvYyhzZWxlY3RlZFByb2plY3QucHJvamVjdElkKVxyXG4gICAgICAuY29sbGVjdGlvbignc3RhcnR1cElkZWEnKVxyXG4gICAgICAuZG9jKHJvdXRlci5xdWVyeS5wcm9qZWN0KVxyXG4gICAgICAuY29sbGVjdGlvbignaW5wdXRzJylcclxuICAgICAgLmRvYygpXHJcbiAgICAgIC5zZXQoe1xyXG4gICAgICAgIHVpZDogY3VycmVudFVzZXIudWlkLFxyXG4gICAgICAgIHByb2plY3RJZDogc2VsZWN0ZWRQcm9qZWN0LnByb2plY3RJZCxcclxuICAgICAgICBwYXRoTmFtZTogc2VsZWN0ZWRQcm9qZWN0LnByb2plY3ROYW1lLFxyXG4gICAgICAgIGZpbGxlZFNlY3Rpb246IGZhbHNlLFxyXG4gICAgICAgIGZpbGxlZFNlY3Rpb24xOiBmYWxzZSxcclxuICAgICAgICBmaWxsZWRTZWN0aW9uMjogZmFsc2UsXHJcbiAgICAgICAgZmlsbGVkU2VjdGlvbjM6IGZhbHNlLFxyXG4gICAgICAgIGZpbGxlZFNlY3Rpb240OiBmYWxzZSxcclxuICAgICAgICBtYXJrZXRQcm9ibGVtU2VjdGlvbkRhdGE6ICdibGFuaycsXHJcbiAgICAgICAgbWFya2V0U29sdXRpb25TZWN0aW9uRGF0YTogJ2JsYW5rJyxcclxuICAgICAgICBmb3VuZGVyc1NlY3Rpb25EYXRhOiAnYmxhbmsnLFxyXG4gICAgICAgIHByb2R1Y3RPdmVydmlld1NlY3Rpb25EYXRhOiAnYmxhbmsnLFxyXG4gICAgICAgIHByb2R1Y3RQcm9tb3Rpb25TZWN0aW9uRGF0YTogJ2JsYW5rJyxcclxuICAgICAgICBwcm9kdWN0QmVuZWZpdHNTZWN0aW9uRGF0YTogJ2JsYW5rJyxcclxuICAgICAgICBtYXJrZXRPdmVydmlld1NlY3Rpb25EYXRhOiAnYmxhbmsnLFxyXG4gICAgICAgIGNvbXBldGl0b3JzU2VjdGlvbkRhdGE6ICdibGFuaycsXHJcbiAgICAgICAgdGFyZ2V0Q3VzdG9tZXJzU2VjdGlvbkRhdGE6ICdibGFuaycsXHJcbiAgICAgICAgY29tcGV0aXRpb25EaXN0aW5ndWlzaFNlY3Rpb25EYXRhOiAnYmxhbmsnLFxyXG4gICAgICAgIHN0YXJ0dXBDb3N0c1NlY3Rpb25EYXRhOiAnYmxhbmsnLFxyXG4gICAgICAgIHJ1bm5pbmdDb3N0c1NlY3Rpb25EYXRhOiAnYmxhbmsnLFxyXG4gICAgICAgIGZpbmFuY2luZ1NlY3Rpb25EYXRhOiAnYmxhbmsnLFxyXG4gICAgICAgIGJ1c2luZXNzTW9kZWxPdmVydmlld1NlY3Rpb25EYXRhOiAnYmxhbmsnLFxyXG4gICAgICAgIGJ1c2luZXNzR3Jvd1NlY3Rpb25EYXRhOiAnYmxhbmsnLFxyXG4gICAgICAgIHdoeVN1Y2Nlc3NTZWN0aW9uRGF0YTogJ2JsYW5rJyxcclxuICAgICAgfSk7XHJcbiAgICBhd2FpdCBkYkNsaWVudC5jb2xsZWN0aW9uKCdwcm9qZWN0cycpLmRvYyhzZWxlY3RlZFByb2plY3QucHJvamVjdElkKS51cGRhdGUoeyBpc0lkZWFQbGFuQ3JlYXRlZDogdHJ1ZSB9KTtcclxuICAgIHJvdXRlci5wdXNoKGAvZGFzaGJvYXJkL3Byb2plY3RzLyR7cm91dGVyLnF1ZXJ5LnByb2plY3R9L3N0YXJ0dXAtaWRlYS92aXNpb25gKTtcclxuICB9O1xyXG5cclxuICAvLyBCVVNJTkVTUyBQTEFOIENSRUFURVxyXG4gIGNvbnN0IG9uQnVzaW5lc3NQbGFuQ3JlYXRlID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgaWYgKHNlbGVjdGVkUHJvamVjdCAmJiBzZWxlY3RlZFByb2plY3QuaXNCdXNpbmVzc1BsYW5DcmVhdGVkKSB7XHJcbiAgICAgIHJvdXRlci5wdXNoKGAvZGFzaGJvYXJkL3Byb2plY3RzLyR7cm91dGVyLnF1ZXJ5LnByb2plY3R9L2J1c2luZXNzLXBsYW5gKTtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgYXdhaXQgZGJDbGllbnQuY29sbGVjdGlvbigncHJvamVjdHMnKS5kb2Moc2VsZWN0ZWRQcm9qZWN0LnByb2plY3RJZCkuY29sbGVjdGlvbignYnVzaW5lc3NQbGFuJykuZG9jKHJvdXRlci5xdWVyeS5wcm9qZWN0KS5zZXQoe1xyXG4gICAgICB1aWQ6IGN1cnJlbnRVc2VyLnVpZCxcclxuICAgICAgcHJvamVjdElkOiBzZWxlY3RlZFByb2plY3QucHJvamVjdElkLFxyXG4gICAgICBwYXRoTmFtZTogc2VsZWN0ZWRQcm9qZWN0LnByb2plY3ROYW1lLFxyXG4gICAgfSk7XHJcbiAgICBhd2FpdCBkYkNsaWVudC5jb2xsZWN0aW9uKCdwcm9qZWN0cycpLmRvYyhzZWxlY3RlZFByb2plY3QucHJvamVjdElkKS51cGRhdGUoeyBpc0J1c2luZXNzUGxhbkNyZWF0ZWQ6IHRydWUgfSk7XHJcbiAgICByb3V0ZXIucHVzaChgL2Rhc2hib2FyZC9wcm9qZWN0cy8ke3JvdXRlci5xdWVyeS5wcm9qZWN0fS9idXNpbmVzcy1wbGFuYCk7XHJcbiAgfTtcclxuXHJcbiAgY29uc29sZS5sb2coJ0NVUlJFTlQgUFJPSkVDVCAtLT4gJywgc2VsZWN0ZWRQcm9qZWN0KTtcclxuXHJcbiAgY29uc3Qgb25DYXNoRmxvd0FuYWx5c2lzQ3JlYXRlID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgaWYgKHNlbGVjdGVkUHJvamVjdCAmJiBzZWxlY3RlZFByb2plY3QuaXNDYXNoZmxvd0NyZWF0ZWQpIHtcclxuICAgICAgcm91dGVyLnB1c2goYC9kYXNoYm9hcmQvcHJvamVjdHMvJHtyb3V0ZXIucXVlcnkucHJvamVjdH0vY2FzaC1mbG93YCk7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIGF3YWl0IGRiQ2xpZW50XHJcbiAgICAgIC5jb2xsZWN0aW9uKCdwcm9qZWN0cycpXHJcbiAgICAgIC5kb2Moc2VsZWN0ZWRQcm9qZWN0LnByb2plY3RJZClcclxuICAgICAgLmNvbGxlY3Rpb24oJ2Nhc2hGbG93JylcclxuICAgICAgLmRvYyhyb3V0ZXIucXVlcnkucHJvamVjdClcclxuICAgICAgLmNvbGxlY3Rpb24oJ2lucHV0cycpXHJcbiAgICAgIC5kb2MoKVxyXG4gICAgICAuc2V0KHtcclxuICAgICAgICB1aWQ6IGN1cnJlbnRVc2VyLnVpZCxcclxuICAgICAgICBwcm9qZWN0SWQ6IHNlbGVjdGVkUHJvamVjdC5wcm9qZWN0SWQsXHJcbiAgICAgICAgcGF0aE5hbWU6IHNlbGVjdGVkUHJvamVjdC5wcm9qZWN0TmFtZSxcclxuICAgICAgICByZXZlbnVlRWxlbWVudHM6IFtdLFxyXG4gICAgICAgIGNvc3RzRWxlbWVudHM6IFtdLFxyXG4gICAgICAgIGJ1ZGdldEVsZW1lbnRzOiBbXSxcclxuICAgICAgICBnbG9iYWxTdGFydERhdGU6ICcnLFxyXG4gICAgICAgIGdsb2JhbEVuZERhdGU6ICcnLFxyXG4gICAgICAgIHBlcmlvZHM6IFtdLFxyXG4gICAgICAgIHRheDogJzAnLFxyXG4gICAgICB9KTtcclxuICAgIGF3YWl0IGRiQ2xpZW50LmNvbGxlY3Rpb24oJ3Byb2plY3RzJykuZG9jKHNlbGVjdGVkUHJvamVjdC5wcm9qZWN0SWQpLnVwZGF0ZSh7IGlzQ2FzaGZsb3dDcmVhdGVkOiB0cnVlIH0pO1xyXG4gICAgcm91dGVyLnB1c2goYC9kYXNoYm9hcmQvcHJvamVjdHMvJHtyb3V0ZXIucXVlcnkucHJvamVjdH0vY2FzaC1mbG93YCk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3Qgb25Db21wZXRpdG9yc0FuYWx5c2lzQ3JlYXRlID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgaWYgKHNlbGVjdGVkUHJvamVjdCAmJiBzZWxlY3RlZFByb2plY3QuaXNDb21wZXRpdG9yc0FuYWx5c2lzQ3JlYXRlZCkge1xyXG4gICAgICByb3V0ZXIucHVzaChgL2Rhc2hib2FyZC9wcm9qZWN0cy8ke3JvdXRlci5xdWVyeS5wcm9qZWN0fS9jb21wZXRpdG9yc2ApO1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBhd2FpdCBkYkNsaWVudFxyXG4gICAgICAuY29sbGVjdGlvbigncHJvamVjdHMnKVxyXG4gICAgICAuZG9jKHNlbGVjdGVkUHJvamVjdC5wcm9qZWN0SWQpXHJcbiAgICAgIC5jb2xsZWN0aW9uKCdjb21wZXRpdG9ycycpXHJcbiAgICAgIC5kb2Mocm91dGVyLnF1ZXJ5LnByb2plY3QpXHJcbiAgICAgIC5jb2xsZWN0aW9uKCdpbnB1dHMnKVxyXG4gICAgICAuZG9jKClcclxuICAgICAgLnNldCh7XHJcbiAgICAgICAgdWlkOiBjdXJyZW50VXNlci51aWQsXHJcbiAgICAgICAgcHJvamVjdElkOiBzZWxlY3RlZFByb2plY3QucHJvamVjdElkLFxyXG4gICAgICAgIHBhdGhOYW1lOiBzZWxlY3RlZFByb2plY3QucHJvamVjdE5hbWUsXHJcbiAgICAgICAgY29tcGV0aXRvcnNBcnJheTogW10sXHJcbiAgICAgIH0pO1xyXG4gICAgYXdhaXQgZGJDbGllbnQuY29sbGVjdGlvbigncHJvamVjdHMnKS5kb2Moc2VsZWN0ZWRQcm9qZWN0LnByb2plY3RJZCkudXBkYXRlKHsgaXNDb21wZXRpdG9yc0FuYWx5c2lzQ3JlYXRlZDogdHJ1ZSB9KTtcclxuICAgIHJvdXRlci5wdXNoKGAvZGFzaGJvYXJkL3Byb2plY3RzLyR7cm91dGVyLnF1ZXJ5LnByb2plY3R9L2NvbXBldGl0b3JzYCk7XHJcbiAgfTtcclxuXHJcbiAgaWYgKHJvdXRlci5pc0ZhbGxiYWNrKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2PlxyXG4gICAgICAgIDxwPkxvYWRpbmcuLi48L3A+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICAvLyA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbCBoLWZ1bGwganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyXCI+XHJcbiAgICAvLyAgIDxoMiBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlclwiPldlbGNvbWUgdG8gdGhlIHByb2plY3QgcGFnZSEgUHJvamVjdCBuYW1lOjwvaDI+XHJcbiAgICAvLyAgIHtzZWxlY3RlZFByb2plY3QgIT09IG51bGwgJiYgKFxyXG4gICAgLy8gICAgIDw+XHJcbiAgICAvLyAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlclwiPntzZWxlY3RlZFByb2plY3QucHJvamVjdE5hbWV9PC9wPlxyXG4gICAgLy8gICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXJcIj57c2VsZWN0ZWRQcm9qZWN0LnVpZH08L3A+XHJcbiAgICAvLyAgICAgPC8+XHJcbiAgICAvLyAgICl9XHJcbiAgICAvLyA8L2Rpdj5cclxuICAgIDw+XHJcbiAgICAgIDxUaXBweU1vbnN0ZXJcclxuICAgICAgICBwcm9qZWN0TWFuYWdlclxyXG4gICAgICAgIGNvbnRlbnRDbGFzcz1cImgtNDAgdy04MCBzaGFkb3ctbGcgcm91bmRlZC0yeGwgYmctcHJpbWFyeSBmbGV4IGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlclwiXHJcbiAgICAgICAgY29udGVudFRleHQ9XCJXZSBhcmUgaW4gYSBzcGFjZSB3aGVyZSB5b3UgY2FuIG1hbmFnZSB5b3VyIHN0YXJ0dXAgaW4gdmFyaW91cyBwb3NzaWJsZSB3YXlzIFwiXHJcbiAgICAgICAgY29udGVudFRleHQxPScgRm9yIGEgZ29vZCBzdGFydCwgYmVnaW4gd2l0aCBcIlN0YXJ0dXAgaWRlYVwiIHRoYXQgd2lsbCBndWlkZSB5b3UgdGhyb3VnaCB0aGUgZW50aXJlIHByb2Nlc3Mgb2YgY3JlYXRpbmcgYSBwbGFuIGZvciB5b3VyIHN0YXJ0dXAhICdcclxuICAgICAgLz5cclxuICAgICAgPE5hdmJhclRlbXBsYXRlPlxyXG4gICAgICAgIHtzZWxlY3RlZFByb2plY3QgPyAoXHJcbiAgICAgICAgICA8ZGl2IHJlZj17Y29udGFpbmVyUmVmfSBjbGFzc05hbWU9XCJtaW4taC1zY3JlZW4gdy1mdWxsIHJlbGF0aXZlIGZsZXggZmxleC1jb2wgaXRlbXMtY2VudGVyXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsIHNtOm1heC13LXNtQ29udGFpbmVyIG1kOm1heC13LW1kQ29udGFpbmVyIGxnOm1heC13LWxnQ29udGFpbmVyIHhsOm1heC13LXhsQ29udGFpbmVyIDJ4bDptYXgtdy14eGxDb250YWluZXIgbm9ybWFsOm1heC13LW5vcm1hbENvbnRhaW5lciByZWxhdGl2ZSBtdC0xNlwiPlxyXG4gICAgICAgICAgICAgIHsvKiA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbCBtYXgtdy1mdWxsIHJlbGF0aXZlIG10LTE2IG1iLTE2IHB4LTMyXCI+ICovfVxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZCBncmlkLWNvbHMtMiBncmlkLXJvd3MtMSBncmlkLWZsb3ctY29sXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxzdmdcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9XCIzMlwiXHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg9XCIzMlwiXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZmlsbC1jdXJyZW50IHRleHQtcHJpbWFyeSBkYXJrOnRleHQtcHJpbWFyeWRhcmtcIlxyXG4gICAgICAgICAgICAgICAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxyXG4gICAgICAgICAgICAgICAgICAgIHZpZXdCb3g9XCIwIDAgMTI4IDEyOFwiXHJcbiAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICA8dGl0bGU+TGFuZGluZyBTdWNjZXNzPC90aXRsZT5cclxuICAgICAgICAgICAgICAgICAgICA8ZyBpZD1cIkxhbmRpbmdfU3VjY2Vzc1wiIGRhdGEtbmFtZT1cIkxhbmRpbmcgU3VjY2Vzc1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPHBhdGhcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiY2xzLTFcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkPVwiTTEwOS4zLDkwLjFBNDYsNDYsMCwwLDAsNjUsMzZWMjAuMDhjMS43OC0uNjIsNy4yMS0yLjE0LDEyLjU3LjIzYTE5LjMzLDE5LjMzLDAsMCwwLDE0LjgyLDBjLjg3LS4zOC42MS4zMS42MS0xNy45M2ExLDEsMCwwLDAtMS40My0uOTNjLS4wNywwLTYuNjksMi44Ny0xMy4xOCwwQTE5LjQxLDE5LjQxLDAsMCwwLDY1LC45MywxLDEsMCwwLDAsNjMsMVYzNmE0NS44Niw0NS44NiwwLDAsMC0yOC42NiwxMC44QzE2LjE4LDQwLjQ4LDQsNDAsLjc5LDQ1LjUxLTIuMjksNTAuODYsMy45NCw1OS4zLDEwLDY1LjY4QTExLDExLDAsMCwwLDE4LDgzYy44MSwzOC40MSw0Ni4wOCw1OS4yLDc1LjY2LDM0LjIxLDguNTMsMywyOSw5LjE1LDMzLjU1LDEuMzFDMTMwLjM5LDExMywxMjMuODYsMTAyLjY1LDEwOS4zLDkwLjFaTTc3LjU5LDMuMzFBMTkuMzksMTkuMzksMCwwLDAsOTEsMy44M1YxOC42OGMtMS43OS42Mi03LjIyLDIuMTMtMTIuNTctLjIzQTE5LjE5LDE5LjE5LDAsMCwwLDY1LDE3LjkzVjMuMDhDNjYuODEsMi40Niw3Mi4yNCwxLDc3LjU5LDMuMzFaTTY1LDQ1di03YzM5LjY5LjkxLDU4LDUwLjI3LDI4LjIxLDc2LjgxQzcxLjMyLDEwNyw0Niw5Mi42NiwyNy43Nyw3OC42NGExMSwxMSwwLDAsMC0zLjItMTYuMTNBNDMuODgsNDMuODgsMCwwLDEsNjMsMzguMDZWNDVBMSwxLDAsMCwwLDY1LDQ1Wk0zMi41NSw0OC4zNmE0Ni4yMSw0Ni4yMSwwLDAsMC05LjgzLDEzLjI4LDEwLjkzLDEwLjkzLDAsMCwwLTExLjQsMi40N0MtOC4zOSw0My4yMyw1LjIzLDM5LjA4LDMyLjU1LDQ4LjM2Wk0xMCw3MmE5LDksMCwxLDEsOSw5QTksOSwwLDAsMSwxMCw3MlptMTAsMTFhMTEsMTEsMCwwLDAsNi4zNC0yLjgyYzE4LjQ1LDE0LjIxLDQzLjQ1LDI4LjM1LDY1LjA1LDM2LjIyQzYzLDEzOS4xNiwyMC44MywxMTkuMSwyMC4wNSw4M1ptMTA1LjQsMzQuNWMtMi41MSw0LjM1LTE0LDMuNjItMzAtMS44NWE0NS42MSw0NS42MSwwLDAsMCwxMy40Mi0yMy4yMUMxMjEuNTksMTAzLjU4LDEyOCwxMTMuMTIsMTI1LjQ1LDExNy40N1pcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2c+XHJcbiAgICAgICAgICAgICAgICAgIDwvc3ZnPlxyXG4gICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXByaW1hcnlkYXJrIHRleHQtMnhsIHNjcmVlbkxhcmdlOnRleHQtM3hsIG10LTMgcGwtMiBkYXJrOnRleHQtYmFja2dyb3VuZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIHtzZWxlY3RlZFByb2plY3QgJiYgc2VsZWN0ZWRQcm9qZWN0LnByb2plY3ROYW1lfVxyXG4gICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWVuZFwiPlxyXG4gICAgICAgICAgICAgICAgICB7LyogPFByb2plY3ROYXYgLz4gKi99XHJcbiAgICAgICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiByb3V0ZXIucHVzaChgL2Rhc2hib2FyZC9wcm9qZWN0cy8ke3JvdXRlci5xdWVyeS5wcm9qZWN0fS9lZGl0YCl9XHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaG92ZXI6YmctcHJpbWFyeSBob3Zlcjp0ZXh0LXdoaXRlIGRhcms6aG92ZXI6YmctcHJpbWFyeWRhcmsgZGFyazpob3Zlcjp0ZXh0LWJhY2tncm91bmQgZm9jdXM6b3V0bGluZS1ub25lIGJvcmRlciBib3JkZXItcHJpbWFyeSB0ZXh0LXByaW1hcnkgdGV4dC1iYXNlIGZvbnQtbGlnaHQgcmVsYXRpdmUgdG9wLTIgcHktMiBweC04IHJvdW5kZWQtMnhsIG10LTIgZGFyazp0ZXh0LXByaW1hcnlkYXJrIGRhcms6Ym9yZGVyLXByaW1hcnlkYXJrXCJcclxuICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIFNldHRpbmdzXHJcbiAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJ0ZXh0LXNlY29uZGFyeSB0ZXh0LW1kIHNjcmVlbkxhcmdlOnRleHQtYmFzZSB0ZXh0LWdyYXkgLW10LTFcIj5UaGlzIGlzIHRoZSBiZXN0IHN0YXJ0dXAgaW4gdGhlIHRlY2ggZmllbGQ8L2gxPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIHsvKiBTRUNUSU9OICovfVxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZCBncmlkLWNvbHMtMWZyciBzY3JlZW5TbWFsbDpncmlkLWNvbHMtMmZyIGdyaWQtcm93cy01ZnIgc2NyZWVuU21hbGw6Z3JpZC1yb3dzLTNmciBtdC0xMiBnYXAtMTYgbWItMzJcIj5cclxuICAgICAgICAgICAgICAgIHsvKiBTSE9XVVAxICovfVxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3VuZGVkLTJ4bCB0cmFuc2Zvcm0gaG92ZXI6c2NhbGUtMTA1IGhvdmVyOi10cmFuc2xhdGUteS0yIGhvdmVyOi10cmFuc2xhdGUteC0yIHRyYW5zaXRpb24gZHVyYXRpb24tNTAwIGVhc2UtaW4tb3V0XCI+XHJcbiAgICAgICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJ0ZXh0LXByaW1hcnlkYXJrIHRleHQtbGcgZGFyazp0ZXh0LWJhY2tncm91bmRcIj5TdGFydHVwIGlkZWE8L2gxPlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgbWF4SGVpZ2h0OiAzMzAgfX1cclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJwLTYgc2hhZG93LWxnIG10LTEgdy1mdWxsIGZsZXggZmxleC1jb2wganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyIGJvcmRlci1yLTYgcm91bmRlZC0yeGwgYmctd2hpdGUgZGFyazpiZy1iYWNrZ3JvdW5kXCJcclxuICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbWcgc3R5bGU9e3sgbWF4SGVpZ2h0OiAxNDAgfX0gaGVpZ2h0PXszMDB9IHdpZHRoPXszMDB9IHNyYz1cIi9sYXVuY2gtbWFrZXIuc3ZnXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LWJhc2UgdGV4dC1ncmF5IHRleHQtY2VudGVyIHB4LTQgcHktNCBpbmxpbmUtYmxvY2tcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIFN0YXJ0dXAgaWRlYSB3aWxsIGd1aWRlIHlvdSB0aHJvdWdoIHRoZSBwcm9jZXNzIG9mIGNyZWF0aW5nIHlvdXIgYnVzaW5lc3MgcGxhblxyXG4gICAgICAgICAgICAgICAgICAgICAgey8qIDxpbWcgc3JjPVwiL3Byb2plY3QtbWFuYWdlci9idWxiLnN2Z1wiIGhlaWdodD17MTh9IHdpZHRoPXsxOH0gY2xhc3NOYW1lPVwibWwtMSBpbmxpbmUtYmxvY2sgcmVsYXRpdmUgYm90dG9tLTAuNVwiIC8+ICovfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtvblN0YXJ0dXBJZGVhQ3JlYXRlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaG92ZXI6YmctcHJpbWFyeSBob3Zlcjp0ZXh0LXdoaXRlIGRhcms6aG92ZXI6YmctcHJpbWFyeWRhcmsgZGFyazpob3Zlcjp0ZXh0LWJhY2tncm91bmQgZm9jdXM6b3V0bGluZS1ub25lIGJvcmRlciBib3JkZXItcHJpbWFyeSB0ZXh0LXByaW1hcnkgZGFyazp0ZXh0LXByaW1hcnlkYXJrIGRhcms6Ym9yZGVyLXByaW1hcnlkYXJrIHRleHQtc20gZm9udC1saWdodCBweS0yIHB4LTYgcm91bmRlZC0yeGxcIlxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgIHtzZWxlY3RlZFByb2plY3QuaXNJZGVhUGxhbkNyZWF0ZWQgPyAnTWFuYWdlIHlvdXIgc3RhcnR1cCBpZGVhIHBsYW4nIDogJ0NyZWF0ZSB5b3VyIHN0YXJ0dXAgaWRlYSBwbGFuJ31cclxuICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIHsvKiBTSE9XVVAyICovfVxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3VuZGVkLTJ4bCB0cmFuc2Zvcm0gaG92ZXI6c2NhbGUtMTA1IGhvdmVyOi10cmFuc2xhdGUteS0yIGhvdmVyOi10cmFuc2xhdGUteC0yIHRyYW5zaXRpb24gZHVyYXRpb24tNTAwIGVhc2UtaW4tb3V0XCI+XHJcbiAgICAgICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJ0ZXh0LXByaW1hcnlkYXJrIHRleHQtbGcgZGFyazp0ZXh0LWJhY2tncm91bmRcIj5CdXNpbmVzcyBwbGFuPC9oMT5cclxuICAgICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IG1heEhlaWdodDogMzMwIH19XHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicC02IHNoYWRvdy1sZyBtdC0xIHctZnVsbCBmbGV4IGZsZXgtY29sIGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlciBib3JkZXItci02IHJvdW5kZWQtMnhsIGJnLXdoaXRlIGRhcms6YmctYmFja2dyb3VuZFwiXHJcbiAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICA8aW1nIHN0eWxlPXt7IG1heEhlaWdodDogMTQwIH19IGhlaWdodD17MzAwfSB3aWR0aD17MzAwfSBzcmM9XCIvbWFpbi1zZWN0aW9ucy9idXNpbmVzcy1wbGFuLnN2Z1wiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1iYXNlIHRleHQtZ3JheSB0ZXh0LWNlbnRlciBweC00IHB5LTRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIExldCdzIGNyZWF0ZSB5b3VyIGJ1c2luZXNzIHBsYW4sIHdoaWNoIHdpbGwgYmUgdGhlIGNvcmUgb2YgeW91ciBzdGFydHVwIHByZXNlbnRhdGlvblxyXG4gICAgICAgICAgICAgICAgICAgICAgey8qIDxpbWdcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3JjPVwiL3Byb2plY3QtbWFuYWdlci9idXNpbmVzcy1wbGFuLnN2Z1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodD17MTh9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoPXsxOH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibWwtMSBpbmxpbmUtYmxvY2sgcmVsYXRpdmUgYm90dG9tLTAuNVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAvPiAqL31cclxuICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17b25CdXNpbmVzc1BsYW5DcmVhdGV9XHJcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJob3ZlcjpiZy1wcmltYXJ5IGhvdmVyOnRleHQtd2hpdGUgZGFyazpob3ZlcjpiZy1wcmltYXJ5ZGFyayBkYXJrOmhvdmVyOnRleHQtYmFja2dyb3VuZCBmb2N1czpvdXRsaW5lLW5vbmUgYm9yZGVyIGJvcmRlci1wcmltYXJ5IHRleHQtcHJpbWFyeSBkYXJrOnRleHQtcHJpbWFyeWRhcmsgZGFyazpib3JkZXItcHJpbWFyeWRhcmsgdGV4dC1zbSBmb250LWxpZ2h0IHB5LTIgcHgtNiByb3VuZGVkLTJ4bFwiXHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAge3NlbGVjdGVkUHJvamVjdC5pc0J1c2luZXNzUGxhbkNyZWF0ZWQgPyAnTWFuYWdlIHlvdXIgYnVzaW5lc3MgcGxhbicgOiAnQ3JlYXRlIHlvdXIgYnVzaW5lc3MgcGxhbid9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICB7LyogU0hPV1VQMyAqL31cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm91bmRlZC0yeGwgdHJhbnNmb3JtIGhvdmVyOnNjYWxlLTEwNSBob3ZlcjotdHJhbnNsYXRlLXktMiBob3ZlcjotdHJhbnNsYXRlLXgtMiB0cmFuc2l0aW9uIGR1cmF0aW9uLTUwMCBlYXNlLWluLW91dFwiPlxyXG4gICAgICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwidGV4dC1wcmltYXJ5ZGFyayB0ZXh0LWxnIGRhcms6dGV4dC1iYWNrZ3JvdW5kXCI+Q2FzaCBmbG93IGFuYWx5c2lzPC9oMT5cclxuICAgICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IG1heEhlaWdodDogMzMwIH19XHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicC02IHNoYWRvdy1sZyBtdC0xIHctZnVsbCBmbGV4IGZsZXgtY29sIGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlciBib3JkZXItci02IHJvdW5kZWQtMnhsIGJnLXdoaXRlIGRhcms6YmctYmFja2dyb3VuZFwiXHJcbiAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICA8aW1nIHN0eWxlPXt7IG1heEhlaWdodDogMTQwIH19IGhlaWdodD17MzAwfSB3aWR0aD17MzAwfSBzcmM9XCIvbWFpbi1zZWN0aW9ucy9jYXNoLWZsb3cyLnN2Z1wiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cIiB0ZXh0LWJhc2UgdGV4dC1ncmF5IHRleHQtY2VudGVyIHB4LTQgcHktNFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgQ2FzaCBmbG93IGFuYWx5c2lzIHdpbGwgYWxsb3cgeW91IHRvIGFuYWx5emUgdGhlIGxpcXVpZGl0eSBvZiB5b3VyIHN0YXJ0dXBcclxuICAgICAgICAgICAgICAgICAgICA8L2gxPlxyXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e29uQ2FzaEZsb3dBbmFseXNpc0NyZWF0ZX1cclxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImhvdmVyOmJnLXByaW1hcnkgaG92ZXI6dGV4dC13aGl0ZSBkYXJrOmhvdmVyOmJnLXByaW1hcnlkYXJrIGRhcms6aG92ZXI6dGV4dC1iYWNrZ3JvdW5kIGZvY3VzOm91dGxpbmUtbm9uZSBib3JkZXIgYm9yZGVyLXByaW1hcnkgdGV4dC1wcmltYXJ5IGRhcms6dGV4dC1wcmltYXJ5ZGFyayBkYXJrOmJvcmRlci1wcmltYXJ5ZGFyayB0ZXh0LXNtIGZvbnQtbGlnaHQgcHktMiBweC02IHJvdW5kZWQtMnhsXCJcclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICB7c2VsZWN0ZWRQcm9qZWN0LmlzQ2FzaGZsb3dDcmVhdGVkID8gJ01hbmFnZSB5b3VyIHN0YXJ0dXAgY2FzaCBmbG93JyA6ICdDcmVhdGUgeW91ciBzdGFydHVwIGNhc2ggZmxvdyd9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICB7LyogU0hPV1VQNCAqL31cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm91bmRlZC0yeGwgdHJhbnNmb3JtIGhvdmVyOnNjYWxlLTEwNSBob3ZlcjotdHJhbnNsYXRlLXktMiBob3ZlcjotdHJhbnNsYXRlLXgtMiB0cmFuc2l0aW9uIGR1cmF0aW9uLTUwMCBlYXNlLWluLW91dFwiPlxyXG4gICAgICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwidGV4dC1wcmltYXJ5ZGFyayB0ZXh0LWxnIGRhcms6dGV4dC1iYWNrZ3JvdW5kXCI+Q29tcGV0aXRvcnMgYW5hbHlzaXM8L2gxPlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgbWF4SGVpZ2h0OiAzMzAgfX1cclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJwLTYgc2hhZG93LWxnIG10LTEgdy1mdWxsIGZsZXggZmxleC1jb2wganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyIGJvcmRlci1yLTYgcm91bmRlZC0yeGwgYmctd2hpdGUgZGFyazpiZy1iYWNrZ3JvdW5kXCJcclxuICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbWcgc3R5bGU9e3sgbWF4SGVpZ2h0OiAxNDAgfX0gaGVpZ2h0PXszMDB9IHdpZHRoPXszMDB9IHNyYz1cIi9tYWluLXNlY3Rpb25zL2NvbXBldGl0b3JzLnN2Z1wiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1iYXNlIHRleHQtZ3JheSB0ZXh0LWNlbnRlciBweC00IHB5LTRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIENvbXBldGl0b3IgYW5hbHlzaXMgd2lsbCBoZWxwIHlvdSBiZXR0ZXIgcHJlcGFyZSB0byBlbnRlciBhIGdpdmVuIG1hcmtldFxyXG4gICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtvbkNvbXBldGl0b3JzQW5hbHlzaXNDcmVhdGV9XHJcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJob3ZlcjpiZy1wcmltYXJ5IGhvdmVyOnRleHQtd2hpdGUgZGFyazpob3ZlcjpiZy1wcmltYXJ5ZGFyayBkYXJrOmhvdmVyOnRleHQtYmFja2dyb3VuZCBmb2N1czpvdXRsaW5lLW5vbmUgYm9yZGVyIGJvcmRlci1wcmltYXJ5IHRleHQtcHJpbWFyeSBkYXJrOnRleHQtcHJpbWFyeWRhcmsgZGFyazpib3JkZXItcHJpbWFyeWRhcmsgdGV4dC1zbSBmb250LWxpZ2h0IHB5LTIgcHgtNiByb3VuZGVkLTJ4bFwiXHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAge3NlbGVjdGVkUHJvamVjdC5pc0NvbXBldGl0b3JzQW5hbHlzaXNDcmVhdGVkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgID8gJ01hbmFnZSB5b3VyIGNvbXBldGl0b3JzIGFuYWx5c2lzJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICA6ICdDcmVhdGUgeW91ciBjb21wZXRpdG9ycyBhbmFseXNpcyd9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICB7LyogU0hPV1VQNSAqL31cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm91bmRlZC0yeGwgdHJhbnNmb3JtIGhvdmVyOnNjYWxlLTEwNSBob3ZlcjotdHJhbnNsYXRlLXktMiBob3ZlcjotdHJhbnNsYXRlLXgtMiB0cmFuc2l0aW9uIGR1cmF0aW9uLTUwMCBlYXNlLWluLW91dFwiPlxyXG4gICAgICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwidGV4dC1wcmltYXJ5ZGFyayB0ZXh0LWxnIGRhcms6dGV4dC1iYWNrZ3JvdW5kXCI+U3RhcnR1cCBtZW1iZXJzPC9oMT5cclxuICAgICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IG1heEhlaWdodDogMzMwIH19XHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicC02IHNoYWRvdy1sZyBtdC0xIHctZnVsbCBmbGV4IGZsZXgtY29sIGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlciBib3JkZXItci02IHJvdW5kZWQtMnhsIGJnLXdoaXRlIGRhcms6YmctYmFja2dyb3VuZFwiXHJcbiAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICA8aW1nIHN0eWxlPXt7IG1heEhlaWdodDogMTQwIH19IGhlaWdodD17MzAwfSB3aWR0aD17MzAwfSBzcmM9XCIvbWFpbi1zZWN0aW9ucy9tZW1iZXJzMS5zdmdcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJ0ZXh0LWJhc2UgdGV4dC1ncmF5IHRleHQtY2VudGVyIHB4LTQgcHktNFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgSWRlbnRpZnkgdGhlIHJvbGVzIG9mIHlvdXIgdGVhbSBhbmQgdGhlIHBlb3BsZSB3aG8gd2lsbCBoYXZlIGFjY2VzcyB0byB0aGlzIHByb2plY3RcclxuICAgICAgICAgICAgICAgICAgICA8L2gxPlxyXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e29uQ29tcGV0aXRvcnNBbmFseXNpc0NyZWF0ZX1cclxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImhvdmVyOmJnLXByaW1hcnkgaG92ZXI6dGV4dC13aGl0ZSBkYXJrOmhvdmVyOmJnLXByaW1hcnlkYXJrIGRhcms6aG92ZXI6dGV4dC1iYWNrZ3JvdW5kIGZvY3VzOm91dGxpbmUtbm9uZSBib3JkZXIgYm9yZGVyLXByaW1hcnkgdGV4dC1wcmltYXJ5IGRhcms6dGV4dC1wcmltYXJ5ZGFyayBkYXJrOmJvcmRlci1wcmltYXJ5ZGFyayB0ZXh0LXNtIGZvbnQtbGlnaHQgcHktMiBweC02IHJvdW5kZWQtMnhsXCJcclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICBNYW5hZ2UgeW91ciBzdGFydHVwIG1lbWJlcnNcclxuICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApIDogKFxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoLXNjcmVlbiB3LWZ1bGwgZmxleCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXJcIj5cclxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1wcmltYXJ5ZGFyayB0ZXh0LWxnXCI+Li4uTG9hZGluZzwvcD5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICl9XHJcbiAgICAgIDwvTmF2YmFyVGVtcGxhdGU+XHJcbiAgICA8Lz5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGdldFN0YXRpY1BhdGhzID0gYXN5bmMgKCkgPT4ge1xyXG4gIC8vIGNvbnN0IHsgcHJvamVjdHMgfSA9IGF3YWl0IGdldEFsbFByb2plY3RzKCk7XHJcbiAgY29uc3Qgc25hcHNob3QgPSBhd2FpdCBkYi5jb2xsZWN0aW9uKCdwcm9qZWN0cycpLmdldCgpO1xyXG5cclxuICBjb25zdCBwcm9qZWN0cyA9IFtdO1xyXG4gIHNuYXBzaG90LmZvckVhY2goKGRvYykgPT4ge1xyXG4gICAgcHJvamVjdHMucHVzaChkb2MuZGF0YSgpKTtcclxuICB9KTtcclxuXHJcbiAgY29uc3QgcGF0aHMgPSBwcm9qZWN0cy5tYXAoKHByb2plY3QpID0+ICh7XHJcbiAgICBwYXJhbXM6IHtcclxuICAgICAgcHJvamVjdDogcHJvamVjdC5wcm9qZWN0TmFtZS50b1N0cmluZygpLFxyXG4gICAgfSxcclxuICB9KSk7XHJcblxyXG4gIHJldHVybiB7XHJcbiAgICBwYXRoczogcGF0aHMsXHJcbiAgICBmYWxsYmFjazogdHJ1ZSxcclxuICB9O1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGdldFN0YXRpY1Byb3BzID0gYXN5bmMgKHsgcGFyYW1zIH0pID0+IHtcclxuICAvLyBjb25zdCB7IHByb2plY3RzIH0gPSBhd2FpdCBnZXRQYXJ0aWN1bGFyUHJvamVjdChwYXJhbXMud29yayk7XHJcbiAgLy8gY29uc3QgdWlkID0gQ29va2llcy5nZXQoJ3VpZCcpO1xyXG4gIGxldCByZWYgPSBkYi5jb2xsZWN0aW9uKCdwcm9qZWN0cycpLndoZXJlKCdwcm9qZWN0TmFtZScsICc9PScsIHBhcmFtcy5wcm9qZWN0KTtcclxuXHJcbiAgY29uc3Qgc25hcHNob3QgPSBhd2FpdCByZWYuZ2V0KCk7XHJcbiAgY29uc3QgcHJvamVjdHMgPSBbXTtcclxuXHJcbiAgc25hcHNob3QuZm9yRWFjaCgoZG9jKSA9PiB7XHJcbiAgICBwcm9qZWN0cy5wdXNoKHsgaWQ6IGRvYy5pZCwgLi4uZG9jLmRhdGEoKSB9KTtcclxuICB9KTtcclxuXHJcbiAgcmV0dXJuIHtcclxuICAgIHByb3BzOiB7IHByb2plY3RzIH0sXHJcbiAgICByZXZhbGlkYXRlOiAxLFxyXG4gIH07XHJcbn07XHJcblxyXG4vLyBleHBvcnQgY29uc3QgZ2V0U2VydmVyU2lkZVByb3BzID0gYXN5bmMgKHsgcGFyYW1zIH0pID0+IHtcclxuLy8gICBsZXQgcmVmID0gZGIuY29sbGVjdGlvbigncHJvamVjdHMnKS53aGVyZSgncHJvamVjdE5hbWUnLCAnPT0nLCBwYXJhbXMucHJvamVjdCk7XHJcblxyXG4vLyAgIGNvbnN0IHNuYXBzaG90ID0gYXdhaXQgcmVmLmdldCgpO1xyXG4vLyAgIGNvbnN0IHByb2plY3RzID0gW107XHJcblxyXG4vLyAgIHNuYXBzaG90LmZvckVhY2goKGRvYykgPT4ge1xyXG4vLyAgICAgcHJvamVjdHMucHVzaCh7IGlkOiBkb2MuaWQsIC4uLmRvYy5kYXRhKCkgfSk7XHJcbi8vICAgfSk7XHJcblxyXG4vLyAgIHJldHVybiB7XHJcbi8vICAgICBwcm9wczogeyBwcm9qZWN0cyB9LFxyXG4vLyAgIH07XHJcbi8vIH07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQcm9qZWN0UGFnZTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==