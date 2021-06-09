function runProgram(input) {
  let arr = input.split("");
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === arr[i + 1]) {
      arr.splice(i, 2);
      i += -1;
    }
  }
  if (arr.length === 0) {
    console.log("Empty String");
  } else {
    console.log(arr.join(""));
  }
}

if (process.env.LOGNAME === "ellualeem") {
  runProgram(`fsjkfjkfnsnsdjfnbdsssssssssfjldnfakdadjssahraejrrrrrrrasdnjjjj`);
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
