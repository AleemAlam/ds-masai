/*
Queue {
  push()
  front()
  pop()
  isisEmpty()
}
*/
class Stack {
  constructor() {
    this.q1 = new Queue();
    this.q2 = new Queue();
  }
  push(value) {
    this.q1.push(value);
    while (!this.q2.isEmpty()) {
      this.q1.push(this.q2.front());
      this.q2.pop();
    }
    while (!this.q1.isEmpty()) {
      this.q2.push(this.q1.front());
      this.q1.pop();
    }
  }
  pop() {
    const data = this.q2.front();
    this.q2.pop();
    return data;
  }
  top() {
    const data = this.q2.front();
    return data;
  }
  isisEmpty() {
    //write your code here..
  }
}
