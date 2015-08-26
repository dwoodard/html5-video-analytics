/*
 USAGE:

 //javascript
 va('#video,video,.video')
 */


;
(function (window) {
    "use strict";
    window.va = function (selector) {
        return new va.fn.init(arguments)
    };
    va.version = "1.0.0";
    va.controllers = [];
    va.fn = {
        init: function (selector) {
            var type;
            va.elements = [];

            if (typeof selector[0] === "object") {
                type = Array.isArray(selector[0]) ? "array" : "";
            }
            if (typeof selector[0] === 'string') type = "string";


            switch (type) {
                case "array":
                    for (var i = 0; i < selector[0].length; i++) {
                        if (typeof selector[0][i] !== "string") continue;
                        va.elements.push(document.querySelectorAll(selector[0][i])[0]);
                    }
                    //console.log(type, selector[0], elements);
                    break;
                case "string":
                    //console.log(selector, document.querySelectorAll(selector[0])[0])
                    var el = document.querySelectorAll(selector[0]);
                    va.elements.push(el[0]);
                    break;
            }

            // console.log(type, va.elements);

            //addEventListener
            va.fn.addEventListeners(va.elements)

            return va.elements;
        },
        addEventListeners: function(elements){
            for (var i = 0; i < va.elements.length; i++) {
                var el = elements[i];
                if (!el) {continue}

                el.addEventListener('click', function(e){
                    console.log(e.type, e);
                })

                el.addEventListener('emptied', function(e){
                    console.log(e.type, e);
                })
                el.addEventListener('loadedmetadata', function(e){
                    console.log(e.type, e);
                })
                el.addEventListener('loadeddata', function(e){
                    console.log(e.type, e);
                })
                el.addEventListener('canplay', function(e){
                    console.log(e.type, e);
                })
                el.addEventListener('canplaythrough', function(e){
                    console.log(e.type, e);
                })
                el.addEventListener('playing', function(e){
                    console.log(e.type, e);
                })
                el.addEventListener('ended', function(e){
                    console.log(e.type, e);
                })
                el.addEventListener('waiting', function(e){
                    console.log(e.type, e);
                })
                el.addEventListener('ended', function(e){
                    console.log(e.type, e);
                })
                el.addEventListener('durationchange', function(e){
                    console.log(e.type, e);
                })
                el.addEventListener('timeupdate', function(e){
                    console.log(e.type, e);
                })
                el.addEventListener('play', function(e){
                    console.log(e.type, e);
                })
                el.addEventListener('pause', function(e){
                    console.log(e.type, e);
                })
                el.addEventListener('ratechange', function(e){
                    console.log(e.type, e);
                })
                el.addEventListener('volumechange', function(e){
                    console.log(e.type, e);
                })


            };
        }
    };
    if (typeof va === 'undefined') {
        return new va()
    }
})(window);