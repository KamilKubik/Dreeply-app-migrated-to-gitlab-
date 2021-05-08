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
      js_cookie__WEBPACK_IMPORTED_MODULE_3___default.a.set('uid', user.uid, true); // console.log('user - ', user);
      // console.log('user name - ', name);

      const formatedUser = await formatUser(user); // const decodedToken = await firebase.auth().currentUser.getIdTokenResult();
      // console.log(decodedToken.claims.stripeRole);

      _lib_firebase__WEBPACK_IMPORTED_MODULE_1__["db"].collection('users').doc(user.uid).set({
        formatedUser
      }, {
        merge: true
      });
      setCurrentUser(formatedUser); // Cookies.set('token', user.za, true);

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
/* harmony import */ var babel_plugin_superjson_next_tools__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! babel-plugin-superjson-next/tools */ "babel-plugin-superjson-next/tools");
/* harmony import */ var babel_plugin_superjson_next_tools__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(babel_plugin_superjson_next_tools__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_country_region_selector__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-country-region-selector */ "react-country-region-selector");
/* harmony import */ var react_country_region_selector__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_country_region_selector__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _lib_firebase__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../lib/firebase */ "./lib/firebase.js");
/* harmony import */ var _lib_newAuth__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../lib/newAuth */ "./lib/newAuth.js");



var _jsxFileName = "C:\\off-saas\\pages\\name.js";






const Name = () => {
  const {
    0: name,
    1: setName
  } = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])('');
  const {
    0: userCountry,
    1: setUserCountry
  } = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])('');
  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_2__["useRouter"])();
  const {
    currentUser
  } = Object(_lib_newAuth__WEBPACK_IMPORTED_MODULE_6__["useAuth"])();
  console.log(currentUser);

  const onSubmit = async e => {
    e.preventDefault();

    if (name, userCountry) {
      await _lib_firebase__WEBPACK_IMPORTED_MODULE_5__["db"].collection('users').doc(currentUser.uid).set({
        name,
        userCountry
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
        lineNumber: 29,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 30,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 31,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {}, void 0, false, {
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
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 28,
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
              lineNumber: 65,
              columnNumber: 15
            }, undefined), " What is your name?"]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 64,
            columnNumber: 13
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "text-base text-gray px-4",
            children: "Oops, one more tiny step and we will get down to business."
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 67,
            columnNumber: 13
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 63,
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
                lineNumber: 72,
                columnNumber: 17
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
                className: "text-primarydark w-full z-50 shadow appearance-none rounded-lg py-2 px-3 leading-tight focus:outline-none focus:shadow-outline",
                value: name,
                onChange: e => setName(e.target.value),
                type: "name",
                placeholder: "name"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 75,
                columnNumber: 17
              }, undefined)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 71,
              columnNumber: 15
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "mb-8",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
                className: "block text-sm font-medium mb-2",
                htmlFor: "userCountry",
                children: "Country"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 84,
                columnNumber: 17
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_country_region_selector__WEBPACK_IMPORTED_MODULE_4__["CountryDropdown"], {
                id: "country",
                defaultOptionLabel: "country",
                className: `${userCountry ? 'text-primarydark' : 'text-placeholder'} w-full z-50 shadow appearance-none rounded-lg py-2 px-3 leading-tight focus:outline-none focus:shadow-outline`,
                value: userCountry,
                onChange: country => setUserCountry(country)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 87,
                columnNumber: 17
              }, undefined)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 83,
              columnNumber: 15
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("hr", {
              style: {
                width: '100%',
                color: '#6C63FF'
              }
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 115,
              columnNumber: 15
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "flex items-center justify-between mt-8",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                className: "text-primarydark",
                children: "Back"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 117,
                columnNumber: 17
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
                type: "submit",
                className: "z-50 border-2 border-primary hover:bg-primary hover:text-white text-primary font-medium py-1.5 px-6 rounded-2xl focus:outline-none",
                children: "Let's start"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 118,
                columnNumber: 17
              }, undefined)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 116,
              columnNumber: 15
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 70,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 69,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 62,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "text-center mt-4 text-sm text-gray-400 text-primarydark max-w-nameContainer px-4",
        children: "\u201CAlways think outside the box and embrace opportunities that appear, wherever they might be.\u201D"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 128,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 7
    }, undefined)]
  }, void 0, true);
};

