/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 1297:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(9448);

var _interopRequireDefault = __webpack_require__(2426);

exports.__esModule = true;
exports.initScriptLoader = initScriptLoader;
exports.default = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__(9566));

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(__webpack_require__(6169));

var _react = _interopRequireWildcard(__webpack_require__(9297));

var _headManagerContext = __webpack_require__(816);

var _headManager = __webpack_require__(2771);

var _requestIdleCallback = __webpack_require__(8391);

const ScriptCache = new Map();
const LoadCache = new Set();
const ignoreProps = ['onLoad', 'dangerouslySetInnerHTML', 'children', 'onError', 'strategy', 'preload'];

const loadScript = props => {
  const {
    src,
    id,
    onLoad = () => {},
    dangerouslySetInnerHTML,
    children = '',
    onError
  } = props;
  const cacheKey = id || src;

  if (ScriptCache.has(src)) {
    if (!LoadCache.has(cacheKey)) {
      LoadCache.add(cacheKey); // Execute onLoad since the script loading has begun

      ScriptCache.get(src).then(onLoad, onError);
    }

    return;
  }

  const el = document.createElement('script');
  const loadPromise = new Promise((resolve, reject) => {
    el.addEventListener('load', function () {
      resolve();

      if (onLoad) {
        onLoad.call(this);
      }
    });
    el.addEventListener('error', function () {
      reject();

      if (onError) {
        onError();
      }
    });
  });

  if (src) {
    ScriptCache.set(src, loadPromise);
    LoadCache.add(cacheKey);
  }

  if (dangerouslySetInnerHTML) {
    el.innerHTML = dangerouslySetInnerHTML.__html || '';
  } else if (children) {
    el.textContent = typeof children === 'string' ? children : Array.isArray(children) ? children.join('') : '';
  } else if (src) {
    el.src = src;
  }

  for (const [k, value] of Object.entries(props)) {
    if (value === undefined || ignoreProps.includes(k)) {
      continue;
    }

    const attr = _headManager.DOMAttributeNames[k] || k.toLowerCase();
    el.setAttribute(attr, value);
  }

  document.body.appendChild(el);
};

function handleClientScriptLoad(props) {
  const {
    strategy = 'defer'
  } = props;

  if (strategy === 'defer') {
    loadScript(props);
  } else if (strategy === 'lazy') {
    window.addEventListener('load', () => {
      (0, _requestIdleCallback.requestIdleCallback)(() => loadScript(props));
    });
  }
}

function loadLazyScript(props) {
  if (document.readyState === 'complete') {
    (0, _requestIdleCallback.requestIdleCallback)(() => loadScript(props));
  } else {
    window.addEventListener('load', () => {
      (0, _requestIdleCallback.requestIdleCallback)(() => loadScript(props));
    });
  }
}

function initScriptLoader(scriptLoaderItems) {
  scriptLoaderItems.forEach(handleClientScriptLoad);
}

function Script(props) {
  const {
    src = '',
    onLoad = () => {},
    dangerouslySetInnerHTML,
    children = '',
    strategy = 'defer',
    onError,
    preload = false
  } = props,
        restProps = (0, _objectWithoutPropertiesLoose2.default)(props, ["src", "onLoad", "dangerouslySetInnerHTML", "children", "strategy", "onError", "preload"]); // Context is available only during SSR

  const {
    updateScripts,
    scripts
  } = (0, _react.useContext)(_headManagerContext.HeadManagerContext);
  (0, _react.useEffect)(() => {
    if (strategy === 'defer') {
      loadScript(props);
    } else if (strategy === 'lazy') {
      loadLazyScript(props);
    }
  }, [props, strategy]);

  if (true) {
    return null;
  }

  if (strategy === 'dangerouslyBlockRendering') {
    const syncProps = (0, _extends2.default)({}, restProps);

    for (const [k, value] of Object.entries({
      src,
      onLoad,
      onError,
      dangerouslySetInnerHTML,
      children
    })) {
      if (!value) {
        continue;
      }

      if (k === 'children') {
        syncProps.dangerouslySetInnerHTML = {
          __html: typeof value === 'string' ? value : Array.isArray(value) ? value.join('') : ''
        };
      } else {
        ;
        syncProps[k] = value;
      }
    }

    return /*#__PURE__*/_react.default.createElement("script", syncProps);
  } else if (strategy === 'defer') {
    if (updateScripts && preload) {
      scripts.defer = (scripts.defer || []).concat([src]);
      updateScripts(scripts);
    }
  } else if (strategy === 'eager') {
    if (updateScripts) {
      scripts.eager = (scripts.eager || []).concat([(0, _extends2.default)({
        src,
        onLoad,
        onError
      }, restProps)]);
      updateScripts(scripts);
    }
  }

  return null;
}

var _default = Script;
exports.default = _default;

/***/ }),

/***/ 2771:
/***/ (function(__unused_webpack_module, exports) {

"use strict";


exports.__esModule = true;
exports.default = initHeadManager;
exports.DOMAttributeNames = void 0;
const DOMAttributeNames = {
  acceptCharset: 'accept-charset',
  className: 'class',
  htmlFor: 'for',
  httpEquiv: 'http-equiv',
  noModule: 'noModule'
};
exports.DOMAttributeNames = DOMAttributeNames;

function reactElementToDOM({
  type,
  props
}) {
  const el = document.createElement(type);

  for (const p in props) {
    if (!props.hasOwnProperty(p)) continue;
    if (p === 'children' || p === 'dangerouslySetInnerHTML') continue; // we don't render undefined props to the DOM

    if (props[p] === undefined) continue;
    const attr = DOMAttributeNames[p] || p.toLowerCase();

    if (type === 'script' && (attr === 'async' || attr === 'defer' || attr === 'noModule')) {
      ;
      el[attr] = !!props[p];
    } else {
      el.setAttribute(attr, props[p]);
    }
  }

  const {
    children,
    dangerouslySetInnerHTML
  } = props;

  if (dangerouslySetInnerHTML) {
    el.innerHTML = dangerouslySetInnerHTML.__html || '';
  } else if (children) {
    el.textContent = typeof children === 'string' ? children : Array.isArray(children) ? children.join('') : '';
  }

  return el;
}

function updateElements(type, components) {
  const headEl = document.getElementsByTagName('head')[0];
  const headCountEl = headEl.querySelector('meta[name=next-head-count]');

  if (false) {}

  const headCount = Number(headCountEl.content);
  const oldTags = [];

  for (let i = 0, j = headCountEl.previousElementSibling; i < headCount; i++, j = j.previousElementSibling) {
    if (j.tagName.toLowerCase() === type) {
      oldTags.push(j);
    }
  }

  const newTags = components.map(reactElementToDOM).filter(newTag => {
    for (let k = 0, len = oldTags.length; k < len; k++) {
      const oldTag = oldTags[k];

      if (oldTag.isEqualNode(newTag)) {
        oldTags.splice(k, 1);
        return false;
      }
    }

    return true;
  });
  oldTags.forEach(t => t.parentNode.removeChild(t));
  newTags.forEach(t => headEl.insertBefore(t, headCountEl));
  headCountEl.content = (headCount - oldTags.length + newTags.length).toString();
}

function initHeadManager() {
  let updatePromise = null;
  return {
    mountedInstances: new Set(),
    updateHead: head => {
      const promise = updatePromise = Promise.resolve().then(() => {
        if (promise !== updatePromise) return;
        updatePromise = null;
        const tags = {};
        head.forEach(h => {
          const components = tags[h.type] || [];
          components.push(h);
          tags[h.type] = components;
        });
        const titleComponent = tags.title ? tags.title[0] : null;
        let title = '';

        if (titleComponent) {
          const {
            children
          } = titleComponent.props;
          title = typeof children === 'string' ? children : Array.isArray(children) ? children.join('') : '';
        }

        if (title !== document.title) document.title = title;
        ['meta', 'base', 'link', 'style', 'script'].forEach(type => {
          updateElements(type, tags[type] || []);
        });
      });
    }
  };
}

/***/ }),

/***/ 8391:
/***/ (function(__unused_webpack_module, exports) {

"use strict";


exports.__esModule = true;
exports.cancelIdleCallback = exports.requestIdleCallback = void 0;

const requestIdleCallback = typeof self !== 'undefined' && self.requestIdleCallback || function (cb) {
  let start = Date.now();
  return setTimeout(function () {
    cb({
      didTimeout: false,
      timeRemaining: function () {
        return Math.max(0, 50 - (Date.now() - start));
      }
    });
  }, 1);
};

exports.requestIdleCallback = requestIdleCallback;

const cancelIdleCallback = typeof self !== 'undefined' && self.cancelIdleCallback || function (id) {
  return clearTimeout(id);
};

exports.cancelIdleCallback = cancelIdleCallback;

/***/ }),

/***/ 6381:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(2426);

exports.__esModule = true;
exports.Container = Container;
exports.createUrl = createUrl;
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(9297));

var _utils = __webpack_require__(7579);

exports.AppInitialProps = _utils.AppInitialProps;
exports.NextWebVitalsMetric = _utils.NextWebVitalsMetric;
/**
* `App` component is used for initialize of pages. It allows for overwriting and full control of the `page` initialization.
* This allows for keeping state between navigation, custom error handling, injecting additional data.
*/

async function appGetInitialProps({
  Component,
  ctx
}) {
  const pageProps = await (0, _utils.loadGetInitialProps)(Component, ctx);
  return {
    pageProps
  };
}

class App extends _react.default.Component {
  // Kept here for backwards compatibility.
  // When someone ended App they could call `super.componentDidCatch`.
  // @deprecated This method is no longer needed. Errors are caught at the top level
  componentDidCatch(error, _errorInfo) {
    throw error;
  }

  render() {
    const {
      router,
      Component,
      pageProps,
      __N_SSG,
      __N_SSP
    } = this.props;
    return /*#__PURE__*/_react.default.createElement(Component, Object.assign({}, pageProps, // we don't add the legacy URL prop if it's using non-legacy
    // methods like getStaticProps and getServerSideProps
    !(__N_SSG || __N_SSP) ? {
      url: createUrl(router)
    } : {}));
  }

}

exports.default = App;
App.origGetInitialProps = appGetInitialProps;
App.getInitialProps = appGetInitialProps;
let warnContainer;
let warnUrl;

if (false) {} // @deprecated noop for now until removal


function Container(p) {
  if (false) {}
  return p.children;
}

function createUrl(router) {
  // This is to make sure we don't references the router object at call time
  const {
    pathname,
    asPath,
    query
  } = router;
  return {
    get query() {
      if (false) {}
      return query;
    },

    get pathname() {
      if (false) {}
      return pathname;
    },

    get asPath() {
      if (false) {}
      return asPath;
    },

    back: () => {
      if (false) {}
      router.back();
    },
    push: (url, as) => {
      if (false) {}
      return router.push(url, as);
    },
    pushTo: (href, as) => {
      if (false) {}
      const pushRoute = as ? href : '';
      const pushUrl = as || href;
      return router.push(pushRoute, pushUrl);
    },
    replace: (url, as) => {
      if (false) {}
      return router.replace(url, as);
    },
    replaceTo: (href, as) => {
      if (false) {}
      const replaceRoute = as ? href : '';
      const replaceUrl = as || href;
      return router.replace(replaceRoute, replaceUrl);
    }
  };
}

/***/ }),

/***/ 2400:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

exports.__esModule = true;
exports.Html = Html;
exports.Main = Main;
exports.NextScript = exports.Head = exports.default = void 0;

var _propTypes = _interopRequireDefault(__webpack_require__(4229));

var _react = _interopRequireWildcard(__webpack_require__(9297));

var _server = _interopRequireDefault(__webpack_require__(1168));

var _constants = __webpack_require__(227);

var _documentContext = __webpack_require__(3932);

var _utils = __webpack_require__(7579);

exports.DocumentContext = _utils.DocumentContext;
exports.DocumentInitialProps = _utils.DocumentInitialProps;
exports.DocumentProps = _utils.DocumentProps;

var _getPageFiles = __webpack_require__(6171);

var _utils2 = __webpack_require__(5105);

var _htmlescape = __webpack_require__(9630);

var _experimentalScript = _interopRequireDefault(__webpack_require__(1297));

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function () {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
    return {
      default: obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj.default = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

function getDocumentFiles(buildManifest, pathname, inAmpMode) {
  const sharedFiles = (0, _getPageFiles.getPageFiles)(buildManifest, '/_app');
  const pageFiles = inAmpMode ? [] : (0, _getPageFiles.getPageFiles)(buildManifest, pathname);
  return {
    sharedFiles,
    pageFiles,
    allFiles: [...new Set([...sharedFiles, ...pageFiles])]
  };
}
/**
* `Document` component handles the initial `document` markup and renders only on the server side.
* Commonly used for implementing server side rendering for `css-in-js` libraries.
*/


class Document extends _react.Component {
  /**
  * `getInitialProps` hook returns the context object with the addition of `renderPage`.
  * `renderPage` callback executes `React` rendering logic synchronously to support server-rendering wrappers
  */
  static async getInitialProps(ctx) {
    const enhanceApp = App => {
      return props => /*#__PURE__*/_react.default.createElement(App, props);
    };

    const {
      html,
      head
    } = await ctx.renderPage({
      enhanceApp
    });
    const styles = [...(0, _server.default)()];
    return {
      html,
      head,
      styles
    };
  }

  static renderDocument(DocumentComponent, props) {
    return /*#__PURE__*/_react.default.createElement(_documentContext.DocumentContext.Provider, {
      value: props
    }, /*#__PURE__*/_react.default.createElement(DocumentComponent, props));
  }

  render() {
    return /*#__PURE__*/_react.default.createElement(Html, null, /*#__PURE__*/_react.default.createElement(Head, null), /*#__PURE__*/_react.default.createElement("body", null, /*#__PURE__*/_react.default.createElement(Main, null), /*#__PURE__*/_react.default.createElement(NextScript, null)));
  }

}

exports.default = Document;

function Html(props) {
  const {
    inAmpMode,
    docComponentsRendered,
    locale
  } = (0, _react.useContext)(_documentContext.DocumentContext);
  docComponentsRendered.Html = true;
  return /*#__PURE__*/_react.default.createElement("html", Object.assign({}, props, {
    lang: props.lang || locale || undefined,
    amp: inAmpMode ? '' : undefined,
    "data-ampdevmode": inAmpMode && false ? '' : undefined
  }));
}

class Head extends _react.Component {
  constructor(...args) {
    super(...args);
    this.context = void 0;
  }

  getCssLinks(files) {
    const {
      assetPrefix,
      devOnlyCacheBusterQueryString,
      dynamicImports
    } = this.context;
    const cssFiles = files.allFiles.filter(f => f.endsWith('.css'));
    const sharedFiles = new Set(files.sharedFiles); // Unmanaged files are CSS files that will be handled directly by the
    // webpack runtime (`mini-css-extract-plugin`).

    let unmangedFiles = new Set([]);
    let dynamicCssFiles = Array.from(new Set(dynamicImports.filter(file => file.endsWith('.css'))));

    if (dynamicCssFiles.length) {
      const existing = new Set(cssFiles);
      dynamicCssFiles = dynamicCssFiles.filter(f => !(existing.has(f) || sharedFiles.has(f)));
      unmangedFiles = new Set(dynamicCssFiles);
      cssFiles.push(...dynamicCssFiles);
    }

    let cssLinkElements = [];
    cssFiles.forEach(file => {
      const isSharedFile = sharedFiles.has(file);

      if (true) {
        cssLinkElements.push( /*#__PURE__*/_react.default.createElement("link", {
          key: `${file}-preload`,
          nonce: this.props.nonce,
          rel: "preload",
          href: `${assetPrefix}/_next/${encodeURI(file)}${devOnlyCacheBusterQueryString}`,
          as: "style",
          crossOrigin: this.props.crossOrigin || undefined
        }));
      }

      const isUnmanagedFile = unmangedFiles.has(file);
      cssLinkElements.push( /*#__PURE__*/_react.default.createElement("link", {
        key: file,
        nonce: this.props.nonce,
        rel: "stylesheet",
        href: `${assetPrefix}/_next/${encodeURI(file)}${devOnlyCacheBusterQueryString}`,
        crossOrigin: this.props.crossOrigin || undefined,
        "data-n-g": isUnmanagedFile ? undefined : isSharedFile ? '' : undefined,
        "data-n-p": isUnmanagedFile ? undefined : isSharedFile ? undefined : ''
      }));
    });

    if (true) {
      cssLinkElements = this.makeStylesheetInert(cssLinkElements);
    }

    return cssLinkElements.length === 0 ? null : cssLinkElements;
  }

  getPreloadDynamicChunks() {
    const {
      dynamicImports,
      assetPrefix,
      devOnlyCacheBusterQueryString
    } = this.context;
    return dynamicImports.map(file => {
      if (!file.endsWith('.js')) {
        return null;
      }

      return /*#__PURE__*/_react.default.createElement("link", {
        rel: "preload",
        key: file,
        href: `${assetPrefix}/_next/${encodeURI(file)}${devOnlyCacheBusterQueryString}`,
        as: "script",
        nonce: this.props.nonce,
        crossOrigin: this.props.crossOrigin || undefined
      });
    }) // Filter out nulled scripts
    .filter(Boolean);
  }

  getPreloadMainLinks(files) {
    const {
      assetPrefix,
      devOnlyCacheBusterQueryString,
      scriptLoader
    } = this.context;
    const preloadFiles = files.allFiles.filter(file => {
      return file.endsWith('.js');
    });
    return [...(scriptLoader.eager || []).map(file => /*#__PURE__*/_react.default.createElement("link", {
      key: file.src,
      nonce: this.props.nonce,
      rel: "preload",
      href: file.src,
      as: "script",
      crossOrigin: this.props.crossOrigin || undefined
    })), ...preloadFiles.map(file => /*#__PURE__*/_react.default.createElement("link", {
      key: file,
      nonce: this.props.nonce,
      rel: "preload",
      href: `${assetPrefix}/_next/${encodeURI(file)}${devOnlyCacheBusterQueryString}`,
      as: "script",
      crossOrigin: this.props.crossOrigin || undefined
    })), ...(scriptLoader.defer || []).map(file => /*#__PURE__*/_react.default.createElement("link", {
      key: file,
      nonce: this.props.nonce,
      rel: "preload",
      href: file,
      as: "script",
      crossOrigin: this.props.crossOrigin || undefined
    }))];
  }

  handleDocumentScriptLoaderItems(children) {
    const {
      scriptLoader
    } = this.context;
    const scriptLoaderItems = [];
    const filteredChildren = [];

    _react.default.Children.forEach(children, child => {
      if (child.type === _experimentalScript.default) {
        if (child.props.strategy === 'eager') {
          scriptLoader.eager = (scriptLoader.eager || []).concat([_objectSpread({}, child.props)]);
          return;
        } else if (['lazy', 'defer'].includes(child.props.strategy)) {
          scriptLoaderItems.push(child.props);
          return;
        }
      }

      filteredChildren.push(child);
    });

    this.context.__NEXT_DATA__.scriptLoader = scriptLoaderItems;
    return filteredChildren;
  }

  makeStylesheetInert(node) {
    return _react.default.Children.map(node, c => {
      if (c.type === 'link' && c.props['href'] && _constants.OPTIMIZED_FONT_PROVIDERS.some(url => c.props['href'].startsWith(url))) {
        const newProps = _objectSpread({}, c.props || {});

        newProps['data-href'] = newProps['href'];
        newProps['href'] = undefined;
        return /*#__PURE__*/_react.default.cloneElement(c, newProps);
      } else if (c.props && c.props['children']) {
        c.props['children'] = this.makeStylesheetInert(c.props['children']);
      }

      return c;
    });
  }

  render() {
    var _this$props$nonce, _this$props$nonce2;

    const {
      styles,
      ampPath,
      inAmpMode,
      hybridAmp,
      canonicalBase,
      __NEXT_DATA__,
      dangerousAsPath,
      headTags,
      unstable_runtimeJS,
      unstable_JsPreload
    } = this.context;
    const disableRuntimeJS = unstable_runtimeJS === false;
    const disableJsPreload = unstable_JsPreload === false;
    this.context.docComponentsRendered.Head = true;
    let {
      head
    } = this.context;
    let cssPreloads = [];
    let otherHeadElements = [];

    if (head) {
      head.forEach(c => {
        if (c && c.type === 'link' && c.props['rel'] === 'preload' && c.props['as'] === 'style') {
          cssPreloads.push(c);
        } else {
          c && otherHeadElements.push(c);
        }
      });
      head = cssPreloads.concat(otherHeadElements);
    }

    let children = _react.default.Children.toArray(this.props.children).filter(Boolean); // show a warning if Head contains <title> (only in development)


    if (false) {}

    if ( true && !inAmpMode) {
      children = this.makeStylesheetInert(children);
    }

    if (false) {}

    let hasAmphtmlRel = false;
    let hasCanonicalRel = false; // show warning and remove conflicting amp head tags

    head = _react.default.Children.map(head || [], child => {
      if (!child) return child;
      const {
        type,
        props
      } = child;

      if (inAmpMode) {
        let badProp = '';

        if (type === 'meta' && props.name === 'viewport') {
          badProp = 'name="viewport"';
        } else if (type === 'link' && props.rel === 'canonical') {
          hasCanonicalRel = true;
        } else if (type === 'script') {
          // only block if
          // 1. it has a src and isn't pointing to ampproject's CDN
          // 2. it is using dangerouslySetInnerHTML without a type or
          // a type of text/javascript
          if (props.src && props.src.indexOf('ampproject') < -1 || props.dangerouslySetInnerHTML && (!props.type || props.type === 'text/javascript')) {
            badProp = '<script';
            Object.keys(props).forEach(prop => {
              badProp += ` ${prop}="${props[prop]}"`;
            });
            badProp += '/>';
          }
        }

        if (badProp) {
          console.warn(`Found conflicting amp tag "${child.type}" with conflicting prop ${badProp} in ${__NEXT_DATA__.page}. https://nextjs.org/docs/messages/conflicting-amp-tag`);
          return null;
        }
      } else {
        // non-amp mode
        if (type === 'link' && props.rel === 'amphtml') {
          hasAmphtmlRel = true;
        }
      }

      return child;
    }); // try to parse styles from fragment for backwards compat

    const curStyles = Array.isArray(styles) ? styles : [];

    if (inAmpMode && styles && // @ts-ignore Property 'props' does not exist on type ReactElement
    styles.props && // @ts-ignore Property 'props' does not exist on type ReactElement
    Array.isArray(styles.props.children)) {
      const hasStyles = el => {
        var _el$props, _el$props$dangerously;

        return el == null ? void 0 : (_el$props = el.props) == null ? void 0 : (_el$props$dangerously = _el$props.dangerouslySetInnerHTML) == null ? void 0 : _el$props$dangerously.__html;
      }; // @ts-ignore Property 'props' does not exist on type ReactElement


      styles.props.children.forEach(child => {
        if (Array.isArray(child)) {
          child.forEach(el => hasStyles(el) && curStyles.push(el));
        } else if (hasStyles(child)) {
          curStyles.push(child);
        }
      });
    }

    const files = getDocumentFiles(this.context.buildManifest, this.context.__NEXT_DATA__.page, inAmpMode);
    return /*#__PURE__*/_react.default.createElement("head", this.props, this.context.isDevelopment && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("style", {
      "data-next-hide-fouc": true,
      "data-ampdevmode": inAmpMode ? 'true' : undefined,
      dangerouslySetInnerHTML: {
        __html: `body{display:none}`
      }
    }), /*#__PURE__*/_react.default.createElement("noscript", {
      "data-next-hide-fouc": true,
      "data-ampdevmode": inAmpMode ? 'true' : undefined
    }, /*#__PURE__*/_react.default.createElement("style", {
      dangerouslySetInnerHTML: {
        __html: `body{display:block}`
      }
    }))), children, head, /*#__PURE__*/_react.default.createElement("meta", {
      name: "next-head-count",
      content: _react.default.Children.count(head || []).toString()
    }), inAmpMode && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("meta", {
      name: "viewport",
      content: "width=device-width,minimum-scale=1,initial-scale=1"
    }), !hasCanonicalRel && /*#__PURE__*/_react.default.createElement("link", {
      rel: "canonical",
      href: canonicalBase + (0, _utils2.cleanAmpPath)(dangerousAsPath)
    }), /*#__PURE__*/_react.default.createElement("link", {
      rel: "preload",
      as: "script",
      href: "https://cdn.ampproject.org/v0.js"
    }), styles && /*#__PURE__*/_react.default.createElement("style", {
      "amp-custom": "",
      dangerouslySetInnerHTML: {
        __html: curStyles.map(style => style.props.dangerouslySetInnerHTML.__html).join('').replace(/\/\*# sourceMappingURL=.*\*\//g, '').replace(/\/\*@ sourceURL=.*?\*\//g, '')
      }
    }), /*#__PURE__*/_react.default.createElement("style", {
      "amp-boilerplate": "",
      dangerouslySetInnerHTML: {
        __html: `body{-webkit-animation:-amp-start 8s steps(1,end) 0s 1 normal both;-moz-animation:-amp-start 8s steps(1,end) 0s 1 normal both;-ms-animation:-amp-start 8s steps(1,end) 0s 1 normal both;animation:-amp-start 8s steps(1,end) 0s 1 normal both}@-webkit-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-moz-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-ms-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-o-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}`
      }
    }), /*#__PURE__*/_react.default.createElement("noscript", null, /*#__PURE__*/_react.default.createElement("style", {
      "amp-boilerplate": "",
      dangerouslySetInnerHTML: {
        __html: `body{-webkit-animation:none;-moz-animation:none;-ms-animation:none;animation:none}`
      }
    })), /*#__PURE__*/_react.default.createElement("script", {
      async: true,
      src: "https://cdn.ampproject.org/v0.js"
    })), !inAmpMode && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, !hasAmphtmlRel && hybridAmp && /*#__PURE__*/_react.default.createElement("link", {
      rel: "amphtml",
      href: canonicalBase + getAmpPath(ampPath, dangerousAsPath)
    }),  true && this.getCssLinks(files),  true && /*#__PURE__*/_react.default.createElement("noscript", {
      "data-n-css": (_this$props$nonce = this.props.nonce) != null ? _this$props$nonce : ''
    }), !disableRuntimeJS && !disableJsPreload && this.getPreloadDynamicChunks(), !disableRuntimeJS && !disableJsPreload && this.getPreloadMainLinks(files),  false && 0,  false && /*#__PURE__*/0, this.context.isDevelopment &&
    /*#__PURE__*/
    // this element is used to mount development styles so the
    // ordering matches production
    // (by default, style-loader injects at the bottom of <head />)
    _react.default.createElement("noscript", {
      id: "__next_css__DO_NOT_USE__"
    }), styles || null), /*#__PURE__*/_react.default.createElement(_react.default.Fragment, {}, ...(headTags || [])));
  }

}

