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

function main(input){
    const strArr = input[0].split('');
    let result = 0;
    strArr.forEach(chr => {
        result += chr.charCodeAt()-65 + 2;
    });

    console.log(result);

}