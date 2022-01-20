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
    let N = +input[0];
    const resultArr =[];
    let i = 2;

    if(N === 1) return;

    while(N !== 1){
        do{
            if(N % i === 0){
                N = Math.round(N / i);
                resultArr.push(i);
                i = 2;
                break;
            }
            i++
        }while(true)
    }

    console.log(resultArr.sort((a , b) => a - b).join('\n'));

}