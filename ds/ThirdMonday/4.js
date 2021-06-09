// Nearest Greater Element
// Description
// You are given an array A of size N. For each element, print the closest greater element, to that particular element. If there is no greater element for a particular
// element, print -1. If the two values, are equidistant from a particular value, print the value that occurs to the left of it. Refer the sample I/O for better
// understanding
// Input
// The first line of the input contains T, the number of test cases. The first line of each test case contains N, the size of the array.
// The next line contains N space separated integers, denoting the array elements.
// Constraints
// 1 <= T <= 10
// 1 <= N <= 10^5
// 1 <= A[i] <= 10^4
// Output
// For each test case, print N space separated integers, denoting the nearest greater element in the array, and -1, if no such element exists, on a new line.
// Sample Input 1
// 1
// 5
// 5 4 1 3 2
// Sample Output 1
// -1 5 4 4 3
// Hint
// In the sample test case, the array has 5 elements, since 5 has no greater element, either to the left or to the right, therefore, the correct value is -1. For 4,
// the closest and the only greater value is 5, therefore, the value is 5. For 1, 4 and 3 are the closest greater values, but since 4 occurs to the left of it,
// the answer is 4. Similarly, the closest greater value for 3 and 2 are 4 and 3 respectively.

function runProgram(input) {
  input = input.trim().split("\n");
  const testCase = +input[0].trim();
  let row = 1;
  for (let i = 0; i < testCase; i++) {
    const len = +input[row++].trim();
    const arr = input[row++].trim().split(" ").map(Number);
    console.log(nextGreater(arr, len));
  }
}

const nextGreater = (arr, len) => {
  const stack = [];
  const result = [];

  for (let i = 2 * (len - 1); i >= 0; i--) {
    const correctIndex = i % len;
    while (
      stack.length > 0 &&
      arr[correctIndex] >= arr[stack[stack.length - 1]]
    ) {
      stack.pop();
    }
    result[correctIndex] =
      stack.length === 0 ? -1 : arr[stack[stack.length - 1]];
    stack.push(correctIndex);
  }

  return result;
};
runProgram(`1
5
5 4 1 3 2`);
