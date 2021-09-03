function runProgram(input) {
  num = +input.trim();
  console.log(piratedromes("", num, 0, []).join(" "));
}

function piratedromes(result, n, diff, ans) {
  if (n) {
    let ch = "0";
    if (result == "") {
      ch = "1";
    }
    while (ch <= "9") {
      let absDiff;
      if ((n & 1) != 0) {
        absDiff = diff + (ch - "0");
      } else {
        absDiff = diff - (ch - "0");
      }
      piratedromes(result + ch, n - 1, absDiff, ans);
      ch++;
    }
  } else if (n == 0 && Math.abs(diff) == 0) {
    ans.push(result);
  }
  return ans;
}

if (process.env.LOGNAME === "ellu") {
  runProgram(`3`);
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
