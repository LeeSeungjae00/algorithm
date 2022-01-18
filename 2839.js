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
    let only3 = Infinity;
    let only5 = Infinity;
    let mix = Infinity;



    if(input[0] % 3 === 0){
        only3 = input[0] / 3;
    }
    if(input[0] % 5 === 0){
        only5 = input[0] / 5;
    }

    

    let i = 1;

    while(true){
        if(3 * i > input[0]) break;
        if((input[0] - (3 * i)) % 5 === 0){
            mix = i + (input[0] - (3 * i)) / 5;
            break;
        }
        i++
    }

    let result = Math.min(only3, only5 , mix);

    if(result === Infinity){
        console.log(-1);
    }else{
        console.log(result);
    }
}