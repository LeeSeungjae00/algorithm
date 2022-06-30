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


function madeEmptyArray(x, y) {
    let arr = new Array(x).fill(0);

    for (let i = 0; i < arr.length; i++) {
        arr[i] = new Array(y).fill(0);
    }

    return arr
}

function main(input) {
    const [T, ...testCases] = input;
    const result = []

    for (let i = 0; i < Number(T); i++) {
        const [M, N, K] = testCases[0].split(" ").map(Number)
        const ground = madeEmptyArray(M, N);

        for (let j = 1; j <= K; j++) {
            const [x, y] = testCases[j].split(" ").map(Number)
            ground[x][y] = 1;
        }


        const visited = madeEmptyArray(M, N);
        let count = 0;
        const queue = [];

        ground.forEach((arr, xIndex) => {
            arr.forEach((val, yIndex) => {
                if (!visited[xIndex][yIndex] && val === 1) {
                    queue.push([xIndex, yIndex]);

                    while (queue.length !== 0) {
                        const nowNode = queue.pop();
                        visited[nowNode[0]][nowNode[1]] = 1;

                        if (nowNode[1] + 1 < arr.length && !visited[nowNode[0]][nowNode[1] + 1] && ground[nowNode[0]][nowNode[1] + 1] === 1) {
                            queue.push([nowNode[0], nowNode[1] + 1])
                        }
                        if (nowNode[0] + 1 < ground.length && !visited[nowNode[0] + 1][nowNode[1]] && ground[nowNode[0] + 1][nowNode[1]] === 1) {
                            queue.push([nowNode[0] + 1, nowNode[1]])
                        }
                        if (nowNode[1] - 1 >= 0 && !visited[nowNode[0]][nowNode[1] - 1] && ground[nowNode[0]][nowNode[1] - 1] === 1) {
                            queue.push([nowNode[0], nowNode[1] - 1])
                        }
                        if (nowNode[0] - 1 >= 0 && !visited[nowNode[0] - 1][nowNode[1]] && ground[nowNode[0] - 1][nowNode[1]] === 1) {
                            queue.push([nowNode[0] - 1, nowNode[1]])
                        }
                    }

                    ++count;
                }
            })
        })

        result.push(count)


        testCases.splice(0, K + 1);

    }

    console.log(result.join('\n'))
}