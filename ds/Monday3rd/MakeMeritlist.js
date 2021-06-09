function runProgram(input) {
  input = input.trim().split("\n");
  input.shift();
  let newIn = input.map((item) => {
    let [name, height, weight, iq] = item.trim().split(" ");
    return {
      name: name,
      height: Number(height),
      weight: Number(weight),
      iq: Number(iq),
    };
  });
  console.log(newIn);
  for (let i = 0; i < newIn.length; i++) {
    for (let j = i + 1; j < newIn.length; j++) {
      if (newIn[j].iq > newIn[i].iq) {
        let swap = newIn[i];
        newIn[i] = newIn[j];
        newIn[j] = swap;
      } else if (newIn[j].iq == newIn[i].iq) {
        if (newIn[j].height > newIn[i].height) {
          let swap = newIn[i];
          newIn[i] = newIn[j];
          newIn[j] = swap;
        } else if (newIn[j].height == newIn[i].height) {
          if (newIn[j].weight < newIn[i].weight) {
            let swap = newIn[i];
            newIn[i] = newIn[j];
            newIn[j] = swap;
          } else if (newIn[j].weight == newIn[i].weight) {
            if (newIn[j].name < newIn[i].name) {
              let swap = newIn[i];
              newIn[i] = newIn[j];
              newIn[j] = swap;
            }
          }
        }
      }
    }
  }
  const len = newIn.length >= 8 ? 8 : newIn.length;
  for (let i = 0; i < len; i++) {
    console.log(newIn[i].name);
  }
}
if (process.env.LOGNAME === "ellualeem") {
  runProgram(`10
    jack 158 85 112
    john 168 74 124
    arti 148 65 120
    bhuvan 182 84 124
    navi 182 84 124
    vijay 175 88 115
    amit 180 89 119
    kevin 182 77 120
    rohit 174 85 100
    vivek 184 75 111`);
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
