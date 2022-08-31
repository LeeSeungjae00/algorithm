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
    const [N, M] = input.shift().split(' ').map(Number)
    const graph = input.map((str) =>
        str.split('')
    )

    if (N === 1 && M === 1) {
        console.log(1)
        return
    }

    function bfs(start) {
        let queue = [start];
        let tempQueue = [];
        const visited = [new Array(N).fill(0).map(() => new Array(M)), new Array(N).fill(0).map(() => new Array(M))]
        visited[0][start[0]][start[1]] = true;
        let depth = 1;

        const dy = [1, -1, 0, 0]
        const dx = [0, 0, -1, 1]
        while (queue.length !== 0) {
            ++depth
            for (let i = 0; i < queue.length; i++) {
                const [y, x, broken] = queue[i];
                for (let i = 0; i < 4; i++) {
                    const [ny, nx] = [y + dy[i], x + dx[i]]
                    if (ny < 0 || ny >= N || nx < 0 || nx >= M) continue
                    if (broken === 1 && graph[ny][nx] === '1') continue
                    if (graph[ny][nx] === '1') {
                        if (visited[1][ny][nx]) continue
                        tempQueue.push([ny, nx, 1])
                    } else {
                        if (visited[broken][ny][nx]) continue
                        tempQueue.push([ny, nx, broken])
                        visited[broken][ny][nx] = true
                        if (ny === N - 1 && nx === M - 1) return depth
                    }
                }
            }
            queue = tempQueue
            tempQueue = []
        }
        return -1

    }

    console.log(bfs([0, 0, 0]))
}