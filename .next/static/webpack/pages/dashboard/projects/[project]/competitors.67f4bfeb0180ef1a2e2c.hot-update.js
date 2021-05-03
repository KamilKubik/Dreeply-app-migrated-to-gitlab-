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
            lineNumber: 37,
            columnNumber: 15
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 36,
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
              lineNumber: 53,
              columnNumber: 17
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 42,
            columnNumber: 15
          }, _this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_10__["View"], {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 56,
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
                  lineNumber: 72,
                  columnNumber: 21
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 71,
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
                  lineNumber: 77,
                  columnNumber: 21
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 76,
                columnNumber: 19
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 60,
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
                  lineNumber: 94,
                  columnNumber: 21
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 93,
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
                  lineNumber: 99,
                  columnNumber: 21
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 98,
                columnNumber: 19
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 81,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 59,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 40,
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
              lineNumber: 110,
              columnNumber: 17
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_10__["Text"], {
              style: {
                marginLeft: 8
              },
              children: "Company description"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 111,
              columnNumber: 17
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 109,
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
              lineNumber: 123,
              columnNumber: 17
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 113,
            columnNumber: 15
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 108,
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
              lineNumber: 130,
              columnNumber: 17
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_10__["Text"], {
              style: {
                marginLeft: 8
              },
              children: "Business model"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 131,
              columnNumber: 17
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 129,
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
              lineNumber: 143,
              columnNumber: 17
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 133,
            columnNumber: 15
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 128,
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
              lineNumber: 150,
              columnNumber: 17
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_10__["Text"], {
              style: {
                marginLeft: 8
              },
              children: "Product overview"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 151,
              columnNumber: 17
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 149,
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
              lineNumber: 163,
              columnNumber: 17
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 153,
            columnNumber: 15
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 148,
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
              lineNumber: 170,
              columnNumber: 17
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_10__["Text"], {
              style: {
                marginLeft: 8
              },
              children: "Promotion strategy"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 171,
              columnNumber: 17
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 169,
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
              lineNumber: 183,
              columnNumber: 17
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 173,
            columnNumber: 15
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 168,
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
              lineNumber: 190,
              columnNumber: 17
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_10__["Text"], {
              style: {
                marginLeft: 8
              },
              children: "Company strengths"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 191,
              columnNumber: 17
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 189,
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
              lineNumber: 203,
              columnNumber: 17
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 193,
            columnNumber: 15
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 188,
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
              lineNumber: 210,
              columnNumber: 17
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_10__["Text"], {
              style: {
                marginLeft: 8
              },
              children: "Company weaknesses"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 211,
              columnNumber: 17
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 209,
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
              lineNumber: 223,
              columnNumber: 17
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 213,
            columnNumber: 15
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 208,
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
              lineNumber: 230,
              columnNumber: 17
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_10__["Text"], {
              style: {
                marginLeft: 8
              },
              children: "Company opportunities"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 231,
              columnNumber: 17
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 229,
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
              lineNumber: 243,
              columnNumber: 17
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 233,
            columnNumber: 15
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 228,
          columnNumber: 13
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 34,
        columnNumber: 9
      }, _this);
    })
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 32,
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
                      lineNumber: 327,
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
        lineNumber: 324,
        columnNumber: 11
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 323,
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
        lineNumber: 341,
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
            lineNumber: 352,
            columnNumber: 15
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("p", {
            className: "text-lg ml-2",
            children: "Show the world your work!"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 353,
            columnNumber: 15
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 351,
          columnNumber: 13
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
          className: "px-6 py-4 bg-background rounded-2xl mt-2 pr-6",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("p", {
              className: "flex",
              children: "Save as PDF:"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 357,
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
                            lineNumber: 361,
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
              lineNumber: 358,
              columnNumber: 17
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 356,
            columnNumber: 15
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
            className: "w-full justify-start items-center mt-4",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("p", {
              children: "Share your competitors analysis with this public link:"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 374,
              columnNumber: 17
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
              className: "w-full flex mt-2",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("input", {
                value: "http://localhost:3000/dashboard/projects/".concat(projectName, "/competitors/").concat(projectId),
                className: "w-full bg-linkBackground text-sm px-2 py-1 dark:text-primarydark"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 376,
                columnNumber: 19
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("img", {
                src: "/mobile-navbar/foreign.svg",
                height: 28,
                width: 28
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 380,
                columnNumber: 19
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 375,
              columnNumber: 17
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 373,
            columnNumber: 15
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 355,
          columnNumber: 13
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 350,
        columnNumber: 11
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 340,
      columnNumber: 9
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 321,
    columnNumber: 5
  }, _this);
};

_s(CompetitorsPDF, "SFGmdlcZ0DJ7UBFi03b7QkDk68E=", false, function () {
  return [_utils_useWindowSize__WEBPACK_IMPORTED_MODULE_9__["useWindowSize"]];
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9kYXNoYm9hcmQvc3RhcnR1cC9wcm9qZWN0L2J1c2luZXNzLWFwcC9jb21wZXRpdG9ycy9Db21wZXRpdG9yc1BERi5qcyJdLCJuYW1lcyI6WyJGb250IiwicmVnaXN0ZXIiLCJzcmMiLCJmYW1pbHkiLCJzdHlsZXMiLCJTdHlsZVNoZWV0IiwiY3JlYXRlIiwiaG9tZVBhZ2UiLCJwYWRkaW5nIiwiZm9udEZhbWlseSIsImJhY2tncm91bmRDb2xvciIsImNvbG9yIiwibWFpblRpdGxlIiwiZm9udFNpemUiLCJ0ZXh0QWxpZ24iLCJwYWRkaW5nQm90dG9tIiwiTXlEb2N1bWVudCIsImNvbXBldGl0b3JzIiwibWFwIiwiY29tcGV0aXRvciIsImluZGV4IiwiZGlzcGxheSIsImZsZXhEaXJlY3Rpb24iLCJpbWFnZSIsImhlaWdodCIsIndpZHRoIiwiYm9yZGVyUmFkaXVzIiwianVzdGlmeUNvbnRlbnQiLCJhbGlnbkl0ZW1zIiwiYWxpZ25Db250ZW50IiwibWFyZ2luTGVmdCIsInRpdGxlIiwicGFkZGluZ1ZlcnRpY2FsIiwicGFkZGluZ0hvcml6b250YWwiLCJsb2NhdGlvbiIsIm1hcmdpblRvcCIsImVtcGxveWVlcyIsInJldmVudWUiLCJjb21wYW55RGVzY3JpcHRpb24iLCJidXNpbmVzc01vZGVsIiwicHJvZHVjdE92ZXJ2aWV3IiwicHJvbW90aW9uU3RyYXRlZ3kiLCJjb21wYW55U3RyZW5ndGhzIiwiY29tcGFueVdlYWtuZXNzZXMiLCJvcHBvcnR1bml0aWVzIiwiQ29tcGV0aXRvcnNQREYiLCJ1c2VTdGF0ZSIsInNldENvbXBldGl0b3JzIiwicHJvamVjdElkIiwic2V0UHJvamVjdElkIiwicHJvamVjdE5hbWUiLCJzZXRQcm9qZWN0TmFtZSIsInNpemUiLCJ1c2VXaW5kb3dTaXplIiwidXNlRWZmZWN0IiwiQ29va2llcyIsImdldCIsInVzZXJVaWQiLCJjb25zb2xlIiwibG9nIiwiUm91dGVyIiwicXVlcnkiLCJwcm9qZWN0IiwiZGIiLCJjb2xsZWN0aW9uIiwid2hlcmUiLCJkYXRhIiwidGhlbiIsInF1ZXJ5U25hcHNob3QiLCJmb3JFYWNoIiwiZG9jMSIsImRvYyIsIm9uU25hcHNob3QiLCJzZXJ2ZXJVcGRhdGUiLCJkb2NzIiwiY29tcGV0aXRvcnNBcnJheSIsInNhdmVDb250YWluZXIiLCJ1c2VSZWYiLCJzYXZlQ29udGFpbmVySGVscGVyIiwic2V0U2F2ZUNvbnRhaW5lckhlbHBlciIsInNhdmVTZWN0aW9uRHJvcERvd24iLCJnc2FwIiwidG8iLCJjdXJyZW50IiwiYXV0b0FscGhhIiwiZHVyYXRpb24iLCJlYXNlIiwiTGluZWFyIiwiZHJvcGRvd25CdXR0b24iLCJkcm9wZG93bkNvbnRhaW5lciIsImRyb3Bkb3duQnV0dG9uQ29sb3JIZWxwZXIiLCJzZXREcm9wZG93bkJ1dHRvbkNvbG9ySGVscGVyIiwiZHJvcGRvd25Db250YWluZXJIZWxwZXIiLCJzZXREcm9wZG93bkNvbnRhaW5lckhlbHBlciIsIm9uU2F2ZURyb3Bkb3duU2hvdyIsImUiLCJwcmV2ZW50RGVmYXVsdCIsImFzUGRmIiwicGRmIiwidXBkYXRlQ29udGFpbmVyIiwidG9CbG9iIiwiYmxvYiIsInNhdmVBcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7Q0FFQTs7QUFDQTtBQUNBO0NBSUE7O0FBQ0FBLHlEQUFJLENBQUNDLFFBQUwsQ0FBYztBQUFFQyxLQUFHLEVBQUUsc0JBQVA7QUFBK0JDLFFBQU0sRUFBRTtBQUF2QyxDQUFkO0FBRUEsSUFBTUMsTUFBTSxHQUFHQywrREFBVSxDQUFDQyxNQUFYLENBQWtCO0FBQy9CQyxVQUFRLEVBQUU7QUFDUkMsV0FBTyxFQUFFLEVBREQ7QUFFUkMsY0FBVSxFQUFFLFdBRko7QUFHUkMsbUJBQWUsRUFBRSxTQUhUO0FBSVJDLFNBQUssRUFBRTtBQUpDLEdBRHFCO0FBTy9CQyxXQUFTLEVBQUU7QUFDVEMsWUFB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O0FBRlo7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFERixlQUtFO0FBQUssbUJBQUcsRUFBQyw0QkFBVDtBQUFzQyxzQkFBTSxFQUFFLEVBQTlDO0FBQWtELHFCQUFLLEVBQUU7QUFBekQ7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFMRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQWxCRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBTEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBVkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBbkJKO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQW1GRCxDQXRKRDs7R0FBTUgsYztVQUlTUSxrRTs7O01BSlRSLGM7QUF3SlNBLDZFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2Rhc2hib2FyZC9wcm9qZWN0cy9bcHJvamVjdF0vY29tcGV0aXRvcnMuNjdmNGJmZWIwMTgwZWYxYTJlMmMuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVJlZiwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IHNhdmVBcyB9IGZyb20gJ2ZpbGUtc2F2ZXInO1xyXG5pbXBvcnQgUm91dGVyIGZyb20gJ25leHQvcm91dGVyJztcclxuaW1wb3J0IENvb2tpZXMgZnJvbSAnanMtY29va2llJztcclxuaW1wb3J0IHsgZGIgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi8uLi9saWIvZmlyZWJhc2UnO1xyXG4vLyBpbXBvcnQgZm9udCBmcm9tICcuLi8uLi8uLi8uLi8uLi8uLi9wdWJsaWMvZm9udHMvY29tZm9ydGFhLnR0Zic7XHJcbmltcG9ydCBnc2FwLCB7IExpbmVhciB9IGZyb20gJ2dzYXAnO1xyXG5pbXBvcnQgeyB1c2VXaW5kb3dTaXplIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vLi4vdXRpbHMvdXNlV2luZG93U2l6ZSc7XHJcblxyXG5pbXBvcnQgeyBGb250LCBwZGYsIFBhZ2UsIFRleHQsIFZpZXcsIEltYWdlLCBEb2N1bWVudCwgU3R5bGVTaGVldCwgUERGVmlld2VyLCBQREZEb3dubG9hZExpbmsgfSBmcm9tICdAcmVhY3QtcGRmL3JlbmRlcmVyJztcclxuXHJcbi8vIEZvbnQucmVnaXN0ZXIoeyBzcmM6ICcvZm9udHMvcG9wcGlucy50dGYnLCBmYW1pbHk6ICdQb3BwaW5zJywgZm9ybWF0OiAndHJ1ZXR5cGUnIH0pO1xyXG5Gb250LnJlZ2lzdGVyKHsgc3JjOiAnL2ZvbnRzL2NvbWZvcnRhYS50dGYnLCBmYW1pbHk6ICdDb21mb3J0YWEnIH0pO1xyXG5cclxuY29uc3Qgc3R5bGVzID0gU3R5bGVTaGVldC5jcmVhdGUoe1xyXG4gIGhvbWVQYWdlOiB7XHJcbiAgICBwYWRkaW5nOiAzNixcclxuICAgIGZvbnRGYW1pbHk6ICdDb21mb3J0YWEnLFxyXG4gICAgYmFja2dyb3VuZENvbG9yOiAnI2Y4ZjlmYicsXHJcbiAgICBjb2xvcjogJyMwYTEyMzAnLFxyXG4gIH0sXHJcbiAgbWFpblRpdGxlOiB7XHJcbiAgICBmb250U2l6ZTogMjIsXHJcbiAgICBjb2xvcjogJyMwYTEyMzAnLFxyXG4gICAgdGV4dEFsaWduOiAnY2VudGVyJyxcclxuICAgIHBhZGRpbmdCb3R0b206IDQyLFxyXG4gIH0sXHJcbn0pO1xyXG5cclxuY29uc3QgTXlEb2N1bWVudCA9ICh7IGNvbXBldGl0b3JzIH0pID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPERvY3VtZW50IHNjYWxlPXs5NiAvIDcyfSByZW5kZXJNb2RlPVwic3ZnXCI+XHJcbiAgICAgIHtjb21wZXRpdG9ycy5tYXAoKGNvbXBldGl0b3IsIGluZGV4KSA9PiAoXHJcbiAgICAgICAgPFBhZ2Ugc2l6ZT1cIkE0XCIgc3R5bGU9e3N0eWxlcy5ob21lUGFnZX0+XHJcbiAgICAgICAgICB7aW5kZXggPT09IDAgJiYgKFxyXG4gICAgICAgICAgICA8Vmlldz5cclxuICAgICAgICAgICAgICA8VGV4dCBzdHlsZT17c3R5bGVzLm1haW5UaXRsZX0+Q29tcGV0aXRvcnMgYW5hbHlzaXM8L1RleHQ+XHJcbiAgICAgICAgICAgIDwvVmlldz5cclxuICAgICAgICAgICl9XHJcbiAgICAgICAgICA8VmlldyBzdHlsZT17eyBkaXNwbGF5OiAnZmxleCcsIGZsZXhEaXJlY3Rpb246ICdyb3cnIH19PlxyXG4gICAgICAgICAgICB7Y29tcGV0aXRvci5pbWFnZSA9PT0gJycgPyAoXHJcbiAgICAgICAgICAgICAgPFZpZXdcclxuICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgIGhlaWdodDogNzIsXHJcbiAgICAgICAgICAgICAgICAgIHdpZHRoOiA3MixcclxuICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiAnIzZDNjNGRicsXHJcbiAgICAgICAgICAgICAgICAgIGJvcmRlclJhZGl1czogOTk5OSxcclxuICAgICAgICAgICAgICAgICAgZGlzcGxheTogJ2ZsZXgnLFxyXG4gICAgICAgICAgICAgICAgICBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsXHJcbiAgICAgICAgICAgICAgICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxyXG4gICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8SW1hZ2Ugc3JjPVwiL2NvbXBldGl0b3JzL2VtcHR5LWltYWdlLXBkZi5wbmdcIiBoZWlnaHQ9ezY0fSB3aWR0aD17NjR9IC8+XHJcbiAgICAgICAgICAgICAgPC9WaWV3PlxyXG4gICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgIDxWaWV3PjwvVmlldz5cclxuICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgey8qIENvbXBhbnkgb3ZlcnZpZXcgc3RhcnQgKi99XHJcbiAgICAgICAgICAgIDxWaWV3IHN0eWxlPXt7IGZvbnRTaXplOiAxMiB9fT5cclxuICAgICAgICAgICAgICA8Vmlld1xyXG4gICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgZGlzcGxheTogJ2ZsZXgnLFxyXG4gICAgICAgICAgICAgICAgICBmbGV4RGlyZWN0aW9uOiAncm93JyxcclxuICAgICAgICAgICAgICAgICAganVzdGlmeUNvbnRlbnQ6ICdzcGFjZS1iZXR3ZWVuJyxcclxuICAgICAgICAgICAgICAgICAgYWxpZ25Db250ZW50OiAnc3BhY2UtYmV0d2VlbicsXHJcbiAgICAgICAgICAgICAgICAgIG1hcmdpbkxlZnQ6IDMyLFxyXG4gICAgICAgICAgICAgICAgICB3aWR0aDogJzEwMCUnLFxyXG4gICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICB7Y29tcGV0aXRvci50aXRsZSAhPT0gJycgJiYgKFxyXG4gICAgICAgICAgICAgICAgICA8VmlldyBzdHlsZT17eyBiYWNrZ3JvdW5kQ29sb3I6ICcjZmNmZWZlJywgYm9yZGVyUmFkaXVzOiAxNiwgcGFkZGluZ1ZlcnRpY2FsOiA4LCBwYWRkaW5nSG9yaXpvbnRhbDogMTYgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPFRleHQ+bmFtZSAvIHtjb21wZXRpdG9yLnRpdGxlfTwvVGV4dD5cclxuICAgICAgICAgICAgICAgICAgPC9WaWV3PlxyXG4gICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgIHtjb21wZXRpdG9yLmxvY2F0aW9uICE9PSAnJyAmJiAoXHJcbiAgICAgICAgICAgICAgICAgIDxWaWV3IHN0eWxlPXt7IGJhY2tncm91bmRDb2xvcjogJyNmY2ZlZmUnLCBib3JkZXJSYWRpdXM6IDE2LCBwYWRkaW5nVmVydGljYWw6IDgsIHBhZGRpbmdIb3Jpem9udGFsOiAxNiB9fT5cclxuICAgICAgICAgICAgICAgICAgICA8VGV4dD5sb2NhdGlvbiAvIHtjb21wZXRpdG9yLmxvY2F0aW9ufTwvVGV4dD5cclxuICAgICAgICAgICAgICAgICAgPC9WaWV3PlxyXG4gICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICA8L1ZpZXc+XHJcbiAgICAgICAgICAgICAgPFZpZXdcclxuICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgIGRpc3BsYXk6ICdmbGV4JyxcclxuICAgICAgICAgICAgICAgICAgZmxleERpcmVjdGlvbjogJ3JvdycsXHJcbiAgICAgICAgICAgICAgICAgIGp1c3RpZnlDb250ZW50OiAnc3BhY2UtYmV0d2VlbicsXHJcbiAgICAgICAgICAgICAgICAgIGFsaWduQ29udGVudDogJ3NwYWNlLWJldHdlZW4nLFxyXG4gICAgICAgICAgICAgICAgICBtYXJnaW5MZWZ0OiAzMixcclxuICAgICAgICAgICAgICAgICAgbWFyZ2luVG9wOiAxMixcclxuICAgICAgICAgICAgICAgICAgd2lkdGg6ICcxMDAlJyxcclxuICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAge2NvbXBldGl0b3IuZW1wbG95ZWVzICE9PSAnJyAmJiAoXHJcbiAgICAgICAgICAgICAgICAgIDxWaWV3IHN0eWxlPXt7IGJhY2tncm91bmRDb2xvcjogJyNmY2ZlZmUnLCBib3JkZXJSYWRpdXM6IDE2LCBwYWRkaW5nVmVydGljYWw6IDgsIHBhZGRpbmdIb3Jpem9udGFsOiAxNiB9fT5cclxuICAgICAgICAgICAgICAgICAgICA8VGV4dD5lbXBsb3llZXMgLyB7Y29tcGV0aXRvci5lbXBsb3llZXN9PC9UZXh0PlxyXG4gICAgICAgICAgICAgICAgICA8L1ZpZXc+XHJcbiAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAge2NvbXBldGl0b3IucmV2ZW51ZSAhPT0gJycgJiYgKFxyXG4gICAgICAgICAgICAgICAgICA8VmlldyBzdHlsZT17eyBiYWNrZ3JvdW5kQ29sb3I6ICcjZmNmZWZlJywgYm9yZGVyUmFkaXVzOiAxNiwgcGFkZGluZ1ZlcnRpY2FsOiA4LCBwYWRkaW5nSG9yaXpvbnRhbDogMTYgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPFRleHQ+cmV2ZW51ZSAvIHtjb21wZXRpdG9yLnJldmVudWV9PC9UZXh0PlxyXG4gICAgICAgICAgICAgICAgICA8L1ZpZXc+XHJcbiAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgIDwvVmlldz5cclxuICAgICAgICAgICAgPC9WaWV3PlxyXG4gICAgICAgICAgICB7LyogQ29tcGFueSBvdmVydmlldyBlbmQgKi99XHJcbiAgICAgICAgICA8L1ZpZXc+XHJcbiAgICAgICAgICB7LyogQ29tcGFueSBkZXNjcmlwdGlvbiAqL31cclxuICAgICAgICAgIHtjb21wZXRpdG9yLmNvbXBhbnlEZXNjcmlwdGlvbiAhPT0gJycgJiYgKFxyXG4gICAgICAgICAgICA8VmlldyB3cmFwPXtmYWxzZX0gc3R5bGU9e3sgbWFyZ2luVG9wOiAzMiB9fT5cclxuICAgICAgICAgICAgICA8VmlldyBzdHlsZT17eyBkaXNwbGF5OiAnZmxleCcsIGZsZXhEaXJlY3Rpb246ICdyb3cnLCBhbGlnbkl0ZW1zOiAnZmxleC1lbmQnLCBmb250U2l6ZTogMTQgfX0+XHJcbiAgICAgICAgICAgICAgICA8SW1hZ2Ugc3JjPVwiL2NvbXBldGl0b3JzL3BkZi9kZXNjcmlwdGlvbi5wbmdcIiBzdHlsZT17eyBoZWlnaHQ6IDIwLCB3aWR0aDogMjAgfX0gLz5cclxuICAgICAgICAgICAgICAgIDxUZXh0IHN0eWxlPXt7IG1hcmdpbkxlZnQ6IDggfX0+Q29tcGFueSBkZXNjcmlwdGlvbjwvVGV4dD5cclxuICAgICAgICAgICAgICA8L1ZpZXc+XHJcbiAgICAgICAgICAgICAgPFZpZXdcclxuICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogJyNmY2ZlZmUnLFxyXG4gICAgICAgICAgICAgICAgICBib3JkZXJSYWRpdXM6IDE2LFxyXG4gICAgICAgICAgICAgICAgICBwYWRkaW5nVmVydGljYWw6IDEyLFxyXG4gICAgICAgICAgICAgICAgICBwYWRkaW5nSG9yaXpvbnRhbDogMTYsXHJcbiAgICAgICAgICAgICAgICAgIG1hcmdpblRvcDogOCxcclxuICAgICAgICAgICAgICAgICAgZm9udFNpemU6IDEwLFxyXG4gICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8VGV4dD57Y29tcGV0aXRvci5jb21wYW55RGVzY3JpcHRpb259PC9UZXh0PlxyXG4gICAgICAgICAgICAgIDwvVmlldz5cclxuICAgICAgICAgICAgPC9WaWV3PlxyXG4gICAgICAgICAgKX1cclxuICAgICAgICAgIHtjb21wZXRpdG9yLmJ1c2luZXNzTW9kZWwgIT09ICcnICYmIChcclxuICAgICAgICAgICAgPFZpZXcgd3JhcD17ZmFsc2V9IHN0eWxlPXt7IG1hcmdpblRvcDogMzIgfX0+XHJcbiAgICAgICAgICAgICAgPFZpZXcgc3R5bGU9e3sgZGlzcGxheTogJ2ZsZXgnLCBmbGV4RGlyZWN0aW9uOiAncm93JywgYWxpZ25JdGVtczogJ2ZsZXgtZW5kJywgZm9udFNpemU6IDE0IH19PlxyXG4gICAgICAgICAgICAgICAgPEltYWdlIHNyYz1cIi9jb21wZXRpdG9ycy9wZGYvbW9kZWwucG5nXCIgc3R5bGU9e3sgaGVpZ2h0OiAyMCwgd2lkdGg6IDIwIH19IC8+XHJcbiAgICAgICAgICAgICAgICA8VGV4dCBzdHlsZT17eyBtYXJnaW5MZWZ0OiA4IH19PkJ1c2luZXNzIG1vZGVsPC9UZXh0PlxyXG4gICAgICAgICAgICAgIDwvVmlldz5cclxuICAgICAgICAgICAgICA8Vmlld1xyXG4gICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiAnI2ZjZmVmZScsXHJcbiAgICAgICAgICAgICAgICAgIGJvcmRlclJhZGl1czogMTYsXHJcbiAgICAgICAgICAgICAgICAgIHBhZGRpbmdWZXJ0aWNhbDogMTIsXHJcbiAgICAgICAgICAgICAgICAgIHBhZGRpbmdIb3Jpem9udGFsOiAxNixcclxuICAgICAgICAgICAgICAgICAgbWFyZ2luVG9wOiA4LFxyXG4gICAgICAgICAgICAgICAgICBmb250U2l6ZTogMTAsXHJcbiAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxUZXh0Pntjb21wZXRpdG9yLmJ1c2luZXNzTW9kZWx9PC9UZXh0PlxyXG4gICAgICAgICAgICAgIDwvVmlldz5cclxuICAgICAgICAgICAgPC9WaWV3PlxyXG4gICAgICAgICAgKX1cclxuICAgICAgICAgIHtjb21wZXRpdG9yLnByb2R1Y3RPdmVydmlldyAhPT0gJycgJiYgKFxyXG4gICAgICAgICAgICA8VmlldyB3cmFwPXtmYWxzZX0gc3R5bGU9e3sgbWFyZ2luVG9wOiAzMiB9fT5cclxuICAgICAgICAgICAgICA8VmlldyBzdHlsZT17eyBkaXNwbGF5OiAnZmxleCcsIGZsZXhEaXJlY3Rpb246ICdyb3cnLCBhbGlnbkl0ZW1zOiAnZmxleC1lbmQnLCBmb250U2l6ZTogMTQgfX0+XHJcbiAgICAgICAgICAgICAgICA8SW1hZ2Ugc3JjPVwiL2NvbXBldGl0b3JzL3BkZi9wcm9kdWN0LnBuZ1wiIHN0eWxlPXt7IGhlaWdodDogMjAsIHdpZHRoOiAyMCB9fSAvPlxyXG4gICAgICAgICAgICAgICAgPFRleHQgc3R5bGU9e3sgbWFyZ2luTGVmdDogOCB9fT5Qcm9kdWN0IG92ZXJ2aWV3PC9UZXh0PlxyXG4gICAgICAgICAgICAgIDwvVmlldz5cclxuICAgICAgICAgICAgICA8Vmlld1xyXG4gICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiAnI2ZjZmVmZScsXHJcbiAgICAgICAgICAgICAgICAgIGJvcmRlclJhZGl1czogMTYsXHJcbiAgICAgICAgICAgICAgICAgIHBhZGRpbmdWZXJ0aWNhbDogMTIsXHJcbiAgICAgICAgICAgICAgICAgIHBhZGRpbmdIb3Jpem9udGFsOiAxNixcclxuICAgICAgICAgICAgICAgICAgbWFyZ2luVG9wOiA4LFxyXG4gICAgICAgICAgICAgICAgICBmb250U2l6ZTogMTAsXHJcbiAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxUZXh0Pntjb21wZXRpdG9yLnByb2R1Y3RPdmVydmlld308L1RleHQ+XHJcbiAgICAgICAgICAgICAgPC9WaWV3PlxyXG4gICAgICAgICAgICA8L1ZpZXc+XHJcbiAgICAgICAgICApfVxyXG4gICAgICAgICAge2NvbXBldGl0b3IucHJvbW90aW9uU3RyYXRlZ3kgIT09ICcnICYmIChcclxuICAgICAgICAgICAgPFZpZXcgd3JhcD17ZmFsc2V9IHN0eWxlPXt7IG1hcmdpblRvcDogMzIgfX0+XHJcbiAgICAgICAgICAgICAgPFZpZXcgc3R5bGU9e3sgZGlzcGxheTogJ2ZsZXgnLCBmbGV4RGlyZWN0aW9uOiAncm93JywgYWxpZ25JdGVtczogJ2ZsZXgtZW5kJywgZm9udFNpemU6IDE0IH19PlxyXG4gICAgICAgICAgICAgICAgPEltYWdlIHNyYz1cIi9jb21wZXRpdG9ycy9wZGYvcHJvbW90aW9uLnBuZ1wiIHN0eWxlPXt7IGhlaWdodDogMjAsIHdpZHRoOiAyMCB9fSAvPlxyXG4gICAgICAgICAgICAgICAgPFRleHQgc3R5bGU9e3sgbWFyZ2luTGVmdDogOCB9fT5Qcm9tb3Rpb24gc3RyYXRlZ3k8L1RleHQ+XHJcbiAgICAgICAgICAgICAgPC9WaWV3PlxyXG4gICAgICAgICAgICAgIDxWaWV3XHJcbiAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjZmNmZWZlJyxcclxuICAgICAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiAxNixcclxuICAgICAgICAgICAgICAgICAgcGFkZGluZ1ZlcnRpY2FsOiAxMixcclxuICAgICAgICAgICAgICAgICAgcGFkZGluZ0hvcml6b250YWw6IDE2LFxyXG4gICAgICAgICAgICAgICAgICBtYXJnaW5Ub3A6IDgsXHJcbiAgICAgICAgICAgICAgICAgIGZvbnRTaXplOiAxMCxcclxuICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPFRleHQ+e2NvbXBldGl0b3IucHJvbW90aW9uU3RyYXRlZ3l9PC9UZXh0PlxyXG4gICAgICAgICAgICAgIDwvVmlldz5cclxuICAgICAgICAgICAgPC9WaWV3PlxyXG4gICAgICAgICAgKX1cclxuICAgICAgICAgIHtjb21wZXRpdG9yLmNvbXBhbnlTdHJlbmd0aHMgIT09ICcnICYmIChcclxuICAgICAgICAgICAgPFZpZXcgd3JhcD17ZmFsc2V9IHN0eWxlPXt7IG1hcmdpblRvcDogMzIgfX0+XHJcbiAgICAgICAgICAgICAgPFZpZXcgc3R5bGU9e3sgZGlzcGxheTogJ2ZsZXgnLCBmbGV4RGlyZWN0aW9uOiAncm93JywgYWxpZ25JdGVtczogJ2ZsZXgtZW5kJywgZm9udFNpemU6IDE0IH19PlxyXG4gICAgICAgICAgICAgICAgPEltYWdlIHNyYz1cIi9jb21wZXRpdG9ycy9wZGYvc3RyZW5ndGhzLnBuZ1wiIHN0eWxlPXt7IGhlaWdodDogMjAsIHdpZHRoOiAyMCB9fSAvPlxyXG4gICAgICAgICAgICAgICAgPFRleHQgc3R5bGU9e3sgbWFyZ2luTGVmdDogOCB9fT5Db21wYW55IHN0cmVuZ3RoczwvVGV4dD5cclxuICAgICAgICAgICAgICA8L1ZpZXc+XHJcbiAgICAgICAgICAgICAgPFZpZXdcclxuICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogJyNmY2ZlZmUnLFxyXG4gICAgICAgICAgICAgICAgICBib3JkZXJSYWRpdXM6IDE2LFxyXG4gICAgICAgICAgICAgICAgICBwYWRkaW5nVmVydGljYWw6IDEyLFxyXG4gICAgICAgICAgICAgICAgICBwYWRkaW5nSG9yaXpvbnRhbDogMTYsXHJcbiAgICAgICAgICAgICAgICAgIG1hcmdpblRvcDogOCxcclxuICAgICAgICAgICAgICAgICAgZm9udFNpemU6IDEwLFxyXG4gICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8VGV4dD57Y29tcGV0aXRvci5jb21wYW55U3RyZW5ndGhzfTwvVGV4dD5cclxuICAgICAgICAgICAgICA8L1ZpZXc+XHJcbiAgICAgICAgICAgIDwvVmlldz5cclxuICAgICAgICAgICl9XHJcbiAgICAgICAgICB7Y29tcGV0aXRvci5jb21wYW55V2Vha25lc3NlcyAhPT0gJycgJiYgKFxyXG4gICAgICAgICAgICA8VmlldyB3cmFwPXtmYWxzZX0gc3R5bGU9e3sgbWFyZ2luVG9wOiAzMiB9fT5cclxuICAgICAgICAgICAgICA8VmlldyBzdHlsZT17eyBkaXNwbGF5OiAnZmxleCcsIGZsZXhEaXJlY3Rpb246ICdyb3cnLCBhbGlnbkl0ZW1zOiAnZmxleC1lbmQnLCBmb250U2l6ZTogMTQgfX0+XHJcbiAgICAgICAgICAgICAgICA8SW1hZ2Ugc3JjPVwiL2NvbXBldGl0b3JzL3BkZi93ZWFrbmVzc2VzLnBuZ1wiIHN0eWxlPXt7IGhlaWdodDogMjAsIHdpZHRoOiAyMCB9fSAvPlxyXG4gICAgICAgICAgICAgICAgPFRleHQgc3R5bGU9e3sgbWFyZ2luTGVmdDogOCB9fT5Db21wYW55IHdlYWtuZXNzZXM8L1RleHQ+XHJcbiAgICAgICAgICAgICAgPC9WaWV3PlxyXG4gICAgICAgICAgICAgIDxWaWV3XHJcbiAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjZmNmZWZlJyxcclxuICAgICAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiAxNixcclxuICAgICAgICAgICAgICAgICAgcGFkZGluZ1ZlcnRpY2FsOiAxMixcclxuICAgICAgICAgICAgICAgICAgcGFkZGluZ0hvcml6b250YWw6IDE2LFxyXG4gICAgICAgICAgICAgICAgICBtYXJnaW5Ub3A6IDgsXHJcbiAgICAgICAgICAgICAgICAgIGZvbnRTaXplOiAxMCxcclxuICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPFRleHQ+e2NvbXBldGl0b3IuY29tcGFueVdlYWtuZXNzZXN9PC9UZXh0PlxyXG4gICAgICAgICAgICAgIDwvVmlldz5cclxuICAgICAgICAgICAgPC9WaWV3PlxyXG4gICAgICAgICAgKX1cclxuICAgICAgICAgIHtjb21wZXRpdG9yLm9wcG9ydHVuaXRpZXMgIT09ICcnICYmIChcclxuICAgICAgICAgICAgPFZpZXcgd3JhcD17ZmFsc2V9IHN0eWxlPXt7IG1hcmdpblRvcDogMzIgfX0+XHJcbiAgICAgICAgICAgICAgPFZpZXcgc3R5bGU9e3sgZGlzcGxheTogJ2ZsZXgnLCBmbGV4RGlyZWN0aW9uOiAncm93JywgYWxpZ25JdGVtczogJ2ZsZXgtZW5kJywgZm9udFNpemU6IDE0IH19PlxyXG4gICAgICAgICAgICAgICAgPEltYWdlIHNyYz1cIi9jb21wZXRpdG9ycy9wZGYvb3Bwb3J0dW5pdGllcy5wbmdcIiBzdHlsZT17eyBoZWlnaHQ6IDIwLCB3aWR0aDogMjAgfX0gLz5cclxuICAgICAgICAgICAgICAgIDxUZXh0IHN0eWxlPXt7IG1hcmdpbkxlZnQ6IDggfX0+Q29tcGFueSBvcHBvcnR1bml0aWVzPC9UZXh0PlxyXG4gICAgICAgICAgICAgIDwvVmlldz5cclxuICAgICAgICAgICAgICA8Vmlld1xyXG4gICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiAnI2ZjZmVmZScsXHJcbiAgICAgICAgICAgICAgICAgIGJvcmRlclJhZGl1czogMTYsXHJcbiAgICAgICAgICAgICAgICAgIHBhZGRpbmdWZXJ0aWNhbDogMTIsXHJcbiAgICAgICAgICAgICAgICAgIHBhZGRpbmdIb3Jpem9udGFsOiAxNixcclxuICAgICAgICAgICAgICAgICAgbWFyZ2luVG9wOiA4LFxyXG4gICAgICAgICAgICAgICAgICBmb250U2l6ZTogMTAsXHJcbiAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxUZXh0Pntjb21wZXRpdG9yLm9wcG9ydHVuaXRpZXN9PC9UZXh0PlxyXG4gICAgICAgICAgICAgIDwvVmlldz5cclxuICAgICAgICAgICAgPC9WaWV3PlxyXG4gICAgICAgICAgKX1cclxuICAgICAgICA8L1BhZ2U+XHJcbiAgICAgICkpfVxyXG4gICAgPC9Eb2N1bWVudD5cclxuICApO1xyXG59O1xyXG5cclxuY29uc3QgQ29tcGV0aXRvcnNQREYgPSAoKSA9PiB7XHJcbiAgY29uc3QgW2NvbXBldGl0b3JzLCBzZXRDb21wZXRpdG9yc10gPSB1c2VTdGF0ZShudWxsKTtcclxuICBjb25zdCBbcHJvamVjdElkLCBzZXRQcm9qZWN0SWRdID0gdXNlU3RhdGUoJycpO1xyXG4gIGNvbnN0IFtwcm9qZWN0TmFtZSwgc2V0UHJvamVjdE5hbWVdID0gdXNlU3RhdGUoJycpO1xyXG4gIGNvbnN0IHNpemUgPSB1c2VXaW5kb3dTaXplKCk7XHJcbiAgdXNlRWZmZWN0KGFzeW5jICgpID0+IHtcclxuICAgIGNvbnN0IHVzZXJVaWQgPSBhd2FpdCBDb29raWVzLmdldCgndWlkJyk7XHJcbiAgICAvLyBjb25zb2xlLmxvZyhSb3V0ZXIucXVlcnkucHJvamVjdCk7XHJcbiAgICBjb25zb2xlLmxvZyh1c2VyVWlkKTtcclxuICAgIGlmICh1c2VyVWlkICYmIFJvdXRlci5xdWVyeS5wcm9qZWN0KSB7XHJcbiAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCBkYi5jb2xsZWN0aW9uKCdwcm9qZWN0cycpLndoZXJlKCd1aWQnLCAnPT0nLCB1c2VyVWlkKTtcclxuICAgICAgZGF0YVxyXG4gICAgICAgIC53aGVyZSgncHJvamVjdE5hbWUnLCAnPT0nLCBSb3V0ZXIucXVlcnkucHJvamVjdClcclxuICAgICAgICAuZ2V0KClcclxuICAgICAgICAudGhlbigocXVlcnlTbmFwc2hvdCkgPT4ge1xyXG4gICAgICAgICAgcXVlcnlTbmFwc2hvdC5mb3JFYWNoKGFzeW5jIChkb2MxKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IHByb2plY3RJZCA9IGRvYzEuZGF0YSgpLnByb2plY3RJZDtcclxuICAgICAgICAgICAgY29uc3QgcHJvamVjdE5hbWUgPSBkb2MxLmRhdGEoKS5wcm9qZWN0TmFtZTtcclxuICAgICAgICAgICAgc2V0UHJvamVjdElkKHByb2plY3RJZCk7XHJcbiAgICAgICAgICAgIHNldFByb2plY3ROYW1lKHByb2plY3ROYW1lKTtcclxuICAgICAgICAgICAgZGIuY29sbGVjdGlvbigncHJvamVjdHMnKVxyXG4gICAgICAgICAgICAgIC5kb2MoZG9jMS5kYXRhKCkucHJvamVjdElkKVxyXG4gICAgICAgICAgICAgIC5jb2xsZWN0aW9uKCdjb21wZXRpdG9ycycpXHJcbiAgICAgICAgICAgICAgLmRvYyhSb3V0ZXIucXVlcnkucHJvamVjdClcclxuICAgICAgICAgICAgICAuY29sbGVjdGlvbignaW5wdXRzJylcclxuICAgICAgICAgICAgICAub25TbmFwc2hvdCgoc2VydmVyVXBkYXRlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBzZXJ2ZXJVcGRhdGUuZG9jcy5tYXAoKGRvYykgPT4ge1xyXG4gICAgICAgICAgICAgICAgICBjb25zdCBkYXRhID0gZG9jLmRhdGEoKTtcclxuICAgICAgICAgICAgICAgICAgc2V0Q29tcGV0aXRvcnMoZGF0YS5jb21wZXRpdG9yc0FycmF5KTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfSwgW10pO1xyXG4gIGNvbnNvbGUubG9nKHByb2plY3RJZCk7XHJcblxyXG4gIGNvbnN0IHNhdmVDb250YWluZXIgPSB1c2VSZWYoKTtcclxuICBjb25zdCBbc2F2ZUNvbnRhaW5lckhlbHBlciwgc2V0U2F2ZUNvbnRhaW5lckhlbHBlcl0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3Qgc2F2ZVNlY3Rpb25Ecm9wRG93biA9ICgpID0+IHtcclxuICAgIGlmICghc2F2ZUNvbnRhaW5lckhlbHBlcikge1xyXG4gICAgICBnc2FwLnRvKHNhdmVDb250YWluZXIuY3VycmVudCwgeyBhdXRvQWxwaGE6IDEsIGR1cmF0aW9uOiAxLCBlYXNlOiBMaW5lYXIgfSk7XHJcbiAgICAgIHNldFNhdmVDb250YWluZXJIZWxwZXIodHJ1ZSk7XHJcbiAgICB9IGVsc2UgaWYgKHNhdmVDb250YWluZXJIZWxwZXIpIHtcclxuICAgICAgZ3NhcC50byhzYXZlQ29udGFpbmVyLmN1cnJlbnQsIHsgYXV0b0FscGhhOiAwLCBkdXJhdGlvbjogMSwgZWFzZTogTGluZWFyIH0pO1xyXG4gICAgICBzZXRTYXZlQ29udGFpbmVySGVscGVyKGZhbHNlKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICBjb25zdCBkcm9wZG93bkJ1dHRvbiA9IHVzZVJlZigpO1xyXG4gIGNvbnN0IGRyb3Bkb3duQ29udGFpbmVyID0gdXNlUmVmKCk7XHJcbiAgY29uc3QgW2Ryb3Bkb3duQnV0dG9uQ29sb3JIZWxwZXIsIHNldERyb3Bkb3duQnV0dG9uQ29sb3JIZWxwZXJdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IFtkcm9wZG93bkNvbnRhaW5lckhlbHBlciwgc2V0RHJvcGRvd25Db250YWluZXJIZWxwZXJdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IG9uU2F2ZURyb3Bkb3duU2hvdyA9ICgpID0+IHtcclxuICAgIGlmICghZHJvcGRvd25Db250YWluZXJIZWxwZXIpIHtcclxuICAgICAgZ3NhcC50byhkcm9wZG93bkNvbnRhaW5lci5jdXJyZW50LCB7IGF1dG9BbHBoYTogMSwgZHVyYXRpb246IDEsIGVhc2U6IExpbmVhciB9KTtcclxuICAgICAgLy8gZ3NhcC50byhkcm9wZG93bkJ1dHRvbi5jdXJyZW50LCB7IGJhY2tncm91bmRDb2xvcjogJyM2QzYzRkYnLCBjb2xvcjogJyNmOGY5ZmInLCBkdXJhdGlvbjogMSwgZWFzZTogTGluZWFyIH0pO1xyXG4gICAgICBzZXREcm9wZG93bkNvbnRhaW5lckhlbHBlcih0cnVlKTtcclxuICAgICAgc2V0RHJvcGRvd25CdXR0b25Db2xvckhlbHBlcih0cnVlKTtcclxuICAgIH0gZWxzZSBpZiAoZHJvcGRvd25Db250YWluZXJIZWxwZXIpIHtcclxuICAgICAgZ3NhcC50byhkcm9wZG93bkNvbnRhaW5lci5jdXJyZW50LCB7IGF1dG9BbHBoYTogMCwgZHVyYXRpb246IDEsIGVhc2U6IExpbmVhciB9KTtcclxuICAgICAgLy8gZ3NhcC50byhkcm9wZG93bkJ1dHRvbi5jdXJyZW50LCB7IGJhY2tncm91bmRDb2xvcjogJyNmOGY5ZmInLCBjb2xvcjogJyM2QzYzRkYnLCBkdXJhdGlvbjogMSwgZWFzZTogTGluZWFyIH0pO1xyXG4gICAgICBzZXREcm9wZG93bkNvbnRhaW5lckhlbHBlcihmYWxzZSk7XHJcbiAgICAgIHNldERyb3Bkb3duQnV0dG9uQ29sb3JIZWxwZXIoZmFsc2UpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IHJlZj17c2F2ZUNvbnRhaW5lcn0gY2xhc3NOYW1lPVwicmVsYXRpdmUgZmxleCBqdXN0aWZ5LXN0YXJ0XCI+XHJcbiAgICAgIHtzaXplLndpZHRoIDwgNjgwID8gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBtdC00XCI+XHJcbiAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgIG9uQ2xpY2s9e2FzeW5jIChlKSA9PiB7XHJcbiAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICAgIGNvbnN0IGRvYyA9IDxNeURvY3VtZW50IGNvbXBldGl0b3JzPXtjb21wZXRpdG9yc30gLz47XHJcbiAgICAgICAgICAgICAgY29uc3QgYXNQZGYgPSBwZGYoW10pO1xyXG4gICAgICAgICAgICAgIGFzUGRmLnVwZGF0ZUNvbnRhaW5lcihkb2MpO1xyXG4gICAgICAgICAgICAgIGNvbnN0IGJsb2IgPSBhd2FpdCBhc1BkZi50b0Jsb2IoKTtcclxuICAgICAgICAgICAgICBzYXZlQXMoYmxvYiwgYCR7Um91dGVyLnF1ZXJ5LnByb2plY3R9L2NvbXBldGl0b3JzLWFuYWx5c2lzLnBkZmApO1xyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICBzcmM9XCIvbW9iaWxlLW5hdmJhci9wZGYuc3ZnXCJcclxuICAgICAgICAgICAgaGVpZ2h0PXszMH1cclxuICAgICAgICAgICAgd2lkdGg9ezMwfVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICAgIHsvKiA8aW1nIHNyYz1cIi9tb2JpbGUtbmF2YmFyL2xpbmsuc3ZnXCIgaGVpZ2h0PXszMH0gd2lkdGg9ezMwfSAvPiAqL31cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgKSA6IChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlbGF0aXZlIHctZnVsbCBmbGV4IGp1c3RpZnktZW5kIGl0ZW1zLWNlbnRlclwiPlxyXG4gICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICByZWY9e2Ryb3Bkb3duQnV0dG9ufVxyXG4gICAgICAgICAgICBvbkNsaWNrPXtvblNhdmVEcm9wZG93blNob3d9XHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT17YGhvdmVyOmJnLXByaW1hcnkgaG92ZXI6dGV4dC13aGl0ZSBkYXJrOmhvdmVyOmJnLXByaW1hcnlkYXJrIGRhcms6aG92ZXI6dGV4dC1iYWNrZ3JvdW5kIGZvY3VzOm91dGxpbmUtbm9uZSBib3JkZXIgYm9yZGVyLXByaW1hcnkgdGV4dC1wcmltYXJ5IHRleHQtc20gZm9udC1saWdodCBweS0yIHB4LTggcm91bmRlZC0yeGwgbXQtMiBkYXJrOnRleHQtcHJpbWFyeWRhcmsgZGFyazpib3JkZXItcHJpbWFyeWRhcmsgJHtcclxuICAgICAgICAgICAgICBkcm9wZG93bkJ1dHRvbkNvbG9ySGVscGVyID8gJ2JnLXByaW1hcnkgdGV4dC1iYWNrZ3JvdW5kIGRhcms6YmctcHJpbWFyeWRhcmsgZGFyazp0ZXh0LWJhY2tncm91bmQnIDogJydcclxuICAgICAgICAgICAgfWB9XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIFNhdmUgbXkgd29ya1xyXG4gICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICA8ZGl2IHJlZj17ZHJvcGRvd25Db250YWluZXJ9IGNsYXNzTmFtZT1cImFic29sdXRlIGJnLXdoaXRlIHJvdW5kZWQtMnhsIHNoYWRvdy14bCBwLTYgdG9wLTE0IHotNTAgaW52aXNpYmxlIG9wYWNpdHktMFwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktc3RhcnRcIj5cclxuICAgICAgICAgICAgICA8aW1nIHNyYz1cIi9tb2JpbGUtbmF2YmFyL3N1Y2Nlc3Muc3ZnXCIgaGVpZ2h0PXsyNn0gd2lkdGg9ezI2fSAvPlxyXG4gICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtbGcgbWwtMlwiPlNob3cgdGhlIHdvcmxkIHlvdXIgd29yayE8L3A+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInB4LTYgcHktNCBiZy1iYWNrZ3JvdW5kIHJvdW5kZWQtMnhsIG10LTIgcHItNlwiPlxyXG4gICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJmbGV4XCI+U2F2ZSBhcyBQREY6PC9wPlxyXG4gICAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXthc3luYyAoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBkb2MgPSA8TXlEb2N1bWVudCBjb21wZXRpdG9ycz17Y29tcGV0aXRvcnN9IC8+O1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGFzUGRmID0gcGRmKFtdKTtcclxuICAgICAgICAgICAgICAgICAgICBhc1BkZi51cGRhdGVDb250YWluZXIoZG9jKTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBibG9iID0gYXdhaXQgYXNQZGYudG9CbG9iKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgc2F2ZUFzKGJsb2IsIGAke1JvdXRlci5xdWVyeS5wcm9qZWN0fS9jb21wZXRpdG9ycy1hbmFseXNpcy5wZGZgKTtcclxuICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgc3JjPVwiL21vYmlsZS1uYXZiYXIvcGRmLnN2Z1wiXHJcbiAgICAgICAgICAgICAgICAgIGhlaWdodD17MzB9XHJcbiAgICAgICAgICAgICAgICAgIHdpZHRoPXszMH1cclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibXQtMiBjdXJzb3ItcG9pbnRlclwiXHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsIGp1c3RpZnktc3RhcnQgaXRlbXMtY2VudGVyIG10LTRcIj5cclxuICAgICAgICAgICAgICAgIDxwPlNoYXJlIHlvdXIgY29tcGV0aXRvcnMgYW5hbHlzaXMgd2l0aCB0aGlzIHB1YmxpYyBsaW5rOjwvcD5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsIGZsZXggbXQtMlwiPlxyXG4gICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17YGh0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9kYXNoYm9hcmQvcHJvamVjdHMvJHtwcm9qZWN0TmFtZX0vY29tcGV0aXRvcnMvJHtwcm9qZWN0SWR9YH1cclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LWZ1bGwgYmctbGlua0JhY2tncm91bmQgdGV4dC1zbSBweC0yIHB5LTEgZGFyazp0ZXh0LXByaW1hcnlkYXJrXCJcclxuICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCIvbW9iaWxlLW5hdmJhci9mb3JlaWduLnN2Z1wiIGhlaWdodD17Mjh9IHdpZHRoPXsyOH0gLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICApfVxyXG4gICAgICB7LyogPGJ1dHRvblxyXG4gICAgICAgIG9uQ2xpY2s9e2FzeW5jIChlKSA9PiB7XHJcbiAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICBjb25zdCBkb2MgPSA8TXlEb2N1bWVudCBjb21wZXRpdG9ycz17Y29tcGV0aXRvcnN9IC8+O1xyXG4gICAgICAgICAgY29uc3QgYXNQZGYgPSBwZGYoW10pO1xyXG4gICAgICAgICAgYXNQZGYudXBkYXRlQ29udGFpbmVyKGRvYyk7XHJcbiAgICAgICAgICBjb25zdCBibG9iID0gYXdhaXQgYXNQZGYudG9CbG9iKCk7XHJcbiAgICAgICAgICBzYXZlQXMoYmxvYiwgYCR7Um91dGVyLnF1ZXJ5LnByb2plY3R9L2NvbXBldGl0b3JzLWFuYWx5c2lzLnBkZmApO1xyXG4gICAgICAgIH19XHJcbiAgICAgICAgY2xhc3NOYW1lPVwiaG92ZXI6YmctcHJpbWFyeSBob3Zlcjp0ZXh0LXdoaXRlIGRhcms6aG92ZXI6YmctcHJpbWFyeWRhcmsgZGFyazpob3Zlcjp0ZXh0LWJhY2tncm91bmQgZm9jdXM6b3V0bGluZS1ub25lIGJvcmRlciBib3JkZXItcHJpbWFyeSB0ZXh0LXByaW1hcnkgdGV4dC1zbSBmb250LWxpZ2h0IHB5LTIgcHgtOCByb3VuZGVkLTJ4bCBtdC0yIGRhcms6dGV4dC1wcmltYXJ5ZGFyayBkYXJrOmJvcmRlci1wcmltYXJ5ZGFya1wiXHJcbiAgICAgID5cclxuICAgICAgICBQREYgU2F2ZVxyXG4gICAgICA8L2J1dHRvbj4gKi99XHJcbiAgICAgIHsvKiA8ZGl2IGNsYXNzTmFtZT1cImFic29sdXRlIHRvcC0xMiB3LTI0IGJnLWJhY2tncm91bmQgc2hhZG93XCI+RXhwb3J0IGFzOjwvZGl2PiAqL31cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDb21wZXRpdG9yc1BERjtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==