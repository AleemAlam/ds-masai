function runProgram(input) {
  input = input.trim().split("\n");
  let testCase = +input[0].trim();
  let row = 1;
  for (let i = 0; i < testCase; i++) {
    let [len, k] = input[row++].trim().split(" ").map(Number);
    let arr = input[row++].trim().split(" ").map(Number);
    console.log(rotateArray(arr, len, k));
  }
}
function rotateArray(arr, len, k) {
  for (let i = 0; i < k; i++) {
    arr.unshift(arr.pop());
  }
  return arr.join(" ");
}
if (process.env.LOGNAME === "ellu") {
  runProgram(`3
    3 1
    1 2 3
    2 2
    1 2
    2 3
    1 2`);
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
