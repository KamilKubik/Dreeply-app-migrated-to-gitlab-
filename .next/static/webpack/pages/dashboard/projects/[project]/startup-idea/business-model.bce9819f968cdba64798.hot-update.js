webpackHotUpdate_N_E("pages/dashboard/projects/[project]/startup-idea/business-model",{

/***/ "./components/dashboard/startup/StartupBusinessModelModal.js":
/*!*******************************************************************!*\
  !*** ./components/dashboard/startup/StartupBusinessModelModal.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var C_off_saas_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/regenerator */ "./node_modules/next/node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var C_off_saas_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(C_off_saas_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var C_off_saas_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _lib_firebase__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../lib/firebase */ "./lib/firebase.js");
/* harmony import */ var _lib_newAuth__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../lib/newAuth */ "./lib/newAuth.js");
/* harmony import */ var _ProgressBar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./ProgressBar */ "./components/dashboard/startup/ProgressBar.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! gsap */ "./node_modules/gsap/index.js");
/* harmony import */ var _Tippy__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../Tippy */ "./components/dashboard/Tippy.js");
/* harmony import */ var _NavbarTemplate__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../NavbarTemplate */ "./components/dashboard/NavbarTemplate.js");
/* harmony import */ var _TippyGuide__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./TippyGuide */ "./components/dashboard/startup/TippyGuide.js");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! js-cookie */ "./node_modules/js-cookie/src/js.cookie.js");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _ExitComponent__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./ExitComponent */ "./components/dashboard/startup/ExitComponent.js");





var _jsxFileName = "C:\\off-saas\\components\\dashboard\\startup\\StartupBusinessModelModal.js",
    _this = undefined,
    _s = $RefreshSig$();














