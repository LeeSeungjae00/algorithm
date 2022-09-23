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
    const N = +input[0]
    let result = 0

    function backTrack(x, y, depth, visited) {
        if (depth >= N) {
            result++;
            return
        }

        const cant = [];
        for (let j = 0; j < visited.length; j++) {
            const [vx, vy] = visited[j]

            let dis = y - j + 1;

            if (vx - dis >= 0) {
                cant[vx - dis] = true
            }
            if (vx + dis < N) {
                cant[vx + dis] = true
            }
            cant[vx] = true
        }

        for (let k = 0; k < N; k++) {
            if (!cant[k]) {
                let dep = depth + 1;

                backTrack(k, y + 1, dep, [...visited, [k, y + 1]])
            }
        }
    }

    for (let i = 0; i < N; i++) {

        backTrack(i, 0, 1, [[i, 0]])
    }

    console.log(result)
}

main('4')