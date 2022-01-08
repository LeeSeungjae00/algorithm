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

let checkArr = []


function main(input){
    const [M ,N] = input[0].split(' ');
    const arr = Array.from(Array(+N+1).keys());
    let result = ''

    for(let i = 2 ; i <= Math.sqrt(Number(N)); i++){
        if(arr[i] !== false){
            for(let j = i * i; j <= N ; j += i){
                arr[j] = false;
            }
        }
    }
    arr.splice(0,2,false,false)

    for(let i = Number(M) ; i <= Number(N); i++){
        if(arr[i]){
            result += `${arr[i]}\n`
        }
    }
    console.log(result)
}

