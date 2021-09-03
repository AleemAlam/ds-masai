function runProgram(input) {
  input = input.trim();
  numberOfSubstrings(input);
}

let numberOfSubstrings = (str) => {
  let count = 0;
  let vowels = { a: 0, u: 0, i: 0, o: 0 };
  let low = 0;
  let high = -1;
  while (high < str.length) {
    if (vowels.a === 0 || vowels.i === 0 || vowels.o === 0 || vowels.u === 0) {
      high += 1;
      vowels[str[high]] += 1;
    } else {
      count += str.length - high;
      vowels[str[low]] -= 1;
      low += 1;
    }
  }
  console.log(count);
};

if (process.env.LOGNAME === "ellu") {
  runProgram(`dangerouscovid`);
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
