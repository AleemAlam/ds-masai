function runProgram(input) {
  input = input.trim().split("\n");
  const testCase = Number(input[0].trim().split(" "));
  let row = 1;
  for (let j = 1; j <= testCase; j++) {
    let ans = false;
    let [len, sum] = input[row++].trim().split(" ").map(Number);
    let nums = input[row++].trim().split(" ").map(Number);
    nums = nums.sort((a, b) => a - b);
    console.log(suchPair(nums, len, sum));
  }
}

function suchPair(nums, len, sum) {
  let i = 0;
  let j = len - 1;
  console.log(nums, len, sum);
  while (i < j) {
    if (nums[i] + nums[j] == sum) {
      return 1;
    } else if (nums[i] + nums[j] > sum) {
      j--;
    } else {
      i++;
    }
  }
  return -1;
  //   for (let i = 0; i < len; i++) {
  //     for (j = i; j < len; j++) {
  //       if (nums[i] + nums[j] == sum) {
  //         console.log(nums[i], nums[j]);
  //         return 1;
  //       }
  //     }
  //   }
  //   return -1;
}

if (process.env.LOGNAME === "aleem") {
  runProgram(`1
  7 3
  -7 -3 7 -6 -2 -6 5`);
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
