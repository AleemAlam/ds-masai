function runProgram(input) {
  input = input.trim().split("\n");
  let stack = [];
  let min = [];
  for (let i = 1; i < input.length; i++) {
    const [operation, val] = input[i].trim().split(" ");
    const num = Number(val);
    if (operation === "push") {
      stack.push(num);
      if (min.length == 0) {
        min.push(num);
      } else if (min[min.length - 1] >= num) {
        min.push(num);
      }
    } else if (operation == "getMin") {
      console.log(min[min.length - 1]);
    } else {
      let x = stack.pop();
      if (x == min[min.length - 1]) {
        min.pop();
      }
    }
  }
}

const getMin = (arr) => {
  let min = arr.reduce((a, b) => {
    return a > b ? b : a;
  });
  return min;
};

if (process.env.LOGNAME === "ellualeem") {
  runProgram(`8
    push 5
    push 3
    push 1
    getMin
    pop
    getMin
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
