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
  }

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
              lineNumber: 79,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("g", {
              id: "Landing_Success",
              "data-name": "Landing Success",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
                className: "cls-1",
                d: "M109.3,90.1A46,46,0,0,0,65,36V20.08c1.78-.62,7.21-2.14,12.57.23a19.33,19.33,0,0,0,14.82,0c.87-.38.61.31.61-17.93a1,1,0,0,0-1.43-.93c-.07,0-6.69,2.87-13.18,0A19.41,19.41,0,0,0,65,.93,1,1,0,0,0,63,1V36a45.86,45.86,0,0,0-28.66,10.8C16.18,40.48,4,40,.79,45.51-2.29,50.86,3.94,59.3,10,65.68A11,11,0,0,0,18,83c.81,38.41,46.08,59.2,75.66,34.21,8.53,3,29,9.15,33.55,1.31C130.39,113,123.86,102.65,109.3,90.1ZM77.59,3.31A19.39,19.39,0,0,0,91,3.83V18.68c-1.79.62-7.22,2.13-12.57-.23A19.19,19.19,0,0,0,65,17.93V3.08C66.81,2.46,72.24,1,77.59,3.31ZM65,45v-7c39.69.91,58,50.27,28.21,76.81C71.32,107,46,92.66,27.77,78.64a11,11,0,0,0-3.2-16.13A43.88,43.88,0,0,1,63,38.06V45A1,1,0,0,0,65,45ZM32.55,48.36a46.21,46.21,0,0,0-9.83,13.28,10.93,10.93,0,0,0-11.4,2.47C-8.39,43.23,5.23,39.08,32.55,48.36ZM10,72a9,9,0,1,1,9,9A9,9,0,0,1,10,72Zm10,11a11,11,0,0,0,6.34-2.82c18.45,14.21,43.45,28.35,65.05,36.22C63,139.16,20.83,119.1,20.05,83Zm105.4,34.5c-2.51,4.35-14,3.62-30-1.85a45.61,45.61,0,0,0,13.42-23.21C121.59,103.58,128,113.12,125.45,117.47Z"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 81,
                columnNumber: 17
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 80,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 72,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            className: "text-primarydark text-xl ssmContainer:text-2xl mt-2 pl-2 dark:text-background",
            children: "Competitors analysis"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 87,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 71,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 70,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
          className: "text-secondary text-base ssmContainer:text-md text-gray",
          children: "Manage your startup competitors"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 92,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 91,
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
            lineNumber: 96,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
            className: "cursor-pointer",
            src: "/competitors/add1.svg",
            height: 32,
            width: 32
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 97,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 95,
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
                  lineNumber: 112,
                  columnNumber: 21
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                  className: "flex"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 121,
                  columnNumber: 21
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 107,
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
                      lineNumber: 142,
                      columnNumber: 27
                    }, _this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 138,
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
                        lineNumber: 150,
                        columnNumber: 29
                      }, _this)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 146,
                      columnNumber: 27
                    }, _this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 145,
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
                    lineNumber: 154,
                    columnNumber: 23
                  }, _this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 136,
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
                      lineNumber: 158,
                      columnNumber: 25
                    }, _this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 157,
                    columnNumber: 23
                  }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
                      value: location,
                      className: "bg-white rounded-2xl w-full px-3 py-2 text-sm text-primarydark focus:outline-none",
                      placeholder: "location"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 165,
                      columnNumber: 25
                    }, _this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 164,
                    columnNumber: 23
                  }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
                      value: employees,
                      className: "bg-white rounded-2xl w-full px-3 py-2 text-sm text-primarydark focus:outline-none",
                      placeholder: "employees"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 172,
                      columnNumber: 25
                    }, _this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 171,
                    columnNumber: 23
                  }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
                      value: revenue,
                      className: "bg-white rounded-2xl w-full px-3 py-2 text-sm text-primarydark focus:outline-none",
                      placeholder: "revenue"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 179,
                      columnNumber: 25
                    }, _this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 178,
                    columnNumber: 23
                  }, _this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 156,
                  columnNumber: 21
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 132,
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
                    lineNumber: 190,
                    columnNumber: 23
                  }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                    className: "text-primarydark ml-2",
                    children: "Company description"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 191,
                    columnNumber: 23
                  }, _this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 189,
                  columnNumber: 21
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("textarea", {
                  value: companyDescription,
                  id: "placeholderTitle".concat(index),
                  className: "w-full bg-white rounded-2xl mt-2 p-2 text-primarydark text-sm px-4 py-3 h-28 max-h-28 focus:outline-none",
                  placeholder: "Describe the main assumption of analyzed company."
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 193,
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
                    lineNumber: 201,
                    columnNumber: 23
                  }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                    className: "text-primarydark ml-2",
                    children: "Business model"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 202,
                    columnNumber: 23
                  }, _this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 200,
                  columnNumber: 21
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("textarea", {
                  value: businessModel,
                  id: "placeholderModel".concat(index),
                  className: "w-full bg-white rounded-2xl mt-2 p-2 text-primarydark text-sm px-4 py-3 h-28 max-h-28 focus:outline-none",
                  placeholder: "How does the company business model look like?"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 204,
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
                    lineNumber: 212,
                    columnNumber: 23
                  }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                    className: "text-primarydark ml-2",
                    children: "Product overview"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 213,
                    columnNumber: 23
                  }, _this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 211,
                  columnNumber: 21
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("textarea", {
                  value: productOverview,
                  id: "placeholderProduct".concat(index),
                  className: "w-full bg-white rounded-2xl mt-2 p-2 text-primarydark text-sm px-4 py-3 h-28 max-h-28 focus:outline-none",
                  placeholder: "What is the full range of products and services the company offers?"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 215,
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
                    lineNumber: 223,
                    columnNumber: 23
                  }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                    className: "text-primarydark ml-2",
                    children: "Promotion strategy"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 224,
                    columnNumber: 23
                  }, _this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 222,
                  columnNumber: 21
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("textarea", {
                  value: promotionStrategy,
                  id: "placeholderPromotion".concat(index),
                  className: "w-full bg-white rounded-2xl mt-2 p-2 text-primarydark text-sm px-4 py-3 h-28 max-h-28 focus:outline-none",
                  placeholder: "What are the company marketing and promotional strategies?"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 226,
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
                    lineNumber: 234,
                    columnNumber: 23
                  }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                    className: "text-primarydark ml-2",
                    children: "Company strengths"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 235,
                    columnNumber: 23
                  }, _this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 233,
                  columnNumber: 21
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("textarea", {
                  value: companyStrengths,
                  id: "placeholderStrengths".concat(index),
                  className: "w-full bg-white rounded-2xl mt-2 p-2 text-primarydark text-sm px-4 py-3 h-28 max-h-28 focus:outline-none",
                  placeholder: "What do your competitors do really well that differentiates them?"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 237,
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
                    lineNumber: 245,
                    columnNumber: 23
                  }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                    className: "text-primarydark ml-2",
                    children: "Company Weaknesses"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 246,
                    columnNumber: 23
                  }, _this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 244,
                  columnNumber: 21
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("textarea", {
                  value: companyWeaknesses,
                  id: "placeholderWeaknesses".concat(index),
                  className: "w-full bg-white rounded-2xl mt-2 p-2 text-primarydark text-sm px-4 py-3 h-28 max-h-28 focus:outline-none",
                  placeholder: "What do the company customers complain about the most, and what products do they lack?"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 248,
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
                    lineNumber: 256,
                    columnNumber: 23
                  }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                    className: "text-primarydark ml-2",
                    children: "Opportunities"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 257,
                    columnNumber: 23
                  }, _this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 255,
                  columnNumber: 21
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("textarea", {
                  value: opportunities,
                  id: "placeholderOpportunities".concat(index),
                  className: "w-full bg-white rounded-2xl mt-2 p-2 text-primarydark text-sm px-4 py-3 h-28 max-h-28 focus:outline-none",
                  placeholder: "What distinguish your startup from this particular competitive company?"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 259,
                  columnNumber: 21
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 188,
                columnNumber: 19
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 102,
              columnNumber: 17
            }, _this);
          })
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 99,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 94,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 7
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 67,
    columnNumber: 5
  }, _this);
};

