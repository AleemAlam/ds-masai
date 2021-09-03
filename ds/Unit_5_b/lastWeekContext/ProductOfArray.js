function runProgram(input) {
  input = input.trim().split("\n");
  const testCase = +input[0].trim();
  let row = 1;
  for (let i = 0; i < testCase; i++) {
    const len = +input[row++].trim();
    const arr = input[row++].trim().split(" ").map(Number);
    product(arr, 0, 1);
    console.log(arr.join(" "));
  }
}

function product(arr, i, prod) {
  if (i >= arr.length) {
    return 1;
  }
  const num = arr[i];
  const reamingEle = product(arr, i + 1, prod * num);
  arr[i] = prod * reamingEle;
  return reamingEle * num;
}

function prodArr(arr, index, pro, ans) {
  if (index == arr.length) {
    return ans;
  }
  ans.push(Math.floor(pro / arr[index]));
  return prodArr(arr, index + 1, pro, ans);
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
