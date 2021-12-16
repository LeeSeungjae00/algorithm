//첫째 줄에 A+B, 둘째 줄에 A-B, 셋째 줄에 A*B, 넷째 줄에 A/B, 다섯째 줄에 A%B를 출력한다.
const fs = require('fs');
let [a , b]  = fs.readFileSync('/dev/stdin').toString().split('\n').map(n => parseInt(n))
let hun = parseInt(b / 100) * a;
let ten = parseInt((b % 100) / 10) * a;
let one = b % 10 * a;

console.log(one);
console.log(ten);
console.log(hun);

console.log(hun * 100 + ten * 10 + one)