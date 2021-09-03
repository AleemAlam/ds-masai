function runProgram(input) {
  input = input.trim().split("\n");
  const len = +input[0].trim();
  const arr = input[1].trim().split(" ").map(Number);
  console.log(getNewArrSum(arr, len));
}

const getNewArrSum = (arr, len) => {
  const xStack = [];
  const yStack = [];
  const xArr = [];
  const yArr = [];
  const ans = [];
  for (let i = 0; i < len; i++) {
    while (xStack.length > 0 && arr[xStack[xStack.length - 1]] <= arr[i]) {
      xStack.pop();
    }
    xArr.push(xStack.length > 0 ? xStack[xStack.length - 1] + 1 : -1);
    xStack.push(i);
  }
  for (let i = len - 1; i >= 0; i--) {
    while (yStack.length > 0 && arr[yStack[yStack.length - 1]] <= arr[i]) {
      yStack.pop();
    }

    yArr[i] = yStack.length > 0 ? yStack[yStack.length - 1] + 1 : -1;
    yStack.push(i);
  }

  for (let i = 0; i < len; i++) {
    ans.push(xArr[i] + yArr[i]);
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
