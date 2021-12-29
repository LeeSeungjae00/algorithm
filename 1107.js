const { checkPrimeSync } = require("crypto");
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

const list = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];


function main(input) {
    const [N, M, ..._] = input;
    const b_list = _.length !== 0 ? _[0].split(' ') : [];
    b_list.forEach(b => {
        list[+b] = false;
    });
    let i = 0;

    let basic = Math.abs(N - 100);

    while (true) {
        if (M === '10') { console.log(basic); return; }

        if (checkArr((Number(N) + i).toString().split(''))) {
            let up = (Number(N) + i);
            let upCase = up.toString().split('').length + Math.abs(i);
            console.log(Math.min(upCase, basic));
            return;
        }

        if (checkArr((Number(N) - i).toString().split(''))) {
            let up = (Number(N) - i);
            let upCase = up.toString().split('').length + Math.abs(i);
            console.log(Math.min(upCase, basic));
            return;
        }

        i++
    }

}

function checkArr(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (list[+arr[i]] === false) return false;
    }
    return true;
}