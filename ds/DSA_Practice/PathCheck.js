function runProgram(input) {
  input = input.trim().split("\n");
  const [start, end] = input[0].trim().split(" ").map(Number);
  console.log(pathTie(start, end));
}

function pathTie(start, end) {
  if (start == end) {
    return end;
  }
  if (start > end) {
    return -1;
  }
  const num = start.toString().split("").map(Number);
  const sum = num.reduce((a, b) => a + b);
  return pathTie(start + sum, end);
}
if (process.env.LOGNAME === "ellu") {
  runProgram(`50312 162701`);
} else {
  process.stdin.resume();
  process.stdin.setEncoding("ascii");
  let read = "";
  process.stdin.on("data", function (str) {
    read += str;
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
