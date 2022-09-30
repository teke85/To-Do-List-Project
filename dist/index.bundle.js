"use strict";
(self["webpackChunkwebpack_boiler_plate"] = self["webpackChunkwebpack_boiler_plate"] || []).push([["index"],{

/***/ "./node_modules/css-loader/dist/cjs.js!./src/index.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/index.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "*,\r\n*::before,\r\n*::after {\r\n  box-sizing: border-box;\r\n  -webkit-box-sizing: border-box;\r\n  font-family: 'Poppins', sans-serif;\r\n  margin: 0;\r\n  padding: 0;\r\n}\r\n\r\nbody {\r\n  background: #e5e7ed;\r\n}\r\n\r\na {\r\n  text-decoration: none;\r\n  color: #414348;\r\n}\r\n\r\nmain {\r\n  display: flex;\r\n  flex-direction: column;\r\n  width: 400px;\r\n  margin: 100px auto;\r\n  align-items: center;\r\n}\r\n\r\n/* stylelint-disable */\r\n.main-sec {\r\n  width: 550px;\r\n  padding: 10px;\r\n  border: 2px solid #041444;\r\n  border-radius: 10px;\r\n  background: linear-gradient(315deg, #dde0e8, #d3d5d8);\r\n}\r\n\r\nh1 {\r\n  font-size: 24px;\r\n  color: #041444;\r\n}\r\n\r\n#title {\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: space-between;\r\n  height: 50px;\r\n  padding: 0 10px;\r\n  border-radius: 10px 10px 0 0;\r\n  border-bottom: 3px solid #041444;\r\n}\r\n\r\n#title-icon,\r\n#add-icon,\r\n#item-icon {\r\n  cursor: pointer;\r\n  transition: 1s;\r\n}\r\n\r\n#add-icon:hover,\r\n#item-icon:hover {\r\n  transform: translateY(2px);\r\n}\r\n\r\n#input-area {\r\n  height: 50px;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: space-between;\r\n  padding: 0 10px;\r\n  border-bottom: 2px solid #041444;\r\n}\r\n\r\n::placeholder {\r\n  font-style: italic;\r\n  color: #041444;\r\n  font-size: 16px;\r\n}\r\n\r\ninput {\r\n  outline: none;\r\n  border: none;\r\n  background: transparent;\r\n  font-size: 16px;\r\n}\r\n\r\n#do-input {\r\n  width: 90%;\r\n}\r\n\r\n.list-task-item {\r\n  color: #041444;\r\n  font-weight: 500;\r\n}\r\n\r\ninput[type='checkbox'] {\r\n  accent-color: #0ac36a;\r\n  margin-right: 10px;\r\n}\r\n\r\ninput:checked + .task-item {\r\n  text-decoration: line-through;\r\n}\r\n\r\n.list_div {\r\n  display: flex;\r\n  flex-direction: column;\r\n  width: auto;\r\n  max-height: 400px;\r\n  overflow: scroll;\r\n  scroll-behavior: smooth;\r\n  scrollbar-color: #041444;\r\n  scrollbar-width: none; /* Firefox */\r\n  -ms-overflow-style: none; /* Internet Explorer 10+ */\r\n}\r\n\r\n.todo_list_div::-webkit-scrollbar {\r\n  /* WebKit */\r\n  width: 0;\r\n  height: 0;\r\n}\r\n\r\nli {\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: space-between;\r\n  height: 50px;\r\n  padding: 0 10px;\r\n  border-bottom: 2px solid #041444;\r\n}\r\n\r\n.list-item-info {\r\n  display: flex;\r\n  align-items: center;\r\n  width: 95%;\r\n}\r\n\r\n.bottom-sec {\r\n  display: flex;\r\n  height: 50px;\r\n  align-items: center;\r\n  justify-content: center;\r\n  border-radius: 0 0 10px 10px;\r\n}\r\n\r\n#clear {\r\n  font-size: 22px;\r\n  font-weight: 700;\r\n}\r\n\r\n#clear:hover {\r\n  text-decoration: underline;\r\n}\r\n\r\n.alert {\r\n  color: #db0505;\r\n  font-size: 22px;\r\n  font-weight: 700;\r\n  margin: 25px 0;\r\n}\r\n\r\n.reset:hover {\r\n  -webkit-animation: rotate-center 0.6s ease-in-out both;\r\n  animation: rotate-center 0.6s ease-in-out both;\r\n}\r\n\r\n/* stylelint-enable */\r\n@-webkit-keyframes rotate-center {\r\n  0% {\r\n    -webkit-transform: rotate(0);\r\n    transform: rotate(0);\r\n  }\r\n\r\n  100% {\r\n    -webkit-transform: rotate(360deg);\r\n    transform: rotate(360deg);\r\n  }\r\n}\r\n\r\n@keyframes rotate-center {\r\n  0% {\r\n    -webkit-transform: rotate(0);\r\n    transform: rotate(0);\r\n  }\r\n\r\n  100% {\r\n    -webkit-transform: rotate(360deg);\r\n    transform: rotate(360deg);\r\n  }\r\n}\r\n", "",{"version":3,"sources":["webpack://./src/index.css"],"names":[],"mappings":"AAEA;;;EAGE,sBAAsB;EACtB,8BAA8B;EAC9B,kCAAkC;EAClC,SAAS;EACT,UAAU;AACZ;;AAEA;EACE,mBAAmB;AACrB;;AAEA;EACE,qBAAqB;EACrB,cAAc;AAChB;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,YAAY;EACZ,kBAAkB;EAClB,mBAAmB;AACrB;;AAEA,sBAAsB;AACtB;EACE,YAAY;EACZ,aAAa;EACb,yBAAyB;EACzB,mBAAmB;EACnB,qDAAqD;AACvD;;AAEA;EACE,eAAe;EACf,cAAc;AAChB;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,8BAA8B;EAC9B,YAAY;EACZ,eAAe;EACf,4BAA4B;EAC5B,gCAAgC;AAClC;;AAEA;;;EAGE,eAAe;EACf,cAAc;AAChB;;AAEA;;EAEE,0BAA0B;AAC5B;;AAEA;EACE,YAAY;EACZ,aAAa;EACb,mBAAmB;EACnB,8BAA8B;EAC9B,eAAe;EACf,gCAAgC;AAClC;;AAEA;EACE,kBAAkB;EAClB,cAAc;EACd,eAAe;AACjB;;AAEA;EACE,aAAa;EACb,YAAY;EACZ,uBAAuB;EACvB,eAAe;AACjB;;AAEA;EACE,UAAU;AACZ;;AAEA;EACE,cAAc;EACd,gBAAgB;AAClB;;AAEA;EACE,qBAAqB;EACrB,kBAAkB;AACpB;;AAEA;EACE,6BAA6B;AAC/B;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,WAAW;EACX,iBAAiB;EACjB,gBAAgB;EAChB,uBAAuB;EACvB,wBAAwB;EACxB,qBAAqB,EAAE,YAAY;EACnC,wBAAwB,EAAE,0BAA0B;AACtD;;AAEA;EACE,WAAW;EACX,QAAQ;EACR,SAAS;AACX;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,8BAA8B;EAC9B,YAAY;EACZ,eAAe;EACf,gCAAgC;AAClC;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,UAAU;AACZ;;AAEA;EACE,aAAa;EACb,YAAY;EACZ,mBAAmB;EACnB,uBAAuB;EACvB,4BAA4B;AAC9B;;AAEA;EACE,eAAe;EACf,gBAAgB;AAClB;;AAEA;EACE,0BAA0B;AAC5B;;AAEA;EACE,cAAc;EACd,eAAe;EACf,gBAAgB;EAChB,cAAc;AAChB;;AAEA;EACE,sDAAsD;EACtD,8CAA8C;AAChD;;AAEA,qBAAqB;AACrB;EACE;IACE,4BAA4B;IAC5B,oBAAoB;EACtB;;EAEA;IACE,iCAAiC;IACjC,yBAAyB;EAC3B;AACF;;AAEA;EACE;IACE,4BAA4B;IAC5B,oBAAoB;EACtB;;EAEA;IACE,iCAAiC;IACjC,yBAAyB;EAC3B;AACF","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400&display=swap');\r\n\r\n*,\r\n*::before,\r\n*::after {\r\n  box-sizing: border-box;\r\n  -webkit-box-sizing: border-box;\r\n  font-family: 'Poppins', sans-serif;\r\n  margin: 0;\r\n  padding: 0;\r\n}\r\n\r\nbody {\r\n  background: #e5e7ed;\r\n}\r\n\r\na {\r\n  text-decoration: none;\r\n  color: #414348;\r\n}\r\n\r\nmain {\r\n  display: flex;\r\n  flex-direction: column;\r\n  width: 400px;\r\n  margin: 100px auto;\r\n  align-items: center;\r\n}\r\n\r\n/* stylelint-disable */\r\n.main-sec {\r\n  width: 550px;\r\n  padding: 10px;\r\n  border: 2px solid #041444;\r\n  border-radius: 10px;\r\n  background: linear-gradient(315deg, #dde0e8, #d3d5d8);\r\n}\r\n\r\nh1 {\r\n  font-size: 24px;\r\n  color: #041444;\r\n}\r\n\r\n#title {\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: space-between;\r\n  height: 50px;\r\n  padding: 0 10px;\r\n  border-radius: 10px 10px 0 0;\r\n  border-bottom: 3px solid #041444;\r\n}\r\n\r\n#title-icon,\r\n#add-icon,\r\n#item-icon {\r\n  cursor: pointer;\r\n  transition: 1s;\r\n}\r\n\r\n#add-icon:hover,\r\n#item-icon:hover {\r\n  transform: translateY(2px);\r\n}\r\n\r\n#input-area {\r\n  height: 50px;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: space-between;\r\n  padding: 0 10px;\r\n  border-bottom: 2px solid #041444;\r\n}\r\n\r\n::placeholder {\r\n  font-style: italic;\r\n  color: #041444;\r\n  font-size: 16px;\r\n}\r\n\r\ninput {\r\n  outline: none;\r\n  border: none;\r\n  background: transparent;\r\n  font-size: 16px;\r\n}\r\n\r\n#do-input {\r\n  width: 90%;\r\n}\r\n\r\n.list-task-item {\r\n  color: #041444;\r\n  font-weight: 500;\r\n}\r\n\r\ninput[type='checkbox'] {\r\n  accent-color: #0ac36a;\r\n  margin-right: 10px;\r\n}\r\n\r\ninput:checked + .task-item {\r\n  text-decoration: line-through;\r\n}\r\n\r\n.list_div {\r\n  display: flex;\r\n  flex-direction: column;\r\n  width: auto;\r\n  max-height: 400px;\r\n  overflow: scroll;\r\n  scroll-behavior: smooth;\r\n  scrollbar-color: #041444;\r\n  scrollbar-width: none; /* Firefox */\r\n  -ms-overflow-style: none; /* Internet Explorer 10+ */\r\n}\r\n\r\n.todo_list_div::-webkit-scrollbar {\r\n  /* WebKit */\r\n  width: 0;\r\n  height: 0;\r\n}\r\n\r\nli {\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: space-between;\r\n  height: 50px;\r\n  padding: 0 10px;\r\n  border-bottom: 2px solid #041444;\r\n}\r\n\r\n.list-item-info {\r\n  display: flex;\r\n  align-items: center;\r\n  width: 95%;\r\n}\r\n\r\n.bottom-sec {\r\n  display: flex;\r\n  height: 50px;\r\n  align-items: center;\r\n  justify-content: center;\r\n  border-radius: 0 0 10px 10px;\r\n}\r\n\r\n#clear {\r\n  font-size: 22px;\r\n  font-weight: 700;\r\n}\r\n\r\n#clear:hover {\r\n  text-decoration: underline;\r\n}\r\n\r\n.alert {\r\n  color: #db0505;\r\n  font-size: 22px;\r\n  font-weight: 700;\r\n  margin: 25px 0;\r\n}\r\n\r\n.reset:hover {\r\n  -webkit-animation: rotate-center 0.6s ease-in-out both;\r\n  animation: rotate-center 0.6s ease-in-out both;\r\n}\r\n\r\n/* stylelint-enable */\r\n@-webkit-keyframes rotate-center {\r\n  0% {\r\n    -webkit-transform: rotate(0);\r\n    transform: rotate(0);\r\n  }\r\n\r\n  100% {\r\n    -webkit-transform: rotate(360deg);\r\n    transform: rotate(360deg);\r\n  }\r\n}\r\n\r\n@keyframes rotate-center {\r\n  0% {\r\n    -webkit-transform: rotate(0);\r\n    transform: rotate(0);\r\n  }\r\n\r\n  100% {\r\n    -webkit-transform: rotate(360deg);\r\n    transform: rotate(360deg);\r\n  }\r\n}\r\n"],"sourceRoot":""}]);
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
  var list = []; // return the list of modules as css string

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
  }; // import a list of modules into the list


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
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/index.css":
/*!***********************!*\
  !*** ./src/index.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./index.css */ "./node_modules/css-loader/dist/cjs.js!./src/index.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


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
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

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
  } // For old IE

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

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.css */ "./src/index.css");
/* harmony import */ var _icons_refresh_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./icons/refresh.png */ "./src/icons/refresh.png");
/* harmony import */ var _icons_add_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./icons/add.png */ "./src/icons/add.png");
/* harmony import */ var _modules_manageListItems_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/manageListItems.js */ "./src/modules/manageListItems.js");
/* harmony import */ var _modules_checkBox_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/checkBox.js */ "./src/modules/checkBox.js");
/* eslint-disable import/no-unresolved */






