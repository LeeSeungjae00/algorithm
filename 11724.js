const { groupEnd } = require("console");
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
    const graph = new Array(N + 1).fill(0).map((() => []))
    let result = 0

    function dfs(start) {
        const queue = []
        queue.push(start)

        while (queue.length !== 0) {
            const node = queue.pop();
            visited[node] = true;

            for (let i = 0; i < graph[node].length; i++) {
                if(!visited[graph[node][i]]){
                    queue.push(graph[node][i])
                }
            }

        }
    }

    input.forEach(val => {
        const [to, from] = val.split(' ').map(Number)

        graph[to].push(from)
        graph[from].push(to)
    })

    const visited = new Array(N + 1).fill(false);

    for (let i = 1; i <= N; i++) {
        if (!visited[i]) {
            ++result
            dfs(i)
        }
    }

    console.log(result)

}