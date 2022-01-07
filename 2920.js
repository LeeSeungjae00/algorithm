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

const ASC = "1 2 3 4 5 6 7 8"
const DESC = "8 7 6 5 4 3 2 1"

function main(input){
    if(input[0] === ASC){
        console.log("ascending");
    }else if(input[0] === DESC){
        console.log("descending");
    }else{
        console.log("mixed");
    }
}