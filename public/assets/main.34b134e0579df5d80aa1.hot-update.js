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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   \"getCustomer\": () => (/* binding */ getCustomer),\n/* harmony export */   \"addCustomer\": () => (/* binding */ addCustomer),\n/* harmony export */   \"resetAddCustomer\": () => (/* binding */ resetAddCustomer)\n/* harmony export */ });\n/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _configs_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../_configs/api */ \"./src/_configs/api.js\");\n\n\n\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n\nvar GET_CUSTOMER_LOADING = \"GET_CUSTOMER_LOADING\";\nvar GET_CUSTOMER_SUCCESS = \"GET_CUSTOMER_SUCCESS\";\nvar GET_CUSTOMER_ERROR = \"GET_CUSTOMER_ERROR\";\nvar GET_CUSTOMER_RESET = \"GET_CUSTOMER_RESET\";\nvar ADD_CUSTOMER_LOADING = \"ADD_CUSTOMER_LOADING\";\nvar ADD_CUSTOMER_SUCCESS = \"ADD_CUSTOMER_SUCCESS\";\nvar ADD_CUSTOMER_ERROR = \"ADD_CUSTOMER_ERROR\";\nvar ADD_CUSTOMER_RESET = \"ADD_CUSTOMER_RESET\";\nvar initState = {\n  isLoadingGetCustomer: false,\n  customer: null,\n  errorGetCustomer: null,\n  isLoadingAddCustomer: false,\n  successAddCustomer: null,\n  errorAddCustomer: null\n};\n\nvar customer = function customer() {\n  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initState;\n  var action = arguments.length > 1 ? arguments[1] : undefined;\n\n  switch (action.type) {\n    case GET_CUSTOMER_LOADING:\n      return _objectSpread(_objectSpread({}, state), {}, {\n        isLoadingGetCustomer: true,\n        customer: null,\n        errorGetCustomer: null\n      });\n\n    case GET_CUSTOMER_SUCCESS:\n      return _objectSpread(_objectSpread({}, state), {}, {\n        isLoadingGetCustomer: false,\n        customer: action.payload.data,\n        errorGetCustomer: null\n      });\n\n    case GET_CUSTOMER_ERROR:\n      return _objectSpread(_objectSpread({}, state), {}, {\n        isLoadingGetCustomer: false,\n        customer: null,\n        errorGetCustomer: action.payload\n      });\n\n    case GET_CUSTOMER_RESET:\n      return _objectSpread(_objectSpread({}, state), {}, {\n        isLoadingGetCustomer: false,\n        customer: null,\n        errorGetCustomer: null\n      });\n\n    case ADD_CUSTOMER_LOADING:\n      return _objectSpread(_objectSpread({}, state), {}, {\n        isLoadingAddCustomer: true,\n        successAddCustomer: null,\n        errorGetCustomer: null\n      });\n\n    case ADD_CUSTOMER_SUCCESS:\n      return _objectSpread(_objectSpread({}, state), {}, {\n        isLoadingAddCustomer: false,\n        successAddCustomer: action.payload.data,\n        errorAddCustomer: null\n      });\n\n    case ADD_CUSTOMER_ERROR:\n      return _objectSpread(_objectSpread({}, state), {}, {\n        isLoadingAddCustomer: false,\n        successAddCustomer: null,\n        errorAddCustomer: action.payload\n      });\n\n    case ADD_CUSTOMER_RESET:\n      return _objectSpread(_objectSpread({}, state), {}, {\n        isLoadingAddCustomer: false,\n        successAddCustomer: null,\n        errorAddCustomer: null\n      });\n\n    default:\n      return _objectSpread({}, state);\n  }\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (customer);\nvar getCustomer = function getCustomer() {\n  return /*#__PURE__*/function () {\n    var _ref = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee(dispatch) {\n      var res;\n      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee$(_context) {\n        while (1) {\n          switch (_context.prev = _context.next) {\n            case 0:\n              _context.prev = 0;\n              dispatch({\n                type: GET_CUSTOMER_LOADING\n              });\n              _context.next = 4;\n              return _configs_api__WEBPACK_IMPORTED_MODULE_3__.default.getCustomer();\n\n            case 4:\n              res = _context.sent;\n              dispatch({\n                type: GET_CUSTOMER_SUCCESS,\n                payload: {\n                  data: res.data.data\n                }\n              });\n              _context.next = 11;\n              break;\n\n            case 8:\n              _context.prev = 8;\n              _context.t0 = _context[\"catch\"](0);\n              dispatch({\n                type: GET_CUSTOMER_ERROR,\n                payload: _context.t0\n              });\n\n            case 11:\n            case \"end\":\n              return _context.stop();\n          }\n        }\n      }, _callee, null, [[0, 8]]);\n    }));\n\n    return function (_x) {\n      return _ref.apply(this, arguments);\n    };\n  }();\n};\nvar addCustomer = function addCustomer(form) {\n  return /*#__PURE__*/function () {\n    var _ref2 = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee2(dispatch) {\n      var res;\n      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee2$(_context2) {\n        while (1) {\n          switch (_context2.prev = _context2.next) {\n            case 0:\n              _context2.prev = 0;\n              dispatch({\n                type: ADD_CUSTOMER_LOADING\n              });\n              _context2.next = 4;\n              return _configs_api__WEBPACK_IMPORTED_MODULE_3__.default.addCustomer(form);\n\n            case 4:\n              res = _context2.sent;\n              dispatch({\n                type: ADD_CUSTOMER_SUCCESS,\n                payload: true\n              });\n              _context2.next = 11;\n              break;\n\n            case 8:\n              _context2.prev = 8;\n              _context2.t0 = _context2[\"catch\"](0);\n              dispatch({\n                type: ADD_CUSTOMER_ERROR,\n                payload: _context2.t0\n              });\n\n            case 11:\n            case \"end\":\n              return _context2.stop();\n          }\n        }\n      }, _callee2, null, [[0, 8]]);\n    }));\n\n    return function (_x2) {\n      return _ref2.apply(this, arguments);\n    };\n  }();\n};\nvar resetAddCustomer = function resetAddCustomer() {\n  return /*#__PURE__*/function () {\n    var _ref3 = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee3(dispatch) {\n      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee3$(_context3) {\n        while (1) {\n          switch (_context3.prev = _context3.next) {\n            case 0:\n              dispatch({\n                type: ADD_CUSTOMER_RESET\n              });\n\n            case 1:\n            case \"end\":\n              return _context3.stop();\n          }\n        }\n      }, _callee3);\n    }));\n\n    return function (_x3) {\n      return _ref3.apply(this, arguments);\n    };\n  }();\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly95dXN1Zi10ZXMtc29hbC0zLy4vc3JjL19yZWR1eC9jdXN0b21lci5qcz9kMTFiIl0sIm5hbWVzIjpbIkdFVF9DVVNUT01FUl9MT0FESU5HIiwiR0VUX0NVU1RPTUVSX1NVQ0NFU1MiLCJHRVRfQ1VTVE9NRVJfRVJST1IiLCJHRVRfQ1VTVE9NRVJfUkVTRVQiLCJBRERfQ1VTVE9NRVJfTE9BRElORyIsIkFERF9DVVNUT01FUl9TVUNDRVNTIiwiQUREX0NVU1RPTUVSX0VSUk9SIiwiQUREX0NVU1RPTUVSX1JFU0VUIiwiaW5pdFN0YXRlIiwiaXNMb2FkaW5nR2V0Q3VzdG9tZXIiLCJjdXN0b21lciIsImVycm9yR2V0Q3VzdG9tZXIiLCJpc0xvYWRpbmdBZGRDdXN0b21lciIsInN1Y2Nlc3NBZGRDdXN0b21lciIsImVycm9yQWRkQ3VzdG9tZXIiLCJzdGF0ZSIsImFjdGlvbiIsInR5cGUiLCJwYXlsb2FkIiwiZGF0YSIsImdldEN1c3RvbWVyIiwiZGlzcGF0Y2giLCJhcGkiLCJyZXMiLCJhZGRDdXN0b21lciIsImZvcm0iLCJyZXNldEFkZEN1c3RvbWVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBRUEsSUFBTUEsb0JBQW9CLEdBQUcsc0JBQTdCO0FBQ0EsSUFBTUMsb0JBQW9CLEdBQUcsc0JBQTdCO0FBQ0EsSUFBTUMsa0JBQWtCLEdBQUcsb0JBQTNCO0FBQ0EsSUFBTUMsa0JBQWtCLEdBQUcsb0JBQTNCO0FBRUEsSUFBTUMsb0JBQW9CLEdBQUcsc0JBQTdCO0FBQ0EsSUFBTUMsb0JBQW9CLEdBQUcsc0JBQTdCO0FBQ0EsSUFBTUMsa0JBQWtCLEdBQUcsb0JBQTNCO0FBQ0EsSUFBTUMsa0JBQWtCLEdBQUcsb0JBQTNCO0FBRUEsSUFBTUMsU0FBUyxHQUFHO0FBQ2RDLHNCQUFvQixFQUFFLEtBRFI7QUFFZEMsVUFBUSxFQUFFLElBRkk7QUFHZEMsa0JBQWdCLEVBQUUsSUFISjtBQUlkQyxzQkFBb0IsRUFBRSxL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LHFCQUdYa0IsNkRBQUEsQ0FBZ0JHLElBQWhCLENBSFc7O0FBQUE7QUFHdkJGLGlCQUh1QjtBQUk3QkYsc0JBQVEsQ0FBQztBQUNMSixvQkFBSSxFQUFFWixvQkFERDtBQUVMYSx1QkFBTyxFQUFFO0FBRkosZUFBRCxDQUFSO0FBSjZCO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBUzdCRyxzQkFBUSxDQUFDO0FBQUVKLG9CQUFJLEVBQUVYLGtCQUFSO0FBQTRCWSx1QkFBTztBQUFuQyxlQUFELENBQVI7O0FBVDZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQVY7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxDQUFwQjtBQWFBLElBQU1RLGdCQUFnQixHQUFHLFNBQW5CQSxnQkFBbUI7QUFBQTtBQUFBLHNMQUFNLGtCQUFPTCxRQUFQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDbENBLHNCQUFRLENBQUM7QUFBRUosb0JBQUksRUFBRVY7QUFBUixlQUFELENBQVI7O0FBRGtDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQU47O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxDQUF6QiIsImZpbGUiOiIuL3NyYy9fcmVkdXgvY3VzdG9tZXIuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgYXBpIGZyb20gXCIuLi9fY29uZmlncy9hcGlcIjtcclxuXHJcbmNvbnN0IEdFVF9DVVNUT01FUl9MT0FESU5HID0gXCJHRVRfQ1VTVE9NRVJfTE9BRElOR1wiO1xyXG5jb25zdCBHRVRfQ1VTVE9NRVJfU1VDQ0VTUyA9IFwiR0VUX0NVU1RPTUVSX1NVQ0NFU1NcIjtcclxuY29uc3QgR0VUX0NVU1RPTUVSX0VSUk9SID0gXCJHRVRfQ1VTVE9NRVJfRVJST1JcIjtcclxuY29uc3QgR0VUX0NVU1RPTUVSX1JFU0VUID0gXCJHRVRfQ1VTVE9NRVJfUkVTRVRcIjtcclxuXHJcbmNvbnN0IEFERF9DVVNUT01FUl9MT0FESU5HID0gXCJBRERfQ1VTVE9NRVJfTE9BRElOR1wiO1xyXG5jb25zdCBBRERfQ1VTVE9NRVJfU1VDQ0VTUyA9IFwiQUREX0NVU1RPTUVSX1NVQ0NFU1NcIjtcclxuY29uc3QgQUREX0NVU1RPTUVSX0VSUk9SID0gXCJBRERfQ1VTVE9NRVJfRVJST1JcIjtcclxuY29uc3QgQUREX0NVU1RPTUVSX1JFU0VUID0gXCJBRERfQ1VTVE9NRVJfUkVTRVRcIjtcclxuXHJcbmNvbnN0IGluaXRTdGF0ZSA9IHtcclxuICAgIGlzTG9hZGluZ0dldEN1c3RvbWVyOiBmYWxzZSxcclxuICAgIGN1c3RvbWVyOiBudWxsLFxyXG4gICAgZXJyb3JHZXRDdXN0b21lcjogbnVsbCxcclxuICAgIGlzTG9hZGluZ0FkZEN1c3RvbWVyOiBmYWxzZSxcclxuICAgIHN1Y2Nlc3NBZGRDdXN0b21lcjogbnVsbCxcclxuICAgIGVycm9yQWRkQ3VzdG9tZXI6IG51bGwsXHJcbn07XHJcblxyXG5jb25zdCBjdXN0b21lciA9IChzdGF0ZSA9IGluaXRTdGF0ZSwgYWN0aW9uKSA9PiB7XHJcbiAgICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XHJcbiAgICAgICAgY2FzZSBHRVRfQ1VTVE9NRVJfTE9BRElORzpcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgICAgICAgaXNMb2FkaW5nR2V0Q3VzdG9tZXI6IHRydWUsXHJcbiAgICAgICAgICAgICAgICBjdXN0b21lcjogbnVsbCxcclxuICAgICAgICAgICAgICAgIGVycm9yR2V0Q3VzdG9tZXI6IG51bGwsXHJcbiAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgIGNhc2UgR0VUX0NVU1RPTUVSX1NVQ0NFU1M6XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgICAgICAgIGlzTG9hZGluZ0dldEN1c3RvbWVyOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIGN1c3RvbWVyOiBhY3Rpb24ucGF5bG9hZC5kYXRhLFxyXG4gICAgICAgICAgICAgICAgZXJyb3JHZXRDdXN0b21lcjogbnVsbCxcclxuICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgY2FzZSBHRVRfQ1VTVE9NRVJfRVJST1I6XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgICAgICAgIGlzTG9hZGluZ0dldEN1c3RvbWVyOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIGN1c3RvbWVyOiBudWxsLFxyXG4gICAgICAgICAgICAgICAgZXJyb3JHZXRDdXN0b21lcjogYWN0aW9uLnBheWxvYWQsXHJcbiAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgIGNhc2UgR0VUX0NVU1RPTUVSX1JFU0VUOlxyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICAgICAgICBpc0xvYWRpbmdHZXRDdXN0b21lcjogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICBjdXN0b21lcjogbnVsbCxcclxuICAgICAgICAgICAgICAgIGVycm9yR2V0Q3VzdG9tZXI6IG51bGwsXHJcbiAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgIGNhc2UgQUREX0NVU1RPTUVSX0xPQURJTkc6XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgICAgICAgIGlzTG9hZGluZ0FkZEN1c3RvbWVyOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgc3VjY2Vzc0FkZEN1c3RvbWVyOiBudWxsLFxyXG4gICAgICAgICAgICAgICAgZXJyb3JHZXRDdXN0b21lcjogbnVsbCxcclxuICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgY2FzZSBBRERfQ1VTVE9NRVJfU1VDQ0VTUzpcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgICAgICAgaXNMb2FkaW5nQWRkQ3VzdG9tZXI6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgc3VjY2Vzc0FkZEN1c3RvbWVyOiBhY3Rpb24ucGF5bG9hZC5kYXRhLFxyXG4gICAgICAgICAgICAgICAgZXJyb3JBZGRDdXN0b21lcjogbnVsbCxcclxuICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgY2FzZSBBRERfQ1VTVE9NRVJfRVJST1I6XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgICAgICAgIGlzTG9hZGluZ0FkZEN1c3RvbWVyOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIHN1Y2Nlc3NBZGRDdXN0b21lcjogbnVsbCxcclxuICAgICAgICAgICAgICAgIGVycm9yQWRkQ3VzdG9tZXI6IGFjdGlvbi5wYXlsb2FkLFxyXG4gICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICBjYXNlIEFERF9DVVNUT01FUl9SRVNFVDpcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgICAgICAgaXNMb2FkaW5nQWRkQ3VzdG9tZXI6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgc3VjY2Vzc0FkZEN1c3RvbWVyOiBudWxsLFxyXG4gICAgICAgICAgICAgICAgZXJyb3JBZGRDdXN0b21lcjogbnVsbCxcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICByZXR1cm4geyAuLi5zdGF0ZSB9O1xyXG4gICAgfVxyXG59O1xyXG5leHBvcnQgZGVmYXVsdCBjdXN0b21lcjtcclxuXHJcbmV4cG9ydCBjb25zdCBnZXRDdXN0b21lciA9ICgpID0+IGFzeW5jIChkaXNwYXRjaCkgPT4ge1xyXG4gICAgdHJ5IHtcclxuICAgICAgICBkaXNwYXRjaCh7IHR5cGU6IEdFVF9DVVNUT01FUl9MT0FESU5HIH0pO1xyXG4gICAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGFwaS5nZXRDdXN0b21lcigpO1xyXG4gICAgICAgIGRpc3BhdGNoKHtcclxuICAgICAgICAgICAgdHlwZTogR0VUX0NVU1RPTUVSX1NVQ0NFU1MsXHJcbiAgICAgICAgICAgIHBheWxvYWQ6IHsgZGF0YTogcmVzLmRhdGEuZGF0YSB9LFxyXG4gICAgICAgIH0pO1xyXG4gICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgICAgZGlzcGF0Y2goeyB0eXBlOiBHRVRfQ1VTVE9NRVJfRVJST1IsIHBheWxvYWQ6IGVyciB9KTtcclxuICAgIH1cclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBhZGRDdXN0b21lciA9IChmb3JtKSA9PiBhc3luYyAoZGlzcGF0Y2gpID0+IHtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgZGlzcGF0Y2goeyB0eXBlOiBBRERfQ1VTVE9NRVJfTE9BRElORyB9KTtcclxuICAgICAgICBjb25zdCByZXMgPSBhd2FpdCBhcGkuYWRkQ3VzdG9tZXIoZm9ybSk7XHJcbiAgICAgICAgZGlzcGF0Y2goe1xyXG4gICAgICAgICAgICB0eXBlOiBBRERfQ1VTVE9NRVJfU1VDQ0VTUyxcclxuICAgICAgICAgICAgcGF5bG9hZDogdHJ1ZSxcclxuICAgICAgICB9KTtcclxuICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICAgIGRpc3BhdGNoKHsgdHlwZTogQUREX0NVU1RPTUVSX0VSUk9SLCBwYXlsb2FkOiBlcnIgfSk7XHJcbiAgICB9XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgcmVzZXRBZGRDdXN0b21lciA9ICgpID0+IGFzeW5jIChkaXNwYXRjaCkgPT4ge1xyXG4gICAgZGlzcGF0Y2goeyB0eXBlOiBBRERfQ1VTVE9NRVJfUkVTRVQgfSk7XHJcbn07XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/_redux/customer.js\n");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ "use strict";
/******/ 
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("48241fdd0d357b740d64")
/******/ })();
/******/ 
/******/ }
);