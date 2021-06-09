function runProgram(input) {
  input = input.trim().split("\n");
  const testCase = Number(input[0].trim().split(" "));
  let row = 1;
  for (let i = 1; i <= testCase; i++) {
    let [len, sum] = input[row++].trim().split(" ").map(Number);
    let nums = input[row++]
      .trim()
      .split(" ")
      .map(Number)
      .sort((a, b) => a - b);
    console.log(pairs(nums, len, sum));
  }
}

function pairs(nums, len, sum) {
  let l = 0;
  let k = len - 1;
  while (l < k) {
    if (nums[l] + nums[k] > sum) {
      k--;
    } else if (nums[l] + nums[k] < sum) {
      l++;
    } else {
      return 1;
    }
  }
  return -1;
}

if (process.env.LOGNAME === "ellualeem") {
  runProgram(`10
  3 -9
  -1 3 -1
  10 -13
  -7 -6 4 10 -5 0 -3 1 -6 5
  4 -9
  -2 2 0 -4
  2 3
  0 0
  8 2
  5 -6 7 6 0 3 -4 8
  1 -7
  0
  8 -6
  4 7 4 -1 5 4 -6 -8
  6 4
  6 -1 -5 -5 2 -5
  4 -4
  0 -1 3 -2
  1 3
  -1`);
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
