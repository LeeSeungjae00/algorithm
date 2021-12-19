const fs = require('fs');
let input  = fs.readFileSync('/dev/stdin').toString().split('\n');
let max = Math.max(...input).toString();

console.log(`${Math.max(...input)} ${input.indexOf(max) + 1}`)
