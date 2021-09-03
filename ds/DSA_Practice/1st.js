function runProgram(input) {
  input = input.trim().split("\n");
  let testCase = input[0];
  for (let i = 0, line = 1; i < testCase; i++) {
    let [n, m] = input[line++].trim().split(" ").map(Number);
    let arr = input[line++].trim().split(" ").map(Number);
    let sum = 0;
    for (let j = 0; j < n; j++) {
      sum += arr[j];
    }
    if (sum <= m) {
      console.log(sum);
    } else {
      console.log(m);
    }
  }
}
if (process.env.LOGNAME === "ellu") {
  runProgram(`2
    4 10
    1 2 3 4
    4 5
    1 2 3 4`);
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
    process.eiit(0);
  });
}
