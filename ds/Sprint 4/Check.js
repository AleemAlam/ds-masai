function runProgram(input) {
  input = input.trim().split(/[\n\r]+/);

  var tests = +input[0];
  let ans = [];
  let min = [];
  for (let z = 0, line = 1; z < tests; z++) {
    let [condition, N] = input[line++].trim().split(" ");

    let num = Number(N);

    //console.log(condition, num);
    /*
      if (condition === "push") {
        ans.push(num);
      } else if (condition == "getMin") {
         min.push(Math.min(...ans));
      //   console.log(Math.min(...ans));
      } else if (condition == "pop") {
        ans.pop();
      }
      or
      */
    if (condition === "push") {
      ans.push(num);
      if (min.length == 0) {
        min.push(num);
      } else if (min[min.length - 1] >= num) {
        min.push(num);
      }
    } else if (condition == "getMin") {
      console.log(min[min.length - 1]);
      //   console.log(min, ans);
    } else {
      let x = ans.pop();
      if (x == min[min.length - 1]) {
        min.pop();
      }
    }
  }
}
if (process.env.LOGNAME === "ellualeem") {
  runProgram(`
      9
      push 5
      push 3
      push 1
      push 6
      getMin
      pop
      getMin
      pop
      getMin
  
      `);
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
