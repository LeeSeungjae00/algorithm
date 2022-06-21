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
    for (let i = 0; i < input.length; i++) {
        if (input[i] === '0') return;
        if (input[i].lenght === 1) {
            console.log("yes");
            continue;
        }


        let sliceNum = (input[i].length / 2).toFixed(0);

        let front = input[i].slice(0, input[i].length % 2 === 0 ? sliceNum : sliceNum - 1);
        let back = input[i].slice(sliceNum, input[i].length);
        front = front.split("").reverse().join("");

        if(front === back){
            console.log("yes")
        }else{
            console.log("no")
        }
    }

}