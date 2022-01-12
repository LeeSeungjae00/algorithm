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
    const [N, M] = input[0].split(' ').map(_ => +_);
    const visitQueue = [N];
    let tempQueue = [];
    let queue = [N];
    let result = 0;
    let current
    
    while(queue.indexOf(M) === -1){
        current = queue.pop();
        if(current + 1 <= 100000 && visitQueue[current + 1] !== false&& current < M){
            visitQueue[current + 1] = false;
            tempQueue.push(current + 1);
        }
        if(current * 2 <= 100000 && visitQueue[current * 2] !== false && current < M){
            visitQueue[current * 2] = false;
            tempQueue.push(current * 2);
        }
        if(current - 1 >= 0 && visitQueue[current - 1] !== false){
            visitQueue[current - 1] = false;
            tempQueue.push(current - 1);
        }
        if(queue.length === 0){
            queue = [...tempQueue];
            tempQueue = [];
            ++result
        }
        
    }
    console.log(result);
}