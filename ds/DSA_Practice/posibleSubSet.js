function runProgram(input) {
  const n = +input.trim();
  const arr = [];
  for (let i = 1; i <= n; i++) {
    arr.push(i);
  }
  allSubSequence(arr.join(""), -1, "");
}

function allSubSequence(str, index, res) {
  let n = str.length;
  if (index == n) {
    return;
  }
  console.log(res.split("").join(" "));
  for (let i = index + 1; i < n; i++) {
    res += str[i];
    allSubSequence(str, i, res);
    res = res.substring(0, res.length - 1);
  }
}

if (process.env.LOGNAME === "ellu") {
  runProgram(`3`);
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
