function SearchingChallenge(num) {
  while (true) {
    num += 1;
    if (isPalindrome(num.toString())) {
      return num;
    }
  }
}
function isPalindrome(str) {
  let i = 0;
  let j = str.length - 1;
  while (i < j) {
    if (str[i] != str[j]) {
      return false;
    }
    i++;
    j--;
  }
  return true;
}
console.log(SearchingChallenge(9));
