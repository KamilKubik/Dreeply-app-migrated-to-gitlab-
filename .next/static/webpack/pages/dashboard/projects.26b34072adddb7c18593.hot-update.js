webpackHotUpdate_N_E("pages/dashboard/projects",{

/***/ "./components/dashboard/startup/StartupSuccess.js":
/*!********************************************************!*\
  !*** ./components/dashboard/startup/StartupSuccess.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var C_off_saas_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var C_off_saas_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/regenerator */ "./node_modules/next/node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var C_off_saas_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(C_off_saas_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var C_off_saas_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _lib_firebase__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../lib/firebase */ "./lib/firebase.js");
/* harmony import */ var _lib_newAuth__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../lib/newAuth */ "./lib/newAuth.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! gsap */ "./node_modules/gsap/index.js");
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! file-saver */ "./node_modules/file-saver/dist/FileSaver.min.js");
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(file_saver__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _react_pdf_renderer__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @react-pdf/renderer */ "./node_modules/@react-pdf/renderer/lib/react-pdf.browser.es.js");
/* harmony import */ var _Tippy__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../Tippy */ "./components/dashboard/Tippy.js");
/* harmony import */ var _PDFDocument__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./PDFDocument */ "./components/dashboard/startup/PDFDocument.js");
/* harmony import */ var _AnimatedBackground__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./AnimatedBackground */ "./components/dashboard/startup/AnimatedBackground.js");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! js-cookie */ "./node_modules/js-cookie/src/js.cookie.js");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _ExitComponent__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./ExitComponent */ "./components/dashboard/startup/ExitComponent.js");






var _jsxFileName = "C:\\off-saas\\components\\dashboard\\startup\\StartupSuccess.js",
    _this = undefined,
    _s = $RefreshSig$();














