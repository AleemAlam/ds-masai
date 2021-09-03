function runProgram(input) {
  input = input.trim().split("\n");
  let testCases = Number(input[0]);
  let lines = 1;
  for (let i = 0; i < testCases; i++) {
    let [len, sum] = input[lines++].trim().split(" ").map(Number);
    let arr = input[lines++].trim().split(" ").map(Number);
    console.log(smallestSubWithSum(arr, len, sum));
  }
}

function smallestSubWithSum(arr, len, sum) {
  let currentSum = 0;

  let start = 0;
  let end = 0;
  let min = arr.reduce((a, b) => a + b);
  if (min < sum) {
    return -1;
  }
  min = len + 1;
  while (end < len) {
    while (currentSum <= sum && end < len) {
      currentSum += arr[end++];
    }
    while (currentSum > sum && start < len) {
      if (end - start < min) {
        min = end - start;
      }
      currentSum -= arr[start++];
    }
  }

  return min;
}

if (process.env.LOGNAME === "ellu") {
  runProgram(`2
  5 13
  5 1 2 3 4 
  1 10
  1`);
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
