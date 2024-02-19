// 13. Write a TypeScript program that defines a TypeScript interface Car with properties make and model of type string. Create a type Bus with properties make and model of type string and an additional property payloadCapacity of type number. Now, create a type Vehicle that represents either a Car or a Truck using a union type.  

// Define the Car interface
interface Car {
    make: string;
    model: string;
  }
  
  // Define the Bus type with additional property payloadCapacity
  type Bus = {
    make: string;
    model: string;
    payloadCapacity: number;
  };
  
  // Define the Vehicle type as a union of Car and Bus
  type Vehicle = Car | Bus;
  
  // Example usage
  const sedan: Car = { make: "Toyota", model: "Camry" };
  const bus: Bus = { make: "Mercedes", model: "Sprinter", payloadCapacity: 20 };
  
  // Function that takes a Vehicle parameter
  function displayVehicleInfo(vehicle: Vehicle): void {
    console.log(`Make: ${vehicle.make}, Model: ${vehicle.model}`);
  
    if ("payloadCapacity" in vehicle) {
      console.log(`Payload Capacity: ${vehicle.payloadCapacity}`);
    }
  }
  
  // Display information for different types of vehicles
  console.log("Car Information:");
  displayVehicleInfo(sedan);
  
  console.log("\nBus Information:");
  displayVehicleInfo(bus);
  
