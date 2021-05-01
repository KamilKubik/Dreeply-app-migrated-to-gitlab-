module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/name.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./lib/firebase.js":
/*!*************************!*\
  !*** ./lib/firebase.js ***!
  \*************************/
/*! exports provided: default, auth, db, storage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "auth", function() { return auth; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "db", function() { return db; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "storage", function() { return storage; });
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! firebase/app */ "firebase/app");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(firebase_app__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! firebase/auth */ "firebase/auth");
/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(firebase_auth__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase/firestore */ "firebase/firestore");
/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(firebase_firestore__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var firebase_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! firebase/storage */ "firebase/storage");
/* harmony import */ var firebase_storage__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(firebase_storage__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var firebase_functions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! firebase/functions */ "firebase/functions");
/* harmony import */ var firebase_functions__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(firebase_functions__WEBPACK_IMPORTED_MODULE_4__);






if (!firebase_app__WEBPACK_IMPORTED_MODULE_0___default.a.apps.length) {
  firebase_app__WEBPACK_IMPORTED_MODULE_0___default.a.initializeApp({
    // apiKey: 'AIzaSyCx_T0DqixL3AX_QLl-j8XDygGp91C-3-Q',
    // authDomain: 'startup-test-4d625.firebaseapp.com',
    // projectId: 'startup-test-4d625',
    // storageBucket: 'startup-test-4d625.appspot.com',
    // messagingSenderId: '472416150240',
    // appId: '1:472416150240:web:b2a128ad27afffddf3e685',
    apiKey: 'AIzaSyBOSfuAf7VAK9Yec20lGrD_6bq5MNRm9sE',
    authDomain: 'saas-startup-a5a34.firebaseapp.com',
    projectId: 'saas-startup-a5a34',
    storageBucket: 'saas-startup-a5a34.appspot.com',
    messagingSenderId: '864217574625',
    appId: '1:864217574625:web:19cf590109ef50dd935ba0',
    measurementId: 'G-QKZJPTKMS4'
  });
}

/* harmony default export */ __webpack_exports__["default"] = (firebase_app__WEBPACK_IMPORTED_MODULE_0___default.a);
const auth = firebase_app__WEBPACK_IMPORTED_MODULE_0___default.a.auth();
const db = firebase_app__WEBPACK_IMPORTED_MODULE_0___default.a.firestore();
const storage = firebase_app__WEBPACK_IMPORTED_MODULE_0___default.a.storage();

/***/ }),

/***/ "./lib/newAuth.js":
/*!************************!*\
  !*** ./lib/newAuth.js ***!
  \************************/
/*! exports provided: AuthContext, useAuth, AuthProvider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthContext", function() { return AuthContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useAuth", function() { return useAuth; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthProvider", function() { return AuthProvider; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _lib_firebase__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../lib/firebase */ "./lib/firebase.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! js-cookie */ "js-cookie");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);

var _jsxFileName = "C:\\off-saas\\lib\\newAuth.js";




const AuthContext = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_2__["createContext"])(); // Tutaj można umieścić default Value

const useAuth = () => {
  return Object(react__WEBPACK_IMPORTED_MODULE_2__["useContext"])(AuthContext);
};
const AuthProvider = ({
  children
}) => {
  const {
    0: currentUser,
    1: setCurrentUser
  } = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])();
  const {
    0: loading,
    1: setLoading
  } = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(true);

  const handleUser = async user => {
    if (user) {
      // console.log('user - ', user);
      // console.log('user name - ', name);
      const formatedUser = await formatUser(user); // const decodedToken = await firebase.auth().currentUser.getIdTokenResult();
      // console.log(decodedToken.claims.stripeRole);

      _lib_firebase__WEBPACK_IMPORTED_MODULE_1__["db"].collection('users').doc(user.uid).set({
        formatedUser
      }, {
        merge: true
      });
      setCurrentUser(formatedUser); // Cookies.set('token', user.za, true);

      js_cookie__WEBPACK_IMPORTED_MODULE_3___default.a.set('uid', user.uid);
      setLoading(false);
      return formatedUser;
    } else {
      setCurrentUser(false); // Cookies.remove('token', user.za);

      js_cookie__WEBPACK_IMPORTED_MODULE_3___default.a.remove('uid');
      setLoading(false);
      return false;
    }
  };

  const signUp = async (email, password) => {
    return await _lib_firebase__WEBPACK_IMPORTED_MODULE_1__["auth"].createUserWithEmailAndPassword(email, password).then(response => {
      return handleUser(response.user);
    });
  };

  const logIn = (email, password) => {
    return _lib_firebase__WEBPACK_IMPORTED_MODULE_1__["auth"].signInWithEmailAndPassword(email, password);
  };

  const logOut = () => {
    return _lib_firebase__WEBPACK_IMPORTED_MODULE_1__["auth"].signOut();
  };

  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(() => {
    const unsubscribe = _lib_firebase__WEBPACK_IMPORTED_MODULE_1__["auth"].onIdTokenChanged(handleUser);
    return () => unsubscribe();
  }, []);
  const value = {
    currentUser,
    signUp,
    logIn,
    logOut
  };

  const getStripeRole = async () => {
    await _lib_firebase__WEBPACK_IMPORTED_MODULE_1__["default"].auth().currentUser.getIdToken(true);
    const decodedToken = await _lib_firebase__WEBPACK_IMPORTED_MODULE_1__["default"].auth().currentUser.getIdTokenResult();
    return decodedToken.claims.stripeRole || 'free';
  };

  const formatUser = async user => {
    console.log('OFF - ', user);
    const token = await user.getIdToken();
    return {
      uid: user.uid,
      email: user.email,
      // name,
      // token: user.za, // token JWT, generowany automatycznie przez firebase przy zakładaniu konta
      provider: user.providerData[0].providerId,
      stripeRole: await getStripeRole(),
      token
    };
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(AuthContext.Provider, {
    value: value,
    children: !loading && children
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 90,
    columnNumber: 10
  }, undefined);
};

