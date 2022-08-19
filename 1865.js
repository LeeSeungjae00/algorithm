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
    const T = +input.shift()

    let inputTemp = 0
    for (let i = 0; i < T; i++) {
        const [N, M, W] = input[inputTemp].split(' ').map(Number)
        const dist = new Array(N + 1).fill(10001)
        ++inputTemp
        const graph = new Array(N + 1).fill().map(() => [])
        for (let j = 0; j < M; j++) {
            const [S, E, T] = input[inputTemp + j].split(' ').map(Number)
            graph[S].push({ vertex: E, cost: T })
            graph[E].push({ vertex: S, cost: T })
        }
        inputTemp += M
        for (let j = 0; j < W; j++) {
            const [S, E, T] = input[inputTemp + j].split(' ').map(Number)
            graph[S].push({ vertex: E, cost: T * -1 })
        }
        inputTemp += W


        for (let j = 0; j < N - 1; j++) {
            BF(1, graph, dist, false)
        }

        console.log(BF(1, graph, dist, true))



    }

    function BF(start, graph, dist, temp) {
        dist[start] = 0;
        for (let i = 1; i < graph.length; i++) {
            for (let j = 0; j < graph[i].length; j++) {
                let { vertex, cost } = graph[i][j];
                let data = cost + dist[i]
                if (data < dist[vertex]) {
                    if (temp) return "YES"
                    dist[vertex] = data
                }
            }

        }
        if (temp) return "NO"
    }


}   