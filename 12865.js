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

function main(input) {
  const [N, K] = input.shift().split(' ').map(Number)
  const dp = new Array(N + 1).fill(0).map(() => new Array(K + 1).fill(0))
  const arr = input.map(val => val.split(' ').map(Number))

  for (let i = 1; i <= N; i++) {
    for (let j = 1; j <= K; j++) {
      if (j - arr[i - 1][0] >= 0) dp[i][j] = Math.max(dp[i - 1][j], dp[i - 1][j - arr[i - 1][0]] + arr[i - 1][1])
      else dp[i][j] = dp[i - 1][j]
    }
  }

  console.log(dp[N][K])
}
