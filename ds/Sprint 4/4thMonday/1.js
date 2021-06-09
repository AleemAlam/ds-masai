function runProgram(input) {
  input = input.trim().split("\n");
  const queue = [];
  const cases = +input[0].trim().split(" ");
  for (let i = 1; i <= cases; i++) {
    const [type, num] = input[i].trim().split(" ");
    if (type == "E") {
      queue.push(Number(num));
      console.log(queue.length);
    } else {
      if (queue.length > 0) console.log(queue.shift(), queue.length);
      else console.log(-1, queue.length);
    }
  }
}

if (process.env.LOGNAME === "ellualeem") {
  runProgram(`5
  E 2
  D
  D
  E 3
  D`);
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
