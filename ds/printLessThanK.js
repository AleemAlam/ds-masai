function runProgram(input) {
  input = input.trim().split("\n");
  let testCase = Number(input[0].trim());
  let row = 1;
  for (let i = 0; i < testCase; i++) {
    let len = Number(input[row++].trim());
    let numbers = input[row++].trim().split(" ").map(Number);
    let k = Number(input[row++].trim());
    console.log(checkLgtPsbNum(len, k, numbers));
  }
}

function checkLgtPsbNum(len, k, numbers) {
  let max = 0;
  for (let i = 0; i < len; i++) {
    for (let j = 0; j < len; j++) {
      if (numbers[i] + numbers[j] < k) {
        if (max < numbers[i] + numbers[j]) {
          max = numbers[i] + numbers[j];
        }
      }
    }
  }
  return max == 0 ? -1 : max;
}
if (process.env.LOGNAME === "ellualeem") {
  runProgram(`2
  5
  1 2 3 4 5
  7
  3
  30 10 20
  15`);
} else {
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
