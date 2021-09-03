function runProgram(input) {
  input = input.trim().split("\n");
  const testCase = +input[0].trim();
  let row = 1;
  for (let i = 0; i < testCase; i++) {
    const len = +input[row++].trim();
    const arr = input[row++].trim().split(" ").map(Number);
    printAllSubArray(arr, 0, 0);
  }
}

// const printAllSubArray = (arr, len) => {
//   for (let i = 0; i < len; i++) {
//     for (let j = 0; j < len; j++) {
//       const newArr = [];
//       for (let k = i; k <= j; k++) {
//         newArr.push(arr[k]);
//       }
//       newArr.length > 0 && console.log(newArr);
//     }
//   }
// };

const printAllSubArray = (arr, start, end) => {
  if (start == arr.length) {
    return;
  }
  if (end == arr.length) {
    printAllSubArray(arr, start + 1, start + 1);
  } else {
    const newArr = [];
    for (let i = start; i <= end; i++) {
      newArr.push(arr[i]);
    }
    console.log(newArr);
    printAllSubArray(arr, start, end + 1);
  }
};

if (process.env.LOGNAME === "ellu") {
  runProgram(`3
    5
    1 2 3 3 4
    2
    1 1
    3
    1 2 2`);
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
