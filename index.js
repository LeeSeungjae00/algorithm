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
    const [N, M] = input[0].split(' ').map(Number)
    const result = []

    function backTrack(data) {
        if (data.length === M) {
            result.push(data.join(' '))
            return
        }


        for (let i = data[data.length - 1]; i <= N; i++) {
            if (data.indexOf(i) === -1) {
                backTrack([...data, i])
            }
        }
    }


    for (let i = 1; i <= N - M + 1; i++) {
        backTrack([i])
    }

    console.log(result.join('\n'))
}
