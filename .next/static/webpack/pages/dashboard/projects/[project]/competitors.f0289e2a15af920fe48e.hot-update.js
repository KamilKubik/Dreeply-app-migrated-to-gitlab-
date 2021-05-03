webpackHotUpdate_N_E("pages/dashboard/projects/[project]/competitors",{

/***/ "./components/dashboard/startup/project/business-app/competitors/CompetitorsPDF.js":
/*!*****************************************************************************************!*\
  !*** ./components/dashboard/startup/project/business-app/competitors/CompetitorsPDF.js ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var C_off_saas_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/regenerator */ "./node_modules/next/node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var C_off_saas_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(C_off_saas_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var C_off_saas_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! file-saver */ "./node_modules/file-saver/dist/FileSaver.min.js");
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(file_saver__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! js-cookie */ "./node_modules/js-cookie/src/js.cookie.js");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _lib_firebase__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../../lib/firebase */ "./lib/firebase.js");
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! gsap */ "./node_modules/gsap/index.js");
/* harmony import */ var _utils_useWindowSize__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../../utils/useWindowSize */ "./utils/useWindowSize.js");
/* harmony import */ var _react_pdf_renderer__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @react-pdf/renderer */ "./node_modules/@react-pdf/renderer/lib/react-pdf.browser.es.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_11__);




var _jsxFileName = "C:\\off-saas\\components\\dashboard\\startup\\project\\business-app\\competitors\\CompetitorsPDF.js",
    _this = undefined,
    _s = $RefreshSig$();





 // import font from '../../../../../../public/fonts/comfortaa.ttf';





 // Font.register({ src: '/fonts/poppins.ttf', family: 'Poppins', format: 'truetype' });

_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_10__["Font"].register({
  src: '/fonts/comfortaa.ttf',
  family: 'Comfortaa'
});
var styles = _react_pdf_renderer__WEBPACK_IMPORTED_MODULE_10__["StyleSheet"].create({
  homePage: {
    padding: 36,
    fontFamily: 'Comfortaa',
    backgroundColor: '#f8f9fb',
    color: '#0a1230'
  },
  mainTitle: {
    fontSize: 22,
    color: '#0a1230',
    textAlign: 'center',
    paddingBottom: 42
  }
});

