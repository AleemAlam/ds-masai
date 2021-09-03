function runProgram(input) {
  input = input.trim().split("\n").map(Number);
  const stack = [];
  for (let i = 0; i < input.length; i++) {
    if (input[i] != -1) stack.push(input[i]);
    else {
      break;
    }
  }
  reverse(stack, stack.length);
}

function reverse(stack, len) {
  if (len == 0) {
    return;
  }
  console.log(stack[len - 1]);
  return reverse(stack, len - 1);
}

if (process.env.LOGNAME === "ellu") {
  runProgram(`1
  2
  3
  4
  -1`);
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
