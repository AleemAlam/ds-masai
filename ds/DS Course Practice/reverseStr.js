function reverse(str) {
  let newStr = "";
  for (let i = str.length - 1; i >= 0; i--) {
    newStr += str[i];
  }
  console.log(newStr);
}

const reverse2 = (str) => [...str].reverse().join("");

reverse("Hi my name is Aleem.");
console.log(reverse2("Hi my name is Aleem."));
