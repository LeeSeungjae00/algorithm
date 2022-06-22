
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
    let [N, A, M, nums] = input
    let result = [];

    let hasMap = {};

    A.split(" ").forEach((a) => {
        hasMap[a] = true;
    })

    
    nums.split(" ").forEach(num => {
       if(hasMap[num]){
           result.push("1")
       }else{
           result.push("0")
       }
    })

    console.log(result.join("\n"))
}