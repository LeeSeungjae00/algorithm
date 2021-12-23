

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

function main(inp) {
    let [length , ...input] = inp;
    for (let i = 0; i < length * 2; i+= 2) {
        // N 문서의 갯수 M Q-index
        const [N ,M] = input[i].split(' ');
        const Q = input[i + 1].split(' ').map((val, index) => [index , Number(val)]);
        let result = 0;
        while(true){
            if(Q[0][1] === Math.max(...(Q.map(val => val[1])))){
                ++result;
                if(Q[0][0] === Number(M)){
                    console.log(result);
                    break;
                }else{
                    Q.shift();
                }
            }else{
                Q.push(Q.shift());
            }
        }
    } 
}