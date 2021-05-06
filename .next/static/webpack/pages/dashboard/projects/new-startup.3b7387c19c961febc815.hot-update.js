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
        className: "text-primarydark p-4 text-sm text-center text-white flex justify-center items-center inline-block",
        children: ["Ops, unfortunately you already have a project with that name", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
          src: "/emojis/crying.svg",
          height: 25,
          width: 25,
          className: "inline-block relative"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 93,
          columnNumber: 15
        }, _this)]
      }, void 0, true, {
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
        className: "text-primarydark py-4 px-2 text-sm text-center text-white flex justify-center items-center",
        children: ["Oops, you have to provide all the information", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
          src: "/emojis/crying.svg",
          height: 25,
          width: 25,
          className: "inline-block relative"
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9kYXNoYm9hcmQvVGlwcHkuanMiXSwibmFtZXMiOlsiVGlwcHlNb25zdGVyIiwic2V0VGlwcHlIZWxwZXIiLCJzZXRXcm9uZ05hbWVUaXBweUhlbHBlciIsIndyb25nTmFtZSIsInByb2plY3RDcmVhdG9yIiwiY2FzaEZsb3ciLCJidXNpbmVzc1BsYW4iLCJwcm9qZWN0TWFuYWdlciIsImNvbnRlbnRDbGFzcyIsImNvbnRlbnRUZXh0IiwiY29udGVudFRleHQxIiwic3RhcnR1cHMiLCJtYXJrZXQiLCJtb2RlbCIsInN1Y2Nlc3MiLCJ0aXBweU1vbnN0ZXIiLCJzZXRUaXBweU1vbnN0ZXIiLCJzZXRDdXJyZW50VGlwcHkiLCJlbXB0eUlucHV0IiwiaW5pdGlhbE1vZGFsIiwidmlzaW9uIiwicHJvZHVjdCIsImZpbmFuY2VzIiwid2VsY29tZSIsInVzZVN0YXRlIiwidmlzaWJsZSIsInNldFZpc2libGUiLCJjb250ZW50UmVmIiwidXNlUmVmIiwidGlwcHlSZWYiLCJzaG93IiwiZ3NhcCIsImZyb21UbyIsImN1cnJlbnQiLCJhdXRvQWxwaGEiLCJzY2FsZSIsImR1cmF0aW9uIiwidHJhbnNmb3JtT3JpZ2luIiwiZWFzZSIsIlBvd2VyNCIsImVhc2VPdXQiLCJoaWRlIiwidG8iLCJlYXNlSW4iLCJvbkltYWdlQ2xpY2siLCJ1c2VFZmZlY3QiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxZQUFZLEdBQUcsU0FBZkEsWUFBZSxPQXdCZjtBQUFBOztBQUFBLE1BdkJKQyxjQXVCSSxRQXZCSkEsY0F1Qkk7QUFBQSxNQXRCSkMsdUJBc0JJLFFBdEJKQSx1QkFzQkk7QUFBQSxNQXJCSkMsU0FxQkksUUFyQkpBLFNBcUJJO0FBQUEsTUFwQkpDLGNBb0JJLFFBcEJKQSxjQW9CSTtBQUFBLE1BbkJKQyxRQW1CSSxRQW5CSkEsUUFt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QUFBSyxlQUFHLEVBQUMsa0JBQVQ7QUFBNEIsa0JBQU0sRUFBRSxFQUFwQztBQUF3QyxpQkFBSyxFQUFFLEVBQS9DO0FBQW1ELHFCQUFTLEVBQUM7QUFBN0Q7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFERixlQUVFO0FBQUcscUJBQVMsRUFBQyxjQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUZGO0FBQUEsd0JBekhKLEVBOEhHaEIsY0FBYyxpQkFDYjtBQUFBLGlDQUNFO0FBQUssZUFBRyxFQUFDLDZCQUFUO0FBQXVDLGtCQUFNLEVBQUUsRUFBL0M7QUFBbUQsaUJBQUssRUFBRSxFQUExRDtBQUE4RCxxQkFBUyxFQUFDO0FBQXhFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERix5QkEvSEo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREYsZUF1SUU7QUFBSyxpQkFBUyxFQUFDO0FBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQXZJRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUEvQk47QUFBQSwyQkEyS0U7QUFBSyxlQUFTLEVBQUMsZ0RBQWY7QUFBQSw2QkFDRSxxRUFBQyxpREFBRDtBQUFPLFdBQUcsRUFBQywyQkFBWDtBQUF1QyxjQUFNLEVBQUUsRUFBL0M7QUFBbUQsYUFBSyxFQUFFLEVBQTFEO0FBQThELGlCQUFTLEVBQUMscUJBQXhFO0FBQThGLGVBQU8sRUFBRXFDO0FBQXZHO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBM0tGO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQWlMRCxDQXRQRDs7R0FBTTVDLFk7O0tBQUFBLFk7QUF3UFNBLDJFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2Rhc2hib2FyZC9wcm9qZWN0cy9uZXctc3RhcnR1cC4zYjczODdjMTljOTYxZmViYzgxNS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QsIHVzZVJlZiB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IGdzYXAsIHsgUG93ZXI0IH0gZnJvbSAnZ3NhcCc7XHJcbmltcG9ydCBUaXBweSBmcm9tICdAdGlwcHlqcy9yZWFjdCc7XHJcbmltcG9ydCBJbWFnZSBmcm9tICduZXh0L2ltYWdlJztcclxuXHJcbmNvbnN0IFRpcHB5TW9uc3RlciA9ICh7XHJcbiAgc2V0VGlwcHlIZWxwZXIsXHJcbiAgc2V0V3JvbmdOYW1lVGlwcHlIZWxwZXIsXHJcbiAgd3JvbmdOYW1lLFxyXG4gIHByb2plY3RDcmVhdG9yLFxyXG4gIGNhc2hGbG93LFxyXG4gIGJ1c2luZXNzUGxhbixcclxuICBwcm9qZWN0TWFuYWdlcixcclxuICBjb250ZW50Q2xhc3MsXHJcbiAgY29udGVudFRleHQsXHJcbiAgY29udGVudFRleHQxLFxyXG4gIHN0YXJ0dXBzLFxyXG4gIG1hcmtldCxcclxuICBtb2RlbCxcclxuICBzdWNjZXNzLFxyXG4gIHRpcHB5TW9uc3RlcixcclxuICBzZXRUaXBweU1vbnN0ZXIsXHJcbiAgc2V0Q3VycmVudFRpcHB5LFxyXG4gIGVtcHR5SW5wdXQsXHJcbiAgaW5pdGlhbE1vZGFsLFxyXG4gIHZpc2lvbixcclxuICBwcm9kdWN0LFxyXG4gIGZpbmFuY2VzLFxyXG4gIHdlbGNvbWUsXHJcbn0pID0+IHtcclxuICBjb25zdCBbdmlzaWJsZSwgc2V0VmlzaWJsZV0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgY29udGVudFJlZiA9IHVzZVJlZihudWxsKTtcclxuICBjb25zdCB0aXBweVJlZiA9IHVzZVJlZigpO1xyXG5cclxuICAvLyBjb25zdCBbZW1wdHlJbnB1dCwgc2V0RW1wdHlJbnB1dF0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gIGNvbnN0IHNob3cgPSAoKSA9PiB7XHJcbiAgICBnc2FwLmZyb21UbyhcclxuICAgICAgdGlwcHlSZWYuY3VycmVudCxcclxuICAgICAgeyBhdXRvQWxwaGE6IDAsIHNjYWxlOiAwIH0sXHJcbiAgICAgIHsgYXV0b0FscGhhOiAxLCBzY2FsZTogMSwgZHVyYXRpb246IDEsIHRyYW5zZm9ybU9yaWdpbjogJ2JvdHRvbSByaWdodCcsIGVhc2U6IFBvd2VyNC5lYXNlT3V0IH1cclxuICAgICk7XHJcbiAgICBzZXRWaXNpYmxlKHRydWUpO1xyXG4gICAgZW1wdHlJbnB1dCAmJiBzZXRDdXJyZW50VGlwcHkodHJ1ZSk7IC8vIGN1cnJlbnQgdGlwcHkgamVzdCBjesSZxZtjacSFIG9ic8WCdWdpIHByb2JsZW11LCBraWVkeSBtYW15IG90d2FydGVnbyB0b29sdGlwYSBub3JtYWxuZWdvIGkgd2Npc2thbXksIMW8ZWJ5IHd5xZt3aWV0bGnEhyBjemVyd29uZWdvXHJcbiAgfTtcclxuICBjb25zdCBoaWRlID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgYXdhaXQgZ3NhcC50byh0aXBweVJlZi5jdXJyZW50LCB7XHJcbiAgICAgIGF1dG9BbHBoYTogMCxcclxuICAgICAgc2NhbGU6IDAsXHJcbiAgICAgIGR1cmF0aW9uOiAxLFxyXG4gICAgICB0cmFuc2Zvcm1PcmlnaW46ICdib3R0b20gcmlnaHQnLFxyXG4gICAgICBlYXNlOiBQb3dlcjQuZWFzZUluLFxyXG4gICAgfSk7XHJcbiAgICBlbXB0eUlucHV0ICYmIHNldFRpcHB5TW9uc3RlcihmYWxzZSk7XHJcbiAgICBzZXRWaXNpYmxlKGZhbHNlKTtcclxuICAgIGVtcHR5SW5wdXQgJiYgc2V0Q3VycmVudFRpcHB5KGZhbHNlKTtcclxuICAgIHRpcHB5TW9uc3RlciAmJiBzZXRUaXBweUhlbHBlcihmYWxzZSk7XHJcbiAgICB3cm9uZ05hbWUgJiYgc2V0V3JvbmdOYW1lVGlwcHlIZWxwZXIoZmFsc2UpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IG9uSW1hZ2VDbGljayA9ICgpID0+IHtcclxuICAgIGlmICghdGlwcHlNb25zdGVyKSB7XHJcbiAgICAgIHZpc2libGUgPyBoaWRlKCkgOiBzaG93KCk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIC8vIEdTQVBcclxuICAgIGdzYXAuZnJvbVRvKGNvbnRlbnRSZWYuY3VycmVudCwgeyBhdXRvQWxwaGE6IDAgfSwgeyBhdXRvQWxwaGE6IDEsIGR1cmF0aW9uOiAyLCB0cmFuc2Zvcm1PcmlnaW46ICdib3R0b20gcmlnaHQnLCBlYXNlOiBQb3dlcjQuZWFzZU91dCB9KTtcclxuICAgIC8vIFRJUFBZXHJcbiAgICBzZXRWaXNpYmxlKHRydWUpO1xyXG4gICAgZW1wdHlJbnB1dCAmJiBzZXRDdXJyZW50VGlwcHkodHJ1ZSk7XHJcbiAgfSwgW10pO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPFRpcHB5XHJcbiAgICAgIC8vIHRyaWdnZXI9e3RpcHB5TW9uc3Rlcn1cclxuICAgICAgekluZGV4PXt2aXNpYmxlIHx8IHRpcHB5TW9uc3RlciA/IDIyIDogMH1cclxuICAgICAgb25TaG93PXtzaG93fVxyXG4gICAgICBhbmltYXRpb249XCJmYWRlXCJcclxuICAgICAgZHVyYXRpb249ezUwMH1cclxuICAgICAgdG91Y2g9e3RydWV9XHJcbiAgICAgIHZpc2libGU9e3Zpc2libGUgfHwgdGlwcHlNb25zdGVyfVxyXG4gICAgICBvbkNsaWNrT3V0c2lkZT17aGlkZX1cclxuICAgICAgb2Zmc2V0PXttYXJrZXQgfHwgbW9kZWwgfHwgc3VjY2VzcyB8fCB0aXBweU1vbnN0ZXIgfHwgd3JvbmdOYW1lID8gWy0yNjUsIC02NV0gOiBbLTIyMCwgLTY1XX1cclxuICAgICAgLy8gcGxhY2VtZW50PSdsZWZ0LWVuZCdcclxuICAgICAgaW50ZXJhY3RpdmU9e3RydWV9XHJcbiAgICAgIGNvbnRlbnQ9e1xyXG4gICAgICAgICh3cm9uZ05hbWUgJiYgKFxyXG4gICAgICAgICAgPGRpdiByZWY9e3RpcHB5UmVmfSBjbGFzc05hbWU9XCJoLTE2IHctOTYgc2hhZG93LWxnIHJvdW5kZWQtMnhsIGJnLXJlZCBmbGV4IGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlciBmb2N1czpvdXRsaW5lLW5vbmVcIj5cclxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1wcmltYXJ5ZGFyayBwLTQgdGV4dC1zbSB0ZXh0LWNlbnRlciB0ZXh0LXdoaXRlIGZsZXgganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyIGlubGluZS1ibG9ja1wiPlxyXG4gICAgICAgICAgICAgIE9wcywgdW5mb3J0dW5hdGVseSB5b3UgYWxyZWFkeSBoYXZlIGEgcHJvamVjdCB3aXRoIHRoYXQgbmFtZVxyXG4gICAgICAgICAgICAgIDxpbWcgc3JjPVwiL2Vtb2ppcy9jcnlpbmcuc3ZnXCIgaGVpZ2h0PXsyNX0gd2lkdGg9ezI1fSBjbGFzc05hbWU9XCJpbmxpbmUtYmxvY2sgcmVsYXRpdmVcIiAvPlxyXG4gICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgZmxleC13cmFwIGdhcC0yIG10LTJcIj48L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICkpIHx8XHJcbiAgICAgICAgKHRpcHB5TW9uc3RlciAmJiAoXHJcbiAgICAgICAgICA8ZGl2IHJlZj17dGlwcHlSZWZ9IGNsYXNzTmFtZT1cImgtMTIgdy05NiBzaGFkb3ctbGcgcm91bmRlZC0yeGwgYmctcmVkIGZsZXgganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyIGZvY3VzOm91dGxpbmUtbm9uZVwiPlxyXG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXByaW1hcnlkYXJrIHB5LTQgcHgtMiB0ZXh0LXNtIHRleHQtY2VudGVyIHRleHQtd2hpdGUgZmxleCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICBPb3BzLCB5b3UgaGF2ZSB0byBwcm92aWRlIGFsbCB0aGUgaW5mb3JtYXRpb25cclxuICAgICAgICAgICAgICA8aW1nIHNyYz1cIi9lbW9qaXMvY3J5aW5nLnN2Z1wiIGhlaWdodD17MjV9IHdpZHRoPXsyNX0gY2xhc3NOYW1lPVwiaW5saW5lLWJsb2NrIHJlbGF0aXZlXCIgLz5cclxuICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIGZsZXgtd3JhcCBnYXAtMiBtdC0yXCI+PC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApKSB8fCAoXHJcbiAgICAgICAgICA8ZGl2IHJlZj17dGlwcHlSZWZ9IGNsYXNzTmFtZT17YGZvY3VzOm91dGxpbmUtbm9uZSAke2NvbnRlbnRDbGFzc31gfT5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LXByaW1hcnlkYXJrIHAtNCB0ZXh0LXNtIHRleHQtY2VudGVyIHRleHQtd2hpdGVcIj5cclxuICAgICAgICAgICAgICB7Y29udGVudFRleHR9XHJcbiAgICAgICAgICAgICAge3N0YXJ0dXBzICYmIChcclxuICAgICAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiL2Vtb2ppcy9jb2NvdW50LnN2Z1wiIGhlaWdodD17MjJ9IHdpZHRoPXsyMn0gY2xhc3NOYW1lPVwiaW5saW5lLWJsb2NrXCIgLz5cclxuICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiaW5saW5lLWJsb2NrXCI+LjwvcD5cclxuICAgICAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAge2luaXRpYWxNb2RhbCAmJiAoXHJcbiAgICAgICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIi9lbW9qaXMvaGFtbWVyLnN2Z1wiIGhlaWdodD17MjJ9IHdpZHRoPXsyMn0gY2xhc3NOYW1lPVwiaW5saW5lLWJsb2NrXCIgLz5cclxuICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiaW5saW5lLWJsb2NrXCI+LjwvcD5cclxuICAgICAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAge3Zpc2lvbiAmJiAoXHJcbiAgICAgICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIi9lbW9qaXMvZGVzZXJ0LnN2Z1wiIGhlaWdodD17MjJ9IHdpZHRoPXsyMn0gY2xhc3NOYW1lPVwiaW5saW5lLWJsb2NrIHJlbGF0aXZlIGJvdHRvbS0wLjVcIiAvPlxyXG4gICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJpbmxpbmUtYmxvY2tcIj4uPC9wPlxyXG4gICAgICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICB7cHJvZHVjdCAmJiAoXHJcbiAgICAgICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIi9lbW9qaXMvb3guc3ZnXCIgaGVpZ2h0PXsyMn0gd2lkdGg9ezIyfSBjbGFzc05hbWU9XCJpbmxpbmUtYmxvY2sgcmVsYXRpdmUgYm90dG9tLTAuNVwiIC8+XHJcbiAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImlubGluZS1ibG9ja1wiPi48L3A+XHJcbiAgICAgICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgIHttYXJrZXQgJiYgKFxyXG4gICAgICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCIvZW1vamlzL3doYWxlLnN2Z1wiIGhlaWdodD17MjJ9IHdpZHRoPXsyMn0gY2xhc3NOYW1lPVwiaW5saW5lLWJsb2NrXCIgLz5cclxuICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiaW5saW5lLWJsb2NrXCI+LjwvcD5cclxuICAgICAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAge2ZpbmFuY2VzICYmIChcclxuICAgICAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiL2Vtb2ppcy91bmljb3JuLnN2Z1wiIGhlaWdodD17MjJ9IHdpZHRoPXsyMn0gY2xhc3NOYW1lPVwiaW5saW5lLWJsb2NrIHJlbGF0aXZlIGJvdHRvbS0wLjVcIiAvPlxyXG4gICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJpbmxpbmUtYmxvY2tcIj4uPC9wPlxyXG4gICAgICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICB7bW9kZWwgJiYgKFxyXG4gICAgICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCIvZW1vamlzL3BpcmF0LnN2Z1wiIGhlaWdodD17MjJ9IHdpZHRoPXsyMn0gY2xhc3NOYW1lPVwiaW5saW5lLWJsb2NrXCIgLz5cclxuICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiaW5saW5lLWJsb2NrXCI+LjwvcD5cclxuICAgICAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAge3N1Y2Nlc3MgJiYgKFxyXG4gICAgICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCIvZW1vamlzL3N0YXIuc3ZnXCIgaGVpZ2h0PXsyMn0gd2lkdGg9ezIyfSBjbGFzc05hbWU9XCJpbmxpbmUtYmxvY2tcIiAvPlxyXG4gICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJpbmxpbmUtYmxvY2tcIj4hPC9wPlxyXG4gICAgICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICB7d2VsY29tZSAmJiAoXHJcbiAgICAgICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIi9naWZzL2hlbGxvLWhhbmQuZ2lmXCIgaGVpZ2h0PXsyMn0gd2lkdGg9ezIyfSBjbGFzc05hbWU9XCJpbmxpbmUtYmxvY2tcIiAvPlxyXG4gICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJpbmxpbmUtYmxvY2tcIj4uPC9wPlxyXG4gICAgICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICB7cHJvamVjdE1hbmFnZXIgJiYgKFxyXG4gICAgICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCIvcHJvamVjdC1tYW5hZ2VyL29jdG9wdXMuc3ZnXCIgaGVpZ2h0PXsyMH0gd2lkdGg9ezIwfSBjbGFzc05hbWU9XCJpbmxpbmUtYmxvY2sgcmVsYXRpdmUgYm90dG9tLTAuNVwiIC8+XHJcbiAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImlubGluZS1ibG9ja1wiPi48L3A+XHJcbiAgICAgICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgIHtidXNpbmVzc1BsYW4gJiYgKFxyXG4gICAgICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCIvYnVzaW5lc3MtbW9kZWwvZ3Jvdy5zdmdcIiBoZWlnaHQ9ezIwfSB3aWR0aD17MjB9IGNsYXNzTmFtZT1cImlubGluZS1ibG9jayByZWxhdGl2ZSBib3R0b20tMC41IGxlZnQtMVwiIC8+XHJcbiAgICAgICAgICAgICAgICAgIHsvKiA8cCBjbGFzc05hbWU9XCJpbmxpbmUtYmxvY2tcIj4uPC9wPiAqL31cclxuICAgICAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAge2Nhc2hGbG93ICYmIChcclxuICAgICAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiL2Nhc2gtZmxvdy90aXBweS5zdmdcIiBoZWlnaHQ9ezIwfSB3aWR0aD17MjB9IGNsYXNzTmFtZT1cImlubGluZS1ibG9jayByZWxhdGl2ZSBib3R0b20tMC41IGxlZnQtMVwiIC8+XHJcbiAgICAgICAgICAgICAgICAgIHsvKiA8cCBjbGFzc05hbWU9XCJpbmxpbmUtYmxvY2tcIj4uPC9wPiAqL31cclxuICAgICAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAge3Byb2plY3RDcmVhdG9yICYmIChcclxuICAgICAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiL3Byb2plY3QtY3JlYXRlL2J1bGIuc3ZnXCIgaGVpZ2h0PXsyMH0gd2lkdGg9ezIwfSBjbGFzc05hbWU9XCJpbmxpbmUtYmxvY2sgcmVsYXRpdmUgYm90dG9tLTAuNSBsZWZ0LTFcIiAvPlxyXG4gICAgICAgICAgICAgICAgICB7LyogPHAgY2xhc3NOYW1lPVwiaW5saW5lLWJsb2NrXCI+LjwvcD4gKi99XHJcbiAgICAgICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgIHsvKiA8aW1nIHNyYz0nL2Vtb2ppcy9jb2NvdW50LnN2ZycgaGVpZ2h0PXsyMn0gd2lkdGg9ezIyfSBjbGFzc05hbWU9J2lubGluZS1ibG9jaycgLz4uICovfVxyXG5cclxuICAgICAgICAgICAgICB7LyogVEVYVCAxICovfVxyXG4gICAgICAgICAgICAgIHtjb250ZW50VGV4dDEgJiYgY29udGVudFRleHQxfVxyXG4gICAgICAgICAgICAgIHtzdGFydHVwcyAmJiAoXHJcbiAgICAgICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIi9lbW9qaXMvYmFsbG9vbi5zdmdcIiBoZWlnaHQ9ezIyfSB3aWR0aD17MjJ9IGNsYXNzTmFtZT1cImlubGluZS1ibG9ja1wiIC8+XHJcbiAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImlubGluZS1ibG9ja1wiPi48L3A+XHJcbiAgICAgICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgIHt2aXNpb24gJiYgKFxyXG4gICAgICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCIvZW1vamlzL2NhbWVsLnN2Z1wiIGhlaWdodD17MjJ9IHdpZHRoPXsyMn0gY2xhc3NOYW1lPVwiaW5saW5lLWJsb2NrXCIgLz5cclxuICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiaW5saW5lLWJsb2NrXCI+LjwvcD5cclxuICAgICAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAge3Byb2R1Y3QgJiYgKFxyXG4gICAgICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCIvZW1vamlzL21hcC5zdmdcIiBoZWlnaHQ9ezIyfSB3aWR0aD17MjJ9IGNsYXNzTmFtZT1cImlubGluZS1ibG9ja1wiIC8+XHJcbiAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImlubGluZS1ibG9ja1wiPi48L3A+XHJcbiAgICAgICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgIHttYXJrZXQgJiYgKFxyXG4gICAgICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCIvZW1vamlzL2lzbGFuZC5zdmdcIiBoZWlnaHQ9ezIyfSB3aWR0aD17MjJ9IGNsYXNzTmFtZT1cImlubGluZS1ibG9ja1wiIC8+XHJcbiAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImlubGluZS1ibG9ja1wiPi48L3A+XHJcbiAgICAgICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgIHtmaW5hbmNlcyAmJiAoXHJcbiAgICAgICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIi9lbW9qaXMvY29uc3RydWN0aW9uLnN2Z1wiIGhlaWdodD17MjJ9IHdpZHRoPXsyMn0gY2xhc3NOYW1lPVwiaW5saW5lLWJsb2NrXCIgLz5cclxuICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiaW5saW5lLWJsb2NrXCI+LjwvcD5cclxuICAgICAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAge21vZGVsICYmIChcclxuICAgICAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiL2Vtb2ppcy9wb3BwZXIuc3ZnXCIgaGVpZ2h0PXsyMn0gd2lkdGg9ezIyfSBjbGFzc05hbWU9XCJpbmxpbmUtYmxvY2sgcmVsYXRpdmUgYm90dG9tLTAuNVwiIC8+XHJcbiAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImlubGluZS1ibG9ja1wiPiE8L3A+XHJcbiAgICAgICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgIHt3ZWxjb21lICYmIChcclxuICAgICAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiL2dpZnMvcm9ja2V0LmdpZlwiIGhlaWdodD17MjJ9IHdpZHRoPXsyMn0gY2xhc3NOYW1lPVwiaW5saW5lLWJsb2NrXCIgLz5cclxuICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiaW5saW5lLWJsb2NrXCI+ITwvcD5cclxuICAgICAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAge3Byb2plY3RNYW5hZ2VyICYmIChcclxuICAgICAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiL3Byb2plY3QtbWFuYWdlci9mbG93ZXIuc3ZnXCIgaGVpZ2h0PXsxOH0gd2lkdGg9ezE4fSBjbGFzc05hbWU9XCJpbmxpbmUtYmxvY2sgcmVsYXRpdmUgYm90dG9tLTAuNVwiIC8+XHJcbiAgICAgICAgICAgICAgICAgIHsvKiA8cCBjbGFzc05hbWU9XCJpbmxpbmUtYmxvY2tcIj4hPC9wPiAqL31cclxuICAgICAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgey8qIDxpbWcgc3JjPScvZW1vamlzL2JhbGxvb24uc3ZnJyBoZWlnaHQ9ezIyfSB3aWR0aD17MjJ9IGNsYXNzTmFtZT0naW5saW5lLWJsb2NrJyAvPi4gKi99XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIGZsZXgtd3JhcCBnYXAtMiBtdC0yXCI+PC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApXHJcbiAgICAgIH1cclxuICAgID5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmaXhlZCBmbGV4IGZsZXgtd3JhcCBtLTIgYm90dG9tLTQgcmlnaHQtMiB6LTUwXCI+XHJcbiAgICAgICAgPEltYWdlIHNyYz1cIi9tb25zdGVycy9tb25zdGVyLXR3by5zdmdcIiBoZWlnaHQ9ezY2fSB3aWR0aD17NjB9IGNsYXNzTmFtZT1cImN1cnNvci1wb2ludGVyIHotNTBcIiBvbkNsaWNrPXtvbkltYWdlQ2xpY2t9IC8+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9UaXBweT5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgVGlwcHlNb25zdGVyO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9