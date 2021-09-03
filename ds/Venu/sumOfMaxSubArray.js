function sumOfSubarray(arr) {
  let max = -Infinity;
  for (let i = 0; i < arr.length; i++) {
    let sum = arr[i];
    if (max < sum) {
      max = sum;
    }
    for (let j = i + 1; j < arr.length; j++) {
      sum += arr[j];
      if (max < sum) {
        max = sum;
      }
    }
  }
  console.log(max);
}

function sumOfSubarrayEfficient(arr) {
  let max = -Infinity;
  let maxEnding = 0;
  for (let i = 0; i < arr.length; i++) {
    maxEnding = maxEnding + arr[i];
    if (max < maxEnding) {
      max = maxEnding;
    }
    if (maxEnding < 0) {
      maxEnding = 0;
    }
  }
  console.log(max);
}

sumOfSubarrayEfficient([-2, -3, 4, -1, -2, 1, 5, -3]);
