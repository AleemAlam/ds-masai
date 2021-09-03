function runProgram(input) {
  input = input.trim().split("\n");
  const [weight, trucks] = input[0].trim().split(" ").map(Number);
  const capacity = input[1].trim().split(" ").map(Number);
  console.log(masaiParker(weight, capacity));
}

function masaiParker(weight, capacity) {
  if (weight < 0) {
    return 0;
  } else if (weight == 0) {
    return 1;
  }
  let sum = 0;
  for (let i = 0; i < capacity.length; i++) {
    sum += masaiParker(weight - capacity[i], capacity);
  }
  return sum;
}

if (process.env.LOGNAME === "ellu") {
  runProgram(`3 6
    1 2 3 4 5 6`);
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