var StartupProductModal = function StartupProductModal() {
  _s();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(),
      projectId = _useState[0],
      setProjectId = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(true),
      onLoadOpacity4 = _useState2[0],
      setOnLoadOpacity4 = _useState2[1]; // OVERVIEW


  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(''),
      marketProblemSection = _useState3[0],
      setMarketProblemSection = _useState3[1];

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(''),
      marketSolutionSection = _useState4[0],
      setMarketSolutionSection = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(''),
      foundersSection = _useState5[0],
      setFoundersSection = _useState5[1]; // PRODUCT


  var _useState6 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(''),
      productOverviewSection = _useState6[0],
      setProductOverviewSection = _useState6[1];

  var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(''),
      productPromotionSection = _useState7[0],
      setProductPromotionSection = _useState7[1];

  var _useState8 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(''),
      productBenefitsSection = _useState8[0],
      setProductBenefitsSection = _useState8[1]; // MARKET


  var _useState9 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(''),
      marketOverviewSection = _useState9[0],
      setMarketOverviewSection = _useState9[1];

  var _useState10 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(''),
      competitorsSection = _useState10[0],
      setCompetitorsSection = _useState10[1];

  var _useState11 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(''),
      targetCustomersSection = _useState11[0],
      setTargetCustomersSection = _useState11[1];

  var _useState12 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(''),
      competitionDistinguishSection = _useState12[0],
      setCompetitionDistinguishSection = _useState12[1]; // FINANCES


  var _useState13 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(''),
      startupCostsSection = _useState13[0],
      setStartupCostsSection = _useState13[1];

  var _useState14 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(''),
      runningCostsSection = _useState14[0],
      setRunningCostsSection = _useState14[1];

  var _useState15 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(''),
      financingSection = _useState15[0],
      setFinancingSection = _useState15[1]; // BUSINESS MODEL


  var _useState16 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(''),
      businessModelOverviewSection = _useState16[0],
      setBusinessModelOverviewSection = _useState16[1];

  var _useState17 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(''),
      businessGrowSection = _useState17[0],
      setBusinessGrowSection = _useState17[1];

  var _useState18 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(''),
      whySuccessSection = _useState18[0],
      setWhySuccessSection = _useState18[1];

  var _useAuth = Object(_lib_newAuth__WEBPACK_IMPORTED_MODULE_6__["useAuth"])(),
      currentUser = _useAuth.currentUser;

  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_8__["useRouter"])();
  var contentRef = Object(react__WEBPACK_IMPORTED_MODULE_3__["useRef"])(); // TIPPY

  var _useState19 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(false),
      tippyMonster = _useState19[0],
      setTippyMonster = _useState19[1];

  var _useState20 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(null),
      currentTippy = _useState20[0],
      setCurrentTippy = _useState20[1];

  console.log('business model - ', businessModelOverviewSection);
  console.log('business grow - ', businessGrowSection);
  console.log('business success - ', whySuccessSection);

  var onSubmit = /*#__PURE__*/function () {
    var _ref = Object(C_off_saas_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/C_off_saas_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee(e) {
      return C_off_saas_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              e.preventDefault();

              if (!( // OVERVIEW
              !marketProblemSection || !marketSolutionSection || !foundersSection || // PRODUCT
              !productOverviewSection || !productPromotionSection || !productBenefitsSection || // MARKET
              !marketOverviewSection || !competitorsSection || !targetCustomersSection || !competitionDistinguishSection || // FINANCES
              !startupCostsSection || !runningCostsSection || !financingSection || // BUSINESS MODEL
              !businessModelOverviewSection || !businessGrowSection || !whySuccessSection || // -----------------------
              // OVERVIEW
              marketProblemSection == 'blank' || marketSolutionSection == 'blank' || foundersSection == 'blank' || // PRODUCT
              productOverviewSection == 'blank' || productPromotionSection == 'blank' || productBenefitsSection == 'blank' || // MARKET
              marketOverviewSection == 'blank' || competitorsSection == 'blank' || targetCustomersSection == 'blank' || competitionDistinguishSection == 'blank' || // FINANCES
              startupCostsSection == 'blank' || runningCostsSection == 'blank' || financingSection == 'blank' || // BUSINESS MODEL
              businessModelOverviewSection == 'blank' || businessGrowSection == 'blank' || whySuccessSection == 'blank')) {
                _context.next = 9;
                break;
              }

              if (!currentTippy) {
                _context.next = 7;
                break;
              }

              setTimeout(function () {
                !tippyMonster && setTippyMonster(true);
              }, 1000);
              return _context.abrupt("return");

            case 7:
              !tippyMonster && setTippyMonster(true);
              return _context.abrupt("return");

            case 9:
              gsap__WEBPACK_IMPORTED_MODULE_9__["default"].to(contentRef.current, {
                autoAlpha: 0,
                duration: 1,
                ease: gsap__WEBPACK_IMPORTED_MODULE_9__["Linear"].easeOut
              });
              setTimeout(function () {
                router.push("/dashboard/projects/".concat(router.query.project, "/startup-idea/success"));
              }, 1200);
              _context.next = 13;
              return _lib_firebase__WEBPACK_IMPORTED_MODULE_5__["db"].collection('projects').doc(projectId).collection('startupIdea').doc(router.query.project).collection('inputs').doc(documentId).set({
                businessModelOverviewSectionData: businessModelOverviewSectionData,
                businessGrowSectionData: businessGrowSectionData,
                whySuccessSectionData: whySuccessSectionData,
                filledSection4: true
              }, {
                merge: true
              });

            case 13:
              return _context.abrupt("return");

            case 14:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function onSubmit(_x) {
      return _ref.apply(this, arguments);
    };
  }(); // Data fetch


  var _useState21 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(false),
      loadingHelper = _useState21[0],
      setLoadingHelper = _useState21[1];

  var _useState22 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(''),
      documentId = _useState22[0],
      setDocumentId = _useState22[1];

  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function () {
    var userUid = js_cookie__WEBPACK_IMPORTED_MODULE_13___default.a.get('uid');
    gsap__WEBPACK_IMPORTED_MODULE_9__["default"].fromTo(contentRef.current, {
      autoAlpha: 0
    }, {
      autoAlpha: 1,
      duration: 1,
      ease: gsap__WEBPACK_IMPORTED_MODULE_9__["Linear"].easeIn
    });

    if (userUid && router.query.project) {
      var data = _lib_firebase__WEBPACK_IMPORTED_MODULE_5__["db"].collection('projects').where('uid', '==', userUid);
      data.where('projectName', '==', router.query.project).get().then(function (querySnapshot) {
        querySnapshot.forEach( /*#__PURE__*/function () {
          var _ref2 = Object(C_off_saas_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/C_off_saas_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee2(doc1) {
            return C_off_saas_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    setProjectId(doc1.data().projectId);
                    _lib_firebase__WEBPACK_IMPORTED_MODULE_5__["db"].collection('projects').doc(doc1.data().projectId).collection('startupIdea').doc(router.query.project).collection('inputs').onSnapshot(function (serverUpdate) {
                      serverUpdate.docs.map(function (doc) {
                        console.log(doc.data());
                        var data = doc.data();
                        setDocumentId(doc.id);
                        setProjectId(data.projectId); // OVERVIEW;

                        setMarketProblemSection(data.marketProblemSectionData), setMarketSolutionSection(data.marketSolutionSectionData), setFoundersSection(data.foundersSectionData), // PRODUCT
                        setProductOverviewSection(data.productOverviewSectionData), setProductPromotionSection(data.productPromotionSectionData), setProductBenefitsSection(data.productBenefitsSectionData), // MARKET
                        setMarketOverviewSection(data.marketOverviewSectionData), setCompetitorsSection(data.competitorsSectionData), setTargetCustomersSection(data.targetCustomersSectionData), setCompetitionDistinguishSection(data.competitionDistinguishSectionData), // FINANCES
                        setStartupCostsSection(data.startupCostsSectionData), setRunningCostsSection(data.runningCostsSectionData), setFinancingSection(data.financingSectionData), // BUSINESS MODEL
                        setBusinessModelOverviewSection(data.businessModelOverviewSectionData), setBusinessGrowSection(data.businessGrowSectionData), setWhySuccessSection(data.whySuccessSectionData);
                        setLoadingHelper(false);
                      });
                    });

                  case 2:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2);
          }));

          return function (_x2) {
            return _ref2.apply(this, arguments);
          };
        }());
      });
    } else {
      console.log('Loading failed');
      setLoadingHelper(true);
    }

    return function () {
      return setOnLoadOpacity4(false);
    };
  }, [loadingHelper, router.query.project]);
  var businessModelOverviewSectionData = businessModelOverviewSection ? businessModelOverviewSection : 'blank';
  var businessGrowSectionData = businessGrowSection ? businessGrowSection : 'blank';
  var whySuccessSectionData = whySuccessSection ? whySuccessSection : 'blank';

  var onProjectLeave = /*#__PURE__*/function () {
    var _ref3 = Object(C_off_saas_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/C_off_saas_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee3(e) {
      return C_off_saas_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              e.preventDefault();
              gsap__WEBPACK_IMPORTED_MODULE_9__["default"].to(contentRef.current, {
                autoAlpha: 0,
                duration: 1,
                ease: gsap__WEBPACK_IMPORTED_MODULE_9__["Linear"].easeOut
              });
              setTimeout(function () {
                router.push("/dashboard/projects/".concat(router.query.project, "/startup-idea/finances"));
              }, 1200);
              _context3.next = 5;
              return _lib_firebase__WEBPACK_IMPORTED_MODULE_5__["db"].collection('projects').doc(projectId).collection('startupIdea').doc(router.query.project).collection('inputs').doc(documentId).set({
                businessModelOverviewSectionData: businessModelOverviewSectionData,
                businessGrowSectionData: businessGrowSectionData,
                whySuccessSectionData: whySuccessSectionData,
                filledSection4: businessModelOverviewSection && businessModelOverviewSection != 'blank' && businessGrowSection && businessGrowSection != 'blank' && whySuccessSection && whySuccessSection != 'blank' ? true : (!businessModelOverviewSection || !businessGrowSection || !whySuccessSection || businessModelOverviewSection == 'blank' || businessGrowSection == 'blank' || whySuccessSection == 'blank') && false
              }, {
                merge: true
              });

            case 5:
              _context3.next = 7;
              return _lib_firebase__WEBPACK_IMPORTED_MODULE_5__["db"].collection('projects').doc(projectId).set({
                businessModelOverviewSectionData: businessModelOverviewSectionData,
                businessGrowSectionData: businessGrowSectionData,
                whySuccessSectionData: whySuccessSectionData,
                filledSection4: businessModelOverviewSection && businessModelOverviewSection != 'blank' && businessGrowSection && businessGrowSection != 'blank' && whySuccessSection && whySuccessSection != 'blank' ? true : (!businessModelOverviewSection || !businessGrowSection || !whySuccessSection || businessModelOverviewSection == 'blank' || businessGrowSection == 'blank' || whySuccessSection == 'blank') && false
              }, {
                merge: true
              });

            case 7:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3);
    }));

    return function onProjectLeave(_x3) {
      return _ref3.apply(this, arguments);
    };
  }();

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Tippy__WEBPACK_IMPORTED_MODULE_10__["default"], {
      setCurrentTippy: setCurrentTippy,
      emptyInput: true,
      setTippyMonster: setTippyMonster,
      tippyMonster: tippyMonster,
      model: true,
      contentClass: "h-40 w-96 shadow-lg rounded-2xl bg-primary flex justify-center items-center",
      contentText: "It used to be that pirates had to work out their plunder plans in great details. Their future depended on the success of their mission ",
      contentText1: " In this section, introduce your startup's operating model and tell the world why it is your startup that will be successful "
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 272,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_NavbarTemplate__WEBPACK_IMPORTED_MODULE_11__["default"], {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        ref: contentRef,
        className: "h-full w-full relative flex flex-col items-center justify-center",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "w-full max-w-mdStarter lg:max-w-lgContainer 2xl:max-w-xlContainer relative pl-6 pr-6 mt-16 pb-24",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            className: "text-primarydark text-2xl normal:text-3xl mt-2 pl-2 dark:text-background text-center",
            children: "It is a high time to get into the numbers"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 285,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            className: "text-primarydark text-base normal:text-lg mt-2 pl-2 dark:text-background text-center",
            children: ["Startup idea creator will help you create the initial mockup of your future startup", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
              src: "/gifs/rocket.gif",
              height: 35,
              width: 35,
              className: "inline-block relative bottom-0.5"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 290,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 288,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_ProgressBar__WEBPACK_IMPORTED_MODULE_7__["default"], {
            onLoadOpacity4: onLoadOpacity4
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 298,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
              className: "text-primarydark text-lg mt-10 -mb-6 dark:text-background",
              children: "Business model"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 300,
              columnNumber: 15
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 299,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "w-full flex flex-col justify-center items-center border-r-6 rounded-2xl bg-white mt-8 dark:bg-background",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "relative flex flex-col h-full w-full flex px-8 pt-8 pb-4",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
                  className: "block text-sm font-medium flex justify-between items-end",
                  htmlFor: "businessModelOverview",
                  children: ["Overview of your startup business model.", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_TippyGuide__WEBPACK_IMPORTED_MODULE_12__["default"], {
                    contentClass: "w-80 shadow-lg rounded-2xl bg-primary",
                    contentText: ' Questions that can guide you:\n- How does your business model look like?\n- What will be the legal structure of your startup?\n- How will your startup generate income?'
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 307,
                    columnNumber: 21
                  }, _this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 305,
                  columnNumber: 19
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("textarea", {
                  autoComplete: "none",
                  id: "businessModelOverview",
                  onChange: function onChange(e) {
                    return setBusinessModelOverviewSection(e.target.value);
                  },
                  value: businessModelOverviewSection == 'blank' ? '' : businessModelOverviewSection,
                  className: "pb-24 shadow appearance-none rounded w-full py-3 px-4 text-primarydark leading-tight focus:outline-none focus:shadow-outline text-sm bg-white rounded-2xl mt-2",
                  type: "textarea",
                  placeholder: '“I never dreamed about success, I worked for it.”\n\n~ Estee Lauder'
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 314,
                  columnNumber: 19
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 304,
                columnNumber: 17
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: "mt-12",
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
                  className: "block text-sm font-medium flex justify-between items-end",
                  htmlFor: "businessGrow",
                  children: ["Predictions and milestones about the growth of your startup.", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_TippyGuide__WEBPACK_IMPORTED_MODULE_12__["default"], {
                    contentClass: "w-80 shadow-lg rounded-2xl bg-primary",
                    contentText: " Questions that can guide you:\n- How do you predict your startup grow?\n- How are you going to achieve the projected growth of your startup?\n- What are the milestones for each stage of your startup's development?"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 327,
                    columnNumber: 21
                  }, _this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 325,
                  columnNumber: 19
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("textarea", {
                  autoComplete: "none",
                  id: "businessGrow",
                  onChange: function onChange(e) {
                    return setBusinessGrowSection(e.target.value);
                  },
                  value: businessGrowSection == 'blank' ? '' : businessGrowSection,
                  className: "pb-24 px-3 shadow appearance-none rounded w-full py-3 px-4 text-primarydark leading-tight focus:outline-none focus:shadow-outline text-sm bg-white rounded-2xl mt-2",
                  type: "textarea",
                  placeholder: '“See things in the present, even if they are in the future.”\n\n~ Larry Ellison'
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 334,
                  columnNumber: 19
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 324,
                columnNumber: 17
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: "mt-12 pb-8",
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
                  className: "block text-sm font-medium flex justify-between items-end",
                  htmlFor: "success",
                  children: ["Why is it your idea that will be successful?", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_TippyGuide__WEBPACK_IMPORTED_MODULE_12__["default"], {
                    angry: true,
                    contentClass: "w-80 shadow-lg rounded-2xl bg-primary",
                    contentText: ' What else are you waiting for? Get it off your chest and tell the whole world, how strong your motivation is to build a new startup!'
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 347,
                    columnNumber: 21
                  }, _this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 345,
                  columnNumber: 19
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("textarea", {
                  autoComplete: "none",
                  id: "success",
                  onChange: function onChange(e) {
                    return setWhySuccessSection(e.target.value);
                  },
                  value: whySuccessSection == 'blank' ? '' : whySuccessSection,
                  className: "pb-24 px-3 shadow appearance-none rounded w-full py-3 px-4 text-primarydark leading-tight focus:outline-none focus:shadow-outline text-sm bg-white rounded-2xl mt-2",
                  type: "textarea",
                  placeholder: '“Whether you think you can, or think you can’t – you’re right.”\n\n~ Henry Ford'
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 355,
                  columnNumber: 19
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 344,
                columnNumber: 17
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 303,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("hr", {
              style: {
                width: '90%',
                color: '#a0aec0'
              }
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 366,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "w-full grid grid-cols-3fr grid-flow-column px-8 py-4",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: "flex items-center mt-1 text-primarydark text-sm",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
                  onClick: onProjectLeave,
                  children: "Back"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 369,
                  columnNumber: 19
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 368,
                columnNumber: 17
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: "flex items-center mt-1 justify-self-center",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                  className: "text-sm text-gray",
                  children: "Step 5 of 5"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 372,
                  columnNumber: 19
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 371,
                columnNumber: 17
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: "flex justify-end items-center",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
                  disabled: tippyMonster,
                  onClick: onSubmit,
                  className: "hover:bg-primary hover:text-white dark:hover:bg-primarydark dark:hover:text-background focus:outline-none border border-primary text-primary text-sm font-light py-2 px-8 rounded-2xl dark:text-primarydark dark:border-primarydark",
                  children: "Next"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 375,
                  columnNumber: 19
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 374,
                columnNumber: 17
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 367,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 302,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 284,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 283,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 282,
      columnNumber: 7
    }, _this)]
  }, void 0, true);
};

_s(StartupProductModal, "T2EYBEDeFAbz5SoPNbgEK60WTmE=", false, function () {
  return [_lib_newAuth__WEBPACK_IMPORTED_MODULE_6__["useAuth"], next_router__WEBPACK_IMPORTED_MODULE_8__["useRouter"]];
});

_c = StartupProductModal;
/* harmony default export */ __webpack_exports__["default"] = (StartupProductModal);

var _c;

$RefreshReg$(_c, "StartupProductModal");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9kYXNoYm9hcmQvc3RhcnR1cC9TdGFydHVwQnVzaW5lc3NNb2RlbE1vZGFsLmpzIl0sIm5hbWVzIjpbIlN0YXJ0dXBQcm9kdWN0TW9kYWwiLCJ1c2VTdGF0ZSIsInByb2plY3RJZCIsInNldFByb2plY3RJZCIsIm9uTG9hZE9wYWNpdHk0Iiwic2V0T25Mb2FkT3BhY2l0eTQiLCJtYXJrZXRQcm9ibGVtU2VjdGlvbiIsInNldE1hcmtldFByb2JsZW1TZWN0aW9uIiwibWFya2V0U29sdXRpb25TZWN0aW9uIiwic2V0TWFya2V0U29sdXRpb25TZWN0aW9uIiwiZm91bmRlcnNTZWN0aW9uIiwic2V0Rm91bmRlcnNTZWN0aW9uIiwicHJvZHVjdE92ZXJ2aWV3U2VjdGlvbiIsInNldFByb2R1Y3RPdmVydmlld1NlY3Rpb24iLCJwcm9kdWN0UHJvbW90aW9uU2VjdGlvbiIsInNldFByb2R1Y3RQcm9tb3Rpb25TZWN0aW9uIiwicHJvZHVjdEJlbmVmaXRzU2VjdGlvbiIsInNldFByb2R1Y3RCZW5lZml0c1NlY3Rpb24iLCJtYXJrZXRPdmVydmlld1NlY3Rpb24iLCJzZXRNYXJrZXRPdmVydmlld1NlY3Rpb24iLCJjb21wZXRpdG9yc1NlY3Rpb24iLCJzZXRDb21wZXRpdG9yc1NlY3Rpb24iLCJ0YXJnZXRDdXN0b21lcnNTZWN0aW9uIiwic2V0VGFyZ2V0Q3VzdG9tZXJzU2VjdGlvbiIsImNvbXBldGl0aW9uRGlzdGluZ3Vpc2hTZWN0aW9uIiwic2V0Q29tcGV0aXRpb25EaXN0aW5ndWlzaFNlY3Rpb24iLCJzdGFydHVwQ29zdHNTZWN0aW9uIiwic2V0U3RhcnR1cENvc3RzU2VjdGlvbiIsInJ1bm5pbmdDb3N0c1NlY3Rpb24iLCJzZXRSdW5uaW5nQ29zdHNTZWN0aW9uIiwiZmluYW5jaW5nU2VjdGlvbiIsInNldEZpbmFuY2luZ1NlY3Rpb24iLCJidXNpbmVzc01vZGVsT3ZlcnZpZXdTZWN0aW9uIiwic2V0QnVzaW5lc3NNb2RlbE92ZXJ2aWV3U2VjdGlvbiIsImJ1c2luZXNzR3Jvd1NlY3Rpb24iLCJzZXRCdXNpbmVzc0dyb3dTZWN0aW9uIiwid2h5U3VjY2Vzc1NlY3Rpb24iLCJzZXRXaHlTdWNjZXNzU2VjdGlvbiIsInVzZUF1dGgiLCJjdXJyZW50VXNlciIsInJvdXRlciIsInVzZVJvdXRlciIsImNvbnRlbnRSZWYiLCJ1c2VSZWYiLCJ0aXBweU1vbnN0ZXIiLCJzZXRUaXBweU1vbnN0ZXIiLCJjdXJyZW50VGlwcHkiLCJzZXRDdXJyZW50VGlwcHkiLCJjb25zb2xlIiwibG9nIiwib25TdWJtaXQiLCJlIiwicHJldmVudERlZmF1bHQiLCJzZXRUaW1lb3V0IiwiZ3NhcCIsInRvIiwiY3VycmVudCIsImF1dG9BbHBoYSIsImR1cmF0aW9uIiwiZWFzZSIsIkxpbmVhciIsImVhc2VPdXQiLCJwdXNoIiwicXVlcnkiLCJwcm9qZWN0IiwiZGIiLCJjb2xsZWN0aW9uIiwiZG9jIiwiZG9jdW1lbnRJZCIsInNldCIsImJ1c2luZXNzTW9kZWxPdmVydmlld1NlY3Rpb25EYXRhIiwiYnVzaW5lc3NHcm93U2VjdGlvbkRhdGEiLCJ3aHlTdWNjZXNzU2VjdGlvbkRhdGEiLCJmaWxsZWRTZWN0aW9uNCIsIm1lcmdlIiwibG9hZGluZ0hlbHBlciIsInNldExvYWRpbmdIZWxwZXIiLCJzZXREb2N1bWVudElkIiwidXNlRWZmZWN0IiwidXNlclVpZCIsIkNvb2tpZXMiLCJnZXQiLCJmcm9tVG8iLCJlYXNlSW4iLCJkYXRhIiwid2hlcmUiLCJ0aGVuIiwicXVlcnlTbmFwc2hvdCIsImZvckVhY2giLCJkb2MxIiwib25TbmFwc2hvdCIsInNlcnZlclVwZGF0ZSIsImRvY3MiLCJtYXAiLCJpZCIsIm1hcmtldFByb2JsZW1TZWN0aW9uRGF0YSIsIm1hcmtldFNvbHV0aW9uU2VjdGlvbkRhdGEiLCJmb3VuZGVyc1NlY3Rpb25EYXRhIiwicHJvZHVjdE92ZXJ2aWV3U2VjdGlvbkRhdGEiLCJwcm9kdWN0UHJvbW90aW9uU2VjdGlvbkRhdGEiLCJwcm9kdWN0QmVuZWZpdHNTZWN0aW9uRGF0YSIsIm1hcmtldE92ZXJ2aWV3U2VjdGlvbkRhdGEiLCJjb21wZXRpdG9yc1NlY3Rpb25EYXRhIiwidGFyZ2V0Q3VzdG9tZXJzU2VjdGlvbkRhdGEiLCJjb21wZXRpdGlvbkRpc3Rpbmd1aXNoU2VjdGlvbkRhdGEiLCJzdGFydHVwQ29zdHNTZWN0aW9uRGF0YSIsInJ1bm5pbmdDb3N0c1NlY3Rpb25EYXRhIiwiZmluYW5jaW5nU2VjdGlvbkRhdGEiLCJvblByb2plY3RMZWF2ZSIsInRhcmdldCIsInZhbHVlIiwid2lkdGgiLCJjb2xvciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsbUJBQW1CLEdBQUcsU0FBdEJBLG1CQUFzQixHQUFNO0FBQUE7O0FBQUEsa0JBQ0VDLHNEQUFRLEVBRFY7QUFBQSxNQUN6QkMsU0FEeUI7QUFBQSxNQUNkQyxZQURjOztBQUFBLG1CQUdZRixzREFBUSxDQUFDLElBQUQsQ0FIcEI7QUFBQSxNQUd6QkcsY0FIeUI7QUFBQSxNQUdUQyxpQkFIUyxrQkFLaEM7OztBQUxnQyxtQkFNd0JKLHNEQUFRLENBQUMsRUFBRCxDQU5oQztBQUFBLE1BTXpCSyxvQkFOeUI7QUFBQSxNQU1IQyx1QkFORzs7QUFBQSxtQkFPMEJOLHNEQUFRLENBQUMsRUFBRCxDQVBsQztBQUFBLE1BT3pCTyxxQkFQeUI7QUFBQSxNQU9GQyx3QkFQRTs7QUFBQSxtQkFRY1Isc0RBQVEsQ0FBQyxFQUFELENBUnRCO0FBQUEsTUFRekJTLGVBUnlCO0FBQUEsTUFRUkMsa0JBUlEsa0JBU2hDOzs7QUFUZ0MsbUJBVTRCVixzREFBUSxDQUFDLEVBQUQsQ0FWcEM7QUFBQSxNQVV6Qlcsc0JBVnlCO0FBQUEsTUFVREMseUJBVkM7O0FBQUEsbUJBVzhCWixzREFBUSxDQUFDLEVBQUQsQ0FY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Qyw0Q0FBZjtBQUFBLHVDQUNFO0FBQUcsMkJBQVMsRUFBQyxtQkFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBSkYsZUFPRTtBQUFLLHlCQUFTLEVBQUMsK0JBQWY7QUFBQSx1Q0FDRTtBQUNFLDBCQUFRLEVBQUVoRSxZQURaO0FBRUUseUJBQU8sRUFBRU0sUUFGWDtBQUdFLDJCQUFTLEVBQUMscU9BSFo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQVBGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFqRUY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQWxCRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQVhGO0FBQUEsa0JBREY7QUF3SEQsQ0F4WEQ7O0dBQU1sRCxtQjtVQTJCb0JzQyxvRCxFQUNURyxxRDs7O0tBNUJYekMsbUI7QUEwWFNBLGtGQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2Rhc2hib2FyZC9wcm9qZWN0cy9bcHJvamVjdF0vc3RhcnR1cC1pZGVhL2J1c2luZXNzLW1vZGVsLmJjZTk4MTlmOTY4Y2RiYTY0Nzk4LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCwgdXNlUmVmIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xyXG5pbXBvcnQgeyBkYiB9IGZyb20gJy4uLy4uLy4uL2xpYi9maXJlYmFzZSc7XHJcbmltcG9ydCB7IHVzZUF1dGggfSBmcm9tICcuLi8uLi8uLi9saWIvbmV3QXV0aCc7XHJcbmltcG9ydCBQcm9ncmVzc0JhciBmcm9tICcuL1Byb2dyZXNzQmFyJztcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xyXG5pbXBvcnQgZ3NhcCwgeyBQb3dlcjQsIExpbmVhciB9IGZyb20gJ2dzYXAnO1xyXG5pbXBvcnQgVGlwcHlNb25zdGVyIGZyb20gJy4uL1RpcHB5JztcclxuaW1wb3J0IE5hdmJhclRlbXBsYXRlIGZyb20gJy4uL05hdmJhclRlbXBsYXRlJztcclxuaW1wb3J0IFRpcHB5R3VpZGUgZnJvbSAnLi9UaXBweUd1aWRlJztcclxuaW1wb3J0IENvb2tpZXMgZnJvbSAnanMtY29va2llJztcclxuaW1wb3J0IEV4aXRDb21wb25lbnQgZnJvbSAnLi9FeGl0Q29tcG9uZW50JztcclxuXHJcbmNvbnN0IFN0YXJ0dXBQcm9kdWN0TW9kYWwgPSAoKSA9PiB7XHJcbiAgY29uc3QgW3Byb2plY3RJZCwgc2V0UHJvamVjdElkXSA9IHVzZVN0YXRlKCk7XHJcblxyXG4gIGNvbnN0IFtvbkxvYWRPcGFjaXR5NCwgc2V0T25Mb2FkT3BhY2l0eTRdID0gdXNlU3RhdGUodHJ1ZSk7XHJcblxyXG4gIC8vIE9WRVJWSUVXXHJcbiAgY29uc3QgW21hcmtldFByb2JsZW1TZWN0aW9uLCBzZXRNYXJrZXRQcm9ibGVtU2VjdGlvbl0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgY29uc3QgW21hcmtldFNvbHV0aW9uU2VjdGlvbiwgc2V0TWFya2V0U29sdXRpb25TZWN0aW9uXSA9IHVzZVN0YXRlKCcnKTtcclxuICBjb25zdCBbZm91bmRlcnNTZWN0aW9uLCBzZXRGb3VuZGVyc1NlY3Rpb25dID0gdXNlU3RhdGUoJycpO1xyXG4gIC8vIFBST0RVQ1RcclxuICBjb25zdCBbcHJvZHVjdE92ZXJ2aWV3U2VjdGlvbiwgc2V0UHJvZHVjdE92ZXJ2aWV3U2VjdGlvbl0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgY29uc3QgW3Byb2R1Y3RQcm9tb3Rpb25TZWN0aW9uLCBzZXRQcm9kdWN0UHJvbW90aW9uU2VjdGlvbl0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgY29uc3QgW3Byb2R1Y3RCZW5lZml0c1NlY3Rpb24sIHNldFByb2R1Y3RCZW5lZml0c1NlY3Rpb25dID0gdXNlU3RhdGUoJycpO1xyXG4gIC8vIE1BUktFVFxyXG4gIGNvbnN0IFttYXJrZXRPdmVydmlld1NlY3Rpb24sIHNldE1hcmtldE92ZXJ2aWV3U2VjdGlvbl0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgY29uc3QgW2NvbXBldGl0b3JzU2VjdGlvbiwgc2V0Q29tcGV0aXRvcnNTZWN0aW9uXSA9IHVzZVN0YXRlKCcnKTtcclxuICBjb25zdCBbdGFyZ2V0Q3VzdG9tZXJzU2VjdGlvbiwgc2V0VGFyZ2V0Q3VzdG9tZXJzU2VjdGlvbl0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgY29uc3QgW2NvbXBldGl0aW9uRGlzdGluZ3Vpc2hTZWN0aW9uLCBzZXRDb21wZXRpdGlvbkRpc3Rpbmd1aXNoU2VjdGlvbl0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgLy8gRklOQU5DRVNcclxuICBjb25zdCBbc3RhcnR1cENvc3RzU2VjdGlvbiwgc2V0U3RhcnR1cENvc3RzU2VjdGlvbl0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgY29uc3QgW3J1bm5pbmdDb3N0c1NlY3Rpb24sIHNldFJ1bm5pbmdDb3N0c1NlY3Rpb25dID0gdXNlU3RhdGUoJycpO1xyXG4gIGNvbnN0IFtmaW5hbmNpbmdTZWN0aW9uLCBzZXRGaW5hbmNpbmdTZWN0aW9uXSA9IHVzZVN0YXRlKCcnKTtcclxuICAvLyBCVVNJTkVTUyBNT0RFTFxyXG4gIGNvbnN0IFtidXNpbmVzc01vZGVsT3ZlcnZpZXdTZWN0aW9uLCBzZXRCdXNpbmVzc01vZGVsT3ZlcnZpZXdTZWN0aW9uXSA9IHVzZVN0YXRlKCcnKTtcclxuICBjb25zdCBbYnVzaW5lc3NHcm93U2VjdGlvbiwgc2V0QnVzaW5lc3NHcm93U2VjdGlvbl0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgY29uc3QgW3doeVN1Y2Nlc3NTZWN0aW9uLCBzZXRXaHlTdWNjZXNzU2VjdGlvbl0gPSB1c2VTdGF0ZSgnJyk7XHJcblxyXG4gIGNvbnN0IHsgY3VycmVudFVzZXIgfSA9IHVzZUF1dGgoKTtcclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuICBjb25zdCBjb250ZW50UmVmID0gdXNlUmVmKCk7XHJcblxyXG4gIC8vIFRJUFBZXHJcbiAgY29uc3QgW3RpcHB5TW9uc3Rlciwgc2V0VGlwcHlNb25zdGVyXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbY3VycmVudFRpcHB5LCBzZXRDdXJyZW50VGlwcHldID0gdXNlU3RhdGUobnVsbCk7XHJcblxyXG4gIGNvbnNvbGUubG9nKCdidXNpbmVzcyBtb2RlbCAtICcsIGJ1c2luZXNzTW9kZWxPdmVydmlld1NlY3Rpb24pO1xyXG4gIGNvbnNvbGUubG9nKCdidXNpbmVzcyBncm93IC0gJywgYnVzaW5lc3NHcm93U2VjdGlvbik7XHJcbiAgY29uc29sZS5sb2coJ2J1c2luZXNzIHN1Y2Nlc3MgLSAnLCB3aHlTdWNjZXNzU2VjdGlvbik7XHJcblxyXG4gIGNvbnN0IG9uU3VibWl0ID0gYXN5bmMgKGUpID0+IHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIGlmIChcclxuICAgICAgLy8gT1ZFUlZJRVdcclxuICAgICAgIW1hcmtldFByb2JsZW1TZWN0aW9uIHx8XHJcbiAgICAgICFtYXJrZXRTb2x1dGlvblNlY3Rpb24gfHxcclxuICAgICAgIWZvdW5kZXJzU2VjdGlvbiB8fFxyXG4gICAgICAvLyBQUk9EVUNUXHJcbiAgICAgICFwcm9kdWN0T3ZlcnZpZXdTZWN0aW9uIHx8XHJcbiAgICAgICFwcm9kdWN0UHJvbW90aW9uU2VjdGlvbiB8fFxyXG4gICAgICAhcHJvZHVjdEJlbmVmaXRzU2VjdGlvbiB8fFxyXG4gICAgICAvLyBNQVJLRVRcclxuICAgICAgIW1hcmtldE92ZXJ2aWV3U2VjdGlvbiB8fFxyXG4gICAgICAhY29tcGV0aXRvcnNTZWN0aW9uIHx8XHJcbiAgICAgICF0YXJnZXRDdXN0b21lcnNTZWN0aW9uIHx8XHJcbiAgICAgICFjb21wZXRpdGlvbkRpc3Rpbmd1aXNoU2VjdGlvbiB8fFxyXG4gICAgICAvLyBGSU5BTkNFU1xyXG4gICAgICAhc3RhcnR1cENvc3RzU2VjdGlvbiB8fFxyXG4gICAgICAhcnVubmluZ0Nvc3RzU2VjdGlvbiB8fFxyXG4gICAgICAhZmluYW5jaW5nU2VjdGlvbiB8fFxyXG4gICAgICAvLyBCVVNJTkVTUyBNT0RFTFxyXG4gICAgICAhYnVzaW5lc3NNb2RlbE92ZXJ2aWV3U2VjdGlvbiB8fFxyXG4gICAgICAhYnVzaW5lc3NHcm93U2VjdGlvbiB8fFxyXG4gICAgICAhd2h5U3VjY2Vzc1NlY3Rpb24gfHxcclxuICAgICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICAgICAgLy8gT1ZFUlZJRVdcclxuICAgICAgbWFya2V0UHJvYmxlbVNlY3Rpb24gPT0gJ2JsYW5rJyB8fFxyXG4gICAgICBtYXJrZXRTb2x1dGlvblNlY3Rpb24gPT0gJ2JsYW5rJyB8fFxyXG4gICAgICBmb3VuZGVyc1NlY3Rpb24gPT0gJ2JsYW5rJyB8fFxyXG4gICAgICAvLyBQUk9EVUNUXHJcbiAgICAgIHByb2R1Y3RPdmVydmlld1NlY3Rpb24gPT0gJ2JsYW5rJyB8fFxyXG4gICAgICBwcm9kdWN0UHJvbW90aW9uU2VjdGlvbiA9PSAnYmxhbmsnIHx8XHJcbiAgICAgIHByb2R1Y3RCZW5lZml0c1NlY3Rpb24gPT0gJ2JsYW5rJyB8fFxyXG4gICAgICAvLyBNQVJLRVRcclxuICAgICAgbWFya2V0T3ZlcnZpZXdTZWN0aW9uID09ICdibGFuaycgfHxcclxuICAgICAgY29tcGV0aXRvcnNTZWN0aW9uID09ICdibGFuaycgfHxcclxuICAgICAgdGFyZ2V0Q3VzdG9tZXJzU2VjdGlvbiA9PSAnYmxhbmsnIHx8XHJcbiAgICAgIGNvbXBldGl0aW9uRGlzdGluZ3Vpc2hTZWN0aW9uID09ICdibGFuaycgfHxcclxuICAgICAgLy8gRklOQU5DRVNcclxuICAgICAgc3RhcnR1cENvc3RzU2VjdGlvbiA9PSAnYmxhbmsnIHx8XHJcbiAgICAgIHJ1bm5pbmdDb3N0c1NlY3Rpb24gPT0gJ2JsYW5rJyB8fFxyXG4gICAgICBmaW5hbmNpbmdTZWN0aW9uID09ICdibGFuaycgfHxcclxuICAgICAgLy8gQlVTSU5FU1MgTU9ERUxcclxuICAgICAgYnVzaW5lc3NNb2RlbE92ZXJ2aWV3U2VjdGlvbiA9PSAnYmxhbmsnIHx8XHJcbiAgICAgIGJ1c2luZXNzR3Jvd1NlY3Rpb24gPT0gJ2JsYW5rJyB8fFxyXG4gICAgICB3aHlTdWNjZXNzU2VjdGlvbiA9PSAnYmxhbmsnXHJcbiAgICApIHtcclxuICAgICAgaWYgKGN1cnJlbnRUaXBweSkge1xyXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgIXRpcHB5TW9uc3RlciAmJiBzZXRUaXBweU1vbnN0ZXIodHJ1ZSk7XHJcbiAgICAgICAgfSwgMTAwMCk7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgICF0aXBweU1vbnN0ZXIgJiYgc2V0VGlwcHlNb25zdGVyKHRydWUpO1xyXG4gICAgICAgIHJldHVybjtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgZ3NhcC50byhjb250ZW50UmVmLmN1cnJlbnQsIHtcclxuICAgICAgYXV0b0FscGhhOiAwLFxyXG4gICAgICBkdXJhdGlvbjogMSxcclxuICAgICAgZWFzZTogTGluZWFyLmVhc2VPdXQsXHJcbiAgICB9KTtcclxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICByb3V0ZXIucHVzaChgL2Rhc2hib2FyZC9wcm9qZWN0cy8ke3JvdXRlci5xdWVyeS5wcm9qZWN0fS9zdGFydHVwLWlkZWEvc3VjY2Vzc2ApO1xyXG4gICAgfSwgMTIwMCk7XHJcblxyXG4gICAgYXdhaXQgZGJcclxuICAgICAgLmNvbGxlY3Rpb24oJ3Byb2plY3RzJylcclxuICAgICAgLmRvYyhwcm9qZWN0SWQpXHJcbiAgICAgIC5jb2xsZWN0aW9uKCdzdGFydHVwSWRlYScpXHJcbiAgICAgIC5kb2Mocm91dGVyLnF1ZXJ5LnByb2plY3QpXHJcbiAgICAgIC5jb2xsZWN0aW9uKCdpbnB1dHMnKVxyXG4gICAgICAuZG9jKGRvY3VtZW50SWQpXHJcbiAgICAgIC5zZXQoXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgYnVzaW5lc3NNb2RlbE92ZXJ2aWV3U2VjdGlvbkRhdGEsXHJcbiAgICAgICAgICBidXNpbmVzc0dyb3dTZWN0aW9uRGF0YSxcclxuICAgICAgICAgIHdoeVN1Y2Nlc3NTZWN0aW9uRGF0YSxcclxuICAgICAgICAgIGZpbGxlZFNlY3Rpb240OiB0cnVlLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgeyBtZXJnZTogdHJ1ZSB9XHJcbiAgICAgICk7XHJcbiAgICByZXR1cm47XHJcbiAgfTtcclxuXHJcbiAgLy8gRGF0YSBmZXRjaFxyXG4gIGNvbnN0IFtsb2FkaW5nSGVscGVyLCBzZXRMb2FkaW5nSGVscGVyXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbZG9jdW1lbnRJZCwgc2V0RG9jdW1lbnRJZF0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnN0IHVzZXJVaWQgPSBDb29raWVzLmdldCgndWlkJyk7XHJcbiAgICBnc2FwLmZyb21Ubyhjb250ZW50UmVmLmN1cnJlbnQsIHsgYXV0b0FscGhhOiAwIH0sIHsgYXV0b0FscGhhOiAxLCBkdXJhdGlvbjogMSwgZWFzZTogTGluZWFyLmVhc2VJbiB9KTtcclxuICAgIGlmICh1c2VyVWlkICYmIHJvdXRlci5xdWVyeS5wcm9qZWN0KSB7XHJcbiAgICAgIGNvbnN0IGRhdGEgPSBkYi5jb2xsZWN0aW9uKCdwcm9qZWN0cycpLndoZXJlKCd1aWQnLCAnPT0nLCB1c2VyVWlkKTtcclxuICAgICAgZGF0YVxyXG4gICAgICAgIC53aGVyZSgncHJvamVjdE5hbWUnLCAnPT0nLCByb3V0ZXIucXVlcnkucHJvamVjdClcclxuICAgICAgICAuZ2V0KClcclxuICAgICAgICAudGhlbigocXVlcnlTbmFwc2hvdCkgPT4ge1xyXG4gICAgICAgICAgcXVlcnlTbmFwc2hvdC5mb3JFYWNoKGFzeW5jIChkb2MxKSA9PiB7XHJcbiAgICAgICAgICAgIHNldFByb2plY3RJZChkb2MxLmRhdGEoKS5wcm9qZWN0SWQpO1xyXG5cclxuICAgICAgICAgICAgZGIuY29sbGVjdGlvbigncHJvamVjdHMnKVxyXG4gICAgICAgICAgICAgIC5kb2MoZG9jMS5kYXRhKCkucHJvamVjdElkKVxyXG4gICAgICAgICAgICAgIC5jb2xsZWN0aW9uKCdzdGFydHVwSWRlYScpXHJcbiAgICAgICAgICAgICAgLmRvYyhyb3V0ZXIucXVlcnkucHJvamVjdClcclxuICAgICAgICAgICAgICAuY29sbGVjdGlvbignaW5wdXRzJylcclxuICAgICAgICAgICAgICAub25TbmFwc2hvdCgoc2VydmVyVXBkYXRlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBzZXJ2ZXJVcGRhdGUuZG9jcy5tYXAoKGRvYykgPT4ge1xyXG4gICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhkb2MuZGF0YSgpKTtcclxuICAgICAgICAgICAgICAgICAgY29uc3QgZGF0YSA9IGRvYy5kYXRhKCk7XHJcbiAgICAgICAgICAgICAgICAgIHNldERvY3VtZW50SWQoZG9jLmlkKTtcclxuICAgICAgICAgICAgICAgICAgc2V0UHJvamVjdElkKGRhdGEucHJvamVjdElkKTtcclxuICAgICAgICAgICAgICAgICAgLy8gT1ZFUlZJRVc7XHJcbiAgICAgICAgICAgICAgICAgIHNldE1hcmtldFByb2JsZW1TZWN0aW9uKGRhdGEubWFya2V0UHJvYmxlbVNlY3Rpb25EYXRhKSxcclxuICAgICAgICAgICAgICAgICAgICBzZXRNYXJrZXRTb2x1dGlvblNlY3Rpb24oZGF0YS5tYXJrZXRTb2x1dGlvblNlY3Rpb25EYXRhKSxcclxuICAgICAgICAgICAgICAgICAgICBzZXRGb3VuZGVyc1NlY3Rpb24oZGF0YS5mb3VuZGVyc1NlY3Rpb25EYXRhKSxcclxuICAgICAgICAgICAgICAgICAgICAvLyBQUk9EVUNUXHJcbiAgICAgICAgICAgICAgICAgICAgc2V0UHJvZHVjdE92ZXJ2aWV3U2VjdGlvbihkYXRhLnByb2R1Y3RPdmVydmlld1NlY3Rpb25EYXRhKSxcclxuICAgICAgICAgICAgICAgICAgICBzZXRQcm9kdWN0UHJvbW90aW9uU2VjdGlvbihkYXRhLnByb2R1Y3RQcm9tb3Rpb25TZWN0aW9uRGF0YSksXHJcbiAgICAgICAgICAgICAgICAgICAgc2V0UHJvZHVjdEJlbmVmaXRzU2VjdGlvbihkYXRhLnByb2R1Y3RCZW5lZml0c1NlY3Rpb25EYXRhKSxcclxuICAgICAgICAgICAgICAgICAgICAvLyBNQVJLRVRcclxuICAgICAgICAgICAgICAgICAgICBzZXRNYXJrZXRPdmVydmlld1NlY3Rpb24oZGF0YS5tYXJrZXRPdmVydmlld1NlY3Rpb25EYXRhKSxcclxuICAgICAgICAgICAgICAgICAgICBzZXRDb21wZXRpdG9yc1NlY3Rpb24oZGF0YS5jb21wZXRpdG9yc1NlY3Rpb25EYXRhKSxcclxuICAgICAgICAgICAgICAgICAgICBzZXRUYXJnZXRDdXN0b21lcnNTZWN0aW9uKGRhdGEudGFyZ2V0Q3VzdG9tZXJzU2VjdGlvbkRhdGEpLFxyXG4gICAgICAgICAgICAgICAgICAgIHNldENvbXBldGl0aW9uRGlzdGluZ3Vpc2hTZWN0aW9uKGRhdGEuY29tcGV0aXRpb25EaXN0aW5ndWlzaFNlY3Rpb25EYXRhKSxcclxuICAgICAgICAgICAgICAgICAgICAvLyBGSU5BTkNFU1xyXG4gICAgICAgICAgICAgICAgICAgIHNldFN0YXJ0dXBDb3N0c1NlY3Rpb24oZGF0YS5zdGFydHVwQ29zdHNTZWN0aW9uRGF0YSksXHJcbiAgICAgICAgICAgICAgICAgICAgc2V0UnVubmluZ0Nvc3RzU2VjdGlvbihkYXRhLnJ1bm5pbmdDb3N0c1NlY3Rpb25EYXRhKSxcclxuICAgICAgICAgICAgICAgICAgICBzZXRGaW5hbmNpbmdTZWN0aW9uKGRhdGEuZmluYW5jaW5nU2VjdGlvbkRhdGEpLFxyXG4gICAgICAgICAgICAgICAgICAgIC8vIEJVU0lORVNTIE1PREVMXHJcbiAgICAgICAgICAgICAgICAgICAgc2V0QnVzaW5lc3NNb2RlbE92ZXJ2aWV3U2VjdGlvbihkYXRhLmJ1c2luZXNzTW9kZWxPdmVydmlld1NlY3Rpb25EYXRhKSxcclxuICAgICAgICAgICAgICAgICAgICBzZXRCdXNpbmVzc0dyb3dTZWN0aW9uKGRhdGEuYnVzaW5lc3NHcm93U2VjdGlvbkRhdGEpLFxyXG4gICAgICAgICAgICAgICAgICAgIHNldFdoeVN1Y2Nlc3NTZWN0aW9uKGRhdGEud2h5U3VjY2Vzc1NlY3Rpb25EYXRhKTtcclxuICAgICAgICAgICAgICAgICAgc2V0TG9hZGluZ0hlbHBlcihmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgY29uc29sZS5sb2coJ0xvYWRpbmcgZmFpbGVkJyk7XHJcbiAgICAgIHNldExvYWRpbmdIZWxwZXIodHJ1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuICgpID0+IHNldE9uTG9hZE9wYWNpdHk0KGZhbHNlKTtcclxuICB9LCBbbG9hZGluZ0hlbHBlciwgcm91dGVyLnF1ZXJ5LnByb2plY3RdKTtcclxuXHJcbiAgY29uc3QgYnVzaW5lc3NNb2RlbE92ZXJ2aWV3U2VjdGlvbkRhdGEgPSBidXNpbmVzc01vZGVsT3ZlcnZpZXdTZWN0aW9uID8gYnVzaW5lc3NNb2RlbE92ZXJ2aWV3U2VjdGlvbiA6ICdibGFuayc7XHJcbiAgY29uc3QgYnVzaW5lc3NHcm93U2VjdGlvbkRhdGEgPSBidXNpbmVzc0dyb3dTZWN0aW9uID8gYnVzaW5lc3NHcm93U2VjdGlvbiA6ICdibGFuayc7XHJcbiAgY29uc3Qgd2h5U3VjY2Vzc1NlY3Rpb25EYXRhID0gd2h5U3VjY2Vzc1NlY3Rpb24gPyB3aHlTdWNjZXNzU2VjdGlvbiA6ICdibGFuayc7XHJcblxyXG4gIGNvbnN0IG9uUHJvamVjdExlYXZlID0gYXN5bmMgKGUpID0+IHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIGdzYXAudG8oY29udGVudFJlZi5jdXJyZW50LCB7XHJcbiAgICAgIGF1dG9BbHBoYTogMCxcclxuICAgICAgZHVyYXRpb246IDEsXHJcbiAgICAgIGVhc2U6IExpbmVhci5lYXNlT3V0LFxyXG4gICAgfSk7XHJcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgcm91dGVyLnB1c2goYC9kYXNoYm9hcmQvcHJvamVjdHMvJHtyb3V0ZXIucXVlcnkucHJvamVjdH0vc3RhcnR1cC1pZGVhL2ZpbmFuY2VzYCk7XHJcbiAgICB9LCAxMjAwKTtcclxuICAgIGF3YWl0IGRiXHJcbiAgICAgIC5jb2xsZWN0aW9uKCdwcm9qZWN0cycpXHJcbiAgICAgIC5kb2MocHJvamVjdElkKVxyXG4gICAgICAuY29sbGVjdGlvbignc3RhcnR1cElkZWEnKVxyXG4gICAgICAuZG9jKHJvdXRlci5xdWVyeS5wcm9qZWN0KVxyXG4gICAgICAuY29sbGVjdGlvbignaW5wdXRzJylcclxuICAgICAgLmRvYyhkb2N1bWVudElkKVxyXG4gICAgICAuc2V0KFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIGJ1c2luZXNzTW9kZWxPdmVydmlld1NlY3Rpb25EYXRhLFxyXG4gICAgICAgICAgYnVzaW5lc3NHcm93U2VjdGlvbkRhdGEsXHJcbiAgICAgICAgICB3aHlTdWNjZXNzU2VjdGlvbkRhdGEsXHJcbiAgICAgICAgICBmaWxsZWRTZWN0aW9uNDpcclxuICAgICAgICAgICAgYnVzaW5lc3NNb2RlbE92ZXJ2aWV3U2VjdGlvbiAmJlxyXG4gICAgICAgICAgICBidXNpbmVzc01vZGVsT3ZlcnZpZXdTZWN0aW9uICE9ICdibGFuaycgJiZcclxuICAgICAgICAgICAgYnVzaW5lc3NHcm93U2VjdGlvbiAmJlxyXG4gICAgICAgICAgICBidXNpbmVzc0dyb3dTZWN0aW9uICE9ICdibGFuaycgJiZcclxuICAgICAgICAgICAgd2h5U3VjY2Vzc1NlY3Rpb24gJiZcclxuICAgICAgICAgICAgd2h5U3VjY2Vzc1NlY3Rpb24gIT0gJ2JsYW5rJ1xyXG4gICAgICAgICAgICAgID8gdHJ1ZVxyXG4gICAgICAgICAgICAgIDogKCFidXNpbmVzc01vZGVsT3ZlcnZpZXdTZWN0aW9uIHx8XHJcbiAgICAgICAgICAgICAgICAgICFidXNpbmVzc0dyb3dTZWN0aW9uIHx8XHJcbiAgICAgICAgICAgICAgICAgICF3aHlTdWNjZXNzU2VjdGlvbiB8fFxyXG4gICAgICAgICAgICAgICAgICBidXNpbmVzc01vZGVsT3ZlcnZpZXdTZWN0aW9uID09ICdibGFuaycgfHxcclxuICAgICAgICAgICAgICAgICAgYnVzaW5lc3NHcm93U2VjdGlvbiA9PSAnYmxhbmsnIHx8XHJcbiAgICAgICAgICAgICAgICAgIHdoeVN1Y2Nlc3NTZWN0aW9uID09ICdibGFuaycpICYmXHJcbiAgICAgICAgICAgICAgICBmYWxzZSxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHsgbWVyZ2U6IHRydWUgfVxyXG4gICAgICApO1xyXG4gICAgYXdhaXQgZGJcclxuICAgICAgLmNvbGxlY3Rpb24oJ3Byb2plY3RzJylcclxuICAgICAgLmRvYyhwcm9qZWN0SWQpXHJcbiAgICAgIC5zZXQoXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgYnVzaW5lc3NNb2RlbE92ZXJ2aWV3U2VjdGlvbkRhdGEsXHJcbiAgICAgICAgICBidXNpbmVzc0dyb3dTZWN0aW9uRGF0YSxcclxuICAgICAgICAgIHdoeVN1Y2Nlc3NTZWN0aW9uRGF0YSxcclxuICAgICAgICAgIGZpbGxlZFNlY3Rpb240OlxyXG4gICAgICAgICAgICBidXNpbmVzc01vZGVsT3ZlcnZpZXdTZWN0aW9uICYmXHJcbiAgICAgICAgICAgIGJ1c2luZXNzTW9kZWxPdmVydmlld1NlY3Rpb24gIT0gJ2JsYW5rJyAmJlxyXG4gICAgICAgICAgICBidXNpbmVzc0dyb3dTZWN0aW9uICYmXHJcbiAgICAgICAgICAgIGJ1c2luZXNzR3Jvd1NlY3Rpb24gIT0gJ2JsYW5rJyAmJlxyXG4gICAgICAgICAgICB3aHlTdWNjZXNzU2VjdGlvbiAmJlxyXG4gICAgICAgICAgICB3aHlTdWNjZXNzU2VjdGlvbiAhPSAnYmxhbmsnXHJcbiAgICAgICAgICAgICAgPyB0cnVlXHJcbiAgICAgICAgICAgICAgOiAoIWJ1c2luZXNzTW9kZWxPdmVydmlld1NlY3Rpb24gfHxcclxuICAgICAgICAgICAgICAgICAgIWJ1c2luZXNzR3Jvd1NlY3Rpb24gfHxcclxuICAgICAgICAgICAgICAgICAgIXdoeVN1Y2Nlc3NTZWN0aW9uIHx8XHJcbiAgICAgICAgICAgICAgICAgIGJ1c2luZXNzTW9kZWxPdmVydmlld1NlY3Rpb24gPT0gJ2JsYW5rJyB8fFxyXG4gICAgICAgICAgICAgICAgICBidXNpbmVzc0dyb3dTZWN0aW9uID09ICdibGFuaycgfHxcclxuICAgICAgICAgICAgICAgICAgd2h5U3VjY2Vzc1NlY3Rpb24gPT0gJ2JsYW5rJykgJiZcclxuICAgICAgICAgICAgICAgIGZhbHNlLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgeyBtZXJnZTogdHJ1ZSB9XHJcbiAgICAgICk7XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxUaXBweU1vbnN0ZXJcclxuICAgICAgICBzZXRDdXJyZW50VGlwcHk9e3NldEN1cnJlbnRUaXBweX1cclxuICAgICAgICBlbXB0eUlucHV0XHJcbiAgICAgICAgc2V0VGlwcHlNb25zdGVyPXtzZXRUaXBweU1vbnN0ZXJ9XHJcbiAgICAgICAgdGlwcHlNb25zdGVyPXt0aXBweU1vbnN0ZXJ9XHJcbiAgICAgICAgbW9kZWxcclxuICAgICAgICBjb250ZW50Q2xhc3M9XCJoLTQwIHctOTYgc2hhZG93LWxnIHJvdW5kZWQtMnhsIGJnLXByaW1hcnkgZmxleCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXJcIlxyXG4gICAgICAgIGNvbnRlbnRUZXh0PVwiSXQgdXNlZCB0byBiZSB0aGF0IHBpcmF0ZXMgaGFkIHRvIHdvcmsgb3V0IHRoZWlyIHBsdW5kZXIgcGxhbnMgaW4gZ3JlYXQgZGV0YWlscy4gVGhlaXIgZnV0dXJlIGRlcGVuZGVkIG9uIHRoZSBzdWNjZXNzIG9mIHRoZWlyIG1pc3Npb24gXCJcclxuICAgICAgICBjb250ZW50VGV4dDE9XCIgSW4gdGhpcyBzZWN0aW9uLCBpbnRyb2R1Y2UgeW91ciBzdGFydHVwJ3Mgb3BlcmF0aW5nIG1vZGVsIGFuZCB0ZWxsIHRoZSB3b3JsZCB3aHkgaXQgaXMgeW91ciBzdGFydHVwIHRoYXQgd2lsbCBiZSBzdWNjZXNzZnVsIFwiXHJcbiAgICAgIC8+XHJcbiAgICAgIDxOYXZiYXJUZW1wbGF0ZT5cclxuICAgICAgICA8ZGl2IHJlZj17Y29udGVudFJlZn0gY2xhc3NOYW1lPVwiaC1mdWxsIHctZnVsbCByZWxhdGl2ZSBmbGV4IGZsZXgtY29sIGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlclwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGwgbWF4LXctbWRTdGFydGVyIGxnOm1heC13LWxnQ29udGFpbmVyIDJ4bDptYXgtdy14bENvbnRhaW5lciByZWxhdGl2ZSBwbC02IHByLTYgbXQtMTYgcGItMjRcIj5cclxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1wcmltYXJ5ZGFyayB0ZXh0LTJ4bCBub3JtYWw6dGV4dC0zeGwgbXQtMiBwbC0yIGRhcms6dGV4dC1iYWNrZ3JvdW5kIHRleHQtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgSXQgaXMgYSBoaWdoIHRpbWUgdG8gZ2V0IGludG8gdGhlIG51bWJlcnNcclxuICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXByaW1hcnlkYXJrIHRleHQtYmFzZSBub3JtYWw6dGV4dC1sZyBtdC0yIHBsLTIgZGFyazp0ZXh0LWJhY2tncm91bmQgdGV4dC1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICBTdGFydHVwIGlkZWEgY3JlYXRvciB3aWxsIGhlbHAgeW91IGNyZWF0ZSB0aGUgaW5pdGlhbCBtb2NrdXAgb2YgeW91ciBmdXR1cmUgc3RhcnR1cFxyXG4gICAgICAgICAgICAgIDxpbWcgc3JjPVwiL2dpZnMvcm9ja2V0LmdpZlwiIGhlaWdodD17MzV9IHdpZHRoPXszNX0gY2xhc3NOYW1lPVwiaW5saW5lLWJsb2NrIHJlbGF0aXZlIGJvdHRvbS0wLjVcIiAvPlxyXG4gICAgICAgICAgICAgIHsvKiA8aW1nXHJcbiAgICAgICAgICAgICAgICBzcmM9Jy9lbW9qaXMvcGFsbS5zdmcnXHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ9ezM1fVxyXG4gICAgICAgICAgICAgICAgd2lkdGg9ezM1fVxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPSdpbmxpbmUtYmxvY2sgcmVsYXRpdmUgYm90dG9tLTInXHJcbiAgICAgICAgICAgICAgLz4gKi99XHJcbiAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgPFByb2dyZXNzQmFyIG9uTG9hZE9wYWNpdHk0PXtvbkxvYWRPcGFjaXR5NH0gLz5cclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwidGV4dC1wcmltYXJ5ZGFyayB0ZXh0LWxnIG10LTEwIC1tYi02IGRhcms6dGV4dC1iYWNrZ3JvdW5kXCI+QnVzaW5lc3MgbW9kZWw8L2gxPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGwgZmxleCBmbGV4LWNvbCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXIgYm9yZGVyLXItNiByb3VuZGVkLTJ4bCBiZy13aGl0ZSBtdC04IGRhcms6YmctYmFja2dyb3VuZFwiPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVsYXRpdmUgZmxleCBmbGV4LWNvbCBoLWZ1bGwgdy1mdWxsIGZsZXggcHgtOCBwdC04IHBiLTRcIj5cclxuICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJibG9jayB0ZXh0LXNtIGZvbnQtbWVkaXVtIGZsZXgganVzdGlmeS1iZXR3ZWVuIGl0ZW1zLWVuZFwiIGh0bWxGb3I9XCJidXNpbmVzc01vZGVsT3ZlcnZpZXdcIj5cclxuICAgICAgICAgICAgICAgICAgICBPdmVydmlldyBvZiB5b3VyIHN0YXJ0dXAgYnVzaW5lc3MgbW9kZWwuXHJcbiAgICAgICAgICAgICAgICAgICAgPFRpcHB5R3VpZGVcclxuICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnRDbGFzcz1cInctODAgc2hhZG93LWxnIHJvdW5kZWQtMnhsIGJnLXByaW1hcnlcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgY29udGVudFRleHQ9e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAnIFF1ZXN0aW9ucyB0aGF0IGNhbiBndWlkZSB5b3U6XFxuLSBIb3cgZG9lcyB5b3VyIGJ1c2luZXNzIG1vZGVsIGxvb2sgbGlrZT9cXG4tIFdoYXQgd2lsbCBiZSB0aGUgbGVnYWwgc3RydWN0dXJlIG9mIHlvdXIgc3RhcnR1cD9cXG4tIEhvdyB3aWxsIHlvdXIgc3RhcnR1cCBnZW5lcmF0ZSBpbmNvbWU/J1xyXG4gICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgIDx0ZXh0YXJlYVxyXG4gICAgICAgICAgICAgICAgICAgIGF1dG9Db21wbGV0ZT1cIm5vbmVcIlxyXG4gICAgICAgICAgICAgICAgICAgIGlkPVwiYnVzaW5lc3NNb2RlbE92ZXJ2aWV3XCJcclxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldEJ1c2luZXNzTW9kZWxPdmVydmlld1NlY3Rpb24oZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXtidXNpbmVzc01vZGVsT3ZlcnZpZXdTZWN0aW9uID09ICdibGFuaycgPyAnJyA6IGJ1c2luZXNzTW9kZWxPdmVydmlld1NlY3Rpb259XHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicGItMjQgc2hhZG93IGFwcGVhcmFuY2Utbm9uZSByb3VuZGVkIHctZnVsbCBweS0zIHB4LTQgdGV4dC1wcmltYXJ5ZGFyayBsZWFkaW5nLXRpZ2h0IGZvY3VzOm91dGxpbmUtbm9uZSBmb2N1czpzaGFkb3ctb3V0bGluZSB0ZXh0LXNtIGJnLXdoaXRlIHJvdW5kZWQtMnhsIG10LTJcIlxyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0YXJlYVwiXHJcbiAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9eyfigJxJIG5ldmVyIGRyZWFtZWQgYWJvdXQgc3VjY2VzcywgSSB3b3JrZWQgZm9yIGl0LuKAnVxcblxcbn4gRXN0ZWUgTGF1ZGVyJ31cclxuICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtdC0xMlwiPlxyXG4gICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiYmxvY2sgdGV4dC1zbSBmb250LW1lZGl1bSBmbGV4IGp1c3RpZnktYmV0d2VlbiBpdGVtcy1lbmRcIiBodG1sRm9yPVwiYnVzaW5lc3NHcm93XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgUHJlZGljdGlvbnMgYW5kIG1pbGVzdG9uZXMgYWJvdXQgdGhlIGdyb3d0aCBvZiB5b3VyIHN0YXJ0dXAuXHJcbiAgICAgICAgICAgICAgICAgICAgPFRpcHB5R3VpZGVcclxuICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnRDbGFzcz1cInctODAgc2hhZG93LWxnIHJvdW5kZWQtMnhsIGJnLXByaW1hcnlcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgY29udGVudFRleHQ9e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBcIiBRdWVzdGlvbnMgdGhhdCBjYW4gZ3VpZGUgeW91Olxcbi0gSG93IGRvIHlvdSBwcmVkaWN0IHlvdXIgc3RhcnR1cCBncm93P1xcbi0gSG93IGFyZSB5b3UgZ29pbmcgdG8gYWNoaWV2ZSB0aGUgcHJvamVjdGVkIGdyb3d0aCBvZiB5b3VyIHN0YXJ0dXA/XFxuLSBXaGF0IGFyZSB0aGUgbWlsZXN0b25lcyBmb3IgZWFjaCBzdGFnZSBvZiB5b3VyIHN0YXJ0dXAncyBkZXZlbG9wbWVudD9cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgIDx0ZXh0YXJlYVxyXG4gICAgICAgICAgICAgICAgICAgIGF1dG9Db21wbGV0ZT1cIm5vbmVcIlxyXG4gICAgICAgICAgICAgICAgICAgIGlkPVwiYnVzaW5lc3NHcm93XCJcclxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldEJ1c2luZXNzR3Jvd1NlY3Rpb24oZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXtidXNpbmVzc0dyb3dTZWN0aW9uID09ICdibGFuaycgPyAnJyA6IGJ1c2luZXNzR3Jvd1NlY3Rpb259XHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicGItMjQgcHgtMyBzaGFkb3cgYXBwZWFyYW5jZS1ub25lIHJvdW5kZWQgdy1mdWxsIHB5LTMgcHgtNCB0ZXh0LXByaW1hcnlkYXJrIGxlYWRpbmctdGlnaHQgZm9jdXM6b3V0bGluZS1ub25lIGZvY3VzOnNoYWRvdy1vdXRsaW5lIHRleHQtc20gYmctd2hpdGUgcm91bmRlZC0yeGwgbXQtMlwiXHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRhcmVhXCJcclxuICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj17J+KAnFNlZSB0aGluZ3MgaW4gdGhlIHByZXNlbnQsIGV2ZW4gaWYgdGhleSBhcmUgaW4gdGhlIGZ1dHVyZS7igJ1cXG5cXG5+IExhcnJ5IEVsbGlzb24nfVxyXG4gICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm10LTEyIHBiLThcIj5cclxuICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImJsb2NrIHRleHQtc20gZm9udC1tZWRpdW0gZmxleCBqdXN0aWZ5LWJldHdlZW4gaXRlbXMtZW5kXCIgaHRtbEZvcj1cInN1Y2Nlc3NcIj5cclxuICAgICAgICAgICAgICAgICAgICBXaHkgaXMgaXQgeW91ciBpZGVhIHRoYXQgd2lsbCBiZSBzdWNjZXNzZnVsP1xyXG4gICAgICAgICAgICAgICAgICAgIDxUaXBweUd1aWRlXHJcbiAgICAgICAgICAgICAgICAgICAgICBhbmdyeVxyXG4gICAgICAgICAgICAgICAgICAgICAgY29udGVudENsYXNzPVwidy04MCBzaGFkb3ctbGcgcm91bmRlZC0yeGwgYmctcHJpbWFyeVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBjb250ZW50VGV4dD17XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICcgV2hhdCBlbHNlIGFyZSB5b3Ugd2FpdGluZyBmb3I/IEdldCBpdCBvZmYgeW91ciBjaGVzdCBhbmQgdGVsbCB0aGUgd2hvbGUgd29ybGQsIGhvdyBzdHJvbmcgeW91ciBtb3RpdmF0aW9uIGlzIHRvIGJ1aWxkIGEgbmV3IHN0YXJ0dXAhJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgIDx0ZXh0YXJlYVxyXG4gICAgICAgICAgICAgICAgICAgIGF1dG9Db21wbGV0ZT1cIm5vbmVcIlxyXG4gICAgICAgICAgICAgICAgICAgIGlkPVwic3VjY2Vzc1wiXHJcbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRXaHlTdWNjZXNzU2VjdGlvbihlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3doeVN1Y2Nlc3NTZWN0aW9uID09ICdibGFuaycgPyAnJyA6IHdoeVN1Y2Nlc3NTZWN0aW9ufVxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInBiLTI0IHB4LTMgc2hhZG93IGFwcGVhcmFuY2Utbm9uZSByb3VuZGVkIHctZnVsbCBweS0zIHB4LTQgdGV4dC1wcmltYXJ5ZGFyayBsZWFkaW5nLXRpZ2h0IGZvY3VzOm91dGxpbmUtbm9uZSBmb2N1czpzaGFkb3ctb3V0bGluZSB0ZXh0LXNtIGJnLXdoaXRlIHJvdW5kZWQtMnhsIG10LTJcIlxyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0YXJlYVwiXHJcbiAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9eyfigJxXaGV0aGVyIHlvdSB0aGluayB5b3UgY2FuLCBvciB0aGluayB5b3UgY2Fu4oCZdCDigJMgeW914oCZcmUgcmlnaHQu4oCdXFxuXFxufiBIZW5yeSBGb3JkJ31cclxuICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxociBzdHlsZT17eyB3aWR0aDogJzkwJScsIGNvbG9yOiAnI2EwYWVjMCcgfX0gLz5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbCBncmlkIGdyaWQtY29scy0zZnIgZ3JpZC1mbG93LWNvbHVtbiBweC04IHB5LTRcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgbXQtMSB0ZXh0LXByaW1hcnlkYXJrIHRleHQtc21cIj5cclxuICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtvblByb2plY3RMZWF2ZX0+QmFjazwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIG10LTEganVzdGlmeS1zZWxmLWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXNtIHRleHQtZ3JheVwiPlN0ZXAgNSBvZiA1PC9wPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1lbmQgaXRlbXMtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZD17dGlwcHlNb25zdGVyfVxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e29uU3VibWl0fVxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImhvdmVyOmJnLXByaW1hcnkgaG92ZXI6dGV4dC13aGl0ZSBkYXJrOmhvdmVyOmJnLXByaW1hcnlkYXJrIGRhcms6aG92ZXI6dGV4dC1iYWNrZ3JvdW5kIGZvY3VzOm91dGxpbmUtbm9uZSBib3JkZXIgYm9yZGVyLXByaW1hcnkgdGV4dC1wcmltYXJ5IHRleHQtc20gZm9udC1saWdodCBweS0yIHB4LTggcm91bmRlZC0yeGwgZGFyazp0ZXh0LXByaW1hcnlkYXJrIGRhcms6Ym9yZGVyLXByaW1hcnlkYXJrXCJcclxuICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIE5leHRcclxuICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9OYXZiYXJUZW1wbGF0ZT5cclxuICAgIDwvPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTdGFydHVwUHJvZHVjdE1vZGFsO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9