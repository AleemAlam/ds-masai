function runProgram(input) {
  input = input.trim().split("\n");
  const len = +input[0].trim();
  const str = input[1].trim();
  frequency(str, len);
}

function frequency(str, len) {
  const arr = [];
  let obj = {};
  for (let i = 0; i < len; i++) {
    obj[str[i]] = obj[str[i]] ? obj[str[i]] + 1 : 1;
  }

  for (key in obj) {
    arr.push({ letter: key, val: obj[key] });
  }
  arr.sort((a, b) => (a.letter < b.letter ? -1 : 1));

  for (let i = 0; i < arr.length; i++) {
    console.log(`${arr[i].letter}-${arr[i].val}`);
  }
}

if (process.env.LOGNAME === "ellu") {
  runProgram(`76
  gfcgqxfxkujvrkjvxeirrsvqdjcejjybwjnexvnmldrfeehotsfvnawqzmztknyywomssgdmllek`);
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
