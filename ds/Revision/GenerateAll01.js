function generate0And1(str, index) {
  if (index == str.length) {
    console.log(str.join(""));
    return;
  }
  if (str[index] == "?") {
    str[index] = 0;
    generate0And1(str, index + 1);
    str[index] = 1;
    generate0And1(str, index + 1);
    str[index] = "?";
  } else {
    generate0And1(str, index + 1);
  }
}
generate0And1("1??0?101".split(""), 0);
