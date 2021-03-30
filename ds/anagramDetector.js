const letters = "abcdefghijklmnopqrstuvwxyz";
function runProgram(input) {
  let [str1, str2] = input
    .trim()
    .split("\n")
    .map((str) => str.split(" ").join(""));
  let isAnagram = true;
  str1 = getObj(str1);
  str2 = getObj(str2);
  for (key in str1) {
    if (str1[key] != str2[key]) {
      isAnagram = false;
      break;
    }
  }
  isAnagram ? console.log("True") : console.log("False");
}
function getObj(str) {
  let obj = {};
  for (let i = 0; i < str.length; i++) {
    if (!obj[str[i]]) {
      obj[str[i]] = 1;
    } else {
      obj[str[i]] += 1;
    }
  }
  return obj;
}
if (process.env.LOGNAME === "aleem") {
  runProgram(`anagram
  nag a ram`);
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
