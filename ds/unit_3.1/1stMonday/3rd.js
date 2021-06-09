function runProgram(input) {
  input = input.trim().split("\n");
  let testCases = Number(input[0]);
  let lines = 1;

  for (let i = 0; i < testCases; i++) {
    let [len, sum] = input[lines++].trim().split(" ").map(Number);
    let arr = input[lines++].trim().split(" ").map(Number);

    console.log(firstRepeat(arr, len, sum));
  }
}

const firstRepeat = (arr, len, sum) => {
  for (let j = 0; j < len; j++) {
    for (let k = j + 1; k < len; k++) {
      if (arr[j] + arr[k] == sum) {
        return `${j} ${k}`;
      }
    }
  }
  return "-1 -1";
};

if (process.env.LOGNAME === "ellualeem") {
  runProgram(`3
  4 9
  2 7 11 15
  5 10
  1 2 3 5 5
  2 100
  48 49`);
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
