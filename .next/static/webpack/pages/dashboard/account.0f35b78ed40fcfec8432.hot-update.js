webpackHotUpdate_N_E("pages/dashboard/account",{

/***/ "./lib/db.js":
/*!*******************!*\
  !*** ./lib/db.js ***!
  \*******************/
/*! exports provided: getAllProjects, createUser, getUser, createStartupData, deleteProject, createCheckoutSessionThreeDays, createCheckoutSessionWeekly, createCheckoutSessionMonthly, goToBillingPortal */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAllProjects", function() { return getAllProjects; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createUser", function() { return createUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getUser", function() { return getUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createStartupData", function() { return createStartupData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteProject", function() { return deleteProject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createCheckoutSessionThreeDays", function() { return createCheckoutSessionThreeDays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createCheckoutSessionWeekly", function() { return createCheckoutSessionWeekly; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createCheckoutSessionMonthly", function() { return createCheckoutSessionMonthly; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "goToBillingPortal", function() { return goToBillingPortal; });
/* harmony import */ var C_off_saas_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/regenerator */ "./node_modules/next/node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var C_off_saas_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(C_off_saas_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var C_off_saas_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var C_off_saas_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _firebase_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./firebase.js */ "./lib/firebase.js");
/* harmony import */ var _stripe_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./stripe.js */ "./lib/stripe.js");




function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(C_off_saas_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }




var firestore = _firebase_js__WEBPACK_IMPORTED_MODULE_3__["default"].firestore();
var getAllProjects = /*#__PURE__*/function () {
  var _ref = Object(C_off_saas_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/C_off_saas_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
    var snapshot, projects;
    return C_off_saas_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return firestore.collection('projects').get();

          case 2:
            snapshot = _context.sent;
            projects = [];
            snapshot.forEach(function (doc) {
              projects.push(_objectSpread({
                id: doc.id
              }, doc.data()));
            });
            console.log(projects);
            return _context.abrupt("return", {
              projects: projects
            });

          case 7:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function getAllProjects() {
    return _ref.apply(this, arguments);
  };
}(); // CLIENT-DATA

var createUser = function createUser(uid, data) {
  return firestore.collection('users').doc(uid).set(_objectSpread({
    uid: uid
  }, data), {
    merge: true
  }); // merge powoduje, że każde id będzie unikatowe
};
var getUser = /*#__PURE__*/function () {
  var _ref2 = Object(C_off_saas_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/C_off_saas_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2(uid) {
    var user, users;
    return C_off_saas_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return firestore.collection('users').get();

          case 2:
            user = _context2.sent;
            users = [];
            user.forEach(function (doc) {
              users.push(_objectSpread({
                id: doc.id
              }, doc.data()));
            });
            return _context2.abrupt("return", {
              users: users
            });

          case 6:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));

  return function getUser(_x) {
    return _ref2.apply(this, arguments);
  };
}(); // STARTUP-DATA

var createStartupData = function createStartupData(data) {
  // Wszystkie informacje wrzucamy, a potem będziemy je pobierali dla odpowiedniego użytkownika
  return firestore.collection('startup-data').add(data);
}; // PROJECT DELETE

var deleteProject = /*#__PURE__*/function () {
  var _ref3 = Object(C_off_saas_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/C_off_saas_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3(projectId) {
    var snapshot, batch;
    return C_off_saas_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.next = 2;
            return firestore.collection('projects').where('projectId', '==', projectId).get();

          case 2:
            snapshot = _context3.sent;
            batch = firestore.batch();
            console.log(batch);
            snapshot.forEach(function (doc) {
              batch["delete"](doc.ref);
            });
            return _context3.abrupt("return", batch.commit());

          case 7:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));

  return function deleteProject(_x2) {
    return _ref3.apply(this, arguments);
  };
}(); // STRIPE

var createCheckoutSessionThreeDays = /*#__PURE__*/function () {
  var _ref4 = Object(C_off_saas_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/C_off_saas_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee5(uid) {
    var checkoutSessionRef;
    return C_off_saas_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            _context5.next = 2;
            return _firebase_js__WEBPACK_IMPORTED_MODULE_3__["db"].collection('users').doc(uid).collection('checkout_sessions').add({
              price: 'price_1IovN1BdXPtKajNHtQTV1N1q',
              success_url: "".concat(window.location.origin, "/dashboard/account"),
              cancel_url: "".concat(window.location.origin, "/dashboard/account")
            });

          case 2:
            checkoutSessionRef = _context5.sent;
            // Wait for the CheckoutSession to get attached by the extension
            checkoutSessionRef.onSnapshot( /*#__PURE__*/function () {
              var _ref5 = Object(C_off_saas_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/C_off_saas_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee4(snap) {
                var _snap$data, error, sessionId, stripe;

                return C_off_saas_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee4$(_context4) {
                  while (1) {
                    switch (_context4.prev = _context4.next) {
                      case 0:
                        // TO JEST DO ZMIANY Z PODSTAWOWEJ TEMPLATKI (tutaj dodajemy tylko słówko async)
                        _snap$data = snap.data(), error = _snap$data.error, sessionId = _snap$data.sessionId;

                        if (error) {
                          // Show an error to your customer and
                          // inspect your Cloud Function logs in the Firebase console.
                          alert("An error occured: ".concat(error.message));
                        }

                        if (!sessionId) {
                          _context4.next = 7;
                          break;
                        }

                        _context4.next = 5;
                        return Object(_stripe_js__WEBPACK_IMPORTED_MODULE_4__["default"])();

                      case 5:
                        stripe = _context4.sent;
                        stripe.redirectToCheckout({
                          sessionId: sessionId
                        });

                      case 7:
                      case "end":
                        return _context4.stop();
                    }
                  }
                }, _callee4);
              }));

              return function (_x4) {
                return _ref5.apply(this, arguments);
              };
            }());

          case 4:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5);
  }));

  return function createCheckoutSessionThreeDays(_x3) {
    return _ref4.apply(this, arguments);
  };
}();
var createCheckoutSessionWeekly = /*#__PURE__*/function () {
  var _ref6 = Object(C_off_saas_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/C_off_saas_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee7(uid) {
    var checkoutSessionRef;
    return C_off_saas_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee7$(_context7) {
      while (1) {
        switch (_context7.prev = _context7.next) {
          case 0:
            _context7.next = 2;
            return _firebase_js__WEBPACK_IMPORTED_MODULE_3__["db"].collection('users').doc(uid) // TO JEST DO ZMIANY Z PODSTAWOWEJ TEMPLATKI
            .collection('checkout_sessions').add({
              line_items: [{
                price: 'price_1IovN1BdXPtKajNHtQTV1N1q',
                quantity: 1
              }, {
                price: 'price_1IoxGoBdXPtKajNHMxZa1Mgy',
                quantity: 1
              }, {
                price: 'price_1IowgcBdXPtKajNHZowOrp8p',
                quantity: 1
              }],
              // price: 'price_1IoxGoBdXPtKajNHMxZa1Mgy', // Price key
              success_url: "".concat(window.location.origin, "/dashboard/account"),
              cancel_url: "".concat(window.location.origin, "/dashboard/account")
            });

          case 2:
            checkoutSessionRef = _context7.sent;
            // Wait for the CheckoutSession to get attached by the extension
            checkoutSessionRef.onSnapshot( /*#__PURE__*/function () {
              var _ref7 = Object(C_off_saas_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/C_off_saas_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee6(snap) {
                var _snap$data2, error, sessionId, stripe;

                return C_off_saas_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee6$(_context6) {
                  while (1) {
                    switch (_context6.prev = _context6.next) {
                      case 0:
                        // TO JEST DO ZMIANY Z PODSTAWOWEJ TEMPLATKI (tutaj dodajemy tylko słówko async)
                        _snap$data2 = snap.data(), error = _snap$data2.error, sessionId = _snap$data2.sessionId;

                        if (error) {
                          // Show an error to your customer and
                          // inspect your Cloud Function logs in the Firebase console.
                          alert("An error occured: ".concat(error.message));
                        }

                        if (!sessionId) {
                          _context6.next = 7;
                          break;
                        }

                        _context6.next = 5;
                        return Object(_stripe_js__WEBPACK_IMPORTED_MODULE_4__["default"])();

                      case 5:
                        stripe = _context6.sent;
                        // TO JEST DO ZMIANY Z PODSTAWOWEJ TEMPLATKI (funkcja getStripe w pliku stripe.js)
                        stripe.redirectToCheckout({
                          sessionId: sessionId
                        });

                      case 7:
                      case "end":
                        return _context6.stop();
                    }
                  }
                }, _callee6);
              }));

              return function (_x6) {
                return _ref7.apply(this, arguments);
              };
            }());

          case 4:
          case "end":
            return _context7.stop();
        }
      }
    }, _callee7);
  }));

  return function createCheckoutSessionWeekly(_x5) {
    return _ref6.apply(this, arguments);
  };
}();
var createCheckoutSessionMonthly = /*#__PURE__*/function () {
  var _ref8 = Object(C_off_saas_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/C_off_saas_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee9(uid) {
    var checkoutSessionRef;
    return C_off_saas_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee9$(_context9) {
      while (1) {
        switch (_context9.prev = _context9.next) {
          case 0:
            _context9.next = 2;
            return _firebase_js__WEBPACK_IMPORTED_MODULE_3__["db"].collection('users').doc(uid) // TO JEST DO ZMIANY Z PODSTAWOWEJ TEMPLATKI
            .collection('checkout_sessions').add({
              price: 'price_1IowgcBdXPtKajNHZowOrp8p',
              // Price key
              success_url: "".concat(window.location.origin, "/dashboard/account"),
              cancel_url: "".concat(window.location.origin, "/dashboard/account")
            });

          case 2:
            checkoutSessionRef = _context9.sent;
            // Wait for the CheckoutSession to get attached by the extension
            checkoutSessionRef.onSnapshot( /*#__PURE__*/function () {
              var _ref9 = Object(C_off_saas_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/C_off_saas_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee8(snap) {
                var _snap$data3, error, sessionId, stripe;

                return C_off_saas_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee8$(_context8) {
                  while (1) {
                    switch (_context8.prev = _context8.next) {
                      case 0:
                        // TO JEST DO ZMIANY Z PODSTAWOWEJ TEMPLATKI (tutaj dodajemy tylko słówko async)
                        _snap$data3 = snap.data(), error = _snap$data3.error, sessionId = _snap$data3.sessionId;

                        if (error) {
                          // Show an error to your customer and
                          // inspect your Cloud Function logs in the Firebase console.
                          alert("An error occured: ".concat(error.message));
                        }

                        if (!sessionId) {
                          _context8.next = 7;
                          break;
                        }

                        _context8.next = 5;
                        return Object(_stripe_js__WEBPACK_IMPORTED_MODULE_4__["default"])();

                      case 5:
                        stripe = _context8.sent;
                        // TO JEST DO ZMIANY Z PODSTAWOWEJ TEMPLATKI (funkcja getStripe w pliku stripe.js)
                        stripe.redirectToCheckout({
                          sessionId: sessionId
                        });

                      case 7:
                      case "end":
                        return _context8.stop();
                    }
                  }
                }, _callee8);
              }));

              return function (_x8) {
                return _ref9.apply(this, arguments);
              };
            }());

          case 4:
          case "end":
            return _context9.stop();
        }
      }
    }, _callee9);
  }));

  return function createCheckoutSessionMonthly(_x7) {
    return _ref8.apply(this, arguments);
  };
}();
var goToBillingPortal = /*#__PURE__*/function () {
  var _ref10 = Object(C_off_saas_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/C_off_saas_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee10() {
    var functionRef, _yield$functionRef, data;

    return C_off_saas_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee10$(_context10) {
      while (1) {
        switch (_context10.prev = _context10.next) {
          case 0:
            // Do tej funkcji musimy zaimportować firebase/functions w pliku firebase.js
            functionRef = _firebase_js__WEBPACK_IMPORTED_MODULE_3__["default"].app().functions('us-central1').httpsCallable('ext-firestore-stripe-subscriptions-createPortalLink');
            _context10.next = 3;
            return functionRef({
              returnUrl: "".concat(window.location.origin, "/dashboard/account")
            });

          case 3:
            _yield$functionRef = _context10.sent;
            data = _yield$functionRef.data;
            window.location.assign(data.url);

          case 6:
          case "end":
            return _context10.stop();
        }
      }
    }, _callee10);
  }));

  return function goToBillingPortal() {
    return _ref10.apply(this, arguments);
  };
}(); // export const getCurrentPlan = async () => {
//   const decodedToken = await firebase.auth().currentUser.getIdTokenResult();
//   // console.log(decodedToken.claims.stripeRole); // TO POKAZUJE AKTUALNY PLAN ZALOGOWANEGO UŻYTKOWNIKA NP. BASIC / PREMIUM
//   return decodedToken.claims.stripeRole;
// };

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbGliL2RiLmpzIl0sIm5hbWVzIjpbImZpcmVzdG9yZSIsImZpcmViYXNlIiwiZ2V0QWxsUHJvamVjdHMiLCJjb2xsZWN0aW9uIiwiZ2V0Iiwic25hcHNob3QiLCJwcm9qZWN0cyIsImZvckVhY2giLCJkb2MiLCJwdXNoIiwiaWQiLCJkYXRhIiwiY29uc29sZSIsImxvZyIsImNyZWF0ZVVzZXIiLCJ1aWQiLCJzZXQiLCJtZXJnZSIsImdldFVzZXIiLCJ1c2VyIiwidXNlcnMiLCJjcmVhdGVTdGFydHVwRGF0YSIsImFkZCIsImRlbGV0ZVByb2plY3QiLCJwcm9qZWN0SWQiLCJ3aGVyZSIsImJhdGNoIiwicmVmIiwiY29tbWl0IiwiY3JlYXRlQ2hlY2tvdXRTZXNzaW9uVGhyZWVEYXlzIiwiZGIiLCJwcmljZSIsInN1Y2Nlc3NfdXJsIiwid2luZG93IiwibG9jYXRpb24iLCJvcmlnaW4iLCJjYW5jZWxfdXJsIiwiY2hlY2tvdXRTZXNzaW9uUmVmIiwib25TbmFwc2hvdCIsInNuYXAiLCJlcnJvciIsInNlc3Npb25JZCIsImFsZXJ0IiwibWVzc2FnZSIsImdldFN0cmlwZSIsInN0cmlwZSIsInJlZGlyZWN0VG9DaGVja291dCIsImNyZWF0ZUNoZWNrb3V0U2Vzc2lvbldlZWtseSIsImxpbmVfaXRlbXMiLCJxdWFudGl0eSIsImNyZWF0ZUNoZWNrb3V0U2Vzc2lvbk1vbnRobHkiLCJnb1RvQmlsbGluZ1BvcnRhbCIsImZ1bmN0aW9uUmVmIiwiYXBwIiwiZnVuY3Rpb25zIiwiaHR0cHNDYWxsYWJsZSIsInJldHVyblVybCIsImFzc2lnbiIsInVybCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUVBLElBQU1BLFNBQVMsR0FBR0Msb0RBQVEsQ0FBQ0QsU0FBVCxFQUFsQjtBQUVPLElBQU1FLGNBQWM7QUFBQSxnUkFBRztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7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QTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBQTlCOztBQUFBO0FBQUE7QUFBQTtBQUFBOztBQVgwQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHQUFIOztBQUFBLGtCQUE1QlMsNEJBQTRCO0FBQUE7QUFBQTtBQUFBLEdBQWxDO0FBNEJBLElBQU1DLGlCQUFpQjtBQUFBLGtSQUFHO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDL0I7QUFDTUMsdUJBRnlCLEdBRVhuRCxvREFBUSxDQUFDb0QsR0FBVCxHQUFlQyxTQUFmLENBQXlCLGFBQXpCLEVBQXdDQyxhQUF4QyxDQUFzRCxxREFBdEQsQ0FGVztBQUFBO0FBQUEsbUJBR1JILFdBQVcsQ0FBQztBQUNqQ0ksdUJBQVMsWUFBS3ZCLE1BQU0sQ0FBQ0MsUUFBUCxDQUFnQkMsTUFBckI7QUFEd0IsYUFBRCxDQUhIOztBQUFBO0FBQUE7QUFHdkJ4QixnQkFIdUIsc0JBR3ZCQSxJQUh1QjtBQU0vQnNCLGtCQUFNLENBQUNDLFFBQVAsQ0FBZ0J1QixNQUFoQixDQUF1QjlDLElBQUksQ0FBQytDLEdBQTVCOztBQU4rQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHQUFIOztBQUFBLGtCQUFqQlAsaUJBQWlCO0FBQUE7QUFBQTtBQUFBLEdBQXZCLEMsQ0FTUDtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2Rhc2hib2FyZC9hY2NvdW50LjBmMzViNzhlZDQwZmNmZWM4NDMyLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZmlyZWJhc2UgZnJvbSAnLi9maXJlYmFzZS5qcyc7XHJcbmltcG9ydCB7IGRiIH0gZnJvbSAnLi9maXJlYmFzZSc7XHJcbmltcG9ydCBnZXRTdHJpcGUgZnJvbSAnLi9zdHJpcGUuanMnO1xyXG5cclxuY29uc3QgZmlyZXN0b3JlID0gZmlyZWJhc2UuZmlyZXN0b3JlKCk7XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0QWxsUHJvamVjdHMgPSBhc3luYyAoKSA9PiB7XHJcbiAgY29uc3Qgc25hcHNob3QgPSBhd2FpdCBmaXJlc3RvcmUuY29sbGVjdGlvbigncHJvamVjdHMnKS5nZXQoKTtcclxuXHJcbiAgY29uc3QgcHJvamVjdHMgPSBbXTtcclxuICBzbmFwc2hvdC5mb3JFYWNoKChkb2MpID0+IHtcclxuICAgIHByb2plY3RzLnB1c2goeyBpZDogZG9jLmlkLCAuLi5kb2MuZGF0YSgpIH0pO1xyXG4gIH0pO1xyXG5cclxuICBjb25zb2xlLmxvZyhwcm9qZWN0cyk7XHJcbiAgcmV0dXJuIHsgcHJvamVjdHMgfTtcclxufTtcclxuXHJcbi8vIENMSUVOVC1EQVRBXHJcblxyXG5leHBvcnQgY29uc3QgY3JlYXRlVXNlciA9ICh1aWQsIGRhdGEpID0+IHtcclxuICByZXR1cm4gZmlyZXN0b3JlXHJcbiAgICAuY29sbGVjdGlvbigndXNlcnMnKVxyXG4gICAgLmRvYyh1aWQpXHJcbiAgICAuc2V0KHsgdWlkLCAuLi5kYXRhIH0sIHsgbWVyZ2U6IHRydWUgfSk7IC8vIG1lcmdlIHBvd29kdWplLCDFvGUga2HFvGRlIGlkIGLEmWR6aWUgdW5pa2F0b3dlXHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0VXNlciA9IGFzeW5jICh1aWQpID0+IHtcclxuICBjb25zdCB1c2VyID0gYXdhaXQgZmlyZXN0b3JlLmNvbGxlY3Rpb24oJ3VzZXJzJykuZ2V0KCk7XHJcblxyXG4gIGNvbnN0IHVzZXJzID0gW107XHJcbiAgdXNlci5mb3JFYWNoKChkb2MpID0+IHtcclxuICAgIHVzZXJzLnB1c2goeyBpZDogZG9jLmlkLCAuLi5kb2MuZGF0YSgpIH0pO1xyXG4gIH0pO1xyXG5cclxuICByZXR1cm4geyB1c2VycyB9O1xyXG59O1xyXG5cclxuLy8gU1RBUlRVUC1EQVRBXHJcblxyXG5leHBvcnQgY29uc3QgY3JlYXRlU3RhcnR1cERhdGEgPSAoZGF0YSkgPT4ge1xyXG4gIC8vIFdzenlzdGtpZSBpbmZvcm1hY2plIHdyenVjYW15LCBhIHBvdGVtIGLEmWR6aWVteSBqZSBwb2JpZXJhbGkgZGxhIG9kcG93aWVkbmllZ28gdcW8eXRrb3duaWthXHJcbiAgcmV0dXJuIGZpcmVzdG9yZS5jb2xsZWN0aW9uKCdzdGFydHVwLWRhdGEnKS5hZGQoZGF0YSk7XHJcbn07XHJcblxyXG4vLyBQUk9KRUNUIERFTEVURVxyXG5leHBvcnQgY29uc3QgZGVsZXRlUHJvamVjdCA9IGFzeW5jIChwcm9qZWN0SWQpID0+IHtcclxuICAvLyBPTkUgUEFSVElDVUxBUiBQUk9KRUNUXHJcbiAgY29uc3Qgc25hcHNob3QgPSBhd2FpdCBmaXJlc3RvcmUuY29sbGVjdGlvbigncHJvamVjdHMnKS53aGVyZSgncHJvamVjdElkJywgJz09JywgcHJvamVjdElkKS5nZXQoKTtcclxuXHJcbiAgY29uc3QgYmF0Y2ggPSBmaXJlc3RvcmUuYmF0Y2goKTtcclxuICBjb25zb2xlLmxvZyhiYXRjaCk7XHJcblxyXG4gIHNuYXBzaG90LmZvckVhY2goKGRvYykgPT4ge1xyXG4gICAgYmF0Y2guZGVsZXRlKGRvYy5yZWYpO1xyXG4gIH0pO1xyXG5cclxuICByZXR1cm4gYmF0Y2guY29tbWl0KCk7XHJcbn07XHJcblxyXG4vLyBTVFJJUEVcclxuXHJcbmV4cG9ydCBjb25zdCBjcmVhdGVDaGVja291dFNlc3Npb25UaHJlZURheXMgPSBhc3luYyAodWlkKSA9PiB7XHJcbiAgY29uc3QgY2hlY2tvdXRTZXNzaW9uUmVmID0gYXdhaXQgZGJcclxuICAgIC5jb2xsZWN0aW9uKCd1c2VycycpXHJcbiAgICAuZG9jKHVpZClcclxuICAgIC5jb2xsZWN0aW9uKCdjaGVja291dF9zZXNzaW9ucycpXHJcbiAgICAuYWRkKHtcclxuICAgICAgcHJpY2U6ICdwcmljZV8xSW92TjFCZFhQdEthak5IdFFUVjFOMXEnLFxyXG4gICAgICBzdWNjZXNzX3VybDogYCR7d2luZG93LmxvY2F0aW9uLm9yaWdpbn0vZGFzaGJvYXJkL2FjY291bnRgLFxyXG4gICAgICBjYW5jZWxfdXJsOiBgJHt3aW5kb3cubG9jYXRpb24ub3JpZ2lufS9kYXNoYm9hcmQvYWNjb3VudGAsXHJcbiAgICB9KTtcclxuICAvLyBXYWl0IGZvciB0aGUgQ2hlY2tvdXRTZXNzaW9uIHRvIGdldCBhdHRhY2hlZCBieSB0aGUgZXh0ZW5zaW9uXHJcbiAgY2hlY2tvdXRTZXNzaW9uUmVmLm9uU25hcHNob3QoYXN5bmMgKHNuYXApID0+IHtcclxuICAgIC8vIFRPIEpFU1QgRE8gWk1JQU5ZIFogUE9EU1RBV09XRUogVEVNUExBVEtJICh0dXRhaiBkb2RhamVteSB0eWxrbyBzxYLDs3drbyBhc3luYylcclxuICAgIGNvbnN0IHsgZXJyb3IsIHNlc3Npb25JZCB9ID0gc25hcC5kYXRhKCk7XHJcbiAgICBpZiAoZXJyb3IpIHtcclxuICAgICAgLy8gU2hvdyBhbiBlcnJvciB0byB5b3VyIGN1c3RvbWVyIGFuZFxyXG4gICAgICAvLyBpbnNwZWN0IHlvdXIgQ2xvdWQgRnVuY3Rpb24gbG9ncyBpbiB0aGUgRmlyZWJhc2UgY29uc29sZS5cclxuICAgICAgYWxlcnQoYEFuIGVycm9yIG9jY3VyZWQ6ICR7ZXJyb3IubWVzc2FnZX1gKTtcclxuICAgIH1cclxuICAgIGlmIChzZXNzaW9uSWQpIHtcclxuICAgICAgLy8gV2UgaGF2ZSBhIHNlc3Npb24sIGxldCdzIHJlZGlyZWN0IHRvIENoZWNrb3V0XHJcbiAgICAgIC8vIEluaXQgU3RyaXBlXHJcbiAgICAgIGNvbnN0IHN0cmlwZSA9IGF3YWl0IGdldFN0cmlwZSgpO1xyXG4gICAgICBzdHJpcGUucmVkaXJlY3RUb0NoZWNrb3V0KHsgc2Vzc2lvbklkIH0pO1xyXG4gICAgfVxyXG4gIH0pO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGNyZWF0ZUNoZWNrb3V0U2Vzc2lvbldlZWtseSA9IGFzeW5jICh1aWQpID0+IHtcclxuICBjb25zdCBjaGVja291dFNlc3Npb25SZWYgPSBhd2FpdCBkYlxyXG4gICAgLmNvbGxlY3Rpb24oJ3VzZXJzJylcclxuICAgIC5kb2ModWlkKSAvLyBUTyBKRVNUIERPIFpNSUFOWSBaIFBPRFNUQVdPV0VKIFRFTVBMQVRLSVxyXG4gICAgLmNvbGxlY3Rpb24oJ2NoZWNrb3V0X3Nlc3Npb25zJylcclxuICAgIC5hZGQoe1xyXG4gICAgICBsaW5lX2l0ZW1zOiBbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgcHJpY2U6ICdwcmljZV8xSW92TjFCZFhQdEthak5IdFFUVjFOMXEnLFxyXG4gICAgICAgICAgcXVhbnRpdHk6IDEsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICBwcmljZTogJ3ByaWNlXzFJb3hHb0JkWFB0S2FqTkhNeFphMU1neScsXHJcbiAgICAgICAgICBxdWFudGl0eTogMSxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIHByaWNlOiAncHJpY2VfMUlvd2djQmRYUHRLYWpOSFpvd09ycDhwJyxcclxuICAgICAgICAgIHF1YW50aXR5OiAxLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIF0sXHJcbiAgICAgIC8vIHByaWNlOiAncHJpY2VfMUlveEdvQmRYUHRLYWpOSE14WmExTWd5JywgLy8gUHJpY2Uga2V5XHJcbiAgICAgIHN1Y2Nlc3NfdXJsOiBgJHt3aW5kb3cubG9jYXRpb24ub3JpZ2lufS9kYXNoYm9hcmQvYWNjb3VudGAsXHJcbiAgICAgIGNhbmNlbF91cmw6IGAke3dpbmRvdy5sb2NhdGlvbi5vcmlnaW59L2Rhc2hib2FyZC9hY2NvdW50YCxcclxuICAgIH0pO1xyXG4gIC8vIFdhaXQgZm9yIHRoZSBDaGVja291dFNlc3Npb24gdG8gZ2V0IGF0dGFjaGVkIGJ5IHRoZSBleHRlbnNpb25cclxuICBjaGVja291dFNlc3Npb25SZWYub25TbmFwc2hvdChhc3luYyAoc25hcCkgPT4ge1xyXG4gICAgLy8gVE8gSkVTVCBETyBaTUlBTlkgWiBQT0RTVEFXT1dFSiBURU1QTEFUS0kgKHR1dGFqIGRvZGFqZW15IHR5bGtvIHPFgsOzd2tvIGFzeW5jKVxyXG4gICAgY29uc3QgeyBlcnJvciwgc2Vzc2lvbklkIH0gPSBzbmFwLmRhdGEoKTtcclxuICAgIGlmIChlcnJvcikge1xyXG4gICAgICAvLyBTaG93IGFuIGVycm9yIHRvIHlvdXIgY3VzdG9tZXIgYW5kXHJcbiAgICAgIC8vIGluc3BlY3QgeW91ciBDbG91ZCBGdW5jdGlvbiBsb2dzIGluIHRoZSBGaXJlYmFzZSBjb25zb2xlLlxyXG4gICAgICBhbGVydChgQW4gZXJyb3Igb2NjdXJlZDogJHtlcnJvci5tZXNzYWdlfWApO1xyXG4gICAgfVxyXG4gICAgaWYgKHNlc3Npb25JZCkge1xyXG4gICAgICAvLyBXZSBoYXZlIGEgc2Vzc2lvbiwgbGV0J3MgcmVkaXJlY3QgdG8gQ2hlY2tvdXRcclxuICAgICAgLy8gSW5pdCBTdHJpcGVcclxuICAgICAgY29uc3Qgc3RyaXBlID0gYXdhaXQgZ2V0U3RyaXBlKCk7IC8vIFRPIEpFU1QgRE8gWk1JQU5ZIFogUE9EU1RBV09XRUogVEVNUExBVEtJIChmdW5rY2phIGdldFN0cmlwZSB3IHBsaWt1IHN0cmlwZS5qcylcclxuICAgICAgc3RyaXBlLnJlZGlyZWN0VG9DaGVja291dCh7IHNlc3Npb25JZCB9KTtcclxuICAgIH1cclxuICB9KTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBjcmVhdGVDaGVja291dFNlc3Npb25Nb250aGx5ID0gYXN5bmMgKHVpZCkgPT4ge1xyXG4gIGNvbnN0IGNoZWNrb3V0U2Vzc2lvblJlZiA9IGF3YWl0IGRiXHJcbiAgICAuY29sbGVjdGlvbigndXNlcnMnKVxyXG4gICAgLmRvYyh1aWQpIC8vIFRPIEpFU1QgRE8gWk1JQU5ZIFogUE9EU1RBV09XRUogVEVNUExBVEtJXHJcbiAgICAuY29sbGVjdGlvbignY2hlY2tvdXRfc2Vzc2lvbnMnKVxyXG4gICAgLmFkZCh7XHJcbiAgICAgIHByaWNlOiAncHJpY2VfMUlvd2djQmRYUHRLYWpOSFpvd09ycDhwJywgLy8gUHJpY2Uga2V5XHJcbiAgICAgIHN1Y2Nlc3NfdXJsOiBgJHt3aW5kb3cubG9jYXRpb24ub3JpZ2lufS9kYXNoYm9hcmQvYWNjb3VudGAsXHJcbiAgICAgIGNhbmNlbF91cmw6IGAke3dpbmRvdy5sb2NhdGlvbi5vcmlnaW59L2Rhc2hib2FyZC9hY2NvdW50YCxcclxuICAgIH0pO1xyXG4gIC8vIFdhaXQgZm9yIHRoZSBDaGVja291dFNlc3Npb24gdG8gZ2V0IGF0dGFjaGVkIGJ5IHRoZSBleHRlbnNpb25cclxuICBjaGVja291dFNlc3Npb25SZWYub25TbmFwc2hvdChhc3luYyAoc25hcCkgPT4ge1xyXG4gICAgLy8gVE8gSkVTVCBETyBaTUlBTlkgWiBQT0RTVEFXT1dFSiBURU1QTEFUS0kgKHR1dGFqIGRvZGFqZW15IHR5bGtvIHPFgsOzd2tvIGFzeW5jKVxyXG4gICAgY29uc3QgeyBlcnJvciwgc2Vzc2lvbklkIH0gPSBzbmFwLmRhdGEoKTtcclxuICAgIGlmIChlcnJvcikge1xyXG4gICAgICAvLyBTaG93IGFuIGVycm9yIHRvIHlvdXIgY3VzdG9tZXIgYW5kXHJcbiAgICAgIC8vIGluc3BlY3QgeW91ciBDbG91ZCBGdW5jdGlvbiBsb2dzIGluIHRoZSBGaXJlYmFzZSBjb25zb2xlLlxyXG4gICAgICBhbGVydChgQW4gZXJyb3Igb2NjdXJlZDogJHtlcnJvci5tZXNzYWdlfWApO1xyXG4gICAgfVxyXG4gICAgaWYgKHNlc3Npb25JZCkge1xyXG4gICAgICAvLyBXZSBoYXZlIGEgc2Vzc2lvbiwgbGV0J3MgcmVkaXJlY3QgdG8gQ2hlY2tvdXRcclxuICAgICAgLy8gSW5pdCBTdHJpcGVcclxuICAgICAgY29uc3Qgc3RyaXBlID0gYXdhaXQgZ2V0U3RyaXBlKCk7IC8vIFRPIEpFU1QgRE8gWk1JQU5ZIFogUE9EU1RBV09XRUogVEVNUExBVEtJIChmdW5rY2phIGdldFN0cmlwZSB3IHBsaWt1IHN0cmlwZS5qcylcclxuICAgICAgc3RyaXBlLnJlZGlyZWN0VG9DaGVja291dCh7IHNlc3Npb25JZCB9KTtcclxuICAgIH1cclxuICB9KTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBnb1RvQmlsbGluZ1BvcnRhbCA9IGFzeW5jICgpID0+IHtcclxuICAvLyBEbyB0ZWogZnVua2NqaSBtdXNpbXkgemFpbXBvcnRvd2HEhyBmaXJlYmFzZS9mdW5jdGlvbnMgdyBwbGlrdSBmaXJlYmFzZS5qc1xyXG4gIGNvbnN0IGZ1bmN0aW9uUmVmID0gZmlyZWJhc2UuYXBwKCkuZnVuY3Rpb25zKCd1cy1jZW50cmFsMScpLmh0dHBzQ2FsbGFibGUoJ2V4dC1maXJlc3RvcmUtc3RyaXBlLXN1YnNjcmlwdGlvbnMtY3JlYXRlUG9ydGFsTGluaycpO1xyXG4gIGNvbnN0IHsgZGF0YSB9ID0gYXdhaXQgZnVuY3Rpb25SZWYoe1xyXG4gICAgcmV0dXJuVXJsOiBgJHt3aW5kb3cubG9jYXRpb24ub3JpZ2lufS9kYXNoYm9hcmQvYWNjb3VudGAsXHJcbiAgfSk7XHJcbiAgd2luZG93LmxvY2F0aW9uLmFzc2lnbihkYXRhLnVybCk7XHJcbn07XHJcblxyXG4vLyBleHBvcnQgY29uc3QgZ2V0Q3VycmVudFBsYW4gPSBhc3luYyAoKSA9PiB7XHJcbi8vICAgY29uc3QgZGVjb2RlZFRva2VuID0gYXdhaXQgZmlyZWJhc2UuYXV0aCgpLmN1cnJlbnRVc2VyLmdldElkVG9rZW5SZXN1bHQoKTtcclxuLy8gICAvLyBjb25zb2xlLmxvZyhkZWNvZGVkVG9rZW4uY2xhaW1zLnN0cmlwZVJvbGUpOyAvLyBUTyBQT0tBWlVKRSBBS1RVQUxOWSBQTEFOIFpBTE9HT1dBTkVHTyBVxbtZVEtPV05JS0EgTlAuIEJBU0lDIC8gUFJFTUlVTVxyXG4vLyAgIHJldHVybiBkZWNvZGVkVG9rZW4uY2xhaW1zLnN0cmlwZVJvbGU7XHJcbi8vIH07XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=