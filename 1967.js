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
    const graph = new Array(N + 1).fill(0).map(() => [])
    let start
    input.map((str) => {
        const [from, to, cost] = str.split(' ').map(Number)
        graph[from].push({ to, cost })
        graph[to].push({ to: from, cost })
        start = from
    })

    if(N === 1){
        console.log(0)
        return;
    }

    function dfs(start) {
        const queue = [start];
        const visited = [];
        const gVisited = {};

        visited[start] = 0;

        while (queue.length !== 0) {
            const data = queue.pop()
            for (let i = 0; i < graph[data].length; i++) {
                const { to, cost } = graph[data][i]
                if (!gVisited[`${to}${data}`] && !gVisited[`${data}${to}`]) {
                    queue.push(to)
                    visited[to] = visited[data] + cost;
                    gVisited[`${to}${data}`] = true
                }
            }
        }

        let max = Math.max(...visited.filter(val => typeof val === 'number'))
        let node = visited.indexOf(max)

        return { max, node }
    }

    let { node } = dfs(start)
    let { max } = dfs(node)

    console.log(max)
}   