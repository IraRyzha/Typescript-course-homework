// Task 1

function filterArray<T>(array: T[], condition: (element: T) => boolean) {
  return array.filter(condition);
}

const numbers = [5, 1, 3, 8, 6, 0, 12, 15, 16, 22];
const isParne = (num: number) => num % 2 === 0;

const filteredNumbers = filterArray(numbers, isParne);
// console.log(filteredNumbers);

// Task 2

interface IId {
  id: number;
}

class Stack<T extends IId> {
  constructor(public items: T[] = []) {}

  push(item: T): void {
    this.items.push(item);
  }

  pop(): void {
    this.items.pop();
  }

  peek(id: number): T | undefined {
    return this.items.find((item) => item.id === id);
  }
}

interface IItem extends IId {
  name: string;
}

class Item implements IItem {
  constructor(public id: number, public name: string) {}
}

const StackObject = new Stack<IItem>();

const item1 = new Item(5, "randomName1");
const item2 = new Item(4, "randomName2");
const item3 = new Item(2, "randomName3");
const item4 = new Item(3, "randomName4");

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

class Dictionary<K extends string | number | symbol, V> {
  private items: Map<K, V> = new Map();

  set(key: K, value: V): void {
    this.items.set(key, value);
  }
  get(key: K): V | undefined {
    return this.items.get(key);
  }
  has(key: K): boolean {
    return this.items.has(key);
  }
}

const DictionaryObject = new Dictionary<string | number, number | string>();

DictionaryObject.set("key", 56);
DictionaryObject.set(3, "value");

console.log(DictionaryObject.get(3));
console.log(DictionaryObject.get("key"));
console.log(DictionaryObject.get("wrong key"));
console.log(DictionaryObject.has("key"));
console.log(DictionaryObject.has("wrong key"));
