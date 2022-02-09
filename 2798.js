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
    const [N, M] = input[0].split(' ').map(_ => +_);
    const nums = input[1].split(' ').map(_ => +_);

    let result = [];

    
    // 0 1 2
    // 0 1 3
    // 0 1 4
    // 0 2 3
    // 0 2 4
    // 0 3 4
    // 1 2 3
    // 1 2 4
    // 2 3 4
    for (let i = 0; i < N - 2; i++) {
        for(let j = i + 1; j < N - 1; j++){
            for(let k = j + 1; k < N; k++){
                if(M >= nums[i] + nums[j] + nums[k])
                    result.push(nums[i] + nums[j] + nums[k]);
            }
        }
    }

    console.log(Math.max(...result));
}
