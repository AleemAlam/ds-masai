function runProgram(input) {
  input = input.trim().split("\n");
  const club1 = [];
  const club2 = [];
  const club3 = [];
  const club4 = [];
  const master = [];
  for (let i = 1; i < input.length; i++) {
    const [operation, club, roll] = input[i].trim().split(" ");
    if (operation == "E") {
      switch (club) {
        case "1":
          if (master.length == 0 || master.indexOf(club) == -1) {
            master.push(club);
          }
          club1.push([club, roll].join(" "));
          break;
        case "2":
          if (master.length == 0 || master.indexOf(club) == -1) {
            master.push(club);
          }
          club2.push([club, roll].join(" "));
          break;
        case "3":
          if (master.length == 0 || master.indexOf(club) == -1) {
            master.push(club);
          }
          club3.push([club, roll].join(" "));
          break;
        case "4":
          if (master.length == 0 || master.indexOf(club) == -1) {
            master.push(club);
          }
          club4.push([club, roll].join(" "));
          break;
      }
    } else {
      if (master[0] == "1") {
        console.log(club1.shift());
        if (club1.length == 0) {
          master.shift();
        }
      } else if (master[0] == "2") {
        console.log(club2.shift());
        if (club2.length == 0) {
          master.shift();
        }
      } else if (master[0] == "3") {
        console.log(club3.shift());
        if (club3.length == 0) {
          master.shift();
        }
      } else if (master[0] == "4") {
        console.log(club4.shift());
        if (club4.length == 0) {
          master.shift();
        }
      }
    }
  }
}

if (process.env.LOGNAME === "ellu") {
  runProgram(`23
  E 3 1
  D
  E 3 1
  E 3 2
  E 2 1
  D
  D
  E 1 1
  E 1 2
  E 4 1
  D
  E 4 2
  E 1 3
  E 2 1
  D
  D
  D
  D
  E 2 2
  E 2 3
  E 2 4
  E 4 1
  E 1 1`);
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
