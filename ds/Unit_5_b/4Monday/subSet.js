function runProgram(input) {
  input = input.trim().split("\n");
  const len = +input[0].trim();
  const arr = input[1].trim().split(" ").map(Number);
  const k = +input[2].trim();
  console.log(isSubset(arr, len, k) ? "True" : "False");
}

function isSubset(arr, len, k) {
  let sum = 0;
  for (let i = 0; i < k; i++) {
    sum += arr[i];
  }
  if (sum % 2 != 0) {
    return true;
  }
  for (let i = k; i < len; i++) {
    sum -= arr[k - i];
    sum += arr[i];
  }
  if (sum % 2 != 0) {
    return true;
  }
  return false;
}

if (process.env.LOGNAME === "ellu") {
  runProgram(`3
  2 2 2
  2`);
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
