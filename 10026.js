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
    let [N, ...space] = input;
    let spaceRG = space.map(str => str.split('').map(chr => chr === 'R' ? 'G' : chr))
    space = space.map(str => str.split(''))

    let count = 0;
    let result = '';

    let queue = []
    let visit = []


    for (let i = 0; i < N; i++) {
        for (let j = 0; j < N; j++) {
            if (typeof space[i][j] !== 'number') {
                
                queue.push({x : i , y : j})
                while (queue.length > 0) {
                    const { x, y } = queue.pop();
                    visit.push({ x, y });

                    
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
    }

    result = count + " ";
    count = 0;


    for (let i = 0; i < N; i++) {
        for (let j = 0; j < N; j++) {
            if (typeof spaceRG[i][j] !== 'number') {
                
                queue.push({x : i , y : j})
                while (queue.length > 0) {
                    const { x, y } = queue.pop();
                    visit.push({ x, y });

                    
                    if (x - 1 >= 0) {
                        if (spaceRG[x][y] === spaceRG[x - 1][y] && typeof spaceRG[x - 1][y] !== 'number') {
                            queue.push({ x: x - 1, y });
                        }
                    }
                    if (x + 1 < N) {
                        if (spaceRG[x][y] === spaceRG[x + 1][y] && typeof spaceRG[x + 1][y] !== 'number') {
                            queue.push({ x: x + 1, y });
                        }
                    }
                    if (y - 1 >= 0) {
                        if (spaceRG[x][y] === spaceRG[x][y - 1] && typeof spaceRG[x][y - 1] !== 'number') {
                            queue.push({ x, y: y - 1 });
                        }
                    }
                    if (y + 1 < N) {
                        if (spaceRG[x][y] === spaceRG[x][y + 1] && typeof spaceRG[x][y + 1] !== 'number') {
                            queue.push({ x, y: y + 1 });
                        }
                    }
                    spaceRG[x][y] = count;
                }
                ++count;
            }
        }
    }

    result += count;



    console.log(result);
}