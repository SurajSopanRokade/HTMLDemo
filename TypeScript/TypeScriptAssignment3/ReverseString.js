var ReverseAssign = /** @class */ (function () {
    function ReverseAssign() {
    }
    ReverseAssign.prototype.reversestr = function (str) {
        var word = '';
        for (var i = 0; i < str.length; i++) {
            word = str.charAt(i) + word;
        }
        return word;
    };
    return ReverseAssign;
}());
var ss1 = new ReverseAssign();
var st = ss1.reversestr('Suraj');
console.log(st);
