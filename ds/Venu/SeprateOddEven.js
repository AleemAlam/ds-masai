function runProgram(input) {
  input = input.trim().split("\n");
  let testCase = +input[0].trim();
  let row = 1;
  for (let i = 0; i < testCase; i++) {
    let len = input[row++].trim().split(" ").map(Number);
    let arr = input[row++].trim().split(" ").map(Number);
    let k = +input[row++].trim();
    console.log(oddEven(arr, len, k));
  }
}
function oddEven(arr, len, k) {
  arr.sort((a, b) => a - b);
  let odd = [];
  let even = [];
  for (let i = 0; i < len; i++) {
    if (arr[i] % 2 == 0) {
      even.push(arr[i]);
    } else {
      odd.push(arr[i]);
    }
  }

  return k == 1 ? [...even, ...odd].join(" ") : [...odd, ...even].join(" ");
}
if (process.env.LOGNAME === "ellu") {
  runProgram(`2
    6
    9 3 5 10 7 4
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
