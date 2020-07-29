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
/******/ 	__webpack_require__.p = "dist/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/helpers/loadElements.js":
/*!*************************************!*\
  !*** ./src/helpers/loadElements.js ***!
  \*************************************/
/*! exports provided: getElement */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getElement\", function() { return getElement; });\n\nfunction getElement() {\n    let input = document.getElementById(\"input\");\n    let selectFrom = document.getElementById(\"selectElementFrom\");\n    let selectTo = document.getElementById(\"selectElementTo\");\n    let output = document.getElementById(\"output\");\n    let selectLanguage = document.getElementById(\"selectElementLanguage\");\n    let modal= document.getElementById(\"modal\");\n    let wrapper=document.getElementById(\"wrapper\");\n    return { input, selectFrom, selectTo, output, selectLanguage, modal, wrapper};\n};\n\n\n//# sourceURL=webpack:///./src/helpers/loadElements.js?");

/***/ }),

/***/ "./src/helpers/saveSession.js":
/*!************************************!*\
  !*** ./src/helpers/saveSession.js ***!
  \************************************/
/*! exports provided: loadSessionStorage, saveSessionsStorage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"loadSessionStorage\", function() { return loadSessionStorage; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"saveSessionsStorage\", function() { return saveSessionsStorage; });\n/* harmony import */ var _loadElements__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./loadElements */ \"./src/helpers/loadElements.js\");\n\n\nfunction saveSessionsStorage(element) {\n    sessionStorage.setItem('input', element.input.value);\n    sessionStorage.setItem('output', element.output.value);\n    sessionStorage.setItem('selectFrom', element.selectFrom.value);\n    sessionStorage.setItem('selectTo', element.selectTo.value);\n    sessionStorage.setItem('selectLanguage', element.selectLanguage.value);\n\n}\n\nfunction loadSessionStorage() {\n    let element = Object(_loadElements__WEBPACK_IMPORTED_MODULE_0__[\"getElement\"])();\n    element.input.value = sessionStorage.getItem('input');\n    element.output.value = sessionStorage.getItem('output');\n    element.selectFrom.value = sessionStorage.getItem('selectFrom');\n    element.selectTo.value = sessionStorage.getItem('selectTo');\n    element.selectLanguage.value = sessionStorage.getItem('selectLanguage');\n}\n\n\n\n\n\n//# sourceURL=webpack:///./src/helpers/saveSession.js?");

/***/ }),

/***/ "./src/helpers/settings.js":
/*!*********************************!*\
  !*** ./src/helpers/settings.js ***!
  \*********************************/
