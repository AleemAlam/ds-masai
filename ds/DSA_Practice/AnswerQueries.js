function runProgram(input) {
  input = input.trim().split("\n");
  const len = Number(input[0].trim());
  const arr = input[1].trim().split(" ").map(Number);
  const queryLen = Number(input[2].trim());
  const queryArr = input[3].trim().split(" ").map(Number);
  query(arr, len, queryArr, queryLen);
}

function query(arr, len, queryArr, queryLen) {
  const obj = {};
  for (let i = 0; i < len; i++) {
    obj[arr[i]] = obj[arr[i]] ? obj[arr[i]] + 1 : 1;
  }

  for (let i = 0; i < queryLen; i++) {
    if (obj[queryArr[i]]) {
      console.log("YES");
    } else {
      console.log("NO");
    }
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
