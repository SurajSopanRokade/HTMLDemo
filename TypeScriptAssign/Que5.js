// 5. Write a TypeScript program that declares a variable without specifying its type and shows how TypeScript infers the type based on the assigned value.  
var ss = 23;
var ss1 = 22;
console.log(ss + ss1);
//it automaticaly take type as number if we assign it a number
var st1 = 'sudarshan';
var st2 = 'suraj';
console.log(st1 + st2);
//same for string
var st1 = 'sudarshan';
var st3 = 34;
// var st2=34
// Subsequent variable declarations must have the same type.  Variable 'st2' must be of type 'string', but here has type 'number'
//we cannot reassign different type once it declared
console.log(st1 + st3);
