function merge(left, right) {
  let arr = [];
  let i = 0;
  let j = 0;
  while (i < left.length && j < right.length) {
    // left[0] < right[0] ? arr.push(left.shift()) : arr.push(right.shift());
    if (left[i] < right[j]) {
      arr.push(left[i]);
      i++;
    } else {
      arr.push(right[j]);
      j++;
    }
  }
  left = left.splice(i);
  right = right.splice(j);
  return [...arr, ...left, ...right];
}

function MergeSort(arr) {
  if (arr.length < 2) {
    return arr;
  }
  let half = arr.length / 2;
  let left = arr.splice(0, half);
  return merge(MergeSort(left), MergeSort(arr));
}

console.log(MergeSort([78, 23, 456, 67, 4, 23, 245, 567, 32, 54, 6, 3]));
