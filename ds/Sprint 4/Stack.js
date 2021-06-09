function runProgram(input) {
  input = input.trim().split("\n");
  let stack = [];
  let min = [];
  for (let i = 1; i < input.length; i++) {
    const [operation, num] = input[i].trim().split(" ");
    if (operation == "push") {
      stack.push(Number(num));
      if (min[0] == undefined || Number(num) != min[min.length - 1]) {
        min.push(Number(num));
      }
    } else if (operation == "pop") {
      if (stack.length > 0) {
        let temp = stack.pop();
        if (temp === min[min.length - 1]) {
          min.pop();
        }
      }
    } else {
      if (stack.length > 0) {
        console.log(min[min.length - 1]);
      }
    }
    console.log(min);
  }
}

const getMin = (arr) => {
  let min = arr.reduce((a, b) => {
    return a > b ? b : a;
  });
  return min;
};

if (process.env.LOGNAME === "ellualeem") {
  runProgram(`10
  push 5
  push 3
  push 1
  getMin
  pop
  getMin
  push 1
  pop
  push 3
  push 3
  push 3
  push 3
  push 1
  push 1
  push 1
  push 1
  push 1
  pop
  pop
  pop
  getMin`);
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
