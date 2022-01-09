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

let dialMap = {
    'A' : 3,
    'B' : 3,
    'C' : 3,

    'D' : 4,
    'E' : 4,
    'F' : 4,

    'G' : 5,
    'H' : 5,
    'I' : 5,
    'J' : 6,
    'K' : 6,
    'L' : 6,
    'M' : 7,
    'N' : 7,
    'O' : 7,
    'P' : 8,
    'Q' : 8,
    'R' : 8,
    'S' : 8,
    'T' : 9,
    'U' : 9,
    'V' : 9,
    'W' : 10,
    'X' : 10,
    'Y' : 10,
    'Z' : 10,
}

function main(input){
    const strArr = input[0].split('');
    let result = 0;
    strArr.forEach(chr => {
        result += dialMap[chr];
    });

    console.log(result);

}