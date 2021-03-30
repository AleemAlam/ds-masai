function runProgram(input) {
  input = input.trim().split("\n");
  input.shift();
  let newIn = input.map((item) => {
    let [name, marks] = item.trim().split(" ");
    return { name: name, marks: Number(marks) };
  });
  for (let i = 0; i < newIn.length; i++) {
    for (let j = i + 1; j < newIn.length; j++) {
      if (newIn[j].marks > newIn[i].marks) {
        let swap = newIn[i];
        newIn[i] = newIn[j];
        newIn[j] = swap;
      } else if (newIn[j].marks == newIn[i].marks) {
        if (newIn[j].name < newIn[i].name) {
          let swap = newIn[i];
          newIn[i] = newIn[j];
          newIn[j] = swap;
        }
      }
    }
  }
  let rank = 1;
  newIn.forEach((item, i) => {
    if (i === 0) {
      console.log(`${rank} ${item.name}`);
    } else if (item.marks === newIn[i - 1].marks) {
      console.log(`${rank} ${item.name}`);
    } else {
      rank = i + 1;
      console.log(`${rank} ${item.name}`);
    }
  });
}
if (process.env.LOGNAME === "aleem") {
  runProgram(`6
rancho 45
chatur 32
raju 30
farhan 28
virus 32
joy 45`);
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
