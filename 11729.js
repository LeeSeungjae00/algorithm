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

const lines = [];
let count = 0;

function hanoi(N, from, to, other){
    if(N === 0) return;
    else{
        hanoi(N - 1, from, other, to);
        lines.push(`${from} ${to}`);
        ++count;
        hanoi(N - 1, other, to, from);
    }
}


function main(input) {
    let num = +input[0];
    hanoi(num, 1, 3, 2);
    console.log(count);
    console.log(lines.join('\n'));
}