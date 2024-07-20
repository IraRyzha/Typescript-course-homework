// Task 1

// function filterArray<T>(array: any[], condition: any) {
//   return array.filter()
// }

// Task 2

class Stack<T extends { id: number }> {
  constructor(private items: T[] = []) {}

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

// Task 3

interface IDictionary<V> {
  [key: string]: V;
}

class Dictionary<K extends string, V> {
  private items: any = {};
  set(key: K, value: V) {
    this.items[key] = value;
  }
  get(key: K): IDictionary<V> | undefined {
    return this.items[key];
  }
  has(key: K) {
    return this.items.hasOwnProperty(key) ? true : false;
  }
}
