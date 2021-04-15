function runProgram(input) {
  input = input.trim().split("\n");
  let testCase = input[0].trim().split(" ");
  let row = 1;
  for (let i = 1; i <= testCase; i++) {
    let size = Number(input[row++].trim());
    let matrix = [];
    for (let j = 0; j < size; j++) {
      matrix.push(input[row++].trim().split(""));
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
  // console.log(matrix);
  let horiAns = true;
  let left = 0;
  let right = size - 1;
  while (left < right) {
    for (let i = 0; i < size; i++) {
      if (matrix[left][i] != matrix[right][i]) {
        horiAns = false;
        break;
      }
      left++;
      right--;
    }
    if (horiAns == false) break;
  }
  let vertiAns = true;
  left = 0;
  right = size - 1;
  while (left < right) {
    for (let i = 0; i < size; i++) {
      if (matrix[i][left] != matrix[i][right]) {
        vertiAns = false;
        break;
      }
      left++;
      right--;
    }
    if (vertiAns == false) break;
  }
  return [horiAns, vertiAns];
}
if (process.env.LOGNAME === "ellualeem") {
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
