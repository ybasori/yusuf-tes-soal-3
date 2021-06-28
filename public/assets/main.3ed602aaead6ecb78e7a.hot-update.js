/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdateyusuf_tes_soal_3"]("main",{

/***/ "./src/_configs/api.js":
/*!*****************************!*\
  !*** ./src/_configs/api.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);\n\nvar instance = axios__WEBPACK_IMPORTED_MODULE_0___default().create({\n  baseURL: \"/\",\n  timeout: 1000\n});\nvar api = {\n  getCustomer: function getCustomer() {\n    return instance.get(\"/customer\");\n  },\n  addCustomer: function addCustomer(data) {\n    return instance.post(\"/customer\", data);\n  },\n  editCustomer: function editCustomer(data) {\n    return instance.put(\"/customer/\".concat(data.id), data);\n  },\n  deleteCustomer: function deleteCustomer(data) {\n    return instance.delete(\"/customer/\".concat(data));\n  }\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (api);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly95dXN1Zi10ZXMtc29hbC0zLy4vc3JjL19jb25maWdzL2FwaS5qcz8xNDk0Il0sIm5hbWVzIjpbImluc3RhbmNlIiwiQXhpb3MiLCJiYXNlVVJMIiwidGltZW91dCIsImFwaSIsImdldEN1c3RvbWVyIiwiZ2V0IiwiYWRkQ3VzdG9tZXIiLCJkYXRhIiwicG9zdCIsImVkaXRDdXN0b21lciIsInB1dCIsImlkIiwiZGVsZXRlQ3VzdG9tZXIiLCJkZWxldGUiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBO0FBRUEsSUFBTUEsUUFBUSxHQUFHQyxtREFBQSxDQUFhO0FBQzFCQyxTQUFPLEVBQUUsR0FEaUI7QUFFMUJDLFNBQU8sRUFBRTtBQUZpQixDQUFiLENBQWpCO0FBS0EsSUFBTUMsR0FBRyxHQUFHO0FBQ1JDLGFBQVcsRUFBRTtBQUFBLFdBQU1MLFFBQVEsQ0FBQ00sR0FBVCxhQUFOO0FBQUEsR0FETDtBQUVSQyxhQUFXLEVBQUUscUJBQUNDLElBQUQ7QUFBQSxXQUFVUixRQUFRLENBQUNTLElBQVQsY0FBMkJELElBQTNCLENBQVY7QUFBQSxHQUZMO0FBR1JFLGNBQVksRUFBRSxzQkFBQ0YsSUFBRDtBQUFBLFdBQVVSLFFBQVEsQ0FBQ1csR0FBVCxxQkFBMEJILElBQUksQ0FBQ0ksRUFBL0IsR0FBcUNKLElBQXJDLENBQVY7QUFBQSxHQUhOO0FBSVJLLGdCQUFjLEVBQUUsd0JBQUNMLElBQUQ7QUFBQSxXQUFVUixRQUFRLENBQUNjLE1BQVQscUJBQTZCTixJQUE3QixFQUFWO0FBQUE7QUFKUixDQUFaO0FBT0EsaUVBQWVKLEdBQWYiLCJmaWxlIjoiLi9zcmMvX2NvbmZpZ3MvYXBpLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5cclxuY29uc3QgaW5zdGFuY2UgPSBBeGlvcy5jcmVhdGUoe1xyXG4gICAgYmFzZVVSTDogXCIvXCIsXHJcbiAgICB0aW1lb3V0OiAxMDAwLFxyXG59KTtcclxuXHJcbmNvbnN0IGFwaSA9IHtcclxuICAgIGdldEN1c3RvbWVyOiAoKSA9PiBpbnN0YW5jZS5nZXQoYC9jdXN0b21lcmApLFxyXG4gICAgYWRkQ3VzdG9tZXI6IChkYXRhKSA9PiBpbnN0YW5jZS5wb3N0KGAvY3VzdG9tZXJgLCBkYXRhKSxcclxuICAgIGVkaXRDdXN0b21lcjogKGRhdGEpID0+IGluc3RhbmNlLnB1dChgL2N1c3RvbWVyLyR7ZGF0YS5pZH1gLCBkYXRhKSxcclxuICAgIGRlbGV0ZUN1c3RvbWVyOiAoZGF0YSkgPT4gaW5zdGFuY2UuZGVsZXRlKGAvY3VzdG9tZXIvJHtkYXRhfWApLFxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgYXBpO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/_configs/api.js\n");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ "use strict";
/******/ 
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("a5aba6844d3656eef1e0")
/******/ })();
/******/ 
/******/ }
);