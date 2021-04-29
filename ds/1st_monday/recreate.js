function runProgram(input) {
  input = input.trim();
  let newStr = "";
  for (let i = 0, j = 1; i < input.length && j < input.length; i += 2, j += 2) {
    for (let k = 1; k <= Number(input[j]); k++) {
      newStr += input[i];
    }
  }
  console.log(newStr);
}
if (process.env.LOGNAME === "ellualeem") {
  runProgram(`a3b2`);
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
