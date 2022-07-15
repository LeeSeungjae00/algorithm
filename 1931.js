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
    const N = Number(input.shift());

    const endArr = input.map(val => val.split(" ").map(Number));
    let temp = 0;
    let result = 0;

    endArr.sort((a, b) => {
        if(b[1] === a[1]){
            return b[0] - a[0]
        }
        return b[1] - a[1]
    });


    while(endArr.length !== 0){
        const [a , b] = endArr.pop()
        if(a >= temp){
            temp = b;
            result++;
        }
    }

    console.log(result)
}