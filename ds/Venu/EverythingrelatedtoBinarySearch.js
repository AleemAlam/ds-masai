function runProgram(input) {
  input = input.trim().split("\n");
  let len = +input[0].trim();
  let arr = input[1].trim().split(" ").map(Number);
  let k = +input[2].trim();
  console.log(findOccurrence(arr, k));
}
function findOccurrence(arr, k) {
  let low = 0;
  let high = arr.length - 1;
  let lastOccur = -1;
  let firstOccur = -1;

  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    // console.log(low, mid, high);
    if (arr[mid] == k) {
      firstOccur = mid;
      high = mid - 1;
    } else if (arr[mid] < k) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }
  low = 0;
  high = arr.length - 1;
  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    // console.log(low, mid, high);
    if (arr[mid] == k) {
      lastOccur = mid;
      low = mid + 1;
    } else if (arr[mid] < k) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }
  return `${firstOccur} ${lastOccur} ${lastOccur - firstOccur + 1}`;
}
if (process.env.LOGNAME === "ellu") {
  runProgram(`5
  1 2 3 4 5
  5
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
    process.ekit(0);
  });
}
