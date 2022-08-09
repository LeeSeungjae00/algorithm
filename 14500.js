const { copyFileSync } = require("fs");
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
    let [N, M] = input.shift().split(' ').map(Number)
    const arr = input.map(val => val.split(' ').map(Number))
    let max = 0;

    function bfs(x, y) {
        const dx = [1, -1, 0, 0]
        const dy = [0, 0, 1, -1]
        const visited = {}

        visited[`${y + "" + x}`] = arr[y][x]
        let queue = [[x, y]]
        let depth = 0


        while (depth <= 1) {
            depth++
            const tempQueue = []
            queue.forEach((val) => {
                console.log(visited)
                dx.forEach((xVal, i) => {
                    [lx, ly] = [val[0] + xVal, val[1] + dy[i]]

                    if (lx < 0 || ly < 0 || lx >= M || ly >= N) return
                    if (visited[`${ly + "" + lx}`]) return

                    visited[`${ly + "" + lx}`] = visited[`${val[1] + "" + val[0]}`] + arr[ly][lx];
                    tempQueue.push([lx, ly])

                })
            })
            queue = [...tempQueue]
        }

        let loopData = [[-1, -1, 1, 0], [0, -1, 1, 1], [-1, 0, 1, 1], [-1, -1, 0, 1]]
        for (let i = 0; i < 4; i++) {
            const [fx, fy, sx, sy] = [x + loopData[i][0], y + loopData[i][1], x + loopData[i][2], y + loopData[i][3]]

            if (fx < 0 || fy < 0 || sx >= M || sy >= N) continue

            let val = arr[y][fx] + arr[y][sx] + arr[fy][x] + arr[sy][x]


            if (max < val) max = val
        }


        if (x + 1 < M && y + 1 < N) {
            let val = arr[y][x] + arr[y][x + 1] + arr[x + 1][y + 1] + arr[y + 1][x]
            if (max < val) max = val
        }


        queue.forEach(val => {
            const [x, y] = val;
            if (max < visited[`${y + "" + x}`]) max = visited[`${y + "" + x}`]
        })

        return max
    }

    for (let i = 0; i < N; i++) {
        for (let j = 0; j < M; j++) {
            bfs(j, i)
        }
    }


    console.log(max);
}