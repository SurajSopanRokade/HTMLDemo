// 3. Write a TypeScript program that defines a TypeScript interface Car with properties make and model of type string. Create a type Bus with properties make and model of type string and an additional property payloadCapacity of type number. Now, create a type Vehicle that represents either a Car or a Truck using a union type.  
// Example usage
var sedan = { make: "Toyota", model: "Camry" };
var bus = { make: "Mercedes", model: "Sprinter", payloadCapacity: 20 };
// Function that takes a Vehicle parameter
function displayVehicleInfo(vehicle) {
    console.log("Make: ".concat(vehicle.make, ", Model: ").concat(vehicle.model));
    if ("payloadCapacity" in vehicle) {
        console.log("Payload Capacity: ".concat(vehicle.payloadCapacity));
    }
}
// Display information for different types of vehicles
console.log("Car Information:");
displayVehicleInfo(sedan);
console.log("\nBus Information:");
displayVehicleInfo(bus);
