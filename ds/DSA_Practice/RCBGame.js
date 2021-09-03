function runProgram(input) {
  input = input.trim().split("\n");
  let testCase = input[0].trim();
  let row = 1;
  for (let i = 0; i < testCase; i++) {
    const len = +input[row++].trim();
    let arr = input[row++].trim().split(" ").map(Number);
    const runs = countRuns(arr, len);
    console.log(
      runs.viratRun < runs.abRun
        ? "AB de Villiers"
        : runs.viratRun > runs.abRun
        ? "Virat Kohli"
        : "Tie"
    );
  }
}

function countRuns(arr, len) {
  let abStrick = true;
  let viratRun = 0;
  let abRun = 0;
  for (let i = 0; i < arr.length; i++) {
    if (abStrick) {
      abRun += arr[i];
    } else {
      viratRun += arr[i];
    }
    if (arr[i] == 1 || arr[i] == 3) {
      abStrick = !abStrick;
    }
    if ((i + 1) % 6 == 0) {
      abStrick = !abStrick;
    }
  }
  return { viratRun, abRun };
}

if (process.env.LOGNAME === "ellu") {
  runProgram(`3
  2
  1 2 0 0 1 1 6 6 4 1 6 1
  3
  0 0 0 0 0 1 0 0 0 0 1 1 6 6 6 1 4 4
  1
  0 1 0 1 0 0`);
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
