// 2. Write a TypeScript program that declares variables using let, const, and var. Then, describe how each declaration type behaves with respect to scoping and mutability.  
var na = 'suraj';
function check1() {
    var num1 = 23;
    var num1 = 22;
    var num2 = 2;
    //we can reassign var value
    console.log(num1);
    //scope within function
    if (num1 > num2) {
        console.log(num2);
        var num3 = 34;
        //scope within block 
        num3 = 45;
        //let we can re-assign but cannot redeclare
        var num4 = 89;
        //const we can not reassign and cannot redeclare and scope within block
    }
}
