function runProgram(input) {
  const data = input.trim().split(/[\r\n]+/);
  const len = +data[0];
  let arr = data[1].trim().split(" ").map(Number);
  let total = 0;
  arr.sort((a, b) => a - b);
  for (let i = 0, j = 1; i < len * 2; i += 2, j += 2) {
    total += Math.min(arr[i], arr[j]);
  }
  console.log(total);
}

if (process.env.LOGNAME === "ellualeem") {
  runProgram(`2
  1 3 1 2`);
} else {
  process.stdin.resume();
  process.stdin.setEncoding("ascii");
  let read = "";
  process.stdin.on("data", function (input) {
    read += input;
  });
  process.stdin.on("end", function () {
    read = read.replace(/\n$/, "");
    runProgram(read);
  });

  process.on("SIGINT", function () {
    read = read.replace(/\n$/, "");
    runProgram(read);
    process.exit(0);
  });
}
