let a = "abcabc";
function reduce(a) {
  for (let i = 0; i < a.length - 1; i++) {
    if (changeStr(a.slice(i, i + 2)) != -1) {
      a = a.replace(a.slice(i, i + 2), changeStr(a.slice(i, i + 2)));
      return reduce(a);
    }
  }
  return a.length;
}
function changeStr(str) {
  if (str == "ab" || str == "ba") {
    return "c";
  }
  if (str == "cb" || str == "bc") {
    return "a";
  }
  if (str == "ac" || str == "ca") {
    return "b";
  }
  return -1;
}

function StringChallenge(str) {
  for (let i = 0; i < str.length - 1; i++) {
    if (changeStr(str.slice(i, i + 2)) != -1) {
      str = str.replace(str.slice(i, i + 2), changeStr(str.slice(i, i + 2)));

      return StringChallenge(str);
    }
  }
  return str.length;
}
// function changeStr(str) {
//   if (str == "ab" || str == "ba") {
//     return "c";
//   }
//   if (str == "cb" || str == "bc") {
//     return "a";
//   }
//   if (str == "ac" || str == "ca") {
//     return "b";
//   }
//   return -1;
// }

console.log(StringChallenge(a));
