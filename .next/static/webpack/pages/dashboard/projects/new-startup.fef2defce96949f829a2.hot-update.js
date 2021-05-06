webpackHotUpdate_N_E("pages/dashboard/projects/new-startup",{

/***/ "./components/dashboard/Tippy.js":
/*!***************************************!*\
  !*** ./components/dashboard/Tippy.js ***!
  \***************************************/
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
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! gsap */ "./node_modules/gsap/index.js");
/* harmony import */ var _tippyjs_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @tippyjs/react */ "./node_modules/@tippyjs/react/dist/tippy-react.esm.js");
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/image */ "./node_modules/next/image.js");
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_6__);





var _jsxFileName = "C:\\off-saas\\components\\dashboard\\Tippy.js",
    _this = undefined,
    _s = $RefreshSig$();






var TippyMonster = function TippyMonster(_ref) {
  _s();

  var setTippyHelper = _ref.setTippyHelper,
      setWrongNameTippyHelper = _ref.setWrongNameTippyHelper,
      wrongName = _ref.wrongName,
      projectCreator = _ref.projectCreator,
      cashFlow = _ref.cashFlow,
      businessPlan = _ref.businessPlan,
      projectManager = _ref.projectManager,
      contentClass = _ref.contentClass,
      contentText = _ref.contentText,
      contentText1 = _ref.contentText1,
      startups = _ref.startups,
      market = _ref.market,
      model = _ref.model,
      success = _ref.success,
      tippyMonster = _ref.tippyMonster,
      setTippyMonster = _ref.setTippyMonster,
      setCurrentTippy = _ref.setCurrentTippy,
      emptyInput = _ref.emptyInput,
      initialModal = _ref.initialModal,
      vision = _ref.vision,
      product = _ref.product,
      finances = _ref.finances,
      welcome = _ref.welcome;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(false),
      visible = _useState[0],
      setVisible = _useState[1];

  var contentRef = Object(react__WEBPACK_IMPORTED_MODULE_3__["useRef"])(null);
  var tippyRef = Object(react__WEBPACK_IMPORTED_MODULE_3__["useRef"])(); // const [emptyInput, setEmptyInput] = useState(false);

  var show = function show() {
    gsap__WEBPACK_IMPORTED_MODULE_4__["default"].fromTo(tippyRef.current, {
      autoAlpha: 0,
      scale: 0
    }, {
      autoAlpha: 1,
      scale: 1,
      duration: 1,
      transformOrigin: 'bottom right',
      ease: gsap__WEBPACK_IMPORTED_MODULE_4__["Power4"].easeOut
    });
    setVisible(true);
    emptyInput && setCurrentTippy(true); // current tippy jest częścią obsługi problemu, kiedy mamy otwartego tooltipa normalnego i wciskamy, żeby wyświetlić czerwonego
  };

  var hide = /*#__PURE__*/function () {
    var _ref2 = Object(C_off_saas_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/C_off_saas_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee() {
      return C_off_saas_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return gsap__WEBPACK_IMPORTED_MODULE_4__["default"].to(tippyRef.current, {
                autoAlpha: 0,
                scale: 0,
                duration: 1,
                transformOrigin: 'bottom right',
                ease: gsap__WEBPACK_IMPORTED_MODULE_4__["Power4"].easeIn
              });

            case 2:
              emptyInput && setTippyMonster(false);
              setVisible(false);
              emptyInput && setCurrentTippy(false);
              tippyMonster && setTippyHelper(false);
              wrongName && setWrongNameTippyHelper(false);

            case 7:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function hide() {
      return _ref2.apply(this, arguments);
    };
  }();

  var onImageClick = function onImageClick() {
    if (!tippyMonster) {
      visible ? hide() : show();
    }
  };

  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function () {
    // GSAP
    gsap__WEBPACK_IMPORTED_MODULE_4__["default"].fromTo(contentRef.current, {
      autoAlpha: 0
    }, {
      autoAlpha: 1,
      duration: 2,
      transformOrigin: 'bottom right',
      ease: gsap__WEBPACK_IMPORTED_MODULE_4__["Power4"].easeOut
    }); // TIPPY

    setVisible(true);
    emptyInput && setCurrentTippy(true);
  }, []);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_tippyjs_react__WEBPACK_IMPORTED_MODULE_5__["default"] // trigger={tippyMonster}
  , {
    zIndex: visible || tippyMonster ? 22 : 0,
    onShow: show,
    animation: "fade",
    duration: 500,
    touch: true,
    visible: visible || tippyMonster,
    onClickOutside: hide,
    offset: market || model || success || tippyMonster || wrongName ? [-265, -65] : [-220, -65] // placement='left-end'
    ,
    interactive: true,
    content: wrongName && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      ref: tippyRef,
      className: "h-16 w-96 shadow-lg rounded-2xl bg-red flex justify-center items-center focus:outline-none",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
        className: "p-4 text-sm text-center text-white flex justify-center items-center",
        children: "Ops, unfortunately you already have a project with that name!"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 91,
        columnNumber: 13
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "flex items-center justify-center flex-wrap gap-2 mt-2"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 95,
        columnNumber: 13
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 11
    }, _this) || tippyMonster && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      ref: tippyRef,
      className: "h-12 w-96 shadow-lg rounded-2xl bg-red flex justify-center items-center focus:outline-none",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
        className: "py-4 px-2 text-sm text-center text-white flex justify-center items-center",
        children: ["Oops, you have to provide all the information", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
          src: "/project-create/sad.svg",
          height: 18,
          width: 18,
          className: "ml-2 inline-block relative"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 102,
          columnNumber: 15
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 100,
        columnNumber: 13
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "flex items-center justify-center flex-wrap gap-2 mt-2"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 104,
        columnNumber: 13
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 99,
      columnNumber: 11
    }, _this) || /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      ref: tippyRef,
      className: "focus:outline-none ".concat(contentClass),
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "text-primarydark p-4 text-sm text-center text-white",
        children: [contentText, startups && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
            src: "/emojis/cocount.svg",
            height: 22,
            width: 22,
            className: "inline-block"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 112,
            columnNumber: 19
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            className: "inline-block",
            children: "."
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 113,
            columnNumber: 19
          }, _this)]
        }, void 0, true), initialModal && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
            src: "/emojis/hammer.svg",
            height: 22,
            width: 22,
            className: "inline-block"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 118,
            columnNumber: 19
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            className: "inline-block",
            children: "."
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 119,
            columnNumber: 19
          }, _this)]
        }, void 0, true), vision && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
            src: "/emojis/desert.svg",
            height: 22,
            width: 22,
            className: "inline-block relative bottom-0.5"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 124,
            columnNumber: 19
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            className: "inline-block",
            children: "."
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 125,
            columnNumber: 19
          }, _this)]
        }, void 0, true), product && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
            src: "/emojis/ox.svg",
            height: 22,
            width: 22,
            className: "inline-block relative bottom-0.5"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 130,
            columnNumber: 19
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            className: "inline-block",
            children: "."
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 131,
            columnNumber: 19
          }, _this)]
        }, void 0, true), market && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
            src: "/emojis/whale.svg",
            height: 22,
            width: 22,
            className: "inline-block"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 136,
            columnNumber: 19
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            className: "inline-block",
            children: "."
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 137,
            columnNumber: 19
          }, _this)]
        }, void 0, true), finances && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
            src: "/emojis/unicorn.svg",
            height: 22,
            width: 22,
            className: "inline-block relative bottom-0.5"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 142,
            columnNumber: 19
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            className: "inline-block",
            children: "."
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 143,
            columnNumber: 19
          }, _this)]
        }, void 0, true), model && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
            src: "/emojis/pirat.svg",
            height: 22,
            width: 22,
            className: "inline-block"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 148,
            columnNumber: 19
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            className: "inline-block",
            children: "."
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 149,
            columnNumber: 19
          }, _this)]
        }, void 0, true), success && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
            src: "/emojis/star.svg",
            height: 22,
            width: 22,
            className: "inline-block"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 154,
            columnNumber: 19
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            className: "inline-block",
            children: "!"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 155,
            columnNumber: 19
          }, _this)]
        }, void 0, true), welcome && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
            src: "/gifs/hello-hand.gif",
            height: 22,
            width: 22,
            className: "inline-block"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 160,
            columnNumber: 19
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            className: "inline-block",
            children: "."
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 161,
            columnNumber: 19
          }, _this)]
        }, void 0, true), projectManager && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
            src: "/project-manager/octopus.svg",
            height: 20,
            width: 20,
            className: "inline-block relative bottom-0.5"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 166,
            columnNumber: 19
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            className: "inline-block",
            children: "."
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 167,
            columnNumber: 19
          }, _this)]
        }, void 0, true), businessPlan && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
            src: "/business-model/grow.svg",
            height: 20,
            width: 20,
            className: "inline-block relative bottom-0.5 left-1"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 172,
            columnNumber: 19
          }, _this)
        }, void 0, false), cashFlow && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
            src: "/cash-flow/tippy.svg",
            height: 20,
            width: 20,
            className: "inline-block relative bottom-0.5 left-1"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 178,
            columnNumber: 19
          }, _this)
        }, void 0, false), projectCreator && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
            src: "/project-create/bulb.svg",
            height: 20,
            width: 20,
            className: "inline-block relative bottom-0.5 left-1"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 184,
            columnNumber: 19
          }, _this)
        }, void 0, false), contentText1 && contentText1, startups && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
            src: "/emojis/balloon.svg",
            height: 22,
            width: 22,
            className: "inline-block"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 194,
            columnNumber: 19
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            className: "inline-block",
            children: "."
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 195,
            columnNumber: 19
          }, _this)]
        }, void 0, true), vision && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
            src: "/emojis/camel.svg",
            height: 22,
            width: 22,
            className: "inline-block"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 200,
            columnNumber: 19
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            className: "inline-block",
            children: "."
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 201,
            columnNumber: 19
          }, _this)]
        }, void 0, true), product && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
            src: "/emojis/map.svg",
            height: 22,
            width: 22,
            className: "inline-block"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 206,
            columnNumber: 19
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            className: "inline-block",
            children: "."
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 207,
            columnNumber: 19
          }, _this)]
        }, void 0, true), market && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
            src: "/emojis/island.svg",
            height: 22,
            width: 22,
            className: "inline-block"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 212,
            columnNumber: 19
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            className: "inline-block",
            children: "."
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 213,
            columnNumber: 19
          }, _this)]
        }, void 0, true), finances && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
            src: "/emojis/construction.svg",
            height: 22,
            width: 22,
            className: "inline-block"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 218,
            columnNumber: 19
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            className: "inline-block",
            children: "."
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 219,
            columnNumber: 19
          }, _this)]
        }, void 0, true), model && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
            src: "/emojis/popper.svg",
            height: 22,
            width: 22,
            className: "inline-block relative bottom-0.5"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 224,
            columnNumber: 19
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            className: "inline-block",
            children: "!"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 225,
            columnNumber: 19
          }, _this)]
        }, void 0, true), welcome && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
            src: "/gifs/rocket.gif",
            height: 22,
            width: 22,
            className: "inline-block"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 230,
            columnNumber: 19
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            className: "inline-block",
            children: "!"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 231,
            columnNumber: 19
          }, _this)]
        }, void 0, true), projectManager && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
            src: "/project-manager/flower.svg",
            height: 18,
            width: 18,
            className: "inline-block relative bottom-0.5"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 236,
            columnNumber: 19
          }, _this)
        }, void 0, false)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 108,
        columnNumber: 13
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "flex items-center justify-center flex-wrap gap-2 mt-2"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 242,
        columnNumber: 13
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 107,
      columnNumber: 11
    }, _this),
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "fixed flex flex-wrap m-2 bottom-4 right-2 z-50",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_image__WEBPACK_IMPORTED_MODULE_6___default.a, {
        src: "/monsters/monster-two.svg",
        height: 66,
        width: 60,
        className: "cursor-pointer z-50",
        onClick: onImageClick
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 248,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 247,
      columnNumber: 7
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 76,
    columnNumber: 5
  }, _this);
};

