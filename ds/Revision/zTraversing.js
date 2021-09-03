function runProgram(input) {
  input = input.trim().split("\n");
  const testCase = +input[0].trim();
  let row = 1;
  for (let i = 0; i < testCase; i++) {
    let len = +input[row++].trim();
    const matrix = [];
    for (let j = 0; j < len; j++) {
      matrix.push(input[row++].trim().split(" ").map(Number));
    }
    console.log(getZTraversal(matrix));
  }
}
function getZTraversal(matrix) {
  const ans = [];
  for (let i = 0; i < matrix.length; i++) {
    ans.push(matrix[0][i]);
  }

  for (let i = matrix.length - 2, j = 1; i > 0; i--) {
    ans.push(matrix[j++][i]);
  }
  if (matrix.length > 1) {
    for (let i = 0; i < matrix.length; i++) {
      ans.push(matrix[matrix.length - 1][i]);
    }
  }
  return ans.join(" ");
}
if (process.env.LOGNAME === "ellu") {
  runProgram(`1
    3
    1 2 3
    4 5 6
    7 8 9`);
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
