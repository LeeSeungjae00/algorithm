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
    const N = +input[0]
    const arr = new Array(N).fill(0).map(() => new Array(N).fill(Infinity))

    for (let i = 0; i < input[1]; i++) {
        const [from, to, cost] = input[i + 2].split(' ').map(Number)
        if(arr[from - 1][to - 1] > cost){
            arr[from - 1][to - 1] = cost
        }      
    }


    for (let i = 0; i < N; i++) {
        //거 i
        for (let j = 0; j < N; j++) {
            //출 j
            for (let k = 0; k < N; k++) {
                //도 k
                if(j === k){
                    arr[j][k] = 0
                    continue
                }
                if(arr[j][k] > arr[j][i] + arr[i][k]){
                    arr[j][k] = arr[j][i] + arr[i][k]
                }
                
            }
            
        }
    }

    console.log(
        arr.map(ar => ar.
            map(val => {
                if(val === Infinity) return 0
                return val
            }).join(' ')
            ).join('\n'))

}