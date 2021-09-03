function runProgram(input) {
  console.log(factorial(+input));
}

function factorial(num) {
  if (num == 1) {
    return 1;
  }
  return num * factorial(num - 1);
}

if (process.env.LOGNAME === "ellu") {
  runProgram(`10`);
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
