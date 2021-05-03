webpackHotUpdate_N_E("pages/dashboard/projects/[project]/competitors/[id]",{

/***/ "./pages/dashboard/projects/[project]/competitors/[id].js":
/*!****************************************************************!*\
  !*** ./pages/dashboard/projects/[project]/competitors/[id].js ***!
  \****************************************************************/
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
/* harmony import */ var _lib_firebase__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../lib/firebase */ "./lib/firebase.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! js-cookie */ "./node_modules/js-cookie/src/js.cookie.js");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_6__);




var _jsxFileName = "C:\\off-saas\\pages\\dashboard\\projects\\[project]\\competitors\\[id].js",
    _this = undefined,
    _s = $RefreshSig$();






var UniqueCompetitorsPage = function UniqueCompetitorsPage(_ref) {
  _s();

  var projects = _ref.projects;
  console.log('Particular project --> ', projects);

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(null),
      selectedProject = _useState[0],
      setSelectedProject = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(),
      competitors = _useState2[0],
      setCompetitors = _useState2[1];

  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_5__["useRouter"])(); //   Selected project

  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function () {
    var uid = js_cookie__WEBPACK_IMPORTED_MODULE_6___default.a.get('uid');
    var filteredArray = projects && projects.filter(function (project) {
      return project.uid == uid;
    });
    console.log(filteredArray);
    filteredArray && filteredArray.length == 1 && setSelectedProject(filteredArray[0]);
  }, [projects]);
  console.log(selectedProject); // Competitors

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(false),
      loadingHelper = _useState3[0],
      setLoadingHelper = _useState3[1];

  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function () {
    var userUid = js_cookie__WEBPACK_IMPORTED_MODULE_6___default.a.get('uid');

    if (userUid && router.query.project) {
      var data = _lib_firebase__WEBPACK_IMPORTED_MODULE_4__["db"].collection('projects').where('uid', '==', userUid);
      data.where('projectName', '==', router.query.project).get().then(function (querySnapshot) {
        querySnapshot.forEach( /*#__PURE__*/function () {
          var _ref2 = Object(C_off_saas_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/C_off_saas_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee(doc1) {
            return C_off_saas_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    //   setProjectId(doc1.data().projectId);
                    _lib_firebase__WEBPACK_IMPORTED_MODULE_4__["db"].collection('projects').doc(doc1.data().projectId).collection('competitors').doc(router.query.project).collection('inputs').onSnapshot(function (serverUpdate) {
                      serverUpdate.docs.map(function (doc) {
                        console.log(doc.data());
                        var data = doc.data(); //   setDocumentId(doc.id);

                        setCompetitors(data.competitorsArray);
                        setLoadingHelper(false);
                      });
                    });

                  case 1:
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
  console.log(competitors);

  if (router.isFallback) {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
        children: "Loading..."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 61,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 7
    }, _this);
  } //   Dropdown


  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(false),
      dropdownHelper = _useState4[0],
      setDropdownHelper = _useState4[1];

  var initialContainer = document.getElementById(index); // Elements

  var descriptionTitle = document.getElementById("descriptionTitle".concat(index));
  var placeholderTitle = document.getElementById("placeholderTitle".concat(index));
  var descriptionModel = document.getElementById("descriptionModel".concat(index));
  var placeholderModel = document.getElementById("placeholderModel".concat(index));
  var descriptionProduct = document.getElementById("descriptionProduct".concat(index));
  var placeholderProduct = document.getElementById("placeholderProduct".concat(index));
  var descriptionPromotion = document.getElementById("descriptionPromotion".concat(index));
  var placeholderPromotion = document.getElementById("placeholderPromotion".concat(index));
  var descriptionStrengths = document.getElementById("descriptionStrengths".concat(index));
  var placeholderStrengths = document.getElementById("placeholderStrengths".concat(index));
  var descriptionWeaknesses = document.getElementById("descriptionWeaknesses".concat(index));
  var placeholderWeaknesses = document.getElementById("placeholderWeaknesses".concat(index));
  var descriptionOpportunities = document.getElementById("descriptionOpportunities".concat(index));
  var placeholderOpportunities = document.getElementById("placeholderOpportunities".concat(index));
  var dropDownElement = document.getElementById("dropdown".concat(index));
  var dataElement = document.getElementById("data".concat(index));
  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function () {
    gsap.set(dropDownElement, {
      rotation: '-90_cw'
    });

    if (!isMobile) {
      var containerElement = document.getElementById("container".concat(index));
      var competitorManager = document.getElementById("manager".concat(index));
      containerElement.addEventListener('mouseenter', function () {
        gsap.to(competitorManager, {
          height: 18,
          marignBottom: 16,
          duration: 0.5,
          ease: Linear.easeIn
        });
        gsap.to(initialContainer, {
          marginTop: 16,
          duration: 0.5,
          ease: Linear.easeIn
        });
      });
      containerElement.addEventListener('mouseleave', function () {
        gsap.to(competitorManager, {
          height: 0,
          marginBottom: 0,
          duration: 0.5,
          ease: Linear.easeOut
        });
        gsap.to(initialContainer, {
          marginTop: 0,
          duration: 0.5,
          ease: Linear.easeIn
        });
      });
    }
  }, [dropDownElement]);

  var onSectionDropdown = function onSectionDropdown() {
    var sectionHeight = descriptionTitle.offsetHeight + placeholderTitle.offsetHeight + descriptionModel.offsetHeight + placeholderModel.offsetHeight + 24 + descriptionProduct.offsetHeight + placeholderProduct.offsetHeight + 24 + descriptionPromotion.offsetHeight + placeholderPromotion.offsetHeight + 24 + descriptionStrengths.offsetHeight + placeholderStrengths.offsetHeight + 24 + descriptionWeaknesses.offsetHeight + placeholderWeaknesses.offsetHeight + 24 + descriptionOpportunities.offsetHeight + placeholderOpportunities.offsetHeight + 24;

    if (!dropdownHelper) {
      gsap.to(dataElement, {
        height: sectionHeight,
        marginTop: 32,
        marginBottom: 112,
        autoAlpha: 1,
        duration: 1,
        ease: Linear
      });
      gsap.to(dropDownElement, {
        rotation: '0_cw',
        duration: 1,
        ease: Linear
      });
      setDropdownHelper(true);
    } else if (dropdownHelper) {
      gsap.to(dataElement, {
        height: 0,
        marginTop: 0,
        marginBottom: 0,
        autoAlpha: 0,
        duration: 1,
        ease: Linear
      });
      gsap.to(dropDownElement, {
        rotation: '-90_ccw',
        duration: 1,
        ease: Linear
      });
      setDropdownHelper(false);
    }
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: "min-h-screen w-full relative flex flex-col items-center text-primarydark",
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "w-full max-w-full relative mt-8 mdContainer:mt-16 mb-16 px-8 mdContainer:px-16 lgContainer:px-32 bigContainer:px-48 big2Container:px-64 big3Container:px-80 QHD:max-w-QHD",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "relative grid grid-cols-2 grid-rows-1 grid-flow-col",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
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
              lineNumber: 151,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("g", {
              id: "Landing_Success",
              "data-name": "Landing Success",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
                className: "cls-1",
                d: "M109.3,90.1A46,46,0,0,0,65,36V20.08c1.78-.62,7.21-2.14,12.57.23a19.33,19.33,0,0,0,14.82,0c.87-.38.61.31.61-17.93a1,1,0,0,0-1.43-.93c-.07,0-6.69,2.87-13.18,0A19.41,19.41,0,0,0,65,.93,1,1,0,0,0,63,1V36a45.86,45.86,0,0,0-28.66,10.8C16.18,40.48,4,40,.79,45.51-2.29,50.86,3.94,59.3,10,65.68A11,11,0,0,0,18,83c.81,38.41,46.08,59.2,75.66,34.21,8.53,3,29,9.15,33.55,1.31C130.39,113,123.86,102.65,109.3,90.1ZM77.59,3.31A19.39,19.39,0,0,0,91,3.83V18.68c-1.79.62-7.22,2.13-12.57-.23A19.19,19.19,0,0,0,65,17.93V3.08C66.81,2.46,72.24,1,77.59,3.31ZM65,45v-7c39.69.91,58,50.27,28.21,76.81C71.32,107,46,92.66,27.77,78.64a11,11,0,0,0-3.2-16.13A43.88,43.88,0,0,1,63,38.06V45A1,1,0,0,0,65,45ZM32.55,48.36a46.21,46.21,0,0,0-9.83,13.28,10.93,10.93,0,0,0-11.4,2.47C-8.39,43.23,5.23,39.08,32.55,48.36ZM10,72a9,9,0,1,1,9,9A9,9,0,0,1,10,72Zm10,11a11,11,0,0,0,6.34-2.82c18.45,14.21,43.45,28.35,65.05,36.22C63,139.16,20.83,119.1,20.05,83Zm105.4,34.5c-2.51,4.35-14,3.62-30-1.85a45.61,45.61,0,0,0,13.42-23.21C121.59,103.58,128,113.12,125.45,117.47Z"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 153,
                columnNumber: 17
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 152,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 144,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            className: "text-primarydark text-xl ssmContainer:text-2xl mt-2 pl-2 dark:text-background",
            children: "Competitors analysis"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 159,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 143,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 142,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
          className: "text-secondary text-base ssmContainer:text-md text-gray",
          children: "Manage your startup competitors"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 164,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 163,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "w-full bg-white rounded-2xl mt-12 p-8",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "flex justify-between items-center",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            className: "text-primarydark text-md ssmContainer:text-lg",
            children: "Competitors"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 168,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
            className: "cursor-pointer",
            src: "/competitors/add1.svg",
            height: 32,
            width: 32
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 169,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 167,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "grid grid-cols-1frr normalContainer:grid-cols-2fr gap-x-12",
          children: competitors && competitors.map(function (competitor, index) {
            return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              style: {
                height: 'fit-content'
              },
              id: "container".concat(index),
              className: "w-full bg-background rounded-2xl p-4 ssmContainer:p-6 shadow-md overflow-hidden mt-8 smContainer:mt-8",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                style: {
                  height: "".concat(isMobile ? 40 : 0),
                  top: "".concat(isMobile ? '-6px' : '-6px')
                },
                id: "manager".concat(index),
                className: "flex justify-between relative",
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
                  className: "cursor-pointer" //   style={{ transform: 'rotate(-90deg)' }}
                  ,
                  onClick: onSectionDropdown,
                  id: "dropdown".concat(index),
                  src: "/competitors/dropdown.svg",
                  height: 18,
                  width: 18
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 184,
                  columnNumber: 21
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                  className: "flex"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 193,
                  columnNumber: 21
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 179,
                columnNumber: 19
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                id: index,
                className: "flex gap-6 flex-col justify-center items-center smContainer:gap-0 smContainer:grid smContainer:grid-cols-12fr",
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                  className: "smContainer:col-start-1 smContainer:col-end-4 justify-self-center flex justify-start items-center",
                  children: [image !== '' ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
                    htmlFor: "upload-image".concat(index),
                    className: "relative w-20 h-20 cursor-pointer rounded-full bg-white flex justify-center items-center",
                    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
                      src: image,
                      height: 55,
                      width: 55
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 214,
                      columnNumber: 27
                    }, _this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 210,
                    columnNumber: 25
                  }, _this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
                      htmlFor: "upload-image".concat(index),
                      className: "w-20 h-20 cursor-pointer rounded-full bg-primary flex justify-center items-center",
                      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
                        src: "/competitors/empty-image.svg",
                        height: 65,
                        width: 65
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 222,
                        columnNumber: 29
                      }, _this)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 218,
                      columnNumber: 27
                    }, _this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 217,
                    columnNumber: 25
                  }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
                    type: "file",
                    id: "upload-image".concat(index),
                    style: {
                      display: 'none',
                      zIndex: 10
                    },
                    onChange: onFileChange
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 226,
                    columnNumber: 23
                  }, _this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 208,
                  columnNumber: 21
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                  className: "smContainer:col-start-5 smContainer:col-end-13 grid grid-cols-2fr grid-rows-2fr justify-items-center items-center gap-x-4 ssmContainer:gap-x-8 gap-y-2 ssmContainer:gap-y-4",
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
                      value: title,
                      className: "bg-white rounded-2xl w-full px-3 py-2 text-sm text-primarydark focus:outline-none",
                      placeholder: "name"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 230,
                      columnNumber: 25
                    }, _this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 229,
                    columnNumber: 23
                  }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
                      value: location,
                      className: "bg-white rounded-2xl w-full px-3 py-2 text-sm text-primarydark focus:outline-none",
                      placeholder: "location"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 237,
                      columnNumber: 25
                    }, _this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 236,
                    columnNumber: 23
                  }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
                      value: employees,
                      className: "bg-white rounded-2xl w-full px-3 py-2 text-sm text-primarydark focus:outline-none",
                      placeholder: "employees"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 244,
                      columnNumber: 25
                    }, _this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 243,
                    columnNumber: 23
                  }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
                      value: revenue,
                      className: "bg-white rounded-2xl w-full px-3 py-2 text-sm text-primarydark focus:outline-none",
                      placeholder: "revenue"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 251,
                      columnNumber: 25
                    }, _this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 250,
                    columnNumber: 23
                  }, _this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 228,
                  columnNumber: 21
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 204,
                columnNumber: 19
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                id: "data".concat(index),
                className: "w-full h-0 invisible",
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                  id: "descriptionTitle".concat(index),
                  className: "flex justify-start items-center",
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
                    src: "/competitors/description.svg",
                    height: 22,
                    width: 22
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 262,
                    columnNumber: 23
                  }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                    className: "text-primarydark ml-2",
                    children: "Company description"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 263,
                    columnNumber: 23
                  }, _this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 261,
                  columnNumber: 21
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("textarea", {
                  value: companyDescription,
                  id: "placeholderTitle".concat(index),
                  className: "w-full bg-white rounded-2xl mt-2 p-2 text-primarydark text-sm px-4 py-3 h-28 max-h-28 focus:outline-none",
                  placeholder: "Describe the main assumption of analyzed company."
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 265,
                  columnNumber: 21
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                  id: "descriptionModel".concat(index),
                  className: "flex justify-start items-center mt-6",
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
                    src: "/competitors/model.svg",
                    height: 22,
                    width: 22
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 273,
                    columnNumber: 23
                  }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                    className: "text-primarydark ml-2",
                    children: "Business model"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 274,
                    columnNumber: 23
                  }, _this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 272,
                  columnNumber: 21
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("textarea", {
                  value: businessModel,
                  id: "placeholderModel".concat(index),
                  className: "w-full bg-white rounded-2xl mt-2 p-2 text-primarydark text-sm px-4 py-3 h-28 max-h-28 focus:outline-none",
                  placeholder: "How does the company business model look like?"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 276,
                  columnNumber: 21
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                  id: "descriptionProduct".concat(index),
                  className: "flex justify-start items-center mt-6",
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
                    src: "/competitors/product1.svg",
                    height: 22,
                    width: 22
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 284,
                    columnNumber: 23
                  }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                    className: "text-primarydark ml-2",
                    children: "Product overview"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 285,
                    columnNumber: 23
                  }, _this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 283,
                  columnNumber: 21
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("textarea", {
                  value: productOverview,
                  id: "placeholderProduct".concat(index),
                  className: "w-full bg-white rounded-2xl mt-2 p-2 text-primarydark text-sm px-4 py-3 h-28 max-h-28 focus:outline-none",
                  placeholder: "What is the full range of products and services the company offers?"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 287,
                  columnNumber: 21
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                  id: "descriptionPromotion".concat(index),
                  className: "flex justify-start items-center mt-6",
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
                    src: "/competitors/promotion.svg",
                    height: 22,
                    width: 22
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 295,
                    columnNumber: 23
                  }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                    className: "text-primarydark ml-2",
                    children: "Promotion strategy"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 296,
                    columnNumber: 23
                  }, _this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 294,
                  columnNumber: 21
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("textarea", {
                  value: promotionStrategy,
                  id: "placeholderPromotion".concat(index),
                  className: "w-full bg-white rounded-2xl mt-2 p-2 text-primarydark text-sm px-4 py-3 h-28 max-h-28 focus:outline-none",
                  placeholder: "What are the company marketing and promotional strategies?"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 298,
                  columnNumber: 21
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                  id: "descriptionStrengths".concat(index),
                  className: "flex justify-start items-center mt-6",
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
                    src: "/competitors/strengths.svg",
                    height: 22,
                    width: 22
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 306,
                    columnNumber: 23
                  }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                    className: "text-primarydark ml-2",
                    children: "Company strengths"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 307,
                    columnNumber: 23
                  }, _this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 305,
                  columnNumber: 21
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("textarea", {
                  value: companyStrengths,
                  id: "placeholderStrengths".concat(index),
                  className: "w-full bg-white rounded-2xl mt-2 p-2 text-primarydark text-sm px-4 py-3 h-28 max-h-28 focus:outline-none",
                  placeholder: "What do your competitors do really well that differentiates them?"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 309,
                  columnNumber: 21
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                  id: "descriptionWeaknesses".concat(index),
                  className: "flex justify-start items-center mt-6",
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
                    src: "/competitors/weaknesses.svg",
                    height: 22,
                    width: 22
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 317,
                    columnNumber: 23
                  }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                    className: "text-primarydark ml-2",
                    children: "Company Weaknesses"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 318,
                    columnNumber: 23
                  }, _this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 316,
                  columnNumber: 21
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("textarea", {
                  value: companyWeaknesses,
                  id: "placeholderWeaknesses".concat(index),
                  className: "w-full bg-white rounded-2xl mt-2 p-2 text-primarydark text-sm px-4 py-3 h-28 max-h-28 focus:outline-none",
                  placeholder: "What do the company customers complain about the most, and what products do they lack?"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 320,
                  columnNumber: 21
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                  id: "descriptionOpportunities".concat(index),
                  className: "flex justify-start items-center mt-6",
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
                    src: "/competitors/opportunities2.svg",
                    height: 22,
                    width: 22
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 328,
                    columnNumber: 23
                  }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                    className: "text-primarydark ml-2",
                    children: "Opportunities"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 329,
                    columnNumber: 23
                  }, _this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 327,
                  columnNumber: 21
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("textarea", {
                  value: opportunities,
                  id: "placeholderOpportunities".concat(index),
                  className: "w-full bg-white rounded-2xl mt-2 p-2 text-primarydark text-sm px-4 py-3 h-28 max-h-28 focus:outline-none",
                  placeholder: "What distinguish your startup from this particular competitive company?"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 331,
                  columnNumber: 21
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 260,
                columnNumber: 19
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 174,
              columnNumber: 17
            }, _this);
          })
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 171,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 166,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 141,
      columnNumber: 7
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 139,
    columnNumber: 5
  }, _this);
};

