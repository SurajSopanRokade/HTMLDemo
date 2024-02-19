// 8. Write a TypeScript program that declares an array of a specific data type. It will demonstrates common array operations like adding elements, removing elements, and iterating through the array.  
var arr = [34, 45, 56, 6, 7, 56, 78];
arr.push(34);
console.log(arr);
//remove
arr.pop();
console.log(arr);
//iteration
for (var _i = 0, arr_1 = arr; _i < arr_1.length; _i++) {
    var i = arr_1[_i];
    console.log(i);
}
for (var i in arr) {
    console.log(arr[i]);
}