exports.Head = Head;
Head.contextType = _documentContext.DocumentContext;
Head.propTypes = {
  nonce: _propTypes.default.string,
  crossOrigin: _propTypes.default.string
};

function Main() {
  const {
    inAmpMode,
    html,
    docComponentsRendered
  } = (0, _react.useContext)(_documentContext.DocumentContext);
  docComponentsRendered.Main = true;
  if (inAmpMode) return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, _constants.AMP_RENDER_TARGET);
  return /*#__PURE__*/_react.default.createElement("div", {
    id: "__next",
    dangerouslySetInnerHTML: {
      __html: html
    }
  });
}

class NextScript extends _react.Component {
  constructor(...args) {
    super(...args);
    this.context = void 0;
  }

  getDynamicChunks(files) {
    const {
      dynamicImports,
      assetPrefix,
      isDevelopment,
      devOnlyCacheBusterQueryString
    } = this.context;
    return dynamicImports.map(file => {
      if (!file.endsWith('.js') || files.allFiles.includes(file)) return null;
      return /*#__PURE__*/_react.default.createElement("script", {
        async: !isDevelopment,
        key: file,
        src: `${assetPrefix}/_next/${encodeURI(file)}${devOnlyCacheBusterQueryString}`,
        nonce: this.props.nonce,
        crossOrigin: this.props.crossOrigin || undefined
      });
    });
  }

  getPreNextScripts() {
    const {
      scriptLoader
    } = this.context;
    return (scriptLoader.eager || []).map(file => {
      const {
        strategy
      } = file,
            props = _objectWithoutProperties(file, ["strategy"]);

      return /*#__PURE__*/_react.default.createElement("script", Object.assign({}, props, {
        nonce: this.props.nonce,
        crossOrigin: this.props.crossOrigin || undefined
      }));
    });
  }

  getScripts(files) {
    var _buildManifest$lowPri;

    const {
      assetPrefix,
      buildManifest,
      isDevelopment,
      devOnlyCacheBusterQueryString
    } = this.context;
    const normalScripts = files.allFiles.filter(file => file.endsWith('.js'));
    const lowPriorityScripts = (_buildManifest$lowPri = buildManifest.lowPriorityFiles) == null ? void 0 : _buildManifest$lowPri.filter(file => file.endsWith('.js'));
    return [...normalScripts, ...lowPriorityScripts].map(file => {
      return /*#__PURE__*/_react.default.createElement("script", {
        key: file,
        src: `${assetPrefix}/_next/${encodeURI(file)}${devOnlyCacheBusterQueryString}`,
        nonce: this.props.nonce,
        async: !isDevelopment,
        crossOrigin: this.props.crossOrigin || undefined
      });
    });
  }

  getPolyfillScripts() {
    // polyfills.js has to be rendered as nomodule without async
    // It also has to be the first script to load
    const {
      assetPrefix,
      buildManifest,
      devOnlyCacheBusterQueryString
    } = this.context;
    return buildManifest.polyfillFiles.filter(polyfill => polyfill.endsWith('.js') && !polyfill.endsWith('.module.js')).map(polyfill => /*#__PURE__*/_react.default.createElement("script", {
      key: polyfill,
      nonce: this.props.nonce,
      crossOrigin: this.props.crossOrigin || undefined,
      noModule: true,
      src: `${assetPrefix}/_next/${polyfill}${devOnlyCacheBusterQueryString}`
    }));
  }

  static getInlineScriptSource(documentProps) {
    const {
      __NEXT_DATA__
    } = documentProps;

    try {
      const data = JSON.stringify(__NEXT_DATA__);
      return (0, _htmlescape.htmlEscapeJsonString)(data);
    } catch (err) {
      if (err.message.indexOf('circular structure')) {
        throw new Error(`Circular structure in "getInitialProps" result of page "${__NEXT_DATA__.page}". https://nextjs.org/docs/messages/circular-structure`);
      }

      throw err;
    }
  }

  render() {
    const {
      assetPrefix,
      inAmpMode,
      buildManifest,
      unstable_runtimeJS,
      docComponentsRendered,
      devOnlyCacheBusterQueryString
    } = this.context;
    const disableRuntimeJS = unstable_runtimeJS === false;
    docComponentsRendered.NextScript = true;

    if (inAmpMode) {
      if (true) {
        return null;
      }

      const ampDevFiles = [...buildManifest.devFiles, ...buildManifest.polyfillFiles, ...buildManifest.ampDevFiles];
      return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, disableRuntimeJS ? null : /*#__PURE__*/_react.default.createElement("script", {
        id: "__NEXT_DATA__",
        type: "application/json",
        nonce: this.props.nonce,
        crossOrigin: this.props.crossOrigin || undefined,
        dangerouslySetInnerHTML: {
          __html: NextScript.getInlineScriptSource(this.context)
        },
        "data-ampdevmode": true
      }), ampDevFiles.map(file => /*#__PURE__*/_react.default.createElement("script", {
        key: file,
        src: `${assetPrefix}/_next/${file}${devOnlyCacheBusterQueryString}`,
        nonce: this.props.nonce,
        crossOrigin: this.props.crossOrigin || undefined,
        "data-ampdevmode": true
      })));
    }

    if (false) {}

    const files = getDocumentFiles(this.context.buildManifest, this.context.__NEXT_DATA__.page, inAmpMode);
    return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, !disableRuntimeJS && buildManifest.devFiles ? buildManifest.devFiles.map(file => /*#__PURE__*/_react.default.createElement("script", {
      key: file,
      src: `${assetPrefix}/_next/${encodeURI(file)}${devOnlyCacheBusterQueryString}`,
      nonce: this.props.nonce,
      crossOrigin: this.props.crossOrigin || undefined
    })) : null, disableRuntimeJS ? null : /*#__PURE__*/_react.default.createElement("script", {
      id: "__NEXT_DATA__",
      type: "application/json",
      nonce: this.props.nonce,
      crossOrigin: this.props.crossOrigin || undefined,
      dangerouslySetInnerHTML: {
        __html: NextScript.getInlineScriptSource(this.context)
      }
    }), !disableRuntimeJS && this.getPolyfillScripts(), !disableRuntimeJS && this.getPreNextScripts(), disableRuntimeJS ? null : this.getDynamicChunks(files), disableRuntimeJS ? null : this.getScripts(files));
  }

}

exports.NextScript = NextScript;
NextScript.contextType = _documentContext.DocumentContext;
NextScript.propTypes = {
  nonce: _propTypes.default.string,
  crossOrigin: _propTypes.default.string
};
NextScript.safariNomoduleFix = '!function(){var e=document,t=e.createElement("script");if(!("noModule"in t)&&"onbeforeload"in t){var n=!1;e.addEventListener("beforeload",function(e){if(e.target===t)n=!0;else if(!e.target.hasAttribute("nomodule")||!n)return;e.preventDefault()},!0),t.type="module",t.src=".",e.head.appendChild(t),t.remove()}}();';

function getAmpPath(ampPath, asPath) {
  return ampPath || `${asPath}${asPath.includes('?') ? '&' : '?'}amp=1`;
}

/***/ }),

/***/ 900:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(2426);

exports.__esModule = true;
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(9297));

var _head = _interopRequireDefault(__webpack_require__(5273));

const statusCodes = {
  400: 'Bad Request',
  404: 'This page could not be found',
  405: 'Method Not Allowed',
  500: 'Internal Server Error'
};

function _getInitialProps({
  res,
  err
}) {
  const statusCode = res && res.statusCode ? res.statusCode : err ? err.statusCode : 404;
  return {
    statusCode
  };
}
/**
* `Error` component used for handling errors.
*/


class Error extends _react.default.Component {
  render() {
    const {
      statusCode
    } = this.props;
    const title = this.props.title || statusCodes[statusCode] || 'An unexpected error has occurred';
    return /*#__PURE__*/_react.default.createElement("div", {
      style: styles.error
    }, /*#__PURE__*/_react.default.createElement(_head.default, null, /*#__PURE__*/_react.default.createElement("title", null, statusCode, ": ", title)), /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("style", {
      dangerouslySetInnerHTML: {
        __html: 'body { margin: 0 }'
      }
    }), statusCode ? /*#__PURE__*/_react.default.createElement("h1", {
      style: styles.h1
    }, statusCode) : null, /*#__PURE__*/_react.default.createElement("div", {
      style: styles.desc
    }, /*#__PURE__*/_react.default.createElement("h2", {
      style: styles.h2
    }, title, "."))));
  }

}

exports.default = Error;
Error.displayName = 'ErrorPage';
Error.getInitialProps = _getInitialProps;
Error.origGetInitialProps = _getInitialProps;
const styles = {
  error: {
    color: '#000',
    background: '#fff',
    fontFamily: '-apple-system, BlinkMacSystemFont, Roboto, "Segoe UI", "Fira Sans", Avenir, "Helvetica Neue", "Lucida Grande", sans-serif',
    height: '100vh',
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'
  },
  desc: {
    display: 'inline-block',
    textAlign: 'left',
    lineHeight: '49px',
    height: '49px',
    verticalAlign: 'middle'
  },
  h1: {
    display: 'inline-block',
    borderRight: '1px solid rgba(0, 0, 0,.3)',
    margin: 0,
    marginRight: '20px',
    padding: '10px 23px 10px 0',
    fontSize: '24px',
    fontWeight: 500,
    verticalAlign: 'top'
  },
  h2: {
    fontSize: '14px',
    fontWeight: 'normal',
    lineHeight: 'inherit',
    margin: 0,
    padding: 0
  }
};

/***/ }),

/***/ 7639:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ _project_; },
  "getStaticPaths": function() { return /* binding */ getStaticPaths; },
  "getStaticProps": function() { return /* binding */ getStaticProps; }
});

;// CONCATENATED MODULE: external "react/jsx-runtime"
var jsx_runtime_namespaceObject = require("react/jsx-runtime");;
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
;// CONCATENATED MODULE: external "firebase-admin"
var external_firebase_admin_namespaceObject = require("firebase-admin");;
;// CONCATENATED MODULE: ./lib/firebase-admin.js


if (!external_firebase_admin_namespaceObject.apps.length) {
  external_firebase_admin_namespaceObject.initializeApp({
    credential: external_firebase_admin_namespaceObject.credential.cert({
      client_email: 'firebase-adminsdk-ef8mp@saas-startup-a5a34.iam.gserviceaccount.com',
      private_key: '-----BEGIN PRIVATE KEY-----\nMIIEvAIBADANBgkqhkiG9w0BAQEFAASCBKYwggSiAgEAAoIBAQClZWkim9PKKr52\nD0ZDEuv4ITBHUrI/rTpXOYzqJns4Y4bBEPKe202o5MwMbu/egWIfmeL5I+RPg6Gq\nnjAFqLmaxYvf0wMWowDiNVx7PcujR3dU8A/GYoyTUQpX/qv6754SuJxnm+AA6LkY\nkv5HtyvQ1WYLsCB2MF5ia/73wBuH8+UkomX5GJ0CFgexk4qAnvhHxtv8WZxX3dlF\nDXx4Ex8/uyc9i/I51D/NhDknAG/s8TGbOuuTu7oBnpp8jivJRNEf+pvjatbwOh8R\n782Rnmnwsu0PzINCc5boztqmaJEW6pKl8kNlm9FvpKcwcYO2IrfRGWwXLF4oK88z\ncM3XAZldAgMBAAECggEAHB7SUbqJtzEuQbdWHFhOu1i1MyMpwC7NIQBdZ4AUaiFt\ny0x826pwmTsRQDnqWXvI+ZN55h8GlchNB8uuYX/u0pQstGjVeRdMsqkc6K04frHL\nZasNG48s1G0uY4iep+LujsNJgEoduznWIon3Zq0La42ktG8FDeMqYPR4nJnSdHoq\nm3pWfJir+qnMHsiP5QVRc4gISUueK77699EL8rFyM4dWCbRfi7Y0BAu/rkcFboiP\n1HHXEJ/cViGKqVHLwrsSjceA42SP+nAiDUxyLqLhZMoeWAMko1COZ2XNjcEWDBm5\nCd7RCA0KTDPWrc0BhjRVwwPtC7QV1Y+kuikct7ayQQKBgQDXc5ei5m0b/hD7DoS5\nSWCtpKq9Bjmt6sprfv9OMyauC9lybP6KjkY/hRGlZJH2wxMt33rS+XQx5pJg4KRQ\nCcvkFr9brvxe/yrUCJh32sRk3F6Lv7CUFHUBfigZpfBvjiZPyymGg1KXay1M38Oa\nc8/dszni5rELlqlithFLiuDMfQKBgQDEhikIUkXZUwNjfhBUWxFu7gVA4GpcJZLs\nluAts2nL92MrYG+Zux1WZkBtx/PQ4ZZ2N9iw0zDAtHpuCpjVulRsZuNbEKkRyGoL\ngw1Ah4KQf/e38AEtJPvYN77MaFwDl+mangqTQY/myNqtRme83cmxBIb//Zmx2q+H\nXRXUpOT2YQKBgHsM48//9tUD+ELK+faw9+x0naczxQGVlWJrt/i7sh25WsnFgmMz\n+t8QaxGhLNRYeb27Y3TXUAun+nYmFvI3hiGQ9F2yxSSka5uKBTp+0aghTEZYhsss\nG99sZA6x/W5ZK3xrNh5DJoqghdDgA+FUv6WJVUhIJVnPBJMCFUKl4NopAoGAV9ol\no6urv/AlNqfXQu6HB5Dt1ke8JD9Dw/Hae3OV2vFXar+shAuqnMIPEURukTUXXveu\nLbXrOGo1xNWF5x1puh/wiPgUrHdsOIM4PF2Xl2MtaROoYvcCgnDBIX2RjKWvb0gx\nMA0B+EhXwVgU7dAz5qdAdlV3DJPXHesV5D5mgGECgYB5xR0eaeD5UjLsdi9+sQVR\nJvwrsVmQJjdbobD6Uju70M5h6gAyXZXajX9nb97sUtnjWYFLWcCOYuOVaf4+5vZF\nVb/k+kfmZKPsQIdt8cWvK+tVTiljxGUjf/+cg/6fwcV4jGhPFZDWLBjC5j5OZZIZ\n5ovF+rOXON7XT99FDbeDFQ==\n-----END PRIVATE KEY-----\n',
      project_id: 'saas-startup-a5a34'
    }),
    databaseURL: 'https://saas-startup.firebaseio.com'
  });
}

