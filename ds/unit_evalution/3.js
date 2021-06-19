function runProgram(input) {
  input = input.trim().split("\n");
  const testCase = +input[0];
  let row = 1;
  let consonants = "bcdfghjklmnpqrstvwxyz";
  for (let k = 0; k < testCase; k++) {
    const [len, strLen] = input[row++].trim().split(" ").map(Number);
    const arr = [];

    for (let i = 0; i < len; i++) {
      const str = input[row++].trim();
      let consonant = 0;
      for (let l = 0; l < strLen; l++) {
        if (consonants.includes(str[l])) {
          consonant++;
        }
      }
      arr.push({ str, consonant });
    }
    for (let i = 0; i < arr.length; i++) {
      for (let j = i + 1; j < arr.length; j++) {
        if (arr[j].consonant > arr[i].consonant && arr[i].consonant % 2 == 0) {
          let swap = arr[i];
          arr[i] = arr[j];
          arr[j] = swap;
        } else if (arr[j].consonant % 2 == 1 && arr[i].consonant % 2 == 0) {
          let swap = arr[i];
          arr[i] = arr[j];
          arr[j] = swap;
        }
      }
    }
    arr.map((item) => console.log(item.str));
  }
}
if (process.env.LOGNAME === "ellu") {
  runProgram(`2
    4 4
    eaed
    fgha
    acdf
    bbba
    3 4
    ffss
    aaaa
    fffa`);
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
