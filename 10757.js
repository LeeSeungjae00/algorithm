const fs = require('fs'); 
const input = fs.readFileSync("/dev/stdin").toString().trim().split(" ").map(BigInt); 
const first = input[0]; const second = input[1]; 
const answer = (first + second).toString();
console.log(answer);