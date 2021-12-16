//첫째 줄에 A+B, 둘째 줄에 A-B, 셋째 줄에 A*B, 넷째 줄에 A/B, 다섯째 줄에 A%B를 출력한다.
const fs = require('fs');
let [a , b]  = fs.readFileSync('/dev/stdin').toString().split(' ').map(n => parseInt(n))
console.log(a  + b);
console.log(a - b);
console.log(a * b);
console.log(Math.floor(a / b));
console.log(a % b);