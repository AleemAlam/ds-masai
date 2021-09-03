function runProgram(input) {
  input = input.trim().split("\n");
  const testCase = +input[0].trim();
  let row = 1;
  for (let i = 0; i < testCase; i++) {
    const first = input[row++].trim().split(".").map(Number);
    const second = input[row++].trim().split(".").map(Number);

    checkBuggy(first, second) ? console.log("True") : console.log("False");
  }
}

const checkBuggy = (first, second) => {
  if (first[0] < second[0]) {
    return true;
  } else {
    if (first[0] == second[0]) {
      if (first[1] < second[1]) {
        return true;
      } else {
        if (first[1] == second[1]) {
          if (first[2] < second[2]) {
            return true;
          } else {
            return false;
          }
        } else {
          return false;
        }
      }
    } else {
      return false;
    }
  }
};

if (process.env.LOGNAME === "ellu") {
  runProgram(`3
  2.0.1
  1.9.8
  12.0.1
  12.10.0
  1.1.10
  1.1.12`);
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
