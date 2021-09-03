function runProgram(input) {
  input = input.trim().split("\n");
  const len = +input[0].trim();
  const arr = input[1].trim().split(" ").map(Number);
  console.log(equilibriumSum(arr));
}

function equilibriumSum(arr) {
  let mid = Math.floor(arr.length / 2);

  return sum(arr, 0, mid) == sum(arr, mid + 1, arr.length) ? mid + 1 : -1;
}

function sum(arr, start, end) {
  let sum = 0;
  for (let i = start; i < end; i++) {
    sum += arr[i];
  }
  return sum;
}
if (process.env.LOGNAME === "ellu") {
  runProgram(`5
    3 3 5 5 1`);
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
