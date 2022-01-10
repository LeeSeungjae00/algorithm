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


let checkChar = [];

function main(input) {
    const [N, ...words] = input;
    let result = 0;

    words.forEach(word => {
        let temp = false
        word.split('').forEach((chr, i) => {
            if (checkChar.indexOf(chr) === -1) {
                checkChar.push(chr);
            } else {
                if (word.split('')[i - 1] !== chr) {
                    temp = true;
                }
            }
        })
        checkChar = []
        if (temp) result++
    });
    console.log(+N - result);
}