function runProgram(input) {
  input = input.trim().split("\n");
  let testCase = +input[0].trim();
  let row = 1;
  for (let i = 0; i < testCase; i++) {
    let len = +input[row++];
    let arr = input[row++].trim().split(" ").map(Number);
    console.log(prodSub(arr, len));
  }
}
function prodSub(arr, len) {
  let obj = {};
  for (let i = 0; i < len; i++) {
    obj[arr[i]] = obj[arr[i]] ? obj[arr[i]] + 1 : 1;
  }
  for (let key in obj) {
    if (obj[key] > Math.floor(len / 2)) {
      return key;
    }
  }
  return -1;
}
if (process.env.LOGNAME === "ellu") {
  runProgram(`2
    6
    1 1 1 1 2 3
    5
    1 1 2 2 3`);
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
