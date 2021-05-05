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

                  if (res.startsWith('<p>') && !res.includes('<strong>') && !res.includes('<em>') && !res.includes('<s>')) {
                    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_9__["Text"], {
                      style: {
                        fontSize: 12
                      },
                      children: res.replace(/(<([^>]+)>)/gi, '')
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 261,
                      columnNumber: 34
                    }, _this);
                  } // <p>STRONG</p>
                  else if (res.startsWith('<p>') && res.includes('<strong>') && !res.includes('<em>') && !res.includes('<s>')) {
                      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_9__["Text"], {
                        style: {
                          fontSize: 12,
                          fontFamily: 'Montserrat-SemiBold'
                        },
                        children: res.replace(/(<([^>]+)>)/gi, '')
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 266,
                        columnNumber: 29
                      }, _this);
                    } // <p>EM</p>
                    else if (res.startsWith('<p>') && !res.includes('<strong>') && res.includes('<em>') && !res.includes('<s>')) {
                        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_9__["Text"], {
                          style: {
                            fontSize: 12,
                            fontFamily: 'Montserrat-Italic'
                          },
                          children: res.replace(/(<([^>]+)>)/gi, '')
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 271,
                          columnNumber: 34
                        }, _this);
                      } // <p>EM + STRONG</p>
                      else if (res.startsWith('<p>') && res.includes('<strong>') && res.includes('<em>') && !res.includes('<s>')) {
                          return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_9__["Text"], {
                            style: {
                              fontSize: 12,
                              fontFamily: 'Montserrat-SemiBoldItalic'
                            },
                            children: res.replace(/(<([^>]+)>)/gi, '')
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 276,
                            columnNumber: 29
                          }, _this);
                        } // <p>S</p>
                        else if (res.startsWith('<p>') && res.includes('<s>') && !res.includes('<strong>') && !res.includes('<em>')) {
                            return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_9__["Text"], {
                              style: {
                                fontSize: 12,
                                textDecoration: 'line-through'
                              },
                              children: res.replace(/(<([^>]+)>)/gi, '')
                            }, void 0, false, {
                              fileName: _jsxFileName,
                              lineNumber: 283,
                              columnNumber: 34
                            }, _this);
                          } // <p>S + EM</p>
                          else if (res.startsWith('<p>') && res.includes('<s>') && res.includes('<em>') && !res.includes('<strong>')) {
                              return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_9__["Text"], {
                                style: {
                                  fontSize: 12,
                                  fontFamily: 'Montserrat-Italic',
                                  textDecoration: 'line-through'
                                },
                                children: res.replace(/(<([^>]+)>)/gi, '')
                              }, void 0, false, {
                                fileName: _jsxFileName,
                                lineNumber: 288,
                                columnNumber: 29
                              }, _this);
                            } // <p>S + EM + STRONG</p>
                            else if (res.startsWith('<p>') && res.includes('<s>') && res.includes('<em>') && res.includes('<strong>')) {
                                return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_9__["Text"], {
                                  style: {
                                    fontSize: 12,
                                    fontFamily: 'Montserrat-SemiBoldItalic',
                                    textDecoration: 'line-through'
                                  },
                                  children: res.replace(/(<([^>]+)>)/gi, '')
                                }, void 0, false, {
                                  fileName: _jsxFileName,
                                  lineNumber: 296,
                                  columnNumber: 29
                                }, _this);
                              } // <p>U</p>
                              else if (res.startsWith('<p>') && !res.includes('<u>') && !res.includes('<s>') && !res.includes('<strong>') && !res.includes('<em>')) {
                                  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_9__["Text"], {
                                    style: {
                                      fontSize: 12,
                                      textDecoration: 'underline'
                                    },
                                    children: res.replace(/(<([^>]+)>)/gi, '')
                                  }, void 0, false, {
                                    fileName: _jsxFileName,
                                    lineNumber: 309,
                                    columnNumber: 34
                                  }, _this);
                                } // <p>U + EM</p>
                                // END --> <p></p>
                                // <h2></h2>
                                else if (res.startsWith('<h2>')) {
                                    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_9__["Text"], {
                                      style: {
                                        fontSize: 14
                                      },
                                      children: res.replace(/(<([^>]+)>)/gi, '')
                                    }, void 0, false, {
                                      fileName: _jsxFileName,
                                      lineNumber: 315,
                                      columnNumber: 34
                                    }, _this);
                                  } // <h1></h1>
                                  else if (res.startsWith('<h1>')) {
                                      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_9__["Text"], {
                                        style: {
                                          fontSize: 16
                                        },
                                        children: res.replace(/(<([^>]+)>)/gi, '')
                                      }, void 0, false, {
                                        fileName: _jsxFileName,
                                        lineNumber: 319,
                                        columnNumber: 34
                                      }, _this);
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
                      lineNumber: 806,
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
        lineNumber: 802,
        columnNumber: 11
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 801,
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
        lineNumber: 835,
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
            lineNumber: 846,
            columnNumber: 15
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("p", {
            className: "text-lg ml-2",
            children: "Show the world your work!"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 847,
            columnNumber: 15
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 845,
          columnNumber: 13
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("div", {
          className: "px-6 py-4 bg-background rounded-2xl mt-2 pr-6",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("div", {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("p", {
              className: "flex",
              children: "Save as PDF:"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 851,
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
                            lineNumber: 855,
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
              lineNumber: 852,
              columnNumber: 17
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 850,
            columnNumber: 15
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("div", {
            className: "w-full justify-start items-center mt-4",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("p", {
              children: "Share your competitors analysis with this public link:"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 868,
              columnNumber: 17
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("div", {
              className: "w-full flex mt-2",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("input", {
                value: "www.project.com",
                className: "bg-linkBackground text-sm px-2 py-1 dark:text-primarydark"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 870,
                columnNumber: 19
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("img", {
                src: "/mobile-navbar/foreign.svg",
                height: 28,
                width: 28
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 871,
                columnNumber: 19
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 869,
              columnNumber: 17
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 867,
            columnNumber: 15
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 849,
          columnNumber: 13
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 844,
        columnNumber: 11
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 834,
      columnNumber: 9
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 799,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9kYXNoYm9hcmQvc3RhcnR1cC9wcm9qZWN0L2J1c2luZXNzLWFwcC9SZWFjdFBERkRvY3VtZW50LmpzIl0sIm5hbWVzIjpbIkZvbnQiLCJyZWdpc3RlciIsInNyYyIsImZhbWlseSIsInN0eWxlcyIsIlN0eWxlU2hlZXQiLCJjcmVhdGUiLCJob21lUGFnZSIsInBhZGRpbmciLCJmb250RmFtaWx5IiwiYmFja2dyb3VuZENvbG9yIiwiY29sb3IiLCJtYWluVGl0bGUiLCJmb250U2l6ZSIsInRleHRBbGlnbiIsInRhYmxlIiwiZGlzcGxheSIsIndpZHRoIiwibWFyZ2luVG9wIiwidGFibGVIZWFkUm93IiwiZmxleERpcmVjdGlvbiIsImJvcmRlclRvcExlZnRSYWRpdXMiLCJib3JkZXJUb3BSaWdodFJhZGl1cyIsInRhYmxlUm93IiwidGFibGVDb2wiLCJ0YWJsZUhlYWRDZWxsIiwidGFibGVDZWxsIiwiYm9yZGVyTGVmdCIsInBhZGRpbmdMZWZ0IiwiTXlEb2N1bWVudCIsImltYWdlc1VybCIsInNlY3Rpb25zIiwiY29uc29sZSIsImxvZyIsIm1hcCIsInNlY3Rpb24iLCJtYXJnaW5Cb3R0b20iLCJ0aXRsZSIsImZpZWxkcyIsImZpZWxkIiwidHlwZSIsImhlYWRSb3dzIiwiaGVhZFJvdyIsImhlYWRSb3dzUXVhbnRpdHkiLCJsZW5ndGgiLCJyb3dzIiwicm93Iiwicm93TmFtZSIsIkJvZHlSb3dzUXVhbnRpdHkiLCJkb2MiLCJpbWFnZUluZGV4IiwiaW5kZXgiLCJpbWFnZVVybCIsImZvcm1hdHRlZFRleHQiLCIkIiwiYm9keSIsImFwcGVuZCIsImh0bWwiLCJyZXMiLCJ0b1N0cmluZyIsImluY2x1ZGVzIiwic3RhcnRzV2l0aCIsInJlcGxhY2UiLCJ0ZXh0RGVjb3JhdGlvbiIsIlJlYWN0UERGRG9jdW1lbnQiLCJzaXplIiwidXNlV2luZG93U2l6ZSIsInNhdmVDb250YWluZXIiLCJ1c2VSZWYiLCJkcm9wZG93bkJ1dHRvbiIsImRyb3Bkb3duQ29udGFpbmVyIiwidXNlU3RhdGUiLCJkcm9wZG93bkJ1dHRvbkNvbG9ySGVscGVyIiwic2V0RHJvcGRvd25CdXR0b25Db2xvckhlbHBlciIsImRyb3Bkb3duQ29udGFpbmVySGVscGVyIiwic2V0RHJvcGRvd25Db250YWluZXJIZWxwZXIiLCJvblNhdmVEcm9wZG93blNob3ciLCJnc2FwIiwidG8iLCJjdXJyZW50IiwiYXV0b0FscGhhIiwiZHVyYXRpb24iLCJlYXNlIiwiTGluZWFyIiwic2V0SW1hZ2VzVXJsIiwidXNlRWZmZWN0IiwiaW1hZ2VzQXJyYXkiLCJjb2xvcnMiLCJjaGFydFR5cGUiLCJjb2xvcnMxIiwiY29sb3JzMiIsImNvbG9yczMiLCJjb2xvcnM0IiwiY29sb3JzNSIsImRhdGEiLCJsYWJlbHMiLCJsYWJlbCIsImRhdGFzZXRzIiwiZGF0YXNldDFMYWJlbCIsImRhdGFzZXQxIiwiYm9yZGVyV2lkdGgiLCJkYXRhc2V0MkxhYmVsIiwiZGF0YXNldDIiLCJkYXRhc2V0M0xhYmVsIiwiZGF0YXNldDMiLCJkYXRhc2V0NExhYmVsIiwiZGF0YXNldDQiLCJkYXRhc2V0NUxhYmVsIiwiZGF0YXNldDUiLCJkYXRhc2V0NkxhYmVsIiwiZGF0YXNldDYiLCJkYXRhcyIsImRhdGFzZXQiLCJ0ZXN0MSIsImRhdGFzZXMiLCJ1bmRlZmluZWQiLCJ0ZXN0IiwiZGF0YXJlciIsInRlc3QyIiwiZmlsdGVyIiwib2JqIiwiZmlsbCIsIm5ld0RhdGFzZXRzIiwiYm9yZGVyQ29sb3IiLCJ0b1NhdmVDaGFydCIsIkNoYXJ0SnNJbWFnZSIsInNldENvbmZpZyIsIm9wdGlvbnMiLCJyZXNwb25zaXZlIiwibGVnZW5kIiwicG9zaXRpb24iLCJib3hXaWR0aCIsImJveEhlaWdodCIsInNjYWxlcyIsInlBeGVzIiwic3RhY2tlZCIsInRpY2tzIiwiYmVnaW5BdFplcm8iLCJ4QXhlcyIsInNldEZvcm1hdCIsInNldERldmljZVBpeGVsUmF0aW8iLCJzZXRCYWNrZ3JvdW5kQ29sb3IiLCJ0b0RhdGFVcmwiLCJ0aGVuIiwiaW1hZ2UiLCJwdXNoIiwiZSIsInByZXZlbnREZWZhdWx0IiwicGVyaW9kcyIsInJldmVudWVFbGVtZW50cyIsImNvc3RzRWxlbWVudHMiLCJ0YXgiLCJ0b3RhbFJldmVudWUiLCJtb250aGx5UmV2ZW51ZSIsInRvdGFsQ29zdHMiLCJtb250aGx5Q29zdHMiLCJncm9zc1Byb2ZpdCIsIm5ldFByb2ZpdCIsInN0YXJ0RGF0ZSIsImVuZERhdGUiLCJhc1BkZiIsInBkZiIsInVwZGF0ZUNvbnRhaW5lciIsInRvQmxvYiIsImJsb2IiLCJzYXZlQXMiLCJSb3V0ZXIiLCJxdWVyeSIsInByb2plY3QiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUFBLHdEQUFJLENBQUNDLFFBQUwsQ0FBYztBQUFFQyxLQUFHLEVBQUUsb0JBQVA7QUFBNkJDLFFBQU0sRUFBRTtBQUFyQyxDQUFkO0FBQ0FILHdEQUFJLENBQUNDLFFBQUwsQ0FBYztBQUFFQyxLQUFHLEVBQUUsc0JBQVA7QUFBK0JDLFFBQU0sRUFBRTtBQUF2QyxDQUFkO0FBQ0FILHdEQUFJLENBQUNDLFFBQUwsQ0FBYztBQUFFQyxLQUFHLEVBQUUsMkJBQVA7QUFBb0NDLFFBQU0sRUFBRTtBQUE1QyxDQUFkO0FBQ0FILHdEQUFJLENBQUNDLFFBQUwsQ0FBYztBQUFFQyxLQUFHLEVBQUUsK0JBQVA7QUFBd0NDLFFBQU0sRUFBRTtBQUFoRCxDQUFkO0FBQ0FILHdEQUFJLENBQUNDLFFBQUwsQ0FBYztBQUFFQyxLQUFHLEVBQUUsZ0NBQVA7QUFBeUNDLFFBQU0sRUFBRTtBQUFqRCxDQUFkO0FBQ0FILHdEQUFJLENBQUNDLFFBQUwsQ0FBYztBQUFFQyxLQUFHLEVBQUUsc0NBQVA7QUFBK0NDLFFBQU0sRUFBRTtBQUF2RCxDQUFkO0FBQ0FILHdEQUFJLENBQUNDLFFBQUwsQ0FB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QUFBQTtBQW5DSjtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUFrRkQsQ0FuaUJEOztHQUFNeEcsZ0I7VUFDU0UsbUU7OztNQURURixnQjtBQXFpQlNBLCtFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2Rhc2hib2FyZC9wcm9qZWN0cy9bcHJvamVjdF0vYnVzaW5lc3MtcGxhbi5lMzYzYzM0MjRkYTU2YWJiODIzMS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QsIHVzZVJlZiB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgc2F2ZUFzIH0gZnJvbSAnZmlsZS1zYXZlcic7XHJcbmltcG9ydCBDaGFydEpzSW1hZ2UgZnJvbSAnY2hhcnRqcy10by1pbWFnZSc7XHJcbmltcG9ydCB7IGZvcm1hdCB9IGZyb20gJ2RhdGUtZm5zJztcclxuaW1wb3J0IGdzYXAsIHsgTGluZWFyIH0gZnJvbSAnZ3NhcCc7XHJcbmltcG9ydCB7IEZvbnQsIHBkZiwgUGFnZSwgVGV4dCwgVmlldywgSW1hZ2UsIERvY3VtZW50LCBTdHlsZVNoZWV0LCBQREZWaWV3ZXIsIFBERkRvd25sb2FkTGluayB9IGZyb20gJ0ByZWFjdC1wZGYvcmVuZGVyZXInO1xyXG5pbXBvcnQgUm91dGVyIGZyb20gJ25leHQvcm91dGVyJztcclxuaW1wb3J0IHNwbGl0SHRtbCBmcm9tICdzcGxpdC1odG1sJztcclxuaW1wb3J0ICQgZnJvbSAnanF1ZXJ5JztcclxuaW1wb3J0IHsgdXNlV2luZG93U2l6ZSB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL3V0aWxzL3VzZVdpbmRvd1NpemUnO1xyXG5cclxuRm9udC5yZWdpc3Rlcih7IHNyYzogJy9mb250cy9wb3BwaW5zLnR0ZicsIGZhbWlseTogJ1BvcHBpbnMnIH0pO1xyXG5Gb250LnJlZ2lzdGVyKHsgc3JjOiAnL2ZvbnRzL2NvbWZvcnRhYS50dGYnLCBmYW1pbHk6ICdDb21mb3J0YWEnIH0pO1xyXG5Gb250LnJlZ2lzdGVyKHsgc3JjOiAnL2ZvbnRzL2NvbWZvcnRhYS1Cb2xkLnR0ZicsIGZhbWlseTogJ0NvbWZvcnRhYS1Cb2xkJyB9KTtcclxuRm9udC5yZWdpc3Rlcih7IHNyYzogJy9mb250cy9Nb250c2VycmF0LVJlZ3VsYXIudHRmJywgZmFtaWx5OiAnTW9udHNlcnJhdC1SZWd1bGFyJyB9KTtcclxuRm9udC5yZWdpc3Rlcih7IHNyYzogJy9mb250cy9Nb250c2VycmF0LVNlbWlCb2xkLnR0ZicsIGZhbWlseTogJ01vbnRzZXJyYXQtU2VtaUJvbGQnIH0pO1xyXG5Gb250LnJlZ2lzdGVyKHsgc3JjOiAnL2ZvbnRzL01vbnRzZXJyYXQtU2VtaUJvbGRJdGFsaWMudHRmJywgZmFtaWx5OiAnTW9udHNlcnJhdC1TZW1pQm9sZEl0YWxpYycgfSk7XHJcbkZvbnQucmVnaXN0ZXIoeyBzcmM6ICcvZm9udHMvTW9udHNlcnJhdC1JdGFsaWMudHRmJywgZmFtaWx5OiAnTW9udHNlcnJhdC1JdGFsaWMnIH0pO1xyXG5cclxuY29uc3Qgc3R5bGVzID0gU3R5bGVTaGVldC5jcmVhdGUoe1xyXG4gIGhvbWVQYWdlOiB7XHJcbiAgICBwYWRkaW5nOiAzNixcclxuICAgIC8vIGZvbnRGYW1pbHk6ICdDb21mb3J0YWEnLFxyXG4gICAgZm9udEZhbWlseTogJ01vbnRzZXJyYXQtUmVndWxhcicsXHJcbiAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjZjhmOWZiJyxcclxuICAgIGNvbG9yOiAnIzBhMTIzMCcsXHJcbiAgfSxcclxuICBtYWluVGl0bGU6IHtcclxuICAgIGZvbnRTaXplOiAyMixcclxuICAgIGNvbG9yOiAnIzBhMTIzMCcsXHJcbiAgICB0ZXh0QWxpZ246ICdjZW50ZXInLFxyXG4gIH0sXHJcbiAgdGFibGU6IHsgZGlzcGxheTogJ3RhYmxlJywgd2lkdGg6ICcxMDAlJywgbWFyZ2luVG9wOiAxNiB9LFxyXG4gIHRhYmxlSGVhZFJvdzogeyBmbGV4RGlyZWN0aW9uOiAncm93JywgYmFja2dyb3VuZENvbG9yOiAnIzZDNjNGRicsIGNvbG9yOiAnI2Y4ZjlmYicsIGJvcmRlclRvcExlZnRSYWRpdXM6IDgsIGJvcmRlclRvcFJpZ2h0UmFkaXVzOiA4IH0sXHJcbiAgdGFibGVSb3c6IHsgZmxleERpcmVjdGlvbjogJ3JvdycgfSxcclxuICB0YWJsZUNvbDogeyBwYWRkaW5nOiA4IH0sXHJcbiAgdGFibGVIZWFkQ2VsbDogeyBtYXJnaW5Ub3A6IDUsIGZvbnRTaXplOiAxMCB9LFxyXG4gIHRhYmxlQ2VsbDogeyBtYXJnaW5Ub3A6IDUsIGZvbnRTaXplOiA5LCBib3JkZXJMZWZ0OiAnMXB4IHNvbGlkICMwYTEyMzAnLCBwYWRkaW5nTGVmdDogNCB9LFxyXG59KTtcclxuXHJcbmNvbnN0IE15RG9jdW1lbnQgPSAoeyBpbWFnZXNVcmwsIHNlY3Rpb25zIH0pID0+IHtcclxuICBjb25zb2xlLmxvZygnUERGIFNlY3Rpb25zIC0tPiAnLCBzZWN0aW9ucyk7XHJcbiAgY29uc29sZS5sb2coJ1BERiBJbWFnZXNVcmwgLS0+ICcsIGltYWdlc1VybCk7XHJcbiAgcmV0dXJuIChcclxuICAgIDxEb2N1bWVudCBzY2FsZT17OTYgLyA3Mn0gcmVuZGVyTW9kZT1cInN2Z1wiPlxyXG4gICAgICA8UGFnZSBzaXplPVwiQTRcIiBzdHlsZT17c3R5bGVzLmhvbWVQYWdlfT5cclxuICAgICAgICA8Vmlldz5cclxuICAgICAgICAgIDxUZXh0IHN0eWxlPXtzdHlsZXMubWFpblRpdGxlfT5CdXNpbmVzcyBwbGFuPC9UZXh0PlxyXG4gICAgICAgIDwvVmlldz5cclxuICAgICAgPC9QYWdlPlxyXG4gICAgICB7c2VjdGlvbnMubWFwKChzZWN0aW9uKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgIDxQYWdlIHNpemU9XCJBNFwiIHN0eWxlPXtzdHlsZXMuaG9tZVBhZ2V9PlxyXG4gICAgICAgICAgICA8VmlldyBzdHlsZT17eyBtYXJnaW5Cb3R0b206IDggfX0+XHJcbiAgICAgICAgICAgICAgPFRleHQgc3R5bGU9e3sgZm9udFNpemU6IDE4IH19PntzZWN0aW9uLnRpdGxlfTwvVGV4dD5cclxuICAgICAgICAgICAgPC9WaWV3PlxyXG4gICAgICAgICAgICB7c2VjdGlvbi5maWVsZHMubWFwKChmaWVsZCkgPT4ge1xyXG4gICAgICAgICAgICAgIGNvbnNvbGUubG9nKGZpZWxkKTtcclxuICAgICAgICAgICAgICBzd2l0Y2ggKGZpZWxkLnR5cGUpIHtcclxuICAgICAgICAgICAgICAgIGNhc2UgJ3RhYmxlJzpcclxuICAgICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICBmaWVsZC50eXBlID09ICd0YWJsZScgJiYgKFxyXG4gICAgICAgICAgICAgICAgICAgICAgPFZpZXcgc3R5bGU9e3N0eWxlcy50YWJsZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHsvKiBUYWJsZUhlYWRlciAqL31cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFZpZXcgc3R5bGU9e3N0eWxlcy50YWJsZUhlYWRSb3d9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHtmaWVsZC5oZWFkUm93cy5tYXAoKGhlYWRSb3cpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGhlYWRSb3dzUXVhbnRpdHkgPSBmaWVsZC5oZWFkUm93cy5sZW5ndGg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzd2l0Y2ggKGhlYWRSb3dzUXVhbnRpdHkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAxOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VmlldyBzdHlsZT17eyB3aWR0aDogJzEwMCUnLCBwYWRkaW5nOiA4IH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGV4dCBzdHlsZT17c3R5bGVzLnRhYmxlSGVhZENlbGx9PntoZWFkUm93fTwvVGV4dD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVmlldz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDI6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxWaWV3IHN0eWxlPXt7IHdpZHRoOiAnNTAlJywgcGFkZGluZzogOCB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRleHQgc3R5bGU9e3N0eWxlcy50YWJsZUhlYWRDZWxsfT57aGVhZFJvd308L1RleHQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1ZpZXc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAzOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VmlldyBzdHlsZT17eyB3aWR0aDogJzMzLjMzJScsIHBhZGRpbmc6IDggfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0IHN0eWxlPXtzdHlsZXMudGFibGVIZWFkQ2VsbH0+e2hlYWRSb3d9PC9UZXh0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9WaWV3PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgNDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFZpZXcgc3R5bGU9e3sgd2lkdGg6ICcyNSUnLCBwYWRkaW5nOiA4IH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGV4dCBzdHlsZT17c3R5bGVzLnRhYmxlSGVhZENlbGx9PntoZWFkUm93fTwvVGV4dD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVmlldz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDU6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxWaWV3IHN0eWxlPXt7IHdpZHRoOiAnMjAlJywgcGFkZGluZzogOCB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRleHQgc3R5bGU9e3N0eWxlcy50YWJsZUhlYWRDZWxsfT57aGVhZFJvd308L1RleHQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1ZpZXc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSA2OlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VmlldyBzdHlsZT17eyB3aWR0aDogJzE2LjY2JScsIHBhZGRpbmc6IDggfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0IHN0eWxlPXtzdHlsZXMudGFibGVIZWFkQ2VsbH0+e2hlYWRSb3d9PC9UZXh0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9WaWV3PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgNzpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFZpZXcgc3R5bGU9e3sgd2lkdGg6ICcxNC4yOCUnLCBwYWRkaW5nOiA4IH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGV4dCBzdHlsZT17c3R5bGVzLnRhYmxlSGVhZENlbGx9PntoZWFkUm93fTwvVGV4dD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVmlldz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDg6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxWaWV3IHN0eWxlPXt7IHdpZHRoOiAnMTIuNSUnLCBwYWRkaW5nOiA4IH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGV4dCBzdHlsZT17c3R5bGVzLnRhYmxlSGVhZENlbGx9PntoZWFkUm93fTwvVGV4dD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVmlldz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDk6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxWaWV3IHN0eWxlPXt7IHdpZHRoOiAnMTEuMTElJywgcGFkZGluZzogOCB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRleHQgc3R5bGU9e3N0eWxlcy50YWJsZUhlYWRDZWxsfT57aGVhZFJvd308L1RleHQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1ZpZXc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAxMDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFZpZXcgc3R5bGU9e3sgd2lkdGg6ICcxMCUnLCBwYWRkaW5nOiA4IH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGV4dCBzdHlsZT17c3R5bGVzLnRhYmxlSGVhZENlbGx9PntoZWFkUm93fTwvVGV4dD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVmlldz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDExOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VmlldyBzdHlsZT17eyB3aWR0aDogJzkuMDklJywgcGFkZGluZzogOCB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRleHQgc3R5bGU9e3N0eWxlcy50YWJsZUhlYWRDZWxsfT57aGVhZFJvd308L1RleHQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1ZpZXc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAxMjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFZpZXcgc3R5bGU9e3sgd2lkdGg6ICc4LjMzJScsIHBhZGRpbmc6IDggfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0IHN0eWxlPXtzdHlsZXMudGFibGVIZWFkQ2VsbH0+e2hlYWRSb3d9PC9UZXh0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9WaWV3PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvVmlldz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgey8qIFRhYmxlQm9keSAqL31cclxuICAgICAgICAgICAgICAgICAgICAgICAge2ZpZWxkLnJvd3MubWFwKChyb3cpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFZpZXcgc3R5bGU9e3N0eWxlcy50YWJsZVJvd30+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtyb3cucm93Lm1hcCgocm93TmFtZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IEJvZHlSb3dzUXVhbnRpdHkgPSBmaWVsZC5yb3dzLmxlbmd0aDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzd2l0Y2ggKEJvZHlSb3dzUXVhbnRpdHkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgMTpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VmlldyBzdHlsZT17eyB3aWR0aDogJzEwMCUnLCBwYWRkaW5nOiA4IH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRleHQgc3R5bGU9e3N0eWxlcy50YWJsZUNlbGx9Pntyb3dOYW1lfTwvVGV4dD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1ZpZXc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDI6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFZpZXcgc3R5bGU9e3sgd2lkdGg6ICc1MCUnLCBwYWRkaW5nOiA4IH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRleHQgc3R5bGU9e3N0eWxlcy50YWJsZUNlbGx9Pntyb3dOYW1lfTwvVGV4dD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1ZpZXc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDM6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFZpZXcgc3R5bGU9e3sgd2lkdGg6ICczMy4zMyUnLCBwYWRkaW5nOiA4IH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRleHQgc3R5bGU9e3N0eWxlcy50YWJsZUNlbGx9Pntyb3dOYW1lfTwvVGV4dD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1ZpZXc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDQ6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFZpZXcgc3R5bGU9e3sgd2lkdGg6ICcyNSUnLCBwYWRkaW5nOiA4IH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRleHQgc3R5bGU9e3N0eWxlcy50YWJsZUNlbGx9Pntyb3dOYW1lfTwvVGV4dD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1ZpZXc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDU6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFZpZXcgc3R5bGU9e3sgd2lkdGg6ICcyMCUnLCBwYWRkaW5nOiA4IH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRleHQgc3R5bGU9e3N0eWxlcy50YWJsZUNlbGx9Pntyb3dOYW1lfTwvVGV4dD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1ZpZXc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDY6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFZpZXcgc3R5bGU9e3sgd2lkdGg6ICcxNi42NiUnLCBwYWRkaW5nOiA4IH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRleHQgc3R5bGU9e3N0eWxlcy50YWJsZUNlbGx9Pntyb3dOYW1lfTwvVGV4dD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1ZpZXc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDc6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFZpZXcgc3R5bGU9e3sgd2lkdGg6ICcxNC4yOCUnLCBwYWRkaW5nOiA4IH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRleHQgc3R5bGU9e3N0eWxlcy50YWJsZUNlbGx9Pntyb3dOYW1lfTwvVGV4dD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1ZpZXc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDg6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFZpZXcgc3R5bGU9e3sgd2lkdGg6ICcxMi41JScsIHBhZGRpbmc6IDggfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGV4dCBzdHlsZT17c3R5bGVzLnRhYmxlQ2VsbH0+e3Jvd05hbWV9PC9UZXh0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVmlldz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgOTpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VmlldyBzdHlsZT17eyB3aWR0aDogJzExLjExJScsIHBhZGRpbmc6IDggfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGV4dCBzdHlsZT17c3R5bGVzLnRhYmxlQ2VsbH0+e3Jvd05hbWV9PC9UZXh0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVmlldz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgMTA6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFZpZXcgc3R5bGU9e3sgd2lkdGg6ICcxMCUnLCBwYWRkaW5nOiA4IH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRleHQgc3R5bGU9e3N0eWxlcy50YWJsZUNlbGx9Pntyb3dOYW1lfTwvVGV4dD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1ZpZXc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDExOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxWaWV3IHN0eWxlPXt7IHdpZHRoOiAnOS4wOSUnLCBwYWRkaW5nOiA4IH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRleHQgc3R5bGU9e3N0eWxlcy50YWJsZUNlbGx9Pntyb3dOYW1lfTwvVGV4dD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1ZpZXc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDEyOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxWaWV3IHN0eWxlPXt7IHdpZHRoOiAnOC4zMyUnLCBwYWRkaW5nOiA4IH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRleHQgc3R5bGU9e3N0eWxlcy50YWJsZUNlbGx9Pntyb3dOYW1lfTwvVGV4dD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1ZpZXc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVmlldz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KX1cclxuICAgICAgICAgICAgICAgICAgICAgIDwvVmlldz5cclxuICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICBjYXNlICdoZWFkZXInOlxyXG4gICAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgIDxWaWV3IHN0eWxlPXt7IG1hcmdpblRvcDogMTYgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8VGV4dCBzdHlsZT17eyBmb250U2l6ZTogMTQgfX0+e2ZpZWxkLnRpdGxlfTwvVGV4dD5cclxuICAgICAgICAgICAgICAgICAgICA8L1ZpZXc+XHJcbiAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICBjYXNlICdzcGFjaW5nJzpcclxuICAgICAgICAgICAgICAgICAgcmV0dXJuIDxWaWV3IHN0eWxlPXt7IG1hcmdpblRvcDogMTIsIG1hcmdpbkJvdHRvbTogMTIgfX0+PC9WaWV3PjtcclxuICAgICAgICAgICAgICAgIGNhc2UgJ2NoYXJ0JzpcclxuICAgICAgICAgICAgICAgICAgcmV0dXJuIGltYWdlc1VybC5tYXAoKGRvYykgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChkb2MuaW1hZ2VJbmRleCA9PT0gZmllbGQuaW5kZXgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxWaWV3IHN0eWxlPXt7IG1hcmdpblRvcDogMTYgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPEltYWdlIHN0eWxlPXt7IHdpZHRoOiAnMTAwJScgfX0gc3JjPXtkb2MuaW1hZ2VVcmx9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvVmlldz5cclxuICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIGNhc2UgJ3RleHQnOlxyXG4gICAgICAgICAgICAgICAgICBsZXQgZm9ybWF0dGVkVGV4dCA9ICQoZmllbGQuYm9keSkubWFwKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gJCgnPGRpdj4nKS5hcHBlbmQodGhpcykuaHRtbCgpO1xyXG4gICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZm9ybWF0dGVkVGV4dCk7XHJcbiAgICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPFZpZXcgc3R5bGU9e3sgbWFyZ2luVG9wOiAxNiB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgIHskLm1hcChmb3JtYXR0ZWRUZXh0LCAocmVzKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlcy50b1N0cmluZygpLmluY2x1ZGVzKCc8cD48L3A+JykpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhyZXMuaW5jbHVkZXMoJzxzdHJvbmc+JykpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBTVEFSVCAtLT4gPHA+PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAocmVzLnN0YXJ0c1dpdGgoJzxwPicpICYmICFyZXMuaW5jbHVkZXMoJzxzdHJvbmc+JykgJiYgIXJlcy5pbmNsdWRlcygnPGVtPicpICYmICFyZXMuaW5jbHVkZXMoJzxzPicpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDxUZXh0IHN0eWxlPXt7IGZvbnRTaXplOiAxMiB9fT57cmVzLnJlcGxhY2UoLyg8KFtePl0rKT4pL2dpLCAnJyl9PC9UZXh0PjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyA8cD5TVFJPTkc8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKHJlcy5zdGFydHNXaXRoKCc8cD4nKSAmJiByZXMuaW5jbHVkZXMoJzxzdHJvbmc+JykgJiYgIXJlcy5pbmNsdWRlcygnPGVtPicpICYmICFyZXMuaW5jbHVkZXMoJzxzPicpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0IHN0eWxlPXt7IGZvbnRTaXplOiAxMiwgZm9udEZhbWlseTogJ01vbnRzZXJyYXQtU2VtaUJvbGQnIH19PntyZXMucmVwbGFjZSgvKDwoW14+XSspPikvZ2ksICcnKX08L1RleHQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyA8cD5FTTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAocmVzLnN0YXJ0c1dpdGgoJzxwPicpICYmICFyZXMuaW5jbHVkZXMoJzxzdHJvbmc+JykgJiYgcmVzLmluY2x1ZGVzKCc8ZW0+JykgJiYgIXJlcy5pbmNsdWRlcygnPHM+JykpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gPFRleHQgc3R5bGU9e3sgZm9udFNpemU6IDEyLCBmb250RmFtaWx5OiAnTW9udHNlcnJhdC1JdGFsaWMnIH19PntyZXMucmVwbGFjZSgvKDwoW14+XSspPikvZ2ksICcnKX08L1RleHQ+O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIDxwPkVNICsgU1RST05HPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlIGlmIChyZXMuc3RhcnRzV2l0aCgnPHA+JykgJiYgcmVzLmluY2x1ZGVzKCc8c3Ryb25nPicpICYmIHJlcy5pbmNsdWRlcygnPGVtPicpICYmICFyZXMuaW5jbHVkZXMoJzxzPicpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0IHN0eWxlPXt7IGZvbnRTaXplOiAxMiwgZm9udEZhbWlseTogJ01vbnRzZXJyYXQtU2VtaUJvbGRJdGFsaWMnIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7cmVzLnJlcGxhY2UoLyg8KFtePl0rKT4pL2dpLCAnJyl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1RleHQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyA8cD5TPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlIGlmIChyZXMuc3RhcnRzV2l0aCgnPHA+JykgJiYgcmVzLmluY2x1ZGVzKCc8cz4nKSAmJiAhcmVzLmluY2x1ZGVzKCc8c3Ryb25nPicpICYmICFyZXMuaW5jbHVkZXMoJzxlbT4nKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiA8VGV4dCBzdHlsZT17eyBmb250U2l6ZTogMTIsIHRleHREZWNvcmF0aW9uOiAnbGluZS10aHJvdWdoJyB9fT57cmVzLnJlcGxhY2UoLyg8KFtePl0rKT4pL2dpLCAnJyl9PC9UZXh0PjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyA8cD5TICsgRU08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKHJlcy5zdGFydHNXaXRoKCc8cD4nKSAmJiByZXMuaW5jbHVkZXMoJzxzPicpICYmIHJlcy5pbmNsdWRlcygnPGVtPicpICYmICFyZXMuaW5jbHVkZXMoJzxzdHJvbmc+JykpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRleHQgc3R5bGU9e3sgZm9udFNpemU6IDEyLCBmb250RmFtaWx5OiAnTW9udHNlcnJhdC1JdGFsaWMnLCB0ZXh0RGVjb3JhdGlvbjogJ2xpbmUtdGhyb3VnaCcgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtyZXMucmVwbGFjZSgvKDwoW14+XSspPikvZ2ksICcnKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVGV4dD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIDxwPlMgKyBFTSArIFNUUk9ORzwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAocmVzLnN0YXJ0c1dpdGgoJzxwPicpICYmIHJlcy5pbmNsdWRlcygnPHM+JykgJiYgcmVzLmluY2x1ZGVzKCc8ZW0+JykgJiYgcmVzLmluY2x1ZGVzKCc8c3Ryb25nPicpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0IHN0eWxlPXt7IGZvbnRTaXplOiAxMiwgZm9udEZhbWlseTogJ01vbnRzZXJyYXQtU2VtaUJvbGRJdGFsaWMnLCB0ZXh0RGVjb3JhdGlvbjogJ2xpbmUtdGhyb3VnaCcgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtyZXMucmVwbGFjZSgvKDwoW14+XSspPikvZ2ksICcnKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVGV4dD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIDxwPlU8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJlcy5zdGFydHNXaXRoKCc8cD4nKSAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICFyZXMuaW5jbHVkZXMoJzx1PicpICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIXJlcy5pbmNsdWRlcygnPHM+JykgJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAhcmVzLmluY2x1ZGVzKCc8c3Ryb25nPicpICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIXJlcy5pbmNsdWRlcygnPGVtPicpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiA8VGV4dCBzdHlsZT17eyBmb250U2l6ZTogMTIsIHRleHREZWNvcmF0aW9uOiAndW5kZXJsaW5lJyB9fT57cmVzLnJlcGxhY2UoLyg8KFtePl0rKT4pL2dpLCAnJyl9PC9UZXh0PjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyA8cD5VICsgRU08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIEVORCAtLT4gPHA+PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyA8aDI+PC9oMj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAocmVzLnN0YXJ0c1dpdGgoJzxoMj4nKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiA8VGV4dCBzdHlsZT17eyBmb250U2l6ZTogMTQgfX0+e3Jlcy5yZXBsYWNlKC8oPChbXj5dKyk+KS9naSwgJycpfTwvVGV4dD47XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gPGgxPjwvaDE+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKHJlcy5zdGFydHNXaXRoKCc8aDE+JykpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gPFRleHQgc3R5bGU9e3sgZm9udFNpemU6IDE2IH19PntyZXMucmVwbGFjZSgvKDwoW14+XSspPikvZ2ksICcnKX08L1RleHQ+O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICB9KX1cclxuICAgICAgICAgICAgICAgICAgICA8L1ZpZXc+XHJcbiAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KX1cclxuICAgICAgICAgIDwvUGFnZT5cclxuICAgICAgICApO1xyXG4gICAgICB9KX1cclxuICAgIDwvRG9jdW1lbnQ+XHJcbiAgKTtcclxufTtcclxuXHJcbmNvbnN0IFJlYWN0UERGRG9jdW1lbnQgPSAoeyBzZWN0aW9ucyB9KSA9PiB7XHJcbiAgY29uc3Qgc2l6ZSA9IHVzZVdpbmRvd1NpemUoKTtcclxuXHJcbiAgY29uc3Qgc2F2ZUNvbnRhaW5lciA9IHVzZVJlZigpO1xyXG4gIGNvbnN0IGRyb3Bkb3duQnV0dG9uID0gdXNlUmVmKCk7XHJcbiAgY29uc3QgZHJvcGRvd25Db250YWluZXIgPSB1c2VSZWYoKTtcclxuICBjb25zdCBbZHJvcGRvd25CdXR0b25Db2xvckhlbHBlciwgc2V0RHJvcGRvd25CdXR0b25Db2xvckhlbHBlcl0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW2Ryb3Bkb3duQ29udGFpbmVySGVscGVyLCBzZXREcm9wZG93bkNvbnRhaW5lckhlbHBlcl0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3Qgb25TYXZlRHJvcGRvd25TaG93ID0gKCkgPT4ge1xyXG4gICAgaWYgKCFkcm9wZG93bkNvbnRhaW5lckhlbHBlcikge1xyXG4gICAgICBnc2FwLnRvKGRyb3Bkb3duQ29udGFpbmVyLmN1cnJlbnQsIHsgYXV0b0FscGhhOiAxLCBkdXJhdGlvbjogMSwgZWFzZTogTGluZWFyIH0pO1xyXG4gICAgICAvLyBnc2FwLnRvKGRyb3Bkb3duQnV0dG9uLmN1cnJlbnQsIHsgYmFja2dyb3VuZENvbG9yOiAnIzZDNjNGRicsIGNvbG9yOiAnI2Y4ZjlmYicsIGR1cmF0aW9uOiAxLCBlYXNlOiBMaW5lYXIgfSk7XHJcbiAgICAgIHNldERyb3Bkb3duQ29udGFpbmVySGVscGVyKHRydWUpO1xyXG4gICAgICBzZXREcm9wZG93bkJ1dHRvbkNvbG9ySGVscGVyKHRydWUpO1xyXG4gICAgfSBlbHNlIGlmIChkcm9wZG93bkNvbnRhaW5lckhlbHBlcikge1xyXG4gICAgICBnc2FwLnRvKGRyb3Bkb3duQ29udGFpbmVyLmN1cnJlbnQsIHsgYXV0b0FscGhhOiAwLCBkdXJhdGlvbjogMSwgZWFzZTogTGluZWFyIH0pO1xyXG4gICAgICAvLyBnc2FwLnRvKGRyb3Bkb3duQnV0dG9uLmN1cnJlbnQsIHsgYmFja2dyb3VuZENvbG9yOiAnI2Y4ZjlmYicsIGNvbG9yOiAnIzZDNjNGRicsIGR1cmF0aW9uOiAxLCBlYXNlOiBMaW5lYXIgfSk7XHJcbiAgICAgIHNldERyb3Bkb3duQ29udGFpbmVySGVscGVyKGZhbHNlKTtcclxuICAgICAgc2V0RHJvcGRvd25CdXR0b25Db2xvckhlbHBlcihmYWxzZSk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgW2ltYWdlc1VybCwgc2V0SW1hZ2VzVXJsXSA9IHVzZVN0YXRlKCk7XHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnNvbGUubG9nKHNlY3Rpb25zKTtcclxuICAgIGNvbnN0IGltYWdlc0FycmF5ID0gW107XHJcbiAgICBzZXRJbWFnZXNVcmwoaW1hZ2VzQXJyYXkpO1xyXG4gICAgc2VjdGlvbnMgJiZcclxuICAgICAgc2VjdGlvbnMubWFwKChzZWN0aW9uKSA9PiB7XHJcbiAgICAgICAgc2VjdGlvbi5maWVsZHMubWFwKChmaWVsZCkgPT4ge1xyXG4gICAgICAgICAgaWYgKGZpZWxkLnR5cGUgPT0gJ2NoYXJ0Jykge1xyXG4gICAgICAgICAgICBjb25zdCBjb2xvcnMgPVxyXG4gICAgICAgICAgICAgIGZpZWxkLmNoYXJ0VHlwZSA9PSAnUGllIGNoYXJ0JyB8fCBmaWVsZC5jaGFydFR5cGUgPT0gJ0RvdWdobnV0IGNoYXJ0J1xyXG4gICAgICAgICAgICAgICAgPyBbXHJcbiAgICAgICAgICAgICAgICAgICAgJ3JnYmEoMjA1LDIyMCw1NywxKScsXHJcbiAgICAgICAgICAgICAgICAgICAgJ3JnYmEoMjU1LDIzNSw1OSwxKScsXHJcbiAgICAgICAgICAgICAgICAgICAgJ3JnYmEoMjU1LDE5Myw3LDEpJyxcclxuICAgICAgICAgICAgICAgICAgICAncmdiYSgyNTUsMTUyLDAsMSknLFxyXG4gICAgICAgICAgICAgICAgICAgICdyZ2JhKDI1NSw4NywzNCwxKScsXHJcbiAgICAgICAgICAgICAgICAgICAgJ3JnYmEoMjQ0LDY3LDU0LDEpJyxcclxuICAgICAgICAgICAgICAgICAgICAncmdiYSgyMzMsMzAsOTksMSknLFxyXG4gICAgICAgICAgICAgICAgICAgICdyZ2JhKDE1NiwzOSwxNzYsMSknLFxyXG4gICAgICAgICAgICAgICAgICAgICdyZ2JhKDEwMyw1OCwxODMsMSknLFxyXG4gICAgICAgICAgICAgICAgICAgICdyZ2JhKDYzLDgxLDE4MSwxKScsXHJcbiAgICAgICAgICAgICAgICAgICAgJ3JnYmEoOTYsMTI1LDEzOSwxKScsXHJcbiAgICAgICAgICAgICAgICAgICAgJ3JnYmEoMTIxLDg1LDcyLDEpJyxcclxuICAgICAgICAgICAgICAgICAgXVxyXG4gICAgICAgICAgICAgICAgOiBmaWVsZC5jaGFydFR5cGUgPT0gJ0xpbmUgY2hhcnQnIHx8IGZpZWxkLmNoYXJ0VHlwZSA9PSAnQXJlYSBjaGFydCdcclxuICAgICAgICAgICAgICAgID8gJ3JnYmEoMjU1LDE4NSwwICwxICknXHJcbiAgICAgICAgICAgICAgICA6IFtcclxuICAgICAgICAgICAgICAgICAgICAncmdiYSgyNTUsMTg1LDAgLDEgKScsXHJcbiAgICAgICAgICAgICAgICAgICAgJ3JnYmEoMjU1LDE4NSwwICwxICknLFxyXG4gICAgICAgICAgICAgICAgICAgICdyZ2JhKDI1NSwxODUsMCAsMSApJyxcclxuICAgICAgICAgICAgICAgICAgICAncmdiYSgyNTUsMTg1LDAgLDEgKScsXHJcbiAgICAgICAgICAgICAgICAgICAgJ3JnYmEoMjU1LDE4NSwwICwxICknLFxyXG4gICAgICAgICAgICAgICAgICAgICdyZ2JhKDI1NSwxODUsMCAsMSApJyxcclxuICAgICAgICAgICAgICAgICAgICAncmdiYSgyNTUsMTg1LDAgLDEgKScsXHJcbiAgICAgICAgICAgICAgICAgICAgJ3JnYmEoMjU1LDE4NSwwICwxICknLFxyXG4gICAgICAgICAgICAgICAgICAgICdyZ2JhKDI1NSwxODUsMCAsMSApJyxcclxuICAgICAgICAgICAgICAgICAgICAncmdiYSgyNTUsMTg1LDAgLDEgKScsXHJcbiAgICAgICAgICAgICAgICAgICAgJ3JnYmEoMjU1LDE4NSwwICwxICknLFxyXG4gICAgICAgICAgICAgICAgICAgICdyZ2JhKDI1NSwxODUsMCAsMSApJyxcclxuICAgICAgICAgICAgICAgICAgXTtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IGNvbG9yczEgPVxyXG4gICAgICAgICAgICAgIGZpZWxkLmNoYXJ0VHlwZSA9PSAnUGllIGNoYXJ0JyB8fCBmaWVsZC5jaGFydFR5cGUgPT0gJ0RvdWdobnV0IGNoYXJ0J1xyXG4gICAgICAgICAgICAgICAgPyBbXHJcbiAgICAgICAgICAgICAgICAgICAgJ3JnYmEoMjA1LDIyMCw1NywxKScsXHJcbiAgICAgICAgICAgICAgICAgICAgJ3JnYmEoMjU1LDIzNSw1OSwxKScsXHJcbiAgICAgICAgICAgICAgICAgICAgJ3JnYmEoMjU1LDE5Myw3LDEpJyxcclxuICAgICAgICAgICAgICAgICAgICAncmdiYSgyNTUsMTUyLDAsMSknLFxyXG4gICAgICAgICAgICAgICAgICAgICdyZ2JhKDI1NSw4NywzNCwxKScsXHJcbiAgICAgICAgICAgICAgICAgICAgJ3JnYmEoMjQ0LDY3LDU0LDEpJyxcclxuICAgICAgICAgICAgICAgICAgICAncmdiYSgyMzMsMzAsOTksMSknLFxyXG4gICAgICAgICAgICAgICAgICAgICdyZ2JhKDE1NiwzOSwxNzYsMSknLFxyXG4gICAgICAgICAgICAgICAgICAgICdyZ2JhKDEwMyw1OCwxODMsMSknLFxyXG4gICAgICAgICAgICAgICAgICAgICdyZ2JhKDYzLDgxLDE4MSwxKScsXHJcbiAgICAgICAgICAgICAgICAgICAgJ3JnYmEoOTYsMTI1LDEzOSwxKScsXHJcbiAgICAgICAgICAgICAgICAgICAgJ3JnYmEoMTIxLDg1LDcyLDEpJyxcclxuICAgICAgICAgICAgICAgICAgXVxyXG4gICAgICAgICAgICAgICAgOiBmaWVsZC5jaGFydFR5cGUgPT0gJ0xpbmUgY2hhcnQnIHx8IGZpZWxkLmNoYXJ0VHlwZSA9PSAnQXJlYSBjaGFydCdcclxuICAgICAgICAgICAgICAgID8gJ3JnYmEoMCwyMDQsMTA2ICwxICknXHJcbiAgICAgICAgICAgICAgICA6IFtcclxuICAgICAgICAgICAgICAgICAgICAncmdiYSgwLDIwNCwxMDYgLDEgKScsXHJcbiAgICAgICAgICAgICAgICAgICAgJ3JnYmEoMCwyMDQsMTA2ICwxICknLFxyXG4gICAgICAgICAgICAgICAgICAgICdyZ2JhKDAsMjA0LDEwNiAsMSApJyxcclxuICAgICAgICAgICAgICAgICAgICAncmdiYSgwLDIwNCwxMDYgLDEgKScsXHJcbiAgICAgICAgICAgICAgICAgICAgJ3JnYmEoMCwyMDQsMTA2ICwxICknLFxyXG4gICAgICAgICAgICAgICAgICAgICdyZ2JhKDAsMjA0LDEwNiAsMSApJyxcclxuICAgICAgICAgICAgICAgICAgICAncmdiYSgwLDIwNCwxMDYgLDEgKScsXHJcbiAgICAgICAgICAgICAgICAgICAgJ3JnYmEoMCwyMDQsMTA2ICwxICknLFxyXG4gICAgICAgICAgICAgICAgICAgICdyZ2JhKDAsMjA0LDEwNiAsMSApJyxcclxuICAgICAgICAgICAgICAgICAgICAncmdiYSgwLDIwNCwxMDYgLDEgKScsXHJcbiAgICAgICAgICAgICAgICAgICAgJ3JnYmEoMCwyMDQsMTA2ICwxICknLFxyXG4gICAgICAgICAgICAgICAgICAgICdyZ2JhKDAsMjA0LDEwNiAsMSApJyxcclxuICAgICAgICAgICAgICAgICAgXTtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IGNvbG9yczIgPVxyXG4gICAgICAgICAgICAgIGZpZWxkLmNoYXJ0VHlwZSA9PSAnUGllIGNoYXJ0JyB8fCBmaWVsZC5jaGFydFR5cGUgPT0gJ0RvdWdobnV0IGNoYXJ0J1xyXG4gICAgICAgICAgICAgICAgPyBbXHJcbiAgICAgICAgICAgICAgICAgICAgJ3JnYmEoMjA1LDIyMCw1NywxKScsXHJcbiAgICAgICAgICAgICAgICAgICAgJ3JnYmEoMjU1LDIzNSw1OSwxKScsXHJcbiAgICAgICAgICAgICAgICAgICAgJ3JnYmEoMjU1LDE5Myw3LDEpJyxcclxuICAgICAgICAgICAgICAgICAgICAncmdiYSgyNTUsMTUyLDAsMSknLFxyXG4gICAgICAgICAgICAgICAgICAgICdyZ2JhKDI1NSw4NywzNCwxKScsXHJcbiAgICAgICAgICAgICAgICAgICAgJ3JnYmEoMjQ0LDY3LDU0LDEpJyxcclxuICAgICAgICAgICAgICAgICAgICAncmdiYSgyMzMsMzAsOTksMSknLFxyXG4gICAgICAgICAgICAgICAgICAgICdyZ2JhKDE1NiwzOSwxNzYsMSknLFxyXG4gICAgICAgICAgICAgICAgICAgICdyZ2JhKDEwMyw1OCwxODMsMSknLFxyXG4gICAgICAgICAgICAgICAgICAgICdyZ2JhKDYzLDgxLDE4MSwxKScsXHJcbiAgICAgICAgICAgICAgICAgICAgJ3JnYmEoOTYsMTI1LDEzOSwxKScsXHJcbiAgICAgICAgICAgICAgICAgICAgJ3JnYmEoMTIxLDg1LDcyLDEpJyxcclxuICAgICAgICAgICAgICAgICAgXVxyXG4gICAgICAgICAgICAgICAgOiBmaWVsZC5jaGFydFR5cGUgPT0gJ0xpbmUgY2hhcnQnIHx8IGZpZWxkLmNoYXJ0VHlwZSA9PSAnQXJlYSBjaGFydCdcclxuICAgICAgICAgICAgICAgID8gJ3JnYmEoMCwxMjAsMjE1ICwxICknXHJcbiAgICAgICAgICAgICAgICA6IFtcclxuICAgICAgICAgICAgICAgICAgICAncmdiYSgwLDEyMCwyMTUgLDEgKScsXHJcbiAgICAgICAgICAgICAgICAgICAgJ3JnYmEoMCwxMjAsMjE1ICwxICknLFxyXG4gICAgICAgICAgICAgICAgICAgICdyZ2JhKDAsMTIwLDIxNSAsMSApJyxcclxuICAgICAgICAgICAgICAgICAgICAncmdiYSgwLDEyMCwyMTUgLDEgKScsXHJcbiAgICAgICAgICAgICAgICAgICAgJ3JnYmEoMCwxMjAsMjE1ICwxICknLFxyXG4gICAgICAgICAgICAgICAgICAgICdyZ2JhKDAsMTIwLDIxNSAsMSApJyxcclxuICAgICAgICAgICAgICAgICAgICAncmdiYSgwLDEyMCwyMTUgLDEgKScsXHJcbiAgICAgICAgICAgICAgICAgICAgJ3JnYmEoMCwxMjAsMjE1ICwxICknLFxyXG4gICAgICAgICAgICAgICAgICAgICdyZ2JhKDAsMTIwLDIxNSAsMSApJyxcclxuICAgICAgICAgICAgICAgICAgICAncmdiYSgwLDEyMCwyMTUgLDEgKScsXHJcbiAgICAgICAgICAgICAgICAgICAgJ3JnYmEoMCwxMjAsMjE1ICwxICknLFxyXG4gICAgICAgICAgICAgICAgICAgICdyZ2JhKDAsMTIwLDIxNSAsMSApJyxcclxuICAgICAgICAgICAgICAgICAgXTtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IGNvbG9yczMgPVxyXG4gICAgICAgICAgICAgIGZpZWxkLmNoYXJ0VHlwZSA9PSAnUGllIGNoYXJ0JyB8fCBmaWVsZC5jaGFydFR5cGUgPT0gJ0RvdWdobnV0IGNoYXJ0J1xyXG4gICAgICAgICAgICAgICAgPyBbXHJcbiAgICAgICAgICAgICAgICAgICAgJ3JnYmEoMjA1LDIyMCw1NywxKScsXHJcbiAgICAgICAgICAgICAgICAgICAgJ3JnYmEoMjU1LDIzNSw1OSwxKScsXHJcbiAgICAgICAgICAgICAgICAgICAgJ3JnYmEoMjU1LDE5Myw3LDEpJyxcclxuICAgICAgICAgICAgICAgICAgICAncmdiYSgyNTUsMTUyLDAsMSknLFxyXG4gICAgICAgICAgICAgICAgICAgICdyZ2JhKDI1NSw4NywzNCwxKScsXHJcbiAgICAgICAgICAgICAgICAgICAgJ3JnYmEoMjQ0LDY3LDU0LDEpJyxcclxuICAgICAgICAgICAgICAgICAgICAncmdiYSgyMzMsMzAsOTksMSknLFxyXG4gICAgICAgICAgICAgICAgICAgICdyZ2JhKDE1NiwzOSwxNzYsMSknLFxyXG4gICAgICAgICAgICAgICAgICAgICdyZ2JhKDEwMyw1OCwxODMsMSknLFxyXG4gICAgICAgICAgICAgICAgICAgICdyZ2JhKDYzLDgxLDE4MSwxKScsXHJcbiAgICAgICAgICAgICAgICAgICAgJ3JnYmEoOTYsMTI1LDEzOSwxKScsXHJcbiAgICAgICAgICAgICAgICAgICAgJ3JnYmEoMTIxLDg1LDcyLDEpJyxcclxuICAgICAgICAgICAgICAgICAgXVxyXG4gICAgICAgICAgICAgICAgOiBmaWVsZC5jaGFydFR5cGUgPT0gJ0xpbmUgY2hhcnQnIHx8IGZpZWxkLmNoYXJ0VHlwZSA9PSAnQXJlYSBjaGFydCdcclxuICAgICAgICAgICAgICAgID8gJ3JnYmEoMjMxLDcyLDg2ICwxICknXHJcbiAgICAgICAgICAgICAgICA6IFtcclxuICAgICAgICAgICAgICAgICAgICAncmdiYSgyMzEsNzIsODYgLDEgKScsXHJcbiAgICAgICAgICAgICAgICAgICAgJ3JnYmEoMjMxLDcyLDg2ICwxICknLFxyXG4gICAgICAgICAgICAgICAgICAgICdyZ2JhKDIzMSw3Miw4NiAsMSApJyxcclxuICAgICAgICAgICAgICAgICAgICAncmdiYSgyMzEsNzIsODYgLDEgKScsXHJcbiAgICAgICAgICAgICAgICAgICAgJ3JnYmEoMjMxLDcyLDg2ICwxICknLFxyXG4gICAgICAgICAgICAgICAgICAgICdyZ2JhKDIzMSw3Miw4NiAsMSApJyxcclxuICAgICAgICAgICAgICAgICAgICAncmdiYSgyMzEsNzIsODYgLDEgKScsXHJcbiAgICAgICAgICAgICAgICAgICAgJ3JnYmEoMjMxLDcyLDg2ICwxICknLFxyXG4gICAgICAgICAgICAgICAgICAgICdyZ2JhKDIzMSw3Miw4NiAsMSApJyxcclxuICAgICAgICAgICAgICAgICAgICAncmdiYSgyMzEsNzIsODYgLDEgKScsXHJcbiAgICAgICAgICAgICAgICAgICAgJ3JnYmEoMjMxLDcyLDg2ICwxICknLFxyXG4gICAgICAgICAgICAgICAgICAgICdyZ2JhKDIzMSw3Miw4NiAsMSApJyxcclxuICAgICAgICAgICAgICAgICAgXTtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IGNvbG9yczQgPVxyXG4gICAgICAgICAgICAgIGZpZWxkLmNoYXJ0VHlwZSA9PSAnUGllIGNoYXJ0JyB8fCBmaWVsZC5jaGFydFR5cGUgPT0gJ0RvdWdobnV0IGNoYXJ0J1xyXG4gICAgICAgICAgICAgICAgPyBbXHJcbiAgICAgICAgICAgICAgICAgICAgJ3JnYmEoMjA1LDIyMCw1NywxKScsXHJcbiAgICAgICAgICAgICAgICAgICAgJ3JnYmEoMjU1LDIzNSw1OSwxKScsXHJcbiAgICAgICAgICAgICAgICAgICAgJ3JnYmEoMjU1LDE5Myw3LDEpJyxcclxuICAgICAgICAgICAgICAgICAgICAncmdiYSgyNTUsMTUyLDAsMSknLFxyXG4gICAgICAgICAgICAgICAgICAgICdyZ2JhKDI1NSw4NywzNCwxKScsXHJcbiAgICAgICAgICAgICAgICAgICAgJ3JnYmEoMjQ0LDY3LDU0LDEpJyxcclxuICAgICAgICAgICAgICAgICAgICAncmdiYSgyMzMsMzAsOTksMSknLFxyXG4gICAgICAgICAgICAgICAgICAgICdyZ2JhKDE1NiwzOSwxNzYsMSknLFxyXG4gICAgICAgICAgICAgICAgICAgICdyZ2JhKDEwMyw1OCwxODMsMSknLFxyXG4gICAgICAgICAgICAgICAgICAgICdyZ2JhKDYzLDgxLDE4MSwxKScsXHJcbiAgICAgICAgICAgICAgICAgICAgJ3JnYmEoOTYsMTI1LDEzOSwxKScsXHJcbiAgICAgICAgICAgICAgICAgICAgJ3JnYmEoMTIxLDg1LDcyLDEpJyxcclxuICAgICAgICAgICAgICAgICAgXVxyXG4gICAgICAgICAgICAgICAgOiBmaWVsZC5jaGFydFR5cGUgPT0gJ0xpbmUgY2hhcnQnIHx8IGZpZWxkLmNoYXJ0VHlwZSA9PSAnQXJlYSBjaGFydCdcclxuICAgICAgICAgICAgICAgID8gJ3JnYmEoMTI2LDExNSw5NSAsMSApJ1xyXG4gICAgICAgICAgICAgICAgOiBbXHJcbiAgICAgICAgICAgICAgICAgICAgJ3JnYmEoMTI2LDExNSw5NSAsMSApJyxcclxuICAgICAgICAgICAgICAgICAgICAncmdiYSgxMjYsMTE1LDk1ICwxICknLFxyXG4gICAgICAgICAgICAgICAgICAgICdyZ2JhKDEyNiwxMTUsOTUgLDEgKScsXHJcbiAgICAgICAgICAgICAgICAgICAgJ3JnYmEoMTI2LDExNSw5NSAsMSApJyxcclxuICAgICAgICAgICAgICAgICAgICAncmdiYSgxMjYsMTE1LDk1ICwxICknLFxyXG4gICAgICAgICAgICAgICAgICAgICdyZ2JhKDEyNiwxMTUsOTUgLDEgKScsXHJcbiAgICAgICAgICAgICAgICAgICAgJ3JnYmEoMTI2LDExNSw5NSAsMSApJyxcclxuICAgICAgICAgICAgICAgICAgICAncmdiYSgxMjYsMTE1LDk1ICwxICknLFxyXG4gICAgICAgICAgICAgICAgICAgICdyZ2JhKDEyNiwxMTUsOTUgLDEgKScsXHJcbiAgICAgICAgICAgICAgICAgICAgJ3JnYmEoMTI2LDExNSw5NSAsMSApJyxcclxuICAgICAgICAgICAgICAgICAgICAncmdiYSgxMjYsMTE1LDk1ICwxICknLFxyXG4gICAgICAgICAgICAgICAgICAgICdyZ2JhKDEyNiwxMTUsOTUgLDEgKScsXHJcbiAgICAgICAgICAgICAgICAgIF07XHJcblxyXG4gICAgICAgICAgICBjb25zdCBjb2xvcnM1ID1cclxuICAgICAgICAgICAgICBmaWVsZC5jaGFydFR5cGUgPT0gJ1BpZSBjaGFydCcgfHwgZmllbGQuY2hhcnRUeXBlID09ICdEb3VnaG51dCBjaGFydCdcclxuICAgICAgICAgICAgICAgID8gW1xyXG4gICAgICAgICAgICAgICAgICAgICdyZ2JhKDIwNSwyMjAsNTcsMSknLFxyXG4gICAgICAgICAgICAgICAgICAgICdyZ2JhKDI1NSwyMzUsNTksMSknLFxyXG4gICAgICAgICAgICAgICAgICAgICdyZ2JhKDI1NSwxOTMsNywxKScsXHJcbiAgICAgICAgICAgICAgICAgICAgJ3JnYmEoMjU1LDE1MiwwLDEpJyxcclxuICAgICAgICAgICAgICAgICAgICAncmdiYSgyNTUsODcsMzQsMSknLFxyXG4gICAgICAgICAgICAgICAgICAgICdyZ2JhKDI0NCw2Nyw1NCwxKScsXHJcbiAgICAgICAgICAgICAgICAgICAgJ3JnYmEoMjMzLDMwLDk5LDEpJyxcclxuICAgICAgICAgICAgICAgICAgICAncmdiYSgxNTYsMzksMTc2LDEpJyxcclxuICAgICAgICAgICAgICAgICAgICAncmdiYSgxMDMsNTgsMTgzLDEpJyxcclxuICAgICAgICAgICAgICAgICAgICAncmdiYSg2Myw4MSwxODEsMSknLFxyXG4gICAgICAgICAgICAgICAgICAgICdyZ2JhKDk2LDEyNSwxMzksMSknLFxyXG4gICAgICAgICAgICAgICAgICAgICdyZ2JhKDEyMSw4NSw3MiwxKScsXHJcbiAgICAgICAgICAgICAgICAgIF1cclxuICAgICAgICAgICAgICAgIDogZmllbGQuY2hhcnRUeXBlID09ICdMaW5lIGNoYXJ0JyB8fCBmaWVsZC5jaGFydFR5cGUgPT0gJ0FyZWEgY2hhcnQnXHJcbiAgICAgICAgICAgICAgICA/ICdyZ2JhKDE3Nyw3MCwxOTQgLDEgKSdcclxuICAgICAgICAgICAgICAgIDogW1xyXG4gICAgICAgICAgICAgICAgICAgICdyZ2JhKDE3Nyw3MCwxOTQgLDEgKScsXHJcbiAgICAgICAgICAgICAgICAgICAgJ3JnYmEoMTc3LDcwLDE5NCAsMSApJyxcclxuICAgICAgICAgICAgICAgICAgICAncmdiYSgxNzcsNzAsMTk0ICwxICknLFxyXG4gICAgICAgICAgICAgICAgICAgICdyZ2JhKDE3Nyw3MCwxOTQgLDEgKScsXHJcbiAgICAgICAgICAgICAgICAgICAgJ3JnYmEoMTc3LDcwLDE5NCAsMSApJyxcclxuICAgICAgICAgICAgICAgICAgICAncmdiYSgxNzcsNzAsMTk0ICwxICknLFxyXG4gICAgICAgICAgICAgICAgICAgICdyZ2JhKDE3Nyw3MCwxOTQgLDEgKScsXHJcbiAgICAgICAgICAgICAgICAgICAgJ3JnYmEoMTc3LDcwLDE5NCAsMSApJyxcclxuICAgICAgICAgICAgICAgICAgICAncmdiYSgxNzcsNzAsMTk0ICwxICknLFxyXG4gICAgICAgICAgICAgICAgICAgICdyZ2JhKDE3Nyw3MCwxOTQgLDEgKScsXHJcbiAgICAgICAgICAgICAgICAgICAgJ3JnYmEoMTc3LDcwLDE5NCAsMSApJyxcclxuICAgICAgICAgICAgICAgICAgICAncmdiYSgxNzcsNzAsMTk0ICwxICknLFxyXG4gICAgICAgICAgICAgICAgICBdO1xyXG4gICAgICAgICAgICBjb25zdCBkYXRhID0ge1xyXG4gICAgICAgICAgICAgIGxhYmVsczogZmllbGQubGFiZWxzICYmIFtcclxuICAgICAgICAgICAgICAgIC4uLmZpZWxkLmxhYmVscy5tYXAoKGxhYmVsKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgIGlmIChsYWJlbCAhPT0gJycpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gbGFiZWw7XHJcbiAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuICcnO1xyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KSxcclxuICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgIGRhdGFzZXRzOiBbXHJcbiAgICAgICAgICAgICAgICAvLyBEYXRhc2V0MVxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICBsYWJlbDogZmllbGQuZGF0YXNldDFMYWJlbCAmJiBmaWVsZC5kYXRhc2V0MUxhYmVsLFxyXG4gICAgICAgICAgICAgICAgICBkYXRhOlxyXG4gICAgICAgICAgICAgICAgICAgIGZpZWxkLmRhdGFzZXQxICYmXHJcbiAgICAgICAgICAgICAgICAgICAgZmllbGQuZGF0YXNldDEubWFwKChkYXRhKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICBpZiAoZGF0YSAhPT0gJycpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGRhdGE7XHJcbiAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSksXHJcbiAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogY29sb3JzLFxyXG4gICAgICAgICAgICAgICAgICBib3JkZXJXaWR0aDpcclxuICAgICAgICAgICAgICAgICAgICBmaWVsZC5jaGFydFR5cGUgPT0gJ0FyZWEgY2hhcnQnID8gMCA6IGZpZWxkLmNoYXJ0VHlwZSA9PSAnUGllIGNoYXJ0JyB8fCAoZmllbGQuY2hhcnRUeXBlID09ICdEb3VnaG51dCBjaGFydCcgJiYgMiksXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgLy8gRGF0YXNldDJcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgbGFiZWw6IGZpZWxkLmRhdGFzZXQyTGFiZWwgJiYgZmllbGQuZGF0YXNldDJMYWJlbCxcclxuICAgICAgICAgICAgICAgICAgZGF0YTpcclxuICAgICAgICAgICAgICAgICAgICBmaWVsZC5kYXRhc2V0MiAmJlxyXG4gICAgICAgICAgICAgICAgICAgIGZpZWxkLmRhdGFzZXQyLm1hcCgoZGF0YSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgaWYgKGRhdGEgIT09ICcnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBkYXRhO1xyXG4gICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH0pLFxyXG4gICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IGNvbG9yczEsXHJcbiAgICAgICAgICAgICAgICAgIGJvcmRlcldpZHRoOlxyXG4gICAgICAgICAgICAgICAgICAgIGZpZWxkLmNoYXJ0VHlwZSA9PSAnQXJlYSBjaGFydCcgPyAwIDogZmllbGQuY2hhcnRUeXBlID09ICdQaWUgY2hhcnQnIHx8IChmaWVsZC5jaGFydFR5cGUgPT0gJ0RvdWdobnV0IGNoYXJ0JyAmJiAyKSxcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAvLyBEYXRhc2V0M1xyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICBsYWJlbDogZmllbGQuZGF0YXNldDNMYWJlbCAmJiBmaWVsZC5kYXRhc2V0M0xhYmVsLFxyXG4gICAgICAgICAgICAgICAgICBkYXRhOlxyXG4gICAgICAgICAgICAgICAgICAgIGZpZWxkLmRhdGFzZXQzICYmXHJcbiAgICAgICAgICAgICAgICAgICAgZmllbGQuZGF0YXNldDMubWFwKChkYXRhKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICBpZiAoZGF0YSAhPT0gJycpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGRhdGE7XHJcbiAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSksXHJcbiAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogY29sb3JzMixcclxuICAgICAgICAgICAgICAgICAgYm9yZGVyV2lkdGg6XHJcbiAgICAgICAgICAgICAgICAgICAgZmllbGQuY2hhcnRUeXBlID09ICdBcmVhIGNoYXJ0JyA/IDAgOiBmaWVsZC5jaGFydFR5cGUgPT0gJ1BpZSBjaGFydCcgfHwgKGZpZWxkLmNoYXJ0VHlwZSA9PSAnRG91Z2hudXQgY2hhcnQnICYmIDIpLFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIC8vIERhdGFzZXQ0XHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgIGxhYmVsOiBmaWVsZC5kYXRhc2V0NExhYmVsICYmIGZpZWxkLmRhdGFzZXQ0TGFiZWwsXHJcbiAgICAgICAgICAgICAgICAgIGRhdGE6XHJcbiAgICAgICAgICAgICAgICAgICAgZmllbGQuZGF0YXNldDQgJiZcclxuICAgICAgICAgICAgICAgICAgICBmaWVsZC5kYXRhc2V0NC5tYXAoKGRhdGEpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgIGlmIChkYXRhICE9PSAnJykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZGF0YTtcclxuICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9KSxcclxuICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBjb2xvcnMzLFxyXG4gICAgICAgICAgICAgICAgICBib3JkZXJXaWR0aDpcclxuICAgICAgICAgICAgICAgICAgICBmaWVsZC5jaGFydFR5cGUgPT0gJ0FyZWEgY2hhcnQnID8gMCA6IGZpZWxkLmNoYXJ0VHlwZSA9PSAnUGllIGNoYXJ0JyB8fCAoZmllbGQuY2hhcnRUeXBlID09ICdEb3VnaG51dCBjaGFydCcgJiYgMiksXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgLy8gRGF0YXNldDVcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgbGFiZWw6IGZpZWxkLmRhdGFzZXQ1TGFiZWwgJiYgZmllbGQuZGF0YXNldDVMYWJlbCxcclxuICAgICAgICAgICAgICAgICAgZGF0YTpcclxuICAgICAgICAgICAgICAgICAgICBmaWVsZC5kYXRhc2V0NSAmJlxyXG4gICAgICAgICAgICAgICAgICAgIGZpZWxkLmRhdGFzZXQ1Lm1hcCgoZGF0YSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgaWYgKGRhdGEgIT09ICcnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBkYXRhO1xyXG4gICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH0pLFxyXG4gICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IGNvbG9yczQsXHJcbiAgICAgICAgICAgICAgICAgIGJvcmRlcldpZHRoOlxyXG4gICAgICAgICAgICAgICAgICAgIGZpZWxkLmNoYXJ0VHlwZSA9PSAnQXJlYSBjaGFydCcgPyAwIDogZmllbGQuY2hhcnRUeXBlID09ICdQaWUgY2hhcnQnIHx8IChmaWVsZC5jaGFydFR5cGUgPT0gJ0RvdWdobnV0IGNoYXJ0JyAmJiAyKSxcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAvLyBEYXRhc2V0NlxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICBsYWJlbDogZmllbGQuZGF0YXNldDZMYWJlbCAmJiBmaWVsZC5kYXRhc2V0NkxhYmVsLFxyXG4gICAgICAgICAgICAgICAgICBkYXRhOlxyXG4gICAgICAgICAgICAgICAgICAgIGZpZWxkLmRhdGFzZXQ2ICYmXHJcbiAgICAgICAgICAgICAgICAgICAgZmllbGQuZGF0YXNldDYubWFwKChkYXRhKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICBpZiAoZGF0YSAhPT0gJycpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGRhdGE7XHJcbiAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSksXHJcbiAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogY29sb3JzNSxcclxuICAgICAgICAgICAgICAgICAgYm9yZGVyV2lkdGg6XHJcbiAgICAgICAgICAgICAgICAgICAgZmllbGQuY2hhcnRUeXBlID09ICdBcmVhIGNoYXJ0JyA/IDAgOiBmaWVsZC5jaGFydFR5cGUgPT0gJ1BpZSBjaGFydCcgfHwgKGZpZWxkLmNoYXJ0VHlwZSA9PSAnRG91Z2hudXQgY2hhcnQnICYmIDIpLFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICAgY29uc3QgZGF0YXMgPSBkYXRhLmRhdGFzZXRzLm1hcCgoZGF0YXNldCkgPT4ge1xyXG4gICAgICAgICAgICAgIGNvbnNvbGUubG9nKGRhdGFzZXQuZGF0YVswXSk7XHJcbiAgICAgICAgICAgICAgY29uc3QgdGVzdDEgPSBkYXRhc2V0LmRhdGEubWFwKChkYXRhc2VzKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAoZGF0YXNlcyAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICAgIHJldHVybiBkYXRhc2VzO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgcmV0dXJuICcnO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgIGNvbnN0IHRlc3QgPSB0ZXN0MS5tYXAoKGRhdGFyZXIsIGluZGV4KSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAoZGF0YS5sYWJlbHNbaW5kZXhdICE9PSAnJykge1xyXG4gICAgICAgICAgICAgICAgICByZXR1cm4gZGF0YXJlcjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICBjb25zdCB0ZXN0MiA9IHRlc3QuZmlsdGVyKChvYmopID0+IG9iaiAhPT0gdW5kZWZpbmVkKTtcclxuICAgICAgICAgICAgICByZXR1cm4gdGVzdDI7XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgY29uc3QgZmlsbCA9IGZpZWxkLmNoYXJ0VHlwZSA9PSAnTGluZSBjaGFydCcgPyBmYWxzZSA6IHVuZGVmaW5lZDtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IG5ld0RhdGFzZXRzID0gW1xyXG4gICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGxhYmVsOiBkYXRhLmRhdGFzZXRzWzBdLmxhYmVsLFxyXG4gICAgICAgICAgICAgICAgZGF0YTogZGF0YXNbMF0sXHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IGRhdGEuZGF0YXNldHNbMF0uYmFja2dyb3VuZENvbG9yLFxyXG4gICAgICAgICAgICAgICAgYm9yZGVyQ29sb3I6IGZpZWxkLmNoYXJ0VHlwZSA9PSAnTGluZSBjaGFydCcgPyAncmdiYSgyNTUsMTg1LDAgLDEgKScgOiAncmdiKDI1NSwgMjU1LCAyNTUpJyxcclxuICAgICAgICAgICAgICAgIGJvcmRlcldpZHRoOiBkYXRhLmRhdGFzZXRzWzBdLmJvcmRlcldpZHRoLFxyXG4gICAgICAgICAgICAgICAgZmlsbDogZmlsbCxcclxuICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGxhYmVsOiBkYXRhLmRhdGFzZXRzWzFdLmxhYmVsLFxyXG4gICAgICAgICAgICAgICAgZGF0YTogZGF0YXNbMV0sXHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IGRhdGEuZGF0YXNldHNbMV0uYmFja2dyb3VuZENvbG9yLFxyXG4gICAgICAgICAgICAgICAgYm9yZGVyQ29sb3I6IGZpZWxkLmNoYXJ0VHlwZSA9PSAnTGluZSBjaGFydCcgPyAncmdiYSgwLDIwNCwxMDYgLDEgKScgOiAncmdiKDI1NSwgMjU1LCAyNTUpJyxcclxuICAgICAgICAgICAgICAgIGJvcmRlcldpZHRoOiBkYXRhLmRhdGFzZXRzWzFdLmJvcmRlcldpZHRoLFxyXG4gICAgICAgICAgICAgICAgZmlsbDogZmlsbCxcclxuICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGxhYmVsOiBkYXRhLmRhdGFzZXRzWzJdLmxhYmVsLFxyXG4gICAgICAgICAgICAgICAgZGF0YTogZGF0YXNbMl0sXHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IGRhdGEuZGF0YXNldHNbMl0uYmFja2dyb3VuZENvbG9yLFxyXG4gICAgICAgICAgICAgICAgYm9yZGVyQ29sb3I6IGZpZWxkLmNoYXJ0VHlwZSA9PSAnTGluZSBjaGFydCcgPyAncmdiYSgwLDEyMCwyMTUgLDEgKScgOiAncmdiKDI1NSwgMjU1LCAyNTUpJyxcclxuICAgICAgICAgICAgICAgIGJvcmRlcldpZHRoOiBkYXRhLmRhdGFzZXRzWzJdLmJvcmRlcldpZHRoLFxyXG4gICAgICAgICAgICAgICAgZmlsbDogZmlsbCxcclxuICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGxhYmVsOiBkYXRhLmRhdGFzZXRzWzNdLmxhYmVsLFxyXG4gICAgICAgICAgICAgICAgZGF0YTogZGF0YXNbM10sXHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IGRhdGEuZGF0YXNldHNbM10uYmFja2dyb3VuZENvbG9yLFxyXG4gICAgICAgICAgICAgICAgYm9yZGVyQ29sb3I6IGZpZWxkLmNoYXJ0VHlwZSA9PSAnTGluZSBjaGFydCcgPyAncmdiYSgyMzEsNzIsODYgLDEgKScgOiAncmdiKDI1NSwgMjU1LCAyNTUpJyxcclxuICAgICAgICAgICAgICAgIGJvcmRlcldpZHRoOiBkYXRhLmRhdGFzZXRzWzNdLmJvcmRlcldpZHRoLFxyXG4gICAgICAgICAgICAgICAgZmlsbDogZmlsbCxcclxuICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGxhYmVsOiBkYXRhLmRhdGFzZXRzWzRdLmxhYmVsLFxyXG4gICAgICAgICAgICAgICAgZGF0YTogZGF0YXNbNF0sXHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IGRhdGEuZGF0YXNldHNbNF0uYmFja2dyb3VuZENvbG9yLFxyXG4gICAgICAgICAgICAgICAgYm9yZGVyQ29sb3I6IGZpZWxkLmNoYXJ0VHlwZSA9PSAnTGluZSBjaGFydCcgPyAncmdiYSgxMjYsMTE1LDk1ICwxICknIDogJ3JnYigyNTUsIDI1NSwgMjU1KScsXHJcbiAgICAgICAgICAgICAgICBib3JkZXJXaWR0aDogZGF0YS5kYXRhc2V0c1s0XS5ib3JkZXJXaWR0aCxcclxuICAgICAgICAgICAgICAgIGZpbGw6IGZpbGwsXHJcbiAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBsYWJlbDogZGF0YS5kYXRhc2V0c1s1XS5sYWJlbCxcclxuICAgICAgICAgICAgICAgIGRhdGE6IGRhdGFzWzVdLFxyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBkYXRhLmRhdGFzZXRzWzVdLmJhY2tncm91bmRDb2xvcixcclxuICAgICAgICAgICAgICAgIGJvcmRlckNvbG9yOiBmaWVsZC5jaGFydFR5cGUgPT0gJ0xpbmUgY2hhcnQnID8gJ3JnYmEoMTc3LDcwLDE5NCAsMSApJyA6ICdyZ2IoMjU1LCAyNTUsIDI1NSknLFxyXG4gICAgICAgICAgICAgICAgYm9yZGVyV2lkdGg6IGRhdGEuZGF0YXNldHNbNV0uYm9yZGVyV2lkdGgsXHJcbiAgICAgICAgICAgICAgICBmaWxsOiBmaWxsLFxyXG4gICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIF07XHJcblxyXG4gICAgICAgICAgICBjb25zdCBjaGFydFR5cGUgPSBbXHJcbiAgICAgICAgICAgICAgZmllbGQuY2hhcnRUeXBlID09ICdCYXIgY2hhcnQnID8gJ2JhcicgOiAnJyxcclxuICAgICAgICAgICAgICBmaWVsZC5jaGFydFR5cGUgPT0gJ1JldmVyc2UgY2hhcnQnID8gJ2hvcml6b250YWxCYXInIDogJycsXHJcbiAgICAgICAgICAgICAgZmllbGQuY2hhcnRUeXBlID09ICdMaW5lIGNoYXJ0JyA/ICdsaW5lJyA6ICcnLFxyXG4gICAgICAgICAgICAgIGZpZWxkLmNoYXJ0VHlwZSA9PSAnUGllIGNoYXJ0JyA/ICdwaWUnIDogJycsXHJcbiAgICAgICAgICAgICAgZmllbGQuY2hhcnRUeXBlID09ICdEb3VnaG51dCBjaGFydCcgPyAnZG91Z2hudXQnIDogJycsXHJcbiAgICAgICAgICAgICAgZmllbGQuY2hhcnRUeXBlID09ICdBcmVhIGNoYXJ0JyA/ICdsaW5lJyA6ICcnLFxyXG4gICAgICAgICAgICBdO1xyXG5cclxuICAgICAgICAgICAgY29uc3QgdG9TYXZlQ2hhcnQgPSBuZXcgQ2hhcnRKc0ltYWdlKCk7XHJcbiAgICAgICAgICAgIHRvU2F2ZUNoYXJ0LnNldENvbmZpZyh7XHJcbiAgICAgICAgICAgICAgdHlwZTogY2hhcnRUeXBlLmZpbHRlcigodHlwZSkgPT4gdHlwZSAhPT0gJycpLFxyXG4gICAgICAgICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgICAgICAgIGxhYmVsczogZGF0YS5sYWJlbHMuZmlsdGVyKChsYWJlbCkgPT4gbGFiZWwgIT09ICcnKSxcclxuICAgICAgICAgICAgICAgIGRhdGFzZXRzOiBuZXdEYXRhc2V0cy5maWx0ZXIoKGRhdGFzZXQpID0+IGRhdGFzZXQubGFiZWwgIT09ICcnKSxcclxuICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgIG9wdGlvbnM6IHtcclxuICAgICAgICAgICAgICAgIHJlc3BvbnNpdmU6IHRydWUsXHJcbiAgICAgICAgICAgICAgICBsZWdlbmQ6IHtcclxuICAgICAgICAgICAgICAgICAgcG9zaXRpb246ICdib3R0b20nLFxyXG4gICAgICAgICAgICAgICAgICBsYWJlbHM6IHtcclxuICAgICAgICAgICAgICAgICAgICBib3hXaWR0aDogMzAsXHJcbiAgICAgICAgICAgICAgICAgICAgYm94SGVpZ2h0OiA1LFxyXG4gICAgICAgICAgICAgICAgICAgIGZvbnRGYW1pbHk6ICdDb21mb3J0YWEnLFxyXG4gICAgICAgICAgICAgICAgICAgIGZvbnRTaXplOiAxMixcclxuICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAvLyBkZWZhdWx0Rm9udEZhbWlseTogKENoYXJ0LmRlZmF1bHRzLmdsb2JhbC5kZWZhdWx0Rm9udEZhbWlseSA9ICdDb21mb3J0YWEnKSxcclxuICAgICAgICAgICAgICAgIHNjYWxlczoge1xyXG4gICAgICAgICAgICAgICAgICB5QXhlczogW1xyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgIHN0YWNrZWQ6IGZpZWxkLnN0YWNrZWQgPT0gdHJ1ZSA/IHRydWUgOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICAgIHRpY2tzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJlZ2luQXRaZXJvOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250RmFtaWx5OiAnQ29tZm9ydGFhJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udFNpemU6IDEwLFxyXG4gICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgICB4QXhlczogW1xyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgIHN0YWNrZWQ6IGZpZWxkLnN0YWNrZWQgPT0gdHJ1ZSA/IHRydWUgOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICAgIHRpY2tzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJlZ2luQXRaZXJvOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250RmFtaWx5OiAnQ29tZm9ydGFhJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udFNpemU6IDEwLFxyXG4gICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIHRvU2F2ZUNoYXJ0LnNldEZvcm1hdCgncG5nJykuc2V0RGV2aWNlUGl4ZWxSYXRpbygzLjApLnNldEJhY2tncm91bmRDb2xvcignI2Y4ZjlmYicpO1xyXG4gICAgICAgICAgICBjb25zdCBpbWFnZVVybCA9IHRvU2F2ZUNoYXJ0LnRvRGF0YVVybCgpO1xyXG4gICAgICAgICAgICBpbWFnZVVybC50aGVuKChpbWFnZSkgPT4ge1xyXG4gICAgICAgICAgICAgIGNvbnNvbGUubG9nKGltYWdlKTtcclxuICAgICAgICAgICAgICBpbWFnZXNBcnJheS5wdXNoKHsgaW1hZ2VVcmw6IGltYWdlLCBpbWFnZUluZGV4OiBmaWVsZC5pbmRleCB9KTtcclxuICAgICAgICAgICAgICBjb25zb2xlLmxvZyhpbWFnZXNBcnJheSk7XHJcbiAgICAgICAgICAgICAgc2V0SW1hZ2VzVXJsKGltYWdlc0FycmF5KTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH0pO1xyXG4gIH0sIFtzZWN0aW9uc10pO1xyXG5cclxuICBjb25zb2xlLmxvZyhpbWFnZXNVcmwpO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiByZWY9e3NhdmVDb250YWluZXJ9IGNsYXNzTmFtZT1cInJlbGF0aXZlIGZsZXgganVzdGlmeS1zdGFydFwiPlxyXG4gICAgICB7c2l6ZS53aWR0aCA8IDY4MCA/IChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggbXQtNFwiPlxyXG4gICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICBvbkNsaWNrPXthc3luYyAoZSkgPT4ge1xyXG4gICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgICBjb25zdCBkb2MgPSAoXHJcbiAgICAgICAgICAgICAgICA8TXlEb2N1bWVudFxyXG4gICAgICAgICAgICAgICAgICBpbWFnZT17aW1hZ2VVcmx9XHJcbiAgICAgICAgICAgICAgICAgIGRhdGE9e2RhdGF9XHJcbiAgICAgICAgICAgICAgICAgIHBlcmlvZHM9e3BlcmlvZHN9XHJcbiAgICAgICAgICAgICAgICAgIHJldmVudWVFbGVtZW50cz17cmV2ZW51ZUVsZW1lbnRzfVxyXG4gICAgICAgICAgICAgICAgICBjb3N0c0VsZW1lbnRzPXtjb3N0c0VsZW1lbnRzfVxyXG4gICAgICAgICAgICAgICAgICB0YXg9e3RheH1cclxuICAgICAgICAgICAgICAgICAgdG90YWxSZXZlbnVlPXt0b3RhbFJldmVudWV9XHJcbiAgICAgICAgICAgICAgICAgIG1vbnRobHlSZXZlbnVlPXttb250aGx5UmV2ZW51ZX1cclxuICAgICAgICAgICAgICAgICAgdG90YWxDb3N0cz17dG90YWxDb3N0c31cclxuICAgICAgICAgICAgICAgICAgbW9udGhseUNvc3RzPXttb250aGx5Q29zdHN9XHJcbiAgICAgICAgICAgICAgICAgIGdyb3NzUHJvZml0PXtncm9zc1Byb2ZpdH1cclxuICAgICAgICAgICAgICAgICAgbmV0UHJvZml0PXtuZXRQcm9maXR9XHJcbiAgICAgICAgICAgICAgICAgIHN0YXJ0RGF0ZT17c3RhcnREYXRlfVxyXG4gICAgICAgICAgICAgICAgICBlbmREYXRlPXtlbmREYXRlfVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgIGNvbnN0IGFzUGRmID0gcGRmKFtdKTsgLy8ge30gaXMgaW1wb3J0YW50LCB0aHJvd3Mgd2l0aG91dCBhbiBhcmd1bWVudFxyXG4gICAgICAgICAgICAgIGFzUGRmLnVwZGF0ZUNvbnRhaW5lcihkb2MpO1xyXG4gICAgICAgICAgICAgIGNvbnN0IGJsb2IgPSBhd2FpdCBhc1BkZi50b0Jsb2IoKTtcclxuICAgICAgICAgICAgICBzYXZlQXMoYmxvYiwgYCR7Um91dGVyLnF1ZXJ5LnByb2plY3R9L2Nhc2gtZmxvdy5wZGZgKTtcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgc3JjPVwiL21vYmlsZS1uYXZiYXIvcGRmLnN2Z1wiXHJcbiAgICAgICAgICAgIGhlaWdodD17MzB9XHJcbiAgICAgICAgICAgIHdpZHRoPXszMH1cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICkgOiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWxhdGl2ZSB3LWZ1bGwgZmxleCBqdXN0aWZ5LWVuZCBpdGVtcy1jZW50ZXJcIj5cclxuICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgcmVmPXtkcm9wZG93bkJ1dHRvbn1cclxuICAgICAgICAgICAgb25DbGljaz17b25TYXZlRHJvcGRvd25TaG93fVxyXG4gICAgICAgICAgICBjbGFzc05hbWU9e2Bob3ZlcjpiZy1wcmltYXJ5IGhvdmVyOnRleHQtd2hpdGUgZGFyazpob3ZlcjpiZy1wcmltYXJ5ZGFyayBkYXJrOmhvdmVyOnRleHQtYmFja2dyb3VuZCBmb2N1czpvdXRsaW5lLW5vbmUgYm9yZGVyIGJvcmRlci1wcmltYXJ5IHRleHQtcHJpbWFyeSB0ZXh0LXNtIGZvbnQtbGlnaHQgcHktMiBweC04IHJvdW5kZWQtMnhsIG10LTIgZGFyazp0ZXh0LXByaW1hcnlkYXJrIGRhcms6Ym9yZGVyLXByaW1hcnlkYXJrICR7XHJcbiAgICAgICAgICAgICAgZHJvcGRvd25CdXR0b25Db2xvckhlbHBlciA/ICdiZy1wcmltYXJ5IHRleHQtYmFja2dyb3VuZCBkYXJrOmJnLXByaW1hcnlkYXJrIGRhcms6dGV4dC1iYWNrZ3JvdW5kJyA6ICcnXHJcbiAgICAgICAgICAgIH1gfVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICBTYXZlIG15IHdvcmtcclxuICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgPGRpdiByZWY9e2Ryb3Bkb3duQ29udGFpbmVyfSBjbGFzc05hbWU9XCJhYnNvbHV0ZSBiZy13aGl0ZSByb3VuZGVkLTJ4bCBzaGFkb3cteGwgcC02IHRvcC0xNCB6LTUwIGludmlzaWJsZSBvcGFjaXR5LTBcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LXN0YXJ0XCI+XHJcbiAgICAgICAgICAgICAgPGltZyBzcmM9XCIvbW9iaWxlLW5hdmJhci9zdWNjZXNzLnN2Z1wiIGhlaWdodD17MjZ9IHdpZHRoPXsyNn0gLz5cclxuICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LWxnIG1sLTJcIj5TaG93IHRoZSB3b3JsZCB5b3VyIHdvcmshPC9wPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJweC02IHB5LTQgYmctYmFja2dyb3VuZCByb3VuZGVkLTJ4bCBtdC0yIHByLTZcIj5cclxuICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZmxleFwiPlNhdmUgYXMgUERGOjwvcD5cclxuICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgb25DbGljaz17YXN5bmMgKGUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZG9jID0gPE15RG9jdW1lbnQgaW1hZ2VzVXJsPXtpbWFnZXNVcmx9IHNlY3Rpb25zPXtzZWN0aW9uc30gLz47XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgYXNQZGYgPSBwZGYoW10pO1xyXG4gICAgICAgICAgICAgICAgICAgIGFzUGRmLnVwZGF0ZUNvbnRhaW5lcihkb2MpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGJsb2IgPSBhd2FpdCBhc1BkZi50b0Jsb2IoKTtcclxuICAgICAgICAgICAgICAgICAgICBzYXZlQXMoYmxvYiwgYCR7Um91dGVyLnF1ZXJ5LnByb2plY3R9L2NvbXBldGl0b3JzLWFuYWx5c2lzLnBkZmApO1xyXG4gICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICBzcmM9XCIvbW9iaWxlLW5hdmJhci9wZGYuc3ZnXCJcclxuICAgICAgICAgICAgICAgICAgaGVpZ2h0PXszMH1cclxuICAgICAgICAgICAgICAgICAgd2lkdGg9ezMwfVxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJtdC0yIGN1cnNvci1wb2ludGVyXCJcclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGwganVzdGlmeS1zdGFydCBpdGVtcy1jZW50ZXIgbXQtNFwiPlxyXG4gICAgICAgICAgICAgICAgPHA+U2hhcmUgeW91ciBjb21wZXRpdG9ycyBhbmFseXNpcyB3aXRoIHRoaXMgcHVibGljIGxpbms6PC9wPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGwgZmxleCBtdC0yXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxpbnB1dCB2YWx1ZT1cInd3dy5wcm9qZWN0LmNvbVwiIGNsYXNzTmFtZT1cImJnLWxpbmtCYWNrZ3JvdW5kIHRleHQtc20gcHgtMiBweS0xIGRhcms6dGV4dC1wcmltYXJ5ZGFya1wiIC8+XHJcbiAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiL21vYmlsZS1uYXZiYXIvZm9yZWlnbi5zdmdcIiBoZWlnaHQ9ezI4fSB3aWR0aD17Mjh9IC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgKX1cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBSZWFjdFBERkRvY3VtZW50O1xyXG4iXSwic291cmNlUm9vdCI6IiJ9