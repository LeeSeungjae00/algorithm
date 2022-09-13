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
    const [N, M] = input.pop().split(' ').map(Number)
    const dp = [1,1,2]

    function fact(n){
        for(let i = 2; i <= n; i++){
            dp[i] = BigInt(i) * BigInt(dp[i - 1]);
        }

        return dp[n]
    }

    function C(n, m){
        return BigInt(fact(n)) / (BigInt(fact(m)) * BigInt(fact(n - m)))
    }


    console.log(C(N, M) + "")
}