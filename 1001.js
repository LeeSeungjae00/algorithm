const fs = require('fs');
fs.readFileSync('/dev/stdin').toString().split('\n').map((val, index) => {
    if(index !== 0) {
        let [a , b] = val.split(' ');
        console.log(Number(a) + Number(b))
    }
});