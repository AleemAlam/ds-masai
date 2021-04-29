function runProgram(input) {
  input = input.trim();
  let count = 1;
  let newStr = "";
  for (let i = 0; i <= input.length - 1; i++) {
    if (input[i] == input[i + 1]) {
      count++;
    } else {
      newStr += input[i] + count;
      count = 1;
    }
  }
  console.log(newStr);
}

if (process.env.LOGNAME === "ellualeem") {
  runProgram(`aaabbbbcc`);
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
