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

const result = [];
let arr

function checkArr(x, y, step) {
    let temp = arr[y][x]
    for (let i = y; i < y + step; i++) {
        for (let j = x; j < x + step; j++) {
            if (temp !== arr[i][j]) {
                return false
            }
        }
    }
    return temp
}



function quadTree(x, y, step) {
    let divStep = (step / 2) << 0
    const dx = [0, divStep, 0, divStep];
    const dy = [0, 0, divStep, divStep];
    result.push("(")

    dx.forEach((valx, i) => {
        const valy = dy[i];
        let temp = checkArr(x + valx, y + valy, divStep);
        if (temp === false) {
            quadTree(x + valx, y + valy, divStep)
        } else {
            result.push(temp)
        }
    });

    result.push(")")
}

function main(input) {
    const N = +input.shift()

    arr = input.map((val) => val.split(''))
    const temp = checkArr(0, 0, N)
    if (temp !== false) {
        console.log(temp)
        return;
    };

    quadTree(0, 0, N)


    console.log(result.join(''))

}