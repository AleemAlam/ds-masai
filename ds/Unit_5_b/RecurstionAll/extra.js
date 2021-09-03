let oldVal = "333112";

let newVal = "";
for (let i = 0; i < oldVal.length; i++) {
  let count = 1;
  for (var j = i + 1; j < oldVal.length; j++) {
    if (oldVal[i] == oldVal[j]) {
      count++;
    } else {
      break;
    }
  }
  newVal += count + oldVal[i];
  i += count - 1;
}
console.log(newVal);
