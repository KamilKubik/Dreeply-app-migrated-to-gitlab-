module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/dashboard/projects/[project]/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./lib/firebase-admin.js":
/*!*******************************!*\
  !*** ./lib/firebase-admin.js ***!
  \*******************************/
/*! exports provided: auth, db */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "auth", function() { return auth; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "db", function() { return db; });
/* harmony import */ var firebase_admin__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! firebase-admin */ "firebase-admin");
/* harmony import */ var firebase_admin__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(firebase_admin__WEBPACK_IMPORTED_MODULE_0__);


if (!firebase_admin__WEBPACK_IMPORTED_MODULE_0__["apps"].length) {
  firebase_admin__WEBPACK_IMPORTED_MODULE_0__["initializeApp"]({
    credential: firebase_admin__WEBPACK_IMPORTED_MODULE_0__["credential"].cert({
      client_email: 'firebase-adminsdk-ef8mp@saas-startup-a5a34.iam.gserviceaccount.com',
      private_key: '-----BEGIN PRIVATE KEY-----\nMIIEvAIBADANBgkqhkiG9w0BAQEFAASCBKYwggSiAgEAAoIBAQClZWkim9PKKr52\nD0ZDEuv4ITBHUrI/rTpXOYzqJns4Y4bBEPKe202o5MwMbu/egWIfmeL5I+RPg6Gq\nnjAFqLmaxYvf0wMWowDiNVx7PcujR3dU8A/GYoyTUQpX/qv6754SuJxnm+AA6LkY\nkv5HtyvQ1WYLsCB2MF5ia/73wBuH8+UkomX5GJ0CFgexk4qAnvhHxtv8WZxX3dlF\nDXx4Ex8/uyc9i/I51D/NhDknAG/s8TGbOuuTu7oBnpp8jivJRNEf+pvjatbwOh8R\n782Rnmnwsu0PzINCc5boztqmaJEW6pKl8kNlm9FvpKcwcYO2IrfRGWwXLF4oK88z\ncM3XAZldAgMBAAECggEAHB7SUbqJtzEuQbdWHFhOu1i1MyMpwC7NIQBdZ4AUaiFt\ny0x826pwmTsRQDnqWXvI+ZN55h8GlchNB8uuYX/u0pQstGjVeRdMsqkc6K04frHL\nZasNG48s1G0uY4iep+LujsNJgEoduznWIon3Zq0La42ktG8FDeMqYPR4nJnSdHoq\nm3pWfJir+qnMHsiP5QVRc4gISUueK77699EL8rFyM4dWCbRfi7Y0BAu/rkcFboiP\n1HHXEJ/cViGKqVHLwrsSjceA42SP+nAiDUxyLqLhZMoeWAMko1COZ2XNjcEWDBm5\nCd7RCA0KTDPWrc0BhjRVwwPtC7QV1Y+kuikct7ayQQKBgQDXc5ei5m0b/hD7DoS5\nSWCtpKq9Bjmt6sprfv9OMyauC9lybP6KjkY/hRGlZJH2wxMt33rS+XQx5pJg4KRQ\nCcvkFr9brvxe/yrUCJh32sRk3F6Lv7CUFHUBfigZpfBvjiZPyymGg1KXay1M38Oa\nc8/dszni5rELlqlithFLiuDMfQKBgQDEhikIUkXZUwNjfhBUWxFu7gVA4GpcJZLs\nluAts2nL92MrYG+Zux1WZkBtx/PQ4ZZ2N9iw0zDAtHpuCpjVulRsZuNbEKkRyGoL\ngw1Ah4KQf/e38AEtJPvYN77MaFwDl+mangqTQY/myNqtRme83cmxBIb//Zmx2q+H\nXRXUpOT2YQKBgHsM48//9tUD+ELK+faw9+x0naczxQGVlWJrt/i7sh25WsnFgmMz\n+t8QaxGhLNRYeb27Y3TXUAun+nYmFvI3hiGQ9F2yxSSka5uKBTp+0aghTEZYhsss\nG99sZA6x/W5ZK3xrNh5DJoqghdDgA+FUv6WJVUhIJVnPBJMCFUKl4NopAoGAV9ol\no6urv/AlNqfXQu6HB5Dt1ke8JD9Dw/Hae3OV2vFXar+shAuqnMIPEURukTUXXveu\nLbXrOGo1xNWF5x1puh/wiPgUrHdsOIM4PF2Xl2MtaROoYvcCgnDBIX2RjKWvb0gx\nMA0B+EhXwVgU7dAz5qdAdlV3DJPXHesV5D5mgGECgYB5xR0eaeD5UjLsdi9+sQVR\nJvwrsVmQJjdbobD6Uju70M5h6gAyXZXajX9nb97sUtnjWYFLWcCOYuOVaf4+5vZF\nVb/k+kfmZKPsQIdt8cWvK+tVTiljxGUjf/+cg/6fwcV4jGhPFZDWLBjC5j5OZZIZ\n5ovF+rOXON7XT99FDbeDFQ==\n-----END PRIVATE KEY-----\n',
      project_id: 'saas-startup-a5a34'
    }),
    databaseURL: 'https://saas-startup.firebaseio.com'
  });
}

