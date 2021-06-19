function runProgram(input) {
  input = input.trim().split(/[\n\r]+/);

  let test = +input[0];

  for (let z = 0, line = 1; z < test; z++) {
    let N = +input[line++];
    let arr = input[line++].trim().split(" ").map(Number);
    let sum = 0;

    for (let i = 0; i < N; i++) {
      let flag = false;
      for (j = i + 1; j < N; j++) {
        if (arr[i] < arr[j]) {
          flag = true;
          break;
        }
      }
      if (flag) {
        let flag1 = true;
        for (let k = j + 1; k < N; k++) {
          if (arr[k] < arr[j]) {
            sum += arr[k];
            flag1 = false;
            break;
          }
        }
        if (flag1) {
          sum += -1;
        }
      } else {
        sum += -1;
      }
    }
    console.log(sum);
  }
}
if (process.env.LOGNAME === "ellu") {
  runProgram(`1
  6
  5 1 6 2 5 1`);
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
