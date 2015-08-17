/*
 USAGE:

 //javascript
 va('#video,video,.video')
 */


;
(function (window) {
    window.va = function (selector) {
        return new va.fn.init(arguments)
    };
    va.version = "1.0.0";
    va.elements = [];
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
            console.log(type, va.elements);
            return va.elements;
        },
        isEmpty: function (obj) {
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
    if (typeof va === 'undefined') {
        return new va()
    }
})(window);