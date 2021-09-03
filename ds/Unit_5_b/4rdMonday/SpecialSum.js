function runProgram(input) {
  const [numStr, n] = input.trim().split(" ");
  let str = "";
  for (let i = 0; i < Number(n); i++) {
    str += numStr;
  }
  let num = famousSum(Number(str));
  while (num > 9) {
    num = famousSum(num);
  }
  console.log(num);
}

function famousSum(num) {
  if (num >= 0 && num <= 9) {
    return num;
  }
  let digit = num % 10;
  return digit + famousSum(Math.floor(num / 10));
}

if (process.env.LOGNAME === "ellu") {
  runProgram(`123 3`);
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
