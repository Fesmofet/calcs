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

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/less-loader/dist/cjs.js!./src/style/index.less":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/less-loader/dist/cjs.js!./src/style/index.less ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\nvar ___CSS_LOADER_GET_URL_IMPORT___ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\nvar ___CSS_LOADER_URL_IMPORT_0___ = __webpack_require__(/*! ./img/close-button-png.png */ \"./src/style/img/close-button-png.png\");\nvar ___CSS_LOADER_URL_IMPORT_1___ = __webpack_require__(/*! ./img/gear.svg */ \"./src/style/img/gear.svg\");\nexports = ___CSS_LOADER_API_IMPORT___(false);\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_0___);\nvar ___CSS_LOADER_URL_REPLACEMENT_1___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_1___);\n// Module\nexports.push([module.i, \".input-box__input__padding {\\n  padding: 20px;\\n  text-align: center;\\n}\\n.input-box__input__position {\\n  display: flex;\\n  justify-content: center;\\n}\\nlabel {\\n  display: flex;\\n  justify-content: center;\\n  vertical-align: middle;\\n}\\n.input-box__margin {\\n  margin: 10px 10px 0 10px;\\n}\\n.input-box__switcher {\\n  margin: 10px 0 0 0;\\n}\\n.settings-modal.active {\\n  display: flex;\\n}\\n.settings-modal {\\n  display: none;\\n  position: absolute;\\n  right: 0;\\n  left: 0;\\n  top: 0;\\n  bottom: 0;\\n  background: rgba(233, 235, 238, 0.8);\\n}\\n.select-language {\\n  margin: 0 auto;\\n  padding: 100px 0 0 0;\\n}\\n.wrapper-main {\\n  position: relative;\\n  background-image: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);\\n  height: 100vh;\\n}\\n.wrapper_rtl {\\n  direction: rtl;\\n}\\n.wrapper_ltr {\\n  direction: ltr;\\n}\\n.wrapper-blur {\\n  filter: blur(5px);\\n}\\nh1 {\\n  text-align: center;\\n}\\n#selectFrom option:checked {\\n  display: none;\\n}\\n#selectTo option:checked {\\n  display: none;\\n}\\n#selectLanguage option:checked {\\n  display: none;\\n}\\n#btn-close-modal {\\n  cursor: pointer;\\n  background-image: url(\" + ___CSS_LOADER_URL_REPLACEMENT_0___ + \");\\n  background-size: cover;\\n  width: 40px;\\n  height: 40px;\\n}\\nbutton {\\n  background: none;\\n  border: none;\\n}\\n.btn-settings {\\n  background-image: url(\" + ___CSS_LOADER_URL_REPLACEMENT_1___ + \");\\n  background-size: cover;\\n  width: 40px;\\n  height: 40px;\\n  cursor: pointer;\\n}\\n#convert {\\n  background-image: linear-gradient(180deg, #2af598 0%, #009efd 100%);\\n  border-radius: 20px;\\n}\\n\", \"\"]);\n// Exports\nmodule.exports = exports;\n\n\n//# sourceURL=webpack:///./src/style/index.less?./node_modules/css-loader/dist/cjs.js!./node_modules/less-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\n// eslint-disable-next-line func-names\nmodule.exports = function (useSourceMap) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = cssWithMappingToString(item, useSourceMap);\n\n      if (item[2]) {\n        return \"@media \".concat(item[2], \" {\").concat(content, \"}\");\n      }\n\n      return content;\n    }).join('');\n  }; // import a list of modules into the list\n  // eslint-disable-next-line func-names\n\n\n  list.i = function (modules, mediaQuery, dedupe) {\n    if (typeof modules === 'string') {\n      // eslint-disable-next-line no-param-reassign\n      modules = [[null, modules, '']];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var i = 0; i < this.length; i++) {\n        // eslint-disable-next-line prefer-destructuring\n        var id = this[i][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _i = 0; _i < modules.length; _i++) {\n      var item = [].concat(modules[_i]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        // eslint-disable-next-line no-continue\n        continue;\n      }\n\n      if (mediaQuery) {\n        if (!item[2]) {\n          item[2] = mediaQuery;\n        } else {\n          item[2] = \"\".concat(mediaQuery, \" and \").concat(item[2]);\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\nfunction cssWithMappingToString(item, useSourceMap) {\n  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring\n\n  var cssMapping = item[3];\n\n  if (!cssMapping) {\n    return content;\n  }\n\n  if (useSourceMap && typeof btoa === 'function') {\n    var sourceMapping = toComment(cssMapping);\n    var sourceURLs = cssMapping.sources.map(function (source) {\n      return \"/*# sourceURL=\".concat(cssMapping.sourceRoot || '').concat(source, \" */\");\n    });\n    return [content].concat(sourceURLs).concat([sourceMapping]).join('\\n');\n  }\n\n  return [content].join('\\n');\n} // Adapted from convert-source-map (MIT)\n\n\nfunction toComment(sourceMap) {\n  // eslint-disable-next-line no-undef\n  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));\n  var data = \"sourceMappingURL=data:application/json;charset=utf-8;base64,\".concat(base64);\n  return \"/*# \".concat(data, \" */\");\n}\n\n//# sourceURL=webpack:///./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    // eslint-disable-next-line no-param-reassign\n    options = {};\n  } // eslint-disable-next-line no-underscore-dangle, no-param-reassign\n\n\n  url = url && url.__esModule ? url.default : url;\n\n  if (typeof url !== 'string') {\n    return url;\n  } // If url is already wrapped in quotes, remove them\n\n\n  if (/^['\"].*['\"]$/.test(url)) {\n    // eslint-disable-next-line no-param-reassign\n    url = url.slice(1, -1);\n  }\n\n  if (options.hash) {\n    // eslint-disable-next-line no-param-reassign\n    url += options.hash;\n  } // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n\n\n  if (/[\"'() \\t\\n]/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, '\\\\n'), \"\\\"\");\n  }\n\n  return url;\n};\n\n//# sourceURL=webpack:///./node_modules/css-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar isOldIE = function isOldIE() {\n  var memo;\n  return function memorize() {\n    if (typeof memo === 'undefined') {\n      // Test for IE <= 9 as proposed by Browserhacks\n      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805\n      // Tests for existence of standard globals is to allow style-loader\n      // to operate correctly into non-standard environments\n      // @see https://github.com/webpack-contrib/style-loader/issues/177\n      memo = Boolean(window && document && document.all && !window.atob);\n    }\n\n    return memo;\n  };\n}();\n\nvar getTarget = function getTarget() {\n  var memo = {};\n  return function memorize(target) {\n    if (typeof memo[target] === 'undefined') {\n      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n        try {\n          // This will throw an exception if access to iframe is blocked\n          // due to cross-origin restrictions\n          styleTarget = styleTarget.contentDocument.head;\n        } catch (e) {\n          // istanbul ignore next\n          styleTarget = null;\n        }\n      }\n\n      memo[target] = styleTarget;\n    }\n\n    return memo[target];\n  };\n}();\n\nvar stylesInDom = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDom.length; i++) {\n    if (stylesInDom[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var index = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3]\n    };\n\n    if (index !== -1) {\n      stylesInDom[index].references++;\n      stylesInDom[index].updater(obj);\n    } else {\n      stylesInDom.push({\n        identifier: identifier,\n        updater: addStyle(obj, options),\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction insertStyleElement(options) {\n  var style = document.createElement('style');\n  var attributes = options.attributes || {};\n\n  if (typeof attributes.nonce === 'undefined') {\n    var nonce =  true ? __webpack_require__.nc : undefined;\n\n    if (nonce) {\n      attributes.nonce = nonce;\n    }\n  }\n\n  Object.keys(attributes).forEach(function (key) {\n    style.setAttribute(key, attributes[key]);\n  });\n\n  if (typeof options.insert === 'function') {\n    options.insert(style);\n  } else {\n    var target = getTarget(options.insert || 'head');\n\n    if (!target) {\n      throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n    }\n\n    target.appendChild(style);\n  }\n\n  return style;\n}\n\nfunction removeStyleElement(style) {\n  // istanbul ignore if\n  if (style.parentNode === null) {\n    return false;\n  }\n\n  style.parentNode.removeChild(style);\n}\n/* istanbul ignore next  */\n\n\nvar replaceText = function replaceText() {\n  var textStore = [];\n  return function replace(index, replacement) {\n    textStore[index] = replacement;\n    return textStore.filter(Boolean).join('\\n');\n  };\n}();\n\nfunction applyToSingletonTag(style, index, remove, obj) {\n  var css = remove ? '' : obj.media ? \"@media \".concat(obj.media, \" {\").concat(obj.css, \"}\") : obj.css; // For old IE\n\n  /* istanbul ignore if  */\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = replaceText(index, css);\n  } else {\n    var cssNode = document.createTextNode(css);\n    var childNodes = style.childNodes;\n\n    if (childNodes[index]) {\n      style.removeChild(childNodes[index]);\n    }\n\n    if (childNodes.length) {\n      style.insertBefore(cssNode, childNodes[index]);\n    } else {\n      style.appendChild(cssNode);\n    }\n  }\n}\n\nfunction applyToTag(style, options, obj) {\n  var css = obj.css;\n  var media = obj.media;\n  var sourceMap = obj.sourceMap;\n\n  if (media) {\n    style.setAttribute('media', media);\n  } else {\n    style.removeAttribute('media');\n  }\n\n  if (sourceMap && btoa) {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = css;\n  } else {\n    while (style.firstChild) {\n      style.removeChild(style.firstChild);\n    }\n\n    style.appendChild(document.createTextNode(css));\n  }\n}\n\nvar singleton = null;\nvar singletonCounter = 0;\n\nfunction addStyle(obj, options) {\n  var style;\n  var update;\n  var remove;\n\n  if (options.singleton) {\n    var styleIndex = singletonCounter++;\n    style = singleton || (singleton = insertStyleElement(options));\n    update = applyToSingletonTag.bind(null, style, styleIndex, false);\n    remove = applyToSingletonTag.bind(null, style, styleIndex, true);\n  } else {\n    style = insertStyleElement(options);\n    update = applyToTag.bind(null, style, options);\n\n    remove = function remove() {\n      removeStyleElement(style);\n    };\n  }\n\n  update(obj);\n  return function updateStyle(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {\n        return;\n      }\n\n      update(obj = newObj);\n    } else {\n      remove();\n    }\n  };\n}\n\nmodule.exports = function (list, options) {\n  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>\n  // tags it will allow on a page\n\n  if (!options.singleton && typeof options.singleton !== 'boolean') {\n    options.singleton = isOldIE();\n  }\n\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    if (Object.prototype.toString.call(newList) !== '[object Array]') {\n      return;\n    }\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDom[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDom[_index].references === 0) {\n        stylesInDom[_index].updater();\n\n        stylesInDom.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./src/const.js":
/*!**********************!*\
  !*** ./src/const.js ***!
  \**********************/
