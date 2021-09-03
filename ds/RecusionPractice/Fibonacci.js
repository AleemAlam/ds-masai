function runProgram(input) {
  n = input.trim();
  if (n == 1 || n == 2) {
    console.log(1);
    return;
  }
  console.log(getFibonacci(n));
}

function getFibonacci(n) {
  if (n == 0) {
    return 0;
  } else if (n == 1) {
    return 1;
  }
  return getFibonacci(n - 1) + getFibonacci(n - 2);
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