/* harmony default export */ __webpack_exports__["default"] = (Object(babel_plugin_superjson_next_tools__WEBPACK_IMPORTED_MODULE_1__["withSuperJSONPage"])(Name));

/***/ }),

/***/ "babel-plugin-superjson-next/tools":
/*!****************************************************!*\
  !*** external "babel-plugin-superjson-next/tools" ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("babel-plugin-superjson-next/tools");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbGliL2ZpcmViYXNlLmpzIiwid2VicGFjazovLy8uL2xpYi9uZXdBdXRoLmpzIiwid2VicGFjazovLy8uL3BhZ2VzL25hbWUuanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiYmFiZWwtcGx1Z2luLXN1cGVyanNvbi1uZXh0L3Rvb2xzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiZmlyZWJhc2UvYXBwXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiZmlyZWJhc2UvYXV0aFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImZpcmViYXNlL2ZpcmVzdG9yZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImZpcmViYXNlL2Z1bmN0aW9uc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcImZpcmViYXNlL3N0b3JhZ2VcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJqcy1jb29raWVcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L3JvdXRlclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtY291bnRyeS1yZWdpb24tc2VsZWN0b3JcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIiJdLCJuYW1lcyI6WyJmaXJlYmFzZSIsImFwcHMiLCJsZW5ndGgiLCJpbml0aWFsaXplQXBwIiwiYXBpS2V5IiwiYXV0aERvbWFpbiIsInByb2plY3RJZCIsInN0b3JhZ2VCdWNrZXQiLCJtZXNzYWdpbmdTZW5kZXJJZCIsImFwcElkIiwibWVhc3VyZW1lbnRJZCIsImF1dGgiLCJkYiIsImZpcmVzdG9yZSIsInN0b3JhZ2UiLCJBdXRoQ29udGV4dCIsImNyZWF0ZUNvbnRleHQiLCJ1c2VBdXRoIiwidXNlQ29udGV4dCIsIkF1dGhQcm92aWRlciIsImNoaWxkcmVuIiwiY3VycmVudFVzZXIiLCJzZXRDdXJyZW50VXNlciIsInVzZVN0YXRlIiwibG9hZGluZyIsInNldExvYWRpbmciLCJoYW5kbGVVc2VyIiwidXNlciIsIkNvb2tpZXMiLCJzZXQiLCJ1aWQiLCJmb3JtYXRlZFVzZXIiLCJmb3JtYXRVc2VyIiwiY29sbGVjdGlvbiIsImRvYyIsIm1lcmdlIiwicmVtb3ZlIiwic2lnblVwIiwiZW1haWwiLCJwYXNzd29yZCIsImNyZWF0ZVVzZXJXaXRoRW1haWxBbmRQYXNzd29yZCIsInRoZW4iLCJyZXNwb25zZSIsImxvZ0luIiwic2lnbkluV2l0aEVtYWlsQW5kUGFzc3dvcmQiLCJsb2dPdXQiLCJzaWduT3V0IiwidXNlRWZmZWN0IiwidW5zdWJzY3JpYmUiLCJvbklkVG9rZW5DaGFuZ2VkIiwidmFsdWUiLCJnZXRTdHJpcGVSb2xlIiwiZ2V0SWRUb2tlbiIsImRlY29kZWRUb2tlbiIsImdldElkVG9rZW5SZXN1bHQiLCJjbGFpbXMiLCJzdHJpcGVSb2xlIiwiY29uc29sZSIsImxvZyIsInRva2VuIiwicHJvdmlkZXIiLCJwcm92aWRlckRhdGEiLCJwcm92aWRlcklkIiwiTmFtZSIsIm5hbWUiLCJzZXROYW1lIiwidXNlckNvdW50cnkiLCJzZXRVc2VyQ291bnRyeSIsInJvdXRlciIsInVzZVJvdXRlciIsIm9uU3VibWl0IiwiZSIsInByZXZlbnREZWZhdWx0IiwicHVzaCIsImFsZXJ0IiwidGFyZ2V0IiwiY291bnRyeSIsIndpZHRoIiwiY29sb3IiXSwibWFwcGluZ3MiOiI7O1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxJQUFJO1FBQ0o7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFD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QUssRUFBRTtBQUF4QjtBQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUEseUJBN0NGLGVBOENFO0FBQUssdUJBQVMsRUFBQyx3Q0FBZjtBQUFBLHNDQUNFO0FBQUcseUJBQVMsRUFBQyxrQkFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSwyQkFERixlQUVFO0FBQ0Usb0JBQUksRUFBQyxRQURQO0FBRUUseUJBQVMsRUFBQyxvSUFGWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSwyQkFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEseUJBOUNGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBUEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURGLGVBbUVFO0FBQUssaUJBQVMsRUFBQyxrRkFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFuRUY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQWxDRjtBQUFBLGtCQURGO0FBNEdELENBL0hEOztBQWlJZSwySkFBQWYsSUFBZixHOzs7Ozs7Ozs7OztBQ3ZJQSw4RDs7Ozs7Ozs7Ozs7QUNBQSx5Qzs7Ozs7Ozs7Ozs7QUNBQSwwQzs7Ozs7Ozs7Ozs7QUNBQSwrQzs7Ozs7Ozs7Ozs7QUNBQSwrQzs7Ozs7Ozs7Ozs7QUNBQSw2Qzs7Ozs7Ozs7Ozs7QUNBQSxzQzs7Ozs7Ozs7Ozs7QUNBQSx3Qzs7Ozs7Ozs7Ozs7QUNBQSxrQzs7Ozs7Ozs7Ozs7QUNBQSwwRDs7Ozs7Ozs7Ozs7QUNBQSxrRCIsImZpbGUiOiJwYWdlcy9uYW1lLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSByZXF1aXJlKCcuLi9zc3ItbW9kdWxlLWNhY2hlLmpzJyk7XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdHZhciB0aHJldyA9IHRydWU7XG4gXHRcdHRyeSB7XG4gXHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG4gXHRcdFx0dGhyZXcgPSBmYWxzZTtcbiBcdFx0fSBmaW5hbGx5IHtcbiBcdFx0XHRpZih0aHJldykgZGVsZXRlIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHR9XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9wYWdlcy9uYW1lLmpzXCIpO1xuIiwiaW1wb3J0IGZpcmViYXNlIGZyb20gJ2ZpcmViYXNlL2FwcCc7XHJcbmltcG9ydCAnZmlyZWJhc2UvYXV0aCc7XHJcbmltcG9ydCAnZmlyZWJhc2UvZmlyZXN0b3JlJztcclxuaW1wb3J0ICdmaXJlYmFzZS9zdG9yYWdlJztcclxuaW1wb3J0ICdmaXJlYmFzZS9mdW5jdGlvbnMnO1xyXG5cclxuaWYgKCFmaXJlYmFzZS5hcHBzLmxlbmd0aCkge1xyXG4gIGZpcmViYXNlLmluaXRpYWxpemVBcHAoe1xyXG4gICAgLy8gYXBpS2V5OiAnQUl6YVN5Q3hfVDBEcWl4TDNBWF9RTGwtajhYRHlnR3A5MUMtMy1RJyxcclxuICAgIC8vIGF1dGhEb21haW46ICdzdGFydHVwLXRlc3QtNGQ2MjUuZmlyZWJhc2VhcHAuY29tJyxcclxuICAgIC8vIHByb2plY3RJZDogJ3N0YXJ0dXAtdGVzdC00ZDYyNScsXHJcbiAgICAvLyBzdG9yYWdlQnVja2V0OiAnc3RhcnR1cC10ZXN0LTRkNjI1LmFwcHNwb3QuY29tJyxcclxuICAgIC8vIG1lc3NhZ2luZ1NlbmRlcklkOiAnNDcyNDE2MTUwMjQwJyxcclxuICAgIC8vIGFwcElkOiAnMTo0NzI0MTYxNTAyNDA6d2ViOmIyYTEyOGFkMjdhZmZmZGRmM2U2ODUnLFxyXG4gICAgYXBpS2V5OiAnQUl6YVN5Qk9TZnVBZjdWQUs5WWVjMjBsR3JEXzZicTVNTlJtOXNFJyxcclxuICAgIGF1dGhEb21haW46ICdzYWFzLXN0YXJ0dXAtYTVhMzQuZmlyZWJhc2VhcHAuY29tJyxcclxuICAgIHByb2plY3RJZDogJ3NhYXMtc3RhcnR1cC1hNWEzNCcsXHJcbiAgICBzdG9yYWdlQnVja2V0OiAnc2Fhcy1zdGFydHVwLWE1YTM0LmFwcHNwb3QuY29tJyxcclxuICAgIG1lc3NhZ2luZ1NlbmRlcklkOiAnODY0MjE3NTc0NjI1JyxcclxuICAgIGFwcElkOiAnMTo4NjQyMTc1NzQ2MjU6d2ViOjE5Y2Y1OTAxMDllZjUwZGQ5MzViYTAnLFxyXG4gICAgbWVhc3VyZW1lbnRJZDogJ0ctUUtaSlBUS01TNCcsXHJcbiAgfSk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZpcmViYXNlO1xyXG5leHBvcnQgY29uc3QgYXV0aCA9IGZpcmViYXNlLmF1dGgoKTtcclxuZXhwb3J0IGNvbnN0IGRiID0gZmlyZWJhc2UuZmlyZXN0b3JlKCk7XHJcbmV4cG9ydCBjb25zdCBzdG9yYWdlID0gZmlyZWJhc2Uuc3RvcmFnZSgpO1xyXG4iLCJpbXBvcnQgZmlyZWJhc2UsIHsgYXV0aCwgZGIgfSBmcm9tICcuLi9saWIvZmlyZWJhc2UnO1xyXG5pbXBvcnQgUmVhY3QsIHsgdXNlQ29udGV4dCwgY3JlYXRlQ29udGV4dCwgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IENvb2tpZXMgZnJvbSAnanMtY29va2llJztcclxuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xyXG5cclxuZXhwb3J0IGNvbnN0IEF1dGhDb250ZXh0ID0gY3JlYXRlQ29udGV4dCgpOyAvLyBUdXRhaiBtb8W8bmEgdW1pZcWbY2nEhyBkZWZhdWx0IFZhbHVlXHJcblxyXG5leHBvcnQgY29uc3QgdXNlQXV0aCA9ICgpID0+IHtcclxuICByZXR1cm4gdXNlQ29udGV4dChBdXRoQ29udGV4dCk7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgQXV0aFByb3ZpZGVyID0gKHsgY2hpbGRyZW4gfSkgPT4ge1xyXG4gIGNvbnN0IFtjdXJyZW50VXNlciwgc2V0Q3VycmVudFVzZXJdID0gdXNlU3RhdGUoKTtcclxuICBjb25zdCBbbG9hZGluZywgc2V0TG9hZGluZ10gPSB1c2VTdGF0ZSh0cnVlKTtcclxuXHJcbiAgY29uc3QgaGFuZGxlVXNlciA9IGFzeW5jICh1c2VyKSA9PiB7XHJcbiAgICBpZiAodXNlcikge1xyXG4gICAgICBDb29raWVzLnNldCgndWlkJywgdXNlci51aWQsIHRydWUpO1xyXG4gICAgICAvLyBjb25zb2xlLmxvZygndXNlciAtICcsIHVzZXIpO1xyXG4gICAgICAvLyBjb25zb2xlLmxvZygndXNlciBuYW1lIC0gJywgbmFtZSk7XHJcbiAgICAgIGNvbnN0IGZvcm1hdGVkVXNlciA9IGF3YWl0IGZvcm1hdFVzZXIodXNlcik7XHJcblxyXG4gICAgICAvLyBjb25zdCBkZWNvZGVkVG9rZW4gPSBhd2FpdCBmaXJlYmFzZS5hdXRoKCkuY3VycmVudFVzZXIuZ2V0SWRUb2tlblJlc3VsdCgpO1xyXG4gICAgICAvLyBjb25zb2xlLmxvZyhkZWNvZGVkVG9rZW4uY2xhaW1zLnN0cmlwZVJvbGUpO1xyXG5cclxuICAgICAgZGIuY29sbGVjdGlvbigndXNlcnMnKS5kb2ModXNlci51aWQpLnNldCh7IGZvcm1hdGVkVXNlciB9LCB7IG1lcmdlOiB0cnVlIH0pO1xyXG5cclxuICAgICAgc2V0Q3VycmVudFVzZXIoZm9ybWF0ZWRVc2VyKTtcclxuICAgICAgLy8gQ29va2llcy5zZXQoJ3Rva2VuJywgdXNlci56YSwgdHJ1ZSk7XHJcblxyXG4gICAgICBzZXRMb2FkaW5nKGZhbHNlKTtcclxuICAgICAgcmV0dXJuIGZvcm1hdGVkVXNlcjtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHNldEN1cnJlbnRVc2VyKGZhbHNlKTtcclxuICAgICAgLy8gQ29va2llcy5yZW1vdmUoJ3Rva2VuJywgdXNlci56YSk7XHJcbiAgICAgIENvb2tpZXMucmVtb3ZlKCd1aWQnKTtcclxuXHJcbiAgICAgIHNldExvYWRpbmcoZmFsc2UpO1xyXG4gICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgY29uc3Qgc2lnblVwID0gYXN5bmMgKGVtYWlsLCBwYXNzd29yZCkgPT4ge1xyXG4gICAgcmV0dXJuIGF3YWl0IGF1dGguY3JlYXRlVXNlcldpdGhFbWFpbEFuZFBhc3N3b3JkKGVtYWlsLCBwYXNzd29yZCkudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgcmV0dXJuIGhhbmRsZVVzZXIocmVzcG9uc2UudXNlcik7XHJcbiAgICB9KTtcclxuICB9O1xyXG5cclxuICBjb25zdCBsb2dJbiA9IChlbWFpbCwgcGFzc3dvcmQpID0+IHtcclxuICAgIHJldHVybiBhdXRoLnNpZ25JbldpdGhFbWFpbEFuZFBhc3N3b3JkKGVtYWlsLCBwYXNzd29yZCk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgbG9nT3V0ID0gKCkgPT4ge1xyXG4gICAgcmV0dXJuIGF1dGguc2lnbk91dCgpO1xyXG4gIH07XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zdCB1bnN1YnNjcmliZSA9IGF1dGgub25JZFRva2VuQ2hhbmdlZChoYW5kbGVVc2VyKTtcclxuXHJcbiAgICByZXR1cm4gKCkgPT4gdW5zdWJzY3JpYmUoKTtcclxuICB9LCBbXSk7XHJcblxyXG4gIGNvbnN0IHZhbHVlID0ge1xyXG4gICAgY3VycmVudFVzZXIsXHJcbiAgICBzaWduVXAsXHJcbiAgICBsb2dJbixcclxuICAgIGxvZ091dCxcclxuICB9O1xyXG5cclxuICBjb25zdCBnZXRTdHJpcGVSb2xlID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgYXdhaXQgZmlyZWJhc2UuYXV0aCgpLmN1cnJlbnRVc2VyLmdldElkVG9rZW4odHJ1ZSk7XHJcbiAgICBjb25zdCBkZWNvZGVkVG9rZW4gPSBhd2FpdCBmaXJlYmFzZS5hdXRoKCkuY3VycmVudFVzZXIuZ2V0SWRUb2tlblJlc3VsdCgpO1xyXG4gICAgcmV0dXJuIGRlY29kZWRUb2tlbi5jbGFpbXMuc3RyaXBlUm9sZSB8fCAnZnJlZSc7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgZm9ybWF0VXNlciA9IGFzeW5jICh1c2VyKSA9PiB7XHJcbiAgICBjb25zb2xlLmxvZygnT0ZGIC0gJywgdXNlcik7XHJcbiAgICBjb25zdCB0b2tlbiA9IGF3YWl0IHVzZXIuZ2V0SWRUb2tlbigpO1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgdWlkOiB1c2VyLnVpZCxcclxuICAgICAgZW1haWw6IHVzZXIuZW1haWwsXHJcbiAgICAgIC8vIG5hbWUsXHJcbiAgICAgIC8vIHRva2VuOiB1c2VyLnphLCAvLyB0b2tlbiBKV1QsIGdlbmVyb3dhbnkgYXV0b21hdHljem5pZSBwcnpleiBmaXJlYmFzZSBwcnp5IHpha8WCYWRhbml1IGtvbnRhXHJcbiAgICAgIHByb3ZpZGVyOiB1c2VyLnByb3ZpZGVyRGF0YVswXS5wcm92aWRlcklkLFxyXG4gICAgICBzdHJpcGVSb2xlOiBhd2FpdCBnZXRTdHJpcGVSb2xlKCksXHJcbiAgICAgIHRva2VuLFxyXG4gICAgfTtcclxuICB9O1xyXG5cclxuICByZXR1cm4gPEF1dGhDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXt2YWx1ZX0+eyFsb2FkaW5nICYmIGNoaWxkcmVufTwvQXV0aENvbnRleHQuUHJvdmlkZXI+O1xyXG59O1xyXG4iLCJpbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XHJcbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgQ291bnRyeURyb3Bkb3duIH0gZnJvbSAncmVhY3QtY291bnRyeS1yZWdpb24tc2VsZWN0b3InO1xyXG5pbXBvcnQgeyBkYiB9IGZyb20gJy4uL2xpYi9maXJlYmFzZSc7XHJcbmltcG9ydCB7IHVzZUF1dGggfSBmcm9tICcuLi9saWIvbmV3QXV0aCc7XHJcblxyXG5jb25zdCBOYW1lID0gKCkgPT4ge1xyXG4gIGNvbnN0IFtuYW1lLCBzZXROYW1lXSA9IHVzZVN0YXRlKCcnKTtcclxuICBjb25zdCBbdXNlckNvdW50cnksIHNldFVzZXJDb3VudHJ5XSA9IHVzZVN0YXRlKCcnKTtcclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuXHJcbiAgY29uc3QgeyBjdXJyZW50VXNlciB9ID0gdXNlQXV0aCgpO1xyXG4gIGNvbnNvbGUubG9nKGN1cnJlbnRVc2VyKTtcclxuXHJcbiAgY29uc3Qgb25TdWJtaXQgPSBhc3luYyAoZSkgPT4ge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgaWYgKChuYW1lLCB1c2VyQ291bnRyeSkpIHtcclxuICAgICAgYXdhaXQgZGIuY29sbGVjdGlvbigndXNlcnMnKS5kb2MoY3VycmVudFVzZXIudWlkKS5zZXQoeyBuYW1lLCB1c2VyQ291bnRyeSB9LCB7IG1lcmdlOiB0cnVlIH0pO1xyXG4gICAgICByb3V0ZXIucHVzaCgnL2Rhc2hib2FyZC93ZWxjb21lJyk7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGFsZXJ0KCc6KCgoJyk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDx1bCBjbGFzc05hbWU9XCJjaXJjbGVzXCI+XHJcbiAgICAgICAgPGxpPjwvbGk+XHJcbiAgICAgICAgPGxpPjwvbGk+XHJcbiAgICAgICAgPGxpPjwvbGk+XHJcbiAgICAgICAgPGxpPjwvbGk+XHJcbiAgICAgICAgPGxpPjwvbGk+XHJcbiAgICAgICAgPGxpPjwvbGk+XHJcbiAgICAgICAgPGxpPjwvbGk+XHJcbiAgICAgICAgPGxpPjwvbGk+XHJcbiAgICAgICAgPGxpPjwvbGk+XHJcbiAgICAgICAgPGxpPjwvbGk+XHJcbiAgICAgICAgey8qIDEwICovfVxyXG4gICAgICAgIHsvKiA8bGk+PC9saT5cclxuICAgICAgICA8bGk+PC9saT5cclxuICAgICAgICA8bGk+PC9saT5cclxuICAgICAgICA8bGk+PC9saT5cclxuICAgICAgICA8bGk+PC9saT5cclxuICAgICAgICA8bGk+PC9saT5cclxuICAgICAgICA8bGk+PC9saT5cclxuICAgICAgICA8bGk+PC9saT5cclxuICAgICAgICA8bGk+PC9saT5cclxuICAgICAgICA8bGk+PC9saT5cclxuICAgICAgICA8bGk+PC9saT5cclxuICAgICAgICA8bGk+PC9saT5cclxuICAgICAgICA8bGk+PC9saT5cclxuICAgICAgICA8bGk+PC9saT5cclxuICAgICAgICA8bGk+PC9saT5cclxuICAgICAgICA8bGk+PC9saT5cclxuICAgICAgICA8bGk+PC9saT5cclxuICAgICAgICA8bGk+PC9saT5cclxuICAgICAgICA8bGk+PC9saT5cclxuICAgICAgICA8bGk+PC9saT4gKi99XHJcbiAgICAgIDwvdWw+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaC1zY3JlZW4gdy1mdWxsIGZsZXgganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyIGJnLWJhY2tncm91bmQgZmxleC1jb2xcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInotNTAgcC0xMCBoLWF1dG8gZ3JpZCBncmlkLWNvbHMtMSBncmlkLXJvd3MtMyB3LWF1dG8gbWF4LXctbmFtZUNvbnRhaW5lciB3LWZ1bGwgYmctd2hpdGUgcm91bmRlZC0zeGxcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93LXNwYW4tMSB0ZXh0LWNlbnRlclwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtMnhsIGZvbnQtbWVkaXVtXCI+XHJcbiAgICAgICAgICAgICAgPGltZyBzcmM9XCIvZ2lmcy9zcGFya2xlcy5naWZcIiBoZWlnaHQ9ezUwfSB3aWR0aD17NTB9IGNsYXNzTmFtZT1cImlubGluZS1ibG9jayByZWxhdGl2ZSBib3R0b20tMlwiIC8+IFdoYXQgaXMgeW91ciBuYW1lP1xyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWJhc2UgdGV4dC1ncmF5IHB4LTRcIj5Pb3BzLCBvbmUgbW9yZSB0aW55IHN0ZXAgYW5kIHdlIHdpbGwgZ2V0IGRvd24gdG8gYnVzaW5lc3MuPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93LXNwYW4tMlwiPlxyXG4gICAgICAgICAgICA8Zm9ybSBvblN1Ym1pdD17b25TdWJtaXR9IGNsYXNzTmFtZT1cInotNTAgcHgtNCBwdC0yIHJvdW5kZWQtMnhsIG10LTRcIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1iLThcIj5cclxuICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJibG9jayB0ZXh0LXNtIGZvbnQtbWVkaXVtIG1iLTJcIiBodG1sRm9yPVwibmFtZVwiPlxyXG4gICAgICAgICAgICAgICAgICBOYW1lXHJcbiAgICAgICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInRleHQtcHJpbWFyeWRhcmsgdy1mdWxsIHotNTAgc2hhZG93IGFwcGVhcmFuY2Utbm9uZSByb3VuZGVkLWxnIHB5LTIgcHgtMyBsZWFkaW5nLXRpZ2h0IGZvY3VzOm91dGxpbmUtbm9uZSBmb2N1czpzaGFkb3ctb3V0bGluZVwiXHJcbiAgICAgICAgICAgICAgICAgIHZhbHVlPXtuYW1lfVxyXG4gICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldE5hbWUoZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgICAgICAgICB0eXBlPVwibmFtZVwiXHJcbiAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwibmFtZVwiXHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWItOFwiPlxyXG4gICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImJsb2NrIHRleHQtc20gZm9udC1tZWRpdW0gbWItMlwiIGh0bWxGb3I9XCJ1c2VyQ291bnRyeVwiPlxyXG4gICAgICAgICAgICAgICAgICBDb3VudHJ5XHJcbiAgICAgICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgPENvdW50cnlEcm9wZG93blxyXG4gICAgICAgICAgICAgICAgICBpZD1cImNvdW50cnlcIlxyXG4gICAgICAgICAgICAgICAgICBkZWZhdWx0T3B0aW9uTGFiZWw9XCJjb3VudHJ5XCJcclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgJHtcclxuICAgICAgICAgICAgICAgICAgICB1c2VyQ291bnRyeSA/ICd0ZXh0LXByaW1hcnlkYXJrJyA6ICd0ZXh0LXBsYWNlaG9sZGVyJ1xyXG4gICAgICAgICAgICAgICAgICB9IHctZnVsbCB6LTUwIHNoYWRvdyBhcHBlYXJhbmNlLW5vbmUgcm91bmRlZC1sZyBweS0yIHB4LTMgbGVhZGluZy10aWdodCBmb2N1czpvdXRsaW5lLW5vbmUgZm9jdXM6c2hhZG93LW91dGxpbmVgfVxyXG4gICAgICAgICAgICAgICAgICB2YWx1ZT17dXNlckNvdW50cnl9XHJcbiAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoY291bnRyeSkgPT4gc2V0VXNlckNvdW50cnkoY291bnRyeSl9XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIHsvKiA8ZGl2IGNsYXNzTmFtZT0nZmxleCBqdXN0aWZ5LWJldHdlZW4gaXRlbXMtY2VudGVyIHBiLTggcHQtNCc+XHJcbiAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPSd0ZXh0LXByaW1hcnlkYXJrIG1yLTQgdy00MCB6LTUwIHNoYWRvdyBhcHBlYXJhbmNlLW5vbmUgcm91bmRlZC0yeGwgcHktMiBweC0zIGxlYWRpbmctdGlnaHQgZm9jdXM6b3V0bGluZS1ub25lIGZvY3VzOnNoYWRvdy1vdXRsaW5lJ1xyXG4gICAgICAgICAgICAgICAgICB2YWx1ZT17bmFtZX1cclxuICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXROYW1lKGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgICAgICAgICAgdHlwZT0nbmFtZSdcclxuICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9J25hbWUnXHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPENvdW50cnlEcm9wZG93blxyXG4gICAgICAgICAgICAgICAgICBpZD0nY291bnRyeSdcclxuICAgICAgICAgICAgICAgICAgZGVmYXVsdE9wdGlvbkxhYmVsPSdDb3VudHJ5J1xyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2Ake1xyXG4gICAgICAgICAgICAgICAgICAgIHVzZXJDb3VudHJ5ID8gJ3RleHQtcHJpbWFyeWRhcmsnIDogJ3RleHQtcGxhY2Vob2xkZXInXHJcbiAgICAgICAgICAgICAgICAgIH0gbWwtNCB3LTQwIHotNTAgc2hhZG93IGFwcGVhcmFuY2Utbm9uZSByb3VuZGVkLTJ4bCBweS0yIHB4LTMgbGVhZGluZy10aWdodCBmb2N1czpvdXRsaW5lLW5vbmUgZm9jdXM6c2hhZG93LW91dGxpbmVgfVxyXG4gICAgICAgICAgICAgICAgICB2YWx1ZT17dXNlckNvdW50cnl9XHJcbiAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoY291bnRyeSkgPT4gc2V0VXNlckNvdW50cnkoY291bnRyeSl9XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDwvZGl2PiAqL31cclxuICAgICAgICAgICAgICA8aHIgc3R5bGU9e3sgd2lkdGg6ICcxMDAlJywgY29sb3I6ICcjNkM2M0ZGJyB9fSAvPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1iZXR3ZWVuIG10LThcIj5cclxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtcHJpbWFyeWRhcmtcIj5CYWNrPC9wPlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICB0eXBlPVwic3VibWl0XCJcclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiei01MCBib3JkZXItMiBib3JkZXItcHJpbWFyeSBob3ZlcjpiZy1wcmltYXJ5IGhvdmVyOnRleHQtd2hpdGUgdGV4dC1wcmltYXJ5IGZvbnQtbWVkaXVtIHB5LTEuNSBweC02IHJvdW5kZWQtMnhsIGZvY3VzOm91dGxpbmUtbm9uZVwiXHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgIExldCdzIHN0YXJ0XHJcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlciBtdC00IHRleHQtc20gdGV4dC1ncmF5LTQwMCB0ZXh0LXByaW1hcnlkYXJrIG1heC13LW5hbWVDb250YWluZXIgcHgtNFwiPlxyXG4gICAgICAgICAg4oCcQWx3YXlzIHRoaW5rIG91dHNpZGUgdGhlIGJveCBhbmQgZW1icmFjZSBvcHBvcnR1bml0aWVzIHRoYXQgYXBwZWFyLCB3aGVyZXZlciB0aGV5IG1pZ2h0IGJlLuKAnVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBOYW1lO1xyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJiYWJlbC1wbHVnaW4tc3VwZXJqc29uLW5leHQvdG9vbHNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZmlyZWJhc2UvYXBwXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImZpcmViYXNlL2F1dGhcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZmlyZWJhc2UvZmlyZXN0b3JlXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImZpcmViYXNlL2Z1bmN0aW9uc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJmaXJlYmFzZS9zdG9yYWdlXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImpzLWNvb2tpZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L3JvdXRlclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1jb3VudHJ5LXJlZ2lvbi1zZWxlY3RvclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==