function runProgram(input) {
  input = input.trim().split("\n");
  let testCase = +input[0].trim();
  let row = 1;
  for (let i = 0; i < testCase; i++) {
    let num = +input[row++].trim();
    console.log(squareRoot(num));
  }
}
function squareRoot(num) {
  let low = 1;
  let high = num;
  let ans = 0;
  while (low <= high) {
    let mid = Number(((low + high) / 2).toString().split(".")[0]);
    // console.log(low, high, mid);
    if (mid * mid == num) {
      return mid;
    } else if (mid * mid > num) {
      high = mid - 1;
    } else {
      low = mid + 1;
      ans = mid;
    }
  }
  return ans;
}
if (process.env.LOGNAME === "ellu") {
  runProgram(`2
    4
    8`);
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
