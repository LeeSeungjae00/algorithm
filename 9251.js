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
    const str1 = input[0].split('')
    const str2 = input[1].split('')
    const N = str1.length
    const M = str2.length
    const dp = new Array(N + 1).fill(0).map(() => new Array(M+ 1).fill(0))

    for (let i = 1; i <= N; i++) {
        for (let j = 1; j <= M; j++) {
            if(i === 0 || j === 0){
                dp[i][j] = 0
            }else if(str1[i - 1] === str2[j - 1]){
                dp[i][j] = dp[i - 1][j - 1] + 1
            }else{
                dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1])
            }
        }        
    }

    console.log(dp[N][M])
}