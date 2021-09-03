function runProgram(input) {
  input = input.trim().split("\n");
  const testCase = +input[0].trim();
  let row = 1;
  for (let i = 0; i < testCase; i++) {
    const [n, m] = input[row++].trim().split(" ").map(Number);
    const matrix = [];
    for (let i = 0; i < n; i++) {
      matrix.push(input[row++].trim().split(""));
    }
    checkIsa(matrix, n, m);
  }
}

function checkIsa(matrix, n, m) {
  let count = 0;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m - 2; j++) {
      if (
        matrix[i][j] == "i" &&
        matrix[i][j + 1] == "s" &&
        matrix[i][j + 2] == "a"
      ) {
        count++;
      }
    }
  }
  for (let i = 0; i < n - 2; i++) {
    for (let j = 0; j < m; j++) {
      if (
        matrix[i][j] == "i" &&
        matrix[i + 1][j] == "s" &&
        matrix[i + 2][j] == "a"
      ) {
        count++;
      }
    }
  }
  console.log(count);
}

if (process.env.LOGNAME === "ellu") {
  runProgram(`2
    3 3
    isa
    sia
    ais
    5 3
    isa
    sia
    ais
    ssa
    aai`);
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