const auth = external_firebase_admin_namespaceObject.auth();
const db = external_firebase_admin_namespaceObject.firestore();

;// CONCATENATED MODULE: external "next/router"
var router_namespaceObject = require("next/router");;
;// CONCATENATED MODULE: ./pages/dashboard/projects/[project]/index.js



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





const ProjectPage = ({
  projects
}) => {
  const {
    0: selectedProject,
    1: setSelectedProject
  } = (0,external_react_.useState)(null);
  const router = (0,router_namespaceObject.useRouter)();
  (0,external_react_.useEffect)(() => {
    projects && setSelectedProject(projects[0]);
  }, [projects]);
  console.log(projects);

  if (router.isFallback) {
    return /*#__PURE__*/jsx_runtime_namespaceObject.jsx("div", {
      children: /*#__PURE__*/jsx_runtime_namespaceObject.jsx("p", {
        children: "Loading..."
      })
    });
  }

  return /*#__PURE__*/(0,jsx_runtime_namespaceObject.jsxs)("div", {
    children: [/*#__PURE__*/jsx_runtime_namespaceObject.jsx("h2", {
      children: "Welcome to the project page! Project name:"
    }), selectedProject && /*#__PURE__*/jsx_runtime_namespaceObject.jsx("p", {
      children: selectedProject.projectName
    })]
  });
};

const getStaticPaths = async () => {
  // const { projects } = await getAllProjects();
  const snapshot = await db.collection('projects').get();
  const projects = [];
  snapshot.forEach(doc => {
    projects.push(doc.data());
  });
  const paths = projects.map(project => ({
    params: {
      project: project.projectName.toString()
    }
  }));
  return {
    paths: paths,
    fallback: true
  };
};
const getStaticProps = async ({
  params
}) => {
  // const { projects } = await getParticularProject(params.work);
  let ref = db.collection('projects').where('projectName', '==', params.project);
  const snapshot = await ref.get();
  const projects = [];
  snapshot.forEach(doc => {
    projects.push(_objectSpread({
      id: doc.id
    }, doc.data()));
  });
  return {
    props: {
      projects
    },
    revalidate: 1
  };
}; // export const getServerSideProps = async ({ params }) => {
//   let ref = db.collection('projects').where('projectName', '==', params.project);
//   const snapshot = await ref.get();
//   const projects = [];
//   snapshot.forEach((doc) => {
//     projects.push({ id: doc.id, ...doc.data() });
//   });
//   return {
//     props: { projects },
//   };
// };

/* harmony default export */ var _project_ = (ProjectPage);

/***/ }),

/***/ 8098:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "_app": function() { return /* binding */ _app; },
  "config": function() { return /* binding */ config; },
  "default": function() { return /* binding */ next_serverless_loaderpage_2Fdashboard_2Fprojects_2F_5Bproject_5D_absolutePagePath_private_next_pages_2Fdashboard_2Fprojects_2F_5Bproject_5D_2Findex_js_absoluteAppPath_next_2Fdist_2Fpages_2F_app_absoluteDocumentPath_next_2Fdist_2Fpages_2F_document_absoluteErrorPath_next_2Fdist_2Fpages_2F_error_absolute404Path_distDir_private_dot_next_buildId_lKNjmX0M3q5qNEvSowcvP_assetPrefix_generateEtags_true_poweredByHeader_true_canonicalBase_basePath_runtimeConfig_previewProps_7B_22previewModeId_22_3A_22a8d95e08131a69b0383808cb41d5d532_22_2C_22previewModeSigningKey_22_3A_22f2d412ea935873878ea6bcf6b695b92731f01fd5110b3d91d925eb2466a130c0_22_2C_22previewModeEncryptionKey_22_3A_2236708841072afeb4fcd082dee1e3efa79e84c9177d8fada9b256dfd53328f6ba_22_7D_loadedEnvFiles_W10_3D_i18n_; },
  "getServerSideProps": function() { return /* binding */ getServerSideProps; },
  "getStaticPaths": function() { return /* binding */ getStaticPaths; },
  "getStaticProps": function() { return /* binding */ getStaticProps; },
  "render": function() { return /* binding */ render; },
  "renderReqToHTML": function() { return /* binding */ renderReqToHTML; },
  "unstable_getServerProps": function() { return /* binding */ unstable_getServerProps; },
  "unstable_getStaticParams": function() { return /* binding */ unstable_getStaticParams; },
  "unstable_getStaticPaths": function() { return /* binding */ unstable_getStaticPaths; },
  "unstable_getStaticProps": function() { return /* binding */ unstable_getStaticProps; }
});

;// CONCATENATED MODULE: external "next/dist/next-server/server/node-polyfill-fetch"
var node_polyfill_fetch_namespaceObject = require("next/dist/next-server/server/node-polyfill-fetch");;
;// CONCATENATED MODULE: ./.next/routes-manifest.json
var routes_manifest_namespaceObject = {"Dg":[]};
;// CONCATENATED MODULE: ./.next/build-manifest.json
var build_manifest_namespaceObject = JSON.parse('{"polyfillFiles":["static/chunks/polyfills-8683bd742a84c1edd48c.js"],"devFiles":[],"ampDevFiles":[],"lowPriorityFiles":["static/lKNjmX0M3q5qNEvSowcvP/_buildManifest.js","static/lKNjmX0M3q5qNEvSowcvP/_ssgManifest.js"],"pages":{"/":["static/chunks/webpack-5c05da124049f0ec2190.js","static/chunks/framework-7757f09221172069b5a8.js","static/chunks/commons-54d43cd2ae0ecc57bcd8.js","static/chunks/main-4923da57fc3c04240a7b.js","static/chunks/be0cb90b-602d912127be1d528650.js","static/chunks/ff239f9d-860ce0828edbac8aea82.js","static/chunks/499-8379d5228402dcec1053.js","static/chunks/pages/index-5f3efff543a6b850827d.js"],"/_app":["static/chunks/webpack-5c05da124049f0ec2190.js","static/chunks/framework-7757f09221172069b5a8.js","static/chunks/commons-54d43cd2ae0ecc57bcd8.js","static/chunks/main-4923da57fc3c04240a7b.js","static/chunks/pages/_app-a568ddad6b26c88f3480.js"],"/_error":["static/chunks/webpack-5c05da124049f0ec2190.js","static/chunks/framework-7757f09221172069b5a8.js","static/chunks/commons-54d43cd2ae0ecc57bcd8.js","static/chunks/main-4923da57fc3c04240a7b.js","static/chunks/pages/_error-7d791417d4e33b868a17.js"],"/dashboard/projects/[project]":["static/chunks/webpack-5c05da124049f0ec2190.js","static/chunks/framework-7757f09221172069b5a8.js","static/chunks/commons-54d43cd2ae0ecc57bcd8.js","static/chunks/main-4923da57fc3c04240a7b.js","static/chunks/pages/dashboard/projects/[project]-addd4ae9f0b6eea84d06.js"]},"ampFirstPages":[]}');
;// CONCATENATED MODULE: ./.next/react-loadable-manifest.json
var react_loadable_manifest_namespaceObject = {};
// EXTERNAL MODULE: ./node_modules/next/dist/build/webpack/loaders/next-serverless-loader/page-handler.js
var page_handler = __webpack_require__(9436);
;// CONCATENATED MODULE: ./node_modules/next/dist/build/webpack/loaders/next-serverless-loader/index.js?page=%2Fdashboard%2Fprojects%2F%5Bproject%5D&absolutePagePath=private-next-pages%2Fdashboard%2Fprojects%2F%5Bproject%5D%2Findex.js&absoluteAppPath=next%2Fdist%2Fpages%2F_app&absoluteDocumentPath=next%2Fdist%2Fpages%2F_document&absoluteErrorPath=next%2Fdist%2Fpages%2F_error&absolute404Path=&distDir=private-dot-next&buildId=lKNjmX0M3q5qNEvSowcvP&assetPrefix=&generateEtags=true&poweredByHeader=true&canonicalBase=&basePath=&runtimeConfig=&previewProps=%7B%22previewModeId%22%3A%22a8d95e08131a69b0383808cb41d5d532%22%2C%22previewModeSigningKey%22%3A%22f2d412ea935873878ea6bcf6b695b92731f01fd5110b3d91d925eb2466a130c0%22%2C%22previewModeEncryptionKey%22%3A%2236708841072afeb4fcd082dee1e3efa79e84c9177d8fada9b256dfd53328f6ba%22%7D&loadedEnvFiles=W10%3D&i18n=!

      
      
      
      

      
      const { processEnv } = __webpack_require__(4227)
      processEnv([])
    
      
      const runtimeConfig = {}
      ;

      const documentModule = __webpack_require__(2400)

      const appMod = __webpack_require__(6381)
      let App = appMod.default || appMod.then && appMod.then(mod => mod.default);

      const compMod = __webpack_require__(7639)

      const Component = compMod.default || compMod.then && compMod.then(mod => mod.default)
      /* harmony default export */ var next_serverless_loaderpage_2Fdashboard_2Fprojects_2F_5Bproject_5D_absolutePagePath_private_next_pages_2Fdashboard_2Fprojects_2F_5Bproject_5D_2Findex_js_absoluteAppPath_next_2Fdist_2Fpages_2F_app_absoluteDocumentPath_next_2Fdist_2Fpages_2F_document_absoluteErrorPath_next_2Fdist_2Fpages_2F_error_absolute404Path_distDir_private_dot_next_buildId_lKNjmX0M3q5qNEvSowcvP_assetPrefix_generateEtags_true_poweredByHeader_true_canonicalBase_basePath_runtimeConfig_previewProps_7B_22previewModeId_22_3A_22a8d95e08131a69b0383808cb41d5d532_22_2C_22previewModeSigningKey_22_3A_22f2d412ea935873878ea6bcf6b695b92731f01fd5110b3d91d925eb2466a130c0_22_2C_22previewModeEncryptionKey_22_3A_2236708841072afeb4fcd082dee1e3efa79e84c9177d8fada9b256dfd53328f6ba_22_7D_loadedEnvFiles_W10_3D_i18n_ = (Component);
      const getStaticProps = compMod['getStaticProp' + 's'] || compMod.then && compMod.then(mod => mod['getStaticProp' + 's'])
      const getStaticPaths = compMod['getStaticPath' + 's'] || compMod.then && compMod.then(mod => mod['getStaticPath' + 's'])
      const getServerSideProps = compMod['getServerSideProp' + 's'] || compMod.then && compMod.then(mod => mod['getServerSideProp' + 's'])

      // kept for detecting legacy exports
      const unstable_getStaticParams = compMod['unstable_getStaticParam' + 's'] || compMod.then && compMod.then(mod => mod['unstable_getStaticParam' + 's'])
      const unstable_getStaticProps = compMod['unstable_getStaticProp' + 's'] || compMod.then && compMod.then(mod => mod['unstable_getStaticProp' + 's'])
      const unstable_getStaticPaths = compMod['unstable_getStaticPath' + 's'] || compMod.then && compMod.then(mod => mod['unstable_getStaticPath' + 's'])
      const unstable_getServerProps = compMod['unstable_getServerProp' + 's'] || compMod.then && compMod.then(mod => mod['unstable_getServerProp' + 's'])

      let config = compMod['confi' + 'g'] || (compMod.then && compMod.then(mod => mod['confi' + 'g'])) || {}
      const _app = App

      const combinedRewrites = Array.isArray(routes_manifest_namespaceObject.Dg)
        ? routes_manifest_namespaceObject.Dg
        : []

      if (!Array.isArray(routes_manifest_namespaceObject.Dg)) {
        combinedRewrites.push(...routes_manifest_namespaceObject.Dg.beforeFiles)
        combinedRewrites.push(...routes_manifest_namespaceObject.Dg.afterFiles)
        combinedRewrites.push(...routes_manifest_namespaceObject.Dg.fallback)
      }

      const { renderReqToHTML, render } = (0,page_handler/* getPageHandler */.u)({
        pageModule: compMod,
        pageComponent: Component,
        pageConfig: config,
        appModule: App,
        documentModule: documentModule,
        errorModule: __webpack_require__(900),
        notFoundModule: undefined,
        pageGetStaticProps: getStaticProps,
        pageGetStaticPaths: getStaticPaths,
        pageGetServerSideProps: getServerSideProps,

        assetPrefix: "",
        canonicalBase: "",
        generateEtags: true,
        poweredByHeader: true,

        runtimeConfig,
        buildManifest: build_manifest_namespaceObject,
        reactLoadableManifest: react_loadable_manifest_namespaceObject,

        rewrites: combinedRewrites,
        i18n: undefined,
        page: "/dashboard/projects/[project]",
        buildId: "lKNjmX0M3q5qNEvSowcvP",
        escapedBuildId: "lKNjmX0M3q5qNEvSowcvP",
        basePath: "",
        pageIsDynamic: true,
        encodedPreviewProps: {previewModeId:"a8d95e08131a69b0383808cb41d5d532",previewModeSigningKey:"f2d412ea935873878ea6bcf6b695b92731f01fd5110b3d91d925eb2466a130c0",previewModeEncryptionKey:"36708841072afeb4fcd082dee1e3efa79e84c9177d8fada9b256dfd53328f6ba"}
      })
      
    

/***/ }),

/***/ 9436:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";
var __webpack_unused_export__;
__webpack_unused_export__=true;exports.u=getPageHandler;var _url=__webpack_require__(8835);var _utils=__webpack_require__(7579);var _sendPayload=__webpack_require__(7369);var _utils2=__webpack_require__(2056);var _render=__webpack_require__(8460);var _apiUtils=__webpack_require__(2240);var _denormalizePagePath=__webpack_require__(9622);var _loadCustomRoutes=__webpack_require__(3997);var _getRouteFromAssetPath=_interopRequireDefault(__webpack_require__(9577));var _constants=__webpack_require__(227);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function getPageHandler(ctx){const{page,pageComponent,pageConfig,pageGetStaticProps,pageGetStaticPaths,pageGetServerSideProps,appModule,documentModule,errorModule,notFoundModule,encodedPreviewProps,pageIsDynamic,generateEtags,poweredByHeader,runtimeConfig,buildManifest,reactLoadableManifest,i18n,buildId,basePath,assetPrefix,canonicalBase,escapedBuildId}=ctx;const{handleLocale,handleRewrites,handleBasePath,defaultRouteRegex,dynamicRouteMatcher,interpolateDynamicPath,getParamsFromRouteMatches,normalizeDynamicRouteParams,normalizeVercelUrl}=(0,_utils2.getUtils)(ctx);async function renderReqToHTML(req,res,renderMode,_renderOpts,_params){let Component;let App;let config;let Document;let Error;let notFoundMod;let getStaticProps;let getStaticPaths;let getServerSideProps;[getStaticProps,getServerSideProps,getStaticPaths,Component,App,config,{default:Document},{default:Error},notFoundMod]=await Promise.all([pageGetStaticProps,pageGetServerSideProps,pageGetStaticPaths,pageComponent,appModule,pageConfig,documentModule,errorModule,notFoundModule]);const fromExport=renderMode==='export'||renderMode===true;const nextStartMode=renderMode==='passthrough';let hasValidParams=true;(0,_apiUtils.setLazyProp)({req:req},'cookies',(0,_apiUtils.getCookieParser)(req));const options={App,Document,buildManifest,getStaticProps,getServerSideProps,getStaticPaths,reactLoadableManifest,canonicalBase,buildId,assetPrefix,runtimeConfig:(runtimeConfig||{}).publicRuntimeConfig||{},previewProps:encodedPreviewProps,env:process.env,basePath,..._renderOpts};let _nextData=false;let defaultLocale=i18n==null?void 0:i18n.defaultLocale;let detectedLocale=i18n==null?void 0:i18n.defaultLocale;let parsedUrl;try{var _req$headers;// We need to trust the dynamic route params from the proxy
// to ensure we are using the correct values
const trustQuery=!getStaticProps&&req.headers[_utils2.vercelHeader];parsedUrl=(0,_url.parse)(req.url,true);let routeNoAssetPath=parsedUrl.pathname;if(basePath){routeNoAssetPath=routeNoAssetPath.replace(new RegExp(`^${basePath}`),'')||'/';}const origQuery=Object.assign({},parsedUrl.query);parsedUrl=handleRewrites(req,parsedUrl);handleBasePath(req,parsedUrl);// remove ?amp=1 from request URL if rendering for export
if(fromExport&&parsedUrl.query.amp){const queryNoAmp=Object.assign({},origQuery);delete queryNoAmp.amp;req.url=(0,_url.format)({...parsedUrl,search:undefined,query:queryNoAmp});}if(parsedUrl.pathname.match(/_next\/data/)){_nextData=page!=='/_error';parsedUrl.pathname=(0,_getRouteFromAssetPath.default)(parsedUrl.pathname.replace(new RegExp(`/_next/data/${escapedBuildId}/`),'/'),'.json');routeNoAssetPath=parsedUrl.pathname;}const localeResult=handleLocale(req,res,parsedUrl,routeNoAssetPath,fromExport||nextStartMode);defaultLocale=(localeResult==null?void 0:localeResult.defaultLocale)||defaultLocale;detectedLocale=(localeResult==null?void 0:localeResult.detectedLocale)||detectedLocale;routeNoAssetPath=(localeResult==null?void 0:localeResult.routeNoAssetPath)||routeNoAssetPath;if(parsedUrl.query.nextInternalLocale){detectedLocale=parsedUrl.query.nextInternalLocale;delete parsedUrl.query.nextInternalLocale;}const renderOpts=Object.assign({Component,pageConfig:config,nextExport:fromExport,isDataReq:_nextData,locales:i18n==null?void 0:i18n.locales,locale:detectedLocale,defaultLocale,domainLocales:i18n==null?void 0:i18n.domains},options);if(page==='/_error'&&!res.statusCode){res.statusCode=404;}let params={};if(!fromExport&&pageIsDynamic){const result=normalizeDynamicRouteParams(trustQuery?parsedUrl.query:dynamicRouteMatcher(parsedUrl.pathname));hasValidParams=result.hasValidParams;params=result.params;}let nowParams=null;if(pageIsDynamic&&!hasValidParams&&(_req$headers=req.headers)!=null&&_req$headers['x-now-route-matches']){nowParams=getParamsFromRouteMatches(req,renderOpts,detectedLocale);}// make sure to set renderOpts to the correct params e.g. _params
// if provided from worker or params if we're parsing them here
renderOpts.params=_params||params;normalizeVercelUrl(req,!!trustQuery);// normalize request URL/asPath for fallback/revalidate pages since the
// proxy sets the request URL to the output's path for fallback pages
if(pageIsDynamic&&nowParams&&defaultRouteRegex){const _parsedUrl=(0,_url.parse)(req.url);_parsedUrl.pathname=interpolateDynamicPath(_parsedUrl.pathname,nowParams);parsedUrl.pathname=_parsedUrl.pathname;req.url=(0,_url.format)(_parsedUrl);}// make sure to normalize asPath for revalidate and _next/data requests
// since the asPath should match what is shown on the client
if(!fromExport&&(getStaticProps||getServerSideProps)){// don't include dynamic route params in query while normalizing
// asPath
if(pageIsDynamic&&trustQuery&&defaultRouteRegex){delete parsedUrl.search;for(const param of Object.keys(defaultRouteRegex.groups)){delete origQuery[param];}}parsedUrl.pathname=(0,_denormalizePagePath.denormalizePagePath)(parsedUrl.pathname);renderOpts.resolvedUrl=(0,_url.format)({...parsedUrl,query:origQuery});// For getServerSideProps we need to ensure we use the original URL
// and not the resolved URL to prevent a hydration mismatch on asPath
renderOpts.resolvedAsPath=getServerSideProps?(0,_url.format)({...parsedUrl,pathname:routeNoAssetPath,query:origQuery}):renderOpts.resolvedUrl;}const isFallback=parsedUrl.query.__nextFallback;const previewData=(0,_apiUtils.tryGetPreviewData)(req,res,options.previewProps);const isPreviewMode=previewData!==false;if(true){renderOpts.optimizeFonts=true;/**
         * __webpack_require__.__NEXT_FONT_MANIFEST__ is added by
         * font-stylesheet-gathering-plugin
         */ // @ts-ignore
renderOpts.fontManifest=__webpack_require__.__NEXT_FONT_MANIFEST__;}let result=await(0,_render.renderToHTML)(req,res,page,Object.assign({},getStaticProps?{...(parsedUrl.query.amp?{amp:'1'}:{})}:parsedUrl.query,nowParams?nowParams:params,_params,isFallback?{__nextFallback:'true'}:{}),renderOpts);if(!renderMode){if(_nextData||getStaticProps||getServerSideProps){if(renderOpts.isNotFound){res.statusCode=404;if(_nextData){res.end('{"notFound":true}');return null;}const NotFoundComponent=notFoundMod?notFoundMod.default:Error;const errPathname=notFoundMod?'/404':'/_error';const result2=await(0,_render.renderToHTML)(req,res,errPathname,parsedUrl.query,Object.assign({},options,{getStaticProps:notFoundMod?notFoundMod.getStaticProps:undefined,getStaticPaths:undefined,getServerSideProps:undefined,Component:NotFoundComponent,err:undefined,locale:detectedLocale,locales:i18n==null?void 0:i18n.locales,defaultLocale:i18n==null?void 0:i18n.defaultLocale}));(0,_sendPayload.sendPayload)(req,res,result2,'html',{generateEtags,poweredByHeader},{private:isPreviewMode,stateful:!!getServerSideProps,revalidate:renderOpts.revalidate});return null;}else if(renderOpts.isRedirect&&!_nextData){const redirect={destination:renderOpts.pageData.pageProps.__N_REDIRECT,statusCode:renderOpts.pageData.pageProps.__N_REDIRECT_STATUS,basePath:renderOpts.pageData.pageProps.__N_REDIRECT_BASE_PATH};const statusCode=(0,_loadCustomRoutes.getRedirectStatus)(redirect);if(basePath&&redirect.basePath!==false&&redirect.destination.startsWith('/')){redirect.destination=`${basePath}${redirect.destination}`;}if(statusCode===_constants.PERMANENT_REDIRECT_STATUS){res.setHeader('Refresh',`0;url=${redirect.destination}`);}res.statusCode=statusCode;res.setHeader('Location',redirect.destination);res.end();return null;}else{(0,_sendPayload.sendPayload)(req,res,_nextData?JSON.stringify(renderOpts.pageData):result,_nextData?'json':'html',{generateEtags,poweredByHeader},{private:isPreviewMode,stateful:!!getServerSideProps,revalidate:renderOpts.revalidate});return null;}}}else if(isPreviewMode){res.setHeader('Cache-Control','private, no-cache, no-store, max-age=0, must-revalidate');}if(renderMode)return{html:result,renderOpts};return result;}catch(err){if(!parsedUrl){parsedUrl=(0,_url.parse)(req.url,true);}if(err.code==='ENOENT'){res.statusCode=404;}else if(err.code==='DECODE_FAILED'){// TODO: better error?
res.statusCode=400;}else{console.error('Unhandled error during request:',err);// Backwards compat (call getInitialProps in custom error):
try{await(0,_render.renderToHTML)(req,res,'/_error',parsedUrl.query,Object.assign({},options,{getStaticProps:undefined,getStaticPaths:undefined,getServerSideProps:undefined,Component:Error,err:err,// Short-circuit rendering:
isDataReq:true}));}catch(underErrorErr){console.error('Failed call /_error subroutine, continuing to crash function:',underErrorErr);}// Throw the error to crash the serverless function
if((0,_utils.isResSent)(res)){console.error('!!! WARNING !!!');console.error('Your function crashed, but closed the response before allowing the function to exit.\\n'+'This may cause unexpected behavior for the next request.');console.error('!!! WARNING !!!');}throw err;}const result2=await(0,_render.renderToHTML)(req,res,'/_error',parsedUrl.query,Object.assign({},options,{getStaticProps:undefined,getStaticPaths:undefined,getServerSideProps:undefined,Component:Error,err:res.statusCode===404?undefined:err}));return result2;}}return{renderReqToHTML,render:async function render(req,res){try{const html=await renderReqToHTML(req,res);if(html){(0,_sendPayload.sendPayload)(req,res,html,'html',{generateEtags,poweredByHeader});}}catch(err){console.error(err);// Throw the error to crash the serverless function
throw err;}}};}
//# sourceMappingURL=page-handler.js.map

