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
    const N = +input.shift()
    const G = [];
    const visitied = new Array(N).fill(0).map(() => new Array(N).fill(0));

    function dfs(start){
        const queue = [...G[start]]
        
        while(queue.length !== 0){
            const data = queue.pop();
            visitied[start][data] = 1;
            if(G[data]){
                for(let i = 0 ;i < G[data].length; i++){
                    if(visitied[start][G[data][i]] === 0){
                        queue.push(G[data][i])
                    }
                }
            }
        }
    }

    input = input.map((str, i) => str.split(' ').map((val, j) => {
        if (val === "1") {
            if (!G[i]) {
                G[i] = []
            }
            G[i].push(j);
        }
        return +val
    }))

    for (let i = 0; i < N; i++) {
        if(G[i]) dfs(i)
    }



    console.log(visitied.map((val) => val.join(' ')).join('\n'))
}