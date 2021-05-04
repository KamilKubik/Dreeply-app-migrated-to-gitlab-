webpackHotUpdate_N_E("pages/dashboard/projects/[project]/business-plan",{

/***/ "./components/dashboard/startup/project/business-app/Table.js":
/*!********************************************************************!*\
  !*** ./components/dashboard/startup/project/business-app/Table.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var C_off_saas_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var C_off_saas_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/regenerator */ "./node_modules/next/node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var C_off_saas_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(C_off_saas_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var C_off_saas_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var C_off_saas_node_modules_next_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/image */ "./node_modules/next/image.js");
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! gsap */ "./node_modules/gsap/index.js");
/* harmony import */ var _utils_helpers__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../utils/helpers */ "./utils/helpers.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_9__);






var _jsxFileName = "C:\\off-saas\\components\\dashboard\\startup\\project\\business-app\\Table.js",
    _this = undefined,
    _s = $RefreshSig$();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(C_off_saas_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }







var TableElement = function TableElement(_ref) {
  _s();

  var currentIndex = _ref.currentIndex,
      tableUpdate = _ref.tableUpdate,
      provided = _ref.provided,
      field = _ref.field,
      deleteField = _ref.deleteField;
  console.log(field);

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])(),
      newField = _useState[0],
      setNewField = _useState[1];

  Object(react__WEBPACK_IMPORTED_MODULE_5__["useEffect"])(function () {
    document.getElementById("".concat(field.index, "container")) && document.getElementById("".concat(field.index, "container")).addEventListener('mouseenter', function () {
      gsap__WEBPACK_IMPORTED_MODULE_7__["default"].to(document.getElementById("".concat(field.index, "table")), {
        height: 80,
        marginTop: 10,
        duration: 0.8,
        transformOrigin: 'top',
        ease: gsap__WEBPACK_IMPORTED_MODULE_7__["Linear"]
      });
    });
    document.getElementById("".concat(field.index, "container")) && document.getElementById("".concat(field.index, "container")).addEventListener('mouseleave', function () {
      gsap__WEBPACK_IMPORTED_MODULE_7__["default"].to(document.getElementById("".concat(field.index, "table")), {
        height: 0,
        marginTop: 0,
        duration: 0.8,
        transformOrigin: 'top',
        ease: gsap__WEBPACK_IMPORTED_MODULE_7__["Linear"]
      });
    });
  }, []);
  Object(react__WEBPACK_IMPORTED_MODULE_5__["useEffect"])(function () {
    setNewField(field);
  }, []);

  var onRowDataChange = function onRowDataChange(data, rowIndex, rowDataIndex) {
    var newArray = Object(C_off_saas_node_modules_next_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_4__["default"])(newField.rows);

    newArray[rowIndex].row[rowDataIndex] = data;
    var updatedField = {
      headRows: field.headRows,
      rows: newArray,
      index: field.index,
      tableId: field.tableId,
      type: 'table',
      currentIndex: currentIndex
    };
    setNewField(updatedField); // Firebase update

    databaseUpdate(updatedField);
  };

  var databaseUpdate = Object(react__WEBPACK_IMPORTED_MODULE_5__["useCallback"])(Object(_utils_helpers__WEBPACK_IMPORTED_MODULE_8__["default"])( /*#__PURE__*/function () {
    var _ref2 = Object(C_off_saas_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__["default"])( /*#__PURE__*/C_off_saas_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.mark(function _callee(data) {
      return C_off_saas_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              tableUpdate(data, currentIndex, field.tableId, field.index);

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
  }(), 500), []);

  var onHeadRowDataChange = function onHeadRowDataChange(data, headRowIndex) {
    console.log(data);

    var newArray = Object(C_off_saas_node_modules_next_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_4__["default"])(newField.headRows);

    newArray[headRowIndex] = data;
    var updatedField = {
      headRows: newArray,
      rows: field.rows,
      index: field.index,
      tableId: field.tableId,
      type: 'table'
    };
    setNewField(updatedField); // Firebase update

    databaseUpdate(updatedField);
  };

  var onNewRowAdd = function onNewRowAdd() {
    var newArray = Object(C_off_saas_node_modules_next_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_4__["default"])(newField.rows);

    console.log(newArray);
    var rowArray = [];
    newField.headRows.map(function (headRow) {
      return rowArray.push('');
    });
    newArray.push({
      row: rowArray
    });
    var updatedField = {
      headRows: field.headRows,
      rows: newArray,
      index: field.index,
      tableId: field.tableId,
      type: 'table'
    };
    setNewField(updatedField); // If empty, won't be updated to firebase

    databaseUpdate(updatedField);
  };

  var onNewRowAboveAdd = function onNewRowAboveAdd() {
    var newArray = Object(C_off_saas_node_modules_next_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_4__["default"])(newField.rows);

    var rowArray = [];
    newField.headRows.map(function (headRow) {
      return rowArray.push('');
    });
    newArray.unshift({
      row: rowArray
    });
    var updatedField = {
      headRows: field.headRows,
      rows: newArray,
      index: field.index,
      tableId: field.tableId,
      type: 'table'
    };
    setNewField(updatedField); // If empty, won't be updated to firebase

    databaseUpdate(updatedField);
  };

  var onNewColumnAdd = function onNewColumnAdd() {
    var newArrayRows = Object(C_off_saas_node_modules_next_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_4__["default"])(newField.rows);

    newArrayRows.map(function (row) {
      console.log(row);
      row.row.push('');
    });

    var newArrayHeadRows = Object(C_off_saas_node_modules_next_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_4__["default"])(newField.headRows);

    newArrayHeadRows.push('');
    var updatedField = {
      headRows: newArrayHeadRows,
      rows: newArrayRows,
      index: field.index,
      tableId: field.tableId,
      type: 'table'
    };
    setNewField(updatedField); // Firebase update

    databaseUpdate(updatedField);
  };

  var onNewColumnLeftAdd = function onNewColumnLeftAdd() {
    var newArrayRows = Object(C_off_saas_node_modules_next_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_4__["default"])(newField.rows);

    newArrayRows.map(function (row) {
      row.row.unshift('');
    });

    var newArrayHeadRows = Object(C_off_saas_node_modules_next_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_4__["default"])(newField.headRows);

    newArrayHeadRows.unshift('');
    var updatedField = {
      headRows: newArrayHeadRows,
      rows: newArrayRows,
      index: field.index,
      tableId: field.tableId,
      type: 'table'
    };
    setNewField(updatedField); // Firebase update

    databaseUpdate(updatedField);
  };

  var onRowDelete = function onRowDelete() {
    var newArray = Object(C_off_saas_node_modules_next_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_4__["default"])(newField.rows);

    newArray.pop();
    var updatedField = {
      headRows: field.headRows,
      rows: newArray,
      index: field.index,
      tableId: field.tableId,
      type: 'table'
    };
    setNewField(updatedField); // If empty, won't be updated to firebase

    databaseUpdate(updatedField);
  };

  var onRowAboveDelete = function onRowAboveDelete() {
    var newArray = Object(C_off_saas_node_modules_next_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_4__["default"])(newField.rows);

    newArray.shift();
    var updatedField = {
      headRows: field.headRows,
      rows: newArray,
      index: field.index,
      tableId: field.tableId,
      type: 'table'
    };
    setNewField(updatedField); // If empty, won't be updated to firebase

    databaseUpdate(updatedField);
  };

  var onColumnDelete = function onColumnDelete() {
    var newArrayRows = Object(C_off_saas_node_modules_next_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_4__["default"])(newField.rows);

    newArrayRows.map(function (row) {
      row.row.pop();
    });

    var newArrayHeadRows = Object(C_off_saas_node_modules_next_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_4__["default"])(newField.headRows);

    newArrayHeadRows.pop();
    var updatedField = {
      headRows: newArrayHeadRows,
      rows: newArrayRows,
      index: field.index,
      tableId: field.tableId,
      type: 'table'
    };
    setNewField(updatedField); // Firebase update

    databaseUpdate(updatedField);
  };

  var onColumnLeftDelete = function onColumnLeftDelete() {
    var newArrayRows = Object(C_off_saas_node_modules_next_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_4__["default"])(newField.rows);

    newArrayRows.map(function (row) {
      row.row.shift();
    });

    var newArrayHeadRows = Object(C_off_saas_node_modules_next_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_4__["default"])(newField.headRows);

    newArrayHeadRows.shift();
    var updatedField = {
      headRows: newArrayHeadRows,
      rows: newArrayRows,
      index: field.index,
      tableId: field.tableId,
      type: 'table'
    };
    setNewField(updatedField); // Firebase update

    databaseUpdate(updatedField);
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", _objectSpread(_objectSpread({
    ref: provided.innerRef
  }, provided.draggableProps), {}, {
    className: "w-full grid grid-cols-12fr justify-items-center items-center mt-6",
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
      id: "".concat(field.index, "container"),
      className: "col-start-2 col-end-12 relative flex flex-col h-full w-full flex px-8 py-8 rounded-2xl bg-white dark:bg-background",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("table", {
        className: "table-element",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("thead", {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("tr", {
            children: newField && newField.headRows.map(function (row, headRowIndex) {
              return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("th", {
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("input", {
                  className: "w-full bg-primary text-background focus:outline-none",
                  value: row,
                  onChange: function onChange(e) {
                    return onHeadRowDataChange(e.target.value, headRowIndex);
                  }
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 235,
                  columnNumber: 21
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 234,
                columnNumber: 19
              }, _this);
            })
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 231,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 230,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("tbody", {
          children: newField && newField.rows.map(function (row, rowIndex) {
            return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("tr", {
              children: row.row.map(function (rowData, rowDataIndex) {
                return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("td", {
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("input", {
                    className: "w-full bg-white focus:outline-none border-l border-primarydark pl-1",
                    value: rowData,
                    onChange: function onChange(e) {
                      return onRowDataChange(e.target.value, rowIndex, rowDataIndex);
                    }
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 250,
                    columnNumber: 23
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 249,
                  columnNumber: 21
                }, _this);
              })
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 247,
              columnNumber: 17
            }, _this);
          })
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 244,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 229,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
        id: "".concat(field.index, "table"),
        className: "w-full overflow-hidden h-0 flex justify-between items-center gap-4",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
          className: "grid grid-flow-row grid-rows-2fr h-full",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
            className: "flex",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("img", {
              onClick: onNewRowAdd,
              className: "cursor-pointer",
              src: "/table/row-add.svg",
              height: 22,
              width: 22
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 265,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("img", {
              onClick: onRowDelete,
              className: "cursor-pointer ml-2",
              src: "/table/remove1.svg",
              height: 26,
              width: 26
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 266,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 264,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
            className: "flex",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("img", {
              onClick: onNewRowAboveAdd,
              className: "cursor-pointer",
              src: "/table/row-add-above.svg",
              height: 22,
              width: 22
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 269,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("img", {
              onClick: onRowAboveDelete,
              className: "cursor-pointer ml-2",
              src: "/table/remove1.svg",
              height: 26,
              width: 26
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 270,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 268,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 263,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
          className: "grid grid-flow-row grid-rows-2fr h-full",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
            className: "flex",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("img", {
              onClick: onNewColumnAdd,
              className: "cursor-pointer mr-2",
              src: "/table/column-add.svg",
              height: 22,
              width: 22
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 275,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("img", {
              onClick: onColumnDelete,
              className: "cursor-pointer",
              src: "/table/remove1.svg",
              height: 26,
              width: 26
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 276,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 274,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
            className: "flex",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("img", {
              onClick: onNewColumnLeftAdd,
              className: "cursor-pointer mr-2",
              src: "/table/column-add-left.svg",
              height: 22,
              width: 22
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 279,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("img", {
              onClick: onColumnLeftDelete,
              className: "cursor-pointer",
              src: "/table/remove1.svg",
              height: 26,
              width: 26
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 280,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 278,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 273,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 262,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 225,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
      className: "col-start-12 col-end-13 justify-self-center self-start flex flex-col flex-wrap gap-2",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(next_image__WEBPACK_IMPORTED_MODULE_6___default.a, {
        onClick: function onClick() {
          return deleteField(field.index);
        },
        className: "cursor-pointer",
        src: "/plan-bar/exit4.svg",
        height: 36,
        width: 36
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 286,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(next_image__WEBPACK_IMPORTED_MODULE_6___default.a, _objectSpread(_objectSpread({}, provided.dragHandleProps), {}, {
        className: "cursor-pointer mt-2",
        src: "/plan-bar/drag2.svg",
        height: 36,
        width: 36
      }), void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 287,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 285,
      columnNumber: 7
    }, _this)]
  }), void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 224,
    columnNumber: 5
  }, _this);
};

_s(TableElement, "i89ZYTa/klcf+WkrAhi311wrx3g=");

_c = TableElement;
/* harmony default export */ __webpack_exports__["default"] = (TableElement);

var _c;

$RefreshReg$(_c, "TableElement");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9kYXNoYm9hcmQvc3RhcnR1cC9wcm9qZWN0L2J1c2luZXNzLWFwcC9UYWJsZS5qcyJdLCJuYW1lcyI6WyJUYWJsZUVsZW1lbnQiLCJjdXJyZW50SW5kZXgiLCJ0YWJsZVVwZGF0ZSIsInByb3ZpZGVkIiwiZmllbGQiLCJkZWxldGVGaWVsZCIsImNvbnNvbGUiLCJsb2ciLCJ1c2VTdGF0ZSIsIm5ld0ZpZWxkIiwic2V0TmV3RmllbGQiLCJ1c2VFZmZlY3QiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiaW5kZXgiLCJhZGRFdmVudExpc3RlbmVyIiwiZ3NhcCIsInRvIiwiaGVpZ2h0IiwibWFyZ2luVG9wIiwiZHVyYXRpb24iLCJ0cmFuc2Zvcm1PcmlnaW4iLCJlYXNlIiwiTGluZWFyIiwib25Sb3dEYXRhQ2hhbmdlIiwiZGF0YSIsInJvd0luZGV4Iiwicm93RGF0YUluZGV4IiwibmV3QXJyYXkiLCJyb3dzIiwicm93IiwidXBkYXRlZEZpZWxkIiwiaGVhZFJvd3MiLCJ0YWJsZUlkIiwidHlwZSIsImRhdGFiYXNlVXBkYXRlIiwidXNlQ2FsbGJhY2siLCJkZWJvdW5jZSIsIm9uSGVhZFJvd0RhdGFDaGFuZ2UiLCJoZWFkUm93SW5kZXgiLCJvbk5ld1Jvd0FkZCIsInJvd0FycmF5IiwibWFwIiwiaGVhZFJvdyIsInB1c2giLCJvbk5ld1Jvd0Fib3ZlQWRkIiwidW5zaGlmdCIsIm9uTmV3Q29sdW1uQWRkIiwibmV3QXJyYXlSb3dzIiwibmV3QXJyYXlIZWFkUm93cyIsIm9uTmV3Q29sdW1uTGVmdEFkZCIsIm9uUm93RGVsZXRlIiwicG9wIiwib25Sb3dBYm92ZURlbGV0ZSIsInNoaWZ0Iiwib25Db2x1bW5EZWxldGUiLCJvbkNvbHVtbkxlZnREZWxldGUiLCJpbm5lclJlZiIsImRyYWdnYWJsZVByb3BzIiwiZSIsInRhcmdldCIsInZhbHVlIiwicm93RGF0YSIsImRyYWdIYW5kbGVQcm9wcyJdLCJtYXBw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QSxxQkFERixlQUVFO0FBQUsscUJBQU8sRUFBRU0sa0JBQWQ7QUFBa0MsdUJBQVMsRUFBQyxnQkFBNUM7QUFBNkQsaUJBQUcsc0JBQWhFO0FBQXdGLG9CQUFNLEVBQUUsRUFBaEc7QUFBb0csbUJBQUssRUFBRTtBQUEzRztBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFMRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBWEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBckNGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURGLGVBNkRFO0FBQUssZUFBUyxFQUFDLHNGQUFmO0FBQUEsOEJBQ0UscUVBQUMsaURBQUQ7QUFBTyxlQUFPLEVBQUU7QUFBQSxpQkFBTW5ELFdBQVcsQ0FBQ0QsS0FBSyxDQUFDVSxLQUFQLENBQWpCO0FBQUEsU0FBaEI7QUFBZ0QsaUJBQVMsRUFBQyxnQkFBMUQ7QUFBMkUsV0FBRyx1QkFBOUU7QUFBdUcsY0FBTSxFQUFFLEVBQS9HO0FBQW1ILGFBQUssRUFBRTtBQUExSDtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREYsZUFFRSxxRUFBQyxpREFBRCxrQ0FBV1gsUUFBUSxDQUFDNEQsZUFBcEI7QUFBcUMsaUJBQVMsRUFBQyxxQkFBL0M7QUFBcUUsV0FBRyx1QkFBeEU7QUFBaUcsY0FBTSxFQUFFLEVBQXpHO0FBQTZHLGFBQUssRUFBRTtBQUFwSDtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBN0RGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBb0VELENBNVJEOztHQUFNL0QsWTs7S0FBQUEsWTtBQThSU0EsMkVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvZGFzaGJvYXJkL3Byb2plY3RzL1twcm9qZWN0XS9idXNpbmVzcy1wbGFuLjMyN2RlNDFhNzliMDU0NTRkYjQ1LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlQ2FsbGJhY2ssIHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBJbWFnZSBmcm9tICduZXh0L2ltYWdlJztcclxuaW1wb3J0IGdzYXAsIHsgTGluZWFyIH0gZnJvbSAnZ3NhcCc7XHJcbmltcG9ydCBkZWJvdW5jZSBmcm9tICcuLi8uLi8uLi8uLi8uLi91dGlscy9oZWxwZXJzJztcclxuaW1wb3J0IFJvdXRlciBmcm9tICduZXh0L3JvdXRlcic7XHJcblxyXG5jb25zdCBUYWJsZUVsZW1lbnQgPSAoeyBjdXJyZW50SW5kZXgsIHRhYmxlVXBkYXRlLCBwcm92aWRlZCwgZmllbGQsIGRlbGV0ZUZpZWxkIH0pID0+IHtcclxuICBjb25zb2xlLmxvZyhmaWVsZCk7XHJcbiAgY29uc3QgW25ld0ZpZWxkLCBzZXROZXdGaWVsZF0gPSB1c2VTdGF0ZSgpO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYCR7ZmllbGQuaW5kZXh9Y29udGFpbmVyYCkgJiZcclxuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYCR7ZmllbGQuaW5kZXh9Y29udGFpbmVyYCkuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VlbnRlcicsICgpID0+IHtcclxuICAgICAgICBnc2FwLnRvKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGAke2ZpZWxkLmluZGV4fXRhYmxlYCksIHtcclxuICAgICAgICAgIGhlaWdodDogODAsXHJcbiAgICAgICAgICBtYXJnaW5Ub3A6IDEwLFxyXG4gICAgICAgICAgZHVyYXRpb246IDAuOCxcclxuICAgICAgICAgIHRyYW5zZm9ybU9yaWdpbjogJ3RvcCcsXHJcbiAgICAgICAgICBlYXNlOiBMaW5lYXIsXHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH0pO1xyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYCR7ZmllbGQuaW5kZXh9Y29udGFpbmVyYCkgJiZcclxuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYCR7ZmllbGQuaW5kZXh9Y29udGFpbmVyYCkuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VsZWF2ZScsICgpID0+IHtcclxuICAgICAgICBnc2FwLnRvKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGAke2ZpZWxkLmluZGV4fXRhYmxlYCksIHtcclxuICAgICAgICAgIGhlaWdodDogMCxcclxuICAgICAgICAgIG1hcmdpblRvcDogMCxcclxuICAgICAgICAgIGR1cmF0aW9uOiAwLjgsXHJcbiAgICAgICAgICB0cmFuc2Zvcm1PcmlnaW46ICd0b3AnLFxyXG4gICAgICAgICAgZWFzZTogTGluZWFyLFxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9KTtcclxuICB9LCBbXSk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBzZXROZXdGaWVsZChmaWVsZCk7XHJcbiAgfSwgW10pO1xyXG5cclxuICBjb25zdCBvblJvd0RhdGFDaGFuZ2UgPSAoZGF0YSwgcm93SW5kZXgsIHJvd0RhdGFJbmRleCkgPT4ge1xyXG4gICAgY29uc3QgbmV3QXJyYXkgPSBbLi4ubmV3RmllbGQucm93c107XHJcbiAgICBuZXdBcnJheVtyb3dJbmRleF0ucm93W3Jvd0RhdGFJbmRleF0gPSBkYXRhO1xyXG4gICAgY29uc3QgdXBkYXRlZEZpZWxkID0ge1xyXG4gICAgICBoZWFkUm93czogZmllbGQuaGVhZFJvd3MsXHJcbiAgICAgIHJvd3M6IG5ld0FycmF5LFxyXG4gICAgICBpbmRleDogZmllbGQuaW5kZXgsXHJcbiAgICAgIHRhYmxlSWQ6IGZpZWxkLnRhYmxlSWQsXHJcbiAgICAgIHR5cGU6ICd0YWJsZScsXHJcbiAgICAgIGN1cnJlbnRJbmRleCxcclxuICAgIH07XHJcbiAgICBzZXROZXdGaWVsZCh1cGRhdGVkRmllbGQpO1xyXG4gICAgLy8gRmlyZWJhc2UgdXBkYXRlXHJcbiAgICBkYXRhYmFzZVVwZGF0ZSh1cGRhdGVkRmllbGQpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGRhdGFiYXNlVXBkYXRlID0gdXNlQ2FsbGJhY2soXHJcbiAgICBkZWJvdW5jZShhc3luYyAoZGF0YSkgPT4ge1xyXG4gICAgICB0YWJsZVVwZGF0ZShkYXRhLCBjdXJyZW50SW5kZXgsIGZpZWxkLnRhYmxlSWQsIGZpZWxkLmluZGV4KTtcclxuICAgIH0sIDUwMCksXHJcbiAgICBbXVxyXG4gICk7XHJcblxyXG4gIGNvbnN0IG9uSGVhZFJvd0RhdGFDaGFuZ2UgPSAoZGF0YSwgaGVhZFJvd0luZGV4KSA9PiB7XHJcbiAgICBjb25zb2xlLmxvZyhkYXRhKTtcclxuICAgIGNvbnN0IG5ld0FycmF5ID0gWy4uLm5ld0ZpZWxkLmhlYWRSb3dzXTtcclxuICAgIG5ld0FycmF5W2hlYWRSb3dJbmRleF0gPSBkYXRhO1xyXG4gICAgY29uc3QgdXBkYXRlZEZpZWxkID0ge1xyXG4gICAgICBoZWFkUm93czogbmV3QXJyYXksXHJcbiAgICAgIHJvd3M6IGZpZWxkLnJvd3MsXHJcbiAgICAgIGluZGV4OiBmaWVsZC5pbmRleCxcclxuICAgICAgdGFibGVJZDogZmllbGQudGFibGVJZCxcclxuICAgICAgdHlwZTogJ3RhYmxlJyxcclxuICAgIH07XHJcbiAgICBzZXROZXdGaWVsZCh1cGRhdGVkRmllbGQpO1xyXG4gICAgLy8gRmlyZWJhc2UgdXBkYXRlXHJcbiAgICBkYXRhYmFzZVVwZGF0ZSh1cGRhdGVkRmllbGQpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IG9uTmV3Um93QWRkID0gKCkgPT4ge1xyXG4gICAgY29uc3QgbmV3QXJyYXkgPSBbLi4ubmV3RmllbGQucm93c107XHJcbiAgICBjb25zb2xlLmxvZyhuZXdBcnJheSk7XHJcbiAgICBjb25zdCByb3dBcnJheSA9IFtdO1xyXG4gICAgbmV3RmllbGQuaGVhZFJvd3MubWFwKChoZWFkUm93KSA9PiByb3dBcnJheS5wdXNoKCcnKSk7XHJcbiAgICBuZXdBcnJheS5wdXNoKHtcclxuICAgICAgcm93OiByb3dBcnJheSxcclxuICAgIH0pO1xyXG4gICAgY29uc3QgdXBkYXRlZEZpZWxkID0ge1xyXG4gICAgICBoZWFkUm93czogZmllbGQuaGVhZFJvd3MsXHJcbiAgICAgIHJvd3M6IG5ld0FycmF5LFxyXG4gICAgICBpbmRleDogZmllbGQuaW5kZXgsXHJcbiAgICAgIHRhYmxlSWQ6IGZpZWxkLnRhYmxlSWQsXHJcbiAgICAgIHR5cGU6ICd0YWJsZScsXHJcbiAgICB9O1xyXG4gICAgc2V0TmV3RmllbGQodXBkYXRlZEZpZWxkKTtcclxuICAgIC8vIElmIGVtcHR5LCB3b24ndCBiZSB1cGRhdGVkIHRvIGZpcmViYXNlXHJcbiAgICBkYXRhYmFzZVVwZGF0ZSh1cGRhdGVkRmllbGQpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IG9uTmV3Um93QWJvdmVBZGQgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBuZXdBcnJheSA9IFsuLi5uZXdGaWVsZC5yb3dzXTtcclxuICAgIGNvbnN0IHJvd0FycmF5ID0gW107XHJcbiAgICBuZXdGaWVsZC5oZWFkUm93cy5tYXAoKGhlYWRSb3cpID0+IHJvd0FycmF5LnB1c2goJycpKTtcclxuICAgIG5ld0FycmF5LnVuc2hpZnQoe1xyXG4gICAgICByb3c6IHJvd0FycmF5LFxyXG4gICAgfSk7XHJcbiAgICBjb25zdCB1cGRhdGVkRmllbGQgPSB7XHJcbiAgICAgIGhlYWRSb3dzOiBmaWVsZC5oZWFkUm93cyxcclxuICAgICAgcm93czogbmV3QXJyYXksXHJcbiAgICAgIGluZGV4OiBmaWVsZC5pbmRleCxcclxuICAgICAgdGFibGVJZDogZmllbGQudGFibGVJZCxcclxuICAgICAgdHlwZTogJ3RhYmxlJyxcclxuICAgIH07XHJcbiAgICBzZXROZXdGaWVsZCh1cGRhdGVkRmllbGQpO1xyXG4gICAgLy8gSWYgZW1wdHksIHdvbid0IGJlIHVwZGF0ZWQgdG8gZmlyZWJhc2VcclxuICAgIGRhdGFiYXNlVXBkYXRlKHVwZGF0ZWRGaWVsZCk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3Qgb25OZXdDb2x1bW5BZGQgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBuZXdBcnJheVJvd3MgPSBbLi4ubmV3RmllbGQucm93c107XHJcbiAgICBuZXdBcnJheVJvd3MubWFwKChyb3cpID0+IHtcclxuICAgICAgY29uc29sZS5sb2cocm93KTtcclxuICAgICAgcm93LnJvdy5wdXNoKCcnKTtcclxuICAgIH0pO1xyXG4gICAgY29uc3QgbmV3QXJyYXlIZWFkUm93cyA9IFsuLi5uZXdGaWVsZC5oZWFkUm93c107XHJcbiAgICBuZXdBcnJheUhlYWRSb3dzLnB1c2goJycpO1xyXG4gICAgY29uc3QgdXBkYXRlZEZpZWxkID0ge1xyXG4gICAgICBoZWFkUm93czogbmV3QXJyYXlIZWFkUm93cyxcclxuICAgICAgcm93czogbmV3QXJyYXlSb3dzLFxyXG4gICAgICBpbmRleDogZmllbGQuaW5kZXgsXHJcbiAgICAgIHRhYmxlSWQ6IGZpZWxkLnRhYmxlSWQsXHJcbiAgICAgIHR5cGU6ICd0YWJsZScsXHJcbiAgICB9O1xyXG4gICAgc2V0TmV3RmllbGQodXBkYXRlZEZpZWxkKTtcclxuICAgIC8vIEZpcmViYXNlIHVwZGF0ZVxyXG4gICAgZGF0YWJhc2VVcGRhdGUodXBkYXRlZEZpZWxkKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBvbk5ld0NvbHVtbkxlZnRBZGQgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBuZXdBcnJheVJvd3MgPSBbLi4ubmV3RmllbGQucm93c107XHJcbiAgICBuZXdBcnJheVJvd3MubWFwKChyb3cpID0+IHtcclxuICAgICAgcm93LnJvdy51bnNoaWZ0KCcnKTtcclxuICAgIH0pO1xyXG4gICAgY29uc3QgbmV3QXJyYXlIZWFkUm93cyA9IFsuLi5uZXdGaWVsZC5oZWFkUm93c107XHJcbiAgICBuZXdBcnJheUhlYWRSb3dzLnVuc2hpZnQoJycpO1xyXG4gICAgY29uc3QgdXBkYXRlZEZpZWxkID0ge1xyXG4gICAgICBoZWFkUm93czogbmV3QXJyYXlIZWFkUm93cyxcclxuICAgICAgcm93czogbmV3QXJyYXlSb3dzLFxyXG4gICAgICBpbmRleDogZmllbGQuaW5kZXgsXHJcbiAgICAgIHRhYmxlSWQ6IGZpZWxkLnRhYmxlSWQsXHJcbiAgICAgIHR5cGU6ICd0YWJsZScsXHJcbiAgICB9O1xyXG4gICAgc2V0TmV3RmllbGQodXBkYXRlZEZpZWxkKTtcclxuICAgIC8vIEZpcmViYXNlIHVwZGF0ZVxyXG4gICAgZGF0YWJhc2VVcGRhdGUodXBkYXRlZEZpZWxkKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBvblJvd0RlbGV0ZSA9ICgpID0+IHtcclxuICAgIGNvbnN0IG5ld0FycmF5ID0gWy4uLm5ld0ZpZWxkLnJvd3NdO1xyXG4gICAgbmV3QXJyYXkucG9wKCk7XHJcbiAgICBjb25zdCB1cGRhdGVkRmllbGQgPSB7XHJcbiAgICAgIGhlYWRSb3dzOiBmaWVsZC5oZWFkUm93cyxcclxuICAgICAgcm93czogbmV3QXJyYXksXHJcbiAgICAgIGluZGV4OiBmaWVsZC5pbmRleCxcclxuICAgICAgdGFibGVJZDogZmllbGQudGFibGVJZCxcclxuICAgICAgdHlwZTogJ3RhYmxlJyxcclxuICAgIH07XHJcbiAgICBzZXROZXdGaWVsZCh1cGRhdGVkRmllbGQpO1xyXG4gICAgLy8gSWYgZW1wdHksIHdvbid0IGJlIHVwZGF0ZWQgdG8gZmlyZWJhc2VcclxuICAgIGRhdGFiYXNlVXBkYXRlKHVwZGF0ZWRGaWVsZCk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3Qgb25Sb3dBYm92ZURlbGV0ZSA9ICgpID0+IHtcclxuICAgIGNvbnN0IG5ld0FycmF5ID0gWy4uLm5ld0ZpZWxkLnJvd3NdO1xyXG4gICAgbmV3QXJyYXkuc2hpZnQoKTtcclxuICAgIGNvbnN0IHVwZGF0ZWRGaWVsZCA9IHtcclxuICAgICAgaGVhZFJvd3M6IGZpZWxkLmhlYWRSb3dzLFxyXG4gICAgICByb3dzOiBuZXdBcnJheSxcclxuICAgICAgaW5kZXg6IGZpZWxkLmluZGV4LFxyXG4gICAgICB0YWJsZUlkOiBmaWVsZC50YWJsZUlkLFxyXG4gICAgICB0eXBlOiAndGFibGUnLFxyXG4gICAgfTtcclxuICAgIHNldE5ld0ZpZWxkKHVwZGF0ZWRGaWVsZCk7XHJcbiAgICAvLyBJZiBlbXB0eSwgd29uJ3QgYmUgdXBkYXRlZCB0byBmaXJlYmFzZVxyXG4gICAgZGF0YWJhc2VVcGRhdGUodXBkYXRlZEZpZWxkKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBvbkNvbHVtbkRlbGV0ZSA9ICgpID0+IHtcclxuICAgIGNvbnN0IG5ld0FycmF5Um93cyA9IFsuLi5uZXdGaWVsZC5yb3dzXTtcclxuICAgIG5ld0FycmF5Um93cy5tYXAoKHJvdykgPT4ge1xyXG4gICAgICByb3cucm93LnBvcCgpO1xyXG4gICAgfSk7XHJcbiAgICBjb25zdCBuZXdBcnJheUhlYWRSb3dzID0gWy4uLm5ld0ZpZWxkLmhlYWRSb3dzXTtcclxuICAgIG5ld0FycmF5SGVhZFJvd3MucG9wKCk7XHJcbiAgICBjb25zdCB1cGRhdGVkRmllbGQgPSB7XHJcbiAgICAgIGhlYWRSb3dzOiBuZXdBcnJheUhlYWRSb3dzLFxyXG4gICAgICByb3dzOiBuZXdBcnJheVJvd3MsXHJcbiAgICAgIGluZGV4OiBmaWVsZC5pbmRleCxcclxuICAgICAgdGFibGVJZDogZmllbGQudGFibGVJZCxcclxuICAgICAgdHlwZTogJ3RhYmxlJyxcclxuICAgIH07XHJcbiAgICBzZXROZXdGaWVsZCh1cGRhdGVkRmllbGQpO1xyXG4gICAgLy8gRmlyZWJhc2UgdXBkYXRlXHJcbiAgICBkYXRhYmFzZVVwZGF0ZSh1cGRhdGVkRmllbGQpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IG9uQ29sdW1uTGVmdERlbGV0ZSA9ICgpID0+IHtcclxuICAgIGNvbnN0IG5ld0FycmF5Um93cyA9IFsuLi5uZXdGaWVsZC5yb3dzXTtcclxuICAgIG5ld0FycmF5Um93cy5tYXAoKHJvdykgPT4ge1xyXG4gICAgICByb3cucm93LnNoaWZ0KCk7XHJcbiAgICB9KTtcclxuICAgIGNvbnN0IG5ld0FycmF5SGVhZFJvd3MgPSBbLi4ubmV3RmllbGQuaGVhZFJvd3NdO1xyXG4gICAgbmV3QXJyYXlIZWFkUm93cy5zaGlmdCgpO1xyXG4gICAgY29uc3QgdXBkYXRlZEZpZWxkID0ge1xyXG4gICAgICBoZWFkUm93czogbmV3QXJyYXlIZWFkUm93cyxcclxuICAgICAgcm93czogbmV3QXJyYXlSb3dzLFxyXG4gICAgICBpbmRleDogZmllbGQuaW5kZXgsXHJcbiAgICAgIHRhYmxlSWQ6IGZpZWxkLnRhYmxlSWQsXHJcbiAgICAgIHR5cGU6ICd0YWJsZScsXHJcbiAgICB9O1xyXG4gICAgc2V0TmV3RmllbGQodXBkYXRlZEZpZWxkKTtcclxuICAgIC8vIEZpcmViYXNlIHVwZGF0ZVxyXG4gICAgZGF0YWJhc2VVcGRhdGUodXBkYXRlZEZpZWxkKTtcclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiByZWY9e3Byb3ZpZGVkLmlubmVyUmVmfSB7Li4ucHJvdmlkZWQuZHJhZ2dhYmxlUHJvcHN9IGNsYXNzTmFtZT1cInctZnVsbCBncmlkIGdyaWQtY29scy0xMmZyIGp1c3RpZnktaXRlbXMtY2VudGVyIGl0ZW1zLWNlbnRlciBtdC02XCI+XHJcbiAgICAgIDxkaXZcclxuICAgICAgICBpZD17YCR7ZmllbGQuaW5kZXh9Y29udGFpbmVyYH1cclxuICAgICAgICBjbGFzc05hbWU9XCJjb2wtc3RhcnQtMiBjb2wtZW5kLTEyIHJlbGF0aXZlIGZsZXggZmxleC1jb2wgaC1mdWxsIHctZnVsbCBmbGV4IHB4LTggcHktOCByb3VuZGVkLTJ4bCBiZy13aGl0ZSBkYXJrOmJnLWJhY2tncm91bmRcIlxyXG4gICAgICA+XHJcbiAgICAgICAgPHRhYmxlIGNsYXNzTmFtZT1cInRhYmxlLWVsZW1lbnRcIj5cclxuICAgICAgICAgIDx0aGVhZD5cclxuICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgIHtuZXdGaWVsZCAmJlxyXG4gICAgICAgICAgICAgICAgbmV3RmllbGQuaGVhZFJvd3MubWFwKChyb3csIGhlYWRSb3dJbmRleCkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICA8dGg+XHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LWZ1bGwgYmctcHJpbWFyeSB0ZXh0LWJhY2tncm91bmQgZm9jdXM6b3V0bGluZS1ub25lXCJcclxuICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtyb3d9XHJcbiAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IG9uSGVhZFJvd0RhdGFDaGFuZ2UoZS50YXJnZXQudmFsdWUsIGhlYWRSb3dJbmRleCl9XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgPC90aD5cclxuICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgPC90aGVhZD5cclxuICAgICAgICAgIDx0Ym9keT5cclxuICAgICAgICAgICAge25ld0ZpZWxkICYmXHJcbiAgICAgICAgICAgICAgbmV3RmllbGQucm93cy5tYXAoKHJvdywgcm93SW5kZXgpID0+IChcclxuICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAge3Jvdy5yb3cubWFwKChyb3dEYXRhLCByb3dEYXRhSW5kZXgpID0+IChcclxuICAgICAgICAgICAgICAgICAgICA8dGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy1mdWxsIGJnLXdoaXRlIGZvY3VzOm91dGxpbmUtbm9uZSBib3JkZXItbCBib3JkZXItcHJpbWFyeWRhcmsgcGwtMVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtyb3dEYXRhfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IG9uUm93RGF0YUNoYW5nZShlLnRhcmdldC52YWx1ZSwgcm93SW5kZXgsIHJvd0RhdGFJbmRleCl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgIDwvdGJvZHk+XHJcbiAgICAgICAgPC90YWJsZT5cclxuICAgICAgICB7LyogPGRpdiBpZD17YCR7ZmllbGQuaW5kZXh9dGFibGVgfSBjbGFzc05hbWU9J3ctZnVsbCBvdmVyZmxvdy1hdXRvIGgtMCc+PC9kaXY+ICovfVxyXG4gICAgICAgIDxkaXYgaWQ9e2Ake2ZpZWxkLmluZGV4fXRhYmxlYH0gY2xhc3NOYW1lPVwidy1mdWxsIG92ZXJmbG93LWhpZGRlbiBoLTAgZmxleCBqdXN0aWZ5LWJldHdlZW4gaXRlbXMtY2VudGVyIGdhcC00XCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQgZ3JpZC1mbG93LXJvdyBncmlkLXJvd3MtMmZyIGgtZnVsbFwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXhcIj5cclxuICAgICAgICAgICAgICA8aW1nIG9uQ2xpY2s9e29uTmV3Um93QWRkfSBjbGFzc05hbWU9XCJjdXJzb3ItcG9pbnRlclwiIHNyYz17YC90YWJsZS9yb3ctYWRkLnN2Z2B9IGhlaWdodD17MjJ9IHdpZHRoPXsyMn0gLz5cclxuICAgICAgICAgICAgICA8aW1nIG9uQ2xpY2s9e29uUm93RGVsZXRlfSBjbGFzc05hbWU9XCJjdXJzb3ItcG9pbnRlciBtbC0yXCIgc3JjPXtgL3RhYmxlL3JlbW92ZTEuc3ZnYH0gaGVpZ2h0PXsyNn0gd2lkdGg9ezI2fSAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4XCI+XHJcbiAgICAgICAgICAgICAgPGltZyBvbkNsaWNrPXtvbk5ld1Jvd0Fib3ZlQWRkfSBjbGFzc05hbWU9XCJjdXJzb3ItcG9pbnRlclwiIHNyYz17YC90YWJsZS9yb3ctYWRkLWFib3ZlLnN2Z2B9IGhlaWdodD17MjJ9IHdpZHRoPXsyMn0gLz5cclxuICAgICAgICAgICAgICA8aW1nIG9uQ2xpY2s9e29uUm93QWJvdmVEZWxldGV9IGNsYXNzTmFtZT1cImN1cnNvci1wb2ludGVyIG1sLTJcIiBzcmM9e2AvdGFibGUvcmVtb3ZlMS5zdmdgfSBoZWlnaHQ9ezI2fSB3aWR0aD17MjZ9IC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQgZ3JpZC1mbG93LXJvdyBncmlkLXJvd3MtMmZyIGgtZnVsbFwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXhcIj5cclxuICAgICAgICAgICAgICA8aW1nIG9uQ2xpY2s9e29uTmV3Q29sdW1uQWRkfSBjbGFzc05hbWU9XCJjdXJzb3ItcG9pbnRlciBtci0yXCIgc3JjPXtgL3RhYmxlL2NvbHVtbi1hZGQuc3ZnYH0gaGVpZ2h0PXsyMn0gd2lkdGg9ezIyfSAvPlxyXG4gICAgICAgICAgICAgIDxpbWcgb25DbGljaz17b25Db2x1bW5EZWxldGV9IGNsYXNzTmFtZT1cImN1cnNvci1wb2ludGVyXCIgc3JjPXtgL3RhYmxlL3JlbW92ZTEuc3ZnYH0gaGVpZ2h0PXsyNn0gd2lkdGg9ezI2fSAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4XCI+XHJcbiAgICAgICAgICAgICAgPGltZyBvbkNsaWNrPXtvbk5ld0NvbHVtbkxlZnRBZGR9IGNsYXNzTmFtZT1cImN1cnNvci1wb2ludGVyIG1yLTJcIiBzcmM9e2AvdGFibGUvY29sdW1uLWFkZC1sZWZ0LnN2Z2B9IGhlaWdodD17MjJ9IHdpZHRoPXsyMn0gLz5cclxuICAgICAgICAgICAgICA8aW1nIG9uQ2xpY2s9e29uQ29sdW1uTGVmdERlbGV0ZX0gY2xhc3NOYW1lPVwiY3Vyc29yLXBvaW50ZXJcIiBzcmM9e2AvdGFibGUvcmVtb3ZlMS5zdmdgfSBoZWlnaHQ9ezI2fSB3aWR0aD17MjZ9IC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1zdGFydC0xMiBjb2wtZW5kLTEzIGp1c3RpZnktc2VsZi1jZW50ZXIgc2VsZi1zdGFydCBmbGV4IGZsZXgtY29sIGZsZXgtd3JhcCBnYXAtMlwiPlxyXG4gICAgICAgIDxJbWFnZSBvbkNsaWNrPXsoKSA9PiBkZWxldGVGaWVsZChmaWVsZC5pbmRleCl9IGNsYXNzTmFtZT1cImN1cnNvci1wb2ludGVyXCIgc3JjPXtgL3BsYW4tYmFyL2V4aXQ0LnN2Z2B9IGhlaWdodD17MzZ9IHdpZHRoPXszNn0gLz5cclxuICAgICAgICA8SW1hZ2Ugey4uLnByb3ZpZGVkLmRyYWdIYW5kbGVQcm9wc30gY2xhc3NOYW1lPVwiY3Vyc29yLXBvaW50ZXIgbXQtMlwiIHNyYz17YC9wbGFuLWJhci9kcmFnMi5zdmdgfSBoZWlnaHQ9ezM2fSB3aWR0aD17MzZ9IC8+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFRhYmxlRWxlbWVudDtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==