/***/ }),

/***/ 2056:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";
exports.__esModule=true;exports.getUtils=getUtils;exports.vercelHeader=void 0;var _url=__webpack_require__(8835);var _querystring=__webpack_require__(1191);var _normalizeLocalePath=__webpack_require__(7468);var _pathMatch=_interopRequireDefault(__webpack_require__(2378));var _routeRegex=__webpack_require__(4386);var _routeMatcher=__webpack_require__(199);var _prepareDestination=_interopRequireWildcard(__webpack_require__(2480));var _accept=_interopRequireDefault(__webpack_require__(5517));var _detectLocaleCookie=__webpack_require__(939);var _detectDomainLocale=__webpack_require__(9034);var _denormalizePagePath=__webpack_require__(9622);var _cookie=_interopRequireDefault(__webpack_require__(738));var _constants=__webpack_require__(227);function _getRequireWildcardCache(){if(typeof WeakMap!=="function")return null;var cache=new WeakMap();_getRequireWildcardCache=function(){return cache;};return cache;}function _interopRequireWildcard(obj){if(obj&&obj.__esModule){return obj;}if(obj===null||typeof obj!=="object"&&typeof obj!=="function"){return{default:obj};}var cache=_getRequireWildcardCache();if(cache&&cache.has(obj)){return cache.get(obj);}var newObj={};var hasPropertyDescriptor=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var key in obj){if(Object.prototype.hasOwnProperty.call(obj,key)){var desc=hasPropertyDescriptor?Object.getOwnPropertyDescriptor(obj,key):null;if(desc&&(desc.get||desc.set)){Object.defineProperty(newObj,key,desc);}else{newObj[key]=obj[key];}}}newObj.default=obj;if(cache){cache.set(obj,newObj);}return newObj;}function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}const getCustomRouteMatcher=(0,_pathMatch.default)(true);const vercelHeader='x-vercel-id';exports.vercelHeader=vercelHeader;function getUtils({page,i18n,basePath,rewrites,pageIsDynamic}){let defaultRouteRegex;let dynamicRouteMatcher;let defaultRouteMatches;if(pageIsDynamic){defaultRouteRegex=(0,_routeRegex.getRouteRegex)(page);dynamicRouteMatcher=(0,_routeMatcher.getRouteMatcher)(defaultRouteRegex);defaultRouteMatches=dynamicRouteMatcher(page);}function handleRewrites(req,parsedUrl){for(const rewrite of rewrites){const matcher=getCustomRouteMatcher(rewrite.source);let params=matcher(parsedUrl.pathname);if(rewrite.has&&params){const hasParams=(0,_prepareDestination.matchHas)(req,rewrite.has,parsedUrl.query);if(hasParams){Object.assign(params,hasParams);}else{params=false;}}if(params){const{parsedDestination}=(0,_prepareDestination.default)(rewrite.destination,params,parsedUrl.query,true);Object.assign(parsedUrl.query,parsedDestination.query);delete parsedDestination.query;Object.assign(parsedUrl,parsedDestination);let fsPathname=parsedUrl.pathname;if(basePath){fsPathname=fsPathname.replace(new RegExp(`^${basePath}`),'')||'/';}if(i18n){const destLocalePathResult=(0,_normalizeLocalePath.normalizeLocalePath)(fsPathname,i18n.locales);fsPathname=destLocalePathResult.pathname;parsedUrl.query.nextInternalLocale=destLocalePathResult.detectedLocale||params.nextInternalLocale;}if(fsPathname===page){break;}if(pageIsDynamic&&dynamicRouteMatcher){const dynamicParams=dynamicRouteMatcher(fsPathname);if(dynamicParams){parsedUrl.query={...parsedUrl.query,...dynamicParams};break;}}}}return parsedUrl;}function handleBasePath(req,parsedUrl){// always strip the basePath if configured since it is required
req.url=req.url.replace(new RegExp(`^${basePath}`),'')||'/';parsedUrl.pathname=parsedUrl.pathname.replace(new RegExp(`^${basePath}`),'')||'/';}function getParamsFromRouteMatches(req,renderOpts,detectedLocale){return(0,_routeMatcher.getRouteMatcher)(function(){const{groups,routeKeys}=defaultRouteRegex;return{re:{// Simulate a RegExp match from the \`req.url\` input
exec:str=>{const obj=(0,_querystring.parse)(str);// favor named matches if available
const routeKeyNames=Object.keys(routeKeys||{});const filterLocaleItem=val=>{if(i18n){// locale items can be included in route-matches
// for fallback SSG pages so ensure they are
// filtered
const isCatchAll=Array.isArray(val);const _val=isCatchAll?val[0]:val;if(typeof _val==='string'&&i18n.locales.some(item=>{if(item.toLowerCase()===_val.toLowerCase()){detectedLocale=item;renderOpts.locale=detectedLocale;return true;}return false;})){// remove the locale item from the match
if(isCatchAll){;val.splice(0,1);}// the value is only a locale item and
// shouldn't be added
return isCatchAll?val.length===0:true;}}return false;};if(routeKeyNames.every(name=>obj[name])){return routeKeyNames.reduce((prev,keyName)=>{const paramName=routeKeys==null?void 0:routeKeys[keyName];if(paramName&&!filterLocaleItem(obj[keyName])){prev[groups[paramName].pos]=obj[keyName];}return prev;},{});}return Object.keys(obj).reduce((prev,key)=>{if(!filterLocaleItem(obj[key])){return Object.assign(prev,{[key]:obj[key]});}return prev;},{});}},groups};}())(req.headers['x-now-route-matches']);}function interpolateDynamicPath(pathname,params){if(!defaultRouteRegex)return pathname;for(const param of Object.keys(defaultRouteRegex.groups)){const{optional,repeat}=defaultRouteRegex.groups[param];let builtParam=`[${repeat?'...':''}${param}]`;if(optional){builtParam=`[${builtParam}]`;}const paramIdx=pathname.indexOf(builtParam);if(paramIdx>-1){let paramValue;if(Array.isArray(params[param])){paramValue=params[param].join('/');}else{paramValue=params[param];}pathname=pathname.substr(0,paramIdx)+encodeURI(paramValue||'')+pathname.substr(paramIdx+builtParam.length);}}return pathname;}function normalizeVercelUrl(req,trustQuery){// make sure to normalize req.url on Vercel to strip dynamic params
// from the query which are added during routing
if(pageIsDynamic&&trustQuery&&defaultRouteRegex){const _parsedUrl=(0,_url.parse)(req.url,true);delete _parsedUrl.search;for(const param of Object.keys(defaultRouteRegex.groups)){delete _parsedUrl.query[param];}req.url=(0,_url.format)(_parsedUrl);}}function normalizeDynamicRouteParams(params){let hasValidParams=true;if(!defaultRouteRegex)return{params,hasValidParams};params=Object.keys(defaultRouteRegex.groups).reduce((prev,key)=>{let value=params[key];// if the value matches the default value we can't rely
// on the parsed params, this is used to signal if we need
// to parse x-now-route-matches or not
const isDefaultValue=Array.isArray(value)?value.every((val,idx)=>val===defaultRouteMatches[key][idx]):value===defaultRouteMatches[key];if(isDefaultValue||typeof value==='undefined'){hasValidParams=false;}// non-provided optional values should be undefined so normalize
// them to undefined
if(defaultRouteRegex.groups[key].optional&&(!value||Array.isArray(value)&&value.length===1&&(// fallback optional catch-all SSG pages have
// [[...paramName]] for the root path on Vercel
value[0]==='index'||value[0]===`[[...${key}]]`))){value=undefined;delete params[key];}// query values from the proxy aren't already split into arrays
// so make sure to normalize catch-all values
if(value&&typeof value==='string'&&defaultRouteRegex.groups[key].repeat){value=value.split('/');}if(value){prev[key]=value;}return prev;},{});return{params,hasValidParams};}function handleLocale(req,res,parsedUrl,routeNoAssetPath,shouldNotRedirect){if(!i18n)return;const pathname=parsedUrl.pathname||'/';let defaultLocale=i18n.defaultLocale;let detectedLocale=(0,_detectLocaleCookie.detectLocaleCookie)(req,i18n.locales);let acceptPreferredLocale=i18n.localeDetection!==false?_accept.default.language(req.headers['accept-language'],i18n.locales):detectedLocale;const{host}=req.headers||{};// remove port from host and remove port if present
const hostname=host&&host.split(':')[0].toLowerCase();const detectedDomain=(0,_detectDomainLocale.detectDomainLocale)(i18n.domains,hostname);if(detectedDomain){defaultLocale=detectedDomain.defaultLocale;detectedLocale=defaultLocale;req.__nextIsLocaleDomain=true;}// if not domain specific locale use accept-language preferred
detectedLocale=detectedLocale||acceptPreferredLocale;let localeDomainRedirect;const localePathResult=(0,_normalizeLocalePath.normalizeLocalePath)(pathname,i18n.locales);routeNoAssetPath=(0,_normalizeLocalePath.normalizeLocalePath)(routeNoAssetPath,i18n.locales).pathname;if(localePathResult.detectedLocale){detectedLocale=localePathResult.detectedLocale;req.url=(0,_url.format)({...parsedUrl,pathname:localePathResult.pathname});req.__nextStrippedLocale=true;parsedUrl.pathname=localePathResult.pathname;}// If a detected locale is a domain specific locale and we aren't already
// on that domain and path prefix redirect to it to prevent duplicate
// content from multiple domains
if(detectedDomain){const localeToCheck=localePathResult.detectedLocale?detectedLocale:acceptPreferredLocale;const matchedDomain=(0,_detectDomainLocale.detectDomainLocale)(i18n.domains,undefined,localeToCheck);if(matchedDomain&&matchedDomain.domain!==detectedDomain.domain){localeDomainRedirect=`http${matchedDomain.http?'':'s'}://${matchedDomain.domain}/${localeToCheck===matchedDomain.defaultLocale?'':localeToCheck}`;}}const denormalizedPagePath=(0,_denormalizePagePath.denormalizePagePath)(pathname);const detectedDefaultLocale=!detectedLocale||detectedLocale.toLowerCase()===defaultLocale.toLowerCase();const shouldStripDefaultLocale=false;// detectedDefaultLocale &&
// denormalizedPagePath.toLowerCase() === \`/\${i18n.defaultLocale.toLowerCase()}\`
const shouldAddLocalePrefix=!detectedDefaultLocale&&denormalizedPagePath==='/';detectedLocale=detectedLocale||i18n.defaultLocale;if(!shouldNotRedirect&&!req.headers[vercelHeader]&&i18n.localeDetection!==false&&(localeDomainRedirect||shouldAddLocalePrefix||shouldStripDefaultLocale)){// set the NEXT_LOCALE cookie when a user visits the default locale
// with the locale prefix so that they aren't redirected back to
// their accept-language preferred locale
if(shouldStripDefaultLocale&&acceptPreferredLocale!==defaultLocale){const previous=res.getHeader('set-cookie');res.setHeader('set-cookie',[...(typeof previous==='string'?[previous]:Array.isArray(previous)?previous:[]),_cookie.default.serialize('NEXT_LOCALE',defaultLocale,{httpOnly:true,path:'/'})]);}res.setHeader('Location',(0,_url.format)({// make sure to include any query values when redirecting
...parsedUrl,pathname:localeDomainRedirect?localeDomainRedirect:shouldStripDefaultLocale?basePath||'/':`${basePath}/${detectedLocale}`}));res.statusCode=_constants.TEMPORARY_REDIRECT_STATUS;res.end();return;}detectedLocale=localePathResult.detectedLocale||detectedDomain&&detectedDomain.defaultLocale||defaultLocale;return{defaultLocale,detectedLocale,routeNoAssetPath};}return{handleLocale,handleRewrites,handleBasePath,defaultRouteRegex,normalizeVercelUrl,dynamicRouteMatcher,defaultRouteMatches,interpolateDynamicPath,getParamsFromRouteMatches,normalizeDynamicRouteParams};}
//# sourceMappingURL=utils.js.map

/***/ }),

/***/ 738:
/***/ (function(module) {

module.exports=(()=>{"use strict";var e={583:(e,r)=>{r.parse=parse;r.serialize=serialize;var i=decodeURIComponent;var t=encodeURIComponent;var a=/; */;var n=/^[\u0009\u0020-\u007e\u0080-\u00ff]+$/;function parse(e,r){if(typeof e!=="string"){throw new TypeError("argument str must be a string")}var t={};var n=r||{};var o=e.split(a);var s=n.decode||i;for(var p=0;p<o.length;p++){var f=o[p];var u=f.indexOf("=");if(u<0){continue}var c=f.substr(0,u).trim();var v=f.substr(++u,f.length).trim();if('"'==v[0]){v=v.slice(1,-1)}if(undefined==t[c]){t[c]=tryDecode(v,s)}}return t}function serialize(e,r,i){var a=i||{};var o=a.encode||t;if(typeof o!=="function"){throw new TypeError("option encode is invalid")}if(!n.test(e)){throw new TypeError("argument name is invalid")}var s=o(r);if(s&&!n.test(s)){throw new TypeError("argument val is invalid")}var p=e+"="+s;if(null!=a.maxAge){var f=a.maxAge-0;if(isNaN(f)||!isFinite(f)){throw new TypeError("option maxAge is invalid")}p+="; Max-Age="+Math.floor(f)}if(a.domain){if(!n.test(a.domain)){throw new TypeError("option domain is invalid")}p+="; Domain="+a.domain}if(a.path){if(!n.test(a.path)){throw new TypeError("option path is invalid")}p+="; Path="+a.path}if(a.expires){if(typeof a.expires.toUTCString!=="function"){throw new TypeError("option expires is invalid")}p+="; Expires="+a.expires.toUTCString()}if(a.httpOnly){p+="; HttpOnly"}if(a.secure){p+="; Secure"}if(a.sameSite){var u=typeof a.sameSite==="string"?a.sameSite.toLowerCase():a.sameSite;switch(u){case true:p+="; SameSite=Strict";break;case"lax":p+="; SameSite=Lax";break;case"strict":p+="; SameSite=Strict";break;case"none":p+="; SameSite=None";break;default:throw new TypeError("option sameSite is invalid")}}return p}function tryDecode(e,r){try{return r(e)}catch(r){return e}}}};var r={};function __nccwpck_require__(i){if(r[i]){return r[i].exports}var t=r[i]={exports:{}};var a=true;try{e[i](t,t.exports,__nccwpck_require__);a=false}finally{if(a)delete r[i]}return t.exports}__nccwpck_require__.ab=__dirname+"/";return __nccwpck_require__(583)})();

/***/ }),

