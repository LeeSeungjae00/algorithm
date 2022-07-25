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
    const T = +input.shift();
    const result = []

    const AC = (p, n, arr) => {
        let flag = true
        let cnt = 0

        for (let i = 0; i < p.length; i++) {
            let cmd = p[i];
            if (cmd === 'R') {
                flag = !flag
            } else {
                if(arr.length - cnt <= 0) return "error"
                flag ? cnt++ : arr.pop()
            }
        }

        arr.splice(0,cnt)

        return `[${flag ? arr.toString() : arr.reverse().toString()}]`
    }

    for (let i = 0; i < input.length; i+= 3) {
        const p = input[i].split('')
        const n = +input[i+1]
        const arr = JSON.parse(input[i + 2])

        result.push(AC(p, n, arr))
    }

    console.log(result.join('\n'))
}