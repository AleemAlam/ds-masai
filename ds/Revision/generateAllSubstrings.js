function runProgram(input) {
  input = input.trim().split("\n");
  const testCase = +input[0].trim();
  let row = 1;
  for (let i = 0; i < testCase; i++) {
    let len = +input[row++].trim();
    let str = input[row++].trim();
    generateStr(str, 0, 0);
  }
}
function generateStr(str, start, end) {
  if (start > str.length) {
    return;
  } else if (end == str.length) {
    generateStr(str, start + 1, start + 1);
  } else {
    console.log(str.substring(start, end + 1));
    generateStr(str, start, end + 1);
  }
}
if (process.env.LOGNAME === "ellu") {
  runProgram(`1
    4 
    aman`);
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
