let greatest;
let flag;
function runProgram(input) {
  input = input.trim().split("\n");
  const testCase = +input[0].trim();
  let row = 1;
  for (let i = 0; i < testCase; i++) {
    const len = +input[row++].trim();
    const arr = input[row++].trim().split(" ").map(Number);
    greatest = arr.sort((a, b) => a - b).pop();
    flag = false;
    subSequenceArr(arr, 0, [], 0);
    console.log(flag ? "Yes" : "No");
  }
}
const subSequenceArr = (arr, index, subSeqArr, subIndex) => {
  if (index == arr.length) {
    const sum =
      subSeqArr.length > 0 ? subSeqArr.reduce((a, b) => a + b) : undefined;

    if (sum == greatest) {
      flag = true;
    }
    return;
  }
  subSequenceArr(arr, index + 1, subSeqArr, subIndex);
  subSeqArr[subIndex] = arr[index];
  subSequenceArr(arr, index + 1, subSeqArr, subIndex + 1);
};

if (process.env.LOGNAME === "ellu") {
  runProgram(`3
    3
    1 2 3
    4
    0 1 2 3
    4
    2 3 6 10`);
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
