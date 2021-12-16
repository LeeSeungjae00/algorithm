const fs = require('fs');
let input  = fs.readFileSync('/dev/stdin').toString().split('\n')
let i = 0;

while(input[i] !== "0 0"){
    const [a , b] = input[i].split(' ');
    console.log(Number(a) + Number(b));
}

console.log(answer);
