function runProgram(input) {
  input = input.trim().split("\n");
  const matrix = [];
  for (let i = 1; i < input.length; i++) {
    const row = +input[i].trim();
    const arr = input[i].trim().split(" ").map(Number);
    const newArr = [];
    for (let j = arr.length - 1; j >= 0; j--) {
      newArr.push(arr[j]);
    }
    matrix.push(newArr);
  }
  printMatrix(matrix);
}
function printMatrix(matrix) {
  for (let i = 0; i < matrix[0].length; i++) {
    console.log(matrix[i].join(" "));
  }
}
if (process.env.LOGNAME === "ellu") {
  runProgram(`4
    1 2 3 4
    1 2 3 4
    1 2 3 4
    1 2 3 4`);
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
