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
    const [N, ...words] = input;

    const set = new Set(words);
    const uniqueWords = [...set];

    uniqueWords.sort((a, b) => {
        if (a.length === b.length) {
            return a < b ? -1 : 1;
        }
        return a.length - b.length
    });



    console.log(uniqueWords.join("\n"));

}ㅊ 