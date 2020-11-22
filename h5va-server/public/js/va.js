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
(function (window) {
  'use strict';

  var _this = this;

  console.log('HTML5 Video Analytics');

  window.va = function (selector) {
    return new va.fn.init(arguments);
  };

  va.version = '0.0.0';
  va.players = [];
  va.sessions = [];
  va.fn = {
    init: function init(selector) {
      switch (Object.prototype.toString.call(selector[0])) {
        case '[object String]':
          var el = document.querySelectorAll(selector[0]);

          for (var i = 0; i < el.length; i++) {
            va.fn.addPlayer(el[i]);
          }

          break;

        case '[object Array]':
          // check for object in array
          for (i = 0; i < selector[0].length; i++) {
            switch (_typeof(selector[0][i])) {
              case 'object':
                va.fn.addPlayer(selector[0][i]);
                break;

              case 'string':
                // get playerObj
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

        case '[object HTMLVideoElement]':
          va.fn.addPlayer(selector[0]);
          break;

        default:
          console.log(selector);
          break;
      } // addEventListener


      va.fn.addEventListeners(va.players);
      return va.players;
    },
    emptyPlayers: function emptyPlayers() {
      va.players = [];
    },
    addPlayer: function addPlayer(playerObj) {
      // add player
      if (va.players.indexOf(playerObj)) {
        va.players.push(playerObj);
      }
    },
    addEventListeners: function addEventListeners(players) {
      var _loop = function _loop(i) {
        // Loop through all players and add events
        var el = players[i];

        if (!el) {
          return "continue";
        }

        var events = ['loadstart', 'progress', 'suspend', 'abort', 'error', 'emptied', 'stalled', 'loadedmetadata', 'loadeddata', 'canplay', 'canplaythrough', 'playing', 'played', 'waiting', 'seeking', 'seeked', 'ended', 'durationchange', 'timeupdate', 'play', 'pause', 'ratechange', 'resize', 'volumechange'];

        for (var _i = 0, _events = events; _i < _events.length; _i++) {
          var event = _events[_i];
          el.addEventListener(event, function (e) {
            // console.log(e.type)
            switch (e.type) {
              case 'loadstart':
                va.sessions.push({
                  player: el,
                  uid: _this.currentSrc
                });
                break;

              case 'loadedmetadata':
                break;

              case 'play':
                break;

              case 'played':
                console.log(e);
                break;

              case 'pause':
                break;

              case 'timeupdate':
                break;

              case 'click':
                break;

              case 'waiting':
                break;

              case 'durationchange':
                break;

              case 'suspend':
                break;

              case 'loadeddata':
                break;

              case 'canplay':
                break;

              case 'canplaythrough':
                break;

              case 'seeking':
                break;

              case 'seeked':
                break;

              case 'playing':
                break;

              case 'resize':
                break;

              case 'volumechange':
                break;

              case 'progress':
                break;

              case 'error':
                break;

              default:
                // console.log(e);
                console.log('   -------- default', e.type);
                break;
            }
          });
        }
      };

      for (var i = 0; i < va.players.length; i++) {
        var _ret = _loop(i);

        if (_ret === "continue") continue;
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