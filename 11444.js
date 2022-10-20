//https://myprivatestudy.tistory.com/32 블로그 참고
var readline = require("readline");
var r = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

r.on("line", function (line) {
  input.push(line);
}).on("close", function () {
  main(input);
  process.exit();
});

//a(2n) = a(n)[a(n) + 2a(n-1)]
//a(n) = a(n / 2)[a(n / 2) + 2a(n / 2 - 1)]

//a(2n-1) = a(n)**2 + a(n-1)**2
//a(n) = a((n + 1) / 2) **2 + a((n + 1) / 2 - 1) ** 2

// function main(input) {
//   const D = BigInt(1_000_000_007)
//   const N = BigInt(input[0])
//   const dp =
//     { [BigInt(0)]: 0, [BigInt(1)]: 1, [BigInt(2)]: 1 }

//   function fibo(n) {
//     if (dp[n] !== undefined) {
//       return dp[n]
//     } else {
//       if ((BigInt(n) % BigInt(2)).toString() === '0') {
//         // 짝
//         let m = BigInt(n) / BigInt(2)
//         const a = fibo(m - BigInt(1));
//         const b = fibo(m);

//         dp[n] = (BigInt(2) * BigInt(a) + BigInt(b)) % BigInt(D) * BigInt(b) % BigInt(D);
//         return dp[n];

//       } else {
//         //홀
//         let m = (BigInt(n) + BigInt(1)) / BigInt(2)
//         const a = fibo(m);
//         const b = fibo(m - BigInt(1));
//         dp[n] = (BigInt(a) * BigInt(a)) % BigInt(D) + (BigInt(b) * BigInt(b)) % BigInt(D);
//         return dp[n];
//       }
//     }
//   }

//   console.log(fibo(N).toString())

// }

function main(input) {
  const D = BigInt(1_000_000_007)
  const N = BigInt(input[0])
  const base =
    [[1n, 1n], [1n, 0n]];

  const matrixMul = (a, b) => {
    const ret = new Array(2).fill(0).map(() => new Array(2))

    for (let i = 0; i < 2; i++) {
      for (j = 0; j < 2; j++) {
        ret[i][j] = 0n;
        for (let k = 0; k < 2; k++) {
          ret[i][j] += a[i][k] * b[k][j];
          ret[i][j] %= D
        }
      }
    }

    return ret
  }

  const func = (n) => {
    if (n === 1n) return base;
    let temp;
    if (BigInt(n) % 2n) {
      temp = func(BigInt(n) - 1n);
      return matrixMul(base, temp);
    } else {
      temp = func(BigInt(n) / 2n);
      return matrixMul(temp, temp);
    }
  }

  if (N === 0n) {
    console.log(0)
  }

  const ret = func(N);

  console.log(ret[0][1].toString())

}