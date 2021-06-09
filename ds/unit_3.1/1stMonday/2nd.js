function runProgram(input) {
  input = input.trim().split("\n");
  let testCases = Number(input[0]);
  let lines = 1;
  for (let i = 0; i < testCases; i++) {
    let [row, col] = input[lines++].trim().split(" ");
​
    let matrix = [];
    for (let j = 0; j < Number(row); j++) {
      matrix.push(input[lines++].trim().split(" ").map(Number));
    }
    let i;
    (k = 0), (l = 0);
    let lastRow = row - 1;
    let lastCol = col - 1;
​
    let newStr = [];
    while (k <= lastRow && l <= lastCol) {
      for (let i = k; i <= lastRow; i++) {
        newStr.push(matrix[i][l]);
      }
​
      l++;
      for (let i = l; i <= lastCol; i++) {
        newStr.push(matrix[lastRow][i]);
      }
      lastRow--;
      if (l <= lastCol) {
        for (let i = lastRow; i >= k; i--) {
          newStr.push(matrix[i][lastCol]);
        }
        lastCol--;
      }
      if (k <= lastRow) {
        for (let i = lastCol; i >= l; i--) {
          newStr.push(matrix[k][i]);
        }
        k++;
      }
    }
    console.log(newStr.join(" "));
  }
}
​
if (process.env.LOGNAME === "ellualeem") {
  runProgram(`2
    3 4
    1 2 3 4
    5 6 7 8
    9 10 11 12
    4 3
    1 2 3
    4 5 6
    7 8 9
    10 11 12`);
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