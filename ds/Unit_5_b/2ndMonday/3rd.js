function runProgram(input) {
  input = input.trim().split("\n");
  const str = input[0].trim();
  const k = +input[1].trim();
  const capsLetter = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
  const letter = "abcdefghijklmnopqrstuvwxyz".split("");
  const num = "0123456789".split("");
  let newStr = "";
  for (let i = 0; i < str.length; i++) {
    // console.log(capsLetter.indexOf(str[i]));
    if (capsLetter.indexOf(str[i]) > -1) {
      let index = capsLetter.indexOf(str[i]) + (k % 26);
      if (index > 25) {
        index = index - 26;
      }
      newStr += capsLetter[index];
    } else if (letter.indexOf(str[i]) > -1) {
      let index = letter.indexOf(str[i]) + (k % 26);
      if (index > 25) {
        index = index - 26;
      }
      newStr += letter[index];
    } else if (num.indexOf(str[i]) > -1) {
      //   console.log(num.indexOf(str[i]) + k);
      let index = num.indexOf(str[i]) + (k % 10);
      if (index > 9) {
        index = index - 10;
      }
      //   console.log(index);
      newStr += num[index];
    } else {
      newStr += str[i];
    }
  }
  console.log(newStr.trim());
}

if (process.env.LOGNAME === "ellu") {
  runProgram(`AaZz190./Usa
  27`);
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
