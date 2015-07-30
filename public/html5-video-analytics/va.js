/*
 USAGE:

 //javascript
 va('#video,video,.video')
 */


;
(function (window) {
    'use strict'
    function defineVA() {
        var va;
        va = function (selectors) {
            va.videos = document.body.getElementsByTagName(selectors);
        };

        va.version = "0.0.0";

        va.events = {};


        // set the default log handlers
        //va.log = function () { console.log.apply(console, arguments); }
        //va.warn = function () { console.warn.apply(console, arguments); }
        //va.error = function () { console.error.apply(console, arguments); }


        va.prototype.videos = {}

        return va
    }

    if (typeof(va) === 'undefined') {
        window.va = defineVA()
    }
})(window);







