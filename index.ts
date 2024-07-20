// Task 1

function filterArray<T>(array: T[], condition: (element: T) => boolean) {
  return array.filter(condition);
}

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
