var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Class1 = /** @class */ (function () {
    function Class1() {
        this.b = 12;
    }
    return Class1;
}());
var Class2 = /** @class */ (function (_super) {
    __extends(Class2, _super);
    function Class2() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.a = 12;
        _this.c = _this.a + _this.b;
        return _this;
    }
    return Class2;
}(Class1));
var r = new Class2();
console.log(r.c);
