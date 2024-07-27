// Task 1

type DeepReadonly<T> = {
  readonly [K in keyof T]: T[K] extends object ? DeepReadonly<T[K]> : T[K];
};

interface IUser1 {
  name: string;
  age: number;
  isAdmin: boolean;
  grades: {
    English: number;
    Math: number;
    Programming: number;
  };
}

const user1: DeepReadonly<IUser1> = {
  name: "name1",
  age: 12,
  isAdmin: false,
  grades: {
    English: 11,
    Math: 10,
    Programming: 12,
  },
};

// user1.age = 8; // Error
// user1.grades.Programming = 9 // Error

// Task 2

type DeepRequireReadonly<T> = {
  readonly [K in keyof T]-?: T[K] extends object
    ? T[K] extends Function
      ? T[K]
      : DeepRequireReadonly<T[K]>
    : T[K];
};

interface IUser2 {
  name?: string;
  age?: number;
  isAdmin?: boolean;
  grades?: {
    English?: number;
    Math?: number;
    Programming?: number;
  };
}

const user2: DeepRequireReadonly<IUser2> = {
  name: "name1",
  age: 12,
  isAdmin: false,
  grades: {
    English: 25,
    Math: 23,
  },
};

// user2.name = "otherName"; // Error
//  Скажіть як правильно зробити тип DeepRequireReadonly щоб виникала помилка
user2.grades.Math = 9;

// Task 3

type ToUpperCase<K extends string> = Uppercase<K>;

type UpperCaseKeys<T> = {
  readonly [K in keyof T & string as ToUpperCase<K>]: T[K];
};

interface IUser3 {
  name: string;
  age: number;
  isAdmin: boolean;
}

const user3: UpperCaseKeys<IUser3> = {
  NAME: "name",
  AGE: 67,
  ISADMIN: true,
};

// Task 4

type ObjectToPropertyDescriptor<T> = {
  [K in keyof T]: {
    value?: T[K];
    get?(): T[K];
    set?(value: T[K]): void;
  };
};

interface IUser4 {
  name: string;
  age: number;
  isAdmin: boolean;
}

const userWithValues: ObjectToPropertyDescriptor<IUser4> = {
  name: {
    value: "username",
  },
  age: {
    value: 34,
  },
  isAdmin: {
    value: true,
  },
};

const userObject = Object.create({}, userWithValues);

console.log(userObject.name);

//
console.log(" ");
//

const personWithAccessors = {
  name: "initial name",
  age: 0,
  isAdmin: false,
};

const userWithAccessors: ObjectToPropertyDescriptor<IUser4> = {
  name: {
    get() {
      return personWithAccessors.name;
    },
    set(value: string) {
      personWithAccessors.name = value;
    },
  },
  age: {
    get() {
      return personWithAccessors.age;
    },
    set(value: number) {
      personWithAccessors.age = value;
    },
  },
  isAdmin: {
    get() {
      return personWithAccessors.isAdmin;
    },
    set(value: boolean) {
      personWithAccessors.isAdmin = value;
    },
  },
};

const userObject2 = Object.create({}, userWithAccessors);

console.log(userObject2.age);
userObject2.age = 55;
console.log(userObject2.age);

//
//
//

// const user4: ObjectToPropertyDescriptor<IUser4> = {
//   name: {
//     value: "name",
//     get(): string {
//       return this.value;
//     },
//     set(value: string) {
//       this.value = value;
//     },
//   },
//   age: {
//     value: 34,
//     get() {
//       return this.value;
//     },
//     set(value: number) {
//       this.value = value;
//     },
//   },
//   isAdmin: {
//     value: true,
//     get() {
//       return this.value;
//     },
//     set(value: boolean) {
//       this.value = value;
//     },
//   },
// };
