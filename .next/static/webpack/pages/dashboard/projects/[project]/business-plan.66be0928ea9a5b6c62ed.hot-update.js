webpackHotUpdate_N_E("pages/dashboard/projects/[project]/business-plan",{

/***/ "./components/dashboard/startup/project/business-app/ReactPDFDocument.js":
/*!*******************************************************************************!*\
  !*** ./components/dashboard/startup/project/business-app/ReactPDFDocument.js ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var C_off_saas_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/regenerator */ "./node_modules/next/node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var C_off_saas_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(C_off_saas_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var C_off_saas_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var C_off_saas_node_modules_next_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! file-saver */ "./node_modules/file-saver/dist/FileSaver.min.js");
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(file_saver__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var chartjs_to_image__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! chartjs-to-image */ "./node_modules/chartjs-to-image/index.js");
/* harmony import */ var chartjs_to_image__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(chartjs_to_image__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/esm/index.js");
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! gsap */ "./node_modules/gsap/index.js");
/* harmony import */ var _react_pdf_renderer__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @react-pdf/renderer */ "./node_modules/@react-pdf/renderer/lib/react-pdf.browser.es.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var split_html__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! split-html */ "./node_modules/split-html/index.js");
/* harmony import */ var split_html__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(split_html__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _utils_useWindowSize__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../../../utils/useWindowSize */ "./utils/useWindowSize.js");





var _jsxFileName = "C:\\off-saas\\components\\dashboard\\startup\\project\\business-app\\ReactPDFDocument.js",
    _this = undefined,
    _s = $RefreshSig$();











_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_9__["Font"].register({
  src: '/fonts/poppins.ttf',
  family: 'Poppins'
});
_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_9__["Font"].register({
  src: '/fonts/comfortaa.ttf',
  family: 'Comfortaa'
});
_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_9__["Font"].register({
  src: '/fonts/comfortaa-Bold.ttf',
  family: 'Comfortaa-Bold'
});
_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_9__["Font"].register({
  src: '/fonts/Montserrat-Regular.ttf',
  family: 'Montserrat-Regular'
});
_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_9__["Font"].register({
  src: '/fonts/Montserrat-SemiBold.ttf',
  family: 'Montserrat-SemiBold'
});
_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_9__["Font"].register({
  src: '/fonts/Montserrat-SemiBoldItalic.ttf',
  family: 'Montserrat-SemiBoldItalic'
});
_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_9__["Font"].register({
  src: '/fonts/Montserrat-Italic.ttf',
  family: 'Montserrat-Italic'
});
var styles = _react_pdf_renderer__WEBPACK_IMPORTED_MODULE_9__["StyleSheet"].create({
  homePage: {
    padding: 36,
    // fontFamily: 'Comfortaa',
    fontFamily: 'Montserrat-Regular',
    backgroundColor: '#f8f9fb',
    color: '#0a1230'
  },
  mainTitle: {
    fontSize: 22,
    color: '#0a1230',
    textAlign: 'center'
  },
  table: {
    display: 'table',
    width: '100%',
    marginTop: 16
  },
  tableHeadRow: {
    flexDirection: 'row',
    backgroundColor: '#6C63FF',
    color: '#f8f9fb',
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8
  },
  tableRow: {
    flexDirection: 'row'
  },
  tableCol: {
    padding: 8
  },
  tableHeadCell: {
    marginTop: 5,
    fontSize: 10
  },
  tableCell: {
    marginTop: 5,
    fontSize: 9,
    borderLeft: '1px solid #0a1230',
    paddingLeft: 4
  }
});

var MyDocument = function MyDocument(_ref) {
  var imagesUrl = _ref.imagesUrl,
      sections = _ref.sections;
  console.log('PDF Sections --> ', sections);
  console.log('PDF ImagesUrl --> ', imagesUrl);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_9__["Document"], {
    scale: 96 / 72,
    renderMode: "svg",
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_9__["Page"], {
      size: "A4",
      style: styles.homePage,
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_9__["View"], {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_9__["Text"], {
          style: styles.mainTitle,
          children: "Business plan"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 48,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 47,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 7
    }, _this), sections.map(function (section) {
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_9__["Page"], {
        size: "A4",
        style: styles.homePage,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_9__["View"], {
          style: {
            marginBottom: 8
          },
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_9__["Text"], {
            style: {
              fontSize: 18
            },
            children: section.title
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 55,
            columnNumber: 15
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 54,
          columnNumber: 13
        }, _this), section.fields.map(function (field) {
          console.log(field);

          switch (field.type) {
            case 'table':
              return field.type == 'table' && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_9__["View"], {
                style: styles.table,
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_9__["View"], {
                  style: styles.tableHeadRow,
                  children: field.headRows.map(function (headRow) {
                    var headRowsQuantity = field.headRows.length;

                    switch (headRowsQuantity) {
                      case 1:
                        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_9__["View"], {
                          style: {
                            width: '100%',
                            padding: 8
                          },
                          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_9__["Text"], {
                            style: styles.tableHeadCell,
                            children: headRow
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 72,
                            columnNumber: 37
                          }, _this)
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 71,
                          columnNumber: 35
                        }, _this);

                      case 2:
                        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_9__["View"], {
                          style: {
                            width: '50%',
                            padding: 8
                          },
                          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_9__["Text"], {
                            style: styles.tableHeadCell,
                            children: headRow
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 78,
                            columnNumber: 37
                          }, _this)
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 77,
                          columnNumber: 35
                        }, _this);

                      case 3:
                        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_9__["View"], {
                          style: {
                            width: '33.33%',
                            padding: 8
                          },
                          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_9__["Text"], {
                            style: styles.tableHeadCell,
                            children: headRow
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 84,
                            columnNumber: 37
                          }, _this)
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 83,
                          columnNumber: 35
                        }, _this);

                      case 4:
                        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_9__["View"], {
                          style: {
                            width: '25%',
                            padding: 8
                          },
                          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_9__["Text"], {
                            style: styles.tableHeadCell,
                            children: headRow
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 90,
                            columnNumber: 37
                          }, _this)
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 89,
                          columnNumber: 35
                        }, _this);

                      case 5:
                        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_9__["View"], {
                          style: {
                            width: '20%',
                            padding: 8
                          },
                          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_9__["Text"], {
                            style: styles.tableHeadCell,
                            children: headRow
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 96,
                            columnNumber: 37
                          }, _this)
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 95,
                          columnNumber: 35
                        }, _this);

                      case 6:
                        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_9__["View"], {
                          style: {
                            width: '16.66%',
                            padding: 8
                          },
                          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_9__["Text"], {
                            style: styles.tableHeadCell,
                            children: headRow
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 102,
                            columnNumber: 37
                          }, _this)
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 101,
                          columnNumber: 35
                        }, _this);

                      case 7:
                        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_9__["View"], {
                          style: {
                            width: '14.28%',
                            padding: 8
                          },
                          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_9__["Text"], {
                            style: styles.tableHeadCell,
                            children: headRow
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 108,
                            columnNumber: 37
                          }, _this)
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 107,
                          columnNumber: 35
                        }, _this);

                      case 8:
                        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_9__["View"], {
                          style: {
                            width: '12.5%',
                            padding: 8
                          },
                          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_9__["Text"], {
                            style: styles.tableHeadCell,
                            children: headRow
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 114,
                            columnNumber: 37
                          }, _this)
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 113,
                          columnNumber: 35
                        }, _this);

                      case 9:
                        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_9__["View"], {
                          style: {
                            width: '11.11%',
                            padding: 8
                          },
                          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_9__["Text"], {
                            style: styles.tableHeadCell,
                            children: headRow
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 120,
                            columnNumber: 37
                          }, _this)
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 119,
                          columnNumber: 35
                        }, _this);

                      case 10:
                        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_9__["View"], {
                          style: {
                            width: '10%',
                            padding: 8
                          },
                          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_9__["Text"], {
                            style: styles.tableHeadCell,
                            children: headRow
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 126,
                            columnNumber: 37
                          }, _this)
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 125,
                          columnNumber: 35
                        }, _this);

                      case 11:
                        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_9__["View"], {
                          style: {
                            width: '9.09%',
                            padding: 8
                          },
                          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_9__["Text"], {
                            style: styles.tableHeadCell,
                            children: headRow
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 132,
                            columnNumber: 37
                          }, _this)
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 131,
                          columnNumber: 35
                        }, _this);

                      case 12:
                        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_9__["View"], {
                          style: {
                            width: '8.33%',
                            padding: 8
                          },
                          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_9__["Text"], {
                            style: styles.tableHeadCell,
                            children: headRow
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 138,
                            columnNumber: 37
                          }, _this)
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 137,
                          columnNumber: 35
                        }, _this);
                    }
                  })
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 65,
                  columnNumber: 25
                }, _this), field.rows.map(function (row) {
                  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_9__["View"], {
                    style: styles.tableRow,
                    children: row.row.map(function (rowName) {
                      var BodyRowsQuantity = field.rows.length;

                      switch (BodyRowsQuantity) {
                        case 1:
                          return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_9__["View"], {
                            style: {
                              width: '100%',
                              padding: 8
                            },
                            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_9__["Text"], {
                              style: styles.tableCell,
                              children: rowName
                            }, void 0, false, {
                              fileName: _jsxFileName,
                              lineNumber: 154,
                              columnNumber: 41
                            }, _this)
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 153,
                            columnNumber: 39
                          }, _this);

                        case 2:
                          return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_9__["View"], {
                            style: {
                              width: '50%',
                              padding: 8
                            },
                            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_9__["Text"], {
                              style: styles.tableCell,
                              children: rowName
                            }, void 0, false, {
                              fileName: _jsxFileName,
                              lineNumber: 160,
                              columnNumber: 41
                            }, _this)
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 159,
                            columnNumber: 39
                          }, _this);

                        case 3:
                          return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_9__["View"], {
                            style: {
                              width: '33.33%',
                              padding: 8
                            },
                            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_9__["Text"], {
                              style: styles.tableCell,
                              children: rowName
                            }, void 0, false, {
                              fileName: _jsxFileName,
                              lineNumber: 166,
                              columnNumber: 41
                            }, _this)
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 165,
                            columnNumber: 39
                          }, _this);

                        case 4:
                          return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_9__["View"], {
                            style: {
                              width: '25%',
                              padding: 8
                            },
                            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_9__["Text"], {
                              style: styles.tableCell,
                              children: rowName
                            }, void 0, false, {
                              fileName: _jsxFileName,
                              lineNumber: 172,
                              columnNumber: 41
                            }, _this)
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 171,
                            columnNumber: 39
                          }, _this);

                        case 5:
                          return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_9__["View"], {
                            style: {
                              width: '20%',
                              padding: 8
                            },
                            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_9__["Text"], {
                              style: styles.tableCell,
                              children: rowName
                            }, void 0, false, {
                              fileName: _jsxFileName,
                              lineNumber: 178,
                              columnNumber: 41
                            }, _this)
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 177,
                            columnNumber: 39
                          }, _this);

                        case 6:
                          return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_9__["View"], {
                            style: {
                              width: '16.66%',
                              padding: 8
                            },
                            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_9__["Text"], {
                              style: styles.tableCell,
                              children: rowName
                            }, void 0, false, {
                              fileName: _jsxFileName,
                              lineNumber: 184,
                              columnNumber: 41
                            }, _this)
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 183,
                            columnNumber: 39
                          }, _this);

                        case 7:
                          return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_9__["View"], {
                            style: {
                              width: '14.28%',
                              padding: 8
                            },
                            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_9__["Text"], {
                              style: styles.tableCell,
                              children: rowName
                            }, void 0, false, {
                              fileName: _jsxFileName,
                              lineNumber: 190,
                              columnNumber: 41
                            }, _this)
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 189,
                            columnNumber: 39
                          }, _this);

                        case 8:
                          return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_9__["View"], {
                            style: {
                              width: '12.5%',
                              padding: 8
                            },
                            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_9__["Text"], {
                              style: styles.tableCell,
                              children: rowName
                            }, void 0, false, {
                              fileName: _jsxFileName,
                              lineNumber: 196,
                              columnNumber: 41
                            }, _this)
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 195,
                            columnNumber: 39
                          }, _this);

                        case 9:
                          return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_9__["View"], {
                            style: {
                              width: '11.11%',
                              padding: 8
                            },
                            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_9__["Text"], {
                              style: styles.tableCell,
                              children: rowName
                            }, void 0, false, {
                              fileName: _jsxFileName,
                              lineNumber: 202,
                              columnNumber: 41
                            }, _this)
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 201,
                            columnNumber: 39
                          }, _this);

                        case 10:
                          return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_9__["View"], {
                            style: {
                              width: '10%',
                              padding: 8
                            },
                            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_9__["Text"], {
                              style: styles.tableCell,
                              children: rowName
                            }, void 0, false, {
                              fileName: _jsxFileName,
                              lineNumber: 208,
                              columnNumber: 41
                            }, _this)
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 207,
                            columnNumber: 39
                          }, _this);

                        case 11:
                          return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_9__["View"], {
                            style: {
                              width: '9.09%',
                              padding: 8
                            },
                            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_9__["Text"], {
                              style: styles.tableCell,
                              children: rowName
                            }, void 0, false, {
                              fileName: _jsxFileName,
                              lineNumber: 214,
                              columnNumber: 41
                            }, _this)
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 213,
                            columnNumber: 39
                          }, _this);

                        case 12:
                          return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_9__["View"], {
                            style: {
                              width: '8.33%',
                              padding: 8
                            },
                            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_9__["Text"], {
                              style: styles.tableCell,
                              children: rowName
                            }, void 0, false, {
                              fileName: _jsxFileName,
                              lineNumber: 220,
                              columnNumber: 41
                            }, _this)
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 219,
                            columnNumber: 39
                          }, _this);
                      }
                    })
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 147,
                    columnNumber: 29
                  }, _this);
                })]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 63,
                columnNumber: 23
              }, _this);

            case 'header':
              return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_9__["View"], {
                style: {
                  marginTop: 16
                },
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_9__["Text"], {
                  style: {
                    fontSize: 14
                  },
                  children: field.title
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 234,
                  columnNumber: 23
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 233,
                columnNumber: 21
              }, _this);

            case 'spacing':
              return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_9__["View"], {
                style: {
                  marginTop: 12,
                  marginBottom: 12
                }
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 238,
                columnNumber: 26
              }, _this);

            case 'chart':
              return imagesUrl.map(function (doc) {
                if (doc.imageIndex === field.index) {
                  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_9__["View"], {
                    style: {
                      marginTop: 16
                    },
                    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_9__["Image"], {
                      style: {
                        width: '100%'
                      },
                      src: doc.imageUrl
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 244,
                      columnNumber: 27
                    }, _this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 243,
                    columnNumber: 25
                  }, _this);
                }
              });

            case 'text':
              var formattedText = jquery__WEBPACK_IMPORTED_MODULE_12___default()(field.body).map(function () {
                return jquery__WEBPACK_IMPORTED_MODULE_12___default()('<div>').append(this).html();
              });
              console.log(formattedText);
              return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_9__["View"], {
                style: {
                  marginTop: 16
                },
                children: jquery__WEBPACK_IMPORTED_MODULE_12___default.a.map(formattedText, function (res) {
                  console.log(res.toString().includes('<p></p>'));
                  console.log(res.includes('<strong>')); // START --> <p></p>

                  if (res.startsWith('<p>') && !res.includes('<strong>') && !res.includes('<em>') && !res.includes('<s>') && !res.includes('<u>')) {
                    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_9__["Text"], {
                      style: {
                        fontSize: 12
                      },
                      children: res.replace(/(<([^>]+)>)/gi, '')
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 267,
                      columnNumber: 34
                    }, _this);
                  } // <p>STRONG</p>
                  else if (res.startsWith('<p>') && res.includes('<strong>') && !res.includes('<em>') && !res.includes('<s>') && !res.includes('<u>')) {
                      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_9__["Text"], {
                        style: {
                          fontSize: 12,
                          fontFamily: 'Montserrat-SemiBold'
                        },
                        children: res.replace(/(<([^>]+)>)/gi, '')
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 278,
                        columnNumber: 29
                      }, _this);
                    } // <p>EM</p>
                    else if (res.startsWith('<p>') && !res.includes('<strong>') && res.includes('<em>') && !res.includes('<s>') && !res.includes('<u>')) {
                        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_9__["Text"], {
                          style: {
                            fontSize: 12,
                            fontFamily: 'Montserrat-Italic'
                          },
                          children: res.replace(/(<([^>]+)>)/gi, '')
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 289,
                          columnNumber: 34
                        }, _this);
                      } // <p>EM + STRONG</p>
                      else if (res.startsWith('<p>') && res.includes('<strong>') && res.includes('<em>') && !res.includes('<s>') && !res.includes('<u>')) {
                          return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_9__["Text"], {
                            style: {
                              fontSize: 12,
                              fontFamily: 'Montserrat-SemiBoldItalic'
                            },
                            children: res.replace(/(<([^>]+)>)/gi, '')
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 300,
                            columnNumber: 29
                          }, _this);
                        } // <p>S</p>
                        else if (res.startsWith('<p>') && res.includes('<s>') && !res.includes('<strong>') && !res.includes('<em>') && !res.includes('<u>')) {
                            return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_9__["Text"], {
                              style: {
                                fontSize: 12,
                                textDecoration: 'line-through'
                              },
                              children: res.replace(/(<([^>]+)>)/gi, '')
                            }, void 0, false, {
                              fileName: _jsxFileName,
                              lineNumber: 313,
                              columnNumber: 34
                            }, _this);
                          } // <p>S + EM</p>
                          else if (res.startsWith('<p>') && res.includes('<s>') && res.includes('<em>') && !res.includes('<strong>') && !res.includes('<u>')) {
                              return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_9__["Text"], {
                                style: {
                                  fontSize: 12,
                                  fontFamily: 'Montserrat-Italic',
                                  textDecoration: 'line-through'
                                },
                                children: res.replace(/(<([^>]+)>)/gi, '')
                              }, void 0, false, {
                                fileName: _jsxFileName,
                                lineNumber: 324,
                                columnNumber: 29
                              }, _this);
                            } // <p>S + EM + STRONG</p>
                            else if (res.startsWith('<p>') && res.includes('<s>') && res.includes('<em>') && res.includes('<strong>') && !res.includes('<u>')) {
                                return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_9__["Text"], {
                                  style: {
                                    fontSize: 12,
                                    fontFamily: 'Montserrat-SemiBoldItalic',
                                    textDecoration: 'line-through'
                                  },
                                  children: res.replace(/(<([^>]+)>)/gi, '')
                                }, void 0, false, {
                                  fileName: _jsxFileName,
                                  lineNumber: 338,
                                  columnNumber: 29
                                }, _this);
                              } // <p>U</p>
                              else if (res.startsWith('<p>') && res.includes('<u>') && !res.includes('<s>') && !res.includes('<strong>') && !res.includes('<em>')) {
                                  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_9__["Text"], {
                                    style: {
                                      fontSize: 12,
                                      textDecoration: 'underline'
                                    },
                                    children: res.replace(/(<([^>]+)>)/gi, '')
                                  }, void 0, false, {
                                    fileName: _jsxFileName,
                                    lineNumber: 351,
                                    columnNumber: 34
                                  }, _this);
                                } // <p>U + EM</p>
                                else if (res.startsWith('<p>') && res.includes('<u>') && !res.includes('<s>') && !res.includes('<strong>') && res.includes('<em>')) {
                                    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_9__["Text"], {
                                      style: {
                                        fontSize: 12,
                                        fontFamily: 'Montserrat-Italic',
                                        textDecoration: 'underline'
                                      },
                                      children: res.replace(/(<([^>]+)>)/gi, '')
                                    }, void 0, false, {
                                      fileName: _jsxFileName,
                                      lineNumber: 362,
                                      columnNumber: 29
                                    }, _this);
                                  } // <p>U + S</p>
                                  else if (res.startsWith('<p>') && res.includes('<u>') && res.includes('<s>') && !res.includes('<strong>') && !res.includes('<em>')) {
                                      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_9__["Text"], {
                                        style: {
                                          fontSize: 12,
                                          textDecoration: 'line-through underline'
                                        },
                                        children: res.replace(/(<([^>]+)>)/gi, '')
                                      }, void 0, false, {
                                        fileName: _jsxFileName,
                                        lineNumber: 376,
                                        columnNumber: 29
                                      }, _this);
                                    } // <p>U + STRONG</p>
                                    else if (res.startsWith('<p>') && res.includes('<u>') && !res.includes('<s>') && res.includes('<strong>') && !res.includes('<em>')) {
                                        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_9__["Text"], {
                                          style: {
                                            fontSize: 12,
                                            fontFamily: 'Montserrat-SemiBold',
                                            textDecoration: 'underline'
                                          },
                                          children: res.replace(/(<([^>]+)>)/gi, '')
                                        }, void 0, false, {
                                          fileName: _jsxFileName,
                                          lineNumber: 390,
                                          columnNumber: 29
                                        }, _this);
                                      } // <p>U + S + STRONG</p>
                                      else if (res.startsWith('<p>') && res.includes('<u>') && res.includes('<s>') && res.includes('<strong>') && !res.includes('<em>')) {
                                          return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_9__["Text"], {
                                            style: {
                                              fontSize: 12,
                                              fontFamily: 'Montserrat-SemiBold',
                                              textDecoration: 'line-through underline'
                                            },
                                            children: res.replace(/(<([^>]+)>)/gi, '')
                                          }, void 0, false, {
                                            fileName: _jsxFileName,
                                            lineNumber: 404,
                                            columnNumber: 29
                                          }, _this);
                                        } // <p>U + S + STRONG + EM</p>
                                        else if (res.startsWith('<p>') && res.includes('<u>') && res.includes('<s>') && res.includes('<strong>') && res.includes('<em>')) {
                                            return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_9__["Text"], {
                                              style: {
                                                fontSize: 12,
                                                fontFamily: 'Montserrat-SemiBoldItalic',
                                                textDecoration: 'line-through underline'
                                              },
                                              children: res.replace(/(<([^>]+)>)/gi, '')
                                            }, void 0, false, {
                                              fileName: _jsxFileName,
                                              lineNumber: 418,
                                              columnNumber: 29
                                            }, _this);
                                          } // <p>U + S + EM</p>
                                          else if (res.startsWith('<p>') && res.includes('<u>') && res.includes('<s>') && !res.includes('<strong>') && res.includes('<em>')) {
                                              return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_9__["Text"], {
                                                style: {
                                                  fontSize: 12,
                                                  fontFamily: 'Montserrat-Italic',
                                                  textDecoration: 'line-through underline'
                                                },
                                                children: res.replace(/(<([^>]+)>)/gi, '')
                                              }, void 0, false, {
                                                fileName: _jsxFileName,
                                                lineNumber: 434,
                                                columnNumber: 29
                                              }, _this);
                                            } // <p>U + STRONG + EM</p>
                                            else if (res.startsWith('<p>') && res.includes('<u>') && !res.includes('<s>') && res.includes('<strong>') && res.includes('<em>')) {
                                                return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_9__["Text"], {
                                                  style: {
                                                    fontSize: 12,
                                                    fontFamily: 'Montserrat-SemiBoldItalic',
                                                    textDecoration: 'underline'
                                                  },
                                                  children: res.replace(/(<([^>]+)>)/gi, '')
                                                }, void 0, false, {
                                                  fileName: _jsxFileName,
                                                  lineNumber: 448,
                                                  columnNumber: 29
                                                }, _this);
                                              } // END --> <p></p>
                  // START --> <h2></h2>


                  if (res.startsWith('<h2>') && !res.includes('<strong>') && !res.includes('<em>') && !res.includes('<s>') && !res.includes('<u>')) {
                    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_9__["Text"], {
                      style: {
                        fontSize: 14
                      },
                      children: res.replace(/(<([^>]+)>)/gi, '')
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 462,
                      columnNumber: 34
                    }, _this);
                  } // <h2>STRONG</h2>
                  else if (res.startsWith('<h2>') && res.includes('<strong>') && !res.includes('<em>') && !res.includes('<s>') && !res.includes('<u>')) {
                      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_9__["Text"], {
                        style: {
                          fontSize: 14,
                          fontFamily: 'Montserrat-SemiBold'
                        },
                        children: res.replace(/(<([^>]+)>)/gi, '')
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 473,
                        columnNumber: 29
                      }, _this);
                    } // <h2>EM</h2>
                    else if (res.startsWith('<h2>') && !res.includes('<strong>') && res.includes('<em>') && !res.includes('<s>') && !res.includes('<u>')) {
                        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_9__["Text"], {
                          style: {
                            fontSize: 14,
                            fontFamily: 'Montserrat-Italic'
                          },
                          children: res.replace(/(<([^>]+)>)/gi, '')
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 484,
                          columnNumber: 34
                        }, _this);
                      } // <h2>EM + STRONG</h2>
                      else if (res.startsWith('<h2>') && res.includes('<strong>') && res.includes('<em>') && !res.includes('<s>') && !res.includes('<u>')) {
                          return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_9__["Text"], {
                            style: {
                              fontSize: 14,
                              fontFamily: 'Montserrat-SemiBoldItalic'
                            },
                            children: res.replace(/(<([^>]+)>)/gi, '')
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 495,
                            columnNumber: 29
                          }, _this);
                        } // <h2>S</h2>
                        else if (res.startsWith('<h2>') && res.includes('<s>') && !res.includes('<strong>') && !res.includes('<em>') && !res.includes('<u>')) {
                            return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_9__["Text"], {
                              style: {
                                fontSize: 14,
                                textDecoration: 'line-through'
                              },
                              children: res.replace(/(<([^>]+)>)/gi, '')
                            }, void 0, false, {
                              fileName: _jsxFileName,
                              lineNumber: 508,
                              columnNumber: 34
                            }, _this);
                          } // <h2>S + EM</h2>
                          else if (res.startsWith('<h2>') && res.includes('<s>') && res.includes('<em>') && !res.includes('<strong>') && !res.includes('<u>')) {
                              return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_9__["Text"], {
                                style: {
                                  fontSize: 14,
                                  fontFamily: 'Montserrat-Italic',
                                  textDecoration: 'line-through'
                                },
                                children: res.replace(/(<([^>]+)>)/gi, '')
                              }, void 0, false, {
                                fileName: _jsxFileName,
                                lineNumber: 519,
                                columnNumber: 29
                              }, _this);
                            } // <h2>S + EM + STRONG</h2>
                            else if (res.startsWith('<h2>') && res.includes('<s>') && res.includes('<em>') && res.includes('<strong>') && !res.includes('<u>')) {
                                return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_9__["Text"], {
                                  style: {
                                    fontSize: 14,
                                    fontFamily: 'Montserrat-SemiBoldItalic',
                                    textDecoration: 'line-through'
                                  },
                                  children: res.replace(/(<([^>]+)>)/gi, '')
                                }, void 0, false, {
                                  fileName: _jsxFileName,
                                  lineNumber: 533,
                                  columnNumber: 29
                                }, _this);
                              } // <h2>U</h2>
                              else if (res.startsWith('<h2>') && res.includes('<u>') && !res.includes('<s>') && !res.includes('<strong>') && !res.includes('<em>')) {
                                  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_9__["Text"], {
                                    style: {
                                      fontSize: 14,
                                      textDecoration: 'underline'
                                    },
                                    children: res.replace(/(<([^>]+)>)/gi, '')
                                  }, void 0, false, {
                                    fileName: _jsxFileName,
                                    lineNumber: 546,
                                    columnNumber: 34
                                  }, _this);
                                } // <h2>U + EM</h2>
                                else if (res.startsWith('<h2>') && res.includes('<u>') && !res.includes('<s>') && !res.includes('<strong>') && res.includes('<em>')) {
                                    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_9__["Text"], {
                                      style: {
                                        fontSize: 14,
                                        fontFamily: 'Montserrat-Italic',
                                        textDecoration: 'underline'
                                      },
                                      children: res.replace(/(<([^>]+)>)/gi, '')
                                    }, void 0, false, {
                                      fileName: _jsxFileName,
                                      lineNumber: 557,
                                      columnNumber: 29
                                    }, _this);
                                  } // <h2>U + S</h2>
                                  else if (res.startsWith('<h2>') && res.includes('<u>') && res.includes('<s>') && !res.includes('<strong>') && !res.includes('<em>')) {
                                      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_9__["Text"], {
                                        style: {
                                          fontSize: 14,
                                          textDecoration: 'line-through underline'
                                        },
                                        children: res.replace(/(<([^>]+)>)/gi, '')
                                      }, void 0, false, {
                                        fileName: _jsxFileName,
                                        lineNumber: 571,
                                        columnNumber: 29
                                      }, _this);
                                    } // <h2>U + STRONG</h2>
                                    else if (res.startsWith('<h2>') && res.includes('<u>') && !res.includes('<s>') && res.includes('<strong>') && !res.includes('<em>')) {
                                        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_9__["Text"], {
                                          style: {
                                            fontSize: 14,
                                            fontFamily: 'Montserrat-SemiBold',
                                            textDecoration: 'underline'
                                          },
                                          children: res.replace(/(<([^>]+)>)/gi, '')
                                        }, void 0, false, {
                                          fileName: _jsxFileName,
                                          lineNumber: 585,
                                          columnNumber: 29
                                        }, _this);
                                      } // <h2>U + S + STRONG</h2>
                                      else if (res.startsWith('<h2>') && res.includes('<u>') && res.includes('<s>') && res.includes('<strong>') && !res.includes('<em>')) {
                                          return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_9__["Text"], {
                                            style: {
                                              fontSize: 14,
                                              fontFamily: 'Montserrat-SemiBold',
                                              textDecoration: 'line-through underline'
                                            },
                                            children: res.replace(/(<([^>]+)>)/gi, '')
                                          }, void 0, false, {
                                            fileName: _jsxFileName,
                                            lineNumber: 599,
                                            columnNumber: 29
                                          }, _this);
                                        } // <h2>U + S + STRONG + EM</h2>
                                        else if (res.startsWith('<h2>') && res.includes('<u>') && res.includes('<s>') && res.includes('<strong>') && res.includes('<em>')) {
                                            return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_9__["Text"], {
                                              style: {
                                                fontSize: 14,
                                                fontFamily: 'Montserrat-SemiBoldItalic',
                                                textDecoration: 'line-through underline'
                                              },
                                              children: res.replace(/(<([^>]+)>)/gi, '')
                                            }, void 0, false, {
                                              fileName: _jsxFileName,
                                              lineNumber: 613,
                                              columnNumber: 29
                                            }, _this);
                                          } // <h2>U + S + EM</h2>
                                          else if (res.startsWith('<h2>') && res.includes('<u>') && res.includes('<s>') && !res.includes('<strong>') && res.includes('<em>')) {
                                              return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_9__["Text"], {
                                                style: {
                                                  fontSize: 14,
                                                  fontFamily: 'Montserrat-Italic',
                                                  textDecoration: 'line-through underline'
                                                },
                                                children: res.replace(/(<([^>]+)>)/gi, '')
                                              }, void 0, false, {
                                                fileName: _jsxFileName,
                                                lineNumber: 629,
                                                columnNumber: 29
                                              }, _this);
                                            } // <h2>U + STRONG + EM</h2>
                                            else if (res.startsWith('<h2>') && res.includes('<u>') && !res.includes('<s>') && res.includes('<strong>') && res.includes('<em>')) {
                                                return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_9__["Text"], {
                                                  style: {
                                                    fontSize: 14,
                                                    fontFamily: 'Montserrat-SemiBoldItalic',
                                                    textDecoration: 'underline'
                                                  },
                                                  children: res.replace(/(<([^>]+)>)/gi, '')
                                                }, void 0, false, {
                                                  fileName: _jsxFileName,
                                                  lineNumber: 643,
                                                  columnNumber: 29
                                                }, _this);
                                              } // END --> <h2></h2>
                  // START --> <h1></h1>


                  if (res.startsWith('<h1>') && !res.includes('<strong>') && !res.includes('<em>') && !res.includes('<s>') && !res.includes('<u>')) {
                    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_9__["Text"], {
                      style: {
                        fontSize: 16
                      },
                      children: res.replace(/(<([^>]+)>)/gi, '')
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 657,
                      columnNumber: 34
                    }, _this);
                  } // <h1>STRONG</h1>
                  else if (res.startsWith('<h1>') && res.includes('<strong>') && !res.includes('<em>') && !res.includes('<s>') && !res.includes('<u>')) {
                      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_9__["Text"], {
                        style: {
                          fontSize: 16,
                          fontFamily: 'Montserrat-SemiBold'
                        },
                        children: res.replace(/(<([^>]+)>)/gi, '')
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 668,
                        columnNumber: 29
                      }, _this);
                    } // <h1>EM</h1>
                    else if (res.startsWith('<h1>') && !res.includes('<strong>') && res.includes('<em>') && !res.includes('<s>') && !res.includes('<u>')) {
                        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_9__["Text"], {
                          style: {
                            fontSize: 16,
                            fontFamily: 'Montserrat-Italic'
                          },
                          children: res.replace(/(<([^>]+)>)/gi, '')
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 679,
                          columnNumber: 34
                        }, _this);
                      } // <h1>EM + STRONG</h1>
                      else if (res.startsWith('<h1>') && res.includes('<strong>') && res.includes('<em>') && !res.includes('<s>') && !res.includes('<u>')) {
                          return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_9__["Text"], {
                            style: {
                              fontSize: 16,
                              fontFamily: 'Montserrat-SemiBoldItalic'
                            },
                            children: res.replace(/(<([^>]+)>)/gi, '')
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 690,
                            columnNumber: 29
                          }, _this);
                        } // <h1>S</h1>
                        else if (res.startsWith('<h1>') && res.includes('<s>') && !res.includes('<strong>') && !res.includes('<em>') && !res.includes('<u>')) {
                            return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_9__["Text"], {
                              style: {
                                fontSize: 16,
                                textDecoration: 'line-through'
                              },
                              children: res.replace(/(<([^>]+)>)/gi, '')
                            }, void 0, false, {
                              fileName: _jsxFileName,
                              lineNumber: 703,
                              columnNumber: 34
                            }, _this);
                          } // <h1>S + EM</h1>
                          else if (res.startsWith('<h1>') && res.includes('<s>') && res.includes('<em>') && !res.includes('<strong>') && !res.includes('<u>')) {
                              return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_9__["Text"], {
                                style: {
                                  fontSize: 16,
                                  fontFamily: 'Montserrat-Italic',
                                  textDecoration: 'line-through'
                                },
                                children: res.replace(/(<([^>]+)>)/gi, '')
                              }, void 0, false, {
                                fileName: _jsxFileName,
                                lineNumber: 714,
                                columnNumber: 29
                              }, _this);
                            } // <h1>S + EM + STRONG</h1>
                            else if (res.startsWith('<h1>') && res.includes('<s>') && res.includes('<em>') && res.includes('<strong>') && !res.includes('<u>')) {
                                return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_9__["Text"], {
                                  style: {
                                    fontSize: 16,
                                    fontFamily: 'Montserrat-SemiBoldItalic',
                                    textDecoration: 'line-through'
                                  },
                                  children: res.replace(/(<([^>]+)>)/gi, '')
                                }, void 0, false, {
                                  fileName: _jsxFileName,
                                  lineNumber: 728,
                                  columnNumber: 29
                                }, _this);
                              } // <h1>U</h1>
                              else if (res.startsWith('<h1>') && res.includes('<u>') && !res.includes('<s>') && !res.includes('<strong>') && !res.includes('<em>')) {
                                  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_9__["Text"], {
                                    style: {
                                      fontSize: 16,
                                      textDecoration: 'underline'
                                    },
                                    children: res.replace(/(<([^>]+)>)/gi, '')
                                  }, void 0, false, {
                                    fileName: _jsxFileName,
                                    lineNumber: 741,
                                    columnNumber: 34
                                  }, _this);
                                } // <h1>U + EM</h1>
                                else if (res.startsWith('<h1>') && res.includes('<u>') && !res.includes('<s>') && !res.includes('<strong>') && res.includes('<em>')) {
                                    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_9__["Text"], {
                                      style: {
                                        fontSize: 16,
                                        fontFamily: 'Montserrat-Italic',
                                        textDecoration: 'underline'
                                      },
                                      children: res.replace(/(<([^>]+)>)/gi, '')
                                    }, void 0, false, {
                                      fileName: _jsxFileName,
                                      lineNumber: 752,
                                      columnNumber: 29
                                    }, _this);
                                  } // <h1>U + S</h1>
                                  else if (res.startsWith('<h1>') && res.includes('<u>') && res.includes('<s>') && !res.includes('<strong>') && !res.includes('<em>')) {
                                      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_9__["Text"], {
                                        style: {
                                          fontSize: 16,
                                          textDecoration: 'line-through underline'
                                        },
                                        children: res.replace(/(<([^>]+)>)/gi, '')
                                      }, void 0, false, {
                                        fileName: _jsxFileName,
                                        lineNumber: 766,
                                        columnNumber: 29
                                      }, _this);
                                    } // <h1>U + STRONG</h1>
                                    else if (res.startsWith('<h1>') && res.includes('<u>') && !res.includes('<s>') && res.includes('<strong>') && !res.includes('<em>')) {
                                        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_9__["Text"], {
                                          style: {
                                            fontSize: 16,
                                            fontFamily: 'Montserrat-SemiBold',
                                            textDecoration: 'underline'
                                          },
                                          children: res.replace(/(<([^>]+)>)/gi, '')
                                        }, void 0, false, {
                                          fileName: _jsxFileName,
                                          lineNumber: 780,
                                          columnNumber: 29
                                        }, _this);
                                      } // <h1>U + S + STRONG</h1>
                                      else if (res.startsWith('<h1>') && res.includes('<u>') && res.includes('<s>') && res.includes('<strong>') && !res.includes('<em>')) {
                                          return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_9__["Text"], {
                                            style: {
                                              fontSize: 16,
                                              fontFamily: 'Montserrat-SemiBold',
                                              textDecoration: 'line-through underline'
                                            },
                                            children: res.replace(/(<([^>]+)>)/gi, '')
                                          }, void 0, false, {
                                            fileName: _jsxFileName,
                                            lineNumber: 794,
                                            columnNumber: 29
                                          }, _this);
                                        } // <h1>U + S + STRONG + EM</h1>
                                        else if (res.startsWith('<h1>') && res.includes('<u>') && res.includes('<s>') && res.includes('<strong>') && res.includes('<em>')) {
                                            return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_9__["Text"], {
                                              style: {
                                                fontSize: 16,
                                                fontFamily: 'Montserrat-SemiBoldItalic',
                                                textDecoration: 'line-through underline'
                                              },
                                              children: res.replace(/(<([^>]+)>)/gi, '')
                                            }, void 0, false, {
                                              fileName: _jsxFileName,
                                              lineNumber: 808,
                                              columnNumber: 29
                                            }, _this);
                                          } // <h1>U + S + EM</h1>
                                          else if (res.startsWith('<h1>') && res.includes('<u>') && res.includes('<s>') && !res.includes('<strong>') && res.includes('<em>')) {
                                              return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_9__["Text"], {
                                                style: {
                                                  fontSize: 16,
                                                  fontFamily: 'Montserrat-Italic',
                                                  textDecoration: 'line-through underline'
                                                },
                                                children: res.replace(/(<([^>]+)>)/gi, '')
                                              }, void 0, false, {
                                                fileName: _jsxFileName,
                                                lineNumber: 824,
                                                columnNumber: 29
                                              }, _this);
                                            } // <h1>U + STRONG + EM</h1>
                                            else if (res.startsWith('<h1>') && res.includes('<u>') && !res.includes('<s>') && res.includes('<strong>') && res.includes('<em>')) {
                                                return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_9__["Text"], {
                                                  style: {
                                                    fontSize: 16,
                                                    fontFamily: 'Montserrat-SemiBoldItalic',
                                                    textDecoration: 'underline'
                                                  },
                                                  children: res.replace(/(<([^>]+)>)/gi, '')
                                                }, void 0, false, {
                                                  fileName: _jsxFileName,
                                                  lineNumber: 838,
                                                  columnNumber: 29
                                                }, _this);
                                              } // END --> <h1></h1>
                                              // -------------------- LISTS START --------------------
                                              else if (res.startsWith('<ol>')) {
                                                  // Get particular <li></li> elements
                                                  var newstr = res.replace(/</gi, '<><');
                                                  var response = newstr.split('<>').filter(function (v) {
                                                    return v != '';
                                                  });
                                                  var i = 1;
                                                  return response.map(function (item) {
                                                    // if (item.startsWith('<li>')) {
                                                    //   console.log('IMPORTANT ITEM --> ', item);
                                                    //   console.log(item.replace(/(<([^>]+)>)/gi, ''));
                                                    //   return (
                                                    //     <View style={{ marginLeft: 12 }}>
                                                    //       <Text>{`${i++}. ${item.replace(/(<([^>]+)>)/gi, '')}`}</Text>
                                                    //     </View>
                                                    //   );
                                                    // }
                                                    if (res.startsWith('<li>') && res.includes('<p>') && !res.includes('<strong>') && !res.includes('<em>') && !res.includes('<s>') && !res.includes('<u>')) {
                                                      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_9__["View"], {
                                                        style: {
                                                          marginLeft: 12
                                                        },
                                                        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_9__["Text"], {
                                                          style: {
                                                            fontSize: 12
                                                          },
                                                          children: "".concat(i++, ". ").concat(item.replace(/(<([^>]+)>)/gi, ''))
                                                        }, void 0, false, {
                                                          fileName: _jsxFileName,
                                                          lineNumber: 870,
                                                          columnNumber: 35
                                                        }, _this)
                                                      }, void 0, false, {
                                                        fileName: _jsxFileName,
                                                        lineNumber: 869,
                                                        columnNumber: 33
                                                      }, _this);
                                                    } // <p>STRONG</p>
                                                    else if (res.startsWith('<li>') && res.includes('<p>') && res.includes('<strong>') && !res.includes('<em>') && !res.includes('<s>') && !res.includes('<u>')) {
                                                        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_9__["Text"], {
                                                          style: {
                                                            fontSize: 12,
                                                            fontFamily: 'Montserrat-SemiBold'
                                                          },
                                                          children: res.replace(/(<([^>]+)>)/gi, '')
                                                        }, void 0, false, {
                                                          fileName: _jsxFileName,
                                                          lineNumber: 884,
                                                          columnNumber: 33
                                                        }, _this);
                                                      } // <p>EM</p>
                                                      else if (res.startsWith('<p>') && !res.includes('<strong>') && res.includes('<em>') && !res.includes('<s>') && !res.includes('<u>')) {
                                                          return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_9__["Text"], {
                                                            style: {
                                                              fontSize: 12,
                                                              fontFamily: 'Montserrat-Italic'
                                                            },
                                                            children: res.replace(/(<([^>]+)>)/gi, '')
                                                          }, void 0, false, {
                                                            fileName: _jsxFileName,
                                                            lineNumber: 896,
                                                            columnNumber: 33
                                                          }, _this);
                                                        } // <p>EM + STRONG</p>
                                                        else if (res.startsWith('<p>') && res.includes('<strong>') && res.includes('<em>') && !res.includes('<s>') && !res.includes('<u>')) {
                                                            return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_9__["Text"], {
                                                              style: {
                                                                fontSize: 12,
                                                                fontFamily: 'Montserrat-SemiBoldItalic'
                                                              },
                                                              children: res.replace(/(<([^>]+)>)/gi, '')
                                                            }, void 0, false, {
                                                              fileName: _jsxFileName,
                                                              lineNumber: 908,
                                                              columnNumber: 33
                                                            }, _this);
                                                          } // <p>S</p>
                                                          else if (res.startsWith('<p>') && res.includes('<s>') && !res.includes('<strong>') && !res.includes('<em>') && !res.includes('<u>')) {
                                                              return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_9__["Text"], {
                                                                style: {
                                                                  fontSize: 12,
                                                                  textDecoration: 'line-through'
                                                                },
                                                                children: res.replace(/(<([^>]+)>)/gi, '')
                                                              }, void 0, false, {
                                                                fileName: _jsxFileName,
                                                                lineNumber: 922,
                                                                columnNumber: 33
                                                              }, _this);
                                                            } // <p>S + EM</p>
                                                            else if (res.startsWith('<p>') && res.includes('<s>') && res.includes('<em>') && !res.includes('<strong>') && !res.includes('<u>')) {
                                                                return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_9__["Text"], {
                                                                  style: {
                                                                    fontSize: 12,
                                                                    fontFamily: 'Montserrat-Italic',
                                                                    textDecoration: 'line-through'
                                                                  },
                                                                  children: res.replace(/(<([^>]+)>)/gi, '')
                                                                }, void 0, false, {
                                                                  fileName: _jsxFileName,
                                                                  lineNumber: 934,
                                                                  columnNumber: 33
                                                                }, _this);
                                                              } // <p>S + EM + STRONG</p>
                                                              else if (res.startsWith('<p>') && res.includes('<s>') && res.includes('<em>') && res.includes('<strong>') && !res.includes('<u>')) {
                                                                  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_9__["Text"], {
                                                                    style: {
                                                                      fontSize: 12,
                                                                      fontFamily: 'Montserrat-SemiBoldItalic',
                                                                      textDecoration: 'line-through'
                                                                    },
                                                                    children: res.replace(/(<([^>]+)>)/gi, '')
                                                                  }, void 0, false, {
                                                                    fileName: _jsxFileName,
                                                                    lineNumber: 948,
                                                                    columnNumber: 33
                                                                  }, _this);
                                                                } // <p>U</p>
                                                                else if (res.startsWith('<p>') && res.includes('<u>') && !res.includes('<s>') && !res.includes('<strong>') && !res.includes('<em>')) {
                                                                    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_9__["Text"], {
                                                                      style: {
                                                                        fontSize: 12,
                                                                        textDecoration: 'underline'
                                                                      },
                                                                      children: res.replace(/(<([^>]+)>)/gi, '')
                                                                    }, void 0, false, {
                                                                      fileName: _jsxFileName,
                                                                      lineNumber: 961,
                                                                      columnNumber: 38
                                                                    }, _this);
                                                                  } // <p>U + EM</p>
                                                                  else if (res.startsWith('<p>') && res.includes('<u>') && !res.includes('<s>') && !res.includes('<strong>') && res.includes('<em>')) {
                                                                      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_9__["Text"], {
                                                                        style: {
                                                                          fontSize: 12,
                                                                          fontFamily: 'Montserrat-Italic',
                                                                          textDecoration: 'underline'
                                                                        },
                                                                        children: res.replace(/(<([^>]+)>)/gi, '')
                                                                      }, void 0, false, {
                                                                        fileName: _jsxFileName,
                                                                        lineNumber: 972,
                                                                        columnNumber: 33
                                                                      }, _this);
                                                                    } // <p>U + S</p>
                                                                    else if (res.startsWith('<p>') && res.includes('<u>') && res.includes('<s>') && !res.includes('<strong>') && !res.includes('<em>')) {
                                                                        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_9__["Text"], {
                                                                          style: {
                                                                            fontSize: 12,
                                                                            textDecoration: 'line-through underline'
                                                                          },
                                                                          children: res.replace(/(<([^>]+)>)/gi, '')
                                                                        }, void 0, false, {
                                                                          fileName: _jsxFileName,
                                                                          lineNumber: 986,
                                                                          columnNumber: 33
                                                                        }, _this);
                                                                      } // <p>U + STRONG</p>
                                                                      else if (res.startsWith('<p>') && res.includes('<u>') && !res.includes('<s>') && res.includes('<strong>') && !res.includes('<em>')) {
                                                                          return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_9__["Text"], {
                                                                            style: {
                                                                              fontSize: 12,
                                                                              fontFamily: 'Montserrat-SemiBold',
                                                                              textDecoration: 'underline'
                                                                            },
                                                                            children: res.replace(/(<([^>]+)>)/gi, '')
                                                                          }, void 0, false, {
                                                                            fileName: _jsxFileName,
                                                                            lineNumber: 1000,
                                                                            columnNumber: 33
                                                                          }, _this);
                                                                        } // <p>U + S + STRONG</p>
                                                                        else if (res.startsWith('<p>') && res.includes('<u>') && res.includes('<s>') && res.includes('<strong>') && !res.includes('<em>')) {
                                                                            return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_9__["Text"], {
                                                                              style: {
                                                                                fontSize: 12,
                                                                                fontFamily: 'Montserrat-SemiBold',
                                                                                textDecoration: 'line-through underline'
                                                                              },
                                                                              children: res.replace(/(<([^>]+)>)/gi, '')
                                                                            }, void 0, false, {
                                                                              fileName: _jsxFileName,
                                                                              lineNumber: 1014,
                                                                              columnNumber: 33
                                                                            }, _this);
                                                                          } // <p>U + S + STRONG + EM</p>
                                                                          else if (res.startsWith('<p>') && res.includes('<u>') && res.includes('<s>') && res.includes('<strong>') && res.includes('<em>')) {
                                                                              return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_9__["Text"], {
                                                                                style: {
                                                                                  fontSize: 12,
                                                                                  fontFamily: 'Montserrat-SemiBoldItalic',
                                                                                  textDecoration: 'line-through underline'
                                                                                },
                                                                                children: res.replace(/(<([^>]+)>)/gi, '')
                                                                              }, void 0, false, {
                                                                                fileName: _jsxFileName,
                                                                                lineNumber: 1028,
                                                                                columnNumber: 33
                                                                              }, _this);
                                                                            } // <p>U + S + EM</p>
                                                                            else if (res.startsWith('<p>') && res.includes('<u>') && res.includes('<s>') && !res.includes('<strong>') && res.includes('<em>')) {
                                                                                return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_9__["Text"], {
                                                                                  style: {
                                                                                    fontSize: 12,
                                                                                    fontFamily: 'Montserrat-Italic',
                                                                                    textDecoration: 'line-through underline'
                                                                                  },
                                                                                  children: res.replace(/(<([^>]+)>)/gi, '')
                                                                                }, void 0, false, {
                                                                                  fileName: _jsxFileName,
                                                                                  lineNumber: 1048,
                                                                                  columnNumber: 33
                                                                                }, _this);
                                                                              } // <p>U + STRONG + EM</p>
                                                                              else if (res.startsWith('<p>') && res.includes('<u>') && !res.includes('<s>') && res.includes('<strong>') && res.includes('<em>')) {
                                                                                  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_9__["Text"], {
                                                                                    style: {
                                                                                      fontSize: 12,
                                                                                      fontFamily: 'Montserrat-SemiBoldItalic',
                                                                                      textDecoration: 'underline'
                                                                                    },
                                                                                    children: res.replace(/(<([^>]+)>)/gi, '')
                                                                                  }, void 0, false, {
                                                                                    fileName: _jsxFileName,
                                                                                    lineNumber: 1062,
                                                                                    columnNumber: 33
                                                                                  }, _this);
                                                                                } // END --> <p></p>

                                                  });
                                                }
                })
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 255,
                columnNumber: 21
              }, _this);
          }
        })]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 53,
        columnNumber: 11
      }, _this);
    })]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 45,
    columnNumber: 5
  }, _this);
};

