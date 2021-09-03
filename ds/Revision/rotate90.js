function runProgram(input) {
  input = input.trim().split("\n");
  let row = +input[0].trim();
  const matrix = [];
  for (let i = 1; i < input.length; i++) {
    let arr = input[i].trim().split(" ");
    matrix.push(arr);
  }
  print90(matrix);
}

function print90(matrix) {
  for (let i = matrix.length - 1; i >= 0; i--) {
    const arr = [];
    for (let j = 0; j < matrix.length; j++) {
      arr.push(matrix[j][i]);
    }
    console.log(arr.join(" "));
  }
}

if (process.env.LOGNAME === "ellu") {
  runProgram(`4
    1 2 3 4
    5 6 7 8
    1 2 3 4
    5 6 7 8`);
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
