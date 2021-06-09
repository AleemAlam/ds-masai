function runProgram(input) {
  input = input.trim().split("\n");
  const testCase = +input[0].trim();
  let row = 1;
  for (let i = 0; i < testCase; i++) {
    const len = +input[row++].trim();
    const arr = input[row++].trim().split(" ").map(Number);
    nextGreater(arr);
  }
}
function nextGreater(arr) {
  let stack1 = [];
  let stack2 = [];
  let vector1 = [];
  let vector2 = [];
  for (let i = 0; i < arr.length; i++) {
    while (stack1.length > 0 && stack1[stack1.length - 1][0] >= arr[i]) {
      stack1.pop();
    }

    vector1.push([stack1.length > 0 ? stack1[stack1.length - 1] : -1]);
    stack1.push([arr[i], i]);
  }
  // if (stack1.length === 0) {
  //   vector1.push([-1, 1000000]);
  // } else if (stack1.length > 0 && stack1[stack1.length - 1][0] > arr[j]) {
  //   vector1.push(stack1[stack1.length - 1]);
  // } else if (stack1.length > 0 && stack1[stack1.length - 1][0] >= arr[j]) {
  //   while (stack1.length > 0 && stack1[stack1.length - 1][0] <= arr[j]) {
  //     stack1.pop();
  //   }
  //   if (stack1.length === 0) {
  //     vector1.push([-1, 1000000]);
  //   } else {
  //     vector1.push(stack1[stack1.length - 1]);
  //   }
  // }
  // stack1.push([arr[j], j]);

  console.log(vector1);
  for (let j = arr.length - 1; j >= 0; j--) {
    if (stack2.length === 0) {
      vector2.push([-1, 1000000]);
    } else if (stack2.length > 0 && stack2[stack2.length - 1][0] > arr[j]) {
      vector2.push(stack2[stack2.length - 1]);
    } else if (stack2.length > 0 && stack2[stack2.length - 1][0] >= arr[j]) {
      while (stack2.length > 0 && stack2[stack2.length - 1][0] <= arr[j]) {
        stack2.pop();
      }
      if (stack2.length === 0) {
        vector2.push([-1, 1000000]);
      } else {
        vector2.push(stack2[stack2.length - 1]);
      }
    }
    stack2.push([arr[j], j]);
  }
  vector2 = vector2.reverse();
  console.log(vector2);
  let str = "";
  for (let m = 0; m < arr.length; m++) {
    let diff1 = Math.abs(vector1[m][1] - m);
    let diff2 = Math.abs(vector2[m][1] - m);
    if (diff1 < diff2) {
      str += vector1[m][0] + " ";
    } else if (diff1 === diff2) {
      str += vector1[m][0] + " ";
    } else if (diff1 > diff2) {
      str += vector2[m][0] + " ";
    }
  }
  console.log(str.trim());
}

if (process.env.LOGNAME === "ellualeem") {
  runProgram(`1
  8
  39 27 11 4 24 32 32 1`);
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
