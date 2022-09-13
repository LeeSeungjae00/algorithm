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
    let indexMap = {}
    const inOrder = input.shift().split(' ').map((val, i) => { 
        indexMap[val] = i
        return val
    })
    const postOrder = input.shift().split(' ')
    const graph = [];

    function tree(start, len) {
        if(start + len < 0) return
        if(len < 0) return
        if(len === 0){
            graph.push(postOrder[start + len])
            return
        } 
        if(len === 1){
            graph.push(postOrder[start + 1])
            graph.push(postOrder[start ])
            return
        } 
        let startIndex = indexMap[postOrder[start]]
        if(!startIndex) startIndex = 0
        let index = indexMap[postOrder[start + len]]
        graph.push(postOrder[start + len])

        tree(start, index - startIndex - 1);
        tree(start + index - startIndex, len + startIndex - index - 1)
    }

    tree(0, n- 1)
    console.log(graph.join(' '))

}
