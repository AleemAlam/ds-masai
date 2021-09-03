function runProgram(input) {
  input = input.trim().split("\n");
  let [len, k] = input[0].trim().split(" ").map(Number);
  let arr = input[1].trim().split(" ").map(Number);
  console.log(findIndex(arr, k));
}
function findIndex(arr, k) {
  let low = arr.length - 1;
  let high = 0;
  while (low >= high) {
    let mid = Math.floor((low + high) / 2);
    console.log(low, mid, high);
    if (arr[mid] == k) {
      return mid;
    } else if (arr[mid] < k) {
      low = mid - 1;
    } else {
      high = mid + 1;
    }
  }
  return -1;
}
if (process.env.LOGNAME === "ellu") {
  runProgram(`10 -1
  4 6 7 9 10 -1 0 1 2 3`);
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
