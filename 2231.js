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
    const N = input[0];
    let i = 1;
    while(i <= 1000000) {
        let iToChar = i.toString().split('');
        let bunHeaHap = iToChar.map(Number).reduce((pre,curr) => pre + curr, i)
        if(bunHeaHap === +N) {
            console.log(i);
            return;
        }
        i++;
    }
    console.log(0);
}