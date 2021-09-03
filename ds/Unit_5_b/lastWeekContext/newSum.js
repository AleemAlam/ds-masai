function runProgram(input) {
  input = input.trim().split("\n");
  const testCase = +input[0];
  let row = 1;
  for (let i = 0; i < testCase; i++) {
    const len = +input[row++].trim();
    const arr = input[row++].trim().split(" ").map(Number);
    console.log(arrSum(arr, len));
  }
}

function arrSum(arr, len) {
  if (len == 1) {
    return 0;
  }

  return Math.abs(arr[len - 1] - arr[len - 2]) + arrSum(arr, len - 1);
}

if (process.env.LOGNAME === "ellu") {
  runProgram(`2
    3
    1 5 2
    5
    3 5 6 1 8`);
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
