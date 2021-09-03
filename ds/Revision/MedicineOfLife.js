function runProgram(input) {
  input = input.trim().split("\n");
  const testCase = +input[0].trim();
  let row = 1;
  for (let i = 0; i < testCase; i++) {
    let [len, k] = input[row++].trim().split(" ").map(Number);
    let arr = input[row++].trim().split(" ").map(Number);
    console.log(suchPair(arr, len, k) ? "Possible" : "Impossible");
  }
}
function suchPair(arr, len, k) {
  const obj = {};
  for (let i = 0; i < len; i++) {
    obj[arr[i]] = i;
  }
  for (let i = 0; i < len; i++) {
    let pair = k - arr[i];
    if (obj[pair] != undefined && obj[pair] != i) {
      return true;
    }
  }
  return false;
}
if (process.env.LOGNAME === "ellu") {
  runProgram(`2
  5 7
  1 2 3 4 5
  5 12
  1 2 3 4 5`);
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
