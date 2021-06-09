function slidingwindow(input) {
  input = input.trim().split("\n");
  const [n, k] = input[0].trim().split(" ").map(Number);
  const str = input[1].trim();
  console.log(distinctK(str, n, k));
}
const distinctK = (str, n, k) => {
  let obj = {};
  let count = 0;
  for (let i = 0; i < k; i++) {
    obj[str[i]] = obj[str[i]] ? obj[str[i]] + 1 : 1;
  }
  if (Object.keys(obj).length == k) {
    count++;
  }
  for (let i = k; i < n; i++) {
    obj[str[i]] = obj[str[i]] ? obj[str[i]] + 1 : 1;
    obj[str[i - k]]--;
    if (obj[str[i - k]] == 0) {
      delete obj[str[i - k]];
    }
    if (Object.keys(obj).length == k) {
      count++;
    }
  }
  return count;
};

slidingwindow(`6 3
    abcefg`);
