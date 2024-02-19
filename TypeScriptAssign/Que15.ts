// 5. Write a TypeScript function that accepts a parameter of type number and returns a boolean indicating whether the number is odd. Use a type guard to check and ensure the input is a valid number.  

// Write a TypeScript class called Bus with the properties make, model, and year. Implement a constructor that initializes these properties when a Bus object is created.
  // Function to check if a number is odd using a type guard
function isOddNumber(input: number | any): input is number {
    return typeof input === "number" && input % 2 !== 0;
  }
  
  // Example usage of the function
  const numberToCheck: number = 9;
  
  if (isOddNumber(numberToCheck)) {
    console.log(`${numberToCheck} is an odd number.`);
  } else {
    console.log(`${numberToCheck} is not an odd number or not a valid number.`);
  }
  
  // Class Bus with properties make, model, and year
  class Bus1 {
    // Properties
    make: string;
    model: string;
    year: number;
  
    // Constructor to initialize properties
    constructor(make: string, model: string, year: number) {
      this.make = make;
      this.model = model;
      this.year = year;
    }
  }
  
  // Example usage of the Bus class
  const myBus = new Bus1("Mercedes", "Sprinter", 2022);
  console.log("Bus details:", myBus);
  