_c = MyDocument;

var ReactPDFDocument = function ReactPDFDocument(_ref2) {
  _s();

  var sections = _ref2.sections;
  var size = Object(_utils_useWindowSize__WEBPACK_IMPORTED_MODULE_13__["useWindowSize"])();
  var saveContainer = Object(react__WEBPACK_IMPORTED_MODULE_4__["useRef"])();
  var dropdownButton = Object(react__WEBPACK_IMPORTED_MODULE_4__["useRef"])();
  var dropdownContainer = Object(react__WEBPACK_IMPORTED_MODULE_4__["useRef"])();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(false),
      dropdownButtonColorHelper = _useState[0],
      setDropdownButtonColorHelper = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(false),
      dropdownContainerHelper = _useState2[0],
      setDropdownContainerHelper = _useState2[1];

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

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(),
      imagesUrl = _useState3[0],
      setImagesUrl = _useState3[1];

  Object(react__WEBPACK_IMPORTED_MODULE_4__["useEffect"])(function () {
    console.log(sections);
    var imagesArray = [];
    setImagesUrl(imagesArray);
    sections && sections.map(function (section) {
      section.fields.map(function (field) {
        if (field.type == 'chart') {
          var colors = field.chartType == 'Pie chart' || field.chartType == 'Doughnut chart' ? ['rgba(205,220,57,1)', 'rgba(255,235,59,1)', 'rgba(255,193,7,1)', 'rgba(255,152,0,1)', 'rgba(255,87,34,1)', 'rgba(244,67,54,1)', 'rgba(233,30,99,1)', 'rgba(156,39,176,1)', 'rgba(103,58,183,1)', 'rgba(63,81,181,1)', 'rgba(96,125,139,1)', 'rgba(121,85,72,1)'] : field.chartType == 'Line chart' || field.chartType == 'Area chart' ? 'rgba(255,185,0 ,1 )' : ['rgba(255,185,0 ,1 )', 'rgba(255,185,0 ,1 )', 'rgba(255,185,0 ,1 )', 'rgba(255,185,0 ,1 )', 'rgba(255,185,0 ,1 )', 'rgba(255,185,0 ,1 )', 'rgba(255,185,0 ,1 )', 'rgba(255,185,0 ,1 )', 'rgba(255,185,0 ,1 )', 'rgba(255,185,0 ,1 )', 'rgba(255,185,0 ,1 )', 'rgba(255,185,0 ,1 )'];
          var colors1 = field.chartType == 'Pie chart' || field.chartType == 'Doughnut chart' ? ['rgba(205,220,57,1)', 'rgba(255,235,59,1)', 'rgba(255,193,7,1)', 'rgba(255,152,0,1)', 'rgba(255,87,34,1)', 'rgba(244,67,54,1)', 'rgba(233,30,99,1)', 'rgba(156,39,176,1)', 'rgba(103,58,183,1)', 'rgba(63,81,181,1)', 'rgba(96,125,139,1)', 'rgba(121,85,72,1)'] : field.chartType == 'Line chart' || field.chartType == 'Area chart' ? 'rgba(0,204,106 ,1 )' : ['rgba(0,204,106 ,1 )', 'rgba(0,204,106 ,1 )', 'rgba(0,204,106 ,1 )', 'rgba(0,204,106 ,1 )', 'rgba(0,204,106 ,1 )', 'rgba(0,204,106 ,1 )', 'rgba(0,204,106 ,1 )', 'rgba(0,204,106 ,1 )', 'rgba(0,204,106 ,1 )', 'rgba(0,204,106 ,1 )', 'rgba(0,204,106 ,1 )', 'rgba(0,204,106 ,1 )'];
          var colors2 = field.chartType == 'Pie chart' || field.chartType == 'Doughnut chart' ? ['rgba(205,220,57,1)', 'rgba(255,235,59,1)', 'rgba(255,193,7,1)', 'rgba(255,152,0,1)', 'rgba(255,87,34,1)', 'rgba(244,67,54,1)', 'rgba(233,30,99,1)', 'rgba(156,39,176,1)', 'rgba(103,58,183,1)', 'rgba(63,81,181,1)', 'rgba(96,125,139,1)', 'rgba(121,85,72,1)'] : field.chartType == 'Line chart' || field.chartType == 'Area chart' ? 'rgba(0,120,215 ,1 )' : ['rgba(0,120,215 ,1 )', 'rgba(0,120,215 ,1 )', 'rgba(0,120,215 ,1 )', 'rgba(0,120,215 ,1 )', 'rgba(0,120,215 ,1 )', 'rgba(0,120,215 ,1 )', 'rgba(0,120,215 ,1 )', 'rgba(0,120,215 ,1 )', 'rgba(0,120,215 ,1 )', 'rgba(0,120,215 ,1 )', 'rgba(0,120,215 ,1 )', 'rgba(0,120,215 ,1 )'];
          var colors3 = field.chartType == 'Pie chart' || field.chartType == 'Doughnut chart' ? ['rgba(205,220,57,1)', 'rgba(255,235,59,1)', 'rgba(255,193,7,1)', 'rgba(255,152,0,1)', 'rgba(255,87,34,1)', 'rgba(244,67,54,1)', 'rgba(233,30,99,1)', 'rgba(156,39,176,1)', 'rgba(103,58,183,1)', 'rgba(63,81,181,1)', 'rgba(96,125,139,1)', 'rgba(121,85,72,1)'] : field.chartType == 'Line chart' || field.chartType == 'Area chart' ? 'rgba(231,72,86 ,1 )' : ['rgba(231,72,86 ,1 )', 'rgba(231,72,86 ,1 )', 'rgba(231,72,86 ,1 )', 'rgba(231,72,86 ,1 )', 'rgba(231,72,86 ,1 )', 'rgba(231,72,86 ,1 )', 'rgba(231,72,86 ,1 )', 'rgba(231,72,86 ,1 )', 'rgba(231,72,86 ,1 )', 'rgba(231,72,86 ,1 )', 'rgba(231,72,86 ,1 )', 'rgba(231,72,86 ,1 )'];
          var colors4 = field.chartType == 'Pie chart' || field.chartType == 'Doughnut chart' ? ['rgba(205,220,57,1)', 'rgba(255,235,59,1)', 'rgba(255,193,7,1)', 'rgba(255,152,0,1)', 'rgba(255,87,34,1)', 'rgba(244,67,54,1)', 'rgba(233,30,99,1)', 'rgba(156,39,176,1)', 'rgba(103,58,183,1)', 'rgba(63,81,181,1)', 'rgba(96,125,139,1)', 'rgba(121,85,72,1)'] : field.chartType == 'Line chart' || field.chartType == 'Area chart' ? 'rgba(126,115,95 ,1 )' : ['rgba(126,115,95 ,1 )', 'rgba(126,115,95 ,1 )', 'rgba(126,115,95 ,1 )', 'rgba(126,115,95 ,1 )', 'rgba(126,115,95 ,1 )', 'rgba(126,115,95 ,1 )', 'rgba(126,115,95 ,1 )', 'rgba(126,115,95 ,1 )', 'rgba(126,115,95 ,1 )', 'rgba(126,115,95 ,1 )', 'rgba(126,115,95 ,1 )', 'rgba(126,115,95 ,1 )'];
          var colors5 = field.chartType == 'Pie chart' || field.chartType == 'Doughnut chart' ? ['rgba(205,220,57,1)', 'rgba(255,235,59,1)', 'rgba(255,193,7,1)', 'rgba(255,152,0,1)', 'rgba(255,87,34,1)', 'rgba(244,67,54,1)', 'rgba(233,30,99,1)', 'rgba(156,39,176,1)', 'rgba(103,58,183,1)', 'rgba(63,81,181,1)', 'rgba(96,125,139,1)', 'rgba(121,85,72,1)'] : field.chartType == 'Line chart' || field.chartType == 'Area chart' ? 'rgba(177,70,194 ,1 )' : ['rgba(177,70,194 ,1 )', 'rgba(177,70,194 ,1 )', 'rgba(177,70,194 ,1 )', 'rgba(177,70,194 ,1 )', 'rgba(177,70,194 ,1 )', 'rgba(177,70,194 ,1 )', 'rgba(177,70,194 ,1 )', 'rgba(177,70,194 ,1 )', 'rgba(177,70,194 ,1 )', 'rgba(177,70,194 ,1 )', 'rgba(177,70,194 ,1 )', 'rgba(177,70,194 ,1 )'];
          var _data = {
            labels: field.labels && Object(C_off_saas_node_modules_next_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__["default"])(field.labels.map(function (label) {
              if (label !== '') {
                return label;
              } else {
                return '';
              }
            })),
            datasets: [// Dataset1
            {
              label: field.dataset1Label && field.dataset1Label,
              data: field.dataset1 && field.dataset1.map(function (data) {
                if (data !== '') {
                  return data;
                }
              }),
              backgroundColor: colors,
              borderWidth: field.chartType == 'Area chart' ? 0 : field.chartType == 'Pie chart' || field.chartType == 'Doughnut chart' && 2
            }, // Dataset2
            {
              label: field.dataset2Label && field.dataset2Label,
              data: field.dataset2 && field.dataset2.map(function (data) {
                if (data !== '') {
                  return data;
                }
              }),
              backgroundColor: colors1,
              borderWidth: field.chartType == 'Area chart' ? 0 : field.chartType == 'Pie chart' || field.chartType == 'Doughnut chart' && 2
            }, // Dataset3
            {
              label: field.dataset3Label && field.dataset3Label,
              data: field.dataset3 && field.dataset3.map(function (data) {
                if (data !== '') {
                  return data;
                }
              }),
              backgroundColor: colors2,
              borderWidth: field.chartType == 'Area chart' ? 0 : field.chartType == 'Pie chart' || field.chartType == 'Doughnut chart' && 2
            }, // Dataset4
            {
              label: field.dataset4Label && field.dataset4Label,
              data: field.dataset4 && field.dataset4.map(function (data) {
                if (data !== '') {
                  return data;
                }
              }),
              backgroundColor: colors3,
              borderWidth: field.chartType == 'Area chart' ? 0 : field.chartType == 'Pie chart' || field.chartType == 'Doughnut chart' && 2
            }, // Dataset5
            {
              label: field.dataset5Label && field.dataset5Label,
              data: field.dataset5 && field.dataset5.map(function (data) {
                if (data !== '') {
                  return data;
                }
              }),
              backgroundColor: colors4,
              borderWidth: field.chartType == 'Area chart' ? 0 : field.chartType == 'Pie chart' || field.chartType == 'Doughnut chart' && 2
            }, // Dataset6
            {
              label: field.dataset6Label && field.dataset6Label,
              data: field.dataset6 && field.dataset6.map(function (data) {
                if (data !== '') {
                  return data;
                }
              }),
              backgroundColor: colors5,
              borderWidth: field.chartType == 'Area chart' ? 0 : field.chartType == 'Pie chart' || field.chartType == 'Doughnut chart' && 2
            }]
          };

          var datas = _data.datasets.map(function (dataset) {
            console.log(dataset.data[0]);
            var test1 = dataset.data.map(function (datases) {
              if (datases !== undefined) {
                return datases;
              } else {
                return '';
              }
            });
            var test = test1.map(function (datarer, index) {
              if (_data.labels[index] !== '') {
                return datarer;
              }
            });
            var test2 = test.filter(function (obj) {
              return obj !== undefined;
            });
            return test2;
          });

          var fill = field.chartType == 'Line chart' ? false : undefined;
          var newDatasets = [{
            label: _data.datasets[0].label,
            data: datas[0],
            backgroundColor: _data.datasets[0].backgroundColor,
            borderColor: field.chartType == 'Line chart' ? 'rgba(255,185,0 ,1 )' : 'rgb(255, 255, 255)',
            borderWidth: _data.datasets[0].borderWidth,
            fill: fill
          }, {
            label: _data.datasets[1].label,
            data: datas[1],
            backgroundColor: _data.datasets[1].backgroundColor,
            borderColor: field.chartType == 'Line chart' ? 'rgba(0,204,106 ,1 )' : 'rgb(255, 255, 255)',
            borderWidth: _data.datasets[1].borderWidth,
            fill: fill
          }, {
            label: _data.datasets[2].label,
            data: datas[2],
            backgroundColor: _data.datasets[2].backgroundColor,
            borderColor: field.chartType == 'Line chart' ? 'rgba(0,120,215 ,1 )' : 'rgb(255, 255, 255)',
            borderWidth: _data.datasets[2].borderWidth,
            fill: fill
          }, {
            label: _data.datasets[3].label,
            data: datas[3],
            backgroundColor: _data.datasets[3].backgroundColor,
            borderColor: field.chartType == 'Line chart' ? 'rgba(231,72,86 ,1 )' : 'rgb(255, 255, 255)',
            borderWidth: _data.datasets[3].borderWidth,
            fill: fill
          }, {
            label: _data.datasets[4].label,
            data: datas[4],
            backgroundColor: _data.datasets[4].backgroundColor,
            borderColor: field.chartType == 'Line chart' ? 'rgba(126,115,95 ,1 )' : 'rgb(255, 255, 255)',
            borderWidth: _data.datasets[4].borderWidth,
            fill: fill
          }, {
            label: _data.datasets[5].label,
            data: datas[5],
            backgroundColor: _data.datasets[5].backgroundColor,
            borderColor: field.chartType == 'Line chart' ? 'rgba(177,70,194 ,1 )' : 'rgb(255, 255, 255)',
            borderWidth: _data.datasets[5].borderWidth,
            fill: fill
          }];
          var chartType = [field.chartType == 'Bar chart' ? 'bar' : '', field.chartType == 'Reverse chart' ? 'horizontalBar' : '', field.chartType == 'Line chart' ? 'line' : '', field.chartType == 'Pie chart' ? 'pie' : '', field.chartType == 'Doughnut chart' ? 'doughnut' : '', field.chartType == 'Area chart' ? 'line' : ''];
          var toSaveChart = new chartjs_to_image__WEBPACK_IMPORTED_MODULE_6___default.a();
          toSaveChart.setConfig({
            type: chartType.filter(function (type) {
              return type !== '';
            }),
            data: {
              labels: _data.labels.filter(function (label) {
                return label !== '';
              }),
              datasets: newDatasets.filter(function (dataset) {
                return dataset.label !== '';
              })
            },
            options: {
              responsive: true,
              legend: {
                position: 'bottom',
                labels: {
                  boxWidth: 30,
                  boxHeight: 5,
                  fontFamily: 'Comfortaa',
                  fontSize: 12
                }
              },
              // defaultFontFamily: (Chart.defaults.global.defaultFontFamily = 'Comfortaa'),
              scales: {
                yAxes: [{
                  stacked: field.stacked == true ? true : false,
                  ticks: {
                    beginAtZero: true,
                    fontFamily: 'Comfortaa',
                    fontSize: 10
                  }
                }],
                xAxes: [{
                  stacked: field.stacked == true ? true : false,
                  ticks: {
                    beginAtZero: true,
                    fontFamily: 'Comfortaa',
                    fontSize: 10
                  }
                }]
              }
            }
          });
          toSaveChart.setFormat('png').setDevicePixelRatio(3.0).setBackgroundColor('#f8f9fb');

          var _imageUrl = toSaveChart.toDataUrl();

          _imageUrl.then(function (image) {
            console.log(image);
            imagesArray.push({
              imageUrl: image,
              imageIndex: field.index
            });
            console.log(imagesArray);
            setImagesUrl(imagesArray);
          });
        }
      });
    });
  }, [sections]);
  console.log(imagesUrl);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("div", {
    ref: saveContainer,
    className: "relative flex justify-start",
    children: size.width < 680 ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("div", {
      className: "flex mt-4",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("img", {
        onClick: /*#__PURE__*/function () {
          var _ref3 = Object(C_off_saas_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/C_off_saas_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(e) {
            var doc, asPdf, blob;
            return C_off_saas_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    e.preventDefault();
                    doc = /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(MyDocument, {
                      image: imageUrl,
                      data: data,
                      periods: periods,
                      revenueElements: revenueElements,
                      costsElements: costsElements,
                      tax: tax,
                      totalRevenue: totalRevenue,
                      monthlyRevenue: monthlyRevenue,
                      totalCosts: totalCosts,
                      monthlyCosts: monthlyCosts,
                      grossProfit: grossProfit,
                      netProfit: netProfit,
                      startDate: startDate,
                      endDate: endDate
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 1555,
                      columnNumber: 17
                    }, _this);
                    asPdf = Object(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_9__["pdf"])([]); // {} is important, throws without an argument

                    asPdf.updateContainer(doc);
                    _context.next = 6;
                    return asPdf.toBlob();

                  case 6:
                    blob = _context.sent;
                    Object(file_saver__WEBPACK_IMPORTED_MODULE_5__["saveAs"])(blob, "".concat(next_router__WEBPACK_IMPORTED_MODULE_10___default.a.query.project, "/cash-flow.pdf"));

                  case 8:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee);
          }));

          return function (_x) {
            return _ref3.apply(this, arguments);
          };
        }(),
        src: "/mobile-navbar/pdf.svg",
        height: 30,
        width: 30
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 1551,
        columnNumber: 11
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 1550,
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
        lineNumber: 1584,
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
            lineNumber: 1595,
            columnNumber: 15
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("p", {
            className: "text-lg ml-2",
            children: "Show the world your work!"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 1596,
            columnNumber: 15
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 1594,
          columnNumber: 13
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("div", {
          className: "px-6 py-4 bg-background rounded-2xl mt-2 pr-6",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("div", {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("p", {
              className: "flex",
              children: "Save as PDF:"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 1600,
              columnNumber: 17
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("img", {
              onClick: /*#__PURE__*/function () {
                var _ref4 = Object(C_off_saas_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/C_off_saas_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2(e) {
                  var doc, asPdf, blob;
                  return C_off_saas_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
                    while (1) {
                      switch (_context2.prev = _context2.next) {
                        case 0:
                          e.preventDefault();
                          doc = /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(MyDocument, {
                            imagesUrl: imagesUrl,
                            sections: sections
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 1604,
                            columnNumber: 33
                          }, _this);
                          asPdf = Object(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_9__["pdf"])([]);
                          asPdf.updateContainer(doc);
                          _context2.next = 6;
                          return asPdf.toBlob();

                        case 6:
                          blob = _context2.sent;
                          Object(file_saver__WEBPACK_IMPORTED_MODULE_5__["saveAs"])(blob, "".concat(next_router__WEBPACK_IMPORTED_MODULE_10___default.a.query.project, "/competitors-analysis.pdf"));

                        case 8:
                        case "end":
                          return _context2.stop();
                      }
                    }
                  }, _callee2);
                }));

                return function (_x2) {
                  return _ref4.apply(this, arguments);
                };
              }(),
              src: "/mobile-navbar/pdf.svg",
              height: 30,
              width: 30,
              className: "mt-2 cursor-pointer"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 1601,
              columnNumber: 17
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 1599,
            columnNumber: 15
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("div", {
            className: "w-full justify-start items-center mt-4",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("p", {
              children: "Share your competitors analysis with this public link:"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 1617,
              columnNumber: 17
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("div", {
              className: "w-full flex mt-2",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("input", {
                value: "www.project.com",
                className: "bg-linkBackground text-sm px-2 py-1 dark:text-primarydark"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 1619,
                columnNumber: 19
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("img", {
                src: "/mobile-navbar/foreign.svg",
                height: 28,
                width: 28
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 1620,
                columnNumber: 19
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 1618,
              columnNumber: 17
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 1616,
            columnNumber: 15
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 1598,
          columnNumber: 13
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 1593,
        columnNumber: 11
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 1583,
      columnNumber: 9
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 1548,
    columnNumber: 5
  }, _this);
};

_s(ReactPDFDocument, "LvWfStbh6BX4WPsFMuXNE44ZFWY=", false, function () {
  return [_utils_useWindowSize__WEBPACK_IMPORTED_MODULE_13__["useWindowSize"]];
});

_c2 = ReactPDFDocument;
/* harmony default export */ __webpack_exports__["default"] = (ReactPDFDocument);

var _c, _c2;

$RefreshReg$(_c, "MyDocument");
$RefreshReg$(_c2, "ReactPDFDocument");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9kYXNoYm9hcmQvc3RhcnR1cC9wcm9qZWN0L2J1c2luZXNzLWFwcC9SZWFjdFBERkRvY3VtZW50LmpzIl0sIm5hbWVzIjpbIkZvbnQiLCJyZWdpc3RlciIsInNyYyIsImZhbWlseSIsInN0eWxlcyIsIlN0eWxlU2hlZXQiLCJjcmVhdGUiLCJob21lUGFnZSIsInBhZGRpbmciLCJmb250RmFtaWx5IiwiYmFja2dyb3VuZENvbG9yIiwiY29sb3IiLCJtYWluVGl0bGUiLCJmb250U2l6ZSIsInRleHRBbGlnbiIsInRhYmxlIiwiZGlzcGxheSIsIndpZHRoIiwibWFyZ2luVG9wIiwidGFibGVIZWFkUm93IiwiZmxleERpcmVjdGlvbiIsImJvcmRlclRvcExlZnRSYWRpdXMiLCJib3JkZXJUb3BSaWdodFJhZGl1cyIsInRhYmxlUm93IiwidGFibGVDb2wiLCJ0YWJsZUhlYWRDZWxsIiwidGFibGVDZWxsIiwiYm9yZGVyTGVmdCIsInBhZGRpbmdMZWZ0IiwiTXlEb2N1bWVudCIsImltYWdlc1VybCIsInNlY3Rpb25zIiwiY29uc29sZSIsImxvZyIsIm1hcCIsInNlY3Rpb24iLCJtYXJnaW5Cb3R0b20iLCJ0aXRsZSIsImZpZWxkcyIsImZpZWxkIiwidHlwZSIsImhlYWRSb3dzIiwiaGVhZFJvdyIsImhlYWRSb3dzUXVhbnRpdHkiLCJsZW5ndGgiLCJyb3dzIiwicm93Iiwicm93TmFtZSIsIkJvZHlSb3dzUXVhbnRpdHkiLCJkb2MiLCJpbWFnZUluZGV4IiwiaW5kZXgiLCJpbWFnZVVybCIsImZvcm1hdHRlZFRleHQiLCIkIiwiYm9keSIsImFwcGVuZCIsImh0bWwiLCJyZXMiLCJ0b1N0cmluZyIsImluY2x1ZGVzIiwic3RhcnRzV2l0aCIsInJlcGxhY2UiLCJ0ZXh0RGVjb3JhdGlvbiIsIm5ld3N0ciIsInJlc3BvbnNlIiwic3BsaXQiLCJmaWx0ZXIiLCJ2IiwiaSIsIml0ZW0iLCJtYXJnaW5MZWZ0IiwiUmVhY3RQREZEb2N1bWVudCIsInNpemUiLCJ1c2VXaW5kb3dTaXplIiwic2F2ZUNvbnRhaW5lciIsInVzZVJlZiIsImRyb3Bkb3duQnV0dG9uIiwiZHJvcGRvd25Db250YWluZXIiLCJ1c2VTdGF0ZSIsImRyb3Bkb3duQnV0dG9uQ29sb3JIZWxwZXIiLCJzZXREcm9wZG93bkJ1dHRvbkNvbG9ySGVscGVyIiwiZHJvcGRvd25Db250YWluZXJIZWxwZXIiLCJzZXREcm9wZG93bkNvbnRhaW5lckhlbHBlciIsIm9uU2F2ZURyb3Bkb3duU2hvdyIsImdzYXAiLCJ0byIsImN1cnJlbnQiLCJhdXRvQWxwaGEiLCJkdXJhdGlvbiIsImVhc2UiLCJMaW5lYXIiLCJzZXRJbWFnZXNVcmwiLCJ1c2VFZmZlY3QiLCJpbWFnZXNBcnJheSIsImNvbG9ycyIsImNoYXJ0VHlwZSIsImNvbG9yczEiLCJjb2xvcnMyIiwiY29sb3JzMyIsImNvbG9yczQiLCJjb2xvcnM1IiwiZGF0YSIsImxhYmVscyIsImxhYmVsIiwiZGF0YXNldHMiLCJkYXRhc2V0MUxhYmVsIiwiZGF0YXNldDEiLCJib3JkZXJXaWR0aCIsImRhdGFzZXQyTGFiZWwiLCJkYXRhc2V0MiIsImRhdGFzZXQzTGFiZWwiLCJkYXRhc2V0MyIsImRhdGFzZXQ0TGFiZWwiLCJkYXRhc2V0NCIsImRhdGFzZXQ1TGFiZWwiLCJkYXRhc2V0NSIsImRhdGFzZXQ2TGFiZWwiLCJkYXRhc2V0NiIsImRhdGFzIiwiZGF0YXNldCIsInRlc3QxIiwiZGF0YXNlcyIsInVuZGVmaW5lZCIsInRlc3QiLCJkYXRhcmVyIiwidGVzdDIiLCJvYmoiLCJmaWxsIiwibmV3RGF0YXNldHMiLCJib3JkZXJDb2xvciIsInRvU2F2ZUNoYXJ0IiwiQ2hhcnRKc0ltYWdlIiwic2V0Q29uZmlnIiwib3B0aW9ucyIsInJlc3BvbnNpdmUiLCJsZWdlbmQiLCJwb3NpdGlvbiIsImJveFdpZHRoIiwiYm94SGVpZ2h0Iiwic2NhbGVzIiwieUF4ZXMiLCJzdGFja2VkIiwidGlja3MiLCJiZWdpbkF0WmVybyIsInhBeGVzIiwic2V0Rm9ybWF0Iiwic2V0RGV2aWNlUGl4ZWxSYXRpbyIsInNldEJhY2tncm91bmRDb2xvciIsInRvRGF0YVVybCIsInRoZW4iLCJpbWFnZSIsInB1c2giLCJlIiwicHJldmVudERlZmF1bHQiLCJwZXJpb2RzIiwicmV2ZW51ZUVsZW1lbnRzIiwiY29zdHNFbGVtZW50cyIsInRheCIsInRvdGFsUmV2ZW51ZSIsIm1vbnRobHlSZXZlbnVlIiwidG90YWxDb3N0cyIsIm1vbnRobHlDb3N0cyIsImdyb3NzUHJvZml0IiwibmV0UHJvZml0Iiwic3RhcnREYXRlIiwiZW5kRGF0ZSIsImFzUGRmIiwicGRmIiwidXBkYXRlQ29udGFpbmVyIiwidG9CbG9iIiwiYmxvYiIsInNhdmVBcyIsIlJvdXRlciIsInF1ZXJ5IiwicHJvamVjdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQUEsd0RBQUksQ0FBQ0MsUUFBTCxDQUFjO0FBQUVDLEtBQUcsRUFBRSxvQkFBUDtBQUE2QkMsUUFBTSxFQUFFO0FBQXJDLENBQWQ7QUFDQUgsd0RBQUksQ0FBQ0MsUUFBTCxDQUFjO0FBQUVDLEtBQUcsRUFBRSxzQkFBUDtBQUErQkMsUUFBTSxFQUFFO0FBQXZDLENBQWQ7QUFDQUgsd0RBQUksQ0FBQ0MsUUFBTCxDQUFjO0FBQUVDLEtBQUcsRUFBRSwyQkFBUDtBQUFvQ0MsUUFBTSxFQUFFO0FBQTVDLENBQWQ7QUFDQUgsd0RBQUksQ0FBQ0MsUUFBTCxDQUFjO0FBQUVDLEtBQUcsRUFBRSwrQkFBUDtBQUF3Q0MsUUFBTSxFQUFFO0FBQWhELENBQWQ7QUFDQUgsd0RBQUksQ0FBQ0MsUUFBTCxDQUFjO0FBQUVDLEtBQUcsRUFBRSxnQ0FBUDtBQUF5Q0MsUUFBTSxFQUFFO0FBQWpELENBQWQ7QUFDQUgsd0RBQUksQ0FBQ0MsUUFBTCxDQUFjO0FBQUVDLEtBQUcsRUFBRSxzQ0FB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QTtBQUFBO0FBQUE7QUFBQSxxQkFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBbEJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFMRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFWRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFuQ0o7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBa0ZELENBbmlCRDs7R0FBTXZHLGdCO1VBQ1NFLG1FOzs7TUFEVEYsZ0I7QUFxaUJTQSwrRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9kYXNoYm9hcmQvcHJvamVjdHMvW3Byb2plY3RdL2J1c2luZXNzLXBsYW4uNjZiZTA5MjhlYTlhNWI2YzYyZWQuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0LCB1c2VSZWYgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IHNhdmVBcyB9IGZyb20gJ2ZpbGUtc2F2ZXInO1xyXG5pbXBvcnQgQ2hhcnRKc0ltYWdlIGZyb20gJ2NoYXJ0anMtdG8taW1hZ2UnO1xyXG5pbXBvcnQgeyBmb3JtYXQgfSBmcm9tICdkYXRlLWZucyc7XHJcbmltcG9ydCBnc2FwLCB7IExpbmVhciB9IGZyb20gJ2dzYXAnO1xyXG5pbXBvcnQgeyBGb250LCBwZGYsIFBhZ2UsIFRleHQsIFZpZXcsIEltYWdlLCBEb2N1bWVudCwgU3R5bGVTaGVldCwgUERGVmlld2VyLCBQREZEb3dubG9hZExpbmsgfSBmcm9tICdAcmVhY3QtcGRmL3JlbmRlcmVyJztcclxuaW1wb3J0IFJvdXRlciBmcm9tICduZXh0L3JvdXRlcic7XHJcbmltcG9ydCBzcGxpdEh0bWwgZnJvbSAnc3BsaXQtaHRtbCc7XHJcbmltcG9ydCAkIGZyb20gJ2pxdWVyeSc7XHJcbmltcG9ydCB7IHVzZVdpbmRvd1NpemUgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi91dGlscy91c2VXaW5kb3dTaXplJztcclxuXHJcbkZvbnQucmVnaXN0ZXIoeyBzcmM6ICcvZm9udHMvcG9wcGlucy50dGYnLCBmYW1pbHk6ICdQb3BwaW5zJyB9KTtcclxuRm9udC5yZWdpc3Rlcih7IHNyYzogJy9mb250cy9jb21mb3J0YWEudHRmJywgZmFtaWx5OiAnQ29tZm9ydGFhJyB9KTtcclxuRm9udC5yZWdpc3Rlcih7IHNyYzogJy9mb250cy9jb21mb3J0YWEtQm9sZC50dGYnLCBmYW1pbHk6ICdDb21mb3J0YWEtQm9sZCcgfSk7XHJcbkZvbnQucmVnaXN0ZXIoeyBzcmM6ICcvZm9udHMvTW9udHNlcnJhdC1SZWd1bGFyLnR0ZicsIGZhbWlseTogJ01vbnRzZXJyYXQtUmVndWxhcicgfSk7XHJcbkZvbnQucmVnaXN0ZXIoeyBzcmM6ICcvZm9udHMvTW9udHNlcnJhdC1TZW1pQm9sZC50dGYnLCBmYW1pbHk6ICdNb250c2VycmF0LVNlbWlCb2xkJyB9KTtcclxuRm9udC5yZWdpc3Rlcih7IHNyYzogJy9mb250cy9Nb250c2VycmF0LVNlbWlCb2xkSXRhbGljLnR0ZicsIGZhbWlseTogJ01vbnRzZXJyYXQtU2VtaUJvbGRJdGFsaWMnIH0pO1xyXG5Gb250LnJlZ2lzdGVyKHsgc3JjOiAnL2ZvbnRzL01vbnRzZXJyYXQtSXRhbGljLnR0ZicsIGZhbWlseTogJ01vbnRzZXJyYXQtSXRhbGljJyB9KTtcclxuXHJcbmNvbnN0IHN0eWxlcyA9IFN0eWxlU2hlZXQuY3JlYXRlKHtcclxuICBob21lUGFnZToge1xyXG4gICAgcGFkZGluZzogMzYsXHJcbiAgICAvLyBmb250RmFtaWx5OiAnQ29tZm9ydGFhJyxcclxuICAgIGZvbnRGYW1pbHk6ICdNb250c2VycmF0LVJlZ3VsYXInLFxyXG4gICAgYmFja2dyb3VuZENvbG9yOiAnI2Y4ZjlmYicsXHJcbiAgICBjb2xvcjogJyMwYTEyMzAnLFxyXG4gIH0sXHJcbiAgbWFpblRpdGxlOiB7XHJcbiAgICBmb250U2l6ZTogMjIsXHJcbiAgICBjb2xvcjogJyMwYTEyMzAnLFxyXG4gICAgdGV4dEFsaWduOiAnY2VudGVyJyxcclxuICB9LFxyXG4gIHRhYmxlOiB7IGRpc3BsYXk6ICd0YWJsZScsIHdpZHRoOiAnMTAwJScsIG1hcmdpblRvcDogMTYgfSxcclxuICB0YWJsZUhlYWRSb3c6IHsgZmxleERpcmVjdGlvbjogJ3JvdycsIGJhY2tncm91bmRDb2xvcjogJyM2QzYzRkYnLCBjb2xvcjogJyNmOGY5ZmInLCBib3JkZXJUb3BMZWZ0UmFkaXVzOiA4LCBib3JkZXJUb3BSaWdodFJhZGl1czogOCB9LFxyXG4gIHRhYmxlUm93OiB7IGZsZXhEaXJlY3Rpb246ICdyb3cnIH0sXHJcbiAgdGFibGVDb2w6IHsgcGFkZGluZzogOCB9LFxyXG4gIHRhYmxlSGVhZENlbGw6IHsgbWFyZ2luVG9wOiA1LCBmb250U2l6ZTogMTAgfSxcclxuICB0YWJsZUNlbGw6IHsgbWFyZ2luVG9wOiA1LCBmb250U2l6ZTogOSwgYm9yZGVyTGVmdDogJzFweCBzb2xpZCAjMGExMjMwJywgcGFkZGluZ0xlZnQ6IDQgfSxcclxufSk7XHJcblxyXG5jb25zdCBNeURvY3VtZW50ID0gKHsgaW1hZ2VzVXJsLCBzZWN0aW9ucyB9KSA9PiB7XHJcbiAgY29uc29sZS5sb2coJ1BERiBTZWN0aW9ucyAtLT4gJywgc2VjdGlvbnMpO1xyXG4gIGNvbnNvbGUubG9nKCdQREYgSW1hZ2VzVXJsIC0tPiAnLCBpbWFnZXNVcmwpO1xyXG4gIHJldHVybiAoXHJcbiAgICA8RG9jdW1lbnQgc2NhbGU9ezk2IC8gNzJ9IHJlbmRlck1vZGU9XCJzdmdcIj5cclxuICAgICAgPFBhZ2Ugc2l6ZT1cIkE0XCIgc3R5bGU9e3N0eWxlcy5ob21lUGFnZX0+XHJcbiAgICAgICAgPFZpZXc+XHJcbiAgICAgICAgICA8VGV4dCBzdHlsZT17c3R5bGVzLm1haW5UaXRsZX0+QnVzaW5lc3MgcGxhbjwvVGV4dD5cclxuICAgICAgICA8L1ZpZXc+XHJcbiAgICAgIDwvUGFnZT5cclxuICAgICAge3NlY3Rpb25zLm1hcCgoc2VjdGlvbikgPT4ge1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICA8UGFnZSBzaXplPVwiQTRcIiBzdHlsZT17c3R5bGVzLmhvbWVQYWdlfT5cclxuICAgICAgICAgICAgPFZpZXcgc3R5bGU9e3sgbWFyZ2luQm90dG9tOiA4IH19PlxyXG4gICAgICAgICAgICAgIDxUZXh0IHN0eWxlPXt7IGZvbnRTaXplOiAxOCB9fT57c2VjdGlvbi50aXRsZX08L1RleHQ+XHJcbiAgICAgICAgICAgIDwvVmlldz5cclxuICAgICAgICAgICAge3NlY3Rpb24uZmllbGRzLm1hcCgoZmllbGQpID0+IHtcclxuICAgICAgICAgICAgICBjb25zb2xlLmxvZyhmaWVsZCk7XHJcbiAgICAgICAgICAgICAgc3dpdGNoIChmaWVsZC50eXBlKSB7XHJcbiAgICAgICAgICAgICAgICBjYXNlICd0YWJsZSc6XHJcbiAgICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgZmllbGQudHlwZSA9PSAndGFibGUnICYmIChcclxuICAgICAgICAgICAgICAgICAgICAgIDxWaWV3IHN0eWxlPXtzdHlsZXMudGFibGV9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7LyogVGFibGVIZWFkZXIgKi99XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxWaWV3IHN0eWxlPXtzdHlsZXMudGFibGVIZWFkUm93fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICB7ZmllbGQuaGVhZFJvd3MubWFwKChoZWFkUm93KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBoZWFkUm93c1F1YW50aXR5ID0gZmllbGQuaGVhZFJvd3MubGVuZ3RoO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3dpdGNoIChoZWFkUm93c1F1YW50aXR5KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgMTpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFZpZXcgc3R5bGU9e3sgd2lkdGg6ICcxMDAlJywgcGFkZGluZzogOCB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRleHQgc3R5bGU9e3N0eWxlcy50YWJsZUhlYWRDZWxsfT57aGVhZFJvd308L1RleHQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1ZpZXc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAyOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VmlldyBzdHlsZT17eyB3aWR0aDogJzUwJScsIHBhZGRpbmc6IDggfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0IHN0eWxlPXtzdHlsZXMudGFibGVIZWFkQ2VsbH0+e2hlYWRSb3d9PC9UZXh0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9WaWV3PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgMzpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFZpZXcgc3R5bGU9e3sgd2lkdGg6ICczMy4zMyUnLCBwYWRkaW5nOiA4IH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGV4dCBzdHlsZT17c3R5bGVzLnRhYmxlSGVhZENlbGx9PntoZWFkUm93fTwvVGV4dD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVmlldz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDQ6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxWaWV3IHN0eWxlPXt7IHdpZHRoOiAnMjUlJywgcGFkZGluZzogOCB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRleHQgc3R5bGU9e3N0eWxlcy50YWJsZUhlYWRDZWxsfT57aGVhZFJvd308L1RleHQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1ZpZXc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSA1OlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VmlldyBzdHlsZT17eyB3aWR0aDogJzIwJScsIHBhZGRpbmc6IDggfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0IHN0eWxlPXtzdHlsZXMudGFibGVIZWFkQ2VsbH0+e2hlYWRSb3d9PC9UZXh0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9WaWV3PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgNjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFZpZXcgc3R5bGU9e3sgd2lkdGg6ICcxNi42NiUnLCBwYWRkaW5nOiA4IH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGV4dCBzdHlsZT17c3R5bGVzLnRhYmxlSGVhZENlbGx9PntoZWFkUm93fTwvVGV4dD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVmlldz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDc6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxWaWV3IHN0eWxlPXt7IHdpZHRoOiAnMTQuMjglJywgcGFkZGluZzogOCB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRleHQgc3R5bGU9e3N0eWxlcy50YWJsZUhlYWRDZWxsfT57aGVhZFJvd308L1RleHQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1ZpZXc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSA4OlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VmlldyBzdHlsZT17eyB3aWR0aDogJzEyLjUlJywgcGFkZGluZzogOCB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRleHQgc3R5bGU9e3N0eWxlcy50YWJsZUhlYWRDZWxsfT57aGVhZFJvd308L1RleHQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1ZpZXc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSA5OlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VmlldyBzdHlsZT17eyB3aWR0aDogJzExLjExJScsIHBhZGRpbmc6IDggfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0IHN0eWxlPXtzdHlsZXMudGFibGVIZWFkQ2VsbH0+e2hlYWRSb3d9PC9UZXh0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9WaWV3PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgMTA6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxWaWV3IHN0eWxlPXt7IHdpZHRoOiAnMTAlJywgcGFkZGluZzogOCB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRleHQgc3R5bGU9e3N0eWxlcy50YWJsZUhlYWRDZWxsfT57aGVhZFJvd308L1RleHQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1ZpZXc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAxMTpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFZpZXcgc3R5bGU9e3sgd2lkdGg6ICc5LjA5JScsIHBhZGRpbmc6IDggfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0IHN0eWxlPXtzdHlsZXMudGFibGVIZWFkQ2VsbH0+e2hlYWRSb3d9PC9UZXh0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9WaWV3PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgMTI6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxWaWV3IHN0eWxlPXt7IHdpZHRoOiAnOC4zMyUnLCBwYWRkaW5nOiA4IH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGV4dCBzdHlsZT17c3R5bGVzLnRhYmxlSGVhZENlbGx9PntoZWFkUm93fTwvVGV4dD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVmlldz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L1ZpZXc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHsvKiBUYWJsZUJvZHkgKi99XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtmaWVsZC5yb3dzLm1hcCgocm93KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxWaWV3IHN0eWxlPXtzdHlsZXMudGFibGVSb3d9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7cm93LnJvdy5tYXAoKHJvd05hbWUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBCb2R5Um93c1F1YW50aXR5ID0gZmllbGQucm93cy5sZW5ndGg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3dpdGNoIChCb2R5Um93c1F1YW50aXR5KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDE6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFZpZXcgc3R5bGU9e3sgd2lkdGg6ICcxMDAlJywgcGFkZGluZzogOCB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0IHN0eWxlPXtzdHlsZXMudGFibGVDZWxsfT57cm93TmFtZX08L1RleHQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9WaWV3PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAyOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxWaWV3IHN0eWxlPXt7IHdpZHRoOiAnNTAlJywgcGFkZGluZzogOCB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0IHN0eWxlPXtzdHlsZXMudGFibGVDZWxsfT57cm93TmFtZX08L1RleHQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9WaWV3PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAzOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxWaWV3IHN0eWxlPXt7IHdpZHRoOiAnMzMuMzMlJywgcGFkZGluZzogOCB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0IHN0eWxlPXtzdHlsZXMudGFibGVDZWxsfT57cm93TmFtZX08L1RleHQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9WaWV3PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSA0OlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxWaWV3IHN0eWxlPXt7IHdpZHRoOiAnMjUlJywgcGFkZGluZzogOCB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0IHN0eWxlPXtzdHlsZXMudGFibGVDZWxsfT57cm93TmFtZX08L1RleHQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9WaWV3PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSA1OlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxWaWV3IHN0eWxlPXt7IHdpZHRoOiAnMjAlJywgcGFkZGluZzogOCB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0IHN0eWxlPXtzdHlsZXMudGFibGVDZWxsfT57cm93TmFtZX08L1RleHQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9WaWV3PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSA2OlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxWaWV3IHN0eWxlPXt7IHdpZHRoOiAnMTYuNjYlJywgcGFkZGluZzogOCB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0IHN0eWxlPXtzdHlsZXMudGFibGVDZWxsfT57cm93TmFtZX08L1RleHQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9WaWV3PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSA3OlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxWaWV3IHN0eWxlPXt7IHdpZHRoOiAnMTQuMjglJywgcGFkZGluZzogOCB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0IHN0eWxlPXtzdHlsZXMudGFibGVDZWxsfT57cm93TmFtZX08L1RleHQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9WaWV3PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSA4OlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxWaWV3IHN0eWxlPXt7IHdpZHRoOiAnMTIuNSUnLCBwYWRkaW5nOiA4IH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRleHQgc3R5bGU9e3N0eWxlcy50YWJsZUNlbGx9Pntyb3dOYW1lfTwvVGV4dD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1ZpZXc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDk6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFZpZXcgc3R5bGU9e3sgd2lkdGg6ICcxMS4xMSUnLCBwYWRkaW5nOiA4IH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRleHQgc3R5bGU9e3N0eWxlcy50YWJsZUNlbGx9Pntyb3dOYW1lfTwvVGV4dD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1ZpZXc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDEwOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxWaWV3IHN0eWxlPXt7IHdpZHRoOiAnMTAlJywgcGFkZGluZzogOCB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0IHN0eWxlPXtzdHlsZXMudGFibGVDZWxsfT57cm93TmFtZX08L1RleHQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9WaWV3PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAxMTpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VmlldyBzdHlsZT17eyB3aWR0aDogJzkuMDklJywgcGFkZGluZzogOCB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0IHN0eWxlPXtzdHlsZXMudGFibGVDZWxsfT57cm93TmFtZX08L1RleHQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9WaWV3PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAxMjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VmlldyBzdHlsZT17eyB3aWR0aDogJzguMzMlJywgcGFkZGluZzogOCB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0IHN0eWxlPXtzdHlsZXMudGFibGVDZWxsfT57cm93TmFtZX08L1RleHQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9WaWV3PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1ZpZXc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L1ZpZXc+XHJcbiAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgY2FzZSAnaGVhZGVyJzpcclxuICAgICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICA8VmlldyBzdHlsZT17eyBtYXJnaW5Ub3A6IDE2IH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPFRleHQgc3R5bGU9e3sgZm9udFNpemU6IDE0IH19PntmaWVsZC50aXRsZX08L1RleHQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9WaWV3PlxyXG4gICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgY2FzZSAnc3BhY2luZyc6XHJcbiAgICAgICAgICAgICAgICAgIHJldHVybiA8VmlldyBzdHlsZT17eyBtYXJnaW5Ub3A6IDEyLCBtYXJnaW5Cb3R0b206IDEyIH19PjwvVmlldz47XHJcbiAgICAgICAgICAgICAgICBjYXNlICdjaGFydCc6XHJcbiAgICAgICAgICAgICAgICAgIHJldHVybiBpbWFnZXNVcmwubWFwKChkb2MpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoZG9jLmltYWdlSW5kZXggPT09IGZpZWxkLmluZGV4KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8VmlldyBzdHlsZT17eyBtYXJnaW5Ub3A6IDE2IH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxJbWFnZSBzdHlsZT17eyB3aWR0aDogJzEwMCUnIH19IHNyYz17ZG9jLmltYWdlVXJsfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L1ZpZXc+XHJcbiAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICBjYXNlICd0ZXh0JzpcclxuICAgICAgICAgICAgICAgICAgbGV0IGZvcm1hdHRlZFRleHQgPSAkKGZpZWxkLmJvZHkpLm1hcChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuICQoJzxkaXY+JykuYXBwZW5kKHRoaXMpLmh0bWwoKTtcclxuICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGZvcm1hdHRlZFRleHQpO1xyXG4gICAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgIDxWaWV3IHN0eWxlPXt7IG1hcmdpblRvcDogMTYgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICB7JC5tYXAoZm9ybWF0dGVkVGV4dCwgKHJlcykgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhyZXMudG9TdHJpbmcoKS5pbmNsdWRlcygnPHA+PC9wPicpKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2cocmVzLmluY2x1ZGVzKCc8c3Ryb25nPicpKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gU1RBUlQgLS0+IDxwPjwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJlcy5zdGFydHNXaXRoKCc8cD4nKSAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICFyZXMuaW5jbHVkZXMoJzxzdHJvbmc+JykgJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAhcmVzLmluY2x1ZGVzKCc8ZW0+JykgJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAhcmVzLmluY2x1ZGVzKCc8cz4nKSAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICFyZXMuaW5jbHVkZXMoJzx1PicpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiA8VGV4dCBzdHlsZT17eyBmb250U2l6ZTogMTIgfX0+e3Jlcy5yZXBsYWNlKC8oPChbXj5dKyk+KS9naSwgJycpfTwvVGV4dD47XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gPHA+U1RST05HPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlIGlmIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICByZXMuc3RhcnRzV2l0aCgnPHA+JykgJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICByZXMuaW5jbHVkZXMoJzxzdHJvbmc+JykgJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAhcmVzLmluY2x1ZGVzKCc8ZW0+JykgJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAhcmVzLmluY2x1ZGVzKCc8cz4nKSAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICFyZXMuaW5jbHVkZXMoJzx1PicpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGV4dCBzdHlsZT17eyBmb250U2l6ZTogMTIsIGZvbnRGYW1pbHk6ICdNb250c2VycmF0LVNlbWlCb2xkJyB9fT57cmVzLnJlcGxhY2UoLyg8KFtePl0rKT4pL2dpLCAnJyl9PC9UZXh0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gPHA+RU08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJlcy5zdGFydHNXaXRoKCc8cD4nKSAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICFyZXMuaW5jbHVkZXMoJzxzdHJvbmc+JykgJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICByZXMuaW5jbHVkZXMoJzxlbT4nKSAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICFyZXMuaW5jbHVkZXMoJzxzPicpICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIXJlcy5pbmNsdWRlcygnPHU+JylcclxuICAgICAgICAgICAgICAgICAgICAgICAgKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDxUZXh0IHN0eWxlPXt7IGZvbnRTaXplOiAxMiwgZm9udEZhbWlseTogJ01vbnRzZXJyYXQtSXRhbGljJyB9fT57cmVzLnJlcGxhY2UoLyg8KFtePl0rKT4pL2dpLCAnJyl9PC9UZXh0PjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyA8cD5FTSArIFNUUk9ORzwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzLnN0YXJ0c1dpdGgoJzxwPicpICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzLmluY2x1ZGVzKCc8c3Ryb25nPicpICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzLmluY2x1ZGVzKCc8ZW0+JykgJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAhcmVzLmluY2x1ZGVzKCc8cz4nKSAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICFyZXMuaW5jbHVkZXMoJzx1PicpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGV4dCBzdHlsZT17eyBmb250U2l6ZTogMTIsIGZvbnRGYW1pbHk6ICdNb250c2VycmF0LVNlbWlCb2xkSXRhbGljJyB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3Jlcy5yZXBsYWNlKC8oPChbXj5dKyk+KS9naSwgJycpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9UZXh0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gPHA+UzwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzLnN0YXJ0c1dpdGgoJzxwPicpICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzLmluY2x1ZGVzKCc8cz4nKSAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICFyZXMuaW5jbHVkZXMoJzxzdHJvbmc+JykgJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAhcmVzLmluY2x1ZGVzKCc8ZW0+JykgJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAhcmVzLmluY2x1ZGVzKCc8dT4nKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gPFRleHQgc3R5bGU9e3sgZm9udFNpemU6IDEyLCB0ZXh0RGVjb3JhdGlvbjogJ2xpbmUtdGhyb3VnaCcgfX0+e3Jlcy5yZXBsYWNlKC8oPChbXj5dKyk+KS9naSwgJycpfTwvVGV4dD47XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gPHA+UyArIEVNPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlIGlmIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICByZXMuc3RhcnRzV2l0aCgnPHA+JykgJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICByZXMuaW5jbHVkZXMoJzxzPicpICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzLmluY2x1ZGVzKCc8ZW0+JykgJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAhcmVzLmluY2x1ZGVzKCc8c3Ryb25nPicpICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIXJlcy5pbmNsdWRlcygnPHU+JylcclxuICAgICAgICAgICAgICAgICAgICAgICAgKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0IHN0eWxlPXt7IGZvbnRTaXplOiAxMiwgZm9udEZhbWlseTogJ01vbnRzZXJyYXQtSXRhbGljJywgdGV4dERlY29yYXRpb246ICdsaW5lLXRocm91Z2gnIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7cmVzLnJlcGxhY2UoLyg8KFtePl0rKT4pL2dpLCAnJyl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1RleHQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyA8cD5TICsgRU0gKyBTVFJPTkc8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJlcy5zdGFydHNXaXRoKCc8cD4nKSAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJlcy5pbmNsdWRlcygnPHM+JykgJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICByZXMuaW5jbHVkZXMoJzxlbT4nKSAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJlcy5pbmNsdWRlcygnPHN0cm9uZz4nKSAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICFyZXMuaW5jbHVkZXMoJzx1PicpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGV4dCBzdHlsZT17eyBmb250U2l6ZTogMTIsIGZvbnRGYW1pbHk6ICdNb250c2VycmF0LVNlbWlCb2xkSXRhbGljJywgdGV4dERlY29yYXRpb246ICdsaW5lLXRocm91Z2gnIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7cmVzLnJlcGxhY2UoLyg8KFtePl0rKT4pL2dpLCAnJyl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1RleHQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyA8cD5VPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlIGlmIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICByZXMuc3RhcnRzV2l0aCgnPHA+JykgJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICByZXMuaW5jbHVkZXMoJzx1PicpICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIXJlcy5pbmNsdWRlcygnPHM+JykgJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAhcmVzLmluY2x1ZGVzKCc8c3Ryb25nPicpICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIXJlcy5pbmNsdWRlcygnPGVtPicpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiA8VGV4dCBzdHlsZT17eyBmb250U2l6ZTogMTIsIHRleHREZWNvcmF0aW9uOiAndW5kZXJsaW5lJyB9fT57cmVzLnJlcGxhY2UoLyg8KFtePl0rKT4pL2dpLCAnJyl9PC9UZXh0PjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyA8cD5VICsgRU08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJlcy5zdGFydHNXaXRoKCc8cD4nKSAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJlcy5pbmNsdWRlcygnPHU+JykgJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAhcmVzLmluY2x1ZGVzKCc8cz4nKSAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICFyZXMuaW5jbHVkZXMoJzxzdHJvbmc+JykgJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICByZXMuaW5jbHVkZXMoJzxlbT4nKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRleHQgc3R5bGU9e3sgZm9udFNpemU6IDEyLCBmb250RmFtaWx5OiAnTW9udHNlcnJhdC1JdGFsaWMnLCB0ZXh0RGVjb3JhdGlvbjogJ3VuZGVybGluZScgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtyZXMucmVwbGFjZSgvKDwoW14+XSspPikvZ2ksICcnKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVGV4dD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIDxwPlUgKyBTPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlIGlmIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICByZXMuc3RhcnRzV2l0aCgnPHA+JykgJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICByZXMuaW5jbHVkZXMoJzx1PicpICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzLmluY2x1ZGVzKCc8cz4nKSAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICFyZXMuaW5jbHVkZXMoJzxzdHJvbmc+JykgJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAhcmVzLmluY2x1ZGVzKCc8ZW0+JylcclxuICAgICAgICAgICAgICAgICAgICAgICAgKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0IHN0eWxlPXt7IGZvbnRTaXplOiAxMiwgdGV4dERlY29yYXRpb246ICdsaW5lLXRocm91Z2ggdW5kZXJsaW5lJyB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3Jlcy5yZXBsYWNlKC8oPChbXj5dKyk+KS9naSwgJycpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9UZXh0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gPHA+VSArIFNUUk9ORzwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzLnN0YXJ0c1dpdGgoJzxwPicpICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzLmluY2x1ZGVzKCc8dT4nKSAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICFyZXMuaW5jbHVkZXMoJzxzPicpICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzLmluY2x1ZGVzKCc8c3Ryb25nPicpICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIXJlcy5pbmNsdWRlcygnPGVtPicpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGV4dCBzdHlsZT17eyBmb250U2l6ZTogMTIsIGZvbnRGYW1pbHk6ICdNb250c2VycmF0LVNlbWlCb2xkJywgdGV4dERlY29yYXRpb246ICd1bmRlcmxpbmUnIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7cmVzLnJlcGxhY2UoLyg8KFtePl0rKT4pL2dpLCAnJyl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1RleHQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyA8cD5VICsgUyArIFNUUk9ORzwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzLnN0YXJ0c1dpdGgoJzxwPicpICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzLmluY2x1ZGVzKCc8dT4nKSAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJlcy5pbmNsdWRlcygnPHM+JykgJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICByZXMuaW5jbHVkZXMoJzxzdHJvbmc+JykgJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAhcmVzLmluY2x1ZGVzKCc8ZW0+JylcclxuICAgICAgICAgICAgICAgICAgICAgICAgKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0IHN0eWxlPXt7IGZvbnRTaXplOiAxMiwgZm9udEZhbWlseTogJ01vbnRzZXJyYXQtU2VtaUJvbGQnLCB0ZXh0RGVjb3JhdGlvbjogJ2xpbmUtdGhyb3VnaCB1bmRlcmxpbmUnIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7cmVzLnJlcGxhY2UoLyg8KFtePl0rKT4pL2dpLCAnJyl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1RleHQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyA8cD5VICsgUyArIFNUUk9ORyArIEVNPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlIGlmIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICByZXMuc3RhcnRzV2l0aCgnPHA+JykgJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICByZXMuaW5jbHVkZXMoJzx1PicpICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzLmluY2x1ZGVzKCc8cz4nKSAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJlcy5pbmNsdWRlcygnPHN0cm9uZz4nKSAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJlcy5pbmNsdWRlcygnPGVtPicpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGV4dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyBmb250U2l6ZTogMTIsIGZvbnRGYW1pbHk6ICdNb250c2VycmF0LVNlbWlCb2xkSXRhbGljJywgdGV4dERlY29yYXRpb246ICdsaW5lLXRocm91Z2ggdW5kZXJsaW5lJyB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7cmVzLnJlcGxhY2UoLyg8KFtePl0rKT4pL2dpLCAnJyl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1RleHQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyA8cD5VICsgUyArIEVNPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlIGlmIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICByZXMuc3RhcnRzV2l0aCgnPHA+JykgJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICByZXMuaW5jbHVkZXMoJzx1PicpICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzLmluY2x1ZGVzKCc8cz4nKSAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICFyZXMuaW5jbHVkZXMoJzxzdHJvbmc+JykgJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICByZXMuaW5jbHVkZXMoJzxlbT4nKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRleHQgc3R5bGU9e3sgZm9udFNpemU6IDEyLCBmb250RmFtaWx5OiAnTW9udHNlcnJhdC1JdGFsaWMnLCB0ZXh0RGVjb3JhdGlvbjogJ2xpbmUtdGhyb3VnaCB1bmRlcmxpbmUnIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7cmVzLnJlcGxhY2UoLyg8KFtePl0rKT4pL2dpLCAnJyl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1RleHQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyA8cD5VICsgU1RST05HICsgRU08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJlcy5zdGFydHNXaXRoKCc8cD4nKSAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJlcy5pbmNsdWRlcygnPHU+JykgJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAhcmVzLmluY2x1ZGVzKCc8cz4nKSAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJlcy5pbmNsdWRlcygnPHN0cm9uZz4nKSAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJlcy5pbmNsdWRlcygnPGVtPicpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGV4dCBzdHlsZT17eyBmb250U2l6ZTogMTIsIGZvbnRGYW1pbHk6ICdNb250c2VycmF0LVNlbWlCb2xkSXRhbGljJywgdGV4dERlY29yYXRpb246ICd1bmRlcmxpbmUnIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7cmVzLnJlcGxhY2UoLyg8KFtePl0rKT4pL2dpLCAnJyl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1RleHQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBFTkQgLS0+IDxwPjwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gU1RBUlQgLS0+IDxoMj48L2gyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzLnN0YXJ0c1dpdGgoJzxoMj4nKSAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICFyZXMuaW5jbHVkZXMoJzxzdHJvbmc+JykgJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAhcmVzLmluY2x1ZGVzKCc8ZW0+JykgJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAhcmVzLmluY2x1ZGVzKCc8cz4nKSAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICFyZXMuaW5jbHVkZXMoJzx1PicpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiA8VGV4dCBzdHlsZT17eyBmb250U2l6ZTogMTQgfX0+e3Jlcy5yZXBsYWNlKC8oPChbXj5dKyk+KS9naSwgJycpfTwvVGV4dD47XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gPGgyPlNUUk9ORzwvaDI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJlcy5zdGFydHNXaXRoKCc8aDI+JykgJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICByZXMuaW5jbHVkZXMoJzxzdHJvbmc+JykgJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAhcmVzLmluY2x1ZGVzKCc8ZW0+JykgJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAhcmVzLmluY2x1ZGVzKCc8cz4nKSAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICFyZXMuaW5jbHVkZXMoJzx1PicpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGV4dCBzdHlsZT17eyBmb250U2l6ZTogMTQsIGZvbnRGYW1pbHk6ICdNb250c2VycmF0LVNlbWlCb2xkJyB9fT57cmVzLnJlcGxhY2UoLyg8KFtePl0rKT4pL2dpLCAnJyl9PC9UZXh0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gPGgyPkVNPC9oMj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzLnN0YXJ0c1dpdGgoJzxoMj4nKSAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICFyZXMuaW5jbHVkZXMoJzxzdHJvbmc+JykgJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICByZXMuaW5jbHVkZXMoJzxlbT4nKSAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICFyZXMuaW5jbHVkZXMoJzxzPicpICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIXJlcy5pbmNsdWRlcygnPHU+JylcclxuICAgICAgICAgICAgICAgICAgICAgICAgKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDxUZXh0IHN0eWxlPXt7IGZvbnRTaXplOiAxNCwgZm9udEZhbWlseTogJ01vbnRzZXJyYXQtSXRhbGljJyB9fT57cmVzLnJlcGxhY2UoLyg8KFtePl0rKT4pL2dpLCAnJyl9PC9UZXh0PjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyA8aDI+RU0gKyBTVFJPTkc8L2gyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlIGlmIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICByZXMuc3RhcnRzV2l0aCgnPGgyPicpICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzLmluY2x1ZGVzKCc8c3Ryb25nPicpICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzLmluY2x1ZGVzKCc8ZW0+JykgJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAhcmVzLmluY2x1ZGVzKCc8cz4nKSAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICFyZXMuaW5jbHVkZXMoJzx1PicpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGV4dCBzdHlsZT17eyBmb250U2l6ZTogMTQsIGZvbnRGYW1pbHk6ICdNb250c2VycmF0LVNlbWlCb2xkSXRhbGljJyB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3Jlcy5yZXBsYWNlKC8oPChbXj5dKyk+KS9naSwgJycpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9UZXh0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gPGgyPlM8L2gyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlIGlmIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICByZXMuc3RhcnRzV2l0aCgnPGgyPicpICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzLmluY2x1ZGVzKCc8cz4nKSAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICFyZXMuaW5jbHVkZXMoJzxzdHJvbmc+JykgJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAhcmVzLmluY2x1ZGVzKCc8ZW0+JykgJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAhcmVzLmluY2x1ZGVzKCc8dT4nKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gPFRleHQgc3R5bGU9e3sgZm9udFNpemU6IDE0LCB0ZXh0RGVjb3JhdGlvbjogJ2xpbmUtdGhyb3VnaCcgfX0+e3Jlcy5yZXBsYWNlKC8oPChbXj5dKyk+KS9naSwgJycpfTwvVGV4dD47XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gPGgyPlMgKyBFTTwvaDI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJlcy5zdGFydHNXaXRoKCc8aDI+JykgJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICByZXMuaW5jbHVkZXMoJzxzPicpICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzLmluY2x1ZGVzKCc8ZW0+JykgJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAhcmVzLmluY2x1ZGVzKCc8c3Ryb25nPicpICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIXJlcy5pbmNsdWRlcygnPHU+JylcclxuICAgICAgICAgICAgICAgICAgICAgICAgKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0IHN0eWxlPXt7IGZvbnRTaXplOiAxNCwgZm9udEZhbWlseTogJ01vbnRzZXJyYXQtSXRhbGljJywgdGV4dERlY29yYXRpb246ICdsaW5lLXRocm91Z2gnIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7cmVzLnJlcGxhY2UoLyg8KFtePl0rKT4pL2dpLCAnJyl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1RleHQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyA8aDI+UyArIEVNICsgU1RST05HPC9oMj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzLnN0YXJ0c1dpdGgoJzxoMj4nKSAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJlcy5pbmNsdWRlcygnPHM+JykgJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICByZXMuaW5jbHVkZXMoJzxlbT4nKSAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJlcy5pbmNsdWRlcygnPHN0cm9uZz4nKSAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICFyZXMuaW5jbHVkZXMoJzx1PicpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGV4dCBzdHlsZT17eyBmb250U2l6ZTogMTQsIGZvbnRGYW1pbHk6ICdNb250c2VycmF0LVNlbWlCb2xkSXRhbGljJywgdGV4dERlY29yYXRpb246ICdsaW5lLXRocm91Z2gnIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7cmVzLnJlcGxhY2UoLyg8KFtePl0rKT4pL2dpLCAnJyl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1RleHQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyA8aDI+VTwvaDI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJlcy5zdGFydHNXaXRoKCc8aDI+JykgJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICByZXMuaW5jbHVkZXMoJzx1PicpICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIXJlcy5pbmNsdWRlcygnPHM+JykgJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAhcmVzLmluY2x1ZGVzKCc8c3Ryb25nPicpICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIXJlcy5pbmNsdWRlcygnPGVtPicpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiA8VGV4dCBzdHlsZT17eyBmb250U2l6ZTogMTQsIHRleHREZWNvcmF0aW9uOiAndW5kZXJsaW5lJyB9fT57cmVzLnJlcGxhY2UoLyg8KFtePl0rKT4pL2dpLCAnJyl9PC9UZXh0PjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyA8aDI+VSArIEVNPC9oMj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzLnN0YXJ0c1dpdGgoJzxoMj4nKSAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJlcy5pbmNsdWRlcygnPHU+JykgJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAhcmVzLmluY2x1ZGVzKCc8cz4nKSAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICFyZXMuaW5jbHVkZXMoJzxzdHJvbmc+JykgJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICByZXMuaW5jbHVkZXMoJzxlbT4nKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRleHQgc3R5bGU9e3sgZm9udFNpemU6IDE0LCBmb250RmFtaWx5OiAnTW9udHNlcnJhdC1JdGFsaWMnLCB0ZXh0RGVjb3JhdGlvbjogJ3VuZGVybGluZScgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtyZXMucmVwbGFjZSgvKDwoW14+XSspPikvZ2ksICcnKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVGV4dD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIDxoMj5VICsgUzwvaDI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJlcy5zdGFydHNXaXRoKCc8aDI+JykgJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICByZXMuaW5jbHVkZXMoJzx1PicpICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzLmluY2x1ZGVzKCc8cz4nKSAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICFyZXMuaW5jbHVkZXMoJzxzdHJvbmc+JykgJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAhcmVzLmluY2x1ZGVzKCc8ZW0+JylcclxuICAgICAgICAgICAgICAgICAgICAgICAgKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0IHN0eWxlPXt7IGZvbnRTaXplOiAxNCwgdGV4dERlY29yYXRpb246ICdsaW5lLXRocm91Z2ggdW5kZXJsaW5lJyB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3Jlcy5yZXBsYWNlKC8oPChbXj5dKyk+KS9naSwgJycpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9UZXh0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gPGgyPlUgKyBTVFJPTkc8L2gyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlIGlmIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICByZXMuc3RhcnRzV2l0aCgnPGgyPicpICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzLmluY2x1ZGVzKCc8dT4nKSAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICFyZXMuaW5jbHVkZXMoJzxzPicpICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzLmluY2x1ZGVzKCc8c3Ryb25nPicpICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIXJlcy5pbmNsdWRlcygnPGVtPicpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGV4dCBzdHlsZT17eyBmb250U2l6ZTogMTQsIGZvbnRGYW1pbHk6ICdNb250c2VycmF0LVNlbWlCb2xkJywgdGV4dERlY29yYXRpb246ICd1bmRlcmxpbmUnIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7cmVzLnJlcGxhY2UoLyg8KFtePl0rKT4pL2dpLCAnJyl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1RleHQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyA8aDI+VSArIFMgKyBTVFJPTkc8L2gyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlIGlmIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICByZXMuc3RhcnRzV2l0aCgnPGgyPicpICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzLmluY2x1ZGVzKCc8dT4nKSAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJlcy5pbmNsdWRlcygnPHM+JykgJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICByZXMuaW5jbHVkZXMoJzxzdHJvbmc+JykgJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAhcmVzLmluY2x1ZGVzKCc8ZW0+JylcclxuICAgICAgICAgICAgICAgICAgICAgICAgKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0IHN0eWxlPXt7IGZvbnRTaXplOiAxNCwgZm9udEZhbWlseTogJ01vbnRzZXJyYXQtU2VtaUJvbGQnLCB0ZXh0RGVjb3JhdGlvbjogJ2xpbmUtdGhyb3VnaCB1bmRlcmxpbmUnIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7cmVzLnJlcGxhY2UoLyg8KFtePl0rKT4pL2dpLCAnJyl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1RleHQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyA8aDI+VSArIFMgKyBTVFJPTkcgKyBFTTwvaDI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJlcy5zdGFydHNXaXRoKCc8aDI+JykgJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICByZXMuaW5jbHVkZXMoJzx1PicpICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzLmluY2x1ZGVzKCc8cz4nKSAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJlcy5pbmNsdWRlcygnPHN0cm9uZz4nKSAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJlcy5pbmNsdWRlcygnPGVtPicpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGV4dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyBmb250U2l6ZTogMTQsIGZvbnRGYW1pbHk6ICdNb250c2VycmF0LVNlbWlCb2xkSXRhbGljJywgdGV4dERlY29yYXRpb246ICdsaW5lLXRocm91Z2ggdW5kZXJsaW5lJyB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7cmVzLnJlcGxhY2UoLyg8KFtePl0rKT4pL2dpLCAnJyl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1RleHQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyA8aDI+VSArIFMgKyBFTTwvaDI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJlcy5zdGFydHNXaXRoKCc8aDI+JykgJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICByZXMuaW5jbHVkZXMoJzx1PicpICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzLmluY2x1ZGVzKCc8cz4nKSAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICFyZXMuaW5jbHVkZXMoJzxzdHJvbmc+JykgJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICByZXMuaW5jbHVkZXMoJzxlbT4nKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRleHQgc3R5bGU9e3sgZm9udFNpemU6IDE0LCBmb250RmFtaWx5OiAnTW9udHNlcnJhdC1JdGFsaWMnLCB0ZXh0RGVjb3JhdGlvbjogJ2xpbmUtdGhyb3VnaCB1bmRlcmxpbmUnIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7cmVzLnJlcGxhY2UoLyg8KFtePl0rKT4pL2dpLCAnJyl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1RleHQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyA8aDI+VSArIFNUUk9ORyArIEVNPC9oMj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzLnN0YXJ0c1dpdGgoJzxoMj4nKSAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJlcy5pbmNsdWRlcygnPHU+JykgJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAhcmVzLmluY2x1ZGVzKCc8cz4nKSAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJlcy5pbmNsdWRlcygnPHN0cm9uZz4nKSAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJlcy5pbmNsdWRlcygnPGVtPicpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGV4dCBzdHlsZT17eyBmb250U2l6ZTogMTQsIGZvbnRGYW1pbHk6ICdNb250c2VycmF0LVNlbWlCb2xkSXRhbGljJywgdGV4dERlY29yYXRpb246ICd1bmRlcmxpbmUnIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7cmVzLnJlcGxhY2UoLyg8KFtePl0rKT4pL2dpLCAnJyl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1RleHQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBFTkQgLS0+IDxoMj48L2gyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBTVEFSVCAtLT4gPGgxPjwvaDE+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICByZXMuc3RhcnRzV2l0aCgnPGgxPicpICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIXJlcy5pbmNsdWRlcygnPHN0cm9uZz4nKSAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICFyZXMuaW5jbHVkZXMoJzxlbT4nKSAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICFyZXMuaW5jbHVkZXMoJzxzPicpICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIXJlcy5pbmNsdWRlcygnPHU+JylcclxuICAgICAgICAgICAgICAgICAgICAgICAgKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDxUZXh0IHN0eWxlPXt7IGZvbnRTaXplOiAxNiB9fT57cmVzLnJlcGxhY2UoLyg8KFtePl0rKT4pL2dpLCAnJyl9PC9UZXh0PjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyA8aDE+U1RST05HPC9oMT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzLnN0YXJ0c1dpdGgoJzxoMT4nKSAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJlcy5pbmNsdWRlcygnPHN0cm9uZz4nKSAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICFyZXMuaW5jbHVkZXMoJzxlbT4nKSAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICFyZXMuaW5jbHVkZXMoJzxzPicpICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIXJlcy5pbmNsdWRlcygnPHU+JylcclxuICAgICAgICAgICAgICAgICAgICAgICAgKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0IHN0eWxlPXt7IGZvbnRTaXplOiAxNiwgZm9udEZhbWlseTogJ01vbnRzZXJyYXQtU2VtaUJvbGQnIH19PntyZXMucmVwbGFjZSgvKDwoW14+XSspPikvZ2ksICcnKX08L1RleHQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyA8aDE+RU08L2gxPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlIGlmIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICByZXMuc3RhcnRzV2l0aCgnPGgxPicpICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIXJlcy5pbmNsdWRlcygnPHN0cm9uZz4nKSAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJlcy5pbmNsdWRlcygnPGVtPicpICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIXJlcy5pbmNsdWRlcygnPHM+JykgJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAhcmVzLmluY2x1ZGVzKCc8dT4nKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gPFRleHQgc3R5bGU9e3sgZm9udFNpemU6IDE2LCBmb250RmFtaWx5OiAnTW9udHNlcnJhdC1JdGFsaWMnIH19PntyZXMucmVwbGFjZSgvKDwoW14+XSspPikvZ2ksICcnKX08L1RleHQ+O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIDxoMT5FTSArIFNUUk9ORzwvaDE+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJlcy5zdGFydHNXaXRoKCc8aDE+JykgJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICByZXMuaW5jbHVkZXMoJzxzdHJvbmc+JykgJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICByZXMuaW5jbHVkZXMoJzxlbT4nKSAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICFyZXMuaW5jbHVkZXMoJzxzPicpICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIXJlcy5pbmNsdWRlcygnPHU+JylcclxuICAgICAgICAgICAgICAgICAgICAgICAgKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0IHN0eWxlPXt7IGZvbnRTaXplOiAxNiwgZm9udEZhbWlseTogJ01vbnRzZXJyYXQtU2VtaUJvbGRJdGFsaWMnIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7cmVzLnJlcGxhY2UoLyg8KFtePl0rKT4pL2dpLCAnJyl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1RleHQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyA8aDE+UzwvaDE+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJlcy5zdGFydHNXaXRoKCc8aDE+JykgJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICByZXMuaW5jbHVkZXMoJzxzPicpICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIXJlcy5pbmNsdWRlcygnPHN0cm9uZz4nKSAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICFyZXMuaW5jbHVkZXMoJzxlbT4nKSAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICFyZXMuaW5jbHVkZXMoJzx1PicpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiA8VGV4dCBzdHlsZT17eyBmb250U2l6ZTogMTYsIHRleHREZWNvcmF0aW9uOiAnbGluZS10aHJvdWdoJyB9fT57cmVzLnJlcGxhY2UoLyg8KFtePl0rKT4pL2dpLCAnJyl9PC9UZXh0PjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyA8aDE+UyArIEVNPC9oMT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzLnN0YXJ0c1dpdGgoJzxoMT4nKSAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJlcy5pbmNsdWRlcygnPHM+JykgJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICByZXMuaW5jbHVkZXMoJzxlbT4nKSAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICFyZXMuaW5jbHVkZXMoJzxzdHJvbmc+JykgJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAhcmVzLmluY2x1ZGVzKCc8dT4nKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRleHQgc3R5bGU9e3sgZm9udFNpemU6IDE2LCBmb250RmFtaWx5OiAnTW9udHNlcnJhdC1JdGFsaWMnLCB0ZXh0RGVjb3JhdGlvbjogJ2xpbmUtdGhyb3VnaCcgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtyZXMucmVwbGFjZSgvKDwoW14+XSspPikvZ2ksICcnKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVGV4dD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIDxoMT5TICsgRU0gKyBTVFJPTkc8L2gxPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlIGlmIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICByZXMuc3RhcnRzV2l0aCgnPGgxPicpICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzLmluY2x1ZGVzKCc8cz4nKSAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJlcy5pbmNsdWRlcygnPGVtPicpICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzLmluY2x1ZGVzKCc8c3Ryb25nPicpICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIXJlcy5pbmNsdWRlcygnPHU+JylcclxuICAgICAgICAgICAgICAgICAgICAgICAgKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0IHN0eWxlPXt7IGZvbnRTaXplOiAxNiwgZm9udEZhbWlseTogJ01vbnRzZXJyYXQtU2VtaUJvbGRJdGFsaWMnLCB0ZXh0RGVjb3JhdGlvbjogJ2xpbmUtdGhyb3VnaCcgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtyZXMucmVwbGFjZSgvKDwoW14+XSspPikvZ2ksICcnKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVGV4dD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIDxoMT5VPC9oMT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzLnN0YXJ0c1dpdGgoJzxoMT4nKSAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJlcy5pbmNsdWRlcygnPHU+JykgJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAhcmVzLmluY2x1ZGVzKCc8cz4nKSAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICFyZXMuaW5jbHVkZXMoJzxzdHJvbmc+JykgJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAhcmVzLmluY2x1ZGVzKCc8ZW0+JylcclxuICAgICAgICAgICAgICAgICAgICAgICAgKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDxUZXh0IHN0eWxlPXt7IGZvbnRTaXplOiAxNiwgdGV4dERlY29yYXRpb246ICd1bmRlcmxpbmUnIH19PntyZXMucmVwbGFjZSgvKDwoW14+XSspPikvZ2ksICcnKX08L1RleHQ+O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIDxoMT5VICsgRU08L2gxPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlIGlmIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICByZXMuc3RhcnRzV2l0aCgnPGgxPicpICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzLmluY2x1ZGVzKCc8dT4nKSAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICFyZXMuaW5jbHVkZXMoJzxzPicpICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIXJlcy5pbmNsdWRlcygnPHN0cm9uZz4nKSAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJlcy5pbmNsdWRlcygnPGVtPicpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGV4dCBzdHlsZT17eyBmb250U2l6ZTogMTYsIGZvbnRGYW1pbHk6ICdNb250c2VycmF0LUl0YWxpYycsIHRleHREZWNvcmF0aW9uOiAndW5kZXJsaW5lJyB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3Jlcy5yZXBsYWNlKC8oPChbXj5dKyk+KS9naSwgJycpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9UZXh0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gPGgxPlUgKyBTPC9oMT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzLnN0YXJ0c1dpdGgoJzxoMT4nKSAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJlcy5pbmNsdWRlcygnPHU+JykgJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICByZXMuaW5jbHVkZXMoJzxzPicpICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIXJlcy5pbmNsdWRlcygnPHN0cm9uZz4nKSAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICFyZXMuaW5jbHVkZXMoJzxlbT4nKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRleHQgc3R5bGU9e3sgZm9udFNpemU6IDE2LCB0ZXh0RGVjb3JhdGlvbjogJ2xpbmUtdGhyb3VnaCB1bmRlcmxpbmUnIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7cmVzLnJlcGxhY2UoLyg8KFtePl0rKT4pL2dpLCAnJyl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1RleHQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyA8aDE+VSArIFNUUk9ORzwvaDE+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJlcy5zdGFydHNXaXRoKCc8aDE+JykgJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICByZXMuaW5jbHVkZXMoJzx1PicpICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIXJlcy5pbmNsdWRlcygnPHM+JykgJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICByZXMuaW5jbHVkZXMoJzxzdHJvbmc+JykgJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAhcmVzLmluY2x1ZGVzKCc8ZW0+JylcclxuICAgICAgICAgICAgICAgICAgICAgICAgKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0IHN0eWxlPXt7IGZvbnRTaXplOiAxNiwgZm9udEZhbWlseTogJ01vbnRzZXJyYXQtU2VtaUJvbGQnLCB0ZXh0RGVjb3JhdGlvbjogJ3VuZGVybGluZScgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtyZXMucmVwbGFjZSgvKDwoW14+XSspPikvZ2ksICcnKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVGV4dD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIDxoMT5VICsgUyArIFNUUk9ORzwvaDE+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJlcy5zdGFydHNXaXRoKCc8aDE+JykgJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICByZXMuaW5jbHVkZXMoJzx1PicpICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzLmluY2x1ZGVzKCc8cz4nKSAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJlcy5pbmNsdWRlcygnPHN0cm9uZz4nKSAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICFyZXMuaW5jbHVkZXMoJzxlbT4nKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRleHQgc3R5bGU9e3sgZm9udFNpemU6IDE2LCBmb250RmFtaWx5OiAnTW9udHNlcnJhdC1TZW1pQm9sZCcsIHRleHREZWNvcmF0aW9uOiAnbGluZS10aHJvdWdoIHVuZGVybGluZScgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtyZXMucmVwbGFjZSgvKDwoW14+XSspPikvZ2ksICcnKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVGV4dD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIDxoMT5VICsgUyArIFNUUk9ORyArIEVNPC9oMT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzLnN0YXJ0c1dpdGgoJzxoMT4nKSAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJlcy5pbmNsdWRlcygnPHU+JykgJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICByZXMuaW5jbHVkZXMoJzxzPicpICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzLmluY2x1ZGVzKCc8c3Ryb25nPicpICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzLmluY2x1ZGVzKCc8ZW0+JylcclxuICAgICAgICAgICAgICAgICAgICAgICAgKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IGZvbnRTaXplOiAxNiwgZm9udEZhbWlseTogJ01vbnRzZXJyYXQtU2VtaUJvbGRJdGFsaWMnLCB0ZXh0RGVjb3JhdGlvbjogJ2xpbmUtdGhyb3VnaCB1bmRlcmxpbmUnIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtyZXMucmVwbGFjZSgvKDwoW14+XSspPikvZ2ksICcnKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVGV4dD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIDxoMT5VICsgUyArIEVNPC9oMT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzLnN0YXJ0c1dpdGgoJzxoMT4nKSAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJlcy5pbmNsdWRlcygnPHU+JykgJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICByZXMuaW5jbHVkZXMoJzxzPicpICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIXJlcy5pbmNsdWRlcygnPHN0cm9uZz4nKSAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJlcy5pbmNsdWRlcygnPGVtPicpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGV4dCBzdHlsZT17eyBmb250U2l6ZTogMTYsIGZvbnRGYW1pbHk6ICdNb250c2VycmF0LUl0YWxpYycsIHRleHREZWNvcmF0aW9uOiAnbGluZS10aHJvdWdoIHVuZGVybGluZScgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtyZXMucmVwbGFjZSgvKDwoW14+XSspPikvZ2ksICcnKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVGV4dD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIDxoMT5VICsgU1RST05HICsgRU08L2gxPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlIGlmIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICByZXMuc3RhcnRzV2l0aCgnPGgxPicpICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzLmluY2x1ZGVzKCc8dT4nKSAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICFyZXMuaW5jbHVkZXMoJzxzPicpICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzLmluY2x1ZGVzKCc8c3Ryb25nPicpICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzLmluY2x1ZGVzKCc8ZW0+JylcclxuICAgICAgICAgICAgICAgICAgICAgICAgKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0IHN0eWxlPXt7IGZvbnRTaXplOiAxNiwgZm9udEZhbWlseTogJ01vbnRzZXJyYXQtU2VtaUJvbGRJdGFsaWMnLCB0ZXh0RGVjb3JhdGlvbjogJ3VuZGVybGluZScgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtyZXMucmVwbGFjZSgvKDwoW14+XSspPikvZ2ksICcnKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVGV4dD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIEVORCAtLT4gPGgxPjwvaDE+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tIExJU1RTIFNUQVJUIC0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKHJlcy5zdGFydHNXaXRoKCc8b2w+JykpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBHZXQgcGFydGljdWxhciA8bGk+PC9saT4gZWxlbWVudHNcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgbmV3c3RyID0gcmVzLnJlcGxhY2UoLzwvZ2ksICc8PjwnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgcmVzcG9uc2UgPSBuZXdzdHIuc3BsaXQoJzw+JykuZmlsdGVyKCh2KSA9PiB2ICE9ICcnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgaSA9IDE7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlc3BvbnNlLm1hcCgoaXRlbSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gaWYgKGl0ZW0uc3RhcnRzV2l0aCgnPGxpPicpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgIGNvbnNvbGUubG9nKCdJTVBPUlRBTlQgSVRFTSAtLT4gJywgaXRlbSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgIGNvbnNvbGUubG9nKGl0ZW0ucmVwbGFjZSgvKDwoW14+XSspPikvZ2ksICcnKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgPFZpZXcgc3R5bGU9e3sgbWFyZ2luTGVmdDogMTIgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgICA8VGV4dD57YCR7aSsrfS4gJHtpdGVtLnJlcGxhY2UoLyg8KFtePl0rKT4pL2dpLCAnJyl9YH08L1RleHQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgPC9WaWV3PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXMuc3RhcnRzV2l0aCgnPGxpPicpICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlcy5pbmNsdWRlcygnPHA+JykgJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIXJlcy5pbmNsdWRlcygnPHN0cm9uZz4nKSAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAhcmVzLmluY2x1ZGVzKCc8ZW0+JykgJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIXJlcy5pbmNsdWRlcygnPHM+JykgJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIXJlcy5pbmNsdWRlcygnPHU+JylcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxWaWV3IHN0eWxlPXt7IG1hcmdpbkxlZnQ6IDEyIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRleHQgc3R5bGU9e3sgZm9udFNpemU6IDEyIH19PntgJHtpKyt9LiAke2l0ZW0ucmVwbGFjZSgvKDwoW14+XSspPikvZ2ksICcnKX1gfTwvVGV4dD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1ZpZXc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyA8cD5TVFJPTkc8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbHNlIGlmIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzLnN0YXJ0c1dpdGgoJzxsaT4nKSAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXMuaW5jbHVkZXMoJzxwPicpICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlcy5pbmNsdWRlcygnPHN0cm9uZz4nKSAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAhcmVzLmluY2x1ZGVzKCc8ZW0+JykgJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIXJlcy5pbmNsdWRlcygnPHM+JykgJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIXJlcy5pbmNsdWRlcygnPHU+JylcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0IHN0eWxlPXt7IGZvbnRTaXplOiAxMiwgZm9udEZhbWlseTogJ01vbnRzZXJyYXQtU2VtaUJvbGQnIH19PntyZXMucmVwbGFjZSgvKDwoW14+XSspPikvZ2ksICcnKX08L1RleHQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyA8cD5FTTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXMuc3RhcnRzV2l0aCgnPHA+JykgJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIXJlcy5pbmNsdWRlcygnPHN0cm9uZz4nKSAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXMuaW5jbHVkZXMoJzxlbT4nKSAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAhcmVzLmluY2x1ZGVzKCc8cz4nKSAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAhcmVzLmluY2x1ZGVzKCc8dT4nKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRleHQgc3R5bGU9e3sgZm9udFNpemU6IDEyLCBmb250RmFtaWx5OiAnTW9udHNlcnJhdC1JdGFsaWMnIH19PntyZXMucmVwbGFjZSgvKDwoW14+XSspPikvZ2ksICcnKX08L1RleHQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyA8cD5FTSArIFNUUk9ORzwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXMuc3RhcnRzV2l0aCgnPHA+JykgJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzLmluY2x1ZGVzKCc8c3Ryb25nPicpICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlcy5pbmNsdWRlcygnPGVtPicpICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICFyZXMuaW5jbHVkZXMoJzxzPicpICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICFyZXMuaW5jbHVkZXMoJzx1PicpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGV4dCBzdHlsZT17eyBmb250U2l6ZTogMTIsIGZvbnRGYW1pbHk6ICdNb250c2VycmF0LVNlbWlCb2xkSXRhbGljJyB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtyZXMucmVwbGFjZSgvKDwoW14+XSspPikvZ2ksICcnKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1RleHQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyA8cD5TPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlcy5zdGFydHNXaXRoKCc8cD4nKSAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXMuaW5jbHVkZXMoJzxzPicpICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICFyZXMuaW5jbHVkZXMoJzxzdHJvbmc+JykgJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIXJlcy5pbmNsdWRlcygnPGVtPicpICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICFyZXMuaW5jbHVkZXMoJzx1PicpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGV4dCBzdHlsZT17eyBmb250U2l6ZTogMTIsIHRleHREZWNvcmF0aW9uOiAnbGluZS10aHJvdWdoJyB9fT57cmVzLnJlcGxhY2UoLyg8KFtePl0rKT4pL2dpLCAnJyl9PC9UZXh0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gPHA+UyArIEVNPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlcy5zdGFydHNXaXRoKCc8cD4nKSAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXMuaW5jbHVkZXMoJzxzPicpICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlcy5pbmNsdWRlcygnPGVtPicpICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICFyZXMuaW5jbHVkZXMoJzxzdHJvbmc+JykgJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIXJlcy5pbmNsdWRlcygnPHU+JylcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0IHN0eWxlPXt7IGZvbnRTaXplOiAxMiwgZm9udEZhbWlseTogJ01vbnRzZXJyYXQtSXRhbGljJywgdGV4dERlY29yYXRpb246ICdsaW5lLXRocm91Z2gnIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3Jlcy5yZXBsYWNlKC8oPChbXj5dKyk+KS9naSwgJycpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVGV4dD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIDxwPlMgKyBFTSArIFNUUk9ORzwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXMuc3RhcnRzV2l0aCgnPHA+JykgJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzLmluY2x1ZGVzKCc8cz4nKSAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXMuaW5jbHVkZXMoJzxlbT4nKSAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXMuaW5jbHVkZXMoJzxzdHJvbmc+JykgJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIXJlcy5pbmNsdWRlcygnPHU+JylcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0IHN0eWxlPXt7IGZvbnRTaXplOiAxMiwgZm9udEZhbWlseTogJ01vbnRzZXJyYXQtU2VtaUJvbGRJdGFsaWMnLCB0ZXh0RGVjb3JhdGlvbjogJ2xpbmUtdGhyb3VnaCcgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7cmVzLnJlcGxhY2UoLyg8KFtePl0rKT4pL2dpLCAnJyl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9UZXh0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gPHA+VTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXMuc3RhcnRzV2l0aCgnPHA+JykgJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzLmluY2x1ZGVzKCc8dT4nKSAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAhcmVzLmluY2x1ZGVzKCc8cz4nKSAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAhcmVzLmluY2x1ZGVzKCc8c3Ryb25nPicpICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICFyZXMuaW5jbHVkZXMoJzxlbT4nKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiA8VGV4dCBzdHlsZT17eyBmb250U2l6ZTogMTIsIHRleHREZWNvcmF0aW9uOiAndW5kZXJsaW5lJyB9fT57cmVzLnJlcGxhY2UoLyg8KFtePl0rKT4pL2dpLCAnJyl9PC9UZXh0PjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIDxwPlUgKyBFTTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXMuc3RhcnRzV2l0aCgnPHA+JykgJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzLmluY2x1ZGVzKCc8dT4nKSAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAhcmVzLmluY2x1ZGVzKCc8cz4nKSAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAhcmVzLmluY2x1ZGVzKCc8c3Ryb25nPicpICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlcy5pbmNsdWRlcygnPGVtPicpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGV4dCBzdHlsZT17eyBmb250U2l6ZTogMTIsIGZvbnRGYW1pbHk6ICdNb250c2VycmF0LUl0YWxpYycsIHRleHREZWNvcmF0aW9uOiAndW5kZXJsaW5lJyB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtyZXMucmVwbGFjZSgvKDwoW14+XSspPikvZ2ksICcnKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1RleHQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyA8cD5VICsgUzwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXMuc3RhcnRzV2l0aCgnPHA+JykgJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzLmluY2x1ZGVzKCc8dT4nKSAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXMuaW5jbHVkZXMoJzxzPicpICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICFyZXMuaW5jbHVkZXMoJzxzdHJvbmc+JykgJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIXJlcy5pbmNsdWRlcygnPGVtPicpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGV4dCBzdHlsZT17eyBmb250U2l6ZTogMTIsIHRleHREZWNvcmF0aW9uOiAnbGluZS10aHJvdWdoIHVuZGVybGluZScgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7cmVzLnJlcGxhY2UoLyg8KFtePl0rKT4pL2dpLCAnJyl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9UZXh0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gPHA+VSArIFNUUk9ORzwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXMuc3RhcnRzV2l0aCgnPHA+JykgJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzLmluY2x1ZGVzKCc8dT4nKSAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAhcmVzLmluY2x1ZGVzKCc8cz4nKSAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXMuaW5jbHVkZXMoJzxzdHJvbmc+JykgJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIXJlcy5pbmNsdWRlcygnPGVtPicpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGV4dCBzdHlsZT17eyBmb250U2l6ZTogMTIsIGZvbnRGYW1pbHk6ICdNb250c2VycmF0LVNlbWlCb2xkJywgdGV4dERlY29yYXRpb246ICd1bmRlcmxpbmUnIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3Jlcy5yZXBsYWNlKC8oPChbXj5dKyk+KS9naSwgJycpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVGV4dD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIDxwPlUgKyBTICsgU1RST05HPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlcy5zdGFydHNXaXRoKCc8cD4nKSAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXMuaW5jbHVkZXMoJzx1PicpICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlcy5pbmNsdWRlcygnPHM+JykgJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzLmluY2x1ZGVzKCc8c3Ryb25nPicpICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICFyZXMuaW5jbHVkZXMoJzxlbT4nKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRleHQgc3R5bGU9e3sgZm9udFNpemU6IDEyLCBmb250RmFtaWx5OiAnTW9udHNlcnJhdC1TZW1pQm9sZCcsIHRleHREZWNvcmF0aW9uOiAnbGluZS10aHJvdWdoIHVuZGVybGluZScgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7cmVzLnJlcGxhY2UoLyg8KFtePl0rKT4pL2dpLCAnJyl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9UZXh0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gPHA+VSArIFMgKyBTVFJPTkcgKyBFTTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXMuc3RhcnRzV2l0aCgnPHA+JykgJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzLmluY2x1ZGVzKCc8dT4nKSAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXMuaW5jbHVkZXMoJzxzPicpICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlcy5pbmNsdWRlcygnPHN0cm9uZz4nKSAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXMuaW5jbHVkZXMoJzxlbT4nKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRleHRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnRTaXplOiAxMixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udEZhbWlseTogJ01vbnRzZXJyYXQtU2VtaUJvbGRJdGFsaWMnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0RGVjb3JhdGlvbjogJ2xpbmUtdGhyb3VnaCB1bmRlcmxpbmUnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7cmVzLnJlcGxhY2UoLyg8KFtePl0rKT4pL2dpLCAnJyl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9UZXh0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gPHA+VSArIFMgKyBFTTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXMuc3RhcnRzV2l0aCgnPHA+JykgJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzLmluY2x1ZGVzKCc8dT4nKSAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXMuaW5jbHVkZXMoJzxzPicpICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICFyZXMuaW5jbHVkZXMoJzxzdHJvbmc+JykgJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzLmluY2x1ZGVzKCc8ZW0+JylcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0IHN0eWxlPXt7IGZvbnRTaXplOiAxMiwgZm9udEZhbWlseTogJ01vbnRzZXJyYXQtSXRhbGljJywgdGV4dERlY29yYXRpb246ICdsaW5lLXRocm91Z2ggdW5kZXJsaW5lJyB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtyZXMucmVwbGFjZSgvKDwoW14+XSspPikvZ2ksICcnKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1RleHQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyA8cD5VICsgU1RST05HICsgRU08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbHNlIGlmIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzLnN0YXJ0c1dpdGgoJzxwPicpICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlcy5pbmNsdWRlcygnPHU+JykgJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIXJlcy5pbmNsdWRlcygnPHM+JykgJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzLmluY2x1ZGVzKCc8c3Ryb25nPicpICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlcy5pbmNsdWRlcygnPGVtPicpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGV4dCBzdHlsZT17eyBmb250U2l6ZTogMTIsIGZvbnRGYW1pbHk6ICdNb250c2VycmF0LVNlbWlCb2xkSXRhbGljJywgdGV4dERlY29yYXRpb246ICd1bmRlcmxpbmUnIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3Jlcy5yZXBsYWNlKC8oPChbXj5dKyk+KS9naSwgJycpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVGV4dD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIEVORCAtLT4gPHA+PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICB9KX1cclxuICAgICAgICAgICAgICAgICAgICA8L1ZpZXc+XHJcbiAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KX1cclxuICAgICAgICAgIDwvUGFnZT5cclxuICAgICAgICApO1xyXG4gICAgICB9KX1cclxuICAgIDwvRG9jdW1lbnQ+XHJcbiAgKTtcclxufTtcclxuXHJcbmNvbnN0IFJlYWN0UERGRG9jdW1lbnQgPSAoeyBzZWN0aW9ucyB9KSA9PiB7XHJcbiAgY29uc3Qgc2l6ZSA9IHVzZVdpbmRvd1NpemUoKTtcclxuXHJcbiAgY29uc3Qgc2F2ZUNvbnRhaW5lciA9IHVzZVJlZigpO1xyXG4gIGNvbnN0IGRyb3Bkb3duQnV0dG9uID0gdXNlUmVmKCk7XHJcbiAgY29uc3QgZHJvcGRvd25Db250YWluZXIgPSB1c2VSZWYoKTtcclxuICBjb25zdCBbZHJvcGRvd25CdXR0b25Db2xvckhlbHBlciwgc2V0RHJvcGRvd25CdXR0b25Db2xvckhlbHBlcl0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW2Ryb3Bkb3duQ29udGFpbmVySGVscGVyLCBzZXREcm9wZG93bkNvbnRhaW5lckhlbHBlcl0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3Qgb25TYXZlRHJvcGRvd25TaG93ID0gKCkgPT4ge1xyXG4gICAgaWYgKCFkcm9wZG93bkNvbnRhaW5lckhlbHBlcikge1xyXG4gICAgICBnc2FwLnRvKGRyb3Bkb3duQ29udGFpbmVyLmN1cnJlbnQsIHsgYXV0b0FscGhhOiAxLCBkdXJhdGlvbjogMSwgZWFzZTogTGluZWFyIH0pO1xyXG4gICAgICAvLyBnc2FwLnRvKGRyb3Bkb3duQnV0dG9uLmN1cnJlbnQsIHsgYmFja2dyb3VuZENvbG9yOiAnIzZDNjNGRicsIGNvbG9yOiAnI2Y4ZjlmYicsIGR1cmF0aW9uOiAxLCBlYXNlOiBMaW5lYXIgfSk7XHJcbiAgICAgIHNldERyb3Bkb3duQ29udGFpbmVySGVscGVyKHRydWUpO1xyXG4gICAgICBzZXREcm9wZG93bkJ1dHRvbkNvbG9ySGVscGVyKHRydWUpO1xyXG4gICAgfSBlbHNlIGlmIChkcm9wZG93bkNvbnRhaW5lckhlbHBlcikge1xyXG4gICAgICBnc2FwLnRvKGRyb3Bkb3duQ29udGFpbmVyLmN1cnJlbnQsIHsgYXV0b0FscGhhOiAwLCBkdXJhdGlvbjogMSwgZWFzZTogTGluZWFyIH0pO1xyXG4gICAgICAvLyBnc2FwLnRvKGRyb3Bkb3duQnV0dG9uLmN1cnJlbnQsIHsgYmFja2dyb3VuZENvbG9yOiAnI2Y4ZjlmYicsIGNvbG9yOiAnIzZDNjNGRicsIGR1cmF0aW9uOiAxLCBlYXNlOiBMaW5lYXIgfSk7XHJcbiAgICAgIHNldERyb3Bkb3duQ29udGFpbmVySGVscGVyKGZhbHNlKTtcclxuICAgICAgc2V0RHJvcGRvd25CdXR0b25Db2xvckhlbHBlcihmYWxzZSk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgW2ltYWdlc1VybCwgc2V0SW1hZ2VzVXJsXSA9IHVzZVN0YXRlKCk7XHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnNvbGUubG9nKHNlY3Rpb25zKTtcclxuICAgIGNvbnN0IGltYWdlc0FycmF5ID0gW107XHJcbiAgICBzZXRJbWFnZXNVcmwoaW1hZ2VzQXJyYXkpO1xyXG4gICAgc2VjdGlvbnMgJiZcclxuICAgICAgc2VjdGlvbnMubWFwKChzZWN0aW9uKSA9PiB7XHJcbiAgICAgICAgc2VjdGlvbi5maWVsZHMubWFwKChmaWVsZCkgPT4ge1xyXG4gICAgICAgICAgaWYgKGZpZWxkLnR5cGUgPT0gJ2NoYXJ0Jykge1xyXG4gICAgICAgICAgICBjb25zdCBjb2xvcnMgPVxyXG4gICAgICAgICAgICAgIGZpZWxkLmNoYXJ0VHlwZSA9PSAnUGllIGNoYXJ0JyB8fCBmaWVsZC5jaGFydFR5cGUgPT0gJ0RvdWdobnV0IGNoYXJ0J1xyXG4gICAgICAgICAgICAgICAgPyBbXHJcbiAgICAgICAgICAgICAgICAgICAgJ3JnYmEoMjA1LDIyMCw1NywxKScsXHJcbiAgICAgICAgICAgICAgICAgICAgJ3JnYmEoMjU1LDIzNSw1OSwxKScsXHJcbiAgICAgICAgICAgICAgICAgICAgJ3JnYmEoMjU1LDE5Myw3LDEpJyxcclxuICAgICAgICAgICAgICAgICAgICAncmdiYSgyNTUsMTUyLDAsMSknLFxyXG4gICAgICAgICAgICAgICAgICAgICdyZ2JhKDI1NSw4NywzNCwxKScsXHJcbiAgICAgICAgICAgICAgICAgICAgJ3JnYmEoMjQ0LDY3LDU0LDEpJyxcclxuICAgICAgICAgICAgICAgICAgICAncmdiYSgyMzMsMzAsOTksMSknLFxyXG4gICAgICAgICAgICAgICAgICAgICdyZ2JhKDE1NiwzOSwxNzYsMSknLFxyXG4gICAgICAgICAgICAgICAgICAgICdyZ2JhKDEwMyw1OCwxODMsMSknLFxyXG4gICAgICAgICAgICAgICAgICAgICdyZ2JhKDYzLDgxLDE4MSwxKScsXHJcbiAgICAgICAgICAgICAgICAgICAgJ3JnYmEoOTYsMTI1LDEzOSwxKScsXHJcbiAgICAgICAgICAgICAgICAgICAgJ3JnYmEoMTIxLDg1LDcyLDEpJyxcclxuICAgICAgICAgICAgICAgICAgXVxyXG4gICAgICAgICAgICAgICAgOiBmaWVsZC5jaGFydFR5cGUgPT0gJ0xpbmUgY2hhcnQnIHx8IGZpZWxkLmNoYXJ0VHlwZSA9PSAnQXJlYSBjaGFydCdcclxuICAgICAgICAgICAgICAgID8gJ3JnYmEoMjU1LDE4NSwwICwxICknXHJcbiAgICAgICAgICAgICAgICA6IFtcclxuICAgICAgICAgICAgICAgICAgICAncmdiYSgyNTUsMTg1LDAgLDEgKScsXHJcbiAgICAgICAgICAgICAgICAgICAgJ3JnYmEoMjU1LDE4NSwwICwxICknLFxyXG4gICAgICAgICAgICAgICAgICAgICdyZ2JhKDI1NSwxODUsMCAsMSApJyxcclxuICAgICAgICAgICAgICAgICAgICAncmdiYSgyNTUsMTg1LDAgLDEgKScsXHJcbiAgICAgICAgICAgICAgICAgICAgJ3JnYmEoMjU1LDE4NSwwICwxICknLFxyXG4gICAgICAgICAgICAgICAgICAgICdyZ2JhKDI1NSwxODUsMCAsMSApJyxcclxuICAgICAgICAgICAgICAgICAgICAncmdiYSgyNTUsMTg1LDAgLDEgKScsXHJcbiAgICAgICAgICAgICAgICAgICAgJ3JnYmEoMjU1LDE4NSwwICwxICknLFxyXG4gICAgICAgICAgICAgICAgICAgICdyZ2JhKDI1NSwxODUsMCAsMSApJyxcclxuICAgICAgICAgICAgICAgICAgICAncmdiYSgyNTUsMTg1LDAgLDEgKScsXHJcbiAgICAgICAgICAgICAgICAgICAgJ3JnYmEoMjU1LDE4NSwwICwxICknLFxyXG4gICAgICAgICAgICAgICAgICAgICdyZ2JhKDI1NSwxODUsMCAsMSApJyxcclxuICAgICAgICAgICAgICAgICAgXTtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IGNvbG9yczEgPVxyXG4gICAgICAgICAgICAgIGZpZWxkLmNoYXJ0VHlwZSA9PSAnUGllIGNoYXJ0JyB8fCBmaWVsZC5jaGFydFR5cGUgPT0gJ0RvdWdobnV0IGNoYXJ0J1xyXG4gICAgICAgICAgICAgICAgPyBbXHJcbiAgICAgICAgICAgICAgICAgICAgJ3JnYmEoMjA1LDIyMCw1NywxKScsXHJcbiAgICAgICAgICAgICAgICAgICAgJ3JnYmEoMjU1LDIzNSw1OSwxKScsXHJcbiAgICAgICAgICAgICAgICAgICAgJ3JnYmEoMjU1LDE5Myw3LDEpJyxcclxuICAgICAgICAgICAgICAgICAgICAncmdiYSgyNTUsMTUyLDAsMSknLFxyXG4gICAgICAgICAgICAgICAgICAgICdyZ2JhKDI1NSw4NywzNCwxKScsXHJcbiAgICAgICAgICAgICAgICAgICAgJ3JnYmEoMjQ0LDY3LDU0LDEpJyxcclxuICAgICAgICAgICAgICAgICAgICAncmdiYSgyMzMsMzAsOTksMSknLFxyXG4gICAgICAgICAgICAgICAgICAgICdyZ2JhKDE1NiwzOSwxNzYsMSknLFxyXG4gICAgICAgICAgICAgICAgICAgICdyZ2JhKDEwMyw1OCwxODMsMSknLFxyXG4gICAgICAgICAgICAgICAgICAgICdyZ2JhKDYzLDgxLDE4MSwxKScsXHJcbiAgICAgICAgICAgICAgICAgICAgJ3JnYmEoOTYsMTI1LDEzOSwxKScsXHJcbiAgICAgICAgICAgICAgICAgICAgJ3JnYmEoMTIxLDg1LDcyLDEpJyxcclxuICAgICAgICAgICAgICAgICAgXVxyXG4gICAgICAgICAgICAgICAgOiBmaWVsZC5jaGFydFR5cGUgPT0gJ0xpbmUgY2hhcnQnIHx8IGZpZWxkLmNoYXJ0VHlwZSA9PSAnQXJlYSBjaGFydCdcclxuICAgICAgICAgICAgICAgID8gJ3JnYmEoMCwyMDQsMTA2ICwxICknXHJcbiAgICAgICAgICAgICAgICA6IFtcclxuICAgICAgICAgICAgICAgICAgICAncmdiYSgwLDIwNCwxMDYgLDEgKScsXHJcbiAgICAgICAgICAgICAgICAgICAgJ3JnYmEoMCwyMDQsMTA2ICwxICknLFxyXG4gICAgICAgICAgICAgICAgICAgICdyZ2JhKDAsMjA0LDEwNiAsMSApJyxcclxuICAgICAgICAgICAgICAgICAgICAncmdiYSgwLDIwNCwxMDYgLDEgKScsXHJcbiAgICAgICAgICAgICAgICAgICAgJ3JnYmEoMCwyMDQsMTA2ICwxICknLFxyXG4gICAgICAgICAgICAgICAgICAgICdyZ2JhKDAsMjA0LDEwNiAsMSApJyxcclxuICAgICAgICAgICAgICAgICAgICAncmdiYSgwLDIwNCwxMDYgLDEgKScsXHJcbiAgICAgICAgICAgICAgICAgICAgJ3JnYmEoMCwyMDQsMTA2ICwxICknLFxyXG4gICAgICAgICAgICAgICAgICAgICdyZ2JhKDAsMjA0LDEwNiAsMSApJyxcclxuICAgICAgICAgICAgICAgICAgICAncmdiYSgwLDIwNCwxMDYgLDEgKScsXHJcbiAgICAgICAgICAgICAgICAgICAgJ3JnYmEoMCwyMDQsMTA2ICwxICknLFxyXG4gICAgICAgICAgICAgICAgICAgICdyZ2JhKDAsMjA0LDEwNiAsMSApJyxcclxuICAgICAgICAgICAgICAgICAgXTtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IGNvbG9yczIgPVxyXG4gICAgICAgICAgICAgIGZpZWxkLmNoYXJ0VHlwZSA9PSAnUGllIGNoYXJ0JyB8fCBmaWVsZC5jaGFydFR5cGUgPT0gJ0RvdWdobnV0IGNoYXJ0J1xyXG4gICAgICAgICAgICAgICAgPyBbXHJcbiAgICAgICAgICAgICAgICAgICAgJ3JnYmEoMjA1LDIyMCw1NywxKScsXHJcbiAgICAgICAgICAgICAgICAgICAgJ3JnYmEoMjU1LDIzNSw1OSwxKScsXHJcbiAgICAgICAgICAgICAgICAgICAgJ3JnYmEoMjU1LDE5Myw3LDEpJyxcclxuICAgICAgICAgICAgICAgICAgICAncmdiYSgyNTUsMTUyLDAsMSknLFxyXG4gICAgICAgICAgICAgICAgICAgICdyZ2JhKDI1NSw4NywzNCwxKScsXHJcbiAgICAgICAgICAgICAgICAgICAgJ3JnYmEoMjQ0LDY3LDU0LDEpJyxcclxuICAgICAgICAgICAgICAgICAgICAncmdiYSgyMzMsMzAsOTksMSknLFxyXG4gICAgICAgICAgICAgICAgICAgICdyZ2JhKDE1NiwzOSwxNzYsMSknLFxyXG4gICAgICAgICAgICAgICAgICAgICdyZ2JhKDEwMyw1OCwxODMsMSknLFxyXG4gICAgICAgICAgICAgICAgICAgICdyZ2JhKDYzLDgxLDE4MSwxKScsXHJcbiAgICAgICAgICAgICAgICAgICAgJ3JnYmEoOTYsMTI1LDEzOSwxKScsXHJcbiAgICAgICAgICAgICAgICAgICAgJ3JnYmEoMTIxLDg1LDcyLDEpJyxcclxuICAgICAgICAgICAgICAgICAgXVxyXG4gICAgICAgICAgICAgICAgOiBmaWVsZC5jaGFydFR5cGUgPT0gJ0xpbmUgY2hhcnQnIHx8IGZpZWxkLmNoYXJ0VHlwZSA9PSAnQXJlYSBjaGFydCdcclxuICAgICAgICAgICAgICAgID8gJ3JnYmEoMCwxMjAsMjE1ICwxICknXHJcbiAgICAgICAgICAgICAgICA6IFtcclxuICAgICAgICAgICAgICAgICAgICAncmdiYSgwLDEyMCwyMTUgLDEgKScsXHJcbiAgICAgICAgICAgICAgICAgICAgJ3JnYmEoMCwxMjAsMjE1ICwxICknLFxyXG4gICAgICAgICAgICAgICAgICAgICdyZ2JhKDAsMTIwLDIxNSAsMSApJyxcclxuICAgICAgICAgICAgICAgICAgICAncmdiYSgwLDEyMCwyMTUgLDEgKScsXHJcbiAgICAgICAgICAgICAgICAgICAgJ3JnYmEoMCwxMjAsMjE1ICwxICknLFxyXG4gICAgICAgICAgICAgICAgICAgICdyZ2JhKDAsMTIwLDIxNSAsMSApJyxcclxuICAgICAgICAgICAgICAgICAgICAncmdiYSgwLDEyMCwyMTUgLDEgKScsXHJcbiAgICAgICAgICAgICAgICAgICAgJ3JnYmEoMCwxMjAsMjE1ICwxICknLFxyXG4gICAgICAgICAgICAgICAgICAgICdyZ2JhKDAsMTIwLDIxNSAsMSApJyxcclxuICAgICAgICAgICAgICAgICAgICAncmdiYSgwLDEyMCwyMTUgLDEgKScsXHJcbiAgICAgICAgICAgICAgICAgICAgJ3JnYmEoMCwxMjAsMjE1ICwxICknLFxyXG4gICAgICAgICAgICAgICAgICAgICdyZ2JhKDAsMTIwLDIxNSAsMSApJyxcclxuICAgICAgICAgICAgICAgICAgXTtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IGNvbG9yczMgPVxyXG4gICAgICAgICAgICAgIGZpZWxkLmNoYXJ0VHlwZSA9PSAnUGllIGNoYXJ0JyB8fCBmaWVsZC5jaGFydFR5cGUgPT0gJ0RvdWdobnV0IGNoYXJ0J1xyXG4gICAgICAgICAgICAgICAgPyBbXHJcbiAgICAgICAgICAgICAgICAgICAgJ3JnYmEoMjA1LDIyMCw1NywxKScsXHJcbiAgICAgICAgICAgICAgICAgICAgJ3JnYmEoMjU1LDIzNSw1OSwxKScsXHJcbiAgICAgICAgICAgICAgICAgICAgJ3JnYmEoMjU1LDE5Myw3LDEpJyxcclxuICAgICAgICAgICAgICAgICAgICAncmdiYSgyNTUsMTUyLDAsMSknLFxyXG4gICAgICAgICAgICAgICAgICAgICdyZ2JhKDI1NSw4NywzNCwxKScsXHJcbiAgICAgICAgICAgICAgICAgICAgJ3JnYmEoMjQ0LDY3LDU0LDEpJyxcclxuICAgICAgICAgICAgICAgICAgICAncmdiYSgyMzMsMzAsOTksMSknLFxyXG4gICAgICAgICAgICAgICAgICAgICdyZ2JhKDE1NiwzOSwxNzYsMSknLFxyXG4gICAgICAgICAgICAgICAgICAgICdyZ2JhKDEwMyw1OCwxODMsMSknLFxyXG4gICAgICAgICAgICAgICAgICAgICdyZ2JhKDYzLDgxLDE4MSwxKScsXHJcbiAgICAgICAgICAgICAgICAgICAgJ3JnYmEoOTYsMTI1LDEzOSwxKScsXHJcbiAgICAgICAgICAgICAgICAgICAgJ3JnYmEoMTIxLDg1LDcyLDEpJyxcclxuICAgICAgICAgICAgICAgICAgXVxyXG4gICAgICAgICAgICAgICAgOiBmaWVsZC5jaGFydFR5cGUgPT0gJ0xpbmUgY2hhcnQnIHx8IGZpZWxkLmNoYXJ0VHlwZSA9PSAnQXJlYSBjaGFydCdcclxuICAgICAgICAgICAgICAgID8gJ3JnYmEoMjMxLDcyLDg2ICwxICknXHJcbiAgICAgICAgICAgICAgICA6IFtcclxuICAgICAgICAgICAgICAgICAgICAncmdiYSgyMzEsNzIsODYgLDEgKScsXHJcbiAgICAgICAgICAgICAgICAgICAgJ3JnYmEoMjMxLDcyLDg2ICwxICknLFxyXG4gICAgICAgICAgICAgICAgICAgICdyZ2JhKDIzMSw3Miw4NiAsMSApJyxcclxuICAgICAgICAgICAgICAgICAgICAncmdiYSgyMzEsNzIsODYgLDEgKScsXHJcbiAgICAgICAgICAgICAgICAgICAgJ3JnYmEoMjMxLDcyLDg2ICwxICknLFxyXG4gICAgICAgICAgICAgICAgICAgICdyZ2JhKDIzMSw3Miw4NiAsMSApJyxcclxuICAgICAgICAgICAgICAgICAgICAncmdiYSgyMzEsNzIsODYgLDEgKScsXHJcbiAgICAgICAgICAgICAgICAgICAgJ3JnYmEoMjMxLDcyLDg2ICwxICknLFxyXG4gICAgICAgICAgICAgICAgICAgICdyZ2JhKDIzMSw3Miw4NiAsMSApJyxcclxuICAgICAgICAgICAgICAgICAgICAncmdiYSgyMzEsNzIsODYgLDEgKScsXHJcbiAgICAgICAgICAgICAgICAgICAgJ3JnYmEoMjMxLDcyLDg2ICwxICknLFxyXG4gICAgICAgICAgICAgICAgICAgICdyZ2JhKDIzMSw3Miw4NiAsMSApJyxcclxuICAgICAgICAgICAgICAgICAgXTtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IGNvbG9yczQgPVxyXG4gICAgICAgICAgICAgIGZpZWxkLmNoYXJ0VHlwZSA9PSAnUGllIGNoYXJ0JyB8fCBmaWVsZC5jaGFydFR5cGUgPT0gJ0RvdWdobnV0IGNoYXJ0J1xyXG4gICAgICAgICAgICAgICAgPyBbXHJcbiAgICAgICAgICAgICAgICAgICAgJ3JnYmEoMjA1LDIyMCw1NywxKScsXHJcbiAgICAgICAgICAgICAgICAgICAgJ3JnYmEoMjU1LDIzNSw1OSwxKScsXHJcbiAgICAgICAgICAgICAgICAgICAgJ3JnYmEoMjU1LDE5Myw3LDEpJyxcclxuICAgICAgICAgICAgICAgICAgICAncmdiYSgyNTUsMTUyLDAsMSknLFxyXG4gICAgICAgICAgICAgICAgICAgICdyZ2JhKDI1NSw4NywzNCwxKScsXHJcbiAgICAgICAgICAgICAgICAgICAgJ3JnYmEoMjQ0LDY3LDU0LDEpJyxcclxuICAgICAgICAgICAgICAgICAgICAncmdiYSgyMzMsMzAsOTksMSknLFxyXG4gICAgICAgICAgICAgICAgICAgICdyZ2JhKDE1NiwzOSwxNzYsMSknLFxyXG4gICAgICAgICAgICAgICAgICAgICdyZ2JhKDEwMyw1OCwxODMsMSknLFxyXG4gICAgICAgICAgICAgICAgICAgICdyZ2JhKDYzLDgxLDE4MSwxKScsXHJcbiAgICAgICAgICAgICAgICAgICAgJ3JnYmEoOTYsMTI1LDEzOSwxKScsXHJcbiAgICAgICAgICAgICAgICAgICAgJ3JnYmEoMTIxLDg1LDcyLDEpJyxcclxuICAgICAgICAgICAgICAgICAgXVxyXG4gICAgICAgICAgICAgICAgOiBmaWVsZC5jaGFydFR5cGUgPT0gJ0xpbmUgY2hhcnQnIHx8IGZpZWxkLmNoYXJ0VHlwZSA9PSAnQXJlYSBjaGFydCdcclxuICAgICAgICAgICAgICAgID8gJ3JnYmEoMTI2LDExNSw5NSAsMSApJ1xyXG4gICAgICAgICAgICAgICAgOiBbXHJcbiAgICAgICAgICAgICAgICAgICAgJ3JnYmEoMTI2LDExNSw5NSAsMSApJyxcclxuICAgICAgICAgICAgICAgICAgICAncmdiYSgxMjYsMTE1LDk1ICwxICknLFxyXG4gICAgICAgICAgICAgICAgICAgICdyZ2JhKDEyNiwxMTUsOTUgLDEgKScsXHJcbiAgICAgICAgICAgICAgICAgICAgJ3JnYmEoMTI2LDExNSw5NSAsMSApJyxcclxuICAgICAgICAgICAgICAgICAgICAncmdiYSgxMjYsMTE1LDk1ICwxICknLFxyXG4gICAgICAgICAgICAgICAgICAgICdyZ2JhKDEyNiwxMTUsOTUgLDEgKScsXHJcbiAgICAgICAgICAgICAgICAgICAgJ3JnYmEoMTI2LDExNSw5NSAsMSApJyxcclxuICAgICAgICAgICAgICAgICAgICAncmdiYSgxMjYsMTE1LDk1ICwxICknLFxyXG4gICAgICAgICAgICAgICAgICAgICdyZ2JhKDEyNiwxMTUsOTUgLDEgKScsXHJcbiAgICAgICAgICAgICAgICAgICAgJ3JnYmEoMTI2LDExNSw5NSAsMSApJyxcclxuICAgICAgICAgICAgICAgICAgICAncmdiYSgxMjYsMTE1LDk1ICwxICknLFxyXG4gICAgICAgICAgICAgICAgICAgICdyZ2JhKDEyNiwxMTUsOTUgLDEgKScsXHJcbiAgICAgICAgICAgICAgICAgIF07XHJcblxyXG4gICAgICAgICAgICBjb25zdCBjb2xvcnM1ID1cclxuICAgICAgICAgICAgICBmaWVsZC5jaGFydFR5cGUgPT0gJ1BpZSBjaGFydCcgfHwgZmllbGQuY2hhcnRUeXBlID09ICdEb3VnaG51dCBjaGFydCdcclxuICAgICAgICAgICAgICAgID8gW1xyXG4gICAgICAgICAgICAgICAgICAgICdyZ2JhKDIwNSwyMjAsNTcsMSknLFxyXG4gICAgICAgICAgICAgICAgICAgICdyZ2JhKDI1NSwyMzUsNTksMSknLFxyXG4gICAgICAgICAgICAgICAgICAgICdyZ2JhKDI1NSwxOTMsNywxKScsXHJcbiAgICAgICAgICAgICAgICAgICAgJ3JnYmEoMjU1LDE1MiwwLDEpJyxcclxuICAgICAgICAgICAgICAgICAgICAncmdiYSgyNTUsODcsMzQsMSknLFxyXG4gICAgICAgICAgICAgICAgICAgICdyZ2JhKDI0NCw2Nyw1NCwxKScsXHJcbiAgICAgICAgICAgICAgICAgICAgJ3JnYmEoMjMzLDMwLDk5LDEpJyxcclxuICAgICAgICAgICAgICAgICAgICAncmdiYSgxNTYsMzksMTc2LDEpJyxcclxuICAgICAgICAgICAgICAgICAgICAncmdiYSgxMDMsNTgsMTgzLDEpJyxcclxuICAgICAgICAgICAgICAgICAgICAncmdiYSg2Myw4MSwxODEsMSknLFxyXG4gICAgICAgICAgICAgICAgICAgICdyZ2JhKDk2LDEyNSwxMzksMSknLFxyXG4gICAgICAgICAgICAgICAgICAgICdyZ2JhKDEyMSw4NSw3MiwxKScsXHJcbiAgICAgICAgICAgICAgICAgIF1cclxuICAgICAgICAgICAgICAgIDogZmllbGQuY2hhcnRUeXBlID09ICdMaW5lIGNoYXJ0JyB8fCBmaWVsZC5jaGFydFR5cGUgPT0gJ0FyZWEgY2hhcnQnXHJcbiAgICAgICAgICAgICAgICA/ICdyZ2JhKDE3Nyw3MCwxOTQgLDEgKSdcclxuICAgICAgICAgICAgICAgIDogW1xyXG4gICAgICAgICAgICAgICAgICAgICdyZ2JhKDE3Nyw3MCwxOTQgLDEgKScsXHJcbiAgICAgICAgICAgICAgICAgICAgJ3JnYmEoMTc3LDcwLDE5NCAsMSApJyxcclxuICAgICAgICAgICAgICAgICAgICAncmdiYSgxNzcsNzAsMTk0ICwxICknLFxyXG4gICAgICAgICAgICAgICAgICAgICdyZ2JhKDE3Nyw3MCwxOTQgLDEgKScsXHJcbiAgICAgICAgICAgICAgICAgICAgJ3JnYmEoMTc3LDcwLDE5NCAsMSApJyxcclxuICAgICAgICAgICAgICAgICAgICAncmdiYSgxNzcsNzAsMTk0ICwxICknLFxyXG4gICAgICAgICAgICAgICAgICAgICdyZ2JhKDE3Nyw3MCwxOTQgLDEgKScsXHJcbiAgICAgICAgICAgICAgICAgICAgJ3JnYmEoMTc3LDcwLDE5NCAsMSApJyxcclxuICAgICAgICAgICAgICAgICAgICAncmdiYSgxNzcsNzAsMTk0ICwxICknLFxyXG4gICAgICAgICAgICAgICAgICAgICdyZ2JhKDE3Nyw3MCwxOTQgLDEgKScsXHJcbiAgICAgICAgICAgICAgICAgICAgJ3JnYmEoMTc3LDcwLDE5NCAsMSApJyxcclxuICAgICAgICAgICAgICAgICAgICAncmdiYSgxNzcsNzAsMTk0ICwxICknLFxyXG4gICAgICAgICAgICAgICAgICBdO1xyXG4gICAgICAgICAgICBjb25zdCBkYXRhID0ge1xyXG4gICAgICAgICAgICAgIGxhYmVsczogZmllbGQubGFiZWxzICYmIFtcclxuICAgICAgICAgICAgICAgIC4uLmZpZWxkLmxhYmVscy5tYXAoKGxhYmVsKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgIGlmIChsYWJlbCAhPT0gJycpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gbGFiZWw7XHJcbiAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuICcnO1xyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KSxcclxuICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgIGRhdGFzZXRzOiBbXHJcbiAgICAgICAgICAgICAgICAvLyBEYXRhc2V0MVxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICBsYWJlbDogZmllbGQuZGF0YXNldDFMYWJlbCAmJiBmaWVsZC5kYXRhc2V0MUxhYmVsLFxyXG4gICAgICAgICAgICAgICAgICBkYXRhOlxyXG4gICAgICAgICAgICAgICAgICAgIGZpZWxkLmRhdGFzZXQxICYmXHJcbiAgICAgICAgICAgICAgICAgICAgZmllbGQuZGF0YXNldDEubWFwKChkYXRhKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICBpZiAoZGF0YSAhPT0gJycpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGRhdGE7XHJcbiAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSksXHJcbiAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogY29sb3JzLFxyXG4gICAgICAgICAgICAgICAgICBib3JkZXJXaWR0aDpcclxuICAgICAgICAgICAgICAgICAgICBmaWVsZC5jaGFydFR5cGUgPT0gJ0FyZWEgY2hhcnQnID8gMCA6IGZpZWxkLmNoYXJ0VHlwZSA9PSAnUGllIGNoYXJ0JyB8fCAoZmllbGQuY2hhcnRUeXBlID09ICdEb3VnaG51dCBjaGFydCcgJiYgMiksXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgLy8gRGF0YXNldDJcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgbGFiZWw6IGZpZWxkLmRhdGFzZXQyTGFiZWwgJiYgZmllbGQuZGF0YXNldDJMYWJlbCxcclxuICAgICAgICAgICAgICAgICAgZGF0YTpcclxuICAgICAgICAgICAgICAgICAgICBmaWVsZC5kYXRhc2V0MiAmJlxyXG4gICAgICAgICAgICAgICAgICAgIGZpZWxkLmRhdGFzZXQyLm1hcCgoZGF0YSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgaWYgKGRhdGEgIT09ICcnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBkYXRhO1xyXG4gICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH0pLFxyXG4gICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IGNvbG9yczEsXHJcbiAgICAgICAgICAgICAgICAgIGJvcmRlcldpZHRoOlxyXG4gICAgICAgICAgICAgICAgICAgIGZpZWxkLmNoYXJ0VHlwZSA9PSAnQXJlYSBjaGFydCcgPyAwIDogZmllbGQuY2hhcnRUeXBlID09ICdQaWUgY2hhcnQnIHx8IChmaWVsZC5jaGFydFR5cGUgPT0gJ0RvdWdobnV0IGNoYXJ0JyAmJiAyKSxcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAvLyBEYXRhc2V0M1xyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICBsYWJlbDogZmllbGQuZGF0YXNldDNMYWJlbCAmJiBmaWVsZC5kYXRhc2V0M0xhYmVsLFxyXG4gICAgICAgICAgICAgICAgICBkYXRhOlxyXG4gICAgICAgICAgICAgICAgICAgIGZpZWxkLmRhdGFzZXQzICYmXHJcbiAgICAgICAgICAgICAgICAgICAgZmllbGQuZGF0YXNldDMubWFwKChkYXRhKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICBpZiAoZGF0YSAhPT0gJycpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGRhdGE7XHJcbiAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSksXHJcbiAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogY29sb3JzMixcclxuICAgICAgICAgICAgICAgICAgYm9yZGVyV2lkdGg6XHJcbiAgICAgICAgICAgICAgICAgICAgZmllbGQuY2hhcnRUeXBlID09ICdBcmVhIGNoYXJ0JyA/IDAgOiBmaWVsZC5jaGFydFR5cGUgPT0gJ1BpZSBjaGFydCcgfHwgKGZpZWxkLmNoYXJ0VHlwZSA9PSAnRG91Z2hudXQgY2hhcnQnICYmIDIpLFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIC8vIERhdGFzZXQ0XHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgIGxhYmVsOiBmaWVsZC5kYXRhc2V0NExhYmVsICYmIGZpZWxkLmRhdGFzZXQ0TGFiZWwsXHJcbiAgICAgICAgICAgICAgICAgIGRhdGE6XHJcbiAgICAgICAgICAgICAgICAgICAgZmllbGQuZGF0YXNldDQgJiZcclxuICAgICAgICAgICAgICAgICAgICBmaWVsZC5kYXRhc2V0NC5tYXAoKGRhdGEpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgIGlmIChkYXRhICE9PSAnJykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZGF0YTtcclxuICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9KSxcclxuICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBjb2xvcnMzLFxyXG4gICAgICAgICAgICAgICAgICBib3JkZXJXaWR0aDpcclxuICAgICAgICAgICAgICAgICAgICBmaWVsZC5jaGFydFR5cGUgPT0gJ0FyZWEgY2hhcnQnID8gMCA6IGZpZWxkLmNoYXJ0VHlwZSA9PSAnUGllIGNoYXJ0JyB8fCAoZmllbGQuY2hhcnRUeXBlID09ICdEb3VnaG51dCBjaGFydCcgJiYgMiksXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgLy8gRGF0YXNldDVcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgbGFiZWw6IGZpZWxkLmRhdGFzZXQ1TGFiZWwgJiYgZmllbGQuZGF0YXNldDVMYWJlbCxcclxuICAgICAgICAgICAgICAgICAgZGF0YTpcclxuICAgICAgICAgICAgICAgICAgICBmaWVsZC5kYXRhc2V0NSAmJlxyXG4gICAgICAgICAgICAgICAgICAgIGZpZWxkLmRhdGFzZXQ1Lm1hcCgoZGF0YSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgaWYgKGRhdGEgIT09ICcnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBkYXRhO1xyXG4gICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH0pLFxyXG4gICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IGNvbG9yczQsXHJcbiAgICAgICAgICAgICAgICAgIGJvcmRlcldpZHRoOlxyXG4gICAgICAgICAgICAgICAgICAgIGZpZWxkLmNoYXJ0VHlwZSA9PSAnQXJlYSBjaGFydCcgPyAwIDogZmllbGQuY2hhcnRUeXBlID09ICdQaWUgY2hhcnQnIHx8IChmaWVsZC5jaGFydFR5cGUgPT0gJ0RvdWdobnV0IGNoYXJ0JyAmJiAyKSxcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAvLyBEYXRhc2V0NlxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICBsYWJlbDogZmllbGQuZGF0YXNldDZMYWJlbCAmJiBmaWVsZC5kYXRhc2V0NkxhYmVsLFxyXG4gICAgICAgICAgICAgICAgICBkYXRhOlxyXG4gICAgICAgICAgICAgICAgICAgIGZpZWxkLmRhdGFzZXQ2ICYmXHJcbiAgICAgICAgICAgICAgICAgICAgZmllbGQuZGF0YXNldDYubWFwKChkYXRhKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICBpZiAoZGF0YSAhPT0gJycpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGRhdGE7XHJcbiAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSksXHJcbiAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogY29sb3JzNSxcclxuICAgICAgICAgICAgICAgICAgYm9yZGVyV2lkdGg6XHJcbiAgICAgICAgICAgICAgICAgICAgZmllbGQuY2hhcnRUeXBlID09ICdBcmVhIGNoYXJ0JyA/IDAgOiBmaWVsZC5jaGFydFR5cGUgPT0gJ1BpZSBjaGFydCcgfHwgKGZpZWxkLmNoYXJ0VHlwZSA9PSAnRG91Z2hudXQgY2hhcnQnICYmIDIpLFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICAgY29uc3QgZGF0YXMgPSBkYXRhLmRhdGFzZXRzLm1hcCgoZGF0YXNldCkgPT4ge1xyXG4gICAgICAgICAgICAgIGNvbnNvbGUubG9nKGRhdGFzZXQuZGF0YVswXSk7XHJcbiAgICAgICAgICAgICAgY29uc3QgdGVzdDEgPSBkYXRhc2V0LmRhdGEubWFwKChkYXRhc2VzKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAoZGF0YXNlcyAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICAgIHJldHVybiBkYXRhc2VzO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgcmV0dXJuICcnO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgIGNvbnN0IHRlc3QgPSB0ZXN0MS5tYXAoKGRhdGFyZXIsIGluZGV4KSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAoZGF0YS5sYWJlbHNbaW5kZXhdICE9PSAnJykge1xyXG4gICAgICAgICAgICAgICAgICByZXR1cm4gZGF0YXJlcjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICBjb25zdCB0ZXN0MiA9IHRlc3QuZmlsdGVyKChvYmopID0+IG9iaiAhPT0gdW5kZWZpbmVkKTtcclxuICAgICAgICAgICAgICByZXR1cm4gdGVzdDI7XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgY29uc3QgZmlsbCA9IGZpZWxkLmNoYXJ0VHlwZSA9PSAnTGluZSBjaGFydCcgPyBmYWxzZSA6IHVuZGVmaW5lZDtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IG5ld0RhdGFzZXRzID0gW1xyXG4gICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGxhYmVsOiBkYXRhLmRhdGFzZXRzWzBdLmxhYmVsLFxyXG4gICAgICAgICAgICAgICAgZGF0YTogZGF0YXNbMF0sXHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IGRhdGEuZGF0YXNldHNbMF0uYmFja2dyb3VuZENvbG9yLFxyXG4gICAgICAgICAgICAgICAgYm9yZGVyQ29sb3I6IGZpZWxkLmNoYXJ0VHlwZSA9PSAnTGluZSBjaGFydCcgPyAncmdiYSgyNTUsMTg1LDAgLDEgKScgOiAncmdiKDI1NSwgMjU1LCAyNTUpJyxcclxuICAgICAgICAgICAgICAgIGJvcmRlcldpZHRoOiBkYXRhLmRhdGFzZXRzWzBdLmJvcmRlcldpZHRoLFxyXG4gICAgICAgICAgICAgICAgZmlsbDogZmlsbCxcclxuICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGxhYmVsOiBkYXRhLmRhdGFzZXRzWzFdLmxhYmVsLFxyXG4gICAgICAgICAgICAgICAgZGF0YTogZGF0YXNbMV0sXHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IGRhdGEuZGF0YXNldHNbMV0uYmFja2dyb3VuZENvbG9yLFxyXG4gICAgICAgICAgICAgICAgYm9yZGVyQ29sb3I6IGZpZWxkLmNoYXJ0VHlwZSA9PSAnTGluZSBjaGFydCcgPyAncmdiYSgwLDIwNCwxMDYgLDEgKScgOiAncmdiKDI1NSwgMjU1LCAyNTUpJyxcclxuICAgICAgICAgICAgICAgIGJvcmRlcldpZHRoOiBkYXRhLmRhdGFzZXRzWzFdLmJvcmRlcldpZHRoLFxyXG4gICAgICAgICAgICAgICAgZmlsbDogZmlsbCxcclxuICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGxhYmVsOiBkYXRhLmRhdGFzZXRzWzJdLmxhYmVsLFxyXG4gICAgICAgICAgICAgICAgZGF0YTogZGF0YXNbMl0sXHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IGRhdGEuZGF0YXNldHNbMl0uYmFja2dyb3VuZENvbG9yLFxyXG4gICAgICAgICAgICAgICAgYm9yZGVyQ29sb3I6IGZpZWxkLmNoYXJ0VHlwZSA9PSAnTGluZSBjaGFydCcgPyAncmdiYSgwLDEyMCwyMTUgLDEgKScgOiAncmdiKDI1NSwgMjU1LCAyNTUpJyxcclxuICAgICAgICAgICAgICAgIGJvcmRlcldpZHRoOiBkYXRhLmRhdGFzZXRzWzJdLmJvcmRlcldpZHRoLFxyXG4gICAgICAgICAgICAgICAgZmlsbDogZmlsbCxcclxuICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGxhYmVsOiBkYXRhLmRhdGFzZXRzWzNdLmxhYmVsLFxyXG4gICAgICAgICAgICAgICAgZGF0YTogZGF0YXNbM10sXHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IGRhdGEuZGF0YXNldHNbM10uYmFja2dyb3VuZENvbG9yLFxyXG4gICAgICAgICAgICAgICAgYm9yZGVyQ29sb3I6IGZpZWxkLmNoYXJ0VHlwZSA9PSAnTGluZSBjaGFydCcgPyAncmdiYSgyMzEsNzIsODYgLDEgKScgOiAncmdiKDI1NSwgMjU1LCAyNTUpJyxcclxuICAgICAgICAgICAgICAgIGJvcmRlcldpZHRoOiBkYXRhLmRhdGFzZXRzWzNdLmJvcmRlcldpZHRoLFxyXG4gICAgICAgICAgICAgICAgZmlsbDogZmlsbCxcclxuICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGxhYmVsOiBkYXRhLmRhdGFzZXRzWzRdLmxhYmVsLFxyXG4gICAgICAgICAgICAgICAgZGF0YTogZGF0YXNbNF0sXHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IGRhdGEuZGF0YXNldHNbNF0uYmFja2dyb3VuZENvbG9yLFxyXG4gICAgICAgICAgICAgICAgYm9yZGVyQ29sb3I6IGZpZWxkLmNoYXJ0VHlwZSA9PSAnTGluZSBjaGFydCcgPyAncmdiYSgxMjYsMTE1LDk1ICwxICknIDogJ3JnYigyNTUsIDI1NSwgMjU1KScsXHJcbiAgICAgICAgICAgICAgICBib3JkZXJXaWR0aDogZGF0YS5kYXRhc2V0c1s0XS5ib3JkZXJXaWR0aCxcclxuICAgICAgICAgICAgICAgIGZpbGw6IGZpbGwsXHJcbiAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBsYWJlbDogZGF0YS5kYXRhc2V0c1s1XS5sYWJlbCxcclxuICAgICAgICAgICAgICAgIGRhdGE6IGRhdGFzWzVdLFxyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBkYXRhLmRhdGFzZXRzWzVdLmJhY2tncm91bmRDb2xvcixcclxuICAgICAgICAgICAgICAgIGJvcmRlckNvbG9yOiBmaWVsZC5jaGFydFR5cGUgPT0gJ0xpbmUgY2hhcnQnID8gJ3JnYmEoMTc3LDcwLDE5NCAsMSApJyA6ICdyZ2IoMjU1LCAyNTUsIDI1NSknLFxyXG4gICAgICAgICAgICAgICAgYm9yZGVyV2lkdGg6IGRhdGEuZGF0YXNldHNbNV0uYm9yZGVyV2lkdGgsXHJcbiAgICAgICAgICAgICAgICBmaWxsOiBmaWxsLFxyXG4gICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIF07XHJcblxyXG4gICAgICAgICAgICBjb25zdCBjaGFydFR5cGUgPSBbXHJcbiAgICAgICAgICAgICAgZmllbGQuY2hhcnRUeXBlID09ICdCYXIgY2hhcnQnID8gJ2JhcicgOiAnJyxcclxuICAgICAgICAgICAgICBmaWVsZC5jaGFydFR5cGUgPT0gJ1JldmVyc2UgY2hhcnQnID8gJ2hvcml6b250YWxCYXInIDogJycsXHJcbiAgICAgICAgICAgICAgZmllbGQuY2hhcnRUeXBlID09ICdMaW5lIGNoYXJ0JyA/ICdsaW5lJyA6ICcnLFxyXG4gICAgICAgICAgICAgIGZpZWxkLmNoYXJ0VHlwZSA9PSAnUGllIGNoYXJ0JyA/ICdwaWUnIDogJycsXHJcbiAgICAgICAgICAgICAgZmllbGQuY2hhcnRUeXBlID09ICdEb3VnaG51dCBjaGFydCcgPyAnZG91Z2hudXQnIDogJycsXHJcbiAgICAgICAgICAgICAgZmllbGQuY2hhcnRUeXBlID09ICdBcmVhIGNoYXJ0JyA/ICdsaW5lJyA6ICcnLFxyXG4gICAgICAgICAgICBdO1xyXG5cclxuICAgICAgICAgICAgY29uc3QgdG9TYXZlQ2hhcnQgPSBuZXcgQ2hhcnRKc0ltYWdlKCk7XHJcbiAgICAgICAgICAgIHRvU2F2ZUNoYXJ0LnNldENvbmZpZyh7XHJcbiAgICAgICAgICAgICAgdHlwZTogY2hhcnRUeXBlLmZpbHRlcigodHlwZSkgPT4gdHlwZSAhPT0gJycpLFxyXG4gICAgICAgICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgICAgICAgIGxhYmVsczogZGF0YS5sYWJlbHMuZmlsdGVyKChsYWJlbCkgPT4gbGFiZWwgIT09ICcnKSxcclxuICAgICAgICAgICAgICAgIGRhdGFzZXRzOiBuZXdEYXRhc2V0cy5maWx0ZXIoKGRhdGFzZXQpID0+IGRhdGFzZXQubGFiZWwgIT09ICcnKSxcclxuICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgIG9wdGlvbnM6IHtcclxuICAgICAgICAgICAgICAgIHJlc3BvbnNpdmU6IHRydWUsXHJcbiAgICAgICAgICAgICAgICBsZWdlbmQ6IHtcclxuICAgICAgICAgICAgICAgICAgcG9zaXRpb246ICdib3R0b20nLFxyXG4gICAgICAgICAgICAgICAgICBsYWJlbHM6IHtcclxuICAgICAgICAgICAgICAgICAgICBib3hXaWR0aDogMzAsXHJcbiAgICAgICAgICAgICAgICAgICAgYm94SGVpZ2h0OiA1LFxyXG4gICAgICAgICAgICAgICAgICAgIGZvbnRGYW1pbHk6ICdDb21mb3J0YWEnLFxyXG4gICAgICAgICAgICAgICAgICAgIGZvbnRTaXplOiAxMixcclxuICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAvLyBkZWZhdWx0Rm9udEZhbWlseTogKENoYXJ0LmRlZmF1bHRzLmdsb2JhbC5kZWZhdWx0Rm9udEZhbWlseSA9ICdDb21mb3J0YWEnKSxcclxuICAgICAgICAgICAgICAgIHNjYWxlczoge1xyXG4gICAgICAgICAgICAgICAgICB5QXhlczogW1xyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgIHN0YWNrZWQ6IGZpZWxkLnN0YWNrZWQgPT0gdHJ1ZSA/IHRydWUgOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICAgIHRpY2tzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJlZ2luQXRaZXJvOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250RmFtaWx5OiAnQ29tZm9ydGFhJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udFNpemU6IDEwLFxyXG4gICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgICB4QXhlczogW1xyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgIHN0YWNrZWQ6IGZpZWxkLnN0YWNrZWQgPT0gdHJ1ZSA/IHRydWUgOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICAgIHRpY2tzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJlZ2luQXRaZXJvOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250RmFtaWx5OiAnQ29tZm9ydGFhJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udFNpemU6IDEwLFxyXG4gICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIHRvU2F2ZUNoYXJ0LnNldEZvcm1hdCgncG5nJykuc2V0RGV2aWNlUGl4ZWxSYXRpbygzLjApLnNldEJhY2tncm91bmRDb2xvcignI2Y4ZjlmYicpO1xyXG4gICAgICAgICAgICBjb25zdCBpbWFnZVVybCA9IHRvU2F2ZUNoYXJ0LnRvRGF0YVVybCgpO1xyXG4gICAgICAgICAgICBpbWFnZVVybC50aGVuKChpbWFnZSkgPT4ge1xyXG4gICAgICAgICAgICAgIGNvbnNvbGUubG9nKGltYWdlKTtcclxuICAgICAgICAgICAgICBpbWFnZXNBcnJheS5wdXNoKHsgaW1hZ2VVcmw6IGltYWdlLCBpbWFnZUluZGV4OiBmaWVsZC5pbmRleCB9KTtcclxuICAgICAgICAgICAgICBjb25zb2xlLmxvZyhpbWFnZXNBcnJheSk7XHJcbiAgICAgICAgICAgICAgc2V0SW1hZ2VzVXJsKGltYWdlc0FycmF5KTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH0pO1xyXG4gIH0sIFtzZWN0aW9uc10pO1xyXG5cclxuICBjb25zb2xlLmxvZyhpbWFnZXNVcmwpO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiByZWY9e3NhdmVDb250YWluZXJ9IGNsYXNzTmFtZT1cInJlbGF0aXZlIGZsZXgganVzdGlmeS1zdGFydFwiPlxyXG4gICAgICB7c2l6ZS53aWR0aCA8IDY4MCA/IChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggbXQtNFwiPlxyXG4gICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICBvbkNsaWNrPXthc3luYyAoZSkgPT4ge1xyXG4gICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgICBjb25zdCBkb2MgPSAoXHJcbiAgICAgICAgICAgICAgICA8TXlEb2N1bWVudFxyXG4gICAgICAgICAgICAgICAgICBpbWFnZT17aW1hZ2VVcmx9XHJcbiAgICAgICAgICAgICAgICAgIGRhdGE9e2RhdGF9XHJcbiAgICAgICAgICAgICAgICAgIHBlcmlvZHM9e3BlcmlvZHN9XHJcbiAgICAgICAgICAgICAgICAgIHJldmVudWVFbGVtZW50cz17cmV2ZW51ZUVsZW1lbnRzfVxyXG4gICAgICAgICAgICAgICAgICBjb3N0c0VsZW1lbnRzPXtjb3N0c0VsZW1lbnRzfVxyXG4gICAgICAgICAgICAgICAgICB0YXg9e3RheH1cclxuICAgICAgICAgICAgICAgICAgdG90YWxSZXZlbnVlPXt0b3RhbFJldmVudWV9XHJcbiAgICAgICAgICAgICAgICAgIG1vbnRobHlSZXZlbnVlPXttb250aGx5UmV2ZW51ZX1cclxuICAgICAgICAgICAgICAgICAgdG90YWxDb3N0cz17dG90YWxDb3N0c31cclxuICAgICAgICAgICAgICAgICAgbW9udGhseUNvc3RzPXttb250aGx5Q29zdHN9XHJcbiAgICAgICAgICAgICAgICAgIGdyb3NzUHJvZml0PXtncm9zc1Byb2ZpdH1cclxuICAgICAgICAgICAgICAgICAgbmV0UHJvZml0PXtuZXRQcm9maXR9XHJcbiAgICAgICAgICAgICAgICAgIHN0YXJ0RGF0ZT17c3RhcnREYXRlfVxyXG4gICAgICAgICAgICAgICAgICBlbmREYXRlPXtlbmREYXRlfVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgIGNvbnN0IGFzUGRmID0gcGRmKFtdKTsgLy8ge30gaXMgaW1wb3J0YW50LCB0aHJvd3Mgd2l0aG91dCBhbiBhcmd1bWVudFxyXG4gICAgICAgICAgICAgIGFzUGRmLnVwZGF0ZUNvbnRhaW5lcihkb2MpO1xyXG4gICAgICAgICAgICAgIGNvbnN0IGJsb2IgPSBhd2FpdCBhc1BkZi50b0Jsb2IoKTtcclxuICAgICAgICAgICAgICBzYXZlQXMoYmxvYiwgYCR7Um91dGVyLnF1ZXJ5LnByb2plY3R9L2Nhc2gtZmxvdy5wZGZgKTtcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgc3JjPVwiL21vYmlsZS1uYXZiYXIvcGRmLnN2Z1wiXHJcbiAgICAgICAgICAgIGhlaWdodD17MzB9XHJcbiAgICAgICAgICAgIHdpZHRoPXszMH1cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICkgOiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWxhdGl2ZSB3LWZ1bGwgZmxleCBqdXN0aWZ5LWVuZCBpdGVtcy1jZW50ZXJcIj5cclxuICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgcmVmPXtkcm9wZG93bkJ1dHRvbn1cclxuICAgICAgICAgICAgb25DbGljaz17b25TYXZlRHJvcGRvd25TaG93fVxyXG4gICAgICAgICAgICBjbGFzc05hbWU9e2Bob3ZlcjpiZy1wcmltYXJ5IGhvdmVyOnRleHQtd2hpdGUgZGFyazpob3ZlcjpiZy1wcmltYXJ5ZGFyayBkYXJrOmhvdmVyOnRleHQtYmFja2dyb3VuZCBmb2N1czpvdXRsaW5lLW5vbmUgYm9yZGVyIGJvcmRlci1wcmltYXJ5IHRleHQtcHJpbWFyeSB0ZXh0LXNtIGZvbnQtbGlnaHQgcHktMiBweC04IHJvdW5kZWQtMnhsIG10LTIgZGFyazp0ZXh0LXByaW1hcnlkYXJrIGRhcms6Ym9yZGVyLXByaW1hcnlkYXJrICR7XHJcbiAgICAgICAgICAgICAgZHJvcGRvd25CdXR0b25Db2xvckhlbHBlciA/ICdiZy1wcmltYXJ5IHRleHQtYmFja2dyb3VuZCBkYXJrOmJnLXByaW1hcnlkYXJrIGRhcms6dGV4dC1iYWNrZ3JvdW5kJyA6ICcnXHJcbiAgICAgICAgICAgIH1gfVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICBTYXZlIG15IHdvcmtcclxuICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgPGRpdiByZWY9e2Ryb3Bkb3duQ29udGFpbmVyfSBjbGFzc05hbWU9XCJhYnNvbHV0ZSBiZy13aGl0ZSByb3VuZGVkLTJ4bCBzaGFkb3cteGwgcC02IHRvcC0xNCB6LTUwIGludmlzaWJsZSBvcGFjaXR5LTBcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LXN0YXJ0XCI+XHJcbiAgICAgICAgICAgICAgPGltZyBzcmM9XCIvbW9iaWxlLW5hdmJhci9zdWNjZXNzLnN2Z1wiIGhlaWdodD17MjZ9IHdpZHRoPXsyNn0gLz5cclxuICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LWxnIG1sLTJcIj5TaG93IHRoZSB3b3JsZCB5b3VyIHdvcmshPC9wPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJweC02IHB5LTQgYmctYmFja2dyb3VuZCByb3VuZGVkLTJ4bCBtdC0yIHByLTZcIj5cclxuICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZmxleFwiPlNhdmUgYXMgUERGOjwvcD5cclxuICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgb25DbGljaz17YXN5bmMgKGUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZG9jID0gPE15RG9jdW1lbnQgaW1hZ2VzVXJsPXtpbWFnZXNVcmx9IHNlY3Rpb25zPXtzZWN0aW9uc30gLz47XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgYXNQZGYgPSBwZGYoW10pO1xyXG4gICAgICAgICAgICAgICAgICAgIGFzUGRmLnVwZGF0ZUNvbnRhaW5lcihkb2MpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGJsb2IgPSBhd2FpdCBhc1BkZi50b0Jsb2IoKTtcclxuICAgICAgICAgICAgICAgICAgICBzYXZlQXMoYmxvYiwgYCR7Um91dGVyLnF1ZXJ5LnByb2plY3R9L2NvbXBldGl0b3JzLWFuYWx5c2lzLnBkZmApO1xyXG4gICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICBzcmM9XCIvbW9iaWxlLW5hdmJhci9wZGYuc3ZnXCJcclxuICAgICAgICAgICAgICAgICAgaGVpZ2h0PXszMH1cclxuICAgICAgICAgICAgICAgICAgd2lkdGg9ezMwfVxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJtdC0yIGN1cnNvci1wb2ludGVyXCJcclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGwganVzdGlmeS1zdGFydCBpdGVtcy1jZW50ZXIgbXQtNFwiPlxyXG4gICAgICAgICAgICAgICAgPHA+U2hhcmUgeW91ciBjb21wZXRpdG9ycyBhbmFseXNpcyB3aXRoIHRoaXMgcHVibGljIGxpbms6PC9wPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGwgZmxleCBtdC0yXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxpbnB1dCB2YWx1ZT1cInd3dy5wcm9qZWN0LmNvbVwiIGNsYXNzTmFtZT1cImJnLWxpbmtCYWNrZ3JvdW5kIHRleHQtc20gcHgtMiBweS0xIGRhcms6dGV4dC1wcmltYXJ5ZGFya1wiIC8+XHJcbiAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiL21vYmlsZS1uYXZiYXIvZm9yZWlnbi5zdmdcIiBoZWlnaHQ9ezI4fSB3aWR0aD17Mjh9IC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgKX1cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBSZWFjdFBERkRvY3VtZW50O1xyXG4iXSwic291cmNlUm9vdCI6IiJ9