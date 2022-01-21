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
    const arr = [];

    input.forEach(N => {
        if(+N === 0) return;
        let N2 = +N * 2;

        for (let i = 2; i <= Math.sqrt(Number(N2)); i++) {
            if (arr[i] !== false) {
                for (let j = i * i; j <= N2; j += i) {
                    arr[j] = false;
                }
            }
        }

        arr.splice(0, 2, false, false)

        let count = 0;

        for (let i = Number(N) + 1; i <= Number(N2); i++) {
            if (arr[i] === undefined) {
                ++count;
            }
        }

        console.log(count);
    });
}