function runProgram(str) {
  str = str.trim();
  console.log(strWithParenthesis(str) ? "balanced" : "unbalanced");
}

function strWithParenthesis(str) {
  const stack = [];
  for (let i = 0; i < str.length; i++) {
    if (str[i] == "(" || str[i] == "{" || str[i] == "[") {
      stack.push(str[i]);
    } else if (str[i] == "}" || str[i] == ")" || str[i] == "]") {
      if (str[i] == "}" && stack[stack.length - 1] == "{") {
        stack.pop();
      } else if (str[i] == ")" && stack[stack.length - 1] == "(") {
        stack.pop();
      } else if (str[i] == "]" && stack[stack.length - 1] == "[") {
        stack.pop();
      } else {
        return false;
      }
    }
  }
  if (stack.length != 0) return false;

  return true;
}
if (process.env.LOGNAME === "ellu") {
  runProgram(`[one[two[three[four[five[six[seven[eight[nine[ten]]]]]]]]]]`);
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
