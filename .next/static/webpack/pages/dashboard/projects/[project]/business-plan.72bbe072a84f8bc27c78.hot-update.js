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

                  console.log(res);

                  if (res.startsWith('<p>') && !res.includes('<strong>') && !res.includes('<em>') && !res.includes('<s>') && !res.includes('<u>')) {
                    console.log(res);

                    if (res.startsWith('<p class="ql-indent-1">')) {
                      console.log('yes!');
                      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_9__["Text"], {
                        style: {
                          fontSize: 12,
                          marginLeft: 8
                        },
                        children: res.replace(/(<([^>]+)>)/gi, '')
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 271,
                        columnNumber: 36
                      }, _this);
                    } else {
                      console.log('Second etap');
                    }
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
                        lineNumber: 285,
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
                          lineNumber: 296,
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
                            lineNumber: 307,
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
                              lineNumber: 320,
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
                                lineNumber: 331,
                                columnNumber: 29
                              }, _this);
                            } // <p>S + STRONG</p>
                            else if (res.startsWith('<p>') && res.includes('<s>') && !res.includes('<em>') && res.includes('<strong>') && !res.includes('<u>')) {
                                return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_9__["Text"], {
                                  style: {
                                    fontSize: 12,
                                    fontFamily: 'Montserrat-SemiBold',
                                    textDecoration: 'line-through'
                                  },
                                  children: res.replace(/(<([^>]+)>)/gi, '')
                                }, void 0, false, {
                                  fileName: _jsxFileName,
                                  lineNumber: 345,
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
                                    lineNumber: 359,
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
                                      lineNumber: 372,
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
                                        lineNumber: 383,
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
                                          lineNumber: 397,
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
                                            lineNumber: 411,
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
                                              lineNumber: 425,
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
                                                lineNumber: 439,
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
                                                  lineNumber: 455,
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
                                                    lineNumber: 469,
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
                      lineNumber: 483,
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
                        lineNumber: 494,
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
                          lineNumber: 505,
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
                            lineNumber: 516,
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
                              lineNumber: 529,
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
                                lineNumber: 540,
                                columnNumber: 29
                              }, _this);
                            } // <H2>S + STRONG</H2>
                            else if (res.startsWith('<h2>') && res.includes('<s>') && !res.includes('<em>') && res.includes('<strong>') && !res.includes('<u>')) {
                                return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_9__["Text"], {
                                  style: {
                                    fontSize: 12,
                                    fontFamily: 'Montserrat-SemiBold',
                                    textDecoration: 'line-through'
                                  },
                                  children: res.replace(/(<([^>]+)>)/gi, '')
                                }, void 0, false, {
                                  fileName: _jsxFileName,
                                  lineNumber: 554,
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
                                    lineNumber: 568,
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
                                      lineNumber: 581,
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
                                        lineNumber: 592,
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
                                          lineNumber: 606,
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
                                            lineNumber: 620,
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
                                              lineNumber: 634,
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
                                                lineNumber: 648,
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
                                                  lineNumber: 664,
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
                                                    lineNumber: 678,
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
                      lineNumber: 692,
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
                        lineNumber: 703,
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
                          lineNumber: 714,
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
                            lineNumber: 725,
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
                              lineNumber: 738,
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
                                lineNumber: 749,
                                columnNumber: 29
                              }, _this);
                            } // <h1>S + STRONG</h1>
                            else if (res.startsWith('<h1>') && res.includes('<s>') && !res.includes('<em>') && res.includes('<strong>') && !res.includes('<u>')) {
                                return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_9__["Text"], {
                                  style: {
                                    fontSize: 12,
                                    fontFamily: 'Montserrat-SemiBold',
                                    textDecoration: 'line-through'
                                  },
                                  children: res.replace(/(<([^>]+)>)/gi, '')
                                }, void 0, false, {
                                  fileName: _jsxFileName,
                                  lineNumber: 763,
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
                                    lineNumber: 777,
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
                                      lineNumber: 790,
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
                                        lineNumber: 801,
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
                                          lineNumber: 815,
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
                                            lineNumber: 829,
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
                                              lineNumber: 843,
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
                                                lineNumber: 857,
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
                                                  lineNumber: 873,
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
                                                    lineNumber: 887,
                                                    columnNumber: 29
                                                  }, _this);
                                                } // END --> <h1></h1>
                                                // -------------------- ORDERED LIST START --------------------
                                                else if (res.startsWith('<ol>')) {
                                                    var beforeFormatted = res.replace('<ol>', '');
                                                    var afterFormatted = beforeFormatted.replace('</ol>', '');
                                                    var response = afterFormatted.split(/<\/li>/g); // Determine where to put the >< back in (after >< remove).

                                                    for (var i = 0; i < response.length; i++) {
                                                      if (response[i].substring(0, 1) != '<') {
                                                        response[i] = '<' + response[i];
                                                      } // if (response[i].slice(-1) != '>') {
                                                      //   response[i] = response[i] + '>';
                                                      // }

                                                    }

                                                    console.log(response);
                                                    var k = 1;
                                                    return response.map(function (item) {
                                                      console.log(item);

                                                      if (item.startsWith('<li>') && !item.includes('<strong>') && !item.includes('<em>') && !item.includes('<s>') && !item.includes('<u>')) {
                                                        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_9__["View"], {
                                                          style: {
                                                            marginLeft: 8
                                                          },
                                                          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_9__["Text"], {
                                                            style: {
                                                              fontSize: 12
                                                            },
                                                            children: "".concat(k++, ". ").concat(item.replace(/(<([^>]+)>)/gi, ''))
                                                          }, void 0, false, {
                                                            fileName: _jsxFileName,
                                                            lineNumber: 922,
                                                            columnNumber: 35
                                                          }, _this)
                                                        }, void 0, false, {
                                                          fileName: _jsxFileName,
                                                          lineNumber: 921,
                                                          columnNumber: 33
                                                        }, _this);
                                                      } // <p>STRONG</p>
                                                      else if (item.startsWith('<li>') && item.includes('<strong>') && !item.includes('<em>') && !item.includes('<s>') && !item.includes('<u>')) {
                                                          return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_9__["View"], {
                                                            style: {
                                                              marginLeft: 8
                                                            },
                                                            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_9__["Text"], {
                                                              style: {
                                                                fontSize: 12,
                                                                fontFamily: 'Montserrat-SemiBold'
                                                              },
                                                              children: "".concat(k++, ". ").concat(item.replace(/(<([^>]+)>)/gi, ''))
                                                            }, void 0, false, {
                                                              fileName: _jsxFileName,
                                                              lineNumber: 936,
                                                              columnNumber: 35
                                                            }, _this)
                                                          }, void 0, false, {
                                                            fileName: _jsxFileName,
                                                            lineNumber: 935,
                                                            columnNumber: 33
                                                          }, _this);
                                                        } // <p>EM</p>
                                                        else if (item.startsWith('<li>') && !item.includes('<strong>') && item.includes('<em>') && !item.includes('<s>') && !item.includes('<u>')) {
                                                            return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_9__["View"], {
                                                              style: {
                                                                marginLeft: 8
                                                              },
                                                              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_9__["Text"], {
                                                                style: {
                                                                  fontSize: 12,
                                                                  fontFamily: 'Montserrat-Italic'
                                                                },
                                                                children: "".concat(k++, ". ").concat(item.replace(/(<([^>]+)>)/gi, ''))
                                                              }, void 0, false, {
                                                                fileName: _jsxFileName,
                                                                lineNumber: 953,
                                                                columnNumber: 35
                                                              }, _this)
                                                            }, void 0, false, {
                                                              fileName: _jsxFileName,
                                                              lineNumber: 952,
                                                              columnNumber: 33
                                                            }, _this);
                                                          } // <p>EM + STRONG</p>
                                                          else if (item.startsWith('<li>') && item.includes('<strong>') && item.includes('<em>') && !item.includes('<s>') && !item.includes('<u>')) {
                                                              return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_9__["View"], {
                                                                style: {
                                                                  marginLeft: 8
                                                                },
                                                                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_9__["Text"], {
                                                                  style: {
                                                                    fontSize: 12,
                                                                    fontFamily: 'Montserrat-SemiBoldItalic'
                                                                  },
                                                                  children: "".concat(k++, ". ").concat(item.replace(/(<([^>]+)>)/gi, ''))
                                                                }, void 0, false, {
                                                                  fileName: _jsxFileName,
                                                                  lineNumber: 970,
                                                                  columnNumber: 35
                                                                }, _this)
                                                              }, void 0, false, {
                                                                fileName: _jsxFileName,
                                                                lineNumber: 969,
                                                                columnNumber: 33
                                                              }, _this);
                                                            } // <p>S</p>
                                                            else if (item.startsWith('<li>') && item.includes('<s>') && !item.includes('<strong>') && !item.includes('<em>') && !item.includes('<u>')) {
                                                                return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_9__["View"], {
                                                                  style: {
                                                                    marginLeft: 8
                                                                  },
                                                                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_9__["Text"], {
                                                                    style: {
                                                                      fontSize: 12,
                                                                      textDecoration: 'line-through'
                                                                    },
                                                                    children: "".concat(k++, ". ").concat(item.replace(/(<([^>]+)>)/gi, ''))
                                                                  }, void 0, false, {
                                                                    fileName: _jsxFileName,
                                                                    lineNumber: 987,
                                                                    columnNumber: 35
                                                                  }, _this)
                                                                }, void 0, false, {
                                                                  fileName: _jsxFileName,
                                                                  lineNumber: 986,
                                                                  columnNumber: 33
                                                                }, _this);
                                                              } // <p>S + EM</p>
                                                              else if (item.startsWith('<li>') && item.includes('<s>') && item.includes('<em>') && !item.includes('<strong>') && !item.includes('<u>')) {
                                                                  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_9__["View"], {
                                                                    style: {
                                                                      marginLeft: 8
                                                                    },
                                                                    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_9__["Text"], {
                                                                      style: {
                                                                        fontSize: 12,
                                                                        fontFamily: 'Montserrat-Italic',
                                                                        textDecoration: 'line-through'
                                                                      },
                                                                      children: "".concat(k++, ". ").concat(item.replace(/(<([^>]+)>)/gi, ''))
                                                                    }, void 0, false, {
                                                                      fileName: _jsxFileName,
                                                                      lineNumber: 1004,
                                                                      columnNumber: 35
                                                                    }, _this)
                                                                  }, void 0, false, {
                                                                    fileName: _jsxFileName,
                                                                    lineNumber: 1003,
                                                                    columnNumber: 33
                                                                  }, _this);
                                                                } // <p>S + STRONG</p>
                                                                else if (item.startsWith('<li>') && item.includes('<s>') && !item.includes('<em>') && item.includes('<strong>') && !item.includes('<u>')) {
                                                                    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_9__["View"], {
                                                                      style: {
                                                                        marginLeft: 8
                                                                      },
                                                                      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_9__["Text"], {
                                                                        style: {
                                                                          fontSize: 12,
                                                                          fontFamily: 'Montserrat-SemiBold',
                                                                          textDecoration: 'line-through'
                                                                        },
                                                                        children: "".concat(k++, ". ").concat(item.replace(/(<([^>]+)>)/gi, ''))
                                                                      }, void 0, false, {
                                                                        fileName: _jsxFileName,
                                                                        lineNumber: 1020,
                                                                        columnNumber: 35
                                                                      }, _this)
                                                                    }, void 0, false, {
                                                                      fileName: _jsxFileName,
                                                                      lineNumber: 1019,
                                                                      columnNumber: 33
                                                                    }, _this);
                                                                  } // <p>S + EM + STRONG</p>
                                                                  else if (item.startsWith('<li>') && item.includes('<s>') && item.includes('<em>') && item.includes('<strong>') && !item.includes('<u>')) {
                                                                      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_9__["View"], {
                                                                        style: {
                                                                          marginLeft: 8
                                                                        },
                                                                        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_9__["Text"], {
                                                                          style: {
                                                                            fontSize: 12,
                                                                            fontFamily: 'Montserrat-SemiBoldItalic',
                                                                            textDecoration: 'line-through'
                                                                          },
                                                                          children: "".concat(k++, ". ").concat(item.replace(/(<([^>]+)>)/gi, ''))
                                                                        }, void 0, false, {
                                                                          fileName: _jsxFileName,
                                                                          lineNumber: 1036,
                                                                          columnNumber: 35
                                                                        }, _this)
                                                                      }, void 0, false, {
                                                                        fileName: _jsxFileName,
                                                                        lineNumber: 1035,
                                                                        columnNumber: 33
                                                                      }, _this);
                                                                    } // <p>U</p>
                                                                    else if (item.startsWith('<li>') && item.includes('<u>') && !item.includes('<s>') && !item.includes('<strong>') && !item.includes('<em>')) {
                                                                        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_9__["View"], {
                                                                          style: {
                                                                            marginLeft: 8
                                                                          },
                                                                          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_9__["Text"], {
                                                                            style: {
                                                                              fontSize: 12,
                                                                              textDecoration: 'underline'
                                                                            },
                                                                            children: "".concat(k++, ". ").concat(item.replace(/(<([^>]+)>)/gi, ''))
                                                                          }, void 0, false, {
                                                                            fileName: _jsxFileName,
                                                                            lineNumber: 1052,
                                                                            columnNumber: 35
                                                                          }, _this)
                                                                        }, void 0, false, {
                                                                          fileName: _jsxFileName,
                                                                          lineNumber: 1051,
                                                                          columnNumber: 33
                                                                        }, _this);
                                                                      } // <p>U + EM</p>
                                                                      else if (item.startsWith('<li>') && item.includes('<u>') && !item.includes('<s>') && !item.includes('<strong>') && item.includes('<em>')) {
                                                                          return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_9__["View"], {
                                                                            style: {
                                                                              marginLeft: 8
                                                                            },
                                                                            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_9__["Text"], {
                                                                              style: {
                                                                                fontSize: 12,
                                                                                fontFamily: 'Montserrat-Italic',
                                                                                textDecoration: 'underline'
                                                                              },
                                                                              children: "".concat(k++, ". ").concat(item.replace(/(<([^>]+)>)/gi, ''))
                                                                            }, void 0, false, {
                                                                              fileName: _jsxFileName,
                                                                              lineNumber: 1069,
                                                                              columnNumber: 35
                                                                            }, _this)
                                                                          }, void 0, false, {
                                                                            fileName: _jsxFileName,
                                                                            lineNumber: 1068,
                                                                            columnNumber: 33
                                                                          }, _this);
                                                                        } // <p>U + S</p>
                                                                        else if (item.startsWith('<li>') && item.includes('<u>') && item.includes('<s>') && !item.includes('<strong>') && !item.includes('<em>')) {
                                                                            return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_9__["View"], {
                                                                              style: {
                                                                                marginLeft: 8
                                                                              },
                                                                              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_9__["Text"], {
                                                                                style: {
                                                                                  fontSize: 12,
                                                                                  textDecoration: 'line-through underline'
                                                                                },
                                                                                children: "".concat(k++, ". ").concat(item.replace(/(<([^>]+)>)/gi, ''))
                                                                              }, void 0, false, {
                                                                                fileName: _jsxFileName,
                                                                                lineNumber: 1085,
                                                                                columnNumber: 35
                                                                              }, _this)
                                                                            }, void 0, false, {
                                                                              fileName: _jsxFileName,
                                                                              lineNumber: 1084,
                                                                              columnNumber: 33
                                                                            }, _this);
                                                                          } // <p>U + STRONG</p>
                                                                          else if (item.startsWith('<li>') && item.includes('<u>') && !item.includes('<s>') && item.includes('<strong>') && !item.includes('<em>')) {
                                                                              return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_9__["View"], {
                                                                                style: {
                                                                                  marginLeft: 8
                                                                                },
                                                                                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_9__["Text"], {
                                                                                  style: {
                                                                                    fontSize: 12,
                                                                                    fontFamily: 'Montserrat-SemiBold',
                                                                                    textDecoration: 'underline'
                                                                                  },
                                                                                  children: "".concat(k++, ". ").concat(item.replace(/(<([^>]+)>)/gi, ''))
                                                                                }, void 0, false, {
                                                                                  fileName: _jsxFileName,
                                                                                  lineNumber: 1102,
                                                                                  columnNumber: 35
                                                                                }, _this)
                                                                              }, void 0, false, {
                                                                                fileName: _jsxFileName,
                                                                                lineNumber: 1101,
                                                                                columnNumber: 33
                                                                              }, _this);
                                                                            } // <p>U + S + STRONG</p>
                                                                            else if (item.startsWith('<li>') && item.includes('<u>') && item.includes('<s>') && item.includes('<strong>') && !item.includes('<em>')) {
                                                                                return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_9__["View"], {
                                                                                  style: {
                                                                                    marginLeft: 8
                                                                                  },
                                                                                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_9__["Text"], {
                                                                                    style: {
                                                                                      fontSize: 12,
                                                                                      fontFamily: 'Montserrat-SemiBold',
                                                                                      textDecoration: 'line-through underline'
                                                                                    },
                                                                                    children: "".concat(k++, ". ").concat(item.replace(/(<([^>]+)>)/gi, ''))
                                                                                  }, void 0, false, {
                                                                                    fileName: _jsxFileName,
                                                                                    lineNumber: 1118,
                                                                                    columnNumber: 35
                                                                                  }, _this)
                                                                                }, void 0, false, {
                                                                                  fileName: _jsxFileName,
                                                                                  lineNumber: 1117,
                                                                                  columnNumber: 33
                                                                                }, _this);
                                                                              } // <p>U + S + STRONG + EM</p>
                                                                              else if (item.startsWith('<li>') && item.includes('<u>') && item.includes('<s>') && item.includes('<strong>') && item.includes('<em>')) {
                                                                                  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_9__["View"], {
                                                                                    style: {
                                                                                      marginLeft: 8
                                                                                    },
                                                                                    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_9__["Text"], {
                                                                                      style: {
                                                                                        fontSize: 12,
                                                                                        fontFamily: 'Montserrat-SemiBoldItalic',
                                                                                        textDecoration: 'line-through underline'
                                                                                      },
                                                                                      children: "".concat(k++, ". ").concat(item.replace(/(<([^>]+)>)/gi, ''))
                                                                                    }, void 0, false, {
                                                                                      fileName: _jsxFileName,
                                                                                      lineNumber: 1134,
                                                                                      columnNumber: 35
                                                                                    }, _this)
                                                                                  }, void 0, false, {
                                                                                    fileName: _jsxFileName,
                                                                                    lineNumber: 1133,
                                                                                    columnNumber: 33
                                                                                  }, _this);
                                                                                } // <p>U + S + EM</p>
                                                                                else if (item.startsWith('<li>') && item.includes('<u>') && item.includes('<s>') && !item.includes('<strong>') && item.includes('<em>')) {
                                                                                    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_9__["View"], {
                                                                                      style: {
                                                                                        marginLeft: 8
                                                                                      },
                                                                                      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_9__["Text"], {
                                                                                        style: {
                                                                                          fontSize: 12,
                                                                                          fontFamily: 'Montserrat-Italic',
                                                                                          textDecoration: 'line-through underline'
                                                                                        },
                                                                                        children: "".concat(k++, ". ").concat(item.replace(/(<([^>]+)>)/gi, ''))
                                                                                      }, void 0, false, {
                                                                                        fileName: _jsxFileName,
                                                                                        lineNumber: 1154,
                                                                                        columnNumber: 35
                                                                                      }, _this)
                                                                                    }, void 0, false, {
                                                                                      fileName: _jsxFileName,
                                                                                      lineNumber: 1153,
                                                                                      columnNumber: 33
                                                                                    }, _this);
                                                                                  } // <p>U + STRONG + EM</p>
                                                                                  else if (item.startsWith('<li>') && item.includes('<u>') && !item.includes('<s>') && item.includes('<strong>') && item.includes('<em>')) {
                                                                                      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_9__["View"], {
                                                                                        style: {
                                                                                          marginLeft: 8
                                                                                        },
                                                                                        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_9__["Text"], {
                                                                                          style: {
                                                                                            fontSize: 12,
                                                                                            fontFamily: 'Montserrat-SemiBoldItalic',
                                                                                            textDecoration: 'underline'
                                                                                          },
                                                                                          children: "".concat(k++, ". ").concat(item.replace(/(<([^>]+)>)/gi, ''))
                                                                                        }, void 0, false, {
                                                                                          fileName: _jsxFileName,
                                                                                          lineNumber: 1174,
                                                                                          columnNumber: 35
                                                                                        }, _this)
                                                                                      }, void 0, false, {
                                                                                        fileName: _jsxFileName,
                                                                                        lineNumber: 1173,
                                                                                        columnNumber: 33
                                                                                      }, _this);
                                                                                    }
                                                    });
                                                  } // -------------------- ORDERED LIST END --------------------
                                                  // -------------------- UNORDERED LIST START --------------------
                                                  else if (res.startsWith('<ul>')) {
                                                      var _beforeFormatted = res.replace('<ul>', '');

                                                      var _afterFormatted = _beforeFormatted.replace('</ul>', '');

                                                      var response = _afterFormatted.split(/<\/li>/g); // Determine where to put the >< back in (after >< remove).


                                                      for (var _i = 0; _i < response.length; _i++) {
                                                        if (response[_i].substring(0, 1) != '<') {
                                                          response[_i] = '<' + response[_i];
                                                        } // if (response[i].slice(-1) != '>') {
                                                        //   response[i] = response[i] + '>';
                                                        // }

                                                      }

                                                      console.log(response);
                                                      return response.map(function (item) {
                                                        console.log(item);

                                                        if (item.startsWith('<li>') && !item.includes('<strong>') && !item.includes('<em>') && !item.includes('<s>') && !item.includes('<u>')) {
                                                          return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_9__["View"], {
                                                            style: {
                                                              marginLeft: 8
                                                            },
                                                            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_9__["Text"], {
                                                              style: {
                                                                fontSize: 12
                                                              },
                                                              children: "- ".concat(item.replace(/(<([^>]+)>)/gi, ''))
                                                            }, void 0, false, {
                                                              fileName: _jsxFileName,
                                                              lineNumber: 1215,
                                                              columnNumber: 35
                                                            }, _this)
                                                          }, void 0, false, {
                                                            fileName: _jsxFileName,
                                                            lineNumber: 1214,
                                                            columnNumber: 33
                                                          }, _this);
                                                        } // <p>STRONG</p>
                                                        else if (item.startsWith('<li>') && item.includes('<strong>') && !item.includes('<em>') && !item.includes('<s>') && !item.includes('<u>')) {
                                                            return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_9__["View"], {
                                                              style: {
                                                                marginLeft: 8
                                                              },
                                                              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_9__["Text"], {
                                                                style: {
                                                                  fontSize: 12,
                                                                  fontFamily: 'Montserrat-SemiBold'
                                                                },
                                                                children: "- ".concat(item.replace(/(<([^>]+)>)/gi, ''))
                                                              }, void 0, false, {
                                                                fileName: _jsxFileName,
                                                                lineNumber: 1229,
                                                                columnNumber: 35
                                                              }, _this)
                                                            }, void 0, false, {
                                                              fileName: _jsxFileName,
                                                              lineNumber: 1228,
                                                              columnNumber: 33
                                                            }, _this);
                                                          } // <p>EM</p>
                                                          else if (item.startsWith('<li>') && !item.includes('<strong>') && item.includes('<em>') && !item.includes('<s>') && !item.includes('<u>')) {
                                                              return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_9__["View"], {
                                                                style: {
                                                                  marginLeft: 8
                                                                },
                                                                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_9__["Text"], {
                                                                  style: {
                                                                    fontSize: 12,
                                                                    fontFamily: 'Montserrat-Italic'
                                                                  },
                                                                  children: "- ".concat(item.replace(/(<([^>]+)>)/gi, ''))
                                                                }, void 0, false, {
                                                                  fileName: _jsxFileName,
                                                                  lineNumber: 1246,
                                                                  columnNumber: 35
                                                                }, _this)
                                                              }, void 0, false, {
                                                                fileName: _jsxFileName,
                                                                lineNumber: 1245,
                                                                columnNumber: 33
                                                              }, _this);
                                                            } // <p>EM + STRONG</p>
                                                            else if (item.startsWith('<li>') && item.includes('<strong>') && item.includes('<em>') && !item.includes('<s>') && !item.includes('<u>')) {
                                                                return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_9__["View"], {
                                                                  style: {
                                                                    marginLeft: 8
                                                                  },
                                                                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_9__["Text"], {
                                                                    style: {
                                                                      fontSize: 12,
                                                                      fontFamily: 'Montserrat-SemiBoldItalic'
                                                                    },
                                                                    children: "- ".concat(item.replace(/(<([^>]+)>)/gi, ''))
                                                                  }, void 0, false, {
                                                                    fileName: _jsxFileName,
                                                                    lineNumber: 1263,
                                                                    columnNumber: 35
                                                                  }, _this)
                                                                }, void 0, false, {
                                                                  fileName: _jsxFileName,
                                                                  lineNumber: 1262,
                                                                  columnNumber: 33
                                                                }, _this);
                                                              } // <p>S</p>
                                                              else if (item.startsWith('<li>') && item.includes('<s>') && !item.includes('<strong>') && !item.includes('<em>') && !item.includes('<u>')) {
                                                                  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_9__["View"], {
                                                                    style: {
                                                                      marginLeft: 8
                                                                    },
                                                                    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_9__["Text"], {
                                                                      style: {
                                                                        fontSize: 12,
                                                                        textDecoration: 'line-through'
                                                                      },
                                                                      children: "- ".concat(item.replace(/(<([^>]+)>)/gi, ''))
                                                                    }, void 0, false, {
                                                                      fileName: _jsxFileName,
                                                                      lineNumber: 1280,
                                                                      columnNumber: 35
                                                                    }, _this)
                                                                  }, void 0, false, {
                                                                    fileName: _jsxFileName,
                                                                    lineNumber: 1279,
                                                                    columnNumber: 33
                                                                  }, _this);
                                                                } // <p>S + EM</p>
                                                                else if (item.startsWith('<li>') && item.includes('<s>') && item.includes('<em>') && !item.includes('<strong>') && !item.includes('<u>')) {
                                                                    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_9__["View"], {
                                                                      style: {
                                                                        marginLeft: 8
                                                                      },
                                                                      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_9__["Text"], {
                                                                        style: {
                                                                          fontSize: 12,
                                                                          fontFamily: 'Montserrat-Italic',
                                                                          textDecoration: 'line-through'
                                                                        },
                                                                        children: "- ".concat(item.replace(/(<([^>]+)>)/gi, ''))
                                                                      }, void 0, false, {
                                                                        fileName: _jsxFileName,
                                                                        lineNumber: 1297,
                                                                        columnNumber: 35
                                                                      }, _this)
                                                                    }, void 0, false, {
                                                                      fileName: _jsxFileName,
                                                                      lineNumber: 1296,
                                                                      columnNumber: 33
                                                                    }, _this);
                                                                  } // <p>S + STRONG</p>
                                                                  else if (item.startsWith('<li>') && item.includes('<s>') && !item.includes('<em>') && item.includes('<strong>') && !item.includes('<u>')) {
                                                                      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_9__["View"], {
                                                                        style: {
                                                                          marginLeft: 8
                                                                        },
                                                                        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_9__["Text"], {
                                                                          style: {
                                                                            fontSize: 12,
                                                                            fontFamily: 'Montserrat-SemiBold',
                                                                            textDecoration: 'line-through'
                                                                          },
                                                                          children: "- ".concat(item.replace(/(<([^>]+)>)/gi, ''))
                                                                        }, void 0, false, {
                                                                          fileName: _jsxFileName,
                                                                          lineNumber: 1313,
                                                                          columnNumber: 35
                                                                        }, _this)
                                                                      }, void 0, false, {
                                                                        fileName: _jsxFileName,
                                                                        lineNumber: 1312,
                                                                        columnNumber: 33
                                                                      }, _this);
                                                                    } // <p>S + EM + STRONG</p>
                                                                    else if (item.startsWith('<li>') && item.includes('<s>') && item.includes('<em>') && item.includes('<strong>') && !item.includes('<u>')) {
                                                                        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_9__["View"], {
                                                                          style: {
                                                                            marginLeft: 8
                                                                          },
                                                                          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_9__["Text"], {
                                                                            style: {
                                                                              fontSize: 12,
                                                                              fontFamily: 'Montserrat-SemiBoldItalic',
                                                                              textDecoration: 'line-through'
                                                                            },
                                                                            children: "- ".concat(item.replace(/(<([^>]+)>)/gi, ''))
                                                                          }, void 0, false, {
                                                                            fileName: _jsxFileName,
                                                                            lineNumber: 1329,
                                                                            columnNumber: 35
                                                                          }, _this)
                                                                        }, void 0, false, {
                                                                          fileName: _jsxFileName,
                                                                          lineNumber: 1328,
                                                                          columnNumber: 33
                                                                        }, _this);
                                                                      } // <p>U</p>
                                                                      else if (item.startsWith('<li>') && item.includes('<u>') && !item.includes('<s>') && !item.includes('<strong>') && !item.includes('<em>')) {
                                                                          return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_9__["View"], {
                                                                            style: {
                                                                              marginLeft: 8
                                                                            },
                                                                            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_9__["Text"], {
                                                                              style: {
                                                                                fontSize: 12,
                                                                                textDecoration: 'underline'
                                                                              },
                                                                              children: "- ".concat(item.replace(/(<([^>]+)>)/gi, ''))
                                                                            }, void 0, false, {
                                                                              fileName: _jsxFileName,
                                                                              lineNumber: 1345,
                                                                              columnNumber: 35
                                                                            }, _this)
                                                                          }, void 0, false, {
                                                                            fileName: _jsxFileName,
                                                                            lineNumber: 1344,
                                                                            columnNumber: 33
                                                                          }, _this);
                                                                        } // <p>U + EM</p>
                                                                        else if (item.startsWith('<li>') && item.includes('<u>') && !item.includes('<s>') && !item.includes('<strong>') && item.includes('<em>')) {
                                                                            return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_9__["View"], {
                                                                              style: {
                                                                                marginLeft: 8
                                                                              },
                                                                              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_9__["Text"], {
                                                                                style: {
                                                                                  fontSize: 12,
                                                                                  fontFamily: 'Montserrat-Italic',
                                                                                  textDecoration: 'underline'
                                                                                },
                                                                                children: "- ".concat(item.replace(/(<([^>]+)>)/gi, ''))
                                                                              }, void 0, false, {
                                                                                fileName: _jsxFileName,
                                                                                lineNumber: 1362,
                                                                                columnNumber: 35
                                                                              }, _this)
                                                                            }, void 0, false, {
                                                                              fileName: _jsxFileName,
                                                                              lineNumber: 1361,
                                                                              columnNumber: 33
                                                                            }, _this);
                                                                          } // <p>U + S</p>
                                                                          else if (item.startsWith('<li>') && item.includes('<u>') && item.includes('<s>') && !item.includes('<strong>') && !item.includes('<em>')) {
                                                                              return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_9__["View"], {
                                                                                style: {
                                                                                  marginLeft: 8
                                                                                },
                                                                                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_9__["Text"], {
                                                                                  style: {
                                                                                    fontSize: 12,
                                                                                    textDecoration: 'line-through underline'
                                                                                  },
                                                                                  children: "- ".concat(item.replace(/(<([^>]+)>)/gi, ''))
                                                                                }, void 0, false, {
                                                                                  fileName: _jsxFileName,
                                                                                  lineNumber: 1378,
                                                                                  columnNumber: 35
                                                                                }, _this)
                                                                              }, void 0, false, {
                                                                                fileName: _jsxFileName,
                                                                                lineNumber: 1377,
                                                                                columnNumber: 33
                                                                              }, _this);
                                                                            } // <p>U + STRONG</p>
                                                                            else if (item.startsWith('<li>') && item.includes('<u>') && !item.includes('<s>') && item.includes('<strong>') && !item.includes('<em>')) {
                                                                                return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_9__["View"], {
                                                                                  style: {
                                                                                    marginLeft: 8
                                                                                  },
                                                                                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_9__["Text"], {
                                                                                    style: {
                                                                                      fontSize: 12,
                                                                                      fontFamily: 'Montserrat-SemiBold',
                                                                                      textDecoration: 'underline'
                                                                                    },
                                                                                    children: "- ".concat(item.replace(/(<([^>]+)>)/gi, ''))
                                                                                  }, void 0, false, {
                                                                                    fileName: _jsxFileName,
                                                                                    lineNumber: 1395,
                                                                                    columnNumber: 35
                                                                                  }, _this)
                                                                                }, void 0, false, {
                                                                                  fileName: _jsxFileName,
                                                                                  lineNumber: 1394,
                                                                                  columnNumber: 33
                                                                                }, _this);
                                                                              } // <p>U + S + STRONG</p>
                                                                              else if (item.startsWith('<li>') && item.includes('<u>') && item.includes('<s>') && item.includes('<strong>') && !item.includes('<em>')) {
                                                                                  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_9__["View"], {
                                                                                    style: {
                                                                                      marginLeft: 8
                                                                                    },
                                                                                    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_9__["Text"], {
                                                                                      style: {
                                                                                        fontSize: 12,
                                                                                        fontFamily: 'Montserrat-SemiBold',
                                                                                        textDecoration: 'line-through underline'
                                                                                      },
                                                                                      children: "- ".concat(item.replace(/(<([^>]+)>)/gi, ''))
                                                                                    }, void 0, false, {
                                                                                      fileName: _jsxFileName,
                                                                                      lineNumber: 1411,
                                                                                      columnNumber: 35
                                                                                    }, _this)
                                                                                  }, void 0, false, {
                                                                                    fileName: _jsxFileName,
                                                                                    lineNumber: 1410,
                                                                                    columnNumber: 33
                                                                                  }, _this);
                                                                                } // <p>U + S + STRONG + EM</p>
                                                                                else if (item.startsWith('<li>') && item.includes('<u>') && item.includes('<s>') && item.includes('<strong>') && item.includes('<em>')) {
                                                                                    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_9__["View"], {
                                                                                      style: {
                                                                                        marginLeft: 8
                                                                                      },
                                                                                      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_9__["Text"], {
                                                                                        style: {
                                                                                          fontSize: 12,
                                                                                          fontFamily: 'Montserrat-SemiBoldItalic',
                                                                                          textDecoration: 'line-through underline'
                                                                                        },
                                                                                        children: "- ".concat(item.replace(/(<([^>]+)>)/gi, ''))
                                                                                      }, void 0, false, {
                                                                                        fileName: _jsxFileName,
                                                                                        lineNumber: 1427,
                                                                                        columnNumber: 35
                                                                                      }, _this)
                                                                                    }, void 0, false, {
                                                                                      fileName: _jsxFileName,
                                                                                      lineNumber: 1426,
                                                                                      columnNumber: 33
                                                                                    }, _this);
                                                                                  } // <p>U + S + EM</p>
                                                                                  else if (item.startsWith('<li>') && item.includes('<u>') && item.includes('<s>') && !item.includes('<strong>') && item.includes('<em>')) {
                                                                                      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_9__["View"], {
                                                                                        style: {
                                                                                          marginLeft: 8
                                                                                        },
                                                                                        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_9__["Text"], {
                                                                                          style: {
                                                                                            fontSize: 12,
                                                                                            fontFamily: 'Montserrat-Italic',
                                                                                            textDecoration: 'line-through underline'
                                                                                          },
                                                                                          children: "- ".concat(item.replace(/(<([^>]+)>)/gi, ''))
                                                                                        }, void 0, false, {
                                                                                          fileName: _jsxFileName,
                                                                                          lineNumber: 1447,
                                                                                          columnNumber: 35
                                                                                        }, _this)
                                                                                      }, void 0, false, {
                                                                                        fileName: _jsxFileName,
                                                                                        lineNumber: 1446,
                                                                                        columnNumber: 33
                                                                                      }, _this);
                                                                                    } // <p>U + STRONG + EM</p>
                                                                                    else if (item.startsWith('<li>') && item.includes('<u>') && !item.includes('<s>') && item.includes('<strong>') && item.includes('<em>')) {
                                                                                        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_9__["View"], {
                                                                                          style: {
                                                                                            marginLeft: 8
                                                                                          },
                                                                                          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_9__["Text"], {
                                                                                            style: {
                                                                                              fontSize: 12,
                                                                                              fontFamily: 'Montserrat-SemiBoldItalic',
                                                                                              textDecoration: 'underline'
                                                                                            },
                                                                                            children: "- ".concat(item.replace(/(<([^>]+)>)/gi, ''))
                                                                                          }, void 0, false, {
                                                                                            fileName: _jsxFileName,
                                                                                            lineNumber: 1467,
                                                                                            columnNumber: 35
                                                                                          }, _this)
                                                                                        }, void 0, false, {
                                                                                          fileName: _jsxFileName,
                                                                                          lineNumber: 1466,
                                                                                          columnNumber: 33
                                                                                        }, _this);
                                                                                      }
                                                      });
                                                    } // -------------------- UNORDERED LIST END --------------------

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
                      lineNumber: 1965,
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
        lineNumber: 1961,
        columnNumber: 11
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 1960,
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
        lineNumber: 1994,
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
            lineNumber: 2005,
            columnNumber: 15
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("p", {
            className: "text-lg ml-2",
            children: "Show the world your work!"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 2006,
            columnNumber: 15
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 2004,
          columnNumber: 13
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("div", {
          className: "px-6 py-4 bg-background rounded-2xl mt-2 pr-6",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("div", {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("p", {
              className: "flex",
              children: "Save as PDF:"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 2010,
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
                            lineNumber: 2014,
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
              lineNumber: 2011,
              columnNumber: 17
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 2009,
            columnNumber: 15
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("div", {
            className: "w-full justify-start items-center mt-4",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("p", {
              children: "Share your competitors analysis with this public link:"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 2027,
              columnNumber: 17
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("div", {
              className: "w-full flex mt-2",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("input", {
                value: "www.project.com",
                className: "bg-linkBackground text-sm px-2 py-1 dark:text-primarydark"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 2029,
                columnNumber: 19
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("img", {
                src: "/mobile-navbar/foreign.svg",
                height: 28,
                width: 28
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 2030,
                columnNumber: 19
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 2028,
              columnNumber: 17
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 2026,
            columnNumber: 15
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 2008,
          columnNumber: 13
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 2003,
        columnNumber: 11
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 1993,
      columnNumber: 9
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 1958,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9kYXNoYm9hcmQvc3RhcnR1cC9wcm9qZWN0L2J1c2luZXNzLWFwcC9SZWFjdFBERkRvY3VtZW50LmpzIl0sIm5hbWVzIjpbIkZvbnQiLCJyZWdpc3RlciIsInNyYyIsImZhbWlseSIsInN0eWxlcyIsIlN0eWxlU2hlZXQiLCJjcmVhdGUiLCJob21lUGFnZSIsInBhZGRpbmciLCJmb250RmFtaWx5IiwiYmFja2dyb3VuZENvbG9yIiwiY29sb3IiLCJtYWluVGl0bGUiLCJmb250U2l6ZSIsInRleHRBbGlnbiIsInRhYmxlIiwiZGlzcGxheSIsIndpZHRoIiwibWFyZ2luVG9wIiwidGFibGVIZWFkUm93IiwiZmxleERpcmVjdGlvbiIsImJvcmRlclRvcExlZnRSYWRpdXMiLCJib3JkZXJUb3BSaWdodFJhZGl1cyIsInRhYmxlUm93IiwidGFibGVDb2wiLCJ0YWJsZUhlYWRDZWxsIiwidGFibGVDZWxsIiwiYm9yZGVyTGVmdCIsInBhZGRpbmdMZWZ0IiwiTXlEb2N1bWVudCIsImltYWdlc1VybCIsInNlY3Rpb25zIiwiY29uc29sZSIsImxvZyIsIm1hcCIsInNlY3Rpb24iLCJtYXJnaW5Cb3R0b20iLCJ0aXRsZSIsImZpZWxkcyIsImZpZWxkIiwidHlwZSIsImhlYWRSb3dzIiwiaGVhZFJvdyIsImhlYWRSb3dzUXVhbnRpdHkiLCJsZW5ndGgiLCJyb3dzIiwicm93Iiwicm93TmFtZSIsIkJvZHlSb3dzUXVhbnRpdHkiLCJkb2MiLCJpbWFnZUluZGV4IiwiaW5kZXgiLCJpbWFnZVVybCIsImZvcm1hdHRlZFRleHQiLCIkIiwiYm9keSIsImFwcGVuZCIsImh0bWwiLCJyZXMiLCJ0b1N0cmluZyIsImluY2x1ZGVzIiwic3RhcnRzV2l0aCIsIm1hcmdpbkxlZnQiLCJyZXBsYWNlIiwidGV4dERlY29yYXRpb24iLCJiZWZvcmVGb3JtYXR0ZWQiLCJhZnRlckZvcm1hdHRlZCIsInJlc3BvbnNlIiwic3BsaXQiLCJpIiwic3Vic3RyaW5nIiwiayIsIml0ZW0iLCJSZWFjdFBERkRvY3VtZW50Iiwic2l6ZSIsInVzZVdpbmRvd1NpemUiLCJzYXZlQ29udGFpbmVyIiwidXNlUmVmIiwiZHJvcGRvd25CdXR0b24iLCJkcm9wZG93bkNvbnRhaW5lciIsInVzZVN0YXRlIiwiZHJvcGRvd25CdXR0b25Db2xvckhlbHBlciIsInNldERyb3Bkb3duQnV0dG9uQ29sb3JIZWxwZXIiLCJkcm9wZG93bkNvbnRhaW5lckhlbHBlciIsInNldERyb3Bkb3duQ29udGFpbmVySGVscGVyIiwib25TYXZlRHJvcGRvd25TaG93IiwiZ3NhcCIsInRvIiwiY3VycmVudCIsImF1dG9BbHBoYSIsImR1cmF0aW9uIiwiZWFzZSIsIkxpbmVhciIsInNldEltYWdlc1VybCIsInVzZUVmZmVjdCIsImltYWdlc0FycmF5IiwiY29sb3JzIiwiY2hhcnRUeXBlIiwiY29sb3JzMSIsImNvbG9yczIiLCJjb2xvcnMzIiwiY29sb3JzNCIsImNvbG9yczUiLCJkYXRhIiwibGFiZWxzIiwibGFiZWwiLCJkYXRhc2V0cyIsImRhdGFzZXQxTGFiZWwiLCJkYXRhc2V0MSIsImJvcmRlcldpZHRoIiwiZGF0YXNldDJMYWJlbCIsImRhdGFzZXQyIiwiZGF0YXNldDNMYWJlbCIsImRhdGFzZXQzIiwiZGF0YXNldDRMYWJlbCIsImRhdGFzZXQ0IiwiZGF0YXNldDVMYWJlbCIsImRhdGFzZXQ1IiwiZGF0YXNldDZMYWJlbCIsImRhdGFzZXQ2IiwiZGF0YXMiLCJkYXRhc2V0IiwidGVzdDEiLCJkYXRhc2VzIiwidW5kZWZpbmVkIiwidGVzdCIsImRhdGFyZXIiLCJ0ZXN0MiIsImZpbHRlciIsIm9iaiIsImZpbGwiLCJuZXdEYXRhc2V0cyIsImJvcmRlckNvbG9yIiwidG9TYXZlQ2hhcnQiLCJDaGFydEpzSW1hZ2UiLCJzZXRDb25maWciLCJvcHRpb25zIiwicmVzcG9uc2l2ZSIsImxlZ2VuZCIsInBvc2l0aW9uIiwiYm94V2lkdGgiLCJib3hIZWlnaHQiLCJzY2FsZXMiLCJ5QXhlcyIsInN0YWNrZWQiLCJ0aWNrcyIsImJlZ2luQXRaZXJvIiwieEF4ZXMiLCJzZXRGb3JtYXQiLCJzZXREZXZpY2VQaXhlbFJhdGlvIiwic2V0QmFja2dyb3VuZENvbG9yIiwidG9EYXRhVXJsIiwidGhlbiIsImltYWdlIiwicHVzaCIsImUiLCJwcmV2ZW50RGVmYXVsdCIsInBlcmlvZHMiLCJyZXZlbnVlRWxlbWVudHMiLCJjb3N0c0VsZW1lbnRzIiwidGF4IiwidG90YWxSZXZlbnVlIiwibW9udGhseVJldmVudWUiLCJ0b3RhbENvc3RzIiwibW9udGhseUNvc3RzIiwiZ3Jvc3NQcm9maXQiLCJuZXRQcm9maXQiLCJzdGFydERhdGUiLCJlbmREYXRlIiwiYXNQZGYiLCJwZGYiLCJ1cGRhdGVDb250YWluZXIiLCJ0b0Jsb2IiLCJibG9iIiwic2F2ZUFzIiwiUm91dGVyIiwicXVlcnkiLCJwcm9qZWN0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBQSx3REFBSSxDQUFDQyxRQUFMLENBQWM7QUFBRUMsS0FBRyxFQUFFLG9CQUFQO0FBQTZCQyxRQUFNLEVBQUU7QUFBckMsQ0FBZDtBQUNBSCx3REFBSSxDQUFDQyxRQUFMLENBQWM7QUFBRUMsS0FBRyxFQUFFLHNCQUFQO0FBQStCQyxRQUFNLEVBQUU7QUFBdkMsQ0FBZDtBQUNBSCx3REFBSSxDQUFDQyxRQUFMLENBQWM7QUFBRUMsS0FBRyxFQUFFLDJCQUFQO0FBQW9DQyxRQUFNLEVBQUU7QUFBNUMsQ0FBZDtBQUNBSCx3REFBSSxDQUFDQyxRQUFMLENBQWM7QUFBRUMsS0FBRyxFQUFFLCtCQUFQO0FBQXdDQyxRQUFNLEVBQUU7QUFBaEQsQ0FBZDtBQUNBSCx3REFBSSxDQUFDQyxRQUFMLENBQWM7QUFBRUMsS0FBRyxFQUFFLGdDQUFQO0FBQXlDQyxRQUFNLEVBQUU7QUFBakQsQ0FBZDtBQUNBSCx3REFB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QUE7QUFBQTtBQUFBO0FBQUEscUJBREYsZUFFRTtBQUFLLHVCQUFTLEVBQUMsa0JBQWY7QUFBQSxzQ0FDRTtBQUFPLHFCQUFLLEVBQUMsaUJBQWI7QUFBK0IseUJBQVMsRUFBQztBQUF6QztBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQURGLGVBRUU7QUFBSyxtQkFBRyxFQUFDLDRCQUFUO0FBQXNDLHNCQUFNLEVBQUUsRUFBOUM7QUFBa0QscUJBQUssRUFBRTtBQUF6RDtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBbEJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFMRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFWRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFuQ0o7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBa0ZELENBbmlCRDs7R0FBTXhHLGdCO1VBQ1NFLG1FOzs7TUFEVEYsZ0I7QUFxaUJTQSwrRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9kYXNoYm9hcmQvcHJvamVjdHMvW3Byb2plY3RdL2J1c2luZXNzLXBsYW4uNzJiYmUwNzJhODRmOGJjMjdjNzguaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0LCB1c2VSZWYgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IHNhdmVBcyB9IGZyb20gJ2ZpbGUtc2F2ZXInO1xyXG5pbXBvcnQgQ2hhcnRKc0ltYWdlIGZyb20gJ2NoYXJ0anMtdG8taW1hZ2UnO1xyXG5pbXBvcnQgeyBmb3JtYXQgfSBmcm9tICdkYXRlLWZucyc7XHJcbmltcG9ydCBnc2FwLCB7IExpbmVhciB9IGZyb20gJ2dzYXAnO1xyXG5pbXBvcnQgeyBGb250LCBwZGYsIFBhZ2UsIFRleHQsIFZpZXcsIEltYWdlLCBEb2N1bWVudCwgU3R5bGVTaGVldCwgUERGVmlld2VyLCBQREZEb3dubG9hZExpbmsgfSBmcm9tICdAcmVhY3QtcGRmL3JlbmRlcmVyJztcclxuaW1wb3J0IFJvdXRlciBmcm9tICduZXh0L3JvdXRlcic7XHJcbmltcG9ydCBzcGxpdEh0bWwgZnJvbSAnc3BsaXQtaHRtbCc7XHJcbmltcG9ydCAkIGZyb20gJ2pxdWVyeSc7XHJcbmltcG9ydCB7IHVzZVdpbmRvd1NpemUgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi91dGlscy91c2VXaW5kb3dTaXplJztcclxuXHJcbkZvbnQucmVnaXN0ZXIoeyBzcmM6ICcvZm9udHMvcG9wcGlucy50dGYnLCBmYW1pbHk6ICdQb3BwaW5zJyB9KTtcclxuRm9udC5yZWdpc3Rlcih7IHNyYzogJy9mb250cy9jb21mb3J0YWEudHRmJywgZmFtaWx5OiAnQ29tZm9ydGFhJyB9KTtcclxuRm9udC5yZWdpc3Rlcih7IHNyYzogJy9mb250cy9jb21mb3J0YWEtQm9sZC50dGYnLCBmYW1pbHk6ICdDb21mb3J0YWEtQm9sZCcgfSk7XHJcbkZvbnQucmVnaXN0ZXIoeyBzcmM6ICcvZm9udHMvTW9udHNlcnJhdC1SZWd1bGFyLnR0ZicsIGZhbWlseTogJ01vbnRzZXJyYXQtUmVndWxhcicgfSk7XHJcbkZvbnQucmVnaXN0ZXIoeyBzcmM6ICcvZm9udHMvTW9udHNlcnJhdC1TZW1pQm9sZC50dGYnLCBmYW1pbHk6ICdNb250c2VycmF0LVNlbWlCb2xkJyB9KTtcclxuRm9udC5yZWdpc3Rlcih7IHNyYzogJy9mb250cy9Nb250c2VycmF0LVNlbWlCb2xkSXRhbGljLnR0ZicsIGZhbWlseTogJ01vbnRzZXJyYXQtU2VtaUJvbGRJdGFsaWMnIH0pO1xyXG5Gb250LnJlZ2lzdGVyKHsgc3JjOiAnL2ZvbnRzL01vbnRzZXJyYXQtSXRhbGljLnR0ZicsIGZhbWlseTogJ01vbnRzZXJyYXQtSXRhbGljJyB9KTtcclxuXHJcbmNvbnN0IHN0eWxlcyA9IFN0eWxlU2hlZXQuY3JlYXRlKHtcclxuICBob21lUGFnZToge1xyXG4gICAgcGFkZGluZzogMzYsXHJcbiAgICAvLyBmb250RmFtaWx5OiAnQ29tZm9ydGFhJyxcclxuICAgIGZvbnRGYW1pbHk6ICdNb250c2VycmF0LVJlZ3VsYXInLFxyXG4gICAgYmFja2dyb3VuZENvbG9yOiAnI2Y4ZjlmYicsXHJcbiAgICBjb2xvcjogJyMwYTEyMzAnLFxyXG4gIH0sXHJcbiAgbWFpblRpdGxlOiB7XHJcbiAgICBmb250U2l6ZTogMjIsXHJcbiAgICBjb2xvcjogJyMwYTEyMzAnLFxyXG4gICAgdGV4dEFsaWduOiAnY2VudGVyJyxcclxuICB9LFxyXG4gIHRhYmxlOiB7IGRpc3BsYXk6ICd0YWJsZScsIHdpZHRoOiAnMTAwJScsIG1hcmdpblRvcDogMTYgfSxcclxuICB0YWJsZUhlYWRSb3c6IHsgZmxleERpcmVjdGlvbjogJ3JvdycsIGJhY2tncm91bmRDb2xvcjogJyM2QzYzRkYnLCBjb2xvcjogJyNmOGY5ZmInLCBib3JkZXJUb3BMZWZ0UmFkaXVzOiA4LCBib3JkZXJUb3BSaWdodFJhZGl1czogOCB9LFxyXG4gIHRhYmxlUm93OiB7IGZsZXhEaXJlY3Rpb246ICdyb3cnIH0sXHJcbiAgdGFibGVDb2w6IHsgcGFkZGluZzogOCB9LFxyXG4gIHRhYmxlSGVhZENlbGw6IHsgbWFyZ2luVG9wOiA1LCBmb250U2l6ZTogMTAgfSxcclxuICB0YWJsZUNlbGw6IHsgbWFyZ2luVG9wOiA1LCBmb250U2l6ZTogOSwgYm9yZGVyTGVmdDogJzFweCBzb2xpZCAjMGExMjMwJywgcGFkZGluZ0xlZnQ6IDQgfSxcclxufSk7XHJcblxyXG5jb25zdCBNeURvY3VtZW50ID0gKHsgaW1hZ2VzVXJsLCBzZWN0aW9ucyB9KSA9PiB7XHJcbiAgY29uc29sZS5sb2coJ1BERiBTZWN0aW9ucyAtLT4gJywgc2VjdGlvbnMpO1xyXG4gIGNvbnNvbGUubG9nKCdQREYgSW1hZ2VzVXJsIC0tPiAnLCBpbWFnZXNVcmwpO1xyXG4gIHJldHVybiAoXHJcbiAgICA8RG9jdW1lbnQgc2NhbGU9ezk2IC8gNzJ9IHJlbmRlck1vZGU9XCJzdmdcIj5cclxuICAgICAgPFBhZ2Ugc2l6ZT1cIkE0XCIgc3R5bGU9e3N0eWxlcy5ob21lUGFnZX0+XHJcbiAgICAgICAgPFZpZXc+XHJcbiAgICAgICAgICA8VGV4dCBzdHlsZT17c3R5bGVzLm1haW5UaXRsZX0+QnVzaW5lc3MgcGxhbjwvVGV4dD5cclxuICAgICAgICA8L1ZpZXc+XHJcbiAgICAgIDwvUGFnZT5cclxuICAgICAge3NlY3Rpb25zLm1hcCgoc2VjdGlvbikgPT4ge1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICA8UGFnZSBzaXplPVwiQTRcIiBzdHlsZT17c3R5bGVzLmhvbWVQYWdlfT5cclxuICAgICAgICAgICAgPFZpZXcgc3R5bGU9e3sgbWFyZ2luQm90dG9tOiA4IH19PlxyXG4gICAgICAgICAgICAgIDxUZXh0IHN0eWxlPXt7IGZvbnRTaXplOiAxOCB9fT57c2VjdGlvbi50aXRsZX08L1RleHQ+XHJcbiAgICAgICAgICAgIDwvVmlldz5cclxuICAgICAgICAgICAge3NlY3Rpb24uZmllbGRzLm1hcCgoZmllbGQpID0+IHtcclxuICAgICAgICAgICAgICBjb25zb2xlLmxvZyhmaWVsZCk7XHJcbiAgICAgICAgICAgICAgc3dpdGNoIChmaWVsZC50eXBlKSB7XHJcbiAgICAgICAgICAgICAgICBjYXNlICd0YWJsZSc6XHJcbiAgICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgZmllbGQudHlwZSA9PSAndGFibGUnICYmIChcclxuICAgICAgICAgICAgICAgICAgICAgIDxWaWV3IHN0eWxlPXtzdHlsZXMudGFibGV9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7LyogVGFibGVIZWFkZXIgKi99XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxWaWV3IHN0eWxlPXtzdHlsZXMudGFibGVIZWFkUm93fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICB7ZmllbGQuaGVhZFJvd3MubWFwKChoZWFkUm93KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBoZWFkUm93c1F1YW50aXR5ID0gZmllbGQuaGVhZFJvd3MubGVuZ3RoO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3dpdGNoIChoZWFkUm93c1F1YW50aXR5KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgMTpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFZpZXcgc3R5bGU9e3sgd2lkdGg6ICcxMDAlJywgcGFkZGluZzogOCB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRleHQgc3R5bGU9e3N0eWxlcy50YWJsZUhlYWRDZWxsfT57aGVhZFJvd308L1RleHQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1ZpZXc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAyOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VmlldyBzdHlsZT17eyB3aWR0aDogJzUwJScsIHBhZGRpbmc6IDggfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0IHN0eWxlPXtzdHlsZXMudGFibGVIZWFkQ2VsbH0+e2hlYWRSb3d9PC9UZXh0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9WaWV3PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgMzpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFZpZXcgc3R5bGU9e3sgd2lkdGg6ICczMy4zMyUnLCBwYWRkaW5nOiA4IH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGV4dCBzdHlsZT17c3R5bGVzLnRhYmxlSGVhZENlbGx9PntoZWFkUm93fTwvVGV4dD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVmlldz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDQ6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxWaWV3IHN0eWxlPXt7IHdpZHRoOiAnMjUlJywgcGFkZGluZzogOCB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRleHQgc3R5bGU9e3N0eWxlcy50YWJsZUhlYWRDZWxsfT57aGVhZFJvd308L1RleHQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1ZpZXc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSA1OlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VmlldyBzdHlsZT17eyB3aWR0aDogJzIwJScsIHBhZGRpbmc6IDggfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0IHN0eWxlPXtzdHlsZXMudGFibGVIZWFkQ2VsbH0+e2hlYWRSb3d9PC9UZXh0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9WaWV3PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgNjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFZpZXcgc3R5bGU9e3sgd2lkdGg6ICcxNi42NiUnLCBwYWRkaW5nOiA4IH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGV4dCBzdHlsZT17c3R5bGVzLnRhYmxlSGVhZENlbGx9PntoZWFkUm93fTwvVGV4dD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVmlldz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDc6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxWaWV3IHN0eWxlPXt7IHdpZHRoOiAnMTQuMjglJywgcGFkZGluZzogOCB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRleHQgc3R5bGU9e3N0eWxlcy50YWJsZUhlYWRDZWxsfT57aGVhZFJvd308L1RleHQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1ZpZXc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSA4OlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VmlldyBzdHlsZT17eyB3aWR0aDogJzEyLjUlJywgcGFkZGluZzogOCB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRleHQgc3R5bGU9e3N0eWxlcy50YWJsZUhlYWRDZWxsfT57aGVhZFJvd308L1RleHQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1ZpZXc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSA5OlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VmlldyBzdHlsZT17eyB3aWR0aDogJzExLjExJScsIHBhZGRpbmc6IDggfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0IHN0eWxlPXtzdHlsZXMudGFibGVIZWFkQ2VsbH0+e2hlYWRSb3d9PC9UZXh0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9WaWV3PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgMTA6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxWaWV3IHN0eWxlPXt7IHdpZHRoOiAnMTAlJywgcGFkZGluZzogOCB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRleHQgc3R5bGU9e3N0eWxlcy50YWJsZUhlYWRDZWxsfT57aGVhZFJvd308L1RleHQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1ZpZXc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAxMTpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFZpZXcgc3R5bGU9e3sgd2lkdGg6ICc5LjA5JScsIHBhZGRpbmc6IDggfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0IHN0eWxlPXtzdHlsZXMudGFibGVIZWFkQ2VsbH0+e2hlYWRSb3d9PC9UZXh0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9WaWV3PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgMTI6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxWaWV3IHN0eWxlPXt7IHdpZHRoOiAnOC4zMyUnLCBwYWRkaW5nOiA4IH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGV4dCBzdHlsZT17c3R5bGVzLnRhYmxlSGVhZENlbGx9PntoZWFkUm93fTwvVGV4dD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVmlldz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L1ZpZXc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHsvKiBUYWJsZUJvZHkgKi99XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtmaWVsZC5yb3dzLm1hcCgocm93KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxWaWV3IHN0eWxlPXtzdHlsZXMudGFibGVSb3d9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7cm93LnJvdy5tYXAoKHJvd05hbWUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBCb2R5Um93c1F1YW50aXR5ID0gZmllbGQucm93cy5sZW5ndGg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3dpdGNoIChCb2R5Um93c1F1YW50aXR5KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDE6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFZpZXcgc3R5bGU9e3sgd2lkdGg6ICcxMDAlJywgcGFkZGluZzogOCB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0IHN0eWxlPXtzdHlsZXMudGFibGVDZWxsfT57cm93TmFtZX08L1RleHQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9WaWV3PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAyOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxWaWV3IHN0eWxlPXt7IHdpZHRoOiAnNTAlJywgcGFkZGluZzogOCB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0IHN0eWxlPXtzdHlsZXMudGFibGVDZWxsfT57cm93TmFtZX08L1RleHQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9WaWV3PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAzOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxWaWV3IHN0eWxlPXt7IHdpZHRoOiAnMzMuMzMlJywgcGFkZGluZzogOCB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0IHN0eWxlPXtzdHlsZXMudGFibGVDZWxsfT57cm93TmFtZX08L1RleHQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9WaWV3PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSA0OlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxWaWV3IHN0eWxlPXt7IHdpZHRoOiAnMjUlJywgcGFkZGluZzogOCB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0IHN0eWxlPXtzdHlsZXMudGFibGVDZWxsfT57cm93TmFtZX08L1RleHQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9WaWV3PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSA1OlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxWaWV3IHN0eWxlPXt7IHdpZHRoOiAnMjAlJywgcGFkZGluZzogOCB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0IHN0eWxlPXtzdHlsZXMudGFibGVDZWxsfT57cm93TmFtZX08L1RleHQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9WaWV3PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSA2OlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxWaWV3IHN0eWxlPXt7IHdpZHRoOiAnMTYuNjYlJywgcGFkZGluZzogOCB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0IHN0eWxlPXtzdHlsZXMudGFibGVDZWxsfT57cm93TmFtZX08L1RleHQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9WaWV3PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSA3OlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxWaWV3IHN0eWxlPXt7IHdpZHRoOiAnMTQuMjglJywgcGFkZGluZzogOCB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0IHN0eWxlPXtzdHlsZXMudGFibGVDZWxsfT57cm93TmFtZX08L1RleHQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9WaWV3PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSA4OlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxWaWV3IHN0eWxlPXt7IHdpZHRoOiAnMTIuNSUnLCBwYWRkaW5nOiA4IH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRleHQgc3R5bGU9e3N0eWxlcy50YWJsZUNlbGx9Pntyb3dOYW1lfTwvVGV4dD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1ZpZXc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDk6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFZpZXcgc3R5bGU9e3sgd2lkdGg6ICcxMS4xMSUnLCBwYWRkaW5nOiA4IH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRleHQgc3R5bGU9e3N0eWxlcy50YWJsZUNlbGx9Pntyb3dOYW1lfTwvVGV4dD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1ZpZXc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDEwOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxWaWV3IHN0eWxlPXt7IHdpZHRoOiAnMTAlJywgcGFkZGluZzogOCB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0IHN0eWxlPXtzdHlsZXMudGFibGVDZWxsfT57cm93TmFtZX08L1RleHQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9WaWV3PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAxMTpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VmlldyBzdHlsZT17eyB3aWR0aDogJzkuMDklJywgcGFkZGluZzogOCB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0IHN0eWxlPXtzdHlsZXMudGFibGVDZWxsfT57cm93TmFtZX08L1RleHQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9WaWV3PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAxMjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VmlldyBzdHlsZT17eyB3aWR0aDogJzguMzMlJywgcGFkZGluZzogOCB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0IHN0eWxlPXtzdHlsZXMudGFibGVDZWxsfT57cm93TmFtZX08L1RleHQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9WaWV3PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1ZpZXc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L1ZpZXc+XHJcbiAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgY2FzZSAnaGVhZGVyJzpcclxuICAgICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICA8VmlldyBzdHlsZT17eyBtYXJnaW5Ub3A6IDE2IH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPFRleHQgc3R5bGU9e3sgZm9udFNpemU6IDE0IH19PntmaWVsZC50aXRsZX08L1RleHQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9WaWV3PlxyXG4gICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgY2FzZSAnc3BhY2luZyc6XHJcbiAgICAgICAgICAgICAgICAgIHJldHVybiA8VmlldyBzdHlsZT17eyBtYXJnaW5Ub3A6IDEyLCBtYXJnaW5Cb3R0b206IDEyIH19PjwvVmlldz47XHJcbiAgICAgICAgICAgICAgICBjYXNlICdjaGFydCc6XHJcbiAgICAgICAgICAgICAgICAgIHJldHVybiBpbWFnZXNVcmwubWFwKChkb2MpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoZG9jLmltYWdlSW5kZXggPT09IGZpZWxkLmluZGV4KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8VmlldyBzdHlsZT17eyBtYXJnaW5Ub3A6IDE2IH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxJbWFnZSBzdHlsZT17eyB3aWR0aDogJzEwMCUnIH19IHNyYz17ZG9jLmltYWdlVXJsfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L1ZpZXc+XHJcbiAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICBjYXNlICd0ZXh0JzpcclxuICAgICAgICAgICAgICAgICAgbGV0IGZvcm1hdHRlZFRleHQgPSAkKGZpZWxkLmJvZHkpLm1hcChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuICQoJzxkaXY+JykuYXBwZW5kKHRoaXMpLmh0bWwoKTtcclxuICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGZvcm1hdHRlZFRleHQpO1xyXG4gICAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgIDxWaWV3IHN0eWxlPXt7IG1hcmdpblRvcDogMTYgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICB7JC5tYXAoZm9ybWF0dGVkVGV4dCwgKHJlcykgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhyZXMudG9TdHJpbmcoKS5pbmNsdWRlcygnPHA+PC9wPicpKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2cocmVzLmluY2x1ZGVzKCc8c3Ryb25nPicpKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gU1RBUlQgLS0+IDxwPjwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2cocmVzKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJlcy5zdGFydHNXaXRoKCc8cD4nKSAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICFyZXMuaW5jbHVkZXMoJzxzdHJvbmc+JykgJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAhcmVzLmluY2x1ZGVzKCc8ZW0+JykgJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAhcmVzLmluY2x1ZGVzKCc8cz4nKSAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICFyZXMuaW5jbHVkZXMoJzx1PicpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlcyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHJlcy5zdGFydHNXaXRoKCc8cCBjbGFzcz1cInFsLWluZGVudC0xXCI+JykpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCd5ZXMhJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gPFRleHQgc3R5bGU9e3sgZm9udFNpemU6IDEyLCBtYXJnaW5MZWZ0OiA4IH19PntyZXMucmVwbGFjZSgvKDwoW14+XSspPikvZ2ksICcnKX08L1RleHQ+O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnU2Vjb25kIGV0YXAnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gPHA+U1RST05HPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlIGlmIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICByZXMuc3RhcnRzV2l0aCgnPHA+JykgJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICByZXMuaW5jbHVkZXMoJzxzdHJvbmc+JykgJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAhcmVzLmluY2x1ZGVzKCc8ZW0+JykgJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAhcmVzLmluY2x1ZGVzKCc8cz4nKSAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICFyZXMuaW5jbHVkZXMoJzx1PicpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGV4dCBzdHlsZT17eyBmb250U2l6ZTogMTIsIGZvbnRGYW1pbHk6ICdNb250c2VycmF0LVNlbWlCb2xkJyB9fT57cmVzLnJlcGxhY2UoLyg8KFtePl0rKT4pL2dpLCAnJyl9PC9UZXh0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gPHA+RU08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJlcy5zdGFydHNXaXRoKCc8cD4nKSAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICFyZXMuaW5jbHVkZXMoJzxzdHJvbmc+JykgJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICByZXMuaW5jbHVkZXMoJzxlbT4nKSAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICFyZXMuaW5jbHVkZXMoJzxzPicpICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIXJlcy5pbmNsdWRlcygnPHU+JylcclxuICAgICAgICAgICAgICAgICAgICAgICAgKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDxUZXh0IHN0eWxlPXt7IGZvbnRTaXplOiAxMiwgZm9udEZhbWlseTogJ01vbnRzZXJyYXQtSXRhbGljJyB9fT57cmVzLnJlcGxhY2UoLyg8KFtePl0rKT4pL2dpLCAnJyl9PC9UZXh0PjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyA8cD5FTSArIFNUUk9ORzwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzLnN0YXJ0c1dpdGgoJzxwPicpICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzLmluY2x1ZGVzKCc8c3Ryb25nPicpICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzLmluY2x1ZGVzKCc8ZW0+JykgJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAhcmVzLmluY2x1ZGVzKCc8cz4nKSAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICFyZXMuaW5jbHVkZXMoJzx1PicpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGV4dCBzdHlsZT17eyBmb250U2l6ZTogMTIsIGZvbnRGYW1pbHk6ICdNb250c2VycmF0LVNlbWlCb2xkSXRhbGljJyB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3Jlcy5yZXBsYWNlKC8oPChbXj5dKyk+KS9naSwgJycpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9UZXh0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gPHA+UzwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzLnN0YXJ0c1dpdGgoJzxwPicpICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzLmluY2x1ZGVzKCc8cz4nKSAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICFyZXMuaW5jbHVkZXMoJzxzdHJvbmc+JykgJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAhcmVzLmluY2x1ZGVzKCc8ZW0+JykgJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAhcmVzLmluY2x1ZGVzKCc8dT4nKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gPFRleHQgc3R5bGU9e3sgZm9udFNpemU6IDEyLCB0ZXh0RGVjb3JhdGlvbjogJ2xpbmUtdGhyb3VnaCcgfX0+e3Jlcy5yZXBsYWNlKC8oPChbXj5dKyk+KS9naSwgJycpfTwvVGV4dD47XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gPHA+UyArIEVNPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlIGlmIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICByZXMuc3RhcnRzV2l0aCgnPHA+JykgJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICByZXMuaW5jbHVkZXMoJzxzPicpICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzLmluY2x1ZGVzKCc8ZW0+JykgJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAhcmVzLmluY2x1ZGVzKCc8c3Ryb25nPicpICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIXJlcy5pbmNsdWRlcygnPHU+JylcclxuICAgICAgICAgICAgICAgICAgICAgICAgKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0IHN0eWxlPXt7IGZvbnRTaXplOiAxMiwgZm9udEZhbWlseTogJ01vbnRzZXJyYXQtSXRhbGljJywgdGV4dERlY29yYXRpb246ICdsaW5lLXRocm91Z2gnIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7cmVzLnJlcGxhY2UoLyg8KFtePl0rKT4pL2dpLCAnJyl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1RleHQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyA8cD5TICsgU1RST05HPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlIGlmIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICByZXMuc3RhcnRzV2l0aCgnPHA+JykgJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICByZXMuaW5jbHVkZXMoJzxzPicpICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIXJlcy5pbmNsdWRlcygnPGVtPicpICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzLmluY2x1ZGVzKCc8c3Ryb25nPicpICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIXJlcy5pbmNsdWRlcygnPHU+JylcclxuICAgICAgICAgICAgICAgICAgICAgICAgKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0IHN0eWxlPXt7IGZvbnRTaXplOiAxMiwgZm9udEZhbWlseTogJ01vbnRzZXJyYXQtU2VtaUJvbGQnLCB0ZXh0RGVjb3JhdGlvbjogJ2xpbmUtdGhyb3VnaCcgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtyZXMucmVwbGFjZSgvKDwoW14+XSspPikvZ2ksICcnKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVGV4dD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIDxwPlMgKyBFTSArIFNUUk9ORzwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzLnN0YXJ0c1dpdGgoJzxwPicpICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzLmluY2x1ZGVzKCc8cz4nKSAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJlcy5pbmNsdWRlcygnPGVtPicpICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzLmluY2x1ZGVzKCc8c3Ryb25nPicpICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIXJlcy5pbmNsdWRlcygnPHU+JylcclxuICAgICAgICAgICAgICAgICAgICAgICAgKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0IHN0eWxlPXt7IGZvbnRTaXplOiAxMiwgZm9udEZhbWlseTogJ01vbnRzZXJyYXQtU2VtaUJvbGRJdGFsaWMnLCB0ZXh0RGVjb3JhdGlvbjogJ2xpbmUtdGhyb3VnaCcgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtyZXMucmVwbGFjZSgvKDwoW14+XSspPikvZ2ksICcnKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVGV4dD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIDxwPlU8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJlcy5zdGFydHNXaXRoKCc8cD4nKSAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJlcy5pbmNsdWRlcygnPHU+JykgJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAhcmVzLmluY2x1ZGVzKCc8cz4nKSAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICFyZXMuaW5jbHVkZXMoJzxzdHJvbmc+JykgJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAhcmVzLmluY2x1ZGVzKCc8ZW0+JylcclxuICAgICAgICAgICAgICAgICAgICAgICAgKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDxUZXh0IHN0eWxlPXt7IGZvbnRTaXplOiAxMiwgdGV4dERlY29yYXRpb246ICd1bmRlcmxpbmUnIH19PntyZXMucmVwbGFjZSgvKDwoW14+XSspPikvZ2ksICcnKX08L1RleHQ+O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIDxwPlUgKyBFTTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzLnN0YXJ0c1dpdGgoJzxwPicpICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzLmluY2x1ZGVzKCc8dT4nKSAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICFyZXMuaW5jbHVkZXMoJzxzPicpICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIXJlcy5pbmNsdWRlcygnPHN0cm9uZz4nKSAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJlcy5pbmNsdWRlcygnPGVtPicpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGV4dCBzdHlsZT17eyBmb250U2l6ZTogMTIsIGZvbnRGYW1pbHk6ICdNb250c2VycmF0LUl0YWxpYycsIHRleHREZWNvcmF0aW9uOiAndW5kZXJsaW5lJyB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3Jlcy5yZXBsYWNlKC8oPChbXj5dKyk+KS9naSwgJycpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9UZXh0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gPHA+VSArIFM8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJlcy5zdGFydHNXaXRoKCc8cD4nKSAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJlcy5pbmNsdWRlcygnPHU+JykgJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICByZXMuaW5jbHVkZXMoJzxzPicpICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIXJlcy5pbmNsdWRlcygnPHN0cm9uZz4nKSAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICFyZXMuaW5jbHVkZXMoJzxlbT4nKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRleHQgc3R5bGU9e3sgZm9udFNpemU6IDEyLCB0ZXh0RGVjb3JhdGlvbjogJ2xpbmUtdGhyb3VnaCB1bmRlcmxpbmUnIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7cmVzLnJlcGxhY2UoLyg8KFtePl0rKT4pL2dpLCAnJyl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1RleHQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyA8cD5VICsgU1RST05HPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlIGlmIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICByZXMuc3RhcnRzV2l0aCgnPHA+JykgJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICByZXMuaW5jbHVkZXMoJzx1PicpICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIXJlcy5pbmNsdWRlcygnPHM+JykgJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICByZXMuaW5jbHVkZXMoJzxzdHJvbmc+JykgJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAhcmVzLmluY2x1ZGVzKCc8ZW0+JylcclxuICAgICAgICAgICAgICAgICAgICAgICAgKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0IHN0eWxlPXt7IGZvbnRTaXplOiAxMiwgZm9udEZhbWlseTogJ01vbnRzZXJyYXQtU2VtaUJvbGQnLCB0ZXh0RGVjb3JhdGlvbjogJ3VuZGVybGluZScgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtyZXMucmVwbGFjZSgvKDwoW14+XSspPikvZ2ksICcnKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVGV4dD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIDxwPlUgKyBTICsgU1RST05HPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlIGlmIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICByZXMuc3RhcnRzV2l0aCgnPHA+JykgJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICByZXMuaW5jbHVkZXMoJzx1PicpICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzLmluY2x1ZGVzKCc8cz4nKSAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJlcy5pbmNsdWRlcygnPHN0cm9uZz4nKSAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICFyZXMuaW5jbHVkZXMoJzxlbT4nKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRleHQgc3R5bGU9e3sgZm9udFNpemU6IDEyLCBmb250RmFtaWx5OiAnTW9udHNlcnJhdC1TZW1pQm9sZCcsIHRleHREZWNvcmF0aW9uOiAnbGluZS10aHJvdWdoIHVuZGVybGluZScgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtyZXMucmVwbGFjZSgvKDwoW14+XSspPikvZ2ksICcnKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVGV4dD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIDxwPlUgKyBTICsgU1RST05HICsgRU08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJlcy5zdGFydHNXaXRoKCc8cD4nKSAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJlcy5pbmNsdWRlcygnPHU+JykgJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICByZXMuaW5jbHVkZXMoJzxzPicpICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzLmluY2x1ZGVzKCc8c3Ryb25nPicpICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzLmluY2x1ZGVzKCc8ZW0+JylcclxuICAgICAgICAgICAgICAgICAgICAgICAgKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IGZvbnRTaXplOiAxMiwgZm9udEZhbWlseTogJ01vbnRzZXJyYXQtU2VtaUJvbGRJdGFsaWMnLCB0ZXh0RGVjb3JhdGlvbjogJ2xpbmUtdGhyb3VnaCB1bmRlcmxpbmUnIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtyZXMucmVwbGFjZSgvKDwoW14+XSspPikvZ2ksICcnKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVGV4dD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIDxwPlUgKyBTICsgRU08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJlcy5zdGFydHNXaXRoKCc8cD4nKSAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJlcy5pbmNsdWRlcygnPHU+JykgJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICByZXMuaW5jbHVkZXMoJzxzPicpICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIXJlcy5pbmNsdWRlcygnPHN0cm9uZz4nKSAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJlcy5pbmNsdWRlcygnPGVtPicpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGV4dCBzdHlsZT17eyBmb250U2l6ZTogMTIsIGZvbnRGYW1pbHk6ICdNb250c2VycmF0LUl0YWxpYycsIHRleHREZWNvcmF0aW9uOiAnbGluZS10aHJvdWdoIHVuZGVybGluZScgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtyZXMucmVwbGFjZSgvKDwoW14+XSspPikvZ2ksICcnKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVGV4dD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIDxwPlUgKyBTVFJPTkcgKyBFTTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzLnN0YXJ0c1dpdGgoJzxwPicpICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzLmluY2x1ZGVzKCc8dT4nKSAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICFyZXMuaW5jbHVkZXMoJzxzPicpICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzLmluY2x1ZGVzKCc8c3Ryb25nPicpICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzLmluY2x1ZGVzKCc8ZW0+JylcclxuICAgICAgICAgICAgICAgICAgICAgICAgKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0IHN0eWxlPXt7IGZvbnRTaXplOiAxMiwgZm9udEZhbWlseTogJ01vbnRzZXJyYXQtU2VtaUJvbGRJdGFsaWMnLCB0ZXh0RGVjb3JhdGlvbjogJ3VuZGVybGluZScgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtyZXMucmVwbGFjZSgvKDwoW14+XSspPikvZ2ksICcnKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVGV4dD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIEVORCAtLT4gPHA+PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBTVEFSVCAtLT4gPGgyPjwvaDI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICByZXMuc3RhcnRzV2l0aCgnPGgyPicpICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIXJlcy5pbmNsdWRlcygnPHN0cm9uZz4nKSAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICFyZXMuaW5jbHVkZXMoJzxlbT4nKSAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICFyZXMuaW5jbHVkZXMoJzxzPicpICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIXJlcy5pbmNsdWRlcygnPHU+JylcclxuICAgICAgICAgICAgICAgICAgICAgICAgKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDxUZXh0IHN0eWxlPXt7IGZvbnRTaXplOiAxNCB9fT57cmVzLnJlcGxhY2UoLyg8KFtePl0rKT4pL2dpLCAnJyl9PC9UZXh0PjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyA8aDI+U1RST05HPC9oMj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzLnN0YXJ0c1dpdGgoJzxoMj4nKSAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJlcy5pbmNsdWRlcygnPHN0cm9uZz4nKSAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICFyZXMuaW5jbHVkZXMoJzxlbT4nKSAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICFyZXMuaW5jbHVkZXMoJzxzPicpICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIXJlcy5pbmNsdWRlcygnPHU+JylcclxuICAgICAgICAgICAgICAgICAgICAgICAgKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0IHN0eWxlPXt7IGZvbnRTaXplOiAxNCwgZm9udEZhbWlseTogJ01vbnRzZXJyYXQtU2VtaUJvbGQnIH19PntyZXMucmVwbGFjZSgvKDwoW14+XSspPikvZ2ksICcnKX08L1RleHQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyA8aDI+RU08L2gyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlIGlmIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICByZXMuc3RhcnRzV2l0aCgnPGgyPicpICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIXJlcy5pbmNsdWRlcygnPHN0cm9uZz4nKSAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJlcy5pbmNsdWRlcygnPGVtPicpICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIXJlcy5pbmNsdWRlcygnPHM+JykgJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAhcmVzLmluY2x1ZGVzKCc8dT4nKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gPFRleHQgc3R5bGU9e3sgZm9udFNpemU6IDE0LCBmb250RmFtaWx5OiAnTW9udHNlcnJhdC1JdGFsaWMnIH19PntyZXMucmVwbGFjZSgvKDwoW14+XSspPikvZ2ksICcnKX08L1RleHQ+O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIDxoMj5FTSArIFNUUk9ORzwvaDI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJlcy5zdGFydHNXaXRoKCc8aDI+JykgJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICByZXMuaW5jbHVkZXMoJzxzdHJvbmc+JykgJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICByZXMuaW5jbHVkZXMoJzxlbT4nKSAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICFyZXMuaW5jbHVkZXMoJzxzPicpICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIXJlcy5pbmNsdWRlcygnPHU+JylcclxuICAgICAgICAgICAgICAgICAgICAgICAgKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0IHN0eWxlPXt7IGZvbnRTaXplOiAxNCwgZm9udEZhbWlseTogJ01vbnRzZXJyYXQtU2VtaUJvbGRJdGFsaWMnIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7cmVzLnJlcGxhY2UoLyg8KFtePl0rKT4pL2dpLCAnJyl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1RleHQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyA8aDI+UzwvaDI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJlcy5zdGFydHNXaXRoKCc8aDI+JykgJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICByZXMuaW5jbHVkZXMoJzxzPicpICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIXJlcy5pbmNsdWRlcygnPHN0cm9uZz4nKSAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICFyZXMuaW5jbHVkZXMoJzxlbT4nKSAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICFyZXMuaW5jbHVkZXMoJzx1PicpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiA8VGV4dCBzdHlsZT17eyBmb250U2l6ZTogMTQsIHRleHREZWNvcmF0aW9uOiAnbGluZS10aHJvdWdoJyB9fT57cmVzLnJlcGxhY2UoLyg8KFtePl0rKT4pL2dpLCAnJyl9PC9UZXh0PjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyA8aDI+UyArIEVNPC9oMj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzLnN0YXJ0c1dpdGgoJzxoMj4nKSAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJlcy5pbmNsdWRlcygnPHM+JykgJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICByZXMuaW5jbHVkZXMoJzxlbT4nKSAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICFyZXMuaW5jbHVkZXMoJzxzdHJvbmc+JykgJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAhcmVzLmluY2x1ZGVzKCc8dT4nKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRleHQgc3R5bGU9e3sgZm9udFNpemU6IDE0LCBmb250RmFtaWx5OiAnTW9udHNlcnJhdC1JdGFsaWMnLCB0ZXh0RGVjb3JhdGlvbjogJ2xpbmUtdGhyb3VnaCcgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtyZXMucmVwbGFjZSgvKDwoW14+XSspPikvZ2ksICcnKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVGV4dD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIDxIMj5TICsgU1RST05HPC9IMj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzLnN0YXJ0c1dpdGgoJzxoMj4nKSAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJlcy5pbmNsdWRlcygnPHM+JykgJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAhcmVzLmluY2x1ZGVzKCc8ZW0+JykgJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICByZXMuaW5jbHVkZXMoJzxzdHJvbmc+JykgJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAhcmVzLmluY2x1ZGVzKCc8dT4nKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRleHQgc3R5bGU9e3sgZm9udFNpemU6IDEyLCBmb250RmFtaWx5OiAnTW9udHNlcnJhdC1TZW1pQm9sZCcsIHRleHREZWNvcmF0aW9uOiAnbGluZS10aHJvdWdoJyB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3Jlcy5yZXBsYWNlKC8oPChbXj5dKyk+KS9naSwgJycpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9UZXh0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gPGgyPlMgKyBFTSArIFNUUk9ORzwvaDI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJlcy5zdGFydHNXaXRoKCc8aDI+JykgJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICByZXMuaW5jbHVkZXMoJzxzPicpICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzLmluY2x1ZGVzKCc8ZW0+JykgJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICByZXMuaW5jbHVkZXMoJzxzdHJvbmc+JykgJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAhcmVzLmluY2x1ZGVzKCc8dT4nKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRleHQgc3R5bGU9e3sgZm9udFNpemU6IDE0LCBmb250RmFtaWx5OiAnTW9udHNlcnJhdC1TZW1pQm9sZEl0YWxpYycsIHRleHREZWNvcmF0aW9uOiAnbGluZS10aHJvdWdoJyB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3Jlcy5yZXBsYWNlKC8oPChbXj5dKyk+KS9naSwgJycpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9UZXh0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gPGgyPlU8L2gyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlIGlmIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICByZXMuc3RhcnRzV2l0aCgnPGgyPicpICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzLmluY2x1ZGVzKCc8dT4nKSAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICFyZXMuaW5jbHVkZXMoJzxzPicpICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIXJlcy5pbmNsdWRlcygnPHN0cm9uZz4nKSAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICFyZXMuaW5jbHVkZXMoJzxlbT4nKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gPFRleHQgc3R5bGU9e3sgZm9udFNpemU6IDE0LCB0ZXh0RGVjb3JhdGlvbjogJ3VuZGVybGluZScgfX0+e3Jlcy5yZXBsYWNlKC8oPChbXj5dKyk+KS9naSwgJycpfTwvVGV4dD47XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gPGgyPlUgKyBFTTwvaDI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJlcy5zdGFydHNXaXRoKCc8aDI+JykgJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICByZXMuaW5jbHVkZXMoJzx1PicpICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIXJlcy5pbmNsdWRlcygnPHM+JykgJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAhcmVzLmluY2x1ZGVzKCc8c3Ryb25nPicpICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzLmluY2x1ZGVzKCc8ZW0+JylcclxuICAgICAgICAgICAgICAgICAgICAgICAgKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0IHN0eWxlPXt7IGZvbnRTaXplOiAxNCwgZm9udEZhbWlseTogJ01vbnRzZXJyYXQtSXRhbGljJywgdGV4dERlY29yYXRpb246ICd1bmRlcmxpbmUnIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7cmVzLnJlcGxhY2UoLyg8KFtePl0rKT4pL2dpLCAnJyl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1RleHQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyA8aDI+VSArIFM8L2gyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlIGlmIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICByZXMuc3RhcnRzV2l0aCgnPGgyPicpICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzLmluY2x1ZGVzKCc8dT4nKSAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJlcy5pbmNsdWRlcygnPHM+JykgJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAhcmVzLmluY2x1ZGVzKCc8c3Ryb25nPicpICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIXJlcy5pbmNsdWRlcygnPGVtPicpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGV4dCBzdHlsZT17eyBmb250U2l6ZTogMTQsIHRleHREZWNvcmF0aW9uOiAnbGluZS10aHJvdWdoIHVuZGVybGluZScgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtyZXMucmVwbGFjZSgvKDwoW14+XSspPikvZ2ksICcnKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVGV4dD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIDxoMj5VICsgU1RST05HPC9oMj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzLnN0YXJ0c1dpdGgoJzxoMj4nKSAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJlcy5pbmNsdWRlcygnPHU+JykgJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAhcmVzLmluY2x1ZGVzKCc8cz4nKSAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJlcy5pbmNsdWRlcygnPHN0cm9uZz4nKSAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICFyZXMuaW5jbHVkZXMoJzxlbT4nKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRleHQgc3R5bGU9e3sgZm9udFNpemU6IDE0LCBmb250RmFtaWx5OiAnTW9udHNlcnJhdC1TZW1pQm9sZCcsIHRleHREZWNvcmF0aW9uOiAndW5kZXJsaW5lJyB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3Jlcy5yZXBsYWNlKC8oPChbXj5dKyk+KS9naSwgJycpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9UZXh0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gPGgyPlUgKyBTICsgU1RST05HPC9oMj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzLnN0YXJ0c1dpdGgoJzxoMj4nKSAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJlcy5pbmNsdWRlcygnPHU+JykgJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICByZXMuaW5jbHVkZXMoJzxzPicpICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzLmluY2x1ZGVzKCc8c3Ryb25nPicpICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIXJlcy5pbmNsdWRlcygnPGVtPicpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGV4dCBzdHlsZT17eyBmb250U2l6ZTogMTQsIGZvbnRGYW1pbHk6ICdNb250c2VycmF0LVNlbWlCb2xkJywgdGV4dERlY29yYXRpb246ICdsaW5lLXRocm91Z2ggdW5kZXJsaW5lJyB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3Jlcy5yZXBsYWNlKC8oPChbXj5dKyk+KS9naSwgJycpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9UZXh0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gPGgyPlUgKyBTICsgU1RST05HICsgRU08L2gyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlIGlmIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICByZXMuc3RhcnRzV2l0aCgnPGgyPicpICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzLmluY2x1ZGVzKCc8dT4nKSAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJlcy5pbmNsdWRlcygnPHM+JykgJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICByZXMuaW5jbHVkZXMoJzxzdHJvbmc+JykgJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICByZXMuaW5jbHVkZXMoJzxlbT4nKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRleHRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgZm9udFNpemU6IDE0LCBmb250RmFtaWx5OiAnTW9udHNlcnJhdC1TZW1pQm9sZEl0YWxpYycsIHRleHREZWNvcmF0aW9uOiAnbGluZS10aHJvdWdoIHVuZGVybGluZScgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3Jlcy5yZXBsYWNlKC8oPChbXj5dKyk+KS9naSwgJycpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9UZXh0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gPGgyPlUgKyBTICsgRU08L2gyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlIGlmIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICByZXMuc3RhcnRzV2l0aCgnPGgyPicpICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzLmluY2x1ZGVzKCc8dT4nKSAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJlcy5pbmNsdWRlcygnPHM+JykgJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAhcmVzLmluY2x1ZGVzKCc8c3Ryb25nPicpICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzLmluY2x1ZGVzKCc8ZW0+JylcclxuICAgICAgICAgICAgICAgICAgICAgICAgKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0IHN0eWxlPXt7IGZvbnRTaXplOiAxNCwgZm9udEZhbWlseTogJ01vbnRzZXJyYXQtSXRhbGljJywgdGV4dERlY29yYXRpb246ICdsaW5lLXRocm91Z2ggdW5kZXJsaW5lJyB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3Jlcy5yZXBsYWNlKC8oPChbXj5dKyk+KS9naSwgJycpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9UZXh0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gPGgyPlUgKyBTVFJPTkcgKyBFTTwvaDI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJlcy5zdGFydHNXaXRoKCc8aDI+JykgJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICByZXMuaW5jbHVkZXMoJzx1PicpICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIXJlcy5pbmNsdWRlcygnPHM+JykgJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICByZXMuaW5jbHVkZXMoJzxzdHJvbmc+JykgJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICByZXMuaW5jbHVkZXMoJzxlbT4nKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRleHQgc3R5bGU9e3sgZm9udFNpemU6IDE0LCBmb250RmFtaWx5OiAnTW9udHNlcnJhdC1TZW1pQm9sZEl0YWxpYycsIHRleHREZWNvcmF0aW9uOiAndW5kZXJsaW5lJyB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3Jlcy5yZXBsYWNlKC8oPChbXj5dKyk+KS9naSwgJycpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9UZXh0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gRU5EIC0tPiA8aDI+PC9oMj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gU1RBUlQgLS0+IDxoMT48L2gxPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzLnN0YXJ0c1dpdGgoJzxoMT4nKSAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICFyZXMuaW5jbHVkZXMoJzxzdHJvbmc+JykgJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAhcmVzLmluY2x1ZGVzKCc8ZW0+JykgJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAhcmVzLmluY2x1ZGVzKCc8cz4nKSAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICFyZXMuaW5jbHVkZXMoJzx1PicpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiA8VGV4dCBzdHlsZT17eyBmb250U2l6ZTogMTYgfX0+e3Jlcy5yZXBsYWNlKC8oPChbXj5dKyk+KS9naSwgJycpfTwvVGV4dD47XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gPGgxPlNUUk9ORzwvaDE+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJlcy5zdGFydHNXaXRoKCc8aDE+JykgJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICByZXMuaW5jbHVkZXMoJzxzdHJvbmc+JykgJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAhcmVzLmluY2x1ZGVzKCc8ZW0+JykgJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAhcmVzLmluY2x1ZGVzKCc8cz4nKSAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICFyZXMuaW5jbHVkZXMoJzx1PicpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGV4dCBzdHlsZT17eyBmb250U2l6ZTogMTYsIGZvbnRGYW1pbHk6ICdNb250c2VycmF0LVNlbWlCb2xkJyB9fT57cmVzLnJlcGxhY2UoLyg8KFtePl0rKT4pL2dpLCAnJyl9PC9UZXh0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gPGgxPkVNPC9oMT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzLnN0YXJ0c1dpdGgoJzxoMT4nKSAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICFyZXMuaW5jbHVkZXMoJzxzdHJvbmc+JykgJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICByZXMuaW5jbHVkZXMoJzxlbT4nKSAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICFyZXMuaW5jbHVkZXMoJzxzPicpICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIXJlcy5pbmNsdWRlcygnPHU+JylcclxuICAgICAgICAgICAgICAgICAgICAgICAgKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDxUZXh0IHN0eWxlPXt7IGZvbnRTaXplOiAxNiwgZm9udEZhbWlseTogJ01vbnRzZXJyYXQtSXRhbGljJyB9fT57cmVzLnJlcGxhY2UoLyg8KFtePl0rKT4pL2dpLCAnJyl9PC9UZXh0PjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyA8aDE+RU0gKyBTVFJPTkc8L2gxPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlIGlmIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICByZXMuc3RhcnRzV2l0aCgnPGgxPicpICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzLmluY2x1ZGVzKCc8c3Ryb25nPicpICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzLmluY2x1ZGVzKCc8ZW0+JykgJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAhcmVzLmluY2x1ZGVzKCc8cz4nKSAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICFyZXMuaW5jbHVkZXMoJzx1PicpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGV4dCBzdHlsZT17eyBmb250U2l6ZTogMTYsIGZvbnRGYW1pbHk6ICdNb250c2VycmF0LVNlbWlCb2xkSXRhbGljJyB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3Jlcy5yZXBsYWNlKC8oPChbXj5dKyk+KS9naSwgJycpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9UZXh0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gPGgxPlM8L2gxPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlIGlmIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICByZXMuc3RhcnRzV2l0aCgnPGgxPicpICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzLmluY2x1ZGVzKCc8cz4nKSAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICFyZXMuaW5jbHVkZXMoJzxzdHJvbmc+JykgJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAhcmVzLmluY2x1ZGVzKCc8ZW0+JykgJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAhcmVzLmluY2x1ZGVzKCc8dT4nKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gPFRleHQgc3R5bGU9e3sgZm9udFNpemU6IDE2LCB0ZXh0RGVjb3JhdGlvbjogJ2xpbmUtdGhyb3VnaCcgfX0+e3Jlcy5yZXBsYWNlKC8oPChbXj5dKyk+KS9naSwgJycpfTwvVGV4dD47XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gPGgxPlMgKyBFTTwvaDE+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJlcy5zdGFydHNXaXRoKCc8aDE+JykgJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICByZXMuaW5jbHVkZXMoJzxzPicpICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzLmluY2x1ZGVzKCc8ZW0+JykgJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAhcmVzLmluY2x1ZGVzKCc8c3Ryb25nPicpICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIXJlcy5pbmNsdWRlcygnPHU+JylcclxuICAgICAgICAgICAgICAgICAgICAgICAgKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0IHN0eWxlPXt7IGZvbnRTaXplOiAxNiwgZm9udEZhbWlseTogJ01vbnRzZXJyYXQtSXRhbGljJywgdGV4dERlY29yYXRpb246ICdsaW5lLXRocm91Z2gnIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7cmVzLnJlcGxhY2UoLyg8KFtePl0rKT4pL2dpLCAnJyl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1RleHQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyA8aDE+UyArIFNUUk9ORzwvaDE+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJlcy5zdGFydHNXaXRoKCc8aDE+JykgJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICByZXMuaW5jbHVkZXMoJzxzPicpICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIXJlcy5pbmNsdWRlcygnPGVtPicpICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzLmluY2x1ZGVzKCc8c3Ryb25nPicpICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIXJlcy5pbmNsdWRlcygnPHU+JylcclxuICAgICAgICAgICAgICAgICAgICAgICAgKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0IHN0eWxlPXt7IGZvbnRTaXplOiAxMiwgZm9udEZhbWlseTogJ01vbnRzZXJyYXQtU2VtaUJvbGQnLCB0ZXh0RGVjb3JhdGlvbjogJ2xpbmUtdGhyb3VnaCcgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtyZXMucmVwbGFjZSgvKDwoW14+XSspPikvZ2ksICcnKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVGV4dD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIDxoMT5TICsgRU0gKyBTVFJPTkc8L2gxPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlIGlmIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICByZXMuc3RhcnRzV2l0aCgnPGgxPicpICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzLmluY2x1ZGVzKCc8cz4nKSAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJlcy5pbmNsdWRlcygnPGVtPicpICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzLmluY2x1ZGVzKCc8c3Ryb25nPicpICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIXJlcy5pbmNsdWRlcygnPHU+JylcclxuICAgICAgICAgICAgICAgICAgICAgICAgKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0IHN0eWxlPXt7IGZvbnRTaXplOiAxNiwgZm9udEZhbWlseTogJ01vbnRzZXJyYXQtU2VtaUJvbGRJdGFsaWMnLCB0ZXh0RGVjb3JhdGlvbjogJ2xpbmUtdGhyb3VnaCcgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtyZXMucmVwbGFjZSgvKDwoW14+XSspPikvZ2ksICcnKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVGV4dD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIDxoMT5VPC9oMT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzLnN0YXJ0c1dpdGgoJzxoMT4nKSAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJlcy5pbmNsdWRlcygnPHU+JykgJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAhcmVzLmluY2x1ZGVzKCc8cz4nKSAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICFyZXMuaW5jbHVkZXMoJzxzdHJvbmc+JykgJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAhcmVzLmluY2x1ZGVzKCc8ZW0+JylcclxuICAgICAgICAgICAgICAgICAgICAgICAgKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDxUZXh0IHN0eWxlPXt7IGZvbnRTaXplOiAxNiwgdGV4dERlY29yYXRpb246ICd1bmRlcmxpbmUnIH19PntyZXMucmVwbGFjZSgvKDwoW14+XSspPikvZ2ksICcnKX08L1RleHQ+O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIDxoMT5VICsgRU08L2gxPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlIGlmIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICByZXMuc3RhcnRzV2l0aCgnPGgxPicpICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzLmluY2x1ZGVzKCc8dT4nKSAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICFyZXMuaW5jbHVkZXMoJzxzPicpICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIXJlcy5pbmNsdWRlcygnPHN0cm9uZz4nKSAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJlcy5pbmNsdWRlcygnPGVtPicpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGV4dCBzdHlsZT17eyBmb250U2l6ZTogMTYsIGZvbnRGYW1pbHk6ICdNb250c2VycmF0LUl0YWxpYycsIHRleHREZWNvcmF0aW9uOiAndW5kZXJsaW5lJyB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3Jlcy5yZXBsYWNlKC8oPChbXj5dKyk+KS9naSwgJycpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9UZXh0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gPGgxPlUgKyBTPC9oMT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzLnN0YXJ0c1dpdGgoJzxoMT4nKSAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJlcy5pbmNsdWRlcygnPHU+JykgJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICByZXMuaW5jbHVkZXMoJzxzPicpICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIXJlcy5pbmNsdWRlcygnPHN0cm9uZz4nKSAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICFyZXMuaW5jbHVkZXMoJzxlbT4nKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRleHQgc3R5bGU9e3sgZm9udFNpemU6IDE2LCB0ZXh0RGVjb3JhdGlvbjogJ2xpbmUtdGhyb3VnaCB1bmRlcmxpbmUnIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7cmVzLnJlcGxhY2UoLyg8KFtePl0rKT4pL2dpLCAnJyl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1RleHQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyA8aDE+VSArIFNUUk9ORzwvaDE+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJlcy5zdGFydHNXaXRoKCc8aDE+JykgJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICByZXMuaW5jbHVkZXMoJzx1PicpICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIXJlcy5pbmNsdWRlcygnPHM+JykgJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICByZXMuaW5jbHVkZXMoJzxzdHJvbmc+JykgJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAhcmVzLmluY2x1ZGVzKCc8ZW0+JylcclxuICAgICAgICAgICAgICAgICAgICAgICAgKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0IHN0eWxlPXt7IGZvbnRTaXplOiAxNiwgZm9udEZhbWlseTogJ01vbnRzZXJyYXQtU2VtaUJvbGQnLCB0ZXh0RGVjb3JhdGlvbjogJ3VuZGVybGluZScgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtyZXMucmVwbGFjZSgvKDwoW14+XSspPikvZ2ksICcnKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVGV4dD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIDxoMT5VICsgUyArIFNUUk9ORzwvaDE+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJlcy5zdGFydHNXaXRoKCc8aDE+JykgJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICByZXMuaW5jbHVkZXMoJzx1PicpICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzLmluY2x1ZGVzKCc8cz4nKSAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJlcy5pbmNsdWRlcygnPHN0cm9uZz4nKSAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICFyZXMuaW5jbHVkZXMoJzxlbT4nKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRleHQgc3R5bGU9e3sgZm9udFNpemU6IDE2LCBmb250RmFtaWx5OiAnTW9udHNlcnJhdC1TZW1pQm9sZCcsIHRleHREZWNvcmF0aW9uOiAnbGluZS10aHJvdWdoIHVuZGVybGluZScgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtyZXMucmVwbGFjZSgvKDwoW14+XSspPikvZ2ksICcnKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVGV4dD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIDxoMT5VICsgUyArIFNUUk9ORyArIEVNPC9oMT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzLnN0YXJ0c1dpdGgoJzxoMT4nKSAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJlcy5pbmNsdWRlcygnPHU+JykgJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICByZXMuaW5jbHVkZXMoJzxzPicpICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzLmluY2x1ZGVzKCc8c3Ryb25nPicpICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzLmluY2x1ZGVzKCc8ZW0+JylcclxuICAgICAgICAgICAgICAgICAgICAgICAgKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IGZvbnRTaXplOiAxNiwgZm9udEZhbWlseTogJ01vbnRzZXJyYXQtU2VtaUJvbGRJdGFsaWMnLCB0ZXh0RGVjb3JhdGlvbjogJ2xpbmUtdGhyb3VnaCB1bmRlcmxpbmUnIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtyZXMucmVwbGFjZSgvKDwoW14+XSspPikvZ2ksICcnKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVGV4dD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIDxoMT5VICsgUyArIEVNPC9oMT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzLnN0YXJ0c1dpdGgoJzxoMT4nKSAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJlcy5pbmNsdWRlcygnPHU+JykgJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICByZXMuaW5jbHVkZXMoJzxzPicpICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIXJlcy5pbmNsdWRlcygnPHN0cm9uZz4nKSAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJlcy5pbmNsdWRlcygnPGVtPicpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGV4dCBzdHlsZT17eyBmb250U2l6ZTogMTYsIGZvbnRGYW1pbHk6ICdNb250c2VycmF0LUl0YWxpYycsIHRleHREZWNvcmF0aW9uOiAnbGluZS10aHJvdWdoIHVuZGVybGluZScgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtyZXMucmVwbGFjZSgvKDwoW14+XSspPikvZ2ksICcnKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVGV4dD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIDxoMT5VICsgU1RST05HICsgRU08L2gxPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlIGlmIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICByZXMuc3RhcnRzV2l0aCgnPGgxPicpICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzLmluY2x1ZGVzKCc8dT4nKSAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICFyZXMuaW5jbHVkZXMoJzxzPicpICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzLmluY2x1ZGVzKCc8c3Ryb25nPicpICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzLmluY2x1ZGVzKCc8ZW0+JylcclxuICAgICAgICAgICAgICAgICAgICAgICAgKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0IHN0eWxlPXt7IGZvbnRTaXplOiAxNiwgZm9udEZhbWlseTogJ01vbnRzZXJyYXQtU2VtaUJvbGRJdGFsaWMnLCB0ZXh0RGVjb3JhdGlvbjogJ3VuZGVybGluZScgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtyZXMucmVwbGFjZSgvKDwoW14+XSspPikvZ2ksICcnKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVGV4dD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIEVORCAtLT4gPGgxPjwvaDE+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tIE9SREVSRUQgTElTVCBTVEFSVCAtLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlIGlmIChyZXMuc3RhcnRzV2l0aCgnPG9sPicpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgYmVmb3JlRm9ybWF0dGVkID0gcmVzLnJlcGxhY2UoJzxvbD4nLCAnJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgYWZ0ZXJGb3JtYXR0ZWQgPSBiZWZvcmVGb3JtYXR0ZWQucmVwbGFjZSgnPC9vbD4nLCAnJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHJlc3BvbnNlID0gYWZ0ZXJGb3JtYXR0ZWQuc3BsaXQoLzxcXC9saT4vZyk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIC8vIERldGVybWluZSB3aGVyZSB0byBwdXQgdGhlID48IGJhY2sgaW4gKGFmdGVyID48IHJlbW92ZSkuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCByZXNwb25zZS5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHJlc3BvbnNlW2ldLnN1YnN0cmluZygwLCAxKSAhPSAnPCcpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzcG9uc2VbaV0gPSAnPCcgKyByZXNwb25zZVtpXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBpZiAocmVzcG9uc2VbaV0uc2xpY2UoLTEpICE9ICc+Jykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICByZXNwb25zZVtpXSA9IHJlc3BvbnNlW2ldICsgJz4nO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhyZXNwb25zZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGsgPSAxO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiByZXNwb25zZS5tYXAoKGl0ZW0pID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGl0ZW0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtLnN0YXJ0c1dpdGgoJzxsaT4nKSAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAhaXRlbS5pbmNsdWRlcygnPHN0cm9uZz4nKSAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAhaXRlbS5pbmNsdWRlcygnPGVtPicpICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICFpdGVtLmluY2x1ZGVzKCc8cz4nKSAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAhaXRlbS5pbmNsdWRlcygnPHU+JylcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxWaWV3IHN0eWxlPXt7IG1hcmdpbkxlZnQ6IDggfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGV4dCBzdHlsZT17eyBmb250U2l6ZTogMTIgfX0+e2Ake2srK30uICR7aXRlbS5yZXBsYWNlKC8oPChbXj5dKyk+KS9naSwgJycpfWB9PC9UZXh0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVmlldz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIDxwPlNUUk9ORzwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtLnN0YXJ0c1dpdGgoJzxsaT4nKSAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtLmluY2x1ZGVzKCc8c3Ryb25nPicpICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICFpdGVtLmluY2x1ZGVzKCc8ZW0+JykgJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIWl0ZW0uaW5jbHVkZXMoJzxzPicpICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICFpdGVtLmluY2x1ZGVzKCc8dT4nKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFZpZXcgc3R5bGU9e3sgbWFyZ2luTGVmdDogOCB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0IHN0eWxlPXt7IGZvbnRTaXplOiAxMiwgZm9udEZhbWlseTogJ01vbnRzZXJyYXQtU2VtaUJvbGQnIH19PntgJHtrKyt9LiAke2l0ZW0ucmVwbGFjZShcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLyg8KFtePl0rKT4pL2dpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1gfTwvVGV4dD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1ZpZXc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyA8cD5FTTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtLnN0YXJ0c1dpdGgoJzxsaT4nKSAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAhaXRlbS5pbmNsdWRlcygnPHN0cm9uZz4nKSAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtLmluY2x1ZGVzKCc8ZW0+JykgJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIWl0ZW0uaW5jbHVkZXMoJzxzPicpICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICFpdGVtLmluY2x1ZGVzKCc8dT4nKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFZpZXcgc3R5bGU9e3sgbWFyZ2luTGVmdDogOCB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0IHN0eWxlPXt7IGZvbnRTaXplOiAxMiwgZm9udEZhbWlseTogJ01vbnRzZXJyYXQtSXRhbGljJyB9fT57YCR7aysrfS4gJHtpdGVtLnJlcGxhY2UoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8oPChbXj5dKyk+KS9naSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJydcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9YH08L1RleHQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9WaWV3PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gPHA+RU0gKyBTVFJPTkc8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbHNlIGlmIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXRlbS5zdGFydHNXaXRoKCc8bGk+JykgJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXRlbS5pbmNsdWRlcygnPHN0cm9uZz4nKSAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtLmluY2x1ZGVzKCc8ZW0+JykgJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIWl0ZW0uaW5jbHVkZXMoJzxzPicpICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICFpdGVtLmluY2x1ZGVzKCc8dT4nKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFZpZXcgc3R5bGU9e3sgbWFyZ2luTGVmdDogOCB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0IHN0eWxlPXt7IGZvbnRTaXplOiAxMiwgZm9udEZhbWlseTogJ01vbnRzZXJyYXQtU2VtaUJvbGRJdGFsaWMnIH19PntgJHtrKyt9LiAke2l0ZW0ucmVwbGFjZShcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLyg8KFtePl0rKT4pL2dpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1gfTwvVGV4dD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1ZpZXc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyA8cD5TPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW0uc3RhcnRzV2l0aCgnPGxpPicpICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW0uaW5jbHVkZXMoJzxzPicpICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICFpdGVtLmluY2x1ZGVzKCc8c3Ryb25nPicpICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICFpdGVtLmluY2x1ZGVzKCc8ZW0+JykgJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIWl0ZW0uaW5jbHVkZXMoJzx1PicpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VmlldyBzdHlsZT17eyBtYXJnaW5MZWZ0OiA4IH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRleHQgc3R5bGU9e3sgZm9udFNpemU6IDEyLCB0ZXh0RGVjb3JhdGlvbjogJ2xpbmUtdGhyb3VnaCcgfX0+e2Ake2srK30uICR7aXRlbS5yZXBsYWNlKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvKDwoW14+XSspPikvZ2ksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICcnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfWB9PC9UZXh0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVmlldz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIDxwPlMgKyBFTTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtLnN0YXJ0c1dpdGgoJzxsaT4nKSAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtLmluY2x1ZGVzKCc8cz4nKSAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtLmluY2x1ZGVzKCc8ZW0+JykgJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIWl0ZW0uaW5jbHVkZXMoJzxzdHJvbmc+JykgJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIWl0ZW0uaW5jbHVkZXMoJzx1PicpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VmlldyBzdHlsZT17eyBtYXJnaW5MZWZ0OiA4IH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRleHRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgZm9udFNpemU6IDEyLCBmb250RmFtaWx5OiAnTW9udHNlcnJhdC1JdGFsaWMnLCB0ZXh0RGVjb3JhdGlvbjogJ2xpbmUtdGhyb3VnaCcgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID57YCR7aysrfS4gJHtpdGVtLnJlcGxhY2UoLyg8KFtePl0rKT4pL2dpLCAnJyl9YH08L1RleHQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9WaWV3PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gPHA+UyArIFNUUk9ORzwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtLnN0YXJ0c1dpdGgoJzxsaT4nKSAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtLmluY2x1ZGVzKCc8cz4nKSAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAhaXRlbS5pbmNsdWRlcygnPGVtPicpICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW0uaW5jbHVkZXMoJzxzdHJvbmc+JykgJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIWl0ZW0uaW5jbHVkZXMoJzx1PicpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VmlldyBzdHlsZT17eyBtYXJnaW5MZWZ0OiA4IH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRleHRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgZm9udFNpemU6IDEyLCBmb250RmFtaWx5OiAnTW9udHNlcnJhdC1TZW1pQm9sZCcsIHRleHREZWNvcmF0aW9uOiAnbGluZS10aHJvdWdoJyB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPntgJHtrKyt9LiAke2l0ZW0ucmVwbGFjZSgvKDwoW14+XSspPikvZ2ksICcnKX1gfTwvVGV4dD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1ZpZXc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyA8cD5TICsgRU0gKyBTVFJPTkc8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbHNlIGlmIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXRlbS5zdGFydHNXaXRoKCc8bGk+JykgJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXRlbS5pbmNsdWRlcygnPHM+JykgJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXRlbS5pbmNsdWRlcygnPGVtPicpICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW0uaW5jbHVkZXMoJzxzdHJvbmc+JykgJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIWl0ZW0uaW5jbHVkZXMoJzx1PicpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VmlldyBzdHlsZT17eyBtYXJnaW5MZWZ0OiA4IH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRleHRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgZm9udFNpemU6IDEyLCBmb250RmFtaWx5OiAnTW9udHNlcnJhdC1TZW1pQm9sZEl0YWxpYycsIHRleHREZWNvcmF0aW9uOiAnbGluZS10aHJvdWdoJyB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPntgJHtrKyt9LiAke2l0ZW0ucmVwbGFjZSgvKDwoW14+XSspPikvZ2ksICcnKX1gfTwvVGV4dD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1ZpZXc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyA8cD5VPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW0uc3RhcnRzV2l0aCgnPGxpPicpICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW0uaW5jbHVkZXMoJzx1PicpICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICFpdGVtLmluY2x1ZGVzKCc8cz4nKSAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAhaXRlbS5pbmNsdWRlcygnPHN0cm9uZz4nKSAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAhaXRlbS5pbmNsdWRlcygnPGVtPicpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VmlldyBzdHlsZT17eyBtYXJnaW5MZWZ0OiA4IH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRleHQgc3R5bGU9e3sgZm9udFNpemU6IDEyLCB0ZXh0RGVjb3JhdGlvbjogJ3VuZGVybGluZScgfX0+e2Ake2srK30uICR7aXRlbS5yZXBsYWNlKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvKDwoW14+XSspPikvZ2ksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICcnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfWB9PC9UZXh0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVmlldz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIDxwPlUgKyBFTTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtLnN0YXJ0c1dpdGgoJzxsaT4nKSAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtLmluY2x1ZGVzKCc8dT4nKSAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAhaXRlbS5pbmNsdWRlcygnPHM+JykgJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIWl0ZW0uaW5jbHVkZXMoJzxzdHJvbmc+JykgJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXRlbS5pbmNsdWRlcygnPGVtPicpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VmlldyBzdHlsZT17eyBtYXJnaW5MZWZ0OiA4IH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRleHRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgZm9udFNpemU6IDEyLCBmb250RmFtaWx5OiAnTW9udHNlcnJhdC1JdGFsaWMnLCB0ZXh0RGVjb3JhdGlvbjogJ3VuZGVybGluZScgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID57YCR7aysrfS4gJHtpdGVtLnJlcGxhY2UoLyg8KFtePl0rKT4pL2dpLCAnJyl9YH08L1RleHQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9WaWV3PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gPHA+VSArIFM8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbHNlIGlmIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXRlbS5zdGFydHNXaXRoKCc8bGk+JykgJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXRlbS5pbmNsdWRlcygnPHU+JykgJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXRlbS5pbmNsdWRlcygnPHM+JykgJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIWl0ZW0uaW5jbHVkZXMoJzxzdHJvbmc+JykgJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIWl0ZW0uaW5jbHVkZXMoJzxlbT4nKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFZpZXcgc3R5bGU9e3sgbWFyZ2luTGVmdDogOCB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0IHN0eWxlPXt7IGZvbnRTaXplOiAxMiwgdGV4dERlY29yYXRpb246ICdsaW5lLXRocm91Z2ggdW5kZXJsaW5lJyB9fT57YCR7aysrfS4gJHtpdGVtLnJlcGxhY2UoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8oPChbXj5dKyk+KS9naSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJydcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9YH08L1RleHQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9WaWV3PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gPHA+VSArIFNUUk9ORzwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtLnN0YXJ0c1dpdGgoJzxsaT4nKSAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtLmluY2x1ZGVzKCc8dT4nKSAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAhaXRlbS5pbmNsdWRlcygnPHM+JykgJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXRlbS5pbmNsdWRlcygnPHN0cm9uZz4nKSAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAhaXRlbS5pbmNsdWRlcygnPGVtPicpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VmlldyBzdHlsZT17eyBtYXJnaW5MZWZ0OiA4IH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRleHRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgZm9udFNpemU6IDEyLCBmb250RmFtaWx5OiAnTW9udHNlcnJhdC1TZW1pQm9sZCcsIHRleHREZWNvcmF0aW9uOiAndW5kZXJsaW5lJyB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPntgJHtrKyt9LiAke2l0ZW0ucmVwbGFjZSgvKDwoW14+XSspPikvZ2ksICcnKX1gfTwvVGV4dD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1ZpZXc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyA8cD5VICsgUyArIFNUUk9ORzwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtLnN0YXJ0c1dpdGgoJzxsaT4nKSAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtLmluY2x1ZGVzKCc8dT4nKSAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtLmluY2x1ZGVzKCc8cz4nKSAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtLmluY2x1ZGVzKCc8c3Ryb25nPicpICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICFpdGVtLmluY2x1ZGVzKCc8ZW0+JylcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxWaWV3IHN0eWxlPXt7IG1hcmdpbkxlZnQ6IDggfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGV4dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyBmb250U2l6ZTogMTIsIGZvbnRGYW1pbHk6ICdNb250c2VycmF0LVNlbWlCb2xkJywgdGV4dERlY29yYXRpb246ICdsaW5lLXRocm91Z2ggdW5kZXJsaW5lJyB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPntgJHtrKyt9LiAke2l0ZW0ucmVwbGFjZSgvKDwoW14+XSspPikvZ2ksICcnKX1gfTwvVGV4dD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1ZpZXc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyA8cD5VICsgUyArIFNUUk9ORyArIEVNPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW0uc3RhcnRzV2l0aCgnPGxpPicpICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW0uaW5jbHVkZXMoJzx1PicpICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW0uaW5jbHVkZXMoJzxzPicpICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW0uaW5jbHVkZXMoJzxzdHJvbmc+JykgJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXRlbS5pbmNsdWRlcygnPGVtPicpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VmlldyBzdHlsZT17eyBtYXJnaW5MZWZ0OiA4IH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRleHRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250U2l6ZTogMTIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udEZhbWlseTogJ01vbnRzZXJyYXQtU2VtaUJvbGRJdGFsaWMnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHREZWNvcmF0aW9uOiAnbGluZS10aHJvdWdoIHVuZGVybGluZScsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+e2Ake2srK30uICR7aXRlbS5yZXBsYWNlKC8oPChbXj5dKyk+KS9naSwgJycpfWB9PC9UZXh0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVmlldz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIDxwPlUgKyBTICsgRU08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbHNlIGlmIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXRlbS5zdGFydHNXaXRoKCc8bGk+JykgJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXRlbS5pbmNsdWRlcygnPHU+JykgJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXRlbS5pbmNsdWRlcygnPHM+JykgJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIWl0ZW0uaW5jbHVkZXMoJzxzdHJvbmc+JykgJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXRlbS5pbmNsdWRlcygnPGVtPicpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VmlldyBzdHlsZT17eyBtYXJnaW5MZWZ0OiA4IH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRleHRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250U2l6ZTogMTIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udEZhbWlseTogJ01vbnRzZXJyYXQtSXRhbGljJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0RGVjb3JhdGlvbjogJ2xpbmUtdGhyb3VnaCB1bmRlcmxpbmUnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPntgJHtrKyt9LiAke2l0ZW0ucmVwbGFjZSgvKDwoW14+XSspPikvZ2ksICcnKX1gfTwvVGV4dD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1ZpZXc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyA8cD5VICsgU1RST05HICsgRU08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbHNlIGlmIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXRlbS5zdGFydHNXaXRoKCc8bGk+JykgJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXRlbS5pbmNsdWRlcygnPHU+JykgJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIWl0ZW0uaW5jbHVkZXMoJzxzPicpICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW0uaW5jbHVkZXMoJzxzdHJvbmc+JykgJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXRlbS5pbmNsdWRlcygnPGVtPicpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VmlldyBzdHlsZT17eyBtYXJnaW5MZWZ0OiA4IH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRleHRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250U2l6ZTogMTIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udEZhbWlseTogJ01vbnRzZXJyYXQtU2VtaUJvbGRJdGFsaWMnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHREZWNvcmF0aW9uOiAndW5kZXJsaW5lJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID57YCR7aysrfS4gJHtpdGVtLnJlcGxhY2UoLyg8KFtePl0rKT4pL2dpLCAnJyl9YH08L1RleHQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9WaWV3PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tIE9SREVSRUQgTElTVCBFTkQgLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0gVU5PUkRFUkVEIExJU1QgU1RBUlQgLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAocmVzLnN0YXJ0c1dpdGgoJzx1bD4nKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGJlZm9yZUZvcm1hdHRlZCA9IHJlcy5yZXBsYWNlKCc8dWw+JywgJycpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGFmdGVyRm9ybWF0dGVkID0gYmVmb3JlRm9ybWF0dGVkLnJlcGxhY2UoJzwvdWw+JywgJycpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHZhciByZXNwb25zZSA9IGFmdGVyRm9ybWF0dGVkLnNwbGl0KC88XFwvbGk+L2cpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBEZXRlcm1pbmUgd2hlcmUgdG8gcHV0IHRoZSA+PCBiYWNrIGluIChhZnRlciA+PCByZW1vdmUpLlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcmVzcG9uc2UubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChyZXNwb25zZVtpXS5zdWJzdHJpbmcoMCwgMSkgIT0gJzwnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc3BvbnNlW2ldID0gJzwnICsgcmVzcG9uc2VbaV07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gaWYgKHJlc3BvbnNlW2ldLnNsaWNlKC0xKSAhPSAnPicpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgcmVzcG9uc2VbaV0gPSByZXNwb25zZVtpXSArICc+JztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiByZXNwb25zZS5tYXAoKGl0ZW0pID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGl0ZW0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtLnN0YXJ0c1dpdGgoJzxsaT4nKSAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAhaXRlbS5pbmNsdWRlcygnPHN0cm9uZz4nKSAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAhaXRlbS5pbmNsdWRlcygnPGVtPicpICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICFpdGVtLmluY2x1ZGVzKCc8cz4nKSAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAhaXRlbS5pbmNsdWRlcygnPHU+JylcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxWaWV3IHN0eWxlPXt7IG1hcmdpbkxlZnQ6IDggfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGV4dCBzdHlsZT17eyBmb250U2l6ZTogMTIgfX0+e2AtICR7aXRlbS5yZXBsYWNlKC8oPChbXj5dKyk+KS9naSwgJycpfWB9PC9UZXh0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVmlldz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIDxwPlNUUk9ORzwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtLnN0YXJ0c1dpdGgoJzxsaT4nKSAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtLmluY2x1ZGVzKCc8c3Ryb25nPicpICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICFpdGVtLmluY2x1ZGVzKCc8ZW0+JykgJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIWl0ZW0uaW5jbHVkZXMoJzxzPicpICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICFpdGVtLmluY2x1ZGVzKCc8dT4nKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFZpZXcgc3R5bGU9e3sgbWFyZ2luTGVmdDogOCB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0IHN0eWxlPXt7IGZvbnRTaXplOiAxMiwgZm9udEZhbWlseTogJ01vbnRzZXJyYXQtU2VtaUJvbGQnIH19PntgLSAke2l0ZW0ucmVwbGFjZShcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLyg8KFtePl0rKT4pL2dpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1gfTwvVGV4dD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1ZpZXc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyA8cD5FTTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtLnN0YXJ0c1dpdGgoJzxsaT4nKSAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAhaXRlbS5pbmNsdWRlcygnPHN0cm9uZz4nKSAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtLmluY2x1ZGVzKCc8ZW0+JykgJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIWl0ZW0uaW5jbHVkZXMoJzxzPicpICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICFpdGVtLmluY2x1ZGVzKCc8dT4nKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFZpZXcgc3R5bGU9e3sgbWFyZ2luTGVmdDogOCB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0IHN0eWxlPXt7IGZvbnRTaXplOiAxMiwgZm9udEZhbWlseTogJ01vbnRzZXJyYXQtSXRhbGljJyB9fT57YC0gJHtpdGVtLnJlcGxhY2UoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8oPChbXj5dKyk+KS9naSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJydcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9YH08L1RleHQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9WaWV3PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gPHA+RU0gKyBTVFJPTkc8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbHNlIGlmIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXRlbS5zdGFydHNXaXRoKCc8bGk+JykgJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXRlbS5pbmNsdWRlcygnPHN0cm9uZz4nKSAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtLmluY2x1ZGVzKCc8ZW0+JykgJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIWl0ZW0uaW5jbHVkZXMoJzxzPicpICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICFpdGVtLmluY2x1ZGVzKCc8dT4nKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFZpZXcgc3R5bGU9e3sgbWFyZ2luTGVmdDogOCB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0IHN0eWxlPXt7IGZvbnRTaXplOiAxMiwgZm9udEZhbWlseTogJ01vbnRzZXJyYXQtU2VtaUJvbGRJdGFsaWMnIH19PntgLSAke2l0ZW0ucmVwbGFjZShcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLyg8KFtePl0rKT4pL2dpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1gfTwvVGV4dD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1ZpZXc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyA8cD5TPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW0uc3RhcnRzV2l0aCgnPGxpPicpICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW0uaW5jbHVkZXMoJzxzPicpICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICFpdGVtLmluY2x1ZGVzKCc8c3Ryb25nPicpICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICFpdGVtLmluY2x1ZGVzKCc8ZW0+JykgJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIWl0ZW0uaW5jbHVkZXMoJzx1PicpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VmlldyBzdHlsZT17eyBtYXJnaW5MZWZ0OiA4IH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRleHQgc3R5bGU9e3sgZm9udFNpemU6IDEyLCB0ZXh0RGVjb3JhdGlvbjogJ2xpbmUtdGhyb3VnaCcgfX0+e2AtICR7aXRlbS5yZXBsYWNlKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvKDwoW14+XSspPikvZ2ksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICcnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfWB9PC9UZXh0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVmlldz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIDxwPlMgKyBFTTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtLnN0YXJ0c1dpdGgoJzxsaT4nKSAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtLmluY2x1ZGVzKCc8cz4nKSAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtLmluY2x1ZGVzKCc8ZW0+JykgJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIWl0ZW0uaW5jbHVkZXMoJzxzdHJvbmc+JykgJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIWl0ZW0uaW5jbHVkZXMoJzx1PicpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VmlldyBzdHlsZT17eyBtYXJnaW5MZWZ0OiA4IH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRleHRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgZm9udFNpemU6IDEyLCBmb250RmFtaWx5OiAnTW9udHNlcnJhdC1JdGFsaWMnLCB0ZXh0RGVjb3JhdGlvbjogJ2xpbmUtdGhyb3VnaCcgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID57YC0gJHtpdGVtLnJlcGxhY2UoLyg8KFtePl0rKT4pL2dpLCAnJyl9YH08L1RleHQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9WaWV3PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gPHA+UyArIFNUUk9ORzwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtLnN0YXJ0c1dpdGgoJzxsaT4nKSAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtLmluY2x1ZGVzKCc8cz4nKSAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAhaXRlbS5pbmNsdWRlcygnPGVtPicpICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW0uaW5jbHVkZXMoJzxzdHJvbmc+JykgJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIWl0ZW0uaW5jbHVkZXMoJzx1PicpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VmlldyBzdHlsZT17eyBtYXJnaW5MZWZ0OiA4IH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRleHRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgZm9udFNpemU6IDEyLCBmb250RmFtaWx5OiAnTW9udHNlcnJhdC1TZW1pQm9sZCcsIHRleHREZWNvcmF0aW9uOiAnbGluZS10aHJvdWdoJyB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPntgLSAke2l0ZW0ucmVwbGFjZSgvKDwoW14+XSspPikvZ2ksICcnKX1gfTwvVGV4dD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1ZpZXc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyA8cD5TICsgRU0gKyBTVFJPTkc8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbHNlIGlmIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXRlbS5zdGFydHNXaXRoKCc8bGk+JykgJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXRlbS5pbmNsdWRlcygnPHM+JykgJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXRlbS5pbmNsdWRlcygnPGVtPicpICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW0uaW5jbHVkZXMoJzxzdHJvbmc+JykgJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIWl0ZW0uaW5jbHVkZXMoJzx1PicpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VmlldyBzdHlsZT17eyBtYXJnaW5MZWZ0OiA4IH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRleHRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgZm9udFNpemU6IDEyLCBmb250RmFtaWx5OiAnTW9udHNlcnJhdC1TZW1pQm9sZEl0YWxpYycsIHRleHREZWNvcmF0aW9uOiAnbGluZS10aHJvdWdoJyB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPntgLSAke2l0ZW0ucmVwbGFjZSgvKDwoW14+XSspPikvZ2ksICcnKX1gfTwvVGV4dD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1ZpZXc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyA8cD5VPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW0uc3RhcnRzV2l0aCgnPGxpPicpICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW0uaW5jbHVkZXMoJzx1PicpICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICFpdGVtLmluY2x1ZGVzKCc8cz4nKSAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAhaXRlbS5pbmNsdWRlcygnPHN0cm9uZz4nKSAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAhaXRlbS5pbmNsdWRlcygnPGVtPicpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VmlldyBzdHlsZT17eyBtYXJnaW5MZWZ0OiA4IH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRleHQgc3R5bGU9e3sgZm9udFNpemU6IDEyLCB0ZXh0RGVjb3JhdGlvbjogJ3VuZGVybGluZScgfX0+e2AtICR7aXRlbS5yZXBsYWNlKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvKDwoW14+XSspPikvZ2ksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICcnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfWB9PC9UZXh0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVmlldz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIDxwPlUgKyBFTTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtLnN0YXJ0c1dpdGgoJzxsaT4nKSAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtLmluY2x1ZGVzKCc8dT4nKSAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAhaXRlbS5pbmNsdWRlcygnPHM+JykgJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIWl0ZW0uaW5jbHVkZXMoJzxzdHJvbmc+JykgJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXRlbS5pbmNsdWRlcygnPGVtPicpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VmlldyBzdHlsZT17eyBtYXJnaW5MZWZ0OiA4IH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRleHRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgZm9udFNpemU6IDEyLCBmb250RmFtaWx5OiAnTW9udHNlcnJhdC1JdGFsaWMnLCB0ZXh0RGVjb3JhdGlvbjogJ3VuZGVybGluZScgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID57YC0gJHtpdGVtLnJlcGxhY2UoLyg8KFtePl0rKT4pL2dpLCAnJyl9YH08L1RleHQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9WaWV3PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gPHA+VSArIFM8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbHNlIGlmIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXRlbS5zdGFydHNXaXRoKCc8bGk+JykgJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXRlbS5pbmNsdWRlcygnPHU+JykgJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXRlbS5pbmNsdWRlcygnPHM+JykgJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIWl0ZW0uaW5jbHVkZXMoJzxzdHJvbmc+JykgJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIWl0ZW0uaW5jbHVkZXMoJzxlbT4nKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFZpZXcgc3R5bGU9e3sgbWFyZ2luTGVmdDogOCB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0IHN0eWxlPXt7IGZvbnRTaXplOiAxMiwgdGV4dERlY29yYXRpb246ICdsaW5lLXRocm91Z2ggdW5kZXJsaW5lJyB9fT57YC0gJHtpdGVtLnJlcGxhY2UoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8oPChbXj5dKyk+KS9naSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJydcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9YH08L1RleHQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9WaWV3PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gPHA+VSArIFNUUk9ORzwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtLnN0YXJ0c1dpdGgoJzxsaT4nKSAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtLmluY2x1ZGVzKCc8dT4nKSAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAhaXRlbS5pbmNsdWRlcygnPHM+JykgJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXRlbS5pbmNsdWRlcygnPHN0cm9uZz4nKSAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAhaXRlbS5pbmNsdWRlcygnPGVtPicpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VmlldyBzdHlsZT17eyBtYXJnaW5MZWZ0OiA4IH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRleHRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgZm9udFNpemU6IDEyLCBmb250RmFtaWx5OiAnTW9udHNlcnJhdC1TZW1pQm9sZCcsIHRleHREZWNvcmF0aW9uOiAndW5kZXJsaW5lJyB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPntgLSAke2l0ZW0ucmVwbGFjZSgvKDwoW14+XSspPikvZ2ksICcnKX1gfTwvVGV4dD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1ZpZXc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyA8cD5VICsgUyArIFNUUk9ORzwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtLnN0YXJ0c1dpdGgoJzxsaT4nKSAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtLmluY2x1ZGVzKCc8dT4nKSAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtLmluY2x1ZGVzKCc8cz4nKSAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtLmluY2x1ZGVzKCc8c3Ryb25nPicpICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICFpdGVtLmluY2x1ZGVzKCc8ZW0+JylcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxWaWV3IHN0eWxlPXt7IG1hcmdpbkxlZnQ6IDggfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGV4dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyBmb250U2l6ZTogMTIsIGZvbnRGYW1pbHk6ICdNb250c2VycmF0LVNlbWlCb2xkJywgdGV4dERlY29yYXRpb246ICdsaW5lLXRocm91Z2ggdW5kZXJsaW5lJyB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPntgLSAke2l0ZW0ucmVwbGFjZSgvKDwoW14+XSspPikvZ2ksICcnKX1gfTwvVGV4dD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1ZpZXc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyA8cD5VICsgUyArIFNUUk9ORyArIEVNPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW0uc3RhcnRzV2l0aCgnPGxpPicpICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW0uaW5jbHVkZXMoJzx1PicpICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW0uaW5jbHVkZXMoJzxzPicpICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW0uaW5jbHVkZXMoJzxzdHJvbmc+JykgJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXRlbS5pbmNsdWRlcygnPGVtPicpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VmlldyBzdHlsZT17eyBtYXJnaW5MZWZ0OiA4IH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRleHRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250U2l6ZTogMTIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udEZhbWlseTogJ01vbnRzZXJyYXQtU2VtaUJvbGRJdGFsaWMnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHREZWNvcmF0aW9uOiAnbGluZS10aHJvdWdoIHVuZGVybGluZScsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+e2AtICR7aXRlbS5yZXBsYWNlKC8oPChbXj5dKyk+KS9naSwgJycpfWB9PC9UZXh0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVmlldz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIDxwPlUgKyBTICsgRU08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbHNlIGlmIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXRlbS5zdGFydHNXaXRoKCc8bGk+JykgJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXRlbS5pbmNsdWRlcygnPHU+JykgJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXRlbS5pbmNsdWRlcygnPHM+JykgJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIWl0ZW0uaW5jbHVkZXMoJzxzdHJvbmc+JykgJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXRlbS5pbmNsdWRlcygnPGVtPicpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VmlldyBzdHlsZT17eyBtYXJnaW5MZWZ0OiA4IH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRleHRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250U2l6ZTogMTIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udEZhbWlseTogJ01vbnRzZXJyYXQtSXRhbGljJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0RGVjb3JhdGlvbjogJ2xpbmUtdGhyb3VnaCB1bmRlcmxpbmUnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPntgLSAke2l0ZW0ucmVwbGFjZSgvKDwoW14+XSspPikvZ2ksICcnKX1gfTwvVGV4dD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1ZpZXc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyA8cD5VICsgU1RST05HICsgRU08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbHNlIGlmIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXRlbS5zdGFydHNXaXRoKCc8bGk+JykgJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXRlbS5pbmNsdWRlcygnPHU+JykgJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIWl0ZW0uaW5jbHVkZXMoJzxzPicpICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW0uaW5jbHVkZXMoJzxzdHJvbmc+JykgJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXRlbS5pbmNsdWRlcygnPGVtPicpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VmlldyBzdHlsZT17eyBtYXJnaW5MZWZ0OiA4IH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRleHRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250U2l6ZTogMTIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udEZhbWlseTogJ01vbnRzZXJyYXQtU2VtaUJvbGRJdGFsaWMnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHREZWNvcmF0aW9uOiAndW5kZXJsaW5lJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID57YC0gJHtpdGVtLnJlcGxhY2UoLyg8KFtePl0rKT4pL2dpLCAnJyl9YH08L1RleHQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9WaWV3PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tIFVOT1JERVJFRCBMSVNUIEVORCAtLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gICAgICAgICAgICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9WaWV3PlxyXG4gICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICA8L1BhZ2U+XHJcbiAgICAgICAgKTtcclxuICAgICAgfSl9XHJcbiAgICA8L0RvY3VtZW50PlxyXG4gICk7XHJcbn07XHJcblxyXG5jb25zdCBSZWFjdFBERkRvY3VtZW50ID0gKHsgc2VjdGlvbnMgfSkgPT4ge1xyXG4gIGNvbnN0IHNpemUgPSB1c2VXaW5kb3dTaXplKCk7XHJcblxyXG4gIGNvbnN0IHNhdmVDb250YWluZXIgPSB1c2VSZWYoKTtcclxuICBjb25zdCBkcm9wZG93bkJ1dHRvbiA9IHVzZVJlZigpO1xyXG4gIGNvbnN0IGRyb3Bkb3duQ29udGFpbmVyID0gdXNlUmVmKCk7XHJcbiAgY29uc3QgW2Ryb3Bkb3duQnV0dG9uQ29sb3JIZWxwZXIsIHNldERyb3Bkb3duQnV0dG9uQ29sb3JIZWxwZXJdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IFtkcm9wZG93bkNvbnRhaW5lckhlbHBlciwgc2V0RHJvcGRvd25Db250YWluZXJIZWxwZXJdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IG9uU2F2ZURyb3Bkb3duU2hvdyA9ICgpID0+IHtcclxuICAgIGlmICghZHJvcGRvd25Db250YWluZXJIZWxwZXIpIHtcclxuICAgICAgZ3NhcC50byhkcm9wZG93bkNvbnRhaW5lci5jdXJyZW50LCB7IGF1dG9BbHBoYTogMSwgZHVyYXRpb246IDEsIGVhc2U6IExpbmVhciB9KTtcclxuICAgICAgLy8gZ3NhcC50byhkcm9wZG93bkJ1dHRvbi5jdXJyZW50LCB7IGJhY2tncm91bmRDb2xvcjogJyM2QzYzRkYnLCBjb2xvcjogJyNmOGY5ZmInLCBkdXJhdGlvbjogMSwgZWFzZTogTGluZWFyIH0pO1xyXG4gICAgICBzZXREcm9wZG93bkNvbnRhaW5lckhlbHBlcih0cnVlKTtcclxuICAgICAgc2V0RHJvcGRvd25CdXR0b25Db2xvckhlbHBlcih0cnVlKTtcclxuICAgIH0gZWxzZSBpZiAoZHJvcGRvd25Db250YWluZXJIZWxwZXIpIHtcclxuICAgICAgZ3NhcC50byhkcm9wZG93bkNvbnRhaW5lci5jdXJyZW50LCB7IGF1dG9BbHBoYTogMCwgZHVyYXRpb246IDEsIGVhc2U6IExpbmVhciB9KTtcclxuICAgICAgLy8gZ3NhcC50byhkcm9wZG93bkJ1dHRvbi5jdXJyZW50LCB7IGJhY2tncm91bmRDb2xvcjogJyNmOGY5ZmInLCBjb2xvcjogJyM2QzYzRkYnLCBkdXJhdGlvbjogMSwgZWFzZTogTGluZWFyIH0pO1xyXG4gICAgICBzZXREcm9wZG93bkNvbnRhaW5lckhlbHBlcihmYWxzZSk7XHJcbiAgICAgIHNldERyb3Bkb3duQnV0dG9uQ29sb3JIZWxwZXIoZmFsc2UpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIGNvbnN0IFtpbWFnZXNVcmwsIHNldEltYWdlc1VybF0gPSB1c2VTdGF0ZSgpO1xyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zb2xlLmxvZyhzZWN0aW9ucyk7XHJcbiAgICBjb25zdCBpbWFnZXNBcnJheSA9IFtdO1xyXG4gICAgc2V0SW1hZ2VzVXJsKGltYWdlc0FycmF5KTtcclxuICAgIHNlY3Rpb25zICYmXHJcbiAgICAgIHNlY3Rpb25zLm1hcCgoc2VjdGlvbikgPT4ge1xyXG4gICAgICAgIHNlY3Rpb24uZmllbGRzLm1hcCgoZmllbGQpID0+IHtcclxuICAgICAgICAgIGlmIChmaWVsZC50eXBlID09ICdjaGFydCcpIHtcclxuICAgICAgICAgICAgY29uc3QgY29sb3JzID1cclxuICAgICAgICAgICAgICBmaWVsZC5jaGFydFR5cGUgPT0gJ1BpZSBjaGFydCcgfHwgZmllbGQuY2hhcnRUeXBlID09ICdEb3VnaG51dCBjaGFydCdcclxuICAgICAgICAgICAgICAgID8gW1xyXG4gICAgICAgICAgICAgICAgICAgICdyZ2JhKDIwNSwyMjAsNTcsMSknLFxyXG4gICAgICAgICAgICAgICAgICAgICdyZ2JhKDI1NSwyMzUsNTksMSknLFxyXG4gICAgICAgICAgICAgICAgICAgICdyZ2JhKDI1NSwxOTMsNywxKScsXHJcbiAgICAgICAgICAgICAgICAgICAgJ3JnYmEoMjU1LDE1MiwwLDEpJyxcclxuICAgICAgICAgICAgICAgICAgICAncmdiYSgyNTUsODcsMzQsMSknLFxyXG4gICAgICAgICAgICAgICAgICAgICdyZ2JhKDI0NCw2Nyw1NCwxKScsXHJcbiAgICAgICAgICAgICAgICAgICAgJ3JnYmEoMjMzLDMwLDk5LDEpJyxcclxuICAgICAgICAgICAgICAgICAgICAncmdiYSgxNTYsMzksMTc2LDEpJyxcclxuICAgICAgICAgICAgICAgICAgICAncmdiYSgxMDMsNTgsMTgzLDEpJyxcclxuICAgICAgICAgICAgICAgICAgICAncmdiYSg2Myw4MSwxODEsMSknLFxyXG4gICAgICAgICAgICAgICAgICAgICdyZ2JhKDk2LDEyNSwxMzksMSknLFxyXG4gICAgICAgICAgICAgICAgICAgICdyZ2JhKDEyMSw4NSw3MiwxKScsXHJcbiAgICAgICAgICAgICAgICAgIF1cclxuICAgICAgICAgICAgICAgIDogZmllbGQuY2hhcnRUeXBlID09ICdMaW5lIGNoYXJ0JyB8fCBmaWVsZC5jaGFydFR5cGUgPT0gJ0FyZWEgY2hhcnQnXHJcbiAgICAgICAgICAgICAgICA/ICdyZ2JhKDI1NSwxODUsMCAsMSApJ1xyXG4gICAgICAgICAgICAgICAgOiBbXHJcbiAgICAgICAgICAgICAgICAgICAgJ3JnYmEoMjU1LDE4NSwwICwxICknLFxyXG4gICAgICAgICAgICAgICAgICAgICdyZ2JhKDI1NSwxODUsMCAsMSApJyxcclxuICAgICAgICAgICAgICAgICAgICAncmdiYSgyNTUsMTg1LDAgLDEgKScsXHJcbiAgICAgICAgICAgICAgICAgICAgJ3JnYmEoMjU1LDE4NSwwICwxICknLFxyXG4gICAgICAgICAgICAgICAgICAgICdyZ2JhKDI1NSwxODUsMCAsMSApJyxcclxuICAgICAgICAgICAgICAgICAgICAncmdiYSgyNTUsMTg1LDAgLDEgKScsXHJcbiAgICAgICAgICAgICAgICAgICAgJ3JnYmEoMjU1LDE4NSwwICwxICknLFxyXG4gICAgICAgICAgICAgICAgICAgICdyZ2JhKDI1NSwxODUsMCAsMSApJyxcclxuICAgICAgICAgICAgICAgICAgICAncmdiYSgyNTUsMTg1LDAgLDEgKScsXHJcbiAgICAgICAgICAgICAgICAgICAgJ3JnYmEoMjU1LDE4NSwwICwxICknLFxyXG4gICAgICAgICAgICAgICAgICAgICdyZ2JhKDI1NSwxODUsMCAsMSApJyxcclxuICAgICAgICAgICAgICAgICAgICAncmdiYSgyNTUsMTg1LDAgLDEgKScsXHJcbiAgICAgICAgICAgICAgICAgIF07XHJcblxyXG4gICAgICAgICAgICBjb25zdCBjb2xvcnMxID1cclxuICAgICAgICAgICAgICBmaWVsZC5jaGFydFR5cGUgPT0gJ1BpZSBjaGFydCcgfHwgZmllbGQuY2hhcnRUeXBlID09ICdEb3VnaG51dCBjaGFydCdcclxuICAgICAgICAgICAgICAgID8gW1xyXG4gICAgICAgICAgICAgICAgICAgICdyZ2JhKDIwNSwyMjAsNTcsMSknLFxyXG4gICAgICAgICAgICAgICAgICAgICdyZ2JhKDI1NSwyMzUsNTksMSknLFxyXG4gICAgICAgICAgICAgICAgICAgICdyZ2JhKDI1NSwxOTMsNywxKScsXHJcbiAgICAgICAgICAgICAgICAgICAgJ3JnYmEoMjU1LDE1MiwwLDEpJyxcclxuICAgICAgICAgICAgICAgICAgICAncmdiYSgyNTUsODcsMzQsMSknLFxyXG4gICAgICAgICAgICAgICAgICAgICdyZ2JhKDI0NCw2Nyw1NCwxKScsXHJcbiAgICAgICAgICAgICAgICAgICAgJ3JnYmEoMjMzLDMwLDk5LDEpJyxcclxuICAgICAgICAgICAgICAgICAgICAncmdiYSgxNTYsMzksMTc2LDEpJyxcclxuICAgICAgICAgICAgICAgICAgICAncmdiYSgxMDMsNTgsMTgzLDEpJyxcclxuICAgICAgICAgICAgICAgICAgICAncmdiYSg2Myw4MSwxODEsMSknLFxyXG4gICAgICAgICAgICAgICAgICAgICdyZ2JhKDk2LDEyNSwxMzksMSknLFxyXG4gICAgICAgICAgICAgICAgICAgICdyZ2JhKDEyMSw4NSw3MiwxKScsXHJcbiAgICAgICAgICAgICAgICAgIF1cclxuICAgICAgICAgICAgICAgIDogZmllbGQuY2hhcnRUeXBlID09ICdMaW5lIGNoYXJ0JyB8fCBmaWVsZC5jaGFydFR5cGUgPT0gJ0FyZWEgY2hhcnQnXHJcbiAgICAgICAgICAgICAgICA/ICdyZ2JhKDAsMjA0LDEwNiAsMSApJ1xyXG4gICAgICAgICAgICAgICAgOiBbXHJcbiAgICAgICAgICAgICAgICAgICAgJ3JnYmEoMCwyMDQsMTA2ICwxICknLFxyXG4gICAgICAgICAgICAgICAgICAgICdyZ2JhKDAsMjA0LDEwNiAsMSApJyxcclxuICAgICAgICAgICAgICAgICAgICAncmdiYSgwLDIwNCwxMDYgLDEgKScsXHJcbiAgICAgICAgICAgICAgICAgICAgJ3JnYmEoMCwyMDQsMTA2ICwxICknLFxyXG4gICAgICAgICAgICAgICAgICAgICdyZ2JhKDAsMjA0LDEwNiAsMSApJyxcclxuICAgICAgICAgICAgICAgICAgICAncmdiYSgwLDIwNCwxMDYgLDEgKScsXHJcbiAgICAgICAgICAgICAgICAgICAgJ3JnYmEoMCwyMDQsMTA2ICwxICknLFxyXG4gICAgICAgICAgICAgICAgICAgICdyZ2JhKDAsMjA0LDEwNiAsMSApJyxcclxuICAgICAgICAgICAgICAgICAgICAncmdiYSgwLDIwNCwxMDYgLDEgKScsXHJcbiAgICAgICAgICAgICAgICAgICAgJ3JnYmEoMCwyMDQsMTA2ICwxICknLFxyXG4gICAgICAgICAgICAgICAgICAgICdyZ2JhKDAsMjA0LDEwNiAsMSApJyxcclxuICAgICAgICAgICAgICAgICAgICAncmdiYSgwLDIwNCwxMDYgLDEgKScsXHJcbiAgICAgICAgICAgICAgICAgIF07XHJcblxyXG4gICAgICAgICAgICBjb25zdCBjb2xvcnMyID1cclxuICAgICAgICAgICAgICBmaWVsZC5jaGFydFR5cGUgPT0gJ1BpZSBjaGFydCcgfHwgZmllbGQuY2hhcnRUeXBlID09ICdEb3VnaG51dCBjaGFydCdcclxuICAgICAgICAgICAgICAgID8gW1xyXG4gICAgICAgICAgICAgICAgICAgICdyZ2JhKDIwNSwyMjAsNTcsMSknLFxyXG4gICAgICAgICAgICAgICAgICAgICdyZ2JhKDI1NSwyMzUsNTksMSknLFxyXG4gICAgICAgICAgICAgICAgICAgICdyZ2JhKDI1NSwxOTMsNywxKScsXHJcbiAgICAgICAgICAgICAgICAgICAgJ3JnYmEoMjU1LDE1MiwwLDEpJyxcclxuICAgICAgICAgICAgICAgICAgICAncmdiYSgyNTUsODcsMzQsMSknLFxyXG4gICAgICAgICAgICAgICAgICAgICdyZ2JhKDI0NCw2Nyw1NCwxKScsXHJcbiAgICAgICAgICAgICAgICAgICAgJ3JnYmEoMjMzLDMwLDk5LDEpJyxcclxuICAgICAgICAgICAgICAgICAgICAncmdiYSgxNTYsMzksMTc2LDEpJyxcclxuICAgICAgICAgICAgICAgICAgICAncmdiYSgxMDMsNTgsMTgzLDEpJyxcclxuICAgICAgICAgICAgICAgICAgICAncmdiYSg2Myw4MSwxODEsMSknLFxyXG4gICAgICAgICAgICAgICAgICAgICdyZ2JhKDk2LDEyNSwxMzksMSknLFxyXG4gICAgICAgICAgICAgICAgICAgICdyZ2JhKDEyMSw4NSw3MiwxKScsXHJcbiAgICAgICAgICAgICAgICAgIF1cclxuICAgICAgICAgICAgICAgIDogZmllbGQuY2hhcnRUeXBlID09ICdMaW5lIGNoYXJ0JyB8fCBmaWVsZC5jaGFydFR5cGUgPT0gJ0FyZWEgY2hhcnQnXHJcbiAgICAgICAgICAgICAgICA/ICdyZ2JhKDAsMTIwLDIxNSAsMSApJ1xyXG4gICAgICAgICAgICAgICAgOiBbXHJcbiAgICAgICAgICAgICAgICAgICAgJ3JnYmEoMCwxMjAsMjE1ICwxICknLFxyXG4gICAgICAgICAgICAgICAgICAgICdyZ2JhKDAsMTIwLDIxNSAsMSApJyxcclxuICAgICAgICAgICAgICAgICAgICAncmdiYSgwLDEyMCwyMTUgLDEgKScsXHJcbiAgICAgICAgICAgICAgICAgICAgJ3JnYmEoMCwxMjAsMjE1ICwxICknLFxyXG4gICAgICAgICAgICAgICAgICAgICdyZ2JhKDAsMTIwLDIxNSAsMSApJyxcclxuICAgICAgICAgICAgICAgICAgICAncmdiYSgwLDEyMCwyMTUgLDEgKScsXHJcbiAgICAgICAgICAgICAgICAgICAgJ3JnYmEoMCwxMjAsMjE1ICwxICknLFxyXG4gICAgICAgICAgICAgICAgICAgICdyZ2JhKDAsMTIwLDIxNSAsMSApJyxcclxuICAgICAgICAgICAgICAgICAgICAncmdiYSgwLDEyMCwyMTUgLDEgKScsXHJcbiAgICAgICAgICAgICAgICAgICAgJ3JnYmEoMCwxMjAsMjE1ICwxICknLFxyXG4gICAgICAgICAgICAgICAgICAgICdyZ2JhKDAsMTIwLDIxNSAsMSApJyxcclxuICAgICAgICAgICAgICAgICAgICAncmdiYSgwLDEyMCwyMTUgLDEgKScsXHJcbiAgICAgICAgICAgICAgICAgIF07XHJcblxyXG4gICAgICAgICAgICBjb25zdCBjb2xvcnMzID1cclxuICAgICAgICAgICAgICBmaWVsZC5jaGFydFR5cGUgPT0gJ1BpZSBjaGFydCcgfHwgZmllbGQuY2hhcnRUeXBlID09ICdEb3VnaG51dCBjaGFydCdcclxuICAgICAgICAgICAgICAgID8gW1xyXG4gICAgICAgICAgICAgICAgICAgICdyZ2JhKDIwNSwyMjAsNTcsMSknLFxyXG4gICAgICAgICAgICAgICAgICAgICdyZ2JhKDI1NSwyMzUsNTksMSknLFxyXG4gICAgICAgICAgICAgICAgICAgICdyZ2JhKDI1NSwxOTMsNywxKScsXHJcbiAgICAgICAgICAgICAgICAgICAgJ3JnYmEoMjU1LDE1MiwwLDEpJyxcclxuICAgICAgICAgICAgICAgICAgICAncmdiYSgyNTUsODcsMzQsMSknLFxyXG4gICAgICAgICAgICAgICAgICAgICdyZ2JhKDI0NCw2Nyw1NCwxKScsXHJcbiAgICAgICAgICAgICAgICAgICAgJ3JnYmEoMjMzLDMwLDk5LDEpJyxcclxuICAgICAgICAgICAgICAgICAgICAncmdiYSgxNTYsMzksMTc2LDEpJyxcclxuICAgICAgICAgICAgICAgICAgICAncmdiYSgxMDMsNTgsMTgzLDEpJyxcclxuICAgICAgICAgICAgICAgICAgICAncmdiYSg2Myw4MSwxODEsMSknLFxyXG4gICAgICAgICAgICAgICAgICAgICdyZ2JhKDk2LDEyNSwxMzksMSknLFxyXG4gICAgICAgICAgICAgICAgICAgICdyZ2JhKDEyMSw4NSw3MiwxKScsXHJcbiAgICAgICAgICAgICAgICAgIF1cclxuICAgICAgICAgICAgICAgIDogZmllbGQuY2hhcnRUeXBlID09ICdMaW5lIGNoYXJ0JyB8fCBmaWVsZC5jaGFydFR5cGUgPT0gJ0FyZWEgY2hhcnQnXHJcbiAgICAgICAgICAgICAgICA/ICdyZ2JhKDIzMSw3Miw4NiAsMSApJ1xyXG4gICAgICAgICAgICAgICAgOiBbXHJcbiAgICAgICAgICAgICAgICAgICAgJ3JnYmEoMjMxLDcyLDg2ICwxICknLFxyXG4gICAgICAgICAgICAgICAgICAgICdyZ2JhKDIzMSw3Miw4NiAsMSApJyxcclxuICAgICAgICAgICAgICAgICAgICAncmdiYSgyMzEsNzIsODYgLDEgKScsXHJcbiAgICAgICAgICAgICAgICAgICAgJ3JnYmEoMjMxLDcyLDg2ICwxICknLFxyXG4gICAgICAgICAgICAgICAgICAgICdyZ2JhKDIzMSw3Miw4NiAsMSApJyxcclxuICAgICAgICAgICAgICAgICAgICAncmdiYSgyMzEsNzIsODYgLDEgKScsXHJcbiAgICAgICAgICAgICAgICAgICAgJ3JnYmEoMjMxLDcyLDg2ICwxICknLFxyXG4gICAgICAgICAgICAgICAgICAgICdyZ2JhKDIzMSw3Miw4NiAsMSApJyxcclxuICAgICAgICAgICAgICAgICAgICAncmdiYSgyMzEsNzIsODYgLDEgKScsXHJcbiAgICAgICAgICAgICAgICAgICAgJ3JnYmEoMjMxLDcyLDg2ICwxICknLFxyXG4gICAgICAgICAgICAgICAgICAgICdyZ2JhKDIzMSw3Miw4NiAsMSApJyxcclxuICAgICAgICAgICAgICAgICAgICAncmdiYSgyMzEsNzIsODYgLDEgKScsXHJcbiAgICAgICAgICAgICAgICAgIF07XHJcblxyXG4gICAgICAgICAgICBjb25zdCBjb2xvcnM0ID1cclxuICAgICAgICAgICAgICBmaWVsZC5jaGFydFR5cGUgPT0gJ1BpZSBjaGFydCcgfHwgZmllbGQuY2hhcnRUeXBlID09ICdEb3VnaG51dCBjaGFydCdcclxuICAgICAgICAgICAgICAgID8gW1xyXG4gICAgICAgICAgICAgICAgICAgICdyZ2JhKDIwNSwyMjAsNTcsMSknLFxyXG4gICAgICAgICAgICAgICAgICAgICdyZ2JhKDI1NSwyMzUsNTksMSknLFxyXG4gICAgICAgICAgICAgICAgICAgICdyZ2JhKDI1NSwxOTMsNywxKScsXHJcbiAgICAgICAgICAgICAgICAgICAgJ3JnYmEoMjU1LDE1MiwwLDEpJyxcclxuICAgICAgICAgICAgICAgICAgICAncmdiYSgyNTUsODcsMzQsMSknLFxyXG4gICAgICAgICAgICAgICAgICAgICdyZ2JhKDI0NCw2Nyw1NCwxKScsXHJcbiAgICAgICAgICAgICAgICAgICAgJ3JnYmEoMjMzLDMwLDk5LDEpJyxcclxuICAgICAgICAgICAgICAgICAgICAncmdiYSgxNTYsMzksMTc2LDEpJyxcclxuICAgICAgICAgICAgICAgICAgICAncmdiYSgxMDMsNTgsMTgzLDEpJyxcclxuICAgICAgICAgICAgICAgICAgICAncmdiYSg2Myw4MSwxODEsMSknLFxyXG4gICAgICAgICAgICAgICAgICAgICdyZ2JhKDk2LDEyNSwxMzksMSknLFxyXG4gICAgICAgICAgICAgICAgICAgICdyZ2JhKDEyMSw4NSw3MiwxKScsXHJcbiAgICAgICAgICAgICAgICAgIF1cclxuICAgICAgICAgICAgICAgIDogZmllbGQuY2hhcnRUeXBlID09ICdMaW5lIGNoYXJ0JyB8fCBmaWVsZC5jaGFydFR5cGUgPT0gJ0FyZWEgY2hhcnQnXHJcbiAgICAgICAgICAgICAgICA/ICdyZ2JhKDEyNiwxMTUsOTUgLDEgKSdcclxuICAgICAgICAgICAgICAgIDogW1xyXG4gICAgICAgICAgICAgICAgICAgICdyZ2JhKDEyNiwxMTUsOTUgLDEgKScsXHJcbiAgICAgICAgICAgICAgICAgICAgJ3JnYmEoMTI2LDExNSw5NSAsMSApJyxcclxuICAgICAgICAgICAgICAgICAgICAncmdiYSgxMjYsMTE1LDk1ICwxICknLFxyXG4gICAgICAgICAgICAgICAgICAgICdyZ2JhKDEyNiwxMTUsOTUgLDEgKScsXHJcbiAgICAgICAgICAgICAgICAgICAgJ3JnYmEoMTI2LDExNSw5NSAsMSApJyxcclxuICAgICAgICAgICAgICAgICAgICAncmdiYSgxMjYsMTE1LDk1ICwxICknLFxyXG4gICAgICAgICAgICAgICAgICAgICdyZ2JhKDEyNiwxMTUsOTUgLDEgKScsXHJcbiAgICAgICAgICAgICAgICAgICAgJ3JnYmEoMTI2LDExNSw5NSAsMSApJyxcclxuICAgICAgICAgICAgICAgICAgICAncmdiYSgxMjYsMTE1LDk1ICwxICknLFxyXG4gICAgICAgICAgICAgICAgICAgICdyZ2JhKDEyNiwxMTUsOTUgLDEgKScsXHJcbiAgICAgICAgICAgICAgICAgICAgJ3JnYmEoMTI2LDExNSw5NSAsMSApJyxcclxuICAgICAgICAgICAgICAgICAgICAncmdiYSgxMjYsMTE1LDk1ICwxICknLFxyXG4gICAgICAgICAgICAgICAgICBdO1xyXG5cclxuICAgICAgICAgICAgY29uc3QgY29sb3JzNSA9XHJcbiAgICAgICAgICAgICAgZmllbGQuY2hhcnRUeXBlID09ICdQaWUgY2hhcnQnIHx8IGZpZWxkLmNoYXJ0VHlwZSA9PSAnRG91Z2hudXQgY2hhcnQnXHJcbiAgICAgICAgICAgICAgICA/IFtcclxuICAgICAgICAgICAgICAgICAgICAncmdiYSgyMDUsMjIwLDU3LDEpJyxcclxuICAgICAgICAgICAgICAgICAgICAncmdiYSgyNTUsMjM1LDU5LDEpJyxcclxuICAgICAgICAgICAgICAgICAgICAncmdiYSgyNTUsMTkzLDcsMSknLFxyXG4gICAgICAgICAgICAgICAgICAgICdyZ2JhKDI1NSwxNTIsMCwxKScsXHJcbiAgICAgICAgICAgICAgICAgICAgJ3JnYmEoMjU1LDg3LDM0LDEpJyxcclxuICAgICAgICAgICAgICAgICAgICAncmdiYSgyNDQsNjcsNTQsMSknLFxyXG4gICAgICAgICAgICAgICAgICAgICdyZ2JhKDIzMywzMCw5OSwxKScsXHJcbiAgICAgICAgICAgICAgICAgICAgJ3JnYmEoMTU2LDM5LDE3NiwxKScsXHJcbiAgICAgICAgICAgICAgICAgICAgJ3JnYmEoMTAzLDU4LDE4MywxKScsXHJcbiAgICAgICAgICAgICAgICAgICAgJ3JnYmEoNjMsODEsMTgxLDEpJyxcclxuICAgICAgICAgICAgICAgICAgICAncmdiYSg5NiwxMjUsMTM5LDEpJyxcclxuICAgICAgICAgICAgICAgICAgICAncmdiYSgxMjEsODUsNzIsMSknLFxyXG4gICAgICAgICAgICAgICAgICBdXHJcbiAgICAgICAgICAgICAgICA6IGZpZWxkLmNoYXJ0VHlwZSA9PSAnTGluZSBjaGFydCcgfHwgZmllbGQuY2hhcnRUeXBlID09ICdBcmVhIGNoYXJ0J1xyXG4gICAgICAgICAgICAgICAgPyAncmdiYSgxNzcsNzAsMTk0ICwxICknXHJcbiAgICAgICAgICAgICAgICA6IFtcclxuICAgICAgICAgICAgICAgICAgICAncmdiYSgxNzcsNzAsMTk0ICwxICknLFxyXG4gICAgICAgICAgICAgICAgICAgICdyZ2JhKDE3Nyw3MCwxOTQgLDEgKScsXHJcbiAgICAgICAgICAgICAgICAgICAgJ3JnYmEoMTc3LDcwLDE5NCAsMSApJyxcclxuICAgICAgICAgICAgICAgICAgICAncmdiYSgxNzcsNzAsMTk0ICwxICknLFxyXG4gICAgICAgICAgICAgICAgICAgICdyZ2JhKDE3Nyw3MCwxOTQgLDEgKScsXHJcbiAgICAgICAgICAgICAgICAgICAgJ3JnYmEoMTc3LDcwLDE5NCAsMSApJyxcclxuICAgICAgICAgICAgICAgICAgICAncmdiYSgxNzcsNzAsMTk0ICwxICknLFxyXG4gICAgICAgICAgICAgICAgICAgICdyZ2JhKDE3Nyw3MCwxOTQgLDEgKScsXHJcbiAgICAgICAgICAgICAgICAgICAgJ3JnYmEoMTc3LDcwLDE5NCAsMSApJyxcclxuICAgICAgICAgICAgICAgICAgICAncmdiYSgxNzcsNzAsMTk0ICwxICknLFxyXG4gICAgICAgICAgICAgICAgICAgICdyZ2JhKDE3Nyw3MCwxOTQgLDEgKScsXHJcbiAgICAgICAgICAgICAgICAgICAgJ3JnYmEoMTc3LDcwLDE5NCAsMSApJyxcclxuICAgICAgICAgICAgICAgICAgXTtcclxuICAgICAgICAgICAgY29uc3QgZGF0YSA9IHtcclxuICAgICAgICAgICAgICBsYWJlbHM6IGZpZWxkLmxhYmVscyAmJiBbXHJcbiAgICAgICAgICAgICAgICAuLi5maWVsZC5sYWJlbHMubWFwKChsYWJlbCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICBpZiAobGFiZWwgIT09ICcnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGxhYmVsO1xyXG4gICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAnJztcclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSksXHJcbiAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICBkYXRhc2V0czogW1xyXG4gICAgICAgICAgICAgICAgLy8gRGF0YXNldDFcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgbGFiZWw6IGZpZWxkLmRhdGFzZXQxTGFiZWwgJiYgZmllbGQuZGF0YXNldDFMYWJlbCxcclxuICAgICAgICAgICAgICAgICAgZGF0YTpcclxuICAgICAgICAgICAgICAgICAgICBmaWVsZC5kYXRhc2V0MSAmJlxyXG4gICAgICAgICAgICAgICAgICAgIGZpZWxkLmRhdGFzZXQxLm1hcCgoZGF0YSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgaWYgKGRhdGEgIT09ICcnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBkYXRhO1xyXG4gICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH0pLFxyXG4gICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IGNvbG9ycyxcclxuICAgICAgICAgICAgICAgICAgYm9yZGVyV2lkdGg6XHJcbiAgICAgICAgICAgICAgICAgICAgZmllbGQuY2hhcnRUeXBlID09ICdBcmVhIGNoYXJ0JyA/IDAgOiBmaWVsZC5jaGFydFR5cGUgPT0gJ1BpZSBjaGFydCcgfHwgKGZpZWxkLmNoYXJ0VHlwZSA9PSAnRG91Z2hudXQgY2hhcnQnICYmIDIpLFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIC8vIERhdGFzZXQyXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgIGxhYmVsOiBmaWVsZC5kYXRhc2V0MkxhYmVsICYmIGZpZWxkLmRhdGFzZXQyTGFiZWwsXHJcbiAgICAgICAgICAgICAgICAgIGRhdGE6XHJcbiAgICAgICAgICAgICAgICAgICAgZmllbGQuZGF0YXNldDIgJiZcclxuICAgICAgICAgICAgICAgICAgICBmaWVsZC5kYXRhc2V0Mi5tYXAoKGRhdGEpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgIGlmIChkYXRhICE9PSAnJykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZGF0YTtcclxuICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9KSxcclxuICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBjb2xvcnMxLFxyXG4gICAgICAgICAgICAgICAgICBib3JkZXJXaWR0aDpcclxuICAgICAgICAgICAgICAgICAgICBmaWVsZC5jaGFydFR5cGUgPT0gJ0FyZWEgY2hhcnQnID8gMCA6IGZpZWxkLmNoYXJ0VHlwZSA9PSAnUGllIGNoYXJ0JyB8fCAoZmllbGQuY2hhcnRUeXBlID09ICdEb3VnaG51dCBjaGFydCcgJiYgMiksXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgLy8gRGF0YXNldDNcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgbGFiZWw6IGZpZWxkLmRhdGFzZXQzTGFiZWwgJiYgZmllbGQuZGF0YXNldDNMYWJlbCxcclxuICAgICAgICAgICAgICAgICAgZGF0YTpcclxuICAgICAgICAgICAgICAgICAgICBmaWVsZC5kYXRhc2V0MyAmJlxyXG4gICAgICAgICAgICAgICAgICAgIGZpZWxkLmRhdGFzZXQzLm1hcCgoZGF0YSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgaWYgKGRhdGEgIT09ICcnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBkYXRhO1xyXG4gICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH0pLFxyXG4gICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IGNvbG9yczIsXHJcbiAgICAgICAgICAgICAgICAgIGJvcmRlcldpZHRoOlxyXG4gICAgICAgICAgICAgICAgICAgIGZpZWxkLmNoYXJ0VHlwZSA9PSAnQXJlYSBjaGFydCcgPyAwIDogZmllbGQuY2hhcnRUeXBlID09ICdQaWUgY2hhcnQnIHx8IChmaWVsZC5jaGFydFR5cGUgPT0gJ0RvdWdobnV0IGNoYXJ0JyAmJiAyKSxcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAvLyBEYXRhc2V0NFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICBsYWJlbDogZmllbGQuZGF0YXNldDRMYWJlbCAmJiBmaWVsZC5kYXRhc2V0NExhYmVsLFxyXG4gICAgICAgICAgICAgICAgICBkYXRhOlxyXG4gICAgICAgICAgICAgICAgICAgIGZpZWxkLmRhdGFzZXQ0ICYmXHJcbiAgICAgICAgICAgICAgICAgICAgZmllbGQuZGF0YXNldDQubWFwKChkYXRhKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICBpZiAoZGF0YSAhPT0gJycpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGRhdGE7XHJcbiAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSksXHJcbiAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogY29sb3JzMyxcclxuICAgICAgICAgICAgICAgICAgYm9yZGVyV2lkdGg6XHJcbiAgICAgICAgICAgICAgICAgICAgZmllbGQuY2hhcnRUeXBlID09ICdBcmVhIGNoYXJ0JyA/IDAgOiBmaWVsZC5jaGFydFR5cGUgPT0gJ1BpZSBjaGFydCcgfHwgKGZpZWxkLmNoYXJ0VHlwZSA9PSAnRG91Z2hudXQgY2hhcnQnICYmIDIpLFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIC8vIERhdGFzZXQ1XHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgIGxhYmVsOiBmaWVsZC5kYXRhc2V0NUxhYmVsICYmIGZpZWxkLmRhdGFzZXQ1TGFiZWwsXHJcbiAgICAgICAgICAgICAgICAgIGRhdGE6XHJcbiAgICAgICAgICAgICAgICAgICAgZmllbGQuZGF0YXNldDUgJiZcclxuICAgICAgICAgICAgICAgICAgICBmaWVsZC5kYXRhc2V0NS5tYXAoKGRhdGEpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgIGlmIChkYXRhICE9PSAnJykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZGF0YTtcclxuICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9KSxcclxuICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBjb2xvcnM0LFxyXG4gICAgICAgICAgICAgICAgICBib3JkZXJXaWR0aDpcclxuICAgICAgICAgICAgICAgICAgICBmaWVsZC5jaGFydFR5cGUgPT0gJ0FyZWEgY2hhcnQnID8gMCA6IGZpZWxkLmNoYXJ0VHlwZSA9PSAnUGllIGNoYXJ0JyB8fCAoZmllbGQuY2hhcnRUeXBlID09ICdEb3VnaG51dCBjaGFydCcgJiYgMiksXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgLy8gRGF0YXNldDZcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgbGFiZWw6IGZpZWxkLmRhdGFzZXQ2TGFiZWwgJiYgZmllbGQuZGF0YXNldDZMYWJlbCxcclxuICAgICAgICAgICAgICAgICAgZGF0YTpcclxuICAgICAgICAgICAgICAgICAgICBmaWVsZC5kYXRhc2V0NiAmJlxyXG4gICAgICAgICAgICAgICAgICAgIGZpZWxkLmRhdGFzZXQ2Lm1hcCgoZGF0YSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgaWYgKGRhdGEgIT09ICcnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBkYXRhO1xyXG4gICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH0pLFxyXG4gICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IGNvbG9yczUsXHJcbiAgICAgICAgICAgICAgICAgIGJvcmRlcldpZHRoOlxyXG4gICAgICAgICAgICAgICAgICAgIGZpZWxkLmNoYXJ0VHlwZSA9PSAnQXJlYSBjaGFydCcgPyAwIDogZmllbGQuY2hhcnRUeXBlID09ICdQaWUgY2hhcnQnIHx8IChmaWVsZC5jaGFydFR5cGUgPT0gJ0RvdWdobnV0IGNoYXJ0JyAmJiAyKSxcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IGRhdGFzID0gZGF0YS5kYXRhc2V0cy5tYXAoKGRhdGFzZXQpID0+IHtcclxuICAgICAgICAgICAgICBjb25zb2xlLmxvZyhkYXRhc2V0LmRhdGFbMF0pO1xyXG4gICAgICAgICAgICAgIGNvbnN0IHRlc3QxID0gZGF0YXNldC5kYXRhLm1hcCgoZGF0YXNlcykgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKGRhdGFzZXMgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgICByZXR1cm4gZGF0YXNlcztcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgIHJldHVybiAnJztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICBjb25zdCB0ZXN0ID0gdGVzdDEubWFwKChkYXRhcmVyLCBpbmRleCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKGRhdGEubGFiZWxzW2luZGV4XSAhPT0gJycpIHtcclxuICAgICAgICAgICAgICAgICAgcmV0dXJuIGRhdGFyZXI7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgY29uc3QgdGVzdDIgPSB0ZXN0LmZpbHRlcigob2JqKSA9PiBvYmogIT09IHVuZGVmaW5lZCk7XHJcbiAgICAgICAgICAgICAgcmV0dXJuIHRlc3QyO1xyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IGZpbGwgPSBmaWVsZC5jaGFydFR5cGUgPT0gJ0xpbmUgY2hhcnQnID8gZmFsc2UgOiB1bmRlZmluZWQ7XHJcblxyXG4gICAgICAgICAgICBjb25zdCBuZXdEYXRhc2V0cyA9IFtcclxuICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBsYWJlbDogZGF0YS5kYXRhc2V0c1swXS5sYWJlbCxcclxuICAgICAgICAgICAgICAgIGRhdGE6IGRhdGFzWzBdLFxyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBkYXRhLmRhdGFzZXRzWzBdLmJhY2tncm91bmRDb2xvcixcclxuICAgICAgICAgICAgICAgIGJvcmRlckNvbG9yOiBmaWVsZC5jaGFydFR5cGUgPT0gJ0xpbmUgY2hhcnQnID8gJ3JnYmEoMjU1LDE4NSwwICwxICknIDogJ3JnYigyNTUsIDI1NSwgMjU1KScsXHJcbiAgICAgICAgICAgICAgICBib3JkZXJXaWR0aDogZGF0YS5kYXRhc2V0c1swXS5ib3JkZXJXaWR0aCxcclxuICAgICAgICAgICAgICAgIGZpbGw6IGZpbGwsXHJcbiAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBsYWJlbDogZGF0YS5kYXRhc2V0c1sxXS5sYWJlbCxcclxuICAgICAgICAgICAgICAgIGRhdGE6IGRhdGFzWzFdLFxyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBkYXRhLmRhdGFzZXRzWzFdLmJhY2tncm91bmRDb2xvcixcclxuICAgICAgICAgICAgICAgIGJvcmRlckNvbG9yOiBmaWVsZC5jaGFydFR5cGUgPT0gJ0xpbmUgY2hhcnQnID8gJ3JnYmEoMCwyMDQsMTA2ICwxICknIDogJ3JnYigyNTUsIDI1NSwgMjU1KScsXHJcbiAgICAgICAgICAgICAgICBib3JkZXJXaWR0aDogZGF0YS5kYXRhc2V0c1sxXS5ib3JkZXJXaWR0aCxcclxuICAgICAgICAgICAgICAgIGZpbGw6IGZpbGwsXHJcbiAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBsYWJlbDogZGF0YS5kYXRhc2V0c1syXS5sYWJlbCxcclxuICAgICAgICAgICAgICAgIGRhdGE6IGRhdGFzWzJdLFxyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBkYXRhLmRhdGFzZXRzWzJdLmJhY2tncm91bmRDb2xvcixcclxuICAgICAgICAgICAgICAgIGJvcmRlckNvbG9yOiBmaWVsZC5jaGFydFR5cGUgPT0gJ0xpbmUgY2hhcnQnID8gJ3JnYmEoMCwxMjAsMjE1ICwxICknIDogJ3JnYigyNTUsIDI1NSwgMjU1KScsXHJcbiAgICAgICAgICAgICAgICBib3JkZXJXaWR0aDogZGF0YS5kYXRhc2V0c1syXS5ib3JkZXJXaWR0aCxcclxuICAgICAgICAgICAgICAgIGZpbGw6IGZpbGwsXHJcbiAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBsYWJlbDogZGF0YS5kYXRhc2V0c1szXS5sYWJlbCxcclxuICAgICAgICAgICAgICAgIGRhdGE6IGRhdGFzWzNdLFxyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBkYXRhLmRhdGFzZXRzWzNdLmJhY2tncm91bmRDb2xvcixcclxuICAgICAgICAgICAgICAgIGJvcmRlckNvbG9yOiBmaWVsZC5jaGFydFR5cGUgPT0gJ0xpbmUgY2hhcnQnID8gJ3JnYmEoMjMxLDcyLDg2ICwxICknIDogJ3JnYigyNTUsIDI1NSwgMjU1KScsXHJcbiAgICAgICAgICAgICAgICBib3JkZXJXaWR0aDogZGF0YS5kYXRhc2V0c1szXS5ib3JkZXJXaWR0aCxcclxuICAgICAgICAgICAgICAgIGZpbGw6IGZpbGwsXHJcbiAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBsYWJlbDogZGF0YS5kYXRhc2V0c1s0XS5sYWJlbCxcclxuICAgICAgICAgICAgICAgIGRhdGE6IGRhdGFzWzRdLFxyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBkYXRhLmRhdGFzZXRzWzRdLmJhY2tncm91bmRDb2xvcixcclxuICAgICAgICAgICAgICAgIGJvcmRlckNvbG9yOiBmaWVsZC5jaGFydFR5cGUgPT0gJ0xpbmUgY2hhcnQnID8gJ3JnYmEoMTI2LDExNSw5NSAsMSApJyA6ICdyZ2IoMjU1LCAyNTUsIDI1NSknLFxyXG4gICAgICAgICAgICAgICAgYm9yZGVyV2lkdGg6IGRhdGEuZGF0YXNldHNbNF0uYm9yZGVyV2lkdGgsXHJcbiAgICAgICAgICAgICAgICBmaWxsOiBmaWxsLFxyXG4gICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgbGFiZWw6IGRhdGEuZGF0YXNldHNbNV0ubGFiZWwsXHJcbiAgICAgICAgICAgICAgICBkYXRhOiBkYXRhc1s1XSxcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogZGF0YS5kYXRhc2V0c1s1XS5iYWNrZ3JvdW5kQ29sb3IsXHJcbiAgICAgICAgICAgICAgICBib3JkZXJDb2xvcjogZmllbGQuY2hhcnRUeXBlID09ICdMaW5lIGNoYXJ0JyA/ICdyZ2JhKDE3Nyw3MCwxOTQgLDEgKScgOiAncmdiKDI1NSwgMjU1LCAyNTUpJyxcclxuICAgICAgICAgICAgICAgIGJvcmRlcldpZHRoOiBkYXRhLmRhdGFzZXRzWzVdLmJvcmRlcldpZHRoLFxyXG4gICAgICAgICAgICAgICAgZmlsbDogZmlsbCxcclxuICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBdO1xyXG5cclxuICAgICAgICAgICAgY29uc3QgY2hhcnRUeXBlID0gW1xyXG4gICAgICAgICAgICAgIGZpZWxkLmNoYXJ0VHlwZSA9PSAnQmFyIGNoYXJ0JyA/ICdiYXInIDogJycsXHJcbiAgICAgICAgICAgICAgZmllbGQuY2hhcnRUeXBlID09ICdSZXZlcnNlIGNoYXJ0JyA/ICdob3Jpem9udGFsQmFyJyA6ICcnLFxyXG4gICAgICAgICAgICAgIGZpZWxkLmNoYXJ0VHlwZSA9PSAnTGluZSBjaGFydCcgPyAnbGluZScgOiAnJyxcclxuICAgICAgICAgICAgICBmaWVsZC5jaGFydFR5cGUgPT0gJ1BpZSBjaGFydCcgPyAncGllJyA6ICcnLFxyXG4gICAgICAgICAgICAgIGZpZWxkLmNoYXJ0VHlwZSA9PSAnRG91Z2hudXQgY2hhcnQnID8gJ2RvdWdobnV0JyA6ICcnLFxyXG4gICAgICAgICAgICAgIGZpZWxkLmNoYXJ0VHlwZSA9PSAnQXJlYSBjaGFydCcgPyAnbGluZScgOiAnJyxcclxuICAgICAgICAgICAgXTtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IHRvU2F2ZUNoYXJ0ID0gbmV3IENoYXJ0SnNJbWFnZSgpO1xyXG4gICAgICAgICAgICB0b1NhdmVDaGFydC5zZXRDb25maWcoe1xyXG4gICAgICAgICAgICAgIHR5cGU6IGNoYXJ0VHlwZS5maWx0ZXIoKHR5cGUpID0+IHR5cGUgIT09ICcnKSxcclxuICAgICAgICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICAgICAgICBsYWJlbHM6IGRhdGEubGFiZWxzLmZpbHRlcigobGFiZWwpID0+IGxhYmVsICE9PSAnJyksXHJcbiAgICAgICAgICAgICAgICBkYXRhc2V0czogbmV3RGF0YXNldHMuZmlsdGVyKChkYXRhc2V0KSA9PiBkYXRhc2V0LmxhYmVsICE9PSAnJyksXHJcbiAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICBvcHRpb25zOiB7XHJcbiAgICAgICAgICAgICAgICByZXNwb25zaXZlOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgbGVnZW5kOiB7XHJcbiAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiAnYm90dG9tJyxcclxuICAgICAgICAgICAgICAgICAgbGFiZWxzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgYm94V2lkdGg6IDMwLFxyXG4gICAgICAgICAgICAgICAgICAgIGJveEhlaWdodDogNSxcclxuICAgICAgICAgICAgICAgICAgICBmb250RmFtaWx5OiAnQ29tZm9ydGFhJyxcclxuICAgICAgICAgICAgICAgICAgICBmb250U2l6ZTogMTIsXHJcbiAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgLy8gZGVmYXVsdEZvbnRGYW1pbHk6IChDaGFydC5kZWZhdWx0cy5nbG9iYWwuZGVmYXVsdEZvbnRGYW1pbHkgPSAnQ29tZm9ydGFhJyksXHJcbiAgICAgICAgICAgICAgICBzY2FsZXM6IHtcclxuICAgICAgICAgICAgICAgICAgeUF4ZXM6IFtcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICBzdGFja2VkOiBmaWVsZC5zdGFja2VkID09IHRydWUgPyB0cnVlIDogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgICB0aWNrczoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBiZWdpbkF0WmVybzogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udEZhbWlseTogJ0NvbWZvcnRhYScsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnRTaXplOiAxMCxcclxuICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgICAgeEF4ZXM6IFtcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICBzdGFja2VkOiBmaWVsZC5zdGFja2VkID09IHRydWUgPyB0cnVlIDogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgICB0aWNrczoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBiZWdpbkF0WmVybzogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udEZhbWlseTogJ0NvbWZvcnRhYScsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnRTaXplOiAxMCxcclxuICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICB0b1NhdmVDaGFydC5zZXRGb3JtYXQoJ3BuZycpLnNldERldmljZVBpeGVsUmF0aW8oMy4wKS5zZXRCYWNrZ3JvdW5kQ29sb3IoJyNmOGY5ZmInKTtcclxuICAgICAgICAgICAgY29uc3QgaW1hZ2VVcmwgPSB0b1NhdmVDaGFydC50b0RhdGFVcmwoKTtcclxuICAgICAgICAgICAgaW1hZ2VVcmwudGhlbigoaW1hZ2UpID0+IHtcclxuICAgICAgICAgICAgICBjb25zb2xlLmxvZyhpbWFnZSk7XHJcbiAgICAgICAgICAgICAgaW1hZ2VzQXJyYXkucHVzaCh7IGltYWdlVXJsOiBpbWFnZSwgaW1hZ2VJbmRleDogZmllbGQuaW5kZXggfSk7XHJcbiAgICAgICAgICAgICAgY29uc29sZS5sb2coaW1hZ2VzQXJyYXkpO1xyXG4gICAgICAgICAgICAgIHNldEltYWdlc1VybChpbWFnZXNBcnJheSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9KTtcclxuICB9LCBbc2VjdGlvbnNdKTtcclxuXHJcbiAgY29uc29sZS5sb2coaW1hZ2VzVXJsKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgcmVmPXtzYXZlQ29udGFpbmVyfSBjbGFzc05hbWU9XCJyZWxhdGl2ZSBmbGV4IGp1c3RpZnktc3RhcnRcIj5cclxuICAgICAge3NpemUud2lkdGggPCA2ODAgPyAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IG10LTRcIj5cclxuICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgb25DbGljaz17YXN5bmMgKGUpID0+IHtcclxuICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgICAgY29uc3QgZG9jID0gKFxyXG4gICAgICAgICAgICAgICAgPE15RG9jdW1lbnRcclxuICAgICAgICAgICAgICAgICAgaW1hZ2U9e2ltYWdlVXJsfVxyXG4gICAgICAgICAgICAgICAgICBkYXRhPXtkYXRhfVxyXG4gICAgICAgICAgICAgICAgICBwZXJpb2RzPXtwZXJpb2RzfVxyXG4gICAgICAgICAgICAgICAgICByZXZlbnVlRWxlbWVudHM9e3JldmVudWVFbGVtZW50c31cclxuICAgICAgICAgICAgICAgICAgY29zdHNFbGVtZW50cz17Y29zdHNFbGVtZW50c31cclxuICAgICAgICAgICAgICAgICAgdGF4PXt0YXh9XHJcbiAgICAgICAgICAgICAgICAgIHRvdGFsUmV2ZW51ZT17dG90YWxSZXZlbnVlfVxyXG4gICAgICAgICAgICAgICAgICBtb250aGx5UmV2ZW51ZT17bW9udGhseVJldmVudWV9XHJcbiAgICAgICAgICAgICAgICAgIHRvdGFsQ29zdHM9e3RvdGFsQ29zdHN9XHJcbiAgICAgICAgICAgICAgICAgIG1vbnRobHlDb3N0cz17bW9udGhseUNvc3RzfVxyXG4gICAgICAgICAgICAgICAgICBncm9zc1Byb2ZpdD17Z3Jvc3NQcm9maXR9XHJcbiAgICAgICAgICAgICAgICAgIG5ldFByb2ZpdD17bmV0UHJvZml0fVxyXG4gICAgICAgICAgICAgICAgICBzdGFydERhdGU9e3N0YXJ0RGF0ZX1cclxuICAgICAgICAgICAgICAgICAgZW5kRGF0ZT17ZW5kRGF0ZX1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICBjb25zdCBhc1BkZiA9IHBkZihbXSk7IC8vIHt9IGlzIGltcG9ydGFudCwgdGhyb3dzIHdpdGhvdXQgYW4gYXJndW1lbnRcclxuICAgICAgICAgICAgICBhc1BkZi51cGRhdGVDb250YWluZXIoZG9jKTtcclxuICAgICAgICAgICAgICBjb25zdCBibG9iID0gYXdhaXQgYXNQZGYudG9CbG9iKCk7XHJcbiAgICAgICAgICAgICAgc2F2ZUFzKGJsb2IsIGAke1JvdXRlci5xdWVyeS5wcm9qZWN0fS9jYXNoLWZsb3cucGRmYCk7XHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgIHNyYz1cIi9tb2JpbGUtbmF2YmFyL3BkZi5zdmdcIlxyXG4gICAgICAgICAgICBoZWlnaHQ9ezMwfVxyXG4gICAgICAgICAgICB3aWR0aD17MzB9XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICApIDogKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVsYXRpdmUgdy1mdWxsIGZsZXgganVzdGlmeS1lbmQgaXRlbXMtY2VudGVyXCI+XHJcbiAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgIHJlZj17ZHJvcGRvd25CdXR0b259XHJcbiAgICAgICAgICAgIG9uQ2xpY2s9e29uU2F2ZURyb3Bkb3duU2hvd31cclxuICAgICAgICAgICAgY2xhc3NOYW1lPXtgaG92ZXI6YmctcHJpbWFyeSBob3Zlcjp0ZXh0LXdoaXRlIGRhcms6aG92ZXI6YmctcHJpbWFyeWRhcmsgZGFyazpob3Zlcjp0ZXh0LWJhY2tncm91bmQgZm9jdXM6b3V0bGluZS1ub25lIGJvcmRlciBib3JkZXItcHJpbWFyeSB0ZXh0LXByaW1hcnkgdGV4dC1zbSBmb250LWxpZ2h0IHB5LTIgcHgtOCByb3VuZGVkLTJ4bCBtdC0yIGRhcms6dGV4dC1wcmltYXJ5ZGFyayBkYXJrOmJvcmRlci1wcmltYXJ5ZGFyayAke1xyXG4gICAgICAgICAgICAgIGRyb3Bkb3duQnV0dG9uQ29sb3JIZWxwZXIgPyAnYmctcHJpbWFyeSB0ZXh0LWJhY2tncm91bmQgZGFyazpiZy1wcmltYXJ5ZGFyayBkYXJrOnRleHQtYmFja2dyb3VuZCcgOiAnJ1xyXG4gICAgICAgICAgICB9YH1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgU2F2ZSBteSB3b3JrXHJcbiAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgIDxkaXYgcmVmPXtkcm9wZG93bkNvbnRhaW5lcn0gY2xhc3NOYW1lPVwiYWJzb2x1dGUgYmctd2hpdGUgcm91bmRlZC0yeGwgc2hhZG93LXhsIHAtNiB0b3AtMTQgei01MCBpbnZpc2libGUgb3BhY2l0eS0wXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1zdGFydFwiPlxyXG4gICAgICAgICAgICAgIDxpbWcgc3JjPVwiL21vYmlsZS1uYXZiYXIvc3VjY2Vzcy5zdmdcIiBoZWlnaHQ9ezI2fSB3aWR0aD17MjZ9IC8+XHJcbiAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1sZyBtbC0yXCI+U2hvdyB0aGUgd29ybGQgeW91ciB3b3JrITwvcD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHgtNiBweS00IGJnLWJhY2tncm91bmQgcm91bmRlZC0yeGwgbXQtMiBwci02XCI+XHJcbiAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImZsZXhcIj5TYXZlIGFzIFBERjo8L3A+XHJcbiAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2FzeW5jIChlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGRvYyA9IDxNeURvY3VtZW50IGltYWdlc1VybD17aW1hZ2VzVXJsfSBzZWN0aW9ucz17c2VjdGlvbnN9IC8+O1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGFzUGRmID0gcGRmKFtdKTtcclxuICAgICAgICAgICAgICAgICAgICBhc1BkZi51cGRhdGVDb250YWluZXIoZG9jKTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBibG9iID0gYXdhaXQgYXNQZGYudG9CbG9iKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgc2F2ZUFzKGJsb2IsIGAke1JvdXRlci5xdWVyeS5wcm9qZWN0fS9jb21wZXRpdG9ycy1hbmFseXNpcy5wZGZgKTtcclxuICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgc3JjPVwiL21vYmlsZS1uYXZiYXIvcGRmLnN2Z1wiXHJcbiAgICAgICAgICAgICAgICAgIGhlaWdodD17MzB9XHJcbiAgICAgICAgICAgICAgICAgIHdpZHRoPXszMH1cclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibXQtMiBjdXJzb3ItcG9pbnRlclwiXHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsIGp1c3RpZnktc3RhcnQgaXRlbXMtY2VudGVyIG10LTRcIj5cclxuICAgICAgICAgICAgICAgIDxwPlNoYXJlIHlvdXIgY29tcGV0aXRvcnMgYW5hbHlzaXMgd2l0aCB0aGlzIHB1YmxpYyBsaW5rOjwvcD5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsIGZsZXggbXQtMlwiPlxyXG4gICAgICAgICAgICAgICAgICA8aW5wdXQgdmFsdWU9XCJ3d3cucHJvamVjdC5jb21cIiBjbGFzc05hbWU9XCJiZy1saW5rQmFja2dyb3VuZCB0ZXh0LXNtIHB4LTIgcHktMSBkYXJrOnRleHQtcHJpbWFyeWRhcmtcIiAvPlxyXG4gICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIi9tb2JpbGUtbmF2YmFyL2ZvcmVpZ24uc3ZnXCIgaGVpZ2h0PXsyOH0gd2lkdGg9ezI4fSAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICl9XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgUmVhY3RQREZEb2N1bWVudDtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==