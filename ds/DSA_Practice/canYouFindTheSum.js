function runProgram(input) {
  input = input.trim().split("\n");
  const len = +input[0].trim();
  const arr = input[1].trim().split(" ").map(Number);
  console.log(XYSum(arr, len));
}

function XYSum(arr, len) {
  let stack = [];
  const xArr = [];
  const yArr = [];
  for (let i = 0; i < len; i++) {
    while (stack.length > 0 && arr[stack[stack.length - 1]] <= arr[i]) {
      stack.pop();
    }
    xArr.push(stack.length > 0 ? stack[stack.length - 1] + 1 : -1);
    stack.push(i);
  }
  stack = [];
  for (let i = len - 1; i >= 0; i--) {
    while (stack.length > 0 && arr[stack[stack.length - 1]] <= arr[i]) {
      stack.pop();
    }
    yArr[i] = stack.length > 0 ? stack[stack.length - 1] + 1 : -1;
    stack.push(i);
  }
  let sum = [];
  for (let i = 0; i < len; i++) {
    sum.push(xArr[i] + yArr[i]);
  }
  return sum.join(" ");
}
if (process.env.LOGNAME === "ellu") {
  runProgram(`5
    5 4 1 3 2`);
} else {
  process.stdin.resume();
  process.stdin.setEncoding("ascii");
  let read = "";
  process.stdin.on("data", function (str) {
    read += str;
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
