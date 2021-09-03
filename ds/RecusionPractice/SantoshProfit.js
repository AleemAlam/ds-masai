function runProgram(input) {
  input = input.trim().split("\n");
  const testCase = +input[0].trim();
  for (let i = 1; i <= testCase; i++) {
    const val = +input[i].trim();
    console.log(noOfWays(val, 0));
  }
}

function noOfWays(val) {
  if (val == 0) {
    return 1;
  }
  if (val < 0) {
    return 0;
  }
  return noOfWays(val - 4) + noOfWays(val - 8);
}
if (process.env.LOGNAME === "ellu") {
  runProgram(`1
    12`);
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
