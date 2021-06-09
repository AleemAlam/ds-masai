function runProgram(input) {
  var input = input.split("\n");
  let size = +input[0];
  let arra = input[1].trim().split(" ").map(Number);
  let index = new Array(size).fill().map((e, i) => i);
  for (let i = 0; i < arra.length - 1; i++) {
    for (let j = 0; j < arra.length - 1 - i; j++) {
      if (arra[j] > arra[j + 1]) {
        [arra[j], arra[j + 1]] = [arra[j + 1], arra[j]];
        let temp = index[j];
        index[j] = index[j + 1];
        index[j + 1] = temp;
      }
    }
  }
  console.log(index.join(" "));
}

if (process.env.LOGNAME === "ellualeem") {
  runProgram(`5
4 5 3 7 1`);
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
