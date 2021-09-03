function runProgram(input) {
  input = input.trim().split("\n");
  const len = +input[0].trim();
  const arr = input[1].trim().split(" ").map(Number);
  quickSort(arr, 0, len - 1);
  console.log(arr.join(" "));
}
function quickSort(arr, low, high) {
  if (low >= high) {
    return;
  }
  const split = partition(arr, low, high);
  quickSort(arr, low, split - 1);
  quickSort(arr, split + 1, high);
}
function partition(arr, low, high) {
  const pivot = arr[low];
  let i = low,
    j = high;
  while (i < j) {
    while (arr[i] >= pivot) {
      i++;
    }
    while (arr[j] < pivot) {
      j--;
    }
    if (i < j) {
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
  }
  [arr[low], arr[j]] = [arr[j], arr[low]];
  return j;
}
if (process.env.LOGNAME === "ellu") {
  runProgram(`8
  2 6 9 9 6 4 8 5`);
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
