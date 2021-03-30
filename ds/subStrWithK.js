function runProgram(input) {
  input = input.trim().split("\n");
  const [len, k] = input[0].trim().split(" ").map(Number);
  subStrK(input[1].trim(), len, k);
}

function subStrK(str, len, k) {
  //   console.log(str, len, k);
  let ans = 0;
  let obj = {};
  for (let i = 0; i < k; i++) {
    if (obj[str[i]]) {
      obj[str[i]] += 1;
    } else {
      obj[str[i]] = 1;
    }
  }
  if (Object.getOwnPropertyNames(obj).length == k) {
    ans++;
  }
  console.log(ans);
  for (let i = k; i < len; i++) {
    if (obj[str[i]]) {
      obj[str[i]] += 1;
    } else {
      obj[str[i]] = 1;
    }
    delete obj[str[i - k]];
    if (Object.getOwnPropertyNames(obj).length == k) {
      ans++;
    }
  }
  console.log(ans);
}

if (process.env.LOGNAME === "aleem") {
  runProgram(`11 3
  aabcdabbcdc`);
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
