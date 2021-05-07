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
/* harmony import */ var C_off_saas_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/regenerator */ "./node_modules/next/node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var C_off_saas_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(C_off_saas_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var C_off_saas_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _lib_firebase__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../lib/firebase */ "./lib/firebase.js");
/* harmony import */ var _lib_newAuth__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../lib/newAuth */ "./lib/newAuth.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! gsap */ "./node_modules/gsap/index.js");
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! file-saver */ "./node_modules/file-saver/dist/FileSaver.min.js");
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(file_saver__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _react_pdf_renderer__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @react-pdf/renderer */ "./node_modules/@react-pdf/renderer/lib/react-pdf.browser.es.js");
/* harmony import */ var _Tippy__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../Tippy */ "./components/dashboard/Tippy.js");
/* harmony import */ var _PDFDocument__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./PDFDocument */ "./components/dashboard/startup/PDFDocument.js");
/* harmony import */ var _AnimatedBackground__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./AnimatedBackground */ "./components/dashboard/startup/AnimatedBackground.js");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! js-cookie */ "./node_modules/js-cookie/src/js.cookie.js");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _ExitComponent__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./ExitComponent */ "./components/dashboard/startup/ExitComponent.js");





var _jsxFileName = "C:\\off-saas\\components\\dashboard\\startup\\StartupSuccess.js",
    _this = undefined,
    _s = $RefreshSig$();














