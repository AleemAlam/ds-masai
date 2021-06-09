function runProgram(input) {
  input = input.trim();
  //   postfixToInfix(input);
  prefixToPostfix(input);
}

const postfixToInfix = (input) => {
  const stack = [];

  for (let i = 0; i < input.length; i++) {
    if (precedency(input[i]) == 0) {
      stack.push(input[i]);
    } else {
      let A = stack.pop();
      let B = stack.pop();
      stack.push(`(${B}${input[i]}${A})`);
    }
  }
  console.log(stack[0]);
};

const prefixToPostfix = (input) => {
  input = input.split("").reverse();
  const stack = [];

  for (let i = 0; i < input.length; i++) {
    if (precedency(input[i]) == 0) {
      stack.push(input[i]);
    } else {
      let A = stack.pop();
      let B = stack.pop();
      stack.push(`(${A}${input[i]}${B})`);
    }
  }
  console.log(stack[0]);
};

function precedency(char) {
  if (char == "+" || char == "-" || char == "*" || char == "/" || char == "^") {
    return 1;
  } else return 0;
}

//a+b-c+d*(e-f)/g+(h*(i/j))
if (process.env.LOGNAME === "ellualeem") {
  runProgram("++-+abc/*d-efg*h/ij");
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