_s(UniqueCompetitorsPage, "1QXSSnN4ZXio/TM63Ijpx5J/v2c=", false, function () {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvZGFzaGJvYXJkL3Byb2plY3RzL1twcm9qZWN0XS9jb21wZXRpdG9ycy8uanMiXSwibmFtZXMiOlsiVW5pcXVlQ29tcGV0aXRvcnNQYWdlIiwicHJvamVjdHMiLCJjb25zb2xlIiwibG9nIiwidXNlU3RhdGUiLCJzZWxlY3RlZFByb2plY3QiLCJzZXRTZWxlY3RlZFByb2plY3QiLCJjb21wZXRpdG9ycyIsInNldENvbXBldGl0b3JzIiwicm91dGVyIiwidXNlUm91dGVyIiwidXNlRWZmZWN0IiwidWlkIiwiQ29va2llcyIsImdldCIsImZpbHRlcmVkQXJyYXkiLCJmaWx0ZXIiLCJwcm9qZWN0IiwibGVuZ3RoIiwibG9hZGluZ0hlbHBlciIsInNldExvYWRpbmdIZWxwZXIiLCJ1c2VyVWlkIiwicXVlcnkiLCJkYXRhIiwiZGJDbGllbnQiLCJjb2xsZWN0aW9uIiwid2hlcmUiLCJ0aGVuIiwicXVlcnlTbmFwc2hvdCIsImZvckVhY2giLCJkb2MxIiwiZG9jIiwicHJvamVjdElkIiwib25TbmFwc2hvdCIsInNlcnZlclVwZGF0ZSIsImRvY3MiLCJtYXAiLCJjb21wZXRpdG9yc0FycmF5IiwiaXNGYWxsYmFjayIsImNvbXBldGl0b3IiLCJpbmRleCIsImhlaWdodCIsImlzTW9iaWxlIiwidG9wIiwib25TZWN0aW9uRHJvcGRvd24iLCJpbWFnZSIsImRpc3BsYXkiLCJ6SW5kZXgiLCJvbkZpbGVDaGFuZ2UiLCJ0aXRsZSIsImxvY2F0aW9uIiwiZW1wbG95ZWVzIiwicmV2ZW51ZSIsImNvbXBhbnlEZXNjcmlwdGlvbiIsImJ1c2luZXNzTW9kZWwiLCJwcm9kdWN0T3ZlcnZpZXciLCJwcm9tb3Rpb25TdHJhdGVneSIsImNvbXBhbnlTdHJlbmd0aHMiLCJjb21wYW55V2Vha25lc3NlcyIsIm9wcG9ydHVuaXRpZXMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEscUJBQXFCLEdBQUcsU0FBeEJBLHFCQUF3QixPQUFrQjtBQUFBOztBQUFBLE1BQWZDLFFBQWUsUUFBZkEsUUFBZTtBQUM5Q0MsU0FBTyxDQUFDQyxHQUFSLENBQVkseUJBQVosRUFBdUNGLFFBQXZDOztBQUQ4QyxrQkFFQUcsc0RBQVEsQ0FBQyxJQUFELENBRlI7QUFBQSxNQUV2Q0MsZUFGdUM7QUFBQSxNQUV0QkMsa0JBRnNCOztBQUFBLG1CQUdSRixzREFBUSxFQUhBO0FBQUEsTUFHdkNHLFdBSHVDO0FBQUEsTUFHMUJDLGNBSDBCOztBQUk5QyxNQUFNQyxNQUFNLEdBQUdDLDZEQUFTLEVBQXhCLENBSjhDLENBSzlDOztBQUNBQyx5REFBUyxDQUFDLFlBQU07QUFDZCxRQUFNQyxHQUFHLEdBQUdDLGdEQUFPLENBQUNDLEdBQVIsQ0FBWSxLQUFaLENBQVo7QUFDQSxRQUFNQyxhQUFhLEdBQUdkLFFBQVEsSUFBSUEsUUFBUSxDQUFDZSxNQUFULENBQWdCLFVBQUNDLE9BQUQ7QUFBQSxhQUFhQSxPQUFPLENBQUNMLEdBQVIsSUFBZUEsR0FBNUI7QUFBQSxLQUFoQixDQUFsQztBQUNBVixXQUFPLENBQUNDLEdBQVIsQ0FBWVksYUFBWjtBQUNBQSxpQkFBYSxJQUFJQSxhQUFhLENBQUNHLE1BQWQsSUFBd0IsQ0FBekMsSUFBOENaLGtCQUFrQixDQUFDUyxhQUFhLENBQUMsQ0FBRCxDQUFkLENBQWhFO0FBQ0QsR0FMUSxFQUtOLENBQUNkLFFBQUQsQ0FMTSxDQUFUO0FBTUFDLFNBQU8sQ0FBQ0MsR0FBUixDQUFZRSxlQUFaLEVBWjhDLENBYzlDOztBQWQ4QyxtQkFlSkQsc0RBQVEsQ0FBQyxLQUFELENBZko7QUFBQSxNQWV2Q2UsYUFmdUM7QUFBQSxNQWV4QkMsZ0JBZndCOztBQWdCOUNULHlEQUFTLENBQUMsWUFBTTtBQUNkLFFBQU1VLE9BQU8sR0FBR1IsZ0RBQU8sQ0FBQ0MsR0FBUixDQUFZLEtBQVosQ0FBaEI7O0FBQ0EsUUFBSU8sT0FBTyxJQUFJWixNQUFNLENBQUNhLEtBQVAsQ0FBYUwsT0FBNUIsRUFBcUM7QUFDbkMsVUFBTU0sSUFBSSxHQUFHQyxnREFBUSxDQUFDQyxVQUFULENBQW9CLFVBQXBCLEVBQWdDQyxLQUFoQyxDQUFzQyxLQUF0QyxFQUE2QyxJQUE3QyxFQUFtREwsT0FBbkQsQ0FBYjtBQUNBRSxVQUFJLENBQ0RHLEtBREgsQ0FDUyxhQURULEVBQ3dCLElBRHhCLEVBQzhCakIsTUFBTSxDQUFDYSxLQUFQLENBQWFMLE9BRDNDLEVBRUdILEdBRkgsR0FHR2EsSUFISCxDQUdRLFVBQUNDLGFBQUQsRUFBbUI7QUFDdkJBLHFCQUFhLENBQUNDLE9BQWQ7QUFBQSx5UkFBc0IsaUJBQU9DLElBQVA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNwQjtBQUVBTixvRUFBUSxDQUNMQyxVQURILENBQ2MsVUFEZCxFQUVHTSxHQUZILENBRU9ELElBQUksQ0FBQ1AsSUFBTCxHQUFZUyxTQUZuQixFQUdHUCxVQUhILENBR2MsYUFIZCxFQUlHTSxHQUpILENBSU90QixNQUFNLENBQUNhLEtBQVAsQ0FBYUwsT0FKcEIsRUFLR1EsVUFMSCxDQUtjLFFBTGQsRUFNR1EsVUFOSCxDQU1jLFVBQUNDLFlBQUQsRUFBa0I7QUFDNUJBLGtDQUFZLENBQUNDLElBQWIsQ0FBa0JDLEdBQWxCLENBQXNCLFVBQUNMLEdBQUQsRUFBUztBQUM3QjdCLCtCQUFPLENBQUNDLEdBQVIsQ0FBWTRCLEdBQUcsQ0FBQ1IsSUFBSixFQUFaO0FBQ0EsNEJBQU1BLElBQUksR0FBR1EsR0FBRyxDQUFDUixJQUFKLEVBQWIsQ0FGNkIsQ0FHN0I7O0FBQ0FmLHNDQUFjLENBQUNlLElBQUksQ0FBQ2MsZ0JBQU4sQ0FBZDtBQUNBakIsd0NBQWdCLENBQUMsS0FBRCxDQUFoQjtBQUNELHVCQU5EO0FBT0QscUJBZEg7O0FBSG9CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBQXRCOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBbUJELE9BdkJIO0FBd0JELEtBMUJELE1BMEJPO0FBQ0xsQixhQUFPLENBQUNDLEdBQVIsQ0FBWSxnQkFBWjtBQUNBaUIsc0JBQWdCLENBQUMsSUFBRCxDQUFoQjtBQUNEO0FBQ0YsR0FoQ1EsRUFnQ04sQ0FBQ0QsYUFBRCxFQUFnQlYsTUFBTSxDQUFDYSxLQUFQLENBQWFMLE9BQTdCLENBaENNLENBQVQ7QUFpQ0FmLFNBQU8sQ0FBQ0MsR0FBUixDQUFZSSxXQUFaOztBQUVBLE1BQUlFLE1BQU0sQ0FBQzZCLFVBQVgsRUFBdUI7QUFDckIsd0JBQ0U7QUFBQSw2QkFDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFERjtBQUtEOztBQUVELHNCQUNFO0FBQUssYUFBUyxFQUFDLDBFQUFmO0FBQUEsMkJBRUU7QUFBSyxlQUFTLEVBQUMsMktBQWY7QUFBQSw4QkFDRTtBQUFLLGlCQUFTLEVBQUMscURBQWY7QUFBQSwrQkFDRTtBQUFLLG1CQUFTLEVBQUMsbUJBQWY7QUFBQSxrQ0FDRTtBQUNFLGtCQUFNLEVBQUMsSUFEVDtBQUVFLGlCQUFLLEVBQUMsSUFGUjtBQUdFLHFCQUFTLEVBQUMsaURBSFo7QUFJRSxpQkFBSyxFQUFDLDRCQUpSO0FBS0UsbUJBQU8sRUFBQyxhQUxWO0FBQUEsb0NBT0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBUEYsZUFRRTtBQUFHLGdCQUFFLEVBQUMsaUJBQU47QUFBd0IsMkJBQVUsaUJBQWxDO0FBQUEscUNBQ0U7QUFDRSx5QkFBUyxFQUFDLE9BRFo7QUFFRSxpQkFBQyxFQUFDO0FBRko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBUkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURGLGVBZ0JFO0FBQUcscUJBQVMsRUFBQywrRUFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFoQkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURGLGVBc0JFO0FBQUEsK0JBQ0U7QUFBSSxtQkFBUyxFQUFDLHlEQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQXRCRixlQXlCRTtBQUFLLGlCQUFTLEVBQUMsdUNBQWY7QUFBQSxnQ0FDRTtBQUFLLG1CQUFTLEVBQUMsbUNBQWY7QUFBQSxrQ0FDRTtBQUFHLHFCQUFTLEVBQUMsK0NBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREYsZUFFRTtBQUFLLHFCQUFTLEVBQUMsZ0JBQWY7QUFBZ0MsZUFBRyxFQUFDLHVCQUFwQztBQUE0RCxrQkFBTSxFQUFFLEVBQXBFO0FBQXdFLGlCQUFLLEVBQUU7QUFBL0U7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREYsZUFLRTtBQUFLLG1CQUFTLEVBQUMsNERBQWY7QUFBQSxvQkFDRy9CLFdBQVcsSUFDVkEsV0FBVyxDQUFDNkIsR0FBWixDQUFnQixVQUFDRyxVQUFELEVBQWFDLEtBQWI7QUFBQSxnQ0FDZDtBQUNFLG1CQUFLLEVBQUU7QUFBRUMsc0JBQU0sRUFBRTtBQUFWLGVBRFQ7QUFFRSxnQkFBRSxxQkFBY0QsS0FBZCxDQUZKO0FBR0UsdUJBQVMsRUFBQyx1R0FIWjtBQUFBLHNDQUtFO0FBQ0UscUJBQUssRUFBRTtBQUFFQyx3QkFBTSxZQUFLQyxRQUFRLEdBQUcsRUFBSCxHQUFRLENBQXJCLENBQVI7QUFBa0NDLHFCQUFHLFlBQUtELFFBQVEsR0FBRyxNQUFILEdBQVksTUFBekI7QUFBckMsaUJBRFQ7QUFFRSxrQkFBRSxtQkFBWUYsS0FBWixDQUZKO0FBR0UseUJBQVMsRUFBQywrQkFIWjtBQUFBLHdDQUtFO0FBQ0UsMkJBQVMsRUFBQyxnQkFEWixDQUVFO0FBRkY7QUFHRSx5QkFBTyxFQUFFSSxpQkFIWDtBQUlFLG9CQUFFLG9CQUFhSixLQUFiLENBSko7QUFLRSxxQkFBRyxFQUFDLDJCQUxOO0FBTUUsd0JBQU0sRUFBRSxFQU5WO0FBT0UsdUJBQUssRUFBRTtBQVBUO0FBQUE7QUFBQTtBQUFBO0FBQUEseUJBTEYsZUFjRTtBQUFLLDJCQUFTLEVBQUM7QUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBLHlCQWRGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFMRixlQThCRTtBQUNFLGtCQUFFLEVBQUVBLEtBRE47QUFFRSx5QkFBUyxFQUFDLCtHQUZaO0FBQUEsd0NBSUU7QUFBSywyQkFBUyxFQUFDLG1HQUFmO0FBQUEsNkJBQ0dLLEtBQUssS0FBSyxFQUFWLGdCQUNDO0FBQ0UsMkJBQU8sd0JBQWlCTCxLQUFqQixDQURUO0FBRUUsNkJBQVMsRUFBQywwRkFGWjtBQUFBLDJDQUlFO0FBQUsseUJBQUcsRUFBRUssS0FBVjtBQUFpQiw0QkFBTSxFQUFFLEVBQXpCO0FBQTZCLDJCQUFLLEVBQUU7QUFBcEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUpGO0FBQUE7QUFBQTtBQUFBO0FBQUEsMkJBREQsZ0JBUUM7QUFBQSwyQ0FDRTtBQUNFLDZCQUFPLHdCQUFpQkwsS0FBakIsQ0FEVDtBQUVFLCtCQUFTLEVBQUMsbUZBRlo7QUFBQSw2Q0FJRTtBQUFLLDJCQUFHLEVBQUMsOEJBQVQ7QUFBd0MsOEJBQU0sRUFBRSxFQUFoRDtBQUFvRCw2QkFBSyxFQUFFO0FBQTNEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFKRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSwyQkFUSixlQWtCRTtBQUFPLHdCQUFJLEVBQUMsTUFBWjtBQUFtQixzQkFBRSx3QkFBaUJBLEtBQWpCLENBQXJCO0FBQStDLHlCQUFLLEVBQUU7QUFBRU0sNkJBQU8sRUFBRSxNQUFYO0FBQW1CQyw0QkFBTSxFQUFFO0FBQTNCLHFCQUF0RDtBQUF1Riw0QkFBUSxFQUFFQztBQUFqRztBQUFBO0FBQUE7QUFBQTtBQUFBLDJCQWxCRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEseUJBSkYsZUF3QkU7QUFBSywyQkFBUyxFQUFDLDZLQUFmO0FBQUEsMENBQ0U7QUFBQSwyQ0FDRTtBQUNFLDJCQUFLLEVBQUVDLEtBRFQ7QUFFRSwrQkFBUyxFQUFDLG1GQUZaO0FBR0UsaUNBQVcsRUFBQztBQUhkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLDJCQURGLGVBUUU7QUFBQSwyQ0FDRTtBQUNFLDJCQUFLLEVBQUVDLFFBRFQ7QUFFRSwrQkFBUyxFQUFDLG1GQUZaO0FBR0UsaUNBQVcsRUFBQztBQUhkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLDJCQVJGLGVBZUU7QUFBQSwyQ0FDRTtBQUNFLDJCQUFLLEVBQUVDLFNBRFQ7QUFFRSwrQkFBUyxFQUFDLG1GQUZaO0FBR0UsaUNBQVcsRUFBQztBQUhkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLDJCQWZGLGVBc0JFO0FBQUEsMkNBQ0U7QUFDRSwyQkFBSyxFQUFFQyxPQURUO0FBRUUsK0JBQVMsRUFBQyxtRkFGWjtBQUdFLGlDQUFXLEVBQUM7QUFIZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSwyQkF0QkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHlCQXhCRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBOUJGLGVBc0ZFO0FBQUssa0JBQUUsZ0JBQVNaLEtBQVQsQ0FBUDtBQUF5Qix5QkFBUyxFQUFDLHNCQUFuQztBQUFBLHdDQUNFO0FBQUssb0JBQUUsNEJBQXFCQSxLQUFyQixDQUFQO0FBQXFDLDJCQUFTLEVBQUMsaUNBQS9DO0FBQUEsMENBQ0U7QUFBSyx1QkFBRyxFQUFDLDhCQUFUO0FBQXdDLDBCQUFNLEVBQUUsRUFBaEQ7QUFBb0QseUJBQUssRUFBRTtBQUEzRDtBQUFBO0FBQUE7QUFBQTtBQUFBLDJCQURGLGVBRUU7QUFBRyw2QkFBUyxFQUFDLHVCQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDJCQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx5QkFERixlQUtFO0FBQ0UsdUJBQUssRUFBRWEsa0JBRFQ7QUFFRSxvQkFBRSw0QkFBcUJiLEtBQXJCLENBRko7QUFHRSwyQkFBUyxFQUFDLDBHQUhaO0FBSUUsNkJBQVcsRUFBQztBQUpkO0FBQUE7QUFBQTtBQUFBO0FBQUEseUJBTEYsZUFZRTtBQUFLLG9CQUFFLDRCQUFxQkEsS0FBckIsQ0FBUDtBQUFxQywyQkFBUyxFQUFDLHNDQUEvQztBQUFBLDBDQUNFO0FBQUssdUJBQUcsRUFBQyx3QkFBVDtBQUFrQywwQkFBTSxFQUFFLEVBQTFDO0FBQThDLHlCQUFLLEVBQUU7QUFBckQ7QUFBQTtBQUFBO0FBQUE7QUFBQSwyQkFERixlQUVFO0FBQUcsNkJBQVMsRUFBQyx1QkFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSwyQkFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEseUJBWkYsZUFnQkU7QUFDRSx1QkFBSyxFQUFFYyxhQURUO0FBRUUsb0JBQUUsNEJBQXFCZCxLQUFyQixDQUZKO0FBR0UsMkJBQVMsRUFBQywwR0FIWjtBQUlFLDZCQUFXLEVBQUM7QUFKZDtBQUFBO0FBQUE7QUFBQTtBQUFBLHlCQWhCRixlQXVCRTtBQUFLLG9CQUFFLDhCQUF1QkEsS0FBdkIsQ0FBUDtBQUF1QywyQkFBUyxFQUFDLHNDQUFqRDtBQUFBLDBDQUNFO0FBQUssdUJBQUcsRUFBQywyQkFBVDtBQUFxQywwQkFBTSxFQUFFLEVBQTdDO0FBQWlELHlCQUFLLEVBQUU7QUFBeEQ7QUFBQTtBQUFBO0FBQUE7QUFBQSwyQkFERixlQUVFO0FBQUcsNkJBQVMsRUFBQyx1QkFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSwyQkFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEseUJBdkJGLGVBMkJFO0FBQ0UsdUJBQUssRUFBRWUsZUFEVDtBQUVFLG9CQUFFLDhCQUF1QmYsS0FBdkIsQ0FGSjtBQUdFLDJCQUFTLEVBQUMsMEdBSFo7QUFJRSw2QkFBVyxFQUFDO0FBSmQ7QUFBQTtBQUFBO0FBQUE7QUFBQSx5QkEzQkYsZUFrQ0U7QUFBSyxvQkFBRSxnQ0FBeUJBLEtBQXpCLENBQVA7QUFBeUMsMkJBQVMsRUFBQyxzQ0FBbkQ7QUFBQSwwQ0FDRTtBQUFLLHVCQUFHLEVBQUMsNEJBQVQ7QUFBc0MsMEJBQU0sRUFBRSxFQUE5QztBQUFrRCx5QkFBSyxFQUFFO0FBQXpEO0FBQUE7QUFBQTtBQUFBO0FBQUEsMkJBREYsZUFFRTtBQUFHLDZCQUFTLEVBQUMsdUJBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsMkJBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHlCQWxDRixlQXNDRTtBQUNFLHVCQUFLLEVBQUVnQixpQkFEVDtBQUVFLG9CQUFFLGdDQUF5QmhCLEtBQXpCLENBRko7QUFHRSwyQkFBUyxFQUFDLDBHQUhaO0FBSUUsNkJBQVcsRUFBQztBQUpkO0FBQUE7QUFBQTtBQUFBO0FBQUEseUJBdENGLGVBNkNFO0FBQUssb0JBQUUsZ0NBQXlCQSxLQUF6QixDQUFQO0FBQXlDLDJCQUFTLEVBQUMsc0NBQW5EO0FBQUEsMENBQ0U7QUFBSyx1QkFBRyxFQUFDLDRCQUFUO0FBQXNDLDBCQUFNLEVBQUUsRUFBOUM7QUFBa0QseUJBQUssRUFBRTtBQUF6RDtBQUFBO0FBQUE7QUFBQTtBQUFBLDJCQURGLGVBRUU7QUFBRyw2QkFBUyxFQUFDLHVCQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDJCQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx5QkE3Q0YsZUFpREU7QUFDRSx1QkFBSyxFQUFFaUIsZ0JBRFQ7QUFFRSxvQkFBRSxnQ0FBeUJqQixLQUF6QixDQUZKO0FBR0UsMkJBQVMsRUFBQywwR0FIWjtBQUlFLDZCQUFXLEVBQUM7QUFKZDtBQUFBO0FBQUE7QUFBQTtBQUFBLHlCQWpERixlQXdERTtBQUFLLG9CQUFFLGlDQUEwQkEsS0FBMUIsQ0FBUDtBQUEwQywyQkFBUyxFQUFDLHNDQUFwRDtBQUFBLDBDQUNFO0FBQUssdUJBQUcsRUFBQyw2QkFBVDtBQUF1QywwQkFBTSxFQUFFLEVBQS9DO0FBQW1ELHlCQUFLLEVBQUU7QUFBMUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSwyQkFERixlQUVFO0FBQUcsNkJBQVMsRUFBQyx1QkFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSwyQkFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEseUJBeERGLGVBNERFO0FBQ0UsdUJBQUssRUFBRWtCLGlCQURUO0FBRUUsb0JBQUUsaUNBQTBCbEIsS0FBMUIsQ0FGSjtBQUdFLDJCQUFTLEVBQUMsMEdBSFo7QUFJRSw2QkFBVyxFQUFDO0FBSmQ7QUFBQTtBQUFBO0FBQUE7QUFBQSx5QkE1REYsZUFtRUU7QUFBSyxvQkFBRSxvQ0FBNkJBLEtBQTdCLENBQVA7QUFBNkMsMkJBQVMsRUFBQyxzQ0FBdkQ7QUFBQSwwQ0FDRTtBQUFLLHVCQUFHLEVBQUMsaUNBQVQ7QUFBMkMsMEJBQU0sRUFBRSxFQUFuRDtBQUF1RCx5QkFBSyxFQUFFO0FBQTlEO0FBQUE7QUFBQTtBQUFBO0FBQUEsMkJBREYsZUFFRTtBQUFHLDZCQUFTLEVBQUMsdUJBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsMkJBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHlCQW5FRixlQXVFRTtBQUNFLHVCQUFLLEVBQUVtQixhQURUO0FBRUUsb0JBQUUsb0NBQTZCbkIsS0FBN0IsQ0FGSjtBQUdFLDJCQUFTLEVBQUMsMEdBSFo7QUFJRSw2QkFBVyxFQUFDO0FBSmQ7QUFBQTtBQUFBO0FBQUE7QUFBQSx5QkF2RUY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQXRGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBRGM7QUFBQSxXQUFoQjtBQUZKO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBTEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBekJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQWdORCxDQTNRRDs7R0FBTXhDLHFCO1VBSVdVLHFEOzs7S0FKWFYscUI7O0FBa1RTQSxvRkFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9kYXNoYm9hcmQvcHJvamVjdHMvW3Byb2plY3RdL2NvbXBldGl0b3JzL1tpZF0uMjkzODFmZjc4NDI2M2EwMzVjNTguaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlLCB1c2VSZWYgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IGRiIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vbGliL2ZpcmViYXNlLWFkbWluJztcclxuaW1wb3J0IHsgZGIgYXMgZGJDbGllbnQgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9saWIvZmlyZWJhc2UnO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XHJcbmltcG9ydCBDb29raWVzIGZyb20gJ2pzLWNvb2tpZSc7XHJcblxyXG5jb25zdCBVbmlxdWVDb21wZXRpdG9yc1BhZ2UgPSAoeyBwcm9qZWN0cyB9KSA9PiB7XHJcbiAgY29uc29sZS5sb2coJ1BhcnRpY3VsYXIgcHJvamVjdCAtLT4gJywgcHJvamVjdHMpO1xyXG4gIGNvbnN0IFtzZWxlY3RlZFByb2plY3QsIHNldFNlbGVjdGVkUHJvamVjdF0gPSB1c2VTdGF0ZShudWxsKTtcclxuICBjb25zdCBbY29tcGV0aXRvcnMsIHNldENvbXBldGl0b3JzXSA9IHVzZVN0YXRlKCk7XHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcbiAgLy8gICBTZWxlY3RlZCBwcm9qZWN0XHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnN0IHVpZCA9IENvb2tpZXMuZ2V0KCd1aWQnKTtcclxuICAgIGNvbnN0IGZpbHRlcmVkQXJyYXkgPSBwcm9qZWN0cyAmJiBwcm9qZWN0cy5maWx0ZXIoKHByb2plY3QpID0+IHByb2plY3QudWlkID09IHVpZCk7XHJcbiAgICBjb25zb2xlLmxvZyhmaWx0ZXJlZEFycmF5KTtcclxuICAgIGZpbHRlcmVkQXJyYXkgJiYgZmlsdGVyZWRBcnJheS5sZW5ndGggPT0gMSAmJiBzZXRTZWxlY3RlZFByb2plY3QoZmlsdGVyZWRBcnJheVswXSk7XHJcbiAgfSwgW3Byb2plY3RzXSk7XHJcbiAgY29uc29sZS5sb2coc2VsZWN0ZWRQcm9qZWN0KTtcclxuXHJcbiAgLy8gQ29tcGV0aXRvcnNcclxuICBjb25zdCBbbG9hZGluZ0hlbHBlciwgc2V0TG9hZGluZ0hlbHBlcl0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnN0IHVzZXJVaWQgPSBDb29raWVzLmdldCgndWlkJyk7XHJcbiAgICBpZiAodXNlclVpZCAmJiByb3V0ZXIucXVlcnkucHJvamVjdCkge1xyXG4gICAgICBjb25zdCBkYXRhID0gZGJDbGllbnQuY29sbGVjdGlvbigncHJvamVjdHMnKS53aGVyZSgndWlkJywgJz09JywgdXNlclVpZCk7XHJcbiAgICAgIGRhdGFcclxuICAgICAgICAud2hlcmUoJ3Byb2plY3ROYW1lJywgJz09Jywgcm91dGVyLnF1ZXJ5LnByb2plY3QpXHJcbiAgICAgICAgLmdldCgpXHJcbiAgICAgICAgLnRoZW4oKHF1ZXJ5U25hcHNob3QpID0+IHtcclxuICAgICAgICAgIHF1ZXJ5U25hcHNob3QuZm9yRWFjaChhc3luYyAoZG9jMSkgPT4ge1xyXG4gICAgICAgICAgICAvLyAgIHNldFByb2plY3RJZChkb2MxLmRhdGEoKS5wcm9qZWN0SWQpO1xyXG5cclxuICAgICAgICAgICAgZGJDbGllbnRcclxuICAgICAgICAgICAgICAuY29sbGVjdGlvbigncHJvamVjdHMnKVxyXG4gICAgICAgICAgICAgIC5kb2MoZG9jMS5kYXRhKCkucHJvamVjdElkKVxyXG4gICAgICAgICAgICAgIC5jb2xsZWN0aW9uKCdjb21wZXRpdG9ycycpXHJcbiAgICAgICAgICAgICAgLmRvYyhyb3V0ZXIucXVlcnkucHJvamVjdClcclxuICAgICAgICAgICAgICAuY29sbGVjdGlvbignaW5wdXRzJylcclxuICAgICAgICAgICAgICAub25TbmFwc2hvdCgoc2VydmVyVXBkYXRlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBzZXJ2ZXJVcGRhdGUuZG9jcy5tYXAoKGRvYykgPT4ge1xyXG4gICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhkb2MuZGF0YSgpKTtcclxuICAgICAgICAgICAgICAgICAgY29uc3QgZGF0YSA9IGRvYy5kYXRhKCk7XHJcbiAgICAgICAgICAgICAgICAgIC8vICAgc2V0RG9jdW1lbnRJZChkb2MuaWQpO1xyXG4gICAgICAgICAgICAgICAgICBzZXRDb21wZXRpdG9ycyhkYXRhLmNvbXBldGl0b3JzQXJyYXkpO1xyXG4gICAgICAgICAgICAgICAgICBzZXRMb2FkaW5nSGVscGVyKGZhbHNlKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBjb25zb2xlLmxvZygnTG9hZGluZyBmYWlsZWQnKTtcclxuICAgICAgc2V0TG9hZGluZ0hlbHBlcih0cnVlKTtcclxuICAgIH1cclxuICB9LCBbbG9hZGluZ0hlbHBlciwgcm91dGVyLnF1ZXJ5LnByb2plY3RdKTtcclxuICBjb25zb2xlLmxvZyhjb21wZXRpdG9ycyk7XHJcblxyXG4gIGlmIChyb3V0ZXIuaXNGYWxsYmFjaykge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdj5cclxuICAgICAgICA8cD5Mb2FkaW5nLi4uPC9wPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICk7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJtaW4taC1zY3JlZW4gdy1mdWxsIHJlbGF0aXZlIGZsZXggZmxleC1jb2wgaXRlbXMtY2VudGVyIHRleHQtcHJpbWFyeWRhcmtcIj5cclxuICAgICAgey8qIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsIHhsQ29udGFpbmVyOm1heC13LXhsQ29udGFpbmVyQnJlYWsgeHhsQ29udGFpbmVyOm1heC13LXh4bENvbnRhaW5lckJyZWFrIHJlbGF0aXZlIG10LTE2XCI+ICovfVxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbCBtYXgtdy1mdWxsIHJlbGF0aXZlIG10LTggbWRDb250YWluZXI6bXQtMTYgbWItMTYgcHgtOCBtZENvbnRhaW5lcjpweC0xNiBsZ0NvbnRhaW5lcjpweC0zMiBiaWdDb250YWluZXI6cHgtNDggYmlnMkNvbnRhaW5lcjpweC02NCBiaWczQ29udGFpbmVyOnB4LTgwIFFIRDptYXgtdy1RSERcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlbGF0aXZlIGdyaWQgZ3JpZC1jb2xzLTIgZ3JpZC1yb3dzLTEgZ3JpZC1mbG93LWNvbFwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlclwiPlxyXG4gICAgICAgICAgICA8c3ZnXHJcbiAgICAgICAgICAgICAgaGVpZ2h0PVwiMzBcIlxyXG4gICAgICAgICAgICAgIHdpZHRoPVwiMzBcIlxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZpbGwtY3VycmVudCB0ZXh0LXByaW1hcnkgZGFyazp0ZXh0LXByaW1hcnlkYXJrXCJcclxuICAgICAgICAgICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcclxuICAgICAgICAgICAgICB2aWV3Qm94PVwiMCAwIDEyOCAxMjhcIlxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgPHRpdGxlPkxhbmRpbmcgU3VjY2VzczwvdGl0bGU+XHJcbiAgICAgICAgICAgICAgPGcgaWQ9XCJMYW5kaW5nX1N1Y2Nlc3NcIiBkYXRhLW5hbWU9XCJMYW5kaW5nIFN1Y2Nlc3NcIj5cclxuICAgICAgICAgICAgICAgIDxwYXRoXHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImNscy0xXCJcclxuICAgICAgICAgICAgICAgICAgZD1cIk0xMDkuMyw5MC4xQTQ2LDQ2LDAsMCwwLDY1LDM2VjIwLjA4YzEuNzgtLjYyLDcuMjEtMi4xNCwxMi41Ny4yM2ExOS4zMywxOS4zMywwLDAsMCwxNC44MiwwYy44Ny0uMzguNjEuMzEuNjEtMTcuOTNhMSwxLDAsMCwwLTEuNDMtLjkzYy0uMDcsMC02LjY5LDIuODctMTMuMTgsMEExOS40MSwxOS40MSwwLDAsMCw2NSwuOTMsMSwxLDAsMCwwLDYzLDFWMzZhNDUuODYsNDUuODYsMCwwLDAtMjguNjYsMTAuOEMxNi4xOCw0MC40OCw0LDQwLC43OSw0NS41MS0yLjI5LDUwLjg2LDMuOTQsNTkuMywxMCw2NS42OEExMSwxMSwwLDAsMCwxOCw4M2MuODEsMzguNDEsNDYuMDgsNTkuMiw3NS42NiwzNC4yMSw4LjUzLDMsMjksOS4xNSwzMy41NSwxLjMxQzEzMC4zOSwxMTMsMTIzLjg2LDEwMi42NSwxMDkuMyw5MC4xWk03Ny41OSwzLjMxQTE5LjM5LDE5LjM5LDAsMCwwLDkxLDMuODNWMTguNjhjLTEuNzkuNjItNy4yMiwyLjEzLTEyLjU3LS4yM0ExOS4xOSwxOS4xOSwwLDAsMCw2NSwxNy45M1YzLjA4QzY2LjgxLDIuNDYsNzIuMjQsMSw3Ny41OSwzLjMxWk02NSw0NXYtN2MzOS42OS45MSw1OCw1MC4yNywyOC4yMSw3Ni44MUM3MS4zMiwxMDcsNDYsOTIuNjYsMjcuNzcsNzguNjRhMTEsMTEsMCwwLDAtMy4yLTE2LjEzQTQzLjg4LDQzLjg4LDAsMCwxLDYzLDM4LjA2VjQ1QTEsMSwwLDAsMCw2NSw0NVpNMzIuNTUsNDguMzZhNDYuMjEsNDYuMjEsMCwwLDAtOS44MywxMy4yOCwxMC45MywxMC45MywwLDAsMC0xMS40LDIuNDdDLTguMzksNDMuMjMsNS4yMywzOS4wOCwzMi41NSw0OC4zNlpNMTAsNzJhOSw5LDAsMSwxLDksOUE5LDksMCwwLDEsMTAsNzJabTEwLDExYTExLDExLDAsMCwwLDYuMzQtMi44MmMxOC40NSwxNC4yMSw0My40NSwyOC4zNSw2NS4wNSwzNi4yMkM2MywxMzkuMTYsMjAuODMsMTE5LjEsMjAuMDUsODNabTEwNS40LDM0LjVjLTIuNTEsNC4zNS0xNCwzLjYyLTMwLTEuODVhNDUuNjEsNDUuNjEsMCwwLDAsMTMuNDItMjMuMjFDMTIxLjU5LDEwMy41OCwxMjgsMTEzLjEyLDEyNS40NSwxMTcuNDdaXCJcclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPC9nPlxyXG4gICAgICAgICAgICA8L3N2Zz5cclxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1wcmltYXJ5ZGFyayB0ZXh0LXhsIHNzbUNvbnRhaW5lcjp0ZXh0LTJ4bCBtdC0yIHBsLTIgZGFyazp0ZXh0LWJhY2tncm91bmRcIj5Db21wZXRpdG9ycyBhbmFseXNpczwvcD5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgey8qIHtzaXplLndpZHRoID4gNjgwICYmIDxDb21wZXRpdG9yc1BERiAvPn0gKi99XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJ0ZXh0LXNlY29uZGFyeSB0ZXh0LWJhc2Ugc3NtQ29udGFpbmVyOnRleHQtbWQgdGV4dC1ncmF5XCI+TWFuYWdlIHlvdXIgc3RhcnR1cCBjb21wZXRpdG9yczwvaDE+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGwgYmctd2hpdGUgcm91bmRlZC0yeGwgbXQtMTIgcC04XCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1iZXR3ZWVuIGl0ZW1zLWNlbnRlclwiPlxyXG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXByaW1hcnlkYXJrIHRleHQtbWQgc3NtQ29udGFpbmVyOnRleHQtbGdcIj5Db21wZXRpdG9yczwvcD5cclxuICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJjdXJzb3ItcG9pbnRlclwiIHNyYz1cIi9jb21wZXRpdG9ycy9hZGQxLnN2Z1wiIGhlaWdodD17MzJ9IHdpZHRoPXszMn0gLz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkIGdyaWQtY29scy0xZnJyIG5vcm1hbENvbnRhaW5lcjpncmlkLWNvbHMtMmZyIGdhcC14LTEyXCI+XHJcbiAgICAgICAgICAgIHtjb21wZXRpdG9ycyAmJlxyXG4gICAgICAgICAgICAgIGNvbXBldGl0b3JzLm1hcCgoY29tcGV0aXRvciwgaW5kZXgpID0+IChcclxuICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgaGVpZ2h0OiAnZml0LWNvbnRlbnQnIH19XHJcbiAgICAgICAgICAgICAgICAgIGlkPXtgY29udGFpbmVyJHtpbmRleH1gfVxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LWZ1bGwgYmctYmFja2dyb3VuZCByb3VuZGVkLTJ4bCBwLTQgc3NtQ29udGFpbmVyOnAtNiBzaGFkb3ctbWQgb3ZlcmZsb3ctaGlkZGVuIG10LTggc21Db250YWluZXI6bXQtOFwiXHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyBoZWlnaHQ6IGAke2lzTW9iaWxlID8gNDAgOiAwfWAsIHRvcDogYCR7aXNNb2JpbGUgPyAnLTZweCcgOiAnLTZweCd9YCB9fVxyXG4gICAgICAgICAgICAgICAgICAgIGlkPXtgbWFuYWdlciR7aW5kZXh9YH1cclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktYmV0d2VlbiByZWxhdGl2ZVwiXHJcbiAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJjdXJzb3ItcG9pbnRlclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAvLyAgIHN0eWxlPXt7IHRyYW5zZm9ybTogJ3JvdGF0ZSgtOTBkZWcpJyB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17b25TZWN0aW9uRHJvcGRvd259XHJcbiAgICAgICAgICAgICAgICAgICAgICBpZD17YGRyb3Bkb3duJHtpbmRleH1gfVxyXG4gICAgICAgICAgICAgICAgICAgICAgc3JjPVwiL2NvbXBldGl0b3JzL2Ryb3Bkb3duLnN2Z1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9ezE4fVxyXG4gICAgICAgICAgICAgICAgICAgICAgd2lkdGg9ezE4fVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICB7LyogPGltZyBjbGFzc05hbWU9XCJjdXJzb3ItcG9pbnRlciBtci0yXCIgc3JjPVwiL2NvbXBldGl0b3JzL2RyYWcuc3ZnXCIgaGVpZ2h0PXsxOH0gd2lkdGg9ezE4fSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJjdXJzb3ItcG9pbnRlclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IG9uQ29tcGV0aXRvclJlbW92ZShkYXRhLmluZGV4KX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgc3JjPVwiL2NvbXBldGl0b3JzL3JlbW92ZS5zdmdcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9ezE4fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aD17MTh9XHJcbiAgICAgICAgICAgICAgICAgICAgICAvPiAqL31cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICBpZD17aW5kZXh9XHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZmxleCBnYXAtNiBmbGV4LWNvbCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXIgc21Db250YWluZXI6Z2FwLTAgc21Db250YWluZXI6Z3JpZCBzbUNvbnRhaW5lcjpncmlkLWNvbHMtMTJmclwiXHJcbiAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNtQ29udGFpbmVyOmNvbC1zdGFydC0xIHNtQ29udGFpbmVyOmNvbC1lbmQtNCBqdXN0aWZ5LXNlbGYtY2VudGVyIGZsZXgganVzdGlmeS1zdGFydCBpdGVtcy1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIHtpbWFnZSAhPT0gJycgPyAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGh0bWxGb3I9e2B1cGxvYWQtaW1hZ2Uke2luZGV4fWB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicmVsYXRpdmUgdy0yMCBoLTIwIGN1cnNvci1wb2ludGVyIHJvdW5kZWQtZnVsbCBiZy13aGl0ZSBmbGV4IGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17aW1hZ2V9IGhlaWdodD17NTV9IHdpZHRoPXs1NX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBodG1sRm9yPXtgdXBsb2FkLWltYWdlJHtpbmRleH1gfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy0yMCBoLTIwIGN1cnNvci1wb2ludGVyIHJvdW5kZWQtZnVsbCBiZy1wcmltYXJ5IGZsZXgganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIi9jb21wZXRpdG9ycy9lbXB0eS1pbWFnZS5zdmdcIiBoZWlnaHQ9ezY1fSB3aWR0aD17NjV9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJmaWxlXCIgaWQ9e2B1cGxvYWQtaW1hZ2Uke2luZGV4fWB9IHN0eWxlPXt7IGRpc3BsYXk6ICdub25lJywgekluZGV4OiAxMCB9fSBvbkNoYW5nZT17b25GaWxlQ2hhbmdlfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic21Db250YWluZXI6Y29sLXN0YXJ0LTUgc21Db250YWluZXI6Y29sLWVuZC0xMyBncmlkIGdyaWQtY29scy0yZnIgZ3JpZC1yb3dzLTJmciBqdXN0aWZ5LWl0ZW1zLWNlbnRlciBpdGVtcy1jZW50ZXIgZ2FwLXgtNCBzc21Db250YWluZXI6Z2FwLXgtOCBnYXAteS0yIHNzbUNvbnRhaW5lcjpnYXAteS00XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dGl0bGV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYmctd2hpdGUgcm91bmRlZC0yeGwgdy1mdWxsIHB4LTMgcHktMiB0ZXh0LXNtIHRleHQtcHJpbWFyeWRhcmsgZm9jdXM6b3V0bGluZS1ub25lXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIm5hbWVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17bG9jYXRpb259XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYmctd2hpdGUgcm91bmRlZC0yeGwgdy1mdWxsIHB4LTMgcHktMiB0ZXh0LXNtIHRleHQtcHJpbWFyeWRhcmsgZm9jdXM6b3V0bGluZS1ub25lXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cImxvY2F0aW9uXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2VtcGxveWVlc31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJiZy13aGl0ZSByb3VuZGVkLTJ4bCB3LWZ1bGwgcHgtMyBweS0yIHRleHQtc20gdGV4dC1wcmltYXJ5ZGFyayBmb2N1czpvdXRsaW5lLW5vbmVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiZW1wbG95ZWVzXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3JldmVudWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYmctd2hpdGUgcm91bmRlZC0yeGwgdy1mdWxsIHB4LTMgcHktMiB0ZXh0LXNtIHRleHQtcHJpbWFyeWRhcmsgZm9jdXM6b3V0bGluZS1ub25lXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cInJldmVudWVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICB7LyogQ29tcGFueSBkZXNjcmlwdGlvbiAqL31cclxuICAgICAgICAgICAgICAgICAgPGRpdiBpZD17YGRhdGEke2luZGV4fWB9IGNsYXNzTmFtZT1cInctZnVsbCBoLTAgaW52aXNpYmxlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBpZD17YGRlc2NyaXB0aW9uVGl0bGUke2luZGV4fWB9IGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1zdGFydCBpdGVtcy1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiL2NvbXBldGl0b3JzL2Rlc2NyaXB0aW9uLnN2Z1wiIGhlaWdodD17MjJ9IHdpZHRoPXsyMn0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtcHJpbWFyeWRhcmsgbWwtMlwiPkNvbXBhbnkgZGVzY3JpcHRpb248L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRleHRhcmVhXHJcbiAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17Y29tcGFueURlc2NyaXB0aW9ufVxyXG4gICAgICAgICAgICAgICAgICAgICAgaWQ9e2BwbGFjZWhvbGRlclRpdGxlJHtpbmRleH1gfVxyXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy1mdWxsIGJnLXdoaXRlIHJvdW5kZWQtMnhsIG10LTIgcC0yIHRleHQtcHJpbWFyeWRhcmsgdGV4dC1zbSBweC00IHB5LTMgaC0yOCBtYXgtaC0yOCBmb2N1czpvdXRsaW5lLW5vbmVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJEZXNjcmliZSB0aGUgbWFpbiBhc3N1bXB0aW9uIG9mIGFuYWx5emVkIGNvbXBhbnkuXCJcclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIHsvKiBUaXRsZSBlbmQgKi99XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBpZD17YGRlc2NyaXB0aW9uTW9kZWwke2luZGV4fWB9IGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1zdGFydCBpdGVtcy1jZW50ZXIgbXQtNlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCIvY29tcGV0aXRvcnMvbW9kZWwuc3ZnXCIgaGVpZ2h0PXsyMn0gd2lkdGg9ezIyfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1wcmltYXJ5ZGFyayBtbC0yXCI+QnVzaW5lc3MgbW9kZWw8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRleHRhcmVhXHJcbiAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17YnVzaW5lc3NNb2RlbH1cclxuICAgICAgICAgICAgICAgICAgICAgIGlkPXtgcGxhY2Vob2xkZXJNb2RlbCR7aW5kZXh9YH1cclxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInctZnVsbCBiZy13aGl0ZSByb3VuZGVkLTJ4bCBtdC0yIHAtMiB0ZXh0LXByaW1hcnlkYXJrIHRleHQtc20gcHgtNCBweS0zIGgtMjggbWF4LWgtMjggZm9jdXM6b3V0bGluZS1ub25lXCJcclxuICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiSG93IGRvZXMgdGhlIGNvbXBhbnkgYnVzaW5lc3MgbW9kZWwgbG9vayBsaWtlP1wiXHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICB7LyogTW9kZWwgZW5kICovfVxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgaWQ9e2BkZXNjcmlwdGlvblByb2R1Y3Qke2luZGV4fWB9IGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1zdGFydCBpdGVtcy1jZW50ZXIgbXQtNlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCIvY29tcGV0aXRvcnMvcHJvZHVjdDEuc3ZnXCIgaGVpZ2h0PXsyMn0gd2lkdGg9ezIyfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1wcmltYXJ5ZGFyayBtbC0yXCI+UHJvZHVjdCBvdmVydmlldzwvcD5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8dGV4dGFyZWFcclxuICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtwcm9kdWN0T3ZlcnZpZXd9XHJcbiAgICAgICAgICAgICAgICAgICAgICBpZD17YHBsYWNlaG9sZGVyUHJvZHVjdCR7aW5kZXh9YH1cclxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInctZnVsbCBiZy13aGl0ZSByb3VuZGVkLTJ4bCBtdC0yIHAtMiB0ZXh0LXByaW1hcnlkYXJrIHRleHQtc20gcHgtNCBweS0zIGgtMjggbWF4LWgtMjggZm9jdXM6b3V0bGluZS1ub25lXCJcclxuICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiV2hhdCBpcyB0aGUgZnVsbCByYW5nZSBvZiBwcm9kdWN0cyBhbmQgc2VydmljZXMgdGhlIGNvbXBhbnkgb2ZmZXJzP1wiXHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICB7LyogUHJvZHVjdCBlbmQgKi99XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBpZD17YGRlc2NyaXB0aW9uUHJvbW90aW9uJHtpbmRleH1gfSBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktc3RhcnQgaXRlbXMtY2VudGVyIG10LTZcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiL2NvbXBldGl0b3JzL3Byb21vdGlvbi5zdmdcIiBoZWlnaHQ9ezIyfSB3aWR0aD17MjJ9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXByaW1hcnlkYXJrIG1sLTJcIj5Qcm9tb3Rpb24gc3RyYXRlZ3k8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRleHRhcmVhXHJcbiAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17cHJvbW90aW9uU3RyYXRlZ3l9XHJcbiAgICAgICAgICAgICAgICAgICAgICBpZD17YHBsYWNlaG9sZGVyUHJvbW90aW9uJHtpbmRleH1gfVxyXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy1mdWxsIGJnLXdoaXRlIHJvdW5kZWQtMnhsIG10LTIgcC0yIHRleHQtcHJpbWFyeWRhcmsgdGV4dC1zbSBweC00IHB5LTMgaC0yOCBtYXgtaC0yOCBmb2N1czpvdXRsaW5lLW5vbmVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJXaGF0IGFyZSB0aGUgY29tcGFueSBtYXJrZXRpbmcgYW5kIHByb21vdGlvbmFsIHN0cmF0ZWdpZXM/XCJcclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIHsvKiBQcm9tb3Rpb24gZW5kICovfVxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgaWQ9e2BkZXNjcmlwdGlvblN0cmVuZ3RocyR7aW5kZXh9YH0gY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LXN0YXJ0IGl0ZW1zLWNlbnRlciBtdC02XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIi9jb21wZXRpdG9ycy9zdHJlbmd0aHMuc3ZnXCIgaGVpZ2h0PXsyMn0gd2lkdGg9ezIyfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1wcmltYXJ5ZGFyayBtbC0yXCI+Q29tcGFueSBzdHJlbmd0aHM8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRleHRhcmVhXHJcbiAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17Y29tcGFueVN0cmVuZ3Roc31cclxuICAgICAgICAgICAgICAgICAgICAgIGlkPXtgcGxhY2Vob2xkZXJTdHJlbmd0aHMke2luZGV4fWB9XHJcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LWZ1bGwgYmctd2hpdGUgcm91bmRlZC0yeGwgbXQtMiBwLTIgdGV4dC1wcmltYXJ5ZGFyayB0ZXh0LXNtIHB4LTQgcHktMyBoLTI4IG1heC1oLTI4IGZvY3VzOm91dGxpbmUtbm9uZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIldoYXQgZG8geW91ciBjb21wZXRpdG9ycyBkbyByZWFsbHkgd2VsbCB0aGF0IGRpZmZlcmVudGlhdGVzIHRoZW0/XCJcclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIHsvKiBTdHJlbmd0aHMgZW5kICovfVxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgaWQ9e2BkZXNjcmlwdGlvbldlYWtuZXNzZXMke2luZGV4fWB9IGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1zdGFydCBpdGVtcy1jZW50ZXIgbXQtNlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCIvY29tcGV0aXRvcnMvd2Vha25lc3Nlcy5zdmdcIiBoZWlnaHQ9ezIyfSB3aWR0aD17MjJ9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXByaW1hcnlkYXJrIG1sLTJcIj5Db21wYW55IFdlYWtuZXNzZXM8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRleHRhcmVhXHJcbiAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17Y29tcGFueVdlYWtuZXNzZXN9XHJcbiAgICAgICAgICAgICAgICAgICAgICBpZD17YHBsYWNlaG9sZGVyV2Vha25lc3NlcyR7aW5kZXh9YH1cclxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInctZnVsbCBiZy13aGl0ZSByb3VuZGVkLTJ4bCBtdC0yIHAtMiB0ZXh0LXByaW1hcnlkYXJrIHRleHQtc20gcHgtNCBweS0zIGgtMjggbWF4LWgtMjggZm9jdXM6b3V0bGluZS1ub25lXCJcclxuICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiV2hhdCBkbyB0aGUgY29tcGFueSBjdXN0b21lcnMgY29tcGxhaW4gYWJvdXQgdGhlIG1vc3QsIGFuZCB3aGF0IHByb2R1Y3RzIGRvIHRoZXkgbGFjaz9cIlxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgey8qIFdlYWtuZXNzZXMgZW5kICovfVxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgaWQ9e2BkZXNjcmlwdGlvbk9wcG9ydHVuaXRpZXMke2luZGV4fWB9IGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1zdGFydCBpdGVtcy1jZW50ZXIgbXQtNlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCIvY29tcGV0aXRvcnMvb3Bwb3J0dW5pdGllczIuc3ZnXCIgaGVpZ2h0PXsyMn0gd2lkdGg9ezIyfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1wcmltYXJ5ZGFyayBtbC0yXCI+T3Bwb3J0dW5pdGllczwvcD5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8dGV4dGFyZWFcclxuICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtvcHBvcnR1bml0aWVzfVxyXG4gICAgICAgICAgICAgICAgICAgICAgaWQ9e2BwbGFjZWhvbGRlck9wcG9ydHVuaXRpZXMke2luZGV4fWB9XHJcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LWZ1bGwgYmctd2hpdGUgcm91bmRlZC0yeGwgbXQtMiBwLTIgdGV4dC1wcmltYXJ5ZGFyayB0ZXh0LXNtIHB4LTQgcHktMyBoLTI4IG1heC1oLTI4IGZvY3VzOm91dGxpbmUtbm9uZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIldoYXQgZGlzdGluZ3Vpc2ggeW91ciBzdGFydHVwIGZyb20gdGhpcyBwYXJ0aWN1bGFyIGNvbXBldGl0aXZlIGNvbXBhbnk/XCJcclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIHsvKiBPcHBvcnR1bml0aWVzIGVuZCAqL31cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0U3RhdGljUGF0aHMgPSBhc3luYyAoKSA9PiB7XHJcbiAgY29uc3Qgc25hcHNob3QgPSBhd2FpdCBkYi5jb2xsZWN0aW9uKCdwcm9qZWN0cycpLmdldCgpO1xyXG5cclxuICBjb25zdCBwcm9qZWN0cyA9IFtdO1xyXG4gIHNuYXBzaG90LmZvckVhY2goKGRvYykgPT4ge1xyXG4gICAgcHJvamVjdHMucHVzaChkb2MuZGF0YSgpKTtcclxuICB9KTtcclxuXHJcbiAgY29uc3QgcGF0aHMgPSBwcm9qZWN0cy5tYXAoKHByb2plY3QpID0+ICh7XHJcbiAgICBwYXJhbXM6IHtcclxuICAgICAgcHJvamVjdDogcHJvamVjdC5wcm9qZWN0TmFtZS50b1N0cmluZygpLFxyXG4gICAgICBpZDogcHJvamVjdC5wcm9qZWN0SWQudG9TdHJpbmcoKSxcclxuICAgIH0sXHJcbiAgfSkpO1xyXG5cclxuICByZXR1cm4ge1xyXG4gICAgcGF0aHM6IHBhdGhzLFxyXG4gICAgZmFsbGJhY2s6IHRydWUsXHJcbiAgfTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBnZXRTdGF0aWNQcm9wcyA9IGFzeW5jICh7IHBhcmFtcyB9KSA9PiB7XHJcbiAgbGV0IHJlZiA9IGRiLmNvbGxlY3Rpb24oJ3Byb2plY3RzJykud2hlcmUoJ3Byb2plY3ROYW1lJywgJz09JywgcGFyYW1zLnByb2plY3QpO1xyXG5cclxuICBjb25zdCBzbmFwc2hvdCA9IGF3YWl0IHJlZi5nZXQoKTtcclxuICBjb25zdCBwcm9qZWN0cyA9IFtdO1xyXG5cclxuICBzbmFwc2hvdC5mb3JFYWNoKChkb2MpID0+IHtcclxuICAgIHByb2plY3RzLnB1c2goeyBpZDogZG9jLmlkLCAuLi5kb2MuZGF0YSgpIH0pO1xyXG4gIH0pO1xyXG5cclxuICByZXR1cm4ge1xyXG4gICAgcHJvcHM6IHsgcHJvamVjdHMgfSxcclxuICAgIHJldmFsaWRhdGU6IDEsXHJcbiAgfTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFVuaXF1ZUNvbXBldGl0b3JzUGFnZTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==