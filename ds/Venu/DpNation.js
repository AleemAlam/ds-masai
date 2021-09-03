function runProgram(input) {
  input = input.trim().split("\n");
  let testCase = +input[0].trim();
  let row = 1;
  for (let i = 0; i < testCase; i++) {
    let len = +input[row++].trim();
    let arr = input[row++].trim().split(" ").map(Number);
    getSubArray(arr, 0, 0);
  }
}
function getSubArray(arr) {
  let max = -Infinity;
  let maxEnding = 0;
  for (let i = 0; i < arr.length; i++) {
    maxEnding += arr[i];
    if (max < maxEnding) {
      max = maxEnding;
    }
    if (maxEnding < 0) {
      maxEnding = 0;
    }
  }
  console.log(max);
}
if (process.env.LOGNAME === "ellu") {
  runProgram(`10
  8
  -3 5 -3 2 -2 5 1 2
  9
  1 -2 -2 2 2 2 0 1 2
  5
  -6 -3 -3 -3 7
  9
  -4 -5 7 -6 7 -5 -7 2 -7
  2
  7 -2
  8
  1 -1 -1 1 -1 -1 0 -1
  5
  -1 -1 -1 -1 -1
  10
  -3 -6 -3 -2 -3 -8 0 -8 -1 9
  3
  2 1 1
  10
  1 0 -6 4 -2 0 0 -6 0 -2`);
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
    process.ekit(0);
  });
}
