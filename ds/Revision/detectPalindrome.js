function runProgram(input) {
  input = input.trim().split("\n");
  const testCase = +input[0].trim();
  let row = 1;
  for (let i = 0; i < testCase; i++) {
    const len = +input[row++].trim();
    const str = input[row++].trim();
    detectPalindrome(str);
  }
}
const detectPalindrome = (str) => {
  const obj = {};
  for (let i = 0; i < str.length; i++) {
    obj[str[i]] = obj[str[i]] ? obj[str[i]] + 1 : 1;
  }
  let odd = 0;
  for (key in obj) {
    if (obj[key] % 2 != 0) {
      odd++;
    }
  }
  if (odd > 1) {
    console.log("Not Possible!");
  } else {
    console.log("Possible!");
  }
};

if (process.env.LOGNAME === "ellu") {
  runProgram(`2
  6
  aabbcc
  5
  aabcd`);
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
