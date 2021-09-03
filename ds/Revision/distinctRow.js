function runProgram(input) {
  input = input.trim().split("\n");
  const testCase = +input[0].trim();
  let line = 1;
  for (let i = 0; i < testCase; i++) {
    const [row, col] = input[line++].trim().split(" ").map(Number);
    const matrix = [];
    for (let j = 0; j < row; j++) {
      const arr = input[line++].trim().split(" ").map(Number);
      matrix.push(arr);
    }
    countDistinct(matrix, row, col);
  }
}
let countDistinct = (matrix, row, col) => {
  let newArr = [];
  let count = 0;
  for (let i = 0; i < row; i++) {
    const set = new Set();
    for (let k = 0; k < col; k++) {
      set.add(matrix[i][k]);
    }
    const setVal = set.values();
    const arr = [...setVal];
    newArr = [...newArr, ...arr];
  }
  for (let i = 0; i < newArr.length; i++) {
    let rowCount = 1;
    for (let j = i + 1; j < newArr.length; j++) {
      if (newArr[i] == newArr[j]) {
        rowCount++;
      }
    }
    if (rowCount == row) {
      count++;
    }
  }
  console.log(count);
};

if (process.env.LOGNAME === "ellu") {
  runProgram(`2
    3 3
    1 2 1 
    1 3 1
    1 2 1
    3 3
    1 2 3
    1 1 3
    1 2 3`);
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