const titleSpan = document.getElementById('title-icon');
const addSpan = document.getElementById('add-icon');
const icon1 = new Image();
icon1.src = _icons_refresh_png__WEBPACK_IMPORTED_MODULE_1__;
icon1.classList.add('reset');
const icon2 = new Image();
icon2.src = _icons_add_png__WEBPACK_IMPORTED_MODULE_2__;
titleSpan.appendChild(icon1);
addSpan.appendChild(icon2);

_modules_manageListItems_js__WEBPACK_IMPORTED_MODULE_3__["default"].add();
_modules_manageListItems_js__WEBPACK_IMPORTED_MODULE_3__["default"].show();
_modules_manageListItems_js__WEBPACK_IMPORTED_MODULE_3__["default"].remove();
_modules_manageListItems_js__WEBPACK_IMPORTED_MODULE_3__["default"].edit();
_modules_manageListItems_js__WEBPACK_IMPORTED_MODULE_3__["default"].clear();
(0,_modules_checkBox_js__WEBPACK_IMPORTED_MODULE_4__["default"])();
_modules_manageListItems_js__WEBPACK_IMPORTED_MODULE_3__["default"].reset();


/***/ }),

/***/ "./src/modules/checkBox.js":
/*!*********************************!*\
  !*** ./src/modules/checkBox.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ check)
/* harmony export */ });
function check() {
  const inputChecks = document.querySelectorAll('.check');
  inputChecks.forEach((check) => {
    check.addEventListener('change', (e) => {
      let toDos = [];
      toDos = JSON.parse(localStorage.getItem('toDos') || '[]');
      toDos.forEach((task) => {
        if (e.target.id === `input${task.index}` && task.completed === false) {
          task.completed = true;
          e.target.checked = true;
          localStorage.setItem('toDos', JSON.stringify(toDos));
        } else if (
          e.target.id === `input${task.index}`
          && task.completed === true
        ) {
          task.completed = false;
          e.target.checked = false;
          localStorage.setItem('toDos', JSON.stringify(toDos));
        }
      });
    });
  });
}


