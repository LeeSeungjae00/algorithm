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

let arr = []

const count = {
    "-1": 0,
    "0": 0,
    "1": 0
}

function findPage(x, y, step) {
    let temp = arr[y][x]
    for (let i = y; i < y + step; i++) {
        for (let j = x; j < x + step; j++) {
            if(temp !== arr[i][j]){
                findPage(x, y, step / 3);
                findPage(x + step / 3, y, step / 3)
                findPage(x + step / 3 * 2, y, step / 3)

                findPage(x, y + step / 3, step / 3);
                findPage(x + step / 3, y + step / 3, step / 3)
                findPage(x + step / 3 * 2, y + step / 3, step / 3)

                findPage(x, y  + step / 3 * 2, step / 3);
                findPage(x + step / 3, y  + step / 3 * 2, step / 3)
                findPage(x + step / 3 * 2, y  + step / 3 * 2, step / 3)
                return
            }
        }
    }
    ++count[temp];
}


function main(input) {
    const N = Number(input.shift())

    arr = input.map((val) => val.split(" "))

    findPage(0,0, N);

    console.log(`${count["-1"]}\n${count["0"]}\n${count["1"]}`);

}