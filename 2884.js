const fs = require('fs');
let [a, b]  = fs.readFileSync('/dev/stdin').toString().split(' ').map(n => parseInt(n))

function check(x , y){
    let min = y - 45;
    if(min < 0){
        if(x === 0){
            return console.log('23 '+(60 + min));
        }else{
            return console.log((x - 1) + ' ' + (60 + min))
        }
    }else{
        return console.log(x + " " + min)
    }
}

check(a,b);