/***/ 7239:
/***/ (function(module) {

module.exports=(()=>{"use strict";var e={813:e=>{const r=/[|\\{}()[\]^$+*?.-]/g;e.exports=(e=>{if(typeof e!=="string"){throw new TypeError("Expected a string")}return e.replace(r,"\\$&")})}};var r={};function __nccwpck_require__(t){if(r[t]){return r[t].exports}var _=r[t]={exports:{}};var a=true;try{e[t](_,_.exports,__nccwpck_require__);a=false}finally{if(a)delete r[t]}return _.exports}__nccwpck_require__.ab=__dirname+"/";return __nccwpck_require__(813)})();

/***/ }),

/***/ 4329:
/***/ (function(__unused_webpack_module, exports) {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
/**
 * Tokenize input string.
 */
function lexer(str) {
    var tokens = [];
    var i = 0;
    while (i < str.length) {
        var char = str[i];
        if (char === "*" || char === "+" || char === "?") {
            tokens.push({ type: "MODIFIER", index: i, value: str[i++] });
            continue;
        }
        if (char === "\\") {
            tokens.push({ type: "ESCAPED_CHAR", index: i++, value: str[i++] });
            continue;
        }
        if (char === "{") {
            tokens.push({ type: "OPEN", index: i, value: str[i++] });
            continue;
        }
        if (char === "}") {
            tokens.push({ type: "CLOSE", index: i, value: str[i++] });
            continue;
        }
        if (char === ":") {
            var name = "";
            var j = i + 1;
            while (j < str.length) {
                var code = str.charCodeAt(j);
                if (
                // `0-9`
                (code >= 48 && code <= 57) ||
                    // `A-Z`
                    (code >= 65 && code <= 90) ||
                    // `a-z`
                    (code >= 97 && code <= 122) ||
                    // `_`
                    code === 95) {
                    name += str[j++];
                    continue;
                }
                break;
            }
            if (!name)
                throw new TypeError("Missing parameter name at " + i);
            tokens.push({ type: "NAME", index: i, value: name });
            i = j;
            continue;
        }
        if (char === "(") {
            var count = 1;
            var pattern = "";
            var j = i + 1;
            if (str[j] === "?") {
                throw new TypeError("Pattern cannot start with \"?\" at " + j);
            }
            while (j < str.length) {
                if (str[j] === "\\") {
                    pattern += str[j++] + str[j++];
                    continue;
                }
                if (str[j] === ")") {
                    count--;
                    if (count === 0) {
                        j++;
                        break;
                    }
                }
                else if (str[j] === "(") {
                    count++;
                    if (str[j + 1] !== "?") {
                        throw new TypeError("Capturing groups are not allowed at " + j);
                    }
                }
                pattern += str[j++];
            }
            if (count)
                throw new TypeError("Unbalanced pattern at " + i);
            if (!pattern)
                throw new TypeError("Missing pattern at " + i);
            tokens.push({ type: "PATTERN", index: i, value: pattern });
            i = j;
            continue;
        }
        tokens.push({ type: "CHAR", index: i, value: str[i++] });
    }
    tokens.push({ type: "END", index: i, value: "" });
    return tokens;
}
/**
 * Parse a string for the raw tokens.
 */
function parse(str, options) {
    if (options === void 0) { options = {}; }
    var tokens = lexer(str);
    var _a = options.prefixes, prefixes = _a === void 0 ? "./" : _a;
    var defaultPattern = "[^" + escapeString(options.delimiter || "/#?") + "]+?";
    var result = [];
    var key = 0;
    var i = 0;
    var path = "";
    var tryConsume = function (type) {
        if (i < tokens.length && tokens[i].type === type)
            return tokens[i++].value;
    };
    var mustConsume = function (type) {
        var value = tryConsume(type);
        if (value !== undefined)
            return value;
        var _a = tokens[i], nextType = _a.type, index = _a.index;
        throw new TypeError("Unexpected " + nextType + " at " + index + ", expected " + type);
    };
    var consumeText = function () {
        var result = "";
        var value;
        // tslint:disable-next-line
        while ((value = tryConsume("CHAR") || tryConsume("ESCAPED_CHAR"))) {
            result += value;
        }
        return result;
    };
    while (i < tokens.length) {
        var char = tryConsume("CHAR");
        var name = tryConsume("NAME");
        var pattern = tryConsume("PATTERN");
        if (name || pattern) {
            var prefix = char || "";
            if (prefixes.indexOf(prefix) === -1) {
                path += prefix;
                prefix = "";
            }
            if (path) {
                result.push(path);
                path = "";
            }
            result.push({
                name: name || key++,
                prefix: prefix,
                suffix: "",
                pattern: pattern || defaultPattern,
                modifier: tryConsume("MODIFIER") || ""
            });
            continue;
        }
        var value = char || tryConsume("ESCAPED_CHAR");
        if (value) {
            path += value;
            continue;
        }
        if (path) {
            result.push(path);
            path = "";
        }
        var open = tryConsume("OPEN");
        if (open) {
            var prefix = consumeText();
            var name_1 = tryConsume("NAME") || "";
            var pattern_1 = tryConsume("PATTERN") || "";
            var suffix = consumeText();
            mustConsume("CLOSE");
            result.push({
                name: name_1 || (pattern_1 ? key++ : ""),
                pattern: name_1 && !pattern_1 ? defaultPattern : pattern_1,
                prefix: prefix,
                suffix: suffix,
                modifier: tryConsume("MODIFIER") || ""
            });
            continue;
        }
        mustConsume("END");
    }
    return result;
}
exports.parse = parse;
/**
 * Compile a string to a template function for the path.
 */
function compile(str, options) {
    return tokensToFunction(parse(str, options), options);
}
exports.compile = compile;
/**
 * Expose a method for transforming tokens into the path function.
 */
function tokensToFunction(tokens, options) {
    if (options === void 0) { options = {}; }
    var reFlags = flags(options);
    var _a = options.encode, encode = _a === void 0 ? function (x) { return x; } : _a, _b = options.validate, validate = _b === void 0 ? true : _b;
    // Compile all the tokens into regexps.
    var matches = tokens.map(function (token) {
        if (typeof token === "object") {
            return new RegExp("^(?:" + token.pattern + ")$", reFlags);
        }
    });
    return function (data) {
        var path = "";
        for (var i = 0; i < tokens.length; i++) {
            var token = tokens[i];
            if (typeof token === "string") {
                path += token;
                continue;
            }
            var value = data ? data[token.name] : undefined;
            var optional = token.modifier === "?" || token.modifier === "*";
            var repeat = token.modifier === "*" || token.modifier === "+";
            if (Array.isArray(value)) {
                if (!repeat) {
                    throw new TypeError("Expected \"" + token.name + "\" to not repeat, but got an array");
                }
                if (value.length === 0) {
                    if (optional)
                        continue;
                    throw new TypeError("Expected \"" + token.name + "\" to not be empty");
                }
                for (var j = 0; j < value.length; j++) {
                    var segment = encode(value[j], token);
                    if (validate && !matches[i].test(segment)) {
                        throw new TypeError("Expected all \"" + token.name + "\" to match \"" + token.pattern + "\", but got \"" + segment + "\"");
                    }
                    path += token.prefix + segment + token.suffix;
                }
                continue;
            }
            if (typeof value === "string" || typeof value === "number") {
                var segment = encode(String(value), token);
                if (validate && !matches[i].test(segment)) {
                    throw new TypeError("Expected \"" + token.name + "\" to match \"" + token.pattern + "\", but got \"" + segment + "\"");
                }
                path += token.prefix + segment + token.suffix;
                continue;
            }
            if (optional)
                continue;
            var typeOfMessage = repeat ? "an array" : "a string";
            throw new TypeError("Expected \"" + token.name + "\" to be " + typeOfMessage);
        }
        return path;
    };
}
exports.tokensToFunction = tokensToFunction;
/**
 * Create path match function from `path-to-regexp` spec.
 */
function match(str, options) {
    var keys = [];
    var re = pathToRegexp(str, keys, options);
    return regexpToFunction(re, keys, options);
}
exports.match = match;
/**
 * Create a path match function from `path-to-regexp` output.
 */
function regexpToFunction(re, keys, options) {
    if (options === void 0) { options = {}; }
    var _a = options.decode, decode = _a === void 0 ? function (x) { return x; } : _a;
    return function (pathname) {
        var m = re.exec(pathname);
        if (!m)
            return false;
        var path = m[0], index = m.index;
        var params = Object.create(null);
        var _loop_1 = function (i) {
            // tslint:disable-next-line
            if (m[i] === undefined)
                return "continue";
            var key = keys[i - 1];
            if (key.modifier === "*" || key.modifier === "+") {
                params[key.name] = m[i].split(key.prefix + key.suffix).map(function (value) {
                    return decode(value, key);
                });
            }
            else {
                params[key.name] = decode(m[i], key);
            }
        };
        for (var i = 1; i < m.length; i++) {
            _loop_1(i);
        }
        return { path: path, index: index, params: params };
    };
}
exports.regexpToFunction = regexpToFunction;
/**
 * Escape a regular expression string.
 */
function escapeString(str) {
    return str.replace(/([.+*?=^!:${}()[\]|/\\])/g, "\\$1");
}
/**
 * Get the flags for a regexp from the options.
 */
function flags(options) {
    return options && options.sensitive ? "" : "i";
}
/**
 * Pull out keys from a regexp.
 */
function regexpToRegexp(path, keys) {
    if (!keys)
        return path;
    // Use a negative lookahead to match only capturing groups.
    var groups = path.source.match(/\((?!\?)/g);
    if (groups) {
        for (var i = 0; i < groups.length; i++) {
            keys.push({
                name: i,
                prefix: "",
                suffix: "",
                modifier: "",
                pattern: ""
            });
        }
    }
    return path;
}
/**
 * Transform an array into a regexp.
 */
function arrayToRegexp(paths, keys, options) {
    var parts = paths.map(function (path) { return pathToRegexp(path, keys, options).source; });
    return new RegExp("(?:" + parts.join("|") + ")", flags(options));
}
/**
 * Create a path regexp from string input.
 */
function stringToRegexp(path, keys, options) {
    return tokensToRegexp(parse(path, options), keys, options);
}
/**
 * Expose a function for taking tokens and returning a RegExp.
 */
function tokensToRegexp(tokens, keys, options) {
    if (options === void 0) { options = {}; }
    var _a = options.strict, strict = _a === void 0 ? false : _a, _b = options.start, start = _b === void 0 ? true : _b, _c = options.end, end = _c === void 0 ? true : _c, _d = options.encode, encode = _d === void 0 ? function (x) { return x; } : _d;
    var endsWith = "[" + escapeString(options.endsWith || "") + "]|$";
    var delimiter = "[" + escapeString(options.delimiter || "/#?") + "]";
    var route = start ? "^" : "";
    // Iterate over the tokens and create our regexp string.
    for (var _i = 0, tokens_1 = tokens; _i < tokens_1.length; _i++) {
        var token = tokens_1[_i];
        if (typeof token === "string") {
            route += escapeString(encode(token));
        }
        else {
            var prefix = escapeString(encode(token.prefix));
            var suffix = escapeString(encode(token.suffix));
            if (token.pattern) {
                if (keys)
                    keys.push(token);
                if (prefix || suffix) {
                    if (token.modifier === "+" || token.modifier === "*") {
                        var mod = token.modifier === "*" ? "?" : "";
                        route += "(?:" + prefix + "((?:" + token.pattern + ")(?:" + suffix + prefix + "(?:" + token.pattern + "))*)" + suffix + ")" + mod;
                    }
                    else {
                        route += "(?:" + prefix + "(" + token.pattern + ")" + suffix + ")" + token.modifier;
                    }
                }
                else {
                    route += "(" + token.pattern + ")" + token.modifier;
                }
            }
            else {
                route += "(?:" + prefix + suffix + ")" + token.modifier;
            }
        }
    }
    if (end) {
        if (!strict)
            route += delimiter + "?";
        route += !options.endsWith ? "$" : "(?=" + endsWith + ")";
    }
    else {
        var endToken = tokens[tokens.length - 1];
        var isEndDelimited = typeof endToken === "string"
            ? delimiter.indexOf(endToken[endToken.length - 1]) > -1
            : // tslint:disable-next-line
                endToken === undefined;
        if (!strict) {
            route += "(?:" + delimiter + "(?=" + endsWith + "))?";
        }
        if (!isEndDelimited) {
            route += "(?=" + delimiter + "|" + endsWith + ")";
        }
    }
    return new RegExp(route, flags(options));
}
exports.tokensToRegexp = tokensToRegexp;
/**
 * Normalize the given path string, returning a regular expression.
 *
 * An empty array can be passed in for the keys, which will hold the
 * placeholder key descriptions. For example, using `/user/:id`, `keys` will
 * contain `[{ name: 'id', delimiter: '/', optional: false, repeat: false }]`.
 */
function pathToRegexp(path, keys, options) {
    if (path instanceof RegExp)
        return regexpToRegexp(path, keys);
    if (Array.isArray(path))
        return arrayToRegexp(path, keys, options);
    return stringToRegexp(path, keys, options);
}
exports.pathToRegexp = pathToRegexp;
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 5343:
/***/ (function(module) {

"use strict";


/*
RegExr: Learn, Build, & Test RegEx
Copyright (C) 2017  gskinner.com, inc.

This program is free software: you can redistribute it and/or modify
it under the terms of the GNU General Public License as published by
the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU General Public License for more details.

You should have received a copy of the GNU General Public License
along with this program.  If not, see <https://www.gnu.org/licenses/>.
*/
class ExpressionLexer {
  constructor() {
    this.profile = null;
  }

  set profile(profile) {
    this._profile = profile;
    this.string = this.token = this.errors = this.captureGroups = this.namedGroups = null;
  }

  parse(str) {
    if (!this._profile) {
      return null;
    }

    if (str === this.string) {
      return this.token;
    }

    this.token = null;
    this._modes = {};
    this.string = str;
    this.errors = [];
    let capgroups = this.captureGroups = [];
    let namedgroups = this.namedGroups = {};
    let brgroups = this.branchResetGroups = [];
    let groups = [],
        refs = [],
        i = 0,
        l = str.length;
    let o,
        c,
        token,
        charset = null; // previous is the previous token, prv is the previous "active" token (!ignore)

    let prev = null,
        prv = null;
    let profile = this._profile,
        unquantifiable = profile.unquantifiable;
    let charTypes = profile.charTypes;
    let closeIndex = str.lastIndexOf("/");

    for (let i = closeIndex + 1; i < l; i++) {
      this._modes[str[i]] = true;
    }

    while (i < l) {
      c = str[i];
      token = {
        i: i,
        l: 1,
        prev: prev,
        prv: prv,
        modes: this._modes
      };

      if (prev) {
        prev.next = token;
      } else {
        this.token = token;
      }

      if (i === 0 || i >= closeIndex) {
        this.parseFlag(str, token);
      } else if (c === "(" && !charset) {
        this.parseParen(str, token);

        if (token.close === null) {
          token.depth = groups.length;
          groups.push(token);
        }

        if (token.capture) {
          this.addCaptureGroup(token, groups);
        }
      } else if (c === ")" && !charset) {
        token.type = "groupclose";

        if (groups.length) {
          o = token.open = groups.pop();
          o.close = token;

          if (o.type === "branchreset") {
            brgroups.pop();
          }
        } else {
          token.error = {
            id: "groupclose"
          };
        }
      } else if (c === "[") {
        charset = this.parseSquareBracket(str, token, charset);
      } else if (c === "]" && charset) {
        token.type = "setclose";
        token.open = charset;
        charset.close = token;
        charset = null;
      } else if (c === "+" && prv && prv.clss === "quant" && profile.tokens.possessive) {
        token.type = "possessive";
        token.related = [prv];
      } else if ((c === "+" || c === "*") && !charset) {
        token.type = charTypes[c];
        token.clss = "quant";
        token.min = c === "+" ? 1 : 0;
        token.max = -1;
      } else if (c === "{" && !charset && str.substr(i).search(/^{\d+,?\d*}/) !== -1) {
        this.parseQuant(str, token);
      } else if (c === "\\") {
        this.parseBackSlash(str, token, charset, closeIndex);
      } else if (c === "?" && !charset) {
        if (!prv || prv.clss !== "quant") {
          token.type = charTypes[c];
          token.clss = "quant";
          token.min = 0;
          token.max = 1;
        } else {
          token.type = "lazy";
          token.related = [prv];
        }
      } else if (c === "-" && charset && prv.code !== undefined && prv.prv && prv.prv.type !== "range") {
        // this may be the start of a range, but we'll need to validate after the next token.
        token.type = "range";
      } else {
        this.parseChar(str, token, charset);

        if (!charset && this._modes.x && /\s/.test(c)) {
          token.ignore = true;
          token.type = "ignorews";
        }
      } // post process token:
      // quantifier:


      if (token.clss === "quant") {
        if (!prv || prv.close !== undefined || unquantifiable[prv.type] || prv.open && unquantifiable[prv.open.type]) {
          token.error = {
            id: "quanttarg"
          };
        } else {
          token.related = [prv.open || prv];
        }
      } // reference:


      if (token.group === true) {
        refs.push(token);
      } // conditional:


      let curGroup = groups.length ? groups[groups.length - 1] : null;

      if (curGroup && (curGroup.type === "conditional" || curGroup.type === "conditionalgroup") && token.type === "alt") {
        if (!curGroup.alt) {
          curGroup.alt = token;
        } else {
          token.error = {
            id: "extraelse"
          };
        }

        token.related = [curGroup];
        token.type = "conditionalelse";
        token.clss = "special";
      } else if (curGroup && curGroup.type === "branchreset") {
        // reset group
        curGroup.curGroupNum = curGroup.inGroupNum;
      } // range:


      if (prv && prv.type === "range" && prv.l === 1) {
        this.validateRange(str, token);
      } // js warnings:
      // TODO: this isn't ideal, but I'm hesitant to write a more robust solution for a couple of edge cases.


      if (profile.id === "js") {
        this.addJSWarnings(token);
      } // general:


      if (token.open && !token.clss) {
        token.clss = token.open.clss;
      }

      if (token.error) {
        this.addError(token);
      }

      i += token.l;
      prev = token;

      if (!token.ignore) {
        prv = token;
      }
    } // post processing:


    while (groups.length) {
      this.addError(groups.pop(), {
        id: "groupopen"
      });
    }

    this.matchRefs(refs, capgroups, namedgroups);

    if (charset) {
      this.addError(charset, {
        id: "setopen"
      });
    }

    return this.token;
  }

  addError(token, error = token.error) {
    token.error = error;
    this.errors.push(token);
  }

  addJSWarnings(token) {
    if (token.error) {
      return;
    }

    if (token.type === "neglookbehind" || token.type === "poslookbehind" || token.type === "sticky" || token.type === "unicode" || token.type == "dotall" || token.type === "unicodecat" || token.type === "unicodescript" || token.type === "namedgroup") {
      token.error = {
        id: "jsfuture",
        warning: true
      };
    }
  }

  addCaptureGroup(token, groups) {
    // it would be nice to make branch reset groups actually highlight all of the groups that share the same number
    // that would require switching to arrays of groups for each group num - requires rearchitecture throughout the app.
    let capgroups = this.captureGroups,
        brgroups = this.branchResetGroups,
        namedgroups = this.namedGroups;
    let curGroup = groups.length ? groups[groups.length - 1] : null;

    if (brgroups.length) {
      let brgroup = brgroups[brgroups.length - 1];
      token.num = ++brgroup.curGroupNum;
    } else {
      token.num = capgroups.length + 1;
    }

    if (!capgroups[token.num - 1]) {
      capgroups.push(token);
    }

    if (token.name && !token.error) {
      if (/\d/.test(token.name[0])) {
        token.error = {
          id: "badname"
        };
      } else if (namedgroups[token.name]) {
        token.error = {
          id: "dupname"
        };
        token.related = [namedgroups[token.name]];
      } else {
        namedgroups[token.name] = token;
      }
    }
  }

  getRef(token, str) {
    token.clss = "ref";
    token.group = true;
    token.relIndex = this.captureGroups.length;
    token.name = str;
  }

  matchRefs(refs, indexes, names) {
    while (refs.length) {
      let token = refs.pop(),
          name = token.name,
          group = names[name];

      if (!group && !isNaN(name)) {
        let sign = name[0],
            index = parseInt(name) + (sign === "+" || sign === "-" ? token.relIndex : 0);

        if (sign === "-") {
          index++;
        }

        group = indexes[index - 1];
      }

      if (group) {
        token.group = group;
        token.related = [group];
        token.dir = token.i < group.i ? 1 : !group.close || token.i < group.close.i ? 0 : -1;
      } else {
        delete token.group;
        delete token.relIndex;
        this.refToOctal(token);

        if (token.error) {
          this.errors.push(token.error);
        }
      }
    }
  }

  refToOctal(token) {
    // PCRE: \# unmatched, \0 \00 \## = octal
    // JS: \# \0 \00 \## = octal
    // PCRE matches \8 \9 to "8" "9"
    // JS: without the u flag \8 \9 match "8" "9" in IE, FF & Chrome, and "\8" "\9" in Safari. We support the former.
    // JS: with the u flag, Chrome & FF throw an esc error, Safari does not.
    // TODO: handle \0 for PCRE? Would need more testing.
    // TODO: this doesn't handle two digit refs with 8/9 in them. Ex. \18 - not even sure what this is interpreted as.
    let name = token.name,
        profile = this._profile;

    if (token.type !== "numref") {
      // not a simple \4 style reference, so can't decompose into an octal.
      token.error = {
        id: "unmatchedref"
      };
    } else if (/^[0-7]{2}$/.test(name) || profile.config.reftooctalalways && /^[0-7]$/.test(name)) {
      // octal
      let next = token.next,
          char = String.fromCharCode(next.code);

      if (next.type === "char" && char >= "0" && char <= "7" && parseInt(name + char, 8) <= 255) {
        name += char;
        this.mergeNext(token);
      }

      token.code = parseInt(name, 8);
      token.clss = "esc";
      token.type = "escoctal";
      delete token.name;
    } else if (name === "8" || name === "9") {
      this.parseEscChar(token, name);
      delete token.name;
    } else {
      token.error = {
        id: "unmatchedref"
      };
    }
  }

  mergeNext(token) {
    let next = token.next;
    token.next = next.next;
    token.next.prev = token;
    token.l++;
  }

  parseFlag(str, token) {
    // note that this doesn't deal with misformed patterns or incorrect flags.
    let i = token.i,
        c = str[i];

    if (str[i] === "/") {
      token.type = i === 0 ? "open" : "close";

      if (i !== 0) {
        token.related = [this.token];
        this.token.related = [token];
      }
    } else {
      token.type = this._profile.flags[c];
    } //token.clear = true;

  }

  parseChar(str, token, charset) {
    let c = str[token.i];
    token.type = !charset && this._profile.charTypes[c] || "char";

    if (!charset && c === "/") {
      token.error = {
        id: "fwdslash"
      };
    }

    if (token.type === "char") {
      token.code = c.charCodeAt(0);
    } else if (ExpressionLexer.ANCHOR_TYPES[token.type]) {
      token.clss = "anchor";
    } else if (token.type === "dot") {
      token.clss = "charclass";
    }

    return token;
  }

  parseSquareBracket(str, token, charset) {
    let match;

    if (this._profile.tokens.posixcharclass && (match = str.substr(token.i).match(/^\[(:|\.)([^\]]*?)\1]/))) {
      // posixcharclass: [:alpha:]
      // posixcollseq: [.ch.]
      // currently neither flavor supports posixcollseq, but PCRE does flag as an error:
      // TODO: the expression above currently does not catch [.\].]
      token.l = match[0].length;
      token.value = match[2];
      token.clss = "charclass";

      if (match[1] === ":") {
        token.type = "posixcharclass";

        if (!this._profile.posixCharClasses[match[2]]) {
          token.error = {
            id: "posixcharclassbad"
          };
        } else if (!charset) {
          token.error = {
            id: "posixcharclassnoset"
          };
        }
      } else {
        token.type = "posixcollseq"; // TODO: can this be generalized? Right now, no, because we assign ids that aren't in the profile.

        token.error = {
          id: "notsupported"
        };
      }
    } else if (!charset) {
      // set [a-z] [aeiou]
      // setnot [^a-z]
      token.type = token.clss = "set";

      if (str[token.i + 1] === "^") {
        token.l++;
        token.type += "not";
      }

      charset = token;
    } else {
      // [[] (square bracket inside a set)
      this.parseChar(str, token, charset);
    }

    return charset;
  }

  parseParen(str, token) {
    /*
    core:
    .		group:
    .		lookahead: ?= ?!
    .		noncap: ?:
    PCRE:
    .		lookbehind: ?<= ?<!
    .		named: ?P<name> ?'name' ?<name>
    .		namedref: ?P=name		Also: \g'name' \k'name' etc
    .		comment: ?#
    .		atomic: ?>
    .		recursion: ?0 ?R		Also: \g<0>
    .		define: ?(DEFINE)
    .		subroutine: ?1 ?-1 ?&name ?P>name
    	conditionalgroup: ?(1)a|b ?(-1)a|b ?(name)a|b
    	conditional: ?(?=if)then|else
    	mode: ?c-i
    	branchreset: ?|
    */
    token.clss = token.type = "group";

    if (str[token.i + 1] !== "?") {
      token.close = null; // indicates that it needs a close token.

      token.capture = true;
      return token;
    }

    let sub = str.substr(token.i + 2),
        match,
        s = sub[0];

    if (s === ":") {
      // (?:foo)
      token.type = "noncapgroup";
      token.close = null;
      token.l = 3;
    } else if (s === ">") {
      // (?>foo)
      token.type = "atomic";
      token.close = null;
      token.l = 3;
    } else if (s === "|") {
      // (?|(a)|(b))
      token.type = "branchreset";
      token.close = null;
      token.l = 3;
      token.inGroupNum = token.curGroupNum = this.captureGroups.length;
      this.branchResetGroups.push(token);
    } else if (s === "#" && (match = sub.match(/[^)]*\)/))) {
      // (?#foo)
      token.clss = token.type = "comment";
      token.ignore = true;
      token.l = 2 + match[0].length;
    } else if (/^(R|0)\)/.test(sub)) {
      // (?R) (?0)
      token.clss = "ref";
      token.type = "recursion";
      token.l = 4;
    } else if (match = sub.match(/^P=(\w+)\)/i)) {
      // (?P=name)
      token.type = "namedref";
      this.getRef(token, match[1]);
      token.l = match[0].length + 2;
    } else if (/^\(DEFINE\)/.test(sub)) {
      // (?(DEFINE)foo)
      token.type = "define";
      token.close = null;
      token.l = 10;
    } else if (match = sub.match(/^<?[=!]/)) {
      // (?=foo) (?<!foo)
      let isCond = token.prv.type === "conditional";
      token.clss = isCond ? "special" : "lookaround";
      token.close = null;
      s = match[0];
      token.behind = s[0] === "<";
      token.negative = s[+token.behind] === "!";
      token.type = isCond ? "condition" : (token.negative ? "neg" : "pos") + "look" + (token.behind ? "behind" : "ahead");

      if (isCond) {
        token.prv.related = [token];
        token.prv.condition = token;
        token.related = [token.prv];
      }

      token.l = s.length + 2;
    } else if ((match = sub.match(/^<(\w+)>/)) || this._profile.config.namedgroupalt && ((match = sub.match(/^'(\w+)'/)) || (match = sub.match(/^P<(\w+)>/)))) {
      // (?<name>foo) (?'name'foo) (?P<name>foo)
      token.type = "namedgroup";
      token.close = null;
      token.name = match[1];
      token.capture = true;
      token.l = match[0].length + 2;
    } else if ((match = sub.match(/^([-+]?\d\d?)\)/)) || (match = sub.match(/^(?:&|P>)(\w+)\)/))) {
      // (?1) (?-1) (?&name) (?P>name)
      token.type = (isNaN(match[1]) ? "named" : "num") + "subroutine";
      this.getRef(token, match[1]);
      token.l = match[0].length + 2;
    } else if ((match = sub.match(/^\(([-+]?\d\d?)\)/)) || (match = sub.match(/^\((\w+)\)/))) {
      // (?(1)a|b) (?(-1)a|b) (?(name)a|b)
      this.getRef(token, match[1]);
      token.clss = "special";
      token.type = "conditionalgroup";
      token.close = null;
      token.l = match[0].length + 2;
    } else if (/^\(\?<?[=!]/.test(sub)) {
      // (?(?=if)then|else)
      token.clss = "special";
      token.type = "conditional";
      token.close = null;
      token.l = 2;
    } else if (this.parseMode(token, sub)) ; else {
      // error, found a (? without matching anything. Treat it as a normal group and let it error out.
      token.close = null;
      token.capture = true;
    }

    if (!this._profile.tokens[token.type]) {
      token.error = {
        id: "notsupported"
      };
    }

    return token;
  }

  parseBackSlash(str, token, charset, closeIndex) {
    // Note: Chrome does weird things with \x & \u depending on a number of factors, we ignore this.
    let i = token.i,
        match,
        profile = this._profile;
    let sub = str.substr(i + 1),
        c = sub[0],
        val;

    if (i + 1 === (closeIndex || str.length)) {
      token.error = {
        id: "esccharopen"
      };
      return;
    }

    if (!charset && (match = sub.match(/^\d\d?/))) {
      // \1 to \99
      // write this as a reference for now, and re-write it later if it doesn't match a group
      token.type = "numref";
      this.getRef(token, match[0]);
      token.l += match[0].length;
      return token;
    }

    if (profile.tokens.namedref && !charset && (c === "g" || c === "k")) {
      return this.parseRef(token, sub);
    }

    if (profile.tokens.unicodecat && (!profile.flags.u || this._modes.u) && (c === "p" || c === "P")) {
      // unicode: \p{Ll} \pL
      return this.parseUnicode(token, sub);
    } else if (profile.tokens.escsequence && c === "Q") {
      // escsequence: \Q...\E
      token.type = "escsequence";
      let e = 2;

      if ((i = sub.indexOf("\\E")) !== -1) {
        token.l += i + 2;
        e += 2;
      } else {
        token.l += closeIndex - token.i - 1;
      }

      token.value = str.substr(token.i + 2, token.l - e);
    } else if (profile.tokens.escunicodeub && this._modes.u && (match = sub.match(/^u\{(\d+)}/))) {
      // unicodeu: \u{0061}
      token.type = "escunicodeub";
      token.l += match[0].length;
      token.code = parseInt(match[1], 16);
    } else if (profile.tokens.escunicodeu && (match = sub.match(/^u([\da-fA-F]{4})/))) {
      // unicode: \uFFFF
      // update SubstLexer if this changes:
      token.type = "escunicodeu";
      token.l += match[0].length;
      token.code = parseInt(match[1], 16);
    } else if (profile.tokens.escunicodexb && (match = sub.match(/^x\{(.*?)}/))) {
      // unicode: \x{FFFF}
      token.type = "escunicodexb";
      token.l += match[0].length;
      val = parseInt(match[1], 16); // PCRE errors on more than 2 digits (>255). In theory it should allow 4?

      if (isNaN(val) || val > 255 || /[^\da-f]/i.test(match[1])) {
        token.error = {
          id: "esccharbad"
        };
      } else {
        token.code = val;
      }
    } else if (match = sub.match(/^x([\da-fA-F]{0,2})/)) {
      // hex ascii: \xFF
      token.type = "eschexadecimal";
      token.l += match[0].length;
      token.code = parseInt(match[1] || 0, 16);
    } else if (match = sub.match(/^c([a-zA-Z])?/)) {
      // control char: \cA \cz
      // also handles: \c
      // not supported in JS strings
      token.type = "esccontrolchar";

      if (match[1]) {
        token.code = match[1].toUpperCase().charCodeAt(0) - 64; // A=65

        token.l += 2;
      } else if (profile.config.ctrlcodeerr) {
        token.l++;
        token.error = {
          id: "esccharbad"
        };
      } else {
        return this.parseChar(str, token, charset); // this builds the "/" token
      }
    } else if (match = sub.match(/^[0-7]{1,3}/)) {
      // octal ascii: \011
      token.type = "escoctal";
      sub = match[0];

      if (parseInt(sub, 8) > 255) {
        sub = sub.substr(0, 2);
      }

      token.l += sub.length;
      token.code = parseInt(sub, 8);
    } else if (profile.tokens.escoctalo && (match = sub.match(/^o\{(.*?)}/i))) {
      // \o{377}
      token.type = "escoctal";
      token.l += match[0].length;
      val = parseInt(match[1], 8);

      if (isNaN(val) || val > 255 || /[^0-7]/.test(match[1])) {
        token.error = {
          id: "esccharbad"
        };
      } else {
        token.code = val;
      }
    } else {
      // single char
      if (token.type = profile.escCharTypes[c]) {
        token.l++;
        token.clss = ExpressionLexer.ANCHOR_TYPES[token.type] ? "anchor" : "charclass";
        return token;
      }

      token.code = profile.escCharCodes[c];

      if (token.code === undefined || token.code === false) {
        // unrecognized.
        return this.parseEscChar(token, c);
      } // update SubstLexer if this changes:


      token.l++;
      token.type = "esc_" + token.code;
    }

    token.clss = "esc";
    return token;
  }

  parseEscChar(token, c) {
    // unrecognized escchar: \u \a \8, etc
    // JS: allowed except if u flag set, Safari still allows \8 \9
    // PCRE: allows \8 \9 but not others // TODO: support?
    let profile = this._profile;
    token.l = 2;

    if (!profile.badEscChars[c] && profile.tokens.escchar && !this._modes.u || profile.escChars[c]) {
      token.type = "escchar";
      token.code = c.charCodeAt(0);
      token.clss = "esc";
    } else {
      token.error = {
        id: "esccharbad"
      };
    }
  }

  parseRef(token, sub) {
    // namedref: \k<name> \k'name' \k{name} \g{name}
    // namedsubroutine: \g<name> \g'name'
    // numref: \g1 \g+2 \g{2}
    // numsubroutine: \g<-1> \g'1'
    // recursion: \g<0> \g'0'
    let c = sub[0],
        s = "",
        match;

    if (match = sub.match(/^[gk](?:'\w*'|<\w*>|{\w*})/)) {
      s = match[0].substr(2, match[0].length - 3);

      if (c === "k" && !isNaN(s)) {
        s = "";
      } // TODO: specific error for numeric \k?

    } else if (match = sub.match(/^g(?:({[-+]?\d+}|<[-+]?\d+>|'[-+]?\d+')|([-+]?\d+))/)) {
      s = match[2] !== undefined ? match[2] : match[1].substr(1, match[1].length - 2);
    }

    let isRef = c === "k" || !(sub[1] === "'" || sub[1] === "<");

    if (!isRef && s == 0) {
      token.type = "recursion";
      token.clss = "ref";
    } else {
      // namedref, extnumref, namedsubroutine, numsubroutine
      token.type = (isNaN(s) ? "named" : (isRef ? "ext" : "") + "num") + (isRef ? "ref" : "subroutine");
      this.getRef(token, s);
    }

    token.l += match ? match[0].length : 1;
  }

  parseUnicode(token, sub) {
    // unicodescript: \p{Cherokee}
    // unicodecat: \p{Ll} \pL
    // not: \P{Ll} \p{^Lu}
    let match = sub.match(/p\{\^?([^}]*)}/i),
        val = match && match[1],
        not = sub[0] === "P";

    if (!match && (match = sub.match(/[pP]([LMZSNPC])/))) {
      val = match[1];
    } else {
      not = not !== (sub[2] === "^");
    }

    token.l += match ? match[0].length : 1;
    token.type = "unicodecat";

    if (this._profile.unicodeScripts[val]) {
      token.type = "unicodescript";
    } else if (!this._profile.unicodeCategories[val]) {
      val = null;
    }

    if (not) {
      token.type = "not" + token.type;
    }

    if (!this._profile.config.unicodenegated && sub[2] === "^" || !val) {
      token.error = {
        id: "unicodebad"
      };
    }

    token.value = val;
    token.clss = "charclass";
    return token;
  }

  parseMode(token, sub) {
    // (?i-x)
    // supported modes in PCRE: i-caseinsens, x-freespacing, s-dotall, m-multiline, U-switchlazy, [J-samename]
    let match = sub.match(/^[-a-z]+\)/i);

    if (!match) {
      return;
    }

    let supModes = this._profile.modes;
    let modes = Object.assign({}, this._modes),
        bad = false,
        not = false,
        s = match[0],
        c;
    token.on = token.off = "";

    for (let i = 0, l = s.length - 1; i < l; i++) {
      c = s[i];

      if (c === "-") {
        not = true;
        continue;
      }

      if (!supModes[c]) {
        bad = true;
        break;
      }

      modes[c] = !not;
      token.on = token.on.replace(c, "");

      if (not) {
        token.off = token.off.replace(c, "");
        token.off += c;
      } else {
        token.on += c;
      }
    }

    token.clss = "special";
    token.type = "mode";
    token.l = match[0].length + 2;

    if (bad) {
      token.error = {
        id: "modebad"
      };
      token.errmode = c;
    } else {
      this._modes = modes;
    }

    return token;
  }

  parseQuant(str, token) {
    // quantifier: {0,3} {3} {1,}
    token.type = token.clss = "quant";
    let i = token.i;
    let end = str.indexOf("}", i + 1);
    token.l += end - i;
    let arr = str.substring(i + 1, end).split(",");
    token.min = parseInt(arr[0]);
    token.max = arr[1] === undefined ? token.min : arr[1] === "" ? -1 : parseInt(arr[1]);

    if (token.max !== -1 && token.min > token.max) {
      token.error = {
        id: "quantrev"
      };
    }

    return token;
  }

  validateRange(str, end) {
    // char range: [a-z] [\11-\n]
    let next = end,
        token = end.prv,
        prv = token.prv;

    if (prv.code === undefined || next.code === undefined) {
      // not a range, rewrite as a char:
      this.parseChar(str, token);
    } else {
      token.clss = "set";

      if (prv.code > next.code) {
        // this gets added here because parse has already moved to the next token:
        this.errors.push(token.error = {
          id: "rangerev"
        });
      } // preserve as separate tokens, but treat as one in the UI:


      next.proxy = prv.proxy = token;
      token.set = [prv, token, next];
    }
  }

}
ExpressionLexer.ANCHOR_TYPES = {
  "bof": true,
  "eof": true,
  "bos": true,
  "eos": true,
  "abseos": true,
  "wordboundary": true,
  "notwordboundary": true,
  "prevmatchend": true
};

