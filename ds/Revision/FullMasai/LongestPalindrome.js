function runProgram(input) {
  let str = input.trim();
  console.log(LongestPalindrome(str));
}

function LongestPalindrome(str) {
  let max = 1;
  for (let i = 0; i < str.length; i++) {
    for (let j = i + 1; j < str.length; j++) {
      if (isPalindrome(str.substring(i, j + 1))) {
        max = Math.max(max, str.substring(i, j + 1).length);
      }
    }
  }
  return max;
}
function isPalindrome(str) {
  let i = 0;
  let j = str.length - 1;
  while (i < j) {
    if (str[i] != str[j]) {
      return false;
    }
    i++;
    j--;
  }
  return true;
}
if (process.env.LOGNAME === "ellu") {
  runProgram(`thisracecarisgood`);
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
