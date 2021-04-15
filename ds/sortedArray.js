function runProgram(input) {
  input = input.trim().split("\n");
  let [len, k] = input[0].trim().split(" ").map(Number);
  let arr = input[1].trim().split(" ").map(Number);

  let newArr = [];

  for (let i = 0; i < len; i++) {
    newArr.push({ name: arr[i], value: arr[i] % k });
  }
  newArr.sort((a, b) => a.value - b.value);
  let ans = [];
  for (let i = 0; i < len; i++) {
    ans.push(newArr[i].name);
  }
  console.log(ans.join(" "));
}
if (process.env.LOGNAME === "ellualeem") {
  runProgram(`5 6
  12 18 17 65 46`);
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
