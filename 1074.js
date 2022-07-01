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

let result = 0

function Z(length, x, y) {
    const flag = length / 2;

    console.log(result)

    if (length === 1) return;

    if (x < flag && y < flag) {
        Z(flag, x, y)
    }
    else if (x >= flag && y < flag) {
        result += (flag * flag);
        Z(flag, x - flag, y)
    }
    else if (x < flag && y >= flag) {
        result += (flag * flag) * 2
        Z(flag, x, y - flag)
    }else{
        result += (flag * flag) * 3
        Z(flag, x - flag, y - flag)
    }
}

function main(input) {
    const [N, r, c] = input[0].split(" ").map(Number);

    Z(2 ** N, c, r);

    console.log(result)
}