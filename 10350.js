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
    const N = +input[0];
    const nums = input[1].split(" ").map(Number);


    let sum = 0;
    let result = 0;
    for(let i=0;i<N;i++){
        sum += nums[i]
        nums[i+N] = nums[i]
    }
    for(let i=0; i<N;i++){
        let val = 0;
        for(j=i;j < i + N;j++){
            val += nums[j];
            if(val < 0){
                result += (val*-1-1) / sum+1
            }
        }
    }

    console.log(result)
}