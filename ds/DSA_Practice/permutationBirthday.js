function runProgram(input) {
  let [len, col] = input.trim().split(" ").map(Number);
  for (let i = 1; i <= len; i++) {
    for (let j = i + 1; j <= len; j++) {
      console.log(i, j);
    }
  }
}
if (process.env.LOGNAME === "ellu") {
  runProgram(`4 2`);
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
