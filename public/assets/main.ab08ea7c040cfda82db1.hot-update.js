/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdateyusuf_tes_soal_3"]("main",{

/***/ "./src/App.js":
/*!********************!*\
  !*** ./src/App.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var _components_Modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/Modal */ \"./src/components/Modal.js\");\n/* harmony import */ var _App_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./App.scss */ \"./src/App.scss\");\n/* harmony import */ var _redux_customer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./_redux/customer */ \"./src/_redux/customer.js\");\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nfunction _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }\n\nfunction _nonIterableRest() { throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\nfunction _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== \"undefined\" && arr[Symbol.iterator] || arr[\"@@iterator\"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i[\"return\"] != null) _i[\"return\"](); } finally { if (_d) throw _e; } } return _arr; }\n\nfunction _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }\n\n\n\n\n\n\nvar App = function App() {\n  var dispatch = useDispatch();\n  var customerState = useSelector(function (state) {\n    return state.customer;\n  });\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),\n      _useState2 = _slicedToArray(_useState, 2),\n      isModalAddOpen = _useState2[0],\n      setIsModalAddOpen = _useState2[1];\n\n  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({\n    code: \"\",\n    name: \"\",\n    email: \"\",\n    status: \"\"\n  }),\n      _useState4 = _slicedToArray(_useState3, 2),\n      form = _useState4[0],\n      setForm = _useState4[1];\n\n  var onSubmit = function onSubmit(e) {\n    e.preventDefault();\n  };\n\n  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {\n    if (customerState.customer === null) {\n      dispatch((0,_redux_customer__WEBPACK_IMPORTED_MODULE_3__.getCustomer)());\n    }\n  }, [customerState.customer]);\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n    className: \"app\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n    className: \"sidebar\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n    className: \"app-name\"\n  }, \"JARI VISIBILITY\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n    className: \"description\"\n  }, \"Team Jarvis Development\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n    className: \"sparator\"\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n    className: \"menu\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"ul\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"li\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"i\", {\n    className: \"fas fa-chart-pie\"\n  }), \" Dashboard\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"li\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"i\", {\n    className: \"fas fa-chart-area\"\n  }), \"Member Journey\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"li\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"i\", {\n    className: \"fas fa-map-marker-alt\"\n  }), \"Last Location\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"li\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"i\", {\n    className: \"fas fa-briefcase\"\n  }), \"Customer\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"li\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"i\", {\n    className: \"fas fa-edit\"\n  }), \"Task\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"li\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"i\", {\n    className: \"fas fa-sliders-h\"\n  }), \"Configuration\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"li\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"i\", {\n    className: \"fas fa-list-alt\"\n  }), \"Report\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"li\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"i\", {\n    className: \"fas fa-sign-out-alt\"\n  }), \"Sign Out\")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n    className: \"content\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n    className: \"navbar\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n    className: \"lang\"\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n    className: \"account\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n    className: \"photo\"\n  }, \"A\"), \"Agus\")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n    className: \"page-name\"\n  }, \"Customer\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n    className: \"action\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"button\", {\n    className: \"btn-blue\",\n    onClick: function onClick() {\n      return setIsModalAddOpen(true);\n    }\n  }, \"Add\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"button\", {\n    className: \"btn-green\"\n  }, \"Upload\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"form\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"input\", {\n    placeholder: \"Search Customer\"\n  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n    className: \"datatable\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"button\", {\n    className: \"btn-orange btn-download\"\n  }, \"Download Template\"))), isModalAddOpen && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_Modal__WEBPACK_IMPORTED_MODULE_1__.default, {\n    onClose: function onClose(bool) {\n      return setIsModalAddOpen(bool);\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"form\", {\n    onSubmit: onSubmit\n  }, JSON.stringify(form), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"input\", {\n    placeholder: \"code\",\n    name: \"code\",\n    onChange: function onChange(e) {\n      return setForm(_objectSpread(_objectSpread({}, form), {}, _defineProperty({}, e.currentTarget.name, e.currentTarget.value)));\n    },\n    required: true\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"input\", {\n    placeholder: \"name\",\n    name: \"name\",\n    onChange: function onChange(e) {\n      return setForm(_objectSpread(_objectSpread({}, form), {}, _defineProperty({}, e.currentTarget.name, e.currentTarget.value)));\n    },\n    required: true\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"input\", {\n    placeholder: \"email\",\n    name: \"email\",\n    onChange: function onChange(e) {\n      return setForm(_objectSpread(_objectSpread({}, form), {}, _defineProperty({}, e.currentTarget.name, e.currentTarget.value)));\n    },\n    required: true\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"input\", {\n    placeholder: \"status\",\n    name: \"status\",\n    onChange: function onChange(e) {\n      return setForm(_objectSpread(_objectSpread({}, form), {}, _defineProperty({}, e.currentTarget.name, e.currentTarget.value)));\n    },\n    required: true\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"button\", {\n    type: \"submit\"\n  }, \"submit\"))));\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (App);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly95dXN1Zi10ZXMtc29hbC0zLy4vc3JjL0FwcC5qcz9iZTk0Il0sIm5hbWVzIjpbIkFwcCIsImRpc3BhdGNoIiwidXNlRGlzcGF0Y2giLCJjdXN0b21lclN0YXRlIiwidXNlU2VsZWN0b3IiLCJzdGF0ZSIsImN1c3RvbWVyIiwidXNlU3RhdGUiLCJpc01vZGFsQWRkT3BlbiIsInNldElzTW9kYWxBZGRPcGVuIiwiY29kZSIsIm5hbWUiLCJlbWFpbCIsInN0YXR1cyIsImZvcm0iLCJzZXRGb3JtIiwib25TdWJtaXQiLCJlIiwicHJldmVudERlZmF1bHQiLCJ1c2VFZmZlY3QiLCJnZXRDdXN0b21lciIsImJvb2wiLCJKU09OIiwic3RyaW5naWZ5IiwiY3VycmVudFRhcmdldCIsInZhbHVlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBRUE7QUFDQTtBQUNBOztBQUVBLElBQU1BLEdBQUcsR0FBRyxTQUFOQSxHQUFNLEdBQU07QUFDZCxNQUFNQyxRQUFRLEdBQUdDLFdBQVcsRUFBNUI7QUFDQSxNQUFNQyxhQUFhLEdBQUdDLFdBQVcsQ0FBQyxVQUFDQyxLQUFEO0FBQUEsV0FBV0EsS0FBSyxDQUFDQyxRQUFqQjtBQUFBLEdBQUQsQ0FBakM7O0FBQ0Esa0JBQTRDQywrQ0FBUSxDQUFDLEtBQUQsQ0FBcEQ7QUFBQTtBQUFBLE1BQU9DLGNBQVA7QUFBQSxNQUF1QkMsaUJBQXZCOztBQUNBLG1CQUF3QkYsK0NBQVEsQ0FBQztBQUM3QkcsUUFBSSxFQUFFLEVBRHVCO0FBRTdCQyxRQUFJLEVBQUUsRUFGdUI7QUFHN0JDLFNBQUssRUFBRSxFQUhzQjtBQUk3QkMsVUFBTSxFQUFFO0FBSnFCLEdBQUQsQ0FBaEM7QUFBQTtBQUFBLE1BQU9DLElBQVA7QUFBQSxNQUFhQyxPQUFiOztBQU9BLE1BQU1DLFFBQVEsR0FBRyxTQUFYQSxRQUFXLENBQUNDLENBQUQsRUFBTztBQUNwQkEsS0FBQyxDQUFDQyxjQUFGO0FBQ0gsR0FGRDs7QUFHQUMsa0RBQVMsQ0FBQyxZQUFNO0FBQ1osUUFBSWhCLGFBQWEsQ0FBQ0csUUFBZCxLQUEyQixJQUEvQixFQUFxQztBQUNqQ0wsY0FBUSxDQUFDbUIsNERBQVcsRUFBWixDQUFSO0FBQ0g7QUFDSixHQUpRLEVBSU4sQ0FBQ2pCLGFBQWEsQ0FBQ0csUUFBZixDQUpNLENBQVQ7QUFLQSxzQkFDSTtBQUFLLGFBQVMsRUFBQztBQUFmLGtCQUNJO0FBQUssYUFBUyxFQUFDO0FBQWYsa0JBQ0k7QUFBSyxhQUFTLEVBQUM7QUFBZix1QkFESixlQUVJO0FBQUssYUFBUyxFQUFDO0FBQWYsK0JBRkosZUFHSTtBQUFLLGFBQVMsRUFBQztBQUFmLElBSEosZUFJSTtBQUFLLGFBQVMsRUFBQztBQUFmLGtCQUNJLDBFQUNJLDBFQUNJO0FBQUcsYUFBUyxFQUFDO0FBQWIsSUFESixlQURKLGVBSUksMEVBQ0k7QUFBRyxhQUFTLEVBQUM7QUFBYixJQURKLG1CQUpKLGVBT0ksMEVBQ0k7QUFBRyxhQUFTLEVBQUM7QUFBYixJQURKLGtCQVBKLGVBV0ksMEVBQ0k7QUFBRyxhQUFTLEVBQUM7QUFBYixJQURKLGFBWEosZUFjSSwwRUFDSTtBQUFHLGFBQVMsRUFBQztBQUFiLElBREosU0FkSixlQWlCSSwwRUFDSTtBQUFHLGFBQVMsRUFBQztBQUFiLElBREosa0JBakJKLGVBb0JJLDBFQUNJO0FBQUcsYUFBUyxFQUFDO0FBQWIsSUFESixXQXBCSixlQXVCSSwwRUFDSTtBQUFHLGFBQVMsRUFBQztBQUFiLElBREosYUF2QkosQ0FESixDQUpKLENBREosZUFtQ0k7QUFBSyxhQUFTLEVBQUM7QUFBZixrQkFDSTtBQUFLLGFBQVMsRUFBQztBQUFmLGtCQUNJO0FBQUssYUFBUyxFQUFDO0FBQWYsSUFESixlQUVJO0FBQUssYUFBUyxFQUFDO0FBQWYsa0JBQ0k7QUFBSyxhQUFTLEVBQUM7QUFBZixTQURKLFNBRkosQ0FESixlQVFJO0FBQUssYUFBUyxFQUFDO0FBQWYsZ0JBUkosZUFTSTtBQUFLLGFBQVMsRUFBQztBQUFmLGtCQUNJO0FBQ0ksYUFBUyxFQUFDLFVBRGQ7QUFFSSxXQUFPLEVBQUU7QUFBQSxhQUFNRyxpQkFBaUIsQ0FBQyxJQUFELENBQXZCO0FBQUE7QUFGYixXQURKLGVBT0k7QUFBUSxhQUFTLEVBQUM7QUFBbEIsY0FQSixlQVNJLDRFQUNJO0FBQU8sZUFBVyxFQUFDO0FBQW5CLElBREosQ0FUSixDQVRKLGVBdUJJO0FBQUssYUFBUyxFQUFDO0FBQWYsa0JBQ0k7QUFBUSxhQUFTLEVBQUM7QUFBbEIseUJBREosQ0F2QkosQ0FuQ0osRUFnRUtELGNBQWMsaUJBQ1gsaURBQUMsc0RBQUQ7QUFBTyxXQUFPLEVBQUUsaUJBQUNhLElBQUQ7QUFBQSxhQUFVWixpQkFBaUIsQ0FBQ1ksSUFBRCxDQUEzQjtBQUFBO0FBQWhCLGtCQUNJO0FBQU0sWUFBUSxFQUFFTDtBQUFoQixLQUNLTSxJQUFJLENBQUNDLFNBQUwsQ0FBZVQsSUFBZixDQURMLGVBRUk7QUFDSSxlQUFXLEVBQUMsTUFEaEI7QUFFSSxRQUFJLEVBQUMsTUFGVDtBQUdJLFlBQVEsRUFBRSxrQkFBQ0csQ0FBRDtBQUFBLGFBQ05GLE9BQU8saUNBQ0FELElBREEsMkJBRUZHLENBQUMsQ0FBQ08sYUFBRixDQUFnQmIsSUFGZCxFQUdDTSxDQUFDLENBQUNPLGFBQUYsQ0FBZ0JDLEtBSGpCLEdBREQ7QUFBQSxLQUhkO0FBVUksWUFBUTtBQVZaLElBRkosZUFjSTtBQUNJLGVBQVcsRUFBQyxNQURoQjtBQUVJLFFBQUksRUFBQyxNQUZUO0FBR0ksWUFBUSxFQUFFLGtCQUFDUixDQUFEO0FBQUEsYUFDTkYsT0FBTyxpQ0FDQUQsSUFEQSwyQkFFRkcsQ0FBQyxDQUFDTyxhQUFGLENBQWdCYixJQUZkLEVBR0NNLENBQUMsQ0FBQ08sYUFBRixDQUFnQkMsS0FIakIsR0FERDtBQUFBLEtBSGQ7QUFVSSxZQUFRO0FBVlosSUFkSixlQTBCSTtBQUNJLGVBQVcsRUFBQyxPQURoQjtBQUVJLFFBQUksRUFBQyxPQUZUO0FBR0ksWUFBUSxFQUFFLGtCQUFDUixDQUFEO0FBQUEsYUFDTkYsT0FBTyxpQ0FDQUQsSUFEQSwyQkFFRkcsQ0FBQyxDQUFDTyxhQUFGLENBQWdCYixJQUZkLEVBR0NNLENBQUMsQ0FBQ08sYUFBRixDQUFnQkMsS0FIakIsR0FERDtBQUFBLEtBSGQ7QUFVSSxZQUFRO0FBVlosSUExQkosZUFzQ0k7QUFDSSxlQUFXLEVBQUMsUUFEaEI7QUFFSSxRQUFJLEVBQUMsUUFGVDtBQUdJLFlBQVEsRUFBRSxrQkFBQ1IsQ0FBRDtBQUFBLGFBQ05GLE9BQU8saUNBQ0FELElBREEsMkJBRUZHLENBQUMsQ0FBQ08sYUFBRixDQUFnQmIsSUFGZCxFQUdDTSxDQUFDLENBQUNPLGFBQUYsQ0FBZ0JDLEtBSGpCLEdBREQ7QUFBQSxLQUhkO0FBVUksWUFBUTtBQVZaLElBdENKLGVBa0RJO0FBQVEsUUFBSSxFQUFDO0FBQWIsY0FsREosQ0FESixDQWpFUixDQURKO0FBMkhILENBOUlEOztBQWdKQSxpRUFBZXpCLEdBQWYiLCJmaWxlIjoiLi9zcmMvQXBwLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmltcG9ydCBNb2RhbCBmcm9tIFwiLi9jb21wb25lbnRzL01vZGFsXCI7XHJcbmltcG9ydCBcIi4vQXBwLnNjc3NcIjtcclxuaW1wb3J0IHsgZ2V0Q3VzdG9tZXIgfSBmcm9tIFwiLi9fcmVkdXgvY3VzdG9tZXJcIjtcclxuXHJcbmNvbnN0IEFwcCA9ICgpID0+IHtcclxuICAgIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcclxuICAgIGNvbnN0IGN1c3RvbWVyU3RhdGUgPSB1c2VTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLmN1c3RvbWVyKTtcclxuICAgIGNvbnN0IFtpc01vZGFsQWRkT3Blbiwgc2V0SXNNb2RhbEFkZE9wZW5dID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgY29uc3QgW2Zvcm0sIHNldEZvcm1dID0gdXNlU3RhdGUoe1xyXG4gICAgICAgIGNvZGU6IFwiXCIsXHJcbiAgICAgICAgbmFtZTogXCJcIixcclxuICAgICAgICBlbWFpbDogXCJcIixcclxuICAgICAgICBzdGF0dXM6IFwiXCIsXHJcbiAgICB9KTtcclxuXHJcbiAgICBjb25zdCBvblN1Ym1pdCA9IChlKSA9PiB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgfTtcclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgaWYgKGN1c3RvbWVyU3RhdGUuY3VzdG9tZXIgPT09IG51bGwpIHtcclxuICAgICAgICAgICAgZGlzcGF0Y2goZ2V0Q3VzdG9tZXIoKSk7XHJcbiAgICAgICAgfVxyXG4gICAgfSwgW2N1c3RvbWVyU3RhdGUuY3VzdG9tZXJdKTtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhcHBcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzaWRlYmFyXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFwcC1uYW1lXCI+SkFSSSBWSVNJQklMSVRZPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRlc2NyaXB0aW9uXCI+VGVhbSBKYXJ2aXMgRGV2ZWxvcG1lbnQ8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3BhcmF0b3JcIj48L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWVudVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDx1bD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmFzIGZhLWNoYXJ0LXBpZVwiPjwvaT4gRGFzaGJvYXJkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhcyBmYS1jaGFydC1hcmVhXCI+PC9pPk1lbWJlciBKb3VybmV5XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhcyBmYS1tYXAtbWFya2VyLWFsdFwiPjwvaT5MYXN0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBMb2NhdGlvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYXMgZmEtYnJpZWZjYXNlXCI+PC9pPkN1c3RvbWVyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhcyBmYS1lZGl0XCI+PC9pPlRhc2tcclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmFzIGZhLXNsaWRlcnMtaFwiPjwvaT5Db25maWd1cmF0aW9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhcyBmYS1saXN0LWFsdFwiPjwvaT5SZXBvcnRcclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmFzIGZhLXNpZ24tb3V0LWFsdFwiPjwvaT5TaWduIE91dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGVudFwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJuYXZiYXJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxhbmdcIj48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFjY291bnRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwaG90b1wiPkE8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgQWd1c1xyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBhZ2UtbmFtZVwiPkN1c3RvbWVyPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFjdGlvblwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnRuLWJsdWVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRJc01vZGFsQWRkT3Blbih0cnVlKX1cclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIEFkZFxyXG4gICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnRuLWdyZWVuXCI+VXBsb2FkPC9idXR0b24+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDxmb3JtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgcGxhY2Vob2xkZXI9XCJTZWFyY2ggQ3VzdG9tZXJcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZm9ybT5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGF0YXRhYmxlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidG4tb3JhbmdlIGJ0bi1kb3dubG9hZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBEb3dubG9hZCBUZW1wbGF0ZVxyXG4gICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICB7aXNNb2RhbEFkZE9wZW4gJiYgKFxyXG4gICAgICAgICAgICAgICAgPE1vZGFsIG9uQ2xvc2U9eyhib29sKSA9PiBzZXRJc01vZGFsQWRkT3Blbihib29sKX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGZvcm0gb25TdWJtaXQ9e29uU3VibWl0fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAge0pTT04uc3RyaW5naWZ5KGZvcm0pfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiY29kZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwiY29kZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0Rm9ybSh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC4uLmZvcm0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtlLmN1cnJlbnRUYXJnZXQubmFtZV06XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlLmN1cnJlbnRUYXJnZXQudmFsdWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJuYW1lXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJuYW1lXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRGb3JtKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLi4uZm9ybSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW2UuY3VycmVudFRhcmdldC5uYW1lXTpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGUuY3VycmVudFRhcmdldC52YWx1ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cImVtYWlsXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJlbWFpbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0Rm9ybSh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC4uLmZvcm0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtlLmN1cnJlbnRUYXJnZXQubmFtZV06XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlLmN1cnJlbnRUYXJnZXQudmFsdWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJzdGF0dXNcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cInN0YXR1c1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0Rm9ybSh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC4uLmZvcm0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtlLmN1cnJlbnRUYXJnZXQubmFtZV06XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlLmN1cnJlbnRUYXJnZXQudmFsdWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiPnN1Ym1pdDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZm9ybT5cclxuICAgICAgICAgICAgICAgIDwvTW9kYWw+XHJcbiAgICAgICAgICAgICl9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQXBwO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/App.js\n");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ "use strict";
/******/ 
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("80770c6cd41982ba7b96")
/******/ })();
/******/ 
/******/ }
);