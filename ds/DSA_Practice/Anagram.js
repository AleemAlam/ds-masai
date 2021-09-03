function runProgram(input) {
  input = input.trim().split("\n");
  const len = +input[0].trim();
  const arr = [];
  const ans = [];
  let row = 1;
  for (let i = 0; i < len; i++) {
    const str = input[row++].trim();
    arr.push(str);
  }
  ans.push(arr[0]);
  for (let i = 1; i < arr.length; i++) {
    if (
      arr[i].split("").sort().join("") !== arr[i - 1].split("").sort().join("")
    ) {
      ans.push(arr[i]);
    }
  }
  ans.sort();
  console.log(ans.length);
  for (let i = 0; i < ans.length; i++) {
    console.log(ans[i]);
  }
}
if (process.env.LOGNAME === "ellu") {
  runProgram(`5
  eodc
  odec
  code
  baca
  aabc`);
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
