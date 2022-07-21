const { groupEnd } = require("console");
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
    const N = Number(input.shift())
    const set = new Set(input[0].split(" ").map(Number));
    const result = []
    const arr = [...set]
    const map ={}
    arr.sort((a, b) => a - b).forEach((val, idx) => {
        map[val] = idx
    })

    input[0].split(' ').forEach(val => {
        result.push(map[val])
    })

    console.log(result.join(' '))

}