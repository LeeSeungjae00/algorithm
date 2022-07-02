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

    console.log(edges, graph)

}




