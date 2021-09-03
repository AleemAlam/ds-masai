function runProgram(str) {
  str = str.trim();
  console.log(infixToPostFix(str));
}

function infixToPostFix(str) {
  const stack = [];
  const ans = [];
  for (let i = 0; i < str.length; i++) {
    if (precedency(str[i]) == 0 && str[i] != ")" && str[i] != "(") {
      ans.push(str[i]);
    } else if (str[i] == "(") {
      stack.push(str[i]);
    } else if (str[i] == ")") {
      let j = stack.length - 1;
      while (j >= 0) {
        if (stack[j] != "(") {
          ans.push(stack.pop());
        } else {
          stack.pop();
          break;
        }
        j--;
      }
    } else {
      if (stack.length == 0) {
        stack.push(str[i]);
      } else {
        if (precedency(stack[stack.length - 1]) < precedency(str[i])) {
          stack.push(str[i]);
        } else {
          while (
            stack.length > 0 &&
            precedency(stack[stack.length - 1]) >= precedency(str[i])
          ) {
            ans.push(stack.pop());
          }
          stack.push(str[i]);
        }
      }
    }
  }
  ans.push(stack.pop());
  return ans.join("");
}

function precedency(char) {
  if (char == "+" || char == "-") {
    return 1;
  } else if (char == "*" || char == "/") {
    return 2;
  } else if (char == "^") {
    return 3;
  } else {
    return 0;
  }
}

if (process.env.LOGNAME === "ellu") {
  runProgram(`a+b-c+d*(e-f)/g+(h*(i/j))`);
} else {
  process.stdin.resume();
  process.stdin.setEncoding("ascii");
  let read = "";
  process.stdin.on("data", function (str) {
    read += str;
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
