function runProgram(input) {
  input = input.trim().split("\n");
  console.log(distinctThree(input[1].trim().split(" ").map(Number)));
}

function distinctThree(arr) {
  let first = Number.MIN_VALUE;
  let second = Number.MIN_VALUE;
  let third = Number.MIN_VALUE;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > first) {
      third = second;
      second = first;
      first = arr[i];
    } else if (arr[i] > second) {
      third = second;
      second = arr[i];
    } else if (arr[i] > third) {
      third = arr[i];
    }
  }
  return [first, second, third];
}

if (process.env.LOGNAME === "ellu") {
  runProgram(`8
  1 2 3 4 2 1 6 5`);
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
