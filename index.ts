abstract class Figure {
  public abstract readonly name: string;
  public abstract readonly color: string;

  public abstract calculateArea(): number;
}

class Circle extends Figure {
  readonly name: string = "circle";
  constructor(readonly color: string, public radius: number) {
    super();
  }

  calculateArea() {
    return Math.PI * Math.pow(this.radius, 2);
  }
}
class Rectangle extends Figure {
  readonly name: string = "rectangle";
  constructor(
    readonly color: string,
    public sideLength: number,
    public sideWidth: number
  ) {
    super();
  }

  calculateArea() {
    return (this.sideLength + this.sideWidth) * 2;
  }

  print() {
    console.log("(a + b) * 2");
  }
}
class Square extends Figure {
  readonly name: string = "square";
  constructor(readonly color: string, public sideLength: number) {
    super();
  }

  calculateArea() {
    return this.sideLength * 4;
  }

  print() {
    console.log("a * 4");
  }
}
class Triangle extends Figure {
  readonly name: string = "triangle";
  constructor(
    readonly color: string,
    public sideLength: number,
    public height: number
  ) {
    super();
  }

  calculateArea() {
    return 0.5 * this.sideLength * this.height;
  }
}

export { Circle, Rectangle, Square, Triangle };
