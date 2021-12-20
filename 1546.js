let [length , inputStr] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const input = inputStr.split(' ').map(val => Number(val));
const MAX = Math.max(...input);

const total = input.reduce((pre, curr) => pre + (curr / MAX * 100), 0);

console.log((total/length))