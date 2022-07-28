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
    const T = +input.shift()
    const result = []

    for (let i = 0; i < T; i++) {
        const map = {}
        let n = +input.shift()
        for (let j = 0; j < n; j++) {
            let [w, c] = input.shift().split(' ')
            if (!map[c]) { map[c] = 1 }
            map[c]++
        }
        if (Object.keys(map).length === 1) {
            result.push(n)
            continue
        }
        let temp = 1;

        for (const key in map) {
            temp *= map[key];
        }
        result.push(temp - 1)
    }

    console.log(result.join('\n'))
}


