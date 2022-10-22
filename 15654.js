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
    const arr = input[1].split(' ').sort((a, b) => a - b)
    const result = []

    function dfs(v, cnt) {
        if (cnt === M) {
            result.push(v.trim())
            return
        }
        for (i of arr) {
            if (v.split(' ').indexOf(i) === -1) {
                t = v + i + ' ';
                dfs(t, cnt + 1)
            }
        }
    }



    dfs("", 0)

    console.log(result.join('\n'))
}