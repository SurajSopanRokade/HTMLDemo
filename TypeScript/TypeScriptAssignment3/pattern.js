var PatternStr = /** @class */ (function () {
    function PatternStr() {
    }
    PatternStr.prototype.pattern = function (str) {
        var str1 = str.split(" ");
        for (var i = 0; i < str1.length; i++) {
            var str2 = '';
            for (var j = 0; j <= i; j++) {
                str2 = str2 + "".concat(str1[j]);
            }
            console.log(str2);
        }
    };
    return PatternStr;
}());
var pat = new PatternStr();
pat.pattern('I Love My India');
