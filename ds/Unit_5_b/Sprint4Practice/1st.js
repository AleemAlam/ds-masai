function runProgram(input) {
  input = input.trim().split("\n");
  const len = +input[0].trim();
  const arr = input[1].trim().split(" ").map(Number);
  const sum = +input[2].trim();
  console.log(isSubsetSum(arr, len, sum));
}

function isSubsetSum(set, n, sum) {
  if (sum == 0) {
    return true;
  } else if (n == 0) {
    return false;
  } else if (set[n - 1] > sum) {
    return isSubsetSum(set, n - 1, sum);
  }
  return (
    isSubsetSum(set, n - 1, sum) || isSubsetSum(set, n - 1, sum - set[n - 1])
  );
}

if (process.env.LOGNAME === "ellu") {
  runProgram(`9
  1 2 3 4 5 6 7 8 9
  5`);
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
