function runProgram(input) {
  input = +input.trim();
  console.log(boxes(input)); // 7
}

function boxes(totalBox) {
  if (totalBox < 0) {
    return 0;
  } else if (totalBox == 0) {
    return 1;
  }
  return boxes(totalBox - 1) + boxes(totalBox - 3) + boxes(totalBox - 5);
}

if (process.env.LOGNAME === "ellu") {
  runProgram(`2`);
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
