var Student = /** @class */ (function () {
    function Student(id, name) {
        this.id = id;
        this.name = name;
    }
    Student.prototype.display = function () {
        console.log(this.id + " " + this.name);
    };
    return Student;
}());
var s = new Student(100, 'Nikhil');
s.display();
