function runProgram(input) {
  input = input.trim().split("\n");
  que2 = [];
  for (let i = 1; i < input.length; i++) {
    const [condition, val] = input[i].trim().split(" ");
    if (condition == 0) {
      const que1 = [];
      que1.push(val);
      que2 = [...que1, ...que2];
    } else if (condition == 1) {
      console.log(que2[0]);
    } else {
      que2.shift();
    }
  }
}

// que1 = [1]
// que2 =[1,2,3,4]

if (process.env.LOGNAME === "ellu") {
  runProgram(`6
    0 1
    0 2
    0 3
    1 
    2
    1`);
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
