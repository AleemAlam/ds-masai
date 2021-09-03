function runProgram(input) {
  input = +input.trim();
  let count = 0;
  const arr = [];
  for (let i = 1; i <= input; i++) {
    arr.push(i);
  }
  function goodPermutations(index) {
    if (index == arr.length) {
      count++;
    }
    for (let i = index; i < arr.length; i++) {
      swap(arr, i, index);
      if ((index + 1) % arr[index] === 0 || arr[index] % (index + 1) === 0) {
        goodPermutations(index + 1);
      }
      swap(arr, i, index);
    }
  }
  goodPermutations(0);
  console.log(count);
}

function swap(arr, i, j) {
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

if (process.env.LOGNAME === "ellu") {
  runProgram(`3`);
} else {
  process.stdin.resume();
  process.stdin.setEncoding("ascii");
  let read = "";
  process.stdin.on("data", function (input) {
    read += input;
  });
  process.stdin.on("end", function () {
    read = read.replace(/\n$/, "");
    read = read.replace(/\n$/, "");
    runProgram(read);
  });
  process.on("SIGINT", function () {
    read = read.replace(/\n$/, "");
    runProgram(read);
    process.exit(0);
  });
}
