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
    const [N, M, V] = input.shift().split(' ').map(Number);
    const edges = input.map(v => v.split(' ').map(Number));
    const graph = [...Array(N + 1)].map(() => []);
    edges.forEach(([from, to]) => {
        graph[from].push(to);
        graph[to].push(from);
    });

    graph.forEach((arr) => {
        arr.sort((a, b) => b - a)
    })

    dfs(V, graph)
    bfs(V, graph)

}

function dfs(start, graph) {
    graph.forEach((arr) => {
        arr.sort((a, b) => b - a)
    })
    const visited = [...Array(graph.length)].fill(0);
    const queue = [];
    const result = [];
    queue.push(start);

    while (queue.length) {
        let node = queue.pop();
        if (!visited[node]) {
            visited[node] = 1;
            result.push(node);
            graph[node].forEach((val) => {
                queue.push(val);
            })
        }

    }
    console.log(result.join(' '))
}

function bfs(start, graph) {
    graph.forEach((arr) => {
        arr.sort((a, b) => a - b)
    })
    const visited = [...Array(graph.length)].fill(0);
    const queue = [];
    const result = [];
    queue.push(start);

    while (queue.length) {
        let node = queue.shift();
        if (!visited[node]) {
            visited[node] = 1;
            result.push(node);
            graph[node].forEach((val) => {
                queue.push(val);
            })
        }

    }
    console.log(result.join(' '))
}
