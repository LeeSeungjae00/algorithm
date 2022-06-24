
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
    const [N,M] = input[0].split(" ").map(Number);
    const trees = input[1].split(" ").map(Number);
    let min = 0, max = Math.max.apply(null, trees);
    let mid;


    while(min <= max){
        mid = Math.floor((max + min) / 2)

        const cutTree = trees.reduce((pre, curr) => {
            if(curr < mid) return pre
            return pre + (curr - mid)
        },0)

        if(cutTree >= M){
            min = mid + 1;
        }else{
            max = mid - 1;
        }
    }

    console.log(max);

}