function runProgram(input) {
  input = input.trim().split(/[\n\r]+/);

  let test = +input[0];

  for (let z = 0, line = 1; z < test; z++) {
    let [row, col] = input[line++].trim().split(" ").map(Number);
    let arr = [];
    for (let i = 1; i <= row; i++) {
      arr.push(input[line++].trim().split(" ").map(Number));
    }
    let left = 0;
    let right = col - 1;
    let top = 0;
    let bottom = row - 1;

    let ans = [];
    let count = 0;
    while (left <= right && top <= bottom) {
      for (let i = top; i <= bottom && count < row * col; i++) {
        ans.push(arr[i][left]);
        count++;
      }
      left++;

      for (let i = left; i <= right && count < row * col; i++) {
        ans.push(arr[bottom][i]);
        count++;
      }
      bottom--;
    }
    console.log(ans.join(" "));
  }
}

if (process.env.LOGNAME === "ellu") {
  runProgram(`
    2
    3 3
    1 2 3
    4 5 6
    7 8 9
    4 3
    1 2 3
    4 5 6
    7 8 9
    10 11 12`);
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
