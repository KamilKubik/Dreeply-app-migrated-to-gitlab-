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
                                  lineNumber: 338,
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
                                    lineNumber: 352,
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
                                      lineNumber: 365,
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
                                        lineNumber: 376,
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
                                          lineNumber: 390,
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
                                            lineNumber: 404,
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
                                              lineNumber: 418,
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
                                                lineNumber: 432,
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
                                                  lineNumber: 448,
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
                                                    lineNumber: 462,
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
                      lineNumber: 476,
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
                        lineNumber: 487,
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
                          lineNumber: 498,
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
                            lineNumber: 509,
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
                              lineNumber: 522,
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
                                lineNumber: 533,
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
                                  lineNumber: 547,
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
                                    lineNumber: 561,
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
                                      lineNumber: 574,
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
                                        lineNumber: 585,
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
                                          lineNumber: 599,
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
                                            lineNumber: 613,
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
                                              lineNumber: 627,
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
                                                lineNumber: 641,
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
                                                  lineNumber: 657,
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
                                                    lineNumber: 671,
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
                      lineNumber: 685,
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
                        lineNumber: 696,
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
                          lineNumber: 707,
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
                            lineNumber: 718,
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
                              lineNumber: 731,
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
                                lineNumber: 742,
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
                                  lineNumber: 756,
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
                                    lineNumber: 770,
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
                                      lineNumber: 783,
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
                                        lineNumber: 794,
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
                                          lineNumber: 808,
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
                                            lineNumber: 822,
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
                                              lineNumber: 836,
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
                                                lineNumber: 850,
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
                                                  lineNumber: 866,
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
                                                    lineNumber: 880,
                                                    columnNumber: 29
                                                  }, _this);
                                                } // END --> <h1></h1>
                                                // -------------------- LISTS START --------------------
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
                                                            lineNumber: 915,
                                                            columnNumber: 35
                                                          }, _this)
                                                        }, void 0, false, {
                                                          fileName: _jsxFileName,
                                                          lineNumber: 914,
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
                                                              lineNumber: 929,
                                                              columnNumber: 35
                                                            }, _this)
                                                          }, void 0, false, {
                                                            fileName: _jsxFileName,
                                                            lineNumber: 928,
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
                                                                lineNumber: 946,
                                                                columnNumber: 35
                                                              }, _this)
                                                            }, void 0, false, {
                                                              fileName: _jsxFileName,
                                                              lineNumber: 945,
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
                                                                  lineNumber: 963,
                                                                  columnNumber: 35
                                                                }, _this)
                                                              }, void 0, false, {
                                                                fileName: _jsxFileName,
                                                                lineNumber: 962,
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
                                                                    lineNumber: 980,
                                                                    columnNumber: 35
                                                                  }, _this)
                                                                }, void 0, false, {
                                                                  fileName: _jsxFileName,
                                                                  lineNumber: 979,
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
                                                                      lineNumber: 997,
                                                                      columnNumber: 35
                                                                    }, _this)
                                                                  }, void 0, false, {
                                                                    fileName: _jsxFileName,
                                                                    lineNumber: 996,
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
                                                                        lineNumber: 1013,
                                                                        columnNumber: 35
                                                                      }, _this)
                                                                    }, void 0, false, {
                                                                      fileName: _jsxFileName,
                                                                      lineNumber: 1012,
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
                                                                          lineNumber: 1029,
                                                                          columnNumber: 35
                                                                        }, _this)
                                                                      }, void 0, false, {
                                                                        fileName: _jsxFileName,
                                                                        lineNumber: 1028,
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
                                                                            lineNumber: 1045,
                                                                            columnNumber: 35
                                                                          }, _this)
                                                                        }, void 0, false, {
                                                                          fileName: _jsxFileName,
                                                                          lineNumber: 1044,
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
                                                                              lineNumber: 1062,
                                                                              columnNumber: 35
                                                                            }, _this)
                                                                          }, void 0, false, {
                                                                            fileName: _jsxFileName,
                                                                            lineNumber: 1061,
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
                                                                                lineNumber: 1078,
                                                                                columnNumber: 35
                                                                              }, _this)
                                                                            }, void 0, false, {
                                                                              fileName: _jsxFileName,
                                                                              lineNumber: 1077,
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
                                                                                  lineNumber: 1095,
                                                                                  columnNumber: 35
                                                                                }, _this)
                                                                              }, void 0, false, {
                                                                                fileName: _jsxFileName,
                                                                                lineNumber: 1094,
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
                                                                                    lineNumber: 1111,
                                                                                    columnNumber: 35
                                                                                  }, _this)
                                                                                }, void 0, false, {
                                                                                  fileName: _jsxFileName,
                                                                                  lineNumber: 1110,
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
                                                                                      lineNumber: 1127,
                                                                                      columnNumber: 35
                                                                                    }, _this)
                                                                                  }, void 0, false, {
                                                                                    fileName: _jsxFileName,
                                                                                    lineNumber: 1126,
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
                                                                                        lineNumber: 1147,
                                                                                        columnNumber: 35
                                                                                      }, _this)
                                                                                    }, void 0, false, {
                                                                                      fileName: _jsxFileName,
                                                                                      lineNumber: 1146,
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
                                                                                          lineNumber: 1167,
                                                                                          columnNumber: 35
                                                                                        }, _this)
                                                                                      }, void 0, false, {
                                                                                        fileName: _jsxFileName,
                                                                                        lineNumber: 1166,
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
                      lineNumber: 1665,
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
        lineNumber: 1661,
        columnNumber: 11
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 1660,
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
        lineNumber: 1694,
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
            lineNumber: 1705,
            columnNumber: 15
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("p", {
            className: "text-lg ml-2",
            children: "Show the world your work!"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 1706,
            columnNumber: 15
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 1704,
          columnNumber: 13
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("div", {
          className: "px-6 py-4 bg-background rounded-2xl mt-2 pr-6",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("div", {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("p", {
              className: "flex",
              children: "Save as PDF:"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 1710,
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
                            lineNumber: 1714,
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
              lineNumber: 1711,
              columnNumber: 17
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 1709,
            columnNumber: 15
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("div", {
            className: "w-full justify-start items-center mt-4",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("p", {
              children: "Share your competitors analysis with this public link:"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 1727,
              columnNumber: 17
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("div", {
              className: "w-full flex mt-2",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("input", {
                value: "www.project.com",
                className: "bg-linkBackground text-sm px-2 py-1 dark:text-primarydark"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 1729,
                columnNumber: 19
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("img", {
                src: "/mobile-navbar/foreign.svg",
                height: 28,
                width: 28
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 1730,
                columnNumber: 19
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 1728,
              columnNumber: 17
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 1726,
            columnNumber: 15
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 1708,
          columnNumber: 13
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 1703,
        columnNumber: 11
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 1693,
      columnNumber: 9
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 1658,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9kYXNoYm9hcmQvc3RhcnR1cC9wcm9qZWN0L2J1c2luZXNzLWFwcC9SZWFjdFBERkRvY3VtZW50LmpzIl0sIm5hbWVzIjpbIkZvbnQiLCJyZWdpc3RlciIsInNyYyIsImZhbWlseSIsInN0eWxlcyIsIlN0eWxlU2hlZXQiLCJjcmVhdGUiLCJob21lUGFnZSIsInBhZGRpbmciLCJmb250RmFtaWx5IiwiYmFja2dyb3VuZENvbG9yIiwiY29sb3IiLCJtYWluVGl0bGUiLCJmb250U2l6ZSIsInRleHRBbGlnbiIsInRhYmxlIiwiZGlzcGxheSIsIndpZHRoIiwibWFyZ2luVG9wIiwidGFibGVIZWFkUm93IiwiZmxleERpcmVjdGlvbiIsImJvcmRlclRvcExlZnRSYWRpdXMiLCJib3JkZXJUb3BSaWdodFJhZGl1cyIsInRhYmxlUm93IiwidGFibGVDb2wiLCJ0YWJsZUhlYWRDZWxsIiwidGFibGVDZWxsIiwiYm9yZGVyTGVmdCIsInBhZGRpbmdMZWZ0IiwiTXlEb2N1bWVudCIsImltYWdlc1VybCIsInNlY3Rpb25zIiwiY29uc29sZSIsImxvZyIsIm1hcCIsInNlY3Rpb24iLCJtYXJnaW5Cb3R0b20iLCJ0aXRsZSIsImZpZWxkcyIsImZpZWxkIiwidHlwZSIsImhlYWRSb3dzIiwiaGVhZFJvdyIsImhlYWRSb3dzUXVhbnRpdHkiLCJsZW5ndGgiLCJyb3dzIiwicm93Iiwicm93TmFtZSIsIkJvZHlSb3dzUXVhbnRpdHkiLCJkb2MiLCJpbWFnZUluZGV4IiwiaW5kZXgiLCJpbWFnZVVybCIsImZvcm1hdHRlZFRleHQiLCIkIiwiYm9keSIsImFwcGVuZCIsImh0bWwiLCJyZXMiLCJ0b1N0cmluZyIsImluY2x1ZGVzIiwic3RhcnRzV2l0aCIsInJlcGxhY2UiLCJ0ZXh0RGVjb3JhdGlvbiIsImJlZm9yZUZvcm1hdHRlZCIsImFmdGVyRm9ybWF0dGVkIiwicmVzcG9uc2UiLCJzcGxpdCIsImkiLCJzdWJzdHJpbmciLCJrIiwiaXRlbSIsIm1hcmdpbkxlZnQiLCJSZWFjdFBERkRvY3VtZW50Iiwic2l6ZSIsInVzZVdpbmRvd1NpemUiLCJzYXZlQ29udGFpbmVyIiwidXNlUmVmIiwiZHJvcGRvd25CdXR0b24iLCJkcm9wZG93bkNvbnRhaW5lciIsInVzZVN0YXRlIiwiZHJvcGRvd25CdXR0b25Db2xvckhlbHBlciIsInNldERyb3Bkb3duQnV0dG9uQ29sb3JIZWxwZXIiLCJkcm9wZG93bkNvbnRhaW5lckhlbHBlciIsInNldERyb3Bkb3duQ29udGFpbmVySGVscGVyIiwib25TYXZlRHJvcGRvd25TaG93IiwiZ3NhcCIsInRvIiwiY3VycmVudCIsImF1dG9BbHBoYSIsImR1cmF0aW9uIiwiZWFzZSIsIkxpbmVhciIsInNldEltYWdlc1VybCIsInVzZUVmZmVjdCIsImltYWdlc0FycmF5IiwiY29sb3JzIiwiY2hhcnRUeXBlIiwiY29sb3JzMSIsImNvbG9yczIiLCJjb2xvcnMzIiwiY29sb3JzNCIsImNvbG9yczUiLCJkYXRhIiwibGFiZWxzIiwibGFiZWwiLCJkYXRhc2V0cyIsImRhdGFzZXQxTGFiZWwiLCJkYXRhc2V0MSIsImJvcmRlcldpZHRoIiwiZGF0YXNldDJMYWJlbCIsImRhdGFzZXQyIiwiZGF0YXNldDNMYWJlbCIsImRhdGFzZXQzIiwiZGF0YXNldDRMYWJlbCIsImRhdGFzZXQ0IiwiZGF0YXNldDVMYWJlbCIsImRhdGFzZXQ1IiwiZGF0YXNldDZMYWJlbCIsImRhdGFzZXQ2IiwiZGF0YXMiLCJkYXRhc2V0IiwidGVzdDEiLCJkYXRhc2VzIiwidW5kZWZpbmVkIiwidGVzdCIsImRhdGFyZXIiLCJ0ZXN0MiIsImZpbHRlciIsIm9iaiIsImZpbGwiLCJuZXdEYXRhc2V0cyIsImJvcmRlckNvbG9yIiwidG9TYXZlQ2hhcnQiLCJDaGFydEpzSW1hZ2UiLCJzZXRDb25maWciLCJvcHRpb25zIiwicmVzcG9uc2l2ZSIsImxlZ2VuZCIsInBvc2l0aW9uIiwiYm94V2lkdGgiLCJib3hIZWlnaHQiLCJzY2FsZXMiLCJ5QXhlcyIsInN0YWNrZWQiLCJ0aWNrcyIsImJlZ2luQXRaZXJvIiwieEF4ZXMiLCJzZXRGb3JtYXQiLCJzZXREZXZpY2VQaXhlbFJhdGlvIiwic2V0QmFja2dyb3VuZENvbG9yIiwidG9EYXRhVXJsIiwidGhlbiIsImltYWdlIiwicHVzaCIsImUiLCJwcmV2ZW50RGVmYXVsdCIsInBlcmlvZHMiLCJyZXZlbnVlRWxlbWVudHMiLCJjb3N0c0VsZW1lbnRzIiwidGF4IiwidG90YWxSZXZlbnVlIiwibW9udGhseVJldmVudWUiLCJ0b3RhbENvc3RzIiwibW9udGhseUNvc3RzIiwiZ3Jvc3NQcm9maXQiLCJuZXRQcm9maXQiLCJzdGFydERhdGUiLCJlbmREYXRlIiwiYXNQZGYiLCJwZGYiLCJ1cGRhdGVDb250YWluZXIiLCJ0b0Jsb2IiLCJibG9iIiwic2F2ZUFzIiwiUm91dGVyIiwicXVlcnkiLCJwcm9qZWN0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBQSx3REFBSSxDQUFDQyxRQUFMLENBQWM7QUFBRUMsS0FBRyxFQUFFLG9CQUFQO0FBQTZCQyxRQUFNLEVBQUU7QUFBckMsQ0FBZDtBQUNBSCx3REFBSSxDQUFDQyxRQUFMLENBQWM7QUFBRUMsS0FBRyxFQUFFLHNCQUFQO0FBQStCQyxRQUFNLEVBQUU7QUFBdkMsQ0FBZDtBQUNBSCx3REFBSSxDQUFDQyxRQUFMLENBQWM7QUFBRUMsS0FBRyxFQUFFLDJCQUFQO0FBQW9DQyxRQUFNLEVBQUU7QUFBNUMsQ0FBZDtBQUNBSCx3REFBSSxDQUFDQyxRQUFMLENBQWM7QUFBRUMsS0FBRyxFQUFFLCtCQUFQO0FBQXdDQyxRQUFNLEVBQUU7QUFBaEQsQ0FBZDtBQUNBSCx3REFBSSxDQUFDQyxRQUFMLENBQWM7QUFBRUMsS0FBRyxFQUFFLGdDQUFQO0FBQXlDQyxRQUFNLEVBQUU7QUFBakQsQ0FBZDtBQUNBSCx3REFBSSxDQUFDQyxRQUFMLENBQWM7QUFBRUMsS0FBRyxFQUFFLHNDQUFQO0FBQStDQyxRQUFNLEVBQUU7QUFBdkQsQ0FBZDtBQUNBSCx3REFBSSxDQUFDQyxRQUFMLENBQWM7QUFBRUMsS0FBRyxFQUFFLDhCQUFQO0FBQXVDQyxRQUFNLEVBQUU7QUFBL0MsQ0FBZDtBQUVBLElBQU1DLE1BQU0sR0FBR0MsOERBQVUsQ0FBQ0MsTUFBWCxDQUFrQjtBQUMvQkMsVUFBUSxFQUFFO0FBQ1JDLFdBQU8sRUFBRSxFQUREO0FBRVI7QUFDQUMsY0FBVSxFQUFFLG9CQUhKO0FBSVJDLG1CQUFlLEVBQUUsU0FKVDtBQUtSQyxTQUFLLEVBQUU7QUFMQyxHQURxQjtBQVEvQkMsV0FBUyxFQUFFO0FBQ1RDLFlBQVEsRUFBRSxFQUREO0FBRVRGLFNBQUssRUFBRSxTQUZFO0FBR1RHLGFBQVMsRUFBRTtBQUhGLEdBUm9CO0FBYS9CQyxPQUFLLEVBQUU7QUFBRUMsV0FBTyxFQUFFLE9BQVg7QUFBb0JDLFNBQUssRUFBRSxNQUEzQjtBQUFtQ0MsYUFBUyxFQUFFO0FBQTlDLEdBYndCO0FBYy9CQyxjQUFZLEVBQUU7QUFBRUMsaUJBQWEsRUFBRSxLQUFqQjtBQUF3QlYsbUJBQWUsRUFBRSxTQUF6QztBQUFvREMsU0FBSyxFQUFFLFNBQTNEO0FBQXNFVSx1QkFBbUIsRUFBRSxDQUEzRjtBQUE4RkMsd0JBQW9CLEVBQUU7QUFBcEgsR0FkaUI7QUFlL0JDLFVBQVEsRUFBRTtBQUFFSCxpQkFBYSxFQUFFO0FBQWpCLEdBZnFCO0FBZ0IvQkksVUFBUSxFQUFFO0FBQUVoQixXQUFPLEVBQUU7QUFBWCxHQWhCcUI7QUFpQi9CaUIsZUFBYSxFQUFFO0FBQUVQLGFBQVMsRUFBRSxDQUFiO0FBQWdCTCxZQUFRLEVBQUU7QUFBMUIsR0FqQmdCO0FBa0IvQmEsV0FBUyxFQUFFO0FBQUVSLGFBQVMsRUFBRSxDQUFiO0FBQWdCTCxZQUFRLEVBQUUsQ0FBMUI7QUFBNkJjLGNBQVUsRUFBRSxtQkFBekM7QUFBOERDLGVBQVcsRUFBRTtBQUEzRTtBQWxCb0IsQ0FBbEIsQ0FBZjs7QUFxQkEsSUFBTUMsVUFBVSxHQUFHLFNBQWJBLFVBQWEsT0FBNkI7QUFBQSxNQUExQkMsU0FBMEIsUUFBMUJBLFNBQTBCO0FBQUEsTUFBZkMsUUFBZSxRQUFmQSxRQUFlO0FBQzlDQyxTQUFPLENBQUNDLEdBQVIsQ0FBWSxtQkFBWixFQUFpQ0YsUUFBakM7QUFDQUMsU0FBTyxDQUFDQyxHQUFSLENBQVksb0JBQVosRUFBa0NILFNBQWxDO0FBQ0Esc0JBQ0UscUVBQUMsNERBQUQ7QUFBVSxTQUFLLEVBQUUsS0FBSyxFQUF0QjtBQUEwQixjQUFVLEVBQUMsS0FBckM7QUFBQSw0QkFDRSxxRUFBQyx3REFBRDtBQUFNLFVBQUksRUFBQyxJQUFYO0FBQWdCLFdBQUssRUFBRTFCLE1BQU0sQ0FBQ0csUUFBOUI7QUFBQSw2QkFDRSxxRUFBQyx3REFBRDtBQUFBLCtCQUNFLHFFQUFDLHdEQUFEO0FBQU0sZUFBSyxFQUFFSCxNQUFNLENBQUNRLFNBQXBCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFERixFQU1HbUIsUUFBUSxDQUFDRyxHQUFULENBQWEsVUFBQ0MsT0FBRCxFQUFhO0FBQ3pCLDBCQUNFLHFFQUFDLHdEQUFEO0FBQU0sWUFBSSxFQUFDLElBQVg7QUFBZ0IsYUFBSyxFQUFFL0IsTUFBTSxDQUFDRyxRQUE5QjtBQUFBLGdDQUNFLHFFQUFDLHdEQUFEO0FBQU0sZUFBSyxFQUFFO0FBQUU2Qix3QkFBWSxFQUFFO0FBQWhCLFdBQWI7QUFBQSxpQ0FDRSxxRUFBQyx3REFBRDtBQUFNLGlCQUFLLEVBQUU7QUFBRXZCLHNCQUFRLEVBQUU7QUFBWixhQUFiO0FBQUEsc0JBQWdDc0IsT0FBTyxDQUFDRTtBQUF4QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFERixFQUlHRixPQUFPLENBQUNHLE1BQVIsQ0FBZUosR0FBZixDQUFtQixVQUFDSyxLQUFELEVBQVc7QUFDN0JQLGlCQUFPLENBQUNDLEdBQVIsQ0FBWU0sS0FBWjs7QUFDQSxrQkFBUUEsS0FBSyxDQUFDQyxJQUFkO0FBQ0UsaUJBQUssT0FBTDtBQUNFLHFCQUNFRCxLQUFLLENBQUNDLElBQU4sSUFBYyxPQUFkLGlCQUNFLHFFQUFDLHdEQUFEO0FBQU0scUJBQUssRUFBRXBDLE1BQU0sQ0FBQ1csS0FBcEI7QUFBQSx3Q0FFRSxxRUFBQyx3REFBRDtBQUFNLHVCQUFLLEVBQUVYLE1BQU0sQ0FBQ2UsWUFBcEI7QUFBQSw0QkFDR29CLEtBQUssQ0FBQ0UsUUFBTixDQUFlUCxHQUFmLENBQW1CLFVBQUNRLE9BQUQsRUFBYTtBQUMvQix3QkFBTUMsZ0JBQWdCLEdBQUdKLEtBQUssQ0FBQ0UsUUFBTixDQUFlRyxNQUF4Qzs7QUFDQSw0QkFBUUQsZ0JBQVI7QUFDRSwyQkFBSyxDQUFMO0FBQ0UsNENBQ0UscUVBQUMsd0RBQUQ7QUFBTSwrQkFBSyxFQUFFO0FBQUUxQixpQ0FBSyxFQUFFLE1BQVQ7QUFBaUJULG1DQUFPLEVBQUU7QUFBMUIsMkJBQWI7QUFBQSxpREFDRSxxRUFBQyx3REFBRDtBQUFNLGlDQUFLLEVBQUVKLE1BQU0sQ0FBQ3FCLGFBQXBCO0FBQUEsc0NBQW9DaUI7QUFBcEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUNBREY7O0FBS0YsMkJBQUssQ0FBTDtBQUNFLDRDQUNFLHFFQUFDLHdEQUFEO0FBQU0sK0JBQUssRUFBRTtBQUFFekIsaUNBQUssRUFBRSxLQUFUO0FBQWdCVCxtQ0FBTyxFQUFFO0FBQXpCLDJCQUFiO0FBQUEsaURBQ0UscUVBQUMsd0RBQUQ7QUFBTSxpQ0FBSyxFQUFFSixNQUFNLENBQUNxQixhQUFwQjtBQUFBLHNDQUFvQ2lCO0FBQXBDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlDQURGOztBQUtGLDJCQUFLLENBQUw7QUFDRSw0Q0FDRSxxRUFBQyx3REFBRDtBQUFNLCtCQUFLLEVBQUU7QUFBRXpCLGlDQUFLLEVBQUUsUUFBVDtBQUFtQlQsbUNBQU8sRUFBRTtBQUE1QiwyQkFBYjtBQUFBLGlEQUNFLHFFQUFDLHdEQUFEO0FBQU0saUNBQUssRUFBRUosTUFBTSxDQUFDcUIsYUFBcEI7QUFBQSxzQ0FBb0NpQjtBQUFwQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQ0FERjs7QUFLRiwyQkFBSyxDQUFMO0FBQ0UsNENBQ0UscUVBQUMsd0RBQUQ7QUFBTSwrQkFBSyxFQUFFO0FBQUV6QixpQ0FBSyxFQUFFLEtBQVQ7QUFBZ0JULG1DQUFPLEVBQUU7QUFBekIsMkJBQWI7QUFBQSxpREFDRSxxRUFBQyx3REFBRDtBQUFNLGlDQUFLLEVBQUVKLE1BQU0sQ0FBQ3FCLGFBQXBCO0FBQUEsc0NBQW9DaUI7QUFBcEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUNBREY7O0FBS0YsMkJBQUssQ0FBTDtBQUNFLDRDQUNFLHFFQUFDLHdEQUFEO0FBQU0sK0JBQUssRUFBRTtBQUFFekIsaUNBQUssRUFBRSxLQUFUO0FBQWdCVCxtQ0FBTyxFQUFFO0FBQXpCLDJCQUFiO0FBQUEsaURBQ0UscUVBQUMsd0RBQUQ7QUFBTSxpQ0FBSyxFQUFFSixNQUFNLENBQUNxQixhQUFwQjtBQUFBLHNDQUFvQ2lCO0FBQXBDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlDQURGOztBQUtGLDJCQUFLLENBQUw7QUFDRSw0Q0FDRSxxRUFBQyx3REFBRDtBQUFNLCtCQUFLLEVBQUU7QUFBRXpCLGlDQUFLLEVBQUUsUUFBVDtBQUFtQlQsbUNBQU8sRUFBRTtBQUE1QiwyQkFBYjtBQUFBLGlEQUNFLHFFQUFDLHdEQUFEO0FBQU0saUNBQUssRUFBRUosTUFBTSxDQUFDcUIsYUFBcEI7QUFBQSxzQ0FBb0NpQjtBQUFwQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQ0FERjs7QUFLRiwyQkFBSyxDQUFMO0FBQ0UsNENBQ0UscUVBQUMsd0RBQUQ7QUFBTSwrQkFBSyxFQUFFO0FBQUV6QixpQ0FBSyxFQUFFLFFBQVQ7QUFBbUJULG1DQUFPLEVBQUU7QUFBNUIsMkJBQWI7QUFBQSxpREFDRSxxRUFBQyx3REFBRDtBQUFNLGlDQUFLLEVBQUVKLE1BQU0sQ0FBQ3FCLGFBQXBCO0FBQUEsc0NBQW9DaUI7QUFBcEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUNBREY7O0FBS0YsMkJBQUssQ0FBTDtBQUNFLDRDQUNFLHFFQUFDLHdEQUFEO0FBQU0sK0JBQUssRUFBRTtBQUFFekIsaUNBQUssRUFBRSxPQUFUO0FBQWtCVCxtQ0FBTyxFQUFFO0FBQTNCLDJCQUFiO0FBQUEsaURBQ0UscUVBQUMsd0RBQUQ7QUFBTSxpQ0FBSyxFQUFFSixNQUFNLENBQUNxQixhQUFwQjtBQUFBLHNDQUFvQ2lCO0FBQXBDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlDQURGOztBQUtGLDJCQUFLLENBQUw7QUFDRSw0Q0FDRSxxRUFBQyx3REFBRDtBQUFNLCtCQUFLLEVBQUU7QUFBRXpCLGlDQUFLLEVBQUUsUUFBVDtBQUFtQlQsbUNBQU8sRUFBRTtBQUE1QiwyQkFBYjtBQUFBLGlEQUNFLHFFQUFDLHdEQUFEO0FBQU0saUNBQUssRUFBRUosTUFBTSxDQUFDcUIsYUFBcEI7QUFBQSxzQ0FBb0NpQjtBQUFwQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQ0FERjs7QUFLRiwyQkFBSyxFQUFMO0FBQ0UsNENBQ0UscUVBQUMsd0RBQUQ7QUFBTSwrQkFBSyxFQUFFO0FBQUV6QixpQ0FBSyxFQUFFLEtBQVQ7QUFBZ0JULG1DQUFPLEVBQUU7QUFBekIsMkJBQWI7QUFBQSxpREFDRSxxRUFBQyx3REFBRDtBQUFNLGlDQUFLLEVBQUVKLE1BQU0sQ0FBQ3FCLGFBQXBCO0FBQUEsc0NBQW9DaUI7QUFBcEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUNBREY7O0FBS0YsMkJBQUssRUFBTDtBQUNFLDRDQUNFLHFFQUFDLHdEQUFEO0FBQU0sK0JBQUssRUFBRTtBQUFFekIsaUNBQUssRUFBRSxPQUFUO0FBQWtCVCxtQ0FBTyxFQUFFO0FBQTNCLDJCQUFiO0FBQUEsaURBQ0UscUVBQUMsd0RBQUQ7QUFBTSxpQ0FBSyxFQUFFSixNQUFNLENBQUNxQixhQUFwQjtBQUFBLHNDQUFvQ2lCO0FBQXBDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlDQURGOztBQUtGLDJCQUFLLEVBQUw7QUFDRSw0Q0FDRSxxRUFBQyx3REFBRDtBQUFNLCtCQUFLLEVBQUU7QUFBRXpCLGlDQUFLLEVBQUUsT0FBVDtBQUFrQlQsbUNBQU8sRUFBRTtBQUEzQiwyQkFBYjtBQUFBLGlEQUNFLHFFQUFDLHdEQUFEO0FBQU0saUNBQUssRUFBRUosTUFBTSxDQUFDcUIsYUFBcEI7QUFBQSxzQ0FBb0NpQjtBQUFwQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQ0FERjtBQXBFSjtBQTBFRCxtQkE1RUE7QUFESDtBQUFBO0FBQUE7QUFBQTtBQUFBLHlCQUZGLEVBa0ZHSCxLQUFLLENBQUNNLElBQU4sQ0FBV1gsR0FBWCxDQUFlLFVBQUNZLEdBQUQsRUFBUztBQUN2QixzQ0FDRSxxRUFBQyx3REFBRDtBQUFNLHlCQUFLLEVBQUUxQyxNQUFNLENBQUNtQixRQUFwQjtBQUFBLDhCQUNHdUIsR0FBRyxDQUFDQSxHQUFKLENBQVFaLEdBQVIsQ0FBWSxVQUFDYSxPQUFELEVBQWE7QUFDeEIsMEJBQU1DLGdCQUFnQixHQUFHVCxLQUFLLENBQUNNLElBQU4sQ0FBV0QsTUFBcEM7O0FBQ0EsOEJBQVFJLGdCQUFSO0FBQ0UsNkJBQUssQ0FBTDtBQUNFLDhDQUNFLHFFQUFDLHdEQUFEO0FBQU0saUNBQUssRUFBRTtBQUFFL0IsbUNBQUssRUFBRSxNQUFUO0FBQWlCVCxxQ0FBTyxFQUFFO0FBQTFCLDZCQUFiO0FBQUEsbURBQ0UscUVBQUMsd0RBQUQ7QUFBTSxtQ0FBSyxFQUFFSixNQUFNLENBQUNzQixTQUFwQjtBQUFBLHdDQUFnQ3FCO0FBQWhDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1DQURGOztBQUtGLDZCQUFLLENBQUw7QUFDRSw4Q0FDRSxxRUFBQyx3REFBRDtBQUFNLGlDQUFLLEVBQUU7QUFBRTlCLG1DQUFLLEVBQUUsS0FBVDtBQUFnQlQscUNBQU8sRUFBRTtBQUF6Qiw2QkFBYjtBQUFBLG1EQUNFLHFFQUFDLHdEQUFEO0FBQU0sbUNBQUssRUFBRUosTUFBTSxDQUFDc0IsU0FBcEI7QUFBQSx3Q0FBZ0NxQjtBQUFoQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQ0FERjs7QUFLRiw2QkFBSyxDQUFMO0FBQ0UsOENBQ0UscUVBQUMsd0RBQUQ7QUFBTSxpQ0FBSyxFQUFFO0FBQUU5QixtQ0FBSyxFQUFFLFFBQVQ7QUFBbUJULHFDQUFPLEVBQUU7QUFBNUIsNkJBQWI7QUFBQSxtREFDRSxxRUFBQyx3REFBRDtBQUFNLG1DQUFLLEVBQUVKLE1BQU0sQ0FBQ3NCLFNBQXBCO0FBQUEsd0NBQWdDcUI7QUFBaEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUNBREY7O0FBS0YsNkJBQUssQ0FBTDtBQUNFLDhDQUNFLHFFQUFDLHdEQUFEO0FBQU0saUNBQUssRUFBRTtBQUFFOUIsbUNBQUssRUFBRSxLQUFUO0FBQWdCVCxxQ0FBTyxFQUFFO0FBQXpCLDZCQUFiO0FBQUEsbURBQ0UscUVBQUMsd0RBQUQ7QUFBTSxtQ0FBSyxFQUFFSixNQUFNLENBQUNzQixTQUFwQjtBQUFBLHdDQUFnQ3FCO0FBQWhDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1DQURGOztBQUtGLDZCQUFLLENBQUw7QUFDRSw4Q0FDRSxxRUFBQyx3REFBRDtBQUFNLGlDQUFLLEVBQUU7QUFBRTlCLG1DQUFLLEVBQUUsS0FBVDtBQUFnQlQscUNBQU8sRUFBRTtBQUF6Qiw2QkFBYjtBQUFBLG1EQUNFLHFFQUFDLHdEQUFEO0FBQU0sbUNBQUssRUFBRUosTUFBTSxDQUFDc0IsU0FBcEI7QUFBQSx3Q0FBZ0NxQjtBQUFoQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQ0FERjs7QUFLRiw2QkFBSyxDQUFMO0FBQ0UsOENBQ0UscUVBQUMsd0RBQUQ7QUFBTSxpQ0FBSyxFQUFFO0FBQUU5QixtQ0FBSyxFQUFFLFFBQVQ7QUFBbUJULHFDQUFPLEVBQUU7QUFBNUIsNkJBQWI7QUFBQSxtREFDRSxxRUFBQyx3REFBRDtBQUFNLG1DQUFLLEVBQUVKLE1BQU0sQ0FBQ3NCLFNBQXBCO0FBQUEsd0NBQWdDcUI7QUFBaEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUNBREY7O0FBS0YsNkJBQUssQ0FBTDtBQUNFLDhDQUNFLHFFQUFDLHdEQUFEO0FBQU0saUNBQUssRUFBRTtBQUFFOUIsbUNBQUssRUFBRSxRQUFUO0FBQW1CVCxxQ0FBTyxFQUFFO0FBQTVCLDZCQUFiO0FBQUEsbURBQ0UscUVBQUMsd0RBQUQ7QUFBTSxtQ0FBSyxFQUFFSixNQUFNLENBQUNzQixTQUFwQjtBQUFBLHdDQUFnQ3FCO0FBQWhDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1DQURGOztBQUtGLDZCQUFLLENBQUw7QUFDRSw4Q0FDRSxxRUFBQyx3REFBRDtBQUFNLGlDQUFLLEVBQUU7QUFBRTlCLG1DQUFLLEVBQUUsT0FBVDtBQUFrQlQscUNBQU8sRUFBRTtBQUEzQiw2QkFBYjtBQUFBLG1EQUNFLHFFQUFDLHdEQUFEO0FBQU0sbUNBQUssRUFBRUosTUFBTSxDQUFDc0IsU0FBcEI7QUFBQSx3Q0FBZ0NxQjtBQUFoQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQ0FERjs7QUFLRiw2QkFBSyxDQUFMO0FBQ0UsOENBQ0UscUVBQUMsd0RBQUQ7QUFBTSxpQ0FBSyxFQUFFO0FBQUU5QixtQ0FBSyxFQUFFLFFBQVQ7QUFBbUJULHFDQUFPLEVBQUU7QUFBNUIsNkJBQWI7QUFBQSxtREFDRSxxRUFBQyx3REFBRDtBQUFNLG1DQUFLLEVBQUVKLE1BQU0sQ0FBQ3NCLFNBQXBCO0FBQUEsd0NBQWdDcUI7QUFBaEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUNBREY7O0FBS0YsNkJBQUssRUFBTDtBQUNFLDhDQUNFLHFFQUFDLHdEQUFEO0FBQU0saUNBQUssRUFBRTtBQUFFOUIsbUNBQUssRUFBRSxLQUFUO0FBQWdCVCxxQ0FBTyxFQUFFO0FBQXpCLDZCQUFiO0FBQUEsbURBQ0UscUVBQUMsd0RBQUQ7QUFBTSxtQ0FBSyxFQUFFSixNQUFNLENBQUNzQixTQUFwQjtBQUFBLHdDQUFnQ3FCO0FBQWhDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1DQURGOztBQUtGLDZCQUFLLEVBQUw7QUFDRSw4Q0FDRSxxRUFBQyx3REFBRDtBQUFNLGlDQUFLLEVBQUU7QUFBRTlCLG1DQUFLLEVBQUUsT0FBVDtBQUFrQlQscUNBQU8sRUFBRTtBQUEzQiw2QkFBYjtBQUFBLG1EQUNFLHFFQUFDLHdEQUFEO0FBQU0sbUNBQUssRUFBRUosTUFBTSxDQUFDc0IsU0FBcEI7QUFBQSx3Q0FBZ0NxQjtBQUFoQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQ0FERjs7QUFLRiw2QkFBSyxFQUFMO0FBQ0UsOENBQ0UscUVBQUMsd0RBQUQ7QUFBTSxpQ0FBSyxFQUFFO0FBQUU5QixtQ0FBSyxFQUFFLE9BQVQ7QUFBa0JULHFDQUFPLEVBQUU7QUFBM0IsNkJBQWI7QUFBQSxtREFDRSxxRUFBQyx3REFBRDtBQUFNLG1DQUFLLEVBQUVKLE1BQU0sQ0FBQ3NCLFNBQXBCO0FBQUEsd0NBQWdDcUI7QUFBaEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUNBREY7QUFwRUo7QUEwRUQscUJBNUVBO0FBREg7QUFBQTtBQUFBO0FBQUE7QUFBQSwyQkFERjtBQWlGRCxpQkFsRkEsQ0FsRkg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQUZKOztBQTBLRixpQkFBSyxRQUFMO0FBQ0Usa0NBQ0UscUVBQUMsd0RBQUQ7QUFBTSxxQkFBSyxFQUFFO0FBQUU3QiwyQkFBUyxFQUFFO0FBQWIsaUJBQWI7QUFBQSx1Q0FDRSxxRUFBQyx3REFBRDtBQUFNLHVCQUFLLEVBQUU7QUFBRUwsNEJBQVEsRUFBRTtBQUFaLG1CQUFiO0FBQUEsNEJBQWdDMEIsS0FBSyxDQUFDRjtBQUF0QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFERjs7QUFLRixpQkFBSyxTQUFMO0FBQ0Usa0NBQU8scUVBQUMsd0RBQUQ7QUFBTSxxQkFBSyxFQUFFO0FBQUVuQiwyQkFBUyxFQUFFLEVBQWI7QUFBaUJrQiw4QkFBWSxFQUFFO0FBQS9CO0FBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFBUDs7QUFDRixpQkFBSyxPQUFMO0FBQ0UscUJBQU9OLFNBQVMsQ0FBQ0ksR0FBVixDQUFjLFVBQUNlLEdBQUQsRUFBUztBQUM1QixvQkFBSUEsR0FBRyxDQUFDQyxVQUFKLEtBQW1CWCxLQUFLLENBQUNZLEtBQTdCLEVBQW9DO0FBQ2xDLHNDQUNFLHFFQUFDLHdEQUFEO0FBQU0seUJBQUssRUFBRTtBQUFFakMsK0JBQVMsRUFBRTtBQUFiLHFCQUFiO0FBQUEsMkNBQ0UscUVBQUMseURBQUQ7QUFBTywyQkFBSyxFQUFFO0FBQUVELDZCQUFLLEVBQUU7QUFBVCx1QkFBZDtBQUFpQyx5QkFBRyxFQUFFZ0MsR0FBRyxDQUFDRztBQUExQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSwyQkFERjtBQUtEO0FBQ0YsZUFSTSxDQUFQOztBQVNGLGlCQUFLLE1BQUw7QUFDRSxrQkFBSUMsYUFBYSxHQUFHQyw4Q0FBQyxDQUFDZixLQUFLLENBQUNnQixJQUFQLENBQUQsQ0FBY3JCLEdBQWQsQ0FBa0IsWUFBWTtBQUNoRCx1QkFBT29CLDhDQUFDLENBQUMsT0FBRCxDQUFELENBQVdFLE1BQVgsQ0FBa0IsSUFBbEIsRUFBd0JDLElBQXhCLEVBQVA7QUFDRCxlQUZtQixDQUFwQjtBQUdBekIscUJBQU8sQ0FBQ0MsR0FBUixDQUFZb0IsYUFBWjtBQUNBLGtDQUNFLHFFQUFDLHdEQUFEO0FBQU0scUJBQUssRUFBRTtBQUFFbkMsMkJBQVMsRUFBRTtBQUFiLGlCQUFiO0FBQUEsMEJBQ0dvQyw4Q0FBQyxDQUFDcEIsR0FBRixDQUFNbUIsYUFBTixFQUFxQixVQUFDSyxHQUFELEVBQVM7QUFDN0IxQix5QkFBTyxDQUFDQyxHQUFSLENBQVl5QixHQUFHLENBQUNDLFFBQUosR0FBZUMsUUFBZixDQUF3QixTQUF4QixDQUFaO0FBQ0E1Qix5QkFBTyxDQUFDQyxHQUFSLENBQVl5QixHQUFHLENBQUNFLFFBQUosQ0FBYSxVQUFiLENBQVosRUFGNkIsQ0FHN0I7O0FBQ0Esc0JBQ0VGLEdBQUcsQ0FBQ0csVUFBSixDQUFlLEtBQWYsS0FDQSxDQUFDSCxHQUFHLENBQUNFLFFBQUosQ0FBYSxVQUFiLENBREQsSUFFQSxDQUFDRixHQUFHLENBQUNFLFFBQUosQ0FBYSxNQUFiLENBRkQsSUFHQSxDQUFDRixHQUFHLENBQUNFLFFBQUosQ0FBYSxLQUFiLENBSEQsSUFJQSxDQUFDRixHQUFHLENBQUNFLFFBQUosQ0FBYSxLQUFiLENBTEgsRUFNRTtBQUNBLHdDQUFPLHFFQUFDLHdEQUFEO0FBQU0sMkJBQUssRUFBRTtBQUFFL0MsZ0NBQVEsRUFBRTtBQUFaLHVCQUFiO0FBQUEsZ0NBQWdDNkMsR0FBRyxDQUFDSSxPQUFKLENBQVksZUFBWixFQUE2QixFQUE3QjtBQUFoQztBQUFBO0FBQUE7QUFBQTtBQUFBLDZCQUFQO0FBQ0QsbUJBUkQsQ0FTQTtBQVRBLHVCQVVLLElBQ0hKLEdBQUcsQ0FBQ0csVUFBSixDQUFlLEtBQWYsS0FDQUgsR0FBRyxDQUFDRSxRQUFKLENBQWEsVUFBYixDQURBLElBRUEsQ0FBQ0YsR0FBRyxDQUFDRSxRQUFKLENBQWEsTUFBYixDQUZELElBR0EsQ0FBQ0YsR0FBRyxDQUFDRSxRQUFKLENBQWEsS0FBYixDQUhELElBSUEsQ0FBQ0YsR0FBRyxDQUFDRSxRQUFKLENBQWEsS0FBYixDQUxFLEVBTUg7QUFDQSwwQ0FDRSxxRUFBQyx3REFBRDtBQUFNLDZCQUFLLEVBQUU7QUFBRS9DLGtDQUFRLEVBQUUsRUFBWjtBQUFnQkosb0NBQVUsRUFBRTtBQUE1Qix5QkFBYjtBQUFBLGtDQUFtRWlELEdBQUcsQ0FBQ0ksT0FBSixDQUFZLGVBQVosRUFBNkIsRUFBN0I7QUFBbkU7QUFBQTtBQUFBO0FBQUE7QUFBQSwrQkFERjtBQUdELHFCQVZJLENBV0w7QUFYSyx5QkFZQSxJQUNISixHQUFHLENBQUNHLFVBQUosQ0FBZSxLQUFmLEtBQ0EsQ0FBQ0gsR0FBRyxDQUFDRSxRQUFKLENBQWEsVUFBYixDQURELElBRUFGLEdBQUcsQ0FBQ0UsUUFBSixDQUFhLE1BQWIsQ0FGQSxJQUdBLENBQUNGLEdBQUcsQ0FBQ0UsUUFBSixDQUFhLEtBQWIsQ0FIRCxJQUlBLENBQUNGLEdBQUcsQ0FBQ0UsUUFBSixDQUFhLEtBQWIsQ0FMRSxFQU1IO0FBQ0EsNENBQU8scUVBQUMsd0RBQUQ7QUFBTSwrQkFBSyxFQUFFO0FBQUUvQyxvQ0FBUSxFQUFFLEVBQVo7QUFBZ0JKLHNDQUFVLEVBQUU7QUFBNUIsMkJBQWI7QUFBQSxvQ0FBaUVpRCxHQUFHLENBQUNJLE9BQUosQ0FBWSxlQUFaLEVBQTZCLEVBQTdCO0FBQWpFO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUNBQVA7QUFDRCx1QkFSSSxDQVNMO0FBVEssMkJBVUEsSUFDSEosR0FBRyxDQUFDRyxVQUFKLENBQWUsS0FBZixLQUNBSCxHQUFHLENBQUNFLFFBQUosQ0FBYSxVQUFiLENBREEsSUFFQUYsR0FBRyxDQUFDRSxRQUFKLENBQWEsTUFBYixDQUZBLElBR0EsQ0FBQ0YsR0FBRyxDQUFDRSxRQUFKLENBQWEsS0FBYixDQUhELElBSUEsQ0FBQ0YsR0FBRyxDQUFDRSxRQUFKLENBQWEsS0FBYixDQUxFLEVBTUg7QUFDQSw4Q0FDRSxxRUFBQyx3REFBRDtBQUFNLGlDQUFLLEVBQUU7QUFBRS9DLHNDQUFRLEVBQUUsRUFBWjtBQUFnQkosd0NBQVUsRUFBRTtBQUE1Qiw2QkFBYjtBQUFBLHNDQUNHaUQsR0FBRyxDQUFDSSxPQUFKLENBQVksZUFBWixFQUE2QixFQUE3QjtBQURIO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUNBREY7QUFLRCx5QkFaSSxDQWFMO0FBYkssNkJBY0EsSUFDSEosR0FBRyxDQUFDRyxVQUFKLENBQWUsS0FBZixLQUNBSCxHQUFHLENBQUNFLFFBQUosQ0FBYSxLQUFiLENBREEsSUFFQSxDQUFDRixHQUFHLENBQUNFLFFBQUosQ0FBYSxVQUFiLENBRkQsSUFHQSxDQUFDRixHQUFHLENBQUNFLFFBQUosQ0FBYSxNQUFiLENBSEQsSUFJQSxDQUFDRixHQUFHLENBQUNFLFFBQUosQ0FBYSxLQUFiLENBTEUsRUFNSDtBQUNBLGdEQUFPLHFFQUFDLHdEQUFEO0FBQU0sbUNBQUssRUFBRTtBQUFFL0Msd0NBQVEsRUFBRSxFQUFaO0FBQWdCa0QsOENBQWMsRUFBRTtBQUFoQywrQkFBYjtBQUFBLHdDQUFnRUwsR0FBRyxDQUFDSSxPQUFKLENBQVksZUFBWixFQUE2QixFQUE3QjtBQUFoRTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFDQUFQO0FBQ0QsMkJBUkksQ0FTTDtBQVRLLCtCQVVBLElBQ0hKLEdBQUcsQ0FBQ0csVUFBSixDQUFlLEtBQWYsS0FDQUgsR0FBRyxDQUFDRSxRQUFKLENBQWEsS0FBYixDQURBLElBRUFGLEdBQUcsQ0FBQ0UsUUFBSixDQUFhLE1BQWIsQ0FGQSxJQUdBLENBQUNGLEdBQUcsQ0FBQ0UsUUFBSixDQUFhLFVBQWIsQ0FIRCxJQUlBLENBQUNGLEdBQUcsQ0FBQ0UsUUFBSixDQUFhLEtBQWIsQ0FMRSxFQU1IO0FBQ0Esa0RBQ0UscUVBQUMsd0RBQUQ7QUFBTSxxQ0FBSyxFQUFFO0FBQUUvQywwQ0FBUSxFQUFFLEVBQVo7QUFBZ0JKLDRDQUFVLEVBQUUsbUJBQTVCO0FBQWlEc0QsZ0RBQWMsRUFBRTtBQUFqRSxpQ0FBYjtBQUFBLDBDQUNHTCxHQUFHLENBQUNJLE9BQUosQ0FBWSxlQUFaLEVBQTZCLEVBQTdCO0FBREg7QUFBQTtBQUFBO0FBQUE7QUFBQSx1Q0FERjtBQUtELDZCQVpJLENBYUw7QUFiSyxpQ0FjQSxJQUNISixHQUFHLENBQUNHLFVBQUosQ0FBZSxLQUFmLEtBQ0FILEdBQUcsQ0FBQ0UsUUFBSixDQUFhLEtBQWIsQ0FEQSxJQUVBLENBQUNGLEdBQUcsQ0FBQ0UsUUFBSixDQUFhLE1BQWIsQ0FGRCxJQUdBRixHQUFHLENBQUNFLFFBQUosQ0FBYSxVQUFiLENBSEEsSUFJQSxDQUFDRixHQUFHLENBQUNFLFFBQUosQ0FBYSxLQUFiLENBTEUsRUFNSDtBQUNBLG9EQUNFLHFFQUFDLHdEQUFEO0FBQU0sdUNBQUssRUFBRTtBQUFFL0MsNENBQVEsRUFBRSxFQUFaO0FBQWdCSiw4Q0FBVSxFQUFFLHFCQUE1QjtBQUFtRHNELGtEQUFjLEVBQUU7QUFBbkUsbUNBQWI7QUFBQSw0Q0FDR0wsR0FBRyxDQUFDSSxPQUFKLENBQVksZUFBWixFQUE2QixFQUE3QjtBQURIO0FBQUE7QUFBQTtBQUFBO0FBQUEseUNBREY7QUFLRCwrQkFaSSxDQWFMO0FBYkssbUNBY0EsSUFDSEosR0FBRyxDQUFDRyxVQUFKLENBQWUsS0FBZixLQUNBSCxHQUFHLENBQUNFLFFBQUosQ0FBYSxLQUFiLENBREEsSUFFQUYsR0FBRyxDQUFDRSxRQUFKLENBQWEsTUFBYixDQUZBLElBR0FGLEdBQUcsQ0FBQ0UsUUFBSixDQUFhLFVBQWIsQ0FIQSxJQUlBLENBQUNGLEdBQUcsQ0FBQ0UsUUFBSixDQUFhLEtBQWIsQ0FMRSxFQU1IO0FBQ0Esc0RBQ0UscUVBQUMsd0RBQUQ7QUFBTSx5Q0FBSyxFQUFFO0FBQUUvQyw4Q0FBUSxFQUFFLEVBQVo7QUFBZ0JKLGdEQUFVLEVBQUUsMkJBQTVCO0FBQXlEc0Qsb0RBQWMsRUFBRTtBQUF6RSxxQ0FBYjtBQUFBLDhDQUNHTCxHQUFHLENBQUNJLE9BQUosQ0FBWSxlQUFaLEVBQTZCLEVBQTdCO0FBREg7QUFBQTtBQUFBO0FBQUE7QUFBQSwyQ0FERjtBQUtELGlDQVpJLENBYUw7QUFiSyxxQ0FjQSxJQUNISixHQUFHLENBQUNHLFVBQUosQ0FBZSxLQUFmLEtBQ0FILEdBQUcsQ0FBQ0UsUUFBSixDQUFhLEtBQWIsQ0FEQSxJQUVBLENBQUNGLEdBQUcsQ0FBQ0UsUUFBSixDQUFhLEtBQWIsQ0FGRCxJQUdBLENBQUNGLEdBQUcsQ0FBQ0UsUUFBSixDQUFhLFVBQWIsQ0FIRCxJQUlBLENBQUNGLEdBQUcsQ0FBQ0UsUUFBSixDQUFhLE1BQWIsQ0FMRSxFQU1IO0FBQ0Esd0RBQU8scUVBQUMsd0RBQUQ7QUFBTSwyQ0FBSyxFQUFFO0FBQUUvQyxnREFBUSxFQUFFLEVBQVo7QUFBZ0JrRCxzREFBYyxFQUFFO0FBQWhDLHVDQUFiO0FBQUEsZ0RBQTZETCxHQUFHLENBQUNJLE9BQUosQ0FBWSxlQUFaLEVBQTZCLEVBQTdCO0FBQTdEO0FBQUE7QUFBQTtBQUFBO0FBQUEsNkNBQVA7QUFDRCxtQ0FSSSxDQVNMO0FBVEssdUNBVUEsSUFDSEosR0FBRyxDQUFDRyxVQUFKLENBQWUsS0FBZixLQUNBSCxHQUFHLENBQUNFLFFBQUosQ0FBYSxLQUFiLENBREEsSUFFQSxDQUFDRixHQUFHLENBQUNFLFFBQUosQ0FBYSxLQUFiLENBRkQsSUFHQSxDQUFDRixHQUFHLENBQUNFLFFBQUosQ0FBYSxVQUFiLENBSEQsSUFJQUYsR0FBRyxDQUFDRSxRQUFKLENBQWEsTUFBYixDQUxHLEVBTUg7QUFDQSwwREFDRSxxRUFBQyx3REFBRDtBQUFNLDZDQUFLLEVBQUU7QUFBRS9DLGtEQUFRLEVBQUUsRUFBWjtBQUFnQkosb0RBQVUsRUFBRSxtQkFBNUI7QUFBaURzRCx3REFBYyxFQUFFO0FBQWpFLHlDQUFiO0FBQUEsa0RBQ0dMLEdBQUcsQ0FBQ0ksT0FBSixDQUFZLGVBQVosRUFBNkIsRUFBN0I7QUFESDtBQUFBO0FBQUE7QUFBQTtBQUFBLCtDQURGO0FBS0QscUNBWkksQ0FhTDtBQWJLLHlDQWNBLElBQ0hKLEdBQUcsQ0FBQ0csVUFBSixDQUFlLEtBQWYsS0FDQUgsR0FBRyxDQUFDRSxRQUFKLENBQWEsS0FBYixDQURBLElBRUFGLEdBQUcsQ0FBQ0UsUUFBSixDQUFhLEtBQWIsQ0FGQSxJQUdBLENBQUNGLEdBQUcsQ0FBQ0UsUUFBSixDQUFhLFVBQWIsQ0FIRCxJQUlBLENBQUNGLEdBQUcsQ0FBQ0UsUUFBSixDQUFhLE1BQWIsQ0FMRSxFQU1IO0FBQ0EsNERBQ0UscUVBQUMsd0RBQUQ7QUFBTSwrQ0FBSyxFQUFFO0FBQUUvQyxvREFBUSxFQUFFLEVBQVo7QUFBZ0JrRCwwREFBYyxFQUFFO0FBQWhDLDJDQUFiO0FBQUEsb0RBQ0dMLEdBQUcsQ0FBQ0ksT0FBSixDQUFZLGVBQVosRUFBNkIsRUFBN0I7QUFESDtBQUFBO0FBQUE7QUFBQTtBQUFBLGlEQURGO0FBS0QsdUNBWkksQ0FhTDtBQWJLLDJDQWNBLElBQ0hKLEdBQUcsQ0FBQ0csVUFBSixDQUFlLEtBQWYsS0FDQUgsR0FBRyxDQUFDRSxRQUFKLENBQWEsS0FBYixDQURBLElBRUEsQ0FBQ0YsR0FBRyxDQUFDRSxRQUFKLENBQWEsS0FBYixDQUZELElBR0FGLEdBQUcsQ0FBQ0UsUUFBSixDQUFhLFVBQWIsQ0FIQSxJQUlBLENBQUNGLEdBQUcsQ0FBQ0UsUUFBSixDQUFhLE1BQWIsQ0FMRSxFQU1IO0FBQ0EsOERBQ0UscUVBQUMsd0RBQUQ7QUFBTSxpREFBSyxFQUFFO0FBQUUvQyxzREFBUSxFQUFFLEVBQVo7QUFBZ0JKLHdEQUFVLEVBQUUscUJBQTVCO0FBQW1Ec0QsNERBQWMsRUFBRTtBQUFuRSw2Q0FBYjtBQUFBLHNEQUNHTCxHQUFHLENBQUNJLE9BQUosQ0FBWSxlQUFaLEVBQTZCLEVBQTdCO0FBREg7QUFBQTtBQUFBO0FBQUE7QUFBQSxtREFERjtBQUtELHlDQVpJLENBYUw7QUFiSyw2Q0FjQSxJQUNISixHQUFHLENBQUNHLFVBQUosQ0FBZSxLQUFmLEtBQ0FILEdBQUcsQ0FBQ0UsUUFBSixDQUFhLEtBQWIsQ0FEQSxJQUVBRixHQUFHLENBQUNFLFFBQUosQ0FBYSxLQUFiLENBRkEsSUFHQUYsR0FBRyxDQUFDRSxRQUFKLENBQWEsVUFBYixDQUhBLElBSUEsQ0FBQ0YsR0FBRyxDQUFDRSxRQUFKLENBQWEsTUFBYixDQUxFLEVBTUg7QUFDQSxnRUFDRSxxRUFBQyx3REFBRDtBQUFNLG1EQUFLLEVBQUU7QUFBRS9DLHdEQUFRLEVBQUUsRUFBWjtBQUFnQkosMERBQVUsRUFBRSxxQkFBNUI7QUFBbURzRCw4REFBYyxFQUFFO0FBQW5FLCtDQUFiO0FBQUEsd0RBQ0dMLEdBQUcsQ0FBQ0ksT0FBSixDQUFZLGVBQVosRUFBNkIsRUFBN0I7QUFESDtBQUFBO0FBQUE7QUFBQTtBQUFBLHFEQURGO0FBS0QsMkNBWkksQ0FhTDtBQWJLLCtDQWNBLElBQ0hKLEdBQUcsQ0FBQ0csVUFBSixDQUFlLEtBQWYsS0FDQUgsR0FBRyxDQUFDRSxRQUFKLENBQWEsS0FBYixDQURBLElBRUFGLEdBQUcsQ0FBQ0UsUUFBSixDQUFhLEtBQWIsQ0FGQSxJQUdBRixHQUFHLENBQUNFLFFBQUosQ0FBYSxVQUFiLENBSEEsSUFJQUYsR0FBRyxDQUFDRSxRQUFKLENBQWEsTUFBYixDQUxHLEVBTUg7QUFDQSxrRUFDRSxxRUFBQyx3REFBRDtBQUNFLHFEQUFLLEVBQUU7QUFBRS9DLDBEQUFRLEVBQUUsRUFBWjtBQUFnQkosNERBQVUsRUFBRSwyQkFBNUI7QUFBeURzRCxnRUFBYyxFQUFFO0FBQXpFLGlEQURUO0FBQUEsMERBR0dMLEdBQUcsQ0FBQ0ksT0FBSixDQUFZLGVBQVosRUFBNkIsRUFBN0I7QUFISDtBQUFBO0FBQUE7QUFBQTtBQUFBLHVEQURGO0FBT0QsNkNBZEksQ0FlTDtBQWZLLGlEQWdCQSxJQUNISixHQUFHLENBQUNHLFVBQUosQ0FBZSxLQUFmLEtBQ0FILEdBQUcsQ0FBQ0UsUUFBSixDQUFhLEtBQWIsQ0FEQSxJQUVBRixHQUFHLENBQUNFLFFBQUosQ0FBYSxLQUFiLENBRkEsSUFHQSxDQUFDRixHQUFHLENBQUNFLFFBQUosQ0FBYSxVQUFiLENBSEQsSUFJQUYsR0FBRyxDQUFDRSxRQUFKLENBQWEsTUFBYixDQUxHLEVBTUg7QUFDQSxvRUFDRSxxRUFBQyx3REFBRDtBQUFNLHVEQUFLLEVBQUU7QUFBRS9DLDREQUFRLEVBQUUsRUFBWjtBQUFnQkosOERBQVUsRUFBRSxtQkFBNUI7QUFBaURzRCxrRUFBYyxFQUFFO0FBQWpFLG1EQUFiO0FBQUEsNERBQ0dMLEdBQUcsQ0FBQ0ksT0FBSixDQUFZLGVBQVosRUFBNkIsRUFBN0I7QUFESDtBQUFBO0FBQUE7QUFBQTtBQUFBLHlEQURGO0FBS0QsK0NBWkksQ0FhTDtBQWJLLG1EQWNBLElBQ0hKLEdBQUcsQ0FBQ0csVUFBSixDQUFlLEtBQWYsS0FDQUgsR0FBRyxDQUFDRSxRQUFKLENBQWEsS0FBYixDQURBLElBRUEsQ0FBQ0YsR0FBRyxDQUFDRSxRQUFKLENBQWEsS0FBYixDQUZELElBR0FGLEdBQUcsQ0FBQ0UsUUFBSixDQUFhLFVBQWIsQ0FIQSxJQUlBRixHQUFHLENBQUNFLFFBQUosQ0FBYSxNQUFiLENBTEcsRUFNSDtBQUNBLHNFQUNFLHFFQUFDLHdEQUFEO0FBQU0seURBQUssRUFBRTtBQUFFL0MsOERBQVEsRUFBRSxFQUFaO0FBQWdCSixnRUFBVSxFQUFFLDJCQUE1QjtBQUF5RHNELG9FQUFjLEVBQUU7QUFBekUscURBQWI7QUFBQSw4REFDR0wsR0FBRyxDQUFDSSxPQUFKLENBQVksZUFBWixFQUE2QixFQUE3QjtBQURIO0FBQUE7QUFBQTtBQUFBO0FBQUEsMkRBREY7QUFLRCxpREFsTjRCLENBbU43QjtBQUNBOzs7QUFDQSxzQkFDRUosR0FBRyxDQUFDRyxVQUFKLENBQWUsTUFBZixLQUNBLENBQUNILEdBQUcsQ0FBQ0UsUUFBSixDQUFhLFVBQWIsQ0FERCxJQUVBLENBQUNGLEdBQUcsQ0FBQ0UsUUFBSixDQUFhLE1BQWIsQ0FGRCxJQUdBLENBQUNGLEdBQUcsQ0FBQ0UsUUFBSixDQUFhLEtBQWIsQ0FIRCxJQUlBLENBQUNGLEdBQUcsQ0FBQ0UsUUFBSixDQUFhLEtBQWIsQ0FMSCxFQU1FO0FBQ0Esd0NBQU8scUVBQUMsd0RBQUQ7QUFBTSwyQkFBSyxFQUFFO0FBQUUvQyxnQ0FBUSxFQUFFO0FBQVosdUJBQWI7QUFBQSxnQ0FBZ0M2QyxHQUFHLENBQUNJLE9BQUosQ0FBWSxlQUFaLEVBQTZCLEVBQTdCO0FBQWhDO0FBQUE7QUFBQTtBQUFBO0FBQUEsNkJBQVA7QUFDRCxtQkFSRCxDQVNBO0FBVEEsdUJBVUssSUFDSEosR0FBRyxDQUFDRyxVQUFKLENBQWUsTUFBZixLQUNBSCxHQUFHLENBQUNFLFFBQUosQ0FBYSxVQUFiLENBREEsSUFFQSxDQUFDRixHQUFHLENBQUNFLFFBQUosQ0FBYSxNQUFiLENBRkQsSUFHQSxDQUFDRixHQUFHLENBQUNFLFFBQUosQ0FBYSxLQUFiLENBSEQsSUFJQSxDQUFDRixHQUFHLENBQUNFLFFBQUosQ0FBYSxLQUFiLENBTEUsRUFNSDtBQUNBLDBDQUNFLHFFQUFDLHdEQUFEO0FBQU0sNkJBQUssRUFBRTtBQUFFL0Msa0NBQVEsRUFBRSxFQUFaO0FBQWdCSixvQ0FBVSxFQUFFO0FBQTVCLHlCQUFiO0FBQUEsa0NBQW1FaUQsR0FBRyxDQUFDSSxPQUFKLENBQVksZUFBWixFQUE2QixFQUE3QjtBQUFuRTtBQUFBO0FBQUE7QUFBQTtBQUFBLCtCQURGO0FBR0QscUJBVkksQ0FXTDtBQVhLLHlCQVlBLElBQ0hKLEdBQUcsQ0FBQ0csVUFBSixDQUFlLE1BQWYsS0FDQSxDQUFDSCxHQUFHLENBQUNFLFFBQUosQ0FBYSxVQUFiLENBREQsSUFFQUYsR0FBRyxDQUFDRSxRQUFKLENBQWEsTUFBYixDQUZBLElBR0EsQ0FBQ0YsR0FBRyxDQUFDRSxRQUFKLENBQWEsS0FBYixDQUhELElBSUEsQ0FBQ0YsR0FBRyxDQUFDRSxRQUFKLENBQWEsS0FBYixDQUxFLEVBTUg7QUFDQSw0Q0FBTyxxRUFBQyx3REFBRDtBQUFNLCtCQUFLLEVBQUU7QUFBRS9DLG9DQUFRLEVBQUUsRUFBWjtBQUFnQkosc0NBQVUsRUFBRTtBQUE1QiwyQkFBYjtBQUFBLG9DQUFpRWlELEdBQUcsQ0FBQ0ksT0FBSixDQUFZLGVBQVosRUFBNkIsRUFBN0I7QUFBakU7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQ0FBUDtBQUNELHVCQVJJLENBU0w7QUFUSywyQkFVQSxJQUNISixHQUFHLENBQUNHLFVBQUosQ0FBZSxNQUFmLEtBQ0FILEdBQUcsQ0FBQ0UsUUFBSixDQUFhLFVBQWIsQ0FEQSxJQUVBRixHQUFHLENBQUNFLFFBQUosQ0FBYSxNQUFiLENBRkEsSUFHQSxDQUFDRixHQUFHLENBQUNFLFFBQUosQ0FBYSxLQUFiLENBSEQsSUFJQSxDQUFDRixHQUFHLENBQUNFLFFBQUosQ0FBYSxLQUFiLENBTEUsRUFNSDtBQUNBLDhDQUNFLHFFQUFDLHdEQUFEO0FBQU0saUNBQUssRUFBRTtBQUFFL0Msc0NBQVEsRUFBRSxFQUFaO0FBQWdCSix3Q0FBVSxFQUFFO0FBQTVCLDZCQUFiO0FBQUEsc0NBQ0dpRCxHQUFHLENBQUNJLE9BQUosQ0FBWSxlQUFaLEVBQTZCLEVBQTdCO0FBREg7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQ0FERjtBQUtELHlCQVpJLENBYUw7QUFiSyw2QkFjQSxJQUNISixHQUFHLENBQUNHLFVBQUosQ0FBZSxNQUFmLEtBQ0FILEdBQUcsQ0FBQ0UsUUFBSixDQUFhLEtBQWIsQ0FEQSxJQUVBLENBQUNGLEdBQUcsQ0FBQ0UsUUFBSixDQUFhLFVBQWIsQ0FGRCxJQUdBLENBQUNGLEdBQUcsQ0FBQ0UsUUFBSixDQUFhLE1BQWIsQ0FIRCxJQUlBLENBQUNGLEdBQUcsQ0FBQ0UsUUFBSixDQUFhLEtBQWIsQ0FMRSxFQU1IO0FBQ0EsZ0RBQU8scUVBQUMsd0RBQUQ7QUFBTSxtQ0FBSyxFQUFFO0FBQUUvQyx3Q0FBUSxFQUFFLEVBQVo7QUFBZ0JrRCw4Q0FBYyxFQUFFO0FBQWhDLCtCQUFiO0FBQUEsd0NBQWdFTCxHQUFHLENBQUNJLE9BQUosQ0FBWSxlQUFaLEVBQTZCLEVBQTdCO0FBQWhFO0FBQUE7QUFBQTtBQUFBO0FBQUEscUNBQVA7QUFDRCwyQkFSSSxDQVNMO0FBVEssK0JBVUEsSUFDSEosR0FBRyxDQUFDRyxVQUFKLENBQWUsTUFBZixLQUNBSCxHQUFHLENBQUNFLFFBQUosQ0FBYSxLQUFiLENBREEsSUFFQUYsR0FBRyxDQUFDRSxRQUFKLENBQWEsTUFBYixDQUZBLElBR0EsQ0FBQ0YsR0FBRyxDQUFDRSxRQUFKLENBQWEsVUFBYixDQUhELElBSUEsQ0FBQ0YsR0FBRyxDQUFDRSxRQUFKLENBQWEsS0FBYixDQUxFLEVBTUg7QUFDQSxrREFDRSxxRUFBQyx3REFBRDtBQUFNLHFDQUFLLEVBQUU7QUFBRS9DLDBDQUFRLEVBQUUsRUFBWjtBQUFnQkosNENBQVUsRUFBRSxtQkFBNUI7QUFBaURzRCxnREFBYyxFQUFFO0FBQWpFLGlDQUFiO0FBQUEsMENBQ0dMLEdBQUcsQ0FBQ0ksT0FBSixDQUFZLGVBQVosRUFBNkIsRUFBN0I7QUFESDtBQUFBO0FBQUE7QUFBQTtBQUFBLHVDQURGO0FBS0QsNkJBWkksQ0FhTDtBQWJLLGlDQWNBLElBQ0hKLEdBQUcsQ0FBQ0csVUFBSixDQUFlLE1BQWYsS0FDQUgsR0FBRyxDQUFDRSxRQUFKLENBQWEsS0FBYixDQURBLElBRUEsQ0FBQ0YsR0FBRyxDQUFDRSxRQUFKLENBQWEsTUFBYixDQUZELElBR0FGLEdBQUcsQ0FBQ0UsUUFBSixDQUFhLFVBQWIsQ0FIQSxJQUlBLENBQUNGLEdBQUcsQ0FBQ0UsUUFBSixDQUFhLEtBQWIsQ0FMRSxFQU1IO0FBQ0Esb0RBQ0UscUVBQUMsd0RBQUQ7QUFBTSx1Q0FBSyxFQUFFO0FBQUUvQyw0Q0FBUSxFQUFFLEVBQVo7QUFBZ0JKLDhDQUFVLEVBQUUscUJBQTVCO0FBQW1Ec0Qsa0RBQWMsRUFBRTtBQUFuRSxtQ0FBYjtBQUFBLDRDQUNHTCxHQUFHLENBQUNJLE9BQUosQ0FBWSxlQUFaLEVBQTZCLEVBQTdCO0FBREg7QUFBQTtBQUFBO0FBQUE7QUFBQSx5Q0FERjtBQUtELCtCQVpJLENBYUw7QUFiSyxtQ0FjQSxJQUNISixHQUFHLENBQUNHLFVBQUosQ0FBZSxNQUFmLEtBQ0FILEdBQUcsQ0FBQ0UsUUFBSixDQUFhLEtBQWIsQ0FEQSxJQUVBRixHQUFHLENBQUNFLFFBQUosQ0FBYSxNQUFiLENBRkEsSUFHQUYsR0FBRyxDQUFDRSxRQUFKLENBQWEsVUFBYixDQUhBLElBSUEsQ0FBQ0YsR0FBRyxDQUFDRSxRQUFKLENBQWEsS0FBYixDQUxFLEVBTUg7QUFDQSxzREFDRSxxRUFBQyx3REFBRDtBQUFNLHlDQUFLLEVBQUU7QUFBRS9DLDhDQUFRLEVBQUUsRUFBWjtBQUFnQkosZ0RBQVUsRUFBRSwyQkFBNUI7QUFBeURzRCxvREFBYyxFQUFFO0FBQXpFLHFDQUFiO0FBQUEsOENBQ0dMLEdBQUcsQ0FBQ0ksT0FBSixDQUFZLGVBQVosRUFBNkIsRUFBN0I7QUFESDtBQUFBO0FBQUE7QUFBQTtBQUFBLDJDQURGO0FBS0QsaUNBWkksQ0FhTDtBQWJLLHFDQWNBLElBQ0hKLEdBQUcsQ0FBQ0csVUFBSixDQUFlLE1BQWYsS0FDQUgsR0FBRyxDQUFDRSxRQUFKLENBQWEsS0FBYixDQURBLElBRUEsQ0FBQ0YsR0FBRyxDQUFDRSxRQUFKLENBQWEsS0FBYixDQUZELElBR0EsQ0FBQ0YsR0FBRyxDQUFDRSxRQUFKLENBQWEsVUFBYixDQUhELElBSUEsQ0FBQ0YsR0FBRyxDQUFDRSxRQUFKLENBQWEsTUFBYixDQUxFLEVBTUg7QUFDQSx3REFBTyxxRUFBQyx3REFBRDtBQUFNLDJDQUFLLEVBQUU7QUFBRS9DLGdEQUFRLEVBQUUsRUFBWjtBQUFnQmtELHNEQUFjLEVBQUU7QUFBaEMsdUNBQWI7QUFBQSxnREFBNkRMLEdBQUcsQ0FBQ0ksT0FBSixDQUFZLGVBQVosRUFBNkIsRUFBN0I7QUFBN0Q7QUFBQTtBQUFBO0FBQUE7QUFBQSw2Q0FBUDtBQUNELG1DQVJJLENBU0w7QUFUSyx1Q0FVQSxJQUNISixHQUFHLENBQUNHLFVBQUosQ0FBZSxNQUFmLEtBQ0FILEdBQUcsQ0FBQ0UsUUFBSixDQUFhLEtBQWIsQ0FEQSxJQUVBLENBQUNGLEdBQUcsQ0FBQ0UsUUFBSixDQUFhLEtBQWIsQ0FGRCxJQUdBLENBQUNGLEdBQUcsQ0FBQ0UsUUFBSixDQUFhLFVBQWIsQ0FIRCxJQUlBRixHQUFHLENBQUNFLFFBQUosQ0FBYSxNQUFiLENBTEcsRUFNSDtBQUNBLDBEQUNFLHFFQUFDLHdEQUFEO0FBQU0sNkNBQUssRUFBRTtBQUFFL0Msa0RBQVEsRUFBRSxFQUFaO0FBQWdCSixvREFBVSxFQUFFLG1CQUE1QjtBQUFpRHNELHdEQUFjLEVBQUU7QUFBakUseUNBQWI7QUFBQSxrREFDR0wsR0FBRyxDQUFDSSxPQUFKLENBQVksZUFBWixFQUE2QixFQUE3QjtBQURIO0FBQUE7QUFBQTtBQUFBO0FBQUEsK0NBREY7QUFLRCxxQ0FaSSxDQWFMO0FBYksseUNBY0EsSUFDSEosR0FBRyxDQUFDRyxVQUFKLENBQWUsTUFBZixLQUNBSCxHQUFHLENBQUNFLFFBQUosQ0FBYSxLQUFiLENBREEsSUFFQUYsR0FBRyxDQUFDRSxRQUFKLENBQWEsS0FBYixDQUZBLElBR0EsQ0FBQ0YsR0FBRyxDQUFDRSxRQUFKLENBQWEsVUFBYixDQUhELElBSUEsQ0FBQ0YsR0FBRyxDQUFDRSxRQUFKLENBQWEsTUFBYixDQUxFLEVBTUg7QUFDQSw0REFDRSxxRUFBQyx3REFBRDtBQUFNLCtDQUFLLEVBQUU7QUFBRS9DLG9EQUFRLEVBQUUsRUFBWjtBQUFnQmtELDBEQUFjLEVBQUU7QUFBaEMsMkNBQWI7QUFBQSxvREFDR0wsR0FBRyxDQUFDSSxPQUFKLENBQVksZUFBWixFQUE2QixFQUE3QjtBQURIO0FBQUE7QUFBQTtBQUFBO0FBQUEsaURBREY7QUFLRCx1Q0FaSSxDQWFMO0FBYkssMkNBY0EsSUFDSEosR0FBRyxDQUFDRyxVQUFKLENBQWUsTUFBZixLQUNBSCxHQUFHLENBQUNFLFFBQUosQ0FBYSxLQUFiLENBREEsSUFFQSxDQUFDRixHQUFHLENBQUNFLFFBQUosQ0FBYSxLQUFiLENBRkQsSUFHQUYsR0FBRyxDQUFDRSxRQUFKLENBQWEsVUFBYixDQUhBLElBSUEsQ0FBQ0YsR0FBRyxDQUFDRSxRQUFKLENBQWEsTUFBYixDQUxFLEVBTUg7QUFDQSw4REFDRSxxRUFBQyx3REFBRDtBQUFNLGlEQUFLLEVBQUU7QUFBRS9DLHNEQUFRLEVBQUUsRUFBWjtBQUFnQkosd0RBQVUsRUFBRSxxQkFBNUI7QUFBbURzRCw0REFBYyxFQUFFO0FBQW5FLDZDQUFiO0FBQUEsc0RBQ0dMLEdBQUcsQ0FBQ0ksT0FBSixDQUFZLGVBQVosRUFBNkIsRUFBN0I7QUFESDtBQUFBO0FBQUE7QUFBQTtBQUFBLG1EQURGO0FBS0QseUNBWkksQ0FhTDtBQWJLLDZDQWNBLElBQ0hKLEdBQUcsQ0FBQ0csVUFBSixDQUFlLE1BQWYsS0FDQUgsR0FBRyxDQUFDRSxRQUFKLENBQWEsS0FBYixDQURBLElBRUFGLEdBQUcsQ0FBQ0UsUUFBSixDQUFhLEtBQWIsQ0FGQSxJQUdBRixHQUFHLENBQUNFLFFBQUosQ0FBYSxVQUFiLENBSEEsSUFJQSxDQUFDRixHQUFHLENBQUNFLFFBQUosQ0FBYSxNQUFiLENBTEUsRUFNSDtBQUNBLGdFQUNFLHFFQUFDLHdEQUFEO0FBQU0sbURBQUssRUFBRTtBQUFFL0Msd0RBQVEsRUFBRSxFQUFaO0FBQWdCSiwwREFBVSxFQUFFLHFCQUE1QjtBQUFtRHNELDhEQUFjLEVBQUU7QUFBbkUsK0NBQWI7QUFBQSx3REFDR0wsR0FBRyxDQUFDSSxPQUFKLENBQVksZUFBWixFQUE2QixFQUE3QjtBQURIO0FBQUE7QUFBQTtBQUFBO0FBQUEscURBREY7QUFLRCwyQ0FaSSxDQWFMO0FBYkssK0NBY0EsSUFDSEosR0FBRyxDQUFDRyxVQUFKLENBQWUsTUFBZixLQUNBSCxHQUFHLENBQUNFLFFBQUosQ0FBYSxLQUFiLENBREEsSUFFQUYsR0FBRyxDQUFDRSxRQUFKLENBQWEsS0FBYixDQUZBLElBR0FGLEdBQUcsQ0FBQ0UsUUFBSixDQUFhLFVBQWIsQ0FIQSxJQUlBRixHQUFHLENBQUNFLFFBQUosQ0FBYSxNQUFiLENBTEcsRUFNSDtBQUNBLGtFQUNFLHFFQUFDLHdEQUFEO0FBQ0UscURBQUssRUFBRTtBQUFFL0MsMERBQVEsRUFBRSxFQUFaO0FBQWdCSiw0REFBVSxFQUFFLDJCQUE1QjtBQUF5RHNELGdFQUFjLEVBQUU7QUFBekUsaURBRFQ7QUFBQSwwREFHR0wsR0FBRyxDQUFDSSxPQUFKLENBQVksZUFBWixFQUE2QixFQUE3QjtBQUhIO0FBQUE7QUFBQTtBQUFBO0FBQUEsdURBREY7QUFPRCw2Q0FkSSxDQWVMO0FBZkssaURBZ0JBLElBQ0hKLEdBQUcsQ0FBQ0csVUFBSixDQUFlLE1BQWYsS0FDQUgsR0FBRyxDQUFDRSxRQUFKLENBQWEsS0FBYixDQURBLElBRUFGLEdBQUcsQ0FBQ0UsUUFBSixDQUFhLEtBQWIsQ0FGQSxJQUdBLENBQUNGLEdBQUcsQ0FBQ0UsUUFBSixDQUFhLFVBQWIsQ0FIRCxJQUlBRixHQUFHLENBQUNFLFFBQUosQ0FBYSxNQUFiLENBTEcsRUFNSDtBQUNBLG9FQUNFLHFFQUFDLHdEQUFEO0FBQU0sdURBQUssRUFBRTtBQUFFL0MsNERBQVEsRUFBRSxFQUFaO0FBQWdCSiw4REFBVSxFQUFFLG1CQUE1QjtBQUFpRHNELGtFQUFjLEVBQUU7QUFBakUsbURBQWI7QUFBQSw0REFDR0wsR0FBRyxDQUFDSSxPQUFKLENBQVksZUFBWixFQUE2QixFQUE3QjtBQURIO0FBQUE7QUFBQTtBQUFBO0FBQUEseURBREY7QUFLRCwrQ0FaSSxDQWFMO0FBYkssbURBY0EsSUFDSEosR0FBRyxDQUFDRyxVQUFKLENBQWUsTUFBZixLQUNBSCxHQUFHLENBQUNFLFFBQUosQ0FBYSxLQUFiLENBREEsSUFFQSxDQUFDRixHQUFHLENBQUNFLFFBQUosQ0FBYSxLQUFiLENBRkQsSUFHQUYsR0FBRyxDQUFDRSxRQUFKLENBQWEsVUFBYixDQUhBLElBSUFGLEdBQUcsQ0FBQ0UsUUFBSixDQUFhLE1BQWIsQ0FMRyxFQU1IO0FBQ0Esc0VBQ0UscUVBQUMsd0RBQUQ7QUFBTSx5REFBSyxFQUFFO0FBQUUvQyw4REFBUSxFQUFFLEVBQVo7QUFBZ0JKLGdFQUFVLEVBQUUsMkJBQTVCO0FBQXlEc0Qsb0VBQWMsRUFBRTtBQUF6RSxxREFBYjtBQUFBLDhEQUNHTCxHQUFHLENBQUNJLE9BQUosQ0FBWSxlQUFaLEVBQTZCLEVBQTdCO0FBREg7QUFBQTtBQUFBO0FBQUE7QUFBQSwyREFERjtBQUtELGlEQW5hNEIsQ0FvYTdCO0FBQ0E7OztBQUNBLHNCQUNFSixHQUFHLENBQUNHLFVBQUosQ0FBZSxNQUFmLEtBQ0EsQ0FBQ0gsR0FBRyxDQUFDRSxRQUFKLENBQWEsVUFBYixDQURELElBRUEsQ0FBQ0YsR0FBRyxDQUFDRSxRQUFKLENBQWEsTUFBYixDQUZELElBR0EsQ0FBQ0YsR0FBRyxDQUFDRSxRQUFKLENBQWEsS0FBYixDQUhELElBSUEsQ0FBQ0YsR0FBRyxDQUFDRSxRQUFKLENBQWEsS0FBYixDQUxILEVBTUU7QUFDQSx3Q0FBTyxxRUFBQyx3REFBRDtBQUFNLDJCQUFLLEVBQUU7QUFBRS9DLGdDQUFRLEVBQUU7QUFBWix1QkFBYjtBQUFBLGdDQUFnQzZDLEdBQUcsQ0FBQ0ksT0FBSixDQUFZLGVBQVosRUFBNkIsRUFBN0I7QUFBaEM7QUFBQTtBQUFBO0FBQUE7QUFBQSw2QkFBUDtBQUNELG1CQVJELENBU0E7QUFUQSx1QkFVSyxJQUNISixHQUFHLENBQUNHLFVBQUosQ0FBZSxNQUFmLEtBQ0FILEdBQUcsQ0FBQ0UsUUFBSixDQUFhLFVBQWIsQ0FEQSxJQUVBLENBQUNGLEdBQUcsQ0FBQ0UsUUFBSixDQUFhLE1BQWIsQ0FGRCxJQUdBLENBQUNGLEdBQUcsQ0FBQ0UsUUFBSixDQUFhLEtBQWIsQ0FIRCxJQUlBLENBQUNGLEdBQUcsQ0FBQ0UsUUFBSixDQUFhLEtBQWIsQ0FMRSxFQU1IO0FBQ0EsMENBQ0UscUVBQUMsd0RBQUQ7QUFBTSw2QkFBSyxFQUFFO0FBQUUvQyxrQ0FBUSxFQUFFLEVBQVo7QUFBZ0JKLG9DQUFVLEVBQUU7QUFBNUIseUJBQWI7QUFBQSxrQ0FBbUVpRCxHQUFHLENBQUNJLE9BQUosQ0FBWSxlQUFaLEVBQTZCLEVBQTdCO0FBQW5FO0FBQUE7QUFBQTtBQUFBO0FBQUEsK0JBREY7QUFHRCxxQkFWSSxDQVdMO0FBWEsseUJBWUEsSUFDSEosR0FBRyxDQUFDRyxVQUFKLENBQWUsTUFBZixLQUNBLENBQUNILEdBQUcsQ0FBQ0UsUUFBSixDQUFhLFVBQWIsQ0FERCxJQUVBRixHQUFHLENBQUNFLFFBQUosQ0FBYSxNQUFiLENBRkEsSUFHQSxDQUFDRixHQUFHLENBQUNFLFFBQUosQ0FBYSxLQUFiLENBSEQsSUFJQSxDQUFDRixHQUFHLENBQUNFLFFBQUosQ0FBYSxLQUFiLENBTEUsRUFNSDtBQUNBLDRDQUFPLHFFQUFDLHdEQUFEO0FBQU0sK0JBQUssRUFBRTtBQUFFL0Msb0NBQVEsRUFBRSxFQUFaO0FBQWdCSixzQ0FBVSxFQUFFO0FBQTVCLDJCQUFiO0FBQUEsb0NBQWlFaUQsR0FBRyxDQUFDSSxPQUFKLENBQVksZUFBWixFQUE2QixFQUE3QjtBQUFqRTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlDQUFQO0FBQ0QsdUJBUkksQ0FTTDtBQVRLLDJCQVVBLElBQ0hKLEdBQUcsQ0FBQ0csVUFBSixDQUFlLE1BQWYsS0FDQUgsR0FBRyxDQUFDRSxRQUFKLENBQWEsVUFBYixDQURBLElBRUFGLEdBQUcsQ0FBQ0UsUUFBSixDQUFhLE1BQWIsQ0FGQSxJQUdBLENBQUNGLEdBQUcsQ0FBQ0UsUUFBSixDQUFhLEtBQWIsQ0FIRCxJQUlBLENBQUNGLEdBQUcsQ0FBQ0UsUUFBSixDQUFhLEtBQWIsQ0FMRSxFQU1IO0FBQ0EsOENBQ0UscUVBQUMsd0RBQUQ7QUFBTSxpQ0FBSyxFQUFFO0FBQUUvQyxzQ0FBUSxFQUFFLEVBQVo7QUFBZ0JKLHdDQUFVLEVBQUU7QUFBNUIsNkJBQWI7QUFBQSxzQ0FDR2lELEdBQUcsQ0FBQ0ksT0FBSixDQUFZLGVBQVosRUFBNkIsRUFBN0I7QUFESDtBQUFBO0FBQUE7QUFBQTtBQUFBLG1DQURGO0FBS0QseUJBWkksQ0FhTDtBQWJLLDZCQWNBLElBQ0hKLEdBQUcsQ0FBQ0csVUFBSixDQUFlLE1BQWYsS0FDQUgsR0FBRyxDQUFDRSxRQUFKLENBQWEsS0FBYixDQURBLElBRUEsQ0FBQ0YsR0FBRyxDQUFDRSxRQUFKLENBQWEsVUFBYixDQUZELElBR0EsQ0FBQ0YsR0FBRyxDQUFDRSxRQUFKLENBQWEsTUFBYixDQUhELElBSUEsQ0FBQ0YsR0FBRyxDQUFDRSxRQUFKLENBQWEsS0FBYixDQUxFLEVBTUg7QUFDQSxnREFBTyxxRUFBQyx3REFBRDtBQUFNLG1DQUFLLEVBQUU7QUFBRS9DLHdDQUFRLEVBQUUsRUFBWjtBQUFnQmtELDhDQUFjLEVBQUU7QUFBaEMsK0JBQWI7QUFBQSx3Q0FBZ0VMLEdBQUcsQ0FBQ0ksT0FBSixDQUFZLGVBQVosRUFBNkIsRUFBN0I7QUFBaEU7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQ0FBUDtBQUNELDJCQVJJLENBU0w7QUFUSywrQkFVQSxJQUNISixHQUFHLENBQUNHLFVBQUosQ0FBZSxNQUFmLEtBQ0FILEdBQUcsQ0FBQ0UsUUFBSixDQUFhLEtBQWIsQ0FEQSxJQUVBRixHQUFHLENBQUNFLFFBQUosQ0FBYSxNQUFiLENBRkEsSUFHQSxDQUFDRixHQUFHLENBQUNFLFFBQUosQ0FBYSxVQUFiLENBSEQsSUFJQSxDQUFDRixHQUFHLENBQUNFLFFBQUosQ0FBYSxLQUFiLENBTEUsRUFNSDtBQUNBLGtEQUNFLHFFQUFDLHdEQUFEO0FBQU0scUNBQUssRUFBRTtBQUFFL0MsMENBQVEsRUFBRSxFQUFaO0FBQWdCSiw0Q0FBVSxFQUFFLG1CQUE1QjtBQUFpRHNELGdEQUFjLEVBQUU7QUFBakUsaUNBQWI7QUFBQSwwQ0FDR0wsR0FBRyxDQUFDSSxPQUFKLENBQVksZUFBWixFQUE2QixFQUE3QjtBQURIO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUNBREY7QUFLRCw2QkFaSSxDQWFMO0FBYkssaUNBY0EsSUFDSEosR0FBRyxDQUFDRyxVQUFKLENBQWUsTUFBZixLQUNBSCxHQUFHLENBQUNFLFFBQUosQ0FBYSxLQUFiLENBREEsSUFFQSxDQUFDRixHQUFHLENBQUNFLFFBQUosQ0FBYSxNQUFiLENBRkQsSUFHQUYsR0FBRyxDQUFDRSxRQUFKLENBQWEsVUFBYixDQUhBLElBSUEsQ0FBQ0YsR0FBRyxDQUFDRSxRQUFKLENBQWEsS0FBYixDQUxFLEVBTUg7QUFDQSxvREFDRSxxRUFBQyx3REFBRDtBQUFNLHVDQUFLLEVBQUU7QUFBRS9DLDRDQUFRLEVBQUUsRUFBWjtBQUFnQkosOENBQVUsRUFBRSxxQkFBNUI7QUFBbURzRCxrREFBYyxFQUFFO0FBQW5FLG1DQUFiO0FBQUEsNENBQ0dMLEdBQUcsQ0FBQ0ksT0FBSixDQUFZLGVBQVosRUFBNkIsRUFBN0I7QUFESDtBQUFBO0FBQUE7QUFBQTtBQUFBLHlDQURGO0FBS0QsK0JBWkksQ0FhTDtBQWJLLG1DQWNBLElBQ0hKLEdBQUcsQ0FBQ0csVUFBSixDQUFlLE1BQWYsS0FDQUgsR0FBRyxDQUFDRSxRQUFKLENBQWEsS0FBYixDQURBLElBRUFGLEdBQUcsQ0FBQ0UsUUFBSixDQUFhLE1BQWIsQ0FGQSxJQUdBRixHQUFHLENBQUNFLFFBQUosQ0FBYSxVQUFiLENBSEEsSUFJQSxDQUFDRixHQUFHLENBQUNFLFFBQUosQ0FBYSxLQUFiLENBTEUsRUFNSDtBQUNBLHNEQUNFLHFFQUFDLHdEQUFEO0FBQU0seUNBQUssRUFBRTtBQUFFL0MsOENBQVEsRUFBRSxFQUFaO0FBQWdCSixnREFBVSxFQUFFLDJCQUE1QjtBQUF5RHNELG9EQUFjLEVBQUU7QUFBekUscUNBQWI7QUFBQSw4Q0FDR0wsR0FBRyxDQUFDSSxPQUFKLENBQVksZUFBWixFQUE2QixFQUE3QjtBQURIO0FBQUE7QUFBQTtBQUFBO0FBQUEsMkNBREY7QUFLRCxpQ0FaSSxDQWFMO0FBYksscUNBY0EsSUFDSEosR0FBRyxDQUFDRyxVQUFKLENBQWUsTUFBZixLQUNBSCxHQUFHLENBQUNFLFFBQUosQ0FBYSxLQUFiLENBREEsSUFFQSxDQUFDRixHQUFHLENBQUNFLFFBQUosQ0FBYSxLQUFiLENBRkQsSUFHQSxDQUFDRixHQUFHLENBQUNFLFFBQUosQ0FBYSxVQUFiLENBSEQsSUFJQSxDQUFDRixHQUFHLENBQUNFLFFBQUosQ0FBYSxNQUFiLENBTEUsRUFNSDtBQUNBLHdEQUFPLHFFQUFDLHdEQUFEO0FBQU0sMkNBQUssRUFBRTtBQUFFL0MsZ0RBQVEsRUFBRSxFQUFaO0FBQWdCa0Qsc0RBQWMsRUFBRTtBQUFoQyx1Q0FBYjtBQUFBLGdEQUE2REwsR0FBRyxDQUFDSSxPQUFKLENBQVksZUFBWixFQUE2QixFQUE3QjtBQUE3RDtBQUFBO0FBQUE7QUFBQTtBQUFBLDZDQUFQO0FBQ0QsbUNBUkksQ0FTTDtBQVRLLHVDQVVBLElBQ0hKLEdBQUcsQ0FBQ0csVUFBSixDQUFlLE1BQWYsS0FDQUgsR0FBRyxDQUFDRSxRQUFKLENBQWEsS0FBYixDQURBLElBRUEsQ0FBQ0YsR0FBRyxDQUFDRSxRQUFKLENBQWEsS0FBYixDQUZELElBR0EsQ0FBQ0YsR0FBRyxDQUFDRSxRQUFKLENBQWEsVUFBYixDQUhELElBSUFGLEdBQUcsQ0FBQ0UsUUFBSixDQUFhLE1BQWIsQ0FMRyxFQU1IO0FBQ0EsMERBQ0UscUVBQUMsd0RBQUQ7QUFBTSw2Q0FBSyxFQUFFO0FBQUUvQyxrREFBUSxFQUFFLEVBQVo7QUFBZ0JKLG9EQUFVLEVBQUUsbUJBQTVCO0FBQWlEc0Qsd0RBQWMsRUFBRTtBQUFqRSx5Q0FBYjtBQUFBLGtEQUNHTCxHQUFHLENBQUNJLE9BQUosQ0FBWSxlQUFaLEVBQTZCLEVBQTdCO0FBREg7QUFBQTtBQUFBO0FBQUE7QUFBQSwrQ0FERjtBQUtELHFDQVpJLENBYUw7QUFiSyx5Q0FjQSxJQUNISixHQUFHLENBQUNHLFVBQUosQ0FBZSxNQUFmLEtBQ0FILEdBQUcsQ0FBQ0UsUUFBSixDQUFhLEtBQWIsQ0FEQSxJQUVBRixHQUFHLENBQUNFLFFBQUosQ0FBYSxLQUFiLENBRkEsSUFHQSxDQUFDRixHQUFHLENBQUNFLFFBQUosQ0FBYSxVQUFiLENBSEQsSUFJQSxDQUFDRixHQUFHLENBQUNFLFFBQUosQ0FBYSxNQUFiLENBTEUsRUFNSDtBQUNBLDREQUNFLHFFQUFDLHdEQUFEO0FBQU0sK0NBQUssRUFBRTtBQUFFL0Msb0RBQVEsRUFBRSxFQUFaO0FBQWdCa0QsMERBQWMsRUFBRTtBQUFoQywyQ0FBYjtBQUFBLG9EQUNHTCxHQUFHLENBQUNJLE9BQUosQ0FBWSxlQUFaLEVBQTZCLEVBQTdCO0FBREg7QUFBQTtBQUFBO0FBQUE7QUFBQSxpREFERjtBQUtELHVDQVpJLENBYUw7QUFiSywyQ0FjQSxJQUNISixHQUFHLENBQUNHLFVBQUosQ0FBZSxNQUFmLEtBQ0FILEdBQUcsQ0FBQ0UsUUFBSixDQUFhLEtBQWIsQ0FEQSxJQUVBLENBQUNGLEdBQUcsQ0FBQ0UsUUFBSixDQUFhLEtBQWIsQ0FGRCxJQUdBRixHQUFHLENBQUNFLFFBQUosQ0FBYSxVQUFiLENBSEEsSUFJQSxDQUFDRixHQUFHLENBQUNFLFFBQUosQ0FBYSxNQUFiLENBTEUsRUFNSDtBQUNBLDhEQUNFLHFFQUFDLHdEQUFEO0FBQU0saURBQUssRUFBRTtBQUFFL0Msc0RBQVEsRUFBRSxFQUFaO0FBQWdCSix3REFBVSxFQUFFLHFCQUE1QjtBQUFtRHNELDREQUFjLEVBQUU7QUFBbkUsNkNBQWI7QUFBQSxzREFDR0wsR0FBRyxDQUFDSSxPQUFKLENBQVksZUFBWixFQUE2QixFQUE3QjtBQURIO0FBQUE7QUFBQTtBQUFBO0FBQUEsbURBREY7QUFLRCx5Q0FaSSxDQWFMO0FBYkssNkNBY0EsSUFDSEosR0FBRyxDQUFDRyxVQUFKLENBQWUsTUFBZixLQUNBSCxHQUFHLENBQUNFLFFBQUosQ0FBYSxLQUFiLENBREEsSUFFQUYsR0FBRyxDQUFDRSxRQUFKLENBQWEsS0FBYixDQUZBLElBR0FGLEdBQUcsQ0FBQ0UsUUFBSixDQUFhLFVBQWIsQ0FIQSxJQUlBLENBQUNGLEdBQUcsQ0FBQ0UsUUFBSixDQUFhLE1BQWIsQ0FMRSxFQU1IO0FBQ0EsZ0VBQ0UscUVBQUMsd0RBQUQ7QUFBTSxtREFBSyxFQUFFO0FBQUUvQyx3REFBUSxFQUFFLEVBQVo7QUFBZ0JKLDBEQUFVLEVBQUUscUJBQTVCO0FBQW1Ec0QsOERBQWMsRUFBRTtBQUFuRSwrQ0FBYjtBQUFBLHdEQUNHTCxHQUFHLENBQUNJLE9BQUosQ0FBWSxlQUFaLEVBQTZCLEVBQTdCO0FBREg7QUFBQTtBQUFBO0FBQUE7QUFBQSxxREFERjtBQUtELDJDQVpJLENBYUw7QUFiSywrQ0FjQSxJQUNISixHQUFHLENBQUNHLFVBQUosQ0FBZSxNQUFmLEtBQ0FILEdBQUcsQ0FBQ0UsUUFBSixDQUFhLEtBQWIsQ0FEQSxJQUVBRixHQUFHLENBQUNFLFFBQUosQ0FBYSxLQUFiLENBRkEsSUFHQUYsR0FBRyxDQUFDRSxRQUFKLENBQWEsVUFBYixDQUhBLElBSUFGLEdBQUcsQ0FBQ0UsUUFBSixDQUFhLE1BQWIsQ0FMRyxFQU1IO0FBQ0Esa0VBQ0UscUVBQUMsd0RBQUQ7QUFDRSxxREFBSyxFQUFFO0FBQUUvQywwREFBUSxFQUFFLEVBQVo7QUFBZ0JKLDREQUFVLEVBQUUsMkJBQTVCO0FBQXlEc0QsZ0VBQWMsRUFBRTtBQUF6RSxpREFEVDtBQUFBLDBEQUdHTCxHQUFHLENBQUNJLE9BQUosQ0FBWSxlQUFaLEVBQTZCLEVBQTdCO0FBSEg7QUFBQTtBQUFBO0FBQUE7QUFBQSx1REFERjtBQU9ELDZDQWRJLENBZUw7QUFmSyxpREFnQkEsSUFDSEosR0FBRyxDQUFDRyxVQUFKLENBQWUsTUFBZixLQUNBSCxHQUFHLENBQUNFLFFBQUosQ0FBYSxLQUFiLENBREEsSUFFQUYsR0FBRyxDQUFDRSxRQUFKLENBQWEsS0FBYixDQUZBLElBR0EsQ0FBQ0YsR0FBRyxDQUFDRSxRQUFKLENBQWEsVUFBYixDQUhELElBSUFGLEdBQUcsQ0FBQ0UsUUFBSixDQUFhLE1BQWIsQ0FMRyxFQU1IO0FBQ0Esb0VBQ0UscUVBQUMsd0RBQUQ7QUFBTSx1REFBSyxFQUFFO0FBQUUvQyw0REFBUSxFQUFFLEVBQVo7QUFBZ0JKLDhEQUFVLEVBQUUsbUJBQTVCO0FBQWlEc0Qsa0VBQWMsRUFBRTtBQUFqRSxtREFBYjtBQUFBLDREQUNHTCxHQUFHLENBQUNJLE9BQUosQ0FBWSxlQUFaLEVBQTZCLEVBQTdCO0FBREg7QUFBQTtBQUFBO0FBQUE7QUFBQSx5REFERjtBQUtELCtDQVpJLENBYUw7QUFiSyxtREFjQSxJQUNISixHQUFHLENBQUNHLFVBQUosQ0FBZSxNQUFmLEtBQ0FILEdBQUcsQ0FBQ0UsUUFBSixDQUFhLEtBQWIsQ0FEQSxJQUVBLENBQUNGLEdBQUcsQ0FBQ0UsUUFBSixDQUFhLEtBQWIsQ0FGRCxJQUdBRixHQUFHLENBQUNFLFFBQUosQ0FBYSxVQUFiLENBSEEsSUFJQUYsR0FBRyxDQUFDRSxRQUFKLENBQWEsTUFBYixDQUxHLEVBTUg7QUFDQSxzRUFDRSxxRUFBQyx3REFBRDtBQUFNLHlEQUFLLEVBQUU7QUFBRS9DLDhEQUFRLEVBQUUsRUFBWjtBQUFnQkosZ0VBQVUsRUFBRSwyQkFBNUI7QUFBeURzRCxvRUFBYyxFQUFFO0FBQXpFLHFEQUFiO0FBQUEsOERBQ0dMLEdBQUcsQ0FBQ0ksT0FBSixDQUFZLGVBQVosRUFBNkIsRUFBN0I7QUFESDtBQUFBO0FBQUE7QUFBQTtBQUFBLDJEQURGO0FBS0QsaURBWkksQ0FhTDtBQUNBO0FBZEsscURBZUEsSUFBSUosR0FBRyxDQUFDRyxVQUFKLENBQWUsTUFBZixDQUFKLEVBQTRCO0FBQy9CLHdEQUFNRyxlQUFlLEdBQUdOLEdBQUcsQ0FBQ0ksT0FBSixDQUFZLE1BQVosRUFBb0IsRUFBcEIsQ0FBeEI7QUFDQSx3REFBTUcsY0FBYyxHQUFHRCxlQUFlLENBQUNGLE9BQWhCLENBQXdCLE9BQXhCLEVBQWlDLEVBQWpDLENBQXZCO0FBQ0Esd0RBQUlJLFFBQVEsR0FBR0QsY0FBYyxDQUFDRSxLQUFmLENBQXFCLFNBQXJCLENBQWYsQ0FIK0IsQ0FLL0I7O0FBQ0EseURBQUssSUFBSUMsQ0FBQyxHQUFHLENBQWIsRUFBZ0JBLENBQUMsR0FBR0YsUUFBUSxDQUFDdEIsTUFBN0IsRUFBcUN3QixDQUFDLEVBQXRDLEVBQTBDO0FBQ3hDLDBEQUFJRixRQUFRLENBQUNFLENBQUQsQ0FBUixDQUFZQyxTQUFaLENBQXNCLENBQXRCLEVBQXlCLENBQXpCLEtBQStCLEdBQW5DLEVBQXdDO0FBQ3RDSCxnRUFBUSxDQUFDRSxDQUFELENBQVIsR0FBYyxNQUFNRixRQUFRLENBQUNFLENBQUQsQ0FBNUI7QUFDRCx1REFIdUMsQ0FLeEM7QUFDQTtBQUNBOztBQUNEOztBQUNEcEMsMkRBQU8sQ0FBQ0MsR0FBUixDQUFZaUMsUUFBWjtBQUNBLHdEQUFJSSxDQUFDLEdBQUcsQ0FBUjtBQUNBLDJEQUFPSixRQUFRLENBQUNoQyxHQUFULENBQWEsVUFBQ3FDLElBQUQsRUFBVTtBQUM1QnZDLDZEQUFPLENBQUNDLEdBQVIsQ0FBWXNDLElBQVo7O0FBQ0EsMERBQ0VBLElBQUksQ0FBQ1YsVUFBTCxDQUFnQixNQUFoQixLQUNBLENBQUNVLElBQUksQ0FBQ1gsUUFBTCxDQUFjLFVBQWQsQ0FERCxJQUVBLENBQUNXLElBQUksQ0FBQ1gsUUFBTCxDQUFjLE1BQWQsQ0FGRCxJQUdBLENBQUNXLElBQUksQ0FBQ1gsUUFBTCxDQUFjLEtBQWQsQ0FIRCxJQUlBLENBQUNXLElBQUksQ0FBQ1gsUUFBTCxDQUFjLEtBQWQsQ0FMSCxFQU1FO0FBQ0EsNEVBQ0UscUVBQUMsd0RBQUQ7QUFBTSwrREFBSyxFQUFFO0FBQUVZLHNFQUFVLEVBQUU7QUFBZCwyREFBYjtBQUFBLGlGQUNFLHFFQUFDLHdEQUFEO0FBQU0saUVBQUssRUFBRTtBQUFFM0Qsc0VBQVEsRUFBRTtBQUFaLDZEQUFiO0FBQUEsZ0ZBQW1DeUQsQ0FBQyxFQUFwQyxlQUEyQ0MsSUFBSSxDQUFDVCxPQUFMLENBQWEsZUFBYixFQUE4QixFQUE5QixDQUEzQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlFQURGO0FBS0QsdURBWkQsQ0FhQTtBQWJBLDJEQWNLLElBQ0hTLElBQUksQ0FBQ1YsVUFBTCxDQUFnQixNQUFoQixLQUNBVSxJQUFJLENBQUNYLFFBQUwsQ0FBYyxVQUFkLENBREEsSUFFQSxDQUFDVyxJQUFJLENBQUNYLFFBQUwsQ0FBYyxNQUFkLENBRkQsSUFHQSxDQUFDVyxJQUFJLENBQUNYLFFBQUwsQ0FBYyxLQUFkLENBSEQsSUFJQSxDQUFDVyxJQUFJLENBQUNYLFFBQUwsQ0FBYyxLQUFkLENBTEUsRUFNSDtBQUNBLDhFQUNFLHFFQUFDLHdEQUFEO0FBQU0saUVBQUssRUFBRTtBQUFFWSx3RUFBVSxFQUFFO0FBQWQsNkRBQWI7QUFBQSxtRkFDRSxxRUFBQyx3REFBRDtBQUFNLG1FQUFLLEVBQUU7QUFBRTNELHdFQUFRLEVBQUUsRUFBWjtBQUFnQkosMEVBQVUsRUFBRTtBQUE1QiwrREFBYjtBQUFBLGtGQUFzRTZELENBQUMsRUFBdkUsZUFBOEVDLElBQUksQ0FBQ1QsT0FBTCxDQUM1RSxlQUQ0RSxFQUU1RSxFQUY0RSxDQUE5RTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1FQURGO0FBUUQseURBZkksQ0FnQkw7QUFoQkssNkRBaUJBLElBQ0hTLElBQUksQ0FBQ1YsVUFBTCxDQUFnQixNQUFoQixLQUNBLENBQUNVLElBQUksQ0FBQ1gsUUFBTCxDQUFjLFVBQWQsQ0FERCxJQUVBVyxJQUFJLENBQUNYLFFBQUwsQ0FBYyxNQUFkLENBRkEsSUFHQSxDQUFDVyxJQUFJLENBQUNYLFFBQUwsQ0FBYyxLQUFkLENBSEQsSUFJQSxDQUFDVyxJQUFJLENBQUNYLFFBQUwsQ0FBYyxLQUFkLENBTEUsRUFNSDtBQUNBLGdGQUNFLHFFQUFDLHdEQUFEO0FBQU0sbUVBQUssRUFBRTtBQUFFWSwwRUFBVSxFQUFFO0FBQWQsK0RBQWI7QUFBQSxxRkFDRSxxRUFBQyx3REFBRDtBQUFNLHFFQUFLLEVBQUU7QUFBRTNELDBFQUFRLEVBQUUsRUFBWjtBQUFnQkosNEVBQVUsRUFBRTtBQUE1QixpRUFBYjtBQUFBLG9GQUFvRTZELENBQUMsRUFBckUsZUFBNEVDLElBQUksQ0FBQ1QsT0FBTCxDQUMxRSxlQUQwRSxFQUUxRSxFQUYwRSxDQUE1RTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLHFFQURGO0FBUUQsMkRBZkksQ0FnQkw7QUFoQkssK0RBaUJBLElBQ0hTLElBQUksQ0FBQ1YsVUFBTCxDQUFnQixNQUFoQixLQUNBVSxJQUFJLENBQUNYLFFBQUwsQ0FBYyxVQUFkLENBREEsSUFFQVcsSUFBSSxDQUFDWCxRQUFMLENBQWMsTUFBZCxDQUZBLElBR0EsQ0FBQ1csSUFBSSxDQUFDWCxRQUFMLENBQWMsS0FBZCxDQUhELElBSUEsQ0FBQ1csSUFBSSxDQUFDWCxRQUFMLENBQWMsS0FBZCxDQUxFLEVBTUg7QUFDQSxrRkFDRSxxRUFBQyx3REFBRDtBQUFNLHFFQUFLLEVBQUU7QUFBRVksNEVBQVUsRUFBRTtBQUFkLGlFQUFiO0FBQUEsdUZBQ0UscUVBQUMsd0RBQUQ7QUFBTSx1RUFBSyxFQUFFO0FBQUUzRCw0RUFBUSxFQUFFLEVBQVo7QUFBZ0JKLDhFQUFVLEVBQUU7QUFBNUIsbUVBQWI7QUFBQSxzRkFBNEU2RCxDQUFDLEVBQTdFLGVBQW9GQyxJQUFJLENBQUNULE9BQUwsQ0FDbEYsZUFEa0YsRUFFbEYsRUFGa0YsQ0FBcEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSx1RUFERjtBQVFELDZEQWZJLENBZ0JMO0FBaEJLLGlFQWlCQSxJQUNIUyxJQUFJLENBQUNWLFVBQUwsQ0FBZ0IsTUFBaEIsS0FDQVUsSUFBSSxDQUFDWCxRQUFMLENBQWMsS0FBZCxDQURBLElBRUEsQ0FBQ1csSUFBSSxDQUFDWCxRQUFMLENBQWMsVUFBZCxDQUZELElBR0EsQ0FBQ1csSUFBSSxDQUFDWCxRQUFMLENBQWMsTUFBZCxDQUhELElBSUEsQ0FBQ1csSUFBSSxDQUFDWCxRQUFMLENBQWMsS0FBZCxDQUxFLEVBTUg7QUFDQSxvRkFDRSxxRUFBQyx3REFBRDtBQUFNLHVFQUFLLEVBQUU7QUFBRVksOEVBQVUsRUFBRTtBQUFkLG1FQUFiO0FBQUEseUZBQ0UscUVBQUMsd0RBQUQ7QUFBTSx5RUFBSyxFQUFFO0FBQUUzRCw4RUFBUSxFQUFFLEVBQVo7QUFBZ0JrRCxvRkFBYyxFQUFFO0FBQWhDLHFFQUFiO0FBQUEsd0ZBQW1FTyxDQUFDLEVBQXBFLGVBQTJFQyxJQUFJLENBQUNULE9BQUwsQ0FDekUsZUFEeUUsRUFFekUsRUFGeUUsQ0FBM0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSx5RUFERjtBQVFELCtEQWZJLENBZ0JMO0FBaEJLLG1FQWlCQSxJQUNIUyxJQUFJLENBQUNWLFVBQUwsQ0FBZ0IsTUFBaEIsS0FDQVUsSUFBSSxDQUFDWCxRQUFMLENBQWMsS0FBZCxDQURBLElBRUFXLElBQUksQ0FBQ1gsUUFBTCxDQUFjLE1BQWQsQ0FGQSxJQUdBLENBQUNXLElBQUksQ0FBQ1gsUUFBTCxDQUFjLFVBQWQsQ0FIRCxJQUlBLENBQUNXLElBQUksQ0FBQ1gsUUFBTCxDQUFjLEtBQWQsQ0FMRSxFQU1IO0FBQ0Esc0ZBQ0UscUVBQUMsd0RBQUQ7QUFBTSx5RUFBSyxFQUFFO0FBQUVZLGdGQUFVLEVBQUU7QUFBZCxxRUFBYjtBQUFBLDJGQUNFLHFFQUFDLHdEQUFEO0FBQ0UsMkVBQUssRUFBRTtBQUFFM0QsZ0ZBQVEsRUFBRSxFQUFaO0FBQWdCSixrRkFBVSxFQUFFLG1CQUE1QjtBQUFpRHNELHNGQUFjLEVBQUU7QUFBakUsdUVBRFQ7QUFBQSwwRkFFS08sQ0FBQyxFQUZOLGVBRWFDLElBQUksQ0FBQ1QsT0FBTCxDQUFhLGVBQWIsRUFBOEIsRUFBOUIsQ0FGYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLDJFQURGO0FBT0QsaUVBZEksQ0FlTDtBQWZLLHFFQWdCQSxJQUNIUyxJQUFJLENBQUNWLFVBQUwsQ0FBZ0IsTUFBaEIsS0FDQVUsSUFBSSxDQUFDWCxRQUFMLENBQWMsS0FBZCxDQURBLElBRUEsQ0FBQ1csSUFBSSxDQUFDWCxRQUFMLENBQWMsTUFBZCxDQUZELElBR0FXLElBQUksQ0FBQ1gsUUFBTCxDQUFjLFVBQWQsQ0FIQSxJQUlBLENBQUNXLElBQUksQ0FBQ1gsUUFBTCxDQUFjLEtBQWQsQ0FMRSxFQU1IO0FBQ0Esd0ZBQ0UscUVBQUMsd0RBQUQ7QUFBTSwyRUFBSyxFQUFFO0FBQUVZLGtGQUFVLEVBQUU7QUFBZCx1RUFBYjtBQUFBLDZGQUNFLHFFQUFDLHdEQUFEO0FBQ0UsNkVBQUssRUFBRTtBQUFFM0Qsa0ZBQVEsRUFBRSxFQUFaO0FBQWdCSixvRkFBVSxFQUFFLHFCQUE1QjtBQUFtRHNELHdGQUFjLEVBQUU7QUFBbkUseUVBRFQ7QUFBQSw0RkFFS08sQ0FBQyxFQUZOLGVBRWFDLElBQUksQ0FBQ1QsT0FBTCxDQUFhLGVBQWIsRUFBOEIsRUFBOUIsQ0FGYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLDZFQURGO0FBT0QsbUVBZEksQ0FlTDtBQWZLLHVFQWdCQSxJQUNIUyxJQUFJLENBQUNWLFVBQUwsQ0FBZ0IsTUFBaEIsS0FDQVUsSUFBSSxDQUFDWCxRQUFMLENBQWMsS0FBZCxDQURBLElBRUFXLElBQUksQ0FBQ1gsUUFBTCxDQUFjLE1BQWQsQ0FGQSxJQUdBVyxJQUFJLENBQUNYLFFBQUwsQ0FBYyxVQUFkLENBSEEsSUFJQSxDQUFDVyxJQUFJLENBQUNYLFFBQUwsQ0FBYyxLQUFkLENBTEUsRUFNSDtBQUNBLDBGQUNFLHFFQUFDLHdEQUFEO0FBQU0sNkVBQUssRUFBRTtBQUFFWSxvRkFBVSxFQUFFO0FBQWQseUVBQWI7QUFBQSwrRkFDRSxxRUFBQyx3REFBRDtBQUNFLCtFQUFLLEVBQUU7QUFBRTNELG9GQUFRLEVBQUUsRUFBWjtBQUFnQkosc0ZBQVUsRUFBRSwyQkFBNUI7QUFBeURzRCwwRkFBYyxFQUFFO0FBQXpFLDJFQURUO0FBQUEsOEZBRUtPLENBQUMsRUFGTixlQUVhQyxJQUFJLENBQUNULE9BQUwsQ0FBYSxlQUFiLEVBQThCLEVBQTlCLENBRmI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSwrRUFERjtBQU9ELHFFQWRJLENBZUw7QUFmSyx5RUFnQkEsSUFDSFMsSUFBSSxDQUFDVixVQUFMLENBQWdCLE1BQWhCLEtBQ0FVLElBQUksQ0FBQ1gsUUFBTCxDQUFjLEtBQWQsQ0FEQSxJQUVBLENBQUNXLElBQUksQ0FBQ1gsUUFBTCxDQUFjLEtBQWQsQ0FGRCxJQUdBLENBQUNXLElBQUksQ0FBQ1gsUUFBTCxDQUFjLFVBQWQsQ0FIRCxJQUlBLENBQUNXLElBQUksQ0FBQ1gsUUFBTCxDQUFjLE1BQWQsQ0FMRSxFQU1IO0FBQ0EsNEZBQ0UscUVBQUMsd0RBQUQ7QUFBTSwrRUFBSyxFQUFFO0FBQUVZLHNGQUFVLEVBQUU7QUFBZCwyRUFBYjtBQUFBLGlHQUNFLHFFQUFDLHdEQUFEO0FBQU0saUZBQUssRUFBRTtBQUFFM0Qsc0ZBQVEsRUFBRSxFQUFaO0FBQWdCa0QsNEZBQWMsRUFBRTtBQUFoQyw2RUFBYjtBQUFBLGdHQUFnRU8sQ0FBQyxFQUFqRSxlQUF3RUMsSUFBSSxDQUFDVCxPQUFMLENBQ3RFLGVBRHNFLEVBRXRFLEVBRnNFLENBQXhFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUZBREY7QUFRRCx1RUFmSSxDQWdCTDtBQWhCSywyRUFpQkEsSUFDSFMsSUFBSSxDQUFDVixVQUFMLENBQWdCLE1BQWhCLEtBQ0FVLElBQUksQ0FBQ1gsUUFBTCxDQUFjLEtBQWQsQ0FEQSxJQUVBLENBQUNXLElBQUksQ0FBQ1gsUUFBTCxDQUFjLEtBQWQsQ0FGRCxJQUdBLENBQUNXLElBQUksQ0FBQ1gsUUFBTCxDQUFjLFVBQWQsQ0FIRCxJQUlBVyxJQUFJLENBQUNYLFFBQUwsQ0FBYyxNQUFkLENBTEcsRUFNSDtBQUNBLDhGQUNFLHFFQUFDLHdEQUFEO0FBQU0saUZBQUssRUFBRTtBQUFFWSx3RkFBVSxFQUFFO0FBQWQsNkVBQWI7QUFBQSxtR0FDRSxxRUFBQyx3REFBRDtBQUNFLG1GQUFLLEVBQUU7QUFBRTNELHdGQUFRLEVBQUUsRUFBWjtBQUFnQkosMEZBQVUsRUFBRSxtQkFBNUI7QUFBaURzRCw4RkFBYyxFQUFFO0FBQWpFLCtFQURUO0FBQUEsa0dBRUtPLENBQUMsRUFGTixlQUVhQyxJQUFJLENBQUNULE9BQUwsQ0FBYSxlQUFiLEVBQThCLEVBQTlCLENBRmI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxtRkFERjtBQU9ELHlFQWRJLENBZUw7QUFmSyw2RUFnQkEsSUFDSFMsSUFBSSxDQUFDVixVQUFMLENBQWdCLE1BQWhCLEtBQ0FVLElBQUksQ0FBQ1gsUUFBTCxDQUFjLEtBQWQsQ0FEQSxJQUVBVyxJQUFJLENBQUNYLFFBQUwsQ0FBYyxLQUFkLENBRkEsSUFHQSxDQUFDVyxJQUFJLENBQUNYLFFBQUwsQ0FBYyxVQUFkLENBSEQsSUFJQSxDQUFDVyxJQUFJLENBQUNYLFFBQUwsQ0FBYyxNQUFkLENBTEUsRUFNSDtBQUNBLGdHQUNFLHFFQUFDLHdEQUFEO0FBQU0sbUZBQUssRUFBRTtBQUFFWSwwRkFBVSxFQUFFO0FBQWQsK0VBQWI7QUFBQSxxR0FDRSxxRUFBQyx3REFBRDtBQUFNLHFGQUFLLEVBQUU7QUFBRTNELDBGQUFRLEVBQUUsRUFBWjtBQUFnQmtELGdHQUFjLEVBQUU7QUFBaEMsaUZBQWI7QUFBQSxvR0FBNkVPLENBQUMsRUFBOUUsZUFBcUZDLElBQUksQ0FBQ1QsT0FBTCxDQUNuRixlQURtRixFQUVuRixFQUZtRixDQUFyRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLHFGQURGO0FBUUQsMkVBZkksQ0FnQkw7QUFoQkssK0VBaUJBLElBQ0hTLElBQUksQ0FBQ1YsVUFBTCxDQUFnQixNQUFoQixLQUNBVSxJQUFJLENBQUNYLFFBQUwsQ0FBYyxLQUFkLENBREEsSUFFQSxDQUFDVyxJQUFJLENBQUNYLFFBQUwsQ0FBYyxLQUFkLENBRkQsSUFHQVcsSUFBSSxDQUFDWCxRQUFMLENBQWMsVUFBZCxDQUhBLElBSUEsQ0FBQ1csSUFBSSxDQUFDWCxRQUFMLENBQWMsTUFBZCxDQUxFLEVBTUg7QUFDQSxrR0FDRSxxRUFBQyx3REFBRDtBQUFNLHFGQUFLLEVBQUU7QUFBRVksNEZBQVUsRUFBRTtBQUFkLGlGQUFiO0FBQUEsdUdBQ0UscUVBQUMsd0RBQUQ7QUFDRSx1RkFBSyxFQUFFO0FBQUUzRCw0RkFBUSxFQUFFLEVBQVo7QUFBZ0JKLDhGQUFVLEVBQUUscUJBQTVCO0FBQW1Ec0Qsa0dBQWMsRUFBRTtBQUFuRSxtRkFEVDtBQUFBLHNHQUVLTyxDQUFDLEVBRk4sZUFFYUMsSUFBSSxDQUFDVCxPQUFMLENBQWEsZUFBYixFQUE4QixFQUE5QixDQUZiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUZBREY7QUFPRCw2RUFkSSxDQWVMO0FBZkssaUZBZ0JBLElBQ0hTLElBQUksQ0FBQ1YsVUFBTCxDQUFnQixNQUFoQixLQUNBVSxJQUFJLENBQUNYLFFBQUwsQ0FBYyxLQUFkLENBREEsSUFFQVcsSUFBSSxDQUFDWCxRQUFMLENBQWMsS0FBZCxDQUZBLElBR0FXLElBQUksQ0FBQ1gsUUFBTCxDQUFjLFVBQWQsQ0FIQSxJQUlBLENBQUNXLElBQUksQ0FBQ1gsUUFBTCxDQUFjLE1BQWQsQ0FMRSxFQU1IO0FBQ0Esb0dBQ0UscUVBQUMsd0RBQUQ7QUFBTSx1RkFBSyxFQUFFO0FBQUVZLDhGQUFVLEVBQUU7QUFBZCxtRkFBYjtBQUFBLHlHQUNFLHFFQUFDLHdEQUFEO0FBQ0UseUZBQUssRUFBRTtBQUFFM0QsOEZBQVEsRUFBRSxFQUFaO0FBQWdCSixnR0FBVSxFQUFFLHFCQUE1QjtBQUFtRHNELG9HQUFjLEVBQUU7QUFBbkUscUZBRFQ7QUFBQSx3R0FFS08sQ0FBQyxFQUZOLGVBRWFDLElBQUksQ0FBQ1QsT0FBTCxDQUFhLGVBQWIsRUFBOEIsRUFBOUIsQ0FGYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLHlGQURGO0FBT0QsK0VBZEksQ0FlTDtBQWZLLG1GQWdCQSxJQUNIUyxJQUFJLENBQUNWLFVBQUwsQ0FBZ0IsTUFBaEIsS0FDQVUsSUFBSSxDQUFDWCxRQUFMLENBQWMsS0FBZCxDQURBLElBRUFXLElBQUksQ0FBQ1gsUUFBTCxDQUFjLEtBQWQsQ0FGQSxJQUdBVyxJQUFJLENBQUNYLFFBQUwsQ0FBYyxVQUFkLENBSEEsSUFJQVcsSUFBSSxDQUFDWCxRQUFMLENBQWMsTUFBZCxDQUxHLEVBTUg7QUFDQSxzR0FDRSxxRUFBQyx3REFBRDtBQUFNLHlGQUFLLEVBQUU7QUFBRVksZ0dBQVUsRUFBRTtBQUFkLHFGQUFiO0FBQUEsMkdBQ0UscUVBQUMsd0RBQUQ7QUFDRSwyRkFBSyxFQUFFO0FBQ0wzRCxnR0FBUSxFQUFFLEVBREw7QUFFTEosa0dBQVUsRUFBRSwyQkFGUDtBQUdMc0Qsc0dBQWMsRUFBRTtBQUhYLHVGQURUO0FBQUEsMEdBTUtPLENBQUMsRUFOTixlQU1hQyxJQUFJLENBQUNULE9BQUwsQ0FBYSxlQUFiLEVBQThCLEVBQTlCLENBTmI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSwyRkFERjtBQVdELGlGQWxCSSxDQW1CTDtBQW5CSyxxRkFvQkEsSUFDSFMsSUFBSSxDQUFDVixVQUFMLENBQWdCLE1BQWhCLEtBQ0FVLElBQUksQ0FBQ1gsUUFBTCxDQUFjLEtBQWQsQ0FEQSxJQUVBVyxJQUFJLENBQUNYLFFBQUwsQ0FBYyxLQUFkLENBRkEsSUFHQSxDQUFDVyxJQUFJLENBQUNYLFFBQUwsQ0FBYyxVQUFkLENBSEQsSUFJQVcsSUFBSSxDQUFDWCxRQUFMLENBQWMsTUFBZCxDQUxHLEVBTUg7QUFDQSx3R0FDRSxxRUFBQyx3REFBRDtBQUFNLDJGQUFLLEVBQUU7QUFBRVksa0dBQVUsRUFBRTtBQUFkLHVGQUFiO0FBQUEsNkdBQ0UscUVBQUMsd0RBQUQ7QUFDRSw2RkFBSyxFQUFFO0FBQ0wzRCxrR0FBUSxFQUFFLEVBREw7QUFFTEosb0dBQVUsRUFBRSxtQkFGUDtBQUdMc0Qsd0dBQWMsRUFBRTtBQUhYLHlGQURUO0FBQUEsNEdBTUtPLENBQUMsRUFOTixlQU1hQyxJQUFJLENBQUNULE9BQUwsQ0FBYSxlQUFiLEVBQThCLEVBQTlCLENBTmI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSw2RkFERjtBQVdELG1GQWxCSSxDQW1CTDtBQW5CSyx1RkFvQkEsSUFDSFMsSUFBSSxDQUFDVixVQUFMLENBQWdCLE1BQWhCLEtBQ0FVLElBQUksQ0FBQ1gsUUFBTCxDQUFjLEtBQWQsQ0FEQSxJQUVBLENBQUNXLElBQUksQ0FBQ1gsUUFBTCxDQUFjLEtBQWQsQ0FGRCxJQUdBVyxJQUFJLENBQUNYLFFBQUwsQ0FBYyxVQUFkLENBSEEsSUFJQVcsSUFBSSxDQUFDWCxRQUFMLENBQWMsTUFBZCxDQUxHLEVBTUg7QUFDQSwwR0FDRSxxRUFBQyx3REFBRDtBQUFNLDZGQUFLLEVBQUU7QUFBRVksb0dBQVUsRUFBRTtBQUFkLHlGQUFiO0FBQUEsK0dBQ0UscUVBQUMsd0RBQUQ7QUFDRSwrRkFBSyxFQUFFO0FBQ0wzRCxvR0FBUSxFQUFFLEVBREw7QUFFTEosc0dBQVUsRUFBRSwyQkFGUDtBQUdMc0QsMEdBQWMsRUFBRTtBQUhYLDJGQURUO0FBQUEsOEdBTUtPLENBQUMsRUFOTixlQU1hQyxJQUFJLENBQUNULE9BQUwsQ0FBYSxlQUFiLEVBQThCLEVBQTlCLENBTmI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSwrRkFERjtBQVdELHFGQWhSMkIsQ0FpUjVCOztBQUNELHFEQWxSTSxDQUFQO0FBbVJEO0FBQ0YsaUJBNTVCQTtBQURIO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBREY7QUFuTUo7QUFxbUNELFNBdm1DQSxDQUpIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURGO0FBK21DRCxLQWhuQ0EsQ0FOSDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQTBuQ0QsQ0E3bkNEOztLQUFNakMsVTs7QUErbkNOLElBQU00QyxnQkFBZ0IsR0FBRyxTQUFuQkEsZ0JBQW1CLFFBQWtCO0FBQUE7O0FBQUEsTUFBZjFDLFFBQWUsU0FBZkEsUUFBZTtBQUN6QyxNQUFNMkMsSUFBSSxHQUFHQywyRUFBYSxFQUExQjtBQUVBLE1BQU1DLGFBQWEsR0FBR0Msb0RBQU0sRUFBNUI7QUFDQSxNQUFNQyxjQUFjLEdBQUdELG9EQUFNLEVBQTdCO0FBQ0EsTUFBTUUsaUJBQWlCLEdBQUdGLG9EQUFNLEVBQWhDOztBQUx5QyxrQkFNeUJHLHNEQUFRLENBQUMsS0FBRCxDQU5qQztBQUFBLE1BTWxDQyx5QkFOa0M7QUFBQSxNQU1QQyw0QkFOTzs7QUFBQSxtQkFPcUJGLHNEQUFRLENBQUMsS0FBRCxDQVA3QjtBQUFBLE1BT2xDRyx1QkFQa0M7QUFBQSxNQU9UQywwQkFQUzs7QUFRekMsTUFBTUMsa0JBQWtCLEdBQUcsU0FBckJBLGtCQUFxQixHQUFNO0FBQy9CLFFBQUksQ0FBQ0YsdUJBQUwsRUFBOEI7QUFDNUJHLGtEQUFJLENBQUNDLEVBQUwsQ0FBUVIsaUJBQWlCLENBQUNTLE9BQTFCLEVBQW1DO0FBQUVDLGlCQUFTLEVBQUUsQ0FBYjtBQUFnQkMsZ0JBQVEsRUFBRSxDQUExQjtBQUE2QkMsWUFBSSxFQUFFQywyQ0FBTUE7QUFBekMsT0FBbkMsRUFENEIsQ0FFNUI7O0FBQ0FSLGdDQUEwQixDQUFDLElBQUQsQ0FBMUI7QUFDQUYsa0NBQTRCLENBQUMsSUFBRCxDQUE1QjtBQUNELEtBTEQsTUFLTyxJQUFJQyx1QkFBSixFQUE2QjtBQUNsQ0csa0RBQUksQ0FBQ0MsRUFBTCxDQUFRUixpQkFBaUIsQ0FBQ1MsT0FBMUIsRUFBbUM7QUFBRUMsaUJBQVMsRUFBRSxDQUFiO0FBQWdCQyxnQkFBUSxFQUFFLENBQTFCO0FBQTZCQyxZQUFJLEVBQUVDLDJDQUFNQTtBQUF6QyxPQUFuQyxFQURrQyxDQUVsQzs7QUFDQVIsZ0NBQTBCLENBQUMsS0FBRCxDQUExQjtBQUNBRixrQ0FBNEIsQ0FBQyxLQUFELENBQTVCO0FBQ0Q7QUFDRixHQVpEOztBQVJ5QyxtQkFzQlBGLHNEQUFRLEVBdEJEO0FBQUEsTUFzQmxDbEQsU0F0QmtDO0FBQUEsTUFzQnZCK0QsWUF0QnVCOztBQXVCekNDLHlEQUFTLENBQUMsWUFBTTtBQUNkOUQsV0FBTyxDQUFDQyxHQUFSLENBQVlGLFFBQVo7QUFDQSxRQUFNZ0UsV0FBVyxHQUFHLEVBQXBCO0FBQ0FGLGdCQUFZLENBQUNFLFdBQUQsQ0FBWjtBQUNBaEUsWUFBUSxJQUNOQSxRQUFRLENBQUNHLEdBQVQsQ0FBYSxVQUFDQyxPQUFELEVBQWE7QUFDeEJBLGFBQU8sQ0FBQ0csTUFBUixDQUFlSixHQUFmLENBQW1CLFVBQUNLLEtBQUQsRUFBVztBQUM1QixZQUFJQSxLQUFLLENBQUNDLElBQU4sSUFBYyxPQUFsQixFQUEyQjtBQUN6QixjQUFNd0QsTUFBTSxHQUNWekQsS0FBSyxDQUFDMEQsU0FBTixJQUFtQixXQUFuQixJQUFrQzFELEtBQUssQ0FBQzBELFNBQU4sSUFBbUIsZ0JBQXJELEdBQ0ksQ0FDRSxvQkFERixFQUVFLG9CQUZGLEVBR0UsbUJBSEYsRUFJRSxtQkFKRixFQUtFLG1CQUxGLEVBTUUsbUJBTkYsRUFPRSxtQkFQRixFQVFFLG9CQVJGLEVBU0Usb0JBVEYsRUFVRSxtQkFWRixFQVdFLG9CQVhGLEVBWUUsbUJBWkYsQ0FESixHQWVJMUQsS0FBSyxDQUFDMEQsU0FBTixJQUFtQixZQUFuQixJQUFtQzFELEtBQUssQ0FBQzBELFNBQU4sSUFBbUIsWUFBdEQsR0FDQSxxQkFEQSxHQUVBLENBQ0UscUJBREYsRUFFRSxxQkFGRixFQUdFLHFCQUhGLEVBSUUscUJBSkYsRUFLRSxxQkFMRixFQU1FLHFCQU5GLEVBT0UscUJBUEYsRUFRRSxxQkFSRixFQVNFLHFCQVRGLEVBVUUscUJBVkYsRUFXRSxxQkFYRixFQVlFLHFCQVpGLENBbEJOO0FBaUNBLGNBQU1DLE9BQU8sR0FDWDNELEtBQUssQ0FBQzBELFNBQU4sSUFBbUIsV0FBbkIsSUFBa0MxRCxLQUFLLENBQUMwRCxTQUFOLElBQW1CLGdCQUFyRCxHQUNJLENBQ0Usb0JBREYsRUFFRSxvQkFGRixFQUdFLG1CQUhGLEVBSUUsbUJBSkYsRUFLRSxtQkFMRixFQU1FLG1CQU5GLEVBT0UsbUJBUEYsRUFRRSxvQkFSRixFQVNFLG9CQVRGLEVBVUUsbUJBVkYsRUFXRSxvQkFYRixFQVlFLG1CQVpGLENBREosR0FlSTFELEtBQUssQ0FBQzBELFNBQU4sSUFBbUIsWUFBbkIsSUFBbUMxRCxLQUFLLENBQUMwRCxTQUFOLElBQW1CLFlBQXRELEdBQ0EscUJBREEsR0FFQSxDQUNFLHFCQURGLEVBRUUscUJBRkYsRUFHRSxxQkFIRixFQUlFLHFCQUpGLEVBS0UscUJBTEYsRUFNRSxxQkFORixFQU9FLHFCQVBGLEVBUUUscUJBUkYsRUFTRSxxQkFURixFQVVFLHFCQVZGLEVBV0UscUJBWEYsRUFZRSxxQkFaRixDQWxCTjtBQWlDQSxjQUFNRSxPQUFPLEdBQ1g1RCxLQUFLLENBQUMwRCxTQUFOLElBQW1CLFdBQW5CLElBQWtDMUQsS0FBSyxDQUFDMEQsU0FBTixJQUFtQixnQkFBckQsR0FDSSxDQUNFLG9CQURGLEVBRUUsb0JBRkYsRUFHRSxtQkFIRixFQUlFLG1CQUpGLEVBS0UsbUJBTEYsRUFNRSxtQkFORixFQU9FLG1CQVBGLEVBUUUsb0JBUkYsRUFTRSxvQkFURixFQVVFLG1CQVZGLEVBV0Usb0JBWEYsRUFZRSxtQkFaRixDQURKLEdBZUkxRCxLQUFLLENBQUMwRCxTQUFOLElBQW1CLFlBQW5CLElBQW1DMUQsS0FBSyxDQUFDMEQsU0FBTixJQUFtQixZQUF0RCxHQUNBLHFCQURBLEdBRUEsQ0FDRSxxQkFERixFQUVFLHFCQUZGLEVBR0UscUJBSEYsRUFJRSxxQkFKRixFQUtFLHFCQUxGLEVBTUUscUJBTkYsRUFPRSxxQkFQRixFQVFFLHFCQVJGLEVBU0UscUJBVEYsRUFVRSxxQkFWRixFQVdFLHFCQVhGLEVBWUUscUJBWkYsQ0FsQk47QUFpQ0EsY0FBTUcsT0FBTyxHQUNYN0QsS0FBSyxDQUFDMEQsU0FBTixJQUFtQixXQUFuQixJQUFrQzFELEtBQUssQ0FBQzBELFNBQU4sSUFBbUIsZ0JBQXJELEdBQ0ksQ0FDRSxvQkFERixFQUVFLG9CQUZGLEVBR0UsbUJBSEYsRUFJRSxtQkFKRixFQUtFLG1CQUxGLEVBTUUsbUJBTkYsRUFPRSxtQkFQRixFQVFFLG9CQVJGLEVBU0Usb0JBVEYsRUFVRSxtQkFWRixFQVdFLG9CQVhGLEVBWUUsbUJBWkYsQ0FESixHQWVJMUQsS0FBSyxDQUFDMEQsU0FBTixJQUFtQixZQUFuQixJQUFtQzFELEtBQUssQ0FBQzBELFNBQU4sSUFBbUIsWUFBdEQsR0FDQSxxQkFEQSxHQUVBLENBQ0UscUJBREYsRUFFRSxxQkFGRixFQUdFLHFCQUhGLEVBSUUscUJBSkYsRUFLRSxxQkFMRixFQU1FLHFCQU5GLEVBT0UscUJBUEYsRUFRRSxxQkFSRixFQVNFLHFCQVRGLEVBVUUscUJBVkYsRUFXRSxxQkFYRixFQVlFLHFCQVpGLENBbEJOO0FBaUNBLGNBQU1JLE9BQU8sR0FDWDlELEtBQUssQ0FBQzBELFNBQU4sSUFBbUIsV0FBbkIsSUFBa0MxRCxLQUFLLENBQUMwRCxTQUFOLElBQW1CLGdCQUFyRCxHQUNJLENBQ0Usb0JBREYsRUFFRSxvQkFGRixFQUdFLG1CQUhGLEVBSUUsbUJBSkYsRUFLRSxtQkFMRixFQU1FLG1CQU5GLEVBT0UsbUJBUEYsRUFRRSxvQkFSRixFQVNFLG9CQVRGLEVBVUUsbUJBVkYsRUFXRSxvQkFYRixFQVlFLG1CQVpGLENBREosR0FlSTFELEtBQUssQ0FBQzBELFNBQU4sSUFBbUIsWUFBbkIsSUFBbUMxRCxLQUFLLENBQUMwRCxTQUFOLElBQW1CLFlBQXRELEdBQ0Esc0JBREEsR0FFQSxDQUNFLHNCQURGLEVBRUUsc0JBRkYsRUFHRSxzQkFIRixFQUlFLHNCQUpGLEVBS0Usc0JBTEYsRUFNRSxzQkFORixFQU9FLHNCQVBGLEVBUUUsc0JBUkYsRUFTRSxzQkFURixFQVVFLHNCQVZGLEVBV0Usc0JBWEYsRUFZRSxzQkFaRixDQWxCTjtBQWlDQSxjQUFNSyxPQUFPLEdBQ1gvRCxLQUFLLENBQUMwRCxTQUFOLElBQW1CLFdBQW5CLElBQWtDMUQsS0FBSyxDQUFDMEQsU0FBTixJQUFtQixnQkFBckQsR0FDSSxDQUNFLG9CQURGLEVBRUUsb0JBRkYsRUFHRSxtQkFIRixFQUlFLG1CQUpGLEVBS0UsbUJBTEYsRUFNRSxtQkFORixFQU9FLG1CQVBGLEVBUUUsb0JBUkYsRUFTRSxvQkFURixFQVVFLG1CQVZGLEVBV0Usb0JBWEYsRUFZRSxtQkFaRixDQURKLEdBZUkxRCxLQUFLLENBQUMwRCxTQUFOLElBQW1CLFlBQW5CLElBQW1DMUQsS0FBSyxDQUFDMEQsU0FBTixJQUFtQixZQUF0RCxHQUNBLHNCQURBLEdBRUEsQ0FDRSxzQkFERixFQUVFLHNCQUZGLEVBR0Usc0JBSEYsRUFJRSxzQkFKRixFQUtFLHNCQUxGLEVBTUUsc0JBTkYsRUFPRSxzQkFQRixFQVFFLHNCQVJGLEVBU0Usc0JBVEYsRUFVRSxzQkFWRixFQVdFLHNCQVhGLEVBWUUsc0JBWkYsQ0FsQk47QUFnQ0EsY0FBTU0sS0FBSSxHQUFHO0FBQ1hDLGtCQUFNLEVBQUVqRSxLQUFLLENBQUNpRSxNQUFOLDBJQUNIakUsS0FBSyxDQUFDaUUsTUFBTixDQUFhdEUsR0FBYixDQUFpQixVQUFDdUUsS0FBRCxFQUFXO0FBQzdCLGtCQUFJQSxLQUFLLEtBQUssRUFBZCxFQUFrQjtBQUNoQix1QkFBT0EsS0FBUDtBQUNELGVBRkQsTUFFTztBQUNMLHVCQUFPLEVBQVA7QUFDRDtBQUNGLGFBTkUsQ0FERyxDQURHO0FBVVhDLG9CQUFRLEVBQUUsQ0FDUjtBQUNBO0FBQ0VELG1CQUFLLEVBQUVsRSxLQUFLLENBQUNvRSxhQUFOLElBQXVCcEUsS0FBSyxDQUFDb0UsYUFEdEM7QUFFRUosa0JBQUksRUFDRmhFLEtBQUssQ0FBQ3FFLFFBQU4sSUFDQXJFLEtBQUssQ0FBQ3FFLFFBQU4sQ0FBZTFFLEdBQWYsQ0FBbUIsVUFBQ3FFLElBQUQsRUFBVTtBQUMzQixvQkFBSUEsSUFBSSxLQUFLLEVBQWIsRUFBaUI7QUFDZix5QkFBT0EsSUFBUDtBQUNEO0FBQ0YsZUFKRCxDQUpKO0FBU0U3Riw2QkFBZSxFQUFFc0YsTUFUbkI7QUFVRWEseUJBQVcsRUFDVHRFLEtBQUssQ0FBQzBELFNBQU4sSUFBbUIsWUFBbkIsR0FBa0MsQ0FBbEMsR0FBc0MxRCxLQUFLLENBQUMwRCxTQUFOLElBQW1CLFdBQW5CLElBQW1DMUQsS0FBSyxDQUFDMEQsU0FBTixJQUFtQixnQkFBbkIsSUFBdUM7QUFYcEgsYUFGUSxFQWVSO0FBQ0E7QUFDRVEsbUJBQUssRUFBRWxFLEtBQUssQ0FBQ3VFLGFBQU4sSUFBdUJ2RSxLQUFLLENBQUN1RSxhQUR0QztBQUVFUCxrQkFBSSxFQUNGaEUsS0FBSyxDQUFDd0UsUUFBTixJQUNBeEUsS0FBSyxDQUFDd0UsUUFBTixDQUFlN0UsR0FBZixDQUFtQixVQUFDcUUsSUFBRCxFQUFVO0FBQzNCLG9CQUFJQSxJQUFJLEtBQUssRUFBYixFQUFpQjtBQUNmLHlCQUFPQSxJQUFQO0FBQ0Q7QUFDRixlQUpELENBSko7QUFTRTdGLDZCQUFlLEVBQUV3RixPQVRuQjtBQVVFVyx5QkFBVyxFQUNUdEUsS0FBSyxDQUFDMEQsU0FBTixJQUFtQixZQUFuQixHQUFrQyxDQUFsQyxHQUFzQzFELEtBQUssQ0FBQzBELFNBQU4sSUFBbUIsV0FBbkIsSUFBbUMxRCxLQUFLLENBQUMwRCxTQUFOLElBQW1CLGdCQUFuQixJQUF1QztBQVhwSCxhQWhCUSxFQTZCUjtBQUNBO0FBQ0VRLG1CQUFLLEVBQUVsRSxLQUFLLENBQUN5RSxhQUFOLElBQXVCekUsS0FBSyxDQUFDeUUsYUFEdEM7QUFFRVQsa0JBQUksRUFDRmhFLEtBQUssQ0FBQzBFLFFBQU4sSUFDQTFFLEtBQUssQ0FBQzBFLFFBQU4sQ0FBZS9FLEdBQWYsQ0FBbUIsVUFBQ3FFLElBQUQsRUFBVTtBQUMzQixvQkFBSUEsSUFBSSxLQUFLLEVBQWIsRUFBaUI7QUFDZix5QkFBT0EsSUFBUDtBQUNEO0FBQ0YsZUFKRCxDQUpKO0FBU0U3Riw2QkFBZSxFQUFFeUYsT0FUbkI7QUFVRVUseUJBQVcsRUFDVHRFLEtBQUssQ0FBQzBELFNBQU4sSUFBbUIsWUFBbkIsR0FBa0MsQ0FBbEMsR0FBc0MxRCxLQUFLLENBQUMwRCxTQUFOLElBQW1CLFdBQW5CLElBQW1DMUQsS0FBSyxDQUFDMEQsU0FBTixJQUFtQixnQkFBbkIsSUFBdUM7QUFYcEgsYUE5QlEsRUEyQ1I7QUFDQTtBQUNFUSxtQkFBSyxFQUFFbEUsS0FBSyxDQUFDMkUsYUFBTixJQUF1QjNFLEtBQUssQ0FBQzJFLGFBRHRDO0FBRUVYLGtCQUFJLEVBQ0ZoRSxLQUFLLENBQUM0RSxRQUFOLElBQ0E1RSxLQUFLLENBQUM0RSxRQUFOLENBQWVqRixHQUFmLENBQW1CLFVBQUNxRSxJQUFELEVBQVU7QUFDM0Isb0JBQUlBLElBQUksS0FBSyxFQUFiLEVBQWlCO0FBQ2YseUJBQU9BLElBQVA7QUFDRDtBQUNGLGVBSkQsQ0FKSjtBQVNFN0YsNkJBQWUsRUFBRTBGLE9BVG5CO0FBVUVTLHlCQUFXLEVBQ1R0RSxLQUFLLENBQUMwRCxTQUFOLElBQW1CLFlBQW5CLEdBQWtDLENBQWxDLEdBQXNDMUQsS0FBSyxDQUFDMEQsU0FBTixJQUFtQixXQUFuQixJQUFtQzFELEtBQUssQ0FBQzBELFNBQU4sSUFBbUIsZ0JBQW5CLElBQXVDO0FBWHBILGFBNUNRLEVBeURSO0FBQ0E7QUFDRVEsbUJBQUssRUFBRWxFLEtBQUssQ0FBQzZFLGFBQU4sSUFBdUI3RSxLQUFLLENBQUM2RSxhQUR0QztBQUVFYixrQkFBSSxFQUNGaEUsS0FBSyxDQUFDOEUsUUFBTixJQUNBOUUsS0FBSyxDQUFDOEUsUUFBTixDQUFlbkYsR0FBZixDQUFtQixVQUFDcUUsSUFBRCxFQUFVO0FBQzNCLG9CQUFJQSxJQUFJLEtBQUssRUFBYixFQUFpQjtBQUNmLHlCQUFPQSxJQUFQO0FBQ0Q7QUFDRixlQUpELENBSko7QUFTRTdGLDZCQUFlLEVBQUUyRixPQVRuQjtBQVVFUSx5QkFBVyxFQUNUdEUsS0FBSyxDQUFDMEQsU0FBTixJQUFtQixZQUFuQixHQUFrQyxDQUFsQyxHQUFzQzFELEtBQUssQ0FBQzBELFNBQU4sSUFBbUIsV0FBbkIsSUFBbUMxRCxLQUFLLENBQUMwRCxTQUFOLElBQW1CLGdCQUFuQixJQUF1QztBQVhwSCxhQTFEUSxFQXVFUjtBQUNBO0FBQ0VRLG1CQUFLLEVBQUVsRSxLQUFLLENBQUMrRSxhQUFOLElBQXVCL0UsS0FBSyxDQUFDK0UsYUFEdEM7QUFFRWYsa0JBQUksRUFDRmhFLEtBQUssQ0FBQ2dGLFFBQU4sSUFDQWhGLEtBQUssQ0FBQ2dGLFFBQU4sQ0FBZXJGLEdBQWYsQ0FBbUIsVUFBQ3FFLElBQUQsRUFBVTtBQUMzQixvQkFBSUEsSUFBSSxLQUFLLEVBQWIsRUFBaUI7QUFDZix5QkFBT0EsSUFBUDtBQUNEO0FBQ0YsZUFKRCxDQUpKO0FBU0U3Riw2QkFBZSxFQUFFNEYsT0FUbkI7QUFVRU8seUJBQVcsRUFDVHRFLEtBQUssQ0FBQzBELFNBQU4sSUFBbUIsWUFBbkIsR0FBa0MsQ0FBbEMsR0FBc0MxRCxLQUFLLENBQUMwRCxTQUFOLElBQW1CLFdBQW5CLElBQW1DMUQsS0FBSyxDQUFDMEQsU0FBTixJQUFtQixnQkFBbkIsSUFBdUM7QUFYcEgsYUF4RVE7QUFWQyxXQUFiOztBQWtHQSxjQUFNdUIsS0FBSyxHQUFHakIsS0FBSSxDQUFDRyxRQUFMLENBQWN4RSxHQUFkLENBQWtCLFVBQUN1RixPQUFELEVBQWE7QUFDM0N6RixtQkFBTyxDQUFDQyxHQUFSLENBQVl3RixPQUFPLENBQUNsQixJQUFSLENBQWEsQ0FBYixDQUFaO0FBQ0EsZ0JBQU1tQixLQUFLLEdBQUdELE9BQU8sQ0FBQ2xCLElBQVIsQ0FBYXJFLEdBQWIsQ0FBaUIsVUFBQ3lGLE9BQUQsRUFBYTtBQUMxQyxrQkFBSUEsT0FBTyxLQUFLQyxTQUFoQixFQUEyQjtBQUN6Qix1QkFBT0QsT0FBUDtBQUNELGVBRkQsTUFFTztBQUNMLHVCQUFPLEVBQVA7QUFDRDtBQUNGLGFBTmEsQ0FBZDtBQU9BLGdCQUFNRSxJQUFJLEdBQUdILEtBQUssQ0FBQ3hGLEdBQU4sQ0FBVSxVQUFDNEYsT0FBRCxFQUFVM0UsS0FBVixFQUFvQjtBQUN6QyxrQkFBSW9ELEtBQUksQ0FBQ0MsTUFBTCxDQUFZckQsS0FBWixNQUF1QixFQUEzQixFQUErQjtBQUM3Qix1QkFBTzJFLE9BQVA7QUFDRDtBQUNGLGFBSlksQ0FBYjtBQUtBLGdCQUFNQyxLQUFLLEdBQUdGLElBQUksQ0FBQ0csTUFBTCxDQUFZLFVBQUNDLEdBQUQ7QUFBQSxxQkFBU0EsR0FBRyxLQUFLTCxTQUFqQjtBQUFBLGFBQVosQ0FBZDtBQUNBLG1CQUFPRyxLQUFQO0FBQ0QsV0FoQmEsQ0FBZDs7QUFrQkEsY0FBTUcsSUFBSSxHQUFHM0YsS0FBSyxDQUFDMEQsU0FBTixJQUFtQixZQUFuQixHQUFrQyxLQUFsQyxHQUEwQzJCLFNBQXZEO0FBRUEsY0FBTU8sV0FBVyxHQUFHLENBQ2xCO0FBQ0UxQixpQkFBSyxFQUFFRixLQUFJLENBQUNHLFFBQUwsQ0FBYyxDQUFkLEVBQWlCRCxLQUQxQjtBQUVFRixnQkFBSSxFQUFFaUIsS0FBSyxDQUFDLENBQUQsQ0FGYjtBQUdFOUcsMkJBQWUsRUFBRTZGLEtBQUksQ0FBQ0csUUFBTCxDQUFjLENBQWQsRUFBaUJoRyxlQUhwQztBQUlFMEgsdUJBQVcsRUFBRTdGLEtBQUssQ0FBQzBELFNBQU4sSUFBbUIsWUFBbkIsR0FBa0MscUJBQWxDLEdBQTBELG9CQUp6RTtBQUtFWSx1QkFBVyxFQUFFTixLQUFJLENBQUNHLFFBQUwsQ0FBYyxDQUFkLEVBQWlCRyxXQUxoQztBQU1FcUIsZ0JBQUksRUFBRUE7QUFOUixXQURrQixFQVNsQjtBQUNFekIsaUJBQUssRUFBRUYsS0FBSSxDQUFDRyxRQUFMLENBQWMsQ0FBZCxFQUFpQkQsS0FEMUI7QUFFRUYsZ0JBQUksRUFBRWlCLEtBQUssQ0FBQyxDQUFELENBRmI7QUFHRTlHLDJCQUFlLEVBQUU2RixLQUFJLENBQUNHLFFBQUwsQ0FBYyxDQUFkLEVBQWlCaEcsZUFIcEM7QUFJRTBILHVCQUFXLEVBQUU3RixLQUFLLENBQUMwRCxTQUFOLElBQW1CLFlBQW5CLEdBQWtDLHFCQUFsQyxHQUEwRCxvQkFKekU7QUFLRVksdUJBQVcsRUFBRU4sS0FBSSxDQUFDRyxRQUFMLENBQWMsQ0FBZCxFQUFpQkcsV0FMaEM7QUFNRXFCLGdCQUFJLEVBQUVBO0FBTlIsV0FUa0IsRUFpQmxCO0FBQ0V6QixpQkFBSyxFQUFFRixLQUFJLENBQUNHLFFBQUwsQ0FBYyxDQUFkLEVBQWlCRCxLQUQxQjtBQUVFRixnQkFBSSxFQUFFaUIsS0FBSyxDQUFDLENBQUQsQ0FGYjtBQUdFOUcsMkJBQWUsRUFBRTZGLEtBQUksQ0FBQ0csUUFBTCxDQUFjLENBQWQsRUFBaUJoRyxlQUhwQztBQUlFMEgsdUJBQVcsRUFBRTdGLEtBQUssQ0FBQzBELFNBQU4sSUFBbUIsWUFBbkIsR0FBa0MscUJBQWxDLEdBQTBELG9CQUp6RTtBQUtFWSx1QkFBVyxFQUFFTixLQUFJLENBQUNHLFFBQUwsQ0FBYyxDQUFkLEVBQWlCRyxXQUxoQztBQU1FcUIsZ0JBQUksRUFBRUE7QUFOUixXQWpCa0IsRUF5QmxCO0FBQ0V6QixpQkFBSyxFQUFFRixLQUFJLENBQUNHLFFBQUwsQ0FBYyxDQUFkLEVBQWlCRCxLQUQxQjtBQUVFRixnQkFBSSxFQUFFaUIsS0FBSyxDQUFDLENBQUQsQ0FGYjtBQUdFOUcsMkJBQWUsRUFBRTZGLEtBQUksQ0FBQ0csUUFBTCxDQUFjLENBQWQsRUFBaUJoRyxlQUhwQztBQUlFMEgsdUJBQVcsRUFBRTdGLEtBQUssQ0FBQzBELFNBQU4sSUFBbUIsWUFBbkIsR0FBa0MscUJBQWxDLEdBQTBELG9CQUp6RTtBQUtFWSx1QkFBVyxFQUFFTixLQUFJLENBQUNHLFFBQUwsQ0FBYyxDQUFkLEVBQWlCRyxXQUxoQztBQU1FcUIsZ0JBQUksRUFBRUE7QUFOUixXQXpCa0IsRUFpQ2xCO0FBQ0V6QixpQkFBSyxFQUFFRixLQUFJLENBQUNHLFFBQUwsQ0FBYyxDQUFkLEVBQWlCRCxLQUQxQjtBQUVFRixnQkFBSSxFQUFFaUIsS0FBSyxDQUFDLENBQUQsQ0FGYjtBQUdFOUcsMkJBQWUsRUFBRTZGLEtBQUksQ0FBQ0csUUFBTCxDQUFjLENBQWQsRUFBaUJoRyxlQUhwQztBQUlFMEgsdUJBQVcsRUFBRTdGLEtBQUssQ0FBQzBELFNBQU4sSUFBbUIsWUFBbkIsR0FBa0Msc0JBQWxDLEdBQTJELG9CQUoxRTtBQUtFWSx1QkFBVyxFQUFFTixLQUFJLENBQUNHLFFBQUwsQ0FBYyxDQUFkLEVBQWlCRyxXQUxoQztBQU1FcUIsZ0JBQUksRUFBRUE7QUFOUixXQWpDa0IsRUF5Q2xCO0FBQ0V6QixpQkFBSyxFQUFFRixLQUFJLENBQUNHLFFBQUwsQ0FBYyxDQUFkLEVBQWlCRCxLQUQxQjtBQUVFRixnQkFBSSxFQUFFaUIsS0FBSyxDQUFDLENBQUQsQ0FGYjtBQUdFOUcsMkJBQWUsRUFBRTZGLEtBQUksQ0FBQ0csUUFBTCxDQUFjLENBQWQsRUFBaUJoRyxlQUhwQztBQUlFMEgsdUJBQVcsRUFBRTdGLEtBQUssQ0FBQzBELFNBQU4sSUFBbUIsWUFBbkIsR0FBa0Msc0JBQWxDLEdBQTJELG9CQUoxRTtBQUtFWSx1QkFBVyxFQUFFTixLQUFJLENBQUNHLFFBQUwsQ0FBYyxDQUFkLEVBQWlCRyxXQUxoQztBQU1FcUIsZ0JBQUksRUFBRUE7QUFOUixXQXpDa0IsQ0FBcEI7QUFtREEsY0FBTWpDLFNBQVMsR0FBRyxDQUNoQjFELEtBQUssQ0FBQzBELFNBQU4sSUFBbUIsV0FBbkIsR0FBaUMsS0FBakMsR0FBeUMsRUFEekIsRUFFaEIxRCxLQUFLLENBQUMwRCxTQUFOLElBQW1CLGVBQW5CLEdBQXFDLGVBQXJDLEdBQXVELEVBRnZDLEVBR2hCMUQsS0FBSyxDQUFDMEQsU0FBTixJQUFtQixZQUFuQixHQUFrQyxNQUFsQyxHQUEyQyxFQUgzQixFQUloQjFELEtBQUssQ0FBQzBELFNBQU4sSUFBbUIsV0FBbkIsR0FBaUMsS0FBakMsR0FBeUMsRUFKekIsRUFLaEIxRCxLQUFLLENBQUMwRCxTQUFOLElBQW1CLGdCQUFuQixHQUFzQyxVQUF0QyxHQUFtRCxFQUxuQyxFQU1oQjFELEtBQUssQ0FBQzBELFNBQU4sSUFBbUIsWUFBbkIsR0FBa0MsTUFBbEMsR0FBMkMsRUFOM0IsQ0FBbEI7QUFTQSxjQUFNb0MsV0FBVyxHQUFHLElBQUlDLHVEQUFKLEVBQXBCO0FBQ0FELHFCQUFXLENBQUNFLFNBQVosQ0FBc0I7QUFDcEIvRixnQkFBSSxFQUFFeUQsU0FBUyxDQUFDK0IsTUFBVixDQUFpQixVQUFDeEYsSUFBRDtBQUFBLHFCQUFVQSxJQUFJLEtBQUssRUFBbkI7QUFBQSxhQUFqQixDQURjO0FBRXBCK0QsZ0JBQUksRUFBRTtBQUNKQyxvQkFBTSxFQUFFRCxLQUFJLENBQUNDLE1BQUwsQ0FBWXdCLE1BQVosQ0FBbUIsVUFBQ3ZCLEtBQUQ7QUFBQSx1QkFBV0EsS0FBSyxLQUFLLEVBQXJCO0FBQUEsZUFBbkIsQ0FESjtBQUVKQyxzQkFBUSxFQUFFeUIsV0FBVyxDQUFDSCxNQUFaLENBQW1CLFVBQUNQLE9BQUQ7QUFBQSx1QkFBYUEsT0FBTyxDQUFDaEIsS0FBUixLQUFrQixFQUEvQjtBQUFBLGVBQW5CO0FBRk4sYUFGYztBQU1wQitCLG1CQUFPLEVBQUU7QUFDUEMsd0JBQVUsRUFBRSxJQURMO0FBRVBDLG9CQUFNLEVBQUU7QUFDTkMsd0JBQVEsRUFBRSxRQURKO0FBRU5uQyxzQkFBTSxFQUFFO0FBQ05vQywwQkFBUSxFQUFFLEVBREo7QUFFTkMsMkJBQVMsRUFBRSxDQUZMO0FBR05wSSw0QkFBVSxFQUFFLFdBSE47QUFJTkksMEJBQVEsRUFBRTtBQUpKO0FBRkYsZUFGRDtBQVdQO0FBQ0FpSSxvQkFBTSxFQUFFO0FBQ05DLHFCQUFLLEVBQUUsQ0FDTDtBQUNFQyx5QkFBTyxFQUFFekcsS0FBSyxDQUFDeUcsT0FBTixJQUFpQixJQUFqQixHQUF3QixJQUF4QixHQUErQixLQUQxQztBQUVFQyx1QkFBSyxFQUFFO0FBQ0xDLCtCQUFXLEVBQUUsSUFEUjtBQUVMekksOEJBQVUsRUFBRSxXQUZQO0FBR0xJLDRCQUFRLEVBQUU7QUFITDtBQUZULGlCQURLLENBREQ7QUFXTnNJLHFCQUFLLEVBQUUsQ0FDTDtBQUNFSCx5QkFBTyxFQUFFekcsS0FBSyxDQUFDeUcsT0FBTixJQUFpQixJQUFqQixHQUF3QixJQUF4QixHQUErQixLQUQxQztBQUVFQyx1QkFBSyxFQUFFO0FBQ0xDLCtCQUFXLEVBQUUsSUFEUjtBQUVMekksOEJBQVUsRUFBRSxXQUZQO0FBR0xJLDRCQUFRLEVBQUU7QUFITDtBQUZULGlCQURLO0FBWEQ7QUFaRDtBQU5XLFdBQXRCO0FBMkNBd0gscUJBQVcsQ0FBQ2UsU0FBWixDQUFzQixLQUF0QixFQUE2QkMsbUJBQTdCLENBQWlELEdBQWpELEVBQXNEQyxrQkFBdEQsQ0FBeUUsU0FBekU7O0FBQ0EsY0FBTWxHLFNBQVEsR0FBR2lGLFdBQVcsQ0FBQ2tCLFNBQVosRUFBakI7O0FBQ0FuRyxtQkFBUSxDQUFDb0csSUFBVCxDQUFjLFVBQUNDLEtBQUQsRUFBVztBQUN2QnpILG1CQUFPLENBQUNDLEdBQVIsQ0FBWXdILEtBQVo7QUFDQTFELHVCQUFXLENBQUMyRCxJQUFaLENBQWlCO0FBQUV0RyxzQkFBUSxFQUFFcUcsS0FBWjtBQUFtQnZHLHdCQUFVLEVBQUVYLEtBQUssQ0FBQ1k7QUFBckMsYUFBakI7QUFDQW5CLG1CQUFPLENBQUNDLEdBQVIsQ0FBWThELFdBQVo7QUFDQUYsd0JBQVksQ0FBQ0UsV0FBRCxDQUFaO0FBQ0QsV0FMRDtBQU1EO0FBQ0YsT0E5YUQ7QUErYUQsS0FoYkQsQ0FERjtBQWtiRCxHQXRiUSxFQXNiTixDQUFDaEUsUUFBRCxDQXRiTSxDQUFUO0FBd2JBQyxTQUFPLENBQUNDLEdBQVIsQ0FBWUgsU0FBWjtBQUVBLHNCQUNFO0FBQUssT0FBRyxFQUFFOEMsYUFBVjtBQUF5QixhQUFTLEVBQUMsNkJBQW5DO0FBQUEsY0FDR0YsSUFBSSxDQUFDekQsS0FBTCxHQUFhLEdBQWIsZ0JBQ0M7QUFBSyxlQUFTLEVBQUMsV0FBZjtBQUFBLDZCQUNFO0FBQ0UsZUFBTztBQUFBLHlSQUFFLGlCQUFPMEksQ0FBUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDUEEscUJBQUMsQ0FBQ0MsY0FBRjtBQUNNM0csdUJBRkMsZ0JBR0wscUVBQUMsVUFBRDtBQUNFLDJCQUFLLEVBQUVHLFFBRFQ7QUFFRSwwQkFBSSxFQUFFbUQsSUFGUjtBQUdFLDZCQUFPLEVBQUVzRCxPQUhYO0FBSUUscUNBQWUsRUFBRUMsZUFKbkI7QUFLRSxtQ0FBYSxFQUFFQyxhQUxqQjtBQU1FLHlCQUFHLEVBQUVDLEdBTlA7QUFPRSxrQ0FBWSxFQUFFQyxZQVBoQjtBQVFFLG9DQUFjLEVBQUVDLGNBUmxCO0FBU0UsZ0NBQVUsRUFBRUMsVUFUZDtBQVVFLGtDQUFZLEVBQUVDLFlBVmhCO0FBV0UsaUNBQVcsRUFBRUMsV0FYZjtBQVlFLCtCQUFTLEVBQUVDLFNBWmI7QUFhRSwrQkFBUyxFQUFFQyxTQWJiO0FBY0UsNkJBQU8sRUFBRUM7QUFkWDtBQUFBO0FBQUE7QUFBQTtBQUFBLDZCQUhLO0FBb0JEQyx5QkFwQkMsR0FvQk9DLCtEQUFHLENBQUMsRUFBRCxDQXBCVixFQW9CZ0I7O0FBQ3ZCRCx5QkFBSyxDQUFDRSxlQUFOLENBQXNCMUgsR0FBdEI7QUFyQk87QUFBQSwyQkFzQll3SCxLQUFLLENBQUNHLE1BQU4sRUF0Qlo7O0FBQUE7QUFzQkRDLHdCQXRCQztBQXVCUEMsNkVBQU0sQ0FBQ0QsSUFBRCxZQUFVRSxtREFBTSxDQUFDQyxLQUFQLENBQWFDLE9BQXZCLG9CQUFOOztBQXZCTztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQUFGOztBQUFBO0FBQUE7QUFBQTtBQUFBLFdBRFQ7QUEwQkUsV0FBRyxFQUFDLHdCQTFCTjtBQTJCRSxjQUFNLEVBQUUsRUEzQlY7QUE0QkUsYUFBSyxFQUFFO0FBNUJUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREQsZ0JBa0NDO0FBQUssZUFBUyxFQUFDLCtDQUFmO0FBQUEsOEJBQ0U7QUFDRSxXQUFHLEVBQUVuRyxjQURQO0FBRUUsZUFBTyxFQUFFTyxrQkFGWDtBQUdFLGlCQUFTLHFQQUNQSix5QkFBeUIsR0FBRyxxRUFBSCxHQUEyRSxFQUQ3RixDQUhYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREYsZUFVRTtBQUFLLFdBQUcsRUFBRUYsaUJBQVY7QUFBNkIsaUJBQVMsRUFBQyw2RUFBdkM7QUFBQSxnQ0FDRTtBQUFLLG1CQUFTLEVBQUMsaUNBQWY7QUFBQSxrQ0FDRTtBQUFLLGVBQUcsRUFBQyw0QkFBVDtBQUFzQyxrQkFBTSxFQUFFLEVBQTlDO0FBQWtELGlCQUFLLEVBQUU7QUFBekQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFERixlQUVFO0FBQUcscUJBQVMsRUFBQyxjQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFERixlQUtFO0FBQUssbUJBQVMsRUFBQywrQ0FBZjtBQUFBLGtDQUNFO0FBQUEsb0NBQ0U7QUFBRyx1QkFBUyxFQUFDLE1BQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBREYsZUFFRTtBQUNFLHFCQUFPO0FBQUEsK1JBQUUsa0JBQU80RSxDQUFQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNQQSwyQkFBQyxDQUFDQyxjQUFGO0FBQ00zRyw2QkFGQyxnQkFFSyxxRUFBQyxVQUFEO0FBQVkscUNBQVMsRUFBRW5CLFNBQXZCO0FBQWtDLG9DQUFRLEVBQUVDO0FBQTVDO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUNBRkw7QUFHRDBJLCtCQUhDLEdBR09DLCtEQUFHLENBQUMsRUFBRCxDQUhWO0FBSVBELCtCQUFLLENBQUNFLGVBQU4sQ0FBc0IxSCxHQUF0QjtBQUpPO0FBQUEsaUNBS1l3SCxLQUFLLENBQUNHLE1BQU4sRUFMWjs7QUFBQTtBQUtEQyw4QkFMQztBQU1QQyxtRkFBTSxDQUFDRCxJQUFELFlBQVVFLG1EQUFNLENBQUNDLEtBQVAsQ0FBYUMsT0FBdkIsK0JBQU47O0FBTk87QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBQUY7O0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBRFQ7QUFTRSxpQkFBRyxFQUFDLHdCQVROO0FBVUUsb0JBQU0sRUFBRSxFQVZWO0FBV0UsbUJBQUssRUFBRSxFQVhUO0FBWUUsdUJBQVMsRUFBQztBQVpaO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURGLGVBa0JFO0FBQUsscUJBQVMsRUFBQyx3Q0FBZjtBQUFBLG9DQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQURGLGVBRUU7QUFBSyx1QkFBUyxFQUFDLGtCQUFmO0FBQUEsc0NBQ0U7QUFBTyxxQkFBSyxFQUFDLGlCQUFiO0FBQStCLHlCQUFTLEVBQUM7QUFBekM7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFERixlQUVFO0FBQUssbUJBQUcsRUFBQyw0QkFBVDtBQUFzQyxzQkFBTSxFQUFFLEVBQTlDO0FBQWtELHFCQUFLLEVBQUU7QUFBekQ7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQWxCRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBTEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBVkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBbkNKO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQWtGRCxDQW5pQkQ7O0dBQU14RyxnQjtVQUNTRSxtRTs7O01BRFRGLGdCO0FBcWlCU0EsK0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvZGFzaGJvYXJkL3Byb2plY3RzL1twcm9qZWN0XS9idXNpbmVzcy1wbGFuLmQzZDZjMGMwMjQzYmEyMGY0NThiLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCwgdXNlUmVmIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBzYXZlQXMgfSBmcm9tICdmaWxlLXNhdmVyJztcclxuaW1wb3J0IENoYXJ0SnNJbWFnZSBmcm9tICdjaGFydGpzLXRvLWltYWdlJztcclxuaW1wb3J0IHsgZm9ybWF0IH0gZnJvbSAnZGF0ZS1mbnMnO1xyXG5pbXBvcnQgZ3NhcCwgeyBMaW5lYXIgfSBmcm9tICdnc2FwJztcclxuaW1wb3J0IHsgRm9udCwgcGRmLCBQYWdlLCBUZXh0LCBWaWV3LCBJbWFnZSwgRG9jdW1lbnQsIFN0eWxlU2hlZXQsIFBERlZpZXdlciwgUERGRG93bmxvYWRMaW5rIH0gZnJvbSAnQHJlYWN0LXBkZi9yZW5kZXJlcic7XHJcbmltcG9ydCBSb3V0ZXIgZnJvbSAnbmV4dC9yb3V0ZXInO1xyXG5pbXBvcnQgc3BsaXRIdG1sIGZyb20gJ3NwbGl0LWh0bWwnO1xyXG5pbXBvcnQgJCBmcm9tICdqcXVlcnknO1xyXG5pbXBvcnQgeyB1c2VXaW5kb3dTaXplIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vdXRpbHMvdXNlV2luZG93U2l6ZSc7XHJcblxyXG5Gb250LnJlZ2lzdGVyKHsgc3JjOiAnL2ZvbnRzL3BvcHBpbnMudHRmJywgZmFtaWx5OiAnUG9wcGlucycgfSk7XHJcbkZvbnQucmVnaXN0ZXIoeyBzcmM6ICcvZm9udHMvY29tZm9ydGFhLnR0ZicsIGZhbWlseTogJ0NvbWZvcnRhYScgfSk7XHJcbkZvbnQucmVnaXN0ZXIoeyBzcmM6ICcvZm9udHMvY29tZm9ydGFhLUJvbGQudHRmJywgZmFtaWx5OiAnQ29tZm9ydGFhLUJvbGQnIH0pO1xyXG5Gb250LnJlZ2lzdGVyKHsgc3JjOiAnL2ZvbnRzL01vbnRzZXJyYXQtUmVndWxhci50dGYnLCBmYW1pbHk6ICdNb250c2VycmF0LVJlZ3VsYXInIH0pO1xyXG5Gb250LnJlZ2lzdGVyKHsgc3JjOiAnL2ZvbnRzL01vbnRzZXJyYXQtU2VtaUJvbGQudHRmJywgZmFtaWx5OiAnTW9udHNlcnJhdC1TZW1pQm9sZCcgfSk7XHJcbkZvbnQucmVnaXN0ZXIoeyBzcmM6ICcvZm9udHMvTW9udHNlcnJhdC1TZW1pQm9sZEl0YWxpYy50dGYnLCBmYW1pbHk6ICdNb250c2VycmF0LVNlbWlCb2xkSXRhbGljJyB9KTtcclxuRm9udC5yZWdpc3Rlcih7IHNyYzogJy9mb250cy9Nb250c2VycmF0LUl0YWxpYy50dGYnLCBmYW1pbHk6ICdNb250c2VycmF0LUl0YWxpYycgfSk7XHJcblxyXG5jb25zdCBzdHlsZXMgPSBTdHlsZVNoZWV0LmNyZWF0ZSh7XHJcbiAgaG9tZVBhZ2U6IHtcclxuICAgIHBhZGRpbmc6IDM2LFxyXG4gICAgLy8gZm9udEZhbWlseTogJ0NvbWZvcnRhYScsXHJcbiAgICBmb250RmFtaWx5OiAnTW9udHNlcnJhdC1SZWd1bGFyJyxcclxuICAgIGJhY2tncm91bmRDb2xvcjogJyNmOGY5ZmInLFxyXG4gICAgY29sb3I6ICcjMGExMjMwJyxcclxuICB9LFxyXG4gIG1haW5UaXRsZToge1xyXG4gICAgZm9udFNpemU6IDIyLFxyXG4gICAgY29sb3I6ICcjMGExMjMwJyxcclxuICAgIHRleHRBbGlnbjogJ2NlbnRlcicsXHJcbiAgfSxcclxuICB0YWJsZTogeyBkaXNwbGF5OiAndGFibGUnLCB3aWR0aDogJzEwMCUnLCBtYXJnaW5Ub3A6IDE2IH0sXHJcbiAgdGFibGVIZWFkUm93OiB7IGZsZXhEaXJlY3Rpb246ICdyb3cnLCBiYWNrZ3JvdW5kQ29sb3I6ICcjNkM2M0ZGJywgY29sb3I6ICcjZjhmOWZiJywgYm9yZGVyVG9wTGVmdFJhZGl1czogOCwgYm9yZGVyVG9wUmlnaHRSYWRpdXM6IDggfSxcclxuICB0YWJsZVJvdzogeyBmbGV4RGlyZWN0aW9uOiAncm93JyB9LFxyXG4gIHRhYmxlQ29sOiB7IHBhZGRpbmc6IDggfSxcclxuICB0YWJsZUhlYWRDZWxsOiB7IG1hcmdpblRvcDogNSwgZm9udFNpemU6IDEwIH0sXHJcbiAgdGFibGVDZWxsOiB7IG1hcmdpblRvcDogNSwgZm9udFNpemU6IDksIGJvcmRlckxlZnQ6ICcxcHggc29saWQgIzBhMTIzMCcsIHBhZGRpbmdMZWZ0OiA0IH0sXHJcbn0pO1xyXG5cclxuY29uc3QgTXlEb2N1bWVudCA9ICh7IGltYWdlc1VybCwgc2VjdGlvbnMgfSkgPT4ge1xyXG4gIGNvbnNvbGUubG9nKCdQREYgU2VjdGlvbnMgLS0+ICcsIHNlY3Rpb25zKTtcclxuICBjb25zb2xlLmxvZygnUERGIEltYWdlc1VybCAtLT4gJywgaW1hZ2VzVXJsKTtcclxuICByZXR1cm4gKFxyXG4gICAgPERvY3VtZW50IHNjYWxlPXs5NiAvIDcyfSByZW5kZXJNb2RlPVwic3ZnXCI+XHJcbiAgICAgIDxQYWdlIHNpemU9XCJBNFwiIHN0eWxlPXtzdHlsZXMuaG9tZVBhZ2V9PlxyXG4gICAgICAgIDxWaWV3PlxyXG4gICAgICAgICAgPFRleHQgc3R5bGU9e3N0eWxlcy5tYWluVGl0bGV9PkJ1c2luZXNzIHBsYW48L1RleHQ+XHJcbiAgICAgICAgPC9WaWV3PlxyXG4gICAgICA8L1BhZ2U+XHJcbiAgICAgIHtzZWN0aW9ucy5tYXAoKHNlY3Rpb24pID0+IHtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgPFBhZ2Ugc2l6ZT1cIkE0XCIgc3R5bGU9e3N0eWxlcy5ob21lUGFnZX0+XHJcbiAgICAgICAgICAgIDxWaWV3IHN0eWxlPXt7IG1hcmdpbkJvdHRvbTogOCB9fT5cclxuICAgICAgICAgICAgICA8VGV4dCBzdHlsZT17eyBmb250U2l6ZTogMTggfX0+e3NlY3Rpb24udGl0bGV9PC9UZXh0PlxyXG4gICAgICAgICAgICA8L1ZpZXc+XHJcbiAgICAgICAgICAgIHtzZWN0aW9uLmZpZWxkcy5tYXAoKGZpZWxkKSA9PiB7XHJcbiAgICAgICAgICAgICAgY29uc29sZS5sb2coZmllbGQpO1xyXG4gICAgICAgICAgICAgIHN3aXRjaCAoZmllbGQudHlwZSkge1xyXG4gICAgICAgICAgICAgICAgY2FzZSAndGFibGUnOlxyXG4gICAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgIGZpZWxkLnR5cGUgPT0gJ3RhYmxlJyAmJiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICA8VmlldyBzdHlsZT17c3R5bGVzLnRhYmxlfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgey8qIFRhYmxlSGVhZGVyICovfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8VmlldyBzdHlsZT17c3R5bGVzLnRhYmxlSGVhZFJvd30+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAge2ZpZWxkLmhlYWRSb3dzLm1hcCgoaGVhZFJvdykgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgaGVhZFJvd3NRdWFudGl0eSA9IGZpZWxkLmhlYWRSb3dzLmxlbmd0aDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN3aXRjaCAoaGVhZFJvd3NRdWFudGl0eSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDE6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxWaWV3IHN0eWxlPXt7IHdpZHRoOiAnMTAwJScsIHBhZGRpbmc6IDggfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0IHN0eWxlPXtzdHlsZXMudGFibGVIZWFkQ2VsbH0+e2hlYWRSb3d9PC9UZXh0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9WaWV3PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgMjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFZpZXcgc3R5bGU9e3sgd2lkdGg6ICc1MCUnLCBwYWRkaW5nOiA4IH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGV4dCBzdHlsZT17c3R5bGVzLnRhYmxlSGVhZENlbGx9PntoZWFkUm93fTwvVGV4dD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVmlldz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDM6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxWaWV3IHN0eWxlPXt7IHdpZHRoOiAnMzMuMzMlJywgcGFkZGluZzogOCB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRleHQgc3R5bGU9e3N0eWxlcy50YWJsZUhlYWRDZWxsfT57aGVhZFJvd308L1RleHQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1ZpZXc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSA0OlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VmlldyBzdHlsZT17eyB3aWR0aDogJzI1JScsIHBhZGRpbmc6IDggfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0IHN0eWxlPXtzdHlsZXMudGFibGVIZWFkQ2VsbH0+e2hlYWRSb3d9PC9UZXh0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9WaWV3PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgNTpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFZpZXcgc3R5bGU9e3sgd2lkdGg6ICcyMCUnLCBwYWRkaW5nOiA4IH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGV4dCBzdHlsZT17c3R5bGVzLnRhYmxlSGVhZENlbGx9PntoZWFkUm93fTwvVGV4dD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVmlldz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDY6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxWaWV3IHN0eWxlPXt7IHdpZHRoOiAnMTYuNjYlJywgcGFkZGluZzogOCB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRleHQgc3R5bGU9e3N0eWxlcy50YWJsZUhlYWRDZWxsfT57aGVhZFJvd308L1RleHQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1ZpZXc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSA3OlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VmlldyBzdHlsZT17eyB3aWR0aDogJzE0LjI4JScsIHBhZGRpbmc6IDggfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0IHN0eWxlPXtzdHlsZXMudGFibGVIZWFkQ2VsbH0+e2hlYWRSb3d9PC9UZXh0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9WaWV3PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgODpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFZpZXcgc3R5bGU9e3sgd2lkdGg6ICcxMi41JScsIHBhZGRpbmc6IDggfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0IHN0eWxlPXtzdHlsZXMudGFibGVIZWFkQ2VsbH0+e2hlYWRSb3d9PC9UZXh0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9WaWV3PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgOTpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFZpZXcgc3R5bGU9e3sgd2lkdGg6ICcxMS4xMSUnLCBwYWRkaW5nOiA4IH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGV4dCBzdHlsZT17c3R5bGVzLnRhYmxlSGVhZENlbGx9PntoZWFkUm93fTwvVGV4dD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVmlldz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDEwOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VmlldyBzdHlsZT17eyB3aWR0aDogJzEwJScsIHBhZGRpbmc6IDggfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0IHN0eWxlPXtzdHlsZXMudGFibGVIZWFkQ2VsbH0+e2hlYWRSb3d9PC9UZXh0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9WaWV3PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgMTE6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxWaWV3IHN0eWxlPXt7IHdpZHRoOiAnOS4wOSUnLCBwYWRkaW5nOiA4IH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGV4dCBzdHlsZT17c3R5bGVzLnRhYmxlSGVhZENlbGx9PntoZWFkUm93fTwvVGV4dD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVmlldz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDEyOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VmlldyBzdHlsZT17eyB3aWR0aDogJzguMzMlJywgcGFkZGluZzogOCB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRleHQgc3R5bGU9e3N0eWxlcy50YWJsZUhlYWRDZWxsfT57aGVhZFJvd308L1RleHQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1ZpZXc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICB9KX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9WaWV3PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7LyogVGFibGVCb2R5ICovfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7ZmllbGQucm93cy5tYXAoKHJvdykgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VmlldyBzdHlsZT17c3R5bGVzLnRhYmxlUm93fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3Jvdy5yb3cubWFwKChyb3dOYW1lKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgQm9keVJvd3NRdWFudGl0eSA9IGZpZWxkLnJvd3MubGVuZ3RoO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN3aXRjaCAoQm9keVJvd3NRdWFudGl0eSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAxOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxWaWV3IHN0eWxlPXt7IHdpZHRoOiAnMTAwJScsIHBhZGRpbmc6IDggfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGV4dCBzdHlsZT17c3R5bGVzLnRhYmxlQ2VsbH0+e3Jvd05hbWV9PC9UZXh0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVmlldz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgMjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VmlldyBzdHlsZT17eyB3aWR0aDogJzUwJScsIHBhZGRpbmc6IDggfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGV4dCBzdHlsZT17c3R5bGVzLnRhYmxlQ2VsbH0+e3Jvd05hbWV9PC9UZXh0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVmlldz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgMzpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VmlldyBzdHlsZT17eyB3aWR0aDogJzMzLjMzJScsIHBhZGRpbmc6IDggfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGV4dCBzdHlsZT17c3R5bGVzLnRhYmxlQ2VsbH0+e3Jvd05hbWV9PC9UZXh0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVmlldz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgNDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VmlldyBzdHlsZT17eyB3aWR0aDogJzI1JScsIHBhZGRpbmc6IDggfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGV4dCBzdHlsZT17c3R5bGVzLnRhYmxlQ2VsbH0+e3Jvd05hbWV9PC9UZXh0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVmlldz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgNTpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VmlldyBzdHlsZT17eyB3aWR0aDogJzIwJScsIHBhZGRpbmc6IDggfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGV4dCBzdHlsZT17c3R5bGVzLnRhYmxlQ2VsbH0+e3Jvd05hbWV9PC9UZXh0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVmlldz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgNjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VmlldyBzdHlsZT17eyB3aWR0aDogJzE2LjY2JScsIHBhZGRpbmc6IDggfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGV4dCBzdHlsZT17c3R5bGVzLnRhYmxlQ2VsbH0+e3Jvd05hbWV9PC9UZXh0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVmlldz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgNzpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VmlldyBzdHlsZT17eyB3aWR0aDogJzE0LjI4JScsIHBhZGRpbmc6IDggfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGV4dCBzdHlsZT17c3R5bGVzLnRhYmxlQ2VsbH0+e3Jvd05hbWV9PC9UZXh0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVmlldz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgODpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VmlldyBzdHlsZT17eyB3aWR0aDogJzEyLjUlJywgcGFkZGluZzogOCB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0IHN0eWxlPXtzdHlsZXMudGFibGVDZWxsfT57cm93TmFtZX08L1RleHQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9WaWV3PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSA5OlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxWaWV3IHN0eWxlPXt7IHdpZHRoOiAnMTEuMTElJywgcGFkZGluZzogOCB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0IHN0eWxlPXtzdHlsZXMudGFibGVDZWxsfT57cm93TmFtZX08L1RleHQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9WaWV3PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAxMDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VmlldyBzdHlsZT17eyB3aWR0aDogJzEwJScsIHBhZGRpbmc6IDggfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGV4dCBzdHlsZT17c3R5bGVzLnRhYmxlQ2VsbH0+e3Jvd05hbWV9PC9UZXh0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVmlldz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgMTE6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFZpZXcgc3R5bGU9e3sgd2lkdGg6ICc5LjA5JScsIHBhZGRpbmc6IDggfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGV4dCBzdHlsZT17c3R5bGVzLnRhYmxlQ2VsbH0+e3Jvd05hbWV9PC9UZXh0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVmlldz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgMTI6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFZpZXcgc3R5bGU9e3sgd2lkdGg6ICc4LjMzJScsIHBhZGRpbmc6IDggfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGV4dCBzdHlsZT17c3R5bGVzLnRhYmxlQ2VsbH0+e3Jvd05hbWV9PC9UZXh0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVmlldz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9WaWV3PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9WaWV3PlxyXG4gICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgIGNhc2UgJ2hlYWRlcic6XHJcbiAgICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPFZpZXcgc3R5bGU9e3sgbWFyZ2luVG9wOiAxNiB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgIDxUZXh0IHN0eWxlPXt7IGZvbnRTaXplOiAxNCB9fT57ZmllbGQudGl0bGV9PC9UZXh0PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvVmlldz5cclxuICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgIGNhc2UgJ3NwYWNpbmcnOlxyXG4gICAgICAgICAgICAgICAgICByZXR1cm4gPFZpZXcgc3R5bGU9e3sgbWFyZ2luVG9wOiAxMiwgbWFyZ2luQm90dG9tOiAxMiB9fT48L1ZpZXc+O1xyXG4gICAgICAgICAgICAgICAgY2FzZSAnY2hhcnQnOlxyXG4gICAgICAgICAgICAgICAgICByZXR1cm4gaW1hZ2VzVXJsLm1hcCgoZG9jKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGRvYy5pbWFnZUluZGV4ID09PSBmaWVsZC5pbmRleCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgPFZpZXcgc3R5bGU9e3sgbWFyZ2luVG9wOiAxNiB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8SW1hZ2Ugc3R5bGU9e3sgd2lkdGg6ICcxMDAlJyB9fSBzcmM9e2RvYy5pbWFnZVVybH0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9WaWV3PlxyXG4gICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgY2FzZSAndGV4dCc6XHJcbiAgICAgICAgICAgICAgICAgIGxldCBmb3JtYXR0ZWRUZXh0ID0gJChmaWVsZC5ib2R5KS5tYXAoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAkKCc8ZGl2PicpLmFwcGVuZCh0aGlzKS5odG1sKCk7XHJcbiAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhmb3JtYXR0ZWRUZXh0KTtcclxuICAgICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICA8VmlldyBzdHlsZT17eyBtYXJnaW5Ub3A6IDE2IH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgeyQubWFwKGZvcm1hdHRlZFRleHQsIChyZXMpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2cocmVzLnRvU3RyaW5nKCkuaW5jbHVkZXMoJzxwPjwvcD4nKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlcy5pbmNsdWRlcygnPHN0cm9uZz4nKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIFNUQVJUIC0tPiA8cD48L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICByZXMuc3RhcnRzV2l0aCgnPHA+JykgJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAhcmVzLmluY2x1ZGVzKCc8c3Ryb25nPicpICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIXJlcy5pbmNsdWRlcygnPGVtPicpICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIXJlcy5pbmNsdWRlcygnPHM+JykgJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAhcmVzLmluY2x1ZGVzKCc8dT4nKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gPFRleHQgc3R5bGU9e3sgZm9udFNpemU6IDEyIH19PntyZXMucmVwbGFjZSgvKDwoW14+XSspPikvZ2ksICcnKX08L1RleHQ+O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIDxwPlNUUk9ORzwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzLnN0YXJ0c1dpdGgoJzxwPicpICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzLmluY2x1ZGVzKCc8c3Ryb25nPicpICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIXJlcy5pbmNsdWRlcygnPGVtPicpICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIXJlcy5pbmNsdWRlcygnPHM+JykgJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAhcmVzLmluY2x1ZGVzKCc8dT4nKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRleHQgc3R5bGU9e3sgZm9udFNpemU6IDEyLCBmb250RmFtaWx5OiAnTW9udHNlcnJhdC1TZW1pQm9sZCcgfX0+e3Jlcy5yZXBsYWNlKC8oPChbXj5dKyk+KS9naSwgJycpfTwvVGV4dD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIDxwPkVNPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlIGlmIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICByZXMuc3RhcnRzV2l0aCgnPHA+JykgJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAhcmVzLmluY2x1ZGVzKCc8c3Ryb25nPicpICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzLmluY2x1ZGVzKCc8ZW0+JykgJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAhcmVzLmluY2x1ZGVzKCc8cz4nKSAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICFyZXMuaW5jbHVkZXMoJzx1PicpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiA8VGV4dCBzdHlsZT17eyBmb250U2l6ZTogMTIsIGZvbnRGYW1pbHk6ICdNb250c2VycmF0LUl0YWxpYycgfX0+e3Jlcy5yZXBsYWNlKC8oPChbXj5dKyk+KS9naSwgJycpfTwvVGV4dD47XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gPHA+RU0gKyBTVFJPTkc8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJlcy5zdGFydHNXaXRoKCc8cD4nKSAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJlcy5pbmNsdWRlcygnPHN0cm9uZz4nKSAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJlcy5pbmNsdWRlcygnPGVtPicpICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIXJlcy5pbmNsdWRlcygnPHM+JykgJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAhcmVzLmluY2x1ZGVzKCc8dT4nKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRleHQgc3R5bGU9e3sgZm9udFNpemU6IDEyLCBmb250RmFtaWx5OiAnTW9udHNlcnJhdC1TZW1pQm9sZEl0YWxpYycgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtyZXMucmVwbGFjZSgvKDwoW14+XSspPikvZ2ksICcnKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVGV4dD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIDxwPlM8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJlcy5zdGFydHNXaXRoKCc8cD4nKSAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJlcy5pbmNsdWRlcygnPHM+JykgJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAhcmVzLmluY2x1ZGVzKCc8c3Ryb25nPicpICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIXJlcy5pbmNsdWRlcygnPGVtPicpICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIXJlcy5pbmNsdWRlcygnPHU+JylcclxuICAgICAgICAgICAgICAgICAgICAgICAgKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDxUZXh0IHN0eWxlPXt7IGZvbnRTaXplOiAxMiwgdGV4dERlY29yYXRpb246ICdsaW5lLXRocm91Z2gnIH19PntyZXMucmVwbGFjZSgvKDwoW14+XSspPikvZ2ksICcnKX08L1RleHQ+O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIDxwPlMgKyBFTTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzLnN0YXJ0c1dpdGgoJzxwPicpICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzLmluY2x1ZGVzKCc8cz4nKSAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJlcy5pbmNsdWRlcygnPGVtPicpICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIXJlcy5pbmNsdWRlcygnPHN0cm9uZz4nKSAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICFyZXMuaW5jbHVkZXMoJzx1PicpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGV4dCBzdHlsZT17eyBmb250U2l6ZTogMTIsIGZvbnRGYW1pbHk6ICdNb250c2VycmF0LUl0YWxpYycsIHRleHREZWNvcmF0aW9uOiAnbGluZS10aHJvdWdoJyB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3Jlcy5yZXBsYWNlKC8oPChbXj5dKyk+KS9naSwgJycpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9UZXh0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gPHA+UyArIFNUUk9ORzwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzLnN0YXJ0c1dpdGgoJzxwPicpICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzLmluY2x1ZGVzKCc8cz4nKSAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICFyZXMuaW5jbHVkZXMoJzxlbT4nKSAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJlcy5pbmNsdWRlcygnPHN0cm9uZz4nKSAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICFyZXMuaW5jbHVkZXMoJzx1PicpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGV4dCBzdHlsZT17eyBmb250U2l6ZTogMTIsIGZvbnRGYW1pbHk6ICdNb250c2VycmF0LVNlbWlCb2xkJywgdGV4dERlY29yYXRpb246ICdsaW5lLXRocm91Z2gnIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7cmVzLnJlcGxhY2UoLyg8KFtePl0rKT4pL2dpLCAnJyl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1RleHQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyA8cD5TICsgRU0gKyBTVFJPTkc8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJlcy5zdGFydHNXaXRoKCc8cD4nKSAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJlcy5pbmNsdWRlcygnPHM+JykgJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICByZXMuaW5jbHVkZXMoJzxlbT4nKSAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJlcy5pbmNsdWRlcygnPHN0cm9uZz4nKSAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICFyZXMuaW5jbHVkZXMoJzx1PicpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGV4dCBzdHlsZT17eyBmb250U2l6ZTogMTIsIGZvbnRGYW1pbHk6ICdNb250c2VycmF0LVNlbWlCb2xkSXRhbGljJywgdGV4dERlY29yYXRpb246ICdsaW5lLXRocm91Z2gnIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7cmVzLnJlcGxhY2UoLyg8KFtePl0rKT4pL2dpLCAnJyl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1RleHQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyA8cD5VPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlIGlmIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICByZXMuc3RhcnRzV2l0aCgnPHA+JykgJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICByZXMuaW5jbHVkZXMoJzx1PicpICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIXJlcy5pbmNsdWRlcygnPHM+JykgJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAhcmVzLmluY2x1ZGVzKCc8c3Ryb25nPicpICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIXJlcy5pbmNsdWRlcygnPGVtPicpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiA8VGV4dCBzdHlsZT17eyBmb250U2l6ZTogMTIsIHRleHREZWNvcmF0aW9uOiAndW5kZXJsaW5lJyB9fT57cmVzLnJlcGxhY2UoLyg8KFtePl0rKT4pL2dpLCAnJyl9PC9UZXh0PjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyA8cD5VICsgRU08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJlcy5zdGFydHNXaXRoKCc8cD4nKSAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJlcy5pbmNsdWRlcygnPHU+JykgJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAhcmVzLmluY2x1ZGVzKCc8cz4nKSAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICFyZXMuaW5jbHVkZXMoJzxzdHJvbmc+JykgJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICByZXMuaW5jbHVkZXMoJzxlbT4nKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRleHQgc3R5bGU9e3sgZm9udFNpemU6IDEyLCBmb250RmFtaWx5OiAnTW9udHNlcnJhdC1JdGFsaWMnLCB0ZXh0RGVjb3JhdGlvbjogJ3VuZGVybGluZScgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtyZXMucmVwbGFjZSgvKDwoW14+XSspPikvZ2ksICcnKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVGV4dD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIDxwPlUgKyBTPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlIGlmIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICByZXMuc3RhcnRzV2l0aCgnPHA+JykgJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICByZXMuaW5jbHVkZXMoJzx1PicpICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzLmluY2x1ZGVzKCc8cz4nKSAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICFyZXMuaW5jbHVkZXMoJzxzdHJvbmc+JykgJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAhcmVzLmluY2x1ZGVzKCc8ZW0+JylcclxuICAgICAgICAgICAgICAgICAgICAgICAgKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0IHN0eWxlPXt7IGZvbnRTaXplOiAxMiwgdGV4dERlY29yYXRpb246ICdsaW5lLXRocm91Z2ggdW5kZXJsaW5lJyB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3Jlcy5yZXBsYWNlKC8oPChbXj5dKyk+KS9naSwgJycpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9UZXh0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gPHA+VSArIFNUUk9ORzwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzLnN0YXJ0c1dpdGgoJzxwPicpICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzLmluY2x1ZGVzKCc8dT4nKSAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICFyZXMuaW5jbHVkZXMoJzxzPicpICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzLmluY2x1ZGVzKCc8c3Ryb25nPicpICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIXJlcy5pbmNsdWRlcygnPGVtPicpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGV4dCBzdHlsZT17eyBmb250U2l6ZTogMTIsIGZvbnRGYW1pbHk6ICdNb250c2VycmF0LVNlbWlCb2xkJywgdGV4dERlY29yYXRpb246ICd1bmRlcmxpbmUnIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7cmVzLnJlcGxhY2UoLyg8KFtePl0rKT4pL2dpLCAnJyl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1RleHQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyA8cD5VICsgUyArIFNUUk9ORzwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzLnN0YXJ0c1dpdGgoJzxwPicpICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzLmluY2x1ZGVzKCc8dT4nKSAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJlcy5pbmNsdWRlcygnPHM+JykgJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICByZXMuaW5jbHVkZXMoJzxzdHJvbmc+JykgJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAhcmVzLmluY2x1ZGVzKCc8ZW0+JylcclxuICAgICAgICAgICAgICAgICAgICAgICAgKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0IHN0eWxlPXt7IGZvbnRTaXplOiAxMiwgZm9udEZhbWlseTogJ01vbnRzZXJyYXQtU2VtaUJvbGQnLCB0ZXh0RGVjb3JhdGlvbjogJ2xpbmUtdGhyb3VnaCB1bmRlcmxpbmUnIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7cmVzLnJlcGxhY2UoLyg8KFtePl0rKT4pL2dpLCAnJyl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1RleHQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyA8cD5VICsgUyArIFNUUk9ORyArIEVNPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlIGlmIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICByZXMuc3RhcnRzV2l0aCgnPHA+JykgJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICByZXMuaW5jbHVkZXMoJzx1PicpICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzLmluY2x1ZGVzKCc8cz4nKSAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJlcy5pbmNsdWRlcygnPHN0cm9uZz4nKSAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJlcy5pbmNsdWRlcygnPGVtPicpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGV4dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyBmb250U2l6ZTogMTIsIGZvbnRGYW1pbHk6ICdNb250c2VycmF0LVNlbWlCb2xkSXRhbGljJywgdGV4dERlY29yYXRpb246ICdsaW5lLXRocm91Z2ggdW5kZXJsaW5lJyB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7cmVzLnJlcGxhY2UoLyg8KFtePl0rKT4pL2dpLCAnJyl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1RleHQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyA8cD5VICsgUyArIEVNPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlIGlmIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICByZXMuc3RhcnRzV2l0aCgnPHA+JykgJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICByZXMuaW5jbHVkZXMoJzx1PicpICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzLmluY2x1ZGVzKCc8cz4nKSAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICFyZXMuaW5jbHVkZXMoJzxzdHJvbmc+JykgJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICByZXMuaW5jbHVkZXMoJzxlbT4nKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRleHQgc3R5bGU9e3sgZm9udFNpemU6IDEyLCBmb250RmFtaWx5OiAnTW9udHNlcnJhdC1JdGFsaWMnLCB0ZXh0RGVjb3JhdGlvbjogJ2xpbmUtdGhyb3VnaCB1bmRlcmxpbmUnIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7cmVzLnJlcGxhY2UoLyg8KFtePl0rKT4pL2dpLCAnJyl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1RleHQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyA8cD5VICsgU1RST05HICsgRU08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJlcy5zdGFydHNXaXRoKCc8cD4nKSAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJlcy5pbmNsdWRlcygnPHU+JykgJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAhcmVzLmluY2x1ZGVzKCc8cz4nKSAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJlcy5pbmNsdWRlcygnPHN0cm9uZz4nKSAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJlcy5pbmNsdWRlcygnPGVtPicpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGV4dCBzdHlsZT17eyBmb250U2l6ZTogMTIsIGZvbnRGYW1pbHk6ICdNb250c2VycmF0LVNlbWlCb2xkSXRhbGljJywgdGV4dERlY29yYXRpb246ICd1bmRlcmxpbmUnIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7cmVzLnJlcGxhY2UoLyg8KFtePl0rKT4pL2dpLCAnJyl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1RleHQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBFTkQgLS0+IDxwPjwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gU1RBUlQgLS0+IDxoMj48L2gyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzLnN0YXJ0c1dpdGgoJzxoMj4nKSAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICFyZXMuaW5jbHVkZXMoJzxzdHJvbmc+JykgJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAhcmVzLmluY2x1ZGVzKCc8ZW0+JykgJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAhcmVzLmluY2x1ZGVzKCc8cz4nKSAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICFyZXMuaW5jbHVkZXMoJzx1PicpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiA8VGV4dCBzdHlsZT17eyBmb250U2l6ZTogMTQgfX0+e3Jlcy5yZXBsYWNlKC8oPChbXj5dKyk+KS9naSwgJycpfTwvVGV4dD47XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gPGgyPlNUUk9ORzwvaDI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJlcy5zdGFydHNXaXRoKCc8aDI+JykgJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICByZXMuaW5jbHVkZXMoJzxzdHJvbmc+JykgJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAhcmVzLmluY2x1ZGVzKCc8ZW0+JykgJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAhcmVzLmluY2x1ZGVzKCc8cz4nKSAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICFyZXMuaW5jbHVkZXMoJzx1PicpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGV4dCBzdHlsZT17eyBmb250U2l6ZTogMTQsIGZvbnRGYW1pbHk6ICdNb250c2VycmF0LVNlbWlCb2xkJyB9fT57cmVzLnJlcGxhY2UoLyg8KFtePl0rKT4pL2dpLCAnJyl9PC9UZXh0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gPGgyPkVNPC9oMj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzLnN0YXJ0c1dpdGgoJzxoMj4nKSAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICFyZXMuaW5jbHVkZXMoJzxzdHJvbmc+JykgJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICByZXMuaW5jbHVkZXMoJzxlbT4nKSAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICFyZXMuaW5jbHVkZXMoJzxzPicpICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIXJlcy5pbmNsdWRlcygnPHU+JylcclxuICAgICAgICAgICAgICAgICAgICAgICAgKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDxUZXh0IHN0eWxlPXt7IGZvbnRTaXplOiAxNCwgZm9udEZhbWlseTogJ01vbnRzZXJyYXQtSXRhbGljJyB9fT57cmVzLnJlcGxhY2UoLyg8KFtePl0rKT4pL2dpLCAnJyl9PC9UZXh0PjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyA8aDI+RU0gKyBTVFJPTkc8L2gyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlIGlmIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICByZXMuc3RhcnRzV2l0aCgnPGgyPicpICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzLmluY2x1ZGVzKCc8c3Ryb25nPicpICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzLmluY2x1ZGVzKCc8ZW0+JykgJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAhcmVzLmluY2x1ZGVzKCc8cz4nKSAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICFyZXMuaW5jbHVkZXMoJzx1PicpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGV4dCBzdHlsZT17eyBmb250U2l6ZTogMTQsIGZvbnRGYW1pbHk6ICdNb250c2VycmF0LVNlbWlCb2xkSXRhbGljJyB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3Jlcy5yZXBsYWNlKC8oPChbXj5dKyk+KS9naSwgJycpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9UZXh0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gPGgyPlM8L2gyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlIGlmIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICByZXMuc3RhcnRzV2l0aCgnPGgyPicpICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzLmluY2x1ZGVzKCc8cz4nKSAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICFyZXMuaW5jbHVkZXMoJzxzdHJvbmc+JykgJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAhcmVzLmluY2x1ZGVzKCc8ZW0+JykgJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAhcmVzLmluY2x1ZGVzKCc8dT4nKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gPFRleHQgc3R5bGU9e3sgZm9udFNpemU6IDE0LCB0ZXh0RGVjb3JhdGlvbjogJ2xpbmUtdGhyb3VnaCcgfX0+e3Jlcy5yZXBsYWNlKC8oPChbXj5dKyk+KS9naSwgJycpfTwvVGV4dD47XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gPGgyPlMgKyBFTTwvaDI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJlcy5zdGFydHNXaXRoKCc8aDI+JykgJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICByZXMuaW5jbHVkZXMoJzxzPicpICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzLmluY2x1ZGVzKCc8ZW0+JykgJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAhcmVzLmluY2x1ZGVzKCc8c3Ryb25nPicpICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIXJlcy5pbmNsdWRlcygnPHU+JylcclxuICAgICAgICAgICAgICAgICAgICAgICAgKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0IHN0eWxlPXt7IGZvbnRTaXplOiAxNCwgZm9udEZhbWlseTogJ01vbnRzZXJyYXQtSXRhbGljJywgdGV4dERlY29yYXRpb246ICdsaW5lLXRocm91Z2gnIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7cmVzLnJlcGxhY2UoLyg8KFtePl0rKT4pL2dpLCAnJyl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1RleHQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyA8SDI+UyArIFNUUk9ORzwvSDI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJlcy5zdGFydHNXaXRoKCc8aDI+JykgJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICByZXMuaW5jbHVkZXMoJzxzPicpICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIXJlcy5pbmNsdWRlcygnPGVtPicpICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzLmluY2x1ZGVzKCc8c3Ryb25nPicpICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIXJlcy5pbmNsdWRlcygnPHU+JylcclxuICAgICAgICAgICAgICAgICAgICAgICAgKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0IHN0eWxlPXt7IGZvbnRTaXplOiAxMiwgZm9udEZhbWlseTogJ01vbnRzZXJyYXQtU2VtaUJvbGQnLCB0ZXh0RGVjb3JhdGlvbjogJ2xpbmUtdGhyb3VnaCcgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtyZXMucmVwbGFjZSgvKDwoW14+XSspPikvZ2ksICcnKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVGV4dD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIDxoMj5TICsgRU0gKyBTVFJPTkc8L2gyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlIGlmIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICByZXMuc3RhcnRzV2l0aCgnPGgyPicpICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzLmluY2x1ZGVzKCc8cz4nKSAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJlcy5pbmNsdWRlcygnPGVtPicpICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzLmluY2x1ZGVzKCc8c3Ryb25nPicpICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIXJlcy5pbmNsdWRlcygnPHU+JylcclxuICAgICAgICAgICAgICAgICAgICAgICAgKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0IHN0eWxlPXt7IGZvbnRTaXplOiAxNCwgZm9udEZhbWlseTogJ01vbnRzZXJyYXQtU2VtaUJvbGRJdGFsaWMnLCB0ZXh0RGVjb3JhdGlvbjogJ2xpbmUtdGhyb3VnaCcgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtyZXMucmVwbGFjZSgvKDwoW14+XSspPikvZ2ksICcnKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVGV4dD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIDxoMj5VPC9oMj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzLnN0YXJ0c1dpdGgoJzxoMj4nKSAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJlcy5pbmNsdWRlcygnPHU+JykgJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAhcmVzLmluY2x1ZGVzKCc8cz4nKSAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICFyZXMuaW5jbHVkZXMoJzxzdHJvbmc+JykgJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAhcmVzLmluY2x1ZGVzKCc8ZW0+JylcclxuICAgICAgICAgICAgICAgICAgICAgICAgKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDxUZXh0IHN0eWxlPXt7IGZvbnRTaXplOiAxNCwgdGV4dERlY29yYXRpb246ICd1bmRlcmxpbmUnIH19PntyZXMucmVwbGFjZSgvKDwoW14+XSspPikvZ2ksICcnKX08L1RleHQ+O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIDxoMj5VICsgRU08L2gyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlIGlmIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICByZXMuc3RhcnRzV2l0aCgnPGgyPicpICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzLmluY2x1ZGVzKCc8dT4nKSAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICFyZXMuaW5jbHVkZXMoJzxzPicpICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIXJlcy5pbmNsdWRlcygnPHN0cm9uZz4nKSAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJlcy5pbmNsdWRlcygnPGVtPicpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGV4dCBzdHlsZT17eyBmb250U2l6ZTogMTQsIGZvbnRGYW1pbHk6ICdNb250c2VycmF0LUl0YWxpYycsIHRleHREZWNvcmF0aW9uOiAndW5kZXJsaW5lJyB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3Jlcy5yZXBsYWNlKC8oPChbXj5dKyk+KS9naSwgJycpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9UZXh0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gPGgyPlUgKyBTPC9oMj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzLnN0YXJ0c1dpdGgoJzxoMj4nKSAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJlcy5pbmNsdWRlcygnPHU+JykgJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICByZXMuaW5jbHVkZXMoJzxzPicpICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIXJlcy5pbmNsdWRlcygnPHN0cm9uZz4nKSAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICFyZXMuaW5jbHVkZXMoJzxlbT4nKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRleHQgc3R5bGU9e3sgZm9udFNpemU6IDE0LCB0ZXh0RGVjb3JhdGlvbjogJ2xpbmUtdGhyb3VnaCB1bmRlcmxpbmUnIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7cmVzLnJlcGxhY2UoLyg8KFtePl0rKT4pL2dpLCAnJyl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1RleHQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyA8aDI+VSArIFNUUk9ORzwvaDI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJlcy5zdGFydHNXaXRoKCc8aDI+JykgJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICByZXMuaW5jbHVkZXMoJzx1PicpICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIXJlcy5pbmNsdWRlcygnPHM+JykgJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICByZXMuaW5jbHVkZXMoJzxzdHJvbmc+JykgJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAhcmVzLmluY2x1ZGVzKCc8ZW0+JylcclxuICAgICAgICAgICAgICAgICAgICAgICAgKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0IHN0eWxlPXt7IGZvbnRTaXplOiAxNCwgZm9udEZhbWlseTogJ01vbnRzZXJyYXQtU2VtaUJvbGQnLCB0ZXh0RGVjb3JhdGlvbjogJ3VuZGVybGluZScgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtyZXMucmVwbGFjZSgvKDwoW14+XSspPikvZ2ksICcnKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVGV4dD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIDxoMj5VICsgUyArIFNUUk9ORzwvaDI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJlcy5zdGFydHNXaXRoKCc8aDI+JykgJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICByZXMuaW5jbHVkZXMoJzx1PicpICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzLmluY2x1ZGVzKCc8cz4nKSAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJlcy5pbmNsdWRlcygnPHN0cm9uZz4nKSAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICFyZXMuaW5jbHVkZXMoJzxlbT4nKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRleHQgc3R5bGU9e3sgZm9udFNpemU6IDE0LCBmb250RmFtaWx5OiAnTW9udHNlcnJhdC1TZW1pQm9sZCcsIHRleHREZWNvcmF0aW9uOiAnbGluZS10aHJvdWdoIHVuZGVybGluZScgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtyZXMucmVwbGFjZSgvKDwoW14+XSspPikvZ2ksICcnKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVGV4dD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIDxoMj5VICsgUyArIFNUUk9ORyArIEVNPC9oMj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzLnN0YXJ0c1dpdGgoJzxoMj4nKSAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJlcy5pbmNsdWRlcygnPHU+JykgJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICByZXMuaW5jbHVkZXMoJzxzPicpICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzLmluY2x1ZGVzKCc8c3Ryb25nPicpICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzLmluY2x1ZGVzKCc8ZW0+JylcclxuICAgICAgICAgICAgICAgICAgICAgICAgKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IGZvbnRTaXplOiAxNCwgZm9udEZhbWlseTogJ01vbnRzZXJyYXQtU2VtaUJvbGRJdGFsaWMnLCB0ZXh0RGVjb3JhdGlvbjogJ2xpbmUtdGhyb3VnaCB1bmRlcmxpbmUnIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtyZXMucmVwbGFjZSgvKDwoW14+XSspPikvZ2ksICcnKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVGV4dD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIDxoMj5VICsgUyArIEVNPC9oMj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzLnN0YXJ0c1dpdGgoJzxoMj4nKSAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJlcy5pbmNsdWRlcygnPHU+JykgJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICByZXMuaW5jbHVkZXMoJzxzPicpICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIXJlcy5pbmNsdWRlcygnPHN0cm9uZz4nKSAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJlcy5pbmNsdWRlcygnPGVtPicpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGV4dCBzdHlsZT17eyBmb250U2l6ZTogMTQsIGZvbnRGYW1pbHk6ICdNb250c2VycmF0LUl0YWxpYycsIHRleHREZWNvcmF0aW9uOiAnbGluZS10aHJvdWdoIHVuZGVybGluZScgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtyZXMucmVwbGFjZSgvKDwoW14+XSspPikvZ2ksICcnKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVGV4dD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIDxoMj5VICsgU1RST05HICsgRU08L2gyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlIGlmIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICByZXMuc3RhcnRzV2l0aCgnPGgyPicpICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzLmluY2x1ZGVzKCc8dT4nKSAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICFyZXMuaW5jbHVkZXMoJzxzPicpICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzLmluY2x1ZGVzKCc8c3Ryb25nPicpICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzLmluY2x1ZGVzKCc8ZW0+JylcclxuICAgICAgICAgICAgICAgICAgICAgICAgKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0IHN0eWxlPXt7IGZvbnRTaXplOiAxNCwgZm9udEZhbWlseTogJ01vbnRzZXJyYXQtU2VtaUJvbGRJdGFsaWMnLCB0ZXh0RGVjb3JhdGlvbjogJ3VuZGVybGluZScgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtyZXMucmVwbGFjZSgvKDwoW14+XSspPikvZ2ksICcnKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVGV4dD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIEVORCAtLT4gPGgyPjwvaDI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIFNUQVJUIC0tPiA8aDE+PC9oMT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJlcy5zdGFydHNXaXRoKCc8aDE+JykgJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAhcmVzLmluY2x1ZGVzKCc8c3Ryb25nPicpICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIXJlcy5pbmNsdWRlcygnPGVtPicpICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIXJlcy5pbmNsdWRlcygnPHM+JykgJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAhcmVzLmluY2x1ZGVzKCc8dT4nKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gPFRleHQgc3R5bGU9e3sgZm9udFNpemU6IDE2IH19PntyZXMucmVwbGFjZSgvKDwoW14+XSspPikvZ2ksICcnKX08L1RleHQ+O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIDxoMT5TVFJPTkc8L2gxPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlIGlmIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICByZXMuc3RhcnRzV2l0aCgnPGgxPicpICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzLmluY2x1ZGVzKCc8c3Ryb25nPicpICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIXJlcy5pbmNsdWRlcygnPGVtPicpICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIXJlcy5pbmNsdWRlcygnPHM+JykgJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAhcmVzLmluY2x1ZGVzKCc8dT4nKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRleHQgc3R5bGU9e3sgZm9udFNpemU6IDE2LCBmb250RmFtaWx5OiAnTW9udHNlcnJhdC1TZW1pQm9sZCcgfX0+e3Jlcy5yZXBsYWNlKC8oPChbXj5dKyk+KS9naSwgJycpfTwvVGV4dD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIDxoMT5FTTwvaDE+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJlcy5zdGFydHNXaXRoKCc8aDE+JykgJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAhcmVzLmluY2x1ZGVzKCc8c3Ryb25nPicpICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzLmluY2x1ZGVzKCc8ZW0+JykgJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAhcmVzLmluY2x1ZGVzKCc8cz4nKSAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICFyZXMuaW5jbHVkZXMoJzx1PicpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiA8VGV4dCBzdHlsZT17eyBmb250U2l6ZTogMTYsIGZvbnRGYW1pbHk6ICdNb250c2VycmF0LUl0YWxpYycgfX0+e3Jlcy5yZXBsYWNlKC8oPChbXj5dKyk+KS9naSwgJycpfTwvVGV4dD47XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gPGgxPkVNICsgU1RST05HPC9oMT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzLnN0YXJ0c1dpdGgoJzxoMT4nKSAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJlcy5pbmNsdWRlcygnPHN0cm9uZz4nKSAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJlcy5pbmNsdWRlcygnPGVtPicpICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIXJlcy5pbmNsdWRlcygnPHM+JykgJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAhcmVzLmluY2x1ZGVzKCc8dT4nKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRleHQgc3R5bGU9e3sgZm9udFNpemU6IDE2LCBmb250RmFtaWx5OiAnTW9udHNlcnJhdC1TZW1pQm9sZEl0YWxpYycgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtyZXMucmVwbGFjZSgvKDwoW14+XSspPikvZ2ksICcnKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVGV4dD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIDxoMT5TPC9oMT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzLnN0YXJ0c1dpdGgoJzxoMT4nKSAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJlcy5pbmNsdWRlcygnPHM+JykgJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAhcmVzLmluY2x1ZGVzKCc8c3Ryb25nPicpICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIXJlcy5pbmNsdWRlcygnPGVtPicpICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIXJlcy5pbmNsdWRlcygnPHU+JylcclxuICAgICAgICAgICAgICAgICAgICAgICAgKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDxUZXh0IHN0eWxlPXt7IGZvbnRTaXplOiAxNiwgdGV4dERlY29yYXRpb246ICdsaW5lLXRocm91Z2gnIH19PntyZXMucmVwbGFjZSgvKDwoW14+XSspPikvZ2ksICcnKX08L1RleHQ+O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIDxoMT5TICsgRU08L2gxPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlIGlmIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICByZXMuc3RhcnRzV2l0aCgnPGgxPicpICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzLmluY2x1ZGVzKCc8cz4nKSAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJlcy5pbmNsdWRlcygnPGVtPicpICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIXJlcy5pbmNsdWRlcygnPHN0cm9uZz4nKSAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICFyZXMuaW5jbHVkZXMoJzx1PicpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGV4dCBzdHlsZT17eyBmb250U2l6ZTogMTYsIGZvbnRGYW1pbHk6ICdNb250c2VycmF0LUl0YWxpYycsIHRleHREZWNvcmF0aW9uOiAnbGluZS10aHJvdWdoJyB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3Jlcy5yZXBsYWNlKC8oPChbXj5dKyk+KS9naSwgJycpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9UZXh0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gPGgxPlMgKyBTVFJPTkc8L2gxPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlIGlmIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICByZXMuc3RhcnRzV2l0aCgnPGgxPicpICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzLmluY2x1ZGVzKCc8cz4nKSAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICFyZXMuaW5jbHVkZXMoJzxlbT4nKSAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJlcy5pbmNsdWRlcygnPHN0cm9uZz4nKSAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICFyZXMuaW5jbHVkZXMoJzx1PicpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGV4dCBzdHlsZT17eyBmb250U2l6ZTogMTIsIGZvbnRGYW1pbHk6ICdNb250c2VycmF0LVNlbWlCb2xkJywgdGV4dERlY29yYXRpb246ICdsaW5lLXRocm91Z2gnIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7cmVzLnJlcGxhY2UoLyg8KFtePl0rKT4pL2dpLCAnJyl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1RleHQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyA8aDE+UyArIEVNICsgU1RST05HPC9oMT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzLnN0YXJ0c1dpdGgoJzxoMT4nKSAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJlcy5pbmNsdWRlcygnPHM+JykgJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICByZXMuaW5jbHVkZXMoJzxlbT4nKSAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJlcy5pbmNsdWRlcygnPHN0cm9uZz4nKSAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICFyZXMuaW5jbHVkZXMoJzx1PicpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGV4dCBzdHlsZT17eyBmb250U2l6ZTogMTYsIGZvbnRGYW1pbHk6ICdNb250c2VycmF0LVNlbWlCb2xkSXRhbGljJywgdGV4dERlY29yYXRpb246ICdsaW5lLXRocm91Z2gnIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7cmVzLnJlcGxhY2UoLyg8KFtePl0rKT4pL2dpLCAnJyl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1RleHQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyA8aDE+VTwvaDE+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJlcy5zdGFydHNXaXRoKCc8aDE+JykgJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICByZXMuaW5jbHVkZXMoJzx1PicpICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIXJlcy5pbmNsdWRlcygnPHM+JykgJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAhcmVzLmluY2x1ZGVzKCc8c3Ryb25nPicpICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIXJlcy5pbmNsdWRlcygnPGVtPicpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiA8VGV4dCBzdHlsZT17eyBmb250U2l6ZTogMTYsIHRleHREZWNvcmF0aW9uOiAndW5kZXJsaW5lJyB9fT57cmVzLnJlcGxhY2UoLyg8KFtePl0rKT4pL2dpLCAnJyl9PC9UZXh0PjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyA8aDE+VSArIEVNPC9oMT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzLnN0YXJ0c1dpdGgoJzxoMT4nKSAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJlcy5pbmNsdWRlcygnPHU+JykgJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAhcmVzLmluY2x1ZGVzKCc8cz4nKSAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICFyZXMuaW5jbHVkZXMoJzxzdHJvbmc+JykgJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICByZXMuaW5jbHVkZXMoJzxlbT4nKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRleHQgc3R5bGU9e3sgZm9udFNpemU6IDE2LCBmb250RmFtaWx5OiAnTW9udHNlcnJhdC1JdGFsaWMnLCB0ZXh0RGVjb3JhdGlvbjogJ3VuZGVybGluZScgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtyZXMucmVwbGFjZSgvKDwoW14+XSspPikvZ2ksICcnKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVGV4dD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIDxoMT5VICsgUzwvaDE+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJlcy5zdGFydHNXaXRoKCc8aDE+JykgJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICByZXMuaW5jbHVkZXMoJzx1PicpICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzLmluY2x1ZGVzKCc8cz4nKSAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICFyZXMuaW5jbHVkZXMoJzxzdHJvbmc+JykgJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAhcmVzLmluY2x1ZGVzKCc8ZW0+JylcclxuICAgICAgICAgICAgICAgICAgICAgICAgKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0IHN0eWxlPXt7IGZvbnRTaXplOiAxNiwgdGV4dERlY29yYXRpb246ICdsaW5lLXRocm91Z2ggdW5kZXJsaW5lJyB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3Jlcy5yZXBsYWNlKC8oPChbXj5dKyk+KS9naSwgJycpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9UZXh0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gPGgxPlUgKyBTVFJPTkc8L2gxPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlIGlmIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICByZXMuc3RhcnRzV2l0aCgnPGgxPicpICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzLmluY2x1ZGVzKCc8dT4nKSAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICFyZXMuaW5jbHVkZXMoJzxzPicpICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzLmluY2x1ZGVzKCc8c3Ryb25nPicpICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIXJlcy5pbmNsdWRlcygnPGVtPicpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGV4dCBzdHlsZT17eyBmb250U2l6ZTogMTYsIGZvbnRGYW1pbHk6ICdNb250c2VycmF0LVNlbWlCb2xkJywgdGV4dERlY29yYXRpb246ICd1bmRlcmxpbmUnIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7cmVzLnJlcGxhY2UoLyg8KFtePl0rKT4pL2dpLCAnJyl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1RleHQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyA8aDE+VSArIFMgKyBTVFJPTkc8L2gxPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlIGlmIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICByZXMuc3RhcnRzV2l0aCgnPGgxPicpICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzLmluY2x1ZGVzKCc8dT4nKSAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJlcy5pbmNsdWRlcygnPHM+JykgJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICByZXMuaW5jbHVkZXMoJzxzdHJvbmc+JykgJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAhcmVzLmluY2x1ZGVzKCc8ZW0+JylcclxuICAgICAgICAgICAgICAgICAgICAgICAgKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0IHN0eWxlPXt7IGZvbnRTaXplOiAxNiwgZm9udEZhbWlseTogJ01vbnRzZXJyYXQtU2VtaUJvbGQnLCB0ZXh0RGVjb3JhdGlvbjogJ2xpbmUtdGhyb3VnaCB1bmRlcmxpbmUnIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7cmVzLnJlcGxhY2UoLyg8KFtePl0rKT4pL2dpLCAnJyl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1RleHQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyA8aDE+VSArIFMgKyBTVFJPTkcgKyBFTTwvaDE+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJlcy5zdGFydHNXaXRoKCc8aDE+JykgJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICByZXMuaW5jbHVkZXMoJzx1PicpICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzLmluY2x1ZGVzKCc8cz4nKSAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJlcy5pbmNsdWRlcygnPHN0cm9uZz4nKSAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJlcy5pbmNsdWRlcygnPGVtPicpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGV4dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyBmb250U2l6ZTogMTYsIGZvbnRGYW1pbHk6ICdNb250c2VycmF0LVNlbWlCb2xkSXRhbGljJywgdGV4dERlY29yYXRpb246ICdsaW5lLXRocm91Z2ggdW5kZXJsaW5lJyB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7cmVzLnJlcGxhY2UoLyg8KFtePl0rKT4pL2dpLCAnJyl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1RleHQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyA8aDE+VSArIFMgKyBFTTwvaDE+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJlcy5zdGFydHNXaXRoKCc8aDE+JykgJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICByZXMuaW5jbHVkZXMoJzx1PicpICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzLmluY2x1ZGVzKCc8cz4nKSAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICFyZXMuaW5jbHVkZXMoJzxzdHJvbmc+JykgJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICByZXMuaW5jbHVkZXMoJzxlbT4nKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRleHQgc3R5bGU9e3sgZm9udFNpemU6IDE2LCBmb250RmFtaWx5OiAnTW9udHNlcnJhdC1JdGFsaWMnLCB0ZXh0RGVjb3JhdGlvbjogJ2xpbmUtdGhyb3VnaCB1bmRlcmxpbmUnIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7cmVzLnJlcGxhY2UoLyg8KFtePl0rKT4pL2dpLCAnJyl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1RleHQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyA8aDE+VSArIFNUUk9ORyArIEVNPC9oMT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzLnN0YXJ0c1dpdGgoJzxoMT4nKSAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJlcy5pbmNsdWRlcygnPHU+JykgJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAhcmVzLmluY2x1ZGVzKCc8cz4nKSAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJlcy5pbmNsdWRlcygnPHN0cm9uZz4nKSAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJlcy5pbmNsdWRlcygnPGVtPicpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGV4dCBzdHlsZT17eyBmb250U2l6ZTogMTYsIGZvbnRGYW1pbHk6ICdNb250c2VycmF0LVNlbWlCb2xkSXRhbGljJywgdGV4dERlY29yYXRpb246ICd1bmRlcmxpbmUnIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7cmVzLnJlcGxhY2UoLyg8KFtePl0rKT4pL2dpLCAnJyl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1RleHQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBFTkQgLS0+IDxoMT48L2gxPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLSBMSVNUUyBTVEFSVCAtLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlIGlmIChyZXMuc3RhcnRzV2l0aCgnPG9sPicpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgYmVmb3JlRm9ybWF0dGVkID0gcmVzLnJlcGxhY2UoJzxvbD4nLCAnJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgYWZ0ZXJGb3JtYXR0ZWQgPSBiZWZvcmVGb3JtYXR0ZWQucmVwbGFjZSgnPC9vbD4nLCAnJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHJlc3BvbnNlID0gYWZ0ZXJGb3JtYXR0ZWQuc3BsaXQoLzxcXC9saT4vZyk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIC8vIERldGVybWluZSB3aGVyZSB0byBwdXQgdGhlID48IGJhY2sgaW4gKGFmdGVyID48IHJlbW92ZSkuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCByZXNwb25zZS5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHJlc3BvbnNlW2ldLnN1YnN0cmluZygwLCAxKSAhPSAnPCcpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzcG9uc2VbaV0gPSAnPCcgKyByZXNwb25zZVtpXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBpZiAocmVzcG9uc2VbaV0uc2xpY2UoLTEpICE9ICc+Jykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICByZXNwb25zZVtpXSA9IHJlc3BvbnNlW2ldICsgJz4nO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhyZXNwb25zZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGsgPSAxO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiByZXNwb25zZS5tYXAoKGl0ZW0pID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGl0ZW0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtLnN0YXJ0c1dpdGgoJzxsaT4nKSAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAhaXRlbS5pbmNsdWRlcygnPHN0cm9uZz4nKSAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAhaXRlbS5pbmNsdWRlcygnPGVtPicpICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICFpdGVtLmluY2x1ZGVzKCc8cz4nKSAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAhaXRlbS5pbmNsdWRlcygnPHU+JylcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxWaWV3IHN0eWxlPXt7IG1hcmdpbkxlZnQ6IDggfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGV4dCBzdHlsZT17eyBmb250U2l6ZTogMTIgfX0+e2Ake2srK30uICR7aXRlbS5yZXBsYWNlKC8oPChbXj5dKyk+KS9naSwgJycpfWB9PC9UZXh0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVmlldz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIDxwPlNUUk9ORzwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtLnN0YXJ0c1dpdGgoJzxsaT4nKSAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtLmluY2x1ZGVzKCc8c3Ryb25nPicpICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICFpdGVtLmluY2x1ZGVzKCc8ZW0+JykgJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIWl0ZW0uaW5jbHVkZXMoJzxzPicpICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICFpdGVtLmluY2x1ZGVzKCc8dT4nKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFZpZXcgc3R5bGU9e3sgbWFyZ2luTGVmdDogOCB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0IHN0eWxlPXt7IGZvbnRTaXplOiAxMiwgZm9udEZhbWlseTogJ01vbnRzZXJyYXQtU2VtaUJvbGQnIH19PntgJHtrKyt9LiAke2l0ZW0ucmVwbGFjZShcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLyg8KFtePl0rKT4pL2dpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1gfTwvVGV4dD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1ZpZXc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyA8cD5FTTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtLnN0YXJ0c1dpdGgoJzxsaT4nKSAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAhaXRlbS5pbmNsdWRlcygnPHN0cm9uZz4nKSAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtLmluY2x1ZGVzKCc8ZW0+JykgJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIWl0ZW0uaW5jbHVkZXMoJzxzPicpICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICFpdGVtLmluY2x1ZGVzKCc8dT4nKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFZpZXcgc3R5bGU9e3sgbWFyZ2luTGVmdDogOCB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0IHN0eWxlPXt7IGZvbnRTaXplOiAxMiwgZm9udEZhbWlseTogJ01vbnRzZXJyYXQtSXRhbGljJyB9fT57YCR7aysrfS4gJHtpdGVtLnJlcGxhY2UoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8oPChbXj5dKyk+KS9naSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJydcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9YH08L1RleHQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9WaWV3PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gPHA+RU0gKyBTVFJPTkc8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbHNlIGlmIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXRlbS5zdGFydHNXaXRoKCc8bGk+JykgJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXRlbS5pbmNsdWRlcygnPHN0cm9uZz4nKSAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtLmluY2x1ZGVzKCc8ZW0+JykgJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIWl0ZW0uaW5jbHVkZXMoJzxzPicpICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICFpdGVtLmluY2x1ZGVzKCc8dT4nKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFZpZXcgc3R5bGU9e3sgbWFyZ2luTGVmdDogOCB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0IHN0eWxlPXt7IGZvbnRTaXplOiAxMiwgZm9udEZhbWlseTogJ01vbnRzZXJyYXQtU2VtaUJvbGRJdGFsaWMnIH19PntgJHtrKyt9LiAke2l0ZW0ucmVwbGFjZShcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLyg8KFtePl0rKT4pL2dpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1gfTwvVGV4dD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1ZpZXc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyA8cD5TPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW0uc3RhcnRzV2l0aCgnPGxpPicpICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW0uaW5jbHVkZXMoJzxzPicpICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICFpdGVtLmluY2x1ZGVzKCc8c3Ryb25nPicpICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICFpdGVtLmluY2x1ZGVzKCc8ZW0+JykgJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIWl0ZW0uaW5jbHVkZXMoJzx1PicpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VmlldyBzdHlsZT17eyBtYXJnaW5MZWZ0OiA4IH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRleHQgc3R5bGU9e3sgZm9udFNpemU6IDEyLCB0ZXh0RGVjb3JhdGlvbjogJ2xpbmUtdGhyb3VnaCcgfX0+e2Ake2srK30uICR7aXRlbS5yZXBsYWNlKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvKDwoW14+XSspPikvZ2ksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICcnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfWB9PC9UZXh0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVmlldz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIDxwPlMgKyBFTTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtLnN0YXJ0c1dpdGgoJzxsaT4nKSAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtLmluY2x1ZGVzKCc8cz4nKSAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtLmluY2x1ZGVzKCc8ZW0+JykgJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIWl0ZW0uaW5jbHVkZXMoJzxzdHJvbmc+JykgJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIWl0ZW0uaW5jbHVkZXMoJzx1PicpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VmlldyBzdHlsZT17eyBtYXJnaW5MZWZ0OiA4IH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRleHRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgZm9udFNpemU6IDEyLCBmb250RmFtaWx5OiAnTW9udHNlcnJhdC1JdGFsaWMnLCB0ZXh0RGVjb3JhdGlvbjogJ2xpbmUtdGhyb3VnaCcgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID57YCR7aysrfS4gJHtpdGVtLnJlcGxhY2UoLyg8KFtePl0rKT4pL2dpLCAnJyl9YH08L1RleHQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9WaWV3PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gPHA+UyArIFNUUk9ORzwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtLnN0YXJ0c1dpdGgoJzxsaT4nKSAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtLmluY2x1ZGVzKCc8cz4nKSAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAhaXRlbS5pbmNsdWRlcygnPGVtPicpICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW0uaW5jbHVkZXMoJzxzdHJvbmc+JykgJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIWl0ZW0uaW5jbHVkZXMoJzx1PicpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VmlldyBzdHlsZT17eyBtYXJnaW5MZWZ0OiA4IH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRleHRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgZm9udFNpemU6IDEyLCBmb250RmFtaWx5OiAnTW9udHNlcnJhdC1TZW1pQm9sZCcsIHRleHREZWNvcmF0aW9uOiAnbGluZS10aHJvdWdoJyB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPntgJHtrKyt9LiAke2l0ZW0ucmVwbGFjZSgvKDwoW14+XSspPikvZ2ksICcnKX1gfTwvVGV4dD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1ZpZXc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyA8cD5TICsgRU0gKyBTVFJPTkc8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbHNlIGlmIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXRlbS5zdGFydHNXaXRoKCc8bGk+JykgJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXRlbS5pbmNsdWRlcygnPHM+JykgJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXRlbS5pbmNsdWRlcygnPGVtPicpICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW0uaW5jbHVkZXMoJzxzdHJvbmc+JykgJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIWl0ZW0uaW5jbHVkZXMoJzx1PicpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VmlldyBzdHlsZT17eyBtYXJnaW5MZWZ0OiA4IH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRleHRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgZm9udFNpemU6IDEyLCBmb250RmFtaWx5OiAnTW9udHNlcnJhdC1TZW1pQm9sZEl0YWxpYycsIHRleHREZWNvcmF0aW9uOiAnbGluZS10aHJvdWdoJyB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPntgJHtrKyt9LiAke2l0ZW0ucmVwbGFjZSgvKDwoW14+XSspPikvZ2ksICcnKX1gfTwvVGV4dD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1ZpZXc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyA8cD5VPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW0uc3RhcnRzV2l0aCgnPGxpPicpICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW0uaW5jbHVkZXMoJzx1PicpICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICFpdGVtLmluY2x1ZGVzKCc8cz4nKSAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAhaXRlbS5pbmNsdWRlcygnPHN0cm9uZz4nKSAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAhaXRlbS5pbmNsdWRlcygnPGVtPicpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VmlldyBzdHlsZT17eyBtYXJnaW5MZWZ0OiA4IH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRleHQgc3R5bGU9e3sgZm9udFNpemU6IDEyLCB0ZXh0RGVjb3JhdGlvbjogJ3VuZGVybGluZScgfX0+e2Ake2srK30uICR7aXRlbS5yZXBsYWNlKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvKDwoW14+XSspPikvZ2ksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICcnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfWB9PC9UZXh0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVmlldz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIDxwPlUgKyBFTTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtLnN0YXJ0c1dpdGgoJzxsaT4nKSAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtLmluY2x1ZGVzKCc8dT4nKSAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAhaXRlbS5pbmNsdWRlcygnPHM+JykgJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIWl0ZW0uaW5jbHVkZXMoJzxzdHJvbmc+JykgJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXRlbS5pbmNsdWRlcygnPGVtPicpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VmlldyBzdHlsZT17eyBtYXJnaW5MZWZ0OiA4IH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRleHRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgZm9udFNpemU6IDEyLCBmb250RmFtaWx5OiAnTW9udHNlcnJhdC1JdGFsaWMnLCB0ZXh0RGVjb3JhdGlvbjogJ3VuZGVybGluZScgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID57YCR7aysrfS4gJHtpdGVtLnJlcGxhY2UoLyg8KFtePl0rKT4pL2dpLCAnJyl9YH08L1RleHQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9WaWV3PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gPHA+VSArIFM8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbHNlIGlmIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXRlbS5zdGFydHNXaXRoKCc8bGk+JykgJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXRlbS5pbmNsdWRlcygnPHU+JykgJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXRlbS5pbmNsdWRlcygnPHM+JykgJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIWl0ZW0uaW5jbHVkZXMoJzxzdHJvbmc+JykgJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIWl0ZW0uaW5jbHVkZXMoJzxlbT4nKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFZpZXcgc3R5bGU9e3sgbWFyZ2luTGVmdDogOCB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0IHN0eWxlPXt7IGZvbnRTaXplOiAxMiwgdGV4dERlY29yYXRpb246ICdsaW5lLXRocm91Z2ggdW5kZXJsaW5lJyB9fT57YCR7aysrfS4gJHtpdGVtLnJlcGxhY2UoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8oPChbXj5dKyk+KS9naSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJydcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9YH08L1RleHQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9WaWV3PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gPHA+VSArIFNUUk9ORzwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtLnN0YXJ0c1dpdGgoJzxsaT4nKSAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtLmluY2x1ZGVzKCc8dT4nKSAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAhaXRlbS5pbmNsdWRlcygnPHM+JykgJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXRlbS5pbmNsdWRlcygnPHN0cm9uZz4nKSAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAhaXRlbS5pbmNsdWRlcygnPGVtPicpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VmlldyBzdHlsZT17eyBtYXJnaW5MZWZ0OiA4IH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRleHRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgZm9udFNpemU6IDEyLCBmb250RmFtaWx5OiAnTW9udHNlcnJhdC1TZW1pQm9sZCcsIHRleHREZWNvcmF0aW9uOiAndW5kZXJsaW5lJyB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPntgJHtrKyt9LiAke2l0ZW0ucmVwbGFjZSgvKDwoW14+XSspPikvZ2ksICcnKX1gfTwvVGV4dD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1ZpZXc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyA8cD5VICsgUyArIFNUUk9ORzwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtLnN0YXJ0c1dpdGgoJzxsaT4nKSAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtLmluY2x1ZGVzKCc8dT4nKSAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtLmluY2x1ZGVzKCc8cz4nKSAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtLmluY2x1ZGVzKCc8c3Ryb25nPicpICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICFpdGVtLmluY2x1ZGVzKCc8ZW0+JylcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxWaWV3IHN0eWxlPXt7IG1hcmdpbkxlZnQ6IDggfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGV4dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyBmb250U2l6ZTogMTIsIGZvbnRGYW1pbHk6ICdNb250c2VycmF0LVNlbWlCb2xkJywgdGV4dERlY29yYXRpb246ICdsaW5lLXRocm91Z2ggdW5kZXJsaW5lJyB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPntgJHtrKyt9LiAke2l0ZW0ucmVwbGFjZSgvKDwoW14+XSspPikvZ2ksICcnKX1gfTwvVGV4dD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1ZpZXc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyA8cD5VICsgUyArIFNUUk9ORyArIEVNPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW0uc3RhcnRzV2l0aCgnPGxpPicpICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW0uaW5jbHVkZXMoJzx1PicpICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW0uaW5jbHVkZXMoJzxzPicpICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW0uaW5jbHVkZXMoJzxzdHJvbmc+JykgJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXRlbS5pbmNsdWRlcygnPGVtPicpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VmlldyBzdHlsZT17eyBtYXJnaW5MZWZ0OiA4IH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRleHRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250U2l6ZTogMTIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udEZhbWlseTogJ01vbnRzZXJyYXQtU2VtaUJvbGRJdGFsaWMnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHREZWNvcmF0aW9uOiAnbGluZS10aHJvdWdoIHVuZGVybGluZScsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+e2Ake2srK30uICR7aXRlbS5yZXBsYWNlKC8oPChbXj5dKyk+KS9naSwgJycpfWB9PC9UZXh0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVmlldz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIDxwPlUgKyBTICsgRU08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbHNlIGlmIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXRlbS5zdGFydHNXaXRoKCc8bGk+JykgJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXRlbS5pbmNsdWRlcygnPHU+JykgJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXRlbS5pbmNsdWRlcygnPHM+JykgJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIWl0ZW0uaW5jbHVkZXMoJzxzdHJvbmc+JykgJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXRlbS5pbmNsdWRlcygnPGVtPicpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VmlldyBzdHlsZT17eyBtYXJnaW5MZWZ0OiA4IH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRleHRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250U2l6ZTogMTIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udEZhbWlseTogJ01vbnRzZXJyYXQtSXRhbGljJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0RGVjb3JhdGlvbjogJ2xpbmUtdGhyb3VnaCB1bmRlcmxpbmUnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPntgJHtrKyt9LiAke2l0ZW0ucmVwbGFjZSgvKDwoW14+XSspPikvZ2ksICcnKX1gfTwvVGV4dD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1ZpZXc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyA8cD5VICsgU1RST05HICsgRU08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbHNlIGlmIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXRlbS5zdGFydHNXaXRoKCc8bGk+JykgJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXRlbS5pbmNsdWRlcygnPHU+JykgJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIWl0ZW0uaW5jbHVkZXMoJzxzPicpICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW0uaW5jbHVkZXMoJzxzdHJvbmc+JykgJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXRlbS5pbmNsdWRlcygnPGVtPicpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VmlldyBzdHlsZT17eyBtYXJnaW5MZWZ0OiA4IH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRleHRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250U2l6ZTogMTIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udEZhbWlseTogJ01vbnRzZXJyYXQtU2VtaUJvbGRJdGFsaWMnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHREZWNvcmF0aW9uOiAndW5kZXJsaW5lJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID57YCR7aysrfS4gJHtpdGVtLnJlcGxhY2UoLyg8KFtePl0rKT4pL2dpLCAnJyl9YH08L1RleHQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9WaWV3PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gRU5EIC0tPiA8cD48L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvVmlldz5cclxuICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgPC9QYWdlPlxyXG4gICAgICAgICk7XHJcbiAgICAgIH0pfVxyXG4gICAgPC9Eb2N1bWVudD5cclxuICApO1xyXG59O1xyXG5cclxuY29uc3QgUmVhY3RQREZEb2N1bWVudCA9ICh7IHNlY3Rpb25zIH0pID0+IHtcclxuICBjb25zdCBzaXplID0gdXNlV2luZG93U2l6ZSgpO1xyXG5cclxuICBjb25zdCBzYXZlQ29udGFpbmVyID0gdXNlUmVmKCk7XHJcbiAgY29uc3QgZHJvcGRvd25CdXR0b24gPSB1c2VSZWYoKTtcclxuICBjb25zdCBkcm9wZG93bkNvbnRhaW5lciA9IHVzZVJlZigpO1xyXG4gIGNvbnN0IFtkcm9wZG93bkJ1dHRvbkNvbG9ySGVscGVyLCBzZXREcm9wZG93bkJ1dHRvbkNvbG9ySGVscGVyXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbZHJvcGRvd25Db250YWluZXJIZWxwZXIsIHNldERyb3Bkb3duQ29udGFpbmVySGVscGVyXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBvblNhdmVEcm9wZG93blNob3cgPSAoKSA9PiB7XHJcbiAgICBpZiAoIWRyb3Bkb3duQ29udGFpbmVySGVscGVyKSB7XHJcbiAgICAgIGdzYXAudG8oZHJvcGRvd25Db250YWluZXIuY3VycmVudCwgeyBhdXRvQWxwaGE6IDEsIGR1cmF0aW9uOiAxLCBlYXNlOiBMaW5lYXIgfSk7XHJcbiAgICAgIC8vIGdzYXAudG8oZHJvcGRvd25CdXR0b24uY3VycmVudCwgeyBiYWNrZ3JvdW5kQ29sb3I6ICcjNkM2M0ZGJywgY29sb3I6ICcjZjhmOWZiJywgZHVyYXRpb246IDEsIGVhc2U6IExpbmVhciB9KTtcclxuICAgICAgc2V0RHJvcGRvd25Db250YWluZXJIZWxwZXIodHJ1ZSk7XHJcbiAgICAgIHNldERyb3Bkb3duQnV0dG9uQ29sb3JIZWxwZXIodHJ1ZSk7XHJcbiAgICB9IGVsc2UgaWYgKGRyb3Bkb3duQ29udGFpbmVySGVscGVyKSB7XHJcbiAgICAgIGdzYXAudG8oZHJvcGRvd25Db250YWluZXIuY3VycmVudCwgeyBhdXRvQWxwaGE6IDAsIGR1cmF0aW9uOiAxLCBlYXNlOiBMaW5lYXIgfSk7XHJcbiAgICAgIC8vIGdzYXAudG8oZHJvcGRvd25CdXR0b24uY3VycmVudCwgeyBiYWNrZ3JvdW5kQ29sb3I6ICcjZjhmOWZiJywgY29sb3I6ICcjNkM2M0ZGJywgZHVyYXRpb246IDEsIGVhc2U6IExpbmVhciB9KTtcclxuICAgICAgc2V0RHJvcGRvd25Db250YWluZXJIZWxwZXIoZmFsc2UpO1xyXG4gICAgICBzZXREcm9wZG93bkJ1dHRvbkNvbG9ySGVscGVyKGZhbHNlKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICBjb25zdCBbaW1hZ2VzVXJsLCBzZXRJbWFnZXNVcmxdID0gdXNlU3RhdGUoKTtcclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc29sZS5sb2coc2VjdGlvbnMpO1xyXG4gICAgY29uc3QgaW1hZ2VzQXJyYXkgPSBbXTtcclxuICAgIHNldEltYWdlc1VybChpbWFnZXNBcnJheSk7XHJcbiAgICBzZWN0aW9ucyAmJlxyXG4gICAgICBzZWN0aW9ucy5tYXAoKHNlY3Rpb24pID0+IHtcclxuICAgICAgICBzZWN0aW9uLmZpZWxkcy5tYXAoKGZpZWxkKSA9PiB7XHJcbiAgICAgICAgICBpZiAoZmllbGQudHlwZSA9PSAnY2hhcnQnKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGNvbG9ycyA9XHJcbiAgICAgICAgICAgICAgZmllbGQuY2hhcnRUeXBlID09ICdQaWUgY2hhcnQnIHx8IGZpZWxkLmNoYXJ0VHlwZSA9PSAnRG91Z2hudXQgY2hhcnQnXHJcbiAgICAgICAgICAgICAgICA/IFtcclxuICAgICAgICAgICAgICAgICAgICAncmdiYSgyMDUsMjIwLDU3LDEpJyxcclxuICAgICAgICAgICAgICAgICAgICAncmdiYSgyNTUsMjM1LDU5LDEpJyxcclxuICAgICAgICAgICAgICAgICAgICAncmdiYSgyNTUsMTkzLDcsMSknLFxyXG4gICAgICAgICAgICAgICAgICAgICdyZ2JhKDI1NSwxNTIsMCwxKScsXHJcbiAgICAgICAgICAgICAgICAgICAgJ3JnYmEoMjU1LDg3LDM0LDEpJyxcclxuICAgICAgICAgICAgICAgICAgICAncmdiYSgyNDQsNjcsNTQsMSknLFxyXG4gICAgICAgICAgICAgICAgICAgICdyZ2JhKDIzMywzMCw5OSwxKScsXHJcbiAgICAgICAgICAgICAgICAgICAgJ3JnYmEoMTU2LDM5LDE3NiwxKScsXHJcbiAgICAgICAgICAgICAgICAgICAgJ3JnYmEoMTAzLDU4LDE4MywxKScsXHJcbiAgICAgICAgICAgICAgICAgICAgJ3JnYmEoNjMsODEsMTgxLDEpJyxcclxuICAgICAgICAgICAgICAgICAgICAncmdiYSg5NiwxMjUsMTM5LDEpJyxcclxuICAgICAgICAgICAgICAgICAgICAncmdiYSgxMjEsODUsNzIsMSknLFxyXG4gICAgICAgICAgICAgICAgICBdXHJcbiAgICAgICAgICAgICAgICA6IGZpZWxkLmNoYXJ0VHlwZSA9PSAnTGluZSBjaGFydCcgfHwgZmllbGQuY2hhcnRUeXBlID09ICdBcmVhIGNoYXJ0J1xyXG4gICAgICAgICAgICAgICAgPyAncmdiYSgyNTUsMTg1LDAgLDEgKSdcclxuICAgICAgICAgICAgICAgIDogW1xyXG4gICAgICAgICAgICAgICAgICAgICdyZ2JhKDI1NSwxODUsMCAsMSApJyxcclxuICAgICAgICAgICAgICAgICAgICAncmdiYSgyNTUsMTg1LDAgLDEgKScsXHJcbiAgICAgICAgICAgICAgICAgICAgJ3JnYmEoMjU1LDE4NSwwICwxICknLFxyXG4gICAgICAgICAgICAgICAgICAgICdyZ2JhKDI1NSwxODUsMCAsMSApJyxcclxuICAgICAgICAgICAgICAgICAgICAncmdiYSgyNTUsMTg1LDAgLDEgKScsXHJcbiAgICAgICAgICAgICAgICAgICAgJ3JnYmEoMjU1LDE4NSwwICwxICknLFxyXG4gICAgICAgICAgICAgICAgICAgICdyZ2JhKDI1NSwxODUsMCAsMSApJyxcclxuICAgICAgICAgICAgICAgICAgICAncmdiYSgyNTUsMTg1LDAgLDEgKScsXHJcbiAgICAgICAgICAgICAgICAgICAgJ3JnYmEoMjU1LDE4NSwwICwxICknLFxyXG4gICAgICAgICAgICAgICAgICAgICdyZ2JhKDI1NSwxODUsMCAsMSApJyxcclxuICAgICAgICAgICAgICAgICAgICAncmdiYSgyNTUsMTg1LDAgLDEgKScsXHJcbiAgICAgICAgICAgICAgICAgICAgJ3JnYmEoMjU1LDE4NSwwICwxICknLFxyXG4gICAgICAgICAgICAgICAgICBdO1xyXG5cclxuICAgICAgICAgICAgY29uc3QgY29sb3JzMSA9XHJcbiAgICAgICAgICAgICAgZmllbGQuY2hhcnRUeXBlID09ICdQaWUgY2hhcnQnIHx8IGZpZWxkLmNoYXJ0VHlwZSA9PSAnRG91Z2hudXQgY2hhcnQnXHJcbiAgICAgICAgICAgICAgICA/IFtcclxuICAgICAgICAgICAgICAgICAgICAncmdiYSgyMDUsMjIwLDU3LDEpJyxcclxuICAgICAgICAgICAgICAgICAgICAncmdiYSgyNTUsMjM1LDU5LDEpJyxcclxuICAgICAgICAgICAgICAgICAgICAncmdiYSgyNTUsMTkzLDcsMSknLFxyXG4gICAgICAgICAgICAgICAgICAgICdyZ2JhKDI1NSwxNTIsMCwxKScsXHJcbiAgICAgICAgICAgICAgICAgICAgJ3JnYmEoMjU1LDg3LDM0LDEpJyxcclxuICAgICAgICAgICAgICAgICAgICAncmdiYSgyNDQsNjcsNTQsMSknLFxyXG4gICAgICAgICAgICAgICAgICAgICdyZ2JhKDIzMywzMCw5OSwxKScsXHJcbiAgICAgICAgICAgICAgICAgICAgJ3JnYmEoMTU2LDM5LDE3NiwxKScsXHJcbiAgICAgICAgICAgICAgICAgICAgJ3JnYmEoMTAzLDU4LDE4MywxKScsXHJcbiAgICAgICAgICAgICAgICAgICAgJ3JnYmEoNjMsODEsMTgxLDEpJyxcclxuICAgICAgICAgICAgICAgICAgICAncmdiYSg5NiwxMjUsMTM5LDEpJyxcclxuICAgICAgICAgICAgICAgICAgICAncmdiYSgxMjEsODUsNzIsMSknLFxyXG4gICAgICAgICAgICAgICAgICBdXHJcbiAgICAgICAgICAgICAgICA6IGZpZWxkLmNoYXJ0VHlwZSA9PSAnTGluZSBjaGFydCcgfHwgZmllbGQuY2hhcnRUeXBlID09ICdBcmVhIGNoYXJ0J1xyXG4gICAgICAgICAgICAgICAgPyAncmdiYSgwLDIwNCwxMDYgLDEgKSdcclxuICAgICAgICAgICAgICAgIDogW1xyXG4gICAgICAgICAgICAgICAgICAgICdyZ2JhKDAsMjA0LDEwNiAsMSApJyxcclxuICAgICAgICAgICAgICAgICAgICAncmdiYSgwLDIwNCwxMDYgLDEgKScsXHJcbiAgICAgICAgICAgICAgICAgICAgJ3JnYmEoMCwyMDQsMTA2ICwxICknLFxyXG4gICAgICAgICAgICAgICAgICAgICdyZ2JhKDAsMjA0LDEwNiAsMSApJyxcclxuICAgICAgICAgICAgICAgICAgICAncmdiYSgwLDIwNCwxMDYgLDEgKScsXHJcbiAgICAgICAgICAgICAgICAgICAgJ3JnYmEoMCwyMDQsMTA2ICwxICknLFxyXG4gICAgICAgICAgICAgICAgICAgICdyZ2JhKDAsMjA0LDEwNiAsMSApJyxcclxuICAgICAgICAgICAgICAgICAgICAncmdiYSgwLDIwNCwxMDYgLDEgKScsXHJcbiAgICAgICAgICAgICAgICAgICAgJ3JnYmEoMCwyMDQsMTA2ICwxICknLFxyXG4gICAgICAgICAgICAgICAgICAgICdyZ2JhKDAsMjA0LDEwNiAsMSApJyxcclxuICAgICAgICAgICAgICAgICAgICAncmdiYSgwLDIwNCwxMDYgLDEgKScsXHJcbiAgICAgICAgICAgICAgICAgICAgJ3JnYmEoMCwyMDQsMTA2ICwxICknLFxyXG4gICAgICAgICAgICAgICAgICBdO1xyXG5cclxuICAgICAgICAgICAgY29uc3QgY29sb3JzMiA9XHJcbiAgICAgICAgICAgICAgZmllbGQuY2hhcnRUeXBlID09ICdQaWUgY2hhcnQnIHx8IGZpZWxkLmNoYXJ0VHlwZSA9PSAnRG91Z2hudXQgY2hhcnQnXHJcbiAgICAgICAgICAgICAgICA/IFtcclxuICAgICAgICAgICAgICAgICAgICAncmdiYSgyMDUsMjIwLDU3LDEpJyxcclxuICAgICAgICAgICAgICAgICAgICAncmdiYSgyNTUsMjM1LDU5LDEpJyxcclxuICAgICAgICAgICAgICAgICAgICAncmdiYSgyNTUsMTkzLDcsMSknLFxyXG4gICAgICAgICAgICAgICAgICAgICdyZ2JhKDI1NSwxNTIsMCwxKScsXHJcbiAgICAgICAgICAgICAgICAgICAgJ3JnYmEoMjU1LDg3LDM0LDEpJyxcclxuICAgICAgICAgICAgICAgICAgICAncmdiYSgyNDQsNjcsNTQsMSknLFxyXG4gICAgICAgICAgICAgICAgICAgICdyZ2JhKDIzMywzMCw5OSwxKScsXHJcbiAgICAgICAgICAgICAgICAgICAgJ3JnYmEoMTU2LDM5LDE3NiwxKScsXHJcbiAgICAgICAgICAgICAgICAgICAgJ3JnYmEoMTAzLDU4LDE4MywxKScsXHJcbiAgICAgICAgICAgICAgICAgICAgJ3JnYmEoNjMsODEsMTgxLDEpJyxcclxuICAgICAgICAgICAgICAgICAgICAncmdiYSg5NiwxMjUsMTM5LDEpJyxcclxuICAgICAgICAgICAgICAgICAgICAncmdiYSgxMjEsODUsNzIsMSknLFxyXG4gICAgICAgICAgICAgICAgICBdXHJcbiAgICAgICAgICAgICAgICA6IGZpZWxkLmNoYXJ0VHlwZSA9PSAnTGluZSBjaGFydCcgfHwgZmllbGQuY2hhcnRUeXBlID09ICdBcmVhIGNoYXJ0J1xyXG4gICAgICAgICAgICAgICAgPyAncmdiYSgwLDEyMCwyMTUgLDEgKSdcclxuICAgICAgICAgICAgICAgIDogW1xyXG4gICAgICAgICAgICAgICAgICAgICdyZ2JhKDAsMTIwLDIxNSAsMSApJyxcclxuICAgICAgICAgICAgICAgICAgICAncmdiYSgwLDEyMCwyMTUgLDEgKScsXHJcbiAgICAgICAgICAgICAgICAgICAgJ3JnYmEoMCwxMjAsMjE1ICwxICknLFxyXG4gICAgICAgICAgICAgICAgICAgICdyZ2JhKDAsMTIwLDIxNSAsMSApJyxcclxuICAgICAgICAgICAgICAgICAgICAncmdiYSgwLDEyMCwyMTUgLDEgKScsXHJcbiAgICAgICAgICAgICAgICAgICAgJ3JnYmEoMCwxMjAsMjE1ICwxICknLFxyXG4gICAgICAgICAgICAgICAgICAgICdyZ2JhKDAsMTIwLDIxNSAsMSApJyxcclxuICAgICAgICAgICAgICAgICAgICAncmdiYSgwLDEyMCwyMTUgLDEgKScsXHJcbiAgICAgICAgICAgICAgICAgICAgJ3JnYmEoMCwxMjAsMjE1ICwxICknLFxyXG4gICAgICAgICAgICAgICAgICAgICdyZ2JhKDAsMTIwLDIxNSAsMSApJyxcclxuICAgICAgICAgICAgICAgICAgICAncmdiYSgwLDEyMCwyMTUgLDEgKScsXHJcbiAgICAgICAgICAgICAgICAgICAgJ3JnYmEoMCwxMjAsMjE1ICwxICknLFxyXG4gICAgICAgICAgICAgICAgICBdO1xyXG5cclxuICAgICAgICAgICAgY29uc3QgY29sb3JzMyA9XHJcbiAgICAgICAgICAgICAgZmllbGQuY2hhcnRUeXBlID09ICdQaWUgY2hhcnQnIHx8IGZpZWxkLmNoYXJ0VHlwZSA9PSAnRG91Z2hudXQgY2hhcnQnXHJcbiAgICAgICAgICAgICAgICA/IFtcclxuICAgICAgICAgICAgICAgICAgICAncmdiYSgyMDUsMjIwLDU3LDEpJyxcclxuICAgICAgICAgICAgICAgICAgICAncmdiYSgyNTUsMjM1LDU5LDEpJyxcclxuICAgICAgICAgICAgICAgICAgICAncmdiYSgyNTUsMTkzLDcsMSknLFxyXG4gICAgICAgICAgICAgICAgICAgICdyZ2JhKDI1NSwxNTIsMCwxKScsXHJcbiAgICAgICAgICAgICAgICAgICAgJ3JnYmEoMjU1LDg3LDM0LDEpJyxcclxuICAgICAgICAgICAgICAgICAgICAncmdiYSgyNDQsNjcsNTQsMSknLFxyXG4gICAgICAgICAgICAgICAgICAgICdyZ2JhKDIzMywzMCw5OSwxKScsXHJcbiAgICAgICAgICAgICAgICAgICAgJ3JnYmEoMTU2LDM5LDE3NiwxKScsXHJcbiAgICAgICAgICAgICAgICAgICAgJ3JnYmEoMTAzLDU4LDE4MywxKScsXHJcbiAgICAgICAgICAgICAgICAgICAgJ3JnYmEoNjMsODEsMTgxLDEpJyxcclxuICAgICAgICAgICAgICAgICAgICAncmdiYSg5NiwxMjUsMTM5LDEpJyxcclxuICAgICAgICAgICAgICAgICAgICAncmdiYSgxMjEsODUsNzIsMSknLFxyXG4gICAgICAgICAgICAgICAgICBdXHJcbiAgICAgICAgICAgICAgICA6IGZpZWxkLmNoYXJ0VHlwZSA9PSAnTGluZSBjaGFydCcgfHwgZmllbGQuY2hhcnRUeXBlID09ICdBcmVhIGNoYXJ0J1xyXG4gICAgICAgICAgICAgICAgPyAncmdiYSgyMzEsNzIsODYgLDEgKSdcclxuICAgICAgICAgICAgICAgIDogW1xyXG4gICAgICAgICAgICAgICAgICAgICdyZ2JhKDIzMSw3Miw4NiAsMSApJyxcclxuICAgICAgICAgICAgICAgICAgICAncmdiYSgyMzEsNzIsODYgLDEgKScsXHJcbiAgICAgICAgICAgICAgICAgICAgJ3JnYmEoMjMxLDcyLDg2ICwxICknLFxyXG4gICAgICAgICAgICAgICAgICAgICdyZ2JhKDIzMSw3Miw4NiAsMSApJyxcclxuICAgICAgICAgICAgICAgICAgICAncmdiYSgyMzEsNzIsODYgLDEgKScsXHJcbiAgICAgICAgICAgICAgICAgICAgJ3JnYmEoMjMxLDcyLDg2ICwxICknLFxyXG4gICAgICAgICAgICAgICAgICAgICdyZ2JhKDIzMSw3Miw4NiAsMSApJyxcclxuICAgICAgICAgICAgICAgICAgICAncmdiYSgyMzEsNzIsODYgLDEgKScsXHJcbiAgICAgICAgICAgICAgICAgICAgJ3JnYmEoMjMxLDcyLDg2ICwxICknLFxyXG4gICAgICAgICAgICAgICAgICAgICdyZ2JhKDIzMSw3Miw4NiAsMSApJyxcclxuICAgICAgICAgICAgICAgICAgICAncmdiYSgyMzEsNzIsODYgLDEgKScsXHJcbiAgICAgICAgICAgICAgICAgICAgJ3JnYmEoMjMxLDcyLDg2ICwxICknLFxyXG4gICAgICAgICAgICAgICAgICBdO1xyXG5cclxuICAgICAgICAgICAgY29uc3QgY29sb3JzNCA9XHJcbiAgICAgICAgICAgICAgZmllbGQuY2hhcnRUeXBlID09ICdQaWUgY2hhcnQnIHx8IGZpZWxkLmNoYXJ0VHlwZSA9PSAnRG91Z2hudXQgY2hhcnQnXHJcbiAgICAgICAgICAgICAgICA/IFtcclxuICAgICAgICAgICAgICAgICAgICAncmdiYSgyMDUsMjIwLDU3LDEpJyxcclxuICAgICAgICAgICAgICAgICAgICAncmdiYSgyNTUsMjM1LDU5LDEpJyxcclxuICAgICAgICAgICAgICAgICAgICAncmdiYSgyNTUsMTkzLDcsMSknLFxyXG4gICAgICAgICAgICAgICAgICAgICdyZ2JhKDI1NSwxNTIsMCwxKScsXHJcbiAgICAgICAgICAgICAgICAgICAgJ3JnYmEoMjU1LDg3LDM0LDEpJyxcclxuICAgICAgICAgICAgICAgICAgICAncmdiYSgyNDQsNjcsNTQsMSknLFxyXG4gICAgICAgICAgICAgICAgICAgICdyZ2JhKDIzMywzMCw5OSwxKScsXHJcbiAgICAgICAgICAgICAgICAgICAgJ3JnYmEoMTU2LDM5LDE3NiwxKScsXHJcbiAgICAgICAgICAgICAgICAgICAgJ3JnYmEoMTAzLDU4LDE4MywxKScsXHJcbiAgICAgICAgICAgICAgICAgICAgJ3JnYmEoNjMsODEsMTgxLDEpJyxcclxuICAgICAgICAgICAgICAgICAgICAncmdiYSg5NiwxMjUsMTM5LDEpJyxcclxuICAgICAgICAgICAgICAgICAgICAncmdiYSgxMjEsODUsNzIsMSknLFxyXG4gICAgICAgICAgICAgICAgICBdXHJcbiAgICAgICAgICAgICAgICA6IGZpZWxkLmNoYXJ0VHlwZSA9PSAnTGluZSBjaGFydCcgfHwgZmllbGQuY2hhcnRUeXBlID09ICdBcmVhIGNoYXJ0J1xyXG4gICAgICAgICAgICAgICAgPyAncmdiYSgxMjYsMTE1LDk1ICwxICknXHJcbiAgICAgICAgICAgICAgICA6IFtcclxuICAgICAgICAgICAgICAgICAgICAncmdiYSgxMjYsMTE1LDk1ICwxICknLFxyXG4gICAgICAgICAgICAgICAgICAgICdyZ2JhKDEyNiwxMTUsOTUgLDEgKScsXHJcbiAgICAgICAgICAgICAgICAgICAgJ3JnYmEoMTI2LDExNSw5NSAsMSApJyxcclxuICAgICAgICAgICAgICAgICAgICAncmdiYSgxMjYsMTE1LDk1ICwxICknLFxyXG4gICAgICAgICAgICAgICAgICAgICdyZ2JhKDEyNiwxMTUsOTUgLDEgKScsXHJcbiAgICAgICAgICAgICAgICAgICAgJ3JnYmEoMTI2LDExNSw5NSAsMSApJyxcclxuICAgICAgICAgICAgICAgICAgICAncmdiYSgxMjYsMTE1LDk1ICwxICknLFxyXG4gICAgICAgICAgICAgICAgICAgICdyZ2JhKDEyNiwxMTUsOTUgLDEgKScsXHJcbiAgICAgICAgICAgICAgICAgICAgJ3JnYmEoMTI2LDExNSw5NSAsMSApJyxcclxuICAgICAgICAgICAgICAgICAgICAncmdiYSgxMjYsMTE1LDk1ICwxICknLFxyXG4gICAgICAgICAgICAgICAgICAgICdyZ2JhKDEyNiwxMTUsOTUgLDEgKScsXHJcbiAgICAgICAgICAgICAgICAgICAgJ3JnYmEoMTI2LDExNSw5NSAsMSApJyxcclxuICAgICAgICAgICAgICAgICAgXTtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IGNvbG9yczUgPVxyXG4gICAgICAgICAgICAgIGZpZWxkLmNoYXJ0VHlwZSA9PSAnUGllIGNoYXJ0JyB8fCBmaWVsZC5jaGFydFR5cGUgPT0gJ0RvdWdobnV0IGNoYXJ0J1xyXG4gICAgICAgICAgICAgICAgPyBbXHJcbiAgICAgICAgICAgICAgICAgICAgJ3JnYmEoMjA1LDIyMCw1NywxKScsXHJcbiAgICAgICAgICAgICAgICAgICAgJ3JnYmEoMjU1LDIzNSw1OSwxKScsXHJcbiAgICAgICAgICAgICAgICAgICAgJ3JnYmEoMjU1LDE5Myw3LDEpJyxcclxuICAgICAgICAgICAgICAgICAgICAncmdiYSgyNTUsMTUyLDAsMSknLFxyXG4gICAgICAgICAgICAgICAgICAgICdyZ2JhKDI1NSw4NywzNCwxKScsXHJcbiAgICAgICAgICAgICAgICAgICAgJ3JnYmEoMjQ0LDY3LDU0LDEpJyxcclxuICAgICAgICAgICAgICAgICAgICAncmdiYSgyMzMsMzAsOTksMSknLFxyXG4gICAgICAgICAgICAgICAgICAgICdyZ2JhKDE1NiwzOSwxNzYsMSknLFxyXG4gICAgICAgICAgICAgICAgICAgICdyZ2JhKDEwMyw1OCwxODMsMSknLFxyXG4gICAgICAgICAgICAgICAgICAgICdyZ2JhKDYzLDgxLDE4MSwxKScsXHJcbiAgICAgICAgICAgICAgICAgICAgJ3JnYmEoOTYsMTI1LDEzOSwxKScsXHJcbiAgICAgICAgICAgICAgICAgICAgJ3JnYmEoMTIxLDg1LDcyLDEpJyxcclxuICAgICAgICAgICAgICAgICAgXVxyXG4gICAgICAgICAgICAgICAgOiBmaWVsZC5jaGFydFR5cGUgPT0gJ0xpbmUgY2hhcnQnIHx8IGZpZWxkLmNoYXJ0VHlwZSA9PSAnQXJlYSBjaGFydCdcclxuICAgICAgICAgICAgICAgID8gJ3JnYmEoMTc3LDcwLDE5NCAsMSApJ1xyXG4gICAgICAgICAgICAgICAgOiBbXHJcbiAgICAgICAgICAgICAgICAgICAgJ3JnYmEoMTc3LDcwLDE5NCAsMSApJyxcclxuICAgICAgICAgICAgICAgICAgICAncmdiYSgxNzcsNzAsMTk0ICwxICknLFxyXG4gICAgICAgICAgICAgICAgICAgICdyZ2JhKDE3Nyw3MCwxOTQgLDEgKScsXHJcbiAgICAgICAgICAgICAgICAgICAgJ3JnYmEoMTc3LDcwLDE5NCAsMSApJyxcclxuICAgICAgICAgICAgICAgICAgICAncmdiYSgxNzcsNzAsMTk0ICwxICknLFxyXG4gICAgICAgICAgICAgICAgICAgICdyZ2JhKDE3Nyw3MCwxOTQgLDEgKScsXHJcbiAgICAgICAgICAgICAgICAgICAgJ3JnYmEoMTc3LDcwLDE5NCAsMSApJyxcclxuICAgICAgICAgICAgICAgICAgICAncmdiYSgxNzcsNzAsMTk0ICwxICknLFxyXG4gICAgICAgICAgICAgICAgICAgICdyZ2JhKDE3Nyw3MCwxOTQgLDEgKScsXHJcbiAgICAgICAgICAgICAgICAgICAgJ3JnYmEoMTc3LDcwLDE5NCAsMSApJyxcclxuICAgICAgICAgICAgICAgICAgICAncmdiYSgxNzcsNzAsMTk0ICwxICknLFxyXG4gICAgICAgICAgICAgICAgICAgICdyZ2JhKDE3Nyw3MCwxOTQgLDEgKScsXHJcbiAgICAgICAgICAgICAgICAgIF07XHJcbiAgICAgICAgICAgIGNvbnN0IGRhdGEgPSB7XHJcbiAgICAgICAgICAgICAgbGFiZWxzOiBmaWVsZC5sYWJlbHMgJiYgW1xyXG4gICAgICAgICAgICAgICAgLi4uZmllbGQubGFiZWxzLm1hcCgobGFiZWwpID0+IHtcclxuICAgICAgICAgICAgICAgICAgaWYgKGxhYmVsICE9PSAnJykge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBsYWJlbDtcclxuICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gJyc7XHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pLFxyXG4gICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgZGF0YXNldHM6IFtcclxuICAgICAgICAgICAgICAgIC8vIERhdGFzZXQxXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgIGxhYmVsOiBmaWVsZC5kYXRhc2V0MUxhYmVsICYmIGZpZWxkLmRhdGFzZXQxTGFiZWwsXHJcbiAgICAgICAgICAgICAgICAgIGRhdGE6XHJcbiAgICAgICAgICAgICAgICAgICAgZmllbGQuZGF0YXNldDEgJiZcclxuICAgICAgICAgICAgICAgICAgICBmaWVsZC5kYXRhc2V0MS5tYXAoKGRhdGEpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgIGlmIChkYXRhICE9PSAnJykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZGF0YTtcclxuICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9KSxcclxuICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBjb2xvcnMsXHJcbiAgICAgICAgICAgICAgICAgIGJvcmRlcldpZHRoOlxyXG4gICAgICAgICAgICAgICAgICAgIGZpZWxkLmNoYXJ0VHlwZSA9PSAnQXJlYSBjaGFydCcgPyAwIDogZmllbGQuY2hhcnRUeXBlID09ICdQaWUgY2hhcnQnIHx8IChmaWVsZC5jaGFydFR5cGUgPT0gJ0RvdWdobnV0IGNoYXJ0JyAmJiAyKSxcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAvLyBEYXRhc2V0MlxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICBsYWJlbDogZmllbGQuZGF0YXNldDJMYWJlbCAmJiBmaWVsZC5kYXRhc2V0MkxhYmVsLFxyXG4gICAgICAgICAgICAgICAgICBkYXRhOlxyXG4gICAgICAgICAgICAgICAgICAgIGZpZWxkLmRhdGFzZXQyICYmXHJcbiAgICAgICAgICAgICAgICAgICAgZmllbGQuZGF0YXNldDIubWFwKChkYXRhKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICBpZiAoZGF0YSAhPT0gJycpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGRhdGE7XHJcbiAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSksXHJcbiAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogY29sb3JzMSxcclxuICAgICAgICAgICAgICAgICAgYm9yZGVyV2lkdGg6XHJcbiAgICAgICAgICAgICAgICAgICAgZmllbGQuY2hhcnRUeXBlID09ICdBcmVhIGNoYXJ0JyA/IDAgOiBmaWVsZC5jaGFydFR5cGUgPT0gJ1BpZSBjaGFydCcgfHwgKGZpZWxkLmNoYXJ0VHlwZSA9PSAnRG91Z2hudXQgY2hhcnQnICYmIDIpLFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIC8vIERhdGFzZXQzXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgIGxhYmVsOiBmaWVsZC5kYXRhc2V0M0xhYmVsICYmIGZpZWxkLmRhdGFzZXQzTGFiZWwsXHJcbiAgICAgICAgICAgICAgICAgIGRhdGE6XHJcbiAgICAgICAgICAgICAgICAgICAgZmllbGQuZGF0YXNldDMgJiZcclxuICAgICAgICAgICAgICAgICAgICBmaWVsZC5kYXRhc2V0My5tYXAoKGRhdGEpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgIGlmIChkYXRhICE9PSAnJykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZGF0YTtcclxuICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9KSxcclxuICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBjb2xvcnMyLFxyXG4gICAgICAgICAgICAgICAgICBib3JkZXJXaWR0aDpcclxuICAgICAgICAgICAgICAgICAgICBmaWVsZC5jaGFydFR5cGUgPT0gJ0FyZWEgY2hhcnQnID8gMCA6IGZpZWxkLmNoYXJ0VHlwZSA9PSAnUGllIGNoYXJ0JyB8fCAoZmllbGQuY2hhcnRUeXBlID09ICdEb3VnaG51dCBjaGFydCcgJiYgMiksXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgLy8gRGF0YXNldDRcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgbGFiZWw6IGZpZWxkLmRhdGFzZXQ0TGFiZWwgJiYgZmllbGQuZGF0YXNldDRMYWJlbCxcclxuICAgICAgICAgICAgICAgICAgZGF0YTpcclxuICAgICAgICAgICAgICAgICAgICBmaWVsZC5kYXRhc2V0NCAmJlxyXG4gICAgICAgICAgICAgICAgICAgIGZpZWxkLmRhdGFzZXQ0Lm1hcCgoZGF0YSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgaWYgKGRhdGEgIT09ICcnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBkYXRhO1xyXG4gICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH0pLFxyXG4gICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IGNvbG9yczMsXHJcbiAgICAgICAgICAgICAgICAgIGJvcmRlcldpZHRoOlxyXG4gICAgICAgICAgICAgICAgICAgIGZpZWxkLmNoYXJ0VHlwZSA9PSAnQXJlYSBjaGFydCcgPyAwIDogZmllbGQuY2hhcnRUeXBlID09ICdQaWUgY2hhcnQnIHx8IChmaWVsZC5jaGFydFR5cGUgPT0gJ0RvdWdobnV0IGNoYXJ0JyAmJiAyKSxcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAvLyBEYXRhc2V0NVxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICBsYWJlbDogZmllbGQuZGF0YXNldDVMYWJlbCAmJiBmaWVsZC5kYXRhc2V0NUxhYmVsLFxyXG4gICAgICAgICAgICAgICAgICBkYXRhOlxyXG4gICAgICAgICAgICAgICAgICAgIGZpZWxkLmRhdGFzZXQ1ICYmXHJcbiAgICAgICAgICAgICAgICAgICAgZmllbGQuZGF0YXNldDUubWFwKChkYXRhKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICBpZiAoZGF0YSAhPT0gJycpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGRhdGE7XHJcbiAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSksXHJcbiAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogY29sb3JzNCxcclxuICAgICAgICAgICAgICAgICAgYm9yZGVyV2lkdGg6XHJcbiAgICAgICAgICAgICAgICAgICAgZmllbGQuY2hhcnRUeXBlID09ICdBcmVhIGNoYXJ0JyA/IDAgOiBmaWVsZC5jaGFydFR5cGUgPT0gJ1BpZSBjaGFydCcgfHwgKGZpZWxkLmNoYXJ0VHlwZSA9PSAnRG91Z2hudXQgY2hhcnQnICYmIDIpLFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIC8vIERhdGFzZXQ2XHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgIGxhYmVsOiBmaWVsZC5kYXRhc2V0NkxhYmVsICYmIGZpZWxkLmRhdGFzZXQ2TGFiZWwsXHJcbiAgICAgICAgICAgICAgICAgIGRhdGE6XHJcbiAgICAgICAgICAgICAgICAgICAgZmllbGQuZGF0YXNldDYgJiZcclxuICAgICAgICAgICAgICAgICAgICBmaWVsZC5kYXRhc2V0Ni5tYXAoKGRhdGEpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgIGlmIChkYXRhICE9PSAnJykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZGF0YTtcclxuICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9KSxcclxuICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBjb2xvcnM1LFxyXG4gICAgICAgICAgICAgICAgICBib3JkZXJXaWR0aDpcclxuICAgICAgICAgICAgICAgICAgICBmaWVsZC5jaGFydFR5cGUgPT0gJ0FyZWEgY2hhcnQnID8gMCA6IGZpZWxkLmNoYXJ0VHlwZSA9PSAnUGllIGNoYXJ0JyB8fCAoZmllbGQuY2hhcnRUeXBlID09ICdEb3VnaG51dCBjaGFydCcgJiYgMiksXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICBjb25zdCBkYXRhcyA9IGRhdGEuZGF0YXNldHMubWFwKChkYXRhc2V0KSA9PiB7XHJcbiAgICAgICAgICAgICAgY29uc29sZS5sb2coZGF0YXNldC5kYXRhWzBdKTtcclxuICAgICAgICAgICAgICBjb25zdCB0ZXN0MSA9IGRhdGFzZXQuZGF0YS5tYXAoKGRhdGFzZXMpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChkYXRhc2VzICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICAgICAgcmV0dXJuIGRhdGFzZXM7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICByZXR1cm4gJyc7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgY29uc3QgdGVzdCA9IHRlc3QxLm1hcCgoZGF0YXJlciwgaW5kZXgpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChkYXRhLmxhYmVsc1tpbmRleF0gIT09ICcnKSB7XHJcbiAgICAgICAgICAgICAgICAgIHJldHVybiBkYXRhcmVyO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgIGNvbnN0IHRlc3QyID0gdGVzdC5maWx0ZXIoKG9iaikgPT4gb2JqICE9PSB1bmRlZmluZWQpO1xyXG4gICAgICAgICAgICAgIHJldHVybiB0ZXN0MjtcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICBjb25zdCBmaWxsID0gZmllbGQuY2hhcnRUeXBlID09ICdMaW5lIGNoYXJ0JyA/IGZhbHNlIDogdW5kZWZpbmVkO1xyXG5cclxuICAgICAgICAgICAgY29uc3QgbmV3RGF0YXNldHMgPSBbXHJcbiAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgbGFiZWw6IGRhdGEuZGF0YXNldHNbMF0ubGFiZWwsXHJcbiAgICAgICAgICAgICAgICBkYXRhOiBkYXRhc1swXSxcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogZGF0YS5kYXRhc2V0c1swXS5iYWNrZ3JvdW5kQ29sb3IsXHJcbiAgICAgICAgICAgICAgICBib3JkZXJDb2xvcjogZmllbGQuY2hhcnRUeXBlID09ICdMaW5lIGNoYXJ0JyA/ICdyZ2JhKDI1NSwxODUsMCAsMSApJyA6ICdyZ2IoMjU1LCAyNTUsIDI1NSknLFxyXG4gICAgICAgICAgICAgICAgYm9yZGVyV2lkdGg6IGRhdGEuZGF0YXNldHNbMF0uYm9yZGVyV2lkdGgsXHJcbiAgICAgICAgICAgICAgICBmaWxsOiBmaWxsLFxyXG4gICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgbGFiZWw6IGRhdGEuZGF0YXNldHNbMV0ubGFiZWwsXHJcbiAgICAgICAgICAgICAgICBkYXRhOiBkYXRhc1sxXSxcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogZGF0YS5kYXRhc2V0c1sxXS5iYWNrZ3JvdW5kQ29sb3IsXHJcbiAgICAgICAgICAgICAgICBib3JkZXJDb2xvcjogZmllbGQuY2hhcnRUeXBlID09ICdMaW5lIGNoYXJ0JyA/ICdyZ2JhKDAsMjA0LDEwNiAsMSApJyA6ICdyZ2IoMjU1LCAyNTUsIDI1NSknLFxyXG4gICAgICAgICAgICAgICAgYm9yZGVyV2lkdGg6IGRhdGEuZGF0YXNldHNbMV0uYm9yZGVyV2lkdGgsXHJcbiAgICAgICAgICAgICAgICBmaWxsOiBmaWxsLFxyXG4gICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgbGFiZWw6IGRhdGEuZGF0YXNldHNbMl0ubGFiZWwsXHJcbiAgICAgICAgICAgICAgICBkYXRhOiBkYXRhc1syXSxcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogZGF0YS5kYXRhc2V0c1syXS5iYWNrZ3JvdW5kQ29sb3IsXHJcbiAgICAgICAgICAgICAgICBib3JkZXJDb2xvcjogZmllbGQuY2hhcnRUeXBlID09ICdMaW5lIGNoYXJ0JyA/ICdyZ2JhKDAsMTIwLDIxNSAsMSApJyA6ICdyZ2IoMjU1LCAyNTUsIDI1NSknLFxyXG4gICAgICAgICAgICAgICAgYm9yZGVyV2lkdGg6IGRhdGEuZGF0YXNldHNbMl0uYm9yZGVyV2lkdGgsXHJcbiAgICAgICAgICAgICAgICBmaWxsOiBmaWxsLFxyXG4gICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgbGFiZWw6IGRhdGEuZGF0YXNldHNbM10ubGFiZWwsXHJcbiAgICAgICAgICAgICAgICBkYXRhOiBkYXRhc1szXSxcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogZGF0YS5kYXRhc2V0c1szXS5iYWNrZ3JvdW5kQ29sb3IsXHJcbiAgICAgICAgICAgICAgICBib3JkZXJDb2xvcjogZmllbGQuY2hhcnRUeXBlID09ICdMaW5lIGNoYXJ0JyA/ICdyZ2JhKDIzMSw3Miw4NiAsMSApJyA6ICdyZ2IoMjU1LCAyNTUsIDI1NSknLFxyXG4gICAgICAgICAgICAgICAgYm9yZGVyV2lkdGg6IGRhdGEuZGF0YXNldHNbM10uYm9yZGVyV2lkdGgsXHJcbiAgICAgICAgICAgICAgICBmaWxsOiBmaWxsLFxyXG4gICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgbGFiZWw6IGRhdGEuZGF0YXNldHNbNF0ubGFiZWwsXHJcbiAgICAgICAgICAgICAgICBkYXRhOiBkYXRhc1s0XSxcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogZGF0YS5kYXRhc2V0c1s0XS5iYWNrZ3JvdW5kQ29sb3IsXHJcbiAgICAgICAgICAgICAgICBib3JkZXJDb2xvcjogZmllbGQuY2hhcnRUeXBlID09ICdMaW5lIGNoYXJ0JyA/ICdyZ2JhKDEyNiwxMTUsOTUgLDEgKScgOiAncmdiKDI1NSwgMjU1LCAyNTUpJyxcclxuICAgICAgICAgICAgICAgIGJvcmRlcldpZHRoOiBkYXRhLmRhdGFzZXRzWzRdLmJvcmRlcldpZHRoLFxyXG4gICAgICAgICAgICAgICAgZmlsbDogZmlsbCxcclxuICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGxhYmVsOiBkYXRhLmRhdGFzZXRzWzVdLmxhYmVsLFxyXG4gICAgICAgICAgICAgICAgZGF0YTogZGF0YXNbNV0sXHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IGRhdGEuZGF0YXNldHNbNV0uYmFja2dyb3VuZENvbG9yLFxyXG4gICAgICAgICAgICAgICAgYm9yZGVyQ29sb3I6IGZpZWxkLmNoYXJ0VHlwZSA9PSAnTGluZSBjaGFydCcgPyAncmdiYSgxNzcsNzAsMTk0ICwxICknIDogJ3JnYigyNTUsIDI1NSwgMjU1KScsXHJcbiAgICAgICAgICAgICAgICBib3JkZXJXaWR0aDogZGF0YS5kYXRhc2V0c1s1XS5ib3JkZXJXaWR0aCxcclxuICAgICAgICAgICAgICAgIGZpbGw6IGZpbGwsXHJcbiAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgXTtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IGNoYXJ0VHlwZSA9IFtcclxuICAgICAgICAgICAgICBmaWVsZC5jaGFydFR5cGUgPT0gJ0JhciBjaGFydCcgPyAnYmFyJyA6ICcnLFxyXG4gICAgICAgICAgICAgIGZpZWxkLmNoYXJ0VHlwZSA9PSAnUmV2ZXJzZSBjaGFydCcgPyAnaG9yaXpvbnRhbEJhcicgOiAnJyxcclxuICAgICAgICAgICAgICBmaWVsZC5jaGFydFR5cGUgPT0gJ0xpbmUgY2hhcnQnID8gJ2xpbmUnIDogJycsXHJcbiAgICAgICAgICAgICAgZmllbGQuY2hhcnRUeXBlID09ICdQaWUgY2hhcnQnID8gJ3BpZScgOiAnJyxcclxuICAgICAgICAgICAgICBmaWVsZC5jaGFydFR5cGUgPT0gJ0RvdWdobnV0IGNoYXJ0JyA/ICdkb3VnaG51dCcgOiAnJyxcclxuICAgICAgICAgICAgICBmaWVsZC5jaGFydFR5cGUgPT0gJ0FyZWEgY2hhcnQnID8gJ2xpbmUnIDogJycsXHJcbiAgICAgICAgICAgIF07XHJcblxyXG4gICAgICAgICAgICBjb25zdCB0b1NhdmVDaGFydCA9IG5ldyBDaGFydEpzSW1hZ2UoKTtcclxuICAgICAgICAgICAgdG9TYXZlQ2hhcnQuc2V0Q29uZmlnKHtcclxuICAgICAgICAgICAgICB0eXBlOiBjaGFydFR5cGUuZmlsdGVyKCh0eXBlKSA9PiB0eXBlICE9PSAnJyksXHJcbiAgICAgICAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgICAgICAgbGFiZWxzOiBkYXRhLmxhYmVscy5maWx0ZXIoKGxhYmVsKSA9PiBsYWJlbCAhPT0gJycpLFxyXG4gICAgICAgICAgICAgICAgZGF0YXNldHM6IG5ld0RhdGFzZXRzLmZpbHRlcigoZGF0YXNldCkgPT4gZGF0YXNldC5sYWJlbCAhPT0gJycpLFxyXG4gICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgb3B0aW9uczoge1xyXG4gICAgICAgICAgICAgICAgcmVzcG9uc2l2ZTogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIGxlZ2VuZDoge1xyXG4gICAgICAgICAgICAgICAgICBwb3NpdGlvbjogJ2JvdHRvbScsXHJcbiAgICAgICAgICAgICAgICAgIGxhYmVsczoge1xyXG4gICAgICAgICAgICAgICAgICAgIGJveFdpZHRoOiAzMCxcclxuICAgICAgICAgICAgICAgICAgICBib3hIZWlnaHQ6IDUsXHJcbiAgICAgICAgICAgICAgICAgICAgZm9udEZhbWlseTogJ0NvbWZvcnRhYScsXHJcbiAgICAgICAgICAgICAgICAgICAgZm9udFNpemU6IDEyLFxyXG4gICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIC8vIGRlZmF1bHRGb250RmFtaWx5OiAoQ2hhcnQuZGVmYXVsdHMuZ2xvYmFsLmRlZmF1bHRGb250RmFtaWx5ID0gJ0NvbWZvcnRhYScpLFxyXG4gICAgICAgICAgICAgICAgc2NhbGVzOiB7XHJcbiAgICAgICAgICAgICAgICAgIHlBeGVzOiBbXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgc3RhY2tlZDogZmllbGQuc3RhY2tlZCA9PSB0cnVlID8gdHJ1ZSA6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgdGlja3M6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYmVnaW5BdFplcm86IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnRGYW1pbHk6ICdDb21mb3J0YWEnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250U2l6ZTogMTAsXHJcbiAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICAgIHhBeGVzOiBbXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgc3RhY2tlZDogZmllbGQuc3RhY2tlZCA9PSB0cnVlID8gdHJ1ZSA6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgdGlja3M6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYmVnaW5BdFplcm86IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnRGYW1pbHk6ICdDb21mb3J0YWEnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250U2l6ZTogMTAsXHJcbiAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgdG9TYXZlQ2hhcnQuc2V0Rm9ybWF0KCdwbmcnKS5zZXREZXZpY2VQaXhlbFJhdGlvKDMuMCkuc2V0QmFja2dyb3VuZENvbG9yKCcjZjhmOWZiJyk7XHJcbiAgICAgICAgICAgIGNvbnN0IGltYWdlVXJsID0gdG9TYXZlQ2hhcnQudG9EYXRhVXJsKCk7XHJcbiAgICAgICAgICAgIGltYWdlVXJsLnRoZW4oKGltYWdlKSA9PiB7XHJcbiAgICAgICAgICAgICAgY29uc29sZS5sb2coaW1hZ2UpO1xyXG4gICAgICAgICAgICAgIGltYWdlc0FycmF5LnB1c2goeyBpbWFnZVVybDogaW1hZ2UsIGltYWdlSW5kZXg6IGZpZWxkLmluZGV4IH0pO1xyXG4gICAgICAgICAgICAgIGNvbnNvbGUubG9nKGltYWdlc0FycmF5KTtcclxuICAgICAgICAgICAgICBzZXRJbWFnZXNVcmwoaW1hZ2VzQXJyYXkpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgfSk7XHJcbiAgfSwgW3NlY3Rpb25zXSk7XHJcblxyXG4gIGNvbnNvbGUubG9nKGltYWdlc1VybCk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IHJlZj17c2F2ZUNvbnRhaW5lcn0gY2xhc3NOYW1lPVwicmVsYXRpdmUgZmxleCBqdXN0aWZ5LXN0YXJ0XCI+XHJcbiAgICAgIHtzaXplLndpZHRoIDwgNjgwID8gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBtdC00XCI+XHJcbiAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgIG9uQ2xpY2s9e2FzeW5jIChlKSA9PiB7XHJcbiAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICAgIGNvbnN0IGRvYyA9IChcclxuICAgICAgICAgICAgICAgIDxNeURvY3VtZW50XHJcbiAgICAgICAgICAgICAgICAgIGltYWdlPXtpbWFnZVVybH1cclxuICAgICAgICAgICAgICAgICAgZGF0YT17ZGF0YX1cclxuICAgICAgICAgICAgICAgICAgcGVyaW9kcz17cGVyaW9kc31cclxuICAgICAgICAgICAgICAgICAgcmV2ZW51ZUVsZW1lbnRzPXtyZXZlbnVlRWxlbWVudHN9XHJcbiAgICAgICAgICAgICAgICAgIGNvc3RzRWxlbWVudHM9e2Nvc3RzRWxlbWVudHN9XHJcbiAgICAgICAgICAgICAgICAgIHRheD17dGF4fVxyXG4gICAgICAgICAgICAgICAgICB0b3RhbFJldmVudWU9e3RvdGFsUmV2ZW51ZX1cclxuICAgICAgICAgICAgICAgICAgbW9udGhseVJldmVudWU9e21vbnRobHlSZXZlbnVlfVxyXG4gICAgICAgICAgICAgICAgICB0b3RhbENvc3RzPXt0b3RhbENvc3RzfVxyXG4gICAgICAgICAgICAgICAgICBtb250aGx5Q29zdHM9e21vbnRobHlDb3N0c31cclxuICAgICAgICAgICAgICAgICAgZ3Jvc3NQcm9maXQ9e2dyb3NzUHJvZml0fVxyXG4gICAgICAgICAgICAgICAgICBuZXRQcm9maXQ9e25ldFByb2ZpdH1cclxuICAgICAgICAgICAgICAgICAgc3RhcnREYXRlPXtzdGFydERhdGV9XHJcbiAgICAgICAgICAgICAgICAgIGVuZERhdGU9e2VuZERhdGV9XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgY29uc3QgYXNQZGYgPSBwZGYoW10pOyAvLyB7fSBpcyBpbXBvcnRhbnQsIHRocm93cyB3aXRob3V0IGFuIGFyZ3VtZW50XHJcbiAgICAgICAgICAgICAgYXNQZGYudXBkYXRlQ29udGFpbmVyKGRvYyk7XHJcbiAgICAgICAgICAgICAgY29uc3QgYmxvYiA9IGF3YWl0IGFzUGRmLnRvQmxvYigpO1xyXG4gICAgICAgICAgICAgIHNhdmVBcyhibG9iLCBgJHtSb3V0ZXIucXVlcnkucHJvamVjdH0vY2FzaC1mbG93LnBkZmApO1xyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICBzcmM9XCIvbW9iaWxlLW5hdmJhci9wZGYuc3ZnXCJcclxuICAgICAgICAgICAgaGVpZ2h0PXszMH1cclxuICAgICAgICAgICAgd2lkdGg9ezMwfVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgKSA6IChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlbGF0aXZlIHctZnVsbCBmbGV4IGp1c3RpZnktZW5kIGl0ZW1zLWNlbnRlclwiPlxyXG4gICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICByZWY9e2Ryb3Bkb3duQnV0dG9ufVxyXG4gICAgICAgICAgICBvbkNsaWNrPXtvblNhdmVEcm9wZG93blNob3d9XHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT17YGhvdmVyOmJnLXByaW1hcnkgaG92ZXI6dGV4dC13aGl0ZSBkYXJrOmhvdmVyOmJnLXByaW1hcnlkYXJrIGRhcms6aG92ZXI6dGV4dC1iYWNrZ3JvdW5kIGZvY3VzOm91dGxpbmUtbm9uZSBib3JkZXIgYm9yZGVyLXByaW1hcnkgdGV4dC1wcmltYXJ5IHRleHQtc20gZm9udC1saWdodCBweS0yIHB4LTggcm91bmRlZC0yeGwgbXQtMiBkYXJrOnRleHQtcHJpbWFyeWRhcmsgZGFyazpib3JkZXItcHJpbWFyeWRhcmsgJHtcclxuICAgICAgICAgICAgICBkcm9wZG93bkJ1dHRvbkNvbG9ySGVscGVyID8gJ2JnLXByaW1hcnkgdGV4dC1iYWNrZ3JvdW5kIGRhcms6YmctcHJpbWFyeWRhcmsgZGFyazp0ZXh0LWJhY2tncm91bmQnIDogJydcclxuICAgICAgICAgICAgfWB9XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIFNhdmUgbXkgd29ya1xyXG4gICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICA8ZGl2IHJlZj17ZHJvcGRvd25Db250YWluZXJ9IGNsYXNzTmFtZT1cImFic29sdXRlIGJnLXdoaXRlIHJvdW5kZWQtMnhsIHNoYWRvdy14bCBwLTYgdG9wLTE0IHotNTAgaW52aXNpYmxlIG9wYWNpdHktMFwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktc3RhcnRcIj5cclxuICAgICAgICAgICAgICA8aW1nIHNyYz1cIi9tb2JpbGUtbmF2YmFyL3N1Y2Nlc3Muc3ZnXCIgaGVpZ2h0PXsyNn0gd2lkdGg9ezI2fSAvPlxyXG4gICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtbGcgbWwtMlwiPlNob3cgdGhlIHdvcmxkIHlvdXIgd29yayE8L3A+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInB4LTYgcHktNCBiZy1iYWNrZ3JvdW5kIHJvdW5kZWQtMnhsIG10LTIgcHItNlwiPlxyXG4gICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJmbGV4XCI+U2F2ZSBhcyBQREY6PC9wPlxyXG4gICAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXthc3luYyAoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBkb2MgPSA8TXlEb2N1bWVudCBpbWFnZXNVcmw9e2ltYWdlc1VybH0gc2VjdGlvbnM9e3NlY3Rpb25zfSAvPjtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBhc1BkZiA9IHBkZihbXSk7XHJcbiAgICAgICAgICAgICAgICAgICAgYXNQZGYudXBkYXRlQ29udGFpbmVyKGRvYyk7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgYmxvYiA9IGF3YWl0IGFzUGRmLnRvQmxvYigpO1xyXG4gICAgICAgICAgICAgICAgICAgIHNhdmVBcyhibG9iLCBgJHtSb3V0ZXIucXVlcnkucHJvamVjdH0vY29tcGV0aXRvcnMtYW5hbHlzaXMucGRmYCk7XHJcbiAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgIHNyYz1cIi9tb2JpbGUtbmF2YmFyL3BkZi5zdmdcIlxyXG4gICAgICAgICAgICAgICAgICBoZWlnaHQ9ezMwfVxyXG4gICAgICAgICAgICAgICAgICB3aWR0aD17MzB9XHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm10LTIgY3Vyc29yLXBvaW50ZXJcIlxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbCBqdXN0aWZ5LXN0YXJ0IGl0ZW1zLWNlbnRlciBtdC00XCI+XHJcbiAgICAgICAgICAgICAgICA8cD5TaGFyZSB5b3VyIGNvbXBldGl0b3JzIGFuYWx5c2lzIHdpdGggdGhpcyBwdWJsaWMgbGluazo8L3A+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbCBmbGV4IG10LTJcIj5cclxuICAgICAgICAgICAgICAgICAgPGlucHV0IHZhbHVlPVwid3d3LnByb2plY3QuY29tXCIgY2xhc3NOYW1lPVwiYmctbGlua0JhY2tncm91bmQgdGV4dC1zbSBweC0yIHB5LTEgZGFyazp0ZXh0LXByaW1hcnlkYXJrXCIgLz5cclxuICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCIvbW9iaWxlLW5hdmJhci9mb3JlaWduLnN2Z1wiIGhlaWdodD17Mjh9IHdpZHRoPXsyOH0gLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICApfVxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFJlYWN0UERGRG9jdW1lbnQ7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=