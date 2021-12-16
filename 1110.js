const fs = require('fs');
let input  = fs.readFileSync('/dev/stdin').toString().split('\n');
let temp = Number(input[0]);
let i = 0;

do{
    let ten = Math.floor(temp / 10);
    let one = temp % 10;
    let sum = ten + one;

    temp = one * 10 + (sum % 10);
    i++;
}
while(temp === Number(input[0]));

console.log(i);