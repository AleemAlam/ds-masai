const letters = "abcdefghijklmnopqrstuvwxyz";
let obj = {};
for (let i = 0; i < letters.length; i++) {
  obj[letters[i]] = i + 1;
}

function runProgram(input) {
  input = input.trim();
  let sum = 0;
  for (let i = 0; i < input.length; i++) {
    sum += obj[input[i]];
  }
  console.log(sum);
}
if (process.env.LOGNAME === "aleem") {
  runProgram(`aba`);
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
