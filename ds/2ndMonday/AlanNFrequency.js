function runProgram(input) {
  input = input.trim().split("\n");
  let str = input[1].trim();

  let obj = {};
  for (let i = 0; i < str.length; i++) {
    if (obj[str[i]]) {
      obj[str[i]] += 1;
    } else {
      obj[str[i]] = 1;
    }
  }
  let arr = [];
  for (key in obj) {
    arr.push({ name: key, value: obj[key] });
  }

  arr = arr.sort((a, b) => {
    if (a.name < b.name) {
      return -1;
    }
    if (a.name > b.name) {
      return 1;
    }
  });
  for (let i = 0; i < arr.length; i++) {
    console.log(`${arr[i].name}-${arr[i].value}`);
  }
}
if (process.env.LOGNAME === "aleem") {
  runProgram(`4
  amanb`);
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
