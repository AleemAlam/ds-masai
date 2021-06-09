function runProgram(input) {
  input = input.trim().split("\n");
  const testCase = Number(input[0].trim());
  let line = 1;
  for (let i = 1; i <= testCase; i++) {
    const len = Number(input[line++].trim());
    const str = input[line++].trim();
    console.log(longestSequence(str));
  }
}

let longestSequence = function (str) {
  let us = new Set();
  for (let i = 0; i < str.length; i++) {
    let ss = "";
    for (let j = i; j < str.length; j++) {
      ss = ss + str[j];
      us.add(ss);
    }
  }
  return us.size;
};

if (process.env.LOGNAME === "ellualeem") {
  runProgram(`2
  5
  abcde
  3
  aaa`);
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
