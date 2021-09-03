function runProgram(input) {
  input = input.trim().split("\n");
  const testCase = +input[0].trim();
  let row = 1;
  for (let i = 0; i < testCase; i++) {
    const len = +input[row++].trim();
    const str = input[row++].trim();
    console.log(canBePalindrome(str) ? "Possible!" : "Not Possible!");
  }
}

function canBePalindrome(str) {
  let odd = 0;
  const obj = {};
  for (let i = 0; i < str.length; i++) {
    obj[str[i]] = obj[str[i]] ? obj[str[i]] + 1 : 1;
  }

  for (let i = 0; i < str.length; i++) {
    if (obj[str[i]] % 2 == 1) odd++;

    if (odd > 1) return false;
  }

  return true;
}

if (process.env.LOGNAME === "ellu") {
  runProgram(`8
  3
  jbh
  8
  dcgfggbi
  9
  efibeejhh
  7
  giggbgb
  2
  fg
  9
  ghccjjecd
  4
  eiig
  7
  gfhdhgj
  `);
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
