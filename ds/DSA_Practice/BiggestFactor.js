function runProgram(input) {
  input = input.trim().split("\n");
  let n = input[0].trim();
  let line = 1;
  for (let i = 0; i < n; i++) {
    let arr = input[line++].trim();
    let j = Number(arr);
    while (j > 0) {
      if (j % 2 == 1) {
        console.log(j);
        break;
      }
      j = j / 2;
    }
  }
}
if (process.env.LOGNAME === "ellu") {
  runProgram(`2
  10
  4`);
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
