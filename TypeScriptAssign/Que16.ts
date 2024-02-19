// 2. Write a TypeScript class called Bus with the properties make, model, and year. Add a method start() that prints a message indicating that the Bus is starting.  
class Bus2 {
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
  
    // Method to start the bus
    start1(): void {
      console.log(`${this.year} ${this.make} ${this.model} is starting.`);
    }
  }
  
  // Example usage
  const myBus1 = new Bus2("Mercedes", "Sprinter", 2022);
  myBus1.start1();
  