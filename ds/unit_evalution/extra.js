function runProgram(input) {
  // Write code here
  input = input.trim().split(/[\r\n]+/);
  for (var i = 0; i < input.length; i++) {
    input[i] = input[i].split(" ").map(Number);
  }
  //   console.log(input);
  let t = input[0][0];
  input = input.slice(1);
  console.log(t, input);
  let out = [];
  for (let i = 0; i < input.length; i++) {
    out = input.splice(0, 2);
    check(out);
  }
  function check(mat) {
    // console.log(mat);
    let n = mat[0][0];
    let k = mat[0][1];
    mat = mat[1];
    // console.log(n, k, mat);
    // console.log(mat);
    // console.log(mat);
    let i = 0;
    let j = n - 1;
    // console.log(k);
    while (i < j) {
      if (mat[i] + mat[j] == k) {
        return console.log("Yes");
      }
      if (mat[i] + mat[j] > k) {
        j--;
      } else if (mat[i] + mat[j] < k) {
        i++;
      }
    }
    return console.log("No");
  }
}

if (process.env.LOGNAME === "ellu") {
  runProgram(`2
      5 7
      1 2 3 4 5
      5 12
      1 2 3 4 5`);
} else {
  process.stdin.resume();
  process.stdin.setEncoding("ascii");
  let read = "";
  process.stdin.on("data", function (input) {
    read += input;
  });
  process.stdin.on("end", function () {
    read = read.replace(/\n$/, "");
    runProgram(read);
  });
  process.on("SIGINT", function () {
    read = read.replace(/\n$/, "");
    runProgram(read);
    process.exit(0);
  });
}
// ***************************************************
// Split New Line
// split(/[\r\n]+/)
// Math.floor(Math.random() * 101) + 1;
