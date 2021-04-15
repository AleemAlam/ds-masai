const checkForSum = (input) => {
  input = input.trim().split("\n");
  let [length, sum] = input[0].trim().split(" ").map(Number);
  let arr = input[1]
    .trim()
    .split(" ")
    .map(Number)
    .sort((a, b) => a - b);
  let low = 0;
  let high = length - 1;
  while (low < high) {
    if (arr[low] + arr[high] == sum) {
      return console.log(true);
    } else if (arr[low] + arr[high] > sum) {
      high--;
    } else {
      low++;
    }
  }
  console.log(false);
};

const checkForSum2 = (input) => {
  input = input.trim().split("\n");
  let [length, sum] = input[0].trim().split(" ").map(Number);
  let arr = input[1].trim().split(" ").map(Number);
  // let mySet = new Set();
  let myObj = {};
  for (let i = 0; i < length; i++) {
    if (myObj[arr[i]]) {
      return true;
    }
    // mySet.add(sum - arr[i]);
    myObj[sum - arr[i]] = true;
    // console.log(mySet);
  }
  return false;
};

// O(n)- Time Complexity
// O(n) - Space Complexity

console.log(
  checkForSum2(`4 8
5 1 4 4`)
);
