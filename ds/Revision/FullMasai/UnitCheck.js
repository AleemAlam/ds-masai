function runProgram(input) {
  let cost = +input.trim();
  console.log(checkCost(cost));
}

function checkCost(cost) {
  let units = 0;
  cost -= 80;
  if (cost > 150) {
    cost -= 150;
    units += 50;

    if (cost > 500) {
      cost -= 500;
      units += 100;
      if (cost > 0) {
        units += Math.floor(cost / 10);
      }
    } else {
      units += Math.floor(cost / 5);
    }
  } else {
    units += Math.floor(cost / 3);
  }
  return units;
}

if (process.env.LOGNAME === "ellu") {
  runProgram(`455`);
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
