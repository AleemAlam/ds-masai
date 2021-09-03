function runProgram(input) {
  input = input.trim().split("\n");
  const len = +input[0].trim();
  const arr = input[1].trim().split(" ").map(Number);
  console.log(arrProd(arr, len));
}

function arrProd(arr, len) {
  if (len == 0) {
    return 1;
  }
  return arr[len - 1] * arrProd(arr, len - 1);
}

if (process.env.LOGNAME === "ellu") {
  runProgram(`5
  3 5 2 9 4`);
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
