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


function main(input){
    let [N, K] = input[0].split(" ").map(Number);

    const circleList = new Array(N).fill(0).map((val, index) => index + 1);

    const result = [];

    K = K - 1;
    
    let step = 0; 

    while(result.length < N){
        step = (step + K) % circleList.length;
        result.push(circleList.splice(step,1));
       
         
    }


    console.log(`<${result.join(", ")}>`)
}