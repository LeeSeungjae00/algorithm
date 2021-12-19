const fs = require('fs');
let [A , B, C]  = fs.readFileSync('/dev/stdin').toString().split('\n');
const str = (A * B * C).toString();
let arr = [0,0,0,0,0,0,0,0,0,0];
str.split('').forEach(val => ++arr[Number(val)])

arr.forEach(a => console.log(a))