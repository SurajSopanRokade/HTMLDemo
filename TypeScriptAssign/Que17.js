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
// 3. Write a TypeScript class called SUV (Sports Utility Vehicle) that extends the Car class. Add a property to represent whether the SUV is suitable for off-road driving. Implement a method that toggles off-road capability and prints a message accordingly.  
// Base class Car
var Car = /** @class */ (function () {
    // Constructor to initialize properties
    function Car(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }
    // Method to start the car
    Car.prototype.start = function () {
        console.log("".concat(this.year, " ").concat(this.make, " ").concat(this.model, " is starting."));
    };
    return Car;
}());
// Derived class SUV extending Car
var SUV = /** @class */ (function (_super) {
    __extends(SUV, _super);
    // Constructor to initialize properties including the new one
    function SUV(make, model, year, isOffRoadCapable) {
        // Call the constructor of the base class (Car)
        var _this = _super.call(this, make, model, year) || this;
        // Initialize the new property
        _this.isOffRoadCapable = isOffRoadCapable;
        return _this;
    }
    // Method to toggle off-road capability
    SUV.prototype.toggleOffRoadCapability = function () {
        this.isOffRoadCapable = !this.isOffRoadCapable;
        if (this.isOffRoadCapable) {
            console.log("".concat(this.year, " ").concat(this.make, " ").concat(this.model, " is now off-road capable."));
        }
        else {
            console.log("".concat(this.year, " ").concat(this.make, " ").concat(this.model, " is no longer off-road capable."));
        }
    };
    return SUV;
}(Car));
// Example usage of the SUV class
var mySUV = new SUV("Jeep", "Wrangler", 2022, true);
console.log("SUV details:", mySUV);
mySUV.toggleOffRoadCapability();
mySUV.start();
