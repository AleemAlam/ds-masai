function runProgram(input) {
  input = input.trim().split("\n");
  const testCase = +input[0].trim();
  let row = 1;
  for (let i = 0; i < testCase; i++) {
    const len = +input[row++].trim();
    const arr = input[row++].trim().split(" ").map(Number);
    largestNegativePositive(arr);
  }
}

const largestNegativePositive = (arr) => {
  let obj = {};
  for (let i = 0; i < arr.length; i++) {
    obj[arr[i]] = obj[arr[i]] ? obj[arr[i]] + 1 : 1;
  }
  let max;
  for (let i = 0; i < arr.length; i++) {
    let temp = arr[i] - arr[i] - arr[i];
    if (obj[temp]) {
      if (max == undefined || max < arr[i]) {
        max = arr[i];
      }
    }
  }
  console.log(max == undefined ? -1 : max);
};

if (process.env.LOGNAME === "ellu") {
  runProgram(`2
    5
    2 1 -1 -2 3
    5
    -3 2 -4 4 -2`);
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
