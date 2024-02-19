var arr2 = [2, 3, 45, 6, 7, 78, 8];
for (var i = 0; i < arr2.length; i++) {
    console.log("\n" + arr2[i]);
}
for (var n in arr2) {
    console.log("Using n : " + arr2[n]);
}
for (var _i = 0, arr2_1 = arr2; _i < arr2_1.length; _i++) {
    var m = arr2_1[_i];
    console.log("Using m : " + m);
}
//even elements
for (var _a = 0, arr2_2 = arr2; _a < arr2_2.length; _a++) {
    var n = arr2_2[_a];
    if (n % 2 == 0) {
        console.log("Even : " + n);
    }
}
//reverse Array
console.log("Before reverse : " + arr2);
var u = arr2.length - 1;
var temp = 0;
for (var j = 0; j < arr2.length / 2; j++) {
    temp = arr2[j];
    arr2[j] = arr2[u];
    arr2[u] = temp;
    u--;
}
console.log("After reverse : " + arr2);
//sum of array Element
var sum = 0;
for (var _b = 0, arr2_3 = arr2; _b < arr2_3.length; _b++) {
    var a = arr2_3[_b];
    sum = sum + a;
}
console.log("Sum : " + sum);
//find max
var max = 0;
for (var _c = 0, arr2_4 = arr2; _c < arr2_4.length; _c++) {
    var c = arr2_4[_c];
    if (c > max) {
        max = c;
    }
}
console.log("Max : " + max);
// find min
var min = arr2[0];
for (var _d = 0, arr2_5 = arr2; _d < arr2_5.length; _d++) {
    var y = arr2_5[_d];
    if (y < min) {
        min = y;
    }
}
console.log("Min : " + min);
// merge 2 arrays
var arr6 = [2, 3, 4, 5, 6, 7, 7, 8];
var arr7 = [];
var p = 0;
for (var i = 0; i < arr2.length; i++) {
    arr7[p] = arr2[i];
    p++;
}
for (var i = 0; i < arr6.length; i++) {
    arr7[p] = arr6[i];
    p++;
}
console.log(arr7);
