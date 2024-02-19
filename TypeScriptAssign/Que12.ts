// 12. Write a TypeScript program that creates a function combine that accepts two parameters of types boolean and number. It returns a value that can be either a boolean or a number. Use a union type to achieve this.  
// Define the combine function with a union type
function combine(param1: boolean, param2: number): boolean | number {
    if (param1) {
      return param2 * 2; // If param1 is true, return param2 multiplied by 2 (number)
    } else {
      return param1;
    }
  }
  
  // Example usage
  const resul1: boolean | number = combine(true, 5);
  const resul2: boolean | number = combine(false, 10);
  
  // Print the results
  console.log("Result 1:", resul1);
  console.log("Result 2:", resul2);
  
