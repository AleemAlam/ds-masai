function runProgram(input) {
  input = input.trim().split("\n");
  const len = +input[0].trim();
  const arr = input[1].trim().split(" ").map(Number);
  const tests = +input[2].trim();
  let row = 3;
  for (let i = 0; i < tests; i++) {
    const [l, r] = input[row++].trim().split(" ");
    const newArr = [...arr];
    console.log(newArr.slice(l, r)?.reduce((a, b) => a + b));
    let sum = 0;
    for (let j = l - 1; j < r; j++) {
      sum = sum + arr[j];
    }
    console.log(sum);
  }
}

if (process.env.LOGNAME === "ellu") {
  runProgram(`4
  3 2 1 5
  4
  1 3
  2 4
  1 4
  3 3`);
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
