webpackHotUpdate_N_E("pages/dashboard/projects/[project]/competitors",{

/***/ "./components/dashboard/startup/project/business-app/competitors/CompetitorsPDF.js":
/*!*****************************************************************************************!*\
  !*** ./components/dashboard/startup/project/business-app/competitors/CompetitorsPDF.js ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var C_off_saas_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var C_off_saas_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/regenerator */ "./node_modules/next/node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var C_off_saas_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(C_off_saas_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var C_off_saas_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! file-saver */ "./node_modules/file-saver/dist/FileSaver.min.js");
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(file_saver__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! js-cookie */ "./node_modules/js-cookie/src/js.cookie.js");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _lib_firebase__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../../lib/firebase */ "./lib/firebase.js");
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! gsap */ "./node_modules/gsap/index.js");
/* harmony import */ var _utils_useWindowSize__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../../../utils/useWindowSize */ "./utils/useWindowSize.js");
/* harmony import */ var _react_pdf_renderer__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @react-pdf/renderer */ "./node_modules/@react-pdf/renderer/lib/react-pdf.browser.es.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_12__);





var _jsxFileName = "C:\\off-saas\\components\\dashboard\\startup\\project\\business-app\\competitors\\CompetitorsPDF.js",
    _this = undefined,
    _s = $RefreshSig$();





 // import font from '../../../../../../public/fonts/comfortaa.ttf';





 // Font.register({ src: '/fonts/poppins.ttf', family: 'Poppins', format: 'truetype' });

