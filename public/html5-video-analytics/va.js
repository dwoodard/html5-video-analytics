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
                case "[object String]":
                        var el = document.querySelectorAll(selector[0]);
                        for (var i = 0; i < el.length; i++) {
                            if (va.players.indexOf(el[i])) {
                                va.players.push(el[i]);
                            }
                            else{
                                console.log(el)
                            }
                        }
                    break;
                case "[object Array]":
                    // check for object in array
                    console.log("---->:  ", selector[0])
                    for (var i = 0; i < selector[0].length; i++) {
                        switch(typeof selector[0][i]){
                            case "object":
                                va.fn.addPlayer(selector[0][i])
                            break;
                            case "string":
                                //get playerObj
                                var elms = document.querySelectorAll(selector[0][i].toString());
                                for (var j = 0; j < elms.length; j++) {
                                    console.log("-->j:", elms[j])
                                    va.fn.addPlayer(elms[j]);
                                }
                            break;

                            default:
                                console.log(selector)
                            break;
                        }

                    }
                        console.log("");
                    break;

                case "[object HTMLVideoElement]":
                    if (va.players.indexOf(selector[0])) {
                        va.players.push(selector[0]);
                    }
                    else{
                        console.log(el)
                    }
                    break;
                default:
                    console.log(selector)
                break;
            }

            //addEventListener
            // va.fn.addEventListeners(va.players);

            return va.players;
        },

        emptyPlayers: function(){
            va.players = [];
            return va.players;

        },

        addPlayer: function(playerObj){
            //add player

            if (va.players.indexOf(playerObj)) {
                va.players.push(playerObj);
            }
            console.log(va.players);
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
                    // el.addEventListener(event, function (e) {
                    //     // console.log(e.type, e);
                    // });
                });


            }
        },
    };
    // if (typeof va === 'undefined') {
    //     //noinspection JSPotentiallyInvalidConstructorUsage
    //     return new va()
    // }

})(window);