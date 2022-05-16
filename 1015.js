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

function main(input){
    const [N, _A] = input;

    const A = _A.split(" ").map(_ => +_);
    const sorted = _A.split(" ").map(_ => +_).sort((a , b) => a - b);
    const result = [];

    for(let i = 0; i < N; i++){
        let index = sorted.indexOf(A[i]);
        sorted[index] = Infinity;
        result.push(index);
    }


    console.log(result.join(" "));
   
}