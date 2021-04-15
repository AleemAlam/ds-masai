const arr1 = ["a", "b", "c", "d"];
const arr2 = ["x", "y", "a"];

// O(n+m)

const compareArr = (arr1, arr2) => {
  let obj = {};
  for (let i = 0; i < arr1.length; i++) {
    if (obj[arr1[i]] == undefined) {
      obj[arr1[i]] = true;
    }
  }
  for (let j = 0; j < arr2.length; j++) {
    if (obj[arr2[j]] != undefined) {
      return console.log(true);
    }
  }
  return console.log(false);
};

const compareArr2 = (arr1, arr2) => {
  return arr1.some((item) => arr2.includes(item));
};

console.log(compareArr2(arr1, arr2));
