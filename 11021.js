const fs = require('fs');
let input  = fs.readFileSync('/dev/stdin').toString().split('\n');

let answer = '';

for(let i = 1 ; i <= Number(input[0]); i ++){
    let [a, b] = input[i].split(' ');
    answer += `Case #${i}: ${a} + ${b} = ${Number(a) + Number(b)}\n`
}

console.log(answer)