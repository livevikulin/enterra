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
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/blocks/modules/footer/footer.js":
/*!*********************************************!*\
  !*** ./src/blocks/modules/footer/footer.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/blocks/modules/header/header.js":
/*!*********************************************!*\
  !*** ./src/blocks/modules/header/header.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/js/import/components.js":
/*!*************************************!*\
  !*** ./src/js/import/components.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/js/import/modules.js":
/*!**********************************!*\
  !*** ./src/js/import/modules.js ***!
  \**********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_header_header__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! %modules%/header/header */ "./src/blocks/modules/header/header.js");
/* harmony import */ var _modules_header_header__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_modules_header_header__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _modules_footer_footer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! %modules%/footer/footer */ "./src/blocks/modules/footer/footer.js");
/* harmony import */ var _modules_footer_footer__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_modules_footer_footer__WEBPACK_IMPORTED_MODULE_1__);



/***/ }),

/***/ "./src/js/import/players.json":
/*!************************************!*\
  !*** ./src/js/import/players.json ***!
  \************************************/
/*! exports provided: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, default */
/***/ (function(module) {

module.exports = JSON.parse("[{\"id\":0,\"name\":\"Martin\",\"level\":5,\"online\":false},{\"id\":1,\"name\":\"Lynda\",\"level\":2,\"online\":false},{\"id\":2,\"name\":\"Robyn\",\"level\":0,\"online\":false},{\"id\":3,\"name\":\"Marianne\",\"level\":1,\"online\":true},{\"id\":4,\"name\":\"Veronica\",\"level\":0,\"online\":false},{\"id\":5,\"name\":\"Spencer\",\"level\":0,\"online\":true},{\"id\":6,\"name\":\"Billy\",\"level\":5,\"online\":false},{\"id\":7,\"name\":\"Rita\",\"level\":5,\"online\":false},{\"id\":8,\"name\":\"Byron\",\"level\":0,\"online\":false},{\"id\":9,\"name\":\"Kyle\",\"level\":0,\"online\":true},{\"id\":10,\"name\":\"Viola\",\"level\":1,\"online\":true},{\"id\":11,\"name\":\"Leslie\",\"level\":1,\"online\":true},{\"id\":12,\"name\":\"Arlene\",\"level\":0,\"online\":false},{\"id\":13,\"name\":\"Adam\",\"level\":0,\"online\":false},{\"id\":14,\"name\":\"Dawn\",\"level\":5,\"online\":true},{\"id\":15,\"name\":\"Latoya\",\"level\":0,\"online\":true},{\"id\":16,\"name\":\"Chelsea\",\"level\":0,\"online\":false},{\"id\":17,\"name\":\"Laverne\",\"level\":4,\"online\":true},{\"id\":18,\"name\":\"Billy\",\"level\":3,\"online\":false},{\"id\":19,\"name\":\"Derrick\",\"level\":3,\"online\":false},{\"id\":20,\"name\":\"Anne\",\"level\":2,\"online\":true},{\"id\":21,\"name\":\"Virgil\",\"level\":1,\"online\":false},{\"id\":22,\"name\":\"Frederick\",\"level\":0,\"online\":false},{\"id\":23,\"name\":\"Eunice\",\"level\":0,\"online\":false},{\"id\":24,\"name\":\"Leslie\",\"level\":5,\"online\":true},{\"id\":25,\"name\":\"Jeannie\",\"level\":5,\"online\":false},{\"id\":26,\"name\":\"Winston\",\"level\":0,\"online\":false},{\"id\":27,\"name\":\"Billy\",\"level\":0,\"online\":false},{\"id\":28,\"name\":\"Joyce\",\"level\":0,\"online\":true},{\"id\":29,\"name\":\"Wolfeschlegelsteinhausenbergerdorff\",\"level\":2,\"online\":true},{\"id\":30,\"name\":\"Derrick\",\"level\":0,\"online\":false},{\"id\":31,\"name\":\"Glen\",\"level\":0,\"online\":true},{\"id\":32,\"name\":\"Sylvester\",\"level\":0,\"online\":true},{\"id\":33,\"name\":\"Isaac\",\"level\":2,\"online\":false},{\"id\":34,\"name\":\"Frederick\",\"level\":1,\"online\":false},{\"id\":35,\"name\":\"Alexandra\",\"level\":0,\"online\":false},{\"id\":36,\"name\":\"Jonathan\",\"level\":5,\"online\":true},{\"id\":37,\"name\":\"Leslie\",\"level\":0,\"online\":false},{\"id\":38,\"name\":\"Kathryn\",\"level\":2,\"online\":true},{\"id\":39,\"name\":\"Frederick\",\"level\":0,\"online\":false},{\"id\":40,\"name\":\"Kathryn\",\"level\":1,\"online\":false}]");

/***/ }),

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _import_modules__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./import/modules */ "./src/js/import/modules.js");
/* harmony import */ var _import_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./import/components */ "./src/js/import/components.js");
/* harmony import */ var _import_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_import_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _import_players_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./import/players.json */ "./src/js/import/players.json");
var _import_players_json__WEBPACK_IMPORTED_MODULE_2___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./import/players.json */ "./src/js/import/players.json", 1);



renderTable(_import_players_json__WEBPACK_IMPORTED_MODULE_2__);
var search = document.querySelector('.js-input');
search.addEventListener('input', function (_ref) {
  var target = _ref.target;
  var newPlayers = _import_players_json__WEBPACK_IMPORTED_MODULE_2__.filter(function (player) {
    var name = player.name.toUpperCase(),
        valueInput = target.value.toUpperCase();
    return name.includes(valueInput);
  });
  var tbody = document.querySelector('.tbody');
  tbody.innerHTML = "";
  renderTable(newPlayers);
});

function renderTable(players) {
  players.forEach(function (obj) {
    var tbody = document.querySelector('.tbody'),
        tr = document.createElement('div'),
        td1 = document.createElement('div'),
        td2 = document.createElement('div'),
        td3 = document.createElement('div'),
        td4 = document.createElement('div');

    function getStars(numberStars) {
      numberStars = obj.level;
      var htmlStars = "";

      for (var i = 0; i < numberStars; i++) {
        htmlStars += "<svg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' width='28' height='30' viewbox='0 0 28 30'><g><g><image width='28' height='30' xlink:href='data:image/png;base64,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'></g></g></svg>";
      }

      return htmlStars;
    }

    ;
    td1.className = 'td';
    td1.innerHTML = obj.id;
    td2.className = 'td';
    td2.innerHTML = "<span>".concat(obj.name, "</span>");
    td3.className = 'td';
    td3.innerHTML = "<div class=\"rating\">".concat(getStars(), "</div>");
    td4.className = 'td';
    td4.innerHTML = "<span class=\"online ".concat(obj.online ? "on" : "off", "\"></span>");
    tr.className = 'tr';
    tbody.append(tr);
    tr.appendChild(td1);
    tr.appendChild(td2);
    tr.appendChild(td3);
    tr.appendChild(td4);
  });
}

/***/ })

/******/ });
//# sourceMappingURL=main.js.map