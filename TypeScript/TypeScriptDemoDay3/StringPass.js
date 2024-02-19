var stirngpass = /** @class */ (function () {
    function stirngpass() {
    }
    // reversestr(str:string):string{
    //     let word:string=''
    //     for(let i=str.length-1; i>=0; i--){
    //         word=word+str.charAt(i)
    //     }
    //     return word
    // }
    //static vowel
    stirngpass.vowelCount = function (str) {
        var count = 0;
        for (var i = 0; i < str.length; i++) {
            if (str.charAt(i) == 'a' || str.charAt(i) == 'e' || str.charAt(i) == 'i' || str.charAt(i) == 'o' || str.charAt(i) == 'u' || str.charAt(i) == 'A' || str.charAt(i) == 'E' || str.charAt(i) == 'I' || str.charAt(i) == 'O' || str.charAt(i) == 'U') {
                count++;
            }
        }
        return count;
    };
    return stirngpass;
}());
var ss = new stirngpass();
//let dd:string=ss.reversestr("Suraj")
//console.log(dd)
var a = stirngpass.vowelCount('India');
console.log(a);
