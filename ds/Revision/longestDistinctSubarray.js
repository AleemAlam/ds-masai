function runProgram(input) {
  input = input.trim().split("\n");
  const testCase = +input[0].trim();
  let row = 1;
  for (let i = 0; i < testCase; i++) {
    const len = +input[row++].trim();
    const arr = input[row++].trim().split(" ").map(Number);
    longestDistinctSubArray(arr);
  }
}
const longestDistinctSubArray = (arr) => {
  if (arr.length == 1) {
    return 1;
  }
  let a = 0;
  let b = 1;
  const obj = {};
  let ans = 0;
  obj[arr[0]] = 1;
  while (b < arr.length) {
    if (obj[arr[b]] == undefined || obj[arr[b]] == 0) {
      obj[arr[b]] = 1;
      b++;
      ans = Math.max(ans, b - a);
    } else {
      obj[arr[a]] = obj[arr[a]] - 1;
      a++;
    }
  }
  console.log(ans);
};

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
