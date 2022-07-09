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
    let num = Number(input[0])
    let result = 0;
    
    while(num >= 5){
        num = Math.floor(num / 5)
        result += (num)
    }

    console.log(result)
}




