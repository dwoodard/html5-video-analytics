/*
 __     ___     _                 _                _       _   _
 \ \   / (_) __| | ___  ___      / \   _ __   __ _| |_   _| |_(_) ___ ___
 \ \ / /| |/ _` |/ _ \/ _ \    / _ \ | '_ \ / _` | | | | | __| |/ __/ __|
 \ V / | | (_| |  __/ (_) |  / ___ \| | | | (_| | | |_| | |_| | (__\__ \
 \_/  |_|\__,_|\___|\___/  /_/   \_\_| |_|\__,_|_|\__, |\__|_|\___|___/
 |___/
 */


/*
 USAGE:

 //javascript
 va('#video,video,.video')
 */


;
(function (window) {
    'use strict'

    function defineVA() {
        va.fn.init = function(selector){ return selector };
        va = function (selector) { return new va.init(selector) };
        va.version = "0.0.0";
        va.init.init = function(obj){};
        va.videos = [];
        va.events = {}; 


        // set the default log handlers
        va.log = function () { console.log.apply(console, arguments); };
        va.warn = function () { console.warn.apply(console, arguments); };
        va.error = function () { console.error.apply(console, arguments); };

        va.prototype.videos = {};

        return va;
    }

    if (typeof(va) === 'undefined') {
        window.va = defineVA()
    }
})(window);