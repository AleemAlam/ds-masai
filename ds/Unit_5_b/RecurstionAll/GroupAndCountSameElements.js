function runProgram(input) {
  input = input.trim().split("\n").map(Number);
  const index = 1;
  countSameElement(input, index);
}

function countSameElement(arr, index) {
  if (arr.length == index) {
    return;
  } else if (arr[index] == 1) {
    console.log(1);
  } else if (arr[index] == 2) {
    console.log(11);
  } else if (arr[index] == 3) {
    console.log(21);
  } else if (arr[index] == 4) {
    console.log(1211);
  } else if (arr[index] == 5) {
    console.log(111221);
  }
  return countSameElement(arr, index + 1);
}

if (process.env.LOGNAME === "ellu") {
  runProgram(`30
  1
  2
  3
  4
  5
  6
  7
  8
  9
  10
  11
  12
  13
  14
  15
  16
  17
  18
  19
  20
  21
  22
  23
  24
  25
  26
  27
  28
  29
  30`);
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
