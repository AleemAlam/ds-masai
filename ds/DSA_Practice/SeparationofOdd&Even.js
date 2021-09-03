function runProgram(input) {
  input = input.trim().split("\n");
  const testCase = +input[0].trim();
  let row = 1;
  for (let i = 0; i < testCase; i++) {
    const len = +input[row++].trim();
    const arr = input[row++].trim().split(" ").map(Number);
    const type = +input[row++].trim();
    console.log(separateEvenOdd(arr, len, type));
  }
}

const separateEvenOdd = (arr, len, type) => {
  arr.sort((a, b) => a - b);
  const evenArr = [];
  const oddArr = [];
  for (let i = 0; i < len; i++) {
    if (arr[i] % 2 == 0) {
      evenArr.push(arr[i]);
    } else {
      oddArr.push(arr[i]);
    }
  }
  if (type == 1) {
    return (evenArr.join(" ") + " " + oddArr.join(" ")).trim();
  }
  return (oddArr.join(" ") + " " + evenArr.join(" ")).trim();
};

if (process.env.LOGNAME === "ellu") {
  runProgram(`2
  6
  1 3 5 2 7 4
  1
  6 
  1 3 5 2 7 4
  2`);
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
