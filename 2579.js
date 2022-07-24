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

const DP = [];

function bigger(a , b){
    return a > b ? a : b;
}

function main(input) { 
    const inp = input.map(Number)
    const N = inp.shift();
    DP[0] = inp[0];
    DP[1] = bigger(inp[0] + inp[1], inp[1])
    DP[2] = bigger(inp[0] + inp[2], inp[1] + inp[2])

    for (let i = 3; i < N; i++) {
        DP[i] = bigger(DP[i - 2] + inp[i], inp[i - 1] + inp[i] + DP[i -3])
    }

    console.log(DP[N - 1])

}
