// Use type aliases to define variables
var person1 = {
    name: "Alice",
    age: 30,
    address: "123 Main St"
};
var person2 = {
    name: "Bob",
    age: 25,
    address: "456 Elm St"
};
var result1 = "success";
var result2 = "failure";
// Function using type aliases
function printPersonDetails(person) {
    console.log("Name: ".concat(person.name, ", Age: ").concat(person.age, ", Address: ").concat(person.address));
}
// Function using type aliases
function printResult(result) {
    console.log("Result: ".concat(result));
}
// Print details
console.log("Person 1 Details:");
printPersonDetails(person1);
console.log("\nPerson 2 Details:");
printPersonDetails(person2);
// Print results
console.log("\nResult 1:");
printResult(result1);
console.log("\nResult 2:");
printResult(result2);
