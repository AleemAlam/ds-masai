function runProgram(input) {
  input = input.trim().split("\n");
  let testCase = +input[0].trim();
  let row = 1;
  for (let i = 0; i < testCase; i++) {
    let len = input[row++].trim().split(" ").map(Number);
    let arr = input[row++].trim().split(" ").map(Number);
    console.log(sortThree(arr, len));
  }
}
function sortThree(arr, len) {
  let one = [],
    two = [],
    zero = [];
  for (let i = 0; i < len; i++) {
    if (arr[i] == 0) {
      zero.push(arr[i]);
    } else if (arr[i] == 1) {
      one.push(arr[i]);
    } else {
      two.push(arr[i]);
    }
  }
  return [...zero, ...one, ...two].join(" ");
}
if (process.env.LOGNAME === "ellu") {
  runProgram(`3
    1
    2
    3
    2 0 1
    4
    2 0 2 1`);
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
    process.ekit(0);
  });
}
