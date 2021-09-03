let max;
function runProgram(input) {
  input = input.trim().split("\n");
  let testCase = input[0].trim();
  let row = 1;
  for (let i = 0; i < testCase; i++) {
    max = undefined;
    let str = input[row++].trim();
    checkNumber(str, 0, str.length - 1);
    console.log(max ? max : -1);
  }
}

const checkNumber = (str, l, r) => {
  if (l == r) {
    let num = Number(str);

    if (num % 2 == 0 && num % 3 == 0 && num % 5 == 0) {
      if (max == undefined || max < num) {
        max = num;
      }
    }
  } else {
    for (let i = l; i <= r; i++) {
      str = swap(str, l, i);
      checkNumber(str, l + 1, r);
      str = swap(str, l, i);
    }
  }
};

function swap(a, i, j) {
  let charArray = a.split("");
  let temp = charArray[i];
  charArray[i] = charArray[j];
  charArray[j] = temp;
  return charArray.join("");
}

if (process.env.LOGNAME === "ellu") {
  runProgram(`10
  8872
  3953982
  933791178
  900
  1841
  54618
  185322150
  059628550
  938265
  296`);
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
