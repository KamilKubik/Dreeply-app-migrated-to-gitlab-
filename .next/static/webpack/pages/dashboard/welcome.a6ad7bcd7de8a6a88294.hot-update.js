webpackHotUpdate_N_E("pages/dashboard/welcome",{

/***/ "./pages/dashboard/welcome.js":
/*!************************************!*\
  !*** ./pages/dashboard/welcome.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var C_off_saas_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/regenerator */ "./node_modules/next/node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var C_off_saas_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(C_off_saas_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var C_off_saas_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/image */ "./node_modules/next/image.js");
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _lib_newAuth__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../lib/newAuth */ "./lib/newAuth.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _components_dashboard_DesktopNavbar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/dashboard/DesktopNavbar */ "./components/dashboard/DesktopNavbar.js");
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! gsap */ "./node_modules/gsap/index.js");
/* harmony import */ var _components_dashboard_Tippy__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../components/dashboard/Tippy */ "./components/dashboard/Tippy.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _lib_firebase__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../lib/firebase */ "./lib/firebase.js");





var _jsxFileName = "C:\\off-saas\\pages\\dashboard\\welcome.js",
    _s = $RefreshSig$(),
    _this = undefined,
    _s2 = $RefreshSig$();




 // import { IsActiveContext } from '../../components/dashboard/Navbar';







var Redirect = function Redirect(_ref) {
  _s();

  var to = _ref.to;
  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_6__["useRouter"])();
  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function () {
    router.push(to);
  }, [to]);
  return null;
};

_s(Redirect, "vQduR7x+OPXj6PSmJyFnf+hU7bg=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_6__["useRouter"]];
});

_c = Redirect;

var DasboardPage = function DasboardPage() {
  _s2();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(''),
      userName = _useState[0],
      setUserName = _useState[1];

  var activeHover = Object(react__WEBPACK_IMPORTED_MODULE_3__["useContext"])(_components_dashboard_DesktopNavbar__WEBPACK_IMPORTED_MODULE_7__["IsActiveContext"]);

  var _useAuth = Object(_lib_newAuth__WEBPACK_IMPORTED_MODULE_5__["useAuth"])(),
      currentUser = _useAuth.currentUser,
      logOut = _useAuth.logOut;

  var contentRef = Object(react__WEBPACK_IMPORTED_MODULE_3__["useRef"])(null);
  var activeClass = activeHover ? 'ml-52' : 'ml-20';

  if (activeHover) {
    gsap__WEBPACK_IMPORTED_MODULE_8__["default"].to(contentRef.current, {
      marginLeft: '208px',
      ease: gsap__WEBPACK_IMPORTED_MODULE_8__["Power4"].easeOut // duration: 1

    });
  } else {
    gsap__WEBPACK_IMPORTED_MODULE_8__["default"].to(contentRef.current, {
      marginLeft: '80px',
      ease: gsap__WEBPACK_IMPORTED_MODULE_8__["Power4"].easeOut
    });
  }

  if (!currentUser) {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Redirect, {
      to: "/"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 12
    }, _this);
  } // console.log('CURRENT USER - ', currentUser);


  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function () {
    console.log(currentUser);

    var getUser = /*#__PURE__*/function () {
      var _ref2 = Object(C_off_saas_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/C_off_saas_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee() {
        var data;
        return C_off_saas_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return _lib_firebase__WEBPACK_IMPORTED_MODULE_11__["db"].collection('users').doc(currentUser.uid).get();

              case 2:
                data = _context.sent;
                setUserName(data.data().name);

              case 4:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      return function getUser() {
        return _ref2.apply(this, arguments);
      };
    }();

    getUser(); // GSAP

    gsap__WEBPACK_IMPORTED_MODULE_8__["default"].fromTo(contentRef.current, {
      autoAlpha: 0
    }, {
      autoAlpha: 1,
      duration: 2,
      ease: gsap__WEBPACK_IMPORTED_MODULE_8__["Power4"].easeInOut
    });
  }, []);
  console.log('CURRENT USER - ', userName);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_dashboard_Tippy__WEBPACK_IMPORTED_MODULE_9__["default"], {
      welcome: true,
      contentClass: "sm:h-32 sm:w-80 shadow-lg rounded-2xl bg-primary flex justify-center items-center",
      contentText: "Welcome to our startup builder! I'm so happy to see you ",
      contentText1: " If you ever have a problem, just click on me, i'm here to help you. Let's get to work and create a startup that will conquer this world "
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      ref: contentRef,
      className: "h-full ".concat(activeClass, " bg-background dark:bg-secondary"),
      style: {
        transitionTimingFunction: 'linear',
        transitionDuration: '200ms',
        transitionProperty: 'width, margin-left'
      },
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "h-screen w-full relative flex flex-col justify-center items-center",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            className: "text-primarydark dark:text-background text-center text-2xl sm:text-3xl",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
              src: "/gifs/globe.gif",
              height: 50,
              width: 50,
              className: "inline-block relative bottom-1"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 81,
              columnNumber: 15
            }, _this), " Good Afternoon, ", userName]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 80,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 79,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            className: "text-primarydark dark:text-background text-center text-md sm:text-lg",
            children: "How would you like to get started?"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 85,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 84,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
            src: "/software.svg",
            height: 175,
            width: 175
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 88,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 87,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "flex flex-wrap justify-center",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_10___default.a, {
            href: "/dashboard/startup",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
              className: "border border-primarydark dark:border-background text-primarydark dark:text-background font-light py-2 px-6 rounded-2xl m-2 focus:outline-none",
              children: "Plain mockup"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 92,
              columnNumber: 15
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 91,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
            disabled: true,
            className: "border border-primarydark dark:border-background text-primarydark dark:text-background font-light py-2 px-6 rounded-2xl m-2 focus:outline-none cursor-not-allowed",
            children: "Detailed business plan"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 96,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 90,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 78,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 7
    }, _this)]
  }, void 0, true);
};

