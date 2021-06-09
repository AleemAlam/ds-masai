function runProgram(input) {
  input = input.trim().split("\n");
  const target = Number(input[0].trim());
  let row = 1;
  for (let i = 0; i < target; i++) {
    const len = Number(input[row++].trim());
    const str = input[row++].trim();
    console.log(checkFaulty(str, len));
  }
}

const checkFaulty = (str, len) => {
  let x = 0,
    y = 0;
  for (let i = 0; i < len; i++) {
    if (str[i] == "L") {
      x--;
    } else if (str[i] == "R") {
      x++;
    } else if (str[i] == "U") {
      y++;
    } else if (str[i] == "D") {
      y--;
    }
  }
  if (x == 0 && y == 0) {
    return "Yes";
  }
  return "No";
};
if (process.env.LOGNAME === "ellualeem") {
  runProgram(`2
    5
    RLRUD
    4
    LRUD`);
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
