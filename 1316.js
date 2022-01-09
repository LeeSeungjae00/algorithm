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


const checkChar = [];
let temp = "";

function main(input){
    const [N, ...words] = input;
    let result = 0;

    words.forEach(word => {
        word.split('').forEach((chr, i) => {
            
        })
    });
}