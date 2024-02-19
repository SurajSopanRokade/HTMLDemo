// 8. Write a TypeScript program that declares an array of a specific data type. It will demonstrates common array operations like adding elements, removing elements, and iterating through the array.  
var arr:number[]=[34,45,56,6,7,56,78]
arr.push(34)
console.log(arr)

//remove
arr.pop()
console.log(arr)

//iteration
for(let i of arr){
    console.log(i)
}
for(let i in arr){
    console.log(arr[i])
}