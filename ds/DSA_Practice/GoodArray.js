function runProgram(input) {
  input = input.trim().split("\n");
  const testCase = +input[0].trim();
  let row = 1;
  for (let i = 0; i < testCase; i++) {
    const len = +input[row++].trim();
    const arr = input[row++].trim().split(" ").map(Number);
    console.log(goodPair(arr, len));
  }
}

function goodPair(arr, len) {
  let count = 0;
  for (let i = 0; i < len; i++) {
    for (let j = 0; j < len; j++) {
      if (i != j && arr[i] == 2 * arr[j]) {
        count++;
      }
    }
  }
  return count;
}

if (process.env.LOGNAME === "ellu") {
  runProgram(`2
  5
  1 1 1 1 1
  6
  1 1 2 2 4 1 `);
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
