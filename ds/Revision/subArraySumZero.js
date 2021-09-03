function equalZero(arr, len, m) {
  const obj = {};
  let sum = 0;
  for (let i = 0; i < len; i++) {
    sum += arr[i];
    if (sum == 0 || obj[sum]) {
      console.log("Yes");
      return;
    } else {
      obj[sum] = 1;
    }
  }
  console.log("No");
}
equalZero([5, 1, -3, -3], 4, 0);
