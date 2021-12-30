const { triggerAsyncId } = require("async_hooks");
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
    const [N] = input;
    let result = 99;
    let numArr = N.split('');
    if (numArr.length <= 2) {
        console.log(N);
        return;
    }


    for (let i = 100; i <= N; i++) {
        if (checkDungcha(i.toString())) {
            ++result;
        }
    }
    console.log(result);
}

function checkDungcha(i) {
    let arr = i.toString().split('');
    let t = arr[1] - arr[0];

    for (let j = 2; j < arr.length; j++) {
        if (arr[j] - arr[j - 1] !== t) {
            return false;
        }
    }
    return true
}