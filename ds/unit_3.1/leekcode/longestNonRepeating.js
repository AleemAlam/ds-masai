var lengthOfLongestSubstring = function (s) {
  let longest = 1;
  const obj = {};
  for (let i = 0; i < s.length - 1; i++) {
    if (obj[s[i]]) {
      obj[s[i]] += 1;
    } else {
      obj[s[i]] = 1;
    }
  }
  console.log(obj);
  return longest;
};

console.log(lengthOfLongestSubstring("abcabcbb"));
