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
    const [N, M] = input.shift().split(' ').map(Number)
    const nums = input.shift().split(' ');
    const cumsum = [0]
    nums.forEach((val, i) => {
        cumsum[i + 1] = cumsum[i] + +val
    })
    const result = [];

    input.forEach(str => {
        const [i, j] = str.split(' ').map(Number);

        result.push(cumsum[j] - cumsum[i - 1])
    })

    console.log(result.join('\n'))
}