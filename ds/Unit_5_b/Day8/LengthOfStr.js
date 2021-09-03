function runProgram(input) {
  input = input.trim();
  let len = 0;
  console.log(lenOfStr(input, len));
}

function lenOfStr(str, len) {
  if (str == "") {
    return len;
  }
  len++;
  return lenOfStr(str.substring(0, str.length - 1), len);
}

if (process.env.LOGNAME === "ellu") {
  runProgram(`masaischool`);
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
