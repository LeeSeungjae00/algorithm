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
    const [x, y, w, h] = input[0].split(' ');
    
    let zeroTow = x;
    let zeroToH = y;
    let xTow = w - x;
    let ytoh = h - y
    console.log(Math.min(zeroTow, zeroToH, xTow, ytoh));
}