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
    const [T, ...testCases] = input;
    for (let i = 0; i < T; i++){

        const [start, end] = testCases[i].split(' ').map(_ => +_);
        if(Math.sqrt(end - start) % 1 === 0){
            console.log(2 * Math.sqrt(end-start) - 1);
            continue;
        }else{
            bigPow = Math.pow(Math.ceil(Math.sqrt(end-start)), 2);
            smallPow = Math.pow(Math.ceil(Math.sqrt(end-start)) - 1, 2) + 1;
            if((bigPow+smallPow) / 2 <= end-start){
                console.log(2 * Math.ceil(Math.sqrt(end-start)) - 1);
                continue;
            }else{
                console.log(2 * Math.ceil(Math.sqrt(end-start)) - 2);
                continue;
            }
        }
    }

}

// 1 1 -> 1 번

// 2 1 1 -> 2번

// 3 1 1 1 -> 3번
// 4 1 2 1 -> 3번 2 + 1

// 5 1 2 1 1 -> 4번
// 6 1 2 2 1 -> 4번
// 7 1 2 3 2 1 -> 5번
// 8 1 2 2 2 1 -> 5번
// 9 1 2 3 2 1 -> 5번 3 + 2

// 10 1 2 2 2 2 1 -> 6번
// 11 1 2 3 2 2 1 -> 6번
// 12 1 2 3 3 2 1 -> 6번
// 13 1 2 3 3 2 1 1	-> 7번
// 14 1 2 3 3 2 2 1	-> 7번
// 15 1 2 3 3 3 2 1	-> 7번
// 16 1 2 3 4 3 2 1	-> 7번 4 + 3

// 17 1 2 3 4 3 2 1 1 -> 8번
// 18 1 2 3 4 4 3 2 1 -> 8번
// 19 1 2 3 4 4 3 2 1 -> 8번
// 20 -> 8
// 21 -> 9
// 22 -> 9
// 23 -> 9
// 24 -> 9
// 25 -> 9


// 