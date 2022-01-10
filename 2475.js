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

function main(input){
    console.log(input[0].split(' ').reduce((pre, curr) => pre += (curr * curr), 0) % 10)
}