var readline = require("readline");
var r = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

const input = []

r.on("line", function (line) {
    input.push(line);
}).on("close", function () {
    main(input);
    process.exit();
});

const alpahbet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']

function main(input) {
    const [str] = input;
    const strArr = str.split('');
    let result = '';
    alpahbet.forEach(val => {
        result += strArr.indexOf(val) + ' ';
    })
    console.log(result)
}