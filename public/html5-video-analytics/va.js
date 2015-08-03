/*
 USAGE:

 //javascript
 va('#video,video,.video')
 */


;(function(window){
    window.va = function(selector){return va.fn.init(arguments)};
    va.version = "1.0.0";
    va.fn = {
        init: function(selector){
            console.log('init', selector);

            if (!va.fn.isEmpty(selector) ||
                selector === 'undefined' ||
                arguments.length === 0) {
                return [];
            };

            if (Array.isArray(selector)) {
                return [];
            };

            if (typeof arguments[0] === 'string') {
                var arg = arguments[0].replace(/\s/g,"");
                var hasComma = !(arg.indexOf(',') === -1);
                if (hasComma) {
                    arg = arg.split(',')
                    return arg
                }else{
                    return arg
                }
            };
            if (typeof arguments[0] === 'Object') {
                return [arguments[0]]
            };


            return arg;
        },
        isEmpty: function(obj){
            var hasOwnProperty = Object.prototype.hasOwnProperty;
            if (obj == null) return true;
            if (obj.length > 0)    return false;
            if (obj.length === 0)  return true;

            for (var key in obj) {
                if (hasOwnProperty.call(obj, key)) return false;
            }

            return true;
        }
        
    };

    if (typeof va == undefined) {
            return new va()
        };
})(window);
