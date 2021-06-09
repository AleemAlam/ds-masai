function runProgram(input) {
  input = input.trim().split("\n");

  const len = +input[0].trim();
  const arr = input[1].trim().split(" ").map(Number);
  console.log(nextGreater(arr, len));
}

const nextGreater = (arr, len) => {
  const stack = [];
  const ans = []; //
  for (let i = 0; i < len; i++) {
    while (stack.length > 0 && stack[stack.length - 1] >= arr[i]) {
      stack.pop();
    }
    ans.push(stack.length > 0 ? stack[stack.length - 1] : -1);
    stack.push(arr[i]);
  }
  return ans.join(" ");
};
if (process.env.LOGNAME === "ellualeem") {
  runProgram(`8
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