/***/ }),

/***/ "./src/modules/manageListItems.js":
/*!****************************************!*\
  !*** ./src/modules/manageListItems.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ToDo)
/* harmony export */ });
/* harmony import */ var _icons_delete_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../icons/delete.png */ "./src/icons/delete.png");


const icon3 = new Image()
icon3.src = _icons_delete_png__WEBPACK_IMPORTED_MODULE_0__
const toDos = []

class ToDo {
  constructor(todo) {
    this.description = todo
    this.index = toDos.length + 1
    this.id = Date.now().toString()
    this.completed = false
  }

  static add() {
    const alert = document.querySelector('.alert')
    const addIcon = document.getElementById('add-icon')
    const doInput = document.getElementById('do-input')
    alert.style.display = 'none'
    addIcon.addEventListener('click', () => {
      let toDos = []
      toDos = JSON.parse(localStorage.getItem('toDos') || '[]')
      if (doInput.value !== '') {
        const newTask = new ToDo(doInput.value)
        toDos.push(newTask)
        toDos.forEach((task, i) => {
          task.index = i + 1
        })
        localStorage.setItem('toDos', JSON.stringify(toDos))
        doInput.value = ''
        window.location.reload()
      } else {
        alert.innerText = 'the input field is empty, kindly add some text!'
        alert.style.display = 'flex'
      }
    })
  }

  static show() {
    const todoList = document.getElementById('item-do-list')
    const toDos = JSON.parse(localStorage.getItem('toDos') || '[]')
    let inputCheck = ''
    todoList.innerHTML = ''
    toDos.forEach((task) => {
      if (task.completed === false) {
        inputCheck = ''
      } else {
        inputCheck = 'checked'
      }
      todoList.innerHTML += `
      <li>
        <div class="list-item-info">
          <input ${inputCheck} type="checkbox" class="check" id="input${task.index}">
          <input id="${task.index}" class="list-task-item" value="${task.description}">
        </div>
        <span id="item-icon">
          <img src="${icon3.src}" class="remove" id="${task.id}" alt="Remove Task" title="Remove Task">
        </span>
      </li>
      `
    })
  }

  static remove() {
    const removeIcon = document.querySelectorAll('.remove')
    removeIcon.forEach((icon) => {
      icon.addEventListener('click', (e) => {
        let toDos = JSON.parse(localStorage.getItem('toDos') || '[]')
        toDos = toDos.filter((task) => task.id !== e.target.id)
        toDos.forEach((task, i) => {
          task.index = i + 1
        })
        localStorage.setItem('toDos', JSON.stringify(toDos))
        window.location.reload()
      })
    })
  }

  static edit() {
    const taskItems = document.querySelectorAll('.task-item')
    taskItems.forEach((item) => {
      item.addEventListener('click', () => {
        item.style.background = '#ddd'
        item.setAttribute('contenteditable', 'true')
      })
      item.addEventListener('focusout', () => {
        const toDos = JSON.parse(localStorage.getItem('toDos') || '[]')
        item.style.background = 'none'
        toDos.forEach((task) => {
          if (task.index.toString() === item.id) {
            task.description = item.value
            localStorage.setItem('toDos', JSON.stringify(toDos))
          }
        })
      })
    })
  }

  static clear() {
    const clearButton = document.getElementById('clear')
    clearButton.addEventListener('click', (e) => {
      e.preventDefault()
      let toDos = JSON.parse(localStorage.getItem('toDos') || '[]')
      toDos = toDos.filter((task) => task.completed === false)
      localStorage.setItem('toDos', JSON.stringify(toDos))
      window.location.reload()
    })
  }

  static reset() {
    const resetButton = document.querySelector('.reset')
    const alert = document.querySelector('.alert')
    let toDos = JSON.parse(localStorage.getItem('toDos') || '[]')
    resetButton.addEventListener('click', () => {
      if (toDos === '') {
        alert.innerText = 'List is empty.'
        alert.style.display = 'flex'
      } else {
        // eslint-disable-next-line no-lonely-if, no-restricted-globals, no-alert
        if (confirm('All items will be remove perminately. Are you sure?')) {
          toDos = []
          localStorage.setItem('toDos', JSON.stringify(toDos))
          window.location.reload()
        }
      }
    })
  }
}


/***/ }),

/***/ "./src/icons/add.png":
/*!***************************!*\
  !*** ./src/icons/add.png ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "9a7464b9b7f4fb5e534a.png";

/***/ }),

/***/ "./src/icons/delete.png":
/*!******************************!*\
  !*** ./src/icons/delete.png ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "dd2eeae21d8405c05839.png";

/***/ }),

