var student = /** @class */ (function () {
    function student(s_id, s_name, sub1, sub2, sub3) {
        this.s_id = s_id;
        this.s_name = s_name;
        this.sub1 = sub1;
        this.sub2 = sub2;
        this.sub3 = sub3;
        this.percentage = this.calculatePercentage();
    }
    student.prototype.calculatePercentage = function () {
        return this.percentage = (this.sub1 + this.sub2 + this.sub3) / 3;
    };
    student.prototype.display = function () {
        console.log(this.s_id + " " + this.s_name);
        console.log(this.percentage);
    };
    return student;
}());
var Stud = new student(1, "Suraj", 66, 88, 77);
Stud.display();
