
const { SourceMap } = require("module");
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


const DP = [];

function binoCoef(N, K){
    // r이 n보다 큰 경우의 수는 0이다.
    if (K > N)
        return 0;
   
    // n개에서 0개를 선택하는 경우의 수와 n개에서 r개를 선택하는 경우의 수는 1이다.
    if (K == 0 || K== N)
        return 1;
    
    // nCr = n-1Cr + n-1Cr-1

    return binoCoef(N - 1, K - 1) + binoCoef(N - 1, K);
}

function main(input) {
    const [N, K] = input[0].split(" ").map(Number);

    console.log(binoCoef(N, K))

}
