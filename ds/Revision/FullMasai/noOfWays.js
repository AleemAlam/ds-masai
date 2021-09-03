function runProgram(input) {
  num = +input;
  console.log(NumberOfWays(num));
}
function NumberOfWays(num) {
  if (num < 0) return 0;
  if (num == 0) return 1;
  return NumberOfWays(num - 1) + NumberOfWays(num - 2) + NumberOfWays(num - 3);
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
