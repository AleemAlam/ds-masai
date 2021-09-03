function runProgram(input) {
  input = +input.trim();
  console.log(numberOfWays(input)); // 7
}

function numberOfWays(totalSteps) {
  if (totalSteps < 0) {
    return 0;
  } else if (totalSteps == 0) {
    return 1;
  }
  return (
    numberOfWays(totalSteps - 1) +
    numberOfWays(totalSteps - 3) +
    numberOfWays(totalSteps - 2)
  );
}

if (process.env.LOGNAME === "ellu") {
  runProgram(`4`);
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
