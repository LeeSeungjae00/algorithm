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
    const n = Number(input.shift())
    const inOrder = input.shift().split(' ')
    const postOrder = input.shift().split(' ')
    const graph = [];

    function tree(start, end) {

        graph.push(postOrder[start + end])
        if (end <= 0) return
        const inRoot = inOrder.indexOf(postOrder[start + end])
        tree(start, inRoot - 1 - start)
        tree(inRoot - start + 1, end - inRoot - 1)
    }

    console.log(tree(0, n - 1), graph)

}

main(`6
5 2 4 1 6 3
5 4 2 6 3 1`.split('\n'))