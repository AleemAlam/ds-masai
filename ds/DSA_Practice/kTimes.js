function runProgram(input) {
  input = input.trim().split("\n");
  const testCase = +input[0].trim();
  let row = 1;
  for (let i = 0; i < testCase; i++) {
    const [len, k] = input[row++].trim().split(" ").map(Number);
    const arr = input[row++].trim().split(" ").map(Number);
    console.log(kTimes(arr, len, k).number);
  }
}
function kTimes(arr, len, k) {
  let highest = { number: 0, count: 0 };
  for (let i = 0; i < len; i++) {
    const str = arr[i].toString();
    let count = 0;
    for (let i = 0; i < str.length; i++) {
      if (k == str[i]) {
        count++;
      }
    }
    if (highest.count < count) {
      highest = { number: arr[i], count };
    } else if (highest.count <= count) {
      if (highest.number < arr[i]) {
        highest = { number: arr[i], count };
      }
    }
  }
  return highest;
}
if (process.env.LOGNAME === "ellu") {
  runProgram(`2
    5 2
    222 2221 12221 2222 12
    5 2
    222 2221 12221 2212 12`);
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
