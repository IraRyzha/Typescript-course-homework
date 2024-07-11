import { Circle, Rectangle, Square, Triangle } from "./index";

const CircleObject = new Circle("yellow", 5);
const RectangleObject = new Rectangle("red", 4, 3);
const SquareObject = new Square("green", 10);
const TriangleObject = new Triangle("blue", 3, 5);

console.log(CircleObject.calculateArea());
console.log(" ");
console.log(RectangleObject.calculateArea());
console.log(" ");
console.log(SquareObject.calculateArea());
console.log(" ");
console.log(TriangleObject.calculateArea());
