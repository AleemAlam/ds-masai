// Difference arry
// Description
// You are given an arry A of size N, which contains all unique elements. You have to sort the arry, and find the difference between the initial position and
// the final position of the elements after the arry is sorted . Refer the sample I/O for better understanding.
// Input
// The first line contains T, the number of test cases.
// The first line of each test case contains N, the size of the arry.
// The next line contains N space separated integers, denoting the elements of the arry.
// Output
// Print an arry of size N on a new line, denoting the difference between the initial and the final position of the elements, on a single line, for each test case.
// Sample Input 1
// 2
// 5
// 1 4 2 3 5
// 5
// 5 4 3 2 1
// Sample Output 1
// 0 -2 1 1 0
// -4 -2 0 2 4
// Hint
// In the first sample test case, the arry after sorting became,
// 1 2 3 4 5. For each element the difference between the initial and the final position in the arry is equal to -original position - final position
// 1 -> 0 - 0 = 0
// 2 -> 2 - 1 = 1
// 3 -> 3 - 2 = 1
// 4 -> 1 - 3 = -2
// 5 -> 4 - 4 = 0
// Similarly, in the second test case the arry after sorting becomes -> 1 2 3 4 5. Therefore, the difference in the position is
// 1 -> 4 - 0 = 4
// 2 -> 3 - 1 = 2
// 3 -> 2 - 2 = 0
// 4 -> 1 - 3 = -2
// 5 -> 0 - 4 = -4
// 8:50
// Prime Sum Up
// Description
// You are given a number N. Your task is to write a program that calculates the sum of all prime numbers below N(including N if N is a prime )
// Input
// Input Format
// First and only line contains N
// Constraints
// N<1000
// Output
// Print sum of all such numbers.
// Sample Input 1
// 13
// Sample Output 1
// 41

function runProgram(input) {
  input = input.trim().split("\n");
  const testCase = +input[0].trim();
  let row = 1;
  for (let i = 0; i < testCase; i++) {
    const len = +input[row++].trim();
    const arr = input[row++].trim().split(" ").map(Number);
    sum(arr, len);
  }
}
function sum(arr, size) {
  let index = new Array(...arr);

  arr = arr.sort((a, b) => a - b);

  var max = [];
  for (var i = 0; i < index.length; i++) {
    let num = i - arr.indexOf(index[i]);
    arr[arr.indexOf(index[i])] = "NaN";
    max.push(num);
  }
  console.log(max.join(" "));
}

if (process.env.LOGNAME === "ellualeem") {
  runProgram(`2
5
1 4 2 3 5
5
5 4 3 2 1`);
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
