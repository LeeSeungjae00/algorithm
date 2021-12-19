let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

let obj;
let count = 0;

input.forEach((val) => {
    let mod = val % 42;
    if(obj[mod] === undefined){
        ++count;
        obj[mod] = true;
    }
})

console.log(count);