module.exports = ExpressionLexer;
//# sourceMappingURL=lexer.js.map


/***/ }),

/***/ 8292:
/***/ (function(module) {

"use strict";


/*
RegExr: Learn, Build, & Test RegEx
Copyright (C) 2017  gskinner.com, inc.

This program is free software: you can redistribute it and/or modify
it under the terms of the GNU General Public License as published by
the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU General Public License for more details.

You should have received a copy of the GNU General Public License
along with this program.  If not, see <https://www.gnu.org/licenses/>.
*/

/*
The core profile essentially defines every feature we support, and is then pared down by other profiles. All values should be y (true).

It also acts in part as pseudo documentation for all of the "type" values.
 */
let y = true,
    n = false;
let core = {
  id: "core",
  flags: {
    "g": "global",
    // note that this is not a real flag in some flavors, but a different method call
    "i": "caseinsensitive",
    "m": "multiline",
    "s": "dotall",
    "u": "unicode",
    "y": "sticky",
    "x": "extended",
    "U": "ungreedy"
  },
  // reserved characters that need to be escaped:
  escChars: "+*?^$\\.[]{}()|/".split("").reduce((o, c) => {
    o[c] = y;
    return o;
  }, {}),
  // escape chars that are specifically not supported by the flavor:
  badEscChars: n,
  escCharCodes: {
    "0": 0,
    // null
    "a": 7,
    // bell
    "t": 9,
    // tab
    "n": 10,
    // lf
    "v": 11,
    // vertical tab
    "f": 12,
    // form feed
    "r": 13,
    // cr
    "e": 27 // escape

  },
  escCharTypes: {
    "A": "bos",
    "b": "wordboundary",
    "B": "notwordboundary",
    "d": "digit",
    "D": "notdigit",
    "G": "prevmatchend",
    "h": "hwhitespace",
    "H": "nothwhitespace",
    "K": "keepout",
    "N": "notlinebreak",
    "R": "linebreak",
    "s": "whitespace",
    "S": "notwhitespace",
    "v": "vwhitespace",
    "V": "notvwhitespace",
    "w": "word",
    "W": "notword",
    "X": "unicodegrapheme",
    "Z": "eos",
    "z": "abseos"
  },
  charTypes: {
    ".": "dot",
    "|": "alt",
    "$": "eof",
    "^": "bof",
    "?": "opt",
    // also: "lazy"
    "+": "plus",
    // also: "possessive"
    "*": "star"
  },
  unquantifiable: {
    // all group/set open tokens are unquantifiable by default (ie. tokens with a .close value)
    "quant": y,
    "plus": y,
    "star": y,
    "opt": y,
    "lazy": y,
    "possessive": y,
    "eof": y,
    "bof": y,
    "eos": y,
    "abseos": y,
    "alt": y,
    "open": y,
    "mode": y,
    "comment": y,
    // TODO: this should actually be ignored by quantifiers.
    "condition": y
  },
  unicodeScripts: {
    // from: http://www.pcre.org/original/doc/html/pcrepattern.html
    "Arabic": y,
    "Armenian": y,
    "Avestan": y,
    "Balinese": y,
    "Bamum": y,
    "Bassa_Vah": y,
    "Batak": y,
    "Bengali": y,
    "Bopomofo": y,
    "Brahmi": y,
    "Braille": y,
    "Buginese": y,
    "Buhid": y,
    "Canadian_Aboriginal": y,
    "Carian": y,
    "Caucasian_Albanian": y,
    "Chakma": y,
    "Cham": y,
    "Cherokee": y,
    "Common": y,
    "Coptic": y,
    "Cuneiform": y,
    "Cypriot": y,
    "Cyrillic": y,
    "Deseret": y,
    "Devanagari": y,
    "Duployan": y,
    "Egyptian_Hieroglyphs": y,
    "Elbasan": y,
    "Ethiopic": y,
    "Georgian": y,
    "Glagolitic": y,
    "Gothic": y,
    "Grantha": y,
    "Greek": y,
    "Gujarati": y,
    "Gurmukhi": y,
    "Han": y,
    "Hangul": y,
    "Hanunoo": y,
    "Hebrew": y,
    "Hiragana": y,
    "Imperial_Aramaic": y,
    "Inherited": y,
    "Inscriptional_Pahlavi": y,
    "Inscriptional_Parthian": y,
    "Javanese": y,
    "Kaithi": y,
    "Kannada": y,
    "Katakana": y,
    "Kayah_Li": y,
    "Kharoshthi": y,
    "Khmer": y,
    "Khojki": y,
    "Khudawadi": y,
    "Lao": y,
    "Latin": y,
    "Lepcha": y,
    "Limbu": y,
    "Linear_A": y,
    "Linear_B": y,
    "Lisu": y,
    "Lycian": y,
    "Lydian": y,
    "Mahajani": y,
    "Malayalam": y,
    "Mandaic": y,
    "Manichaean": y,
    "Meetei_Mayek": y,
    "Mende_Kikakui": y,
    "Meroitic_Cursive": y,
    "Meroitic_Hieroglyphs": y,
    "Miao": y,
    "Modi": y,
    "Mongolian": y,
    "Mro": y,
    "Myanmar": y,
    "Nabataean": y,
    "New_Tai_Lue": y,
    "Nko": y,
    "Ogham": y,
    "Ol_Chiki": y,
    "Old_Italic": y,
    "Old_North_Arabian": y,
    "Old_Permic": y,
    "Old_Persian": y,
    "Old_South_Arabian": y,
    "Old_Turkic": y,
    "Oriya": y,
    "Osmanya": y,
    "Pahawh_Hmong": y,
    "Palmyrene": y,
    "Pau_Cin_Hau": y,
    "Phags_Pa": y,
    "Phoenician": y,
    "Psalter_Pahlavi": y,
    "Rejang": y,
    "Runic": y,
    "Samaritan": y,
    "Saurashtra": y,
    "Sharada": y,
    "Shavian": y,
    "Siddham": y,
    "Sinhala": y,
    "Sora_Sompeng": y,
    "Sundanese": y,
    "Syloti_Nagri": y,
    "Syriac": y,
    "Tagalog": y,
    "Tagbanwa": y,
    "Tai_Le": y,
    "Tai_Tham": y,
    "Tai_Viet": y,
    "Takri": y,
    "Tamil": y,
    "Telugu": y,
    "Thaana": y,
    "Thai": y,
    "Tibetan": y,
    "Tifinagh": y,
    "Tirhuta": y,
    "Ugaritic": y,
    "Vai": y,
    "Warang_Citi": y,
    "Yi": y
  },
  unicodeCategories: {
    // from: http://www.pcre.org/original/doc/html/pcrepattern.html
    "C": y,
    // Other
    "Cc": y,
    // Control
    "Cf": y,
    // Format
    "Cn": y,
    // Unassigned
    "Co": y,
    // Private use
    "Cs": y,
    // Surrogate
    "L": y,
    // Letter
    "L&": y,
    // Any letter 
    "Ll": y,
    // Lower case letter
    "Lm": y,
    // Modifier letter
    "Lo": y,
    // Other letter
    "Lt": y,
    // Title case letter
    "Lu": y,
    // Upper case letter
    "M": y,
    // Mark
    "Mc": y,
    // Spacing mark
    "Me": y,
    // Enclosing mark
    "Mn": y,
    // Non-spacing mark
    "N": y,
    // Number
    "Nd": y,
    // Decimal number
    "Nl": y,
    // Letter number
    "No": y,
    // Other number
    "P": y,
    // Punctuation
    "Pc": y,
    // Connector punctuation
    "Pd": y,
    // Dash punctuation
    "Pe": y,
    // Close punctuation
    "Pf": y,
    // Final punctuation
    "Pi": y,
    // Initial punctuation
    "Po": y,
    // Other punctuation
    "Ps": y,
    // Open punctuation
    "S": y,
    // Symbol
    "Sc": y,
    // Currency symbol
    "Sk": y,
    // Modifier symbol
    "Sm": y,
    // Mathematical symbol
    "So": y,
    // Other symbol
    "Z": y,
    // Separator
    "Zl": y,
    // Line separator
    "Zp": y,
    // Paragraph separator
    "Zs": y // Space separator

  },
  posixCharClasses: {
    // from: http://www.pcre.org/original/doc/html/pcrepattern.html
    "alnum": y,
    // letters and digits
    "alpha": y,
    // letters
    "ascii": y,
    // character codes 0 - 127
    "blank": y,
    // space or tab only
    "cntrl": y,
    // control characters
    "digit": y,
    // decimal digits (same as \d)
    "graph": y,
    // printing characters, excluding space
    "lower": y,
    // lower case letters
    "print": y,
    // printing characters, including space
    "punct": y,
    // printing characters, excluding letters and digits and space
    "space": y,
    // white space (the same as \s from PCRE 8.34)
    "upper": y,
    // upper case letters
    "word": y,
    // "word" characters (same as \w)
    "xdigit": y // hexadecimal digits

  },
  modes: {
    "i": "caseinsensitive",
    "s": "dotall",
    "m": "multiline",
    "x": "freespacing",
    "J": "samename",
    "U": "switchlazy"
  },
  tokens: {
    // note that not all of these are actively used in the lexer, but are included for completeness.
    "open": y,
    // opening /
    "close": y,
    // closing /
    "char": y,
    // abc
    // classes:
    // also in escCharTypes and charTypes
    "set": y,
    // [a-z]
    "setnot": y,
    // [^a-z]
    "setclose": y,
    // ]
    "range": y,
    // [a-z]
    "unicodecat": y,
    // \p{Ll} \P{^Ll} \pL
    "notunicodecat": y,
    // \P{Ll} \p{^Ll} \PL
    "unicodescript": y,
    // \p{Cherokee} \P{^Cherokee}
    "notunicodescript": y,
    // \P{Cherokee} \p{^Cherokee}
    "posixcharclass": y,
    // [[:alpha:]]
    // not in supported flavors:	"posixcollseq": y, // [[.foo.]] // this is recognized by the lexer, currently returns "notsupported" error
    // not in supported flavors:	"unicodeblock": y, // \p{InThai} \p{IsThai} and NOT \P
    // not in supported flavors:	"subtract": y, // [base-[subtract]]
    // not in supported flavors:	"intersect": y, // [base&&[intersect]]
    // esc:
    // also in escCharCodes and escCharTypes
    "escoctal": y,
    // \11
    "escunicodeu": y,
    // \uFFFF
    "escunicodeub": y,
    // \u{00A9}
    "escunicodexb": y,
    // \x{00A9}
    "escsequence": y,
    // \Q...\E
    "eschexadecimal": y,
    // \xFF
    "esccontrolchar": y,
    // \cA
    "escoctalo": y,
    // \o{377} // resolved to escoctal in lexer, no docs required
    "escchar": y,
    // \m (unrecognized escapes) // no reference documentation required
    // group:
    "group": y,
    // (foo)
    "groupclose": y,
    // )
    "noncapgroup": y,
    // (?:foo)
    "namedgroup": y,
    // (?P<name>foo) (?<name>foo) (?'name'foo)
    "atomic": y,
    // (?>foo|bar)
    "define": y,
    // (?(DEFINE)foo)
    "branchreset": y,
    // (?|(a)|(b))
    // lookaround:
    "poslookbehind": y,
    // (?<=foo)
    "neglookbehind": y,
    // (?<!foo)
    "poslookahead": y,
    // (?=foo)
    "neglookahead": y,
    // (?!foo)
    // ref:
    "namedref": y,
    // \k<name> \k'name' \k{name} (?P=name)  \g{name}
    "numref": y,
    // \1
    "extnumref": y,
    // \g{-1} \g{+1} \g{1} \g1 \g-1
    "recursion": y,
    // (?R) (?0) \g<0> \g'0'
    "numsubroutine": y,
    // \g<1> \g'-1' (?1) (?-1)
    "namedsubroutine": y,
    // \g<name> \g'name' (?&name) (?P>name)
    // quantifiers:
    // also in specialChars
    "quant": y,
    // {1,2}
    "possessive": y,
    // ++
    "lazy": y,
    // ?
    // special:
    "conditional": y,
    // (?(?=if)then|else)
    "condition": y,
    // (?=if) any lookaround
    "conditionalelse": y,
    // |
    "conditionalgroup": y,
    // (?(1)a|b) (?(-1)a|b) (?(name)a|b)
    "mode": y,
    // (?i-x) see modes above
    "comment": y,
    // (?#comment)
    // meta:
    "matchanyset": y // [\s\S]

  },
  substTokens: {
    // named references aren't supported in JS or PCRE / PHP
    "subst_$esc": y,
    // $$
    "subst_$&match": y,
    // $&
    "subst_$before": y,
    // $`
    "subst_$after": y,
    // $'
    "subst_$group": y,
    // $1 $99 // resolved to subst_group in lexer, no docs required
    "subst_$bgroup": y,
    // ${1} ${99} // resolved to subst_group in lexer, no docs required
    "subst_bsgroup": y,
    // \1 \99 // resolved to subst_group in lexer, no docs required
    "subst_group": y,
    // $1 \1 \{1} // combined in docs, not used by lexer
    "subst_0match": y,
    // $0 \0 \{0}
    // this isn't a feature of the engine, but of RegExr:
    "subst_esc": y // \n \r \u1234

  },
  config: {
    "forwardref": y,
    // \1(a)
    "nestedref": y,
    // (\1a|b)+
    "ctrlcodeerr": y,
    // does \c error? (vs decompose)
    "reftooctalalways": y,
    // does a single digit reference \1 become an octal? (vs remain an unmatched ref)
    "substdecomposeref": y,
    // will a subst reference decompose? (ex. \3 becomes "\" & "3" if < 3 groups)
    "looseesc": y,
    // should unrecognized escape sequences match the character (ex. \u could match "u") // disabled when `u` flag is set
    "unicodenegated": y,
    // \p{^etc}"
    "namedgroupalt": y // if false, only support (?<name>foo)

  },
  docs: {// for example:
    //possessive: {desc: "+This will be appended to the existing entry." },
    //namedgroup: {tip: "This will overwrite the existing entry." }
  }
};

/*
RegExr: Learn, Build, & Test RegEx
Copyright (C) 2017  gskinner.com, inc.

This program is free software: you can redistribute it and/or modify
it under the terms of the GNU General Public License as published by
the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU General Public License for more details.

You should have received a copy of the GNU General Public License
along with this program.  If not, see <https://www.gnu.org/licenses/>.
*/

/*
The PCRE profile is almost a straight copy of the core profile.
*/
let y$1 = true,
    n$1 = false;
let pcre = {
  id: "pcre",
  label: "PCRE",
  browser: false,
  flags: {
    "u": n$1,
    "y": n$1
  },
  badEscChars: "uUlLN".split("").reduce((o, c) => {
    o[c] = y$1;
    return o;
  }, {}),
  escCharCodes: {
    "v": n$1 // vertical tab // PCRE support \v as vertical whitespace

  },
  tokens: {
    "escunicodeu": n$1,
    // \uFFFF
    "escunicodeub": n$1 // \u{00A9}
    // octalo PCRE 8.34+

  },
  substTokens: {
    "subst_$esc": n$1,
    // $$
    "subst_$&match": n$1,
    // $&
    "subst_$before": n$1,
    // $`
    "subst_$after": n$1 // $'

  },
  config: {
    "reftooctalalways": n$1,
    // does a single digit reference \1 become an octal? (vs remain an unmatched ref)
    "substdecomposeref": n$1,
    // will a subst reference decompose? (ex. \3 becomes "\" & "3" if < 3 groups)
    "looseesc": n$1 // should unrecognized escape sequences match the character (ex. \u could match "u") // disabled when `u` flag is set

  },
  docs: {
    "escoctal": {
      ext: "+<p>The syntax <code>\\o{FFF}</code> is also supported.</p>"
    },
    "numref": {
      ext: "<p>There are multiple syntaxes for this feature: <code>\\1</code> <code>\\g1</code> <code>\\g{1}</code>.</p>" + "<p>The latter syntaxes support relative values preceded by <code>+</code> or <code>-</code>. For example <code>\\g-1</code> would match the group preceding the reference.</p>"
    },
    "lazy": {
      ext: "+<p>This behaviour is reversed by the ungreedy (<code>U</code>) flag/modifier.</p>"
    }
  }
};

/*
RegExr: Learn, Build, & Test RegEx
Copyright (C) 2017  gskinner.com, inc.

This program is free software: you can redistribute it and/or modify
it under the terms of the GNU General Public License as published by
the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU General Public License for more details.

You should have received a copy of the GNU General Public License
along with this program.  If not, see <https://www.gnu.org/licenses/>.
*/

/*
The javascript profile disables a large number of features.

Note that JS warnings are currently added in addJSWarnings in the ExpresssionLexer.
*/
let n$2 = false;

function test(expr, flag) {
  try {
    return new RegExp(expr, flag) && undefined;
  } catch (e) {
    return n$2;
  }
}

function testFlag(flag) {
  return test(".", flag);
}

let unicodeFlag = testFlag("u");
let stickyFlag = testFlag("y");
let dotallFlag = testFlag("s");
let lookbehind = test("(?<=A)");
let namedgroup = test("(?<A>B)");
let unicodecat = test("\\p{Ll}", "u"); // disabled when `u` flag is not set

let javascript = {
  id: "js",
  label: "JavaScript",
  browser: true,
  flags: {
    "s": dotallFlag,
    // warning
    "x": n$2,
    "u": unicodeFlag,
    // warning
    "y": stickyFlag,
    // warning
    "U": n$2
  },
  escCharCodes: {
    "a": n$2,
    // bell
    "e": n$2 // escape

  },
  escCharTypes: {
    "A": n$2,
    // bos
    "G": n$2,
    // prevmatchend
    "h": n$2,
    // hwhitespace
    "H": n$2,
    // nothwhitespace
    "K": n$2,
    // keepout
    "N": n$2,
    // notlinebreak
    "R": n$2,
    // newline
    "v": n$2,
    // vwhitespace
    "V": n$2,
    // notvwhitespace
    "X": n$2,
    // unicodegrapheme
    "Z": n$2,
    // eos
    "z": n$2 // abseos

  },
  unicodeScripts: unicodecat,
  unicodeCategories: unicodecat,
  posixCharClasses: n$2,
  modes: n$2,
  tokens: {
    // classes:
    // also in escCharSpecials and specialChars
    "unicodecat": unicodecat,
    // \p{Ll} \P{^Ll} \pL
    "notunicodecat": unicodecat,
    // \P{Ll} \p{^Ll} \PL
    "unicodescript": unicodecat,
    // \p{Cherokee} \P{^Cherokee}
    "notunicodescript": unicodecat,
    // \P{Cherokee} \p{^Cherokee}
    "posixcharclass": n$2,
    // [[:alpha:]]
    // esc:
    // also in escCharCodes and escCharSpecials
    "escunicodeub": unicodeFlag,
    // \u{00A9}
    "escunicodexb": n$2,
    // \x{00A9}
    "escsequence": n$2,
    // \Q...\E
    "escoctalo": n$2,
    // \o{377}
    // group:
    "namedgroup": namedgroup,
    // (?P<name>foo) (?<name>foo) (?'name'foo)
    "atomic": n$2,
    // (?>foo|bar)
    "define": n$2,
    // (?(DEFINE)foo)
    "branchreset": n$2,
    // (?|(a)|(b))
    // lookaround:
    "poslookbehind": lookbehind,
    // (?<=foo) // warning
    "neglookbehind": lookbehind,
    // (?<!foo) // warning
    // ref:
    "namedref": n$2,
    // \k<name> \k'name' \k{name} (?P=name)  \g{name}
    "extnumref": n$2,
    // \g{-1} \g{+1} \g{1} \g1 \g-1
    "recursion": n$2,
    // (?R) (?0) \g<0> \g'0'
    "numsubroutine": n$2,
    // \g<1> \g'-1' (?1) (?-1)
    "namedsubroutine": n$2,
    // \g<name> \g'name' (?&name) (?P>name)
    // quantifiers:
    // also in specialChars
    "possessive": n$2,
    // special:
    "conditional": n$2,
    // (?(?=if)then|else)
    "conditionalif": n$2,
    // (?=if) any lookaround
    "conditionalelse": n$2,
    // |
    "conditionalgroup": n$2,
    // (?(1)a|b) (?(-1)a|b) (?(name)a|b)
    "mode": n$2,
    // (?i-x) see modes above
    "comment": n$2 // (?#comment)

  },
  config: {
    "forwardref": n$2,
    // \1(a)
    "nestedref": n$2,
    // (\1a|b)+
    "ctrlcodeerr": n$2,
    // does \c error, or decompose?
    "unicodenegated": n$2,
    // \p{^etc}
    "namedgroupalt": n$2 // if false, only support (?<name>foo)

  },
  substTokens: {
    "subst_0match": n$2,
    // $0 \0 \{0}
    "subst_$bgroup": n$2,
    // ${1} ${99}
    "subst_bsgroup": n$2 // \1 \99

  },
  docs: {
    "subst_group": {
      ext: ""
    },
    // remove other syntaxes.
    "namedgroup": {
      ext: ""
    },
    // remove other syntaxes.
    "unicodecat": {
      ext: "<p>Requires the <code>u</code> flag.</p>" + "<p>For a list of values, see this <a href='https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions/Unicode_Property_Escapes'>MDN page</a>.</p>"
    } // notunicodecat, unicodescript, notunicodescript are copied from unicodecat below.

  }
};
javascript.docs.notunicodecat = javascript.docs.unicodescript = javascript.docs.notunicodescript = javascript.docs.unicodecat;

/*
RegExr: Learn, Build, & Test RegEx
Copyright (C) 2017  gskinner.com, inc.

This program is free software: you can redistribute it and/or modify
it under the terms of the GNU General Public License as published by
the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU General Public License for more details.

You should have received a copy of the GNU General Public License
along with this program.  If not, see <https://www.gnu.org/licenses/>.
*/
let profiles = {
  core
};
profiles.pcre = merge(core, pcre);
profiles.js = merge(core, javascript);

function merge(p1, p2) {
  // merges p1 into p2, essentially just a simple deep copy without array support.
  for (let n in p1) {
    if (p2[n] === false) {
      continue;
    } else if (typeof p1[n] === "object") {
      p2[n] = merge(p1[n], p2[n] || {});
    } else if (p2[n] === undefined) {
      p2[n] = p1[n];
    }
  }

  return p2;
}

module.exports = profiles;
//# sourceMappingURL=profiles.js.map


/***/ }),

