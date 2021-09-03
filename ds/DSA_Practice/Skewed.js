function runProgram(input) {
  input = input.trim().split("\n");
  const testCase = +input[0].trim();
  let row = 1;
  for (let i = 0; i < testCase; i++) {
    const num = +input[row++].trim();
    console.log(checkSkewed(num));
  }
}

function checkSkewed(num) {
  //   console.log(num);
  let even = 0;
  let odd = 0;
  for (let i = 1; i <= num; i++) {
    if (num % i == 0) {
      if (i % 2 == 0) {
        even++;
      } else {
        odd++;
      }
    }
  }
  //   console.log(even, odd);
  return even > odd ? "Even Skewed" : even == odd ? "Not Skewed" : "Odd Skewed";
}
if (process.env.LOGNAME === "ellu") {
  runProgram(`3
    4
    6
    11`);
} else {
  process.stdin.resume();
  process.stdin.setEncoding("ascii");
  let read = "";
  process.stdin.on("data", function (str) {
    read += str;
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
