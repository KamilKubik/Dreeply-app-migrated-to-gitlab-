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
    projects && setSelectedProject(projects[0]);
  }, [projects]);
  console.log(projects);

  if (router.isFallback) {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
        children: "Loading..."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 15,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 7
    }, undefined);
  }

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
      children: "Welcome to the project page! Project name:"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 7
    }, undefined), selectedProject && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
      children: selectedProject.projectName
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 27
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 20,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbGliL2ZpcmViYXNlLWFkbWluLmpzIiwid2VicGFjazovLy8uL3BhZ2VzL2Rhc2hib2FyZC9wcm9qZWN0cy9bcHJvamVjdF0vaW5kZXguanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiZmlyZWJhc2UtYWRtaW5cIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L3JvdXRlclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIiXSwibmFtZXMiOlsiYWRtaW4iLCJsZW5ndGgiLCJjcmVkZW50aWFsIiwiY2VydCIsImNsaWVudF9lbWFpbCIsInByaXZhdGVfa2V5IiwicHJvamVjdF9pZCIsImRhdGFiYXNlVVJMIiwiYXV0aCIsImRiIiwiUHJvamVjdFBhZ2UiLCJwcm9qZWN0cyIsInNlbGVjdGVkUHJvamVjdCIsInNldFNlbGVjdGVkUHJvamVjdCIsInVzZVN0YXRlIiwicm91dGVyIiwidXNlUm91dGVyIiwidXNlRWZmZWN0IiwiY29uc29sZSIsImxvZyIsImlzRmFsbGJhY2siLCJwcm9qZWN0TmFtZSIsImdldFN0YXRpY1BhdGhzIiwic25hcHNob3QiLCJjb2xsZWN0aW9uIiwiZ2V0IiwiZm9yRWFjaCIsImRvYyIsInB1c2giLCJkYXRhIiwicGF0aHMiLCJtYXAiLCJwcm9qZWN0IiwicGFyYW1zIiwidG9TdHJpbmciLCJmYWxsYmFjayIsImdldFN0YXRpY1Byb3BzIiwicmVmIiwid2hlcmUiLCJpZCIsInByb3BzIiwicmV2YWxpZGF0ZSJdLCJtYXBwaW5ncyI6Ijs7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLElBQUk7UUFDSjtRQUNBOztR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RkwsR0FBUDtBQUlELENBbkJNO0FBcUJBLE1BQU1DLGNBQWMsR0FBRyxPQUFPO0FBQUVIO0FBQUYsQ0FBUCxLQUFzQjtBQUNsRDtBQUNBLE1BQUlJLEdBQUcsR0FBRzVCLHNEQUFFLENBQUNlLFVBQUgsQ0FBYyxVQUFkLEVBQTBCYyxLQUExQixDQUFnQyxhQUFoQyxFQUErQyxJQUEvQyxFQUFxREwsTUFBTSxDQUFDRCxPQUE1RCxDQUFWO0FBRUEsUUFBTVQsUUFBUSxHQUFHLE1BQU1jLEdBQUcsQ0FBQ1osR0FBSixFQUF2QjtBQUNBLFFBQU1kLFFBQVEsR0FBRyxFQUFqQjtBQUVBWSxVQUFRLENBQUNHLE9BQVQsQ0FBa0JDLEdBQUQsSUFBUztBQUN4QmhCLFlBQVEsQ0FBQ2lCLElBQVQ7QUFBZ0JXLFFBQUUsRUFBRVosR0FBRyxDQUFDWTtBQUF4QixPQUErQlosR0FBRyxDQUFDRSxJQUFKLEVBQS9CO0FBQ0QsR0FGRDtBQUlBLFNBQU87QUFDTFcsU0FBSyxFQUFFO0FBQUU3QjtBQUFGLEtBREY7QUFFTDhCLGNBQVUsRUFBRTtBQUZQLEdBQVA7QUFJRCxDQWZNLEMsQ0FpQlA7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFZS9CLDBFQUFmLEU7Ozs7Ozs7Ozs7O0FDL0VBLDJDOzs7Ozs7Ozs7OztBQ0FBLHdDOzs7Ozs7Ozs7OztBQ0FBLGtDOzs7Ozs7Ozs7OztBQ0FBLGtEIiwiZmlsZSI6InBhZ2VzL2Rhc2hib2FyZC9wcm9qZWN0cy9bcHJvamVjdF0uanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHJlcXVpcmUoJy4uLy4uLy4uL3Nzci1tb2R1bGUtY2FjaGUuanMnKTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0dmFyIHRocmV3ID0gdHJ1ZTtcbiBcdFx0dHJ5IHtcbiBcdFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbiBcdFx0XHR0aHJldyA9IGZhbHNlO1xuIFx0XHR9IGZpbmFsbHkge1xuIFx0XHRcdGlmKHRocmV3KSBkZWxldGUgaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdH1cblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3BhZ2VzL2Rhc2hib2FyZC9wcm9qZWN0cy9bcHJvamVjdF0vaW5kZXguanNcIik7XG4iLCJpbXBvcnQgKiBhcyBhZG1pbiBmcm9tICdmaXJlYmFzZS1hZG1pbic7XHJcblxyXG5pZiAoIWFkbWluLmFwcHMubGVuZ3RoKSB7XHJcbiAgYWRtaW4uaW5pdGlhbGl6ZUFwcCh7XHJcbiAgICBjcmVkZW50aWFsOiBhZG1pbi5jcmVkZW50aWFsLmNlcnQoe1xyXG4gICAgICBjbGllbnRfZW1haWw6ICdmaXJlYmFzZS1hZG1pbnNkay1lZjhtcEBzYWFzLXN0YXJ0dXAtYTVhMzQuaWFtLmdzZXJ2aWNlYWNjb3VudC5jb20nLFxyXG4gICAgICBwcml2YXRlX2tleTpcclxuICAgICAgICAnLS0tLS1CRUdJTiBQUklWQVRFIEtFWS0tLS0tXFxuTUlJRXZBSUJBREFOQmdrcWhraUc5dzBCQVFFRkFBU0NCS1l3Z2dTaUFnRUFBb0lCQVFDbFpXa2ltOVBLS3I1MlxcbkQwWkRFdXY0SVRCSFVySS9yVHBYT1l6cUpuczRZNGJCRVBLZTIwMm81TXdNYnUvZWdXSWZtZUw1SStSUGc2R3FcXG5uakFGcUxtYXhZdmYwd01Xb3dEaU5WeDdQY3VqUjNkVThBL0dZb3lUVVFwWC9xdjY3NTRTdUp4bm0rQUE2TGtZXFxua3Y1SHR5dlExV1lMc0NCMk1GNWlhLzczd0J1SDgrVWtvbVg1R0owQ0ZnZXhrNHFBbnZoSHh0djhXWnhYM2RsRlxcbkRYeDRFeDgvdXljOWkvSTUxRC9OaERrbkFHL3M4VEdiT3V1VHU3b0JucHA4aml2SlJORWYrcHZqYXRid09oOFJcXG43ODJSbm1ud3N1MFB6SU5DYzVib3p0cW1hSkVXNnBLbDhrTmxtOUZ2cEtjd2NZTzJJcmZSR1d3WExGNG9LODh6XFxuY00zWEFabGRBZ01CQUFFQ2dnRUFIQjdTVWJxSnR6RXVRYmRXSEZoT3UxaTFNeU1wd0M3TklRQmRaNEFVYWlGdFxcbnkweDgyNnB3bVRzUlFEbnFXWHZJK1pONTVoOEdsY2hOQjh1dVlYL3UwcFFzdEdqVmVSZE1zcWtjNkswNGZySExcXG5aYXNORzQ4czFHMHVZNGllcCtMdWpzTkpnRW9kdXpuV0lvbjNacTBMYTQya3RHOEZEZU1xWVBSNG5KblNkSG9xXFxubTNwV2ZKaXIrcW5NSHNpUDVRVlJjNGdJU1V1ZUs3NzY5OUVMOHJGeU00ZFdDYlJmaTdZMEJBdS9ya2NGYm9pUFxcbjFISFhFSi9jVmlHS3FWSEx3cnNTamNlQTQyU1ArbkFpRFV4eUxxTGhaTW9lV0FNa28xQ09aMlhOamNFV0RCbTVcXG5DZDdSQ0EwS1REUFdyYzBCaGpSVnd3UHRDN1FWMVkra3Vpa2N0N2F5UVFLQmdRRFhjNWVpNW0wYi9oRDdEb1M1XFxuU1dDdHBLcTlCam10NnNwcmZ2OU9NeWF1QzlseWJQNktqa1kvaFJHbFpKSDJ3eE10MzNyUytYUXg1cEpnNEtSUVxcbkNjdmtGcjlicnZ4ZS95clVDSmgzMnNSazNGNkx2N0NVRkhVQmZpZ1pwZkJ2amlaUHl5bUdnMUtYYXkxTTM4T2FcXG5jOC9kc3puaTVyRUxscWxpdGhGTGl1RE1mUUtCZ1FERWhpa0lVa1haVXdOamZoQlVXeEZ1N2dWQTRHcGNKWkxzXFxubHVBdHMybkw5Mk1yWUcrWnV4MVdaa0J0eC9QUTRaWjJOOWl3MHpEQXRIcHVDcGpWdWxSc1p1TmJFS2tSeUdvTFxcbmd3MUFoNEtRZi9lMzhBRXRKUHZZTjc3TWFGd0RsK21hbmdxVFFZL215TnF0Um1lODNjbXhCSWIvL1pteDJxK0hcXG5YUlhVcE9UMllRS0JnSHNNNDgvLzl0VUQrRUxLK2ZhdzkreDBuYWN6eFFHVmxXSnJ0L2k3c2gyNVdzbkZnbU16XFxuK3Q4UWF4R2hMTlJZZWIyN1kzVFhVQXVuK25ZbUZ2STNoaUdROUYyeXhTU2thNXVLQlRwKzBhZ2hURVpZaHNzc1xcbkc5OXNaQTZ4L1c1WkszeHJOaDVESm9xZ2hkRGdBK0ZVdjZXSlZVaElKVm5QQkpNQ0ZVS2w0Tm9wQW9HQVY5b2xcXG5vNnVydi9BbE5xZlhRdTZIQjVEdDFrZThKRDlEdy9IYWUzT1YydkZYYXIrc2hBdXFuTUlQRVVSdWtUVVhYdmV1XFxuTGJYck9HbzF4TldGNXgxcHVoL3dpUGdVckhkc09JTTRQRjJYbDJNdGFST29ZdmNDZ25EQklYMlJqS1d2YjBneFxcbk1BMEIrRWhYd1ZnVTdkQXo1cWRBZGxWM0RKUFhIZXNWNUQ1bWdHRUNnWUI1eFIwZWFlRDVVakxzZGk5K3NRVlJcXG5Kdndyc1ZtUUpqZGJvYkQ2VWp1NzBNNWg2Z0F5WFpYYWpYOW5iOTdzVXRualdZRkxXY0NPWXVPVmFmNCs1dlpGXFxuVmIvaytrZm1aS1BzUUlkdDhjV3ZLK3RWVGlsanhHVWpmLytjZy82ZndjVjRqR2hQRlpEV0xCakM1ajVPWlpJWlxcbjVvdkYrck9YT043WFQ5OUZEYmVERlE9PVxcbi0tLS0tRU5EIFBSSVZBVEUgS0VZLS0tLS1cXG4nLFxyXG4gICAgICBwcm9qZWN0X2lkOiAnc2Fhcy1zdGFydHVwLWE1YTM0JyxcclxuICAgIH0pLFxyXG4gICAgZGF0YWJhc2VVUkw6ICdodHRwczovL3NhYXMtc3RhcnR1cC5maXJlYmFzZWlvLmNvbScsXHJcbiAgfSk7XHJcbn1cclxuXHJcbmNvbnN0IGF1dGggPSBhZG1pbi5hdXRoKCk7XHJcbmNvbnN0IGRiID0gYWRtaW4uZmlyZXN0b3JlKCk7XHJcblxyXG5leHBvcnQgeyBhdXRoLCBkYiB9O1xyXG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgZGIgfSBmcm9tICcuLi8uLi8uLi8uLi9saWIvZmlyZWJhc2UtYWRtaW4nO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XHJcblxyXG5jb25zdCBQcm9qZWN0UGFnZSA9ICh7IHByb2plY3RzIH0pID0+IHtcclxuICBjb25zdCBbc2VsZWN0ZWRQcm9qZWN0LCBzZXRTZWxlY3RlZFByb2plY3RdID0gdXNlU3RhdGUobnVsbCk7XHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIHByb2plY3RzICYmIHNldFNlbGVjdGVkUHJvamVjdChwcm9qZWN0c1swXSk7XHJcbiAgfSwgW3Byb2plY3RzXSk7XHJcbiAgY29uc29sZS5sb2cocHJvamVjdHMpO1xyXG4gIGlmIChyb3V0ZXIuaXNGYWxsYmFjaykge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdj5cclxuICAgICAgICA8cD5Mb2FkaW5nLi4uPC9wPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICk7XHJcbiAgfVxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2PlxyXG4gICAgICA8aDI+V2VsY29tZSB0byB0aGUgcHJvamVjdCBwYWdlISBQcm9qZWN0IG5hbWU6PC9oMj5cclxuICAgICAge3NlbGVjdGVkUHJvamVjdCAmJiA8cD57c2VsZWN0ZWRQcm9qZWN0LnByb2plY3ROYW1lfTwvcD59XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGdldFN0YXRpY1BhdGhzID0gYXN5bmMgKCkgPT4ge1xyXG4gIC8vIGNvbnN0IHsgcHJvamVjdHMgfSA9IGF3YWl0IGdldEFsbFByb2plY3RzKCk7XHJcbiAgY29uc3Qgc25hcHNob3QgPSBhd2FpdCBkYi5jb2xsZWN0aW9uKCdwcm9qZWN0cycpLmdldCgpO1xyXG5cclxuICBjb25zdCBwcm9qZWN0cyA9IFtdO1xyXG4gIHNuYXBzaG90LmZvckVhY2goKGRvYykgPT4ge1xyXG4gICAgcHJvamVjdHMucHVzaChkb2MuZGF0YSgpKTtcclxuICB9KTtcclxuXHJcbiAgY29uc3QgcGF0aHMgPSBwcm9qZWN0cy5tYXAoKHByb2plY3QpID0+ICh7XHJcbiAgICBwYXJhbXM6IHtcclxuICAgICAgcHJvamVjdDogcHJvamVjdC5wcm9qZWN0TmFtZS50b1N0cmluZygpLFxyXG4gICAgfSxcclxuICB9KSk7XHJcblxyXG4gIHJldHVybiB7XHJcbiAgICBwYXRoczogcGF0aHMsXHJcbiAgICBmYWxsYmFjazogdHJ1ZSxcclxuICB9O1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGdldFN0YXRpY1Byb3BzID0gYXN5bmMgKHsgcGFyYW1zIH0pID0+IHtcclxuICAvLyBjb25zdCB7IHByb2plY3RzIH0gPSBhd2FpdCBnZXRQYXJ0aWN1bGFyUHJvamVjdChwYXJhbXMud29yayk7XHJcbiAgbGV0IHJlZiA9IGRiLmNvbGxlY3Rpb24oJ3Byb2plY3RzJykud2hlcmUoJ3Byb2plY3ROYW1lJywgJz09JywgcGFyYW1zLnByb2plY3QpO1xyXG5cclxuICBjb25zdCBzbmFwc2hvdCA9IGF3YWl0IHJlZi5nZXQoKTtcclxuICBjb25zdCBwcm9qZWN0cyA9IFtdO1xyXG5cclxuICBzbmFwc2hvdC5mb3JFYWNoKChkb2MpID0+IHtcclxuICAgIHByb2plY3RzLnB1c2goeyBpZDogZG9jLmlkLCAuLi5kb2MuZGF0YSgpIH0pO1xyXG4gIH0pO1xyXG5cclxuICByZXR1cm4ge1xyXG4gICAgcHJvcHM6IHsgcHJvamVjdHMgfSxcclxuICAgIHJldmFsaWRhdGU6IDEsXHJcbiAgfTtcclxufTtcclxuXHJcbi8vIGV4cG9ydCBjb25zdCBnZXRTZXJ2ZXJTaWRlUHJvcHMgPSBhc3luYyAoeyBwYXJhbXMgfSkgPT4ge1xyXG4vLyAgIGxldCByZWYgPSBkYi5jb2xsZWN0aW9uKCdwcm9qZWN0cycpLndoZXJlKCdwcm9qZWN0TmFtZScsICc9PScsIHBhcmFtcy5wcm9qZWN0KTtcclxuXHJcbi8vICAgY29uc3Qgc25hcHNob3QgPSBhd2FpdCByZWYuZ2V0KCk7XHJcbi8vICAgY29uc3QgcHJvamVjdHMgPSBbXTtcclxuXHJcbi8vICAgc25hcHNob3QuZm9yRWFjaCgoZG9jKSA9PiB7XHJcbi8vICAgICBwcm9qZWN0cy5wdXNoKHsgaWQ6IGRvYy5pZCwgLi4uZG9jLmRhdGEoKSB9KTtcclxuLy8gICB9KTtcclxuXHJcbi8vICAgcmV0dXJuIHtcclxuLy8gICAgIHByb3BzOiB7IHByb2plY3RzIH0sXHJcbi8vICAgfTtcclxuLy8gfTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFByb2plY3RQYWdlO1xyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJmaXJlYmFzZS1hZG1pblwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L3JvdXRlclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==