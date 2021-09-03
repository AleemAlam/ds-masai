function runProgram(input) {
  input = input.trim().split("\n");
  const testCase = +input[0].trim();
  let row = 1;
  for (let i = 0; i < testCase; i++) {
    const [a, b] = input[row++].trim().split(" ").map(Number);
    aToBPossible(a, b) ? console.log("Possible") : console.log("Not Possible");
  }
}

const aToBPossible = (a, b) => {
  if (a == b) {
    return true;
  }
  if (a > b) {
    return false;
  }
  return aToBPossible(a * 2, b) || aToBPossible(Number(a.toString() + "1"), b);
};

if (process.env.LOGNAME === "ellu") {
  runProgram(`4
    6 242
    3 3
    6 3
    10 30`);
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
