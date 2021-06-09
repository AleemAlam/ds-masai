function runProgram() {
  input = input.trim().split(/[\r+\n]+/);
  for (let i = 0; i < input.length; i++) {
    input[i] = input[i].trim().split(" ").map(Number);
  }
  input.shift();
  for (let i = 1; i < input.length; i++) {
    let arr = input[i];
    let stack1 = [];
    let stack2 = [];
    let vector1 = [];
    let vector2 = [];
    for (let j = 0; j < arr.length; j++) {
      if (stack1.length === 0) {
        vector1.push([-1, 1000000]);
      } else if (stack1.length > 0 && stack1[stack1.length - 1][0] > arr[j]) {
        vector1.push(stack1[stack1.length - 1]);
      } else if (stack1.length > 0 && stack1[stack1.length - 1][0] <= arr[j]) {
        while (stack1.length > 0 && stack1[stack1.length - 1][0] <= arr[j]) {
          stack1.pop();
        }
        if (stack1.length === 0) {
          vector1.push([-1, 1000000]);
        } else {
          vector1.push(stack1[stack1.length - 1]);
        }
      }
      stack1.push([arr[j], j]);
    }
    for (let j = arr.length - 1; j >= 0; j--) {
      if (stack2.length === 0) {
        vector2.push([-1, 1000000]);
      } else if (stack2.length > 0 && stack2[stack2.length - 1][0] > arr[j]) {
        vector2.push(stack2[stack2.length - 1]);
      } else if (stack2.length > 0 && stack2[stack2.length - 1][0] <= arr[j]) {
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
    i = i + 1;
  }
}
