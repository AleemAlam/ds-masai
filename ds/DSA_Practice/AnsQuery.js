function runProgram(input) {
  input = input.trim().split("\n");
  const len = +input[0].trim();
  const arr = input[1].trim().split(" ").map(Number);
  const qLen = +input[2].trim();
  const qArr = input[3].trim().split(" ").map(Number);
  checkQArr(arr, qArr, len, qLen);
}

function checkQArr(arr, qArr, len, qLen) {
  let obj = {};
  for (let i = 0; i < len; i++) {
    obj[arr[i]] = obj[arr[i]] ? obj[arr[i]] + 1 : 1;
  }

  for (let i = 0; i < qLen; i++) {
    console.log(obj[qArr[i]] ? "YES" : "NO");
  }
}

if (process.env.LOGNAME === "ellu") {
  runProgram(`5
    1 2 3 4 5
    3
    3 5 7`);
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
