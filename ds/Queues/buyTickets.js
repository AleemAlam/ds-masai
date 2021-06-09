function runProgram(input) {
  input = input.trim().split("\n");
  const queue = [];
  for (let i = 1; i < input.length; i++) {
    const [condition, val] = input[i].trim().split(" ");
    if (condition == "E") {
      queue.push(val);
      console.log(queue.length);
    } else {
      if (queue.length != 0) {
        console.log(queue.shift(), queue.length);
      } else {
        console.log(-1, 0);
      }
    }
  }
}

const deQue = (que) => {};

if (process.env.LOGNAME === "ellualeem") {
  runProgram(`10
  D
  D
  E 51
  E 64
  E 44
  D
  E 54
  E 74
  D
  E 47`);
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
