function swap(str, l, r) {
  let newStr = str.split("");
  let temp = newStr[l];
  newStr[l] = newStr[r];
  newStr[r] = temp;
  return newStr.join("");
}

console.log(swap("abc", 1, 2));
