function runProgram(input) {
  input = input.trim().split("\n");
  const len = Number(input[0].trim());
  const arr = input[1].trim().split(" ").map(Number);
  console.log(goodSubArray(arr, len));
}

function goodSubArray(arr, len) {
  let count = 0;
  for (let i = 0; i < len; i++) {
    count++;
    for (let j = i + 1; j < len; j++) {
      if (arr[i] <= arr[j]) {
        count++;
      } else {
        break;
      }
    }
  }
  return count;
}

if (process.env.LOGNAME === "ellu") {
  runProgram(`3
  3 2 1`);
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
