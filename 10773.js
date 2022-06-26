
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
    const [N, ...nums] = input.map(Number);
    const stack = [];


    nums.forEach(num => {
        if(num === 0){
            stack.pop();
            return;
        }
        stack.push(num);
    });

    console.log(stack.reduce((pre,curr) => pre + curr, 0));


}