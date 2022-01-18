const { on } = require("events");
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
    const [N , testCases] = input;
    let result = 0;

    testCases.split(' ').map(_ => +_).forEach(num => {
        if(num === 1) return
        if(num <= 3) return ++result;
        
        for(let i = 2; i < num; i++){
            if(num % i === 0){
                return
            }
        }
        return ++result;
    });
    console.log(result);
}