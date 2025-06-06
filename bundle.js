/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/style.css":
/*!*****************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/style.css ***!
  \*****************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `body {
  margin: 0;
  padding: 0;
}

.container {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 10px;
  padding: 10px;

  font-family: Arial, Helvetica, sans-serif;
  font-size: 10px;
  color: rgb(21, 80, 117);
  background-color: rgb(60, 119, 155);
}

.title {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
}

.column_container {
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 5px;
  background-color: rgb(228, 228, 228);
  border-radius: 3px;
}

.cards_container {

  display: flex;
  flex-direction: column;
  gap: 10px;
}

.card_item {

  font-family: Arial, Helvetica, sans-serif;
  font-size: 15px;
  color: rgb(80, 107, 124);
  padding: 5px;
  background-color: white;
  border-radius: 3px;
  box-shadow: 0px 2px 0px 0px rgba(21, 80, 177, 0.3);
  cursor: grab;
}

.card_item.dragged {
  position: absolute;
  z-index: 999;
  box-sizing: border-box;
  pointer-events: none;
  opacity: 0.5;
}

.card-placeholder {
  height: 60px; /* или динамически под размер карточки */
  background: rgba(0, 0, 0, 0.1);
  border: 2px dashed #ccc;
  border-radius: 4px;
  margin: 5px 0;
  transition: height 0.2s;
}

.btn {
  margin-top: 10px;
  color: rgb(21, 80, 117);
  background: none;
  border: none;
}
.btn:hover {
  cursor: pointer;
  text-decoration: underline;
}

.add_form {
  display: flex;
  flex-direction: column;
  gap: 10px;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 15px;
  color: rgb(80, 107, 124);
  padding: 5px;
  background-color: white;
  border-radius: 3px;
  box-shadow: 0px 2px 0px 0px rgba(21, 80, 177, 0.3);
}

.card_input {
  border: 2px solid rgb(60, 119, 155);
  border-radius: 2px;
  color: rgb(21, 80, 117);
}

.card_input::placeholder {
  padding: 3px;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 12px;
  color: rgb(202, 201, 201);
}

.add_card_button {
  padding: 5px;
  background-color: rgb(108, 209, 135);
  border-radius: 2px;
  border: none;
}

.close_form_button {
  padding: 5px;
  background-color: rgb(209, 108, 108);
  border-radius: 2px;
  border: none;
}

.add_button {
  margin-top: auto;
  margin-right: auto;
}

