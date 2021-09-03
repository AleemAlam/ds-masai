function runProgram(input) {
  input = input.trim().split("\n");
  const testCase = +input[0].trim();
  //   console.log(input);
  let row = 1;
  for (let i = 0; i < testCase; i++) {
    const val = input[row++].trim();
    console.log(ways(val, 0));
  }
}

function ways(val, k) {
  if (val == k) {
    return 1;
  }

  if (val < k) {
    return 0;
  }

  return ways(val, k + 4) + ways(val, k + 8);
}

if (process.env.LOGNAME === "ellu") {
  runProgram(`2
  12
  13`);
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
