/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_style_less__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/style.less */ \"./src/styles/style.less\");\n/* harmony import */ var _styles_style_less__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_styles_style_less__WEBPACK_IMPORTED_MODULE_0__);\n\r\n\r\n\r\nvar operation;\r\nvar result = 0;\r\n\r\nvar input = document.getElementById(\"input\");\r\nvar btnPoint = document.getElementById(\"point\");\r\nvar btnClear = document.getElementById(\"clear\");\r\nvar btnPlus = document.getElementById(\"plus\");\r\nvar btnEqual = document.getElementById(\"equal\");\r\nvar btnMinus = document.getElementById(\"minus\");\r\nvar btnMult = document.getElementById(\"mult\");\r\nvar btnDiv = document.getElementById(\"div\");\r\nvar btnReset = document.getElementById(\"reset\");\r\n\r\n\r\nwindow.onload = function () {\r\n    numberButtonInitialization(input);\r\n    btnPoint.addEventListener(\"click\", () => insertPoint(input));\r\n    btnClear.addEventListener(\"click\", () => clearInput(input));\r\n    btnPlus.addEventListener(\"click\", () => defineOperation(input, btnPlus));\r\n    btnMinus.addEventListener(\"click\", () => defineOperation(input, btnMinus));\r\n    btnMult.addEventListener(\"click\", () => defineOperation(input, btnMult));\r\n    btnDiv.addEventListener(\"click\", () => defineOperation(input, btnDiv));\r\n    btnEqual.addEventListener(\"click\", () => equal(input));\r\n    btnReset.addEventListener(\"click\", () => reset(input));\r\n}\r\n\r\nfunction numberButtonInitialization(input) {\r\n    for (var i = 0; i < 10; i++) {\r\n        (function () {\r\n            var btn = document.getElementById(`${i}`);\r\n            btn.addEventListener(\"click\", () => insertNumber(input, btn.value));\r\n        })();\r\n    }\r\n}\r\n\r\nfunction insertPoint(input) {\r\n    if (input.value.length == 0) {\r\n        input.value = \"0.\";\r\n    } else {\r\n        input.value += \".\";\r\n    }\r\n}\r\n\r\nfunction insertNumber(input, number) {\r\n    if (input.value.includes(\".\")) {\r\n        input.value += number;\r\n    } else {\r\n        input.value = input.value * 10 + +number;\r\n    }\r\n}\r\n\r\nfunction clearInput(input) {\r\n    input.value = \"\";\r\n}\r\n\r\nfunction defineOperation(input, btn) {\r\n    if (input.value != \"\") {\r\n        equal(input);\r\n        operation = btn.value;\r\n        result = +input.value;\r\n        input.value = \"\";\r\n    } else {\r\n        operation = btn.value;\r\n    }\r\n}\r\n\r\nfunction equal(input) {\r\n    switch (operation) {\r\n        case \"+\":\r\n            input.value = result + +input.value;\r\n            break;\r\n        case \"-\":\r\n            input.value = result - +input.value;\r\n            break;\r\n        case \"*\":\r\n            input.value = result * +input.value;\r\n            break;\r\n        case \"/\":\r\n            if (+input.value != 0) {\r\n                input.value = result / +input.value;\r\n            } else {\r\n                input.value = 0;\r\n            }\r\n            break;\r\n        default: input.value = +input.value;\r\n    }\r\n    result = 0;\r\n    operation = \"\";\r\n}\r\n\r\nfunction reset(input) {\r\n    clearInput(input);\r\n    result = 0;\r\n    operation = \"\";\r\n}\r\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/styles/style.less":
/*!*******************************!*\
  !*** ./src/styles/style.less ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/styles/style.less?");

/***/ })

/******/ });