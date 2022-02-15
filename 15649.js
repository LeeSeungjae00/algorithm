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
    const [N, M] = input[0].split(' ').map(_ => +_);
    const output = [];
    fuc(N, M, [])

    function fuc(N, M, ex) {
        for (let i = 1; i <= N; i++) {
            if (ex.indexOf(i) === -1) {
                if (M === 1) {
                    console.log([...ex, i].join(" "));
                }
                else {
                    fuc(N, M - 1, [...ex,i]);
                }
            }
        }
    }
}
