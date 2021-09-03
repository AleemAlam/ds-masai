const letters = "abcdefghijklmnopqrstuvwxyz";
function removeQue(str) {
  str = str.split("");
  for (let i = 0; i < str.length; i++) {
    if (str[i] == "?") {
      for (let j = 0; j < letters.length; j++) {
        if (str[i - 1] != letters[j] && str[i + 1] != letters[j]) {
          str[i] = letters[j];
          console.log(str.join(""));
        }
      }
    }
  }
}
removeQue("?e?al");
