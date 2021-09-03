function runProgram(input) {
  input = input.trim().split("\n");
  let testCase = Number(input[0]);
  let line = 1;
  for (let i = 0; i < testCase; i++) {
    let [val] = input[line++].trim().split(" ").map(Number);
    let arr = input[line++].trim().split(" ").map(Number);
    console.log(sum(arr, val));
  }
  function sum(arr, val) {
    if (val == 0) {
      return 0;
    }
    return sum(arr, val - 1) + arr[val - 1];
  }
}
if (process.env.LOGNAME === "ellu") {
  runProgram(`3
  5
  6 3 8 2 -4
  5
  -10 -7 10 2 -2
  5
  -4 -5 6 -3 9`);
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
