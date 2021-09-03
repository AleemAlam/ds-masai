function runProgram(input) {
  input = input.trim().split("\n");
  const str1 = input[0].trim().split("");
  const str2 = input[1].trim().split("");
  console.log(track(str1, str2));
}
function track(str1, str2) {
  const obj = {};
  for (let i = 0; i < str1.length; i++) {
    obj[str1[i]] = i;
  }
  let ans = 0;
  let prev = 0;
  for (let i = 0; i < str2.length; i++) {
    const out = Math.abs(prev - obj[str2[i]]);
    prev = obj[str2[i]];
    ans += out;
  }
  return ans;
}
if (process.env.LOGNAME === "ellu") {
  runProgram(`pqrstuvwxyzabcdefghijklmno
    hello`);
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
