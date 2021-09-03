function ArrayChallenge(arr) {
  const sum = arr.shift();
  arr.sort();
  for (let i = 0; i < arr.length; i++) {
    let a = i + 1;
    let b = arr.length - 1;
    while (a < b) {
      if (arr[i] != arr[a] && arr[a] != arr[b]) {
        if (arr[i] + arr[a] + arr[b] == sum) {
          return true;
        }
      }
      if (arr[i] + arr[a] + arr[b] > sum) {
        b--;
      } else {
        a++;
      }
    }
  }

  return false;
}
console.log(ArrayChallenge([8, 2, 1, 4, 10, 5, -1, -1]));
