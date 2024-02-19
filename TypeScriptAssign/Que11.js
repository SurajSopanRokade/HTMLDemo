// . Write a TypeScript program that declares a variable 'result' that can hold either a 'string' or a 'number'. Now write a function that takes an argument of type 'string | number | boolean' and logs its type.
// Declare a variable 'result' that can hold either a 'string' or a 'number'
var result;
// Function to log the type of the argument
function logType(input) {
    console.log("Type of the argument: ".concat(typeof input));
}
// Example usage
result = "Hello, TypeScript!";
logType(result);
result = 42;
logType(result);
result = true;
logType(result);
