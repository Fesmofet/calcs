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
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const style = __webpack_require__(/*! ../style.less */ \"./style.less\");\nvar btnMinus = document.getElementById('minus');\nvar btnPlus = document.getElementById('sum');\nvar btnMultiply = document.getElementById('multiply');\nvar btnEqually = document.getElementById('equally');\nvar btnDivision = document.getElementById('division');\nvar btnClear = document.getElementById('clear');\nvar btnReset = document.getElementById('reset');\nvar btnPoint = document.getElementById('point');\n\n\n\nvar input = document.getElementById('input');\nvar result = 0;\nvar operation;\n// const url = 'http://localhost:3000';\n\nnumberButtonInitialization(input);\nbtnMinus.addEventListener(\"click\", minus);\nbtnMultiply.addEventListener(\"click\", multiply);\nbtnDivision.addEventListener(\"click\", division);\nbtnPlus.addEventListener(\"click\", sum);\nbtnReset.addEventListener(\"click\", reset);\nbtnClear.addEventListener(\"click\", clear);\nbtnPoint.addEventListener(\"click\", point);\nbtnEqually.addEventListener(\"click\",  equally);\n\nfunction insertNumber(input, btn) {\n    input.value = input.value + btn;\n    }\n    function numberButtonInitialization(input){\n        for(var i = 0; i < 10; i++){\n            (function(){\n                var btn =  document.getElementById(`${i}`);\n                btn.addEventListener(\"click\", () => insertNumber(input, btn.value));\n            })();\n        }\n    }\n\n    // function getServer(value, res, operation) {\n    //     let obj = {\n    //         a: res,\n    //         b: value,\n    //         oper: operation\n    //     };\n    // let xhr = new XMLHttpRequest();\n    // xhr.open('POST', url + '/calc');\n    // xhr.setRequestHeader('Content-type','application/json; charset=utf-8');\n    // xhr.send(JSON.stringify(obj));\n    // xhr.onreadystatechange = function () {\n    //     if (xhr.status === 200 && xhr.readyState === XMLHttpRequest.DONE) {\n    //         console.log('&&&&&&', xhr.responseText);\n    //           input.value = xhr.responseText;\n    //     }\n    // };\n    //\n    // }\n\n\n    function equally() {\n    switch (operation) {\n        case \"+\":\n            // input.value =  getServer(result, +input.value, operation);\n            input.value = result + Number(input.value);\n            result = 0;\n            operation = \"\";\n            break;\n        case \"-\":\n            // getServer(result, +input.value, operation);\n            input.value = result - Number(input.value);\n            result = 0;\n            operation = \"\";\n            break;\n        case \"x\":\n            // getServer(result, +input.value, operation);\n            input.value = result * Number(input.value);\n            result = 0;\n            operation = \"\";\n            break;\n        case \"/\":\n            // getServer(result, +input.value, operation);\n            input.value = result / Number(input.value);\n            result = 0;\n            operation = \"\";\n            break;\n        default:\n            break;\n\n    }\n    }\n    function sum() {\n    result = Number(input.value);\n    input.value = \"\";\n    operation = \"+\";\n    }\n    function minus() {\n        result = Number(input.value);\n        input.value = \"\";\n        operation = \"-\";\n    }\n\n    function multiply() {\n        result = Number(input.value);\n        input.value = \"\";\n        operation = \"x\";\n    }\n\n    function division() {\n        result = Number(input.value);\n        input.value = \"\";\n        operation = \"/\";\n    }\n\n    function reset() {\n    input.value = \"\";\n    result = null;\n    operation = \"\";\n    }\n\n    function clear() {\n        let char = input.value;\n        input.value = char.substring(0, char.length - 1);\n    }\n\n    function point() {\n    if (input.value === \"\") {\n        input.value = \"0.\";\n    } else {\n        input.value += \".\";\n    }\n    }\n\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./style.less":
/*!********************!*\
  !*** ./style.less ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./style.less?");

/***/ })

/******/ });