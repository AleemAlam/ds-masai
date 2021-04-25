class MyObj {
  constructor(size) {
    this.data = new Array(size);
  }
  _hash(key) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash = (hash + key.charCodeAt(i) * i) % this.data.length;
    }
    return hash;
  }
  set(key, value) {
    let index = this._hash(key);
    if (!this.data[index]) this.data[index] = [];
    this.data[index].push([key, value]);
  }
  get(key) {
    let index = this._hash(key);
    console.log(index);
    for (let i = 0; i < this.data[index].length; i++) {
      if (this.data[index][i][0] == key) {
        return this.data[index][i][1];
      }
    }
    return undefined;
  }
  getAllKeys() {
    let keys = [];
    for (let i = 0; i < this.data.length; i++) {
      if (this.data[i]) {
        keys.push(this.data[i][0][0]);
      }
    }

    return keys;
  }
}

const myObj = new MyObj(3);
myObj.set("grapes", 1000);
myObj.set("apple", 100);
console.log(myObj.get("apple"));
console.log(myObj.getAllKeys());
