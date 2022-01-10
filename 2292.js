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
    //1 7 19 37 61 
    //10 => 1 + 2 + 3 + 4
    let N = +input[0] - 1;
    let n = Math.ceil(N / 6);
    let i = 1;
    let temp = 0;
    if(N === 0) {
        console.log(1);
        return;
    }
    while(true){
        temp += i;
        if(temp >=  n){
            console.log(i + 1);
            return;
        }
        ++i;
    }


}