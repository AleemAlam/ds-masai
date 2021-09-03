function runProgram(input) {
  input = input.trim().split("\n");

  const len = +input[0].trim();
  const arr = input[1].trim().split(" ").map(Number);
  let smallest;
  let largest;
  const res = smallestAndLargest(arr, len, smallest, largest);
  console.log(res.smallest);
  console.log(res.largest);
}

function smallestAndLargest(arr, len, smallest, largest) {
  if (len == 0) {
    return { smallest, largest };
  }
  if (smallest == undefined || smallest > arr[len - 1]) {
    smallest = arr[len - 1];
  }
  if (largest == undefined || largest < arr[len - 1]) {
    largest = arr[len - 1];
  }
  return smallestAndLargest(arr, len - 1, smallest, largest);
}

if (process.env.LOGNAME === "ellu") {
  runProgram(`4
    -2 0 8 4`);
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
