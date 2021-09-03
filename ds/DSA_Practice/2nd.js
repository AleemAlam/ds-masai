function runProgram(input) {
  input = input.trim().split("\n");
  const testCase = +input[0];
  let row = 1;
  for (i = 0; i < testCase; i++) {
    const len = +input[row++];
    const arr = input[row++].trim().split(" ").map(Number);
    console.log(rideQueue(arr));
  }
}

function rideQueue(arr) {
  let i = 0;
  let n = arr.length;
  let count = 0;
  while (i < n) {
    if (arr[i] < arr[i + 1]) {
      i++;
    } else {
      count += 1;
      i++;
    }
  }
  return count;
}
if (process.env.LOGNAME === "ellu") {
  runProgram(`1
  8
  1 3 2 4 4 5 3 6`);
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
