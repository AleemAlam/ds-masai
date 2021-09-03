function runProgram(input) {
  input = input.trim().split("\n");
  const testCase = +input[0].trim();
  let row = 1;
  for (let i = 0; i < testCase; i++) {
    const len = +input[row++].trim();
    const arr = input[row++].trim().split(" ").map(Number);
    console.log(repeatedMissing(arr, len));
  }
}
function repeatedMissing(arr, len) {
  let repeated = 0;
  let missing = 0;

  for (let i = 0; i < len; i++) {
    if (arr[i] == arr[i + 1]) {
      repeated = arr[i];
    }
    if (arr[i + 1] - arr[i] != 1) {
      missing = i + 1;
    }
  }
  return `${missing} ${repeated}`;
}
if (process.env.LOGNAME === "ellu") {
  runProgram(`3
    5
    1 2 3 3 4
    2
    1 1
    3
    1 2 2`);
} else {
  process.stdin.resume();
  process.stdin.setEncoding("ascii");
  let read = "";
  process.stdin.on("data", function (str) {
    read += str;
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
