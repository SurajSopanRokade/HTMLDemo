// 4. Write a TypeScript function that takes an argument of type string | number. Inside the function, use a type guard to check whether the argument is a string or a number. Then, log the appropriate message accordingly.  
// Define the function with a type guard
function processInput(input) {
    if (typeof input === "string") {
        console.log("Input is a string:", input.toUpperCase());
    }
    else if (typeof input === "number") {
        console.log("Input is a number:", input * 2);
    }
    else {
        console.log("Invalid input type.");
    }
}
// Example usage
processInput("hello");
processInput(42);
processInput(true); // This will log "Invalid input type."
