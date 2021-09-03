function runProgram(input) {
  input = input.trim().split("\n");
  let [len, k] = input[0].trim().split(" ").map(Number);
  let arr = input[1].trim().split(" ").map(Number);
  console.log(noOfOccurrence(arr, len, k));
}
function noOfOccurrence(arr, len, k) {
  let low = 0;
  let high = len - 1;
  let firstOccur;
  let lastOccur;
  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    if (arr[mid] == k) {
      firstOccur = mid;
      high = mid - 1;
    } else if (arr[mid] > k) {
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }
  low = 0;
  high = len - 1;
  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    if (arr[mid] == k) {
      lastOccur = mid;
      low = mid + 1;
    } else if (arr[mid] > k) {
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }

  return lastOccur - firstOccur + 1;
}
if (process.env.LOGNAME === "ellu") {
  runProgram(`6 3
  2 3 3 3 6 9`);
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
