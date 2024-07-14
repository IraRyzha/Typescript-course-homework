var user = {
    name: "Tom",
    age: 11,
};
var example = {
    sum: function (a, b) { return a + b; },
    say: function (message) { return console.log(message); },
    queNumber: function (num) { return console.log(num); },
};
example.queNumber(true);
var exampleArray1 = [3, 5, "Hello", 7, "hi", 1];
var exampleArray2 = {
    0: true,
    1: false,
    2: true,
};
var myDog = {
    name: "Cabaka",
    age: 3,
};
var studend = {
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
function isObject(value) {
    return typeof value === "object" && value !== null && !Array.isArray(value);
}
function isNumber(value) {
    if (Array.isArray(value)) {
        for (var _i = 0, value_1 = value; _i < value_1.length; _i++) {
            var el = value_1[_i];
            if (typeof el !== "number") {
                return false;
            }
        }
        return true;
    }
    if (isObject(value)) {
        for (var el in value) {
            if (typeof value[el] !== "number") {
                return false;
            }
        }
        return true;
    }
    return typeof value === "number";
}
function checkFieldIsNumberType(object) {
    for (var key in object) {
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