var StartupSuccess = function StartupSuccess(_ref) {
  _s();

  var managerPage = _ref.managerPage;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(),
      projectId = _useState[0],
      setProjectId = _useState[1]; // STARTER


  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(''),
      ideaName = _useState2[0],
      setIdeaName = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(''),
      ideaDesc = _useState3[0],
      setIdeaDesc = _useState3[1];

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(''),
      ideaCountry = _useState4[0],
      setIdeaCountry = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(''),
      startupField = _useState5[0],
      setStartupField = _useState5[1];

  var _useState6 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(''),
      startupEmail = _useState6[0],
      setStartupEmail = _useState6[1];

  var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(''),
      startupPhone = _useState7[0],
      setStartupPhone = _useState7[1]; // IMAGE


  var _useState8 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(''),
      imageNameExists = _useState8[0],
      setImageNameExists = _useState8[1];

  var _useState9 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(''),
      avatarExists = _useState9[0],
      setAvatarExists = _useState9[1]; // OVERVIEW


  var _useState10 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(''),
      marketProblemSection = _useState10[0],
      setMarketProblemSection = _useState10[1];

  var _useState11 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(''),
      marketSolutionSection = _useState11[0],
      setMarketSolutionSection = _useState11[1];

  var _useState12 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(''),
      foundersSection = _useState12[0],
      setFoundersSection = _useState12[1]; // PRODUCT


  var _useState13 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(''),
      productOverviewSection = _useState13[0],
      setProductOverviewSection = _useState13[1];

  var _useState14 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(''),
      productPromotionSection = _useState14[0],
      setProductPromotionSection = _useState14[1];

  var _useState15 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(''),
      productBenefitsSection = _useState15[0],
      setProductBenefitsSection = _useState15[1]; // MARKET


  var _useState16 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(''),
      marketOverviewSection = _useState16[0],
      setMarketOverviewSection = _useState16[1];

  var _useState17 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(''),
      competitorsSection = _useState17[0],
      setCompetitorsSection = _useState17[1];

  var _useState18 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(''),
      competitionDistinguishSection = _useState18[0],
      setCompetitionDistinguishSection = _useState18[1];

  var _useState19 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(''),
      targetCustomersSection = _useState19[0],
      setTargetCustomersSection = _useState19[1]; // FINANCES


  var _useState20 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(''),
      startupCostsSection = _useState20[0],
      setStartupCostsSection = _useState20[1];

  var _useState21 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(''),
      runningCostsSection = _useState21[0],
      setRunningCostsSection = _useState21[1];

  var _useState22 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(''),
      financingSection = _useState22[0],
      setFinancingSection = _useState22[1]; // BUSINESS MODEL


  var _useState23 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(''),
      businessModelOverviewSection = _useState23[0],
      setBusinessModelOverviewSection = _useState23[1];

  var _useState24 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(''),
      businessGrowSection = _useState24[0],
      setBusinessGrowSection = _useState24[1];

  var _useState25 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(''),
      whySuccessSection = _useState25[0],
      setWhySuccessSection = _useState25[1];

  var _useAuth = Object(_lib_newAuth__WEBPACK_IMPORTED_MODULE_6__["useAuth"])(),
      currentUser = _useAuth.currentUser;

  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_7__["useRouter"])();
  var contentRef = Object(react__WEBPACK_IMPORTED_MODULE_4__["useRef"])(); // Data fetch

  var _useState26 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(false),
      loadingHelper = _useState26[0],
      setLoadingHelper = _useState26[1];

  var _useState27 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(''),
      documentId = _useState27[0],
      setDocumentId = _useState27[1];

  Object(react__WEBPACK_IMPORTED_MODULE_4__["useEffect"])(function () {
    var userUid = js_cookie__WEBPACK_IMPORTED_MODULE_14___default.a.get('uid');
    gsap__WEBPACK_IMPORTED_MODULE_8__["default"].fromTo(contentRef.current, {
      autoAlpha: 0
    }, {
      autoAlpha: 1,
      duration: 1,
      ease: gsap__WEBPACK_IMPORTED_MODULE_8__["Linear"].easeIn
    });

    if (userUid && router.query.project) {
      var _data = _lib_firebase__WEBPACK_IMPORTED_MODULE_5__["db"].collection('projects').where('uid', '==', userUid);

      _data.where('projectName', '==', router.query.project).get().then(function (querySnapshot) {
        querySnapshot.forEach( /*#__PURE__*/function () {
          var _ref2 = Object(C_off_saas_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__["default"])( /*#__PURE__*/C_off_saas_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.mark(function _callee(doc1) {
            var initialData;
            return C_off_saas_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    initialData = doc1.data();
                    setProjectId(initialData.projectId); // STARTER;

                    setIdeaName(initialData.projectName);
                    setIdeaDesc(initialData.projectDescription);
                    setIdeaCountry(initialData.projectCountry);
                    setStartupField(initialData.projectField);
                    setStartupEmail(initialData.projectEmail);
                    setStartupPhone(initialData.projectNumber); // IMAGE

                    setImageNameExists(initialData.imageName);
                    setAvatarExists(initialData.imageFileUrl);
                    _lib_firebase__WEBPACK_IMPORTED_MODULE_5__["db"].collection('projects').doc(initialData.projectId).collection('startupIdea').doc(router.query.project).collection('inputs').onSnapshot(function (serverUpdate) {
                      serverUpdate.docs.map(function (doc) {
                        console.log(doc.data());
                        var data = doc.data();
                        setDocumentId(doc.id); // OVERVIEW

                        setMarketProblemSection(data.marketProblemSectionData);
                        setMarketSolutionSection(data.marketSolutionSectionData);
                        setFoundersSection(data.foundersSectionData); // PRODUCT

                        setProductOverviewSection(data.productOverviewSectionData);
                        setProductPromotionSection(data.productPromotionSectionData);
                        setProductBenefitsSection(data.productBenefitsSectionData); // MARKET

                        setMarketOverviewSection(data.marketOverviewSectionData);
                        setCompetitorsSection(data.competitorsSectionData);
                        setCompetitionDistinguishSection(data.competitionDistinguishSectionData);
                        setTargetCustomersSection(data.targetCustomersSectionData); // FINANCES

                        setStartupCostsSection(data.startupCostsSectionData);
                        setRunningCostsSection(data.runningCostsSectionData);
                        setFinancingSection(data.financingSectionData); // BUSINESS MODEL

                        setBusinessModelOverviewSection(data.businessModelOverviewSectionData);
                        setBusinessGrowSection(data.businessGrowSectionData);
                        setWhySuccessSection(data.whySuccessSectionData);
                        setLoadingHelper(false);
                      });
                    });

                  case 11:
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
  var image = avatarExists != 'blank' ? avatarExists : imageNameExists;
  console.log(image);
  var data = {
    ideaName: ideaName,
    ideaDesc: ideaDesc,
    ideaCountry: ideaCountry,
    startupField: startupField,
    startupEmail: startupEmail,
    startupPhone: startupPhone,
    imageNameExists: imageNameExists,
    avatarExists: avatarExists,
    marketProblemSection: marketProblemSection,
    marketSolutionSection: marketSolutionSection,
    foundersSection: foundersSection,
    productOverviewSection: productOverviewSection,
    productPromotionSection: productPromotionSection,
    productBenefitsSection: productBenefitsSection,
    marketOverviewSection: marketOverviewSection,
    competitorsSection: competitorsSection,
    targetCustomersSection: targetCustomersSection,
    competitionDistinguishSection: competitionDistinguishSection,
    startupCostsSection: startupCostsSection,
    runningCostsSection: runningCostsSection,
    financingSection: financingSection,
    businessModelOverviewSection: businessModelOverviewSection,
    businessGrowSection: businessGrowSection,
    whySuccessSection: whySuccessSection
  };

  var onProjectLeave = /*#__PURE__*/function () {
    var _ref3 = Object(C_off_saas_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__["default"])( /*#__PURE__*/C_off_saas_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.mark(function _callee2(e) {
      return C_off_saas_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              e.preventDefault();
              gsap__WEBPACK_IMPORTED_MODULE_8__["default"].to(contentRef.current, {
                autoAlpha: 0,
                duration: 1,
                ease: gsap__WEBPACK_IMPORTED_MODULE_8__["Linear"].easeOut
              });
              setTimeout(function () {
                router.push("/dashboard/projects/".concat(router.query.project, "/startup-idea/business-model"));
              }, 1200);

            case 3:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }));

    return function onProjectLeave(_x2) {
      return _ref3.apply(this, arguments);
    };
  }(); // ------------------------------------------------------------- PDF -----------------------------------------------------------------
  // const delay = (t) => new Promise((resolve) => setTimeout(resolve, t));
  // async function getProps() {
  //   await delay(1_000);
  //   return {
  //     someString: 'You waited 1 second for this',
  //   };
  // }


  _react_pdf_renderer__WEBPACK_IMPORTED_MODULE_10__["Font"].register({
    src: '/fonts/poppins.ttf',
    family: 'Poppins'
  });
  _react_pdf_renderer__WEBPACK_IMPORTED_MODULE_10__["Font"].register({
    src: '/fonts/comfortaa.ttf',
    family: 'Comfortaa'
  });
  var styles = _react_pdf_renderer__WEBPACK_IMPORTED_MODULE_10__["StyleSheet"].create({
    // START HOMEPAGE SECTION
    homePage: {
      fontFamily: 'Comfortaa',
      backgroundColor: '#f8f9fb',
      flexDirection: 'row'
    },
    homePageTitleSection: {
      width: '100%',
      textAlign: 'center',
      marginTop: 40
    },
    homePageTitle: {
      fontSize: 26,
      color: '#0a1230'
    },
    homePageDesc: {
      fontSize: 16,
      color: '#a0aec0'
    },
    image: {
      height: '200px',
      width: '200px',
      display: 'block',
      marginLeft: 'auto',
      marginRight: 'auto',
      marginTop: 22
    },
    leftDescBlock: {
      width: '75%',
      backgroundColor: '#6C63FF',
      textAlign: 'left',
      marginTop: '32px',
      borderTopRightRadius: 50
    },
    leftDescBlockText: {
      fontSize: 14,
      padding: 32,
      lineHeight: 1.4,
      color: '#f8f9fb'
    },
    rightBar: {
      height: '100vh',
      width: '15px',
      backgroundColor: '#6C63FF',
      position: 'absolute',
      right: '5%'
    },
    rightBarContact: {
      color: '#f8f9fb',
      fontSize: 14,
      width: '50%',
      backgroundColor: '#6C63FF',
      position: 'absolute',
      bottom: '10%',
      right: '5%',
      padding: 32,
      borderTopLeftRadius: 50
    },
    countryText: {
      marginTop: 6
    },
    emailText: {
      marginTop: 6
    },
    phoneNumberText: {
      marginTop: 6
    },
    grayBarOne: {
      height: '25%',
      width: '2px',
      backgroundColor: '#a0aec0',
      position: 'absolute',
      bottom: '3%',
      left: '10%'
    },
    grayBarTwo: {
      height: '2px',
      width: '20%',
      backgroundColor: '#a0aec0',
      position: 'absolute',
      bottom: '5%',
      left: '5%'
    },
    // END START HOMEPAGE SECTION
    // START OVERVIEW SECTION
    overviewPage: {
      fontFamily: 'Comfortaa',
      backgroundColor: '#f8f9fb',
      paddingTop: 35,
      paddingBottom: 35
    },
    overviewHeading: {
      fontSize: 22,
      color: '#0a1230',
      marginLeft: 28
    },
    overviewSubtitle: {
      fontSize: 14,
      color: '#a0aec0'
    },
    overviewImage: {
      height: '20px',
      width: '20px',
      position: 'absolute',
      top: 37,
      left: 30
    },
    overviewSection: {
      // padding: '5%',
      // paddingTop: '5%',
      paddingBottom: '5%',
      paddingLeft: '5%',
      paddingRight: '5%'
    },
    sectionContainerOne: {
      marginTop: 30
    },
    sectionHeadingOne: {
      color: '#0a1230',
      fontSize: 16
    },
    sectionText: {
      color: '#0a1230',
      fontSize: 12,
      paddingTop: 8,
      paddingRight: 50
    },
    sectionContainerTwo: {
      paddingTop: 30
    },
    sectionHeadingTwo: {
      color: '#0a1230',
      fontSize: 16
    },
    sectionContainerThree: {
      paddingTop: 36,
      paddingBottom: 26
    },
    sectionHeadingThree: {
      color: '#0a1230',
      fontSize: 16
    },
    // END OVERVIEW SECTION
    // START TABLE OF CONTENTS SECTION
    contentsPage: {
      fontFamily: 'Comfortaa'
    },
    contentsLeftBar: {
      height: '100%',
      width: '40%',
      backgroundColor: '#6C63FF',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'baseline',
      color: '#f8f9fb',
      paddingLeft: 35,
      fontSize: 20,
      lineHeight: 4,
      position: 'relative'
    },
    contentsBarOne: {
      width: 200,
      height: 2,
      backgroundColor: '#a0aec0',
      position: 'absolute',
      top: '37%',
      left: '100%',
      transform: 'translate(-50%, -50%)'
    },
    contentsBarTwo: {
      width: 200,
      height: 2,
      backgroundColor: '#a0aec0',
      position: 'absolute',
      top: '46.5%',
      left: '100%',
      transform: 'translate(-50%, -50%)'
    },
    contentsBarThree: {
      width: 200,
      height: 2,
      backgroundColor: '#a0aec0',
      position: 'absolute',
      top: '56%',
      left: '100%',
      transform: 'translate(-50%, -50%)'
    },
    contentsBarFour: {
      width: 200,
      height: 2,
      backgroundColor: '#a0aec0',
      position: 'absolute',
      top: '65.5%',
      left: '100%',
      transform: 'translate(-50%, -50%)'
    },
    contentsBarFive: {
      width: 200,
      height: 2,
      backgroundColor: '#a0aec0',
      position: 'absolute',
      top: '74.75%',
      left: '100%',
      transform: 'translate(-50%, -50%)'
    },
    contentsRightBar: {
      height: '100%',
      width: '60%',
      position: 'absolute',
      right: '0',
      display: 'flex',
      alignItems: 'center',
      fontSize: 12,
      color: '#0a1230',
      // paddingHorizontal: 64,
      paddingRight: 80,
      paddingLeft: 32
    },
    contentsRightTextOne: {
      position: 'absolute',
      top: '26.75%'
    },
    contentsRightTextTwo: {
      position: 'absolute',
      top: '36%'
    },
    contentsRightTextThree: {
      position: 'absolute',
      top: '45.5%'
    },
    contentsRightTextFour: {
      position: 'absolute',
      top: '55%'
    },
    contentsRightTextFive: {
      position: 'absolute',
      top: '64.25%'
    }
  });

  var MyDocument = function MyDocument(props) {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_10__["Document"], {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_10__["Page"], {
        size: "A4",
        style: styles.homePage,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_10__["View"], {
          style: styles.homePageTitleSection,
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_10__["Text"], {
            style: styles.homePageTitle,
            children: "Startup idea plan"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 423,
            columnNumber: 11
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_10__["Text"], {
            style: styles.homePageDesc,
            children: "Just a simple startup about tech field"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 424,
            columnNumber: 11
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_10__["Image"], {
            src: image,
            style: styles.image,
            height: "250px",
            width: "250px"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 425,
            columnNumber: 11
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_10__["View"], {
            style: styles.leftDescBlock,
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_10__["Text"], {
              style: styles.leftDescBlockText,
              children: ideaDesc
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 427,
              columnNumber: 13
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 426,
            columnNumber: 11
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 422,
          columnNumber: 9
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_10__["View"], {
          style: styles.rightBar
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 430,
          columnNumber: 9
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_10__["View"], {
          style: styles.rightBarContact,
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_10__["Text"], {
            children: startupField
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 432,
            columnNumber: 11
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_10__["Text"], {
            style: styles.countryText,
            children: ideaCountry
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 433,
            columnNumber: 11
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_10__["Text"], {
            style: styles.emailText,
            children: startupEmail
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 434,
            columnNumber: 11
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_10__["Text"], {
            style: styles.phoneNumberText,
            children: startupPhone
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 435,
            columnNumber: 11
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 431,
          columnNumber: 9
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_10__["View"], {
          style: styles.grayBarOne
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 437,
          columnNumber: 9
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_10__["View"], {
          style: styles.grayBarTwo
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 438,
          columnNumber: 9
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 421,
        columnNumber: 7
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_10__["Page"], {
        style: styles.contentsPage,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_10__["View"], {
          style: styles.rightBar,
          fixed: true
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 442,
          columnNumber: 9
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_10__["View"], {
          style: styles.contentsLeftBar,
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_10__["Text"], {
            children: "Startup overview"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 444,
            columnNumber: 11
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_10__["Text"], {
            children: "Product"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 445,
            columnNumber: 11
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_10__["Text"], {
            children: "Market analysis"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 446,
            columnNumber: 11
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_10__["Text"], {
            children: "Finances"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 447,
            columnNumber: 11
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_10__["Text"], {
            children: "Business model"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 448,
            columnNumber: 11
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_10__["View"], {
            style: styles.contentsBarOne
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 449,
            columnNumber: 11
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_10__["View"], {
            style: styles.contentsBarTwo
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 450,
            columnNumber: 11
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_10__["View"], {
            style: styles.contentsBarThree
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 451,
            columnNumber: 11
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_10__["View"], {
            style: styles.contentsBarFour
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 452,
            columnNumber: 11
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_10__["View"], {
            style: styles.contentsBarFive
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 453,
            columnNumber: 11
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 443,
          columnNumber: 9
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_10__["View"], {
          style: styles.contentsRightBar,
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_10__["Text"], {
            style: styles.contentsRightTextOne,
            children: "01. This section will help you better understand the startup vision"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 456,
            columnNumber: 11
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_10__["Text"], {
            style: styles.contentsRightTextTwo,
            children: "02. This section will introduce you to the vision of the product"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 457,
            columnNumber: 11
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_10__["Text"], {
            style: styles.contentsRightTextThree,
            children: "03. This section will reveal all the cards of the market"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 458,
            columnNumber: 11
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_10__["Text"], {
            style: styles.contentsRightTextFour,
            children: "04. Discover the costs of implementing our idea"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 459,
            columnNumber: 11
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_10__["Text"], {
            style: styles.contentsRightTextFive,
            children: "05. In the final section, you will discover the startup's business model"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 460,
            columnNumber: 11
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 455,
          columnNumber: 9
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 441,
        columnNumber: 7
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_10__["Page"], {
        style: styles.overviewPage,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_10__["View"], {
          style: styles.rightBar,
          fixed: true
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 465,
          columnNumber: 9
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_10__["Image"], {
          style: styles.overviewImage,
          src: "/pdf/idea.png",
          height: 20,
          width: 20
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 466,
          columnNumber: 9
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_10__["View"], {
          style: styles.overviewSection,
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_10__["Text"], {
            style: styles.overviewHeading,
            children: "Startup overview"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 468,
            columnNumber: 11
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_10__["Text"], {
            style: styles.overviewSubtitle,
            children: "This section will help you better understand the startup vision"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 469,
            columnNumber: 11
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_10__["View"], {
            style: styles.sectionContainerOne,
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_10__["Text"], {
              style: styles.sectionHeadingOne,
              children: "Market problem that needs to be solved"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 471,
              columnNumber: 13
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_10__["Text"], {
              style: styles.sectionText,
              children: marketProblemSection
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 472,
              columnNumber: 13
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 470,
            columnNumber: 11
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_10__["View"], {
            style: styles.sectionContainerTwo,
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_10__["Text"], {
              style: styles.sectionHeadingTwo,
              children: "Our startup solution for this problem"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 475,
              columnNumber: 13
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_10__["Text"], {
              style: styles.sectionText,
              children: marketSolutionSection
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 476,
              columnNumber: 13
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 474,
            columnNumber: 11
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_10__["View"], {
            style: styles.sectionContainerThree,
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_10__["Text"], {
              style: styles.sectionHeadingThree,
              children: "Who is behind the foundation of the future company?"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 479,
              columnNumber: 13
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_10__["Text"], {
              style: styles.sectionText,
              children: foundersSection
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 480,
              columnNumber: 13
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 478,
            columnNumber: 11
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 467,
          columnNumber: 9
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 464,
        columnNumber: 7
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_10__["Page"], {
        style: styles.overviewPage,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_10__["View"], {
          style: styles.rightBar,
          fixed: true
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 486,
          columnNumber: 9
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_10__["Image"], {
          style: styles.overviewImage,
          src: "/pdf/blueprint.png",
          height: 20,
          width: 20
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 487,
          columnNumber: 9
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_10__["View"], {
          style: styles.overviewSection,
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_10__["Text"], {
            style: styles.overviewHeading,
            children: "Product"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 489,
            columnNumber: 11
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_10__["Text"], {
            style: styles.overviewSubtitle,
            children: "This section will introduce you to the vision of the product"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 490,
            columnNumber: 11
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_10__["View"], {
            style: styles.sectionContainerOne,
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_10__["Text"], {
              style: styles.sectionHeadingOne,
              children: "What does the perfect version of the product look like?"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 492,
              columnNumber: 13
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_10__["Text"], {
              style: styles.sectionText,
              children: productOverviewSection
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 493,
              columnNumber: 13
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 491,
            columnNumber: 11
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_10__["View"], {
            style: styles.sectionContainerTwo,
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_10__["Text"], {
              style: styles.sectionHeadingTwo,
              children: "How will other people find out about the product?"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 496,
              columnNumber: 13
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_10__["Text"], {
              style: styles.sectionText,
              children: productPromotionSection
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 497,
              columnNumber: 13
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 495,
            columnNumber: 11
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_10__["View"], {
            style: styles.sectionContainerThree,
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_10__["Text"], {
              style: styles.sectionHeadingThree,
              children: "What benefits will this product brings to customers?"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 500,
              columnNumber: 13
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_10__["Text"], {
              style: styles.sectionText,
              children: productBenefitsSection
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 501,
              columnNumber: 13
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 499,
            columnNumber: 11
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 488,
          columnNumber: 9
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 485,
        columnNumber: 7
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_10__["Page"], {
        style: styles.overviewPage,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_10__["View"], {
          style: styles.rightBar,
          fixed: true
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 507,
          columnNumber: 9
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_10__["Image"], {
          style: styles.overviewImage,
          src: "/pdf/unicorn.png",
          height: 20,
          width: 20
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 508,
          columnNumber: 9
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_10__["View"], {
          style: styles.overviewSection,
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_10__["Text"], {
            style: styles.overviewHeading,
            children: "Market analysis"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 510,
            columnNumber: 11
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_10__["Text"], {
            style: styles.overviewSubtitle,
            children: "This section will reveal all the cards of the market"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 511,
            columnNumber: 11
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_10__["View"], {
            style: styles.sectionContainerOne,
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_10__["Text"], {
              style: styles.sectionHeadingOne,
              children: "A general view of the market that can be obtained"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 513,
              columnNumber: 13
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_10__["Text"], {
              style: styles.sectionText,
              children: marketOverviewSection
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 514,
              columnNumber: 13
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 512,
            columnNumber: 11
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_10__["View"], {
            style: styles.sectionContainerTwo,
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_10__["Text"], {
              style: styles.sectionHeadingTwo,
              children: "What is the main competition on the market?"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 517,
              columnNumber: 13
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_10__["Text"], {
              style: styles.sectionText,
              children: competitorsSection
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 518,
              columnNumber: 13
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 516,
            columnNumber: 11
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_10__["View"], {
            style: styles.sectionContainerTwo,
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_10__["Text"], {
              style: styles.sectionHeadingTwo,
              children: "What makes a startup stand out from the competition?"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 521,
              columnNumber: 13
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_10__["Text"], {
              style: styles.sectionText,
              children: competitionDistinguishSection
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 522,
              columnNumber: 13
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 520,
            columnNumber: 11
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_10__["View"], {
            style: styles.sectionContainerThree,
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_10__["Text"], {
              style: styles.sectionHeadingThree,
              children: "Who are the target customers of the startup?"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 525,
              columnNumber: 13
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_10__["Text"], {
              style: styles.sectionText,
              children: targetCustomersSection
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 526,
              columnNumber: 13
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 524,
            columnNumber: 11
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 509,
          columnNumber: 9
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 506,
        columnNumber: 7
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_10__["Page"], {
        style: styles.overviewPage,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_10__["View"], {
          style: styles.rightBar,
          fixed: true
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 532,
          columnNumber: 9
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_10__["Image"], {
          style: styles.overviewImage,
          src: "/pdf/budget.png",
          height: 20,
          width: 20
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 533,
          columnNumber: 9
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_10__["View"], {
          style: styles.overviewSection,
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_10__["Text"], {
            style: styles.overviewHeading,
            children: "Finances"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 535,
            columnNumber: 11
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_10__["Text"], {
            style: styles.overviewSubtitle,
            children: "Discover the costs of implementing our idea"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 536,
            columnNumber: 11
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_10__["View"], {
            style: styles.sectionContainerOne,
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_10__["Text"], {
              style: styles.sectionHeadingOne,
              children: "How much money will it take to launch the startup?"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 538,
              columnNumber: 13
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_10__["Text"], {
              style: styles.sectionText,
              children: startupCostsSection
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 539,
              columnNumber: 13
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 537,
            columnNumber: 11
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_10__["View"], {
            style: styles.sectionContainerTwo,
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_10__["Text"], {
              style: styles.sectionHeadingTwo,
              children: "Approximate costs of maintaining a startup"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 542,
              columnNumber: 13
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_10__["Text"], {
              style: styles.sectionText,
              children: runningCostsSection
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 543,
              columnNumber: 13
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 541,
            columnNumber: 11
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_10__["View"], {
            style: styles.sectionContainerThree,
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_10__["Text"], {
              style: styles.sectionHeadingThree,
              children: "How does the idea will be fund?"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 546,
              columnNumber: 13
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_10__["Text"], {
              style: styles.sectionText,
              children: financingSection
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 547,
              columnNumber: 13
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 545,
            columnNumber: 11
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 534,
          columnNumber: 9
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 531,
        columnNumber: 7
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_10__["Page"], {
        style: styles.overviewPage,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_10__["View"], {
          style: styles.rightBar,
          fixed: true
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 553,
          columnNumber: 9
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_10__["Image"], {
          style: styles.overviewImage,
          src: "/pdf/startup.png",
          height: 20,
          width: 20
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 554,
          columnNumber: 9
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_10__["View"], {
          style: styles.overviewSection,
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_10__["Text"], {
            style: styles.overviewHeading,
            children: "Business model"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 556,
            columnNumber: 11
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_10__["Text"], {
            style: styles.overviewSubtitle,
            children: "In the final section, you will discover the startup's business model"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 557,
            columnNumber: 11
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_10__["View"], {
            style: styles.sectionContainerOne,
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_10__["Text"], {
              style: styles.sectionHeadingOne,
              children: "What will the startup's business model look like?"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 559,
              columnNumber: 13
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_10__["Text"], {
              style: styles.sectionText,
              children: businessModelOverviewSection
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 560,
              columnNumber: 13
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 558,
            columnNumber: 11
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_10__["View"], {
            style: styles.sectionContainerTwo,
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_10__["Text"], {
              style: styles.sectionHeadingTwo,
              children: "Predictions for startup growth"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 563,
              columnNumber: 13
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_10__["Text"], {
              style: styles.sectionText,
              children: businessGrowSection
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 564,
              columnNumber: 13
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 562,
            columnNumber: 11
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_10__["View"], {
            style: styles.sectionContainerThree,
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_10__["Text"], {
              style: styles.sectionHeadingThree,
              children: "Why is it that startup that will conquer the world?"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 567,
              columnNumber: 13
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_10__["Text"], {
              style: styles.sectionText,
              children: whySuccessSection
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 568,
              columnNumber: 13
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 566,
            columnNumber: 11
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 555,
          columnNumber: 9
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 552,
        columnNumber: 7
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 420,
      columnNumber: 5
    }, _this);
  }; // const [numPages, setNumPages] = useState(null);
  // const MyDocument = (props) => (
  //   <Document
  //     file={props.data}
  //     onLoadSuccess={({ numPages }) => setNumPages(numPages)}
  //   >
  //     {Array.apply(null, Array(numPages))
  //       .map((x, i) => i + 1)
  //       .map((page) => (
  //         <Page pageNumber={page} style={styles.page}>
  //           <View style={styles.section}>
  //           </View>
  //         </Page>
  //       ))}
  //   </Document>
  // );


  return Object(react__WEBPACK_IMPORTED_MODULE_4__["useMemo"])(function () {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
      children: managerPage ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "flex",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
          src: "/mobile-navbar/pdf.svg",
          onClick: /*#__PURE__*/function () {
            var _ref4 = Object(C_off_saas_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__["default"])( /*#__PURE__*/C_off_saas_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.mark(function _callee3(e) {
              var doc, asPdf, blob;
              return C_off_saas_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.wrap(function _callee3$(_context3) {
                while (1) {
                  switch (_context3.prev = _context3.next) {
                    case 0:
                      e.preventDefault();
                      doc = /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_PDFDocument__WEBPACK_IMPORTED_MODULE_12__["default"], {
                        data: data
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 602,
                        columnNumber: 29
                      }, _this);
                      asPdf = Object(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_10__["pdf"])([]); // {} is important, throws without an argument

                      asPdf.updateContainer(doc);
                      _context3.next = 6;
                      return asPdf.toBlob();

                    case 6:
                      blob = _context3.sent;
                      Object(file_saver__WEBPACK_IMPORTED_MODULE_9__["saveAs"])(blob, "".concat(ideaName, "/idea-plan.pdf"));

                    case 8:
                    case "end":
                      return _context3.stop();
                  }
                }
              }, _callee3);
            }));

            return function (_x3) {
              return _ref4.apply(this, arguments);
            };
          }(),
          height: 26,
          width: 26
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 598,
          columnNumber: 13
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", Object(C_off_saas_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])({
          className: "cursor-pointer ml-2",
          src: "/mobile-navbar/foreign.svg",
          height: 28,
          width: 28
        }, "className", "h-full"), void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 611,
          columnNumber: 13
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 597,
        columnNumber: 11
      }, _this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_ExitComponent__WEBPACK_IMPORTED_MODULE_15__["default"], {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 615,
          columnNumber: 13
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          ref: contentRef,
          className: "h-screen w-full relative flex flex-col items-center justify-center",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("ul", {
            className: "circles",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 618,
              columnNumber: 17
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 619,
              columnNumber: 17
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 620,
              columnNumber: 17
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 621,
              columnNumber: 17
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 622,
              columnNumber: 17
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 623,
              columnNumber: 17
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 624,
              columnNumber: 17
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 625,
              columnNumber: 17
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 626,
              columnNumber: 17
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 627,
              columnNumber: 17
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 629,
              columnNumber: 17
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 630,
              columnNumber: 17
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 631,
              columnNumber: 17
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 632,
              columnNumber: 17
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 633,
              columnNumber: 17
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 634,
              columnNumber: 17
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 635,
              columnNumber: 17
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 636,
              columnNumber: 17
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 637,
              columnNumber: 17
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 638,
              columnNumber: 17
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 639,
              columnNumber: 17
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 640,
              columnNumber: 17
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 641,
              columnNumber: 17
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 642,
              columnNumber: 17
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 643,
              columnNumber: 17
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 644,
              columnNumber: 17
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 645,
              columnNumber: 17
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 646,
              columnNumber: 17
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 647,
              columnNumber: 17
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 648,
              columnNumber: 17
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 617,
            columnNumber: 15
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "flex flex-col items-center justify-center w-full max-w-screen-md relative pl-6 pr-6 mt-16 pb-24",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
              className: "text-primarydark text-2xl normal:text-3xl mt-2 pl-2 dark:text-background text-center",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
                src: "/gifs/popper.gif",
                height: 60,
                width: 60,
                className: "inline-block relative bottom-4 left-3"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 652,
                columnNumber: 19
              }, _this), "Congratulations!"]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 651,
              columnNumber: 17
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
              className: "text-gray text-base normal:text-lg pl-2 dark:text-background text-center",
              children: "Now you can save your idea and set off to conquer the world"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 655,
              columnNumber: 17
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
              src: "/success.svg",
              height: 200,
              width: 200,
              className: "mt-4"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 658,
              columnNumber: 17
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
                className: "z-10 mr-4 mt-6 hover:bg-primary hover:text-white dark:hover:bg-primarydark dark:hover:text-background focus:outline-none border border-primary text-primary text-sm font-light py-2 px-8 rounded-2xl dark:text-primarydark dark:border-primarydark",
                onClick: onProjectLeave,
                children: "Back"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 660,
                columnNumber: 19
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
                className: "z-10 ml-4 mt-6 hover:bg-primary hover:text-white dark:hover:bg-primarydark dark:hover:text-background focus:outline-none border border-primary text-primary text-sm font-light py-2 px-8 rounded-2xl dark:text-primarydark dark:border-primarydark",
                onClick: /*#__PURE__*/function () {
                  var _ref5 = Object(C_off_saas_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__["default"])( /*#__PURE__*/C_off_saas_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.mark(function _callee4(e) {
                    var doc, asPdf, blob;
                    return C_off_saas_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.wrap(function _callee4$(_context4) {
                      while (1) {
                        switch (_context4.prev = _context4.next) {
                          case 0:
                            e.preventDefault();
                            doc = /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_PDFDocument__WEBPACK_IMPORTED_MODULE_12__["default"], {
                              data: data
                            }, void 0, false, {
                              fileName: _jsxFileName,
                              lineNumber: 670,
                              columnNumber: 35
                            }, _this);
                            asPdf = Object(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_10__["pdf"])([]); // {} is important, throws without an argument

                            asPdf.updateContainer(doc);
                            _context4.next = 6;
                            return asPdf.toBlob();

                          case 6:
                            blob = _context4.sent;
                            Object(file_saver__WEBPACK_IMPORTED_MODULE_9__["saveAs"])(blob, "".concat(ideaName, "/idea-plan.pdf"));

                          case 8:
                          case "end":
                            return _context4.stop();
                        }
                      }
                    }, _callee4);
                  }));

                  return function (_x4) {
                    return _ref5.apply(this, arguments);
                  };
                }(),
                children: "Save"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 666,
                columnNumber: 19
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 659,
              columnNumber: 17
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 650,
            columnNumber: 15
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 616,
          columnNumber: 13
        }, _this)]
      }, void 0, true)
    }, void 0, false);
  }, [data]);
};

_s(StartupSuccess, "6kvqjumuXUGmSOS5G/9tNAFzo18=", false, function () {
  return [_lib_newAuth__WEBPACK_IMPORTED_MODULE_6__["useAuth"], next_router__WEBPACK_IMPORTED_MODULE_7__["useRouter"]];
});

_c = StartupSuccess;
/* harmony default export */ __webpack_exports__["default"] = (StartupSuccess);

var _c;

$RefreshReg$(_c, "StartupSuccess");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9kYXNoYm9hcmQvc3RhcnR1cC9TdGFydHVwU3VjY2Vzcy5qcyJdLCJuYW1lcyI6WyJTdGFydHVwU3VjY2VzcyIsIm1hbmFnZXJQYWdlIiwidXNlU3RhdGUiLCJwcm9qZWN0SWQiLCJzZXRQcm9qZWN0SWQiLCJpZGVhTmFtZSIsInNldElkZWFOYW1lIiwiaWRlYURlc2MiLCJzZXRJZGVhRGVzYyIsImlkZWFDb3VudHJ5Iiwic2V0SWRlYUNvdW50cnkiLCJzdGFydHVwRmllbGQiLCJzZXRTdGFydHVwRmllbGQiLCJzdGFydHVwRW1haWwiLCJzZXRTdGFydHVwRW1haWwiLCJzdGFydHVwUGhvbmUiLCJzZXRTdGFydHVwUGhvbmUiLCJpbWFnZU5hbWVFeGlzdHMiLCJzZXRJbWFnZU5hbWVFeGlzdHMiLCJhdmF0YXJFeGlzdHMiLCJzZXRBdmF0YXJFeGlzdHMiLCJtYXJrZXRQcm9ibGVtU2VjdGlvbiIsInNldE1hcmtldFByb2JsZW1TZWN0aW9uIiwibWFya2V0U29sdXRpb25TZWN0aW9uIiwic2V0TWFya2V0U29sdXRpb25TZWN0aW9uIiwiZm91bmRlcnNTZWN0aW9uIiwic2V0Rm91bmRlcnNTZWN0aW9uIiwicHJvZHVjdE92ZXJ2aWV3U2VjdGlvbiIsInNldFByb2R1Y3RPdmVydmlld1NlY3Rpb24iLCJwcm9kdWN0UHJvbW90aW9uU2VjdGlvbiIsInNldFByb2R1Y3RQcm9tb3Rpb25TZWN0aW9uIiwicHJvZHVjdEJlbmVmaXRzU2VjdGlvbiIsInNldFByb2R1Y3RCZW5lZml0c1NlY3Rpb24iLCJtYXJrZXRPdmVydmlld1NlY3Rpb24iLCJzZXRNYXJrZXRPdmVydmlld1NlY3Rpb24iLCJjb21wZXRpdG9yc1NlY3Rpb24iLCJzZXRDb21wZXRpdG9yc1NlY3Rpb24iLCJjb21wZXRpdGlvbkRpc3Rpbmd1aXNoU2VjdGlvbiIsInNldENvbXBldGl0aW9uRGlzdGluZ3Vpc2hTZWN0aW9uIiwidGFyZ2V0Q3VzdG9tZXJzU2VjdGlvbiIsInNldFRhcmdldEN1c3RvbWVyc1NlY3Rpb24iLCJzdGFydHVwQ29zdHNTZWN0aW9uIiwic2V0U3RhcnR1cENvc3RzU2VjdGlvbiIsInJ1bm5pbmdDb3N0c1NlY3Rpb24iLCJzZXRSdW5uaW5nQ29zdHNTZWN0aW9uIiwiZmluYW5jaW5nU2VjdGlvbiIsInNldEZpbmFuY2luZ1NlY3Rpb24iLCJidXNpbmVzc01vZGVsT3ZlcnZpZXdTZWN0aW9uIiwic2V0QnVzaW5lc3NNb2RlbE92ZXJ2aWV3U2VjdGlvbiIsImJ1c2luZXNzR3Jvd1NlY3Rpb24iLCJzZXRCdXNpbmVzc0dyb3dTZWN0aW9uIiwid2h5U3VjY2Vzc1NlY3Rpb24iLCJzZXRXaHlTdWNjZXNzU2VjdGlvbiIsInVzZUF1dGgiLCJjdXJyZW50VXNlciIsInJvdXRlciIsInVzZVJvdXRlciIsImNvbnRlbnRSZWYiLCJ1c2VSZWYiLCJsb2FkaW5nSGVscGVyIiwic2V0TG9hZGluZ0hlbHBlciIsImRvY3VtZW50SWQiLCJzZXREb2N1bWVudElkIiwidXNlRWZmZWN0IiwidXNlclVpZCIsIkNvb2tpZXMiLCJnZXQiLCJnc2FwIiwiZnJvbVRvIiwiY3VycmVudCIsImF1dG9BbHBoYSIsImR1cmF0aW9uIiwiZWFzZSIsIkxpbmVhciIsImVhc2VJbiIsInF1ZXJ5IiwicHJvamVjdCIsImRhdGEiLCJkYiIsImNvbGxlY3Rpb24iLCJ3aGVyZSIsInRoZW4iLCJxdWVyeVNuYXBzaG90IiwiZm9yRWFjaCIsImRvYzEiLCJpbml0aWFsRGF0YSIsInByb2plY3ROYW1lIiwicHJvamVjdERlc2NyaXB0aW9uIiwicHJvamVjdENvdW50cnkiLCJwcm9qZWN0RmllbGQiLCJwcm9qZWN0RW1haWwiLCJwcm9qZWN0TnVtYmVyIiwiaW1hZ2VOYW1lIiwiaW1hZ2VGaWxlVXJsIiwiZG9jIiwib25TbmFwc2hvdCIsInNlcnZlclVwZGF0ZSIsImRvY3MiLCJtYXAiLCJjb25zb2xlIiwibG9nIiwiaWQiLCJtYXJrZXRQcm9ibGVtU2VjdGlvbkRhdGEiLCJtYXJrZXRTb2x1dGlvblNlY3Rpb25EYXRhIiwiZm91bmRlcnNTZWN0aW9uRGF0YSIsInByb2R1Y3RPdmVydmlld1NlY3Rpb25EYXRhIiwicHJvZHVjdFByb21vdGlvblNlY3Rpb25EYXRhIiwicHJvZHVjdEJlbmVmaXRzU2VjdGlvbkRhdGEiLCJtYXJrZXRPdmVydmlld1NlY3Rpb25EYXRhIiwiY29tcGV0aXRvcnNTZWN0aW9uRGF0YSIsImNvbXBldGl0aW9uRGlzdGluZ3Vpc2hTZWN0aW9uRGF0YSIsInRhcmdldEN1c3RvbWVyc1NlY3Rpb25EYXRhIiwic3RhcnR1cENvc3RzU2VjdGlvbkRhdGEiLCJydW5uaW5nQ29zdHNTZWN0aW9uRGF0YSIsImZpbmFuY2luZ1NlY3Rpb25EYXRhIiwiYnVzaW5lc3NNb2RlbE92ZXJ2aWV3U2VjdGlvbkRhdGEiLCJidXNpbmVzc0dyb3dTZWN0aW9uRGF0YSIsIndoeVN1Y2Nlc3NTZWN0aW9uRGF0YSIsImltYWdlIiwib25Qcm9qZWN0TGVhdmUiLCJlIiwicHJldmVudERlZmF1bHQiLCJ0byIsImVhc2VPdXQiLCJzZXRUaW1lb3V0IiwicHVzaCIsIkZvbnQiLCJyZWdpc3RlciIsInNyYyIsImZhbWlseSIsInN0eWxlcyIsIlN0eWxlU2hlZXQiLCJjcmVhdGUiLCJob21lUGFnZSIsImZvbnRGYW1pbHkiLCJiYWNrZ3JvdW5kQ29sb3IiLCJmbGV4RGlyZWN0aW9uIiwiaG9tZVBhZ2VUaXRsZVNlY3Rpb24iLCJ3aWR0aCIsInRleHRBbGlnbiIsIm1hcmdpblRvcCIsImhvbWVQYWdlVGl0bGUiLCJmb250U2l6ZSIsImNvbG9yIiwiaG9tZVBhZ2VEZXNjIiwiaGVpZ2h0IiwiZGlzcGxheSIsIm1hcmdpbkxlZnQiLCJtYXJnaW5SaWdodCIsImxlZnREZXNjQmxvY2siLCJib3JkZXJUb3BSaWdodFJhZGl1cyIsImxlZnREZXNjQmxvY2tUZXh0IiwicGFkZGluZyIsImxpbmVIZWlnaHQiLCJyaWdodEJhciIsInBvc2l0aW9uIiwicmlnaHQiLCJyaWdodEJhckNvbnRhY3QiLCJib3R0b20iLCJib3JkZXJUb3BMZWZ0UmFkaXVzIiwiY291bnRyeVRleHQiLCJlbWFpbFRleHQiLCJwaG9uZU51bWJlclRleHQiLCJncmF5QmFyT25lIiwibGVmdCIsImdyYXlCYXJUd28iLCJvdmVydmlld1BhZ2UiLCJwYWRkaW5nVG9wIiwicGFkZGluZ0JvdHRvbSIsIm92ZXJ2aWV3SGVhZGluZyIsIm92ZXJ2aWV3U3VidGl0bGUiLCJvdmVydmlld0ltYWdlIiwidG9wIiwib3ZlcnZpZXdTZWN0aW9uIiwicGFkZGluZ0xlZnQiLCJwYWRkaW5nUmlnaHQiLCJzZWN0aW9uQ29udGFpbmVyT25lIiwic2VjdGlvbkhlYWRpbmdPbmUiLCJzZWN0aW9uVGV4dCIsInNlY3Rpb25Db250YWluZXJUd28iLCJzZWN0aW9uSGVhZGluZ1R3byIsInNlY3Rpb25Db250YWluZXJUaHJlZSIsInNlY3Rpb25IZWFkaW5nVGhyZWUiLCJjb250ZW50c1BhZ2UiLCJjb250ZW50c0xlZnRCYXIiLCJqdXN0aWZ5Q29udGVudCIsImFsaWduSXRlbXMiLCJjb250ZW50c0Jhck9uZSIsInRyYW5zZm9ybSIsImNvbnRlbnRzQmFyVHdvIiwiY29udGVudHNCYXJUaHJlZSIsImNvbnRlbnRzQmFyRm91ciIsImNvbnRlbnRzQmFyRml2ZSIsImNvbnRlbnRzUmlnaHRCYXIiLCJjb250ZW50c1JpZ2h0VGV4dE9uZSIsImNvbnRlbnRzUmlnaHRUZXh0VHdvIiwiY29udGVudHNSaWdodFRleHRUaHJlZSIsImNvbnRlbnRzUmlnaHRUZXh0Rm91ciIsImNvbnRlbnRzUmlnaHRUZXh0Rml2ZSIsIk15RG9jdW1lbnQiLCJwcm9wcyIsInVzZU1lbW8iLCJhc1BkZiIsInBkZiIsInVwZGF0ZUNvbnRhaW5lciIsInRvQmxvYiIsImJsb2IiLCJzYXZlQXMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FB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QXBDWHhELGM7QUFtcUJTQSw2RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9kYXNoYm9hcmQvcHJvamVjdHMuMjZiMzQwNzJhZGRkYjdjMTg1OTMuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0LCB1c2VSZWYsIHVzZU1lbW8gfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IGRiIH0gZnJvbSAnLi4vLi4vLi4vbGliL2ZpcmViYXNlJztcclxuaW1wb3J0IHsgdXNlQXV0aCB9IGZyb20gJy4uLy4uLy4uL2xpYi9uZXdBdXRoJztcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xyXG5pbXBvcnQgZ3NhcCwgeyBQb3dlcjQsIExpbmVhciB9IGZyb20gJ2dzYXAnO1xyXG5pbXBvcnQgeyBzYXZlQXMgfSBmcm9tICdmaWxlLXNhdmVyJztcclxuXHJcbmltcG9ydCB7IEZvbnQsIHBkZiwgUGFnZSwgVGV4dCwgVmlldywgSW1hZ2UsIERvY3VtZW50LCBTdHlsZVNoZWV0LCBQREZWaWV3ZXIsIFBERkRvd25sb2FkTGluayB9IGZyb20gJ0ByZWFjdC1wZGYvcmVuZGVyZXInO1xyXG5pbXBvcnQgVGlwcHlNb25zdGVyIGZyb20gJy4uL1RpcHB5JztcclxuaW1wb3J0IE15RG9jdW1lbnQxIGZyb20gJy4vUERGRG9jdW1lbnQnO1xyXG5pbXBvcnQgQW5pbWF0ZWRCYWNrZ3JvdW5kIGZyb20gJy4vQW5pbWF0ZWRCYWNrZ3JvdW5kJztcclxuaW1wb3J0IENvb2tpZXMgZnJvbSAnanMtY29va2llJztcclxuaW1wb3J0IEV4aXRDb21wb25lbnQgZnJvbSAnLi9FeGl0Q29tcG9uZW50JztcclxuXHJcbmNvbnN0IFN0YXJ0dXBTdWNjZXNzID0gKHsgbWFuYWdlclBhZ2UgfSkgPT4ge1xyXG4gIGNvbnN0IFtwcm9qZWN0SWQsIHNldFByb2plY3RJZF0gPSB1c2VTdGF0ZSgpO1xyXG4gIC8vIFNUQVJURVJcclxuICBjb25zdCBbaWRlYU5hbWUsIHNldElkZWFOYW1lXSA9IHVzZVN0YXRlKCcnKTtcclxuICBjb25zdCBbaWRlYURlc2MsIHNldElkZWFEZXNjXSA9IHVzZVN0YXRlKCcnKTtcclxuICBjb25zdCBbaWRlYUNvdW50cnksIHNldElkZWFDb3VudHJ5XSA9IHVzZVN0YXRlKCcnKTtcclxuICBjb25zdCBbc3RhcnR1cEZpZWxkLCBzZXRTdGFydHVwRmllbGRdID0gdXNlU3RhdGUoJycpO1xyXG4gIGNvbnN0IFtzdGFydHVwRW1haWwsIHNldFN0YXJ0dXBFbWFpbF0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgY29uc3QgW3N0YXJ0dXBQaG9uZSwgc2V0U3RhcnR1cFBob25lXSA9IHVzZVN0YXRlKCcnKTtcclxuICAvLyBJTUFHRVxyXG4gIGNvbnN0IFtpbWFnZU5hbWVFeGlzdHMsIHNldEltYWdlTmFtZUV4aXN0c10gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgY29uc3QgW2F2YXRhckV4aXN0cywgc2V0QXZhdGFyRXhpc3RzXSA9IHVzZVN0YXRlKCcnKTtcclxuXHJcbiAgLy8gT1ZFUlZJRVdcclxuICBjb25zdCBbbWFya2V0UHJvYmxlbVNlY3Rpb24sIHNldE1hcmtldFByb2JsZW1TZWN0aW9uXSA9IHVzZVN0YXRlKCcnKTtcclxuICBjb25zdCBbbWFya2V0U29sdXRpb25TZWN0aW9uLCBzZXRNYXJrZXRTb2x1dGlvblNlY3Rpb25dID0gdXNlU3RhdGUoJycpO1xyXG4gIGNvbnN0IFtmb3VuZGVyc1NlY3Rpb24sIHNldEZvdW5kZXJzU2VjdGlvbl0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgLy8gUFJPRFVDVFxyXG4gIGNvbnN0IFtwcm9kdWN0T3ZlcnZpZXdTZWN0aW9uLCBzZXRQcm9kdWN0T3ZlcnZpZXdTZWN0aW9uXSA9IHVzZVN0YXRlKCcnKTtcclxuICBjb25zdCBbcHJvZHVjdFByb21vdGlvblNlY3Rpb24sIHNldFByb2R1Y3RQcm9tb3Rpb25TZWN0aW9uXSA9IHVzZVN0YXRlKCcnKTtcclxuICBjb25zdCBbcHJvZHVjdEJlbmVmaXRzU2VjdGlvbiwgc2V0UHJvZHVjdEJlbmVmaXRzU2VjdGlvbl0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgLy8gTUFSS0VUXHJcbiAgY29uc3QgW21hcmtldE92ZXJ2aWV3U2VjdGlvbiwgc2V0TWFya2V0T3ZlcnZpZXdTZWN0aW9uXSA9IHVzZVN0YXRlKCcnKTtcclxuICBjb25zdCBbY29tcGV0aXRvcnNTZWN0aW9uLCBzZXRDb21wZXRpdG9yc1NlY3Rpb25dID0gdXNlU3RhdGUoJycpO1xyXG4gIGNvbnN0IFtjb21wZXRpdGlvbkRpc3Rpbmd1aXNoU2VjdGlvbiwgc2V0Q29tcGV0aXRpb25EaXN0aW5ndWlzaFNlY3Rpb25dID0gdXNlU3RhdGUoJycpO1xyXG4gIGNvbnN0IFt0YXJnZXRDdXN0b21lcnNTZWN0aW9uLCBzZXRUYXJnZXRDdXN0b21lcnNTZWN0aW9uXSA9IHVzZVN0YXRlKCcnKTtcclxuICAvLyBGSU5BTkNFU1xyXG4gIGNvbnN0IFtzdGFydHVwQ29zdHNTZWN0aW9uLCBzZXRTdGFydHVwQ29zdHNTZWN0aW9uXSA9IHVzZVN0YXRlKCcnKTtcclxuICBjb25zdCBbcnVubmluZ0Nvc3RzU2VjdGlvbiwgc2V0UnVubmluZ0Nvc3RzU2VjdGlvbl0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgY29uc3QgW2ZpbmFuY2luZ1NlY3Rpb24sIHNldEZpbmFuY2luZ1NlY3Rpb25dID0gdXNlU3RhdGUoJycpO1xyXG4gIC8vIEJVU0lORVNTIE1PREVMXHJcbiAgY29uc3QgW2J1c2luZXNzTW9kZWxPdmVydmlld1NlY3Rpb24sIHNldEJ1c2luZXNzTW9kZWxPdmVydmlld1NlY3Rpb25dID0gdXNlU3RhdGUoJycpO1xyXG4gIGNvbnN0IFtidXNpbmVzc0dyb3dTZWN0aW9uLCBzZXRCdXNpbmVzc0dyb3dTZWN0aW9uXSA9IHVzZVN0YXRlKCcnKTtcclxuICBjb25zdCBbd2h5U3VjY2Vzc1NlY3Rpb24sIHNldFdoeVN1Y2Nlc3NTZWN0aW9uXSA9IHVzZVN0YXRlKCcnKTtcclxuXHJcbiAgY29uc3QgeyBjdXJyZW50VXNlciB9ID0gdXNlQXV0aCgpO1xyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG4gIGNvbnN0IGNvbnRlbnRSZWYgPSB1c2VSZWYoKTtcclxuXHJcbiAgLy8gRGF0YSBmZXRjaFxyXG4gIGNvbnN0IFtsb2FkaW5nSGVscGVyLCBzZXRMb2FkaW5nSGVscGVyXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbZG9jdW1lbnRJZCwgc2V0RG9jdW1lbnRJZF0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnN0IHVzZXJVaWQgPSBDb29raWVzLmdldCgndWlkJyk7XHJcbiAgICBnc2FwLmZyb21Ubyhjb250ZW50UmVmLmN1cnJlbnQsIHsgYXV0b0FscGhhOiAwIH0sIHsgYXV0b0FscGhhOiAxLCBkdXJhdGlvbjogMSwgZWFzZTogTGluZWFyLmVhc2VJbiB9KTtcclxuICAgIGlmICh1c2VyVWlkICYmIHJvdXRlci5xdWVyeS5wcm9qZWN0KSB7XHJcbiAgICAgIGNvbnN0IGRhdGEgPSBkYi5jb2xsZWN0aW9uKCdwcm9qZWN0cycpLndoZXJlKCd1aWQnLCAnPT0nLCB1c2VyVWlkKTtcclxuICAgICAgZGF0YVxyXG4gICAgICAgIC53aGVyZSgncHJvamVjdE5hbWUnLCAnPT0nLCByb3V0ZXIucXVlcnkucHJvamVjdClcclxuICAgICAgICAuZ2V0KClcclxuICAgICAgICAudGhlbigocXVlcnlTbmFwc2hvdCkgPT4ge1xyXG4gICAgICAgICAgcXVlcnlTbmFwc2hvdC5mb3JFYWNoKGFzeW5jIChkb2MxKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IGluaXRpYWxEYXRhID0gZG9jMS5kYXRhKCk7XHJcbiAgICAgICAgICAgIHNldFByb2plY3RJZChpbml0aWFsRGF0YS5wcm9qZWN0SWQpO1xyXG4gICAgICAgICAgICAvLyBTVEFSVEVSO1xyXG4gICAgICAgICAgICBzZXRJZGVhTmFtZShpbml0aWFsRGF0YS5wcm9qZWN0TmFtZSk7XHJcbiAgICAgICAgICAgIHNldElkZWFEZXNjKGluaXRpYWxEYXRhLnByb2plY3REZXNjcmlwdGlvbik7XHJcbiAgICAgICAgICAgIHNldElkZWFDb3VudHJ5KGluaXRpYWxEYXRhLnByb2plY3RDb3VudHJ5KTtcclxuICAgICAgICAgICAgc2V0U3RhcnR1cEZpZWxkKGluaXRpYWxEYXRhLnByb2plY3RGaWVsZCk7XHJcbiAgICAgICAgICAgIHNldFN0YXJ0dXBFbWFpbChpbml0aWFsRGF0YS5wcm9qZWN0RW1haWwpO1xyXG4gICAgICAgICAgICBzZXRTdGFydHVwUGhvbmUoaW5pdGlhbERhdGEucHJvamVjdE51bWJlcik7XHJcbiAgICAgICAgICAgIC8vIElNQUdFXHJcbiAgICAgICAgICAgIHNldEltYWdlTmFtZUV4aXN0cyhpbml0aWFsRGF0YS5pbWFnZU5hbWUpO1xyXG4gICAgICAgICAgICBzZXRBdmF0YXJFeGlzdHMoaW5pdGlhbERhdGEuaW1hZ2VGaWxlVXJsKTtcclxuXHJcbiAgICAgICAgICAgIGRiLmNvbGxlY3Rpb24oJ3Byb2plY3RzJylcclxuICAgICAgICAgICAgICAuZG9jKGluaXRpYWxEYXRhLnByb2plY3RJZClcclxuICAgICAgICAgICAgICAuY29sbGVjdGlvbignc3RhcnR1cElkZWEnKVxyXG4gICAgICAgICAgICAgIC5kb2Mocm91dGVyLnF1ZXJ5LnByb2plY3QpXHJcbiAgICAgICAgICAgICAgLmNvbGxlY3Rpb24oJ2lucHV0cycpXHJcbiAgICAgICAgICAgICAgLm9uU25hcHNob3QoKHNlcnZlclVwZGF0ZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgc2VydmVyVXBkYXRlLmRvY3MubWFwKChkb2MpID0+IHtcclxuICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZG9jLmRhdGEoKSk7XHJcbiAgICAgICAgICAgICAgICAgIGNvbnN0IGRhdGEgPSBkb2MuZGF0YSgpO1xyXG4gICAgICAgICAgICAgICAgICBzZXREb2N1bWVudElkKGRvYy5pZCk7XHJcbiAgICAgICAgICAgICAgICAgIC8vIE9WRVJWSUVXXHJcbiAgICAgICAgICAgICAgICAgIHNldE1hcmtldFByb2JsZW1TZWN0aW9uKGRhdGEubWFya2V0UHJvYmxlbVNlY3Rpb25EYXRhKTtcclxuICAgICAgICAgICAgICAgICAgc2V0TWFya2V0U29sdXRpb25TZWN0aW9uKGRhdGEubWFya2V0U29sdXRpb25TZWN0aW9uRGF0YSk7XHJcbiAgICAgICAgICAgICAgICAgIHNldEZvdW5kZXJzU2VjdGlvbihkYXRhLmZvdW5kZXJzU2VjdGlvbkRhdGEpO1xyXG4gICAgICAgICAgICAgICAgICAvLyBQUk9EVUNUXHJcbiAgICAgICAgICAgICAgICAgIHNldFByb2R1Y3RPdmVydmlld1NlY3Rpb24oZGF0YS5wcm9kdWN0T3ZlcnZpZXdTZWN0aW9uRGF0YSk7XHJcbiAgICAgICAgICAgICAgICAgIHNldFByb2R1Y3RQcm9tb3Rpb25TZWN0aW9uKGRhdGEucHJvZHVjdFByb21vdGlvblNlY3Rpb25EYXRhKTtcclxuICAgICAgICAgICAgICAgICAgc2V0UHJvZHVjdEJlbmVmaXRzU2VjdGlvbihkYXRhLnByb2R1Y3RCZW5lZml0c1NlY3Rpb25EYXRhKTtcclxuICAgICAgICAgICAgICAgICAgLy8gTUFSS0VUXHJcbiAgICAgICAgICAgICAgICAgIHNldE1hcmtldE92ZXJ2aWV3U2VjdGlvbihkYXRhLm1hcmtldE92ZXJ2aWV3U2VjdGlvbkRhdGEpO1xyXG4gICAgICAgICAgICAgICAgICBzZXRDb21wZXRpdG9yc1NlY3Rpb24oZGF0YS5jb21wZXRpdG9yc1NlY3Rpb25EYXRhKTtcclxuICAgICAgICAgICAgICAgICAgc2V0Q29tcGV0aXRpb25EaXN0aW5ndWlzaFNlY3Rpb24oZGF0YS5jb21wZXRpdGlvbkRpc3Rpbmd1aXNoU2VjdGlvbkRhdGEpO1xyXG4gICAgICAgICAgICAgICAgICBzZXRUYXJnZXRDdXN0b21lcnNTZWN0aW9uKGRhdGEudGFyZ2V0Q3VzdG9tZXJzU2VjdGlvbkRhdGEpO1xyXG4gICAgICAgICAgICAgICAgICAvLyBGSU5BTkNFU1xyXG4gICAgICAgICAgICAgICAgICBzZXRTdGFydHVwQ29zdHNTZWN0aW9uKGRhdGEuc3RhcnR1cENvc3RzU2VjdGlvbkRhdGEpO1xyXG4gICAgICAgICAgICAgICAgICBzZXRSdW5uaW5nQ29zdHNTZWN0aW9uKGRhdGEucnVubmluZ0Nvc3RzU2VjdGlvbkRhdGEpO1xyXG4gICAgICAgICAgICAgICAgICBzZXRGaW5hbmNpbmdTZWN0aW9uKGRhdGEuZmluYW5jaW5nU2VjdGlvbkRhdGEpO1xyXG4gICAgICAgICAgICAgICAgICAvLyBCVVNJTkVTUyBNT0RFTFxyXG4gICAgICAgICAgICAgICAgICBzZXRCdXNpbmVzc01vZGVsT3ZlcnZpZXdTZWN0aW9uKGRhdGEuYnVzaW5lc3NNb2RlbE92ZXJ2aWV3U2VjdGlvbkRhdGEpO1xyXG4gICAgICAgICAgICAgICAgICBzZXRCdXNpbmVzc0dyb3dTZWN0aW9uKGRhdGEuYnVzaW5lc3NHcm93U2VjdGlvbkRhdGEpO1xyXG4gICAgICAgICAgICAgICAgICBzZXRXaHlTdWNjZXNzU2VjdGlvbihkYXRhLndoeVN1Y2Nlc3NTZWN0aW9uRGF0YSk7XHJcbiAgICAgICAgICAgICAgICAgIHNldExvYWRpbmdIZWxwZXIoZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKCdMb2FkaW5nIGZhaWxlZCcpO1xyXG4gICAgICBzZXRMb2FkaW5nSGVscGVyKHRydWUpO1xyXG4gICAgfVxyXG4gIH0sIFtsb2FkaW5nSGVscGVyLCByb3V0ZXIucXVlcnkucHJvamVjdF0pO1xyXG5cclxuICBjb25zdCBpbWFnZSA9IGF2YXRhckV4aXN0cyAhPSAnYmxhbmsnID8gYXZhdGFyRXhpc3RzIDogaW1hZ2VOYW1lRXhpc3RzO1xyXG4gIGNvbnNvbGUubG9nKGltYWdlKTtcclxuXHJcbiAgY29uc3QgZGF0YSA9IHtcclxuICAgIGlkZWFOYW1lLFxyXG4gICAgaWRlYURlc2MsXHJcbiAgICBpZGVhQ291bnRyeSxcclxuICAgIHN0YXJ0dXBGaWVsZCxcclxuICAgIHN0YXJ0dXBFbWFpbCxcclxuICAgIHN0YXJ0dXBQaG9uZSxcclxuICAgIGltYWdlTmFtZUV4aXN0cyxcclxuICAgIGF2YXRhckV4aXN0cyxcclxuICAgIG1hcmtldFByb2JsZW1TZWN0aW9uLFxyXG4gICAgbWFya2V0U29sdXRpb25TZWN0aW9uLFxyXG4gICAgZm91bmRlcnNTZWN0aW9uLFxyXG4gICAgcHJvZHVjdE92ZXJ2aWV3U2VjdGlvbixcclxuICAgIHByb2R1Y3RQcm9tb3Rpb25TZWN0aW9uLFxyXG4gICAgcHJvZHVjdEJlbmVmaXRzU2VjdGlvbixcclxuICAgIG1hcmtldE92ZXJ2aWV3U2VjdGlvbixcclxuICAgIGNvbXBldGl0b3JzU2VjdGlvbixcclxuICAgIHRhcmdldEN1c3RvbWVyc1NlY3Rpb24sXHJcbiAgICBjb21wZXRpdGlvbkRpc3Rpbmd1aXNoU2VjdGlvbixcclxuICAgIHN0YXJ0dXBDb3N0c1NlY3Rpb24sXHJcbiAgICBydW5uaW5nQ29zdHNTZWN0aW9uLFxyXG4gICAgZmluYW5jaW5nU2VjdGlvbixcclxuICAgIGJ1c2luZXNzTW9kZWxPdmVydmlld1NlY3Rpb24sXHJcbiAgICBidXNpbmVzc0dyb3dTZWN0aW9uLFxyXG4gICAgd2h5U3VjY2Vzc1NlY3Rpb24sXHJcbiAgfTtcclxuXHJcbiAgY29uc3Qgb25Qcm9qZWN0TGVhdmUgPSBhc3luYyAoZSkgPT4ge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgZ3NhcC50byhjb250ZW50UmVmLmN1cnJlbnQsIHtcclxuICAgICAgYXV0b0FscGhhOiAwLFxyXG4gICAgICBkdXJhdGlvbjogMSxcclxuICAgICAgZWFzZTogTGluZWFyLmVhc2VPdXQsXHJcbiAgICB9KTtcclxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICByb3V0ZXIucHVzaChgL2Rhc2hib2FyZC9wcm9qZWN0cy8ke3JvdXRlci5xdWVyeS5wcm9qZWN0fS9zdGFydHVwLWlkZWEvYnVzaW5lc3MtbW9kZWxgKTtcclxuICAgIH0sIDEyMDApO1xyXG4gIH07XHJcblxyXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gUERGIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblxyXG4gIC8vIGNvbnN0IGRlbGF5ID0gKHQpID0+IG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiBzZXRUaW1lb3V0KHJlc29sdmUsIHQpKTtcclxuXHJcbiAgLy8gYXN5bmMgZnVuY3Rpb24gZ2V0UHJvcHMoKSB7XHJcbiAgLy8gICBhd2FpdCBkZWxheSgxXzAwMCk7XHJcbiAgLy8gICByZXR1cm4ge1xyXG4gIC8vICAgICBzb21lU3RyaW5nOiAnWW91IHdhaXRlZCAxIHNlY29uZCBmb3IgdGhpcycsXHJcbiAgLy8gICB9O1xyXG4gIC8vIH1cclxuXHJcbiAgRm9udC5yZWdpc3Rlcih7IHNyYzogJy9mb250cy9wb3BwaW5zLnR0ZicsIGZhbWlseTogJ1BvcHBpbnMnIH0pO1xyXG4gIEZvbnQucmVnaXN0ZXIoeyBzcmM6ICcvZm9udHMvY29tZm9ydGFhLnR0ZicsIGZhbWlseTogJ0NvbWZvcnRhYScgfSk7XHJcblxyXG4gIGNvbnN0IHN0eWxlcyA9IFN0eWxlU2hlZXQuY3JlYXRlKHtcclxuICAgIC8vIFNUQVJUIEhPTUVQQUdFIFNFQ1RJT05cclxuICAgIGhvbWVQYWdlOiB7XHJcbiAgICAgIGZvbnRGYW1pbHk6ICdDb21mb3J0YWEnLFxyXG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjZjhmOWZiJyxcclxuICAgICAgZmxleERpcmVjdGlvbjogJ3JvdycsXHJcbiAgICB9LFxyXG4gICAgaG9tZVBhZ2VUaXRsZVNlY3Rpb246IHtcclxuICAgICAgd2lkdGg6ICcxMDAlJyxcclxuICAgICAgdGV4dEFsaWduOiAnY2VudGVyJyxcclxuICAgICAgbWFyZ2luVG9wOiA0MCxcclxuICAgIH0sXHJcbiAgICBob21lUGFnZVRpdGxlOiB7XHJcbiAgICAgIGZvbnRTaXplOiAyNixcclxuICAgICAgY29sb3I6ICcjMGExMjMwJyxcclxuICAgIH0sXHJcbiAgICBob21lUGFnZURlc2M6IHtcclxuICAgICAgZm9udFNpemU6IDE2LFxyXG4gICAgICBjb2xvcjogJyNhMGFlYzAnLFxyXG4gICAgfSxcclxuICAgIGltYWdlOiB7XHJcbiAgICAgIGhlaWdodDogJzIwMHB4JyxcclxuICAgICAgd2lkdGg6ICcyMDBweCcsXHJcbiAgICAgIGRpc3BsYXk6ICdibG9jaycsXHJcbiAgICAgIG1hcmdpbkxlZnQ6ICdhdXRvJyxcclxuICAgICAgbWFyZ2luUmlnaHQ6ICdhdXRvJyxcclxuICAgICAgbWFyZ2luVG9wOiAyMixcclxuICAgIH0sXHJcbiAgICBsZWZ0RGVzY0Jsb2NrOiB7XHJcbiAgICAgIHdpZHRoOiAnNzUlJyxcclxuICAgICAgYmFja2dyb3VuZENvbG9yOiAnIzZDNjNGRicsXHJcbiAgICAgIHRleHRBbGlnbjogJ2xlZnQnLFxyXG4gICAgICBtYXJnaW5Ub3A6ICczMnB4JyxcclxuICAgICAgYm9yZGVyVG9wUmlnaHRSYWRpdXM6IDUwLFxyXG4gICAgfSxcclxuICAgIGxlZnREZXNjQmxvY2tUZXh0OiB7XHJcbiAgICAgIGZvbnRTaXplOiAxNCxcclxuICAgICAgcGFkZGluZzogMzIsXHJcbiAgICAgIGxpbmVIZWlnaHQ6IDEuNCxcclxuICAgICAgY29sb3I6ICcjZjhmOWZiJyxcclxuICAgIH0sXHJcbiAgICByaWdodEJhcjoge1xyXG4gICAgICBoZWlnaHQ6ICcxMDB2aCcsXHJcbiAgICAgIHdpZHRoOiAnMTVweCcsXHJcbiAgICAgIGJhY2tncm91bmRDb2xvcjogJyM2QzYzRkYnLFxyXG4gICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcclxuICAgICAgcmlnaHQ6ICc1JScsXHJcbiAgICB9LFxyXG4gICAgcmlnaHRCYXJDb250YWN0OiB7XHJcbiAgICAgIGNvbG9yOiAnI2Y4ZjlmYicsXHJcbiAgICAgIGZvbnRTaXplOiAxNCxcclxuICAgICAgd2lkdGg6ICc1MCUnLFxyXG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjNkM2M0ZGJyxcclxuICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXHJcbiAgICAgIGJvdHRvbTogJzEwJScsXHJcbiAgICAgIHJpZ2h0OiAnNSUnLFxyXG4gICAgICBwYWRkaW5nOiAzMixcclxuICAgICAgYm9yZGVyVG9wTGVmdFJhZGl1czogNTAsXHJcbiAgICB9LFxyXG4gICAgY291bnRyeVRleHQ6IHtcclxuICAgICAgbWFyZ2luVG9wOiA2LFxyXG4gICAgfSxcclxuICAgIGVtYWlsVGV4dDoge1xyXG4gICAgICBtYXJnaW5Ub3A6IDYsXHJcbiAgICB9LFxyXG4gICAgcGhvbmVOdW1iZXJUZXh0OiB7XHJcbiAgICAgIG1hcmdpblRvcDogNixcclxuICAgIH0sXHJcbiAgICBncmF5QmFyT25lOiB7XHJcbiAgICAgIGhlaWdodDogJzI1JScsXHJcbiAgICAgIHdpZHRoOiAnMnB4JyxcclxuICAgICAgYmFja2dyb3VuZENvbG9yOiAnI2EwYWVjMCcsXHJcbiAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxyXG4gICAgICBib3R0b206ICczJScsXHJcbiAgICAgIGxlZnQ6ICcxMCUnLFxyXG4gICAgfSxcclxuICAgIGdyYXlCYXJUd286IHtcclxuICAgICAgaGVpZ2h0OiAnMnB4JyxcclxuICAgICAgd2lkdGg6ICcyMCUnLFxyXG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjYTBhZWMwJyxcclxuICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXHJcbiAgICAgIGJvdHRvbTogJzUlJyxcclxuICAgICAgbGVmdDogJzUlJyxcclxuICAgIH0sXHJcbiAgICAvLyBFTkQgU1RBUlQgSE9NRVBBR0UgU0VDVElPTlxyXG4gICAgLy8gU1RBUlQgT1ZFUlZJRVcgU0VDVElPTlxyXG4gICAgb3ZlcnZpZXdQYWdlOiB7XHJcbiAgICAgIGZvbnRGYW1pbHk6ICdDb21mb3J0YWEnLFxyXG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjZjhmOWZiJyxcclxuICAgICAgcGFkZGluZ1RvcDogMzUsXHJcbiAgICAgIHBhZGRpbmdCb3R0b206IDM1LFxyXG4gICAgfSxcclxuICAgIG92ZXJ2aWV3SGVhZGluZzoge1xyXG4gICAgICBmb250U2l6ZTogMjIsXHJcbiAgICAgIGNvbG9yOiAnIzBhMTIzMCcsXHJcbiAgICAgIG1hcmdpbkxlZnQ6IDI4LFxyXG4gICAgfSxcclxuICAgIG92ZXJ2aWV3U3VidGl0bGU6IHtcclxuICAgICAgZm9udFNpemU6IDE0LFxyXG4gICAgICBjb2xvcjogJyNhMGFlYzAnLFxyXG4gICAgfSxcclxuICAgIG92ZXJ2aWV3SW1hZ2U6IHtcclxuICAgICAgaGVpZ2h0OiAnMjBweCcsXHJcbiAgICAgIHdpZHRoOiAnMjBweCcsXHJcbiAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxyXG4gICAgICB0b3A6IDM3LFxyXG4gICAgICBsZWZ0OiAzMCxcclxuICAgIH0sXHJcbiAgICBvdmVydmlld1NlY3Rpb246IHtcclxuICAgICAgLy8gcGFkZGluZzogJzUlJyxcclxuICAgICAgLy8gcGFkZGluZ1RvcDogJzUlJyxcclxuICAgICAgcGFkZGluZ0JvdHRvbTogJzUlJyxcclxuICAgICAgcGFkZGluZ0xlZnQ6ICc1JScsXHJcbiAgICAgIHBhZGRpbmdSaWdodDogJzUlJyxcclxuICAgIH0sXHJcbiAgICBzZWN0aW9uQ29udGFpbmVyT25lOiB7XHJcbiAgICAgIG1hcmdpblRvcDogMzAsXHJcbiAgICB9LFxyXG4gICAgc2VjdGlvbkhlYWRpbmdPbmU6IHtcclxuICAgICAgY29sb3I6ICcjMGExMjMwJyxcclxuICAgICAgZm9udFNpemU6IDE2LFxyXG4gICAgfSxcclxuICAgIHNlY3Rpb25UZXh0OiB7XHJcbiAgICAgIGNvbG9yOiAnIzBhMTIzMCcsXHJcbiAgICAgIGZvbnRTaXplOiAxMixcclxuICAgICAgcGFkZGluZ1RvcDogOCxcclxuICAgICAgcGFkZGluZ1JpZ2h0OiA1MCxcclxuICAgIH0sXHJcbiAgICBzZWN0aW9uQ29udGFpbmVyVHdvOiB7XHJcbiAgICAgIHBhZGRpbmdUb3A6IDMwLFxyXG4gICAgfSxcclxuICAgIHNlY3Rpb25IZWFkaW5nVHdvOiB7XHJcbiAgICAgIGNvbG9yOiAnIzBhMTIzMCcsXHJcbiAgICAgIGZvbnRTaXplOiAxNixcclxuICAgIH0sXHJcbiAgICBzZWN0aW9uQ29udGFpbmVyVGhyZWU6IHtcclxuICAgICAgcGFkZGluZ1RvcDogMzYsXHJcbiAgICAgIHBhZGRpbmdCb3R0b206IDI2LFxyXG4gICAgfSxcclxuICAgIHNlY3Rpb25IZWFkaW5nVGhyZWU6IHtcclxuICAgICAgY29sb3I6ICcjMGExMjMwJyxcclxuICAgICAgZm9udFNpemU6IDE2LFxyXG4gICAgfSxcclxuICAgIC8vIEVORCBPVkVSVklFVyBTRUNUSU9OXHJcbiAgICAvLyBTVEFSVCBUQUJMRSBPRiBDT05URU5UUyBTRUNUSU9OXHJcbiAgICBjb250ZW50c1BhZ2U6IHtcclxuICAgICAgZm9udEZhbWlseTogJ0NvbWZvcnRhYScsXHJcbiAgICB9LFxyXG4gICAgY29udGVudHNMZWZ0QmFyOiB7XHJcbiAgICAgIGhlaWdodDogJzEwMCUnLFxyXG4gICAgICB3aWR0aDogJzQwJScsXHJcbiAgICAgIGJhY2tncm91bmRDb2xvcjogJyM2QzYzRkYnLFxyXG4gICAgICBkaXNwbGF5OiAnZmxleCcsXHJcbiAgICAgIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJyxcclxuICAgICAgYWxpZ25JdGVtczogJ2Jhc2VsaW5lJyxcclxuICAgICAgY29sb3I6ICcjZjhmOWZiJyxcclxuICAgICAgcGFkZGluZ0xlZnQ6IDM1LFxyXG4gICAgICBmb250U2l6ZTogMjAsXHJcbiAgICAgIGxpbmVIZWlnaHQ6IDQsXHJcbiAgICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxyXG4gICAgfSxcclxuICAgIGNvbnRlbnRzQmFyT25lOiB7XHJcbiAgICAgIHdpZHRoOiAyMDAsXHJcbiAgICAgIGhlaWdodDogMixcclxuICAgICAgYmFja2dyb3VuZENvbG9yOiAnI2EwYWVjMCcsXHJcbiAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxyXG4gICAgICB0b3A6ICczNyUnLFxyXG4gICAgICBsZWZ0OiAnMTAwJScsXHJcbiAgICAgIHRyYW5zZm9ybTogJ3RyYW5zbGF0ZSgtNTAlLCAtNTAlKScsXHJcbiAgICB9LFxyXG4gICAgY29udGVudHNCYXJUd286IHtcclxuICAgICAgd2lkdGg6IDIwMCxcclxuICAgICAgaGVpZ2h0OiAyLFxyXG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjYTBhZWMwJyxcclxuICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXHJcbiAgICAgIHRvcDogJzQ2LjUlJyxcclxuICAgICAgbGVmdDogJzEwMCUnLFxyXG4gICAgICB0cmFuc2Zvcm06ICd0cmFuc2xhdGUoLTUwJSwgLTUwJSknLFxyXG4gICAgfSxcclxuICAgIGNvbnRlbnRzQmFyVGhyZWU6IHtcclxuICAgICAgd2lkdGg6IDIwMCxcclxuICAgICAgaGVpZ2h0OiAyLFxyXG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjYTBhZWMwJyxcclxuICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXHJcbiAgICAgIHRvcDogJzU2JScsXHJcbiAgICAgIGxlZnQ6ICcxMDAlJyxcclxuICAgICAgdHJhbnNmb3JtOiAndHJhbnNsYXRlKC01MCUsIC01MCUpJyxcclxuICAgIH0sXHJcbiAgICBjb250ZW50c0JhckZvdXI6IHtcclxuICAgICAgd2lkdGg6IDIwMCxcclxuICAgICAgaGVpZ2h0OiAyLFxyXG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjYTBhZWMwJyxcclxuICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXHJcbiAgICAgIHRvcDogJzY1LjUlJyxcclxuICAgICAgbGVmdDogJzEwMCUnLFxyXG4gICAgICB0cmFuc2Zvcm06ICd0cmFuc2xhdGUoLTUwJSwgLTUwJSknLFxyXG4gICAgfSxcclxuICAgIGNvbnRlbnRzQmFyRml2ZToge1xyXG4gICAgICB3aWR0aDogMjAwLFxyXG4gICAgICBoZWlnaHQ6IDIsXHJcbiAgICAgIGJhY2tncm91bmRDb2xvcjogJyNhMGFlYzAnLFxyXG4gICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcclxuICAgICAgdG9wOiAnNzQuNzUlJyxcclxuICAgICAgbGVmdDogJzEwMCUnLFxyXG4gICAgICB0cmFuc2Zvcm06ICd0cmFuc2xhdGUoLTUwJSwgLTUwJSknLFxyXG4gICAgfSxcclxuICAgIGNvbnRlbnRzUmlnaHRCYXI6IHtcclxuICAgICAgaGVpZ2h0OiAnMTAwJScsXHJcbiAgICAgIHdpZHRoOiAnNjAlJyxcclxuICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXHJcbiAgICAgIHJpZ2h0OiAnMCcsXHJcbiAgICAgIGRpc3BsYXk6ICdmbGV4JyxcclxuICAgICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXHJcbiAgICAgIGZvbnRTaXplOiAxMixcclxuICAgICAgY29sb3I6ICcjMGExMjMwJyxcclxuICAgICAgLy8gcGFkZGluZ0hvcml6b250YWw6IDY0LFxyXG4gICAgICBwYWRkaW5nUmlnaHQ6IDgwLFxyXG4gICAgICBwYWRkaW5nTGVmdDogMzIsXHJcbiAgICB9LFxyXG4gICAgY29udGVudHNSaWdodFRleHRPbmU6IHtcclxuICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXHJcbiAgICAgIHRvcDogJzI2Ljc1JScsXHJcbiAgICB9LFxyXG4gICAgY29udGVudHNSaWdodFRleHRUd286IHtcclxuICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXHJcbiAgICAgIHRvcDogJzM2JScsXHJcbiAgICB9LFxyXG4gICAgY29udGVudHNSaWdodFRleHRUaHJlZToge1xyXG4gICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcclxuICAgICAgdG9wOiAnNDUuNSUnLFxyXG4gICAgfSxcclxuICAgIGNvbnRlbnRzUmlnaHRUZXh0Rm91cjoge1xyXG4gICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcclxuICAgICAgdG9wOiAnNTUlJyxcclxuICAgIH0sXHJcbiAgICBjb250ZW50c1JpZ2h0VGV4dEZpdmU6IHtcclxuICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXHJcbiAgICAgIHRvcDogJzY0LjI1JScsXHJcbiAgICB9LFxyXG4gIH0pO1xyXG5cclxuICBjb25zdCBNeURvY3VtZW50ID0gKHByb3BzKSA9PiAoXHJcbiAgICA8RG9jdW1lbnQ+XHJcbiAgICAgIDxQYWdlIHNpemU9XCJBNFwiIHN0eWxlPXtzdHlsZXMuaG9tZVBhZ2V9PlxyXG4gICAgICAgIDxWaWV3IHN0eWxlPXtzdHlsZXMuaG9tZVBhZ2VUaXRsZVNlY3Rpb259PlxyXG4gICAgICAgICAgPFRleHQgc3R5bGU9e3N0eWxlcy5ob21lUGFnZVRpdGxlfT5TdGFydHVwIGlkZWEgcGxhbjwvVGV4dD5cclxuICAgICAgICAgIDxUZXh0IHN0eWxlPXtzdHlsZXMuaG9tZVBhZ2VEZXNjfT5KdXN0IGEgc2ltcGxlIHN0YXJ0dXAgYWJvdXQgdGVjaCBmaWVsZDwvVGV4dD5cclxuICAgICAgICAgIDxJbWFnZSBzcmM9e2ltYWdlfSBzdHlsZT17c3R5bGVzLmltYWdlfSBoZWlnaHQ9XCIyNTBweFwiIHdpZHRoPVwiMjUwcHhcIiAvPlxyXG4gICAgICAgICAgPFZpZXcgc3R5bGU9e3N0eWxlcy5sZWZ0RGVzY0Jsb2NrfT5cclxuICAgICAgICAgICAgPFRleHQgc3R5bGU9e3N0eWxlcy5sZWZ0RGVzY0Jsb2NrVGV4dH0+e2lkZWFEZXNjfTwvVGV4dD5cclxuICAgICAgICAgIDwvVmlldz5cclxuICAgICAgICA8L1ZpZXc+XHJcbiAgICAgICAgPFZpZXcgc3R5bGU9e3N0eWxlcy5yaWdodEJhcn0+PC9WaWV3PlxyXG4gICAgICAgIDxWaWV3IHN0eWxlPXtzdHlsZXMucmlnaHRCYXJDb250YWN0fT5cclxuICAgICAgICAgIDxUZXh0PntzdGFydHVwRmllbGR9PC9UZXh0PlxyXG4gICAgICAgICAgPFRleHQgc3R5bGU9e3N0eWxlcy5jb3VudHJ5VGV4dH0+e2lkZWFDb3VudHJ5fTwvVGV4dD5cclxuICAgICAgICAgIDxUZXh0IHN0eWxlPXtzdHlsZXMuZW1haWxUZXh0fT57c3RhcnR1cEVtYWlsfTwvVGV4dD5cclxuICAgICAgICAgIDxUZXh0IHN0eWxlPXtzdHlsZXMucGhvbmVOdW1iZXJUZXh0fT57c3RhcnR1cFBob25lfTwvVGV4dD5cclxuICAgICAgICA8L1ZpZXc+XHJcbiAgICAgICAgPFZpZXcgc3R5bGU9e3N0eWxlcy5ncmF5QmFyT25lfT48L1ZpZXc+XHJcbiAgICAgICAgPFZpZXcgc3R5bGU9e3N0eWxlcy5ncmF5QmFyVHdvfT48L1ZpZXc+XHJcbiAgICAgIDwvUGFnZT5cclxuICAgICAgey8qIFRBQkxFIE9GIENPTlRFTlRTICovfVxyXG4gICAgICA8UGFnZSBzdHlsZT17c3R5bGVzLmNvbnRlbnRzUGFnZX0+XHJcbiAgICAgICAgPFZpZXcgc3R5bGU9e3N0eWxlcy5yaWdodEJhcn0gZml4ZWQ+PC9WaWV3PlxyXG4gICAgICAgIDxWaWV3IHN0eWxlPXtzdHlsZXMuY29udGVudHNMZWZ0QmFyfT5cclxuICAgICAgICAgIDxUZXh0PlN0YXJ0dXAgb3ZlcnZpZXc8L1RleHQ+XHJcbiAgICAgICAgICA8VGV4dD5Qcm9kdWN0PC9UZXh0PlxyXG4gICAgICAgICAgPFRleHQ+TWFya2V0IGFuYWx5c2lzPC9UZXh0PlxyXG4gICAgICAgICAgPFRleHQ+RmluYW5jZXM8L1RleHQ+XHJcbiAgICAgICAgICA8VGV4dD5CdXNpbmVzcyBtb2RlbDwvVGV4dD5cclxuICAgICAgICAgIDxWaWV3IHN0eWxlPXtzdHlsZXMuY29udGVudHNCYXJPbmV9PjwvVmlldz5cclxuICAgICAgICAgIDxWaWV3IHN0eWxlPXtzdHlsZXMuY29udGVudHNCYXJUd299PjwvVmlldz5cclxuICAgICAgICAgIDxWaWV3IHN0eWxlPXtzdHlsZXMuY29udGVudHNCYXJUaHJlZX0+PC9WaWV3PlxyXG4gICAgICAgICAgPFZpZXcgc3R5bGU9e3N0eWxlcy5jb250ZW50c0JhckZvdXJ9PjwvVmlldz5cclxuICAgICAgICAgIDxWaWV3IHN0eWxlPXtzdHlsZXMuY29udGVudHNCYXJGaXZlfT48L1ZpZXc+XHJcbiAgICAgICAgPC9WaWV3PlxyXG4gICAgICAgIDxWaWV3IHN0eWxlPXtzdHlsZXMuY29udGVudHNSaWdodEJhcn0+XHJcbiAgICAgICAgICA8VGV4dCBzdHlsZT17c3R5bGVzLmNvbnRlbnRzUmlnaHRUZXh0T25lfT4wMS4gVGhpcyBzZWN0aW9uIHdpbGwgaGVscCB5b3UgYmV0dGVyIHVuZGVyc3RhbmQgdGhlIHN0YXJ0dXAgdmlzaW9uPC9UZXh0PlxyXG4gICAgICAgICAgPFRleHQgc3R5bGU9e3N0eWxlcy5jb250ZW50c1JpZ2h0VGV4dFR3b30+MDIuIFRoaXMgc2VjdGlvbiB3aWxsIGludHJvZHVjZSB5b3UgdG8gdGhlIHZpc2lvbiBvZiB0aGUgcHJvZHVjdDwvVGV4dD5cclxuICAgICAgICAgIDxUZXh0IHN0eWxlPXtzdHlsZXMuY29udGVudHNSaWdodFRleHRUaHJlZX0+MDMuIFRoaXMgc2VjdGlvbiB3aWxsIHJldmVhbCBhbGwgdGhlIGNhcmRzIG9mIHRoZSBtYXJrZXQ8L1RleHQ+XHJcbiAgICAgICAgICA8VGV4dCBzdHlsZT17c3R5bGVzLmNvbnRlbnRzUmlnaHRUZXh0Rm91cn0+MDQuIERpc2NvdmVyIHRoZSBjb3N0cyBvZiBpbXBsZW1lbnRpbmcgb3VyIGlkZWE8L1RleHQ+XHJcbiAgICAgICAgICA8VGV4dCBzdHlsZT17c3R5bGVzLmNvbnRlbnRzUmlnaHRUZXh0Rml2ZX0+MDUuIEluIHRoZSBmaW5hbCBzZWN0aW9uLCB5b3Ugd2lsbCBkaXNjb3ZlciB0aGUgc3RhcnR1cCdzIGJ1c2luZXNzIG1vZGVsPC9UZXh0PlxyXG4gICAgICAgIDwvVmlldz5cclxuICAgICAgPC9QYWdlPlxyXG4gICAgICB7LyogT1ZFUlZJRVcgU0VDVElPTiAqL31cclxuICAgICAgPFBhZ2Ugc3R5bGU9e3N0eWxlcy5vdmVydmlld1BhZ2V9PlxyXG4gICAgICAgIDxWaWV3IHN0eWxlPXtzdHlsZXMucmlnaHRCYXJ9IGZpeGVkPjwvVmlldz5cclxuICAgICAgICA8SW1hZ2Ugc3R5bGU9e3N0eWxlcy5vdmVydmlld0ltYWdlfSBzcmM9XCIvcGRmL2lkZWEucG5nXCIgaGVpZ2h0PXsyMH0gd2lkdGg9ezIwfSAvPlxyXG4gICAgICAgIDxWaWV3IHN0eWxlPXtzdHlsZXMub3ZlcnZpZXdTZWN0aW9ufT5cclxuICAgICAgICAgIDxUZXh0IHN0eWxlPXtzdHlsZXMub3ZlcnZpZXdIZWFkaW5nfT5TdGFydHVwIG92ZXJ2aWV3PC9UZXh0PlxyXG4gICAgICAgICAgPFRleHQgc3R5bGU9e3N0eWxlcy5vdmVydmlld1N1YnRpdGxlfT5UaGlzIHNlY3Rpb24gd2lsbCBoZWxwIHlvdSBiZXR0ZXIgdW5kZXJzdGFuZCB0aGUgc3RhcnR1cCB2aXNpb248L1RleHQ+XHJcbiAgICAgICAgICA8VmlldyBzdHlsZT17c3R5bGVzLnNlY3Rpb25Db250YWluZXJPbmV9PlxyXG4gICAgICAgICAgICA8VGV4dCBzdHlsZT17c3R5bGVzLnNlY3Rpb25IZWFkaW5nT25lfT5NYXJrZXQgcHJvYmxlbSB0aGF0IG5lZWRzIHRvIGJlIHNvbHZlZDwvVGV4dD5cclxuICAgICAgICAgICAgPFRleHQgc3R5bGU9e3N0eWxlcy5zZWN0aW9uVGV4dH0+e21hcmtldFByb2JsZW1TZWN0aW9ufTwvVGV4dD5cclxuICAgICAgICAgIDwvVmlldz5cclxuICAgICAgICAgIDxWaWV3IHN0eWxlPXtzdHlsZXMuc2VjdGlvbkNvbnRhaW5lclR3b30+XHJcbiAgICAgICAgICAgIDxUZXh0IHN0eWxlPXtzdHlsZXMuc2VjdGlvbkhlYWRpbmdUd299Pk91ciBzdGFydHVwIHNvbHV0aW9uIGZvciB0aGlzIHByb2JsZW08L1RleHQ+XHJcbiAgICAgICAgICAgIDxUZXh0IHN0eWxlPXtzdHlsZXMuc2VjdGlvblRleHR9PnttYXJrZXRTb2x1dGlvblNlY3Rpb259PC9UZXh0PlxyXG4gICAgICAgICAgPC9WaWV3PlxyXG4gICAgICAgICAgPFZpZXcgc3R5bGU9e3N0eWxlcy5zZWN0aW9uQ29udGFpbmVyVGhyZWV9PlxyXG4gICAgICAgICAgICA8VGV4dCBzdHlsZT17c3R5bGVzLnNlY3Rpb25IZWFkaW5nVGhyZWV9PldobyBpcyBiZWhpbmQgdGhlIGZvdW5kYXRpb24gb2YgdGhlIGZ1dHVyZSBjb21wYW55PzwvVGV4dD5cclxuICAgICAgICAgICAgPFRleHQgc3R5bGU9e3N0eWxlcy5zZWN0aW9uVGV4dH0+e2ZvdW5kZXJzU2VjdGlvbn08L1RleHQ+XHJcbiAgICAgICAgICA8L1ZpZXc+XHJcbiAgICAgICAgPC9WaWV3PlxyXG4gICAgICA8L1BhZ2U+XHJcbiAgICAgIHsvKiBQUk9EVUNUIFNFQ1RJT04gKi99XHJcbiAgICAgIDxQYWdlIHN0eWxlPXtzdHlsZXMub3ZlcnZpZXdQYWdlfT5cclxuICAgICAgICA8VmlldyBzdHlsZT17c3R5bGVzLnJpZ2h0QmFyfSBmaXhlZD48L1ZpZXc+XHJcbiAgICAgICAgPEltYWdlIHN0eWxlPXtzdHlsZXMub3ZlcnZpZXdJbWFnZX0gc3JjPVwiL3BkZi9ibHVlcHJpbnQucG5nXCIgaGVpZ2h0PXsyMH0gd2lkdGg9ezIwfSAvPlxyXG4gICAgICAgIDxWaWV3IHN0eWxlPXtzdHlsZXMub3ZlcnZpZXdTZWN0aW9ufT5cclxuICAgICAgICAgIDxUZXh0IHN0eWxlPXtzdHlsZXMub3ZlcnZpZXdIZWFkaW5nfT5Qcm9kdWN0PC9UZXh0PlxyXG4gICAgICAgICAgPFRleHQgc3R5bGU9e3N0eWxlcy5vdmVydmlld1N1YnRpdGxlfT5UaGlzIHNlY3Rpb24gd2lsbCBpbnRyb2R1Y2UgeW91IHRvIHRoZSB2aXNpb24gb2YgdGhlIHByb2R1Y3Q8L1RleHQ+XHJcbiAgICAgICAgICA8VmlldyBzdHlsZT17c3R5bGVzLnNlY3Rpb25Db250YWluZXJPbmV9PlxyXG4gICAgICAgICAgICA8VGV4dCBzdHlsZT17c3R5bGVzLnNlY3Rpb25IZWFkaW5nT25lfT5XaGF0IGRvZXMgdGhlIHBlcmZlY3QgdmVyc2lvbiBvZiB0aGUgcHJvZHVjdCBsb29rIGxpa2U/PC9UZXh0PlxyXG4gICAgICAgICAgICA8VGV4dCBzdHlsZT17c3R5bGVzLnNlY3Rpb25UZXh0fT57cHJvZHVjdE92ZXJ2aWV3U2VjdGlvbn08L1RleHQ+XHJcbiAgICAgICAgICA8L1ZpZXc+XHJcbiAgICAgICAgICA8VmlldyBzdHlsZT17c3R5bGVzLnNlY3Rpb25Db250YWluZXJUd299PlxyXG4gICAgICAgICAgICA8VGV4dCBzdHlsZT17c3R5bGVzLnNlY3Rpb25IZWFkaW5nVHdvfT5Ib3cgd2lsbCBvdGhlciBwZW9wbGUgZmluZCBvdXQgYWJvdXQgdGhlIHByb2R1Y3Q/PC9UZXh0PlxyXG4gICAgICAgICAgICA8VGV4dCBzdHlsZT17c3R5bGVzLnNlY3Rpb25UZXh0fT57cHJvZHVjdFByb21vdGlvblNlY3Rpb259PC9UZXh0PlxyXG4gICAgICAgICAgPC9WaWV3PlxyXG4gICAgICAgICAgPFZpZXcgc3R5bGU9e3N0eWxlcy5zZWN0aW9uQ29udGFpbmVyVGhyZWV9PlxyXG4gICAgICAgICAgICA8VGV4dCBzdHlsZT17c3R5bGVzLnNlY3Rpb25IZWFkaW5nVGhyZWV9PldoYXQgYmVuZWZpdHMgd2lsbCB0aGlzIHByb2R1Y3QgYnJpbmdzIHRvIGN1c3RvbWVycz88L1RleHQ+XHJcbiAgICAgICAgICAgIDxUZXh0IHN0eWxlPXtzdHlsZXMuc2VjdGlvblRleHR9Pntwcm9kdWN0QmVuZWZpdHNTZWN0aW9ufTwvVGV4dD5cclxuICAgICAgICAgIDwvVmlldz5cclxuICAgICAgICA8L1ZpZXc+XHJcbiAgICAgIDwvUGFnZT5cclxuICAgICAgey8qIE1BUktFVCBTRUNUSU9OICovfVxyXG4gICAgICA8UGFnZSBzdHlsZT17c3R5bGVzLm92ZXJ2aWV3UGFnZX0+XHJcbiAgICAgICAgPFZpZXcgc3R5bGU9e3N0eWxlcy5yaWdodEJhcn0gZml4ZWQ+PC9WaWV3PlxyXG4gICAgICAgIDxJbWFnZSBzdHlsZT17c3R5bGVzLm92ZXJ2aWV3SW1hZ2V9IHNyYz1cIi9wZGYvdW5pY29ybi5wbmdcIiBoZWlnaHQ9ezIwfSB3aWR0aD17MjB9IC8+XHJcbiAgICAgICAgPFZpZXcgc3R5bGU9e3N0eWxlcy5vdmVydmlld1NlY3Rpb259PlxyXG4gICAgICAgICAgPFRleHQgc3R5bGU9e3N0eWxlcy5vdmVydmlld0hlYWRpbmd9Pk1hcmtldCBhbmFseXNpczwvVGV4dD5cclxuICAgICAgICAgIDxUZXh0IHN0eWxlPXtzdHlsZXMub3ZlcnZpZXdTdWJ0aXRsZX0+VGhpcyBzZWN0aW9uIHdpbGwgcmV2ZWFsIGFsbCB0aGUgY2FyZHMgb2YgdGhlIG1hcmtldDwvVGV4dD5cclxuICAgICAgICAgIDxWaWV3IHN0eWxlPXtzdHlsZXMuc2VjdGlvbkNvbnRhaW5lck9uZX0+XHJcbiAgICAgICAgICAgIDxUZXh0IHN0eWxlPXtzdHlsZXMuc2VjdGlvbkhlYWRpbmdPbmV9PkEgZ2VuZXJhbCB2aWV3IG9mIHRoZSBtYXJrZXQgdGhhdCBjYW4gYmUgb2J0YWluZWQ8L1RleHQ+XHJcbiAgICAgICAgICAgIDxUZXh0IHN0eWxlPXtzdHlsZXMuc2VjdGlvblRleHR9PnttYXJrZXRPdmVydmlld1NlY3Rpb259PC9UZXh0PlxyXG4gICAgICAgICAgPC9WaWV3PlxyXG4gICAgICAgICAgPFZpZXcgc3R5bGU9e3N0eWxlcy5zZWN0aW9uQ29udGFpbmVyVHdvfT5cclxuICAgICAgICAgICAgPFRleHQgc3R5bGU9e3N0eWxlcy5zZWN0aW9uSGVhZGluZ1R3b30+V2hhdCBpcyB0aGUgbWFpbiBjb21wZXRpdGlvbiBvbiB0aGUgbWFya2V0PzwvVGV4dD5cclxuICAgICAgICAgICAgPFRleHQgc3R5bGU9e3N0eWxlcy5zZWN0aW9uVGV4dH0+e2NvbXBldGl0b3JzU2VjdGlvbn08L1RleHQ+XHJcbiAgICAgICAgICA8L1ZpZXc+XHJcbiAgICAgICAgICA8VmlldyBzdHlsZT17c3R5bGVzLnNlY3Rpb25Db250YWluZXJUd299PlxyXG4gICAgICAgICAgICA8VGV4dCBzdHlsZT17c3R5bGVzLnNlY3Rpb25IZWFkaW5nVHdvfT5XaGF0IG1ha2VzIGEgc3RhcnR1cCBzdGFuZCBvdXQgZnJvbSB0aGUgY29tcGV0aXRpb24/PC9UZXh0PlxyXG4gICAgICAgICAgICA8VGV4dCBzdHlsZT17c3R5bGVzLnNlY3Rpb25UZXh0fT57Y29tcGV0aXRpb25EaXN0aW5ndWlzaFNlY3Rpb259PC9UZXh0PlxyXG4gICAgICAgICAgPC9WaWV3PlxyXG4gICAgICAgICAgPFZpZXcgc3R5bGU9e3N0eWxlcy5zZWN0aW9uQ29udGFpbmVyVGhyZWV9PlxyXG4gICAgICAgICAgICA8VGV4dCBzdHlsZT17c3R5bGVzLnNlY3Rpb25IZWFkaW5nVGhyZWV9PldobyBhcmUgdGhlIHRhcmdldCBjdXN0b21lcnMgb2YgdGhlIHN0YXJ0dXA/PC9UZXh0PlxyXG4gICAgICAgICAgICA8VGV4dCBzdHlsZT17c3R5bGVzLnNlY3Rpb25UZXh0fT57dGFyZ2V0Q3VzdG9tZXJzU2VjdGlvbn08L1RleHQ+XHJcbiAgICAgICAgICA8L1ZpZXc+XHJcbiAgICAgICAgPC9WaWV3PlxyXG4gICAgICA8L1BhZ2U+XHJcbiAgICAgIHsvKiBGSU5BTkNFUyBTRUNUSU9OICovfVxyXG4gICAgICA8UGFnZSBzdHlsZT17c3R5bGVzLm92ZXJ2aWV3UGFnZX0+XHJcbiAgICAgICAgPFZpZXcgc3R5bGU9e3N0eWxlcy5yaWdodEJhcn0gZml4ZWQ+PC9WaWV3PlxyXG4gICAgICAgIDxJbWFnZSBzdHlsZT17c3R5bGVzLm92ZXJ2aWV3SW1hZ2V9IHNyYz1cIi9wZGYvYnVkZ2V0LnBuZ1wiIGhlaWdodD17MjB9IHdpZHRoPXsyMH0gLz5cclxuICAgICAgICA8VmlldyBzdHlsZT17c3R5bGVzLm92ZXJ2aWV3U2VjdGlvbn0+XHJcbiAgICAgICAgICA8VGV4dCBzdHlsZT17c3R5bGVzLm92ZXJ2aWV3SGVhZGluZ30+RmluYW5jZXM8L1RleHQ+XHJcbiAgICAgICAgICA8VGV4dCBzdHlsZT17c3R5bGVzLm92ZXJ2aWV3U3VidGl0bGV9PkRpc2NvdmVyIHRoZSBjb3N0cyBvZiBpbXBsZW1lbnRpbmcgb3VyIGlkZWE8L1RleHQ+XHJcbiAgICAgICAgICA8VmlldyBzdHlsZT17c3R5bGVzLnNlY3Rpb25Db250YWluZXJPbmV9PlxyXG4gICAgICAgICAgICA8VGV4dCBzdHlsZT17c3R5bGVzLnNlY3Rpb25IZWFkaW5nT25lfT5Ib3cgbXVjaCBtb25leSB3aWxsIGl0IHRha2UgdG8gbGF1bmNoIHRoZSBzdGFydHVwPzwvVGV4dD5cclxuICAgICAgICAgICAgPFRleHQgc3R5bGU9e3N0eWxlcy5zZWN0aW9uVGV4dH0+e3N0YXJ0dXBDb3N0c1NlY3Rpb259PC9UZXh0PlxyXG4gICAgICAgICAgPC9WaWV3PlxyXG4gICAgICAgICAgPFZpZXcgc3R5bGU9e3N0eWxlcy5zZWN0aW9uQ29udGFpbmVyVHdvfT5cclxuICAgICAgICAgICAgPFRleHQgc3R5bGU9e3N0eWxlcy5zZWN0aW9uSGVhZGluZ1R3b30+QXBwcm94aW1hdGUgY29zdHMgb2YgbWFpbnRhaW5pbmcgYSBzdGFydHVwPC9UZXh0PlxyXG4gICAgICAgICAgICA8VGV4dCBzdHlsZT17c3R5bGVzLnNlY3Rpb25UZXh0fT57cnVubmluZ0Nvc3RzU2VjdGlvbn08L1RleHQ+XHJcbiAgICAgICAgICA8L1ZpZXc+XHJcbiAgICAgICAgICA8VmlldyBzdHlsZT17c3R5bGVzLnNlY3Rpb25Db250YWluZXJUaHJlZX0+XHJcbiAgICAgICAgICAgIDxUZXh0IHN0eWxlPXtzdHlsZXMuc2VjdGlvbkhlYWRpbmdUaHJlZX0+SG93IGRvZXMgdGhlIGlkZWEgd2lsbCBiZSBmdW5kPzwvVGV4dD5cclxuICAgICAgICAgICAgPFRleHQgc3R5bGU9e3N0eWxlcy5zZWN0aW9uVGV4dH0+e2ZpbmFuY2luZ1NlY3Rpb259PC9UZXh0PlxyXG4gICAgICAgICAgPC9WaWV3PlxyXG4gICAgICAgIDwvVmlldz5cclxuICAgICAgPC9QYWdlPlxyXG4gICAgICB7LyogQlVTSU5FU1MgTU9ERUwgU0VDVElPTiAqL31cclxuICAgICAgPFBhZ2Ugc3R5bGU9e3N0eWxlcy5vdmVydmlld1BhZ2V9PlxyXG4gICAgICAgIDxWaWV3IHN0eWxlPXtzdHlsZXMucmlnaHRCYXJ9IGZpeGVkPjwvVmlldz5cclxuICAgICAgICA8SW1hZ2Ugc3R5bGU9e3N0eWxlcy5vdmVydmlld0ltYWdlfSBzcmM9XCIvcGRmL3N0YXJ0dXAucG5nXCIgaGVpZ2h0PXsyMH0gd2lkdGg9ezIwfSAvPlxyXG4gICAgICAgIDxWaWV3IHN0eWxlPXtzdHlsZXMub3ZlcnZpZXdTZWN0aW9ufT5cclxuICAgICAgICAgIDxUZXh0IHN0eWxlPXtzdHlsZXMub3ZlcnZpZXdIZWFkaW5nfT5CdXNpbmVzcyBtb2RlbDwvVGV4dD5cclxuICAgICAgICAgIDxUZXh0IHN0eWxlPXtzdHlsZXMub3ZlcnZpZXdTdWJ0aXRsZX0+SW4gdGhlIGZpbmFsIHNlY3Rpb24sIHlvdSB3aWxsIGRpc2NvdmVyIHRoZSBzdGFydHVwJ3MgYnVzaW5lc3MgbW9kZWw8L1RleHQ+XHJcbiAgICAgICAgICA8VmlldyBzdHlsZT17c3R5bGVzLnNlY3Rpb25Db250YWluZXJPbmV9PlxyXG4gICAgICAgICAgICA8VGV4dCBzdHlsZT17c3R5bGVzLnNlY3Rpb25IZWFkaW5nT25lfT5XaGF0IHdpbGwgdGhlIHN0YXJ0dXAncyBidXNpbmVzcyBtb2RlbCBsb29rIGxpa2U/PC9UZXh0PlxyXG4gICAgICAgICAgICA8VGV4dCBzdHlsZT17c3R5bGVzLnNlY3Rpb25UZXh0fT57YnVzaW5lc3NNb2RlbE92ZXJ2aWV3U2VjdGlvbn08L1RleHQ+XHJcbiAgICAgICAgICA8L1ZpZXc+XHJcbiAgICAgICAgICA8VmlldyBzdHlsZT17c3R5bGVzLnNlY3Rpb25Db250YWluZXJUd299PlxyXG4gICAgICAgICAgICA8VGV4dCBzdHlsZT17c3R5bGVzLnNlY3Rpb25IZWFkaW5nVHdvfT5QcmVkaWN0aW9ucyBmb3Igc3RhcnR1cCBncm93dGg8L1RleHQ+XHJcbiAgICAgICAgICAgIDxUZXh0IHN0eWxlPXtzdHlsZXMuc2VjdGlvblRleHR9PntidXNpbmVzc0dyb3dTZWN0aW9ufTwvVGV4dD5cclxuICAgICAgICAgIDwvVmlldz5cclxuICAgICAgICAgIDxWaWV3IHN0eWxlPXtzdHlsZXMuc2VjdGlvbkNvbnRhaW5lclRocmVlfT5cclxuICAgICAgICAgICAgPFRleHQgc3R5bGU9e3N0eWxlcy5zZWN0aW9uSGVhZGluZ1RocmVlfT5XaHkgaXMgaXQgdGhhdCBzdGFydHVwIHRoYXQgd2lsbCBjb25xdWVyIHRoZSB3b3JsZD88L1RleHQ+XHJcbiAgICAgICAgICAgIDxUZXh0IHN0eWxlPXtzdHlsZXMuc2VjdGlvblRleHR9Pnt3aHlTdWNjZXNzU2VjdGlvbn08L1RleHQ+XHJcbiAgICAgICAgICA8L1ZpZXc+XHJcbiAgICAgICAgPC9WaWV3PlxyXG4gICAgICA8L1BhZ2U+XHJcbiAgICA8L0RvY3VtZW50PlxyXG4gICk7XHJcblxyXG4gIC8vIGNvbnN0IFtudW1QYWdlcywgc2V0TnVtUGFnZXNdID0gdXNlU3RhdGUobnVsbCk7XHJcblxyXG4gIC8vIGNvbnN0IE15RG9jdW1lbnQgPSAocHJvcHMpID0+IChcclxuICAvLyAgIDxEb2N1bWVudFxyXG4gIC8vICAgICBmaWxlPXtwcm9wcy5kYXRhfVxyXG4gIC8vICAgICBvbkxvYWRTdWNjZXNzPXsoeyBudW1QYWdlcyB9KSA9PiBzZXROdW1QYWdlcyhudW1QYWdlcyl9XHJcbiAgLy8gICA+XHJcbiAgLy8gICAgIHtBcnJheS5hcHBseShudWxsLCBBcnJheShudW1QYWdlcykpXHJcbiAgLy8gICAgICAgLm1hcCgoeCwgaSkgPT4gaSArIDEpXHJcbiAgLy8gICAgICAgLm1hcCgocGFnZSkgPT4gKFxyXG4gIC8vICAgICAgICAgPFBhZ2UgcGFnZU51bWJlcj17cGFnZX0gc3R5bGU9e3N0eWxlcy5wYWdlfT5cclxuICAvLyAgICAgICAgICAgPFZpZXcgc3R5bGU9e3N0eWxlcy5zZWN0aW9ufT5cclxuICAvLyAgICAgICAgICAgPC9WaWV3PlxyXG4gIC8vICAgICAgICAgPC9QYWdlPlxyXG4gIC8vICAgICAgICkpfVxyXG4gIC8vICAgPC9Eb2N1bWVudD5cclxuICAvLyApO1xyXG5cclxuICByZXR1cm4gdXNlTWVtbyhcclxuICAgICgpID0+IChcclxuICAgICAgPD5cclxuICAgICAgICB7bWFuYWdlclBhZ2UgPyAoXHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXhcIj5cclxuICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgIHNyYz1cIi9tb2JpbGUtbmF2YmFyL3BkZi5zdmdcIlxyXG4gICAgICAgICAgICAgIG9uQ2xpY2s9e2FzeW5jIChlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBkb2MgPSA8TXlEb2N1bWVudDEgZGF0YT17ZGF0YX0gLz47XHJcbiAgICAgICAgICAgICAgICBjb25zdCBhc1BkZiA9IHBkZihbXSk7IC8vIHt9IGlzIGltcG9ydGFudCwgdGhyb3dzIHdpdGhvdXQgYW4gYXJndW1lbnRcclxuICAgICAgICAgICAgICAgIGFzUGRmLnVwZGF0ZUNvbnRhaW5lcihkb2MpO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgYmxvYiA9IGF3YWl0IGFzUGRmLnRvQmxvYigpO1xyXG4gICAgICAgICAgICAgICAgc2F2ZUFzKGJsb2IsIGAke2lkZWFOYW1lfS9pZGVhLXBsYW4ucGRmYCk7XHJcbiAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICBoZWlnaHQ9ezI2fVxyXG4gICAgICAgICAgICAgIHdpZHRoPXsyNn1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJjdXJzb3ItcG9pbnRlciBtbC0yXCIgc3JjPVwiL21vYmlsZS1uYXZiYXIvZm9yZWlnbi5zdmdcIiBoZWlnaHQ9ezI4fSB3aWR0aD17Mjh9IGNsYXNzTmFtZT1cImgtZnVsbFwiIC8+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApIDogKFxyXG4gICAgICAgICAgPD5cclxuICAgICAgICAgICAgPEV4aXRDb21wb25lbnQgLz5cclxuICAgICAgICAgICAgPGRpdiByZWY9e2NvbnRlbnRSZWZ9IGNsYXNzTmFtZT1cImgtc2NyZWVuIHctZnVsbCByZWxhdGl2ZSBmbGV4IGZsZXgtY29sIGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJjaXJjbGVzXCI+XHJcbiAgICAgICAgICAgICAgICA8bGk+PC9saT5cclxuICAgICAgICAgICAgICAgIDxsaT48L2xpPlxyXG4gICAgICAgICAgICAgICAgPGxpPjwvbGk+XHJcbiAgICAgICAgICAgICAgICA8bGk+PC9saT5cclxuICAgICAgICAgICAgICAgIDxsaT48L2xpPlxyXG4gICAgICAgICAgICAgICAgPGxpPjwvbGk+XHJcbiAgICAgICAgICAgICAgICA8bGk+PC9saT5cclxuICAgICAgICAgICAgICAgIDxsaT48L2xpPlxyXG4gICAgICAgICAgICAgICAgPGxpPjwvbGk+XHJcbiAgICAgICAgICAgICAgICA8bGk+PC9saT5cclxuICAgICAgICAgICAgICAgIHsvKiAxMCAqL31cclxuICAgICAgICAgICAgICAgIDxsaT48L2xpPlxyXG4gICAgICAgICAgICAgICAgPGxpPjwvbGk+XHJcbiAgICAgICAgICAgICAgICA8bGk+PC9saT5cclxuICAgICAgICAgICAgICAgIDxsaT48L2xpPlxyXG4gICAgICAgICAgICAgICAgPGxpPjwvbGk+XHJcbiAgICAgICAgICAgICAgICA8bGk+PC9saT5cclxuICAgICAgICAgICAgICAgIDxsaT48L2xpPlxyXG4gICAgICAgICAgICAgICAgPGxpPjwvbGk+XHJcbiAgICAgICAgICAgICAgICA8bGk+PC9saT5cclxuICAgICAgICAgICAgICAgIDxsaT48L2xpPlxyXG4gICAgICAgICAgICAgICAgPGxpPjwvbGk+XHJcbiAgICAgICAgICAgICAgICA8bGk+PC9saT5cclxuICAgICAgICAgICAgICAgIDxsaT48L2xpPlxyXG4gICAgICAgICAgICAgICAgPGxpPjwvbGk+XHJcbiAgICAgICAgICAgICAgICA8bGk+PC9saT5cclxuICAgICAgICAgICAgICAgIDxsaT48L2xpPlxyXG4gICAgICAgICAgICAgICAgPGxpPjwvbGk+XHJcbiAgICAgICAgICAgICAgICA8bGk+PC9saT5cclxuICAgICAgICAgICAgICAgIDxsaT48L2xpPlxyXG4gICAgICAgICAgICAgICAgPGxpPjwvbGk+XHJcbiAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIHctZnVsbCBtYXgtdy1zY3JlZW4tbWQgcmVsYXRpdmUgcGwtNiBwci02IG10LTE2IHBiLTI0XCI+XHJcbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXByaW1hcnlkYXJrIHRleHQtMnhsIG5vcm1hbDp0ZXh0LTN4bCBtdC0yIHBsLTIgZGFyazp0ZXh0LWJhY2tncm91bmQgdGV4dC1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCIvZ2lmcy9wb3BwZXIuZ2lmXCIgaGVpZ2h0PXs2MH0gd2lkdGg9ezYwfSBjbGFzc05hbWU9XCJpbmxpbmUtYmxvY2sgcmVsYXRpdmUgYm90dG9tLTQgbGVmdC0zXCIgLz5cclxuICAgICAgICAgICAgICAgICAgQ29uZ3JhdHVsYXRpb25zIVxyXG4gICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1ncmF5IHRleHQtYmFzZSBub3JtYWw6dGV4dC1sZyBwbC0yIGRhcms6dGV4dC1iYWNrZ3JvdW5kIHRleHQtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgIE5vdyB5b3UgY2FuIHNhdmUgeW91ciBpZGVhIGFuZCBzZXQgb2ZmIHRvIGNvbnF1ZXIgdGhlIHdvcmxkXHJcbiAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIi9zdWNjZXNzLnN2Z1wiIGhlaWdodD17MjAwfSB3aWR0aD17MjAwfSBjbGFzc05hbWU9XCJtdC00XCIgLz5cclxuICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ6LTEwIG1yLTQgbXQtNiBob3ZlcjpiZy1wcmltYXJ5IGhvdmVyOnRleHQtd2hpdGUgZGFyazpob3ZlcjpiZy1wcmltYXJ5ZGFyayBkYXJrOmhvdmVyOnRleHQtYmFja2dyb3VuZCBmb2N1czpvdXRsaW5lLW5vbmUgYm9yZGVyIGJvcmRlci1wcmltYXJ5IHRleHQtcHJpbWFyeSB0ZXh0LXNtIGZvbnQtbGlnaHQgcHktMiBweC04IHJvdW5kZWQtMnhsIGRhcms6dGV4dC1wcmltYXJ5ZGFyayBkYXJrOmJvcmRlci1wcmltYXJ5ZGFya1wiXHJcbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17b25Qcm9qZWN0TGVhdmV9XHJcbiAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICBCYWNrXHJcbiAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiei0xMCBtbC00IG10LTYgaG92ZXI6YmctcHJpbWFyeSBob3Zlcjp0ZXh0LXdoaXRlIGRhcms6aG92ZXI6YmctcHJpbWFyeWRhcmsgZGFyazpob3Zlcjp0ZXh0LWJhY2tncm91bmQgZm9jdXM6b3V0bGluZS1ub25lIGJvcmRlciBib3JkZXItcHJpbWFyeSB0ZXh0LXByaW1hcnkgdGV4dC1zbSBmb250LWxpZ2h0IHB5LTIgcHgtOCByb3VuZGVkLTJ4bCBkYXJrOnRleHQtcHJpbWFyeWRhcmsgZGFyazpib3JkZXItcHJpbWFyeWRhcmtcIlxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2FzeW5jIChlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICBjb25zdCBkb2MgPSA8TXlEb2N1bWVudDEgZGF0YT17ZGF0YX0gLz47XHJcbiAgICAgICAgICAgICAgICAgICAgICBjb25zdCBhc1BkZiA9IHBkZihbXSk7IC8vIHt9IGlzIGltcG9ydGFudCwgdGhyb3dzIHdpdGhvdXQgYW4gYXJndW1lbnRcclxuICAgICAgICAgICAgICAgICAgICAgIGFzUGRmLnVwZGF0ZUNvbnRhaW5lcihkb2MpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgY29uc3QgYmxvYiA9IGF3YWl0IGFzUGRmLnRvQmxvYigpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgc2F2ZUFzKGJsb2IsIGAke2lkZWFOYW1lfS9pZGVhLXBsYW4ucGRmYCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIFNhdmVcclxuICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8Lz5cclxuICAgICAgICApfVxyXG4gICAgICA8Lz5cclxuICAgICksXHJcbiAgICBbZGF0YV1cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgU3RhcnR1cFN1Y2Nlc3M7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=