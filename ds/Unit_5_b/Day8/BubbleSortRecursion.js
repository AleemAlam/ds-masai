function runProgram(input) {
  input = input.trim().split("\n");

  const len = +input[0].trim();
  const arr = input[1].trim().split(" ").map(Number);
  console.log(bubbleSort(arr, len));
}

function bubbleSort(arr, len) {
  if (len == 1) {
    return arr.join(" ");
  }
  for (let i = 0; i < len - 1; i++) {
    if (arr[i] > arr[i + 1]) {
      let swap = arr[i];
      arr[i] = arr[i + 1];
      arr[i + 1] = swap;
    }
  }
  return bubbleSort(arr, len - 1);
}

if (process.env.LOGNAME === "ellu") {
  runProgram(`5
  3 5 0 9 8`);
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
