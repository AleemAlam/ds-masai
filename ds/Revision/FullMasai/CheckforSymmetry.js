function runProgram(input) {
  input = input.trim().split("\n");
  let testCase = +input[0];
  for (let z = 0, line = 1; z < testCase; z++) {
    let row = input[line++].trim().split(" ").map(Number);
    let arr = [];
    for (let i = 1; i <= row; i++) {
      arr.push(input[line++].trim());
    }
    const result = checkForSymmetry(arr);
    console.log(
      result.vertical && result.horizontal
        ? "BOTH"
        : result.horizontal
        ? "HORIZONTAL"
        : result.vertical
        ? "VERTICAL"
        : "NO"
    );
  }
}

function checkForSymmetry(arr) {
  let i = 0;
  let j = arr.length - 1;
  let horizontal = true;
  let vertical = true;
  while (i < j) {
    if (arr[i] != arr[j]) {
      horizontal = false;
    }
    i++;
    j--;
  }
  const newArr = [];
  let temp = arr[i].length - 1;
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[0].length; j++) {
      if (arr[j][i] !== arr[j][temp]) {
        vertical = false;
        break;
      }
    }
    if (!vertical) {
      break;
    }
    temp--;
  }
  return { vertical, horizontal };
}
if (process.env.LOGNAME === "ellu") {
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
