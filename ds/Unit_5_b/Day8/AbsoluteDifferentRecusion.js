function runProgram(input) {
  input = input.trim().split("\n");

  const testCase = +input[0].trim();
  let row = 1;
  for (let i = 0; i < testCase; i++) {
    const len = +input[row++].trim();
    const arr = input[row++].trim().split(" ").map(Number);
    let abDiff = [];
    abDiff = getAbDiff(arr, len, abDiff);
    // console.log(abDiff);
    console.log(getSum(abDiff, abDiff.length));
  }
}

function getAbDiff(arr, len, abDiff) {
  if (len < 2) {
    return abDiff;
  }
  abDiff.push(Math.abs(arr[len - 1] - arr[len - 2]));
  return getAbDiff(arr, len - 1, abDiff);
}

function getSum(arr, len) {
  if (len == 0) {
    return 0;
  }
  return arr[len - 1] + getSum(arr, len - 1);
}
if (process.env.LOGNAME === "ellu") {
  runProgram(`2
  3
  1 5 2
  5
  3 5 6 1 8`);
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
