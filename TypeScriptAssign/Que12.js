// 12. Write a TypeScript program that creates a function combine that accepts two parameters of types boolean and number. It returns a value that can be either a boolean or a number. Use a union type to achieve this.  
// Define the combine function with a union type
function combine(param1, param2) {
    if (param1) {
        return param2 * 2; // If param1 is true, return param2 multiplied by 2 (number)
    }
    else {
        return param1; // If param1 is false, return the negation of param1 (boolean)
    }
}
// Example usage
var resul1 = combine(true, 5);
var resul2 = combine(false, 10);
// Print the results
console.log("Result 1:", resul1);
console.log("Result 2:", resul2);