const auth = firebase_admin__WEBPACK_IMPORTED_MODULE_0__["auth"]();
const db = firebase_admin__WEBPACK_IMPORTED_MODULE_0__["firestore"]();


/***/ }),

/***/ "./pages/dashboard/projects/[project]/index.js":
/*!*****************************************************!*\
  !*** ./pages/dashboard/projects/[project]/index.js ***!
  \*****************************************************/
/*! exports provided: getStaticPaths, getStaticProps, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getStaticPaths", function() { return getStaticPaths; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getStaticProps", function() { return getStaticProps; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _lib_firebase_admin__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../lib/firebase-admin */ "./lib/firebase-admin.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! js-cookie */ "js-cookie");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_4__);


var _jsxFileName = "C:\\off-saas\\pages\\dashboard\\projects\\[project]\\index.js";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






const ProjectPage = ({
  projects
}) => {
  const {
    0: selectedProject,
    1: setSelectedProject
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(null);
  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_3__["useRouter"])();
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    const uid = js_cookie__WEBPACK_IMPORTED_MODULE_4___default.a.get('uid');
    const filteredArray = projects && projects.filter(project => project.uid == uid);
    console.log(filteredArray);
    filteredArray && filteredArray.length == 1 && setSelectedProject(filteredArray[0]);
  }, [projects]);
  console.log(projects);
  console.log(selectedProject);

  if (router.isFallback) {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
        children: "Loading..."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 7
    }, undefined);
  }

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: "w-full h-full justify-center items-center",
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
      className: "text-center",
      children: "Welcome to the project page! Project name:"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 7
    }, undefined), selectedProject !== null && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
        className: "text-center",
        children: selectedProject.projectName
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 29,
        columnNumber: 11
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
        className: "text-center",
        children: selectedProject.uid
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 30,
        columnNumber: 11
      }, undefined)]
    }, void 0, true)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 25,
    columnNumber: 5
  }, undefined);
};

const getStaticPaths = async () => {
  // const { projects } = await getAllProjects();
  const snapshot = await _lib_firebase_admin__WEBPACK_IMPORTED_MODULE_2__["db"].collection('projects').get();
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
  // const uid = Cookies.get('uid');
  let ref = _lib_firebase_admin__WEBPACK_IMPORTED_MODULE_2__["db"].collection('projects').where('projectName', '==', params.project);
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

/* harmony default export */ __webpack_exports__["default"] = (ProjectPage);

/***/ }),

/***/ "firebase-admin":
/*!*********************************!*\
  !*** external "firebase-admin" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("firebase-admin");

/***/ }),

