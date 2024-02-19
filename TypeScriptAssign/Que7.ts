// 7. Write a TypeScript program that creates type aliases for complex data types such as objects or custom types. Use them to define variables and explain how they improve code readability.  
// Define a type alias for a complex object
type Person = {
    name: string;
    age: number;
    address: string;
};

// Define a type alias for a custom type
type Result = "success" | "failure";

// Use type aliases to define variables
const person1: Person = {
    name: "Alice",
    age: 30,
    address: "123 Main St"
};

const person2: Person = {
    name: "Bob",
    age: 25,
    address: "456 Elm St"
};

const result1: Result = "success";
const result2: Result = "failure";

// Function using type aliases
function printPersonDetails(person: Person): void {
    console.log(`Name: ${person.name}, Age: ${person.age}, Address: ${person.address}`);
}

// Function using type aliases
function printResult(result: Result): void {
    console.log(`Result: ${result}`);
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
