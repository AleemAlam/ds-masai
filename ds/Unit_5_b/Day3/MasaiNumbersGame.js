function runProgram(input) {
  let arr = input.trim().split("\n").map(Number);
  arr.shift();
  console.log(nextSmallerOfGreater(arr, arr.length));
}

const nextGreaterOrSmaller = (arr, label, len) => {
  const stack = [];
  const nextIndex = [];
  for (let i = len - 1; i >= 0; i--) {
    while (
      stack.length > 0 && label == "greater"
        ? arr[stack[stack.length - 1]] <= arr[i]
        : arr[stack[stack.length - 1]] >= arr[i]
    ) {
      stack.pop();
    }
    nextIndex[i] = stack.length > 0 ? stack[stack.length - 1] : -1;
    stack.push(i);
  }
  return nextIndex;
};

const nextSmallerOfGreater = (arr, len) => {
  const greater = nextGreaterOrSmaller(arr, "greater", len);
  const smaller = nextGreaterOrSmaller(arr, "smaller", len);
  const ans = [];
  for (let i = 0; i < arr.length; i++) {
    if (greater[i] != -1 && smaller[greater[i]] != -1)
      ans.push(arr[smaller[greater[i]]]);
    else ans.push("-1");
  }
  return ans.join(" ");
};

if (process.env.LOGNAME === "ellu") {
  runProgram(`8
  4
  2
  3
  7
  8
  4
  5
  2`);
  // 4 2 3 7 8 4 5 2
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
