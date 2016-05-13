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
    va.sessions = [];
    va.fn = {
        init: function (selector) {
            switch (Object.prototype.toString.call(selector[0])) {
                case "[object String]":
                        var el = document.querySelectorAll(selector[0]);
                        for (var i = 0; i < el.length; i++) {
                            va.fn.addPlayer(el[i])
                        }
                    break;
                case "[object Array]":
                    // check for object in array
                    for (var i = 0; i < selector[0].length; i++) {
                        switch(typeof selector[0][i]){
                            case "object":
                                va.fn.addPlayer(selector[0][i])
                            break;
                            case "string":
                                //get playerObj
                                var elms = document.querySelectorAll(selector[0][i].toString());
                                for (var j = 0; j < elms.length; j++) {
                                    va.fn.addPlayer(elms[j]);
                                }
                            break;

                            default:
                                console.log(selector)
                            break;
                        }

                    }
                    break;

                case "[object HTMLVideoElement]":
                    va.fn.addPlayer(selector[0])
                    break;
                default:
                    console.log(selector)
                break;
            }

            //addEventListener
            va.fn.addEventListeners(va.players);

            return va.players;
        },

        emptyPlayers: function(){
            va.players = [];
        },

        addPlayer: function(playerObj){
            //add player

            if (va.players.indexOf(playerObj)) {
                va.players.push(playerObj);
            }
        },

        addEventListeners: function (players) {
            for (var i = 0; i < va.players.length; i++) {

                //Loop through all players and add events

                var el = players[i];
                console.log(el);
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
                    "volumechange",
                    "click"
                ];

                events.forEach(function (event) {

                    el.addEventListener(event, function (e) {


                        switch(e.type){
                            case "loadedmetadata":
                            va.sessions.push({"uid":window.hostname})
                            console.log(va.sessions)
                            break;

                            case "play":
                            break;

                            case "timeupdate":
                            break;

                            case "click":
                            console.log("you Clicked?")
                            break;

                            default:
                            console.log("'",e.type,"'", e);
                            break;
                        }



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