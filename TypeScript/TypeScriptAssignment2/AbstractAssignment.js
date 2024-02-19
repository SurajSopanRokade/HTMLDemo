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
var vehical = /** @class */ (function () {
    function vehical() {
    }
    vehical.prototype.moving = function () {
        console.log('moving......');
    };
    return vehical;
}());
var car = /** @class */ (function (_super) {
    __extends(car, _super);
    function car() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    car.prototype.driving = function () {
        console.log('driving......');
    };
    return car;
}(vehical));
var t = new car();
t.moving();
t.driving();
