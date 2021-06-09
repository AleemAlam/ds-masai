function runProgram(input) {
  input = input.trim().split("\n");
  const testCase = +input[0].trim();
  let row = 1;
  for (let i = 0; i < testCase; i++) {
    const len = +input[row++].trim();
    const arr = input[row++].trim().split(" ").map(Number);
    console.log(signalPower(arr, len));
  }
}

const signalPower = (arr, len) => {
  const stack = [];
  const ans = [];

  for (let i = 0; i < len; i++) {
    let temp = 1;
    while (stack.length > 0 && arr[stack[stack.length - 1]] <= arr[i]) {
      const popIndex = stack.pop();
      temp += ans[popIndex];
    }
    ans.push(temp);

    stack.push(i);
  }
  return ans.join(" ");
};
if (process.env.LOGNAME === "ellualeem") {
  runProgram(`1
  5
  3 5 0 9 8`);
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
