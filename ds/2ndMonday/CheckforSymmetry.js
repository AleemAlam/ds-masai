function runProgram(input) {
  input = input.trim().split("\n");
  let testCase = input[0].trim().split(" ");
  let row = 1;
  for (let i = 1; i <= testCase; i++) {
    let size = Number(input[row++].trim());
    let matrix = [];
    for (let j = 0; j < size; j++) {
      matrix.push(input[row++].trim());
    }
    let [hori, verti] = checkSymmetry(matrix, size);
    if (hori && verti) {
      console.log("BOTH");
    } else if (hori) {
      console.log("HORIZONTAL");
    } else if (verti) {
      console.log("VERTICAL");
    } else {
      console.log("NO");
    }
  }
}
function checkSymmetry(matrix, size) {
  let horiAns = true;
  for (let i = 0; i < Math.floor(size / 2); i++) {
    if (matrix[i] !== matrix[size - 1 - i]) {
      horiAns = false;
    }
  }
  let vertiAns = true;
  for (let i = 0; i < size; i++) {
    for (let j = 0; j < Math.floor(matrix[i].length / 2); j++) {
      if (matrix[i][j] !== matrix[j][matrix[i].length - 1 - i]) {
        vertiAns = false;
      }
    }
  }
  return [horiAns, vertiAns];
}
if (process.env.LOGNAME === "aleem") {
  runProgram(`3
  4
  *.*.
  .*.*
  *.*.
  .*.*
  3
  .*.
  *.*
  .*.
  3
  ..*
  **.
  ..*`);
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
