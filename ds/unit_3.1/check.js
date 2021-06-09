function runProgram(input) {
  input = input.trim().split(/[\n\r]+/);

  let [N, K] = input[0].trim().split(" ").map(Number);

  let arr = input[1].trim();
  var count = 0;
  var obj = {};

  for (let i = 0; i < K; i++) {
    obj[arr[i]] == undefined ? (obj[arr[i]] = 1) : obj[arr[i]]++;
  }

  if (Object.keys(obj).length == K) {
    count++;
  }

  for (let i = K; i < N; i++) {
    obj[arr[i]] == undefined ? (obj[arr[i]] = 1) : obj[arr[i]]++;
    console.log(obj);
    obj[arr[i - K]]--;
    if (obj[arr[i - K]] == 0) {
      delete obj[arr[i - K]];
    }
    if (Object.keys(obj).length == K) {
      count++;
    }
  }
  console.log(count);
}

if (process.env.LOGNAME === "ellualeem") {
  runProgram(`
    11 3
    adbcdabbcdc
  `);
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
