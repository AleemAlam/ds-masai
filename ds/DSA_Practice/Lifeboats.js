function runProgram(input) {
  input = input.trim().split("\n");
  const testCase = +input[0].trim();
  let row = 1;
  for (let i = 0; i < testCase; i++) {
    const [len, k] = input[row++].trim().split(" ").map(Number);
    const arr = input[row++].trim().split(" ").map(Number);
    console.log(lifeBoat(arr, len, k));
  }
}

const lifeBoat = (arr, n, k) => {
  arr.sort((a, b) => a - b);
  let aPointer = 0;
  let bPointer = n - 1;
  let ans = n;
  while (aPointer < bPointer) {
    if (arr[aPointer] + arr[bPointer] <= k) {
      ans--;
      aPointer++;
    } else {
      bPointer--;
    }
  }
  return ans;
};

if (process.env.LOGNAME === "ellu") {
  runProgram(`2
    4 5
    3 5 3 4
    4 3
    1 2 2 3`);
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
