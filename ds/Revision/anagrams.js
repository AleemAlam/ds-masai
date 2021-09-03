function runProgram(input) {
  input = input.trim().split("\n");
  const testCase = +input[0].trim();
  let row = 1;
  for (let i = 0; i < testCase; i++) {
    const str1 = input[row++].trim();
    const str2 = input[row++].trim();
    console.log(checkAnagram(str1, str2) ? "True" : "False");
  }
}
const checkAnagram = (str1, str2) => {
  if (str1.split("").sort().join("") == str2.split("").sort().join("")) {
    return true;
  }
  return false;
};

if (process.env.LOGNAME === "ellu") {
  runProgram(`2
    abcd
    dcab
    aa
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
