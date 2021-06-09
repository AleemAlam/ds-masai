function runProgram(input) {
  input = input.trim().split("\n");
  const queue = [];
  const [size, cases] = input[0].trim().split(" ").map(Number);
  for (let i = 1; i <= cases; i++) {
    const [type, num] = input[i].trim().split(" ").map(Number);
    if (type == 1) {
      if (queue.length < size) {
        queue.push(Number(num));
        console.log(Number(num));
      } else {
        console.log(-1);
      }
    } else {
      if (queue.length > 0) console.log(queue.shift());
      else console.log(-1);
    }
  }
}

if (process.env.LOGNAME === "ellualeem") {
  runProgram(`2 6
  1 1
  1 2
  1 3
  2
  2
  2`);
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
