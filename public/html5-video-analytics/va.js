/*
 USAGE: point va() to html5 players
 //javascript
 va('#video,video,.video')
 */
; (function (window) {
    "use strict";
    window.va = function (selector) {
        //noinspection JSPotentiallyInvalidConstructorUsage
        return new va.fn.init(arguments)
    };
    va.version = "1.0.0";
    va.players = [];
    va.videos = [];
    va.fn = {
        init: function (selector) {
            switch (Object.prototype.toString.call(selector[0])) {
                case "[object Array]":
                    for (var i = 0; i < selector[0].length; i++) {
                        if (typeof selector[0][i] !== "string") continue;
                        var item = document.querySelectorAll(selector[0][i])[0];
                        if (va.players.indexOf(item)) {
                            va.players.push(item);
                        }
                    }
                    break;
                case "[object String]":
                    var el = document.querySelectorAll(selector[0]);

                    for (var i = 0; i < el.length; i++) {

                        if (Object.prototype.toString.call(el[i]) === "[object HTMLVideoElement]"
                            && true) {
                            va.players.push(el[i]);
                        }

                    }
                            console.log(va.players);

                    break;
                case "[object HTMLVideoElement]":
                    if (va.players.indexOf(selector[0])) {
                        va.players.push(selector[0]);
                    }
                    break;
            }

            //addEventListener
            va.fn.addEventListeners(va.players);

            return va.players;
        },
        emptyPlayers: function(){
            va.players = [];
            return va.players;

        },
        addEventListeners: function (elements) {
            for (var i = 0; i < va.players.length; i++) {
                var el = elements[i];
                if (!el) {
                    continue
                }

                var events = [
                    "emptied",
                    "loadstart",
                    "loadedmetadata",
                    "loadeddata",
                    "canplay",
                    "canplaythrough",
                    "playing",
                    "ended",
                    "waiting",
                    "ended",
                    "durationchange",
                    "timeupdate",
                    "play",
                    "pause",
                    "ratechange",
                    "volumechange"
                ];

                events.forEach(function (event) {
                    el.addEventListener(event, function (e) {
                        // console.log(e.type, e);
                    });
                });


            }
        },
    };
    // if (typeof va === 'undefined') {
    //     //noinspection JSPotentiallyInvalidConstructorUsage
    //     return new va()
    // }

})(window);