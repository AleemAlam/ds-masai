function runProgram(input) {
  input = input.trim().split("\n");
  const testCase = +input[0].trim();
  let row = 1;
  for (let i = 0; i < testCase; i++) {
    const num = +input[row++].trim();
    console.log(lookAndSay(num, "1", 1));
  }
}
function lookAndSay(num, oldVal, start) {
  if (start == num) {
    return oldVal;
  }
  let newVal = "";
  let count = 0;
  for (let i = 0; i < oldVal.length; i++) {
    count++;
    if (oldVal[i + 1] != oldVal[i]) {
      newVal += count + oldVal[i];
      count = 0;
    }
  }
  return lookAndSay(num, newVal, start + 1);
}
if (process.env.LOGNAME === "ellu") {
  runProgram(`3
  1
  2
  9`);
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
