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
/******/ 	return __webpack_require__(__webpack_require__.s = "./client/script/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./client/script/index.js":
/*!********************************!*\
  !*** ./client/script/index.js ***!
  \********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_style_less__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../style/style.less */ "./client/style/style.less");
/* harmony import */ var _style_style_less__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_style_style_less__WEBPACK_IMPORTED_MODULE_0__);

var displayPre = document.getElementById("displayPre");
var display = document.getElementById("display");
var btnEqually = document.getElementById("btnEqually");
var clearAllValue = document.getElementById("clearAllValue");
var backSpace = document.getElementById("backspace");

document.onkeydown = function (event) {
  if (event.key >= 0 && event.key < 10) {
    displayValue(display, event.key);
  }

  if (event.key === '+' || event.key === '-' || event.key === '*' || event.key === '/') {
    prep(display, event);
  } else {
    switch (event.key) {
      case "Backspace":
        back();
        break;

      case ".":
        displayValue(display, ".");
        break;

      case "Delete":
        clearDisplay();
        break;

      case "Enter":
        equal();
        break;

      default:
        return;
        break;
    }
  }
};

var calculator = {
  firstOperand: null,
  secondOperand: null,
  operator: null
};
clearAllValue.addEventListener('click', clearDisplay);
btnEqually.addEventListener('click', equal);
backSpace.addEventListener('click', back);
var num = document.getElementsByClassName("btn--number");
var operators = document.getElementsByClassName("btn--operator");

function init() {
  var _loop = function _loop() {
    var numValue = num[j].innerText;

    var callback = function callback() {
      displayValue(display, numValue);
    };

    num[j].addEventListener('click', callback);
  };

  for (var j = 0; j < num.length; j++) {
    _loop();
  }

  var _loop2 = function _loop2() {
    var btnValue = operators[i];
    operators[i].addEventListener('click', function () {
      prep(display, btnValue);
    });
  };

  for (var i = 0; i < operators.length; i++) {
    _loop2();
  }
}

document.addEventListener('DOMContentLoaded', init); // arg displayPre to test

function prep(display, btnValue) {
  var operandValue;

  if (btnValue.value === undefined) {
    operandValue = btnValue.key;
  } else {
    operandValue = btnValue.value;
  }

  calculator.operator = operandValue;
  calculator.firstOperand = display.value;
  displayPre.value = calculator.firstOperand + calculator.operator;
  display.value = "";
}

function displayValue(display, value) {
  if (display.value.length > 25) return;

  if (value === "." && display.value.includes(".") || value === "0" && display.value[0] === "0") {
    if (value === "0" && display.value[0] === "0" && display.value.includes(".")) {
      display.value += value;
      return;
    } else {
      return;
    }
  }

  if (display.value[0] === '0' && value > 0) {
    if (display.value[1] === '.') {
      display.value += value;
      return;
    } else {
      display.value = display.value[0];
      return;
    }
  }

  display.value += value;
} //arg display to test


function clearDisplay() {
  display.value = "";
  displayPre.value = "";
  calculator.firstOperand = null;
  calculator.secondOperand = null;
  calculator.operator = null;
} // arg display to test


function back() {
  display.value = display.value.substring(0, display.value.length - 1);
} // arg display to test


function equal() {
  displayPre.value = "";
  var operator = calculator.operator;
  var a = calculator.firstOperand;
  var b = calculator.secondOperand = display.value;

  switch (operator) {
    case "+":
      display.value = +a + +b;
      break;

    case "-":
      display.value = a - b;
      break;

    case "/":
      display.value = a / b;
      break;

    case "*":
      display.value = a * b;
      break;

    default:
      display.value;
      break;
  }
} // module.exports = {displayValue, clearDisplay, back, calculator, prep, equal};

/***/ }),

