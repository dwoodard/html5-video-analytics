/*
 USAGE:

 //javascript
 va('#video,video,.video')
 */


;(function(window){
    window.va = function(selector){return va.fn.init(selector)};
    va.version = "1.0.0";
    va.fn = {
        init: function(selector){
            if (selector === 'undefined') {
                return [];
            };

            if (typeof arguments[0] === 'object') {

                return [];


            };

            if (typeof arguments[0] === 'string') {

                var arg = arguments[0].replace(/\s/g,"")


            };

            return arg;
        }
    };

    
})(window);









