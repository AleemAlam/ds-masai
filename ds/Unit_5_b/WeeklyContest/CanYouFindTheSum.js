function runProgram(input) {
  input = input.trim().split("\n");
  const len = +input[0].trim();
  const arr = input[1].trim().split(" ").map(Number);
  console.log(sumOfIndex(arr, len));
}

const nextGreater = (arr, len) => {
  let stack = [];
  const leftIndex = [];
  const rightIndex = [];
  for (let i = 0; i < len; i++) {
    while (stack.length > 0 && arr[stack[stack.length - 1]] <= arr[i]) {
      stack.pop();
    }
    leftIndex.push(stack.length > 0 ? stack[stack.length - 1] + 1 : -1);
    stack.push(i);
  }
  stack = [];

  for (let i = len - 1; i >= 0; i--) {
    while (stack.length > 0 && arr[stack[stack.length - 1]] <= arr[i]) {
      stack.pop();
    }

    rightIndex[i] = stack.length > 0 ? stack[stack.length - 1] + 1 : -1;
    stack.push(i);
  }

  return { leftIndex, rightIndex };
};

const sumOfIndex = (arr, len) => {
  const { leftIndex, rightIndex } = nextGreater(arr, len);
  const ans = [];
  for (let i = 0; i < len; i++) {
    ans.push(leftIndex[i] + rightIndex[i]);
  }
  return ans.join(" ");
};
if (process.env.LOGNAME === "ellu") {
  runProgram(`5
  5 4 1 3 2`);
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
