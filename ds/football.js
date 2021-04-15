function runProgram(input) {
  input = input.trim().split("\n");
  let goals = Number(input[0].trim());
  let firstTeam = input[1].trim();
  let teamOne = 0;
  let teamTwo = 0;
  let secondTeam;
  for (let i = 1; i < goals; i++) {
    if (secondTeam == undefined && input[i] != input[i + 1]) {
      secondTeam = input[i + 1];
    }
    if (input[1] == firstTeam) {
      teamOne++;
    } else {
      teamTwo++;
    }
  }

  teamOne > teamTwo || secondTeam == undefined
    ? console.log(firstTeam)
    : console.log(secondTeam);
}

if (process.env.LOGNAME === "ellualeem") {
  runProgram(`1
ABC`);
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
