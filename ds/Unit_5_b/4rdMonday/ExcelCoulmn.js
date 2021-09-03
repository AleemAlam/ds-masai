function runProgram(input) {
  input = input.trim().split("\n");
  const testCase = +input[0].trim();
  let row = 1;
  for (let i = 0; i < testCase; i++) {
    const cell = input[row++].trim();
    console.log(titleToNumber(cell, 0));
  }
}

function titleToNumber(s, depth) {
  if (s.length == 0) return 0;
  let rightC = s.charCodeAt(s.length - 1);
  let value = rightC - 64; //64 is @, which is 1 before 'A' on Ascii table
  return (
    value * Math.pow(26, depth) +
    titleToNumber(s.substring(0, s.length - 1), depth + 1)
  );
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
