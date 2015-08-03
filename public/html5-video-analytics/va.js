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

            var isArray = Array.isArray(selector[0]) ? "": "Array",
                isString = typeof selector[0] === 'string' ? "": "String",
                isObject = typeof selector[0] === 'Object' ? "": "Object",
                type,
                elements = [];

            console.log('init', selector[0], isArray, isString, isObject);



            // switch(type){
            //     // case "Array":
            //     // break;
            //     // case "Object":
            //     // break;
            //     default:
            //     break;
            // }

            for (var i = 0; i < selector.length; i++) {
                elements.push(selector[i])
            }

            return elements;


            // for (var i = 0; i < selector.length; i++) {
            //     if (typeof selector[i] === 'Object' && Array.isArray(selector[i])) {
            //         return [selector[i]]
            //     };

            //     if (typeof selector[i] === 'string' && Array.isArray(selector[i])) {
            //         var arg = selector[i].replace(/\s/g,"");
            //         var hasComma = !(arg.indexOf(',') === -1);
            //         if (hasComma) {
            //             arg = arg.split(',')
            //             elements.push(arg)
            //         }else{
            //             return arg
            //         }
            //     };

            // };



            // if (!va.fn.isEmpty(selector) ||
            //     selector === 'undefined' ||
            //     arguments.length === 0) {
            //     return [];
            // };









            // return arg;
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
