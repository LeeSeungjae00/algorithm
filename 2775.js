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
    // 0 : k 층, 1 : n 호

    //1 5 15 35 70 121 200 - 3층
    //1 4 10 20 35 51 79 - 2층
    //1 3 6 10 15 21 28 - 1층
    //1 2 3 4 5 6 7 - 0층d .
    

    for (let i = 0; i < testCases.length; i += 2) {
        let k = +testCases[i];
        let n = +testCases[i + 1];
        let temp = [];
        for(let i = 0; i < n; i++){
            temp[i] = i + 1;
        }

        for(let j = 0; j < k; j++){
            for(let l = 1; l < n; l++){
                temp[l] = temp[l - 1] + temp[l];
            }
        }
        console.log(temp.pop());
    }

}