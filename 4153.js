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
    input.forEach(val => {
        const arr = val.split(' ').map(_ => +_);
        
        if(arr[0] === 0) return;

        arr.sort((a ,b) => b - a);

        if(arr[0] * arr[0] === arr[1] * arr[1] + arr[2] * arr[2]){
            console.log("right");
        }else{
            console.log("wrong");
        }

    });
}