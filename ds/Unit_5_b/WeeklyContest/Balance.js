function runProgram(input) {
  input = input.trim();
  console.log(checkBracts(input));
}

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

if (process.env.LOGNAME === "ellu") {
  runProgram(`(((((((((())))))))))`);
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
