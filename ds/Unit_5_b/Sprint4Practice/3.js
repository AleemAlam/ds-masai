function runProgram(input) {
  input = input.trim().split("\n");
  const number = input[0].trim();
  printDigitWord(number, 0, [], number.length);
}
let arr = ["", "", "abc", "def", "ghi", "jkl", "mno", "pqrs", "tuv", "wxyz"];
function printDigitWord(number, current, output, n) {
  if (current == n) {
    console.log(output.join(""));
    return;
  }
  for (let i = 0; i < arr[number[current]].length; i++) {
    output.push(arr[number[current]][i]);
    printDigitWord(number, current + 1, output, n);
    output.pop();
    if (number[current] == 0 || number[current] == 1) {
      return;
    }
  }
}

if (process.env.LOGNAME === "ellu") {
  runProgram(`22`);
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
