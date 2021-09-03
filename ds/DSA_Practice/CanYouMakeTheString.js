function runProgram(input) {
  input = input.trim().split("\n");
  let test = input[0];
  for (let x = 0, line = 1; x < test; x++) {
    let strX = input[line++].trim();
    let strY = input[line++].trim();
    let obj1 = {};
    for (key of strX) {
      obj1[key] ? obj1[key]++ : (obj1[key] = 1);
    }
    let flag = true;
    for (let i = 0; i < strY.length; i++) {
      if (!obj1[strY[i]]) {
        flag = false;
        break;
      }
    }
    console.log(flag ? "Yes" : "No");
  }
}
if (process.env.LOGNAME === "ellu") {
  runProgram(`10
  ndhbyuo
  ndndndndhbyuohbyuohndndndndhbyuohbyuohbyuohbyuobyuohbyuo
  qrcsxi
  qrcsxqrcsxiiqrcsxqrcsqrcsxqrcsxiiqrcsxqrcsxiixiiabc
  ozcsrgfdxs
  ozcsrgfozcsrgfdxsozcsrgfdxsdxsozcsrgfdxs
  z
  qorznimyr
  gtopsizy
  gtopsizy
  zr
  orojdmyhcjjwdswhicbesbmqgjziosesqq
  q
  ldtyzxcxqwqfbqbqzbjinresmd
  bssgndqnyz
  bssgndqnyz
  lrf
  lrllrlrfflrllrlrffrfflrllrlrffrffrfflrllrlrffrff
  slj
  ssssssljljsljljljljsljlj`);
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
