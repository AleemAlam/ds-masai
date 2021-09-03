function runProgram(input) {
  input = input.trim().split("\n");
  let test = +input[0];
  for (let z = 0, line = 1; z < test; z++) {
    let len = +input[line++].trim();
    let arr = input[line++].trim().split(" ").map(Number);
    let flag = false;
    for (let i = 0; i < len; i++) {
      let sum = 0;
      for (let j = i; j < len; j++) {
        sum += arr[j];
        if (sum % 2 == 0) {
          flag = true;
          break;
        }
      }
      if (flag) {
        break;
      }
    }
    console.log(flag ? "Yes" : "No");
  }
}
if (process.env.LOGNAME === "ellu") {
  runProgram(`2
  1
  5
  4
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
    process.exit(0);
  });
}