/***/ 3997:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";
exports.__esModule=true;exports.getRedirectStatus=getRedirectStatus;exports.normalizeRouteRegex=normalizeRouteRegex;exports.default=loadCustomRoutes;exports.allowedStatusCodes=void 0;var _url=__webpack_require__(8835);var pathToRegexp=_interopRequireWildcard(__webpack_require__(4329));var _escapeStringRegexp=_interopRequireDefault(__webpack_require__(7239));var _constants=__webpack_require__(227);var _lexer=_interopRequireDefault(__webpack_require__(5343));var _profiles=_interopRequireDefault(__webpack_require__(8292));function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _getRequireWildcardCache(){if(typeof WeakMap!=="function")return null;var cache=new WeakMap();_getRequireWildcardCache=function(){return cache;};return cache;}function _interopRequireWildcard(obj){if(obj&&obj.__esModule){return obj;}if(obj===null||typeof obj!=="object"&&typeof obj!=="function"){return{default:obj};}var cache=_getRequireWildcardCache();if(cache&&cache.has(obj)){return cache.get(obj);}var newObj={};var hasPropertyDescriptor=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var key in obj){if(Object.prototype.hasOwnProperty.call(obj,key)){var desc=hasPropertyDescriptor?Object.getOwnPropertyDescriptor(obj,key):null;if(desc&&(desc.get||desc.set)){Object.defineProperty(newObj,key,desc);}else{newObj[key]=obj[key];}}}newObj.default=obj;if(cache){cache.set(obj,newObj);}return newObj;}// @ts-ignore
// @ts-ignore
const allowedStatusCodes=new Set([301,302,303,307,308]);exports.allowedStatusCodes=allowedStatusCodes;const allowedHasTypes=new Set(['header','cookie','query','host']);function getRedirectStatus(route){return route.statusCode||(route.permanent?_constants.PERMANENT_REDIRECT_STATUS:_constants.TEMPORARY_REDIRECT_STATUS);}function normalizeRouteRegex(regex){// clean up un-necessary escaping from regex.source which turns / into \\/
return regex.replace(/\\\//g,'/');}function checkRedirect(route){const invalidParts=[];let hadInvalidStatus=false;if(route.statusCode&&!allowedStatusCodes.has(route.statusCode)){hadInvalidStatus=true;invalidParts.push(`\`statusCode\` is not undefined or valid statusCode`);}if(typeof route.permanent!=='boolean'&&!route.statusCode){invalidParts.push(`\`permanent\` is not set to \`true\` or \`false\``);}return{invalidParts,hadInvalidStatus};}function checkHeader(route){const invalidParts=[];if(!Array.isArray(route.headers)){invalidParts.push('`headers` field must be an array');}else{for(const header of route.headers){if(!header||typeof header!=='object'){invalidParts.push("`headers` items must be object with { key: '', value: '' }");break;}if(typeof header.key!=='string'){invalidParts.push('`key` in header item must be string');break;}if(typeof header.value!=='string'){invalidParts.push('`value` in header item must be string');break;}}}return invalidParts;}function tryParsePath(route,handleUrl){const result={};let routePath=route;try{if(handleUrl){const parsedDestination=(0,_url.parse)(route,true);routePath=`${parsedDestination.pathname}${parsedDestination.hash||''}`;}// Make sure we can parse the source properly
result.tokens=pathToRegexp.parse(routePath);pathToRegexp.tokensToRegexp(result.tokens);}catch(err){// If there is an error show our error link but still show original error or a formatted one if we can
const errMatches=err.message.match(/at (\d{0,})/);if(errMatches){const position=parseInt(errMatches[1],10);console.error(`\nError parsing \`${route}\` `+`https://nextjs.org/docs/messages/invalid-route-source\n`+`Reason: ${err.message}\n\n`+`  ${routePath}\n`+`  ${new Array(position).fill(' ').join('')}^\n`);}else{console.error(`\nError parsing ${route} https://nextjs.org/docs/messages/invalid-route-source`,err);}result.error=true;}return result;}function checkCustomRoutes(routes,type){if(!Array.isArray(routes)){console.error(`Error: ${type}s must return an array, received ${typeof routes}.\n`+`See here for more info: https://nextjs.org/docs/messages/routes-must-be-array`);process.exit(1);}let numInvalidRoutes=0;let hadInvalidStatus=false;let hadInvalidHas=false;const allowedKeys=new Set(['source','basePath','locale','has']);if(type==='rewrite'){allowedKeys.add('destination');}if(type==='redirect'){allowedKeys.add('statusCode');allowedKeys.add('permanent');allowedKeys.add('destination');}if(type==='header'){allowedKeys.add('headers');}for(const route of routes){if(!route||typeof route!=='object'){console.error(`The route ${JSON.stringify(route)} is not a valid object with \`source\` and \`${type==='header'?'headers':'destination'}\``);numInvalidRoutes++;continue;}if(type==='rewrite'&&route.basePath===false&&!(route.destination.startsWith('http://')||route.destination.startsWith('https://'))){console.error(`The route ${route.source} rewrites urls outside of the basePath. Please use a destination that starts with \`http://\` or \`https://\` https://nextjs.org/docs/messages/invalid-external-rewrite`);numInvalidRoutes++;continue;}const keys=Object.keys(route);const invalidKeys=keys.filter(key=>!allowedKeys.has(key));const invalidParts=[];if(typeof route.basePath!=='undefined'&&route.basePath!==false){invalidParts.push('`basePath` must be undefined or false');}if(typeof route.locale!=='undefined'&&route.locale!==false){invalidParts.push('`locale` must be undefined or false');}if(typeof route.has!=='undefined'&&!Array.isArray(route.has)){invalidParts.push('`has` must be undefined or valid has object');hadInvalidHas=true;}else if(route.has){const invalidHasItems=[];for(const hasItem of route.has){let invalidHasParts=[];if(!allowedHasTypes.has(hasItem.type)){invalidHasParts.push(`invalid type "${hasItem.type}"`);}if(typeof hasItem.key!=='string'&&hasItem.type!=='host'){invalidHasParts.push(`invalid key "${hasItem.key}"`);}if(typeof hasItem.value!=='undefined'&&typeof hasItem.value!=='string'){invalidHasParts.push(`invalid value "${hasItem.value}"`);}if(typeof hasItem.value==='undefined'&&hasItem.type==='host'){invalidHasParts.push(`value is required for "host" type`);}if(invalidHasParts.length>0){invalidHasItems.push(`${invalidHasParts.join(', ')} for ${JSON.stringify(hasItem)}`);}}if(invalidHasItems.length>0){hadInvalidHas=true;const itemStr=`item${invalidHasItems.length===1?'':'s'}`;console.error(`Invalid \`has\` ${itemStr}:\n`+invalidHasItems.join('\n'));console.error();invalidParts.push(`invalid \`has\` ${itemStr} found`);}}if(!route.source){invalidParts.push('`source` is missing');}else if(typeof route.source!=='string'){invalidParts.push('`source` is not a string');}else if(!route.source.startsWith('/')){invalidParts.push('`source` does not start with /');}if(type==='header'){invalidParts.push(...checkHeader(route));}else{let _route=route;if(!_route.destination){invalidParts.push('`destination` is missing');}else if(typeof _route.destination!=='string'){invalidParts.push('`destination` is not a string');}else if(type==='rewrite'&&!_route.destination.match(/^(\/|https:\/\/|http:\/\/)/)){invalidParts.push('`destination` does not start with `/`, `http://`, or `https://`');}}if(type==='redirect'){const result=checkRedirect(route);hadInvalidStatus=hadInvalidStatus||result.hadInvalidStatus;invalidParts.push(...result.invalidParts);}let sourceTokens;if(typeof route.source==='string'&&route.source.startsWith('/')){// only show parse error if we didn't already show error
// for not being a string
const{tokens,error}=tryParsePath(route.source);if(error){invalidParts.push('`source` parse failed');}sourceTokens=tokens;}const hasSegments=new Set();if(route.has){for(const hasItem of route.has){if(!hasItem.value&&hasItem.key){hasSegments.add(hasItem.key);}if(hasItem.value){const matcher=new RegExp(`^${hasItem.value}$`);const lexer=new _lexer.default();lexer.profile=_profiles.default.js;lexer.parse(`/${matcher.source}/`);Object.keys(lexer.namedGroups).forEach(groupKey=>{hasSegments.add(groupKey);});if(hasItem.type==='host'){hasSegments.add('host');}}}}// make sure no unnamed patterns are attempted to be used in the
// destination as this can cause confusion and is not allowed
if(typeof route.destination==='string'){if(route.destination.startsWith('/')&&Array.isArray(sourceTokens)){const unnamedInDest=new Set();for(const token of sourceTokens){if(typeof token==='object'&&typeof token.name==='number'){const unnamedIndex=new RegExp(`:${token.name}(?!\\d)`);if(route.destination.match(unnamedIndex)){unnamedInDest.add(`:${token.name}`);}}}if(unnamedInDest.size>0){invalidParts.push(`\`destination\` has unnamed params ${[...unnamedInDest].join(', ')}`);}else{const{tokens:destTokens,error:destinationParseFailed}=tryParsePath(route.destination,true);if(destinationParseFailed){invalidParts.push('`destination` parse failed');}else{const sourceSegments=new Set(sourceTokens.map(item=>typeof item==='object'&&item.name).filter(Boolean));const invalidDestSegments=new Set();for(const token of destTokens){if(typeof token==='object'&&!sourceSegments.has(token.name)&&!hasSegments.has(token.name)){invalidDestSegments.add(token.name);}}if(invalidDestSegments.size){invalidParts.push(`\`destination\` has segments not in \`source\` or \`has\` (${[...invalidDestSegments].join(', ')})`);}}}}}const hasInvalidKeys=invalidKeys.length>0;const hasInvalidParts=invalidParts.length>0;if(hasInvalidKeys||hasInvalidParts){console.error(`${invalidParts.join(', ')}${invalidKeys.length?(hasInvalidParts?',':'')+` invalid field${invalidKeys.length===1?'':'s'}: `+invalidKeys.join(','):''} for route ${JSON.stringify(route)}`);console.error();numInvalidRoutes++;}}if(numInvalidRoutes>0){if(hadInvalidStatus){console.error(`\nValid redirect statusCode values are ${[...allowedStatusCodes].join(', ')}`);}if(hadInvalidHas){console.error(`\nValid \`has\` object shape is ${JSON.stringify({type:[...allowedHasTypes].join(', '),key:'the key to check for',value:'undefined or a value string to match against'},null,2)}`);}console.error();console.error(`Error: Invalid ${type}${numInvalidRoutes===1?'':'s'} found`);process.exit(1);}}function processRoutes(routes,config,type){const _routes=routes;const newRoutes=[];const defaultLocales=[];if(config.i18n&&type==='redirect'){for(const item of((_config$i18n=config.i18n)==null?void 0:_config$i18n.domains)||[]){var _config$i18n;defaultLocales.push({locale:item.defaultLocale,base:`http${item.http?'':'s'}://${item.domain}`});}defaultLocales.push({locale:config.i18n.defaultLocale,base:''});}for(const r of _routes){var _r$destination;const srcBasePath=config.basePath&&r.basePath!==false?config.basePath:'';const isExternal=!((_r$destination=r.destination)!=null&&_r$destination.startsWith('/'));const destBasePath=srcBasePath&&!isExternal?srcBasePath:'';if(config.i18n&&r.locale!==false){var _r$destination2;defaultLocales.forEach(item=>{let destination;if(r.destination){destination=item.base?`${item.base}${destBasePath}${r.destination}`:`${destBasePath}${r.destination}`;}newRoutes.push({...r,destination,source:`${srcBasePath}/${item.locale}${r.source}`});});r.source=`/:nextInternalLocale(${config.i18n.locales.map(locale=>(0,_escapeStringRegexp.default)(locale)).join('|')})${r.source==='/'&&!config.trailingSlash?'':r.source}`;if(r.destination&&(_r$destination2=r.destination)!=null&&_r$destination2.startsWith('/')){r.destination=`/:nextInternalLocale${r.destination==='/'&&!config.trailingSlash?'':r.destination}`;}}r.source=`${srcBasePath}${r.source}`;if(r.destination){r.destination=`${destBasePath}${r.destination}`;}newRoutes.push(r);}return newRoutes;}async function loadRedirects(config){if(typeof config.redirects!=='function'){return[];}let redirects=await config.redirects();checkCustomRoutes(redirects,'redirect');return processRoutes(redirects,config,'redirect');}async function loadRewrites(config){if(typeof config.rewrites!=='function'){return{beforeFiles:[],afterFiles:[],fallback:[]};}const _rewrites=await config.rewrites();let beforeFiles=[];let afterFiles=[];let fallback=[];if(!Array.isArray(_rewrites)&&typeof _rewrites==='object'&&Object.keys(_rewrites).every(key=>key==='beforeFiles'||key==='afterFiles'||key==='fallback')){beforeFiles=_rewrites.beforeFiles||[];afterFiles=_rewrites.afterFiles||[];fallback=_rewrites.fallback||[];}else{afterFiles=_rewrites;}checkCustomRoutes(beforeFiles,'rewrite');checkCustomRoutes(afterFiles,'rewrite');checkCustomRoutes(fallback,'rewrite');return{beforeFiles:processRoutes(beforeFiles,config,'rewrite'),afterFiles:processRoutes(afterFiles,config,'rewrite'),fallback:processRoutes(fallback,config,'rewrite')};}async function loadHeaders(config){if(typeof config.headers!=='function'){return[];}let headers=await config.headers();checkCustomRoutes(headers,'header');return processRoutes(headers,config,'header');}async function loadCustomRoutes(config){const[headers,rewrites,redirects]=await Promise.all([loadHeaders(config),loadRewrites(config),loadRedirects(config)]);if(config.trailingSlash){redirects.unshift({source:'/:file((?!\\.well-known(?:/.*)?)(?:[^/]+/)*[^/]+\\.\\w+)/',destination:'/:file',permanent:true,locale:config.i18n?false:undefined,internal:true},{source:'/:notfile((?!\\.well-known(?:/.*)?)(?:[^/]+/)*[^/\\.]+)',destination:'/:notfile/',permanent:true,locale:config.i18n?false:undefined,internal:true});if(config.basePath){redirects.unshift({source:config.basePath,destination:config.basePath+'/',permanent:true,basePath:false,locale:config.i18n?false:undefined,internal:true});}}else{redirects.unshift({source:'/:path+/',destination:'/:path+',permanent:true,locale:config.i18n?false:undefined,internal:true});if(config.basePath){redirects.unshift({source:config.basePath+'/',destination:config.basePath,permanent:true,basePath:false,locale:config.i18n?false:undefined,internal:true});}}return{headers,rewrites,redirects};}
//# sourceMappingURL=load-custom-routes.js.map