_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_11__["Font"].register({
  src: '/fonts/comfortaa.ttf',
  family: 'Comfortaa'
});
var styles = _react_pdf_renderer__WEBPACK_IMPORTED_MODULE_11__["StyleSheet"].create({
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
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_11__["Document"], {
    scale: 96 / 72,
    renderMode: "svg",
    children: competitors.map(function (competitor, index) {
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_11__["Page"], {
        size: "A4",
        style: styles.homePage,
        children: [index === 0 && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_11__["View"], {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_11__["Text"], {
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
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_11__["View"], {
          style: {
            display: 'flex',
            flexDirection: 'row'
          },
          children: [competitor.image === '' ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_11__["View"], {
            style: {
              height: 72,
              width: 72,
              backgroundColor: '#6C63FF',
              borderRadius: 9999,
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center'
            },
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_11__["Image"], {
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
          }, _this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_11__["View"], {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 58,
            columnNumber: 15
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_11__["View"], {
            style: {
              fontSize: 12
            },
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_11__["View"], {
              style: {
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignContent: 'space-between',
                marginLeft: 32,
                width: '100%'
              },
              children: [competitor.title !== '' && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_11__["View"], {
                style: {
                  backgroundColor: '#fcfefe',
                  borderRadius: 16,
                  paddingVertical: 8,
                  paddingHorizontal: 16
                },
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_11__["Text"], {
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
              }, _this), competitor.location !== '' && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_11__["View"], {
                style: {
                  backgroundColor: '#fcfefe',
                  borderRadius: 16,
                  paddingVertical: 8,
                  paddingHorizontal: 16
                },
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_11__["Text"], {
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
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_11__["View"], {
              style: {
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignContent: 'space-between',
                marginLeft: 32,
                marginTop: 12,
                width: '100%'
              },
              children: [competitor.employees !== '' && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_11__["View"], {
                style: {
                  backgroundColor: '#fcfefe',
                  borderRadius: 16,
                  paddingVertical: 8,
                  paddingHorizontal: 16
                },
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_11__["Text"], {
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
              }, _this), competitor.revenue !== '' && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_11__["View"], {
                style: {
                  backgroundColor: '#fcfefe',
                  borderRadius: 16,
                  paddingVertical: 8,
                  paddingHorizontal: 16
                },
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_11__["Text"], {
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
        }, _this), competitor.companyDescription !== '' && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_11__["View"], {
          wrap: false,
          style: {
            marginTop: 32
          },
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_11__["View"], {
            style: {
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'flex-end',
              fontSize: 14
            },
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_11__["Image"], {
              src: "/competitors/pdf/description.png",
              style: {
                height: 20,
                width: 20
              }
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 112,
              columnNumber: 17
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_11__["Text"], {
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
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_11__["View"], {
            style: {
              backgroundColor: '#fcfefe',
              borderRadius: 16,
              paddingVertical: 12,
              paddingHorizontal: 16,
              marginTop: 8,
              fontSize: 10
            },
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_11__["Text"], {
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
        }, _this), competitor.businessModel !== '' && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_11__["View"], {
          wrap: false,
          style: {
            marginTop: 32
          },
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_11__["View"], {
            style: {
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'flex-end',
              fontSize: 14
            },
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_11__["Image"], {
              src: "/competitors/pdf/model.png",
              style: {
                height: 20,
                width: 20
              }
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 132,
              columnNumber: 17
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_11__["Text"], {
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
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_11__["View"], {
            style: {
              backgroundColor: '#fcfefe',
              borderRadius: 16,
              paddingVertical: 12,
              paddingHorizontal: 16,
              marginTop: 8,
              fontSize: 10
            },
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_11__["Text"], {
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
        }, _this), competitor.productOverview !== '' && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_11__["View"], {
          wrap: false,
          style: {
            marginTop: 32
          },
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_11__["View"], {
            style: {
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'flex-end',
              fontSize: 14
            },
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_11__["Image"], {
              src: "/competitors/pdf/product.png",
              style: {
                height: 20,
                width: 20
              }
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 152,
              columnNumber: 17
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_11__["Text"], {
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
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_11__["View"], {
            style: {
              backgroundColor: '#fcfefe',
              borderRadius: 16,
              paddingVertical: 12,
              paddingHorizontal: 16,
              marginTop: 8,
              fontSize: 10
            },
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_11__["Text"], {
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
        }, _this), competitor.promotionStrategy !== '' && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_11__["View"], {
          wrap: false,
          style: {
            marginTop: 32
          },
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_11__["View"], {
            style: {
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'flex-end',
              fontSize: 14
            },
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_11__["Image"], {
              src: "/competitors/pdf/promotion.png",
              style: {
                height: 20,
                width: 20
              }
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 172,
              columnNumber: 17
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_11__["Text"], {
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
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_11__["View"], {
            style: {
              backgroundColor: '#fcfefe',
              borderRadius: 16,
              paddingVertical: 12,
              paddingHorizontal: 16,
              marginTop: 8,
              fontSize: 10
            },
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_11__["Text"], {
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
        }, _this), competitor.companyStrengths !== '' && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_11__["View"], {
          wrap: false,
          style: {
            marginTop: 32
          },
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_11__["View"], {
            style: {
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'flex-end',
              fontSize: 14
            },
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_11__["Image"], {
              src: "/competitors/pdf/strengths.png",
              style: {
                height: 20,
                width: 20
              }
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 192,
              columnNumber: 17
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_11__["Text"], {
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
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_11__["View"], {
            style: {
              backgroundColor: '#fcfefe',
              borderRadius: 16,
              paddingVertical: 12,
              paddingHorizontal: 16,
              marginTop: 8,
              fontSize: 10
            },
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_11__["Text"], {
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
        }, _this), competitor.companyWeaknesses !== '' && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_11__["View"], {
          wrap: false,
          style: {
            marginTop: 32
          },
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_11__["View"], {
            style: {
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'flex-end',
              fontSize: 14
            },
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_11__["Image"], {
              src: "/competitors/pdf/weaknesses.png",
              style: {
                height: 20,
                width: 20
              }
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 212,
              columnNumber: 17
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_11__["Text"], {
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
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_11__["View"], {
            style: {
              backgroundColor: '#fcfefe',
              borderRadius: 16,
              paddingVertical: 12,
              paddingHorizontal: 16,
              marginTop: 8,
              fontSize: 10
            },
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_11__["Text"], {
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
        }, _this), competitor.opportunities !== '' && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_11__["View"], {
          wrap: false,
          style: {
            marginTop: 32
          },
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_11__["View"], {
            style: {
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'flex-end',
              fontSize: 14
            },
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_11__["Image"], {
              src: "/competitors/pdf/opportunities.png",
              style: {
                height: 20,
                width: 20
              }
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 232,
              columnNumber: 17
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_11__["Text"], {
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
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_11__["View"], {
            style: {
              backgroundColor: '#fcfefe',
              borderRadius: 16,
              paddingVertical: 12,
              paddingHorizontal: 16,
              marginTop: 8,
              fontSize: 10
            },
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_11__["Text"], {
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

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(null),
      competitors = _useState[0],
      setCompetitors = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(''),
      projectId = _useState2[0],
      setProjectId = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(''),
      projectName = _useState3[0],
      setProjectName = _useState3[1];

  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_6__["useRouter"])();
  var size = Object(_utils_useWindowSize__WEBPACK_IMPORTED_MODULE_10__["useWindowSize"])();
  Object(react__WEBPACK_IMPORTED_MODULE_4__["useEffect"])( /*#__PURE__*/Object(C_off_saas_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/C_off_saas_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee2() {
    var userUid, data;
    return C_off_saas_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return js_cookie__WEBPACK_IMPORTED_MODULE_7___default.a.get('uid');

          case 2:
            userUid = _context2.sent;
            // console.log(Router.query.project);
            console.log(userUid);

            if (!(userUid && next_router__WEBPACK_IMPORTED_MODULE_6___default.a.query.project)) {
              _context2.next = 9;
              break;
            }

            _context2.next = 7;
            return _lib_firebase__WEBPACK_IMPORTED_MODULE_8__["db"].collection('projects').where('uid', '==', userUid);

          case 7:
            data = _context2.sent;
            data.where('projectName', '==', next_router__WEBPACK_IMPORTED_MODULE_6___default.a.query.project).get().then(function (querySnapshot) {
              querySnapshot.forEach( /*#__PURE__*/function () {
                var _ref3 = Object(C_off_saas_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/C_off_saas_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee(doc1) {
                  var projectId, projectName;
                  return C_off_saas_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {
                    while (1) {
                      switch (_context.prev = _context.next) {
                        case 0:
                          projectId = doc1.data().projectId;
                          projectName = doc1.data().projectName;
                          setProjectId(projectId);
                          setProjectName(projectName);
                          _lib_firebase__WEBPACK_IMPORTED_MODULE_8__["db"].collection('projects').doc(doc1.data().projectId).collection('competitors').doc(next_router__WEBPACK_IMPORTED_MODULE_6___default.a.query.project).collection('inputs').onSnapshot(function (serverUpdate) {
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
  var saveContainer = Object(react__WEBPACK_IMPORTED_MODULE_4__["useRef"])();

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(false),
      saveContainerHelper = _useState4[0],
      setSaveContainerHelper = _useState4[1];

  var saveSectionDropDown = function saveSectionDropDown() {
    if (!saveContainerHelper) {
      gsap__WEBPACK_IMPORTED_MODULE_9__["default"].to(saveContainer.current, {
        autoAlpha: 1,
        duration: 1,
        ease: gsap__WEBPACK_IMPORTED_MODULE_9__["Linear"]
      });
      setSaveContainerHelper(true);
    } else if (saveContainerHelper) {
      gsap__WEBPACK_IMPORTED_MODULE_9__["default"].to(saveContainer.current, {
        autoAlpha: 0,
        duration: 1,
        ease: gsap__WEBPACK_IMPORTED_MODULE_9__["Linear"]
      });
      setSaveContainerHelper(false);
    }
  };

  var dropdownButton = Object(react__WEBPACK_IMPORTED_MODULE_4__["useRef"])();
  var dropdownContainer = Object(react__WEBPACK_IMPORTED_MODULE_4__["useRef"])();

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(false),
      dropdownButtonColorHelper = _useState5[0],
      setDropdownButtonColorHelper = _useState5[1];

  var _useState6 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(false),
      dropdownContainerHelper = _useState6[0],
      setDropdownContainerHelper = _useState6[1];

  var onSaveDropdownShow = function onSaveDropdownShow() {
    if (!dropdownContainerHelper) {
      gsap__WEBPACK_IMPORTED_MODULE_9__["default"].to(dropdownContainer.current, {
        autoAlpha: 1,
        duration: 1,
        ease: gsap__WEBPACK_IMPORTED_MODULE_9__["Linear"]
      }); // gsap.to(dropdownButton.current, { backgroundColor: '#6C63FF', color: '#f8f9fb', duration: 1, ease: Linear });

      setDropdownContainerHelper(true);
      setDropdownButtonColorHelper(true);
    } else if (dropdownContainerHelper) {
      gsap__WEBPACK_IMPORTED_MODULE_9__["default"].to(dropdownContainer.current, {
        autoAlpha: 0,
        duration: 1,
        ease: gsap__WEBPACK_IMPORTED_MODULE_9__["Linear"]
      }); // gsap.to(dropdownButton.current, { backgroundColor: '#f8f9fb', color: '#6C63FF', duration: 1, ease: Linear });

      setDropdownContainerHelper(false);
      setDropdownButtonColorHelper(false);
    }
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("div", {
    ref: saveContainer,
    className: "relative flex justify-start",
    children: size.width < 680 ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("div", {
      className: "flex mt-4",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("img", {
        onClick: /*#__PURE__*/function () {
          var _ref4 = Object(C_off_saas_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/C_off_saas_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee3(e) {
            var doc, asPdf, blob;
            return C_off_saas_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee3$(_context3) {
              while (1) {
                switch (_context3.prev = _context3.next) {
                  case 0:
                    e.preventDefault();
                    doc = /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(MyDocument, {
                      competitors: competitors
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 330,
                      columnNumber: 27
                    }, _this);
                    asPdf = Object(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_11__["pdf"])([]);
                    asPdf.updateContainer(doc);
                    _context3.next = 6;
                    return asPdf.toBlob();

                  case 6:
                    blob = _context3.sent;
                    Object(file_saver__WEBPACK_IMPORTED_MODULE_5__["saveAs"])(blob, "".concat(next_router__WEBPACK_IMPORTED_MODULE_6___default.a.query.project, "/competitors-analysis.pdf"));

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
    }, _this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("div", {
      className: "relative w-full flex justify-end items-center",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("button", {
        ref: dropdownButton,
        onClick: onSaveDropdownShow,
        className: "hover:bg-primary hover:text-white dark:hover:bg-primarydark dark:hover:text-background focus:outline-none border border-primary text-primary text-sm font-light py-2 px-8 rounded-2xl mt-2 dark:text-primarydark dark:border-primarydark ".concat(dropdownButtonColorHelper ? 'bg-primary text-background dark:bg-primarydark dark:text-background' : ''),
        children: "Save my work"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 344,
        columnNumber: 11
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("div", {
        ref: dropdownContainer,
        className: "absolute bg-white rounded-2xl shadow-xl p-6 top-14 z-50 invisible opacity-0",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("div", {
          className: "flex items-center justify-start",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("img", {
            src: "/mobile-navbar/success.svg",
            height: 26,
            width: 26
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 355,
            columnNumber: 15
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("p", {
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
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("div", {
          className: "px-6 py-4 bg-background rounded-2xl mt-2 pr-6",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("div", {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("p", {
              className: "flex",
              children: "Save as PDF:"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 360,
              columnNumber: 17
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("img", {
              onClick: /*#__PURE__*/function () {
                var _ref5 = Object(C_off_saas_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/C_off_saas_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee4(e) {
                  var doc, asPdf, blob;
                  return C_off_saas_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee4$(_context4) {
                    while (1) {
                      switch (_context4.prev = _context4.next) {
                        case 0:
                          e.preventDefault();
                          doc = /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(MyDocument, {
                            competitors: competitors
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 364,
                            columnNumber: 33
                          }, _this);
                          asPdf = Object(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_11__["pdf"])([]);
                          asPdf.updateContainer(doc);
                          _context4.next = 6;
                          return asPdf.toBlob();

                        case 6:
                          blob = _context4.sent;
                          Object(file_saver__WEBPACK_IMPORTED_MODULE_5__["saveAs"])(blob, "".concat(next_router__WEBPACK_IMPORTED_MODULE_6___default.a.query.project, "/competitors-analysis.pdf"));

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
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("div", {
            className: "w-full justify-start items-center mt-4",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("p", {
              children: "Share your competitors analysis with this public link:"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 377,
              columnNumber: 17
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("div", {
              className: "w-full flex mt-2",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("input", {
                value: "http://localhost:3000/dashboard/projects/".concat(projectName, "/competitors/").concat(projectId),
                className: "w-full bg-linkBackground text-sm px-2 py-1 dark:text-primarydark focus:outline-none"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 379,
                columnNumber: 19
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_12___default.a, {
                href: "/dashboard/projects/".concat(projectName, "/competitors/").concat(projectId),
                passHref: true,
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("a", {
                  target: "_blank",
                  rel: "noreferrer",
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("img", Object(C_off_saas_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({
                    className: "cursor-pointer",
                    src: "/mobile-navbar/foreign.svg",
                    height: 28,
                    width: 28
                  }, "className", "h-full"), void 0, false, {
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
  return [next_router__WEBPACK_IMPORTED_MODULE_6__["useRouter"], _utils_useWindowSize__WEBPACK_IMPORTED_MODULE_10__["useWindowSize"]];
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9kYXNoYm9hcmQvc3RhcnR1cC9wcm9qZWN0L2J1c2luZXNzLWFwcC9jb21wZXRpdG9ycy9Db21wZXRpdG9yc1BERi5qcyJdLCJuYW1lcyI6WyJGb250IiwicmVnaXN0ZXIiLCJzcmMiLCJmYW1pbHkiLCJzdHlsZXMiLCJTdHlsZVNoZWV0IiwiY3JlYXRlIiwiaG9tZVBhZ2UiLCJwYWRkaW5nIiwiZm9udEZhbWlseSIsImJhY2tncm91bmRDb2xvciIsImNvbG9yIiwibWFpblRpdGxlIiwiZm9udFNpemUiLCJ0ZXh0QWxpZ24iLCJwYWRkaW5nQm90dG9tIiwiTXlEb2N1bWVudCIsImNvbXBldGl0b3JzIiwibWFwIiwiY29tcGV0aXRvciIsImluZGV4IiwiZGlzcGxheSIsImZsZXhEaXJlY3Rpb24iLCJpbWFnZSIsImhlaWdodCIsIndpZHRoIiwiYm9yZGVyUmFkaXVzIiwianVzdGlmeUNvbnRlbnQiLCJhbGlnbkl0ZW1zIiwiYWxpZ25Db250ZW50IiwibWFyZ2luTGVmdCIsInRpdGxlIiwicGFkZGluZ1ZlcnRpY2FsIiwicGFkZGluZ0hvcml6b250YWwiLCJsb2NhdGlvbiIsIm1hcmdpblRvcCIsImVtcGxveWVlcyIsInJldmVudWUiLCJjb21wYW55RGVzY3JpcHRpb24iLCJidXNpbmVzc01vZGVsIiwicHJvZHVjdE92ZXJ2aWV3IiwicHJvbW90aW9uU3RyYXRlZ3kiLCJjb21wYW55U3RyZW5ndGhzIiwiY29tcGFueVdlYWtuZXNzZXMiLCJvcHBvcnR1bml0aWVzIiwiQ29tcGV0aXRvcnNQREYiLCJ1c2VTdGF0ZSIsInNldENvbXBldGl0b3JzIiwicHJvamVjdElkIiwic2V0UHJvamVjdElkIiwicHJvamVjdE5hbWUiLCJzZXRQcm9qZWN0TmFtZSIsInJvdXRlciIsInVzZVJvdXRlciIsInNpemUiLCJ1c2VXaW5kb3dTaXplIiwidXNlRWZmZWN0IiwiQ29va2llcyIsImdldCIsInVzZXJVaWQiLCJjb25zb2xlIiwibG9nIiwiUm91dGVyIiwicXVlcnkiLCJwcm9qZWN0IiwiZGIiLCJjb2xsZWN0aW9uIiwid2hlcmUiLCJkYXRhIiwidGhlbiIsInF1ZXJ5U25hcHNob3QiLCJmb3JFYWNoIiwiZG9jMSIsImRvYyIsIm9uU25hcHNob3QiLCJzZXJ2ZXJVcGRhdGUiLCJkb2NzIiwiY29tcGV0aXRvcnNBcnJheSIsInNhdmVDb250YWluZXIiLCJ1c2VSZWYiLCJzYXZlQ29udGFpbmVySGVscGVyIiwic2V0U2F2ZUNvbnRhaW5lckhlbHBlciIsInNhdmVTZWN0aW9uRHJvcERvd24iLCJnc2FwIiwidG8iLCJjdXJyZW50IiwiYXV0b0FscGhhIiwiZHVyYXRpb24iLCJlYXNlIiwiTGluZWFyIiwiZHJvcGRvd25CdXR0b24iLCJkcm9wZG93bkNvbnRhaW5lciIsImRyb3Bkb3duQnV0dG9uQ29sb3JIZWxwZXIiLCJzZXREcm9wZG93bkJ1dHRvbkNvbG9ySGVscGVyIiwiZHJvcGRvd25Db250YWluZXJIZWxwZXIiLCJzZXREcm9wZG93bkNvbnRhaW5lckhlbHBlciIsIm9uU2F2ZURyb3Bkb3duU2hvdyIsImUiLCJwcmV2ZW50RGVmYXVsdCIsImFzUGRmIiwicGRmIiwidXBkYXRlQ29udGFpbmVyIiwidG9CbG9iIiwiYmxvYiIsInNhdmVBcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0NBRUE7O0FBQ0E7QUFDQTtBQUNBO0FBRUE7Q0FHQTs7QUFDQUEseURBQUksQ0FBQ0MsUUFBTCxDQUFjO0FBQUVDLEtBQUcsRUFBRSxzQkFBUDtBQUErQkMsUUFBTSxFQUFFO0FBQXZDLENBQWQ7QUFFQSxJQUFNQyxNQUFNLEdBQUdDLCtEQUFVLENBQUNDLE1BQVgsQ0FBa0I7QUFDL0JDLFVBQVEsRUFBRTtBQUNSQyxXQUFPLEVBQUUsRUFERDtBQUVSQyxjQUFVLEVBQUUsV0FGSjtBQUdSQyxtQkFBZSxFQUFFLFNBSFQ7QUFJUkMsU0FBSyxFQUFFO0FB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QUFBLHNDQUNFO0FBQ0UscUJBQUsscURBQThDZCxXQUE5QywwQkFBeUVGLFNBQXpFLENBRFA7QUFFRSx5QkFBUyxFQUFDO0FBRlo7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFERixlQUtFLHFFQUFDLGlEQUFEO0FBQU0sb0JBQUksZ0NBQXlCRSxXQUF6QiwwQkFBb0RGLFNBQXBELENBQVY7QUFBMkUsd0JBQVEsTUFBbkY7QUFBQSx1Q0FDRTtBQUFHLHdCQUFNLEVBQUMsUUFBVjtBQUFtQixxQkFBRyxFQUFDLFlBQXZCO0FBQUEseUNBQ0U7QUFBSyw2QkFBUyxFQUFDLGdCQUFmO0FBQWdDLHVCQUFHLEVBQUMsNEJBQXBDO0FBQWlFLDBCQUFNLEVBQUUsRUFBekU7QUFBNkUseUJBQUssRUFBRTtBQUFwRixrQ0FBa0csUUFBbEc7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQUxGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBbEJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFMRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFWRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFuQko7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBdUZELENBM0pEOztHQUFNSCxjO1VBSVdRLHFELEVBQ0ZFLG1FOzs7TUFMVFYsYztBQTZKU0EsNkVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvZGFzaGJvYXJkL3Byb2plY3RzL1twcm9qZWN0XS9jb21wZXRpdG9ycy44ZGI3Y2I0NTQ5YTA2YjU3NzliZC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlUmVmLCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgc2F2ZUFzIH0gZnJvbSAnZmlsZS1zYXZlcic7XHJcbmltcG9ydCBSb3V0ZXIgZnJvbSAnbmV4dC9yb3V0ZXInO1xyXG5pbXBvcnQgQ29va2llcyBmcm9tICdqcy1jb29raWUnO1xyXG5pbXBvcnQgeyBkYiB9IGZyb20gJy4uLy4uLy4uLy4uLy4uLy4uL2xpYi9maXJlYmFzZSc7XHJcbi8vIGltcG9ydCBmb250IGZyb20gJy4uLy4uLy4uLy4uLy4uLy4uL3B1YmxpYy9mb250cy9jb21mb3J0YWEudHRmJztcclxuaW1wb3J0IGdzYXAsIHsgTGluZWFyIH0gZnJvbSAnZ3NhcCc7XHJcbmltcG9ydCB7IHVzZVdpbmRvd1NpemUgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi8uLi91dGlscy91c2VXaW5kb3dTaXplJztcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xyXG5cclxuaW1wb3J0IHsgRm9udCwgcGRmLCBQYWdlLCBUZXh0LCBWaWV3LCBJbWFnZSwgRG9jdW1lbnQsIFN0eWxlU2hlZXQsIFBERlZpZXdlciwgUERGRG93bmxvYWRMaW5rIH0gZnJvbSAnQHJlYWN0LXBkZi9yZW5kZXJlcic7XHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XHJcblxyXG4vLyBGb250LnJlZ2lzdGVyKHsgc3JjOiAnL2ZvbnRzL3BvcHBpbnMudHRmJywgZmFtaWx5OiAnUG9wcGlucycsIGZvcm1hdDogJ3RydWV0eXBlJyB9KTtcclxuRm9udC5yZWdpc3Rlcih7IHNyYzogJy9mb250cy9jb21mb3J0YWEudHRmJywgZmFtaWx5OiAnQ29tZm9ydGFhJyB9KTtcclxuXHJcbmNvbnN0IHN0eWxlcyA9IFN0eWxlU2hlZXQuY3JlYXRlKHtcclxuICBob21lUGFnZToge1xyXG4gICAgcGFkZGluZzogMzYsXHJcbiAgICBmb250RmFtaWx5OiAnQ29tZm9ydGFhJyxcclxuICAgIGJhY2tncm91bmRDb2xvcjogJyNmOGY5ZmInLFxyXG4gICAgY29sb3I6ICcjMGExMjMwJyxcclxuICB9LFxyXG4gIG1haW5UaXRsZToge1xyXG4gICAgZm9udFNpemU6IDIyLFxyXG4gICAgY29sb3I6ICcjMGExMjMwJyxcclxuICAgIHRleHRBbGlnbjogJ2NlbnRlcicsXHJcbiAgICBwYWRkaW5nQm90dG9tOiA0MixcclxuICB9LFxyXG59KTtcclxuXHJcbmNvbnN0IE15RG9jdW1lbnQgPSAoeyBjb21wZXRpdG9ycyB9KSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxEb2N1bWVudCBzY2FsZT17OTYgLyA3Mn0gcmVuZGVyTW9kZT1cInN2Z1wiPlxyXG4gICAgICB7Y29tcGV0aXRvcnMubWFwKChjb21wZXRpdG9yLCBpbmRleCkgPT4gKFxyXG4gICAgICAgIDxQYWdlIHNpemU9XCJBNFwiIHN0eWxlPXtzdHlsZXMuaG9tZVBhZ2V9PlxyXG4gICAgICAgICAge2luZGV4ID09PSAwICYmIChcclxuICAgICAgICAgICAgPFZpZXc+XHJcbiAgICAgICAgICAgICAgPFRleHQgc3R5bGU9e3N0eWxlcy5tYWluVGl0bGV9PkNvbXBldGl0b3JzIGFuYWx5c2lzPC9UZXh0PlxyXG4gICAgICAgICAgICA8L1ZpZXc+XHJcbiAgICAgICAgICApfVxyXG4gICAgICAgICAgPFZpZXcgc3R5bGU9e3sgZGlzcGxheTogJ2ZsZXgnLCBmbGV4RGlyZWN0aW9uOiAncm93JyB9fT5cclxuICAgICAgICAgICAge2NvbXBldGl0b3IuaW1hZ2UgPT09ICcnID8gKFxyXG4gICAgICAgICAgICAgIDxWaWV3XHJcbiAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICBoZWlnaHQ6IDcyLFxyXG4gICAgICAgICAgICAgICAgICB3aWR0aDogNzIsXHJcbiAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogJyM2QzYzRkYnLFxyXG4gICAgICAgICAgICAgICAgICBib3JkZXJSYWRpdXM6IDk5OTksXHJcbiAgICAgICAgICAgICAgICAgIGRpc3BsYXk6ICdmbGV4JyxcclxuICAgICAgICAgICAgICAgICAganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLFxyXG4gICAgICAgICAgICAgICAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcclxuICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPEltYWdlIHNyYz1cIi9jb21wZXRpdG9ycy9lbXB0eS1pbWFnZS1wZGYucG5nXCIgaGVpZ2h0PXs2NH0gd2lkdGg9ezY0fSAvPlxyXG4gICAgICAgICAgICAgIDwvVmlldz5cclxuICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICA8Vmlldz48L1ZpZXc+XHJcbiAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgIHsvKiBDb21wYW55IG92ZXJ2aWV3IHN0YXJ0ICovfVxyXG4gICAgICAgICAgICA8VmlldyBzdHlsZT17eyBmb250U2l6ZTogMTIgfX0+XHJcbiAgICAgICAgICAgICAgPFZpZXdcclxuICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgIGRpc3BsYXk6ICdmbGV4JyxcclxuICAgICAgICAgICAgICAgICAgZmxleERpcmVjdGlvbjogJ3JvdycsXHJcbiAgICAgICAgICAgICAgICAgIGp1c3RpZnlDb250ZW50OiAnc3BhY2UtYmV0d2VlbicsXHJcbiAgICAgICAgICAgICAgICAgIGFsaWduQ29udGVudDogJ3NwYWNlLWJldHdlZW4nLFxyXG4gICAgICAgICAgICAgICAgICBtYXJnaW5MZWZ0OiAzMixcclxuICAgICAgICAgICAgICAgICAgd2lkdGg6ICcxMDAlJyxcclxuICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAge2NvbXBldGl0b3IudGl0bGUgIT09ICcnICYmIChcclxuICAgICAgICAgICAgICAgICAgPFZpZXcgc3R5bGU9e3sgYmFja2dyb3VuZENvbG9yOiAnI2ZjZmVmZScsIGJvcmRlclJhZGl1czogMTYsIHBhZGRpbmdWZXJ0aWNhbDogOCwgcGFkZGluZ0hvcml6b250YWw6IDE2IH19PlxyXG4gICAgICAgICAgICAgICAgICAgIDxUZXh0Pm5hbWUgLyB7Y29tcGV0aXRvci50aXRsZX08L1RleHQ+XHJcbiAgICAgICAgICAgICAgICAgIDwvVmlldz5cclxuICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICB7Y29tcGV0aXRvci5sb2NhdGlvbiAhPT0gJycgJiYgKFxyXG4gICAgICAgICAgICAgICAgICA8VmlldyBzdHlsZT17eyBiYWNrZ3JvdW5kQ29sb3I6ICcjZmNmZWZlJywgYm9yZGVyUmFkaXVzOiAxNiwgcGFkZGluZ1ZlcnRpY2FsOiA4LCBwYWRkaW5nSG9yaXpvbnRhbDogMTYgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPFRleHQ+bG9jYXRpb24gLyB7Y29tcGV0aXRvci5sb2NhdGlvbn08L1RleHQ+XHJcbiAgICAgICAgICAgICAgICAgIDwvVmlldz5cclxuICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgPC9WaWV3PlxyXG4gICAgICAgICAgICAgIDxWaWV3XHJcbiAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICBkaXNwbGF5OiAnZmxleCcsXHJcbiAgICAgICAgICAgICAgICAgIGZsZXhEaXJlY3Rpb246ICdyb3cnLFxyXG4gICAgICAgICAgICAgICAgICBqdXN0aWZ5Q29udGVudDogJ3NwYWNlLWJldHdlZW4nLFxyXG4gICAgICAgICAgICAgICAgICBhbGlnbkNvbnRlbnQ6ICdzcGFjZS1iZXR3ZWVuJyxcclxuICAgICAgICAgICAgICAgICAgbWFyZ2luTGVmdDogMzIsXHJcbiAgICAgICAgICAgICAgICAgIG1hcmdpblRvcDogMTIsXHJcbiAgICAgICAgICAgICAgICAgIHdpZHRoOiAnMTAwJScsXHJcbiAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIHtjb21wZXRpdG9yLmVtcGxveWVlcyAhPT0gJycgJiYgKFxyXG4gICAgICAgICAgICAgICAgICA8VmlldyBzdHlsZT17eyBiYWNrZ3JvdW5kQ29sb3I6ICcjZmNmZWZlJywgYm9yZGVyUmFkaXVzOiAxNiwgcGFkZGluZ1ZlcnRpY2FsOiA4LCBwYWRkaW5nSG9yaXpvbnRhbDogMTYgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPFRleHQ+ZW1wbG95ZWVzIC8ge2NvbXBldGl0b3IuZW1wbG95ZWVzfTwvVGV4dD5cclxuICAgICAgICAgICAgICAgICAgPC9WaWV3PlxyXG4gICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgIHtjb21wZXRpdG9yLnJldmVudWUgIT09ICcnICYmIChcclxuICAgICAgICAgICAgICAgICAgPFZpZXcgc3R5bGU9e3sgYmFja2dyb3VuZENvbG9yOiAnI2ZjZmVmZScsIGJvcmRlclJhZGl1czogMTYsIHBhZGRpbmdWZXJ0aWNhbDogOCwgcGFkZGluZ0hvcml6b250YWw6IDE2IH19PlxyXG4gICAgICAgICAgICAgICAgICAgIDxUZXh0PnJldmVudWUgLyB7Y29tcGV0aXRvci5yZXZlbnVlfTwvVGV4dD5cclxuICAgICAgICAgICAgICAgICAgPC9WaWV3PlxyXG4gICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICA8L1ZpZXc+XHJcbiAgICAgICAgICAgIDwvVmlldz5cclxuICAgICAgICAgICAgey8qIENvbXBhbnkgb3ZlcnZpZXcgZW5kICovfVxyXG4gICAgICAgICAgPC9WaWV3PlxyXG4gICAgICAgICAgey8qIENvbXBhbnkgZGVzY3JpcHRpb24gKi99XHJcbiAgICAgICAgICB7Y29tcGV0aXRvci5jb21wYW55RGVzY3JpcHRpb24gIT09ICcnICYmIChcclxuICAgICAgICAgICAgPFZpZXcgd3JhcD17ZmFsc2V9IHN0eWxlPXt7IG1hcmdpblRvcDogMzIgfX0+XHJcbiAgICAgICAgICAgICAgPFZpZXcgc3R5bGU9e3sgZGlzcGxheTogJ2ZsZXgnLCBmbGV4RGlyZWN0aW9uOiAncm93JywgYWxpZ25JdGVtczogJ2ZsZXgtZW5kJywgZm9udFNpemU6IDE0IH19PlxyXG4gICAgICAgICAgICAgICAgPEltYWdlIHNyYz1cIi9jb21wZXRpdG9ycy9wZGYvZGVzY3JpcHRpb24ucG5nXCIgc3R5bGU9e3sgaGVpZ2h0OiAyMCwgd2lkdGg6IDIwIH19IC8+XHJcbiAgICAgICAgICAgICAgICA8VGV4dCBzdHlsZT17eyBtYXJnaW5MZWZ0OiA4IH19PkNvbXBhbnkgZGVzY3JpcHRpb248L1RleHQ+XHJcbiAgICAgICAgICAgICAgPC9WaWV3PlxyXG4gICAgICAgICAgICAgIDxWaWV3XHJcbiAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjZmNmZWZlJyxcclxuICAgICAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiAxNixcclxuICAgICAgICAgICAgICAgICAgcGFkZGluZ1ZlcnRpY2FsOiAxMixcclxuICAgICAgICAgICAgICAgICAgcGFkZGluZ0hvcml6b250YWw6IDE2LFxyXG4gICAgICAgICAgICAgICAgICBtYXJnaW5Ub3A6IDgsXHJcbiAgICAgICAgICAgICAgICAgIGZvbnRTaXplOiAxMCxcclxuICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPFRleHQ+e2NvbXBldGl0b3IuY29tcGFueURlc2NyaXB0aW9ufTwvVGV4dD5cclxuICAgICAgICAgICAgICA8L1ZpZXc+XHJcbiAgICAgICAgICAgIDwvVmlldz5cclxuICAgICAgICAgICl9XHJcbiAgICAgICAgICB7Y29tcGV0aXRvci5idXNpbmVzc01vZGVsICE9PSAnJyAmJiAoXHJcbiAgICAgICAgICAgIDxWaWV3IHdyYXA9e2ZhbHNlfSBzdHlsZT17eyBtYXJnaW5Ub3A6IDMyIH19PlxyXG4gICAgICAgICAgICAgIDxWaWV3IHN0eWxlPXt7IGRpc3BsYXk6ICdmbGV4JywgZmxleERpcmVjdGlvbjogJ3JvdycsIGFsaWduSXRlbXM6ICdmbGV4LWVuZCcsIGZvbnRTaXplOiAxNCB9fT5cclxuICAgICAgICAgICAgICAgIDxJbWFnZSBzcmM9XCIvY29tcGV0aXRvcnMvcGRmL21vZGVsLnBuZ1wiIHN0eWxlPXt7IGhlaWdodDogMjAsIHdpZHRoOiAyMCB9fSAvPlxyXG4gICAgICAgICAgICAgICAgPFRleHQgc3R5bGU9e3sgbWFyZ2luTGVmdDogOCB9fT5CdXNpbmVzcyBtb2RlbDwvVGV4dD5cclxuICAgICAgICAgICAgICA8L1ZpZXc+XHJcbiAgICAgICAgICAgICAgPFZpZXdcclxuICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogJyNmY2ZlZmUnLFxyXG4gICAgICAgICAgICAgICAgICBib3JkZXJSYWRpdXM6IDE2LFxyXG4gICAgICAgICAgICAgICAgICBwYWRkaW5nVmVydGljYWw6IDEyLFxyXG4gICAgICAgICAgICAgICAgICBwYWRkaW5nSG9yaXpvbnRhbDogMTYsXHJcbiAgICAgICAgICAgICAgICAgIG1hcmdpblRvcDogOCxcclxuICAgICAgICAgICAgICAgICAgZm9udFNpemU6IDEwLFxyXG4gICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8VGV4dD57Y29tcGV0aXRvci5idXNpbmVzc01vZGVsfTwvVGV4dD5cclxuICAgICAgICAgICAgICA8L1ZpZXc+XHJcbiAgICAgICAgICAgIDwvVmlldz5cclxuICAgICAgICAgICl9XHJcbiAgICAgICAgICB7Y29tcGV0aXRvci5wcm9kdWN0T3ZlcnZpZXcgIT09ICcnICYmIChcclxuICAgICAgICAgICAgPFZpZXcgd3JhcD17ZmFsc2V9IHN0eWxlPXt7IG1hcmdpblRvcDogMzIgfX0+XHJcbiAgICAgICAgICAgICAgPFZpZXcgc3R5bGU9e3sgZGlzcGxheTogJ2ZsZXgnLCBmbGV4RGlyZWN0aW9uOiAncm93JywgYWxpZ25JdGVtczogJ2ZsZXgtZW5kJywgZm9udFNpemU6IDE0IH19PlxyXG4gICAgICAgICAgICAgICAgPEltYWdlIHNyYz1cIi9jb21wZXRpdG9ycy9wZGYvcHJvZHVjdC5wbmdcIiBzdHlsZT17eyBoZWlnaHQ6IDIwLCB3aWR0aDogMjAgfX0gLz5cclxuICAgICAgICAgICAgICAgIDxUZXh0IHN0eWxlPXt7IG1hcmdpbkxlZnQ6IDggfX0+UHJvZHVjdCBvdmVydmlldzwvVGV4dD5cclxuICAgICAgICAgICAgICA8L1ZpZXc+XHJcbiAgICAgICAgICAgICAgPFZpZXdcclxuICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogJyNmY2ZlZmUnLFxyXG4gICAgICAgICAgICAgICAgICBib3JkZXJSYWRpdXM6IDE2LFxyXG4gICAgICAgICAgICAgICAgICBwYWRkaW5nVmVydGljYWw6IDEyLFxyXG4gICAgICAgICAgICAgICAgICBwYWRkaW5nSG9yaXpvbnRhbDogMTYsXHJcbiAgICAgICAgICAgICAgICAgIG1hcmdpblRvcDogOCxcclxuICAgICAgICAgICAgICAgICAgZm9udFNpemU6IDEwLFxyXG4gICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8VGV4dD57Y29tcGV0aXRvci5wcm9kdWN0T3ZlcnZpZXd9PC9UZXh0PlxyXG4gICAgICAgICAgICAgIDwvVmlldz5cclxuICAgICAgICAgICAgPC9WaWV3PlxyXG4gICAgICAgICAgKX1cclxuICAgICAgICAgIHtjb21wZXRpdG9yLnByb21vdGlvblN0cmF0ZWd5ICE9PSAnJyAmJiAoXHJcbiAgICAgICAgICAgIDxWaWV3IHdyYXA9e2ZhbHNlfSBzdHlsZT17eyBtYXJnaW5Ub3A6IDMyIH19PlxyXG4gICAgICAgICAgICAgIDxWaWV3IHN0eWxlPXt7IGRpc3BsYXk6ICdmbGV4JywgZmxleERpcmVjdGlvbjogJ3JvdycsIGFsaWduSXRlbXM6ICdmbGV4LWVuZCcsIGZvbnRTaXplOiAxNCB9fT5cclxuICAgICAgICAgICAgICAgIDxJbWFnZSBzcmM9XCIvY29tcGV0aXRvcnMvcGRmL3Byb21vdGlvbi5wbmdcIiBzdHlsZT17eyBoZWlnaHQ6IDIwLCB3aWR0aDogMjAgfX0gLz5cclxuICAgICAgICAgICAgICAgIDxUZXh0IHN0eWxlPXt7IG1hcmdpbkxlZnQ6IDggfX0+UHJvbW90aW9uIHN0cmF0ZWd5PC9UZXh0PlxyXG4gICAgICAgICAgICAgIDwvVmlldz5cclxuICAgICAgICAgICAgICA8Vmlld1xyXG4gICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiAnI2ZjZmVmZScsXHJcbiAgICAgICAgICAgICAgICAgIGJvcmRlclJhZGl1czogMTYsXHJcbiAgICAgICAgICAgICAgICAgIHBhZGRpbmdWZXJ0aWNhbDogMTIsXHJcbiAgICAgICAgICAgICAgICAgIHBhZGRpbmdIb3Jpem9udGFsOiAxNixcclxuICAgICAgICAgICAgICAgICAgbWFyZ2luVG9wOiA4LFxyXG4gICAgICAgICAgICAgICAgICBmb250U2l6ZTogMTAsXHJcbiAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxUZXh0Pntjb21wZXRpdG9yLnByb21vdGlvblN0cmF0ZWd5fTwvVGV4dD5cclxuICAgICAgICAgICAgICA8L1ZpZXc+XHJcbiAgICAgICAgICAgIDwvVmlldz5cclxuICAgICAgICAgICl9XHJcbiAgICAgICAgICB7Y29tcGV0aXRvci5jb21wYW55U3RyZW5ndGhzICE9PSAnJyAmJiAoXHJcbiAgICAgICAgICAgIDxWaWV3IHdyYXA9e2ZhbHNlfSBzdHlsZT17eyBtYXJnaW5Ub3A6IDMyIH19PlxyXG4gICAgICAgICAgICAgIDxWaWV3IHN0eWxlPXt7IGRpc3BsYXk6ICdmbGV4JywgZmxleERpcmVjdGlvbjogJ3JvdycsIGFsaWduSXRlbXM6ICdmbGV4LWVuZCcsIGZvbnRTaXplOiAxNCB9fT5cclxuICAgICAgICAgICAgICAgIDxJbWFnZSBzcmM9XCIvY29tcGV0aXRvcnMvcGRmL3N0cmVuZ3Rocy5wbmdcIiBzdHlsZT17eyBoZWlnaHQ6IDIwLCB3aWR0aDogMjAgfX0gLz5cclxuICAgICAgICAgICAgICAgIDxUZXh0IHN0eWxlPXt7IG1hcmdpbkxlZnQ6IDggfX0+Q29tcGFueSBzdHJlbmd0aHM8L1RleHQ+XHJcbiAgICAgICAgICAgICAgPC9WaWV3PlxyXG4gICAgICAgICAgICAgIDxWaWV3XHJcbiAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjZmNmZWZlJyxcclxuICAgICAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiAxNixcclxuICAgICAgICAgICAgICAgICAgcGFkZGluZ1ZlcnRpY2FsOiAxMixcclxuICAgICAgICAgICAgICAgICAgcGFkZGluZ0hvcml6b250YWw6IDE2LFxyXG4gICAgICAgICAgICAgICAgICBtYXJnaW5Ub3A6IDgsXHJcbiAgICAgICAgICAgICAgICAgIGZvbnRTaXplOiAxMCxcclxuICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPFRleHQ+e2NvbXBldGl0b3IuY29tcGFueVN0cmVuZ3Roc308L1RleHQ+XHJcbiAgICAgICAgICAgICAgPC9WaWV3PlxyXG4gICAgICAgICAgICA8L1ZpZXc+XHJcbiAgICAgICAgICApfVxyXG4gICAgICAgICAge2NvbXBldGl0b3IuY29tcGFueVdlYWtuZXNzZXMgIT09ICcnICYmIChcclxuICAgICAgICAgICAgPFZpZXcgd3JhcD17ZmFsc2V9IHN0eWxlPXt7IG1hcmdpblRvcDogMzIgfX0+XHJcbiAgICAgICAgICAgICAgPFZpZXcgc3R5bGU9e3sgZGlzcGxheTogJ2ZsZXgnLCBmbGV4RGlyZWN0aW9uOiAncm93JywgYWxpZ25JdGVtczogJ2ZsZXgtZW5kJywgZm9udFNpemU6IDE0IH19PlxyXG4gICAgICAgICAgICAgICAgPEltYWdlIHNyYz1cIi9jb21wZXRpdG9ycy9wZGYvd2Vha25lc3Nlcy5wbmdcIiBzdHlsZT17eyBoZWlnaHQ6IDIwLCB3aWR0aDogMjAgfX0gLz5cclxuICAgICAgICAgICAgICAgIDxUZXh0IHN0eWxlPXt7IG1hcmdpbkxlZnQ6IDggfX0+Q29tcGFueSB3ZWFrbmVzc2VzPC9UZXh0PlxyXG4gICAgICAgICAgICAgIDwvVmlldz5cclxuICAgICAgICAgICAgICA8Vmlld1xyXG4gICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiAnI2ZjZmVmZScsXHJcbiAgICAgICAgICAgICAgICAgIGJvcmRlclJhZGl1czogMTYsXHJcbiAgICAgICAgICAgICAgICAgIHBhZGRpbmdWZXJ0aWNhbDogMTIsXHJcbiAgICAgICAgICAgICAgICAgIHBhZGRpbmdIb3Jpem9udGFsOiAxNixcclxuICAgICAgICAgICAgICAgICAgbWFyZ2luVG9wOiA4LFxyXG4gICAgICAgICAgICAgICAgICBmb250U2l6ZTogMTAsXHJcbiAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxUZXh0Pntjb21wZXRpdG9yLmNvbXBhbnlXZWFrbmVzc2VzfTwvVGV4dD5cclxuICAgICAgICAgICAgICA8L1ZpZXc+XHJcbiAgICAgICAgICAgIDwvVmlldz5cclxuICAgICAgICAgICl9XHJcbiAgICAgICAgICB7Y29tcGV0aXRvci5vcHBvcnR1bml0aWVzICE9PSAnJyAmJiAoXHJcbiAgICAgICAgICAgIDxWaWV3IHdyYXA9e2ZhbHNlfSBzdHlsZT17eyBtYXJnaW5Ub3A6IDMyIH19PlxyXG4gICAgICAgICAgICAgIDxWaWV3IHN0eWxlPXt7IGRpc3BsYXk6ICdmbGV4JywgZmxleERpcmVjdGlvbjogJ3JvdycsIGFsaWduSXRlbXM6ICdmbGV4LWVuZCcsIGZvbnRTaXplOiAxNCB9fT5cclxuICAgICAgICAgICAgICAgIDxJbWFnZSBzcmM9XCIvY29tcGV0aXRvcnMvcGRmL29wcG9ydHVuaXRpZXMucG5nXCIgc3R5bGU9e3sgaGVpZ2h0OiAyMCwgd2lkdGg6IDIwIH19IC8+XHJcbiAgICAgICAgICAgICAgICA8VGV4dCBzdHlsZT17eyBtYXJnaW5MZWZ0OiA4IH19PkNvbXBhbnkgb3Bwb3J0dW5pdGllczwvVGV4dD5cclxuICAgICAgICAgICAgICA8L1ZpZXc+XHJcbiAgICAgICAgICAgICAgPFZpZXdcclxuICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogJyNmY2ZlZmUnLFxyXG4gICAgICAgICAgICAgICAgICBib3JkZXJSYWRpdXM6IDE2LFxyXG4gICAgICAgICAgICAgICAgICBwYWRkaW5nVmVydGljYWw6IDEyLFxyXG4gICAgICAgICAgICAgICAgICBwYWRkaW5nSG9yaXpvbnRhbDogMTYsXHJcbiAgICAgICAgICAgICAgICAgIG1hcmdpblRvcDogOCxcclxuICAgICAgICAgICAgICAgICAgZm9udFNpemU6IDEwLFxyXG4gICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8VGV4dD57Y29tcGV0aXRvci5vcHBvcnR1bml0aWVzfTwvVGV4dD5cclxuICAgICAgICAgICAgICA8L1ZpZXc+XHJcbiAgICAgICAgICAgIDwvVmlldz5cclxuICAgICAgICAgICl9XHJcbiAgICAgICAgPC9QYWdlPlxyXG4gICAgICApKX1cclxuICAgIDwvRG9jdW1lbnQ+XHJcbiAgKTtcclxufTtcclxuXHJcbmNvbnN0IENvbXBldGl0b3JzUERGID0gKCkgPT4ge1xyXG4gIGNvbnN0IFtjb21wZXRpdG9ycywgc2V0Q29tcGV0aXRvcnNdID0gdXNlU3RhdGUobnVsbCk7XHJcbiAgY29uc3QgW3Byb2plY3RJZCwgc2V0UHJvamVjdElkXSA9IHVzZVN0YXRlKCcnKTtcclxuICBjb25zdCBbcHJvamVjdE5hbWUsIHNldFByb2plY3ROYW1lXSA9IHVzZVN0YXRlKCcnKTtcclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuICBjb25zdCBzaXplID0gdXNlV2luZG93U2l6ZSgpO1xyXG4gIHVzZUVmZmVjdChhc3luYyAoKSA9PiB7XHJcbiAgICBjb25zdCB1c2VyVWlkID0gYXdhaXQgQ29va2llcy5nZXQoJ3VpZCcpO1xyXG4gICAgLy8gY29uc29sZS5sb2coUm91dGVyLnF1ZXJ5LnByb2plY3QpO1xyXG4gICAgY29uc29sZS5sb2codXNlclVpZCk7XHJcbiAgICBpZiAodXNlclVpZCAmJiBSb3V0ZXIucXVlcnkucHJvamVjdCkge1xyXG4gICAgICBjb25zdCBkYXRhID0gYXdhaXQgZGIuY29sbGVjdGlvbigncHJvamVjdHMnKS53aGVyZSgndWlkJywgJz09JywgdXNlclVpZCk7XHJcbiAgICAgIGRhdGFcclxuICAgICAgICAud2hlcmUoJ3Byb2plY3ROYW1lJywgJz09JywgUm91dGVyLnF1ZXJ5LnByb2plY3QpXHJcbiAgICAgICAgLmdldCgpXHJcbiAgICAgICAgLnRoZW4oKHF1ZXJ5U25hcHNob3QpID0+IHtcclxuICAgICAgICAgIHF1ZXJ5U25hcHNob3QuZm9yRWFjaChhc3luYyAoZG9jMSkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBwcm9qZWN0SWQgPSBkb2MxLmRhdGEoKS5wcm9qZWN0SWQ7XHJcbiAgICAgICAgICAgIGNvbnN0IHByb2plY3ROYW1lID0gZG9jMS5kYXRhKCkucHJvamVjdE5hbWU7XHJcbiAgICAgICAgICAgIHNldFByb2plY3RJZChwcm9qZWN0SWQpO1xyXG4gICAgICAgICAgICBzZXRQcm9qZWN0TmFtZShwcm9qZWN0TmFtZSk7XHJcbiAgICAgICAgICAgIGRiLmNvbGxlY3Rpb24oJ3Byb2plY3RzJylcclxuICAgICAgICAgICAgICAuZG9jKGRvYzEuZGF0YSgpLnByb2plY3RJZClcclxuICAgICAgICAgICAgICAuY29sbGVjdGlvbignY29tcGV0aXRvcnMnKVxyXG4gICAgICAgICAgICAgIC5kb2MoUm91dGVyLnF1ZXJ5LnByb2plY3QpXHJcbiAgICAgICAgICAgICAgLmNvbGxlY3Rpb24oJ2lucHV0cycpXHJcbiAgICAgICAgICAgICAgLm9uU25hcHNob3QoKHNlcnZlclVwZGF0ZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgc2VydmVyVXBkYXRlLmRvY3MubWFwKChkb2MpID0+IHtcclxuICAgICAgICAgICAgICAgICAgY29uc3QgZGF0YSA9IGRvYy5kYXRhKCk7XHJcbiAgICAgICAgICAgICAgICAgIHNldENvbXBldGl0b3JzKGRhdGEuY29tcGV0aXRvcnNBcnJheSk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH0sIFtdKTtcclxuICBjb25zb2xlLmxvZyhwcm9qZWN0SWQpO1xyXG5cclxuICBjb25zdCBzYXZlQ29udGFpbmVyID0gdXNlUmVmKCk7XHJcbiAgY29uc3QgW3NhdmVDb250YWluZXJIZWxwZXIsIHNldFNhdmVDb250YWluZXJIZWxwZXJdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IHNhdmVTZWN0aW9uRHJvcERvd24gPSAoKSA9PiB7XHJcbiAgICBpZiAoIXNhdmVDb250YWluZXJIZWxwZXIpIHtcclxuICAgICAgZ3NhcC50byhzYXZlQ29udGFpbmVyLmN1cnJlbnQsIHsgYXV0b0FscGhhOiAxLCBkdXJhdGlvbjogMSwgZWFzZTogTGluZWFyIH0pO1xyXG4gICAgICBzZXRTYXZlQ29udGFpbmVySGVscGVyKHRydWUpO1xyXG4gICAgfSBlbHNlIGlmIChzYXZlQ29udGFpbmVySGVscGVyKSB7XHJcbiAgICAgIGdzYXAudG8oc2F2ZUNvbnRhaW5lci5jdXJyZW50LCB7IGF1dG9BbHBoYTogMCwgZHVyYXRpb246IDEsIGVhc2U6IExpbmVhciB9KTtcclxuICAgICAgc2V0U2F2ZUNvbnRhaW5lckhlbHBlcihmYWxzZSk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgZHJvcGRvd25CdXR0b24gPSB1c2VSZWYoKTtcclxuICBjb25zdCBkcm9wZG93bkNvbnRhaW5lciA9IHVzZVJlZigpO1xyXG4gIGNvbnN0IFtkcm9wZG93bkJ1dHRvbkNvbG9ySGVscGVyLCBzZXREcm9wZG93bkJ1dHRvbkNvbG9ySGVscGVyXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbZHJvcGRvd25Db250YWluZXJIZWxwZXIsIHNldERyb3Bkb3duQ29udGFpbmVySGVscGVyXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBvblNhdmVEcm9wZG93blNob3cgPSAoKSA9PiB7XHJcbiAgICBpZiAoIWRyb3Bkb3duQ29udGFpbmVySGVscGVyKSB7XHJcbiAgICAgIGdzYXAudG8oZHJvcGRvd25Db250YWluZXIuY3VycmVudCwgeyBhdXRvQWxwaGE6IDEsIGR1cmF0aW9uOiAxLCBlYXNlOiBMaW5lYXIgfSk7XHJcbiAgICAgIC8vIGdzYXAudG8oZHJvcGRvd25CdXR0b24uY3VycmVudCwgeyBiYWNrZ3JvdW5kQ29sb3I6ICcjNkM2M0ZGJywgY29sb3I6ICcjZjhmOWZiJywgZHVyYXRpb246IDEsIGVhc2U6IExpbmVhciB9KTtcclxuICAgICAgc2V0RHJvcGRvd25Db250YWluZXJIZWxwZXIodHJ1ZSk7XHJcbiAgICAgIHNldERyb3Bkb3duQnV0dG9uQ29sb3JIZWxwZXIodHJ1ZSk7XHJcbiAgICB9IGVsc2UgaWYgKGRyb3Bkb3duQ29udGFpbmVySGVscGVyKSB7XHJcbiAgICAgIGdzYXAudG8oZHJvcGRvd25Db250YWluZXIuY3VycmVudCwgeyBhdXRvQWxwaGE6IDAsIGR1cmF0aW9uOiAxLCBlYXNlOiBMaW5lYXIgfSk7XHJcbiAgICAgIC8vIGdzYXAudG8oZHJvcGRvd25CdXR0b24uY3VycmVudCwgeyBiYWNrZ3JvdW5kQ29sb3I6ICcjZjhmOWZiJywgY29sb3I6ICcjNkM2M0ZGJywgZHVyYXRpb246IDEsIGVhc2U6IExpbmVhciB9KTtcclxuICAgICAgc2V0RHJvcGRvd25Db250YWluZXJIZWxwZXIoZmFsc2UpO1xyXG4gICAgICBzZXREcm9wZG93bkJ1dHRvbkNvbG9ySGVscGVyKGZhbHNlKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiByZWY9e3NhdmVDb250YWluZXJ9IGNsYXNzTmFtZT1cInJlbGF0aXZlIGZsZXgganVzdGlmeS1zdGFydFwiPlxyXG4gICAgICB7c2l6ZS53aWR0aCA8IDY4MCA/IChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggbXQtNFwiPlxyXG4gICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICBvbkNsaWNrPXthc3luYyAoZSkgPT4ge1xyXG4gICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgICBjb25zdCBkb2MgPSA8TXlEb2N1bWVudCBjb21wZXRpdG9ycz17Y29tcGV0aXRvcnN9IC8+O1xyXG4gICAgICAgICAgICAgIGNvbnN0IGFzUGRmID0gcGRmKFtdKTtcclxuICAgICAgICAgICAgICBhc1BkZi51cGRhdGVDb250YWluZXIoZG9jKTtcclxuICAgICAgICAgICAgICBjb25zdCBibG9iID0gYXdhaXQgYXNQZGYudG9CbG9iKCk7XHJcbiAgICAgICAgICAgICAgc2F2ZUFzKGJsb2IsIGAke1JvdXRlci5xdWVyeS5wcm9qZWN0fS9jb21wZXRpdG9ycy1hbmFseXNpcy5wZGZgKTtcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgc3JjPVwiL21vYmlsZS1uYXZiYXIvcGRmLnN2Z1wiXHJcbiAgICAgICAgICAgIGhlaWdodD17MzB9XHJcbiAgICAgICAgICAgIHdpZHRoPXszMH1cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgICB7LyogPGltZyBzcmM9XCIvbW9iaWxlLW5hdmJhci9saW5rLnN2Z1wiIGhlaWdodD17MzB9IHdpZHRoPXszMH0gLz4gKi99XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICkgOiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWxhdGl2ZSB3LWZ1bGwgZmxleCBqdXN0aWZ5LWVuZCBpdGVtcy1jZW50ZXJcIj5cclxuICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgcmVmPXtkcm9wZG93bkJ1dHRvbn1cclxuICAgICAgICAgICAgb25DbGljaz17b25TYXZlRHJvcGRvd25TaG93fVxyXG4gICAgICAgICAgICBjbGFzc05hbWU9e2Bob3ZlcjpiZy1wcmltYXJ5IGhvdmVyOnRleHQtd2hpdGUgZGFyazpob3ZlcjpiZy1wcmltYXJ5ZGFyayBkYXJrOmhvdmVyOnRleHQtYmFja2dyb3VuZCBmb2N1czpvdXRsaW5lLW5vbmUgYm9yZGVyIGJvcmRlci1wcmltYXJ5IHRleHQtcHJpbWFyeSB0ZXh0LXNtIGZvbnQtbGlnaHQgcHktMiBweC04IHJvdW5kZWQtMnhsIG10LTIgZGFyazp0ZXh0LXByaW1hcnlkYXJrIGRhcms6Ym9yZGVyLXByaW1hcnlkYXJrICR7XHJcbiAgICAgICAgICAgICAgZHJvcGRvd25CdXR0b25Db2xvckhlbHBlciA/ICdiZy1wcmltYXJ5IHRleHQtYmFja2dyb3VuZCBkYXJrOmJnLXByaW1hcnlkYXJrIGRhcms6dGV4dC1iYWNrZ3JvdW5kJyA6ICcnXHJcbiAgICAgICAgICAgIH1gfVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICBTYXZlIG15IHdvcmtcclxuICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgPGRpdiByZWY9e2Ryb3Bkb3duQ29udGFpbmVyfSBjbGFzc05hbWU9XCJhYnNvbHV0ZSBiZy13aGl0ZSByb3VuZGVkLTJ4bCBzaGFkb3cteGwgcC02IHRvcC0xNCB6LTUwIGludmlzaWJsZSBvcGFjaXR5LTBcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LXN0YXJ0XCI+XHJcbiAgICAgICAgICAgICAgPGltZyBzcmM9XCIvbW9iaWxlLW5hdmJhci9zdWNjZXNzLnN2Z1wiIGhlaWdodD17MjZ9IHdpZHRoPXsyNn0gLz5cclxuICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LWxnIG1sLTJcIj5TaG93IHRoZSB3b3JsZCB5b3VyIHdvcmshPC9wPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJweC02IHB5LTQgYmctYmFja2dyb3VuZCByb3VuZGVkLTJ4bCBtdC0yIHByLTZcIj5cclxuICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZmxleFwiPlNhdmUgYXMgUERGOjwvcD5cclxuICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgb25DbGljaz17YXN5bmMgKGUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZG9jID0gPE15RG9jdW1lbnQgY29tcGV0aXRvcnM9e2NvbXBldGl0b3JzfSAvPjtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBhc1BkZiA9IHBkZihbXSk7XHJcbiAgICAgICAgICAgICAgICAgICAgYXNQZGYudXBkYXRlQ29udGFpbmVyKGRvYyk7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgYmxvYiA9IGF3YWl0IGFzUGRmLnRvQmxvYigpO1xyXG4gICAgICAgICAgICAgICAgICAgIHNhdmVBcyhibG9iLCBgJHtSb3V0ZXIucXVlcnkucHJvamVjdH0vY29tcGV0aXRvcnMtYW5hbHlzaXMucGRmYCk7XHJcbiAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgIHNyYz1cIi9tb2JpbGUtbmF2YmFyL3BkZi5zdmdcIlxyXG4gICAgICAgICAgICAgICAgICBoZWlnaHQ9ezMwfVxyXG4gICAgICAgICAgICAgICAgICB3aWR0aD17MzB9XHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm10LTIgY3Vyc29yLXBvaW50ZXJcIlxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbCBqdXN0aWZ5LXN0YXJ0IGl0ZW1zLWNlbnRlciBtdC00XCI+XHJcbiAgICAgICAgICAgICAgICA8cD5TaGFyZSB5b3VyIGNvbXBldGl0b3JzIGFuYWx5c2lzIHdpdGggdGhpcyBwdWJsaWMgbGluazo8L3A+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbCBmbGV4IG10LTJcIj5cclxuICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2BodHRwOi8vbG9jYWxob3N0OjMwMDAvZGFzaGJvYXJkL3Byb2plY3RzLyR7cHJvamVjdE5hbWV9L2NvbXBldGl0b3JzLyR7cHJvamVjdElkfWB9XHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy1mdWxsIGJnLWxpbmtCYWNrZ3JvdW5kIHRleHQtc20gcHgtMiBweS0xIGRhcms6dGV4dC1wcmltYXJ5ZGFyayBmb2N1czpvdXRsaW5lLW5vbmVcIlxyXG4gICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICA8TGluayBocmVmPXtgL2Rhc2hib2FyZC9wcm9qZWN0cy8ke3Byb2plY3ROYW1lfS9jb21wZXRpdG9ycy8ke3Byb2plY3RJZH1gfSBwYXNzSHJlZj5cclxuICAgICAgICAgICAgICAgICAgICA8YSB0YXJnZXQ9XCJfYmxhbmtcIiByZWw9XCJub3JlZmVycmVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT1cImN1cnNvci1wb2ludGVyXCIgc3JjPVwiL21vYmlsZS1uYXZiYXIvZm9yZWlnbi5zdmdcIiBoZWlnaHQ9ezI4fSB3aWR0aD17Mjh9IGNsYXNzTmFtZT1cImgtZnVsbFwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgKX1cclxuICAgICAgey8qIDxidXR0b25cclxuICAgICAgICBvbkNsaWNrPXthc3luYyAoZSkgPT4ge1xyXG4gICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgY29uc3QgZG9jID0gPE15RG9jdW1lbnQgY29tcGV0aXRvcnM9e2NvbXBldGl0b3JzfSAvPjtcclxuICAgICAgICAgIGNvbnN0IGFzUGRmID0gcGRmKFtdKTtcclxuICAgICAgICAgIGFzUGRmLnVwZGF0ZUNvbnRhaW5lcihkb2MpO1xyXG4gICAgICAgICAgY29uc3QgYmxvYiA9IGF3YWl0IGFzUGRmLnRvQmxvYigpO1xyXG4gICAgICAgICAgc2F2ZUFzKGJsb2IsIGAke1JvdXRlci5xdWVyeS5wcm9qZWN0fS9jb21wZXRpdG9ycy1hbmFseXNpcy5wZGZgKTtcclxuICAgICAgICB9fVxyXG4gICAgICAgIGNsYXNzTmFtZT1cImhvdmVyOmJnLXByaW1hcnkgaG92ZXI6dGV4dC13aGl0ZSBkYXJrOmhvdmVyOmJnLXByaW1hcnlkYXJrIGRhcms6aG92ZXI6dGV4dC1iYWNrZ3JvdW5kIGZvY3VzOm91dGxpbmUtbm9uZSBib3JkZXIgYm9yZGVyLXByaW1hcnkgdGV4dC1wcmltYXJ5IHRleHQtc20gZm9udC1saWdodCBweS0yIHB4LTggcm91bmRlZC0yeGwgbXQtMiBkYXJrOnRleHQtcHJpbWFyeWRhcmsgZGFyazpib3JkZXItcHJpbWFyeWRhcmtcIlxyXG4gICAgICA+XHJcbiAgICAgICAgUERGIFNhdmVcclxuICAgICAgPC9idXR0b24+ICovfVxyXG4gICAgICB7LyogPGRpdiBjbGFzc05hbWU9XCJhYnNvbHV0ZSB0b3AtMTIgdy0yNCBiZy1iYWNrZ3JvdW5kIHNoYWRvd1wiPkV4cG9ydCBhczo8L2Rpdj4gKi99XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ29tcGV0aXRvcnNQREY7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=