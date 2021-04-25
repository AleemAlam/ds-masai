class MyArr {
  constructor() {
    this.length = 0;
    this.data = {};
  }
  get(index) {
    return this.data[index];
  }

  push(item) {
    this.data[this.length] = item;
    this.length++;
  }
  pop() {
    delete this.data[this.length - 1];
    this.length--;
  }
  insert(item, index) {
    let temp = this.data[index];
    this.data[index] = item;
    for (let i = this.length - 1; i > index; i--) {
      this.data[i + 1] = this.data[i];
    }
    this.data[index + 1] = temp;
    this.length++;
  }
  delete(index) {
    for (let i = index; i < this.length - 1; i++) {
      this.data[i] = this.data[i + 1];
    }
    delete this.data[this.length - 1];
    this.length--;
  }
}

let newArr = new MyArr();
newArr.push("Aleem");
newArr.push("Shavez");
newArr.push("Shavez1");
newArr.push("Shavez2");
newArr.push("Shavez3");
newArr.push("Shavez4");

console.log(newArr);

newArr.insert("newOne", 2);
console.log(newArr);
newArr.delete(4);
console.log(newArr);
