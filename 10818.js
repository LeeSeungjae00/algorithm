const fs = require('fs');
let [, input]  = fs.readFileSync('/dev/stdin').toString().split('\n')
let data = input.split(' ');

console.log(Math.min(...data) + " " + Math.max(...data))
