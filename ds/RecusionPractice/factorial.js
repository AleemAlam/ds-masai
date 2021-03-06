function runProgram(input) {
  n = +input.trim();
  console.log(getFactorial(n));
}

function getFactorial(n) {
  if (n == 1) {
    return 1;
  }
  return n * getFactorial(n - 1);
}
if (process.env.LOGNAME === "ellu") {
  runProgram(`5`);
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
