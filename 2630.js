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

const count = {
    "0" : 0,
    "1" : 0
}
let arr = []

function findPage(x, y, N) {
    let temp = arr[y][x]
    for(let i = y; i < y+ N; i++){
        for(let j = x; j < x + N; j++){
            if(arr[i][j] !== temp){
                findPage(x , y , N / 2)
                findPage(x , y + (N / 2 >> 0) , N / 2)
                findPage(x + (N / 2 >> 0), y , N / 2)
                findPage(x + (N / 2 >> 0), y + (N / 2 >> 0) , N / 2)
                return;
            }
        } 
    }
    ++count[temp];
}

function main(input) {
    const N = +input.shift();
    arr = input.map(val => val.split(" "))

    findPage(0,0,N)

    console.log(`${count["0"]}\n${count["1"]}`)
}