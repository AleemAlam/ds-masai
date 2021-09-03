function runProgram(input) {
  input = input.trim().split("\n");
  const [len, sum] = input[0].trim().split(" ").map(Number);
  const arr = input[1].trim().split(" ").map(Number);

  console.log(checkSum(arr, len, sum));
}

function checkSum(arr, len, sum) {
  if (sum == 0) {
    return 1;
  }
  if (len == 0) {
    return 0;
  }
  if (arr[len - 1] > sum) {
    return checkSum(arr, len - 1, sum);
  }
  return (
    checkSum(arr, len - 1, sum) + checkSum(arr, len - 1, sum - arr[len - 1])
  );
}

if (process.env.LOGNAME === "ellu") {
  runProgram(`4 10
  1 2 3 4`);
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
