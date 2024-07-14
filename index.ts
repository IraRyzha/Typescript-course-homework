// Task 1
interface RandomIndex {
  [key: string]: string | number;
}

const user: RandomIndex = {
  name: "Tom",
  age: 11,
};

// Task 2
interface FunctionIndex {
  [key: string]: (...params: any[]) => any;
}

const example: FunctionIndex = {
  sum: (a: number, b: number) => a + b,
  say: (message: string) => console.log(message),
};

// Task 3
interface ArrayIndex<T> {
  [key: number]: T;
}

const exampleArray1: ArrayIndex<number | string> = [3, 5, "Hello", 7, "hi", 1];
const exampleArray2: ArrayIndex<boolean> = {
  0: true,
  1: false,
  2: true,
};

// Task 4
interface Identifier {
  name: string;
  [key: string]: string | number;
}

const myDog: Identifier = {
  name: "Cabaka",
  age: 3,
};

// Task 5
interface IdentifierSuper {
  [key: string]: string | number | boolean | (() => void);
}

interface IdentifierSub extends IdentifierSuper {
  id: number;
  isOwner: boolean;
  run(): () => void;
  stop(): () => void;
}

// Task 6
interface IIdentifier {
  [key: string]: any;
}

const studend: IIdentifier = {
  name: "randomName",
  age: 25,
  job: "dev",
  marks: [5, 4, 1, 3, 7],
  address: {
    index: 1,
    country: "uk",
    city: "vin",
  },
};

function isObject(value: any): boolean {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}

function isNumber(value: any): boolean {
  if (Array.isArray(value)) {
    for (let el of value) {
      if (typeof el !== "number") {
        return false;
      }
    }
    return true;
  }
  if (isObject(value)) {
    for (let el in value) {
      if (typeof value[el] !== "number") {
        return false;
      }
    }
    return true;
  }
  return typeof value === "number";
}

function checkFieldIsNumberType(object: IIdentifier) {
  for (const key in object) {
    if (key === "name" || key === "job" || key === "country") {
      continue;
    }
    if (!isNumber(object[key])) {
      return false;
    }
  }
  return true;
}
// console.log(checkFieldIsNumberType(studend));
