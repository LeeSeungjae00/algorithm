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
    const T = +input.shift();
    const result = []
    const DP = [1, 1, 1]

    function dp(n){
        if(DP[n - 1]){
            return DP[n - 1]
        }
        for(let i  = 3; i < n ; i++){
            DP[i] = DP[i - 2] + DP[i - 3]
        }

        return DP[n - 1]
    }

    for(let i = 0; i < T; i++){
        result.push(dp(+input[i]))
    }

    console.log(result.join('\n'))

}


