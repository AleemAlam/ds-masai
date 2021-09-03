function runProgram(input) {
  input = input.trim().split("\n");
  const testCase = +input[0].trim();
  let row = 1;
  for (let i = 0; i < testCase; i++) {
    const len = +input[row++].trim();
    const arr = input[row++].trim().split(" ").map(Number);
    repeatedAndMissing(arr, len);
  }
}

const repeatedAndMissing = (arr, len) => {
  let miss = Math.floor(len * ((len + 1) / 2));
  let repeat;

  for (let i = 0; i < arr.length; i++) {
    if (repeat == undefined && arr[i] - i != 1) {
      repeat = arr[i];
    }
    miss -= arr[i];
  }
  console.log(miss + repeat, repeat);
};

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
