function runProgram(input) {
  input = input.trim().split("\n");
  const len = +input[0].trim();
  const arr = input[1].trim().split(" ").map(Number);
  console.log(equilibriumSum(arr));
}

function equilibriumSum(arr) {
  let sum = 0;
  let leftSum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  for (let i = 0; i < arr.length; i++) {
    sum -= arr[i];
    if (leftSum == sum) {
      return i + 1;
    }
    leftSum += arr[i];
  }
  return -1;
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
