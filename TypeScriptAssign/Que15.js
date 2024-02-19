// 5. Write a TypeScript function that accepts a parameter of type number and returns a boolean indicating whether the number is odd. Use a type guard to check and ensure the input is a valid number.  
// Write a TypeScript class called Bus with the properties make, model, and year. Implement a constructor that initializes these properties when a Bus object is created.
// Function to check if a number is odd using a type guard
function isOddNumber(input) {
    return typeof input === "number" && input % 2 !== 0;
}
// Example usage of the function
var numberToCheck = 7;
if (isOddNumber(numberToCheck)) {
    console.log("".concat(numberToCheck, " is an odd number."));
}
else {
    console.log("".concat(numberToCheck, " is not an odd number or not a valid number."));
}
// Class Bus with properties make, model, and year
var Bus1 = /** @class */ (function () {
    // Constructor to initialize properties
    function Bus1(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }
    return Bus1;
}());
// Example usage of the Bus class
var myBus = new Bus1("Mercedes", "Sprinter", 2022);
console.log("Bus details:", myBus);
