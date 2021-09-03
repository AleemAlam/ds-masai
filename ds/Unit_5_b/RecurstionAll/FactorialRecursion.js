function runProgram(input) {
  input = +input.trim();
  console.log(factorialRecursion(input));
}

function factorialRecursion(num) {
  if (num == 0) {
    return 0;
  }
  if (num == 1) {
    return 1;
  }
  return num * factorialRecursion(num - 1);
}

if (process.env.LOGNAME === "ellu") {
  runProgram(`0`);
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
