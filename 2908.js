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
    const [B, A] = input[0].split('').reverse().join('').split(' ');
    console.log(Math.max(Number(A), Number(B)))

}