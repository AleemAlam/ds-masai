class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}
class LinkList {
  constructor(value) {
    this.head = {
      value,
      next: null,
    };
    this.tail = this.head;
    this.length = 1;
  }
  append(value) {
    const node = new Node(value);
    this.tail.next = node;
    this.tail = node;
    this.length++;
  }
  prepend(value) {
    const node = new Node(value);
    node.next = this.head;
    this.head = node;
    this.length++;
  }
  insertAfter(beforeVal, value) {
    const node = new Node(value);
    let current = this.head;
    while (current.value != beforeVal) {
      current = current.next;
    }

    const temp = current.next;
    current.next = node;
    node.next = temp;
    if (temp == null) {
      this.tail = node;
    }
    this.length++;
  }
  insertBefore(beforeVal, value) {
    const node = new Node(value);
    let current = this.head;
    let prev = null;
    while (current.value != beforeVal) {
      prev = current;
      current = current.next;
    }
    if (prev == null) {
      prev = node;
      node.next = current;
      this.head = node;
    } else {
      prev.next = node;
      node.next = current;
    }
    this.length++;
  }
  delete(value) {
    let current = this.head;
    let prev = null;
    while (current.value != value) {
      prev = current;
      current = current.next;
    }
    console.log(prev);
    if (prev == null) {
      this.head = current.next;
    } else if (current.next == null) {
      prev.next = current.next;
      this.tail = prev;
    } else {
      prev.next = current.next;
    }
  }
  printList() {
    const arr = [];
    let current = this.head;
    while (current.next != null) {
      arr.push(current.value);
      current = current.next;
    }
    console.log(...arr);
  }
}

const newList = new LinkList(10);
newList.append(15);
newList.append(20);
newList.prepend(111);
newList.insertAfter(20, 122);
newList.insertBefore(111, 188);
newList.delete(188);
newList.printList();
console.log(newList);
console.log(newList.head, newList.tail);
