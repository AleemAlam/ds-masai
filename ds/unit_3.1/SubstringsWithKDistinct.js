function runProgram(input) {
  input = input.trim().split("\n");
  const [n, k] = input[0].trim().split(" ").map(Number);
  const str = input[1].trim();
  console.log(distinctK(str, n, k));

  const obj2 = [
    {
      name: "Aleem",
      age: 23,
    },
    {
      name: "Aleem",
      age: 23,
    },
    {
      name: "Aleem",
      age: 23,
    },
  ];

  obj2.forEach((item) => {
    console.log(item.name.length);
  });
  // console.log(Object.keys(obj2).length);
}

const distinctK = (str, n, k) => {
  let newObj = {};
  let count = 0;

  //abbabbaa k=2

  for (let i = 0; i < k; i++) {
    if (newObj[str[i]]) {
      newObj[str[i]]++;
    } else {
      newObj[str[i]] = 1;
    }
  }

  if (Object.keys(newObj).length == k) {
    count++;
  }
  //str = aabcdabbcdc
  //obj = {a:2, b:1, c:1}
  for (let j = k; j < n; j++) {
    // Add new element

    if (newObj[str[j]]) {
      newObj[str[j]]++;
    } else {
      newObj[str[j]] = 1;
    }
    // remove first element
    newObj[str[j - k]]--; // j = 3, k =3 str[0]=a newObj[a] = 1
    if (newObj[str[j - k]] == 0) {
      delete newObj[str[j - k]];
    }
    if (Object.keys(newObj).length == k) {
      count++;
    }
  }
  return count;
};

if (process.env.LOGNAME === "ellualeem") {
  runProgram(`11 3
  aabcdabbcdc`);
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
