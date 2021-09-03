class Stack {
  constructor() {
    this.stack = [];
  }
  push(val) {
    this.stack.push(val);
  }
  pop() {
    this.stack.pop();
  }
  isEmpty() {
    return this.stack.length == 0;
  }
  peek() {
    return this.stack[this.stack.length - 1];
  }
}

class Queue {
  constructor() {
    this.S1 = new Stack();
    this.S2 = new Stack();
  }
  push(value) {
    this.S1.push(value);
  }
  pop() {
    if (this.S2.isEmpty()) {
      if (this.S1.isEmpty()) {
        console.log("Underflow");
        return;
      }
      while (!this.S1.isEmpty()) {
        const num = this.S1.peek();
        this.S1.pop();
        this.S2.push(num);
      }
    }
    return this.S2.pop();
  }
  front() {
    if (this.S2.isEmpty()) {
      if (this.S1.isEmpty()) {
        console.log("Underflow");
        return;
      }
      while (!this.S1.isEmpty()) {
        const num = this.S1.peek();
        this.S1.pop();
        this.S2.push(num);
      }
    }
    return console.log(this.S2.peek());
  }
  isEmpty() {
    //write your code here..
  }
}

const que = new Queue();
que.print();
// console.log(que.pop());
