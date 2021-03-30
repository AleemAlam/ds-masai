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

function pairs(nums, len, sum) {
  let obj = {};
  for (let i = 0; i < len; i++) {
    if (!obj[nums[i]]) {
      obj[nums[i]] = i;
    } else {
      obj[nums[i]] += i;
    }
  }
  // console.log(obj, nums);
  for (let i = 0; i < len; i++) {
    let other = sum - nums[i];
    if (obj[other] && obj[other] != i) {
      return 1;
    }
  }

  return -1;
}

if (process.env.LOGNAME === "aleem") {
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

// function runProgram(input) {
//   input = input.trim().split("\n");
//   const testCase = Number(input[0].trim().split(" "));
//   let row = 1;
//   for (let i = 1; i <= testCase; i++) {
//     let [len, sum] = input[row++].trim().split(" ").map(Number);
//     let nums = input[row++].trim().split(" ").map(Number);
//     console.log(pairs(nums, len, sum));
//   }
// }

// function pairs(nums, len, sum) {
//   for (let i = 0; i < len; i++) {
//     let other = sum - nums[i];
//     if (nums.indexOf(other) != -1 && nums.indexOf(other) != i) {
//       return 1;
//     }
//   }
//   return -1;
// }

// if (process.env.LOGNAME === "aleem") {
//   runProgram(`10
//   3 -9
//   -1 3 -1
//   10 -13
//   -7 -6 4 10 -5 0 -3 1 -6 5
//   4 -9
//   -2 2 0 -4
//   2 3
//   0 0
//   8 2
//   5 -6 7 6 0 3 -4 8
//   1 -7
//   0
//   8 -6
//   4 7 4 -1 5 4 -6 -8
//   6 4
//   6 -1 -5 -5 2 -5
//   4 -4
//   0 -1 3 -2
//   1 3
//   -1`);
// } else {
//   process.stdin.resume();
//   process.stdin.setEncoding("ascii");
//   let read = "";
//   process.stdin.on("data", function (input) {
//     read += input;
//   });
//   process.stdin.on("end", function () {
//     read = read.replace(/\n$/, "");
//     read = read.replace(/\n$/, "");
//     runProgram(read);
//   });
//   process.on("SIGINT", function () {
//     read = read.replace(/\n$/, "");
//     runProgram(read);
//     process.exit(0);
//   });
// }
