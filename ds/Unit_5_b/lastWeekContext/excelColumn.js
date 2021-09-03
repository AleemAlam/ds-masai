function runProgram(input) {
  input = input.trim().split("\n");
  for (let i = 1; i <= Number(input[0]); i++) {
    console.log(checkColumn(input[i].trim(), 0));
  }
}

function checkColumn(str, res) {
  console.log(str);
  if (str.length == 1) {
    return res + str.charCodeAt() - ("A".charCodeAt() - 1);
  }
  res += 26;
  res += str.charCodeAt() - ("A".charCodeAt() - 1);
  return checkColumn(str.substring(1), res);
}

if (process.env.LOGNAME === "ellu") {
  runProgram(`3
  A
  AB
  ZY`);
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
