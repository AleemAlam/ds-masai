function runProgram(input) {
  input = +input.trim();
  let steps = Math.floor(input / 5);
  if (input % 5 != 0) {
    steps++;
  }
  console.log(steps);
}

if (process.env.LOGNAME === "ellu") {
  runProgram(`26`);
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
