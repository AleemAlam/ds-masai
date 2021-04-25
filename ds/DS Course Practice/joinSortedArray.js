const sortAndJoin = (arr1, arr2) => {
  arr1 = [...arr1, ...arr2].sort((a, b) => a - b);
  console.log(arr1);
};

sortAndJoin([1, 3, 4, 65, 111], [4, 6, 8, 10, 60, 110]);

const sortAndJoin2 = (arr1, arr2) => {
  let newArr = [];
  if (arr1.length == 0) {
    return arr2;
  }
  if (arr2.length == 0) {
    return arr1;
  }
  let i = 1;
  let j = 1;
  firstArrItem = arr1[0];
  secondArrItem = arr2[0];
  while (firstArrItem || secondArrItem) {
    if (!secondArrItem || firstArrItem < secondArrItem) {
      newArr.push(firstArrItem);
      firstArrItem = arr1[i];
      i++;
    } else {
      newArr.push(secondArrItem);
      secondArrItem = arr2[j];
      j++;
    }
  }
  return newArr;
};

console.log(sortAndJoin2([1, 3, 4, 65, 111], [4, 6, 8, 10, 110]));
