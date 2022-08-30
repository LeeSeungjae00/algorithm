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
    const [N, M] = input.shift().map(Number)
    const wall = []
    const graph = input.map((str, i) =>
        str.split('').map((val, j) => {
            if (val === '1') wall.push([i, j])
            return +val
        })
    )

    function bfs(start, wall) {
        const queue = [start];
        const tempQueue = [];
        const visited = {};
        visited[start] = true;
        const dy = [1, -1, 0, 0]
        const dx = [0, 0, -1, 1]
        while (queue.length !== 0) {
            const [y, x] = queue.pop();
            for(let i = 0 ; i < 4 ; i++){
                const [ny, nx] = [y + dy[i], x + dx[i]]
                if(!visited) continue
                if(dy < 0 && dy >= N && dx < 0 && dx >= M) continue
            }
        }
    }
}   