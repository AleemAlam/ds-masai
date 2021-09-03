let str = "LL??R";

function maxDisp(str) {
  var count_L = 0;
  var count_R = 0;
  var countQ = 0;
  var i = 0;
  while (i < str.length) {
    if (str[i] == "L") {
      count_L++;
    } else if (str[i] == "R") {
      count_R++;
    } else {
      countQ++;
    }
    i++;
  }
  var diff = Math.abs(count_L - count_R) + countQ;

  return diff;
}
console.log(maxDisp(str));
// Input
