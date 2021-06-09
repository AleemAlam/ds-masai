function runProgram(input) {
  input = input.trim().split("\n");
  let target = +input[0].trim().split(" ");
  let row = 1;
  let arr = [];
  for (let i = 0; i < target; i++) {
    let [con, num] = input[row++].trim().split(" ").map(Number);
    if (con == 1) {
      arr.push(num);
    } else if (con == 2) {
      arr.pop();
    } else {
      if (arr.length > 0) console.log(arr[arr.length - 1]);
      else {
        console.log("Empty!");
      }
    }
  }
}

if (process.env.LOGNAME === "ellualeem") {
  runProgram(`6
  1 15
  1 20
  2
  3
  2
  3`);
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
