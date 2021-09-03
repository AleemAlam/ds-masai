function runProgram(input) {
  input = input.trim().split("\n");
  let testCase = Number(input[0]);
  let row = 1;
  for (let i = 0; i < testCase; i++) {
    let n = Number(input[row++]);
    let arr = input[row++].trim().split(" ").map(Number);
    let left = 0;
    let right = n - 1;
    let harry = 0;
    let john = 0;
    let harrySum = 0;
    let johnSum = 0;
    let flag = true;
    while (left <= right) {
      if (flag) {
        harrySum = 0;
        harrySum = harrySum + arr[left++];
        while (harrySum <= johnSum && left <= right) {
          harrySum = harrySum + arr[left++];
        }
        harry = harry + harrySum;
        flag = false;
      } else {
        johnSum = 0;
        johnSum = johnSum + arr[right--];
        while (johnSum <= harrySum && left <= right) {
          johnSum = johnSum + arr[right--];
        }
        john = john + johnSum;
        flag = true;
      }
    }
    console.log(harry, john);
  }
}

if (process.env.LOGNAME === "ellu") {
  runProgram(`1
    11
    3 1 4 1 5 9 2 6 5 3 5`);
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
