// 3. Write a TypeScript class called SUV (Sports Utility Vehicle) that extends the Car class. Add a property to represent whether the SUV is suitable for off-road driving. Implement a method that toggles off-road capability and prints a message accordingly.  
// Base class Car
class Car {
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
  
    // Method to start the car
    start3(): void {
      console.log(`${this.year} ${this.make} ${this.model} is starting.`);
    }
  }
  
  // Derived class SUV extending Car
  class SUV extends Car {
    // Additional property for off-road capability
    isOffRoadCapable: boolean;
  
    // Constructor to initialize properties including the new one
    constructor(make: string, model: string, year: number, isOffRoadCapable: boolean) {
      // Call the constructor of the base class (Car)
      super(make, model, year);
  
      // Initialize the new property
      this.isOffRoadCapable = isOffRoadCapable;
    }
  
    // Method to toggle off-road capability
    toggleOffRoadCapability(): void {
      this.isOffRoadCapable = !this.isOffRoadCapable;
  
      if (this.isOffRoadCapable) {
        console.log(`${this.year} ${this.make} ${this.model} is now off-road capable.`);
      } else {
        console.log(`${this.year} ${this.make} ${this.model} is no longer off-road capable.`);
      }
    }
  }
  
  // Example usage of the SUV class
  const mySUV = new SUV("Jeep", "Wrangler", 2022, true);
  
  console.log("SUV details:", mySUV);
  mySUV.toggleOffRoadCapability();
  mySUV.start3();
  