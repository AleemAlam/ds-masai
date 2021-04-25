const firstRepeat = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] == arr[j]) {
        return arr[i];
      }
    }
  }
  return undefined;
};

const firstRepeat2 = (arr) => {
  let obj = {};
  for (let i = 0; i < arr.length; i++) {
    if (!obj[arr[i]]) {
      obj[arr[i]] = 1;
    } else {
      return arr[i];
    }
  }
  return undefined;
};
// console.log(firstRepeat([2, 1, 1, 2, 3, 4, 5, 6, 7, 7, 8, 8])); // O(n^2) space :- O(1)
console.log(firstRepeat2([2, 1, 0, 1, 4, 5, 2, 6, 7, 7, 8, 8])); // // O(n) space :- O(n)
