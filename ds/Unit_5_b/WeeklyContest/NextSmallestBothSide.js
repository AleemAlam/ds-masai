function runProgram(input) {
  input = input.trim().split("\n");
  const testCase = +input[0].trim();
  let row = 1;
  for (let i = 0; i < testCase; i++) {
    const len = +input[row++].trim();
    const arr = input[row++].trim().split(" ").map(Number);
    console.log(nearestGreater(arr, len));
  }
}

const nextGreater = (arr, len) => {
  let stack = [];
  const leftIndex = [];
  const rightIndex = [];
  for (let i = 0; i < len; i++) {
    while (stack.length > 0 && arr[stack[stack.length - 1]] >= arr[i]) {
      stack.pop();
    }
    leftIndex.push(stack.length > 0 ? stack[stack.length - 1] : -1);
    stack.push(i);
  }
  stack = [];
  for (let i = len - 1; i >= 0; i--) {
    while (stack.length > 0 && arr[stack[stack.length - 1]] >= arr[i]) {
      stack.pop();
    }
    rightIndex[i] = stack.length > 0 ? stack[stack.length - 1] : -1;
    stack.push(i);
  }

  return { leftIndex, rightIndex };
};

const nearestGreater = (arr, len) => {
  const { leftIndex, rightIndex } = nextGreater(arr, len);
  const ans = [];
  for (let i = 0; i < len; i++) {
    let leftDiff = Math.abs(leftIndex[i] - i);
    let rightDiff = Math.abs(rightIndex[i] - i);
    if (leftIndex[i] == -1 && rightIndex[i] == -1) {
      ans.push(-1);
    } else if (leftIndex[i] == -1 && rightIndex[i] > -1) {
      ans.push(arr[rightIndex[i]]);
    } else if (leftDiff < rightDiff) {
      ans.push(arr[leftIndex[i]]);
    } else if (leftDiff === rightDiff) {
      ans.push(arr[leftIndex[i]]);
    } else if (leftDiff > rightDiff) {
      ans.push(arr[rightIndex[i]]);
    }
  }
  return ans.join(" ");
};
if (process.env.LOGNAME === "ellu") {
  runProgram(`1
  8
  39 27 11 4 24 32 32 1`);
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