/***/ }),

/***/ 9630:
/***/ (function(__unused_webpack_module, exports) {

"use strict";
exports.__esModule=true;exports.htmlEscapeJsonString=htmlEscapeJsonString;// This utility is based on https://github.com/zertosh/htmlescape
// License: https://github.com/zertosh/htmlescape/blob/0527ca7156a524d256101bb310a9f970f63078ad/LICENSE
const ESCAPE_LOOKUP={'&':'\\u0026','>':'\\u003e','<':'\\u003c','\u2028':'\\u2028','\u2029':'\\u2029'};const ESCAPE_REGEX=/[&><\u2028\u2029]/g;function htmlEscapeJsonString(str){return str.replace(ESCAPE_REGEX,match=>ESCAPE_LOOKUP[match]);}
//# sourceMappingURL=htmlescape.js.map

/***/ }),

/***/ 9566:
/***/ (function(module) {

function _extends() {
  module.exports = _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

module.exports = _extends;

/***/ }),

/***/ 2426:
/***/ (function(module) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ 9448:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var _typeof = __webpack_require__(7917);

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function _getRequireWildcardCache() {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {
    return {
      "default": obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj["default"] = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

module.exports = _interopRequireWildcard;

/***/ }),

/***/ 6169:
/***/ (function(module) {

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

module.exports = _objectWithoutPropertiesLoose;

/***/ }),

/***/ 7917:
/***/ (function(module) {

function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ 5517:
/***/ (function(module) {

"use strict";
module.exports = require("@hapi/accept");;

/***/ }),

/***/ 4227:
/***/ (function(module) {

"use strict";
module.exports = require("@next/env");;

/***/ }),

/***/ 227:
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/constants.js");;

/***/ }),

/***/ 3932:
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/document-context.js");;

/***/ }),

/***/ 816:
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/head-manager-context.js");;

/***/ }),

/***/ 5273:
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/head.js");;

/***/ }),

/***/ 9034:
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/i18n/detect-domain-locale.js");;

/***/ }),

/***/ 939:
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/i18n/detect-locale-cookie.js");;

/***/ }),

/***/ 7468:
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/i18n/normalize-locale-path.js");;

/***/ }),

/***/ 9577:
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/router/utils/get-route-from-asset-path.js");;

/***/ }),

/***/ 2378:
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/router/utils/path-match.js");;

/***/ }),

/***/ 2480:
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/router/utils/prepare-destination.js");;

/***/ }),

/***/ 199:
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/router/utils/route-matcher.js");;

/***/ }),

/***/ 4386:
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/router/utils/route-regex.js");;

/***/ }),

/***/ 7579:
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/utils.js");;

/***/ }),

/***/ 2240:
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/server/api-utils.js");;

/***/ }),

/***/ 9622:
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/server/denormalize-page-path.js");;

/***/ }),

/***/ 6171:
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/server/get-page-files.js");;

/***/ }),

/***/ 8460:
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/server/render.js");;

/***/ }),

/***/ 7369:
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/server/send-payload.js");;

/***/ }),

/***/ 5105:
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/server/utils.js");;

/***/ }),

/***/ 4229:
/***/ (function(module) {

"use strict";
module.exports = require("prop-types");;

/***/ }),

/***/ 1191:
/***/ (function(module) {

"use strict";
module.exports = require("querystring");;

/***/ }),

/***/ 9297:
/***/ (function(module) {

"use strict";
module.exports = require("react");;

/***/ }),

/***/ 1168:
/***/ (function(module) {

"use strict";
module.exports = require("styled-jsx/server");;

/***/ }),

/***/ 8835:
/***/ (function(module) {

"use strict";
module.exports = require("url");;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete __webpack_module_cache__[moduleId];
/******/ 		}
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/compat */
/******/ 	
/******/ 	                // Font manifest declaration
/******/ 	                __webpack_require__.__NEXT_FONT_MANIFEST__ = [];
/******/ 	            // Enable feature:
/******/ 	            process.env.__NEXT_OPTIMIZE_FONTS = JSON.stringify(true);/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module doesn't tell about it's top-level declarations so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__(8098);
/******/ 	module.exports = __webpack_exports__;
/******/ 	
/******/ })()
;