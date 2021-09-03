function runProgram(input) {
  input = input.trim().split("\n");
  const text1 = input[0].trim();
  const text2 = input[1].trim();

  const memo = new Map();
  console.log(
    recursion(text1, text2, text1.length - 1, text2.length - 1, memo)
  );
}
function recursion(text1, text2, index1, index2, memo) {
  if (index1 < 0 || index2 < 0) return 0;
  const key = index1 + "#" + index2;
  if (memo.has(key)) return memo.get(key);
  let result;
  if (text1.charAt(index1) === text2.charAt(index2)) {
    result = recursion(text1, text2, index1 - 1, index2 - 1, memo) + 1;
  } else {
    result = Math.max(
      recursion(text1, text2, index1, index2 - 1, memo),
      recursion(text1, text2, index1 - 1, index2, memo)
    );
  }
  memo.set(key, result);
  return result;
}
if (process.env.LOGNAME === "ellu") {
  runProgram(`AGGTAB
  GXTXAYB`);
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
