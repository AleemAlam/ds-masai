function runProgram(input) {
  input = input.trim().split("\n");
  let len = +input[0].trim();
  let arr = input[1].trim().split(" ").map(Number);
  console.log(distinctSum(arr));
}

let sum = 0;
function distinctSum(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] != arr[i + 1]) {
      sum += arr[i];
    }
  }
  return sum;
}

if (process.env.LOGNAME === "ellu") {
  runProgram(`5
    2 2 2 1 1`);
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
