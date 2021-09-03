function runProgram(input) {
  input = input.trim().split("\n");
  const [arr1Len, arr2Len] = input[0].trim().split(" ").map(Number);
  const arr1 = input[1].trim().split(" ").map(Number);
  const arr2 = input[2].trim().split(" ").map(Number);
  checkMaxPair(arr1, arr2, arr1Len, arr2Len);
}

function checkMaxPair(arr1, arr2, arr1Len, arr2Len) {
  arr1.sort((a, b) => a - b);
  arr2.sort((a, b) => a - b);
  let i = 0;
  let j = 0;
  let count = 0;
  console.log(arr1);
  console.log(arr2);
  while (i < arr1Len || j < arr2Len) {
    if (Math.abs(arr1[i] - arr2[j]) <= 1) {
      count++;
      i++;
      j++;
    } else {
      i++;

      j++;
    }
  }
  console.log(count);
}

if (process.env.LOGNAME === "ellu") {
  runProgram(`16 10
  12 11 1 25 46 41 46 1 8 47 0 46 20 36 14 25
  9 24 25 47 7 19 25 26 46 9`);
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
