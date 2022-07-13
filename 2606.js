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

function dfs(N, arr) {
    const visited = new Array(N + 1).fill(false)
    const queue = [];
    let result = -1

    queue.push(1)

    while (queue.length !== 0) {
        const val = queue.pop();
        if (!visited[val]) {
            visited[val] = true
            ++result;

            for (let i = 0; i < arr[val].length; i++) {
                queue.push(arr[val][i])
            }
        }
    }

    return result

}

function main(input) {


    const com = +input.shift()
    const N = +input.shift()
    const graph = (new Array(com + 1).fill(0).map(() => []));


    input.forEach(element => {
        const [from, to] = element.split(' ').map(Number)
        graph[from].push(to)
        graph[to].push(from)
    });


    console.log(dfs(com, graph))

}