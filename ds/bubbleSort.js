function runProgram(input) {
  input = input.trim().split("\n");
  let n = Number(input[0].trim());
  let numbers = input[1].trim().split(" ").map(Number);

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n - 1; j++) {
      if (numbers[j] > numbers[j + 1]) {
        let temp = numbers[j];
        numbers[j] = numbers[j + 1];
        numbers[j + 1] = temp;
      }
    }
  }
  console.log(numbers.join(" "));
}
if (process.env.LOGNAME === "ellualeem") {
  runProgram(`5
  3 5 0 9 8`);
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
