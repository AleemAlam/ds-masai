function runProgram(input) {
  input = input.trim().split("\n");
  const testCase = Number(input[0].trim());
  let line = 1;
  for (let i = 1; i <= testCase; i++) {
    const len = Number(input[line++].trim());
    const arr = input[line++].trim().split(" ").map(Number);
    console.log(longestSequence(arr));
  }
}

// var longestSequence = function (s) {
//   let start = 0,
//     max = 0,
//     obj = {};
//   for (let i = 0; i < s.length; i++) {
//     if (obj[s[i]]) {
//       obj = {};
//       start++;
//       i = start;
//     }
//     obj[s[i]] = true;
//     max = Math.max(max, i - start + 1);
//   }

//   return max;
// };

// Time complexity = O(n) & Space complexity = O(n)
var longestSequence = function (arr) {
  let set = new Set(); // initializing a Set
  let aPointer = 0; // Removing Pointer
  let bPointer = 0; // Adding Pointer
  let max = 0; // Max

  while (bPointer < arr.length) {
    if (!set.has(arr[bPointer])) {
      // Set has or not
      set.add(arr[bPointer]); // adding distinct element to set
      bPointer++;
      max = Math.max(set.size, max); // check max
    } else {
      set.delete(arr[aPointer]); // removing repeating element
      aPointer++;
    }
  }
  return max;
};
if (process.env.LOGNAME === "ellualeem") {
  runProgram(`1
  8
  1 2 1 3 2 7 4 2`);
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
