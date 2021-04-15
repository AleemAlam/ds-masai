function runProgram(input) {
  input = input.trim().split("\n");
  let n = Number(input[0].trim());
  let numbers = input[1].trim().split(" ").map(Number);
  for (let i = 0; i < n; i++) {
    for (let j = i; j < n; j++) {
      if (numbers[i] > numbers[j]) {
        let temp = numbers[i];
        numbers[i] = numbers[j];
        numbers[j] = temp;
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
