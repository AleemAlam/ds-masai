function runProgram(input) {
  input = input.trim().split(",");
  solvePostfix(input);
}

const solvePostfix = (input) => {
  const stack = [];
  for (let i = 0; i < input.length; i++) {
    if (precedency(input[i]) == 0) {
      stack.push(+input[i]);
    } else {
      let A = stack.pop();
      let B = stack.pop();
      if (input[i] == "+") {
        stack.push(B + A);
      } else if (input[i] == "-") {
        stack.push(B - A);
      } else if (input[i] == "*") {
        stack.push(B * A);
      } else if (input[i] == "/") {
        stack.push(B / A);
      } else if (input[i] == "^") {
        stack.push(B ^ A);
      }
    }
  }
  console.log(stack[0]);
};

// const prefixToPostfix = (input) => {
//   input = input.split("").reverse();
//   const stack = [];

//   for (let i = 0; i < input.length; i++) {
//     if (precedency(input[i]) == 0) {
//       stack.push(input[i]);
//     } else {
//       let A = stack.pop();
//       let B = stack.pop();
//       stack.push(`(${A}${input[i]}${B})`);
//     }
//   }
//   console.log(stack[0]);
// };

function precedency(char) {
  if (char == "+" || char == "-" || char == "*" || char == "/" || char == "^") {
    return 1;
  } else return 0;
}

if (process.env.LOGNAME === "ellualeem") {
  runProgram("5,6,2,+,*,12,4,/,-");
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
