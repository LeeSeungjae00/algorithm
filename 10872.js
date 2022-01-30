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

function fact(num){
    if(num > 1) return num * fact(num - 1);
    else return 1;
}

function main(input) {
    console.log(fact(+input[0]))
}