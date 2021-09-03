function runProgram(input) {
  input = input.trim().split("\n");
  const len = input[0].trim();
  const arr = input[1].trim().split(" ").map(Number);
  console.log(uniqueArr(arr, len));
}
function uniqueArr(arr, len) {
  let result = "";
  for (let i = 0; i < len; i++) {
    if (arr[i] != arr[i + 1]) {
      result += arr[i] + " ";
    }
  }
  return result.trim();
}
if (process.env.LOGNAME === "ellu") {
  runProgram(`5
  2 2 2 7 9
  `);
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
