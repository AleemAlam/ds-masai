function runProgram(input) {
  const [n, k] = input.trim().split(" ");
  console.log(superDigit(n, k));
}

function superDigit(n, k) {
  if (n < 10) {
    return n;
  }
  const digit = (
    n.split("").reduce((res, d) => res + Number(d), 0) * k
  ).toString();
  return superDigit(digit, 1);
}

if (process.env.LOGNAME === "ellu") {
  runProgram(`148 3`);
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
