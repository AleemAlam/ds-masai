function runProgram(input) {
  const [x, n] = input.trim().split(" ").map(Number);
  let power = 1;
  let factorial = 1;

  function eatoPower(x, n) {
    let res;
    if (n == 0) {
      return 1;
    }
    res = eatoPower(x, n - 1);
    power = power * x;
    factorial = factorial * n;
    return res + power / factorial;
  }
  console.log(eatoPower(x, n).toFixed(4));
}

if (process.env.LOGNAME === "ellu") {
  runProgram(`4 2`);
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
