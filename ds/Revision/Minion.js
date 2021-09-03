function runProgram(input) {
  input = input.trim().split("\n");
  let len = +input[0].trim();
  let str = input[1].trim();
  console.log(warOfMinions(str));
}

function warOfMinions(str) {
  let arr = [];
  for (let i = 0; i < str.length; ++i) {
    if (!arr.length) {
      arr.push(str[i]);
    } else {
      str[i] == arr[arr.length - 1] ? arr.pop() : arr.push(str[i]);
    }
  }
  return arr.length > 0 ? arr.join("") : -1;
}

if (process.env.LOGNAME === "ellu") {
  runProgram(`2
aa`);
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