.delete_card_button {
  position: absolute;
  top: 1px;
  right: 1px;
  padding: 0 3px;
  border: 2px solid rgb(60, 119, 155);
  border-radius: 5px;
  color: rgb(21, 80, 117);
  background-color: white;
  cursor: pointer;
}`, "",{"version":3,"sources":["webpack://./src/css/style.css"],"names":[],"mappings":"AAAA;EACE,SAAS;EACT,UAAU;AACZ;;AAEA;EACE,aAAa;EACb,kCAAkC;EAClC,SAAS;EACT,aAAa;;EAEb,yCAAyC;EACzC,eAAe;EACf,uBAAuB;EACvB,mCAAmC;AACrC;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,8BAA8B;EAC9B,uBAAuB;AACzB;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,SAAS;EACT,YAAY;EACZ,oCAAoC;EACpC,kBAAkB;AACpB;;AAEA;;EAEE,aAAa;EACb,sBAAsB;EACtB,SAAS;AACX;;AAEA;;EAEE,yCAAyC;EACzC,eAAe;EACf,wBAAwB;EACxB,YAAY;EACZ,uBAAuB;EACvB,kBAAkB;EAClB,kDAAkD;EAClD,YAAY;AACd;;AAEA;EACE,kBAAkB;EAClB,YAAY;EACZ,sBAAsB;EACtB,oBAAoB;EACpB,YAAY;AACd;;AAEA;EACE,YAAY,EAAE,wCAAwC;EACtD,8BAA8B;EAC9B,uBAAuB;EACvB,kBAAkB;EAClB,aAAa;EACb,uBAAuB;AACzB;;AAEA;EACE,gBAAgB;EAChB,uBAAuB;EACvB,gBAAgB;EAChB,YAAY;AACd;AACA;EACE,eAAe;EACf,0BAA0B;AAC5B;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,SAAS;EACT,yCAAyC;EACzC,eAAe;EACf,wBAAwB;EACxB,YAAY;EACZ,uBAAuB;EACvB,kBAAkB;EAClB,kDAAkD;AACpD;;AAEA;EACE,mCAAmC;EACnC,kBAAkB;EAClB,uBAAuB;AACzB;;AAEA;EACE,YAAY;EACZ,yCAAyC;EACzC,eAAe;EACf,yBAAyB;AAC3B;;AAEA;EACE,YAAY;EACZ,oCAAoC;EACpC,kBAAkB;EAClB,YAAY;AACd;;AAEA;EACE,YAAY;EACZ,oCAAoC;EACpC,kBAAkB;EAClB,YAAY;AACd;;AAEA;EACE,gBAAgB;EAChB,kBAAkB;AACpB;;AAEA;EACE,kBAAkB;EAClB,QAAQ;EACR,UAAU;EACV,cAAc;EACd,mCAAmC;EACnC,kBAAkB;EAClB,uBAAuB;EACvB,uBAAuB;EACvB,eAAe;AACjB","sourcesContent":["body {\n  margin: 0;\n  padding: 0;\n}\n\n.container {\n  display: grid;\n  grid-template-columns: 1fr 1fr 1fr;\n  gap: 10px;\n  padding: 10px;\n\n  font-family: Arial, Helvetica, sans-serif;\n  font-size: 10px;\n  color: rgb(21, 80, 117);\n  background-color: rgb(60, 119, 155);\n}\n\n.title {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  align-items: flex-start;\n}\n\n.column_container {\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n  padding: 5px;\n  background-color: rgb(228, 228, 228);\n  border-radius: 3px;\n}\n\n.cards_container {\n\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n}\n\n.card_item {\n\n  font-family: Arial, Helvetica, sans-serif;\n  font-size: 15px;\n  color: rgb(80, 107, 124);\n  padding: 5px;\n  background-color: white;\n  border-radius: 3px;\n  box-shadow: 0px 2px 0px 0px rgba(21, 80, 177, 0.3);\n  cursor: grab;\n}\n\n.card_item.dragged {\n  position: absolute;\n  z-index: 999;\n  box-sizing: border-box;\n  pointer-events: none;\n  opacity: 0.5;\n}\n\n.card-placeholder {\n  height: 60px; /* или динамически под размер карточки */\n  background: rgba(0, 0, 0, 0.1);\n  border: 2px dashed #ccc;\n  border-radius: 4px;\n  margin: 5px 0;\n  transition: height 0.2s;\n}\n\n.btn {\n  margin-top: 10px;\n  color: rgb(21, 80, 117);\n  background: none;\n  border: none;\n}\n.btn:hover {\n  cursor: pointer;\n  text-decoration: underline;\n}\n\n.add_form {\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n  font-family: Arial, Helvetica, sans-serif;\n  font-size: 15px;\n  color: rgb(80, 107, 124);\n  padding: 5px;\n  background-color: white;\n  border-radius: 3px;\n  box-shadow: 0px 2px 0px 0px rgba(21, 80, 177, 0.3);\n}\n\n.card_input {\n  border: 2px solid rgb(60, 119, 155);\n  border-radius: 2px;\n  color: rgb(21, 80, 117);\n}\n\n.card_input::placeholder {\n  padding: 3px;\n  font-family: Arial, Helvetica, sans-serif;\n  font-size: 12px;\n  color: rgb(202, 201, 201);\n}\n\n.add_card_button {\n  padding: 5px;\n  background-color: rgb(108, 209, 135);\n  border-radius: 2px;\n  border: none;\n}\n\n.close_form_button {\n  padding: 5px;\n  background-color: rgb(209, 108, 108);\n  border-radius: 2px;\n  border: none;\n}\n\n.add_button {\n  margin-top: auto;\n  margin-right: auto;\n}\n\n.delete_card_button {\n  position: absolute;\n  top: 1px;\n  right: 1px;\n  padding: 0 3px;\n  border: 2px solid rgb(60, 119, 155);\n  border-radius: 5px;\n  color: rgb(21, 80, 117);\n  background-color: white;\n  cursor: pointer;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/css/style.css":
/*!***************************!*\
  !*** ./src/css/style.css ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/css/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/js/AddForm.js":
/*!***************************!*\
  !*** ./src/js/AddForm.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AddForm: () => (/* binding */ AddForm)
/* harmony export */ });
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var AddForm = /*#__PURE__*/function () {
  function AddForm() {
    _classCallCheck(this, AddForm);
  }
  return _createClass(AddForm, [{
    key: "addCardForm",
    value: function addCardForm(element) {
      var form = document.querySelector('.add_form');
      if (form) form.remove();
      var addedForm = this.getAddForm();
      element.insertAdjacentHTML('beforebegin', addedForm);
    }
  }, {
    key: "closeCardForm",
    value: function closeCardForm(element) {
      var closeElement = element.closest('.add_form');
      closeElement.remove();
    }
  }, {
    key: "getAddForm",
    value: function getAddForm() {
      return "\n      <form class=\"add_form\">\n        <input class=\"card_input\" type=\"text\" placeholder=\"write something...\" required>\n        <div class=\"add_form_buttons\">\n          <button type=\"submit\" class=\"add_card_button\">Add Card</button>\n          <button type=\"button\" class=\"close_form_button\">Close</button>\n        </div>\n      </form>\n    ";
    }
  }]);
}();

/***/ }),

/***/ "./src/js/Board.js":
/*!*************************!*\
  !*** ./src/js/Board.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Board: () => (/* binding */ Board)
/* harmony export */ });
/* harmony import */ var _Card__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Card */ "./src/js/Card.js");
/* harmony import */ var _AddForm__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AddForm */ "./src/js/AddForm.js");
/* harmony import */ var _Placeholder__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Placeholder */ "./src/js/Placeholder.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }



var Board = /*#__PURE__*/function () {
  function Board() {
    var _this = this;
    _classCallCheck(this, Board);
    _defineProperty(this, "onClick", function (e) {
      //e.preventDefault();

      var addButton = e.target.classList.contains('add_button');
      var closeFormButton = e.target.classList.contains('close_form_button');
      var addCardButton = e.target.classList.contains('add_card_button');
      var deleteCardButton = e.target.classList.contains('delete_card_button');
      if (addButton) _this.addForm.addCardForm(e.target);
      if (closeFormButton) _this.addForm.closeCardForm(e.target);
      if (addCardButton) {
        var input = document.querySelector('.card_input');
        if (!input.value.trim()) {
          input.focus();
          return;
        }
        ;
        _this.card.addCard(e.target, _this.data);
        _this.addForm.closeCardForm(e.target);
      }
      ;
      if (deleteCardButton) {
        var card = e.target.closest('.card_item');
        card.remove();
      }
      ;
    });
    _defineProperty(this, "onInput", function (e) {
      _this.data = e.target.value;
    });
    _defineProperty(this, "onMouseover", function (e) {
      var cardItem = e.target.closest('.card_item');
      if (cardItem) {
        //cardItem.style.position = 'relative';
        //const button = cardItem.querySelector('.delete_card_button');
        var button = _this.card.getCloseButton();
        if (!cardItem.querySelector('.delete_card_button')) {
          cardItem.insertAdjacentHTML('beforeend', button);
          //button.style.display = 'inline-block';
        }
      }
      if (_this.dndCard) {
        _this.dndCard.style.width = "".concat(_this.originalWidth, "px");
        //this.dndCard.style.height = `${this.originalHeight}px`;
        _this.dndCard.style.left = "".concat(e.clientX - _this.dragOffset.x, "px");
        _this.dndCard.style.top = "".concat(e.clientY - _this.dragOffset.y, "px");

        //fantom element
        var column = _this.dndCard.closest('.cards_container');
        var nextCard = _this.dndCard.nextSibling;
        _this.placeholder.show(column, _this.originalHeight, nextCard);
      }
    });
    _defineProperty(this, "onMouseout", function (e) {
      var cardItem = e.target.closest('.card_item');
      if (cardItem && !cardItem.contains(e.relatedTarget)) {
        var button = cardItem.querySelector('.delete_card_button');
        if (button) {
          button.remove();
        }
      }
    });
    _defineProperty(this, "onMouseup", function (e) {
      var columnContainer = e.target.closest('.column_container');
      //if(!columnContainer) return;

      var cardContainer = columnContainer.querySelector('.cards_container');
      var mouseUpCard = e.target.closest('.card_item');
      if (!cardContainer) return;
      if (!mouseUpCard) {
        cardContainer.append(_this.dndCard);
      } else {
        cardContainer.insertBefore(_this.dndCard, mouseUpCard);
      }
      ;
      if (!_this.dndCard) return;
      _this.dndCard.classList.remove('dragged');
      _this.dndCard.style.width = '';
      //this.dndCard.style.height = '';
      document.body.style.cursor = '';
      _this.dndCard = null;
      _this.placeholder.remove();
      document.documentElement.removeEventListener('mouseup', _this.onMouseup);
    });
    _defineProperty(this, "onMousedown", function (e) {
      if (!e.target.closest('.card_item')) return;
      if (e.target.classList.contains('delete_card_button')) return;
      e.preventDefault();
      _this.dndCard = e.target.closest('.card_item');

      // Сохраняем оригинальные размеры (чтобы placeholder был такого же размера)
      _this.originalWidth = _this.dndCard.offsetWidth;
      _this.originalHeight = _this.dndCard.offsetHeight;
      var cardRect = _this.dndCard.getBoundingClientRect();
      _this.dragOffset = {
        x: e.clientX - cardRect.left,
        y: e.clientY - cardRect.top
      };

      // фиксировать минимальную высоту контейнера

      _this.dndCard.classList.add('dragged');
      document.body.style.cursor = 'grabbing';
      document.documentElement.addEventListener('mouseup', _this.onMouseup);
    });
    this.container = document.querySelector('.container');
    this.card = new _Card__WEBPACK_IMPORTED_MODULE_0__.Card();
    this.addForm = new _AddForm__WEBPACK_IMPORTED_MODULE_1__.AddForm();
    this.placeholder = new _Placeholder__WEBPACK_IMPORTED_MODULE_2__.Placeholder();
    this.data;
    this.dndCard = null;
    this.mouseUpCard = null;
    this.dragOffset = {
      x: 0,
      y: 0
    };
    this.originalWidth;
    this.originalHeight;
  }
  return _createClass(Board, [{
    key: "init",
    value: function init() {
      this.container.addEventListener('click', this.onClick);
      this.container.addEventListener('change', this.onInput);
      document.documentElement.addEventListener('mouseover', this.onMouseover);
      document.documentElement.addEventListener('mouseout', this.onMouseout);
      this.container.addEventListener('mousedown', this.onMousedown);
      //this.container.addEventListener('mouseup', this.onMouseup);
    }
  }]);
}();

/***/ }),

/***/ "./src/js/Card.js":
/*!************************!*\
  !*** ./src/js/Card.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Card: () => (/* binding */ Card)
/* harmony export */ });
/* harmony import */ var _AddForm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AddForm */ "./src/js/AddForm.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }

var Card = /*#__PURE__*/function () {
  function Card() {
    _classCallCheck(this, Card);
  }
  return _createClass(Card, [{
    key: "addCard",
    value: function addCard(element, data) {
      var container = element.closest('.column_container');
      var cardContainer = container.querySelector('.cards_container');
      var card = this.getCard(data);
      cardContainer.insertAdjacentHTML('beforeend', card);
    }
  }, {
    key: "getCard",
    value: function getCard(data) {
      return "\n    <div class=\"card_item\">\n\n      <div class=\"card_content\">".concat(data, "</div>\n      <div class=\"card_status\"></div>\n    </div>\n    ");
    }
  }, {
    key: "getCloseButton",
    value: function getCloseButton() {
      return "\n    <button type=\"button\" class=\"delete_card_button\">&#215;</button>\n    ";
    }
  }]);
}();

/***/ }),

/***/ "./src/js/Placeholder.js":
/*!*******************************!*\
  !*** ./src/js/Placeholder.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Placeholder: () => (/* binding */ Placeholder)
/* harmony export */ });
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var Placeholder = /*#__PURE__*/function () {
  function Placeholder() {
    _classCallCheck(this, Placeholder);
    this.element = this.createPlaceholder();
    this.isInDOM = false;
  }
  return _createClass(Placeholder, [{
    key: "createPlaceholder",
    value: function createPlaceholder() {
      var el = document.createElement('div');
      el.className = 'card-placeholder';
      el.style.display = 'none';
      return el;
    }
  }, {
    key: "show",
    value: function show(parent, height) {
      var beforeNode = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
      this.element.style.height = "".concat(height, "px");
      if (!this.isInDOM) {
        if (beforeNode) {
          parent.insertBefore(this.element, beforeNode);
        } else {
          parent.appendChild(this.element);
        }
        this.isInDOM = true;
      }
      this.element.style.display = 'block';
    }
  }, {
    key: "hide",
    value: function hide() {
      if (this.isInDOM) {
        this.element.style.display = 'none';
      }
    }
  }, {
    key: "remove",
    value: function remove() {
      if (this.isInDOM && this.element.parentNode) {
        this.element.parentNode.removeChild(this.element);
        this.isInDOM = false;
      }
    }
  }]);
}();

/***/ }),

/***/ "./src/js/app.js":
/*!***********************!*\
  !*** ./src/js/app.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Board__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Board */ "./src/js/Board.js");

document.addEventListener('DOMContentLoaded', function () {
  var board = new _Board__WEBPACK_IMPORTED_MODULE_0__.Board();
  board.init();
});

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _css_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./css/style.css */ "./src/css/style.css");
/* harmony import */ var _js_app_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./js/app.js */ "./src/js/app.js");


})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map