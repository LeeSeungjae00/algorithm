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

function sliceNum(n){
    const xxxx = Math.floor(n / 1000);
    const xxx = Math.floor(n / 100);
    const xx = Math.floor(n / 10);
    const x = n % 10;

    return [xxxx, xxx, xx, x]
}

function main(input) {
    const T = +input.shift()

    
    const result = [];
    
    function bfs([start, end]){
        let queue = [start];
        const visitied = {
            [start] : ""
        };
        while(1){
            const newCmd = [];
            for(let i = 0; i < queue.length; i++){
                let n = queue[i]
                let cmd = visitied[n]
                let D = n * 2 % 10000
                if(D === end) return cmd + "D"
                if(!visitied[D]){
                    newCmd.push(D)
                    visitied[D] = cmd + "D"
                }

                let S = n === 0 ? 9999 : n - 1
                if(S === end) return cmd + "S"
                if(!visitied[S]){
                    newCmd.push(S)
                    visitied[S] = cmd + "S"
                }

                let L = ((n % 1000) * 10) + Math.floor(n / 1000)
                if(L === end) return cmd + "L" 
                if(!visitied[L]){
                    newCmd.push(L)
                    visitied[L] = cmd + "L"
                }

                let R = Math.floor(n / 10) + (n % 10) * 1000
                if(R === end) return cmd + "R"     
                if(!visitied[R]){
                    newCmd.push(R)
                    visitied[R] = cmd + "R"
                }  
            }

            queue = [...newCmd]
            
        }
    }

    for(let i = 0; i < T; i++){
        result.push(bfs(input[i].split(' ').map(Number)))
    }

    console.log(result.join('\n'))
}
