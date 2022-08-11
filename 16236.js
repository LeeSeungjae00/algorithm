const { kill } = require("process");
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
    const N = +input.shift()
    let result = 0;
    let currBaby
    const arr = input.map((str, i) => str.split(' ').map((val, j) => {
        let returnVal = +val
        if (returnVal === 9) {
            currBaby = [i, j]
            returnVal = 0
        }

        return returnVal
    }))

    const dx = [0, -1, 1, 0]
    const dy = [-1, 0, 0, 1]

    function bfs(start, babySize) {
        let queue = [start];
        const visited = {};
        let depth = -1;
        while (queue.length) {
            const tempQueue = [];
            ++depth;
            for (let i = 0; i < queue.length; i++) {
                const [y, x] = queue[i]
                if (arr[y][x] !== 0 && arr[y][x] < babySize) {return { depth:depth, currPos: [y, x] }}
                for (let j = 0; j < 4; j++) {
                    const [ny, nx] = [y + dy[j], x + dx[j]]
                    if (ny >= N || nx >= N || ny < 0 || nx < 0) continue
                    if (visited[`${ny}${nx}`]) continue
                    if (arr[ny][nx] > babySize) continue
                    
                    visited[`${ny}${nx}`] = true
                    tempQueue.push([ny, nx])
                }
            }
            queue = [...tempQueue.sort((a, b) => {
                if(a[0] === b[0]){
                    return a[1] - b[1]
                }
                return a[0] - b[0]
            })]
        }

        return false
    }

    let check = true
    let cnt = 0;
    let size = 2
    
    while (check){
        check = bfs(currBaby,size)
        cnt++
        if(typeof check === "object"){
            result += check.depth
            currBaby = check.currPos
            arr[currBaby[0]][currBaby[1]] = 0
            if(cnt === size){
                cnt = 0
                ++size
            }

        }
    }

    console.log(result)
}