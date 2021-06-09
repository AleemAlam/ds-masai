function runProgram(input) {
  input = input.trim().split("\n");
  const [len, k] = input[0].trim().split(" ").map(Number);

  const arr = input[1].trim().split(" ").map(Number);
  console.log(newSort(arr, k));
}

const newSort = (arr, k) => {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {
      if (arr[j] % k > arr[j + 1] % k) {
        let tmp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = tmp;
      }
    }
  }
  return arr.join(" ");
};

if (process.env.LOGNAME === "ellualeem") {
  runProgram(`5 6
  12 18 17 65 46`);
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
