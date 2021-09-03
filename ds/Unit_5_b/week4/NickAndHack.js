function runProgram(input) {
  input = input.trim().split("\n").map(Number);
  for (let i = 1; i <= input[0]; i++) {
    nickHacks(input[i], 1) ? console.log("Yes") : console.log("No");
  }
}
function nickHacks(num, k) {
  if (num == k) {
    return true;
  }
  if (k > num) {
    return false;
  }
  return nickHacks(num, k * 10) || nickHacks(num, k * 20);
}

if (process.env.LOGNAME === "ellu") {
  runProgram(`5
  1
  2
  10
  25
  200`);
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
