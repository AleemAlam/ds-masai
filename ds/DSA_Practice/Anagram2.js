function runProgram(input) {
  input = input.trim().split("\n");
  const len = +input[0].trim();
  const arr = [];
  let row = 1;
  for (let i = 0; i < len * 2; i++) {
    const str = input[row++].trim();
    arr.push(str);
  }
  for (let i = 0; i < arr.length; i += 2) {
    if (
      arr[i].split("").sort().join("") == arr[i + 1].split("").sort().join("")
    ) {
      console.log("True");
    } else {
      console.log("False");
    }
  }
}
if (process.env.LOGNAME === "ellu") {
  runProgram(`2
    abcd
    dcab
    aa
    aaa`);
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