var MyDocument = function MyDocument(_ref) {
  var competitors = _ref.competitors;
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_10__["Document"], {
    scale: 96 / 72,
    renderMode: "svg",
    children: competitors.map(function (competitor, index) {
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_10__["Page"], {
        size: "A4",
        style: styles.homePage,
        children: [index === 0 && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_10__["View"], {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_10__["Text"], {
            style: styles.mainTitle,
            children: "Competitors analysis"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 39,
            columnNumber: 15
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 38,
          columnNumber: 13
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_10__["View"], {
          style: {
            display: 'flex',
            flexDirection: 'row'
          },
          children: [competitor.image === '' ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_10__["View"], {
            style: {
              height: 72,
              width: 72,
              backgroundColor: '#6C63FF',
              borderRadius: 9999,
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center'
            },
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_10__["Image"], {
              src: "/competitors/empty-image-pdf.png",
              height: 64,
              width: 64
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 55,
              columnNumber: 17
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 44,
            columnNumber: 15
          }, _this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_10__["View"], {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 58,
            columnNumber: 15
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_10__["View"], {
            style: {
              fontSize: 12
            },
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_10__["View"], {
              style: {
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignContent: 'space-between',
                marginLeft: 32,
                width: '100%'
              },
              children: [competitor.title !== '' && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_10__["View"], {
                style: {
                  backgroundColor: '#fcfefe',
                  borderRadius: 16,
                  paddingVertical: 8,
                  paddingHorizontal: 16
                },
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_10__["Text"], {
                  children: ["name / ", competitor.title]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 74,
                  columnNumber: 21
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 73,
                columnNumber: 19
              }, _this), competitor.location !== '' && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_10__["View"], {
                style: {
                  backgroundColor: '#fcfefe',
                  borderRadius: 16,
                  paddingVertical: 8,
                  paddingHorizontal: 16
                },
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_10__["Text"], {
                  children: ["location / ", competitor.location]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 79,
                  columnNumber: 21
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 78,
                columnNumber: 19
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 62,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_10__["View"], {
              style: {
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignContent: 'space-between',
                marginLeft: 32,
                marginTop: 12,
                width: '100%'
              },
              children: [competitor.employees !== '' && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_10__["View"], {
                style: {
                  backgroundColor: '#fcfefe',
                  borderRadius: 16,
                  paddingVertical: 8,
                  paddingHorizontal: 16
                },
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_10__["Text"], {
                  children: ["employees / ", competitor.employees]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 96,
                  columnNumber: 21
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 95,
                columnNumber: 19
              }, _this), competitor.revenue !== '' && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_10__["View"], {
                style: {
                  backgroundColor: '#fcfefe',
                  borderRadius: 16,
                  paddingVertical: 8,
                  paddingHorizontal: 16
                },
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_10__["Text"], {
                  children: ["revenue / ", competitor.revenue]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 101,
                  columnNumber: 21
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 100,
                columnNumber: 19
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 83,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 61,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 42,
          columnNumber: 11
        }, _this), competitor.companyDescription !== '' && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_10__["View"], {
          wrap: false,
          style: {
            marginTop: 32
          },
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_10__["View"], {
            style: {
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'flex-end',
              fontSize: 14
            },
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_10__["Image"], {
              src: "/competitors/pdf/description.png",
              style: {
                height: 20,
                width: 20
              }
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 112,
              columnNumber: 17
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_10__["Text"], {
              style: {
                marginLeft: 8
              },
              children: "Company description"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 113,
              columnNumber: 17
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 111,
            columnNumber: 15
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_10__["View"], {
            style: {
              backgroundColor: '#fcfefe',
              borderRadius: 16,
              paddingVertical: 12,
              paddingHorizontal: 16,
              marginTop: 8,
              fontSize: 10
            },
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_10__["Text"], {
              children: competitor.companyDescription
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 125,
              columnNumber: 17
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 115,
            columnNumber: 15
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 110,
          columnNumber: 13
        }, _this), competitor.businessModel !== '' && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_10__["View"], {
          wrap: false,
          style: {
            marginTop: 32
          },
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_10__["View"], {
            style: {
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'flex-end',
              fontSize: 14
            },
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_10__["Image"], {
              src: "/competitors/pdf/model.png",
              style: {
                height: 20,
                width: 20
              }
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 132,
              columnNumber: 17
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_10__["Text"], {
              style: {
                marginLeft: 8
              },
              children: "Business model"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 133,
              columnNumber: 17
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 131,
            columnNumber: 15
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_10__["View"], {
            style: {
              backgroundColor: '#fcfefe',
              borderRadius: 16,
              paddingVertical: 12,
              paddingHorizontal: 16,
              marginTop: 8,
              fontSize: 10
            },
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_10__["Text"], {
              children: competitor.businessModel
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 145,
              columnNumber: 17
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 135,
            columnNumber: 15
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 130,
          columnNumber: 13
        }, _this), competitor.productOverview !== '' && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_10__["View"], {
          wrap: false,
          style: {
            marginTop: 32
          },
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_10__["View"], {
            style: {
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'flex-end',
              fontSize: 14
            },
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_10__["Image"], {
              src: "/competitors/pdf/product.png",
              style: {
                height: 20,
                width: 20
              }
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 152,
              columnNumber: 17
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_10__["Text"], {
              style: {
                marginLeft: 8
              },
              children: "Product overview"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 153,
              columnNumber: 17
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 151,
            columnNumber: 15
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_10__["View"], {
            style: {
              backgroundColor: '#fcfefe',
              borderRadius: 16,
              paddingVertical: 12,
              paddingHorizontal: 16,
              marginTop: 8,
              fontSize: 10
            },
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_10__["Text"], {
              children: competitor.productOverview
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 165,
              columnNumber: 17
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 155,
            columnNumber: 15
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 150,
          columnNumber: 13
        }, _this), competitor.promotionStrategy !== '' && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_10__["View"], {
          wrap: false,
          style: {
            marginTop: 32
          },
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_10__["View"], {
            style: {
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'flex-end',
              fontSize: 14
            },
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_10__["Image"], {
              src: "/competitors/pdf/promotion.png",
              style: {
                height: 20,
                width: 20
              }
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 172,
              columnNumber: 17
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_10__["Text"], {
              style: {
                marginLeft: 8
              },
              children: "Promotion strategy"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 173,
              columnNumber: 17
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 171,
            columnNumber: 15
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_10__["View"], {
            style: {
              backgroundColor: '#fcfefe',
              borderRadius: 16,
              paddingVertical: 12,
              paddingHorizontal: 16,
              marginTop: 8,
              fontSize: 10
            },
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_10__["Text"], {
              children: competitor.promotionStrategy
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 185,
              columnNumber: 17
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 175,
            columnNumber: 15
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 170,
          columnNumber: 13
        }, _this), competitor.companyStrengths !== '' && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_10__["View"], {
          wrap: false,
          style: {
            marginTop: 32
          },
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_10__["View"], {
            style: {
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'flex-end',
              fontSize: 14
            },
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_10__["Image"], {
              src: "/competitors/pdf/strengths.png",
              style: {
                height: 20,
                width: 20
              }
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 192,
              columnNumber: 17
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_10__["Text"], {
              style: {
                marginLeft: 8
              },
              children: "Company strengths"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 193,
              columnNumber: 17
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 191,
            columnNumber: 15
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_10__["View"], {
            style: {
              backgroundColor: '#fcfefe',
              borderRadius: 16,
              paddingVertical: 12,
              paddingHorizontal: 16,
              marginTop: 8,
              fontSize: 10
            },
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_10__["Text"], {
              children: competitor.companyStrengths
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 205,
              columnNumber: 17
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 195,
            columnNumber: 15
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 190,
          columnNumber: 13
        }, _this), competitor.companyWeaknesses !== '' && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_10__["View"], {
          wrap: false,
          style: {
            marginTop: 32
          },
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_10__["View"], {
            style: {
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'flex-end',
              fontSize: 14
            },
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_10__["Image"], {
              src: "/competitors/pdf/weaknesses.png",
              style: {
                height: 20,
                width: 20
              }
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 212,
              columnNumber: 17
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_10__["Text"], {
              style: {
                marginLeft: 8
              },
              children: "Company weaknesses"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 213,
              columnNumber: 17
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 211,
            columnNumber: 15
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_10__["View"], {
            style: {
              backgroundColor: '#fcfefe',
              borderRadius: 16,
              paddingVertical: 12,
              paddingHorizontal: 16,
              marginTop: 8,
              fontSize: 10
            },
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_10__["Text"], {
              children: competitor.companyWeaknesses
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 225,
              columnNumber: 17
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 215,
            columnNumber: 15
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 210,
          columnNumber: 13
        }, _this), competitor.opportunities !== '' && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_10__["View"], {
          wrap: false,
          style: {
            marginTop: 32
          },
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_10__["View"], {
            style: {
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'flex-end',
              fontSize: 14
            },
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_10__["Image"], {
              src: "/competitors/pdf/opportunities.png",
              style: {
                height: 20,
                width: 20
              }
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 232,
              columnNumber: 17
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_10__["Text"], {
              style: {
                marginLeft: 8
              },
              children: "Company opportunities"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 233,
              columnNumber: 17
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 231,
            columnNumber: 15
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_10__["View"], {
            style: {
              backgroundColor: '#fcfefe',
              borderRadius: 16,
              paddingVertical: 12,
              paddingHorizontal: 16,
              marginTop: 8,
              fontSize: 10
            },
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_10__["Text"], {
              children: competitor.opportunities
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 245,
              columnNumber: 17
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 235,
            columnNumber: 15
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 230,
          columnNumber: 13
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 36,
        columnNumber: 9
      }, _this);
    })
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 34,
    columnNumber: 5
  }, _this);
};

_c = MyDocument;

var CompetitorsPDF = function CompetitorsPDF() {
  _s();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(null),
      competitors = _useState[0],
      setCompetitors = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(''),
      projectId = _useState2[0],
      setProjectId = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(''),
      projectName = _useState3[0],
      setProjectName = _useState3[1];

  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_5__["useRouter"])();
  var size = Object(_utils_useWindowSize__WEBPACK_IMPORTED_MODULE_9__["useWindowSize"])();
  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])( /*#__PURE__*/Object(C_off_saas_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/C_off_saas_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {
    var userUid, data;
    return C_off_saas_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return js_cookie__WEBPACK_IMPORTED_MODULE_6___default.a.get('uid');

          case 2:
            userUid = _context2.sent;
            // console.log(Router.query.project);
            console.log(userUid);

            if (!(userUid && next_router__WEBPACK_IMPORTED_MODULE_5___default.a.query.project)) {
              _context2.next = 9;
              break;
            }

            _context2.next = 7;
            return _lib_firebase__WEBPACK_IMPORTED_MODULE_7__["db"].collection('projects').where('uid', '==', userUid);

          case 7:
            data = _context2.sent;
            data.where('projectName', '==', next_router__WEBPACK_IMPORTED_MODULE_5___default.a.query.project).get().then(function (querySnapshot) {
              querySnapshot.forEach( /*#__PURE__*/function () {
                var _ref3 = Object(C_off_saas_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/C_off_saas_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(doc1) {
                  var projectId, projectName;
                  return C_off_saas_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
                    while (1) {
                      switch (_context.prev = _context.next) {
                        case 0:
                          projectId = doc1.data().projectId;
                          projectName = doc1.data().projectName;
                          setProjectId(projectId);
                          setProjectName(projectName);
                          _lib_firebase__WEBPACK_IMPORTED_MODULE_7__["db"].collection('projects').doc(doc1.data().projectId).collection('competitors').doc(next_router__WEBPACK_IMPORTED_MODULE_5___default.a.query.project).collection('inputs').onSnapshot(function (serverUpdate) {
                            serverUpdate.docs.map(function (doc) {
                              var data = doc.data();
                              setCompetitors(data.competitorsArray);
                            });
                          });

                        case 5:
                        case "end":
                          return _context.stop();
                      }
                    }
                  }, _callee);
                }));

                return function (_x) {
                  return _ref3.apply(this, arguments);
                };
              }());
            });

          case 9:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  })), []);
  console.log(projectId);
  var saveContainer = Object(react__WEBPACK_IMPORTED_MODULE_3__["useRef"])();

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(false),
      saveContainerHelper = _useState4[0],
      setSaveContainerHelper = _useState4[1];

  var saveSectionDropDown = function saveSectionDropDown() {
    if (!saveContainerHelper) {
      gsap__WEBPACK_IMPORTED_MODULE_8__["default"].to(saveContainer.current, {
        autoAlpha: 1,
        duration: 1,
        ease: gsap__WEBPACK_IMPORTED_MODULE_8__["Linear"]
      });
      setSaveContainerHelper(true);
    } else if (saveContainerHelper) {
      gsap__WEBPACK_IMPORTED_MODULE_8__["default"].to(saveContainer.current, {
        autoAlpha: 0,
        duration: 1,
        ease: gsap__WEBPACK_IMPORTED_MODULE_8__["Linear"]
      });
      setSaveContainerHelper(false);
    }
  };

  var dropdownButton = Object(react__WEBPACK_IMPORTED_MODULE_3__["useRef"])();
  var dropdownContainer = Object(react__WEBPACK_IMPORTED_MODULE_3__["useRef"])();

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(false),
      dropdownButtonColorHelper = _useState5[0],
      setDropdownButtonColorHelper = _useState5[1];

  var _useState6 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(false),
      dropdownContainerHelper = _useState6[0],
      setDropdownContainerHelper = _useState6[1];

  var onSaveDropdownShow = function onSaveDropdownShow() {
    if (!dropdownContainerHelper) {
      gsap__WEBPACK_IMPORTED_MODULE_8__["default"].to(dropdownContainer.current, {
        autoAlpha: 1,
        duration: 1,
        ease: gsap__WEBPACK_IMPORTED_MODULE_8__["Linear"]
      }); // gsap.to(dropdownButton.current, { backgroundColor: '#6C63FF', color: '#f8f9fb', duration: 1, ease: Linear });

      setDropdownContainerHelper(true);
      setDropdownButtonColorHelper(true);
    } else if (dropdownContainerHelper) {
      gsap__WEBPACK_IMPORTED_MODULE_8__["default"].to(dropdownContainer.current, {
        autoAlpha: 0,
        duration: 1,
        ease: gsap__WEBPACK_IMPORTED_MODULE_8__["Linear"]
      }); // gsap.to(dropdownButton.current, { backgroundColor: '#f8f9fb', color: '#6C63FF', duration: 1, ease: Linear });

      setDropdownContainerHelper(false);
      setDropdownButtonColorHelper(false);
    }
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
    ref: saveContainer,
    className: "relative flex justify-start",
    children: size.width < 680 ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
      className: "flex mt-4",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("img", {
        onClick: /*#__PURE__*/function () {
          var _ref4 = Object(C_off_saas_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/C_off_saas_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3(e) {
            var doc, asPdf, blob;
            return C_off_saas_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
              while (1) {
                switch (_context3.prev = _context3.next) {
                  case 0:
                    e.preventDefault();
                    doc = /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(MyDocument, {
                      competitors: competitors
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 330,
                      columnNumber: 27
                    }, _this);
                    asPdf = Object(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_10__["pdf"])([]);
                    asPdf.updateContainer(doc);
                    _context3.next = 6;
                    return asPdf.toBlob();

                  case 6:
                    blob = _context3.sent;
                    Object(file_saver__WEBPACK_IMPORTED_MODULE_4__["saveAs"])(blob, "".concat(next_router__WEBPACK_IMPORTED_MODULE_5___default.a.query.project, "/competitors-analysis.pdf"));

                  case 8:
                  case "end":
                    return _context3.stop();
                }
              }
            }, _callee3);
          }));

          return function (_x2) {
            return _ref4.apply(this, arguments);
          };
        }(),
        src: "/mobile-navbar/pdf.svg",
        height: 30,
        width: 30
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 327,
        columnNumber: 11
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 326,
      columnNumber: 9
    }, _this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
      className: "relative w-full flex justify-end items-center",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("button", {
        ref: dropdownButton,
        onClick: onSaveDropdownShow,
        className: "hover:bg-primary hover:text-white dark:hover:bg-primarydark dark:hover:text-background focus:outline-none border border-primary text-primary text-sm font-light py-2 px-8 rounded-2xl mt-2 dark:text-primarydark dark:border-primarydark ".concat(dropdownButtonColorHelper ? 'bg-primary text-background dark:bg-primarydark dark:text-background' : ''),
        children: "Save my work"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 344,
        columnNumber: 11
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
        ref: dropdownContainer,
        className: "absolute bg-white rounded-2xl shadow-xl p-6 top-14 z-50 invisible opacity-0",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
          className: "flex items-center justify-start",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("img", {
            src: "/mobile-navbar/success.svg",
            height: 26,
            width: 26
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 355,
            columnNumber: 15
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("p", {
            className: "text-lg ml-2",
            children: "Show the world your work!"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 356,
            columnNumber: 15
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 354,
          columnNumber: 13
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
          className: "px-6 py-4 bg-background rounded-2xl mt-2 pr-6",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("p", {
              className: "flex",
              children: "Save as PDF:"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 360,
              columnNumber: 17
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("img", {
              onClick: /*#__PURE__*/function () {
                var _ref5 = Object(C_off_saas_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/C_off_saas_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee4(e) {
                  var doc, asPdf, blob;
                  return C_off_saas_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee4$(_context4) {
                    while (1) {
                      switch (_context4.prev = _context4.next) {
                        case 0:
                          e.preventDefault();
                          doc = /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(MyDocument, {
                            competitors: competitors
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 364,
                            columnNumber: 33
                          }, _this);
                          asPdf = Object(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_10__["pdf"])([]);
                          asPdf.updateContainer(doc);
                          _context4.next = 6;
                          return asPdf.toBlob();

                        case 6:
                          blob = _context4.sent;
                          Object(file_saver__WEBPACK_IMPORTED_MODULE_4__["saveAs"])(blob, "".concat(next_router__WEBPACK_IMPORTED_MODULE_5___default.a.query.project, "/competitors-analysis.pdf"));

                        case 8:
                        case "end":
                          return _context4.stop();
                      }
                    }
                  }, _callee4);
                }));

                return function (_x3) {
                  return _ref5.apply(this, arguments);
                };
              }(),
              src: "/mobile-navbar/pdf.svg",
              height: 30,
              width: 30,
              className: "mt-2 cursor-pointer"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 361,
              columnNumber: 17
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 359,
            columnNumber: 15
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
            className: "w-full justify-start items-center mt-4",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("p", {
              children: "Share your competitors analysis with this public link:"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 377,
              columnNumber: 17
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
              className: "w-full flex mt-2",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("input", {
                value: "http://localhost:3000/dashboard/projects/".concat(projectName, "/competitors/").concat(projectId),
                className: "w-full bg-linkBackground text-sm px-2 py-1 dark:text-primarydark focus:outline-none"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 379,
                columnNumber: 19
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_11___default.a, {
                href: "/dashboard/projects/".concat(projectName, "/competitors/").concat(projectId),
                passHref: true,
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("a", {
                  target: "_blank",
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("img", {
                    className: "cursor-pointer",
                    src: "/mobile-navbar/foreign.svg",
                    height: 28,
                    width: 28
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 385,
                    columnNumber: 23
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 384,
                  columnNumber: 21
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 383,
                columnNumber: 19
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 378,
              columnNumber: 17
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 376,
            columnNumber: 15
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 358,
          columnNumber: 13
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 353,
        columnNumber: 11
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 343,
      columnNumber: 9
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 324,
    columnNumber: 5
  }, _this);
};

_s(CompetitorsPDF, "3K5FN/Clmi4oatWnhub+0GGi8oY=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_5__["useRouter"], _utils_useWindowSize__WEBPACK_IMPORTED_MODULE_9__["useWindowSize"]];
});

_c2 = CompetitorsPDF;
/* harmony default export */ __webpack_exports__["default"] = (CompetitorsPDF);

var _c, _c2;

$RefreshReg$(_c, "MyDocument");
$RefreshReg$(_c2, "CompetitorsPDF");

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9kYXNoYm9hcmQvc3RhcnR1cC9wcm9qZWN0L2J1c2luZXNzLWFwcC9jb21wZXRpdG9ycy9Db21wZXRpdG9yc1BERi5qcyJdLCJuYW1lcyI6WyJGb250IiwicmVnaXN0ZXIiLCJzcmMiLCJmYW1pbHkiLCJzdHlsZXMiLCJTdHlsZVNoZWV0IiwiY3JlYXRlIiwiaG9tZVBhZ2UiLCJwYWRkaW5nIiwiZm9udEZhbWlseSIsImJhY2tncm91bmRDb2xvciIsImNvbG9yIiwibWFpblRpdGxlIiwiZm9udFNpemUiLCJ0ZXh0QWxpZ24iLCJwYWRkaW5nQm90dG9tIiwiTXlEb2N1bWVudCIsImNvbXBldGl0b3JzIiwibWFwIiwiY29tcGV0aXRvciIsImluZGV4IiwiZGlzcGxheSIsImZsZXhEaXJlY3Rpb24iLCJpbWFnZSIsImhlaWdodCIsIndpZHRoIiwiYm9yZGVyUmFkaXVzIiwianVzdGlmeUNvbnRlbnQiLCJhbGlnbkl0ZW1zIiwiYWxpZ25Db250ZW50IiwibWFyZ2luTGVmdCIsInRpdGxlIiwicGFkZGluZ1ZlcnRpY2FsIiwicGFkZGluZ0hvcml6b250YWwiLCJsb2NhdGlvbiIsIm1hcmdpblRvcCIsImVtcGxveWVlcyIsInJldmVudWUiLCJjb21wYW55RGVzY3JpcHRpb24iLCJidXNpbmVzc01vZGVsIiwicHJvZHVjdE92ZXJ2aWV3IiwicHJvbW90aW9uU3RyYXRlZ3kiLCJjb21wYW55U3RyZW5ndGhzIiwiY29tcGFueVdlYWtuZXNzZXMiLCJvcHBvcnR1bml0aWVzIiwiQ29tcGV0aXRvcnNQREYiLCJ1c2VTdGF0ZSIsInNldENvbXBldGl0b3JzIiwicHJvamVjdElkIiwic2V0UHJvamVjdElkIiwicHJvamVjdE5hbWUiLCJzZXRQcm9qZWN0TmFtZSIsInJvdXRlciIsInVzZVJvdXRlciIsInNpemUiLCJ1c2VXaW5kb3dTaXplIiwidXNlRWZmZWN0IiwiQ29va2llcyIsImdldCIsInVzZXJVaWQiLCJjb25zb2xlIiwibG9nIiwiUm91dGVyIiwicXVlcnkiLCJwcm9qZWN0IiwiZGIiLCJjb2xsZWN0aW9uIiwid2hlcmUiLCJkYXRhIiwidGhlbiIsInF1ZXJ5U25hcHNob3QiLCJmb3JFYWNoIiwiZG9jMSIsImRvYyIsIm9uU25hcHNob3QiLCJzZXJ2ZXJVcGRhdGUiLCJkb2NzIiwiY29tcGV0aXRvcnNBcnJheSIsInNhdmVDb250YWluZXIiLCJ1c2VSZWYiLCJzYXZlQ29udGFpbmVySGVscGVyIiwic2V0U2F2ZUNvbnRhaW5lckhlbHBlciIsInNhdmVTZWN0aW9uRHJvcERvd24iLCJnc2FwIiwidG8iLCJjdXJyZW50IiwiYXV0b0FscGhhIiwiZHVyYXRpb24iLCJlYXNlIiwiTGluZWFyIiwiZHJvcGRvd25CdXR0b24iLCJkcm9wZG93bkNvbnRhaW5lciIsImRyb3Bkb3duQnV0dG9uQ29sb3JIZWxwZXIiLCJzZXREcm9wZG93bkJ1dHRvbkNvbG9ySGVscGVyIiwiZHJvcGRvd25Db250YWluZXJIZWxwZXIiLCJzZXREcm9wZG93bkNvbnRhaW5lckhlbHBlciIsIm9uU2F2ZURyb3Bkb3duU2hvdyIsImUiLCJwcmV2ZW50RGVmYXVsdCIsImFzUGRmIiwicGRmIiwidXBkYXRlQ29udGFpbmVyIiwidG9CbG9iIiwiYmxvYiIsInNhdmVBcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtDQUVBOztBQUNBO0FBQ0E7QUFDQTtBQUVBO0NBR0E7O0FBQ0FBLHlEQUFJLENBQUNDLFFBQUwsQ0FBYztBQUFFQyxLQUFHLEVBQUUsc0JBQVA7QUFBK0JDLFFBQU0sRUFBRTtBQUF2QyxDQUFkO0FBRUEsSUFBTUMsTUFBTSxHQUFHQywrREFBVSxDQUFDQyxNQUFYLENBQWtCO0FBQy9CQyxVQUFRLEVBQUU7QUFDUkMsV0FBTyxFQUFFLEVBREQ7QUFFUkMsY0FBVSxFQUFFLFdBRko7QUFHUkMsbUJBQWUsRUFBRSxTQUhUO0FBSVJDLFNBQUssRUFBRTtBQUpD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QSxzQ0FDRTtBQUNFLHFCQUFLLHFEQUE4Q2QsV0FBOUMsMEJBQXlFRixTQUF6RSxDQURQO0FBRUUseUJBQVMsRUFBQztBQUZaO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBREYsZUFLRSxxRUFBQyxpREFBRDtBQUFNLG9CQUFJLGdDQUF5QkUsV0FBekIsMEJBQW9ERixTQUFwRCxDQUFWO0FBQTJFLHdCQUFRLE1BQW5GO0FBQUEsdUNBQ0U7QUFBRyx3QkFBTSxFQUFDLFFBQVY7QUFBQSx5Q0FDRTtBQUFLLDZCQUFTLEVBQUMsZ0JBQWY7QUFBZ0MsdUJBQUcsRUFBQyw0QkFBcEM7QUFBaUUsMEJBQU0sRUFBRSxFQUF6RTtBQUE2RSx5QkFBSyxFQUFFO0FBQXBGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFMRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQWxCRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBTEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBVkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBbkJKO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQXVGRCxDQTNKRDs7R0FBTUgsYztVQUlXUSxxRCxFQUNGRSxrRTs7O01BTFRWLGM7QUE2SlNBLDZFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2Rhc2hib2FyZC9wcm9qZWN0cy9bcHJvamVjdF0vY29tcGV0aXRvcnMuZjAyODllMmExNWFmOTIwZmU0OGUuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVJlZiwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IHNhdmVBcyB9IGZyb20gJ2ZpbGUtc2F2ZXInO1xyXG5pbXBvcnQgUm91dGVyIGZyb20gJ25leHQvcm91dGVyJztcclxuaW1wb3J0IENvb2tpZXMgZnJvbSAnanMtY29va2llJztcclxuaW1wb3J0IHsgZGIgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi8uLi9saWIvZmlyZWJhc2UnO1xyXG4vLyBpbXBvcnQgZm9udCBmcm9tICcuLi8uLi8uLi8uLi8uLi8uLi9wdWJsaWMvZm9udHMvY29tZm9ydGFhLnR0Zic7XHJcbmltcG9ydCBnc2FwLCB7IExpbmVhciB9IGZyb20gJ2dzYXAnO1xyXG5pbXBvcnQgeyB1c2VXaW5kb3dTaXplIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vLi4vdXRpbHMvdXNlV2luZG93U2l6ZSc7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcclxuXHJcbmltcG9ydCB7IEZvbnQsIHBkZiwgUGFnZSwgVGV4dCwgVmlldywgSW1hZ2UsIERvY3VtZW50LCBTdHlsZVNoZWV0LCBQREZWaWV3ZXIsIFBERkRvd25sb2FkTGluayB9IGZyb20gJ0ByZWFjdC1wZGYvcmVuZGVyZXInO1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xyXG5cclxuLy8gRm9udC5yZWdpc3Rlcih7IHNyYzogJy9mb250cy9wb3BwaW5zLnR0ZicsIGZhbWlseTogJ1BvcHBpbnMnLCBmb3JtYXQ6ICd0cnVldHlwZScgfSk7XHJcbkZvbnQucmVnaXN0ZXIoeyBzcmM6ICcvZm9udHMvY29tZm9ydGFhLnR0ZicsIGZhbWlseTogJ0NvbWZvcnRhYScgfSk7XHJcblxyXG5jb25zdCBzdHlsZXMgPSBTdHlsZVNoZWV0LmNyZWF0ZSh7XHJcbiAgaG9tZVBhZ2U6IHtcclxuICAgIHBhZGRpbmc6IDM2LFxyXG4gICAgZm9udEZhbWlseTogJ0NvbWZvcnRhYScsXHJcbiAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjZjhmOWZiJyxcclxuICAgIGNvbG9yOiAnIzBhMTIzMCcsXHJcbiAgfSxcclxuICBtYWluVGl0bGU6IHtcclxuICAgIGZvbnRTaXplOiAyMixcclxuICAgIGNvbG9yOiAnIzBhMTIzMCcsXHJcbiAgICB0ZXh0QWxpZ246ICdjZW50ZXInLFxyXG4gICAgcGFkZGluZ0JvdHRvbTogNDIsXHJcbiAgfSxcclxufSk7XHJcblxyXG5jb25zdCBNeURvY3VtZW50ID0gKHsgY29tcGV0aXRvcnMgfSkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8RG9jdW1lbnQgc2NhbGU9ezk2IC8gNzJ9IHJlbmRlck1vZGU9XCJzdmdcIj5cclxuICAgICAge2NvbXBldGl0b3JzLm1hcCgoY29tcGV0aXRvciwgaW5kZXgpID0+IChcclxuICAgICAgICA8UGFnZSBzaXplPVwiQTRcIiBzdHlsZT17c3R5bGVzLmhvbWVQYWdlfT5cclxuICAgICAgICAgIHtpbmRleCA9PT0gMCAmJiAoXHJcbiAgICAgICAgICAgIDxWaWV3PlxyXG4gICAgICAgICAgICAgIDxUZXh0IHN0eWxlPXtzdHlsZXMubWFpblRpdGxlfT5Db21wZXRpdG9ycyBhbmFseXNpczwvVGV4dD5cclxuICAgICAgICAgICAgPC9WaWV3PlxyXG4gICAgICAgICAgKX1cclxuICAgICAgICAgIDxWaWV3IHN0eWxlPXt7IGRpc3BsYXk6ICdmbGV4JywgZmxleERpcmVjdGlvbjogJ3JvdycgfX0+XHJcbiAgICAgICAgICAgIHtjb21wZXRpdG9yLmltYWdlID09PSAnJyA/IChcclxuICAgICAgICAgICAgICA8Vmlld1xyXG4gICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA3MixcclxuICAgICAgICAgICAgICAgICAgd2lkdGg6IDcyLFxyXG4gICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjNkM2M0ZGJyxcclxuICAgICAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiA5OTk5LFxyXG4gICAgICAgICAgICAgICAgICBkaXNwbGF5OiAnZmxleCcsXHJcbiAgICAgICAgICAgICAgICAgIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJyxcclxuICAgICAgICAgICAgICAgICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXHJcbiAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxJbWFnZSBzcmM9XCIvY29tcGV0aXRvcnMvZW1wdHktaW1hZ2UtcGRmLnBuZ1wiIGhlaWdodD17NjR9IHdpZHRoPXs2NH0gLz5cclxuICAgICAgICAgICAgICA8L1ZpZXc+XHJcbiAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgPFZpZXc+PC9WaWV3PlxyXG4gICAgICAgICAgICApfVxyXG4gICAgICAgICAgICB7LyogQ29tcGFueSBvdmVydmlldyBzdGFydCAqL31cclxuICAgICAgICAgICAgPFZpZXcgc3R5bGU9e3sgZm9udFNpemU6IDEyIH19PlxyXG4gICAgICAgICAgICAgIDxWaWV3XHJcbiAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICBkaXNwbGF5OiAnZmxleCcsXHJcbiAgICAgICAgICAgICAgICAgIGZsZXhEaXJlY3Rpb246ICdyb3cnLFxyXG4gICAgICAgICAgICAgICAgICBqdXN0aWZ5Q29udGVudDogJ3NwYWNlLWJldHdlZW4nLFxyXG4gICAgICAgICAgICAgICAgICBhbGlnbkNvbnRlbnQ6ICdzcGFjZS1iZXR3ZWVuJyxcclxuICAgICAgICAgICAgICAgICAgbWFyZ2luTGVmdDogMzIsXHJcbiAgICAgICAgICAgICAgICAgIHdpZHRoOiAnMTAwJScsXHJcbiAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIHtjb21wZXRpdG9yLnRpdGxlICE9PSAnJyAmJiAoXHJcbiAgICAgICAgICAgICAgICAgIDxWaWV3IHN0eWxlPXt7IGJhY2tncm91bmRDb2xvcjogJyNmY2ZlZmUnLCBib3JkZXJSYWRpdXM6IDE2LCBwYWRkaW5nVmVydGljYWw6IDgsIHBhZGRpbmdIb3Jpem9udGFsOiAxNiB9fT5cclxuICAgICAgICAgICAgICAgICAgICA8VGV4dD5uYW1lIC8ge2NvbXBldGl0b3IudGl0bGV9PC9UZXh0PlxyXG4gICAgICAgICAgICAgICAgICA8L1ZpZXc+XHJcbiAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAge2NvbXBldGl0b3IubG9jYXRpb24gIT09ICcnICYmIChcclxuICAgICAgICAgICAgICAgICAgPFZpZXcgc3R5bGU9e3sgYmFja2dyb3VuZENvbG9yOiAnI2ZjZmVmZScsIGJvcmRlclJhZGl1czogMTYsIHBhZGRpbmdWZXJ0aWNhbDogOCwgcGFkZGluZ0hvcml6b250YWw6IDE2IH19PlxyXG4gICAgICAgICAgICAgICAgICAgIDxUZXh0PmxvY2F0aW9uIC8ge2NvbXBldGl0b3IubG9jYXRpb259PC9UZXh0PlxyXG4gICAgICAgICAgICAgICAgICA8L1ZpZXc+XHJcbiAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgIDwvVmlldz5cclxuICAgICAgICAgICAgICA8Vmlld1xyXG4gICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgZGlzcGxheTogJ2ZsZXgnLFxyXG4gICAgICAgICAgICAgICAgICBmbGV4RGlyZWN0aW9uOiAncm93JyxcclxuICAgICAgICAgICAgICAgICAganVzdGlmeUNvbnRlbnQ6ICdzcGFjZS1iZXR3ZWVuJyxcclxuICAgICAgICAgICAgICAgICAgYWxpZ25Db250ZW50OiAnc3BhY2UtYmV0d2VlbicsXHJcbiAgICAgICAgICAgICAgICAgIG1hcmdpbkxlZnQ6IDMyLFxyXG4gICAgICAgICAgICAgICAgICBtYXJnaW5Ub3A6IDEyLFxyXG4gICAgICAgICAgICAgICAgICB3aWR0aDogJzEwMCUnLFxyXG4gICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICB7Y29tcGV0aXRvci5lbXBsb3llZXMgIT09ICcnICYmIChcclxuICAgICAgICAgICAgICAgICAgPFZpZXcgc3R5bGU9e3sgYmFja2dyb3VuZENvbG9yOiAnI2ZjZmVmZScsIGJvcmRlclJhZGl1czogMTYsIHBhZGRpbmdWZXJ0aWNhbDogOCwgcGFkZGluZ0hvcml6b250YWw6IDE2IH19PlxyXG4gICAgICAgICAgICAgICAgICAgIDxUZXh0PmVtcGxveWVlcyAvIHtjb21wZXRpdG9yLmVtcGxveWVlc308L1RleHQ+XHJcbiAgICAgICAgICAgICAgICAgIDwvVmlldz5cclxuICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICB7Y29tcGV0aXRvci5yZXZlbnVlICE9PSAnJyAmJiAoXHJcbiAgICAgICAgICAgICAgICAgIDxWaWV3IHN0eWxlPXt7IGJhY2tncm91bmRDb2xvcjogJyNmY2ZlZmUnLCBib3JkZXJSYWRpdXM6IDE2LCBwYWRkaW5nVmVydGljYWw6IDgsIHBhZGRpbmdIb3Jpem9udGFsOiAxNiB9fT5cclxuICAgICAgICAgICAgICAgICAgICA8VGV4dD5yZXZlbnVlIC8ge2NvbXBldGl0b3IucmV2ZW51ZX08L1RleHQ+XHJcbiAgICAgICAgICAgICAgICAgIDwvVmlldz5cclxuICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgPC9WaWV3PlxyXG4gICAgICAgICAgICA8L1ZpZXc+XHJcbiAgICAgICAgICAgIHsvKiBDb21wYW55IG92ZXJ2aWV3IGVuZCAqL31cclxuICAgICAgICAgIDwvVmlldz5cclxuICAgICAgICAgIHsvKiBDb21wYW55IGRlc2NyaXB0aW9uICovfVxyXG4gICAgICAgICAge2NvbXBldGl0b3IuY29tcGFueURlc2NyaXB0aW9uICE9PSAnJyAmJiAoXHJcbiAgICAgICAgICAgIDxWaWV3IHdyYXA9e2ZhbHNlfSBzdHlsZT17eyBtYXJnaW5Ub3A6IDMyIH19PlxyXG4gICAgICAgICAgICAgIDxWaWV3IHN0eWxlPXt7IGRpc3BsYXk6ICdmbGV4JywgZmxleERpcmVjdGlvbjogJ3JvdycsIGFsaWduSXRlbXM6ICdmbGV4LWVuZCcsIGZvbnRTaXplOiAxNCB9fT5cclxuICAgICAgICAgICAgICAgIDxJbWFnZSBzcmM9XCIvY29tcGV0aXRvcnMvcGRmL2Rlc2NyaXB0aW9uLnBuZ1wiIHN0eWxlPXt7IGhlaWdodDogMjAsIHdpZHRoOiAyMCB9fSAvPlxyXG4gICAgICAgICAgICAgICAgPFRleHQgc3R5bGU9e3sgbWFyZ2luTGVmdDogOCB9fT5Db21wYW55IGRlc2NyaXB0aW9uPC9UZXh0PlxyXG4gICAgICAgICAgICAgIDwvVmlldz5cclxuICAgICAgICAgICAgICA8Vmlld1xyXG4gICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiAnI2ZjZmVmZScsXHJcbiAgICAgICAgICAgICAgICAgIGJvcmRlclJhZGl1czogMTYsXHJcbiAgICAgICAgICAgICAgICAgIHBhZGRpbmdWZXJ0aWNhbDogMTIsXHJcbiAgICAgICAgICAgICAgICAgIHBhZGRpbmdIb3Jpem9udGFsOiAxNixcclxuICAgICAgICAgICAgICAgICAgbWFyZ2luVG9wOiA4LFxyXG4gICAgICAgICAgICAgICAgICBmb250U2l6ZTogMTAsXHJcbiAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxUZXh0Pntjb21wZXRpdG9yLmNvbXBhbnlEZXNjcmlwdGlvbn08L1RleHQ+XHJcbiAgICAgICAgICAgICAgPC9WaWV3PlxyXG4gICAgICAgICAgICA8L1ZpZXc+XHJcbiAgICAgICAgICApfVxyXG4gICAgICAgICAge2NvbXBldGl0b3IuYnVzaW5lc3NNb2RlbCAhPT0gJycgJiYgKFxyXG4gICAgICAgICAgICA8VmlldyB3cmFwPXtmYWxzZX0gc3R5bGU9e3sgbWFyZ2luVG9wOiAzMiB9fT5cclxuICAgICAgICAgICAgICA8VmlldyBzdHlsZT17eyBkaXNwbGF5OiAnZmxleCcsIGZsZXhEaXJlY3Rpb246ICdyb3cnLCBhbGlnbkl0ZW1zOiAnZmxleC1lbmQnLCBmb250U2l6ZTogMTQgfX0+XHJcbiAgICAgICAgICAgICAgICA8SW1hZ2Ugc3JjPVwiL2NvbXBldGl0b3JzL3BkZi9tb2RlbC5wbmdcIiBzdHlsZT17eyBoZWlnaHQ6IDIwLCB3aWR0aDogMjAgfX0gLz5cclxuICAgICAgICAgICAgICAgIDxUZXh0IHN0eWxlPXt7IG1hcmdpbkxlZnQ6IDggfX0+QnVzaW5lc3MgbW9kZWw8L1RleHQ+XHJcbiAgICAgICAgICAgICAgPC9WaWV3PlxyXG4gICAgICAgICAgICAgIDxWaWV3XHJcbiAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjZmNmZWZlJyxcclxuICAgICAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiAxNixcclxuICAgICAgICAgICAgICAgICAgcGFkZGluZ1ZlcnRpY2FsOiAxMixcclxuICAgICAgICAgICAgICAgICAgcGFkZGluZ0hvcml6b250YWw6IDE2LFxyXG4gICAgICAgICAgICAgICAgICBtYXJnaW5Ub3A6IDgsXHJcbiAgICAgICAgICAgICAgICAgIGZvbnRTaXplOiAxMCxcclxuICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPFRleHQ+e2NvbXBldGl0b3IuYnVzaW5lc3NNb2RlbH08L1RleHQ+XHJcbiAgICAgICAgICAgICAgPC9WaWV3PlxyXG4gICAgICAgICAgICA8L1ZpZXc+XHJcbiAgICAgICAgICApfVxyXG4gICAgICAgICAge2NvbXBldGl0b3IucHJvZHVjdE92ZXJ2aWV3ICE9PSAnJyAmJiAoXHJcbiAgICAgICAgICAgIDxWaWV3IHdyYXA9e2ZhbHNlfSBzdHlsZT17eyBtYXJnaW5Ub3A6IDMyIH19PlxyXG4gICAgICAgICAgICAgIDxWaWV3IHN0eWxlPXt7IGRpc3BsYXk6ICdmbGV4JywgZmxleERpcmVjdGlvbjogJ3JvdycsIGFsaWduSXRlbXM6ICdmbGV4LWVuZCcsIGZvbnRTaXplOiAxNCB9fT5cclxuICAgICAgICAgICAgICAgIDxJbWFnZSBzcmM9XCIvY29tcGV0aXRvcnMvcGRmL3Byb2R1Y3QucG5nXCIgc3R5bGU9e3sgaGVpZ2h0OiAyMCwgd2lkdGg6IDIwIH19IC8+XHJcbiAgICAgICAgICAgICAgICA8VGV4dCBzdHlsZT17eyBtYXJnaW5MZWZ0OiA4IH19PlByb2R1Y3Qgb3ZlcnZpZXc8L1RleHQ+XHJcbiAgICAgICAgICAgICAgPC9WaWV3PlxyXG4gICAgICAgICAgICAgIDxWaWV3XHJcbiAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjZmNmZWZlJyxcclxuICAgICAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiAxNixcclxuICAgICAgICAgICAgICAgICAgcGFkZGluZ1ZlcnRpY2FsOiAxMixcclxuICAgICAgICAgICAgICAgICAgcGFkZGluZ0hvcml6b250YWw6IDE2LFxyXG4gICAgICAgICAgICAgICAgICBtYXJnaW5Ub3A6IDgsXHJcbiAgICAgICAgICAgICAgICAgIGZvbnRTaXplOiAxMCxcclxuICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPFRleHQ+e2NvbXBldGl0b3IucHJvZHVjdE92ZXJ2aWV3fTwvVGV4dD5cclxuICAgICAgICAgICAgICA8L1ZpZXc+XHJcbiAgICAgICAgICAgIDwvVmlldz5cclxuICAgICAgICAgICl9XHJcbiAgICAgICAgICB7Y29tcGV0aXRvci5wcm9tb3Rpb25TdHJhdGVneSAhPT0gJycgJiYgKFxyXG4gICAgICAgICAgICA8VmlldyB3cmFwPXtmYWxzZX0gc3R5bGU9e3sgbWFyZ2luVG9wOiAzMiB9fT5cclxuICAgICAgICAgICAgICA8VmlldyBzdHlsZT17eyBkaXNwbGF5OiAnZmxleCcsIGZsZXhEaXJlY3Rpb246ICdyb3cnLCBhbGlnbkl0ZW1zOiAnZmxleC1lbmQnLCBmb250U2l6ZTogMTQgfX0+XHJcbiAgICAgICAgICAgICAgICA8SW1hZ2Ugc3JjPVwiL2NvbXBldGl0b3JzL3BkZi9wcm9tb3Rpb24ucG5nXCIgc3R5bGU9e3sgaGVpZ2h0OiAyMCwgd2lkdGg6IDIwIH19IC8+XHJcbiAgICAgICAgICAgICAgICA8VGV4dCBzdHlsZT17eyBtYXJnaW5MZWZ0OiA4IH19PlByb21vdGlvbiBzdHJhdGVneTwvVGV4dD5cclxuICAgICAgICAgICAgICA8L1ZpZXc+XHJcbiAgICAgICAgICAgICAgPFZpZXdcclxuICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogJyNmY2ZlZmUnLFxyXG4gICAgICAgICAgICAgICAgICBib3JkZXJSYWRpdXM6IDE2LFxyXG4gICAgICAgICAgICAgICAgICBwYWRkaW5nVmVydGljYWw6IDEyLFxyXG4gICAgICAgICAgICAgICAgICBwYWRkaW5nSG9yaXpvbnRhbDogMTYsXHJcbiAgICAgICAgICAgICAgICAgIG1hcmdpblRvcDogOCxcclxuICAgICAgICAgICAgICAgICAgZm9udFNpemU6IDEwLFxyXG4gICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8VGV4dD57Y29tcGV0aXRvci5wcm9tb3Rpb25TdHJhdGVneX08L1RleHQ+XHJcbiAgICAgICAgICAgICAgPC9WaWV3PlxyXG4gICAgICAgICAgICA8L1ZpZXc+XHJcbiAgICAgICAgICApfVxyXG4gICAgICAgICAge2NvbXBldGl0b3IuY29tcGFueVN0cmVuZ3RocyAhPT0gJycgJiYgKFxyXG4gICAgICAgICAgICA8VmlldyB3cmFwPXtmYWxzZX0gc3R5bGU9e3sgbWFyZ2luVG9wOiAzMiB9fT5cclxuICAgICAgICAgICAgICA8VmlldyBzdHlsZT17eyBkaXNwbGF5OiAnZmxleCcsIGZsZXhEaXJlY3Rpb246ICdyb3cnLCBhbGlnbkl0ZW1zOiAnZmxleC1lbmQnLCBmb250U2l6ZTogMTQgfX0+XHJcbiAgICAgICAgICAgICAgICA8SW1hZ2Ugc3JjPVwiL2NvbXBldGl0b3JzL3BkZi9zdHJlbmd0aHMucG5nXCIgc3R5bGU9e3sgaGVpZ2h0OiAyMCwgd2lkdGg6IDIwIH19IC8+XHJcbiAgICAgICAgICAgICAgICA8VGV4dCBzdHlsZT17eyBtYXJnaW5MZWZ0OiA4IH19PkNvbXBhbnkgc3RyZW5ndGhzPC9UZXh0PlxyXG4gICAgICAgICAgICAgIDwvVmlldz5cclxuICAgICAgICAgICAgICA8Vmlld1xyXG4gICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiAnI2ZjZmVmZScsXHJcbiAgICAgICAgICAgICAgICAgIGJvcmRlclJhZGl1czogMTYsXHJcbiAgICAgICAgICAgICAgICAgIHBhZGRpbmdWZXJ0aWNhbDogMTIsXHJcbiAgICAgICAgICAgICAgICAgIHBhZGRpbmdIb3Jpem9udGFsOiAxNixcclxuICAgICAgICAgICAgICAgICAgbWFyZ2luVG9wOiA4LFxyXG4gICAgICAgICAgICAgICAgICBmb250U2l6ZTogMTAsXHJcbiAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxUZXh0Pntjb21wZXRpdG9yLmNvbXBhbnlTdHJlbmd0aHN9PC9UZXh0PlxyXG4gICAgICAgICAgICAgIDwvVmlldz5cclxuICAgICAgICAgICAgPC9WaWV3PlxyXG4gICAgICAgICAgKX1cclxuICAgICAgICAgIHtjb21wZXRpdG9yLmNvbXBhbnlXZWFrbmVzc2VzICE9PSAnJyAmJiAoXHJcbiAgICAgICAgICAgIDxWaWV3IHdyYXA9e2ZhbHNlfSBzdHlsZT17eyBtYXJnaW5Ub3A6IDMyIH19PlxyXG4gICAgICAgICAgICAgIDxWaWV3IHN0eWxlPXt7IGRpc3BsYXk6ICdmbGV4JywgZmxleERpcmVjdGlvbjogJ3JvdycsIGFsaWduSXRlbXM6ICdmbGV4LWVuZCcsIGZvbnRTaXplOiAxNCB9fT5cclxuICAgICAgICAgICAgICAgIDxJbWFnZSBzcmM9XCIvY29tcGV0aXRvcnMvcGRmL3dlYWtuZXNzZXMucG5nXCIgc3R5bGU9e3sgaGVpZ2h0OiAyMCwgd2lkdGg6IDIwIH19IC8+XHJcbiAgICAgICAgICAgICAgICA8VGV4dCBzdHlsZT17eyBtYXJnaW5MZWZ0OiA4IH19PkNvbXBhbnkgd2Vha25lc3NlczwvVGV4dD5cclxuICAgICAgICAgICAgICA8L1ZpZXc+XHJcbiAgICAgICAgICAgICAgPFZpZXdcclxuICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogJyNmY2ZlZmUnLFxyXG4gICAgICAgICAgICAgICAgICBib3JkZXJSYWRpdXM6IDE2LFxyXG4gICAgICAgICAgICAgICAgICBwYWRkaW5nVmVydGljYWw6IDEyLFxyXG4gICAgICAgICAgICAgICAgICBwYWRkaW5nSG9yaXpvbnRhbDogMTYsXHJcbiAgICAgICAgICAgICAgICAgIG1hcmdpblRvcDogOCxcclxuICAgICAgICAgICAgICAgICAgZm9udFNpemU6IDEwLFxyXG4gICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8VGV4dD57Y29tcGV0aXRvci5jb21wYW55V2Vha25lc3Nlc308L1RleHQ+XHJcbiAgICAgICAgICAgICAgPC9WaWV3PlxyXG4gICAgICAgICAgICA8L1ZpZXc+XHJcbiAgICAgICAgICApfVxyXG4gICAgICAgICAge2NvbXBldGl0b3Iub3Bwb3J0dW5pdGllcyAhPT0gJycgJiYgKFxyXG4gICAgICAgICAgICA8VmlldyB3cmFwPXtmYWxzZX0gc3R5bGU9e3sgbWFyZ2luVG9wOiAzMiB9fT5cclxuICAgICAgICAgICAgICA8VmlldyBzdHlsZT17eyBkaXNwbGF5OiAnZmxleCcsIGZsZXhEaXJlY3Rpb246ICdyb3cnLCBhbGlnbkl0ZW1zOiAnZmxleC1lbmQnLCBmb250U2l6ZTogMTQgfX0+XHJcbiAgICAgICAgICAgICAgICA8SW1hZ2Ugc3JjPVwiL2NvbXBldGl0b3JzL3BkZi9vcHBvcnR1bml0aWVzLnBuZ1wiIHN0eWxlPXt7IGhlaWdodDogMjAsIHdpZHRoOiAyMCB9fSAvPlxyXG4gICAgICAgICAgICAgICAgPFRleHQgc3R5bGU9e3sgbWFyZ2luTGVmdDogOCB9fT5Db21wYW55IG9wcG9ydHVuaXRpZXM8L1RleHQ+XHJcbiAgICAgICAgICAgICAgPC9WaWV3PlxyXG4gICAgICAgICAgICAgIDxWaWV3XHJcbiAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjZmNmZWZlJyxcclxuICAgICAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiAxNixcclxuICAgICAgICAgICAgICAgICAgcGFkZGluZ1ZlcnRpY2FsOiAxMixcclxuICAgICAgICAgICAgICAgICAgcGFkZGluZ0hvcml6b250YWw6IDE2LFxyXG4gICAgICAgICAgICAgICAgICBtYXJnaW5Ub3A6IDgsXHJcbiAgICAgICAgICAgICAgICAgIGZvbnRTaXplOiAxMCxcclxuICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPFRleHQ+e2NvbXBldGl0b3Iub3Bwb3J0dW5pdGllc308L1RleHQ+XHJcbiAgICAgICAgICAgICAgPC9WaWV3PlxyXG4gICAgICAgICAgICA8L1ZpZXc+XHJcbiAgICAgICAgICApfVxyXG4gICAgICAgIDwvUGFnZT5cclxuICAgICAgKSl9XHJcbiAgICA8L0RvY3VtZW50PlxyXG4gICk7XHJcbn07XHJcblxyXG5jb25zdCBDb21wZXRpdG9yc1BERiA9ICgpID0+IHtcclxuICBjb25zdCBbY29tcGV0aXRvcnMsIHNldENvbXBldGl0b3JzXSA9IHVzZVN0YXRlKG51bGwpO1xyXG4gIGNvbnN0IFtwcm9qZWN0SWQsIHNldFByb2plY3RJZF0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgY29uc3QgW3Byb2plY3ROYW1lLCBzZXRQcm9qZWN0TmFtZV0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcbiAgY29uc3Qgc2l6ZSA9IHVzZVdpbmRvd1NpemUoKTtcclxuICB1c2VFZmZlY3QoYXN5bmMgKCkgPT4ge1xyXG4gICAgY29uc3QgdXNlclVpZCA9IGF3YWl0IENvb2tpZXMuZ2V0KCd1aWQnKTtcclxuICAgIC8vIGNvbnNvbGUubG9nKFJvdXRlci5xdWVyeS5wcm9qZWN0KTtcclxuICAgIGNvbnNvbGUubG9nKHVzZXJVaWQpO1xyXG4gICAgaWYgKHVzZXJVaWQgJiYgUm91dGVyLnF1ZXJ5LnByb2plY3QpIHtcclxuICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IGRiLmNvbGxlY3Rpb24oJ3Byb2plY3RzJykud2hlcmUoJ3VpZCcsICc9PScsIHVzZXJVaWQpO1xyXG4gICAgICBkYXRhXHJcbiAgICAgICAgLndoZXJlKCdwcm9qZWN0TmFtZScsICc9PScsIFJvdXRlci5xdWVyeS5wcm9qZWN0KVxyXG4gICAgICAgIC5nZXQoKVxyXG4gICAgICAgIC50aGVuKChxdWVyeVNuYXBzaG90KSA9PiB7XHJcbiAgICAgICAgICBxdWVyeVNuYXBzaG90LmZvckVhY2goYXN5bmMgKGRvYzEpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgcHJvamVjdElkID0gZG9jMS5kYXRhKCkucHJvamVjdElkO1xyXG4gICAgICAgICAgICBjb25zdCBwcm9qZWN0TmFtZSA9IGRvYzEuZGF0YSgpLnByb2plY3ROYW1lO1xyXG4gICAgICAgICAgICBzZXRQcm9qZWN0SWQocHJvamVjdElkKTtcclxuICAgICAgICAgICAgc2V0UHJvamVjdE5hbWUocHJvamVjdE5hbWUpO1xyXG4gICAgICAgICAgICBkYi5jb2xsZWN0aW9uKCdwcm9qZWN0cycpXHJcbiAgICAgICAgICAgICAgLmRvYyhkb2MxLmRhdGEoKS5wcm9qZWN0SWQpXHJcbiAgICAgICAgICAgICAgLmNvbGxlY3Rpb24oJ2NvbXBldGl0b3JzJylcclxuICAgICAgICAgICAgICAuZG9jKFJvdXRlci5xdWVyeS5wcm9qZWN0KVxyXG4gICAgICAgICAgICAgIC5jb2xsZWN0aW9uKCdpbnB1dHMnKVxyXG4gICAgICAgICAgICAgIC5vblNuYXBzaG90KChzZXJ2ZXJVcGRhdGUpID0+IHtcclxuICAgICAgICAgICAgICAgIHNlcnZlclVwZGF0ZS5kb2NzLm1hcCgoZG9jKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgIGNvbnN0IGRhdGEgPSBkb2MuZGF0YSgpO1xyXG4gICAgICAgICAgICAgICAgICBzZXRDb21wZXRpdG9ycyhkYXRhLmNvbXBldGl0b3JzQXJyYXkpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICB9LCBbXSk7XHJcbiAgY29uc29sZS5sb2cocHJvamVjdElkKTtcclxuXHJcbiAgY29uc3Qgc2F2ZUNvbnRhaW5lciA9IHVzZVJlZigpO1xyXG4gIGNvbnN0IFtzYXZlQ29udGFpbmVySGVscGVyLCBzZXRTYXZlQ29udGFpbmVySGVscGVyXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBzYXZlU2VjdGlvbkRyb3BEb3duID0gKCkgPT4ge1xyXG4gICAgaWYgKCFzYXZlQ29udGFpbmVySGVscGVyKSB7XHJcbiAgICAgIGdzYXAudG8oc2F2ZUNvbnRhaW5lci5jdXJyZW50LCB7IGF1dG9BbHBoYTogMSwgZHVyYXRpb246IDEsIGVhc2U6IExpbmVhciB9KTtcclxuICAgICAgc2V0U2F2ZUNvbnRhaW5lckhlbHBlcih0cnVlKTtcclxuICAgIH0gZWxzZSBpZiAoc2F2ZUNvbnRhaW5lckhlbHBlcikge1xyXG4gICAgICBnc2FwLnRvKHNhdmVDb250YWluZXIuY3VycmVudCwgeyBhdXRvQWxwaGE6IDAsIGR1cmF0aW9uOiAxLCBlYXNlOiBMaW5lYXIgfSk7XHJcbiAgICAgIHNldFNhdmVDb250YWluZXJIZWxwZXIoZmFsc2UpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIGNvbnN0IGRyb3Bkb3duQnV0dG9uID0gdXNlUmVmKCk7XHJcbiAgY29uc3QgZHJvcGRvd25Db250YWluZXIgPSB1c2VSZWYoKTtcclxuICBjb25zdCBbZHJvcGRvd25CdXR0b25Db2xvckhlbHBlciwgc2V0RHJvcGRvd25CdXR0b25Db2xvckhlbHBlcl0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW2Ryb3Bkb3duQ29udGFpbmVySGVscGVyLCBzZXREcm9wZG93bkNvbnRhaW5lckhlbHBlcl0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3Qgb25TYXZlRHJvcGRvd25TaG93ID0gKCkgPT4ge1xyXG4gICAgaWYgKCFkcm9wZG93bkNvbnRhaW5lckhlbHBlcikge1xyXG4gICAgICBnc2FwLnRvKGRyb3Bkb3duQ29udGFpbmVyLmN1cnJlbnQsIHsgYXV0b0FscGhhOiAxLCBkdXJhdGlvbjogMSwgZWFzZTogTGluZWFyIH0pO1xyXG4gICAgICAvLyBnc2FwLnRvKGRyb3Bkb3duQnV0dG9uLmN1cnJlbnQsIHsgYmFja2dyb3VuZENvbG9yOiAnIzZDNjNGRicsIGNvbG9yOiAnI2Y4ZjlmYicsIGR1cmF0aW9uOiAxLCBlYXNlOiBMaW5lYXIgfSk7XHJcbiAgICAgIHNldERyb3Bkb3duQ29udGFpbmVySGVscGVyKHRydWUpO1xyXG4gICAgICBzZXREcm9wZG93bkJ1dHRvbkNvbG9ySGVscGVyKHRydWUpO1xyXG4gICAgfSBlbHNlIGlmIChkcm9wZG93bkNvbnRhaW5lckhlbHBlcikge1xyXG4gICAgICBnc2FwLnRvKGRyb3Bkb3duQ29udGFpbmVyLmN1cnJlbnQsIHsgYXV0b0FscGhhOiAwLCBkdXJhdGlvbjogMSwgZWFzZTogTGluZWFyIH0pO1xyXG4gICAgICAvLyBnc2FwLnRvKGRyb3Bkb3duQnV0dG9uLmN1cnJlbnQsIHsgYmFja2dyb3VuZENvbG9yOiAnI2Y4ZjlmYicsIGNvbG9yOiAnIzZDNjNGRicsIGR1cmF0aW9uOiAxLCBlYXNlOiBMaW5lYXIgfSk7XHJcbiAgICAgIHNldERyb3Bkb3duQ29udGFpbmVySGVscGVyKGZhbHNlKTtcclxuICAgICAgc2V0RHJvcGRvd25CdXR0b25Db2xvckhlbHBlcihmYWxzZSk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgcmVmPXtzYXZlQ29udGFpbmVyfSBjbGFzc05hbWU9XCJyZWxhdGl2ZSBmbGV4IGp1c3RpZnktc3RhcnRcIj5cclxuICAgICAge3NpemUud2lkdGggPCA2ODAgPyAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IG10LTRcIj5cclxuICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgb25DbGljaz17YXN5bmMgKGUpID0+IHtcclxuICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgICAgY29uc3QgZG9jID0gPE15RG9jdW1lbnQgY29tcGV0aXRvcnM9e2NvbXBldGl0b3JzfSAvPjtcclxuICAgICAgICAgICAgICBjb25zdCBhc1BkZiA9IHBkZihbXSk7XHJcbiAgICAgICAgICAgICAgYXNQZGYudXBkYXRlQ29udGFpbmVyKGRvYyk7XHJcbiAgICAgICAgICAgICAgY29uc3QgYmxvYiA9IGF3YWl0IGFzUGRmLnRvQmxvYigpO1xyXG4gICAgICAgICAgICAgIHNhdmVBcyhibG9iLCBgJHtSb3V0ZXIucXVlcnkucHJvamVjdH0vY29tcGV0aXRvcnMtYW5hbHlzaXMucGRmYCk7XHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgIHNyYz1cIi9tb2JpbGUtbmF2YmFyL3BkZi5zdmdcIlxyXG4gICAgICAgICAgICBoZWlnaHQ9ezMwfVxyXG4gICAgICAgICAgICB3aWR0aD17MzB9XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgICAgey8qIDxpbWcgc3JjPVwiL21vYmlsZS1uYXZiYXIvbGluay5zdmdcIiBoZWlnaHQ9ezMwfSB3aWR0aD17MzB9IC8+ICovfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICApIDogKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVsYXRpdmUgdy1mdWxsIGZsZXgganVzdGlmeS1lbmQgaXRlbXMtY2VudGVyXCI+XHJcbiAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgIHJlZj17ZHJvcGRvd25CdXR0b259XHJcbiAgICAgICAgICAgIG9uQ2xpY2s9e29uU2F2ZURyb3Bkb3duU2hvd31cclxuICAgICAgICAgICAgY2xhc3NOYW1lPXtgaG92ZXI6YmctcHJpbWFyeSBob3Zlcjp0ZXh0LXdoaXRlIGRhcms6aG92ZXI6YmctcHJpbWFyeWRhcmsgZGFyazpob3Zlcjp0ZXh0LWJhY2tncm91bmQgZm9jdXM6b3V0bGluZS1ub25lIGJvcmRlciBib3JkZXItcHJpbWFyeSB0ZXh0LXByaW1hcnkgdGV4dC1zbSBmb250LWxpZ2h0IHB5LTIgcHgtOCByb3VuZGVkLTJ4bCBtdC0yIGRhcms6dGV4dC1wcmltYXJ5ZGFyayBkYXJrOmJvcmRlci1wcmltYXJ5ZGFyayAke1xyXG4gICAgICAgICAgICAgIGRyb3Bkb3duQnV0dG9uQ29sb3JIZWxwZXIgPyAnYmctcHJpbWFyeSB0ZXh0LWJhY2tncm91bmQgZGFyazpiZy1wcmltYXJ5ZGFyayBkYXJrOnRleHQtYmFja2dyb3VuZCcgOiAnJ1xyXG4gICAgICAgICAgICB9YH1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgU2F2ZSBteSB3b3JrXHJcbiAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgIDxkaXYgcmVmPXtkcm9wZG93bkNvbnRhaW5lcn0gY2xhc3NOYW1lPVwiYWJzb2x1dGUgYmctd2hpdGUgcm91bmRlZC0yeGwgc2hhZG93LXhsIHAtNiB0b3AtMTQgei01MCBpbnZpc2libGUgb3BhY2l0eS0wXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1zdGFydFwiPlxyXG4gICAgICAgICAgICAgIDxpbWcgc3JjPVwiL21vYmlsZS1uYXZiYXIvc3VjY2Vzcy5zdmdcIiBoZWlnaHQ9ezI2fSB3aWR0aD17MjZ9IC8+XHJcbiAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1sZyBtbC0yXCI+U2hvdyB0aGUgd29ybGQgeW91ciB3b3JrITwvcD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHgtNiBweS00IGJnLWJhY2tncm91bmQgcm91bmRlZC0yeGwgbXQtMiBwci02XCI+XHJcbiAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImZsZXhcIj5TYXZlIGFzIFBERjo8L3A+XHJcbiAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2FzeW5jIChlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGRvYyA9IDxNeURvY3VtZW50IGNvbXBldGl0b3JzPXtjb21wZXRpdG9yc30gLz47XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgYXNQZGYgPSBwZGYoW10pO1xyXG4gICAgICAgICAgICAgICAgICAgIGFzUGRmLnVwZGF0ZUNvbnRhaW5lcihkb2MpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGJsb2IgPSBhd2FpdCBhc1BkZi50b0Jsb2IoKTtcclxuICAgICAgICAgICAgICAgICAgICBzYXZlQXMoYmxvYiwgYCR7Um91dGVyLnF1ZXJ5LnByb2plY3R9L2NvbXBldGl0b3JzLWFuYWx5c2lzLnBkZmApO1xyXG4gICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICBzcmM9XCIvbW9iaWxlLW5hdmJhci9wZGYuc3ZnXCJcclxuICAgICAgICAgICAgICAgICAgaGVpZ2h0PXszMH1cclxuICAgICAgICAgICAgICAgICAgd2lkdGg9ezMwfVxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJtdC0yIGN1cnNvci1wb2ludGVyXCJcclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGwganVzdGlmeS1zdGFydCBpdGVtcy1jZW50ZXIgbXQtNFwiPlxyXG4gICAgICAgICAgICAgICAgPHA+U2hhcmUgeW91ciBjb21wZXRpdG9ycyBhbmFseXNpcyB3aXRoIHRoaXMgcHVibGljIGxpbms6PC9wPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGwgZmxleCBtdC0yXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXtgaHR0cDovL2xvY2FsaG9zdDozMDAwL2Rhc2hib2FyZC9wcm9qZWN0cy8ke3Byb2plY3ROYW1lfS9jb21wZXRpdG9ycy8ke3Byb2plY3RJZH1gfVxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInctZnVsbCBiZy1saW5rQmFja2dyb3VuZCB0ZXh0LXNtIHB4LTIgcHktMSBkYXJrOnRleHQtcHJpbWFyeWRhcmsgZm9jdXM6b3V0bGluZS1ub25lXCJcclxuICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj17YC9kYXNoYm9hcmQvcHJvamVjdHMvJHtwcm9qZWN0TmFtZX0vY29tcGV0aXRvcnMvJHtwcm9qZWN0SWR9YH0gcGFzc0hyZWY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGEgdGFyZ2V0PVwiX2JsYW5rXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT1cImN1cnNvci1wb2ludGVyXCIgc3JjPVwiL21vYmlsZS1uYXZiYXIvZm9yZWlnbi5zdmdcIiBoZWlnaHQ9ezI4fSB3aWR0aD17Mjh9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgKX1cclxuICAgICAgey8qIDxidXR0b25cclxuICAgICAgICBvbkNsaWNrPXthc3luYyAoZSkgPT4ge1xyXG4gICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgY29uc3QgZG9jID0gPE15RG9jdW1lbnQgY29tcGV0aXRvcnM9e2NvbXBldGl0b3JzfSAvPjtcclxuICAgICAgICAgIGNvbnN0IGFzUGRmID0gcGRmKFtdKTtcclxuICAgICAgICAgIGFzUGRmLnVwZGF0ZUNvbnRhaW5lcihkb2MpO1xyXG4gICAgICAgICAgY29uc3QgYmxvYiA9IGF3YWl0IGFzUGRmLnRvQmxvYigpO1xyXG4gICAgICAgICAgc2F2ZUFzKGJsb2IsIGAke1JvdXRlci5xdWVyeS5wcm9qZWN0fS9jb21wZXRpdG9ycy1hbmFseXNpcy5wZGZgKTtcclxuICAgICAgICB9fVxyXG4gICAgICAgIGNsYXNzTmFtZT1cImhvdmVyOmJnLXByaW1hcnkgaG92ZXI6dGV4dC13aGl0ZSBkYXJrOmhvdmVyOmJnLXByaW1hcnlkYXJrIGRhcms6aG92ZXI6dGV4dC1iYWNrZ3JvdW5kIGZvY3VzOm91dGxpbmUtbm9uZSBib3JkZXIgYm9yZGVyLXByaW1hcnkgdGV4dC1wcmltYXJ5IHRleHQtc20gZm9udC1saWdodCBweS0yIHB4LTggcm91bmRlZC0yeGwgbXQtMiBkYXJrOnRleHQtcHJpbWFyeWRhcmsgZGFyazpib3JkZXItcHJpbWFyeWRhcmtcIlxyXG4gICAgICA+XHJcbiAgICAgICAgUERGIFNhdmVcclxuICAgICAgPC9idXR0b24+ICovfVxyXG4gICAgICB7LyogPGRpdiBjbGFzc05hbWU9XCJhYnNvbHV0ZSB0b3AtMTIgdy0yNCBiZy1iYWNrZ3JvdW5kIHNoYWRvd1wiPkV4cG9ydCBhczo8L2Rpdj4gKi99XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ29tcGV0aXRvcnNQREY7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=