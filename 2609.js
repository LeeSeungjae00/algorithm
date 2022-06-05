
const { SourceMap } = require("module");
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
    let [A, B] = input[0].split(' ').map(Number);
    const yack = [];
    const result = [];

    while(true){
        let cnt = 1;
        while(true){
            ++cnt;
            if(A % cnt === 0 & B % cnt === 0){
                yack.push(cnt);
                A /= cnt;
                B /= cnt;
                break;
            }
            if(cnt > A || cnt > B){
                result.push(yack.reduce((pre,curr) => pre * curr, 1));
                result.push(result[0] * A * B)
                console.log(result.join("\n"));
                return;
            }
        }
    }
}