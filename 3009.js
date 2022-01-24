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
    const [x1 , y1] = input[0].split(' ');
    const [x2 , y2] = input[1].split(' ');
    const [x3 , y3] = input[2].split(' ');
    let result = "";

    if(x1 === x2){
        result += (x3 + " ");
    }else{
        if(x1 === x3){
            result += (x2 + " ");
        }else{
            result += (x1 + " ");
        }
    }

    if(y1 === y2){
        result += y3;
    }else{
        if(y1 === y3){
            result += y2;
        }else{
            result += y1;
        }
    }

    console.log(result);
}