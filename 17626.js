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
    const DP = [0, 1]

    for (let i = 2; i <= +input[0]; i++) {
        let min = Infinity;
        for(let j = 1; j * j <= i ; j++){
            min = Math.min(min, DP[i - j * j]);
        }
        DP[i] = min + 1
    }

    console.log(DP[+input[0]])
}   