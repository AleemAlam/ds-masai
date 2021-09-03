function runProgram(input) {
  input = input.trim().split("\n");
  const testCase = +input[0].trim();
  let row = 1;
  for (let i = 0; i < testCase; i++) {
    const len = input[row++].trim();
    const firstStr = input[row++].trim();
    const secondStr = input[row++].trim();
    checkString(firstStr, secondStr);
  }
}

function checkString(firstStr, secondStr) {
  let leftIndex;
  let rightIndex;
  for (let i = 0; i < firstStr.length; ++i) {
    if (firstStr[i] !== secondStr[i]) {
      leftIndex = i;
      break;
    }
  }
  for (let i = firstStr.length - 1; i > 0; --i) {
    if (firstStr[i] !== secondStr[i]) {
      rightIndex = i;
      break;
    }
  }
  firstStr =
    firstStr.substring(0, leftIndex) +
    reverse(firstStr.substring(leftIndex, rightIndex + 1)) +
    firstStr.substring(rightIndex + 1);
  if (firstStr === secondStr) {
    console.log("Yes");
  } else {
    console.log("No");
  }
}

function reverse(input) {
  let a = input.split("");
  let l,
    r = a.length - 1;

  for (l = 0; l < r; l++, r--) {
    let temp = a[l];
    a[l] = a[r];
    a[r] = temp;
  }
  return a.join("");
}

if (process.env.LOGNAME === "ellu") {
  runProgram(`2
  2
  ab
  ac
  3
  aba
  aab`);
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
