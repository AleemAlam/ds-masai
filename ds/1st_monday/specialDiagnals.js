function runProgram(input) {
  input = input.trim().split("\n");
  let [row, column] = input[0].trim().split(" ");
  let [target] = input[input.length - 1].trim().split(" ");
  input.shift();
  let matrix = [];
  for (let i = 0; i < input.length - 1; i++) {
    matrix.push(input[i].trim().split(" "));
  }
  let targetRow;
  let targetCol;
  for (let i = 0; i < row; i++) {
    for (let j = 0; j < column; j++) {
      if (matrix[i][j] == target) {
        targetRow = i;
        targetCol = j;
        break;
      }
    }
    if (targetCol != undefined) {
      break;
    }
  }
  let rightDia = [];
  let leftDia = [];
  for (let i = 0; i < row; i++) {
    for (let j = 0; j < column; j++) {
      if (i + j == targetRow + targetCol) {
        leftDia.push(matrix[i][j]);
      }
      if (i - j == targetRow - targetCol) {
        rightDia.push(matrix[i][j]);
      }
    }
  }
  console.log(rightDia.join(" "));
  console.log(leftDia.join(" "));
}
if (process.env.LOGNAME === "aleem") {
  runProgram(`3 3
  1 2 3
  4 5 6
  7 8 9
  6`);
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
