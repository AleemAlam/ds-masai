function runProgram(input) {
  input = input.trim();
  console.log(checkBracts(input));
}

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
        ans = "unbalanced";
        break;
      }
    }
  }
  if (stack.length > 0) {
    ans = "unbalanced";
  }
  console.log(ans);
};

const checkBracts = (item) => {
  const stack = [];
  for (let i = 0; i < item.length; i++) {
    if (item[i] == "{" || item[i] == "[" || item[i] == "(") {
      stack.push(item[i]);
    } else if (item[i] == "}") {
      if ("{" == stack[stack.length - 1]) {
        stack.pop();
      } else {
        return "unbalanced";
      }
    } else if (item[i] == ")") {
      if ("(" == stack[stack.length - 1]) {
        stack.pop();
      } else {
        return "unbalanced";
      }
    } else if (item[i] == "]") {
      if ("[" == stack[stack.length - 1]) {
        stack.pop();
      } else {
        return "unbalanced";
      }
    }
  }
  return "balanced";
};

if (process.env.LOGNAME === "ellualeem") {
  runProgram(`[one[two[three[four[five[six[seven[eight[nine[ten]]]]]]]]]]`);
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
