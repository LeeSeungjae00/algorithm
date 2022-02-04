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



function fibo(num){
    if(num < 2) return num;
    else return fibo(num - 1) + fibo(num - 2);
}

function main(input) {
    console.log(fibo(+input[0]))
}
