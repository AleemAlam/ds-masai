function runProgram(input) {
  input = input.trim().split("\n");
  const testCase = +input[0].trim();
  let line = 1;
  for (let i = 0; i < testCase; i++) {
    const [row, col] = input[line++].trim().split(" ").map(Number);
    const matrix = [];
    for (let j = 0; j < row; j++) {
      matrix.push(input[line++].trim().split(" "));
    }
    console.log(traverseArr(matrix, row, col).join(" "));
  }
}

const traverseArr = (arr, row, col) => {
  let left = 0;
  let right = col - 1;
  let top = 0;
  let bottom = row - 1;
  let count = 0;
  let total = row * col;
  let ans = [];

  while (left <= right && top <= bottom) {
    if (total == count) {
      break;
    }
    for (let i = top; i <= bottom; i++) {
      ans.push(arr[i][left]);
      count++;
    }
    left++;
    if (total == count) {
      break;
    }
    for (let i = left; i <= right; i++) {
      ans.push(arr[bottom][i]);
      count++;
    }
    bottom--;
    if (total == count) {
      break;
    }
    for (let i = bottom; i >= top; i--) {
      ans.push(arr[i][right]);
      count++;
    }
    right--;
    if (total == count) {
      break;
    }
    for (let i = right; i >= left; i--) {
      ans.push(arr[top][i]);
      count++;
    }
    top++;
    if (total == count) {
      break;
    }
  }
  return ans;
};

if (process.env.LOGNAME === "ellu") {
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
