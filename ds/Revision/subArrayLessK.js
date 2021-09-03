function runProgram(input) {
  input = input.trim().split("\n");
  const testCase = +input[0].trim();
  let row = 1;
  for (let i = 0; i < testCase; i++) {
    const [len, m] = input[row++].trim().split(" ").map(Number);
    const arr = input[row++].trim().split(" ").map(Number);
    lessThanK(arr, len, m);
  }
}

function lessThanK(arr, len, m) {
  let sum = arr[0];
  let start = 0;
  let end = 0;
  let count = 0;
  while (start < len && end < len) {
    if (sum < m) {
      end++;
      if (end >= start) {
        count += end - start;
      }
      if (end < len) {
        sum += arr[end];
      }
    } else {
      sum -= arr[start];
      start++;
    }
  }
  console.log(count);
}

if (process.env.LOGNAME === "ellu") {
  runProgram(`1
  5 5
  1 5 1 3 2`);
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
