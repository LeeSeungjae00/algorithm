const { SourceMap } = require("module");
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
    const [N, str] = input;
    let r = 1;

    console.log(str.split("").reduce((pre, curr, index) => {
        let result = (pre + (curr.charCodeAt() - 96) * r) % 1234567891
        r *= 31
        r %= 1234567891
        return result
    }, 0))
}