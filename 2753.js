const fs = require('fs');
let [a]  = fs.readFileSync('/dev/stdin').toString().split('\n').map(n => parseInt(n))
if(a % 4 === 0 && (a % 100 !== 0 || a % 400 === 0)) console.log('1');
else console.log('0');