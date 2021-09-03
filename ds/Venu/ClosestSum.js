function runProgram(input) {
  input = input.trim().split("\n");
  let testCase = +input[0].trim();
  let row = 1;
  for (let i = 0; i < testCase; i++) {
    let [len, k] = input[row++].trim().split(" ").map(Number);
    let arr = input[row++].trim().split(" ").map(Number);
    console.log(closestThree(arr, len, k));
  }
}
function closestThree(arr, len, k) {
  arr.sort((a, b) => a - b);
  let closestSum;

  for (let i = 0; i < len - 2; i++) {
    let a = i + 1;
    let b = len - 1;

    while (a < b) {
      let sum = arr[i] + arr[a] + arr[b];
      if (
        closestSum == undefined ||
        Math.abs(k - sum) < Math.abs(k - closestSum)
      ) {
        closestSum = sum;
      }
      if (sum > k) {
        b--;
      } else if (sum > k) {
        a++;
      }
    }
  }
  return closestSum;
}
if (process.env.LOGNAME === "ellu") {
  runProgram(`2
  23 780
  -339 422 635 39 -409 836 -635 15 750 -372 977 -730 509 -201 -366 618 467 386 194 136 -265 -827 -22
    3 1
    0 0 0`);
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
