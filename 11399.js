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
    const N = Number(input.shift());
    let result = 0;
    const nums = input[0].split(' ').map(Number).sort((a, b) => a - b);

    let preVal = 0
    for(let i = 0; i < N; i ++){
        preVal = preVal + nums[i]
        result += preVal
    }

    console.log(result)
}