function runProgram(input) {
  input = input.trim().split("\n");
  const testCase = Number(input[0].trim());
  for (let i = 1; i <= testCase; i++) {
    const str = input[i].trim();
    console.log(powerOfStr(str));
  }
}

const powerOfStr = (str) => {
  let ans = 1;
  let temp = 1;
  for (let i = 0; i < str.length - 1; i++) {
    if (str[i] == str[i + 1]) {
      temp++;
    } else {
      ans = Math.max(ans, temp);
      temp = 1;
    }
  }
  return Math.max(ans, temp);
};

if (process.env.LOGNAME === "ellualeem") {
  runProgram(`4
  aaaaaa
  aaabbb
  asd
  aabbcc`);
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
