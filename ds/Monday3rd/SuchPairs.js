function runProgram(input) {
  input = input.trim().split("\n");
  const testCase = Number(input[0].trim().split(" "));
  let row = 1;
  for (let j = 1; j <= testCase; j++) {
    let ans = false;
    let [len, sum] = input[row++].trim().split(" ").map(Number);
    let nums = input[row++].trim().split(" ").map(Number);
    console.log(pairs(nums, len, sum));
  }
}

function pairs(arr, len, sum) {
  let obj = {};
  for (let i = 0; i < len; i++) {
    obj[arr[i]] = obj[arr[i]] ? obj[arr[i]] + 1 : i;
  }
  for (let i = 0; i < len; i++) {
    let other = sum - arr[i];
    if (obj[other] && obj[other] != i) {
      return 1;
    }
  }

  return -1;
}

if (process.env.LOGNAME === "ellualeem") {
  runProgram(`1
  5 2
  3 4 0 2 7`);
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
