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
    const [N, M] = input[0].split(' ').map(Number);
    const map = {}
    const result = []

    for(let i = 1; i < N + M ; i ++){
        if(i > N){
            if(map[input[i]]){
                result.push(input[i])
            }
        }else{
            map[input[i]] = true
        }
    }


    console.log(`${result.length}\n${result.sort().join('\n')}`)

}




