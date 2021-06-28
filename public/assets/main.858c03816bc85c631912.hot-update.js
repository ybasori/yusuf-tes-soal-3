/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdateyusuf_tes_soal_3"]("main",{

/***/ "./src/_redux/customer.js":
/*!********************************!*\
  !*** ./src/_redux/customer.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   \"getCustomer\": () => (/* binding */ getCustomer)\n/* harmony export */ });\n/* harmony import */ var _configs_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_configs/api */ \"./src/_configs/api.js\");\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }\n\nfunction _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err); } _next(undefined); }); }; }\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\nvar GET_CUSTOMER_LOADING = \"GET_CUSTOMER_LOADING\";\nvar GET_CUSTOMER_SUCCESS = \"GET_CUSTOMER_SUCCESS\";\nvar GET_CUSTOMER_ERROR = \"GET_CUSTOMER_ERROR\";\nvar GET_CUSTOMER_RESET = \"GET_CUSTOMER_RESET\";\nvar initState = {\n  isLoadingGetCustomer: false,\n  customer: null,\n  errorGetCustomer: null\n};\n\nvar customer = function customer() {\n  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initState;\n  var action = arguments.length > 1 ? arguments[1] : undefined;\n\n  switch (action.type) {\n    case GET_CUSTOMER_LOADING:\n      return _objectSpread(_objectSpread({}, state), {}, {\n        isLoadingGetCustomer: true,\n        customer: null,\n        errorGetCustomer: null\n      });\n\n    case GET_CUSTOMER_SUCCESS:\n      return _objectSpread(_objectSpread({}, state), {}, {\n        isLoadingGetCustomer: false,\n        customer: action.payload.data,\n        errorGetCustomer: null\n      });\n\n    case GET_CUSTOMER_ERROR:\n      return _objectSpread(_objectSpread({}, state), {}, {\n        isLoadingGetCustomer: false,\n        customer: null,\n        errorGetCustomer: action.payload\n      });\n\n    case GET_CUSTOMER_RESET:\n      return _objectSpread(_objectSpread({}, state), {}, {\n        isLoadingGetCustomer: false,\n        customer: null,\n        errorGetCustomer: null\n      });\n\n    default:\n      return _objectSpread({}, state);\n  }\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (customer);\nvar getCustomer = function getCustomer() {\n  return /*#__PURE__*/function () {\n    var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(dispatch) {\n      var res;\n      return regeneratorRuntime.wrap(function _callee$(_context) {\n        while (1) {\n          switch (_context.prev = _context.next) {\n            case 0:\n              _context.prev = 0;\n              console.log(\"ooo\");\n              dispatch({\n                type: GET_CUSTOMER_LOADING\n              });\n              _context.next = 5;\n              return _configs_api__WEBPACK_IMPORTED_MODULE_0__.default.getCustomer();\n\n            case 5:\n              res = _context.sent;\n              dispatch({\n                type: GET_CUSTOMER_SUCCESS,\n                payload: {\n                  data: res.data\n                }\n              });\n              _context.next = 12;\n              break;\n\n            case 9:\n              _context.prev = 9;\n              _context.t0 = _context[\"catch\"](0);\n              dispatch({\n                type: GET_CUSTOMER_ERROR,\n                payload: _context.t0\n              });\n\n            case 12:\n            case \"end\":\n              return _context.stop();\n          }\n        }\n      }, _callee, null, [[0, 9]]);\n    }));\n\n    return function (_x) {\n      return _ref.apply(this, arguments);\n    };\n  }();\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly95dXN1Zi10ZXMtc29hbC0zLy4vc3JjL19yZWR1eC9jdXN0b21lci5qcz9kMTFiIl0sIm5hbWVzIjpbIkdFVF9DVVNUT01FUl9MT0FESU5HIiwiR0VUX0NVU1RPTUVSX1NVQ0NFU1MiLCJHRVRfQ1VTVE9NRVJfRVJST1IiLCJHRVRfQ1VTVE9NRVJfUkVTRVQiLCJpbml0U3RhdGUiLCJpc0xvYWRpbmdHZXRDdXN0b21lciIsImN1c3RvbWVyIiwiZXJyb3JHZXRDdXN0b21lciIsInN0YXRlIiwiYWN0aW9uIiwidHlwZSIsInBheWxvYWQiLCJkYXRhIiwiZ2V0Q3VzdG9tZXIiLCJkaXNwYXRjaCIsImNvbnNvbGUiLCJsb2ciLCJhcGkiLCJyZXMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUVBLElBQU1BLG9CQUFvQixHQUFHLHNCQUE3QjtBQUNBLElBQU1DLG9CQUFvQixHQUFHLHNCQUE3QjtBQUNBLElBQU1DLGtCQUFrQixHQUFHLG9CQUEzQjtBQUNBLElBQU1DLGtCQUFrQixHQUFHLG9CQUEzQjtBQUVBLElBQU1DLFNBQVMsR0FBRztBQUNkQyxzQkFBb0IsRUFBRSxLQURSO0FBRWRDLFVBQVEsRUFBRSxJQUZJO0FBR2RDLGtCQUFnQixFQUFFO0FBSEosQ0FBbEI7O0FBTUEsSUFBTUQsUUFBUSxHQUFHLFNBQVhBLFFBQVcsR0FBK0I7QUFBQSxNQUE5QkUsS0FBOEIsdUVBQXRCSixTQUFzQjtBQUFBLE1BQVhLLE1BQVc7O0FBQzVDLFVBQVFBLE1BQU0sQ0FBQ0MsSUFBZjtBQUNJLFNBQUtWLG9CQUFMO0FBQ0ksNkNBQ09RLEtBRFA7QUFFSUgsNEJBQW9CLEVBQUUsSUFGMUI7QUFHSUMsZ0JBQVEsRUFBRSxJQUhkO0FBSUlDLHdCQUFnQixFQUFFO0FBSnRCOztBQU9KLFNBQUtOLG9CQUFMO0FBQ0ksNkNBQ09PLEtBRFA7QUFFSUgsNEJBQW9CLEVBQUUsS0FGMUI7QUFHSUMsZ0JBQVEsRUFBRUcsTUFBTSxDQUFDRSxPQUFQLENBQWVDLElBSDdCO0FBSUlMLHdCQUFnQixFQUFFO0FBSnRCOztBQU9KLFNBQUtMLGtCQUFMO0FBQ0ksNkNBQ09NLEtBRFA7QUFFSUgsNEJBQW9CLEVBQUUsS0FGMUI7QUFHSUMsZ0JBQVEsRUFBRSxJQUhkO0FBSUlDLHdCQUFnQixFQUFFRSxNQUFNLENBQUNFO0FBSjdCOztBQU9KLFNBQUtSLGtCQUFMO0FBQ0ksNkNBQ09LLEtBRFA7QUFFSUgsNEJBQW9CLEVBQUUsS0FGMUI7QUFHSUMsZ0JBQVEsRUFBRSxJQUhkO0FBSUlDLHdCQUFnQixFQUFFO0FBSnRCOztBQU1KO0FBQ0ksK0JBQVlDLEtBQVo7QUFqQ1I7QUFtQ0gsQ0FwQ0Q7O0FBcUNBLGlFQUFlRixRQUFmO0FBRU8sSUFBTU8sV0FBVyxHQUFHLFNBQWRBLFdBQWM7QUFBQTtBQUFBLHVFQUFNLGlCQUFPQyxRQUFQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRXpCQyxxQkFBTyxDQUFDQyxHQUFSLENBQVksS0FBWjtBQUNBRixzQkFBUSxDQUFDO0FBQUVKLG9CQUFJLEVBQUVWO0FBQVIsZUFBRCxDQUFSO0FBSHlCO0FBQUEscUJBSVBpQiw2REFBQSxFQUpPOztBQUFBO0FBSW5CQyxpQkFKbUI7QUFLekJKLHNCQUFRLENBQUM7QUFDTEosb0JBQUksRUFBRVQsb0JBREQ7QUFFTFUsdUJBQU8sRUFBRTtBQUFFQyxzQkFBSSxFQUFFTSxHQUFHLENBQUNOO0FBQVo7QUFGSixlQUFELENBQVI7QUFMeUI7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFVekJFLHNCQUFRLENBQUM7QUFBRUosb0JBQUksRUFBRVIsa0JBQVI7QUFBNEJTLHVCQUFPO0FBQW5DLGVBQUQsQ0FBUjs7QUFWeUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBTjs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLENBQXBCIiwiZmlsZSI6Ii4vc3JjL19yZWR1eC9jdXN0b21lci5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBhcGkgZnJvbSBcIi4uL19jb25maWdzL2FwaVwiO1xyXG5cclxuY29uc3QgR0VUX0NVU1RPTUVSX0xPQURJTkcgPSBcIkdFVF9DVVNUT01FUl9MT0FESU5HXCI7XHJcbmNvbnN0IEdFVF9DVVNUT01FUl9TVUNDRVNTID0gXCJHRVRfQ1VTVE9NRVJfU1VDQ0VTU1wiO1xyXG5jb25zdCBHRVRfQ1VTVE9NRVJfRVJST1IgPSBcIkdFVF9DVVNUT01FUl9FUlJPUlwiO1xyXG5jb25zdCBHRVRfQ1VTVE9NRVJfUkVTRVQgPSBcIkdFVF9DVVNUT01FUl9SRVNFVFwiO1xyXG5cclxuY29uc3QgaW5pdFN0YXRlID0ge1xyXG4gICAgaXNMb2FkaW5nR2V0Q3VzdG9tZXI6IGZhbHNlLFxyXG4gICAgY3VzdG9tZXI6IG51bGwsXHJcbiAgICBlcnJvckdldEN1c3RvbWVyOiBudWxsLFxyXG59O1xyXG5cclxuY29uc3QgY3VzdG9tZXIgPSAoc3RhdGUgPSBpbml0U3RhdGUsIGFjdGlvbikgPT4ge1xyXG4gICAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xyXG4gICAgICAgIGNhc2UgR0VUX0NVU1RPTUVSX0xPQURJTkc6XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgICAgICAgIGlzTG9hZGluZ0dldEN1c3RvbWVyOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgY3VzdG9tZXI6IG51bGwsXHJcbiAgICAgICAgICAgICAgICBlcnJvckdldEN1c3RvbWVyOiBudWxsLFxyXG4gICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICBjYXNlIEdFVF9DVVNUT01FUl9TVUNDRVNTOlxyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICAgICAgICBpc0xvYWRpbmdHZXRDdXN0b21lcjogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICBjdXN0b21lcjogYWN0aW9uLnBheWxvYWQuZGF0YSxcclxuICAgICAgICAgICAgICAgIGVycm9yR2V0Q3VzdG9tZXI6IG51bGwsXHJcbiAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgIGNhc2UgR0VUX0NVU1RPTUVSX0VSUk9SOlxyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICAgICAgICBpc0xvYWRpbmdHZXRDdXN0b21lcjogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICBjdXN0b21lcjogbnVsbCxcclxuICAgICAgICAgICAgICAgIGVycm9yR2V0Q3VzdG9tZXI6IGFjdGlvbi5wYXlsb2FkLFxyXG4gICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICBjYXNlIEdFVF9DVVNUT01FUl9SRVNFVDpcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgICAgICAgaXNMb2FkaW5nR2V0Q3VzdG9tZXI6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgY3VzdG9tZXI6IG51bGwsXHJcbiAgICAgICAgICAgICAgICBlcnJvckdldEN1c3RvbWVyOiBudWxsLFxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgIHJldHVybiB7IC4uLnN0YXRlIH07XHJcbiAgICB9XHJcbn07XHJcbmV4cG9ydCBkZWZhdWx0IGN1c3RvbWVyO1xyXG5cclxuZXhwb3J0IGNvbnN0IGdldEN1c3RvbWVyID0gKCkgPT4gYXN5bmMgKGRpc3BhdGNoKSA9PiB7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwib29vXCIpO1xyXG4gICAgICAgIGRpc3BhdGNoKHsgdHlwZTogR0VUX0NVU1RPTUVSX0xPQURJTkcgfSk7XHJcbiAgICAgICAgY29uc3QgcmVzID0gYXdhaXQgYXBpLmdldEN1c3RvbWVyKCk7XHJcbiAgICAgICAgZGlzcGF0Y2goe1xyXG4gICAgICAgICAgICB0eXBlOiBHRVRfQ1VTVE9NRVJfU1VDQ0VTUyxcclxuICAgICAgICAgICAgcGF5bG9hZDogeyBkYXRhOiByZXMuZGF0YSB9LFxyXG4gICAgICAgIH0pO1xyXG4gICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgICAgZGlzcGF0Y2goeyB0eXBlOiBHRVRfQ1VTVE9NRVJfRVJST1IsIHBheWxvYWQ6IGVyciB9KTtcclxuICAgIH1cclxufTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/_redux/customer.js\n");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ "use strict";
/******/ 
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("26cffbb96c5a4524207d")
/******/ })();
/******/ 
/******/ }
);