/***/ }),

/***/ "./pages/name.js":
/*!***********************!*\
  !*** ./pages/name.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_country_region_selector__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-country-region-selector */ "react-country-region-selector");
/* harmony import */ var react_country_region_selector__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_country_region_selector__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _lib_firebase__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../lib/firebase */ "./lib/firebase.js");
/* harmony import */ var _lib_newAuth__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../lib/newAuth */ "./lib/newAuth.js");


var _jsxFileName = "C:\\off-saas\\pages\\name.js";






const Name = () => {
  const {
    0: name,
    1: setName
  } = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])('');
  const {
    0: userCountry,
    1: setUserCountry
  } = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])('');
  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_1__["useRouter"])();
  const {
    currentUser
  } = Object(_lib_newAuth__WEBPACK_IMPORTED_MODULE_5__["useAuth"])();
  console.log(currentUser);

  const onSubmit = async e => {
    e.preventDefault();

    if (name, userCountry) {
      await _lib_firebase__WEBPACK_IMPORTED_MODULE_4__["db"].collection('users').doc(currentUser.uid).set({
        name
      }, {
        merge: true
      });
      router.push('/dashboard/welcome');
      return;
    } else {
      alert(':(((');
    }
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("ul", {
      className: "circles",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 32,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 33,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 34,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 35,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 36,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 37,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 38,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 39,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 40,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 41,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "h-screen w-full flex justify-center items-center bg-background flex-col",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "z-50 p-10 h-auto grid grid-cols-1 grid-rows-3 w-auto max-w-nameContainer w-full bg-white rounded-3xl",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "row-span-1 text-center",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "text-2xl font-medium",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
              src: "/gifs/sparkles.gif",
              height: 50,
              width: 50,
              className: "inline-block relative bottom-2"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 68,
              columnNumber: 15
            }, undefined), ' ', "What is your name?"]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 67,
            columnNumber: 13
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "text-base text-gray px-4",
            children: "Oops, one more tiny step and we will get down to business."
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 76,
            columnNumber: 13
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 66,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "row-span-2",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("form", {
            onSubmit: onSubmit,
            className: "z-50 px-4 pt-2 rounded-2xl mt-4",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "mb-8",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
                className: "block text-sm font-medium mb-2",
                htmlFor: "name",
                children: "Name"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 86,
                columnNumber: 17
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
                className: "text-primarydark w-full z-50 shadow appearance-none rounded-lg py-2 px-3 leading-tight focus:outline-none focus:shadow-outline",
                value: name,
                onChange: e => setName(e.target.value),
                type: "name",
                placeholder: "name"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 92,
                columnNumber: 17
              }, undefined)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 85,
              columnNumber: 15
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "mb-8",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
                className: "block text-sm font-medium mb-2",
                htmlFor: "userCountry",
                children: "Country"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 101,
                columnNumber: 17
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_country_region_selector__WEBPACK_IMPORTED_MODULE_3__["CountryDropdown"], {
                id: "country",
                defaultOptionLabel: "country",
                className: `${userCountry ? 'text-primarydark' : 'text-placeholder'} w-full z-50 shadow appearance-none rounded-lg py-2 px-3 leading-tight focus:outline-none focus:shadow-outline`,
                value: userCountry,
                onChange: country => setUserCountry(country)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 107,
                columnNumber: 17
              }, undefined)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 100,
              columnNumber: 15
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("hr", {
              style: {
                width: '100%',
                color: '#6C63FF'
              }
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 135,
              columnNumber: 15
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "flex items-center justify-between mt-8",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                className: "text-primarydark",
                children: "Back"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 137,
                columnNumber: 17
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
                type: "submit",
                className: "z-50 border-2 border-primary hover:bg-primary hover:text-white text-primary font-medium py-1.5 px-6 rounded-2xl focus:outline-none",
                children: "Let's start"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 138,
                columnNumber: 17
              }, undefined)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 136,
              columnNumber: 15
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 81,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 80,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 65,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "text-center mt-4 text-sm text-gray-400 text-primarydark max-w-nameContainer px-4",
        children: "\u201CAlways think outside the box and embrace opportunities that appear, wherever they might be.\u201D"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 148,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 7
    }, undefined)]
  }, void 0, true);
};

