function runProgram(input) {
  input = input.trim().split("\n");
  const len = +input[0].trim();
  const arr = input[1].trim().split(" ").map(Number);
  console.log(checkReverse(arr, len));
}

function checkReverse(arr, len) {
  let temp = [...arr];
  temp.sort((a, b) => a - b);
  let first = 0;
  if (len == 1) {
    return "YES";
  }
  while (first < len) {
    if (temp[first] != arr[first]) {
      break;
    }
    first++;
  }
  if (first == len) {
    return "YES";
  }
  let last = len - 1;
  while (last >= 0) {
    if (temp[last] != arr[last]) {
      break;
    }
    last--;
  }
  let condition = 0;
  for (let i = first; i <= last; i++) {
    condition++;
  }
  condition = Math.floor(condition / 2);

  for (let i = 0; i < condition; i++) {
    let tempNum = arr[first];
    arr[first++] = arr[last];
    arr[last--] = tempNum;
  }
  let extra = first;

  while (extra > 1 && extra < len) {
    if (arr[extra] < arr[extra - 1]) return "NO";
    extra++;
  }
  return "YES";
}

if (process.env.LOGNAME === "ellualeem") {
  runProgram(`10
  2 3 4 5 14 13 12 11 10 9`);
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
