
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
    const [N, ...nums] = input;


    nums.sort((a, b) => {
        const [X1, Y1] = a.split(" ").map(Number);
        const [X2, Y2] = b.split(" ").map(Number);

        if (Y1 === Y2) return X1 - X2
        return Y1 - Y2
    });

    console.log(nums.join("\n"));


}