/***/ "./client/style/style.less":
/*!*********************************!*\
  !*** ./client/style/style.less ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY2xpZW50L3NjcmlwdC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9jbGllbnQvc3R5bGUvc3R5bGUubGVzcz8wZjgyIl0sIm5hbWVzIjpbImRpc3BsYXlQcmUiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiZGlzcGxheSIsImJ0bkVxdWFsbHkiLCJjbGVhckFsbFZhbHVlIiwiYmFja1NwYWNlIiwib25rZXlkb3duIiwiZXZlbnQiLCJrZXkiLCJkaXNwbGF5VmFsdWUiLCJwcmVwIiwiYmFjayIsImNsZWFyRGlzcGxheSIsImVxdWFsIiwiY2FsY3VsYXRvciIsImZpcnN0T3BlcmFuZCIsInNlY29uZE9wZXJhbmQiLCJvcGVyYXRvciIsImFkZEV2ZW50TGlzdGVuZXIiLCJudW0iLCJnZXRFbGVtZW50c0J5Q2xhc3NOYW1lIiwib3BlcmF0b3JzIiwiaW5pdCIsIm51bVZhbHVlIiwiaiIsImlubmVyVGV4dCIsImNhbGxiYWNrIiwibGVuZ3RoIiwiYnRuVmFsdWUiLCJpIiwib3BlcmFuZFZhbHVlIiwidmFsdWUiLCJ1bmRlZmluZWQiLCJpbmNsdWRlcyIsInN1YnN0cmluZyIsImEiLCJiIl0sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlD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U0FBZCxDQUF3QixDQUF4QixFQUEyQmhDLE9BQU8sQ0FBQzZCLEtBQVIsQ0FBY0osTUFBZCxHQUF1QixDQUFsRCxDQUFqQjtBQUNELEMsQ0FFRDs7O0FBQ0EsU0FBU2QsS0FBVCxHQUFpQjtBQUNmZCxZQUFVLENBQUNnQyxLQUFYLEdBQW1CLEVBQW5CO0FBQ0EsTUFBSWQsUUFBUSxHQUFHSCxVQUFVLENBQUNHLFFBQTFCO0FBQ0EsTUFBSWtCLENBQUMsR0FBR3JCLFVBQVUsQ0FBQ0MsWUFBbkI7QUFDQSxNQUFJcUIsQ0FBQyxHQUFHdEIsVUFBVSxDQUFDRSxhQUFYLEdBQTJCZCxPQUFPLENBQUM2QixLQUEzQzs7QUFDQSxVQUFRZCxRQUFSO0FBQ0UsU0FBSyxHQUFMO0FBQ0VmLGFBQU8sQ0FBQzZCLEtBQVIsR0FBZ0IsQ0FBQ0ksQ0FBRCxHQUFLLENBQUNDLENBQXRCO0FBQ0E7O0FBQ0YsU0FBSyxHQUFMO0FBQ0VsQyxhQUFPLENBQUM2QixLQUFSLEdBQWdCSSxDQUFDLEdBQUdDLENBQXBCO0FBQ0E7O0FBQ0YsU0FBSyxHQUFMO0FBQ0VsQyxhQUFPLENBQUM2QixLQUFSLEdBQWdCSSxDQUFDLEdBQUdDLENBQXBCO0FBQ0E7O0FBQ0YsU0FBSyxHQUFMO0FBQ0VsQyxhQUFPLENBQUM2QixLQUFSLEdBQWdCSSxDQUFDLEdBQUdDLENBQXBCO0FBQ0E7O0FBQ0Y7QUFBU2xDLGFBQU8sQ0FBQzZCLEtBQVI7QUFDUDtBQWRKO0FBZ0JELEMsQ0FFRCxnRjs7Ozs7Ozs7Ozs7QUN6SUEsdUMiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL2NsaWVudC9zY3JpcHQvaW5kZXguanNcIik7XG4iLCJpbXBvcnQgJy4uL3N0eWxlL3N0eWxlLmxlc3MnXHJcblxyXG52YXIgZGlzcGxheVByZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZGlzcGxheVByZVwiKTtcclxudmFyIGRpc3BsYXkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImRpc3BsYXlcIik7XHJcblxyXG52YXIgYnRuRXF1YWxseSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYnRuRXF1YWxseVwiKTtcclxudmFyIGNsZWFyQWxsVmFsdWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNsZWFyQWxsVmFsdWVcIik7XHJcbnZhciBiYWNrU3BhY2UgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImJhY2tzcGFjZVwiKTtcclxuXHJcbmRvY3VtZW50Lm9ua2V5ZG93biA9IGZ1bmN0aW9uIChldmVudCkge1xyXG4gIGlmIChldmVudC5rZXkgPj0gMCAmJiBldmVudC5rZXkgPCAxMCkge1xyXG4gICAgZGlzcGxheVZhbHVlKGRpc3BsYXkgLGV2ZW50LmtleSlcclxuICB9XHJcbiAgaWYgKGV2ZW50LmtleSA9PT0gJysnIHx8IGV2ZW50LmtleSA9PT0gJy0nIHx8IGV2ZW50LmtleSA9PT0gJyonIHx8IGV2ZW50LmtleSA9PT0gJy8nKSB7XHJcbiAgICBwcmVwKGRpc3BsYXksIGV2ZW50KTtcclxuICB9IGVsc2Uge1xyXG4gICAgc3dpdGNoIChldmVudC5rZXkpIHtcclxuICAgICAgY2FzZSBcIkJhY2tzcGFjZVwiOiBiYWNrKCk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgXCIuXCI6IGRpc3BsYXlWYWx1ZShkaXNwbGF5LFwiLlwiKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBcIkRlbGV0ZVwiOiBjbGVhckRpc3BsYXkoKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBcIkVudGVyXCI6IGVxdWFsKCk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGRlZmF1bHQ6IHJldHVybjtcclxuICAgICAgICBicmVhaztcclxuICAgIH1cclxuICB9XHJcbn07XHJcblxyXG52YXIgY2FsY3VsYXRvciA9IHtcclxuICBmaXJzdE9wZXJhbmQ6IG51bGwsXHJcbiAgc2Vjb25kT3BlcmFuZDogbnVsbCxcclxuICBvcGVyYXRvcjogbnVsbFxyXG59O1xyXG5cclxuY2xlYXJBbGxWYWx1ZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGNsZWFyRGlzcGxheSk7XHJcbmJ0bkVxdWFsbHkuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBlcXVhbCk7XHJcbmJhY2tTcGFjZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGJhY2spO1xyXG5cclxudmFyIG51bSA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJidG4tLW51bWJlclwiKTtcclxudmFyIG9wZXJhdG9ycyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJidG4tLW9wZXJhdG9yXCIpO1xyXG5cclxuZnVuY3Rpb24gaW5pdCgpIHtcclxuICBmb3IgKHZhciBqID0gMDsgaiA8IG51bS5sZW5ndGg7IGorKykge1xyXG4gICAgbGV0IG51bVZhbHVlID0gbnVtW2pdLmlubmVyVGV4dDtcclxuICAgIGxldCBjYWxsYmFjayA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgZGlzcGxheVZhbHVlKGRpc3BsYXksIG51bVZhbHVlKVxyXG4gICAgfTtcclxuICAgIG51bVtqXS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGNhbGxiYWNrKTtcclxuICB9XHJcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBvcGVyYXRvcnMubGVuZ3RoOyBpKyspIHtcclxuICAgIGxldCBidG5WYWx1ZSA9IG9wZXJhdG9yc1tpXTtcclxuICAgIG9wZXJhdG9yc1tpXS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgcHJlcChkaXNwbGF5LCBidG5WYWx1ZSlcclxuICAgIH0gKTtcclxuICB9XHJcbn1cclxuXHJcbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCBpbml0KTtcclxuXHJcblxyXG5cclxuLy8gYXJnIGRpc3BsYXlQcmUgdG8gdGVzdFxyXG5mdW5jdGlvbiBwcmVwKGRpc3BsYXksIGJ0blZhbHVlKSB7XHJcbiAgdmFyIG9wZXJhbmRWYWx1ZTtcclxuICBpZiAoYnRuVmFsdWUudmFsdWUgPT09IHVuZGVmaW5lZCkge1xyXG4gICAgb3BlcmFuZFZhbHVlID0gYnRuVmFsdWUua2V5O1xyXG4gIH0gZWxzZSB7XHJcbiAgICBvcGVyYW5kVmFsdWUgPSBidG5WYWx1ZS52YWx1ZTtcclxuICB9XHJcbiAgY2FsY3VsYXRvci5vcGVyYXRvciA9IG9wZXJhbmRWYWx1ZTtcclxuICBjYWxjdWxhdG9yLmZpcnN0T3BlcmFuZCA9IGRpc3BsYXkudmFsdWU7XHJcbiAgZGlzcGxheVByZS52YWx1ZSA9IGNhbGN1bGF0b3IuZmlyc3RPcGVyYW5kICsgY2FsY3VsYXRvci5vcGVyYXRvcjtcclxuICBkaXNwbGF5LnZhbHVlID0gXCJcIjtcclxufVxyXG5cclxuZnVuY3Rpb24gZGlzcGxheVZhbHVlKGRpc3BsYXksIHZhbHVlKSB7XHJcbiAgaWYgKGRpc3BsYXkudmFsdWUubGVuZ3RoID4gMjUpIHJldHVybjtcclxuICBpZiAodmFsdWUgPT09IFwiLlwiICYmIGRpc3BsYXkudmFsdWUuaW5jbHVkZXMoXCIuXCIpIHx8IHZhbHVlID09PSBcIjBcIiAmJiBkaXNwbGF5LnZhbHVlWzBdID09PSBcIjBcIil7XHJcbiAgICBpZiAodmFsdWUgPT09IFwiMFwiICYmIGRpc3BsYXkudmFsdWVbMF0gPT09IFwiMFwiICYmIGRpc3BsYXkudmFsdWUuaW5jbHVkZXMoXCIuXCIpKSB7XHJcbiAgICAgIGRpc3BsYXkudmFsdWUgKz0gdmFsdWU7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIGVsc2Uge1xyXG4gICAgICByZXR1cm5cclxuICAgIH1cclxuICB9XHJcbiAgaWYgKGRpc3BsYXkudmFsdWVbMF0gPT09ICcwJyAmJiB2YWx1ZSA+IDApIHtcclxuICAgIGlmIChkaXNwbGF5LnZhbHVlWzFdID09PSAnLicpIHtcclxuICAgICAgZGlzcGxheS52YWx1ZSArPSB2YWx1ZTtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9ZWxzZSB7XHJcbiAgICAgIGRpc3BsYXkudmFsdWUgPSBkaXNwbGF5LnZhbHVlWzBdO1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgfVxyXG4gIGRpc3BsYXkudmFsdWUgKz0gdmFsdWU7XHJcbn1cclxuLy9hcmcgZGlzcGxheSB0byB0ZXN0XHJcbmZ1bmN0aW9uIGNsZWFyRGlzcGxheSgpIHtcclxuICBkaXNwbGF5LnZhbHVlID0gXCJcIjtcclxuICBkaXNwbGF5UHJlLnZhbHVlID0gXCJcIjtcclxuICBjYWxjdWxhdG9yLmZpcnN0T3BlcmFuZCA9IG51bGw7XHJcbiAgY2FsY3VsYXRvci5zZWNvbmRPcGVyYW5kID0gbnVsbDtcclxuICBjYWxjdWxhdG9yLm9wZXJhdG9yID0gbnVsbDtcclxufVxyXG4vLyBhcmcgZGlzcGxheSB0byB0ZXN0XHJcbmZ1bmN0aW9uIGJhY2soKSB7XHJcbiAgZGlzcGxheS52YWx1ZSA9ICBkaXNwbGF5LnZhbHVlLnN1YnN0cmluZygwLCBkaXNwbGF5LnZhbHVlLmxlbmd0aCAtIDEpO1xyXG59XHJcblxyXG4vLyBhcmcgZGlzcGxheSB0byB0ZXN0XHJcbmZ1bmN0aW9uIGVxdWFsKCkge1xyXG4gIGRpc3BsYXlQcmUudmFsdWUgPSBcIlwiO1xyXG4gIHZhciBvcGVyYXRvciA9IGNhbGN1bGF0b3Iub3BlcmF0b3I7XHJcbiAgdmFyIGEgPSBjYWxjdWxhdG9yLmZpcnN0T3BlcmFuZDtcclxuICB2YXIgYiA9IGNhbGN1bGF0b3Iuc2Vjb25kT3BlcmFuZCA9IGRpc3BsYXkudmFsdWU7XHJcbiAgc3dpdGNoIChvcGVyYXRvcikge1xyXG4gICAgY2FzZSBcIitcIjpcclxuICAgICAgZGlzcGxheS52YWx1ZSA9ICthICsgK2I7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSBcIi1cIjpcclxuICAgICAgZGlzcGxheS52YWx1ZSA9IGEgLSBiO1xyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgXCIvXCI6XHJcbiAgICAgIGRpc3BsYXkudmFsdWUgPSBhIC8gYjtcclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlIFwiKlwiOlxyXG4gICAgICBkaXNwbGF5LnZhbHVlID0gYSAqIGI7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgZGVmYXVsdDogZGlzcGxheS52YWx1ZTtcclxuICAgICAgYnJlYWs7XHJcbiAgfVxyXG59XHJcblxyXG4vLyBtb2R1bGUuZXhwb3J0cyA9IHtkaXNwbGF5VmFsdWUsIGNsZWFyRGlzcGxheSwgYmFjaywgY2FsY3VsYXRvciwgcHJlcCwgZXF1YWx9O1xyXG5cclxuXHJcblxyXG5cclxuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIl0sInNvdXJjZVJvb3QiOiIifQ==