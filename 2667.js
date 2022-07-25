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
    const N = +input.shift();
    const arr = input.map(val => val.split(''));
    const visited = new Array(N).fill(0).map(() => new Array(N).fill(false));
    const result = []

    function dfs(x , y){
        const dx = [-1, 0, 1, 0]
        const dy = [0, -1, 0, 1]
        const queue = [];
        let cnt = 1;
        queue.push([x, y])
        visited[y][x] = true
        while(queue.length){
            const [x, y] = queue.pop();
            for(let i = 0; i < 4; i++){
                const [nx, ny] = [dx[i] + x, dy[i] + y];
                if(nx < 0 || ny < 0 || nx >= N || ny >= N) continue;
                if(arr[ny][nx] === "1" && !visited[ny][nx]){
                    visited[ny][nx] = true;
                    ++cnt
                    queue.push([nx, ny])
                }
            }

        }
        result.push(cnt)
    }

    for(let i = 0; i < N ; i ++){
        for(let j = 0; j < N; j ++){
            if(arr[i][j] === "1" && !visited[i][j]){
                dfs(j,i)
            }
        }
    }

    console.log(`${result.length}\n${result.sort((a, b) => a - b).join('\n')}`)

}
