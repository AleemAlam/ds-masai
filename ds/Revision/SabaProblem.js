function runProgram(input) {
  input = input.trim().split(/[\r\n]+/);
  let [row, col] = input[0].trim().split(" ").map(Number);
  const matrix = [];
  for (let i = 1; i < input.length; i++) {
    let letter = input[i].trim().split("");
    matrix.push(letter);
  }
  let count = 0;
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (j < col - 3) {
        if (
          matrix[i][j] === "s" &&
          matrix[i][j + 1] === "a" &&
          matrix[i][j + 2] === "b" &&
          matrix[i][j + 3] === "a"
        ) {
          count++;
        }
      }
      if (i < row - 3) {
        if (
          matrix[i][j] === "s" &&
          matrix[i + 1][j] === "a" &&
          matrix[i + 2][j] === "b" &&
          matrix[i + 3][j] === "a"
        ) {
          count++;
        }
      }
      if (i < row - 3 && j < col - 3) {
        if (
          matrix[i][j] === "s" &&
          matrix[i + 1][j + 1] === "a" &&
          matrix[i + 2][j + 2] === "b" &&
          matrix[i + 3][j + 3] === "a"
        ) {
          count++;
        }
      }
      if (i > 2 && j < col - 3) {
        if (
          matrix[i][j] === "s" &&
          matrix[i - 1][j + 1] === "a" &&
          matrix[i - 2][j + 2] === "b" &&
          matrix[i - 3][j + 3] === "a"
        ) {
          count++;
        }
      }
    }
  }
  console.log(count);
}
if (process.env.LOGNAME === "ellu") {
  runProgram(`5 5
  safer
  amjad
  babol
  aaron
  songs`);
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
