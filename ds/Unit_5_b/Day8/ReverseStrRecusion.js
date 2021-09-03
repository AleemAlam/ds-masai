function runProgram(input) {
  input = input.trim();
  console.log(reverseStr(input));
}

function reverseStr(str) {
  if (str.length == 0) {
    return "";
  }
  return str[str.length - 1] + reverseStr(str.substring(0, str.length - 1));
}

if (process.env.LOGNAME === "ellu") {
  runProgram(`Masai School`);
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
