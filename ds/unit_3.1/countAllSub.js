function runProgram(input) {
  input = input.trim().split("\n");
  const testCase = Number(input[0].trim());
  let line = 1;
  for (let i = 1; i <= testCase; i++) {
    const len = Number(input[line++].trim());
    const arr = input[line++].trim().split(" ").map(Number);
    console.log(longestSequence(arr));
  }
}

var longestSequence = function (arr) {
  let set = new Set();
  let aPointer = 0;
  let bPointer = 0;
  let max = 0;

  console.log(set);
  while (bPointer < arr.length) {
    if (!set.has(arr[bPointer])) {
      set.add(arr[bPointer]);
      bPointer++;
      max = Math.max(set.size, max);
    } else {
      set.delete(arr[aPointer]);
      aPointer++;
    }
  }
  return max;
};
if (process.env.LOGNAME === "ellualeem") {
  runProgram(`3
  8
  1 2 1 3 2 7 4 2
  5
  1 2 1 3 4
  4
  1 2 2 1`);
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