/*! exports provided: arrayForConvert, languageTranslate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"arrayForConvert\", function() { return arrayForConvert; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"languageTranslate\", function() { return languageTranslate; });\n\nlet arrayForConvert = {\n    mile: 1609.34,\n    verst: 1066.8,\n    yard: 0.9144,\n    foot: 0.3048,\n    meter: 1,\n    миля: 1609.34,\n    верста: 1066.8,\n    ярд: 0.9144,\n    фут: 0.3048,\n    метр: 1,\n    متر: 1,\n    الفرست: 1066.8,\n    ساحة: 0.9144,\n    قدم: 0.3048,\n    ميل: 1609.34\n};\nlet languageTranslate = {\n    eng: {\n        select: {\n            meter: \"meter\",\n            verst: \"verst\",\n            yard: \"yard\",\n            foot: \"foot\",\n            mile: \"mile\"\n        },\n        text: {\n            h1Text: \"Converter\",\n            h2Text: \"Settings\",\n            titleLabel: \"Converter\",\n            labelInputDigits: \"Enter value\",\n            labelInputResult: \"Result\",\n            convert: \"Convert\",\n        },\n        message: {\n            positive: \"Enter a positive number\",\n            plus: \"No need to write +\",\n            minus: \"Unable to count negative length\",\n            short: \"The number should be shorter!\",\n        },\n        placeholder: {\n            inputDigits: \"Write digit\",\n            inputResult: \"Result\"\n\n        }\n\n\n    },\n    ru: {\n        select: {\n            meter: \"метр\",\n            verst: \"верста\",\n            yard: \"ярд\",\n            foot: \"фут\",\n            mile: \"миля\"\n        },\n        text: {\n            h1Text: \"Конвертер\",\n            h2Text: \"Настройки\",\n            titleLabel: \"Конвертер\",\n            labelInputDigits: \"Введите значение\",\n            labelInputResult: \"Результат\",\n            convert: \"Конвертировать\",\n\n        },\n        message: {\n            positive: \"Введите положительное чиcло\",\n            plus: \"Не нужно писать +\",\n            minus: \"Невозможно посчитать отрицательную длину\",\n            short: \"Число должно быть короче!\",\n        },\n        placeholder: {\n            inputDigits: \"Введите число\",\n            inputResult: \"Результат\"\n        }\n    },\n    ar: {\n        select: {\n            meter: \"متر\",\n            verst: \"الفرست\",\n            yard: \"ساحة\",\n            foot: \"قدم\",\n            mile: \"ميل\"\n        },\n        text: {\n            h1Text: \"محول\",\n            h2Text: \"إعدادات\",\n            titleLabel: \"محول\",\n            labelInputDigits: \"أدخل القيمة\",\n            labelInputResult: \"يؤدي\",\n            convert: \"تحويل\",\n            settingsLabel: \"إعدادات\",\n        },\n        message: {\n            positive: \"أدخل رقم موجب\",\n            plus: \"لا حاجة لكتابة +\",\n            minus: \"غير قادر على حساب الطول السلبي\",\n            short: \"يجب أن يكون الرقم أقصر!\",\n        },\n        placeholder: {\n            inputDigits: \"أدخل الرقم\",\n            inputResult: \"يؤدي\"\n        }\n    },\n\n};\n\n\n//# sourceURL=webpack:///./src/const.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _const__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./const */ \"./src/const.js\");\n/* harmony import */ var _style_index_less__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style/index.less */ \"./src/style/index.less\");\n/* harmony import */ var _style_index_less__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_style_index_less__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _localStorage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./localStorage */ \"./src/localStorage.js\");\n\n\n\n\n\nlet inputDigits = document.querySelector(\"#inputDigits\");\nlet selectFrom = document.querySelector(\"#selectFrom\");\nlet selectTo = document.querySelector(\"#selectTo\");\nlet inputResult = document.querySelector(\"#inputResult\");\nlet settingModal = document.querySelector(\".settings-modal\");\nlet settings = document.querySelector(\".settings\");\nlet convert = document.querySelector(\"#convert\");\nlet selectLanguage = document.querySelector(\"#selectLanguage\");\ndocument.querySelector(\".settings-button\").addEventListener(\"click\", openSettingModal);\ndocument.querySelector(\"#convert\").addEventListener(\"click\", getConvert);\ninputResult.setAttribute(\"disabled\", \"disabled\");\nselectLanguage.addEventListener(\"click\", changeLang);\n\ninputDigits.oninput = function () {\n    convert.disabled = this.value.length <= 0;\n    this.value = this.value.replace(/[^0-9.]/g, '').replace(/(\\..*)\\./g, '$1');\n};\n\n\n\nfunction saveSession() {\n    if (sessionStorage.length != 0) {\n        Object(_localStorage__WEBPACK_IMPORTED_MODULE_2__[\"loadSessionStorage\"])();\n    }\n    changeLang();\n};\nsaveSession();\n\nObject(_localStorage__WEBPACK_IMPORTED_MODULE_2__[\"loadSessionStorage\"])();\n\nfunction openSettingModal() {\n    settingModal.classList.toggle(\"active\");\n}\n\ndocument.getElementById(\"btn-close-modal\").addEventListener(\"click\", () => {\n    settingModal.classList.remove(\"active\");\n});\n\nfunction getConvert() {\n    let optionsValueFrom = selectFrom.options[selectFrom.selectedIndex].text;\n    let optionsValueTo = selectTo.options[selectTo.selectedIndex].text;\n    convertResult(optionsValueFrom, optionsValueTo);\n    Object(_localStorage__WEBPACK_IMPORTED_MODULE_2__[\"saveSessionStorage\"])();\n}\n\nfunction convertToMeter(optionsValueFrom) {\n    let meterConvert = inputDigits.value;\n    return meterConvert * _const__WEBPACK_IMPORTED_MODULE_0__[\"arrayForConvert\"][optionsValueFrom];\n}\n\nfunction convertResult(optionsValueFrom, optionsValueTo) {\n    let result = convertToMeter(optionsValueFrom);\n    inputResult.value = result / _const__WEBPACK_IMPORTED_MODULE_0__[\"arrayForConvert\"][optionsValueTo];\n}\n\nfunction changeLang() {\n    let lang = selectLanguage.value;\n    let wrapper = document.querySelector(\".wrapper-main\");\n    let settingsButton = document.querySelector(\".settings-button\");\n    let btnCloseModal=document.getElementById(\"#btn-close-modal\");\n    if (lang === \"ar\") {\n        wrapper.setAttribute(\"dir\",\"rtl\");\n        settingsButton.setAttribute(\"dir\",\"ltr\");\n        Object(_localStorage__WEBPACK_IMPORTED_MODULE_2__[\"saveSessionStorage\"])();\n    } else {\n        wrapper.setAttribute(\"dir\",\"ltr\");\n        settingsButton.setAttribute(\"dir\",\"rtl\");\n        Object(_localStorage__WEBPACK_IMPORTED_MODULE_2__[\"saveSessionStorage\"])();\n    }\n    changeSelect(_const__WEBPACK_IMPORTED_MODULE_0__[\"languageTranslate\"][lang].select, \"selectFrom\");\n    changeSelect(_const__WEBPACK_IMPORTED_MODULE_0__[\"languageTranslate\"][lang].select, \"selectTo\");\n    changeText(_const__WEBPACK_IMPORTED_MODULE_0__[\"languageTranslate\"][lang].text);\n\n}\n\nfunction changeSelect(obj, selector) {\n    let index = 0;\n    let elementSelect = document.getElementById(selector);\n    for (const key in obj) {\n        elementSelect.options[index].innerHTML = obj[key];\n        index++;\n    }\n\n}\n\nfunction changeText(obj) {\n    for (const key in obj) {\n        document.getElementById(key).innerHTML = obj[key];\n    }\n}\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/localStorage.js":
/*!*****************************!*\
  !*** ./src/localStorage.js ***!
  \*****************************/