/* harmony default export */ __webpack_exports__["default"] = (Name);

/***/ }),

/***/ "firebase/app":
/*!*******************************!*\
  !*** external "firebase/app" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("firebase/app");

/***/ }),

/***/ "firebase/auth":
/*!********************************!*\
  !*** external "firebase/auth" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("firebase/auth");

/***/ }),

/***/ "firebase/firestore":
/*!*************************************!*\
  !*** external "firebase/firestore" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("firebase/firestore");

/***/ }),

/***/ "firebase/functions":
/*!*************************************!*\
  !*** external "firebase/functions" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("firebase/functions");

/***/ }),

/***/ "firebase/storage":
/*!***********************************!*\
  !*** external "firebase/storage" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("firebase/storage");

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

/***/ "react-country-region-selector":
/*!************************************************!*\
  !*** external "react-country-region-selector" ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-country-region-selector");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbGliL2ZpcmViYXNlLmpzIiwid2VicGFjazovLy8uL2xpYi9uZXdBdXRoLmpzIiwid2VicGFjazovLy8uL3BhZ2VzL25hbWUuanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiZmlyZWJhc2UvYXBwXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiZmlyZWJhc2UvYXV0aFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImZpcmViYXNlL2ZpcmVzdG9yZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImZpcmViYXNlL2Z1bmN0aW9uc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcImZpcmViYXNlL3N0b3JhZ2VcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJqcy1jb29raWVcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L3JvdXRlclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtY291bnRyeS1yZWdpb24tc2VsZWN0b3JcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIiJdLCJuYW1lcyI6WyJmaXJlYmFzZSIsImFwcHMiLCJsZW5ndGgiLCJpbml0aWFsaXplQXBwIiwiYXBpS2V5IiwiYXV0aERvbWFpbiIsInByb2plY3RJZCIsInN0b3JhZ2VCdWNrZXQiLCJtZXNzYWdpbmdTZW5kZXJJZCIsImFwcElkIiwibWVhc3VyZW1lbnRJZCIsImF1dGgiLCJkYiIsImZpcmVzdG9yZSIsInN0b3JhZ2UiLCJBdXRoQ29udGV4dCIsImNyZWF0ZUNvbnRleHQiLCJ1c2VBdXRoIiwidXNlQ29udGV4dCIsIkF1dGhQcm92aWRlciIsImNoaWxkcmVuIiwiY3VycmVudFVzZXIiLCJzZXRDdXJyZW50VXNlciIsInVzZVN0YXRlIiwibG9hZGluZyIsInNldExvYWRpbmciLCJoYW5kbGVVc2VyIiwidXNlciIsImZvcm1hdGVkVXNlciIsImZvcm1hdFVzZXIiLCJjb2xsZWN0aW9uIiwiZG9jIiwidWlkIiwic2V0IiwibWVyZ2UiLCJDb29raWVzIiwicmVtb3ZlIiwic2lnblVwIiwiZW1haWwiLCJwYXNzd29yZCIsImNyZWF0ZVVzZXJXaXRoRW1haWxBbmRQYXNzd29yZCIsInRoZW4iLCJyZXNwb25zZSIsImxvZ0luIiwic2lnbkluV2l0aEVtYWlsQW5kUGFzc3dvcmQiLCJsb2dPdXQiLCJzaWduT3V0IiwidXNlRWZmZWN0IiwidW5zdWJzY3JpYmUiLCJvbklkVG9rZW5DaGFuZ2VkIiwidmFsdWUiLCJnZXRTdHJpcGVSb2xlIiwiZ2V0SWRUb2tlbiIsImRlY29kZWRUb2tlbiIsImdldElkVG9rZW5SZXN1bHQiLCJjbGFpbXMiLCJzdHJpcGVSb2xlIiwiY29uc29sZSIsImxvZyIsInRva2VuIiwicHJvdmlkZXIiLCJwcm92aWRlckRhdGEiLCJwcm92aWRlcklkIiwiTmFtZSIsIm5hbWUiLCJzZXROYW1lIiwidXNlckNvdW50cnkiLCJzZXRVc2VyQ291bnRyeSIsInJvdXRlciIsInVzZVJvdXRlciIsIm9uU3VibWl0IiwiZSIsInByZXZlbnREZWZhdWx0IiwicHVzaCIsImFsZXJ0IiwidGFyZ2V0IiwiY291bnRyeSIsIndpZHRoIiwiY29sb3IiXSwibWFwcGluZ3MiOiI7O1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxJQUFJO1FBQ0o7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNB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YjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSwyQkFERixlQUVFO0FBQ0Usb0JBQUksRUFBQyxRQURQO0FBRUUseUJBQVMsRUFBQyxvSUFGWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSwyQkFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEseUJBdkRGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBZkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURGLGVBb0ZFO0FBQUssaUJBQVMsRUFBQyxrRkFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFwRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQWxDRjtBQUFBLGtCQURGO0FBOEhELENBcEpEOztBQXNKZWYsbUVBQWYsRTs7Ozs7Ozs7Ozs7QUM1SkEseUM7Ozs7Ozs7Ozs7O0FDQUEsMEM7Ozs7Ozs7Ozs7O0FDQUEsK0M7Ozs7Ozs7Ozs7O0FDQUEsK0M7Ozs7Ozs7Ozs7O0FDQUEsNkM7Ozs7Ozs7Ozs7O0FDQUEsc0M7Ozs7Ozs7Ozs7O0FDQUEsd0M7Ozs7Ozs7Ozs7O0FDQUEsa0M7Ozs7Ozs7Ozs7O0FDQUEsMEQ7Ozs7Ozs7Ozs7O0FDQUEsa0QiLCJmaWxlIjoicGFnZXMvbmFtZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0gcmVxdWlyZSgnLi4vc3NyLW1vZHVsZS1jYWNoZS5qcycpO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHR2YXIgdGhyZXcgPSB0cnVlO1xuIFx0XHR0cnkge1xuIFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuIFx0XHRcdHRocmV3ID0gZmFsc2U7XG4gXHRcdH0gZmluYWxseSB7XG4gXHRcdFx0aWYodGhyZXcpIGRlbGV0ZSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0fVxuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vcGFnZXMvbmFtZS5qc1wiKTtcbiIsImltcG9ydCBmaXJlYmFzZSBmcm9tICdmaXJlYmFzZS9hcHAnO1xyXG5pbXBvcnQgJ2ZpcmViYXNlL2F1dGgnO1xyXG5pbXBvcnQgJ2ZpcmViYXNlL2ZpcmVzdG9yZSc7XHJcbmltcG9ydCAnZmlyZWJhc2Uvc3RvcmFnZSc7XHJcbmltcG9ydCAnZmlyZWJhc2UvZnVuY3Rpb25zJztcclxuXHJcbmlmICghZmlyZWJhc2UuYXBwcy5sZW5ndGgpIHtcclxuICBmaXJlYmFzZS5pbml0aWFsaXplQXBwKHtcclxuICAgIC8vIGFwaUtleTogJ0FJemFTeUN4X1QwRHFpeEwzQVhfUUxsLWo4WER5Z0dwOTFDLTMtUScsXHJcbiAgICAvLyBhdXRoRG9tYWluOiAnc3RhcnR1cC10ZXN0LTRkNjI1LmZpcmViYXNlYXBwLmNvbScsXHJcbiAgICAvLyBwcm9qZWN0SWQ6ICdzdGFydHVwLXRlc3QtNGQ2MjUnLFxyXG4gICAgLy8gc3RvcmFnZUJ1Y2tldDogJ3N0YXJ0dXAtdGVzdC00ZDYyNS5hcHBzcG90LmNvbScsXHJcbiAgICAvLyBtZXNzYWdpbmdTZW5kZXJJZDogJzQ3MjQxNjE1MDI0MCcsXHJcbiAgICAvLyBhcHBJZDogJzE6NDcyNDE2MTUwMjQwOndlYjpiMmExMjhhZDI3YWZmZmRkZjNlNjg1JyxcclxuICAgIGFwaUtleTogJ0FJemFTeUJPU2Z1QWY3VkFLOVllYzIwbEdyRF82YnE1TU5SbTlzRScsXHJcbiAgICBhdXRoRG9tYWluOiAnc2Fhcy1zdGFydHVwLWE1YTM0LmZpcmViYXNlYXBwLmNvbScsXHJcbiAgICBwcm9qZWN0SWQ6ICdzYWFzLXN0YXJ0dXAtYTVhMzQnLFxyXG4gICAgc3RvcmFnZUJ1Y2tldDogJ3NhYXMtc3RhcnR1cC1hNWEzNC5hcHBzcG90LmNvbScsXHJcbiAgICBtZXNzYWdpbmdTZW5kZXJJZDogJzg2NDIxNzU3NDYyNScsXHJcbiAgICBhcHBJZDogJzE6ODY0MjE3NTc0NjI1OndlYjoxOWNmNTkwMTA5ZWY1MGRkOTM1YmEwJyxcclxuICAgIG1lYXN1cmVtZW50SWQ6ICdHLVFLWkpQVEtNUzQnLFxyXG4gIH0pO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmaXJlYmFzZTtcclxuZXhwb3J0IGNvbnN0IGF1dGggPSBmaXJlYmFzZS5hdXRoKCk7XHJcbmV4cG9ydCBjb25zdCBkYiA9IGZpcmViYXNlLmZpcmVzdG9yZSgpO1xyXG5leHBvcnQgY29uc3Qgc3RvcmFnZSA9IGZpcmViYXNlLnN0b3JhZ2UoKTtcclxuIiwiaW1wb3J0IGZpcmViYXNlLCB7IGF1dGgsIGRiIH0gZnJvbSAnLi4vbGliL2ZpcmViYXNlJztcclxuaW1wb3J0IFJlYWN0LCB7IHVzZUNvbnRleHQsIGNyZWF0ZUNvbnRleHQsIHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBDb29raWVzIGZyb20gJ2pzLWNvb2tpZSc7XHJcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcclxuXHJcbmV4cG9ydCBjb25zdCBBdXRoQ29udGV4dCA9IGNyZWF0ZUNvbnRleHQoKTsgLy8gVHV0YWogbW/FvG5hIHVtaWXFm2NpxIcgZGVmYXVsdCBWYWx1ZVxyXG5cclxuZXhwb3J0IGNvbnN0IHVzZUF1dGggPSAoKSA9PiB7XHJcbiAgcmV0dXJuIHVzZUNvbnRleHQoQXV0aENvbnRleHQpO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IEF1dGhQcm92aWRlciA9ICh7IGNoaWxkcmVuIH0pID0+IHtcclxuICBjb25zdCBbY3VycmVudFVzZXIsIHNldEN1cnJlbnRVc2VyXSA9IHVzZVN0YXRlKCk7XHJcbiAgY29uc3QgW2xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGUodHJ1ZSk7XHJcblxyXG4gIGNvbnN0IGhhbmRsZVVzZXIgPSBhc3luYyAodXNlcikgPT4ge1xyXG4gICAgaWYgKHVzZXIpIHtcclxuICAgICAgLy8gY29uc29sZS5sb2coJ3VzZXIgLSAnLCB1c2VyKTtcclxuICAgICAgLy8gY29uc29sZS5sb2coJ3VzZXIgbmFtZSAtICcsIG5hbWUpO1xyXG4gICAgICBjb25zdCBmb3JtYXRlZFVzZXIgPSBhd2FpdCBmb3JtYXRVc2VyKHVzZXIpO1xyXG5cclxuICAgICAgLy8gY29uc3QgZGVjb2RlZFRva2VuID0gYXdhaXQgZmlyZWJhc2UuYXV0aCgpLmN1cnJlbnRVc2VyLmdldElkVG9rZW5SZXN1bHQoKTtcclxuICAgICAgLy8gY29uc29sZS5sb2coZGVjb2RlZFRva2VuLmNsYWltcy5zdHJpcGVSb2xlKTtcclxuXHJcbiAgICAgIGRiLmNvbGxlY3Rpb24oJ3VzZXJzJykuZG9jKHVzZXIudWlkKS5zZXQoeyBmb3JtYXRlZFVzZXIgfSwgeyBtZXJnZTogdHJ1ZSB9KTtcclxuXHJcbiAgICAgIHNldEN1cnJlbnRVc2VyKGZvcm1hdGVkVXNlcik7XHJcbiAgICAgIC8vIENvb2tpZXMuc2V0KCd0b2tlbicsIHVzZXIuemEsIHRydWUpO1xyXG4gICAgICBDb29raWVzLnNldCgndWlkJywgdXNlci51aWQpO1xyXG5cclxuICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XHJcbiAgICAgIHJldHVybiBmb3JtYXRlZFVzZXI7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBzZXRDdXJyZW50VXNlcihmYWxzZSk7XHJcbiAgICAgIC8vIENvb2tpZXMucmVtb3ZlKCd0b2tlbicsIHVzZXIuemEpO1xyXG4gICAgICBDb29raWVzLnJlbW92ZSgndWlkJyk7XHJcblxyXG4gICAgICBzZXRMb2FkaW5nKGZhbHNlKTtcclxuICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIGNvbnN0IHNpZ25VcCA9IGFzeW5jIChlbWFpbCwgcGFzc3dvcmQpID0+IHtcclxuICAgIHJldHVybiBhd2FpdCBhdXRoLmNyZWF0ZVVzZXJXaXRoRW1haWxBbmRQYXNzd29yZChlbWFpbCwgcGFzc3dvcmQpLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgIHJldHVybiBoYW5kbGVVc2VyKHJlc3BvbnNlLnVzZXIpO1xyXG4gICAgfSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgbG9nSW4gPSAoZW1haWwsIHBhc3N3b3JkKSA9PiB7XHJcbiAgICByZXR1cm4gYXV0aC5zaWduSW5XaXRoRW1haWxBbmRQYXNzd29yZChlbWFpbCwgcGFzc3dvcmQpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGxvZ091dCA9ICgpID0+IHtcclxuICAgIHJldHVybiBhdXRoLnNpZ25PdXQoKTtcclxuICB9O1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc3QgdW5zdWJzY3JpYmUgPSBhdXRoLm9uSWRUb2tlbkNoYW5nZWQoaGFuZGxlVXNlcik7XHJcblxyXG4gICAgcmV0dXJuICgpID0+IHVuc3Vic2NyaWJlKCk7XHJcbiAgfSwgW10pO1xyXG5cclxuICBjb25zdCB2YWx1ZSA9IHtcclxuICAgIGN1cnJlbnRVc2VyLFxyXG4gICAgc2lnblVwLFxyXG4gICAgbG9nSW4sXHJcbiAgICBsb2dPdXQsXHJcbiAgfTtcclxuXHJcbiAgY29uc3QgZ2V0U3RyaXBlUm9sZSA9IGFzeW5jICgpID0+IHtcclxuICAgIGF3YWl0IGZpcmViYXNlLmF1dGgoKS5jdXJyZW50VXNlci5nZXRJZFRva2VuKHRydWUpO1xyXG4gICAgY29uc3QgZGVjb2RlZFRva2VuID0gYXdhaXQgZmlyZWJhc2UuYXV0aCgpLmN1cnJlbnRVc2VyLmdldElkVG9rZW5SZXN1bHQoKTtcclxuICAgIHJldHVybiBkZWNvZGVkVG9rZW4uY2xhaW1zLnN0cmlwZVJvbGUgfHwgJ2ZyZWUnO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGZvcm1hdFVzZXIgPSBhc3luYyAodXNlcikgPT4ge1xyXG4gICAgY29uc29sZS5sb2coJ09GRiAtICcsIHVzZXIpO1xyXG4gICAgY29uc3QgdG9rZW4gPSBhd2FpdCB1c2VyLmdldElkVG9rZW4oKTtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIHVpZDogdXNlci51aWQsXHJcbiAgICAgIGVtYWlsOiB1c2VyLmVtYWlsLFxyXG4gICAgICAvLyBuYW1lLFxyXG4gICAgICAvLyB0b2tlbjogdXNlci56YSwgLy8gdG9rZW4gSldULCBnZW5lcm93YW55IGF1dG9tYXR5Y3puaWUgcHJ6ZXogZmlyZWJhc2UgcHJ6eSB6YWvFgmFkYW5pdSBrb250YVxyXG4gICAgICBwcm92aWRlcjogdXNlci5wcm92aWRlckRhdGFbMF0ucHJvdmlkZXJJZCxcclxuICAgICAgc3RyaXBlUm9sZTogYXdhaXQgZ2V0U3RyaXBlUm9sZSgpLFxyXG4gICAgICB0b2tlbixcclxuICAgIH07XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIDxBdXRoQ29udGV4dC5Qcm92aWRlciB2YWx1ZT17dmFsdWV9PnshbG9hZGluZyAmJiBjaGlsZHJlbn08L0F1dGhDb250ZXh0LlByb3ZpZGVyPjtcclxufTtcclxuIiwiaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xyXG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IENvdW50cnlEcm9wZG93biB9IGZyb20gJ3JlYWN0LWNvdW50cnktcmVnaW9uLXNlbGVjdG9yJztcclxuaW1wb3J0IHsgZGIgfSBmcm9tICcuLi9saWIvZmlyZWJhc2UnO1xyXG5pbXBvcnQgeyB1c2VBdXRoIH0gZnJvbSAnLi4vbGliL25ld0F1dGgnO1xyXG5cclxuY29uc3QgTmFtZSA9ICgpID0+IHtcclxuICBjb25zdCBbbmFtZSwgc2V0TmFtZV0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgY29uc3QgW3VzZXJDb3VudHJ5LCBzZXRVc2VyQ291bnRyeV0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcblxyXG4gIGNvbnN0IHsgY3VycmVudFVzZXIgfSA9IHVzZUF1dGgoKTtcclxuICBjb25zb2xlLmxvZyhjdXJyZW50VXNlcik7XHJcblxyXG4gIGNvbnN0IG9uU3VibWl0ID0gYXN5bmMgKGUpID0+IHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIGlmICgobmFtZSwgdXNlckNvdW50cnkpKSB7XHJcbiAgICAgIGF3YWl0IGRiXHJcbiAgICAgICAgLmNvbGxlY3Rpb24oJ3VzZXJzJylcclxuICAgICAgICAuZG9jKGN1cnJlbnRVc2VyLnVpZClcclxuICAgICAgICAuc2V0KHsgbmFtZSB9LCB7IG1lcmdlOiB0cnVlIH0pO1xyXG4gICAgICByb3V0ZXIucHVzaCgnL2Rhc2hib2FyZC93ZWxjb21lJyk7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGFsZXJ0KCc6KCgoJyk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDx1bCBjbGFzc05hbWU9J2NpcmNsZXMnPlxyXG4gICAgICAgIDxsaT48L2xpPlxyXG4gICAgICAgIDxsaT48L2xpPlxyXG4gICAgICAgIDxsaT48L2xpPlxyXG4gICAgICAgIDxsaT48L2xpPlxyXG4gICAgICAgIDxsaT48L2xpPlxyXG4gICAgICAgIDxsaT48L2xpPlxyXG4gICAgICAgIDxsaT48L2xpPlxyXG4gICAgICAgIDxsaT48L2xpPlxyXG4gICAgICAgIDxsaT48L2xpPlxyXG4gICAgICAgIDxsaT48L2xpPlxyXG4gICAgICAgIHsvKiAxMCAqL31cclxuICAgICAgICB7LyogPGxpPjwvbGk+XHJcbiAgICAgICAgPGxpPjwvbGk+XHJcbiAgICAgICAgPGxpPjwvbGk+XHJcbiAgICAgICAgPGxpPjwvbGk+XHJcbiAgICAgICAgPGxpPjwvbGk+XHJcbiAgICAgICAgPGxpPjwvbGk+XHJcbiAgICAgICAgPGxpPjwvbGk+XHJcbiAgICAgICAgPGxpPjwvbGk+XHJcbiAgICAgICAgPGxpPjwvbGk+XHJcbiAgICAgICAgPGxpPjwvbGk+XHJcbiAgICAgICAgPGxpPjwvbGk+XHJcbiAgICAgICAgPGxpPjwvbGk+XHJcbiAgICAgICAgPGxpPjwvbGk+XHJcbiAgICAgICAgPGxpPjwvbGk+XHJcbiAgICAgICAgPGxpPjwvbGk+XHJcbiAgICAgICAgPGxpPjwvbGk+XHJcbiAgICAgICAgPGxpPjwvbGk+XHJcbiAgICAgICAgPGxpPjwvbGk+XHJcbiAgICAgICAgPGxpPjwvbGk+XHJcbiAgICAgICAgPGxpPjwvbGk+ICovfVxyXG4gICAgICA8L3VsPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT0naC1zY3JlZW4gdy1mdWxsIGZsZXgganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyIGJnLWJhY2tncm91bmQgZmxleC1jb2wnPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSd6LTUwIHAtMTAgaC1hdXRvIGdyaWQgZ3JpZC1jb2xzLTEgZ3JpZC1yb3dzLTMgdy1hdXRvIG1heC13LW5hbWVDb250YWluZXIgdy1mdWxsIGJnLXdoaXRlIHJvdW5kZWQtM3hsJz5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdyb3ctc3Bhbi0xIHRleHQtY2VudGVyJz5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3RleHQtMnhsIGZvbnQtbWVkaXVtJz5cclxuICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICBzcmM9Jy9naWZzL3NwYXJrbGVzLmdpZidcclxuICAgICAgICAgICAgICAgIGhlaWdodD17NTB9XHJcbiAgICAgICAgICAgICAgICB3aWR0aD17NTB9XHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9J2lubGluZS1ibG9jayByZWxhdGl2ZSBib3R0b20tMidcclxuICAgICAgICAgICAgICAvPnsnICd9XHJcbiAgICAgICAgICAgICAgV2hhdCBpcyB5b3VyIG5hbWU/XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ndGV4dC1iYXNlIHRleHQtZ3JheSBweC00Jz5cclxuICAgICAgICAgICAgICBPb3BzLCBvbmUgbW9yZSB0aW55IHN0ZXAgYW5kIHdlIHdpbGwgZ2V0IGRvd24gdG8gYnVzaW5lc3MuXHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ncm93LXNwYW4tMic+XHJcbiAgICAgICAgICAgIDxmb3JtXHJcbiAgICAgICAgICAgICAgb25TdWJtaXQ9e29uU3VibWl0fVxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT0nei01MCBweC00IHB0LTIgcm91bmRlZC0yeGwgbXQtNCdcclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdtYi04Jz5cclxuICAgICAgICAgICAgICAgIDxsYWJlbFxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9J2Jsb2NrIHRleHQtc20gZm9udC1tZWRpdW0gbWItMidcclxuICAgICAgICAgICAgICAgICAgaHRtbEZvcj0nbmFtZSdcclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgTmFtZVxyXG4gICAgICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9J3RleHQtcHJpbWFyeWRhcmsgdy1mdWxsIHotNTAgc2hhZG93IGFwcGVhcmFuY2Utbm9uZSByb3VuZGVkLWxnIHB5LTIgcHgtMyBsZWFkaW5nLXRpZ2h0IGZvY3VzOm91dGxpbmUtbm9uZSBmb2N1czpzaGFkb3ctb3V0bGluZSdcclxuICAgICAgICAgICAgICAgICAgdmFsdWU9e25hbWV9XHJcbiAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0TmFtZShlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICAgICAgICAgIHR5cGU9J25hbWUnXHJcbiAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPSduYW1lJ1xyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nbWItOCc+XHJcbiAgICAgICAgICAgICAgICA8bGFiZWxcclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPSdibG9jayB0ZXh0LXNtIGZvbnQtbWVkaXVtIG1iLTInXHJcbiAgICAgICAgICAgICAgICAgIGh0bWxGb3I9J3VzZXJDb3VudHJ5J1xyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICBDb3VudHJ5XHJcbiAgICAgICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgPENvdW50cnlEcm9wZG93blxyXG4gICAgICAgICAgICAgICAgICBpZD0nY291bnRyeSdcclxuICAgICAgICAgICAgICAgICAgZGVmYXVsdE9wdGlvbkxhYmVsPSdjb3VudHJ5J1xyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2Ake1xyXG4gICAgICAgICAgICAgICAgICAgIHVzZXJDb3VudHJ5ID8gJ3RleHQtcHJpbWFyeWRhcmsnIDogJ3RleHQtcGxhY2Vob2xkZXInXHJcbiAgICAgICAgICAgICAgICAgIH0gdy1mdWxsIHotNTAgc2hhZG93IGFwcGVhcmFuY2Utbm9uZSByb3VuZGVkLWxnIHB5LTIgcHgtMyBsZWFkaW5nLXRpZ2h0IGZvY3VzOm91dGxpbmUtbm9uZSBmb2N1czpzaGFkb3ctb3V0bGluZWB9XHJcbiAgICAgICAgICAgICAgICAgIHZhbHVlPXt1c2VyQ291bnRyeX1cclxuICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhjb3VudHJ5KSA9PiBzZXRVc2VyQ291bnRyeShjb3VudHJ5KX1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgey8qIDxkaXYgY2xhc3NOYW1lPSdmbGV4IGp1c3RpZnktYmV0d2VlbiBpdGVtcy1jZW50ZXIgcGItOCBwdC00Jz5cclxuICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9J3RleHQtcHJpbWFyeWRhcmsgbXItNCB3LTQwIHotNTAgc2hhZG93IGFwcGVhcmFuY2Utbm9uZSByb3VuZGVkLTJ4bCBweS0yIHB4LTMgbGVhZGluZy10aWdodCBmb2N1czpvdXRsaW5lLW5vbmUgZm9jdXM6c2hhZG93LW91dGxpbmUnXHJcbiAgICAgICAgICAgICAgICAgIHZhbHVlPXtuYW1lfVxyXG4gICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldE5hbWUoZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgICAgICAgICB0eXBlPSduYW1lJ1xyXG4gICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj0nbmFtZSdcclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8Q291bnRyeURyb3Bkb3duXHJcbiAgICAgICAgICAgICAgICAgIGlkPSdjb3VudHJ5J1xyXG4gICAgICAgICAgICAgICAgICBkZWZhdWx0T3B0aW9uTGFiZWw9J0NvdW50cnknXHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YCR7XHJcbiAgICAgICAgICAgICAgICAgICAgdXNlckNvdW50cnkgPyAndGV4dC1wcmltYXJ5ZGFyaycgOiAndGV4dC1wbGFjZWhvbGRlcidcclxuICAgICAgICAgICAgICAgICAgfSBtbC00IHctNDAgei01MCBzaGFkb3cgYXBwZWFyYW5jZS1ub25lIHJvdW5kZWQtMnhsIHB5LTIgcHgtMyBsZWFkaW5nLXRpZ2h0IGZvY3VzOm91dGxpbmUtbm9uZSBmb2N1czpzaGFkb3ctb3V0bGluZWB9XHJcbiAgICAgICAgICAgICAgICAgIHZhbHVlPXt1c2VyQ291bnRyeX1cclxuICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhjb3VudHJ5KSA9PiBzZXRVc2VyQ291bnRyeShjb3VudHJ5KX1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPC9kaXY+ICovfVxyXG4gICAgICAgICAgICAgIDxociBzdHlsZT17eyB3aWR0aDogJzEwMCUnLCBjb2xvcjogJyM2QzYzRkYnIH19IC8+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2ZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktYmV0d2VlbiBtdC04Jz5cclxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT0ndGV4dC1wcmltYXJ5ZGFyayc+QmFjazwvcD5cclxuICAgICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgICAgdHlwZT0nc3VibWl0J1xyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9J3otNTAgYm9yZGVyLTIgYm9yZGVyLXByaW1hcnkgaG92ZXI6YmctcHJpbWFyeSBob3Zlcjp0ZXh0LXdoaXRlIHRleHQtcHJpbWFyeSBmb250LW1lZGl1bSBweS0xLjUgcHgtNiByb3VuZGVkLTJ4bCBmb2N1czpvdXRsaW5lLW5vbmUnXHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgIExldCdzIHN0YXJ0XHJcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J3RleHQtY2VudGVyIG10LTQgdGV4dC1zbSB0ZXh0LWdyYXktNDAwIHRleHQtcHJpbWFyeWRhcmsgbWF4LXctbmFtZUNvbnRhaW5lciBweC00Jz5cclxuICAgICAgICAgIOKAnEFsd2F5cyB0aGluayBvdXRzaWRlIHRoZSBib3ggYW5kIGVtYnJhY2Ugb3Bwb3J0dW5pdGllcyB0aGF0IGFwcGVhcixcclxuICAgICAgICAgIHdoZXJldmVyIHRoZXkgbWlnaHQgYmUu4oCdXHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC8+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IE5hbWU7XHJcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImZpcmViYXNlL2FwcFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJmaXJlYmFzZS9hdXRoXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImZpcmViYXNlL2ZpcmVzdG9yZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJmaXJlYmFzZS9mdW5jdGlvbnNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZmlyZWJhc2Uvc3RvcmFnZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJqcy1jb29raWVcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9yb3V0ZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtY291bnRyeS1yZWdpb24tc2VsZWN0b3JcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIpOyJdLCJzb3VyY2VSb290IjoiIn0=