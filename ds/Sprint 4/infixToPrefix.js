function runProgram(input) {
  input = input.trim().split("").reverse();
  const prefix = [];
  const stack = [];

  for (let i = 0; i < input.length; i++) {
    if (precedency(input[i]) == 0 && input[i] != ")" && input[i] != "(") {
      prefix.push(input[i]);
    } else if (input[i] == ")") {
      stack.push(input[i]);
    } else if (input[i] == "(") {
      let j = stack.length - 1;
      while (j >= 0) {
        if (stack[j] != ")") prefix.push(stack.pop());
        else {
          stack.pop();
          break;
        }
        j--;
      }
    } else {
      if (stack.length == 0) {
        stack.push(input[i]);
      } else {
        if (precedency(stack[stack.length - 1]) <= precedency(input[i])) {
          stack.push(input[i]);
        } else {
          while (
            stack.length > 0 &&
            precedency(stack[stack.length - 1]) > precedency(input[i])
          ) {
            prefix.push(stack.pop());
          }
          stack.push(input[i]);
        }
      }
    }
  }
  const len = stack.length;
  for (let i = 0; i < len; i++) prefix.push(stack.pop());
  console.log(prefix.reverse().join(""));
}

function precedency(char) {
  if (char == "+" || char == "-") {
    return 1;
  } else if (char == "*" || char == "/") {
    return 2;
  } else if (char == "^") {
    return 3;
  } else return 0;
}

if (process.env.LOGNAME === "ellualeem") {
  runProgram("a+b-c+d*(e-f)/g+(h*(i/j))");
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
