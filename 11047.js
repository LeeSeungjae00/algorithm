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
    const [N, K] = input.shift().split(' ').map(Number)
    const coins = input.map(Number).filter(val => val <= K)
    let temp = K
    let result = 0
    let len = coins.length - 1

    while(1){
        result += Math.floor(temp / coins[len])
        temp = temp % coins[len]
        len--;
        if(temp === 0) break;
    
    }

    console.log(result)
}


