function runProgram(input) {
  input = input.trim().split("\n");
  for (let i = 1; i < input.length; i++) {
    let str = input[i].trim();
    console.log(vowelPriority(str));
  }
}
function vowelPriority(str) {
  let vowel = "";
  let consonant = "";
  for (let i = 0; i < str.length; i++) {
    if (
      str[i] == "a" ||
      str[i] == "e" ||
      str[i] == "u" ||
      str[i] == "i" ||
      str[i] == "o"
    ) {
      vowel += str[i];
    } else {
      consonant += str[i];
    }
  }
  return vowel + consonant;
}
if (process.env.LOGNAME === "ellu") {
  runProgram(`4
    eio
    masaischool
    ubcdefghioel
    rhythm`);
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
