function runProgram(input) {
  input = input.trim().split("\n");
  const str = input[1].trim();
  for (let i = 0; i < str.length; i++) {
    let newStr = str[i];
    console.log(newStr);
    for (var j = i + 1; j < str.length; j++) {
      newStr += str[j];
      console.log(newStr);
    }
  }
}

if (process.env.LOGNAME === "ellu") {
  runProgram(`4
    123`);
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
