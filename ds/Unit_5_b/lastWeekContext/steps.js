function runProgram(input) {
  input = +input.trim();
  console.log(steps(input));
}

function steps(totalSteps) {
  if (totalSteps < 0) {
    return 0;
  } else if (totalSteps == 0) {
    return 1;
  }

  return steps(totalSteps - 1) + steps(totalSteps - 2) + steps(totalSteps - 3);
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