_s(UniqueCompetitorsPage, "G8N85msXlTTo/W/vhEQ4dK2zHGs=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_5__["useRouter"]];
});

_c = UniqueCompetitorsPage;
var __N_SSG = true;
/* harmony default export */ __webpack_exports__["default"] = (UniqueCompetitorsPage);

var _c;

$RefreshReg$(_c, "UniqueCompetitorsPage");

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvZGFzaGJvYXJkL3Byb2plY3RzL1twcm9qZWN0XS9jb21wZXRpdG9ycy8uanMiXSwibmFtZXMiOlsiVW5pcXVlQ29tcGV0aXRvcnNQYWdlIiwicHJvamVjdHMiLCJjb25zb2xlIiwibG9nIiwidXNlU3RhdGUiLCJzZWxlY3RlZFByb2plY3QiLCJzZXRTZWxlY3RlZFByb2plY3QiLCJjb21wZXRpdG9ycyIsInNldENvbXBldGl0b3JzIiwicm91dGVyIiwidXNlUm91dGVyIiwidXNlRWZmZWN0IiwidWlkIiwiQ29va2llcyIsImdldCIsImZpbHRlcmVkQXJyYXkiLCJmaWx0ZXIiLCJwcm9qZWN0IiwibGVuZ3RoIiwibG9hZGluZ0hlbHBlciIsInNldExvYWRpbmdIZWxwZXIiLCJ1c2VyVWlkIiwicXVlcnkiLCJkYXRhIiwiZGJDbGllbnQiLCJjb2xsZWN0aW9uIiwid2hlcmUiLCJ0aGVuIiwicXVlcnlTbmFwc2hvdCIsImZvckVhY2giLCJkb2MxIiwiZG9jIiwicHJvamVjdElkIiwib25TbmFwc2hvdCIsInNlcnZlclVwZGF0ZSIsImRvY3MiLCJtYXAiLCJjb21wZXRpdG9yc0FycmF5IiwiaXNGYWxsYmFjayIsImRyb3Bkb3duSGVscGVyIiwic2V0RHJvcGRvd25IZWxwZXIiLCJpbml0aWFsQ29udGFpbmVyIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsImluZGV4IiwiZGVzY3JpcHRpb25UaXRsZSIsInBsYWNlaG9sZGVyVGl0bGUiLCJkZXNjcmlwdGlvbk1vZGVsIiwicGxhY2Vob2xkZXJNb2RlbCIsImRlc2NyaXB0aW9uUHJvZHVjdCIsInBsYWNlaG9sZGVyUHJvZHVjdCIsImRlc2NyaXB0aW9uUHJvbW90aW9uIiwicGxhY2Vob2xkZXJQcm9tb3Rpb24iLCJkZXNjcmlwdGlvblN0cmVuZ3RocyIsInBsYWNlaG9sZGVyU3RyZW5ndGhzIiwiZGVzY3JpcHRpb25XZWFrbmVzc2VzIiwicGxhY2Vob2xkZXJXZWFrbmVzc2VzIiwiZGVzY3JpcHRpb25PcHBvcnR1bml0aWVzIiwicGxhY2Vob2xkZXJPcHBvcnR1bml0aWVzIiwiZHJvcERvd25FbGVtZW50IiwiZGF0YUVsZW1lbnQiLCJnc2FwIiwic2V0Iiwicm90YXRpb24iLCJpc01vYmlsZSIsImNvbnRhaW5lckVsZW1lbnQiLCJjb21wZXRpdG9yTWFuYWdlciIsImFkZEV2ZW50TGlzdGVuZXIiLCJ0byIsImhlaWdodCIsIm1hcmlnbkJvdHRvbSIsImR1cmF0aW9uIiwiZWFzZSIsIkxpbmVhciIsImVhc2VJbiIsIm1hcmdpblRvcCIsIm1hcmdpbkJvdHRvbSIsImVhc2VPdXQiLCJvblNlY3Rpb25Ecm9wZG93biIsInNlY3Rpb25IZWlnaHQiLCJvZmZzZXRIZWlnaHQiLCJhdXRvQWxwaGEiLCJjb21wZXRpdG9yIiwidG9wIiwiaW1hZ2UiLCJkaXNwbGF5IiwiekluZGV4Iiwib25GaWxlQ2hhbmdlIiwidGl0bGUiLCJsb2NhdGlvbiIsImVtcGxveWVlcyIsInJldmVudWUiLCJjb21wYW55RGVzY3JpcHRpb24iLCJidXNpbmVzc01vZGVsIiwicHJvZHVjdE92ZXJ2aWV3IiwicHJvbW90aW9uU3RyYXRlZ3kiLCJjb21wYW55U3RyZW5ndGhzIiwiY29tcGFueVdlYWtuZXNzZXMiLCJvcHBvcnR1bml0aWVzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBRUE7QUFDQTtBQUNBOztBQUVBLElBQU1BLHFCQUFxQixHQUFHLFNBQXhCQSxxQkFBd0IsT0FBa0I7QUFBQTs7QUFBQSxNQUFmQyxRQUFlLFFBQWZBLFFBQWU7QUFDOUNDLFNBQU8sQ0FBQ0MsR0FBUixDQUFZLHlCQUFaLEVBQXVDRixRQUF2Qzs7QUFEOEMsa0JBRUFHLHNEQUFRLENBQUMsSUFBRCxDQUZSO0FBQUEsTUFFdkNDLGVBRnVDO0FBQUEsTUFFdEJDLGtCQUZzQjs7QUFBQSxtQkFHUkYsc0RBQVEsRUFIQTtBQUFBLE1BR3ZDRyxXQUh1QztBQUFBLE1BRzFCQyxj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QUFBLDJCQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx5QkFuRUYsZUF1RUU7QUFDRSx1QkFBSyxFQUFFc0QsYUFEVDtBQUVFLG9CQUFFLG9DQUE2QnRELEtBQTdCLENBRko7QUFHRSwyQkFBUyxFQUFDLDBHQUhaO0FBSUUsNkJBQVcsRUFBQztBQUpkO0FBQUE7QUFBQTtBQUFBO0FBQUEseUJBdkVGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkF0RkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQURjO0FBQUEsV0FBaEI7QUFGSjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUxGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQXpCRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUFnTkQsQ0FuVkQ7O0dBQU01QyxxQjtVQUlXVSxxRDs7O0tBSlhWLHFCOztBQTBYU0Esb0ZBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvZGFzaGJvYXJkL3Byb2plY3RzL1twcm9qZWN0XS9jb21wZXRpdG9ycy9baWRdLjY4ZTQwY2FmN2Y3NWYxMDNhZWZhLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSwgdXNlUmVmIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBkYiB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL2xpYi9maXJlYmFzZS1hZG1pbic7XHJcbmltcG9ydCB7IGRiIGFzIGRiQ2xpZW50IH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vbGliL2ZpcmViYXNlJztcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xyXG5pbXBvcnQgQ29va2llcyBmcm9tICdqcy1jb29raWUnO1xyXG5cclxuY29uc3QgVW5pcXVlQ29tcGV0aXRvcnNQYWdlID0gKHsgcHJvamVjdHMgfSkgPT4ge1xyXG4gIGNvbnNvbGUubG9nKCdQYXJ0aWN1bGFyIHByb2plY3QgLS0+ICcsIHByb2plY3RzKTtcclxuICBjb25zdCBbc2VsZWN0ZWRQcm9qZWN0LCBzZXRTZWxlY3RlZFByb2plY3RdID0gdXNlU3RhdGUobnVsbCk7XHJcbiAgY29uc3QgW2NvbXBldGl0b3JzLCBzZXRDb21wZXRpdG9yc10gPSB1c2VTdGF0ZSgpO1xyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG4gIC8vICAgU2VsZWN0ZWQgcHJvamVjdFxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zdCB1aWQgPSBDb29raWVzLmdldCgndWlkJyk7XHJcbiAgICBjb25zdCBmaWx0ZXJlZEFycmF5ID0gcHJvamVjdHMgJiYgcHJvamVjdHMuZmlsdGVyKChwcm9qZWN0KSA9PiBwcm9qZWN0LnVpZCA9PSB1aWQpO1xyXG4gICAgY29uc29sZS5sb2coZmlsdGVyZWRBcnJheSk7XHJcbiAgICBmaWx0ZXJlZEFycmF5ICYmIGZpbHRlcmVkQXJyYXkubGVuZ3RoID09IDEgJiYgc2V0U2VsZWN0ZWRQcm9qZWN0KGZpbHRlcmVkQXJyYXlbMF0pO1xyXG4gIH0sIFtwcm9qZWN0c10pO1xyXG4gIGNvbnNvbGUubG9nKHNlbGVjdGVkUHJvamVjdCk7XHJcblxyXG4gIC8vIENvbXBldGl0b3JzXHJcbiAgY29uc3QgW2xvYWRpbmdIZWxwZXIsIHNldExvYWRpbmdIZWxwZXJdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zdCB1c2VyVWlkID0gQ29va2llcy5nZXQoJ3VpZCcpO1xyXG4gICAgaWYgKHVzZXJVaWQgJiYgcm91dGVyLnF1ZXJ5LnByb2plY3QpIHtcclxuICAgICAgY29uc3QgZGF0YSA9IGRiQ2xpZW50LmNvbGxlY3Rpb24oJ3Byb2plY3RzJykud2hlcmUoJ3VpZCcsICc9PScsIHVzZXJVaWQpO1xyXG4gICAgICBkYXRhXHJcbiAgICAgICAgLndoZXJlKCdwcm9qZWN0TmFtZScsICc9PScsIHJvdXRlci5xdWVyeS5wcm9qZWN0KVxyXG4gICAgICAgIC5nZXQoKVxyXG4gICAgICAgIC50aGVuKChxdWVyeVNuYXBzaG90KSA9PiB7XHJcbiAgICAgICAgICBxdWVyeVNuYXBzaG90LmZvckVhY2goYXN5bmMgKGRvYzEpID0+IHtcclxuICAgICAgICAgICAgLy8gICBzZXRQcm9qZWN0SWQoZG9jMS5kYXRhKCkucHJvamVjdElkKTtcclxuXHJcbiAgICAgICAgICAgIGRiQ2xpZW50XHJcbiAgICAgICAgICAgICAgLmNvbGxlY3Rpb24oJ3Byb2plY3RzJylcclxuICAgICAgICAgICAgICAuZG9jKGRvYzEuZGF0YSgpLnByb2plY3RJZClcclxuICAgICAgICAgICAgICAuY29sbGVjdGlvbignY29tcGV0aXRvcnMnKVxyXG4gICAgICAgICAgICAgIC5kb2Mocm91dGVyLnF1ZXJ5LnByb2plY3QpXHJcbiAgICAgICAgICAgICAgLmNvbGxlY3Rpb24oJ2lucHV0cycpXHJcbiAgICAgICAgICAgICAgLm9uU25hcHNob3QoKHNlcnZlclVwZGF0ZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgc2VydmVyVXBkYXRlLmRvY3MubWFwKChkb2MpID0+IHtcclxuICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZG9jLmRhdGEoKSk7XHJcbiAgICAgICAgICAgICAgICAgIGNvbnN0IGRhdGEgPSBkb2MuZGF0YSgpO1xyXG4gICAgICAgICAgICAgICAgICAvLyAgIHNldERvY3VtZW50SWQoZG9jLmlkKTtcclxuICAgICAgICAgICAgICAgICAgc2V0Q29tcGV0aXRvcnMoZGF0YS5jb21wZXRpdG9yc0FycmF5KTtcclxuICAgICAgICAgICAgICAgICAgc2V0TG9hZGluZ0hlbHBlcihmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgY29uc29sZS5sb2coJ0xvYWRpbmcgZmFpbGVkJyk7XHJcbiAgICAgIHNldExvYWRpbmdIZWxwZXIodHJ1ZSk7XHJcbiAgICB9XHJcbiAgfSwgW2xvYWRpbmdIZWxwZXIsIHJvdXRlci5xdWVyeS5wcm9qZWN0XSk7XHJcbiAgY29uc29sZS5sb2coY29tcGV0aXRvcnMpO1xyXG5cclxuICBpZiAocm91dGVyLmlzRmFsbGJhY2spIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXY+XHJcbiAgICAgICAgPHA+TG9hZGluZy4uLjwvcD5cclxuICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgLy8gICBEcm9wZG93blxyXG4gIGNvbnN0IFtkcm9wZG93bkhlbHBlciwgc2V0RHJvcGRvd25IZWxwZXJdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuICBjb25zdCBpbml0aWFsQ29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaW5kZXgpO1xyXG4gIC8vIEVsZW1lbnRzXHJcbiAgY29uc3QgZGVzY3JpcHRpb25UaXRsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGBkZXNjcmlwdGlvblRpdGxlJHtpbmRleH1gKTtcclxuICBjb25zdCBwbGFjZWhvbGRlclRpdGxlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYHBsYWNlaG9sZGVyVGl0bGUke2luZGV4fWApO1xyXG4gIGNvbnN0IGRlc2NyaXB0aW9uTW9kZWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgZGVzY3JpcHRpb25Nb2RlbCR7aW5kZXh9YCk7XHJcbiAgY29uc3QgcGxhY2Vob2xkZXJNb2RlbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGBwbGFjZWhvbGRlck1vZGVsJHtpbmRleH1gKTtcclxuICBjb25zdCBkZXNjcmlwdGlvblByb2R1Y3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgZGVzY3JpcHRpb25Qcm9kdWN0JHtpbmRleH1gKTtcclxuICBjb25zdCBwbGFjZWhvbGRlclByb2R1Y3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgcGxhY2Vob2xkZXJQcm9kdWN0JHtpbmRleH1gKTtcclxuICBjb25zdCBkZXNjcmlwdGlvblByb21vdGlvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGBkZXNjcmlwdGlvblByb21vdGlvbiR7aW5kZXh9YCk7XHJcbiAgY29uc3QgcGxhY2Vob2xkZXJQcm9tb3Rpb24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgcGxhY2Vob2xkZXJQcm9tb3Rpb24ke2luZGV4fWApO1xyXG4gIGNvbnN0IGRlc2NyaXB0aW9uU3RyZW5ndGhzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYGRlc2NyaXB0aW9uU3RyZW5ndGhzJHtpbmRleH1gKTtcclxuICBjb25zdCBwbGFjZWhvbGRlclN0cmVuZ3RocyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGBwbGFjZWhvbGRlclN0cmVuZ3RocyR7aW5kZXh9YCk7XHJcbiAgY29uc3QgZGVzY3JpcHRpb25XZWFrbmVzc2VzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYGRlc2NyaXB0aW9uV2Vha25lc3NlcyR7aW5kZXh9YCk7XHJcbiAgY29uc3QgcGxhY2Vob2xkZXJXZWFrbmVzc2VzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYHBsYWNlaG9sZGVyV2Vha25lc3NlcyR7aW5kZXh9YCk7XHJcbiAgY29uc3QgZGVzY3JpcHRpb25PcHBvcnR1bml0aWVzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYGRlc2NyaXB0aW9uT3Bwb3J0dW5pdGllcyR7aW5kZXh9YCk7XHJcbiAgY29uc3QgcGxhY2Vob2xkZXJPcHBvcnR1bml0aWVzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYHBsYWNlaG9sZGVyT3Bwb3J0dW5pdGllcyR7aW5kZXh9YCk7XHJcblxyXG4gIGNvbnN0IGRyb3BEb3duRWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGBkcm9wZG93biR7aW5kZXh9YCk7XHJcbiAgY29uc3QgZGF0YUVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgZGF0YSR7aW5kZXh9YCk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBnc2FwLnNldChkcm9wRG93bkVsZW1lbnQsIHsgcm90YXRpb246ICctOTBfY3cnIH0pO1xyXG4gICAgaWYgKCFpc01vYmlsZSkge1xyXG4gICAgICBjb25zdCBjb250YWluZXJFbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYGNvbnRhaW5lciR7aW5kZXh9YCk7XHJcbiAgICAgIGNvbnN0IGNvbXBldGl0b3JNYW5hZ2VyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYG1hbmFnZXIke2luZGV4fWApO1xyXG4gICAgICBjb250YWluZXJFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZW50ZXInLCAoKSA9PiB7XHJcbiAgICAgICAgZ3NhcC50byhjb21wZXRpdG9yTWFuYWdlciwgeyBoZWlnaHQ6IDE4LCBtYXJpZ25Cb3R0b206IDE2LCBkdXJhdGlvbjogMC41LCBlYXNlOiBMaW5lYXIuZWFzZUluIH0pO1xyXG4gICAgICAgIGdzYXAudG8oaW5pdGlhbENvbnRhaW5lciwgeyBtYXJnaW5Ub3A6IDE2LCBkdXJhdGlvbjogMC41LCBlYXNlOiBMaW5lYXIuZWFzZUluIH0pO1xyXG4gICAgICB9KTtcclxuICAgICAgY29udGFpbmVyRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWxlYXZlJywgKCkgPT4ge1xyXG4gICAgICAgIGdzYXAudG8oY29tcGV0aXRvck1hbmFnZXIsIHsgaGVpZ2h0OiAwLCBtYXJnaW5Cb3R0b206IDAsIGR1cmF0aW9uOiAwLjUsIGVhc2U6IExpbmVhci5lYXNlT3V0IH0pO1xyXG4gICAgICAgIGdzYXAudG8oaW5pdGlhbENvbnRhaW5lciwgeyBtYXJnaW5Ub3A6IDAsIGR1cmF0aW9uOiAwLjUsIGVhc2U6IExpbmVhci5lYXNlSW4gfSk7XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH0sIFtkcm9wRG93bkVsZW1lbnRdKTtcclxuXHJcbiAgY29uc3Qgb25TZWN0aW9uRHJvcGRvd24gPSAoKSA9PiB7XHJcbiAgICBjb25zdCBzZWN0aW9uSGVpZ2h0ID1cclxuICAgICAgZGVzY3JpcHRpb25UaXRsZS5vZmZzZXRIZWlnaHQgK1xyXG4gICAgICBwbGFjZWhvbGRlclRpdGxlLm9mZnNldEhlaWdodCArXHJcbiAgICAgIGRlc2NyaXB0aW9uTW9kZWwub2Zmc2V0SGVpZ2h0ICtcclxuICAgICAgcGxhY2Vob2xkZXJNb2RlbC5vZmZzZXRIZWlnaHQgK1xyXG4gICAgICAyNCArXHJcbiAgICAgIGRlc2NyaXB0aW9uUHJvZHVjdC5vZmZzZXRIZWlnaHQgK1xyXG4gICAgICBwbGFjZWhvbGRlclByb2R1Y3Qub2Zmc2V0SGVpZ2h0ICtcclxuICAgICAgMjQgK1xyXG4gICAgICBkZXNjcmlwdGlvblByb21vdGlvbi5vZmZzZXRIZWlnaHQgK1xyXG4gICAgICBwbGFjZWhvbGRlclByb21vdGlvbi5vZmZzZXRIZWlnaHQgK1xyXG4gICAgICAyNCArXHJcbiAgICAgIGRlc2NyaXB0aW9uU3RyZW5ndGhzLm9mZnNldEhlaWdodCArXHJcbiAgICAgIHBsYWNlaG9sZGVyU3RyZW5ndGhzLm9mZnNldEhlaWdodCArXHJcbiAgICAgIDI0ICtcclxuICAgICAgZGVzY3JpcHRpb25XZWFrbmVzc2VzLm9mZnNldEhlaWdodCArXHJcbiAgICAgIHBsYWNlaG9sZGVyV2Vha25lc3Nlcy5vZmZzZXRIZWlnaHQgK1xyXG4gICAgICAyNCArXHJcbiAgICAgIGRlc2NyaXB0aW9uT3Bwb3J0dW5pdGllcy5vZmZzZXRIZWlnaHQgK1xyXG4gICAgICBwbGFjZWhvbGRlck9wcG9ydHVuaXRpZXMub2Zmc2V0SGVpZ2h0ICtcclxuICAgICAgMjQ7XHJcbiAgICBpZiAoIWRyb3Bkb3duSGVscGVyKSB7XHJcbiAgICAgIGdzYXAudG8oZGF0YUVsZW1lbnQsIHsgaGVpZ2h0OiBzZWN0aW9uSGVpZ2h0LCBtYXJnaW5Ub3A6IDMyLCBtYXJnaW5Cb3R0b206IDExMiwgYXV0b0FscGhhOiAxLCBkdXJhdGlvbjogMSwgZWFzZTogTGluZWFyIH0pO1xyXG4gICAgICBnc2FwLnRvKGRyb3BEb3duRWxlbWVudCwgeyByb3RhdGlvbjogJzBfY3cnLCBkdXJhdGlvbjogMSwgZWFzZTogTGluZWFyIH0pO1xyXG4gICAgICBzZXREcm9wZG93bkhlbHBlcih0cnVlKTtcclxuICAgIH0gZWxzZSBpZiAoZHJvcGRvd25IZWxwZXIpIHtcclxuICAgICAgZ3NhcC50byhkYXRhRWxlbWVudCwgeyBoZWlnaHQ6IDAsIG1hcmdpblRvcDogMCwgbWFyZ2luQm90dG9tOiAwLCBhdXRvQWxwaGE6IDAsIGR1cmF0aW9uOiAxLCBlYXNlOiBMaW5lYXIgfSk7XHJcbiAgICAgIGdzYXAudG8oZHJvcERvd25FbGVtZW50LCB7IHJvdGF0aW9uOiAnLTkwX2NjdycsIGR1cmF0aW9uOiAxLCBlYXNlOiBMaW5lYXIgfSk7XHJcbiAgICAgIHNldERyb3Bkb3duSGVscGVyKGZhbHNlKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJtaW4taC1zY3JlZW4gdy1mdWxsIHJlbGF0aXZlIGZsZXggZmxleC1jb2wgaXRlbXMtY2VudGVyIHRleHQtcHJpbWFyeWRhcmtcIj5cclxuICAgICAgey8qIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsIHhsQ29udGFpbmVyOm1heC13LXhsQ29udGFpbmVyQnJlYWsgeHhsQ29udGFpbmVyOm1heC13LXh4bENvbnRhaW5lckJyZWFrIHJlbGF0aXZlIG10LTE2XCI+ICovfVxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbCBtYXgtdy1mdWxsIHJlbGF0aXZlIG10LTggbWRDb250YWluZXI6bXQtMTYgbWItMTYgcHgtOCBtZENvbnRhaW5lcjpweC0xNiBsZ0NvbnRhaW5lcjpweC0zMiBiaWdDb250YWluZXI6cHgtNDggYmlnMkNvbnRhaW5lcjpweC02NCBiaWczQ29udGFpbmVyOnB4LTgwIFFIRDptYXgtdy1RSERcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlbGF0aXZlIGdyaWQgZ3JpZC1jb2xzLTIgZ3JpZC1yb3dzLTEgZ3JpZC1mbG93LWNvbFwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlclwiPlxyXG4gICAgICAgICAgICA8c3ZnXHJcbiAgICAgICAgICAgICAgaGVpZ2h0PVwiMzBcIlxyXG4gICAgICAgICAgICAgIHdpZHRoPVwiMzBcIlxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZpbGwtY3VycmVudCB0ZXh0LXByaW1hcnkgZGFyazp0ZXh0LXByaW1hcnlkYXJrXCJcclxuICAgICAgICAgICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcclxuICAgICAgICAgICAgICB2aWV3Qm94PVwiMCAwIDEyOCAxMjhcIlxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgPHRpdGxlPkxhbmRpbmcgU3VjY2VzczwvdGl0bGU+XHJcbiAgICAgICAgICAgICAgPGcgaWQ9XCJMYW5kaW5nX1N1Y2Nlc3NcIiBkYXRhLW5hbWU9XCJMYW5kaW5nIFN1Y2Nlc3NcIj5cclxuICAgICAgICAgICAgICAgIDxwYXRoXHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImNscy0xXCJcclxuICAgICAgICAgICAgICAgICAgZD1cIk0xMDkuMyw5MC4xQTQ2LDQ2LDAsMCwwLDY1LDM2VjIwLjA4YzEuNzgtLjYyLDcuMjEtMi4xNCwxMi41Ny4yM2ExOS4zMywxOS4zMywwLDAsMCwxNC44MiwwYy44Ny0uMzguNjEuMzEuNjEtMTcuOTNhMSwxLDAsMCwwLTEuNDMtLjkzYy0uMDcsMC02LjY5LDIuODctMTMuMTgsMEExOS40MSwxOS40MSwwLDAsMCw2NSwuOTMsMSwxLDAsMCwwLDYzLDFWMzZhNDUuODYsNDUuODYsMCwwLDAtMjguNjYsMTAuOEMxNi4xOCw0MC40OCw0LDQwLC43OSw0NS41MS0yLjI5LDUwLjg2LDMuOTQsNTkuMywxMCw2NS42OEExMSwxMSwwLDAsMCwxOCw4M2MuODEsMzguNDEsNDYuMDgsNTkuMiw3NS42NiwzNC4yMSw4LjUzLDMsMjksOS4xNSwzMy41NSwxLjMxQzEzMC4zOSwxMTMsMTIzLjg2LDEwMi42NSwxMDkuMyw5MC4xWk03Ny41OSwzLjMxQTE5LjM5LDE5LjM5LDAsMCwwLDkxLDMuODNWMTguNjhjLTEuNzkuNjItNy4yMiwyLjEzLTEyLjU3LS4yM0ExOS4xOSwxOS4xOSwwLDAsMCw2NSwxNy45M1YzLjA4QzY2LjgxLDIuNDYsNzIuMjQsMSw3Ny41OSwzLjMxWk02NSw0NXYtN2MzOS42OS45MSw1OCw1MC4yNywyOC4yMSw3Ni44MUM3MS4zMiwxMDcsNDYsOTIuNjYsMjcuNzcsNzguNjRhMTEsMTEsMCwwLDAtMy4yLTE2LjEzQTQzLjg4LDQzLjg4LDAsMCwxLDYzLDM4LjA2VjQ1QTEsMSwwLDAsMCw2NSw0NVpNMzIuNTUsNDguMzZhNDYuMjEsNDYuMjEsMCwwLDAtOS44MywxMy4yOCwxMC45MywxMC45MywwLDAsMC0xMS40LDIuNDdDLTguMzksNDMuMjMsNS4yMywzOS4wOCwzMi41NSw0OC4zNlpNMTAsNzJhOSw5LDAsMSwxLDksOUE5LDksMCwwLDEsMTAsNzJabTEwLDExYTExLDExLDAsMCwwLDYuMzQtMi44MmMxOC40NSwxNC4yMSw0My40NSwyOC4zNSw2NS4wNSwzNi4yMkM2MywxMzkuMTYsMjAuODMsMTE5LjEsMjAuMDUsODNabTEwNS40LDM0LjVjLTIuNTEsNC4zNS0xNCwzLjYyLTMwLTEuODVhNDUuNjEsNDUuNjEsMCwwLDAsMTMuNDItMjMuMjFDMTIxLjU5LDEwMy41OCwxMjgsMTEzLjEyLDEyNS40NSwxMTcuNDdaXCJcclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPC9nPlxyXG4gICAgICAgICAgICA8L3N2Zz5cclxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1wcmltYXJ5ZGFyayB0ZXh0LXhsIHNzbUNvbnRhaW5lcjp0ZXh0LTJ4bCBtdC0yIHBsLTIgZGFyazp0ZXh0LWJhY2tncm91bmRcIj5Db21wZXRpdG9ycyBhbmFseXNpczwvcD5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgey8qIHtzaXplLndpZHRoID4gNjgwICYmIDxDb21wZXRpdG9yc1BERiAvPn0gKi99XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJ0ZXh0LXNlY29uZGFyeSB0ZXh0LWJhc2Ugc3NtQ29udGFpbmVyOnRleHQtbWQgdGV4dC1ncmF5XCI+TWFuYWdlIHlvdXIgc3RhcnR1cCBjb21wZXRpdG9yczwvaDE+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGwgYmctd2hpdGUgcm91bmRlZC0yeGwgbXQtMTIgcC04XCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1iZXR3ZWVuIGl0ZW1zLWNlbnRlclwiPlxyXG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXByaW1hcnlkYXJrIHRleHQtbWQgc3NtQ29udGFpbmVyOnRleHQtbGdcIj5Db21wZXRpdG9yczwvcD5cclxuICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJjdXJzb3ItcG9pbnRlclwiIHNyYz1cIi9jb21wZXRpdG9ycy9hZGQxLnN2Z1wiIGhlaWdodD17MzJ9IHdpZHRoPXszMn0gLz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkIGdyaWQtY29scy0xZnJyIG5vcm1hbENvbnRhaW5lcjpncmlkLWNvbHMtMmZyIGdhcC14LTEyXCI+XHJcbiAgICAgICAgICAgIHtjb21wZXRpdG9ycyAmJlxyXG4gICAgICAgICAgICAgIGNvbXBldGl0b3JzLm1hcCgoY29tcGV0aXRvciwgaW5kZXgpID0+IChcclxuICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgaGVpZ2h0OiAnZml0LWNvbnRlbnQnIH19XHJcbiAgICAgICAgICAgICAgICAgIGlkPXtgY29udGFpbmVyJHtpbmRleH1gfVxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LWZ1bGwgYmctYmFja2dyb3VuZCByb3VuZGVkLTJ4bCBwLTQgc3NtQ29udGFpbmVyOnAtNiBzaGFkb3ctbWQgb3ZlcmZsb3ctaGlkZGVuIG10LTggc21Db250YWluZXI6bXQtOFwiXHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyBoZWlnaHQ6IGAke2lzTW9iaWxlID8gNDAgOiAwfWAsIHRvcDogYCR7aXNNb2JpbGUgPyAnLTZweCcgOiAnLTZweCd9YCB9fVxyXG4gICAgICAgICAgICAgICAgICAgIGlkPXtgbWFuYWdlciR7aW5kZXh9YH1cclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktYmV0d2VlbiByZWxhdGl2ZVwiXHJcbiAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJjdXJzb3ItcG9pbnRlclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAvLyAgIHN0eWxlPXt7IHRyYW5zZm9ybTogJ3JvdGF0ZSgtOTBkZWcpJyB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17b25TZWN0aW9uRHJvcGRvd259XHJcbiAgICAgICAgICAgICAgICAgICAgICBpZD17YGRyb3Bkb3duJHtpbmRleH1gfVxyXG4gICAgICAgICAgICAgICAgICAgICAgc3JjPVwiL2NvbXBldGl0b3JzL2Ryb3Bkb3duLnN2Z1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9ezE4fVxyXG4gICAgICAgICAgICAgICAgICAgICAgd2lkdGg9ezE4fVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICB7LyogPGltZyBjbGFzc05hbWU9XCJjdXJzb3ItcG9pbnRlciBtci0yXCIgc3JjPVwiL2NvbXBldGl0b3JzL2RyYWcuc3ZnXCIgaGVpZ2h0PXsxOH0gd2lkdGg9ezE4fSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJjdXJzb3ItcG9pbnRlclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IG9uQ29tcGV0aXRvclJlbW92ZShkYXRhLmluZGV4KX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgc3JjPVwiL2NvbXBldGl0b3JzL3JlbW92ZS5zdmdcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9ezE4fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aD17MTh9XHJcbiAgICAgICAgICAgICAgICAgICAgICAvPiAqL31cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICBpZD17aW5kZXh9XHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZmxleCBnYXAtNiBmbGV4LWNvbCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXIgc21Db250YWluZXI6Z2FwLTAgc21Db250YWluZXI6Z3JpZCBzbUNvbnRhaW5lcjpncmlkLWNvbHMtMTJmclwiXHJcbiAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNtQ29udGFpbmVyOmNvbC1zdGFydC0xIHNtQ29udGFpbmVyOmNvbC1lbmQtNCBqdXN0aWZ5LXNlbGYtY2VudGVyIGZsZXgganVzdGlmeS1zdGFydCBpdGVtcy1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIHtpbWFnZSAhPT0gJycgPyAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGh0bWxGb3I9e2B1cGxvYWQtaW1hZ2Uke2luZGV4fWB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicmVsYXRpdmUgdy0yMCBoLTIwIGN1cnNvci1wb2ludGVyIHJvdW5kZWQtZnVsbCBiZy13aGl0ZSBmbGV4IGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17aW1hZ2V9IGhlaWdodD17NTV9IHdpZHRoPXs1NX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBodG1sRm9yPXtgdXBsb2FkLWltYWdlJHtpbmRleH1gfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy0yMCBoLTIwIGN1cnNvci1wb2ludGVyIHJvdW5kZWQtZnVsbCBiZy1wcmltYXJ5IGZsZXgganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIi9jb21wZXRpdG9ycy9lbXB0eS1pbWFnZS5zdmdcIiBoZWlnaHQ9ezY1fSB3aWR0aD17NjV9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJmaWxlXCIgaWQ9e2B1cGxvYWQtaW1hZ2Uke2luZGV4fWB9IHN0eWxlPXt7IGRpc3BsYXk6ICdub25lJywgekluZGV4OiAxMCB9fSBvbkNoYW5nZT17b25GaWxlQ2hhbmdlfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic21Db250YWluZXI6Y29sLXN0YXJ0LTUgc21Db250YWluZXI6Y29sLWVuZC0xMyBncmlkIGdyaWQtY29scy0yZnIgZ3JpZC1yb3dzLTJmciBqdXN0aWZ5LWl0ZW1zLWNlbnRlciBpdGVtcy1jZW50ZXIgZ2FwLXgtNCBzc21Db250YWluZXI6Z2FwLXgtOCBnYXAteS0yIHNzbUNvbnRhaW5lcjpnYXAteS00XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dGl0bGV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYmctd2hpdGUgcm91bmRlZC0yeGwgdy1mdWxsIHB4LTMgcHktMiB0ZXh0LXNtIHRleHQtcHJpbWFyeWRhcmsgZm9jdXM6b3V0bGluZS1ub25lXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIm5hbWVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17bG9jYXRpb259XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYmctd2hpdGUgcm91bmRlZC0yeGwgdy1mdWxsIHB4LTMgcHktMiB0ZXh0LXNtIHRleHQtcHJpbWFyeWRhcmsgZm9jdXM6b3V0bGluZS1ub25lXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cImxvY2F0aW9uXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2VtcGxveWVlc31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJiZy13aGl0ZSByb3VuZGVkLTJ4bCB3LWZ1bGwgcHgtMyBweS0yIHRleHQtc20gdGV4dC1wcmltYXJ5ZGFyayBmb2N1czpvdXRsaW5lLW5vbmVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiZW1wbG95ZWVzXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3JldmVudWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYmctd2hpdGUgcm91bmRlZC0yeGwgdy1mdWxsIHB4LTMgcHktMiB0ZXh0LXNtIHRleHQtcHJpbWFyeWRhcmsgZm9jdXM6b3V0bGluZS1ub25lXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cInJldmVudWVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICB7LyogQ29tcGFueSBkZXNjcmlwdGlvbiAqL31cclxuICAgICAgICAgICAgICAgICAgPGRpdiBpZD17YGRhdGEke2luZGV4fWB9IGNsYXNzTmFtZT1cInctZnVsbCBoLTAgaW52aXNpYmxlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBpZD17YGRlc2NyaXB0aW9uVGl0bGUke2luZGV4fWB9IGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1zdGFydCBpdGVtcy1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiL2NvbXBldGl0b3JzL2Rlc2NyaXB0aW9uLnN2Z1wiIGhlaWdodD17MjJ9IHdpZHRoPXsyMn0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtcHJpbWFyeWRhcmsgbWwtMlwiPkNvbXBhbnkgZGVzY3JpcHRpb248L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRleHRhcmVhXHJcbiAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17Y29tcGFueURlc2NyaXB0aW9ufVxyXG4gICAgICAgICAgICAgICAgICAgICAgaWQ9e2BwbGFjZWhvbGRlclRpdGxlJHtpbmRleH1gfVxyXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy1mdWxsIGJnLXdoaXRlIHJvdW5kZWQtMnhsIG10LTIgcC0yIHRleHQtcHJpbWFyeWRhcmsgdGV4dC1zbSBweC00IHB5LTMgaC0yOCBtYXgtaC0yOCBmb2N1czpvdXRsaW5lLW5vbmVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJEZXNjcmliZSB0aGUgbWFpbiBhc3N1bXB0aW9uIG9mIGFuYWx5emVkIGNvbXBhbnkuXCJcclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIHsvKiBUaXRsZSBlbmQgKi99XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBpZD17YGRlc2NyaXB0aW9uTW9kZWwke2luZGV4fWB9IGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1zdGFydCBpdGVtcy1jZW50ZXIgbXQtNlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCIvY29tcGV0aXRvcnMvbW9kZWwuc3ZnXCIgaGVpZ2h0PXsyMn0gd2lkdGg9ezIyfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1wcmltYXJ5ZGFyayBtbC0yXCI+QnVzaW5lc3MgbW9kZWw8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRleHRhcmVhXHJcbiAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17YnVzaW5lc3NNb2RlbH1cclxuICAgICAgICAgICAgICAgICAgICAgIGlkPXtgcGxhY2Vob2xkZXJNb2RlbCR7aW5kZXh9YH1cclxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInctZnVsbCBiZy13aGl0ZSByb3VuZGVkLTJ4bCBtdC0yIHAtMiB0ZXh0LXByaW1hcnlkYXJrIHRleHQtc20gcHgtNCBweS0zIGgtMjggbWF4LWgtMjggZm9jdXM6b3V0bGluZS1ub25lXCJcclxuICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiSG93IGRvZXMgdGhlIGNvbXBhbnkgYnVzaW5lc3MgbW9kZWwgbG9vayBsaWtlP1wiXHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICB7LyogTW9kZWwgZW5kICovfVxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgaWQ9e2BkZXNjcmlwdGlvblByb2R1Y3Qke2luZGV4fWB9IGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1zdGFydCBpdGVtcy1jZW50ZXIgbXQtNlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCIvY29tcGV0aXRvcnMvcHJvZHVjdDEuc3ZnXCIgaGVpZ2h0PXsyMn0gd2lkdGg9ezIyfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1wcmltYXJ5ZGFyayBtbC0yXCI+UHJvZHVjdCBvdmVydmlldzwvcD5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8dGV4dGFyZWFcclxuICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtwcm9kdWN0T3ZlcnZpZXd9XHJcbiAgICAgICAgICAgICAgICAgICAgICBpZD17YHBsYWNlaG9sZGVyUHJvZHVjdCR7aW5kZXh9YH1cclxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInctZnVsbCBiZy13aGl0ZSByb3VuZGVkLTJ4bCBtdC0yIHAtMiB0ZXh0LXByaW1hcnlkYXJrIHRleHQtc20gcHgtNCBweS0zIGgtMjggbWF4LWgtMjggZm9jdXM6b3V0bGluZS1ub25lXCJcclxuICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiV2hhdCBpcyB0aGUgZnVsbCByYW5nZSBvZiBwcm9kdWN0cyBhbmQgc2VydmljZXMgdGhlIGNvbXBhbnkgb2ZmZXJzP1wiXHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICB7LyogUHJvZHVjdCBlbmQgKi99XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBpZD17YGRlc2NyaXB0aW9uUHJvbW90aW9uJHtpbmRleH1gfSBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktc3RhcnQgaXRlbXMtY2VudGVyIG10LTZcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiL2NvbXBldGl0b3JzL3Byb21vdGlvbi5zdmdcIiBoZWlnaHQ9ezIyfSB3aWR0aD17MjJ9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXByaW1hcnlkYXJrIG1sLTJcIj5Qcm9tb3Rpb24gc3RyYXRlZ3k8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRleHRhcmVhXHJcbiAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17cHJvbW90aW9uU3RyYXRlZ3l9XHJcbiAgICAgICAgICAgICAgICAgICAgICBpZD17YHBsYWNlaG9sZGVyUHJvbW90aW9uJHtpbmRleH1gfVxyXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy1mdWxsIGJnLXdoaXRlIHJvdW5kZWQtMnhsIG10LTIgcC0yIHRleHQtcHJpbWFyeWRhcmsgdGV4dC1zbSBweC00IHB5LTMgaC0yOCBtYXgtaC0yOCBmb2N1czpvdXRsaW5lLW5vbmVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJXaGF0IGFyZSB0aGUgY29tcGFueSBtYXJrZXRpbmcgYW5kIHByb21vdGlvbmFsIHN0cmF0ZWdpZXM/XCJcclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIHsvKiBQcm9tb3Rpb24gZW5kICovfVxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgaWQ9e2BkZXNjcmlwdGlvblN0cmVuZ3RocyR7aW5kZXh9YH0gY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LXN0YXJ0IGl0ZW1zLWNlbnRlciBtdC02XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIi9jb21wZXRpdG9ycy9zdHJlbmd0aHMuc3ZnXCIgaGVpZ2h0PXsyMn0gd2lkdGg9ezIyfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1wcmltYXJ5ZGFyayBtbC0yXCI+Q29tcGFueSBzdHJlbmd0aHM8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRleHRhcmVhXHJcbiAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17Y29tcGFueVN0cmVuZ3Roc31cclxuICAgICAgICAgICAgICAgICAgICAgIGlkPXtgcGxhY2Vob2xkZXJTdHJlbmd0aHMke2luZGV4fWB9XHJcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LWZ1bGwgYmctd2hpdGUgcm91bmRlZC0yeGwgbXQtMiBwLTIgdGV4dC1wcmltYXJ5ZGFyayB0ZXh0LXNtIHB4LTQgcHktMyBoLTI4IG1heC1oLTI4IGZvY3VzOm91dGxpbmUtbm9uZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIldoYXQgZG8geW91ciBjb21wZXRpdG9ycyBkbyByZWFsbHkgd2VsbCB0aGF0IGRpZmZlcmVudGlhdGVzIHRoZW0/XCJcclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIHsvKiBTdHJlbmd0aHMgZW5kICovfVxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgaWQ9e2BkZXNjcmlwdGlvbldlYWtuZXNzZXMke2luZGV4fWB9IGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1zdGFydCBpdGVtcy1jZW50ZXIgbXQtNlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCIvY29tcGV0aXRvcnMvd2Vha25lc3Nlcy5zdmdcIiBoZWlnaHQ9ezIyfSB3aWR0aD17MjJ9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXByaW1hcnlkYXJrIG1sLTJcIj5Db21wYW55IFdlYWtuZXNzZXM8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRleHRhcmVhXHJcbiAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17Y29tcGFueVdlYWtuZXNzZXN9XHJcbiAgICAgICAgICAgICAgICAgICAgICBpZD17YHBsYWNlaG9sZGVyV2Vha25lc3NlcyR7aW5kZXh9YH1cclxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInctZnVsbCBiZy13aGl0ZSByb3VuZGVkLTJ4bCBtdC0yIHAtMiB0ZXh0LXByaW1hcnlkYXJrIHRleHQtc20gcHgtNCBweS0zIGgtMjggbWF4LWgtMjggZm9jdXM6b3V0bGluZS1ub25lXCJcclxuICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiV2hhdCBkbyB0aGUgY29tcGFueSBjdXN0b21lcnMgY29tcGxhaW4gYWJvdXQgdGhlIG1vc3QsIGFuZCB3aGF0IHByb2R1Y3RzIGRvIHRoZXkgbGFjaz9cIlxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgey8qIFdlYWtuZXNzZXMgZW5kICovfVxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgaWQ9e2BkZXNjcmlwdGlvbk9wcG9ydHVuaXRpZXMke2luZGV4fWB9IGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1zdGFydCBpdGVtcy1jZW50ZXIgbXQtNlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCIvY29tcGV0aXRvcnMvb3Bwb3J0dW5pdGllczIuc3ZnXCIgaGVpZ2h0PXsyMn0gd2lkdGg9ezIyfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1wcmltYXJ5ZGFyayBtbC0yXCI+T3Bwb3J0dW5pdGllczwvcD5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8dGV4dGFyZWFcclxuICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtvcHBvcnR1bml0aWVzfVxyXG4gICAgICAgICAgICAgICAgICAgICAgaWQ9e2BwbGFjZWhvbGRlck9wcG9ydHVuaXRpZXMke2luZGV4fWB9XHJcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LWZ1bGwgYmctd2hpdGUgcm91bmRlZC0yeGwgbXQtMiBwLTIgdGV4dC1wcmltYXJ5ZGFyayB0ZXh0LXNtIHB4LTQgcHktMyBoLTI4IG1heC1oLTI4IGZvY3VzOm91dGxpbmUtbm9uZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIldoYXQgZGlzdGluZ3Vpc2ggeW91ciBzdGFydHVwIGZyb20gdGhpcyBwYXJ0aWN1bGFyIGNvbXBldGl0aXZlIGNvbXBhbnk/XCJcclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIHsvKiBPcHBvcnR1bml0aWVzIGVuZCAqL31cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0U3RhdGljUGF0aHMgPSBhc3luYyAoKSA9PiB7XHJcbiAgY29uc3Qgc25hcHNob3QgPSBhd2FpdCBkYi5jb2xsZWN0aW9uKCdwcm9qZWN0cycpLmdldCgpO1xyXG5cclxuICBjb25zdCBwcm9qZWN0cyA9IFtdO1xyXG4gIHNuYXBzaG90LmZvckVhY2goKGRvYykgPT4ge1xyXG4gICAgcHJvamVjdHMucHVzaChkb2MuZGF0YSgpKTtcclxuICB9KTtcclxuXHJcbiAgY29uc3QgcGF0aHMgPSBwcm9qZWN0cy5tYXAoKHByb2plY3QpID0+ICh7XHJcbiAgICBwYXJhbXM6IHtcclxuICAgICAgcHJvamVjdDogcHJvamVjdC5wcm9qZWN0TmFtZS50b1N0cmluZygpLFxyXG4gICAgICBpZDogcHJvamVjdC5wcm9qZWN0SWQudG9TdHJpbmcoKSxcclxuICAgIH0sXHJcbiAgfSkpO1xyXG5cclxuICByZXR1cm4ge1xyXG4gICAgcGF0aHM6IHBhdGhzLFxyXG4gICAgZmFsbGJhY2s6IHRydWUsXHJcbiAgfTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBnZXRTdGF0aWNQcm9wcyA9IGFzeW5jICh7IHBhcmFtcyB9KSA9PiB7XHJcbiAgbGV0IHJlZiA9IGRiLmNvbGxlY3Rpb24oJ3Byb2plY3RzJykud2hlcmUoJ3Byb2plY3ROYW1lJywgJz09JywgcGFyYW1zLnByb2plY3QpO1xyXG5cclxuICBjb25zdCBzbmFwc2hvdCA9IGF3YWl0IHJlZi5nZXQoKTtcclxuICBjb25zdCBwcm9qZWN0cyA9IFtdO1xyXG5cclxuICBzbmFwc2hvdC5mb3JFYWNoKChkb2MpID0+IHtcclxuICAgIHByb2plY3RzLnB1c2goeyBpZDogZG9jLmlkLCAuLi5kb2MuZGF0YSgpIH0pO1xyXG4gIH0pO1xyXG5cclxuICByZXR1cm4ge1xyXG4gICAgcHJvcHM6IHsgcHJvamVjdHMgfSxcclxuICAgIHJldmFsaWRhdGU6IDEsXHJcbiAgfTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFVuaXF1ZUNvbXBldGl0b3JzUGFnZTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==