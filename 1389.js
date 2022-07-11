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
    const [N,M] = input.shift().split(" ").map(Number)

    const graph = [...Array(N)].map(() => [...Array(N)].fill(Infinity))

    input.forEach(inp => {
        const [x, y] = inp.split(' ').map(Number)

        graph[x - 1][y - 1] = 1;
        graph[y - 1][x - 1] = 1;
    });


    for(let k = 0; k < N ; k++){
        for(let i = 0; i < N ; i++){
            for(let j = 0; j < N ; j++){
                if(i == j){
                    graph[i][j] = 0;
                    continue
                }
                if(graph[i][j] > graph[i][k] + graph[k][j]){
                    graph[i][j] = graph[i][k] + graph[k][j]
                }
            }
        }
    }

    let bacun = graph.map((val) => val.reduce((pre,curr) => pre + curr, 0));

    
    console.log(bacun.indexOf(Math.min.apply(null, bacun)) + 1);

}