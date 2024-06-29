"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Student = exports.Group = exports.Level = exports.Direction = exports.School = void 0;
var School = /** @class */ (function () {
    function School() {
        this._directions = [];
    }
    School.prototype.addDirection = function (direction) {
        this._directions.push(direction);
    };
    return School;
}());
exports.School = School;
var Direction = /** @class */ (function () {
    function Direction(name) {
        this.levels = [];
        this._name = name;
    }
    Object.defineProperty(Direction.prototype, "name", {
        get: function () {
            return this._name;
        },
        enumerable: false,
        configurable: true
    });
    Direction.prototype.addLevel = function (level) {
        this.levels.push(level);
    };
    return Direction;
}());
exports.Direction = Direction;
var Level = /** @class */ (function () {
    function Level(name, program) {
        this.groups = [];
        this._name = name;
        this._program = program;
    }
    Object.defineProperty(Level.prototype, "name", {
        get: function () {
            return this._name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Level.prototype, "program", {
        get: function () {
            return this._program;
        },
        enumerable: false,
        configurable: true
    });
    Level.prototype.addGroup = function (group) {
        this.groups.push(group);
    };
    return Level;
}());
exports.Level = Level;
var Group = /** @class */ (function () {
    function Group(directionName, levelName) {
        this._students = [];
        this.directionName = directionName;
        this.levelName = levelName;
    }
    Object.defineProperty(Group.prototype, "students", {
        get: function () {
            return this._students;
        },
        enumerable: false,
        configurable: true
    });
    Group.prototype.addStudent = function (student) {
        this._students.push(student);
    };
    Group.prototype.showPerformance = function () {
        var sortedStudents = this.students.sort(function (a, b) { return b.getPerformanceRating() - a.getPerformanceRating(); });
        return sortedStudents;
    };
    return Group;
}());
exports.Group = Group;
var Student = /** @class */ (function () {
    function Student(firstName, lastName, birthYear) {
        this._grades = {};
        this.attendance = [];
        this._firstName = firstName;
        this._lastName = lastName;
        this._birthYear = birthYear;
    }
    Object.defineProperty(Student.prototype, "fullName", {
        get: function () {
            return "".concat(this._lastName, " ").concat(this._firstName);
        },
        set: function (value) {
            var _a;
            _a = value.split(" "), this._lastName = _a[0], this._firstName = _a[1];
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Student.prototype, "age", {
        get: function () {
            return new Date().getFullYear() - this._birthYear;
        },
        enumerable: false,
        configurable: true
    });
    Student.prototype.setGrade = function (subject, grade) {
        this._grades[subject] = grade;
    };
    Student.prototype.markAttendance = function (present) {
        this.attendance.push(present);
    };
    Student.prototype.getPerformanceRating = function () {
        var gradeValues = Object.values(this._grades);
        console.log("gradeValues");
        console.log(gradeValues);
        if (gradeValues.length === 0)
            return 0;
        var averageGrade = gradeValues.reduce(function (sum, grade) { return sum + grade; }, 0) / gradeValues.length;
        return averageGrade;
    };
    return Student;
}());
exports.Student = Student;