_s2(DasboardPage, "pKsgbE3PWmEIxoetag/sVauBgVo=", false, function () {
  return [_lib_newAuth__WEBPACK_IMPORTED_MODULE_5__["useAuth"]];
});

_c2 = DasboardPage;
/* harmony default export */ __webpack_exports__["default"] = (DasboardPage);

var _c, _c2;

$RefreshReg$(_c, "Redirect");
$RefreshReg$(_c2, "DasboardPage");

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvZGFzaGJvYXJkL3dlbGNvbWUuanMiXSwibmFtZXMiOlsiUmVkaXJlY3QiLCJ0byIsInJvdXRlciIsInVzZVJvdXRlciIsInVzZUVmZmVjdCIsInB1c2giLCJEYXNib2FyZFBhZ2UiLCJ1c2VTdGF0ZSIsInVzZXJOYW1lIiwic2V0VXNlck5hbWUiLCJhY3RpdmVIb3ZlciIsInVzZUNvbnRleHQiLCJJc0FjdGl2ZUNvbnRleHQiLCJ1c2VBdXRoIiwiY3VycmVudFVzZXIiLCJsb2dPdXQiLCJjb250ZW50UmVmIiwidXNlUmVmIiwiYWN0aXZlQ2xhc3MiLCJnc2FwIiwiY3VycmVudCIsIm1hcmdpbkxlZnQiLCJlYXNlIiwiUG93ZXI0IiwiZWFzZU91dCIsImNvbnNvbGUiLCJsb2ciLCJnZXRVc2VyIiwiZGIiLCJjb2xsZWN0aW9uIiwiZG9jIiwidWlkIiwiZ2V0IiwiZGF0YSIsIm5hbWUiLCJmcm9tVG8iLCJhdXRvQWxwaGEiLCJkdXJhdGlvbiIsImVhc2VJbk91dCIsInRyYW5zaXRpb25UaW1pbmdGdW5jdGlvbiIsInRyYW5zaXRpb25EdXJhdGlvbiIsInRyYW5zaXRpb25Qcm9wZXJ0eSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0NBRUE7O0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxRQUFRLEdBQUcsU0FBWEEsUUFBVyxPQUFZO0FBQUE7O0FBQUEsTUFBVEMsRUFBUyxRQUFUQSxFQUFTO0FBQzNCLE1BQU1DLE1BQU0sR0FBR0MsNkRBQVMsRUFBeEI7QUFFQUMseURBQVMsQ0FBQyxZQUFNO0FBQ2RGLFVBQU0sQ0FBQ0csSUFBUCxDQUFZSixFQUFaO0FBQ0QsR0FGUSxFQUVOLENBQUNBLEVBQUQsQ0FGTSxDQUFUO0FBSUEsU0FBTyxJQUFQO0FBQ0QsQ0FSRDs7R0FBTUQsUTtVQUNXRyxxRDs7O0tBRFhILFE7O0FBVU4s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QUE5QztBQUFrRCx1QkFBUyxFQUFDO0FBQTVEO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBREYsdUJBQ21IakMsUUFEbkg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFERixlQU1FO0FBQUEsaUNBQ0U7QUFBRyxxQkFBUyxFQUFDLHNFQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFORixlQVNFO0FBQUEsaUNBQ0U7QUFBSyxlQUFHLEVBQUMsZUFBVDtBQUF5QixrQkFBTSxFQUFFLEdBQWpDO0FBQXNDLGlCQUFLLEVBQUU7QUFBN0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBVEYsZUFZRTtBQUFLLG1CQUFTLEVBQUMsK0JBQWY7QUFBQSxrQ0FDRSxxRUFBQyxpREFBRDtBQUFNLGdCQUFJLEVBQUMsb0JBQVg7QUFBQSxtQ0FDRTtBQUFRLHVCQUFTLEVBQUMsZ0pBQWxCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFERixlQU1FO0FBQ0Usb0JBQVEsRUFBRSxJQURaO0FBRUUscUJBQVMsRUFBQyxtS0FGWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFORjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBWkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBVEY7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQVBGO0FBQUEsa0JBREY7QUE4Q0QsQ0FwRkQ7O0lBQU1GLFk7VUFHNEJPLG9EOzs7TUFINUJQLFk7QUFzRlNBLDJFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2Rhc2hib2FyZC93ZWxjb21lLmE2YWQ3YmNkN2RlOGE2YTg4Mjk0LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlQ29udGV4dCwgdXNlRWZmZWN0LCB1c2VSZWYsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgSW1hZ2UgZnJvbSAnbmV4dC9pbWFnZSc7XHJcbmltcG9ydCB7IHVzZUF1dGggfSBmcm9tICcuLi8uLi9saWIvbmV3QXV0aCc7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcclxuLy8gaW1wb3J0IHsgSXNBY3RpdmVDb250ZXh0IH0gZnJvbSAnLi4vLi4vY29tcG9uZW50cy9kYXNoYm9hcmQvTmF2YmFyJztcclxuaW1wb3J0IHsgSXNBY3RpdmVDb250ZXh0IH0gZnJvbSAnLi4vLi4vY29tcG9uZW50cy9kYXNoYm9hcmQvRGVza3RvcE5hdmJhcic7XHJcbmltcG9ydCBnc2FwLCB7IFBvd2VyNCwgTGluZWFyIH0gZnJvbSAnZ3NhcCc7XHJcblxyXG5pbXBvcnQgVGlwcHlNb25zdGVyIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvZGFzaGJvYXJkL1RpcHB5JztcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcclxuaW1wb3J0IHsgZGIgfSBmcm9tICcuLi8uLi9saWIvZmlyZWJhc2UnO1xyXG5cclxuY29uc3QgUmVkaXJlY3QgPSAoeyB0byB9KSA9PiB7XHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICByb3V0ZXIucHVzaCh0byk7XHJcbiAgfSwgW3RvXSk7XHJcblxyXG4gIHJldHVybiBudWxsO1xyXG59O1xyXG5cclxuY29uc3QgRGFzYm9hcmRQYWdlID0gKCkgPT4ge1xyXG4gIGNvbnN0IFt1c2VyTmFtZSwgc2V0VXNlck5hbWVdID0gdXNlU3RhdGUoJycpO1xyXG4gIGNvbnN0IGFjdGl2ZUhvdmVyID0gdXNlQ29udGV4dChJc0FjdGl2ZUNvbnRleHQpO1xyXG4gIGNvbnN0IHsgY3VycmVudFVzZXIsIGxvZ091dCB9ID0gdXNlQXV0aCgpO1xyXG4gIGNvbnN0IGNvbnRlbnRSZWYgPSB1c2VSZWYobnVsbCk7XHJcblxyXG4gIGNvbnN0IGFjdGl2ZUNsYXNzID0gYWN0aXZlSG92ZXIgPyAnbWwtNTInIDogJ21sLTIwJztcclxuXHJcbiAgaWYgKGFjdGl2ZUhvdmVyKSB7XHJcbiAgICBnc2FwLnRvKGNvbnRlbnRSZWYuY3VycmVudCwge1xyXG4gICAgICBtYXJnaW5MZWZ0OiAnMjA4cHgnLFxyXG4gICAgICBlYXNlOiBQb3dlcjQuZWFzZU91dCxcclxuICAgICAgLy8gZHVyYXRpb246IDFcclxuICAgIH0pO1xyXG4gIH0gZWxzZSB7XHJcbiAgICBnc2FwLnRvKGNvbnRlbnRSZWYuY3VycmVudCwgeyBtYXJnaW5MZWZ0OiAnODBweCcsIGVhc2U6IFBvd2VyNC5lYXNlT3V0IH0pO1xyXG4gIH1cclxuXHJcbiAgaWYgKCFjdXJyZW50VXNlcikge1xyXG4gICAgcmV0dXJuIDxSZWRpcmVjdCB0bz1cIi9cIiAvPjtcclxuICB9XHJcblxyXG4gIC8vIGNvbnNvbGUubG9nKCdDVVJSRU5UIFVTRVIgLSAnLCBjdXJyZW50VXNlcik7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zb2xlLmxvZyhjdXJyZW50VXNlcik7XHJcbiAgICBjb25zdCBnZXRVc2VyID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICBjb25zdCBkYXRhID0gYXdhaXQgZGIuY29sbGVjdGlvbigndXNlcnMnKS5kb2MoY3VycmVudFVzZXIudWlkKS5nZXQoKTtcclxuICAgICAgc2V0VXNlck5hbWUoZGF0YS5kYXRhKCkubmFtZSk7XHJcbiAgICB9O1xyXG4gICAgZ2V0VXNlcigpO1xyXG5cclxuICAgIC8vIEdTQVBcclxuICAgIGdzYXAuZnJvbVRvKGNvbnRlbnRSZWYuY3VycmVudCwgeyBhdXRvQWxwaGE6IDAgfSwgeyBhdXRvQWxwaGE6IDEsIGR1cmF0aW9uOiAyLCBlYXNlOiBQb3dlcjQuZWFzZUluT3V0IH0pO1xyXG4gIH0sIFtdKTtcclxuXHJcbiAgY29uc29sZS5sb2coJ0NVUlJFTlQgVVNFUiAtICcsIHVzZXJOYW1lKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxUaXBweU1vbnN0ZXJcclxuICAgICAgICB3ZWxjb21lXHJcbiAgICAgICAgY29udGVudENsYXNzPVwic206aC0zMiBzbTp3LTgwIHNoYWRvdy1sZyByb3VuZGVkLTJ4bCBiZy1wcmltYXJ5IGZsZXgganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyXCJcclxuICAgICAgICBjb250ZW50VGV4dD1cIldlbGNvbWUgdG8gb3VyIHN0YXJ0dXAgYnVpbGRlciEgSSdtIHNvIGhhcHB5IHRvIHNlZSB5b3UgXCJcclxuICAgICAgICBjb250ZW50VGV4dDE9XCIgSWYgeW91IGV2ZXIgaGF2ZSBhIHByb2JsZW0sIGp1c3QgY2xpY2sgb24gbWUsIGknbSBoZXJlIHRvIGhlbHAgeW91LiBMZXQncyBnZXQgdG8gd29yayBhbmQgY3JlYXRlIGEgc3RhcnR1cCB0aGF0IHdpbGwgY29ucXVlciB0aGlzIHdvcmxkIFwiXHJcbiAgICAgIC8+XHJcbiAgICAgIDxkaXZcclxuICAgICAgICByZWY9e2NvbnRlbnRSZWZ9XHJcbiAgICAgICAgY2xhc3NOYW1lPXtgaC1mdWxsICR7YWN0aXZlQ2xhc3N9IGJnLWJhY2tncm91bmQgZGFyazpiZy1zZWNvbmRhcnlgfVxyXG4gICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICB0cmFuc2l0aW9uVGltaW5nRnVuY3Rpb246ICdsaW5lYXInLFxyXG4gICAgICAgICAgdHJhbnNpdGlvbkR1cmF0aW9uOiAnMjAwbXMnLFxyXG4gICAgICAgICAgdHJhbnNpdGlvblByb3BlcnR5OiAnd2lkdGgsIG1hcmdpbi1sZWZ0JyxcclxuICAgICAgICB9fVxyXG4gICAgICA+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoLXNjcmVlbiB3LWZ1bGwgcmVsYXRpdmUgZmxleCBmbGV4LWNvbCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXJcIj5cclxuICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtcHJpbWFyeWRhcmsgZGFyazp0ZXh0LWJhY2tncm91bmQgdGV4dC1jZW50ZXIgdGV4dC0yeGwgc206dGV4dC0zeGxcIj5cclxuICAgICAgICAgICAgICA8aW1nIHNyYz1cIi9naWZzL2dsb2JlLmdpZlwiIGhlaWdodD17NTB9IHdpZHRoPXs1MH0gY2xhc3NOYW1lPVwiaW5saW5lLWJsb2NrIHJlbGF0aXZlIGJvdHRvbS0xXCIgLz4gR29vZCBBZnRlcm5vb24sIHt1c2VyTmFtZX1cclxuICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXByaW1hcnlkYXJrIGRhcms6dGV4dC1iYWNrZ3JvdW5kIHRleHQtY2VudGVyIHRleHQtbWQgc206dGV4dC1sZ1wiPkhvdyB3b3VsZCB5b3UgbGlrZSB0byBnZXQgc3RhcnRlZD88L3A+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxpbWcgc3JjPVwiL3NvZnR3YXJlLnN2Z1wiIGhlaWdodD17MTc1fSB3aWR0aD17MTc1fSAvPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC13cmFwIGp1c3RpZnktY2VudGVyXCI+XHJcbiAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvZGFzaGJvYXJkL3N0YXJ0dXBcIj5cclxuICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJvcmRlciBib3JkZXItcHJpbWFyeWRhcmsgZGFyazpib3JkZXItYmFja2dyb3VuZCB0ZXh0LXByaW1hcnlkYXJrIGRhcms6dGV4dC1iYWNrZ3JvdW5kIGZvbnQtbGlnaHQgcHktMiBweC02IHJvdW5kZWQtMnhsIG0tMiBmb2N1czpvdXRsaW5lLW5vbmVcIj5cclxuICAgICAgICAgICAgICAgIFBsYWluIG1vY2t1cFxyXG4gICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICBkaXNhYmxlZD17dHJ1ZX1cclxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJib3JkZXIgYm9yZGVyLXByaW1hcnlkYXJrIGRhcms6Ym9yZGVyLWJhY2tncm91bmQgdGV4dC1wcmltYXJ5ZGFyayBkYXJrOnRleHQtYmFja2dyb3VuZCBmb250LWxpZ2h0IHB5LTIgcHgtNiByb3VuZGVkLTJ4bCBtLTIgZm9jdXM6b3V0bGluZS1ub25lIGN1cnNvci1ub3QtYWxsb3dlZFwiXHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICBEZXRhaWxlZCBidXNpbmVzcyBwbGFuXHJcbiAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC8+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IERhc2JvYXJkUGFnZTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==