function runProgram(input) {
  input = input.trim().split("\n");
  const testCase = +input[0].trim();
  let row = 1;
  for (let i = 0; i < testCase; i++) {
    const [len, k] = input[row++].trim().split(" ").map(Number);
    const arr = input[row++].trim().split(" ").map(Number);
    console.log(differenceOfK(arr, len, k));
  }
}

function differenceOfK(arr, len, k) {
  let aPointer = 0;
  let bPointer = 1;
  while (aPointer < len && bPointer < len) {
    if (arr[bPointer] - arr[aPointer] > k) {
      aPointer++;
    } else if (arr[bPointer] - arr[aPointer] < k) {
      bPointer++;
    } else if (arr[bPointer] - arr[aPointer] == k) {
      return "Yes";
    }
  }
  return "No";
}

if (process.env.LOGNAME === "ellu") {
  runProgram(`2
  4 5
  -8 -5 -3 0
  5 6
  -7 -4 -3 6 7`);
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