/***/ "js-cookie":
/*!****************************!*\
  !*** external "js-cookie" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("js-cookie");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react/jsx-dev-runtime");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbGliL2ZpcmViYXNlLWFkbWluLmpzIiwid2VicGFjazovLy8uL3BhZ2VzL2Rhc2hib2FyZC9wcm9qZWN0cy9bcHJvamVjdF0vaW5kZXguanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiZmlyZWJhc2UtYWRtaW5cIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJqcy1jb29raWVcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L3JvdXRlclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIiXSwibmFtZXMiOlsiYWRtaW4iLCJsZW5ndGgiLCJjcmVkZW50aWFsIiwiY2VydCIsImNsaWVudF9lbWFpbCIsInByaXZhdGVfa2V5IiwicHJvamVjdF9pZCIsImRhdGFiYXNlVVJMIiwiYXV0aCIsImRiIiwiUHJvamVjdFBhZ2UiLCJwcm9qZWN0cyIsInNlbGVjdGVkUHJvamVjdCIsInNldFNlbGVjdGVkUHJvamVjdCIsInVzZVN0YXRlIiwicm91dGVyIiwidXNlUm91dGVyIiwidXNlRWZmZWN0IiwidWlkIiwiQ29va2llcyIsImdldCIsImZpbHRlcmVkQXJyYXkiLCJmaWx0ZXIiLCJwcm9qZWN0IiwiY29uc29sZSIsImxvZyIsImlzRmFsbGJhY2siLCJwcm9qZWN0TmFtZSIsImdldFN0YXRpY1BhdGhzIiwic25hcHNob3QiLCJjb2xsZWN0aW9uIiwiZm9yRWFjaCIsImRvYyIsInB1c2giLCJkYXRhIiwicGF0aHMiLCJtYXAiLCJwYXJhbXMiLCJ0b1N0cmluZyIsImZhbGxiYWNrIiwiZ2V0U3RhdGljUHJvcHMiLCJyZWYiLCJ3aGVyZSIsImlkIiwicHJvcHMiLCJyZXZhbGlkYXRlIl0sIm1hcHBpbmdzIjoiOztRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsSUFBSTtRQUNKO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7O0FDeEZBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFFQSxJQUFJLENBQUNBLG1EQUFBLENBQVdDLE1BQWhCLEVBQXdCO0FBQ3RCRCw4REFBQSxDQUFvQjtBQUNsQkUsY0FBVSxFQUFFRix5REFBQSxDQUFpQkcsSUFBakIsQ0FBc0I7QUFDaENDLGtCQUFZLEVBQUUsb0VBRGtCO0FBRWhDQyxpQkFBVyxFQUNULHNzREFIOEI7QUFJaENDLGdCQUFVLEVBQUU7QUFKb0IsS0FBdEIsQ0FETTtBQU9sQkMsZUFBVyxFQUFFO0FBUEssR0FBcEI7QUFTRDs7QUFFRCxNQUFNQyxJQUFJLEdBQUdSLG1EQUFBLEVBQWI7QUFDQSxNQUFNUyxFQUFFLEdBQUdULHdEQUFBLEVBQVg7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDZkE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsTUFBTVUsV0FBVyxHQUFHLENBQUM7QUFBRUM7QUFBRixDQUFELEtBQWtCO0FBQ3BDLFFBQU07QUFBQSxPQUFDQyxlQUFEO0FBQUEsT0FBa0JDO0FBQWxCLE1BQXdDQyxzREFBUSxDQUFDLElBQUQsQ0FBdEQ7QUFDQSxRQUFNQyxNQUFNLEdBQUdDLDZEQUFTLEVBQXhCO0FBQ0FDLHlEQUFTLENBQUMsTUFBTTtBQUNkLFVBQU1DLEdBQUcsR0FBR0MsZ0RBQU8sQ0FBQ0MsR0FBUixDQUFZLEtBQVosQ0FBWjtBQUNBLFVBQU1DLGFBQWEsR0FBR1YsUUFBUSxJQUFJQSxRQUFRLENBQUNXLE1BQVQsQ0FBaUJDLE9BQUQsSUFBYUEsT0FBTyxDQUFDTCxHQUFSLElBQWVBLEdBQTVDLENBQWxDO0FBQ0FNLFdBQU8sQ0FBQ0MsR0FBUixDQUFZSixhQUFaO0FBQ0FBLGlCQUFhLElBQUlBLGFBQWEsQ0FBQ3BCLE1BQWQsSUFBd0IsQ0FBekMsSUFBOENZLGtCQUFrQixDQUFDUSxhQUFhLENBQUMsQ0FBRCxDQUFkLENBQWhFO0FBQ0QsR0FMUSxFQUtOLENBQUNWLFFBQUQsQ0FMTSxDQUFUO0FBTUFhLFNBQU8sQ0FBQ0MsR0FBUixDQUFZZCxRQUFaO0FBQ0FhLFNBQU8sQ0FBQ0MsR0FBUixDQUFZYixlQUFaOztBQUNBLE1BQUlHLE1BQU0sQ0FBQ1csVUFBWCxFQUF1QjtBQUNyQix3QkFDRTtBQUFBLDZCQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFERjtBQUtEOztBQUNELHNCQUNFO0FBQUssYUFBUyxFQUFDLDJDQUFmO0FBQUEsNEJBQ0U7QUFBSSxlQUFTLEVBQUMsYUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFERixFQUVHZCxlQUFlLEtBQUssSUFBcEIsaUJBQ0M7QUFBQSw4QkFDRTtBQUFHLGlCQUFTLEVBQUMsYUFBYjtBQUFBLGtCQUE0QkEsZUFBZSxDQUFDZTtBQUE1QztBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURGLGVBRUU7QUFBRyxpQkFBUyxFQUFDLGFBQWI7QUFBQSxrQkFBNEJmLGVBQWUsQ0FBQ007QUFBNUM7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFGRjtBQUFBLG9CQUhKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURGO0FBV0QsQ0E3QkQ7O0FBK0JPLE1BQU1VLGNBQWMsR0FBRyxZQUFZO0FBQ3hDO0FBQ0EsUUFBTUMsUUFBUSxHQUFHLE1BQU1wQixzREFBRSxDQUFDcUIsVUFBSCxDQUFjLFVBQWQsRUFBMEJWLEdBQTFCLEVBQXZCO0FBRUEsUUFBTVQsUUFBUSxHQUFHLEVBQWpCO0FBQ0FrQixVQUFRLENBQUNFLE9BQVQsQ0FBa0JDLEdBQUQsSUFBUztBQUN4QnJCLFlBQVEsQ0FBQ3NCLElBQVQsQ0FBY0QsR0FBRyxDQUFDRSxJQUFKLEVBQWQ7QUFDRCxHQUZEO0FBSUEsUUFBTUMsS0FBSyxHQUFHeEIsUUFBUSxDQUFDeUIsR0FBVCxDQUFjYixPQUFELEtBQWM7QUFDdkNjLFVBQU0sRUFBRTtBQUNOZCxhQUFPLEVBQUVBLE9BQU8sQ0FBQ0ksV0FBUixDQUFvQlcsUUFBcEI7QUFESDtBQUQrQixHQUFkLENBQWIsQ0FBZDtBQU1BLFNBQU87QUFDTEgsU0FBSyxFQUFFQSxLQURGO0FBRUxJLFlBQVEsRUFBRTtBQUZMLEdBQVA7QUFJRCxDQW5CTTtBQXFCQSxNQUFNQyxjQUFjLEdBQUcsT0FBTztBQUFFSDtBQUFGLENBQVAsS0FBc0I7QUFDbEQ7QUFDQTtBQUNBLE1BQUlJLEdBQUcsR0FBR2hDLHNEQUFFLENBQUNxQixVQUFILENBQWMsVUFBZCxFQUEwQlksS0FBMUIsQ0FBZ0MsYUFBaEMsRUFBK0MsSUFBL0MsRUFBcURMLE1BQU0sQ0FBQ2QsT0FBNUQsQ0FBVjtBQUVBLFFBQU1NLFFBQVEsR0FBRyxNQUFNWSxHQUFHLENBQUNyQixHQUFKLEVBQXZCO0FBQ0EsUUFBTVQsUUFBUSxHQUFHLEVBQWpCO0FBRUFrQixVQUFRLENBQUNFLE9BQVQsQ0FBa0JDLEdBQUQsSUFBUztBQUN4QnJCLFlBQVEsQ0FBQ3NCLElBQVQ7QUFBZ0JVLFFBQUUsRUFBRVgsR0FBRyxDQUFDVztBQUF4QixPQUErQlgsR0FBRyxDQUFDRSxJQUFKLEVBQS9CO0FBQ0QsR0FGRDtBQUlBLFNBQU87QUFDTFUsU0FBSyxFQUFFO0FBQUVqQztBQUFGLEtBREY7QUFFTGtDLGNBQVUsRUFBRTtBQUZQLEdBQVA7QUFJRCxDQWhCTSxDLENBa0JQO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRWVuQywwRUFBZixFOzs7Ozs7Ozs7OztBQzFGQSwyQzs7Ozs7Ozs7Ozs7QUNBQSxzQzs7Ozs7Ozs7Ozs7QUNBQSx3Qzs7Ozs7Ozs7Ozs7QUNBQSxrQzs7Ozs7Ozs7Ozs7QUNBQSxrRCIsImZpbGUiOiJwYWdlcy9kYXNoYm9hcmQvcHJvamVjdHMvW3Byb2plY3RdLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSByZXF1aXJlKCcuLi8uLi8uLi9zc3ItbW9kdWxlLWNhY2hlLmpzJyk7XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdHZhciB0aHJldyA9IHRydWU7XG4gXHRcdHRyeSB7XG4gXHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG4gXHRcdFx0dGhyZXcgPSBmYWxzZTtcbiBcdFx0fSBmaW5hbGx5IHtcbiBcdFx0XHRpZih0aHJldykgZGVsZXRlIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHR9XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9wYWdlcy9kYXNoYm9hcmQvcHJvamVjdHMvW3Byb2plY3RdL2luZGV4LmpzXCIpO1xuIiwiaW1wb3J0ICogYXMgYWRtaW4gZnJvbSAnZmlyZWJhc2UtYWRtaW4nO1xyXG5cclxuaWYgKCFhZG1pbi5hcHBzLmxlbmd0aCkge1xyXG4gIGFkbWluLmluaXRpYWxpemVBcHAoe1xyXG4gICAgY3JlZGVudGlhbDogYWRtaW4uY3JlZGVudGlhbC5jZXJ0KHtcclxuICAgICAgY2xpZW50X2VtYWlsOiAnZmlyZWJhc2UtYWRtaW5zZGstZWY4bXBAc2Fhcy1zdGFydHVwLWE1YTM0LmlhbS5nc2VydmljZWFjY291bnQuY29tJyxcclxuICAgICAgcHJpdmF0ZV9rZXk6XHJcbiAgICAgICAgJy0tLS0tQkVHSU4gUFJJVkFURSBLRVktLS0tLVxcbk1JSUV2QUlCQURBTkJna3Foa2lHOXcwQkFRRUZBQVNDQktZd2dnU2lBZ0VBQW9JQkFRQ2xaV2tpbTlQS0tyNTJcXG5EMFpERXV2NElUQkhVckkvclRwWE9ZenFKbnM0WTRiQkVQS2UyMDJvNU13TWJ1L2VnV0lmbWVMNUkrUlBnNkdxXFxubmpBRnFMbWF4WXZmMHdNV293RGlOVng3UGN1alIzZFU4QS9HWW95VFVRcFgvcXY2NzU0U3VKeG5tK0FBNkxrWVxcbmt2NUh0eXZRMVdZTHNDQjJNRjVpYS83M3dCdUg4K1Vrb21YNUdKMENGZ2V4azRxQW52aEh4dHY4V1p4WDNkbEZcXG5EWHg0RXg4L3V5YzlpL0k1MUQvTmhEa25BRy9zOFRHYk91dVR1N29CbnBwOGppdkpSTkVmK3B2amF0YndPaDhSXFxuNzgyUm5tbndzdTBQeklOQ2M1Ym96dHFtYUpFVzZwS2w4a05sbTlGdnBLY3djWU8ySXJmUkdXd1hMRjRvSzg4elxcbmNNM1hBWmxkQWdNQkFBRUNnZ0VBSEI3U1VicUp0ekV1UWJkV0hGaE91MWkxTXlNcHdDN05JUUJkWjRBVWFpRnRcXG55MHg4MjZwd21Uc1JRRG5xV1h2SStaTjU1aDhHbGNoTkI4dXVZWC91MHBRc3RHalZlUmRNc3FrYzZLMDRmckhMXFxuWmFzTkc0OHMxRzB1WTRpZXArTHVqc05KZ0VvZHV6bldJb24zWnEwTGE0Mmt0RzhGRGVNcVlQUjRuSm5TZEhvcVxcbm0zcFdmSmlyK3FuTUhzaVA1UVZSYzRnSVNVdWVLNzc2OTlFTDhyRnlNNGRXQ2JSZmk3WTBCQXUvcmtjRmJvaVBcXG4xSEhYRUovY1ZpR0txVkhMd3JzU2pjZUE0MlNQK25BaURVeHlMcUxoWk1vZVdBTWtvMUNPWjJYTmpjRVdEQm01XFxuQ2Q3UkNBMEtURFBXcmMwQmhqUlZ3d1B0QzdRVjFZK2t1aWtjdDdheVFRS0JnUURYYzVlaTVtMGIvaEQ3RG9TNVxcblNXQ3RwS3E5QmptdDZzcHJmdjlPTXlhdUM5bHliUDZLamtZL2hSR2xaSkgyd3hNdDMzclMrWFF4NXBKZzRLUlFcXG5DY3ZrRnI5YnJ2eGUveXJVQ0poMzJzUmszRjZMdjdDVUZIVUJmaWdacGZCdmppWlB5eW1HZzFLWGF5MU0zOE9hXFxuYzgvZHN6bmk1ckVMbHFsaXRoRkxpdURNZlFLQmdRREVoaWtJVWtYWlV3TmpmaEJVV3hGdTdnVkE0R3BjSlpMc1xcbmx1QXRzMm5MOTJNcllHK1p1eDFXWmtCdHgvUFE0WloyTjlpdzB6REF0SHB1Q3BqVnVsUnNadU5iRUtrUnlHb0xcXG5ndzFBaDRLUWYvZTM4QUV0SlB2WU43N01hRndEbCttYW5ncVRRWS9teU5xdFJtZTgzY214QkliLy9abXgycStIXFxuWFJYVXBPVDJZUUtCZ0hzTTQ4Ly85dFVEK0VMSytmYXc5K3gwbmFjenhRR1ZsV0pydC9pN3NoMjVXc25GZ21Nelxcbit0OFFheEdoTE5SWWViMjdZM1RYVUF1bituWW1GdkkzaGlHUTlGMnl4U1NrYTV1S0JUcCswYWdoVEVaWWhzc3NcXG5HOTlzWkE2eC9XNVpLM3hyTmg1REpvcWdoZERnQStGVXY2V0pWVWhJSlZuUEJKTUNGVUtsNE5vcEFvR0FWOW9sXFxubzZ1cnYvQWxOcWZYUXU2SEI1RHQxa2U4SkQ5RHcvSGFlM09WMnZGWGFyK3NoQXVxbk1JUEVVUnVrVFVYWHZldVxcbkxiWHJPR28xeE5XRjV4MXB1aC93aVBnVXJIZHNPSU00UEYyWGwyTXRhUk9vWXZjQ2duREJJWDJSaktXdmIwZ3hcXG5NQTBCK0VoWHdWZ1U3ZEF6NXFkQWRsVjNESlBYSGVzVjVENW1nR0VDZ1lCNXhSMGVhZUQ1VWpMc2RpOStzUVZSXFxuSnZ3cnNWbVFKamRib2JENlVqdTcwTTVoNmdBeVhaWGFqWDluYjk3c1V0bmpXWUZMV2NDT1l1T1ZhZjQrNXZaRlxcblZiL2sra2ZtWktQc1FJZHQ4Y1d2Syt0VlRpbGp4R1VqZi8rY2cvNmZ3Y1Y0akdoUEZaRFdMQmpDNWo1T1paSVpcXG41b3ZGK3JPWE9ON1hUOTlGRGJlREZRPT1cXG4tLS0tLUVORCBQUklWQVRFIEtFWS0tLS0tXFxuJyxcclxuICAgICAgcHJvamVjdF9pZDogJ3NhYXMtc3RhcnR1cC1hNWEzNCcsXHJcbiAgICB9KSxcclxuICAgIGRhdGFiYXNlVVJMOiAnaHR0cHM6Ly9zYWFzLXN0YXJ0dXAuZmlyZWJhc2Vpby5jb20nLFxyXG4gIH0pO1xyXG59XHJcblxyXG5jb25zdCBhdXRoID0gYWRtaW4uYXV0aCgpO1xyXG5jb25zdCBkYiA9IGFkbWluLmZpcmVzdG9yZSgpO1xyXG5cclxuZXhwb3J0IHsgYXV0aCwgZGIgfTtcclxuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IGRiIH0gZnJvbSAnLi4vLi4vLi4vLi4vbGliL2ZpcmViYXNlLWFkbWluJztcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xyXG5pbXBvcnQgQ29va2llcyBmcm9tICdqcy1jb29raWUnO1xyXG5cclxuY29uc3QgUHJvamVjdFBhZ2UgPSAoeyBwcm9qZWN0cyB9KSA9PiB7XHJcbiAgY29uc3QgW3NlbGVjdGVkUHJvamVjdCwgc2V0U2VsZWN0ZWRQcm9qZWN0XSA9IHVzZVN0YXRlKG51bGwpO1xyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zdCB1aWQgPSBDb29raWVzLmdldCgndWlkJyk7XHJcbiAgICBjb25zdCBmaWx0ZXJlZEFycmF5ID0gcHJvamVjdHMgJiYgcHJvamVjdHMuZmlsdGVyKChwcm9qZWN0KSA9PiBwcm9qZWN0LnVpZCA9PSB1aWQpO1xyXG4gICAgY29uc29sZS5sb2coZmlsdGVyZWRBcnJheSk7XHJcbiAgICBmaWx0ZXJlZEFycmF5ICYmIGZpbHRlcmVkQXJyYXkubGVuZ3RoID09IDEgJiYgc2V0U2VsZWN0ZWRQcm9qZWN0KGZpbHRlcmVkQXJyYXlbMF0pO1xyXG4gIH0sIFtwcm9qZWN0c10pO1xyXG4gIGNvbnNvbGUubG9nKHByb2plY3RzKTtcclxuICBjb25zb2xlLmxvZyhzZWxlY3RlZFByb2plY3QpO1xyXG4gIGlmIChyb3V0ZXIuaXNGYWxsYmFjaykge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdj5cclxuICAgICAgICA8cD5Mb2FkaW5nLi4uPC9wPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICk7XHJcbiAgfVxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbCBoLWZ1bGwganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyXCI+XHJcbiAgICAgIDxoMiBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlclwiPldlbGNvbWUgdG8gdGhlIHByb2plY3QgcGFnZSEgUHJvamVjdCBuYW1lOjwvaDI+XHJcbiAgICAgIHtzZWxlY3RlZFByb2plY3QgIT09IG51bGwgJiYgKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlclwiPntzZWxlY3RlZFByb2plY3QucHJvamVjdE5hbWV9PC9wPlxyXG4gICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXJcIj57c2VsZWN0ZWRQcm9qZWN0LnVpZH08L3A+XHJcbiAgICAgICAgPC8+XHJcbiAgICAgICl9XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGdldFN0YXRpY1BhdGhzID0gYXN5bmMgKCkgPT4ge1xyXG4gIC8vIGNvbnN0IHsgcHJvamVjdHMgfSA9IGF3YWl0IGdldEFsbFByb2plY3RzKCk7XHJcbiAgY29uc3Qgc25hcHNob3QgPSBhd2FpdCBkYi5jb2xsZWN0aW9uKCdwcm9qZWN0cycpLmdldCgpO1xyXG5cclxuICBjb25zdCBwcm9qZWN0cyA9IFtdO1xyXG4gIHNuYXBzaG90LmZvckVhY2goKGRvYykgPT4ge1xyXG4gICAgcHJvamVjdHMucHVzaChkb2MuZGF0YSgpKTtcclxuICB9KTtcclxuXHJcbiAgY29uc3QgcGF0aHMgPSBwcm9qZWN0cy5tYXAoKHByb2plY3QpID0+ICh7XHJcbiAgICBwYXJhbXM6IHtcclxuICAgICAgcHJvamVjdDogcHJvamVjdC5wcm9qZWN0TmFtZS50b1N0cmluZygpLFxyXG4gICAgfSxcclxuICB9KSk7XHJcblxyXG4gIHJldHVybiB7XHJcbiAgICBwYXRoczogcGF0aHMsXHJcbiAgICBmYWxsYmFjazogdHJ1ZSxcclxuICB9O1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGdldFN0YXRpY1Byb3BzID0gYXN5bmMgKHsgcGFyYW1zIH0pID0+IHtcclxuICAvLyBjb25zdCB7IHByb2plY3RzIH0gPSBhd2FpdCBnZXRQYXJ0aWN1bGFyUHJvamVjdChwYXJhbXMud29yayk7XHJcbiAgLy8gY29uc3QgdWlkID0gQ29va2llcy5nZXQoJ3VpZCcpO1xyXG4gIGxldCByZWYgPSBkYi5jb2xsZWN0aW9uKCdwcm9qZWN0cycpLndoZXJlKCdwcm9qZWN0TmFtZScsICc9PScsIHBhcmFtcy5wcm9qZWN0KTtcclxuXHJcbiAgY29uc3Qgc25hcHNob3QgPSBhd2FpdCByZWYuZ2V0KCk7XHJcbiAgY29uc3QgcHJvamVjdHMgPSBbXTtcclxuXHJcbiAgc25hcHNob3QuZm9yRWFjaCgoZG9jKSA9PiB7XHJcbiAgICBwcm9qZWN0cy5wdXNoKHsgaWQ6IGRvYy5pZCwgLi4uZG9jLmRhdGEoKSB9KTtcclxuICB9KTtcclxuXHJcbiAgcmV0dXJuIHtcclxuICAgIHByb3BzOiB7IHByb2plY3RzIH0sXHJcbiAgICByZXZhbGlkYXRlOiAxLFxyXG4gIH07XHJcbn07XHJcblxyXG4vLyBleHBvcnQgY29uc3QgZ2V0U2VydmVyU2lkZVByb3BzID0gYXN5bmMgKHsgcGFyYW1zIH0pID0+IHtcclxuLy8gICBsZXQgcmVmID0gZGIuY29sbGVjdGlvbigncHJvamVjdHMnKS53aGVyZSgncHJvamVjdE5hbWUnLCAnPT0nLCBwYXJhbXMucHJvamVjdCk7XHJcblxyXG4vLyAgIGNvbnN0IHNuYXBzaG90ID0gYXdhaXQgcmVmLmdldCgpO1xyXG4vLyAgIGNvbnN0IHByb2plY3RzID0gW107XHJcblxyXG4vLyAgIHNuYXBzaG90LmZvckVhY2goKGRvYykgPT4ge1xyXG4vLyAgICAgcHJvamVjdHMucHVzaCh7IGlkOiBkb2MuaWQsIC4uLmRvYy5kYXRhKCkgfSk7XHJcbi8vICAgfSk7XHJcblxyXG4vLyAgIHJldHVybiB7XHJcbi8vICAgICBwcm9wczogeyBwcm9qZWN0cyB9LFxyXG4vLyAgIH07XHJcbi8vIH07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQcm9qZWN0UGFnZTtcclxuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZmlyZWJhc2UtYWRtaW5cIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwianMtY29va2llXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvcm91dGVyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9