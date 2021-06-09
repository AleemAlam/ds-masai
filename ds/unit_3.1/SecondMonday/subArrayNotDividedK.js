function runProgram(input) {
  input = input.trim().split("\n");

  let [len, sum] = input[0].trim().split(" ").map(Number);
  let arr = input[1].trim().split(" ").map(Number);
  console.log(subArraysDivByK(arr, sum));
}

const subArraysDivByK = (arr, k) => {
  // 3 2 2 2 3
  // 1st part longest sub str not divided by K=3: {2,2,3} 7

  //    b
  //3 2 2 2 3
  //        a
  let aPointer = 1;
  let bPointer = 0;
  let sum = arr.reduce((a, b) => a + b);
  let len = 0;
  let count = 0;
  if (sum % k != 0) {
    return 1;
  }
  let temp = 0;
  sum = arr[0]; //3
  //
  while (aPointer < arr.length && bPointer < arr.length) {
    temp++; //3
    if (sum % k != 0) {
      sum += arr[aPointer]; // 5
      len = Math.max(temp, len); // 3
      aPointer++;
    } else {
      sum -= arr[bPointer]; // 4
      temp--; //2
      bPointer++;
    }
  }
  console.log(len); //3

  // 3 2 2 2 3
  sum = 0;
  for (let i = 0; i < len; i++) {
    sum += arr[i];
  }
  // 7
  if (sum % k != 0) {
    count++;
  }
  for (let i = len; i < arr.length; i++) {
    sum += arr[i]; // 6+3= 9
    sum -= arr[len - i]; // 9 - 2 = 7
    if (sum % k != 0) {
      count++;
    }
  }
  return count;
};

if (process.env.LOGNAME === "ellualeem") {
  runProgram(`5 3
  3 2 2 2 3`);
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
