function runProgram(input) {
  strVal(input.trim());
}

const strVal = (str) => {
  const letters = "abcdefghijklmnopqrstuvwxyz";
  const obj = {};
  let sum = 0;

  for (let i = 0; i < letters.length; i++) {
    obj[letters[i]] = i + 1;
  }
  for (let i = 0; i < str.length; i++) {
    sum += obj[str[i]];
  }
  console.log(sum);
  return;
};

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
