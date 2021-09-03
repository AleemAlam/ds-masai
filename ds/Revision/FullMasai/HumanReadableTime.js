function runProgram(input) {
  let minutes = +input.trim();
  console.log(humanReadableTime(minutes));
}
function humanReadableTime(minutes) {
  let hours = Math.floor(minutes / 60);
  minutes = minutes % 60;
  return `${hours > 1 ? hours + "hrs" : hours + "hr"} ${
    minutes >= 1 ? minutes + "mins" : "00mins"
  }`;
}
if (process.env.LOGNAME === "ellu") {
  runProgram(`61`);
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
