// Task 1
function filterArray(array, condition) {
    return array.filter(condition);
}
var numbers = [5, 1, 3, 8, 6, 0, 12, 15, 16, 22];
var isParne = function (num) { return num % 2 === 0; };
var filteredNumbers = filterArray(numbers, isParne);
var Stack = /** @class */ (function () {
    function Stack(items) {
        if (items === void 0) { items = []; }
        this.items = items;
    }
    Stack.prototype.push = function (item) {
        this.items.push(item);
    };
    Stack.prototype.pop = function () {
        this.items.pop();
    };
    Stack.prototype.peek = function (id) {
        return this.items.find(function (item) { return item.id === id; });
    };
    return Stack;
}());
var Item = /** @class */ (function () {
    function Item(id, name) {
        this.id = id;
        this.name = name;
    }
    return Item;
}());
var StackObject = new Stack();
var item1 = new Item(5, "randomName1");
var item2 = new Item(4, "randomName2");
var item3 = new Item(2, "randomName3");
var item4 = new Item(3, "randomName4");
StackObject.push(item1);
StackObject.push(item2);
StackObject.push(item3);
StackObject.push(item4);
// console.log(StackObject.items);
StackObject.pop();
// console.log(StackObject.items);
// console.log(StackObject.peek(5));
// console.log(StackObject.peek(3));
// Task 3
var Dictionary = /** @class */ (function () {
    function Dictionary() {
        this.items = new Map();
    }
    Dictionary.prototype.set = function (key, value) {
        this.items.set(key, value);
    };
    Dictionary.prototype.get = function (key) {
        return this.items.get(key);
    };
    Dictionary.prototype.has = function (key) {
        return this.items.has(key);
    };
    return Dictionary;
}());
var DictionaryObject = new Dictionary();
DictionaryObject.set("key", 56);
DictionaryObject.set(3, "value");
console.log(DictionaryObject.get(3));
console.log(DictionaryObject.get("key"));
console.log(DictionaryObject.get("wrong key"));
console.log(DictionaryObject.has("key"));
console.log(DictionaryObject.has("wrong key"));
