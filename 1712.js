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
    const [A, B, C] = input[0].split(' ').map(_ => +_);
    let i = 1;

    if(B >= C) {
        console.log(-1);
        return;
    }

    console.log(Math.floor(A / (C - B)) + 1);

}