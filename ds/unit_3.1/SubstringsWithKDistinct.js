function runProgram(input) {
  input = input.trim().split("\n");
  const [n, k] = input[0].trim().split(" ").map(Number);
  const str = input[1].trim();
  console.log(distinctK(str, n, k));
}

const distinctK = (str, n, k) => {
  let newObj = {};
  let count = 0;

  for (let i = 0; i < k; i++) {
    if (newObj[str[i]]) {
      newObj[str[i]]++;
    } else {
      newObj[str[i]] = 1;
    }
  }

  if (Object.keys(newObj).length == k) {
    count++;
  }

  for (let j = k; j < n; j++) {
    if (newObj[str[j]]) {
      newObj[str[j]]++;
    } else {
      newObj[str[j]] = 1;
    }
    newObj[str[j - k]]--;
    if (newObj[str[j - k]] == 0) {
      delete newObj[str[j - k]];
    }
    if (Object.keys(newObj).length == k) {
      count++;
    }
  }
  return count;
};

if (process.env.LOGNAME === "ellu") {
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
