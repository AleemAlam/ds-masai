function runProgram(input) {
  input = input.trim().split("\n");

  const testCase = +input[0].trim();
  let row = 1;
  for (let i = 0; i < testCase; i++) {
    const [num1, num2] = input[row++].trim().split(" ").map(Number);
    console.log(GDC(num1, num2));
  }
}

function GDC(a, b) {
  if (a == 0) {
    return b;
  }
  return GDC(b % a, a);
}

if (process.env.LOGNAME === "ellu") {
  runProgram(`2
  6 9
  2 25`);
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
