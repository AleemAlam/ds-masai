function runProgram(input) {
  input = input.trim().split("\n");
  const testCase = Number(input[0].trim().split(" "));
  let row = 1;
  for (let j = 1; j <= testCase; j++) {
    let [len, sum] = input[row++].trim().split(" ").map(Number);
    let arr = input[row++].trim().split(" ").map(Number);
    console.log(subarraySum(arr, sum));
  }
}

// time complexity O(n)
// space complexity O(n)
var subarraySum = function (arr, k) {
  var i = 0;
  var obj = {};
  var sum = 0;
  while (i < arr.length) {
    sum += arr[i];
    if (sum == k) {
      return "Yes";
    }

    if (obj[sum - k]) {
      return "Yes";
    }
    obj[sum] = obj[sum] ? obj[sum] + 1 : 1;
    i++;
    // console.log(obj);
  }
  return "No";
};
if (process.env.LOGNAME === "ellualeem") {
  runProgram(`3
        5 3
        1 2 1 3 4
        4 5
        1 2 1 3
        3 2
        1 2 1`);
} else {
  process.stdin.resume();
  process.stdin.setEncoding("ascii");
  let read = "";
  process.stdin.on("data", function (input) {
    read += input;
  });
  process.stdin.on("end", function () {
    read = read.replace(/\n$/, "");
    read = read.replace(/\n$/, "");
    runProgram(read);
  });
  process.on("SIGINT", function () {
    read = read.replace(/\n$/, "");
    runProgram(read);
    process.exit(0);
  });
}
