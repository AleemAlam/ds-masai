function runProgram(input) {
  input = input.trim().split("\n");
  const testCase = +input[0].trim();
  let row = 1;
  for (let i = 0; i < testCase; i++) {
    let len = +input[row++].trim();
    let arr = input[row++].trim().split(" ").map(Number);
    console.log(sequence(arr, len));
  }
}
function sequence(arr, len) {
  let a = 0;
  let b = len - 1;
  const newArr = [];
  while (a < b) {
    newArr.push(arr[a++]);
    newArr.push(arr[b--]);
  }
  if (len % 2 != 0) {
    newArr.push(arr[a]);
  }
  return newArr.join(" ");
}
if (process.env.LOGNAME === "ellu") {
  runProgram(`10
  5
  15 11 8 2 5
  7
  5 2 7 9 6 8 3
  4
  17 13 8 2
  13
  3 15 17 18 13 11 8 5 14 2 16 9 12
  2
  5 4
  14
  9 15 8 14 12 2 6 10 7 16 3 11 13 5
  16
  1 1 4 1 2 2 5 3 5 3 3 4 2 4 1 5
  8
  14 1 17 11 8 18 4 12
  13
  5 6 4 5 1 4 2 7 3 3 2 1 8
  15
  3 4 5 2 7 4 2 1 11 1 6 10 3 9 8
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
