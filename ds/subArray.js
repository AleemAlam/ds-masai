function runProgram(input) {
  input = input.trim().split("\n");
  const testCase = Number(input[0].trim().split(" "));
  let row = 1;
  for (let j = 1; j <= testCase; j++) {
    let ans = false;
    let [len, sum] = input[row++].trim().split(" ").map(Number);
    let nums = input[row++].trim().split(" ").map(Number);
    subArray(nums, len, sum);
  }
}

function subArray(nums, len, sum) {
  // let obj = {};
  // for (let i = 0; i < len; i++) {
  //   if (!obj[nums[i]]) {
  //     obj[nums[i]] = i;
  //   } else {
  //     obj[nums[i]] += i;
  //   }
  // }
  // for (let i = 0; i < len; i++) {
  //   let other = sum - nums[i];
  //   if (obj[other] && obj[other] != i) {
  //     return 1;
  //   }
  // }
  // return -1;
  for (let i = 0; i < len; i++) {
    let arr = [nums[i]];
    for (let j = 0; j < len; j++) {
      arr.push(nums[j]);
    }
    console.log(arr);
  }
}

function arrSum(arr) {
  let sum = arr[0];
  for (let i = 1; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}

if (process.env.LOGNAME === "aleem") {
  runProgram(`3
  5 3
  1 2 1 3 4
  4 5
  1 2 1 3
  3 2
  1 2 1`);
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
