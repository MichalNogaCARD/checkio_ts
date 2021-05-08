(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Multiply = void 0;
    var Multiply;
    (function (Multiply) {
        function multTwo(a, b) {
            return a * b;
        }
        Multiply.multTwo = multTwo;
    })(Multiply = exports.Multiply || (exports.Multiply = {}));
});
//# sourceMappingURL=index.js.map