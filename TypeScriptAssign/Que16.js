// 2. Write a TypeScript class called Bus with the properties make, model, and year. Add a method start() that prints a message indicating that the Bus is starting.  
var Bus2 = /** @class */ (function () {
    // Constructor to initialize properties
    function Bus2(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }
    // Method to start the bus
    Bus2.prototype.start1 = function () {
        console.log("".concat(this.year, " ").concat(this.make, " ").concat(this.model, " is starting."));
    };
    return Bus2;
}());
// Example usage
var myBus1 = new Bus2("Mercedes", "Sprinter", 2022);
myBus1.start1();
