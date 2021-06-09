function runProgram(input) {
  input = input.trim().split("\n");
  const testCase = Number(input[0].trim());
  let row = 2;
  for (let i = 1; i <= testCase; i++) {
    const arr1 = input[row++].trim().split(" ").map(Number);
    const arr2 = input[row++].trim().split(" ").map(Number);
    console.log(compareArr(arr1, arr2));
    row++;
  }
}
// const compareArr = (arr1, arr2) => {
//   const obj = {};

//   let count = 0;
//   for (let i = 0; i < arr1.length; i++) {
//     obj[arr1[i]] = obj[arr1[i]] ? obj[arr1[i]]++ : 1;
//   }
//   // console.log(obj, arr1, arr2);
//   for (let i = 0; i < arr2.length; i++) {
//     console.log(" Arr", obj[arr2[i]]);
//     if (obj[arr2[i]] && obj[arr2[i]] != -1) {
//       count++;
//       obj[arr2[i]]--;
//     }
//   }
//   return count;
// };

const compareArr = (arr1, arr2) => {
  let i = 0;
  (j = arr2.length - 1), (count = 0);

  while (j >= 0 && i < arr1.length) {
    if (arr1[i] == arr2[j]) {
      count++;
      i++;
      j--;
    } else if (arr1[i] > arr2[j]) {
      j--;
    } else {
      i++;
    }
  }
  return count;
};

if (process.env.LOGNAME === "ellualeem") {
  runProgram(`5
  8
  1 2 3 5 8 8 9 9
  8 8 6 5 3 2 1 1
  9
  2 3 3 3 7 7 9 9 9
  9 9 9 8 6 5 4 3 1
  2
  4 7
  4 2
  3
  3 7 7
  8 5 1
  4
  2 7 7 8
  9 7 6 3`);
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
