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
    let T = +input.shift();
    let result = [];

    function calendar([m, n, x, y]) {
        let temp = x
        const DP = []
        while (1) {

            let val = temp % n
            if (!DP[val]) {
                DP[val] = true
                if (val === n) {
                    return temp
                }
                if (val === y % n) {
                    return temp
                }
                temp += m;
            } else {
                return - 1
            }

        }
    }

    input.forEach(val => {
        result.push(calendar(val.split(' ').map(Number)))

    });

    console.log(result.join('\n'))

}
