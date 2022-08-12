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
    const N = +input.shift()
    const [R, G, B] = input[0].split(' ').map(Number);
    const DP = [
        [R],
        [G],
        [B]
    ]

    for (let i = 1; i < N; i++) {
        const [R, G, B] = input[i].split(' ').map(Number)
        DP[0][i] = Math.min(DP[1][i - 1] + R, DP[2][i - 1] + R)
        DP[1][i] = Math.min(DP[0][i - 1] + G, DP[2][i - 1] + G)
        DP[2][i] = Math.min(DP[0][i - 1] + B, DP[1][i - 1] + B)
    }

    console.log(Math.min(DP[0][N - 1], DP[1][N - 1], DP[2][N - 1]))

}   