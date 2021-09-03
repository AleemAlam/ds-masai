function runProgram(input) {
  input = input.trim().split("\n");
  const testCase = +input[0].trim();

  let row = 1;
  for (let i = 0; i < testCase; i++) {
    const len = +input[row++].trim();
    const arr = input[row++].trim().split(" ").map(Number);

    console.log(checkMissing(arr, len));
  }
}
function checkMissing(arr, len) {
  let miss = (len * (len + 1)) / 2;
  let repeated;
  let getRepeated = false;
  for (let i = 0; i < len; i++) {
    if (!getRepeated && arr[i] - (i + 1) != 0) {
      repeated = arr[i];
      getRepeated = true;
    }
    miss -= arr[i];
  }
  return `${miss + repeated} ${repeated}`;
}
if (process.env.LOGNAME === "ellu") {
  runProgram(`3
    5
    1 2 3 3 4
    2
    1 1
    3
    1 2 2`);
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
