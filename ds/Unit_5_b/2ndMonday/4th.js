function runProgram(input) {
  input = input.trim().split("\n");
  const [len, k] = input[0].trim().split(" ").map(Number);
  const arr = input[1].trim().split(" ").map(Number);
  let count = 0;
  const score = arr[k - 1];
  if (score == 0) {
    console.log(count);
    return;
  }
  for (let i = 0; i < len; i++) {
    if (arr[i] >= score) {
      count++;
    }
  }
  console.log(count);
}

if (process.env.LOGNAME === "ellu") {
  runProgram(`5 1
  1 1 1 1 1`);
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
