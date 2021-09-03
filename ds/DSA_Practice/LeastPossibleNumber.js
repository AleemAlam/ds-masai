function runProgram(input) {
  input = input.trim().split("\n");
  const testCase = +input[0].trim();
  let row = 1;
  for (let i = 0; i < testCase; i++) {
    const len = +input[row++].trim();
    const arr = input[row++].trim().split(" ").map(Number);
    console.log(leastNumber(arr, len));
  }
}

function leastNumber(arr, len) {
  let smallest;
  for (let i = 0; i < len; i++) {
    if ((smallest == undefined || smallest > arr[i]) && arr[i] > 0) {
      smallest = arr[i];
    }
  }

  let ans = [];
  let check = false;
  for (let i = 0; i < len; i++) {
    if (smallest != arr[i] || check) {
      ans.push(arr[i]);
    } else {
      check = true;
    }
  }
  ans.sort((a, b) => a - b);

  return smallest.toString() + ans.join("");
}
if (process.env.LOGNAME === "ellu") {
  runProgram(`3
  4
  2 1 0 0
  4
  1 4 2 3
  4
  5 2 3 2`);
} else {
  process.stdin.resume();
  process.stdin.setEncoding("ascii");
  let read = "";
  process.stdin.on("data", function (str) {
    read += str;
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
