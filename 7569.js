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
    const [M, N, H] = input.shift().split(' ').map(Number)
    let totalTomato = N * M * H
    let goodTomato = 0
    let goodTomatoList = []

    arr = input.map((val, y) => val.split(' ').map((state, x) => {
        const ret = +state
        if (ret === -1) {
            totalTomato--
        }
        if (ret === 1) {
            goodTomatoList.push([y, x])
            goodTomato++;
        }
        return ret
    }))

    const dy = [0, 0, 1, -1, N, -N]
    const dx = [1, -1, 0, 0, 0, 0]
    let result = 0;

    let newTomatoSet = []
    while (1) {
        goodTomatoList.forEach(([y, x],i) => {
            for (let i = 0; i < 6; i++) {
                const [ny, nx] = [y + dy[i], x + dx[i]]
                if (i === 2 && y % N === N - 1) {
                    continue
                }
                if (i === 3 && y % N === 0) {
                    continue
                }
                if (
                    ny < 0 ||
                    nx < 0 ||
                    ny >= N * H ||
                    nx >= M ||
                    arr[ny][nx] !== 0
                ) {
                    continue
                }
                newTomatoSet.push([ny,nx]);
                arr[ny][nx] = 1;
            }
        })

        if(newTomatoSet.length === 0){
            break;
        }

        result++;
        goodTomato += newTomatoSet.length;
        goodTomatoList = [...newTomatoSet]
        newTomatoSet = [];
    }
    console.log(totalTomato === goodTomato ? result : -1 )
}
