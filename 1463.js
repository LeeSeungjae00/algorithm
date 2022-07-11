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


const DP = []
DP[1] = 0;
DP[2] = 1;
DP[3] = 1;



function main(input) {
    const N = Number(input[0]);
    let two, three, one
    for (let i = 3; i <= N; i++) {
        let two = Infinity, three= Infinity, one= Infinity
        if (i % 2 === 0) {
            two = DP[2] + DP[Math.floor(i / 2)]
        }
        if (i % 3 === 0) {
            three = DP[3] + DP[Math.floor(i / 3)]
        }
        one = DP[i] = DP[i - 1] + 1;

        DP[i] = Math.min.apply(null, [two, three, one])
    }

    console.log(DP[N]);

}