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

const charArr = ["c=", "c-", "dz=", "d-", "lj", "nj", "s=", "z="]

function main(input){
    let string = input[0]


    charArr.forEach(char => {
        string = string.replaceAll(char, "!");
    })

    console.log(string.length)
}