/***/ "./src/icons/refresh.png":
/*!*******************************!*\
  !*** ./src/icons/refresh.png ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "bddde9e1f5c66280c436.png";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0EsU0FBUztBQUNULE9BQU87QUFDUCxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYnBhY2stYm9pbGVyLXBsYXRlLy4vc3JjL2luZGV4LmNzcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWJvaWxlci1wbGF0ZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1ib2lsZXItcGxhdGUvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWJvaWxlci1wbGF0ZS8uL3NyYy9pbmRleC5jc3M/Y2ZlNCIsIndlYnBhY2s6Ly93ZWJwYWNrLWJvaWxlci1wbGF0ZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWJvaWxlci1wbGF0ZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1ib2lsZXItcGxhdGUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1ib2lsZXItcGxhdGUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1ib2lsZXItcGxhdGUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWJvaWxlci1wbGF0ZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3dlYnBhY2stYm9pbGVyLXBsYXRlLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL3dlYnBhY2stYm9pbGVyLXBsYXRlLy4vc3JjL21vZHVsZXMvY2hlY2tCb3guanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1ib2lsZXItcGxhdGUvLi9zcmMvbW9kdWxlcy9tYW5hZ2VMaXN0SXRlbXMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Qb3BwaW5zOndnaHRAMTAwOzIwMDszMDA7NDAwJmRpc3BsYXk9c3dhcCk7XCJdKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIiosXFxyXFxuKjo6YmVmb3JlLFxcclxcbio6OmFmdGVyIHtcXHJcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxuICAtd2Via2l0LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxuICBmb250LWZhbWlseTogJ1BvcHBpbnMnLCBzYW5zLXNlcmlmO1xcclxcbiAgbWFyZ2luOiAwO1xcclxcbiAgcGFkZGluZzogMDtcXHJcXG59XFxyXFxuXFxyXFxuYm9keSB7XFxyXFxuICBiYWNrZ3JvdW5kOiAjZTVlN2VkO1xcclxcbn1cXHJcXG5cXHJcXG5hIHtcXHJcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXHJcXG4gIGNvbG9yOiAjNDE0MzQ4O1xcclxcbn1cXHJcXG5cXHJcXG5tYWluIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgd2lkdGg6IDQwMHB4O1xcclxcbiAgbWFyZ2luOiAxMDBweCBhdXRvO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLyogc3R5bGVsaW50LWRpc2FibGUgKi9cXHJcXG4ubWFpbi1zZWMge1xcclxcbiAgd2lkdGg6IDU1MHB4O1xcclxcbiAgcGFkZGluZzogMTBweDtcXHJcXG4gIGJvcmRlcjogMnB4IHNvbGlkICMwNDE0NDQ7XFxyXFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcclxcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDMxNWRlZywgI2RkZTBlOCwgI2QzZDVkOCk7XFxyXFxufVxcclxcblxcclxcbmgxIHtcXHJcXG4gIGZvbnQtc2l6ZTogMjRweDtcXHJcXG4gIGNvbG9yOiAjMDQxNDQ0O1xcclxcbn1cXHJcXG5cXHJcXG4jdGl0bGUge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICBoZWlnaHQ6IDUwcHg7XFxyXFxuICBwYWRkaW5nOiAwIDEwcHg7XFxyXFxuICBib3JkZXItcmFkaXVzOiAxMHB4IDEwcHggMCAwO1xcclxcbiAgYm9yZGVyLWJvdHRvbTogM3B4IHNvbGlkICMwNDE0NDQ7XFxyXFxufVxcclxcblxcclxcbiN0aXRsZS1pY29uLFxcclxcbiNhZGQtaWNvbixcXHJcXG4jaXRlbS1pY29uIHtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gIHRyYW5zaXRpb246IDFzO1xcclxcbn1cXHJcXG5cXHJcXG4jYWRkLWljb246aG92ZXIsXFxyXFxuI2l0ZW0taWNvbjpob3ZlciB7XFxyXFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMnB4KTtcXHJcXG59XFxyXFxuXFxyXFxuI2lucHV0LWFyZWEge1xcclxcbiAgaGVpZ2h0OiA1MHB4O1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICBwYWRkaW5nOiAwIDEwcHg7XFxyXFxuICBib3JkZXItYm90dG9tOiAycHggc29saWQgIzA0MTQ0NDtcXHJcXG59XFxyXFxuXFxyXFxuOjpwbGFjZWhvbGRlciB7XFxyXFxuICBmb250LXN0eWxlOiBpdGFsaWM7XFxyXFxuICBjb2xvcjogIzA0MTQ0NDtcXHJcXG4gIGZvbnQtc2l6ZTogMTZweDtcXHJcXG59XFxyXFxuXFxyXFxuaW5wdXQge1xcclxcbiAgb3V0bGluZTogbm9uZTtcXHJcXG4gIGJvcmRlcjogbm9uZTtcXHJcXG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xcclxcbiAgZm9udC1zaXplOiAxNnB4O1xcclxcbn1cXHJcXG5cXHJcXG4jZG8taW5wdXQge1xcclxcbiAgd2lkdGg6IDkwJTtcXHJcXG59XFxyXFxuXFxyXFxuLmxpc3QtdGFzay1pdGVtIHtcXHJcXG4gIGNvbG9yOiAjMDQxNDQ0O1xcclxcbiAgZm9udC13ZWlnaHQ6IDUwMDtcXHJcXG59XFxyXFxuXFxyXFxuaW5wdXRbdHlwZT0nY2hlY2tib3gnXSB7XFxyXFxuICBhY2NlbnQtY29sb3I6ICMwYWMzNmE7XFxyXFxuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XFxyXFxufVxcclxcblxcclxcbmlucHV0OmNoZWNrZWQgKyAudGFzay1pdGVtIHtcXHJcXG4gIHRleHQtZGVjb3JhdGlvbjogbGluZS10aHJvdWdoO1xcclxcbn1cXHJcXG5cXHJcXG4ubGlzdF9kaXYge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICB3aWR0aDogYXV0bztcXHJcXG4gIG1heC1oZWlnaHQ6IDQwMHB4O1xcclxcbiAgb3ZlcmZsb3c6IHNjcm9sbDtcXHJcXG4gIHNjcm9sbC1iZWhhdmlvcjogc21vb3RoO1xcclxcbiAgc2Nyb2xsYmFyLWNvbG9yOiAjMDQxNDQ0O1xcclxcbiAgc2Nyb2xsYmFyLXdpZHRoOiBub25lOyAvKiBGaXJlZm94ICovXFxyXFxuICAtbXMtb3ZlcmZsb3ctc3R5bGU6IG5vbmU7IC8qIEludGVybmV0IEV4cGxvcmVyIDEwKyAqL1xcclxcbn1cXHJcXG5cXHJcXG4udG9kb19saXN0X2Rpdjo6LXdlYmtpdC1zY3JvbGxiYXIge1xcclxcbiAgLyogV2ViS2l0ICovXFxyXFxuICB3aWR0aDogMDtcXHJcXG4gIGhlaWdodDogMDtcXHJcXG59XFxyXFxuXFxyXFxubGkge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICBoZWlnaHQ6IDUwcHg7XFxyXFxuICBwYWRkaW5nOiAwIDEwcHg7XFxyXFxuICBib3JkZXItYm90dG9tOiAycHggc29saWQgIzA0MTQ0NDtcXHJcXG59XFxyXFxuXFxyXFxuLmxpc3QtaXRlbS1pbmZvIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgd2lkdGg6IDk1JTtcXHJcXG59XFxyXFxuXFxyXFxuLmJvdHRvbS1zZWMge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGhlaWdodDogNTBweDtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDAgMCAxMHB4IDEwcHg7XFxyXFxufVxcclxcblxcclxcbiNjbGVhciB7XFxyXFxuICBmb250LXNpemU6IDIycHg7XFxyXFxuICBmb250LXdlaWdodDogNzAwO1xcclxcbn1cXHJcXG5cXHJcXG4jY2xlYXI6aG92ZXIge1xcclxcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XFxyXFxufVxcclxcblxcclxcbi5hbGVydCB7XFxyXFxuICBjb2xvcjogI2RiMDUwNTtcXHJcXG4gIGZvbnQtc2l6ZTogMjJweDtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxyXFxuICBtYXJnaW46IDI1cHggMDtcXHJcXG59XFxyXFxuXFxyXFxuLnJlc2V0OmhvdmVyIHtcXHJcXG4gIC13ZWJraXQtYW5pbWF0aW9uOiByb3RhdGUtY2VudGVyIDAuNnMgZWFzZS1pbi1vdXQgYm90aDtcXHJcXG4gIGFuaW1hdGlvbjogcm90YXRlLWNlbnRlciAwLjZzIGVhc2UtaW4tb3V0IGJvdGg7XFxyXFxufVxcclxcblxcclxcbi8qIHN0eWxlbGludC1lbmFibGUgKi9cXHJcXG5ALXdlYmtpdC1rZXlmcmFtZXMgcm90YXRlLWNlbnRlciB7XFxyXFxuICAwJSB7XFxyXFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMCk7XFxyXFxuICAgIHRyYW5zZm9ybTogcm90YXRlKDApO1xcclxcbiAgfVxcclxcblxcclxcbiAgMTAwJSB7XFxyXFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcXHJcXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcXHJcXG4gIH1cXHJcXG59XFxyXFxuXFxyXFxuQGtleWZyYW1lcyByb3RhdGUtY2VudGVyIHtcXHJcXG4gIDAlIHtcXHJcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgwKTtcXHJcXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMCk7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAxMDAlIHtcXHJcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xcclxcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xcclxcbiAgfVxcclxcbn1cXHJcXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvaW5kZXguY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUVBOzs7RUFHRSxzQkFBc0I7RUFDdEIsOEJBQThCO0VBQzlCLGtDQUFrQztFQUNsQyxTQUFTO0VBQ1QsVUFBVTtBQUNaOztBQUVBO0VBQ0UsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UscUJBQXFCO0VBQ3JCLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsbUJBQW1CO0FBQ3JCOztBQUVBLHNCQUFzQjtBQUN0QjtFQUNFLFlBQVk7RUFDWixhQUFhO0VBQ2IseUJBQXlCO0VBQ3pCLG1CQUFtQjtFQUNuQixxREFBcUQ7QUFDdkQ7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsOEJBQThCO0VBQzlCLFlBQVk7RUFDWixlQUFlO0VBQ2YsNEJBQTRCO0VBQzVCLGdDQUFnQztBQUNsQzs7QUFFQTs7O0VBR0UsZUFBZTtFQUNmLGNBQWM7QUFDaEI7O0FBRUE7O0VBRUUsMEJBQTBCO0FBQzVCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsOEJBQThCO0VBQzlCLGVBQWU7RUFDZixnQ0FBZ0M7QUFDbEM7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsY0FBYztFQUNkLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsWUFBWTtFQUNaLHVCQUF1QjtFQUN2QixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsVUFBVTtBQUNaOztBQUVBO0VBQ0UsY0FBYztFQUNkLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLHFCQUFxQjtFQUNyQixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSw2QkFBNkI7QUFDL0I7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLFdBQVc7RUFDWCxpQkFBaUI7RUFDakIsZ0JBQWdCO0VBQ2hCLHVCQUF1QjtFQUN2Qix3QkFBd0I7RUFDeEIscUJBQXFCLEVBQUUsWUFBWTtFQUNuQyx3QkFBd0IsRUFBRSwwQkFBMEI7QUFDdEQ7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsUUFBUTtFQUNSLFNBQVM7QUFDWDs7QUFFQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsOEJBQThCO0VBQzlCLFlBQVk7RUFDWixlQUFlO0VBQ2YsZ0NBQWdDO0FBQ2xDOztBQUVBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixVQUFVO0FBQ1o7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsWUFBWTtFQUNaLG1CQUFtQjtFQUNuQix1QkFBdUI7RUFDdkIsNEJBQTRCO0FBQzlCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLDBCQUEwQjtBQUM1Qjs7QUFFQTtFQUNFLGNBQWM7RUFDZCxlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxzREFBc0Q7RUFDdEQsOENBQThDO0FBQ2hEOztBQUVBLHFCQUFxQjtBQUNyQjtFQUNFO0lBQ0UsNEJBQTRCO0lBQzVCLG9CQUFvQjtFQUN0Qjs7RUFFQTtJQUNFLGlDQUFpQztJQUNqQyx5QkFBeUI7RUFDM0I7QUFDRjs7QUFFQTtFQUNFO0lBQ0UsNEJBQTRCO0lBQzVCLG9CQUFvQjtFQUN0Qjs7RUFFQTtJQUNFLGlDQUFpQztJQUNqQyx5QkFBeUI7RUFDM0I7QUFDRlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Qb3BwaW5zOndnaHRAMTAwOzIwMDszMDA7NDAwJmRpc3BsYXk9c3dhcCcpO1xcclxcblxcclxcbiosXFxyXFxuKjo6YmVmb3JlLFxcclxcbio6OmFmdGVyIHtcXHJcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxuICAtd2Via2l0LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxuICBmb250LWZhbWlseTogJ1BvcHBpbnMnLCBzYW5zLXNlcmlmO1xcclxcbiAgbWFyZ2luOiAwO1xcclxcbiAgcGFkZGluZzogMDtcXHJcXG59XFxyXFxuXFxyXFxuYm9keSB7XFxyXFxuICBiYWNrZ3JvdW5kOiAjZTVlN2VkO1xcclxcbn1cXHJcXG5cXHJcXG5hIHtcXHJcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXHJcXG4gIGNvbG9yOiAjNDE0MzQ4O1xcclxcbn1cXHJcXG5cXHJcXG5tYWluIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgd2lkdGg6IDQwMHB4O1xcclxcbiAgbWFyZ2luOiAxMDBweCBhdXRvO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLyogc3R5bGVsaW50LWRpc2FibGUgKi9cXHJcXG4ubWFpbi1zZWMge1xcclxcbiAgd2lkdGg6IDU1MHB4O1xcclxcbiAgcGFkZGluZzogMTBweDtcXHJcXG4gIGJvcmRlcjogMnB4IHNvbGlkICMwNDE0NDQ7XFxyXFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcclxcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDMxNWRlZywgI2RkZTBlOCwgI2QzZDVkOCk7XFxyXFxufVxcclxcblxcclxcbmgxIHtcXHJcXG4gIGZvbnQtc2l6ZTogMjRweDtcXHJcXG4gIGNvbG9yOiAjMDQxNDQ0O1xcclxcbn1cXHJcXG5cXHJcXG4jdGl0bGUge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICBoZWlnaHQ6IDUwcHg7XFxyXFxuICBwYWRkaW5nOiAwIDEwcHg7XFxyXFxuICBib3JkZXItcmFkaXVzOiAxMHB4IDEwcHggMCAwO1xcclxcbiAgYm9yZGVyLWJvdHRvbTogM3B4IHNvbGlkICMwNDE0NDQ7XFxyXFxufVxcclxcblxcclxcbiN0aXRsZS1pY29uLFxcclxcbiNhZGQtaWNvbixcXHJcXG4jaXRlbS1pY29uIHtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gIHRyYW5zaXRpb246IDFzO1xcclxcbn1cXHJcXG5cXHJcXG4jYWRkLWljb246aG92ZXIsXFxyXFxuI2l0ZW0taWNvbjpob3ZlciB7XFxyXFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMnB4KTtcXHJcXG59XFxyXFxuXFxyXFxuI2lucHV0LWFyZWEge1xcclxcbiAgaGVpZ2h0OiA1MHB4O1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICBwYWRkaW5nOiAwIDEwcHg7XFxyXFxuICBib3JkZXItYm90dG9tOiAycHggc29saWQgIzA0MTQ0NDtcXHJcXG59XFxyXFxuXFxyXFxuOjpwbGFjZWhvbGRlciB7XFxyXFxuICBmb250LXN0eWxlOiBpdGFsaWM7XFxyXFxuICBjb2xvcjogIzA0MTQ0NDtcXHJcXG4gIGZvbnQtc2l6ZTogMTZweDtcXHJcXG59XFxyXFxuXFxyXFxuaW5wdXQge1xcclxcbiAgb3V0bGluZTogbm9uZTtcXHJcXG4gIGJvcmRlcjogbm9uZTtcXHJcXG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xcclxcbiAgZm9udC1zaXplOiAxNnB4O1xcclxcbn1cXHJcXG5cXHJcXG4jZG8taW5wdXQge1xcclxcbiAgd2lkdGg6IDkwJTtcXHJcXG59XFxyXFxuXFxyXFxuLmxpc3QtdGFzay1pdGVtIHtcXHJcXG4gIGNvbG9yOiAjMDQxNDQ0O1xcclxcbiAgZm9udC13ZWlnaHQ6IDUwMDtcXHJcXG59XFxyXFxuXFxyXFxuaW5wdXRbdHlwZT0nY2hlY2tib3gnXSB7XFxyXFxuICBhY2NlbnQtY29sb3I6ICMwYWMzNmE7XFxyXFxuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XFxyXFxufVxcclxcblxcclxcbmlucHV0OmNoZWNrZWQgKyAudGFzay1pdGVtIHtcXHJcXG4gIHRleHQtZGVjb3JhdGlvbjogbGluZS10aHJvdWdoO1xcclxcbn1cXHJcXG5cXHJcXG4ubGlzdF9kaXYge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICB3aWR0aDogYXV0bztcXHJcXG4gIG1heC1oZWlnaHQ6IDQwMHB4O1xcclxcbiAgb3ZlcmZsb3c6IHNjcm9sbDtcXHJcXG4gIHNjcm9sbC1iZWhhdmlvcjogc21vb3RoO1xcclxcbiAgc2Nyb2xsYmFyLWNvbG9yOiAjMDQxNDQ0O1xcclxcbiAgc2Nyb2xsYmFyLXdpZHRoOiBub25lOyAvKiBGaXJlZm94ICovXFxyXFxuICAtbXMtb3ZlcmZsb3ctc3R5bGU6IG5vbmU7IC8qIEludGVybmV0IEV4cGxvcmVyIDEwKyAqL1xcclxcbn1cXHJcXG5cXHJcXG4udG9kb19saXN0X2Rpdjo6LXdlYmtpdC1zY3JvbGxiYXIge1xcclxcbiAgLyogV2ViS2l0ICovXFxyXFxuICB3aWR0aDogMDtcXHJcXG4gIGhlaWdodDogMDtcXHJcXG59XFxyXFxuXFxyXFxubGkge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICBoZWlnaHQ6IDUwcHg7XFxyXFxuICBwYWRkaW5nOiAwIDEwcHg7XFxyXFxuICBib3JkZXItYm90dG9tOiAycHggc29saWQgIzA0MTQ0NDtcXHJcXG59XFxyXFxuXFxyXFxuLmxpc3QtaXRlbS1pbmZvIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgd2lkdGg6IDk1JTtcXHJcXG59XFxyXFxuXFxyXFxuLmJvdHRvbS1zZWMge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGhlaWdodDogNTBweDtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDAgMCAxMHB4IDEwcHg7XFxyXFxufVxcclxcblxcclxcbiNjbGVhciB7XFxyXFxuICBmb250LXNpemU6IDIycHg7XFxyXFxuICBmb250LXdlaWdodDogNzAwO1xcclxcbn1cXHJcXG5cXHJcXG4jY2xlYXI6aG92ZXIge1xcclxcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XFxyXFxufVxcclxcblxcclxcbi5hbGVydCB7XFxyXFxuICBjb2xvcjogI2RiMDUwNTtcXHJcXG4gIGZvbnQtc2l6ZTogMjJweDtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxyXFxuICBtYXJnaW46IDI1cHggMDtcXHJcXG59XFxyXFxuXFxyXFxuLnJlc2V0OmhvdmVyIHtcXHJcXG4gIC13ZWJraXQtYW5pbWF0aW9uOiByb3RhdGUtY2VudGVyIDAuNnMgZWFzZS1pbi1vdXQgYm90aDtcXHJcXG4gIGFuaW1hdGlvbjogcm90YXRlLWNlbnRlciAwLjZzIGVhc2UtaW4tb3V0IGJvdGg7XFxyXFxufVxcclxcblxcclxcbi8qIHN0eWxlbGludC1lbmFibGUgKi9cXHJcXG5ALXdlYmtpdC1rZXlmcmFtZXMgcm90YXRlLWNlbnRlciB7XFxyXFxuICAwJSB7XFxyXFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMCk7XFxyXFxuICAgIHRyYW5zZm9ybTogcm90YXRlKDApO1xcclxcbiAgfVxcclxcblxcclxcbiAgMTAwJSB7XFxyXFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcXHJcXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcXHJcXG4gIH1cXHJcXG59XFxyXFxuXFxyXFxuQGtleWZyYW1lcyByb3RhdGUtY2VudGVyIHtcXHJcXG4gIDAlIHtcXHJcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgwKTtcXHJcXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMCk7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAxMDAlIHtcXHJcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xcclxcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xcclxcbiAgfVxcclxcbn1cXHJcXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2luZGV4LmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vaW5kZXguY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsIi8qIGVzbGludC1kaXNhYmxlIGltcG9ydC9uby11bnJlc29sdmVkICovXHJcbmltcG9ydCAnLi9pbmRleC5jc3MnO1xyXG5pbXBvcnQgdGl0bGVJY29uIGZyb20gJy4vaWNvbnMvcmVmcmVzaC5wbmcnO1xyXG5pbXBvcnQgYWRkSWNvbiBmcm9tICcuL2ljb25zL2FkZC5wbmcnO1xyXG5pbXBvcnQgVG9EbyBmcm9tICcuL21vZHVsZXMvbWFuYWdlTGlzdEl0ZW1zLmpzJztcclxuaW1wb3J0IGNoZWNrIGZyb20gJy4vbW9kdWxlcy9jaGVja0JveC5qcyc7XHJcblxyXG5jb25zdCB0aXRsZVNwYW4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGl0bGUtaWNvbicpO1xyXG5jb25zdCBhZGRTcGFuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FkZC1pY29uJyk7XHJcbmNvbnN0IGljb24xID0gbmV3IEltYWdlKCk7XHJcbmljb24xLnNyYyA9IHRpdGxlSWNvbjtcclxuaWNvbjEuY2xhc3NMaXN0LmFkZCgncmVzZXQnKTtcclxuY29uc3QgaWNvbjIgPSBuZXcgSW1hZ2UoKTtcclxuaWNvbjIuc3JjID0gYWRkSWNvbjtcclxudGl0bGVTcGFuLmFwcGVuZENoaWxkKGljb24xKTtcclxuYWRkU3Bhbi5hcHBlbmRDaGlsZChpY29uMik7XHJcblxyXG5Ub0RvLmFkZCgpO1xyXG5Ub0RvLnNob3coKTtcclxuVG9Eby5yZW1vdmUoKTtcclxuVG9Eby5lZGl0KCk7XHJcblRvRG8uY2xlYXIoKTtcclxuY2hlY2soKTtcclxuVG9Eby5yZXNldCgpO1xyXG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjaGVjaygpIHtcclxuICBjb25zdCBpbnB1dENoZWNrcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jaGVjaycpO1xyXG4gIGlucHV0Q2hlY2tzLmZvckVhY2goKGNoZWNrKSA9PiB7XHJcbiAgICBjaGVjay5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoZSkgPT4ge1xyXG4gICAgICBsZXQgdG9Eb3MgPSBbXTtcclxuICAgICAgdG9Eb3MgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0b0RvcycpIHx8ICdbXScpO1xyXG4gICAgICB0b0Rvcy5mb3JFYWNoKCh0YXNrKSA9PiB7XHJcbiAgICAgICAgaWYgKGUudGFyZ2V0LmlkID09PSBgaW5wdXQke3Rhc2suaW5kZXh9YCAmJiB0YXNrLmNvbXBsZXRlZCA9PT0gZmFsc2UpIHtcclxuICAgICAgICAgIHRhc2suY29tcGxldGVkID0gdHJ1ZTtcclxuICAgICAgICAgIGUudGFyZ2V0LmNoZWNrZWQgPSB0cnVlO1xyXG4gICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3RvRG9zJywgSlNPTi5zdHJpbmdpZnkodG9Eb3MpKTtcclxuICAgICAgICB9IGVsc2UgaWYgKFxyXG4gICAgICAgICAgZS50YXJnZXQuaWQgPT09IGBpbnB1dCR7dGFzay5pbmRleH1gXHJcbiAgICAgICAgICAmJiB0YXNrLmNvbXBsZXRlZCA9PT0gdHJ1ZVxyXG4gICAgICAgICkge1xyXG4gICAgICAgICAgdGFzay5jb21wbGV0ZWQgPSBmYWxzZTtcclxuICAgICAgICAgIGUudGFyZ2V0LmNoZWNrZWQgPSBmYWxzZTtcclxuICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd0b0RvcycsIEpTT04uc3RyaW5naWZ5KHRvRG9zKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgIH0pO1xyXG4gIH0pO1xyXG59XHJcbiIsImltcG9ydCByZW1vdmVJY29uIGZyb20gJy4uL2ljb25zL2RlbGV0ZS5wbmcnXHJcblxyXG5jb25zdCBpY29uMyA9IG5ldyBJbWFnZSgpXHJcbmljb24zLnNyYyA9IHJlbW92ZUljb25cclxuY29uc3QgdG9Eb3MgPSBbXVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVG9EbyB7XHJcbiAgY29uc3RydWN0b3IodG9kbykge1xyXG4gICAgdGhpcy5kZXNjcmlwdGlvbiA9IHRvZG9cclxuICAgIHRoaXMuaW5kZXggPSB0b0Rvcy5sZW5ndGggKyAxXHJcbiAgICB0aGlzLmlkID0gRGF0ZS5ub3coKS50b1N0cmluZygpXHJcbiAgICB0aGlzLmNvbXBsZXRlZCA9IGZhbHNlXHJcbiAgfVxyXG5cclxuICBzdGF0aWMgYWRkKCkge1xyXG4gICAgY29uc3QgYWxlcnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWxlcnQnKVxyXG4gICAgY29uc3QgYWRkSWNvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhZGQtaWNvbicpXHJcbiAgICBjb25zdCBkb0lucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2RvLWlucHV0JylcclxuICAgIGFsZXJ0LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSdcclxuICAgIGFkZEljb24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgIGxldCB0b0RvcyA9IFtdXHJcbiAgICAgIHRvRG9zID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndG9Eb3MnKSB8fCAnW10nKVxyXG4gICAgICBpZiAoZG9JbnB1dC52YWx1ZSAhPT0gJycpIHtcclxuICAgICAgICBjb25zdCBuZXdUYXNrID0gbmV3IFRvRG8oZG9JbnB1dC52YWx1ZSlcclxuICAgICAgICB0b0Rvcy5wdXNoKG5ld1Rhc2spXHJcbiAgICAgICAgdG9Eb3MuZm9yRWFjaCgodGFzaywgaSkgPT4ge1xyXG4gICAgICAgICAgdGFzay5pbmRleCA9IGkgKyAxXHJcbiAgICAgICAgfSlcclxuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndG9Eb3MnLCBKU09OLnN0cmluZ2lmeSh0b0RvcykpXHJcbiAgICAgICAgZG9JbnB1dC52YWx1ZSA9ICcnXHJcbiAgICAgICAgd2luZG93LmxvY2F0aW9uLnJlbG9hZCgpXHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgYWxlcnQuaW5uZXJUZXh0ID0gJ3RoZSBpbnB1dCBmaWVsZCBpcyBlbXB0eSwga2luZGx5IGFkZCBzb21lIHRleHQhJ1xyXG4gICAgICAgIGFsZXJ0LnN0eWxlLmRpc3BsYXkgPSAnZmxleCdcclxuICAgICAgfVxyXG4gICAgfSlcclxuICB9XHJcblxyXG4gIHN0YXRpYyBzaG93KCkge1xyXG4gICAgY29uc3QgdG9kb0xpc3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaXRlbS1kby1saXN0JylcclxuICAgIGNvbnN0IHRvRG9zID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndG9Eb3MnKSB8fCAnW10nKVxyXG4gICAgbGV0IGlucHV0Q2hlY2sgPSAnJ1xyXG4gICAgdG9kb0xpc3QuaW5uZXJIVE1MID0gJydcclxuICAgIHRvRG9zLmZvckVhY2goKHRhc2spID0+IHtcclxuICAgICAgaWYgKHRhc2suY29tcGxldGVkID09PSBmYWxzZSkge1xyXG4gICAgICAgIGlucHV0Q2hlY2sgPSAnJ1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGlucHV0Q2hlY2sgPSAnY2hlY2tlZCdcclxuICAgICAgfVxyXG4gICAgICB0b2RvTGlzdC5pbm5lckhUTUwgKz0gYFxyXG4gICAgICA8bGk+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImxpc3QtaXRlbS1pbmZvXCI+XHJcbiAgICAgICAgICA8aW5wdXQgJHtpbnB1dENoZWNrfSB0eXBlPVwiY2hlY2tib3hcIiBjbGFzcz1cImNoZWNrXCIgaWQ9XCJpbnB1dCR7dGFzay5pbmRleH1cIj5cclxuICAgICAgICAgIDxpbnB1dCBpZD1cIiR7dGFzay5pbmRleH1cIiBjbGFzcz1cImxpc3QtdGFzay1pdGVtXCIgdmFsdWU9XCIke3Rhc2suZGVzY3JpcHRpb259XCI+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPHNwYW4gaWQ9XCJpdGVtLWljb25cIj5cclxuICAgICAgICAgIDxpbWcgc3JjPVwiJHtpY29uMy5zcmN9XCIgY2xhc3M9XCJyZW1vdmVcIiBpZD1cIiR7dGFzay5pZH1cIiBhbHQ9XCJSZW1vdmUgVGFza1wiIHRpdGxlPVwiUmVtb3ZlIFRhc2tcIj5cclxuICAgICAgICA8L3NwYW4+XHJcbiAgICAgIDwvbGk+XHJcbiAgICAgIGBcclxuICAgIH0pXHJcbiAgfVxyXG5cclxuICBzdGF0aWMgcmVtb3ZlKCkge1xyXG4gICAgY29uc3QgcmVtb3ZlSWNvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5yZW1vdmUnKVxyXG4gICAgcmVtb3ZlSWNvbi5mb3JFYWNoKChpY29uKSA9PiB7XHJcbiAgICAgIGljb24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xyXG4gICAgICAgIGxldCB0b0RvcyA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3RvRG9zJykgfHwgJ1tdJylcclxuICAgICAgICB0b0RvcyA9IHRvRG9zLmZpbHRlcigodGFzaykgPT4gdGFzay5pZCAhPT0gZS50YXJnZXQuaWQpXHJcbiAgICAgICAgdG9Eb3MuZm9yRWFjaCgodGFzaywgaSkgPT4ge1xyXG4gICAgICAgICAgdGFzay5pbmRleCA9IGkgKyAxXHJcbiAgICAgICAgfSlcclxuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndG9Eb3MnLCBKU09OLnN0cmluZ2lmeSh0b0RvcykpXHJcbiAgICAgICAgd2luZG93LmxvY2F0aW9uLnJlbG9hZCgpXHJcbiAgICAgIH0pXHJcbiAgICB9KVxyXG4gIH1cclxuXHJcbiAgc3RhdGljIGVkaXQoKSB7XHJcbiAgICBjb25zdCB0YXNrSXRlbXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcudGFzay1pdGVtJylcclxuICAgIHRhc2tJdGVtcy5mb3JFYWNoKChpdGVtKSA9PiB7XHJcbiAgICAgIGl0ZW0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgaXRlbS5zdHlsZS5iYWNrZ3JvdW5kID0gJyNkZGQnXHJcbiAgICAgICAgaXRlbS5zZXRBdHRyaWJ1dGUoJ2NvbnRlbnRlZGl0YWJsZScsICd0cnVlJylcclxuICAgICAgfSlcclxuICAgICAgaXRlbS5hZGRFdmVudExpc3RlbmVyKCdmb2N1c291dCcsICgpID0+IHtcclxuICAgICAgICBjb25zdCB0b0RvcyA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3RvRG9zJykgfHwgJ1tdJylcclxuICAgICAgICBpdGVtLnN0eWxlLmJhY2tncm91bmQgPSAnbm9uZSdcclxuICAgICAgICB0b0Rvcy5mb3JFYWNoKCh0YXNrKSA9PiB7XHJcbiAgICAgICAgICBpZiAodGFzay5pbmRleC50b1N0cmluZygpID09PSBpdGVtLmlkKSB7XHJcbiAgICAgICAgICAgIHRhc2suZGVzY3JpcHRpb24gPSBpdGVtLnZhbHVlXHJcbiAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd0b0RvcycsIEpTT04uc3RyaW5naWZ5KHRvRG9zKSlcclxuICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgICB9KVxyXG4gICAgfSlcclxuICB9XHJcblxyXG4gIHN0YXRpYyBjbGVhcigpIHtcclxuICAgIGNvbnN0IGNsZWFyQnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NsZWFyJylcclxuICAgIGNsZWFyQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcclxuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXHJcbiAgICAgIGxldCB0b0RvcyA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3RvRG9zJykgfHwgJ1tdJylcclxuICAgICAgdG9Eb3MgPSB0b0Rvcy5maWx0ZXIoKHRhc2spID0+IHRhc2suY29tcGxldGVkID09PSBmYWxzZSlcclxuICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3RvRG9zJywgSlNPTi5zdHJpbmdpZnkodG9Eb3MpKVxyXG4gICAgICB3aW5kb3cubG9jYXRpb24ucmVsb2FkKClcclxuICAgIH0pXHJcbiAgfVxyXG5cclxuICBzdGF0aWMgcmVzZXQoKSB7XHJcbiAgICBjb25zdCByZXNldEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5yZXNldCcpXHJcbiAgICBjb25zdCBhbGVydCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hbGVydCcpXHJcbiAgICBsZXQgdG9Eb3MgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0b0RvcycpIHx8ICdbXScpXHJcbiAgICByZXNldEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgaWYgKHRvRG9zID09PSAnJykge1xyXG4gICAgICAgIGFsZXJ0LmlubmVyVGV4dCA9ICdMaXN0IGlzIGVtcHR5LidcclxuICAgICAgICBhbGVydC5zdHlsZS5kaXNwbGF5ID0gJ2ZsZXgnXHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWxvbmVseS1pZiwgbm8tcmVzdHJpY3RlZC1nbG9iYWxzLCBuby1hbGVydFxyXG4gICAgICAgIGlmIChjb25maXJtKCdBbGwgaXRlbXMgd2lsbCBiZSByZW1vdmUgcGVybWluYXRlbHkuIEFyZSB5b3Ugc3VyZT8nKSkge1xyXG4gICAgICAgICAgdG9Eb3MgPSBbXVxyXG4gICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3RvRG9zJywgSlNPTi5zdHJpbmdpZnkodG9Eb3MpKVxyXG4gICAgICAgICAgd2luZG93LmxvY2F0aW9uLnJlbG9hZCgpXHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9KVxyXG4gIH1cclxufVxyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=