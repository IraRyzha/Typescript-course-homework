abstract class Figure {
  constructor(readonly color: string) {}

  public abstract calculateArea(): number;
}

interface IPrintable {
  print(): void;
}

class Circle extends Figure {
  readonly name: string = "circle";
  constructor(readonly color: string, public radius: number) {
    super(color);
  }

  calculateArea() {
    return Math.PI * Math.pow(this.radius, 2);
  }
}

class Rectangle extends Figure implements IPrintable {
  readonly name: string = "rectangle";
  constructor(
    readonly color: string,
    public sideLength: number,
    public sideWidth: number
  ) {
    super(color);
  }

  calculateArea() {
    return (this.sideLength + this.sideWidth) * 2;
  }

  print() {
    console.log("(a + b) * 2");
  }
}

class Square extends Figure implements IPrintable {
  readonly name: string = "square";
  constructor(readonly color: string, public sideLength: number) {
    super(color);
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
    super(color);
  }

  calculateArea() {
    return 0.5 * this.sideLength * this.height;
  }
}

export { Circle, Rectangle, Square, Triangle };
