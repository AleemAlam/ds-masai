class LinkedList {
  constructor(value) {
    this.head = {
      value,
      next: null,
    };
    this.tail = this.head;
    this.length = 1;
  }
  append(value) {
    const newNode = {
      value,
      next: null,
    };
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
  }
  prepend(value) {
    const newNode = {
      value,
      next: this.head,
    };
    this.head = newNode;
    this.length++;
  }
  insert(index, value) {
    if (index > this.length) {
      return this.append(value);
    }
    const newNode = {
      value,
      next: null,
    };
    const leader = this.traverse(index - 1);
    const holding = leader.next;
    newNode.next = holding;
    leader.next = newNode;
  }
  traverse(index) {
    let counter = 0;
    let currentNode = this.head;
    while (counter != index) {
      currentNode = currentNode.next;
      counter++;
    }
    return currentNode;
  }
  print() {
    const array = [];
    let currentNode = this.head;
    while (currentNode !== null) {
      array.push(currentNode.value);
      currentNode = currentNode.next;
    }
    console.log(array);
  }
  remove(index) {
    if (index > this.length) {
      return console.log("Index not found");
    }
    const leader = this.traverse(index - 1);
    const unwantedNode = leader.next;
    leader.next = unwantedNode.next;
  }

  reverse() {
    if (!this.head.next) {
      return this.data;
    }
    this.tail = this.head;
    let first = this.head;
    let second = first.next;
    while (second.next) {
      let temp = second.next;
      second.next = first;
      first = second;
      second = temp;
    }
    this.head.next = null;
    this.head = first;
  }
}
class DoublyLinkedList {
  constructor(value) {
    this.head = {
      value,
      next: null,
      prev: null,
    };
    this.tail = this.head;
    this.length = 1;
  }
  append(value) {
    const newNode = {
      value,
      next: null,
      prev: null,
    };
    this.tail.next = newNode;
    newNode.prev = this.tail;
    this.tail = newNode;
    this.length++;
  }
  prepend(value) {
    const newNode = {
      value,
      next: this.head,
      prev: null,
    };
    this.head.prev = newNode;
    this.head = newNode;
    this.length++;
  }
  insert(index, value) {
    if (index > this.length) {
      return this.append(value);
    }
    const newNode = {
      value,
      next: null,
      prev: null,
    };
    const leader = this.traverse(index - 1);
    const holding = leader.next;
    holding.prev = newNode;
    newNode.next = holding;
    newNode.prev = leader;
    leader.next = newNode;
  }
  traverse(index) {
    let counter = 0;
    let currentNode = this.head;
    while (counter != index) {
      currentNode = currentNode.next;
      counter++;
    }
    return currentNode;
  }
  print() {
    const array = [];
    let currentNode = this.head;
    while (currentNode !== null) {
      array.push(currentNode.value);
      currentNode = currentNode.next;
    }
    console.log(array);
  }
  remove(index) {
    if (index > this.length) {
      return console.log("Index not found");
    }
    const leader = this.traverse(index - 1);
    const unwantedNode = leader.next;
    leader.next = unwantedNode.next;
  }
}

const myLinkedList = new LinkedList(10);
myLinkedList.append(5);
myLinkedList.append(16);
myLinkedList.append(18);
myLinkedList.prepend(1);
myLinkedList.insert(2, 100);
myLinkedList.insert(2, 900);
// myLinkedList.remove(6);
myLinkedList.reverse();
myLinkedList.print();
console.log(myLinkedList);
