function runProgram(input) {
  input = input.trim().split("\n");
  // subStrExtra(input[1].trim(), "");
  allSubSequence(input[1].trim(), -1, "");
}

function allSubSequence(str, index, res) {
  let n = str.length;
  if (index == n) {
    return;
  }
  if (res != "") console.log(res);
  for (let i = index + 1; i < n; i++) {
    res += str[i];
    allSubSequence(str, i, res);
    res = res.substring(0, res.length - 1);
  }
}

function subStrExtra(str, res) {
  if (str.length === 0) {
    console.log(res);
    return;
  }
  subStrExtra(str.substring(1), res);
  subStrExtra(str.substring(1), res + str[0]);
}

if (process.env.LOGNAME === "ellu") {
  runProgram(`3
    abcd`);
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
