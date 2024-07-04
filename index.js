"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Student = exports.Group = exports.Level = exports.Area = exports.School = void 0;
var School = /** @class */ (function () {
    function School() {
        this._areas = [];
        this._lecturers = [];
    }
    Object.defineProperty(School.prototype, "areas", {
        get: function () {
            return this._areas;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(School.prototype, "lecturers", {
        get: function () {
            return this._lecturers;
        },
        enumerable: false,
        configurable: true
    });
    School.prototype.addArea = function (addedArea) {
        this._areas.push(addedArea);
    };
    School.prototype.removeArea = function (removedArea) {
        this._areas.filter(function (area) { return area != removedArea; });
    };
    School.prototype.addLecturer = function (addedLecturer) {
        this._lecturers.push(addedLecturer);
    };
    School.prototype.removeLecturer = function (removedLecturer) {
        this._lecturers.filter(function (lecturer) { return lecturer != removedLecturer; });
    };
    return School;
}());
exports.School = School;
var Area = /** @class */ (function () {
    function Area(name) {
        this._levels = [];
        this._name = name;
    }
    Object.defineProperty(Area.prototype, "name", {
        get: function () {
            return this._name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Area.prototype, "levels", {
        get: function () {
            return this._levels;
        },
        enumerable: false,
        configurable: true
    });
    Area.prototype.addLevel = function (addedLevel) {
        this._levels.push(addedLevel);
    };
    Area.prototype.removeLevel = function (removedLevel) {
        this._levels.filter(function (level) { return level != removedLevel; });
    };
    return Area;
}());
exports.Area = Area;
var Level = /** @class */ (function () {
    function Level(name, description) {
        this._groups = [];
        this._name = name;
        this._description = description;
    }
    Object.defineProperty(Level.prototype, "name", {
        get: function () {
            return this._name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Level.prototype, "description", {
        get: function () {
            return this._description;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Level.prototype, "groups", {
        get: function () {
            return this._groups;
        },
        enumerable: false,
        configurable: true
    });
    Level.prototype.addGroup = function (addedGroup) {
        this._groups.push(addedGroup);
    };
    Level.prototype.removeGroup = function (removedGroup) {
        this._groups.filter(function (group) { return group != removedGroup; });
    };
    return Level;
}());
exports.Level = Level;
var Group = /** @class */ (function () {
    function Group(directionName, levelName) {
        this._area = "";
        this._status = "";
        this._students = [];
        this._directionName = directionName;
        this._levelName = levelName;
    }
    Object.defineProperty(Group.prototype, "area", {
        get: function () {
            return this._area;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Group.prototype, "status", {
        get: function () {
            return this._status;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Group.prototype, "students", {
        get: function () {
            return this._students;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Group.prototype, "directionName", {
        get: function () {
            return this._directionName;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Group.prototype, "levelName", {
        get: function () {
            return this._levelName;
        },
        enumerable: false,
        configurable: true
    });
    Group.prototype.addStudent = function (addedStudent) {
        this._students.push(addedStudent);
    };
    Group.prototype.removeStudent = function (removedStudent) {
        this._students.filter(function (student) { return student != removedStudent; });
    };
    Group.prototype.setStatus = function (status) {
        this._status = status;
    };
    Group.prototype.showPerformance = function () {
        var sortedStudents = __spreadArray([], this._students, true).sort(function (a, b) { return b.getPerformanceRating() - a.getPerformanceRating(); });
        console.log.apply(console, this._students);
        console.log(sortedStudents);
        return sortedStudents;
    };
    return Group;
}());
exports.Group = Group;
var Student = /** @class */ (function () {
    function Student(firstName, lastName, birthYear) {
        this._grades = [];
        this._visits = [];
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
    Object.defineProperty(Student.prototype, "grade", {
        set: function (grade) {
            this._grades.push(grade);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Student.prototype, "visit", {
        set: function (visit) {
            this._visits.push(visit);
        },
        enumerable: false,
        configurable: true
    });
    Student.prototype.getPerformanceRating = function () {
        if (!this._grades.length)
            return 0;
        var averageGrade = this._grades.reduce(function (sum, grade) { return sum + grade.mark; }, 0) /
            this._grades.length;
        return averageGrade;
    };
    return Student;
}());
exports.Student = Student;
