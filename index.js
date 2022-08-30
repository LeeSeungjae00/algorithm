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
    const wall = []
    const graph = input.map((str, i) =>
        str.split('').map((val, j) => {
            if (val === '1') wall.push([i, j])
            return +val
        })
    )
    let min = Infinity

    function bfs(start, wall) {
        let queue = [start];
        let tempQueue = [];
        const visited = {};
        visited[`${start[0]}${start[1]}`] = 1;
        const dy = [1, -1, 0, 0]
        const dx = [0, 0, -1, 1]
        while (queue.length !== 0) {
            for(let i =0; i < queue.length; i++){
                const [y, x] = queue[i];
                for(let i = 0 ; i < 4 ; i++){
                    const [ny, nx] = [y + dy[i], x + dx[i]]
                    if(visited[`${ny}${nx}`]) continue
                    if(ny < 0 || ny >= N || nx < 0 || nx >= M) continue
                    if(graph[ny][nx] === 1 && (wall[0] !== ny || wall[1] !== nx)) continue
                    visited[`${ny}${nx}`] = visited[`${y}${x}`] + 1
                    if(visited[`${ny}${nx}`] > min) return false
                    if(ny === N - 1 && nx === M - 1) return visited[`${ny}${nx}`]
                    tempQueue.push([ny, nx])
                }
            }
            queue = [...tempQueue]
            tempQueue = []
        }
        return false;
    }

    for(let i =0; i < wall.length; i++){
        let temp = bfs([0,0], wall[i])
        if(temp) {
            min = temp
        }
    }

    console.log(min === Infinity ? '-1' : min)
}   

main(`8 8
01000100
01010100
01010100
01010100
01010100
01010100
01010100
00010100`.split('\n'))