function runProgram(input) {
  input = input.trim().split("\n");
  let testCase = +input[0].trim();
  let row = 1;
  for (let i = 0; i < testCase; i++) {
    let len = +input[row++];
    let a1 = input[row++].trim().split(" ").map(Number);
    console.log(prodSub(a1, len));
  }
}
function prodSub(arr, n) {
  let minVal = arr[0];
  let maxVal = arr[0];
  let prod = arr[0];
  for (let i = 1; i < n; i++) {
    if (arr[i] < 0) {
      let temp = maxVal;
      maxVal = minVal;
      minVal = temp;
    }
    maxVal = Math.max(arr[i], maxVal * arr[i]);
    minVal = Math.min(arr[i], minVal * arr[i]);
    prod = Math.max(prod, maxVal);
  }
  return prod;
}
if (process.env.LOGNAME === "ellu") {
  runProgram(`2
    3
    -3 0 -2
    4
    4 5 -1 2`);
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
