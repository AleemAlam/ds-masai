function runProgram(input) {
  input = input.trim().split("\n");

  let len = +input[0].trim();
  let arr = input[1].trim().split(" ").map(Number);
  let line = 3;
  let query = +input[2].trim();

  for (let i = 0; i < query; i++) {
    let [start, end] = input[line++].trim().split(" ").map(Number);
    let sum = 0;
    while (start <= end) {
      sum += arr[start - 1];
      start++;
    }
    console.log(sum);
  }
}
if (process.env.LOGNAME === "ellu") {
  runProgram(`4
    3 2 1 5
    4
    1 3
    2 4
    1 4
    3 3`);
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
