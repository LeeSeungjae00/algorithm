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
    let [N, ...pattern] = input;

    pattern = pattern.map(val => [...val]);

    const result = [];

    if(+N <= 1){
        console.log(pattern[0].join(""))
        return;
    }

    for(let i = 0 ; i < pattern[0].length; i++){
        let flag = true;
        for(let j = 0; j < N - 1; j++){
            if(pattern[j][i] !== pattern[j + 1][i]){
                flag = false;
                break;
            }
        }
        if(flag){
            result.push(pattern[1][i]);
        }else{
            result.push("?");
        }
        
    }

    console.log(result.join(""))
}
