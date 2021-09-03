function runProgram(input) {
  input = input.trim().split("\n");
  const [len, k] = input[0].trim().split(" ").map(Number);
  const arr = input[1].trim().split(" ").map(Number);
  console.log(rotation(arr, len, k));
}

function rotation(arr, len, k) {
  while (k > 0) {
    arr.push(arr.shift());
    k--;
  }
  return arr.join(" ");
}
if (process.env.LOGNAME === "ellu") {
  runProgram(`6 4
    1 2 5 4 0 6`);
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
