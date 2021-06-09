function runProgram(input) {
  input = input.trim().split("\n");
  const testCase = Number(input[0].trim());
  let line = 1;
  for (let i = 1; i <= testCase; i++) {
    const len = Number(input[line++].trim());
    const str = input[line++].trim();
    console.log(twoSubArrays(str, len));
  }
}

const twoSubArrays = (str, len) => {
  let obj = {};
  let aPointer = 0;
  let bPointer = 0;
  let count = 0;
  let temp = 0;

  while (bPointer < len) {
    if (!obj[str[bPointer]] || obj[str[bPointer]] < 2) {
      temp++;
      obj[str[bPointer]] = obj[str[bPointer]] ? (obj[str[bPointer]] += 1) : 1; //{h:2,s:1,d:1,f:1}
      count += temp;
      bPointer++;
    } else {
      obj[str[aPointer]]--;
      aPointer++;
      temp--;
    }
  }

  return count;
};

// const twoSubArrays = (str, n) => {
//   let count = 0;
//   for (let i = 0; i < n; i++) {
//     for (let j = i; j < n; j++) {
//       let newStr = "";
//       for (let k = i; k <= j; k++) {
//         newStr += str[k];
//       }
//       let obj = {};
//       for (let l = 0; l < newStr.length; l++) {
//         obj[newStr[l]] = obj[newStr[l]] ? (obj[newStr[l]] += 1) : 1;
//       }
//       let incCount = true;
//       for (key in obj) {
//         if (obj[key] > 2) {
//           incCount = false;
//         }
//       }
//       if (incCount) {
//         count++;
//       }
//     }
//   }
//   return count;
// };
if (process.env.LOGNAME === "ellualeem") {
  runProgram(`3
  7
  ftswkld
  7
  hhsdfhh
  7
  bgvwqzi`);
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
