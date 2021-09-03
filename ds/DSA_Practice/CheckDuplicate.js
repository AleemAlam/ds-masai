function runProgram(input) {
  input = input.trim().split("\n");
  const testCase = +input[0].trim();
  let row = 1;
  for (let i = 0; i < testCase; i++) {
    const len = +input[row++].trim();
    const arr = input[row++].trim().split(" ").map(Number);
    console.log(checkDuplicate(arr, len));
  }
}

function checkDuplicate(arr, len) {
  let obj = {};
  for (let i = 0; i < len; i++) {
    if (obj[arr[i]]) {
      return "YES";
    }
    obj[arr[i]] = 1;
  }
  return "NO";
}

if (process.env.LOGNAME === "ellu") {
  runProgram(`3
    1
    1
    2
    1 1
    3
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
