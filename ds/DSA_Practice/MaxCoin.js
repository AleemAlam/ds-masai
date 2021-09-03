function runProgram(input) {
  input = input.trim().split("\n");
  let [len, coin0, coin1] = input[0].trim().split(" ").map(Number);
  let str = input[1].trim();
  console.log(binaryStr(str, len, coin0, coin1));
}

function binaryStr(str, len, coin0, coin1) {
  let coin0Val = 0;
  let coin1Val = 0;
  for (let i = 0; i < len - 1; i++) {
    if (str[i] + str[i + 1] == "10") {
      coin1Val += coin1;
    }
    if (str[i] + str[i + 1] == "01") {
      coin0Val += coin0;
    }
  }
  return coin0Val > coin1Val ? coin0Val : coin1Val;
}

if (process.env.LOGNAME === "ellu") {
  runProgram(`10 20 19
  1111100110`);
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
