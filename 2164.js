
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
    const N = +input[0];

    const deck = [];

    for(let i = 1; i <= N; i++){
        deck.push(i);
    }


    let topIndex = 0;

    while(topIndex <= deck.length){
        ++topIndex;
        let temp = deck[topIndex];
        ++topIndex;
        deck.push(temp);
    }

    console.log(deck[deck.length - 3])
}