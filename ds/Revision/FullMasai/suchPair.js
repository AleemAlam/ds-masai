function runProgram(input) {
  input = input.trim().split("\n");
  const testCase = +input[0].trim();
  let row = 1;
  for (let i = 0; i < testCase; i++) {
    let [len, k] = input[row++].trim();
    let arr = input[row++].trim().split(" ").map(Number);
    console.log(suchPair(arr, len, k) ? 1 : -1);
  }
}
function suchPair(arr, len, k) {
  const obj = {};
  for (let i = 0; i < len; i++) {
    obj[arr[i]] = i;
  }
  for (let i = 0; i < len; i++) {
    let pair = k - arr[i];
    if (obj[pair] != undefined && pair != i) {
      return true;
    }
  }
  return false;
}
if (process.env.LOGNAME === "ellu") {
  runProgram(`10
  6 16
  2 0 2 5 -3 0
  9 3
  6 -6 -7 8 -4 8 -6 1 4
  1 -1
  1
  3 -3
  -2 3 0
  5 -9
  4 5 0 -3 3
  7 4
  1 2 1 6 -2 7 0
  7 -10
  2 -5 6 -1 5 -1 6
  4 -12
  1 -2 -3 -4
  6 0
  5 -6 5 5 3 0
  2 3
  -2 -2`);
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
