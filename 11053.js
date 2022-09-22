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
    const A = +input.shift()
    const dp = [0]
    const arr = input[0].split(' ').map(Number);
    arr.forEach((element, i) => {
        dp[i] = 1
        for (let j = 0; j < i; j++) {
            if (arr[j] < element && dp[i] < dp[j] + 1) {
                dp[i] = dp[j] + 1
            }
        }
    });



    console.log(Math.max(...dp))

}