function runProgram(input) {
  input = input.trim().split("\n");
  let target = +input[0].trim().split(" ");
  let row = 1;
  for (let i = 0; i < target; i++) {
    let [len, sum] = input[row++].trim().split(" ").map(Number);
    let arr = input[row++].trim().split(" ").map(Number);
    console.log(subArraysLessM(arr, len, sum));
  }
}

const subArraysLessM = (arr, len, k) => {
  let start = 0,
    end = 0;
  let count = 0,
    sum = arr[0];

  while (start < len && end < len) {
    if (sum < k) {
      end++;
      count += end - start;
      if (end < len) sum += arr[end];
    } else {
      sum -= arr[start];
      start++;
    }
  }
  return count;
};

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
