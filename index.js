// Task 1
var userWithValues = {
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
var userObject = Object.create({}, userWithValues);
console.log(userObject.name);
userObject.name.value = "new username";
console.log(userObject.name);
//
console.log(" ");
//
var personWithAccessors = {
    name: "initial name",
    age: 0,
    isAdmin: false,
};
var userWithAccessors = {
    name: {
        get: function () {
            return personWithAccessors.name;
        },
        set: function (value) {
            personWithAccessors.name = value;
        },
    },
    age: {
        get: function () {
            return personWithAccessors.age;
        },
        set: function (value) {
            personWithAccessors.age = value;
        },
    },
    isAdmin: {
        get: function () {
            return personWithAccessors.isAdmin;
        },
        set: function (value) {
            personWithAccessors.isAdmin = value;
        },
    },
};
var userObject2 = Object.create({}, userWithAccessors);
console.log(userObject2.age);
userObject2.age = 55;
console.log(userObject2.age);
//
//
//
// const user4: ObjectToPropertyDescriptor<IUser4> = {
//   name: {
//     // value: "name",
//     get(): string {
//       return this.value;
//     },
//     set(value: string) {
//       this.value = value;
//     },
//   },
//   age: {
//     // value: 34,
//     get() {
//       return this.value;
//     },
//     set(value: number) {
//       this.value = value;
//     },
//   },
//   isAdmin: {
//     // value: true,
//     get() {
//       return this.value;
//     },
//     set(value: boolean) {
//       this.value = value;
//     },
//   },
// };
