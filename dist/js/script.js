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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/hamburger.js":
/*!*****************************!*\
  !*** ./src/js/hamburger.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const hamburger = () => {
  const hamburger = document.querySelector('.hamburger'),
        menu = document.querySelector('.menu'),
        closeElem = document.querySelector('.menu__close');
  hamburger.addEventListener('click', () => {
    menu.classList.add('active');
  });
  closeElem.addEventListener('click', () => {
    menu.classList.remove('active');
  });

  function navigation(selectorBlock, pointBlock) {
    const selector = document.querySelector(selectorBlock),
          point = document.querySelector(pointBlock);
    selector.addEventListener('click', e => {
      e.preventDefault();
      menu.classList.remove('active');
      setTimeout(function () {
        point.scrollIntoView({
          behavior: "smooth"
        });
      }, 600);
    });
  }

  navigation('#me', '.introduce');
  navigation('#exp', '.resume');
  navigation('#skills', '.skills');
  navigation('#works', '.works');
  navigation('#contacts', '.contacts');
};

/* harmony default export */ __webpack_exports__["default"] = (hamburger);

/***/ }),

/***/ "./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _hamburger__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./hamburger */ "./src/js/hamburger.js");
/* harmony import */ var _promo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./promo */ "./src/js/promo.js");
/* harmony import */ var _percents__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./percents */ "./src/js/percents.js");
/* harmony import */ var _works__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./works */ "./src/js/works.js");




window.addEventListener('DOMContentLoaded', () => {
  Object(_hamburger__WEBPACK_IMPORTED_MODULE_0__["default"])();
  Object(_promo__WEBPACK_IMPORTED_MODULE_1__["default"])();
  Object(_percents__WEBPACK_IMPORTED_MODULE_2__["default"])();
  Object(_works__WEBPACK_IMPORTED_MODULE_3__["default"])();
});

/***/ }),

/***/ "./src/js/percents.js":
/*!****************************!*\
  !*** ./src/js/percents.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function percent() {
  const percents = document.querySelectorAll('.skills__scale-percent'),
        lines = document.querySelectorAll('.skills__scale-line span');
  percents.forEach((item, i) => {
    lines[i].style.width = item.innerHTML;
  });
}

/* harmony default export */ __webpack_exports__["default"] = (percent);

/***/ }),

/***/ "./src/js/promo.js":
/*!*************************!*\
  !*** ./src/js/promo.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function showTechnology() {
  const technologyBlock = document.querySelector('.promo__technology'),
        technologyBtn = document.querySelector('#technology');
  technologyBtn.addEventListener('click', e => {
    e.preventDefault();
    technologyBlock.classList.toggle('promo__technology-visible');
  });
  technologyBlock.addEventListener('click', () => {
    if (technologyBlock.classList.contains('promo__technology-visible')) {
      technologyBlock.classList.remove('promo__technology-visible');
    }
  });
  const aboutBtn = document.querySelector('#about'),
        aboutBlock = document.querySelector('.introduce');
  aboutBtn.addEventListener('click', e => {
    e.preventDefault();
    aboutBlock.scrollIntoView({
      behavior: "smooth"
    });
  });
  const name = document.querySelector('.promo__subtitle span'),
        title = document.querySelector('.promo__title');
  setTimeout(function () {
    name.style.opacity = "1";
  }, 1000);
  setTimeout(function () {
    title.style.opacity = "1";
  }, 2000);
}

/* harmony default export */ __webpack_exports__["default"] = (showTechnology);

/***/ }),

/***/ "./src/js/works.js":
/*!*************************!*\
  !*** ./src/js/works.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function tab() {
  const tabsBtn = document.querySelectorAll('.works__tab'),
        tabsItem = document.querySelectorAll('.works__item');

  function hideTabs() {
    tabsBtn.forEach(btn => {
      btn.classList.remove('works__tab-active');
    });
    tabsItem.forEach(tab => {
      tab.classList.remove('works__item-active');
    });
  }

  function showTabs() {
    let i = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
    tabsBtn[i].classList.add('works__tab-active');
    tabsItem[i].classList.add('works__item-active');
  }

  hideTabs();
  showTabs();
  tabsBtn.forEach((btn, i) => {
    btn.addEventListener('click', e => {
      if (e.target == tabsBtn[i]) {
        hideTabs();
        showTabs(i);
      }
    });
  });
}

/* harmony default export */ __webpack_exports__["default"] = (tab);

/***/ })

/******/ });
//# sourceMappingURL=script.js.map