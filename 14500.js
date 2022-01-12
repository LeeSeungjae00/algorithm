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

const resultArr = [];
const visit = [];
const queue = [{ x: 0, y: 0 }];

function main(input) {
    let [NM, ...square] = input
    const [N, M] = NM.split(' ');
    square = square.map(_ => _.split(' '));


    for (let i = 0; i < N; i++) {
        for (let j = 0; j < M; j++) {
            queue.push({ x: i, y: j })
            let depth = 0;
            while (queue.length > 0) {
                const { x, y } = queue.pop();
                visit.push({x , y});

                if (x - 1 >= 0) {
                    if (space[x][y] === space[x - 1][y] && typeof space[x - 1][y] !== 'number') {
                        queue.push({ x: x - 1, y });
                    }
                }
                if (x + 1 < N) {
                    if (space[x][y] === space[x + 1][y] && typeof space[x + 1][y] !== 'number') {
                        queue.push({ x: x + 1, y });
                    }
                }
                if (y - 1 >= 0) {
                    if (space[x][y] === space[x][y - 1] && typeof space[x][y - 1] !== 'number') {
                        queue.push({ x, y: y - 1 });
                    }
                }
                if (y + 1 < N) {
                    if (space[x][y] === space[x][y + 1] && typeof space[x][y + 1] !== 'number') {
                        queue.push({ x, y: y + 1 });
                    }
                }
                space[x][y] = count;
            }
            ++count;
        }
    }


    console.log(N, M, square);
}