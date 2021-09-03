const arr = [2, 7, 11, 7];
const target = 9;

var subarraySum = function (arr, k) {
  var i = 0;
  var obj = {};
  var sum = 0;
  while (i < arr.length) {
    sum += arr[i];
    if (sum == k) {
      console.log();
      return "Yes";
    }

    if (obj[sum - k]) {
      return "Yes";
    }
    obj[sum] = obj[sum] ? obj[sum] + 1 : 1;
    i++;
  }
  return "No";
};

subarraySum(arr, target);
