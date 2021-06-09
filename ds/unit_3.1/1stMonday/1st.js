function runProgram(input) {
  let newStr = "";
  for (let i = 0, j = 1; i < input.length && j < input.length; i += 2, j += 2) {
    let letter = input[i];
    for (let k = 0; k < input[j]; k++) {
      newStr += letter;
    }
  }
  console.log(newStr);
}

if (process.env.LOGNAME === "ellualeem") {
  runProgram(`a2b3`);
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
