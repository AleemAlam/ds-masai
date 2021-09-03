function runProgram(input) {
  input = input.trim().split("\n");
  const testCase = +input[0].trim();
  let row = 1;
  for (let i = 0; i < testCase; i++) {
    const len = +input[row++].trim();
    const arr = input[row++].trim().split(" ").map(Number);
    console.log(productArr(arr, len).join(" "));
  }
}

function productArr(arr, len) {
  const product = [];
  let temp = 1;
  for (let i = 0; i < arr.length; i++) {
    product.push(temp);
    temp *= arr[i];
  }
  temp = 1;
  for (let i = arr.length - 1; i >= 0; i--) {
    product[i] = product[i] * temp;
    temp *= arr[i];
  }
  return product;
}
if (process.env.LOGNAME === "ellu") {
  runProgram(`2
    5
    1 2 3 4 5
    3
    3 2 7`);
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
