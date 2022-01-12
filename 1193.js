//00 -> 01 -> 10 -> 02 -> 11 -> 20 -> 30 -> 12 ->  21 -> 03 -> 40 -> 31 -> 22 -> 13 -> 40
// 1    2     3     4     5     6     7     8      9     10    11    12    13    14    15
//1+ 2 + 5 + 

const { kMaxLength } = require("buffer");
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
    const X = +input[0];
    let line = 1;
    let i = 1;
    while(true){
        if(line >= X) break;
        ++i;
        line += i;
    }

    if(i % 2 === 0){
        console.log(`${i + 1 - (line - X + 1)}/${line - X + 1}`)
    }else{
        console.log(`${line - X + 1}/${i + 1 - (line - X + 1)}`)
    }
    
}