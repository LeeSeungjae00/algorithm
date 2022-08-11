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
    const [N, M] = input.shift().split(' ').map(Number);
    const idMap = {}
    const result = []

    for(let i = 0; i < N; i++){
        const [id, pw] = input[i].split(' ')
        idMap[id] = pw
    }
    for (let i = N; i < N + M; i++) {
        result.push(idMap[input[i]]);
    }

    console.log(result.join('\n'))
}