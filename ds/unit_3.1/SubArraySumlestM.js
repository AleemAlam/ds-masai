function runProgram(input) {
  input = input.trim().split("\n");
  const testCase = Number(input[0].trim());
  let line = 1;
  for (let i = 1; i <= testCase; i++) {
    const [len, m] = input[line++].trim().split(" ").map(Number);
    const arr = input[line++].trim().split(" ").map(Number);
    console.log(checkFunc(arr, len, m));
  }
}

const checkFunc = (arr, n, m) => {
  let count = 0;

  for (let i = 0; i < n; i++) {
    let sum = 0;
    for (let j = i; j < n; j++) {
      sum += arr[j];

      if (sum < m) count++;
    }
  }
  return count;
};

// function findSubarraySum(arr, n, m) {
//   let aPointer = 0;
//   let bPointer = 0;
//   let sum = 0;
//   let count = 0;

//   while (bPointer < n) {
//     sum += arr[bPointer];
//     if (sum < m) {
//       bPointer++;
//       count++;
//     } else {
//       sum = 0;
//       aPointer++;
//       bPointer = aPointer;
//     }
//   }
//   return count;
// }
if (process.env.LOGNAME === "ellualeem") {
  runProgram(`1
  5 5
  1 5 1 3 2`);
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
