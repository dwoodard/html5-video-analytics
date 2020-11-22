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
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ({

/***/ "../src/va.js":
/*!********************!*\
  !*** ../src/va.js ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/*
 USAGE: point va() to html5 players
 //javascript
 va('#video','video','.video')
 */
;

(function (window) {
  "use strict";

  console.log("HTML5 Video Analytics");

  window.va = function (selector) {
    return new va.fn.init(arguments);
  };

  va.version = "0.0.0";
  va.players = [];
  va.sessions = [];
  va.fn = {
    init: function init(selector) {
      var i;

      switch (Object.prototype.toString.call(selector[0])) {
        case "[object String]":
          var el = document.querySelectorAll(selector[0]);

          for (i = 0; i < el.length; i++) {
            va.fn.addPlayer(el[i]);
          }

          break;

        case "[object Array]":
          // check for object in array
          for (i = 0; i < selector[0].length; i++) {
            switch (_typeof(selector[0][i])) {
              case "object":
                va.fn.addPlayer(selector[0][i]);
                break;

              case "string":
                //get playerObj
                var elms = document.querySelectorAll(selector[0][i].toString());

                for (var j = 0; j < elms.length; j++) {
                  va.fn.addPlayer(elms[j]);
                }

                break;

              default:
                console.log(selector);
                break;
            }
          }

          break;

        case "[object HTMLVideoElement]":
          va.fn.addPlayer(selector[0]);
          break;

        default:
          console.log(selector);
          break;
      } //addEventListener


      va.fn.addEventListeners(va.players);
      return va.players;
    },
    emptyPlayers: function emptyPlayers() {
      va.players = [];
    },
    addPlayer: function addPlayer(playerObj) {
      //add player
      if (va.players.indexOf(playerObj)) {
        va.players.push(playerObj);
      }
    },
    addEventListeners: function addEventListeners(players) {
      for (var i = 0; i < va.players.length; i++) {
        //Loop through all players and add events
        var el = players[i];

        if (!el) {
          continue;
        }

        var events = ['emptied', 'loadstart', 'loadedmetadata', 'loadeddata', 'canplay', 'canplaythrough', 'playing', 'ended', 'waiting', 'ended', 'durationchange', 'timeupdate', 'play', 'pause', 'ratechange', 'volumechange', 'click'];

        for (var _i = 0, _events = events; _i < _events.length; _i++) {
          var event = _events[_i];
          el.addEventListener(event, function (e) {
            switch (e.type) {
              case 'loadstart':
                va.sessions.push({
                  'uid': window.location.hostname
                });
                break;

              case 'loadedmetadata':
                break;

              case 'play':
                console.log('play');
                break;

              case 'pause':
                console.log('pause');
                break;

              case 'timeupdate':
                break;

              case 'click':
                console.log('you Clicked?');
                break;

              default:
                // console.log(e.type, e);
                break;
            }
          });
        }
      }
    }
  };
})(window);

/***/ }),

/***/ 1:
/*!**************************!*\
  !*** multi ../src/va.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/dustin/code/html5-video-analytics/src/va.js */"../src/va.js");


/***/ })

/******/ });