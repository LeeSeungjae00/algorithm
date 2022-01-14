const { fork } = require("child_process");
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

function numFormat(variable) {
    variable = Number(variable).toString();
    if (Number(variable) < 10 && variable.length == 1)
        variable = "0" + variable;
    return variable;
}


function main(input) {
    const [length, ...testCases] = input;

    testCases.forEach(testCase => {
        const [H, W, N] = testCase.split(' ').map(_ => +_);
        const lastNumn = Math.ceil(N / H);
        const floor = (N % H) === 0 ? H : N % H

        if(H === 1){
            console.log(H + numFormat(N))
        }else{
            console.log(floor + numFormat(lastNumn));
        }
    });
}