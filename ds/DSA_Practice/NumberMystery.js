function runProgram(input) {
  input = input.trim().split("\n");
  const testCase = +input[0].trim();
  let row = 1;
  for (let i = 0; i < testCase; i++) {
    const num = +input[row++].trim();
    console.log(numberMystery(num, 1));
  }
}
function numberMystery(num, i) {
  if ((num * i) % num == 0) {
    str = (num * i).toString();
    let flag = true;
    for (let i = 0; i < str.length; i++) {
      if (str[i] != 0 && str[i] != 1) {
        flag = false;
      }
    }
    if (flag) {
      return str;
    }
  }
  return numberMystery(num, i + 1);
}
if (process.env.LOGNAME === "ellu") {
  runProgram(`1
  17`);
} else {
  process.stdin.resume();
  process.stdin.setEncoding("ascii");
  let read = "";
  process.stdin.on("data", function (str) {
    read += str;
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
