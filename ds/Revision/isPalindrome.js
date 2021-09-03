function runProgram(input) {
  input = input.trim().split("\n");
  const len = +input[0].trim();
  const str = input[1].trim();
  console.log(isPalindrome(str));
}

const isPalindrome = (str) => {
  let a = 0;
  let b = str.length - 1;
  while (a < b) {
    if (str[a] != str[b]) {
      return "No";
    }
    a++;
    b--;
  }
  return "Yes";
};

if (process.env.LOGNAME === "ellu") {
  runProgram(`6
    nrupul`);
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
