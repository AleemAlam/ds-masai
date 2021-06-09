function runProgram(input) {
  const data = input.trim().split(/[\r\n]+/);
  const n = Number(data[0]);
  let array = data[1].trim().split(" ").map(Number);
  let total = 0;
  array.sort((a, b) => a - b);
  let i = 0;
  let r = array.length - 1;
  while (i < r) {
    total = total + array[r];
    r--;
    i++;
  }
  console.log(total);
}

if (process.env.LOGNAME === "ellualeem") {
  runProgram(`2
  1 3 1 2`);
} else {
  process.stdin.resume();
  process.stdin.setEncoding("ascii");
  let read = "";
  process.stdin.on("data", function (input) {
    read += input;
  });
  process.stdin.on("end", function () {
    read = read.replace(/\n$/, "");
    runProgram(read);
  });

  process.on("SIGINT", function () {
    read = read.replace(/\n$/, "");
    runProgram(read);
    process.exit(0);
  });
}
