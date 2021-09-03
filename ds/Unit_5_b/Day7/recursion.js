// function fun(x, y) {
//   if (x == 0) return y;
//   else return fun(x - 1, x + y);
// }
// console.log(fun(3, 5));

// function fun(x) {
//   if (x <= 0) return;
//   else {
//     fun(--x);
//     console.log(x);
//     fun(--x);
//   }
// }
// fun(3);

// function fun(p, q) {
//   if (p < q) {
//     return 0;
//   } else if (p == q) {
//     return p + fun(p - 1, q);
//   } else {
//     return q + fun(p - 2, q);
//   }
// }
// console.log(fun(7, 5));

// function fun(a) {
//   if (a > 1) {
//     fun(Math.floor(a / 2));
//     fun(Math.floor(a / 2));
//   }
//   console.log("*");
// }
// fun(7);

// function p(a) {
//   if (a == 0) return 1;
//   else return p(a - 1) + q(a - 1);
// }
// function q(a) {
//   if (a == 0) return 2;
//   else return q(a - 1) + q(a - 1);
// }
// console.log(p(q(3)));

// function fibonacci(n) {
//   console.log("call");
//   if (n <= 1) return n;
//   else return fibonacci(n - 1) + fibonacci(n - 2);
// }
// console.log(fibonacci(5));

// function fun(x, y) {
//   if (y == 0) return 0;
//   else return x + fun(x, y - 1);
// }

// console.log(fun(3, 4));

// function fun(n) {
//   if (n == 0) return;
//   else {
//     console.log(n % 2);
//     fun(Math.floor(n / 2));
//   }
// }

// fun(25);
// console.log(Math.floor(1 / 2));

// function foo(n, r) {
//   if (n > 0) {
//     return (n % r) + foo(Math.floor(n / r), r);
//   } else return 0;
// }

// console.log(foo(513, 2));

// Fibonacci Using Recursion

// function fun(n) {
//   if (n == 0) {
//     return 0;
//   } else if (n == 1) {
//     return 1;
//   } else {
//     return fun(n - 2) + fun(n - 1);
//   }
// }

// console.log(fun(2));

// function fun(a, b) {
//   if (b == 0) return a;
//   else return fun(b, a % b);
// }

// console.log(fun(36, 60));
// console.log(36 % 60);

// function foo(n, sum) {
//   let k = 0,
//     j = 0;
//   if (n == 0) return;
//   k = n % 10;
//   j = Math.floor(n / 10);
//   sum = sum + k;
//   foo(j, sum);
//   console.log(k);
// }

// let a = 2048,
//   sum = 0;
// foo(a, sum);
// console.log(sum);

// function fun(i) {
//   a = 10;
//   ++a;
//   a = a + i;
//   console.log(a);
// }

// let b = 5;
// fun(b);
// fun(b);
// console.log(b);

// function count(x, y, val) {
//   if (y != 1) {
//     if (x != 1) {
//       console.log(val++);
//       count(Math.floor(x / 2), y);
//     } else {
//       y = y - 1;
//       count(1024, y, val);
//     }
//   }
// }
// let val = 0;
// count(1024, 1024, val);

// function fun(arr, n) {
//   if (n == 1) {
//     return arr[0];
//   }
//   return Math.min(arr[n - 1], fun(arr, n - 1));
// }

// let arr = [1, 3, -4, 2, 8, 0, -5];
// console.log(fun(arr, 7));

// function fun(a, b) {
//   if (b == 0) {
//     return 1;
//   } else if (b < 2) {
//     return a;
//   }
//   return a * fun(a, b - 1);
// }

// console.log(fun(2, 0));

// console.log(Math.pow(2, 3));

// function fun(n, r) {
//   if (n == 0) {
//     return 1;
//   }
//   return Math.floor(1 / Math.pow(r, n)) + fun(n - 1, r);
// }

// console.log(fun(2, 3));

// function fun(a, b) {
//   if (a == 0) {
//     return b;
//   }
//   return fun(b % a, a);
// }
// console.log(fun(30, 12));

// function toh(disk, from, to, aux) {
//   if (disk == 1) {
//     console.log(from, "->", to);
//     return;
//   }
//   toh(disk - 1, from, aux, to);
//   console.log(from, "->", to);
//   toh(disk - 1, aux, to, from);
// }

// toh(64, "A", "C", "B");

// function generatePermutations(arr, left, right) {
//   if (left == right) {
//     console.log(arr);
//     return;
//   }
//   for (let i = left; i <= right; i++) {
//     arr = swap(arr, i, left);
//     generatePermutations(arr, left + 1, right);
//   }
// }
// function swap(arr, index, right) {
//   const temp = arr[index];
//   arr[index] = arr[right];
//   arr[right] = temp;
//   return arr;
// }

// generatePermutations([1, 2, 3], 0, 2);

let permutations = (current, remaining) => {
  if (remaining.length <= 0) console.log(current.slice().join(" "));
  else {
    for (let i = 0; i < remaining.length; i++) {
      // Loop through remaining elements
      current.push(remaining[i]); // Insert the iTH element onto the end of current
      permutations(
        current.slice(),
        remaining.slice(0, i).concat(remaining.slice(i + 1))
      ); // Recurse with inserted element removed
      current.pop(); // Remove last inserted element for next iteration
    }
  }
};
