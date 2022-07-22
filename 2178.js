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

    let arr = input.map(val => val.split(''));
    const visited = new Array(N).fill(0).map(() => new Array(M).fill(0));
    result = 0;



    function bfs(y,x){
        const queue = [];
        const dx = [-1, 0, 1, 0];
        const dy = [0, 1, 0, -1];
        queue.push([y, x]);
        visited[y][x] = 1;
        while(queue.length !== 0){
            const [y, x] = queue.shift();
            for(let i = 0; i < 4; i++){
                const [ny, nx] = [dy[i] + y, dx[i] + x];
                if (nx < 0 || ny < 0 || nx >= M || ny >= N) continue;
                if (arr[ny][nx] === "1" && !visited[ny][nx]){
                    visited[ny][nx] = visited[y][x] + 1;
                    queue.push([ny,nx]);
                } 
            }
        }
    }

    bfs(0,0)

    console.log(visited[N - 1][M - 1])

}
