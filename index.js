"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.Triangle = exports.Square = exports.Rectangle = exports.Circle = void 0;
var Figure = /** @class */ (function () {
    function Figure() {
    }
    return Figure;
}());
var Circle = /** @class */ (function (_super) {
    __extends(Circle, _super);
    function Circle(color, radius) {
        var _this = _super.call(this) || this;
        _this.color = color;
        _this.radius = radius;
        _this.name = "circle";
        return _this;
    }
    Circle.prototype.calculateArea = function () {
        return Math.PI * Math.pow(this.radius, 2);
    };
    return Circle;
}(Figure));
exports.Circle = Circle;
var Rectangle = /** @class */ (function (_super) {
    __extends(Rectangle, _super);
    function Rectangle(color, sideLength, sideWidth) {
        var _this = _super.call(this) || this;
        _this.color = color;
        _this.sideLength = sideLength;
        _this.sideWidth = sideWidth;
        _this.name = "rectangle";
        return _this;
    }
    Rectangle.prototype.calculateArea = function () {
        return (this.sideLength + this.sideWidth) * 2;
    };
    Rectangle.prototype.print = function () {
        console.log("(a + b) * 2");
    };
    return Rectangle;
}(Figure));
exports.Rectangle = Rectangle;
var Square = /** @class */ (function (_super) {
    __extends(Square, _super);
    function Square(color, sideLength) {
        var _this = _super.call(this) || this;
        _this.color = color;
        _this.sideLength = sideLength;
        _this.name = "square";
        return _this;
    }
    Square.prototype.calculateArea = function () {
        return this.sideLength * 4;
    };
    Square.prototype.print = function () {
        console.log("a * 4");
    };
    return Square;
}(Figure));
exports.Square = Square;
var Triangle = /** @class */ (function (_super) {
    __extends(Triangle, _super);
    function Triangle(color, sideLength, height) {
        var _this = _super.call(this) || this;
        _this.color = color;
        _this.sideLength = sideLength;
        _this.height = height;
        _this.name = "triangle";
        return _this;
    }
    Triangle.prototype.calculateArea = function () {
        return 0.5 * this.sideLength * this.height;
    };
    return Triangle;
}(Figure));
exports.Triangle = Triangle;
