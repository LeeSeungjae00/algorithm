const fs = require('fs');
let input  = fs.readFileSync('/dev/stdin').toString().split('\n');

const [N , X] = input[0].split(' ');
const nums = input[1].split(' ');
let answer = ""

nums.forEach(num => {
    if(Number(num) > X) answer += (num + " ");
});



