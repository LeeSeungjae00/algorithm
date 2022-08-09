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
    const graph = []
    input.forEach(element => {
        const [from, to] = element.split(' ').map(Number)
        graph[from] = to
    });


    function bfs() {
        let queue = [1];
        let tempqueue = [];
        let depth = 0;
        let visited = [true, true]

        while (1) {
            depth++
            while (queue.length !== 0) {
                let node = queue.pop()
                for (let i = 1; i <= 6; i++) {
                    if (graph[i + node] === 100 || node + i == 100) return depth;
                    if (graph[i + node]) {
                        tempqueue.push(graph[i + node])
                    }
                    else if (!visited[i + node]) {
                        tempqueue.push(node + i)
                        visited[node + i] = true
                    }
                }

            }
            queue = [...tempqueue]
            tempqueue = []
        }

    }

    console.log(bfs())
}