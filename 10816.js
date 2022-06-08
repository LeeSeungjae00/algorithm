
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
    const [N, deck, M, cardList] = input;

    const sangunMap = {};
    const result = [];

    deck.split(" ").forEach(card => {
        if(sangunMap[card] === undefined){
            sangunMap[card] = 1;
            return;
        }
        ++sangunMap[card];
    });

    cardList.split(" ").forEach(card => {
        if(sangunMap[card] === undefined){
            result.push("0");
            return;
        }
        result.push(sangunMap[card]);
    })

    console.log(result.join(" "))
}