var StartupSuccess = function StartupSuccess(_ref) {
  _s();

  var managerPage = _ref.managerPage;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(),
      projectId = _useState[0],
      setProjectId = _useState[1]; // STARTER


  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(''),
      ideaName = _useState2[0],
      setIdeaName = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(''),
      ideaDesc = _useState3[0],
      setIdeaDesc = _useState3[1];

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(''),
      ideaCountry = _useState4[0],
      setIdeaCountry = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(''),
      startupField = _useState5[0],
      setStartupField = _useState5[1];

  var _useState6 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(''),
      startupEmail = _useState6[0],
      setStartupEmail = _useState6[1];

  var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(''),
      startupPhone = _useState7[0],
      setStartupPhone = _useState7[1]; // IMAGE


  var _useState8 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(''),
      imageNameExists = _useState8[0],
      setImageNameExists = _useState8[1];

  var _useState9 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(''),
      avatarExists = _useState9[0],
      setAvatarExists = _useState9[1]; // OVERVIEW


  var _useState10 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(''),
      marketProblemSection = _useState10[0],
      setMarketProblemSection = _useState10[1];

  var _useState11 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(''),
      marketSolutionSection = _useState11[0],
      setMarketSolutionSection = _useState11[1];

  var _useState12 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(''),
      foundersSection = _useState12[0],
      setFoundersSection = _useState12[1]; // PRODUCT


  var _useState13 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(''),
      productOverviewSection = _useState13[0],
      setProductOverviewSection = _useState13[1];

  var _useState14 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(''),
      productPromotionSection = _useState14[0],
      setProductPromotionSection = _useState14[1];

  var _useState15 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(''),
      productBenefitsSection = _useState15[0],
      setProductBenefitsSection = _useState15[1]; // MARKET


  var _useState16 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(''),
      marketOverviewSection = _useState16[0],
      setMarketOverviewSection = _useState16[1];

  var _useState17 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(''),
      competitorsSection = _useState17[0],
      setCompetitorsSection = _useState17[1];

  var _useState18 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(''),
      competitionDistinguishSection = _useState18[0],
      setCompetitionDistinguishSection = _useState18[1];

  var _useState19 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(''),
      targetCustomersSection = _useState19[0],
      setTargetCustomersSection = _useState19[1]; // FINANCES


  var _useState20 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(''),
      startupCostsSection = _useState20[0],
      setStartupCostsSection = _useState20[1];

  var _useState21 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(''),
      runningCostsSection = _useState21[0],
      setRunningCostsSection = _useState21[1];

  var _useState22 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(''),
      financingSection = _useState22[0],
      setFinancingSection = _useState22[1]; // BUSINESS MODEL


  var _useState23 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(''),
      businessModelOverviewSection = _useState23[0],
      setBusinessModelOverviewSection = _useState23[1];

  var _useState24 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(''),
      businessGrowSection = _useState24[0],
      setBusinessGrowSection = _useState24[1];

  var _useState25 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(''),
      whySuccessSection = _useState25[0],
      setWhySuccessSection = _useState25[1];

  var _useAuth = Object(_lib_newAuth__WEBPACK_IMPORTED_MODULE_5__["useAuth"])(),
      currentUser = _useAuth.currentUser;

  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_6__["useRouter"])();
  var contentRef = Object(react__WEBPACK_IMPORTED_MODULE_3__["useRef"])(); // Data fetch

  var _useState26 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(false),
      loadingHelper = _useState26[0],
      setLoadingHelper = _useState26[1];

  var _useState27 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(''),
      documentId = _useState27[0],
      setDocumentId = _useState27[1];

  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function () {
    var userUid = js_cookie__WEBPACK_IMPORTED_MODULE_13___default.a.get('uid');
    gsap__WEBPACK_IMPORTED_MODULE_7__["default"].fromTo(contentRef.current, {
      autoAlpha: 0
    }, {
      autoAlpha: 1,
      duration: 1,
      ease: gsap__WEBPACK_IMPORTED_MODULE_7__["Linear"].easeIn
    });

    if (userUid && router.query.project) {
      var _data = _lib_firebase__WEBPACK_IMPORTED_MODULE_4__["db"].collection('projects').where('uid', '==', userUid);

      _data.where('projectName', '==', router.query.project).get().then(function (querySnapshot) {
        querySnapshot.forEach( /*#__PURE__*/function () {
          var _ref2 = Object(C_off_saas_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/C_off_saas_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee(doc1) {
            var initialData;
            return C_off_saas_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {
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
                    _lib_firebase__WEBPACK_IMPORTED_MODULE_4__["db"].collection('projects').doc(initialData.projectId).collection('startupIdea').doc(router.query.project).collection('inputs').onSnapshot(function (serverUpdate) {
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
    var _ref3 = Object(C_off_saas_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/C_off_saas_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee2(e) {
      return C_off_saas_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              e.preventDefault();
              gsap__WEBPACK_IMPORTED_MODULE_7__["default"].to(contentRef.current, {
                autoAlpha: 0,
                duration: 1,
                ease: gsap__WEBPACK_IMPORTED_MODULE_7__["Linear"].easeOut
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


  _react_pdf_renderer__WEBPACK_IMPORTED_MODULE_9__["Font"].register({
    src: '/fonts/poppins.ttf',
    family: 'Poppins'
  });
  _react_pdf_renderer__WEBPACK_IMPORTED_MODULE_9__["Font"].register({
    src: '/fonts/comfortaa.ttf',
    family: 'Comfortaa'
  });
  var styles = _react_pdf_renderer__WEBPACK_IMPORTED_MODULE_9__["StyleSheet"].create({
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
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_9__["Document"], {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_9__["Page"], {
        size: "A4",
        style: styles.homePage,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_9__["View"], {
          style: styles.homePageTitleSection,
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_9__["Text"], {
            style: styles.homePageTitle,
            children: "Startup idea plan"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 423,
            columnNumber: 11
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_9__["Text"], {
            style: styles.homePageDesc,
            children: "Just a simple startup about tech field"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 424,
            columnNumber: 11
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_9__["Image"], {
            src: image,
            style: styles.image,
            height: "250px",
            width: "250px"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 425,
            columnNumber: 11
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_9__["View"], {
            style: styles.leftDescBlock,
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_9__["Text"], {
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
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_9__["View"], {
          style: styles.rightBar
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 430,
          columnNumber: 9
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_9__["View"], {
          style: styles.rightBarContact,
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_9__["Text"], {
            children: startupField
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 432,
            columnNumber: 11
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_9__["Text"], {
            style: styles.countryText,
            children: ideaCountry
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 433,
            columnNumber: 11
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_9__["Text"], {
            style: styles.emailText,
            children: startupEmail
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 434,
            columnNumber: 11
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_9__["Text"], {
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
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_9__["View"], {
          style: styles.grayBarOne
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 437,
          columnNumber: 9
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_9__["View"], {
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
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_9__["Page"], {
        style: styles.contentsPage,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_9__["View"], {
          style: styles.rightBar,
          fixed: true
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 442,
          columnNumber: 9
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_9__["View"], {
          style: styles.contentsLeftBar,
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_9__["Text"], {
            children: "Startup overview"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 444,
            columnNumber: 11
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_9__["Text"], {
            children: "Product"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 445,
            columnNumber: 11
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_9__["Text"], {
            children: "Market analysis"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 446,
            columnNumber: 11
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_9__["Text"], {
            children: "Finances"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 447,
            columnNumber: 11
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_9__["Text"], {
            children: "Business model"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 448,
            columnNumber: 11
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_9__["View"], {
            style: styles.contentsBarOne
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 449,
            columnNumber: 11
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_9__["View"], {
            style: styles.contentsBarTwo
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 450,
            columnNumber: 11
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_9__["View"], {
            style: styles.contentsBarThree
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 451,
            columnNumber: 11
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_9__["View"], {
            style: styles.contentsBarFour
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 452,
            columnNumber: 11
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_9__["View"], {
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
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_9__["View"], {
          style: styles.contentsRightBar,
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_9__["Text"], {
            style: styles.contentsRightTextOne,
            children: "01. This section will help you better understand the startup vision"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 456,
            columnNumber: 11
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_9__["Text"], {
            style: styles.contentsRightTextTwo,
            children: "02. This section will introduce you to the vision of the product"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 457,
            columnNumber: 11
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_9__["Text"], {
            style: styles.contentsRightTextThree,
            children: "03. This section will reveal all the cards of the market"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 458,
            columnNumber: 11
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_9__["Text"], {
            style: styles.contentsRightTextFour,
            children: "04. Discover the costs of implementing our idea"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 459,
            columnNumber: 11
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_9__["Text"], {
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
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_9__["Page"], {
        style: styles.overviewPage,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_9__["View"], {
          style: styles.rightBar,
          fixed: true
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 465,
          columnNumber: 9
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_9__["Image"], {
          style: styles.overviewImage,
          src: "/pdf/idea.png",
          height: 20,
          width: 20
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 466,
          columnNumber: 9
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_9__["View"], {
          style: styles.overviewSection,
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_9__["Text"], {
            style: styles.overviewHeading,
            children: "Startup overview"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 468,
            columnNumber: 11
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_9__["Text"], {
            style: styles.overviewSubtitle,
            children: "This section will help you better understand the startup vision"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 469,
            columnNumber: 11
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_9__["View"], {
            style: styles.sectionContainerOne,
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_9__["Text"], {
              style: styles.sectionHeadingOne,
              children: "Market problem that needs to be solved"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 471,
              columnNumber: 13
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_9__["Text"], {
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
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_9__["View"], {
            style: styles.sectionContainerTwo,
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_9__["Text"], {
              style: styles.sectionHeadingTwo,
              children: "Our startup solution for this problem"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 475,
              columnNumber: 13
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_9__["Text"], {
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
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_9__["View"], {
            style: styles.sectionContainerThree,
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_9__["Text"], {
              style: styles.sectionHeadingThree,
              children: "Who is behind the foundation of the future company?"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 479,
              columnNumber: 13
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_9__["Text"], {
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
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_9__["Page"], {
        style: styles.overviewPage,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_9__["View"], {
          style: styles.rightBar,
          fixed: true
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 486,
          columnNumber: 9
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_9__["Image"], {
          style: styles.overviewImage,
          src: "/pdf/blueprint.png",
          height: 20,
          width: 20
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 487,
          columnNumber: 9
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_9__["View"], {
          style: styles.overviewSection,
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_9__["Text"], {
            style: styles.overviewHeading,
            children: "Product"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 489,
            columnNumber: 11
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_9__["Text"], {
            style: styles.overviewSubtitle,
            children: "This section will introduce you to the vision of the product"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 490,
            columnNumber: 11
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_9__["View"], {
            style: styles.sectionContainerOne,
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_9__["Text"], {
              style: styles.sectionHeadingOne,
              children: "What does the perfect version of the product look like?"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 492,
              columnNumber: 13
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_9__["Text"], {
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
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_9__["View"], {
            style: styles.sectionContainerTwo,
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_9__["Text"], {
              style: styles.sectionHeadingTwo,
              children: "How will other people find out about the product?"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 496,
              columnNumber: 13
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_9__["Text"], {
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
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_9__["View"], {
            style: styles.sectionContainerThree,
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_9__["Text"], {
              style: styles.sectionHeadingThree,
              children: "What benefits will this product brings to customers?"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 500,
              columnNumber: 13
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_9__["Text"], {
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
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_9__["Page"], {
        style: styles.overviewPage,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_9__["View"], {
          style: styles.rightBar,
          fixed: true
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 507,
          columnNumber: 9
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_9__["Image"], {
          style: styles.overviewImage,
          src: "/pdf/unicorn.png",
          height: 20,
          width: 20
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 508,
          columnNumber: 9
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_9__["View"], {
          style: styles.overviewSection,
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_9__["Text"], {
            style: styles.overviewHeading,
            children: "Market analysis"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 510,
            columnNumber: 11
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_9__["Text"], {
            style: styles.overviewSubtitle,
            children: "This section will reveal all the cards of the market"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 511,
            columnNumber: 11
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_9__["View"], {
            style: styles.sectionContainerOne,
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_9__["Text"], {
              style: styles.sectionHeadingOne,
              children: "A general view of the market that can be obtained"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 513,
              columnNumber: 13
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_9__["Text"], {
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
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_9__["View"], {
            style: styles.sectionContainerTwo,
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_9__["Text"], {
              style: styles.sectionHeadingTwo,
              children: "What is the main competition on the market?"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 517,
              columnNumber: 13
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_9__["Text"], {
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
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_9__["View"], {
            style: styles.sectionContainerTwo,
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_9__["Text"], {
              style: styles.sectionHeadingTwo,
              children: "What makes a startup stand out from the competition?"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 521,
              columnNumber: 13
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_9__["Text"], {
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
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_9__["View"], {
            style: styles.sectionContainerThree,
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_9__["Text"], {
              style: styles.sectionHeadingThree,
              children: "Who are the target customers of the startup?"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 525,
              columnNumber: 13
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_9__["Text"], {
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
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_9__["Page"], {
        style: styles.overviewPage,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_9__["View"], {
          style: styles.rightBar,
          fixed: true
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 532,
          columnNumber: 9
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_9__["Image"], {
          style: styles.overviewImage,
          src: "/pdf/budget.png",
          height: 20,
          width: 20
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 533,
          columnNumber: 9
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_9__["View"], {
          style: styles.overviewSection,
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_9__["Text"], {
            style: styles.overviewHeading,
            children: "Finances"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 535,
            columnNumber: 11
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_9__["Text"], {
            style: styles.overviewSubtitle,
            children: "Discover the costs of implementing our idea"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 536,
            columnNumber: 11
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_9__["View"], {
            style: styles.sectionContainerOne,
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_9__["Text"], {
              style: styles.sectionHeadingOne,
              children: "How much money will it take to launch the startup?"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 538,
              columnNumber: 13
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_9__["Text"], {
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
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_9__["View"], {
            style: styles.sectionContainerTwo,
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_9__["Text"], {
              style: styles.sectionHeadingTwo,
              children: "Approximate costs of maintaining a startup"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 542,
              columnNumber: 13
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_9__["Text"], {
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
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_9__["View"], {
            style: styles.sectionContainerThree,
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_9__["Text"], {
              style: styles.sectionHeadingThree,
              children: "How does the idea will be fund?"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 546,
              columnNumber: 13
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_9__["Text"], {
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
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_9__["Page"], {
        style: styles.overviewPage,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_9__["View"], {
          style: styles.rightBar,
          fixed: true
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 553,
          columnNumber: 9
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_9__["Image"], {
          style: styles.overviewImage,
          src: "/pdf/startup.png",
          height: 20,
          width: 20
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 554,
          columnNumber: 9
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_9__["View"], {
          style: styles.overviewSection,
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_9__["Text"], {
            style: styles.overviewHeading,
            children: "Business model"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 556,
            columnNumber: 11
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_9__["Text"], {
            style: styles.overviewSubtitle,
            children: "In the final section, you will discover the startup's business model"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 557,
            columnNumber: 11
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_9__["View"], {
            style: styles.sectionContainerOne,
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_9__["Text"], {
              style: styles.sectionHeadingOne,
              children: "What will the startup's business model look like?"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 559,
              columnNumber: 13
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_9__["Text"], {
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
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_9__["View"], {
            style: styles.sectionContainerTwo,
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_9__["Text"], {
              style: styles.sectionHeadingTwo,
              children: "Predictions for startup growth"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 563,
              columnNumber: 13
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_9__["Text"], {
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
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_9__["View"], {
            style: styles.sectionContainerThree,
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_9__["Text"], {
              style: styles.sectionHeadingThree,
              children: "Why is it that startup that will conquer the world?"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 567,
              columnNumber: 13
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_9__["Text"], {
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


  return Object(react__WEBPACK_IMPORTED_MODULE_3__["useMemo"])(function () {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
      children: managerPage ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
        src: "/mobile-navbar/pdf.svg",
        onClick: /*#__PURE__*/function () {
          var _ref4 = Object(C_off_saas_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/C_off_saas_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee3(e) {
            var doc, asPdf, blob;
            return C_off_saas_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee3$(_context3) {
              while (1) {
                switch (_context3.prev = _context3.next) {
                  case 0:
                    e.preventDefault();
                    doc = /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_PDFDocument__WEBPACK_IMPORTED_MODULE_11__["default"], {
                      data: data
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 601,
                      columnNumber: 27
                    }, _this);
                    asPdf = Object(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_9__["pdf"])([]); // {} is important, throws without an argument

                    asPdf.updateContainer(doc);
                    _context3.next = 6;
                    return asPdf.toBlob();

                  case 6:
                    blob = _context3.sent;
                    Object(file_saver__WEBPACK_IMPORTED_MODULE_8__["saveAs"])(blob, "".concat(ideaName, "/idea-plan.pdf"));

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
        lineNumber: 597,
        columnNumber: 11
      }, _this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_ExitComponent__WEBPACK_IMPORTED_MODULE_14__["default"], {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 612,
          columnNumber: 13
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          ref: contentRef,
          className: "h-screen w-full relative flex flex-col items-center justify-center",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("ul", {
            className: "circles",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 615,
              columnNumber: 17
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 616,
              columnNumber: 17
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 617,
              columnNumber: 17
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {}, void 0, false, {
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
              lineNumber: 626,
              columnNumber: 17
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 627,
              columnNumber: 17
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 628,
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
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 614,
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
                lineNumber: 649,
                columnNumber: 19
              }, _this), "Congratulations!"]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 648,
              columnNumber: 17
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
              className: "text-gray text-base normal:text-lg pl-2 dark:text-background text-center",
              children: "Now you can save your idea and set off to conquer the world"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 652,
              columnNumber: 17
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
              src: "/success.svg",
              height: 200,
              width: 200,
              className: "mt-4"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 655,
              columnNumber: 17
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
                className: "z-10 mr-4 mt-6 hover:bg-primary hover:text-white dark:hover:bg-primarydark dark:hover:text-background focus:outline-none border border-primary text-primary text-sm font-light py-2 px-8 rounded-2xl dark:text-primarydark dark:border-primarydark",
                onClick: onProjectLeave,
                children: "Back"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 657,
                columnNumber: 19
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
                className: "z-10 ml-4 mt-6 hover:bg-primary hover:text-white dark:hover:bg-primarydark dark:hover:text-background focus:outline-none border border-primary text-primary text-sm font-light py-2 px-8 rounded-2xl dark:text-primarydark dark:border-primarydark",
                onClick: /*#__PURE__*/function () {
                  var _ref5 = Object(C_off_saas_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/C_off_saas_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee4(e) {
                    var doc, asPdf, blob;
                    return C_off_saas_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee4$(_context4) {
                      while (1) {
                        switch (_context4.prev = _context4.next) {
                          case 0:
                            e.preventDefault();
                            doc = /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_PDFDocument__WEBPACK_IMPORTED_MODULE_11__["default"], {
                              data: data
                            }, void 0, false, {
                              fileName: _jsxFileName,
                              lineNumber: 667,
                              columnNumber: 35
                            }, _this);
                            asPdf = Object(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_9__["pdf"])([]); // {} is important, throws without an argument

                            asPdf.updateContainer(doc);
                            _context4.next = 6;
                            return asPdf.toBlob();

                          case 6:
                            blob = _context4.sent;
                            Object(file_saver__WEBPACK_IMPORTED_MODULE_8__["saveAs"])(blob, "".concat(ideaName, "/idea-plan.pdf"));

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
                lineNumber: 663,
                columnNumber: 19
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 656,
              columnNumber: 17
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 647,
            columnNumber: 15
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 613,
          columnNumber: 13
        }, _this)]
      }, void 0, true)
    }, void 0, false);
  }, [data]);
};

_s(StartupSuccess, "6kvqjumuXUGmSOS5G/9tNAFzo18=", false, function () {
  return [_lib_newAuth__WEBPACK_IMPORTED_MODULE_5__["useAuth"], next_router__WEBPACK_IMPORTED_MODULE_6__["useRouter"]];
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9kYXNoYm9hcmQvc3RhcnR1cC9TdGFydHVwU3VjY2Vzcy5qcyJdLCJuYW1lcyI6WyJTdGFydHVwU3VjY2VzcyIsIm1hbmFnZXJQYWdlIiwidXNlU3RhdGUiLCJwcm9qZWN0SWQiLCJzZXRQcm9qZWN0SWQiLCJpZGVhTmFtZSIsInNldElkZWFOYW1lIiwiaWRlYURlc2MiLCJzZXRJZGVhRGVzYyIsImlkZWFDb3VudHJ5Iiwic2V0SWRlYUNvdW50cnkiLCJzdGFydHVwRmllbGQiLCJzZXRTdGFydHVwRmllbGQiLCJzdGFydHVwRW1haWwiLCJzZXRTdGFydHVwRW1haWwiLCJzdGFydHVwUGhvbmUiLCJzZXRTdGFydHVwUGhvbmUiLCJpbWFnZU5hbWVFeGlzdHMiLCJzZXRJbWFnZU5hbWVFeGlzdHMiLCJhdmF0YXJFeGlzdHMiLCJzZXRBdmF0YXJFeGlzdHMiLCJtYXJrZXRQcm9ibGVtU2VjdGlvbiIsInNldE1hcmtldFByb2JsZW1TZWN0aW9uIiwibWFya2V0U29sdXRpb25TZWN0aW9uIiwic2V0TWFya2V0U29sdXRpb25TZWN0aW9uIiwiZm91bmRlcnNTZWN0aW9uIiwic2V0Rm91bmRlcnNTZWN0aW9uIiwicHJvZHVjdE92ZXJ2aWV3U2VjdGlvbiIsInNldFByb2R1Y3RPdmVydmlld1NlY3Rpb24iLCJwcm9kdWN0UHJvbW90aW9uU2VjdGlvbiIsInNldFByb2R1Y3RQcm9tb3Rpb25TZWN0aW9uIiwicHJvZHVjdEJlbmVmaXRzU2VjdGlvbiIsInNldFByb2R1Y3RCZW5lZml0c1NlY3Rpb24iLCJtYXJrZXRPdmVydmlld1NlY3Rpb24iLCJzZXRNYXJrZXRPdmVydmlld1NlY3Rpb24iLCJjb21wZXRpdG9yc1NlY3Rpb24iLCJzZXRDb21wZXRpdG9yc1NlY3Rpb24iLCJjb21wZXRpdGlvbkRpc3Rpbmd1aXNoU2VjdGlvbiIsInNldENvbXBldGl0aW9uRGlzdGluZ3Vpc2hTZWN0aW9uIiwidGFyZ2V0Q3VzdG9tZXJzU2VjdGlvbiIsInNldFRhcmdldEN1c3RvbWVyc1NlY3Rpb24iLCJzdGFydHVwQ29zdHNTZWN0aW9uIiwic2V0U3RhcnR1cENvc3RzU2VjdGlvbiIsInJ1bm5pbmdDb3N0c1NlY3Rpb24iLCJzZXRSdW5uaW5nQ29zdHNTZWN0aW9uIiwiZmluYW5jaW5nU2VjdGlvbiIsInNldEZpbmFuY2luZ1NlY3Rpb24iLCJidXNpbmVzc01vZGVsT3ZlcnZpZXdTZWN0aW9uIiwic2V0QnVzaW5lc3NNb2RlbE92ZXJ2aWV3U2VjdGlvbiIsImJ1c2luZXNzR3Jvd1NlY3Rpb24iLCJzZXRCdXNpbmVzc0dyb3dTZWN0aW9uIiwid2h5U3VjY2Vzc1NlY3Rpb24iLCJzZXRXaHlTdWNjZXNzU2VjdGlvbiIsInVzZUF1dGgiLCJjdXJyZW50VXNlciIsInJvdXRlciIsInVzZVJvdXRlciIsImNvbnRlbnRSZWYiLCJ1c2VSZWYiLCJsb2FkaW5nSGVscGVyIiwic2V0TG9hZGluZ0hlbHBlciIsImRvY3VtZW50SWQiLCJzZXREb2N1bWVudElkIiwidXNlRWZmZWN0IiwidXNlclVpZCIsIkNvb2tpZXMiLCJnZXQiLCJnc2FwIiwiZnJvbVRvIiwiY3VycmVudCIsImF1dG9BbHBoYSIsImR1cmF0aW9uIiwiZWFzZSIsIkxpbmVhciIsImVhc2VJbiIsInF1ZXJ5IiwicHJvamVjdCIsImRhdGEiLCJkYiIsImNvbGxlY3Rpb24iLCJ3aGVyZSIsInRoZW4iLCJxdWVyeVNuYXBzaG90IiwiZm9yRWFjaCIsImRvYzEiLCJpbml0aWFsRGF0YSIsInByb2plY3ROYW1lIiwicHJvamVjdERlc2NyaXB0aW9uIiwicHJvamVjdENvdW50cnkiLCJwcm9qZWN0RmllbGQiLCJwcm9qZWN0RW1haWwiLCJwcm9qZWN0TnVtYmVyIiwiaW1hZ2VOYW1lIiwiaW1hZ2VGaWxlVXJsIiwiZG9jIiwib25TbmFwc2hvdCIsInNlcnZlclVwZGF0ZSIsImRvY3MiLCJtYXAiLCJjb25zb2xlIiwibG9nIiwiaWQiLCJtYXJrZXRQcm9ibGVtU2VjdGlvbkRhdGEiLCJtYXJrZXRTb2x1dGlvblNlY3Rpb25EYXRhIiwiZm91bmRlcnNTZWN0aW9uRGF0YSIsInByb2R1Y3RPdmVydmlld1NlY3Rpb25EYXRhIiwicHJvZHVjdFByb21vdGlvblNlY3Rpb25EYXRhIiwicHJvZHVjdEJlbmVmaXRzU2VjdGlvbkRhdGEiLCJtYXJrZXRPdmVydmlld1NlY3Rpb25EYXRhIiwiY29tcGV0aXRvcnNTZWN0aW9uRGF0YSIsImNvbXBldGl0aW9uRGlzdGluZ3Vpc2hTZWN0aW9uRGF0YSIsInRhcmdldEN1c3RvbWVyc1NlY3Rpb25EYXRhIiwic3RhcnR1cENvc3RzU2VjdGlvbkRhdGEiLCJydW5uaW5nQ29zdHNTZWN0aW9uRGF0YSIsImZpbmFuY2luZ1NlY3Rpb25EYXRhIiwiYnVzaW5lc3NNb2RlbE92ZXJ2aWV3U2VjdGlvbkRhdGEiLCJidXNpbmVzc0dyb3dTZWN0aW9uRGF0YSIsIndoeVN1Y2Nlc3NTZWN0aW9uRGF0YSIsImltYWdlIiwib25Qcm9qZWN0TGVhdmUiLCJlIiwicHJldmVudERlZmF1bHQiLCJ0byIsImVhc2VPdXQiLCJzZXRUaW1lb3V0IiwicHVzaCIsIkZvbnQiLCJyZWdpc3RlciIsInNyYyIsImZhbWlseSIsInN0eWxlcyIsIlN0eWxlU2hlZXQiLCJjcmVhdGUiLCJob21lUGFnZSIsImZvbnRGYW1pbHkiLCJiYWNrZ3JvdW5kQ29sb3IiLCJmbGV4RGlyZWN0aW9uIiwiaG9tZVBhZ2VUaXRsZVNlY3Rpb24iLCJ3aWR0aCIsInRleHRBbGlnbiIsIm1hcmdpblRvcCIsImhvbWVQYWdlVGl0bGUiLCJmb250U2l6ZSIsImNvbG9yIiwiaG9tZVBhZ2VEZXNjIiwiaGVpZ2h0IiwiZGlzcGxheSIsIm1hcmdpbkxlZnQiLCJtYXJnaW5SaWdodCIsImxlZnREZXNjQmxvY2siLCJib3JkZXJUb3BSaWdodFJhZGl1cyIsImxlZnREZXNjQmxvY2tUZXh0IiwicGFkZGluZyIsImxpbmVIZWlnaHQiLCJyaWdodEJhciIsInBvc2l0aW9uIiwicmlnaHQiLCJyaWdodEJhckNvbnRhY3QiLCJib3R0b20iLCJib3JkZXJUb3BMZWZ0UmFkaXVzIiwiY291bnRyeVRleHQiLCJlbWFpbFRleHQiLCJwaG9uZU51bWJlclRleHQiLCJncmF5QmFyT25lIiwibGVmdCIsImdyYXlCYXJUd28iLCJvdmVydmlld1BhZ2UiLCJwYWRkaW5nVG9wIiwicGFkZGluZ0JvdHRvbSIsIm92ZXJ2aWV3SGVhZGluZyIsIm92ZXJ2aWV3U3VidGl0bGUiLCJvdmVydmlld0ltYWdlIiwidG9wIiwib3ZlcnZpZXdTZWN0aW9uIiwicGFkZGluZ0xlZnQiLCJwYWRkaW5nUmlnaHQiLCJzZWN0aW9uQ29udGFpbmVyT25lIiwic2VjdGlvbkhlYWRpbmdPbmUiLCJzZWN0aW9uVGV4dCIsInNlY3Rpb25Db250YWluZXJUd28iLCJzZWN0aW9uSGVhZGluZ1R3byIsInNlY3Rpb25Db250YWluZXJUaHJlZSIsInNlY3Rpb25IZWFkaW5nVGhyZWUiLCJjb250ZW50c1BhZ2UiLCJjb250ZW50c0xlZnRCYXIiLCJqdXN0aWZ5Q29udGVudCIsImFsaWduSXRlbXMiLCJjb250ZW50c0Jhck9uZSIsInRyYW5zZm9ybSIsImNvbnRlbnRzQmFyVHdvIiwiY29udGVudHNCYXJUaHJlZSIsImNvbnRlbnRzQmFyRm91ciIsImNvbnRlbnRzQmFyRml2ZSIsImNvbnRlbnRzUmlnaHRCYXIiLCJjb250ZW50c1JpZ2h0VGV4dE9uZSIsImNvbnRlbnRzUmlnaHRUZXh0VHdvIiwiY29udGVudHNSaWdodFRleHRUaHJlZSIsImNvbnRlbnRzUmlnaHRUZXh0Rm91ciIsImNvbnRlbnRzUmlnaHRUZXh0Rml2ZSIsIk15RG9jdW1lbnQiLCJwcm9wcyIsInVzZU1lbW8iLCJhc1BkZiIsInBkZiIsInVwZGF0ZUNvbnRhaW5lciIsInRvQmxvYiIsImJsb2IiLCJzYXZlQXMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNB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QTtBQUFBO0FBQUE7QUFBQSx1QkFERixlQU9FO0FBQ0UseUJBQVMsRUFBQyxvUEFEWjtBQUVFLHVCQUFPO0FBQUEsaVNBQUUsa0JBQU9DLENBQVA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ1BBLDZCQUFDLENBQUNDLGNBQUY7QUFDTTNCLCtCQUZDLGdCQUVLLHFFQUFDLHFEQUFEO0FBQWEsa0NBQUksRUFBRWpCO0FBQW5CO0FBQUE7QUFBQTtBQUFBO0FBQUEscUNBRkw7QUFHRDZILGlDQUhDLEdBR09DLCtEQUFHLENBQUMsRUFBRCxDQUhWLEVBR2dCOztBQUN2QkQsaUNBQUssQ0FBQ0UsZUFBTixDQUFzQjlHLEdBQXRCO0FBSk87QUFBQSxtQ0FLWTRHLEtBQUssQ0FBQ0csTUFBTixFQUxaOztBQUFBO0FBS0RDLGdDQUxDO0FBTVBDLHFGQUFNLENBQUNELElBQUQsWUFBVXpNLFFBQVYsb0JBQU47O0FBTk87QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBQUY7O0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBRlQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBUEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQVRGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFsQ0Y7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUZGO0FBQUE7QUFoQkoscUJBREY7QUFBQSxHQURZLEVBMEZaLENBQUN3RSxJQUFELENBMUZZLENBQWQ7QUE0RkQsQ0E5cEJEOztHQUFNN0UsYztVQW1Db0JxRCxvRCxFQUNURyxxRDs7O0tBcENYeEQsYztBQWdxQlNBLDZFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2Rhc2hib2FyZC9wcm9qZWN0cy40MmUxYjFlYWMzODVjMTdhZjg4Yi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QsIHVzZVJlZiwgdXNlTWVtbyB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgZGIgfSBmcm9tICcuLi8uLi8uLi9saWIvZmlyZWJhc2UnO1xyXG5pbXBvcnQgeyB1c2VBdXRoIH0gZnJvbSAnLi4vLi4vLi4vbGliL25ld0F1dGgnO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XHJcbmltcG9ydCBnc2FwLCB7IFBvd2VyNCwgTGluZWFyIH0gZnJvbSAnZ3NhcCc7XHJcbmltcG9ydCB7IHNhdmVBcyB9IGZyb20gJ2ZpbGUtc2F2ZXInO1xyXG5cclxuaW1wb3J0IHsgRm9udCwgcGRmLCBQYWdlLCBUZXh0LCBWaWV3LCBJbWFnZSwgRG9jdW1lbnQsIFN0eWxlU2hlZXQsIFBERlZpZXdlciwgUERGRG93bmxvYWRMaW5rIH0gZnJvbSAnQHJlYWN0LXBkZi9yZW5kZXJlcic7XHJcbmltcG9ydCBUaXBweU1vbnN0ZXIgZnJvbSAnLi4vVGlwcHknO1xyXG5pbXBvcnQgTXlEb2N1bWVudDEgZnJvbSAnLi9QREZEb2N1bWVudCc7XHJcbmltcG9ydCBBbmltYXRlZEJhY2tncm91bmQgZnJvbSAnLi9BbmltYXRlZEJhY2tncm91bmQnO1xyXG5pbXBvcnQgQ29va2llcyBmcm9tICdqcy1jb29raWUnO1xyXG5pbXBvcnQgRXhpdENvbXBvbmVudCBmcm9tICcuL0V4aXRDb21wb25lbnQnO1xyXG5cclxuY29uc3QgU3RhcnR1cFN1Y2Nlc3MgPSAoeyBtYW5hZ2VyUGFnZSB9KSA9PiB7XHJcbiAgY29uc3QgW3Byb2plY3RJZCwgc2V0UHJvamVjdElkXSA9IHVzZVN0YXRlKCk7XHJcbiAgLy8gU1RBUlRFUlxyXG4gIGNvbnN0IFtpZGVhTmFtZSwgc2V0SWRlYU5hbWVdID0gdXNlU3RhdGUoJycpO1xyXG4gIGNvbnN0IFtpZGVhRGVzYywgc2V0SWRlYURlc2NdID0gdXNlU3RhdGUoJycpO1xyXG4gIGNvbnN0IFtpZGVhQ291bnRyeSwgc2V0SWRlYUNvdW50cnldID0gdXNlU3RhdGUoJycpO1xyXG4gIGNvbnN0IFtzdGFydHVwRmllbGQsIHNldFN0YXJ0dXBGaWVsZF0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgY29uc3QgW3N0YXJ0dXBFbWFpbCwgc2V0U3RhcnR1cEVtYWlsXSA9IHVzZVN0YXRlKCcnKTtcclxuICBjb25zdCBbc3RhcnR1cFBob25lLCBzZXRTdGFydHVwUGhvbmVdID0gdXNlU3RhdGUoJycpO1xyXG4gIC8vIElNQUdFXHJcbiAgY29uc3QgW2ltYWdlTmFtZUV4aXN0cywgc2V0SW1hZ2VOYW1lRXhpc3RzXSA9IHVzZVN0YXRlKCcnKTtcclxuICBjb25zdCBbYXZhdGFyRXhpc3RzLCBzZXRBdmF0YXJFeGlzdHNdID0gdXNlU3RhdGUoJycpO1xyXG5cclxuICAvLyBPVkVSVklFV1xyXG4gIGNvbnN0IFttYXJrZXRQcm9ibGVtU2VjdGlvbiwgc2V0TWFya2V0UHJvYmxlbVNlY3Rpb25dID0gdXNlU3RhdGUoJycpO1xyXG4gIGNvbnN0IFttYXJrZXRTb2x1dGlvblNlY3Rpb24sIHNldE1hcmtldFNvbHV0aW9uU2VjdGlvbl0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgY29uc3QgW2ZvdW5kZXJzU2VjdGlvbiwgc2V0Rm91bmRlcnNTZWN0aW9uXSA9IHVzZVN0YXRlKCcnKTtcclxuICAvLyBQUk9EVUNUXHJcbiAgY29uc3QgW3Byb2R1Y3RPdmVydmlld1NlY3Rpb24sIHNldFByb2R1Y3RPdmVydmlld1NlY3Rpb25dID0gdXNlU3RhdGUoJycpO1xyXG4gIGNvbnN0IFtwcm9kdWN0UHJvbW90aW9uU2VjdGlvbiwgc2V0UHJvZHVjdFByb21vdGlvblNlY3Rpb25dID0gdXNlU3RhdGUoJycpO1xyXG4gIGNvbnN0IFtwcm9kdWN0QmVuZWZpdHNTZWN0aW9uLCBzZXRQcm9kdWN0QmVuZWZpdHNTZWN0aW9uXSA9IHVzZVN0YXRlKCcnKTtcclxuICAvLyBNQVJLRVRcclxuICBjb25zdCBbbWFya2V0T3ZlcnZpZXdTZWN0aW9uLCBzZXRNYXJrZXRPdmVydmlld1NlY3Rpb25dID0gdXNlU3RhdGUoJycpO1xyXG4gIGNvbnN0IFtjb21wZXRpdG9yc1NlY3Rpb24sIHNldENvbXBldGl0b3JzU2VjdGlvbl0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgY29uc3QgW2NvbXBldGl0aW9uRGlzdGluZ3Vpc2hTZWN0aW9uLCBzZXRDb21wZXRpdGlvbkRpc3Rpbmd1aXNoU2VjdGlvbl0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgY29uc3QgW3RhcmdldEN1c3RvbWVyc1NlY3Rpb24sIHNldFRhcmdldEN1c3RvbWVyc1NlY3Rpb25dID0gdXNlU3RhdGUoJycpO1xyXG4gIC8vIEZJTkFOQ0VTXHJcbiAgY29uc3QgW3N0YXJ0dXBDb3N0c1NlY3Rpb24sIHNldFN0YXJ0dXBDb3N0c1NlY3Rpb25dID0gdXNlU3RhdGUoJycpO1xyXG4gIGNvbnN0IFtydW5uaW5nQ29zdHNTZWN0aW9uLCBzZXRSdW5uaW5nQ29zdHNTZWN0aW9uXSA9IHVzZVN0YXRlKCcnKTtcclxuICBjb25zdCBbZmluYW5jaW5nU2VjdGlvbiwgc2V0RmluYW5jaW5nU2VjdGlvbl0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgLy8gQlVTSU5FU1MgTU9ERUxcclxuICBjb25zdCBbYnVzaW5lc3NNb2RlbE92ZXJ2aWV3U2VjdGlvbiwgc2V0QnVzaW5lc3NNb2RlbE92ZXJ2aWV3U2VjdGlvbl0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgY29uc3QgW2J1c2luZXNzR3Jvd1NlY3Rpb24sIHNldEJ1c2luZXNzR3Jvd1NlY3Rpb25dID0gdXNlU3RhdGUoJycpO1xyXG4gIGNvbnN0IFt3aHlTdWNjZXNzU2VjdGlvbiwgc2V0V2h5U3VjY2Vzc1NlY3Rpb25dID0gdXNlU3RhdGUoJycpO1xyXG5cclxuICBjb25zdCB7IGN1cnJlbnRVc2VyIH0gPSB1c2VBdXRoKCk7XHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcbiAgY29uc3QgY29udGVudFJlZiA9IHVzZVJlZigpO1xyXG5cclxuICAvLyBEYXRhIGZldGNoXHJcbiAgY29uc3QgW2xvYWRpbmdIZWxwZXIsIHNldExvYWRpbmdIZWxwZXJdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IFtkb2N1bWVudElkLCBzZXREb2N1bWVudElkXSA9IHVzZVN0YXRlKCcnKTtcclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc3QgdXNlclVpZCA9IENvb2tpZXMuZ2V0KCd1aWQnKTtcclxuICAgIGdzYXAuZnJvbVRvKGNvbnRlbnRSZWYuY3VycmVudCwgeyBhdXRvQWxwaGE6IDAgfSwgeyBhdXRvQWxwaGE6IDEsIGR1cmF0aW9uOiAxLCBlYXNlOiBMaW5lYXIuZWFzZUluIH0pO1xyXG4gICAgaWYgKHVzZXJVaWQgJiYgcm91dGVyLnF1ZXJ5LnByb2plY3QpIHtcclxuICAgICAgY29uc3QgZGF0YSA9IGRiLmNvbGxlY3Rpb24oJ3Byb2plY3RzJykud2hlcmUoJ3VpZCcsICc9PScsIHVzZXJVaWQpO1xyXG4gICAgICBkYXRhXHJcbiAgICAgICAgLndoZXJlKCdwcm9qZWN0TmFtZScsICc9PScsIHJvdXRlci5xdWVyeS5wcm9qZWN0KVxyXG4gICAgICAgIC5nZXQoKVxyXG4gICAgICAgIC50aGVuKChxdWVyeVNuYXBzaG90KSA9PiB7XHJcbiAgICAgICAgICBxdWVyeVNuYXBzaG90LmZvckVhY2goYXN5bmMgKGRvYzEpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgaW5pdGlhbERhdGEgPSBkb2MxLmRhdGEoKTtcclxuICAgICAgICAgICAgc2V0UHJvamVjdElkKGluaXRpYWxEYXRhLnByb2plY3RJZCk7XHJcbiAgICAgICAgICAgIC8vIFNUQVJURVI7XHJcbiAgICAgICAgICAgIHNldElkZWFOYW1lKGluaXRpYWxEYXRhLnByb2plY3ROYW1lKTtcclxuICAgICAgICAgICAgc2V0SWRlYURlc2MoaW5pdGlhbERhdGEucHJvamVjdERlc2NyaXB0aW9uKTtcclxuICAgICAgICAgICAgc2V0SWRlYUNvdW50cnkoaW5pdGlhbERhdGEucHJvamVjdENvdW50cnkpO1xyXG4gICAgICAgICAgICBzZXRTdGFydHVwRmllbGQoaW5pdGlhbERhdGEucHJvamVjdEZpZWxkKTtcclxuICAgICAgICAgICAgc2V0U3RhcnR1cEVtYWlsKGluaXRpYWxEYXRhLnByb2plY3RFbWFpbCk7XHJcbiAgICAgICAgICAgIHNldFN0YXJ0dXBQaG9uZShpbml0aWFsRGF0YS5wcm9qZWN0TnVtYmVyKTtcclxuICAgICAgICAgICAgLy8gSU1BR0VcclxuICAgICAgICAgICAgc2V0SW1hZ2VOYW1lRXhpc3RzKGluaXRpYWxEYXRhLmltYWdlTmFtZSk7XHJcbiAgICAgICAgICAgIHNldEF2YXRhckV4aXN0cyhpbml0aWFsRGF0YS5pbWFnZUZpbGVVcmwpO1xyXG5cclxuICAgICAgICAgICAgZGIuY29sbGVjdGlvbigncHJvamVjdHMnKVxyXG4gICAgICAgICAgICAgIC5kb2MoaW5pdGlhbERhdGEucHJvamVjdElkKVxyXG4gICAgICAgICAgICAgIC5jb2xsZWN0aW9uKCdzdGFydHVwSWRlYScpXHJcbiAgICAgICAgICAgICAgLmRvYyhyb3V0ZXIucXVlcnkucHJvamVjdClcclxuICAgICAgICAgICAgICAuY29sbGVjdGlvbignaW5wdXRzJylcclxuICAgICAgICAgICAgICAub25TbmFwc2hvdCgoc2VydmVyVXBkYXRlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBzZXJ2ZXJVcGRhdGUuZG9jcy5tYXAoKGRvYykgPT4ge1xyXG4gICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhkb2MuZGF0YSgpKTtcclxuICAgICAgICAgICAgICAgICAgY29uc3QgZGF0YSA9IGRvYy5kYXRhKCk7XHJcbiAgICAgICAgICAgICAgICAgIHNldERvY3VtZW50SWQoZG9jLmlkKTtcclxuICAgICAgICAgICAgICAgICAgLy8gT1ZFUlZJRVdcclxuICAgICAgICAgICAgICAgICAgc2V0TWFya2V0UHJvYmxlbVNlY3Rpb24oZGF0YS5tYXJrZXRQcm9ibGVtU2VjdGlvbkRhdGEpO1xyXG4gICAgICAgICAgICAgICAgICBzZXRNYXJrZXRTb2x1dGlvblNlY3Rpb24oZGF0YS5tYXJrZXRTb2x1dGlvblNlY3Rpb25EYXRhKTtcclxuICAgICAgICAgICAgICAgICAgc2V0Rm91bmRlcnNTZWN0aW9uKGRhdGEuZm91bmRlcnNTZWN0aW9uRGF0YSk7XHJcbiAgICAgICAgICAgICAgICAgIC8vIFBST0RVQ1RcclxuICAgICAgICAgICAgICAgICAgc2V0UHJvZHVjdE92ZXJ2aWV3U2VjdGlvbihkYXRhLnByb2R1Y3RPdmVydmlld1NlY3Rpb25EYXRhKTtcclxuICAgICAgICAgICAgICAgICAgc2V0UHJvZHVjdFByb21vdGlvblNlY3Rpb24oZGF0YS5wcm9kdWN0UHJvbW90aW9uU2VjdGlvbkRhdGEpO1xyXG4gICAgICAgICAgICAgICAgICBzZXRQcm9kdWN0QmVuZWZpdHNTZWN0aW9uKGRhdGEucHJvZHVjdEJlbmVmaXRzU2VjdGlvbkRhdGEpO1xyXG4gICAgICAgICAgICAgICAgICAvLyBNQVJLRVRcclxuICAgICAgICAgICAgICAgICAgc2V0TWFya2V0T3ZlcnZpZXdTZWN0aW9uKGRhdGEubWFya2V0T3ZlcnZpZXdTZWN0aW9uRGF0YSk7XHJcbiAgICAgICAgICAgICAgICAgIHNldENvbXBldGl0b3JzU2VjdGlvbihkYXRhLmNvbXBldGl0b3JzU2VjdGlvbkRhdGEpO1xyXG4gICAgICAgICAgICAgICAgICBzZXRDb21wZXRpdGlvbkRpc3Rpbmd1aXNoU2VjdGlvbihkYXRhLmNvbXBldGl0aW9uRGlzdGluZ3Vpc2hTZWN0aW9uRGF0YSk7XHJcbiAgICAgICAgICAgICAgICAgIHNldFRhcmdldEN1c3RvbWVyc1NlY3Rpb24oZGF0YS50YXJnZXRDdXN0b21lcnNTZWN0aW9uRGF0YSk7XHJcbiAgICAgICAgICAgICAgICAgIC8vIEZJTkFOQ0VTXHJcbiAgICAgICAgICAgICAgICAgIHNldFN0YXJ0dXBDb3N0c1NlY3Rpb24oZGF0YS5zdGFydHVwQ29zdHNTZWN0aW9uRGF0YSk7XHJcbiAgICAgICAgICAgICAgICAgIHNldFJ1bm5pbmdDb3N0c1NlY3Rpb24oZGF0YS5ydW5uaW5nQ29zdHNTZWN0aW9uRGF0YSk7XHJcbiAgICAgICAgICAgICAgICAgIHNldEZpbmFuY2luZ1NlY3Rpb24oZGF0YS5maW5hbmNpbmdTZWN0aW9uRGF0YSk7XHJcbiAgICAgICAgICAgICAgICAgIC8vIEJVU0lORVNTIE1PREVMXHJcbiAgICAgICAgICAgICAgICAgIHNldEJ1c2luZXNzTW9kZWxPdmVydmlld1NlY3Rpb24oZGF0YS5idXNpbmVzc01vZGVsT3ZlcnZpZXdTZWN0aW9uRGF0YSk7XHJcbiAgICAgICAgICAgICAgICAgIHNldEJ1c2luZXNzR3Jvd1NlY3Rpb24oZGF0YS5idXNpbmVzc0dyb3dTZWN0aW9uRGF0YSk7XHJcbiAgICAgICAgICAgICAgICAgIHNldFdoeVN1Y2Nlc3NTZWN0aW9uKGRhdGEud2h5U3VjY2Vzc1NlY3Rpb25EYXRhKTtcclxuICAgICAgICAgICAgICAgICAgc2V0TG9hZGluZ0hlbHBlcihmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgY29uc29sZS5sb2coJ0xvYWRpbmcgZmFpbGVkJyk7XHJcbiAgICAgIHNldExvYWRpbmdIZWxwZXIodHJ1ZSk7XHJcbiAgICB9XHJcbiAgfSwgW2xvYWRpbmdIZWxwZXIsIHJvdXRlci5xdWVyeS5wcm9qZWN0XSk7XHJcblxyXG4gIGNvbnN0IGltYWdlID0gYXZhdGFyRXhpc3RzICE9ICdibGFuaycgPyBhdmF0YXJFeGlzdHMgOiBpbWFnZU5hbWVFeGlzdHM7XHJcbiAgY29uc29sZS5sb2coaW1hZ2UpO1xyXG5cclxuICBjb25zdCBkYXRhID0ge1xyXG4gICAgaWRlYU5hbWUsXHJcbiAgICBpZGVhRGVzYyxcclxuICAgIGlkZWFDb3VudHJ5LFxyXG4gICAgc3RhcnR1cEZpZWxkLFxyXG4gICAgc3RhcnR1cEVtYWlsLFxyXG4gICAgc3RhcnR1cFBob25lLFxyXG4gICAgaW1hZ2VOYW1lRXhpc3RzLFxyXG4gICAgYXZhdGFyRXhpc3RzLFxyXG4gICAgbWFya2V0UHJvYmxlbVNlY3Rpb24sXHJcbiAgICBtYXJrZXRTb2x1dGlvblNlY3Rpb24sXHJcbiAgICBmb3VuZGVyc1NlY3Rpb24sXHJcbiAgICBwcm9kdWN0T3ZlcnZpZXdTZWN0aW9uLFxyXG4gICAgcHJvZHVjdFByb21vdGlvblNlY3Rpb24sXHJcbiAgICBwcm9kdWN0QmVuZWZpdHNTZWN0aW9uLFxyXG4gICAgbWFya2V0T3ZlcnZpZXdTZWN0aW9uLFxyXG4gICAgY29tcGV0aXRvcnNTZWN0aW9uLFxyXG4gICAgdGFyZ2V0Q3VzdG9tZXJzU2VjdGlvbixcclxuICAgIGNvbXBldGl0aW9uRGlzdGluZ3Vpc2hTZWN0aW9uLFxyXG4gICAgc3RhcnR1cENvc3RzU2VjdGlvbixcclxuICAgIHJ1bm5pbmdDb3N0c1NlY3Rpb24sXHJcbiAgICBmaW5hbmNpbmdTZWN0aW9uLFxyXG4gICAgYnVzaW5lc3NNb2RlbE92ZXJ2aWV3U2VjdGlvbixcclxuICAgIGJ1c2luZXNzR3Jvd1NlY3Rpb24sXHJcbiAgICB3aHlTdWNjZXNzU2VjdGlvbixcclxuICB9O1xyXG5cclxuICBjb25zdCBvblByb2plY3RMZWF2ZSA9IGFzeW5jIChlKSA9PiB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBnc2FwLnRvKGNvbnRlbnRSZWYuY3VycmVudCwge1xyXG4gICAgICBhdXRvQWxwaGE6IDAsXHJcbiAgICAgIGR1cmF0aW9uOiAxLFxyXG4gICAgICBlYXNlOiBMaW5lYXIuZWFzZU91dCxcclxuICAgIH0pO1xyXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgIHJvdXRlci5wdXNoKGAvZGFzaGJvYXJkL3Byb2plY3RzLyR7cm91dGVyLnF1ZXJ5LnByb2plY3R9L3N0YXJ0dXAtaWRlYS9idXNpbmVzcy1tb2RlbGApO1xyXG4gICAgfSwgMTIwMCk7XHJcbiAgfTtcclxuXHJcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBQREYgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHJcbiAgLy8gY29uc3QgZGVsYXkgPSAodCkgPT4gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHNldFRpbWVvdXQocmVzb2x2ZSwgdCkpO1xyXG5cclxuICAvLyBhc3luYyBmdW5jdGlvbiBnZXRQcm9wcygpIHtcclxuICAvLyAgIGF3YWl0IGRlbGF5KDFfMDAwKTtcclxuICAvLyAgIHJldHVybiB7XHJcbiAgLy8gICAgIHNvbWVTdHJpbmc6ICdZb3Ugd2FpdGVkIDEgc2Vjb25kIGZvciB0aGlzJyxcclxuICAvLyAgIH07XHJcbiAgLy8gfVxyXG5cclxuICBGb250LnJlZ2lzdGVyKHsgc3JjOiAnL2ZvbnRzL3BvcHBpbnMudHRmJywgZmFtaWx5OiAnUG9wcGlucycgfSk7XHJcbiAgRm9udC5yZWdpc3Rlcih7IHNyYzogJy9mb250cy9jb21mb3J0YWEudHRmJywgZmFtaWx5OiAnQ29tZm9ydGFhJyB9KTtcclxuXHJcbiAgY29uc3Qgc3R5bGVzID0gU3R5bGVTaGVldC5jcmVhdGUoe1xyXG4gICAgLy8gU1RBUlQgSE9NRVBBR0UgU0VDVElPTlxyXG4gICAgaG9tZVBhZ2U6IHtcclxuICAgICAgZm9udEZhbWlseTogJ0NvbWZvcnRhYScsXHJcbiAgICAgIGJhY2tncm91bmRDb2xvcjogJyNmOGY5ZmInLFxyXG4gICAgICBmbGV4RGlyZWN0aW9uOiAncm93JyxcclxuICAgIH0sXHJcbiAgICBob21lUGFnZVRpdGxlU2VjdGlvbjoge1xyXG4gICAgICB3aWR0aDogJzEwMCUnLFxyXG4gICAgICB0ZXh0QWxpZ246ICdjZW50ZXInLFxyXG4gICAgICBtYXJnaW5Ub3A6IDQwLFxyXG4gICAgfSxcclxuICAgIGhvbWVQYWdlVGl0bGU6IHtcclxuICAgICAgZm9udFNpemU6IDI2LFxyXG4gICAgICBjb2xvcjogJyMwYTEyMzAnLFxyXG4gICAgfSxcclxuICAgIGhvbWVQYWdlRGVzYzoge1xyXG4gICAgICBmb250U2l6ZTogMTYsXHJcbiAgICAgIGNvbG9yOiAnI2EwYWVjMCcsXHJcbiAgICB9LFxyXG4gICAgaW1hZ2U6IHtcclxuICAgICAgaGVpZ2h0OiAnMjAwcHgnLFxyXG4gICAgICB3aWR0aDogJzIwMHB4JyxcclxuICAgICAgZGlzcGxheTogJ2Jsb2NrJyxcclxuICAgICAgbWFyZ2luTGVmdDogJ2F1dG8nLFxyXG4gICAgICBtYXJnaW5SaWdodDogJ2F1dG8nLFxyXG4gICAgICBtYXJnaW5Ub3A6IDIyLFxyXG4gICAgfSxcclxuICAgIGxlZnREZXNjQmxvY2s6IHtcclxuICAgICAgd2lkdGg6ICc3NSUnLFxyXG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjNkM2M0ZGJyxcclxuICAgICAgdGV4dEFsaWduOiAnbGVmdCcsXHJcbiAgICAgIG1hcmdpblRvcDogJzMycHgnLFxyXG4gICAgICBib3JkZXJUb3BSaWdodFJhZGl1czogNTAsXHJcbiAgICB9LFxyXG4gICAgbGVmdERlc2NCbG9ja1RleHQ6IHtcclxuICAgICAgZm9udFNpemU6IDE0LFxyXG4gICAgICBwYWRkaW5nOiAzMixcclxuICAgICAgbGluZUhlaWdodDogMS40LFxyXG4gICAgICBjb2xvcjogJyNmOGY5ZmInLFxyXG4gICAgfSxcclxuICAgIHJpZ2h0QmFyOiB7XHJcbiAgICAgIGhlaWdodDogJzEwMHZoJyxcclxuICAgICAgd2lkdGg6ICcxNXB4JyxcclxuICAgICAgYmFja2dyb3VuZENvbG9yOiAnIzZDNjNGRicsXHJcbiAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxyXG4gICAgICByaWdodDogJzUlJyxcclxuICAgIH0sXHJcbiAgICByaWdodEJhckNvbnRhY3Q6IHtcclxuICAgICAgY29sb3I6ICcjZjhmOWZiJyxcclxuICAgICAgZm9udFNpemU6IDE0LFxyXG4gICAgICB3aWR0aDogJzUwJScsXHJcbiAgICAgIGJhY2tncm91bmRDb2xvcjogJyM2QzYzRkYnLFxyXG4gICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcclxuICAgICAgYm90dG9tOiAnMTAlJyxcclxuICAgICAgcmlnaHQ6ICc1JScsXHJcbiAgICAgIHBhZGRpbmc6IDMyLFxyXG4gICAgICBib3JkZXJUb3BMZWZ0UmFkaXVzOiA1MCxcclxuICAgIH0sXHJcbiAgICBjb3VudHJ5VGV4dDoge1xyXG4gICAgICBtYXJnaW5Ub3A6IDYsXHJcbiAgICB9LFxyXG4gICAgZW1haWxUZXh0OiB7XHJcbiAgICAgIG1hcmdpblRvcDogNixcclxuICAgIH0sXHJcbiAgICBwaG9uZU51bWJlclRleHQ6IHtcclxuICAgICAgbWFyZ2luVG9wOiA2LFxyXG4gICAgfSxcclxuICAgIGdyYXlCYXJPbmU6IHtcclxuICAgICAgaGVpZ2h0OiAnMjUlJyxcclxuICAgICAgd2lkdGg6ICcycHgnLFxyXG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjYTBhZWMwJyxcclxuICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXHJcbiAgICAgIGJvdHRvbTogJzMlJyxcclxuICAgICAgbGVmdDogJzEwJScsXHJcbiAgICB9LFxyXG4gICAgZ3JheUJhclR3bzoge1xyXG4gICAgICBoZWlnaHQ6ICcycHgnLFxyXG4gICAgICB3aWR0aDogJzIwJScsXHJcbiAgICAgIGJhY2tncm91bmRDb2xvcjogJyNhMGFlYzAnLFxyXG4gICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcclxuICAgICAgYm90dG9tOiAnNSUnLFxyXG4gICAgICBsZWZ0OiAnNSUnLFxyXG4gICAgfSxcclxuICAgIC8vIEVORCBTVEFSVCBIT01FUEFHRSBTRUNUSU9OXHJcbiAgICAvLyBTVEFSVCBPVkVSVklFVyBTRUNUSU9OXHJcbiAgICBvdmVydmlld1BhZ2U6IHtcclxuICAgICAgZm9udEZhbWlseTogJ0NvbWZvcnRhYScsXHJcbiAgICAgIGJhY2tncm91bmRDb2xvcjogJyNmOGY5ZmInLFxyXG4gICAgICBwYWRkaW5nVG9wOiAzNSxcclxuICAgICAgcGFkZGluZ0JvdHRvbTogMzUsXHJcbiAgICB9LFxyXG4gICAgb3ZlcnZpZXdIZWFkaW5nOiB7XHJcbiAgICAgIGZvbnRTaXplOiAyMixcclxuICAgICAgY29sb3I6ICcjMGExMjMwJyxcclxuICAgICAgbWFyZ2luTGVmdDogMjgsXHJcbiAgICB9LFxyXG4gICAgb3ZlcnZpZXdTdWJ0aXRsZToge1xyXG4gICAgICBmb250U2l6ZTogMTQsXHJcbiAgICAgIGNvbG9yOiAnI2EwYWVjMCcsXHJcbiAgICB9LFxyXG4gICAgb3ZlcnZpZXdJbWFnZToge1xyXG4gICAgICBoZWlnaHQ6ICcyMHB4JyxcclxuICAgICAgd2lkdGg6ICcyMHB4JyxcclxuICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXHJcbiAgICAgIHRvcDogMzcsXHJcbiAgICAgIGxlZnQ6IDMwLFxyXG4gICAgfSxcclxuICAgIG92ZXJ2aWV3U2VjdGlvbjoge1xyXG4gICAgICAvLyBwYWRkaW5nOiAnNSUnLFxyXG4gICAgICAvLyBwYWRkaW5nVG9wOiAnNSUnLFxyXG4gICAgICBwYWRkaW5nQm90dG9tOiAnNSUnLFxyXG4gICAgICBwYWRkaW5nTGVmdDogJzUlJyxcclxuICAgICAgcGFkZGluZ1JpZ2h0OiAnNSUnLFxyXG4gICAgfSxcclxuICAgIHNlY3Rpb25Db250YWluZXJPbmU6IHtcclxuICAgICAgbWFyZ2luVG9wOiAzMCxcclxuICAgIH0sXHJcbiAgICBzZWN0aW9uSGVhZGluZ09uZToge1xyXG4gICAgICBjb2xvcjogJyMwYTEyMzAnLFxyXG4gICAgICBmb250U2l6ZTogMTYsXHJcbiAgICB9LFxyXG4gICAgc2VjdGlvblRleHQ6IHtcclxuICAgICAgY29sb3I6ICcjMGExMjMwJyxcclxuICAgICAgZm9udFNpemU6IDEyLFxyXG4gICAgICBwYWRkaW5nVG9wOiA4LFxyXG4gICAgICBwYWRkaW5nUmlnaHQ6IDUwLFxyXG4gICAgfSxcclxuICAgIHNlY3Rpb25Db250YWluZXJUd286IHtcclxuICAgICAgcGFkZGluZ1RvcDogMzAsXHJcbiAgICB9LFxyXG4gICAgc2VjdGlvbkhlYWRpbmdUd286IHtcclxuICAgICAgY29sb3I6ICcjMGExMjMwJyxcclxuICAgICAgZm9udFNpemU6IDE2LFxyXG4gICAgfSxcclxuICAgIHNlY3Rpb25Db250YWluZXJUaHJlZToge1xyXG4gICAgICBwYWRkaW5nVG9wOiAzNixcclxuICAgICAgcGFkZGluZ0JvdHRvbTogMjYsXHJcbiAgICB9LFxyXG4gICAgc2VjdGlvbkhlYWRpbmdUaHJlZToge1xyXG4gICAgICBjb2xvcjogJyMwYTEyMzAnLFxyXG4gICAgICBmb250U2l6ZTogMTYsXHJcbiAgICB9LFxyXG4gICAgLy8gRU5EIE9WRVJWSUVXIFNFQ1RJT05cclxuICAgIC8vIFNUQVJUIFRBQkxFIE9GIENPTlRFTlRTIFNFQ1RJT05cclxuICAgIGNvbnRlbnRzUGFnZToge1xyXG4gICAgICBmb250RmFtaWx5OiAnQ29tZm9ydGFhJyxcclxuICAgIH0sXHJcbiAgICBjb250ZW50c0xlZnRCYXI6IHtcclxuICAgICAgaGVpZ2h0OiAnMTAwJScsXHJcbiAgICAgIHdpZHRoOiAnNDAlJyxcclxuICAgICAgYmFja2dyb3VuZENvbG9yOiAnIzZDNjNGRicsXHJcbiAgICAgIGRpc3BsYXk6ICdmbGV4JyxcclxuICAgICAganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLFxyXG4gICAgICBhbGlnbkl0ZW1zOiAnYmFzZWxpbmUnLFxyXG4gICAgICBjb2xvcjogJyNmOGY5ZmInLFxyXG4gICAgICBwYWRkaW5nTGVmdDogMzUsXHJcbiAgICAgIGZvbnRTaXplOiAyMCxcclxuICAgICAgbGluZUhlaWdodDogNCxcclxuICAgICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXHJcbiAgICB9LFxyXG4gICAgY29udGVudHNCYXJPbmU6IHtcclxuICAgICAgd2lkdGg6IDIwMCxcclxuICAgICAgaGVpZ2h0OiAyLFxyXG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjYTBhZWMwJyxcclxuICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXHJcbiAgICAgIHRvcDogJzM3JScsXHJcbiAgICAgIGxlZnQ6ICcxMDAlJyxcclxuICAgICAgdHJhbnNmb3JtOiAndHJhbnNsYXRlKC01MCUsIC01MCUpJyxcclxuICAgIH0sXHJcbiAgICBjb250ZW50c0JhclR3bzoge1xyXG4gICAgICB3aWR0aDogMjAwLFxyXG4gICAgICBoZWlnaHQ6IDIsXHJcbiAgICAgIGJhY2tncm91bmRDb2xvcjogJyNhMGFlYzAnLFxyXG4gICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcclxuICAgICAgdG9wOiAnNDYuNSUnLFxyXG4gICAgICBsZWZ0OiAnMTAwJScsXHJcbiAgICAgIHRyYW5zZm9ybTogJ3RyYW5zbGF0ZSgtNTAlLCAtNTAlKScsXHJcbiAgICB9LFxyXG4gICAgY29udGVudHNCYXJUaHJlZToge1xyXG4gICAgICB3aWR0aDogMjAwLFxyXG4gICAgICBoZWlnaHQ6IDIsXHJcbiAgICAgIGJhY2tncm91bmRDb2xvcjogJyNhMGFlYzAnLFxyXG4gICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcclxuICAgICAgdG9wOiAnNTYlJyxcclxuICAgICAgbGVmdDogJzEwMCUnLFxyXG4gICAgICB0cmFuc2Zvcm06ICd0cmFuc2xhdGUoLTUwJSwgLTUwJSknLFxyXG4gICAgfSxcclxuICAgIGNvbnRlbnRzQmFyRm91cjoge1xyXG4gICAgICB3aWR0aDogMjAwLFxyXG4gICAgICBoZWlnaHQ6IDIsXHJcbiAgICAgIGJhY2tncm91bmRDb2xvcjogJyNhMGFlYzAnLFxyXG4gICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcclxuICAgICAgdG9wOiAnNjUuNSUnLFxyXG4gICAgICBsZWZ0OiAnMTAwJScsXHJcbiAgICAgIHRyYW5zZm9ybTogJ3RyYW5zbGF0ZSgtNTAlLCAtNTAlKScsXHJcbiAgICB9LFxyXG4gICAgY29udGVudHNCYXJGaXZlOiB7XHJcbiAgICAgIHdpZHRoOiAyMDAsXHJcbiAgICAgIGhlaWdodDogMixcclxuICAgICAgYmFja2dyb3VuZENvbG9yOiAnI2EwYWVjMCcsXHJcbiAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxyXG4gICAgICB0b3A6ICc3NC43NSUnLFxyXG4gICAgICBsZWZ0OiAnMTAwJScsXHJcbiAgICAgIHRyYW5zZm9ybTogJ3RyYW5zbGF0ZSgtNTAlLCAtNTAlKScsXHJcbiAgICB9LFxyXG4gICAgY29udGVudHNSaWdodEJhcjoge1xyXG4gICAgICBoZWlnaHQ6ICcxMDAlJyxcclxuICAgICAgd2lkdGg6ICc2MCUnLFxyXG4gICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcclxuICAgICAgcmlnaHQ6ICcwJyxcclxuICAgICAgZGlzcGxheTogJ2ZsZXgnLFxyXG4gICAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcclxuICAgICAgZm9udFNpemU6IDEyLFxyXG4gICAgICBjb2xvcjogJyMwYTEyMzAnLFxyXG4gICAgICAvLyBwYWRkaW5nSG9yaXpvbnRhbDogNjQsXHJcbiAgICAgIHBhZGRpbmdSaWdodDogODAsXHJcbiAgICAgIHBhZGRpbmdMZWZ0OiAzMixcclxuICAgIH0sXHJcbiAgICBjb250ZW50c1JpZ2h0VGV4dE9uZToge1xyXG4gICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcclxuICAgICAgdG9wOiAnMjYuNzUlJyxcclxuICAgIH0sXHJcbiAgICBjb250ZW50c1JpZ2h0VGV4dFR3bzoge1xyXG4gICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcclxuICAgICAgdG9wOiAnMzYlJyxcclxuICAgIH0sXHJcbiAgICBjb250ZW50c1JpZ2h0VGV4dFRocmVlOiB7XHJcbiAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxyXG4gICAgICB0b3A6ICc0NS41JScsXHJcbiAgICB9LFxyXG4gICAgY29udGVudHNSaWdodFRleHRGb3VyOiB7XHJcbiAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxyXG4gICAgICB0b3A6ICc1NSUnLFxyXG4gICAgfSxcclxuICAgIGNvbnRlbnRzUmlnaHRUZXh0Rml2ZToge1xyXG4gICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcclxuICAgICAgdG9wOiAnNjQuMjUlJyxcclxuICAgIH0sXHJcbiAgfSk7XHJcblxyXG4gIGNvbnN0IE15RG9jdW1lbnQgPSAocHJvcHMpID0+IChcclxuICAgIDxEb2N1bWVudD5cclxuICAgICAgPFBhZ2Ugc2l6ZT1cIkE0XCIgc3R5bGU9e3N0eWxlcy5ob21lUGFnZX0+XHJcbiAgICAgICAgPFZpZXcgc3R5bGU9e3N0eWxlcy5ob21lUGFnZVRpdGxlU2VjdGlvbn0+XHJcbiAgICAgICAgICA8VGV4dCBzdHlsZT17c3R5bGVzLmhvbWVQYWdlVGl0bGV9PlN0YXJ0dXAgaWRlYSBwbGFuPC9UZXh0PlxyXG4gICAgICAgICAgPFRleHQgc3R5bGU9e3N0eWxlcy5ob21lUGFnZURlc2N9Pkp1c3QgYSBzaW1wbGUgc3RhcnR1cCBhYm91dCB0ZWNoIGZpZWxkPC9UZXh0PlxyXG4gICAgICAgICAgPEltYWdlIHNyYz17aW1hZ2V9IHN0eWxlPXtzdHlsZXMuaW1hZ2V9IGhlaWdodD1cIjI1MHB4XCIgd2lkdGg9XCIyNTBweFwiIC8+XHJcbiAgICAgICAgICA8VmlldyBzdHlsZT17c3R5bGVzLmxlZnREZXNjQmxvY2t9PlxyXG4gICAgICAgICAgICA8VGV4dCBzdHlsZT17c3R5bGVzLmxlZnREZXNjQmxvY2tUZXh0fT57aWRlYURlc2N9PC9UZXh0PlxyXG4gICAgICAgICAgPC9WaWV3PlxyXG4gICAgICAgIDwvVmlldz5cclxuICAgICAgICA8VmlldyBzdHlsZT17c3R5bGVzLnJpZ2h0QmFyfT48L1ZpZXc+XHJcbiAgICAgICAgPFZpZXcgc3R5bGU9e3N0eWxlcy5yaWdodEJhckNvbnRhY3R9PlxyXG4gICAgICAgICAgPFRleHQ+e3N0YXJ0dXBGaWVsZH08L1RleHQ+XHJcbiAgICAgICAgICA8VGV4dCBzdHlsZT17c3R5bGVzLmNvdW50cnlUZXh0fT57aWRlYUNvdW50cnl9PC9UZXh0PlxyXG4gICAgICAgICAgPFRleHQgc3R5bGU9e3N0eWxlcy5lbWFpbFRleHR9PntzdGFydHVwRW1haWx9PC9UZXh0PlxyXG4gICAgICAgICAgPFRleHQgc3R5bGU9e3N0eWxlcy5waG9uZU51bWJlclRleHR9PntzdGFydHVwUGhvbmV9PC9UZXh0PlxyXG4gICAgICAgIDwvVmlldz5cclxuICAgICAgICA8VmlldyBzdHlsZT17c3R5bGVzLmdyYXlCYXJPbmV9PjwvVmlldz5cclxuICAgICAgICA8VmlldyBzdHlsZT17c3R5bGVzLmdyYXlCYXJUd299PjwvVmlldz5cclxuICAgICAgPC9QYWdlPlxyXG4gICAgICB7LyogVEFCTEUgT0YgQ09OVEVOVFMgKi99XHJcbiAgICAgIDxQYWdlIHN0eWxlPXtzdHlsZXMuY29udGVudHNQYWdlfT5cclxuICAgICAgICA8VmlldyBzdHlsZT17c3R5bGVzLnJpZ2h0QmFyfSBmaXhlZD48L1ZpZXc+XHJcbiAgICAgICAgPFZpZXcgc3R5bGU9e3N0eWxlcy5jb250ZW50c0xlZnRCYXJ9PlxyXG4gICAgICAgICAgPFRleHQ+U3RhcnR1cCBvdmVydmlldzwvVGV4dD5cclxuICAgICAgICAgIDxUZXh0PlByb2R1Y3Q8L1RleHQ+XHJcbiAgICAgICAgICA8VGV4dD5NYXJrZXQgYW5hbHlzaXM8L1RleHQ+XHJcbiAgICAgICAgICA8VGV4dD5GaW5hbmNlczwvVGV4dD5cclxuICAgICAgICAgIDxUZXh0PkJ1c2luZXNzIG1vZGVsPC9UZXh0PlxyXG4gICAgICAgICAgPFZpZXcgc3R5bGU9e3N0eWxlcy5jb250ZW50c0Jhck9uZX0+PC9WaWV3PlxyXG4gICAgICAgICAgPFZpZXcgc3R5bGU9e3N0eWxlcy5jb250ZW50c0JhclR3b30+PC9WaWV3PlxyXG4gICAgICAgICAgPFZpZXcgc3R5bGU9e3N0eWxlcy5jb250ZW50c0JhclRocmVlfT48L1ZpZXc+XHJcbiAgICAgICAgICA8VmlldyBzdHlsZT17c3R5bGVzLmNvbnRlbnRzQmFyRm91cn0+PC9WaWV3PlxyXG4gICAgICAgICAgPFZpZXcgc3R5bGU9e3N0eWxlcy5jb250ZW50c0JhckZpdmV9PjwvVmlldz5cclxuICAgICAgICA8L1ZpZXc+XHJcbiAgICAgICAgPFZpZXcgc3R5bGU9e3N0eWxlcy5jb250ZW50c1JpZ2h0QmFyfT5cclxuICAgICAgICAgIDxUZXh0IHN0eWxlPXtzdHlsZXMuY29udGVudHNSaWdodFRleHRPbmV9PjAxLiBUaGlzIHNlY3Rpb24gd2lsbCBoZWxwIHlvdSBiZXR0ZXIgdW5kZXJzdGFuZCB0aGUgc3RhcnR1cCB2aXNpb248L1RleHQ+XHJcbiAgICAgICAgICA8VGV4dCBzdHlsZT17c3R5bGVzLmNvbnRlbnRzUmlnaHRUZXh0VHdvfT4wMi4gVGhpcyBzZWN0aW9uIHdpbGwgaW50cm9kdWNlIHlvdSB0byB0aGUgdmlzaW9uIG9mIHRoZSBwcm9kdWN0PC9UZXh0PlxyXG4gICAgICAgICAgPFRleHQgc3R5bGU9e3N0eWxlcy5jb250ZW50c1JpZ2h0VGV4dFRocmVlfT4wMy4gVGhpcyBzZWN0aW9uIHdpbGwgcmV2ZWFsIGFsbCB0aGUgY2FyZHMgb2YgdGhlIG1hcmtldDwvVGV4dD5cclxuICAgICAgICAgIDxUZXh0IHN0eWxlPXtzdHlsZXMuY29udGVudHNSaWdodFRleHRGb3VyfT4wNC4gRGlzY292ZXIgdGhlIGNvc3RzIG9mIGltcGxlbWVudGluZyBvdXIgaWRlYTwvVGV4dD5cclxuICAgICAgICAgIDxUZXh0IHN0eWxlPXtzdHlsZXMuY29udGVudHNSaWdodFRleHRGaXZlfT4wNS4gSW4gdGhlIGZpbmFsIHNlY3Rpb24sIHlvdSB3aWxsIGRpc2NvdmVyIHRoZSBzdGFydHVwJ3MgYnVzaW5lc3MgbW9kZWw8L1RleHQ+XHJcbiAgICAgICAgPC9WaWV3PlxyXG4gICAgICA8L1BhZ2U+XHJcbiAgICAgIHsvKiBPVkVSVklFVyBTRUNUSU9OICovfVxyXG4gICAgICA8UGFnZSBzdHlsZT17c3R5bGVzLm92ZXJ2aWV3UGFnZX0+XHJcbiAgICAgICAgPFZpZXcgc3R5bGU9e3N0eWxlcy5yaWdodEJhcn0gZml4ZWQ+PC9WaWV3PlxyXG4gICAgICAgIDxJbWFnZSBzdHlsZT17c3R5bGVzLm92ZXJ2aWV3SW1hZ2V9IHNyYz1cIi9wZGYvaWRlYS5wbmdcIiBoZWlnaHQ9ezIwfSB3aWR0aD17MjB9IC8+XHJcbiAgICAgICAgPFZpZXcgc3R5bGU9e3N0eWxlcy5vdmVydmlld1NlY3Rpb259PlxyXG4gICAgICAgICAgPFRleHQgc3R5bGU9e3N0eWxlcy5vdmVydmlld0hlYWRpbmd9PlN0YXJ0dXAgb3ZlcnZpZXc8L1RleHQ+XHJcbiAgICAgICAgICA8VGV4dCBzdHlsZT17c3R5bGVzLm92ZXJ2aWV3U3VidGl0bGV9PlRoaXMgc2VjdGlvbiB3aWxsIGhlbHAgeW91IGJldHRlciB1bmRlcnN0YW5kIHRoZSBzdGFydHVwIHZpc2lvbjwvVGV4dD5cclxuICAgICAgICAgIDxWaWV3IHN0eWxlPXtzdHlsZXMuc2VjdGlvbkNvbnRhaW5lck9uZX0+XHJcbiAgICAgICAgICAgIDxUZXh0IHN0eWxlPXtzdHlsZXMuc2VjdGlvbkhlYWRpbmdPbmV9Pk1hcmtldCBwcm9ibGVtIHRoYXQgbmVlZHMgdG8gYmUgc29sdmVkPC9UZXh0PlxyXG4gICAgICAgICAgICA8VGV4dCBzdHlsZT17c3R5bGVzLnNlY3Rpb25UZXh0fT57bWFya2V0UHJvYmxlbVNlY3Rpb259PC9UZXh0PlxyXG4gICAgICAgICAgPC9WaWV3PlxyXG4gICAgICAgICAgPFZpZXcgc3R5bGU9e3N0eWxlcy5zZWN0aW9uQ29udGFpbmVyVHdvfT5cclxuICAgICAgICAgICAgPFRleHQgc3R5bGU9e3N0eWxlcy5zZWN0aW9uSGVhZGluZ1R3b30+T3VyIHN0YXJ0dXAgc29sdXRpb24gZm9yIHRoaXMgcHJvYmxlbTwvVGV4dD5cclxuICAgICAgICAgICAgPFRleHQgc3R5bGU9e3N0eWxlcy5zZWN0aW9uVGV4dH0+e21hcmtldFNvbHV0aW9uU2VjdGlvbn08L1RleHQ+XHJcbiAgICAgICAgICA8L1ZpZXc+XHJcbiAgICAgICAgICA8VmlldyBzdHlsZT17c3R5bGVzLnNlY3Rpb25Db250YWluZXJUaHJlZX0+XHJcbiAgICAgICAgICAgIDxUZXh0IHN0eWxlPXtzdHlsZXMuc2VjdGlvbkhlYWRpbmdUaHJlZX0+V2hvIGlzIGJlaGluZCB0aGUgZm91bmRhdGlvbiBvZiB0aGUgZnV0dXJlIGNvbXBhbnk/PC9UZXh0PlxyXG4gICAgICAgICAgICA8VGV4dCBzdHlsZT17c3R5bGVzLnNlY3Rpb25UZXh0fT57Zm91bmRlcnNTZWN0aW9ufTwvVGV4dD5cclxuICAgICAgICAgIDwvVmlldz5cclxuICAgICAgICA8L1ZpZXc+XHJcbiAgICAgIDwvUGFnZT5cclxuICAgICAgey8qIFBST0RVQ1QgU0VDVElPTiAqL31cclxuICAgICAgPFBhZ2Ugc3R5bGU9e3N0eWxlcy5vdmVydmlld1BhZ2V9PlxyXG4gICAgICAgIDxWaWV3IHN0eWxlPXtzdHlsZXMucmlnaHRCYXJ9IGZpeGVkPjwvVmlldz5cclxuICAgICAgICA8SW1hZ2Ugc3R5bGU9e3N0eWxlcy5vdmVydmlld0ltYWdlfSBzcmM9XCIvcGRmL2JsdWVwcmludC5wbmdcIiBoZWlnaHQ9ezIwfSB3aWR0aD17MjB9IC8+XHJcbiAgICAgICAgPFZpZXcgc3R5bGU9e3N0eWxlcy5vdmVydmlld1NlY3Rpb259PlxyXG4gICAgICAgICAgPFRleHQgc3R5bGU9e3N0eWxlcy5vdmVydmlld0hlYWRpbmd9PlByb2R1Y3Q8L1RleHQ+XHJcbiAgICAgICAgICA8VGV4dCBzdHlsZT17c3R5bGVzLm92ZXJ2aWV3U3VidGl0bGV9PlRoaXMgc2VjdGlvbiB3aWxsIGludHJvZHVjZSB5b3UgdG8gdGhlIHZpc2lvbiBvZiB0aGUgcHJvZHVjdDwvVGV4dD5cclxuICAgICAgICAgIDxWaWV3IHN0eWxlPXtzdHlsZXMuc2VjdGlvbkNvbnRhaW5lck9uZX0+XHJcbiAgICAgICAgICAgIDxUZXh0IHN0eWxlPXtzdHlsZXMuc2VjdGlvbkhlYWRpbmdPbmV9PldoYXQgZG9lcyB0aGUgcGVyZmVjdCB2ZXJzaW9uIG9mIHRoZSBwcm9kdWN0IGxvb2sgbGlrZT88L1RleHQ+XHJcbiAgICAgICAgICAgIDxUZXh0IHN0eWxlPXtzdHlsZXMuc2VjdGlvblRleHR9Pntwcm9kdWN0T3ZlcnZpZXdTZWN0aW9ufTwvVGV4dD5cclxuICAgICAgICAgIDwvVmlldz5cclxuICAgICAgICAgIDxWaWV3IHN0eWxlPXtzdHlsZXMuc2VjdGlvbkNvbnRhaW5lclR3b30+XHJcbiAgICAgICAgICAgIDxUZXh0IHN0eWxlPXtzdHlsZXMuc2VjdGlvbkhlYWRpbmdUd299PkhvdyB3aWxsIG90aGVyIHBlb3BsZSBmaW5kIG91dCBhYm91dCB0aGUgcHJvZHVjdD88L1RleHQ+XHJcbiAgICAgICAgICAgIDxUZXh0IHN0eWxlPXtzdHlsZXMuc2VjdGlvblRleHR9Pntwcm9kdWN0UHJvbW90aW9uU2VjdGlvbn08L1RleHQ+XHJcbiAgICAgICAgICA8L1ZpZXc+XHJcbiAgICAgICAgICA8VmlldyBzdHlsZT17c3R5bGVzLnNlY3Rpb25Db250YWluZXJUaHJlZX0+XHJcbiAgICAgICAgICAgIDxUZXh0IHN0eWxlPXtzdHlsZXMuc2VjdGlvbkhlYWRpbmdUaHJlZX0+V2hhdCBiZW5lZml0cyB3aWxsIHRoaXMgcHJvZHVjdCBicmluZ3MgdG8gY3VzdG9tZXJzPzwvVGV4dD5cclxuICAgICAgICAgICAgPFRleHQgc3R5bGU9e3N0eWxlcy5zZWN0aW9uVGV4dH0+e3Byb2R1Y3RCZW5lZml0c1NlY3Rpb259PC9UZXh0PlxyXG4gICAgICAgICAgPC9WaWV3PlxyXG4gICAgICAgIDwvVmlldz5cclxuICAgICAgPC9QYWdlPlxyXG4gICAgICB7LyogTUFSS0VUIFNFQ1RJT04gKi99XHJcbiAgICAgIDxQYWdlIHN0eWxlPXtzdHlsZXMub3ZlcnZpZXdQYWdlfT5cclxuICAgICAgICA8VmlldyBzdHlsZT17c3R5bGVzLnJpZ2h0QmFyfSBmaXhlZD48L1ZpZXc+XHJcbiAgICAgICAgPEltYWdlIHN0eWxlPXtzdHlsZXMub3ZlcnZpZXdJbWFnZX0gc3JjPVwiL3BkZi91bmljb3JuLnBuZ1wiIGhlaWdodD17MjB9IHdpZHRoPXsyMH0gLz5cclxuICAgICAgICA8VmlldyBzdHlsZT17c3R5bGVzLm92ZXJ2aWV3U2VjdGlvbn0+XHJcbiAgICAgICAgICA8VGV4dCBzdHlsZT17c3R5bGVzLm92ZXJ2aWV3SGVhZGluZ30+TWFya2V0IGFuYWx5c2lzPC9UZXh0PlxyXG4gICAgICAgICAgPFRleHQgc3R5bGU9e3N0eWxlcy5vdmVydmlld1N1YnRpdGxlfT5UaGlzIHNlY3Rpb24gd2lsbCByZXZlYWwgYWxsIHRoZSBjYXJkcyBvZiB0aGUgbWFya2V0PC9UZXh0PlxyXG4gICAgICAgICAgPFZpZXcgc3R5bGU9e3N0eWxlcy5zZWN0aW9uQ29udGFpbmVyT25lfT5cclxuICAgICAgICAgICAgPFRleHQgc3R5bGU9e3N0eWxlcy5zZWN0aW9uSGVhZGluZ09uZX0+QSBnZW5lcmFsIHZpZXcgb2YgdGhlIG1hcmtldCB0aGF0IGNhbiBiZSBvYnRhaW5lZDwvVGV4dD5cclxuICAgICAgICAgICAgPFRleHQgc3R5bGU9e3N0eWxlcy5zZWN0aW9uVGV4dH0+e21hcmtldE92ZXJ2aWV3U2VjdGlvbn08L1RleHQ+XHJcbiAgICAgICAgICA8L1ZpZXc+XHJcbiAgICAgICAgICA8VmlldyBzdHlsZT17c3R5bGVzLnNlY3Rpb25Db250YWluZXJUd299PlxyXG4gICAgICAgICAgICA8VGV4dCBzdHlsZT17c3R5bGVzLnNlY3Rpb25IZWFkaW5nVHdvfT5XaGF0IGlzIHRoZSBtYWluIGNvbXBldGl0aW9uIG9uIHRoZSBtYXJrZXQ/PC9UZXh0PlxyXG4gICAgICAgICAgICA8VGV4dCBzdHlsZT17c3R5bGVzLnNlY3Rpb25UZXh0fT57Y29tcGV0aXRvcnNTZWN0aW9ufTwvVGV4dD5cclxuICAgICAgICAgIDwvVmlldz5cclxuICAgICAgICAgIDxWaWV3IHN0eWxlPXtzdHlsZXMuc2VjdGlvbkNvbnRhaW5lclR3b30+XHJcbiAgICAgICAgICAgIDxUZXh0IHN0eWxlPXtzdHlsZXMuc2VjdGlvbkhlYWRpbmdUd299PldoYXQgbWFrZXMgYSBzdGFydHVwIHN0YW5kIG91dCBmcm9tIHRoZSBjb21wZXRpdGlvbj88L1RleHQ+XHJcbiAgICAgICAgICAgIDxUZXh0IHN0eWxlPXtzdHlsZXMuc2VjdGlvblRleHR9Pntjb21wZXRpdGlvbkRpc3Rpbmd1aXNoU2VjdGlvbn08L1RleHQ+XHJcbiAgICAgICAgICA8L1ZpZXc+XHJcbiAgICAgICAgICA8VmlldyBzdHlsZT17c3R5bGVzLnNlY3Rpb25Db250YWluZXJUaHJlZX0+XHJcbiAgICAgICAgICAgIDxUZXh0IHN0eWxlPXtzdHlsZXMuc2VjdGlvbkhlYWRpbmdUaHJlZX0+V2hvIGFyZSB0aGUgdGFyZ2V0IGN1c3RvbWVycyBvZiB0aGUgc3RhcnR1cD88L1RleHQ+XHJcbiAgICAgICAgICAgIDxUZXh0IHN0eWxlPXtzdHlsZXMuc2VjdGlvblRleHR9Pnt0YXJnZXRDdXN0b21lcnNTZWN0aW9ufTwvVGV4dD5cclxuICAgICAgICAgIDwvVmlldz5cclxuICAgICAgICA8L1ZpZXc+XHJcbiAgICAgIDwvUGFnZT5cclxuICAgICAgey8qIEZJTkFOQ0VTIFNFQ1RJT04gKi99XHJcbiAgICAgIDxQYWdlIHN0eWxlPXtzdHlsZXMub3ZlcnZpZXdQYWdlfT5cclxuICAgICAgICA8VmlldyBzdHlsZT17c3R5bGVzLnJpZ2h0QmFyfSBmaXhlZD48L1ZpZXc+XHJcbiAgICAgICAgPEltYWdlIHN0eWxlPXtzdHlsZXMub3ZlcnZpZXdJbWFnZX0gc3JjPVwiL3BkZi9idWRnZXQucG5nXCIgaGVpZ2h0PXsyMH0gd2lkdGg9ezIwfSAvPlxyXG4gICAgICAgIDxWaWV3IHN0eWxlPXtzdHlsZXMub3ZlcnZpZXdTZWN0aW9ufT5cclxuICAgICAgICAgIDxUZXh0IHN0eWxlPXtzdHlsZXMub3ZlcnZpZXdIZWFkaW5nfT5GaW5hbmNlczwvVGV4dD5cclxuICAgICAgICAgIDxUZXh0IHN0eWxlPXtzdHlsZXMub3ZlcnZpZXdTdWJ0aXRsZX0+RGlzY292ZXIgdGhlIGNvc3RzIG9mIGltcGxlbWVudGluZyBvdXIgaWRlYTwvVGV4dD5cclxuICAgICAgICAgIDxWaWV3IHN0eWxlPXtzdHlsZXMuc2VjdGlvbkNvbnRhaW5lck9uZX0+XHJcbiAgICAgICAgICAgIDxUZXh0IHN0eWxlPXtzdHlsZXMuc2VjdGlvbkhlYWRpbmdPbmV9PkhvdyBtdWNoIG1vbmV5IHdpbGwgaXQgdGFrZSB0byBsYXVuY2ggdGhlIHN0YXJ0dXA/PC9UZXh0PlxyXG4gICAgICAgICAgICA8VGV4dCBzdHlsZT17c3R5bGVzLnNlY3Rpb25UZXh0fT57c3RhcnR1cENvc3RzU2VjdGlvbn08L1RleHQ+XHJcbiAgICAgICAgICA8L1ZpZXc+XHJcbiAgICAgICAgICA8VmlldyBzdHlsZT17c3R5bGVzLnNlY3Rpb25Db250YWluZXJUd299PlxyXG4gICAgICAgICAgICA8VGV4dCBzdHlsZT17c3R5bGVzLnNlY3Rpb25IZWFkaW5nVHdvfT5BcHByb3hpbWF0ZSBjb3N0cyBvZiBtYWludGFpbmluZyBhIHN0YXJ0dXA8L1RleHQ+XHJcbiAgICAgICAgICAgIDxUZXh0IHN0eWxlPXtzdHlsZXMuc2VjdGlvblRleHR9PntydW5uaW5nQ29zdHNTZWN0aW9ufTwvVGV4dD5cclxuICAgICAgICAgIDwvVmlldz5cclxuICAgICAgICAgIDxWaWV3IHN0eWxlPXtzdHlsZXMuc2VjdGlvbkNvbnRhaW5lclRocmVlfT5cclxuICAgICAgICAgICAgPFRleHQgc3R5bGU9e3N0eWxlcy5zZWN0aW9uSGVhZGluZ1RocmVlfT5Ib3cgZG9lcyB0aGUgaWRlYSB3aWxsIGJlIGZ1bmQ/PC9UZXh0PlxyXG4gICAgICAgICAgICA8VGV4dCBzdHlsZT17c3R5bGVzLnNlY3Rpb25UZXh0fT57ZmluYW5jaW5nU2VjdGlvbn08L1RleHQ+XHJcbiAgICAgICAgICA8L1ZpZXc+XHJcbiAgICAgICAgPC9WaWV3PlxyXG4gICAgICA8L1BhZ2U+XHJcbiAgICAgIHsvKiBCVVNJTkVTUyBNT0RFTCBTRUNUSU9OICovfVxyXG4gICAgICA8UGFnZSBzdHlsZT17c3R5bGVzLm92ZXJ2aWV3UGFnZX0+XHJcbiAgICAgICAgPFZpZXcgc3R5bGU9e3N0eWxlcy5yaWdodEJhcn0gZml4ZWQ+PC9WaWV3PlxyXG4gICAgICAgIDxJbWFnZSBzdHlsZT17c3R5bGVzLm92ZXJ2aWV3SW1hZ2V9IHNyYz1cIi9wZGYvc3RhcnR1cC5wbmdcIiBoZWlnaHQ9ezIwfSB3aWR0aD17MjB9IC8+XHJcbiAgICAgICAgPFZpZXcgc3R5bGU9e3N0eWxlcy5vdmVydmlld1NlY3Rpb259PlxyXG4gICAgICAgICAgPFRleHQgc3R5bGU9e3N0eWxlcy5vdmVydmlld0hlYWRpbmd9PkJ1c2luZXNzIG1vZGVsPC9UZXh0PlxyXG4gICAgICAgICAgPFRleHQgc3R5bGU9e3N0eWxlcy5vdmVydmlld1N1YnRpdGxlfT5JbiB0aGUgZmluYWwgc2VjdGlvbiwgeW91IHdpbGwgZGlzY292ZXIgdGhlIHN0YXJ0dXAncyBidXNpbmVzcyBtb2RlbDwvVGV4dD5cclxuICAgICAgICAgIDxWaWV3IHN0eWxlPXtzdHlsZXMuc2VjdGlvbkNvbnRhaW5lck9uZX0+XHJcbiAgICAgICAgICAgIDxUZXh0IHN0eWxlPXtzdHlsZXMuc2VjdGlvbkhlYWRpbmdPbmV9PldoYXQgd2lsbCB0aGUgc3RhcnR1cCdzIGJ1c2luZXNzIG1vZGVsIGxvb2sgbGlrZT88L1RleHQ+XHJcbiAgICAgICAgICAgIDxUZXh0IHN0eWxlPXtzdHlsZXMuc2VjdGlvblRleHR9PntidXNpbmVzc01vZGVsT3ZlcnZpZXdTZWN0aW9ufTwvVGV4dD5cclxuICAgICAgICAgIDwvVmlldz5cclxuICAgICAgICAgIDxWaWV3IHN0eWxlPXtzdHlsZXMuc2VjdGlvbkNvbnRhaW5lclR3b30+XHJcbiAgICAgICAgICAgIDxUZXh0IHN0eWxlPXtzdHlsZXMuc2VjdGlvbkhlYWRpbmdUd299PlByZWRpY3Rpb25zIGZvciBzdGFydHVwIGdyb3d0aDwvVGV4dD5cclxuICAgICAgICAgICAgPFRleHQgc3R5bGU9e3N0eWxlcy5zZWN0aW9uVGV4dH0+e2J1c2luZXNzR3Jvd1NlY3Rpb259PC9UZXh0PlxyXG4gICAgICAgICAgPC9WaWV3PlxyXG4gICAgICAgICAgPFZpZXcgc3R5bGU9e3N0eWxlcy5zZWN0aW9uQ29udGFpbmVyVGhyZWV9PlxyXG4gICAgICAgICAgICA8VGV4dCBzdHlsZT17c3R5bGVzLnNlY3Rpb25IZWFkaW5nVGhyZWV9PldoeSBpcyBpdCB0aGF0IHN0YXJ0dXAgdGhhdCB3aWxsIGNvbnF1ZXIgdGhlIHdvcmxkPzwvVGV4dD5cclxuICAgICAgICAgICAgPFRleHQgc3R5bGU9e3N0eWxlcy5zZWN0aW9uVGV4dH0+e3doeVN1Y2Nlc3NTZWN0aW9ufTwvVGV4dD5cclxuICAgICAgICAgIDwvVmlldz5cclxuICAgICAgICA8L1ZpZXc+XHJcbiAgICAgIDwvUGFnZT5cclxuICAgIDwvRG9jdW1lbnQ+XHJcbiAgKTtcclxuXHJcbiAgLy8gY29uc3QgW251bVBhZ2VzLCBzZXROdW1QYWdlc10gPSB1c2VTdGF0ZShudWxsKTtcclxuXHJcbiAgLy8gY29uc3QgTXlEb2N1bWVudCA9IChwcm9wcykgPT4gKFxyXG4gIC8vICAgPERvY3VtZW50XHJcbiAgLy8gICAgIGZpbGU9e3Byb3BzLmRhdGF9XHJcbiAgLy8gICAgIG9uTG9hZFN1Y2Nlc3M9eyh7IG51bVBhZ2VzIH0pID0+IHNldE51bVBhZ2VzKG51bVBhZ2VzKX1cclxuICAvLyAgID5cclxuICAvLyAgICAge0FycmF5LmFwcGx5KG51bGwsIEFycmF5KG51bVBhZ2VzKSlcclxuICAvLyAgICAgICAubWFwKCh4LCBpKSA9PiBpICsgMSlcclxuICAvLyAgICAgICAubWFwKChwYWdlKSA9PiAoXHJcbiAgLy8gICAgICAgICA8UGFnZSBwYWdlTnVtYmVyPXtwYWdlfSBzdHlsZT17c3R5bGVzLnBhZ2V9PlxyXG4gIC8vICAgICAgICAgICA8VmlldyBzdHlsZT17c3R5bGVzLnNlY3Rpb259PlxyXG4gIC8vICAgICAgICAgICA8L1ZpZXc+XHJcbiAgLy8gICAgICAgICA8L1BhZ2U+XHJcbiAgLy8gICAgICAgKSl9XHJcbiAgLy8gICA8L0RvY3VtZW50PlxyXG4gIC8vICk7XHJcblxyXG4gIHJldHVybiB1c2VNZW1vKFxyXG4gICAgKCkgPT4gKFxyXG4gICAgICA8PlxyXG4gICAgICAgIHttYW5hZ2VyUGFnZSA/IChcclxuICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgc3JjPVwiL21vYmlsZS1uYXZiYXIvcGRmLnN2Z1wiXHJcbiAgICAgICAgICAgIG9uQ2xpY2s9e2FzeW5jIChlKSA9PiB7XHJcbiAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICAgIGNvbnN0IGRvYyA9IDxNeURvY3VtZW50MSBkYXRhPXtkYXRhfSAvPjtcclxuICAgICAgICAgICAgICBjb25zdCBhc1BkZiA9IHBkZihbXSk7IC8vIHt9IGlzIGltcG9ydGFudCwgdGhyb3dzIHdpdGhvdXQgYW4gYXJndW1lbnRcclxuICAgICAgICAgICAgICBhc1BkZi51cGRhdGVDb250YWluZXIoZG9jKTtcclxuICAgICAgICAgICAgICBjb25zdCBibG9iID0gYXdhaXQgYXNQZGYudG9CbG9iKCk7XHJcbiAgICAgICAgICAgICAgc2F2ZUFzKGJsb2IsIGAke2lkZWFOYW1lfS9pZGVhLXBsYW4ucGRmYCk7XHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgIGhlaWdodD17MjZ9XHJcbiAgICAgICAgICAgIHdpZHRoPXsyNn1cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgKSA6IChcclxuICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgIDxFeGl0Q29tcG9uZW50IC8+XHJcbiAgICAgICAgICAgIDxkaXYgcmVmPXtjb250ZW50UmVmfSBjbGFzc05hbWU9XCJoLXNjcmVlbiB3LWZ1bGwgcmVsYXRpdmUgZmxleCBmbGV4LWNvbCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwiY2lyY2xlc1wiPlxyXG4gICAgICAgICAgICAgICAgPGxpPjwvbGk+XHJcbiAgICAgICAgICAgICAgICA8bGk+PC9saT5cclxuICAgICAgICAgICAgICAgIDxsaT48L2xpPlxyXG4gICAgICAgICAgICAgICAgPGxpPjwvbGk+XHJcbiAgICAgICAgICAgICAgICA8bGk+PC9saT5cclxuICAgICAgICAgICAgICAgIDxsaT48L2xpPlxyXG4gICAgICAgICAgICAgICAgPGxpPjwvbGk+XHJcbiAgICAgICAgICAgICAgICA8bGk+PC9saT5cclxuICAgICAgICAgICAgICAgIDxsaT48L2xpPlxyXG4gICAgICAgICAgICAgICAgPGxpPjwvbGk+XHJcbiAgICAgICAgICAgICAgICB7LyogMTAgKi99XHJcbiAgICAgICAgICAgICAgICA8bGk+PC9saT5cclxuICAgICAgICAgICAgICAgIDxsaT48L2xpPlxyXG4gICAgICAgICAgICAgICAgPGxpPjwvbGk+XHJcbiAgICAgICAgICAgICAgICA8bGk+PC9saT5cclxuICAgICAgICAgICAgICAgIDxsaT48L2xpPlxyXG4gICAgICAgICAgICAgICAgPGxpPjwvbGk+XHJcbiAgICAgICAgICAgICAgICA8bGk+PC9saT5cclxuICAgICAgICAgICAgICAgIDxsaT48L2xpPlxyXG4gICAgICAgICAgICAgICAgPGxpPjwvbGk+XHJcbiAgICAgICAgICAgICAgICA8bGk+PC9saT5cclxuICAgICAgICAgICAgICAgIDxsaT48L2xpPlxyXG4gICAgICAgICAgICAgICAgPGxpPjwvbGk+XHJcbiAgICAgICAgICAgICAgICA8bGk+PC9saT5cclxuICAgICAgICAgICAgICAgIDxsaT48L2xpPlxyXG4gICAgICAgICAgICAgICAgPGxpPjwvbGk+XHJcbiAgICAgICAgICAgICAgICA8bGk+PC9saT5cclxuICAgICAgICAgICAgICAgIDxsaT48L2xpPlxyXG4gICAgICAgICAgICAgICAgPGxpPjwvbGk+XHJcbiAgICAgICAgICAgICAgICA8bGk+PC9saT5cclxuICAgICAgICAgICAgICAgIDxsaT48L2xpPlxyXG4gICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciB3LWZ1bGwgbWF4LXctc2NyZWVuLW1kIHJlbGF0aXZlIHBsLTYgcHItNiBtdC0xNiBwYi0yNFwiPlxyXG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1wcmltYXJ5ZGFyayB0ZXh0LTJ4bCBub3JtYWw6dGV4dC0zeGwgbXQtMiBwbC0yIGRhcms6dGV4dC1iYWNrZ3JvdW5kIHRleHQtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiL2dpZnMvcG9wcGVyLmdpZlwiIGhlaWdodD17NjB9IHdpZHRoPXs2MH0gY2xhc3NOYW1lPVwiaW5saW5lLWJsb2NrIHJlbGF0aXZlIGJvdHRvbS00IGxlZnQtM1wiIC8+XHJcbiAgICAgICAgICAgICAgICAgIENvbmdyYXR1bGF0aW9ucyFcclxuICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtZ3JheSB0ZXh0LWJhc2Ugbm9ybWFsOnRleHQtbGcgcGwtMiBkYXJrOnRleHQtYmFja2dyb3VuZCB0ZXh0LWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgICBOb3cgeW91IGNhbiBzYXZlIHlvdXIgaWRlYSBhbmQgc2V0IG9mZiB0byBjb25xdWVyIHRoZSB3b3JsZFxyXG4gICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgPGltZyBzcmM9XCIvc3VjY2Vzcy5zdmdcIiBoZWlnaHQ9ezIwMH0gd2lkdGg9ezIwMH0gY2xhc3NOYW1lPVwibXQtNFwiIC8+XHJcbiAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiei0xMCBtci00IG10LTYgaG92ZXI6YmctcHJpbWFyeSBob3Zlcjp0ZXh0LXdoaXRlIGRhcms6aG92ZXI6YmctcHJpbWFyeWRhcmsgZGFyazpob3Zlcjp0ZXh0LWJhY2tncm91bmQgZm9jdXM6b3V0bGluZS1ub25lIGJvcmRlciBib3JkZXItcHJpbWFyeSB0ZXh0LXByaW1hcnkgdGV4dC1zbSBmb250LWxpZ2h0IHB5LTIgcHgtOCByb3VuZGVkLTJ4bCBkYXJrOnRleHQtcHJpbWFyeWRhcmsgZGFyazpib3JkZXItcHJpbWFyeWRhcmtcIlxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e29uUHJvamVjdExlYXZlfVxyXG4gICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgQmFja1xyXG4gICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInotMTAgbWwtNCBtdC02IGhvdmVyOmJnLXByaW1hcnkgaG92ZXI6dGV4dC13aGl0ZSBkYXJrOmhvdmVyOmJnLXByaW1hcnlkYXJrIGRhcms6aG92ZXI6dGV4dC1iYWNrZ3JvdW5kIGZvY3VzOm91dGxpbmUtbm9uZSBib3JkZXIgYm9yZGVyLXByaW1hcnkgdGV4dC1wcmltYXJ5IHRleHQtc20gZm9udC1saWdodCBweS0yIHB4LTggcm91bmRlZC0yeGwgZGFyazp0ZXh0LXByaW1hcnlkYXJrIGRhcms6Ym9yZGVyLXByaW1hcnlkYXJrXCJcclxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXthc3luYyAoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgY29uc3QgZG9jID0gPE15RG9jdW1lbnQxIGRhdGE9e2RhdGF9IC8+O1xyXG4gICAgICAgICAgICAgICAgICAgICAgY29uc3QgYXNQZGYgPSBwZGYoW10pOyAvLyB7fSBpcyBpbXBvcnRhbnQsIHRocm93cyB3aXRob3V0IGFuIGFyZ3VtZW50XHJcbiAgICAgICAgICAgICAgICAgICAgICBhc1BkZi51cGRhdGVDb250YWluZXIoZG9jKTtcclxuICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGJsb2IgPSBhd2FpdCBhc1BkZi50b0Jsb2IoKTtcclxuICAgICAgICAgICAgICAgICAgICAgIHNhdmVBcyhibG9iLCBgJHtpZGVhTmFtZX0vaWRlYS1wbGFuLnBkZmApO1xyXG4gICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICBTYXZlXHJcbiAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC8+XHJcbiAgICAgICAgKX1cclxuICAgICAgPC8+XHJcbiAgICApLFxyXG4gICAgW2RhdGFdXHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFN0YXJ0dXBTdWNjZXNzO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9