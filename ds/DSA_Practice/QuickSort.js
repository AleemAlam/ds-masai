function quicksort(array) {
  if (array.length <= 1) {
    return array;
  }
  let pivot = array[0];
  let left = [];
  let right = [];
  for (let i = 1; i < array.length; i++) {
    array[i] < pivot ? left.push(array[i]) : right.push(array[i]);
  }

  return quicksort(left).concat(pivot, quicksort(right));
}

console.log(quicksort([678, 34, 6, 7, 4, 3, 454, 65, 6567, 56]));
