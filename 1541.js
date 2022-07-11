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
    const arr = input[0].split("-");

    const fstVal = arr.shift().split("+").map(Number).reduce((pre,curr) => pre + curr, 0);
    

    console.log(arr.reduce((pre, curr) => {
        return pre - curr.split("+").map(Number).reduce((pre, curr) => pre + curr, 0);
    }, fstVal))

}