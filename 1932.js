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
    const N = +input[0]
    const dp = new Array(N + 1).fill(0).map(() => []);

    if(N === 1){
        console.log(+input[1])
        return
    }

    dp[1] = [+input[1]]
    dp[2] = input[2].split(' ').map(val => +val + +dp[1])

    for (let i = 3; i <= N; i++) {
        let data = input[i].split(' ').map(Number)
        dp[i][0] = dp[i - 1][0] + data[0]
        for (let j = 1; j < data.length - 1; j++) {
            if (dp[i - 1][j] > dp[i - 1][j - 1]) {
                dp[i][j] = dp[i - 1][j] + data[j]
            } else {
                dp[i][j] = dp[i - 1][j - 1] + data[j]
            }
        }
        dp[i][data.length - 1] = dp[i - 1][data.length - 2] + data[data.length - 1]
    }



    console.log(Math.max(...dp[N]))
}   