/*! exports provided: getSettings, changeLanguage, languageBox */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getSettings\", function() { return getSettings; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"changeLanguage\", function() { return changeLanguage; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"languageBox\", function() { return languageBox; });\n/* harmony import */ var _saveSession__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./saveSession */ \"./src/helpers/saveSession.js\");\n\n\nlet languageBox = {\n    rus: {\n        select: {\n            meter: 'Метр',\n            verst: 'Верста',\n            mile: 'Миля',\n            foot: 'Фут',\n            yard: 'Ярд',\n        },\n        text: {\n            titleLabel: \"Конвертер\",\n            headerLabel: \"Конвертер\",\n            printLabel: \"Введите значение\",\n            convertButton: \"Конвертировать\",\n            resultLabel: \"Результат\",\n            settingsLabel:\"Настройки\",\n        },\n        message: {\n            positive:\"Введите положительное чиcло\",\n            plus:\"Не нужно писать +\",\n            minus:\"Невозможно посчитать отрицательную длину\",\n            short:\"Число должно быть короче!\",\n        }\n    },\n    ar: {\n        select: {\n            meter: 'متر',\n            verst: 'الفرست',\n            mile: 'ميل',\n            foot: 'قدم',\n            yard: 'ساحة',\n        },\n        text: {\n            titleLabel: \"محول\",\n            headerLabel: \"محول\",\n            printLabel: \"أدخل القيمة\",\n            convertButton: \"تحويل\",\n            resultLabel: \"يؤدي\",\n            settingsLabel:\"إعدادات\",\n        },\n        message: {\n            positive:\"أدخل رقم موجب\",\n            plus:\"لا حاجة لكتابة +\",\n            minus:\"غير قادر على حساب الطول السلبي\",\n            short:\"يجب أن يكون الرقم أقصر!\",\n        }\n    },\n    eng: {\n        select: {\n            meter: 'Meter',\n            verst: 'Verst',\n            mile: 'Mile',\n            foot: 'Foot',\n            yard: 'Yard',\n        },\n        text: {\n            titleLabel: \"Converter\",\n            headerLabel: \"Converter\",\n            printLabel: \"Print\",\n            convertButton: \"Convert\",\n            resultLabel: \"Result\",\n            settingsLabel:\"Settings\",\n        },\n        message: {\n            positive:\"Enter a positive number\",\n            plus:\"No need to write +\",\n            minus:\"Unable to count negative length\",\n            short:\"The number should be shorter!\",\n        }\n    }\n}\n\nfunction getSettings() {\n    let selectElementLanguage = document.getElementById(\"selectElementLanguage\");\n    selectElementLanguage.addEventListener(\"click\", changeLanguage);\n};\n\nfunction changeLanguage() {\n    let language = selectElementLanguage.value;\n    let wrapper=document.getElementById(\"wrapper\");\n    let modal= document.getElementById(\"modal\");\n    if(language===\"ar\"){\n        wrapper.setAttribute(\"dir\",\"rtl\");\n        modal.setAttribute(\"dir\",\"rtl\");\n    }else{\n        wrapper.setAttribute(\"dir\",\"ltl\");\n        modal.setAttribute(\"dir\",\"ltl\");\n    }\n    changeSelect(languageBox[language].select, \"selectElementFrom\");\n    changeSelect(languageBox[language].select, \"selectElementTo\");\n    changeText(languageBox[language].text);\n};\n\nfunction changeSelect(obj, selector) {\n    let index = 0;\n    let elementSelect = document.getElementById(selector)\n    for (const key in obj) {\n        elementSelect.options[index].innerHTML = obj[key];\n        index++;\n    }\n};\n\nfunction changeText(obj) {\n    for (const key in obj) {\n        document.getElementById(key).innerHTML = obj[key];\n    }\n};\n\n\n\n//# sourceURL=webpack:///./src/helpers/settings.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _helpers_settings_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helpers/settings.js */ \"./src/helpers/settings.js\");\n/* harmony import */ var _helpers_saveSession_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./helpers/saveSession.js */ \"./src/helpers/saveSession.js\");\n/* harmony import */ var _helpers_loadElements_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./helpers/loadElements.js */ \"./src/helpers/loadElements.js\");\n\n\n\n\nlet selectBox = {\n    meter: 1,\n    verst: 1067,\n    mile: 1609,\n    foot: 0.3047851264858275,\n    yard: 0.9144,\n};\n\nlet onSetting = false;\nlet settingsButton = document.getElementById(\"settingsButton\");\nsettingsButton.addEventListener(\"click\", showSettings);\nlet button = document.getElementById(\"convertButton\");\nbutton.addEventListener(\"click\", generate);\nlet closer= document.getElementById(\"modalCloser\");\ncloser.addEventListener(\"click\", showSettings);\nlet element = Object(_helpers_loadElements_js__WEBPACK_IMPORTED_MODULE_2__[\"getElement\"])();\nelement.input.oninput= validator;\nmain();\nif(element.input.value==\"\"){\n    button.disabled=true;\n}else {\n    button.disabled=false;\n};\n\n\nfunction validator(){\n\n    let mess=document.getElementById(\"message\");\n    let temp=element.input.value;\n    let length = temp.length;\n    let num= isFinite(temp);\n    let language= element.selectLanguage.value;\n    if(!num){\n        mess.innerHTML=_helpers_settings_js__WEBPACK_IMPORTED_MODULE_0__[\"languageBox\"][language].message.positive;\n        element.input.value=\"\";\n    } else\n//     if(temp.includes(\"+\")){\n//         mess.innerHTML=languageBox[language].message.plus;\n//     element.input.value=\"\";\n// } else\n//     if(temp.includes(\"-\")){\n//         mess.innerHTML=languageBox[language].message.minus;\n//         element.input.value=\"\";\n//     }else\nif(num < 0){\n    mess.innerHTML=_helpers_settings_js__WEBPACK_IMPORTED_MODULE_0__[\"languageBox\"][language].message.positive;\n    element.input.value=\"\";\n}else\n    if(length>13){\n        mess.innerHTML=_helpers_settings_js__WEBPACK_IMPORTED_MODULE_0__[\"languageBox\"][language].message.short;\n        element.input.value=temp.slice(0, -1);\n    }else{        mess.innerHTML=\"\";\n}\n    if(element.input.value==\"\"){\n        button.disabled=true;\n    }else {\n        button.disabled=false;\n    };\n\n}\n\nfunction main() {\n    if (sessionStorage.length != 0) {\n        Object(_helpers_saveSession_js__WEBPACK_IMPORTED_MODULE_1__[\"loadSessionStorage\"])();\n    }\n    Object(_helpers_settings_js__WEBPACK_IMPORTED_MODULE_0__[\"changeLanguage\"])();\n};\n\n\nfunction generate() {\n    let result = calculate(element);\n    showResult(result, element.output);\n    Object(_helpers_saveSession_js__WEBPACK_IMPORTED_MODULE_1__[\"saveSessionsStorage\"])(element);\n\n};\n\nfunction calculate(element) {\n    let convertToMeter = () => element.input.value * selectBox[element.selectFrom.value];\n    let convertFromMeter = (value) => value / selectBox[element.selectTo.value];\n    return convertFromMeter(convertToMeter());\n};\n\nfunction showResult(result, output) {\n    output.value = result;\n};\n\nfunction showSettings() {\n\n    if (onSetting == false) {\n        onSetting = true;\n        element.modal.style.display = \"block\";\n        Object(_helpers_settings_js__WEBPACK_IMPORTED_MODULE_0__[\"getSettings\"])();\n        element.wrapper.style.filter=\"blur(10px)\";\n    } else {\n        Object(_helpers_saveSession_js__WEBPACK_IMPORTED_MODULE_1__[\"saveSessionsStorage\"])(element);\n        validator();\n        modal.style.display = \"none\";\n        element.wrapper.style.filter=\"none\";\n        onSetting = false;\n    }\n};\n\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ })

/******/ });