/*! exports provided: saveSessionStorage, loadSessionStorage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"saveSessionStorage\", function() { return saveSessionStorage; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"loadSessionStorage\", function() { return loadSessionStorage; });\n\n\nlet inputDigits = document.querySelector(\"#inputDigits\");\nlet selectFrom = document.querySelector(\"#selectFrom\");\nlet selectTo = document.querySelector(\"#selectTo\");\nlet inputResult = document.querySelector(\"#inputResult\");\nlet selectLanguage = document.querySelector(\"#selectLanguage\");\n\nfunction saveSessionStorage(element) {\n    sessionStorage.setItem('inputDigits', inputDigits.value);\n    sessionStorage.setItem('inputResult', inputResult.value);\n    sessionStorage.setItem('selectFrom', selectFrom.value);\n    sessionStorage.setItem('selectTo', selectTo.value);\n    sessionStorage.setItem('selectLanguage', selectLanguage.value);\n}\nfunction loadSessionStorage() {\n    inputDigits.value = sessionStorage.getItem('inputDigits');\n    inputResult.value = sessionStorage.getItem('inputResult');\n    selectFrom.value = sessionStorage.getItem('selectFrom');\n    selectTo.value = sessionStorage.getItem('selectTo');\n    selectLanguage.value = sessionStorage.getItem('selectLanguage');\n}\n\n\n//# sourceURL=webpack:///./src/localStorage.js?");

/***/ }),

/***/ "./src/style/img/close-button-png.png":
/*!********************************************!*\
  !*** ./src/style/img/close-button-png.png ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"1512b4487d292df518fc93906b7c5943.png\");\n\n//# sourceURL=webpack:///./src/style/img/close-button-png.png?");

/***/ }),

/***/ "./src/style/img/gear.svg":
/*!********************************!*\
  !*** ./src/style/img/gear.svg ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"db9d26aafd9684b5c073ec84d47e380b.svg\");\n\n//# sourceURL=webpack:///./src/style/img/gear.svg?");

/***/ }),

/***/ "./src/style/index.less":
/*!******************************!*\
  !*** ./src/style/index.less ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var api = __webpack_require__(/*! ../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n            var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!../../node_modules/less-loader/dist/cjs.js!./index.less */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/less-loader/dist/cjs.js!./src/style/index.less\");\n\n            content = content.__esModule ? content.default : content;\n\n            if (typeof content === 'string') {\n              content = [[module.i, content, '']];\n            }\n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = api(content, options);\n\n\n\nmodule.exports = content.locals || {};\n\n//# sourceURL=webpack:///./src/style/index.less?");

/***/ })

/******/ });