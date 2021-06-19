function runProgram(input) {
  let newStr = "";
  const [len, arr] = input.trim().split("\n");
  for (let i = 1; i < arr.length; i += 2) {
    newStr += arr[i];
  }
  newStr.split("").reverse().join("") == newStr
    ? console.log("yes")
    : console.log("no");
}

const oddPalindrome = () => {};
if (process.env.LOGNAME === "ellu") {
  runProgram(`6
abcdeb`);
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
