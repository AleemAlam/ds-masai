function runProgram(input) {
  input = input.trim().split("\n");
  input.shift();
  input.forEach((item) => {
    // checkBracts(item);
    console.log(checkBracts2(item));
  });
}

const checkBracts2 = (item) => {
  const stack = [];
  if (item.length % 2 != 0) {
    return "not balanced";
  }
  for (let i = 0; i < item.length; i++) {
    if (item[i] == "{" || item[i] == "[" || item[i] == "(") {
      stack.push(item[i]);
    } else if (item[i] == "}") {
      if ("{" == stack[stack.length - 1]) {
        stack.pop();
      } else {
        return "not balanced";
      }
    } else if (item[i] == ")") {
      if ("(" == stack[stack.length - 1]) {
        stack.pop();
      } else {
        return "not balanced";
      }
    } else if (item[i] == "]") {
      if ("[" == stack[stack.length - 1]) {
        stack.pop();
      } else {
        return "not balanced";
      }
    }
  }
  return "balanced";
};

const checkBracts = (item) => {
  let stack = [];
  let temp = 0;
  let ans = "balanced";
  for (let i = 0; i < item.length; i++) {
    if (item[i] == "(") {
      temp = 1;
    } else if (item[i] == ")") {
      temp = -1;
    } else if (item[i] == "[") {
      temp = 2;
    } else if (item[i] == "]") {
      temp = -2;
    } else if (item[i] == "{") {
      temp = 3;
    } else if (item[i] == "}") {
      temp = -3;
    }
    if (temp > 0) {
      stack.push(temp);
    } else {
      if (stack.length > 0 && temp + stack[stack.length - 1] == 0) {
        stack.pop();
      } else {
        ans = "not balanced";
        break;
      }
    }
  }
  if (stack.length > 0) {
    ans = "not balanced";
  }
  console.log(ans);
};

const getMin = (arr) => {
  let min = arr.reduce((a, b) => {
    return a > b ? b : a;
  });
  return min;
};

if (process.env.LOGNAME === "ellualeem") {
  runProgram(`3
{[()]}
{[(])}
{{[[(())]]}}`);
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
