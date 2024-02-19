var UseStaticKey = /** @class */ (function () {
    function UseStaticKey() {
    }
    UseStaticKey.UseStat = function () {
        var sss = 'I am in static method';
        return sss;
    };
    UseStaticKey.str = "I am static variable";
    return UseStaticKey;
}());
var sss = new UseStaticKey();
var sss1 = UseStaticKey.UseStat();
console.log("method string : " + sss1);
console.log("method string : " + UseStaticKey.str);
