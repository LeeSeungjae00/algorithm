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

function main(input) {
  const D = BigInt(1_000_000_007)
  const N = BigInt(input[0])
  const dp =
    { [BigInt(0)]: 0, [BigInt(1)]: 1, [BigInt(2)]: 1 }

  function fibo(n) {
    if (dp[n] !== undefined) {
      return dp[n]
    } else {
      if ((BigInt(n) % BigInt(2)).toString() === '0') {
        // 짝
        let m = BigInt(n) / BigInt(2)
        const a = fibo(m - BigInt(1));
        const b = fibo(m);

        dp[n] = (BigInt(2) * BigInt(a) + BigInt(b)) % BigInt(D) * BigInt(b) % BigInt(D);
        return dp[n];

      } else {
        //홀
        let m = (BigInt(n) + BigInt(1)) / BigInt(2)
        const a = fibo(m);
        const b = fibo(m - BigInt(1));
        dp[n] = (BigInt(a) * BigInt(a)) % BigInt(D) + (BigInt(b) * BigInt(b)) % BigInt(D);
        return dp[n];
      }
    }
  }

  console.log(fibo(N).toString())

}