_s(TippyMonster, "t2xe/EbRQRm/jWZQkn2ErRetSBw=");

_c = TippyMonster;
/* harmony default export */ __webpack_exports__["default"] = (TippyMonster);

var _c;

$RefreshReg$(_c, "TippyMonster");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9kYXNoYm9hcmQvVGlwcHkuanMiXSwibmFtZXMiOlsiVGlwcHlNb25zdGVyIiwic2V0VGlwcHlIZWxwZXIiLCJzZXRXcm9uZ05hbWVUaXBweUhlbHBlciIsIndyb25nTmFtZSIsInByb2plY3RDcmVhdG9yIiwiY2FzaEZsb3ciLCJidXNpbmVzc1BsYW4iLCJwcm9qZWN0TWFuYWdlciIsImNvbnRlbnRDbGFzcyIsImNvbnRlbnRUZXh0IiwiY29udGVudFRleHQxIiwic3RhcnR1cHMiLCJtYXJrZXQiLCJtb2RlbCIsInN1Y2Nlc3MiLCJ0aXBweU1vbnN0ZXIiLCJzZXRUaXBweU1vbnN0ZXIiLCJzZXRDdXJyZW50VGlwcHkiLCJlbXB0eUlucHV0IiwiaW5pdGlhbE1vZGFsIiwidmlzaW9uIiwicHJvZHVjdCIsImZpbmFuY2VzIiwid2VsY29tZSIsInVzZVN0YXRlIiwidmlzaWJsZSIsInNldFZpc2libGUiLCJjb250ZW50UmVmIiwidXNlUmVmIiwidGlwcHlSZWYiLCJzaG93IiwiZ3NhcCIsImZyb21UbyIsImN1cnJlbnQiLCJhdXRvQWxwaGEiLCJzY2FsZSIsImR1cmF0aW9uIiwidHJhbnNmb3JtT3JpZ2luIiwiZWFzZSIsIlBvd2VyNCIsImVhc2VPdXQiLCJoaWRlIiwidG8iLCJlYXNlSW4iLCJvbkltYWdlQ2xpY2siLCJ1c2VFZmZlY3QiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxZQUFZLEdBQUcsU0FBZkEsWUFBZSxPQXdCZjtBQUFBOztBQUFBLE1BdkJKQyxjQXVCSSxRQXZCSkEsY0F1Qkk7QUFBQSxNQXRCSkMsdUJBc0JJLFFBdEJKQSx1QkFzQkk7QUFBQSxNQXJCSkMsU0FxQkksUUFyQkpBLFNBcUJJO0FBQUEsTUFwQkpDLGNBb0JJLFFBcEJKQSxjQW9CSTtBQUFBLE1BbkJKQyxRQW1CSSxRQW5CSkEsUUFt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QUFBRyxxQkFBUyxFQUFDLGNBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBRkY7QUFBQSx3QkF6SEosRUE4SEdoQixjQUFjLGlCQUNiO0FBQUEsaUNBQ0U7QUFBSyxlQUFHLEVBQUMsNkJBQVQ7QUFBdUMsa0JBQU0sRUFBRSxFQUEvQztBQUFtRCxpQkFBSyxFQUFFLEVBQTFEO0FBQThELHFCQUFTLEVBQUM7QUFBeEU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGLHlCQS9ISjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERixlQXVJRTtBQUFLLGlCQUFTLEVBQUM7QUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBdklGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQS9CTjtBQUFBLDJCQTJLRTtBQUFLLGVBQVMsRUFBQyxnREFBZjtBQUFBLDZCQUNFLHFFQUFDLGlEQUFEO0FBQU8sV0FBRyxFQUFDLDJCQUFYO0FBQXVDLGNBQU0sRUFBRSxFQUEvQztBQUFtRCxhQUFLLEVBQUUsRUFBMUQ7QUFBOEQsaUJBQVMsRUFBQyxxQkFBeEU7QUFBOEYsZUFBTyxFQUFFcUM7QUFBdkc7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUEzS0Y7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBaUxELENBdFBEOztHQUFNNUMsWTs7S0FBQUEsWTtBQXdQU0EsMkVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvZGFzaGJvYXJkL3Byb2plY3RzL25ldy1zdGFydHVwLmZlZjJkZWZjZTk2OTQ5ZjgyOWEyLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCwgdXNlUmVmIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgZ3NhcCwgeyBQb3dlcjQgfSBmcm9tICdnc2FwJztcclxuaW1wb3J0IFRpcHB5IGZyb20gJ0B0aXBweWpzL3JlYWN0JztcclxuaW1wb3J0IEltYWdlIGZyb20gJ25leHQvaW1hZ2UnO1xyXG5cclxuY29uc3QgVGlwcHlNb25zdGVyID0gKHtcclxuICBzZXRUaXBweUhlbHBlcixcclxuICBzZXRXcm9uZ05hbWVUaXBweUhlbHBlcixcclxuICB3cm9uZ05hbWUsXHJcbiAgcHJvamVjdENyZWF0b3IsXHJcbiAgY2FzaEZsb3csXHJcbiAgYnVzaW5lc3NQbGFuLFxyXG4gIHByb2plY3RNYW5hZ2VyLFxyXG4gIGNvbnRlbnRDbGFzcyxcclxuICBjb250ZW50VGV4dCxcclxuICBjb250ZW50VGV4dDEsXHJcbiAgc3RhcnR1cHMsXHJcbiAgbWFya2V0LFxyXG4gIG1vZGVsLFxyXG4gIHN1Y2Nlc3MsXHJcbiAgdGlwcHlNb25zdGVyLFxyXG4gIHNldFRpcHB5TW9uc3RlcixcclxuICBzZXRDdXJyZW50VGlwcHksXHJcbiAgZW1wdHlJbnB1dCxcclxuICBpbml0aWFsTW9kYWwsXHJcbiAgdmlzaW9uLFxyXG4gIHByb2R1Y3QsXHJcbiAgZmluYW5jZXMsXHJcbiAgd2VsY29tZSxcclxufSkgPT4ge1xyXG4gIGNvbnN0IFt2aXNpYmxlLCBzZXRWaXNpYmxlXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBjb250ZW50UmVmID0gdXNlUmVmKG51bGwpO1xyXG4gIGNvbnN0IHRpcHB5UmVmID0gdXNlUmVmKCk7XHJcblxyXG4gIC8vIGNvbnN0IFtlbXB0eUlucHV0LCBzZXRFbXB0eUlucHV0XSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgY29uc3Qgc2hvdyA9ICgpID0+IHtcclxuICAgIGdzYXAuZnJvbVRvKFxyXG4gICAgICB0aXBweVJlZi5jdXJyZW50LFxyXG4gICAgICB7IGF1dG9BbHBoYTogMCwgc2NhbGU6IDAgfSxcclxuICAgICAgeyBhdXRvQWxwaGE6IDEsIHNjYWxlOiAxLCBkdXJhdGlvbjogMSwgdHJhbnNmb3JtT3JpZ2luOiAnYm90dG9tIHJpZ2h0JywgZWFzZTogUG93ZXI0LmVhc2VPdXQgfVxyXG4gICAgKTtcclxuICAgIHNldFZpc2libGUodHJ1ZSk7XHJcbiAgICBlbXB0eUlucHV0ICYmIHNldEN1cnJlbnRUaXBweSh0cnVlKTsgLy8gY3VycmVudCB0aXBweSBqZXN0IGN6xJnFm2NpxIUgb2JzxYJ1Z2kgcHJvYmxlbXUsIGtpZWR5IG1hbXkgb3R3YXJ0ZWdvIHRvb2x0aXBhIG5vcm1hbG5lZ28gaSB3Y2lza2FteSwgxbxlYnkgd3nFm3dpZXRsacSHIGN6ZXJ3b25lZ29cclxuICB9O1xyXG4gIGNvbnN0IGhpZGUgPSBhc3luYyAoKSA9PiB7XHJcbiAgICBhd2FpdCBnc2FwLnRvKHRpcHB5UmVmLmN1cnJlbnQsIHtcclxuICAgICAgYXV0b0FscGhhOiAwLFxyXG4gICAgICBzY2FsZTogMCxcclxuICAgICAgZHVyYXRpb246IDEsXHJcbiAgICAgIHRyYW5zZm9ybU9yaWdpbjogJ2JvdHRvbSByaWdodCcsXHJcbiAgICAgIGVhc2U6IFBvd2VyNC5lYXNlSW4sXHJcbiAgICB9KTtcclxuICAgIGVtcHR5SW5wdXQgJiYgc2V0VGlwcHlNb25zdGVyKGZhbHNlKTtcclxuICAgIHNldFZpc2libGUoZmFsc2UpO1xyXG4gICAgZW1wdHlJbnB1dCAmJiBzZXRDdXJyZW50VGlwcHkoZmFsc2UpO1xyXG4gICAgdGlwcHlNb25zdGVyICYmIHNldFRpcHB5SGVscGVyKGZhbHNlKTtcclxuICAgIHdyb25nTmFtZSAmJiBzZXRXcm9uZ05hbWVUaXBweUhlbHBlcihmYWxzZSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3Qgb25JbWFnZUNsaWNrID0gKCkgPT4ge1xyXG4gICAgaWYgKCF0aXBweU1vbnN0ZXIpIHtcclxuICAgICAgdmlzaWJsZSA/IGhpZGUoKSA6IHNob3coKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgLy8gR1NBUFxyXG4gICAgZ3NhcC5mcm9tVG8oY29udGVudFJlZi5jdXJyZW50LCB7IGF1dG9BbHBoYTogMCB9LCB7IGF1dG9BbHBoYTogMSwgZHVyYXRpb246IDIsIHRyYW5zZm9ybU9yaWdpbjogJ2JvdHRvbSByaWdodCcsIGVhc2U6IFBvd2VyNC5lYXNlT3V0IH0pO1xyXG4gICAgLy8gVElQUFlcclxuICAgIHNldFZpc2libGUodHJ1ZSk7XHJcbiAgICBlbXB0eUlucHV0ICYmIHNldEN1cnJlbnRUaXBweSh0cnVlKTtcclxuICB9LCBbXSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8VGlwcHlcclxuICAgICAgLy8gdHJpZ2dlcj17dGlwcHlNb25zdGVyfVxyXG4gICAgICB6SW5kZXg9e3Zpc2libGUgfHwgdGlwcHlNb25zdGVyID8gMjIgOiAwfVxyXG4gICAgICBvblNob3c9e3Nob3d9XHJcbiAgICAgIGFuaW1hdGlvbj1cImZhZGVcIlxyXG4gICAgICBkdXJhdGlvbj17NTAwfVxyXG4gICAgICB0b3VjaD17dHJ1ZX1cclxuICAgICAgdmlzaWJsZT17dmlzaWJsZSB8fCB0aXBweU1vbnN0ZXJ9XHJcbiAgICAgIG9uQ2xpY2tPdXRzaWRlPXtoaWRlfVxyXG4gICAgICBvZmZzZXQ9e21hcmtldCB8fCBtb2RlbCB8fCBzdWNjZXNzIHx8IHRpcHB5TW9uc3RlciB8fCB3cm9uZ05hbWUgPyBbLTI2NSwgLTY1XSA6IFstMjIwLCAtNjVdfVxyXG4gICAgICAvLyBwbGFjZW1lbnQ9J2xlZnQtZW5kJ1xyXG4gICAgICBpbnRlcmFjdGl2ZT17dHJ1ZX1cclxuICAgICAgY29udGVudD17XHJcbiAgICAgICAgKHdyb25nTmFtZSAmJiAoXHJcbiAgICAgICAgICA8ZGl2IHJlZj17dGlwcHlSZWZ9IGNsYXNzTmFtZT1cImgtMTYgdy05NiBzaGFkb3ctbGcgcm91bmRlZC0yeGwgYmctcmVkIGZsZXgganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyIGZvY3VzOm91dGxpbmUtbm9uZVwiPlxyXG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJwLTQgdGV4dC1zbSB0ZXh0LWNlbnRlciB0ZXh0LXdoaXRlIGZsZXgganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgT3BzLCB1bmZvcnR1bmF0ZWx5IHlvdSBhbHJlYWR5IGhhdmUgYSBwcm9qZWN0IHdpdGggdGhhdCBuYW1lIVxyXG4gICAgICAgICAgICAgIHsvKiA8aW1nIHNyYz1cIi9lbW9qaXMvY3J5aW5nLnN2Z1wiIGhlaWdodD17MjV9IHdpZHRoPXsyNX0gY2xhc3NOYW1lPVwiaW5saW5lLWJsb2NrIHJlbGF0aXZlXCIgLz4gKi99XHJcbiAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBmbGV4LXdyYXAgZ2FwLTIgbXQtMlwiPjwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKSkgfHxcclxuICAgICAgICAodGlwcHlNb25zdGVyICYmIChcclxuICAgICAgICAgIDxkaXYgcmVmPXt0aXBweVJlZn0gY2xhc3NOYW1lPVwiaC0xMiB3LTk2IHNoYWRvdy1sZyByb3VuZGVkLTJ4bCBiZy1yZWQgZmxleCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXIgZm9jdXM6b3V0bGluZS1ub25lXCI+XHJcbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInB5LTQgcHgtMiB0ZXh0LXNtIHRleHQtY2VudGVyIHRleHQtd2hpdGUgZmxleCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICBPb3BzLCB5b3UgaGF2ZSB0byBwcm92aWRlIGFsbCB0aGUgaW5mb3JtYXRpb25cclxuICAgICAgICAgICAgICA8aW1nIHNyYz1cIi9wcm9qZWN0LWNyZWF0ZS9zYWQuc3ZnXCIgaGVpZ2h0PXsxOH0gd2lkdGg9ezE4fSBjbGFzc05hbWU9XCJtbC0yIGlubGluZS1ibG9jayByZWxhdGl2ZVwiIC8+XHJcbiAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBmbGV4LXdyYXAgZ2FwLTIgbXQtMlwiPjwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKSkgfHwgKFxyXG4gICAgICAgICAgPGRpdiByZWY9e3RpcHB5UmVmfSBjbGFzc05hbWU9e2Bmb2N1czpvdXRsaW5lLW5vbmUgJHtjb250ZW50Q2xhc3N9YH0+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1wcmltYXJ5ZGFyayBwLTQgdGV4dC1zbSB0ZXh0LWNlbnRlciB0ZXh0LXdoaXRlXCI+XHJcbiAgICAgICAgICAgICAge2NvbnRlbnRUZXh0fVxyXG4gICAgICAgICAgICAgIHtzdGFydHVwcyAmJiAoXHJcbiAgICAgICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIi9lbW9qaXMvY29jb3VudC5zdmdcIiBoZWlnaHQ9ezIyfSB3aWR0aD17MjJ9IGNsYXNzTmFtZT1cImlubGluZS1ibG9ja1wiIC8+XHJcbiAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImlubGluZS1ibG9ja1wiPi48L3A+XHJcbiAgICAgICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgIHtpbml0aWFsTW9kYWwgJiYgKFxyXG4gICAgICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCIvZW1vamlzL2hhbW1lci5zdmdcIiBoZWlnaHQ9ezIyfSB3aWR0aD17MjJ9IGNsYXNzTmFtZT1cImlubGluZS1ibG9ja1wiIC8+XHJcbiAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImlubGluZS1ibG9ja1wiPi48L3A+XHJcbiAgICAgICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgIHt2aXNpb24gJiYgKFxyXG4gICAgICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCIvZW1vamlzL2Rlc2VydC5zdmdcIiBoZWlnaHQ9ezIyfSB3aWR0aD17MjJ9IGNsYXNzTmFtZT1cImlubGluZS1ibG9jayByZWxhdGl2ZSBib3R0b20tMC41XCIgLz5cclxuICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiaW5saW5lLWJsb2NrXCI+LjwvcD5cclxuICAgICAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAge3Byb2R1Y3QgJiYgKFxyXG4gICAgICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCIvZW1vamlzL294LnN2Z1wiIGhlaWdodD17MjJ9IHdpZHRoPXsyMn0gY2xhc3NOYW1lPVwiaW5saW5lLWJsb2NrIHJlbGF0aXZlIGJvdHRvbS0wLjVcIiAvPlxyXG4gICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJpbmxpbmUtYmxvY2tcIj4uPC9wPlxyXG4gICAgICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICB7bWFya2V0ICYmIChcclxuICAgICAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiL2Vtb2ppcy93aGFsZS5zdmdcIiBoZWlnaHQ9ezIyfSB3aWR0aD17MjJ9IGNsYXNzTmFtZT1cImlubGluZS1ibG9ja1wiIC8+XHJcbiAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImlubGluZS1ibG9ja1wiPi48L3A+XHJcbiAgICAgICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgIHtmaW5hbmNlcyAmJiAoXHJcbiAgICAgICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIi9lbW9qaXMvdW5pY29ybi5zdmdcIiBoZWlnaHQ9ezIyfSB3aWR0aD17MjJ9IGNsYXNzTmFtZT1cImlubGluZS1ibG9jayByZWxhdGl2ZSBib3R0b20tMC41XCIgLz5cclxuICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiaW5saW5lLWJsb2NrXCI+LjwvcD5cclxuICAgICAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAge21vZGVsICYmIChcclxuICAgICAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiL2Vtb2ppcy9waXJhdC5zdmdcIiBoZWlnaHQ9ezIyfSB3aWR0aD17MjJ9IGNsYXNzTmFtZT1cImlubGluZS1ibG9ja1wiIC8+XHJcbiAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImlubGluZS1ibG9ja1wiPi48L3A+XHJcbiAgICAgICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgIHtzdWNjZXNzICYmIChcclxuICAgICAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiL2Vtb2ppcy9zdGFyLnN2Z1wiIGhlaWdodD17MjJ9IHdpZHRoPXsyMn0gY2xhc3NOYW1lPVwiaW5saW5lLWJsb2NrXCIgLz5cclxuICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiaW5saW5lLWJsb2NrXCI+ITwvcD5cclxuICAgICAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAge3dlbGNvbWUgJiYgKFxyXG4gICAgICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCIvZ2lmcy9oZWxsby1oYW5kLmdpZlwiIGhlaWdodD17MjJ9IHdpZHRoPXsyMn0gY2xhc3NOYW1lPVwiaW5saW5lLWJsb2NrXCIgLz5cclxuICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiaW5saW5lLWJsb2NrXCI+LjwvcD5cclxuICAgICAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAge3Byb2plY3RNYW5hZ2VyICYmIChcclxuICAgICAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiL3Byb2plY3QtbWFuYWdlci9vY3RvcHVzLnN2Z1wiIGhlaWdodD17MjB9IHdpZHRoPXsyMH0gY2xhc3NOYW1lPVwiaW5saW5lLWJsb2NrIHJlbGF0aXZlIGJvdHRvbS0wLjVcIiAvPlxyXG4gICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJpbmxpbmUtYmxvY2tcIj4uPC9wPlxyXG4gICAgICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICB7YnVzaW5lc3NQbGFuICYmIChcclxuICAgICAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiL2J1c2luZXNzLW1vZGVsL2dyb3cuc3ZnXCIgaGVpZ2h0PXsyMH0gd2lkdGg9ezIwfSBjbGFzc05hbWU9XCJpbmxpbmUtYmxvY2sgcmVsYXRpdmUgYm90dG9tLTAuNSBsZWZ0LTFcIiAvPlxyXG4gICAgICAgICAgICAgICAgICB7LyogPHAgY2xhc3NOYW1lPVwiaW5saW5lLWJsb2NrXCI+LjwvcD4gKi99XHJcbiAgICAgICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgIHtjYXNoRmxvdyAmJiAoXHJcbiAgICAgICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIi9jYXNoLWZsb3cvdGlwcHkuc3ZnXCIgaGVpZ2h0PXsyMH0gd2lkdGg9ezIwfSBjbGFzc05hbWU9XCJpbmxpbmUtYmxvY2sgcmVsYXRpdmUgYm90dG9tLTAuNSBsZWZ0LTFcIiAvPlxyXG4gICAgICAgICAgICAgICAgICB7LyogPHAgY2xhc3NOYW1lPVwiaW5saW5lLWJsb2NrXCI+LjwvcD4gKi99XHJcbiAgICAgICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgIHtwcm9qZWN0Q3JlYXRvciAmJiAoXHJcbiAgICAgICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIi9wcm9qZWN0LWNyZWF0ZS9idWxiLnN2Z1wiIGhlaWdodD17MjB9IHdpZHRoPXsyMH0gY2xhc3NOYW1lPVwiaW5saW5lLWJsb2NrIHJlbGF0aXZlIGJvdHRvbS0wLjUgbGVmdC0xXCIgLz5cclxuICAgICAgICAgICAgICAgICAgey8qIDxwIGNsYXNzTmFtZT1cImlubGluZS1ibG9ja1wiPi48L3A+ICovfVxyXG4gICAgICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICB7LyogPGltZyBzcmM9Jy9lbW9qaXMvY29jb3VudC5zdmcnIGhlaWdodD17MjJ9IHdpZHRoPXsyMn0gY2xhc3NOYW1lPSdpbmxpbmUtYmxvY2snIC8+LiAqL31cclxuXHJcbiAgICAgICAgICAgICAgey8qIFRFWFQgMSAqL31cclxuICAgICAgICAgICAgICB7Y29udGVudFRleHQxICYmIGNvbnRlbnRUZXh0MX1cclxuICAgICAgICAgICAgICB7c3RhcnR1cHMgJiYgKFxyXG4gICAgICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCIvZW1vamlzL2JhbGxvb24uc3ZnXCIgaGVpZ2h0PXsyMn0gd2lkdGg9ezIyfSBjbGFzc05hbWU9XCJpbmxpbmUtYmxvY2tcIiAvPlxyXG4gICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJpbmxpbmUtYmxvY2tcIj4uPC9wPlxyXG4gICAgICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICB7dmlzaW9uICYmIChcclxuICAgICAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiL2Vtb2ppcy9jYW1lbC5zdmdcIiBoZWlnaHQ9ezIyfSB3aWR0aD17MjJ9IGNsYXNzTmFtZT1cImlubGluZS1ibG9ja1wiIC8+XHJcbiAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImlubGluZS1ibG9ja1wiPi48L3A+XHJcbiAgICAgICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgIHtwcm9kdWN0ICYmIChcclxuICAgICAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiL2Vtb2ppcy9tYXAuc3ZnXCIgaGVpZ2h0PXsyMn0gd2lkdGg9ezIyfSBjbGFzc05hbWU9XCJpbmxpbmUtYmxvY2tcIiAvPlxyXG4gICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJpbmxpbmUtYmxvY2tcIj4uPC9wPlxyXG4gICAgICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICB7bWFya2V0ICYmIChcclxuICAgICAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiL2Vtb2ppcy9pc2xhbmQuc3ZnXCIgaGVpZ2h0PXsyMn0gd2lkdGg9ezIyfSBjbGFzc05hbWU9XCJpbmxpbmUtYmxvY2tcIiAvPlxyXG4gICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJpbmxpbmUtYmxvY2tcIj4uPC9wPlxyXG4gICAgICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICB7ZmluYW5jZXMgJiYgKFxyXG4gICAgICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCIvZW1vamlzL2NvbnN0cnVjdGlvbi5zdmdcIiBoZWlnaHQ9ezIyfSB3aWR0aD17MjJ9IGNsYXNzTmFtZT1cImlubGluZS1ibG9ja1wiIC8+XHJcbiAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImlubGluZS1ibG9ja1wiPi48L3A+XHJcbiAgICAgICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgIHttb2RlbCAmJiAoXHJcbiAgICAgICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIi9lbW9qaXMvcG9wcGVyLnN2Z1wiIGhlaWdodD17MjJ9IHdpZHRoPXsyMn0gY2xhc3NOYW1lPVwiaW5saW5lLWJsb2NrIHJlbGF0aXZlIGJvdHRvbS0wLjVcIiAvPlxyXG4gICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJpbmxpbmUtYmxvY2tcIj4hPC9wPlxyXG4gICAgICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICB7d2VsY29tZSAmJiAoXHJcbiAgICAgICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIi9naWZzL3JvY2tldC5naWZcIiBoZWlnaHQ9ezIyfSB3aWR0aD17MjJ9IGNsYXNzTmFtZT1cImlubGluZS1ibG9ja1wiIC8+XHJcbiAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImlubGluZS1ibG9ja1wiPiE8L3A+XHJcbiAgICAgICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgIHtwcm9qZWN0TWFuYWdlciAmJiAoXHJcbiAgICAgICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIi9wcm9qZWN0LW1hbmFnZXIvZmxvd2VyLnN2Z1wiIGhlaWdodD17MTh9IHdpZHRoPXsxOH0gY2xhc3NOYW1lPVwiaW5saW5lLWJsb2NrIHJlbGF0aXZlIGJvdHRvbS0wLjVcIiAvPlxyXG4gICAgICAgICAgICAgICAgICB7LyogPHAgY2xhc3NOYW1lPVwiaW5saW5lLWJsb2NrXCI+ITwvcD4gKi99XHJcbiAgICAgICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgIHsvKiA8aW1nIHNyYz0nL2Vtb2ppcy9iYWxsb29uLnN2ZycgaGVpZ2h0PXsyMn0gd2lkdGg9ezIyfSBjbGFzc05hbWU9J2lubGluZS1ibG9jaycgLz4uICovfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBmbGV4LXdyYXAgZ2FwLTIgbXQtMlwiPjwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKVxyXG4gICAgICB9XHJcbiAgICA+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZml4ZWQgZmxleCBmbGV4LXdyYXAgbS0yIGJvdHRvbS00IHJpZ2h0LTIgei01MFwiPlxyXG4gICAgICAgIDxJbWFnZSBzcmM9XCIvbW9uc3RlcnMvbW9uc3Rlci10d28uc3ZnXCIgaGVpZ2h0PXs2Nn0gd2lkdGg9ezYwfSBjbGFzc05hbWU9XCJjdXJzb3ItcG9pbnRlciB6LTUwXCIgb25DbGljaz17b25JbWFnZUNsaWNrfSAvPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvVGlwcHk+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFRpcHB5TW9uc3RlcjtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==