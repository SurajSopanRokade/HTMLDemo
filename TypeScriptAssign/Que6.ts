// 6. Write a TypeScript program that converts a variable of one type to another using type assertions and type conversion functions like parseInt().  
// Type assertion
let variableOfTypeA: any = "42";
let convertedVariableA: number = <number>variableOfTypeA;

console.log("Type assertion result:");
console.log("Original variable:", variableOfTypeA);
console.log("Converted variable:", convertedVariableA);

// Type conversion using parseInt()
let variableOfTypeB: string = "55";
let convertedVariableB: number = parseInt(variableOfTypeB);

console.log("\nType conversion using parseInt() result:");
console.log("Original variable:", variableOfTypeB);
console.log("Converted variable:", convertedVariableB);
