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
    const V = +input.shift()
    const graph = []

    input.forEach((str, idx) => {
        const arr = str.split(' ')
        graph[arr[0]] = []

        for (let i = 1; i < arr.length - 1; i += 2) {
            graph[arr[0]].push({ to: +arr[i], cost: +arr[i + 1] })
        }
    });


    function dfs(start) {
        const queue = [start]
        const visited = []
        visited[start] = 0
        const gVisited = {};

        while (queue.length !== 0) {
            const node = queue.pop()
            if (graph[node]) {
                for (let i = 0; i < graph[node].length; i++) {
                    const next = graph[node][i];
                    if (!gVisited[`${node}${next.to}`] && !gVisited[`${next.to}${node}`]) {
                        queue.push(next.to)
                        visited[next.to] = visited[node] + next.cost
                        gVisited[`${node}${next.to}`] = true
                    }
                }
            }
        }

        let max = Math.max(...visited.filter(val => typeof val === 'number'))
        let idx = visited.indexOf(max)


        return { max, idx }
    }


    let data = dfs(input[0].split(' ')[0])
    data = dfs(data.idx)


    console.log(data.max)


}   